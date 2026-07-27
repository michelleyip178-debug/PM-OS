# Career Compass Data Lifecycle & Governance Design

**Purpose:** Document Career Compass's data requirements, data lifecycle, operational considerations, governance assumptions, and integration design to support POCDEX data-sharing approval and implementation planning. Directly addresses the questions raised by Huiting LIAN regarding data coverage, lifecycle, source systems, operational support, and governance.

**Recommendation:** Don't replace Rama's business requirements document ("Request for POCDEX Data for Career Compass"). Keep it as the BRD. Submit this as a companion doc alongside it. That's the fastest path to Huiting's support because it addresses the exact gaps she's been flagging in her comments.

---

## 1. Executive Summary

### Objective

Career Compass needs employment and competency data to:

1. Verify officer eligibility
2. Construct officer profiles
3. Map competencies
4. Recommend opportunities
5. Support operational troubleshooting
6. Support audit and access reviews

### What Career Compass is

A shared, integrated platform supporting officers and agencies in achieving Whole-of-Government workforce excellence. It consolidates disparate talent data, automates competency insights, and connects officers to opportunities based on validated skills, moving the Public Service from reactive to proactive workforce management. Four key features:

- **Competency profile** — officers see competencies expected of them in their current role, and can add others. Feeds L&D recommendations. (Team is reviewing whether endorsed competencies should also display; seeking PS guidance by Q4 2026.)
- **Opportunities** — STIP, gigs, jobs, with a match score against the officer's competency profile.
- **Courses** — a library of courses, personalized by competency profile and learning history.
- **Your Development** — next possible roles, with a match score against the officer's competency profile.

### Scope

**MVP (Q4 2026):**
- Active officers only
- Real-time employment lookup from POCDEX
- Core profile and competency mapping
- No bulk historical data migration
- No terminated officer lifecycle automation

**Post-MVP:**
- CAM integration for lifecycle management
- Operational lookup API (active + inactive) for troubleshooting
- Learning history, posting history, endorsed competencies

## 2. Access Eligibility

Platform access is granted only to officers who are:
- Active employment
- Non-TIVO (Temp, Interns, Vendors, Others)
- Non-adjunct workers (Cumulus agencies)
- Non-casual workers (Cumulus agencies) — *open question: should there be a distinct "casual" category, or does it fall under TIVO? To confirm with Huiting.*
- Not on No-Pay-Leave (NPL)

Excluded employment groups: TIVO, Fixed Term (e.g. Political Office Holders), Retirees/Pensioners, National Service (NSmen/NSF), External (e.g. Board of Directors), Volunteers.

Post-MVP, a separate active/inactive officer record (NPL, left service, etc.) is needed so working teams can troubleshoot platform issues (login failures, outdated info) — for **both** active and inactive officers, since this data is also used for ops, not just inactive-officer handling.

## 3. Data Requirement Matrix

### 3.1 Officer profile data
*Source: POCDEX Officer table*

| Field | Purpose | Remarks |
|---|---|---|
| NRIC | Uniquely identify each officer record from POCDEX and support matching to Compass profiles | |
| first_name | Display officer's given name | |
| last_name | Display officer's surname | |
| email | Match officer to work account, identity resolution, system notifications | |
| source_system | Identify upstream source (HRPS \| CUMULUS) for traceability and issue resolution | |
| status | — | Optional — POCDEX API already filters to active officers only |
| pocdex_uid | Uniquely identify officer record from POCDEX; support matching based on pocdex_uid | Used as the identifier in the MVP solution; will switch to NRIC post-MVP |

### 3.2 Employment data
*Source: POCDEX Employment table. Double-hatting officers: all active positions required. Seconded officers: one active position required.*

| Field | Purpose | Remarks |
|---|---|---|
| officer_id | Link employment record to officer profile | |
| pocdex_uid | Support matching between POCDEX employment records and officer profile | |
| employment_id | Link position/job record to the relevant employment record | |
| agency_code | Identify employing agency for filtering/eligibility | To confirm with Huiting |
| agency_label | Display employing agency | Follows the OTG agency list (e.g. ECDA and 7 MHA sub-agencies treated as distinct agencies, not lumped under parent ministry) |
| employment_type | Determine employment type for business rules, filtering, exclusion logic | |
| position_id | Associate employment record with position for downstream competency mapping | |
| employment_title | Display formal employment title | Sourced from HRPS |
| business_title | Display business title where available | Sourced from Cumulus |
| department | Identify department/org unit for display and filtering | |
| is_primary | Identify the primary employment record shown by default when multiple exist | **Open question to Huiting:** does "True" mean highest time commitment? Can more than one record be "True"? For seconded officers, is it always "True"? |
| secondment | ~~Indicate secondment status for display/eligibility~~ | Struck through in source — superseded by `is_primary` logic |
| status | Only active positions needed | Tracks working history as an officer moves roles/secondment/NPL; used for profile display and tailored recommendations |

