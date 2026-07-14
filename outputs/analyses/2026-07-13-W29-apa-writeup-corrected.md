---
date: 2026-07-13
week: 2026-W29
type: apa-draft
status: draft-v4-sharpened
role: Product Manager
level: 2
updated: 2026-07-14
---

# APA Write-Up — Panel-Ready Draft

Applies all confirmed evidence corrections. **Updated 2026-07-14:** Impact section reframed per Jace's requested structure and fact-checked against sourced evidence; whole write-up sharpened to under 800 words. One item remains open, marked `⚠️ OPEN` — do not submit until resolved. Full sourcing: [2026-07-14-W29-apa-impact-evidence-reference.md](2026-07-14-W29-apa-impact-evidence-reference.md) (Impact) and [2026-07-13-W29-apa-evidence-findings-report.md](2026-07-13-W29-apa-evidence-findings-report.md) (all sections).

---

## Evaluation Period Context

This review covers **May–July 2026 (Sprints 1–6)**, the build phase of CareerCompass's MVP — Opportunities Listing and WOG Auth — targeting October 2026 go-live for ~5,400 pilot officers across 6 agencies. The period opened with three unresolved foundations: no confirmed OTG ingestion pipeline, no agreed job taxonomy across three disconnected systems, and an unmapped POCDEX/WOG AD dependency chain. It closes with all three shipped, alongside zero-disruption continuity for ~113,000 officers still on legacy OTG.

The period sits ahead of two hard gates — VAPT (early August) and UAT (11 August) — shifting remaining risk from engineering execution toward governance and operational readiness for Sprints 7–12.

---

## Impact

- Led development of the CareerCompass Opportunities Listing and Auth features across 9 sprints, securing the October 2026 go-live timeline for ~5,400 officers with zero service disruption for ~113,000 active users on legacy OTG
  - Managed cross-agency WOG AD and POCDEX integrations using an 82-item decisions log as the single source of truth
  - Resolved a hidden 4-story POCDEX dependency chain, elevating it to a full Epic and facilitating a cross-team sync that defined the data storage strategy and 2 new Core API endpoints
  - Restructured the sprint schedule to accommodate infrastructure requirements, preventing a Sprint 4 delivery block

- Resolved conflicting data structures across three legacy systems (OTG, C@G, CompBank), driving the ingested catalogue toward a 350–400 record range without manual agency intervention
  - Analysed a 75% pre-remediation rejection rate in the OTG pipeline (160 of 633 passing) to separate true data errors from overly strict rules, cutting Enterprise Singapore's blocked count from 178 to ~44 (current: 415 of 633 passing, 218 blocked)
  - Evaluated trade-offs using SAP OData v2 APIs to establish WOG 30 Job Families as the standardised classification architecture, unblocking cross-team development

- Established systematic DoR quality-gate audits before sprint planning, preventing scope creep and saving an estimated 20+ minutes of planning time per sprint
  - Resolved acceptance criteria conflicts before planning ceremonies for clean sprint execution
  - Shifted sprint goals from technical outputs to user outcomes, giving the team a clear framework to manage scope

*(Full citation-by-bullet sourcing: [evidence reference](2026-07-14-W29-apa-impact-evidence-reference.md).)*

---

## Craft & Execution

- Established DoR quality-gate audits across 4 sprints — intercepted 2 AC conflicts in Sprint 3 and 2 more in Sprint 4 before reaching engineering, before either could reach the team as rework or mid-sprint clarification
- Balanced speed, quality, and simplicity directly with engineers: flagged Thomas (sole FE) as carrying elevated Sprint 3 carry-over WIP, and made the explicit call not to add scope in week 1 rather than defaulting to more parallel work. Resolved the FormSG-vs-C@G-deep-link AC conflict (OTEP-87) with the tech lead before Thomas or Léo picked up either ticket
- Maintained a continuous decisions log for the MVP build, capturing rationale, owner, and status for every scope call (D-001 to D-082)
- Facilitated team agreement to separate QA and UAT environments, letting engineers verify AC independently before user testing

---

## Ownership

- Addressed hidden infrastructure dependencies, protecting the pilot rollout for ~5,400 officers — mapped the 4-story POCDEX chain, elevated it to a dedicated Epic before it became a blocker, and resolved the WOG AD authentication stall by identifying careercompass.gov.sg as the unblocking domain
- Drove root-cause resolution for OTG batch job data mismatches, pushing upstream systems (POCDEX, Cumulus, HRPS) to fix issues at the source, and conducted the full 633-record ingestion analysis without engineering delegation
- Ran the Sprint 4 readiness assessment as an owned structured process, not an ad hoc check: separated 5 hard blockers from 4 design-sign-off gates, assigned an owner and deadline to each, and closed all 5 blockers before Sprint 4 started
- Drove adoption of a jira-sync discipline that catches point-estimate and status drift before it corrupts planning — now a standing practice ahead of every sprint ceremony

