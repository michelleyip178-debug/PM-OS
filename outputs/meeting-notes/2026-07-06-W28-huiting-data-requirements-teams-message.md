# Meeting Notes: Huiting LIAN — Compass Data Requirements (Teams thread)

**Date:** 2026-07-06

**Attendees (thread participants):** Huiting LIAN, Xian Zhang GUO, Rama MOORTHY (referenced)

**Meeting Type:** Stakeholder review (async, Teams message thread)

**Format:** Written thread, not a live meeting

---

## Summary

A "Job ID vs Position ID" implementation thread turned into a broader ask from Huiting LIAN: define Compass's data requirements properly, before going further on source systems or processing logic. She's proposing a 3-level framework (data requirements → source-system behavior → business processing rules) and wants a consolidated question list so she can route to the right HRPS stakeholders, given high turnover on those teams.

This isn't a new problem. It's the same root issue as the competency SSOT thread (#18/#41) and the POCDEX data-flow question (#31), now being raised from the data-architecture side rather than the delivery side.

---

## Decisions Made

No decisions were made in this thread — it's a scoping request, not a resolution. The one clarification offered:

1. **Endorsed competencies remain undecided**
   - **Why:** Still under internal discussion; Compass hasn't decided whether to bring endorsed competencies into the product
   - **Who said it:** Xian Zhang GUO
   - **Impact:** A recommendation is expected for approval by Q4 2026 — this is a placeholder, not a scoped requirement, so don't build against it yet

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Share Rama's draft response to Huiting's first question set | Xian Zhang GUO | Week of 13 Jul (per "share next week") | High | 🟡 In Progress — draft already exists |
| Define Compass data domains, exact elements, and business purpose for each (Level 1) | Rama / Imelda | No date given — flag below | High | 🔴 Not Started |
| Define historical / current / future-dated data requirements | Rama / Imelda | No date given — flag below | High | 🔴 Not Started |
| Visualise end-to-end data flow — sources, POCDEX vs. direct, interim systems | Rama / Imelda | No date given — flag below | High | 🔴 Not Started |
| Consolidate all source-system behavioural questions (Level 2) into one list for routing | Rama / Imelda | No date given — flag below | Medium | 🔴 Not Started |
| Clarify secondment indicator requirement and expected vs. self-assessed vs. endorsed competency distinction | Rama / Imelda | No date given | Medium | 🔴 Not Started |

**No due date mentioned for the core deliverables** (data domain list, data flow diagram, consolidated question list) — schedule within 48 hours per standard practice, but given the scope (this is effectively a mini data architecture exercise), recommend proposing a realistic date back to Huiting rather than guessing one.

---

## Key Insights & Quotes

**Strategic Considerations:**
- Huiting is asking Compass to justify data requirements at a level of rigor the team hasn't yet produced in writing — this reads as a data governance/architecture gate, not a one-off question.
- She explicitly flagged **future-dated data as high complexity** ("effective dates and future changes must be managed carefully") — this is a real scoping risk if Compass's MVP assumed only current-state data.
- She anticipates **not everything will flow through POCDEX** — some data may need direct-from-source interim paths to meet timelines. This directly overlaps with the open POCDEX scoping questions in #31 (Core team hasn't yet answered what data POCDEX will provide).
- She flagged **HRPS team turnover** as a reason to consolidate questions before routing — implies previous ad hoc questions may have gotten lost or gone to people who've since left.

**Technical/Data Considerations:**
- The 3-level framework (data requirements → source-system behavior → business logic) is a useful structure to adopt for any future data conversation with her team, not just this one.
- Level 2 example questions (Position ID → multiple Job IDs; are competencies tagged to Job ID or Position ID) are exactly the kind of source-system ambiguity that's been informally assumed rather than confirmed in Compass's data model so far.

---

## Open Questions

- [ ] What data domains does Compass actually need, and why (per data element)? - **Owner:** Rama / Imelda - **By:** TBD, propose date to Huiting
- [ ] Does Compass need historical data, or is current-state sufficient? Is any future-dated data required? - **Owner:** Rama / Imelda - **By:** TBD
- [ ] Can Compass produce an end-to-end data flow diagram showing POCDEX vs. direct-from-source paths? - **Owner:** Rama / Imelda - **By:** TBD
- [ ] Why does Compass need secondment indicators specifically? - **Owner:** Rama / Imelda - **By:** TBD
- [ ] What's the exact distinction Compass needs between expected, self-assessed, and endorsed competencies? - **Owner:** Rama / Imelda - **By:** TBD (endorsed competencies specifically gated on Q4 2026 recommendation per Xian Zhang)
- [ ] What officer profile fields are actually required (organisation, title, agency, etc.)? - **Owner:** Rama / Imelda - **By:** TBD

---

## Blockers

1. **No consolidated data requirements document exists yet**
   - **Blocked by:** This is net-new work — Compass has been operating on informal/assumed data requirements (see #18, #41 competency sourcing discussions). Rama and Imelda own producing this.
   - **Impact:** Blocks deeper HRPS/Cumulus/POCDEX source-system conversations and any business-logic decisions until Level 1 is done
   - **Resolution:** Rama/Imelda need a dedicated working session to produce the data domain list — recommend treating this as a mini-deliverable, not a quick reply. Michelle's role is to make sure it gets scheduled and stays connected to #18/#41, not to author it.

2. **POCDEX data-flow question overlaps unresolved item #31**
   - **Blocked by:** Core team (Pei Ern/Kingsley) still hasn't answered Pow Hwee's 17 Jun questions about what data POCDEX will provide — that answer directly feeds Huiting's "does everything flow through POCDEX" question
   - **Impact:** Can't fully answer Huiting's Level 3 (data flow) question without #31 resolved first
   - **Resolution:** Worth explicitly linking these two threads so the same question isn't chased twice by two different people

---

## Next Steps

**Immediate (This Week):**
- Review Rama's existing draft response before Xian Zhang shares it with Huiting next week — make sure it doesn't contradict or duplicate open item #18/#41 competency sourcing decisions
- Confirm with Rama and Imelda that they own the Level 1 deliverables (data domain list, data flow diagram) and align on a realistic date to propose back to Huiting — this is their scoping work, not Michelle's to produce

**Short-term (Next 2 Weeks):**
- Rama/Imelda to consolidate Level 2 (source-system behavior) questions into one list, referencing the existing #31 POCDEX questions so they're not duplicated
- Decide whether this warrants a dedicated working session with Huiting's team, given the "high HRPS turnover" comment suggests she wants this handled deliberately, not via more ad hoc threads

**Follow-up:**
- **Trigger:** Once Xian Zhang shares Rama's draft response (week of 13 Jul)
- **Purpose:** Confirm whether Rama's draft already covers some of Huiting's Level 1 questions, or whether a fresh pass is needed
- **Attendees:** Michelle, Xian Zhang, Rama (and Huiting if a live session gets scheduled)

---

## Context for Future Reference

This is the same underlying issue as **open items #18/#41** (competency SSOT — sourcing and governance) and **#31** (POCDEX data flow — Core team hasn't confirmed what data POCDEX provides). Huiting's ask effectively formalizes what's been an informal, ticket-by-ticket set of assumptions into a proper data requirements exercise. Worth treating this as the trigger to finally consolidate those three threads into one artifact, rather than answering piecemeal again.

**New stakeholder note:** Huiting LIAN is not yet in `context-library/stakeholder-profiles.md`. Given she's now driving a structured data-governance ask with real gating power over future data flow, worth adding a profile — she reviewed the Compass OKR deck unprompted and is thinking in frameworks (the 3-level model), which suggests a systems-thinking, rigor-first communication style.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original Teams message summary</summary>

Executive Summary

The conversation shifted from "Job ID vs Position ID" implementation discussions to a broader question: What data does Compass actually need, for what purpose, over what time horizon, and from which systems?

Huiting LIAN was essentially asking the Compass team to articulate its detailed data requirements before deeper discussions on source systems, processing logic, and implementation approach could continue.

What Huiting Asked the Team

After reviewing the Compass OKR deck, Huiting LIAN said she now had a better understanding of the overall goals and requested more clarity on three areas:

1. Data domains required by Compass — what data domains, exact elements, business purpose per element. Examples: expected vs self-assessed vs endorsed competencies; why secondment indicators are needed; what officer profile info is required (org, title, agency).

2. Time coverage of data — historical, current-state, future-dated. Future data flagged as high complexity (effective dates, future changes).

3. Future data flows — where data comes from, whether all data must flow through POCDEX, whether interim source systems are needed to meet timelines.

Proposed Discussion Framework: Level 1 (Compass data requirements) → Level 2 (source-system behavior in HRPS/Cumulus/POCDEX) → Level 3 (business processing logic). Level 2 examples: Position ID → multiple Job IDs; competencies tagged to Job ID or Position ID.

She also asked for consolidated questions for efficient routing, given high HRPS team turnover.

Follow-up from Xian: Rama had already drafted a response to Huiting's first questions; will share next week. Endorsed competencies still under internal discussion — recommendation expected by Q4 2026.

</details>
