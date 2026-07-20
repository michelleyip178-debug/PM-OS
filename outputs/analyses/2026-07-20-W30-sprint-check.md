## Sprint Check — 2026-07-20 | Pre-Planning Brief · Sprint 7

### Ready Shelf

**Depth:** 0 stories · 0 points · 0.0 sprints of runway

**Status:** 🔴 At risk

**Velocity basis:** Avg ~25.5 stories/sprint (Sprint 3: 23 Done · Sprint 4: 28 Done). Story points are not used in this Jira instance — `customfield_10016` (Story Points) is `null` on every issue checked, including recently Done ones, so this check falls back to story counts per the skill's own fallback rule.

**Sprint selection note:** The two most recently *completed* sprints are Sprint 4 (closed cleanly 29 Jun, 28 Done) and Sprint 5 (closed 12 Jul, but flagged in `sprint-status.md` as "not a clean close" — 41 of ~74 issues carried over unresolved, only 29 Done at last live pull before rollover). Per the skill's instruction to flag abnormal sprints, Sprint 5 is excluded from the velocity average and Sprint 3 (23 Done, clean close) is used instead. If you want Sprint 5 included despite the carry-over noise, velocity would drop to ~26.7 avg ((28+29+23)/3) — directionally similar, doesn't change the read below.

### Ready Stories (by priority)

**None.** A live JQL query against `project=OTEP AND labels="ready-for-sprint"` (any status) returned zero issues — the `ready-for-sprint` label has not been applied to a single ticket in this Jira instance. This isn't a query or sync problem; it means `/grooming-close` has not run this cycle, or grooming hasn't produced a gated Ready shelf yet.

### Dependency Traps (0)

Not applicable — no Ready-shelf stories exist to check for dependency traps.

### Unpointed Ready Stories (0)

Not applicable for the same reason. Separately worth flagging: **story points aren't tracked in this Jira project at all** (confirmed null across a sample of recent Done issues, including OTEP-746, OTEP-258, OTEP-532, OTEP-666, OTEP-720). Every prior sprint-check and status update in this workspace has necessarily used story *counts*, not points — this isn't new, but it does mean "points" language in ceremonies should be swapped for "stories" to match what's actually measurable here.

### Recommendation

The Ready shelf is empty, full stop — there is nothing gated and labeled `ready-for-sprint` to plan Sprint 7 from tomorrow. This is a harder blocker than a thin shelf: normally `/sprint-check` flags depth risk, but here there's no depth to measure. Before Sprint 7 planning can run credibly, someone needs to either (1) run `/grooming-close` against whatever came out of the last grooming session to gate and label stories, or (2) confirm grooming for Sprint 7 candidates hasn't happened yet, in which case planning tomorrow would be working from an unfiltered Backlog (21 items sitting in Sprint 6's Backlog per the 2026-07-16 pull) rather than a vetted Ready shelf. Given Sprint 6 closes 26 Jul and this is meant to be the pre-planning brief the day before planning, this is the single highest-priority item to resolve today — not tomorrow at the planning table.
