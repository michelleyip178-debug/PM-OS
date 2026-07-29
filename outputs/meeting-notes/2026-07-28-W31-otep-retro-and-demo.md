# Meeting Notes: [Bi-Weekly] OTEP Retro and Demo

**Date:** 2026-07-28

**Organiser:** Imelda Mo

**Attendees:** Adrian Ang, Xian Zhang Guo, Christopher Woo, Imelda Mo, vendor team

**Meeting Type:** Product review + UAT readiness discussion (framed as retro, functioned as working session)

**Source:** Meeting transcript and chat, reviewed

---

## Summary

This ran as a working product review and UAT readiness check, not a classic retro. The vendor demoed real progress on Learning & Courses and Jobs & Opportunities, and was transparent about known defects with fixes already in motion. But most functional confidence still depends on production data that hasn't arrived yet, and two decisions remain genuinely open: how early UAT should start without duplicating formal UAT, and how competency data should be sourced and displayed. The competency governance question is the one worth escalating — it's a philosophy disagreement, not a scoping detail.

---

## Decisions Made

1. **Domain filter bug — root cause understood, fix in deployment.**
   - **Why:** Already diagnosed; not a new investigation.
   - **Impact:** No PM action needed; track to deployment.

2. **Course cards truncate after two lines (changed from 25-character truncation).**
   - **Why:** Confirmed with design as a better readability trade-off.
   - **Impact:** Design-approved; flows straight to implementation.

3. **Missing durations stay hidden for now (no policy change).**
   - **Why:** Current test data can't validate a different behavior; team wants to see production data before deciding.
   - **Impact:** Defers a real product decision — see Risk 2 below, this is exactly the kind of assumption that could break on production data.

4. **Careers@Gov opportunities without a Function-category mapping will still display, via a new "Others" category.**
   - **Why:** Prevents unmapped opportunities from silently disappearing.
   - **Impact:** New category needs to be built; low risk, straightforward fix.

5. **Competency display will combine Job-ID competencies with WOG/functional-lead-derived competencies. Sync-back to HR systems is explicitly out of scope.**
   - **Why:** Working alignment reached in the room, but see the disagreement flagged below — this wasn't actually settled going in.
   - **Impact:** This is the decision most likely to unravel. Xian Zhang GUO's read was that combining HR + FL-created competencies had been agreed for some time; Adrian Ang's read was that it's outside current scope. Two decision-makers on this meeting's own stakeholder terms hold different mental models of an already-"decided" item — that's a signal to get this in writing before it's treated as settled, not just verbally re-confirmed in the room.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Fix domain filter bug | Vendor (Learning & Courses) | Not stated — confirm | High | 🟡 In deployment |
| Deploy autocomplete fixes | Vendor (Learning & Courses) | Not stated — confirm | Medium | 🟡 In progress |
| Add programme-code search | Vendor (Learning & Courses) | Not stated — confirm | Medium | 🔴 Not started |
| Investigate provider logo/provider data mismatch | Vendor (Learning & Courses) | Not stated — confirm | Medium | 🔴 Not started |
| Fix missing Overview/Outcome rendering | Vendor (Learning & Courses) | Not stated — confirm | High | 🔴 Not started |
| Validate duration/start-date behaviours once production data arrives | Vendor (Learning & Courses) | Blocked on CSC production data | Medium | 🔴 Blocked |
| Validate pagination control state | Vendor (Learning & Courses) | Not stated — confirm | Low | 🔴 Not started |
| Verify empty-state rendering | Vendor (Learning & Courses) | Not stated — confirm | Low | 🔴 Not started |
| Create "Others" category for unmapped Careers@Gov opportunities | Vendor (Jobs & Opportunities) | Not stated — confirm | Medium | 🔴 Not started |
| Fix tile stretching UI defect | Vendor (Jobs & Opportunities) | Not stated — confirm | Low | 🔴 Not started |
| Complete automated Careers@Gov ingestion | Vendor (Jobs & Opportunities) | Not stated — confirm | High | 🟡 In progress |
| Prepare mock data for early UAT | Vendor (UAT) | Thursday/Friday (readiness communication) | High | 🔴 Not started |
| Finalise UAT environment data | Vendor (UAT) | Before UAT start | High | 🔴 Not started |
| Communicate UAT readiness | Vendor (UAT) | Thu/Fri this week | High | 🔴 Not started |
| Conduct tester training | Vendor (UAT) | Next week | Medium | 🔴 Not started |
| Share UAT test cases | Vendor (UAT) | Not stated — confirm, likely tied to readiness communication | High | 🔴 Not started |
| Review proposed early-UAT approach | PSD (Michelle + team) | Before early UAT starts | High | 🔴 Not started |
| Clarify which test cases belong to mock-data vs. production-data validation | PSD (Michelle) | Before early UAT starts | High | 🔴 Not started |
| Continue competency-logic discussion (HR / WOG / FL competencies, sync strategy) | Joint — follow-up session | Next meeting | High | 🔴 Deferred |

