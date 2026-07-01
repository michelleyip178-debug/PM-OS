---
date: 2026-06-25
topic: User Story — C@G ingestion job category passthrough
related-files:
  - PM-skills-ALL-1/03-stories/story-pipeline/draft/OTEP-ingestion-v3-rule-updates.md (Story 4 AC4)
  - PM-skills-ALL-1/03-stories/otep-stories/OTEP-289-spike-definition.md
  - outputs/analyses/2026-06-25-otg-to-cag-job-family-mapping.md
---

# C@G ingestion: store job category directly (no translation needed)

**Type:** Chore

**Assignee:** Léo Milbor (suggested)

**Story Points:** TBC at grooming

**Note:** Can be bundled with Story 4 (OTG translation) or tracked separately. Confirm at grooming — the C@G side is simpler, so bundling likely makes more sense.

---

## Why this exists

CareerCompass uses C@G's 33 job categories as the filter taxonomy (decision: OTEP-289, 2026-06-25). C@G already tags each opportunity with an `Indus` code — the canonical value we want to show in the filter. There's no translation step needed.

This story makes sure we store that value cleanly at ingestion, so C@G opportunities show up in the right filter bucket from day one. OTG opportunities are the ones that need a translation map (Story 4). C@G is a straight passthrough.

---

## Story

As the ingestion pipeline,
I store each C@G opportunity's job category code directly at ingest
so that it can be filtered alongside OTG opportunities using the same field.

---

## What done looks like

**Store it as-is.** When a C@G record comes in with `Indus = "0014"` (Healthcare), store `"0014"`. No lookup. No translation. No fallback to a different value.

**Accept all 33 known codes cleanly.** Any of the 33 Indus codes (`0001`–`0035`) should pass through without error.

**Don't drop records with missing or unknown codes.** If the Indus field is null or blank, ingest the record anyway and log `CAG_INDUS_NULL` with the opportunity ID. If SAP adds a new code we don't know about yet, store it as-is and log `CAG_INDUS_UNKNOWN` — so we can assess and update the mapping table without having lost the record.

**Filter must work across both sources.** A C@G opportunity stored as `job_family_code = "0010"` and an OTG opportunity translated to `job_family_code = "0010"` (Education & Skills Development) should appear together when an officer filters by Education.

**Unit tests cover:** (a) known code stored as-is, (b) null Indus — ingested with warning, (c) unknown code — stored as-is with warning.

---

## C@G job category reference (35 codes, 33 active)

| Code | Description | Live listings |
|---|---|---|
| 0001 | Accounting, Audit, Finance | high |
| 0002 | Administration Support | 82 |
| 0003 | Arts/Cultural/Heritage | 7 |
| 0004 | Building and Estate Management | 65 |
| 0005 | Conciliation/Mediation | 4 |
| 0006 | Conciliation/Mediation and Statistics | ~0 |
| 0007 | Corporate Strategy/Top Management | 17 |
| 0008 | Customer Service | 32 |
| 0009 | Economics/Statistics | 33 |
| 0010 | Education | high |
| 0011 | Enforcement | high |
| 0012 | Engineering | high |
| 0013 | Foreign Service | 10 |
| 0014 | Healthcare | 31 |
| 0015 | Home Team Uniformed Services | 16 |
| 0016 | Human Resources | high |
| 0017 | InfoComm, Technology, New Media Communications | high |
| 0018 | International Relations | high |
| 0019 | Investigation | ~5 |
| 0020 | Landscape/Horticulture | 7 |
| 0021 | Law/Legal Services | 23 |
| 0022 | Marketing/Business Development | high |
| 0023 | Occupational Safety and Health | 6 |
| 0024 | Organisation Development | high |
| 0025 | Others | — |
| 0026 | Policy Formulation | high |
| 0027 | Public Relations/Corporate Communications/Psychology | high |
| 0028 | Public Service Leadership | 2 |
| 0029 | Research and Analysis | high |
| 0030 | Sciences (e.g. life sciences, bio-technology etc.) | ~10 |
| 0031 | Singapore Armed Forces | 0 |
| 0032 | Social and Community Development | high |
| 0033 | Statistics | ~5 |
| 0034 | Training and Development | ~15 |
| 0035 | Translators/Interpreters | 0 |

Source: `cag_field_set.json` (SAP OData v2). Listing counts as of May 2026.

---

## Not in scope

- OTG job family → C@G Indus translation (that's Story 4)
- The filter UI itself (OTEP-318)
- ref_job_family reference table (OTEP-333)