**Agency master list:** Compass sources agency data from POCDEX and from the Role Profile/Competency Excel sheet, harmonizing internally (~100 agencies). Not a separately maintained master list — it's built from POCDEX, per Imelda MO. Christopher WOO has requested agency, job family, and job function data to cross-verify against Compass's existing master list.

### 3.3 Position and job data
*Source: POCDEX position_jobinfo table. Where multiple job profiles link to one position, all should be exposed.*

| Field | Purpose |
|---|---|
| officer_id | Link position/job record to officer profile |
| employment_id | Link position/job record to employment record |
| position_id | Uniquely identify officer's position; map position → job → role → competencies |
| job_id | Link position to underlying job definition for competency mapping |
| job_grade_code | Job grade for mapping, filtering, grade-level business rules |
| ~~job_grade_label~~ | *Struck through in source — not required* |
| job_family_code | Job family for competency mapping, opportunity matching, reporting |
| job_family_label | Display job family; career pathway context |
| job_function_code | Job function for competency mapping, opportunity matching, reporting |
| job_function_label | Display job function; role/competency interpretation |
| main_family_indicator | Identify main job family where an officer has multiple family associations |
| main_job_indicator | Identify main job for default display/competency mapping where multiple jobs exist |
| status (job profile status) | Track working history through role changes/secondment/NPL; profile display and recommendations | **Open question:** within one position, can some job roles be inactive while others are active, or are all job roles active if the position is active? To confirm with Huiting. |

## 4. Data Coverage: Current, Historical, Future

**Current data** — required for officer login, opportunity recommendations, profile generation. This is the core of the MVP ask.

**Historical data**
- MVP: none required.
- Post-MVP: needed for troubleshooting (login failures, outdated info displayed), audit checks, and investigation of user-reported access/profile issues.
- **Terminated officer records:** open policy question. Compass's original position (storing history "for future product enhancements") was pushed back on by Huiting — storage of terminated officers' records is subject to policy requirements tied to whatever system clearance Compass has obtained; Compass can't unilaterally decide to retain data for product reasons. Compass's resolution: integrate with CAM to receive employment status changes and handle retention accordingly, rather than self-determine retention.

**User account retention:** inactive officer accounts are inactivated and retained for **4 years**. Rationale: covers the maximum secondment period (2+1 years), so officers seconded to a non-Public Service agency can retain their Compass account and competency profile through the secondment.

**Future-dated data** — not required. Reason: significant complexity, data volatility, effective-date management concerns.

This section addresses the current/historical/future data questions Huiting has repeatedly raised.

## 5. Employment Edge Cases

**Seconded officers** — only the new (seconded) position's information is displayed (agency, email, etc.).

**Multi-hatting (double-hat) officers** — all positions an officer holds are needed for competency profile purposes. For MVP, only the **primary** position is shown.

**Frequency of update** — Compass accesses officer data via the POCDEX API on-demand (see Section 7). POCDEX syncs with source HR systems (HRPS/Cumulus) daily, so officers see updated employment info in Compass after the daily POCDEX sync completes.

**Lag period handling** — during the gap before POCDEX reflects a secondment or transfer, Compass takes no additional action. If the officer logs in during this window, Compass continues to reflect their existing position until POCDEX has the updated details.

## 6. System of Record / Source of Truth

| Data Element | Source of Truth | Consumer |
|---|---|---|
| Employment Status | POCDEX | Compass |
| Agency Information | POCDEX | Compass |
| Position Information | POCDEX | Compass |
| Login Eligibility | CAM | Compass |
| Competency Mapping | Compass Logic (Role Profile/Competency Excel via HRPS/Cumulus) | Compass |
| User Preferences | Compass | Compass |

**Principle:** only one system should be responsible for changing each data element. Directly answers Huiting's question — which system is changing the data.

## 7. API Integration Approach

Compass does **not** require a delta feed or full data dump from POCDEX. Instead, it requires **API-based, on-demand access** for two purposes: login validation and operational support.

**Login validation:** when an officer logs in via WOG AD, Compass makes a real-time API call to POCDEX to retrieve employment details. Only officers with active employment records are granted access. The POCDEX API must be available for on-demand consumption.

