# As-Is: POCDEX–OTG Data Integration Pipeline

**Purpose:** Technical and business reference for how OTG (One Talent Gateway) currently integrates with POCDEX today. Standalone document — no assumptions, no proposed changes.

**Audience:** Anyone needing a shared, accurate baseline of the current pipeline (engineering, new team members, cross-team dependency conversations).

---

## 1. Executive Context and Strategic Architecture

OTG is a SaaS platform (powered by Fuel50) that catalyzes career development across the Whole-of-Government (WOG) — centralizing skills identification and training recommendations as the hub for the Public Service's social learning and workforce development. Identity and authentication run through WOG AAD and SingPass/WOG Email, secured with Microsoft Authenticator.

OTG's architecture is built on a strict "Source of Truth" mandate: OTG sits **downstream** of POCDEX, the Whole-of-Government Data Exchange, which aggregates the primary HR systems — HRPS (e.g. MOE) and CUMULUS (Workday).

**The risk of upstream ignorance:** manually correcting user data inside OTG doesn't work. The system refreshes via automated fortnightly loads, so any local edit gets overwritten by the next POCDEX sync. Data integrity issues have to be fixed at the source (HRPS/CUMULUS) or at the POCDEX aggregator level — not in OTG itself.

---

## 2. The 5-Step End-to-End Data Flow

A structured fortnightly batch job keeps account provisioning and role data in sync with HR source systems, covering 50,000+ public officers.

1. **File Generation** — the POCDEX Raw file is extracted. The OTG Inclusion File must be finalized and sent to the vendor (CEG) by the Friday before the actual file drop, to make the next batch.
2. **SFTP Data Transfer** — data moves from the GPC SFTP server to CEG via the Workato integration engine. A migration to Cloud File Transfer (CFT) is targeted for June 2025, with a hard deadline of December 2025 for GPC decommissioning — a critical-path infrastructure item.
3. **Ingestion & Validation** — Workato processes the encrypted PGP files, splitting them into sub-batches to manage volume. Common failure mode: Workato memory resource limits, where one sub-batch failing stops the next from triggering, producing file errors.
4. **Logic Processing** — Workato applies the three-column inclusion rules (NRIC, Job Family, Agency) to determine which records are eligible for production.
5. **Account Provisioning** — validated data triggers account creation/update, including workforce attributes, designations, and Reporting Officer (RO) relationships.

This flow is the technical gatekeeper restricting platform access to eligible, active officers, with an audit trail throughout.

---

## 3. Inclusion Logic and the 'NO DATA' Wildcard Framework

Inclusion logic manages progressive onboarding across the Public Service's 96 agencies. The OTG team controls user volume and onboarding pace by manipulating specific identifiers.

| Column Name | Logic Applied | Sample Value |
|---|---|---|
| NRIC | Individual identifier / one-off testing | S1234567A |
| Job Family | Categorical filter | HUMAN RESOURCES |
| AgencyName | Organizational filter | Public Service Division |

**The 'NO DATA' wildcard:** placing the string "NO DATA" in the Agency or Job Family column tells Workato to pull all records for that category — e.g. NRIC = "NO DATA" plus a specified Agency onboards every officer in that organization.

**Critical warning — logic misapplication and subscription over-billing:** misunderstanding the wildcard is a high-impact failure mode, not just for user-volume prediction. A 5% security deposit adjustment triggers on changes in subscription count, so an accidental mass-import via wildcard error can create an unintended subscription spike and immediate financial liability.

---

## 4. Workforce Architecture and Custom Mapping Logics

Harmonizing HRPS and CUMULUS data requires mapping across naming inconsistencies. OTG uses a "Designation Triad" — Job Family, Job Function, Job Grade. The Job Family field specifically exists as a fallback: if the central role profile fails to display, the officer's Job Family still shows in the UI.

**Field mapping — POCDEX output → OTG production:**

| POCDEX Field | OTG Counterpart | Editable in UI? |
|---|---|---|
| Uid | UserID (NRIC) | No |
| Employment Status | Employment Status | No (triggers "Withdrawn" logic) |
| Agency | Location | No |
| Username | Email Address | No |
| RO UserIDs | Supervisor Relationship | No (critical for appraisals) |
| Position 1 | Designation | Yes (via Role Selection) |
| Position 1 – Job Family 1 | Job Family 1 | Yes (via Role Selection) |
| SourceSystem | SourceSystem | No |

**Secondment and agency nuance:** the pipeline maintains both "Owner Agency" (permanent org) and "Present Agency" (current posting). Originally built for manual ODIN accounts, these fields are preserved in the current mapping for historical continuity and to track seconded officers accurately.

---

## 5. Lifecycle Management: Manual Deactivations and Withdrawals

Automated pipelines are supplemented by manual governance for IM8 compliance and security.

**The "Withdrawn" logic:** OTG never deletes user data — it deactivates accounts to preserve the historical Results Chain. Deactivation triggers when an agency transmits an employment status of "Withdrawn."

**Manual governance and audit checkpoints:**
- **Monthly vendor logs** — per IM8, the OTG team must obtain vendor logs monthly to review failed login attempts, privileged user actions, and system configuration changes.
- **Non-POCDEX risk (Synapxe/A*STAR)** — agencies on SuccessFactors (e.g. Synapxe) or separate SFTP integrations (e.g. A*STAR) sit outside the standard POCDEX path. When officers transfer between these systems and WOG-standard HRPS/CUMULUS, duplicate accounts or orphaned records commonly result.

---

## 6. Failure Modes, Triage, and Incident Resolution

**Categorized failure modes:**
- **Duplicate accounts** — from multiple employment records, or manual account creation predating automated POCDEX integration.
- **Login loops (NPL root cause)** — officers on No Pay Leave (NPL) for more than 3 months often can't log in. By design, inactive records aren't sent to POCDEX, so officers who are technically still "in service" but inactive in source systems hit authentication errors.
- **The MOE/HRPS interface flaw** — roughly 3,000 officers lack RO IDs because HRPS doesn't copy the previous year's ADP form RO forward to the current year. This needs manual assignment, which often fails to trigger in the integration.
- **Naming inconsistencies** — disparate naming conventions for competencies and job families in upstream systems disrupt automated skill tagging.

**Standard triage workflow:**
1. Check the POCDEX output file — confirm the record exists in the latest fortnightly transfer.
2. Verify inclusion logic — check whether the user was filtered out by the "NO DATA" wildcard or an NRIC exclusion.
3. Check Workato memory resourcing — determine whether the batch failed on engine memory limits.
4. Escalate upstream — if the data is absent or wrong in the output file, raise a ticket with POCDEX, HRPS, or CUMULUS.

**System integrity note:** the long-term fix for inactive-record errors requires POCDEX and CUMULUS to agree on an interface change that stops inactive records from being transmitted at all. All final investigation reports and technical memos should be migrated to the ARK repository to preserve project technical memory.

---

*Generated: 2026-07-10*
