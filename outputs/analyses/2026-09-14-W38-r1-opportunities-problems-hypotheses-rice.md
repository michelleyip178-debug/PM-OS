# R1 Opportunities: Problem Synthesis, Hypotheses, and RICE Prioritization

**Document Type:** Strategic Synthesis & Prioritization Matrix  
**Date:** 2026-09-14 (Week 38)  
**Status:** Aligned in Architecture Jam (Adrian Ang, Barry Lim, Michelle Yip, Li Ting Kway)  
**Scope:** CareerCompass R1 Opportunities across the Four Opportunity Models (Project Gigs, Short-Term Immersions, Job Rotations, Public Sector Careers)  
**Authors:** Michelle Yip (PSD), Li Ting Kway (GovTech)  

---

## Executive Summary

This synthesis unpacks the operational problems across the four opportunity models in CareerCompass (Project Gigs, Short-Term Immersions, Job Rotations, and Public Sector Careers), mapping posters and applicants separately. Secondments are treated as a movement mechanism and badge under Job Rotations, while SJRs are a fixed-cycle program under Job Rotations. For each problem cluster, we define core hypotheses and map lightweight MVP features for R1 alongside strategic end-state solutions. A standardized RICE prioritization model ranks all candidate features to establish an objective scope baseline for the Monday 1:00 PM review.

---

## 1. Problem Synthesis by Role and Opportunity Type

### Matrix Overview: Posters vs Applicants

| Opportunity Type | Opportunity Poster Problems (HR, Line Managers, Admins) | Opportunity Applicant Problems (Public Officers) |
|---|---|---|
| **Opportunity Model 1: Project Gigs** *(Part-time micro-projects, 2w to 6mo, 10% to 30% workload)* | - **High posting friction:** Too many mandatory bureaucratic fields for a 10-hour to 2-week task.<br>- **Distribution & reach failure:** 46% of gig postings receive zero applicants.<br>- **Obsolete workflow fields:** Approving moderator ID is blank on 100% of applications all-time because there is zero policy need for central moderators in Gigs or SJRs; hiring teams decide directly.<br>- **Supervisor friction:** Posters struggle to confirm whether the applicant's direct manager actually approved the time commitment. | - **Supervisor anxiety:** Fear of applying because their line manager might perceive it as distraction from primary work.<br>- **Unclear time commitment:** Ambiguous expectations regarding workload split and deliverables.<br>- **Application drop-off:** Forced redirection to external forms for simple side-projects. |
| **Opportunity Model 2: Short-Term Immersions** *(Short-term immersions, < 2 weeks, cohort-based)* | - **High demand vs slot limits:** Immersions fill rapidly; manual roster tracking creates administrative overhead.<br>- **Manual attendance reconciliation:** Tracking whether officers attended requires chasing spreadsheet rosters across agencies.<br>- **HCS compliance burden:** Head of Civil Service demands annual training hour metrics, but outcomes remain unrecorded centrally. | - **Silent overflow rejections:** High demand creates massive silent rejection pools (+58% demand over supply, 2,355 rejected applicants without feedback).<br>- **Blind applications:** Officers apply to cohorts that are already at capacity without live seat visibility. |
| **Opportunity Model 3: Job Rotations & Secondments** *(Substantive roles, rotations/SJRs, and secondments)* | - **OTG Zero-CV Limitation:** Legacy OTG literally cannot accept or store CV uploads, forcing applicants to apply via cold emails to HR mailboxes or external Careers@Gov links.<br>- **Systemic unrecorded outcomes:** Because OTG was excluded from the CV transaction, 89% of SJR opportunities with applicants have no recorded outcome in 2026 (up from 86% in 2024). Placements are under-counted by ~89 placements/yr.<br>- **The IJR Failure:** Internal Job Rotation (IJR) is an isolated catastrophe (50 postings, 88% zero-applicant, only 5 applications all year), masked when folded into SJR.<br>- **Serial applicant noise:** Lacking grade gates, 1 single officer filed 112 applications in 2026, and 11 officers drove 39% of 2025 applications.<br>- **Resume fragmentation:** Managing candidate CVs in separate shared Outlook inboxes, FormSG responses, and spreadsheets.<br>- **Secondment tracking blackout:** Zero whole-of-government system markers for secondments; 100% of inter-agency secondment reporting is guessed retrospectively from payroll codes. | - **The "weeks of silence" & 90% churn:** 90% of applicants in 2026 are brand new (only 10% repeat rate). Zero post-submission feedback drives officers to churn permanently.<br>- **Eligibility & grade mismatch:** Grade criteria buried in unstructured text leads to wasted applications.<br>- **CV upload friction:** Officers re-type career history across multiple disconnected platforms.<br>- **Secondment right-of-return anxiety:** Fear that leaving parent agency causes loss of promotion tracks, bonuses, or return rights due to lack of standard terms disclosure (pure secondments have 74% zero-applicant rate, vs 36% for blended roles). |
| **Opportunity Model 4: Public Sector Careers** *(Central vacancies)* | - **Redundant posting effort:** Ministries maintain parallel job descriptions in Careers@Gov and intranet portals.<br>- **Siloed candidate pipeline:** Applicants on Careers@Gov do not flow into internal talent development profiles. | - **External redirect friction:** Navigating away from CareerCompass to external government job portals.<br>- **Duplicate profile entry:** Re-entering employment history already stored in internal civil service records. |

### 1.1 Empirical Marketplace Breakdown (`custom_gigs_report`, 2025, n=1,035 postings)

Classifying all 1,035 postings from the 2025 Opportunity Postings export by title-tag reveals the true distribution across schemes:

| Category | Postings | Zero-Applicant Rate | Applications | Distinct Applicants | Operational Reality |
|---|---|---|---|---|---|
| **SJR** | 294 (28%) | 22% | 733 | 120 | Active scheme; suffering from 89% unlogged outcomes. |
| **Job (generic `[JOB]`)** | 169 (16%) | 72% | 60 | 34 | Ambiguous tag; 72% zero-app; needs audit with Qiu Yan. |
| **Blended (Secondment+Job/Rotation)** | 137 (13%) | 36% | 129 | 48 | Structured rotation framing lifts take-up by 2x. |
| **Untagged** | 122 (12%) | 56% | 89 | 56 | Unmapped postings lost in search. |
| **Secondment (pure `[SECONDMENT]`)** | 106 (10%) | 74% | 44 | 27 | High anxiety over parent-agency return rights. |
| **Gig** | 50 (5%) | 76% | 21 | 20 | Thin title-tagged sample; 90%+ run off-platform on FormSG. |
| **IJR (Internal Job Rotation)** | 50 (5%) | 88% | 5 | 4 | Operational failure; agency-siloed with zero visibility. |
| **STIP** | 30 (3%) | 87% | 4 | 4 | Thin title-tagged sample; 4,056 vacancies ran off-platform. |
| **Other (20+ campaign tags)** | 61 (6%) | varies | ~35 | ~25 | PASTAP (19), PSFG (11), NLB (14), GCX Fest (5), etc. |
| **Test / Mockup / Trial** | 4 (<1%) | 50% | 2 | 2 | Admin test noise. |

---

## 2. Hypotheses and Feature Brainstorming

Each hypothesis links to lightweight MVP interventions (deliverable within R1) and long-term end-state capabilities (R2 through R4).

```
[Problem Space] ---> [Testable Hypothesis] ---> [Lightweight R1 Feature] (Immediate)
                                          ---> [End-State Feature] (Roadmap R2-R4)
```

### Opportunity Model 1: Project Gigs

