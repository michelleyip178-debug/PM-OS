# Meeting Notes: Daily Standup

**Date:** 2026-07-01

**Attendees:** Thomas, Leo, Rathika, Pow Hwee, Amber, Michelle

**Meeting Type:** Team planning (daily standup)

**Duration:** Not specified

---

## Summary

Thomas is nearly out of work and needs more stories assigned. Leo is sequencing OTG ingestion ahead of WOG AD due to an unresolved egress issue. Rathika needs this sprint's user stories to start test case prep. Pow Hwee is pulling engineers together on deployment issues. Amber pitched a details-page navigation change (new tab + persisted listing state) and is separately working error states, which Michelle wants scoped with the Tech Leads.

---

## Decisions Made

1. **Leo sequences OTG ingestion before WOG AD**
   - **Why:** WOG AD work is blocked by the unresolved egress issue
   - **Who decided:** Leo
   - **Impact:** WOG AD start date depends on egress issue resolution — no ETA given

2. **Amber's card-click navigation proposal (open in new tab, persist listing state)**
   - **Why:** Removes the back-link pattern on the details page; keeps officer's place in the listing
   - **Who decided:** Amber (proposed) — not yet confirmed as final
   - **Impact:** UX/routing change on the details page; needs confirmation before implementation

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Discuss assigning more user stories to Thomas | @Michelle + @Pow Hwee | Not mentioned — schedule within 48 hours | 🔴 High | 🔴 Not Started |
| Resolve/track egress issue blocking WOG AD | @Leo | Not mentioned | 🔴 High | 🔴 Not Started |
| Share this sprint's user stories with Rathika for test case prep | @Michelle / @Pow Hwee | Not mentioned — schedule within 48 hours | 🔴 High | 🔴 Not Started |
| Call meeting with engineers to resolve deployment issues | @Pow Hwee | Not mentioned | 🔴 High | 🔴 Not Started |
| Confirm card-click / new-tab navigation proposal for details page | @Amber | Not mentioned | 🟡 Medium | 🔴 Not Started |
| Discuss system error page inventory with Tech Leads (which to keep vs. cut) | @Amber | Not mentioned | 🟡 Medium | 🔴 Not Started |

**Notes:**
- No due dates were mentioned for any item — all should be scheduled within 48 hours per standard practice.
- WOG AD sequencing is blocked pending the egress issue; flag as a dependency risk until Leo has an update.

---

## Key Insights & Quotes

**Technical Constraints:**
- Egress issue is still open and is explicitly blocking WOG AD work — Leo is doing OTG ingestion first to avoid stalling.
- Deployment issues are significant enough that Pow Hwee is convening a dedicated engineer meeting rather than resolving async.

**Product/Design Considerations:**
- Amber's navigation proposal (new tab on card click, persisted listing state) removes the need for a back link — worth checking against existing officer-profile or details-page PRD if one exists.
- System error states are still open — Michelle flagged this needs Tech Lead input on scope (which error pages to keep vs. remove) before Amber finalizes.

---

## Open Questions

- [ ] What's the status/owner/ETA of the egress issue blocking WOG AD? - **Owner:** @Leo - **By:** Not specified, chase for update
- [ ] Which system error pages should be kept vs. cut? - **Owner:** @Amber + Tech Leads - **By:** Not specified
- [ ] Is the new-tab/persisted-state navigation pattern confirmed, or still a proposal? - **Owner:** @Amber - **By:** Not specified

---

## Blockers

1. **WOG AD work blocked by egress issue**
   - **Blocked by:** Unresolved egress issue (owner/details not specified in standup)
   - **Impact:** Leo cannot start WOG AD; working OTG ingestion in the meantime
   - **Resolution:** Needs follow-up to identify who owns the egress fix and timeline

2. **Deployment issues affecting the team**
   - **Blocked by:** Unspecified deployment problems
   - **Impact:** Enough impact that Pow Hwee is pulling engineers into a dedicated meeting
   - **Resolution:** Pending that meeting

---

## Next Steps

**Immediate (This Week):**
- Michelle + Pow Hwee align on additional stories for Thomas
- Share sprint user stories with Rathika
- Pow Hwee schedules engineer meeting on deployment issues
- Amber syncs with Tech Leads on system error page scope

**Short-term (Next 2 weeks):**
- Track egress issue resolution and unblock WOG AD for Leo
- Confirm and (if approved) scope Amber's details-page navigation change

---

## Context for Future Reference

This is the first standup note referencing the WOG AD egress issue and Amber's navigation proposal — no prior meeting notes cover either topic, so treat these as newly opened threads to track going forward. Pow Hwee's existing stakeholder profile notes he's already following up on "full list of integration tasks" — the deployment issues raised here may be related; worth checking with him directly.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

Thomas is almost done with his tasks, discuss with pow hwee on assigning more user stories for him. Leo will look at OTG ingestion first before touching WOG AD as that is still pending the egress issue. Rathika has raised a few issues and asked for the user stories in this sprint so that she can prepare the test cases. Pow Hwee is going to call for meeting with the engineers to sort out the deployment issues. Amber proposed on removing the back link on details page and suggested that when officer click on the card, it will open a new tab and the state of the listing will persist in current tab. Amber also working on error states and Michelle suggested for her to discuss with the Tech Leads on the possible system error pages - which to keep or go.

</details>
