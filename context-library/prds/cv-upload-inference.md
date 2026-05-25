# CV Upload & AI Competency Inference

<!-- Paths in this file are relative to THIS file's location (knowledge/product/features/cv-upload-inference.md). -->

## Meta
- Owner: Imelda Mo
- Status: building
- Priority: MVP
- Last updated: 2026-05-22

## Problem
<!-- What user / business problem this solves -->
Officers find it tedious and difficult to manually search and add competencies one-by-one from a large, complex competency bank.

## Target users
<!-- Personas / segments — links to knowledge/users/ -->
- Public officers building their CareerCompass profile.

## Success metrics
<!-- Which AARRR / north-star metrics this is expected (or now known) to move. Specific values where known. -->
- Adoption: % of officers who use the CV upload or text paste inference tool.
- Engagement: % of inferred competencies that are accepted and saved by the officer.

## Risks
<!-- Brief summary; full hypotheses live in hypotheses/<slug>.md -->
- UX clarity risk: Terminology like "self-declared", "save" may be unclear.
- There needs to be a clear distinction between recommended vs confirmed competencies.
- Lack of disclaimers for AI-generated suggestions may cause trust issues if inaccurate.

## Dependencies
<!-- Teams, systems, external partners -->
- Competency Inference Engine (CIE): The AI backend model providing the inference.
- SIS Whitelisting: Required to enable the `.docx` file upload functionality on Gov devices.
- WOG FC Bank: The CIE is only trained on this bank, so it cannot infer agency-specific competencies.

## Timeline
<!-- Key milestones if relevant. Continuous delivery means this is often light. -->
- TBD

## Evidence
<!-- Links to relevant ingestion artifacts (interviews, market intel, analytics) -->
- [source/adhoc/2026-05-22-officer-profile.md](../../source/adhoc/2026-05-22-officer-profile.md) (Epic 1 PRD - OTEP-205)

## Linked
<!-- Paths are relative to THIS file's location (knowledge/product/features/<slug>.md). -->
- Stakeholders affected: [../../../stakeholders/imelda.md](../../../stakeholders/imelda.md)

## Open questions
- Will officers understand the difference between AI-recommended competencies and confirmed ones?
- What specific disclaimers are required for the AI-generated suggestions?

## Follow-up after launch
<!-- What to measure, when to check back, what would trigger a reversal decision -->
- Monitor the acceptance rate of AI-inferred competencies.
