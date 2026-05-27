# Caledon CES RFP Partner Workspace Builder — Partner How-To Guide

**Audience:** HCE, MIES, Mantle Climate, and bid-team contributors  
**Workspace URL:** https://thespryguy.github.io/caledon-ces-rfp-builder/  
**Purpose:** Help each contributor provide clean, role-specific proposal input without overwriting anyone else’s work.

---

## 1. What this workspace is

The Partner Workspace Builder is a browser-based drafting tool for collecting partner inputs for the Caledon Community Energy Systems Study proposal.

Use it to:

- see what information is needed from your lane;
- draft or paste your contribution in the right section;
- flag gaps, assumptions, references, evidence needs, and review concerns;
- submit your input to the bid coordinator; and
- export a JSON backup of your work.

This is **not** the Town submission portal and it is **not** the final proposal document.

---

## 2. Privacy and procurement guardrails

Only enter information that is appropriate for the bid team to collect through this intake workflow.

Do **not** enter:

- final pricing or negotiated commercial strategy;
- credentials, access tokens, passwords, or private system links;
- confidential Town, utility, partner, or client documents;
- restricted infrastructure data;
- unapproved reference contacts; or
- final proposal language that has not been reviewed.

Private files should be shared only through the approved bid-team channel.

---

## 3. Will my work overwrite someone else’s?

No.

The workspace saves draft edits in your own browser using local storage. Your browser copy is separate from everyone else’s browser copy.

That means:

- your local edits stay with you;
- another partner’s edits stay with them;
- two people can use the same URL at the same time;
- no one changes your screen unless they use your computer/browser profile; and
- the shared record is created only when someone clicks **Submit to Coordinator**.

When you submit, the tool appends a new row to the Google Sheet. It does not overwrite previous rows.

---

## 4. Recommended workflow

### Step 1 — Open the workspace

Go to:

https://thespryguy.github.io/caledon-ces-rfp-builder/

Use a modern browser such as Chrome, Edge, or Safari.

### Step 2 — Select your role

On the Dashboard, choose your role card:

- **HCE** — prime, governance, implementation, utility coordination, operator lens.
- **MIES** — data, energy modelling, thermal/electric analysis, geospatial analysis.
- **Mantle Climate** — CES solutions, scenario analysis, climate policy, FCM/NZT alignment.
- **Bid / Commercial / Compliance** — portal forms, pricing controls, QA, upload readiness.
- **Show All** — full workspace view for the bid coordinator.

Selecting your role filters the workspace to the sections and inputs most relevant to you.

### Step 3 — Complete your assigned fields

Start with **My Focus**. This view shows your assigned sections, missing inputs, and likely next actions.

Then use:

- **Partner Workspaces** for role-specific content;
- **Five Upload Sections** for proposal section draft content;
- **Portal Forms** for reference, subcontractor, addenda, and legal-field support;
- **Pricing & Workshare** only if you have been asked to provide commercial inputs; and
- **QA / Readiness** to check for missing items and obvious issues.

### Step 4 — Save and export a backup

The page autosaves locally in your browser. You can also click **Save now**.

Before submitting, use **Export JSON Backup**. Save the file with a clear name, for example:

```text
MIES_Caledon_CES_Input_2026-05-27.json
Mantle_Caledon_CES_Input_2026-05-27.json
HCE_Caledon_CES_Input_2026-05-27.json
```

The JSON file is your portable backup if the browser cache is cleared or the bid coordinator asks for a manual import.

### Step 5 — Submit to Coordinator

Go to **Submit to Coordinator**.

Fill in:

- reviewer name;
- reviewer email;
- organization / partner company;
- submission role;
- submission status;
- notes to bid manager; and
- consent checkbox.

Then click **Submit to Coordinator**.

A successful submission creates a new row in the coordinator Google Sheet.

---

## 5. Navigation guide

### Dashboard

Use this as your starting point. It shows role cards, the submission panel, and critical blockers.

### My Focus

Best view for most contributors. It filters the workspace to your role and shows what is missing.

### Five Upload Sections

Organizes proposal-facing section drafts around the Caledon RFP upload structure:

1. Company Profile
2. References / Comparable Projects
3. Assigned Project Team
4. Approach and Methodology
5. Work Schedule

Do not include pricing in these five technical sections.

