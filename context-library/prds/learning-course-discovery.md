# Epic 3: Learning and Course Discovery

<!-- Paths in this file are relative to THIS file's location (knowledge/product/features/learning-course-discovery.md). -->

## Meta
- Owner: Imelda Mo
- Status: scoping
- Priority: MVP (Must-Have)
- Last updated: 2026-05-22

## Problem
<!-- What user / business problem this solves -->
Course discovery is currently fragmented across LEARN, HRPS, and OTG. Officers struggle to confidently choose learning courses because discovery is not personalized, creating high effort in manual search and comparison. This results in officers feeling lost and disengaged.

## Target users
<!-- Personas / segments — links to knowledge/users/ -->
- Officers interested in acquiring new skills to develop themselves and their careers based on competency gaps.

## Success metrics
<!-- Which AARRR / north-star metrics this is expected (or now known) to move. Specific values where known. -->
- User North Star: Increased course enrolment rate per officer; % of officers who registered for a course in the past 12 months.
- Business North Star: % of course enrolments attributed to OTEP.
- Awareness/Adoption: Recommended courses CTR, Save rate.

## Risks
<!-- Brief summary; full hypotheses live in hypotheses/<slug>.md -->
- Calling Jumpstart directly could bypass agency/accessibility filters. *Mitigation*: Call Jumpstart via DLE.
- If we cannot pass OTEP attribution tracking into LEARN, we won't be able to measure our enrolment CVR North Star metric.
- SSO edge cases (FIN-to-citizen conversion) must be resolved for LEARN redirects.

## Dependencies
<!-- Teams, systems, external partners -->
- DLE API is delayed until Q3 2026. **MVP relies entirely on SFTP file transfers** for course catalogs.
- GovTech's Jumpstart recommendation engine (POC1) via DLE.
- OTG Competency Bank to map missing competencies to course tags.

## Timeline
<!-- Key milestones if relevant. Continuous delivery means this is often light. -->
- Target Launch: October 2026

## Evidence
<!-- Links to relevant ingestion artifacts (interviews, market intel, analytics) -->
- [source/adhoc/2026-05-22-learning-course-discovery.md](../../../source/adhoc/2026-05-22-learning-course-discovery.md) (Verbatim PRD)
- [ingestion/adhoc/2026-05-22-learning-course-discovery.md](../../../ingestion/adhoc/2026-05-22-learning-course-discovery.md) (Ingestion Synthesis)

## Linked
<!-- Paths are relative to THIS file's location (knowledge/product/features/<slug>.md). -->
- Stakeholders affected: [../../../stakeholders/imelda.md](../../../stakeholders/imelda.md)

## Open questions
- OTEP Attribution Tracking: Can DLE support passing attribution tokens to measure enrolment CVR?
- SSO Identifier: Will LEARN accept NRIC or Email instead of LearnerId?

## Follow-up after launch
<!-- What to measure, when to check back, what would trigger a reversal decision -->
- Monitor DLE SFTP freshness until the API becomes available in Q3 2026.
- Check drop-off rates on LEARN redirects.
