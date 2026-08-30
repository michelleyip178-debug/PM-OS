# Meeting Notes: OTEP Squad Sync — VAPT Governance, MVP Closure, Employment Lifecycle

**Date:** 28 Aug 2026

**Meeting Type:** Squad sync / programme coordination

**Source:** PM's own structured executive assessment of the sync (not a raw transcript). Retained as provided, including the Executive Assessment, "Risks NOT Being Fully Addressed", and Chief-of-Staff View, which are the PM's own synthesis.

**Key contributors:** Adrian ANG, Rama MOORTHY, Adrian Lo, Johnny, Victor ONG, Benjamin AW, Jobelle LIM, Imelda MO, Michelle YIP, Fabian PEH, Barry, Brian N KESUMA (referenced)

**Overall health:** 🟠 Amber

---

## Summary

The squad is operationally in control heading into VAPT and MVP closure. VAPT governance is materially stronger than prior cycles (scope-to-quotation mapping, mandatory product-team verification, a dedicated Monday walkthrough), pre-emptive remediation has cleared 80–90% of ~44 known Compass cloud findings, and UAT is down to one outstanding item with a sign-off email in draft. The failure mode has shifted: it is no longer feature delivery, it is coordination overload and resource contention as the programme enters VAPT, MVP closure, R1 planning, employment-lifecycle implementation, and CMM discovery in parallel. Four risks were acknowledged but not mitigated in the room: key-person dependency, Benjamin's mid-September reservice, unowned regression-testing capacity, and the MVP-vs-R1 prioritisation conflict.

---

## Decisions Made

### VAPT

1. **Scope verification before quotation approval**
   - **Why:** Prior VAPT cycles had scope mismatches that caused difficult vendor conversations and discovery of uncovered assets mid-execution.
   - **Who:** Rama MOORTHY + product teams
   - **Impact:** Every VAPT scope form is verified by the owning product team before submission; NCS quotations are matched line-by-line against approved scope.

2. **Monday VAPT walkthrough will review application scope, system design, quotation alignment, and timeline expectations**
   - **Why:** Single structured checkpoint to catch scope/quote/timeline gaps before kickoff.
   - **Impact:** Meeting duration may be extended to fit the walkthrough. Rama to update the agenda.

3. **Compass and CAE VAPT start together on 7 September**
   - **Why:** Coordinated start under Jace TAN's ITC VAPT coordination to manage resource contention with the parallel HR Alchemist VAPT.
   - **Impact:** Fixes the 7 Sep date for two workstreams at once; raises the stakes on the NCS PO landing in time.

4. **VAPT tracking transfers to operational tracking after kickoff**
   - **Why:** Jobelle's tracker moves from planning to execution mode once VAPT starts.
   - **Impact:** Jobelle owns the execution tracking and escalation process from kickoff.

### MVP / UAT

5. **UAT closure/sign-off email sent after final validation**
   - **Why:** UAT is down to one outstanding item; the team is already on production-readiness activities.
   - **Who:** Imelda MO to produce the email.
   - **Impact:** Formal UAT closure is imminent, contingent on the last item and SSO validation.

6. **Known logic gaps not formally tested will be explained with supporting evidence and internal validation**
   - **Why:** Some backend-only behaviour (recommendation fallback logic) can't be exercised through a standard UAT test case.
   - **Impact:** These gaps get a written explanation plus evidence rather than a test result. See "Concerns Raised" — the team has no agreed standard for what counts as sufficient evidence, so this decision is only half-formed.

### SSO

7. **SSO fix deployed to UAT; controlled BO testing session coordinated**
   - **Why:** The validated dev fix needs UAT confirmation via a controlled window because the process touches fixtures, personas, environment switches, feature flags, and CSC dependencies simultaneously.
   - **Who:** Michelle coordinates execution across parties (with Johnny and Adrian Lo executing).
   - **Impact:** Testing must be frozen during the window. This is an orchestration risk more than a technical one.

### Employment Lifecycle Changes

8. **Focus on high-value scenarios: grade changes, competency changes, job family changes**
   - **Why:** 82 priority cases identified, scope likely exceeds capacity, products team needs lead time.
   - **Impact:** Narrows the direction but is not a final prioritisation. Full prioritisation still required before large-scale execution — no decision made in this sync.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Validate all VAPT scope forms against quotations | Rama MOORTHY + product teams | Before Monday walkthrough | 🔴 High | 🔴 Not Started |
