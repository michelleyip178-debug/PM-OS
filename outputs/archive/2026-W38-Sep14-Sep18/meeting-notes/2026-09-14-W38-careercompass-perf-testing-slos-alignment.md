# Meeting Notes: CareerCompass Performance Testing: Proposed SLOs & Journey Distribution for Business Alignment

**Date:** 2026-09-14 (Week 38)  
**Time:** 4:00pm to 5:00pm  
**Organiser:** Rama Moorthy  
**Attendees:** Rama Moorthy (Infra / Performance Lead), Xian Zhang Guo (Business / Stakeholder), Christopher Woo (Business / Stakeholder), Michelle Yip (Product Manager), Engineering and Architecture Representatives  
**Meeting Link:** [Teams Meeting Event](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADE3YTU1YmQ1LWQ3ZWUtNDVjMy04OGJjLTY4ZWFlOWQwNDRhNgBGAAAAAACe9ok2Z4aCTY6L5pBZg-NSBwCDkMcBW-8QS4z5LIjlVzjQAAAAAAENAABduYf_yTe2RKUHwDB_n_BIAAWRJnLGAAA%3d&EntityRepresentationId=7bea3bcf-43c1-4420-b93a-8f63dd94e75c)  
**Related Documents:** [W37 Performance Testing Readiness Notes](file:///Users/michelleyip/Documents/PM-OS/outputs/archive/2026-W37-Sep7-Sep11/meeting-notes/2026-09-09-W37-perf-testing-readiness.md), [Consolidated Meeting Cleanup](file:///Users/michelleyip/Documents/PM-OS/outputs/meeting-notes/2026-09-14-W38-meeting-cleanup.md)  

---

## Summary

This session served as the formal business alignment touchpoint on CareerCompass performance testing methodology, proposed Service Level Objectives (SLOs), baseline load sizing, and journey distribution. The team established a solid shared understanding of test types (baseline, stress, breakpoint, endurance) and confirmed that 100% of simulated users hit login during ramp-up before splitting across downstream modules. However, business stakeholders (Xian Zhang Guo and Christopher Woo) pushed back on the lack of empirical backing for key numbers: baseline concurrency is extrapolated from OpenTechGov (OTG) daily active users rather than launch-day behaviour, the 2-second and 3-second response thresholds lack formal government benchmarks, and computationally heavy AI workflows (resume parsing and competency inference) remain entirely excluded from the test scope.

---

## Decisions Made

1. **Baseline and Endurance Load Parameters Locked for Scripting**
   * **Why:** The team needs fixed parameters to run the initial test suite ahead of the testing window.
   * **Who decided:** Rama Moorthy (presented and accepted for initial execution).
   * **Impact:** Baseline load is set at 100 users ramped over 15 minutes. Endurance testing is set at 100 concurrent users sustained over 8 hours. Stress and breakpoint tests will push progressively higher (1,000 to 1,200+ users).

2. **100% Login Participation in Ramp-Up Confirmed**
   * **Why:** Addressed a misunderstanding flagged by Christopher Woo where it looked like only 10% of users were tested on authentication.
   * **Who decided:** Rama Moorthy and Michelle Yip.
   * **Impact:** All simulated users run through Keycloak / authentication during the ramp-up phase. The percentage allocations (e.g. 10%, 4%) apply strictly to downstream post-login journeys.

3. **Two-Character Search Queries Will Be Formally Tested**
   * **Why:** Short query strings (e.g. 2-character searches) create heavy database and search index loads.
   * **Who decided:** Rama Moorthy.
   * **Impact:** Search performance scripts will include 2-character queries to ensure index stability under concurrent execution.

4. **Event-Driven Operational Scaling Protocol**
   * **Why:** Roadshows, campaigns, mass emails, and QR-code launches create traffic spikes beyond tested baseline thresholds.
   * **Who decided:** Rama Moorthy and Business Stakeholders.
   * **Impact:** Established an operational operating rule: business teams must give advance notice to the Compass infra team before major marketing or onboarding events so cloud resources can be pre-scaled.

5. **Post-Execution Performance Reporting & Alerting Transparency**
   * **Why:** Clarified confusion around whether performance tests run continuously in production versus periodic test cycles.
   * **Who decided:** Rama Moorthy.
   * **Impact:** Load tests will not run continuously in production. The delivery team will configure production telemetry and operational alerts, and share formal test run reports after each execution cycle.

---

## Items Still Open & Unresolved

1. **Formal Business Approval of SLO Thresholds**
   * **Status:** ❓ Pending.
   * **The Gap:** The proposed 2-second (baseline) and 3-second (stress) response thresholds are based on engineering judgement and past project precedent, not formal public sector digital standards, PSD user experience commitments, or user research data. Xian Zhang asked why P99 is used for baseline while P95 is used for stress. Formal business sign-off is on hold until Rama provides architectural justification.

2. **AI Resume Upload & Competency Inference Exclusion**
   * **Status:** ❓ Pending (High Risk).
   * **The Gap:** The most computationally expensive and visible user flow (uploading a resume and generating competency inferences via CAE/AI) was explicitly excluded from the current test criteria because acceptance targets are still being negotiated with the AI team.

3. **Validation of OTG-Derived Concurrency Model**
   * **Status:** ❓ Open for Review.
   * **The Gap:** Baseline sizing assumes peak OTG DAU of ~700 distributed across business hours, bumped to 100 users per 15 minutes. This ignores launch-day burst dynamics, campaign surges, and hourly peak concentrations. Granular hourly traffic distribution data was requested.

4. **Journey Distribution Percentages**
   * **Status:** ❓ Open for Stakeholder Feedback.
   * **The Gap:** Journey allocations across modules (10%, 4%, etc.) are engineering guesses because no production usage history exists yet. Stakeholders must review the Confluence breakdown and challenge unrealistic paths.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|:---:|:---:|:---:|
| Finalise SLO proposal and threshold justifications after input from architecture team | Rama Moorthy | 17 Sep 2026 | 🔴 High | Open |
| Define performance success criteria and latency targets for AI resume-upload and competency inference | Delivery Team + AI/CAE Team | 22 Sep 2026 | 🔴 High | Open |
| Share Confluence page detailing journey distribution models, percentages, and endpoint mappings | Rama Moorthy | 16 Sep 2026 | 🔴 High | Open |
| Review proposed journey percentages and provide feedback based on anticipated user workflows | Business Stakeholders (Xian Zhang, Christopher) | 19 Sep 2026 | 🟡 Medium | Open |
| Send formal written response closing prior email thread on 2-character search support | Rama Moorthy | 16 Sep 2026 | 🟡 Medium | Open |
| Circulate final updated performance testing proposal to stakeholders for formal sign-off | Rama Moorthy | 21 Sep 2026 | 🟡 Medium | Open |

---

## Critical Risks & Analysis

### 1. Launch Surge Mismatch (Amber)
* **Trigger:** Extrapolating baseline concurrency from historical OTG steady-state usage (~700 DAU).
* **Risk:** CareerCompass is a new product launch supported by agency comms and onboarding drives. Concentrated bursts will likely exceed a flat 100 users per 15 minutes.
* **Mitigation:** Run breakpoint testing past 1,200 users to identify system degradation limits before launch, and formalize the campaign pre-notification protocol.

### 2. Lack of Business-Approved SLOs (Amber)
* **Trigger:** Business stakeholders have not formally endorsed 2-second and 3-second response targets.
* **Risk:** If the platform slows down to 2.8 seconds during pilot rollout, business leadership may view it as an operational failure even if engineering marks it as passing.
* **Mitigation:** Rama to benchmark proposed numbers against GovTech Digital Service Standards and PSD operational expectations before asking for sign-off.

### 3. The AI Processing Black Hole (Amber/Red)
* **Trigger:** Complete exclusion of resume upload and competency extraction from this performance round.
* **Risk:** This is the flagship user onboarding hook. If the CAE/AI pipeline times out or queues heavily under 50 concurrent uploads, user sentiment will drop immediately on day 1.
* **Mitigation:** Carve out a separate dedicated performance testing sprint with the AI/CAE squad before MVP launch to stress-test file parsing and inference latency.

### 4. Manual Event Notification Dependency (Amber)
* **Trigger:** Relying on agency business teams to remember to notify infra before marketing roadshows or blast emails.
* **Risk:** Unannounced comms blasts will cause traffic spikes that overwhelm un-scaled pods, leading to user-facing 504 gateway errors.
* **Mitigation:** Establish an automated operational notification checklist inside the GTM launch playbook.

---

## Readiness Assessment & Confidence Summary

| Area | Confidence | Rationale |
|---|:---:|---|
| **Test Methodology & Tooling** | 🟢 High | Clear differentiation between baseline, stress, breakpoint, and endurance tests. Scripting framework is sound. |
| **Operational Alerting & Monitoring** | 🟢 High | Alignment reached on telemetry, log aggregation, and breach alerts. |
| **Operational Scaling Approach** | 🟢 High | Clear agreement that infra will pre-scale for announced campaigns. |
| **Baseline Traffic Modeling** | 🟠 Medium | Numbers are educated guesses derived from OTG rather than launch dynamics. Needs hourly profiling. |
| **SLO Target Rationale** | 🟠 Medium | 2s/3s thresholds lack formal policy or user research backing. |
| **AI Journey Performance Targets** | 🔴 Low | Resume parsing and competency inference are completely unmeasured and unscripted in this cycle. |
| **Business Sign-Off Readiness** | 🟠 Medium | Stakeholders understand the technical mechanics, but will not sign off until numbers are justified. |

---

## Next Steps & Immediate Follow-Ups

1. **Immediate (This Week):**
   * Rama to publish the Confluence page with detailed journey weights and distribute it to Xian Zhang and Christopher.
   * Rama to close the 2-character search query loop via email.
   * Product and Delivery teams to engage the AI/CAE squad to define initial latency guardrails for resume uploads.

2. **Next Week:**
   * Business stakeholders to submit comments on journey allocations.
   * Architecture team to review and endorse the revised SLO rationale.
   * Target formal sign-off of the performance testing charter by 21 Sep 2026.
