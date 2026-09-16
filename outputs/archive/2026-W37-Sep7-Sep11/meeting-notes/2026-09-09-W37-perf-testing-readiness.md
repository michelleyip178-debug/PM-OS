---
title: Performance Testing Readiness
date: 2026-09-09
week: W37
type: Engineering / test planning
attendees: Michelle Yip (PM), Rama (test/infra lead), Adrian Ang (Product Lead), Ananda, Imelda (PM), Jobel (coordination, scope TBC), engineering
duration: ~20 min
---

# Performance Testing Readiness

**Date:** 9 September 2026 (W37)

**Type:** Engineering / performance-test planning

**Attendees:** Michelle Yip (PM), Rama (test/infra lead), Adrian Ang (Product Lead), Ananda, Imelda (PM), Jobel (coordination, scope TBC), engineering

**Note on names:** raw debrief spelled "GoDex" / "GreenJumpstart" (likely Careers@Gov and a jobs partner), "O-TAP web" (OTEP web / the mid-layer), "Jobel" and "Ananda" left as-is pending confirmation.

---

## Summary

The team set the shape of the first performance-testing round: baseline realistic-load testing first, stress and breakpoint testing later. Every modelled journey starts with login (100% of users), then branches into opportunities, my development, role recommendation, courses and profile competencies, with known UAT problem areas treated as the critical performance cases. Near-term plan: PMs finalise journey steps in one Confluence page by Thursday 2pm, scripting takes 2-3 days, a 5-10 user validation run on Friday, Monday held as buffer, external-facing tests start Tuesday. Two things are unresolved and gating: the technical approach (hit BFF/API endpoints vs k6 browser mode, and making sure the OTEP web mid-layer is actually loaded), and load-driver sizing so the runner is not itself the bottleneck. VAPT coordination is reactive and needs a real plan.

---

## Decisions Made

1. **Baseline load testing first, no stress tests on day 1**
   - **Why:** "Make sure that we succeed first, not test for failure." Prove the system passes realistic load before pushing to breakpoints.
   - **Who decided:** Rama, agreed in the room
   - **Impact:** Day 1 is a realistic-journey baseline run. Stress and breakpoint testing come in a later round.

2. **Every modelled journey starts with login (100% of users)**
   - **Why:** Login is the gate every officer passes through. Distribution across modules only applies after login.
   - **Who decided:** Michelle, agreed
   - **Impact:** Scripts model 100% login, then a percentage split into opportunities / my development / role recommendation / courses / profile competencies.

3. **Known UAT problem areas are the critical performance cases**
   - **Why:** "Those that we have been hitting problems, those will be your critical test cases." Role recommendation specifically has crashed before under concurrent load.
   - **Who decided:** Michelle, agreed
   - **Impact:** Role recommendation and other known-fragile flows get scripted and tested first, not last.

4. **Prioritise external dependencies before internal-only flows**
   - **Why:** External-facing flows (login, Careers@Gov / partner jobs redirects) involve outside stakeholders and comms. Internal-only flows can be rerun quietly without external impact.
   - **Who decided:** Agreed
   - **Impact:** Scripting order is external dependencies first, then high-risk internal flows. Internal searches and quieter flows can extend past the 3-day external window.

5. **Timeline and milestones**
   - **Why:** Work back from a Tuesday external-test start.
   - **Who decided:** Rama / Michelle, agreed
   - **Impact:**
     - Thu 11 Sep, 2pm: PMs finalise journey steps in Confluence (distributions can follow shortly after)
     - Thu-Sat: ~2-3 days of scripting
     - Fri 12 Sep: validation run with 5-10 virtual users to check scripts and measurement
     - Mon 15 Sep: buffer day, not a true day off
     - Tue 16 Sep: external-facing performance tests start
     - Endurance test runs once; if it fails, remediate internally and rerun

