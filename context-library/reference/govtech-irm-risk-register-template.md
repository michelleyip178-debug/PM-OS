# GovTech Singapore DGP IRM Risk Register Template Reference Manual
*Version 1.01 (Reference Standard for Public Sector Integrated Risk Management Templates)*

> **Saved to PM-OS 2026-09-03.** Fourth file in the govtech compliance reference set. Companions: `govtech-ict-rmm-methodology.md` (6-stage process), `govtech-ict-rmm-risk-library.md` (baseline risks), `govtech-low-risk-cloud-ssp-checklist.md` (SSP controls). **This one is the column schema and calculation rulebook for the actual risk register file** used with the DGP IRM portal. Use it to format the Career Compass risk register for import.

This reference manual provides a highly structured, comprehensive layout and validation guide for the **Integrated Risk Management (IRM) Risk Register Template**. This template is designed to work in tandem with the **Digital Governance Platform - Integrated Risk Management (DGP IRM) module** to support the export, update, and import of system risk registers and risk assessments.

This document is optimized to be used as a knowledge template for **Claude** (and other Large Language Models) to perform automated formatting, validate risk register entries, execute ETL (Extract-Transform-Load) checks, and verify risk calculation matrices.

---

## 1. System Integration & ETL Instructions
The DGP IRM system matches files specifically by column order and data types.

### 1.1 Column Preservation Rule
*   **Columns A through L (highlighted in blue in the spreadsheet)** represent the core import/export interface.
*   **Do not change the order of columns A through L.**
*   **Do not modify the column headers** or shift the columns, as they are hard-mapped to the ETL backend of the DGP IRM module.
*   Having matched columns and data types allows project teams to drag-copy-and-paste data directly between local registers and the IRM portal.

### 1.2 Export Process (From IRM to Excel/CSV)
1.  **Export:** From the DGP IRM portal, export the system's risk register or a previously completed risk assessment in CSV or MS Excel format.
2.  **Filter:** Filter the `Risk Type` column for the desired discipline (e.g., Cybersecurity, Data Security, Project, Cloud Security).
3.  **Populate:** Drag-and-copy data for the matching columns starting from `Risk ID` and paste them into the respective tabs in this template, starting from **Row 3**.
4.  **Format:** Copy **Row 2** and use **Paste Special Validation and Formats** for all rows with data (Row 3 onwards).
5.  **Calculate:** Extend the Excel formulas for *Current Risk Level* (Column M) and *Residual Risk Level* (Column N) to all active rows, then delete Row 2 (the template placeholder row).

### 1.3 Import Process (From Excel/CSV to IRM)
There are two supported methods to load data back into DGP IRM:

#### Method 1: Standard Import Template
1.  Download the formal IRM import template from the WOG ICT&SS risk management website.
2.  Drag-and-copy data from columns **B through L** (starting with `Applicable?` through `Comments`) and paste into the import template.
3.  **Crucial:** Leave `Risk ID` (Column A) **blank** for importing new risk scenarios. Only include the `Risk ID` if you are re-importing to update rows that have already been imported into the active risk assessment record.

#### Method 2: Direct CSV Import
1.  Ensure columns **A through L** are positioned as the very first sheet in your workbook.
2.  Delete or leave blank the `Risk ID` column (if importing new risks).
3.  Delete columns from **M onwards** (Current Risk Level, Residual Risk Level, and Treatment Details) as the IRM system's import interface does not ingest these fields (they are auto-calculated or managed dynamically on the portal).
4.  Save the sheet in **CSV format** and upload it directly.

*Note: The fields 'System Name', 'Accepted by', and 'Acceptance Date' (referenced in ICT RMM Annex B) are managed as metadata within the DGP IRM online submission process and are purposefully omitted from this spreadsheet template.*

---

## 2. Complete Risk Register Column Schema (Columns A to T)
Every sheet in the IRM workbook shares this exact column layout. Below is the precise schema, validation guidelines, and formula behaviors for each field:

| Column | Field Name | Status | Data Validation / Type | Allowed Values / Formula |
| :---: | :--- | :---: | :--- | :--- |
| **A** | Risk ID | **Mandatory** | Free Text / System Generated | Alphanumeric (e.g., `PROJ-1`, `<Free Text>`). Left blank for new imports. |
| **B** | Applicable? | **Mandatory** | List Dropdown | `Yes`, `No` |
| **C** | Risk Type | **Mandatory** | List Dropdown | `Cybersecurity`, `Data Security`, `Project`, `Cloud Security`, or starts with `Others;:` |
| **D** | Risk Category | **Mandatory** | Dynamic List Dropdown | *Must match the corresponding Risk Type* (See Section 3) |
| **E** | Risk Statement | **Mandatory** | Free Text | Description of event, cause, and impact. |
| **F** | Existing Controls in Place | **Mandatory** | Free Text | Currently active mitigations. |
| **G** | Current Impact Level | **Mandatory** | List Dropdown | `Negligible (1)`, `Minor (2)`, `Moderate (3)`, `Severe (4)`, `Very Severe (5)` |
| **H** | Current Likelihood Level | **Mandatory** | List Dropdown | `Rare (1)`, `Unlikely (2)`, `Possible (3)`, `Likely (4)`, `Highly Likely (5)` |
| **I** | Risk Treatment | **Mandatory** | List Dropdown | `Accept`, `Mitigate`, `Avoid`, `Transfer` |
| **J** | Residual Impact Level | **Mandatory** | List Dropdown | `Negligible (1)`, `Minor (2)`, `Moderate (3)`, `Severe (4)`, `Very Severe (5)` |
| **K** | Residual Likelihood Level | **Mandatory** | List Dropdown | `Rare (1)`, `Unlikely (2)`, `Possible (3)`, `Likely (4)`, `Highly Likely (5)` |
| **L** | Comments | Optional | Free Text | Supporting notes, references, or context. |
| **M** | Current Risk Level | **Calculated** | Non-editable Formula | Auto-lookup based on Columns G & H (See Section 4) |
| **N** | Residual Risk Level | **Calculated** | Non-editable Formula | Auto-lookup based on Columns J & K (See Section 4) |
| **O** | Risk Treatment ID | Optional | Free Text | ID of the treatment project or tracking item. |
| **P** | Treatment Action | Optional | Free Text | Specific action steps to achieve residual state. |
| **Q** | Action Party | Optional | Format validation | Email address (`email@domain.com`) |
| **R** | Risk Treatment Action Status | Optional | List Dropdown | `Not Applicable`, `Draft`, `Implementation in Progress`, `Implementation in Progress - Overdue`, `Implemented/ Completed` |
| **S** | Treatment Action Due Date | Optional | Date Format | `YYYY-MM-DD` or standard system Excel date |
| **T** | Number of Extensions | Optional | Number Format | Numeric integer tracking schedule shifts. |

---

## 3. Allowed Category Mappings by Risk Type
When validating sheets or using Claude to build entries, the **Risk Category** (Column D) **MUST** strictly correspond to the **Risk Type** (Column C) using these exact standard terms:

### 3.1 Cybersecurity Mapped Categories
*   Cybersecurity Risk Management
*   Security Management
*   Information Management
*   IT Asset Management
*   Access Control
*   ICT System Management
*   Application Management
*   Network Security Management
*   Security Testing
*   Vulnerability Management
*   Security Monitoring
*   Log Management
*   Mobile GFEs
*   Resilience

### 3.2 Data Security Mapped Categories
*   Planning and Design
*   Acquire and Store
*   Access and Distribute
*   Usage
*   Incident Response
*   Acquire and Store Usage

### 3.3 Project Mapped Categories
*   End User Acceptance
*   Environmental
*   Operations
*   Ops-Tech Integration
*   Project Management

### 3.4 Cloud Security Mapped Categories
*   Visibility
*   Protection
*   Auditability
*   Automation
*   Agility

### 3.5 Custom Categories
*   **Risk Type:** `Others;: <any text>`
*   **Risk Category:** `<Any text beginning with 'Others;:'>`

---

## 4. Risk Level Calculation Matrix (Risk Matrix Rulebook)
The **Current Risk Level** (Column M) and **Residual Risk Level** (Column N) are calculated using a 5x5 Risk Matrix mapping of **Likelihood** vs. **Impact**.

| Likelihood \ Impact | Negligible (1) | Minor (2) | Moderate (3) | Severe (4) | Very Severe (5) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Rare (1)** | Low | Low | Low | Low | Medium |
| **Unlikely (2)** | Low | Low | Medium | Medium | Medium-High |
| **Possible (3)** | Low | Medium | Medium | Medium-High | High |
| **Likely (4)** | Low | Medium | Medium-High | High | Very High |
| **Highly Likely (5)** | Medium | Medium-High | High | Very High | Very High |

