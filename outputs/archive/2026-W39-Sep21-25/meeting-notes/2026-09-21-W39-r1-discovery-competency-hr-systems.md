---
date: 2026-09-21
week: 2026-W39
type: meeting-notes
meeting_type: Discovery session (multi-stakeholder)
attendees: Rama Moorthy, Barry Lim, HRPS team, Vincent Kwok (Cumulus), Compass team, Michelle Yip
topic: R1 Discovery — Competency and Proficiency Configuration in HR Systems
---

# Meeting Notes: R1 Discovery — Competency & Proficiency Configuration in HR Systems

**Date:** 2026-09-21

**Attendees:** Rama Moorthy (facilitator), Barry Lim, HRPS team, Vincent Kwok / Cumulus team, Compass team, Michelle Yip

**Type:** Discovery session (not a decision-making meeting — explicitly framed as understanding current state and constraints)

**Michelle's self-assessment:** 7.5/10

---

## Summary

This session covered two capabilities: Competency Management and Internal Job Opportunities. The room aligned on end-state vision — Compass becomes the Single Source of Truth (SSOT) for competencies, and a discovery layer for internal jobs — but left several high-risk architectural questions unresolved (competency ID strategy, governance model, API integration pattern, security/VAPT implications). Rama repeatedly kept the session in discovery mode, which prevented premature design lock-in, but the gap between "vision aligned" and "the hard problems are solved" is real and, per Michelle's own assessment, not yet acknowledged in the delivery timeline.

**This directly resolves part of today's open CMM/CAM scope question (R-15 in the risk register).** CMM (competency management) is confirmed as a real, active workstream with Compass positioned as the target SSOT — not a settled R1 scope item, but not vapor either. See Timeline Risks below.

---

## What Went Well

1. **Strong alignment on end-state vision.** Compass as SSOT for competencies; HR systems as consumers. Compass as discovery layer for opportunities; HR systems remain systems of record for jobs/recruitment. Nobody fundamentally challenged the business direction.
2. **Discovery mindset maintained.** Rama repeatedly reminded the room this was about understanding current state and constraints, not finalizing solutions — prevented premature design lock-in before HRPS/Cumulus limitations were understood.
3. **Critical technical constraints surfaced early:**
   - **Cumulus:** own object identifiers, API capabilities available, supports internal jobs, competency mappings, and job-family inheritance.
   - **HRPS:** generated running-number ID series, APIs may need to be built/assessed, has competency-to-position mappings Compass doesn't currently consume.
4. **Job family inheritance discovered** — in Cumulus, competencies can attach at job-family level and inherit down to jobs. Could reduce maintenance effort, but adds design complexity for Compass.
5. **Participants openly raised uncomfortable concerns** — duplicate competency creation, missing governance controls, incomplete MVP competency profiles, change management burden, ID collisions. Healthy: risks surfaced before implementation, not after.

---

## Decisions Made

1. **Compass is the target SSOT for competencies.**
   - **Rationale:** consolidates competency creation/maintenance in one system; HRPS/Cumulus become consumers.
   - **Impact:** future state is create/update in Compass, push to HRPS/Cumulus. Not yet solved: identifier strategy (see Risk 1), governance (Risk 2).

2. **Discovery first, application later for internal jobs.**
   - **Rationale:** consistent with R1's existing non-ATS architectural stance.
   - **Impact:** internal jobs stay managed in HR systems; Compass discovers; application routing may stay in source HR systems initially. **This is directionally consistent with the SJR concept/solution split already tracked this week** — the concept (Compass as discovery layer) is settled, the mechanism is still open.

3. **Push model preferred over polling.**
   - **Rationale:** competencies change infrequently; polling adds unnecessary traffic/dependency.
   - **Impact:** Compass pushes updates to HR systems, not the reverse.

4. **Leverage existing HR APIs where possible; minimize new API development.**
   - **Rationale:** reduce build effort and security review surface.
   - **Impact:** scoping work needed to confirm what already exists vs. what's net-new.

---

## Key Risks Not Fully Addressed