#### Hypothesis H-1.1: Simplified Project Scoping
*If we give line managers a minimal 3-field posting flow (Scope, Weekly Hours, Duration), then posting volume will increase by 40%, because project posters avoid formal HR requisition forms for short immersions.*
- **MVP Feature (F-01):** *Quick Project Posting.* 3 required fields (project scope, weekly hours, duration), pre-set duration buckets (1 to 5 hrs/week), standard supervisor notice statement.
- **Long-Term Feature (F-02):** *AI Job Description Assistant.* Converts rough bullet points into structured project requirements and deliverables.

#### Hypothesis H-1.2: Supervisor Concurrence Assurance
*If we require applicants to check a verified "Supervisor Concurrence Acknowledgment" toggle upon applying, line managers will accept gig candidates faster, reducing supervisor objections by 70%.*
- **MVP Feature (F-03):** *Supervisor Courtesy Notification.* Checkbox confirming manager discussion, with automated courtesy notification email sent to supervisor upon submission.
- **Long-Term Feature (F-04):** *1-Click Manager Chat Endorsement.* Integrated manager approval workflow via email confirmation link or workplace chat prompt.

#### Hypothesis H-1.3: Re-Steering to Low-Applicant Gigs
*If we badge unfilled gigs with a "Needs Talent" indicator after 7 days, application distribution will normalize, cutting zero-applicant postings from 46% to under 20%.*
- **MVP Feature (F-19):** *Priority Spotlight for Unfilled Roles.* Search ranking boost and prominent card badge for postings without applicants.

---

### Opportunity Model 2: Short-Term Immersions

#### Hypothesis H-2.1: Cohort Cap Management Prevents Silent Rejections
*If immersion listings link directly to standardized Workforce Development FormSG templates with native response limits, overflow rejections will drop without requiring complex live webhook syncing in R1.*
- **R1 Operational Solution:** Outbound apply link to standardized FormSG template (5 fixed fields + max 1 misc field) configured with FormSG native submission caps to close cohorts automatically upon reaching capacity.
- **Long-Term Feature (F-18 · Deferred to R2):** *Real-Time Seat Availability Display.* Real-time seat counter on listing card with automated state change to "Session Full", pending future FormSG webhook or direct intake API architecture.

#### Hypothesis H-2.2: Host Attendance Reconciliation
*If host coordinators use standardized post-session FormSG attendee exports, training hour compliance can be reported to PSD without building custom in-portal attendance trackers in R1.*
- **R1 Operational Solution:** Host coordinators export FormSG attendee rosters and upload completion records directly to central training databases, eliminating dual-system logging.
- **Long-Term Feature (F-22 · Deferred to R2):** *Host Attendance Check-Off Roster.* On-screen candidate checklist in host view with instant CSV export for civil service metrics, evaluated in R2 once learning data pipes are established.

---

### Opportunity Model 3: Job Rotations & Secondments

#### Hypothesis H-3.1: Native CV Capture Ends External Forms
*If Compass captures a direct CV attachment during application, 100% of R1 pilot agency SJR postings will remain inside Compass, eliminating the operational need for FormSG workarounds.*
- **MVP Feature (F-05 · Committed S2-S3 · 1.0 sp):** *Direct Resume Attachment.* In-flow upload (PDF, max 5MB) attached directly to candidate submission with automated safety checks, stored securely in protected government cloud storage for batch export via F-11.
- **Long-Term Feature (Workable Adapter / F-06):** Automated CV forwarding into Workable central ATS via candidate write API (undetermined for now; Tech Lead / OGP TBD) and *Civil Service Resume Generator* (`F-06`).

#### Hypothesis H-3.2: 1-Click Candidate Pack Export Powers Out-of-House Selection
*If review panels receive all candidate resumes and metadata in a single organized folder in 1 click, offline review preparation time will fall by 60%, removing HR administrative friction while respecting the non-ATS product boundary.*
- **MVP Feature (F-11 · Committed S4 · 1.0 sp):** *1-Click Candidate Pack Download.* Single button in admin portal packaging all cohort resumes into a structured zip folder with a candidate summary CSV, enabling offline panel reviews and email notifications.
- **Long-Term Feature (F-07 · Deferred to R2):** *4-Stage Candidate Progress Tracker.* In-portal selection status tracking board, deferred to R2 to prevent building an unmaintainable mini-ATS inside Compass ahead of Workable central ATS deployment.
- **Future Horizon Feature (F-08):** *Panel Interview Scheduling & Scoring.* Multi-interviewer rubric evaluation and meeting coordination directly in-portal.

#### Hypothesis H-3.3: Structured Job Grade Curbs Serial Spray-and-Pray
*If job grade requirements are stored and displayed as a structured attribute, serial spray-and-pray applications (such as 1 officer filing 112 applications) and ineligible submissions will decrease by over 50%.*
- **MVP Feature (F-09 · Committed S3 · 0.5 sp):** *Seniority Fit Guidance.* Dedicated grade band on role cards with pre-submission mismatch advisory warning.
- **Long-Term Feature (F-10):** *Automated Seniority Eligibility Lock.* Central civil service grade verification that blocks out-of-grade submissions automatically.

#### Hypothesis H-3.4: Reviewer Handover Efficiency
*If HR administrators can package candidate dossiers instantly without manual drive downloads, screening coordination overhead is eliminated.*
- **MVP Feature (F-11 · Committed S4 · 1.0 sp):** Standardized zip pack compilation with candidate CSV summary.
- **Long-Term Feature (F-12):** *Side-by-Side Candidate Dossier Viewer.* Split-screen candidate viewer with side-by-side annotation and tagging.

#### Hypothesis H-3.5: SJR Cycle Rollover
*If unfilled SJR postings prompt HR with an automated rollover notice, unfulfilled host vacancies decrease without re-posting friction.*
- **R1 Operational Solution:** HR coordinators adjust closing dates manually in the admin portal.
- **Long-Term Feature (F-20 · Deferred to R2):** *Rotation Cycle Rollover Notice.* Automated notification banner offering 1-click rollover to open-market vacancies.

#### Hypothesis H-3.6: Secondment Mechanism Transparency & Central Discovery
*If secondments and formal permanent openings are surfaced in the unified catalog alongside internal rotations, cross-agency opportunity awareness increases without building custom multi-party approval software in Compass.*
- **R1 Operational Solution (F-23):** Read-only ingestion feed and outbound apply link to Careers@Gov (`careers.gov.sg`). Secondment applicants submit via existing agency ATS or C@G channels.
- **Long-Term Features (F-13, F-15, F-21 · Deferred to R2):** *Secondment Identification Badge*, *Secondment Rights & Terms Summary*, and *3-Party Secondment Progress Tracker*, evaluated once central ATS (Workable) and HRMS (CUMULUS) secondment policies are integrated.
- **Future Horizon Features (F-14, F-16):** *Inter-Agency Mobility Clearinghouse* and *Digital Tripartite Agreement Signing*.

#### Hypothesis H-3.7: SJR Scheme Scope Toggle & Public Transition
*If we provide an in-portal visibility and scheme scope toggle on Rotations (switching from Restricted SJR Cohort to Open Internal Job with 1 click without losing posting metadata or applicant history), then the re-posting abandonment rate for unfilled rotation vacancies will drop by 45%, and time-to-relist will drop from 3 days to under 1 minute, because agency HR does not have to recreate the vacancy from scratch in another system.*
- **MVP Feature (F-28 · Committed S3 · 0.3 sp):** *SJR-to-Internal-Job Scope Toggle.* 1-click toggle between Restricted SJR Cohort and Open Internal Job, relaxing grade check to standard civil service bands while preserving candidate history.
- **Long-Term Feature:** *Automated Civil Service Cross-Scheme Mobility Pipeline.* Dynamic talent matching and automatic cross-posting synchronization across all whole-of-government schemes.

