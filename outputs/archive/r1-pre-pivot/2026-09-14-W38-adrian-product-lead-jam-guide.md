# CareerCompass R1: Product Lead Alignment Jam Guide (1-Hour Review with Adrian Ang)

**Document Type:** Strategic Alignment & Experience Delivery Playbook  
**Date:** 2026-09-14  
**Target Meeting:** Monday, 2026-09-14 (60 Minutes)  
**Participants:** Michelle Yip (PM), Adrian Ang (Director of Product Management / Product Lead, CareerCompass)  
**Supporting Participants:** Jace Tan (Lead PM), Tan Pow Hwee (Tech Lead), Li Ting Kway (Design Lead)  
**Core Objective:** Align with Adrian on the target user experience, secure endorsement for the 14-feature MVP release, lock the 3 core programme decisions he owns, and equip Adrian with clear talking points for Jamie Ang (Deputy Secretary, PSD) and the Steering Committee.

---

## 1. The Core Experience We Are Building

This release transforms CareerCompass from a passive bulletin board into an active internal mobility marketplace. The entire scope is designed around three distinct user experiences:

### The Officer Experience (Civil Service Talent)
1. **Clear Discovery Without Clutter:** Officers can separate quick project gigs from STIPs using clean catalog sub-tabs ("Projects & Rotations" vs "STIPs"). High-volume STIPs seat listings no longer bury project opportunities.
2. **Upfront Fit Guidance:** Before applying to a rotation, officers see the target seniority level. If their current grade is outside the range, they receive a friendly advisory notice before submitting, preventing silent rejections later.
3. **Respect for Officer Time:** Applying for a STIP takes 2 clicks using verified profile data. If a cohort is full, officers see a clear "Session Full" notice so they do not waste time applying.
4. **Frictionless Project Support:** Applying for a part-time project gig requires only a simple commitment check and sends a courtesy email notice to the officer's supervisor, avoiding awkward administrative friction upfront.
5. **Transparency Instead of Silence:** Officers no longer sit in an 89% "black hole" of silence. They see their status update in real time (Under Review, Shortlisted, Offered, Completed), and receive prompt, polite closure notes when a posting finishes.

### The Agency Poster Experience (HR & Review Panels)
1. **Fast, Guided Posting in Minutes:** HR teams are not burdened by complicated form builders. They can post a gig in 3 simple fields, publish a STIP with seat limits, or set up a substantive rotation with up to 5 straightforward screening questions.
2. **One-Click Candidate Review Folders:** Review panels no longer chase scattered files across personal drives and email threads. They can download all candidate profiles and resumes in one organized folder with a single click.
3. **Simple Candidate Progress Tracking:** HR moves applicants across four simple stages with clarity. When a posting closes, one click sends a polite closure note to everyone not selected, ending candidate ghosting across the service.

