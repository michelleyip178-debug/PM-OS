---
date: 2026-05-28
day: Thursday
week: 2026-W22
mcps_used: [Google Calendar MCP — token refreshed, live data]
---

# Daily Plan - Thursday, May 28, 2026

## TL;DR

- **Meetings:** 5 (4.5 hours) — ~~OTG KT~~ ✅, Standup (11:00), PM Weekly, Sprint Planning, Job Family
- **P0 Tasks:** 2 remaining — demo script (hard deadline EOD), Sprint Planning
- **Key Focus:** Use the 10:00–11:00 window NOW to start the demo script. Standup is the gating moment — get OTEP-289 spike answer from Pow Hwee before the 14:00 Planning session.

---

## Carry-Over from Wednesday 27 May

From yesterday's plan — still outstanding:

| Item | Days overdue | Status |
|------|-------------|--------|
| Async follow-up to Xian Zhang + Jacky | 2 days | ✅ Done |
| Demo script | Due EOD today | ✅ Structure drafted — confirm ⚠️ items at standup, finalise after |
| FormSG PRD update | This week | ❌ Not started |
| OTEP-130 Jira rescope | This week | ❌ Not started |
| WOG Auth success metrics | This week (committed to Adrian) | ❌ Not started |
| POCDEX planning session (Daryll outreach) | This week | ✅ Reached out — awaiting response |
| Check with Acacia (POCDEX data model) | Before Daryll session | ❌ Not started |

---

## Today's Three

*Heavy meeting day (4.5 hrs). Realistic focus: three things only.*

1. [x] ~~**Send async follow-up to Xian Zhang + Jacky**~~ — ✅ Done. Sent to Xian Zhang + Jacky + CC Amber.

2. [ ] **Nail Sprint Planning** — 14:00–16:00, L11 Anson. Sprint Planning prep doc is ready (`outputs/analyses/sprint-3-planning-prep-2026-05-29.md`). Bring the 5 pre-session questions. First thing at standup (11:00): get OTEP-289 spike answer from Pow Hwee — it gates OTEP-318 scope.

3. [x] **Demo script** — ✅ Structure drafted (`outputs/analyses/sprint-2-demo-script-2026-05-28.md`). Confirm ⚠️ items with Thomas/Leo at standup (demo vehicle, data, back-nav). Finalise after standup.

*Why these three:* The async follow-up is already embarrassingly overdue. Sprint Planning is the highest-leverage PM activity today. Demo script is a hard deadline and needs to get done before back-to-back meetings consume the rest of the day.

---

## Schedule & Meeting Prep

| Time | Meeting | Prep Status | Context |
|------|---------|-------------|---------|
| ~~09:30–10:00~~ | ~~[OTG] KT Session — Budget~~ | ✅ Done | OTG team budget KT complete. |
| 11:00–11:15 | OTEP Team 2 standup | ✅ Ready | **Ask Pow Hwee: OTEP-289 spike output — go or no-go for OTEP-318?** This is the #1 question. Also confirm Thomas/Leo what's demo-able for Friday. |
| 13:15–14:00 | PM weekly catchup | ✅ Ready | Likely Jace + others. Good moment to flag: Sprint 3 scope confirmed, POCDEX Daryll session needed this week, WOG Auth success metrics still in progress. |
| 14:00–16:00 | OTEP Sprint Planning / Backlog Grooming | ✅ Ready — prep doc done | Sprint 3 scope, carry-overs, Thomas FE capacity, OTEP-192 open questions. Prep doc: `outputs/analyses/sprint-3-planning-prep-2026-05-29.md`. |
| 16:00–17:00 | Operationalisation of Job Family + Functional Competency Changes | ⚠️ No prep done | THIS is the WD×DO job family model discussion flagged all week. POCDEX requirements depend on the outcome. Capture everything — take notes for Daryll session. |

### Free Blocks

| Window | Duration | Suggested use |
|--------|----------|--------------|
| **10:00–11:00** | **1 hr — NOW** | **Start demo script. This is your best uninterrupted window before standup.** |
| 11:15–13:15 | 2 hrs | Finish demo script. Must be done before PM Weekly at 13:15. |
| 13:15–14:00 | (PM weekly) | — |
| 14:00–17:00 | (Planning → Job Family — back-to-back) | — |
| Post-17:00 | Evening | POCDEX Daryll outreach + FormSG PRD update if energy allows |

---

## Meeting Context

### 09:30 — [OTG] KT Session — Budget

**What it is:** OTG team sharing budget/cost context. No prep needed.

**What to watch for:**
- Any budget constraints that could affect OTEP's OTG integration scope
- Who owns the OTG → OTEP data flow from a budget perspective?
- Flag anything that affects OTEP-192 (recurring ingestion job)

---

### 11:00 — OTEP Team 2 Standup

