# Epic 2: My Development Page

<!-- Paths in this file are relative to THIS file's location (knowledge/product/features/my-development.md). -->

## Meta
- Owner: Imelda Mo
- Status: scoping
- Priority: MVP (Must-Have)
- Last updated: 2026-05-22

## Problem
<!-- What user / business problem this solves -->
Officers struggle to identify which competencies to develop and subsequently take action because competency gap information today is unclear. The existing OTG tool has poor UX and lacks full role profile coverage, resulting in a 9% relogin rate among 91k onboarded officers.

## Target users
<!-- Personas / segments — links to knowledge/users/ -->
- Pilot officers (agencies with ready job profiles).
- "The Uncertain" and "The Self-Driven" officer personas.

## Success metrics
<!-- Which AARRR / north-star metrics this is expected (or now known) to move. Specific values where known. -->
- User North Star: Increase in % of officers who complete opportunities or courses aligned to their competency gaps.
- Business North Star: Improved Officer Satisfaction Score; clear understanding of what to develop.
- Adoption: % of sessions where users visited the competency gap analysis page.
- Funnel: % of officers who view gap analysis and click through to "opportunities" or "courses" in the same session.

## Risks
<!-- Brief summary; full hypotheses live in hypotheses/<slug>.md -->
- Data Divergence Risk: Officers cannot edit self-assessed competencies natively in OTEP until Phase 2 (OTG remains the write source). Pilot officers might get confused seeing data on both systems.
- Role Overlap: "Job Family + Function + Next Grade" might yield multiple concatenates, requiring the user to explicitly select a role.

## Dependencies
<!-- Teams, systems, external partners -->
- POCDEX for officer identity (employmentID, primary position, job grade).
- OTG Central Role Profile Bank (750+ role profiles).
- DLE LEARN (course catalog for recommendations).

## Timeline
<!-- Key milestones if relevant. Continuous delivery means this is often light. -->
- Target Launch: October 2026

## Evidence
<!-- Links to relevant ingestion artifacts (interviews, market intel, analytics) -->
- [source/adhoc/2026-05-22-my-development.md](../../../source/adhoc/2026-05-22-my-development.md) (Verbatim PRD)
- [ingestion/adhoc/2026-05-22-my-development.md](../../../ingestion/adhoc/2026-05-22-my-development.md) (Ingestion Synthesis)

## Linked
<!-- Paths are relative to THIS file's location (knowledge/product/features/<slug>.md). -->
- Stakeholders affected: [../../../stakeholders/imelda.md](../../../stakeholders/imelda.md)

## Open questions
- Jira Tickets: The PRD currently lacks OTEP-NNN Jira IDs. They must be raised at the next cross-squad grooming session.
- Policy Decision: Should we block the OTG competency view for the pilot cohort to avoid confusion over dual systems? (Imelda + WD)
- Refresh Cadence: How often will the self-assessed competency data be pulled from OTG, since there is no API? (Barry + Rama)

## Follow-up after launch
<!-- What to measure, when to check back, what would trigger a reversal decision -->
- Run post-pilot survey to evaluate whether gap analysis is accurate and meaningful.