---

### Category 0: Shared Platform Foundation & Access Control

#### Hypothesis H-0.1: Public Opportunity View & OTG Traffic Loop-Back
*If we build an unauthenticated Public Opportunity View with tracked referral deep links (`?ref=otg`) and an auth gate that preserves application state upon login, then 100% of candidate traffic from pilot agency OTG cross-postings will funnel directly into CareerCompass native application flow with zero drop-off, because non-logged-in officers can read job details before authenticating and are immediately dropped into the pre-filled application form upon login.*
- **MVP Feature (F-29):** *Public Opportunity View & Deep-Link Auth Callback.* Unauthenticated preview of role details + copyable OTG deep link (`?ref=otg`) + `redirect_uri` callback to active application modal.
- **Long-Term Feature:** *Universal Single Sign-On Direct Link.* Zero-click contextual pass-through authentication from all whole-of-government intranets.

#### Hypothesis H-0.2: Internal Agency Intake & Candidate Push Protocol
*If we provide a standardized intake form with an automated applicant dossier push (secure batch export and dispatch) for agencies that insist on handling selection internally, then pilot agency adoption resistance will drop to zero without requiring CareerCompass to build complex back-office evaluation software, because agency HR can capture candidates via CareerCompass's front-end while preserving their existing internal evaluation protocols.*
- **MVP Feature (F-30):** *Internal Agency Intake & Candidate Push Protocol.* Standardized applicant capture with automated package dispatch to agency HR POC.
- **Long-Term Feature:** *Direct Agency ATS API Gateway.* Bi-directional API pipeline pushing candidate dossiers directly into internal agency ERP/ATS databases.

---

### Category 4: CAREERS_AT_GOV (Central Openings)

#### Hypothesis H-4.1: Unified Directory Coexistence
*If Careers@Gov permanent openings are displayed in the unified catalog with clear outbound link-out badges, officers benefit from comprehensive discovery without duplicating external application processing.*
- **Platform Capability:** Read-only ingestion feed with external apply link-out to `careers.gov.sg`.

---

## 3. RICE Prioritization Framework

### Scoring Methodology and Rubric

To ensure consistency across features, metrics are evaluated on the following standardized scales:

$$\text{RICE Score} = \frac{\text{Reach} \times \text{Impact} \times \text{Confidence}}{\text{Effort}}$$

| Dimension | Scale Definition | Notes |
|---|---|---|
| **Reach** | Total officers or applications affected per annual cycle | Pilot 6 agencies scope: ~12,000 officers. Full civil service scope: ~120,000 officers. Postings: 150 to 500 roles. |
| **Impact** | 1 to 5 Scale | **5:** Massive (solves core blocker, stops platform desertion)<br>**4:** High (major efficiency gain or candidate anxiety relief)<br>**3:** Medium (measurable quality-of-life improvement)<br>**2:** Low (convenience improvement)<br>**1:** Minimal (niche utility) |
| **Confidence** | Percentage Scale | **90%:** High (validated by direct user interviews, quantitative data, or prototype test)<br>**70%:** Medium (strong qualitative consensus across multiple agencies)<br>**50%:** Low (directional assumption, unverified with end users) |
| **Effort** | Sprints (2-week sprint equivalent) | **0.5 sprint:** Extra Small (1 to 3 engineering days)<br>**1.0 sprint:** Small (1 full sprint, 1 engineer)<br>**2.0 sprints:** Medium (1 sprint, 2 engineers or cross-stack lift)<br>**3.0 sprints:** Large (multi-sprint full stack + design)<br>**5.0 sprints:** Extra Large (architectural lift, external integrations) |

### How to Interpret the RICE Score & The Denominator Nuance

RICE measures return on engineering investment: *where does one week of dev time create the biggest win for officers and HR?*

$$\text{RICE Score} = \frac{\text{Reach} \times \text{Impact} \times \text{Confidence}}{\text{Effort (Sprints)}}$$

#### Critical Nuance: The RICE Denominator Trap
Because RICE divides by effort, lightweight UI items (0.5 sprint) like Dedicated Browsing Tabs (`F-17`: 50,400) and Seniority Fit Guidance (`F-09`: 43,200) achieve massive numerical scores. While these provide high-ROI quick wins, **they are discoverability and hygiene safeguards, not the core product value proposition**. 

A marketplace lives or dies on its transactional core: an officer being able to attach a resume (`F-05`: 11,250) and receive timely candidate status feedback (`F-07`: 7,500). Direct Resume Attachment and the 4-Stage Candidate Progress Tracker form the non-negotiable operational spine of CareerCompass. RICE is used here as an investment guide, not an autopilot strategy.

#### Portfolio Tiers

| Tier | Score Range | Portfolio Role | Strategic Action & Rules | Example Features |
|---|---|---|---|---|
| **Tier 1: Platform "No-Brainers"** | **> 30,000** | Immediate Quick Wins | **Ship in Sprint 1 to 3.** High reach, 90% confidence, and tiny effort (0.3 to 0.5 sp). Enormous value left on the table if delayed. | **F-17** Dedicated Opportunity Browsing Tabs (50,400)<br>**F-09** Seniority Fit Guidance (43,200)<br>**F-28** SJR Scope Toggle (36,000) |
| **Tier 2: Core Operational Spine** | **10,000 to 20,000** | System Foundation | **Committed R1 Scope.** High-impact fixes (Impact 4 or 5) costing 0.5 to 1.0 sp that stop agencies defecting to FormSG. | **F-03** Supervisor Courtesy Notification (16,800)<br>**F-05** Direct Resume Attachment (11,250) |
| **Tier 3: High-Value Targeted Fixes** | **4,000 to 10,000** | Closing the Loops | **Committed R1 Scope (Sprints 1 to 4).** Solves acute pain for specific groups, or Impact 4 features needing 0.5 to 1.0 sp to build cleanly. | **F-01** Quick Project Posting (6,300)<br>**F-19** Priority Spotlight for Unfilled Roles (5,600)<br>**F-11** 1-Click Candidate Pack Download (5,400) |
| **Tier 4: The Deferred Trap & Architecture Cut-Lines** | **< 4,000 or Cut by Policy** | Effort Sinks & ATS Traps | **Defer to R2 to R4.** Ideas that sound great in meetings but fail the ROI test due to high dev cost (2 to 5 sp), low confidence, duplicate central ATS (Workable), or lack FormSG backend sync. | **F-07** 4-Stage Status Tracker (The ATS Trap · 1.5 sp)<br>**F-18** Real-Time Seat Availability (FormSG Webhook Gap · 1.0 sp)<br>**F-22** Host Attendance Check-Off (Post-Session Roster · 1.0 sp)<br>**F-20** Rotation Cycle Rollover (0.5 sp)<br>**F-13, F-15, F-21** Secondments (1.5 sp total · C@G Ingestion in R1)<br>**F-10** Automated Seniority Lock (6,300 · 2.0 sp)<br>**F-04** Manager Chat Endorsement (2,250)<br>**F-08** Panel Interview Scoring (2,250)<br>**F-12** Side-by-Side Dossier Viewer (840)<br>**F-02** AI Job Description Assistant (500)<br>**F-16** Digital Tripartite Signing (400) |

---

