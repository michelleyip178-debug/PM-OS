---
title: "PRD: R1 Opportunities Marketplace (3-Pillar Leadership Contract & Non-ATS Framework)"
stage: Planning Review
date: 2026-09-16
week: 2026-W38
owner: Michelle Yip
status: Draft for Review
initiative: R1 Opportunities / CareerCompass
target_agencies: 6 Pilot Agencies (PSD, ESG, MDDI, URA, MCCY, CAAS)
---

# R1 Opportunities Marketplace (3-Pillar Leadership Contract & Non-ATS Framework)

**Stage:** Planning Review  
**Last Updated:** 2026-09-16 (Week 38)  
**Owner:** Michelle Yip (Product Manager)  
**Target Release:** R1 (Sprint 1 to 5.5 · 5.5 Sprints Total)  
**Status:** In Review (Synchronized with 14 Sep Architecture Jam & Rescope Proposal)  

---

## 1. Hypothesis & Problem Statement

### The 3-Pillar Leadership Contract

To establish CareerCompass as the primary Whole-of-Government mobility marketplace while strictly avoiding building an Applicant Tracking System (ATS), R1 commits to three measurable outcomes:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    THE 3-PILLAR R1 LEADERSHIP CONTRACT                      │
├──────────────────────────┬─────────────────────────┬────────────────────────┤
│    1. MOVE OFF OTG       │   2. APPLY SEAMLESSLY   │   3. CLOSE THE LOOP    │
│ • 4 catalog tabs         │ • Editable Compass      │ • Simple 3-stage       │
│   covering all 5 WOG     │   profile pre-fill      │   status tracker       │
│   opportunity types      │   (manual fallback)     │   in "My Applications" │
│ • Dual-posting API push  │ • Direct PDF CV upload  │ • 30-day automated     │
│   to OTG + deduplication │ • Embedded FormSG flow  │   cycle auto-expiry    │
│ Metric: OTG Burn-Down %  │ Metric: Completion Rate │ Metric: Status SLA %   │
└──────────────────────────┴─────────────────────────┴────────────────────────┘
```

#### Canonical Taxonomy Alignment: The 4 Catalog Models & 5 Opportunity Types

Across CareerCompass UI tabs (`F-17`), the platform partitions opportunities into **4 user-facing catalog models**, representing **5 distinct operational opportunity types** plus Careers@Gov:

| Catalog Browsing Tab (`F-17`) | Operational Opportunity Type | What It Is in WOG Practice | Delivery Mode in R1 | Backend / Selection Mechanism |
|---|---|---|---|---|
| **1. Gigs** | **Project Gigs** | Bite-sized, part-time project tasks (2 to 10 hours/week) carried out alongside primary job. | **Lightweight Native Intake** | 3-field quick post (`F-01`) in Compass; applications submitted in-app or via embedded FormSG container. |
| **2. STIPs** | **Short-Term Immersions (STIPs)** | Experiential attachments and shadowing (1 to 5 days) managed by Workforce Development (WD). | **Standardized Embedded Intake** | Dedicated tab (`F-17`); applies use the locked 5-field WD FormSG template embedded in Compass. |
| **3. Rotations** | **Job Rotations & SJRs** | Substantive developmental rotations, including the Scheme of Junior Rotations (SJR). | **Direct CV Intake & Scope Toggle** | Direct PDF CV upload (`F-05`), Seniority Guidance (`F-09`), SJR-to-Internal-Job toggle (`F-28`), 1-Click ZIP export (`F-11`). |
| | **Secondments** | Formal inter-agency movements with parent/host agency tripartite arrangements. | **Baseline Discovery & Tagging** | Discoverable in Rotations tab with Secondment badges; applications route via standard CV package or parent agency. |
| **4. Jobs** | **Internal Jobs** | Permanent civil service vacancies open across intra-agency or inter-agency schemes. | **Ingestion / ATS Handoff** | Nightly ingestion feed (`F-23`); selection managed via agency ATS or Workable pilot. |
| *(External)* | **Careers@Gov (C@G)** | Open public civil service recruitment for external/general hire. | **Outbound Ingestion Feed** | Read-only nightly feed (`F-23`) with explicit outbound deep-link to `careers.gov.sg`. |

### Executive Brief for Business Owners (Xian Zhang Guo, Jacky Lee, Christopher Woo)

This PRD establishes the operational and policy contract between Product and PSD Business Owners across three core commitments:

1. **What CareerCompass R1 Delivers for PSD:**
   * **Unblocks the 51% Mobility Core:** Rotations and Secondments represent 51% of all historical WOG postings (587 of 1,035 in 2025). Direct PDF CV upload (`F-05`) brings this entire volume into a central, auditable transaction for the first time.
   * **Ends Candidate Silence:** The simple 3-stage status tracker (*Submitted → In Review → Outcome*) and 30-day automated cycle expiry recover ~89 unrecorded placements per year and eliminate the 89% candidate outcome black hole.
   * **Accelerates OTG Decommissioning:** Deploys a unified 4-tab catalog and coexistence architecture, burning down 40% of OTG capability dependency in R1 toward full shutdown by 2028.

2. **What PSD Avoids (The Non-ATS Guardrail):**
   * CareerCompass does **NOT** build an Applicant Tracking System, interview calendar sync, candidate scoring rubrics, or custom form builders. Selection is managed offline or via agency ATS (Workable). This keeps engineering strictly within our 5.5-sprint hard ceiling.

3. **The 3 Essential Policy Commitments Required from Business Owners:**
   * **Enforce Single STIP Template:** PSD mandates that all agencies use the locked 5-field Workforce Development FormSG template.
   * **Defend Field Standardization:** Back Product in rejecting agency requests for custom form builders; enforce Barry Lim's rule (standard profile fields + max 1 optional text question).
   * **Commit Pilot Cutover & Seed Listings:** Ensure the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) post exclusively in Compass with 20 to 30 active Day 1 seed listings.  
   *(See Section 8.2 for the full 8-question BO alignment matrix).*

### The Problem
CareerCompass currently acts as an informational bulletin board. Clicking "Apply" sends officers to an external FormSG link or disconnected portals.

That handoff breaks the experience across Whole-of-Government:
1. **Officer drop-off:** 90% of interested officers abandon the process at external redirects. Those who submit hear nothing back for weeks.
2. **The Rotations Zero-CV Limitation:** For Rotations and Secondments (which comprise **51% of all historical opportunity postings**), legacy OTG literally cannot accept or store CV uploads. Officers are forced to either click out to Careers@Gov or write cold emails with CV attachments to an HR mailbox.
3. **The Outcome Black Hole:** Because OTG was never part of the CV transaction, hiring panels evaluated candidates in private Outlook threads. Consequently, **89% of rotation outcomes were never logged**, losing nearly 90 confirmed public sector career moves a year from central records.
4. **Admin overhead:** Since OTG cannot accept CV uploads or bulk imports and requires 1-by-1 manual entry, HR coordinators spend 15 to 20 hours a month downloading files from email attachments and cloud drives to build panel packs.

### The Hypothesis
**If we** deliver a unified mobility catalog (Move Off OTG), an editable pre-filled application flow with direct PDF CV upload and embedded FormSG (Apply Seamlessly), and a simple 3-stage status tracker with 30-day auto-expiry (Close the Loop),  
**then** CareerCompass becomes the primary Whole-of-Government mobility marketplace without building an enterprise ATS,  
**because** officers complete applications in seconds while agency admins eliminate manual email post-boxes and candidate black holes.

### Supporting Evidence
* **The 51% Mobility Opportunity Core:** Cross-referencing 2025 opportunity postings ($n=1,035$) reveals that Rotations (294 SJR, 50 IJR) and Secondments (243 pure and blended roles) represent **51% of all government mobility opportunities**. OTG failed this core entirely by offering zero native CV upload capability.
* **Quantified Drop-Off:** MVP telemetry shows a 90% loss between opportunity page views and recorded outcomes.
* **Non-ATS Consensus:** Adrian Ang and Barry Lim confirmed in the 14 Sep Architecture Jam that Compass must remain a lightweight transactional marketplace ("Discovery First, Selection Out-of-House"). Bespoke custom form builders are rejected in favor of Barry Lim's rule (standard profile fields plus max 1 optional text field).
* **Security & Access Friction:** Officers from statutory boards without `.gov.sg` emails are frequently locked out of agency SharePoint CV links.

### Core Hypotheses by Marketplace Friction Point

| ID | Plain-English Problem Area | Root Cause & Data Baseline | Hypothesis | R1 MVP Solution (What Users See) |
|---|---|---|---|---|
| **H-CAT-1** | **Immersions Burying Project Gigs (Single-Feed Dilution)** | STIPs comprise 85.4% of all listings (4,056 in 2025), burying project gigs and rotations when presented in a single unsorted feed within Jobs and Opportunities. | **If we** partition the "Jobs and Opportunities" catalog into 4 dedicated tabs (`F-17`), **then** gig application rates will rise by 40%, **because** substantive roles will no longer compete for visibility against high-volume 2-day immersion events. | **4 Dedicated Browsing Tabs (`F-17`)** |
| **H-GIG-7** | **Zero-Applicant Postings** | 46% of gig postings receive 0 or 1 applicant despite near 1:1 total demand. 68.7% post in Q2. | **If we** apply a "Needs Talent" badge to zero-applicant gigs after 7 days (`F-19`), **then** the empty gig rate will fall below 20%, **because** traffic is actively re-steered to starving roles. | **"Needs Talent" Highlight on Empty Gigs (`F-19`)** |
| **H-SJR-7** | **Unfilled Fixed-Window Vacancies** | Fixed-window rotation cycles leave unfilled roles abandoned due to the pain of re-posting. | **If we** prompt HR 7 days before cycle close to roll unfilled SJRs into open postings with 1 click (`F-20`), **then** unfilled host vacancies will drop by 35%, **because** postings roll over directly. | **Prompt to Re-List Unfilled Rotations (`F-20`)** |
| **H-STIP-1** | **Applying to Already-Full Sessions** | STIP demand exceeds supply by +58% (6,411 sign-ups for 4,056 slots), creating 2,355 silent rejections. | **If we** standardize STIPs via a locked 5-field Workforce Development FormSG template embedded in Compass, **then** candidate frustration will drop, **because** WD enforces native caps out-of-the-box. | **Locked 5-Field WD Embedded Template** (Seat counter deferred to R2) |
| **H-OPS-1** | **Manual CV Downloading for Interview Panels** | HR POCs spend 15 to 20 hours per month downloading individual CVs from drive links for interview panels. | **If we** provide a one-click Batch ZIP Export of candidate CVs (`F-11`), **then** HR will manage reviews easily offline, **because** panels receive packaged candidate files in seconds. | **1-Click "Download Candidate Dossier" ZIP (`F-11`)** |
| **H-APP-1** | **High-Volume Out-of-Grade Submissions** | 90% candidate churn in 2026; 11 candidates filed 39% of 2025 SJR apps; 1 candidate filed 112 applications. | **If we** enforce structured job grade badges and trigger a soft warning on grade mismatch (`F-09`), **then** serial low-intent submissions will fall by 50%, **because** eligibility criteria are transparent. | **Grade Match Advisory Warning (`F-09`)** |
| **H-SJR-8** | **Untracked Hiring Outcomes & Candidate Silence** | Unrecorded outcomes rose from 86% to 89% between 2024 and 2026 (~89 confirmed placements missing/yr). | **If we** introduce a simple 3-stage status tracker (*Submitted → In Review → Outcome*) with 30-day auto-expiry, **then** candidate black holes will drop to 0%, **because** updating status is 1-click and stale postings conclude automatically. | **3-Stage Status Tracker with 30-Day Auto-Expiry** |
| **H-SJR-9** | **SJR Re-Posting Abandonment & Scheme Lock** | Unfilled SJR rotations get abandoned or require manual re-typing into separate internal job posts when cycle windows close. | **If we** provide an in-portal visibility and scheme scope toggle on Rotations (`F-28`), **then** the re-posting abandonment rate will drop by 45%, **because** agency HR does not have to recreate the vacancy from scratch in another system. | **SJR-to-Internal-Job Scope Toggle (`F-28`)** |
| **H-PUB-1** | **OTG Cross-Posting Referral Leakage & Auth Drop** | Logged-out officers and external portal visitors hitting direct links face immediate login walls, leading to bounce; dual-posting to OTG fragments candidate flow if traffic is not looped back. | **If we** build an unauthenticated Public Opportunity View (`F-29`) with tracked referral deep links (`?ref=otg`) and an auth gate that preserves application state upon login, **then** 100% of candidate traffic will funnel directly into CareerCompass native application flow with zero drop-off. | **Public Opportunity View & Deep-Link Auth Callback (`F-29`)** |
| **H-INT-1** | **Internal Agency Evaluation Policy Friction** | Agencies with strict internal evaluation rules resist managing candidates inside an in-portal ATS. | **If we** provide a standardized intake form with 1-click candidate dossier download (`F-11`), **then** pilot agency adoption resistance will drop to zero without building an ATS, **because** agencies conduct selection offline or via their existing enterprise tools. | **1-Click Candidate Pack Download (`F-11`) & Non-ATS Handoff** |

---

## 2. Strategic Fit & Impact Sizing

### Why This? Why Now?
R1 turns CareerCompass from a read-only bulletin board into an active marketplace. 2025 actuals show demand outstripped posted supply in every quarter. Capturing applications in-system gives Whole-of-Government leadership accurate talent mobility data for the first time.

#### 2025 Full-Year Empirical Baseline (STIPs & Gigs)
*Source: 2025 Full-Year Analysis provided by Qiu Yan and Amy (OneTag Vacancies vs. FormSG Submissions)*

| Metric | Full-Year 2025 Actuals | Operational Context |
|---|---|---|
| **Total Sign-ups (FormSG)** | **7,097** | Organic officer demand across WOG |
| **Total Vacancies (OneTag)** | **4,752** | Total posted opportunities |
| **Net Demand Gap** | **+49%** (+2,345) | Demand consistently exceeds supply |

##### 2025 Quarterly Volume & Seasonality
| Quarter (2025) | Vacancies (OneTag) | Sign-ups (FormSG) | Demand Gap | Operational Pattern |
|---|---|---|---|---|
| **Q1** | 635 | 877 | +242 | Steady baseline intake |
| **Q2** | 876 | 1,334 | +458 | **Gig surge** (478 of 696 annual gig vacancies land here) |
| **Q3** | 1,064 | 1,825 | +761 | Pre-peak ramp |
| **Q4** | **2,177** | **3,061** | **+884** | **Peak season** (heaviest STIP volume for year-end learning) |

##### STIP vs. Gig Volume Split (2025)
* **STIPs (< 2 weeks):** 4,056 vacancies vs. 6,411 sign-ups (+58% demand gap). High-volume events and learning journeys; application standardization and automated attendance tracking deliver maximum operational relief here.
* **Gigs (2 weeks to 6 months):** 696 vacancies vs. 686 sign-ups (near 1:1 balance). Concentrated heavily in Q2; requires flat custom screening questions so agencies do not defect to FormSG.

*Data Caveat:* 2025 data captures FormSG sign-ups/interest. Confirmed fill rates and actual participant attendance are unrecorded centrally because post-application management occurred offline in spreadsheets. R1 specifically solves this missing outcome loop.

### 2.1 Problem Magnitude: The Product Trio Breakdown (PM · Design · Tech)

To ensure the Product Trio (Michelle Yip, Li Ting Kway, Tan Pow Hwee) shares an identical mental model, the marketplace problem decomposes into four empirical failure dimensions mapped directly across Product, Design, and Engineering:

#### Product Trio Alignment Matrix

| Failure Dimension & Baseline | Product Lens (Michelle: Scope & Value) | Design Lens (Li Ting: Interaction & UI) | Tech Lens (Pow Hwee: Architecture & Data) |
|---|---|---|---|
| **1. The 51% Mobility Core Blocked**<br>• 587 of 1,035 postings (51%) are Rotations & Secondments.<br>• OTG has zero CV upload capability. | **Unblock the Core:** Direct PDF CV upload (`F-05`) brings 51% of WOG mobility into Compass. Reject custom CV builders (`F-06`) to preserve 5.5 sp runway. | **Modal Ergonomics:** Single-page apply modal with drag-and-drop PDF upload zone, upload progress bar, and instant safety badge. | **Secure File Pipeline:** S3-compatible government storage bucket, 5MB limit, async antivirus scan, presigned download URLs for HR (`F-11`). |
| **2. The 90% Application Drop-off**<br>• 3,000 apply clicks collapse to 300 form completions.<br>• Broken external FormSG links. | **Keep Traffic In-Portal:** Replace external redirects with editable profile pre-fill and embedded FormSG containers. Target: ≥ 50% completion. | **Zero-Friction Form:** Pre-fill standard fields (Name, Agency, Grade, Skills); allow inline edits without dirtying master POCDEX record. Manual fallback for non-onboarded officers. | **Auth Callback & State:** WOG AD Keycloak SSO preserves deep-link session state (`?ref=otg`), auto-opening active modal post-login. |
| **3. The 89% Outcome Black Hole**<br>• 89% of rotation outcomes unrecorded (~89 lost placements/yr).<br>• Candidates wait in 6-week silence. | **Close the Loop:** Build simple 3-stage status tracker (*Submitted → In Review → Outcome*) + 30-day auto-expiry rule. Defer complex ATS pipelines (`F-07`) to R2. | **Status Visibility:** Simple 3-step progress badge in "My Applications" drawer. Grey pill badge for *"Application Cycle Concluded (No Host Update)"*. | **Lean State Machine:** Lightweight 3-value enum on application record. Scheduled cron triggers auto-expiry 30 days post-deadline without manual HR compliance. |
| **4. Operational Waste & Feed Dilution**<br>• 15 to 20 hrs/mo HR toil downloading CVs.<br>• 46% of gigs get 0–1 applicants (buried under 4,056 STIPs).<br>• 1 candidate filed 112 applications. | **Catalog Hygiene & Lean HR:** 4 browsing tabs (`F-17`), seniority fit warning (`F-09`), and 1-click batch ZIP dossier (`F-11`) eliminate HR postbox toil. | **Card & Feed Architecture:** Fixed card slots (Workload, Grade, Needs Talent). Soft advisory popup when user grade mismatches target grade. | **Partitioned Index & Batch Export:** Catalog queries filtered by opportunity enum. Background worker zips candidate PDFs + CSV index for 1-click download. |

#### Empirical Funnel Collapse (Discovery to Central Record)

```
[15,000 Monthly Views] ──> [3,000 Click Apply] ──> [300 Complete Form] ──> [33 Outcomes Recorded]
                                 │                       │                       │
                                 ▼                       ▼                       ▼
                         20% intent to apply     90% drop-off at FormSG   89% unrecorded outcomes
                                                 and email redirects      (lost to offline sheets)
