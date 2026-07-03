# Meeting Notes: CoachPal / Max Integration Discussion

**Date:** 2026-07-01

**Attendees:** Michelle (CareerCompass), Jasmine Richard (CoachPal/Max team), CoachPal team members (unnamed in transcript)

**Meeting Type:** Stakeholder review / discovery session

**Duration:** ~1 hour

---

## Summary

This was the 29 Jun / 30 Jun follow-up planned in last week's Slack thread. No use case, business outcome, or integration strategy for embedding CoachPal in CareerCompass currently exists — both teams were working off second-hand requests from leadership and neither could name the original intent. Michelle's team reframed the conversation from "can we integrate CoachPal" to "what officer problem are we solving, and can CoachPal solve it." No MVP commitment was made; the meeting closed on a need for further discovery and clarification from Mark.

---

## Decisions Made

1. **Use case must be defined before any integration decision**
   - **Why:** Neither team could articulate the original request's origin, rationale, or success criteria
   - **Who decided:** Both teams
   - **Impact:** Blocks any scoping or MVP inclusion until resolved

2. **CoachPal team will go back to Mark to clarify original intent**
   - **Why:** Multiple possible sources were named (Jeanette, Adrian, Mark, broader WD discussions) but none confirmed
   - **Who decided:** Jasmine Richard / CoachPal team
   - **Impact:** Critical path dependency — nothing else proceeds until this is answered

3. **No MVP commitment made**
   - **Why:** CoachPal's current product maturity (FAQ-oriented, no competency-gap or development-planning capability) doesn't yet demonstrate fit with CareerCompass's MVP scope (competencies, development gaps, opportunities, role exploration)
   - **Who decided:** Both teams, implicitly, by declining to commit
   - **Impact:** CoachPal stays out of MVP planning for now — treat as future-state exploration, not a roadmap item

4. **CareerCompass will share its CoachPal usage/conversation analysis**
   - **Why:** Grounds the next conversation in evidence rather than assumption
   - **Who decided:** Michelle's team
   - **Impact:** Becomes the input for the next round of discussion once Mark's intent is clarified

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Discuss with Mark to clarify original intent behind the integration request | @Jasmine Richard / CoachPal team | Not specified — this is the critical blocker, chase soon | 🔴 High | 🔴 Not Started |
| Share CareerCompass's synthesis of CoachPal usage and conversation analysis | @Michelle | Not specified | 🔴 High | 🔴 Not Started |
| Consider possible use cases for embedding CoachPal in CareerCompass (competency/development-gap journeys) | @CoachPal team | Not specified | 🟡 Medium | 🔴 Not Started |
| Continue discovery on where/how conversational support fits CareerCompass's MVP | @Michelle / CareerCompass team | Not specified | 🟡 Medium | 🔴 Not Started |
| Reconnect after Mark's intent is clarified and both analyses are shared | @Both teams | Not specified | 🔴 High | 🔴 Not Started |

**Notes:**
- No due dates were set for any item. Given the "who requested this and why" question is unresolved, recommend chasing the Mark clarification within the week so it doesn't stall silently — this was flagged as a risk in Adrian's 23 Jun thread too (see Context below).

---

## Key Insights & Quotes

**What went well:**
- Team challenged the framing before committing scope: "If an officer is viewing competencies, career gaps and opportunities, what would they expect the chatbot to help them with?" — outcome-first rather than feature-first.
- Discussion was grounded in real usage data: officers ask CoachPal about competencies, career gaps, development needs, career progression — but a significant share drop off after very few interactions.
- Jasmine Richard was transparent about CoachPal's maturity: still new, knowledge base is FAQ-oriented and evolving, awareness is low, long-term direction still forming.
- CareerCompass MVP discipline held — the team tested CoachPal against current MVP scope rather than expanding scope to accommodate it.

**What didn't go well:**
- Nobody could confirm who requested the integration, why now, what problem it solves, or what success looks like — multiple names surfaced (Jeanette, Adrian, Mark, broader WD discussions) with no resolution.
- The two teams arrived with different mental models: CoachPal team expected to discuss multi-chatbot orchestration/platform capability; CareerCompass team expected to discuss embedding CoachPal as a user-facing feature. Several minutes went to re-aligning on what meeting this was.
- No clear use case emerged after an hour: why would an officer launch CoachPal from CareerCompass, what should it answer, which journeys improve, which metrics move — all still open.
- Product readiness looks low: CoachPal currently functions as FAQ support / reflective questions / pre-coaching assistance, not a development-planning assistant. The overlap with CareerCompass's competency/gap/opportunity focus is unproven.

---

## Risks

1. **Solution-first thinking from leadership**
   - **Description:** The ask is framed as "can we put CoachPal into CareerCompass" rather than "what officer problem are we solving" — classic precursor to MVP bloat.
   - **Impact:** Scope could get pulled in before a business case exists.
   - **Resolution:** Hold the line until Mark's clarification defines the actual problem.