**Open question raised by Huiting:** if Compass only takes active officers, how does POCDEX know when to notify Compass that a previously-active officer's status flips to terminated — i.e. how are delta changes surfaced (webhook, CFT file, polling)? Compass's response: for MVP, no active syncing of staff status from POCDEX; that becomes a post-MVP build. Compass has asked whether POCDEX can push delta changes via a file through CFT as an alternative to API polling — feasibility TBC with POCDEX/GovTech.

**Officers who have left the Public Service:** Compass relies on **CAM integration** to receive inactive-officer notifications and trigger account lifecycle actions (see Section 8). This is the resolution to the "how do you know someone left" question — not a POCDEX delta feed, but CAM as the trigger source.

**Operational lookup API (post-MVP, targeted post-October):** a separate on-demand POCDEX lookup, queryable by NRIC or email, returning employment details including status — for troubleshooting, audit checks, and investigating user-reported access/profile issues. This lookup does **not** grant platform access to inactive officers; it's read-only for ops support. Payload structure to be agreed with the POCDEX team during implementation.

**Error handling:** Compass will handle POCDEX API errors per the agreed integration design — authorization failures, service unavailability, gateway errors, timeouts, and other non-success responses (e.g. 403, 502) mapped to logging, retry logic where appropriate, support escalation, and user-facing error messages.

**Future (SingPass login):** Compass will validate active employment status before granting access, same pattern as WOG AD login today.

### Data flows (per source doc diagrams)

1. **Master Data & Role Profile Import** — JF/JFn master list (Excel) flows from Policy & Central Team → HRPS/Cumulus (which maintain role profiles, job ID + competencies) → exported as Role Profile Excel → imported into Compass as reference/competency data.
2. **Officer Login & POCDEX Employment Lookup (MVP)** — officer opens Compass → authenticates via WOG AD → Compass resolves identity/email → two-step POCDEX lookup (email → POCDEX UID → active employment data) → active profile proceeds to competency mapping (Flow 3); no active profile blocks access.
3. **Mapping POCDEX Employment Data to Master Reference & Role Competencies** — POCDEX returns employment response → Compass extracts identifiers (job family/function, job ID) → maps JF/JFn to master data store, job ID to role competency store → produces officer profile + competency view for matching/recommendations.
4. **Account Lifecycle Management via CAM** — governs lifecycle. HR-system triggers flow through CAM, which evaluates the use case and calls Compass's lifecycle APIs to apply the resulting action.

**CAM-driven lifecycle actions:**

| HR Trigger Scenario | CAM Action | Effect on Compass Account |
|---|---|---|
| Staff/TIVO resignation or transfer out of agency | Remove account & access rights, automatically | Remove account and stored data per agreed retention/audit rules; block all future login |
| Internal staff transfer | Trigger review of accounts & access rights | Flag for access review; access retained pending outcome, then adjusted |
| >90 days No-Pay Leave (NPL) | Disable account, automatically | Disable login while data is retained; can be re-enabled on officer's return per policy |
| 90 days of account inactivity | Disable account after 90 days inactive | Disable login while data is retained; reactivated on valid re-login/reactivation per policy |

**Open point (flagged in source):** reconcile CAM-driven disablement with login-time POCDEX validation (Flow 2) — needs alignment on which check wins if they disagree.

Where both identifier fields (codes) and descriptive fields (labels) exist, Compass may need both — codes for logic, labels for display. Where multiple employment/position records exist, the primary/main indicator determines what's surfaced by default. Delivery mechanism, refresh frequency, and payload structure to be finalized with the POCDEX team during implementation.

## 8. Officer Lifecycle Scenarios

**A — Active Officer:** can log in, profile generated, recommendations available.

**B — Seconded Officer:** uses the seconded (new) position only. Rationale: most relevant current role.

**C — Double-Hat Officer:** uses the position with highest allocation (primary) for MVP display; all positions retained for competency mapping. Rationale: most representative role.

**D — NPL Officer:** no platform access (proposed). Disabled automatically via CAM after >90 days NPL. Pending final confirmation with data owners.

**E — Officer Leaves Public Service:** no automated lifecycle management at MVP — handled via CAM integration (Section 7/Flow 4) post-MVP. Until CAM automation lands, this is an operational gap requiring manual handling.

## 9. Day 2 Operations Model

| Scenario | Investigation Method | Escalation |
|---|---|---|
| Login failure | Verify employment status | Compass Support |
| Incorrect agency | Verify source data | POCDEX |
| Missing profile | Verify API response | Compass |
| Resigned officer access | Verify CAM status | Compass / CAM Team |