### 3.1 Strategic Re-Framing: Opportunity Types (Gigs, STIPs, Rotations, Jobs) & Locked 5.5-Sprint RICE Priority

Rather than presenting a fragmented checklist or an unconstrained backlog, the R1 MVP scope is locked across the primary public sector opportunity models to a hard capacity ceiling of **strictly 5.5 engineering sprints** (4.8 sp committed feature development + 0.7 sp hardening buffer):

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│             LOCKED R1 ROADMAP: 5.5 SPRINTS (SPRINT 1 TO 5.5)                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 0. SHARED DISCOVERY (0.5 sp · S1)                                                      │
│    • Dedicated Opportunity Browsing Tabs (F-17 · 0.5 sp)                               │
├─────────────────────────┬─────────────────────────────┬────────────────────────────────┤
│ 1. GIGS                 │ 2. STIPS                    │ 3. ROTATIONS & SJR             │
│ (1.5 sp · S1-S3)        │ (0.0 dev sp · S1-S2)        │ (2.8 sp · S2-S4)               │
├─────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ • Quick Project Post    │ • Cataloged in Tabs         │ • Direct PDF Upload (F-05)     │
│   (F-01 · 0.5 sp)       │   (F-17 · Shared)           │   (1.0 sp · S2)                │
│ • Supervisor Courtesy CC│ • Outbound Apply Link to    │ • Seniority Fit Warning (F-09) │
│   (F-03 · 0.5 sp)       │   WD Standardized FormSG    │   (0.5 sp · S3)                │
│ • Priority Spotlight    │   Template (5 fixed fields  │ • Scope Toggle (F-28)          │
│   (F-19 · 0.5 sp)       │   + max 1 misc field)       │   (0.3 sp · S3)                │
│                         │ • Host FormSG export roster │ • 1-Click Candidate Pack (F-11)│
│                         │                             │   (1.0 sp · S4)                │
├─────────────────────────┴─────────────────────────────┴────────────────────────────────┤
│ 4. SECONDMENTS & FORMAL JOBS (0.0 dev sp · Baseline Read-Only Ingestion)               │
│    • Central Openings Read-Only Ingestion Feed & Outbound Apply Link to C@G (F-23)     │
│    • Workable discovery scoped out of R1 build (central ATS discovery: TBD)            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 5. SPRINT 5 HARDENING & PILOT READINESS BUFFER (0.7 sp · S5 to 5.5)                    │
│    • Vulnerability scanning, file upload safety scans, pilot agency onboarding         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

#### Detailed Feature-to-Hypothesis Mapping Matrix (Committed 8 R1 Features · 4.8 sp Feature Dev)

##### 0. Shared Platform Discovery (Committed · 0.5 Sprint)

| Feature ID & Name | Opportunity Model | Problem & Baseline Metric | Testable Hypothesis Statement | User & Business Owner Experience | RICE Breakdown & Score | Hypothesis Validation Target |
|---|---|---|---|---|---|---|
| **F-17: Dedicated Opportunity Browsing Tabs** | Shared (Gigs / STIPs / Rotations) | **Catalog blindness:** Gigs, STIPs, and Rotations are dumped into one mixed catalog feed. Part-time gigs get lost under multi-month rotations. | **If** we separate opportunities into clear, dedicated tabs (*Gigs*, *STIPs*, *Rotations*, *Jobs*), **then** active browsing engagement will increase by 40%, **because** officers find relevant time commitments in seconds. | **Officers:** Click dedicated top-level tabs to filter by commitment type immediately.<br>**BOs:** Category-level analytics reveal which opportunity models attract the highest interest. | **R:** 7,000<br>**I:** 4<br>**C:** 90%<br>**E:** 0.5 sp<br>**RICE:** **50,400** | +40% unique click-through to opportunity detail cards within 30 days of launch. |

##### 1. Gigs: Project Gigs (Committed · 1.5 Sprints)

| Feature ID & Name | Opportunity Model | Problem & Baseline Metric | Testable Hypothesis Statement | User & Business Owner Experience | RICE Breakdown & Score | Hypothesis Validation Target |
|---|---|---|---|---|---|---|
| **F-01: Quick Project Posting** | Gigs | **Posting friction:** Posting a 10-hour side gig requires a multi-page formal HR requisition form, discouraging project leads from sharing tasks. | **If** we offer a 3-minute form with 3 simple fields (Scope, Weekly Hours, Duration), **then** gig posting volume will rise by 40%, **because** informal project leads can publish without bureaucratic delays. | **Posters:** Publish a project gig in 3 minutes via 3 structured fields.<br>**Officers:** Read bite-sized project scopes with clear weekly time commitments upfront. | **R:** 1,500<br>**I:** 3<br>**C:** 70%<br>**E:** 0.5 sp<br>**RICE:** **6,300** | +40% increase in active project gigs posted in Sprint 1 to 3. |
| **F-03: Supervisor Courtesy Notification** | Gigs | **Supervisor pushback anxiety:** Officers fear applying because they worry their line manager will see it as a distraction or object after they are selected. | **If** application forms include an acknowledgment checkbox and automated notification CC to direct supervisors, **then** applicant drop-off will fall by 30%, **because** expectations are clear. | **Officers:** Check a confirmation box: *"I have informed my direct supervisor."* An automated courtesy summary is sent to the manager.<br>**Posters:** Verified confidence that applicant managers support the commitment. | **R:** 4,000<br>**I:** 4<br>**C:** 70%<br>**E:** 0.5 sp<br>**RICE:** **16,800** | +30% application completion rate for part-time project gigs. |
| **F-19: Priority Spotlight for Unfilled Roles** | Gigs | **Uneven applicant distribution:** 46% of gig postings receive zero applicants, while popular roles receive dozens. | **If** listings with zero applicants are highlighted with a "Needs Talent" tag after 7 days, **then** zero-applicant roles will fall below 20%, **because** browsing traffic is directed to neglected postings. | **Officers:** See prominent "Needs Talent" callout banners on homepage and search results.<br>**Posters:** Postings that start slow receive automatic visibility boosts without manual bumping. | **R:** 2,000<br>**I:** 2<br>**C:** 70%<br>**E:** 0.5 sp<br>**RICE:** **5,600** | Zero-applicant postings drop from 46% to <20% across pilot agencies. |

##### 2. STIPs: Short-Term Immersions (0.0 dev sp in R1 · Standardized FormSG Redirect)

| Operational Capability | Opportunity Model | Problem Addressed | Delivery Mechanism in R1 | User & Business Owner Experience |
|---|---|---|---|---|
| **Standardized FormSG Application & Native Cap** | STIPs | Eliminates manual seat chasing and silent overflow rejections without requiring custom webhook pipelines in R1. | Shared Discovery Tab (`F-17`) with outbound apply button to standardized WD FormSG template (5 fixed profile fields + max 1 misc field) with FormSG native response caps. | **Officers:** Discover STIPs in dedicated tab; click apply to complete standardized FormSG.<br>**Hosts:** Cohort automatically closes upon reaching capacity; exports attendee roster post-session for HCS reporting. |

##### 3. Rotations & SJR: Substantive Developmental Postings (Committed · 2.8 Sprints)

