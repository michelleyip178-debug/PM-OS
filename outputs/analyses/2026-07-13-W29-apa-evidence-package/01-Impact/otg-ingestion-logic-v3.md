---
title: OTG Ingestion Logic — v3 (canonical reference)
owner: Michelle Yip
last_updated: 2026-06-26
status: Ratified
relates_to: OTEP-192, OTEP-427, OTEP-358, OTEP-86, OTEP-289
decision_log: context-library/decisions/otg-ingestion-decision-log.md
---

# OTG Ingestion Logic — v3

**What this is:** The single source of truth for how the OTG Excel export is processed into CareerCompass. Use this before grooming any ingestion-adjacent story. For Léo before implementation, for Jobelle's handover, for yourself after two weeks away.

**Last major update:** 2026-06-26 — Ringfencing eligibility logic added (I-022); BusinessUnit made optional (I-021), category model locked at 3 (I-018), competencies optional (I-020).

---

## OTG Export Fields (27 fields)

These are the fields in the standard OTG Excel export file. The schema is locked (2026-05-14, I-002). If OTG renames a column, the upload fails with a clear error — no silent best-effort parsing.

| # | Field | Description |
|---|---|---|
| 1 | `opportunity_id` | Unique GigID — primary/upsert key |
| 2 | `name` | Opportunity title |
| 3 | `description` | Full description text |
| 4 | `owner_id` | Owner's email address |
| 5 | `owner_name` | Owner's display name |
| 6 | `host_organisation` | Agency/org hosting the opportunity |
| 7 | `status` | Always "Open" in this file |
| 8 | `start_date` | Start date (may be null for Jobs/Secondments) |
| 9 | `end_date` | Closing date (`00/01/1900` = evergreen = nil) |
| 10 | `date_created` | Record creation date |
| 11 | `date_modified` | Last modified date |
| 12 | `total_applicants` | Applicant count |
| 13 | `filled` | Yes / No / null |
| 14 | `opportunity_type` | e.g. Gig, SJR, STIP, Job/Secondment, Internal Rotation, IJP |
| 15 | `business_unit` | e.g. Human Resources, Policy & Planning |
| 16 | `function` | e.g. Finance, Customer Service & Engagement |
| 17 | `remote` | Yes / No |
| 18 | `time_commitment` | e.g. "2 days/week", "8 hours/day" |
| 19 | `required_skills` | Semicolon-delimited list of skills from the Talents field |
| 20 | `ringfencing_active` | Yes / No — whether eligibility filters apply to this gig |
| 21 | `ringfencing_bu_filter_type` | Always INCLUDE. Controls how `ringfencing_bu_values` is applied. |
| 22 | `ringfencing_bu_values` | Semicolon-separated list of allowed business units |
| 23 | `ringfencing_function_filter_type` | Always INCLUDE. Controls how `ringfencing_function_values` is applied. |
| 24 | `ringfencing_function_values` | Semicolon-separated list of allowed functions |
| 25 | `ringfencing_location_filter_type` | INCLUDE or EXCLUDE. Controls how `ringfencing_location_values` is applied. |
| 26 | `ringfencing_location_values` | Semicolon-separated list of agencies (included or excluded per filter type) |
| 27 | `formsg_url` | FormSG application URL — optional; missing triggers no-apply-link UI state (I-006) |

**Note on fields 20–26:** When `ringfencing_active = No`, fields 21–26 are empty strings (not null). Ingest all 7 columns for every row. Empty string on an active-ringfencing gig = fail-closed (I-022).

---

## Field-by-Field Ingestion Rules

