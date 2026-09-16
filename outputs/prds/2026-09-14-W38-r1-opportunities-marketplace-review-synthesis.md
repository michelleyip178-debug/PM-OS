---
prd: outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md
review_date: 2026-09-14
stage: Planning Review
agents: [engineer, designer, executive, legal, uxr, skeptic, customer]
---

# PRD Review Synthesis: R1 Opportunities Marketplace (Admin Portal & Native Apply Loop)

**Reviewed:** 2026-09-14 (Week 38)  
**Current Stage:** Planning Review  
**Reviewers:** Engineering, Design, Executive, Legal, UXR, Skeptic, Customer Voice  

---

## TL;DR

**Overall Assessment:** Conditionally Ready to Proceed. The problem definition, empirical baseline (Qiu Yan & Amy 2025 actuals), and scope targeting are exceptionally strong. However, two technical and legal blockers must be resolved before technical freeze in Sprint 1: CV data retention schedules and asynchronous handling for batch CV archiving.

* **Critical Blockers:** 2 (Unspecified CV retention and purge policy; synchronous batch ZIP worker bottleneck).
* **Important Gaps:** 3 (Line manager evaluation view undefined; unverified self-reported grade data; lack of rate-limiting for serial applicants).
* **Conflicting Perspectives:** 2 (Custom form builder vs. FormSG webhook; Hard grade eligibility gating vs. Soft advisory warning).

**Recommended Next Step:** Run `/decision-doc` on the Grade Gating policy (Soft Warning vs. Hard Gate) and finalize the CV retention policy with GovTech security before Sprint 1 backlog freeze.

---

## Critical Blockers

These items must be resolved before finalizing technical specs and committing sprint backlog.

### 1. Missing CV Data Retention & Purge Architecture
* **Flagged by:** Legal Advisor, Engineering Reviewer
* **Issue:** Resumes contain sensitive personal data (work history, appraisals, contact details). The PRD lists CV retention as Open Question #2 ("In Review") without an automated lifecycle policy. Storing candidate CVs indefinitely in S3 violates public sector data minimization guidelines (IM8).
* **Impact if not fixed:** Legal and data governance audit failure, heightened breach exposure, and potential pushback from pilot agency data protection officers.
* **Recommendation:** Specify an automated retention lifecycle in the PRD: candidate files are encrypted with per-agency KMS keys and automatically soft-deleted 90 days after an opportunity reaches terminal status ("Closed" or "Completed"), with a 14-day permanent purge window.
* **Owner:** Michelle Yip (PM) / GovTech Security Lead

---

### 2. Synchronous Batch ZIP Export Vulnerability
* **Flagged by:** Engineering Reviewer
* **Issue:** Section 3 and Section 5 specify a "Batch ZIP Export of Applicant CVs" via a single button. If an HR coordinator triggers a batch download for a high-demand gig or rotation with 80+ candidate resumes (each up to 5MB), compressing these files synchronously in the API worker will cause HTTP gateway timeouts (504) and memory spikes.
* **Impact if not fixed:** Production timeouts during peak review periods, frustrated HR coordinators, and potential denial-of-service crashes on the API cluster.
* **Recommendation:** Decouple the archive process. Move ZIP packaging to an asynchronous background worker. When clicked, the UI shows a progress state ("Preparing archive...") and delivers a short-lived presigned S3 download link via browser notification or direct stream.
* **Owner:** Tech Lead (Adrian Ang / Squad Eng Lead)

---

## Important Gaps

Address these during Sprint 1 solutioning before code completion.

### 1. Unvalidated Line Manager Experience
* **Flagged by:** UX Research Analyst, Customer Voice (HR Admin)
* **Gap:** The PRD focuses heavily on the HR POC workflow but leaves the line manager's review screen underspecified. Section 8 notes Open Question #4 ("Confirm whether line managers require a separate light dashboard or can use role-scoped links").
* **Risk:** If line managers find logging in cumbersome, they will pressure HR POCs to continue emailing downloaded PDFs, defeating the in-portal workflow.
* **Recommendation:** Conduct 3 rapid hallway usability tests with hiring managers from MDDI and ESG in Sprint 1 on a simplified read-only candidate dossier view accessed via authenticated magic link.

