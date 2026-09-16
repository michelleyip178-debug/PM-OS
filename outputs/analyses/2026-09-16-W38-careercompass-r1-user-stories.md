# CareerCompass R1 User Stories: The 3-Pillar Opportunities Marketplace

**Document Reference:** `2026-09-16-W38-careercompass-r1-user-stories`  
**Date:** 2026-09-16 (Week 38)  
**Source PRD:** [`2026-09-14-W38-r1-opportunities-marketplace-planning-review.md`](../prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md)  
**Strategic Frame:** [`2026-09-16-W38-r1-strategic-rescope-proposal.md`](2026-09-16-W38-r1-strategic-rescope-proposal.md)  
**Engineering Runway:** Ring-fenced 5.5 Engineering Sprints (Sprint 1 to Sprint 5.5)  
**Target Delivery:** Q1 2027 (6 Pilot Agencies: PSD, ESG, MDDI, URA, MCCY, CAAS)  
**Core Strategy:** Move Off OTG, Apply Seamlessly, Close the Loop (Non-ATS Guardrail)

---

## 1. Executive Story Map & Sprint Allocation

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│             LOCKED 5.5-SPRINT DELIVERY ROADMAP (SPRINT 1 TO SPRINT 5.5)                 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 1 (1.0 sp): SHARED FOUNDATION, INGESTION & OTG LOOP-BACK                        │
│ • US-R1-01: 4 Dedicated Catalog Browsing Tabs (F-17)                                   │
│ • US-R1-02: Public Opportunity View & Deep-Link Auth Callback (F-29)                   │
│ • US-R1-03: Careers@Gov & OTG Nightly Ingestion Feed (F-23)                            │
│ • US-R1-04: Pilot Ingestion Deduplication Filter (F-26)                                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 2 (1.0 sp): ACCESS CONTROL & CANDIDATE DATA GOVERNANCE                          │
│ • US-R1-05: Role-Based Access Control & Candidate Privacy Protection (F-27)             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 3 (1.0 sp): ROTATIONS (SJR) CORE APPLICATION & SPAM GUARD                       │
│ • US-R1-06: Direct PDF Resume Attachment & Virus Scan Pipeline (F-05)                  │
│ • US-R1-07: Editable Profile Pre-Fill & Fallback Flow (Barry Lim Rule)                │
│ • US-R1-08: Seniority Fit Guidance & Grade Match Advisory Warning (F-09)              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 4 (1.0 sp): SJR SCOPE TOGGLE & GIGS QUICK POSTING                               │
│ • US-R1-09: 3-Field Quick Project Gig Posting Form (F-01)                              │
│ • US-R1-10: SJR-to-Internal-Job Scope Toggle (F-28)                                    │
│ • US-R1-11: "Needs Talent" Badge for Zero-Applicant Gigs (F-19)                        │
│ • US-R1-12: Unfilled Rotation Rollover Prompt (F-20)                                   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 5 (0.8 sp): CANDIDATE SELECTION PACK & CLOSING THE LOOP                         │
│ • US-R1-13: 1-Click Candidate Dossier ZIP Export (F-11)                                │
│ • US-R1-14: 3-Stage Status Tracker & 30-Day Automated Cycle Expiry                     │
│ • US-R1-15: Internal Agency Intake & Automated Push Protocol (F-30)                    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SPRINT 5.5 (0.7 sp): PILOT HARDENING, INTEGRATION TESTS & BUFFER                       │
│ • US-R1-16: End-to-End Pilot Smoke Testing & Fallback Guardrails                       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Pillar 1: Move Off OTG (Opportunity Coverage & Ingestion)

### US-R1-01: Dedicated Opportunity Browsing Tabs (F-17)
*Sprint 1 · 0.5 sp · Frontend & Catalog · Priority: P0 (Must Have)*

**As a** Public Service Officer exploring career options,  
**I want to** browse opportunities filtered across 4 dedicated tabs (Gigs, STIPs, Rotations, Jobs),  
**So that** high-volume short-term immersions do not drown out substantive project gigs and rotations.

**Acceptance Criteria:**
- [ ] Given the Opportunities Catalog (`/opportunities`), when the page loads, then 4 primary tab filters display:
  1. `Gigs` (Project Gigs, part-time, 2 to 10 hours/week)
  2. `STIPs` (Short-Term Immersions, 1 to 5 days)
  3. `Rotations` (Job Rotations, SJR schemes, and Secondments)
  4. `Jobs` (Permanent Internal Vacancies and Careers@Gov public listings)