**The one question that matters:**

> "Pow Hwee — what did the OTEP-289 spike produce? Is OTEP-318 (filter by category) a go or no-go for Sprint 3?"

This answer determines whether OTEP-318 enters Sprint Planning scope in 3 hours.

**Also ask:**
- Thomas/Leo: What's actually demo-able for Friday's Sprint Review? (demo script is due today)
- Confirm Sprint 2 carry-over list before Planning — what's NOT closing by Friday?

---

### 13:15 — PM Weekly Catchup

**Attendees:** Likely Jace + other PMs

**Your update for Jace:**
- Sprint 3 ACs are locked and in Jira (OTEP-87, 86, 317, 319, 192)
- Sprint Planning is this afternoon — scope confirmed
- OTEP-318 conditional on OTEP-289 spike (answer coming at standup)
- POCDEX planning session with Daryll needed this week — not yet scheduled (flag this)
- WOG Auth success metrics — committed, in progress this week

**What to get from Jace:**
- Does she need anything specific from me on POCDEX before the Daryll session?
- Any update from Adrian on WOG Auth timeline / Sprint 4 dependencies?

---

### 14:00 — Sprint Planning / Backlog Grooming (L11 Anson, 2 hours)

**Prep doc:** `outputs/analyses/sprint-3-planning-prep-2026-05-28.md`

**5 pre-session questions to walk in with answers to:**
1. OTEP-289 spike output → OTEP-318 in or out? *(get this at standup)*
2. Sprint 2 carry-over list → what isn't closing Friday?
3. OTEP-192 file delivery → how does the OTG Excel arrive (path, SFTP, manual)? *(OTEP-192 cadence also unconfirmed — daily assumed)*
4. ~~OTEP-191 status~~ → ✅ Done — confirmed resolved by AWS infra (2026-05-28). Close the ticket.
5. Demo plan for Friday → how are we running Sprint Review without DEV environment?

**Already resolved before Planning (updated 2026-05-28):**
- ✅ OTEP-192 disappearing opportunities → auto-deactivate (soft delete). Decided.
- ✅ OTEP-192 failure alerting → deferred to post-MVP. Not in scope for Sprint 3.
- ✅ OTEP-192 reshaped as technical task (4 system-behavior ACs). Synced to Jira.
- ✅ OTEP-92 (tracking subtask of OTEP-86) — removed from board.
- ✅ OTEP-191 — confirmed Done by AWS infra resolution. Close the ticket.

**Your recommended Sprint 3 scope (confirmed):**

| Story | Status |
|-------|--------|
| OTEP-87 — Enhanced detail page (apply CTA only) | ✅ In Jira |
| OTEP-86 — Filter by type | ✅ In Jira |
| OTEP-317 — Clear filters | ✅ In Jira |
| OTEP-319 — Apply via FormSG basic redirect | ✅ In Jira |
| OTEP-192 — Recurring OTG ingestion job | ✅ In Jira (open questions for today) |
| OTEP-271 — Local POCDEX database | ⚠️ No story file — confirm ACs with Pow Hwee |
| OTEP-203 — Standalone POCDEX API service | ⚠️ No story file — confirm ACs with Pow Hwee |
| OTEP-318 — Filter by category | ⏳ Conditional on OTEP-289 output |

**Thomas FE capacity flag:** 4–5 FE stories for one engineer in 2 weeks. Raise this explicitly. Minimum viable: OTEP-87 + OTEP-319 (apply flow) + OTEP-192 (live data). Filters are second tier.

---

### 16:00 — Operationalisation of Job Family + Functional Competency Changes

**This is the WD×DO job family model discussion.** POCDEX requirements depend on the outcome.

**What to capture:**
- Are job families / functional competencies changing in structure? (affects POCDEX data model)
- Which agencies does this affect and on what timeline?
- Does OTEP need to handle the transition state (officers mid-competency-profile change)?
- Who owns the WD×DO side of this? Any counterpart to coordinate with?

**Flag this immediately:** Sprint Planning ends at 16:00 and this starts at 16:00. No buffer to debrief or capture planning outcomes. Take notes during Planning and process them separately.

**POCDEX risk to raise at Planning:** The job family model discussion at 16:00 *directly affects POCDEX requirements*. If the model changes, OTEP-271/OTEP-203 scope could shift. Consider explicitly saying in the Planning session: "We're getting the job family output at 16:00 today — should we hold POCDEX stories until after that, or commit with the caveat that scope may shift?"

---

## Tasks by Priority

### P0 — Must Do Today

- [x] ~~**Async follow-up to Xian Zhang + Jacky**~~ — ✅ Done.

- [x] **Demo script** — ✅ Structure drafted before standup. Confirm ⚠️ items (demo vehicle, data, back-nav state) at 11:00. Finalise after standup.