```

#### The 4 Failure Dimensions in Detail

1. **Volume Scale (7,097 Annual Demands vs 51% Mobility Core):**
   * Total organic demand reached 7,097 FormSG sign-ups against 4,752 posted vacancies (+49% net demand gap). Public officers are hungry for internal career mobility.
   * Rotations (294 SJR, 50 IJR) and Secondments (243 pure/blended) comprise 51% of all historical postings ($n=1,035$), yet OTG offered zero file upload support.
   * STIPs account for 4,056 vacancies vs 6,411 sign-ups (+58% demand gap), creating 2,355 silent rejections annually.

2. **Conversion Failure (The Application Black Hole):**
   * 90% of interested officers abandon the journey when redirected to external FormSG URLs or raw email addresses.
   * Because hiring panels evaluated candidates in private email threads, 89% of outcomes were never recorded centrally, losing ~89 confirmed public sector placements every year.

3. **Operational Toil (Manual HR Churn & Feed Dilution):**
   * Agency HR coordinators spend 15 to 20 hours per month downloading resumes individually from email attachments to assemble interview panel packs.
   * 46% of gig postings and 88% of IJR postings receive 0 or 1 applicant because an unsorted feed buries substantive roles under high-volume short-term courses.
   * Lacking visible grade expectations, 1 candidate filed 112 applications, and 11 candidates submitted 39% of all 2025 SJR applications.

4. **Strategic Decommissioning Block (The 2028 Sunset):**
   * Public Service leadership mandated shutting down legacy OTG by 2028.
   * Without native application intake and CV handling in CareerCompass, agencies cannot migrate off OTG.
   * R1 burns down 40% of OTG capability dependency immediately (from 100% to 60%), clearing the path to complete sunset by 2028.

### 2.2 Impact Sizing (4-Step Framework)

#### Step 1: Funnel Estimation (Pilot Phase)
| Funnel Stage | Current Baseline | Target in R1 | Drop-off Reason & Friction Point |
|---|---|---|---|
| Monthly Opportunity Views | ~15,000 | ~20,000 | Baseline discovery browsing. |
| Click "Apply" | ~3,000 (20%) | ~4,500 (22.5%) | Intent to apply. |
| Form Completion | ~300 (10% of clicks) | ~2,250 (50% of clicks) | Current: 90% churn at external FormSG redirect. Target: In-app form with pre-filled profile. |
| Outcomes Tracked in System | ~33 (11% of submissions) | ~1,575 (70% of submissions) | Current: Decisions made in offline spreadsheets. Target: In-portal candidate status changes. |

#### Step 2: Operational & Strategic Impact
* **Talent Mobility:** A 7x increase in completed applications across the 6 pilot agencies.
* **Admin Time Recovered:** Saves an estimated 15 to 20 hours per month for each agency HR coordinator by removing manual drive downloads and email relays.
* **Data Integrity:** Replaces derived, retrospective secondment estimates with direct database records.

#### Step 3: Confidence & Assumption Testing
| Critical Assumption | Confidence | Risk Level | Mitigation Action |
|---|---|---|---|
| Flat custom form fields (no branching) cover agency requirements | High | Medium | Sample 10 recent FormSG gig forms across MDDI, ESG, and PSD prior to field freeze. |
| Agency HR will maintain candidate status in-system | Medium | High | Keep status options simple (3 stages: Submitted → In Review → Outcome) with a 30-day automated expiry rule to eliminate candidate limbo. |
| Line managers will review CVs directly in-portal | Medium | Medium | Include a bulk "Download Shortlist" export option for offline hiring panels. |

#### Alternatives Considered
* **Alternative 1: Deep FormSG Webhook Integration.** Keep forms on FormSG and pipe submission data back via webhooks.  
  * *Rejected because:* It keeps the admin workflow fragmented, requires complex secret management per agency form, and fails to give officers in-app application tracking.
* **Alternative 2: Full ATS Integration (e.g. Workday / SuccessFactors).**  
  * *Rejected because:* Heavy multi-month enterprise integration lift. R1 requires immediate operational adoption for rotations, gigs, and stips within Sprint 1 to 5.5.

### 2.3 Prioritization Framework: Opportunity Types (Gigs, STIPs, Rotations, Jobs), Conditional Add-Ons & RICE Nuance

RICE measures return on engineering investment: *where does one week of dev time create the biggest win for officers and HR?*

$$\text{RICE Score} = \frac{\text{Reach} \times \text{Impact} \times \text{Confidence}}{\text{Effort (Sprints)}}$$

#### Critical Nuance: The Denominator Trap vs Operational Spine
Because RICE divides by effort, lightweight UI items (0.5 sp) like Dedicated Browsing Tabs (`F-17`: 50,400) and Seniority Fit Guidance (`F-09`: 43,200) achieve massive numerical scores. While these provide high-ROI quick wins, **they are discoverability and hygiene safeguards, not the core product value proposition**.

A marketplace lives or dies on its transactional core: an officer being able to attach a resume (`F-05`: 11,250) and receive timely candidate status feedback. Direct Resume Attachment and the simple 3-stage status tracker (*Submitted → In Review → Outcome*) with 30-day auto-expiry form the non-negotiable operational spine of CareerCompass. Complex recruiter pipeline tracking (`F-07`: 7,500) is explicitly deferred to R2 or enterprise ATS (Workable), saving 1.5 sprints of engineering. RICE is used here as an investment guide, not an autopilot strategy.

#### Portfolio Tiers

| Tier | Score Range | Portfolio Role | Strategic Action & Rules | Features in 5.5-Sprint Plan |
|---|---|---|---|---|
| **Tier 1: Platform "No-Brainers"** | **> 35,000** | Immediate Quick Wins | **Ship in Sprint 1 to 3.** Big reach (5,400 to 15,000 officers), 90% confidence, and low effort (0.2 to 0.5 sp). Enormous value left on the table if delayed. | **F-23** Careers@Gov & OTG Jobs Feed (63,000 · S1)<br>**F-29** Public Opportunity View & Auth Callback (54,000 · S1)<br>**F-17** Dedicated Opportunity Browsing Tabs (50,400 · S1)<br>**F-09** Seniority Fit Guidance (43,200 · S3)<br>**F-26** Pilot Ingestion Exclusion Filter (38,880 · S1) |
| **Tier 2: Core Operational Spine** | **10,000 to 35,000** | System Foundation | **Ship in Sprint 2 to 4.** High-impact fixes (Impact 4 or 5) costing 0.5 to 1.0 sp that plug leaks, stop agencies defecting to FormSG, and safeguard privacy. | **F-27** Role-Based Access Control & Privacy (31,500 · S2)<br>**F-28** SJR-to-Internal-Job Scope Toggle (12,800 · S4)<br>**F-05** Direct Resume Attachment (11,250 · S3) |
| **Tier 3: High-Value Targeted Fixes** | **4,000 to 10,000** | Closing the Loops | **Ship in Sprint 4 to 5.** Solves acute poster and selection pain, or builds the handoff pack for offline review panels. | **F-01** Quick Project Gig Posting (6,300 · S4)<br>**F-11** 1-Click Candidate Pack Download (5,400 · S5)<br>**F-30** Internal Agency Intake & Candidate Push (4,800 · S5) |
| **Tier 4: Deferred to R2 (Capacity Cap)** | **< 20,000 (Cut)** | Preserving the 5.5-Sprint Cut-Line | **Deferred to R2.** Features displaced by the 5.5-sprint hard ceiling. Handled via operational workarounds, FormSG templates, or Workable. | **F-18** Real-Time Seat Counter (14,400)<br>**F-22** Host Attendance Roster (10,800)<br>**F-03** Supervisor Courtesy CC (16,800)<br>**F-07** 4-Stage Status Tracker (7,500)<br>**F-19** Needs Talent Spotlight (5,600)<br>**F-20** Cycle Rollover Notice (4,480)<br>**F-13, F-15, F-21** Secondments Suite (4,200 each)<br>**F-02, F-04, F-06, F-08, F-12, F-14, F-16, F-24, F-25** (<4,000) |

#### Packaging Strategy: Locked 5.5 Sprints Runway & Sprint-by-Sprint Plan

With a hard squad runway of **5.5 engineering sprints**, R1 scope is tightly ring-fenced to deliver an end-to-end working marketplace across the four opportunity models without overbooking capacity:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│             LOCKED 5.5-SPRINT DELIVERY ROADMAP (SPRINT 1 TO SPRINT 5.5)                 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 1 (1.0 sp): SHARED FOUNDATION, INGESTION & OTG LOOP-BACK                        │
│ • Careers@Gov & OTG Jobs Ingestion Feed (F-23 · 0.2 sp · Ingestion)                    │
│ • Public Opportunity View & Deep-Link Auth Callback (?ref=otg) (F-29 · 0.5 sp)         │
│ • Dedicated Opportunity Browsing Tabs (Gig, STIPs, Rotations, Jobs) (F-17 · 0.5 sp)    │
│ • Pilot Ingestion Exclusion & Deduplication Filter (F-26 · 0.5 sp)                     │
│   *Parallel FE/BE execution fits within 1.0 squad sprint capacity.                     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 2 (1.0 sp): ACCESS CONTROL & CANDIDATE DATA GOVERNANCE                          │
│ • Role-Based Access Control & Candidate Privacy Protection (F-27 · 1.0 sp)             │
│   *Isolates candidate drawers and enforces data governance before CVs are uploaded.    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 3 (1.0 sp): ROTATIONS (SJR) CORE APPLICATION & SPAM GUARD                       │
│ • Direct Resume Attachment (PDF, max 5MB, virus scan) (F-05 · 1.0 sp)                  │
│ • Seniority Fit Guidance & Grade Advisory Warning (F-09 · 0.5 sp)                      │
│   *Parallel FE guidance + BE upload pipeline fits within 1.0 squad sprint capacity.    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 4 (1.0 sp): SJR SCOPE TOGGLE & GIGS QUICK POSTING                               │
│ • SJR-to-Internal-Job Scope Toggle (F-28 · 0.5 sp · Core Adrian Requirement)           │
│ • Quick Project Gig Posting Form (3 fields, 3-minute post) (F-01 · 0.5 sp)             │
│   *Enables line managers to post gigs and unlocks unfilled SJRs to civil service jobs. │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 5 (0.8 sp): CANDIDATE SELECTION PACK & INTERNAL AGENCY PUSH                     │
│ • 1-Click Candidate Shortlist Pack Download (F-11 · 0.5 sp · Lean Zip Export)          │
│ • Internal Agency Intake & Automated Dossier Push Protocol (F-30 · 0.3 sp)             │
│   *Supplies hiring panels with offline dossiers and satisfies agency internal policies.│
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 5.5 (0.7 sp): PILOT HARDENING, INTEGRATION SMOKE TESTS & BUFFER                 │
│ • End-to-end user acceptance testing across 6 pilot agencies                           │
│ • WOG AD Keycloak authentication callback stress testing                               │
│ • Final security review, role permission audits, and 0.5 sp contingency buffer        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

#### How the 5.5-Sprint Budget Protects the Four Opportunity Models

1. **Rotations & SJR (Protected Core · 2.0 sp committed):**
   * Officers upload resumes directly (`F-05`), receive gentle seniority advisory warnings (`F-09`), and HR toggles unfilled SJR vacancies to open civil service jobs with 1 click (`F-28`).
2. **Gigs (Lean Core · 0.5 sp committed):**
   * Project leads publish micro-projects in 3 minutes via 3 simple fields (`F-01`). Applications use the standard profile and CV attachment.
3. **STIPs (Zero Custom Dev · 0.0 sp committed in R1):**
   * STIPs are prominently cataloged under their dedicated browsing tab (`F-17`), but application links route directly to Workforce Development's existing FormSG template or host email. Custom seat counters (`F-18`) and attendance rosters (`F-22`) yield to R2.
4. **Jobs & Secondments (Baseline Ingestion · 0.2 sp committed):**
   * Read-only ingestion from Careers@Gov (`F-23`). Secondments governance items (`F-13`, `F-15`, `F-21`) yield to R2 per Adrian's agreed cut-line fallback.
5. **ATS Integration Path (Workable / OGP Discovery):**
   * If OGP PM Daryl Snow's Workable setup enables candidate ingestion (`POST /candidates`) and status webhooks, it integrates via standard backend configuration without disrupting the 5.5-sprint core build. If delayed, R1 operates cleanly with offline pack downloads (`F-11`) and agency dossier dispatch (`F-30`).

#### How to Defend Roadmap Decisions in Leadership Reviews
1. **Enforce the 5.5-sprint capacity ceiling:** When stakeholders ask for advanced features (such as real-time seat counters, calendar interview scheduling, or automated status trackers), point directly to the budget: *"Our squad capacity is locked at 5.5 sprints. The 4.8 sprints of committed features deliver an end-to-end operational marketplace with 0.7 sprints of hardening buffer. Adding any new feature requires cutting an existing core item from Rotations or Gigs."*
2. **Defend against capacity squeeze with the locked cut-line:** If external security reviews or auth integrations compress velocity, drop Internal Agency Push (`F-30`) and fall back to manual email export, preserving the core application flow.
3. **Keep governance objective:** Grounding the roadmap in 2025 actuals and dev velocity protects the squad from speculative scope creep.

---

### 2.3.1 Detailed Feature-to-Hypothesis Mapping Matrix

Every feature in the R1 scope represents a direct, testable intervention designed to validate a specific operational hypothesis within its opportunity model.

#### 0. Shared Platform Discovery & Foundation (Sprint 1 to 2 · 2.0 sp Committed + 0.3 sp Agency Push)

| Feature ID & Name | Opportunity Model | Problem & Baseline Metric | Testable Hypothesis Statement | User & Business Owner Experience | RICE Breakdown & Score | Hypothesis Validation Target |
|---|---|---|---|---|---|---|
| **F-27: Role-Based Access Control & Candidate Privacy** | Shared Discovery | **Candidate privacy and access leaks:** Statutory board line managers lack agency network credentials. Without RBAC, candidate CVs risk exposure across departments or require emailing insecure files. | **If** we enforce 4-tier role-based access control with secure candidate drawers, **then** 100% of pilot candidate reviews will occur within data governance standards without file leakage. | **Officers:** Profile data and CVs remain private to authorized reviewers.<br>**HR & Managers:** Line managers review only assigned candidates; HR coordinates full agency pools. | **R:** 7,000<br>**I:** 5<br>**C:** 90%<br>**E:** 1.0 sp (S2)<br>**RICE:** **31,500** | Zero data governance breaches; 100% of candidate CV access strictly audited. |
| **F-29: Public Opportunity View & Deep-Link Auth Callback** | Shared Discovery | **OTG referral drop-off & login barrier:** Logged-out officers clicking direct links from OTG or emails face abrupt login walls; cross-posting to OTG leaks candidates if not looped back natively. | **If** we build an unauthenticated Public Opportunity View with tracked referral deep links (`?ref=otg`) and auth state preservation, **then** 100% of candidate traffic from pilot agency OTG postings will funnel into native apply flow with zero drop-off. | **Officers:** View vacancy details without logging in; clicking "Log in to Apply" authenticates via WOG AD Keycloak SSO and auto-opens application modal with pre-filled profile.<br>**HR:** Copies one-click tracking link into OTG. | **R:** 15,000<br>**I:** 2<br>**C:** 90%<br>**E:** 0.5 sp (S1)<br>**RICE:** **54,000** | 100% of pilot agency OTG candidate traffic redirected to native Compass apply flow; 0% drop-off at auth boundary. |
| **F-17: Dedicated Opportunity Browsing Tabs** | Shared Discovery | **Catalog blindness:** Gigs, STIPs, and Rotations are dumped into one mixed catalog feed. Part-time gigs get lost under multi-month rotations. | **If** we separate opportunities into clear, dedicated tabs (*Gig*, *STIPs*, *Rotations*, *Jobs*), **then** active browsing engagement will increase by 40%, **because** officers find relevant time commitments in seconds. | **Officers:** Click dedicated top-level tabs to filter by commitment type immediately.<br>**BOs:** Category-level analytics reveal which opportunity models attract the highest interest. | **R:** 7,000<br>**I:** 4<br>**C:** 90%<br>**E:** 0.5 sp (S1)<br>**RICE:** **50,400** | +40% unique click-through to opportunity detail cards within 30 days of launch. |
| **F-26: Pilot Ingestion Exclusion & Deduplication Filter** | Shared Discovery | **Dual-posting and split-console chaos:** HR posting across both OTG and CareerCompass creates duplicate listings, split candidate pools, and conflicting statuses. | **If** we filter out pilot agency postings from the daily OTG sync, **then** candidate confusion will drop to 0%, **because** each role has a single authoritative application path. | **Officers:** Never encounter duplicate cards for the same posting.<br>**HR POCs:** Manage applications exclusively in one console without split records. | **R:** 5,400<br>**I:** 4<br>**C:** 90%<br>**E:** 0.5 sp (S1)<br>**RICE:** **38,880** | 0 duplicate listings across pilot cohorts; zero candidate complaints regarding split statuses. |
| **F-30: Internal Agency Intake & Candidate Push Protocol** | Shared Discovery | **Agency internal selection friction:** Agencies requiring internal selection handling resist managing candidates inside CareerCompass admin portal. | **If** we provide a standardized intake form with an automated applicant dossier push (secure batch export/dispatch) for agencies managing selections internally, **then** pilot adoption resistance will drop to zero. | **Officers:** Apply via uniform CareerCompass interface.<br>**Agency HR:** Receives automated candidate packages dispatched directly to agency contact without logging into back-office tools. | **R:** 3,000<br>**I:** 1<br>**C:** 80%<br>**E:** 0.3 sp (S5)<br>**RICE:** **4,800** | 0 pilot agency defection due to internal selection policy constraints. |

#### 1. Gigs: Project Gigs (Sprint 4 · 0.5 sp Committed)

| Feature ID & Name | Opportunity Model | Problem & Baseline Metric | Testable Hypothesis Statement | User & Business Owner Experience | RICE Breakdown & Score | Hypothesis Validation Target |
|---|---|---|---|---|---|---|
| **F-01: Quick Project Posting** | Gigs | **Posting friction:** Posting a 10-hour side gig requires a multi-page formal HR requisition form, discouraging project leads from sharing tasks. | **If** we offer a 3-minute form with 3 simple fields (Scope, Weekly Hours, Duration), **then** gig posting volume will rise by 40%, **because** informal project leads can publish without bureaucratic delays. | **Posters:** Publish a project gig in 3 minutes via 3 structured fields.<br>**Officers:** Read bite-sized project scopes with clear weekly time commitments upfront. | **R:** 1,500<br>**I:** 3<br>**C:** 70%<br>**E:** 0.5 sp (S4)<br>**RICE:** **6,300** | +40% increase in active project gigs posted in Sprint 1 to 3. |
| **F-03: Supervisor Courtesy Notification** | Gigs | **Supervisor pushback anxiety:** Officers fear applying because they worry their line manager will see it as a distraction or object after they are selected. | **If** application forms include an acknowledgment checkbox and automated notification CC to direct supervisors, **then** applicant drop-off will fall by 30%, **because** expectations are clear. | **Officers:** Check a confirmation box: *"I have informed my direct supervisor."* An automated courtesy summary is sent to the manager.<br>**Posters:** Verified confidence that applicant managers support the commitment. | **R:** 4,000<br>**I:** 4<br>**C:** 70%<br>**E:** 0.5 sp (R2)<br>**RICE:** **16,800** | Deferred to R2; R1 uses self-declaration checkbox. |
| **F-19: Priority Spotlight for Unfilled Roles** | Gigs | **Uneven applicant distribution:** 46% of gig postings receive zero applicants, while popular roles receive dozens. | **If** listings with zero applicants are highlighted with a "Needs Talent" tag after 7 days, **then** zero-applicant roles will fall below 20%, **because** browsing traffic is directed to neglected postings. | **Officers:** See prominent "Needs Talent" callout banners on homepage and search results.<br>**Posters:** Postings that start slow receive automatic visibility boosts without manual bumping. | **R:** 2,000<br>**I:** 2<br>**C:** 70%<br>**E:** 0.5 sp (R2)<br>**RICE:** **5,600** | Deferred to R2; manual link sharing in R1. |

#### 2. STIPs: Short-Term Immersions (Catalog Inclusion via F-17 · 0.0 sp in R1; Custom Tools Deferred to R2)

| Feature ID & Name | Opportunity Model | Problem & Baseline Metric | Testable Hypothesis Statement | User & Business Owner Experience | RICE Breakdown & Score | Hypothesis Validation Target |
|---|---|---|---|---|---|---|
| **F-18: Real-Time Seat Availability Display** | STIPs | **Silent overflow rejections:** Short-term immersions face a +58% demand over capacity (2,355 rejected applicants without feedback). Officers apply to full cohorts blindly. | **If** listings display live remaining seats and automatically flag "Session Full", **then** silent overflow rejections will drop by 90%, **because** officers only submit for sessions with actual openings. | **Officers:** See visual seat badges (*3 Seats Left*, *Session Full*) before clicking apply.<br>**BOs:** Immersion hosts stop fielding complaints from officers rejected due to manual oversubscription. | **R:** 4,000<br>**I:** 4<br>**C:** 90%<br>**E:** 1.0 sp (R2)<br>**RICE:** **14,400** | Deferred to R2; hosts update title manually in R1. |
| **F-22: Host Attendance Check-Off Roster** | STIPs | **Manual attendance chasing:** Host coordinators track immersion attendance on paper or spreadsheets, leaving Head of Civil Service annual metrics unrecorded. | **If** hosts have an on-screen candidate checklist to mark attendance after sessions, **then** reporting compliance will reach 95%, **because** tracking takes 30 seconds on screen. | **Hosts:** Open host dashboard, check boxes next to attending officers, and click *"Submit Attendance"*. Instant CSV export for ministry HR.<br>**Officers:** Attendance reflected on internal training history. | **R:** 4,000<br>**I:** 3<br>**C:** 90%<br>**E:** 1.0 sp (R2)<br>**RICE:** **10,800** | Deferred to R2; hosts track via offline spreadsheet in R1. |

#### 3. Rotations: Job Rotations (Sprint 3 to 5 · 2.0 sp Committed)

| Feature ID & Name | Opportunity Model | Problem & Baseline Metric | Testable Hypothesis Statement | User & Business Owner Experience | RICE Breakdown & Score | Hypothesis Validation Target |
|---|---|---|---|---|---|---|
| **F-05: Direct Resume Attachment** | Rotations | **Portal abandonment to FormSG:** MDDI and ESG abandoned CareerCompass for FormSG because the portal lacked resume uploads and custom qualification questions. | **If** we support single PDF resume uploads with safety checks and 5 basic fields, **then** 100% of pilot agency postings will remain on CareerCompass, **eliminating** external form leaks. | **Officers:** Upload a resume PDF (max 5MB) directly in the application flow with instant virus scan badges.<br>**BOs:** Candidate records stay centralized, private, and secure within government cloud storage. | **R:** 2,500<br>**I:** 5<br>**C:** 90%<br>**E:** 1.0 sp (S3)<br>**RICE:** **11,250** | 100% native posting retention across 6 pilot agencies (0% defection to FormSG). |
| **F-09: Seniority Fit Guidance** | Rotations | **Serial spray-and-pray:** Lacking visible grade expectations, 1 officer submitted 112 applications across mismatched grades, overwhelming review panels. | **If** we display expected seniority tags and a gentle advisory warning on mismatch, **then** serial spam applications will fall by 50%, **because** expectations are transparent before submission. | **Officers:** See clear grade expectations (*Target: MX11-MX12*). A polite confirmation box appears if an out-of-grade officer clicks apply.<br>**BOs:** Review panels receive qualified candidate pools without locking out edge cases. | **R:** 6,000<br>**I:** 4<br>**C:** 90%<br>**E:** 0.5 sp (S3)<br>**RICE:** **43,200** | >50% decrease in out-of-grade applications across Job Rotations. |
| **F-07: 4-Stage Candidate Progress Tracker (Recruiter ATS Pipeline)** | Rotations | **89% unrecorded outcomes:** In 2026, 89% of opportunities had no recorded outcome, leaving ~89 placements uncounted and causing 90% applicant churn due to 6 weeks of silence. | **If** HR has a simple pipeline with instant candidate alerts, **then** recorded outcomes will rise from 11% to over 60%, **ending** candidate silence. | **HR:** Move candidates across milestones with 1 click.<br>**Officers:** View real-time status in *"My Applications"* tab instead of waiting weeks in silence. | **R:** 2,500<br>**I:** 5<br>**C:** 90%<br>**E:** 1.5 sp (R2)<br>**RICE:** **7,500** | **Deferred to R2 (Enterprise ATS / Workable):** Saving 1.5 sp of ATS pipeline engineering. R1 delivers the lean 3-stage status tracker (*Submitted → In Review → Outcome*) in "My Applications" plus 30-day automated cycle auto-expiry. |
| **F-11: 1-Click Candidate Pack Download** | Rotations | **HR panel prep fatigue:** HR coordinators spend 15 to 20 hours per month opening individual drive links to prepare interview packs for offline panels. | **If** HR can download all shortlisted resumes into a single organized desktop folder with 1 click, **then** interview preparation time will fall by 60%, **keeping** HR inside the portal. | **HR / Hiring Managers:** Click *"Download Shortlist Pack"*. The system packages all candidate resumes into a neat, standardized zip folder.<br>**Review Panels:** Review clean candidate dossiers offline. | **R:** 1,500<br>**I:** 4<br>**C:** 90%<br>**E:** 0.5 sp (S5)<br>**RICE:** **5,400** | 60% reduction in HR time spent compiling candidate packs. |
| **F-20: Rotation Cycle Rollover Notice** | Rotations | **Unfilled vacancy abandonment:** Roles left unfilled at the end of fixed rotation cycles are abandoned, leaving host teams short-staffed. | **If** HR is prompted with a 1-click rollover 7 days before cycle close, **then** unfulfilled host vacancies will drop by 35%, **because** roles convert into open-market vacancies automatically. | **HR:** Receives an alert banner 7 days prior to deadline: *"3 roles unfilled. Click to roll over to Open Market."*<br>**Officers:** Gain access to newly opened rotation opportunities. | **R:** 1,600<br>**I:** 2<br>**C:** 70%<br>**E:** 0.5 sp (R2)<br>**RICE:** **4,480** | Deferred to R2; covered by F-28 toggle in R1. |
| **F-28: SJR-to-Internal-Job Scope Toggle** | Rotations | **SJR re-posting abandonment & manual re-entry:** When an SJR rotation vacancy is unfilled as the cycle closes, HR must recreate the role manually in another system to open it to general internal applicants. | **If** we provide an in-portal visibility and scheme scope toggle on Rotations (switching from Restricted SJR Cohort to Open Internal Job with 1 click without losing posting metadata or applicant history), **then** the re-posting abandonment rate for unfilled rotation vacancies will drop by 45%, and time-to-relist will drop from 3 days to under 1 minute. | **HR:** Toggles posting scope from "Restricted SJR Cohort" to "Open Internal Job" with 1 click. Posting keeps descriptions, screening questions, and existing applicant history, while updating the grade check to general civil service bands.<br>**Officers:** Gain visibility into newly opened internal civil service postings. | **R:** 4,000<br>**I:** 2<br>**C:** 80%<br>**E:** 0.5 sp (S4)<br>**RICE:** **12,800** | 45% reduction in re-posting abandonment; < 1 min time-to-relist for unfilled rotation vacancies. |

#### 4. Secondments: Policy Governance (Baseline Ingestion via F-23 · 0.0 sp in R1; Governance Deferred to R2)

| Feature ID & Name | Opportunity Model | Problem & Baseline Metric | Testable Hypothesis Statement | User & Business Owner Experience | RICE Breakdown & Score | Hypothesis Validation Target |
|---|---|---|---|---|---|---|
| **F-13: Secondment Identification Badge** | Secondments (Rotations) | **Tracking blackout:** Zero system markers exist for secondments. 100% of inter-agency secondment reporting is guessed retrospectively from payroll codes. | **If** postings carry a standardized "Secondment" badge at creation, **then** whole-of-government mobility tracking accuracy will reach 100%, **because** roles are tagged at the source. | **Officers:** Instantly distinguish inter-agency secondments from internal rotations.<br>**PSD Leadership:** Generates accurate inter-agency mobility reports in real time. | **R:** 1,000<br>**I:** 3<br>**C:** 70%<br>**E:** 0.5 sp (R2)<br>**RICE:** **4,200** | Deferred to R2 per agreed scope cut-line. |
| **F-15: Secondment Rights & Terms Summary** | Secondments (Rotations) | **Return rights anxiety:** Officers hesitate to take secondments due to fear of losing promotion tracks, performance appraisal continuity, or return rights. | **If** secondment postings display a standardized terms summary card before application, **then** candidate conversion will increase by 50%, **because** policy protections are explicit. | **Officers:** Read a standardized disclosure card detailing return agency rights, appraisal arrangements, and salary parity.<br>**Host HR:** Eliminates repetitive policy Q&A emails. | **R:** 1,000<br>**I:** 3<br>**C:** 70%<br>**E:** 0.5 sp (R2)<br>**RICE:** **4,200** | Deferred to R2 per agreed scope cut-line. |
| **F-21: 3-Party Secondment Progress Tracker** | Secondments (Rotations) | **Administrative black hole:** Inter-agency secondments suffer 3 to 6 month approval delays due to unstructured email tag between parent HR, host HR, and candidate. | **If** all 3 parties view a visual progress tracker (*Parent Endorsement -> Host Confirmation -> Agreement Finalized*), **then** approval cycle time will fall by 30%, **because** bottlenecks are visible. | **Officers & Both HR Teams:** View a clear 3-step progress bar showing exactly whose desk the paperwork is currently sitting on.<br>**BOs:** Resolves cross-agency email standoffs. | **R:** 1,000<br>**I:** 3<br>**C:** 70%<br>**E:** 0.5 sp (R2)<br>**RICE:** **4,200** | Deferred to R2 per agreed scope cut-line. |

#### 5. Jobs: Public Sector Careers (Sprint 1 · 0.2 sp Baseline Ingestion)

| Feature ID & Name | Opportunity Model | Problem & Baseline Metric | Testable Hypothesis Statement | User & Business Owner Experience | RICE Breakdown & Score | Hypothesis Validation Target |
|---|---|---|---|---|---|---|
| **F-23: Careers@Gov & OTG Jobs Ingestion Feed** | Jobs | **Fragmented civil service vacancies:** Officers must check multiple disparate portals to find permanent ministry career moves, missing relevant openings. | **If** we maintain the unified nightly ingestion feed from Careers@Gov with direct outbound apply links, **then** job search traffic will remain 100% centralized within CareerCompass. | **Officers:** Discover central permanent vacancies with an "External Application" badge and link out to `careers.gov.sg`.<br>**Agencies:** Zero dual-posting administration needed. | **R:** 7,000<br>**I:** 2<br>**C:** 90%<br>**E:** 0.2 sp (S1)<br>**RICE:** **63,000** | 100% of civil service job openings searchable from CareerCompass catalog. |

#### Appendix: Deferred Features Hypothesis & Denominator Trap Analysis (10 Features)

| Feature ID & Name | Opportunity Model | Problem / Hypothesis Addressed | Why Deferred (The Denominator Trap) | RICE Inputs & Score | Target Horizon |
|---|---|---|---|---|---|
| **F-10: Automated Seniority Eligibility Lock** | Rotations | Blocks out-of-grade applicants using automated central database queries (`H-3.3`). | Requires deep, multi-agency backend integration (2.0 sp). `F-09` solves 80% of the problem with a simple UI warning for just 0.5 sp. | **R:** 6,000, **I:** 3, **C:** 70%, **E:** 2.0 sp<br>**RICE:** **6,300** | R2 Horizon |
| **F-24: OTG Ingestion: Rotations (SJR) Feed** | Rotations | Ingests non-pilot rotation cards from OTG (OTEP-578 spike). | High effort to parse legacy OTG feeds with low impact (2) because candidate apply redirects externally without CV tracking. Focus pilot capacity on native Rotations. | **R:** 2,500, **I:** 2, **C:** 70%, **E:** 1.0 sp<br>**RICE:** **3,500** | R2 Horizon |
| **F-04: 1-Click Manager Chat Endorsement** | Gig | Approves gig hours directly via Slack/Teams chat prompt (`H-1.2`). | Building chat bot integrations takes 2.0 sp and has unproven adoption. `F-03` courtesy email achieves the outcome for 0.5 sp. | **R:** 3,000, **I:** 3, **C:** 50%, **E:** 2.0 sp<br>**RICE:** **2,250** | R2 Horizon |
| **F-06: Civil Service Resume Generator** | Rotations | Auto-generates standard government CVs from profile data (`H-3.1`). | High formatting effort (3.0 sp). Direct PDF upload (`F-05`) already unblocks 100% of candidate applications. | **R:** 8,000, **I:** 3, **C:** 50%, **E:** 3.0 sp<br>**RICE:** **4,000** | R3 Horizon |
| **F-08: Panel Interview Scheduling & Scoring** | Rotations | Multi-interviewer rubric evaluation and calendar sync (`H-3.2`). | Heavy coordination tool (3.0 sp). Panels already coordinate schedules via Outlook/Google Calendar comfortably. | **R:** 4,500, **I:** 3, **C:** 50%, **E:** 3.0 sp<br>**RICE:** **2,250** | R3 Horizon |
| **F-12: Side-by-Side Candidate Dossier Viewer** | Rotations | In-browser split-screen CV reviewer with tagging (`H-3.4`). | Complex frontend document viewer (3.0 sp). `F-11` 1-Click zip download satisfies panel needs for R1. | **R:** 1,200, **I:** 3, **C:** 70%, **E:** 3.0 sp<br>**RICE:** **840** | R3 Horizon |
| **F-14: Inter-Agency Mobility Clearinghouse** | Secondments | Automated quota-balancing talent clearinghouse across ministries (`H-3.6`). | Requires complex civil service policy agreements and 5.0 sp of backend architecture. | **R:** 10,000, **I:** 4, **C:** 50%, **E:** 5.0 sp<br>**RICE:** **4,000** | R4 Horizon |
| **F-16: Digital Tripartite Agreement Signing** | Secondments | Paperless secondment contract signing via government digital signing (`H-3.6`). | 5.0 sp external digital signing security integration. Manual PDF signing is sufficient during pilot. | **R:** 1,000, **I:** 4, **C:** 50%, **E:** 5.0 sp<br>**RICE:** **400** | R4 Horizon |
| **F-25: OTG Ingestion: Secondments Workaround** | Secondments | Custom workaround to ingest non-pilot secondments from OTG. | OTG completely lacks structured secondment markers. Ingestion requires brittle scraping (1.0 sp) for niche reach. `F-13` and `F-15` native tags solve this cleanly for pilot agencies. | **R:** 800, **I:** 2, **C:** 50%, **E:** 1.0 sp<br>**RICE:** **800** | R4 Horizon |
| **F-02: AI Job Description Assistant** | Gig | Converts informal chat notes into structured deliverables (`H-1.1`). | 3.0 sp LLM integration with low confidence (50%). A clean 3-field form (`F-01`) already makes posting fast. | **R:** 1,500, **I:** 2, **C:** 50%, **E:** 3.0 sp<br>**RICE:** **500** | R4 Horizon |

---

### 2.4 Feature-by-Feature RICE Rationale, User Experience & Leadership Talking Points

#### Stage 0: Platform Foundation & Access Control
* **F-27: Role-Based Access Control & Candidate Privacy (RICE: 31,500 | R: 7,000, I: 5, C: 90%, E: 1.0 sp):**
  * *User Experience:* Public Officers only see their own applications. Line Managers see shortlisted candidate dossiers for their assigned postings. Agency HR POCs manage full agency postings and rosters. Central Super Admins monitor service-wide mobility trends.
  * *Leadership Point:* Non-negotiable operational prerequisite. Isolates candidate CVs, enforces compliance with government data privacy standards, and enables statutory board line managers to review candidates securely.
* **F-29: Public Opportunity View & Deep-Link Auth Callback (RICE: 54,000 | R: 15,000, I: 2, C: 90%, E: 0.5 sp):**
  * *User Experience:* Unauthenticated officers browsing external OTG links or intranet emails see an attractive public opportunity preview (title, agency, overview, closing date) without immediate login barriers. Clicking "Log in to Apply" routes through WOG AD Keycloak SSO, preserving session state and immediately opening the active application modal with pre-filled profile information.
  * *Leadership Point:* High-return loop-back mechanism scoring 54,000 points. Closes the candidate traffic leak when pilot agencies cross-post on OTG, guaranteeing all submissions land in CareerCompass.
* **F-30: Internal Agency Intake & Candidate Push Protocol (RICE: 4,800 | R: 3,000, I: 1, C: 80%, E: 0.5 sp):**
  * *User Experience:* For pilot agencies that mandate internal candidate selection, officers apply via CareerCompass's standardized front-end form. The system automatically bundles candidate dossiers and dispatches them directly to the agency HR coordinator, keeping back-office evaluation lightweight.
  * *Leadership Point:* Critical adoption enabler. Stops pilot agencies from abandoning CareerCompass over internal evaluation policies, without bloating our sprint budget with custom evaluation tools.

#### Stage 1: Posting, Catalog Discovery & Ingestion
* **F-23: Careers@Gov & OTG Jobs Ingestion Feed (RICE: 63,000 | R: 7,000, I: 2, C: 90%, E: 0.2 sp):**
  * *User Experience:* Officers discover central civil service job openings in the search feed with a grey "External Application" pill badge. Clicking "Apply on Careers@Gov" opens the source requisition in a new tab with explicit external tracking notices.
  * *Leadership Point:* Massive reach across the entire public officer base for negligible maintenance effort (0.2 sp), delivering a single front door for all career moves.
* **F-17: Dedicated Opportunity Browsing Tabs (RICE: 50,400 | R: 7,000, I: 4, C: 90%, E: 0.5 sp):**
  * *User Experience:* Officers toggle cleanly between "Projects & Rotations" and "Short-Term Immersions" under Jobs and Opportunities. High-volume learning sessions no longer bury substantive project gigs or rotations.
  * *Leadership Point:* Our highest-ROI feature across the platform. Touching all 7,000 active officers with half a sprint of front-end UI effort, it immediately restores catalog discoverability.
* **F-26: Pilot Ingestion Exclusion & Deduplication Filter (RICE: 38,880 | R: 5,400, I: 4, C: 90%, E: 0.5 sp):**
  * *User Experience:* Officers never see duplicate listings for the same role, and HR never suffers from split consoles. Pilot agency roles appear exclusively as native, traceable postings.
  * *Leadership Point:* Essential operational guardrail for dual-system coexistence. Operates across two planned architectural options:
    * **Option A (Primary, API-Dependent):** Compass pushes pilot postings to OTG via write API; `F-26` inbound deduplication drops Compass-authored roles from central OTG batch imports.
    * **Option B (Decoupled Sunset Fallback):** If OTG lacks an API, zero manual mirroring is permitted because OTG has no bulk upload and requires 1-by-1 manual entry. Ingestion becomes strictly one-way inbound (OTG to Compass), pilot agencies post exclusively on Compass, and OTG deploys a sticky banner plus pinned redirect card to Compass, directly accelerating the 2028 sunset.
* **F-01: Quick Project Gig Posting (RICE: 6,300 | R: 1,500, I: 3, C: 70%, E: 0.5 sp):**
  * *User Experience:* Hiring managers publish part-time project gigs in 3 minutes via 3 simple fields (scope, weekly hours, duration). Officers see bite-sized task descriptions with clear weekly commitments upfront, making it easy to balance with core work.
  * *Leadership Point:* For just 3 days of dev work in Sprint 1, we eliminate requisition friction for managers and kickstart gig supply.
* **F-19: Priority Spotlight for Unfilled Roles (RICE: 5,600 | R: 1,000, I: 4, C: 70%, E: 0.5 sp):**
  * *User Experience:* Officers spot prominent "Needs Talent" badges on starving technical projects at the top of search feeds. Unfilled roles get auto-spotlighted after 7 days, rescuing them from expiring unseen.
  * *Leadership Point:* Directly attacks our 46% zero-applicant rate by re-steering traffic to starving projects.
* **F-20: Rotation Cycle Rollover Notice (RICE: 4,480 | R: 800, I: 4, C: 70%, E: 0.5 sp):**
  * *User Experience:* 7 days before a fixed cycle closes, agency HR receives a 1-click rollover prompt to convert unfilled roles into open-market vacancies without re-typing job descriptions. Officers keep access to quality rotations.
  * *Leadership Point:* Solves fixed-cycle drop-off with a simple automated prompt, keeping postings alive.
* **F-28: SJR-to-Internal-Job Scope Toggle (RICE: 12,800 | R: 4,000, I: 2, C: 80%, E: 0.5 sp):**
  * *User Experience:* HR toggles a single switch in the admin console to shift an unfilled rotation from "Restricted SJR Cohort" to "Open Internal Job". The listing instantly opens to all civil service officers with general grade advisories, while retaining existing applicant history and form fields.
  * *Leadership Point:* Tackles the core operational challenge in rotation programs. Converts scheme-restricted dead-ends into active vacancies in under 1 minute without re-entering data.

#### Stage 2: Application & Eligibility Screening
* **F-09: Seniority Fit Guidance (RICE: 43,200 | R: 6,000, I: 4, C: 90%, E: 0.5 sp):**
  * *User Experience:* Role cards display target grade bands. Candidates with differing grades see a friendly pre-submission advisory note (*"This role seeks MX11-MX12. Your current profile is MX13. Review panels prioritize matching grades."*). Officers can still apply if pre-agreed, but accidental spam is prevented.
  * *Leadership Point:* Our second-highest score and our best spam safeguard. For half a sprint, this soft guidance protects review panels without requiring complex central HR integrations.
* **F-05: Direct Resume Attachment (RICE: 11,250 | R: 2,500, I: 5, C: 90%, E: 1.0 sp):**
  * *User Experience:* Officers attach their existing PDF resume directly in-flow with instant safety checks, without re-entering history into external forms. HR reviews resumes directly alongside applicant profiles.
  * *Leadership Point:* Carries the maximum Impact score of 5. Giving agencies direct resume attachment stops them from defecting to external forms, keeping all application activity inside Compass.
* **F-03: Supervisor Courtesy Notification (RICE: 16,800 | R: 3,000, I: 4, C: 70%, E: 0.5 sp):**
  * *User Experience:* Officers tick a simple confirmation box stating they discussed the opportunity with their manager. On submission, the supervisor receives an automated, professional email copy with the project scope and hours, removing workplace anxiety.
  * *Leadership Point:* High return for low effort. Reassures officers and supervisors without the heavy overhead of a multi-week formal approval hierarchy.

#### Stage 3: Candidate Review, Tracking & Outcomes
* **F-11: 1-Click Candidate Pack Download (RICE: 5,400 | R: 1,500, I: 4, C: 90%, E: 1.0 sp):**
  * *User Experience:* HR coordinators and review panels click a single button to download all shortlisted candidate profiles and resumes packaged into a neat ZIP dossier on their desktop, ready for offline interview panels.
  * *Leadership Point:* Saves 15 to 20 hours a month per HR coordinator by eliminating file-by-file downloads, keeping workflows inside CareerCompass while respecting the non-ATS boundary.
* **Simple 3-Stage Status Tracking & 30-Day Auto-Expiry:**
  * *User Experience:* Officers track submissions in "My Applications" across a lightweight 3-stage lifecycle (*Submitted → In Review → Outcome*). If an agency host does not update a status within 30 days of posting close, CareerCompass automatically marks the application *"Application Cycle Concluded (No Host Update)"*, ending candidate limbo.
  * *Leadership Point:* Solves the 89% unrecorded outcome problem without building an expensive 1.5 sp ATS pipeline (`F-07`). Updating status is 1-click, and auto-expiry guarantees closure.

#### Stage 4: Deferred Features (Deferred to R2 to Preserve 5.5-Sprint Budget)
* **F-18: Real-Time Seat Availability Display (RICE: 14,400, R2):** Requires dynamic capacity locking (1.0 sp). Workforce Development applies native FormSG response limits to close cohorts automatically when caps are reached.
* **F-07: 4-Stage Candidate Progress Tracker (RICE: 7,500, R2):** Replaced in R1 by the simple 3-stage status tracker with 30-day auto-expiry, saving 1.5 sp of ATS pipeline engineering.
* **F-22: Host Attendance Check-Off Roster (RICE: 10,800, R2):** In-app roster requires 1.0 sp. Hosts track post-session attendance via spreadsheet returns post-immersion during pilot.
* **F-13: Secondment Identification Badge (RICE: 4,200, R2):** Deferred to R2; R1 uses standard discovery tags and role badges.
* **F-15: Secondment Rights & Terms Summary (RICE: 4,200, R2):** Deferred to R2; policy terms documented in role description.
* **F-21: 3-Party Secondment Progress Tracker (RICE: 4,200, R2):** Multi-party approval workflows deferred to R2.

#### Stage 5: Future Horizons (Why They Scored Low and Were Deferred)
* **F-10: Automated Seniority Eligibility Lock (RICE: 6,300, R2):** Requires 2 full sprints to build central civil service integrations. We achieve 80% of the benefit in R1 with F-09 Seniority Fit Guidance for only 0.5 sprint.
* **F-04: 1-Click Manager Chat Endorsement (RICE: 2,250, R2):** Interactive workplace chat approvals require security clearances and 2 sprints. The automated email notice in F-03 meets the operational requirement for R1 at a fraction of the cost.
* **F-06: Civil Service Resume Generator (RICE: 4,000, R3):** Formatting a standard civil service CV layout takes 3 sprints. Because officers already have their own PDF resumes, supporting Direct Resume Attachment (F-05) solves the immediate problem.
* **F-08: Panel Interview Scheduling & Scoring (RICE: 2,250, R3):** Calendar integrations and scoring rubrics take 3 sprints and push us into enterprise ATS territory. Interview panels evaluate candidate dossiers offline via F-11.
* **F-12: Side-by-Side Candidate Dossier Viewer (RICE: 840, R3):** In-browser document preview takes 3 sprints for limited added value. Reviewers prefer downloading the organized candidate folder (F-11) to read on their local devices.
* **F-14: Inter-Agency Mobility Clearinghouse (RICE: 4,000, R4):** A major 5-sprint exchange requiring complex quota policies. We must establish reliable baseline tracking in R1 before attempting inter-agency quota management.
* **F-16: Digital Tripartite Agreement Signing (RICE: 400, R4):** One of our lowest RICE scores. Integrating secure digital signing across three parties takes 5 sprints and heavy legal clearances. Agencies can handle final appointment letters outside the portal.
* **F-02: AI Job Description Assistant (RICE: 500, R4):** Our lowest score across the board. Integrating an AI assistant to draft scopes costs 3 sprints with uncertain adoption. Quick Project Posting (F-01) is far faster, simpler, and more reliable.

---

## 3. Scope & Non-Goals: The 3-Pillar Strategic Rescope

R1 is rescoped around a single core outcome: **establishing CareerCompass as the primary officer-facing mobility journey across Whole-of-Government (Discover → Evaluate → Apply → Submit → Track), while strictly avoiding building an Applicant Tracking System (ATS).**

### In Scope for R1: The 3 Pillars

#### Pillar 1: Move Off OTG (Opportunity Coverage & Ingestion Architecture)
1. **Unified Catalog Partitioning inside "Jobs and Opportunities" (`F-17`):**
   * Clear browsing tabs partitioned into **4 user-facing catalog models**, encompassing **5 operational opportunity types** plus Careers@Gov:
     * **Tab 1: Gigs:** Part-time project tasks (2 to 10 hrs/wk) via lightweight 3-field quick-post (`F-01`) and in-app/embedded FormSG apply.
     * **Tab 2: STIPs:** Short-term immersions (1 to 5 days) via dedicated tab (`F-17`) and standardized embedded WD FormSG intake.
     * **Tab 3: Rotations:** Developmental rotations and SJRs with direct PDF CV attachment (`F-05`), Seniority Guidance (`F-09`), SJR-to-Internal-Job scope toggle (`F-28`), and 1-Click ZIP export (`F-11`); plus Secondments discoverable via standardized mobility badges.
     * **Tab 4: Jobs:** Permanent internal civil service jobs discoverable via nightly ingestion (`F-23`) and Workable pilot ATS handoff.
     * *(External Feed):* Careers@Gov (C@G) public recruitment discoverable via nightly ingestion (`F-23`) with direct external link-out.
2. **Dual-Posting API Bridge & Ingestion Deduplication (`F-26`):**
   * **Compass-to-OTG Outbound API Push:** Postings authored in CareerCompass by pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) are pushed via API into legacy OTG. The OTG posting serves as a discovery beacon with an external Apply CTA linking back to CareerCompass (`F-29`).
   * **Inbound OTG Batch Download/Upload with Deduplication:** For non-pilot agencies (~24 agencies still on OTG), the operational process continues (download OTG export and upload to Compass). 
   * **Automated Deduplication Rule:** The ingestion pipeline cross-references incoming records against Compass-originated IDs (matching title + agency + unique reference key) and automatically drops any record pushed from Compass, guaranteeing zero duplicate listings and zero split applicant pools.
   * **Two-Bucket Architecture Enforcement:** Non-ATS lightweight mechanics for Bucket 1 (STIPs/Gigs); formal CV upload and offline review mechanics for Bucket 2 (Rotations/SJRs/Secondments/Jobs).

#### Pillar 2: Apply Seamlessly (The Core R1 Promise)
2. **Standardized Posting Creation (Central Agency HR Only):**
   * Standard role details: title, host agency, job family, duration, weekly hours commitment, and location.
   * Enforced taxonomy validation to prevent unmapped job functions.
   * Seniority Grade Tag (`F-09`): Target grade badge (e.g. `MX11 to MX10`) displayed prominently on role cards.
   * **Barry Lim's Field Standardization Rule:** Zero custom form builders. Postings collect standard profile fields plus a maximum of 1 optional short text question (max 500 characters).
3. **Officer Seamless Application Flow:**
   * One-click "Apply" opening an in-app submission modal.
   * **Editable Compass Profile Pre-Fill:**
     * For officers with an existing CareerCompass profile (POCDEX-synced), standard fields (Full Name, Current Agency, Designation, Official Email, Job Family, Grade/Scheme, Endorsed Skills) auto-populate.
     * **User Editable:** Officers can freely review, edit, and adjust these fields for their application submission without altering their core POCDEX master profile.
     * **Manual Entry Fallback:** Officers without an existing profile (e.g. newly onboarded officers or non-POCDEX agencies) fill in the standard fields manually directly inside the application modal.
   * **Direct Resume Attachment (`F-05`):** Single PDF resume upload (max 5MB) with instant virus scanning.
   * **Embedded Form Processing for STIPs/Gigs:** FormSG functions as an embedded processing engine (via headless API or embedded container), eliminating disjointed external URL redirects while saving 3 sprints of custom form builder development.
   * **Workable Outbound Handoff for Formal Jobs:** Seamless outbound transition for CV-based roles where Workable acts as the Whole-of-Government back-office ATS pilot.
   * Grade Match Warning: Soft advisory alert if an officer's profile grade mismatches posting criteria.

#### Pillar 3: Close the Loop (Outcome Visibility & Simple Roster)
4. **Officer "My Applications" Drawer:**
   * Tracking tab showing submission date, applied role, host agency, and a **deliberately simple 3-stage status badge**:
     $$\text{Submitted} \longrightarrow \text{In Review} \longrightarrow \text{Outcome (Selected / Concluded)}$$
   * **30-Day Automated Expiry Rule:** If an agency host does not update a status within 30 days of posting close, CareerCompass automatically marks the application *"Application Cycle Concluded (No Host Update)"*, preventing infinite pending states without waiting on manual compliance.
5. **Lightweight Agency HR Workflow (Pilot Central HR Only):**
   * Simple agency view listing active postings and applicant counts.
   * **1-Click Candidate Pack Download (`F-11`):** Single button downloading all candidate resumes and standard profile summaries into an organized desktop folder for offline interview panels.
   * Simple 1-click status update action to advance candidates or conclude the posting.
   * SJR-to-Internal-Job Scope Toggle (`F-28`): 1-click conversion of unfilled SJR rotations to general internal jobs 7 days before cycle close.

---

### Explicit Non-Goals: The Non-ATS Boundary (What We Do NOT Build)

CareerCompass is a **transactional mobility marketplace**, not an enterprise Applicant Tracking System (ATS). It owns discovery, seamless application capture, and high-level status transparency. Enterprise ATS platforms (Workable), HR systems (HRPS), and standard office communication tools own detailed evaluation, panel scheduling, and formal appointments.

> **The Prioritisation Razor:** *"If a feature primarily helps recruiters manage recruitment rather than enabling internal mobility in Compass, it is outside R1."*

```
┌───────────────────────────────────────┐       ┌───────────────────────────────────────┐
│     CAREERCOMPASS (MARKETPLACE)       │       │       ENTERPRISE ATS / HRPS           │
├───────────────────────────────────────┤       ├───────────────────────────────────────┤
│ • Discovery & Catalog Partitioning    │       │ • Multi-interviewer scoring rubrics   │
│ • WOG AD Pre-Fill & CV Attachment     │       │ • Automated panel calendar sync       │
│ • Embedded FormSG Intake              │  ───> │ • Formal offer letter generation      │
│ • Secure CV Storage & Batch ZIP (F-11)│       │ • Salary negotiation & grade banding  │
│ • Simple 3-Stage Status (Submitted/   │       │ • Enterprise payroll & tenure actions │
│   In Review/Outcome) + Auto-Expiry    │       │ • Configurable recruiter pipelines    │
└───────────────────────────────────────┘       └───────────────────────────────────────┘
```

#### What CareerCompass R1 Will NOT Build (The Non-ATS Boundary)

| Excluded ATS Capability | Why It Is Excluded from R1 | Where It Belongs / What CareerCompass Does Instead |
|---|---|---|
| **Configurable recruitment pipelines** | Consumes 3+ sprints on custom workflow state machines. | **Enterprise ATS (Workable):** CareerCompass uses a simple 3-stage model (*Submitted → In Review → Outcome*) with 30-day automated expiry. |
| **Interview panel scheduling & calendar sync** | Consumes 3+ sprints on Outlook/Google OAuth permissions and room booking APIs. | **Offline Coordination:** Hiring panels coordinate interview dates directly via standard ministry Teams/Email after downloading candidate packs (`F-11`). |
| **Multi-interviewer scoring rubrics** | Requires confidential scorecard permissions, weighted scoring, and blind reviews across ministries. | **Offline Review Panels:** Evaluators review candidate dossiers offline using ministry scorecards via 1-click batch ZIP export (`F-11`). |
| **Complex establishment approvals & headcounts** | Entangles squad in ministry-specific establishment schemes, union rules, and payroll policies. | **Agency HRPS / Cumulus:** Evaluator marks final status as *Outcome*; formal appointment letters and payroll actions continue through agency HRPS. |
| **Offer generation & digital contract signing** | Heavy legal and union clearances across ministries; 5.0 sp security integration. | **Standard Agency Letters:** Final tripartite agreements and appointment letters are signed offline per agency standard operating procedures. |
| **Candidate CRM & passive talent pooling** | Diverts focus from live transactional mobility into recruiter headhunting tools. | **Active Opportunity Centricity:** Closed postings archive candidate records cleanly (90-day retention). |
| **Agency-specific custom form builders** | Violates Barry Lim's standardization rule; turns Compass into a generic form engine. | **Standardized Schema & Embedded FormSG:** Standard profile fields + max 1 optional text question (500 chars). FormSG handles embedded intake for STIPs/Gigs. |
| **Two-way external ATS webhooks** | Heavy multi-month enterprise API contracts and firewall clearances across agencies. | **Standalone Lightweight Console:** Pilot agencies manage cohorts directly in CareerCompass with 1-click status updates. |

#### System Handoff Workflow

```
[DISCOVERY]          [APPLICATION]          [TRIAGE]              [HANDOFF / OFFLINE]
Browse roles   ───>  Native Apply    ───>   HR changes status     ───>  Panel interview held via Teams
4 Catalog Tabs       Pre-filled profile     to "In Review"              (Outside CareerCompass)
                     Single CV / FormSG     Batch ZIP CVs (F-11)                  │
                                                                                  ▼
