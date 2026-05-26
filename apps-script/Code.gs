const SHEET_NAME = 'Submissions';
const HEADERS = [
  'receivedAt',
  'submissionId',
  'workspaceVersion',
  'reviewerName',
  'reviewerEmail',
  'organization',
  'role',
  'submissionStatus',
  'notes',
  'selectedRole',
  'submittedAt',
  'payloadHash',
  'fullJsonPayload',
];

function doGet() {
  return json_({
    success: true,
    message: 'Caledon CES RFP submission endpoint is live.',
  });
}

function doPost(e) {
  const payload = parsePayload_(e);
  const sheet = getSheet_();
  ensureHeader_(sheet);

  const submissionId = payload.submissionId || `CES-${Date.now()}`;
  const jsonPayload = JSON.stringify(payload);
  const payloadHash = Utilities.base64Encode(
    Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, jsonPayload)
  );

  sheet.appendRow([
    new Date().toISOString(),
    submissionId,
    payload.workspaceVersion || '',
    payload.reviewerName || payload.contactName || '',
    payload.reviewerEmail || payload.email || '',
    payload.organization || '',
    payload.role || payload.contributionArea || '',
    payload.submissionStatus || '',
    payload.notes || '',
    payload.selectedRole || '',
    payload.submittedAt || '',
    payloadHash,
    jsonPayload,
  ]);

  return json_({ success: true, submissionId });
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet) {
  const existing = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeader = existing.some(Boolean);
  if (!hasHeader) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    return;
  }

  const needsRefresh = HEADERS.some((header, index) => existing[index] !== header);
  if (needsRefresh) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }

  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    return { parseError: String(error), rawPayload: e.postData.contents };
  }
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
