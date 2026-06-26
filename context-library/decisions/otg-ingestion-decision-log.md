---
title: OTG Ingestion — Decision Log
owner: Michelle Yip
last_updated: 2026-06-12
relates_to: OTEP-192, OTEP-86, OTEP-289, OTEP-348, OTEP-427, OTEP-358
---

# OTG Ingestion Decision Log

Every product, data, and rule decision for the OTG → CareerCompass ingestion pipeline. Newest first within each section. Status key at bottom.

**How to use:** Check here before grooming any ingestion-adjacent story. If a decision is 🟡 or 🔴, don't let engineering build against it yet.

---

## Decision Index

| ID | Decision | Date | Status | Gates |
|----|----------|------|--------|-------|
| I-020 | Competency field is optional across all pipeline sources (OTG + C@G) | 2026-06-26 | ✅ Ratified | OTEP-192 ACs, OTEP-437, OTEP-87 |
| I-019 | WOG 29-category taxonomy is the canonical filter layer (replaces C@G Indus codes) | 2026-06-25 | ✅ Ratified | OTEP-437, OTEP-ingestion-v3 Story 4, OTEP-318 |
| I-018 | MVP category model: Jobs · STIPs · Gigs (3 categories). SJR + PSFG excluded. | 2026-06-26 | ✅ Ratified | OTEP-86, OTEP-289 |
| I-017 | "Jobs" consolidates Secondments + Internal Jobs + C@G jobs | 2026-06-12 | ✅ Ratified | OTEP-86, card labelling |
| I-016 | PSFG excluded from MVP (deferred post-MVP) | 2026-06-26 | ✅ Ratified | OTEP-86, OTEP-289 |
| I-015 | StartDate optional for Jobs (Job + Secondment types) | 2026-06-12 | ✅ Ratified | OTEP-192 ACs, OTEP-427 |
| I-014 | Function field is optional / display-only (all types) | 2026-06-12 | ✅ Ratified | OTEP-192 ACs, OTEP-427 |
| I-013 | TimeCommitment required for STIPs and Gigs only | 2026-06-12 | ✅ Ratified | OTEP-192 ACs |
| I-012 | MVP ring-fencing = agency-level only | 2026-06-12 | ✅ Ratified | OTEP-127, ring-fencing spike |
| I-011 | MVP ingests open opportunities only; all expired excluded | 2026-06-12 | ✅ Ratified (reinforces I-008) | OTEP-192 |
| I-010 | C@G as source of truth where a job exists in both OTG and C@G | 2026-06-12 | 🔴 Open — waiting on Xian Zhang → ESG HR | OTEP-348, ESG ingestion |
| I-009 | SJR excluded from MVP listing and ingestion | 2026-05-21 | ✅ Ratified | OTEP-192, listing filter |
| I-008 | Hard-skip any record with missing or unresolvable mapped field | 2026-06-08 | ✅ Ratified | OTEP-192 skip logic |
| I-007 | Unrecognised type prefixes hard-skip pending source fix | 2026-06-04 | ✅ Ratified | OTEP-192 type tag validation |
| I-006 | `formsg_url` required — no apply action without it | 2026-06-08 | ✅ Ratified | OTEP-192, detail page |
| I-005 | Nil closing date (`00/01/1900`) = evergreen = valid | 2026-05-29 | ✅ Ratified | OTEP-358, ingestion |
| I-004 | Opportunity lifecycle: visible if `closing_date > today OR closing_date IS NULL` | 2026-05-13 | ✅ Ratified | Listing visibility rule |
| I-003 | Sync cadence: one-time port only, no ongoing automated sync | 2026-05-29 | ✅ Ratified | OTEP-192, OTEP-348 |
| I-002 | Ingestion method: Excel file import (OTG has no API) | 2026-05-14 | ✅ Ratified | OTEP-192 |
| I-001 | Pilot agency scope: 6 agencies only for MVP import (PSD, ESG, MDDI, URA, MCCY, CAAS) | 2026-06-02 | ✅ Ratified | Fanxu bulk import |

---

## Decision Detail

---

### I-020 — Competency field is optional across all pipeline sources

**Date:** 2026-06-26

**Status:** ✅ Ratified

**Decision:** `comp_requirements` (competencies) is an optional field for ingestion across both OTG and C@G pipelines. A record missing competencies is still ingested. Missing competencies do not trigger a hard skip.

