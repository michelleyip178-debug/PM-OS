---
title: OTG Ingestion — Product Brief
owner: Michelle Yip
last_updated: 2026-06-12
status: Living doc — update after every major decision meeting
relates_to: OTEP-192, OTEP-397, OTEP-86, OTEP-289, OTEP-348, OTEP-358, OTEP-427
decision_log: context-library/decisions/otg-ingestion-decision-log.md
---

# OTG Ingestion — Product Brief

**What this is:** The 5-minute read to get up to speed on OTG ingestion for CareerCompass. For someone new to the problem, for Léo before a sprint, for Jobelle's handover, for yourself after two weeks away from it.

**What this is not:** A source of truth for individual decisions (see the decision log). Not a PRD (see OTEP-192).

---

## The problem in one paragraph

OTG (One Talent Gateway) is the Singapore Public Service's current talent mobility platform — where agencies post secondments, gigs, and jobs for officers across the service. CareerCompass will replace OTG's discovery and apply experience. To launch with a useful catalogue on day one, we need to ingest OTG's live opportunities into CareerCompass before officers start using it. That's the ingestion pipeline. The pipeline works technically. The challenge is data quality: only ~25% of OTG's 633 open opportunities pass the ingestion rules as written, and getting to a meaningful catalogue (~400+) requires both PM rule decisions and agency data clean-up.

---

## How it works (the pipeline)

```
OTG export (Excel)
    ↓  Admin uploads via OTEP-397 (admin UI)
    ↓  OTEP-192 ingestion service processes rows
    ↓  Validates each record against required field rules
    ↓  Hard-skip → record dropped, logged
    ↓  Pass → upserted to CareerCompass DB
    ↓  OTEP-348 (scheduler) for future automated runs
CareerCompass listing (OTEP-86 filter, OTEP-87 detail page)
```

OTG has no API. Import is Excel-based. Sync is one-time for MVP — pilot agencies post directly to Compass going forward.

---

## File upload user journey (DevOps admin)

**Actor:** DevOps admin (one per pilot rollout — soft-launch to a single admin first).

**Trigger:** New OTG export is available and needs to be reconciled into CareerCompass.

### Step 1 — Drop

Admin downloads the standard OTG Excel export and uploads it via the admin UI.

- Accepted format: `.xlsx` (OTG's standard export schema, locked 2026-05-14).
- If the file structure doesn't match the expected schema (e.g. OTG renamed a column), the upload fails immediately with a clear error message. No silent best-effort parsing.
- Ring-fencing scope: the system automatically filters to the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS). Records from non-pilot agencies are excluded without requiring admin action.

### Step 2 — Review

The system generates a catalogue preview against the ingestion rules and presents the admin with a pre-publish summary before anything is written to the DB.

The review screen shows:

- **Pass count:** records that will ingest successfully (target ≥350 at launch).
- **Skip count:** records that will be hard-skipped, grouped by skip reason (TypeTag, EndDate, Agency, BusinessUnit).
- **Per-agency breakdown:** which agencies are contributing passing vs skipped records.
- **Ring-fenced records:** records that will be visible only to specific agencies (agency-level filter, MVP scope).

The skip breakdown is the primary output the admin acts on. It feeds the agency remediation workflow — admin forwards the skip report to agency contacts to fix source data.

> **Open:** catalogue preview depends on whether OTEP-192 already supports processing a file and returning results without writing to the database. Confirm with Léo before scoping the Review step. If it exists, the UI just renders the output. If not, catalogue preview needs to be built and scoped separately.

> **Open:** if a record exists in both OTG and Careers@GovTech (C@G), the dedup rule (prefer C@G) is not yet confirmed for ESG (I-010, 🔴 Open). ESG skip counts at the Review step may be inaccurate until this is resolved.

### Step 3 — Publish

Admin confirms and publishes. The ingestion service writes all passing records to the CareerCompass DB.

Post-publish, the admin receives a per-run skip report (same as the Review preview, now downloadable/shareable). This is the artefact for agency outreach — share with agency contacts alongside the OTEP_Remediation_Report_v3.xlsx to drive TypeTag and EndDate fixes.

> **Open:** rollback / un-publish is not yet scoped. If the admin publishes a bad file, there is currently no undo. The soft-launch approach (one pilot admin) is the primary risk mitigation for this gap.

### Operational cadence (open question)

MVP is a one-time import. For ongoing use, the cadence (how often, who triggers, what initiates a re-upload) is not yet defined. This needs to be answered before the upload module goes into production — it is a process design question, not a UI one.

