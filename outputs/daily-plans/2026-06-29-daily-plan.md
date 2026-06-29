---
date: 2026-06-29
day: Monday
week: 2026-W27
sprint: Sprint 5 Day 1
mcps_used: [Google Calendar]
---

# Daily Plan — Monday, 29 June 2026

## TL;DR
- **Meetings:** 4 (standup 11am, nails 11:30, BO Working Level 3pm, Retro+Demo 4pm)
- **P0:** Nudge #43 at standup · verify #40 Mark ask · S5 board sweep
- **Key Focus:** Sprint 5 Day 1 — get the board healthy and two upstream asks in motion before the afternoon meetings

---

## Today's Three

1. [ ] **Standup: nudge #43 (Amber/Thomas BO sign-off) + flag S5 QA carry-in owners** — prevents rework spiral before it goes deeper
2. [ ] **Verify #40 Mark ask reached him; send if not** — unblocks entire R1 pipeline
3. [ ] **Retro+Demo (4pm): S4 demo + capture retro AIs** — closes out S4; demo was cancelled Fri, this is the reset

---

## Schedule & Meeting Prep

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| 8:30–9:00 | Sprint 5 Start | ✅ | Calendar placeholder — S5 officially kicks off today |
| 11:00–11:15 | OTEP Team 2 Standup | ⚠️ | Flag #43 (OTEP-439/386 BO sign-off); listen for QA carry-in blockers |
| 11:30–14:00 | Nails appointment | — | Personal — out of office |
| 15:00–16:00 | OTEP Product x BO — Working Level | ⚠️ | Bi-weekly; good moment to check attribution tracking progress (from Slack threads) + SSOT session status |
| 16:00–17:00 | OTEP Retro + Demo | ⚠️ | S4 retro + S4 demo. Retro: capture AIs. Demo: confirm dev env working before this. |

**Free blocks:** 9:00–11:00 (2hrs deep work) · 14:00–15:00 (1hr — batch admin/async)

---

## Standup Lens
- **#43 (OTEP-439/386):** Amber and Thomas moved to In Progress without BO sign-off on hide vs show-but-disable. Nudge before they go deeper — rework risk is real.
- **QA carry-ins (10 from S4):** Do all have owners and a next-action? OTEP-305/392 (Keycloak) were the S4 blockers — check if they're moving in S5.
- **OTEP-392:** Moved to QA overnight (Thomas assigned) ✅ — good signal, mention at standup.

---

## Tasks

**P0 — must move today:**
- [ ] Verify #40 Mark ask (check Slack/email for evidence it was sent after the jam; if not found, send Mon AM)
- [ ] Standup: nudge #43 + confirm QA carry-in owners
- [ ] Confirm dev environment working before 4pm Retro+Demo

**P1 — important this week, batch in free blocks:**
- [ ] BO Working Level (3pm): check attribution tracking status + nudge SSOT session booking; raise OTEP-111 AC gap ("user in WOGAD but not in POCDEX" — what's the behaviour? PM decision needed)
- [ ] Standup: assign Pow Hwee to chase #31 POCDEX UAT env (Core team: Pei Ern/Kingsley) — blocking S5 WOG AD gate
- [ ] Standup: assign Pow Hwee to resolve push vs pull production profile loading (PRD vs new POCDEX doc) — before S5 auth stories groom
- [ ] Standup: assign OTEP-445 (POCDEX code table spike) to someone — sitting To Do with no owner
- [ ] Start KR Word doc draft (due Jace ~3 Jul Thu) — use 9–11am block if #40 resolves fast
- [ ] Check if S4 demo is ready: who's presenting, what's the flow

**P2 — if time:**
- [ ] CEG invoice (#48) — 10 min admin, batch with 2–3pm slot
- [ ] Nudge Ram on SSOT session if not confirmed booked

---

## Heads Up

- ⚠️ **S4 Demo at 4pm** — was cancelled Fri due to broken dev env. Confirm it's fixed *before* the meeting, not during. This is an S4 retrospective demo, not S5.
- ⚠️ **Nails 11:30–2pm** — effectively no working time 11–3pm. Everything P0 needs to happen 9–11am or be async.
- ⚠️ **#40 urgency** — if the Mark ask wasn't sent last week, every day it sits unconfirmed delays R1 grooming readiness. Do this first at 9am.
- ⚠️ **S5 board is showing S4 data in Jira** — sprint may not have flipped yet. Check Jira board at standup; if still showing S4, flag to Pow Hwee.

---

## Growth Nudge
The standup nudge on #43 is a stakeholder influence moment — framing it as "before we go deeper, let's make sure BOs are aligned" rather than "this is wrong" is the difference between protecting the team and creating friction.

<details><summary>Appendix — Sprint context + Jira changes</summary>

## Jira Changes Overnight (S4 → S5 transition)
| Story | Change |
|-------|--------|
| OTEP-536 | In Progress → Done |
| OTEP-427 | In Progress → Done ✅ (Michelle's spike) |
| OTEP-358 | In Progress → Done ✅ (Michelle's spike) |
| OTEP-386 | Backlog → In Progress (Thomas — #43 risk) |
| OTEP-439 | Backlog → In Progress (Amber — #43 risk) |
| OTEP-392 | In Progress → QA (Thomas assigned) |

## S4 Final State (carried into S5)
- **QA (10):** OTEP-86, 85, 128, 129, 268, 284, 305, 392, 406, 438
- **In Progress (12):** OTEP-88, 276, 322, 349, 350, 361, 386, 405, 439, 495, 505, 539
- **Michelle PM stories:** All Done at S4 close ✅

## W27 Weekly Priorities (for reference)
1. S5 sprint start — demo + board health + open items
2. #40 Mark ask + KR Word doc to Jace (due ~3 Jul)
3. November go-live brief to Jace (by Fri)

</details>

---
*Generated: 2026-06-29 | Sources: Google Calendar, Jira (jira-sprint.sh + .changes.md), W27 weekly plan*
*Next: `/meeting-notes` after Retro+Demo to capture AIs*
