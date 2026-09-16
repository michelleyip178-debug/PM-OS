# Meeting Notes: R1 Opportunities Implied Product Requirements (MVP vs Later)

**Date:** 2026-09-11  
**Attendees:** Michelle Yip (PM, PSD), Adrian Ang (Director of Product Management, CareerCompass Product Lead), Li Ting Kway (Designer, GovTech), Technical Team / Product Trio  
**Meeting Type:** Requirements Analysis and Scope Boundary Session  
**Scope:** CareerCompass R1 Opportunities (STIPs, Gigs, SJRs, Internal Jobs, Secondments)  
**Duration:** Requirements Synthesis from Discussion  

---

## Summary

This session synthesized the implied product requirements for CareerCompass R1 Opportunities, establishing a clear line between MVP scope and Phase 2 enhancements across all opportunity types. The MVP establishes Compass as the primary authoring and application surface for R1 opportunities, introducing built-in CV uploads, a lightweight administrative applicant portal, and explicit 4-state selection pipelines with configurable email notification toggles. Advanced capabilities, including modular custom form building, line-manager delegation, and automated competency match scoring, are deferred to Phase 2 to protect delivery timelines.

---

## Decisions Made

1. **Compass acts as the primary posting and application surface for R1 opportunities**
   - **Why:** Prevents agencies from abandoning internal tools for FormSG or Careers@Gov due to long-hour posting limitations and lack of CV collection, keeping applicant data within Compass.
   - **Who decided:** Product Trio alignment (Michelle, Adrian, Li Ting).
   - **Impact:** Eliminates double-posting workarounds for R1 pilot agencies while OTG provides outbound link-outs into Compass application routes.

2. **MVP candidate handling centers on native CV file upload and administrative retrieval**
   - **Why:** Replaces external FormSG collection forms with a reliable, built-in application flow across all opportunity postings requiring candidate resumes.
   - **Who decided:** Michelle Yip, Li Ting Kway.
   - **Impact:** Applicants upload CV files directly in the application flow; administrators review applicants and download CVs (with batch ZIP download targeted if feasible).

3. **Adoption of a minimal four-state ATS selection workflow with early rejection**
   - **Why:** Resolves the widespread "weeks of silence" complaint from officers by enabling explicit status progressions and early rejections across all review pipelines.
   - **Who decided:** Michelle Yip, Adrian Ang.
   - **Impact:** Statuses progress explicitly: Applied to Shortlisted, Offered, or Rejected. Early rejections can be triggered anytime before final offers.

4. **Standard system notification templates with manual toggle controls**
   - **Why:** Mitigates the risk of accidental mass-email triggers to legacy applicants when closing roles or updating records.
   - **Who decided:** Product Trio alignment.
   - **Impact:** System emails use static wording. Administrators use explicit toggles to confirm whether notification emails fire.

5. **Competency data displayed as view-only without automated matching algorithms**
   - **Why:** Data quality and governance regarding officer competency ratings remain unvalidated.
   - **Who decided:** Michelle Yip.
   - **Impact:** Administrators see competency badges if present, but algorithms will not filter or score candidates automatically in MVP.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Convert discussion requirements into an MVP Scope Document (Problem, Goals, In-Scope, Out-of-Scope) | @Michelle | 2026-09-15 | 🔴 High | In Progress |
| Cluster MVP requirements into 4 delivery epics for backlog grooming | @Michelle | 2026-09-16 | 🔴 High | Not Started |
| Validate technical feasibility of batch CV ZIP export in the admin portal | @Pow Hwee | 2026-09-18 | 🟡 Medium | Not Started |
| Define non-onboarded agency authentication path (public form or controlled access link) | @Pow Hwee | 2026-09-18 | 🔴 High | Not Started |
| Draft static notification copy for Application Received, Rejected, and Offered states | @Michelle | 2026-09-19 | 🟡 Medium | Not Started |
| Review link-out and iframe integration patterns with the OTG engineering squad | @Michelle | 2026-09-22 | 🟡 Medium | Blocked on OTG sync |

---

## MVP vs Phase 2 Scope Deconstruction

### MVP Scope (Must-Have for First Release)

