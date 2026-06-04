---
date: 2026-06-04
day: Thursday
week: 2026-W23
sprint: Sprint 3, Day 3
mcps_used: [Google Calendar (live, direct API), Jira (live)]
updated: 2026-06-04 (afternoon refresh — post 9am meeting, demo + grooming prepped)
---

# Daily Plan — Thursday, 4 June 2026 (Sprint 3, Day 3) — DEMO + S4 GROOMING

## TL;DR

- **Where the day is:** 9am meeting done (3 decisions logged), demo + grooming both prepped. Afternoon = run grooming 14:00, demo 16:00.
- **P0 left:** 2 — land the S4 grooming, demo cleanly. Both prep is done; now it's execution.
- **Key Focus:** Walk into grooming and lock the Sprint 4 goal + the do-without-debate three; then demo the spine honestly.

---

## Done this session (was P0/carry this morning)

- ✅ **9am meeting** — logged 3 decisions: UAT in Compass UAT env / QA env for AC verification; sprint closes when **BO** moves stories UAT→Done (eng moves sub-tasks); OTEP-348 sharpen flagged.
- ✅ **Demo prepped** — [run sheet](../meeting-notes/2026-06-04-sprint2-demo-runsheet.md) with goal-vs-achieved scorecard + "spine proven, not goal met" framing.
- ✅ **Grooming prepped** — [grooming brief](../analyses/grooming-brief-2026-06-04.md) (readiness scorecard, Pow Hwee Q&A, OTEP-348 sharpened ACs + test plan) + [S4 anticipated scope](../analyses/2026-06-04-sprint4-anticipated-scope.md).
- ✅ **Jira-sync Pathfinder S4** — board reshaped: OTEP-71 dropped out; 283/284 in; 328/329/386 new. C@G/apply carry-over not on the board yet (S3-dependent).

---

## Today's Two (this afternoon)

1. [ ] **Land the 14:00 grooming** — lock the Sprint 4 goal (still undecided — see Heads Up), confirm the 3 do-without-debate (apply-first OTEP-319, split OTEP-87, demote Stream B), assign dependency-gate owners. Bring the [grooming brief](../analyses/grooming-brief-2026-06-04.md).
2. [ ] **Demo lands cleanly at 16:00** — working-level, eng demos own parts. Claim the spine as proven; name "in QA vs Done" once. [Run sheet](../meeting-notes/2026-06-04-sprint2-demo-runsheet.md).

*Why these two: both prep is done — the rep now is in the room, not the doc. Grooming sets all of Sprint 4's intake; the demo is the stakeholder-influence moment.*

---

## Schedule & Meeting Prep

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| ~~09:00~~ | ~~PMs demo huddle~~ | ✅ done | Framing aligned; run sheet built. |
| 11:00–11:15 | OTEP Team 2 stand-up | ✅ | Push apply-first (OTEP-319 still Backlog/unassigned). Carry: OTEP-305 owner, OTEP-289 go/no-go. |
| 14:00–16:00 | **[Weekly] Sprint planning / Backlog grooming** | ✅ | **Lock the S4 goal + do-without-debate three.** Fix OTEP-87 AC conflict in Jira *before* this. |
| 16:00–17:00 | [Bi-Weekly] OTEP Retro and Demo | ✅ | Demo (spine proven) + retro (one improvement: Done=journey-to-BO not foundation-to-QA; one win: Thomas solo FE vs design lock). |

---

## Standup Lens

- **OTEP-319 (apply) still Backlog/unassigned** — push to assign Thomas ahead of filters *before* grooming, so apply-first is locked not debated. Highest-leverage PM move.
- **OTEP-85 still In Progress, unassigned** (critical-path listing cards) — who owns it?
- **BO-Done gate (new today):** confirm who the BO ticket-mover is per pipeline, or stories pile up "ready for BO" and the sprint can't close.

---

## Tasks by Priority

