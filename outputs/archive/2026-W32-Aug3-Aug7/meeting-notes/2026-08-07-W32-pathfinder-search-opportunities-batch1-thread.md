# Meeting Notes: Pathfinder Batch 1 — Search & Opportunities Status Thread

**Date:** 2026-08-07

**Participants:** Rathika, Thomas Huchedé, Léo Milbor (found the search issue with Thomas), Michelle Yip (confirmation pending)

**Meeting Type:** Slack thread — Batch 1 UAT readiness (Opportunities listing/details, search & filters)

**Duration:** N/A (async)

---

## Summary

Rathika flagged 5 open items ahead of Batch 1 UAT execution (opportunities listing/detail pages, search & filters). Thomas responded with status on each: one confirmed bug fix (closing-date display), two items blocked on the design system (No Results UI, empty/closed state images), one real and non-trivial bug (combined agency+title search), and one spec gap needing a product decision (clear-search behavior). This is the same OTEP-668 search defect already tracked in today's RAID log — this thread gives it a confirmed root cause for the first time.

---

## Decisions Made

None yet — item #5 (clear-search behavior) is explicitly pending Michelle's confirmation; no other decisions were made in this thread.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Fix closing-date bug on detail page (today's closing date wrongly shown as closed) | Thomas Huchedé | No date set | Medium | ✅ Bug found — fix status not stated, confirm before Batch 1 |
| Fix combined agency+title search (score dilution below match threshold) | Thomas Huchedé | No date set — flagged "not a quick fix at all" | 🔴 High | 🔴 Root cause confirmed, no fix timeline |
| Confirm whether auto-refresh-on-filter-click is an acceptable replacement for the "clear search restores listing" gap | Michelle Yip | No date set — needed before Batch 1 sign-off on this item | 🔴 High | Awaiting Michelle's confirmation |
| Upload empty/closed state images | Design system owner | No date set | Medium | 🔴 Blocked — pending design system illustrations |
| Update "No Results" UI to match Figma | Design system owner | No date set | Medium | 🔴 Blocked — pending design system update; underlying logic already correct |

**Notes:**
- Two items (No Results UI, empty/closed state images) share the same blocker — a pending design system update — so they should be tracked and unblocked together, not as two separate asks.
- The combined-search bug has no fix timeline, which is a problem given it's already flagged 🔴 High in this week's RAID log (as OTEP-668, "untouched in To Do") — this thread confirms it's not just untouched, it's genuinely hard to fix.

---

## Key Insights & Quotes