- [ ] Given an active tab selection, when the officer switches tabs, then the list immediately updates without full-page reload and preserves selected agency/skill secondary filters.
- [ ] Given Secondment postings, when displayed under the `Rotations` tab, then each card shows an explicit "Secondment" badge to clarify inter-agency tripartite arrangements.
- [ ] Given mobile or responsive viewport (<768px), when viewing tabs, then the navigation switches to a horizontal scroll bar with active tab indicator.

**Edge Cases:**
- Zero results in an active tab: display an empty state card tailored to that tab type with a CTA to explore other opportunity models.

**Dependencies:**
- UI Design by Li Ting Kway. Catalog query filtering by Pow Hwee.

---

### US-R1-02: Public Opportunity View & Deep-Link Auth Callback (F-29)
*Sprint 1 · 0.5 sp · Auth & Growth Loop · Priority: P0 (Must Have)*

**As a** logged-out officer or an officer clicking a link from an external email or OTG banner,  
**I want to** preview full opportunity details without hitting a hard login wall,  
**So that** I can evaluate the role before being prompted to sign in with TechPass or Singpass.

**Acceptance Criteria:**
- [ ] Given an unauthenticated visitor navigating to an opportunity URL (e.g., `/opportunities/:id?ref=otg`), when the page loads, then the full public job description, requirements, host agency, and deadline render without requiring login.
- [ ] Given the public view, when the visitor clicks "Apply Now", then the system triggers the WOG Keycloak / TechPass SSO authentication flow and passes the original opportunity URL and ref tag as the callback parameter.
- [ ] Given successful authentication, when redirected back to CareerCompass, then the system opens the application modal immediately with in-progress state preserved.
- [ ] Given an inbound link with `?ref=otg`, when the page loads, then web telemetry logs an `otg_referral_click` event for attribution analysis.

**Edge Cases:**
- Session expired during login flow: redirect officer back to the opportunity card with a toast: "Session refreshed. You may now complete your application."

**Dependencies:**
- WOG AD Keycloak callback configuration with Pow Hwee.

---

### US-R1-03: Careers@Gov & OTG Nightly Ingestion Feed (F-23)
*Sprint 1 · 0.2 sp · Ingestion Pipeline · Priority: P0 (Must Have)*

**As a** Public Service Officer,  
**I want** CareerCompass to display active public listings from Careers@Gov and non-pilot OTG postings,  
**So that** I have a single point of discovery for all Whole-of-Government opportunities.

**Acceptance Criteria:**
- [ ] Given the nightly ingestion cron (runs 02:00 SGT), when executed, then the ingestion worker fetches active vacancies from Careers@Gov and OTG endpoints.
- [ ] Given an ingested Careers@Gov vacancy, when rendered on the Jobs tab, then the card displays a "Careers@Gov" source badge.
- [ ] Given an officer clicking "Apply" on a Careers@Gov card, then the link opens the canonical `careers.gov.sg` posting in a new browser tab.
- [ ] Given an ingested opportunity that closed in Careers@Gov, when the next nightly sync runs, then its status updates to "Closed" in CareerCompass.

**Edge Cases:**
- Ingestion feed unavailable or invalid JSON response: trigger an alert to on-call engineering, retain existing listings, and prevent bulk deletion.

**Dependencies:**
- Careers@Gov data feed stability.

---

### US-R1-04: Pilot Ingestion Deduplication Filter (F-26)
*Sprint 1 · 0.5 sp · Data Integrity · Priority: P0 (Must Have)*

**As an** Agency HR Coordinator from a pilot agency,  
**I want** postings created natively in CareerCompass excluded from legacy OTG ingestion overwrite,  
**So that** duplicate cards or stale data do not pollute the catalog.

**Acceptance Criteria:**
- [ ] Given the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), when native postings exist in CareerCompass, then the ingestion worker cross-references opportunity title, agency ID, and reference codes.
- [ ] Given an incoming OTG posting that matches a native CareerCompass listing, then the deduplication worker discards the OTG record and retains the native CareerCompass record as the single source of truth.
- [ ] Given non-pilot agencies, when no native match exists, then the OTG record imports normally into the catalog.