| Add product owners into VAPT clarification communications | Rama MOORTHY | This week | 🟡 Medium | 🔴 Not Started |
| Review CAE scope document | Victor ONG | Before Monday walkthrough | 🔴 High | 🔴 Not Started |
| Verify API specifications and documentation alignment | Victor ONG, Benjamin AW | Before Benjamin's mid-Sep reservice | 🔴 High | 🔴 Not Started |
| Establish VAPT tracking and escalation process | Jobelle LIM | Before 7 Sep kickoff | 🟡 Medium | 🔴 Not Started |
| Extend Monday VAPT session and update agenda | Rama MOORTHY | Before Monday | 🟡 Medium | 🔴 Not Started |
| Obtain additional API PT prerequisites from NCS | Rama MOORTHY | Before 7 Sep | 🔴 High | 🔴 Not Started |
| Pull in technical support for VAPT reviews | Fabian PEH, Barry | Before Monday walkthrough | 🟡 Medium | 🔴 Not Started |
| Execute SSO deployment/testing plan | Michelle, Johnny, Adrian Lo | 28 Aug | 🔴 High | 🔴 Not Started |
| Coordinate BO SSO testing session | Michelle | 28 Aug | 🔴 High | 🔴 Not Started |
| Produce UAT sign-off email | Imelda MO | After final validation (from 28 Aug) | 🔴 High | 🔴 Not Started |
| Validate non-tested fallback scenarios (recommendation backend logic) | Adrian Lo + engineering team | Before UAT sign-off | 🔴 High | 🔴 Not Started |
| Finalise employment-lifecycle priority scenarios | Michelle, Adrian, team | No date set — schedule within 48h | 🔴 High | 🔴 Not Started |
| Provide prioritised test-data requirements to products team | Michelle | After prioritisation lands | 🔴 High | 🔴 Not Started |

**Notes:**
- Two items have no date: "finalise employment-lifecycle priority scenarios" and its downstream "prioritised test-data requirements." These gate the products team's lead time — get a date within 48h.
- Michelle is on the critical path for three items in the same window (SSO execution, BO SSO session, lifecycle prioritisation). See Timeline Risks.
- "Validate non-tested fallback scenarios" has no agreed success criteria — the team hasn't decided what evidence is sufficient (see Concerns Raised #3).

---

## Concerns Raised

### 1. Heavy dependence on key individuals
Discussions repeatedly converged on **Adrian Lo, Johnny, Rama MOORTHY** (and Benjamin for APIs). Adrian ANG explicitly warned Adrian Lo may become a bottleneck. No backup owners, handovers, or escalation coverage were defined. The programme is vulnerable to delay if any one becomes unavailable.

### 2. SSO testing process is fragile and operationally intensive
Validation requires fixture updates, persona swaps, environment switching, feature flags, live CSC dependencies, and simultaneous multi-party coordination. This is an orchestration risk, not a technical one — many moving parts that must line up in a single frozen window.

### 3. No agreed technical-assurance model for backend-only logic
The team could not settle how complex recommendation logic (backend fallback behaviour) should be evidenced — code screenshots, output evidence, code reviews were all floated, none agreed. Likely to resurface at audit, under UAT challenge, or on a future defect. Decision 6 commits to "evidence + internal validation" without defining the bar.

### 4. Employment Lifecycle Change workstream has no prioritised scope
82 priority cases identified, scope likely larger than capacity, products team needs lead time, priority order not agreed. The team is aware but made no prioritisation call in the sync.

### 5. (Cultural, positive) Stakeholder-escalation learnings
Mature acknowledgement of recent stakeholder tension. Called out: timeline changes weren't highlighted prominently enough; stakeholders need factual precision; keep communicating factual updates rather than going defensive; contentious items need extra scrutiny before they go out. Framed as an adjustment, not a retreat into communication paralysis.

---

## Risks

### Discussed and being managed

1. **VAPT scope mismatch** — unquoted items discovered later → extra cost, vendor disputes, delays.
   - **Mitigation:** scope-to-quotation mapping; mandatory product-team verification.

2. **Rectification timeline slippage** — VAPT findings may need remediation and rescans; tight MVP timeline has little slack.
   - **Mitigation:** pre-scanning; early remediation (80–90% of ~44 Compass cloud findings already fixed/in progress, targeted complete mid next week).

