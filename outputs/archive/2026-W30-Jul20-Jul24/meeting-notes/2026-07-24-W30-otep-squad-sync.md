---
date: 2026-07-24
week: 2026-W30
meeting_type: team-planning
topic: OTEP Squad Sync — VAPT/UAT Delivery Risk
---

# Meeting Notes: OTEP Squad Sync

**Date:** 2026-07-24

**Attendees:** Rama Moorthy, Pow Hwee Tan, Imelda Mo, Michelle Yip, Adrian Ang, Fabian Peh (requested support)

**Meeting Type:** Delivery-risk management (not a status update)

**Duration:** Not stated

**Source:** Meeting transcript (transcribed) and meeting chat

---

## Summary

This was a risk-management session, not a status check-in. Most of the discussion centered on two critical-path items: VAPT vendor timing (NCS availability doesn't open until mid-September, and the security test itself needs about a month) and UAT readiness (Products/POCDEX data, officer personas, and test data are still not fully locked down). The team was honest about the domino effect: if UAT slips, VAPT slips, and if VAPT slips, the October MVP slips. Pow Hwee pushed back hard on optimistic assumptions about Products' turnaround time, which kept the group from planning against commitments that don't exist yet.

---

## Decisions Made

1. **NCS remains the preferred VAPT vendor**
   - **Why:** Despite timing and cost concerns, NCS is still viewed as more reliable than alternative vendors from the bulk tender
   - **Who decided:** Group consensus
   - **Impact:** Locks vendor selection but not the schedule risk — see Risk 1 below

2. **UAT will start even if some Products data isn't ready**
   - **Why:** Waiting for full data readiness would burn time the team doesn't have
   - **Who decided:** Group consensus
   - **Impact:** Functional testing proceeds using mock accounts/data; Products-dependent scenarios get completed later. This is the same functional-vs-data-validation split floated in [2026-07-23-W30-cc-pocdex-data-requirements.md](2026-07-23-W30-cc-pocdex-data-requirements.md)

3. **Products/DO engagement will focus on test data and personas, not full test case review**
   - **Why:** Earlier confusion (documented in the same POCDEX session yesterday) had teams assuming DO needed to review hundreds of functional test cases. That's now resolved — DO only needs officer personas, test data requirements, and a clear ask
   - **Who decided:** Group consensus
   - **Impact:** Should meaningfully speed up the Products/DO engagement path

4. **Reuse existing Core personas instead of building new accounts**
   - **Why:** Faster than standing up net-new test identities
   - **Who decided:** Group consensus
   - **Impact:** Pathfinder can borrow Core's existing personas/mock users where scenarios overlap

5. **Escalate known risks to leadership**
   - **Why:** UAT, Products dependency, and VAPT risk all now sit above the team's ability to unilaterally de-risk
   - **Who decided:** Group consensus
   - **Impact:** Adrian Ang to review with leadership and give Gek Khiang an informal risk update

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Review NCS VAPT quotation, validate scope/cost | Rama Moorthy | Not stated | 🔴 High | 🔴 Not Started |
| Explore possibility of earlier VAPT activities | Rama Moorthy | Not stated | 🔴 High | 🔴 Not Started |
| Confirm VAPT execution process and remediation expectations | Rama Moorthy | Not stated | 🔴 High | 🔴 Not Started |
| Follow up on Products/CSC dependencies and timelines | Rama Moorthy | Not stated | 🔴 High | 🔴 Not Started |
| Refine UAT plan, identify Products-dependent test cases | Rama Moorthy | Not stated | 🔴 High | 🔴 Not Started |
| Help accelerate VAPT discussions/logistics | Fabian Peh | Not stated | 🟡 Medium | 🔴 Not Started |
| Complete and refine officer personas | Imelda Mo | Not stated | 🔴 High | 🔴 Not Started |
| Complete Pathfinder and Core test case consolidation | Michelle Yip, Imelda Mo | Not stated | 🔴 High | 🔴 Not Started |
| Review additional Pathfinder scenarios and inputs | Michelle Yip, Pow Hwee Tan | Not stated | 🟡 Medium | 🔴 Not Started |
| Review risk situation with leadership | Adrian Ang | Not stated | 🔴 High | 🔴 Not Started |
| Provide informal risk update to Gek Khiang | Adrian Ang | Not stated | 🟡 Medium | 🔴 Not Started |
| Continue QA coverage analysis against PRD and user stories | Imelda Mo, QA team | Not stated | 🟡 Medium | 🔴 Not Started |
| Send Products-related requirements to DO/Products team ASAP | Rama Moorthy (team) | Not stated | 🔴 High | 🔴 Not Started |

**Notes:**
- No due dates were stated for any action item in the source transcript. Given VAPT vendor availability opens mid-September and MVP targets October, these need dates attached within the next few days, not left open-ended.
- "Complete Pathfinder and Core test case consolidation" (Michelle Yip / Imelda Mo) is the same deliverable Adrian asked Michelle to have "by tomorrow" (2026-07-24) on the [DOs call](2026-07-23-W30-dos-call.md) the day before. Per [2026-07-24-W30-consolidated-test-plan.md](../analyses/2026-07-24-W30-consolidated-test-plan.md), this appears to already be in progress — worth confirming status against that Adrian deadline rather than treating it as a fresh open item.

---

## Timeline Risks

- **TIMELINE RISK:** NCS VAPT availability starts mid-September, and SGEMS/VAPT execution itself needs roughly a month, plus buffer for findings remediation and rescans. Compressed against an October MVP, this leaves little to no room for delay — and no formal contingency exists if findings come back significant. This is flagged in the meeting itself as under-planned; treat it as the single biggest schedule risk right now, not a background item.
- **TIMELINE RISK:** Adrian asked for the consolidated test plan "by tomorrow" on the 2026-07-23 DOs call (i.e., today, 2026-07-24). This squad sync assigns the same consolidation task to Michelle Yip/Imelda Mo without a stated date. Confirm whether today's deadline still stands or has shifted.
- **TIMELINE RISK:** Products data readiness has no committed date from the Products team (explicitly called out by Pow Hwee — "Compass cannot simply assume timelines for dependent teams without agreement from those teams"). UAT execution and, by extension, VAPT start are both downstream of this unresolved date.

---

## Key Insights & Quotes

**On dependency assumptions:**
- Pow Hwee Tan repeatedly challenged the assumption that Products could deliver data on assumed timelines, or that other teams could absorb late requests without impact: "Compass cannot simply assume timelines for dependent teams without agreement from those teams." This kept the team from planning on hope.

**On what Data Office actually needs:**
- Confusion resolved: DO needs officer personas, test data requirements, and a clear picture of the ask, not a review of hundreds of functional test cases. This should unblock the Products/DO engagement path significantly.

**On UAT workarounds:**
- Team explored partial UAT with mock accounts, testing functional flows ahead of production-quality data, reusing Core personas for Pathfinder, and splitting UAT into functional vs. data-validation activities. Pragmatic, but still contingency thinking rather than a locked plan — several statements in the transcript were framed as "maybe" or "we'll see," not commitments.

**On preparation:**
- Michelle Yip was able to state immediately that consolidated UAT plans, Pathfinder and Core test plans, and test data requirements already exist and had been shared previously — this reduced uncertainty in the room and gave the team a starting point rather than a blank page.

---

## Open Questions

- [ ] Exact Products data needed for each UAT scenario — not yet fully mapped - **Owner:** Rama Moorthy - **By:** Not stated
- [ ] Turnaround expectations from Data Office — still undefined - **Owner:** Rama Moorthy - **By:** Not stated
- [ ] Whitelisting implementation ownership — not assigned - **Owner:** Unassigned - **By:** Not stated
- [ ] Launch go/no-go criteria and defect thresholds for soft launch — not discussed at all in this meeting - **Owner:** Adrian Ang (suggested) - **By:** Not stated
- [ ] Soft launch approval pathway (Mark, Xin Shyang, Gek Khiang, possibly PS) — mentioned as needing visibility but no approval process defined - **Owner:** Adrian Ang (suggested) - **By:** Not stated

---

## Blockers

1. **VAPT vendor availability**
   - **Blocked by:** NCS not available until mid-September
   - **Impact:** Compresses VAPT + remediation + rescan into a tight window before October MVP
   - **Resolution:** Rama Moorthy exploring earlier VAPT activities and alternate scoping; no resolution yet

2. **Products data commitment**
   - **Blocked by:** Products team has not committed to a data delivery timeline
   - **Impact:** UAT scenarios that depend on Products data can't be scheduled with confidence
   - **Resolution:** Team will proceed with functional/mock-data UAT in parallel and send Products a scoped ask (personas + data requirements) rather than waiting on full alignment

---

## Next Steps

**Immediate (this week):**
- Confirm consolidated test plan deadline status (today per DOs call vs. this meeting's open assignment)
- Send Products/DO requirements ask (personas + data scenarios)
- Rama to review NCS quotation and push on earlier VAPT scheduling options

**Short-term (next 2–3 weeks):**
- Finalize officer personas (Imelda)
- Complete QA coverage analysis against PRD/user stories
- Leadership risk review (Adrian) — UAT, Products, VAPT

**Follow-up meeting:**
- Not stated in source. Given the pace of risk here, recommend a dedicated VAPT/UAT risk check-in before end of next week rather than waiting for the next regular squad sync.

---

## My Overall Assessment

**Status:** 🟠 Amber

Not because engineering is behind, but because the critical path has moved from development to coordination: Products data readiness, UAT execution quality, VAPT vendor timing, and leadership visibility on risk. The team is no longer debating features, it's managing schedule risk, and the next 2–3 weeks will likely decide whether October MVP holds.

**If preparing a SteerCo headline from this:** "Development remains broadly on track, but UAT readiness, Products data dependency, and VAPT scheduling have emerged as the primary risks to MVP delivery. Mitigations are underway, but timeline confidence remains conditional on external dependency turnaround and successful UAT execution."

Note: per [[project_steerco-scope]], Michelle co-preps the SteerCo demo with the trio but doesn't own the SteerCo deck/North Star brief itself — this assessment is input for whoever does, not a draft of that deck.

---

## Context for Future Reference

This meeting sits at the end of a tight cluster of same-topic sessions this week: [DOs Call (2026-07-23)](2026-07-23-W30-dos-call.md) → [CC POCDEX Data Requirements (2026-07-23)](2026-07-23-W30-cc-pocdex-data-requirements.md) → this squad sync (2026-07-24). All three circle the same underlying issue — UAT can't fully de-risk until Products/POCDEX data commitments exist — approached from different angles (assignment call, architecture/ops risk, delivery-risk sync). Worth treating as one continuous thread rather than three separate items when briefing anyone who missed part of the week.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw transcript/notes</summary>

See command arguments for full source content (executive summary, what went well/didn't, decisions, risks, actions, and overall assessment as originally provided).

</details>
