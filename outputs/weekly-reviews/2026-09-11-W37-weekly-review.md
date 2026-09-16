---
week: 2026-W37
week_start: 2026-09-07
week_end: 2026-09-11
quarter: Q3 2026
---

# Weekly Review: Week of September 7, 2026 (W37)

## TL;DR

Week 37 made a decisive transition from UAT integration into **pre-launch execution and critical-path testing**:
- **POCDEX Integration Signed Off:** Formally cleared UAT with **195 passed test cases** across 21 personas, with Last Updated Date freshness fields confirmed.
- **R1 Opportunities Accelerated & Locked:** What started as a blocked discovery track accelerated into a complete, locked **5.5-sprint MVP package** (8 RICE-ranked features). Grounded in the Gigs/SJR analysis (89% unrecorded outcomes, 90% churn), the FormSG operational boundary was cleanly drawn for Monday's 1:00 PM review with Adrian Ang.
- **Performance Testing Critical Path (15 to 17 Sep):** Methodology challenged and shifted toward first-wave agency sizing rather than legacy OTG baselines. Response criteria anchored in public sector tender standards.
- **VAPT Moving but Resourcing Ambiguous:** POs issued for CIE and POCDEX API, and AWS access provisioned, but technical triage and remediation ownership remain unassigned.
- **CIE Governance Void:** Sourced that CIE currently lacks an assigned Product Manager, creating an ACSO compliance risk.

---

## Top 3 Priorities Review

### Priority 1: Make the Employment-Lifecycle Descope Real and Communicated

**Planned:** Walk Adrian through the 3 Sep descope call, secure written confirmation, reset Huiting's testers on the obsolete 19 Oct date, and draft the formal decision document.

**Actual:** 
- POCDEX integration UAT formally signed off with 195 passing test cases.
- Freshness fields (Last Updated Date) confirmed on Officer, Employment, and Job APIs.
- Formal decision document drafted on 10 Sep ([employment-lifecycle R1 scope](../analyses/2026-09-10-W37-employment-lifecycle-r1-scope.md)), isolating double-hatting and edge cases to R1.x.
- Downstream review of Employment Profile Changes API semantics continues with Rama and POCDEX technical leads.

**Status:** ✅ Complete. The descope boundary is established and documented.

**Learning:** When a complex data integration risks stalling an MVP, cutting the automated machinery in favor of an observation window in production is the right call. The key is communicating the reset early so testing teams do not prepare against phantom milestones.

---

### Priority 2: Protect a Clean VAPT Start

**Planned:** Confirm NCS infrastructure access, POCDEX endpoint folding, CIE retraining scope, and reconcile test schedules before the assessment window opens.

**Actual:** 
- Two Purchase Orders formally issued: CIE (`PMOPSDEPO26000432`) and POCDEX API (`PMOPSDEPO26000433`).
- AWS console access and security roles provisioned for the POCDEX VAPT.
- Daily VAPT sync operationalized on the calendar.
- Assessment start shifted to 14 Sep. However, clear technical personnel ownership remains unresolved, flagged explicitly by Christopher.

**Status:** 🟡 Partial. Procurement and environment access are cleared; personnel staffing and triage ownership remain the open risk.

**Learning:** Procurement readiness does not equal operational readiness. Having signed POs and provisioned AWS roles is useless if there is no named engineer accountable for triaging findings during the compressed pre-launch window.

---

### Priority 3: Scope the Minimum MVP Error-View

**Planned:** Draft a one-page specification defining how Business Owners will see data errors (email collisions, missing mappings, stale transfers) without automated handling.

**Actual:** 
- Folded into the broader **Data Readiness for Compass Go-Live** exercise launched by Rama on 7 Sep.
- Adrian established the release dependency chain: complete VAPT and performance testing first, then validate the production dataset.
- The immediate operational deliverable shifted to the **OTG performance test data file**, which gates the 12 to 14 Sep weekend production data load.

**Status:** 🟡 Partial. Re-sequenced behind performance testing and go-live data validation.

**Learning:** Avoid designing admin error-views in isolation when the wider engineering squad is wrestling with production dataset reconciliation. Sequence data visibility alongside the master data readiness checklist.

---

## Key Breakthrough of the Week: CareerCompass R1 Opportunities

While the original W37 plan expected R1 Opportunities to remain stalled in discovery, the initiative experienced rapid acceleration:

1. **Empirical Data Anchor:** Synthesized cross-program analysis from the Gigs and SJR workbooks:
   - 89% of SJR postings have no recorded outcome, proving the platform suffers from a broken measurement till.
   - 90% candidate churn (only 10% repeat applicants) caused by weeks of silence.
   - Serial applicant distortion: 1 officer submitted 112 applications in 2026, and 11 officers drove 39% of 2025 applications due to missing grade gates.