6. **One Confluence page, teams add their journeys below the main table**
   - **Why:** Avoid fragmenting the plan across pages. Rama consolidates.
   - **Who decided:** Agreed
   - **Impact:** Every team's journeys land on the same page; Rama combines into the master table.

7. **Michelle sends structured comms to the product groups**
   - **Why:** Product groups need to know what is being tested, when, and any expected impact.
   - **Who decided:** Michelle volunteered
   - **Impact:** Michelle owns the comms-out to product groups once the plan is set.

---

## Action Items

| # | Task | Owner | Due | Priority |
|---|---|---|---|---|
| 1 | Define detailed user journeys and steps in the single Confluence page, below the main table: login then my development, role/course recommendations, opportunities (search, pagination, filtering), profile page (add/edit competencies) | PMs: Michelle, Ananda, Imelda | Thu 11 Sep, 2pm | High |
| 2 | Label each journey and step with a priority (P0 external, P1 internal high-risk, etc.) so scripting knows the order | PMs (same) | Thu 11 Sep, 2pm | High |
| 3 | Propose load distributions per journey: % of users into opportunities / development / course search / etc., starting from 100% login | PMs (same) | With the steps, or shortly after | High |
| 4 | Decide the technical approach: hit BFF/API endpoints directly vs k6 browser mode, and confirm the OTEP web mid-layer (the aggregation point) is actually under load, not masked | Rama / engineering | Before scripting starts (Thu) | High |
| 5 | Size and validate the load driver: confirm runner capacity (CPU, memory, instances, concurrent sessions) so the load runner is not the bottleneck; confirm infra is ready before Friday | Rama / infra | Before Fri 12 Sep | High |
| 6 | Script the prioritised journeys in order: external dependencies (login, partner-jobs redirects) first, then high-risk internal flows (role recommendation) | Performance team / engineering | Thu-Sat; validation run Fri | High |
| 7 | Run the 5-10 virtual-user validation test to check script correctness and metrics | Performance team | Fri 12 Sep | High |
| 8 | Clarify Jobel's role: does she own the performance-testing schedule, or act as PM across performance + VAPT impacts? At minimum loop her into the performance-VAPT interaction | Michelle / Adrian | This week | Medium |
| 9 | Send comms to the product groups: what is being tested, when (Tue-Fri plus buffer), expected impact or constraints | Michelle | After the plan is set (this week) | Medium |
| 10 | Manage VAPT overlap: keep chasing interim VAPT reports and timeline clarity (target 25 Sep); with infra/security, agree a UAT rate-limit threshold that does not block or distort VAPT scanning or the performance load | Michelle / whoever owns VAPT liaison (confirm) | Ongoing; rate-limit number before testing | High |

**Notes:**
- Items 1-3 are on the PMs and due Thursday 2pm. They gate everything downstream.
- Items 4 and 5 are the two unresolved technical questions. Both need an owner-confirmed answer before scripting is efficient.
- Item 10 (VAPT) is currently "chase them" with no real plan. It needs structure.

---

## Key Insights

**Scripting is the bottleneck.**
- "The bottleneck is unfortunately the scripting part." If scripting runs late, the Tuesday external-test start slips. The current contingency is "push by one day", with no hard backstop if NCS or external stakeholders cannot shift. Per-module scripting ownership is not fully pinned down.

**The OTEP web mid-layer is the real load point, and testing only the API would mask it.**
- "We have the mid layer, the set of aggregation, that's the one that goes to the actual load. So we need to do the load on the OTEP web otherwise we are masking the [bottleneck]."
- Server-side rendering and JS-heavy front-end mean hitting BFF/API endpoints directly may not reproduce real latency. k6 browser mode is the alternative but costs more scripting effort and a bigger load driver. No decision yet.

**Role recommendation is the known failure mode.**
- "Your role recommendation, the moment everyone goes in, we have seen it crash before." This is the same concern as the [Architecture & Scalability Review](2026-09-09-W37-architecture-scalability-review.md) (tier-3 lateral, ~30k roles in the app tier). Scripting it first is the right call.

