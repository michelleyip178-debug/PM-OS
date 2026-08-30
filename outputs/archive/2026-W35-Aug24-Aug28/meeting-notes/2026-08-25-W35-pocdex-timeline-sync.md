# Meeting Notes: Sync on POCDEX Timeline

**Date:** 25 Aug 2026, 2:00–3:00pm

**Attendees:** Adrian ANG, Huiting LIAN (POCDEX/WD), Pow Hwee TAN, Johnny LIM (POCDEX), Adrian Lo, Michelle Yip. Referenced but not confirmed present: Jace TAN, Jobelle.

**Meeting Type:** Cross-programme timeline alignment — the same-day alignment call flagged in this morning's [POCDEX data-sharing thread](2026-08-25-W35-pocdex-data-sharing-email-thread.md)

**Duration:** Not specified

**Note on source:** Input is the PM's own structured executive assessment of a transcribed meeting, not a raw transcript. Framing, risk classification, and "Actions Most Relevant to You" are the PM's own synthesis, retained as provided.

---

## Summary

This meeting resolves the date conflict flagged twice earlier today: **MVP launch is confirmed at 24-25 November, with VAPT sign-off needed by early November (around 7 Nov)** — not `open-items.md` #39's currently tracked "week of 2 Nov." Both teams aligned around this as the common deadline to plan backwards from, and agreed a practical path for VAPT collaboration (POCDEX potentially piggybacking on the same NCS engagement as Compass). But the meeting's own framing is blunt: the programme is requirement-constrained, not technology-constrained. The single biggest unresolved risk is that nobody owns the business rules for employment/profile refresh behaviour — the "last modified date" question from this morning's email thread is still unanswered, and until it's answered, API design, testing scope, VAPT scope, and delivery timeline all stay uncertain.

---

## Decisions Made

| # | Decision | Detail |
|---|---|---|
| 1 | Target dates confirmed | Launch: 24-25 November. VAPT sign-off: early November (around 7 Nov) |
| 2 | POCDEX API VAPT pursued jointly with Compass/NCS engagement, if feasible | Reduces schedule risk versus fully independent efforts |
| 3 | POCDEX still requires its own independent reporting and assessment outcomes | Separate system, separate audit trail, even if the engagement is combined |
| 4 | Production environment must ultimately be covered for POCDEX VAPT activities | Not yet ready; budget approval still in progress |
| 5 | Compass team will further define profile refresh logic and last-modified-date requirements before final solutioning | Direct response to Huiting's repeated push — POCDEX won't accept a technical answer to a business question that isn't yet answered |
| 6 | Follow-up timeline review/checkpoint once schedules are available | Set for Friday this week |

---

## Action Items

**Critical (this week):**

| Task | Owner | Deadline |
|---|---|---|
| Provide indicative POCDEX implementation timeline (production setup, testing, VAPT readiness, dependencies) | Johnny Lim / POCDEX team | Latest Friday this week; earlier draft encouraged |
| Provide draft timeline to Adrian Ang for early risk assessment | Huiting Lian / POCDEX team | Before final Friday version if possible |
| Internal Compass discussion on employment refresh enhancement scope | Compass team | Thursday |
| Complete analysis of POCDEX test cases and map data requirements | Compass team (Adrian Lo in progress) | Thursday review session |
| Decide business requirements for "last modified date" field | Compass team | Thursday / this week — team committed to revert |
| Assess whether "last modified date" should be included and how derived | Johnny Lim with Huiting Lian / POCDEX team | This week / ASAP |
| Clarify profile refresh logic, competency handling, employment change behaviour | Compass team | This week's internal sync + follow-up with POCDEX |

**VAPT & Security:**

| Task | Owner | Deadline |
|---|---|---|
| Confirm complete POCDEX VAPT scope (API, cloud, environment coverage) | POCDEX team | No specific date; required for VAPT planning |
| Engage NCS on combined Compass + POCDEX VAPT approach | Compass team | ASAP, to avoid schedule delay |
| Coordinate all NCS discussions through a single point of contact | Jace Tan (proposed) + Compass team | No explicit deadline; before VAPT commencement discussions progress |
| Determine when POCDEX production environment will be ready for VAPT | POCDEX team | Include in this week's timeline submission |

**Infrastructure & Budget:**

| Task | Owner | Deadline |
|---|---|---|
| Finalise production environment sizing and budget requirements | POCDEX team | Earliest possible — flagged as urgent blocker |
| Seek approval for production environment setup funding | POCDEX team / POCDEX management | No explicit date |

**Testing & UAT:**

