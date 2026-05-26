# Google Sheets Setup

Use these steps to connect the GitHub Pages form to a Google Sheet through
Google Apps Script.

## 1. Create the Sheet

1. Create a new Google Sheet for Caledon CES RFP partner workspace requests.
2. Rename the first tab to `Workspace Requests`.
3. Do not store confidential pricing, final proposal strategy, credentials, or
   private bid files in this public intake flow.

## 2. Add Apps Script

1. In the Sheet, open Extensions -> Apps Script.
2. Replace the default script with `apps-script/Code.gs` from this repository.
3. Save the project.

The script uses the active spreadsheet and writes submissions to the
`Workspace Requests` sheet.

## 3. Deploy The Web App

1. Select Deploy -> New deployment.
2. Choose Web app.
3. Set "Execute as" to the script owner.
4. Set access to the intended submission audience.
5. Deploy and authorize the script.
6. Copy the `/exec` web app URL.

The current `index.html` is configured with:

```js
const SUBMISSION_ENDPOINT = "https://script.google.com/macros/s/AKfycbymAXZnRnwLNCDCCzfWmUvbTX57_-z2i4GOBOPAAYlbwPupDARLpzCr2uB4VaLyp6ZM/exec";
```

## 4. Smoke Test

1. Open the GitHub Pages site.
2. Submit a non-confidential test request.
3. Confirm a new row appears in the Google Sheet.
4. Delete the test row if it is no longer needed.
