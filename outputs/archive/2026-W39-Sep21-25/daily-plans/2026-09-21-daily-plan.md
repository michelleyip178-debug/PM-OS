---
date: 2026-09-21
day: Monday
week: 2026-W39
mcps_used: [Calendar, Jira]
---

# Daily Plan - Monday, September 21, 2026

## TL;DR

- **Meetings:** 7 today, heaviest stretch 1:30–6:00pm with a genuine double-book at 3:00–4:00pm.
- **P0 Tasks:** 3 — resolve the SJR scope fight with Adrian before 3pm's HR Systems discovery call, prep for that call, pull Rama/Barry's estimate groundwork ahead of Tuesday.
- **Key Focus:** Get the SJR scope question (discovery-only vs. Compass-native applications for 2027) far enough along that it can inform Tuesday's estimate, not trail behind it.

---

## Today's Three

1. [ ] **Make progress on the SJR scope call** (discovery-only vs. Compass-native applications for 2027 cycle) — size against the SJR to-be brief's Path C (manual case-owner bridge) before 3pm
2. [ ] **Prep for and attend the 3pm R1 Discovery call** (Competency & Proficiency Configuration in HR Systems) — this is the HRPS/Cumulus/NCS discovery session via Rama's invite; fold in the SJR Path A/B question (can HRPS/Cumulus accept a visiting-applicant record or relay)
3. [ ] **Pull Rama and Barry's 5-pillar man-week estimate groundwork** ahead of Tuesday's delivery to Adrian — confirm native-form cost and VAPT timeline are both factored in

