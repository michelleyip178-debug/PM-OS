# R1 Opportunities: Reduced Scope & Feasibility Brief

**Date:** 2026-09-18  
**Author:** Michelle Yip  
**Audience:** Adrian Ang, Barry Lim, Rama Moorthy  
**Purpose:** Document the agreed reduced scope for CareerCompass R1 Opportunities, including platform dependencies (RBAC and CAM), to establish a grounded man-weeks estimate and holiday-adjusted capacity model.

---

## 1. Executive Summary

To deliver a feasible R1 without compromising the 24-25 Nov MVP launch or overextending engineering capacity, R1 Opportunities scope is pared down to three functional feature pillars, two essential governance/platform pillars, and dedicated discovery telemetry:

1. **STIPs & Gigs (Hero Feature):** Open posting by **any authenticated officer** in the 6 pilot agencies; native lightweight application form (standard profile pre-fill); instant email alert to poster; in-app review drawer (Offer/Reject); description hyperlinks for FormSG flex fallback.
2. **Mainstream Jobs (Discovery Only):** Discovery and unified search across public Careers@Gov vacancies (F-23) and curated secondments/SJRs; external redirect link to source portals. Live API integration with HRPS (Civil Service SAP) and Cumulus (Stat Board Workday) is explicitly deferred to R2.
3. **Saved Jobs:** Lightweight bookmark toggle on opportunity cards plus a saved-jobs filter for officers, retaining closed listings for 30 days before auto-purge (OTEP-425).
4. **Role-Based Access Control (RBAC):** Minimum Viable RBAC enforcing candidate privacy so only posting owners and up to 2 named collaborators view applicant submissions, backed by audit logging.
5. **Central Account Management (CAM) Integration:** Privileged user and account lifecycle management, using Keycloak SCIM endpoints to avoid building custom app-side APIs, paired with a 90-day candidate data purge rule.
6. **Discovery Telemetry & Analytics:** In-app instrumentation tracking our true North Star ("Opportunities Discovered per Officer"), search-to-click rates, recommendation CTR, and outbound redirect handoffs.

---

## 2. Pillar-by-Pillar Scope Breakdown

### Pillar 1: STIPs & Gigs (Open Posting, Lightweight Apply & Review)