### The Whole-of-Government Leadership Experience (Adrian, PSD, SteerCo)
1. **A Single Trusted Portal:** Agency HR teams stop breaking away to create ad-hoc survey links and external spreadsheets.
2. **One Cohesive Transaction Loop Across Opportunity Types:** Rather than a fragmented checklist of 14 separate features, R1 delivers one complete transaction loop organized across **Four Core Opportunity Types** (Must-Haves: 8.0 sprints) plus **Conditional Add-Ons** (1.5 sprints) for policy governance.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│               THE R1 MVP: ONE COMPLETE TRANSACTION LOOP BY OPPORTUNITY TYPE            │
├─────────────────────────┬─────────────────────────────┬────────────────────────────────┤
│ 0. SHARED DISCOVERY     │ 1. GIGS                     │ 2. STIPs                       │
│ (Must-Have: 0.5 sp)     │ (Must-Have: 1.5 sp)         │ (Must-Have: 2.0 sp)            │
├─────────────────────────┼─────────────────────────────┼────────────────────────────────┤
│ • Browsing Tabs (F-17)  │ • Quick Gig Posting (F-01)  │ • Seat Availability (F-18)     │
│                         │ • Supervisor Courtesy CC    │ • Host Attendance Roster (F-22)│
│                         │   (F-03)                    │                                │
│                         │ • Priority Spotlight (F-19) │                                │
├─────────────────────────┼─────────────────────────────┴────────────────────────────────┤
│ 3. ROTATIONS            │ 4. SECONDMENTS (CONDITIONAL ADD-ON: 1.5 sp)                  │
│ (Must-Have: 4.5 sp)     │ Policy Governance for Central HR (Built if velocity permits) │
├─────────────────────────┼──────────────────────────────────────────────────────────────┤
│ • Direct Resume (F-05)  │ • Secondment Identification Badge (F-13)                     │
│ • Seniority Fit (F-09)  │ • Rights & Terms Summary (F-15)                              │
│ • 4-Stage Tracker (F-07)│ • 3-Party Secondment Progress Tracker (F-21)                 │
│ • Candidate Pack (F-11) ├──────────────────────────────────────────────────────────────┤
│ • Cycle Rollover (F-20) │ 5. JOBS: Baseline read-only ingestion feed and outbound link │
└─────────────────────────┴──────────────────────────────────────────────────────────────┘
```

---

## 2. 60-Minute Jam Flow & Visual Route

```
[00 to 10m] Experience Boundaries ──> [10 to 25m] 4 Opportunity Journeys ──> [25 to 40m] 3 Key Decisions ──> [40 to 52m] Leadership Defense ──> [52 to 60m] Day 1 Readiness
Marketplace vs Heavy Software          Gig, STIPs, Rotations, Jobs           Cutover, 5 Fields, Scope      Arm Adrian for Jamie Ang       Sprint 1 Kickoff
Must-Haves vs Conditional Add-Ons      Solving Churn at Each Stage           Locking the Cut-Line          RICE Reality & Defense Card    Polish & Sequencing
```

---

## 3. Minute-by-Minute Jam Guide & Scripted Pitch

### [00:00 to 00:10] The Experience Boundary: Marketplace Simplicity vs Heavy Software Bloat

* **Reference Screen:** [Master PRD](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md), Section 3.3 (Experience Scope Guardrails).
* **PM Script / Framing:**
  > "Adrian, to deliver a high-quality product on time, we shaped this release around a clear principle: CareerCompass is a fast, transparent talent marketplace, not an enterprise recruitment software suite.
  >
  > Rather than building a laundry list of 14 disjointed features, we organized the release around our core public sector opportunity models: **Gigs, STIPs, Rotations, and Jobs**.
  >
  > The Must-Haves across our core opportunity models take **8.0 engineering sprints** (Shared Discovery: 0.5 sp, Gigs: 1.5 sp, STIPs: 2.0 sp, Rotations: 4.5 sp). We budgeted an additional **1.5 sprints for Conditional Add-Ons** covering Secondment policy governance (F-13, F-15, F-21) to fulfill PSD's central tracking. Across our 2 engineers, that leaves a half-sprint buffer on our 10-sprint budget. Crucially, if unexpected security checks or auth edge cases compress our timeline, the Secondment Conditional Add-Ons yield first, ensuring the core placement experience never slips.
  >
  > We protect our delivery quality by deliberately keeping out four complicated workflows that bogged down previous internal platforms:
  > 1. We do not build calendar scheduling tools. Interview panels coordinate interview dates directly via standard email.
  > 2. We do not build complex scoring rubrics or rating scorecards. Review panels evaluate candidates offline using their own agency criteria.
  > 3. We do not build multi-step form wizards or branched surveys. Custom questions are capped at 5 straightforward fields.
  > 4. We do not build in-browser document viewers or mark-up tools. Reviewers download the full candidate folder in one click to read resumes comfortably.
  >
  > Keeping the experience lightweight ensures officers and HR actually enjoy using the platform."
* **Goal:** Reassure Adrian that the scope is disciplined, packaged cohesively, and protected by an explicit cut-line.

---

### [00:10 to 00:25] The 4 Opportunity Experiences: Stopping Agency Defection

* **Reference Screen:** [Master PRD](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md), Section 3.3.1 (HR Poster Experience) and Section 5 (The 4 Opportunity Models).
* **PM Script / Framing:**
  > "Why did agencies like MDDI and ESG drift away to external survey forms during earlier pilots? Because static listings could not collect custom screening questions or attached resumes.
  >
  > To solve this while keeping the interface clean and friendly, we organize the user journey into four distinct opportunity experiences:
  > * **Gigs (Part-time projects):** Quick Project Posting (`F-01`), workload commitments (such as 1.5 days per week), supervisor courtesy notification (`F-03`), and Priority Spotlight for Unfilled Roles at day 7 (`F-19`). No resume upload required.
  > * **STIPs (Short-Term Immersions):** 2-click profile applications, Real-Time Seat Availability Display (`F-18`), automatic switches to 'Session Full' when filled, and a Host Attendance Check-Off Roster (`F-22`). No resume upload required.
  > * **Rotations (Substantive roles & secondments):** This is the only place where formal PDF resumes are attached via Direct Resume Attachment (`F-05`). It includes Seniority Fit Guidance with friendly mismatch advisory (`F-09`), a 4-Stage Candidate Progress Tracker (`F-07`), 1-Click Candidate Pack Download (`F-11`), Rotation Cycle Rollover Notice (`F-20`), Secondment Identification Badge (`F-13`), Secondment Rights & Terms Summary (`F-15`), and a 3-Party Secondment Progress Tracker (`F-21`).
  > * **Jobs (Public Sector Careers):** A clean discovery feed of open civil service job openings that links directly to central public service portals.
  >
  > For posting, HR gets an intuitive 3-step creation flow: select the opportunity type, confirm 5 core details, and optionally add up to 5 simple screening questions. This gives MDDI and ESG the flexibility they need without cluttering the screen."
* **Goal:** Show Adrian that each opportunity type has a tailored, frictionless user journey.

---

### [00:25 to 00:40] The 3 Core Programme Decisions (Owned by Adrian)

* **Reference Screen:** [Transition Strategy Proposal](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-07-W37-r1-opportunity-creation-transition-strategy.md), Section 4 (Governance Decisions).
* **PM Script / Framing:**
  > "Adrian, there are three key program choices where we need your leadership decision:
  >
  > **Decision 1: Phased agency transition versus waiting for a distant launch.**
  > We recommend onboarding our 6 pilot agencies (PSD, MDDI, ESG, SNDGO, MOF, GovTech) into native posting for R1, while non-pilot agencies remain on read-only feeds. A phased rollout allows us to support agency HR closely and gather feedback. Do you agree with this phased rollout?
  >
  > **Decision 2: Keeping creation simple with 5 flat fields.**
  > Agency HR teams will ask for complex multi-page surveys. We need your support to hold the line: 5 standard fields (short text, long text, dropdown, checkbox, file attachment) and zero branching logic for R1.
  >
  > **Decision 3: Endorsing the Core Opportunity Scope (Gigs, STIPs, Rotations) & Conditional Add-Ons.**
  > Can you confirm the core opportunity model scope (8.0 sprints across Shared Discovery, Gigs, STIPs, and Rotations) and agree that if external security reviews or auth integrations compress our velocity, our secondment governance items (F-13, F-15, F-21, 1.5 sprints) serve as designated Conditional Add-Ons to protect the core placement experience?"
* **Goal:** Walk out with clear, documented executive decisions and an agreed cut-line.

---

### [00:40 to 00:52] Equipping Adrian for Jamie Ang (Deputy Secretary, PSD) & Steering Committee

* **Reference Screen:** [RICE Analysis & Leadership Talking Points](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-problems-hypotheses-rice.md), Section 3.3 (Leadership Talking Points).
* **PM Script / Framing:**
  > "When you review this with Jamie Ang or present to the Steering Committee, you will likely face three questions. Here are the user-centered responses:
  >
  > **Question 1: 'Why not let agencies continue using external survey links?'**
  > *Your answer:* External survey links create an 89% silence rate for candidates. Applications get scattered across individual inboxes, personal cloud folders, and private spreadsheets. Statutory boards hit permission barriers, and officers face weeks of silence. CareerCompass provides officers with a single, respectful application experience and keeps public service candidate records organized and private.
  >
  > **Question 2: 'Why advise candidates on grade instead of strictly locking them out?'**
  > *Your answer:* In our user research, single applicants submitted up to 112 applications across mismatched grades, overwhelming review panels. A friendly advisory notice before submission (`F-09`) discourages accidental or spam applications while allowing legitimate exceptions to proceed without bureaucratic permission barriers.
  >
  > **Question 3: 'Why not connect directly into central government HR systems right now?'**
  > *Your answer:* Deep system-to-system integration across diverse agency HR setups requires multi-month security clearances and committee approvals that would delay release by two quarters. CareerCompass uses the officer's verified login identity to deliver an immediate, polished experience today, setting up deeper system connections in later phases."
* **Goal:** Give Adrian clear, confident explanations that prioritize user value and practical delivery.

---

### [00:52 to 00:58] Day 1 User Experience Readiness: Ensuring a Smooth First Impression

* **Reference Screen:** [Master PRD](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md), Section 3.5 (Day 1 User Experience Readiness).
* **PM Script / Framing:**
  > "To ensure officers and hiring managers have a polished experience on Day 1, we established five user experience readiness criteria:
  > 1. Clear screen layouts and data fields agreed between design and engineering early in Sprint 1 so screens look consistent.
  > 2. Smooth login identity recognition that automatically identifies the officer's grade, with an easy manual confirmation if needed.
  > 3. Fast, secure file uploads with instant progress badges (*Uploading*, *Safety Check*, *Ready*).
  > 4. Quick candidate folder downloads prepared smoothly in the background so the browser never freezes.
  > 5. A clean cutover plan for pilot agencies so officers never see confusing duplicate postings."
* **Goal:** Reassure Adrian that the user experience will feel cohesive, responsive, and reliable.

---

### [00:58 to 01:00] Wrap-Up & Commitments

* **Decisions to Lock:**
  1. Adrian approves the Core Opportunity Model Scope for Gigs, STIPs, and Rotations (8.0 sprints) and confirms the Secondment Governance layer (1.5 sprints) as the agreed Conditional Add-Ons.
  2. Adrian supports the phased pilot agency rollout with PSD and agency heads.
  3. Michelle coordinates with design and engineering on Sprint 1 screen layouts and user flows.

---

## 4. Quick-Response Defense Card for Adrian

| Executive Question | Experience-Centered Answer |
|---|---|
| **Can we deliver this on time?** | Yes. The core opportunity models (Shared Discovery, Gigs, STIPs, Rotations) take 8.0 sprints across 2 engineers. Adding 1.5 sprints for secondment governance brings total scope to 9.5 sprints, leaving a half-sprint buffer to polish user interactions. |
| **What happens if dev velocity slips?** | We have an explicit delivery plan: Secondment governance (F-13, F-15, F-21, 1.5 sprints) serves as our Conditional Add-Ons, ensuring the Must-Have core programs (Gigs, STIPs, Rotations) ship without compromise. |
| **Why do browsing tabs score higher than resume uploads?** | RICE scores divide by effort, so low-lift UI items (0.5 sp) score high mathematically. But strategically, Direct Resume Attachment (F-05) and the 4-Stage Tracker (F-07) are the non-negotiable operational spine of the marketplace. |
| **Why not build interview calendar booking?** | Interview panels already manage their schedules comfortably via email. Adding calendar syncing would consume weeks of development without improving the core hiring outcome. |
| **Why limit custom questions to 5 simple fields?** | It keeps the application form fast and friendly for applicants while giving hiring managers exactly what they need to assess fit. |
| **How do we help postings that get zero applicants?** | We separate STIPs into their own tab so Gigs and Rotations are visible, and automatically highlight unviewed gigs with a 'Needs Talent' badge after 7 days. |
| **Are applicant resumes kept safe and private?** | Yes. Candidate resumes are protected within the verified public sector environment, accessible only to designated review panels, and automatically archived after hiring concludes. |

---

## 5. Screen-Share Preparation

Have these reference documents ready before starting:

1. **Master Specification:** [Master PRD](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md)  
   * Focus on Section 2.3.1 (Detailed Feature-to-Hypothesis Mapping Matrix), Section 3.3 (Scope Boundaries), Section 3.3.1 (HR Poster Experience), and Section 5 (Opportunity Models).
2. **Problem & Hypothesis Analysis:** [RICE Synthesis & Hypotheses](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-problems-hypotheses-rice.md)  
   * Focus on Section 3.1 (Detailed Feature-to-Hypothesis Mapping Matrix for all 14 in-scope features and 8 deferred features).
3. **Prioritization & Timeline Workbook:** [Executive Excel Workbook](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-synthesis-rice.xlsx)  
   * Focus on Tab `2_Hypotheses_Validation` (Problem statements and validation targets) and Tab `3_RICE_Prioritization` (14 in-scope features, 9.5-sprint budget).
