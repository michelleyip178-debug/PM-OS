# Opportunities — Items for BO Prioritisation

**Date:** 2026-07-01 (W27)

**Purpose:** All 9 opportunities-related items raised across Monday's Sprint 4 Retro + Demo (29 Jun) and today's SteerCo prep debrief (1 Jul), for the BO to prioritise. Includes items already in the backlog and items still to be created, so the BO sees the full picture rather than just what's new.

**Ask of the BO:** Confirm priority order, and specifically unblock item 6 (#43 sign-off), which is gating three already-written tickets.

---

## Summary for the BO

Nine opportunities items surfaced from the last two demos. Of these, **six already exist as backlog tickets** (some going back to earlier sprints) and **three are net-new asks** not yet in Jira. The most important thing to flag: **three of the existing tickets (items 7-9 below) cannot move at all until the BO makes one decision — #43, hide-vs-show-but-disable for ineligible officers.** That decision has been outstanding since before Sprint 5 grooming and is now blocking real, already-written work.

---

## Items for prioritisation

| # | Item | Jira ticket(s) | Status | Priority ask |
|---|---|---|---|---|
| 1 | Fix Opportunities page spacing/layout regression (shared layout dependency) | **New ticket needed** — related to OTEP-497 (Backlog, typography/spacing on detail page, different root cause) | Not yet actioned since 29 Jun | Needs a priority call — no BO decision required, just sequencing |
| 2 | Missing C@G icon on opportunity cards | Bug against **OTEP-88** (In Progress, Léo) — already covers "C@G badge on card" in its AC | Flagged 29 Jun, not yet fixed | Low BO involvement — engineering execution issue |
| 3 | Fix C@G banner and apply-label behaviour | **New ticket needed** | In progress per 29 Jun notes, not confirmed complete | Needs a priority call |
| 4 | Define search UX behavior model (trigger, suggestions, clear-search, fuzzy match) | **New ticket needed** — product/design decision gap, not an engineering ticket | Unresolved since 29 Jun; same gap as hub tracker #51 (no one owns final search AC sign-off) | **BO/product decision needed on ownership**, not a build priority |
| 5 | Extend opportunity search to competency-based filtering | Likely covered by **OTEP-336** + **OTEP-570** (both Backlog, unassigned) — confirm with BO whether the ask is genuinely broader (true search/filter) or the same as the existing card-level match signal | Both blocked on Core competency endpoint (open-items #18/#41) | **Not actionable regardless of BO priority** — blocked upstream on SSOT governance, separate from this list |
| 6 | Ring-fenced opportunity exclusion logic | **OTEP-390** (detail page states), **OTEP-408** (BE listing filter), **OTEP-409** (FE listing display) — all Backlog, unassigned, fully-specified ACs already written | Ready to build the moment #43 is resolved | **BO decision required: #43 — hide-vs-show-but-disable for ineligible officers.** This is the single highest-leverage decision on this list — it unblocks three already-written tickets at once. |
| 7 | Fix ministry logos on opportunity cards | **OTEP-283** (Backlog, unassigned) — already exists, exact match | Not yet started | Needs a priority call |
| 8 | Opportunity-to-officer competency matching (ingestion/display exists, true matching doesn't) | Same as item 5 — **OTEP-336/570** | Blocked on SSOT (#18/#41) | Not actionable until SSOT resolves — flag as a known gap, not a sprint ask |
| 9 | Overall exclusion/ringfencing scope confirmation | Same as item 6 — **OTEP-390/408/409** | Same as item 6 | Same ask as item 6 — don't present as separate |
| 10 | C@G jobs with no competency tags — Competency Inference Engine (CIE) should infer from the JD, with no human verification step | **No existing ticket found** — confirmed not covered by OTEP-289 (job family/function taxonomy mapping, not competency inference) or existing CIE work (OTEP-26/112/125/205/395, all scoped to CV/resume inference, not job-description inference) | Raised today (SteerCo debrief), not yet ticketed | **New ticket needed.** See risk note below — this is a bigger flag than a normal backlog item. |

---

## What actually needs a BO decision vs. what's just sequencing

**Requires an explicit BO decision (not just priority ranking):**
- **#43 — hide vs. show-but-disable for ineligible officers.** Blocks items 6 and 9 (OTEP-390/408/409). This is overdue — it was meant to land before S5 grooming and hasn't. Recommend leading with this in the BO conversation, since it's the one decision that unblocks the most already-written work.
- **Item 4 — who owns final search UX sign-off.** Not really a BO call, but worth naming in the same conversation since it's been unresolved since 29 Jun (hub tracker #51).

**Just needs a priority/sequencing call (no decision blocking it):**
- Items 1, 2, 3, 7 — straightforward engineering/UI fixes, ready to prioritise whenever capacity allows.

**Not actually prioritisable right now — flag as known but blocked:**
- Items 5 and 8 (competency-based search/matching) — both depend on the Core competency SSOT endpoint (open-items #18/#41), which is a separate governance question the BO can't resolve unilaterally in this conversation. Recommend surfacing this as context, not asking the BO to rank it against the others.

---

## Recommended framing for the BO conversation

Lead with #43. It's the one item on this list where a single decision unblocks three fully-specified, ready-to-build tickets (OTEP-390/408/409) that have been sitting idle since before Sprint 5 grooming started. Everything else on this list is either straightforward sequencing (items 1-3, 7) or blocked on something outside the BO's control (items 5, 8 — SSOT governance).

---

## Partial BO input received (2026-07-01) — needs verification before treating as settled

Michelle received one piece of guidance from the BO: **"if an ineligible officer gets a direct link, he will be routed to login page."**

**This needs clarifying before it's logged as resolving #43**, because OTEP-390's existing AC already distinguishes two different scenarios, and it's not yet clear which one this answers:

1. **Unauthenticated officer via direct link** — OTEP-390's AC already says: redirect to login, then return to the original URL after authentication. If the BO's statement is just confirming this, no change needed — #43 Q1 (hide vs. show-but-disable) is still unanswered for the *authenticated* case.
2. **Authenticated but ineligible officer via direct link** — OTEP-390's AC currently says this officer sees the detail page with an explicit "This opportunity is not available to you" notice, no Apply CTA, and up to 3 alternative opportunities — they are **not** routed to login (they're already logged in). If the BO's statement means this case should *also* route to login (or some other page) instead of showing the notice+alternatives, that's a change to OTEP-390's existing AC, not just new guidance filling a gap.

**Recommend before updating any ticket:** confirm directly with the BO which scenario they were answering. If it's scenario 2, this reopens the design decision on OTEP-390 (currently "show ineligibility notice + alternatives") rather than closing #43 Q1 outright. Don't edit OTEP-390's AC until this is confirmed — logging the ambiguity here so it isn't lost.

---

## Item 10 — new risk: CIE inferring competencies for C@G jobs with no human verification

Raised at today's SteerCo debrief: for C@G jobs that arrive with no competency tags, the plan is for the Competency Inference Engine (CIE) to infer competencies from the job description text — **with no human-in-the-loop verification step.**

**Why this needs to be flagged loudly rather than just logged as a ticket:** this directly compounds the single biggest risk already surfaced in today's SteerCo debrief — the CIE validation story is internally inconsistent (the team gave two different explanations of what the model was trained on, in the same meeting) and only ~50 real resumes have been used for verification, with no accuracy/precision-recall targets and no documented feedback loop. That risk was about **CVs**. This is now proposing the same unvalidated model infer competencies for **job descriptions** — a different input type — and skip verification entirely.

**Concretely, this means:** if a C@G job's inferred competencies are wrong, there's no officer, HR, or BO check to catch it before it's shown on the opportunity listing/detail page. Given the SteerCo debrief already flagged Mark's own words on this ("I cannot go out to agencies saying this is not real"), shipping a second unvalidated inference path in the same product, with zero verification, is very likely to surface as a bigger version of the same objection at the 9 Jul SteerCo — possibly worse, since there's no human check at all here versus the CV flow.

**Recommendation:** don't create this as a routine backlog ticket. Bring it back to the CIE validation conversation already flagged for this week (see [SteerCo prep debrief](../meeting-notes/2026-07-01-W27-steerco-prep-debrief.md)) — the same methodology work (sample size, accuracy targets, feedback loop) needs to cover JD-based inference too, not just CV-based inference, before this goes anywhere near a sprint.

---

*Sources: [2026-06-29-W27-s4-retro-and-demo.md](../meeting-notes/2026-06-29-W27-s4-retro-and-demo.md), [2026-07-01-W27-steerco-prep-debrief.md](../meeting-notes/2026-07-01-W27-steerco-prep-debrief.md), [2026-07-01-W27-opportunities-tickets-prep.md](2026-07-01-W27-opportunities-tickets-prep.md) (full backlog cross-check), live Jira pull 2026-07-01 (OTEP-88, OTEP-283, OTEP-336, OTEP-390, OTEP-408, OTEP-409, OTEP-497, OTEP-570), `PM-skills-ALL-1/00-hub/open-items.md` (#18, #41, #43, #51).*