| Area | In Scope (R1) | Out of Scope (Deferred to R2) | Technical Questions for Rama / Barry |
|---|---|---|---|
| **Posting Creation & Permissions** | Open to **any authenticated officer** across the 6 pilot agencies. Simple creation form (title, description, agency, competencies, closing date). Mandatory RO awareness checkbox: *"I confirm my Reporting Officer is aware of this gig posting."* Creator automatically becomes Posting Owner. | Complex HR approval chains, role-based posting permissions, supervisor pre-clearance workflows, departmental approval queues. | Can any authenticated officer write to the opportunities table via standard session token, or does our backend currently require an explicit Keycloak role/group membership to authorize creation endpoints? |
| **Co-Evaluators & Collaboration** | Creator can add 1-2 co-evaluators by civil service email (`.gov.sg`) across pilot agencies at creation or edit. Co-evaluators have identical drawer review permissions. | Complex role handovers, temporary delegation, approval workflows for posting creation, cross-agency permission inheritance trees. | Can we store co-evaluator emails as string arrays on the posting record and resolve authorization on login (`session.email IN collaborators`), avoiding a synchronous TechPass/WOG AD directory lookup at creation? |
| **Posting Lifecycle & Freshness** | Automatic 30-day listing expiration to prevent ghost gigs. Manual "Close Vacancy" button for creator. Closed postings enter 90-day retention countdown before candidate data purge. | Recurring auto-reposting, automated reminder pings to extend closing dates, public archive browsing. | Should opportunity expiration be evaluated dynamically on read queries (`closing_date < NOW()`), or do we need a daily scheduled NestJS cron task to mutate database statuses for telemetry and audit? |
| **Application Form & Pre-Fill** | Fixed standard template: Name, Email, Agency, Grade/Role, and verified competencies (pre-filled from profile). 2-3 standard free-text fields. Consolidated applicant declaration: *"I declare that all information submitted is accurate and I have informed my Reporting Officer."* | Dynamic form builders, agency-specific custom form configurations, complex conditional branching, multiple legal declaration checkboxes. | Given our form is fixed to 4 profile fields and 2-3 text inputs, will Thomas move faster using existing `otep-web` components, or does ApplySG/GDP offer an unauthenticated widget that saves net effort? *(PM recommendation: Drop ApplySG; use native React primitives).* |
| **FormSG Flex Fallback** | Job description supports markdown / hyperlinks, allowing posters who need custom questions to link out directly to FormSG. In-app guidance prompts standard form as primary default. | Automated FormSG webhook two-way sync, automated field parsing from external forms, custom webhooks. | Does `otep-web` markdown rendering use a strict sanitizer (e.g. `DOMPurify`) that whitelists only `https://` protocols and restricts outbound forms to trusted `.gov.sg` domains to prevent XSS? |
| **Attachments & Profile Data** | Application relies strictly on pre-filled CareerCompass profile data (competencies, role, agency, past experiences). No file upload required. | Multi-file PDF uploads, resume parsing, portfolio storage, virus scanning infrastructure beyond basic profile checks. | Can engineering confirm that relying strictly on in-app profile snapshots allows us to completely omit S3 bucket provisioning, file upload endpoints, and antivirus scanning pipelines from R1? |
| **Notification & Review Drawer** | Instant transactional email alert to poster on submission ("New application received for [Job Title] from [Officer Name]"). In-app drawer under "My Posted Gigs" with table showing Name, Agency, Competency Match, Date Applied. | In-app notification center, candidate status progression workflows (shortlist, interview, scoring rubrics), automated candidate regret email blasts. | Does our staging/production environment already have an active GovTech Postman API key and sender identity for transactional emails, or would direct SMTP / AWS SES be faster to deploy for poster alerts? *(PM recommendation: Use Postman REST API).* |
| **Candidate Selection & Outcomes** | Action buttons for **Offer** and **Reject** directly in the review table. Applicant's in-app status badge updates immediately (`Submitted` -> `Offered` or `Not Selected`). | Automated candidate regret email campaigns, multi-stage assessment scoring, interview scheduling integrations. | Can we confirm that updating the application status enum (`Submitted` -> `Offered` or `Not Selected`) requires only a single PATCH endpoint and no downstream event orchestrator in R1? |
| **Post-Offer Coordination** | Poster connects directly with successful applicant via email or Teams for onboarding logistics. | In-app messaging, automated digital contract generation, formal HR placement workflows. | Can we confirm that no in-app contract or messaging integration is required, leaving post-offer logistics entirely to direct email/Teams communication? |

---

### Pillar 2: Mainstream Jobs (Discovery Only via C@G & Curated Opportunities)

| Area | In Scope (R1) | Out of Scope (Deferred to R2) | Technical Questions for Rama / Barry |
|---|---|---|---|
| **Posting Ingestion** | Ingest public civil service postings via existing Careers@Gov (C@G) ingestion feed (F-23) and/or migrate existing OTG curated secondments/SJRs. Automated daily ingestion sync with automated purge of expired roles based on `closing_date`. | Live API integration with HRPS (Civil Service SAP) and Cumulus (Stat Board Workday); native posting creation in Compass. | Since C@G holds only public vacancies, can Léo repurpose spike OTEP-578 to establish baseline C@G ingestion while framing technical requirements for future HRPS/Cumulus interfaces? |
| **Ringfencing & Whitelisting** | Compass-enforced visibility rules: whitelist opportunities by email domain (e.g., `@moe.gov.sg`) or specific officer emails based on metadata tags. Evaluated via Option A: check each role independently for double-hatting officers. | Automated multi-tier agency organizational chart traversal, complex cross-agency secondment entitlement matrices, Option B attribute blending. | Can ringfencing under Option A be implemented as an indexed SQL query filtering on `target_agency_code = ANY(officer.agency_codes)` without introducing a secondary rule engine? |
| **Application Flow** | Redirect link out to the originating HR/C@G portal ("Apply on Careers@Gov" / external HR portal). Lightweight external-link disclaimer modal setting expectation that application tracking occurs on source systems. | Native in-app apply for mainstream jobs, application tracking for civil-service-wide postings, status sync back to Compass. | Can Thomas implement the outbound C@G handoff as a simple disclaimer modal and external redirect link with standard UTM/referrer parameters, requiring zero backend state tracking? |

---

### Pillar 3: Saved Jobs (Officer Bookmarking)

