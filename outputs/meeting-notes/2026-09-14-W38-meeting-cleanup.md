# Meeting Cleanup: Monday, 14 September 2026 (W38)

**Date:** 2026-09-14  
**Compiled By:** Michelle Yip  
**Scope:** Consolidating all three strategic, architectural, and operational alignment sessions held on Monday, 14 September 2026.  

---

## Quick Stats

* **Meetings Processed:** 3
* **Total Time in Meetings:** 3 hours 45 minutes
* **Total Decisions Logged:** 15
* **Consolidated Action Items:** 14 (after deduplication)
* **Major Governance Locks:** Cut custom ATS build, cut live seat counters (`F-18`) and attendance rosters (`F-22`), locked 100-user baseline load, surfaced AI resume upload testing gap.

---

## Meeting 1: Bi-Weekly Sync with Adrian Ang (10:15 to 11:00am)

**Attendees:** Adrian Ang, Michelle Yip  
**Context:** [Meeting Notes](file:///Users/michelleyip/Documents/PM-OS/outputs/meeting-notes/2026-09-14-W38-adrian-bi-weekly-meeting.md)  

### Summary
* Locked a clear scope cut-line: if velocity slips or integration gets messy, Internal Jobs and Secondments fall back strictly to read-only ingestion (`F-23`), protecting core Gig, STIPs, and Rotation application flows.
* Killed the idea of building an isolated back-office portal; agreed to evaluate three integration options for agency HR posting and shortlisting (Workable via OGP, GDP products, and SMGS).
* Confirmed 4-tier Role-Based Access Control (RBAC) governance across all opportunity types and established that agencies managing selections internally will use standardized form handoffs.

### Decisions
* **Scope cut fallback:** Internal Jobs and Secondments drop to pure ingestion if delivery runway is pressured. (Owner: Adrian Ang, Michelle Yip)
* **Internal agency processing:** CareerCompass will standardize intake and push applicant packets to agencies managing selections internally. (Owner: Adrian Ang)
* **RBAC governance:** Enforce the 4-tier access model (Public Officer, Line Manager/Evaluator, Agency HR POC, Central Super Admin). (Owner: Adrian Ang, Michelle Yip)
* **Tri-track integration study:** Evaluate Workable (Option 1), GDP (Option 2), and SMGS (Option 3) before committing architecture. (Owner: Adrian Ang, Michelle Yip)

### Action Items

| Action | Owner | Deadline | Priority |
|---|---|:---:|:---:|
| Schedule Workable discovery sync with Daryl Snow (OGP PM) on CUMULUS and API fit. | Michelle Yip | 18 Sep 2026 | 🔴 High |
| Update Master PRD Sections 2.3 and 3.3 with the ingestion-only scope cut contingency. | Michelle Yip | 15 Sep 2026 | 🔴 High |
| Review SMGS form schemas and shortlisting assets with Tan Pow Hwee. | Michelle Yip | 20 Sep 2026 | 🟡 Medium |
| Assess GDP product capabilities for application states and shortlisting. | Michelle Yip | 22 Sep 2026 | 🟡 Medium |
| Document form handoff protocol for agencies managing selection internally. | Michelle Yip | 23 Sep 2026 | 🟢 Low |

**Follow-up:** Reconnect with Adrian on Monday, 28 Sep 2026 to review discovery findings and pick the integration option.

---

## Meeting 2: R1 Opportunities Discovery & Architecture Jam (1:00 to 3:00pm)

**Attendees:** Adrian Ang, Barry Lim, Li Ting Kway, Michelle Yip  
**Context:** [Meeting Notes](file:///Users/michelleyip/Documents/PM-OS/outputs/meeting-notes/2026-09-14-W38-r1-opportunities-jam.md)  

### Summary
* Completely rejected building a custom ATS inside CareerCompass. Rebuilding SMGS or duplicating central Workable capabilities would derail the 5.5-sprint runway.
* Adopted a two-bucket model: CareerCompass owns discovery across all opportunities, keeping STIPs & Gigs lightweight via standardized FormSG templates, while routing CV-based formal roles (SJR, Secondments, Internal Jobs) to Workable long-term.
* Flagged 4 structural FormSG limitations (tracking black hole, schema fragmentation, lack of two-way webhooks, disconnected UX), cutting live seat counters (`F-18`) and attendance rosters (`F-22`) from R1.

### Decisions
* **Zero custom ATS build:** CareerCompass will not build multi-round pipelines, evaluation scorecards, or bulk candidate management. (Owner: Barry Lim, Adrian Ang)
* **Workable as long-term ATS:** Formal roles (SJR, Secondments, Internal Jobs) route to Workable as the central Whole-of-Government ATS pilot. (Owner: Adrian Ang, Barry Lim)
* **CareerCompass is the discovery layer:** Position the product as the unified front door for public sector mobility, leaving back-office workflows to dedicated tools. (Owner: Michelle Yip, Adrian Ang)
* **STIPs & Gigs remain lightweight:** Deliver STIPs and Gigs through centrally governed FormSG templates rather than custom in-app pipelines. (Owner: Michelle Yip, Barry Lim)
* **Strict field standardization:** Lock application forms to fixed profiles; reject dynamic custom form builders per agency. (Owner: Barry Lim, Li Ting Kway)
* **Pre-architecture alignment:** Clarify Workable tenant sharing rules with C@G and Workforce Development before locking database models. (Owner: Barry Lim, Michelle Yip)

### Action Items

| Action | Owner | Deadline | Priority |
|---|---|:---:|:---:|
| Run Workable technical discovery (endpoints, webhooks, CUMULUS fit) with Daryl Snow. | Tech Lead / Barry Lim (Michelle provides PM context) | 22 Sep 2026 | 🔴 High |
| Align with C@G Workable team on single-tenant vs separate instance feasibility. | Barry Lim | 25 Sep 2026 | 🔴 High |
| Lock STIPs & Gigs FormSG schema (5 fixed fields + 1 optional text) with WD. | Michelle Yip, Li Ting Kway | 23 Sep 2026 | 🔴 High |
| Define CV encryption, storage, and 90-day auto-deletion policy. | Tan Pow Hwee, GovTech Sec POC | 02 Oct 2026 | 🟡 Medium |
| Publish formal two-horizon roadmap separating R1 interim flows from long-term Workable. | Michelle Yip, Adrian Ang | 28 Sep 2026 | 🟡 Medium |

**Follow-up:** Bring the two-horizon roadmap and Workable tenant recommendations to the 28 Sep leadership sync.

---

## Meeting 3: CareerCompass Performance Testing: Proposed SLOs & Journey Distribution (4:00 to 5:00pm)

**Attendees:** Rama Moorthy, Xian Zhang Guo, Christopher Woo, Michelle Yip, Engineering & Architecture reps  
**Context:** [Meeting Notes](file:///Users/michelleyip/Documents/PM-OS/outputs/meeting-notes/2026-09-14-W38-careercompass-perf-testing-slos-alignment.md)  

### Summary
* Rama aligned stakeholders on core testing methodology (baseline, stress, breakpoint, endurance) and confirmed that 100% of simulated users hit login during ramp-up before splitting across downstream modules.
* Business stakeholders (Xian Zhang and Christopher) pushed back on the lack of empirical evidence: baseline concurrency is derived from flat OpenTechGov (OTG) daily active users rather than launch surges, and the 2-second/3-second thresholds lack formal government benchmarks.
* Highlighted an operational and technical gap: the computationally heavy AI resume upload and competency inference path is entirely excluded from this test round, and formal business sign-off on SLOs is on hold.

### Decisions
* **Baseline and endurance test parameters locked:** Baseline runs at 100 virtual users over 15 minutes; endurance runs at 100 concurrent users over 8 hours; stress pushes to 1,000 to 1,200+ users. (Owner: Rama Moorthy)
* **100% login during ramp-up confirmed:** Clarified that all simulated users run through Keycloak authentication during ramp-up; percentage allocations apply only downstream. (Owner: Rama Moorthy, Michelle Yip)
* **2-character search queries supported in test:** Short search strings will be included in scripts to verify database indexing stability. (Owner: Rama Moorthy)
* **Event-driven scaling protocol:** Business teams must give advance notice to the Compass infra team before major marketing or onboarding events so cloud resources can be pre-scaled. (Owner: Rama Moorthy, Business Stakeholders)
* **Telemetry and post-execution reporting:** Confirmed that tests will not run continuously in production; operational teams will rely on telemetry and alert notifications, with formal reports shared post-test. (Owner: Rama Moorthy)

### Action Items

| Action | Owner | Deadline | Priority |
|---|---|:---:|:---:|
| Finalise SLO proposal and threshold justifications after input from architecture team. | Rama Moorthy | 17 Sep 2026 | 🔴 High |
| Define performance success criteria and latency targets for AI resume-upload and competency inference. | Delivery Team + AI/CAE Team | 22 Sep 2026 | 🔴 High |
| Share Confluence page detailing journey distribution models, percentages, and endpoint mappings. | Rama Moorthy | 16 Sep 2026 | 🔴 High |
| Review proposed journey percentages and provide feedback based on anticipated user workflows. | Business Stakeholders (Xian Zhang, Christopher) | 19 Sep 2026 | 🟡 Medium |
| Send formal written response closing prior email thread on 2-character search support. | Rama Moorthy | 16 Sep 2026 | 🟡 Medium |
| Circulate final updated performance testing proposal to stakeholders for formal sign-off. | Rama Moorthy | 21 Sep 2026 | 🟡 Medium |

**Follow-up:** Revisit formal SLO sign-off after Rama distributes the Confluence page and architectural justification.

---

## Consolidated Master Action Items

Deduplicated and aligned across all three sessions:

| # | Action Item | Source | Owner | Deadline | Priority |
|:---:|---|---|---|:---:|:---:|
| 1 | Update Master PRD Sections 2.3 & 3.3 to lock ingestion fallback and cut custom ATS scope. | Adrian Sync | Michelle Yip | 15 Sep 2026 | 🔴 High |
| 2 | Connect with Daryl Snow (OGP PM) for Workable API discovery and CUMULUS alignment. | Both (M1, M2) | Michelle Yip (intro) / Tech Lead & Barry (tech) | 18 Sep 2026 | 🔴 High |
| 3 | Lock STIPs & Gigs FormSG schema (5 fixed fields + 1 optional prompt) with WD policy team. | Jam 2 | Michelle Yip, Li Ting Kway | 23 Sep 2026 | 🔴 High |
| 4 | Clarify C@G Workable tenant sharing rules and whitelisting constraints. | Jam 2 | Barry Lim | 25 Sep 2026 | 🔴 High |
| 5 | Finalise SLO proposal and threshold justifications after architecture input. | Perf Align | Rama Moorthy | 17 Sep 2026 | 🔴 High |
| 6 | Define performance success criteria and latency targets for AI resume upload. | Perf Align | Delivery Team + AI/CAE Team | 22 Sep 2026 | 🔴 High |
| 7 | Share Confluence page detailing journey distributions and endpoint mappings. | Perf Align | Rama Moorthy | 16 Sep 2026 | 🔴 High |
| 8 | Send formal written response closing prior email thread on 2-character search support. | Perf Align | Rama Moorthy | 16 Sep 2026 | 🟡 Medium |
| 9 | Review SMGS form schemas and shortlisting mechanics with Tan Pow Hwee. | Adrian Sync | Michelle Yip | 20 Sep 2026 | 🟡 Medium |
| 10 | Review proposed perf testing journey percentages on Confluence. | Perf Align | Business Stakeholders (Xian Zhang, Christopher) | 19 Sep 2026 | 🟡 Medium |
| 11 | Assess GDP product capabilities for application states and shortlisting. | Adrian Sync | Michelle Yip | 22 Sep 2026 | 🟡 Medium |
| 12 | Publish two-horizon roadmap (R1 interim FormSG vs long-term Workable) for leadership review. | Jam 2 | Michelle Yip, Adrian Ang | 28 Sep 2026 | 🟡 Medium |
| 13 | Circulate final performance testing proposal for formal business sign-off. | Perf Align | Rama Moorthy | 21 Sep 2026 | 🟡 Medium |
| 14 | Define CV retention, encryption, and 90-day auto-deletion rules for candidate pack downloads. | Jam 2 | Tan Pow Hwee, GovTech Sec POC | 02 Oct 2026 | 🟡 Medium |

---

## Waiting On Others

| Person / Team | Owes What | By When | Blocks |
|---|---|:---:|---|
| **Rama Moorthy** | Confluence breakdown of journey percentages and SLO threshold justification narrative. | 16 Sep 2026 | Business stakeholder sign-off on performance test baseline. |
| **Delivery + AI/CAE Team** | Latency benchmarks and acceptance criteria for resume parsing and competency inference. | 22 Sep 2026 | Completing performance coverage for the onboarding flow. |
| **Daryl Snow (OGP PM)** | Workable API specs, webhook support, and CUMULUS integration roadmap. | 18 Sep 2026 | Architecture option selection and Sprint 1 backend planning. |
| **C@G Workable Team** | Confirmation whether CareerCompass can share their Workable instance or needs a separate partition. | 25 Sep 2026 | Database schema design and HR login workflow. |
| **Workforce Development (WD)** | Sign-off on the 5 universal FormSG fields and cohort capacity rules. | 23 Sep 2026 | Li Ting's final UI designs for STIPs and Gigs. |
| **Business Stakeholders** | Feedback on Confluence journey distribution percentages. | 19 Sep 2026 | Locking final test script weights before execution. |
| **Tan Pow Hwee & Security POC** | Security architecture sign-off for CV encryption and 90-day purge rules. | 02 Oct 2026 | Engineering build of candidate pack download card (`F-11`). |

---

## Parking Lot (Questions & Ideas)

* **AI Resume Upload Latency:** What is the maximum acceptable wait time for an officer uploading a CV? If CAE takes 15 seconds, do we need an asynchronous status indicator or polling toast?
* **Launch Burst Modeling:** Should we model an hourly peak ratio (e.g. 3x to 5x standard daytime volume) to simulate marketing email blast surges?
* **Workable Licensing:** Who pays for agency HR seats if CareerCompass routes hiring managers into Workable? Does this sit under C@G's contract or a new CareerCompass line item?
* **WD Policy Mandate:** Can WD mandate that agencies close out STIPs and Gigs so officers get completion records on their profiles? Without policy backing, platform tracking remains incomplete.
* **FormSG Webhook Roadmap:** Will the FormSG team build real-time webhooks in 2027? If so, we can revisit live seat counters (`F-18`) in R2.

---

## Cross-Meeting Intelligence

### Recurring Topics & Strategic Alignment

* **[HIGH] Guesswork vs Evidence in Decision-Making:** Surfaced in both the Opportunities PRD jam and the Perf Testing alignment. In the morning and afternoon, the team tackled whether WD can enforce completion policies and whether agencies will use FormSG. At 4:00pm, Xian Zhang and Christopher challenged that 100 users/15 min and 2s/3s thresholds are based on engineering intuition rather than empirical civil service data.
* **[HIGH] Kill Custom Tooling, Protect Core Scope:** Morning and afternoon locked zero ATS build inside CareerCompass. The perf testing session reinforced this same discipline: don't over-engineer continuous production testing; rely on standard telemetry and pre-scale for known events.
* **[NORMAL] FormSG vs Heavy Workflows:** Both afternoon sessions exposed the limits of current infrastructure: FormSG lacks webhooks (forcing out live seat counters), while the performance suite currently lacks CAE/AI test scripts (leaving the heaviest user flow unmeasured).

### Stakeholder Load

| Stakeholder | Open Action Items | Meetings Involved | Status |
|---|:---:|---|---|
| **Michelle Yip** | 5 | Adrian Sync, Jam 2, Perf Align | 15 Sep PRD update and 18 Sep Daryl Snow sync are critical path. |
| **Rama Moorthy** | 4 | Perf Align | High operational urgency (Confluence page due 16 Sep, SLO rationale due 17 Sep). |
| **Barry Lim** | 2 | Jam 2 | Architecture gates (C@G sync and Workable tech review). |
| **Tan Pow Hwee** | 2 | Adrian Sync, Jam 2 | SMGS asset review and security retention rules. |
| **Li Ting Kway** | 1 | Jam 2 | Focus locked on FormSG schema alignment and core discovery UI. |
| **Business Stakeholders** | 1 | Perf Align | Review Confluence journey model by 19 Sep. |

### Cross-Meeting Conflict & Refinement Check

* **Performance Window vs SLO Sign-Off:** The W37 planning meeting scheduled external performance testing to kick off on Tuesday 16 Sep. However, the 4:00pm meeting ended with formal SLO sign-off still pending and journey distributions open for feedback until 19 Sep. **Resolution:** Initial baseline scripting proceeds with Rama's 100-user model as planned, but formal pass/fail certification must wait until stakeholders review the Confluence justifications.
* **Workable Discovery Ownership:** Confirmed from morning/afternoon: Michelle handles stakeholder connection with Daryl Snow; Barry Lim and technical leads own endpoint evaluation.
