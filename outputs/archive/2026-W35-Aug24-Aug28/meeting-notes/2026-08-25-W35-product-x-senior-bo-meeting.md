# Meeting Notes: [Replacement] Product x Senior BO Meeting

**Date:** 25 Aug 2026

**Attendees:** Mark HO (Senior BO), Pow Hwee TAN, Adrian ANG, programme/engineering team (unnamed individually in source), Michelle Yip

**Meeting Type:** Stakeholder review — surfaced as a delivery assurance review, not a routine status update

**Duration:** Not specified

**Note on source:** Input is the PM's own structured analysis of a transcribed meeting, not a raw transcript. Framing, risk severities, and the "What BO is Actually Telling the Team" read are the PM's interpretation, retained as provided.

---

## Summary

This was billed as a routine Product x Senior BO sync but became a delivery assurance review. Mark Ho didn't primarily challenge the product's technical state — testing is largely done, one use case remains open — he challenged whether the team has full visibility of what's still coming and whether its timeline forecasts can be trusted. The core tension: the team keeps discovering new dependencies late (POCDEX VAPT, CSC SSO, CSC ingestion, performance testing, production readiness), and Mark's repeated question — "are there any more dependencies we don't know about?" — is itself the risk signal. His message, per the PM's read: *"I can accept technical problems, but I cannot accept discovering them late."*

This directly compounds two things already in motion this week: the CSC SSO call scheduled for 3:30pm today, and the POCDEX VAPT/timeline questions from this morning's data-sharing thread ([2026-08-25 POCDEX notes](2026-08-25-W35-pocdex-data-sharing-email-thread.md)). Mark's meeting adds a third, higher-order concern on top of both: not whether SSO and VAPT individually resolve, but whether the programme has a credible, complete picture of everything still standing between here and launch.

---

## Decisions Made

| # | Decision | Why | Who Decided | Impact |
|---|---|---|---|---|
| 1 | Outstanding SSO use case remains top priority | Last major open defect blocking Phase 2 UAT closure | Team, reaffirmed under Mark's questioning | Continues today via the 3:30pm CSC call |
| 2 | POCDEX API VAPT must not delay Compass launch | Pow Hwee Tan committed POCDEX activities will align to Compass timelines, not the reverse | Pow Hwee Tan (POCDEX), acknowledged by the room | Reduces uncertainty on one dependency, but the *how* (integrated vs. separate VAPT execution) is still undecided — see today's separate POCDEX thread for the same open question (Options A/B/C) |
| 3 | Team to determine best VAPT arrangement — integrated or separate | Not yet resolved whether Compass and POCDEX VAPT run as one exercise or two | Deferred to post-meeting discussion (Pow Hwee Tan + Adrian Ang) | Same open question as this morning's POCDEX alignment call — worth explicitly connecting these two conversations rather than resolving them in parallel, separately |
| 4 | Weekly governance cadence should increase | Mark's core ask — stop giving verbal assurances, show evidence, timelines, criteria, ownership | Mark Ho, team acknowledged | Programme-level reporting needs to shift from status ("testing is progressing") to assurance (cases completed, cases outstanding, risks, owners, exit criteria) |
| 5 | Dependencies must be surfaced immediately, not batched into future updates | Direct response to the pattern of dependencies surfacing reactively, one at a time, across the meeting | Mark Ho | Changes the reporting norm going forward — this is a process change, not a one-time fix |
| 6 | Team to provide actual timelines with start/finish dates, not verbal assurances | Requested directly by Mark Ho after repeated timeline reconciliation in the meeting | Mark Ho | Raises the bar on what counts as an acceptable answer in future updates — "on track" is no longer sufficient |

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Resolve remaining SSO issue and identify preferred solution | Engineering team | Not specified | 🔴 Critical | 🔴 Not Started |
| Determine if CSC changes are required for the SSO solution | Engineering + CSC | Not specified | 🔴 Critical | 🔴 Not Started |
| Post-meeting discussion on POCDEX API VAPT approach | Pow Hwee Tan / Adrian Ang | Not specified — should connect to today's separate POCDEX alignment call | 🔴 High | 🔴 Not Started |
| Provide VAPT timelines with explicit start and finish dates | Programme team | Not specified | 🔴 Critical | 🔴 Not Started |
| Confirm who executes POCDEX-related VAPT activity | POCDEX team | Not specified | 🔴 High | 🔴 Not Started |
| Confirm NCS resource assignments and segregation between projects | Programme team | Not specified | 🟡 Medium | 🔴 Not Started |
| Send dependency and VAPT summary to stakeholders | Team, after follow-up call | Not specified | 🔴 High | 🔴 Not Started |
| Include VAPT in daily programme tracking | Programme team | Not specified | 🟡 Medium | 🔴 Not Started |
| Monitor CSC ingestion automation timeline | Programme team | Not specified | 🟡 Medium | 🔴 Not Started |
| Produce detailed performance test criteria | Engineering team | Not specified | 🟡 Medium | 🔴 Not Started |
| Produce production readiness checklist details | Engineering team | Not specified | 🟡 Medium | 🔴 Not Started |
| Surface any additional dependencies immediately | All workstream leads | Ongoing | 🔴 Critical | 🔴 Not Started |
| Increase reporting cadence with BO | Programme leadership | Not specified | 🔴 High | 🔴 Not Started |