| Export field | Rule | Decision |
|---|---|---|
| `opportunity_id` | **Required — hard skip if missing** | I-008 |
| `name` | **Required — hard skip if missing** | I-008 |
| `description` | **Required — hard skip if missing** | I-008 |
| `owner_id` | Not a blocking field. Store. | — |
| `owner_name` | Not a blocking field. Store. | — |
| `host_organisation` | **Required — must resolve to ref_agency. Must be in pilot agency allowlist.** Hard skip if unresolvable or not in allowlist. Allowlist is configurable, not hardcoded. | I-001, I-008 |
| `status` | Always "Open" in file. Apply lifecycle filter regardless: visible if `closing_date > today OR closing_date IS NULL`. | I-004, I-011 |
| `start_date` | **Optional for Job + Secondment** (ingest with null, log warning). **Required for Gig + STIP** (hard skip if missing). | I-015 |
| `end_date` | **Required — but `00/01/1900` is valid (= nil = evergreen).** Hard skip if date is unresolvable. Nil means no closing date — still ingest. | I-005, I-008 |
| `date_created` | Not a blocking field. Store for audit/sorting. | — |
| `date_modified` | Not a blocking field. Store for audit/sorting. | — |
| `total_applicants` | Not a blocking field. Store. | — |
| `filled` | Not a blocking field. Store. (filled="Yes" records likely excluded anyway by status filter.) | — |
| `opportunity_type` | **Required — must be a recognised prefix mapping to a known MVP category.** Hard skip if unrecognised or missing. See type → category table below. | I-007, I-008, I-018 |
| `business_unit` | **Optional — display-only. Never a hard skip.** Null → ingest, log warning. | I-021 |
| `function` | **Optional — display-only. Never a hard skip.** Null → ingest, log warning, no filter match. | I-014 |
| `remote` | Not a blocking field. Store. | — |
| `time_commitment` | **Required for Gig + STIP only.** Hard skip if missing on Gig/STIP. N/A for Jobs/Secondments — field ignored. | I-013 |
| `required_skills` | **Optional across all types.** Null → ingest; UI shows "no competencies" banner. C@G jobs structurally have none. | I-020 |
| `ringfencing_active` | Not a blocking field. Store. Drives eligibility check at query time (I-022). | I-022 |
| `ringfencing_bu_filter_type` | Not a blocking field. Store. Always INCLUDE in current data. | I-022 |
| `ringfencing_bu_values` | Not a blocking field. Store as-is (semicolon-separated). Empty string when ringfencing inactive. | I-022 |
| `ringfencing_function_filter_type` | Not a blocking field. Store. Always INCLUDE in current data. | I-022 |
| `ringfencing_function_values` | Not a blocking field. Store as-is (semicolon-separated). Empty string when ringfencing inactive. | I-022 |
| `ringfencing_location_filter_type` | Not a blocking field. Store. INCLUDE or EXCLUDE. | I-022 |
| `ringfencing_location_values` | Not a blocking field. Store as-is (semicolon-separated). Empty string when ringfencing inactive. | I-022 |
| `formsg_url` | **Optional.** Null → ingest, log warning. UI shows Amber's no-apply-link state when missing. | I-006 |

---

## Hard-Skip Checklist

A record is dropped if **any** of the following are true:

1. `opportunity_id` missing
2. `name` missing
3. `description` missing
4. `host_organisation` missing, unresolvable, or not in the 6-agency allowlist
5. `opportunity_type` unrecognised or not in the 3 MVP categories
6. `end_date` missing and value is not `00/01/1900`
7. `start_date` missing on a **Gig** or **STIP**
8. `time_commitment` missing on a **Gig** or **STIP**

Everything else is optional. No partial imports — a record either fully passes or fully skips.

---

## Type → Category Mapping (MVP, ratified I-018)

| OTG `opportunity_type` prefix | CareerCompass Category | Start date | Time commitment |
|---|---|---|---|
| `Job`, `Secondment`, `Internal Rotation`, `IJP` | **Jobs** | Optional | N/A |
| `STIP` | **STIPs** | Required | Required |
| `Gig` | **Gigs** | Required | Required |
| `SJR` | **Excluded MVP** (I-009) | — | — |
| Unrecognised / missing / `agilePSD` / `Other` / `No tag` | **Hard skip** (I-007) | — | — |

**PSFG:** Excluded from MVP (I-016). If the prefix is later identified in OTG data, it re-enters scope post-MVP.

