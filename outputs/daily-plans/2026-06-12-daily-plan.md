---
date: 2026-06-12
day: Friday
week: 2026-W24
sprint: Sprint 3, Day 9 (FINAL DAY) — S3 ends today; S4 starts Mon 15 Jun
mcps_used: [Jira (live — jira-sprint.sh + jira-sync.py), Google Calendar (live — direct API, re-authed 12 Jun)]
---

# Daily Plan — Friday, 12 June 2026

## TL;DR

- **Meetings:** 4 — OTG Opportunities (09:00), OTEP Squad Sync (09:30, overlaps), standup (11:00), Sprint 3 Finalisation (15:00).
- **P0 Tasks:** 3 — sprint summary to Confluence, S4 board reconciled before Mon, OTEP-87 ACs fixed.
- **Key Focus:** Land Sprint 3 cleanly. Sprint goal partially met (filters + apply both in QA now) — close S4 prep gaps before Monday's start.

---

## Carry-Over from Thu 11 Jun

- [ ] **Fix OTEP-87 AC conflict** — FormSG vs C@G deep-link; Pow Hwee flagged ×2. Due before S4 Mon 15 Jun.
- [ ] **Call OTEP-127 + OTEP-130 in-or-out** — on S4 board, un-contracted. Flag or pull before Mon.
- [ ] **Reconcile S4 board to plan** — spine (319/86/87/88/89/192) not pulled forward yet; OTEP-71 verify.
- [ ] **Draft UI PRD scope for Hao Eng** — he's blocked on UI work (OTEP-438 placeholder) until this lands.
- [ ] **Review monthly OTG progress report** — overdue from Wed 10 Jun.

---

## Today's Three

1. [ ] **Sprint summary to Confluence** — due today; closes the sprint cleanly for stakeholders. Draft it before the 15:00 Finalisation so that meeting confirms rather than scrambles.
2. [ ] **Reconcile S4 board + fix OTEP-87 ACs before Mon** — S4 starts Monday; un-reconciled board = planning chaos day one. Pull the spine (319/86/87/88/89/192), call OTEP-127/130 in-or-out.
3. [ ] **Frame the S3 carry-in honestly at Finalisation (15:00)** — apply (OTEP-319) and filters (OTEP-86) sit in QA; name what lands vs what carries to S4 with the live Jira numbers.

*Why these three: it's the final day. Closing S3 (summary, finalisation) and de-risking S4's Monday start are the only things that can't slip to next week.*

---

## Schedule & Meeting Prep

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| 09:00–10:00 | **OTG Opportunities → CareerCompass** (Teams) | ✅ Taking live | Your pick over Squad Sync. Which OTG opps come into CareerCompass shapes listing scope — directly feeds S4's "usable listing" goal. |
| 09:30–10:30 | **OTEP Squad Sync** (Teams) | ↪️ Async | Overlaps OTG (above) — catch notes/recording. Flag to the squad you're in the OTG session; ask for anything needing a PM call. |
| 11:00–11:15 | **OTEP Team 2 Standup** (Digi / Teams) | ✅ | Last standup of S3. Confirm final QA landings (OTEP-86/128/305/319) and what carries to S4. |
| 15:00–16:00 | **Sprint 3 Ends — Finalisation** | ⚠️ Bring numbers | Close-out, not a full demo/retro slot. Walk in with the carry-in list + sprint summary draft. Frame OTEP-319/86 (QA) honestly. |

⚠️ **9:00–10:00 conflict** — OTG Opportunities and OTEP Squad Sync overlap 30 min. Decide which you attend live before 09:00.

*Calendar pulled live via Google Calendar API (re-authed this morning — the old token had expired).*

---

## Standup Lens

- **Sprint goal final status** — OTEP-86 (filters) in QA, OTEP-319 (apply) still Backlog. Confirm what actually lands by EOD so the Review framing is accurate, not optimistic.
- **QA tail (8 items)** — OTEP-85/86/128/192/268/305/317/319 all in QA. Which clear today vs carry to S4? You own the carry-in narrative at Review.
- **OTEP-88 (C@G listing)** — was unassigned In Progress yesterday; now shows Done. Confirm it actually closed, not just moved.