[CLOSE LOOP]         [OUTCOME TRACKED]                            [DECISION MADE]
Officer sees   <───  HR updates status <────────────────────────────────  Hiring manager picks
status update        to "Outcome"                                         final candidate
```

#### Detailed HR Agency Poster Operational Flow (Posting to Outcome)

The operational shift for agency HR posters (HR POCs and hiring managers) resolves the manual "post-box burden" across four distinct stages:

1. **Role Creation & Scoping (3-Minute Setup):**
   * **Opportunity selection:** HR selects the opportunity type across the 4 catalog models (Project Gig, Short-Term Immersion, Job Rotation, or Internal Job).
   * **Barry Lim's Field Standardization Rule:** Zero custom form builders. Postings collect verified profile fields plus a maximum of 1 optional short text question (max 500 characters). For Gigs, hiring managers use the 3-field quick-post (`F-01`: deliverables, weekly hours, duration).
   * **Metadata tagging:** Sets the mandatory target grade badge (e.g. `MX11 to MX10`) via `F-09`.
2. **Automated Screening & Pre-Filtering:**
   * **Spam deterrence:** The portal displays structured grade badges on listings. Candidates with different substantive grades see a friendly advisory warning (`F-09`) prior to submitting, curbing accidental and spam submissions by over 50%.
   * **Direct resume capture:** In-flow PDF uploads (`F-05`) are protected with automated safety checks and stored securely in public sector cloud storage, ending external shared drive links.
3. **Candidate Review & 1-Click Panel Dossier Preparation:**
   * **Central review dashboard:** HR views applicants in the review console with verified civil service profile details and attached resumes.
   * **Candidate folder download (`F-11`):** With a single click, HR downloads all candidate profiles and resumes in one organized ZIP folder. This saves 15 to 20 hours a month previously lost to opening individual drive links and emailing files to offline interview panels.
4. **Outcome Resolution & Simple Status Closure:**
   * **2-Second Status Update:** HR toggles a simple dropdown next to candidates (*Submitted → In Review → Outcome*). Updating an outcome sends an automated notification to the officer, recovering ~89 unrecorded placements a year and ending candidate silence.
   * **30-Day Automated Expiry Rule:** If an agency host does not update a status within 30 days of posting close, CareerCompass automatically marks the application *"Application Cycle Concluded (No Host Update)"*, preventing infinite pending states without waiting on manual compliance.
   * **SJR-to-Internal-Job scope toggle (`F-28`):** If an SJR rotation remains unfilled as cycle deadlines approach, HR toggles the scope switch from "Restricted SJR Cohort" to "Open Internal Job" with 1 click. The posting retains all job content while expanding visibility and updating grade mismatch rules to standard civil service criteria.
   * **Rotation cycle rollover prompt (`F-20`):** 7 days before a fixed rotation cycle closes, HR receives a prompt with a 1-click option to convert unfilled positions into open-market vacancies, preventing abandoned postings.

### 3.4 Pilot Agency Transition & Dual-System Coexistence (CareerCompass vs. OTG)

During R1, the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) manage postings primarily through CareerCompass, while non-pilot agencies remain on legacy OTG.

#### Two Implementation Options for OTG Coexistence

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                    R1 OTG COEXISTENCE: OPTION A vs OPTION B ARCHITECTURE                │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│ OPTION A: SYMMETRICAL DUAL-POSTING BRIDGE (API Push + Ingestion Deduplication)          │
│ • Pilot Agencies post in Compass -> Outbound API pushes role into OTG with link-back.   │
│ • Inbound batch ingests OTG -> F-26 deduplication drops Compass-authored roles.          │
│ • Constraint: Requires OTG to expose an automated write API. (OTG currently lacks bulk  │
│   upload and requires 1-by-1 manual creation; manual re-typing is strictly out of scope).│
├─────────────────────────────────────────────────────────────────────────────────────────┤
│ OPTION B: ASYMMETRICAL SUNSET CUTOVER (One-Way Inbound + Clean Pilot Exclusivity)       │
│ • Ingestion is 100% Inbound: Compass ingests OTG roles so officers see all WOG roles.   │
│ • Pilot Agencies post EXCLUSIVELY in Compass: Never touch OTG; zero manual double-entry.│
│ • Traffic Rerouting on OTG: Sticky top banner + single pinned tile linking to Compass.  │
│ • Benefit: Completely decouples R1 from OTG tech debt and accelerates 2028 sunset.      │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

1. **Option A (Primary Path, Contingent on OTG Write API):**
   * Compass pushes newly published pilot roles to OTG via API.
   * OTG listing displays role metadata with an external Apply CTA linking back to Compass (`?ref=otg&source=legacy_sync`).
   * `F-26` Ingestion Deduplication automatically drops Compass-originated roles from the daily OTG batch feed.
2. **Option B (Decoupled Fallback, Recommended for Sunset Speed):**
   * **Operational Reality:** OTG has no bulk upload capability; all postings in OTG must be created manually one by one. If OTG cannot provide a write API in Sprint 1, manual double-entry is strictly rejected.
   * **Strict One-Way Ingestion:** Compass ingests OTG postings so that officers on Compass see 100% of WOG opportunities. Compass never pushes back to OTG.
   * **Pilot Exclusivity:** Pilot agencies post exclusively in Compass and stop logging into OTG.
   * **OTG Traffic Rerouting:** OTG deploys a prominent sticky top banner and a single permanent pinned tile linking directly to CareerCompass (`?ref=otg_pinned`), driving organic adoption toward the 2028 sunset.

### 3.5 Experience Delivery Readiness: What Must Be True for Users on Day 1

To deliver a polished user experience in 5.5 sprints, five conditions must be true:

#### 1. Clear Screen Layouts & Consistent Card Slots (Design / Li Ting Kway)
* **Keep tabs inside the existing catalog grid:** The 4 browsing tabs (`F-17`: Gigs, STIPs, Rotations, Jobs) sit smoothly inside the existing 3-column card grid.
* **Lock card metadata slots:** Opportunity cards have fixed information slots: Workload badge (`1.5 days/wk`), Target grade badge (`MX11 to MX10`), Host agency, and "Needs Talent" status badge.
* **Responsive modal dialogs:** The application modal fits standard civil service intranet laptop screens comfortably without awkward scrolling.

#### 2. Agreed Screen Fields and Display Rules (Tech Lead / Tan Pow Hwee)
* **Opportunity browsing rules:** Catalog cards display accurate pre-calculated badges (such as 'Needs Talent') immediately, ensuring cards load instantly for users.
* **Clean application submission:** The application modal collects verified profile information, inline user edits, the uploaded resume, and responses to the optional free-text field in a single step.
* **Reviewer candidate roster:** Candidate lists display simple status milestones (*Submitted*, *In Review*, *Outcome*).
* **Smooth candidate dossier downloads (`F-11`):** Reviewers download all candidate resumes in one consolidated ZIP dossier with a single click, prepared smoothly in the background.

#### 3. Automatic Grade Recognition for Applying Officers
* **Verified grade recognition:** The officer's verified login identity automatically identifies their civil service grade alongside their name, agency, designation, and official email.
* **Instant advisory feedback:** The application form provides a gentle advisory warning (`F-09`) if the officer's grade differs from the role's target grade, avoiding submission delays.
* **Manual confirmation fallback:** If profile details are not immediately available for an officer, the interface provides a clean manual entry fallback.

#### 4. Safe, Responsive Resume Upload with Clear Status Badges
* **Fast and secure file upload:** Candidates upload resumes directly into protected public sector storage with automatic safety checks, supporting single PDF files up to 5MB.
* **Clear upload progress badges:** Visual indicators show upload progress, virus safety check, and ready confirmation.

#### 5. Disciplined Scope Boundaries: Keeping the Experience Fast and Simple
* **Barry Lim's Field Standardization Rule:** Zero custom form builders. Postings collect standard profile fields plus a maximum of 1 optional short text question (max 500 characters).
* **Offline interview coordination:** Zero calendar scheduling integrations. Panel date coordination remains offline via email or Teams.
* **Offline resume screening:** Zero in-browser document markup tools. Reviewers download the candidate folder (`F-11`) to read resumes comfortably.
* **Zero in-app evaluation rubrics:** No multi-interviewer scorecards, weighted grading, or rating sliders in the admin roster.

#### Day 1 Readiness Checklist (Sprint 1 Kickoff)

| User Experience Dependency | Owner | State Required on Day 1 |
|---|---|---|
| **Sub-Tab & Card Wireframes** | Li Ting Kway | Figma components defining card slotting for Workload, Grade, Seats, and Status badges. |
| **Agreed Screen Fields & Display Rules** | Tan Pow Hwee | Clear agreements on data fields for catalog cards, application forms, and reviewer candidate lists. |
| **Automatic Grade Recognition** | Central Login Operations | Confirmation that officer grade is pre-filled upon login. |
| **Protected Resume Storage & Safety Checks** | Public Sector Cloud Security | Secure government file storage configured with automated safety checks. |
| **Pilot Agency Posting Commitment** | Michelle Yip / Adrian Ang | 6 pilot agencies commit to publishing upcoming cohorts on CareerCompass. |

---

## 4. R1 North Star & Balanced Metrics Framework

We measure success not by tickets closed, but by **mobility transaction health** and **OTG exit velocity**.

### The North Star Metric

$$\text{North Star} = \frac{\text{Eligible Compass Opportunity Applications Completed via Seamless Journey}}{\text{Total Eligible Applications Initiated}} \ge 90\%$$

### Balanced Metrics Scorecard

| Strategic Pillar | Focus Metric | Proposed Target | Measurement Method |
|---|---|:---:|---|
| **1. Adoption** | % of eligible opportunity applications initiated through Compass | **≥ 70%** | Web telemetry across pilot cohorts |
| | Detail Page → Apply CTA click conversion | Baseline → +25% | Funnel event tracking |
| **2. Seamless Apply** | **Application Completion Rate** (`Submitted ÷ Started`) | **≥ 90%** | Drop-off event funnel |
| | Median time to complete application | **< 5 minutes** | Session timer on application modal |
| | Applications requiring manual technical support | **< 5%** | Helpdesk ticket tags |
| | Technical submission failure rate | **< 1%** | Backend error logs |
| **3. Close the Loop** | % submitted applications with visible status badge | **≥ 95%** | Database audit at posting close |
| | % status updates reflected within agreed SLA | **≥ 95%** | Status change timestamp logs |
| **4. OTG Exit** | **OTG Capability Burn-Down** (% OTG features still needed) | **60% post-R1** | Capability matrix review |
| | % targeted pilot opportunities posted on Compass vs OTG | **100% Compass** | Pilot agency audit |
| **5. HR Efficiency** | Median time spent creating a standard listing | **≥ 30% reduction** | HR coordinator user testing |
| | HR coordination hours saved per posting | **15 to 20 hrs/mo** | Pre/post agency survey |

### The OTG Decommission Burn-Down Curve

```
  100% ──┐
         │ (MVP: Pilot Discovery Layer)
   60% ──┴────────┐
                  │ (R1: Seamless Apply + Simple Status)
   25% ───────────┴────────┐
                           │ (R2: Full Central Ingestion & Workable Cutover)
    0% ────────────────────┴──────> (2028: Complete OTG Sunset)
