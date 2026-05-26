const SHEET_NAME = 'Workspace Requests';

function doPost(e) {
  const sheet = getOrCreateSheet_();
  const payload = parsePayload_(e);
  const receivedAt = new Date();

  ensureHeader_(sheet);
  sheet.appendRow([
    receivedAt,
    payload.submittedAt || '',
    payload.organization || '',
    payload.contactName || '',
    payload.email || '',
    payload.phone || '',
    payload.contributionArea || '',
    payload.targetDate || '',
    payload.summary || '',
    payload.evidenceNeeded || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: 'caledon-ces-rfp-builder' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const existing = spreadsheet.getSheetByName(SHEET_NAME);
  return existing || spreadsheet.insertSheet(SHEET_NAME);
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }

  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    return {};
  }
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.appendRow([
    'Received At',
    'Submitted At',
    'Organization',
    'Primary Contact',
    'Email',
    'Phone',
    'Contribution Area',
    'Target Response Date',
    'Public-Safe Summary',
    'Evidence Or Follow-Up Needed',
  ]);
}
