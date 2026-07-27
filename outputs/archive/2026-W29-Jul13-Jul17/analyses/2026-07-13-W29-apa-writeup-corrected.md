---
date: 2026-07-13
week: 2026-W29
type: apa-draft
status: draft-v5-evidence-merged
role: Product Manager
level: 2
updated: 2026-07-15
---

# APA Write-Up — Panel-Ready Draft

Applies all confirmed evidence corrections. **Updated 2026-07-15:** source citations merged inline (italic, under each bullet group) so the write-up is self-contained for panel prep — no more flipping to a separate reference doc mid-conversation. Narrative flow and word count are unchanged from the 2026-07-14 sharpen. The previously open AI Learn-Create-Share item is now resolved and sourced. Underlying evidence docs kept as backup detail: [2026-07-14-W29-apa-impact-evidence-reference.md](2026-07-14-W29-apa-impact-evidence-reference.md) (Impact) and [2026-07-13-W29-apa-evidence-findings-report.md](2026-07-13-W29-apa-evidence-findings-report.md) (all sections).

---

## Evaluation Period Context

This is a **mid-year review**, covering the build phase of CareerCompass's MVP — Opportunities Listing and WOG Auth — targeting October 2026 go-live for ~5,400 pilot officers across 6 agencies. The period opened with three unresolved foundations: no confirmed OTG ingestion pipeline, no agreed job taxonomy across three disconnected systems, and an unmapped POCDEX/WOG AD dependency chain. It closes with all three shipped, alongside zero-disruption continuity for ~113,000 officers still on legacy OTG.

Remaining work ahead of two hard gates — VAPT and UAT — shifts remaining risk from engineering execution toward governance and operational readiness for the back half of the year.

---

## Impact

- Led development of the CareerCompass Opportunities Listing and Auth features through the MVP build phase, securing the October 2026 go-live timeline for ~5,400 officers with zero service disruption for ~113,000 active users on legacy OTG
  - Managed cross-agency WOG AD and POCDEX integrations using an 82-item decisions log as the single source of truth
  - Resolved a hidden 4-story POCDEX dependency chain, elevating it to a full Epic and facilitating a cross-team sync that defined the data storage strategy and 2 new Core API endpoints
  - Restructured the sprint schedule to accommodate infrastructure requirements, preventing a Sprint 4 delivery block

  *Sources:*
  - *Sprint history / go-live — Jira board (OTEP-Pathfinder/Core), programme plan running to Oct 2026 go-live. OTEP-Pathfinder timeline: https://sgtechstack.atlassian.net/jira/software/c/projects/OTEP/boards/12541/timeline*
  - *6 agencies / ~5,400 officers — `decisions-log.md` entry 2026-06-02*
  - *~113,000 active OTG users — self-attested by Michelle, not in a decisions-log entry; don't conflate with the ~108,000 figure for the 24 non-pilot agencies (`decisions-log.md`, 2026-06-02)*
  - *82-item decisions log — `decisions-log.md` (count keeps climbing; re-verify near panel date)*
  - *POCDEX 4-story chain / 2 Core endpoints — `2026-06-11-W24-dependencies-sync.pdf` (Dependencies Sync-Up) and `decisions-log.md` entry 2026-05-22 (Epic ownership)*
  - *Sprint 4 block prevented — `craft-execution-summary.pdf` (Sprint 4 Readiness Assessment: 5 blockers + 4 design gates, each with a named owner, closed before Sprint 4 start)*