**Why:** C@G jobs structurally have no competency data. Since Léo is building a unified ingestion pipeline for both OTG and C@G, making competencies a hard-skip requirement would block all C@G jobs. OTG data confirms all current open records have competencies (100% coverage across Gigs, STIPs, Jobs, SJRs), so this rule relaxation has no impact on OTG catalogue size.

**UI behaviour when competencies are missing:** Show the "no competencies" banner directing officers to update their profile (decided in S5 grooming 2026-06-25). Do not show a match signal. Card hides the competency section rather than showing an empty/negative state (per grooming decision).

**What to update:** OTEP-192 ACs (remove competency as hard-skip field). OTEP-437 (C@G ingestion — competency field optional). OTEP-87 (competency section on detail page — handle null gracefully).

---

### I-019 — WOG 29-category taxonomy is the canonical filter layer

**Date:** 2026-06-25

**Status:** ✅ Ratified

**Decision:** CareerCompass uses a 29-category WOG taxonomy as the canonical filter display layer. Both OTG and C@G opportunities translate their native job classification to a WOG category at ingestion and store it as `wog_job_category`. C@G Indus codes are no longer the canonical taxonomy — they are an intermediate source that translates to WOG.

**WOG taxonomy (29 categories):** Partnership & Engagement · Corporate Administration · Education & Skills Development · Emergency Preparedness & Response · Regulatory · Environment & Resources · Finance · Governance, Risk & Controls · Infocomm Technology & Smart Systems · Human Resource · Industry & Sector Development · International Relations · Land & Estate Management · Legal · Organisation Development · Planning · Policy & Planning · Procurement · Programme & Project Management · Public Communications · Research & Innovation · Service Delivery · Social & Community Services · Trade & Economy · Urban & Physical Planning · Arts & Culture · Programme Evaluation · Internal Audit · Science, Tech & Engineering

**Why:** A single WOG taxonomy gives officers a consistent filter experience regardless of whether opportunities come from OTG or C@G. C@G Indus codes are source-specific and not designed as a user-facing taxonomy.

**What it changes:**
- OTEP-437: C@G ingestion now translates Indus code → WOG (was passthrough). Updated.
- OTEP-ingestion-v3 Story 4: OTG ingestion now translates job_family → WOG (was OTG → C@G Indus). Updated.
- OTEP-318 (filter UI): Filter labels are WOG categories (not C@G Indus labels).

**Mapping reference:** `context-library/decisions/wog-taxonomy-mapping.md`

**Pending:** OTG A–K job families not yet mapped — add to Story 4 translation map when confirmed by HR.

---

### I-018 — MVP category model: Jobs · STIPs · Gigs (3 categories)

**Date:** 2026-06-26 (updated from 2026-06-12 draft)

**Status:** ✅ Ratified

**Source:** OTG Opportunities → CareerCompass meeting 12 Jun 2026 (initial); confirmed 2026-06-26.

**Decision:** CareerCompass MVP displays three user-facing categories. SJR and PSFG are both excluded from MVP.

| CC Category | Maps from (OTG types) | C@G source | Notes |
|---|---|---|---|
| Jobs | `Job`, `Secondment` prefixes | C@G jobs | Internal Jobs + Secondments + C@G Jobs. StartDate optional. No TC. |
| STIPs | `STIP` prefix | — | Time-bound. TC required. |
| Gigs | `Gig` prefix | — | Time-bound. TC required. |
| ~~SJR~~ | ~~`SJR` prefix~~ | — | **Excluded MVP** — separate module (I-009 stands) |
| ~~PSFG~~ | ~~TBD prefix~~ | — | **Excluded MVP** — deferred to post-MVP |

**Why:** Categories reflect officer intent, not HR mechanisms. SJR is nomination-based and requires a separate module. PSFG prefix not yet identified in OTG data and deferred.

**What it gates:** OTEP-86 (type filter — 3 types only), OTEP-289 (taxonomy mapping spike). Safe to groom against this model now.

---

### I-017 — "Jobs" consolidates Secondments + Internal Jobs + C@G jobs

**Date:** 2026-06-12 (ratified 2026-06-26)

**Status:** ✅ Ratified

**Source:** OTG Opportunities → CareerCompass meeting, 12 Jun 2026

**Decision:** "Secondment" is an internal posting mechanism, not a user-facing category. Records tagged `Secondment` in OTG ingest as the "Jobs" category in CareerCompass. Same for `Job` type and Careers@GovTech jobs.

