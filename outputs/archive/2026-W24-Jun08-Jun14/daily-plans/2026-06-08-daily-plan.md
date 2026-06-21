---
date: 2026-06-08
day: Monday
week: 2026-W24
sprint: Sprint 3, Day 5 (Week 2)
mcps_used: [Jira (live — jira-sprint.sh), Google Calendar (live API)]
---

# Daily Plan — Monday, 8 June 2026 (Sprint 3 W2 — Mid-sprint Review day)

## TL;DR

- **Meetings:** 4 today — Mid-Sprint Review (10:30), Standup (11:00), OTG H/O POCDEX & Data Pipeline (15:00), Edge Cases & Error States (16:00)
- **P0 Count:** 3 — book Daryll + Fabian (both before 15:00), sprint goal pulse at 10:30
- **Key Focus:** W24 theme is bookings. Both S5 gate sessions need to go out today — Daryll's due Saturday. Everything else is in service of Thu Sprint Planning.

---

## Today's Three

1. [ ] **Sprint goal signal: are OTEP-319 (apply) + OTEP-86 (filters) moving?** — Raise in Mid-Sprint Review; if still Backlog end of today, draft the S4 fallback goal now (don't wait for Thu).
2. [ ] **Book Daryll (POCDEX) + Fabian (WOG AD) — before 15:00** — Daryll's CP item #2 is due Sat 13 Jun; Fabian's 2+ wk clock hasn't started. Both are calendar-send tasks, no prep needed. Use the 11:15–15:00 block.
3. [ ] **OTG H/O debrief: capture + triage PM actions** — the 15:00 POCDEX & Data Pipeline session is a wildcard. Triage everything before EOD so nothing bleeds into Tue unowned.

**Also due before Wed (use 11:15–15:00 block today or Tue morning):**
- [ ] Send ARK request email for Jobelle
- [ ] Review monthly progress report for OTG
- [ ] Set up Working Level deck for WD's update

---

## Schedule & Meeting Prep

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| 10:30–11:00 | Pathfinder Internal Mid-Sprint Review | ⚠️ Needs prep | Check: QA tail, sprint goal tickets still Backlog, OTEP-85 ownership. This is the pulse check — flag real blockers, don't present status. |
| 11:00–11:15 | OTEP Team 2 Standup | ✅ | Right after mid-sprint review — use context from 10:30 to sharpen what you listen for. |
| 15:00–16:00 | OTG H/O — Session 1: POCDEX & Data Pipeline | ⚠️ Needs prep | Handover session — likely covers POCDEX integration steps and OTG data pipeline ownership. Connects directly to open items #31 (Daryll session) and #35 (nil-date spike). |
| 16:00–16:30 | Discussion on Edge Cases and Error States | ⚠️ Needs prep | Likely about OTEP-268/325/326 QA tail or OTEP-128 AC gaps. Check who called this meeting. |

**Free blocks:** 11:15–15:00 (3h 45min — best window for P0 bookings + Sprint Planning prep), 16:30+ (evening)

---

## Standup Lens

- **OTEP-85 (listing cards w/ real data) still In Progress and unassigned** — 5 days in, no owner. This is the foundation for filters. Flag at standup.
- **OTEP-319 (apply) still Backlog, nobody picked it up** — not in anyone's active work per W23 status report. If no answer today, sprint goal is effectively dead.
- **Thomas has 3 active/queued items** (OTEP-362, OTEP-368 In Progress + OTEP-381 FE filters Backlog) — OTEP-380 BE filters is in QA (Léo shipped it), but FE half needs Thomas. Ask: when does OTEP-381 start?
- **OTEP-276 (design-system spike, Pow Hwee)** — re-prioritised to In Progress W23 despite OTEP-252 being Done. Ask what's still outstanding.

---

## Heads Up

- **3 days to Sprint Planning (Thu 11 Jun)** — S4 goal, C@G scope, and OTEP-127/130 in-or-out decisions all still open. This week is the last window to land them.
- **POCDEX CP item #2 due Sat 13 Jun** (Daryll's team) — if the POCDEX H/O session at 15:00 doesn't produce a confirmed session with Daryll, book it directly today.
- **OTG H/O is new context** — the POCDEX & Data Pipeline handover may shift assumptions about S3 ingestion (OTEP-192/348) or S4 scope. Stay open to replanning after the call.
- **OTEP-391 (Hao Eng, Backlog)** added to Pathfinder S3 in Jira this sync — new ticket, unknown scope. Check what it is.
- **OTEP-370 flagged** — file exists in local cache but Jira says "Issue does not exist or you do not have permission." Verify with Pow Hwee if it was deleted or moved.

---

## Growth Nudge

The mid-sprint review is a forcing function for outcomes thinking: instead of reporting on ticket counts, anchor every status update to the sprint goal question — "can an officer filter and apply today?" That's the only number that matters on Thursday.

<details><summary>Appendix — Sprint state, carry-overs, open items</summary>

### Sprint 3 state (live — 2026-06-08)

**Pathfinder S3:** 49 issues — 4 Done, 6 In Progress, 14 QA, 25 Backlog.

In Progress (6): OTEP-85 (listing cards, unassigned), OTEP-192 (OTG ingestion, Léo), OTEP-276 (design-system spike, Pow Hwee), OTEP-322 (Playwright E2E, Rathika), OTEP-362 (BE no closed opps, Thomas), OTEP-368 (session expiry, Thomas).

Sprint goal tickets (still Backlog): OTEP-319 (apply via FormSG), OTEP-86 (filter by type), OTEP-317 (clear filters).

**Core S3:** 96 issues — 32 Done, 9 In Progress, 28 QA, 26 Backlog, 1 To Do.

### Carry-overs from last plan (Fri 5 Jun)

- [ ] Book S4 C@G/apply grooming — still open
- [ ] Book WOG AD session → Fabian (#26) — still open
- [ ] Book POCDEX session → Daryll (#31) — still open (URGENT: due Sat 13 Jun)
- [ ] Confirm C@G payload with Pow Hwee — still open
- [ ] WOG Auth metrics → Adrian — still open

### Urgent open items (#31 POCDEX due this week)

- **#31 POCDEX** — Daryll's team CP item #2 due 13 Jun. Book session today.
- **#26 WOG AD** — Fabian; 2+ wk lead time. Every day delayed pushes S5 auth.
- **#40 R1 scope** — awaiting Mark confirmation before R1 sprint planning.
- **#35 Nil-date spike** — OTEP-358, Michelle-owned, before S4 planning.

</details>