```

### Operational Guardrails & Kill Criteria

| Guardrail Dimension | Metric Name | Baseline | Operational Threshold |
|---|---|---|---|
| **Security & Privacy** | Security & Privacy Incidents | 0 | 0 unauthorized CV access events across agencies |
| **Publishing Speed** | Posting Creation Time | ~15 mins (OTG baseline) | Average time to configure and publish stays under 20 minutes |
| **Notification Latency** | Candidate Status Notification Latency | 4 to 8 weeks (or never) | Median latency under 24 hours from HR status change to officer alert |

#### Kill Criteria
If pilot agency native posting adoption remains below 30% after 60 days because agencies continue defaulting to external FormSG URLs, we will halt automated pipeline enhancements and conduct a mandatory workflow review with agency HR leaders.

---

## 5. Solution Overview: Capabilities Aligned to Backend Categories

The backend database stores opportunities under four first-class enum values: `GIG`, `STIP`, `INTERNAL_JOB`, and `CAREERS_AT_GOV`. R1 organizes its functional capabilities around these exact four backend models.

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                     R1 MVP ARCHITECTURE BY BACKEND OPPORTUNITY TYPE                     │
├──────────────────────────┬──────────────────────────┬───────────────────────────────────┤
│ (1) GIG                  │ (2) STIP                 │ (3) INTERNAL_JOB (inc. Secondment)│
├──────────────────────────┼──────────────────────────┼───────────────────────────────────┤
│ • Quick Project Posting  │ • Standardized Intake    │ • Seniority Fit Guidance (F-09)   │
│   (F-01: 3 fields)       │   (Locked 5-field WD     │ • Direct Resume Attachment (F-05) │
│ • Priority Spotlight     │    template embedded)    │ • Simple 3-Stage Status Tracker   │
│   (F-19: Needs Talent)   │ • Cohort Run Badges      │ • 1-Click ZIP Dossier Export      │
│ • Workload Badges        │ • Dedicated Browsing Tab │   (F-11)                          │
│ • Supervisor Courtesy CC │   (F-17)                 │ • SJR Scope Toggle (F-28)         │
│   (F-03)                 │                          │ • Rollover Notice (F-20)          │
├──────────────────────────┴──────────────────────────┴───────────────────────────────────┤
│ (4) CAREERS_AT_GOV: Central Openings with Outbound Apply Redirect to Source Portal     │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│ DISCOVERY: 4 Dedicated Opportunity Browsing Tabs (Gigs, STIPs, Rotations, Jobs) (F-17)  │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### Discovery Architecture: Segmented Catalog Views by Opportunity Model
The catalog organizes opportunities directly into four clean user experiences across 4 browsing tabs (`F-17`):
* **Project Gigs:** Part-time micro-projects (2 weeks to 6 months). Cards feature workload commitments (e.g. `1.5 days/wk`) and "Needs Talent" badges (`F-19`).
* **Short-Term Immersions (STIPs):** Experiential attachments (1 to 5 days). Cards feature cohort run dates and hosting ministry details.
* **Job Rotations & Secondments:** Developmental rotations, SJRs, and formal secondments. Cards feature target grade badges (`F-09`), scope toggles (`F-28`), and direct CV apply.
* **Public Sector Careers:** Permanent public service postings with an external redirect badge (`F-23`).

*(Note: Top-level shell navigation remains untouched: [Home], [Jobs and Opportunities], [Learning and courses], [Your development]. Classroom training and self-paced courses stay in "Learning and courses".)*

---

### Opportunity Model 1: Project Gigs (Micro-Projects & Task Delivery)
*Target: Cut posting friction, solve the 46% empty gig rate, and clarify manager workload concurrence.*

* **Quick Project Posting (`F-01`):** Hiring managers post in 3 minutes with 3 required fields: project deliverable scope, weekly hours commitment, and duration.
* **Priority Spotlight for Unfilled Roles (`F-19`):** System automatically tags unviewed or zero-applicant gigs after 7 days with a prominent "Needs Talent" badge, pushing them to the top of relevant search feeds to rescue starved projects.
* **Supervisor Courtesy Notification (`F-03`):** Officers confirm direct manager concurrence via a simple checkbox. On submit, the system CCs their reporting officer automatically, eliminating manager friction without complex approval chains.
* **Standardized Workload Badges:** Cards display explicit weekly commitments (e.g. `1.5 days/wk`, `Mon/Wed PM`, `Asynchronous`) so officers know if a gig fits their schedule.

---

### Opportunity Model 2: Short-Term Immersions (Learning & Exposure Attachments)
*Target: Standardize application collection and eliminate external URL redirects.*

* **Standardized Embedded Intake:** STIPs utilize the locked 5-field Workforce Development FormSG template embedded directly into CareerCompass. Officers complete applications in-portal without being dumped to raw external forms.
* **WD Native Cohort Capping:** Real-time seat availability display (`F-18`) and in-app attendance roster (`F-22`) are deferred to R2. WD enforces cohort limits natively within FormSG, and hosts manage attendance via post-session spreadsheet returns.
* **Cohort Schedule Badges:** Cards display exact session dates, duration (days), and host agency location.

---

### Opportunity Model 3: Job Rotations & Secondments (Substantive Roles & Postings)
*Target: Eliminate candidate limbo, stop serial out-of-grade submissions, package panel review packets, and preserve offline evaluation freedom.*

* **Seniority Fit Guidance (`F-09`):** Role cards display mandatory target grades (e.g. `MX11 to MX10`). A soft advisory prompt alerts officers whose profile grade mismatches posting criteria, cutting spam while keeping applications open for exceptional cases.
* **Direct Resume Attachment (`F-05`):** Secure in-portal PDF attachment (max 5MB) with automated safety checks, closing the gap that previously forced agencies to external forms.
* **Simple 3-Stage Status Tracker:** Lightweight tracking (*Submitted → In Review → Outcome*) in "My Applications".
* **30-Day Automated Expiry Rule:** If an agency host does not update an outcome within 30 days of posting close, CareerCompass marks the status *"Application Cycle Concluded (No Host Update)"*, preventing candidate limbo.
* **1-Click Candidate Pack Download (`F-11`):** HR downloads all candidate profiles and resumes in a single organized ZIP folder in seconds for offline panel reviews.
* **SJR-to-Internal-Job Scope Toggle (`F-28`):** 1-click toggle converts unfilled SJR rotation postings into open internal civil service vacancies without re-typing.
* **Rotation Cycle Rollover Notice (`F-20`):** Prompts host HR 7 days before a fixed rotation cycle closes to roll unfilled roles into open vacancies with 1 click.

---

### Opportunity Model 4: Public Sector Careers (Central Civil Service Openings)
*Target: Unified discovery across all public sector vacancies.*

* **Ingested Read-Only Feed (`F-23`):** Nightly batch ingestion pulls active civil service job requisitions into the search index.
* **Outbound Application Hand-off:** "Apply on Careers@Gov" CTA opens the source requisition in a new browser tab with an explicit external tracking advisory.

---

### Core System User Flows

#### Flow A: Officer Native Application Loop
```
1. Browse Opportunity Details 
   └── Displays complete JD, competencies, workload badge, and hosting agency specs.