| # | Risk | Why It Matters |
|---|---|---|
| 1 | **Competency ID strategy unresolved** — who generates the master ID, can systems accept externally-provided IDs, can existing ID ranges be reused, how are cross-system mappings maintained. Cumulus explicitly flagged it can't accept arbitrary IDs (controlled number ranges). | **Biggest architecture risk.** The entire SSOT strategy may fail without a durable identifier model. |
| 2 | **Governance model contradicts the proposed operating model.** Today: agencies create competencies, governance is mostly process-based, inconsistent enforcement. Future: Compass becomes central governance point. Not discussed: approval workflows, role permissions, delegated administration, audit history, exception handling. | Major gap — "SSOT" implies governance, and governance wasn't designed. |
| 3 | **Change management burden recognized but not mitigated.** Job created in HR system, competency updates now happen in Compass — split ownership, potentially confusing user journeys. No agreed change management plan. | Officer/HR-user confusion risk at rollout. |
| 4 | **Competency mapping incompleteness.** HRPS has competency-to-position mappings; Compass currently only consumes job-level mappings. Acknowledged, largely deferred. | Officers may see incomplete competency profiles — undermines trust in Compass recommendations. |
| 5 | **Duplicate competency creation across agencies.** Agencies can create similar competencies independently (example: "Legal Ability" across agencies), no robust enforcement, WD reviews may not catch overlaps. | Undermines talent mobility and competency standardization — the exact thing SSOT is meant to fix. |
| 6 | **API strategy not actually agreed.** Four options on the table: Compass calls HR APIs; HR systems consume Compass APIs; file-based interfaces; reuse existing integrations. No definitive pattern chosen. | Blocks any real sizing or technical spec work until resolved. |
| 7 | **Security and VAPT implications barely discussed.** Only a passing chat comment: "Million dollar question: creating new API, will both side need VAPT?" No exploration of authentication strategy, authorization model, data classification, security review effort, or VAPT timelines. | **Given the stated delivery timeline, this is a significant hidden risk** — directly relevant to this week's still-unresolved VAPT ownership/timeline question with Barry Lim (see this week's weekly plan, Priority 3). |
| 8 | **Recruitment workflow ownership unclear.** Is Compass only discovery? Should applications initiate in Compass? Who owns candidate workflow? How is application status surfaced? Different speakers implied different futures. | Same ambiguity pattern as the SJR Creation/Apply ownership question from today's earlier whiteboard session — this is the same open question, showing up in a second, separate discovery track. |

---

## Risks Michelle Thinks the Team Is Underestimating

1. **SSOT ≠ Integration.** The room focused on APIs; the harder problem is governance — ownership, stewardship, approval workflow, dispute resolution, quality control. None of these are defined.
2. **Agency ring-fencing for opportunities is bigger than recognized.** Beyond basic agency-specific visibility (discussed by Barry and the team): agency hierarchy, multi-agency officers, temporary postings, cross-agency programmes, security exceptions. Could become a major future design challenge — **directly relevant to this week's Pillar 1/4 RBAC and ringfencing discussions.**
3. **Data reconciliation wasn't discussed.** The team assumed Compass can push updates, but didn't cover failed updates, retries, rollback strategy, conflict resolution, or out-of-sync records. These become critical post-go-live operational scenarios.
4. **Timeline realism.** Near the end, delivery expectations sounded like months, API specs expected within days — while IDs, governance, APIs, security, change management, and business processes all remain unresolved. **The programme may be carrying schedule risk that hasn't been formally acknowledged.**

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Produce proposed competency management solution | Rama Moorthy | Not specified — flag for follow-up | 🔴 High | Not Started |
| Produce API specifications for HRPS/Cumulus integration | Rama Moorthy | Not specified | 🔴 High | Not Started |
| Assess HRPS capability to receive competency updates via API/file | HRPS team | Not specified | 🟡 Medium | Not Started |
| Share existing HRPS API specifications/documentation | HRPS team | Not specified | 🟡 Medium | Not Started |
| Share Cumulus API specifications/documentation | Vincent Kwok / Cumulus team | Not specified | 🟡 Medium | Not Started |
| Assess internal jobs integration model | HRPS & Cumulus teams | Not specified | 🔴 High | Not Started |
| Assess competency identifier strategy | Architecture team / Rama Moorthy | Not specified | 🔴 High — biggest architecture risk (Risk 1) | Not Started |
| Clarify new job ID creation and update process | HRPS & Cumulus teams | Not specified | 🟡 Medium | Not Started |
| Review agency tagging/ring-fencing requirements | Compass team | Not specified | 🟡 Medium — connects to this week's RBAC discussion | Not Started |
| Investigate position-level competency mappings impact | Compass team | Not specified | 🟡 Medium | Not Started |
| Raise CRs once detailed specifications are available | HRPS/Cumulus teams | Not specified | 🟢 Low, contingent on above | Not Started |

