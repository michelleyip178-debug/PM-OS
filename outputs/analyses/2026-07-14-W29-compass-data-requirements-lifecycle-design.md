---
date: 2026-07-14
week: 2026-W29
type: requirements-doc
status: draft
audience: Huiting LIAN (POCDEX), Rama, Mark
---

# Career Compass Data Requirements, Data Lifecycle & Operational Design

**Purpose:** To document Career Compass's data requirements, data lifecycle, operational considerations, governance assumptions and integration design to support POCDEX data-sharing approval and implementation planning. This directly addresses the questions raised by Huiting LIAN regarding data coverage, lifecycle, source systems, operational support and governance considerations.

**Source:** Compass Working Group data requirements walkthrough, 2026-07-13 ([full meeting notes](../meeting-notes/2026-07-13-W29-compass-data-requirements-walkthrough.md)), cross-checked against the live POCDEX data model, data dictionary (33 tables, 609 columns) and API documentation shared same day.

**Status note:** The current `otep-pocdex` API build is fixture-backed (30 seeded officers, in-memory, no live database) — everything below is an agreed *contract*, not yet a tested one. Flag this to Huiting so the requirements aren't read as validated end-to-end.

---

## 1. Executive Summary

### Objective

Career Compass requires employment and competency-related information to:

1. Verify officer eligibility
2. Construct officer profiles
3. Map competencies
4. Recommend opportunities
5. Support operational troubleshooting
6. Support audit and access reviews

### Scope