**Secondment is a mechanism, not a category** (I-017). Records tagged `Secondment` display under "Jobs" in CareerCompass.

---

## Pilot Agency Allowlist (I-001)

MVP import scoped to 6 pilot agencies (marked ✅). All other agencies in the WOG allowlist are available for R1+ onboarding. Records from agencies not in the full list hard-skip.

Allowlist must be configurable, not hardcoded.

| Abbreviation | Full Name | MVP Pilot |
|---|---|---|
| AGD | Accountant-General's Department | |
| AIC | Agency for Integrated Care | |
| A*STAR | Agency for Science, Technology and Research | |
| BCA | Building and Construction Authority | |
| CPF | Central Provident Fund Board | |
| CSC | Civil Service College | |
| CEA | Council for Estate Agencies | |
| CSA | Cyber Security Agency of Singapore | |
| EDB | Economic Development Board | |
| EMA | Energy Market Authority | |
| ESG | Enterprise Singapore | ✅ |
| HPB | Health Promotion Board | |
| HTA | Home Team Academy | |
| IRAS | Inland Revenue Authority of Singapore | |
| IPOS | Intellectual Property Office of Singapore | |
| JUD | Judiciary | |
| MCCY | Ministry of Culture, Community and Youth | ✅ |
| MDDI | Ministry of Digital Development and Information | ✅ |
| MOE | Ministry of Education | |
| MOF | Ministry of Finance | |
| MOH | Ministry of Health | |
| MHA | Ministry of Home Affairs | |
| MINLAW | Ministry of Law | |
| MOM | Ministry of Manpower | |
| MND | Ministry of National Development | |
| MSF | Ministry of Social and Family Development | |
| MSE | Ministry of Sustainability and the Environment | |
| MTI | Ministry of Trade and Industry | |
| MOT | Ministry of Transport | |
| NCSS | National Council of Social Service | |
| NEA | National Environment Agency | |
| NHB | National Heritage Board | |
| NLB | National Library Board | |
| NPB | National Parks Board | |
| NSCS | National Security Coordination Secretariat | |
| NYC | National Youth Council Singapore | |
| PMO-Comms | PMO - Communications Group | |
| PMO-Strategy | PMO - Strategy Group | |
| PUB | PUB Singapore's National Water Agency | |
| PA | People's Association | |
| PSD | Public Service Division | ✅ |
| RP | Republic Polytechnic | |
| SC | Singapore Customs | |
| SLA | Singapore Land Authority | |
| SPF | Singapore Police Force | |
| SP | Singapore Polytechnic | |
| SSC | Singapore Sports Council | |
| STB | Singapore Tourism Board | |
| SSG | SkillsFuture Singapore Agency | |
| TP | Temasek Polytechnic | |
| URA | Urban Redevelopment Authority | ✅ |
| Vital | Vital | |
| WSG | Workforce Singapore | |
| YRB | Yellow Ribbon Singapore | |
| CAAS | Civil Aviation Authority of Singapore | ✅ |

---

## Nil Date Handling (I-005, OTEP-358)

OTG represents an evergreen opportunity (no closing date) as `00/01/1900`. This is a sentinel value, not a real date.

- `00/01/1900` → parse as `nil` closing date → valid, ingest
- Visibility rule: `closing_date > today OR closing_date IS NULL` (I-004)
- OTEP-358 spike defines the permanent approach to replace the Sprint 3 hardcoded intercept

---

## Job Function → WOG Category Mapping (I-019)

At ingestion, `function` (OTG job_family) translates to `wog_job_category` using the hardcoded map in OTEP-ingestion-v3 Story 4. This is the canonical filter layer — both OTG and C@G resolve to WOG categories.

- Unknown `function` → `wog_job_category = null`, warning logged, record not skipped
- Full mapping: `context-library/decisions/wog-taxonomy-mapping.md`
- OTG A–K job families pending confirmation — add to map when confirmed

---

## Lifecycle Rule (I-004, I-011)

After ingestion, visibility is controlled by:

```
closing_date > today  →  visible
closing_date IS NULL  →  visible (evergreen)
closing_date ≤ today  →  not visible (excluded at query time)
```

Expired records are not ingested (I-011). But evergreen records (`00/01/1900` → null) are always visible.

---

## Ring-Fencing (I-012, I-022)

MVP ring-fencing = **agency-level only** for ingestion scope. Eligibility matching uses three dimension filters for gigs that have ringfencing active.

**Eligibility check (applied at query/surfacing time, not ingestion time):**

```
if ringfencing_active = No:
    → surface to all users (no check needed)

if ringfencing_active = Yes:
    → user must pass ALL THREE of:
        1. BU filter (always INCLUDE): user.business_unit IN ringfencing_bu_values
        2. Function filter (always INCLUDE): user.function IN ringfencing_function_values
        3. Location filter:
             if ringfencing_location_filter_type = INCLUDE: user.agency IN ringfencing_location_values
             if ringfencing_location_filter_type = EXCLUDE: user.agency NOT IN ringfencing_location_values
    → fail any one = ineligible
```

**Edge cases:**
- User attribute missing (no BU or function recorded) → **fail** that dimension (fail-closed default)
- User has multiple BU/function values → **any match = pass** for that dimension
- Empty filter values on an active gig → **fail-closed** (treat as "no one passes"), flag as data quality issue

**New ringfencing columns in the OTG export (as of 2026-06-26 data, 250 gigs have active ringfencing):**

| Column | Values |
|---|---|
| `ringfencing_active` | Yes / No |
| `ringfencing_bu_filter_type` | INCLUDE (always) |
| `ringfencing_bu_values` | Semicolon-separated BU list |
| `ringfencing_function_filter_type` | INCLUDE (always) |
| `ringfencing_function_values` | Semicolon-separated function list |
| `ringfencing_location_filter_type` | INCLUDE or EXCLUDE |
| `ringfencing_location_values` | Semicolon-separated agency list |

Ingest all 7 columns for every gig. When `ringfencing_active = No`, store empty strings (not nulls) in the value columns to avoid parsing ambiguity.

R1+ adds job-family and officer-level ring-fencing.

SJR is nomination-based (officer-level) and handled as a separate module — not affected by this rule.

---

## Catalogue State (as of 12 Jun 2026 data)

| Stage | Count |
|---|---|
| All OTG opportunities | ~2,023 |
| Open (not expired) | 633 |
| Pass under old rules (v2) | ~160 (25%) |
| Pass under v3 rules (post 12 Jun + 26 Jun decisions) | **~430+ (68%+)** |
| Still blocked | ~185 |
| SJR (excluded by design) | 39 |

The +270 unlock came from: StartDate optional for Jobs (I-015, +~255), Function optional (I-014, included in above), TimeCommitment exempt for Jobs (I-013, +5), BusinessUnit optional (I-021, +~16).

**Go/no-go gate at launch: ≥350 catalogue.** Already reachable from rule changes alone.

Still-blocked records need agency source data fixes:
- TypeTag issues (118): MSF (37), ESG (19), NLB, MTI — bad/missing type prefixes
- EndDate missing (47): NCSS (15), ESG (13)
- Missing agency field (18): OTG admin to fix

---

## Decision Reference (For Reference)

Short descriptions of every decision cited in the field rules above. Full rationale in the [decision log](otg-ingestion-decision-log.md).

