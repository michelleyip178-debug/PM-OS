# Meeting Notes: OTEP Squad Sync

**Date:** 2026-09-11  
**Time:** 09:30-10:30 SGT  
**Attendees:** Michelle Yip (PM, PSD), Rama Moorthy (Engineering Lead), Victor Ong (CIE Lead), Jace Tan, Jobelle Lim, Li Ting Kway (Design), Kah Chee, Engineering squad (Barry Lim on leave)  
**Meeting Type:** Weekly Squad Sync & Operational Readiness Review  
**Initiative:** Career Compass MVP Launch & Governance Gates  

---

## Summary

This sync addressed critical delivery and governance readiness across performance testing, compliance submissions, Day 2 operations, and search behavior. Product pushed back on arbitrary performance thresholds, establishing that success criteria must benchmark against established government tender standards and OTG data rather than informal targets. The squad exposed operational gaps in Day 2 support, external dependency escalation paths, and CIE product management ownership, confirming that operational readiness and evidence collection represent the true critical path to the November MVP launch.

---

## Decisions Made

1. **Performance testing success criteria must benchmark against government tender standards**
   - **Why:** Proposed 2-second and 3-second response thresholds appeared arbitrary and lacked defensibility for Business Owners and auditors.
   - **Who decided:** Product direction from Michelle Yip, accepted by Rama Moorthy.
   - **Impact:** Rama will calibrate performance criteria against OTG and public sector tender references rather than isolated engineering estimates.

2. **Decouple performance test scenarios across distinct user workloads**
   - **Why:** Lumping Search, Filter, Browse, and Pagination together obscures performance bottlenecks and complicates root-cause analysis during degradation.
   - **Who decided:** Engineering squad consensus.
   - **Impact:** Test scripts will evaluate Search, Filter, Pagination, and Role Browsing as independent performance pipelines.

3. **Clarify risk assessment ownership boundaries**
   - **Why:** Overlapping responsibilities delayed GovAssure, SSP, and cloud risk documentation.
   - **Who decided:** Squad alignment.
   - **Impact:** Compass System Risk Assessment owned by Rama Moorthy; CIE Risk Assessment owned by Victor Ong; Project and Data Risks owned by Product Team; Cyber and Cloud Technical Risks owned by Engineering.

4. **Schedule comprehensive Launch Readiness Workshop upon Barry Lim's return**
   - **Why:** Missing operational milestones require structured cross-functional coordination.
   - **Who decided:** Jace Tan, Michelle Yip.
   - **Impact:** Workshop will build the integrated activity schedule covering Day 2 Ops, PM handover, and Jobelle's operational readiness tracking.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Find and share OTG and government tender performance baselines for benchmarking | @Michelle Yip | 2026-09-15 | 🔴 High | In Progress |
| Revise performance testing success criteria using benchmark tender references | @Rama Moorthy | 2026-09-15 | 🔴 High | Not Started |
| Produce technical analysis and impact recommendation on single-character search behavior | @Rama Moorthy | 2026-09-14 | 🔴 High | Not Started |
| Draft Day 2 Operations framework (incident management, triage, service requests) | @Rama Moorthy | 2026-09-18 | 🔴 High | Not Started |
| Draft external dependency incident management and escalation protocol | @Rama Moorthy | 2026-09-18 | 🔴 High | Not Started |
| Complete Compass system risk assessment activities for GovAssure / SSP | @Rama Moorthy | 2026-09-22 | 🔴 High | Not Started |
| Complete CIE risk assessment activities and system registration | @Victor Ong | 2026-09-22 | 🔴 High | Not Started |
| Investigate controls for preventing uploads of documents classified above RSN with Kah Chee | @Victor Ong | 2026-09-16 | 🔴 High | Not Started |
| Develop overall governance submission timeline and master evidence tracking plan | @Michelle Yip | 2026-09-18 | 🔴 High | Not Started |
| Support readiness milestone tracking and activity schedule | @Jobelle Lim | 2026-09-18 | 🟡 Medium | Not Started |
| Share SGEMS production support reference model and runbook examples | @Jace Tan | 2026-09-15 | 🟡 Medium | Not Started |
| Refine and finalize CMM deck for presentation next Tuesday | @Li Ting Kway, @Michelle Yip | 2026-09-15 | 🟡 Medium | In Progress |
| Schedule and facilitate Launch Readiness Planning Session upon Barry's return | Squad Lead | Post-Barry Return | 🟡 Medium | Pending |

