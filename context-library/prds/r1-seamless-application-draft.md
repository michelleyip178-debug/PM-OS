# PRD: Release 1 (R1) — Seamless Application

<!-- Paths in this file are relative to THIS file's location (knowledge/product/features/r1-seamless-application-draft.md). -->

## Meta
- Owner: Michelle Yip
- Status: scoping
- Priority: R1 Target
- Last updated: 2026-05-22

## Problem
<!-- What user / business problem this solves -->
Currently, CareerCompass (OTEP) MVP functions solely as an opportunity discovery platform. If officers cannot seamlessly apply and track their progress in one place without external redirects, the platform remains just a job board, failing its primary objective of driving actual talent mobility.

## Target users
<!-- Personas / segments — links to knowledge/users/ -->
- Public officers looking to apply for STIP, GIG, SJR, C@G, and Internal Jobs.

## Success metrics
<!-- Which AARRR / north-star metrics this is expected (or now known) to move. Specific values where known. -->
- North Star: 20% of onboarded officers have applied for at least one opportunity through CareerCompass within 6 months of launch.
- Status Latency: Application status update latency ≤ 24 hours of hiring manager action.
- Officer Satisfaction: ≥ 3.5/5 CSAT for the application process.
- OTG Feature Parity: 50% of required OTG features built natively on CareerCompass.

## Risks
<!-- Brief summary; full hypotheses live in hypotheses/<slug>.md -->
- Resolving the definition of "Application within CareerCompass" is a major scope gate. If it means native forms without redirects, we must rebuild 5 complex application forms natively.
- Defining which systems count as "ATS" affects webhook integration load.
- If SJR apply flows are fully in scope, it introduces a major integration lift.
- Sharing officer profile links externally to hiring managers carries data classification/security risks.

## Dependencies
<!-- Teams, systems, external partners -->
- Application Source Systems (OTG, C@G, ATS) for webhook and API access.
- Security Team for external profile link clearance.

## Timeline
<!-- Key milestones if relevant. Continuous delivery means this is often light. -->
- Target Release: Q1 2027 (~3 months post-MVP).
- R1 Backlog Grooming: September 2026.

## Evidence
<!-- Links to relevant ingestion artifacts (interviews, market intel, analytics) -->
- [ingestion/adhoc/2026-05-22-r1-discovery-plan.md](../../../ingestion/adhoc/2026-05-22-r1-discovery-plan.md)

## Linked
<!-- Paths are relative to THIS file's location (knowledge/product/features/<slug>.md). -->
- Related MVP Epics: [opportunities-listing.md](opportunities-listing.md), [wog-authentication.md](wog-authentication.md), [officer-profile.md](officer-profile.md).

## Open questions
- "Application within CareerCompass" Definition: Does it mean absolutely no redirects, or just that the experience starts in CareerCompass? (Michelle -> Adrian/Jace)
- Which ATS are we integrating with for status tracking? (Michelle -> Jacky / Xian Zhang)
- SJR Apply Flow Scope: Are SJRs fully in R1 scope now? (Michelle)
- External-Facing Profile Security Model: Public link, permissioned link, or system-to-system? (Michelle -> Security Contact)

## Follow-up after launch
<!-- What to measure, when to check back, what would trigger a reversal decision -->
- Evaluate application completion rates against MVP baseline.
- Monitor status tracking webhook latency.
