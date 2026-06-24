---
date: 2026-06-23
meeting: OTEP Squad Sync — Launch Readiness
type: Programme sync
attendees: Adrian ANG, Jace TAN, Rama Moorthy, Pow Hwee TAN, Imelda MO, Michelle YIP (+ squad)
source: Executive assessment (post-meeting synthesis)
---

# Meeting Notes: OTEP Squad Sync — Launch Readiness

**Date:** Tuesday, 23 June 2026

**Attendees:** Adrian ANG, Jace TAN, Rama Moorthy, Pow Hwee TAN, Imelda MO, Michelle YIP (+ squad)

**Type:** Programme sync — launch readiness review

---

## Summary

The squad did a full launch readiness review. The headline finding: **the Oct go-live target is likely unachievable given VAPT timelines.** Business expectation is 6 agencies live before November; the actual delivery sequence (dev → UAT → VAPT + remediation → go-live approval) puts a realistic landing closer to November. This conflict is unresolved and needs to be escalated.

On the positive side, the team is now actively discussing UAT, VAPT, data approvals, and agency onboarding — months earlier than most programmes. A staggered UAT approach was agreed (test completed modules early rather than waiting for full dev completion). QA discipline is also improving with a new pre-demo gate.

---

## ⚠️ Timeline Risk — Escalation Needed

**Current target:** MVP go-live week of 19–23 Oct 2026 (from strategy docs)

**Delivery reality from this meeting:**
- Dev finishes late Aug / early Sep (S9 closes ~6 Sep based on current sprint cadence)
- UAT completes ~4 Sep (with staggered approach starting earlier)
- VAPT + remediation: up to 2 months after code freeze
- Go-live approval: only after VAPT is complete

**Gap:** Oct go-live requires VAPT to complete in ~3-4 weeks. Team assessments suggest 2 months is more realistic. Several participants effectively concluded **early October is unlikely; November is more realistic.**

**Business expectation:** 6 agencies live before November. Avoid December onboarding.

This conflict was surfaced but not resolved. It requires a direct conversation with Adrian and Jace before it becomes an unmanaged surprise.

---

## Decisions Made

| # | Decision | Owner |
|---|----------|-------|
| 1 | Reserve VAPT and remediation period after UAT and code freeze — VAPT occurs after UAT, code must be frozen, remediation time preserved | Programme |
| 2 | Adopt staggered UAT: earlier completed modules (Profile, Opportunities) enter UAT before full dev completes — don't wait for Sprint 8 | Rama |
| 3 | Two-stage UAT: early module-level UAT → later regression/overall UAT round | Programme |
| 4 | Stricter pre-demo QA gate: dev complete → QA → internal demo → stakeholder demo. No more defects surfacing live in sprint demos | Squad leads |
| 5 | Compass access will not be available before login — officers cannot browse before authenticating. Confirmed by Adrian ANG + Jace TAN | Adrian / Jace |

---

## Action Items

### Michelle's Actions

| Task | Due | Priority | Notes |
|------|-----|----------|-------|
| Generate UAT test cases from PRDs using AI | Before UAT starts (Aug) | Medium | Joint with Imelda MO — suggested by Adrian ANG. Use PRDs as source. |

### Programme Actions

| Task | Owner | Due | Notes |
|------|-------|-----|-------|
| Refine compressed UAT strategy | Rama Moorthy | This week | Explore recovering time; quantify what staggered approach gains |
| Add go-live approval phase after VAPT to timeline artefact | Imelda MO | This week | Timeline docs need updating |
| Explore required approvals post-VAPT | Rama + Jace TAN | Offline | What approvals gate go-live beyond VAPT? |
| Socialise MVP timeline with dependent teams | Product team | Before S5 | Learn, Projects, integration teams need to know the realistic window |
| Confirm E2E test scenarios | Product team + BOs | Before UAT | Needed to run UAT meaningfully |
| Define UAT test data requirements | Product + integration teams | Before UAT | Currently unresolved |
| Clarify QA → Done → BO UAT workflow | Squad leads | Before Aug UAT | Who signs off at each stage? |
| Prepare Data Office approval request | Rama Moorthy | ASAP | Bottleneck risk — start early |
| Review Data Office approval details with Pow Hwee TAN | Rama | This week | Pow Hwee flagged vendor env bottlenecks |
| Engage integration stakeholders earlier on timelines | Product team | This month | They don't know the current crunch |
| Plan OTG data extraction and clean-up timelines | Team | Before UAT | Unclear if prod data is ready for testing |
| Convene designers + engineers alignment session | Rama Moorthy | Next sprint | Design-system inconsistency is systemic, needs a root-cause fix |
| Investigate Storybook vs design system differences | Design + Engineering | Next sprint | Same recurring issue — needs a fix, not just acknowledgement |