---

## Key Discussion Themes & Operational Findings

### 1. Performance Testing Justification and Workload Separation
- **The Challenge:** Engineering proposed generic P95/P99 latency targets (2s/3s) without documentation explaining why those targets are appropriate for civil service officers.
- **The Solution:** Michelle insisted that criteria reflect actual procurement standards and OTG baseline behavior. Test scenarios will separate heavy search queries from lightweight pagination and profile browsing.
- **Immediate Next Step:** Michelle will pull tender specification baselines ahead of the 17:00 Readiness Review to give Rama concrete figures.

### 2. The Single-Character Search Dilemma
- **The Debate:** Engineering identified that 1-character search inputs trigger heavy database processing across the entire catalog and competency matching engine, advocating for a 3-character minimum.
- **The Counterpoint:** Michelle and product representatives pointed out that OTG, LinkedIn, and peer platforms permit single-character or prefix searches. Restricting to 3 characters without user evidence risks damaging discovery for short acronyms (e.g., "AI", "HR", "IT").
- **Current Position:** Engineering continues performance profiling; no artificial restriction will be implemented until real search term distributions and system costs are evidenced.

### 3. Day 2 Operations as the True Critical Path
- **The Reality:** While security testing and VAPT receive heavy attention, operational readiness lags behind. The team lacks an agreed incident triage protocol, ticketing escalation paths, a shared mailbox workflow, and named operational owners.
- **The Impact:** Governance submissions to ACSO and GovAssure require an approved Day 2 support package. Without runbooks and support contracts, launch authorization will be blocked regardless of technical completion.

### 4. CIE Governance and Product Ownership Void
- **Discovery:** A major governance gap surfaced during the sync: Victor Ong confirmed that CIE currently has no assigned Product Manager.
- **Risk:** Unclear accountability creates confusion around who approves CIE requirements, prioritizes feature changes, and validates compliance evidence. This must be escalated to leadership for immediate assignment.

### 5. Sensitive Document Upload Restrictions
- **Unresolved Risk:** The squad examined whether Compass has active controls to block users from uploading documents classified above Restricted / Sensitive Normal (RSN).
- **Status:** The team confirmed that existing controls are unknown. Victor Ong will engage Kah Chee to verify file inspection and security policies.

---

## Priority Risk Mitigation & Governance Roadmap

```
[Day 2 Ops Model] ------------+
                              |
[External Dependency Map] ----+---> [Evidence Package] ---> [GovAssure / ACSO Review] ---> [MVP Launch]
                              |
[Cyber & Cloud Assessment] ---+
```

### Risk 1: Day 2 Operations Undefined (Rating: 🔴 High)
- **Objective:** Establish an approved operational support model covering incident triage, bug escalation, service requests, and release management.
- **Milestones:** Scope agreed (T+1w) → Workflows drafted (T+2w) → Escalation matrix & runbooks (T+3w) → End-to-end walkthrough & sign-off (T+4w).
- **Decision Gate:** Approved Day 2 Ops model is mandatory before ACSO risk assessment submission.
- **Escalation Trigger:** Absence of an agreed escalation matrix 2 weeks before launch.

### Risk 2: External Dependency Failure Protocols (Rating: 🔴 High)
- **Objective:** Document named operational contacts, recovery procedures, and graceful degradation paths for all external APIs and services.
- **Milestones:** Dependency inventory (T+1w) → Failure impact analysis (T+2w) → Support contacts & escalation procedures (T+3w) → Integration into Day 2 runbook (T+4w).
- **Decision Gate:** All critical dependencies must have designated technical contacts and documented failure playbooks.

### Risk 3: Cybersecurity and Cloud Risk Assessments (Rating: 🔴 High)
- **Objective:** Complete GovAssure SSP registration, cloud risk registers, and VAPT remediation planning.
- **Milestones:** Controls review (T+1w) → Gap identification (T+2w) → Risk register updates (T+2w) → Compensating controls (T+3w) → ACSO submission pack (T+4w).
- **Decision Gate:** Zero unresolved High or Critical findings without an approved remediation plan.

### Risk 4: Governance Evidence Collection Package (Rating: 🟠 Medium)
- **Objective:** Assemble all compliance artefacts (Day 2 Ops, Bill of Materials, risk registers, VAPT logs) into a unified traceable package.
- **Milestones:** Evidence register established (Immediate) → Owners assigned (T+1w) → Core artefacts assembled (T+3w) → Dry-run checklist verification (T+4w).
- **Decision Gate:** 100% of mandatory artefacts available before ACSO review.

