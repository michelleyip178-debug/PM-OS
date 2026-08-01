# Meeting Notes: PM x Eng Sync on UAT Process

**Date:** 2026-07-30

**Attendees:** Michelle Yip, Pow Hwee Tan, Rama Moorthy, Engineering team (per source: "Product team", "Engineering")

**Meeting Type:** Engineering sync — UAT process alignment

**Source:** PM's own post-meeting assessment (executive summary + themed analysis), not a raw transcript

---

## Summary

The team aligned on UAT process mechanics — a two-batch strategy, Jira as the execution tool, linked issues for defects, and three severity levels (High/Medium/Low). But process alignment isn't delivery confidence: the meeting surfaced and never closed the question Michelle raised — whether internal UAT running on seeded/fixture data actually represents what Products-fed data will look like. That gap, plus a newly discussed 7 Aug data-arrival date that leaves almost no buffer before the already-committed 11 Aug UAT start (open-items #39), is the most consequential outcome of this meeting.

---

## Decisions Made

1. **Two-batch UAT strategy**
   - **What:** Batch 1 = Keycloak login + selected features, reduced Products dependency (seeded/fixture data). Batch 2 = end-to-end validation with Products-fed officer profiles, real Job ID/Function/Profile mappings.
   - **Why:** Lets internal testing start without waiting on Products data.
   - **Who decided:** Team consensus, though Pow Hwee flagged this could read as "Products isn't ready" to stakeholders.
   - **Impact:** This is a strategy that was never confirmed as intentional vs. contingency — see Open Questions.

2. **Product team gates UAT readiness via status flow**
   - **What:** To Do → Ready for UAT → In Execution → Failed/Blocked → Passed. Items only move to "Ready for UAT" once accounts, profiles, and dependencies exist.
   - **Who decided:** Team consensus (Rama to own board design).

3. **Business users execute through Jira, not Confluence**
   - **What:** Business users follow ticket instructions directly in Jira during execution.
   - **Why:** Keeps execution and documentation in one system business users actually touch.

4. **Defects managed through linked issues, not inline comments**
   - **What:** Business user comments + screenshots in the UAT ticket → Product/engineering creates a linked defect item → technical discussion happens only in the linked issue.
   - **Why:** Prevents UAT tickets from becoming cluttered with technical back-and-forth.
   - **Impact:** Good process hygiene — no concerns raised.

5. **Three severity levels (High/Medium/Low), not four**
   - **What:** Proposal started as Critical/High/Medium/Low, collapsed to three.
   - **Why:** Michelle challenged whether business users could consistently distinguish Critical from High — group agreed they couldn't, so cut to three.
   - **Impact:** This is the same High/Medium/Low framing already discussed earlier today — the definitions still need to be written (assigned to Rama as an action item) and can reuse the working definitions from that discussion (blocks-core-functionality vs. degrades-with-workaround vs. cosmetic-no-impact).

---

## Key Insights

