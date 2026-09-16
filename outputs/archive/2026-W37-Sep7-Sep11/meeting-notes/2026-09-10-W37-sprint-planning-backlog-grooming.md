---
title: "Meeting Notes — [Weekly] OTEP Sprint Planning / Backlog Grooming"
date: 2026-09-10
week: 2026-W37
type: Sprint planning / grooming
attendees: Michelle Yip, Rama Moorthy, Jace Tan, Imelda Mo, Adrian Lo, engineering
duration: ~2h (14:00–16:00)
related:
  - outputs/analyses/2026-09-10-W37-employment-profile-brd-analysis.md
  - outputs/decisions/2026-09-10-W37-decision-employment-lifecycle-r1-scope.md
  - outputs/meeting-notes/2026-09-09-W37-architecture-scalability-review.md
  - outputs/meeting-notes/cleanup-2026-09-09-W37.md
  - OTEP-1487 (hidden competency exclusion), OTEP-1475 (perf optimisation), OTEP-1523/1531
---

# Meeting Notes — OTEP Sprint Planning / Backlog Grooming

## Summary

Covered performance/load testing, sprint priorities, employment profile change work, and the double-hatting officer design. The load-test baseline was corrected in the room after Michelle presented real OTG analytics — the team had been sizing off ~600 concurrent users derived from MAU, and the revised figure is closer to ~40. Sprint sequencing (VAPT → perf testing → employment profile change) had no disagreement. The two most important conversations — the double-hatting product model and the VAPT contingency plan — ended without decisions.

**Biggest takeaway:** the delivery risk right now is coordination and late decision-making, not implementation. VAPT, load testing, and identity/employment-profile work are all converging on the same weeks, and several threads closed with "we'll revisit" rather than a call.

---

## Decisions Made

1. **Revise the performance-testing baseline using real OTG analytics.**
   - **Why:** the original ~600-concurrent-user baseline was derived from MAU, mixed the 6 pilot agencies with WoG assumptions, and multiple participants had low confidence in it. Michelle's OTG DAU/peak figures put realistic concurrency far lower (~40).
   - **Who:** Rama, after Michelle presented the data. Rama: *"I take this as a base reference."*
   - **Impact:** avoids oversizing infrastructure and load tests. Rama re-derives the baseline and circulates by email.

2. **Sprint priority order: VAPT → performance testing & optimisation → employment profile change.**
   - **Why:** VAPT is the launch-critical path; perf testing is the 16 Sep gate; employment profile change (FIN→NRIC transition, Malaysian ID handling, identity work) is the next-largest workstream. No disagreement on sequencing.
   - **Who:** team consensus.
   - **Impact:** engineering focus for the sprint.

3. **Employment profile change work continues** (FIN→NRIC, Malaysian ID, identity resolution). Imelda to finalise requirements.
   - **Why:** it's Priority 3 and the requirements doc (BRD v9) is still an alignment draft.
   - **Impact:** Imelda owns closing the open requirements before it can be groomed to stories.

**Planned (not decisions, scheduled):**
- Performance testing: next Tuesday (15 Sep).
- External-dependency load testing: the following week.

---

## Open / Unresolved

| Item | State | Next step |
|---|---|---|
| **Endurance-test duration** | Open disagreement. Rama: 2–4h is enough (leaks manifest fast, 12h isn't realistic usage). Jace: prior experience says longer; wants evidence before cutting; worried degradation only shows over prolonged runs. Jace did **not** agree to 2–4h. | Rama sends justification by email; Jace to respond. Not closed. |
| **Single-character search performance** | No decision. Role-recommendation search runs on 1-char input against the entire role catalogue + competency matching against all roles. Engineering believes it's a real perf drag. Proposed fix: 3-char minimum. | Engineering produces analysis + impact + recommendation. (This is Michelle's `3-char search minimum` action from the W37 cleanup — now has an eng owner for the analysis, still needs the product/business call on 1–2 char behaviour.) |
| **Double-hatting officer experience — product model** | No end-state decision. Option A (one consolidated profile) vs Option B (separate role-specific experiences / toggle). Team converging on implementation before agreeing product principles. | Needs a product-principles decision before design or build. See below. |
| **VAPT contingency plan** | Acknowledged as a risk, nothing agreed. No contingency plan, no resource-allocation model, no severity-based response model. | Michelle raised the Plan A / Plan B need — no owner assigned. |
| **Sprint board completeness** | Tickets for perf-testing work not yet on the board; team relying on Adrian to create them and checking after the fact. | Adrian Lo to get perf-testing tickets onto the board. |