**Note:** none of the above action items have due dates — per the skill's standard, these should be scheduled within 48 hours rather than left open-ended, especially given Michelle's own assessment that timeline expectations (months, API specs "within days") don't match the volume of unresolved architecture questions.

---

## Timeline Risks

**TIMELINE RISK: Stated delivery expectations (months; API specs within days) directly conflict with the volume of unresolved architecture decisions** — competency ID strategy, governance model, API integration pattern (4 options, none chosen), security/VAPT approach, and change management plan are all still open. This is Michelle's own bottom-line assessment, not an inferred risk — flagging it here so it's tracked as a named risk, not just an observation.

**TIMELINE RISK: This meeting materially informs, but doesn't resolve, today's open R-15 (CMM/CAM scope conflict) in the risk register.** CMM is now confirmed as a real workstream with clear vision alignment (Compass as SSOT), but nothing here confirms whether it's *in R1 scope* — this session was framed as discovery, not scoping. The scope-overview slide prepared for Mark should not treat this meeting as resolving that question.

**TIMELINE RISK: VAPT question surfaces here independently of this week's other open VAPT thread.** The "will both sides need VAPT" question raised in chat is a new, specific instance of the broader unresolved VAPT scope/timeline question already tracked as Priority 3 in this week's weekly plan (Barry Lim's answer still outstanding). Worth folding this specific question into that thread rather than tracking it separately.

**TIMELINE RISK: Recruitment workflow ownership (Risk 8) is the same open question as today's SJR whiteboard session** (does Compass or HR systems own Creation/Apply), now showing up independently in a second discovery track with a different set of stakeholders. Two separate conversations converging on the same unresolved question is worth flagging to Adrian directly — it suggests this is a genuinely unresolved architectural decision, not a one-off ambiguity.

---

## Connections to This Week's Threads

- **R-15 (risk register):** CMM scope conflict — this meeting adds real substance (SSOT vision, technical constraints) but doesn't resolve whether CMM is in R1.
- **R-13 (risk register, SJR delivery mechanism):** the "recruitment workflow ownership unclear" risk here is the same open question as the SJR whiteboard's Compass-vs-HR-systems build question — now surfacing in two independent conversations.
- **R-14 (risk register, RBAC/ringfencing):** "agency ring-fencing for opportunities" risk directly touches this week's Opportunities-Module RBAC proposal and the broader ringfencing work already in Pillar 1/4.
- **VAPT (weekly plan Priority 3):** the chat's VAPT question is a specific new data point for the same unresolved thread with Barry Lim.
- **[Scope Slide Staleness Check](../decisions/2026-09-21-W39-r1-scope-slide-staleness-check.md):** this meeting should inform, but not yet settle, the CMM/CAM question before that slide goes to Mark.

---

## Next Steps

**Immediate:**
- Fold the VAPT chat question into the existing Barry Lim VAPT thread rather than tracking separately.
- Flag to Adrian that "who owns Creation/Apply" has now surfaced independently in two discovery sessions (SJR whiteboard + this one) — likely signals it needs a forcing decision, not another discovery round.
- Assign due dates to the 11 action items above — currently open-ended, which conflicts with Michelle's own flagged timeline-realism risk.

**Recommended focus for the next session** (per Michelle's assessment), five unresolved architectural decisions:
1. Master competency identifier strategy.
2. Source-of-truth boundaries (what stays in HRPS/Cumulus vs. Compass).
3. Governance and approval workflow.
4. Synchronization and reconciliation model.
5. User operating model and change management.

---

*Related: [R1 Scope Slide Staleness Check](../decisions/2026-09-21-W39-r1-scope-slide-staleness-check.md), [SJR Whiteboard notes](2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-13, R-14, R-15), [This week's weekly plan](../weekly-plans/2026-W39-weekly-plan.md) (Priority 3, VAPT)*