2. **Expectation mismatch for users**
   - **Description:** An officer viewing competency gaps and career recommendations will expect the chatbot to discuss those topics — CoachPal's current knowledge base may not support that.
   - **Impact:** Poor UX, low trust, higher drop-off if shipped as-is.
   - **Resolution:** Don't integrate until knowledge base coverage is validated against expected officer questions.

3. **Knowledge base mismatch**
   - **Description:** Embedding CoachPal would require expanding its knowledge base into competency frameworks, gap analysis, role progression, development pathways, opportunity matching — with no owner identified for that content.
   - **Impact:** Open-ended content maintenance burden with no clear owner.
   - **Resolution:** Surface content ownership question explicitly before any commitment.

4. **Adoption problem mistaken for placement problem**
   - **Description:** Low awareness, low usage, and early disengagement are adoption issues. Embedding CoachPal elsewhere doesn't necessarily fix them.
   - **Impact:** Integration could ship without moving the metrics it's meant to improve.
   - **Resolution:** Don't treat "put it in CareerCompass" as the fix until the adoption root cause is understood.

5. **MVP scope creep**
   - **Description:** Current MVP is tightly scoped (competency insights, opportunities, development gaps). Adding CoachPal brings conversational AI, coaching workflows, knowledge base expansion, and governance requirements — unvalidated.
   - **Impact:** Timeline/resourcing risk to the existing MVP commitments.
   - **Resolution:** Keep CoachPal explicitly out of MVP until the use case is proven.

**Confidence:** Risks — High (multiple participants independently raised the same concerns). Decisions — Low-Medium (many discussions, few concrete commitments).

---

## Open Questions

- [ ] What was Mark's original intent behind the integration request? - **Owner:** @Jasmine Richard - **By:** Not specified, treat as urgent
- [ ] Is CoachPal being proposed because it helps CareerCompass's outcomes, or because it needs another channel? - **Owner:** @Michelle + Jasmine, to resolve jointly once Mark's intent is known - **By:** Not specified
- [ ] What does "integration" actually mean — entry point only or deeper embedding? *(carried over unresolved from the 23 Jun Slack thread)* - **Owner:** @Michelle - **By:** Not specified
- [ ] Who owns CoachPal post-integration, including content maintenance? *(also carried over, still unanswered)* - **Owner:** @Jasmine Richard / CoachPal team - **By:** Not specified
- [ ] Does this land on the roadmap or the parking lot? - **Owner:** @Michelle, raise with Adrian - **By:** Not specified

---

## Blockers

1. **No confirmed originating request or business case**
   - **Blocked by:** Unclear source of the ask (Mark, Jeanette, Adrian, or broader WD discussions all named, none confirmed)
   - **Impact:** Nothing can be scoped or committed until this resolves
   - **Resolution:** Jasmine to clarify with Mark directly

---

## Next Steps

**Immediate (This Week):**
- Michelle shares CareerCompass's CoachPal usage/conversation synthesis
- Jasmine follows up with Mark on original intent

**Short-term (Next 2 weeks):**
- CoachPal team considers possible use cases tied to competency/development-gap journeys
- Michelle continues discovery on where conversational support fits CareerCompass's MVP
- Reconnect once Mark's intent and both analyses are in hand

**Follow-up Meeting:**
- **Date:** Not scheduled — contingent on Mark clarification
- **Purpose:** Revisit use case and integration decision with actual business rationale
- **Attendees:** Michelle, Jasmine Richard, likely Adrian

---

## Context for Future Reference

This session was the planned 29/30 Jun follow-up flagged in the 23 Jun Slack thread ([outputs/archive/2026-W26-Jun22-Jun26/meeting-notes/2026-06-23-W26-slack-coachpal-max-cc-integration.md](../archive/2026-W26-Jun22-Jun26/meeting-notes/2026-06-23-W26-slack-coachpal-max-cc-integration.md)). Several open questions from that thread carried forward unresolved: what "integration" means, who owns CoachPal post-integration, and whether this is MVP-adjacent or parking-lot scope. The scope-creep risk Adrian flagged in that thread ("Mark's commitment creates implicit pressure to deliver something without a clear brief") played out almost exactly as predicted — the meeting confirmed nobody has a clear brief yet.

Victor's (GovTech) point from the same thread — that CoachPal could improve if fed CareerCompass's personalised officer data — wasn't confirmed as raised in this session's notes. Worth checking if that reframing (CC as CoachPal's data layer, not just a placement surface) came up, since it changes the nature of the ask.

**Distinct from Max:** This session covered CoachPal only. The separate Max entry point commitment from Mark (not negotiable, per the 23 Jun thread) is a different workstream — confirm it wasn't folded into this discussion by mistake, since the two teams reportedly showed up with different mental models of what was being discussed.

**Recommendation for SteerCo/leadership framing:** Classify CoachPal as a future-state exploration, not an MVP requirement, until a hypothesis for officer-outcome improvement is articulated and evidenced.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw meeting debrief</summary>

[Full debrief as provided by Michelle, covering Executive Summary, What Went Well, What Didn't Go Well, Risks, Decisions Made, Action Items, and Product Assessment — condensed above]

</details>