**Notes:**
- Several action items have no due date stated in the transcript — flagged above as "Not stated — confirm." Recommend closing these within 48 hours per standard practice.
- The "clarify mock-data vs. production-data test cases" item connects directly to the existing UAT Operating Model ([2026-07-17-W29-uat-operating-model.md](../archive/2026-W29-Jul13-Jul17/meeting-notes/2026-07-17-W29-uat-operating-model.md)), which already states UAT cannot start unless five readiness conditions are met (SIT complete, integrations verified, environment stable, test accounts validated, external teams briefed). The early-UAT proposal in this meeting should be checked against that model rather than negotiated fresh — it may already answer Xian Zhang's "avoid testing twice" concern.

---

## Key Insights & Quotes

**Test data quality was the dominant theme, not a side issue.** Nearly every functional claim in the demo came with a caveat tying confidence to future production data: duration handling, start-date handling, filtering, course-provider logic, course validity, edge-case visibility. Christopher Woo specifically noted that sorting behavior couldn't be validated because all course dates were historical — a concrete, checkable gap, not a vague concern.

**Stakeholder engagement was substantive, not passive.** Adrian Ang, Xian Zhang Guo, and Christopher Woo each probed specific behaviors (search, edge cases, sorting/pagination) rather than sitting through a scripted demo. Worth naming in any upward summary — this is the kind of engagement that catches issues before UAT, not during it.

**The competency governance tension is the real story here, not the tactical decision.** Two philosophies are in conflict: expose source-data gaps so agencies fix them (data-integrity-first) vs. patch gaps using WOG-derived data (experience-first). Adrian Ang raised the sharper version of this: if missing HR competencies get silently supplemented from WOG sources, users may never know the underlying HR data is incomplete — better UX, worse visibility into a real data-quality problem. The room aligned on a tactical answer (combine both sources, no sync-back) without resolving which philosophy that tactical answer is supposed to serve. That's worth flagging up, since it'll resurface the moment someone asks "why doesn't this match what's in the HR system."

---

## Open Questions

- [ ] What's the actual due date for each vendor action item above? — **Owner:** Imelda Mo / vendor lead — **By:** Next standup
- [ ] Does the UAT Operating Model's five readiness conditions already resolve the early-UAT vs. formal-UAT duplication concern? — **Owner:** Michelle — **By:** Before early UAT proposal is approved
- [ ] Which philosophy (expose gaps vs. patch gaps) does the competency decision actually commit to, long-term? — **Owner:** Adrian Ang + Xian Zhang Guo — **By:** Follow-up session (deferred from this meeting)
- [ ] Who owns test-case ownership for early UAT (mock-data track) vs. formal UAT (production-data track)? — **Owner:** Michelle + vendor UAT lead — **By:** Before early UAT starts

---

## Blockers

1. **Production-quality data from CSC.**
   - **Blocked by:** External data readiness, not owned by the vendor or PSD directly.
   - **Impact:** Blocks validation of duration handling, start-date handling, filtering, course-provider logic, and course validity rules. Several UAT-relevant decisions (e.g., "missing durations hidden for now") are explicitly provisional pending this data.
   - **Resolution:** No committed date surfaced in this meeting — worth chasing an explicit CSC data-readiness date given how many open items trace back to it.