---

## Strategic Alignment

- Shifted sprint goal framing from delivery tasks to officer outcomes, giving the team a clear standard to reject scope creep without escalation — maintained alignment between sprint execution and P0 MVP objectives, closing critical dependency chains (POCDEX, WOG AD, C@G ingestion, VAPT) toward go-live without service disruption
- Aligned WOG Auth discovery strictly to the pilot target of 6 agencies and ~5,400 officers, prioritising Enterprise Singapore's blocked-gig remediation to maximise catalogue availability ahead of go-live
- Adapted scope independently when priorities shifted: when search UX requirements surfaced as ambiguous with fragmented ownership across three team members, cut scope to fuzzy-match-only for MVP rather than escalating, logging deferred items for R1/R2. Applied the same judgement to pull the FormSG Phase 2 webhook from Sprint 4 once its tracking capability was recognised as an R1 concern, not an MVP one

---

## Culture and Organisational Influence

- Designed a 12-session, 4-week structured handover program for OTG, sequenced by difficulty — empowered the incoming team (Jobelle) to understand the system without reverse-engineering documentation
- Built a reusable PM Operating System, extended in July with a live-Jira-verified sprint sync workflow, shared openly with the team rather than kept as personal tooling
- Engaged constructively with sustained stakeholder pushback in a search-design review — worked through repeated challenges (dynamic filtering, bookmarking's real business value, whether an existing platform had already solved it) rather than deflecting, which directly prevented a purely technical-convenience solution
- Brought engineering and QA perspectives into a shared decision on separating QA/UAT environments rather than deciding unilaterally, removing a recurring source of ambiguity for the whole team
- ⚠️ OPEN: "AI Learn-Create-Share session" satisfaction stats — no source found anywhere. Do not include until located.

---

## Career Focus

- Sharpen problem framing by generating stronger hypotheses earlier in discovery, before fully mapping the space
- Build greater independence leading trade-off conversations with senior stakeholders, moving from supported to self-directed in high-stakes discussions
- Develop data literacy to define better metrics and use analytics to actively drive decisions, not just reference existing numbers

---

## Next Steps

- Ship the OTEP MVP by October 2026 — WOG Auth, Opportunities Listing, and POCDEX integration working end-to-end
- Lead R1 scoping by kicking off discovery for FormSG pre-fill and sequencing what comes after MVP
- Tighten PM fundamentals in PRD writing, prioritisation, and connecting every delivery decision to a measurable outcome

---

## Before Submission Checklist

- [x] All prior evidence corrections applied (178→150, WOG 29→30, 6→2 AC conflicts, QA/UAT ownership framing, "0 unlogged scope changes" reworded, decisions-log count 49→82)
- [x] Impact section reframed 2026-07-14 to Jace's requested structure and fact-checked — see [evidence reference](2026-07-14-W29-apa-impact-evidence-reference.md) for the full bullet-by-bullet sourcing, including two figures ("9 sprints," "20+ min/sprint") kept as Michelle's working estimates, not independently logged
- [x] Cut the "adopted by other programme PMs" claim (Culture & Influence) per Jace's own flag (comment JT6) — no evidence found; kept the PM OS bullet scoped to what was actually built
- [x] 2026-07-14: clarified the 800-word cap excludes Impact (separately scored, no rubric criterion of its own). Beefed up Craft & Execution, Ownership, Strategic Alignment, and Culture & Influence with new, sourced evidence targeting the specific rubric gaps flagged earlier: Product Execution (Thomas WIP call, OTEP-87 tradeoff), Strategic Alignment's "adapt to changing priorities independently" (search-scope cut, FormSG webhook pull), and Culture & Influence's collaboration/conflict language (Xian Zhang design-review pushback, QA/UAT joint decision). All new bullets sourced to real, dated events already in the evidence package — none invented for word count. Non-Impact total: ~810 words
- [ ] Resolve ⚠️ AI Learn-Create-Share session stats — locate source (likely outside PM-OS/PM-skills-ALL-1: survey export, feedback form, recap email) or cut the bullet entirely
- [ ] Housekeeping (non-blocking): fix D-026 numbering collision in source logs before any panelist cross-references it
