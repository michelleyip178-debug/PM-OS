# Meeting Notes: Slack Recap — POCDEX/Compass Alignment (psd-pdo-otep-int, 25 Aug)

**Date:** 26 Aug 2026 (recap of Slack activity from 25 Aug)

**Channel:** psd-pdo-otep-int

**Key participants:** Adrian ANG (PSD), Michelle YIP (PSD, you), Imelda MO (PSD), Jace TAN (PSD), Pow Hwee TAN (PSD), Benjamin AW (GOVTECH), Victor ONG (GOVTECH), Rama MOORTHY (PSD), Gek Khiang (GK)

**Meeting Type:** Async Slack thread recap, not a live meeting

**Note on source:** This channel thread runs in parallel to the same day's [POCDEX timeline sync](2026-08-25-W35-pocdex-timeline-sync.md) meeting. Some content overlaps; where dates differ, both are flagged below rather than silently reconciled.

---

## Summary

Three threads from 25 Aug: a morning scheduling clash, the main POCDEX/Compass alignment thread (Day 2 employment data changes, VAPT sequencing), and a separate heads-up on a tight pre-VAPT remediation window. You're now on the hook to scope POCDEX Day-2 test cases with Imelda MO by 28 Aug — same underlying "last modified date" question flagged as unresolved in yesterday's timeline sync meeting.

---

## Decisions Made

1. **Decouple 5 Compass-related POCDEX API endpoints so NCS can VAPT them concurrently with Compass's VAPT**
   - **Why:** Lets POCDEX and Compass run VAPT in parallel instead of serially, protecting the shared timeline
   - **Who decided:** Thread consensus (Adrian ANG driving)
   - **Impact:** VAPT for these 5 endpoints starts 7 Sep alongside Compass's

2. **Performance testing will use the initial launch window in a production-like environment; fallback is Compass Production calling POCDEX UAT**
   - **Why:** No production-like environment confirmed as ready yet
   - **Who decided:** Thread consensus
   - **Impact:** Performance test approach still has a fallback path if the primary environment isn't ready in time

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Scope POCDEX Day 2 test cases (employment data changes) | @Michelle YIP + @Imelda MO | 28 Aug | High | 🔴 Not Started |
| Evaluate whether to use "last modified date" for key Day 2 test cases | Compass team | Feeds into 28 Aug scoping | High | 🔴 Not Started |
| Update Gek Khiang on VAPT decoupling schedule | DO/ITC team | 27 Aug, 11:59pm | High | 🔴 Not Started |
| Project which POCDEX components can start VAPT and when (for NCS planning) | @Pow Hwee TAN | Friday (28 Aug) | High | 🔴 Not Started |
| Confirm what VAPT tool NCS uses | @Jace TAN | Tomorrow (27 Aug, per thread) | Medium | 🔴 Not Started |
| Fix flagged issues ahead of Compass CIE pre-VAPT scan | Compass/CIE team | 31 Aug – 4 Sep window | High | 🔴 Not Started |

**Notes:**
- Your action (Day 2 test case scoping with Imelda) is blocking on the same "last modified date" business decision still open from yesterday's timeline sync — see Open Questions below.
- The 31 Aug–4 Sep fix window is only 5 days and sits immediately before 7 Sep VAPT start; treat as tight.

---

## Key Insights & Quotes

**Scheduling:**
- Barry, Jace, and Adrian ANG tied up until 10am; GK unavailable at 3:30pm, 1–2pm suggested instead.

**Technical/Scope Clarification:**
- Jace TAN questioned whether POCDEX needs full VAPT before Compass can go live, since the platform/API/cloud environment is net new.
- Pow Hwee TAN's clarification is the key nuance for NCS: *"the API/env aren't for Compass alone — POCDEX will meet the agreed timeline as an interfacing party, but may run at a different pace than Compass (possibly slower on infra setup, faster on remediation)."* She asked that this be conveyed to NCS directly — worth confirming this framing actually reaches NCS, since it changes how they'd plan resourcing.

---

## Open Questions

- [ ] What tool does NCS use for VAPT? - **Owner:** @Jace TAN - **By:** 27 Aug (tomorrow, per thread)
- [ ] Which POCDEX components can start VAPT, and when? - **Owner:** @Pow Hwee TAN - **By:** Friday (28 Aug)
- [ ] Should "last modified date" be used for Day 2 employment data test cases? - **Owner:** Compass team - **By:** Unclear — needed before your 28 Aug scoping deadline

---

## Timeline Risks