**Edge Cases:**
- Pilot agency inadvertently posts the exact same role in both OTG and Compass: native Compass posting takes precedence; system logs a warning in the sync report.

**Dependencies:**
- Ingestion parser logic by Pow Hwee.

---

### US-R1-09: 3-Field Quick Project Gig Posting Form (F-01)
*Sprint 4 · 0.5 sp · Agency HR Experience · Priority: P0 (Must Have)*

**As a** Project Lead or Agency Hiring Manager,  
**I want to** publish a project gig in less than 3 minutes by completing only 3 required fields,  
**So that** I can mobilize agile help across agencies without administrative friction.

**Acceptance Criteria:**
- [ ] Given an authenticated hiring manager clicking "Post a Project Gig", then the form displays exactly 3 required inputs:
  1. `Project Title` (clear headline, max 100 chars)
  2. `What You Will Do` (bulleted scope of work, rich text, max 1,000 chars)
  3. `Estimated Time Commitment` (preset selector: 2 to 4 hrs/week, 5 to 10 hrs/week, or customized duration)
- [ ] Given the quick post form, when optional fields are opened, then the user can optionally add target skills (max 3 tags) and project duration (e.g., 3 months).
- [ ] Given valid required inputs, when the manager clicks "Publish Gig", then the gig immediately goes live on the Gigs tab (`F-17`) and issues a shareable URL.
- [ ] Given Barry Lim's standardization rule, then custom form builders and multi-field applicant questionnaires are strictly disallowed.

**Edge Cases:**
- Manager attempts to publish without specifying supervisor support requirement: form includes a permanent non-removable disclaimer: "Applicant must obtain existing supervisor clearance."

**Dependencies:**
- Frontend form components by Thomas/Léo.

---

### US-R1-10: SJR-to-Internal-Job Scope Toggle (F-28)
*Sprint 4 · 0.5 sp · Mobility Flexibility · Priority: P0 (Must Have)*

**As an** Agency HR Lead managing Scheme of Junior Rotations (SJR),  
**I want to** toggle an unfilled SJR vacancy into an open civil service internal job with one click,  
**So that** our agency does not abandon vacancies or re-enter listing details from scratch when rotation cycles conclude.

**Acceptance Criteria:**
- [ ] Given an active SJR posting in the agency management console, when viewing posting options, then the HR user sees an action: "Convert Scope to Open Internal Job".
- [ ] Given the conversion action, when confirmed, then the system updates the opportunity type from `SJR Rotation` to `Internal Job` while retaining all existing descriptions, competencies, and candidate records.
- [ ] Given conversion, when published, then the opportunity shifts visibility from the Rotations tab to the Jobs tab and opens eligibility to non-SJR civil service applicants.
- [ ] Given candidates who applied prior to conversion, then their existing applications and status remain fully preserved.

**Edge Cases:**
- Role was already linked to an external rotation cycle ID: system archives the external cycle reference and notes the conversion timestamp in the audit log.

**Dependencies:**
- Core Adrian Ang requirement. Schema transition logic by Pow Hwee.

---

### US-R1-11: "Needs Talent" Highlight for Zero-Applicant Gigs (F-19)
*Sprint 4 · 0.3 sp · Growth Engine · Priority: P1 (Should Have)*

**As an** officer browsing project gigs,  
**I want to** see which gigs currently have few or no applicants,  
**So that** I can apply where my skills are immediately needed and have a high chance of placement.

**Acceptance Criteria:**
- [ ] Given an active gig listing that has been published for ≥ 7 calendar days with 0 or 1 submitted applications, then the catalog card displays a prominent orange pill badge: "Needs Talent".
- [ ] Given an officer clicking the "Needs Talent" quick filter on the Gigs tab, then the view filters to display all starving project gigs sorted by closing deadline.
- [ ] Given a gig that receives its second valid application, then the background indexer removes the badge automatically.

**Edge Cases:**
- Gig reaches 0 applicants because previous applicants withdrew: badge reappears within 1 hour.

**Dependencies:**
- Real-time application count indexer.

---

### US-R1-12: Unfilled Rotation Rollover Prompt (F-20)
*Sprint 4 · 0.2 sp · Agency Workflow · Priority: P1 (Should Have)*