---

## Heads Up

⚠️ **9:00 Squad Sync is async-only** — you're in OTG Opportunities live. Tell the squad before 09:30 and get the recording/notes so nothing needing a PM decision slips.

⚠️ **S4 starts Monday with an un-reconciled board** — spine stories (319/86/87/88/89/192) not pulled forward; OTEP-127/130 still un-contracted. Half a day today protects Monday.

⚠️ **OTEP-87 AC conflict still open** — Pow Hwee flagged twice. If it's not fixed before grooming, S4 auth/C@G work grooms dirty.

⚠️ **Sprint summary to Confluence is due today** — easy to drop on a ceremony-heavy Friday. Timebox it right after Review while the demo is fresh.

⚠️ **OTG monthly progress report still overdue** (since Wed). Either ship it today or explicitly defer with a date.

⚠️ **POCDEX CP item #2 due tomorrow (Sat 13 Jun)** — confirm with Pow Hwee it's on track before you log off (open item #31).

---

## Growth Nudge

The Retro is your moment to convert "we scoped the sprint goal too wide" into a roadmapping habit — bring the carry-in data, not blame. Owning that framing is outcomes thinking made visible to the team.

<details><summary>Appendix</summary>

### Sprint 3 Live State (jira-sync.py, 12 Jun — 46 issues, 22 changes since last sync)

| Status | Count | Key items |
|--------|-------|-----------|
| Done | 22 | incl. OTEP-88 (C@G listing now Done), OTEP-192 (OTG ingestion), OTEP-380/381 (filtering params), OTEP-332 (ref data repo) |
| In QA | 8 | OTEP-85 (cards), OTEP-86 (filters), OTEP-128 (detail), OTEP-192, OTEP-268 (empty/error), OTEP-305 (login/logout), OTEP-317 (clear filters), OTEP-319 (apply redirect) |
| In Progress | 12 | OTEP-89 (C@G deep-link), OTEP-324 (token rotation, Thomas), OTEP-349/351 (spikes), OTEP-350 (WOG AD, Fabian), OTEP-352 (POCDEX, Hao Eng), OTEP-361 (ADR forum), OTEP-391 (virus scan), OTEP-438 (admin placeholder, Hao Eng) |
| Backlog | 4 | OTEP-129 (open/closed pre-apply), OTEP-289 (filter-by-function spike), OTEP-348 (OTG scheduler), OTEP-358 (nil-date spike, Michelle) |

**Movement since Thu:** OTEP-88, 192, 332, 303, 380, 381 → Done. OTEP-319 (apply) moved Backlog → QA — sprint goal is closer than yesterday's read. Backlog shrank from 12 to 4.

### Sprint 4 Goal (agreed 2026-06-11)

"Deliver a complete, usable opportunity listing experience — officers can search, filter, and sort opportunities, understand what each type means, and trust the data they're seeing is current and accurate."

### Pre-Monday S4 Checklist

- [ ] Fix OTEP-87 ACs (binary competency + cascading filter order: Job family → function → agency)
- [ ] Call OTEP-127 / OTEP-130 in-or-out
- [ ] Pull spine into S4 board (319/86/87/88/89/192) + verify OTEP-71
- [ ] Confirm OTEP-405 (keyword search) / OTEP-406 (sort) created from yesterday's crunch
- [ ] UI PRD scope for Hao Eng (unblocks OTEP-438)

### Prep Deadlines (sprint calendar)

| Item | Due |
|------|-----|
| Demo script ready | EOD Thu 11 Jun (verify done) |
| Sprint summary to Confluence | **Fri 12 Jun (today)** |

### BAU Pointer

See `00-hub/tasks-active.md` (Up Next) for P1s this week: UI PRD for Hao Eng, WOG AD response to Adrian (#26), CSC SSO + Imelda syncs (#18/#30).

</details>
