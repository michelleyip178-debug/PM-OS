---
date: 2026-09-03
week: 2026-W36
type: risk-register
standard: GovTech ICT RMM / DGP IRM
scope: Career Compass MVP — Data Security risks only (Risk Type = Data Security)
system_owner: TBC (PSD — Ministry-owned system)
classification: Restricted / Sensitive Normal. Must exclude MHA (Confidential) and MFA (Confidential Cloud Eligible) agency-specific competencies and ratings.
status: DRAFT — current I/L scored from the W36 RAID, the POCDEX data-classification thread, and the SSP data-protection controls; treatment columns (O–T) and residual targets to be set at Jace's pre-go-live risk-assessment session
references:
  - context-library/reference/govtech-ict-rmm-methodology.md
  - context-library/reference/govtech-ict-rmm-risk-library.md
  - context-library/reference/govtech-irm-risk-register-template.md
  - context-library/reference/govtech-low-risk-cloud-ssp-checklist.md
  - outputs/analyses/2026-09-03-W36-mvp-raid-consolidated.md
  - outputs/analyses/2026-09-03-W36-careercompass-project-risk-register.md
  - outputs/meeting-notes/2026-08-11-W33-pocdex-data-classification-uat-thread.md (referenced)
---

# Career Compass — Data Security Risk Register (DGP IRM format)

**Standard:** GovTech ICT RMM (6-stage) + DGP IRM Risk Register Template (columns A–T).

**Coverage:** Data Security risks only. Project risks are in the [companion register](2026-09-03-W36-careercompass-project-risk-register.md). Cybersecurity and Cloud Security are separate sheets.

**Risk statement format:** ICT RMM Annex B — "In the event that [event] due to [cause], the [threat scenario] may result in [impact]." Kept sharp and concise.

## System data profile (Stage 1 scope)

| Attribute | Value |
|---|---|
| Classification | **Restricted / Sensitive Normal** |
| Entity data held | Officer personal identifiers (NRIC, FIN, HRID, email, name), employment records (agency, grade, position, job family/function), competency data and ratings, CV content, learning history |
| Exclusions | MHA (Confidential) and MFA (Confidential Cloud Eligible) agency-specific competencies and their ratings must not enter Career Compass; MFA expected competencies default to their job function's classification absent instruction |
| Source-of-truth contract | Data Sharing Form — locked and approved 2026-08-14 (Rama) |
| Data flow | POCDEX API → Career Compass (read); CSC and Jumpstart called at runtime; no write-back to POCDEX |
| Data residency | Singapore (SSP control `dp-1`, mandatory for Restricted+) |

## How this file is scored

- **Column M / N** use the DGP IRM 5×5 matrix (Low / Medium / Medium-High / High / Very High). See `govtech-irm-risk-register-template.md` §4.
- **Column A (Risk ID)** left blank for a new DGP IRM import; the `DATA-xx` labels are working references only.
- **Column C (Risk Type)** = `Data Security` for every row.
- **Column D (Risk Category)** uses the DGP IRM Data Security allowed values: `Planning and Design`, `Acquire and Store`, `Access and Distribute`, `Usage`, `Incident Response`, `Acquire and Store Usage`.
- **Data Security likelihood** per ICT RMM Table 5 is driven by data-access frequency, number of identifiers, and access breadth — noted in Comments where it drove the rating.
- **Column Q (Action Party)** must be an email address — placeholders below.
- Accept rows take **Column R = Not Applicable**, O/P/Q/S blank.

---

## Register — Columns A–N

### DATA-1 — Classification inventory not done

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Planning and Design |
| E Risk Statement | In the event that the system handles classified or sensitive data without a completed field-level data classification inventory, the missing classification may result in classified data being under-protected or wrongly exposed at launch. |
| F Existing Controls in Place | Data Sharing Form locked 14 Aug sets the field/API contract and classification at the interface level; field-level inventory across POCDEX / HRPS / Compass-generated / user-generated data not started (on Michelle, launch-gating). |
| G Current Impact | Severe (4) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Severe (4) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **High** |
| N Residual Risk Level | Medium |
| L Comments | ICT RMM Table 5: multiple direct + indirect identifiers, WOG-wide access → high likelihood absent controls. Maps to SSP `pm-2` and ICT RMM Stage 1. This is the launch-gating deliverable in the consolidated RAID (I-data-class). |

### DATA-2 — MHA / MFA restricted competencies leak into scope

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Acquire and Store |
| E Risk Statement | In the event that data of a higher classification than the system is rated for enters the system due to an incomplete exclusion filter on an inbound feed, the ingestion may result in over-classified data being stored and displayed on a system not accredited for it. |
| F Existing Controls in Place | Exclusion rule agreed in the 11 Aug classification thread and captured in the Data Sharing Form; filter implementation and test coverage not confirmed. |
| G Current Impact | Severe (4) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Severe (4) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Low |
| L Comments | A UAT case must prove no MHA/MFA competency or rating is retrievable. MFA-expected-competency default-classification rule also needs a test. |

