---
week: 2026-W27
week_start: 2026-06-29
week_end: 2026-07-04
quarter: Q2/Q3 2026
sprint: Sprint 5 (29 Jun – 12 Jul)
---

# Weekly Plan — Week of 29 June 2026 (W27)

## TL;DR

- **Top 3:** (1) S5 sprint start — demo + board health + open items, (2) KR Word doc to Jace, (3) November go-live — surface formally to Jace
- **Key milestone:** Close the QA carry-in tail by mid-week. **Updated 2026-07-01:** #40 (Mark's R1 sign-off) now happens at the 9 Jul SteerCo — no longer a W27 action.
- **Carry-forward risk:** Competency/taxonomy SSOT governance is still unresolved (4 meetings last week, no resolution). Ram needs to schedule the SSOT session before the next Design Review — nudge this week if it isn't moving.

---

## Carry-Over from W26

| Item | Status | This Week |
|------|--------|-----------|
| Internal demo (cancelled Fri — dev env broken) | Reschedules to Mon 29 Jun AM | P1 — confirm env and run |
| #40 Mark ask — R1 scope sign-off | Now scheduled for 9 Jul SteerCo | ✅ No longer a W27 action — waits for SteerCo |
| KR Word doc + feedback list → Jace | Due ~3 Jul | P2 — send by Wed |
| OTEP-439/386 BO sign-off (#43) | Amber/Thomas in progress without BO answers | Nudge Amber at standup Mon |
| November go-live formal position | Not yet communicated to Jace | P3 — brief W27 |
| SSOT session with WD/BOS/Cumulus | Ram to schedule | Nudge if not booked by Wed |
| CEG invoice (#48) | Open | Batch with admin tasks |

---

## Strategic Context

**North Star:** By Dec 2026 MVP, establish baseline for pilot cohort — completed development actions (course completion or opportunity placement) originating from CareerCompass.

**This week's stakes:** Sprint 5 is the first sprint with real auth ambition (WOG AD realistic landing, C@G detail). Getting the sprint healthy on Day 1 matters — 10 QA carry-ins plus 12 In Progress stories from S4 means the board is heavy. The two upstream moves (Mark + Jace) are high-leverage because they unblock R1 planning and reset the go-live narrative before the wrong date sets in stakeholder memory.

---

## Priority 1: S5 Sprint Start — Demo + Board Health + Open Item Nudges ⭐ Most Important

**Why this matters:**
- Advances: MVP delivery — Sprint 5 is auth sprint; a bad start compounds
- Impact: 10 QA carry-ins from S4 landing this week clears the tail; missing this delays auth closure
- Risk if not done: Amber and Thomas continue building OTEP-439/386 without BO sign-off (#43) → rework

**Success looks like:**
- Internal demo runs Monday (dev env confirmed working)
- By Wednesday: QA carry-ins have clear owner status (not just sitting)
- Open item #43 nudged to Amber at Monday standup; BO response in motion by EOW

**Key tasks:**
- [ ] Confirm dev environment working before Monday demo (Leverage — unblocks team morale + stakeholder trust)
- [ ] Run internal demo Mon AM (Leverage)
- [ ] Standup Mon: explicitly nudge #43 — BO sign-off on hide vs show-but-disable before Amber/Thomas go deeper (Leverage)
- [ ] S5 board sweep: confirm 10 QA carry-ins all have owners and next-action clarity (Neutral)
- [ ] Nudge Ram on SSOT session booking — if not scheduled by Wed, flag to Adrian (Leverage)

**Dependencies:**
- Needs from: Dev team — environment fix (Fabian / whoever owns infra)
- Needs from: BOs — response on #43 (hide vs show-but-disable)
- Blocks: Amber + Thomas from rework risk on OTEP-439/386

---

## Priority 2: KR Word Doc to Jace

**Updated 2026-07-01:** #40 (Mark's R1 sign-off) is no longer a W27 action item — confirmed it will happen at the **9 Jul SteerCo meeting** instead. Removed from this week's chase list; R1 sprint planning stays blocked until then, but there's nothing further for Michelle to push on before 9 Jul.

**Why this matters:**
- Advances: KR Word doc is a standing commitment to Jace, independent of R1 timing
- Due date: KR Word doc due to Jace by ~3 Jul (Thu)

**Success looks like:**
- By Thursday: KR Word doc + feedback list delivered to Jace

**Key tasks:**
- [ ] Write KR Word doc: 3 mid-year KR definitions + Jace's feedback list (Neutral — already drafted, needs formatting + send)
- [ ] Send to Jace by Thu 2 Jul (Neutral)

**Dependencies:**
- Blocks: R1 sprint planning, capacity conversation (now gated on 9 Jul SteerCo, not this week)

---

## Priority 3: November Go-Live — Surface Formally to Jace

**Why this matters:**
- Advances: Stakeholder alignment on realistic delivery (VAPT 7 Sep–16 Oct → deploy 19–23 Oct → soft launch 26–30 Oct → first release 2 Nov)
- Impact: October is currently in Jace's head as the target. Both Wed sessions last week concluded it's unrealistic. The longer this sits, the harder the conversation becomes.
- Risk if not done: Jace operates on October expectation into W28+ stakeholder comms, and the correction becomes a bigger surprise

**Success looks like:**
- A one-pager (or structured Slack / email) sent to Jace by Friday with the updated timeline and rationale
- Frame: not a slip, a realistic sequence (VAPT + remediation = November)

**Key tasks:**
- [ ] Draft one-page timeline brief: VAPT logic → November framing (Leverage — the sooner this lands, the less downstream damage)
- [ ] Send to Jace by Fri 3 Jul (Leverage)
- [ ] Note: Jace away 26 Oct – 5 Nov; flag cover plan (Adrian, Rama, Barry, Pow Hwee) in the brief as a signal we've thought it through (Neutral)

**Dependencies:**
- Needs from: Adrian — alignment that this is the position we're taking before Michelle sends (quick Slack check Mon)
- Blocks: Accurate stakeholder comms for the rest of Q3

---

## PRD Pipeline This Week

| PRD / Feature | Current Stage | Target by Friday | Action Needed |
|---------------|---------------|-----------------|---------------|
| Competency/SSOT governance | Blocked — no SSOT session | SSOT session booked | Nudge Ram; loop Imelda |
| R1 scope epics | Provisional (jam done) | Waiting on 9 Jul SteerCo | No action needed until SteerCo — #40 sign-off happens there |
| CMM v1.0 + v1.1 (from Slack threads) | Discussion | ETA from Victor/Barry | Watch — not Michelle's to drive |
| Max bot integration | Evaluation | Adrian to follow up | Watch only |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon 29 | Internal demo (rescheduled) | Show S4 build to stakeholders | Confirm dev env working pre-demo |
| Mon 29 | Standup | Sprint start; #43 nudge | Have #43 context ready |
| Wed/Thu 29–30 | CoachPal / Jasmine Richard session (29 Jun) + Adrian follow-up (30 Jun) | CoachPal context | Check any PM-OS context on CoachPal |
| Thu 3 | (Target) KR doc → Jace | Deliver mid-year KR definitions | Word doc ready |
| Fri 4 | (Target) November brief → Jace | Go-live timeline | One-pager drafted |

---

## Open Items to Watch (Not Driving, But Tracking)

| # | Item | Status | Watch signal |
|---|------|--------|-------------|
| #26 | WOG AD onboarding (submitted 10 Jun) | 2-4 wk clock running — due ~8–24 Jul | Alert if no update by Jul 8 |
| #30 | CSC SSO (DLE) | Technical confirmed; approval docs TBC | Pow Hwee to get docs answer from DLE |
| #31 | POCDEX — Core team two Qs | Blocked on Pei Ern / Kingsley | Pow Hwee owns; check if answer landed |
| #18 | Competency SSOT governance | Re-opened 26 Jun — SSOT session needed | Ram to schedule; Michelle nudges |
| #38/#46 | SWDA merger (WSG+SSG, effective 1 Jul) | Alan's team updating OTG inclusion file by 30 Jun | Check done on Mon 29 |
| #48 | CEG invoice | Open | Batch with admin |

---

## Risks and Mitigations

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Dev environment still broken Monday — demo cancelled again | Medium | Check env Sunday night or first thing Monday AM before inviting stakeholders in |
| ~~#40 ask never reached Mark~~ | ~~Medium~~ | Resolved 2026-07-01: sign-off confirmed for 9 Jul SteerCo, no longer a live risk this week |
| SSOT session doesn't get booked — blocks R1 Epic E grooming | High | Escalate to Adrian by Wednesday if Ram hasn't scheduled |
| Jace locks in October go-live publicly before Michelle briefs her | Low-Medium | Send brief before Friday's standup window |

---

## LNO Classification for the Week

| Task | Classification | Reasoning |
|------|---------------|-----------|
| S5 board health + demo | Leverage | Sprint start quality compounds across 2 weeks |
| #43 BO sign-off nudge | Leverage | Prevents rework by Amber + Thomas |
| ~~#40 Mark ask~~ | ~~Leverage~~ | Removed 2026-07-01 — happens at 9 Jul SteerCo, not a W27 task |
| KR Word doc → Jace | Neutral | Committed deliverable, not optional |
| November brief → Jace | Leverage | Resets stakeholder narrative before it hardens |
| CEG invoice | Overhead | Admin — batch it, don't let it take time away from the above |

---

## Success Metrics

1. Internal demo runs Monday (dev env green)
2. ~~#40 Mark ask confirmed sent by Monday EOD~~ — superseded 2026-07-01: sign-off now happens at 9 Jul SteerCo
3. KR Word doc delivered to Jace by Thursday 2 Jul
4. November go-live brief sent to Jace by Friday 4 Jul
5. #43 BO answer in motion (response requested; not necessarily received)
6. SSOT session either booked or escalated to Adrian

---

## This Week's Strategic Skill

**Suggested:** `/impact-sizing`

**Why this week:** R1 scope is now shaped (4 epics from the Adrian jam) but not yet sized. With Mark's sign-off now confirmed for the 9 Jul SteerCo, having rough effort-to-impact estimates ready beforehand strengthens that conversation and helps Adrian frame the capacity ask.

**When to run:** Anytime before 9 Jul — no longer gated on the Mark ask landing this week.

**What you'll get:** A driver tree + confidence-calibrated size estimate for R1's highest-stakes features, which feeds directly into the capacity conversation Adrian needs to have.

---

*Generated: 2026-06-29*
*Sources: W26 weekly review, tasks-active.md, sprint-status.md, open-items.md, otep-roadmap-okrs-2627.md, 2026-06-29 Slack thread roundup*
*Next: Run `/daily-plan` Monday AM to sequence the day | Run `/sprint-pulse` after standup to catch overnight Jira activity*
