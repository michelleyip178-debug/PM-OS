---
week: 2026-W34
week_start: 2026-08-17
week_end: 2026-08-21
quarter: Q2/Q3 2026
---

# Weekly Plan - Week of August 17, 2026

## TL;DR

- **Top 3:** (1) Escalate WOG AD prod confirmation + approval-clock status — third named check-in already missed, escalate don't re-ask; (2) Escalate UAT Gate 2 the same way — go over Rama's head to Adrian if Monday produces nothing; (3) Push PS/DS decision to actual close via Adrian, or name the third-week slip explicitly to stakeholders.
- **Meeting load:** No formal ceremony this week (Sprint 8 async check-in) — protect the freed-up time for escalation follow-through and Ops Portal work, don't let it get reabsorbed.
- **Key milestone:** Sprint 8 feature freeze ends Friday 21 Aug. No Sprint 9 buffer. This is the last week these three items can slip without hitting the go-live critical path directly.

---

## Strategic Context

**Quarter Goal:** MVP go-live (target week of 19–23 Oct 2026), gated by WOG AD auth → CSC SSO chain (6 weeks total) and UAT Gate 2 broadcast. OKR 1–3 targets (competency growth, career development, workforce planning) all depend on the pilot cohort (6 agencies, ~5,400 officers) actually onboarding on schedule.

**North Star Progress:** Pre-MVP — baseline establishment phase, not yet tracking against the Dec 2026 MVP target.

