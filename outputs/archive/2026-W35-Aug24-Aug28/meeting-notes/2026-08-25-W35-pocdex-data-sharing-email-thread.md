# Meeting Notes: POCDEX Data Sharing Approval — Email Thread ("RE: Draft for Data Sharing Approval for CareerCompass")

**Date:** 25 Aug 2026 (email thread; alignment call scheduled today)

**Attendees (thread participants):** Adrian ANG, Huiting LIAN (POCDEX/WD), Pow Hwee TAN, Johnny LIM. Referenced: CC and POCDEX teams broadly.

**Meeting Type:** Email thread → same-day alignment call — evolved from data-sharing approval into API readiness, UAT scope, and VAPT sequencing risk

**Duration:** N/A (async thread; alignment call today, time not specified)

**Note on source:** Input is the PM's own structured summary of the email thread, not a raw transcript. Decisions/risks/actions below reflect the PM's framing, cross-checked against open trackers.

---

## Summary

Three open questions are converging on today's alignment call, all gating the 24 Nov 2026 rollout: (1) whether CC's proposed "last modified date" approach to detecting employment data changes is technically sound and acceptable to POCDEX, (2) whether UAT scope should be CC's 21 personas or POCDEX's broader Priority 1 test scenarios, and (3) how VAPT should be sequenced (joint, separate-but-parallel, or scoped-out) without slipping the go-live date. Underneath all three is a sharper timeline problem: CC's Employment Profile auto-refresh capability isn't test-ready until mid-October, leaving a thin buffer before a 24 Nov rollout that POCDEX itself proposed.

This directly extends yesterday's Item #8 escalation (CC must confirm the date it needs the POCDEX API production-ready) — see [2026-08-24 Item #8 notes](2026-08-24-W35-pocdex-teams-email-item8-escalation.md). That note flagged an unreconciled ~3-week gap between POCDEX's 24 Nov target and `open-items.md` #39's tracked "week of 2 Nov" date. Today's thread adds the technical and testing substance behind why that date is genuinely load-bearing, not just a scheduling formality.

---

## Decisions Made

No decisions have been finalized yet — everything below is proposed, pending today's alignment call. One item is closer to settled than the others:

1. **Four APIs identified for backend simulation of the "last modified date" approach**
   - **Why:** To unblock POCDEX API sign-off without requiring continuous full-data refresh.
   - **Who proposed:** CC team.
   - **Impact:** Scopes the technical validation work (Identity Resolve, Officer, Employment, Jobs APIs) — but Huiting has not yet confirmed this satisfies WD requirements, since "last modified date" can differ across POCDEX's data domains (e.g., employment can change without personal details changing). **Not yet a closed decision.**

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Conduct alignment call on assumptions, timeline, and testing scope | Adrian Ang / POCDEX / CC teams | Today (25 Aug) | 🔴 High | 🔴 Not Started |
| Validate feasibility of "last modified date" approach for API sign-off | CC + POCDEX | Not specified — gates API sign-off | 🔴 High | 🔴 Not Started |
| Clarify UAT success criteria — 21 personas vs. broader POCDEX Priority 1 scenarios | CC + WD | Not specified | 🔴 High | 🔴 Not Started |
| Decide VAPT approach (Option A/B/C) and funding/vendor model | POCDEX leads / Pow Hwee TAN / Johnny LIM | Not specified | 🔴 High | 🔴 Not Started |
| Align production readiness timeline and dependencies across API/UAT/VAPT | All stakeholders | Not specified | 🔴 High | 🔴 Not Started |

**Notes:**
- None of these five items have a stated due date beyond "today's call" for the first one. Recommend the call itself produce explicit dates for the remaining four, since all currently point back to the same unresolved 24 Nov timeline.

---

## Key Insights & Quotes

