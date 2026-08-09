# Meeting Notes: CSC SIT/UAT Readiness — Slack Thread

**Date:** 2026-08-07 (thread status as of this date)

**Participants:** Rama Moorthy, Imelda Mo, Adrian Ang, Michelle Yip

**Meeting Type:** Slack thread — CSC dependency alignment and UAT readiness status

**Duration:** N/A (async, spanning from initial discussion through 2026-08-07 status update)

---

## Summary

Rama initiated SIT/UAT alignment with CSC; Imelda built a dependency flowchart, resolved feedback, and shared it with partner teams. As of today, DLEid and JumpStart are ready for UAT, Course Catalog is estimated for 31 Aug, and SSO remains ongoing and needs follow-up. Imelda is on PM leave but reachable on Slack, and the team is waiting on account creation before ready components can actually start testing.

---

## Decisions Made

1. **CSC dependency flowchart validated and shared with partner teams**
   - **Why:** To give a single visual reference for CSC dependencies after resolving review comments and feedback.
   - **Who decided:** Imelda Mo (author), reviewed with Rama Moorthy and Michelle Yip.
   - **Impact:** Partner teams now have a shared reference for dependency mapping — reduces risk of miscommunication on what depends on what.

2. **Verified flows/data exchanges to be shared with dependent teams by 6 Aug for acknowledgement**
   - **Why:** Adrian Ang's ask, specifically to de-risk potential miscommunications on assumptions before they surface later as defects or disputes.
   - **Who decided:** Adrian Ang
   - **Impact:** This creates a formal sign-off checkpoint — worth confirming whether all dependent teams actually acknowledged by 6 Aug, since this thread's most recent update (7 Aug) doesn't explicitly confirm that closed out.

3. **"Ready for testing" is defined as "ready for UAT," not SIT**
   - **Why:** Imelda's clarification, likely in response to ambiguity in how the term was being used across teams.
   - **Who decided:** Imelda Mo
   - **Impact:** For Course Catalog specifically, UAT will proceed with mock data before end-to-end testing once CSC development is complete — meaning "ready" for Course Catalog does not mean the real, final data path is being tested yet.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Share verified flows/data exchanges with dependent teams for acknowledgement | Rama Moorthy / Imelda Mo | 6 Aug | 🔴 High | Status unconfirmed — thread doesn't state whether this closed out |
| Create UAT test accounts for DLEid and JumpStart (ready components) | Unassigned | No date set | 🔴 High | Blocked — Imelda "awaiting account creation" |
| Follow up on SSO status | Unassigned | No date set | 🔴 High | Open — flagged as "ongoing, requiring follow-up" |
| Course Catalog: proceed with mock-data UAT, then move to end-to-end once CSC dev completes | Imelda Mo (tracking) | Estimated 31 Aug | Medium | In progress — mock-data phase not yet confirmed started |
| Check part of Phase 2 test cases sent by Imelda | Unassigned (reviewer side) | No date set | Medium | Sent, awaiting review |

**Notes:**
- Account creation is the single blocker holding back the two components (DLEid, JumpStart) that are otherwise ready — worth chasing this specifically rather than treating "ready for UAT" as equivalent to "UAT started."
- No owner is named for the SSO follow-up despite it being flagged as needing one.

---

## Key Insights & Quotes

**On "ready" vs. actually testable:**
- Imelda's clarification that "ready for testing" means "ready for UAT" is a useful definitional anchor, but it also surfaces a gap: DLEid and JumpStart are "ready" yet can't actually start because accounts haven't been created. "Ready" is describing the feature/integration state, not the operational readiness to execute — worth keeping those two senses distinct in status reporting going forward.

**On Course Catalog's phased approach:**
- UAT will run against mock data first, with real end-to-end testing only after CSC development completes. This means the 31 Aug estimate is for mock-data UAT starting, not for full validation — worth flagging this distinction explicitly if 31 Aug gets reported upward as a completion date rather than a starting point.

**On Imelda's availability:**
- Imelda is on PM leave but remains contactable on Slack — worth being mindful of response-time expectations and not treating her as fully unavailable, but also not over-relying on her for anything urgent during this period.

---

## Open Questions

- [ ] Did dependent teams actually acknowledge the verified flows/data exchanges by the 6 Aug deadline? — **Owner:** Rama Moorthy / Adrian Ang to confirm — **By:** Not stated in thread, worth checking now that it's 7 Aug
- [ ] Who owns SSO follow-up specifically? — **Owner:** Unassigned — **By:** Not set
- [ ] Who owns account creation, and what's blocking it? — **Owner:** Unassigned — **By:** Not set — this is the actual blocker for DLEid/JumpStart starting UAT
- [ ] Has anyone reviewed the Phase 2 test cases Imelda sent? — **Owner:** Unassigned — **By:** Not set