| Task | Owner | Deadline |
|---|---|---|
| Determine UAT support required from POCDEX for employment-refresh testing | Compass & POCDEX teams | After Thursday scope discussion |
| Prioritise P1 scenarios from master test cases, identify MVP coverage | Compass team + WD | After internal review of test cases |
| Determine performance test approach (production vs. UAT API endpoints) | Compass & POCDEX teams | No specific date; before performance testing window begins |

**Standing:**

| Task | Owner | Deadline |
|---|---|---|
| Maintain active programme tracking of VAPT dependencies and slippages | Jobelle or assigned PM resource | Ongoing |

---

## Key Insights & Quotes

| Insight | Detail |
|---|---|
| The critical path is now visible, with a real date | Adrian Ang set the constraint early — MVP launch 24-25 November, VAPT sign-off needed by ~7 November. This directly answers (and supersedes, pending explicit tracker update) the date question left open in this morning's [Item #8 escalation](2026-08-24-W35-pocdex-teams-email-item8-escalation.md) and [data-sharing thread](2026-08-25-W35-pocdex-data-sharing-email-thread.md), both of which had POCDEX's own target at 24 Nov against `open-items.md` #39's tracked "week of 2 Nov" |
| POCDEX pushed back on an unanswered "why," not just a "how" | Huiting Lian repeatedly asked why "last modified date" is needed, what business problem it solves, and what product logic is intended — before letting the conversation move to technical solutioning. The moment that crystallizes the gap: POCDEX asked "why not simply pull the latest profile every login?" and Compass could not yet answer definitively |
| The real risk isn't infrastructure, it's undecided business rules | Per the PM's own assessment — "the programme remains requirement-constrained rather than technology-constrained." Nobody has formally owned the business rules for employment/profile refresh behaviour. Without an owner, requirements, testing scope, and VAPT scope will all keep moving. Named as the single biggest programme risk |
| Day-2 operating model is a blind spot | Very little discussion covered exception handling, manual recovery, data correction, sync failures, API outages, or incorrect competency mapping — despite employment refresh being the most complex Day-2 operational problem raised. The PM flags this explicitly, given prior operational-readiness work, as a significant gap |
| Scope creep pattern observed | Three workstreams in play (POCDEX API delivery, Security/VAPT, Auto-profile refresh enhancement) — the auto-profile-refresh scope is growing while the schedule stays fixed. Classic scope creep, named directly |
| No quantified contingency exists | The plan currently assumes most activities succeed. No explicit contingency was discussed for a failed VAPT, major vulnerabilities, delayed environment provisioning, delayed NCS response, or CSC dependency blockers |

---

## Open Questions

| Question | Owner | By |
|---|---|---|
| What business problem does "last modified date" solve, and what product logic is intended? | Compass team | This week — committed to revert |
| Should "last modified date" be included, and how should it be derived? | Johnny Lim + Huiting Lian / POCDEX team | This week / ASAP |
| What is the finalised behaviour for employment/competency refresh (job, appointment, grade changes)? | Compass team | Thursday internal discussion, then follow-up with POCDEX |
| Is API VAPT sufficient, or is cloud/environment assessment also required? Is production in scope? | POCDEX team | No date given; required to support VAPT planning |
| Can POCDEX be included under Compass's existing NCS engagement, and will NCS accept the expanded scope? | Compass team, engaging NCS | ASAP |
| Is UAT sufficient for performance testing, or is production-like testing required? | Compass & POCDEX teams | Before performance testing window begins |
| Who formally owns the business rules for profile refresh behaviour? | Not yet assigned | Not specified — flagged as the single biggest programme risk if left unresolved |

---

## Blockers

| # | Blocker | Blocked By | Impact | Resolution |
|---|---|---|---|---|
| 1 | Product requirements not yet mature | "Last modified date," profile/employment/competency refresh logic, and data replacement rules are all still being worked through; scope only gets discussed this week | Timeline already runs Sep–Nov; API design, VAPT scope, and testing scope all stay unstable until requirements lock | Compass team to define and revert by Thursday/this week |
| 2 | No confirmed dependency timeline | Production readiness, VAPT start/completion, performance test schedule, UAT completion, and auto-refresh implementation all lack real dates | Team repeatedly requested timelines from each other because none existed; schedule still unagreed at meeting's end | Johnny Lim/POCDEX to submit detailed timeline by Friday |
| 3 | POCDEX production environment budget unresolved | Funding approval for production environment setup still in progress | A schedule dependent on infrastructure that isn't funded yet inherently carries risk | POCDEX to finalise sizing/budget and seek approval — no date given, flagged as urgent |
| 4 | VAPT strategy not fully defined | Open questions on scope (API only vs. cloud/environment), whether production is required, whether POCDEX folds into Compass's NCS engagement, and whether separate reports are still possible | Business direction agreed (pursue jointly), but vendor/audit mechanics unresolved | POCDEX to confirm scope; Compass to engage NCS on combined approach |

