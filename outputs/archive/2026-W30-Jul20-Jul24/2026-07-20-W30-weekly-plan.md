---
week: 2026-W30
week_start: 2026-07-20
week_end: 2026-07-24
quarter: Q2/Q3 2026
---

# Weekly Plan - Week of July 20, 2026

## TL;DR

- **Top 3:** Close #57 (OTEP-130/Pow Hwee) same-day → Ship the single AC-validation-status artifact → Reconcile UAT Operating Model with Rama and close the Adrian/Jace/Barry loop
- **Meeting load:** Sprint 6 closes Sunday 26 Jul (sprint end falls in W31, but this week is the final full work week of S6), so expect sprint-close prep + UAT governance follow-through
- **Key milestone:** Get one owning artifact for AC-validation status before any more parallel work happens on the same question — it's been raised independently 3+ times without resolution
- **New this week:** `/sprint-check` run 2026-07-20 found the Ready shelf completely empty — zero stories carry the `ready-for-sprint` label, meaning `/grooming-close` hasn't run this cycle. Sprint 7 planning (starts 27 Jul) has nothing gated to plan from as of today. This moves grooming-close from "Thursday nice-to-have" to an early-week blocker — see Priority timing note below.

---

## Strategic Context

**Quarter Goal:** Ship Sprint 6/7 scope toward the 11 Aug UAT start (Profile + Opportunities modules), with feature freeze at end of Sprint 8 (21 Aug).

**North Star Progress:** Sprint 6 tracking well operationally (42/91 stories Done as of the 2026-07-20 live pull, QA count holding low at 5 — healthy pass), but governance debt is accumulating faster than it's closing: 3 items carried from last week, one (#57) into its 5th missed venue if not forced this week. Separately, the Ready shelf for Sprint 7 is empty (confirmed via live Jira query today) — operational health on Sprint 6 doesn't extend to Sprint 7 readiness.

**This Week's Focus:**
Last week's plan named the right things but under-forced them — #57 repeated an identical failure pattern for the second week running despite being P0 daily. This week the fix isn't "name it again," it's "force it Monday and escalate immediately on the second miss, don't wait for a third venue." The AC-validation question also needs to stop being re-litigated in every meeting and get consolidated into one artifact, since three separate Friday sessions asked the same question with three different partial answers.

---

## Top 3 Priorities

### Priority 1: Close #57 (OTEP-130 Scope Cut) For Real ⭐ Most Important

**Why this matters:**
- Advances: Sprint 6 close-out integrity and UAT readiness governance
- Impact: This is the single most repeated failure of the last two weeks — 4 missed venues, now needs a 5th forcing function
- Risk if not done: If it slips a 5th time, it undermines confidence in every other "named as priority" tracker item this quarter

**Success looks like:**
- Written confirmation from Pow Hwee on OTEP-130's scope cut, logged in the decisions log, by end of Monday

