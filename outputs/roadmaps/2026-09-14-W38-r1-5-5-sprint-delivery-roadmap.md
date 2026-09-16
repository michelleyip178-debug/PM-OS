---
title: "R1 Delivery Roadmap: 5.5 Sprints Execution Plan"
date: 2026-09-14
week: 2026-W38
owner: Michelle Yip
status: Approved Architecture Direction
sprints: "Sprint 1 to 5.5 (5.5 Sprints Total)"
capacity: "4.8 sp feature dev + 0.7 sp hardening buffer"
related:
  - outputs/decisions/2026-09-14-W38-decision-r1-opportunity-architecture-and-ats-boundary.md
  - outputs/analyses/2026-09-14-W38-r1-opportunities-direction-and-architecture-brief.md
  - outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md
  - outputs/meeting-notes/2026-09-14-W38-r1-opportunities-jam.md
---

# R1 Delivery Roadmap: 5.5 Sprints Execution Plan

## 1. Executive Summary

This execution roadmap formalizes the engineering schedule and delivery milestones for CareerCompass Release 1 (R1). Following the Architecture Jam with Adrian Ang and Barry Lim, the squad operates under a strict **5.5-sprint capacity ceiling** (Sprint 1 to 5.5).

The guiding architectural principle is **"Discovery First, Selection Out-of-House"**. CareerCompass serves as the central discovery catalog and candidate launchpad. It does not build an applicant tracking system (ATS). Selection, stage-gate reviews, and hiring manager workflows take place out-of-house.

---

## 2. Capacity Budget & Burn-Down Allocation

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│             R1 CAPACITY BREAKDOWN: STRICTLY 5.5 ENGINEERING SPRINTS                    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ Total Sprints Available:    5.5 Sprints                                                │
│ Total Engineering Velocity: 5.5 story points (1.0 sp per sprint equivalent)           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ Committed Feature Build:    4.8 sp (8 Core Features across S1 to S4.5)                 │
│ Security & Hardening Buffer:0.7 sp (Vulnerability scans, pilot onboarding in S5-S5.5)  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ Hard Ceiling Variance:      0.0 sp (Zero unallocated scope; zero overtime allowance)   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Sprint-by-Sprint Execution Schedule

```
Sprint 1 (1.0 sp)    Sprint 2 (1.0 sp)    Sprint 3 (1.0 sp)    Sprint 4 (1.0 sp)    Sprint 5 (1.0 sp)    S5.5 (0.5 sp)
[F-17 Tabs: 0.5 sp]  [F-03 Notif: 0.5 sp] [F-19 Spot: 0.5 sp]  [F-11 Export: 1.0 sp][F-11 Wrap: 0.3 sp]  [Go-Live: 0.5 sp]
[F-01 Post: 0.5 sp]  [F-05 PDF: 0.5/1.0]  [F-05 PDF: 0.5/1.0]  [Testing Prep: 0.0]  [Hardening: 0.7 sp]   [Sign-Off]
                                          [F-09 Fit: 0.5 sp]
                                          [F-28 Scope: 0.3 sp]
```

### Sprint 1: Discovery Baseline & Gig Authoring (1.0 sp Committed)
* **Goal:** Establish clear category browsing and unblock low-friction posting for pilot project gigs.
* **Committed Features:**
  * **F-17: Dedicated Opportunity Browsing Tabs (0.5 sp):** Split catalog into clear top-level tabs (*Gigs*, *STIPs*, *Rotations*, *Jobs*). Replace single mixed feed.
  * **F-01: Quick Project Posting (0.5 sp):** 3-minute, 3-field posting form for informal project gigs (Deliverable Scope, Weekly Hours, Project Duration).
* **Dependencies:** None. Self-contained frontend and baseline database models.
* **Exit Criteria:** Officers can filter opportunities by model in under 2 seconds. Project leads can publish a gig without HR requisition approvals.

### Sprint 2: Candidate Submission & Safety Architecture (1.0 sp Committed)
* **Goal:** Stand up the core CV attachment engine and supervisor transparency mechanisms.
* **Committed Features:**
  * **F-03: Supervisor Courtesy Notification (0.5 sp):** Automated CC email sent to candidate line manager upon application submission.
  * **F-05: Direct Resume Attachment (Part 1 · 0.5 sp of 1.0 sp total):** Secure single PDF file upload (max 5MB) with government cloud storage integration.
* **Dependencies:** Cloud storage bucket provisioning and virus scanning hook.
* **Exit Criteria:** Candidate can upload a PDF CV. Automated email sends confirmation to line manager.

### Sprint 3: Eligibility Screening & Quality Controls (1.3 sp Committed)
* **Goal:** Prevent unqualified spam applications, complete file upload safety, and balance gig attention.
* **Committed Features:**
  * **F-05: Direct Resume Attachment (Part 2 · 0.5 sp of 1.0 sp total):** Antivirus pipeline validation, file format restrictions, error recovery.
  * **F-09: Seniority Fit Guidance (0.5 sp):** Contextual advisory banner displayed when candidate grade does not match posting criteria (advisory warning; zero hard locking).
  * **F-28: Application Scope Toggle (0.3 sp):** Poster setting choosing between native PDF upload or external outbound link to C@G.
  * **F-19: Priority Spotlight for Unfilled Roles (0.5 sp · parallel work):** Scheduled rule flagging postings with zero applicants after 7 days as "Needs Talent".
