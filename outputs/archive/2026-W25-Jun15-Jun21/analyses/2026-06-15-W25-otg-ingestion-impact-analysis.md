---
title: OTG Ingestion — Impact of Rule Changes (v3)
date: 2026-06-15
author: Michelle Yip
audience: BOs / Xian Zhang team
source: OTEP_Remediation_Report_v3.xlsx (12 Jun 2026), OTG Opportunities meeting decisions
relates_to: OTEP-192, OTEP-86, OTEP-289, decisions I-013 through I-018
---

# OTG Ingestion — What Changed and What It Means

## The one-line version

Three rule changes agreed on 12 June unlocked 255 blocked records — growing the launch catalogue from ~160 to ~415 opportunities with no new engineering.

---

## Before and after

| | Before (v2 rules) | After (v3 rules) |
|---|---|---|
| Records passing ingestion | ~160 | ~415 |
| Records still blocked | 473 | 205 |
| SJR excluded (MVP) | 13 | 13 |
| Potential with agency fixes | ~160 | 500+ |

The 255 newly passing records came entirely from relaxing three rules that were blocking structurally valid opportunities.

---

## The three decisions that changed this

### 1. StartDate is now optional for Jobs and Secondments (I-015)

**Old rule:** Every record required a start date or it was skipped.

**New rule:** For `Job` and `Secondment` types, a missing start date is valid. These are standing roles — there's often no fixed start date by design. The listing card shows "Ongoing / No fixed start" instead of a blank.

**Records unlocked:** The biggest single unlock. 230 Secondments and 87 Jobs were blocked on this field alone at Enterprise Singapore and MTI.

---

### 2. Function is now optional for all types (I-014)

**Old rule:** Records without a function tag were skipped.

**New rule:** Function is display-only. A record without it still ingests. Officers browsing without a function filter see it; function-filtered views correctly exclude it. Amber will design a graceful null state — no "Function: —" label.

**Records unlocked:** Contributed to the ESG and NLB unlocks. Missing function was often co-occurring with missing StartDate on the same record.

---

### 3. Time commitment is now required for Gigs and STIPs only (I-013)

**Old rule:** Time commitment fields were required broadly.

**New rule:** Time commitment (hours per week, start/end dates) is required only for `Gig` and `STIP` types. Jobs and Secondments are full-time roles by nature — the concept doesn't apply. Five records that were blocked because a Job lacked a TC field now pass.

**Records unlocked:** Smaller unlock, but it closed a rule misfit that had no logical basis.

---

## What it looks like by agency

| Agency | Blocked before | Now pass | Still blocked | Pass rate |
|--------|---------------|----------|---------------|-----------|
| Enterprise Singapore | 178 | **134** | 44 | 75% |
| Ministry of Trade and Industry | 42 | **26** | 16 | 62% |
| National Library Board | 20 | **12** | 8 | 60% |
| Workforce Singapore | 16 | **7** | 9 | 44% |
| Ministry of Digital Development | 17 | **5** | 12 | 29% |
| Singapore Police Force | 7 | **5** | 2 | 71% |
| Economic Development Board | 18 | **16** | 2 | 89% |
| People's Association | 11 | **10** | 1 | 91% |
| Ministry of Education | 6 | **5** | 1 | 83% |
| Public Service Division | 11 | 1 | 10 | 9% |
| Ministry of Social and Family Dev | 40 | 1 | 39 | 2% |
| National Council of Social Service | 18 | 0 | 18 | 0% |
| National Heritage Board | 3 | 0 | 3 | 0% |
| Skillsfuture Singapore Agency | 2 | 0 | 2 | 0% |
| **TOTAL** | **473** | **255** | **205** | **54%** |

Agencies showing 0% pass rate had blockers the v3 rules couldn't address — they need data fixes at source (see below).

---

## What's still blocked and why

205 records remain blocked after v3 rules. These can't be unlocked by rule changes — they need the source data to be corrected.

| Root cause | Records affected | What it means |
|---|---|---|
| Unrecognised type tag | 78 | Records tagged "No tag," "Other (TBC)," "agilePSD (TBC)" — OTEP won't guess. Agency or OTG admin must fix the tag. |
| Missing end date | 51 | Closing date is blank or unparseable (not the `00/01/1900` nil sentinel). Agency must add a valid end date or confirm evergreen. |
| Missing BusinessUnit | 47 | BU field is blank. Currently required. OTEP-427 may relax this — would unlock ~16–47 more records. |
| Missing start date (Gig/STIP only) | 27 | These types still require start date — only Jobs/Secondments are exempt under I-015. Agency must add it. |
| Missing agency resolution | 22 | 22 records have no recognisable agency name. Can't be ingested without knowing who posted it. |
| Missing time commitment (Gig/STIP) | 5 | These types require TC. Agency must add hours/week and dates. |