**Key tasks:**
- [ ] Direct async Slack/Jira ping to Pow Hwee first thing Monday — not riding along inside another meeting (Est: 15 min)
- [ ] If no response by Tuesday EOD, escalate directly (don't wait for a 3rd venue) — this is the explicit fix from last week's retro (Est: 15 min)
- [ ] Log resolution in decisions log once confirmed (Est: 15 min)

**Dependencies:**
- Needs from: Pow Hwee — scope-cut confirmation
- Blocks: Clean Sprint 6 close-out, OTEP-130's backlog status going into Sprint 7

**Linked to:**
- Open items tracker (`00-hub/open-items.md`) #57
- Last week's retro learning: "escalate directly after 2 missed venues, not 3"

---

### Priority 2: Ship the Single AC-Validation-Status Artifact

**Why this matters:**
- Advances: UAT readiness ahead of 11 Aug start; closes a recurring governance gap
- Impact: Consolidates UAT test-case coverage, the 5-element scenario audit, and Pathfinder demo-scope mapping into one document with one owner — currently three parallel, partial answers exist instead of one
- Risk if not done: Continued duplicate work across squads re-asking "which ACs are validated" in every meeting, plus risk of contradictory answers reaching BOs

**Success looks like:**
- One document, one owner, referenced going forward instead of re-litigated live in meetings

**Key tasks:**
- [ ] Consolidate the three existing partial artifacts already drafted last week — `2026-07-17-W29-careercompass-uat-test-cases-consolidated.md`, `2026-07-17-W29-ac-to-test-case-coverage-audit.md`, `2026-07-17-W29-pathfinder-uat-test-cases.md` — into one owning status doc (Est: 3 hrs)
- [ ] Confirm 72%/87% coverage baseline still holds against Sprint 6 close-out state (Est: 1 hr)
- [ ] Circulate to Adrian, Rama, and QA leads as the single reference before Sprint 7 planning (Est: 30 min)

**Dependencies:**
- Needs from: Nothing blocking — inputs already exist from last week's work
- Blocks: Any further UAT scope conversations should route through this artifact, not restart from scratch

**Linked to:**
- `outputs/analyses/2026-07-17-W29-ac-to-test-case-coverage-audit.md`
- `outputs/analyses/2026-07-17-W29-careercompass-uat-test-cases-consolidated.md`
- `outputs/analyses/2026-07-17-W29-pathfinder-uat-test-cases.md`

---

### Priority 3: Reconcile UAT Operating Model with Rama, Close the Adrian/Jace/Barry Loop

**Why this matters:**
- Advances: UAT readiness gate credibility ahead of 11 Aug; removes a live-contested-but-not-visibly-resolved risk
- Impact: The Operating Model's stricter 5-condition readiness gate conflicts with 5 still-undated external dependencies against the 11 Aug Phase 0 date. Separately, Adrian and Jace contested the QA/UAT boundary live in the UAT Plan Sharing meeting and Rama deferred to "align offline" — no visible confirmation that happened.
- Risk if not done: Going into UAT with a governance document that looks final on paper but was never actually accepted by the people who pushed back on it live

**Success looks like:**
- One direct conversation with Rama confirming: (1) Adrian/Jace/Barry have seen and accepted the Operating Model's resolution of their pushback, (2) whether the reserved-profiles rule covers the Products read-replica mutation risk or only persona curation, (3) a plan for reconciling the 5-condition gate against the undated external dependencies

**Key tasks:**
- [ ] Schedule direct session with Rama this week — don't let this ride along inside another meeting (Est: 1 hr)
- [ ] Confirm Adrian/Jace/Barry sign-off status; if not done, circulate the Operating Model to them explicitly (Est: 1 hr)
- [ ] Get explicit answer on reserved-profiles rule vs. read-replica mutation risk (Est: 30 min)

**Dependencies:**
- Needs from: Rama — scheduling and direct answers
- Blocks: Treating the Operating Model as final ahead of 11 Aug UAT start

**Linked to:**
- `outputs/meeting-notes/2026-07-17-W29-uat-operating-model.md`
- `outputs/meeting-notes/2026-07-17-W29-uat-plan-sharing-readiness-alignment.md`

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| CareerCompass R1 | XFN / job stories drafted | Solution review prep | Confirm scope holds against Sprint 7 capacity |
| POCDEX Authorisation | XFN kickoff done | Planning review | Watch OTEP-445 (code table import spike, still unassigned) |
| OTG File Upload | Team kickoff done | No change expected | Passthrough story (CAG ingestion) already merged into backlog |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon | Standup / #57 escalation window | Force same-day resolution | Y — direct ping ready before standup |
| Tue-Wed | Team 2 standups | Watch for #57 second-miss trigger | Y — escalate immediately if unresolved |
| Thu | Sprint 6 close-out prep / possible grooming | Confirm Sprint 6 final state, prep Sprint 7 | Y — AC-validation artifact should be ready to reference |
| Fri | Sprint Review + Demo (if scheduled) | Sprint 6 close | Y — demo script + AC-validation doc on hand |

**Meeting load:** Estimate medium-heavy given Sprint 6 close-out + UAT governance follow-ups stacking in the same week.

**Deep work capacity:** Protect Monday morning and Tuesday afternoon for Priority 2 (the consolidation artifact needs uninterrupted drafting time).

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** #57 repeats a 5th miss if Pow Hwee doesn't respond to the Monday async ping.
  - **Mitigation:** Escalate directly after the second miss (Tuesday), not the third — this is the explicit fix from last week's retro.

- **Risk:** Rama scheduling conflict pushes the reconciliation session past this week, right as UAT prep intensifies.
  - **Mitigation:** Send the scheduling ask Monday, not later in the week, to maximize the chance of landing a slot.

**Capacity concerns:**
- If Sprint 6 close-out and Sprint 7 planning prep consume more time than expected, Priority 3 (Rama reconciliation) is the one to compress — send Adrian/Jace/Barry the Operating Model directly for async review rather than waiting for a live session, and treat the read-replica question as the one item that must get a direct answer this week regardless.

- **Risk (new, 2026-07-20):** Sprint 7 planning (starts 27 Jul) has no Ready shelf to plan from — `/sprint-check` confirmed zero stories labeled `ready-for-sprint`. This isn't one of the top 3 priorities but is a harder blocker than any of them if it isn't resolved: without a gated shelf, Sprint 7 planning either slips or runs against an unfiltered Backlog.
  - **Mitigation:** Confirm this week whether a grooming session already happened that just wasn't gated (run `/grooming-close` against it) or whether grooming for Sprint 7 hasn't happened at all (in which case that's the real gap to escalate, not a tooling fix).

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] #57 (OTEP-130 scope cut, Pow Hwee) — 4 venues missed, now Priority 1 this week with an explicit escalation trigger
- [ ] AC-validation-status consolidation — drafted in pieces last week (3 separate files exist), now Priority 2 to merge into one owning artifact
- [ ] UAT Operating Model reconciliation with Rama — now Priority 3
- [ ] Job family/function mapping governance risk (Adrian Lo one-pager, Product/Data Team dates) — not selected as a top-3 this week; flagged below as a risk to monitor, not drop

**Learnings applied:**
- Last week's win: treating a repeat-miss item as the literal first task of Monday (not a bullet in a longer list) closed OTEP-505/#51 within 2 days. Applying the same treatment to #57 this week.
- Last week's failure: naming a risk repeatedly across meetings without a dedicated forcing function doesn't work. This week, #57 gets a direct async ping with an escalation trigger at the second miss, not the fourth.

---

## Success Metrics

**How we'll know this week was successful:**
1. #57 shows a written, logged resolution by Tuesday EOD at the latest
2. The AC-validation-status artifact exists as a single file with one owner, replacing the three partial versions
3. Rama has given explicit answers on Adrian/Jace/Barry sign-off and the reserved-profiles/read-replica question, in writing

**Leading indicators to track:**
- Whether #57 gets a response to the Monday ping before Tuesday's standup (early signal on whether escalation will be needed)
- Whether the AC-validation artifact gets referenced (instead of re-litigated) in Thursday's sprint close-out conversation

---

## This Week's Strategic Skill

**Suggested:** `/grooming-close` (already run once: `/sprint-check`, 2026-07-20)

**Why this week:** The Monday `/sprint-check` run found the Ready shelf at zero — no story anywhere carries the `ready-for-sprint` label, meaning grooming for Sprint 7 (27 Jul–9 Aug) hasn't been gated yet. With Sprint 6 closing Sunday 26 Jul, there's no buffer left to discover this at planning. `/grooming-close` is now the more urgent skill: it gates whatever's been groomed to DoR and writes the label to Jira, converting Backlog candidates into an actual Ready shelf.

**When to run:** As early this week as a grooming session can be confirmed happened or can be run — do not wait for Thursday. If no grooming session is scheduled this week, that itself is the finding to escalate before Sprint 7 planning.

**What you'll get:** A gated, labeled Ready shelf that Thursday's `/sprint-check` re-run can actually measure — right now there's nothing for that skill to report on.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, ceremonies, and open risks. Run these to keep delivery smooth and prevent gaps from accumulating.*

| When | Skill | Why |
|------|-------|-----|
| Early this week (before Sprint 7 planning) | `/grooming-close` ⚠️ Critical | `/sprint-check` (2026-07-20) found zero stories labeled `ready-for-sprint` — grooming for Sprint 7 hasn't been gated. Highest-priority skill this week, not Thursday-only |
| Thursday (pre-Sprint 7 planning) | `/sprint-check` (re-run) ⚠️ Critical | Re-check Ready shelf depth after grooming-close runs, to confirm there's now something to plan Sprint 7 from |
| End of sprint (Sprint 6 close) | `/stale-check` ⚠️ Critical | Sprint rollforward to Sprint 7 needs a clean tracker sweep, same gap flagged last week for Sprint 5→6 |
| End of sprint (Sprint 6 close) | `/feature-results` | Capture Sprint 6 outcomes (42/91 stories at 2026-07-20 pull, healthy QA pass) while fresh, feeds Sprint 7 calibration |
| After Rama reconciliation session | `/decision-doc` | UAT Operating Model reconciliation outcome needs a written decision record, not just a meeting note |
| If Sprint 7 grooming happens this week | `/grooming-close` ⚠️ Critical | Gates stories to DoR and writes ready-for-sprint to Jira before Sprint 7 planning |
| Friday | `/weekly-review` ⚠️ Critical | Non-negotiable close of the week |
| Daily | `/stale-check` | Non-negotiable tracker hygiene given this week's governance-heavy load |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- ⚠️ Critical items create a delivery risk if skipped, especially given Sprint 6→7 transition landing mid-week.
- This list is not exhaustive — it's the minimum set to prevent gaps given this week's specific context.

---

*Generated: 2026-07-20. Updated same day after `/sprint-check` and `/stale-check` runs: folded in the empty Ready-shelf finding (elevated `/grooming-close` above `/sprint-check` as this week's strategic skill), refreshed Sprint 6 counts to the 2026-07-20 live pull (42/91, was 42/90), corrected the sprint-close date reference (26 Jul is a Sunday, not "next Sunday" from Monday's frame).*
*Next: Run `/daily-plan` each morning to execute against this plan*