2. **Competency governance decision isn't actually final**, despite being logged as Decision 5.
   - **Blocked by:** Unresolved disagreement between Adrian Ang and Xian Zhang Guo on whether HR+FL competency combination was previously agreed or is new scope.
   - **Impact:** Risk that this "decision" gets built against, then reopened once the philosophy question surfaces again.
   - **Resolution:** Deferred to a follow-up session — get the philosophy question, not just the tactical output, explicitly on that agenda.

---

## Next Steps

**Immediate (This Week):**
- Confirm due dates on all vendor action items with no date stated
- Cross-check the early-UAT proposal against the existing UAT Operating Model's readiness gates before approving it
- Chase an explicit data-readiness date from CSC

**Short-term (Next 2 weeks):**
- Follow-up session on competency logic — push for the underlying philosophy decision (expose vs. patch), not just another tactical patch
- Track whether test-data quality fixes actually land before UAT start, since several defects are currently "known but unvalidated"

**Follow-up Meeting:**
- **Purpose:** Resolve competency model governance (HR competencies, WOG competencies, FL-created competencies, sync strategy)
- **Attendees:** Adrian Ang, Xian Zhang Guo, Michelle (at minimum — both disagreeing stakeholders need to be in the room together, not resolved async)

---

## Context for Future Reference

This connects to two active threads already in the workspace:
- **UAT format rollout** ([2026-07-29-W31-batch1-uat-format-rollout-plan.md](../analyses/2026-07-29-W31-batch1-uat-format-rollout-plan.md)) — the early-UAT proposal from this meeting should be sequenced against that conversion plan, since both touch when/how UAT actually starts running.
- **UAT Operating Model** ([2026-07-17-W29-uat-operating-model.md](../archive/2026-W29-Jul13-Jul17/meeting-notes/2026-07-17-W29-uat-operating-model.md)) — already defines the five blocking readiness conditions and the "no surprises" principle this meeting's early-UAT risk (Risk 1) is describing from scratch. Worth citing directly in the follow-up rather than re-deriving the same concern.

**Stakeholder note:** Both Adrian Ang and Xian Zhang Guo are decision-makers, not advisors, per their stakeholder profiles — the competency disagreement between them isn't a case of one person needing to be brought up to speed, it's two people with real authority holding different models. Frame the follow-up as a joint decision session, not a status update to either of them individually.

---

## My Read of the Meeting

Feature delivery is progressing well, but validation readiness is lagging feature readiness. Most known bugs have owners and fixes in motion. The bigger exposure is that several decisions logged today as "settled" (missing durations, competency sourcing) are actually provisional — waiting on data that hasn't arrived, or resting on agreement between two stakeholders who don't yet agree. If this goes to SteerCo, lead with progress, but flag the competency governance question as a decision that needs explicit resolution, not just documentation of today's tactical output.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw meeting summary as provided</summary>

Executive Summary

This was less of a retro and more of a working product review plus UAT readiness discussion.
The session covered:

1. Learning & Courses module demo (search, filters, course detail page)
2. Jobs & Opportunities enhancements (Careers@Gov integration and new Function filter)
3. Open defects and design gaps
4. UAT preparation strategy
5. Career Compass competency-mapping logic discussion

Overall:
The team demonstrated substantial implementation progress across Learning & Courses and Jobs & Opportunities. Most critical issues raised were understood and already have known fixes. However, many behaviours are still being validated against test data rather than production-like data. Several important product decisions around competency sourcing and UAT scope remain only partially aligned. There is emerging risk that UAT may become inefficient if mock-data testing and production-data testing are not clearly separated.

[Full raw content as provided by the PM, covering: What Went Well, What Didn't Go Well, Key Decisions, Actions (Vendor Team, PSD Team), Risks We Are Not Fully Addressing, and My Read of the Meeting — condensed into the structured sections above.]

</details>