**Why:** An officer looking for a secondment is really looking for a job with a different home agency. Splitting the listing view by mechanism adds confusion, not clarity.

**Impact on ingestion:** Records previously tagged `Secondment` now ingest as `Jobs`. Card labelling and filter keys change. StartDate becomes optional (see I-015). Time commitment is N/A for this type.

**Impact on OTEP-289:** The taxonomy mapping spike must reflect this consolidation.

---

### I-016 — PSFG excluded from MVP

**Date:** 2026-06-26 (supersedes 2026-06-12 draft)

**Status:** ✅ Ratified

**Decision:** PSFG is excluded from MVP. It is not a CareerCompass category for MVP launch. Deferred to post-MVP.

**Why:** PSFG prefix/tag is not yet identified in OTG data. Including it in MVP without a confirmed source mapping is not feasible. The voluntary, skills-based nature of PSFG also warrants a separate UX consideration beyond MVP scope.

**What it unblocks:** OTEP-86 type filter and OTEP-289 taxonomy spike can now proceed with 3 categories only (Jobs, STIPs, Gigs).

---

### I-015 — StartDate optional for Jobs (Job + Secondment types)

**Date:** 2026-06-12

**Status:** ✅ Ratified

**Source:** OTG Opportunities → CareerCompass meeting, 12 Jun 2026

**Decision:** `GigStart` (start date) is no longer a required field for records with type `Job` or `Secondment`. These types remain ingested even if start date is null.

**Why:** Secondments and internal jobs are standing roles — there is often no fixed start date by design. Applying a blanket start-date requirement was blocking 288 records, most of which (230 Secondments, 87 Jobs) are structurally fine to ingest.

**Catalogue impact:** +~255 records pass under the new rule (record-level simulation, v3 remediation report, 12 Jun 2026).

**What to update:** OTEP-192 ACs. OTEP-427 (ingestion tightening). Léo to run dry-run to validate.

**Card design:** For Jobs/Secondments without a start date, the listing card shows "Ongoing / No fixed start" rather than leaving the field blank.

---

### I-014 — Function field is optional / display-only (all types)

**Date:** 2026-06-12

**Status:** ✅ Ratified

**Source:** OTG Opportunities → CareerCompass meeting, 12 Jun 2026

**Decision:** `Function` is no longer a blocking field at ingestion. Records missing a function value pass ingestion and display with a graceful null state on the card. Function is used for filtering (OTEP-86) but its absence is not a disqualifier.

**Why:** A record without a function tag is still a valid opportunity. Blocking on it was deprioritising real opportunities over a data completeness goal we can't enforce at source. Officers browsing without a function filter will see these records; function-filtered views will correctly exclude them.

**Design implication:** Amber to design the function null state for listing cards (no jarring "Function: —" label). OTEP-86 filter result for function must handle the empty-match case.

---

### I-013 — TimeCommitment required for STIPs and Gigs only

**Date:** 2026-06-12

**Status:** ✅ Ratified

**Source:** OTG Opportunities → CareerCompass meeting, 12 Jun 2026

**Decision:** Time commitment fields (hours per week, start/end dates) are required at ingestion for `Gig` and `STIP` types only. Jobs and Secondments are treated as full-time — no time commitment field is expected.

**Why:** Time-bound roles (Gigs, STIPs) need this information for the officer to make a decision. For standing roles (Jobs, Secondments), the concept doesn't apply. Previously 5 records were hard-skipped because a Job record lacked a TC field — this was a rule misfit.

---

### I-012 — MVP ring-fencing = agency-level only

**Date:** 2026-06-12

**Status:** ✅ Ratified

**Source:** OTG Opportunities → CareerCompass meeting, 12 Jun 2026

**Decision:** For MVP, ring-fencing controls visibility at the agency level only — an officer from Agency A sees their agency's opportunities plus any open-to-all. R1+ adds job-family and officer-level ring-fencing.

**Exception:** SJR is nomination-based and officer-level by design — it runs as a separate module and is not affected by this MVP ring-fencing rule.

**Why:** Start simple. Agency-level ring-fencing covers the most critical privacy requirement (an officer shouldn't see another agency's confidential internal opportunities) without requiring the full eligibility matrix to be built first.

---

### I-011 — MVP ingests open opportunities only; all expired excluded

**Date:** 2026-06-12

**Status:** ✅ Ratified (reinforces I-008 and D-2026-06-08)

**Source:** OTG Opportunities → CareerCompass meeting, 12 Jun 2026

