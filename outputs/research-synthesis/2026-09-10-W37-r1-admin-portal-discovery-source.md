---
title: Briefing Document — CareerCompass Administrative Portal Discovery and System Synthesis
date: 2026-09-10
week: 2026-W37
type: research-source
initiative: R1 Opportunities / Admin Portal
status: source input for /user-research-synthesis
source: IA research + stakeholder interviews (prototype walkthrough), pilot agencies PSD/ESG/MDDI/URA/MCCY/CAAS
---

# Briefing Document: CareerCompass Administrative Portal Discovery and System Synthesis

## Executive Summary

This document synthesizes findings from information architecture research and stakeholder interviews regarding the development of the CareerCompass Administrative Portal. The current ecosystem for managing public service opportunities — including Structured Job Rotations (SJR), Secondments, Internal Jobs, Stibs, and Gigs — is characterized by extreme fragmentation and heavy reliance on manual workarounds.

**Critical Takeaways:**

- **System Fragmentation:** HR Managers currently "juggle" multiple disconnected tools (OTG, FormSG, Excel, SharePoint, and Email "flyers") to manage a single posting.
- **The "Post-Box" Burden:** HR Points of Contact (POCs) often act as administrative intermediaries, manually downloading and emailing CVs to hiring managers due to lack of direct system access and integrated CV storage.
- **Functional Limitations of OTG:** The existing OneTag (OTG) system lacks essential features such as CV storage, automated application status updates, and the ability to customize application forms, leading agencies like MDDI to abandon it in favor of FormSG.
- **Data Integrity and Tracking:** Tracking "secondment" numbers is currently a derivative exercise (comparing parent vs. borrowing agency data) rather than a direct marker, leading to significant gaps in reporting accuracy for the Whole-of-Government (WOG).
- **Core Requirement:** A custom form builder within CareerCompass is identified as the single most important feature to eliminate the need for external tools like FormSG.

## 1. Taxonomy of Opportunities

| Opportunity Type | Scope | Duration / Commitment | Key Characteristics |
|---|---|---|---|
| Structured Job Rotation (SJR) | Cross-agency | 2–3 years | Programmatic, cycle-based (March–August), requires agency nomination. |
| Secondments | Cross-agency | Multi-year | Broader umbrella; includes self-initiated moves where officers return to a parent agency. |
| Internal Jobs (IJR) | Intra-agency | Permanent or Long-term | Movements within a single agency/division; often managed via OTG or internal systems. |
| Gigs | Project-based | 2 weeks – 6 months | Capped at 30% of work week (approx. 1.5 days); must balance with core work. |
| Stibs | Short-term | < 2 weeks | Includes webinars, learning journeys, and short events (e.g., Get Active Singapore). |

## 2. Current State Analysis: Process and Pain Points

### 2.1 The SJR Management Cycle

Managed centrally by Workforce Development (WD) in collaboration with Functional Leads (FLs).

- **Nomination Phase:** HR POCs nominate officers and surface roles. A recurring pain point is the "flyer" email — ad-hoc emails sent to all HRLs (Human Resource Leaders) that clutter inboxes.
- **Matching and Competency:** FLs conduct "delta" analysis, comparing an officer's Proficiency Level (PL) against the requirements of a role to identify growth areas.
- **The "Limbo" Problem:** Officers are often left "hanging" for weeks. The system does not allow HR to notify unsuccessful candidates until the entire exercise is closed and a final candidate is confirmed.

### 2.2 Stibs and Gigs Administration

Managed by DevOps teams through bi-weekly Whole-of-Government (WOG) EDMs.

- **Curation:** Agencies fill out an Excel template and send it to the DevOps team, who then vet the blurbs and competency mappings (Functional and OCC).
- **Publicity:** Most sign-ups are driven by the bi-weekly EDM. Agencies that post directly to OTG without going through the central team often see lower engagement because their posts aren't included in the EDM.
- **Manual Tracking:** Vacancies, interest gathered, and attendance are tracked in "mega huge" Excel spreadsheets for reporting to HCS (Head of Civil Service).

### 2.3 Systemic Pain Points

- **Lack of CV Storage:** OTG does not store CVs. Current workarounds include asking officers to upload CVs to personal Google Drives or WOG SharePoint folders and pasting the links into form fields. This creates security and access issues for agencies without .gov.sg emails.
- **Manual Post-Box Actions:** HR POCs must manually download CVs and email them to hiring managers. There is a strong desire for a "mass download" feature or a seamless way to "relay" applicants to line managers within the portal.
- **Inflexible Posting Status:** Users cannot easily switch a posting from "SJR" to a general "Opportunity." If an SJR role remains unfilled after a cycle, the HR POC must manually close the post and create a brand-new entry for the general market.
- **Competency Misalignment:** Different agencies (especially Statutory Boards) use different competency banks (e.g., Workday vs. HRPS). Mapping these to the WOG standard is currently a manual, "best-effort" task.

## 3. Stakeholder Roles and Permissions

- **HR POC (Agency Admin):** Needs to create postings, view all applications for their agency, and manage "co-owners." They require the ability to transfer ownership of posts when an officer leaves the organization.
- **Functional Lead (FL):** Requires a broader "job family" view to see all roles and officers within their functional domain (e.g., HR, Finance, ICTSS) across different agencies.
- **Opportunity Owner (Hiring Manager):** Needs to view CVs and competencies for applicants to their specific roles without necessarily having full HR administrative rights.
- **WOG Admin (DevOps):** Needs an "all-access" view for reporting purposes and to manage the bi-weekly EDM curation.

## 4. Requirements for the CareerCompass Prototype

### 4.1 Enhanced "Create" Flow

- **Custom Form Builder:** Essential for Gigs where specific technical questions are required. Users noted they would likely revert to FormSG if CareerCompass only offered a static template.
- **Drafting and Collaboration:** Support for multiple "co-owners" so teams can manage high-volume exercises (like SJR) together.
- **Ring-Fencing:** Advanced logic to limit visibility to specific agencies, job families, or functions, or to exclude certain groups.

### 4.2 Applicant Management

- **Status Transparency:** A feature to "reject" or "shortlist" candidates in real-time, triggering automated notifications so applicants are not left uninformed for months.
- **Mass Actions:** A "Select All" and "Download All CVs" button to reduce the administrative burden on HR.
- **Integrated Interview Scheduling:** Moving away from manual email coordination to a system-triggered "Schedule Interview" function.

### 4.3 Data and Reporting

- **Automated Attendance Tracking:** For Stibs and Gigs, host agencies should be able to mark attendance directly in the system to simplify quarterly and annual reporting.
- **Competency Insights:** The ability to see an applicant's "Endorsed Competencies" vs. "Self-Assessed Competencies" at a glance.

## 5. Strategic Observations

**The "SJR vs. Secondment" Definition:** Interviews revealed that "Secondment" and "SJR" are often used interchangeably, but they differ in structure. SJR is a "coordinated program," while secondment is the "mechanism." Currently, WOG data on secondments is inaccurate because it relies on a "derivative" logic (comparing parent and borrowing agency codes) rather than a dedicated system marker.

**The "Line Manager" Access Conflict:** There is a tension between HR's role as a "gatekeeper" and their desire to reduce administrative work. While some HR POCs want to give line managers direct access to CVs, others insist on a preliminary screening layer to ensure agency-level standards are met before CVs are shared.

**Pilot Agency Considerations:** The initial rollout involves six pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS). Success depends on the platform's ability to demonstrate "wider visibility" and "reduced duplicative effort," particularly for agencies currently forced to post the same role on both OTG and Careers@Gov.
