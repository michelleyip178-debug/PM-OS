---
week: 2026-W40
week_start: 2026-09-28
week_end: 2026-10-02
quarter: Q3 2026
---

# Weekly Plan - Week of September 28, 2026

## TL;DR

- **Top 3:** (1) Get Adrian/Xian/Mark/GK's joint confirmation that R1's 25 Sep scope is genuinely final, before any re-estimation restarts, (2) escalate the HRPS API delivery date (D-01) synchronously — it's now R1's single hardest blocker, (3) break the VAPT triage ownership deadlock with a synchronous ask, not a fourth async escalation.
- **Meeting load:** Heavy — 22 meetings this week (Squad Sync ×2, sprint planning/grooming, 2 design/BO reviews, daily standups, 5 Performance Testing reviews, bi-weekly sync, sprint demo). Protect Priority 1 and 2 deliberately; they will not survive an unplanned week.
- **Key milestone:** Sprint 10 closes Sunday (4 Oct) with no goal ever set — the second sprint running with this gap. Thursday's planning ceremony must set Sprint 11's goal explicitly, and Sprint 10's un-goaled close should be named as a pattern, not repeated silently a third time.

---

## Strategic Context

**Quarter Goal:** No formal Q3 OKRs on file in `context-library/strategy/` — working goal remains shipping R1 so "officers completing a development action" becomes measurable. Last week's confirmed scope (D-044/D-045) means R1 no longer measures this directly for most types — only via a FormSG-Click Rate proxy. This is a real strategic finding, not yet reflected in any OKR document.

**North Star Progress:** Not trackable — "Opportunities Discovered per Officer" still pending leadership sign-off as the working proxy metric.

**This Week's Focus:**
Last week (W39) produced 18 new decisions and reconciled R1's scope for the first time since the Workable pivot — but the plan's own Priority 1 (lock one kickoff date) never happened, and the two things blocking it (scope finality confirmation, HRPS API date) are unchanged this Monday morning. This week is about closing those two loops before touching the estimate again, so the team doesn't run a second wasted estimation cycle.

---

## Top 3 Priorities

### Priority 1: Get Joint Scope-Finality Confirmation (Adrian, Xian, Mark, GK) ⭐ Most Important

**Why this matters:**
- Advances: R1 delivery readiness — this is the single gating item named in the R1 Release One-Pager, Epic A, and Epic B one-pagers, all written last week.
- Impact: R1's architecture reversed at least seven times across three days last week (STIPs & Gigs alone: six times; Internal Jobs' ingestion: twice more on top of that). Every downstream document now says "confirm this is genuinely final" as its top decision-tracker item — but that confirmation itself was never actually scheduled.
- Risk if not done: Re-running the estimate (Priority 2 of last week, still pending) against an eighth reversal wastes the exact effort a joint confirmation would have protected. This is the process risk R-31 explicitly names.

**Success looks like:**
- A single synchronous conversation (not another relayed summary) with Adrian, Xian Zhang Guo, Mark, and Gek Khiang where all four confirm the 25 Sep scope (R1 Confirmed Scope doc, D-042–D-050) is final.
- If it's not final, get the actual open question named explicitly, rather than another architecture reversal landing without warning.

**Key tasks:**
- [ ] Get this meeting on the calendar this week — it doesn't exist yet as of this morning (Est: 30 min to schedule, contingent on all four accepting)
- [ ] Prep a one-page brief for the meeting using [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md) as the artifact everyone confirms against, not a fresh re-explanation (Est: 1 hr)
- [ ] If confirmed final: unblock the re-estimate (Priority 2 below) same day, in writing (Est: 30 min, decision-doc)
- [ ] If not confirmed final: get the specific open question in writing before the meeting ends, don't let it drift into a ninth relayed summary (Est: ongoing)

**Dependencies:**
- Needs from: Adrian Ang, Xian Zhang Guo, Mark, Gek Khiang — all four in one room or one call, not sequential 1:1s
- Blocks: R-12 re-estimation, Sprint 11 planning confidence, any further Mark-facing scope material

**Linked to:**
- Analysis: [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md)
- PRD: [R1 Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md), Section 14
- Risk register: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-31)

---

### Priority 2: Escalate HRPS API Delivery Date (D-01) Synchronously

