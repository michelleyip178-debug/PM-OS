---
date: 2026-06-26
day: Friday
week: 2026-W26
sprint: S4 closes TODAY — S5 starts Sun 29 Jun
mcps_used: Google Calendar (direct API), Jira (live script)
---

# Daily Plan — Friday, 26 June 2026

## TL;DR

- **Meetings:** 4 — Squad Sync 9:30, Standup 11:00, Retro 14:00, Finalisation 15:00
- **P0:** Park OTEP-427 + OTEP-358 before 15:00 sprint close. QA tail of 10 will mostly carry.
- **Key focus:** Close S4 cleanly. Don't carry PM WIP into S5.

---

## Today's Three

1. [ ] **Park OTEP-427 + OTEP-358 to Backlog** — sprint closes at 15:00; both still In Progress per live Jira
2. [ ] **Ways of Working Retro (14:00)** — come in with 2 S4 learnings ready, not winging it
3. [ ] **Sprint 4 Finalisation (15:00)** — run `/archive`, document QA carry-in list, close S4 clean

---

## Schedule & Meeting Prep

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| 9:30–10:30 | OTEP Squad Sync | No prep | Debrief grooming output, discuss QA tail, align on S5 start state |
| 11:00–11:15 | OTEP Team 2 Standup | No prep | See Standup Lens — ask who's landing QA today |
| 14:00–15:00 | SHIP-HATS Webinar: New pCloudy Capabilities | Skip or background | Ways of Working Retro no longer on calendar — may be cancelled |
| 15:00–16:00 | Internal Demo Session | ⚠️ Team alignment beforehand | NEW — title says "Team Alignment Required Beforehand"; use 11:15–14:00 block to align team |
| 16:00–17:00 | Sprint 4 Finalisation | ⚠️ QA carry-in list | Shifted 1hr later; confirm Done count, document S5 carry-ins, run `/archive` |

**Free blocks:**
- **10:30–11:00** (30 min) → Park OTEP-427 in Jira
- **11:15–14:00** (2h45) → Park OTEP-358 + team alignment prep for 15:00 demo + draft R1 #40 ask if not sent
- After 17:00 → EOD cleanup, confirm S5 board state, any outstanding async

---

## Standup Lens

- **10 stories in QA — sprint closes today.** Ask which ones are landing this AM vs carrying to S5. Don't chase; just establish the carry-in list.
- **OTEP-305 (Keycloak login/logout) and OTEP-392 (federated logout)** are highest-risk — Keycloak dependency was flagged unresolved as of yesterday. Confirm or flag as S5 carry-in.
- **Michelle WIP: OTEP-427 + OTEP-358** both In Progress. Will park both before 16:00 finalisation.

---

## Heads Up

- **⚠️ OTEP-427 + OTEP-358 still In Progress** per live Jira — parking was flagged Thursday and didn't happen. Do both in the 10:30 block before standup.
- **⚠️ R1 #40 ask** — no file found in `outputs/decisions/` from Jun 24. If not sent to Mark, this is an open loop walking into S5. Use the 11:15 block to draft or confirm it was sent another way.
- **⚠️ Ways of Working Retro** — no longer on calendar; may be cancelled. Confirm with team at Squad Sync if it's moved or dropped.
- **⚠️ Internal Demo Session at 15:00** — "Team Alignment Required Beforehand" is in the title. Find out what alignment is needed and with whom; use the 11:15–14:00 block. Check with Imelda/Pow Hwee/Rama if this is the consolidated-narrative demo.
- **QA tail of 10** — accept that most carry to S5. Goal at finalisation is to document the list cleanly, not to force closes.
- **Sprint 4 Finalisation shifted to 16:00** — adjust your afternoon accordingly.
- **S5 starts Sunday 29 Jun** — board should be clean by EOD today; no open PM WIP.

---

## Growth Nudge

Go into retro with one concrete example of scope drift or a prioritisation tradeoff from S4 — that's roadmapping and prioritisation with real stakes, not ceremony participation.

<details><summary>Appendix — S4 Live State + Grooming Output</summary>

### Sprint 4 Live (2026-06-26, sprint close day)

| Status | Count | Notable |
|--------|-------|---------|
| In Progress | 12 | Michelle: OTEP-427 (ingestion), OTEP-358 (nil-date) |
| QA | 10 | OTEP-86, 268, 85, 305, 128, 284, 129, 438, 406, 392 |
| Done | 29 | OTEP-127 ✅, OTEP-397 ✅, OTEP-482 ✅ + 26 others |
| Backlog | 15 | — |

### QA Stories to Confirm Land vs Carry

| Story | Title | Risk |
|-------|-------|------|
| OTEP-305 | Login/Logout (Keycloak) | Keycloak dependency — likely S5 carry |
| OTEP-392 | Federated logout | Unresolved as of Thu — likely S5 carry |
| OTEP-86 | Filters by type | Longest in QA — confirm status |
| OTEP-268 | Empty/error states | Should be clear |
| OTEP-85 | Listing cards with OTG data | Should be clear |

### S5 Grooming Output (from yesterday)

Key decisions confirmed in grooming (notes: `outputs/meeting-notes/2026-06-25-sprint-planning-s5.md`):
- Ring-fencing: non-eligible opps don't appear in listing; direct URL = "not eligible" page, no Apply CTA
- Competency matching on listing cards + detail page confirmed
- New scope added: Nav bar (net-new story — needs Jira ticket)
- Policy still unresolved: grade visibility (Cumulus role-grade), competency sync, director exclusions

### W26 Priority Check

| Item | Status |
|------|--------|
| DevOps type name → 4-cat mapping to Xian Zhang | ✅ Actioned Mon |
| KR docs (3 KRs with numbers) | ✅ Done before Jace Thu |
| R1 jam #40 ask to Mark | ❓ No file found — verify |
| OTEP-427 park to Backlog | ⬜ Do before 15:00 today |
| OTEP-358 park to Backlog | ⬜ Do before 15:00 today |

</details>

---

*Generated: 2026-06-26*
*Sources: Google Calendar (direct API), Jira live script (jira-sprint.sh), W26 weekly plan, 2026-06-25 daily plan, S5 grooming notes*
*Next: `/archive` at 15:00 sprint finalisation · `/weekly-review` after EOD · `/weekly-plan` Mon AM for W27*
