# Meeting Notes: [Bi-weekly] OTEP Product x BO — Senior Level

**Date:** 2026-09-04 (W36)

**Organiser:** Imelda MO

**Attendees:** Mark HO, Gek Khiang TAN, Xian Zhang GUO, Victor ONG, She Hui TAN, Li Ting KWAY, Imelda MO, product/engineering leads

**Meeting Type:** Governance / assurance review (bi-weekly)

**Duration:** 1 hour

**Transcribed:** Yes (analysis based primarily on the transcript, with supporting context from the meeting chat)

---

## Summary

Broadly positive governance meeting. Career Compass and related workstreams are on track: UAT largely complete, SSO issues resolved, VAPT preparation done and scheduled to start, and the CV Competency Inference Engine (CIE) progressing towards AI governance clearance. Leadership's attention has shifted from delivery execution to product readiness, user validation, adoption strategy, communications, and AI governance confidence. Mark HO spent little time challenging technical delivery and most of it probing whether the team is validating assumptions with real users before launch.

The main unresolved concern is that four assumptions remain unvalidated: that CIE output is useful to users, that officers will understand Career Compass, that agencies will accept the MVP rollout model, and that a two-week soft-launch feedback period is enough.

---

## Decisions Made

1. **Proceed with AI governance / IDSC clearance for CIE now**
   - **Why:** Waiting for more HRPS/Cumulus data would delay clearance; evaluation can continue in parallel.
   - **Who decided:** Leadership (Mark HO, Gek Khiang TAN).
   - **Impact:** CIE governance submission proceeds on current evidence base, on a fixed clearance path:
     | Milestone | Owner | Target |
     |---|---|---|
     | IDSC/assessment submission (incl. testing methodology) | Victor ONG | 7 Sep |
     | TRA review | — | 16 Sep |
     | Management approval | — | 23 Sep |
     | IDSC approval | — | 30 Sep |
   - **Watch-out:** Leadership signalled the approval discussion will focus on evaluation rigour and methodology, not the headline accuracy metrics.

2. **Continue evaluating CIE with additional HRPS and Cumulus data as it becomes available**
   - **Why:** Larger, more representative samples strengthen the evaluation without blocking submission.
   - **Impact:** Evaluation is an ongoing track, not a gate.

3. **Treat CIE as a reusable government capability, not just a Career Compass feature**
   - **Why:** Positioning it as API-consumable and agent-ready aligns with PSD's reusable-capability direction and helps the AI governance conversation.
   - **Impact:** Architecture and governance submissions must be framed around a reusable service. Supporting artefacts should emphasise composability and future reuse beyond Career Compass.

4. **Maintain the MVP-first principle — only critical issues block MVP**
   - **Why:** Endless pre-launch optimisation is a bigger risk than shipping a contained MVP.
   - **Who decided:** Gek Khiang TAN, reinforced repeatedly.
   - **Impact:** Teams evaluate soft-launch feedback through an MVP lens. R1 release planning becomes critical because not all feedback will be accepted before launch. Feedback triage rule:
     | Feedback type | Action |
     |---|---|
     | Defect / blocking issue | Fix before MVP |
     | Minor UX improvement | Consider before MVP |
     | Major product change | Move to R1+ |

5. **Soft launch remains in the plan**
   - **Why:** It is the preferred validation approach before public rollout; participants confirmed a soft launch is already planned.
   - **Working dates discussed:** soft launch 12–17 Nov, MVP launch 24 Nov.
   - **Impact:** Team now needs to define test objectives, decide whether dates move earlier, and decide whether testing happens only in production or earlier via test environments.

6. **Test objectives must be defined before running the soft launch**
   - **Why:** Strongest ask from Mark HO — the team should explicitly define what is being tested before engaging agencies.
   - **Impact:** Team must prepare learning objectives, evaluation criteria, success measures, and a rule for which feedback influences MVP versus later releases.

7. **Start detailed MVP communications planning now**
   - **Why:** Agency rollout messaging needs leadership clearance and is a near-term workstream, not a future one.
   - **Impact:** Xian Zhang GUO and team to prepare the comms approach, explain the MVP purpose, explain OTG ↔ Career Compass coexistence, and prepare material for PS/DS review.