**As an** Agency HR Coordinator with an unfilled rotation role,  
**I want to** receive an automated prompt 7 days before cycle close asking if I want to re-list the role,  
**So that** vacancies do not lapse unnoticed.

**Acceptance Criteria:**
- [ ] Given an active rotation posting 7 days prior to deadline with zero confirmed selections, then the system displays an alert banner in the manager's console: "This rotation closes in 7 days. Would you like to extend deadline or re-list?"
- [ ] Given clicking "Extend Deadline", then the manager selects a new date (up to 30 days) and confirms with 1 click.
- [ ] Given clicking "Convert to Internal Job", then the system triggers the scope toggle (`F-28`).

**Edge Cases:**
- Posting manager is on leave: alert remains accessible to any designated agency admin for that agency.

**Dependencies:**
- Scheduled event trigger service.

---

## 3. Pillar 2: Apply Seamlessly (Direct CV, Pre-Fill & Low Friction)

### US-R1-06: Direct PDF Resume Attachment & Virus Scan Pipeline (F-05)
*Sprint 3 · 1.0 sp · Core Mobility Transaction · Priority: P0 (Must Have)*

**As an** applicant applying for Rotations, Secondments, or Gigs,  
**I want to** attach my PDF resume directly within the application modal,  
**So that** I can submit my CV in seconds without writing cold emails to HR postboxes or sharing private cloud drive links.

**Acceptance Criteria:**
- [ ] Given the application modal, when reaching the CV step, then the user sees a drag-and-drop zone accepting single PDF files (max 5MB).
- [ ] Given a file dropped or selected, when upload begins, then an upload progress bar displays.
- [ ] Given successful upload, then the backend routes the file to an S3-compatible government bucket and executes an automated asynchronous antivirus scan.
- [ ] Given a clean file, then the UI displays a green success state: "Resume attached: [Filename.pdf] (Verified)".
- [ ] Given a non-PDF file or file > 5MB, then upload is rejected immediately with an inline alert: "Upload a single PDF document under 5MB."
- [ ] Given an infected file, then the file is quarantined, upload rejected, and user alerted: "File failed security scan. Upload a clean PDF."

**Edge Cases:**
- Network disconnection midway through upload: UI displays a retry button that resumes or restarts the upload cleanly.

**Dependencies:**
- ClamAV/antivirus scanning pipeline and presigned S3 storage bucket setup by Pow Hwee.

---

### US-R1-07: Editable Profile Pre-Fill & Fallback Flow (Barry Lim Rule)
*Sprint 3 · 0.5 sp · Officer Experience · Priority: P0 (Must Have)*

**As a** Public Service Officer with a CareerCompass profile,  
**I want** standard application fields pre-populated with my official details,  
**So that** I can apply in under 5 minutes without retyping existing employment data.

**Acceptance Criteria:**
- [ ] Given an officer with an existing CareerCompass profile (POCDEX-synced), when opening the application modal, then standard fields auto-populate:
  - Full Name
  - Current Ministry / Agency
  - Official Email
  - Job Family & Current Grade
  - Endorsed Skills / Competencies
- [ ] Given pre-filled fields, then the officer can edit any field directly within the application modal for this submission.
- [ ] Given edits made on the application form, then these modifications apply strictly to this single application payload and do not alter the officer's permanent POCDEX master record.
- [ ] Given an officer without a prior profile (e.g., statutory board or new joiner), then the modal opens with blank standard fields for manual entry with zero blocking errors.
- [ ] Given Barry Lim's standardization rule, then the form enforces the standard profile schema plus a maximum of 1 optional text question ("Why are you interested in this role?").

**Edge Cases:**
- POCDEX sync API is slow or times out (>3 seconds): form immediately renders editable blank fields with a toast: "Profile pre-fill unavailable. Enter details manually."

**Dependencies:**
- Competency and profile read endpoints.

---

### US-R1-08: Seniority Fit Guidance & Grade Match Advisory Warning (F-09)
*Sprint 3 · 0.5 sp · Candidate Guidance & Spam Guard · Priority: P0 (Must Have)*

**As an** applicant viewing a rotation or gig with specific grade requirements,  
**I want to** see clear seniority guidance and receive a gentle prompt if my grade differs from the posting expectation,  
**So that** I understand role fit before applying and avoid serial out-of-grade rejections.