**Decision:** Ingestion excludes any record where the closing date is in the past. Not date-range limited — all currently open opportunities (regardless of when they were posted) are in scope.

**Why:** A poster who let the end date pass closed it intentionally. Ingesting expired records creates noise with no officer value. This is not new — it reinforces the hard-skip rule — but the meeting explicitly confirmed "not date-limited." Meaning a Secondment posted in 2024 that's still open today should be ingested.

---

### I-010 — C@G as source of truth where a job exists in both OTG and C@G

**Date:** 2026-06-12

**Status:** 🔴 Open — waiting on Xian Zhang to reach out to ESG HR

**Source:** OTG Opportunities → CareerCompass meeting, 12 Jun 2026

**Proposed direction:** Where the same job is posted in both OTG and Careers@GovTech, prefer the C@G record. Do not ingest the OTG copy. Avoid duplicate listings in CareerCompass.

**Why it's not ratified:** We don't yet know if ESG (the main agency affected) actually double-posts to both systems, or if C@G and OTG postings are the same role vs. different roles. The dedup rule only makes sense once we have the answer.

**What's blocked:** ESG ingestion build in OTEP-348. Don't build the dedup logic before Xian Zhang confirms the ESG HR answer.

**Owner:** Xian Zhang (to reach out to ESG HR). Updated 2026-06-26 — no longer Michelle to chase; ball is with Xian Zhang.

---

### I-009 — SJR excluded from MVP listing and ingestion

**Date:** 2026-05-21

**Status:** ✅ Ratified

**Source:** Decision log, reinforced 12 Jun 2026

**Decision:** SJR (Senior Job Rotation) is excluded from MVP ingestion, listing, and apply flows. It is a separate module with a nomination-based workflow. No SJR cards appear in CareerCompass MVP.

---

### I-008 — Hard-skip any record with missing or unresolvable mapped field

**Date:** 2026-06-08

**Status:** ✅ Ratified (confirmed by Pow Hwee)

**Source:** 2026-06-09-otg-ingestion-trio.md; reinforced 12 Jun 2026

**Decision:** If any OTEP-mapped field in an OTG Excel row is missing, null, or unresolvable — the entire row is skipped. No partial imports. No UI fallbacks for required-field gaps.

**Required fields (as of 12 Jun 2026):**

| Field | Rule |
|---|---|
| Title | Hard skip if missing |
| Agency (resolves to ref_agency) | Hard skip if unresolvable |
| Opportunity type (known prefix) | Hard skip if unrecognised |
| `formsg_url` | Hard skip if missing (no apply = no value) |
| Closing date (`00/01/1900` = nil = valid) | Hard skip if unresolvable; nil OK |
| Description | Hard skip if missing |
| StartDate | **Optional for Job and Secondment types (I-015). Required for Gig and STIP.** |
| Function | **Optional for all types (I-014). Display-only.** |
| TimeCommitment | **Required for Gig and STIP only (I-013). N/A for Jobs.** |
| BusinessUnit | Still required — open question whether to relax (see OTEP-427) |

---

### I-007 — Unrecognised type prefixes hard-skip pending source fix

**Date:** 2026-06-04

**Status:** ✅ Ratified

**Source:** Decision log

**Decision:** Records with type tags that don't map to a known OTG prefix hard-skip. OTEP does not guess or normalise the tag. Agencies and DevOps must fix the source data.

**Currently affected:** 78 "No tag," 56 "Other (TBC)," 29 "agilePSD (TBC)" = 163 records. These remain blocked regardless of I-015/I-014/I-013.

---

### I-006 — `formsg_url` required — record without it is skipped

**Date:** 2026-06-08

**Status:** ✅ Ratified

**Source:** 2026-06-09-otg-ingestion-trio.md

**Decision:** If `formsg_url` is missing from a record, that record hard-skips. Without a FormSG URL there is no apply action and no value to the officer in surfacing the opportunity.

---

### I-005 — Nil closing date (`00/01/1900`) = evergreen = valid

**Date:** 2026-05-29

**Status:** ✅ Ratified

**Source:** Decision log

**Decision:** OTG represents an evergreen (no closing date) record as `00/01/1900`. OTEP treats this as nil — valid. The record is ingested, and visibility is controlled by the lifecycle rule (I-004). Spike: OTEP-358.

---

### I-004 — Opportunity lifecycle: visible if closing_date > today OR NULL

**Date:** 2026-05-13

**Status:** ✅ Ratified

**Source:** Decision log