**"Last modified date" isn't a single clean signal:**
- Huiting's core objection: POCDEX's last-modified-date semantics differ by data domain — employment info can change independently of personal details. CC's proposal to trigger API calls off one "last modified date" per record may not map cleanly onto how POCDEX actually versions changes. This is the same gap flagged in `open-items.md` #55/#56 (data-currency model) and in yesterday's [RAID log](../analyses/2026-08-24-W35-raid-log.md) Issue I4 ("last-modified-date trigger logic is only half-specified").

**UAT scope: two different definitions of "sufficient testing," again:**
- CC's default plan is its 21 personas. WD/POCDEX is evaluating against its own Priority 1 master test plan scenarios — a broader, POCDEX-authored set. This is a direct continuation of the exact gap Christopher Woo raised yesterday ("what exactly are we signing off?") and the same unresolved item as `open-items.md` #55's ≥25 additional UAT scenarios (multi-hatting, secondment, email change, NPL, missing mappings, terminated officers) — still unowned since 11 Aug.

**VAPT: three options, no clear owner on funding:**
- Option A (joint VAPT) risks conflating two systems with different architectures/risk profiles.
- Option B (separate VAPT, same NCS window, separate reports) preserves independence but needs funding/vendor confirmation.
- Option C (exclude "last modified date" changes from current VAPT scope, treat as minor enhancement later) sidesteps the issue now but defers risk rather than resolving it.
- Funding and vendor commitment for POCDEX's VAPT is unresolved — Pow Hwee and Johnny Lim were asked to advise, but no date given.

**The real timeline math:**
- CC's Employment Profile auto-refresh is only test-ready around mid-October. POCDEX needs API testing, UAT sign-off, and VAPT all completed before their 24 Nov production date. Mid-Oct to 24 Nov is roughly 6 weeks to sequence three dependent workstreams — thin, especially given VAPT alone was separately negotiated at ~10 weeks (7 weeks + 3-week remediation buffer) per `open-items.md` #39's existing OTEP-side VAPT tracking (7 Sep–16 Oct).

**Adrian's framing (this morning):** time-boxing each topic in today's call, "lots to discuss" — signals this is being treated as a working session to resolve assumptions, not just a status update.

---

## Open Questions

- [ ] Does CC's "last modified date" approach satisfy WD/POCDEX's sign-off requirements, given domain-level differences in what "last modified" means? — **Owner:** CC + POCDEX — **By:** Today's call
- [ ] Is UAT scope CC's 21 personas, POCDEX's Priority 1 scenarios, or both? — **Owner:** CC + WD — **By:** Today's call
- [ ] Which VAPT option (A/B/C) gets chosen, and who funds/commits the vendor for a separate POCDEX VAPT if Option B is picked? — **Owner:** POCDEX leads / Pow Hwee / Johnny Lim — **By:** Not specified
- [ ] Does the mid-Oct Employment Profile readiness date leave enough runway for API testing + UAT sign-off + VAPT before 24 Nov, or does something need to compress/parallelize? — **Owner:** All stakeholders — **By:** Today's call, ideally

---

## Blockers

1. **"Last modified date" technical approach unvalidated by POCDEX**
   - **Blocked by:** Domain-level ambiguity in what "last modified" means across POCDEX's data model.
   - **Impact:** Blocks API sign-off, which blocks the Item #8 production-readiness date CC owes POCDEX.
   - **Resolution:** Backend simulation on 4 APIs proposed; Huiting's confirmation still needed.

2. **UAT scope not agreed between CC and WD**
   - **Blocked by:** No confirmed answer on whether POCDEX's Priority 1 scenarios are in scope alongside CC's 21 personas.
   - **Impact:** Same governance risk Christopher Woo raised yesterday — "what are we signing off on" — now extended to POCDEX-specific lifecycle scenarios.
   - **Resolution:** Today's call; connects to the still-unowned ≥25 scenarios in `open-items.md` #55.

3. **VAPT approach and funding undecided**
   - **Blocked by:** No decision between joint/separate/scoped-out VAPT; funding and vendor commitment unresolved.
   - **Impact:** Could delay VAPT completion, which cascades directly into the 24 Nov go-live date.
   - **Resolution:** Pow Hwee TAN / Johnny Lim to advise; no date given.

