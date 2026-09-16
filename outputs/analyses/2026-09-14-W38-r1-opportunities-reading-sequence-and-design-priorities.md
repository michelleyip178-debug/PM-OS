# CareerCompass R1 Opportunities: Reading Sequence & Design Priorities

**Document Reference:** `2026-09-14-W38-r1-opportunities-reading-sequence-and-design-priorities`  
**Date:** 2026-09-14 (Week 38)  
**Author:** Michelle Yip (Product Manager)  
**Target Audience:** Michelle Yip (Self-Reference), Li Ting Kway (Product Design Lead), Adrian Ang (Director of Product Management)  
**Standing Directive:** Refer to this document in the Daily Plan until explicitly stopped.  

---

## 1. Master Document Reading Sequence

Review the R1 Opportunities document suite across four progressive layers, moving from strategic alignment down to tactical execution:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    R1 OPPORTUNITIES READING SEQUENCE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ LAYER 1: THE EXECUTIVE ANCHOR (Start Here · 10 Mins)                        │
│ • Executive Summary: Pivot, Two-Bucket Model, 5.5-Sprint Budget             │
│ • Jam Meeting Notes: Adrian & Barry quotes, FormSG limitations              │
├─────────────────────────────────────────────────────────────────────────────┤
│ LAYER 2: THE CONTRACT & DELIVERY PLAN (15 Mins)                             │
│ • Formal Decision Record (DACI): Decisions 1 to 6 locked                    │
│ • 5.5-Sprint Execution Roadmap: Sprint 1 to 5.5 build plan & cut-lines      │
├─────────────────────────────────────────────────────────────────────────────┤
│ LAYER 3: STAKEHOLDER ALIGNMENT PLAYBOOKS (Before Meeting Partners)          │
│ • Business Owner Questions: Xian Zhang & Jacky sync pack                    │
│ • Workforce Dev & C@G Guide: Track A (FormSG) & Track B (Workable) syncs    │
│ • Workable Micro-Mobility Research: Single vs multi-instance architecture   │
├─────────────────────────────────────────────────────────────────────────────┤
│ LAYER 4: DEEP REFERENCE & SPECIFICATIONS (As Needed)                        │
│ • Master PRD: End-to-end specifications & functional requirements           │
│ • RICE Analysis: Problem decomposition, hypotheses & 30-feature scores      │
│ • Document Index: Complete master file directory                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Layer 1: The Executive Anchor (Start Here · 10 Mins)
1. [2026-09-14-W38-r1-opportunities-executive-summary.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-executive-summary.md)
   * **Why first:** Synthesizes the entire initiative in 3 pages: the pivot to "Discovery First, Selection Out-of-House", the Two-Bucket model, Barry Lim's field standardization rule, and the locked 5.5-sprint capacity ceiling.
