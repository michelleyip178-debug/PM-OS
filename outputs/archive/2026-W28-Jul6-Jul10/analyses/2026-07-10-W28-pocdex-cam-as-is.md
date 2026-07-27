# As-Is: POCDEX–CAM (Central Accounts Management) Integration

**Purpose:** Technical and business reference for how Central Accounts Management (CAM) works today — its mandate, architecture, API contract, and trigger scenarios. Standalone document — no assumptions, no proposed changes.

**Audience:** Anyone needing a shared, accurate baseline of CAM as it exists today (engineering, new team members, cross-team dependency conversations).

---

## 1. Overview and Mandate

CAM is the technical solution to two persistent, recurring audit findings (AGO and IM8):

| # | Lapse | Details |
|---|---|---|
| 1 | User Account Management (Authentication) | User account not removed timely after a user leaves the organization |
| 2 | User Access Rights Management (Authorization) | Account access review not performed; wrong or inappropriate rights granted (e.g. after a role change within an agency) |

CAM is also part of the Public Service Data Security Review (PSDSRC) recommendation to strengthen the security posture of government systems.

**Core coverage:**
- Automatically remove accounts and access rights based on staff resignation, from HR triggers.
- Automatically trigger a review of accounts and access rights based on staff transfer, from HR triggers.
- Trigger scheduled periodic accounts and access rights review.

---

## 2. Architecture and Data Source

CAM sits downstream of POCDEX, which consolidates HR profile information and movement data from upstream HR systems (Cumulus, HRP, ACE, TIVO, and other standalone HR systems such as HDB, Sentosa).

**Flow:** Upstream HR systems → POCDEX (consolidates profile + movement) → CAM + ITSM (in parallel) → downstream targets.

- **CAM** pushes deprovisioning actions to agency applications.
- **ITSM** pushes deprovisioning to WOG AD (WOG Active Directory) — the common ID used to log into government devices, email, and other WOG ICT services.

**CAM leakage (known limitations):**

CAM's coverage gaps sit at two ends of the pipeline:

- **Upstream (HR system side):** CAM cannot remove accounts/access if the HR record isn't found in CAM/TIVO, or if a movement isn't captured/triggered from the HR system. Examples: internal movement within a project team not captured/triggered from HR; accounts belonging to Members of Public or agency partners; agencies whose HR system isn't integrated with POCDEX at all (named: A*STAR, CPF, DSTA, HDB, JTC, MINDEF, Sentosa).
- **Downstream (agency application side):** CAM cannot integrate with certain application types — selected SaaS, COTS products, standalone systems, or systems with local accounts not joined to the domain.

**Support required for CAM to work effectively:** GovTech provides the platform/automated tooling; agencies are responsible for timely updates in their HR system, CAM, and their own application.

---

## 3. Three Authentication Modes and Scope

| Scenario | Mode 1: WOG AD Authentication | Mode 2: Agency AD Authentication | Mode 3: Authentication within own apps |
|---|---|---|---|
| **Staff Exit** (resignation, retirement, termination, transfer to another agency) | Remove account from WOG AD and access rights automatically from individual agency apps | Remove account from Agency AD and access rights automatically from individual agency apps | Remove account and access rights automatically from individual agency apps |
| **Staff Change Department (within agency)** | Retain account in WOG AD. Trigger workflow to review staff access to agency apps; retain or revoke after review. Remove access rights automatically if review not completed within 7 calendar days | Trigger workflow to review staff account in Agency AD; retain or revoke after review. Remove Agency AD account automatically if review not done within 7 calendar days. Same workflow/removal pattern applies to agency apps | Trigger workflow to review staff access; retain or revoke account and/or access rights after review. Remove automatically if review not done within 7 calendar days |
| **Account & Access Rights Review** | Trigger workflow to review accounts and access rights for privileged and non-privileged accounts, per policy | Same | Same |

**CAM mandate and compliance timeframe** (dates as issued in the governing Circular Minute):

| Phase | Activity | Compliance Timeframe |
|---|---|---|
| Pre-CAM onboarding | Use WOG AD or Agency AD as default authentication; implement CAM API for new systems | Immediate |
| Pre-CAM onboarding | Migrate at least 50% of existing Mode 3 systems to Mode 1 or Mode 2 | Jun 2022 |
| CAM Onboarding | Onboard all Mode 1 systems | Dec 2022 |
| CAM Onboarding | Onboard all Mode 2 systems | Jun 2023 |
| CAM Onboarding | Onboard all remaining Mode 3 systems that cannot migrate to Mode 1 or 2 | Dec 2023 |

**Exemption process:** agencies unable to onboard to CAM submit a waiver form (with IDSC supporting evidence) to the GovTech CAM team, who review and assess before submitting to MDDI, then inform the agency of the outcome and maintain the waiver record.

**Reimbursement:** MOF funded one-time implementation costs (Mode 3→1/2 migration up to $87,000/system; CAM agent + IT component up to $150,000/agency; CAM API for remaining Mode 3 up to $10,000/system). As of 1 Nov 2024, reimbursement is completed and closed.

---

## 4. Interface Modes and Payload Standard

CAM interface is available in two modes:

| CAM Interface | Agency Application Interface Method | Agency Account Attribute (Email-based correlation) | Agency Account Attribute (WOG AD ID-based correlation) |
|---|---|---|---|
| Webservices | CAM API | emails | externalId |
| Cloud File Transfer (CFT) | SFTP Flat File | emails | externalId |