---

---

## The data reality (as of 12 Jun 2026 dataset)

| Stage | Count |
|---|---|
| All OTG opportunities | ~2,023 |
| Open (not expired) | 633 |
| Pass ingestion — old rules (v2) | ~160 (25%) |
| Pass ingestion — new rules (v3, post 12 Jun decisions) | **~415 (66%)** |
| Still blocked under new rules | ~205 |
| SJR (excluded by design) | 39 |

The +255 unlock came from three PM decisions made on 12 Jun: StartDate optional for Jobs, Function optional for all types, and TimeCommitment exempt for Jobs/Secondments. No engineering change needed — just rule updates in OTEP-192 ACs.

The 205 still-blocked records need agency and DevOps action:
- **TypeTag issues (118):** MSF (37), ESG (19), NLB, MTI — bad or missing type prefixes at source.
- **EndDate missing (47):** NCSS (15), ESG (13) — agencies need to add closing dates.
- **Missing Agency field (18):** Records with no agency tag — OTG admin to fix.
- **BusinessUnit missing (16):** MDDI, NLB, WSG — may become optional (open question).

**Target catalogue at launch: ≥350 (go/no-go gate).**
Under new rules we're already at ~415 from rule changes alone — the gate is reachable without agency remediation. Agency clean-up gets us toward 500+.

---

## Current ingestion rules (v3, as of 12 Jun 2026)

These are the rules Léo implements in OTEP-192.

| Field | Rule | Types affected |
|---|---|---|
| Title | Required — hard skip if missing | All |
| Agency | Required — must resolve to ref_agency | All |
| Opportunity type | Required — must be a known prefix | All |
| `formsg_url` | Required — no apply action without it | All |
| Closing date | Required — nil (`00/01/1900`) is valid (evergreen) | All |
| Description | Required | All |
| StartDate | **Optional for Job + Secondment. Required for Gig + STIP.** | Type-dependent |
| Function | **Optional (display-only). Not a blocking field.** | All |
| TimeCommitment | **Required for Gig + STIP only. N/A for Jobs.** | Type-dependent |
| BusinessUnit | Required — open question whether to relax | All (pending) |

Hard-skip rule: any record missing a required field is skipped entirely. No partial imports.

---

## Category model (v3 — pending Xian Zhang validation)

CareerCompass shows 5 user-facing categories. These map from OTG type tags as follows:

| CareerCompass Category | OTG Source Types | MVP Status | Notes |
|---|---|---|---|
| **STIPs** | `STIP` prefix | In scope | Time-bound. Requires TC. |
| **Gigs** | `Gig` prefix | In scope | Time-bound. Requires TC. |
| **Jobs** | `Job` + `Secondment` + C@G | In scope | StartDate optional. No TC. Secondment = mechanism, not category. |
| **SJR** | `SJR` prefix | **Excluded MVP** | Nomination-based, separate module. |
| **PSFG** | TBD prefix | In scope (pending mapping) | Voluntary, skills-based. New category. |

Records with unrecognised prefixes (`No tag`, `Other (TBC)`, `agilePSD (TBC)`) hard-skip until the source data is fixed.

⚠️ The 5-category model is **pending Xian Zhang team validation**. Do not groom OTEP-86 or OTEP-289 against this until confirmed (target: w/c 15 Jun).

---

## Ring-fencing (MVP scope)

MVP ring-fencing = **agency-level only**. An officer from Agency A can see:
- Their own agency's opportunities (ring-fenced by agency)
- Any opportunities marked open-to-all

They cannot see another agency's internal-only opportunities.

R1+ adds job-family and officer-level ring-fencing. SJR is the exception — it is nomination-based and officer-level by design, handled separately.

---

## What's still open (as of 12 Jun 2026)

| Decision | Owner | When needed | Blocks |
|---|---|---|---|
| Validate 5-category model | Xian Zhang team | w/c 15 Jun | OTEP-86, OTEP-289 |
| C@G vs OTG dedup rule (ESG) | Xian Zhang → ESG HR | Before ESG ingestion built | OTEP-348 ESG |
| PSFG prefix identification | Michelle + Xian Zhang | Before OTEP-289 closes | Category mapping |
| BusinessUnit optional? | Léo + Pow Hwee | OTEP-427 | I-008 field list |
| Competency field required? | Pow Hwee | Before S4/S5 OTEP-87 grooming | OTEP-192 ACs |