---

## Timeline Risks & Critical Path

- **TIMELINE RISK: Day 2 Ops Gates Compliance Submissions.** Day 2 Ops is not merely an operational convenience; it is a required evidence artefact for GovAssure and ACSO submissions. If Rama's draft slips past 18 Sep, the governance review timeline compresses dangerously against the 24-25 Nov launch date.
- **TIMELINE RISK: CIE PM Vacancy.** Victor Ong operating without a PM partner risks divergent priorities between Core Compass and CIE. Jace and Adrian must clarify product coverage for CIE before the readiness workshop.
- **TIMELINE RISK: Benchmark Alignment for 15 Sep Perf Test.** The performance test is scheduled for Tuesday 15 Sep. If benchmark targets based on tender references are not delivered and accepted by Monday 14 Sep, testing will execute against ungrounded assumptions.

---

## Next Steps

**Immediate (Today):**
- Michelle to extract government tender benchmarks for response times and concurrency to support Rama ahead of the 17:00 Readiness Review.
- Frame the campaign-spike requirement and Rama's operational workload at the 17:00 meeting.

**Short-term (Next Week):**
- Rama to circulate updated performance testing criteria incorporating tender standards.
- Michelle and Li Ting to finalize the CMM presentation deck for Tuesday.
- Convene with Jace to address the CIE product manager assignment gap.

**Follow-up Meeting:**
- **Topic:** Launch Readiness Planning Workshop
- **Timing:** Upon Barry Lim's return (target: week of 2026-09-21)
- **Key Deliverable:** Integrated readiness schedule across Engineering, Product, Ops, and WD.

---

## Appendix: Raw Meeting Transcript Notes

<details>
<summary>Click to expand raw transcript/notes</summary>

Executive Summary:
What went well:
1. Strong challenge and review of performance testing assumptions rather than accepting vendor proposals blindly.
2. Early preparation for GovAssure, SSP, RML, cyber risk assessment and operational readiness.
3. Recognition that Day 2 Ops and incident management processes need to be designed before launch.
4. Team openly surfaced uncertainties instead of pretending issues were resolved.
5. Good pushback from product/business representatives (particularly around performance criteria and search behaviour) to ensure technical decisions have business justification.

What did not go well:
1. Several discussions revealed missing baselines and missing evidence.
2. Some key governance artefacts are still not ready (Day 2 Ops, risk assessment, readiness activities).
3. Ownership is unclear for certain areas, especially CIE product management.
4. Team repeatedly relied on assumptions rather than user data.
5. There is still uncertainty around external dependency management and incident response obligations.

Overall health assessment:
Delivery: Amber
Governance/Compliance: Amber
Operational Readiness: Amber-Red
Technical Delivery: Amber
Stakeholder Alignment: Amber-Green

Key Decisions:
1. Performance Testing Success Criteria must be benchmarked against OTG and tender specs.
2. Search and Browse Performance Tests Need Separation.
3. Risk Assessment Ownership Split: Rama (Compass), Victor (CIE), Product (Data/Project), Engineering (Cyber/Cloud).
4. Readiness Planning Workshop after Barry Lim returns.

Major Discussions:
GovAssure/SSP/RML Work, Performance Testing, Single Character Search Debate, Day 2 Operations.

Risks:
1. Weak justification for performance targets.
2. Sensitive document upload controls above RSN.
3. External dependency failure.
4. Day 2 operational readiness.
5. Evidence collection for risk assessments.
6. CIE governance risk.
7. Search behaviour not driven by user evidence.

Action Items:
- Michelle: Find and share OTG/tender performance baselines
- Rama: Revise performance success criteria
- Rama: Follow up on 1-char search behaviour
- Rama: Produce Day 2 Ops draft
- Rama: Draft incident management process
- Rama: Complete Compass risk assessment
- Victor: Complete CIE risk assessment
- Michelle: Develop overall submission timeline and tracking plan
- Jobelle: Support readiness tracking
- Jace: Share SGEMS operational references
- Team: Conduct readiness planning session after Barry returns
- Victor: Follow up with Kah Chee on RSN document controls
- Li Ting & Michelle: Refine CMM deck for Tuesday

</details>
