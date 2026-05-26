# Google Sheets Setup

Use these steps to connect the GitHub Pages workspace to the Google Sheet through Google Apps Script.

## 1. Sheet

Create or confirm the backing Google Sheet:

- Sheet name: `Caledon CES RFP Partner Submissions`
- Sheet ID: `1Qu61T41ut8kbRrca7tcfOfmsk0BFjHm-FxeuM6jZP14`
- Tab name: `Submissions`

The expected header row is:

```text
receivedAt | submissionId | workspaceVersion | reviewerName | reviewerEmail | organization | role | submissionStatus | notes | selectedRole | submittedAt | payloadHash | fullJsonPayload
```

The Apps Script receiver will create or refresh this header row if needed.

## 2. Apps Script

1. Open the Sheet.
2. Select **Extensions -> Apps Script**.
3. Replace the default script with `apps-script/Code.gs` from this repository.
4. Save the project as `Caledon CES RFP Submission Receiver`.

## 3. Deploy the Web App

1. Select **Deploy -> New deployment**.
2. Choose **Web app**.
3. Set **Execute as** to the script owner.
4. Set access to the intended submission audience.
5. Deploy and authorize the script.
6. Copy the `/exec` web app URL.

Current deployment:

```text
Deployment ID: AKfycbymAXZnRnwLNCDCCzfWmUvbTX57_-z2i4GOBOPAAYlbwPupDARLpzCr2uB4VaLyp6ZM
Web app: https://script.google.com/macros/s/AKfycbymAXZnRnwLNCDCCzfWmUvbTX57_-z2i4GOBOPAAYlbwPupDARLpzCr2uB4VaLyp6ZM/exec
```

`index.html` must contain:

```js
const SUBMISSION_ENDPOINT = "https://script.google.com/macros/s/AKfycbymAXZnRnwLNCDCCzfWmUvbTX57_-z2i4GOBOPAAYlbwPupDARLpzCr2uB4VaLyp6ZM/exec";
```

## 4. Smoke Test

1. Open the GitHub Pages site.
2. Confirm there is no placeholder endpoint warning.
3. Confirm these workspace features are visible:
   - Submit to Coordinator
   - HCE, MIES, and Mantle Climate role lanes
   - Local save
   - JSON export/import
   - Five upload sections
   - Portal forms
   - QA checks
4. Submit one non-confidential HCE test.
5. Confirm a new row appears in the `Submissions` tab.
6. Delete the test row if it is no longer needed.

## 5. Public Repo Guardrails

This repository is public. Do not commit:

- confidential final pricing;
- final proposal strategy;
- credentials, tokens, or secrets;
- private bid files;
- restricted Town, utility, or partner documents.