| Feature ID & Name | Opportunity Model | Problem & Baseline Metric | Testable Hypothesis Statement | User & Business Owner Experience | RICE Breakdown & Score | Hypothesis Validation Target |
|---|---|---|---|---|---|---|
| **F-05: Direct Resume Attachment** | Rotations / SJR | **Portal abandonment to FormSG:** MDDI and ESG abandoned CareerCompass for FormSG because the portal lacked resume uploads and custom qualification questions. | **If** we support single PDF resume uploads with safety checks, **then** 100% of pilot agency postings will remain on CareerCompass, **eliminating** external form leaks. | **Officers:** Upload a resume PDF (max 5MB) directly in the application flow with instant virus scan badges.<br>**BOs:** Candidate records stay centralized, private, and secure within government cloud storage for batch export via F-11. | **R:** 2,500<br>**I:** 5<br>**C:** 90%<br>**E:** 1.0 sp<br>**RICE:** **11,250** | 100% native posting retention across 6 pilot agencies (0% defection to FormSG). |
| **F-09: Seniority Fit Guidance** | Rotations / SJR | **Serial spray-and-pray:** Lacking visible grade expectations, 1 officer submitted 112 applications across mismatched grades, overwhelming review panels. | **If** we display expected seniority tags and a gentle advisory warning on mismatch, **then** serial spam applications will fall by 50%, **because** expectations are transparent before submission. | **Officers:** See clear grade expectations (*Target: MX11-MX12*). A polite confirmation box appears if an out-of-grade officer clicks apply.<br>**BOs:** Review panels receive qualified candidate pools without locking out edge cases. | **R:** 6,000<br>**I:** 4<br>**C:** 90%<br>**E:** 0.5 sp<br>**RICE:** **43,200** | >50% decrease in out-of-grade applications across Job Rotations. |
| **F-28: SJR-to-Internal-Job Scope Toggle** | Rotations / SJR | **Re-posting abandonment:** Unfilled SJR roles are abandoned because converting them to open internal jobs requires recreating the vacancy in another system. | **If** HR has a 1-click toggle to switch from Restricted SJR Cohort to Open Internal Job, **then** time-to-relist will fall from 3 days to under 1 minute. | **HR:** Clicks toggle in admin view to widen grade criteria to standard civil service bands without re-posting.<br>**Officers:** Unfilled developmental vacancies stay discoverable. | **R:** 4,000<br>**I:** 3<br>**C:** 90%<br>**E:** 0.3 sp<br>**RICE:** **36,000** | Time-to-relist unfilled rotation vacancies drops from 3 days to <1 minute. |
| **F-11: 1-Click Candidate Pack Download** | Rotations / SJR | **HR panel prep fatigue:** HR coordinators spend 15 to 20 hours per month opening individual drive links to prepare interview packs for offline panels. | **If** HR can download all shortlisted resumes into a single organized desktop folder with 1 click, **then** interview preparation time will fall by 60%, **keeping** HR inside the portal. | **HR / Hiring Managers:** Click *"Download Shortlist Pack"*. The system packages all candidate resumes into a neat, standardized zip folder with a summary CSV.<br>**Review Panels:** Review clean candidate dossiers offline. | **R:** 1,500<br>**I:** 4<br>**C:** 90%<br>**E:** 1.0 sp<br>**RICE:** **5,400** | 60% reduction in HR time spent compiling candidate packs. |

##### 4. Secondments & Formal Jobs: Central Openings (0.0 dev sp in R1 · Read-Only Ingestion)

| Opportunity Capability | Problem Addressed | Delivery Mechanism in R1 | User & Business Owner Experience |
|---|---|---|---|
| **Careers@Gov Ingestion Feed & Outbound Link-Out (F-23)** | Ministry duplicate postings across multiple disconnected intranet sites. | Read-only automated feed ingestion with direct outbound apply links to `careers.gov.sg`. | **Officers:** Discover central permanent vacancies and inter-agency secondments in the unified CareerCompass search catalog.<br>**Agencies:** Zero dual-posting administration needed. |

---

##### Appendix: Deferred Features Hypothesis & Denominator Trap Analysis (14 Features)

| Feature ID & Name | Opportunity Model | Problem / Hypothesis Addressed | Why Deferred (The ATS Trap / Capacity Ceiling) | RICE Inputs & Score | Target Horizon |
|---|---|---|---|---|---|
| **F-07: 4-Stage Candidate Progress Tracker** | Rotations | In-portal candidate status tracking board (*Under Review, Shortlisted, Offered, Closed*). | **The ATS Trap:** Building an in-portal selection workflow violates non-ATS boundary and duplicates central ATS (Workable). Reviewers use `F-11` zip download + direct email in R1. | **R:** 2,500, **I:** 5, **C:** 70%, **E:** 1.5 sp<br>**RICE:** **5,833** | R2 Horizon (Workable Intake TBD) |
| **F-18: Real-Time Seat Availability Display** | STIPs | Live seat counter on listing card with automated session full state (`H-2.1`). | FormSG lacks webhook or write-back APIs to feed real-time capacity to Compass cards. STIP cohorts capped natively via FormSG response limits. | **R:** 4,000, **I:** 4, **C:** 50%, **E:** 1.0 sp<br>**RICE:** **8,000** | R2 Horizon (FormSG Webhook TBD) |
| **F-22: Host Attendance Check-Off Roster** | STIPs | On-screen candidate attendance checklist for HCS reporting (`H-2.2`). | Creates dual-system record-keeping without a backend data link to FormSG. Hosts reconcile attendee lists post-session via FormSG export. | **R:** 4,000, **I:** 3, **C:** 50%, **E:** 1.0 sp<br>**RICE:** **6,000** | R2 Horizon (Learning Sync TBD) |
| **F-20: Rotation Cycle Rollover Notice** | Rotations | Automated 1-click rollover alert 7 days before fixed cycle close (`H-3.5`). | Cut to respect the 5.5-sprint ceiling. HR coordinators manually adjust closing dates in R1. | **R:** 1,600, **I:** 2, **C:** 70%, **E:** 0.5 sp<br>**RICE:** **4,480** | R2 Horizon |
| **F-13: Secondment Identification Badge** | Secondments | Metadata flag distinguishing inter-agency secondments from rotations (`H-3.6`). | Secondments are cataloged via read-only C@G ingestion in R1. In-portal tagging deferred until Workable/CUMULUS policy sync. | **R:** 1,000, **I:** 3, **C:** 70%, **E:** 0.5 sp<br>**RICE:** **4,200** | R2 Horizon |
| **F-15: Secondment Rights & Terms Summary** | Secondments | Structured terms card detailing return rights and appraisal parity (`H-3.6`). | Policy disclosure requirements deferred to central Careers@Gov job descriptions in R1. | **R:** 1,000, **I:** 3, **C:** 70%, **E:** 0.5 sp<br>**RICE:** **4,200** | R2 Horizon |
| **F-21: 3-Party Secondment Progress Tracker** | Secondments | Visual multi-party workflow tracker across Parent, Host, and Candidate (`H-3.6`). | Complex multi-party workflow software exceeds R1 capacity and belongs in central civil service HRMS (CUMULUS) or Workable. | **R:** 1,000, **I:** 3, **C:** 70%, **E:** 0.5 sp<br>**RICE:** **4,200** | R2 Horizon |
| **F-10: Automated Seniority Eligibility Lock** | Rotations | Blocks out-of-grade applicants using automated central database queries (`H-3.3`). | Requires deep backend integration (2.0 sp). `F-09` solves 80% of the problem with a simple UI warning for just 0.5 sp. | **R:** 6,000, **I:** 3, **C:** 70%, **E:** 2.0 sp<br>**RICE:** **6,300** | R2 Horizon |
| **F-04: 1-Click Manager Chat Endorsement** | Gigs | Approves gig hours directly via Slack/Teams chat prompt (`H-1.2`). | Building chat bot integrations takes 2.0 sp and has unproven adoption. `F-03` courtesy email achieves the outcome for 0.5 sp. | **R:** 3,000, **I:** 3, **C:** 50%, **E:** 2.0 sp<br>**RICE:** **2,250** | R2 Horizon |
| **F-06: Civil Service Resume Generator** | Rotations | Auto-generates standard government CVs from profile data (`H-3.1`). | High formatting effort (3.0 sp). Direct PDF upload (`F-05`) already unblocks 100% of candidate applications. | **R:** 8,000, **I:** 3, **C:** 50%, **E:** 3.0 sp<br>**RICE:** **4,000** | R3 Horizon |
| **F-08: Panel Interview Scheduling & Scoring** | Rotations | Multi-interviewer rubric evaluation and calendar sync (`H-3.2`). | Heavy coordination tool (3.0 sp). Panels already coordinate schedules via Outlook/Google Calendar comfortably. | **R:** 4,500, **I:** 3, **C:** 50%, **E:** 3.0 sp<br>**RICE:** **2,250** | R3 Horizon |
| **F-12: Side-by-Side Candidate Dossier Viewer** | Rotations | In-browser split-screen CV reviewer with tagging (`H-3.4`). | Complex frontend document viewer (3.0 sp). `F-11` 1-Click zip download satisfies panel needs for R1. | **R:** 1,200, **I:** 3, **C:** 70%, **E:** 3.0 sp<br>**RICE:** **840** | R3 Horizon |
| **F-14: Inter-Agency Mobility Clearinghouse** | Secondments | Automated quota-balancing talent clearinghouse across ministries (`H-3.6`). | Requires complex civil service policy agreements and 5.0 sp of backend architecture. | **R:** 10,000, **I:** 4, **C:** 50%, **E:** 5.0 sp<br>**RICE:** **4,000** | R4 Horizon |
| **F-16: Digital Tripartite Agreement Signing** | Secondments | Paperless secondment contract signing via government digital signing (`H-3.6`). | 5.0 sp external digital signing security integration. Manual PDF signing is sufficient during pilot. | **R:** 1,000, **I:** 4, **C:** 50%, **E:** 5.0 sp<br>**RICE:** **400** | R4 Horizon |
| **F-02: AI Job Description Assistant** | Gigs | Converts informal chat notes into structured deliverables (`H-1.1`). | 3.0 sp LLM integration with low confidence (50%). A clean 3-field form (`F-01`) already makes posting fast. | **R:** 1,500, **I:** 2, **C:** 50%, **E:** 3.0 sp<br>**RICE:** **500** | R4 Horizon |

