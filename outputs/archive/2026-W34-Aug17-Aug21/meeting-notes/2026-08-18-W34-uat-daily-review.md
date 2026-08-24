# Meeting Notes: UAT Daily Review

**Date:** 2026-08-18

**Attendees:** Michelle YIP, Rama MOORTHY, Imelda MO, Adrian ANG, Christopher Woo (+ Xin Zhang referenced)

**Meeting Type:** UAT execution review / engineering sync

**Overall Health:** 🟡 Amber (per the source's own Green/Amber/Red framing)

---

## Summary

UAT execution is ahead of expectations — defect burn-down is healthy, Phase 2 is nearly done, and collaboration across Product/Engineering/UAT is strong. But the same discussion surfaced the real risk: low defect counts may reflect test limitations (drip-fed tickets, ~22 personas, scrambled data, no end-to-end validation) rather than genuine system quality. The team's own PM assessment names this "false confidence" as the highest risk from the session, ahead of any individual bug or blocker.

---

## Decisions Made

1. **Certain tickets stay in Ready for UAT rather than moving out of active tracking**
   - **Why:** Validation hadn't completed — Michelle specifically asked to keep one scenario active until opportunity-related checks finish.
   - **Who decided:** Michelle YIP.
   - **Impact:** Prevents premature sign-off on a ticket whose validation is still open.

2. **Future UAT tickets should be batched, not drip-fed**
   - **Why:** Direct response to tester feedback — stop-start, ticket-by-ticket delivery is causing fatigue and reducing validation consistency.
   - **Who decided:** Team, in response to UAT user feedback.
   - **Impact:** Should reduce the fatigue/productivity risk flagged below, but only once implemented — this is a forward commitment, not yet in effect.

3. **Provide a "happy path" account for coherent end-to-end exploration**
   - **Why:** Current testing is scenario-based, not experience-based — testers can't yet walk Home → Competencies → My Development → Courses → Course details as one journey.
   - **Who decided:** Team.
   - **Impact:** Directly addresses the end-to-end validation gap (Risk 2), but no date attached yet — see Action Items.

4. **Scrambled-data validation for grade-removal logic — no resolution, taken offline**
   - **Why:** Production data can't be used in UAT; scrambled data may not contain all realistic patterns, so the team couldn't confidently validate the cleaning logic in the room.
   - **Who decided:** No final decision — explicitly deferred.
   - **Impact:** This is Risk 4 below — a genuine open blocker, not yet resolved.

5. **PMs should act as communication bridges between engineering teams**
   - **Why:** Adrian ANG raised that information doesn't always flow directly between Pathfinder and PowerWorks teams, risking context loss and future conflicts.
   - **Who decided:** Adrian ANG (raised), team agreed.
   - **Impact:** This echoes a pattern already flagged today in the OTEP Squad Sync — multiple workstreams stalling on "check with Adrian" with no escalation path. Same structural gap, different angle: there it was about *chasing* Adrian, here it's about Adrian naming a broader team-to-team information flow problem. Worth treating as one thread, not two.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Follow up on Xin Zhang's additional request and update ticket | Imelda MO | No due date mentioned — schedule within 48 hours | Medium | 🔴 Not Started |
| Resolve scrambled-data validation approach for grade-removal logic | Rama MOORTHY & Imelda MO | No due date mentioned — this blocks release confidence, should be dated this week | High | 🔴 Not Started |
| Configure and batch future UAT tickets before notifying testers | Rama MOORTHY / Team | No due date mentioned | High | 🔴 Not Started |
| Explore providing a complete "happy path" account for end-to-end validation | Rama MOORTHY / Team | No due date mentioned | High | 🔴 Not Started |
| Continue Phase 2 ticket closure and remaining complex test cases | UAT Team | No due date mentioned | Medium | 🟡 In Progress |
| Confirm whether Phase 3 UAT is still required | Imelda MO | No due date mentioned | Medium | 🔴 Not Started |
| Progress SSO setup once URL dependencies are resolved | Pathfinder + PowerWorks teams | No due date mentioned | Medium | 🔴 Not Started |
| PMs to improve cross-team communication flow between engineering teams | Michelle YIP, Imelda MO, team leads | No due date mentioned | High | 🔴 Not Started |
| Review R1 scope and delivery feasibility | Product leadership team | No due date mentioned — flagged High severity in the risk assessment below, should be dated soon | High | 🔴 Not Started |
| Confirm timing of additional resourcing to cover Amber's departure and discovery deliverables | Adrian ANG / Jace | No due date mentioned — Amber leaves end September, this needs a date well before then | High | 🔴 Not Started |

**Notes:**
- No due dates were given for any of the 10 action items. The two most time-sensitive — scrambled-data validation (blocks release confidence) and planning around Amber's end-September departure — should be dated first.
- SSO progress item overlaps directly with today's separate CSC SIT/UAT Readiness meeting and OTEP Squad Sync — see Context for Future Reference below.

---

## Key Insights & Quotes

**The headline risk isn't a bug — it's what the low bug count might be hiding:**
The team's own PM assessment names this directly: fewer bugs than expected, smoother than expected, most tickets nearly done — while simultaneously acknowledging limited personas, limited end-to-end testing, and scrambled-data constraints. The two facts together raise the real possibility that low defect counts reflect test limitations, not system quality. This was the single risk the source explicitly ranked above all others, including the data-quality and capacity risks below.

**Testing is scenario-based, not experience-based:**
Testers validate individual test cases but haven't yet walked a full officer journey (Home → Competencies → My Development → Courses → navigation between features). A product can pass every isolated test case and still fail when a real user moves across features end-to-end — this is the gap the "happy path" account decision (above) is meant to close, but it doesn't exist yet.

**Environment constraints are compounding, not isolated:**
~22 personas/accounts total means reuse, repeated login/logout, and test cases competing for the same accounts — slowing execution. Separately, scrambled (not production) data means the grade-suffix-removal cleaning logic can't be confidently validated against real-world patterns. Two different constraints, same root cause: the UAT environment doesn't yet mirror production closely enough to fully trust what passes in it.

**Constructive feedback from testers, not just defect reports:**
Christopher Woo gave process feedback on the testing experience itself (leading to the batching decision above), rather than only logging bugs — worth noting as a positive signal about tester engagement, separate from the fatigue risk.

**If presenting to Mark/Gek Khiang (per the source's own framing):**

| Tier | Items |
|---|---|
| 🟢 Green | Defect closure rate healthy; UAT progressing faster than expected; strong team collaboration; most Phase 2 functionality close to validation |
| 🟡 Amber | Testing process causing UAT fatigue; coverage still scenario-based, not end-to-end; scrambled-data limits data-quality verification; SSO and other external dependencies remain open |
| 🔴 Red | Potential false confidence from low bug counts in a constrained test environment; September capacity risk (Amber's departure, discovery commitments, R1 planning, scope pressure); cross-team communication gaps could become a delivery risk if not actively managed |

**What NOT to escalate yet (per the source's own judgment call):** individual ticket delays, the 22-account limitation, daily UAT coordination friction, and ticket drip-feeding. These are real but working-team-level symptoms — the two genuinely executive-level risks are false confidence in release readiness, and the data-quality validation blind spot.

---

## Open Questions

- [ ] Is UAT's low defect count a genuine quality signal, or an artifact of limited personas/scrambled data/no end-to-end testing? - **Owner:** Michelle YIP (escalate) - **By:** Before any release-readiness call is made on defect counts alone
- [ ] What alternative method can validate the grade-suffix-removal cleaning logic without production data? - **Owner:** Rama MOORTHY & Imelda MO - **By:** Not yet scheduled, flagged as needing resolution this week given release-confidence impact
- [ ] Is Phase 3 UAT still required? - **Owner:** Imelda MO - **By:** Not stated
- [ ] Is R1's current timeline still feasible given Amber's departure, ongoing discovery, and the new PM not arriving until September? - **Owner:** Adrian ANG / Jace (resourcing is their call) - **By:** Not stated — this is a compounding-risk question, not a routine check-in

---

## Blockers

1. **Scrambled-data validation gap for grade-removal logic**
   - **Blocked by:** Production data unavailable in UAT; scrambled data may not represent realistic patterns
   - **Impact:** Data cleansing/transformation logic could work in UAT and still fail against real production patterns — directly affects role profile quality and competency recommendation accuracy
   - **Resolution:** Taken offline, no method agreed yet — owned by Rama MOORTHY & Imelda MO

2. **No end-to-end/"happy path" validation exists yet**
   - **Blocked by:** No persona currently has sufficient data to walk a full officer journey
   - **Impact:** Integration, navigation, and cross-feature issues may not surface until users interact with the MVP holistically, even if every individual scenario passes
   - **Resolution:** "Happy path" account decision made (above), not yet built

---

## Timeline Risks

- **TIMELINE RISK — capacity, not deliverable-specific:** Amber leaving by end September, discovery work still ongoing, R1 timeline feasibility explicitly questioned in the room, and the new PM not arriving until September all land in the same window. Additional resourcing is already planned to cover this, but timing and scope sit with Adrian ANG and Jace — not yet confirmed as of this meeting. No previous tracking of Amber's departure exists in `open-items.md`; this is new information from today.
- **TIMELINE RISK — SSO sequencing:** This meeting flags SSO progress as depending on URL setup, front-end readiness, and cross-team coordination, with "some uncertainty remaining on readiness and sequencing." This is the same SSO/SIT thread covered in more detail in today's separate [CSC SIT/UAT Readiness](2026-08-18-W34-csc-sit-uat-readiness.md) meeting — that meeting names Adrian LO's application-side changes as the specific blocker. Don't track these as two different SSO risks; they're the same dependency chain viewed from two rooms.

---

## Next Steps

**Immediate (This Week):**
- Date the scrambled-data validation resolution (Rama + Imelda) — this is the one blocking near-term release confidence
- Escalate the false-confidence risk explicitly if any release-readiness conversation leans on defect counts alone

**Short-term (Next 2 weeks):**
- Build and provision the "happy path" account so end-to-end validation can actually start
- Implement ticket batching for future UAT rounds, per the decision made today

**Follow-up Meeting:**
- Check in with Adrian ANG / Jace on timing for the incoming additional resourcing, so it's confirmed rather than assumed against Amber's end-September departure and the new PM's September start.

---

## Context for Future Reference

This meeting connects to two other syncs from the same day:
- **[OTEP Squad Sync](2026-08-18-W34-otep-squad-sync.md)** — flagged the identical "check with Adrian, no escalation path" pattern from a different angle (workstreams stalled waiting on Adrian ANG). Today's Decision 5 here (PMs as communication bridges) is Adrian's own framing of that same structural gap.
- **[CSC SIT/UAT Readiness](2026-08-18-W34-csc-sit-uat-readiness.md)** — covers the SSO/SIT dependency this meeting references only briefly. That meeting names Adrian LO's application-side changes as the specific blocker; this one just notes "uncertainty on readiness and sequencing." Same chain, more detail in the other file.
- **Amber's departure (end September)** is new information — not previously tracked in `open-items.md`. Worth adding as a new open item given the capacity-risk framing above, rather than letting it stay only in this meeting's notes.
- No existing PRD or strategy doc currently addresses UAT environment realism (production-vs-scrambled data) as a named risk — this may be worth a short standalone note if the validation-method discussion doesn't resolve quickly.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw meeting summary</summary>

**Executive Summary:** Better than expected from a UAT execution standpoint, but emerging risks around test quality, user fatigue, end-to-end validation, environment constraints, cross-team coordination, and delivery capacity are not yet fully addressed.

**What went well:** UAT defect burn-down progressing; strong Product/Engineering/UAT collaboration; clear progress toward completing Phase 2; constructive user feedback from Christopher Woo.

**What didn't go well:** UAT becoming "drip-fed" (stop-start, piecemeal, difficult to time-box, causing fatigue); end-to-end user journeys not yet validated (scenario-based, not experience-based); test environment limited to ~22 personas/accounts; data validation challenges from scrambled (non-production) data, specifically around role profile grade suffix removal logic.

**Risks explicitly discussed:** UAT fatigue (High); insufficient end-to-end validation (High); test persona constraints (Medium-High); validation gap from scrambled data (High); SSO dependency outstanding (Medium-High).

**Risks not fully addressed, PM assessment:** False confidence risk (highest) — low bug counts may reflect test limitations, not system quality; MVP readiness risk — validation is use-case-focused, not exploratory/journey-focused; delivery capacity risk post-MVP (High) — Amber leaving end September, ongoing discovery, R1 timeline feasibility questioned, new PM not arriving until September; cross-team communication risk (Medium-High) — Adrian ANG raised information not flowing directly between teams.

**Escalation framing (Green/Amber/Red) and "what I would not escalate yet" — see Key Insights above for the full breakdown, preserved as originally structured.**

</details>