---

## Timeline Risks

- **TIMELINE RISK: Mid-Oct Employment Profile readiness leaves a compressed runway to 24 Nov.** API testing, UAT sign-off, and VAPT all need to complete in that window — roughly 6 weeks for three sequential/overlapping workstreams, one of which (VAPT, per `open-items.md` #39) has separately been scoped at ~10 weeks elsewhere in the same program. Worth surfacing this arithmetic explicitly in today's call rather than letting each workstream get a "yes, we can do it" answer in isolation.
- **TIMELINE RISK: This is the second unreconciled POCDEX date conflict in two days.** Yesterday's Item #8 note flagged POCDEX's 24 Nov target vs. `open-items.md` #39's "week of 2 Nov" — a ~3-week gap, still unresolved as of this morning. Today's thread assumes 24 Nov as the working date without that conflict being closed. Recommend resolving the 2 Nov vs. 24 Nov question before today's call locks in downstream sequencing against 24 Nov specifically.
- **TIMELINE RISK: UAT scenario coverage gap (`open-items.md` #55, ≥25 scenarios) has been unowned since 11 Aug — over two weeks.** Today's UAT scope question (21 personas vs. POCDEX Priority 1 scenarios) is the same gap resurfacing a third time (first as a data-requirements ask in July, then as Christopher Woo's "what are we signing off on" question yesterday, now here). Worth treating as one gap with three sightings, not three separate asks.

---

## Next Steps

**Immediate (today, 25 Aug):**
- Attend/drive the alignment call — time-boxed per topic, per Adrian's framing
- Come prepared with a position on "last modified date" validation approach, UAT scope, and a preferred VAPT option

**This week:**
- Resolve the 24 Nov vs. 2 Nov date conflict (carried from yesterday's Item #8 note) — ideally before or during today's call, since it underpins every date discussed here
- Get explicit owner + date commitments on the five action items above, none of which currently have one

**Follow-up:**
- Not yet scheduled — depends on what today's call resolves.

---

## Context for Future Reference

**Relates to:**
- [2026-08-24 Item #8 escalation](2026-08-24-W35-pocdex-teams-email-item8-escalation.md) — same underlying POCDEX relationship, direct continuation from yesterday's date-conflict finding.
- `open-items.md` #39 (OTEP UAT/VAPT timeline) — today's VAPT sequencing risk sits alongside the already-tracked 16 Oct vs. 23 Oct conflict and the 7 Sep VAPT start; this is a second, POCDEX-specific VAPT thread that needs to be reconciled against the same master timeline, not tracked separately.
- `open-items.md` #55 (Huiting Lian's data requirements / UAT scope ask) — today's "21 personas vs. Priority 1 scenarios" question is this same gap, third time surfacing.
- `open-items.md` #56 (POCDEX sync cadence / data-currency, transferred to Core team) — the "last modified date" technical question is closely related; worth confirming with Core team (Pei Ern/Kingsley) whether their side has visibility into this, since the item was marked transferred/closed on the Pathfinder tracker.
- [2026-08-24 RAID log](../analyses/2026-08-24-W35-raid-log.md), Issue I4 — flagged the last-modified-date trigger logic as half-specified; today's thread is the same issue, now with POCDEX's explicit pushback attached.

**Pattern worth naming:** This is now three POCDEX-originated escalations in about two weeks (data classification/UAT scope in mid-Aug, Item #8 yesterday, this thread today) that all trace back to the same underlying gaps — data-currency model, UAT scope definition, and VAPT sequencing — never fully closed, just addressed piecemeal each time they resurface. Worth considering whether these three items get consolidated into one owned tracker with explicit dates, rather than continuing to arrive as separate threads.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original content as provided</summary>

Provided directly by the PM as a structured summary of an email thread — full text preserved in the source conversation, not duplicated here to keep this file a reasonable size.

</details>