2. Click "Apply Now" 
   └── Opens native modal. Pre-fills verified WOG AD / POCDEX profile details with inline user editability and manual entry fallback.
3. Complete Role Input 
   └── Bucket 1 (Gigs/STIPs): Embedded FormSG container (locked WD template for STIPs, 3-field quick post for Gigs).
   └── Bucket 2 (Rotations/SJRs/Secondments): Drag-and-drop single PDF resume (max 5MB, F-05) + max 1 optional text question (max 500 chars).
4. Submit Application 
   └── Instant on-screen confirmation and email receipt. 
   └── Entry appears immediately under "My Applications" with status "Submitted".
5. Track Progress
   └── Visual tracker shows progress (Submitted → In Review → Outcome).
   └── Auto-resolves to "Application Cycle Concluded (No Host Update)" if inactive after 30 days.
```

#### Flow B: Agency Admin Posting & Evaluation Loop
```
1. Create Opportunity (HR POC or Designated Co-Owner)
   └── F-01 3-Field Quick Post for Gigs; standard fields + max 1 text question for Rotations.
   └── Publishes listing to CareerCompass marketplace.
2. Coexistence Sync (Option A vs Option B)
   └── Option A (if API ready): Compass pushes role to OTG via API with "?ref=otg".
   └── Option B (decoupled sunset): Role remains exclusive to Compass; OTG runs redirect banner.
