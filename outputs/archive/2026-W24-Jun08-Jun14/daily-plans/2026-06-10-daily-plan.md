---
date: 2026-06-10
day: Wednesday
week: 2026-W24
sprint: Sprint 3, Day 7 (Week 2) — 2 days to end (Fri 12 Jun)
mcps_used: [Jira (live — jira-sprint.sh)]
---

# Daily Plan — Wednesday, 10 June 2026

## TL;DR

- **Meetings:** 3 today — Standup (11:00) ✅, OTEP Product × BO Senior (13:00) ✅, Dependencies Sync-Up rescheduled → Thu 11 Jun
- **P0 Count:** 3 — WOG AD form (today deadline), UI PRD scope (unblocks Hao Eng), S4 goal confirmed ✅
- **Key Focus:** WOG AD form before EOD. Dependencies Sync at 16:00 — go in with Core API reviewed + four Imelda asks ready.

---

## Carry-Over from Tue 9 Jun

- [x] ~~**Send ARK request email for Jobelle**~~ — ✅ sent to Adrian for approval
- [x] ~~**Draft S4 goal + frame C@G stories for Thu Planning**~~ — ✅ drafted; confirm at Planning tomorrow
- [x] ~~**Book Imelda (CSC SSO + competency SSOT)**~~ — covered by Dependencies Sync-Up at 16:00 today ✅
- [ ] **Review monthly progress report for OTG** — ⚠️ still due today

## New from Standup (10 Jun)

