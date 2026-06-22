---
week: 2026-W26
week_start: 2026-06-22
week_end: 2026-06-26
quarter: Q2 2026
sprint: S4 Week 2 (closes 26 Jun) → S5 starts 29 Jun
---

# Weekly Plan — Week of 22 June 2026 (W26)

## TL;DR
 
- **Top 3:** (1) DevOps chat → unlock S5 grooming chain + KR docs due today, (2) R1 jam with Adrian Wed — shape epics for Mark #40 sign-off, (3) S4 close clean: land PM WIP, clear QA tail, run retro
- **Meeting load:** ~18 hours (Heavy — sprint close week, plus you're on leave Tue)
- **Key milestone:** S4 finalisation Fri 26 Jun; S5 grooming Thu 25 Jun; R1 epic shape Wed 24 Jun

---

## Strategic Context

**Quarter Goal:** MVP go-live week of 19–23 Oct 2026. S4 is dev sprint 4 of 9.

**North Star:** Officer can log in with real WOG AD credentials, find, and apply to opportunities by go-live.

**This Week's Focus:**
S4 closes Friday. The two things that determine S5 health are (a) whether DevOps confirms the OTG type name today — everything gates on that single decision — and (b) whether Adrian's R1 jam produces an epic list coherent enough to take to Mark. Both happen before Thursday's grooming session. Sprint close is the third track: land PM WIP, unblock QA, run a clean retro.

---

## ⚠️ Carry-overs from W25

| Item | Status | Action this week |
|------|--------|-----------------|
| 4-cat mapping → Xian Zhang | Held (pending DevOps type name) | Send Mon after DevOps chat confirms |
| OTEP-86 AC closure | Held (same gate) | Close Mon after chat |
| R1 scope ask to Mark (#40) | Waiting on Adrian jam shape | Send after Wed jam |
| OTEP-390 eligible indicator spec | Chase Amber / BO Mon | Check discussion — decision needed |
| **Mid-year KR documentation** | **Due today (22 Jun)** | Define 3 KRs with number or artifact; check Thomas/Léo for tracking data first |
| PM WIP overload: 3 In Progress (OTEP-397, OTEP-127, OTEP-427) | Flagged by stale-check | Land or park one before sprint close |

---

## Top 3 Priorities

### Priority 1: DevOps chat → unlock the chain + mid-year KR docs ⭐ Most Important

**Why this matters:**
- Advances: S4 sprint goal + S5 grooming readiness gate
- Impact: One confirmed type name unlocks 4-cat mapping to Xian Zhang, OTEP-86 AC closure, OTEP-86 filter story QA clearance, and ~5 S5 story ACs that reference opportunity type labels. Every other team is waiting.
- Mid-year KRs: Jace flagged these were due today — stalling risks a visible miss at leadership level.

**Success looks like:**
- DevOps chat done, OTG type name (display-only vs schema change) confirmed in writing (Slack/email)
- 4-cat mapping sent to Xian Zhang
- OTEP-86 ACs updated and closed
- 3 KR definitions written: (a) opportunities funnel, (b) auth/authorisation, (c) process improvement — each with a number or artifact (not just a label)

**Key tasks:**
- [L] DevOps chat Mon AM — confirm type name, document decision (Est: 1 hr)
- [L] Send 4-cat mapping to Xian Zhang immediately after (Est: 30 min)
- [L] Update + close OTEP-86 ACs (Est: 30 min)
- [L] Check Thomas/Léo for tracking data before writing KR targets (Est: 30 min)
- [L] Write 3 mid-year KR definitions with numbers/artifacts (Est: 1.5 hrs)

**Dependencies:**
- Needs from: DevOps (type name) — confirm in Mon chat
- Blocks: S5 grooming stories, Xian Zhang analysis, OTEP-86 QA clearance, 4-cat mapping

---

### Priority 2: R1 jam with Adrian (Wed PM) — shape epics + draft #40 ask

**Why this matters:**
- Advances: R1 strategic planning (Oct go-live depends on R1 clarity now)
- Impact: A coherent 4-epic draft from this jam is what lets you take a credible ask to Mark (#40). Going to Mark without Adrian's shape = wasted conversation.
- Risk if not done: R1 scope stays undefined into S5, which increases planning debt in back half of S4.

**Success looks like:**
- 4-epic R1 draft prepared before the jam (bring it, don't build it in the room)
- Jam produces an agreed priority order for epics
- Draft #40 scope ask written same day while thinking is fresh
- You did NOT signal MVP build scope is done — be honest it's still closing out

**Key tasks:**
- [L] Prep 4-epic R1 draft before Wed (Est: 1.5 hrs — Tue or Wed AM)
- [L] R1 jam with Adrian Wed PM (Est: 1–1.5 hrs in meeting)
- [L] Draft #40 scope ask to Mark immediately after jam (Est: 45 min)

**Dependencies:**
- Needs from: Adrian — available Wed PM (confirmed)
- Blocks: Mark #40 sign-off on R1 scope

---

### Priority 3: S4 close — land PM WIP, clear QA tail, run retro clean

**Why this matters:**
- Advances: Sprint delivery goal; S5 starts with a clean board
- Impact: 8 tickets still in QA, 3 PM-owned tickets In Progress (WIP overload flagged last week). Carrying this into S5 creates noise in the new sprint and makes the board misleading for planning.
- Risk if not done: QA tail becomes S5 carry-in; PM WIP inflates S5 metrics.

**Success looks like:**
- At least 3 of 8 QA tickets moved to Done (target: OTEP-268, OTEP-305, OTEP-438 — least complex)
- PM WIP resolved: park or land at least one of OTEP-397/127/427 by EOD Thursday
- S5 grooming Thu 25 Jun runs productively (OTG File Upload open questions 1–3 resolved by then)
- Retro Fri runs with clear action items captured
- Sprint 4 Finalisation Fri: archive sprint, confirm what carries into S5

**Key tasks:**
- [N] Chase QA owners Mon/Tue: OTEP-268, OTEP-305, OTEP-438 (Est: 30 min)
- [L] Resolve OTG File Upload open questions (Q1–Q3: role identity, gate mechanism, upload route) before Thu grooming (Est: 2 hrs across Mon–Wed)
- [N] Land or park OTEP-397/127/427 — pick one to close or move to backlog (Est: 1 hr decision + update)
- [N] S5 grooming Thu 25 Jun — prep S5 story candidates list in advance (Est: 1 hr prep)
- [N] Retro Fri: facilitate + capture action items (Est: 1 hr in ceremony)
- [N] Sprint 4 finalisation Fri: run `/archive` or manual board close (Est: 30 min)

**Dependencies:**
- Keycloak dependency may still be blocking OTEP-305 — check Mon standup
- OTG File Upload Q1–Q3 gates grooming readiness; Pow Hwee + Rama needed

---

## PRD Pipeline This Week

| PRD | Current Stage | Target by Friday | Action Needed |
|-----|---------------|-----------------|---------------|
| OTG File Upload | Team Kickoff | Ready for S5 grooming | Resolve Q1 (uploader identity), Q2 (role gate), Q3 (upload route) before Thu |
| POCDEX Integration | XFN Kickoff | No change this week | OTEP-202 timeline check (blocks ringfencing) |

---

## Key Meetings This Week

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon 22 | Opportunity Categories in CareerCompass (10:00) | DevOps type name confirmation | Come with 4-cat mapping draft ready to send |
| Mon 22 | OTEP Team 2 standup (11:00) | Board + QA chase | Note OTEP-86, OTEP-305 Keycloak status |
| Tue 23 | **On leave** — Squad Sync (9:30), OTG IT Working Comm (10:00), Standup (11:00), Design review (14:00), PM weekly catchup (16:00) | Decide which to attend | You're marked on leave — protect your time; standup + design review minimum |
| Wed 24 | OTEP Product x BO Senior (10:00) | Strategy alignment | Know S4 status + S5 gate state |
| Wed 24 | OTEP Team 2 standup (11:00) | Board check | — |
| Wed 24 | R1 jam with Adrian (PM) | Shape R1 epics | 4-epic draft prepared |
| Thu 25 | Check-in with Jace (8:45) | Mid-year KR review | KR docs done by Wednesday |
| Thu 25 | OTEP Team 2 standup (11:00) | — | — |
| Thu 25 | S5 Grooming (14:00–16:00) | Gate stories to S5 | OTG File Upload Q1–Q3 resolved; story candidates listed |
| Fri 26 | OTEP Squad Sync (9:30) | Sprint close debrief | Know what's Done vs carrying |
| Fri 26 | OTEP Team 2 standup (11:00) | — | — |
| Fri 26 | Ways of Working Retro (14:00) | Sprint retrospective | Action items from last retro + learning from S4 |
| Fri 26 | Sprint 4 Finalisation (15:00) | Archive S4 | Board clean before EOD |

**Meeting load:** ~18 hours (Heavy)

**Deep work capacity:** ~7 hours Mon + partial Wed = limited. Front-load all thinking/writing work on Monday.

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| DevOps chat doesn't produce a firm type name | Get it in writing; don't send 4-cat mapping on a verbal — re-schedule if needed |
| Tuesday on-leave + 4.5 hrs of meetings | Prioritise: attend OTG IT Working Comm (external stakeholders), design review (Amber). Skip PM weekly catchup if low-stakes. |
| Jace KR check-in Thu with docs not ready | Get this done by Wed EOD — Jace meeting is fixed |
| Keycloak still blocking OTEP-305 | Chase at Mon standup; if still stuck by Wed, flag as S5 carry-in and plan accordingly |
| Grooming (Thu) without resolved OTG File Upload Q1–Q3 | Resolve Q1 (Rama call) by Wed; don't let this slip to grooming day |
| PM WIP overload (3 tickets In Progress) | Park OTEP-427 (lowest urgency) to Backlog before Thu; don't carry all 3 into S5 |

---

## Capacity Notes

Tuesday is on leave. That makes Monday the most important execution day of the week — DevOps chat, KR docs, and 4-cat mapping all need to move on Monday before you're effectively offline for a day.

Real deep work windows:
- **Mon AM before 10:00** — KR doc drafting, 4-cat mapping prep
- **Wed AM before 10:00** — R1 epic draft finalize
- **Thu AM before 8:45** — grooming prep

---

## This Week's Strategic Skill

**Suggested:** `/sprint-check`

**Why this week:** S4 closes Friday — Thursday's pre-planning window is exactly the moment to read the Ready shelf depth, flag which S5 stories are gated vs clear, and surface any dependency traps before grooming locks in scope.

**When to run:** Thursday morning before the S5 grooming session (before 14:00).

**What you'll get:** A pre-planning brief showing what's genuinely Ready for S5, what's blocked, and where to set the sprint goal given the gate state.

---

*Generated: 2026-06-22*
*Sources: W25 weekly review, S4 sprint-status.md (live 2026-06-18), Google Calendar, OTG File Upload PRD, POCDEX PRD*
*Next: `/daily-plan` each morning. Run `/sprint-check` Thu AM before grooming. Run `/archive` + `/weekly-review` Fri.*
