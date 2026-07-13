---
date: 2026-07-13
week: 2026-W29
type: apa-draft
status: draft-v2-corrected
role: Product Manager
level: 2
---

# APA Write-Up — Corrected Panel-Ready Draft

Applies the three confirmed evidence corrections (178→150, 23→30 Job Families, 6→2 AC conflicts) and keeps 113,000 as confirmed. Three items remain open and are marked inline with `⚠️ OPEN` — do not submit until resolved. Full sourcing in [2026-07-13-W29-apa-evidence-findings-report.md](2026-07-13-W29-apa-evidence-findings-report.md).

---

## Impact

- Addressed a 75% validation failure rate in OTG ingestion, unblocking ~150 previously-blocked Enterprise Singapore gigs (of 178 originally blocked under pre-v3 rules; 44 remain blocked)
  - Led discovery and data quality analysis to identify root causes of validation failures across 633 live gigs, separating true data errors from overly conservative rules
  - Produced a remediation plan per agency and drove implementation of v3 ingestion rules (D-026)

- Drove standardisation of job taxonomies across OTG, C@G, and CompBank, resolving a weeks-long deferred technical decision
  - Mapped three disparate taxonomies (OTG's 21 Job Families, C@G's 35 FieldSet codes, CompBank's ~400 categories) and quantified a gap of 210 unmappable listings
  - Presented four options with explicit trade-offs across technical complexity, data quality, agency effort, and maintainability, enabling the technical lead to confirm WOG's 30 Job Families as the canonical structure

- Executed discovery and scoping for the WOG Auth feature, targeting a pilot of 6 agencies and ~5,400 officers, while sustaining OTG continuity for ~113,000 active WOG users with no service disruption
  - Identified a 4-story cross-squad dependency chain for POCDEX prior to sprint planning, elevating it to a full Epic
  - Restructured sequencing to deliver infrastructure in Sprint 3, preventing a delivery block in Sprint 4

---

## Craft & Execution

- Established Definition of Ready (DoR) audits across 4 sprints, reducing sprint capacity burn on rework and mid-sprint clarifications
  - Intercepted 2 Acceptance Criteria (AC) conflicts in Sprint 3 the day before planning, and 2 more in Sprint 4 before reaching engineering

- Maintained a continuous decisions log for the MVP build, capturing rationale, owner, and status for every scope call from D-001 to D-026+
  - ⚠️ OPEN: draft previously claimed "0 unlogged scope changes across 4 sprints" — this has no audit trail behind it. Either run the cross-check against the decisions log to confirm the number, or keep this bullet as written above (log completeness, not a zero-defect count) until it's verified.

- Contributed to the team's separation of QA and UAT environments, removing a recurring source of ambiguity
  - Enabled engineers to verify AC independently before user testing
  - ⚠️ OPEN: decision log attributes the QA/UAT split to "the Team" at a 9am meeting, not solely to Michelle. Framing above already softened to "contributed to" — replace with "proposed" only if you can find something (Slack message, draft doc, meeting note) showing you raised it first.

---

## Ownership

- Addressed hidden infrastructure dependencies across squads, protecting the pilot rollout for ~5,400 officers
  - Mapped a 4-story dependency chain for POCDEX and elevated it to a dedicated Epic before it became a blocker
  - Proactively resolved the WOG AD authentication stall by identifying careercompass.gov.sg as the unblocking domain

- Drove root-cause resolution for OTG batch job data mismatches, working to ensure accurate opportunity data for ~113,000 WOG officers
  - Pushed upstream systems (POCDEX, Cumulus, HRPS) to fix data issues at the source rather than applying UI patches
  - Conducted the full 633-gig ingestion analysis without engineering delegation

---

## Strategic Alignment

- Shifted sprint goal framing from delivery tasks to officer outcomes, giving the team a clear standard to reject scope creep without escalation
  - Maintained alignment between sprint execution and P0 MVP objectives across Sprints 1–9, closing critical dependency chains (POCDEX, WOG AD, C@G ingestion, VAPT) through to go-live without service disruption

- Aligned WOG Auth discovery strictly to the pilot target of 6 agencies and ~5,400 officers
  - Prioritised highest-impact remediation work (Enterprise Singapore's blocked gigs) to maximise catalogue availability ahead of go-live

---

## Culture and Organisational Influence

- ⚠️ OPEN: draft previously included an "AI Learn-Create-Share session (8 May 2026), 4.25/5 satisfaction, 100% would recommend, 75% reporting greater AI clarity" bullet. No source for this was found anywhere in either workspace. **Do not include this bullet until you locate the original evidence** (survey export, feedback form, recap email — likely lives outside PM-OS/PM-skills-ALL-1). Below is a placeholder structure to fill in once sourced:
  - `[Session name/date]` achieving `[satisfaction score]`, `[% would recommend]`, `[% reporting outcome]`

- Designed a 12-session, 4-week structured handover program for OTG, sequenced by difficulty
  - Empowered the incoming team (Jobelle) to understand the system and make independent decisions without reverse-engineering documentation

- Built a reusable PM Operating System, extended in July with a live-Jira-verified sprint sync workflow
  - ⚠️ Original draft claimed this was "adopted by other programme PMs" (flagged by Jace, comment JT6) — no evidence found for this either. Either name the specific PM(s) using it and how you know, or remove the adoption claim and keep this to what you built.

---

## Career Focus

- Sharpen problem framing by generating stronger hypotheses earlier in discovery, before fully mapping the space
- Build greater independence in leading trade-off conversations with senior stakeholders, moving from supported to self-directed in high-stakes discussions
- Develop data literacy to define better metrics and use analytics to actively drive decisions, not just reference existing numbers

---

## Next Steps

- Ship the OTEP MVP by October 2026 — WOG Auth, Opportunities Listing, and POCDEX integration working end-to-end
- Lead R1 scoping by kicking off discovery for FormSG pre-fill and sequencing what comes after MVP
- Tighten PM fundamentals in PRD writing, prioritisation, and building the habit of connecting every delivery decision to a measurable outcome

---

## Before Submission Checklist

- [ ] Resolve ⚠️ "0 unlogged scope changes" — audit or reword (Craft & Execution)
- [ ] Resolve ⚠️ QA/UAT ownership framing — corroborate or keep softened (Craft & Execution)
- [ ] Resolve ⚠️ AI Learn-Create-Share session — locate source or cut the bullet (Culture & Influence)
- [ ] Resolve ⚠️ PM OS "adopted by other programme PMs" — name names or cut the claim (Culture & Influence) — this is Jace's own flagged comment (JT6)
- [ ] Housekeeping (non-blocking): fix D-026 numbering collision in source logs before any panelist cross-references it
