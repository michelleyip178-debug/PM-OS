---
date: 2026-06-04
day: Thursday
week: 2026-W23
sprint: Sprint 3, Day 3
mcps_used: [Google Calendar (live, direct API), Jira (live)]
---

# Daily Plan — Thursday, 4 June 2026 (Sprint 3, Day 3) — DEMO + S4 GROOMING

## TL;DR

- **Meetings:** 4 (~3.75 hrs) — demo huddle 09:00, standup 11:00, **Sprint planning/grooming 14:00–16:00**, Retro+Demo 16:00–17:00.
- **P0 Tasks:** 2 (heavy meeting day → Today's Two). Demo + S4 grooming both need prep this morning.
- **Key Focus:** Two big sessions back-to-back this afternoon — walk into grooming with the Sprint 4 agenda, then demo cleanly.

---

## Carrying over from yesterday (06-03)

- **Design lock async** — Amber's Figma sign-off. Was the EOD-Wed gate; overdue if it didn't land. Chase before the 09:00 huddle.
- **OTG import label logic** — standup blocker for Leo + clean demo data. Map/add/bucket per unmatched label.
- **OTEP-305 owner + OTEP-289 go/no-go** — standup carry → raise at 11:00.

---

## Today's Two

*(Heavy meeting day — ~3.75 hrs booked. Two, done well.)*

1. [ ] **Walk into 14:00 grooming with the Sprint 4 agenda** — the [S4 grooming agenda](../analyses/2026-06-03-sprint4-grooming-agenda.md) is ready. Land the 3 "do-without-debate" items (apply-first OTEP-319, split OTEP-87, demote Stream B) + the 3 decisions. This is the highest-leverage session today.
2. [ ] **Demo lands cleanly at 16:00** — localhost build (API conflict open). Frame as the local build, not integrated. Prep at the 09:00 huddle.

*Why these two: grooming sets Sprint 4's whole intake and the agenda's already built — your job is to land it; the demo is a stakeholder-influence moment that needs honest framing. Everything else flexes around these.*

---

## Schedule & Meeting Prep

> ✅ Live from Google Calendar (direct API pull, 2026-06-04).

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| 09:00–09:30 | Compass PMs huddle on demo | ⚠️ | Align on demo framing + who shows what. Set the localhost expectation here. |
| 11:00–11:15 | OTEP Team 2 stand-up | ✅ | Carry: OTEP-305 owner, OTEP-289 go/no-go, OTG logic status. Push apply-first (OTEP-319). |
| 14:00–16:00 | **[Weekly] Sprint planning / Backlog grooming** | ✅ | **Bring the [S4 grooming agenda](../analyses/2026-06-03-sprint4-grooming-agenda.md).** Land do-without-debate + the 3 decisions + dependency-gate owners. |
| 16:00–17:00 | [Bi-Weekly] OTEP Retro and Demo | ⚠️ | The demo. Two-tier format (working level) — each owner presents their own part. Localhost framing. |

---

## Standup Lens

- **OTEP-85 still unassigned + In Progress** (critical-path listing) — who owns it? PM call to make.
- **OTEP-319 (apply) still Backlog/unassigned** — the trio's apply-first call: push to assign Thomas ahead of filters.
- **Demo readiness** — listen for what's *not* demo-able yet; manage the localhost framing live.

---

## Tasks by Priority

### P0 — Must Do Today
- [ ] S4 grooming prep — review the [agenda](../analyses/2026-06-03-sprint4-grooming-agenda.md) before 14:00; pre-assign OTEP-319 to Thomas so apply-first is real, not just proposed.
- [ ] Demo readiness — confirm what's showable, set localhost framing at the 09:00 huddle.
- [ ] Design lock sign-off (Amber) — if still open from yesterday; blocks UI work.
- [ ] OTG import label logic — unblock Leo.

### P1 — Important This Week (carried — the Leverage set)
- [ ] **WOG Auth metrics → Adrian** — "this week" for 3+ days; sending closes the loop.
- [ ] **Feed Adrian the R1 resource ask** — 3 net-new R1 builds, 1 FE dev.
- [ ] **Drive R1 design alignment** with Amber (+ Michelle Chen).
- [ ] **Force the ATS fork (C1)** — World A vs B decision doc.
- [ ] **Share DoR update proposal** (Slack, ~10 min, already drafted).
- [ ] **🆕 SSOT decision doc** (consumer vs system-of-record) — run `/decision-doc`.

### P2 — If Time Allows
- [ ] Jobelle handover — Phoebe's copy (she joined 3 Jun).
- [ ] Full BAU block → [tasks-active.md Up Next](../../../PM-skills-ALL-1/00-hub/tasks-active.md).

---

## Heads Up

- 🔴 **14:00→16:00→17:00 is back-to-back** — grooming straight into demo, no gap. Do grooming prep + demo prep this morning (use the 09:00 huddle + the gaps before 11:00 and after). You won't get prep time after lunch.
- 🔴 **Demo at 16:00 on localhost** — API conflict (Thomas) still open. Frame as local build. Mon 8 Jun mid-sprint review needs the integrated story solid.
- 🔴 **Cumulus Phase 3 confirmation was due 4 Jun (today)** — open-item #36. Did the confirmation to Rama happen? Overdue if not.
- ⚠️ **Design lock** — if Amber's sign-off didn't land yesterday, engineers shouldn't start UI; it's blocking.
- ⚠️ **OTEP-85 + OTEP-319 unassigned** on the live board — assign OTEP-319 *before* grooming so apply-first is locked, not debated.
- 🔑 **Rotate the Jira token** — the one in chat is live but plaintext-exposed; regenerate + update `.env` and `.mcp.json`.

---

## Growth Nudge

Demo day is a stakeholder-influence rep: frame the localhost build honestly (what works, what's next) rather than overselling — managing expectations *is* the PM move here.

---

<details><summary>Appendix</summary>

**Sprint Pulse (live 2026-06-04):** OTEP-Pathfinder Sprint 3 (2–14 Jun), 49 issues — 6 In Progress, 12 QA, 4 Done, 27 Backlog. No story changes since last sync.

**Recently Completed (git, since 06-03):** Sprint 3 story/task files committed (91a2e53); sprint-status + sync-workflow + tasks-active updated; daily-plan live-Jira merge.

**This week's Top 3 (W23):** (1) Sprint 3 launch + close WoW overdue, (2) Sprint 3 ceremonies — DoR update + tech-debt proposal, (3) Stakeholder + data foundations (Clarissa, PostHog, POCDEX).

</details>

---

*Generated 2026-06-04 · Live Jira + Google Calendar (direct API) both pulled · Heavy meeting day → Today's Two · Next: `/meeting-notes` after grooming + the demo*