| ID | Decision | Date |
|---|---|---|
| I-001 | Pilot agency scope: 6 agencies only for MVP import (Public Service Division, Enterprise Singapore, Ministry of Digital Development and Information, Urban Redevelopment Authority, Ministry of Culture Community and Youth, Civil Aviation Authority of Singapore). Allowlist is configurable, not hardcoded — R1 adds Workforce Singapore, People's Association, Ministry of Social and Family Development. | 2026-06-02 |
| I-004 | Opportunity lifecycle: visible if `closing_date > today OR closing_date IS NULL`. No manual activation step. | 2026-05-13 |
| I-005 | Nil closing date (`00/01/1900`) = evergreen = valid. Parse as nil, not an error. | 2026-05-29 |
| I-006 | `formsg_url` is optional. Missing → ingest, show Amber's no-apply-link UI state on the detail page. Not a hard skip. | 2026-06-26 |
| I-007 | Unrecognised type prefixes hard-skip. OTEP does not guess or normalise the tag. Agencies and DevOps must fix source data. | 2026-06-04 |
| I-008 | Hard-skip any record with a missing or unresolvable required field. No partial imports. A record either fully passes or fully skips. | 2026-06-08 |
| I-009 | SJR excluded from MVP listing and ingestion. Nomination-based, requires a separate module. No SJR cards in CareerCompass MVP. | 2026-05-21 |
| I-011 | MVP ingests open opportunities only. All expired records excluded. Not date-range limited — a Secondment posted in 2024 that's still open today is in scope. | 2026-06-12 |
| I-012 | MVP ring-fencing = agency-level only. Officer from Agency A sees their agency's opportunities + open-to-all. R1+ adds job-family and officer-level ring-fencing. | 2026-06-12 |
| I-013 | TimeCommitment required for Gig and STIP only. Jobs and Secondments are treated as full-time — TC field does not apply. | 2026-06-12 |
| I-014 | Function field is optional and display-only for all types. Missing function → ingest with null, log warning. Never a hard skip. | 2026-06-12 |
| I-015 | StartDate optional for Job and Secondment types (standing roles, no fixed start by design). Required for Gig and STIP. | 2026-06-12 |
| I-016 | PSFG excluded from MVP. Prefix not yet identified in OTG data. Deferred to post-MVP. | 2026-06-26 |
| I-017 | "Secondment" is a posting mechanism, not a user-facing category. Secondment records ingest as "Jobs" in CareerCompass. Same for Internal Jobs and C@G jobs. | 2026-06-12 |
| I-018 | MVP category model locked at 3: Jobs · STIPs · Gigs. SJR excluded (I-009). PSFG excluded (I-016). Safe to groom OTEP-86 and OTEP-289 against this. | 2026-06-26 |
| I-019 | WOG 29-category taxonomy is the canonical filter layer. Both OTG and C@G translate their native classification to `wog_job_category` at ingestion. C@G Indus codes are no longer canonical. | 2026-06-25 |
| I-020 | Competency field (`required_skills`) is optional across OTG and C@G pipelines. C@G jobs structurally have no competency data. Missing competencies → ingest, UI shows "no competencies" banner. | 2026-06-26 |
| I-021 | BusinessUnit is optional for all types. Display-only context — an officer can still evaluate and apply without it. Unlocks ~16 previously blocked records. | 2026-06-26 |
| I-022 | Ringfencing eligibility: active ringfencing requires user to pass all three dimension filters (BU + Function + Location, AND-ed). Missing user attribute = fail. Multiple values = any match passes. Empty filter on active gig = fail-closed. | 2026-06-26 |

---

## Open Decisions

| # | Question | Owner | Blocks |
|---|---|---|---|
| I-010 | Does ESG double-post to OTG and C@G? Which is authoritative? | Xian Zhang (reaching out to ESG HR) | OTEP-348 ESG ingestion |

All other decisions ratified. Safe to build against v3 rules.

---

## Key Tickets

| Ticket | What it is | Status |
|---|---|---|
| OTEP-192 | Core ingestion pipeline | Active |
| OTEP-358 | Nil-date handling spike | In Progress (parking to Backlog S4 close) |
| OTEP-427 | Tighten ingestion logic / edge cases | In Progress (parking to Backlog S4 close) |
| OTEP-348 | Scheduler / automated sync | Backlog — blocked on I-010 |
| OTEP-397 | Admin upload UI | Active |

---

*Last updated: 2026-06-26 by Michelle Yip*
*Decisions reference: `context-library/decisions/otg-ingestion-decision-log.md`*
*v3 remediation data: `context-library/research/OTEP Ingestion Analysis/OTEP_Remediation_Report_v3.xlsx`*
