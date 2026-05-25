# Competency Profile & Role Change Logic

<!-- Paths in this file are relative to THIS file's location (knowledge/product/features/competency-profile.md). -->

## Meta
- Owner: Imelda Mo
- Status: building
- Priority: MVP Must-Have
- Last updated: 2026-05-22

## Problem
<!-- What user / business problem this solves -->
When an officer changes roles (e.g., gets a promotion or moves to a new agency), their competency profile goes out of date. Without automated logic to update competencies based on HR role changes, the platform data quickly becomes stale and officers lose trust in the personalization.

## Target users
<!-- Personas / segments — links to knowledge/users/ -->
- All onboarded public officers who experience a role change in the HR system (HRPS/Cumulus).

## Success metrics
<!-- Which AARRR / north-star metrics this is expected (or now known) to move. Specific values where known. -->
- Data freshness: % of officers whose competencies accurately reflect their current HR-assigned role.

## Risks
<!-- Brief summary; full hypotheses live in hypotheses/<slug>.md -->
- Edge case: When an officer returns to a previous role (e.g., post secondment/SR), the role change logic needs refinement to avoid overwriting or duplicating historical data.

## Dependencies
<!-- Teams, systems, external partners -->
- HR Systems (HRPS/Cumulus): Triggers the role change event.
- POCDEX: Pipes the updated primary position/designation into OTEP.

## Timeline
<!-- Key milestones if relevant. Continuous delivery means this is often light. -->
- TBD

## Evidence
<!-- Links to relevant ingestion artifacts (interviews, market intel, analytics) -->
- [source/adhoc/2026-05-22-officer-profile.md](../../source/adhoc/2026-05-22-officer-profile.md) (See Epic 1 PRD)

## Linked
<!-- Paths are relative to THIS file's location (knowledge/product/features/<slug>.md). -->
- Decisions: [../../../decisions/2026-05-21-competency-role-change.md](../../../decisions/2026-05-21-competency-role-change.md)

## Open questions
- Edge case: When officer returns to a previous role (e.g., post secondment/SR), logic needs refinement.

## Follow-up after launch
<!-- What to measure, when to check back, what would trigger a reversal decision -->
- Monitor the number of support tickets related to incorrect role competencies post-transfer.