- **API is the default/preferred mode** — proven, robust, real-time updates and status.
- **SFTP is only allowed under certain conditions** (see 200 WOG CAM CFT Specification) — it suffers from scheduling issues, requiring failure handling, reconciliation, and batch reruns.
- Regardless of mode, the payload format/schema is identical: both use the **SCIM** (System for Cross-Domain Identity Management) schema (IETF RFC 7642, 7643, 7644).

**Integration pattern:** the CAM Agent is deployed in the agency's hosting environment and calls the agency's own REST API (Web Service REST API in front of the agency's local store). The agency develops this REST API endpoint conforming to the SCIM payload structure, secured via shared secret key authentication.

---

## 5. API Contract — Events, Calls, and Triggers

CAM does **not** perform provisioning today — only retrieval, user account removal/disablement, and group membership removal functions are in active use.

| Event | Scenario | API Call | Trigger Cadence | Remarks |
|---|---|---|---|---|
| User Account Retrieval | CAM retrieves detailed user account info | Get User API | Ad-hoc | |
| User List Retrieval | CAM retrieves list of users (filtered) for review | Get User List API | Daily | |
| User Account Disablement/Enablement | CAM receives notification to disable a user inactive >90 days or on NPL >90 days | Disable or Enable User API | Ad-hoc | Enable User function is for future use |
| User Account Removal | CAM removes a user (and group membership) on termination notification, or if access review isn't completed timely | Remove User API | Ad-hoc | |
| Group Info Retrieval | CAM retrieves group info + attached user list for review | Get Group API | Ad-hoc | |
| Group List Retrieval | CAM retrieves list of groups (filtered) | Get Group List API | Daily | |
| Group Membership Provisioning/Removal | CAM adds/removes user(s) from a group on an access-right provisioning notification | Add or Remove User from Group API | Ad-hoc | Add User function is for future use |
| Group Removal | CAM detaches all users and removes a group on a group removal notification | Remove Group API | Ad-hoc | For future use |

Functions marked "for future use" still need to be developed by agency applications, but can return HTTP 500 in the interim.

---

## 6. Detailed Scenario Flows

### Staff Exit (resignation, retirement, transfer to another agency)

1. Daily: CAM Agent in Agency calls Get User, Get User List, Get Group, Get Group List against the agency's Mode 1/2/3 systems and Agency AD.
2. CAM Agent maps accounts to POCDEX identity if not already mapped (e.g. POCDEXID 1111 → kevin@tech.gov.sg).
3. Some months later: POCDEX sends the officer's exit date to Central CAM.
4. Central CAM triggers Remove User to ITSM (→ WOG AD) and to the CAM Agent in Agency (→ Mode 1/2/3 systems, Agency AD).

### Staff Change Department (within agency)

1. Same daily Get User/List/Group/List baseline.
2. Accounts mapped to POCDEX identity as above.
3. POCDEX sends the department-change event to Central CAM.
4. Central CAM triggers ARC (Application/Access Review Coordinator) and System Owner to perform an access review — group naming matters here so ARC/System Owner can interpret it correctly.
5. At System Owner's request, remove the account or access rights.
6. CAM Agent removes the user / removes the user from the group across Mode 1/2/3 systems.

### Account Disablement — Staff NPL > 90 continuous days

1–2. Same daily baseline + POCDEX mapping.
3. Some months later: POCDEX sends Kevin's NPL (>90 days) status to Central CAM.
4. CAM Agent disables the user across Mode 1/2/3 systems and Agency AD.

### Account Disablement — after 90 days inactivity

1. Daily: ITSM/WOG AD side retrieves accounts including last login date; CAM Agent's daily pull also includes last login date.
2. Central CAM checks: if last login date > 90 days ago, trigger disablement.
3. Disable User pushed to WOG AD (via ITSM) and to Mode 1/2/3 systems via CAM Agent.

### Accounts and Access Rights Review (Periodic)

1. Daily: CAM Agent pulls Get User/List/Group/List, including the `isPrivileged` attribute.
2. Central CAM schedules access reviews on a policy-driven cadence: privileged accounts reviewed monthly (or every 3 months for R and below); non-privileged accounts reviewed annually (or more frequently for R and below).
3. Central CAM triggers ARC and System Owner to perform the review (group naming matters for interpretability, as above).
4. At System Owner's request, remove accounts or access rights.
5–6. CAM Agent removes the user / removes user from group across Mode 1/2/3 systems.

---

## 7. Known Gaps and Governance Notes

- CAM does not perform provisioning today — only retrieval and removal/disablement functions are live. Add/Enable functions exist in the spec but are marked for future use (agency apps should still build the interface, returning HTTP 500 until implemented).
- Group naming conventions matter operationally — the ARC and System Owner rely on legible group names to correctly interpret and act on review triggers.
- Agencies own timely updates into their own HR/TIVO systems and into CAM/agency systems — CAM's automation only works as well as the upstream data feeding it (this mirrors the general POCDEX "garbage in, garbage out" dependency pattern).
- Reference downloads for implementers: Sample Requirements Clauses for Agency Apps to Integrate with CAM (v0.3 draft), CAM API Interface Specs (v1.12), CAM API Common Issues (v1.0), SCIM JSON Schemas (v1.3, with a changelog of schema corrections from 2021–2024).

---

*Generated: 2026-07-10*