### DATA-3 — Wrong officer's data shown (identity resolution)

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Access and Distribute |
| E Risk Statement | In the event that a user is shown another user's record due to unresolved identity-collision and cross-system identity handling, the mis-resolution may result in unauthorised disclosure of another user's classified or sensitive data. |
| F Existing Controls in Place | NRIC-first identity resolution agreed (2 Sep); 3 exclusion-path UAT cases pass; BD-08 (shared mailbox) decision unowned, needs POCDEX; 82 production email-collision errors, 7 genuine cross-person. |
| G Current Impact | Very Severe (5) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Very Severe (5) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **High** |
| N Residual Risk Level | Medium-High |
| L Comments | Data-security twin of project risk PROJ-3. Very Severe on Confidentiality/Integrity: multi-individual personal-data disclosure. Needs BD-08 + email-reuse check at record creation before go-live. Hard to defend as Accepted. |

### DATA-4 — Stale record surfaces the wrong officer's attributes

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Usage |
| E Risk Statement | In the event that the system keeps displaying a superseded source record because it never rechecks the source, the stale data may result in a user's classified or sensitive attributes being disclosed to the wrong audience. |
| F Existing Controls in Place | WOGAD blocks departed-officer login (partial control); full re-derivation deferred to R1 (3 Sep, pending Adrian); MVP fallback = BO data-error visibility (not yet scoped). |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Possible (3) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | Sensitive Normal, multi-individual → Moderate impact. Deferring the fix raises residual likelihood at go-live; the visibility deliverable is the compensating control. |

### DATA-5 — Sensitive attributes over-exposed in the UI / API

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Usage |
| E Risk Statement | In the event that the system returns more entity attributes than a screen or endpoint requires due to no restriction on the data presented, the over-exposure may result in unnecessary disclosure of classified or sensitive data. |
| F Existing Controls in Place | Data Sharing Form defines the API field contract; per-endpoint field minimisation and UI field-level review not confirmed. Maps to SSP `as-7` (access-control checks on all requests). |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Review each API response and profile view against a least-data principle before go-live. |

