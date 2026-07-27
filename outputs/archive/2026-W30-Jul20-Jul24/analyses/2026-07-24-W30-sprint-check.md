---
date: 2026-07-24
week: 2026-W30
topic: Sprint Check — pre-planning brief for Sprint 7 (Pathfinder)
status: Ready shelf assessment ahead of Sprint 7 planning (Mon 27 Jul)
---

## Sprint Check — 2026-07-24 | Pre-Planning Brief · Sprint 7

### Ready Shelf
**Depth:** 4 stories · 0 pointed (3 unpointed) · **could not compute sprint-runway ratio — see note below**

**Status:** 🔴 At risk

**Velocity basis:** No story-point history exists in `00-hub/sprint-status.md` for any closed sprint — only story counts are tracked (S4: 28 Done, S5 not yet closed/counted at close). Falling back to story-count comparison: last two full sprints closed with **23–28 stories Done**. A shelf of **4** stories, none of which are feature work, is far short of that by count alone — and would be worse by points if points existed, since 3 of the 4 aren't even pointed.

### Ready Stories (by priority)
| Story | Title | Points | Assignee | Dependency risk |
|-------|-------|--------|----------|----------------|
| OTEP-329 | Keycloak Client Secret Externalization | 1.0 | Pow Hwee TAN | ✅ None found in local file or open-items |
| OTEP-680 | Check with OPS for observability needs | — | Léo Milbor | ⚠️ Unpointed — see below |
| OTEP-659 | Investigate smoke test for pipeline | — | Thomas Huchedé | ⚠️ Unpointed — see below |
| OTEP-485 | Run update deps in otep-service | — | Léo Milbor | ⚠️ Unpointed — see below |

**What's missing from this list:** none of the 4 are feature/user-facing stories. All are engineering chores (observability, smoke tests, dependency bumps, secret externalization). The 19 ungroomed candidates flagged in Tuesday's `2026-07-22-W30-grooming-close.md` are still not gated `ready-for-sprint` in Jira — this pull confirms that gap hasn't closed in the two days since.

### Dependency Traps (0 confirmed, but flagged for follow-up)
No local story files record a Dependencies field for these 4 tickets, and none appear in `00-hub/open-items.md` by key. That's not the same as "no risk" — it means the dependency isn't documented anywhere I can check, which is its own gap. Worth a verbal confirm at planning rather than treating "no flag found" as "confirmed clean."

Separately — not a dependency trap but a placement gap: all 4 Ready stories are still physically filed in the `Sprint-34620-OTEP-Pathfinder-Sprint-6` local folder, not relocated to the new Sprint 7 folder, even though they're tagged `ready-for-sprint` for the *next* sprint. Live Jira sprint assignment for these 4 wasn't checked in this pass — recommend a quick `/jira-sync` before Monday to confirm where Jira itself currently places them.

### Unpointed Ready Stories (3)
OTEP-680, OTEP-659, OTEP-485 — all `customfield_10016` (story points) is null. None of these can contribute to a real buffer calculation, and if any get pulled into Sprint 7 unpointed, the team is committing to unknown-sized work at planning.

### Recommendation
The shelf is not healthy enough to plan Sprint 7 from as-is: 4 stories, all engineering chores, 3 unpointed, against a background of 19 ungroomed candidates and 4 gated-but-blocked auth stories (OTEP-71/110/111/594) sitting in the Sprint 7 folder without the `ready-for-sprint` label. Two moves before Monday: (1) get the 19 ungroomed candidates through a fast grooming pass — even partial gating changes the picture materially — and (2) point OTEP-680/659/485 so they're plannable even if they end up as the "chore" filler alongside whatever feature work clears grooming. Don't let the sprint open with only these 4 as the confirmed backlog.
