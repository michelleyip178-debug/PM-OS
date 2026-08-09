# Meeting Notes: PSD-PDO-OTEP-INT Channel — Saturday Recap

**Date:** 2026-08-08 (Saturday), spanning into early morning 2026-08-09

**Channel:** psd-pdo-otep-int

**Participants:** Michelle Yip, Pow Hwee Tan, Adrian Ang, Rama Moorthy

**Meeting Type:** Slack thread — admin access fix + UAT status check-in

**Duration:** N/A (async, Saturday evening into Sunday early morning)

---

## Summary

An access issue on the admin portal upload module (Pow Hwee denied access) got resolved by adding Michelle as admin instead — pending a restart of otep-web and otep-service, no code change needed. Later that evening Adrian asked whether UAT could proceed; Pow Hwee reported oppties test cases 36/38 ready with 2 failures (one needs logic clarification, one is a non-blocking medium defect). Rama then confirmed the bigger news: Core team's internal UAT is complete, all test cases passed, final verification happening today — a formal go-ahead from Core team's side.

---

## Decisions Made

1. **Add Michelle as admin instead of granting Pow Hwee access**
   - **Why:** Pow Hwee was denied access testing the admin portal upload module login; rather than fixing her access, the team added Michelle as admin instead.
   - **Who decided:** Pow Hwee Tan
   - **Impact:** Requires otep-web and otep-service restart to take effect — no code change or redeploy needed, but Pow Hwee flagged checking whether the restart is safe given others might be working.