| Area | Feature | MVP Specification |
|---|---|---|
| Opportunity Creation | Multi-Type Opportunity Creation | Create postings natively (SJR, internal jobs, STIPs, gigs) with title, description, agency, cycle dates, and location |
| Opportunity Creation | Long-hour Role Support | Full support for long-hour opportunities (rotations, full-time postings) without falling back to Careers@Gov |
| Opportunity Creation | Structured Job Grade | Store job grade as a dedicated structured field visible to applicants and administrators |
| Application Flow | Built-in CV Upload | Direct CV attachment upload during application submission (enforcing file type and size limits) |
| Admin Portal | Candidate List & CV Viewer | View applicant roster by opportunity, inspect attributes, and download CVs (batch ZIP if feasible) |
| Admin Portal | Status Pipeline View | Display status roster: Applied, Shortlisted, Offered, Rejected |
| Selection Workflow | Explicit State Engine | Minimal selection transitions: Applied to Shortlisted/Rejected; Shortlisted to Offered/Rejected |
| Selection Workflow | Early Rejection | Reject unsuitable candidates at any point during the review cycle |
| Notifications | Standard System Templates | Trigger automated, static system emails for application events with safe phrasing |
| Notifications | Notification Dispatch Toggle | Manual UI toggle to opt in or out of sending automated emails during status actions |
| OTG Integration | Primary Source of Truth | Compass stores primary content; OTG links out directly to the Compass form |
| Non-Onboarded Access | Graceful External Access | Permit officers from non-pilot agencies to access and submit applications via public links |
| FormSG Parity | Basic Upload Baseline | Match FormSG core utility: single file attachment upload and administrative export |
| Competencies | Informational Display | Display verified or declared competencies in candidate profile view without automated filtering |

### Phase 2+ Scope (Deferred to Later Releases)

| Area | Feature | Deferred Scope Description | Rationale for Deferral |
|---|---|---|---|
| Custom Forms | Form Builder | Custom agency-specific question builder | High engineering complexity; risks duplicating FormSG |
| Custom Forms | Template Library | Reusable form templates across agencies | Requires mature cross-agency governance |
| Workflow | Rich ATS Stages | Multi-step interview stages and review boards | Outside lightweight selection boundary |
| Collaboration | Line-Manager Sharing | Role-based candidate sharing links | Complex permissions and privacy boundary |
| Talent Discovery | Talent Pools | Unsuccessful candidate matching for future roles | Data privacy and consent policies needed |
| Intelligence | Match Scoring UI | Automated algorithm scoring and explanations | Unverified competency data quality |
| Tracking | Attendance Tracking | Event attendance, completion logs, and report cards | Operational metrics can be captured manually initially |
| Analytics | HR Dashboards | Time-to-hire, funnel conversion, and drop-off analytics | Low usage in early pilot cycle |
| Communication | Custom Email Templates | Custom per-opportunity or per-agency email copy | High governance overhead and SME sign-off requirement |
| Strategy | Unified Front Door | "Drop your name in the hat" passive talent discovery | Requires whole-of-government policy clearance |
| HR Systems | Core HR Integration | Bi-directional synchronization with HIP, Workday, HRPS | High technical integration friction; deferred post-pilot |

---

## Key Insights

**Preventing the FormSG and Careers@Gov Detour:**
Agencies previously deserted internal tools because opportunity templates lacked flexibility for long-hour postings and direct CV collection. Giving Compass native multi-type creation, structured grade fields, and direct CV attachment stops double-posting behavior across pilot agencies.

**The FormSG Differential (Why Not Stay on FormSG):**
Workforce Development (WD) proposed a standard FormSG template for STIPs and Gigs that agencies adjust to their needs. While this works as a lightweight band-aid for micro-gigs, FormSG fails for substantive roles (SJRs, Internal Jobs, Secondments). FormSG creates the "vanishing officer" problem (zero in-app status visibility post-apply), burdens HR with manual spreadsheets and individual file downloads, and has no search discovery across the 150,000 public officers on Compass.