- Resolved conflicting data structures across three legacy systems (OTG, C@G, CompBank), driving the ingested catalogue toward a 350–400 record range without manual agency intervention
  - Analysed a 75% pre-remediation rejection rate in the OTG pipeline (160 of 633 passing) to separate true data errors from overly strict rules, cutting Enterprise Singapore's blocked count from 178 to ~44 (current: 415 of 633 passing, 218 blocked)
  - Evaluated trade-offs using SAP OData v2 APIs to establish WOG 30 Job Families as the standardised classification architecture, unblocking cross-team development

  *Sources:*
  - *350–400 record range — risks dashboard (`04_oqa_risks_assumptions.html`), full detail in `ingestion-report-executive-summary.pdf`; current 415 already sits inside this range*
  - *75% rejection / 160 of 633 — pre-v3 baseline, `ingestion-report-executive-summary.pdf`*
  - *178→~44 ESG blocked — corrected framing per `ingestion-report-executive-summary.pdf`: 178 was ESG's blocked count under old pre-v3 rules, not a cleared count; ~150 actually unblocked, ~44 remain (verify against `02_agency_breakdown.html` raw data if pressed — two different points in time are cited in this bullet, know which is which)*
  - *415/218 current state — post-v3 rules, `ingestion-report-executive-summary.pdf` + `01_summary_dashboard.html`*
  - *Remediation detail — `OTEP_Remediation_Report_v3.xlsx`, `otg-ingestion-logic-v3.pdf` (decision D-026 — note a numbering collision exists elsewhere in the workspace for "D-026," this is the ingestion-rules one)*
  - *WOG 30 Job Families — `wog-taxonomy-mapping.pdf` (decision I-019; corrected from 29→30 after Healthcare added as 30th category post-BO-review; see `2026-06-24-W26-pow-hwee-taxonomy-assessment.pdf`)*
  - *SAP OData v2 — `cag_field_set.json`, retrieved independently (raw API response, 35 C@G Indus codes)*

- Established systematic DoR quality-gate audits before sprint planning, preventing scope creep and saving an estimated 20+ minutes of planning time per sprint
  - Resolved acceptance criteria conflicts before planning ceremonies for clean sprint execution
  - Shifted sprint goals from technical outputs to user outcomes, giving the team a clear framework to manage scope

  *Sources:*
  - *DoR discipline — `craft-execution-summary.pdf`. "20+ min/sprint" is Michelle's working estimate, not independently logged — say so directly if a panelist asks for the source*
  - *2 AC conflicts before Sprint 4 — `craft-execution-summary.pdf` (OTEP-87 FormSG/C@G deep-link boundary; C@G payload schema dependency, owner + deadline set 15 Jun planning); note the corrected figure is 2, not the 6 that appears in older, unsupported APA drafts*
  - *Sprint goal reframe example — Sprint 4 goal text in `craft-execution-summary.pdf`: "Deliver a complete, usable opportunity listing experience — officers can search, filter, and sort opportunities, understand what each type means, and trust that the data they're seeing is current and accurate."*

*(Full bullet-by-bullet backup: [evidence reference](2026-07-14-W29-apa-impact-evidence-reference.md).)*

---

## Craft & Execution

- Established DoR quality-gate audits across 4 sprints — intercepted 2 AC conflicts in Sprint 3 and 2 more in Sprint 4 before reaching engineering, before either could reach the team as rework or mid-sprint clarification
- Balanced speed, quality, and simplicity directly with engineers: flagged Thomas (sole FE) as carrying elevated Sprint 3 carry-over WIP, and made the explicit call not to add scope in week 1 rather than defaulting to more parallel work. Resolved the FormSG-vs-C@G-deep-link AC conflict (OTEP-87) with the tech lead before Thomas or Léo picked up either ticket
- Maintained a continuous decisions log for the MVP build, capturing rationale, owner, and status for every scope call (D-001 to D-082)
- Facilitated team agreement to separate QA and UAT environments, letting engineers verify AC independently before user testing