**The core unresolved question (Michelle's, unanswered by the team):**
"If we seed our own data for internal UAT, how do we know it reflects what will actually arrive from Products?" Engineering's answer (fixtures for internal UAT, Products-fed data for actual UAT, extra columns to distinguish account types) describes the *mechanism* but not who validates that the fixture data is representative. That validation owner question was never answered.

**Strategic ambiguity Pow Hwee surfaced:** The team never settled whether seeded-data-first is the deliberate strategy or a contingency being adopted because Products data isn't ready yet. Pow Hwee's concern: Business owners and Gek Khiang may read the workaround as evidence Products isn't ready, and there's no agreed communications line for that.

**Timeline mechanics:** If Products data only arrives by 7 Aug — a date that surfaced during this meeting, not previously tracked — internal UAT compresses hard against the already-committed 11 Aug UAT start (open-items #39). Pow Hwee openly acknowledged a testing crunch and possible weekend work, but no mitigation plan was discussed for failed internal UAT, retest cycles, or business-owner availability during a compressed window.

**Numbers still unstable:** Profile/account counts were discussed as both 14-15 and 19-20 without reconciliation — this is a small thing individually but compounds with the other unresolved items (batch scope, Products' actual ask) into a meeting that discussed a lot of tactics before agreeing on fundamentals.

---

## Open Questions

- [ ] Is seeded-data-first UAT the deliberate strategy or contingency planning? This changes how "success" gets interpreted later. - **Owner:** Michelle / Pow Hwee - **By:** Before Batch 1 begins
- [ ] Who validates that fixture/seeded data actually represents real Products-fed data? - **Owner:** Unassigned — needs an owner - **By:** Before Batch 1 results are treated as meaningful
- [ ] What is the actual, reconciled profile/account number — 14-15, 19-20, or something else? - **Owner:** Rama Moorthy (per action item: reconcile Batch 1/2 accounts) - **By:** Not stated
- [ ] What specifically is Products team being asked to prepare? - **Owner:** Adrian (per action item: respond to Johnny's request) - **By:** Urgent, per notes
- [ ] What are the entry/exit criteria for a "successful Batch 1"? - **Owner:** Unassigned - **By:** Before Batch 1 starts — without this, go/no-go becomes subjective
- [ ] What's the communications approach if stakeholders read the workaround as "Products isn't ready"? - **Owner:** Unassigned (Pow Hwee raised, no owner named) - **By:** Not stated

---

## Blockers

1. **No validated link between fixture data and real Products data**
   - **Blocked by:** No one has been assigned to own this validation
   - **Impact:** Internal UAT (Batch 1) could pass while carrying false confidence — real defects may only surface once Products-fed data arrives in Batch 2, later and more expensively
   - **Resolution:** Needs an explicit owner and a validation method before Batch 1 results are used to inform go/no-go decisions

2. **Products data timeline (7 Aug) leaves minimal buffer before 11 Aug UAT start**
   - **Blocked by:** Products/Johnny Lim's delivery timeline, tracked separately in open-items #31 (POCDEX ETL/infra, no due date as of last update)
   - **Impact:** If 7 Aug slips at all, internal UAT compresses further, business UAT may start immediately after with no gap, and weekend work becomes likely
   - **Resolution:** Confirm Products' actual delivery date is firm (action item assigned to Products team/Johnny), and build a contingency plan for what happens if it slips

---

## Timeline Risks

- **TIMELINE RISK:** This meeting introduced a 7 Aug date for Products data arrival — new information not previously tracked in `00-hub/open-items.md` #39, which commits to UAT starting 11 Aug (staggered: Profile + Opportunities from 11 Aug). A 7→11 Aug gap is only 4 days for internal UAT to run, absorb results, and hand off to business UAT — and that's the *best* case, assuming 7 Aug holds. Given open-item #31 shows Products/Johnny's ETL and infra work still has no due date as of its last update, treat 7 Aug as unconfirmed until Products team's action item ("Confirm Products readiness and expected delivery") closes.
- **TIMELINE RISK:** No mitigation plan exists for failed internal UAT or retest cycles, but the schedule is already compressed. If Batch 1 surfaces defects requiring rework, there's currently no slack built in before Batch 2 / business UAT would need to start.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Consolidate Batch 1 test cases | Michelle Yip / team | Not stated | High | 🔴 Not Started |
| Populate required profile/account list | Adrian / Compass team | Not stated — needed for Products prep | 🔴 High | 🔴 Not Started |
| Respond to Johnny's request on required columns/profiles | Adrian | Not stated — flagged urgent | 🔴 High (urgent) | 🔴 Not Started |
| Review and reconcile Batch 1 and Batch 2 accounts | Rama Moorthy / team | Not stated | Medium | 🔴 Not Started |
| Create UAT severity definitions (High/Medium/Low) | Rama Moorthy | Not stated | Medium | 🔴 Not Started |
| Update UAT board design and workflow (Ready for UAT / Execution / Failed / Passed) | Rama Moorthy | Not stated | Medium | 🔴 Not Started |
| Engineering to support internal fixture-based UAT accounts | Engineering team | Not stated | High | 🔴 Not Started |
| Confirm Products readiness and expected delivery | Products team / Johnny | Target remains before 7 Aug | 🔴 High | 🔴 Not Started |

**Notes:**
- None of these items have a stated due date beyond "urgent" or "target 7 Aug" — worth attaching real dates given how compressed the downstream timeline already is.
- Two items (respond to Johnny, confirm Products readiness) are both time-critical and currently undated — these should be the first to get firm dates.

---

## Next Steps

**Immediate (This Week):**
- Get a firm answer on whether 7 Aug is a real date or a hope, given Products/Johnny's ETL work has no due date per open-items #31
- Name an owner for validating fixture data against real Products data — this is the single biggest open risk from the meeting
- Push Adrian's two urgent action items (Johnny's request, profile/account list) to a specific date

**Short-term (Next 2 weeks):**
- Define entry/exit criteria for Batch 1 success before it starts, not after
- Settle the seeded-data-first strategy-vs-contingency question, and align messaging with Pow Hwee before it reaches Gek Khiang or business owners informally

**Follow-up Meeting:**
- Recommend a short follow-up specifically on the data-fidelity validation question and the 7 Aug date confirmation — both are too consequential to leave to the next regular sync

---

## Context for Future Reference

This meeting achieved process alignment (tooling, workflow, severity levels) but explicitly not delivery confidence, per the source's own assessment. The most important thread — whether internal UAT's fixture data can be trusted as a proxy for real Products data — connects directly to the long-standing POCDEX data-currency question already tracked in open-items #56 (whether POCDEX delivers near-real-time or daily-batched data) and #31 (Products/Johnny's ETL timeline). These aren't separate risks; they're the same underlying uncertainty about Products data surfacing in a new context (UAT readiness) rather than being resolved.

---

## What This Means for Michelle — UAT Ticket Structure

**Core principle:** As the Product/BA representative, build tickets around business test scenarios, not technical stories. Michelle's own instinct during the meeting — organizing by Pathfinder / Listing & Discovery / feature groupings / epic coverage rather than exposing users to raw Jira IDs — is the right mental model. This directly operationalizes the data-fidelity risk above: persona-based scenarios are the mechanism for actually testing whether fixture data behaves like real Products data, which nothing else discussed in the meeting addressed.

**Recommended 3-level ticket structure:**

1. **Feature Grouping (Label)** — e.g. Pathfinder (Listing & Discovery, Opportunity Details, Saved Opportunities) or Profile (Profile Page, Career Interests, Development Preferences). Matches how Michelle already described coverage tracking in the meeting.

2. **Business Scenario (one ticket = one outcome)** — A ticket should validate "can a user achieve a business outcome," not "does field X display." Good: *"UAT-PF-001: View opportunities relevant to my job family."* Bad: *"UAT-PF-001: Validate API returns opportunity list"* (that's an engineering test, not a UAT ticket).

3. **Ticket content** — Summary, Epic link, Feature Label, Test User (profile ID — Rama specifically wants account/profile mapping per scenario), Preconditions, Steps, Expected Results. This matches the Confluence format Rama referenced (Jira link, test account, test steps, test data, expected result).

**What actually matters most:** not writing more detailed steps, but ensuring each ticket validates a *different profile combination*. The team is likely defaulting to feature-centric tickets ("Test Profile Page," "Test Pathfinder") — these won't expose the risk that matters. Scenario-driven tickets will:

- Officer with a complete profile sees relevant opportunities
- Officer with missing competency data
- Officer from a different job family
- Officer with multiple aspirations
- Officer with no recommendations returned

These are the scenarios most likely to expose defects once real Products-fed data arrives — directly addressing the unresolved data-fidelity question from this meeting.

**Suggested validation matrix (build this before writing tickets):**

| Area | What to Validate |
|---|---|
| Pathfinder | Different aspirations |
| Pathfinder | Different competency levels |
| Pathfinder | Different agencies |
| Profile | Missing profile data |
| Profile | Full profile |
| Unified Opportunities | Different opportunity eligibility |
| Recommendations | Different user personas |

Cross-reference as a persona × feature-area coverage grid (Profile A/B/C × Listing/Discovery/Profile/Recommendations, ✅/❌ per cell) to spot coverage gaps before tickets are written, then generate tickets from the matrix rather than from features directly.

**Connects to:** action item "Consolidate Batch 1 test cases" (Michelle Yip / team) — this structure should be the basis for that work, not a feature-by-feature checklist.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original meeting assessment</summary>

Meeting the UAT timeline
1. Ensuring UAT data quality and realism
2. Managing stakeholder expectations around the Products/POCDEX dependency

The team made progress on process alignment, but several significant risks remain unresolved.

**Executive Summary**

What went well:
- The team eventually aligned on a two-batch UAT strategy.
- Clear ownership emerged for preparing test cases, profile mappings, and Products team requests.
- Agreement was reached on using: Jira as the primary UAT execution tool; Linked issues for defect management; Three severity levels (High/Medium/Low) for business users.
- Michelle raised critical concerns around data quality, forcing the team to think beyond merely meeting deadlines.

What did not go well:
- Substantial confusion around: Batch 1 vs Batch 2; 14-15 accounts vs 19-20 profiles; whether seeded data was still required; what Products team was actually being asked to prepare.
- The team repeatedly discussed tactical implementation before agreeing on first principles.
- Internal UAT scheduling was effectively invalidated during the meeting without a full replanning discussion.
- Multiple participants had different interpretations of the same UAT strategy.

Biggest unaddressed risk: The project currently assumes internal UAT can run on seeded/fixture data, and actual UAT will run using Products-fed profiles. There is no agreed validation approach proving the fixture data faithfully represents actual Products data.

**Key Discussion Themes**

1. UAT Strategy Changed Midstream — Original: Products/POCDEX data required before testing begins. Proposed: Batch 1 on seeded Compass data, defer Products integration to Batch 2. Pow Hwee Tan noted Products team already working toward a 20-profile setup; a different approach requires expectation re-management; stakeholders may read this as "Products is not ready." Never closed: is seeded-data-first the desired strategy or contingency planning?

2. Data Quality vs Timeline — Michelle's question: if we seed our own data for internal UAT, how do we know it reflects what will actually arrive from Products? Concern: internal UAT passes, real Products-fed data behaves differently later, new defects emerge during business UAT, team loses confidence in internal validation. Engineering's response: internal UAT uses fixtures, actual UAT uses Products-fed data, additional columns identify internal vs. real UAT accounts. Gap: no one answered who validates the seeded profiles against real Products output.

3. Timeline Risk Became Much Larger — If Products data only arrives by 7 August: Compass internal UAT cannot happen as originally planned, internal validation gets compressed, business UAT may start immediately afterward, weekend testing may become necessary. Pow Hwee Tan openly stated Compass team could face a testing crunch and some work may need to happen over a weekend. Not discussed: mitigation plan for failed internal UAT, retest cycles, production readiness if defects emerge late, business owner availability for compressed windows.

**UAT Process Decisions Made**

Decision 1: Two-Batch UAT. Batch 1: Keycloak login, selected features, reduced dependency on Products. Batch 2: end-to-end validation with Products-fed officer profiles, testing requiring actual Job ID/Function/Profile mappings.

Decision 2: Product Team Prepares UAT Readiness. Status flow: To Do → Ready for UAT → In Execution → Failed/Blocked → Passed. Product team moves items into Ready for UAT only after accounts exist, profiles exist, dependencies are ready.

Decision 3: Business Users Execute Through Jira. Business users execute tests through Jira tickets, follow ticket instructions, not primarily use Confluence pages during execution.

Decision 4: Defects Managed Through Linked Issues. When a defect is found: business user comments in the UAT ticket, screenshot attached, product/engineering team creates linked defect item, technical discussions occur in linked issue only. Good decision — prevents UAT tickets from becoming cluttered.

Decision 5: Three Severity Levels for Business Users. Proposal evolved from Critical/High/Medium/Low to High/Medium/Low. Michelle specifically challenged the usefulness of having both Critical and High because business users are unlikely to distinguish consistently. The group agreed.

**Risks Not Fully Addressed**

Risk 1: Data Fidelity Risk (Likelihood: High) — How do we prove fixture data behaves like real Products data? Without validation, internal UAT may provide false confidence.

Risk 2: Schedule Compression Risk (Likelihood: High) — Assumption: Products data ready before 7 August. If delayed: internal UAT collapses, business UAT shrinks, defect turnaround window shrinks.

Risk 3: Stakeholder Messaging Risk (Likelihood: Medium-High) — Pow Hwee Tan repeatedly highlighted concern that business owners and Gek Khiang may perceive the workaround approach as evidence that Products is not ready. No agreed communications strategy.

Risk 4: Test Account Explosion — Team still discovering additional profile requirements. Current numbers discussed: 14-15 profiles, 19-20 profiles, potentially more after review. No final number agreed.

Risk 5: Definition of UAT Success — Team discussed process extensively but did not address: what constitutes a successful Batch 1? Without entry/exit criteria, teams may disagree on readiness, defects may be interpreted differently, go/no-go decisions become subjective.

**Action Items**

- Consolidate Batch 1 test cases — Michelle Yip / team — Create all test cases for Batch 1 features
- Populate required profile/account list — Adrian / Compass team — Required for Products preparation
- Respond to Johnny's request on required columns/profiles — Adrian — Urgent dependency
- Review and reconcile Batch 1 and Batch 2 accounts — Rama Moorthy / team — Determine overlaps and reuse opportunities
- Create UAT severity definitions — Rama Moorthy — High/Medium/Low definitions
- Update UAT board design and workflow — Rama Moorthy — Ready for UAT / Execution / Failed / Passed flow
- Engineering to support internal fixture-based UAT accounts — Engineering team — Enable internal testing before Products data is ready
- Confirm Products readiness and expected delivery — Products team / Johnny — Target remains before 7 August

**My Assessment**

The meeting achieved process alignment, but not yet delivery confidence. The most important issue surfaced was not the UAT board, labels, Jira workflow, or severity definitions. It was: "How do we know the internal test data accurately represents the real Products-fed data?" Until the team has a concrete validation approach for that question, there remains a real possibility that Batch 1 gives a false sense of readiness and that major integration defects only surface during business UAT. That is the highest risk currently facing this UAT plan.

</details>