### DATA-6 — Production data used in UAT not purged

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Acquire and Store Usage |
| E Risk Statement | In the event that production data loaded into a test environment is not purged after testing due to no defined purge step, the retained data may result in classified or sensitive data persisting in a lower-controlled environment. |
| F Existing Controls in Place | Rama owns production-data-in-UAT purge (open item #55); no purge date or procedure confirmed. Maps to SSP `sd-8` (environment segregation). |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Define a purge step and owner; confirm UAT environment controls match the data's Restricted classification while it holds real data. |

### DATA-7 — Sensitive data written to logs unmasked

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Usage |
| E Risk Statement | In the event that classified or sensitive data is written to application or API logs unmasked due to no log-sanitisation step, the plaintext logging may result in that data being exposed to anyone with log access. |
| F Existing Controls in Place | None confirmed. Maps to SSP `lm-19` (log sanitisation) and `lm-2` (tamper-resistant log storage). |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Identify and mask/tokenise identifiers in log outputs before go-live; confirm log storage is least-privilege and separate. |

### DATA-8 — CV upload content mishandled

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Acquire and Store |
| E Risk Statement | In the event that user-uploaded files are stored without confirmed encryption-at-rest, access control or malware scanning, the weak handling may result in unauthorised access to, or malware infection from, file content containing classified or sensitive data. |
| F Existing Controls in Place | CSP default encryption-at-rest assumed (`dp-2`); malware scan on upload (`as-12`) and access-control on the CV store not confirmed. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Confirm encryption-at-rest, IAM restriction on the CV bucket, and pre-processing malware scan. |

### DATA-9 — Incident source-tracing gap (no data marking)

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Incident Response |
| E Risk Statement | In the event that a data-exposure incident cannot be traced to its source due to insufficient data marking and audit logging on data flows, the tracing gap may result in a slow incident response and an inability to scope the affected records. |
| F Existing Controls in Place | Day-2 support traceability scoping (source-system visibility, API logs, escalation routing) open and undated (open item #55). Maps to SSP `lm-4`/`lm-13` and ICT RMM Data Security Incident Response category. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Same deliverable as the Day-2 support traceability scoping — one workstream covers this and the operational need. |

### DATA-10 — No data-security risk assessment for the interface

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Planning and Design |
| E Risk Statement | In the event that the data interface goes live without a documented data-security risk assessment, the gap may result in inadequate data-protection controls and an IM8 non-compliance finding. |
| F Existing Controls in Place | Data Sharing Form locked; this register plus the pre-go-live risk-assessment session is the assessment (SSP `pm-2`); not yet completed or IDSC-approved. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Closed by completing this register and getting IDSC residual-risk sign-off (SSP `pm-4`, ICT RMM Stage 5). |

### DATA-11 — Bulk read / export not rate-limited

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Access and Distribute |
| E Risk Statement | In the event that a compromised account or insider performs a large-volume read of records due to no limit on data-access rate or volume, the unconstrained access may result in bulk exfiltration of classified or sensitive data. |
| F Existing Controls in Place | WOG AD auth + whitelist gating limits who can log in; no per-account read-volume limit or anomaly alert on mass reads confirmed. Maps to SSP `lm-13` (anomalous DB activity) and Data Security "large volume of data exfiltrated". |
| G Current Impact | Severe (4) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Severe (4) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Add mass-read alerting and, where feasible, a per-session record cap. |

### DATA-12 — Privileged access to the officer data store not monitored

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Usage |
| E Risk Statement | In the event that a privileged user reads or modifies data outside their duties due to weak privileged-access controls and no activity monitoring, the unmonitored access may result in undetected compromise of the confidentiality or integrity of classified or sensitive data. |
| F Existing Controls in Place | Least-privilege IAM assumed (`ac-1`); privileged-access monitoring, PAM, and DB activity streams not confirmed for the officer data store. |
| G Current Impact | Severe (4) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Confirm DB audit logging (`lm-5`), privileged-action alerting (`lm-13`), and access review (`ac-4`) for the officer data store. |

### DATA-13 — Data-in-transit to CSC / Jumpstart not verified encrypted

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Access and Distribute |
| E Risk Statement | In the event that data passed to an external service at runtime is not confirmed to use strong encryption due to no verification of the outbound channel, the unverified transport may result in interception of classified or sensitive data in transit. |
| F Existing Controls in Place | TLS assumed on all outbound calls (`dp-3`); cipher/protocol verification and weak-protocol disablement on the CSC/Jumpstart connections not confirmed. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Verify TLS 1.2+ and valid certificates on the CSC and Jumpstart integrations; disable TLS 1.0/1.1. |

### DATA-14 — Retention / disposal policy not defined for officer data

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Acquire and Store |
| E Risk Statement | In the event that entity data is retained indefinitely due to no defined retention or disposal policy, the over-retention may result in a larger exposure surface and a PDPA / IM8 retention finding. |
| F Existing Controls in Place | None confirmed. "Clean up personal data on Staff Exit" was flagged in the CAM epic with no owner and no compliance review; CAM is deferred to R1. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Define a retention period and a disposal process for officer data at MVP, even if the automated exit-cleanup is R1. Needs a compliance review. |

### DATA-15 — Data residency not verified for all stores

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Planning and Design |
| E Risk Statement | In the event that any data store, backup or log sink is provisioned outside the required jurisdiction due to no data-residency verification, the misplacement may result in classified data held outside national jurisdiction and an IM8 non-compliance finding. |
| F Existing Controls in Place | GCC deployment expected to enforce SG region; residency of backups, logs, and any third-party service data not individually verified. Maps to SSP `dp-1` (Level 0, mandatory). |
| G Current Impact | Severe (4) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Severe (4) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Level 0 control — verify region for every data store, backup vault, and log sink before go-live. |

### DATA-16 — Endorsed / expected competency data built against unsettled classification

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Planning and Design |
| E Risk Statement | In the event that the system is built against a data category whose classification rules are still under review, the premature build may result in rework or exposure of data that later proves outside the accredited classification boundary. |
| F Existing Controls in Place | Endorsed competencies flagged as undecided (Q4 2026 recommendation pending); MFA-expected-competency default rule agreed but not tested. "Don't build against it" guidance recorded (open item #55). |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Hold the line on not building against endorsed competencies until the Q4 recommendation lands. |

### DATA-17 — Cross-system dataset segments accessible without segment-level control

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Data Security |
| D Risk Category | Acquire and Store Usage |
| E Risk Statement | In the event that data segments from multiple source systems are merged into one view without segment-level access control, the merge may result in indirect access to data the user's role does not warrant. |
| F Existing Controls in Place | NRIC-fanout builds one consolidated view; 251 officers hold dual HRP/Cumulus records; per-segment access rules not defined. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Confirm the consolidated view applies the same access rules to both source segments; ties to project risk PROJ-8 (multi-hat model). |

---

## Columns O–T — Treatment details (to complete at Jace's session)

Every Mitigate row needs O, P, Q, R, S filled (DGP IRM template §5, guideline 4). Column Q must be an **email address**.

| Risk ID | P Treatment Action (draft) | Q Action Party | R Status | S Due Date |
|---|---|---|---|---|
| DATA-1 | Complete the field-level classification inventory (POCDEX / HRPS / Compass-generated / user-generated); get it into the SSP | michelle.yip178@... | Draft | before go-live |
| DATA-2 | Implement and test the MHA/MFA competency exclusion filter; add a UAT case proving no Confidential competency or rating is retrievable | *rama's email* | Draft | before UAT sign-off |
| DATA-3 | Make the BD-08 (shared mailbox) decision with POCDEX; implement an email-reuse check at record creation | *POCDEX owner's email* | Draft | before go-live |
| DATA-4 | Scope and build the BO data-error visibility deliverable as the MVP compensating control | michelle.yip178@... | Draft | TBC |
| DATA-5 | Review every API response and profile view against a least-data principle; trim over-returned fields | *rama's email* | Draft | before UAT sign-off |
| DATA-6 | Define a production-data-in-UAT purge step and owner; confirm UAT controls match Restricted classification while real data is present | *rama's email* | Draft | before VAPT start |
| DATA-7 | Identify and mask/tokenise identifiers in log outputs; confirm least-privilege, separate log storage | *rama's email* | Draft | before go-live |
| DATA-8 | Confirm encryption-at-rest and IAM restriction on the CV store; add pre-processing malware scan | *rama's email* | Draft | before go-live |
| DATA-9 | Deliver the Day-2 support traceability scoping (source-system visibility, API logs, escalation routing) | *rama's email* / *imelda's email* | Draft | TBC |
| DATA-10 | Complete this register and obtain IDSC residual-risk sign-off | michelle.yip178@... | Implementation in Progress | at Jace's session |
| DATA-11 | Add mass-read alerting; assess a per-session record cap | *rama's email* | Draft | before go-live |
| DATA-12 | Confirm DB audit logging, privileged-action alerting, and access review on the officer data store | *rama's email* | Draft | before go-live |
| DATA-13 | Verify TLS 1.2+ and valid certificates on the CSC and Jumpstart connections; disable weak protocols | *rama's email* | Draft | before go-live |
| DATA-14 | Define a retention period and disposal process for officer data at MVP; run a compliance review | michelle.yip178@... | Draft | before go-live |
| DATA-15 | Verify SG region for every data store, backup vault, and log sink | *rama's email* | Draft | before go-live |
| DATA-16 | Hold the no-build line on endorsed competencies until the Q4 2026 recommendation lands | *imelda's email* | Draft | Q4 2026 |
| DATA-17 | Confirm the consolidated view applies the same access rules to both source-system segments | *rama's email* | Draft | before UAT sign-off |

---

## Risk profile summary (Stage 6 categorisation)

| Current Risk Level (Column M) | Count | Risk IDs |
|---|:-:|---|
| **Very High** | 0 | — |
| **High** | 2 | DATA-1, DATA-3 |
| **Medium-High** | 2 | DATA-2, DATA-4 |
| **Medium** | 13 | DATA-5 to DATA-17 (excl. those above) |
| **Low** | 0 | — |

**Residual targets** bring every row to Medium or below. With no row staying at High or Medium-High as a residual, the residual-risk acceptance authority (ICT RMM approval matrix, Ministry-owned system, Data Security risks) is:

- **Medium residual → Chairperson of GovTech IDSC or equivalent / Director (GDO)**
- **Low residual → Head of Relevant Trusted Centres / CDO**

## The three to treat first

1. **DATA-1 (classification inventory, High)** — launch-gating, not started, and every other data-security control depends on knowing what's classified where. This is the one to move this week.
2. **DATA-3 (wrong officer's data, High)** — the privacy-incident risk. BD-08 unowned. Same call as project risk PROJ-3: mitigate before go-live, hard to defend as Accepted.
3. **DATA-2 (MHA/MFA leak, Medium-High)** — a Confidential-data-on-a-Restricted-system exposure. Needs a filter implementation and a proving UAT case.

---

*Generated 2026-09-03 from the [consolidated RAID](2026-09-03-W36-mvp-raid-consolidated.md), the 11 Aug POCDEX data-classification thread (open item #55), and the SSP data-protection controls. DRAFT — current I/L is a first pass; treatment options, residual targets, action parties (as email addresses), and due dates to be set with Rama and engineering at the pre-go-live risk-assessment session. Companion: [project risk register](2026-09-03-W36-careercompass-project-risk-register.md). Format per `context-library/reference/govtech-irm-risk-register-template.md`.*
