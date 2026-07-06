---
date: 2026-07-06
owner: Michelle Yip
type: recommendation
audience: SteerCo (9 Jul) — input to the consolidated-narrative demo, not a standalone deck
role-note: Michelle co-preps the demo with Imelda, Rama, and Pow Hwee; the North Star brief and gap analysis are owned elsewhere. This document is her recommendation to feed into that narrative, not the SteerCo deck itself.
sources:
  - outputs/analyses/2026-07-04-W27-r1-must-epics-effort-sizing.md
  - outputs/research-synthesis/2026-07-06-W28-r1-user-personas.md
  - outputs/prds/2026-07-06-W28-r1-job-stories.md
  - outputs/journey-maps/2026-07-06-W28-r1-user-journey-map.md
  - context-library/prds/r1-seamless-application-draft.md
---

# R1 Recommendation for SteerCo (9 Jul)

## So what

R1's Must-have floor (Epics A, B, C) is real, sized as far as it can be, and roughly 40-60% of it can't be estimated yet because the hardest part of every epic is gated on a decision nobody outside this team can make. Ask SteerCo to unblock three named items with dates, not headcount. More people won't fix an undefined auth model or an unsigned data contract.

## The ask

Get explicit owner + date commitments on three blockers, each one gating the *core* value of its epic, not a peripheral piece:

| Blocker | Gates | Owner | Status |
|---|---|---|---|
| Agency-admin auth undefined | All of Epic A (posting creation) | Pow Hwee / Fabian | No date |
| Competency SSOT contract (#18/#41) | Epic B's pre-fill (its whole value prop) and Epic C's applicant-review data | Léo / Kingsley | No date |
| Manager status-update UX undesigned, Red risk | Epic C's manager-facing half — net-new since the ATS integration was dropped | Design (owner TBC) | No date |

None of these are new. They're the same three items the effort-sizing analysis already flagged on 4 Jul. What's changed since then: they still have no dates, and every week without one pushes the eventual build window shorter without shrinking the work.

## The numbers, stated honestly

Don't let SteerCo hear a single total-point estimate — that would repeat the exact mistake that caused the World A → B scope revert (assuming a build was smaller than it turned out to be once examined).

- **Estimable now:** ~36-64 points across A, B, C — roughly 1.5-2.5 sprints of two-developer capacity.
- **Actually unknown:** plausibly 1.5-2x that, because the blocked pieces in every epic are each epic's primary value driver, not secondary polish.
- **The honest framing:** "We can start building the 40-60% of R1 that's already clear. The other 40-60% — which happens to be the hardest and most valuable part of each epic — needs these three things resolved before it can be sized at all."

## Where the risk actually shows up (not just in story points)

The R1 journey map makes the blockers concrete instead of abstract:

- If manager status-update UX ships undesigned or late, it doesn't just delay Epic C — it directly breaks the promise behind Epic C's officer-facing side (the ≤24-hour status update), since a manager's action is what starts that clock.
- If the SSOT contract lands with stale or incomplete data, the PRD's own guardrail is explicit: bad pre-fill erodes officer trust *faster than no pre-fill at all*. Shipping Epic B's apply flow without resolving this first risks making the officer experience worse than today's baseline, not better.
- If agency-admin auth stays undefined, Epic A cannot enter the story pipeline at all — this isn't a sequencing nicety, it's a hard gate per the PRD's own readiness criteria.

## What's explicitly not resolved (say this at SteerCo, don't paper over it)

- **Epic D (Saved Jobs)** is Should-have, not Must-have, and is the first thing cut if R1 needs to shed scope. If it's cut, the persona it serves (the Passive Watcher, ~feeding into the primary Intentional Mover funnel) gets zero R1 improvement, and R1's only funnel-widening on-ramp disappears quietly. If scope pressure comes up at SteerCo, name this trade-off explicitly rather than letting Epic D get cut as an unexamined "nice-to-have."
- **Status latency target (≤24 hours)** changed what it measures — from an ATS event to a Posting Manager's in-OTEP action — and Adrian hasn't explicitly signed off on the redefined target yet. Don't present this number as locked.
- **No committed R1 metric exists yet for the Posting Manager persona** (Epic A/C's manager-facing side). Worth flagging as a gap, not a settled omission.

## Recommended framing for the demo narrative

"R1's foundation is sound and roughly half of it is ready to build now. The other half is gated on three specific, nameable decisions, not on more engineering time. Every week those three items sit without an owner and a date is a week the eventual timeline compresses without the scope getting any smaller."

This mirrors the CMM framing decision from the 1 Jul SteerCo prep debrief (name the real constraint plainly, don't understate it to look more finished) and avoids re-creating the CIE-validation-narrative problem flagged in that same meeting — presenting something as more settled than it actually is is the exact failure mode SteerCo has already been burned by once this cycle.

## Immediate next steps (before 9 Jul)

1. Land owner + target date on all three blockers (auth, SSOT contract, manager UX) — asks already drafted, see [2026-07-06-W28-r1-blocker-asks.md](../slack-messages/2026-07-06-W28-r1-blocker-asks.md).
2. Get Pow Hwee to sanity-check the estimable point ranges against real story-writing before quoting them anywhere.
3. Decide how Epic D's scope-risk gets surfaced at SteerCo — as a live trade-off question, not a background assumption.
4. Confirm with Adrian (via Jace) whether the redefined 24-hour latency target holds.

---

*This document is Michelle's recommendation into the 9 Jul demo/narrative prep with Imelda, Rama, and Pow Hwee — it is not the SteerCo deck, North Star brief, or gap analysis, which are owned elsewhere.*