3. Candidate Review (Non-ATS)
   └── Admin clicks F-11 "Download Candidate Dossier (ZIP)" containing CSV index + all PDF CVs.
   └── Panel conducts screening and interviews offline or via enterprise ATS.
4. Finalize Outcomes
   └── Admin toggles 3-stage dropdown (Submitted → In Review → Outcome) in 2 seconds.
   └── System automatically updates officer's "My Applications" screen.
```

---

### 5.3 User-Access Roles & Governance Matrix (RBAC)

To safeguard candidate privacy and prevent unauthorized data access across statutory boards and ministries, CareerCompass enforces a 4-tier Role-Based Access Control (RBAC) model:

| User-Access Role | Target Population | Authentication Mechanism | Core Capabilities & Permissions | Data Boundary & Privacy Controls |
|---|---|---|---|---|
| **1. Public Officer (Applicant)** | ~5,400 pilot officers (scaling to ~150k WOG) | WOG AD via Keycloak SSO | • Browse catalog across Gig, STIPs, Rotations, Jobs (`F-17`).<br>• Apply natively with pre-filled profile and CV upload (`F-05`).<br>• View real-time status in "My Applications".<br>• Withdraw active submissions. | Strict self-isolation. Can only view own submitted applications and personal profile. Zero access to poster consoles or peer submissions. |
| **2. Line Manager / Evaluator** | ~100 to 200 project hosts & hiring managers | WOG AD email / authenticated magic link | • Post 3-field quick gigs (`F-01`).<br>• View applicant counts for assigned postings.<br>• Download candidate pack (`F-11`) for shortlisted applicants.<br>• Toggle simple candidate outcome (*Submitted* / *In Review* / *Outcome*). | Posting-scoped. Cannot view candidate pools for other departments or postings. Zero form builder configuration rights. |
| **3. Agency HR POC (Admin)** | 12 to 24 HR coordinators across 6 pilot agencies | WOG AD agency admin security group | • Full creation & editing rights for agency postings under Barry Lim's rule.<br>• Toggle SJR-to-Internal-Job scope (`F-28`).<br>• Trigger cycle rollovers (`F-20`) and download ZIP candidate packs (`F-11`).<br>• Update candidate outcome status. | Agency-scoped. Restricted strictly to parent agency postings and candidate pools. Cannot view other agencies' applicant data. |
| **4. Central Super Admin** | 3 to 5 PSD / Platform Leads (e.g. Adrian, Michelle) | Privileged WOG AD admin role | • Whole-of-government visibility into talent mobility trends.<br>• Configure global taxonomies, job families, and grade bands.<br>• Manage catalog sync ingestion feeds and deduplication filters (`F-26`).<br>• Audit access logs and compliance retention (90-day archive). | Whole-of-Government scope with full audit logging for all data exports and role grants. |

---

## 6. Edge Cases & Handling

| Scenario | System Behavior |
|---|---|
| **Applicant edits profile after submission** | Application snapshot freezes data submitted at transaction time. Ongoing profile updates do not alter past submissions retroactively. |
| **Posting closes before review begins** | Candidates who applied remain visible in the agency pipeline. Post moves to "Closed" in the catalog, disabling new submissions. |
| **Candidate withdraws application** | Candidate can click "Withdraw" from "My Applications." Status updates to "Withdrawn" in the agency dashboard, and CV access is restricted. |
| **Statutory Board applicant with non-gov domain** | In-portal viewer renders CV attachments without requiring agency-specific Microsoft SharePoint credentials. |
| **Agency POC leaves the role** | Posting co-ownership permits agency master admins to reassign posting ownership without recreating listings. |

---

## 7. Risks and Mitigation Framework

To ensure a resilient launch, risks are actively managed across three dimensions: Market & Adoption, Team & Execution, and Technical & Compliance.

### 7.1 Market & Adoption Risks

| Market Risk | Root Cause & Baseline Data | Severity | Impact | Mitigation Strategy |
|---|---|---|---|---|
| **Agency Defection Back to FormSG** | Pilot agencies (MDDI, ESG) left OTG because static forms could not capture role-specific criteria. If postings feel too rigid, agencies may revert to external FormSG links. | High | Fragmented marketplace. Officers bounce outside CareerCompass; the 90% drop-off persists. | Enforce Barry Lim's field standardization rule: Standard profile fields plus a maximum of 1 optional free-text field (500 chars). For STIPs, embed the locked WD FormSG template. Secure executive posting mandate via PSD sponsors. |
| **The 46% Gig "Desert Island" (Relevance Failure)** | 46% of gig postings draw 0 or 1 applicant despite near 1:1 total supply and demand. 69% of gigs land in Q2. Specialized roles sit invisible while officers flock to low-friction STIPs. | High | High poster churn. Frustrated hiring managers abandon the platform after getting zero applicants. | Enforce in-catalog tabs inside "Jobs and Opportunities" (`F-17`). Automatically flag unviewed gigs with "Needs Talent" after 7 days (`F-19`) and push them into targeted job family feeds. |
| **The Outcome Black Hole (Hiring Manager Inaction)** | 89% of rotation outcomes go unrecorded because hiring decisions occur offline in hallway chats, emails, or spreadsheets. | High | Candidate limbo continues. Talented officers face weeks of silence, fueling the 90% candidate churn rate. | Deploy the simple 3-stage status tracker (*Submitted → In Review → Outcome*) backed by the mandatory 30-day auto-expiry rule: postings automatically transition to *"Application Cycle Concluded (No Host Update)"* if inactive. |
| **The Dual-Posting & Split-Console Trap** | Pilot agency HR posts across both OTG and CareerCompass to maximize reach, resulting in duplicate candidate submissions across FormSG and Compass. | High | Administrative confusion and duplicate reviews. Candidates receive conflicting status updates across systems. | Deploy Option A (API push and `F-26` deduplication). If OTG write API is blocked, immediately trigger Option B: Clean pilot cutover where pilot agencies post exclusively on Compass, supported by an OTG sticky redirect banner. |
| **OTG Referral Leakage & Non-Compliant Cross-Posting** | Pilot agency HR teams cross-post to OTG but mistakenly paste FormSG links instead of the generated CareerCompass tracking link (`?ref=otg`). | High | Candidate traffic leaks outside the system, defeating native tracking and splitting applicant pools. | Compass Admin displays prominent 1-click "Copy OTG Application Link" on publish modal with guidance tooltip. Run weekly compliance audits of pilot agency OTG listings during pilot. |
| **SJR-to-Job Scheme & Grade Band Confusion** | When an unfilled SJR rotation is toggled to an open internal job, applicants previously excluded under cohort rules are unsure if they can apply. | Medium | Low application volume on converted postings due to perceived ineligibility. | Update UI badges dynamically upon toggle from "Restricted SJR Cohort" to "Open Internal Job" with an explanatory banner clarifying open eligibility across the civil service (`F-28`). |
| **Pilot Kill Criteria Trigger (< 30% Adoption)** | Agencies continue posting on internal intranets or legacy EDM blasts out of muscle memory. | Critical | Project halts at day 60 per Section 4 kill criteria. | Require the 6 pilot agency HR leads to commit to an exclusive CareerCompass posting agreement for pilot cohorts prior to Sprint 1 kickoff. |

### 7.2 Team & Execution Risks

| Team Risk | Root Cause & Reality | Severity | Impact | Mitigation Strategy |
|---|---|---|---|---|
| **Form Builder Scope Creep** | Custom form builders are notorious time sinks. Drag-and-drop reordering, complex validation, and dynamic UI can easily consume 3 full sprints. | High | Delivery slips past Sprint 2. Core candidate roster and status tracking get squeezed out. | **Completely eliminate the custom form builder.** Enforce Barry Lim's rule: verified profile fields + max 1 optional text question. For STIPs, embed the locked WD FormSG template. |
| **The Hiring Manager Blindspot** | Discovery engaged HR POCs and DevOps admins, but zero direct line managers. We assume line managers will log in to screen candidates. | High | Line managers refuse to log into the admin portal and demand that HR email them downloaded CVs anyway. | Provide 1-Click Candidate Pack Download (`F-11`): HR downloads the complete candidate ZIP dossier to share directly with line managers for offline reviews. |
| **Trio Bandwidth & Dependency Bottlenecks** | Product, Design, and Engineering (Michelle, Li Ting, Tan Pow Hwee) must align across three distinct opportunity models (STIPs, Gigs, SJRs) in 5.5 sprints. | Medium | Design backlog stalls engineering; edge cases get discovered mid-sprint. | Run weekly trio sprint check-ins. Keep UI components shared across all three bundles with unified layouts. |

### 7.3 Technical & Compliance Risks

| User Experience & Delivery Risk | Root Cause & Operational Reality | Severity | Impact | Mitigation Strategy |
|---|---|---|---|---|
| **Candidate Folder Download Delays** | Packaging 80+ candidate resumes into a single folder during peak panel reviews could cause slow browser downloads or frozen tabs. | High | Reviewers face delays during critical interview preparation. | Prepare the download bundle smoothly in the background and deliver an instant download link, keeping the screen fast and responsive. |
| **Candidate Data Privacy & Retention Standards** | Resumes contain personal career history and contact details. Keeping resumes indefinitely creates privacy risks. | High | Civil service data governance audit failure and loss of candidate trust. | Resumes are encrypted and automatically archived 90 days after hiring concludes, ensuring candidate privacy and compliance with government data governance standards. |
| **Unverified Grade Integrity & Spam Submissions** | The friendly advisory warning against serial applications (H-APP-1) depends on matching job grade. If grade is manually entered, candidates can bypass alerts. | Medium | Serial applicants continue submitting to mismatched roles (e.g. 1 candidate filing 112 applications), overwhelming review panels. | Pre-fill candidate grade directly from verified login identity, with a clear limit of 5 active open applications per officer at any one time. |
| **File Upload Safety Checks & Processing Speed** | Direct resume uploads require safety checks to protect against corrupted or unsafe files. | Medium | Files get stuck in review; review panels cannot view candidate resumes on time. | Automated safety checks run quietly upon upload with clear status badges ("Uploading", "Safety Check", "Ready"). Reviewers can see candidate profile details immediately while file safety is confirmed. |
| **Public View Sensitive Opportunity Exposure** | Restricted internal rotations or confidential secondments are unintentionally exposed on the unauthenticated public opportunity view. | Critical | Breach of civil service posting governance and unauthorized visibility. | Enforce strict metadata defaults: All postings default to Public View Disabled. Require explicit HR opt-in for Public Sector Preview. Set `noindex, nofollow` meta tags on preview routes to block web crawlers. |
| **Auth Session Drop & Deep-Link State Loss** | An officer clicks "Log in to Apply" on the public view, but after WOG AD login, the session lands on the homepage rather than the active application modal. | Medium | Officer drops off without completing application. | Validate OAuth state and `redirect_uri` handling in Sprint 1 architecture spike; ensure automated tests verify state preservation to open active application modal. |

---

## 8. Open Questions & Approvals

### 8.1 Technical & UX Open Items
| # | Question | Decision Needed By | Owner | Status |
|---|---|---|---|---|
| 1 | What exact field types cover 90% of FormSG gig forms across PSD, MDDI, and ESG? | Sprint 1 Grooming | Michelle Yip / Agency POCs | Sampling forms |
| 2 | What is the retention policy for candidate CVs stored in CareerCompass? | Sprint 2 Tech Review | Security / Data Governance | In Review |
| 3 | Will SJR cycles permit early rejection notifications or remain locked to cycle completion? | Solution Review | Workforce Development Lead | Open |
| 4 | Confirm whether line managers require a separate light dashboard or can use role-scoped links. | Sprint 1 Design Jam | Design Lead (Li Ting Kway) | In Progress |

### 8.2 Strategic Questions for Business Owners (BO: Xian Zhang Guo, Jacky Lee, Christopher Woo)

To support business owners in policy alignment and SteerCo preparation, the eight core strategic and governance decisions are structured below:

| # | Governance Domain | Core Question for Business Owners | Operational Rationale & Evidence | Policy Decision Options & Recommended Path |
|---|---|---|---|---|
| **1** | **STIPs Template Governance** | Can PSD mandate a single, locked FormSG template for STIPs across all ministries? | Without a central template, agencies generate bespoke forms with fragmented schemas, breaking WOG mobility analytics. | **(Recommended) Option A:** PSD issues circular mandating WD master FormSG template.<br>**Option B:** Allow agency links (rejected: fragments reporting). |
| **2** | **STIPs Capacity Automation** | Will WD enforce native FormSG submission caps per cohort run (e.g. capping at 20 submissions)? | Real-time seat counters (`F-18`) are deferred to R2 to protect the 5.5-sprint budget. FormSG has native submission limit controls. | **(Recommended) Option A:** Hosts set native FormSG response limits.<br>**Option B:** Manual title edits (*Session Full*) when capacity is reached. |
| **3** | **Post-Session Attendance** | Who will manage post-session attendance confirmation for STIPs and Gigs? | In-portal attendance check-off rosters (`F-22`) are deferred to R2. Software cannot track attendance if hosts do not report it. | **(Recommended) Option A:** Handled via WD spreadsheet returns post-immersion in R1.<br>**Option B:** Defer attendance tracking to R2. |
| **4** | **Outcome Reporting Policy** | Will PSD issue an administrative instruction mandating host managers to report placement outcomes? | In 2025 actuals, 7,097 sign-ups occurred with zero mandatory placement tracking. Software cannot resolve an administrative void. | **(Recommended) Option A:** SteerCo approves top-of-funnel discovery metrics for R1 while PSD drafts placement policy.<br>**Option B:** Hold squad to placement rates (rejected: unmeasurable). |
| **5** | **Field Standardization Defense** | Will BOs back Product in rejecting pilot agency requests for custom form builders? | Barry Lim's rule limits postings to standard profile fields plus max 1 optional short text question (500 chars). | **(Recommended) Option A:** PSD endorses Barry Lim's rule across all 6 pilot agencies.<br>**Option B:** Custom fields per agency (rejected: derails 5.5 sp runway). |
| **6** | **OTG Cutover & Seed Inventory** | What is the hard sunset date for OTG postings across the 6 pilot agencies, and how many seed postings are committed? | Parallel running dilutes candidate traffic and creates duplicate listings. Day 1 marketplace needs initial inventory. | **(Recommended) Option A:** Pilot agencies cut over exclusively to Compass; commit 20 to 30 active Day 1 seed listings.<br>**Option B:** Symmetrical dual-posting bridge. |
| **7** | **Generic `[JOB]` Postings Audit** | Can Qiu Yan and the OTG data team audit a sample of 10 generic `[JOB]` postings from 2025? | 169 postings (16% of 2025 volume) sit under an unspecified tag with 72% zero-applicants. | **(Recommended) Option A:** Audit 10 sample records to verify source URLs before ingesting.<br>**Option B:** Ingest as-is (risks dead links). |
| **8** | **IJR Policy & Visibility** | Why did Internal Job Rotations (IJR) suffer an 88% zero-applicant rate, and should they be ring-fenced to internal agency views? | 50 IJR postings yielded only 5 applications all year. Folding them into open SJR feeds corrupts conversion metrics. | **(Recommended) Option A:** Ring-fence IJR to parent-ministry visibility (`F-20`).<br>**Option B:** Show in public WOG catalog (rejected: high dead-role noise). |

---

## 9. Appendix: Baseline Data Sources

* **2025 Opportunity Postings Title-Tag Export (`custom_gigs_report`, n=1,035):** Empirical breakdown across SJR (294), generic Jobs (169), Blended Secondments (137), Untagged (122), Pure Secondments (106), Gigs (50), IJR (50), STIPs (30), and other campaign tags.
* **2025 STIPs & Gigs Full-Year Dataset:** Analysis provided by Qiu Yan and Amy (OneTag published vacancies vs. FormSG responses across WOG).
* **SJR & Gigs Behavioral Audit (2024 to 2026):** Cross-program audit workbooks on rotation unrecorded outcomes (89%) and serial applicants.
* **Delivered MVP Baseline:** [2026-09-13-W37-careercompass-mvp-delivered-prd.md](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-13-W37-careercompass-mvp-delivered-prd.md)
* **Unified Research Synthesis:** [2026-09-14-W38-r1-opportunities-unified-synthesis.md](file:///Users/michelleyip/Documents/PM-OS/outputs/research-synthesis/2026-09-14-W38-r1-opportunities-unified-synthesis.md)
* **RICE Opportunity Scoring:** [2026-09-14-W38-r1-opportunities-rice-scoring.csv](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-rice-scoring.csv)