**Why this matters:**
- Advances: Epic B (Internal Jobs) discovery — currently 🔴 Red, the single hardest blocker across all of R1's epics as of Friday's Epic B one-pager.
- Impact: Internal Jobs' entire primary ingestion path (direct from HRPS/Cumulus, confirmed final 25 Sep per D-049) has no committed API delivery date. Without it, this epic can't be sized, sequenced, or started — not just delayed.
- Risk if not done: This has been an open dependency (D-01) since 23-24 Sep with "still open, now critical" status and no movement in the risk register for a full week.

**Success looks like:**
- A committed delivery date from Lee Koon TEU (HRPS) and NCS, obtained via a direct conversation, not another written follow-up added to a list that hasn't moved in a week.
- If no date is possible this week, a written fallback position: what Internal Jobs discovery looks like if the API doesn't land before R1's target window (Feb-Mar 2027).

**Key tasks:**
- [ ] Schedule a direct call with Lee Koon TEU and NCS this week — the written-question approach hasn't produced a date in over a week, escalate the channel (Est: 1 hr to schedule + 1 hr call)
- [ ] Confirm whether HRPS supplies ringfencing/eligibility data directly or Compass needs to build that logic — the second half of D-01, still unresolved (Est: folds into the same call)
- [ ] Get a size estimate on the OTG-only residual (internal jobs that never migrate to HRPS/Cumulus) — flagged in Epic B's one-pager as unsized (Est: 1 hr, likely needs Rama)
- [ ] Update the risk register and Epic B one-pager same-day once a date lands — don't let this be the next item that goes stale for a week (Est: 30 min)

**Dependencies:**
- Needs from: Lee Koon TEU (HRPS), NCS — committed date
- Needs from: Rama Moorthy — ringfencing-data-source confirmation, OTG-residual sizing
- Blocks: Epic B's entire re-estimate; Priority 1's confirmation meeting is easier to have with this resolved, not blocked by it

**Linked to:**
- PRD: [Epic B One-Pager (Internal Jobs, incl. IJR)](../prds/2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md)
- Risk register: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, D-01)

---

### Priority 3: Break the VAPT Triage Ownership Deadlock (4th Consecutive Week)

**Why this matters:**
- Advances: MVP launch readiness (24-25 Nov gate) — a hard dependency running in parallel with R1, competing for the same engineering pool.
- Impact: This item has now failed to close for three consecutive weeks via the same escalation method (async, in writing, to Adrian and Barry). Last week's own review named this exact pattern as a learning: switch the channel after two failed attempts, don't repeat it a third time.
- Risk if not done: A fourth week unresolved starts to threaten confidence in the 24-25 Nov MVP launch gate directly, not just as an abstract risk-register line.

**Success looks like:**
- A named VAPT triage engineer, confirmed with Jace Tan and Jobelle, obtained via a synchronous conversation (a meeting, not another written ask) with Adrian and Barry both present.
- If genuinely no one is available, an explicit written statement of that fact — not silence carried into a fifth week.

**Key tasks:**
- [ ] Raise this directly in a meeting where Adrian and Barry are both present this week — Monday's bi-weekly sync or Wednesday's team stand-up are the first live opportunities (Est: 15 min within an existing meeting, not a new one)
- [ ] If still unresolved after that conversation, escalate above Adrian/Barry rather than repeating the ask a fourth time at the same level (Est: TBD, contingent on outcome)
- [ ] Check CIE PM vacancy status — flagged as needing a check for three weeks running, never confirmed done or escalated (Est: 30 min)

**Dependencies:**
- Needs from: Adrian Ang, Barry Lim — name the owner, synchronously
- Blocks: VAPT remediation timeline confidence, MVP launch gate confidence

**Linked to:**
- Risk register: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (I-09, R-26)
- Weekly review: [2026-W39 Weekly Review](../weekly-reviews/2026-W39-weekly-review.md) — names this exact escalation-channel pattern as last week's clearest actionable learning

---

## PRD Pipeline This Week

