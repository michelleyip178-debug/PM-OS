---
title: Analysis — Employment Profile Business Requirements (Confluence page 2645166214)
date: 2026-09-10
week: 2026-W37
initiative: Post-MVP / R1 — Employment Lifecycle Handling
source: Confluence OTEP/Employment Profile- Business Requirements, v9, last edited 2026-09-09 by Imelda Mo
analyst: Michelle Yip
status: draft analysis — for scope-cut decision doc + R1 grooming
related: employment-lifecycle scope-cut (daily plan carry-over, day 5); OTEP-1487 hidden-competency question
---

# Analysis: Employment Profile Business Requirements

## What it is

Defines how Career Compass should behave when an officer's POCDEX data changes due to an employment lifecycle event — promotion, transfer, redesignation, secondment, forward deployment, double-hatting, stop double-hatting.

Compass today assumes **one employment record per officer, email as the ID**. That breaks post-MVP when officers change agency (email changes), hold two positions, or get seconded.

## State: alignment draft, not a spec

- Section 1 data-change table is explicitly "Needs validation from WD and POCDEX" — every cell is a guess.
- ~20 open questions sit inside the requirements, most with two options and no answer.
- Only 3 questions answered (all one-liners from Xian Zhang).

**Cannot go to grooming as-is.**

## The model (right instincts)

Five principles: single continuous officer experience (no new profile on a change) · latest POCDEX state wins · competencies move, don't vanish · distinguish current vs past role · double-hatters are one officer.

Then: **implement to the outcome, not the scenario** — group scenarios with the same behaviour into one story. That's where the scope cut lives.

## Scenario groups

| # | Group | Behaviour state |
|---|---|---|
| A | Basic profile change, no job change (email, name, NRIC, designation) | Clear. Key need: NRIC change = same officer, not a new account. Match logic undefined. |
| B | Role change, keep one position (promotion, transfer, redesignation) | ~80% defined. New role competencies replace old; displaced ones move to self-declared; ring-fence on new grade + agency; Report Issue resets. 3 open questions. |
| C | Secondment | Same as B + ring-fence on both new and parent agency. Which agency/email/designation to display: open. |
| D | Forward deployment | By analogy to B. No known POCDEX marker — identifying it is a discovery task. |
| E | Start double-hatting (1→2 positions) | Direction set (combine both roles' competencies, show both titles). Recommendation logic and 2-grade ring-fencing undesigned. Definition still "TBC". |
| F | Stop double-hatting (2→1) | Defined. Open: if the ended position reappears later, restore or ignore? |

Plus two **foundation stories**: identity resolution + profile sync. A–F sit on top.

## Decisions blocking grooming

1. **Competency hide/show preference across a role change.** When a competency moves category, does the officer's hide/show choice carry over, or re-prompt? Appears 4+ times, unanswered. **Same question as OTEP-1487** (which assumes `isHidden = true` = excluded) — decide together, don't let OTEP-1487 ship first.
2. **New role has no role-based competencies — move old ones to self-declared, or remove?** Doc has a tentative "move all to additional" but never commits.
3. **Secondment / forward-deployment display values** — which agency, email, designation shows.
4. **Double-hatting: which position drives recommendations, ring-fencing across two grades.** Both undesigned. Intersects the 9 Sep perf-test matching risk (a second active position multiplies the tier-3 path).
5. **Report Issue status reset on role change** — tentative yes, confirm.

## POCDEX questions to confirm before build

- Under what circumstances does Position ID change? (TC79–82)
- Can `primaryPosition` be used to identify double-hatters? (TC45)
- Does `secondmentIndicator = true` apply to all seconded officers, or only cumulus→non-cumulus? (TC68)
- `primaryPosition` vs `mainJob` indicator — which does Compass key on? (TC118)
- Forward deployment: no marker at all — can it be identified from a mix of data points?

## Connections to work in flight

| This doc | Connects to |
|---|---|
| Secondment marker vs. derived | **Theme 6** of the R1 admin-portal synthesis — same POCDEX field, decide once |
| Hide/show preference (Decision 1) | **OTEP-1487** — don't build before Decision 1 lands |
| Ring-fencing on lifecycle events | Extends **OTEP-127** (MVP ringfencing) |
| Double-hatting recommendation recalc | **9 Sep architecture review** matching risk — flag for perf-test scenario design |
| Identity match on email/NRIC change | **wog-authentication** (email = ID today); NRIC matching needs security sign-off |

## Scope-cut recommendation

**R1-v1 (in):**

| Story | Why |
|---|---|
| Identity resolution (match across email + NRIC + agency change) | Everything breaks without it; officers stop losing their profile on a transfer |
| Profile sync (apply latest POCDEX state) | Prerequisite for all scenario behaviour; contained |
| Group B: role change, keep one position | Most common event; ~80% defined; 3 open questions, one WD session closes them |

**Defer to R1.x:**

| Deferred | Why |
|---|---|
| Secondment (C), forward deployment (D) | Display rules open; forward deployment has no POCDEX marker; parent-agency ring-fencing is new logic |
| Double-hatting (E, F) | Recommendation logic + 2-grade ring-fencing undesigned; multiplies the perf-test matching risk |

**Close before grooming the minimum:** Decision 1 (with OTEP-1487) · Decision 2 · Section 1 table validated for the B rows only · NRIC-match approach with security.

## Next steps

1. **`/decision-doc`** — bundle: hide/show preference (+ OTEP-1487), secondment/forward-deployment display values, the R1-v1 scope line. Vehicle to confirm the scope cut — day 5.
2. **One WD + POCDEX session** — validate the Section 1 table for the promotion/transfer/redesignation rows only, plus the `secondmentIndicator` question.
3. **Grooming (14:00):** OTEP-1487 blocked until Decision 1.
4. **Perf-test readiness (17:00):** double-hatting deferred → journeys assume one active position; confirm for the 16 Sep run.
5. **Sync with Imelda** (doc owner) — agree the scope line before it goes to Adrian.

## Appendix: Xian Zhang's 3 answers

| Question | Answer |
|---|---|
| Does Compass need officers to pick their own role, like OTG? | No — HR-assigned. |
| Old job/position ID reappears in the payload — accurate or error? | Assume whatever POCDEX passes is correct. |
| Do seconded officers ever get a grade change? | Possible. |