8. **Technical readiness checks before agency onboarding**
   - **Why:** Proactive checks on agency environments are a prerequisite for inviting users in.
   - **Impact:** Gek Khiang TAN to engage CIO counterparts to verify Comet migration status, WOGAAD readiness, and potential login issues before onboarding pilots.

9. **Escalate data-access issues rather than wait**
   - **Why:** HRPS and Cumulus bottlenecks are blocking the CIE evaluation dataset.
   - **Impact:** Gek Khiang TAN to engage both GovTech and HRPS stakeholders; team keeps pushing for the CV/JD datasets.

10. **Continue the weekly governance cadence; escalate blockers immediately**
   - **Impact:** No change to meeting rhythm; data-access blockers raised as they arise.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Define clear objectives and success criteria for the Career Compass test party / soft launch | Xian Zhang GUO + Product Team | Before soft launch (no date set — schedule within 48h) | 🔴 High | 🔴 Not started |
| Review whether the soft launch should occur earlier than planned | Product Team | Next BO sync | 🔴 High | 🔴 Not started |
| Develop the MVP communications and rollout approach for PSD and ESG; prepare proposal for PS/DS review | Xian Zhang GUO | Before soft launch (no date set) | 🔴 High | 🔴 Not started |
| Define agency communications for the OTG → Career Compass transition | Product Team | Before soft launch (no date set) | 🟡 Medium | 🔴 Not started |
| Submit IDSC/AI assessment package for CIE, including the testing methodology (evaluation process, sample size, assessment rigour, benchmarking rationale) | Victor ONG + team | **7 Sep** | 🔴 High | 🔴 Not started |
| Support the IDSC clearance path: TRA review (16 Sep) → management approval (23 Sep) → IDSC approval (30 Sep) | Victor ONG + team | 30 Sep | 🔴 High | 🔴 Not started |
| Chase Cumulus data access and the cloaking-service dependency with GovTech contacts | Gek Khiang TAN | Ongoing (no date set) | 🔴 High | 🟡 In progress |
| Follow up with HRPS on JD/CV data access issues; escalate if the bureaucratic blocker persists | Gek Khiang TAN | Ongoing (no date set) | 🔴 High | 🟡 In progress |
| Prepare a coherent narrative reconciling HR Alchemist and Career Compass competency inference | She Hui TAN + Victor ONG + team | Before soft launch (no date set) | 🟡 Medium | 🔴 Not started |
| Conduct agency technical readiness checks (Comet migration status, WOGAAD login, non-standard agency environments); engage CIO counterparts where needed | Gek Khiang TAN + Engineering | Before soft launch (no date set) | 🟡 Medium | 🔴 Not started |
| Arrange a follow-up workshop on CMM findings and future scope prioritisation | Li Ting KWAY + Product Team + WD + CDGO | TBD (separate session) | 🟡 Medium | 🔴 Not started |

**Notes:**
- The IDSC path has firm dates (7 / 16 / 23 / 30 Sep). Everything else was raised without a due date and needs one assigned within 48 hours, anchored to the soft-launch window.
- The soft-launch objectives item (Xian Zhang GUO) is the critical one: several other items (comms, narrative, readiness checks) only make sense once "what are we testing" is answered.

### For the PM / RAID dashboard next week

These are the five items that most clearly change what the team does next:

1. IDSC submission package ready by **7 Sep**, including testing methodology.
2. Soft-launch objectives defined and agreed.
3. MVP communications approach drafted for PS/DS clearance.
4. Decision on whether soft-launch timing needs to move earlier.
5. HRPS / Cumulus data-dependency escalation status.

---

## Key Insights

**Leadership's focus has moved from "can we build it" to "is it the right thing."** Mark HO spent most of the meeting on user validation, not delivery. The team's delivery confidence (UAT, VAPT, integrations, environments) is running ahead of its user-validation confidence. This is a product risk, not an engineering risk.