3. **UAT environment instability during SSO testing** — environments switched, testing frozen, multiple teams involved.
   - **Mitigation:** Michelle coordinating; controlled testing window.

### Acknowledged but NOT mitigated — candidates for the RAID log

4. 🔴 **Key-person dependency** (Adrian Lo, Johnny, Benjamin, Rama) — repeated single points of knowledge/execution.
   - **Missing:** backup owners, handovers, escalation coverage.
   - **Maps to:** RAID R13 (the "who decides / who owns" pattern), now showing up as a delivery risk not just a governance one.

5. 🔴 **Benjamin AW's mid-September reservice** — Brian N KESUMA covers, but no knowledge-transfer plan discussed.
   - **Specific exposure:** VAPT findings affecting APIs may land while Benjamin is unavailable, and API scope verification is currently on him.

6. 🔴 **Regression testing capacity** — numerous infra fixes + code freeze → regression testing required.
   - **Missing:** no owner, no success criteria, no timeline. Could become a critical-path issue post-freeze.

7. 🔴 **MVP vs R1 prioritisation conflict** — MVP closure, employment-lifecycle work, and R1 planning all starting at once.
   - **Missing:** no decision framework for resolving resource contention. Called out as likely the biggest medium-term delivery risk.

---

## Timeline Risks

- **TIMELINE RISK — Michelle is on the critical path for three concurrent items.** SSO deployment/testing execution (28 Aug), the BO SSO testing session (28 Aug), and finalising the employment-lifecycle prioritisation (no date). The first two are the same day and the third gates the products team's lead time. Something has to give — either the lifecycle prioritisation gets a specific later date and owner support, or the SSO coordination gets a co-owner.

- **TIMELINE RISK — API scope verification (Victor + Benjamin) vs Benjamin's mid-September reservice.** Benjamin is assigned to verify API specs/documentation alignment and is a named single point of knowledge for API work, then goes on reservice mid-September — exactly when interim VAPT findings (from ~18 Sep, per the weekly status digest) could hit the APIs. The verification and any knowledge transfer to Brian need to complete before Benjamin leaves, not during.

- **TIMELINE RISK — regression testing has no timeline but sits on the critical path after the 28 Aug code freeze.** Code freeze is 28 Aug (per the weekly status digest), the 1–4 Sep buffer is for bug fixes, and VAPT starts 7 Sep. Regression testing across "numerous infra fixes" has to fit in that window with no owner or plan. If it slips, it either compresses the buffer or pushes into VAPT.

- **TIMELINE RISK — employment-lifecycle prioritisation is undated but the products team "needs lead time."** 82 cases, scope over capacity, no priority order. Every day without the prioritisation decision is a day off the products team's runway. This is the same 82-case set scoped in the [Employment Lifecycle Scenarios - Day 2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2597226493) Confluence page — the JAM there is meant to produce the prioritisation, so confirm the JAM outcome feeds this action directly.

- **TIMELINE RISK — Monday VAPT walkthrough depends on four prep items completing over the weekend.** Scope-form validation, CAE scope review, technical-support engagement, and the agenda update all need to be done before Monday. Tight turnaround on a weekend.

---

## Key Insights

**The failure mode has moved.** Early August the risk was "will the feature be done." Now the feature is essentially done (one UAT item, sign-off drafting) and the risk is **coordination overload**: VAPT + MVP closure + R1 planning + employment-lifecycle implementation + CMM discovery, all live at once, all leaning on the same handful of people. A programme can ship every feature and still miss its date because the coordination layer buckled.

**VAPT governance is the standout improvement.** The team explicitly learned from prior cycles (scope mismatches, SGEMS experience) and put real process in: baseline scope forms, mandatory product verification, line-by-line quote matching, a dedicated walkthrough, a tracking owner. This is the right response to a repeated failure pattern and materially lowers the odds of a mid-execution surprise.

**Pre-emptive remediation is paying off.** ~44 known Compass cloud findings, similar for CAE, 80–90% already fixed or in progress, targeted complete mid next week. This buys a cleaner initial VAPT report and less remediation pressure against the tight MVP timeline.

