---
date: 2026-07-17
week: 2026-W29
meeting_type: stakeholder-review
topic: UAT Plan Sharing & Readiness Alignment
---

# Meeting Notes: UAT Plan Sharing & Readiness Alignment

**Date:** 2026-07-17

**Attendees:** Rama Moorthy, Michelle Yip, Imelda Mo, Adrian Ang, Jace Tan, Barry (BOs: Chris, Xian Sheng referenced but not confirmed attendees)

**Meeting Type:** Stakeholder review / UAT readiness alignment

**Duration:** Not specified

---

## Summary

Rama shared the draft UAT Plan Overview and walked through intent, readiness gates, and defect thresholds. The team surfaced real, unresolved tension underneath the plan: where QA ends and UAT begins isn't agreed, and ownership of who authors UAT test cases is still blurred across four competing models. Rama owns aligning this offline. This is the source meeting that directly produced the [UAT Operating Model](2026-07-17-W29-uat-operating-model.md) — but that document resolves the QA/UAT scope question on paper in a way this meeting shows was only deferred, not settled with the room.

---

## Decisions Made

1. **UAT test cases must be simplified, end-to-end, BO-executable scripts, not component-level or free-form exploration**
   - **Why:** BO bandwidth is scarce (only Chris and Xian Sheng named as primary executors) and component-level testing duplicates QA's job
   - **Who decided:** Rama Moorthy
   - **Impact:** Sets the format bar for every UAT scenario going forward; matches the 5-element structure later formalized in the Operating Model

2. **Critical and High severity defects must be 100% resolved before sign-off; Medium/Low subject to joint risk discussion**
   - **Why:** Prevents low-severity cosmetic issues from stalling MVP sign-off while still holding a hard line on severe defects
   - **Who decided:** Rama Moorthy
   - **Impact:** Matches the severity rule later written into the Operating Model

3. **UAT environment will be deployment-restricted (effectively frozen) during UAT, including external dependency coordination**
   - **Why:** Prevent a BO from re-testing a scenario only to find underlying data or code changed mid-cycle
   - **Who decided:** Rama Moorthy
   - **Impact:** Requires explicit freeze-window communication to external teams — flagged as still outstanding (see Action Items)