### 2. Self-Reported vs. Verified Grade Misalignment
* **Flagged by:** Skeptic, Engineering Reviewer
* **Gap:** Feature H-APP-1 relies on job grade comparison to trigger soft warnings against serial applications. If candidate grade is self-reported in the profile without direct HRPS synchronization, candidates can alter their profile grade to bypass warnings.
* **Risk:** Serial applicants will ignore soft warnings, failing to curb the applicant spam that wastes host agency review time.
* **Recommendation:** Clarify in Section 3 whether job grade is an authoritative, immutable attribute pulled from central identity (WOG AD / HRPS) or editable by the officer. If self-reported, establish a hard ceiling on active open applications (e.g., max 5 active applications at any one time).

### 3. Anti-Spam Application Rate Limiting
* **Flagged by:** Skeptic, Executive Reviewer
* **Gap:** The 2026 data revealed 1 candidate submitting 112 applications. A soft warning modal ("Your grade does not match") informs the user but does not prevent submission.
* **Risk:** A committed spray-and-pray applicant will simply dismiss the modal and submit anyway, preserving the burden on hiring panels.
* **Recommendation:** Introduce a soft throttle: alert the applicant on submission 1 to 5; on application 6+ within a 30-day rolling window, require mandatory line manager endorsement confirmation before submission can proceed.

---

## Enhancements to Consider

### From Engineering
* **Antivirus Scanning Hook:** Ensure all uploaded PDFs pass an asynchronous ClamAV/GovTech file scanner before becoming available for preview or batch ZIP export.
* **Schema Versioning for Form Builder:** Store custom form fields as a versioned JSON schema attached to the posting so mid-intake question updates do not corrupt historical submissions.

### From Design
* **Sticky Filter State across Sections:** Ensure that active search parameters (e.g. Job Family = "Data & AI") persist cleanly when navigating between "Jobs and Opportunities" and "Learning and courses", and when switching between the "Projects & Rotations" and "Short-Term Immersions" sub-tabs.
* **Session Full Waitlist Prompt:** When a STIP reaches capacity, display a secondary CTA: "Notify Me for Next Run" to capture latent demand without generating rejected application records.

### From Executive
* **Whole-of-Government Mobility Index:** Expose an anonymized, aggregated dashboard metric for Head of Civil Service (HCS) showing cross-agency application volume and secondment flows.
* **Agency SLA Accountability:** Add a lightweight dashboard widget showing average days from submission to first status update, encouraging agencies to resolve candidates within 14 days.

### From Legal
* **Tripartite Consent Language:** Embed a explicit consent clause in the native apply modal: "I understand that my profile and application details will be shared with the host agency hiring panel for assessment."
* **Audit Trail Logging:** Maintain tamper-evident audit logs capturing who viewed or exported candidate CVs, accessible for data security audits.

### From UX Research
* **Form Fatigue Benchmarking:** Establish a maximum ceiling of 5 custom questions per gig posting to maintain the target 50% application completion rate.
* **Rejection Closure Copy Testing:** Test 2 variations of automated "Not Progressing" notifications to ensure tone is constructive and encourages ongoing skill development and future applications.

### From Skeptic
* **Re-evaluating "Needs Talent" Flag:** Test whether zero-applicant gigs suffer from poor visibility or poor role scoping. If a gig requires unrealistic hours or outdated tech, badging it "Needs Talent" will not attract applicants. Offer posters a "Refine Scope" prompt after 10 days of zero views.