**On the combined-search bug (item #3) — this is the real news in this thread:**
- Root cause confirmed: when a query mixes agency and title text (e.g. "Senior data ministry of manpower"), each part's match score gets diluted individually and falls below the surfacing threshold, so nothing returns. Search works fine when matching on title OR agency alone, but breaks when both are combined in one query.
- Thomas: this "is not a quick fix at all unfortunately" — meaning it's an algorithmic/scoring design issue, not a simple logic bug. Worth treating as a scoping/prioritization decision (fix now vs. defer with a known-limitation note) rather than assuming it lands before Batch 1.

**On the clear-search spec gap (item #5):**
- Thomas's proposed fix: auto-refresh search results on filter click, rather than requiring the user to press "Search" again after clearing text. This is a UX behavior change, not just a bug fix — worth treating as a product decision, which is why Rathika routed it to Michelle rather than treating it as Thomas's call alone.

**On the two design-system-blocked items:**
- Underlying logic for "No Results" is already correct — this is purely a visual/design-system dependency, not an engineering gap. Worth chasing the design system update directly rather than waiting passively, since engineering work here is already done.

---

## Open Questions

- [ ] Is auto-refresh-on-filter-click acceptable as the fix for the clear-search gap, or does the original "must press Search" spec need to be preserved? — **Owner:** Michelle Yip — **By:** Not set, but blocking Batch 1 sign-off on this item
- [ ] What's the actual fix timeline for the combined agency+title search bug, given it's "not a quick fix"? — **Owner:** Thomas Huchedé — **By:** Not set
- [ ] When is the design system update landing, and does it unblock both the No Results UI and the empty/closed state images at once? — **Owner:** Unassigned — **By:** Not set
- [ ] Is the closing-date bug fix actually deployed, or just identified? — **Owner:** Thomas Huchedé — **By:** Not set — thread says "found," not confirmed fixed

---

## Blockers

1. **Combined agency+title search returns empty/bad results**
   - **Blocked by:** Algorithmic scoring design (match-score dilution), not a simple code fix
   - **Impact:** Search is unreliable for any query mixing agency and title terms — a real, user-facing defect with no fix timeline
   - **Resolution:** Needs a scoping conversation — fix before Batch 1, or document as a known limitation and defer

2. **"No Results" UI and empty/closed state images**
   - **Blocked by:** Pending design system update (external to this team's engineering work)
   - **Impact:** Two Batch 1 UAT items can't be visually verified as spec-compliant until design system lands, even though underlying logic is done
   - **Resolution:** Chase design system update timeline directly

---

## Timeline Risks

- **TIMELINE RISK:** This thread confirms the root cause of OTEP-668, already tracked in today's consolidated RAID log (`outputs/analyses/2026-08-07-W32-raid-log.md`) as "🔴 High-severity search bug (OTEP-668, Defect 5) — untouched in To Do." That RAID log entry now needs updating: root cause is confirmed, but "not a quick fix at all" means the risk to Sprint 7 close (2026-08-09, 2 days out) is higher than "untouched" implied — this reads as a bug that may not be fixable within the sprint at all, not just one that hasn't been picked up yet.
- **TIMELINE RISK:** Item #5 (clear-search behavior) is waiting on Michelle's confirmation with no stated deadline, but it's gating Batch 1 UAT sign-off on that specific test case per today's Opportunities UAT batch status tracker (`outputs/analyses/2026-08-07-W32-opportunities-uat-batch-status.md`) — worth resolving today rather than letting it become a second silent blocker alongside the competency-matching one already flagged there.

---

## Next Steps

**Immediate:**
- Michelle to confirm/reject the auto-refresh-on-filter-click proposal for item #5
- Thomas to give a realistic estimate (or explicit "won't fix this sprint") on the combined-search bug
- Confirm closing-date bug fix is actually deployed, not just identified

**Short-term:**
- Chase design system update timeline for the two blocked visual items
- Update OTEP-668 in the RAID log and Jira to reflect confirmed root cause and revised risk level

**Follow-up:**
- Not specified in thread

---

## Context for Future Reference

This thread directly updates OTEP-668, already flagged in this week's RAID log as a 🔴 High risk untouched in To Do with 2 days left in Sprint 7. The root cause is now known (score dilution on combined agency+title queries), and Thomas's "not a quick fix at all" comment suggests this may need to be explicitly descoped from Sprint 7 rather than assumed fixable in the remaining time — worth raising this distinction at today's Sprint Internal Demo (2:30pm) rather than letting "found but not fixed" read as "in progress, on track."

Also connects to today's Opportunities UAT batch status tracker — item #5 (clear-search spec decision) is a new, small blocker on Batch 1 sign-off that wasn't captured there yet, separate from the already-flagged competency-matching (Batch 2) blocker.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original Slack thread summary</summary>

@Rathika flagged 5 open items for Batch 1 (opps listing/details pages, search & filters), and @Thomas Huchedé replied with status on each:

1. Closing-date bug (today's closing date wrongly shown as closed on details page, though fixed on listing) — @Thomas Huchedé found the bug.
2. "No Results" UI doesn't match Figma — blocked on a pending design system update; can't fix yet, though the underlying logic should already be correct.
3. Combined agency + title search returns bad/empty results — confirmed real issue (found with Leo). When a query mixes agency and title text (e.g. Senior data ministry of manpower), each part's match score gets diluted and falls below threshold, so nothing surfaces. Search works fine when matching only title OR only agency, but is unreliable across both — and @Thomas Huchedé says this "is not a quick fix at all unfortunately."
4. Empty/closed state images need uploading — same blocker as #2, pending design system illustrations.
5. Clearing search text doesn't restore original listing without re-searching — @Thomas Huchedé calls this a spec gap, and suggests refreshing search automatically on filter click instead of requiring the "search" button. @Rathika asked you (Michelle) to confirm whether this is acceptable.

Item #5 still needs your confirmation, and #3 has no clear fix timeline yet.

</details>
