# Meeting Notes: Design Review — CMM (Competency Management Module)

**Date:** 2026-08-11

**Attendees:** Li Ting KWAY, Xian Zhang GUO, Imelda MO, Michelle YIP, others (not fully specified in source)

**Meeting Type:** Design Review (functioned primarily as discovery readiness / risk identification session)

**Duration:** Not specified

---

## Summary

This was framed as a Design Review but functioned as a discovery readiness and risk identification session. Discovery planning is progressing well (4 sessions scheduled, dedicated scribes arranged), but the team surfaced a significant unresolved issue: agency-specific competencies may need to be classified as confidential, which could affect CMM's system classification, architecture, hosting, data governance, and future onboarding of high-risk workforce agencies. The team correctly resisted jumping to a technical solution and agreed to investigate further during discovery — but ownership of the issue, its severity, and a decision framework for resolving it are all still unclear.

**Direct connection to this week's R1 planning:** This ties straight into Tuesday's open-items #59 (R1 planning artefacts, 6 Aug meeting) — that meeting already flagged "competency ownership" as unresolved and assigned Michelle a Competency Ownership Decision Paper with no date. Today's session adds a second, more specific layer to that same unresolved question: confidential competency classification, which is a harder-edged version of the same governance gap.

---

## Decisions Made

1. **Capture the classification issue as a discovery requirement, investigate further**
   - **Why:** The confidential-competency question surfaced mid-discussion with no clear answer on scope or severity; premature to decide before understanding it.
   - **Who decided:** Team consensus
   - **Impact:** Keeps the door open on scope rather than locking in an answer without data — correct sequencing, but doesn't reduce the underlying risk exposure.

2. **Continue discovery before deciding R1 implementation priorities**
   - **Why:** Team explicitly resisted locking scope ahead of validating use cases and stakeholder input (Imelda, Michelle both pushed for this).
   - **Who decided:** Team consensus
   - **Impact:** Consistent with the 6 Aug R1 meeting's own "discovery must complete before CMM design finalizes" decision — this is a second confirmation of that sequencing, not a new call.

3. **Additional stakeholder input required before determining confidential-competency implications**
   - **Why:** Nobody in the room could answer whether this is already happening today, how many agencies are affected, or whether it's policy vs. implementation.
   - **Who decided:** Team consensus
   - **Impact:** Confirms this is still at the awareness stage, not the understanding stage — real risk if not converged on soon.

4. **High-risk workforce / confidential competency question to be raised with the Upskilling team during discovery**
   - **Who decided:** Team consensus
   - **Owner:** Li Ting KWAY
   - **Impact:** Adds a specific, actionable discovery question rather than leaving the topic to surface incidentally.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Run scheduled stakeholder discovery sessions | @Li Ting KWAY | Ongoing | 🔴 High | 🟡 In Progress |
| Continue recruiting additional discovery participants, expand coverage (esp. high-risk workforce agencies) | @Li Ting KWAY | Not specified — schedule within 48 hours | 🔴 High | 🔴 Not Started |
| Add competency classification questions into discovery interview guide | @Li Ting KWAY | Not specified — should happen before next session | 🔴 High | 🔴 Not Started |
| Raise high-risk workforce inclusion question with Upskilling team | @Li Ting KWAY | Not specified — during discovery | 🟠 Medium-High | 🔴 Not Started |
| Understand use cases behind confidential competencies (who can view, why classified confidential) | @Product Team (Michelle/Imelda) | Not specified | 🔴 High | 🔴 Not Started |
| Clarify whether CMM intends to house all competencies or only a subset | @Product Team | Not specified | 🔴 High — this is the root scope question | 🔴 Not Started |
| Decide future support strategy for high-risk workforce competencies (permanent exclusion vs. temporary) | @Business Owners / Product Leadership | Not specified | 🔴 High | 🔴 Not Started |
| Determine if agency-specific competencies require additional governance/data approval mechanisms | @Business Owners / Product Leadership | Not specified | 🟠 Medium-High | 🔴 Not Started |