---

## Open Questions

- [ ] **Who owns end-to-end launch readiness?** No single person was named accountable across UAT + VAPT + data + agency onboarding + comms + production validation. This gap needs to be filled explicitly. — **Raise with Rama / Adrian**
- [ ] **What is the realistic VAPT timeline?** The team said "up to 2 months" but didn't confirm with a vendor. Get a real estimate before adjusting the programme plan. — **Rama + Jace to clarify**
- [ ] **Agency onboarding assumptions — are they validated?** The meeting assumed agency data is available and clean. The same meeting flagged that some officers will have missing profile mappings. These are contradictory. — **Product team to assess**
- [ ] **What are the exit criteria for production verification?** "Soft launch," "golden transaction," "beta testing," and "production verification" were used interchangeably. Need a single definition of what this phase is, who's involved, and what done looks like. — **Rama + Michelle to define**
- [ ] **What does "profile survey / startup quiz" descoping look like to the business?** The team flagged this is unlikely for MVP. Business expectations may still include it. Needs proactive communication upstream. — **Michelle / Jace**

---

## Risks

### Explicitly flagged in the meeting

| Risk | Level | Notes |
|------|-------|-------|
| VAPT may push launch into November | 🔴 Red | Security testing + remediation likely consumes Sep–Oct. Oct go-live realistic only if VAPT takes ≤4 weeks. |
| UAT too short for defect remediation | 🔴 Red | Very little room for major fixes if bugs emerge during UAT. Staggered approach helps but doesn't solve this. |
| Vendor-managed environments create bottlenecks | 🟡 Amber | Data setup and test env changes require vendor involvement — lead times are long. |
| Data approvals may delay testing | 🟡 Amber | Data Office approval was raised repeatedly. Start this now. |
| Design inconsistency affects quality | 🟡 Amber | Recurring sprint demo findings. No root-cause fix identified. |

### Not adequately addressed (Michelle's read)

| Risk | Why it's a problem |
|------|-------------------|
| No end-to-end launch readiness owner | Discussed UAT + VAPT + data + onboarding + comms + production validation as separate streams. Nobody accountable for the critical path across all of them. |
| Agency onboarding assumptions are optimistic | Assumes clean data, available records, fast agency responses. Meeting itself surfaced missing profile mappings — this hasn't been fully assessed. |
| Production verification scope is unclear | Multiple terms used interchangeably with no clear definition of objective, participants, or exit criteria. |
| MVP scope pressure is re-emerging | Profiling survey / startup quiz unlikely for MVP. Business may not know this yet. |

---

## What Went Well

- Team is proactively surfacing launch dependencies months before go-live — UAT, VAPT, data approvals, agency comms all in scope now
- Staggered UAT approach identified — can potentially recover schedule by testing completed modules early
- Pow Hwee TAN repeatedly challenged test data, integration readiness, and dependency management — the right risks surfaced early
- Squad acknowledged QA quality issues from sprint demos honestly and agreed a corrective process

---

## Strategic Alignment Note

The Oct 19-23 go-live target in the weekly plan and strategy docs is now directly challenged by this meeting's findings. Before this becomes a programme-level surprise, Michelle should surface the VAPT timeline gap with Jace at the Thu 8:45 check-in — frame it as: "Based on what the squad discussed Tuesday, a November landing looks more realistic. Do you want to socialise this with Adrian before it surfaces at SteerCo?"

---

## Related Files

- [W26 Weekly Plan](../weekly-plans/2026-W26-weekly-plan.md) — Oct go-live target
- [Sprint Status](../../../PM-skills-ALL-1/00-hub/sprint-status.md) — current S4 state
- [Cleanup — Mon 22 + Tue 23 Jun](cleanup-2026-06-22-23.md) — covers other meetings this week

---

*Processed: 2026-06-24*
*Source: Executive assessment from Squad Sync, 23 Jun 2026, 09:30*
*Next: Raise VAPT timeline gap with Jace at Thu 8:45 check-in. Clarify launch readiness ownership with Rama.*