---

## Double-Hatting — the product questions to resolve

The most strategically important conversation, and it stayed unresolved. Imelda kept pushing the UX implication rather than the system mechanics — key challenge: **if the profile is consolidated, why do recommendation behaviours change depending on ring-fencing rules?** That exposes a confusing experience.

These are **product decisions, not technical ones**, and they need answering before design:

- What is the officer's mental model — is the profile **person-centric or role-centric**?
- Should recommendations be **identity-based or appointment-based**?
- How should ring-fencing behave when the two positions are **different grades**?
- One consolidated profile (Option A) or separate role-specific experiences / a toggle (Option B)?

**Connection to today's decision doc:** the [employment-lifecycle decision doc](../decisions/2026-09-10-W37-decision-employment-lifecycle-r1-scope.md) recommends **deferring double-hatting (scenario groups E and F) to R1.x** precisely because the recommendation logic and 2-grade ring-fencing are undesigned, and it multiplies the 9 Sep perf-test matching risk. This meeting confirms that call — the team is generating edge cases without a principle. Recommendation: take the four questions above as a scoped decision (person-centric vs role-centric is the root one) rather than continuing to design against them.

---

## Key Insights

**The perf-testing design ran ahead of the data confidence.**
Baseline built from MAU, DAU derived live in the meeting, multiple people questioning the numbers. The test strategy (journeys, think-time, 95%-under-2s, baseline/stress/breakpoint) is further along than the business inputs that should anchor it.

**The revised baseline may now be testing the wrong scenario.**
The conversation moved from ~600 → ~40 concurrent users on average-usage logic. But the real OTG production incidents cited were **event-driven**: roadshows, campaigns, login surges. The meeting acknowledged a past OTG incident at ~600–700 concurrent logins during a BCA roadshow. If the test targets ~40 steady-state, **the system can pass load testing and still be untested against its actual risk — a campaign spike.** Michelle's analytics correctly deflated the steady-state number; the spike scenario still needs its own explicit target.

**Sprint governance is verbal, not traceable.**
Priorities are aligned in conversation but not all reflected in tickets. Dependency tracking is verbal confirmation. This is the same "coordination, not implementation" risk pattern flagged in the 9 Sep cleanup.

**Michelle's OTG analytics materially shifted the room.**
Rather than defend the estimate, Rama accepted the evidence and agreed to re-baseline. This is the same intervention pattern as the CSC alignment work — bring the real number, don't accept the assumed one.

---

## Action Items

| Task | Owner | Due | Priority | Status |
|---|---|---|---|---|
| Recalculate load-test baselines using corrected OTG analytics | Rama Moorthy | Before 15 Sep perf test | 🔴 | Not started |
| Circulate updated performance-testing assumptions by email | Rama Moorthy | This week | 🔴 | Not started |
| Include endurance-test duration justification in the same email | Rama Moorthy | This week | 🟡 | Not started |
| Produce analysis + impact + recommendation on the 1-char search performance problem | Rama Moorthy / engineering | Before perf test | 🔴 | Not started |
| Get performance-testing tickets onto the sprint board | Rama Moorthy | This week — before 15 Sep | 🔴 | Not started |
| Finalise employment profile change requirements (close the BRD v9 open questions) | Rama Moorthy | Before those stories are groomed | 🔴 | Not started |
| Provide revised OTG DAU/peak analytics for perf sizing | Michelle Yip | — | — | ✅ Done in meeting |
| Prepare environment + scripts for upcoming load testing | Rama Moorthy | Before 15 Sep | 🔴 | Not started |
| Confirm the updated performance-testing approach via email | Rama Moorthy | This week | 🟡 | Not started |
| **[Add]** Define the explicit campaign-spike load target (separate from steady-state ~40) | Rama Moorthy | Before test scripts finalised | 🔴 | Not started |
| **[Add]** Name an owner + date for the VAPT Plan A / Plan B contingency (severity-based response + resource model) | Rama Moorthy | This week | 🔴 | Not started |
| **[Add]** Decide the double-hatting product model (person-centric vs role-centric; identity- vs appointment-based recommendations) — via the employment-lifecycle decision doc | Rama Moorthy | Before R1 grooming | 🔴 | Not started |

