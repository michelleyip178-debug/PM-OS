---
date: 2026-09-21
week: 2026-W39
type: meeting-notes
meeting_type: Engineering walk-through — performance/load test results
attendees: Ram, Rathika, Imelda, Pei Ern, Adrian Low
topic: OTEP Performance Testing - Walk-through (2:00pm)
source: Otter.ai transcript
---

# Meeting Notes: OTEP Performance Testing Walk-Through

**Date:** 2026-09-21, 2:00pm

**Attendees:** Ram, Rathika, Imelda, Pei Ern, Adrian Low

**Type:** Engineering walk-through of load/stress/endurance test results

**Source:** [Otter.ai transcript](https://otter.ai/u/BGgyry64I1SiYBcY6iX3gHpzyC4?view=summary), 17 min

---

## Bottom Line

Platform is stable under normal and moderate load, but breaks at ~1,200 concurrent users on two endpoints — **course autocomplete/suggestion** and **CV/CAE generation + resume upload**. Both ruled **must-fix before go-live**, not tech debt.

---

## What Went Well

- Load test (100 VUs, 15 min) and endurance test (100 VUs, 8 hrs) both passed with no anomalies — covers expected normal daily traffic.
- Stress test at 700 VUs over 30 min passed cleanly, as did Breakpoint 1 at 1,000 users.
- Resume upload latency stayed within the <3 second pass criterion even under heavy traffic — only generation blew past it.
- Search (explore) was already optimized in prior work — failures concentrate on autocomplete, which was never optimized.
- Testing was diagnostic, not just pass/fail — team deliberately escalated load to find the break point and traced errors to root-cause endpoints rather than reporting surface-level 500s.

## What Didn't

| Scenario | Result |
|---|---|
| Breakpoint 2 — 1,200 users | Errors appear: CAE generation, course suggestion, upload resume |
| Breakpoint 3 — 1,500 users | Same endpoints fail, cascading into multiple 500 gateway errors |
| Course search latency | 7.5 sec at BP2 → 13.8 sec at BP3 |
| CAE generation, heavy traffic | ~3 minutes |
| CAE generation, *normal* load | 30.5 sec at P95 |

**Two things worse than they first appear:**

- **CAE generation already fails the bar under normal traffic, not just stress.** 30.5 sec P95 on the plain load test means this isn't a scale problem, it's a baseline problem. Imelda: "30 seconds is long."
- **The DB is already provisioned high-spec.** Rathika: "our DB spec is like already very high RAM" — the 1,200-user ceiling can't be solved by buying more hardware. The fix has to be in the query layer.

**Also notable: the 1,200-user threshold is realistically reachable.** Course search is ~6% of user flows, so 1,200 concurrent users = ~72 simultaneous searches. Imelda judged that plausible against ~5,000 onboarded users, especially during agency onboarding or road shows, since the site has only a few key flows and search is one of them.

---

## Decisions Made

1. **Course search optimization is ASAP, not tech debt — must ship before go-live.** Ram pressed explicitly, Rathika confirmed.
2. **Target: clean operation at 1,200 users with no errors.**
3. **Two specific fixes approved:** optimize the autocomplete query; move DB query execution off the OTEP server into the database itself to cut CPU utilization.
4. **Adrian Low assigned to the course search work.**
5. **Autocomplete, not explore/search, confirmed as the primary bottleneck.**
6. **CAE remains with the CAE team; OTEP's role is to rerun and verify post-deploy.**
7. **Pass criteria will follow Victor's SLA recommendation**, not the current 7-second assumption.

---

## Risks Not Being Addressed

- 🔴 **No agreed SLA/pass criteria for CAE generation.** Ram noted Victor would propose one if 7 sec is unachievable (maybe 10-15 sec), but nothing settled. Without it, "is the fix good enough?" is unanswerable after the rerun.
- 🔴 **Third-party blast radius unresolved.** Rathika flagged that rerunning breakpoint tests at 1 and 2 may impact external systems like Jump Start — raised, never resolved or assigned.
- 🔴 **CAE fix is owned outside this room, unscheduled.** Both CAE initiatives (moving SKS off the OTEP server, re-ranker timeout) are CAE team WIP with no committed deploy date. All OTEP verification is blocked behind it.
- 🟠 **Re-ranker timeout trades correctness for latency, undiscussed.** Returning "whatever ranking exists at 10 seconds" means degraded result quality under load — nobody asked if that's acceptable to users or how often it triggers.
- 🟠 **No test above 1,500 users, no recovery testing.** Once the system collapses into 500s, there's no data on whether it self-recovers or needs intervention.
- 🟡 **Minor methodology wobble, likely resolved.** Pei Ern initially believed the script fired autocomplete on 1-2 character inputs (would inflate load beyond the UI's 3-char minimum). Confirmed in-meeting the script skips sub-3-character inputs — results look valid, but warrants written confirmation.
- 🟡 **Meeting ended mid-analysis.** Ram cut the course-search discussion short, moved it to a smaller follow-up — root cause on autocomplete not yet fully established.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Optimize autocomplete query + move DB execution to the DB; hit 1,200 users clean before go-live | Adrian Low | Not specified — before go-live | 🔴 High | Not Started |
| Sync with Benjamin; rerun load test on the specified pod once CAE deploys its fixes, verify latency improvement | Rathika | Not specified — contingent on CAE team's unscheduled deploy | 🔴 High | Not Started |
| Sync with leads and pull Adrian Low into the course search work | Rathika | Not specified | 🟡 Medium | Not Started |
| Confirm in writing that the test script only fires autocomplete at ≥3 characters | Pei Ern | Not specified | 🟢 Low | Not Started |
| Immediate follow-up deep-dive on course search root cause | Ram, Rathika, Pei Ern, Adrian | Not specified | 🔴 High | Not Started |
| Obtain SLA recommendation to set CAE pass criteria | Ram → Victor | Not specified | 🔴 High — blocks knowing if the rerun passes | Not Started |
| Assess Jump Start/third-party impact of breakpoint reruns | **Unassigned** | Not specified | 🟠 Medium-High, unowned | Not Started |

---

## Timeline Risks

**TIMELINE RISK: "Before go-live" has no date attached, and the CAE fix this depends on is owned by a team with no committed deploy date.** Course search optimization was explicitly ruled must-fix before go-live, but neither the autocomplete fix nor the CAE rerun-and-verify cycle has a target date. If MVP go-live is the 24-25 Nov gate tracked elsewhere in R1 planning, this needs a date attached now, not left as "ASAP."

**TIMELINE RISK: The Jump Start third-party impact assessment is both unowned and a prerequisite to rerunning tests.** Rathika's action item to rerun breakpoint tests depends on knowing whether that rerun will affect Jump Start — but nobody owns answering that question first.

---

## Connections to This Week's Threads

- **MVP launch gate (24-25 Nov):** this is real go-live readiness data. Two must-fix items (autocomplete, CAE generation) currently have no committed dates, and one of them (CAE) is blocked on a team outside this room's control. Worth checking this against whatever gate-readiness tracking exists for MVP launch.
- **Distinct from R-04 (risk register):** R-04 covers R1's ZIP export timeout — a different feature, different release. Don't conflate the two "performance" risks.
- **Distinct from the VAPT ownership gap (weekly plan Priority 3):** VAPT is security triage ownership; this is load/performance testing. Both are open-ownership problems this week, but different domains — worth keeping them as separate tracked items, not merging into one "performance/security" bucket.
- **Not yet in the risk register.** This debrief surfaces at least two 🔴 items (no CAE SLA, CAE fix unscheduled and outside OTEP's control) that read as genuine go-live risks and aren't currently tracked anywhere formal.

---

## Next Steps

**Immediate:**
- Get a real date on "before go-live" for the autocomplete fix and the CAE rerun cycle — tie both explicitly to the MVP launch gate timeline.
- Name an owner for the Jump Start/third-party impact assessment before Rathika's rerun action item can proceed.
- Push for Victor's SLA recommendation on CAE generation soon — without it, the rerun has no pass/fail criteria.

---

*Related: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-04, separate performance risk), [Weekly Plan — Priority 3, VAPT ownership](../weekly-plans/2026-W39-weekly-plan.md)*