### From Customer Voice
* **Applicant Confirmation Receipt:** Send an immediate, professional email receipt upon submission listing role details, host agency, and expected review timeline.
* **Fast-Track Posting Duplication:** Allow host agency HR POCs to clone a past posting in one click, reducing creation time for recurrent STIPs to under 3 minutes.

---

## Conflicting Perspectives

### Conflict 1: In-House Flat Form Builder vs. Embedded FormSG Integration
* **Perspective A (Engineering & Skeptic):** Building and maintaining a custom form builder consumes significant engineering effort (Sprint 1 to 3). GovTech already maintains FormSG with advanced validation and security. Embedding FormSG via webhooks or deep links avoids reinventing form infrastructure.
* **Perspective B (Design, UXR, & Customer Voice):** Pilot agencies (especially MDDI) explicitly abandoned OTG because external forms fractured the candidate pipeline and broke status tracking. A native flat form builder is the foundational wedge that secures agency adoption and keeps officers inside CareerCompass.
* **Decision Needed:** Confirm whether to proceed with the in-house flat form builder for R1.
* **Recommendation:** Proceed with the native flat form builder, strictly bounded to 5 basic field types (Short Text, Long Text, Dropdown, Checkbox, Attachment) with zero branching logic. Do not build advanced form features.

---

### Conflict 2: Soft Grade Warning vs. Strict Grade Gating
* **Perspective A (Skeptic & Host Agency HR):** A soft warning pop-up will be clicked through in seconds by determined serial applicants. Hard gating (blocking officers whose grade falls outside target criteria) protects hiring managers from screening hundreds of unqualified applicants.
* **Perspective B (UXR, Design, & Officer Voice):** Strict grade gating reinforces civil service rigidities and prevents high-potential officers from applying for stretch opportunities. Civil service development policy encourages cross-grade learning.
* **Decision Needed:** Should grade boundaries act as an advisory warning or a hard barrier?
* **Recommendation:** Implement a tiered approach: Soft advisory warning for Gigs and STIPs (development-oriented); strict eligibility requirement for formal SJRs and Secondments where ministry establishment post rules apply.

---

## Detailed Feedback by Perspective

### 1. Engineering Review
* **Feasibility:** High for core application and tracking workflows; Medium for the custom form builder.
* **Strengths:** Clear database taxonomy boundaries; well-defined candidate status state machine (4 states); pragmatic non-goals (no branching logic, no automated scoring).
* **Concerns:** Handling file uploads up to 5MB directly in the web tier without a presigned S3 upload strategy; potential database locking during bulk status updates.
* **Blockers:** Batch ZIP creation must be an asynchronous background worker to prevent gateway timeouts.
* **Complexity Rating:** Medium (3 to 4 sprints for core backend and UI).

---

### 2. Design Review
* **Usability:** High. In-catalog sub-tabs inside "Jobs and Opportunities" ("Projects & Rotations" vs. "Short-Term Immersions") solve the visual drowning of gigs without ejecting STIPs from the opportunities space.
* **Strengths:** Dedicated sub-tabs keep high-volume STIPs separated from substantive gigs and rotations; pre-filled profile information removes tedious data entry.
* **Concerns:** Information density on opportunity cards. Stacking job family, seniority, duration, workload, and secondment badges could overwhelm mobile viewports.
* **Blockers:** None.
* **Usability Risk:** Low-Medium. Needs careful mobile viewport breakpoints for the application modal.

---

### 3. Executive Review
* **Strategic Alignment:** High. Directly advances Whole-of-Government talent mobility and transforms CareerCompass from a passive board into an essential operational system.
* **Business Impact:** High. Solves the 90% applicant drop-off, eliminates the HR post-box bottleneck, and captures clean rotation data for PSD leadership.
* **Concerns:** Pilot agency commitment. If agencies do not mandate CareerCompass internally, coordinators may slip back into familiar FormSG habits.
* **Strategic Fit:** Strong.

---

