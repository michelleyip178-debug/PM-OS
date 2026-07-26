---
date: 2026-07-24
week: 2026-W30
meeting_type: stakeholder-review
topic: OTEP MVP timeline, UAT/VAPT readiness, CIE strategy — senior bi-weekly
---

# Meeting Notes: [Bi-weekly] OTEP Product x BO — Senior Level

**Date:** 2026-07-24

**Attendees:** Mark, Gek Khiang, Adrian, Jace, Victor (CIE), Michelle Yip (+ delivery team)

**Meeting Type:** Stakeholder review (senior tier — per the 2026-06-02 two-tier demo agreement, this is the Mark/GK consolidated-narrative audience, not a working-level sprint demo)

**Duration:** Not specified

---

## Summary

The team presented a revised plan (late-October production deploy, one-week soft launch) and both Mark and Gek Khiang pushed back hard on whether it's realistic. By the end, November looked like the more credible go-live target, pending UAT and VAPT outcomes. A second thread on the Competency Inference Engine (CIE) reframed it from "CV-processing tool" to an enterprise capability with Career Compass as one implementation among several. The sharpest governance issue: senior stakeholders felt blindsided, since October dates had already been communicated and the reasons for slippage (UAT, VAPT, data risk) weren't new information — they should have been escalated earlier.

---

## Decisions Made

1. **Soft-launch approach remains valid in principle**
   - **Why:** Production deploy + one-week internal soft launch (PSD users + selected stakeholders) is still seen as the right shape, before broader rollout
   - **Who decided:** No objection from the room; approval is conditional on readiness evidence, not yet locked
   - **Impact:** Launch plan structure stands, but the go/no-go now hinges on the hygiene gates below

2. **Hygiene gates must be demonstrated before launch**
   - **Why:** Leadership wants evidence, not assurances, on cyber remediation closure, performance testing, risk assessment closure, and security readiness
   - **Who decided:** Gek Khiang (pressed for this); accepted by team
   - **Impact:** OTEP team now owes a production-readiness package (see Actions)

3. **November is emerging as the realistic primary target (not yet formal)**
   - **Why:** October has no meaningful buffer left; a single UAT or VAPT delay pushes it further
   - **Who decided:** No formal decision — Gek Khiang repeatedly suggested the team stop defending a fragile October date and reposition around November instead. This is the strongest directional signal from the meeting, even without a formal vote.
   - **Impact:** Affects SteerCo messaging, agency onboarding communications, and pilot-participant expectations — none of which have been drafted yet (see Risks)

4. **CIE should be framed around use cases, not document types**
   - **Why:** Mark wants CIE understood as a competency-inference capability with multiple business applications (Career Compass profile completion, competency tagging, course recommendation, CDG use cases), not a narrow "processes CVs" tool
   - **Who decided:** Mark (directive)
   - **Impact:** Victor/CIE team to re-scope how they present and develop CIE; affects how the capability gets positioned to other potential enterprise users beyond OTEP