| PRD / Epic Doc | Current Stage | Target Stage by Friday | Action Needed |
|---|---|---|---|
| R1 Release One-Pager | Confirmed scope, pending re-estimate | Re-estimate unblocked | Priority 1's confirmation meeting |
| Epic A — STIPs & Gigs | Stable, confirmed final | Groomable | Confirm with Rama/Barry how FormSG-link parsing works (carried from last week) |
| Epic B — Internal Jobs (incl. IJR) | Blocked (Internal Jobs half), groomable (IJR half) | Internal Jobs half unblocked, or explicit fallback written | Priority 2 |
| CareerCompass MVP | Delivered, hardening | Launch-readiness confidence restored | Priority 3 (VAPT triage owner) |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|---|---|---|---|
| Mon | Bi-weekly sync — Michelle (1:45pm) | Raise VAPT triage ownership directly with Adrian if present (Priority 3) | Y — have the 3-week pattern ready to name explicitly |
| Mon | POCDEX x Compass Sync on test cases (4pm) | Cross-squad dependency check | N |
| Tue | OTEP Squad Sync (9:30am) | Standing squad sync — listen for any further R1 scope movement before Priority 1's meeting happens | N |
| Tue | Design review with BO (2pm, biweekly) | Design alignment | Y if R1 discovery UI is on the agenda |
| Wed | POCDEX DO x Compass weekly sync (4:30pm) | Cross-squad dependency check | N |
| Thu | Sprint planning / Backlog grooming (2pm) | **Set Sprint 11's goal explicitly** — Sprint 10 closes Sunday with no goal ever set, second sprint running | Y — come with 2 candidate goals, per last cycle's pattern |
| Thu | Check-in with Jace (8:45am) | VAPT/CIE PM vacancy status check | Y — Priority 3 |
| Fri | OTEP Squad Sync (9:30am) | Standing squad sync | N |
| Fri | Sprint Internal Demo (2:30pm) | Demo Sprint 10 output | N |

**Meeting load:** 22 meetings across the week, roughly 15+ hours in scheduled time — Heavy. This includes 5 recurring Performance Testing Preparation & Readiness Review sessions (daily, 5:30pm) that weren't flagged as needing prep.

**Deep work capacity:** Not fully calculated, but the gaps are tight given the meeting density — expect most execution work to happen early morning or in the pockets between back-to-back sessions.

**Protected block this week:** **This is the second week running with no protected thinking block named in the prior plan, and last week's review confirmed the whole week got consumed by the scope-reversal crisis, not by planned work.** This is now a pattern, not a scheduling miss. **Tuesday 7:30-9:00am, before Squad Sync — no meetings, dedicated to Priority 1/2 prep.** If this block gets pulled into reactive work again this week, that's the third consecutive week and needs a structural fix (e.g., a standing calendar hold), not a fourth soft flag next Monday.

---

## Strategic Pillar Balance

No formal strategy pillars defined in `context-library/strategy/`. Rough allocation by workstream this week:

| Workstream | This Week's Time | Last Week | Trend |
|---|---|---|---|
| R1 scope-finality confirmation + re-estimation unblock | ~35% | ~50% (was scope reconciliation itself) | ↓ Should decrease if Priority 1 closes early |
| HRPS/Internal Jobs escalation | ~20% | ~25% (was discovery work) | → Steady, now pure escalation not discovery |
| VAPT/CIE ownership gaps | ~15% | ~15% | → Steady, unresolved for 4 weeks running |
| Sprint 11 planning + Sprint 10 close-out | ~15% | New | ↑ New — Thursday's ceremony needs real prep |
| Other (reactive, incl. 5 daily Perf Testing reviews) | ~15% | ~10% | ↑ Increasing — heavier meeting week than last |

**Balance check:**
Last week's time went disproportionately into an unplanned scope crisis. This week deliberately narrows to closing the two loops that crisis left open (Priority 1, 2) before any further R1 work proceeds, rather than starting new scope work on top of an unconfirmed base.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** Adrian, Xian, Mark, and GK can't all be scheduled together this week.
  - **Mitigation:** A written confirmation from all four, explicitly, is an acceptable fallback — but per R-31's own finding, a written summary relayed through one person is not. Get direct confirmation from each, even if asynchronous.
- **Risk:** Lee Koon TEU/NCS still don't produce a date even after a direct call.
  - **Mitigation:** Have the fallback question ready going in: if no date this week, what's the latest date that still allows Internal Jobs discovery to ship inside R1's Feb-Mar 2027 window, and what happens if it's later than that.