**MVP Scope**
- Active officers only
- Daily API sync from POCDEX (not real-time — POCDEX's own upstream sync from HRPS/Cumulus is also daily, so real-time polling adds no freshness)
- Core profile and competency mapping (competency mapping is indirect — see Section 2, Competency Domain)
- No bulk historical data migration
- No terminated/inactive officer lifecycle automation

**Post-MVP Scope**
- CAM integration (real-time deactivation signal)
- Automated lifecycle management
- Operational APIs
- Additional troubleshooting capabilities

---

## 2. Data Requirement Matrix

| Data Domain | Field | Purpose | MVP? | Historical? | Current? | Future? |
|---|---|---|---|---|---|---|
| Officer Identity | POCDEX UID | Unique officer identification | Yes | No | Yes | No |
| Officer Identity | NRIC / FIN / Passport (`id_type` via `pocdex_code`) | Primary identity match; email is the fallback lookup path (`POST /v1/officers/identity/resolve` supports NRIC/FIN or email) for officers without NRIC | Yes | No | Yes | No |
| Officer Identity | Email | Fallback identity resolution for non-NRIC officers (e.g. foreign nationals) — **open: confirm email is reliably populated for this population** | Yes | No | Yes | No |
| Employment | Agency | Profile generation | Yes | No | Yes | No |
| Employment | `employment.is_primary` | Identifies which of an officer's multiple **employments** (e.g. main agency vs. secondment) is primary | Yes | No | Yes | No |
| Employment | `employment_type` (+ `contingent_worker` / `contingent_worker_type`) | Excludes TIVO, ADJUNCT (Cumulus-specific), CASUAL (HRPS + Cumulus) from Compass access — **open: confirm `contingent_worker_type` is a cleaner exclusion key than string-matching `employment_type`** | Yes | No | Yes | No |
| Employment | `employment.status` | Filter to active employments — `GET /employments` supports a `status` query param (`active`/`terminated`); Compass must pass this filter explicitly, it is not automatic | Yes | No | Yes | No |
| Position | Position ID | Competency mapping join key; also used to detect position changes between syncs (no separate status field needed for this) | Yes | No | Yes | No |
| Position | `position_jobinfo.job_id` | Join key into Compass's own competency bank — **the entire competency-matching feature depends on this field being reliably populated and stable** | Yes | No | Yes | No |
| Position | `position_jobinfo.main_position_indicator` (API: `is_main_position`) | Identifies which of an officer's multiple **positions within one employment** (double-hatting) is the main one — display the position where `true` | Yes | No | Yes | No |
| Position | `position_jobinfo.status` | Position-level status — **open, reopened**: no `status` query param exists on `GET /positions` in current API docs, so this filtering may need to happen client-side; original decision that this field was redundant assumed POCDEX pre-filters, which isn't confirmed | TBD | No | Yes | No |
| Position | `endDate` | Not requested — Compass only requests active positions, so forward-looking end dates are out of scope | No | No | No | No |
| Competency | Expected Competencies | Gap analysis — derived via `job_id`/`position_id` lookup into Compass's own competency bank, **not** POCDEX's `competency` table | Yes (indirect) | No | Yes | No |
| Competency | Self-Assessed Competencies | Career planning | Future | No | Yes | No |
| Competency | Endorsed Competencies | Pending policy decision | Future | No | Yes | No |
| Security Clearance | `officer.security_clearance` and related fields | Confirmed **not required** — no Compass use case identified (POCDEX flags this as relevant to physical/digital access gating and cross-agency transfers, but Compass doesn't gate on clearance level) | Excluded | — | — | — |

### Business Justification

For each field: why it's required, which feature consumes it, and what happens if it's unavailable — to be filled in by Rama per data table before this goes to Huiting, per the action item from the 07-13 walkthrough.

### Explicitly NOT requested

- POCDEX's `competency` table (any fields) — Compass avoids a second competency source of truth alongside its own bank
- `reporting_manager_id` / `reporting_manager_name` / `reporting_manager_email` — not needed for MVP profile/recommendation use case, but flagged for R1/R2 (a future "supervisor dashboard" would need exactly these fields, already available)
- Secondment indicator as a standalone display flag — only the current (seconded) position is ever shown, so a separate flag is redundant
- Historical/past position records — MVP shows current active position(s) only, not a working-history timeline

---

## 3. Data Coverage Requirements

### Current Data

Required for:
- Officer login
- Opportunity recommendations
- Profile generation

### Historical Data

**MVP:** No historical data required.

**Post-MVP** potential operational use cases:
- Audit reviews
- Incident investigation
- Employment movement verification

Retention period subject to approval (see Section 8 — **unresolved**, 1 year vs. 3 years floated, unconfirmed).

### Future-Dated Data

**Current landing position: not required.**

Reason:
- Significant complexity
- Data volatility
- Effective-date management concerns

---

## 4. End-to-End Data Lifecycle

**Flow 1 — Employment Data Acquisition**
```
HRPS / Cumulus → POCDEX → Career Compass API → Compass Database → Profile Generation
```
Purpose: obtain latest employment information at login.

**Flow 2 — Officer Login**
```
Officer Login → Career Compass → POCDEX API Lookup → Employment Validation → Profile Generation
```

**Flow 3 — Competency Mapping**
```
Job ID → Compass Competency Bank Lookup → Gap Analysis → Opportunity Matching
```
Note: this does not query POCDEX's `competency` table — `job_id` is the only POCDEX-sourced input to this flow.

**Flow 4 — Account Lifecycle Management**
```
Officer Status Change → CAM → Career Compass → Update Access Status
```
Post-MVP only. For MVP, no-pay-leave (>90 days) and departed officers are handled via WOG AD's existing deactivation policy (5–14 days), not Compass-side logic — Compass does not request a no-pay-leave flag from POCDEX.

---

## 5. System of Record / Source of Truth

| Data Element | Source of Truth | Consumer |
|---|---|---|
| Employment Status | POCDEX | Compass |
| Agency Information | POCDEX | Compass |
| Position Information | POCDEX | Compass |
| Account Deactivation (post-MVP) | CAM | Compass |
| No-Pay-Leave Deactivation (MVP) | WOG AD | Compass (indirect — missing-user comparison) |
| Competency Mapping | Compass's own competency bank (keyed by POCDEX `job_id`) | Compass |
| User Preferences | Compass | Compass |

**Principle:** Only one system should be responsible for changing each data element. This directly responds to Huiting's concern: *which system is changing the data?*

**Open dependency:** Compass's competency bank must be keyed the same way as POCDEX's `job_id`, or a mapping layer is needed against the existing WOG 30 Job Families taxonomy — not yet confirmed.

---

## 6. Officer Lifecycle Scenarios

**Scenario A — Active Officer**
Outcome: can login, profile generated, recommendations available.

**Scenario B — Seconded Officer**
Current requirement: request only the seconded (current) agency position from POCDEX, not the home/mother agency. Home agency data is treated as an upstream problem outside Compass's ask.

**Scenario C — Double-Hat Officer**
Current requirement: request all positions plus `position_jobinfo.main_position_indicator` per position; display the one marked `is_main_position: true`.
**Open edge case:** a past incident showed two positions both returning `true`. Likely explanation (per schema cross-check): the check compared across two different *employments* rather than within one — `is_main_position` is scoped per-employment, and `employment.is_primary` is the separate, employment-level flag. Recommend re-checking the specific incident against the correct field/level before raising it with Huiting as a data-quality issue.

**Scenario D — NPL (No-Pay-Leave) Officer**
Current proposal: handled entirely via WOG AD's existing deactivation policy; no platform access once WOG AD deactivates. Compass does not receive or request a no-pay-leave flag from POCDEX. Pending confirmation with data owners.

**Scenario E — Officer Leaves Public Service**
MVP position: no automated lifecycle management — same missing-user comparison treatment as NPL.
Post-MVP: CAM integration provides real-time deactivation signal.
Operational handling (SOP) required in the gap until lifecycle automation ships.

---

## 7. Day 2 Operations Model

| Scenario | Investigation Method | Escalation |
|---|---|---|
| Login failure | Verify employment status via POCDEX lookup | Compass Support |
| Incorrect agency | Verify source data | POCDEX |
| Missing profile | Verify API response | Compass |
| Resigned officer still has access | Verify CAM/WOG AD deactivation status | Compass / CAM Team |

**Environment caveat:** the current POCDEX API build is fixture-backed (30 seeded officers, no live DB). None of the above operational flows have been verified against real POCDEX behavior yet — treat this section as the target operating model, not a tested runbook, until live infra (also blocking QA/UAT — see open item #58) is in place.

---

## 8. Audit & Data Retention

**Active Officers:** data retained while account remains active.

**Inactive Officers:** retention subject to approval and IM policies. **Two separate, still-unresolved figures — do not conflate:**
- Compass's own retention policy for inactive/departed officer profiles: working assumption is 1 year (matching OTG's existing anonymize-after-1-year policy), but 3 years was floated once and never resolved. Needs explicit confirmation before it goes into a formal SOP.
- POCDEX's own source-data retention for employment details: up to 7 years (per POCDEX policy) — a different number for a different system, not Compass's retention period.

**Audit Records** required for:
- Access investigations
- Account reviews
- Security audits

---

## 9. Open Questions Requiring Alignment

| Topic | Owner |
|---|---|
| Endorsed Competencies | Compass BO |
| NPL Treatment | Compass + POCDEX |
| NRIC vs. POCDEX UID vs. email fallback for non-NRIC officers | Compass + IDSC |
| CAM Lifecycle Behaviour | CAM Team |
| Operational API Design | POCDEX |
| Compass inactive-profile retention period (1 yr vs. 3 yr) | Michelle |
| `isPrimary`/`is_main_position` "both true" edge case — re-check before raising to Huiting | Xian Zhang / engineering |
| Position-level status filtering — does POCDEX support it server-side, or must Compass filter client-side? | Xian Zhang / engineering |
| `contingent_worker_type` as cleaner TIVO/ADJUNCT/CASUAL exclusion key vs. string-matching | Xian Zhang / engineering |
| Record-update propagation time from source system to POCDEX-visible change | Michelle (needs POCDEX-side answer) |
| Delta vs. full load support on the sync API | Xian Zhang / team |

---

## Appendix A — Questions Raised by Huiting and Responses

| Question Raised | Response Section |
|---|---|
| What data domains are required? | Section 2 |
| Historical / current / future data? | Section 3 |
| Data flow diagrams? | Section 4 |
| Which system owns each piece of data? | Section 5 |
| How are terminated/departed officers handled? | Section 6 |
| How will operational troubleshooting work? | Section 7 |
| Audit and retention? | Section 8 |

This appendix makes it explicit that every concern Huiting has raised has been addressed systematically.

---

## Before This Goes to Rama / Huiting

- [ ] Rama to add business justification per field/table (why required, which feature consumes it, impact if unavailable) — Section 2
- [ ] Confirm Compass inactive-profile retention: 1 year vs. 3 years (Section 8) — unresolved, don't let a number ship unconfirmed
- [ ] Re-check the "both true" `is_main_position` incident against the correct field/level before flagging to Huiting as a data issue (Section 6, Scenario C)
- [ ] Confirm position-level status filtering exists (or doesn't) on POCDEX's side — affects whether Section 2's `position_jobinfo.status` row is needed
- [ ] Confirm `job_id` is reliably populated/stable — the whole competency-matching flow (Section 4, Flow 3) depends on it
- [ ] Strip internal-only questions/comments before sending to Huiting — she should see the finalized ask, not the team's working notes
- [ ] Get MHA sub-agency codes from Rama, key into role-profile sheet (referenced but not detailed in this doc — separate housekeeping item)
- [ ] Flag the fixture-data/no-live-DB caveat (this doc's top note and Section 7) so Huiting doesn't read this as already validated against live POCDEX

---

## Related

- [2026-07-13-W29-compass-data-requirements-walkthrough.md](../meeting-notes/2026-07-13-W29-compass-data-requirements-walkthrough.md) — source meeting, all decisions and schema cross-check
- `00-hub/open-items.md` #55 (Huiting's formal ask this doc responds to), #56 (sync cadence), #31 (fixture-data flag), #58 (QA/UAT infra blockers)
