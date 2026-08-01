---
week: 2026-W31
week_start: 2026-07-27
week_end: 2026-07-31
quarter: Q2/Q3 2026
---

# Weekly Plan - Week of July 27, 2026

## TL;DR

- **Top 3:** Get Sprint 7 planning today unstuck despite an empty-feature Ready shelf → Draft the October/November MVP reconciliation one-pager → Close whitelisting ownership (Products vs. Compass)
- **Meeting load:** Heavy — Sprint 7 planning lands today (the ceremony this whole week pivots around), plus standard Tue design review / Thu grooming cadence
- **Key milestone:** Walk out of today's Sprint 7 planning with an honest sprint (even if thin/chore-heavy) rather than a fabricated one, and get the October/November narrative reconciled before it leaks externally in an inconsistent form

---

## Strategic Context

**Quarter Goal:** Ship Sprint 7/8 scope toward the 11 Aug UAT start (Profile + Opportunities modules), with feature freeze at end of Sprint 8 (21 Aug).

**North Star Progress:** Sprint 6 closed Sunday (26 Jul) — final state not yet pulled this morning, but as of the 24 Jul pull it was tracking well operationally (46/95 Done, QA holding low). The real risk isn't Sprint 6, it's Sprint 7 readiness: Friday's `/sprint-check` found only 4 Ready stories, all engineering chores, 3 unpointed, against a 19-story ungroomed backlog and a 23-28 story per-sprint historical pace. Separately, Friday's senior bi-weekly surfaced that October is now "achievable only if everything goes well" with November emerging as the real internal target — a bigger strategic risk than the Ready-shelf gap, because it's a narrative inconsistency risk if it surfaces externally before OTEP has one story.

**This Week's Focus:**
Sprint 7 planning happens today with a genuinely thin shelf — last week's plan to close this gap via grooming didn't fully land (19 candidates were still ungroomed as of Friday). This week isn't about pretending the shelf is healthy; it's about planning honestly against what's actually Ready, then running an emergency grooming pass this week so Sprint 7 doesn't run empty for its full two weeks. In parallel, the October/November one-pager is now the single highest-leverage artifact outstanding — it resolves the squad-sync-vs-senior-bi-weekly conflict flagged in last week's review before it costs credibility with BOs or leadership.

---

## Top 3 Priorities

### Priority 1: Get Sprint 7 Planning Through Honestly, Then Emergency-Groom the Gap ⭐ Most Important

**Why this matters:**
- Advances: Sprint 7 delivery integrity (27 Jul–9 Aug) and UAT-readiness credibility ahead of 11 Aug
- Impact: Planning today with only 4 chore stories (3 unpointed) either produces a fabricated sprint plan or an honest thin one — the honest one is the only option that doesn't create a bigger Sprint 8 problem
- Risk if not done: If planning gets forced against an ungroomed backlog just to fill the room, Sprint 7 inherits scope nobody actually validated against DoR — the exact governance debt pattern flagged twice in the last two weekly reviews

**Success looks like:**
- Sprint 7 has a goal and a committed scope that both reflect what's actually Ready — not padded to look healthier than it is
- A grooming session for the 19 ungroomed candidates is booked before Wednesday, not left to "whenever Thursday's regular grooming happens"

