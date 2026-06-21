---
date: 2026-06-09
topic: OTG Excel Upload — Data Dictionary
status: Draft — confirm field scope with Pow Hwee before closing OTEP-192
owner: Michelle Yip
---

# OTG Excel Upload — Data Dictionary

## Purpose

This document defines every field OTEP reads from the OTG Excel export, how it maps to the OTEP opportunity schema, what valid values look like, and what happens when a field is missing or invalid.

**Governing rule (confirmed 2026-06-09, Pow Hwee):** Any record with a missing or unresolvable value in a required field is hard-skipped in full. No partial imports. The skip is logged with the row number and the field that failed.

---

## Opportunity Types Ingested

Only the following OTG types are ingested in MVP. All others are hard-skipped at the type-resolution step.

| Officer-facing label | OTG type prefix | Apply path |
|---|---|---|
| Internal Job | `IJ_` (confirm prefix with Léo) | FormSG redirect (`formsg_url`) |
| STIP | `STIP_` (confirm prefix with Léo) | FormSG redirect (`formsg_url`) |
| Gig | `GIG_` (confirm prefix with Léo) | FormSG redirect (`formsg_url`) |
| SJR | — | **Excluded from MVP ingestion** (decision 2026-05-21) |

Records with unrecognised type prefixes are also hard-skipped pending DevOps/DT fix at source (decision 2026-06-04).

---

## Field Dictionary

### Required fields — hard skip if missing or unresolvable

| # | OTEP DB field | Excel column (confirm with Léo) | Type | Valid values / format | Validation rule | Skip error message |
|---|---|---|---|---|---|---|
| 1 | `title` | Title / Opportunity Title | String | Non-empty text, max ~255 chars | Must be non-empty | `Row {n}: title is empty` |
| 2 | `agency_id` | Agency / Posting Agency | String → FK lookup | Must match a label in `ref_agency` table | Agency label must resolve to a known agency; case-insensitive match recommended | `Row {n}: agency "{value}" not found in ref_agency` |
| 3 | `opportunity_type_id` | Type / Opportunity Type | String → FK lookup | Must match a recognised OTG type prefix mapping to a known type in `ref_opportunity_type` | Type prefix must resolve; unrecognised prefixes hard-skip (2026-06-04) | `Row {n}: type prefix "{value}" not recognised` |
| 4 | `apply_url` (`formsg_url`) | FormSG URL / Apply URL | URL string | Valid, non-empty URL starting `https://form.gov.sg/` (confirm format with Léo) | Must be non-empty and parseable as a URL | `Row {n}: formsg_url is missing or invalid` |
| 5 | `description` | Description / Role Description | String | Non-empty text | Must be non-empty — detail page will not render without it | `Row {n}: description is empty` |
| 6 | `closing_date` | Closing Date / Application Close Date | Date or sentinel | Valid date (DD/MM/YYYY or Excel date serial), OR `"00/01/1900"` (OTG sentinel for evergreen — maps to `nil`) | `"00/01/1900"` → `nil` (valid, evergreen). Any other unparseable date string → hard skip. Empty → hard skip. | `Row {n}: closing_date "{value}" is not a valid date` |
| 7 | `posting_date` | Posting Date / Start Date | Date | Valid date (DD/MM/YYYY or Excel date serial) | Must be a parseable date | `Row {n}: posting_date "{value}" is not a valid date` |

**Note on `closing_date`:** `nil` (evergreen) is a valid ingested state, not a skip trigger. The listing visibility rule (`closing_date > today OR closing_date IS NULL`) handles evergreen records correctly. (Decision 2026-05-13.)

---

### Optional fields — import record with field null if missing

These fields are used on the detail page but their absence does not block ingestion. If missing in the Excel, the OTEP DB record stores `null` and the UI handles display accordingly.

> ⚠️ **Confirm with Pow Hwee:** The fields below are currently treated as optional. If Pow Hwee's "any missing field" rule extends to these, they move to the required set above and the UI detail page rules in OTEP-128 must be updated to remove the "hide if missing" logic.