---

## Agency remediation plan

These agencies are the critical path to getting above 350 at launch. DevOps/agencies own the fixes; PM owns the outreach and the skip reports.

| Agency | Still-blocked records | Primary issue | Priority |
|---|---|---|---|
| MSF | 37 | TypeTag — 37 bad/missing prefixes | 🔴 High — largest single TypeTag fix |
| Unknown/No Agency | 18 | Missing agency field entirely | 🔴 High — completely blocked |
| ESG | ~19 (residual) | TypeTag (19) after StartDate unlocked | 🔴 High — pair with OTEP-348 ESG call |
| NCSS | 15 | EndDate missing | 🟡 Medium |
| MDDI | 12 | BusinessUnit | 🟡 Medium (may unlock via Q-2) |
| MTI | ~7 (residual) | TypeTag after StartDate unlocked | 🟡 Medium |
| NLB | ~6 | BusinessUnit, TypeTag | 🟡 Medium |

**Artefact:** OTEP_Remediation_Report_v3.xlsx — per-agency tabs with every blocked record and what needs fixing. Use this to brief agency contacts.

**My action items (w/c 15 Jun):**
1. Generate per-agency remediation reports (from v3 xlsx) — Michelle
2. Define + circulate 5-category mapping doc for Xian Zhang validation — Michelle
3. Start MSF and ESG outreach (schedule fix sessions) — Michelle + Xian Zhang

---

## Key tickets

| Ticket | What it is | Status |
|---|---|---|
| OTEP-192 | Core ingestion pipeline (Léo) | Active S3/S4 |
| OTEP-86 | Type filter (depends on category model) | Blocked on I-018 |
| OTEP-289 | Taxonomy mapping spike | Blocked on I-018 |
| OTEP-348 | Scheduler / automated sync (future) | Blocked on I-010 (C@G dedup) |
| OTEP-358 | Nil-date handling spike (PM-owned) | Must close before S4 planning |
| OTEP-397 | Admin upload UI | Active |
| OTEP-427 | Tighten ingestion logic / edge cases (PM spike) | S4 |

---

## Key people

| Person | Role | What they own |
|---|---|---|
| Léo Milbor | BE engineer | OTEP-192 ingestion implementation |
| Pow Hwee | Tech Lead | Required field scope, engineering decisions, OTEP-348 |
| Xian Zhang & team | Business / data owners | Category model validation, ESG HR contact, agency clean-up |
| Amber | Designer | Card null states (function, start date), OTEP-86 filter UX |
| Rama | OTG data owner | Export schema, field mappings, agency contacts |
| DevOps / agencies | Source data owners | Type tag fixes, EndDate, BusinessUnit clean-up |

---

## Key artefacts

| Artefact | Location | Purpose |
|---|---|---|
| This brief | `context-library/prds/otg-ingestion-brief.md` | Quick onboarding / orientation |
| Decision log | `context-library/decisions/otg-ingestion-decision-log.md` | Every ratified + open decision |
| v3 Remediation Report | `context-library/research/OTEP Ingestion Analysis/OTEP_Remediation_Report_v3.xlsx` | Per-record + per-agency remediation data |
| Post-meeting re-run analysis | `outputs/analyses/2026-06-12-otg-ingestion-rerun-post-meeting.html` | Impact of 12 Jun decisions on catalogue size |
| Product discovery (Pawel) | `outputs/analyses/2026-06-11-otg-ingestion-pawel-discovery.md` | Opportunity-solution tree, validation experiments |
| Core discovery doc | `outputs/analyses/2026-06-10-otg-ingestion-product-discovery.md` | Data reality, scenario modelling |
| Leo handoff | `outputs/meeting-notes/2026-06-12-leo-otg-ingestion-handoff.md` | What Léo can build now vs what's blocked |

---

## Timeline

| Date | Milestone |
|---|---|
| w/c 15 Jun (S4 starts) | Xian Zhang validates category model. Michelle delivers mapping doc. Agency outreach begins. |
| During S4 (15–28 Jun) | OTEP-358 closes. Léo validates catalogue preview with new rules. ESG/MSF fix sessions. |
| S5 (29 Jun–10 Jul) | Ingestion rules review. Go/no-go against ≥350 catalogue gate. |
| Aug–Sep 2026 | MVP go-live target. Agency clean-up must complete before this. |

---

*Last updated: 2026-06-12. Update after each meeting that changes a rule, a decision status, or the data reality.*