**The Four Strategic Trade-Offs Proposed for R1:**
1. *Form Flexibility vs Delivery Speed:* We trade off infinite custom form questions in exchange for shipping in 5.5 sprints with a standard 5MB CV upload.
2. *Journey Consistency vs Pragmatic Staging:* We trade off a single uniform apply flow (SJRs/Jobs get native apply and tracking; STIPs/Gigs leverage WD's FormSG template) to avoid building an unnecessary gig form builder.
3. *Platform Ownership vs File Security Liability:* We trade off zero file overhead (FormSG handled it) to take on S3 storage, antivirus scanning, and IM8 retention, in exchange for owning the whole-of-government talent mobility data.
4. *Self-Declaration vs HRMS Complexity:* We trade off automated eligibility gating to launch on time without waiting for complex Workday/HRPS integrations.

**The "Weeks of Silence" Candidate Experience:**
Officers routinely wait entire cycles without status updates. Introducing early rejections and standard status-triggered emails provides vital closure to officers while keeping administrative effort low.

**Safe Notification Dispatch:**
Automated notifications require protective boundaries. In legacy setups, closing an archived posting inadvertently dispatched mass emails to candidates from years prior. A visible toggle allowing administrators to suppress notifications ensures zero unexpected candidate communications.

**Data Discipline Over Algorithmic Over-Promise:**
Showing raw competency data as context without building automated match algorithms maintains user trust. Algorithmic ranking on nascent data damages credibility with HR selection panels.

---

## Open Questions

- [ ] What is the exact file size and format constraint for CV uploads (e.g., PDF and DOCX under 5MB)? (Owner: @Pow Hwee, By: 2026-09-18)
- [ ] How will authentication work for applicants from agencies outside the pilot group (public Singpass link vs magic link email authentication)? (Owner: @Pow Hwee, By: 2026-09-18)
- [ ] Does OTG support deep link redirect to the specific Compass application URL directly from their listings? (Owner: @Michelle, By: 2026-09-22)
- [ ] Is batch ZIP download of candidate CVs achievable within the current sprint architecture without asynchronous worker infrastructure? (Owner: @Pow Hwee, By: 2026-09-18)

---

## Blockers

1. **Non-Onboarded Agency Auth Strategy Unconfirmed**
   - **Blocked by:** Identity and access architecture decision for non-pilot officers.
   - **Impact:** Determines whether the application form can be publicly linked from OTG.
   - **Resolution:** Pow Hwee to review the lightweight authentication path for non-onboarded agencies by 2026-09-18.

---

## Timeline Risks

- **TIMELINE RISK:** Technical brainstorming with engineering is approaching, but the non-onboarded agency auth path and batch ZIP download feasibility remain unverified. If these technical spikes slip past 2026-09-18, the MVP scope document cannot lock in time for Sprint 10 planning.

---

## Next Steps

**Immediate (This Week):**
- Publish the structured MVP Scope Document separating the 4 core epics.
- Convene technical sync with Pow Hwee to resolve the CV batch download and external applicant auth questions.

**Short-term (Next 2 Weeks):**
- Present the clustered MVP scope to Adrian Ang and Li Ting Kway for final sign-off before technical brainstorming.
- Finalize notification copy templates and admin toggle interaction design.

**Follow-up Meeting:**
- **Topic:** Compass Opportunities Technical Brainstorming & Architecture Feasibility
- **Target Date:** Week of 2026-09-21
- **Attendees:** Michelle Yip, Pow Hwee, Li Ting Kway, Engineering Squad

---

## Context for Future Reference

- Related discussion on OTG vs Compass posting models: [STIP/Gig Opportunity Posting Notes (2026-09-07)](file:///Users/michelleyip/Documents/PM-OS/outputs/meeting-notes/2026-09-07-W37-stip-gig-otg-compass-posting-discussion.md)
- Strategic framework on opportunities: [CareerCompass Opportunities Strategy (2026-09-10)](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-10-W37-strategy-r1-opportunities.md)
- Sizing analysis for administrative features: [Impact Sizing: R1 Admin Portal (2026-09-10)](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-10-W37-impact-sizing-r1-admin-portal.md)

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw transcript/notes</summary>

Here are the **implied product requirements**, split into **MVP** vs **Later**. I’ve focused only on concrete, buildable requirements that showed up in the discussion.

---

## MVP Requirements (Must-Have for First Release)

### A. SJR / Opportunity Posting & Application
1. **Post SJR opportunities in Compass**
   - Ability to create **SJR-type** opportunities (and later use same pattern for internal jobs/secondments).
   - Fields include (at minimum): title, description, agency, dates/cycle, location, etc.
2. **Support for long-hour / SJR postings**
   - Compass must handle **“long hour” roles** that currently push users to use Career Center / Careers@Gov.
   - Result: HR no longer needs to rely on external postings **just to make SJR work**.
3. **Structured job grade fields (basic)**
   - Add **job grade** as a **structured field**, not only in free-text descriptions.
   - Job grade visible to applicants and HR.
   - Even if *filtering* is not complete yet, job grade must exist and be stored.

### B. Application & CV Handling
4. **Built-in CV upload on application**
5. **Admin portal: view and download CVs**
6. **Basic application list & status view**

### C. Selection Workflow (Light ATS)
7. **Simple selection states**
8. **Early rejection ability**
9. **Automated notifications tied to selection states (standard templates)**
10. **Control over whether to send notifications**

### D. Integration / Co-existence with OTG & FormSG (Transition)
11. **Compass as primary posting surface (for R1 use case)**
12. **Link-out support from OTG to Compass**
13. **Handle non-onboarded agencies gracefully**
14. **Minimal alignment with FormSG behaviours (file attachments)**

### E. Competencies (MVP Surfacing Only)
15. **Surface existing competency data without over-promising**

---

## Later / Phase 2+ Requirements (Nice-to-Have or Higher-Risk Scope)
- Form Builder & Custom Questions
- Richer Selection, Collaboration & Workflows
- Competency Matching Enhancements
- Reporting & Attendance
- Notifications & Communication Customization
- Long-term / Strategic (Unified front door, deeper HR systems integration)

</details>
