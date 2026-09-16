# Strategic Proposal: CareerCompass R1 Rescope & Leadership Pitch

**Document Reference:** `2026-09-16-W38-r1-strategic-rescope-proposal`  
**Date:** 2026-09-16 (Week 38)  
**Author:** Michelle Yip (Product Manager)  
**Audience:** Adrian Ang (Director of Product Management), Product Trio, Business Owners (Xian Zhang Guo, Jacky Lee, Christopher Woo)  
**Target Release:** CareerCompass R1 (Ring-Fenced 5.5 Engineering Sprints)  

---

## 1. Executive Summary & The One Core Outcome

We've got two non-negotiable promises on our plate: make applications painless in R1, and shut down legacy OTG by 2028. To hit both without burning out the squad, we're rescoping R1 around one clean outcome:

> **R1 makes CareerCompass the primary officer-facing journey for Whole-of-Government opportunities (Discover → Evaluate → Apply → Submit → Track), while strictly avoiding building an Applicant Tracking System (ATS).**

We aren't building a recruiter ATS for HR departments. We're building the minimum viable mobility transaction needed to pull officers off legacy OTG and end the application black hole.

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

---

## 2. The 3 Core Pillars & In-Scope Build

### Pillar 1: Move Off OTG (Opportunity Coverage & Ingestion Architecture)

To decommission legacy OTG by 2028, CareerCompass brings the complete set of Whole-of-Government opportunity models into a single, unified discovery surface.

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

---

#### OTG Coexistence Architecture: Two Implementation Options for R1

To handle the transition from legacy OTG without overburdening agency admins or stalling the R1 timeline, R1 structures OTG coexistence around two concrete options:

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

##### Option A: Symmetrical Dual-Posting Bridge (Primary Path, Contingent on OTG API)
* **Outbound API Push to OTG:** Opportunities created in Compass are pushed into OTG via API, ensuring officers still on legacy OTG discover pilot roles.
* **Link-Out Back to Compass (`F-29`):** OTG listings for Compass-originated roles disable native OTG applications and display an external link directly to the Compass opportunity card.
* **Inbound Batch Ingestion with Deduplication (`F-26`):** For non-pilot agencies, the existing daily ingestion continues, passing through an automated deduplication filter that drops roles already authored in Compass.
* **Go/No-Go Trigger:** If the OTG team confirms write API delivery within Sprint 1.

##### Option B: Asymmetrical Sunset Cutover (Decoupled Fallback, Recommended for Speed & Sunset)
* **Context & Reality Check:** OTG currently has no bulk-upload mechanism. All postings in legacy OTG are created manually one by one. Without an API, mirroring postings into OTG would force human data-entry clerks or agency admins to type every role twice, which is unacceptable toil.
* **Strict One-Way Ingestion (OTG to Compass only):** Compass ingests legacy OTG postings so that officers on Compass see 100% of WOG opportunities. Compass never pushes back to OTG.
* **Clean Pilot Agency Exclusivity:** The 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) post exclusively in Compass. They stop creating opportunities in OTG entirely, giving admins immediate relief.
* **OTG Traffic Rerouting:**
  1. **Sticky Header Banner on OTG:** *"Looking for new WOG Gigs and Attachments? Pilot agencies now post exclusively on CareerCompass. [Explore on CareerCompass]"*
  2. **Single Pinned Tile in OTG:** A permanent pinned card in OTG linking directly to the Compass opportunity catalog.
* **Strategic Payoff:** Decouples R1 launch from legacy OTG vendor timelines, eliminates all double-entry, and trains public officers to adopt Compass immediately, accelerating the 2028 decommissioning target.

**R1 Outcome:** Public officers no longer need to check disparate portals or legacy OTG. 100% of internal civil service mobility types are discoverable and actionable from CareerCompass.

### Pillar 2: Apply Seamlessly (The Core R1 Promise)

Replace disjointed, multi-portal defection with a unified application loop:

$$\text{Discover} \longrightarrow \text{Evaluate} \longrightarrow \text{Apply} \longrightarrow \text{Pre-fill} \longrightarrow \text{Questions} \longrightarrow \text{CV Attachment} \longrightarrow \text{Submit} \longrightarrow \text{Confirmation}$$

* **Seamless In-App Experience:**
  * **Editable Compass Profile Pre-Fill:**
    * For officers with an existing CareerCompass profile (POCDEX-synced), standard fields (Full Name, Current Agency, Official Email, Job Family, Grade/Scheme, Endorsed Skills) auto-populate into the application modal.
    * **User Editable:** Officers can freely review, edit, and update these fields directly within the application flow without altering their core POCDEX master record.
    * **Manual Entry Fallback:** Officers without an existing CareerCompass profile (e.g. non-pilot agencies, newly joined officers, or non-POCDEX agencies) fill in the standard fields manually upon application.
  * **Direct CV Attachment (`F-05`):** Single PDF resume upload (max 5MB) with instant virus scanning.
    * *The Rotations Breakthrough:* Rotations (294 SJRs, 50 IJRs) and Secondments (243 pure & blended) represent **51% of all historical postings** across WOG. Because legacy OTG had zero CV upload capability, officers were forced into cold emails or external Careers@Gov links, creating the 89% outcome black hole. `F-05` brings this 51% of public service mobility into a native, auditable transaction for the first time.
  * **Embedded Form Processing for STIPs/Gigs:** Instead of jarring external URL redirects that lose candidate state, FormSG functions as an embedded processing engine (via headless API or seamless embedded container), preserving the officer's in-portal context.
  * **Workable Integration for Formal Jobs:** Seamless outbound handoff for formal, CV-based roles where Workable acts as the back-office ATS pilot.