### 4.1 Lookup Table Reference for LLM Parsing
Use this mapping table to evaluate risks programmatically:

*   Rare (1) x Negligible (1) -> Low
*   Rare (1) x Minor (2) -> Low
*   Rare (1) x Moderate (3) -> Low
*   Rare (1) x Severe (4) -> Low
*   Rare (1) x Very Severe (5) -> Medium
*   Unlikely (2) x Negligible (1) -> Low
*   Unlikely (2) x Minor (2) -> Low
*   Unlikely (2) x Moderate (3) -> Medium
*   Unlikely (2) x Severe (4) -> Medium
*   Unlikely (2) x Very Severe (5) -> Medium-High
*   Possible (3) x Negligible (1) -> Low
*   Possible (3) x Minor (2) -> Medium
*   Possible (3) x Moderate (3) -> Medium
*   Possible (3) x Severe (4) -> Medium-High
*   Possible (3) x Very Severe (5) -> High
*   Likely (4) x Negligible (1) -> Low
*   Likely (4) x Minor (2) -> Medium
*   Likely (4) x Moderate (3) -> Medium-High
*   Likely (4) x Severe (4) -> High
*   Likely (4) x Very Severe (5) -> Very High
*   Highly Likely (5) x Negligible (1) -> Medium
*   Highly Likely (5) x Minor (2) -> Medium-High
*   Highly Likely (5) x Moderate (3) -> High
*   Highly Likely (5) x Severe (4) -> Very High
*   Highly Likely (5) x Very Severe (5) -> Very High

---

## 5. System Prompt Template for Claude
*Copy and paste this prompt block alongside this file to turn Claude into a GovTech IRM Compliance Auditor and Risk Analyst.*

```markdown
You are the GovTech Singapore IRM Compliance Auditor and Risk Register Analyst. Your job is to take raw risk entries, validate them against the WOG DGP IRM standards, auto-calculate risk scores, and check for schema inconsistencies.

### Core Guidelines:
1. Validate that the "Risk Type" and "Risk Category" exactly match the mappings in Section 3.
2. Cross-reference the "Current Risk Level" and "Residual Risk Level" using the Likelihood x Impact matrix in Section 4. Flag any miscalculations.
3. Verify that Columns A through L are present, ordered correctly, and contain properly formatted data types.
4. For any "Mitigate", "Avoid", or "Transfer" treatments (Column I), ensure that columns O, P, Q, R, and S are fully filled out. If "Accept" is chosen, "Not Applicable" should be in the "Risk Treatment Action Status" (Column R).
5. Output your audit findings in a neat Markdown table, highlighting "Errors", "Warnings", and "Compliant" rows.
```

---

## 6. Career Compass — Notes for Building the Register

*Added by PM-OS 2026-09-03. Not part of the source manual.*

- **Two matrices to be aware of.** This IRM template's 5x5 (Section 4) uses qualitative bands only (Low / Medium / Medium-High / High / Very High). The ICT RMM methodology manual carries the same bands *plus* numeric scores (1–25) and the "Very High cannot be accepted as residual" rule. Score the register with this template's bands; carry the ICT RMM numeric score in Comments (Column L) if useful for the IDSC pack.
- **Project risk categories (Column D) for Career Compass** map to: `Environmental`, `End User Acceptance`, `Operations`, `Ops-Tech Integration`, `Project Management`. Note this template splits `Operations` and `Ops-Tech Integration` as separate categories (the risk library groups some ops items under Ops-Tech Integration — pick the closest match per row).
- **Column F (Existing Controls in Place) is mandatory** and is not in the ICT RMM Annex B schema — every Career Compass row needs its current mitigation stated, even if "none".
- **Treatment completeness rule (Section 5, guideline 4):** any row with Column I = Mitigate/Avoid/Transfer must have O, P, Q, R, S filled. Q (Action Party) must be an **email address**, not a name — so "Rama" becomes rama's actual email. Accept rows put `Not Applicable` in Column R.
- **For DGP IRM import:** leave Column A (Risk ID) blank for new risks; keep A–L in order; drop M onwards for the CSV import method.
- The draft Career Compass **project** risk statements (already in ICT RMM "In the event that... due to... may result in..." format) are in `outputs/analyses/` once the register file is built.