**Decision:** An opportunity is visible on CareerCompass if `closing_date > today` OR `closing_date IS NULL` (evergreen). No manual activation/deactivation step for the officer.

---

### I-003 — Sync cadence: one-time port only, no ongoing automated sync

**Date:** 2026-05-29

**Status:** ✅ Ratified

**Source:** Decision log (D-016)

**Decision:** OTG data is a one-time historical import. Pilot agencies are driven to post directly to CareerCompass going forward. No automated OTG → CareerCompass sync post-MVP. OTEP-348 (scheduler) covers a future automated sync for agencies not yet on Compass — blocked on the C@G dedup rule (I-010).

---

### I-002 — Ingestion method: Excel file import

**Date:** 2026-05-14

**Status:** ✅ Ratified

**Source:** Decision log

**Decision:** OTG has no public API. Ingestion is via Excel file export from OTG. File is uploaded via admin UI (OTEP-397) and processed by the ingestion service (OTEP-192).

---

### I-001 — Pilot agency scope: 6 agencies for MVP import

**Date:** 2026-06-02

**Status:** ✅ Ratified

**Source:** 2026-06-02-pilot-agency-otg-import-restriction.md

**Decision:** Sprint 3 OTG bulk import scoped to 6 MVP pilot agencies: PSD, ESG, MDDI, URA, MCCY, CAAS (~5,400 officers). Remaining 24 agencies not imported — OTG onboarding for them is halted.

**Build note:** Agency filter must be a configurable allowlist (not hardcoded) — R1 adds WSG, PA, MSF (Jan 2027).

---

## Open Questions (not yet decided)

| # | Question | Owner | Blocks |
|---|----------|-------|--------|
| Q-1 | Does ESG double-post to both OTG and C@G? Which version is authoritative? | Xian Zhang (reaching out to ESG HR — updated 2026-06-26) | I-010, OTEP-348 ESG ingestion |
| Q-2 | Can BusinessUnit be optional for MVP? Would unlock ~16 more records. | Léo + Pow Hwee (OTEP-427) | I-008 required field list |
| ~~Q-3~~ | ~~What OTG prefix maps to PSFG?~~ | — | ✅ Resolved — PSFG excluded from MVP (I-016). No longer relevant. |
| ~~Q-4~~ | ~~Final category model confirmed?~~ | — | ✅ Resolved — 3-category model ratified 2026-06-26 (I-018): Jobs · STIPs · Gigs. |
| ~~Q-5~~ | ~~Do competencies at ingestion trigger a hard skip if missing?~~ | ~~Pow Hwee~~ | ✅ Resolved — see I-020. Competencies are optional; C@G jobs have none. |

---

## Status Key

| Symbol | Meaning |
|--------|---------|
| ✅ Ratified | Decision is confirmed. Safe to build against. |
| 🟡 Pending | Aligned in the room but needs external validation before it's locked. Do not build against yet. |
| 🔴 Open | Not decided. Building against this risks rework. |
| ⚠️ Partial | Partially resolved — see notes. |

---

## Changelog

| Date | Change |
|------|--------|
| 2026-06-26 | I-018 ratified: MVP category model locked at 3 categories (Jobs · STIPs · Gigs). SJR excluded (I-009 stands). PSFG excluded (I-016 updated). I-017 ratified. Q-3 and Q-4 closed. |
| 2026-06-26 | Added I-020: competency field optional across OTG + C@G pipelines. C@G jobs have no competencies — unified pipeline requires this. Q-5 closed. |
| 2026-06-26 | I-010 owner updated: Xian Zhang to reach out to ESG HR (no longer Michelle to chase). |
| 2026-06-25 | Added I-019: WOG 29-category taxonomy as canonical filter layer. C@G Indus codes no longer canonical. Updated OTEP-437 and ingestion Story 4 scope. |
| 2026-06-12 | Added I-010 through I-018 from OTG Opportunities meeting. Marked I-008 required field table updated with new optional rules. |
| 2026-06-09 | Added I-008 (hard-skip, Pow Hwee), I-007 (type tag). |
| 2026-06-08 | Added I-006 (formsg_url required). |
| 2026-06-02 | Added I-001 (pilot agency scope). |
| 2026-05-29 | Added I-003 (one-time sync), I-005 (nil date). |
| 2026-05-21 | Added I-009 (SJR excluded). |
| 2026-05-14 | Added I-002 (Excel import). |
| 2026-05-13 | Added I-004 (lifecycle rule). |