- **Risk:** VAPT triage escalation fails a fourth time even after switching to a synchronous ask.
  - **Mitigation:** Escalate above Adrian/Barry immediately, don't wait for a fifth week to try that.
- **Risk:** Thursday's sprint planning repeats Sprint 10's pattern and closes Sprint 11 without a goal too.
  - **Mitigation:** Come to planning with 2 named goal candidates prepared in advance, not generated live in the room.

**Capacity concerns:**
- 22 meetings this week leaves limited room for the actual escalation calls Priority 1 and 2 need — both require scheduling outside the existing calendar, not fitting into it. Book those calls this morning, don't wait for a gap to appear.

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] Kickoff date reconciliation — never happened, superseded by the scope crisis; now addressed as a downstream consequence of Priority 1
- [ ] VAPT triage owner — 3 weeks unresolved, now Priority 3, escalation channel changing per last week's own learning
- [ ] HRPS API delivery date confirmation — open since 23-24 Sep, now Priority 2 with an explicit channel change (synchronous, not written)
- [ ] CIE PM vacancy status check — flagged 3+ weeks running, never confirmed done; folded into Priority 3's task list this time so it doesn't drop silently again

**Learnings applied:**
- Two consecutive weeks of async VAPT escalation with no movement → this week's Priority 3 explicitly switches to a synchronous ask, per last week's own review.
- The kickoff-date task assumed scope was stable when it wasn't → this week's Priority 1 checks scope finality directly before touching the estimate again, rather than repeating a "just pick a date" framing.
- Relayed summaries produced conflicting scope pictures three times last week → Priority 1 explicitly requires direct confirmation from all four people, not a relay through one.

---

## Success Metrics

**How we'll know this week was successful:**
1. Adrian, Xian, Mark, and GK have all directly confirmed (or explicitly not confirmed, with the open question named) that R1's 25 Sep scope is final.
2. Either a committed HRPS API delivery date exists, or a written fallback position exists for what Internal Jobs discovery looks like without one.
3. A VAPT triage engineer is named, or an explicit escalation past Adrian/Barry has happened — not a fourth week of silence.

**Leading indicators to track:**
- Whether the Priority 1 meeting actually gets scheduled by Tuesday — if it's still unscheduled by Wednesday, that's this week's version of last week's Tuesday-sync slip.
- Whether Thursday's sprint planning produces a written Sprint 11 goal in the room, not a verbal one that needs re-deriving Friday.

---

## This Week's Strategic Skill

**Suggested:** `/decision-doc`

**Why this week:** Priority 1's confirmation meeting will produce exactly the kind of decision that needs to stick immediately, in writing, the same day — this is the third time in three weeks a scope confirmation has been made and then re-litigated because it wasn't captured cleanly at the moment it happened.

**When to run:** Immediately after the Priority 1 meeting, before the next squad sync has a chance to relay it differently.

**What you'll get:** A single dated decision record naming who confirmed what, that every R1 document can point back to instead of restating.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, open risks, and last week's unresolved items.*

| When | Skill | Why |
|---|---|---|
| Before Thursday's sprint planning | `/sprint-check` | Sprint 10 closes with no goal set — confirm the ready shelf before Sprint 11 planning starts, don't repeat the gap |
| Immediately after Priority 1's confirmation meeting | ⚠️ Critical — `/decision-doc` | Lock the scope-finality decision in writing same-day, per this week's strategic skill above |
| After Thursday's sprint planning | ⚠️ Critical — `/grooming-close` | Confirm Sprint 11's stories are actually ready, not just discussed |
| Ongoing this week | ⚠️ Critical — `/stale-check` | Three trackers (sprint-status, tasks-active, open-items in the delivery workspace) were found a full sprint cycle stale on Friday — don't let that recur |
| Friday | ⚠️ Critical — `/weekly-review` | Confirm Priority 1 and 2 actually closed, not just scheduled |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- This list is not exhaustive — it's the minimum set to stop this week's known risks (unconfirmed scope, unnamed VAPT owner, a second un-goaled sprint) from repeating a third or fourth time.

---

*Generated: 2026-09-28*
*Next: Run `/daily-plan` each morning to execute against this plan*