---

## Timeline Risks

- **TIMELINE RISK — perf-test baseline lands the same week as the test.** Rama re-baselines "before 15 Sep," the test runs 15 Sep, and scripts/environment prep also has to happen before then. If the re-baseline or the campaign-spike target slips even a day, the 15 Sep run either uses unreviewed numbers or moves. This compounds Rama's 6-interdependent-item overload flagged on 9 Sep. Confirm with Rama today whether 15 Sep is still real.
- **TIMELINE RISK — endurance-test duration is unresolved with the test days away.** Rama's email and Jace's response both need to land before scripts are finalised. If Jace holds for 12h and Rama has planned for 2–4h, the test schedule changes.
- **TIMELINE RISK — VAPT contingency has no owner and findings are expected ~25 Sep.** Everyone agrees VAPT will disrupt the sprint; nobody owns the plan for it. If findings arrive before a contingency model exists, the sprint gets reshuffled reactively.
- **TIMELINE RISK — employment profile change is Priority 3 but its requirements (BRD v9) are still an alignment draft with ~20 open questions.** "Continue the work" and "finalise requirements" are both on the list; the second gates the first from becoming groomed stories. Imelda's requirements-close needs a date.

---

## Next Steps

**Immediate (this week):**
1. Rama: confirm whether 15 Sep perf test is still real given the re-baseline + campaign-spike target + script prep all landing this week.
2. Rama: name an owner and date for the VAPT Plan A/Plan B contingency (severity-based response + resource model).
3. Rama: circulate the re-baselined perf assumptions + endurance justification + search-perf recommendation by email; team confirms the approach.
4. Rama: perf-testing tickets onto the board.
5. Rama: at the 17:00 perf-test readiness review, raise the campaign-spike gap explicitly — the revised ~40 steady-state number must not become the only target given the OTG roadshow incident history.

**Before R1 grooming:**
- Rama: resolve the double-hatting product model (person-centric vs role-centric is the root question) via the employment-lifecycle decision doc. Confirm double-hatting stays deferred to R1.x.
- Rama: close the BRD v9 open requirements; set a date.

**Follow-up:**
- Endurance-test duration: resolve async on Rama's email thread — needs Jace's explicit response, not silence.

---

## Context for Future Reference

