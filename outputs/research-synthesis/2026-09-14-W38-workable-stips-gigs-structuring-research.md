# Research: Structuring STIPs and Gigs in Workable ATS

**Document Reference:** `2026-09-14-W38-workable-stips-gigs-structuring-research`  
**Date:** 2026-09-14 (Week 38)  
**Author:** Michelle Yip (Product Manager)  
**Status:** Working Research / Architectural Discovery  
**Related Documents:**
* [2026-09-14-W38-r1-opportunities-executive-summary.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-executive-summary.md)
* [2026-09-14-W38-workforce-development-and-cg-alignment-guide.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-workforce-development-and-cg-alignment-guide.md)
* [2026-09-14-W38-decision-r1-opportunity-architecture-and-ats-boundary.md](file:///Users/michelleyip/Documents/PM-OS/outputs/decisions/2026-09-14-W38-decision-r1-opportunity-architecture-and-ats-boundary.md)

---

## 1. Executive Summary & Research Question

### The Core Problem
Careers@Gov (C@G) and Open Government Products (OGP) are piloting Workable as the central Whole-of-Government Applicant Tracking System (ATS) for public sector recruitment. In our 2026-09-14 Architecture Jam, leadership confirmed that formal Jobs, Substantive Job Rotations (SJR), and Secondments should point to Workable as the strategic destination engine. 

However, Workforce Development (WD) and agency talent teams frequently ask:
> *"Can we run Short-Term Immersion Programmes (STIPs) and project-based Gigs inside Workable just like regular Jobs, so all government mobility lives in a single database?"*

### Research Finding
Yes, STIPs and Gigs can be modeled as native job entities inside Workable by repurposing Workable's custom job templates, non-standard recruiting pipelines, internal-only publication tags, and capacity limits. 

However, doing so in R1 introduces significant organizational friction:
1. **Administrative Bloat:** Civil service hosts organizing a 2-day workshop or a 10-hour gig will not tolerate managing enterprise ATS stages.
2. **Licensing Bottlenecks:** Workable requires named reviewer seats for hiring managers. Provisioning accounts for hundreds of informal gig posters is cost-prohibitive.
3. **C@G Database Pollution:** C@G compliance teams risk having central PSC hiring databases inundated with thousands of transient micro-postings.

**Recommendation:** Maintain the locked R1 boundary (Gigs via native quick-post, STIPs via standardized WD FormSG template). Use this research to guide Phase 2 (R2/R3) discussions with C@G and OGP when API integrations mature.

---

## 2. Workable Entity & Taxonomy Mapping

Workable structures all hiring around three core entities: **Requisition / Job**, **Candidate Profile**, and **Recruiting Pipeline**. 

To accommodate micro-mobility without corrupting formal hiring data, STIPs and Gigs must be mapped into Workable's taxonomy with explicit overrides:

| Workable Field / Attribute | Formal Civil Service Jobs | STIPs (1 to 5-Day Immersions) | Gigs (5% to 20% Project Tasks) |
|---|---|---|---|
| **Entity Object** | Standard Requisition | Specialized Job Template | Specialized Job Template |
| **Title Format** | `[Ministry] Job Title` | `[STIP] Program Name (Cohort/Month)` | `[GIG] Project Name (% Commitment)` |
| **Department** | Ministry Directorate (e.g. MOF Budget) | `WOG Mobility / STIPs` | `Internal Gigs / [Host Agency]` |
| **Employment Type** | Full-time / Contract | Temporary / Internship | Part-time / Temporary |
| **Target Openings** | 1 to 2 positions | 15 to 30 seats (acts as cohort cap) | 1 to 3 project contributors |
| **Publication Scope** | External + Internal (C@G Board) | **Internal Only** (Unlisted on public board) | **Internal Only** (Unlisted on public board) |
| **Resume Upload** | Mandatory PDF | **Turned Off (Not Required)** | **Optional** (Profile data sufficient) |
| **Custom Screening Fields** | Scheme, Minimum Grade, Security Clearance | Cohort Dates, Host Agency, Max Capacity | Hours/Week, Expected Duration, Deliverable |

---

## 3. Custom Pipeline Architecture: Replacing the Hiring Funnel

Standard recruitment stages (Phone Screen, Assessment, In-Person Interview, Offer Letter, Background Check) fail when applied to informal micro-mobility. Workable allows administrators to build bespoke recruiting pipelines per department or template.

### A. The STIP Pipeline: Cohort Capacity & Attendance Funnel

STIPs are cohort-based learning attachments. The pipeline functions as an enrollment roster, not a selective elimination funnel:

```
┌──────────────┐     ┌────────────────────────┐     ┌────────────────────────┐     ┌───────────────────────┐
│   Applied    │ ──► │  Supervisor Endorsed   │ ──► │  Confirmed (Enrolled)  │ ──► │  Completed (Attended) │
└──────────────┘     └────────────────────────┘     └────────────────────────┘     └───────────────────────┘
                                                 └──► │  Waitlisted (Over-Cap) │      └──► │ Did Not Attend / Drop │
                                                      └────────────────────────┘           └───────────────────────┘
```

1. **Applied:** Candidate applies via CareerCompass SSO pre-fill.
2. **Supervisor Endorsed:** System verifies manager awareness via automated courtesy notification.
3. **Confirmed (Enrolled):** Host marks candidate as accepted. Workable's native "Remaining Openings" counter decreases. Once the cohort ceiling (e.g., 20) is met, additional applicants are automatically routed to *Waitlisted*.
4. **Completed (Attended):** Marked by the host post-session. Triggers an automated webhook to record milestone hours into CUMULUS or the officer's training passport.

### B. The Gig Pipeline: Micro-Matching & Deliverable Handover

Gigs require quick alignment between the project owner and the volunteer contributor:

```
┌──────────────┐     ┌────────────────────────┐     ┌────────────────────────┐     ┌───────────────────────┐
│   Applied    │ ──► │   Brief Sync / Chat    │ ──► │  Matched (In Progress) │ ──► │   Project Completed   │
└──────────────┘     └────────────────────────┘     └────────────────────────┘     └───────────────────────┘
                                                 └──► │  Archived / Not Right  │
                                                      └────────────────────────┘
```

1. **Applied:** Candidate expresses interest, attaching a short portfolio link or 1-paragraph summary.
2. **Brief Sync / Chat:** 15-minute informal call to confirm timeline and weekly bandwidth.
3. **Matched (In Progress):** Both sides agree on scope and deliverables. Candidate begins working 4 to 8 hours per week.
4. **Project Completed:** Host marks project finished, triggering a badge or acknowledgment record.

---

## 4. Application Configuration (Applying Barry's Standardization Rule)

In our Architecture Jam, Barry Lim mandated the **Field Standardization Rule** to prevent agencies from turning CareerCompass or the ATS into a complex custom form builder. 

Applying this rule inside Workable's application editor:

```
┌─────────────────────────────────────────────────────────────────────────┐
│              WORKABLE FORM CONFIGURATION FOR GIGS & STIPS               │
├─────────────────────────────────────────────────────────────────────────┤
│ FIXED PROFILE FIELDS (Auto-populated via WOG AD / Compass SSO):         │
│ • Full Name                                                             │
│ • Official Email Address (.gov.sg)                                      │
│ • Current Ministry / Statutory Board                                    │
│ • Current Grade / Scheme (MX, Management Associate, etc.)               │
├─────────────────────────────────────────────────────────────────────────┤
│ UPLOAD CONTROLS:                                                        │
│ • Formal Jobs: Mandatory Resume PDF upload                              │
│ • STIPs: Resume Upload disabled entirely                                │
│ • Gigs: Resume Upload set to optional                                   │
├─────────────────────────────────────────────────────────────────────────┤
│ SINGLE CUSTOM FIELD ALLOWANCE (Max 1 short text field, 500 characters): │
│ • STIPs: "What specific perspective or domain skill do you seek?"       │
│ • Gigs:  "Briefly describe your relevant tools or project background."  │
├─────────────────────────────────────────────────────────────────────────┤
│ COMPLIANCE CHECKBOX:                                                    │
│ • Mandatory checkbox: "I confirm my reporting officer supports this."   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 5. System Integration & End-to-End Data Flow

To maintain CareerCompass as the primary discovery frontend while using Workable as the backend repository:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        CAREERCOMPASS FRONTEND                           │
│ (Search, Filter Tabs, Personalized Matching, Public Sector Navigation) │
└────────────────────▲───────────────────────────────┬────────────────────┘
                     │                               │
       GET /spi/v3/jobs?tag=stip                     │ POST /candidates
       (Catalog Ingestion)                           │ (Submission Payload)
                     │                               │
┌────────────────────┴───────────────────────────────▼────────────────────┐
│                           WORKABLE ATS (C@G)                            │
├─────────────────────────────────────────────────────────────────────────┤
│ • Central Opportunities Database                                        │
│ • Internal Visibility Flags (Hidden from external boards)               │
│ • Tailored Pipelines (STIP Enrollment & Gig Matching)                   │
│ • Outbound Webhooks (candidate_moved, candidate_disqualified)           │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ Outbound Webhooks
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        CAREERCOMPASS / CUMULUS                          │
│        (Officer Activity Feed, Application Status, Audit Trail)         │
└─────────────────────────────────────────────────────────────────────────┘
```

1. **Catalog Pull:** CareerCompass polls or subscribes to Workable's Job API (`GET /spi/v3/jobs`), filtering by `tag=stip` or `tag=gig`. Compass indexes and displays these opportunities in dedicated browsing tabs (`F-17`).
2. **Frictionless Application:** The officer applies within CareerCompass. Compass compiles the WOG AD profile data and submits the candidate record via Workable's Candidate API (`POST /spi/v3/jobs/:shortcode/candidates`).
3. **Status Feedback Loop:** As host managers move candidates through stages (e.g. from "Applied" to "Confirmed"), Workable fires an outbound webhook (`POST /subscriptions`). CareerCompass updates the officer's application dashboard.

---

## 6. Organizational, Licensing & Governance Challenges

While technically viable via API, structuring STIPs and Gigs in Workable creates three severe non-technical challenges:

### 1. Workable Seat Licensing Costs
* **The Reality:** Workable's enterprise pricing model charges per user seat or hiring manager account.
* **The Problem:** In a typical ministry, dozens of project leads create informal gigs. If every senior officer posting a 5-hour task requires a Workable login to review applicants, the civil service would need thousands of paid seats.
* **The Workaround:** All gig submissions must be managed centrally by departmental HR coordinators, or candidate notifications must be emailed directly to hosts via automated email relays without granting Workable dashboard access.

### 2. C@G Central Database Contamination
* **The Reality:** C@G's Workable tenant is configured for high-stakes, legally audited public recruitment under Public Service Commission (PSC) guidelines.
* **The Problem:** Injecting 5,000 informal micro-tasks, short workshops, and hackathon gigs into the same database creates auditing risks, reporting skew, and pushback from C@G administrators.
* **The Workaround:** Strict department partitioning (`Whole-of-Government Mobility > STIPs`) with restricted recruiter permissions, preventing informal postings from appearing in PSC recruitment dashboards.

### 3. User Experience Disconnect for Informal Hosts
* **The Reality:** Civil servants posting gigs want quick assistance on an urgent deck or data task.
* **The Problem:** Forcing a project host to navigate a multi-stage corporate ATS console to view two applicants will result in hosts abandoning the system and reverting to informal WhatsApp groups.

---

## 7. Tackling the One-Instance vs Multi-Instance Dilemma

During the 2026-09-14 Architecture Jam, Barry Lim highlighted the central governance risk of integrating with Workable:
> *"We have to have a discussion with that team... it belongs to them, right, the instance."*

If government deploys two separate Workable instances (one for C@G external recruitment, and a second for CareerCompass internal mobility), agency HR teams will face a dual-instance administrative crisis: logging into two different ATS consoles, managing split candidate histories, and doubling software procurement overhead.

Here is how our architecture tackles this dilemma.

### A. The Target Model: Single Shared Instance via Headless Partitioning

If C@G agrees to host internal mobility, CareerCompass integrates under a **Headless Department Partitioning** structure within C@G's existing Workable contract:

```
┌────────────────────────────────────────────────────────────────────────┐
│               C@G CENTRAL WORKABLE TENANT (SINGLE INSTANCE)            │
├────────────────────────────────────┬───────────────────────────────────┤
│ EXTERNAL RECRUITMENT HIERARCHY     │ INTERNAL MOBILITY HIERARCHY       │
│ (Managed via Workable Web UI)      │ (Managed Headless via API)        │
├────────────────────────────────────┼───────────────────────────────────┤
│ • Ministry Public Openings         │ Root: `WOG Internal Mobility`     │
│ • PSC Scheme Cadetships            │ ├── Sub-Dept: `Rotations & SJR`   │
│ • Published to Careers@Gov portal  │ ├── Sub-Dept: `STIPs (WD)`        │
│ • Full multi-stage hiring pipeline │ └── Sub-Dept: `Project Gigs`      │
│ • External job board syndication   │ • Visibility: Internal Only       │
│                                    │ • Tailored micro-pipelines        │
└────────────────────────────────────┴─────────────────▲─────────────────┘
                                                       │
                                  CareerCompass API    │ Headless Integration
                                  (Service Token)      │ (GET /jobs, POST /candidates)
                                                       │
                                     ┌─────────────────┴─────────────────┐
                                     │     CAREERCOMPASS FRONTEND        │
                                     │ (Officers & Hosts only see this)  │
                                     └───────────────────────────────────┘
```

#### How Headless Partitioning Resolves the Friction:
1. **Isolates C@G Recruiters from Informal Noise:**
   * Workable supports granular department-based permissions. C@G recruiters working on formal public recruitment never see internal STIPs or micro-gigs in their operational queues.
   * Internal mobility records are contained within the `WOG Internal Mobility` department hierarchy.
2. **Eliminates the Seat Licensing Crisis:**
   * Civil service gig posters and STIP hosts never receive individual Workable logins.
   * CareerCompass functions as a **Headless UI**, communicating with Workable through a central Service Account API token. Hosts review candidates inside CareerCompass or via secure email links, eliminating the need for thousands of paid Workable reviewer seats.
3. **Unifies Public Service Candidate Histories:**
   * PSD and PSC maintain a single, unbroken candidate record. An officer's profile links external hiring records with internal rotations, STIPs attended, and gigs completed.

---

### B. The Fallback: Two-Bucket Decoupling as an Anti-Fragmentation Firewall

If C@G declines to share their instance due to PSC compliance or procurement boundaries, **CareerCompass will not procure a second Workable instance**. 

Instead, the Two-Bucket model prevents the dual-instance nightmare by decoupling informal opportunities from ATS infrastructure entirely:

| Opportunity Type | If C@G Shares Their Instance (Single-Instance Model) | If C@G Declines to Share (Anti-Fragmentation Fallback) |
|---|---|---|
| **Formal Jobs** | Ingested via API (`GET /jobs`) with internal apply | Read-only outbound link to `Careers@Gov` (`F-23`) |
| **Rotations & SJR** | Managed in Workable under `Rotations` pipeline | Managed natively in CareerCompass via single PDF upload (`F-05`) and 1-click candidate pack zip download (`F-11`) |
| **STIPs** | Managed in Workable under `STIP Enrollment` pipeline | Managed via standardized Workforce Development FormSG template |
| **Gigs** | Managed in Workable under `Gig Matching` pipeline | Managed natively in CareerCompass via 3-field quick-post (`F-01`) |

#### Why this protects government from dual-instance fatigue:
* If C@G says "no" to shared tenant access, CareerCompass does not spin up a shadow ATS.
* Agency HR officers still interact with **only one ATS console** (C@G Workable for formal jobs). For informal mobility, they use CareerCompass as a lightweight employee service without managing two recruitment databases.

---

### C. Comparative Evaluation Matrix

| Decision Criteria | Option A: Single Shared Instance (Headless Partitioning) | Option B: Procuring 2nd Workable Instance (Dual-Instance) | Option C: Two-Bucket Hybrid (Locked R1 Strategy) |
|---|---|---|---|
| **HR Recruiter Experience** | Unified (Single login for all public sector roles) | Fractured (HR must log into two separate ATS portals) | Clean (Workable for formal hiring, Compass for mobility) |
| **Host Manager Experience** | Headless UI inside CareerCompass | Forced into standard enterprise Workable UI | Native 3-field post or FormSG (Zero ATS overhead) |
| **Licensing Impact** | Minimal (Shared service account, no per-host seats) | High (Duplicated base contract and seat licenses) | Zero additional ATS license cost |
| **Dependency on C@G** | High (Requires C@G write scopes and tenant setup) | Low (Independent procurement) | **Zero launch dependency for R1** |
| **R1 Delivery Feasibility** | Unfeasible in 5.5 sprints (Requires security reviews) | Impossible in 5.5 sprints | **100% aligned with 5.5-sprint capacity** |

---

### D. Negotiating Posture for Daryl Snow (OGP) & C@G Sync

When product management and the Tech Lead meet with Daryl Snow and C@G stakeholders, frame the strategy using three principles:
1. **Advocate for Option A long-term:** State our preference for a single shared instance partitioned by department, using CareerCompass as the headless frontend.
2. **Reassure on recruiter scope:** Guarantee that informal opportunities will not contaminate C@G's public hiring queues or inflate reviewer seat requirements.
3. **Enforce zero launch dependency:** Reiterate that CareerCompass R1 will launch on schedule regardless of C@G's technical discovery timeline, falling back cleanly to Option C (FormSG and native candidate packs).

---

## 8. Strategic Recommendations & Phase-Gate Roadmap

| Release Phase | Gigs Mechanism | STIPs Mechanism | Workable Integration Scope |
|---|---|---|---|
| **Phase 1: R1 (Current)** | Native 3-Field Quick Post (`F-01`) + line manager CC (`F-03`) | Aggregated in tabs (`F-17`) linking out to standard WD FormSG | **Zero dependency.** Technical discovery led by Tech Lead / OGP TBD. Read-only link out to C@G for formal jobs (`F-23`). |
| **Phase 2: R2** | In-Compass gig manager with direct email review | Standardized FormSG with automated webhook intake into Compass | Pilot Workable API integration with 1 to 2 partner agencies for **SJR and Rotations only**. |
| **Phase 3: R3** | Optional sync to Workable via service account API | Full Workable STIP pipeline if licensing and C@G tenant partitioning are resolved | Unified backend across all opportunity types, retaining CareerCompass as the unified frontend. |

### Summary Guidance for Product Leadership
Do not force STIPs and Gigs into Workable in R1. Doing so would violate our locked 5.5-sprint capacity ceiling and entangle the squad in complex licensing negotiations with C@G. Keep Bucket 1 lightweight (FormSG and native posting), and preserve Workable for substantive, CV-based career opportunities.