**The biggest unlock still available:** If agencies fix their type tags (78 records), end dates (51 records), and BusinessUnit (47 records), the catalogue can reach 500+. These are data quality fixes, not engineering changes.

---

## Agency-by-agency: what each needs to fix

### Enterprise Singapore — 44 still blocked

| Fix needed | Count |
|---|---|
| Type tag unrecognised | 19 |
| Missing end date | 13 |
| Missing start date (Gig/STIP) | 16 |
| Missing time commitment | 5 |
| Missing BusinessUnit | 5 |

ESG is the largest agency by volume. With 134 records now passing, they've benefited most from v3. The remaining 44 are fixable — ESG needs to correct type tags and end dates on ~32 records to clear the tail.

---

### Ministry of Social and Family Development — 39 still blocked

| Fix needed | Count |
|---|---|
| Type tag unrecognised | 37 |
| Missing BusinessUnit | 1 |

MSF has a critical type tag problem. 37 of their 39 blocked records use unrecognised tags. This is a data quality issue MSF ops needs to correct at source — none of it is unlockable by rule change.

---

### National Council of Social Service — 18 still blocked

| Fix needed | Count |
|---|---|
| Missing end date | 15 |
| Missing BusinessUnit | 2 |

NCSS records are mostly missing end dates. If they confirm which records are evergreen (and OTG ops updates the closing date to `00/01/1900`), most of these pass. Or NCSS adds actual closing dates.

---

### Ministry of Digital Development and Information — 12 still blocked

| Fix needed | Count |
|---|---|
| Missing BusinessUnit | 12 |

All of MDDI's blocked records have one issue: missing BU. If OTEP-427 relaxes BusinessUnit to optional, all 12 clear automatically. Worth flagging to Pow Hwee as a quick unlock.

---

### Ministry of Trade and Industry — 16 still blocked

| Fix needed | Count |
|---|---|
| Type tag unrecognised | 7 |
| Missing end date | 8 |
| Missing start date (Gig/STIP) | 7 |

MTI already has a 62% pass rate after v3. The remaining 16 need type tag fixes and end dates — similar pattern to ESG but smaller volume.

---

## What this means for the BO conversation

**What to tell BOs and Xian Zhang:**

The v3 rule changes are done — they're locked decisions and engineering is updating the ingestion accordingly. The 255 newly passing records don't need any action from agencies.

The 205 still-blocked records do. The ask for BOs:

1. **Type tags (78 records, mostly MSF and ESG):** Work with your OTG admin contact to correct the type classification. OTEP can share the list of affected GigIDs.

2. **End dates (51 records, mostly NCSS and ESG):** Add a valid closing date, or confirm records are evergreen so OTG ops can set `00/01/1900`.

3. **BusinessUnit (47 records, mostly MDDI and WSG):** Either provide the BU field, or we escalate OTEP-427 to make BU optional (which would clear MDDI's 12 records automatically).

The per-agency remediation report (OTEP_Remediation_Report_v3.xlsx) has the full GigID list for each blocked record, filterable by agency and fix type.

---

## What's still open on the decisions side

Two v3 decisions are pending Xian Zhang's validation before they're locked:

| Decision | What's pending | Gates |
|---|---|---|
| I-018: 5-category model (STIPs, Gigs, Jobs, SJR, PSFG) | Xian Zhang team to confirm the OTG prefix → CC category mapping | OTEP-86 filter, OTEP-289 spike |
| I-017: "Secondment" → "Jobs" in CareerCompass | Xian Zhang team to confirm officers experience secondments as job opportunities | Card labelling, filter keys |

These should be shared with Xian Zhang this week for validation. Engineering cannot finalise the filter logic (OTEP-86) until both are locked.

---

## Potential ceiling: what's achievable with full remediation

| Scenario | Catalogue size |
|---|---|
| v3 rules, no agency fixes | ~415 |
| v3 rules + type tag fixes (78 records) | ~493 |
| v3 rules + type tag + end date fixes | ~544 |
| v3 rules + BU optional (OTEP-427) | ~462 |
| v3 rules + all fixes | 500+ |

The 500+ ceiling is realistic if agencies engage with the remediation process before go-live. The 415 floor is guaranteed — no agency action required.

---

*Source: OTEP_Remediation_Report_v3.xlsx (12 Jun 2026). OTG Opportunities meeting decisions (12 Jun 2026).*
*For questions on the data: Michelle Yip. For questions on agency data fixes: Xian Zhang.*
