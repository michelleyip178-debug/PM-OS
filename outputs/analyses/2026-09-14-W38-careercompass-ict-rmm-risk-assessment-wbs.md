# CareerCompass Pre-Go-Live Risk Assessment (ICT RMM Stages 1 to 6)

**Doc:** `2026-09-14-W38-careercompass-ict-rmm-risk-assessment-wbs`  
**Date:** 14 Sep 2026  
**Tracking:** Jobelle  
**Leads:** Jace Tan, Adrian Ang, Michelle Yip  
**Tech & Security:** Rama, Tan Pow Hwee, GovTech Security POC  
**Target Launch:** 24 to 25 Nov 2026  

---

## 1. Context & Key Watch-Outs

We need IDSC residual risk sign-off by 10 Nov to clear our 24 Nov launch. That means completing Stages 1 to 5 under GovTech's ICT RMM framework to satisfy Low-Risk Cloud Security Plan controls `pm-2` and `pm-4`.

Watch these dates closely:
* **Jace on leave:** 26 Oct to 05 Nov. The IDSC board pack must be completely locked before he goes on leave.
* **Adrian on leave:** 05 Oct to 09 Oct.
* **VAPT (NCS):** Runs 07 Sep to 25 Sep. Interim report lands 25 Sep. Final closure letter around 07 Nov.
* **Hard IDSC submission cutoff:** 30 Oct.

---

## 2. Milestone Gates for Jobelle's Daily Board

| Gate | Due Date | Exit Criteria | Owners |
|---|:---:|---|---|
| **Gate 1: Scope Freeze** | 22 Sep 2026 | Stage 1 signed off by System Owner; 46 data elements classified. | Jace, Michelle |
| **Gate 2: Scoring Calibrated** | 09 Oct 2026 | Stage 3 scoring workshop done; current risk matrix agreed. | Jace, Rama |
| **Gate 3: Treatments Locked** | 23 Oct 2026 | All mitigations tied to named official emails; zero residual Highs. | Michelle, Pow Hwee |
| **Gate 4: IDSC Submission** | 30 Oct 2026 | Complete IDSC pack submitted to Secretariat before Jace's leave. | Jace, Jobelle |
| **Gate 5: IDSC Approval** | 10 Nov 2026 | Signed IDSC residual risk acceptance in hand. Mandatory for go-live. | Adrian, PSD System Owner |

---

## 3. Detailed Work Breakdown

### Stage 1: Scope & Asset Inventory
*Goal: Lock system boundary and get formal System Owner sign-off.*

| Code | Activity | Lead | Support | Start | EDC | Deliverable |
|---|---|---|---|:---:|:---:|---|
| **1.1** | Walk boundary, in-scope services (Compass app, DB, admin tooling, POCDEX sync), and out-of-scope services with Rama and Pow Hwee. | Michelle | Rama, Pow Hwee | 15 Sep | 18 Sep | Scope section updated in `2026-09-03-W36-careercompass-stage1-scope-asset-inventory.md`. |
| **1.2** | Verify data classification (`Restricted / Sensitive Normal`) across all 46 data elements with Data Office / CDO rep. | Michelle | Jace, CDO POC | 16 Sep | 21 Sep | Classification sheet showing zero Secret or Confidential fields. |
| **1.3** | Confirm named Ministry System Owner from PSD (formal appointment memo required for IDSC). | Adrian | Jace, PSD HR | 18 Sep | 22 Sep | Appointment memo for PSD System Owner. |
| **1.4** | Run formal Stage 1 scope review with ACISO and System Owner; lock the boundary. | Jace | Michelle | 21 Sep | 22 Sep | Stage 1 sign-off doc signed by System Owner and ACISO. |

---

### Stage 2: Risk Identification
*Goal: Consolidate all project, technical, and data threat scenarios.*

| Code | Activity | Lead | Support | Start | EDC | Deliverable |
|---|---|---|---|:---:|:---:|---|
| **2.1** | Update the 25 project risks (`PROJ-1` to `PROJ-25`) with locked R1 MVP boundaries and POCDEX dependency gates. | Michelle | Rama | 21 Sep | 25 Sep | Updated project risk register in `outputs/analyses/`. |
| **2.2** | Refine the 15 data security risks (`DATA-1` to `DATA-15`) covering WOG AD identity tokens, unmasked PII, and tenant isolation. | Michelle | Security POC | 22 Sep | 25 Sep | Updated data security register in `outputs/analyses/`. |
| **2.3** | Map interim VAPT findings from NCS into ICT RMM risk rows. | Jobelle | Jace, Pow Hwee | 25 Sep | 29 Sep | VAPT-to-RMM mapping table. |
| **2.4** | Hold working session with Jace, Rama, and Pow Hwee to freeze the baseline list of risk statements. | Michelle | Jace, Rama | 28 Sep | 29 Sep | Baseline risk register frozen. |