**This Week's Focus:**
Three items have now carried two weeks running with the same "direct ask, no closure" pattern (documented in Friday's W33 review). This week the fix isn't a fourth ask — it's an actual escalation with a named fallback owner. Sprint 8 freeze ends Friday, and there's no Sprint 9 buffer to absorb further slippage on WOG AD or Gate 2.

---

## Top 3 Priorities

### Priority 1: Escalate WOG AD Prod Confirmation + Approval-Clock Status ⭐ Most Important

**Why this matters:**
- Advances: MVP go-live critical path — gates WOG AD auth (OTEP-71/110/304/305) AND the downstream CSC SSO chain (#30, 4 more weeks after this closes)
- Impact: Feature freeze is Friday. OTEP-71 is still "In Progress" in live Jira. Every day this stays open compresses the 6-week WOG AD→CSC chain against a fixed go-live date.
- Risk if not done: Third consecutive week of "still pending" status with no escalation actually firing. The dev-environment fix (confirmed 13 Aug) risks getting misreported as "resolved" if this isn't explicitly separated from prod confirmation.

**Success looks like:**
- A dated answer from Pow Hwee (or an escalation to whoever can force one) on: (1) prod/UAT confirmation, (2) whether the form resubmission restarted the 2-4 week approval clock.
- If no answer lands by Wednesday, this goes to Adrian directly — not a fourth check-in message to Pow Hwee.

**Key tasks:**
- [ ] Monday: send a dated, explicit ask to Pow Hwee — "need both answers by Wed EOD, or this goes to Adrian" (Est: 0.5 hr)
- [ ] Wednesday: if silent, escalate to Adrian directly, don't restate the item as "still pending" (Est: 0.5 hr)
- [ ] Once answered: update OTEP-71 Jira status and risks.md #26 same day (Est: 0.5 hr)

**Dependencies:**
- Needs from: Pow Hwee — both answers; ticket resolution owner sits outside Pathfinder's control
- Blocks: CSC SSO chain (#30), WOG AD auth stories, Feature Freeze close-out

**Linked to:**
- [risks.md #26](file:///Users/michelleyip/Documents/PM-skills-ALL-1/00-hub/risks.md)
- [2026-08-13 dev re-enable decision note](file:///Users/michelleyip/Documents/PM-skills-ALL-1/../PM-OS/outputs/decisions/2026-08-13-W33-wog-ad-dev-re-enabled.md)

---

### Priority 2: Escalate UAT Gate 2 Confirmation + Broadcast

**Why this matters:**
- Advances: UAT readiness for the pilot cohort — Gate 2 confirmation unlocks the wider Batch 1 broadcast
- Impact: This is the cleanest miss from last week — an ask went out Tuesday, three flagged escalation checkpoints (Wed/Thu/Fri) passed with no evidence the escalation itself fired.

**Success looks like:**
- Gate 2 confirmed and Batch 1 access broadcast to the wider group, OR a clear record that this went over Rama's head to Adrian with a new committed date.

**Key tasks:**
- [ ] Monday: direct ask to Rama, with an explicit deadline stated in the message (not just implied) (Est: 0.5 hr)
- [ ] Monday EOD: if no response, escalate to Adrian same day — don't wait for a Wednesday checkpoint that didn't fire last time (Est: 0.5 hr)
- [ ] Once confirmed: broadcast to wider UAT group same day (Est: 0.5 hr)

**Dependencies:**
- Needs from: Rama (primary) or Adrian (escalation path)
- Blocks: Wider UAT broadcast, pilot cohort confidence

**Linked to:**
- [open-items.md](file:///Users/michelleyip/Documents/PM-skills-ALL-1/00-hub/open-items.md)

---

### Priority 3: Force the PS/DS Accept/Reject Decision to Close

**Why this matters:**
- Advances: R1 timeline clarity — this is the second week the actual accept/reject decision (not just content edits) hasn't happened
- Impact: Ownership sits with Adrian now (correctly), but Michelle still needs to confirm this doesn't silently slip a third week.

**Success looks like:**
- Either the decision closes this week via `/decision-doc`, or there's an explicit, dated conversation with Adrian naming the risk of a third-week slip — not silent tracking.

**Key tasks:**
- [ ] Tuesday: check in with Adrian on SD(WD)/D(ITC) routing sign-off status — informed-only doesn't mean untracked (Est: 0.5 hr)
- [ ] If it closes: run `/decision-doc` same day to capture accept/reject rationale (Est: 1 hr)
- [ ] If still open by Thursday: name the third-week-slip risk explicitly, don't let it roll into next week unspoken (Est: 0.5 hr)

**Dependencies:**
- Needs from: Adrian (owns end-to-end), SD(WD)/D(ITC) routing sign-off
- Blocks: R1 timeline finalization

**Linked to:**
- [W33 weekly review](file:///Users/michelleyip/Documents/PM-OS/outputs/weekly-reviews/2026-W33-weekly-review.md)

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|----------------|
| Ops Portal / Career Compass (Day-2 profile-change detection) | v2.3, 2 of 17 Open Items closed | Engineering resourcing started | Push Ram's resourcing forward; chase Open Item #13 (receiving-team leadership sign-off) |
| R1 planning artefacts (#59: Scope Contract, Dependency Tracker, Competency Ownership Paper, Critical Path Timeline) | Designers committed Wed 12 Aug; delivery unconfirmed in any tracker | Confirm designer output landed | Direct check before 20 Aug grooming — grooming depends on this |

---

## Key Meetings

No formal ceremony this week — Sprint 8 is confirmed async check-in (no retro). Treat the freed calendar time as protected escalation and Ops Portal follow-through time, not as slack to be reabsorbed by ad hoc requests.

**Meeting load:** Light (async check-in week)

**Deep work capacity:** High relative to a normal sprint week — this is the week to actually use it

**Protected block this week:** Wednesday 2–4pm, no meetings. Reserve for: confirming whether Priority 1/2 escalations fired (not just re-checking status), and Ops Portal Open Item #13 follow-through. **This is the second consecutive week a protected block is being explicitly named — last week's Wednesday block held its stated purpose (a genuine improvement over the week before), so keep the same discipline: use it for the escalation-verification step, not for reactive inbox work.**

---

## Strategic Pillar Balance

| Pillar | This Week's Time | Last Week | Trend |
|--------|------------------|-----------|-------|
| MVP delivery (auth/UAT critical path) | 45% | ~35% | ↑ Increasing — freeze week forces focus |
| Ops Portal / Day-2 profile-change | 35% | ~45% (unplanned, dominated the week) | ↓ Slightly down, now planned instead of reactive |
| R1 planning | 20% | ~20% | → Steady |

**Balance check:**
Ops Portal work isn't going away — it's real, substantive, and should stay named rather than treated as unplanned overflow again. But this week MVP critical-path items (WOG AD, Gate 2) need to win any time conflict, since Friday's freeze deadline is fixed and Ops Portal isn't.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** Pow Hwee and Rama both stay silent again despite direct asks (documented pattern, 2 weeks running).
  - **Mitigation:** Escalation triggers are dated and named in this plan itself (Wed for WOG AD, same-day for Gate 2) — next Monday's plan should explicitly confirm whether each escalation fired, not just restate status.

- **Risk:** Ops Portal work re-expands to consume the week again, crowding out the three named priorities (exactly what happened in W33).
  - **Mitigation:** Ops Portal is explicitly budgeted at 35% above. If it's tracking to exceed that by Wednesday, that's the trigger to name it as a 4th priority rather than let it absorb time unacknowledged.

**Capacity concerns:**
None — light meeting week gives real room for both the escalation work and Ops Portal, as long as escalation follow-through doesn't get deprioritized in favor of the more tangible Ops Portal work.

---

## Carry-Over from Last Week

**Incomplete items (all three from W33, now entering week 2 or 3):**
- [ ] PS/DS accept/reject decision (#39) — 2nd week the decision itself hasn't closed, despite content progress
- [ ] UAT Gate 2 confirmation — direct ask sent, escalation trigger didn't fire despite being named
- [ ] WOG AD prod confirmation + approval-clock status — dev fix confirmed, prod/approval question unanswered across 3 named check-ins

**Learnings applied:**
- Named escalation triggers without a verification step don't produce escalation (W33 learning #1) → this week's tasks include an explicit "confirm the escalation fired" step, not just "escalate if silent"
- Direct asks work for starting responses, not closing them, when the real blocker is a third party (W33 learning #2) → Priority 1 and 2 both name a specific escalation contact (Adrian) and a specific date trigger, not just a repeated ask
- Unplanned high-priority work (Ops Portal) dominated last week unacknowledged (W33 learning #3) → this week gives it an explicit 35% budget instead of letting it run unbounded

---

## Success Metrics

**How we'll know this week was successful:**
1. WOG AD: either both Pow Hwee answers land, or the escalation to Adrian demonstrably fired by Wednesday (not just "still pending" in Friday's review)
2. Gate 2: confirmed and broadcast, or escalation to Adrian demonstrably fired by Monday EOD
3. PS/DS: decision closes via `/decision-doc`, or the third-week-slip risk is explicitly named to Adrian by Thursday

**Leading indicators to track:**
- Live Jira status of OTEP-71 (currently "In Progress") — check Wednesday
- Whether Pow Hwee/Rama respond by their named deadlines (Wed for WOG AD, Mon EOD for Gate 2)
- Ops Portal Open Item #13 movement (receiving-team leadership sign-off)

---

## This Week's Strategic Skill

**Suggested:** `/decision-doc`

**Why this week:** The PS/DS accept/reject decision has now stalled two weeks running with content progress but no actual decision recorded. Running `/decision-doc` the moment Adrian's rewrite + routing sign-off lands prevents a third week of the same drift.

**When to run:** As soon as Adrian confirms SD(WD)/D(ITC) sign-off status (target: Tuesday check-in) — don't wait for a "clean" moment, run it the same day sign-off lands.

**What you'll get:** A recorded accept/reject rationale with alternatives and trade-offs, closing the loop that's been open since before W33.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase (Sprint 8 feature freeze, no ceremony), open risks, and the Ops Portal thread.*

| When | Skill | Why |
|------|-------|-----|
| Tuesday (after Adrian check-in) | `/decision-doc` | ⚠️ Critical — PS/DS decision has slipped 2 weeks; run the moment sign-off status is known |
| Wednesday (protected block) | `/stale-check` | Confirm WOG AD/Gate 2 escalations actually fired, not just re-flagged as pending |
| Before 20 Aug grooming | `/groom-prep` or `/sprint-check` | R1 designer output (due 12 Aug) needs confirming before grooming depends on it |
| Ongoing this week | `/feature-results` | High — Ops Portal Open Items #1 and #6 closed this week; worth capturing what changed before more Open Items shift status |
| Friday (end of freeze) | `/weekly-review` | ⚠️ Critical — Sprint 8 feature freeze closes Friday, no Sprint 9 buffer; review needs to catch any of the 3 priorities that slipped a 3rd time |
| Daily | `/stale-check` | High — keep hub trackers (open-items, risks) honest given the escalation-heavy week |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- ⚠️ Critical items carry real delivery risk if skipped this week specifically, given the Friday freeze deadline and the two-week-old decision stall.

---

*Generated: 2026-08-17*
*Next: Run `/daily-plan` each morning to execute against this plan*
