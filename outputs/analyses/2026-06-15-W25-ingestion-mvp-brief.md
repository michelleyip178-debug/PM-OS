# OTG Ingestion — MVP Scope Brief

**To:** Léo Milbor, Pow Hwee Tan

**From:** Michelle

**Date:** 15 Jun 2026

**Purpose:** Align on what's achievable for MVP (Oct pilot, 6 agencies) vs what stays out. Two open questions need your input before S5 grooming.

---

## Where we are

| | Count |
|---|---|
| Open OTG opportunities | 633 |
| Passing v3 rules today | 415 |
| Still blocked | 218 |
| SJR excluded (by design) | 39 |

OTEP-192 is in QA. The three v3 rule changes (I-013, I-014, I-015) are drafted as Stories 1–3 in `03-stories/story-pipeline/draft/OTEP-ingestion-v3-rule-updates.md` — ready for Léo to size at grooming, dependent on OTEP-192 merging first.

---

## The 218 blocked — what's holding them back

| Blocker | Count | Fix |
|---|---|---|
| No type tag | 78 | Agencies fix OTG prefix at source |
| End date missing | 51 | Rule change? (see Q1 below) or agency data fix |
| Business unit missing | 47 | Agencies fill BU in OTG |
| Start date missing (Gig/STIP only) | 27 | Agencies add start date |
| Agency field blank | 22 | OTG data quality / agency |
| Time commitment missing (Gig/STIP only) | 5 | Agencies add TC |

**158 of 218 are single-field blockers.** Fix one field and they ingest. The other 60 are multi-field — need agency coordination.

---

## Two questions before S5 grooming

### Q1 — Should end_date be optional for Job and Secondment?

This is the highest-ROI rule change still open. Making it optional (same logic as start_date under I-015) would unlock 44 records immediately — 36 Secondment, 8 Job, all single-field blockers.

Rationale: Jobs and Secondments often don't have a defined end date. Gig/STIP end_date would stay required (time-bound by nature).

**Léo:** Clean change to the transform layer once OTEP-192 merges? Same pattern as Story 2. If yes, this becomes Story 4 in the same batch.

**Pow Hwee:** Any UX or data quality reason to keep end_date hard-required for Jobs/Secondments? Officers would see it as "no fixed end date" rather than a missing field.

### Q2 — The 78 "No tag" records: purely an agency fix, or is there anything we can do?

All 78 are unresolvable — no OTG prefix, can't classify the type. Top offenders: MSF (37), ESG (19), MTI (7). MSF and ESG are both in the Oct pilot cohort.

Current decision (2026-06-04): hard-skip pending DevOps/DT source fix.

**Léo:** Is there any exploitable pattern in the record titles that could let us infer type — or is that too fragile? What's your read on the DevOps/DT timeline? If it's post-Oct, these 78 are out of scope for MVP regardless.

**Pow Hwee:** Should we brief MSF and ESG before the pilot to set expectations? They'll notice the gap.

---

## What's in vs out for MVP

**In (415, confirmed):**
- Jobs and Secondments passing field rules
- Gigs and STIPs with full required fields
- PSFG (TC-exempt under I-013) — 24 records passing
- C@G listings (separate pipeline)

**Out (confirmed):**
- SJR (39) — no OTG apply flow, excluded by I-009
- No-tag records (78) — unless DevOps/DT fix lands before Oct
- Blank agency records (22) — OTG data issue

**Depends on Q1:** 44 additional Job/Secondment records if end_date made optional.

---

Full breakdown by agency and type: [ingestion analysis site](https://otep-ingestion-analysis.vercel.app)

*Brief by Michelle · 15 Jun 2026 · Input needed before S5 grooming*