| Area | In Scope (R1) | Out of Scope (Deferred to R2) | Technical Questions for Rama / Barry |
|---|---|---|---|
| **Bookmark Action** | Single-click bookmark icon toggle on opportunity cards and detail pages. Persist state to officer account. | Shared bookmark lists, team bookmarking, export saved jobs to CSV. | For OTEP-425, can we confirm the schema is a single join table (`user_saved_opportunities`: `user_id`, `opportunity_id`, `created_at`) with an indexed composite key, requiring ~2 days of backend effort? |
| **Saved Jobs View** | Dedicated "Saved Jobs" filter tab on Opportunities page showing active bookmarked listings. | Saved searches, automated email digests when bookmarked jobs change status. | Will the catalog endpoint accept an optional query parameter (`?saved_only=true`) to return the officer's bookmarked listings, or should Thomas fetch saved IDs and filter client-side? |
| **Closed Jobs Retention** | Bookmarked roles that close show a "Closed" badge for 30 days before being purged automatically from the saved list. | Indefinite historical archiving of closed listings, automated notifications when bookmarked roles close. | Can the saved-jobs query join on opportunity `status` to display a 'Closed' badge for roles where `closing_date < NOW()`, automatically filtering them out after 30 days via a SQL `WHERE` clause? |

---

### Pillar 4: Role-Based Access Control (RBAC) & Candidate Privacy (F-27)

| Area | In Scope (R1) | Out of Scope (Deferred to R2) | Technical Questions for Rama / Barry |
|---|---|---|---|
| **Access Boundaries** | Minimum Viable RBAC: 3 tiers (Public Officer, Opportunity Poster / Collaborator, Central Admin). Public officers see public catalog; posters and co-evaluators see applicant drawer only for their own opportunities. | Multi-tier agency hierarchy delegation, departmental viewing trees, central agency HR ministry-wide applicant viewing portals. | Can we confirm that Keycloak handles authentication only (`is_authenticated_officer`), while candidate drawer authorization (`poster_id == current_user OR current_user IN collaborators`) is enforced purely at the NestJS application layer? |
| **Audit & Governance** | PathFinder audit log entry recorded whenever a candidate application drawer or profile snapshot is viewed or downloaded. | Automated compliance reporting dashboards, real-time alerting on anomalous drawer downloads. | Does the existing PathFinder audit logging service support logging read events (`GET /opportunities/:id/applications`) without adding noticeable latency to drawer loading? |
| **Orphaned Posting Fallback** | If a gig creator departs or transfers agency, posting ownership falls back to designated Agency HR POC to prevent orphaned applicant pools. | Multi-level automated line-manager succession routing. | Can we implement posting re-assignment via a lightweight admin script or Keycloak group mapping, allowing an Agency HR POC to inherit postings if a creator leaves? |

---

### Pillar 5: Central Account Management (CAM) Integration & Data Governance