4. **PMs will work with QA and BOs to author UAT cases, with Rama aligning the exact approach offline**
   - **Why:** No single RACI emerged live in the room; four competing ownership models were on the table (PM writes AC → QA derives; reuse QA's existing Excel cases; PMs write new BO-friendly scripts; BOs shape scenarios early)
   - **Who decided:** Direction only, details TBD — Rama to close the loop
   - **Impact:** This is the one live decision that is genuinely unresolved, not just deferred-then-answered. The Operating Model document written later today (PM owns scenario intent, QA advises, Tech Leads supply data, BOs review pre-UAT) appears to be Rama's offline resolution of this exact open item — worth explicitly confirming with Rama that the Operating Model is the final answer to this meeting's open RACI question, since it wasn't visibly closed live.

5. **Central Jira UAT board is the single execution and tracking mechanism, with statuses Ready → In Execution → Failed/Passed**
   - **Why:** Single source of truth for UAT progress
   - **Who decided:** Rama Moorthy
   - **Impact:** All UAT test cases need to land in this board once authored

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Align PMs, QA, BOs on one agreed UAT case authoring approach | Rama | Not stated | 🔴 High | Not Started |
| Update UAT document based on meeting feedback | Rama | Not stated | 🟡 Medium | Not Started |
| Establish UAT communication channel (Slack, including externals) | Rama | Not stated | 🟡 Medium | Not Started |
| Confirm environment freeze expectations with external teams | Rama | Not stated | 🔴 High | Not Started |
| Coordinate daily defect triage during UAT | Rama | Ongoing, during UAT | 🟡 Medium | Not Started |
| Support Opportunity-related test data definition | Michelle | Not stated | 🔴 High | Not Started |
| Clarify data logic and agreements with external systems | Michelle | Not stated | 🟡 Medium | Not Started |
| Provide guidance to tech leads on realistic test data needs | Michelle | Not stated | 🔴 High | Not Started |
| Push for early briefing with external dependency owners, not just document sharing | Michelle | Not stated | 🟡 Medium | Not Started |
| Provide persona definitions / user profile criteria | Imelda | Not stated | 🔴 High | Not Started |
| Help frame Products-related test data requirements | Imelda | Not stated | 🟡 Medium | Not Started |
| Review UAT test cases early, flag gaps before execution | Chris, Xian Sheng | Not stated | 🟡 Medium | Not Started |
| Execute UAT based on provided scripts once ready | Chris, Xian Sheng | Not stated, tied to UAT start (11 Aug) | 🔴 High | Not Started |
| Explore AI-generated UAT cases from user-story ACs to reduce duplication | Michelle (raised by Adrian in chat) | Not stated | 🟡 Medium | 🟢 Complete — see [AC-to-Test-Case Coverage Audit](../analyses/2026-07-17-W29-ac-to-test-case-coverage-audit.md), produced same day |

**Notes:**
- No due dates were stated for any item in this meeting. Given UAT starts 11 Aug, recommend treating everything tagged 🔴 High as due within this week.
- Michelle's four action items here overlap heavily with the test data work already tracked in [uat-test-data-prep-list.md](../analyses/2026-07-17-W29-uat-test-data-prep-list.md) — this isn't new scope, it's confirmation that the existing prep list is the right artifact to execute against.

---

## Key Insights & Quotes

**On the QA vs UAT boundary (the meeting's central unresolved tension):**
Rama's framing was QA = detailed component/user-story testing, UAT = simplified end-to-end BO-friendly scripts. Adrian and Jace pushed back that end-to-end flows should already be tested before UAT reaches BOs — UAT shouldn't be where basic integration or flow failures get discovered for the first time. This was not resolved live, only deferred to offline alignment with Rama.

**Cross-check against the Operating Model produced today:** the [UAT Operating Model](2026-07-17-W29-uat-operating-model.md) states this boundary as settled fact: "If an issue could have been detected via story-level QA without external dependencies, it should not first surface in UAT." That's Rama's answer to Adrian and Jace's exact concern from this meeting — but it was written up as a resolved principle, not circulated back to Adrian/Jace/Barry for explicit confirmation that it satisfies their pushback. Worth flagging to Rama that the room that raised the objection hasn't seen the resolution yet.

**On test case ownership:**
Four different models were floated with no convergence: PM writes AC → QA derives; reuse QA's existing Excel-based cases; PMs write new BO-friendly scripts from scratch; BOs shape scenarios early. Adrian explicitly raised the duplication/fatigue risk this creates, "especially acute for Pathfinder, where ACs are fragmented across subtasks" — this is a direct, verbatim-adjacent concern worth carrying into any RACI documentation.

**On external data risk:**
Products integration relies on a read replica, not a frozen dataset — other teams can modify source data during UAT with no guaranteed exclusive UAT slice. This undermines test repeatability and defect triage confidence. This is a sharper, more specific version of the "reserved, non-mutated test profiles" requirement written into the Operating Model — worth checking whether the Operating Model's rule actually covers this replica-specific risk or just the persona-curation side of it.

**Meeting chat surfaced real substance, not side-noise:**
Imelda shared the UAT Plan Overview Draft in chat; Adrian explicitly asked Michelle in chat to explore AI-generated UAT cases from ACs (this request is what produced today's coverage audit); agreement surfaced in chat that consolidated UAT cases are needed for BO usability (this matches Adrian's separate direct ask captured in [Adrian's UAT Consolidation Ask](2026-07-17-W29-adrian-uat-consolidation-ask.md)).

---

## Open Questions

- [ ] Is the QA vs UAT boundary Rama wrote into today's Operating Model actually the resolution Adrian, Jace, and Barry will accept, or does it need to go back to them for explicit sign-off? — **Owner:** Rama (to close), Michelle (to confirm it happens) — **By:** before UAT Operating Model is treated as final
- [ ] Which of the four test-case-authorship models did Rama land on, and does it match what the Operating Model states (PM owns intent, QA advises, Tech Leads supply data, BOs review)? — **Owner:** Rama — **By:** this week
- [ ] Does the "reserved, non-mutated test profiles" rule in the Operating Model actually solve the Products read-replica risk (other teams modifying source data mid-UAT), or only the persona-curation problem? — **Owner:** Michelle + Rama — **By:** before UAT Phase 0
- [ ] What's the contingency if Products API isn't ready by 14 Aug as assumed? — **Owner:** Rama — **By:** before Phase 0 (11 Aug)

---

## Blockers

1. **Products integration test data isn't guaranteed stable during UAT**
   - **Blocked by:** Read-replica architecture with no exclusive UAT data slice; other teams can modify source data mid-cycle
   - **Impact:** Undermines test repeatability and defect triage confidence — a BO could see a scenario pass, then fail on retest with no code change
   - **Resolution:** Not yet solved; flagged as unmitigated risk, needs explicit follow-up separate from the persona-curation work already in progress

2. **BO testing bandwidth is a single point of failure**
   - **Blocked by:** Only Chris and Xian Sheng named as primary UAT executors across multiple teams' scope
   - **Impact:** Any ambiguity in test cases or environment instability compounds quickly with no backup capacity
   - **Resolution:** Not addressed in this meeting; worth raising whether additional BO capacity is available before Phase 0

---

## Next Steps

**Immediate (this week):**
- Rama closes the loop on test-case authorship RACI — confirm whether the Operating Model is that closure or a separate answer is still coming
- Michelle executes against the existing test data prep list for Opportunity-related data, tech lead guidance, and external dependency briefing
- Imelda provides persona definitions and Products-related test data framing

**Before UAT Phase 0 (11 Aug):**
- Resolve the Products read-replica data-stability risk explicitly, not just fold it into the general "reserved profiles" rule
- Confirm environment freeze expectations are actually communicated to external teams (not just decided internally)
- Confirm contingency plan if Products API slips past 14 Aug

---

## Context for Future Reference

**This meeting is the direct source for the [UAT Operating Model](2026-07-17-W29-uat-operating-model.md) produced later the same day.** Nearly every decision in the Operating Model traces back to something raised here: the 5-element test case structure matches decision #1 above, the severity rule matches decision #2, the RACI matches the unresolved authorship question from decision #4, and the "reserved, non-mutated profiles" rule is Rama's answer to the Products data-realism risk raised in Section 3.2 here.

**The one gap between the two documents:** this meeting shows the QA/UAT boundary and the authorship RACI were both explicitly *contested live* by Adrian and Jace, then deferred to "Rama aligns offline." The Operating Model presents both as settled principles. That's likely accurate — Rama did the offline alignment work — but there's no evidence in either document that Adrian, Jace, or Barry actually reviewed and accepted Rama's resolution. Worth closing that loop explicitly before treating the Operating Model as final, especially since Adrian is also the one pushing the separate UAT consolidation ask and demo governance questions today — he's shown a pattern of catching exactly this kind of gap.

**Also connects to:** [Adrian's UAT Consolidation Ask](2026-07-17-W29-adrian-uat-consolidation-ask.md) (the chat agreement on consolidated UAT cases is the same ask Adrian made directly and separately), and the [AC-to-Test-Case Coverage Audit](../analyses/2026-07-17-W29-ac-to-test-case-coverage-audit.md) (directly produced from Adrian's chat request in this meeting).

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

UAT Plan Sharing & Readiness Alignment

1. What Went Well
1.1 Clear articulation of UAT intent and guardrails — Rama established UAT purpose: validate MVP scope against business requirements, confirm end-to-end flows (not component-level), achieve business sign-off before production. Tied to defect thresholds (100% critical/high resolved).
1.2 Strong emphasis on readiness before UAT starts — surfaced prerequisites: SIT completion, all external integrations connected (CSE, Products, Jumpstart, login), environment stability and auth readiness, test accounts/persona data prepared, external teams notified of freeze window.
1.3 Healthy challenge from PMs and BOs (Adrian, Jace, Barry) — questioned whether UAT test cases duplicate QA work, whether end-to-end scenarios are tested too late, whether PM/QA/BO are aligned on test case authorship ownership.
1.4 Transparency that UAT plan is still a draft — Rama invited Confluence comments and follow-up alignment.
1.5 Meeting chat used productively — Imelda shared UAT Plan Overview Draft; Adrian asked Michelle to explore AI-generated UAT cases from ACs; agreement surfaced that consolidated UAT cases are needed for BO usability.

2. What Did Not Go Well / Frictions Observed
2.1 QA vs UAT boundaries not aligned — Rama's framing (QA = component/story testing, UAT = simplified end-to-end BO scripts) met pushback from Adrian/Jace (end-to-end flows should already be tested before UAT; UAT shouldn't discover basic integration/flow failures). Not resolved, deferred offline.
2.2 Ownership of UAT test case creation blurred — competing models: PM writes AC → QA derives; reuse QA's Excel cases; PMs write new BO-friendly scripts; BOs want early involvement. No crisp RACI agreed.
2.3 Risk of duplication and fatigue for PMs/QA — re-creating UAT cases from scratch risks duplicate effort, especially for Pathfinder where ACs are fragmented across subtasks. Acknowledged, not solved.

3. Risks Not Fully Addressed
3.1 External dependency readiness fragile — Products integration relies on read replica not frozen dataset; other teams may modify source data during UAT; no guaranteed exclusive UAT data slice.
3.2 Data persona complexity (Products vs Opportunities) — Products personas hard to construct (secondment, multi-hatting, grades); can't freely create users in Products; relying on curating "realistic enough" existing profiles.
3.3 BO testing bandwidth extremely constrained — only Chris and Xian Sheng named as primary UAT executors; tight timeline, heavy cognitive load across teams.
3.4 UAT timeline sensitivity to upstream slips — assumes Products API ready by 14 Aug and all integrations stable before execution; no deep contingency discussion.

4. Decisions Made
1. UAT test cases simplified, end-to-end, BO-executable scripts — not component-level, not free-form.
2. Critical/High severity defects 100% resolved before sign-off; Medium/Low risk-discussed.
3. UAT environment deployment-restricted (frozen) during UAT, including external dependency coordination.
4. PMs work with QA and BOs to author UAT cases, Rama aligns exact approach offline.
5. Central Jira UAT board is single execution/tracking mechanism: Ready → In Execution → Failed/Passed.

5. Actions & Owners
Rama: align PM/QA/BO on UAT case authoring approach; update UAT doc from feedback; establish UAT Slack channel including externals; confirm environment freeze expectations with external teams; coordinate daily defect triage during UAT.
Michelle: support Opportunity-related test data definition; clarify data logic/agreements with external systems; guide tech leads on realistic test data needs; highlight need for early briefing with external dependency owners (not just doc sharing).
Imelda: provide persona definitions/user profile criteria; help frame Products-related test data requirements.
BOs (Chris, Xian Sheng): review UAT test cases early, flag gaps; execute UAT based on provided scripts.
Cross-cutting: explore AI-generated UAT cases from ACs (Adrian to Michelle, in chat).

6. Bottom Line
Necessary and healthy alignment meeting, surfaced a structural gap: team still converging on where QA ends and UAT begins in a hybrid product/vendor/government context. Plan relies heavily on simplification and discipline given low BO bandwidth. Largest unmitigated risks: data realism, external system volatility, late discovery of end-to-end gaps.

</details>
