# POCDEX Integration

<!-- Paths in this file are relative to THIS file's location (knowledge/product/features/pocdex.md). -->

## Meta
- Owner: Daryll (POCDEX Team Lead) / Pow Hwee
- PM: Michelle Yip
- Status: building
- Priority: MVP P0 — elevated to Epic (2026-05-25) for closer risk tracking
- Last updated: 2026-05-25

## Problem
<!-- What user / business problem this solves -->
OTEP requires a centralized, automated source of truth for public officer profile data to trigger account creation and manage access dynamically (ringfencing).

## Target users
<!-- Personas / segments — links to knowledge/users/ -->
- All public officers (pilot: ESG/PSD).

## Success metrics
<!-- Which AARRR / north-star metrics this is expected (or now known) to move. Specific values where known. -->
- 100% automated account creation via POCDEX push.
- 0% unauthorized access for non-ringfenced officers.

## Risks
<!-- Brief summary; full hypotheses live in hypotheses/<slug>.md -->
- Edge Case (Pre-POCDEX Login): If an officer attempts to log into OTEP before POCDEX has successfully pushed their record, OTEP will block access (requires careful error messaging).
- OTEP is the very first project using the POCDEX API, so there is no established support structure yet.

## Dependencies
<!-- Teams, systems, external partners -->
- HRPS / Cumulus (source of data entry).
- POCDEX Team (Daryll).

## Timeline
<!-- Key milestones if relevant. Continuous delivery means this is often light. -->
- Sprint 1: Spike completed (OTEP-183).
- Sprint 3: Active Plumbing (OTEP-271, OTEP-203).
- Sprint 4+: Ringfencing Build (OTEP-127) and Seed Database (OTEP-202).

## Evidence
<!-- Links to relevant ingestion artifacts (interviews, market intel, analytics) -->
- [ingestion/adhoc/2026-05-22-pocdex-summary.md](../../../ingestion/adhoc/2026-05-22-pocdex-summary.md)

## Linked
<!-- Paths are relative to THIS file's location (knowledge/product/features/<slug>.md). -->
- Open Items: `../../../open-items.md` (Item #31)

## Open questions
- How will POCDEX go-live support work, given OTEP is the first project? (Planning session needed with Daryll).
- When will the seed database (OTEP-202) be ready to unblock ringfencing validation?

## Follow-up after launch
<!-- What to measure, when to check back, what would trigger a reversal decision -->
- Monitor the latency of the near real-time push from HRPS/Cumulus -> POCDEX -> OTEP to ensure accounts are created before officers attempt to log in.
