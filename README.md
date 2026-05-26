# Caledon CES RFP Partner Workspace Builder

Static GitHub Pages workspace for collecting partner inputs for the Caledon CES
RFP response process.

This public repository intentionally contains only the lightweight web form,
Google Apps Script receiver, and setup notes. Do not commit confidential pricing,
final proposal strategy, credentials, private bid files, or live partner
documents here.

## Files

- `index.html` - browser-based partner workspace request form.
- `apps-script/Code.gs` - Google Apps Script web app endpoint handler.
- `docs/google-sheets-setup.md` - setup steps for the backing Google Sheet and
  Apps Script deployment.

## GitHub Pages

Enable Pages from:

Settings -> Pages -> Source: Deploy from branch -> Branch: `main` -> Folder:
`/root` -> Save

Expected URL:

https://thespryguy.github.io/caledon-ces-rfp-builder/