2. **Lean Governance:** Dropped the approving moderator workflow after confirming zero policy requirement in Gigs or SJRs.
3. **The FormSG Boundary:** Leveraged Workforce Development's adaptable FormSG template for lightweight STIPs/Gigs, reserving native CV upload and status tracking in Compass for substantive roles (SJRs, Internal Jobs, Secondments).
4. **Locked 5.5-Sprint Scope:** Packaged 8 RICE-ranked features and 4 core strategic trade-offs into an executive brief for Monday's 1:00 PM review with Adrian Ang and Li Ting Kway.

---

## Key Decisions Made This Week

1. **POCDEX Integration UAT Sign-Off:** Formally approved based on 195 passing test cases across 21 reference personas. (Owner: Rama Moorthy, POCDEX Squad)
2. **Performance Criteria Tender Benchmarking:** Rejected arbitrary 2-second thresholds; performance testing criteria must benchmark against public sector tender standards and OTG data. (Owner: Michelle Yip, Rama Moorthy)
3. **Decouple Performance Workloads:** Isolated Search, Filter, Browse, and Pagination into independent pipelines for clearer bottleneck detection. (Owner: Engineering Squad)
4. **Lock R1 Opportunities at 5.5 Sprints:** Bound the R1 MVP to 8 features, rejecting complex custom form builders and multi-tier ATS stages. (Owner: Michelle Yip)
5. **Split Opportunity Apply Journey:** Adopt WD FormSG template for gigs; build native CV upload and tracking in Compass for substantive long-hour roles. (Owner: Michelle Yip)
6. **Drop Approving Moderator Workflows:** Confirmed zero policy need; hiring agency HR and posting managers decide directly. (Owner: Michelle Yip)
7. **One-Way Outbound Link Model for OTG:** OTG links out directly to Compass application routes; rejected bi-directional data synchronization. (Owner: Michelle Yip)
8. **Defer Platform-Wide Search Overhaul:** Multi-field query (agency + title) enabled for MVP; platform-wide search rebuilds deferred post-MVP to be guided by PostHog data. (Owner: Michelle Yip)
9. **Prioritize Keycloak Event Logging for ABLR:** User activity audit logs prioritized for onboarding compliance. (Owner: Engineering Squad)

---

## Top 3 Learnings

1. **Fix the till before pushing top-of-funnel reach.** The Gigs/SJR analysis proved that 89% of SJR postings end with unrecorded outcomes and 90% of applicants never return. Driving top-of-funnel acquisition into a broken system merely scales user disappointment. R1's focus on basic candidate status management and early rejection is the exact structural fix needed.
2. **Pragmatic boundary drawing beats building form builders.** When agencies asked for infinite custom questions, the instinct was to scope a form builder. Discovering that WD already provides an adaptable FormSG template for micro-gigs allowed us to draw a clean line: let gigs use FormSG, while Compass natively solves the substantive blocker (CV upload and tracking for SJRs and Jobs).
3. **Infrastructure readiness does not equal execution readiness.** Having purchase orders issued, AWS accounts active, and test environments online creates a false sense of security. Without named owners accountable for triaging VAPT findings or driving Day 2 support runbooks, governance gates remain blocked.

---

## Week-End Status Board

| Workstream | Status | Summary Commentary |
|---|---|---|
| **POCDEX Integration** | 🟢 Green | Formally signed off in UAT (195 test cases, 21 personas); Last Updated Date confirmed. |
| **R1 Opportunities Scope** | 🟢 Green | 5.5-sprint MVP boundary locked across 8 features; ready for Monday executive review. |
| **VAPT Readiness** | 🟡 Amber | POs issued and AWS access active; 14 Sep kickoff planned, but staffing ownership open. |
| **Performance Testing** | 🟠 Amber | 15 to 17 Sep window fixed; methodology, endurance, and dependency commitments require final lock. |
| **Day 2 Operations** | 🟠 Amber | Critical path for ACSO/GovAssure; triage protocols, runbooks, and SOPs not yet evidenced. |
| **CIE Governance** | 🔴 Red | No assigned Product Manager; risk assessment and ACSO evidence collection at risk. |
| **Go-Live Data Readiness** | 🟡 Amber | Ingestion sets identified; validation correctly sequenced post-VAPT and perf testing. |

---

## Next Week Preview (W38 Priorities)

1. **Lock Performance-Test Methodology & Execute (15 to 17 Sep):** Align workload models against tender standards, confirm dependency test windows, and execute the test runs.
2. **Secure Executive Alignment on R1 Opportunities (14 Sep, 1:00 PM):** Walk Adrian Ang and Li Ting Kway through the 5.5-sprint scope boundary and trade-offs to greenlight engineering for mid-November.
3. **Close VAPT & CIE Resource Ownership Gaps:** Formally assign VAPT triage owners and escalate the CIE Product Manager vacancy to PSD leadership.
4. **Advance Day 2 Operations Framework:** Partner with Jace Tan to adapt SGEMS production support models into a concrete incident escalation and support runbook by 18 Sep.