5. **Proceed with course-data preparation**
   - **Why:** Verbal support given for loading course data into the dev environment
   - **Who decided:** Team consensus
   - **Impact:** Contingent on appropriate approvals and process compliance — not a blocker, but not a free pass either

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Prepare production-readiness package (cyber remediation, performance testing, security readiness, risk assessments) | Adrian / Jace / Delivery Team | Not stated | 🔴 High | 🔴 Not Started |
| Explore anonymised production data for UAT testing | Adrian / Jace / Delivery Team | Not stated | 🔴 High | 🔴 Not Started |
| Investigate earlier production-data validation / offline verification approaches | Adrian / Jace / Delivery Team | Not stated | 🟡 Medium | 🔴 Not Started |
| Work through technical feasibility of production-data testing with DO/product teams | Adrian / Jace / Delivery Team | Not stated | 🟡 Medium | 🔴 Not Started |
| Return with a clearer, single narrative on delay drivers and schedule confidence | Adrian / Jace / Delivery Team | Not stated | 🔴 High | 🔴 Not Started |
| Engage team separately on technical issues and timeline realism | Gek Khiang | Not stated | 🟡 Medium | 🔴 Not Started |
| Support explanation of revised (November) timeline to leadership, if it becomes the target | Gek Khiang | Not stated | 🟡 Medium | 🔴 Not Started |
| Support escalation and leadership communication once technical position is clarified | Mark | Not stated | 🟡 Medium | 🔴 Not Started |
| Help unblock DO-side dependencies if required | Mark | Not stated | 🟡 Medium | 🔴 Not Started |
| Reframe CIE around use cases instead of document types | Victor / CIE Team | Not stated | 🔴 High | 🔴 Not Started |
| Identify enterprise-level CIE use cases with Shi Hui, Annette, and relevant stakeholders | Victor / CIE Team | Not stated | 🟡 Medium | 🔴 Not Started |
| Continue CV validation work using real CV samples + human review | Victor / CIE Team | Not stated | 🟡 Medium | 🔴 Not Started |
| Progress course-data onboarding per governance approvals | Victor / CIE Team | Not stated | 🟢 Low | 🔴 Not Started |

**Notes:**
- No due dates were given for any action item in the source notes — all should get real dates within 48 hours, especially the production-readiness package and the "clearer narrative" item, since both gate the November-vs-October call.
- The production-readiness package and the "clearer delay narrative" are the two items that matter most for restoring stakeholder confidence — worth flagging to Adrian/Jace that these aren't just deliverables, they're the trust-repair mechanism.

---

## Key Insights & Quotes

**Governance / trust dynamic:**
- Mark's core objection wasn't the delay itself — it was "Why wasn't this escalated earlier?" Leadership had already communicated October onboarding dates to others, and the reasons now cited (UAT, VAPT, data risk) weren't unknown risks — they were known and should have surfaced sooner.
- The team could not yet produce a single crisp narrative of: original assumption → what changed → why → why it couldn't have been known earlier. That gap is why Mark kept pushing back.

**Technical recommendation (Gek Khiang):**
- "Test with near-real production data as early as possible" — take PSD/ESG production snapshots, anonymise them, run through UAT pipelines, surface data-integrity issues before production. Reframes several of the team's stated concerns as data-quality risks rather than functional risks — arguably the most actionable technical idea from the session.

**CIE reframe (Mark):**
- From "a tool that processes CVs" to "a competency inference capability that supports multiple business use cases" — Career Compass profile completion, competency tagging, course recommendation, CDG use cases, and future inference use cases all named as applications of the same underlying capability.

---

## Open Questions

- [ ] What findings (high/medium/low) actually block go-live, and who signs off on accepting the rest? — **Owner:** Not assigned — **By:** Not stated
- [ ] Who owns the production-data testing strategy (access constraints, dependent-team agreement not yet secured)? — **Owner:** Not assigned — **By:** Not stated
- [ ] What's the communications plan if November becomes the real target — messaging to agencies, to SteerCo, updated onboarding plans, impact to pilot participants? — **Owner:** Not assigned — **By:** Not stated (flagged as could become urgent)

---

## Risks

**Risk 1 — UAT reveals unexpected data issues**
Mock data may hide real-world issues; integration spans multiple sources; competency mappings may have gaps; officer profiles may contain edge cases.

**Risk 2 — VAPT findings unknown**
Launch readiness can't complete without VAPT. Severity and remediation effort are both still unknown.

**Risk 3 — Cyber remediation closure**
Leadership wants visibility into open findings, risk acceptance decisions, and remediation plans — not currently packaged for review.

**Risk 4 — Timeline compression**
Every remaining activity sits on a tight schedule with effectively no slack. One slip in UAT or VAPT pushes the date further.