**AI governance approval will hinge on methodology, not the headline accuracy number.** Both Mark HO and Gek Khiang TAN pushed past the reported 80–90% precision to ask "what is the methodology?" The governance audience is likely to challenge the evaluation process, sample size (currently 20 CVs, 218 competencies), assessment rigour, and benchmarking rationale. Good metrics with a weak rationale could still stall.

**The CIE / HR Alchemist narrative gap is a communications problem, not a technical one.** Officers will reasonably ask why two PSD tools infer competencies differently. No coherent answer exists yet.

**A soft launch without defined learning objectives risks becoming symbolic.** The team listed eight candidate things to test (usability, user-friendliness, accuracy, development opportunities, landing-page effectiveness, comparison against OTG, career understanding, CV inference quality) but agreed on none. If participation is also low, the exercise produces reassurance rather than learning.

---

## Risks Not Fully Addressed

| Risk | Detail | Why it matters |
|---|---|---|
| **Wrong product, not wrong delivery** | Team discussion centres on VAPT, UAT, integrations, environment readiness. Mark HO is asking whether users actually want this experience. | Discovering a fundamental mismatch with user expectations after most delivery work is done is expensive and late. |
| **Soft launch may not generate actionable feedback in time** | The model assumes users participate quickly, feedback is meaningful, the team analyses fast, and developers react immediately. None of these were challenged. | Low participation turns the soft launch into a symbolic milestone, not a learning loop. |
| **AI governance approval depends on methodology** | Concern is evaluation process, sample size, assessment rigour, benchmarking rationale — not the precision figure. | Weak rationale could make approval harder despite strong metrics. |
| **Agency onboarding and communications not finalised** | No agreed MVP comms approach, rollout messaging, OTG-vs-Career-Compass positioning, or user transition guidance. PSD and ESG are first wave. | Unclear messaging creates confusion during launch for the exact agencies whose experience sets the tone. |
| **Hidden technical onboarding edge cases** | WOGAAD login, Comet migration status, non-standard agency environments. Team believes risk is low; leadership still wants proactive CIO-team checks. | Issues here surface only when real users try to access the product. |

---

## Timeline Risks

- **TIMELINE RISK — soft-launch dates cited in this meeting differ from the confirmed MVP roadmap.** The meeting stated soft launch 12–17 Nov and public MVP launch 24 Nov. The confirmed roadmap ([outputs/roadmaps/2026-09-01-W36-mvp-timeline-wbs-gantt.md](../roadmaps/2026-09-01-W36-mvp-timeline-wbs-gantt.md)) shows MVP launch **24–25 Nov** (Adrian Ang, confirmed 25 Aug) with overall VAPT sign-off **~7 Nov**, gated by POCDEX remediation 2–6 Nov. A soft launch starting 12 Nov leaves only ~5 working days between VAPT sign-off and soft launch, and ~2 weeks between soft-launch close (17 Nov) and public launch (24–25 Nov) to collect, assess, prioritise, and implement fixes. Confirm the soft-launch window is real and agreed, and check it against the VAPT sign-off gate before committing.

- **TIMELINE RISK — soft-launch objectives are undefined but the window is fixed.** Leadership asked for learning objectives to be defined "before the soft launch," but the soft launch is roughly 10 weeks out and the objectives item has no owner-committed date. If objectives, comms, narrative, and readiness checks all compress into late October, they collide with the VAPT remediation window (POCDEX 2–6 Nov) and known leave (Adrian away 5–9 Oct, Jace away 26 Oct–5 Nov per the roadmap).

- **TIMELINE RISK — "revisit whether the soft launch should start earlier" has no decision date.** Pulling it forward competes with VAPT sign-off (~7 Nov). Any earlier soft launch would run before security clearance, which needs an explicit leadership call. Open sub-question from the meeting: whether soft-launch testing happens only in production or earlier via test environments.

- **TIMELINE RISK — IDSC approval (30 Sep) lands the same week as the employment-lifecycle end-September freeze.** Both draw on Victor ONG / engineering capacity. The IDSC path (submission 7 Sep, TRA 16 Sep, management 23 Sep, IDSC 30 Sep) has no slack built in; a slip at any stage pushes approval into October and closer to VAPT remediation.