**Acceptance Criteria:**
- [ ] Given an opportunity card and detail page, then target grade requirements display clearly (e.g., "Target Grade: MX11 to MX12").
- [ ] Given an applicant whose profile grade is lower or higher than the target grade band, when clicking "Apply Now", then an advisory modal opens:
  > *"Note on Seniority Fit: This role is targeted for [Target Grade]. Your current profile reflects [Current Grade]. You may still apply, but host agencies prioritize applicants matching the recommended band."*
- [ ] Given the advisory modal, then the officer can click "Proceed with Application" to continue or "Explore Other Roles" to return to catalog.
- [ ] Given an applicant choosing to proceed, then the system records the application normally without blocking submission.

**Edge Cases:**
- Posting does not specify a grade band (e.g., open gig): advisory check is skipped entirely.

**Dependencies:**
- Grade mapping taxonomy and UI dialog by Li Ting Kway.

---

## 4. Pillar 3: Close the Loop (Outcome Visibility & Simple Roster)

### US-R1-05: Role-Based Access Control & Candidate Privacy Protection (F-27)
*Sprint 2 · 1.0 sp · Security & Governance · Priority: P0 (Must Have)*

**As an** Agency HR Coordinator or Central Administrator,  
**I want to** ensure only authorized coordinators can view candidate resumes and applicant details for our agency,  
**So that** public officers' personal data and career mobility intent remain strictly confidential.

**Acceptance Criteria:**
- [ ] Given a user logging in, then the system evaluates their agency identifier and role mapping via TechPass tokens and local RBAC tables.
- [ ] Given a posting manager from CAAS, when opening candidate dossiers, then they can access only applicants for CAAS-hosted postings.
- [ ] Given an unauthorized officer attempting to access `/admin/candidates/:id`, then the system blocks access and returns an HTTP 403 Forbidden page.
- [ ] Given resume downloads, then files are served via time-limited presigned URLs (expires in 15 minutes) rather than static public URLs.

**Edge Cases:**
- Coordinator transfers to another agency: on next login, RBAC synchronizes agency affiliation and revokes access to the previous agency's candidate drawer.

**Dependencies:**
- Auth middleware and RBAC schema by Pow Hwee.

---

### US-R1-13: 1-Click Candidate Dossier ZIP Export (F-11)
*Sprint 5 · 0.5 sp · Agency Efficiency · Priority: P0 (Must Have)*

**As an** Agency HR Coordinator or Interview Panel Lead,  
**I want to** download all applicant resumes and a summary index sheet in a single ZIP file with one click,  
**So that** our panel can review candidates offline without spending 15 to 20 hours downloading individual email attachments.

**Acceptance Criteria:**
- [ ] Given a closed or active posting with applicants, when the coordinator views the applicant console, then a prominent button displays: "Download Candidate Dossier (ZIP)".
- [ ] Given clicking download, then the backend assembles a single compressed `.zip` archive containing:
  1. `candidates_summary.csv` (Applicant Name, Ministry, Current Grade, Submission Date, Email, Current Status)
  2. Subfolder `/resumes` containing all attached PDF resumes named consistently: `[ApplicantName]_[Agency]_[AppID].pdf`
- [ ] Given a posting with 50+ applicants, then ZIP generation initiates asynchronously and provides a download progress indicator or prompt when ready.
- [ ] Given Barry Lim's Non-ATS rule, then all complex candidate scorecard scoring is conducted offline using this dossier pack rather than built in-portal.

**Edge Cases:**
- Zero applicants on posting: button is disabled with helper tooltip: "No applications submitted yet."

**Dependencies:**
- Backend streaming archive generator by Pow Hwee.

---

### US-R1-14: 3-Stage Status Tracker & 30-Day Automated Cycle Expiry
*Sprint 5 · 0.5 sp · Candidate Experience & Anti-Silence · Priority: P0 (Must Have)*

**As an** applicant who submitted an opportunity application,  
**I want to** track my application's progress across 3 clear stages and never be left in an indefinite black hole,  
**So that** I have clarity on my application outcome.

**Acceptance Criteria:**
- [ ] Given an officer opening the "My Applications" drawer, then all submitted applications display with title, host agency, submission date, and a 3-stage status badge:
  1. `Submitted` (Delivered to agency queue)
  2. `In Review` (Under active consideration by host agency)
  3. `Outcome` (Sub-states: `Selected` or `Concluded`)