---

### Stage 3: Risk Analysis & Evaluation
*Goal: Calibrate Likelihood and Impact on the GovTech 5x5 grid.*

| Code | Activity | Lead | Support | Start | EDC | Deliverable |
|---|---|---|---|:---:|:---:|---|
| **3.1** | Prep draft 1 to 5 Impact and Likelihood scores with justifications across Financial, Ops, Legal, and Reputational impacts. | Michelle | Jobelle | 30 Sep | 02 Oct | Pre-workshop scoring sheet. |
| **3.2** | Run scoring workshop with Rama, Pow Hwee, Security POC, and Jace to challenge and calibrate current risk levels. | Jace | Michelle, Rama | 05 Oct | 07 Oct | Workshop notes and agreed current risk matrix. |
| **3.3** | Isolate priority risks (`PROJ-1` Source Data, `PROJ-2` Stale Records, `PROJ-3` Dependency Slip) for treatment deep-dive. | Michelle | Jace | 07 Oct | 09 Oct | Filtered priority risk dossier. |

---

### Stage 4: Risk Treatment & Residual Calibration
*Goal: Assign mitigations, bind email owners, and pull residual risk to Med-High or below.*

| Code | Activity | Lead | Support | Start | EDC | Deliverable |
|---|---|---|---|:---:|:---:|---|
| **4.1** | Map treatment options (Mitigate, Transfer, Accept, Avoid) and specify concrete technical compensating controls. | Michelle | Rama, Pow Hwee | 12 Oct | 15 Oct | Treatment column populated for all 40 rows. |
| **4.2** | Bind every mitigation to a specific individual action party with official gov email and a strict pre-launch due date. | Jobelle | Michelle | 14 Oct | 19 Oct | 100% email binding checked off. No role placeholders. |
| **4.3** | Recalibrate residual Likelihood and Impact. Confirm zero residual High or Very High risks remain. | Jace | Michelle, Rama | 20 Oct | 22 Oct | Residual profile showing all rows at Med-High or below. |
| **4.4** | Sign off on treatment plan with Pow Hwee and Adrian. | Adrian | Jace, Michelle | 22 Oct | 23 Oct | Treatment memo signed off. |

---

### Stage 5: IDSC Pack & Formal Risk Acceptance
*Goal: Table board paper and get residual risk signed off.*

| Code | Activity | Lead | Support | Start | EDC | Deliverable |
|---|---|---|---|:---:|:---:|---|
| **5.1** | Draft IDSC board paper: executive summary, residual risk table, and formal approval asks. | Michelle | Jace | 21 Oct | 26 Oct | Draft IDSC paper ready for review. |
| **5.2** | Map risk register directly against SSP controls `pm-2` and `pm-4`. | Jace | Michelle | 23 Oct | 28 Oct | SSP Risk Management Annex complete. |
| **5.3** | Pre-brief Agency CISO / ACISO to clear questions before committee circulation. | Jace | Adrian | 27 Oct | 30 Oct | Written CISO endorsement to table paper. |
| **5.4** | Package and dispatch full submission pack to IDSC Secretariat. | Jace, Jobelle | Michelle | 29 Oct | 30 Oct | Submission confirmation from Secretariat. |
| **5.5** | Present to IDSC Chairperson / Head of Agency; secure formal signed residual risk acceptance. | Adrian | Jace, Michelle | 05 Nov | 10 Nov | Signed IDSC residual risk approval certificate. |

---

### Stage 6: Monitor & Operational Handover
*Goal: Transition tracking to run-state and lock in quarterly audit cadence.*

| Code | Activity | Lead | Support | Start | EDC | Deliverable |
|---|---|---|---|:---:|:---:|---|
| **6.1** | Pull all pre-launch treatment tasks into a daily tracker for Jobelle to follow through 24 Nov go-live. | Jobelle | Michelle | 09 Nov | 13 Nov | Daily pre-launch action item checklist. |
| **6.2** | Set up 2027 operational cadence: quarterly IDSC updates, annual review date, and risk trigger change log. | Michelle | Jobelle | 16 Nov | 20 Nov | Day-2 risk operating procedure doc. |