2. **Core team's internal UAT declared complete** (Rama, early Sunday morning)
   - **Why:** All test cases passed; final verification happening today (Sunday).
   - **Who decided:** Rama Moorthy, documented in Internal Test Epic 67 - Profile Page.
   - **Impact:** This is the formal go-ahead from Core team's side — directly resolves the "internal UAT go-ahead" gate flagged as open in Friday's RAID log (Rama's Jira update + Core team's POCDEX API testing were the two remaining blockers to testing actually starting).

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Restart otep-web and otep-service to apply admin access change | Pow Hwee Tan (pending confirmation it's safe) | Not stated — likely ASAP given it's blocking the admin portal fix | 🔴 High | Pending — Pow Hwee checking whether others are working before restarting |
| Clarify logic on the failed oppties test case (36 or 38, one of the two) | Unassigned | Not stated | 🟡 Medium | Open |
| Assess/triage the non-blocking medium defect ("closing soon" badge for C@G) | Unassigned | Not stated — flagged non-blocking | 🟢 Low-Medium | Open, not blocking |
| Complete final verification on Core team's internal UAT | Rama Moorthy / Core team | Today (Sunday, 2026-08-09) | 🔴 High | In progress — "just doing final verification today" |

**Notes:**
- The restart is the one item that could actively block other people if done at the wrong time — Pow Hwee's own caution here is worth respecting; confirm timing before it happens if you're the one to greenlight it.
- Both oppties test case failures (36/38) have no named owner yet for the fix/clarification — worth assigning before they sit unowned into the work week.

---

## Key Insights & Quotes

**On the access issue resolution:**
- Rather than debugging why Pow Hwee's access was denied, the team took the simpler path (add Michelle as admin instead). Pragmatic, but worth confirming this doesn't leave Pow Hwee needing admin access again later for something only she can test.

**On UAT test case results (oppties 36/38):**
- 2 of the tested cases failed. One needs logic clarification (unclear if this is a real defect or a spec ambiguity), the other is confirmed as a non-blocking medium defect specifically on the "closing soon" badge for Careers@Gov opportunities. This is a narrower, more specific defect than anything in the Opportunities UAT batch tracker from Friday — worth checking whether it's related to the existing closing-date bug (OTEP-668 thread, Thomas found a similar issue Friday: "today's closing date wrongly shown as closed on detail page").

**On Core team's internal UAT completion:**
- This is the single biggest update in this thread. Friday's RAID log had "Internal UAT go-ahead" as a 🔴 Critical open item with two gates: Rama updating Jira with test data, and Core team finishing POCDEX API testing. Rama's Sunday-morning message appears to close the second gate — worth confirming the Jira ticket update (the first gate) has also happened, since Rama's message covers UAT completion, not explicitly the ticket-data update.

**Strategic considerations:**
- This activity happened over a weekend (Saturday evening into Sunday morning) — the team is actively pushing UAT forward outside normal working hours, consistent with the sprint-close pressure (Sprint 7 closes 2026-08-09, the same day as Rama's "final verification today" message).

---

## Open Questions

- [ ] Has Rama's Jira ticket update (test data) — the other gate flagged in Friday's RAID log — also been completed, or does Sunday's message only cover the POCDEX API testing gate? — **Owner:** Rama Moorthy — **By:** Needs confirming before broadcasting ticket/account locations to the wider team (per Adrian's Friday ask)
- [ ] Is the "closing soon" C@G defect from oppties test case 36/38 the same underlying issue as the closing-date bug Thomas found Friday (detail page showing today's closing date as already closed)? — **Owner:** Michelle to confirm with Thomas/Pow Hwee — **By:** Before triaging as a new vs. duplicate defect
- [ ] Was the otep-web/otep-service restart done, and did it cause any disruption to others working over the weekend? — **Owner:** Pow Hwee Tan — **By:** Confirm status Monday
- [ ] Which of the two failed test cases (36 or 38) is the logic-clarification one, and who owns resolving the ambiguity? — **Owner:** Unassigned — **By:** Not set

---

## Blockers

1. **otep-web/otep-service restart pending, contingent on confirming no active work will be disrupted**
   - **Blocked by:** Pow Hwee's own caution check, not yet confirmed either way in this thread
   - **Impact:** Admin access fix (Michelle as admin) doesn't take effect until this restart happens
   - **Resolution:** Confirm timing is safe, then restart — likely a same-day fix once confirmed

---

## Timeline Risks

- **TIMELINE RISK:** Rama's "Core team's internal UAT is complete" message directly resolves one of the two gates flagged as 🔴 Critical in Friday's consolidated RAID log ("Internal UAT go-ahead — environment ready, but testing not yet started"). That RAID log entry needs updating now — but only partially, since the other gate (Rama's Jira ticket data update) isn't explicitly confirmed as done in this thread. Don't mark the whole item resolved without confirming both halves.
- **TIMELINE RISK:** This UAT activity is happening the same weekend Sprint 7 closes (2026-08-09, per the live Jira pull from Friday) — worth checking whether "final verification today" (Sunday) leaves any margin before Monday's sprint-close accounting, or whether this pushes some Sprint 7 items into a grey zone right at the boundary.

---

## Next Steps

**Immediate:**
- Confirm restart timing is safe, then execute
- Confirm whether Rama's Jira ticket-data update gate is also closed, not just the POCDEX API testing gate
- Triage the two failed oppties test cases (36/38) — assign an owner to the logic-clarification one and to assessing the non-blocking "closing soon" defect

**Short-term:**
- Once both go-ahead gates are confirmed closed, action Adrian's Friday ask: broadcast where the tickets and test accounts are so more people can help execute UAT
- Check whether the "closing soon" C@G defect is a duplicate of Thomas's Friday closing-date bug finding

**Follow-up:**
- Not specified in thread — recommend a Monday-morning check-in to confirm both UAT go-ahead gates are formally closed before wider UAT execution ramps up

---

## Context for Future Reference

This thread directly updates the "Internal UAT go-ahead" item in `outputs/analyses/2026-08-07-W32-raid-log.md` — Friday's log had this as 🔴 Critical with two open gates (Rama's Jira data update, Core team's POCDEX API testing). Rama's Sunday message appears to close the POCDEX API testing gate specifically ("Core team's internal UAT is complete, all test cases passed") but doesn't explicitly confirm the Jira ticket-data update. Update the RAID log to reflect partial resolution, not full closure, until that's confirmed.

The oppties 36/38 test case failures are new information not yet in any tracker — worth adding to the Opportunities UAT batch status tracker (`outputs/analyses/2026-08-07-W32-opportunities-uat-batch-status.md`) once ownership is confirmed, especially if the "closing soon" C@G defect turns out to be the same issue Thomas flagged Friday.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original Slack thread summary</summary>

Here's a rundown of yesterday (Saturday, Aug 8) in psd-pdo-otep-int:

Access issue: You flagged that @Pow Hwee TAN (PSD) (Pow Hwee) was denied access when testing the admin portal upload module login.
Fix: @Pow Hwee TAN (PSD) decided not to add Pow Hwee, and instead added you as admin — but noted otep-web and otep-service need a restart to take effect (no code change, no redeploy needed). She checked whether that was okay given others might be working.
UAT check-in: Later that evening, @Adrian ANG (PSD) (Adrian) asked whether configs were good and UAT on test cases could proceed.
Response (early this morning): @Pow Hwee TAN (PSD) reported UAT test cases for oppties 36/38 are ready — 2 failed, one needs logic clarification, the other is a non-blocking medium defect on "closing soon" for c@g.
@Rama MOORTHY (PSD) (Rama) then confirmed the Core team's internal UAT is complete, all test cases passed, just doing final verification today — it's a go-ahead from Core team's side, documented in Internal Test Epic 67 - Profile Page.

</details>