**Key tasks:**
- [ ] Walk into today's planning with the `/sprint-check` findings on hand — 4 stories, all chores, 3 unpointed — so the room plans against reality, not a stale mental model (Est: prep before meeting, 20 min)
- [ ] Push for a dedicated emergency grooming session this week (not folded into Thursday's regular one) for the 19 ungroomed candidates (Est: 30 min to schedule + push)
- [ ] Run `/grooming-close` immediately after that session to gate whatever clears DoR and write `ready-for-sprint` to Jira (Est: 30 min)
- [ ] Re-run `/sprint-check` after grooming-close to confirm the shelf actually improved before assuming it did (Est: 15 min)

**Dependencies:**
- Needs from: Whoever owns grooming facilitation — confirm a session can be booked this week, not next
- Blocks: Sprint 7's credibility as a real commitment, not a placeholder

**Linked to:**
- `outputs/analyses/2026-07-24-W30-sprint-check.md`
- `outputs/analyses/2026-07-22-W30-grooming-close.md`

---

### Priority 2: Draft the October/November MVP Reconciliation One-Pager

**Why this matters:**
- Advances: Stakeholder trust and narrative consistency ahead of go-live governance conversations
- Impact: The squad sync (working level, "October still live") and the senior bi-weekly ("November is the real target") ran two different stories on the same Friday — this is now the single most consequential open thread from last week, and it's a trust risk if it surfaces externally before OTEP has one consistent line
- Risk if not done: Leadership repeats "November" while working-level teams keep defending October in the same week — the inconsistency itself becomes the story, not the timeline

**Success looks like:**
- One document: why October slipped, what's still needed before go-live, why November is credible, what would still delay it further — ready to circulate to both the working-level and senior audiences

**Key tasks:**
- [ ] Pull the concrete inputs already surfaced: NCS/VAPT vendor unavailability until mid-September, the Ready-shelf/velocity gap, the #55 Compass data-requirements approval risk (Est: 1 hr)
- [ ] Draft the one-pager using `/decision-doc` framing — decision, alternatives considered, trade-offs, recommendation (Est: 2 hrs)
- [ ] Review with Adrian/Rama before it goes any wider, given they're closest to both the technical and stakeholder sides of the date (Est: 30 min)

**Dependencies:**
- Needs from: VAPT vendor confirmation (NCS, mid-Sept) — already have this; Adrian/Rama's read on whether anything else changes the picture
- Blocks: A single consistent narrative for any external-facing go-live conversation

**Linked to:**
- Friday senior bi-weekly notes (2026-07-24)
- `outputs/weekly-reviews/2026-07-24-W30-weekly-review.md` (flagged as highest-leverage next artifact)

---

### Priority 3: Resolve Whitelisting Ownership (Products vs. Compass)

**Why this matters:**
- Advances: Unblocks the DO account request and the ring-fencing UAT scenario count
- Impact: Single highest-leverage open question carried from Friday's meeting cluster — indirectly blocks Imelda's persona finalization too
- Risk if not done: Ring-fencing UAT scenarios (already narrowed to 2 accounts) stay stuck without a clear owner to action the request

**Success looks like:**
- Written confirmation of who owns whitelisting (Products or Compass) and the 2-account DO request is actually submitted

**Key tasks:**
- [ ] Rama to raise directly with Pow Hwee Tan this week — don't let it ride into another meeting cluster unaddressed (Est: 15 min to prompt Rama)
- [ ] Once owner confirmed, submit the narrowed 2-account DO request (Est: 30 min)
- [ ] Log the ownership resolution somewhere durable (open-items or decisions log) so it doesn't get re-asked (Est: 15 min)

**Dependencies:**
- Needs from: Pow Hwee Tan's input, via Rama
- Blocks: Ring-fencing UAT scenario execution, Imelda's persona finalization

**Linked to:**
- `00-hub/open-items.md`
- Friday's Handover meeting notes (2026-07-24)

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| CareerCompass R1 | XFN / job stories drafted | Solution review prep | Confirm scope still holds against a thinner Sprint 7 capacity picture |
| POCDEX Authorisation | XFN kickoff done | Planning review | Watch OTEP-445 (code table import spike, still unassigned in Sprint 6 To Do) |
| OTG File Upload | Team kickoff done | No change expected | Passthrough story already merged into backlog |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon | Sprint 7 Planning | Commit Sprint 7 scope against actual Ready shelf | Y — `/sprint-check` findings on hand, honest framing ready |
| Tue | Design Review (S8+ stories) | Review stories targeting sprint after next | N |
| Wed | Emergency grooming push (if booked) | Clear the 19 ungroomed candidates | Y — DoR checklist ready |
| Thu | Backlog Grooming (regular, Sprint 8 candidates) | Standard cadence | Y |
| Thu | Mid-Sprint prep / async check-in | Sprint 7 has no formal mid-sprint review this cycle per calendar cadence | N |

**Meeting load:** Heavy — planning day today plus a likely second, unscheduled grooming push mid-week on top of the fixed Tue/Thu cadence.

**Deep work capacity:** Protect Tuesday afternoon and Wednesday morning for the October/November one-pager — it needs uninterrupted drafting time and shouldn't get squeezed by the grooming scramble.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** Sprint 7 planning happens today with no real emergency-grooming commitment secured yet, and the shelf stays at 4 chore stories for the full two-week sprint.
  - **Mitigation:** Treat "book the emergency grooming session" as a same-day ask coming out of planning, not a soft this-week intention — this is the Priority 1 pattern that failed last week (named but not forced).

- **Risk:** The October/November one-pager gets deprioritized under the urgency of the Sprint 7 scramble, even though it's the higher strategic-leverage item.
  - **Mitigation:** Block Tuesday afternoon explicitly; if Priority 1 fully consumes Monday and Tuesday morning, this is the one to protect, not compress — a second week of an unresolved timeline narrative is a bigger risk than a slow sprint.

**Capacity concerns:**
- If the emergency grooming session can't be booked until Thursday (folded into the regular cadence instead of standalone), Sprint 7 effectively runs its first week on 4 chore stories — flag this explicitly at planning today rather than let it be discovered mid-sprint.

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] 19 ungroomed near-ready stories — still ungroomed as of Friday's `/sprint-check`, now the core of Priority 1
- [ ] October/November reconciliation one-pager — flagged Friday as next week's highest-leverage artifact, now Priority 2
- [ ] Whitelisting ownership (Products vs. Compass) — carried directly as Priority 3
- [ ] OTEP-130 Jira housekeeping (close as duplicate vs. keep thin) — small, 2-minute call, do it early this week so it doesn't become a 3rd-week dangling item
- [ ] Production environment access (GovTech capacity loss, fanxu.wang's escalation) — no response yet as of Friday, worth a status check but not elevated to top-3 this week
- [ ] Go-live risk-threshold framework ownership — flagged Friday as currently nobody's job; needs an owner named, watch for whether this surfaces again this week

**Learnings applied:**
- Last week's validated pattern: forcing a repeat-miss item as the literal first task of Monday closed #57 same-day, second week running. Apply the same forcing-function discipline to booking the emergency grooming session today, not letting it drift to "sometime this week."
- Last week's failure: naming a risk in the weekly plan without a dedicated forcing function doesn't move it (this is exactly how the Ready-shelf gap persisted through last week despite being flagged). This week, Priority 1 has an explicit same-day ask attached, not just a description of the problem.

---

## Success Metrics

**How we'll know this week was successful:**
1. Sprint 7 has a committed, honest scope by end of today's planning, and an emergency grooming session is booked (not just discussed) by Tuesday
2. The October/November one-pager exists as a draft ready for Adrian/Rama review by Wednesday
3. Whitelisting ownership is confirmed in writing and the DO account request is submitted

**Leading indicators to track:**
- Whether today's planning produces a scope statement that explicitly acknowledges the thin shelf, versus one that quietly pads around it
- Whether the emergency grooming session shows up on the calendar by Tuesday EOD

---

## This Week's Strategic Skill

**Suggested:** `/sprint-check` (re-run after emergency grooming, before Thursday's regular grooming)

**Why this week:** Sprint 7 opened today on a shelf that `/sprint-check` itself flagged as "not healthy enough to plan from." The highest-value re-use of this skill isn't Thursday's routine pre-planning check (that cadence is for Sprint 8) — it's a mid-week re-run to confirm whether the emergency grooming pass actually moved the needle before the sprint is two weeks deep on 4 chore stories.

**When to run:** Immediately after the emergency grooming session and `/grooming-close` run this week — likely Wednesday or Thursday morning.

**What you'll get:** A concrete before/after read on whether Sprint 7's Ready shelf actually improved, instead of assuming grooming worked because a session happened.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, ceremonies, and open risks. Run these to keep delivery smooth and prevent gaps from accumulating.*

| When | Skill | Why |
|------|-------|-----|
| Today, before/during Sprint 7 Planning | `/sprint-check` (findings already in hand from Fri) ⚠️ Critical | Shelf was at 4 chore stories, 3 unpointed, as of Friday — plan against this reality, don't walk in blind |
| This week, after emergency grooming session | `/grooming-close` ⚠️ Critical | Gates whatever clears DoR from the 19 ungroomed candidates and writes `ready-for-sprint` to Jira |
| Mid-week, after grooming-close | `/sprint-check` (re-run) ⚠️ Critical | Confirms whether the shelf actually improved — don't assume the grooming session worked |
| Before wider circulation | `/decision-doc` | October/November one-pager needs decision-doc structure (alternatives, trade-offs, recommendation), not just a memo |
| Tue (Design Review) | `/meeting-notes` | Capture S8+ story decisions before they get relitigated later |
| Daily | `/stale-check` ⚠️ Critical | Non-negotiable tracker hygiene, especially with a sprint transition and a scramble week in motion |
| Friday | `/weekly-review` ⚠️ Critical | Non-negotiable close of the week |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- ⚠️ Critical items create a delivery risk if skipped, especially given the Sprint 7 planning-against-thin-shelf situation landing on day one of the week.
- This list is not exhaustive — it's the minimum set to prevent gaps given this week's specific context.

---

*Generated: 2026-07-27*
*Data sources: `outputs/weekly-reviews/2026-07-24-W30-weekly-review.md`, `outputs/weekly-plans/2026-07-20-W30-weekly-plan.md`, `outputs/analyses/2026-07-24-W30-sprint-check.md`, `00-hub/sprint-status.md`, `00-hub/open-items.md`*
*Next: Run `/daily-plan` each morning to execute against this plan*
