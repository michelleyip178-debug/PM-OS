---
date: 2026-06-22
day: Monday
week: 2026-W26
sprint: S4 Week 2 (closes Fri 26 Jun)
mcps_used: [Google Calendar, Jira live script]
---

# Daily Plan — Monday, 22 June 2026

## TL;DR
- **Meetings:** 2 (Opportunity Categories 10:00, Standup 11:00)
- **P0 tasks:** 3 — KR docs due today, 4-cat mapping post-chat, PM WIP decision
- **Key Focus:** Monday is your only real execution day this week. Everything gates on the 10:00 chat — run the chain fast after it.

---

## Today's Three

1. [ ] **10:00 chat: confirm OTG type name → send 4-cat mapping to Xian Zhang** — this unlocks OTEP-86 ACs, S5 grooming stories, and Xian Zhang's analysis. Leave the meeting with a written confirmation (Slack/email), not a verbal.
2. [ ] **Mid-year KR docs — 3 KRs with numbers or artifacts (due today)** — check Thomas (opportunities funnel tracking) and Léo (ingestion accuracy) before writing targets. Jace check-in is Thu.
3. [ ] **PM WIP decision: park OTEP-427 to Backlog** — you have 3 In Progress (OTEP-127, OTEP-397, OTEP-427). Carrying all 3 into the sprint close creates board noise. OTEP-427 (ingestion tighten) is the lowest-urgency; park it.

---

## Schedule & Meeting Prep

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| 10:00–10:30 | Opportunity Categories in CareerCompass | ✅ Have 4-cat mapping draft ready | DevOps type name gate — confirm display-only vs schema change; come out with written decision |
| 11:00–11:15 | OTEP Team 2 standup | No prep needed | See Standup Lens below |

**Free blocks today:**
- Before 10:00 (~1.5 hrs) → Write KR doc draft; prep 4-cat mapping for chat
- 10:30–11:00 (30 min) → Send 4-cat mapping to Xian Zhang immediately after chat
- 11:15 onwards → KR doc finalise; park OTEP-427; chase Amber on OTEP-390 eligible indicator

---

## Standup Lens

- **PM WIP overload:** You're carrying OTEP-127, OTEP-397, OTEP-427 — flag that OTEP-427 is being parked today
- **OTEP-86 (QA):** ACs will be updated after 10:00 chat — let QA know to hold until you update
- **OTEP-305 (QA):** Keycloak dependency — ask if this is still blocked or if someone picked it up over weekend
- **8 stories in QA total** — ask if any need a PM nudge to close

---

## Heads Up

- **KR docs are due today.** Don't let the 10:00 chat eat the morning — timebox KR writing to 90 min from 8:00 AM, or do a quick draft now and refine after standup.
- **OTEP-390 (eligible indicator spec):** Chase Amber / BO today — this was flagged as needing a decision (hide vs show-but-disable) and it's not been confirmed.
- **Tuesday you're on leave.** Everything deferred to tomorrow sits until Wednesday. Land the important stuff today.
- **Strategic window:** 11:15 onwards is mostly clear — consider using 30 min to prep R1 epic draft (needed for Wed Adrian jam) while context is fresh.

---

## Growth Nudge

Writing the 3 mid-year KRs today is a stakeholder influence moment — the numbers you put forward frame what success means for Jace and Adrian. Name them confidently, with evidence (not hedged targets).

<details><summary>Appendix — Sprint Health & Context</summary>

### Live Sprint State (pulled 2026-06-22)

**Sprint:** OTEP-Pathfinder Sprint 4 (2026-06-16 → 2026-06-28)

**Goal:** Full discovery-to-apply journey on live data — browse, filter, detail page, apply to any OTG opportunity + C@G opportunities in same listing.

| Status | Count | Notes |
|--------|-------|-------|
| In Progress | 13 | Down from 14 (OTEP-499 Done) |
| QA | 8 | Unchanged since W25 |
| Done | 21 | OTEP-499 landed |
| Backlog | 23 | — |

**Michelle's WIP:** OTEP-127 (ringfencing spike), OTEP-397 (file upload spike), OTEP-427 (ingestion tighten) — 3 In Progress = WIP overload. Park OTEP-427 today.

**QA tail (8):** OTEP-86, OTEP-268, OTEP-85, OTEP-305, OTEP-128, OTEP-324, OTEP-129, OTEP-438
- OTEP-86 ACs gated on today's type name chat
- OTEP-305 may still be Keycloak-blocked — confirm at standup

### Active PRDs
| PRD | Stage | Action This Week |
|-----|-------|-----------------|
| OTG File Upload (OTEP-397) | Team Kickoff | Q1–Q3 resolved before Thu grooming |
| POCDEX Integration | XFN Kickoff | OTEP-202 timeline check ongoing |

### Weekly Priorities (W26)
1. DevOps chat → unlock S5 chain + KR docs → **TODAY**
2. R1 jam with Adrian Wed PM → bring 4-epic draft
3. S4 close: land PM WIP, clear QA tail, retro Fri

</details>

---

*Generated: 2026-06-22*
*Sources: W26 weekly plan, Jira live (jira-sprint.sh, 2026-06-22), Google Calendar*
*Next: `/meeting-notes` after 10:00 chat to capture type name decision; `/sprint-check` Thu AM before grooming*
