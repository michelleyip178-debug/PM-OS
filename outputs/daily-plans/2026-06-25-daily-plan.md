---
date: 2026-06-25
day: Thursday
week: 2026-W26
sprint: S4 Week 2 (closes tomorrow Fri 26 Jun)
mcps_used: Google Calendar (direct API), Jira (live script)
---

# Daily Plan — Thursday, 25 June 2026

## TL;DR

- **Meetings:** 3 real + standup — Jace 8:45, standup 11:00, S5 Grooming 14:00-16:00
- **P0:** Grooming prep (Q1-Q3 OTG File Upload resolved?) + park OTEP-427 before sprint close tomorrow
- **Key focus:** Gate S5 clean. Grooming at 14:00 is the sprint's most important PM output today.

---

## Today's Three

1. [ ] **Jace check-in (8:45)** — KR docs ready? Raise VAPT timeline risk (Nov, not Oct). Hold PSFG as conditional.
2. [ ] **S5 Grooming (14:00-16:00)** — Use 9:15-11:00 block to prep story candidates list + confirm OTG File Upload Q1-Q3 are resolved. Run the DoR gate in the room.
3. [ ] **Park OTEP-427 to Backlog** — S4 closes tomorrow. Michelle still has 3 spikes In Progress (OTEP-127, OTEP-427, OTEP-358). Park OTEP-427 (ingestion logic — lowest urgency) before EOD so S5 board opens clean.

---

## Schedule & Meeting Prep

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| 8:45 | Checkin with Jace (SMRT) | ⚠️ KR docs + VAPT talking point | KR docs were due Wed EOD — confirm done. VAPT risk: surface Nov landing before SteerCo. |
| 11:00 | OTEP Team 2 standup | No prep | See Standup Lens |
| 14:00–16:00 | S5 Grooming | ⚠️ Story candidates + DoR check | Gate stories to S5 — OTG File Upload Q1-Q3 must be resolved before you walk in |

**Free blocks:**
- **9:15-11:00** (1h45) → Grooming prep: story candidates list, OTG File Upload Q1-Q3 final check, OTEP-427 park
- **11:15-14:00** (2h45) → Close OTEP-427 in Jira, review grooming order, lunch break, final brief scan
- **16:00+** → Sprint close prep for Fri; check #40 ask status if not sent

---

## Standup Lens

- **9 stories in QA with sprint closing tomorrow** — OTEP-305 (Keycloak login/logout) is the highest risk; ask if Keycloak dependency is resolved or flagging as S5 carry-in
- **OTEP-392 (Keycloak federated logout) still In Progress, unassigned** — who owns this? Get a name or park to S5 today
- **Michelle WIP (OTEP-127, OTEP-427, OTEP-358): all In Progress** — if no engineer is blocked on these today, that's the signal to park OTEP-427 now

---

## Heads Up

- **⚠️ Carryover check — R1 #40 ask:** Yesterday's plan had drafting the #40 ask to Mark as a post-jam output. Decisions folder shows nothing from 2026-06-24. If not drafted, add to today's 16:00+ block — can't take this to Mark until it's written.
- **⚠️ KR docs — status unknown:** Jace check-in is 8:45. If docs aren't finalized from last night, you have very little runway. Check before you leave for SMRT.
- **VAPT risk talking point:** Raise with Jace — Oct go-live is likely unachievable (VAPT + remediation up to 2 months after ~4 Sep UAT). Frame: "We should socialise a November landing before it surfaces at SteerCo."
- **PSFG hold:** Confirm "4 types confirmed; PSFG pending policy intent" — don't close this with Jace today.
- **OTEP-358 (nil-date, Michelle) moved In Progress** — wasn't expected from this sprint. Confirm scope and whether it parks or closes before Fri.
- **Sprint 4 Done count: 27** — OTEP-397 (upload spike) is Done. Good. Still 9 in QA to land by tomorrow EOD.
- **Strategic window:** 9:15-11:00 free (1h45) — right timing to run `/sprint-check` before grooming for a pre-planning brief on S5 shelf depth and gate state.

---

## Growth Nudge

Grooming is your highest-leverage PM act this week — you're not facilitating a conversation, you're bringing a recommendation on what's Ready vs what's gated, and holding the DoR line. That's roadmapping and prioritisation with real stakes.

<details><summary>Appendix — Sprint Stories + Context</summary>

### Sprint Stories — S4 Live (2026-06-25)

| Status | Count | Notable |
|--------|-------|---------|
| In Progress | 15 | Michelle: OTEP-127 (ringfencing), OTEP-427 (ingestion), OTEP-358 (nil-date) |
| QA | 9 | OTEP-86, 268, 85, 305, 128, 284, 129, 438, 406 |
| Done | 27 | OTEP-397 (upload spike, Michelle) ✅ |
| Backlog | 15 | |

### QA Tail to Watch (sprint closes tomorrow)

| Story | Risk |
|-------|------|
| OTEP-305 | Keycloak dependency — still unresolved? |
| OTEP-392 | In Progress, unassigned — federated logout |
| OTEP-86 | Filters — longest in QA |
| OTEP-128 | Detail page — should be clear |

### Carryover from W26 Weekly Plan

| Item | Status as of Thu AM |
|------|---------------------|
| KR docs (3 KRs with numbers) | ❓ Confirm done before Jace 8:45 |
| R1 jam #40 ask to Mark | ❓ Check if drafted — no file found in outputs/decisions/ from 2026-06-24 |
| OTEP-427 park to Backlog | ⬜ Do this today — don't carry into S5 |
| OTG File Upload Q1-Q3 (grooming gate) | ❓ Must be resolved before 14:00 |

### Story Changes Since Last Sync

Last sync: 2026-06-16 (sprint start). Changes file reflects sprint-start population, not intra-sprint moves. Live data above is current.

</details>

---

*Generated: 2026-06-25*
*Sources: Google Calendar (direct API), Jira live script (jira-sprint.sh), W26 weekly plan, 2026-06-24 daily plan*
*Next: `/meeting-notes` after Jace check-in · `/sprint-check` before grooming · `/archive` + retro Fri*