*Sources:*
- *Sprint 3 (2 AC conflicts, OTEP-128/OTEP-129 duplicating OTEP-85) and Sprint 4 (2 AC conflicts, corrected down from an unsupported "6" in older drafts) — consistent across `2026-07-02-W27-appraisal-panel-prep.md`, `2026-06-24-W26-appraise-ai-form-input.md`, `pm-conversion/evidence-tracker.md`, and Sprint 4 planning notes (`2026-06-11-W24-sprint-4-planning.md`)*
- *Thomas WIP call / OTEP-87 resolution — sprint planning record, corroborated in craft-execution sourcing*
- *Decisions log D-001–D-082 — `2026-05-29-W22-decisions-log.md` (note: two unrelated decisions both carry the "D-026" label in different docs — a known numbering collision, not panel-facing, flagged for housekeeping)*
- *QA/UAT split — `decisions-log.md` line 35 (2026-06-04, "Agreed at 9am team meeting," attributed to "the Team" collectively — the write-up already uses "facilitated" rather than "proposed," matching what the source supports)*

---

## Ownership

- Addressed hidden infrastructure dependencies, protecting the pilot rollout for ~5,400 officers — mapped the 4-story POCDEX chain, elevated it to a dedicated Epic before it became a blocker, and resolved the WOG AD authentication stall by identifying careercompass.gov.sg as the unblocking domain
- Drove root-cause resolution for OTG batch job data mismatches, pushing upstream systems (POCDEX, Cumulus, HRPS) to fix issues at the source, and conducted the full 633-record ingestion analysis without engineering delegation
- Ran the Sprint 4 readiness assessment as an owned structured process, not an ad hoc check: separated 5 hard blockers from 4 design-sign-off gates, assigned an owner and deadline to each, and closed all 5 blockers before Sprint 4 started
- Drove adoption of a jira-sync discipline that catches point-estimate and status drift before it corrupts planning — now a standing practice ahead of every sprint ceremony

*Sources:*
- *POCDEX 4-story chain / Epic — `2026-06-11-W24-dependencies-sync.md` (real meeting, 2026-06-11) and `00-hub/open-items.md` item #41 (architecture resolved same day: in-code interface, no foreign keys, 2 new Core endpoints scoped); Epic creation confirmed `2026-06-02-W23-eod.md` (OTEP-271/203/202/127 moved under it) and `decisions-log.md` entry 2026-05-22*
- *Batch job mismatches escalated upstream — `2026-06-24-W26-appraise-ai-input-list.md:32,92`, repeated across several prior APA drafts*
- *Sprint 4 readiness assessment (5 blockers, 4 design gates, all closed pre-Sprint-4) — `craft-execution-summary.pdf`*
- *Jira-sync discipline (point-estimate/status drift caught before planning) — verifiable directly against the live OTEP-Pathfinder board: https://sgtechstack.atlassian.net/jira/software/c/projects/OTEP/boards/12541/timeline (board 12541), cross-checked each sprint via `jira-sprint.sh`/`jira-sync.py`*

---

## Strategic Alignment

- Shifted sprint goal framing from delivery tasks to officer outcomes, giving the team a clear standard to reject scope creep without escalation — maintained alignment between sprint execution and P0 MVP objectives, closing critical dependency chains (POCDEX, WOG AD, C@G ingestion, VAPT) toward go-live without service disruption
- Aligned WOG Auth discovery strictly to the pilot target of 6 agencies and ~5,400 officers, prioritising Enterprise Singapore's blocked-gig remediation to maximise catalogue availability ahead of go-live
- Adapted scope independently when priorities shifted: when search UX requirements surfaced as ambiguous with fragmented ownership across three team members, cut scope to fuzzy-match-only for MVP rather than escalating, logging deferred items for R1/R2. Applied the same judgement to pull the FormSG Phase 2 webhook from Sprint 4 once its tracking capability was recognised as an R1 concern, not an MVP one

*Sources:*
- *6 agencies / ~5,400 officers pilot scope — `context-library/prds/wog-authentication.md:22,28`, sourced to "Implementation Details, 2026-06-02," and confirmed consistent in `06-skills-and-decisions/decisions-log.md:43`*
- *Search-scope cut to fuzzy-match-only, FormSG Phase 2 webhook pulled from Sprint 4 — scope-decision record in the sprint planning/decisions trail; both are real, dated calls, not invented for this section*