*Note on portfolio balance (Locked 5.5-Sprint Scope):*
- **Committed Feature Build:** 8 core features totaling 4.8 engineering sprints (Sprint 1 to 4.5).
- **Hardening & Readiness Buffer:** 0.7 engineering sprints (Sprint 5 to 5.5) dedicated to vulnerability assessments, file security checks, and pilot agency rollout.
- **Total R1 Capacity:** Strictly 5.5 engineering sprints. All candidate status tracking (`F-07`), live seat counts (`F-18`), on-screen attendance rosters (`F-22`), rollover automation (`F-20`), and secondment governance (`F-13`, `F-15`, `F-21`) are deferred to R2 to respect the non-ATS boundary and protect squad capacity.

### 3.2 Feature-by-Feature RICE Rationale, User Experience & Leadership Talking Points

#### Stage 1: Posting, Discovery & Scoping

* **F-01: Quick Project Posting (RICE: 6,300 | R: 1,500, I: 3, C: 70%, E: 0.5 sp)**
  * **User Experience:**
    * *Hiring Manager Experience:* Opens a clean 1-page form, completes 3 simple fields (deliverable scope, weekly hours, duration), and publishes in under 3 minutes without formal HR requisition paperwork.
    * *Officer Experience:* Sees bite-sized project scopes with weekly time commitments upfront, making it easy to decide if they can balance it alongside their core work.
  * **Leadership Talking Point:** For just 3 days of engineering effort in Sprint 1, we eliminate requisition friction for managers and jumpstart our project gig supply.

* **F-17: Dedicated Opportunity Browsing Tabs (RICE: 50,400 | R: 7,000, I: 4, C: 90%, E: 0.5 sp)**
  * **User Experience:**
    * *Officer Experience:* When navigating to Jobs and Opportunities, officers switch smoothly between two clear sub-tabs ("Projects & Rotations" and "Short-Term Immersions"). They can quickly find substantive rotations without wading through thousands of learning attachments.
    * *Hiring Manager Experience:* Posted projects remain prominently visible to interested officers rather than getting buried by high-volume training listings.
  * **Leadership Talking Point:** This is our highest-ROI feature across the platform. Touching all 7,000 officers with half a sprint of front-end effort, it fixes catalog discoverability immediately.

* **F-19: Priority Spotlight for Unfilled Roles (RICE: 5,600 | R: 1,000, I: 4, C: 70%, E: 0.5 sp)**
  * **User Experience:**
    * *Officer Experience:* Spots high-priority "Needs Talent" badges on technical projects that have no applicants yet, placed right at the top of search results. Officers looking to make an immediate impact are drawn to these opportunities.
    * *Hiring Manager Experience:* If no applications arrive after 7 days, the system automatically spotlights the listing, rescuing good projects from expiring unseen.
  * **Leadership Talking Point:** Directly attacks our 46% zero-applicant rate. A lightweight 7-day rule re-steers candidate traffic toward starving projects before postings expire.

* **F-20: Rotation Cycle Rollover Notice (RICE: 4,480 | R: 800, I: 4, C: 70%, E: 0.5 sp)**
  * **User Experience:**
    * *Agency HR Experience:* 7 days before a strict rotation cycle window closes, HR coordinators receive a notification prompt offering a 1-click rollover to convert unfilled postings into open-market vacancies without re-typing job descriptions.
    * *Officer Experience:* High-quality job rotations stay available for application instead of abruptly vanishing due to rigid calendar cut-offs.
  * **Leadership Talking Point:** Solves the fixed-cycle drop-off. A simple scheduled alert prevents hard-to-fill rotations from lapsing into administrative dead ends.

---

#### Stage 2: Application & Eligibility Screening

* **F-09: Seniority Fit Guidance (RICE: 43,200 | R: 6,000, I: 4, C: 90%, E: 0.5 sp)**
  * **User Experience:**
    * *Officer Experience:* Sees target seniority bands on role cards. If an officer applies to a role outside their grade, a helpful advisory notice appears: *"This posting seeks MX11-MX12. Your current profile is MX13. You may still apply, but review panels prioritize matching grades."* Officers can proceed if pre-discussed with leadership, but accidental out-of-grade submissions are curbed.
    * *Review Panel Experience:* Receives qualified candidate pools matched to role seniority, eliminating massive spam piles (such as 1 candidate filing 112 applications).
  * **Leadership Talking Point:** Our second-highest score and our best spam safeguard. For half a sprint, this soft guidance protects review panels without requiring complex central HR integrations.

* **F-05: Direct Resume Attachment (RICE: 11,250 | R: 2,500, I: 5, C: 90%, E: 1.0 sp)**
  * **User Experience:**
    * *Officer Experience:* Attaches their existing PDF resume directly during application with instant safety verification, without leaving CareerCompass or re-entering work history into external forms.
    * *Hiring Manager & HR Experience:* Reviews candidate resumes directly inside the portal alongside application details, ending the hunt across external email accounts.
  * **Leadership Talking Point:** Carries the maximum Impact score of 5. Giving agencies direct resume attachment stops them from defecting to external forms, keeping all application activity inside Compass.