- [ ] Given an agency coordinator viewing an applicant in their console, then they can advance the status with 1 click:
  - "Mark In Review"
  - "Select Candidate"
  - "Conclude Application"
- [ ] Given a posting where the host agency takes no action within 30 calendar days of posting close, then an automated cron transitions all unclosed applications to:
  `Application Cycle Concluded (No Host Update)`
- [ ] Given an application marked as `Concluded` or auto-expired, then the badge displays in neutral grey and includes a direct link: "Explore Open Roles".

**Edge Cases:**
- Candidate selected after 30-day auto-expiry: coordinator can manually override the status to `Selected` with confirmation.

**Dependencies:**
- Scheduled auto-expiry cron and status update API.

---

### US-R1-15: Internal Agency Intake & Automated Push Protocol (F-30)
*Sprint 5 · 0.3 sp · Agency Integration · Priority: P1 (Should Have)*

**As an** Agency HR Lead with strict internal governance policies,  
**I want** candidate packs automatically pushed to our agency's secure HR mailbox or intake webhook upon posting deadline,  
**So that** our agency does not have to log into an external portal to retrieve applicant files.

**Acceptance Criteria:**
- [ ] Given a posting configuration with an optional "Agency Intake Webhook / Dispatch Email", then upon posting deadline cutoff, the system packages the applicant dossier.
- [ ] Given dispatch email configured, then the system sends a notification to the designated agency mailbox with a secure, authenticated link to download the candidate pack.
- [ ] Given agencies using enterprise ATS (e.g. Workable pilot for formal jobs), then the dispatch protocol passes candidate payloads via webhook directly into the agency's ATS.

**Edge Cases:**
- Dispatch delivery bounce: system logs delivery failure and displays an attention badge on the posting manager console.

**Dependencies:**
- Transactional notification delivery service.

---

## 5. Hardening & Guardrails (Sprint 5.5)

### US-R1-16: Pilot Hardening, Integration Tests & Fallback Guardrails
*Sprint 5.5 · 0.7 sp · Quality Assurance & Hardening · Priority: P0 (Must Have)*

**As the** Product Trio (PM, Tech Lead, Designer),  
**I want to** execute complete end-to-end integration tests and verify emergency fallback toggles across all 6 pilot agencies,  
**So that** the platform launches stably without disrupting ongoing civil service talent mobility.

**Acceptance Criteria:**
- [ ] Given end-to-end user journeys across all 5 operational opportunity types, verify:
  1. Gigs: 3-field quick post to in-app application submission.
  2. STIPs: Catalog discovery to embedded 5-field FormSG submission.
  3. Rotations / SJR: PDF CV attachment, seniority advisory, and 1-click ZIP export.
  4. Secondments: Discovery and tagging to candidate submission.
  5. Jobs: Careers@Gov outbound handoff.
- [ ] Given an emergency backend outage, verify feature flag `emergency_apply_fallback = true` reverts all apply buttons to external FormSG URLs within 60 seconds without code deployment.
- [ ] Given virus scan latency test, verify 95% of 5MB PDF uploads complete scan and reach confirmed state in under 4 seconds.
- [ ] Given load testing, verify catalog tab switching responds in < 300ms under 500 concurrent sessions.

**Edge Cases:**
- Malformed PDF bypasses frontend check: S3 upload quarantine isolates the file without crashing worker threads.

**Dependencies:**
- Full squad testing allocation in Sprint 5.5.

---

## 6. Definition of Ready (DoR) Gate for Sprint Planning

Before any story above is pulled into a 2-week development sprint:
1. **User Outcome Grounded:** Story focuses on a real civil service mobility interaction without internal system jargon.
2. **Non-ATS Compliance:** Verified that the story does not build configurable recruiter pipelines, calendar sync, interview rubrics, or bespoke form builders.
3. **Acceptance Criteria Testable:** Every criterion contains explicit Given/When/Then conditions verifiable by Rethna's test automation.
4. **Security & Privacy Clear:** Role-based access and file handling conform to WOG data classification rules (PDF resumes encrypted at rest and in transit).
5. **UI Specifications Attached:** Li Ting Kway's approved Figma wireframes linked directly to the story card.