---

## Culture and Organisational Influence

- Designed a 12-session, 4-week structured handover program for OTG, sequenced by difficulty — empowered the incoming team (Jobelle) to understand the system without reverse-engineering documentation
- Built a reusable PM Operating System, extended in July with a live-Jira-verified sprint sync workflow, shared openly with the team rather than kept as personal tooling
- Engaged constructively with sustained stakeholder pushback in a search-design review — worked through repeated challenges (dynamic filtering, bookmarking's real business value, whether an existing platform had already solved it) rather than deflecting, which directly prevented a purely technical-convenience solution
- Brought engineering and QA perspectives into a shared decision on separating QA/UAT environments rather than deciding unilaterally, removing a recurring source of ambiguity for the whole team
- Co-presented at PMP #2 Learn-Create-Share Friday (8 May 2026), an AI-empowerment session for product officers — 4.25/5 satisfaction, 100% would recommend, 75% reported clearer understanding of AI afterward

*Sources:*
- *12-session/4-week handover program — `2026-06-10-W24-jobelle-handover-plan.md` frontmatter and body ("12 sessions across 4 weeks": Week 1: 2, ..., Week 4: 3 = 12 total) — confirms "12-session, 4-week" as the accurate phrasing over a bare "4-week"*
- *PM OS built and shared — this workspace itself (`/Users/michelleyip/Documents/PM-OS`), no external doc needed*
- *Search-design pushback — search-design review notes; corroborates the "engaged rather than deflected" framing*
- *QA/UAT joint decision — same source as the Craft & Execution citation above (`decisions-log.md` line 35, attributed to "the Team")*
- *Note: an earlier draft's "adopted by other programme PMs" claim was cut per Jace's flag (comment JT6) — no evidence found; not restored here*
- *AI Learn-Create-Share stats — `PMP LCS Friday Feedback Results for Sharing_8May2026.pdf` (PMP #2 Learn-Create-Share Friday, 8 May 2026, theme "AI-Empowered Product Officers Work Smarter & Deliver Better"): satisfaction 4.25/5, 100% would recommend, 75% reported clearer view of AI post-session (25% no change). Co-presented ("both presenters" per the post-event feedback). Resolves the item previously flagged as unsourced — file located outside PM-OS/PM-skills-ALL-1 as anticipated*

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
- [x] 2026-07-16: Resolved AI Learn-Create-Share session stats — sourced to `PMP LCS Friday Feedback Results for Sharing_8May2026.pdf` (4.25/5 satisfaction, 100% would recommend, 75% clearer view of AI). Bullet reworded to "co-presented" since the source references "both presenters" — confirmed with Michelle this is accurate, not sole ownership
- [ ] Housekeeping (non-blocking): fix D-026 numbering collision in source logs before any panelist cross-references it
- [x] 2026-07-15: merged all bullet-level sourcing from the Impact evidence reference and the evidence findings report directly into the write-up as inline *Sources:* notes under each section — narrative bullets untouched, word count unchanged, both backup docs still linked above for full detail
- [x] 2026-07-16: added the live OTEP-Pathfinder Jira board link (board 12541, timeline view) as a direct citation under Impact (sprint history/go-live) and Ownership (jira-sync discipline) — gives panelists a clickable, verifiable source instead of a bare "Jira board" reference
- [x] 2026-07-15: reframed evaluation period as a mid-year review (was May–July/Sprints 1–6) per Michelle's direction — no source material exists for Jan–May in either workspace, so exact dates were dropped rather than fabricated; removed the "9 sprints" figure and hard August gate dates from the narrative since they don't hold under the wider window. If specific Jan–May work needs to be represented, it isn't in this draft yet — flag any of that context and I'll fold it in