This is underpinned by the post-MVP operational lookup API described in Section 7 — without it, troubleshooting active vs. inactive status has no data source to check against.

## 10. Post-MVP Data Requirements (Learning & Posting History)

| Field | Purpose | Remarks |
|---|---|---|
| Course name | Course recommendations | |
| Course completion date | Course recommendations | |
| Past posting (e.g. rotation, TAP) | Recommendations for development opportunities | |
| Period of past posting | Recommendations for development opportunities | |
| Development opportunities attended | Recommendations for development opportunities | Not currently captured in any system; tracked manually by the Dev Ops team in WD |
| Period of development opportunity attended | Recommendations for development opportunities | Same caveat as above |

Actual data fields to be advised by the relevant owning teams.

## 11. Release Timeline & Data Requirements

| Release | Key Features | Data Requirements |
|---|---|---|
| **MVP (Q4 2026)** | Officers see agency-tagged and FL-tagged competencies in profile; find 3,000+ Careers@Gov jobs | Officer profile data; Employment data; Position and Job data |
| **Release 1 (Q1 2027)** | Pre-filled applications for opportunities; application status tracking (excl. Careers@Gov jobs) | Operational API for active + inactive employment profiles |
| **Release 2 (Q2 2027)** | Personalised course recommendations for competency gaps | Learning history; Posting history; Endorsed competencies (pending PS guidance, Q4 2026) |
| **Release 3 (Q3 2027)** | Development plans sync back to HR systems; AI career coaching bot; gamification / career fitness recognition framework | — |
| **Release 4 (Q4 2027)** | Enhanced workforce management tools for HR practitioners/agencies — candidate review/selection, workforce intelligence analytics | — |
| **Future** | Supervisor dashboard (TBC) | Position status — officers' past employment history in Compass |

## 12. Audit & Data Retention

- **Active officers:** data retained while account remains active.
- **Inactive officers:** accounts inactivated and retained for 4 years (secondment-period rationale, Section 4). Further retention subject to approval and IM policies.
- **Terminated officer records:** retention gated by policy/system clearance requirements, not by Compass's own product roadmap (Section 4). CAM integration is the mechanism for handling this correctly.
- **Audit records:** required for access investigations, account reviews, security audits.

Responds directly to the IM concerns Huiting raised.

## 13. Open Questions Requiring Alignment

| Topic | Owner | Detail |
|---|---|---|
| "Casual" worker category | PSD (Xian Zhang GUO) + Huiting | Whether casual workers need their own exclusion category or fall under TIVO — to check with HT |
| `is_primary` semantics | Huiting LIAN | Does "True" = highest time commitment? Can multiple records be "True"? Always "True" for seconded officers? |
| Job profile `status` granularity | Huiting LIAN | Can individual job roles be inactive within an active position, or are all job roles active if the position is active? |
| Active→terminated delta notification | POCDEX (Pow Hwee TAN, Daryll CHU) + GovTech (Johnny LIM) | How does POCDEX inform Compass an active officer has left — delta API, CFT file, or other mechanism? |
| Terminated officer record retention policy | Compass + Imelda MO + IM policy owners | What retention is Compass actually cleared for; CAM integration as the resolution path |
| Endorsed Competencies in Compass | Compass BO | Pending PS guidance, targeted Q4 2026 |
| NPL Treatment | Compass + POCDEX | No access proposed; pending confirmation with data owners |
| NRIC vs POCDEX UID | Compass + IDSC | MVP uses POCDEX UID; switch to NRIC post-MVP |
| CAM/POCDEX validation reconciliation | CAM Team + Compass | Open point flagged in Flow 4 — which check wins if CAM state and live POCDEX validation disagree |
| Operational API design (payload, refresh, delivery) | POCDEX | To be agreed during implementation |
| Agency master list cross-check | Compass (Christopher WOO) | Verify agency, job family, job function data against Compass's existing master list |

## Appendix A — Questions Raised by Huiting and Responses

| Question Raised | Response Section |
|---|---|
| What data domains are required? | Section 3 |
| Historical/current/future data? | Section 4 |
| How does POCDEX tell Compass when to call, and how are terminations surfaced? | Section 7 |
| Data flow diagrams? | Section 7 |
| Which system owns data? | Section 6 |
| How are terminated officers handled (incl. retention policy)? | Sections 4, 8, 12 |
| How will troubleshooting work? | Section 9 |
| Audit and retention? | Section 12 |

This appendix makes it explicit that every concern Huiting raised has been addressed systematically.