- **The 600-user number originated** from MAU-derived math mixing the 6 pilot agencies with WoG. It's now retired as a baseline. The correction happened because Michelle brought real OTG analytics to the room — the same "bring the number, don't accept the assumption" pattern that's worked before.
- **The campaign-spike risk is real and documented:** OTG had an incident at ~600–700 concurrent logins during a BCA roadshow. Whatever the steady-state baseline lands at, the spike scenario needs its own target or the test under-covers the actual failure mode.
- **Double-hatting** is scenario groups E/F in the [employment-profile BRD](../analyses/2026-09-10-W37-employment-profile-brd-analysis.md) and is recommended for R1.x deferral in the [decision doc](../decisions/2026-09-10-W37-decision-employment-lifecycle-r1-scope.md). This meeting is evidence the team can't design it yet — no agreed product principle.
- **RAID candidates from this meeting** (Michelle's read, for SteerCo): (1) double-hatting design — no product decision, (2) VAPT capacity planning — no contingency, (3) load-test baseline validation — corrected but campaign-spike target still open.

---

## Appendix: Raw Notes

<details>
<summary>Reviewer's structured pre-read (from the transcript review)</summary>

Four areas: performance/load testing, sprint planning, employment profile change, double-hatting design.

**Performance testing:** Rama walked through strategy — granular user-journey actions, think-time, 95% of requests <2s, baseline/stress/breakpoint scenarios, original ~600 concurrent-user baseline. Michelle challenged: numbers seemed wrong, prior metrics likely inaccurate, OTG analytics show lower usage, 6 pilot agencies conflated with WoG. Shared revised OTG metrics + DAU in chat. Rama: "I take this as a base reference," agreed to revise. Weaknesses: baseline from MAU not concurrent usage; DAU derived in-meeting; low team confidence. Hidden risk: focus on average usage / DAU / concurrent users, but real incidents were event spikes / roadshows / campaign login surges. Acknowledged past OTG incident ~600–700 concurrent logins at a BCA roadshow. Revised baseline discussion moved toward ~40 concurrent. Blind spot: may pass load testing while under-testing campaign spikes.

**Endurance testing:** open disagreement. Rama — 2–4h sufficient, leaks manifest fast, 12h unrealistic. Jace — prior experience says longer, unsure 2h is enough, wants evidence before reducing, worried about prolonged-run degradation. Not closed; Jace didn't explicitly agree. Rama to send justification by email.

**Sprint planning:** priorities aligned — P1 VAPT findings, P2 perf testing & optimisation, P3 employment profile change (FIN→NRIC transition, Malaysian ID handling, identity work). No disagreement on sequencing. Visibility gaps: tickets not yet visible, reliance on Adrian to create tickets, team checking whether work exists after the fact, board may not reflect commitments.

**VAPT readiness:** team expects VAPT highly disruptive once findings arrive. Michelle raised needing Plan A and Plan B before results. Nothing agreed — no contingency plan, no resource-allocation model, no severity-based response model.

**Search optimisation:** role-recommendation search allows 1-char input, executes against entire role catalogue, competency matching against all roles. Engineering believes this causes perf pressure. Possible mitigation: 3-char minimum. No decision. Engineering to produce analysis + impact + recommendation.

**Double-hatting officer discussion:** core question — Option A one consolidated profile vs Option B separate role-specific experiences / toggle. Imelda repeatedly tested UX implications; key challenge — if profile consolidated, why do recommendation behaviours change with ring-fencing rules? Exposed confusing UX. No end-state product decision. Generated approaches, edge cases, conflicting UX interpretations, no resolution. Team converging on implementation before agreeing product principles. Unresolved: officer mental model? person-centric or role-centric? recommendations identity-based or appointment-based? ring-fencing when grades differ? These are product decisions, not technical.

**Confirmed decisions:** revise perf baseline w/ updated OTG analytics ✅; Rama update model + circulate by email ✅; VAPT findings remain priority ✅; perf testing next Tuesday (planned); external-dependency load testing following week (planned); employment profile change continues ✅; search perf ⚠ not decided; endurance duration ⚠ open; double-hatting design ⚠ open.

**Action items (as captured):** Rama — recalc load-test baselines w/ corrected OTG analytics; circulate updated assumptions by email; include endurance justification in email; share recommendations on 1-char search problem. Adrian Lo — ensure perf-testing tickets on sprint board. Imelda Mo — finalise employment profile change requirements. Michelle Yip — provide revised OTG DAU/peak analytics (done in meeting). Engineering — prepare environment + scripts for load testing. Team — confirm updated perf-testing approach via email.

**Reviewer's biggest unaddressed risks:** (1) perf test optimised around average usage not campaign spikes; (2) no concrete VAPT response plan despite expected disruption; (3) dual-agency officer experience lacks product-level end-state decision; (4) open technical disagreement on endurance criteria; (5) sprint commitments verbally aligned but not traceable through tickets. RAID candidates most likely to affect MVP delivery: dual-hatting design, VAPT capacity planning, load-test baseline validation.

</details>