| # | OTEP DB field | Excel column (confirm with Léo) | Type | Notes |
|---|---|---|---|---|
| 1 | `time_commitment_quantity` | Time Commitment (quantity) | Integer | e.g. `3` (for "3 months"). Paired with `time_commitment_unit`. Null if missing. |
| 2 | `time_commitment_unit` | Time Commitment (unit) | String | e.g. `months`, `weeks`, `days`. Null if missing. |
| 3 | `competencies` | Competencies / What You'll Develop | String or array | OTG competency data. Null if missing. Competency matching (OTEP-87) depends on this being present — but the record is still ingested without it. |
| 4 | `ministry_icon` / agency logo | — | Derived | Not in the Excel. Derived from `ref_agency` at query time. Not a skip condition. |

---

## Record Lifecycle After Ingest

| Event | Behaviour |
|---|---|
| New record (not previously in DB) | Inserted |
| Existing record (same opportunity ID, updated data) | Upserted — existing record overwritten with latest values |
| Record present in DB but absent from latest export | Auto-deactivated — hidden from listing, retained in DB (decision 2026-05-28) |
| Record with a required field missing or unresolvable | Hard-skipped — not inserted or updated; logged with row number and reason |

---

## Ingestion Run Log

Every upload run produces a summary log (OTEP-348):

```
Run: 2026-06-09 14:32
File: OTG_export_20260609.xlsx
Records read:     142
Inserted:          38
Updated:           91
Deactivated:        3
Skipped:           10
  - Row 12: agency "Ministry of Wellness" not found in ref_agency
  - Row 34: formsg_url is missing
  - Row 67: opportunity_type prefix "SJR_" excluded (SJRs not ingested in MVP)
  - Row 89: closing_date "31/02/2026" is not a valid date
  - ...
Errors:             0
```

Skipped rows do not abort the run. Errors (system-level, not data-level) are separate from skips.

---

## What the Upload UI Shows (OTEP-397)

| State | What the officer sees |
|---|---|
| Upload success, all rows clean | "Upload successful. 142 records imported." |
| Upload success, some rows skipped | "Upload complete. 132 records imported. 10 rows were skipped — see details below." + row-level list |
| File fails virus scan (CFT) | "File failed security scan and was rejected. Please upload a clean file." |
| File is not `.xlsx` | Browser-side rejection: "Only .xlsx files are supported" |
| Backend rejects file (400 — missing columns, empty sheet) | Backend error message surfaced verbatim |
| Server error (500) | "Something went wrong. Please try again." |

---

## Open Items Before Closing OTEP-192

| # | Question | Owner | Urgency |
|---|---|---|---|
| 1 | Confirm exact Excel column names for each required field | Léo + Michelle | Today |
| 2 | Confirm OTG type prefix strings for Internal Job, STIP, Gig | Léo | Today |
| 3 | Are competencies + time commitment required or optional? | Pow Hwee + Michelle | Before Thu Planning |
| 4 | Is `posting_date` a required field or optional? | Pow Hwee + Michelle | Before Thu Planning |
| 5 | `formsg_url` format — is `https://form.gov.sg/` the correct prefix to validate against? | Léo | Before OTEP-192 closes |
| 6 | OTEP-358 (nil-date spike) — are there other nil-date sentinels beyond `"00/01/1900"`? | Michelle (spike owner) | S4 |

---

*Written: 2026-06-09*
*Source decisions: 2026-05-13 (lifecycle rule), 2026-05-21 (SJR exclusion), 2026-05-28 (auto-deactivate), 2026-05-29 (nil-date), 2026-06-04 (unrecognised prefix skip), 2026-06-08 (hard-skip confirmed), 2026-06-09 (Pow Hwee hard-skip all mapped fields)*
*Confirm with Léo against actual OTG Excel export before finalising column names.*
