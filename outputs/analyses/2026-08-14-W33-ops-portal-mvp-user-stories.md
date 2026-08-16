# Ops Portal — MVP User Stories

**Date:** 2026-08-14

**Source:** [Ops Portal PRD v0.7](../prds/2026-08-14-W33-ops-portal-prd-confluence.md) — MVP scope only (portal + daily automatic check + batch processing). Receiving-team stories (steps 3-6 of the case workflow) are Fast-Follow, not MVP, and aren't included here — see the PRD's Release Plan.

---

## MVP User Stories

| # | Epic | User Story | Acceptance Criteria | Blocking Open Item |
|---|---|---|---|---|
| US-1.1 | Case Overview & Navigation | As a BO, I want to see how many cases are open and how urgent they are when I start my session, so I know where to focus first. | Shows count of open cases by priority (P0/P1); clicking a priority group opens the case list; reflects same-day data with no manual refresh needed | #7 (no wireframes/IA) |
| US-1.2 | Case Overview & Navigation | As a system, I want to restrict portal access to the BO or someone they specifically assign, so Product/Engineering can't use it to investigate a live issue directly. | Only BO role (or BO-delegated role) can log in; attempted access by other roles is blocked and logged; enforced at API/auth layer, not just UI | #3 (read-only enforcement layer unspecified) |
| US-2.1 | Identity Exceptions | As a BO, I want to see officers whose identity details don't clearly match one person, so I can review before anything is routed. | Lists cases with reason codes `ID-NO-MATCH`, `ID-MULTI-MATCH`, `ID-TOKEN-CONFLICT`; shows the detection rule that fired; no profile exposed or linked automatically | #7 |
| US-2.2 | Identity Exceptions | As a BO, I want to sort an identity-exception case as "Identity/contact change" and send it on, so it reaches the receiving team with the right context. | Category limited to Identity/contact change; optional note field; routing logged (BO identity, timestamp, category); never bulk-eligible | #4 (audit schema), #6 (classification conflict) |
| US-3.1 | Employment Record Exceptions | As a BO, I want to see cases of a genuine second job versus a mistaken duplicate, so I can tell the two apart before routing. | Lists cases with reason codes `EMP-MULTI-ACTIVE`, `EMP-AGENCY-CONFLICT`; shows all active employment records side by side (employmentid, agency, source system) | #7 |
| US-3.2 | Employment Record Exceptions | As a BO, I want to sort an employment-exception case as "Multiple or conflicting records" and send it on, so the receiving team can classify duplicate vs. legitimate multi-hat. | Category limited to Multiple or conflicting records; never bulk-eligible | #6 |
| US-4.1 | Profile Differences | As a BO, I want to see the before-and-after values for whatever field changed, so I understand exactly what triggered the case. | Shows old value, new value, changed field(s) — scope: `agencyid`, `agencyname`, `jobfamily`, `jobfunction`, `jobgrade`, `employmentid`, `primaryposition`, `jobId`, `officerId`, `idType`, `status`; case pre-tagged with a taxonomy category | #7 |
| US-4.2 | Profile Differences | As a BO, I want to sort a detected change into the right category and send on anything meaningful, so routine noise doesn't reach the receiving team unnecessarily. | Categories: Organisational move, Role change, Classification change, Reporting/org-structure change, Eligibility/status change; `PROFILE-CHANGED` cases get a suggested category, BO can override; classification changes get their own reason code, not lumped into `PROFILE-CHANGED` | #9 (officer messaging not lifecycle-aware) |
| US-5.1 | Daily Automatic Check & Batch | As a system, I want to re-pull every officer's full record once a night and compare it field-by-field against the previous day's snapshot, so drift is caught automatically. | Runs once per day for all officers in scope (6 pilot agencies); compares against the diffed field scope (US-4.1); raises a correctly-coded, correctly-categorized case per changed field | #14 (effort re-validation), #16 (diffability unconfirmed with POCDEX) |
| US-5.2 | Daily Automatic Check & Batch | As a BO, I want same-category cases from one nightly run grouped together, so I can review several similar ones at once. | Grouping applies only to Organisational move, Role change, Classification change, Eligibility/status change; Identity/contact change and Multiple/conflicting records never grouped | #6 (blocking) |
| US-5.3 | Daily Automatic Check & Batch | As a BO, I want to select an entire batch (or deselect specific cases) and route the remainder in one action, so I'm not clicking through dozens of near-identical cases individually. | Bulk action only for the four lower-risk categories; each case in the batch still logged individually; partial-failure behavior explicitly defined | #5 (partial-failure behavior undefined, blocking), #6 |
| US-5.4 | Daily Automatic Check & Batch | As a BO, I want to see records where the nightly check failed or is stuck, and why, so I can flag it rather than assume no news is good news. | Shows last refresh attempt, status, error reason per officer/batch; distinguishes newly-missing (flag as regression) vs. persisting-missing (known backlog, don't re-raise) | #16 |
| US-6.1 | Audit Trail & History | As a system, I want to permanently log who categorized and routed each case, when, and into what category, so there's a complete, reviewable history. | Every action (individual or bulk) creates an audit record with BO identity, timestamp, category, case reference; records immutable; bulk actions log each case individually | #4 (blocking) |
| US-6.2 | Audit Trail & History | As a BO (or anyone with defined query rights), I want to see the full timeline for any case, so I can answer "what happened and why" without digging through raw logs. | View-only; shows detection → categorization → routing (MVP scope ends here); query rights beyond BO still need defining | #4 |
| US-7.1 | Officer-Facing Messaging | As an officer, I want to see some sign that my record issue is being looked at once it's routed, rather than silence, so I know something is happening even before it's fixed. | Message tied to case's reason code (e.g. `ID-NO-MATCH` → "We could not match your employment information"); shown from routing onward only; MVP ships the mechanism, not improved content | #9 (messaging is vague, non-lifecycle-aware — content improvement not in this story) |

---

## Explicitly Out of Scope for MVP

| Excluded | Why |
|---|---|
| Receiving team triage, investigation, or fix actions (workflow steps 3-6) | Fast-Follow, not MVP |
| Automatic deactivation for departed officers (CAM integration) | Genuinely unscoped, not simply deferred (#15) |
| NRIC/FIN identity-matching fallback | Blocked on privacy/security approval — not buildable regardless of engineering capacity (#1) |
| Any BO ability to edit, patch, or merge officer data | Entire MVP is look-and-sort only, by design |

---

*Generated 2026-08-14. Derived from Ops Portal PRD v0.7's MVP scope — receiving-team workflow stories intentionally excluded as Fast-Follow. Update this doc if the PRD's MVP scope changes again.*