**Notes:**
- 12 of 13 action items have no due date. Given Mark's explicit ask for "actual timelines rather than verbal assurances," the absence of dates here is itself worth naming back to the team — dating these is the first concrete demonstration of the behavior change he's asking for.
- The SSO items connect directly to today's 3:30pm CSC call — that call is effectively where "resolve remaining SSO issue" and "determine if CSC changes are required" get worked, not a separate track.

---

## Key Insights & Quotes

**What BO is actually telling the team (per PM's own read, retained as given):**
"I can accept technical problems, but I cannot accept discovering them late." The conversation was less about any individual defect and more about whether the programme has sufficient control over delivery. The primary risk is no longer technical — it's stakeholder confidence in delivery governance, forecasting, and dependency management.

**The repeated question that matters most:**
Mark asked multiple times across the meeting: "Are there any other dependencies we don't know about?" The fact this needed asking repeatedly — and that each pass of the conversation surfaced yet another dependency (POCDEX VAPT, CSC SSO, CSC ingestion, performance testing, production readiness) — is treated by the PM as the real signal, not any single answer given.

**Positive signals worth keeping in view, not just the risk list:**
- Testing is largely complete — one outstanding use case, not broad instability. The programme's core challenge has shifted from build completion to closure, validation, and security sign-off.
- Engineers worked through multiple weekends, including the National Day long weekend, to recover schedule — a real signal of ownership, not just words.
- Pow Hwee Tan's repeated commitment that POCDEX VAPT will align to Compass, not block it, meaningfully reduces uncertainty on one dependency.
- Risks were surfaced openly in the room rather than hidden — the problem is the discovery pattern (reactive, one at a time), not a lack of candor.

**Governance gap, named but not yet resolved:**
Repeated discussion centered on who should have surfaced dependencies earlier and who is coordinating cross-team activity — a real gap between product, engineering, MO stakeholders, and supporting programmes for programme-level dependency management. No owner assigned for closing this gap itself.

**PM's own risk elevation (not from the meeting record, PM's synthesis):**
The team's current attention is on SSO and VAPT as individual technical problems. The PM's read is that the two risks Mark kept circling back to are actually: (1) unknown dependencies still emerging, and (2) eroding BO confidence from late discovery — both process/governance risks, not technical ones. Everything else discussed is treated as a symptom of these two.

---

## Open Questions

| Question | Owner | By |
|---|---|---|
| What is the preferred SSO solution option, and is an interim workaround acceptable? | Engineering team | Not specified, effectively today via the 3:30pm CSC call |
| Does the SSO fix require CSC-side changes? | Engineering + CSC | Not specified |
| Will Compass and POCDEX VAPT run as one integrated exercise or two separate ones? | Pow Hwee Tan / Adrian Ang | Not specified — same question as this morning's separate POCDEX thread (Options A/B/C), needs to be resolved once, not twice in parallel |
| Are there additional dependencies not yet surfaced? | All workstream leads | Ongoing, explicitly named as a standing ask, not a one-time check |
| Who owns closing the cross-team dependency-visibility governance gap itself (not any single dependency, but the pattern)? | Not yet assigned | Not specified |

---

## Blockers