🔒 **Protected today:** Item 1 (SJR scope resolution) — hard external forcing function (Tuesday's estimate to Adrian depends on it), and Adrian's pushback has already gone unanswered once. With a double-booked 3pm and a packed afternoon, this is the one item that needs its own time before the day's meeting stretch swallows it, not something to squeeze in between calls.

*Why these three:* All three feed directly into Tuesday's estimation delivery — this week's single most important forcing function per the weekly plan. Today is the last full day to get inputs lined up before that number goes to Adrian.

---

## Schedule & Meeting Prep

| Time | Meeting | Attendees | Prep Status | Context |
|------|---------|-----------|-------------|---------|
| 11:00–11:15am | OTEP Team 2 Stand-up | Team 2 | ✅ Ready | Sprint 9 closed yesterday — listen for anything unresolved carrying into whatever comes next |
| 1:30–2:30pm | Confidential Conversation \| Ways of Working Review | — (in-person, LTA Building) | N | No prep notes found |
| 2:00–3:00pm | OTEP Performance Testing - Walk-through | — | ⚠️ Needs prep | Ties to last week's still-open VAPT triage ownership gap and Perf Testing Review follow-through |
| 3:00–4:30pm | **R1 Discovery: Competency & Proficiency Configuration in HR Systems** | — (Teams) | ⚠️ Needs prep | Very likely Rama's HRPS/Cumulus/NCS discovery call (CMM + SJR/Internal Jobs API) — bring Rama's discovery questions doc + SJR Path A/B question |
| 4:00–5:00pm | [Bi-Weekly] OTEP Product x BO - Working Level | — (Teams) | N | No prep notes found |
| 5:30–6:00pm | Performance Testing Preparation & Readiness Review | — (Teams) | N | Short, likely a status check ahead of tomorrow |

### Free Blocks

- **9:00–11:00am** (2 hours) → Suggested: SJR scope sizing work (Today's Three #1) — the only real uninterrupted block before the afternoon crunch starts
- **11:15am–1:30pm** (~2.25 hours) → Suggested: finish SJR sizing, then start pulling Rama/Barry's estimate groundwork (Today's Three #3)
- **12:00–1:00pm** → Lunch, if not otherwise used above

---

## Heads Up

✅ **3pm double-book resolved.** The "[Bi-Weekly] OTEP Retro and Demo" (3-4pm) was deleted/cancelled directly in Google Calendar (organizer had no listed attendees, so this couldn't be done via the read-only API token — see note below). "R1 Discovery: Competency & Proficiency Configuration in HR Systems" (3-4:30pm) stands as scheduled.

⚠️ **No gap between 1:30pm and 6:00pm** across four remaining meetings — still a genuinely heavy afternoon. Today's Three are front-loaded into the morning free blocks for this reason; don't count on afternoon slack to catch up on them.

⚠️ **Calendar write access is unavailable to me.** The connected Google Calendar token is read-only — I can pull your schedule but can't create, edit, or delete events. Today's fix required a manual delete on your end. If you want me to make calendar changes going forward, the token needs to be re-authorized with write scope (`calendar.events`, not just read-only).

⚠️ **Sprint 9 ended yesterday (20 Sep)** per live Jira pull — no sprint goal was set. No dedicated sprint-planning ceremony appears on today's calendar; the 11am Team 2 stand-up and 3pm Retro/Demo are the closest touchpoints. Worth confirming with Rama/Barry whether Sprint 10 planning is happening separately this week.

⚠️ **Thomas Huchedé still shows WIP concentration** — 4 items In Progress in the just-closed sprint (OTEP-1475 perf, OTEP-1552 auth, OTEP-1604 UI, OTEP-1565 caching). Worth a quick check at the 11am stand-up whether this cleared with the sprint close or is carrying forward.

⚠️ **SJR scope is now genuinely time-pressured.** Adrian's pushback (discovery-only vs. Compass-native applications for 2027) has to resolve before Tuesday's estimate, and it's currently unresolved after one round already. The 3pm HR Systems discovery call is a natural place to get real input on it — worth having the sizing question framed before walking in, not after.

⚠️ **Jira full sync (`jira-sync.py`) errored partway through** on a chunked-read failure while pulling comments — likely transient. The sprint snapshot (`jira-sprint.sh`) succeeded and is reflected in the appendix; comment-level detail and the `.changes.md` diff may be stale (last dated 18 Sep).

---

## Growth From Yesterday

No clear growth moment surfaced from yesterday's notes — worth reflecting at end of day. (Yesterday's activity was mostly document reconciliation: correcting the SJR to-be brief's as-is/to-be conflation and rewriting the Adrian reply once the wider thread showed his pushback was still open, not resolved.)

## Growth Nudge

Today's SJR scope question is a stakeholder-influence moment as much as a scoping one — Adrian's already pushed back once; landing a well-sized recommendation at the 3pm discovery call (not just a restated position) is the difference between influence and repeating the discovery-only proposal.

<details><summary>Appendix</summary>

### Strategic Context

**This Week's Priority (from `outputs/weekly-plans/2026-W39-weekly-plan.md`):**
1. Reconcile the R1 kickoff date + lock Tuesday's estimation delivery
2. Close the HRPS/Cumulus discovery loop (including the now-active SJR scope fight)
3. Name a VAPT triage owner (2nd week running, needs Barry Lim's input)

**No formal Q3 OKRs on file** in `context-library/strategy/` — working goal per the R1 one-pager is shipping the reduced-scope Opportunities Marketplace.

### Sprint Snapshot (OTEP-Pathfinder Sprint 9, 2026-09-07 → 2026-09-20 — ended yesterday)

No sprint goal was set.

**In Progress (7):**
| Ticket | Type | Assignee | Summary |
|---|---|---|---|
| OTEP-1423 | Sub-task | Léo Milbor | Spike: enhancement to developer workflow |
| OTEP-1414 | Sub-task | Hao Eng | E2E infra enhancement |
| OTEP-1475 | Task | Thomas Huchedé | Performance optimisation |
| OTEP-1552 | Task | Thomas Huchedé | [OTEP-auth] ABLR audit logging |
| OTEP-1564 | Bug | Hao Eng | Close HTTP response body on non-200 status in CFT client (socket/connection leak) |
| OTEP-1604 | Task | Thomas Huchedé | Update CareerCompass logo in Navbar and Login page |
| OTEP-1565 | Bug | Thomas Huchedé | Enforce bounded capacity on in-memory LRU caches (authorizer & user resolver) |

**Done (18):** notable items — OTEP-1573 (SSR crash fix), OTEP-1523 (broken access control fix), OTEP-1507 (HTTP security headers), OTEP-1571 (Keycloak Privileged Group for CAM).

**Backlog (14):** includes OTEP-578 (SPIKE: OTG ingestion for Jobs/Secondments/Internal Jobs/Rotations — directly relevant to this week's SJR/HRPS discovery work) and OTEP-425 (SPIKE: Saved Jobs bookmark discovery).

### Story Changes Since Last Sync (2026-09-18, stale — see Heads Up)

| Story | Change | Detail |
|---|---|---|
| OTEP-1573 | Status | QA → Done |
| OTEP-1523 | Status | In Progress → Done |
| OTEP-1507 | Status | QA → Done |
| OTEP-1605 | New story | — |
| OTEP-1185 | Assignee | N/A → Thomas Huchedé |
| OTEP-1604 | New story | — |
| OTEP-1565 | New story | — |

CC-UAT board: no changes since last sync.

### Alignment Check

Today's three items all funnel into Tuesday's estimation delivery — the single most important forcing function this week per the weekly plan's Priority 1. No item today directly touches Priority 3 (VAPT owner) beyond the general awareness that Barry's input is needed there too; the 2pm Perf Testing Walk-through is a natural moment to raise it if Barry's on that call.

</details>

---

*Generated: 2026-09-21 (calendar refreshed)*
*MCPs used: Google Calendar (direct API), Jira (live scripts — jira-sprint.sh succeeded, jira-sync.py partial)*
*Next: Run `/meeting-notes` after the 3pm HR Systems discovery call to capture outcomes*
