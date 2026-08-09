# OTEP-668 Descope Reply — Sent 2026-08-07

**Channel:** OTEP Team 2 space (reply to Rathika/Thomas Batch 1 thread)

**Context:** Reply to the combined agency+title search bug (OTEP-668, Defect 5) flagged by Rathika and diagnosed by Thomas + Léo. See [meeting notes](../meeting-notes/2026-08-07-W32-pathfinder-search-opportunities-batch1-thread.md) and [RAID log](../analyses/2026-08-07-W32-raid-log.md) for full context.

---

Nice find, Thomas + Léo. Confirmed this doesn't break the feature — title-only and agency-only search both work, just combined queries silently return empty.

Given it's not a quick fix and we're 2 days from sprint close:
- Split this out of OTEP-668 into its own ticket, target next sprint
- Close out OTEP-668 for what's already fixed
- I'll log it as a known limitation for UAT so it's not filed as a fresh bug
- Thomas — any cheaper interim fix (e.g. fallback to title-OR-agency on a zero-result combined query)? If not, a rough estimate for next sprint works

Will flag in today's demo too.

---

**Decision summary:** Descope from Sprint 7, split into a new ticket, document as a known UAT limitation. Awaiting: Thomas's answer on interim-fix feasibility, and a next-sprint estimate if no interim fix is possible.

**Next steps:**
- [ ] Create new Jira ticket for the combined-search scoring fix (unassigned to sprint until Thomas's estimate lands)
- [ ] Confirm OTEP-668 is closed for the items already fixed
- [ ] Flag known limitation to UAT testers before Batch 1 execution begins
- [ ] Raise at 2:30pm Sprint Internal Demo
