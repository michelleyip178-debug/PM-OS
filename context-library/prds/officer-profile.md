# Epic 1: Officer Profile Page

<!-- Paths in this file are relative to THIS file's location (knowledge/product/features/officer-profile.md). -->

## Meta
- Owner: Imelda Mo
- Status: scoping
- Priority: MVP (Must-Have)
- Last updated: 2026-05-22

## Problem
<!-- What user / business problem this solves -->
Officers lack a single, trustworthy view of their competency profile. Data exists across fragmented HR systems (HRPS, Cumulus) and is aggregated in POCDEX, but isn't surfaced to officers directly. Without a verified profile landing page, officers have no reason to trust OTEP is "about them", reducing platform adoption.

## Target users
<!-- Personas / segments — links to knowledge/users/ -->
- Public officers in ESG and PSD (MVP pilot) whose profiles are managed in HRPS or Cumulus and are present in POCDEX. Excluded: MINDEF.

## Success metrics
<!-- Which AARRR / north-star metrics this is expected (or now known) to move. Specific values where known. -->
- North Star (Post-MVP): % of officers/sessions who have updated their profile page.
- Adoption: % of officers who logged in at least once; % of officers who added new competencies.
- Guardrails: Login failure rate; Bounce rate >60%.

## Risks
<!-- Brief summary; full hypotheses live in hypotheses/<slug>.md -->
- Complex Data Mapping Rules: The backend must accurately map POCDEX Job IDs to the OTG Role Profile Bank, then to the WOG FC bank, while reconciling deltas from the legacy OTG `raw_users_skills` list.
- OTEP-110 Jira AC Mismatch: The PRD claims OTEP will show error UIs on login failure, but Jira says WOG AD handles all error states.

## Dependencies
<!-- Teams, systems, external partners -->
- POCDEX (identity source).
- WOG AD / Azure AD (via COMET) for authentication.
- OTG Role Profile Bank & WOG FC Bank (for competency matching).
- HRPS / Cumulus (source systems for designation/job ID).

## Timeline
<!-- Key milestones if relevant. Continuous delivery means this is often light. -->
- Target Launch: October 2026

## Evidence
<!-- Links to relevant ingestion artifacts (interviews, market intel, analytics) -->
- [source/adhoc/2026-05-22-officer-profile.md](../../../source/adhoc/2026-05-22-officer-profile.md) (Verbatim PRD)
- [ingestion/adhoc/2026-05-22-officer-profile.md](../../../ingestion/adhoc/2026-05-22-officer-profile.md) (Ingestion Synthesis)

## Linked
<!-- Paths are relative to THIS file's location (knowledge/product/features/<slug>.md). -->
- Shared Auth Dependencies: [wog-authentication.md](wog-authentication.md)
- Stakeholders affected: [../../../stakeholders/imelda.md](../../../stakeholders/imelda.md)

## Open questions
- OTEP-110 AC Mismatch: Does OTEP show error messaging on failed authentication or does WOG AD handle all error states? (Resolve before Sprint 4 Grooming).
- OTG Self-Assessed Info: Can OTG block the display of self-assessed info on their end to prevent officer confusion during the pilot? (Michelle to chase).

## Follow-up after launch
<!-- What to measure, when to check back, what would trigger a reversal decision -->
- Monitor the 50% "Report an error" guardrail metric. If triggered, pause and audit POCDEX/HR systems data quality.