* **Dependencies:** WOG AD profile grade attribute read access.
* **Exit Criteria:** Candidates see advisory warning before applying out-of-grade. Stalled postings receive automated discovery boost.

### Sprint 4: Reviewer Handover & Dossier Export (1.0 sp Committed)
* **Goal:** Enable host agencies and panel reviewers to evaluate applicants offline without an internal ATS.
* **Committed Features:**
  * **F-11: 1-Click Candidate Pack Download (Part 1 · 0.7 sp of 1.0 sp total):** Backend packing script compiling all candidate resumes into a structured zip folder with a summary CSV register.
* **Dependencies:** Secure file retrieval permissions and batch packaging service.
* **Exit Criteria:** Reviewer clicks download and receives complete candidate dossier zip file in under 10 seconds.

### Sprint 5 to 5.5: Final Assembly, Hardening, and Pilot Launch (1.2 sp Committed)
* **Goal:** Complete reviewer pack export, execute security sweeps, and onboard 6 pilot agencies.
* **Committed Features & Activities:**
  * **F-11: 1-Click Candidate Pack Download (Part 2 · 0.3 sp):** Frontend polish, error handling, and download logging.
  * **Security Hardening Buffer (0.7 sp):** Vulnerability assessment and penetration testing (VAPT) fixes, load verification, and cloud file retention policy enforcement.
  * **Pilot Go-Live Readiness (0.5 sp):** Admin orientation, seed data verification across 6 pilot agencies, and final leadership sign-off.
* **Exit Criteria:** Zero high or medium security vulnerabilities. Pilot agency administrators successfully download live test dossiers.

---

## 4. Opportunity Model Implementation Matrix

| Opportunity Model | In-Scope Delivery Mechanism in R1 | Candidate Apply Experience | Reviewer / Host Experience | R2+ Long-Term Target |
|---|---|---|---|---|
| **Gigs** | Native 3-field quick-post (`F-01`), 7-day spotlight (`F-19`), supervisor CC (`F-03`). | Native 1-click submit with manager courtesy notification. | Review submissions in portal list; contact candidates directly. | Slack/Teams chat endorsement bot (`F-04`). |
| **STIPs** | Discovery tab cataloging (`F-17`). Apply links out to WD FormSG template. | Submits via standardized FormSG (5 fixed fields + max 1 misc field). | Receives FormSG submissions spreadsheet; tracks roster offline. | Automated seat counters (`F-18`) and on-screen rosters (`F-22`). |
| **Rotations & SJR** | Native PDF attachment (`F-05`), seniority fit (`F-09`), scope toggle (`F-28`), 1-click zip export (`F-11`). | Uploads 1 PDF resume (max 5MB) with seniority advisory warning. | Downloads 1-click zip pack (`F-11`); conducts review offline. | Workable ATS integration (central whole-of-government engine). |
| **Jobs & Secondments** | Read-only ingestion feed (`F-23`). Outbound apply link to C@G. | Redirects out to `careers.gov.sg`. | Manages candidate pipeline inside existing agency ATS or C@G. | Automated Workable bi-directional sync (OGP discovery TBD). |

---

## 5. Scope Cut-Line & Deferral Register

To protect the 5.5-sprint ceiling, the following items are strictly deferred out of R1:

| Deferred Item | Feature ID | Estimated Effort | Rationale for Deferral | Interim Alternative in R1 |
|---|---|---|---|---|
| **4-Stage Candidate Status Board** | F-07 | 1.5 sp | Compass will not build an ATS. High maintenance overhead. | Reviewers download candidate zip pack (`F-11`) and communicate via email. |
| **Real-Time Seat Availability Display** | F-18 | 1.0 sp | FormSG does not provide webhook write-backs to Compass. | WD applies native FormSG response limits to close cohorts automatically. |
| **Host Attendance Check-Off Roster** | F-22 | 1.0 sp | Avoids building operational record-keeping tools in R1. | Hosts export FormSG attendee lists and reconcile offline. |
| **Rotation Cycle Rollover Notice** | F-20 | 0.5 sp | Low priority compared to baseline application mechanisms. | HR coordinators manually adjust posting closing dates. |
| **Secondment Badges & Tracking** | F-13, F-15, F-21 | 1.5 sp | Secondment policy requires tripartite alignment across parent and host HR. | Treated as formal postings linking out to C@G in R1. |
| **Workable Technical API Integration** | External | 3.0+ sp | Workable rollout is ongoing; APIs and tenancy rules are undetermined. | Scoped to discovery phase only (Tech Lead / OGP TBD). |

---

## 6. Key Risks, Cut-Line Rules, and Contingency Triggers

1. **Rule on Velocity Compression:** If security audits or cloud file storage integrations compress engineering capacity below 4.8 sp, **F-19 (Priority Spotlight · 0.5 sp)** is the first feature cut, followed by **F-28 (Scope Toggle · 0.3 sp)**. Under no circumstances will the 0.7 sp hardening buffer in Sprint 5 be compromised.
2. **Rule on Form Customization:** If pilot agencies demand custom application questionnaires, the request is rejected under Barry Lim's rule. Agencies are instructed to evaluate bespoke criteria during offline interviews.
3. **Rule on Ingestion Delays:** If C@G ingestion feed schemas are delayed, Compass displays static outbound portal launch cards rather than delaying Sprint 1 discovery tabs.