### Pillar 3: Close the Loop ("My Applications" & Lightweight Back-Office)

Eliminates the public service "application black hole" where 89% of applicants receive zero outcome updates:

* **Officer "My Applications" Drawer:**
  * List of submitted applications with date, role title, and host agency.
  * **Deliberately Simple 3-Stage Status Model:**
    $$\text{Submitted} \longrightarrow \text{In Review} \longrightarrow \text{Outcome (Selected / Concluded)}$$
* **Automated Expiry Rule (The Reality-Check Safeguard):**
  * If a host agency fails to update an outcome within 30 days of posting close, CareerCompass automatically transitions the status to *"Application Cycle Concluded (No Host Update)"*. This prevents infinite pending states without waiting on manual compliance.
* **Lightweight Agency HR Workflow (Central Agency HR Only):**
  * Create, edit, and close opportunity listings.
  * View applicant list and download candidate pack via 1-Click ZIP export (`F-11`).
  * Simple 1-click status update action to advance candidates or conclude the posting.

---

## 3. The Non-ATS Boundary (Explicit Defers)

To guarantee delivery within our ring-fenced **5.5-sprint engineering runway**, we enforce a strict razor:

> **"If a feature primarily helps recruiters manage recruitment rather than enabling internal mobility in Compass, it is outside R1."**

```
┌───────────────────────────────────────┐       ┌───────────────────────────────────────┐
│     CAREERCOMPASS (MARKETPLACE)       │       │       ENTERPRISE ATS / HRPS           │
├───────────────────────────────────────┤       ├───────────────────────────────────────┤
│ • Discovery & Catalog Partitioning    │       │ • Multi-interviewer scoring rubrics   │
│ • Editable Profile Pre-Fill & CV (F-05│       │ • Automated panel calendar sync       │
│ • Embedded FormSG Intake              │  ───> │ • Formal offer letter generation      │
│ • Secure CV Storage & Batch ZIP (F-11)│       │ • Salary negotiation & grade banding  │
│ • Simple 3-Stage Status (Submitted/   │       │ • Enterprise payroll & tenure actions │
│   In Review/Outcome) + Auto-Expiry    │       │ • Configurable recruiter pipelines    │
└───────────────────────────────────────┘       └───────────────────────────────────────┘
```

### What CareerCompass R1 Will NOT Build:

| Excluded ATS Capability | Why It Is Excluded | Where It Belongs |
|---|---|---|
| **Configurable recruitment pipelines** | Consumes 3+ sprints on custom workflow state machines. | Enterprise ATS (Workable) |
| **Interview panel scheduling & calendar sync** | Complex Outlook/Google OAuth permissions and meeting room APIs. | Offline coordination via Teams/Email |
| **Multi-interviewer scoring rubrics** | Requires confidential scorecard permissions and blind reviews. | Offline review panels via F-11 ZIP |
| **Complex establishment approvals & headcounts** | Entangles squad in ministry-specific HR establishment rules. | Agency HRPS / Cumulus |
| **Offer generation & digital contract signing** | Heavy legal and union clearances across ministries. | Standard agency appointment letters |
| **Candidate CRM & passive talent pooling** | Diverts focus from live transactional mobility into recruiter tools. | Future ATS capability |
| **Agency-specific custom form builders** | Violates Barry Lim's standardization rule; turns Compass into FormSG. | Standardized 5-field schema |

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

---

## 5. How to Pitch This to Leadership (The Script for Adrian Ang)

When presenting to Jamie Ang (Deputy Secretary, PSD), SteerCo, or Business Owners:

1. **Acknowledge the Constraint:** *"We've got a locked 5.5-sprint runway and confirmed funding through March 2027. We can't afford to build another SMGS or duplicate Workable."*
2. **Hit the Legacy Pain Point Directly:** *"51% of all historical opportunity postings across the government are Rotations and Secondments, but OTG literally could not accept a resume. Officers were forced to send cold emails to HR mailboxes or get kicked out to Careers@Gov, which is why 89% of outcomes were never recorded."*
3. **Deliver the Razor:** *"We're building the minimum viable mobility transaction across three pillars: Move Off OTG, Apply Seamlessly, and Close the Loop. Let Workable and agency HR systems handle back-office selection."*
4. **Show the Exit Value:** *"Every feature in R1 burns down our reliance on the legacy OTG contract, keeping us on track for the 2028 shutdown without leaving officers in an application black hole."*