**Risk 5 (not yet being addressed) — Stakeholder confidence risk**
This is the biggest risk in the room and it's not technical. Senior leaders already have October dates in hand; those dates are now moving, and the escalation came late. Left unmanaged, this erodes trust in future delivery forecasts regardless of whether November actually holds.

**Risk 6 (not yet being addressed) — Production-data strategy is unresolved**
Everyone agrees production-grade testing matters, but ownership isn't assigned, data-access constraints are unresolved, and dependent teams haven't agreed to participate.

**Risk 7 (not yet being addressed) — No documented go-live risk threshold**
High/medium/low findings were discussed in the abstract, but there's no launch decision framework: what blocks launch, what can be accepted, who signs off.

**Risk 8 (not yet being addressed) — No communications plan for a delay**
If November becomes the real target, nobody has yet drafted messaging for agencies, SteerCo, updated onboarding plans, or pilot-participant impact. Flagged as likely to become urgent fast.

---

## Timeline Risk

**TIMELINE RISK:** This directly contradicts the 2026-06-02 decisions-log entry (`06-skills-and-decisions/decisions-log.md`), which locked Go-Live to end of Sprint 12 (16 Oct 2026) and VAPT starting early August specifically to be "VAPT-ready by early Aug" ahead of that date. This meeting's own working assumption — VAPT results still pending, October down to "achievable only if everything goes well," November the more credible target — means the locked 16 Oct date is now stale and needs a formal update in the decisions log, not just a verbal shift in a stakeholder meeting.

---

## Context for Future Reference

- Per `project_steerco-scope` (Michelle's own tracked context): Michelle's SteerCo role is co-prepping the consolidated-narrative demo with Imelda, Rama, and Pow Hwee — not authoring the North Star brief, transition plan, or gap analysis. This meeting's "Readout" section (below) reads exactly like SteerCo-feeding synthesis, which fits that co-prep role rather than sole ownership of the timeline narrative.
- Stakeholder profile for Mark & GK (`context-library/stakeholder-profiles.md:117`) is already flagged incomplete: "capture their specific priorities, communication style, and what 'good' looks like to each before the next session." This meeting is good raw material to fill that gap — Mark clearly prioritizes early escalation and coherent risk narratives over polish; Gek Khiang prioritizes evidence-based readiness ("what specifically are we testing") and pushed the production-data-testing idea unprompted.
- This is a senior/consolidated-narrative-tier meeting per the 2026-06-02 two-tier demo agreement — treat any follow-up prep the same way (unified story, not individual sprint-slice updates).

---

## Michelle's Readout

If preparing a SteerCo update from this: the real outcome wasn't whether OTEP can launch, it was whether leadership can still trust the dates being communicated. Technically, there's a viable path to November. Organisationally, the bigger job is restoring confidence — a clearer risk narrative, earlier escalation next time, and evidence-based readiness checkpoints instead of assurances.

Strongest next step: a concise one-pager covering (1) why October slipped, (2) what must happen before go-live, (3) why November is achievable, (4) what would still cause further delay. This is the artifact that would directly close Mark's "why wasn't this escalated earlier" objection — worth drafting before the next bi-weekly, not after.

---

## Next Steps

**Immediate:**
- Delivery team: start the production-readiness package and the single delay narrative — these are the two items gating the October→November conversation
- Someone (unassigned): draft the one-pager described in the Readout above, ahead of the next bi-weekly or SteerCo touchpoint
- Update `06-skills-and-decisions/decisions-log.md` — the 16 Oct Go-Live entry is now stale given this meeting's direction

**Follow-up Meeting:**
- **Date:** Not stated (next bi-weekly, or sooner if Gek Khiang's separate technical session happens first)
- **Purpose:** Review production-readiness package, confirm October vs. November, review CIE use-case reframe progress
- **Attendees:** Mark, Gek Khiang, Adrian, Jace, Victor, Michelle (+ delivery team)