---

## Blockers

1. **Account creation not yet done for DLEid and JumpStart**
   - **Blocked by:** Unclear — no owner or reason given in the thread
   - **Impact:** Two components that are otherwise "ready for UAT" can't actually begin testing
   - **Resolution:** Needs an owner assigned today; this is a fast-moving, low-complexity blocker relative to its impact

2. **SSO status ongoing, needs follow-up**
   - **Blocked by:** Not specified in thread
   - **Impact:** Unclear whether this affects the same UAT timeline as DLEid/JumpStart/Course Catalog, or is tracked separately
   - **Resolution:** Needs a named owner and a status check

---

## Timeline Risks

- **TIMELINE RISK:** This thread's SSO status ("ongoing, requiring follow-up") is consistent with — and likely the same underlying item as — the WS3 SSO configuration gap flagged in today's separate CSC-Compass SIT standup and OTEP Squad Sync notes (`outputs/meeting-notes/2026-08-07-W32-csc-compass-sit-daily-standup.md`, `outputs/meeting-notes/2026-08-07-W32-otep-squad-sync.md`). Worth confirming these are the same tracked item rather than three separate threads describing the same gap without cross-referencing each other.
- **TIMELINE RISK:** Course Catalog's 31 Aug estimate is for mock-data UAT, not full end-to-end testing with real CSC development complete. This is a softer commitment than a flat "31 Aug" reads as — worth checking this nuance is preserved if 31 Aug gets reported to stakeholders as a completion milestone, since today's separately-tracked CSC UAT date (also 31 Aug, per yesterday's SIT progress review) may be getting conflated with this Course Catalog-specific mock-data date.
- **TIMELINE RISK:** Adrian's 6 Aug acknowledgement deadline has passed as of this thread's 7 Aug status update, with no confirmation either way on whether dependent teams actually signed off. Worth closing this loop explicitly rather than letting it go unconfirmed.

---

## Next Steps

**Immediate:**
- Confirm whether the 6 Aug acknowledgement deadline was met
- Assign an owner to unblock account creation for DLEid/JumpStart
- Name an owner for SSO follow-up (or confirm it's the same item as WS3 in today's other CSC meetings)

**Short-term:**
- Review Imelda's Phase 2 test cases
- Track Course Catalog's mock-data UAT start, distinct from the later end-to-end phase

**Follow-up:**
- Not specified in thread — worth a direct check-in given Imelda's on leave and several items (account creation, SSO owner) are currently unassigned

---

## Context for Future Reference

This thread's SSO gap likely overlaps with the WS3 SSO configuration issue raised independently in today's OTEP Squad Sync and CSC-Compass SIT standup — three separate sources (this Slack thread, Squad Sync, SIT standup) all flagging SSO as unresolved on the same day, without explicit cross-referencing. Worth checking whether these are being tracked as one item or three before more parallel follow-up happens on what might be the same root gap.

Also connects to the consolidated weekly RAID log (`outputs/analyses/2026-08-07-W32-raid-log.md`) — the account-creation blocker and SSO ownership gap are new information not yet reflected there as of this thread.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original Slack thread summary</summary>

@Rama MOORTHY (PSD) initiated a discussion regarding SIT/UAT alignment with CSC and @Imelda MO (PSD) created a draft flowchart for CSC dependency. After resolving comments and incorporating feedback, the diagram was shared with partner teams. Several components are now ready for UAT, including DLEid and Jumpstart, with Course Catalog estimated for August 31st. SSO is ongoing, and @Imelda MO (PSD) is awaiting account creation for testing and has sent part of phase 2 test cases for checking.

@Imelda MO (PSD) created a draft CSC dependency flowchart and shared it for validation with @Rama MOORTHY (PSD) and @Michelle YIP (PSD) [1].
@Adrian ANG (PSD) requested that the verified flows and data exchanges be shared with dependent teams by August 6th to get acknowledgements on assumptions and de-risk potential miscommunications [2].
As of August 7th, DLEid and Jumpstart are ready for testing, Course Catalog is estimated for August 31st, and SSO is ongoing, requiring follow-up [3].
@Imelda MO (PSD) clarified that "ready for testing" means ready for UAT, and for Course Catalog, UAT will proceed with mock data before end-to-end testing once CSC development is complete [4].
The team is waiting on account creation for components ready for testing, and @Imelda MO (PSD) is on PM leave but remains contactable on Slack [3][5].

</details>