2. [2026-09-14-W38-r1-opportunities-jam.md](file:///Users/michelleyip/Documents/PM-OS/outputs/meeting-notes/2026-09-14-W38-r1-opportunities-jam.md)
   * **Why next:** Captures the leadership discussion (Adrian Ang, Barry Lim, Li Ting Kway, Michelle Yip), exact leadership quotes, the Two-Bucket ASCII architecture, and the FormSG limitations.

### Layer 2: The Contract & Delivery Plan (15 Mins)
3. [2026-09-14-W38-decision-r1-opportunity-architecture-and-ats-boundary.md](file:///Users/michelleyip/Documents/PM-OS/outputs/decisions/2026-09-14-W38-decision-r1-opportunity-architecture-and-ats-boundary.md)
   * **Why:** The official DACI governance record locking Decisions 1 to 6, Barry's field rule, and non-ATS boundaries.
4. [2026-09-14-W38-r1-5-5-sprint-delivery-roadmap.md](file:///Users/michelleyip/Documents/PM-OS/outputs/roadmaps/2026-09-14-W38-r1-5-5-sprint-delivery-roadmap.md)
   * **Why:** The sprint-by-sprint engineering plan (Sprint 1 to 5.5), breaking down the 4.8 sp feature development across 8 features and the 0.7 sp hardening buffer.

### Layer 3: External Stakeholder Sync Packs (Reference Before Meetings)
5. [2026-09-14-W38-r1-opportunities-bo-alignment-questions.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-bo-alignment-questions.md)
   * **Target:** Business Owners Xian Zhang Guo (PSD) and Jacky Lee (PSD). Covers 6 policy questions, FormSG caps, outcome mandates, and OTG cutover quotas.
6. [2026-09-14-W38-workforce-development-and-cg-alignment-guide.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-workforce-development-and-cg-alignment-guide.md)
   * **Target:** Workforce Development (Track A FormSG template) and C@G / Daryl Snow (Track B Workable discovery).
7. [2026-09-14-W38-workable-stips-gigs-structuring-research.md](file:///Users/michelleyip/Documents/PM-OS/outputs/research-synthesis/2026-09-14-W38-workable-stips-gigs-structuring-research.md)
   * **Target:** Tech Lead and C@G architecture sync. Analyzes how STIPs and Gigs can be modeled as jobs in Workable, custom pipelines, and how to resolve the single vs multi-instance dilemma via headless department partitioning.

### Layer 4: Deep Reference & Detailed Specifications (As Needed)
8. [2026-09-14-W38-r1-opportunities-marketplace-planning-review.md](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md)
   * The master PRD detailing functional requirements, edge cases, user journeys, and Day 1 readiness.
9. [2026-09-14-W38-r1-opportunities-problems-hypotheses-rice.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-problems-hypotheses-rice.md)
   * Problem decomposition, recalibrated hypotheses, portfolio tiers, and 30-feature RICE rankings.
10. [2026-09-14-W38-r1-opportunities-document-index.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-document-index.md)
   * Master directory linking all analytical, strategic, and data assets.

---

## 2. Design Priorities to Brief Li Ting Kway

Brief Li Ting on five immediate design priorities for Sprints 1 to 4, anchored by the locked 5.5-sprint capacity ceiling:

### Priority 1: Browsing Tabs & Card Hierarchy (`F-17` · Sprint 1 Build)
* **The Task:** Design the catalog navigation dividing opportunities into four top-level tabs: *Gigs*, *STIPs*, *Rotations*, and *Jobs*.
* **Card Metadata Differences:**
  * **Gigs:** Display weekly time commitment (e.g. "10% time · ~4 hrs/wk"), duration (e.g. "8 weeks"), and host agency/branch.
  * **STIPs:** Display cohort dates (e.g. "12 to 14 Nov 2026"), host ministry, and format.
  * **Rotations / SJR:** Display target grade band (e.g. "MX11-MX12") and rotation cycle period.
* **Call-to-Action (CTA) Button Clarity:**
  * For STIPs: Outbound redirect link with icon: `[ Apply via FormSG ↗ ]`.
  * For Rotations/SJR: Native modal launcher: `[ Apply with Resume (PDF) ]`.
  * For Gigs: Native modal launcher: `[ Express Interest ]`.
  * For Formal Jobs: Outbound redirect link with icon: `[ View on C@G ↗ ]`.

### Priority 2: Barry's Field Standardization Rule & Modal Flows (`F-01` & `F-05` · S1-S3)
* **The Task:** Design lightweight application and posting modals adhering strictly to Barry Lim's rule (banning custom form builders).
* **Candidate Application Modal:**
  * Pre-fill 4 standard fields from WOG AD / Compass profile: Full Name, Official Email, Current Ministry, Current Grade.
  * Allow **exactly one optional short text prompt** (max 500 characters, e.g. "Briefly describe your relevant domain experience").
  * Single PDF resume upload dropzone (max 5MB, upload progress, virus scan state) for Rotations (`F-05`).
  * Self-declaration checkbox: *"I confirm that my direct supervisor supports this application"* (`F-03`).
* **Quick Project Gig Posting Modal (`F-01`):**
  * A 3-minute, 3-field posting modal for informal leads: (1) Deliverable Scope, (2) Weekly Hours, (3) Duration in Weeks.

### Priority 3: Seniority Fit Advisory Banner (`F-09` · Sprint 3)
* **The Task:** Design an advisory banner when an officer's current grade mismatches the target role.
* **Design Rule:** **Never use an error modal or hard block.** Use an empathetic, amber/yellow advisory banner:
  > *"This rotation is calibrated for MX10-MX11 officers. Your profile indicates MX12. You may still apply, but host agencies prioritize applicants within the indicated seniority band."*
* Provide two balanced buttons: `[ Proceed with Application ]` and `[ Browse Other Rotations ]`.

### Priority 4: SJR-to-Internal-Job Scope Toggle (`F-28` · Sprint 3)
* **The Task:** For host HR coordinators, design a 1-click segmented control on their posting card:
  `[ Restricted: SJR Eligible Cohort Only ]` <---> `[ Open: Whole-of-Government Internal Job ]`
* Include a short tooltip explaining that switching to Open allows any public officer across the civil service to apply.

### Priority 5: 1-Click Candidate Pack Download Card (`F-11` · Sprint 4)
* **The Task:** Replace the traditional ATS candidate board with a simple download card on the host dashboard.
* Design a clean card:
  * Shows total applicant count (e.g. "14 Candidates Applied").
  * Action button: `[ Download Candidate Pack (ZIP) ]`.
  * Explanatory subtext: *"Includes all candidate PDF resumes and an index.csv summary for offline panel evaluation."*

---

## 3. What Li Ting Must STOP / NOT Design (Non-ATS Guardrails)

Protect Li Ting's time and ring-fence our 5.5-sprint budget by enforcing these four hard cut-lines:
1. **No Candidate Review Boards:** Stop all wireframing of multi-stage Kanban columns (*Applied → Shortlisted → Phone Screen → Interview → Offered → Rejected*). That was `F-07`, and it is deferred to R2.
2. **No Form Builder Canvas:** Do not design interfaces allowing agencies to add bespoke screening questions or file upload matrices.
3. **No In-Portal Attendance Rosters:** Do not design session check-in tools (`F-22`). Attendance is tracked via WD spreadsheets.
4. **No Real-Time Seat Countdown Badges:** Do not design live seat countdown meters (`F-18`). STIP capacity is capped via FormSG's native submission limit.