**The backend-assurance gap is a latent audit risk.** The team can't articulate how to evidence backend-only recommendation logic. Committing to "evidence + internal validation" without a defined bar means the question just moves to whoever challenges it next — an auditor, a stakeholder, or a future defect post-mortem. Worth defining the standard now, while it's cheap.

**The stakeholder-communication reset is genuinely mature.** Naming "we didn't highlight the timeline change prominently enough" and "stakeholders need factual precision" without over-correcting into defensiveness is the right read. This connects to Mark HO's recent queries in the weekly status thread — the team is adjusting how it communicates contentious items, which is exactly what those queries were asking for.

---

## Open Questions

- [ ] Who is the backup owner for each of Adrian Lo / Johnny / Rama / Benjamin's critical workstreams? — **Owner:** Adrian ANG — **By:** before 7 Sep VAPT kickoff
- [ ] What is the knowledge-transfer plan from Benjamin to Brian before Benjamin's mid-Sep reservice? — **Owner:** Benjamin AW / Rama — **By:** early September
- [ ] Who owns regression testing post-code-freeze, with what success criteria and timeline? — **Owner:** Rama — **By:** 1 Sep (before the buffer window opens)
- [ ] What is the decision framework for resolving MVP vs R1 vs lifecycle resource contention? — **Owner:** Michelle + Adrian — **By:** this week
- [ ] What counts as sufficient evidence for backend-only logic (screenshots / output / code review / something else)? — **Owner:** Adrian Lo + engineering — **By:** before UAT sign-off
- [ ] When is the employment-lifecycle prioritisation decision being made, and does it come out of the Day-2 JAM? — **Owner:** Michelle — **By:** confirm today

---

## Blockers

1. **SSO UAT validation (28 Aug)**
   - **Blocked by:** Nothing — dev fix validated, awaiting the controlled UAT window.
   - **Impact:** Gates UAT sign-off. Fragile multi-party orchestration in a frozen window.
   - **Resolution:** Michelle coordinates the controlled session with BOs, Johnny, and Adrian Lo; testing frozen for the window.

2. **Employment-lifecycle prioritisation (no date)**
   - **Blocked by:** No prioritisation decision; scope exceeds capacity; priority order not agreed.
   - **Impact:** Products team can't start — they need lead time and prioritised test-data requirements, both downstream of this.
   - **Resolution:** Make the call (ideally out of the Day-2 JAM), then Michelle hands prioritised test-data requirements to the products team.

3. **Regression testing (unowned)**
   - **Blocked by:** No owner, no criteria, no timeline.
   - **Impact:** Sits on the post-freeze critical path (28 Aug freeze → 1–4 Sep buffer → 7 Sep VAPT). Slippage compresses the buffer or bleeds into VAPT.
   - **Resolution:** Rama to name an owner and define scope/criteria/timeline by 1 Sep.

---

## Next Steps

**Immediate (28 Aug – weekend):**
- Execute the SSO deployment and controlled BO testing session (Michelle, Johnny, Adrian Lo).
- Complete the four Monday-walkthrough prep items: VAPT scope-form validation, CAE scope review, technical-support engagement (Fabian, Barry), agenda update (Rama).
- Get a date on the employment-lifecycle prioritisation decision — confirm whether it comes out of the Day-2 JAM.

**Short-term (Mon 1 Sep – Fri 5 Sep):**
- Monday VAPT walkthrough: application scope, system design, quotation alignment, timeline.
- Rama names a regression-testing owner with success criteria and timeline (by 1 Sep).
- Benjamin ↔ Brian knowledge transfer on API scope before Benjamin's reservice.
- Finalise employment-lifecycle priorities; Michelle hands prioritised test-data requirements to the products team.
- Adrian ANG defines backup owners for the key-person-dependency workstreams.

**Medium-term:**
- 7 Sep: Compass + CAE VAPT kickoff; tracking moves to Jobelle's operational process.
- Establish a decision framework for MVP vs R1 vs lifecycle resource contention (Michelle + Adrian).
- Agree the backend-only assurance standard before it's tested by an auditor or a defect.

**Follow-up meeting:**
- **Date:** Monday VAPT walkthrough (extended session)
- **Purpose:** Scope/design/quotation/timeline review before 7 Sep kickoff
- **Attendees:** Rama, Victor, Jobelle, Fabian, Barry, product teams, Michelle

---

## Context for Future Reference