- [x] **Fill WOG AD form** — done by Pow Hwee 2026-06-10; 2-4 week approval clock running (open item #26)
- [ ] **UI PRD scope** — Hao Eng holding UI work until Michelle provides PRD; define scope before S4 starts
- [ ] **C@G description structure** — Thomas raised in standup; needs answer before Planning tomorrow (affects OTEP-87 ACs)

Outcomes from Tue unknown (no calendar MCP) — check if Design Review landed S4 design priorities and if PM Weekly assigned SteerCo deliverable ownership.

---

## Today's Three

1. [x] **Fill WOG AD form** — done by Pow Hwee 2026-06-10; 2-4 week approval clock running (open item #26)
2. [ ] **Dependencies Sync (16:00): get Imelda answers on #18/#30** — review Core's API before 16:00; four asks ready
3. [ ] **Define C@G description structure + UI PRD scope** — Thomas needs description structure before Planning; Hao Eng blocked on UI PRD

---

## Schedule & Meeting Prep

| Time | Meeting | Prep | Context |
| ---- | ------- | ---- | ------- |
| 11:00–11:15 | Standup | ✅ | Sprint 3 Day 7. Sprint goal (OTEP-86/319) still Backlog — listen for any pickup signal. Thomas has OTEP-381 (FE filtering) In Progress. OTEP-362 moved to QA since yesterday. |
| 13:00–14:00 | OTEP Product × BO (Senior, bi-weekly) | ⚠️ Needs prep | Bring: sprint goal status (filters + apply = Backlog, 2 days to end), honest S4 goal framing. Frame it as "here's what we're prioritising and why" not a problem. |
| 16:00–16:45 | ~~Dependencies Sync-Up with Core team~~ | ↪ Rescheduled to Thu 11 Jun | Four Imelda asks still open (#18/#30): integration method, schema, timeline, competency mapping. |

**Free blocks:** 09:00–11:00 (2h — OTG report + S4 goal review), 11:15–13:00 (1h 45min — S4 Planning prep), 14:00–16:00 (2h — story sizing / OTEP-87 Jira cleanup)

---

## Standup Lens

- **OTEP-86 (filters) + OTEP-319 (apply) still Backlog** — sprint ends in 2 days. If neither has been picked up by today's standup, the sprint goal is officially lost. Listen for any signal; don't pressure — just note for S4 honest framing.
- **OTEP-381 (FE filtering params, Thomas)** In Progress — this is the sub-task under OTEP-86. Ask if OTEP-86 (the parent story) is expected to close this sprint or carry to S4.
- **OTEP-85 (listing cards/real data) unassigned** — raised at Mon mid-sprint review; check if an owner was confirmed at Tue Squad Sync.
- **OTEP-362 moved to QA** — good signal; let it land without ceremony.

---

## Heads Up

- **Thu Sprint Planning in 1 day** — S4 goal must be ready today or you walk in cold tomorrow. Non-negotiable window: 11:15–13:00.
- **OTEP-127 + OTEP-130 in-or-out** — both on the S4 board but uncontracted. Needs a call before Planning. Quick async decision: pull them or label "13=unknown."
- **Open-item #26 (WOG AD form)** — Fabian provided the form; it's waiting on Michelle to fill it in. Not due today but if S4 includes auth stories, this needs to move this week.
- **OTEP-87 Jira description still has FormSG/Internal Jobs language** — quick cleanup needed before Planning; 10 min, do it in the 14:00–16:00 window.

---

## Growth Nudge

The BO meeting at 13:00 is a framing exercise — what story do you tell about S3 close and S4 direction to a senior audience that landed them in QA/Done progress and didn't mention the Backlog sprint goal as a failure? That's stakeholder influence, not just a status update.

---

<details><summary>Appendix</summary>

### Sprint Stories — Pathfinder Sprint 3 (live 2026-06-10)

**Live snapshot (jira-sprint.sh, 2026-06-10):**

**In Progress (7):** OTEP-381 (FE filtering, Thomas), OTEP-368 (session expiry, Thomas), OTEP-192 (OTG ingestion, Léo), OTEP-85 (cards/real data, unassigned), OTEP-322 (Playwright, Rathika), OTEP-276 (design-system spike, Pow Hwee), OTEP-391 (virus scanning spike, Hao Eng)

**In QA (14):** OTEP-380, OTEP-369, OTEP-268, OTEP-326, OTEP-325, OTEP-320, OTEP-170, OTEP-128, OTEP-334, OTEP-327, OTEP-314, OTEP-362, OTEP-332, OTEP-324

**Done (5):** OTEP-193, OTEP-288, OTEP-296, OTEP-313, OTEP-303

**Backlog (22 — sprint goal lives here):** OTEP-86, OTEP-317, OTEP-88, OTEP-374, OTEP-375, OTEP-87, OTEP-377, OTEP-378, OTEP-89, OTEP-319, OTEP-305, OTEP-129, OTEP-363, OTEP-367, OTEP-289, OTEP-348, OTEP-349, OTEP-350, OTEP-351, OTEP-352, OTEP-358, OTEP-361

### Delta since yesterday (2026-06-09 → 2026-06-10)

| Story | Change |
|-------|--------|
| OTEP-362 | In Progress → QA (Thomas) |

### Weekly Priorities (W24)
1. Sprint 3 close + S4 goal locked before Thu Planning ← **today's entire focus**
2. Unblock S5 gates — Imelda still open (#18/#30)
3. July SteerCo deliverables — ownership (from Tue PM Weekly, outcome unknown)

### S4 Goal Options (for today's drafting)

**Breadth-led (if OTEP-86/319 close before Fri):** Officer can filter opportunities by type, initiate a FormSG redirect apply, and view C@G opportunities — full sprint goal delivered.

**Fallback (if sprint goal stays Backlog):** S4 focuses on C@G breadth (88/87/89) + OTG apply verified (OTEP-319 carried forward). Sprint goal = "an officer can see and deep-link to C@G opportunities."

**Honest framing for Thu Planning:** Don't copy-paste S3 goal. Name what's actually achievable in 2 weeks.

</details>

---
*Generated: 2026-06-10*
*MCPs used: Jira (live — jira-sprint.sh). No Calendar MCP — meeting schedule from weekly plan.*
*Next: `/meeting-notes` after BO meeting · `/sprint-plan-prep` before Thu 14:00 Planning*