---

## Open Questions

- [ ] What exactly is the soft launch testing? (usability / accuracy / landing-page / OTG comparison / career understanding / CIE quality — pick the primary objective) — **Owner:** Xian Zhang GUO — **By:** next BO sync
- [ ] Should the soft launch move earlier, and if so does it run before or after VAPT sign-off? — **Owner:** Product Team + Leadership — **By:** next BO sync
- [ ] What is the CIE evaluation methodology in a form the AI governance board will accept? — **Owner:** Victor ONG — **By:** before governance submission
- [ ] What is the one-line answer to "why do HR Alchemist and Career Compass infer competencies differently?" — **Owner:** She Hui TAN + Victor ONG — **By:** before agency comms go out
- [ ] Are Comet migration and WOGAAD login confirmed working for PSD and ESG users specifically? — **Owner:** Gek Khiang TAN + Engineering — **By:** before soft launch

---

## Blockers

1. **HRPS / Cumulus data access**
   - **Blocked by:** CV access delays, cloaking-service dependency, data-minimisation requirements, difficulty obtaining JD-CV mapping, slow upstream stakeholder responses.
   - **Impact:** Constrains the CIE evaluation dataset and JD/CV mapping work.
   - **Resolution:** Gek Khiang TAN chasing GovTech contacts for Cumulus and escalating HRPS if the bureaucratic blocker persists.

---

## Next Steps

**Immediate (this week):**
- Xian Zhang GUO to draft soft-launch learning objectives and success criteria.
- Gek Khiang TAN to chase Cumulus (GovTech) and HRPS data access.
- Assign real dates to all ten action items, anchored to the soft-launch window.

**Short-term (next 2 weeks):**
- Product team to bring a recommendation on soft-launch timing (earlier or as planned) to the next BO sync.
- Victor ONG's team to assemble the AI governance methodology evidence pack.
- She Hui TAN + Victor ONG to draft the HR Alchemist / Career Compass narrative.

**Follow-up meeting:**
- **Date:** Next bi-weekly OTEP Product x BO (Senior level)
- **Purpose:** Review soft-launch objectives, soft-launch timing decision, AI governance evidence readiness
- **Attendees:** Same group

---

## Context for Future Reference

- Confirmed MVP roadmap and critical path: [outputs/roadmaps/2026-09-01-W36-mvp-timeline-wbs-gantt.md](../roadmaps/2026-09-01-W36-mvp-timeline-wbs-gantt.md). Critical path runs through VAPT (POCDEX 2–6 Nov → sign-off ~7 Nov), not employment-lifecycle work.
- Related risk registers: [outputs/analyses/2026-09-03-W36-careercompass-project-risk-register.md](../analyses/2026-09-03-W36-careercompass-project-risk-register.md), [outputs/analyses/2026-09-03-W36-mvp-raid-consolidated.md](../analyses/2026-09-03-W36-mvp-raid-consolidated.md), [outputs/analyses/2026-09-03-W36-mvp-readiness-gates.md](../analyses/2026-09-03-W36-mvp-readiness-gates.md).
- Prior decision on competency recalculation: [outputs/decisions/2026-08-18-W34-competency-recalculation-on-profile-change.md](../decisions/2026-08-18-W34-competency-recalculation-on-profile-change.md).

**Reporting headline (for upward comms):** Delivery risk is reducing, but product adoption and validation risk remain under-explored. Watch four things over the next 6–8 weeks: real-user validation, AI methodology rigour, product narrative clarity, and agency understanding of what is launching.

---

## Suggested Follow-Ups

- The soft-launch objectives gap is a research-planning problem. Consider `/user-research-synthesis` framing or an interview-guide pass once objectives are set.
- The CIE / HR Alchemist narrative and the OTG transition messaging could be drafted with `/slack-message` or a short positioning note.
- Decisions 1–5 are governance-significant. Worth a `/decision-doc` entry for Decision 1 (proceed with AI governance clearance on current evidence) and Decision 4 (MVP-first, defer major redesigns) so the rationale is on record.