| # | Blocker | Blocked By | Impact | Resolution |
|---|---|---|---|---|
| 1 | SSO / authentication issue not yet closed | A remaining use case involving token/session passing, internet vs. intranet behavior, and inconsistent results across different machines during testing — complexity that only surfaced in late-stage testing | Last major outstanding defect; risks launch delay, user experience degradation, and knock-on effects to security testing if unresolved | In progress; today's 3:30pm CSC call is the direct next step |
| 2 | VAPT timeline has very little contingency left | VAPT activities planned around early September, NCS scheduling flexibility appears limited, and fixing findings still needs a buffer the programme has already partly consumed | Any further surprise reduces available recovery time before launch | Team asked to produce one consolidated VAPT plan with every security dependency, start/completion dates, and remediation buffer — not yet produced |
| 3 | No complete dependency register | Dependencies have been discovered incrementally through conversation rather than tracked from a single source of truth | A new blocker could emerge in September or October when little recovery time remains | Action item to create a launch-critical dependency register (dependency, owner, date, risk) with every workstream signing off — not yet built |

---

## Timeline Risks

| # | Timeline Risk | Detail | Action |
|---|---|---|---|
| 1 | VAPT schedule has little contingency left | VAPT is scheduled around early September; fixing/remediation buffer is still needed, and NCS scheduling flexibility appears limited. Overlaps with the same timeline math already flagged in [today's POCDEX notes](2026-08-25-W35-pocdex-data-sharing-email-thread.md) — mid-Oct Employment Profile readiness leaving a compressed runway to a 24 Nov (or 2 Nov, per `open-items.md` #39, still unreconciled) target | Two separate conversations today are converging on the same VAPT scheduling risk from different angles — bring them together into one tracked risk rather than two threads |
| 2 | Action items have no dates, repeating the pattern Mark just challenged | 12 of 13 action items from this meeting have no due date, despite Mark's explicit ask for real timelines over verbal assurances | Date these before the next update — this is the fastest, cheapest proof of the governance shift he's asking for |
| 3 | The VAPT arrangement decision is being worked in two rooms at once | Whether Compass and POCDEX VAPT run as one integrated exercise or two separate ones is being decided in this meeting's post-meeting Pow Hwee Tan/Adrian Ang discussion *and* in this morning's separate POCDEX data-sharing alignment call (Options A/B/C) | Resolve once, not twice independently — two parallel decisions risk landing on two different answers |

---

## Next Steps

**Immediate (today, 25 Aug):**
- 3:30pm CSC call to progress the SSO resolution — directly serves two of this meeting's action items
- Pow Hwee Tan / Adrian Ang post-meeting discussion on POCDEX VAPT approach — should explicitly reference and reconcile with the separate 2pm POCDEX alignment call happening the same day

**This week:**
- Produce the consolidated VAPT plan (dependencies, dates, remediation buffer)
- Start the launch-critical dependency register
- Date the 13 action items — the first concrete proof of the governance shift Mark asked for

**Follow-up:**
- Not explicitly scheduled in the source — "increase reporting cadence with BO" implies more frequent syncs going forward, but no specific next meeting date given.

---

## Context for Future Reference

**Relates to:**
- [2026-08-25 POCDEX data-sharing thread](2026-08-25-W35-pocdex-data-sharing-email-thread.md) — same VAPT arrangement question (integrated vs. separate), same day, different room. Needs reconciling, not parallel tracking.
- `open-items.md` #39 (OTEP UAT/VAPT timeline) — VAPT scheduling risk named here is the same underlying timeline the tracker already carries; this meeting adds explicit senior-BO pressure and a "no more surprises" framing on top of it.
- Today's 3:30pm CSC SSO call — directly actions two of this meeting's items.
- `context-library/stakeholder-profiles.md` (Mark & GK — Senior Demo Audience section) — Mark's profile was already flagged as incomplete ("capture their specific priorities, communication style, and what 'good' looks like"). This meeting is a strong, direct source for that: Mark wants evidence over assurance, explicit dates over verbal status, and values dependencies surfaced immediately rather than batched. Worth updating the profile from this meeting rather than waiting for the next session.

**Pattern worth naming:** This is the second time this week alone that "what dependencies are we missing" has surfaced as the real question (the first being this morning's POCDEX thread, and going back further, the ≥25 unowned UAT scenarios in `open-items.md` #55 first flagged 11 Aug). Mark's meeting elevates this from a workstream-level annoyance to a named programme-level trust risk. Worth considering whether the launch-critical dependency register this meeting calls for becomes the single place all of these separate threads (POCDEX, UAT scope, VAPT, CSC) get consolidated, rather than continuing to track them as parallel items across different documents.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original content as provided</summary>

Provided directly by the PM as a structured analysis of a transcribed meeting — full text preserved in the source conversation, not duplicated here to keep this file a reasonable size.

</details>