- [ ] **Sprint Planning — attend and own** — 14:00–16:00. Bring prep doc, 5 pre-session questions, Thomas FE capacity flag. Get OTEP-318 answer at 11:00 standup beforehand.

### P1 — Important This Week

- [ ] **Ask Pow Hwee at standup: OTEP-289 spike output** — go or no-go on OTEP-318. Ask before Planning.

- [ ] **Capture Job Family meeting outcomes** — 16:00–17:00. Implications for POCDEX. Take written notes even if it's a listen-only session.

- [x] **POCDEX planning session — reach out to Daryll** — ✅ Done. Awaiting response to schedule the session.

- [ ] **Check with Acacia on POCDEX data model** — 5 min Slack ping. Pow Hwee flagged she knows it well. Before Daryll session.

### P2 — If Time Allows (Post-17:00)

- [ ] **FormSG PRD update** — remove pre-fill from MVP; note R1 native form direction. File: `context-library/prds/formsg-integration.md` → `outputs/prds/`
- [ ] **OTEP-130 Jira rescope** — basic redirect + webhook only, no pre-fill. Reference Squad Sync 2026-05-26.
- [ ] **WOG Auth success metrics** — grounded in Dec '26 OKR baselines from BO deck. Committed to Adrian. Start even a bare outline tonight.
- [ ] **PostHog event taxonomy** — deadline w/c 1 Jun. Still hasn't started. Worth mentioning to Pow Hwee at standup.

---

## Heads Up

✅ **OTG KT (09:30) done.** Budget context captured.

✅ **Async follow-up to Xian Zhang + Jacky — done.** That carry-over is finally closed.

✅ **OTEP-191, OTEP-92, key OTEP-192 open questions resolved before Planning.** You're walking in better-prepared than expected.

⚠️ **10:00–11:00 is your demo script window — use it NOW.** Standup at 11:00 will clarify what's actually demo-able, but start the structure before then so you're not building from scratch.

✅ **Demo script structure drafted.** Confirm ⚠️ items with Thomas/Leo at standup, then finalise. On track for EOD deadline.

⚠️ **OTEP-289 spike answer gates Sprint 3 scope** — ask Pow Hwee at 11:00 standup, not in the 14:00 session. OTEP-318 in or out depends on it.

⚠️ **Sprint Planning (14:00) backs directly into Job Family discussion (16:00)** — zero buffer. Take Planning notes in real-time; processing happens after 17:00.

⚠️ **POCDEX risk: job family model could shift tonight** — consider flagging at Planning that OTEP-271/203 scope is contingent on the 16:00 outcome.

⚠️ **WOG Auth success metrics committed to Adrian — now 2+ days late.** Even a bare structure post-17:00 is better than nothing.

⚠️ **Do NOT respond to Gemma (LD team) without Jace/Adrian alignment** — standing instruction, carries every day.

---

## Open Loops (Updated)

| Item | Owner | Due | Status |
|------|-------|-----|--------|
| Async follow-up to Xian Zhang + Jacky | Michelle | 2 days ago | ✅ Done |
| Demo script | Michelle | EOD today | ✅ Structure drafted — finalise post-standup |
| OTEP-289 spike output → OTEP-318 gate | Pow Hwee | Ask at standup | ⏳ Ask at 11:00 |
| Sprint Planning | Michelle | 14:00 today | ✅ Prep doc ready |
| FormSG PRD update | Michelle | This week | ❌ Not started |
| OTEP-130 Jira rescope | Michelle | This week | ❌ Not started |
| WOG Auth success metrics | Michelle | This week | ❌ Not started — now urgent |
| POCDEX planning session (Daryll) | Michelle | This week | ✅ Reached out — awaiting response |
| Check with Acacia (POCDEX data model) | Michelle | Before Daryll session | ❌ Slack ping today |
| OTEP-318 ACs | Michelle | Conditional | ⏳ Waiting on OTEP-289 spike from Pow Hwee |
| PostHog event taxonomy | Michelle | w/c 1 Jun | ❌ Not started |

---

*Generated: 2026-05-28 morning | Updated: 2026-05-28 ~10:00 (mid-morning refresh)*
*MCPs used: Google Calendar (token refreshed manually — live data for 28 May 2026)*
*5 meetings today: ~~OTG KT (09:30) ✅~~, Standup (11:00), PM Weekly (13:15), Sprint Planning (14:00), Job Family (16:00)*
*Resolved since morning: OTEP-191 closed, OTEP-92 removed, OTEP-192 reshaped + 2 open questions answered, prep doc filename corrected to sprint-3-planning-prep-2026-05-28.md*
*Still open: demo script (P0 — start now), OTEP-289 spike answer (ask at standup), POCDEX OTEP-271/203 scope risk, WOG Auth metrics*