---

## Timeline Risks

| # | Timeline Risk | Detail | Action |
|---|---|---|---|
| 1 | **24-25 Nov launch conflicts with `open-items.md` #39's tracked "week of 2 Nov"** | This meeting confirms 24-25 Nov as the MVP launch target with VAPT sign-off by ~7 Nov — a ~3-week gap from the currently tracked release date, the same conflict flagged in this morning's [Item #8 note](2026-08-24-W35-pocdex-teams-email-item8-escalation.md) and [data-sharing thread](2026-08-25-W35-pocdex-data-sharing-email-thread.md), now with a named business-constraint source (Adrian Ang) | Update `open-items.md` #39 explicitly against 24-25 Nov, since this is now the most authoritative date given directly by the programme lead — reconcile rather than let three separate documents carry three slightly different framings |
| 2 | Missing November launch is a repeatedly named risk, not a one-off worry | Adrian Ang, Huiting Lian, and Pow Hwee Tan all separately raised whether development, VAPT, fixes, UAT, and performance testing can all complete before early November | Treat as a live risk on the RAID log, not just meeting commentary — three separate people raising it independently is itself a signal |
| 3 | Employment Profile auto-refresh readiness (mid-Oct, per this morning's earlier notes) now sits inside a tighter runway than previously understood | VAPT sign-off needs to land by ~7 Nov, not by the later date implied by `open-items.md` #39's "week of 2 Nov" framing — compresses the buffer between requirements locking and VAPT sign-off even further | Factor the ~7 Nov VAPT sign-off date into any remaining sequencing math, not the looser 2 Nov assumption |

---

## Next Steps

**Immediate (this week):**
- Compass: define "last modified date" business requirement and profile refresh logic — commit to revert by Thursday
- Compass: internal discussion Thursday on employment refresh enhancement scope
- POCDEX (Johnny Lim): draft detailed implementation timeline, share early, finalize by Friday
- Compass: engage NCS on combined Compass + POCDEX VAPT approach

**This week's checkpoints:**
- Thursday: Compass internal discussion on employment refresh and requirements
- Friday: POCDEX timeline submission (final version)
- Friday (after timelines land): Joint checkpoint meeting to review timelines and dependencies — Adrian requested this land Friday, not slip to next week

**Follow-up:**
- Timeline review/checkpoint once schedules are available (Decision #6) — effectively the Friday joint checkpoint above.

---

## Context for Future Reference

**Relates to:**
- [2026-08-24 Item #8 escalation](2026-08-24-W35-pocdex-teams-email-item8-escalation.md) and [2026-08-25 data-sharing thread](2026-08-25-W35-pocdex-data-sharing-email-thread.md) — both flagged the 24 Nov vs. 2 Nov date conflict as unresolved earlier today. This meeting resolves it: 24-25 Nov is confirmed. `open-items.md` #39 needs an explicit update to reflect this.
- [2026-08-25 Product x Senior BO meeting](2026-08-25-W35-product-x-senior-bo-meeting.md) — same day, same underlying VAPT arrangement question (integrated vs. separate with POCDEX). That meeting deferred the decision to "post-meeting discussion, Pow Hwee Tan + Adrian Ang" — this meeting appears to be exactly that discussion, now with a concrete direction (pursue jointly with NCS, subject to scope confirmation).
- `open-items.md` #39 (OTEP UAT/VAPT timeline) — needs updating with the confirmed 24-25 Nov launch / ~7 Nov VAPT sign-off dates, superseding the "week of 2 Nov" framing currently tracked.
- `open-items.md` #55 (Huiting Lian's UAT scope ask, ≥25 unowned scenarios since 11 Aug) — this meeting's "prioritise P1 test scenarios" action item is the same underlying gap, still not assigned a hard date.

**Pattern worth naming:** For the third time today, "who owns the business decision" surfaces as the real blocker — first in the data-sharing thread (UAT scope, last-modified-date validation), then in the Product x Senior BO meeting (dependency register, governance gap), now here (profile refresh business rules explicitly named as the single biggest programme risk). This meeting is the most concrete of the three: it names a person-shaped gap (no formal decision owner for profile refresh behaviour) rather than a process-shaped one, and ties directly to a Thursday deadline for closing it.

**Immediate housekeeping:** `open-items.md` #39 should be updated today to reflect the confirmed 24-25 Nov / ~7 Nov VAPT dates — leaving it unreconciled risks a fourth document (after Item #8, the data-sharing thread, and this meeting) carrying a stale date into next week's planning.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original content as provided</summary>

Provided directly by the PM as a structured executive assessment of a transcribed meeting — full text preserved in the source conversation, not duplicated here to keep this file a reasonable size.

</details>