### Partner Workspaces

Use this for role-specific inputs, evidence, assumptions, gaps, and review notes.

### Portal Forms

Supports required e-bidding portal fields. It is not the final portal submission.

### Pricing & Workshare

Use this only if the bid coordinator asks you to provide commercial inputs. Do not place pricing in the five technical proposal sections.

### QA / Readiness

Use this before submitting to check missing references, subcontractor risk, pricing terms in technical sections, and unassigned risks.

### Compile & Export

Use this to export draft content or a JSON backup. Exports are draft artifacts and must be reviewed before any Town-facing upload.

### Submit to Coordinator

Use this when your input is ready for review. Each submission creates a new Sheet row.

### Backup / Import

Most contributors should use only **Export JSON Backup**. Do not use **Import JSON** unless the bid coordinator asks you to.

---

## 6. What each partner should focus on

### HCE

Focus on prime role, municipal operator lens, governance and ownership models, utility coordination, HCE Energy Harvesting evidence, implementation roadmap, final integration and QA, legal/proponent fields, and authority-to-bind information.

### MIES

Focus on data requirements, modelling assumptions, electricity and thermal demand analysis, hourly or seasonal demand profiles, GIS / geospatial energy analysis support, thermal demand clusters, carbon-free heat source analysis, district energy or thermal network screening support, and data gaps / accuracy implications.

### Mantle Climate

Focus on CES solutions overview, scenario analysis, climate-policy alignment, FCM/NZT alignment, grid constraints translated into local energy opportunities, DER, storage, microgrid, solar, waste heat, resilience framing, PESTLE support, and stakeholder engagement support.

### Bid / Commercial / Compliance

Focus on portal fields, pricing controls, subcontractor percentage check, references readiness, addenda tracking, no-pricing-in-technical QA, upload section readiness, and final packaging.

---

## 7. Submission status guidance

Use these statuses consistently:

- **Draft** — working input; okay to be incomplete.
- **Partner Review** — ready for internal partner review but not bid-team ready.
- **Ready for QA** — ready for bid manager review and integration.
- **Final Input** — final from the partner’s perspective, subject to proposal integration and compliance review.

---

## 8. What to put in “Notes to bid manager”

Use the notes box to flag anything the bid coordinator should know.

Good examples:

- “Reference contact still requires permission to cite.”
- “Cost assumptions not included; commercial input to follow separately.”
- “This methodology assumes Hydro One data access through the Town.”
- “MIES can support thermal modelling but final GIS platform owner remains HCE/TBC.”
- “Mantle wording is policy-level and should not be presented as a project endorsement.”

Avoid vague notes such as “see above” or “done.”

---

## 9. Troubleshooting

### I do not see my latest edits

You may be in a different browser, device, or profile. Local edits are browser-specific. Use your JSON backup to move work between browsers.

### I submitted but need to revise

Make the changes, update the status or add a note, and submit again. The Sheet will receive a new row. The bid coordinator will use the newest valid submission.

### The page looks stale

Hard-refresh the browser:

- Windows: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### I accidentally imported JSON

Stop editing and notify the bid coordinator. If needed, reset to defaults or re-import your own latest backup.

### I am not sure whether something is confidential

Do not enter it in the workspace. Flag it in the notes and coordinate through the approved private channel.

---

## 10. Message Glen can send to partners

```text
Please use the Caledon CES RFP Partner Workspace Builder to submit your non-confidential partner input.

URL:
https://thespryguy.github.io/caledon-ces-rfp-builder/

Instructions:
1. Open the link.
2. Select your role card: HCE, MIES, or Mantle Climate.
3. Review My Focus.
4. Complete your assigned Partner Workspace and relevant proposal section fields.
5. Do not enter final pricing, confidential strategy, credentials, private bid files, or restricted utility/Town data.
6. Export a JSON backup.
7. Go to Submit to Coordinator, complete the submission fields, check the consent box, and submit.

Your edits are local to your browser. Other partners cannot overwrite your page. The shared record is created only when you submit to the coordinator.
```

---

## 11. Final reminder

This workspace helps collect and organize bid-team inputs. It does not replace the formal procurement submission process. The final proposal must still be reviewed, packaged, and submitted through the official Town of Caledon e-bidding process by the authorized proponent.
