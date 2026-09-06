# GovTech Singapore ICT Risk Management Methodology (ICT RMM) Reference Manual
*Version 1.01 (Reference Standard for Public Sector Systems Risk Assessments)*

> **Saved to PM-OS 2026-09-03.** Reference for Career Compass pre-go-live risk assessment (Jace's checklist meeting, W36). Companion file: `govtech-ict-rmm-risk-library.md`. See also the applied register at `outputs/analyses/` once drafted.

This reference manual provides a structured, highly granular breakdown of Singapore's **Government Technology Agency (GovTech) ICT Risk Management Methodology (ICT RMM)**. It is designed to guide public officers, auditors, cybersecurity consultants, and large language models (such as Claude) in performing risk assessments, evaluating risk registries, auditing compliance, and ensuring WOG (Whole-of-Government) security standard adherence.

---

## 1. Introduction & Methodology Overview
The **ICT Risk Management Methodology (ICT RMM)** is a continuous, iterative framework established to identify, analyze, evaluate, treat, and monitor project, cybersecurity, and data security risks inherent in public sector systems.

### 1.1 Core Principles
*   **System Lifecycle Integration:** Risk management must begin at the conceptualization stage and run continuously across the system lifecycle.
*   **Inherent vs. Acquired Risks:**
    *   **Inherent Risks:** Arise from the core objectives and scope of the project.
    *   **Acquired Risks:** Arise from specific skills, techniques, and technical approaches applied during system implementation.
*   **Goal of Risk Management:** It is impossible to eliminate all risks. The objective is to identify risks early and reduce residual risk to the **lowest acceptable level** to safeguard Agency operations, Whole-of-Government (WOG) assets, and public trust.
*   **Entity Information Protection:** Agencies must manage and protect "entity information" (citizens' and businesses' personal and commercial data) in a manner complementary to protecting agency assets.

### 1.2 Target Audience Roles
1.  **Oversight Authorities:** Permanent Secretaries, Deputy Secretaries, Chief Executive Officers, Deputy Chief Executives, or equivalents.
2.  **Oversight, Management, & Operational Officers:** Chief Information Officers (CIOs), Chief Data Officers (CDOs), Ministry Chief Information Security Officers (MCISOs), Agency Chief Information Security Officers (ACISOs).
3.  **Mission/Business Owners:** Business Owners, System Owners, Heads of Departments.
4.  **Implementation Teams:** Project Managers (PMs), Business Analysts (BAs), Infrastructure Engineers, Infrastructure Architects.
5.  **Assessors & Auditors:** Cybersecurity Consultants, Penetration Testers, Internal and External Auditors.

---

## 2. The Six-Stage Risk Management Lifecycle
The methodology consists of a structured **6-stage process** to transition risks from identification to continuous monitoring.

```
[Stage 1: Establish Scope] → [Stage 2: Identify Risks] → [Stage 3: Analyse & Evaluate]
                                                                     ↓
[Stage 6: Monitor & Report] ← [Stage 5: Risk Acceptance] ← [Stage 4: Treat Risks]
```

### Stage RACI Matrix (Core Activities)
The following roles are designated responsible (R), accountable (A), consulted (C), or informed (I) for key stage milestones:

| Stage | Activity | Key Objective | Responsible (R) | Accountable (A) | Consulted (C) / Informed (I) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Stage 1** | Establish & agree on scope of risk assessment | Define system boundaries, sensitivity, and criticality | **Project Manager** (proposes scope) | **System Owner** (approves scope) | CIO (Cybersecurity), CDO (Data), System Owner (Project), CISO, Business Owner, Chairperson of IDSC, Legal, Project SC |
| **Stage 2** | Identify risks | Uncover relevant risk scenarios | **Risk Assessors / Project Team** | **System Owner / Project Manager** | Business Owners, SMEs, Cybersecurity Consultants |
| **Stage 3** | Analyse & evaluate risks | Determine impact and likelihood ratings to calculate current risk level | **Risk Assessors / Project Team** | **System Owner** | CIO, CDO, CISO, Technical SMEs |
| **Stage 4** | Treat risks | Propose risk response options and calibrate residual risk | **Project Team / Assessors** | **System Owner** | CISO, System Owner, Technical Teams |
| **Stage 5** | Risk acceptance | Obtain formal sign-off for residual risks from designated approving authorities | **System Owner** | **Approving Authority** (depends on Residual Risk level) | CIO, CDO, CISO, Ministry/Agency leadership |
| **Stage 6** | Monitor, report, & communicate | Periodically track risk statuses and report risk metrics to prevent expiration | **CIO / CDO / System Owner** | **Chairperson of IDSC** | Project Steering Committee, IDSC Members |

*Note: IDSC = Information Database Security Committee (or agency equivalent).*

---

## 3. Detailed Lifecycle Stages

### STAGE 1: Establish and Agree on Scope of Risk Assessment
*   **Objective:** Formally define the system boundaries and context to ensure the risk assessment is targeted and accurate.
*   **Inputs Required:**
    *   System Details (Name, purpose, user base, commissioning & decommissioning target dates).
    *   System Criticality & Security Classification.
    *   Information Sensitivity (type of entity data or agency data processed).
    *   System Boundaries & Interfaces (ingress/egress points, network segments).
    *   Inter-connectivity & Dependencies (internal and external integrations).
*   **Steps:**
    1.  Determine the risk assessment boundaries based on system details and interfaces.
    2.  Propose the scope using cybersecurity, data security, and project risk baselines.
    3.  Obtain formal approval on the defined scope from the **System Owner**.
*   **Outputs:** Documented and approved Risk Assessment Scope Document.

---

### STAGE 2: Identify Risks
*   **Objective:** Identify specific, contextual risk scenarios that could impact the confidentiality, integrity, and availability (CIA) of the system, or affect project delivery timelines, budget, and scope.
*   **Triggers to Initiate Stage 2:**
    *   Development and deployment of a new system.
    *   Major changes or enhancements to an existing system.
    *   Changes to the cybersecurity threat landscape.
    *   Findings from internal or external audits.
    *   Identified deviations from security policies or standards.
    *   Mandatory periodic risk assessments.
    *   Ad-hoc risk assessments.
*   **Steps:**
    1.  Identify risk scenarios relevant to the scoped system boundaries.
    2.  Document the risk scenarios in the **Risk Register Template**, establishing the *Risk ID*, *Risk Type* (Cybersecurity, Data Security, or Project), *Risk Category*, and a descriptive *Risk Statement*.
*   **Outputs:** An identified list of risks in the Risk Register (columns *Risk ID*, *Risk Type*, *Risk Category*, and *Risk Statement* fully completed).

#### Stage 2 Tool A: Cybersecurity Risk Categories (Based on ISO 27002:2013)
Agencies must classify cybersecurity risks under one of the following 14 categories:
1.  **Information Security Policy:** Alignment of security objectives with business goals, laws, and regulations.
2.  **Organisation of Information Security:** Internal management frameworks and governance of external party access.
3.  **Human Resource Security:** Screening, training, and exit/termination management of staff and contractors.
4.  **Asset Management:** Accountability, ownership, and classification of agency assets and information.
5.  **Access Control:** Control of physical and logical access to networks, operating systems, and applications.
6.  **Cryptography:** Implementation of encryption for the confidentiality, authenticity, and integrity of data.
7.  **Physical & Environmental Security:** Restricting unauthorized physical access and preventing environmental damage.
8.  **Operations Security:** Ensuring correct and secure operation of information processing systems.
9.  **Communications Security:** Protecting data in transit across networks and communication facilities.
10. **System Acquisition, Development, & Maintenance:** Security within development lifecycles and software deployment.
11. **Third Party Relationships:** Protection of assets accessed, processed, or managed by third-party vendors.
12. **Information Security Incident Management:** Consistent reporting, response, and containment of security incidents.
13. **Information Security Continuity:** Embedding security resilience within Business Continuity Management (BCM).
14. **Compliance:** Avoiding breaches of legal, statutory, regulatory, or contractual security requirements.

#### Stage 2 Tool B: Project Risk Categories
Project-related risks affecting timelines, budgets, and operational readiness must be grouped into:
1.  **Environmental:** Risks outside the direct control of the project team (e.g., external environment changes, shifting business/compliance requirements, complex development environments).
2.  **End User Acceptance:** Risks that the system does not meet intended business functions, fails usability/operational requirements, violates regulations, or triggers citizen/business public resistance (e.g., concerns over compulsory hardware/software or data privacy).
3.  **Ops-Tech Integration:** Alignment issues, communication silos, or process gaps between business operations, internal IT, and third-party IT providers.
4.  **Project Management:** Ineffective execution resulting in cost/schedule slips, vendor non-performance, poor requirement changes, or design/implementation bottlenecks.

---

### STAGE 3: Analyse Risks
*   **Objective:** Evaluate each identified risk scenario by rating its **Impact** (consequences if the risk is realized) and **Likelihood** (probability of the risk occurring within a 1-year timeframe) to determine the overall **Current Risk Level**.
*   **Steps:**
    1.  Assess and record the **Impact Level** (1 to 5) for each risk using the relevant descriptor table.
    2.  Assess and record the **Likelihood Level** (1 to 5) for each risk using the likelihood descriptor tables.
    3.  Determine the **Current Risk Level** by mapping Likelihood and Impact on the **5x5 Risk Level Matrix**.
*   **Outputs:** Fully rated Current Impact, Current Likelihood, and calculated Current Risk Level for every risk scenario in the Risk Register.

---

#### Stage 3 Tool A: Cybersecurity & Data Security Impact Ratings (Table 4)
The overall Impact rating is the **maximum** of the (Confidentiality & Integrity) rating and the (Availability) rating:

`Impact = max(Confidentiality & Integrity Rating, Availability Rating)`

| Impact Level | Confidentiality & Integrity Impact | Availability Impact |
| :--- | :--- | :--- |
| **Very Severe (5)** | Unauthorized disclosure/modification of **TOP SECRET** data, or **SENSITIVE HIGH** data affecting multiple individuals or businesses. | System unavailability causes very severe national/agency/individual impact, or severe impact to multiple agencies, individuals, or businesses. |
| **Severe (4)** | Unauthorized disclosure/modification of **SECRET** data, or **SENSITIVE HIGH** data affecting a single individual or business. | System unavailability causes severe impact to the Nation, an Agency, individual, or business; or moderate impact to multiple agencies/entities. |
| **Moderate (3)** | Unauthorized disclosure/modification of **CONFIDENTIAL** data, or **SENSITIVE NORMAL** data affecting multiple individuals or businesses. | System unavailability causes moderate national/agency/entity impact, or minor impact across multiple agencies or entities. |
| **Minor (2)** | Unauthorized disclosure/modification of **RESTRICTED** data, or **SENSITIVE NORMAL** data affecting a single individual or business. | System unavailability causes a minor impact to the Nation, an Agency, individual, or business. |
| **Negligible (1)** | Unauthorized disclosure/modification of **OFFICIAL (CLOSED)** or **OFFICIAL (OPEN)** data, or **NON-SENSITIVE** data. | System unavailability causes negligible impact to the Nation, an Agency, individual, or business. |

---

#### Stage 3 Tool B: Cybersecurity & Data Security Likelihood Ratings (Table 5)
For technical/cybersecurity risks, Likelihood is computed by evaluating three distinct factors (Discoverability, Exploitability, and Reproducibility) and taking the **average, rounded to the nearest whole number**:

`Likelihood = round((Discoverability + Exploitability + Reproducibility) / 3)`

| Level | Factor A: Discoverability | Factor B: Exploitability | Factor C: Reproducibility |
| :--- | :--- | :--- | :--- |
| **Highly Likely (5)** | **Cybersecurity:** Target vulnerability is searchable/scanned in the public domain (e.g., Shodan, ExploitDB) or attacked from public external networks.<br><br>**Data Security:** Data access frequency > 100,000 per day. Multiple direct & indirect identifiers. Easily accessible by public and non-public officers. | **Cybersecurity:** Attack requires no access rights, or can be performed with public tools without technical knowledge. | **Cybersecurity:** Attack is repeated at will without specific configuration/conditions, or using published exploits without customization. |
| **Likely (4)** | **Cybersecurity:** Vulnerability discovered via active target probing (e.g., port scans) or adjacent subnets.<br><br>**Data Security:** Data access frequency > 100 per day. One direct & multiple indirect identifiers. Controlled non-public access or WOG-wide public service access. | **Cybersecurity:** Attack requires restricted access rights (e.g., basic user) or public tools with basic technical knowledge. | **Cybersecurity:** Attack requires specific target configuration, or minimal customization of published exploits (e.g., parameters). |
| **Possible (3)** | **Cybersecurity:** Vulnerability discovered via behavior/response analysis (e.g., sniffing, fuzzing) or same subnet access.<br><br>**Data Security:** Data access frequency > 1 per day. Multiple indirect or one direct identifier. Open to select agencies or selected officers. | **Cybersecurity:** Attack requires privileged access (e.g., admin, SYSTEM, root) or public tools with moderate technical knowledge. | **Cybersecurity:** Attack is reproducible under predictable event conditions, or requires customization specific to the target. |
| **Unlikely (2)** | **Cybersecurity:** Vulnerability discovered through actual target setup interaction or logical local access.<br><br>**Data Security:** Data access frequency > 1 per month. One indirect identifier. Access restricted to single agency or select agency officers. | **Cybersecurity:** Requires privileged access, specialized tools with advanced technical knowledge, or chaining of multiple exploits. | **Cybersecurity:** Attack reproducible under random event conditions, or theoretically demonstrated via published Proof-of-Concept (PoC). |
| **Rare (1)** | **Cybersecurity:** Vulnerability discovered by blueprint analysis (e.g., source code review) or physical access only.<br><br>**Data Security:** Data access frequency ≤ 1 per month. No identifiers. Restricted to selected agency officers. | **Cybersecurity:** Requires privileged access + Multi-Factor Authentication (MFA), expert technical knowledge, and exploit chaining. | **Cybersecurity:** Attack cannot be reproduced, or requires an unpublished exploit custom-built for the target. |

*Note: For **non-technical/procedural risks** (e.g., lack of policy enforcement), use **Table 6** as a guideline to directly map likelihood on a qualitative scale (Highly Likely (5), Likely (4), Possible (3), Unlikely (2), Rare (1)).*

---

#### Stage 3 Tool C: Project Risk Impact Ratings (Table 7)
The overall Project Impact is the **maximum** of the (Agency Impact) and the (Public Impact):

`Project Impact = max(Impact to Agency / Other Agencies, Impact to Public)`

| Impact Level | Impact to Agency / Other Agencies | Impact to Public (Citizens & Businesses) | Cost & Schedule Baseline |
| :--- | :--- | :--- | :--- |
| **Very Severe (5)** | System degradation causes total inability for the Agency (or other agencies) to perform its primary function. | Widespread public resentment, national-level alarm, chaos, or severe time-critical public inconvenience. | Cost impact exceeds approved project value (including contingency sum) by **> 50%**, OR schedule delay **> 1 year**. |
| **Severe (4)** | Severe degradation prevents the Agency (or other agencies) from performing primary functions effectively. | Major public resentment, discourse, or localized time-critical public alarm and chaos. | Cost impact exceeds approved value by **up to 50%**, OR overall project schedule delay is **up to 1 year**. |
| **Moderate (3)** | Affects a specific process/system but workarounds exist; some operational impact on other agencies. | Some public resentment or general public inconvenience, but not time-critical. | Cost impact exceeds approved value by **up to 20%**, OR overall project schedule delay is **up to 6 months**. |
| **Minor (2)** | Minimal service disruption with minimal impact on agency functions or partner agencies. | Isolated cases of public resentment, or minimal public inconvenience. | Cost impact exceeds approved value but stays **within the approved contingency sum**, OR schedule delay **up to 3 months**. |
| **Negligible (1)** | No disruption of service; zero operational impact on other agencies. | Zero public resentment, discourse, or public inconvenience. | Cost impact is **within the approved project budget** (no contingency used), OR schedule delay is **0 months** (managed in-plan). |

*Note: Project Risk Likelihood is mapped directly onto Table 8 (Highly Likely (5), Likely (4), Possible (3), Unlikely (2), Rare (1)) based on event probability.*

---

#### Stage 3 Tool D: The 5x5 Risk Level Matrix (Figure 2)
Map the intersection of Impact (1–5) and Likelihood (1–5) to obtain the Risk Score and Level:

| Impact of Risk Occurring | Rare (1) | Unlikely (2) | Possible (3) | Likely (4) | Highly Likely (5) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Very Severe (5)** | **Medium (5)** | **Medium-High (10)** | **High (15)** | **Very High (20)** | **Very High (25)** |
| **Severe (4)** | **Low (4)** | **Medium (8)** | **Medium-High (12)** | **High (16)** | **Very High (20)** |
| **Moderate (3)** | **Low (3)** | **Medium (6)** | **Medium (9)** | **Medium-High (12)** | **High (15)** |
| **Minor (2)** | **Low (2)** | **Low (4)** | **Medium (6)** | **Medium (8)** | **Medium-High (10)** |
| **Negligible (1)** | **Low (1)** | **Low (2)** | **Low (3)** | **Low (4)** | **Medium (5)** |

##### Risk Level Score Classification
*   **Low (Score 1 - 4):** Standard operational monitoring.
*   **Medium (Score 5 - 9):** Management oversight and basic controls.
*   **Medium-High (Score 10 - 12):** Active remediation planning and escalation.
*   **High (Score 15 - 16):** Immediate mitigation, close leadership supervision.
*   **Very High (Score 20 - 25):** Critical exposure. Urgent mitigation. *Cannot be accepted as a residual risk level.*

---

### STAGE 4: Treat Risks
*   **Objective:** Define and implement risk response actions to manage risks, and calculate the **Residual Risk Level** (target risk level remaining after treatment).
*   **Steps:**
    1.  Identify treatment actions based on the priority of current risk levels.
    2.  Propose the **Risk Treatment Option** (Avoid, Mitigate, Transfer, Accept).
    3.  Define the specific **Treatment Action** and assign an **Action Party** and **Expiry/Due Date**.
    4.  Evaluate target **Residual Impact** and **Residual Likelihood** to calculate the **Residual Risk Level**.
*   **Outputs:** Updated columns in the Risk Register (*System Owner*, *Risk Treatment Option*, *Treatment Action*, *Action Party*, *Status*, *Expiry Date*, and *Residual Impact, Likelihood, and Risk Level*).

#### Four Risk Treatment Response Options (Section 5.5.1)
1.  **Avoid:** Completely discontinue or withdraw from the activity exposing the agency to the risk.
    *   *Example:* Removing a web-based online payment feature entirely to avoid transaction fraud/hijacking risks.
2.  **Mitigate:** Implement technical or procedural security controls to reduce the risk's impact and/or likelihood.
    *   *Example:* Installing and configuring a Web Application Firewall (WAF) to prevent unauthorized database commands (SQL injection).
3.  **Transfer:** Share or assign a portion of the risk to an external entity.
    *   *Example:* Outsourcing critical IT infrastructure operations to a specialized, certified third-party cloud provider, or transferring system ownership to another agency.
4.  **Accept:** Agree to absorb the risk without implementing further active measures. This is reserved for risks that already fall within acceptable agency tolerance thresholds.
    *   *Requirements:* All residual risks must undergo the formal approval and acceptance process in Stage 5.

---

### STAGE 5: Risk Acceptance
*   **Objective:** Formally review and sign off on proposed treatment actions and target residual risk levels by designated approving authorities.
*   **Steps:**
    1.  Submit the Risk Register to the appropriate approving authority (governed by the Residual Risk Level).
    2.  If approved, the System Owner executes treatment actions within the agreed-upon timeframe. (If rejected, the System Owner must re-assess and submit revised actions).
    3.  Log details into the Risk Register, completing *Accepted By*, *Acceptance Date*, *Expiry Date*, *Number of Extensions*, and treatment *Status*.
*   **Outputs:** Formal sign-off on residual risks. Risk Register updated with approval metadata.

---

#### Stage 5 Tool: Residual Risk Approving Authority Matrix (Figure 3)
*Note: Very High residual risks cannot be accepted.*

| Residual Risk Level | Statutory Board & Owned Systems | Ministry & Owned Systems | Organs-of-State & Owned Systems | Whole-of-Government (WOG) Infrastructure |
| :--- | :--- | :--- | :--- | :--- |
| **Very High (20-25)** | **CANNOT BE ACCEPTED** | **CANNOT BE ACCEPTED** | **CANNOT BE ACCEPTED** | **CANNOT BE ACCEPTED** |
| **High (15-16)** | **Chairman of Board** (for Cyber* & Project^)<br><br>**PS of Ministry** (for Data Security#) | **PS of Ministry** or equivalent | **Head of Agency** or equivalent | **PS (SNDG)** (Permanent Secretary, Smart Nation & Digital Government Group) |
| **Medium-High (10-12)** | **Head of Agency** or equivalent (Cyber* & Project^)<br><br>**Director (GDO)** (Data Security#) | **Chairperson of IDSC** or **Head of Agency** | **Head of Agency** or equivalent | **CE GovTech** (Cyber* & Project^)<br><br>**DS (SNDG)** (Data Security#) |
| **Medium (5-9)** | **Chairperson of IDSC** or equivalent | **Chairperson of GovTech IDSC** or equivalent (Cyber* & Project^)<br><br>**Director (GDO)** (Data Security#) | **Chairperson of IDSC** or equivalent | **Chairperson of GovTech IDSC** or equivalent (Cyber* & Project^)<br><br>**Director (GDO)** (Data Security#) |
| **Low (1-4)** | **Chairperson of Project Management Committee**, or **CIO*** / **CDO**# / **System Owner**^ | **Chairperson of PMC**, or **CIO** (Cyber* & Project^)<br><br>**Head of Relevant Trusted Centres** (Data Security#) | **Chairperson of PMC**, or **CIO** (Cyber* & Project^)<br><br>**Head of Relevant Trusted Centres** (Data Security#) | **Chairperson of PMC**, or **CIO** (Cyber* & Project^)<br><br>**Head of Relevant Trusted Centres** (Data Security#) |

**Legend:**
*   `*` denotes approving authority for **Cybersecurity** risks.
*   `^` denotes approving authority for **Project** risks.
*   `#` denotes approving authority for **Data Security** risks.

---

### STAGE 6: Monitor, Report, & Communicate Risks
*   **Objective:** Continuously monitor and report on the status of risks and their treatment actions to prevent expiration of accepted risks and maintain organizational situational awareness.
*   **Inputs:** Updated status of risk treatment actions from the Risk Register.
*   **Key Monitored Fields:** *Risk Status*, *Acceptance Date*, and *Expiry Date*.
*   **Steps:**
    1.  Ensure all risks are treated and maintained in the central registry.
    2.  If treatment actions are completed, mark the risk as **Closed**.
    3.  For periodic assessments, keep the Risk Register fully updated.
    4.  Extract statistics and generate the standard IDSC Risk Report.
*   **Required Reporting Statistics for IDSC Consumption:**
    *   **Aging Risk Expiration Report:** List of risks whose approvals are set to expire within the next 3 months.
    *   **Number of Expired Risks:** Accepted risks that have passed their expiry date without treatment completion or re-approval.
    *   **Number of New & Implemented Risks:** Count of risks added or successfully treated since the last review cycle.
    *   **Risk Profile Categorization:** Breakdown of the total number of risks sitting in each category and risk level (Low, Medium, Medium-High, High).

---

## 4. Risk Register Cover Page Data Schema (Annex A)
*Typically reviewed and approved by the Project Steering Committee (or equivalent), this cover page contains static system-wide configurations:*

*   **System Name:** Formal name of the IT system.
*   **System Owner:** Name and designation of the System Owner.
*   **Scope:** Clear description of the physical, logical, and functional boundaries of the system.
*   **Description of System Environment:** Operational context of the system (extracting financial, operational, competitive, political/public perception, social, and legal elements).
*   **Risk Monitoring Protocol:** Frequency and names/designations of persons responsible for scanning operational changes to pre-empt risk events.
*   **Risk Reviews Protocol:** Forum names and frequency of periodic audits (where existing risks are validated and new ones are identified).
*   **Risk Reporting Protocol:** Recipients, nature of data, and frequency of progress reporting.

---

## 5. Risk Register Column & Field Definitions (Annex B)
A compliant Risk Register must capture the following metadata schemas:

1.  **Risk ID:** Unique identifier for each risk scenario (e.g., `CYBER-001`, `DATA-002`, `PROJ-003`).
2.  **Risk Type:** Primary classification: `Cybersecurity`, `Data Security`, or `Project`.
3.  **Risk Category:** Secondary classification corresponding to Stage 2 taxonomies (e.g., Access Control, Asset Management, End User Acceptance).
4.  **Risk Statement:** Standard description of the threat scenario, threat agent, vulnerability, and specific consequences.
5.  **Current Impact Level:** Rating (1–5) of the adverse consequences *before* new treatments are implemented (utilizing Section 3 descriptors).
6.  **Current Likelihood Level:** Rating (1–5) of probability *before* new treatments are implemented (utilizing Section 3 descriptors).
7.  **Current Risk Level:** The risk score (1–25) and qualitative level (Low, Medium, Medium-High, High, Very High) derived from the 5x5 matrix.
8.  **Risk Treatment Option:** Selected approach: `Avoid`, `Mitigate`, `Transfer`, or `Accept`.
9.  **Treatment Action:** Technical/procedural description of the planned risk control to achieve target levels.
10. **Action Party:** Designated owner responsible for implementing the Treatment Action.
11. **Status (of Treatment Action):** Must map to one of the following states:
    *   `Not Applicable`: Treatment is not required (e.g., Accepted Low risks).
    *   `Draft`: Risk treatment is drafted and awaiting assessment approval.
    *   `Implementation in-progress`: Treatment is active and on-track.
    *   `Implementation in-progress (Overdue)`: Treatment is active but has passed its target due date.
    *   `Implemented`: Security controls are verified and in place.
12. **Expiry Date:** The target due date for implementation (or risk acceptance expiration) in `DDMMYY` format.
13. **Number of Extensions:** Number of approved deadline extensions for the risk.
14. **Residual Impact Level:** Target impact (1–5) remaining *after* the Treatment Action is successfully implemented.
15. **Residual Likelihood Level:** Target likelihood (1–5) remaining *after* the Treatment Action is successfully implemented.
16. **Residual Risk Level:** Calculated target risk score (1–25) after treatment controls are verified.
17. **Accepted By:** Name and designation of the approving authority who signed off on the residual risk.
18. **Acceptance Date:** Formal date of residual risk acceptance in `DDMMYY` format.
19. **Comments:** Remark fields for tracking notes, references to technical audits, or policy waiver numbers.
