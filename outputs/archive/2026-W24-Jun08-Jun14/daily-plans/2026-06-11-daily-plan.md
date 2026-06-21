---
date: 2026-06-11
day: Thursday
week: 2026-W24
sprint: Sprint 3, Day 8 (final stretch) — S3 ends Fri 12 Jun; S4 starts Mon 15 Jun
mcps_used: [Jira (live — jira-sprint.sh cache), Google Calendar API]
---

# Daily Plan — Thursday, 11 June 2026

## TL;DR

- **Meetings:** 5 today — APA appraisal (10:00), Standup (11:00), Dependencies Sync (11:30), Sprint 4 Planning (14:00), OTG Working Level (16:00)
- **P0 Count:** 3 — pre-Planning Jira cleanup (6 items), Dependencies Sync Imelda asks (#18/#30), UI PRD scope for Hao Eng
- **Key Focus:** APA session eats 10:00–11:00; Dependencies Sync is at 11:30 (not 16:00) — pre-Planning crunch is now 12:15–14:00 only.

---

## Carry-Over from Wed 10 Jun

- [ ] **Define C@G description structure for detail page** — Thomas needs before Planning
- [ ] **Create ticket: Keyword Search (OTEP-405)** — before Planning
- [ ] **Create ticket: Sort by Posted/Closing Date (OTEP-406)** — before Planning
- [ ] **Pull OTEP-281 (loading state) into S4 board** — before Planning
- [ ] **Create competency spike ticket (cross-squad)** — before Planning
- [ ] **Confirm OTEP-87 ACs: binary competency + cascading filter order** — before Planning
- [ ] **Review monthly OTG progress report** — was due Wed 10 Jun

---

## Today's Three

1. [ ] **Pre-Planning cleanup: create OTEP-405/406, fix OTEP-87 ACs, pull OTEP-281** — 6 carry-overs all gate today's 14:00 ceremony; unresolved = planning chaos
2. [ ] **Dependencies Sync: leave with Imelda answers on #18/#30** — integration method, schema, timeline for competency SSOT + CSC SSO ownership; 6-week chain starts here
3. [ ] **Draft UI PRD scope for Hao Eng** — he's blocked on UI work until this lands; can be a tight 1-pager

---

## Schedule & Meeting Prep

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| 10:00–11:00 | **APA Appraisal Writing Guidance** (Zoom) | ✅ | External session. Block is gone — pre-Planning window starts at 12:15, not 10:00. |
| 11:00–11:15 | **OTEP Team 2 Standup** (Digi / Teams) | ✅ | Sprint 3 Day 8. Last standup before sprint ends. Listen for OTEP-88 owner + sprint goal signal. |
| 11:30–12:15 | **Dependencies Sync-Up** (Digi) | ⚠️ Prep now | Four Imelda asks: (1) method (API/file/push), (2) schema + field names, (3) availability timeline, (4) OTG competency tag → OTEP bank mapping. CSC SSO ownership (#30). |
| 12:15–14:00 | **Free block — pre-Planning crunch** | 🔴 Only 1h45 | Create OTEP-405/406, fix OTEP-87 ACs, pull OTEP-281, competency spike ticket. Triage ruthlessly. |
| 14:00–16:00 | **Sprint 4 Planning / Backlog Grooming** | ⚠️ Do crunch items first | S4 goal (agreed): usable listing experience — search, filter, sort, data currency. Thomas WIP risk: 3 active items. |
| 16:00–17:00 | **OTG IT&WD Working Level Catch-up** (L2 Interstellar) | ⚠️ Needs prep | Check what's on the agenda — could be OTG progress report or Jobelle handover context. |

---

## Standup Lens

- **OTEP-319 (FormSG apply) + OTEP-86 (filters) = sprint goal** — both still Backlog. If neither moved today, sprint goal is missed; frame for S4 carry-in at Planning.
- **OTEP-88 (C@G listing) unassigned, In Progress** — who picked it up? Confirm before Planning or it'll slip into S4 without an owner.
- **Thomas: 3 active items** (OTEP-324 token rotation, OTEP-367 competency UI, OTEP-374 API fields) — WIP overload. Flag at planning: don't add more until one closes.

---

## Heads Up

⚠️ **Pre-Planning crunch is only 1h45 (12:15–14:00)** — APA (10:00) + Dependencies Sync (11:30) eat the morning. Prioritise: OTEP-87 ACs and OTEP-405/406 tickets. Drop the rest to async if needed.

⚠️ **OTG Working Level at 16:00 needs an agenda check** — could overlap with the monthly OTG progress report that's overdue from Wed.

⚠️ **OTEP-192 / Core architecture risk** — Pow Hwee flagged this async. Confirm alignment before S4 starts or it could break ingestion mid-sprint.

⚠️ **Competency dependencies meeting (Pow Hwee + Core team)** — still not scheduled (open item #41). Flag at Planning as a near-term gate for S4 work.

⚠️ **POCDEX CP item #2 due Sat 13 Jun** — confirm with Pow Hwee today that it's on track (open item #31).

---

## Growth Nudge

Sprint Planning is your highest-leverage roadmapping moment this sprint — locking the S4 goal and capacity split is the call that shapes the next two weeks. Come in with a view, not just a list.

<details><summary>Appendix</summary>

### Sprint 3 Live State (jira-sprint.sh, 11 Jun)

**Sprint 3 goal:** Officer can find relevant opps using filters and initiate an application to any active OTG opp (except SJRs), powered by live imported data.

| Status | Count | Key items |
|--------|-------|-----------|
| Done | 18 | OTEP-170/193/288/296/303/313/314/320/325/326/327/332/334/362/368/369/380/381 |
| In QA | 7 | OTEP-85 (listing cards), OTEP-86 (filters), OTEP-128 (detail), OTEP-192 (OTG ingestion), OTEP-268 (empty/error), OTEP-305 (login/logout), OTEP-317 (clear filters) |
| In Progress | 11 | OTEP-88 (C@G listing, unassigned), OTEP-276 (design-system spike), OTEP-322 (Playwright), OTEP-324 (token rotation, Thomas), OTEP-349 (competency spike), OTEP-350 (WOG AD, Fabian), OTEP-352 (POCDEX code table), OTEP-361 (ADR forum), OTEP-367 (Thomas), OTEP-374 (Léo), OTEP-391 (virus scanning, Hao Eng) |
| Backlog | 12 | OTEP-87/89/129/289/319/348/351/358/363/375/377/378 |

**Sprint goal assessment:** OTEP-86 is in QA (filters progressed). OTEP-319 (FormSG apply) and OTEP-88 (C@G listing) still in Backlog/unassigned In Progress. Sprint goal partially met — filters likely land; apply redirect carries to S4.

### Sprint 4 Goal (agreed 2026-06-11 planning)

"Deliver a complete, usable opportunity listing experience — officers can search, filter, and sort opportunities, understand what each type means, and trust that the data they're seeing is current and accurate."

### Key Open Items (from open-items.md)

| # | Item | Status |
|---|------|--------|
| #18 | Competency SSOT — method, schema, timeline (Imelda) | 🟡 Source confirmed, details TBC |
| #30 | CSC SSO ownership + feasibility deep-dive | 🔴 Open — feasibility next step |
| #31 | POCDEX CP item #2 due 13 Jun | 🟡 Pow Hwee + Daryll working |
| #35 | OTEP-358 nil-date spike (Léo / Michelle) | 🔴 Before S4 planning |
| #39 | VAPT scope confirmation before S07 | 🟡 Timeline confirmed, scope TBC |
| #40 | R1 scope confirmation — Mark | 🔴 Awaiting Mark sign-off |
| #41 | Competency dependencies meeting (Pow Hwee + Core) | 🔴 Not yet scheduled |
| #42 | WOG AD infra follow-up (Pow Hwee) | 🔴 Pow Hwee to chase infra |

### Pre-Planning Crunch Checklist

- [ ] Create OTEP-405: [FE/BE] Keyword Search
- [ ] Create OTEP-406: [FE] Sort by Posted/Closing Date
- [ ] Pull OTEP-281 (loading state) into S4 board
- [ ] Create competency spike ticket (cross-squad: Pathfinder + Core + Intel/AI)
- [ ] Fix OTEP-87 ACs: binary competency matching + cascading filter order (Job family → Job function → Agency)
- [ ] Confirm OTEP-192 / Core architecture alignment with Pow Hwee

### BAU Pointer

See `00-hub/tasks-active.md` (Up Next) for P1s this week: UI PRD for Hao Eng, WOG AD response to Adrian, CSC SSO + Imelda syncs.

</details>