### P0 — Before 14:00
- [ ] **Fix OTEP-87 AC conflict in Jira** — remove FormSG, point C@G CTA to deep-link (OTEP-89). Pow Hwee flagged it twice; land it before he catches it a third time.
- [ ] **Assign OTEP-319 to Thomas** — makes apply-first real, not proposed.
- [ ] **Decide the Sprint 4 goal** — react to the drafted options (breadth-led vs honest-catch-up). Needed to open grooming with an outcome.

### P1 — Important This Week (carried)
- [ ] **WOG Auth metrics → Adrian** — "this week" for 3+ days; close the loop.
- [ ] **R1 resource ask → Adrian** — 3 net-new R1 builds, 1 FE dev.
- [ ] **Force the ATS fork (C1)** — World A vs B decision doc.
- [ ] **SSOT decision doc** (consumer vs system-of-record) — gates OTEP-87 competency block.
- [ ] **Confirm Sprint 4 dates** — allocation says 16–27 Jun; live Jira Sprint 34618 = 14–28 Jun (sync flagged).

### P2 — If Time Allows
- [ ] Fold the 5 new S4 board tickets (283/284/328/329/386) into the anticipated-scope doc as a net-new stream.
- [ ] Full BAU block → [tasks-active.md Up Next](../../../PM-skills-ALL-1/00-hub/tasks-active.md).

---

## Heads Up

- 🔴 **No Sprint 4 goal locked** — you're about to groom S4 without the one sentence. Decide it before 14:00, or grooming sizes a ticket list instead of an outcome (the Sprint 2 plumbing-vs-promise trap).
- 🔴 **16:00→17:00 demo, localhost build** — API conflict (Thomas) may still be open. Claim the spine as proven; don't oversell as integrated. Mon 8 Jun mid-sprint needs the integrated story.
- 🔴 **Cumulus Phase 3 confirmation was due today** (open-item #36) — did the confirmation to Rama happen?
- ⚠️ **OTEP-71 / date drift in sprint-allocation.md** — jira-sync flagged; allocation still lists OTEP-71 in S4 (Jira moved it out) and dates are off by 2 days.
- ⚠️ **WOG AD UAT may now be unblocked** — the new UAT-env decision could weaken the "no WOG AD UAT" reason auth was deferred to S5. Worth a check, not a reopen.
- 🔑 **Rotate the Jira token** — exposed plaintext in chat; regenerate + update `.env` and `.mcp.json`.

---

## Growth Nudge

Roadmapping rep today: the Sprint 4 goal call. You've framed carry-over as "anticipated" (right honesty) — but don't let that defer the goal decision. Pick the outcome, commit, then let the tickets flex under it.

---

<details><summary>Appendix</summary>

**Sprint Pulse (live 2026-06-04 PM):** OTEP-Pathfinder Sprint 3 (34617, 2–14 Jun), 49 issues — **4 Done, 6 In Progress, 12 QA, 27 Backlog.** Unchanged since this morning — no goal-spine movement (319 apply, 86 filter, 192 ingest all still Backlog).

**Sprint 4 board (live, Sprint 34618, future, 14–28 Jun, 7 issues):** OTEP-110, 304 (auth), 329 (Keycloak secret, Pow Hwee), 328 (OpenTelemetry), 283 (Ministry icons), 284 ("closing soon"), 386 (type tooltip). **None of the C@G/apply carry-over on the board yet** — lands at S3 close.

**Session artifacts created today:** demo run sheet · grooming brief (+ OTEP-348 sharpen) · S4 anticipated-scope doc · 3 decisions logged · S4 jira-sync.

**This week's Top 3 (W23):** (1) Sprint 3 launch + close WoW overdue, (2) Sprint 3 ceremonies — DoR + tech-debt proposal, (3) Stakeholder + data foundations (Clarissa, PostHog, POCDEX).

</details>

---

*Updated 2026-06-04 afternoon · Live Jira + Calendar pulled · Reflects post-9am-meeting state · Next: `/meeting-notes` after grooming + demo*