**The load runner can be the bottleneck.**
- "Your load runner is small, the bottleneck is a load runner." No sizing target was set (users per driver, max concurrent sessions, CPU/memory). Nobody is clearly assigned to confirm infra readiness before Friday.

**Jobel's scope is undefined.**
- "Her scope is a bit gray." Unclear whether she owns the perf-test schedule or is a cross-cutting PM for performance plus VAPT. Left unresolved.

---

## Open Questions

- [ ] BFF/API endpoints vs k6 browser mode, and how to load the OTEP web mid-layer without masking it? Owner: Rama / engineering. By: before scripting (Thu).
- [ ] What is the load-driver sizing target, and is the infra ready before Friday? Owner: Rama / infra. By: before Fri.
- [ ] What UAT rate-limit number lets both VAPT scanning and the performance load run without distortion? Owner: infra/security with Michelle. By: before testing.
- [ ] Does Jobel own the perf-test schedule or act as cross-cutting PM? Owner: Michelle / Adrian. By: this week.
- [ ] Who has chased VAPT, and what is the actual interim-report date (25 Sep is a target, not confirmed)? Owner: VAPT liaison.
- [ ] Per-module scripting ownership: who scripts which journey? Owner: Rama.

---

## Timeline Risks

- **TIMELINE RISK:** Scripting is called the bottleneck, the plan starts external tests Tuesday 16 Sep, and per-module scripting ownership is not assigned. If PMs miss the Thursday 2pm journey-steps deadline, or the endpoint-vs-browser decision (item 4) is not made before scripting, Tuesday slips with only a one-day informal buffer. MVP launch is 24-25 Nov 2026 and this sits in the compliance-and-go-live phase, so a multi-day slip compresses everything after it.
- **TIMELINE RISK:** The endpoint-vs-browser decision (item 4) and load-driver sizing (item 5) are both due "before Friday" but neither has a confirmed owner commitment. The Friday validation run cannot be meaningful if the approach and the driver size are still open.
- **TIMELINE RISK:** VAPT interim report targeted 25 Sep, unconfirmed. If it lands late with findings, remediation collides with the performance-test window and the launch runway. This is the same VAPT-scheduling risk noted in the [POCDEX perf/UAT sync](2026-09-09-W37-pocdex-performance-uat-sync.md) and it needs one owner.

---

## Next Steps

**This week:**
1. PMs (Michelle, Ananda, Imelda): journey steps + priorities + draft distributions into the Confluence page by Thu 2pm.
2. Rama / engineering: decide endpoint vs k6 browser and confirm the mid-layer is loaded (item 4).
3. Rama / infra: size the load driver and confirm infra readiness before Friday (item 5).
4. Michelle / Adrian: pin down Jobel's role.

**Friday:**
- 5-10 VU validation run against the scripted external flows.

**Monday:**
- Buffer. Finish scripting and fixes.

**Tuesday 16 Sep:**
- External-facing performance tests start.

**Follow-up:**
- Agree the UAT rate-limit number with infra/security before testing, so VAPT and perf load do not distort each other.

---

## Context for Future Reference

- This is the Compass-internal counterpart to the same-day [POCDEX Performance & UAT Sync](2026-09-09-W37-pocdex-performance-uat-sync.md) (cross-team) and the [Architecture & Scalability Review](2026-09-09-W37-architecture-scalability-review.md) (system deep-dive). The three form the perf-testing readiness track for MVP launch (24-25 Nov 2026).
- Role recommendation as the known crash point appears in all three. The mitigation (index fixes, competency-matching deep-dive, DB-side limiting) is owned in the Architecture & Scalability Review action list.
- "Login is 100%, then branch" is the journey model these performance scripts use; keep it consistent with the Compass end-to-end journeys Michelle owes POCDEX (POCDEX sync action item 1).
- VAPT / NCS timeline (target 25 Sep interim report) ties to the launch-checklist security-review gate. One owner should hold the VAPT liaison across all three meetings.