**Notes:**
- Every item above lacks a due date. Given this is now the second consecutive meeting (6 Aug R1 planning, today's CMM review) to surface an unresolved competency-governance question without a date, this matches the pattern already flagged in this week's context: "no owner, no date" as a recurring failure mode, not a one-off.
- The three Business Owners/Product Leadership items are the most consequential and least owned — no individual name attached, just a role category.

---

## Key Insights & Quotes

**Strategic considerations:**
- "I don't really know what is the full vision of CMM." — surfaced uncertainty about foundational scope that ideally should already have direction from sponsors or leadership.
- Core unresolved question, repeated by multiple participants: **is CMM intended to contain all competencies across government, or only a subset?** This single question determines architecture, security posture, onboarding strategy, and roadmap — and nobody in the room could answer it.

**Technical/architectural considerations:**
- Michelle flagged multiple times that if confidential competencies are in scope, architecture, hosting, and system classification may all need to change — but the conversation didn't get into cost, security, schedule, or migration impact. Acknowledged, not explored.
- CMM was repeatedly described as a "source-of-truth repository," but downstream integration impact (HRPS, synchronization behavior, API access controls) wasn't discussed in depth — a gap given that framing.

---

## Open Questions

- [ ] Must CMM eventually contain all competencies across WOG, or only a subset? — **Owner:** Business Owners / Product Leadership — **By:** Not set — flagged as the single highest-leverage question blocking architecture/scope decisions
- [ ] Will high-risk workforce agencies ever be onboarded to CMM? — **Owner:** Business Owners / Product Leadership — **By:** Not set
- [ ] What is the highest data classification CMM must support in its target state? — **Owner:** Business Owners / Product Leadership — **By:** Not set
- [ ] Who owns resolving the confidential-competency classification issue — Data Office, Upskilling team, agency stakeholders, or high-risk workforce stakeholders? — **Owner:** Unassigned — **By:** Not set, flagged explicitly as unresolved in the meeting
- [ ] Is this classification issue already happening today, and if so, how many agencies are involved? — **Owner:** Product Team — **By:** Not set
- [ ] Is confidential-competency handling a policy requirement or an implementation choice? — **Owner:** Product Team — **By:** Not set

---

## Blockers

1. **No decision framework for converging on competency scope (include all / exclude confidential / phase later)**
   - **Blocked by:** No decision governance model established in this meeting
   - **Impact:** Discovery can continue indefinitely without a mechanism to force convergence — this is a process gap, not a data gap
   - **Resolution:** Needs an explicit decision framework and owner, not just more interviews

2. **No engagement plan with the Data Office**
   - **Blocked by:** Discussion assumed Data Office would help answer classification questions, but no one has actually engaged them yet
   - **Impact:** If Data Office input becomes critical (likely, given the classification question), discovery could stall waiting on an unplanned dependency
   - **Resolution:** Proactively schedule Data Office engagement rather than waiting for the need to become urgent

---

## Timeline Risks

- **TIMELINE RISK:** This is the second consecutive planning session (6 Aug R1 Timeline Planning, today's CMM review) to surface a competency-governance question with no owner and no date. The 6 Aug meeting already assigned Michelle a Competency Ownership Decision Paper with no due date — today's session adds confidential-competency classification as a related but distinct sub-question, compounding the same unresolved thread rather than resolving it.
- **TIMELINE RISK:** No due dates exist on any of the 8 action items in this meeting. Given the R1 "February target" already lacks a critical path timeline (per the 6 Aug meeting), adding more undated discovery work compounds that visibility gap rather than closing it.
- **TIMELINE RISK:** If agency-specific competency data requires additional governance/data approval processes (Risk 3 below), this could be a genuinely new dependency not yet reflected in any R1 timeline or dependency tracker.

---

## Risks

1. **Confidential competencies force higher system classification**
   - **Blocked by:** No confirmation yet of whether this is required, or for how many agencies
   - **Impact:** Could affect infrastructure, security controls, and hosting for the entire CMM platform, not just the confidential-competency subset
   - **Resolution:** Needs the three product-leadership questions (above) answered before architecture decisions can be made safely

2. **Future rework if requirements are excluded now and needed later**
   - **Blocked by:** No scope contract yet defining R1 must-haves vs. deferrable items
   - **Impact:** Potential rework in architecture, access control, role tagging, integrations, and approval processes
   - **Resolution:** Same Competency Ownership Decision Paper / R1 Scope Contract already assigned from 6 Aug — this reinforces the urgency of that artefact rather than creating a new one

3. **Additional data approval processes may be triggered by agency-specific competency onboarding**
   - **Blocked by:** Unconfirmed — governance reviews not yet scoped
   - **Impact:** Could become a timeline risk once quantified
   - **Resolution:** Determine governance requirements (assigned to Business Owners/Product Leadership above)

4. **Discovery coverage gap for high-risk workforce and confidential-competency agencies**
   - **Blocked by:** Current interview targets may not adequately represent these agency types
   - **Impact:** Could mean the classification question doesn't get properly validated before R1 scope decisions are made
   - **Resolution:** Team already discussed expanding coverage — needs to be confirmed as actually happening, not just discussed

5. **Decision deadlock risk (not explicitly discussed in the meeting, flagged as a gap)**
   - **Blocked by:** No decision criteria exist for choosing between "include all competencies," "exclude confidential," or "phase later"
   - **Impact:** Discovery could continue indefinitely without converging on scope
   - **Resolution:** Needs explicit decision governance — this is arguably the most urgent unaddressed gap from the session

6. **Scope contract risk — R1 practicality vs. long-term vision tension**
   - **Blocked by:** No definition yet of R1 must-haves vs. deferrable items, despite repeated discussion of future onboarding needs
   - **Impact:** Risk of scope creep if long-term vision questions keep entering R1 scoping conversations without a boundary
   - **Resolution:** R1 Scope Contract (already assigned from 6 Aug meeting) needs to explicitly address this

---

## Next Steps

**Immediate (This Week):**
- Li Ting to continue discovery session execution and add competency classification questions to the interview guide
- Product team to begin investigating confidential-competency use cases (who views them, why classified confidential)
- Raise high-risk workforce question with Upskilling team

**Short-term (Next 2 weeks):**
- Business Owners/Product Leadership to answer the three core scope questions (WOG-wide vs. subset, high-risk workforce onboarding, target-state classification)
- Establish a decision framework for converging on competency scope — this doesn't yet exist and is the biggest process gap from today's session
- Proactively engage the Data Office rather than waiting for the dependency to become blocking

**Follow-up Meeting:**
- **Date:** Not set — recommend scheduling once the three product-leadership scope questions have answers, or once the Competency Ownership Decision Paper (from 6 Aug) is drafted, whichever comes first
- **Purpose:** Force convergence on CMM scope boundary (all competencies vs. subset) and confirm ownership of the confidential-competency risk
- **Attendees:** Whoever can speak for Data Office, Upskilling team, and Business Owners/Product Leadership — the meeting explicitly can't resolve without them

---

## Context for Future Reference

**PM Assessment (carried from source notes):** This is a yellow-to-red emerging risk. What looks small on the surface ("some competencies are confidential") actually touches product vision, architecture, infra classification, security, data governance, onboarding strategy, and integrations. The most important next step isn't more technical discussion — it's answering three product questions: (1) must CMM eventually contain all competencies across WOG, (2) will high-risk workforce agencies ever be onboarded, (3) what's the highest data classification CMM must support in its target state. Until those are answered, architecture and scope decisions stay exposed to potentially significant rework.

**Pattern worth naming:** This is now the second consecutive meeting in the same week (6 Aug R1 Timeline Planning, today's CMM Design Review) to surface "no owner, no date" as the core gap rather than a technical or resourcing problem. The 6 Aug meeting's own retrospective flagged this same pattern going back to the 6 Jul SteerCo recommendation (auth, SSOT contract, manager UX blockers). Worth treating this as a structural governance gap across the whole R1/CMM planning effort, not an isolated miss in any one meeting.

**Direct link:** [2026-08-06-W32-r1-timeline-planning.md](../archive/2026-W32-Aug3-Aug7/meeting-notes/2026-08-06-W32-r1-timeline-planning.md) — assigned Michelle the Competency Ownership Decision Paper, still undated. Today's session adds confidential-competency classification as a sharper, related sub-question that paper needs to now cover.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original executive summary and full analysis</summary>

**Executive Summary:** This was primarily a discovery readiness and risk identification session rather than a design review. The team is making good progress on stakeholder interviews and discovery planning, but a potentially significant issue surfaced around agency-specific competency classification and high-risk workforce handling. The biggest takeaway is that the team has uncovered a requirement that could materially affect CMM system classification, architecture and hosting requirements, data governance approvals, scope boundaries for Compass/CMM, and future onboarding of high-risk workforce agencies. The team acknowledged the issue but has not yet fully resolved ownership, scope implications, or decision-making pathways.

**What Went Well:**
1. Discovery activities progressing — 4 sessions scheduled (Upskilling, CDGO, PSD stakeholders), coverage expanding, dedicated scribes arranged (reduces single-facilitator dependency risk)
2. Team identified an important hidden requirement early — Xian Zhang Guo raised agency-specific competencies potentially being classified as confidential, leading to discussion of system-of-record status, higher classification implications, downstream HR system impact, role tagging/assignment logic implications
3. Team resisted jumping to a solution — Imelda Mo and Michelle Yip advocated capturing the requirement while continuing discovery rather than locking scope
4. Good challenge around long-term vision — team surfaced whether CMM is meant to contain all competencies across government or only a subset, correctly identifying this as architecture/security/onboarding/roadmap-determining

**What Did Not Go Well:**
1. Product vision appears misaligned — visible uncertainty on what CMM ultimately contains, whether high-risk workforce is in scope, whether Compass/CMM share scope boundaries, whether high-risk agency onboarding is expected. Quote: "I don't really know what is the full vision of CMM."
2. No clear owner for the new risk — potential owners mentioned (Data Office, Upskilling team, agency stakeholders, high-risk workforce stakeholders) but no individual assigned
3. Requirement severity remains unclear — discussed MFA competencies, agency-specific competencies, confidential data, classification, but couldn't answer if already happening today, how many agencies involved, policy vs. implementation, whether mandatory
4. Architecture implications acknowledged but not explored — Michelle flagged architecture/hosting/classification could change, but cost/security/schedule/migration impact not explored

**Key Risks Discussed:** (1) Confidential competencies force higher system classification, (2) future rework if excluded now and needed later, (3) additional data approval processes may be triggered, (4) discovery coverage gap for high-risk/confidential agencies

**Risks Not Addressed Enough (PM's own flag):** (1) Decision deadlock risk — no framework for converging on scope; (2) Scope contract risk — R1 practicality vs. long-term vision tension, no must-have/deferred boundary defined; (3) Dependency risk with Data Office — assumed help, no engagement plan; (4) Integration downstream impact — HRPS, synchronization, API access controls not discussed despite CMM being called a source-of-truth repository

**Decisions:** (1) Capture classification issue as discovery requirement, investigate further; (2) continue discovery before deciding R1 implementation priorities; (3) additional stakeholder input required before determining confidential-competency implications; (4) raise high-risk workforce/confidential competency question with Upskilling team during discovery

**Action Items by owner:** Li Ting Kway (discovery execution, discovery enhancement, stakeholder validation with Upskilling team); Product Team (understand confidential-competency use cases, clarify CMM scope — all vs. subset); Business Owners/Product Leadership (decide future high-risk workforce support strategy, determine governance/approval needs)

**PM Assessment:** Yellow-to-red emerging risk. Touches product vision, architecture, infra classification, security, data governance, onboarding strategy, integrations. Three questions must be answered before architecture/scope decisions are safe: (1) must CMM eventually contain all competencies across WOG? (2) will high-risk workforce agencies ever be onboarded? (3) what is the highest data classification CMM must support in its target state?

</details>