**Related meeting notes:**
- [27 Aug – Compass weekly status digest (Jul–Aug)](2026-08-27-W35-compass-weekly-status-digest-jul-aug.md) — SSO timeline, NCS PO dependency, AI IDSC blocker, Day-2 gap; Mark HO's blocker-classification query
- [27 Aug – Risk register / readiness review (with Jace)](2026-08-27-W35-risk-register-readiness-review.md) — risk-register ownership split, Pow Hwee departure, R1 STIP/Gig/SJR direction
- [25 Aug – Programme coordination: UAT/VAPT/cutover](2026-08-25-W35-programme-coordination-uat-vapt-cutover.md)
- [26 Aug – Daily VAPT activities: CSC-Compass SSO](2026-08-26-W35-uat-vapt-daily-activities.md)

**Related analysis:**
- [25 Aug – RAID log](../analyses/2026-08-25-W35-raid-log.md) — R13 ("who decides / who owns" pattern), R14 (UAT sign-off has no acceptance checklist), R15 (no consolidated VAPT Definition of Ready). The four unaddressed risks in this sync map onto R13–R15 plus two new ones (Benjamin's reservice, regression-testing capacity).

**Confluence:**
- [Employment Lifecycle Scenarios - Day 2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2597226493) — the 82-case scoping; the JAM there should produce the prioritisation this sync deferred
- [Prioritised Employment Lifecycle Scenarios](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2603157647) — full 82-case P1 analysis (grade / competency / job-family changes are the "high-value" set named here)

**RAID candidates to add from this sync:**
1. Key-person dependency (Adrian Lo, Johnny, Benjamin, Rama) — no backups, handovers, or escalation coverage
2. Benjamin AW mid-September reservice — no KT plan, collides with possible API VAPT findings
3. Regression-testing capacity post-code-freeze — unowned, no criteria, no timeline
4. MVP vs R1 vs employment-lifecycle resource contention — no decision framework
5. Backend-only logic assurance — no agreed evidence standard

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original squad-sync assessment (PM's own synthesis)</summary>

### Executive Assessment
**Overall Health: 🟠 Amber.** The team has identified most near-term workstreams and owners, and there is active coordination across product, engineering and PMO. However, several areas rely heavily on manual coordination, key individuals, and assumptions that scope and testing are sufficiently covered. The team is managing known risks, but there are several emerging risks that were acknowledged but not fully mitigated.

### What Went Well
1. **VAPT governance became much clearer.** Recognised problems from previous VAPT engagements where scope mismatches caused difficult vendor conversations. More structured process now: baseline VAPT scope forms prepared; product teams required to verify scope before submission; NCS quotations matched line-by-line against approved scope; dedicated VAPT walkthrough scheduled; Jobelle's tracker used to monitor execution. Significantly reduces the likelihood of discovering uncovered assets during execution.
2. **Team learnt from stakeholder escalation.** Mature acknowledgement of recent tensions. Learnings: timeline changes were not highlighted prominently enough; stakeholders require factual precision; keep communicating factual updates instead of becoming overly defensive; contentious issues should get additional scrutiny before communication. A positive cultural adjustment, not communication paralysis.
3. **Pre-emptive VAPT remediation already underway.** Applying lessons from previous SGEMS experiences. ~44 known cloud-related findings identified for Compass; similar for CAE; 80–90% reportedly already fixed or in progress; completion targeted mid next week. Improves odds of a cleaner initial VAPT report.
4. **MVP/UAT close to closure.** Majority of bugs cleared; only one outstanding UAT item mentioned; UAT approval email being drafted; team already discussing production readiness rather than functional gaps. MVP readiness is largely execution/coordination, not feature completion.

### What Did Not Go Well
1. **Heavy dependence on key individuals.** Discussions repeatedly converged on Adrian Lo, Johnny, Rama MOORTHY. Adrian explicitly warned Adrian Lo may become a bottleneck. Programme vulnerable to delays if any become unavailable.
2. **SSO testing process remains overly complicated.** Fixture updates required; test personas need swapping; environment switching required; feature flags required; CSC dependencies exist; simultaneous coordination between multiple parties. Fragile and operationally intensive — an orchestration risk more than a technical one.
3. **Technical assurance model for complex logic remains weak.** Team struggled to explain how complex recommendation logic should be evidenced: backend fallback logic; whether code screenshots suffice; whether output evidence is enough; whether code reviews provide assurance. No clearly agreed method for validating backend-only behaviour. May resurface during audit, UAT challenge, or future defects.
4. **Employment Lifecycle Change workstream lacks prioritised scope.** 82 priority cases identified; products team needs lead time; priority order not fully agreed; scope likely larger than capacity. Aware of the issue but no final prioritisation decision made.

### Risks Discussed
- **Risk 1: VAPT scope mismatch** — unquoted items discovered later, additional cost, vendor disputes, delays. Mitigation: scope-to-quotation mapping; mandatory verification by product teams.
- **Risk 2: Rectification timeline slippage** — VAPT findings may require remediation and rescans; tight MVP timeline. Mitigation: pre-scanning; early remediation.
- **Risk 3: UAT environment instability during SSO testing** — environments switched, testing frozen, multiple teams. Mitigation: Michelle coordinating; controlled testing window.

### Risks NOT Being Fully Addressed (should appear in RAID)
- 🔴 **Unaddressed Risk 1: Key-person dependency** — Adrian Lo, Johnny, Benjamin, Rama repeatedly single points of knowledge/execution. Missing: backup owners, handovers, escalation coverage.
- 🔴 **Unaddressed Risk 2: Benjamin's reservice** — Benjamin AW on reservice mid-September, Brian N KESUMA covers. Little discussion of KT or impact. VAPT findings affecting APIs may arrive while Benjamin is unavailable.
- 🔴 **Unaddressed Risk 3: Regression testing capacity** — numerous infra fixes, code freeze, regression testing required. No owner, no success criteria, no timeline. Could become a critical-path issue.
- 🔴 **Unaddressed Risk 4: MVP versus R1 prioritisation conflict** — MVP work continues, employment lifecycle work begins, R1 planning starts simultaneously. Resource contention recognised, no decision framework. Likely the biggest medium-term delivery risk.

### Decisions Made
**VAPT:** (1) Scope verification before quotation approval. (2) Monday VAPT walkthrough reviews application scope, system design, quotation alignment, timeline expectations. (3) Meeting duration may be extended for the walkthrough. (4) Compass and CAE VAPT start together on 7 September. (5) VAPT tracking transfers to operational tracking after kickoff.

**MVP / UAT:** (1) UAT closure/sign-off email sent after final validation. (2) Known logic gaps not formally tested will be explained with supporting evidence and internal validation.

**SSO:** (1) SSO fix deployed into UAT. (2) Controlled testing session coordinated with business owners. (3) Michelle coordinates execution across parties.

**Employment Lifecycle Changes:** (1) Focus on high-value scenarios: grade changes, competency changes, job family changes. (2) Full prioritisation still required before large-scale execution.

### Consolidated Action Tracker
| Action | Owner |
|---|---|
| Validate all VAPT scope forms against quotations | Rama MOORTHY + product teams |
| Add product owners into VAPT clarification communications | Rama MOORTHY |
| Review CAE scope document | Victor ONG |
| Verify API specifications and documentation alignment | Victor ONG, Benjamin AW |
| Establish VAPT tracking and escalation process | Jobelle |
| Extend Monday VAPT session and update agenda | Rama MOORTHY |
| Obtain additional API PT prerequisites from NCS | Rama MOORTHY |
| Pull in technical support for VAPT reviews | Fabian PEH, Barry |
| Execute SSO deployment/testing plan | Michelle, Johnny, Adrian Lo |
| Coordinate BO SSO testing session | Michelle |
| Produce UAT sign-off email | Imelda MO |
| Validate non-tested fallback scenarios | Adrian Lo and engineering team |
| Finalise employment-lifecycle priority scenarios | Michelle, Adrian, team |
| Provide prioritised test-data requirements to products team | Michelle |

### My Chief-of-Staff View
If briefing leadership: the team is operationally under control, MVP appears achievable, and VAPT readiness is significantly stronger than previous cycles. However, execution is becoming increasingly dependent on a small number of key individuals, while the programme is simultaneously entering VAPT, MVP closure, R1 planning, employment-lifecycle change implementation, and CMM discovery. The most likely failure mode is no longer feature delivery. It is coordination overload and resource contention across parallel workstreams.

*Source: OTEP Squad Sync (Meeting).*

</details>