* **F-03: Supervisor Courtesy Notification (RICE: 16,800 | R: 3,000, I: 4, C: 70%, E: 0.5 sp)**
  * **User Experience:**
    * *Officer Experience:* Ticks a confirmation box stating they have discussed this opportunity with their reporting officer. When submitting, their supervisor receives an automated, professional email copy with the project scope and expected hours. Officers apply with confidence, free from administrative anxiety.
    * *Supervisor Experience:* Receives a clear summary email confirming the project and weekly commitment, keeping them informed with zero paperwork.
  * **Leadership Talking Point:** High return for low effort. A courtesy notification email reassures officers and managers without the heavy overhead of a multi-week formal approval hierarchy.

* **F-18: Real-Time Seat Availability Display (RICE: 14,400 | R: 4,000, I: 4, C: 90%, E: 1.0 sp)**
  * **User Experience:**
    * *Officer Experience:* Sees live remaining seats on immersion cards (e.g., "3 of 20 seats remaining"). When filled, the button automatically switches to "Session Full", preventing officers from wasting time applying to filled cohorts only to face silent rejections.
    * *Immersion Host Experience:* Never has to manage oversubscribed sessions or send hundreds of manual regret emails.
  * **Leadership Talking Point:** Eliminates ~2,355 silent rejections per year. For 1 sprint of capacity locking, we protect candidate goodwill and prevent administrative waste.

---

#### Stage 3: Candidate Review, Tracking & Outcomes

* **F-11: 1-Click Candidate Pack Download (RICE: 5,400 | R: 1,500, I: 4, C: 90%, E: 1.0 sp)**
  * **User Experience:**
    * *Agency HR & Review Panel Experience:* Clicks a single button to download all shortlisted candidate profiles and resumes packaged into a neat folder on their desktop, ready for offline interview panels or circulating to directors.
    * *Hiring Manager Experience:* Receives a complete package of candidate materials from HR within minutes of shortlisting.
  * **Leadership Talking Point:** Saves 15 to 20 hours a month per HR coordinator by eliminating file-by-file downloads, ensuring review panels keep candidate workflows inside CareerCompass.

* **F-07: 4-Stage Candidate Progress Tracker (RICE: 7,500 | R: 2,500, I: 5, C: 90%, E: 1.5 sp)**
  * **User Experience:**
    * *Agency HR Experience:* Moves applicants through 4 clear, standardized milestones (*Under Review*, *Shortlisted*, *Offered*, *Closed*) with optional quick-update notices.
    * *Officer Experience:* Visits "My Applications" anytime and sees exactly where they stand in real time. If not progressing, they receive prompt, respectful closure rather than weeks of silence.
  * **Leadership Talking Point:** Our operational foundation with a maximum Impact score of 5. It takes 1.5 sprints, recovers ~89 unrecorded placements a year, and eliminates candidate drop-off.

* **F-22: Host Attendance Check-Off Roster (RICE: 10,800 | R: 4,000, I: 3, C: 90%, E: 1.0 sp)**
  * **User Experience:**
    * *Immersion Host Experience:* Opens a clean candidate roster on screen at the end of a session and ticks off attending officers with a simple click.
    * *Civil Service Leadership Experience:* Generates training completion figures instantly, ready for Head of Civil Service reporting without chasing manual sign-in sheets.
  * **Leadership Talking Point:** Replaces weeks of manual spreadsheet chasing with an in-app roster, delivering clean compliance metrics for leadership reporting.

---

#### Stage 4: Secondment Governance & Policy Disclosures

* **F-13: Secondment Identification Badge (RICE: 4,200 | R: 1,000, I: 3, C: 70%, E: 0.5 sp)**
  * **User Experience:**
    * *Officer Experience:* Instantly identifies formal cross-agency postings through a clear Secondment badge on listing cards.
    * *PSD Leadership Experience:* Central workforce planners gain 100% accurate, real-time records of inter-agency movements instead of guessing through retrospective payroll audits.
  * **Leadership Talking Point:** Fixes a long-standing Whole-of-Government data gap. Half a sprint of taxonomy setup gives PSD direct reporting across all inter-agency moves.

* **F-15: Secondment Rights & Terms Summary (RICE: 4,200 | R: 1,000, I: 3, C: 70%, E: 0.5 sp)**
  * **User Experience:**
    * *Officer Experience:* Reads a clear, standardized summary card right on the posting detailing parent-agency return rights, salary parity guarantees, and performance appraisal arrangements before applying. Officers can explore career moves with confidence.
    * *Parent Agency HR Experience:* Handles fewer repetitive inquiries because standard civil service secondment protections are transparent from day one.
  * **Leadership Talking Point:** Eliminates officer hesitation around return rights and appraisal fairness. A static policy card costs almost nothing to build (0.5 sp) and clarifies rules upfront.

* **F-21: 3-Party Secondment Progress Tracker (RICE: 4,200 | R: 1,000, I: 3, C: 70%, E: 0.5 sp)**
  * **User Experience:**
    * *Officer & HR Experience:* Both the officer and coordinating HR teams see a visual 3-step progress bar (*Parent Agency Endorsement* -> *Host Agency Confirmation* -> *Security Clearance & Agreement Finalized*). Everyone knows whose court the ball is in, ending months of opaque email tag.
  * **Leadership Talking Point:** Brings transparency to the 3 to 6 month secondment timeline. A visual progress tracker identifies whether parent approval or host paperwork is causing delays.

---

#### Stage 5: Future Horizons (Why They Scored Low and Were Deferred)

* **F-10: Automated Seniority Eligibility Lock (RICE: 6,300, R2):** Requires 2 full sprints to build central civil service integrations. We achieve 80% of the benefit in R1 with F-09 Seniority Fit Guidance for only 0.5 sprint.
* **F-04: 1-Click Manager Chat Endorsement (RICE: 2,250, R2):** Interactive workplace chat approvals require security clearances and 2 sprints. The automated email notice in F-03 meets the operational requirement for R1 at a fraction of the cost.
* **F-06: Civil Service Resume Generator (RICE: 4,000, R3):** Formatting a standard civil service CV layout takes 3 sprints. Because officers already have their own PDF resumes, supporting Direct Resume Attachment (F-05) solves the immediate problem.
* **F-08: Panel Interview Scheduling & Scoring (RICE: 2,250, R3):** Calendar integrations and scoring rubrics take 3 sprints and push us into enterprise ATS territory. Interview panels will evaluate candidate dossiers offline via F-11.
* **F-12: Side-by-Side Candidate Dossier Viewer (RICE: 840, R3):** In-browser document preview takes 3 sprints for limited added value. Reviewers prefer downloading the organized candidate folder (F-11) to read on their local devices.
* **F-14: Inter-Agency Mobility Clearinghouse (RICE: 4,000, R4):** A major 5-sprint exchange requiring complex quota policies. We must establish reliable baseline tracking in R1 before attempting inter-agency quota management.
* **F-16: Digital Tripartite Agreement Signing (RICE: 400, R4):** One of our lowest RICE scores. Integrating secure digital signing across three parties takes 5 sprints and heavy legal clearances. Agencies can handle final appointment letters outside the portal.
* **F-02: AI Job Description Assistant (RICE: 500, R4):** Our lowest score across the board. Integrating an AI assistant to draft scopes costs 3 sprints with uncertain adoption. Quick Project Posting (F-01) is far faster, simpler, and more reliable.

### 3.3 How to Defend Roadmap Decisions in Leadership Reviews

When presenting the roadmap to PSD Steering Committee or agency HR directors, anchor discussions around three strategic arguments:

1. **Defend against "pet features":** When stakeholders push for advanced tools like AI scope generators or calendar interview scheduling, point directly to the engineering denominator: *"That takes 3 full sprints and scores between 500 and 2,250 points. For that exact same development capacity, we can build the sub-tab catalog split, the live seat counter, and the batch CV exporter, which touch 7,000 officers with over 70,000 combined RICE points."*
2. **Explain sprint sequencing:** We schedule high-confidence, 0.5-sprint items in Sprints 1 and 2 to create immediate user momentum, then tackle the 1.0 to 1.5 sprint features (candidate status pipelines and batch exporters) in Sprints 3 and 4 once operational data flows are established.
3. **Establish objective governance:** Grounding the roadmap in 2025 operational actuals and engineering velocity protects the squad from speculative scope creep and ensures every sprint delivers measurable civil service impact.

---

## 4. Dependencies on Other Teams and External Systems

```
+-----------------------------------------------------------------------------------+
|                           CAREERCOMPASS R1 SQUAD                                  |
|   (Michelle Yip - PM, Li Ting Kway - Design, Pow Hwee - Eng, Fabian - Tech Lead)  |
+-----------------------------------------------------------------------------------+
       |                        |                        |                  |
       v                        v                        v                  v
+--------------+      +-------------------+      +---------------+   +--------------+
|  OTG / OGP   |      |  GovTech Central  |      |   PSD Scheme  |   |  Pilot HR    |
|    Squad     |      |  Platform / Auth  |      | Administration|   | Operations   |
| (Link-out,   |      | (WOG AD, Keycloak |      | (Megan Yeo -  |   | (WSG, PA,    |
| Ingest feeds)|      | File Scanner)     |      | PCG / SJR)    |   | MSF teams)   |
+--------------+      +-------------------+      +---------------+   +--------------+
```

| External Dependency | Owner / Counterpart Team | Nature of Dependency | Risk Level | Mitigation Strategy |
|---|---|---|---|---|
| **OTG Listing Link-Out Contract** | Opportunities Tribe Gov (OGP) | OTG listings must accept external deep links directing users to Compass application routes. | **Medium** | Provide direct query-parameter URL contract (`compass.gov.sg/opp/:id/apply`); fall back to listing stub if deep routing is delayed. |
| **Secure Resume Storage & Safety Checks** | Public Sector Cloud Security & Infrastructure | Secure government file storage with automatic safety checks for candidate resume uploads. | **High** | Protect candidate resumes within verified government storage environments with automated safety scanning. |
| **Non-Pilot Agency Officer Identity** | Central Login Operations | Lightweight verification mechanism (verified agency email OTP or guest federated access) for applicants outside the pilot six. | **High** | Provide clean email verification if full portal onboarding is not ready for external applicants. |
| **SJR Scheme Policy & Cycle Timelines** | PSD Scheme Admins (Megan Yeo, PCG) | Confirmation of the upcoming SJR application cycle dates, eligible grades, and standard status nomenclature. | **Low** | Michelle to align naming conventions and cycle milestones with Megan Yeo during the week of 2026-09-14. |
| **Design Resource Bandwidth** | Design Management | Li Ting Kway is currently shared with Career Mentoring & Mobility (CMM) through mid-September. | **Medium** | Keep MVP screens strictly within established design components (standard inputs, simple tables, clean modal toggles). |

### 4.1 Experience Delivery Readiness: What Must Be True for Users on Day 1

Converting CareerCompass from a passive discovery catalog into an active transactional marketplace requires five user experience delivery conditions to be true:

1. **Clear Screen Layouts & Fixed Card Slots (Li Ting Kway):** Clean catalog sub-tabs ("Projects & Rotations" vs "Short-Term Immersions") fitted within the existing card grid, with clear slots for Workload (`1.5 d/wk`), Target Grade (`MX11-10`), Available Seats (`4/10`), and Status Badges (`Needs Talent`, `Session Full`).
2. **Agreed Screen Fields and Display Rules (Tan Pow Hwee):** Clear agreement on data fields for catalog cards, application forms, reviewer candidate lists, and 1-click candidate folder downloads so design and engineering proceed smoothly.
3. **Automatic Grade Recognition for Applying Officers:** The officer's verified login identity automatically identifies their civil service grade, enabling an instant, friendly advisory warning (`F-09`) if a role has a different target grade, with a manual confirmation fallback.
4. **Safe, Responsive Resume Upload with Clear Status Badges:** Fast file uploads with instant progress feedback (*Uploading*, *Safety Check*, *Ready*), preventing page freezes and handling safety alerts gracefully.
5. **Disciplined Scope Boundaries: Keeping the Experience Fast and Simple:** Simple 5-field question forms, zero complex calendar integrations, zero in-browser resume editors, and zero offline scorecard complexity.

---

## 5. Strategic Trade-Offs Proposed for Monday Alignment

To preserve engineering velocity (holding the MVP to 5.5 sprints) while delivering an end-to-end operational pipeline, the product team proposes four deliberate trade-offs:

| Strategic Trade-Off | What We Gain (Upside) | What We Trade Off (Sacrifice) | Operational Rationale & Mitigation |
|---|---|---|---|
| **1. Standardized CV Upload vs Custom Form Builder** | Keeps R1 build under 5.5 sprints. Single 5MB PDF/DOCX upload and basic statement box cover the critical screening need. | Agencies cannot create bespoke multi-part questionnaires or conditional form logic in R1. | Rebuilding FormSG inside Compass would blow up timeline. Agencies evaluate role-specific nuances via CV review and interviews. |
| **2. Split Application Flow vs Universal Native Apply** | Avoids redundant development for micro-gigs; focuses engineering capacity where CVs and tracking are essential. | Officers experience two distinct journeys: native in-app apply & tracking for SJRs/Jobs, but external link redirect for STIPs/Gigs. | Workforce Development (WD) already provides an adaptable FormSG template for STIPs/Gigs that agencies tailor. Compass builds on this for low-hour roles. |
| **3. Platform Ecosystem Ownership vs File Liability** | CareerCompass captures whole-of-government talent mobility data and closes the feedback loop for officers. | Operations ensures file storage hygiene, automatic safety checks, and data retention rules (e.g. 90-day post-cycle archiving). | External forms absorbed this previously. We mitigate with strict file limits (≤ 5MB) and automated safety checks in protected government cloud storage. |
| **4. Self-Declaration vs HRMS Gating Integration** | Enables immediate launch without waiting for long-lead integrations with central civil service HR systems. | System does not automate hard eligibility blocking. Ineligible officers can still apply if they ignore guidance. | Structured grade tags make criteria explicit upfront, and supervisor courtesy notification emails provide rapid visibility. |

---

## 6. Review Preparation Checklist (Monday 1:00 PM Review)

- [x] Problem synthesis decomposed by role (Poster vs Applicant) across the four opportunity models (Project Gigs, Short-Term Immersions, Job Rotations, Public Sector Careers).
- [x] Hypotheses articulated with corresponding MVP lightweight features and long-term roadmap views.
- [x] Standardized RICE prioritization score applied consistently across all features.
- [x] Operational differential vs FormSG defined (addressing WD's STIP/Gig FormSG template).
- [x] Four strategic trade-offs framed for leadership alignment.
- [x] System and team dependencies mapped with clear mitigation paths.
- [x] Spreadsheet-ready CSV export generated for live sorting and review.
- [ ] Placeholder calendar invite sent to Adrian Ang and Li Ting Kway for Monday, 2026-09-14 at 1:00 PM.