- **TIMELINE RISK:** This thread states the Day 2 employment data changes target "production-ready by 9 Nov," matching the [25 Aug timeline sync](2026-08-25-W35-pocdex-timeline-sync.md)'s VAPT sign-off date of ~7 Nov and 24-25 Nov launch — consistent, not conflicting, but worth confirming `open-items.md` #39 has actually been updated to these dates rather than the older "week of 2 Nov" framing, since that reconciliation was flagged as outstanding yesterday.
- **TIMELINE RISK:** Your Day 2 test case scoping is due 28 Aug, but depends on Compass deciding the "last modified date" business rule — the same open item the timeline sync meeting flagged as still unowned. If Compass doesn't resolve it before 28 Aug, your scoping deadline is at risk of slipping through no fault of your own. Worth flagging to Adrian ANG now rather than at the 28 Aug deadline.
- **TIMELINE RISK:** The pre-VAPT fix window (31 Aug–4 Sep) is only 5 days, directly ahead of the 7 Sep VAPT start with no buffer. If the CIE pre-VAPT scan surfaces significant issues, there's no slack before VAPT begins.

---

## Blockers

1. **"Last modified date" business decision still unresolved**
   - **Blocked by:** Compass team hasn't defined the business rule (same gap named in yesterday's timeline sync as the single biggest programme risk)
   - **Impact:** Blocks your 28 Aug Day 2 test case scoping with Imelda MO
   - **Resolution:** Escalate directly to Compass/Adrian ANG if not resolved in the next day or two — don't wait until the 28th to find out it's still open

---

## Next Steps

**Immediate (before 28 Aug):**
- Scope POCDEX Day 2 test cases with Imelda MO
- Check whether Compass has resolved the "last modified date" business rule — if not, flag the dependency now

**This week:**
- DO/ITC updates GK on VAPT decoupling schedule (by 27 Aug 11:59pm)
- Jace TAN confirms NCS's VAPT tool (by 27 Aug)
- Pow Hwee TAN projects POCDEX VAPT component timing for NCS (by 28 Aug)
- Compass/CIE team fixes flagged issues (31 Aug–4 Sep window)

---

## Context for Future Reference

**Relates to:**
- [25 Aug POCDEX timeline sync](2026-08-25-W35-pocdex-timeline-sync.md) — same "last modified date" open question, same VAPT sequencing discussion, same 7 Nov / 24-25 Nov dates. This Slack thread is the async continuation of that meeting's unresolved items.
- [25 Aug programme coordination meeting](2026-08-25-W35-programme-coordination-uat-vapt-cutover.md) — VAPT governance across Compass Core, Intel/CIE, and POCDEX API streams; this thread's endpoint-decoupling plan is the POCDEX-specific execution detail for that broader governance picture.

**Pattern worth naming:** This is now the third document in two days naming the "last modified date" business rule as unresolved and blocking downstream work — yesterday's timeline sync, and now your own 28 Aug test-case scoping deadline. Worth raising directly rather than waiting for it to resolve on its own.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw Slack recap</summary>

Slack 26 Aug — recap of Aug 25 activity in psd-pdo-otep-int:

**Morning scheduling:** Adrian ANG flagged a scheduling clash — Barry, Jace and he were tied up until 10am; GK couldn't make 3:30pm, suggested 1–2pm instead.

**Main thread — POCDEX/Compass alignment:**
- Day 2 officer employment data changes: Compass team to evaluate whether to use "last modified date" for key test cases, target production-ready by 9 Nov. Compass PM to scope test cases by 28 Aug, with Michelle YIP asked to own this alongside Imelda MO, since she did the Day 2 findings.
- POCDEX API VAPT: Plan to decouple the 5 Compass-related API endpoints so NCS can run VAPT concurrently with Compass's, starting 7 Sep. Goal: sign-off and production deploy by 9 Nov. DO/ITC team to update Gek Khiang on schedule by 27 Aug, 11:59pm.
- Performance testing: Aim to use the initial launch window to test in a production-like environment; fallback is Compass Production calling POCDEX UAT.
- Follow-up discussion: Jace TAN questioned whether POCDEX needs the full VAPT before Compass can go live, since the platform/API/cloud env is net new. Pow Hwee TAN clarified the API/env aren't for Compass alone — POCDEX will meet the agreed timeline as an interfacing party, but may run at a different pace than Compass (possibly slower on infra setup, faster on remediation). She asked that this nuance be conveyed to NCS.
- Adrian ANG asked Pow Hwee TAN to project by Friday which POCDEX components can start VAPT and when, for NCS's planning — Pow Hwee TAN said she'd handle relaying NCS's needs directly.
- Latest message: Pow Hwee TAN asked Jace TAN to confirm what tool NCS uses, for tomorrow.

**Separate message:** Adrian ANG flagged to Benjamin AW (cc Victor ONG, Rama MOORTHY) that the window to fix flagged issues before the Compass CIE pre-VAPT scan is only 31 Aug–4 Sep, ahead of VAPT starting 7 Sep.

**Key action on your plate:** scope POCDEX Day-2 test cases with Imelda MO by 28 Aug.

</details>