### 4. Legal & Compliance Review
* **Compliance:** Requires data retention sign-off prior to production deployment.
* **Strengths:** In-portal CV rendering eliminates unmanaged personal Google Drive and SharePoint links across external domains. Watermarking previews deters unauthorized distribution.
* **Concerns:** Lack of automated data purge schedule for unsuccessful applicant resumes.
* **Blockers:** Open Question #2 (CV retention) must be formalized into a strict policy (recommend 90-day post-cycle automated purge).
* **Legal Risk:** Medium. Acceptable with automated deletion and encrypted storage.

---

### 5. UX Research Review
* **Validation:** Very strong. Directly reflects pain points from the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) and empirical data from Qiu Yan and Amy.
* **Strengths:** Clear alignment with observed civil service behaviors (solving the 4-8 week silence; eliminating manual drive downloading).
* **Concerns:** Hiring managers have not been included in discovery testing.
* **Blockers:** None.
* **Research Validation:** Strong.

---

### 6. Skeptic Review
* **Problem Validation:** Validated by 7,097 annual sign-ups and 49% net demand gap.
* **Core Challenges:**
  1. *Will hiring managers actually use the portal?* If HR coordinators still have to nudge managers via email, we haven't eliminated the middleman, only changed the interface.
  2. *Is "Needs Talent" addressing the real issue?* Gigs fail to attract applicants because managers write poor JDs or ask for 30% time during busy budget cycles.
  3. *Why can't serial applicants just be capped?* A soft warning is unlikely to stop an officer who submitted 112 applications.
* **Summary:** The product solves real symptoms, but must avoid over-indexing on building form features that GovTech already provides.

---

### 7. Customer Voice Review
* **Officer Perspective:** "Applying in two clicks with my profile data is incredible. The biggest pain today is re-typing my resume into FormSG and hearing nothing. The live seat counter for STIPs will save me huge frustration."
* **HR POC Perspective:** "The batch ZIP export and 4-stage status tracker will save me hours every Friday. Just make sure creating a post doesn't take longer than setting up a basic form."
* **User Sentiment:** Strong enthusiasm from both sides, provided simplicity is preserved.

---

## Action Items

### Before Technical Backlog Freeze (Sprint 1)
- [ ] Update PRD Section 6 & 8 to specify the 90-day automated CV retention and purge policy. (Owner: Michelle Yip / Security Lead)
- [ ] Architect the Batch ZIP Export as an asynchronous background worker with presigned S3 URLs. (Owner: Tech Lead Adrian Ang)
- [ ] Define the line manager candidate review view (read-only dossier via authenticated link). (Owner: Design Lead Li Ting Kway)
- [ ] Run `/decision-doc` on Grade Gating (Soft Warning vs. Hard Gate by Opportunity Type). (Owner: Michelle Yip)

### Before Solution Review (Sprint 3)
- [ ] Conduct hallway usability testing on line manager review drawers with MDDI and ESG. (Owner: UXR / Michelle Yip)
- [ ] Implement asynchronous antivirus scanning pipeline for all CV uploads. (Owner: Backend Eng)
- [ ] Validate 10 live agency FormSG forms to confirm 5 flat field types cover all requirements. (Owner: Michelle Yip)

---

## Next Steps

1. **Immediate:** Update PRD with the async ZIP worker and 90-day data retention architecture.
2. **This Week:** Review synthesis findings with Tech Lead (Adrian Ang) and Design Lead (Li Ting Kway) during Monday Sprint 1 alignment.
3. **Skill Recommendation:** Run `/decision-doc` to formally record the policy choice on candidate grade gating.

---

*Generated: 2026-09-14T14:55:00+08:00*  
*Review Panel: 7 Agents (Engineering, Design, Executive, Legal, UXR, Skeptic, Customer Voice)*  
*Target PRD: [2026-09-14-W38-r1-opportunities-marketplace-planning-review.md](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md)*