| Area | In Scope (R1) | Out of Scope (Deferred to R2) | Technical Questions for Rama / Barry |
|---|---|---|---|
| **Architecture Approach** | Use Keycloak built-in SCIM (System for Cross-domain Identity Management) endpoints for CAM user-management events (Hao Eng's architecture). | Building 7 bespoke read/write app-side API endpoints in Compass. | Have we received written confirmation from the CAM engineering team that Keycloak's standard SCIM 2.0 endpoints satisfy their employee lifecycle events, or is there any requirement for custom Compass-side APIs (OTEP-1553)? |
| **Privileged Access** | Keycloak "Privileged Group" integration for admin user identification and provisioning (OTEP-1571 Done). | In-app privileged session tracking or custom MFA outside Keycloak. | With Keycloak Privileged Group role mapping completed (OTEP-1571), can Hao Eng confirm that the admin role claim is already propagated in the JWT token payload for Compass backend validation? |
| **Deprovisioning Handling** | Automated user deactivation when CAM pushes employee termination or transfer events. Active pending applications automatically marked "Withdrawn (Officer Inactive)". | Complex multi-system reconciliation batch jobs, manual offboarding checklists. | When CAM pushes an employee deprovisioning event via SCIM, does Keycloak revoke active refresh tokens and propagate backchannel logout, or do we rely on the access token TTL expiring? |
| **Data Retention & Purge** | Candidate applications and profile snapshots permanently purged 90 days after opportunity closure. | Indefinite resume retention, custom agency-by-agency retention schedules. | Can the 90-day candidate data purge be implemented as a simple scheduled SQL batch script targeting applications where `opportunity.closed_at < NOW() - INTERVAL '90 days'`, logging purge counts in the audit table? |

---

### Pillar 6: Discovery Telemetry & Analytics Instrumentation

| Area | In Scope (R1) | Out of Scope (Deferred to R2) | Technical Questions for Rama / Barry |
|---|---|---|---|
| **Discovery Events** | Event tracking for Opportunity Detail Views (capturing opportunity type, agency, and officer ID) to measure our North Star ("Opportunities Discovered per Officer"). | Real-time streaming analytics pipelines, predictive drop-off modeling. | Can Thomas emit lightweight backend event pings or client analytics on opportunity detail views without adding noticeable latency to page load? |
| **Search & Recommendations** | Logging search queries, search-to-click conversions, zero-result counts, and recommendation card CTR. | Automated algorithmic re-ranking models, real-time personalization engines. | Can search query metrics be persisted to an analytics log table or existing S3 audit bucket for weekly aggregation? |
| **Outbound Handoff Tracking** | Tracking outbound clicks on "Apply on Careers@Gov" / external links with appended UTM tags (`utm_source=careercompass&utm_medium=discovery`). | End-to-end cross-domain conversion attribution back from external HR portals. | Can outbound redirect buttons fire an analytics beacon before navigating to the external URL? |

---

### Scope Analysis & Health Review

To ensure this reduced scope remains both operationally sound and technically deliverable by mid-February 2027, the squad reviewed the scope across four operational dimensions:

| Dimension | Risk / Challenge | Scope Decision & Mitigation | Health Rating |
|---|---|---|---|
| **1. Ghost / Stale Gigs** | Officers posting gigs and abandoning them, cluttering the catalog with obsolete opportunities. | Enforce automatic 30-day posting expiration + creator "Close Vacancy" button. Telemetry monitors time-to-close. | **Low Risk** (automated database rule) |
| **2. FormSG Cannibalization** | Posters defaulting to FormSG links instead of native standard forms, undermining in-app pre-fill adoption. | Default UI flow is the native standard form. Outbound FormSG links are allowed only as a markdown link in the description for bespoke requirements. | **Medium Risk** (requires pilot agency change management) |
| **3. RO Awareness Friction** | Officers or posters bypassed by line managers, leading to friction when gig offers are made. | Dual self-declarations: poster confirms RO awareness at publish; applicant confirms RO awareness at submission. Clear post-offer guidance instructs officer to sync with RO. | **Low Risk** (self-declaration avoids blocking integration) |
| **4. Stale Mainstream Feed** | Careers@Gov listings remaining visible after closing on the originating portal. | Automated daily ingestion sync with automatic purging of postings where `closing_date < today`. Redirect disclaimer clarifies that C@G is the system of record. | **Low Risk** (reuses F-23 batch ingestion pattern) |

---

## 3. Upstream Source Systems Investigation Plan (C@G, HRPS, Cumulus)

Following the 18 Sep squad sync, our investigation into upstream job posting mechanisms pivots to address the multi-system reality across the public sector:

1. **Source of Truth Reality Check:**
   - **Careers@Gov (C@G):** Ingests only external, public-facing civil service vacancies. It does not possess hidden or internal job categories.
   - **HRPS (Civil Service Core):** Core ministries post internal vacancies and process transfers inside SAP, maintained by NCS.
   - **Cumulus (Statutory Boards):** Several statutory boards maintain internal marketplaces inside Workday, implemented by Essential.
   - **Secondments & SJRs:** Often distributed via agency circulars and email broadcasts rather than standard database feeds.

2. **Access & Operational Investigation (Gating R2 Architecture):**
   - **Intranet & VPN Dependencies:** Determine whether HRPS and Cumulus internal marketplaces can be accessed outside GSIB / government intranet. If intranet access is mandatory, mobile and personal device users in Compass must see clear guidance copy (*"This opportunity requires civil service intranet access to apply"*).
   - **Deep-Linking Feasibility:** Verify with NCS (HRPS) and Essential (Cumulus) whether direct requisition URLs exist, or if outbound links can only route to generic portal dashboards.
   - **Cross-System Mobility Barrier:** Investigate how an officer on HRPS applies to a statutory board on Cumulus without an existing account on the destination platform.
   - **Ringfencing Rules:** Document how ministries and stat boards restrict internal eligibility today (by parent ministry code, scheme of service, or security clearance).

3. **Spike & Discovery Allocation:**
   - **OTEP-578 (Léo):** Narrowed strictly to auditing the baseline C@G public feed schema and documenting field deltas.
   - **HRPS / Cumulus Discovery (Michelle):** Active PM discovery track engaging Li Kun (HRPS) and Huiting (Cumulus) to document technical requirements for R2.

---

## 4. ApplySG / GDP Component Evaluation

Before committing to build custom form fields and application storage in Compass:

- **ApplySG Evaluation:** Check whether ApplySG offers embeddable application widgets or an API-driven application submission backend for public sector roles.
- **GDP (Government Digital Products) System:** Evaluate GovTech Design System (Design System / FormSG components) for ready-made form components in React/Next.js to cut frontend build time.
- **Decision Criteria:** If third-party integration requires more than 1 sprint of integration and infosec clearance, use existing Compass form primitives.

---

## 5. Timeline, Capacity & Holiday Modeling

### Kickoff Baseline
- **Baseline Kickoff Date:** **~1 December 2026** (Post-MVP launch on 24-25 Nov). Engineering capacity remains 100% committed to MVP launch hardening through late November.

### Holiday Constraints (Dec 2026 – Jan 2027)
- **Public Holidays:** Christmas Day (25 Dec), New Year's Day (1 Jan).
- **Civil Service Year-End Block Leave:** High concentration of team leave between 21 Dec 2026 and 3 Jan 2027. Sprints crossing this period operate at ~50% net engineering capacity.
- **Designer Availability:** Li Ting Kway's (Liting) scheduled leave and design sprints need to be mapped against wireframe delivery (target: wireframes frozen by 30 Oct).

### Estimation Target
- **Delivery Target for Rama Moorthy & Barry Lim:** Work with Rama today to produce projected man-weeks across all 5 pillars (STIPs/Gigs, C@G Discovery, Saved Jobs, RBAC, and CAM) by **Tuesday, 22 September 2026**, accounting for a 3-engineer squad and holiday de-rating.

---

## 6. Estimated Engineering Requirements

### A. Effort Breakdown by Pillar (Estimated Man-Weeks)

| Pillar | Focus Areas | Primary Owner / Skillset | Estimated Man-Weeks |
|---|---|---|---|
| **1. STIPs & Gigs** | Standard application form, email alert trigger, poster applicant review table, markdown URL support | Fullstack (Thomas) + Backend (Hao Eng) | **5.0 – 7.0 mw** |
| **2. Mainstream Jobs** | Baseline C@G public vacancy feed ingestion, curated OTG secondment migration, external redirect links | Backend (Léo) + Fullstack (Thomas) | **2.0 – 2.5 mw** *(down from 4.0 mw; HRPS/Cumulus APIs deferred)* |
| **3. Saved Jobs** | Bookmark toggle DB table & endpoint, UI card/details toggle, saved-jobs filter (OTEP-425) | Fullstack (Thomas) + Backend (Léo) | **2.0 mw** |
| **4. RBAC & Privacy** | 3-tier access checks, poster/collaborator drawer boundary, audit logging for application views | Platform / Auth (Hao Eng) | **3.5 – 4.5 mw** |
| **5. CAM Integration** | Keycloak SCIM connector configuration, privileged group role propagation, deprovisioning sync | Platform / Auth (Hao Eng) | **2.0 – 2.5 mw** *(if SCIM holds; 5.0+ mw if custom APIs required)* |
| **6. Discovery Telemetry** | Instrumentation for opportunity detail views (North Star), search-to-click, recommendation CTR, redirect tracking | Fullstack (Thomas) + Backend (Léo) | **0.5 – 1.0 mw** |
| **Hardening & QA** | E2E integration testing, security scans, regression suite, defect buffer | Entire Squad | **3.0 – 4.0 mw** |
| **Total Estimated Effort** | | | **18.0 – 23.5 man-weeks** |

---

### B. Squad Sizing & Role Requirements

To deliver within a target of ~5 sprints (~10-11 calendar weeks), the required engineering profile is:

1. **Frontend / Fullstack Engineer (1.0 FTE — Thomas Huchedé):**
   - Owns `otep-web` UI implementation: standard application form, poster applicant review table, bookmark toggle and saved filter, description markdown links, external C@G redirect handoff, and discovery telemetry event beacons.
2. **Platform & Auth Engineer (1.0 FTE — Hao Eng Chua):**
   - Owns Keycloak SCIM integration for CAM, Keycloak Privileged Group token propagation, candidate storage APIs, transactional Postman email alert integration, and RBAC resource-level checks.
3. **Backend & Data Integration Engineer (1.0 FTE — Léo Milbor):**
   - Owns baseline C@G feed schema ingestion (F-23), ringfencing and email domain whitelisting queries (Option A), saved-jobs database models, telemetry logging tables, and E2E test harness.
4. **Tech Lead / Architecture Oversight (0.3 – 0.5 FTE — Barry Lim / Rama Moorthy):**
   - Cross-system architecture governance, infosec/VAPT review, CAM protocol sign-off with central GovTech teams.
5. **Product Designer (0.5 FTE — Li Ting Kway / Liting):**
   - Wireframes for standard form, applicant table, bookmark toggle, and C@G external indicators. **Prerequisite:** Wireframes must freeze by **30 Oct 2026** before year-end leave. Builds on Liting's action items from 17 Sep (sharing the two form formats, confirming shortlist vs offer/reject, and reviewing FormSG common fields).

---

### C. Feasibility Assessment & Conditions

Can a **3-engineer squad** deliver this reduced scope between ~1 Dec 2026 and mid-February 2027?

**Verdict: YES, feasible with 3 engineers, subject to 3 non-negotiable boundaries:**
1. **CAM remains on the SCIM shortcut:** If the CAM team rejects SCIM and insists on 7 custom app-side API endpoints, effort increases by +3 to 4 man-weeks, making a 4th engineer mandatory.
2. **Form remains strictly a fixed standard template:** No custom agency fields or dynamic form builders; agencies requiring custom forms must link out to FormSG.
3. **Mainstream jobs remain discovery-only with deferred enterprise APIs:** Compass does not build a native application flow for mainstream civil service jobs, and does not build live API connectors to HRPS (SAP) or Cumulus (Workday) in R1.

---

## 7. Scope Boundaries: What We Are Deferring to R2

To protect delivery timing and engineer capacity, the following features and workflows are explicitly deferred to R2 or subsequent releases:

| Area | Feature / Capability | What Was Originally Planned | Why It Is Deferred to R2 |
|---|---|---|---|
| **1. Application Form** | **Dynamic Form Builder & Custom Fields** | Letting each agency configure bespoke questions, custom dropdowns, and branching logic. | High engineering effort; fixed standard form + outbound FormSG link in description solves 95% of use cases for R1. |
| | **Multi-File Uploads & Complex Parsing** | Uploading custom PDF resumes, portfolios, and cover letters with deep text parsing. | Avoids heavy S3 bucket provisioning, antivirus scanning pipeline, and PDF data retention compliance. R1 relies on the pre-filled Compass profile. |
| **2. Selection & Workflow** | **Full ATS Pipeline & Shortlisting** | Multi-stage candidate management: Shortlist, Technical Review, Interview, Offer, and Regret, with interviewer rubrics. | R1 provides lightweight selection only (review table with simple Offer/Reject). Agencies conduct detailed assessment offline. |
| | **Custom Automated Candidate Regret Emails** | Automated personalized email notifications to rejected applicants explaining outcomes. | Avoids building and maintaining custom email templates per agency. R1 updates the in-app application status badge only. |
| | **In-App Supervisor Approval Workflow** | Automated digital endorsement routing to reporting officers before submitting applications. | Deferred to avoid blocking applications on unintegrated agency reporting hierarchies. |
| **3. Mainstream Jobs (Internal, SJR, Secondment)** | **Live API Integration with HRPS & Cumulus** | Connecting directly to SAP (NCS) and Workday (Essential) to pull live internal job feeds. | High integration risk, unverified API availability, and multi-vendor dependency; discovery with Li Kun and Huiting runs in parallel for R2. |
| | **Native Posting Creation in Compass** | HR posting mainstream jobs, SJRs, and secondments directly inside Compass. | Mainstream jobs stay on source systems; Compass acts purely as a discovery window via ingestion feed. |
| | **Native In-App Apply for Mainstream Jobs** | Submitting resumes and tracking mainstream civil service applications inside Compass. | Mainstream jobs use external redirect links ("Apply on Careers@Gov" / source portal). Keeps selection on existing HR portals. |
| | **Two-Way Write-Back Sync to C@G / OTG** | Syncing candidate statuses from Compass back into C@G or OTG databases. | High architectural complexity and integration risk; one-way inbound ingestion is sufficient for discovery. |
| **4. Saved Jobs & Search** | **Saved Searches & Automated Alerts** | Email digests notifying officers when new opportunities match their saved filters. | High operational email overhead; simple bookmark toggle on cards satisfies the core user need for R1. |
| | **Shared Bookmarks & CSV Export** | Exporting bookmarked jobs or sharing collections with colleagues. | Low-priority utility feature; deferred to future iterations. |
| **5. RBAC & Admin** | **Multi-Tier Agency HR Admin Portal** | Central agency dashboard to inspect, reassign, and audit all candidate drawers across the ministry. | Sized down to Minimum Viable RBAC: only the poster and 1-2 designated co-evaluators see the applicant drawer. |
| | **Dynamic Permission Role Matrices** | Custom agency roles, departmental delegation trees, and temporary leave coverage. | High complexity in Keycloak/auth; record-level ownership checks cover pilot requirements. |
| **6. Rollout & Platform** | **Non-Pilot Agency Posting Access** | Allowing all 30+ public sector agencies to post Gigs and STIPs. | R1 is strictly ringfenced to the 6 pilot agencies to maintain quality and control support overhead. |
| | **7 Bespoke App-Side APIs for CAM** | Custom endpoints to handle CAM employee lifecycle events. | Replaced by Keycloak standard SCIM connector (Hao Eng's approach), deferring custom endpoint builds indefinitely. |

---

## 8. Open Questions for Business Owners (BOs) by Epic

### Epic 1: STIPs & Gigs (Open Posting, Lightweight Apply & Review)

| # | Question for BOs | Why It Matters / Context | Recommended Option |
|---|---|---|---|
| **1.1** | **Open Posting by Anybody (Self-Serve vs. HR Moderation):** Does PSD endorse allowing ANY authenticated public officer across the 6 pilot agencies to post a STIP or Gig directly, without prior HR screening or an approval moderation queue? | Central HR moderation creates an operational bottleneck and kills gig liquidity. Self-serve posting lets project leads and team managers spin up micro-gigs immediately. | **Approve self-serve posting by any officer.** Rely on post-publish transparency, pilot telemetry, and takedown capabilities if needed. |
| **1.2** | **Creator Reporting Officer (RO) Awareness:** Should the gig creation flow include a mandatory declaration confirming the poster's own supervisor/RO is aware they are offering this opportunity? | Prevents officers from committing team resources or mentoring bandwidth without internal line management awareness. | **Yes.** Include a single checkbox at publish: *"I confirm my Reporting Officer is aware of this gig posting."* |
| **1.3** | **Standard Form vs. FormSG Flex:** Will PSD endorse a strict standard form policy across the 6 pilot agencies, while allowing posters who insist on custom screening questions to paste an outbound FormSG link in the job description? | Individual agencies often ask for bespoke fields. Allowing an outbound FormSG link in the description satisfies custom edge-cases without bloating Compass with a dynamic form builder. | **Yes.** Endorse the standard form as the primary flow; allow description hyperlinks to FormSG as the exception fallback. |
| **1.4** | **Resume / Attachment Requirement:** Can STIPs and Gigs rely solely on the officer's pre-filled CareerCompass profile (competencies, role, agency, past experiences), or is an uploaded PDF resume strictly required? | Omitting PDF uploads avoids building file-storage pipelines, antivirus scanning infrastructure, and PDF data retention compliance in R1. | **Rely on Compass Profile.** For short-term gigs and projects, pre-filled profile data is sufficient for screening. |
| **1.5** | **Consolidated Applicant Declaration Wording:** Does PSD / Legal approve replacing multiple agency declaration checkboxes with a single standard declaration: *"I declare that all information submitted is accurate and I have informed my Reporting Officer"*? | Reduces application friction and eliminates custom legal checkboxes per agency. | **Approve single consolidated declaration.** Standardize across all 6 pilot agencies. |
| **1.6** | **Rejection / Outcome Communication:** In R1, marking an applicant "Reject" updates their in-app status but does not trigger automated email feedback. Are BOs comfortable with hiring managers communicating detailed feedback directly or offline? | Keeps email notifications lightweight (transactional alert to poster only) and avoids managing custom email templates per agency. | **Accept in-app status update only.** Hiring managers handle personalized rejections directly if needed. |

### Epic 2: Mainstream Jobs (Discovery Only via C@G & Ringfencing)

| # | Question for BOs | Why It Matters / Context | Recommended Option |
|---|---|---|---|
| **2.1** | **Double-Hatting / Secondment Visibility Rule:** When an officer holds two concurrent jobs across different agencies, should Compass check each job individually (Option A), or combine attributes across both jobs (Option B)? | Ref: [ringfencing-bo-brief.md](../decisions/2026-09-17-W38-ringfencing-bo-brief.md). Option B allows officers to bypass agency restrictions by combining unrelated facts from two different roles. | **Option A (Check each job on its own).** Prevents officers from bypassing posting restrictions. |
| **2.2** | **Ringfencing Granularity in C@G:** What specific restriction tags exist in C@G postings today for Internal Jobs and SJRs (e.g. agency code, ministry code, or email domain)? | Determines the technical logic needed for the whitelisting query on Compass. | **Agency domain / code.** Restrict mainstream postings by primary agency identifier. |
| **2.3** | **Redirect Expectation Setting:** Mainstream jobs redirect out to Careers@Gov or agency HR systems with no in-app status tracking. Does PSD want an explanatory disclaimer modal before redirecting? | Manages officer expectations that mainstream applications are tracked in the originating HR portal, not Compass. | **Add a lightweight external-link indicator** with copy: *"You will be redirected to Careers@Gov to complete your application."* |

### Epic 3: Saved Jobs (Officer Bookmarking)

| # | Question for BOs | Why It Matters / Context | Recommended Option |
|---|---|---|---|
| **3.1** | **Handling Expired / Closed Bookmarks:** When a bookmarked opportunity reaches its closing date or is closed early by the poster, how long should it remain in the officer's "Saved Jobs" view? | Prevents officer confusion while allowing them to see what happened to roles they tracked. | **Retain for 30 days with a "Closed" badge**, then automatically purge from the saved list. |
| **3.2** | **Demand Analytics Reporting:** Does PSD / Workforce Development require aggregate reporting on which opportunities are most bookmarked (as a leading indicator of workforce interest)? | Sizing impact: low effort to capture count, but requires agreement on reporting cadence. | **Include bookmark count in monthly pilot telemetry.** |

### Epic 4: Role-Based Access Control (RBAC) & Candidate Privacy

| # | Question for BOs | Why It Matters / Context | Recommended Option |
|---|---|---|---|
| **4.1** | **Co-Evaluator Cross-Agency Eligibility:** Since any officer can post a gig, can the creator add co-evaluators from *other* pilot agencies by email (e.g. cross-agency joint projects), or only colleagues within their same home agency? | Many gigs are cross-agency working groups. Restricting co-evaluators to the home agency forces panels back to forwarding candidate CVs via email. | **Allow any valid civil service email** (`.gov.sg`) across the 6 pilot agencies to be added as a co-evaluator. |
| **4.2** | **Agency HR Coordinator Access:** Does Agency HR require a central "oversight drawer" to see all gig applicants across their agency during the pilot, or is visibility strictly limited to the posting creator and their collaborators? | Determines whether we build a complex multi-tier agency admin dashboard or keep to lightweight record-level checks. | **Keep strictly to Creator + Collaborators for R1.** Central Agency HR oversight can be supported via periodic CSV exports if required. |
| **4.3** | **Vacancy Reassignment upon Staff Transfer:** If a gig poster leaves the agency before reviewing applicants, who inherits the posting? | Prevents orphaned applicant pools when posting owners move. | **Designate Agency HR POC as the default fallback owner** for orphaned postings. |

### Epic 5: Central Account Management (CAM) & Data Governance

| # | Question for BOs | Why It Matters / Context | Recommended Option |
|---|---|---|---|
| **5.1** | **Candidate Data Retention & Purge Window:** Once a STIP/Gig is closed and completed, what is PSD's mandated retention window before applicant submissions and profile snapshots are permanently purged? | Legal and compliance requirement under public sector data governance. Engineering cannot build data retention without a defined period. | **Purge candidate data 90 days after opportunity closure.** Provides enough time for post-placement checks while minimizing data liability. |
| **5.2** | **Status of Departed Officers' Applications:** When CAM pushes a termination or transfer event for an officer who has active pending gig applications, should those applications be automatically cancelled? | Prevents hiring managers from reviewing or offering gigs to officers who have already left government service. | **Automatically set status to "Withdrawn (Officer Inactive)"** upon CAM deprovisioning event. |

### Cross-Cutting: Pilot Agency Commitment & Cutoff Date

| # | Question for BOs | Why It Matters / Context | Recommended Option |
|---|---|---|---|
| **6.1** | **Day-One Exclusivity & Volume:** Will PSD mandate that the 6 pilot agencies post their STIPs and Gigs exclusively on CareerCompass on day one (target: 20-30 active roles) and stop posting them to OTG? | Running both systems in parallel splits candidate traffic, creates duplicate postings, and slows adoption. | **Yes.** Mandate exclusive CareerCompass posting for the 6 pilot agencies starting on launch day. |



