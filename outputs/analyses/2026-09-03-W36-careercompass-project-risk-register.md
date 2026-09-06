---
date: 2026-09-03
week: 2026-W36
type: risk-register
standard: GovTech ICT RMM / DGP IRM
scope: Career Compass MVP — Project risks only (Risk Type = Project)
system_owner: TBC (PSD — Ministry-owned system)
status: DRAFT — current I/L scored from the W36 consolidated RAID; treatment columns (O–T) and residual targets to be set at Jace's pre-go-live risk-assessment session
references:
  - context-library/reference/govtech-ict-rmm-methodology.md
  - context-library/reference/govtech-ict-rmm-risk-library.md
  - context-library/reference/govtech-irm-risk-register-template.md
  - context-library/reference/govtech-low-risk-cloud-ssp-checklist.md
  - outputs/analyses/2026-09-03-W36-mvp-raid-consolidated.md
---

# Career Compass — Project Risk Register (DGP IRM format)

**Standard:** GovTech ICT RMM (6-stage methodology) + DGP IRM Risk Register Template (column schema A–T).

**Coverage:** Project risks only. Cybersecurity, Data Security, and Cloud Security risk types are separate sheets, not in this file.

**Risk statement format:** ICT RMM Annex B — "In the event that [event] due to [cause], the [threat scenario] may result in [impact]."

## How this file is scored

- **Column M (Current Risk Level)** and **Column N (Residual Risk Level)** use the DGP IRM 5×5 matrix (qualitative bands: Low / Medium / Medium-High / High / Very High). See `govtech-irm-risk-register-template.md` §4.
- **Column A (Risk ID)** is left blank for a new DGP IRM import. The `PROJ-xx` labels below are working references only — remove them before import, or keep them only when re-importing to update existing rows.
- **Column C (Risk Type)** = `Project` for every row.
- **Column D (Risk Category)** uses the DGP IRM Project allowed values: `Environmental`, `End User Acceptance`, `Operations`, `Ops-Tech Integration`, `Project Management`.
- **Column Q (Action Party)** must be an email address, not a name — placeholders below.
- Rows with **Column I = Accept** must have **Column R = Not Applicable** and O/P/Q/S left blank.
- Current I/L values are a first pass from the [consolidated RAID](2026-09-03-W36-mvp-raid-consolidated.md). They get confirmed with Rama/engineering at the risk-assessment session.

---

## Register — Columns A–N

*(Column A blank for import. Column M/N are calculated — shown here for reference.)*

### PROJ-1 — Upstream HR data quality

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Ops-Tech Integration |
| E Risk Statement | In the event that the system ingests incorrect data due to unowned upstream source-system data-quality defects, the wrong data may result in users being shown inaccurate information and outputs that identity resolution alone does not correct. |
| F Existing Controls in Place | NRIC-first identity resolution agreed (2 Sep OTG review); scope boundary set that Compass does not resolve upstream defects; no upstream-defect monitoring or ownership defined. |
| G Current Impact | Severe (4) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Severe (4) |
| K Residual Likelihood | Possible (3) |
| M Current Risk Level | **High** |
| N Residual Risk Level | Medium-High |
| L Comments | Top systemic risk from the 2 Sep OTG operational review. Team confidence that "Compass solves identity" is outrunning reality. Owner for upstream-defect detection unassigned. |

### PROJ-2 — Stale profile after employment change

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | End User Acceptance |
| E Risk Statement | In the event that a user's source record changes after first login due to the system reading it once and never rechecking, the resulting data drift may result in incorrect outputs, manual reconciliation load and loss of user trust at launch. |
| F Existing Controls in Place | Full re-derivation deferred to R1 (3 Sep Jace check-in, pending Adrian confirmation); MVP fallback = BO data-error visibility deliverable (not yet scoped). |
| G Current Impact | Severe (4) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Severe (4) |
| K Residual Likelihood | Possible (3) |
| M Current Risk Level | **High** |
| N Residual Risk Level | Medium-High |
| L Comments | Deferring the fix to R1 raises residual likelihood at go-live; the BO data-error visibility deliverable is the compensating control and must be scoped and built. |

### PROJ-3 — Cross-officer data exposure

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | End User Acceptance |
| E Risk Statement | In the event that a user is able to access another user's record due to unresolved identity-collision and cross-system identity handling at go-live, the exposure may result in unauthorised disclosure of personal data and loss of public trust. |
| F Existing Controls in Place | 3 exclusion-path UAT cases pass (OTEP-1379 / 1380 / 1221); BD-08 (shared mailbox) decision unowned, needs POCDEX; 82 production email-collision errors recorded, 7 genuine cross-person. |
| G Current Impact | Very Severe (5) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Very Severe (5) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **High** |
| N Residual Risk Level | Medium-High |
| L Comments | Privacy-incident severity — hard to defend as Accepted. Needs BD-08 decision plus an email-reuse check at record creation before go-live. |

### PROJ-4 — Employment-lifecycle scope re-cut mid-build

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Environmental |
| E Risk Statement | In the event that feature scope is re-cut mid-build due to a new upstream interface whose production data behaviour cannot be anticipated, the re-scoping may result in the feature deferring to a later release and an unscoped fallback deliverable entering the current release. |
| F Existing Controls in Place | Decided at 3 Sep Jace check-in, pending Adrian confirmation; MVP position reframed to "learn the data patterns during MVP". |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Possible (3) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | Fallback deliverable needs scoping and an owner. Confirm with Adrian, then communicate the 19 Oct UAT change to Huiting's team. |

### PROJ-5 — NCS incremental reporting has no fallback

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Environmental |
| E Risk Statement | In the event that the security-testing vendor will not release findings incrementally due to the arrangement not being contractually agreed, the absence of a fallback may result in the remediation-timeline recovery plan failing and the security sign-off slipping. |
| F Existing Controls in Place | Rama to send a follow-up email to NCS requesting incremental release; no Plan B defined; remediation-timeline recovery plan assumes NCS cooperation. |
| G Current Impact | Severe (4) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Severe (4) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | Squad sync 1 Sep — named one of two top critical-path items. Needs a defined contingency if NCS won't shift cadence. |

### PROJ-6 — CIE/CV retraining lands inside the VAPT freeze

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Environmental |
| E Risk Statement | In the event that a model-retraining change lands inside the security-testing freeze window due to blocked input data and overlapping staff leave, the mid-freeze change may result in a full security-testing cycle being retriggered. |
| F Existing Controls in Place | Team plans to characterise any resulting change as minor/logic-only to avoid retriggering a full VAPT; technically unconfirmed, Victor to weigh in. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Possible (3) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | Get Victor's technical read on the change-scope classification before 7 Sep. |

### PROJ-7 — Employment-profile epic has no end-to-end owner

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Ops-Tech Integration |
| E Risk Statement | In the event that acceptance-criteria and architecture decisions for a feature area are not made due to it having task-level owners but no end-to-end accountable owner, the gap may result in the required decisions, design reviews and deliverables stalling with no one to convene them. |
| F Existing Controls in Place | Task owners named (Michelle — test-case authoring; Imelda — prioritisation; Adrian — scope / Huiting comms); no end-to-end owner. Proposed resolution: rolls up under Imelda's Epic 2 (My Development, OTEP-68). |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | Identified 3 Sep. Same failure mode as the 6 Jul SteerCo blockers. Escalate to Adrian to confirm the Epic 2 home. Partly mitigated if the R1 scope deferral (PROJ-4) confirms. |

### PROJ-8 — Multi-hat display model undefined

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Ops-Tech Integration |
| E Risk Statement | In the event that expected system behaviour for a complex user scenario is disputed in late-stage UAT due to the presentation model being undefined while the architecture can technically support it, the undefined UX may result in rework and UAT failures close to the freeze. |
| F Existing Controls in Place | Architecture can merge competencies and support multiple job IDs; display rules not agreed; blocked on BD-01 / BD-02 / BD-03. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | PM team to land the display rules. Moves to post-MVP if the scope deferral confirms. |

### PROJ-9 — No proactive drift detection

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Ops-Tech Integration |
| E Risk Statement | In the event that data-transition problems are found only through user complaints or audits due to no drift-detection or exception-handling design, the absence of monitoring may result in a manual, reactive Day-2 operating model at launch. |
| F Existing Controls in Place | None. The OTG root-cause analysis proposes an exception queue (processed / rejected / needs-review) as the fix; currently unowned. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Possible (3) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | The exception queue is also the Day-2 support model. Design it or explicitly accept a manual Day-2 process with a named owner before launch. |

### PROJ-10 — UAT data-prep ownership unassigned

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Ops-Tech Integration |
| E Risk Statement | In the event that test-ready UAT scenarios cannot be executed due to unassigned ownership of UAT data preparation, the missing test data may result in UAT coverage gaps before the freeze. |
| F Existing Controls in Place | Movement and identity test cases drafted; data-prep ownership unassigned since W35. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | Raise as a named standup blocker; assign to Rama / Pow Hwee. Moves to post-MVP if the scope deferral confirms. |

### PROJ-11 — End-September freeze unsized

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Project Management |
| E Risk Statement | In the event that a feature build misses its development freeze due to no effort sizing while an external UAT start date fixes the deadline, the unsized commitment may result in a late miss with no recovery room before the next release. |
| F Existing Controls in Place | End-Sept freeze tracked (open item #61); four scoping frames reconciled; no engineering sizing done. Partly overtaken by the 3 Sep scope-deferral decision. |
| G Current Impact | Severe (4) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | If the R1 deferral (PROJ-4) confirms, this drops to Low–Medium. If not, size Tier 1 immediately once BD-01–04 land. |

### PROJ-12 — Scope / stakeholder direction keeps shifting

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Project Management |
| E Risk Statement | In the event that delivered work is reworked due to senior-stakeholder direction shifting after decisions are set, the scope instability may result in wasted engineering effort, schedule slippage and reduced team confidence. |
| F Existing Controls in Place | Decisions logged in the decisions-log; MVP guardrails held; drift surfaced to Adrian early. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Possible (3) |
| M Current Risk Level | **Medium-High** |
| N Residual Risk Level | Medium |
| L Comments | Recurring pattern since PM Weekly 11 May. |

### PROJ-13 — Key-person leave in the critical window

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Environmental |
| E Risk Statement | In the event that key decision-makers are on planned leave during the critical delivery window, the coverage gap may result in delayed decisions and slowed escalation during security remediation and launch. |
| F Existing Controls in Place | Cover named: Adrian, Rama, Barry, Pow Hwee. |
| G Current Impact | Minor (2) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Possible (3) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Medium |
| L Comments | Confirm decision-authority delegation in writing before the leave dates. |

### PROJ-14 — OTG contract sunset (March 2028)

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Environmental |
| E Risk Statement | In the event that the phased rollout slips due to compounding delivery delays, the eroded buffer before the legacy-system contract hard stop may result in users losing access to the legacy system before cutover completes. |
| F Existing Controls in Place | R4 cutover held at Oct 2027 with ~5 months contract buffer; OTG onboarding for the remaining 24 agencies halted (decision 2026-06-02). |
| G Current Impact | Severe (4) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Severe (4) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Track rollout slippage against the Oct 2027 cutover; escalate if R3/R4 dates move right. |

### PROJ-15 — AI IDSC approval is a hard gate

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Project Management |
| E Risk Statement | In the event that a mandatory governance approval slips with no fallback path, the approval dependency may result in the planned go-live date being unachievable. |
| F Existing Controls in Place | Tracked as a hard gate on the go-live path; no fallback identified. |
| G Current Impact | Severe (4) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Severe (4) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Confirm the approval landed. Also SSP control `pm-4` (residual-risk acceptance gate). |

### PROJ-16 — "Raising is not escalating"

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Project Management |
| E Risk Statement | In the event that open items persist unresolved due to being repeatedly raised but never formally escalated, the pattern may result in issues accumulating undetected until they become blockers. |
| F Existing Controls in Place | W35 learning documented; each flagged item now gets one direct action, not a re-ask. |
| G Current Impact | Minor (2) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Possible (3) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Medium |
| L Comments | Process risk. |

### PROJ-17 — Employment-lifecycle engineering capacity unconfirmed

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Project Management |
| E Risk Statement | In the event that a committed feature cannot be resourced due to its engineering capacity never being confirmed, the unclear resourcing may result in a plan commitment with no team behind it. |
| F Existing Controls in Place | Scope now proposed for R1 deferral (3 Sep), which removes the unresourced commitment. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Resolved in effect if the deferral confirms. |

### PROJ-18 — CSC SSO integration reliability

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | End User Acceptance |
| E Risk Statement | In the event that users cannot reliably reach an integrated third-party service due to an intermittent SSO failure with only a workaround in place, the integration unreliability may result in a degraded launch experience and increased Day-2 support load. |
| F Existing Controls in Place | Open item #30 closed June (requirements / ownership settled); a course-URL-handling change is proposed as the workaround; regression active W36. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Medium |
| L Comments | Confirm the URL-handling workaround is the accepted fix and who owns closing it. |

### PROJ-19 — Performance testing infeasible in production

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Ops-Tech Integration |
| E Risk Statement | In the event that performance goes partly unvalidated because a production performance-test environment is not available and UAT stands in with a non-representative load profile, the environment mismatch may result in undetected performance degradation at launch. |
| F Existing Controls in Place | None. Adrian flagged W36; UAT identified as the likely performance-test environment. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Medium |
| L Comments | Define a workload model and performance-test strategy (SSP Project-Mgmt control on perf test environments). |

### PROJ-20 — Manual env-var / secret changes, no change control

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Operations |
| E Risk Statement | In the event that environments drift out of sync due to manual, uncontrolled configuration changes with no change-control mechanism, the drift may result in harder incident reproduction and unexpected cross-environment failures. |
| F Existing Controls in Place | None defined. Observed at Team 2 standup 14 Jul, rated red in that meeting's own assessment. Owner: Pow Hwee. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Maps to SSP controls `is-5` (host hardening) and `sd-8` (env segregation). Needs a change-control mechanism for env vars / secrets before the next baseline capture. |

### PROJ-21 — KPIs undefined

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | End User Acceptance |
| E Risk Statement | In the event that programme value cannot be shown at launch due to undefined KPIs and no split between delivery and outcome metrics, the measurement gap may result in an inability to demonstrate user benefit. |
| F Existing Controls in Place | Proposed North Star (% of lifecycle changes completed without manual intervention) not yet adopted; no metrics framework run. |
| G Current Impact | Minor (2) |
| H Current Likelihood | Likely (4) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Run `/metrics-framework` or `/define-north-star` before launch, not after. |

### PROJ-22 — NPL access decision parked

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | End User Acceptance |
| E Risk Statement | In the event that a user-population edge case stays unsupported due to its scope decision being parked with no owner, the deferred decision may result in a late surprise if downstream demand requires that support. |
| F Existing Controls in Place | Out of MVP scope; no explicit "not this release" decision recorded; unowned since 1 Sep. |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Send Adrian a clean yes/no; route to a documented decision even if the answer is "not now". |

### PROJ-23 — NRIC-only identity model limits

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Ops-Tech Integration |
| E Risk Statement | In the event that user-base expansion or identity-transition cases grow while the identity model is keyed on a single identifier, the model's limits may result in rework of historical data that assumes an identity continuity the identifier does not guarantee. |
| F Existing Controls in Place | Deferred by design for MVP; watch items set (WD onboarding roadmap, SingPass requirements, non-POCDEX agency expansion). |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Accept |
| J Residual Impact | Moderate (3) |
| K Residual Likelihood | Unlikely (2) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Medium |
| L Comments | Accept row — Column R = Not Applicable. Revisit on any of the three watch triggers. |

### PROJ-24 — VAPT closure-date discrepancy unreconciled

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Project Management |
| E Risk Statement | In the event that security-testing closure is planned inconsistently because a date discrepancy was never reconciled against the overall sign-off framing, the unreconciled dates may result in downstream milestones anchored to the wrong date. |
| F Existing Controls in Place | ~7 Nov treated as the working date; line-by-line reconciliation not done; no owner assigned to it. |
| G Current Impact | Minor (2) |
| H Current Likelihood | Possible (3) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Assign the reconciliation; likely already superseded by the ~7 Nov framing. |

### PROJ-25 — NCS PO issuance chain (RESOLVED)

| Field | Value |
|---|---|
| B Applicable? | Yes |
| C Risk Type | Project |
| D Risk Category | Project Management |
| E Risk Statement | In the event that the security-testing start is delayed because procurement approval is a multi-step sequential internal chain with no parallelisation, the chain dependency may result in the vendor being unable to start work or obtain the required access. |
| F Existing Controls in Place | **PO issued — confirmed in the 2 Sep email update**, ahead of the ~4 Sep expectation and before the 7 Sep VAPT start. Residual action: confirm NCS has infrastructure access provisioned (the chain's last step). |
| G Current Impact | Moderate (3) |
| H Current Likelihood | Unlikely (2) |
| I Risk Treatment | Mitigate |
| J Residual Impact | Minor (2) |
| K Residual Likelihood | Rare (1) |
| M Current Risk Level | **Medium** |
| N Residual Risk Level | Low |
| L Comments | Kept for the audit trail. Column R = Implemented/Completed once NCS infra access is confirmed. |

---

## Columns O–T — Treatment details (to complete at Jace's session)

Every row with **Column I = Mitigate** needs O, P, Q, R, S filled (DGP IRM template §5, guideline 4). Column Q must be an **email address**. The Accept row (PROJ-23) takes `Not Applicable` in R and leaves O/P/Q/S blank.

| Risk ID | P Treatment Action (draft) | Q Action Party | R Status | S Due Date |
|---|---|---|---|---|
| PROJ-1 | Name an owner for upstream-defect detection and monitoring; define a reconciliation / discrepancy view; decide Mitigate vs Accept-with-IDSC-sign-off for launch | *rama's email* + ops lead | Draft | TBC |
| PROJ-2 | Confirm R1 deferral with Adrian; scope and build the BO data-error visibility deliverable as the MVP compensating control | michelle.yip178@... | Draft | TBC |
| PROJ-3 | Make the BD-08 (shared mailbox) decision with POCDEX; implement an email-reuse check at record creation | *POCDEX owner's email* | Draft | before go-live |
| PROJ-4 | Confirm scope deferral with Adrian; communicate the 19 Oct UAT change to Huiting's team; scope the fallback deliverable | michelle.yip178@... | Draft | this week |
| PROJ-5 | Rama sends the incremental-reporting request to NCS; define a Plan B if NCS declines | *rama's email* | Draft | before 7 Sep |
| PROJ-6 | Victor confirms whether CIE/CV retraining is a minor/logic-only change | *victor's email* | Draft | before 7 Sep |
| PROJ-7 | Escalate to Adrian to confirm the epic rolls up under Imelda's Epic 2; name the accountable owner | *adrian's email* | Draft | this week |
| PROJ-8 | PM team lands the multi-hat display rules (or defers formally with the R1 scope) | *imelda's email* | Draft | TBC |
| PROJ-9 | Design an exception queue (processed / rejected / needs-review) with owners by failure type, or accept a named manual Day-2 process | *rama's email* | Draft | before Sprint 9 design lock |
| PROJ-10 | Assign UAT data-prep ownership (Compass ITC vs joint POCDEX ask) | *rama's email* / *pow hwee's email* | Draft | before Tier-1 execution |
| PROJ-11 | If deferral confirms, close; if not, size Tier 1 once BD-01–04 land | *rama's email* | Draft | after BD decisions |
| PROJ-12 | Continue logging every scope shift in the decisions-log; hold the MVP line; surface drift to Adrian early | michelle.yip178@... | Implementation in Progress | ongoing |
| PROJ-13 | Confirm decision-authority delegation in writing before the leave dates | *jace's email* | Draft | before 5 Oct |
| PROJ-14 | Track R1–R4 rollout slippage against the Oct 2027 cutover; escalate if dates move right | *adrian's email* | Draft | ongoing |
| PROJ-15 | Confirm AI IDSC approval landed; escalate to Adrian same day if slipped | *jace's email* | Draft | now |
| PROJ-16 | Continue the "one direct action, not a re-ask" practice for flagged items | michelle.yip178@... | Implementation in Progress | ongoing |
| PROJ-17 | Close on confirmation of the R1 deferral | *adrian's email* | Draft | this week |
| PROJ-18 | Confirm the course-URL-handling workaround is the accepted fix; name the owner to close it | *rama's email* | Draft | before go-live |
| PROJ-19 | Define a workload model and performance-test strategy; confirm UAT as the perf-test environment | *rama's email* | Draft | before UAT sign-off |
| PROJ-20 | Implement a change-control mechanism for env vars / secrets before the next baseline capture | *pow hwee's email* | Draft | TBC |
| PROJ-21 | Run `/metrics-framework` or `/define-north-star`; adopt the North Star metric | michelle.yip178@... | Draft | before launch |
| PROJ-22 | Send Adrian the NPL yes/no; route to a documented decision | *adrian's email* | Draft | this week |
| PROJ-23 | *(Accept — no treatment action)* | — | Not Applicable | — |
| PROJ-24 | Assign the 16 Oct vs 23 Oct reconciliation | *rama's email* | Draft | TBC |
| PROJ-25 | Confirm NCS has infrastructure access provisioned, not just the PO | *jace's email* | Implementation in Progress | before 7 Sep |

---

## Risk profile summary (Stage 6 categorisation)

| Current Risk Level (Column M) | Count | Risk IDs |
|---|:-:|---|
| **Very High** | 0 | — |
| **High** | 3 | PROJ-1, PROJ-2, PROJ-3 |
| **Medium-High** | 9 | PROJ-4, PROJ-5, PROJ-6, PROJ-7, PROJ-8, PROJ-9, PROJ-10, PROJ-11, PROJ-12 |
| **Medium** | 13 | PROJ-13, PROJ-14, PROJ-15, PROJ-16, PROJ-17, PROJ-24, PROJ-25, PROJ-18, PROJ-21, PROJ-22, PROJ-19, PROJ-20, PROJ-23 |
| **Low** | 0 | — |

**Residual targets** bring every row to Medium-High or below. With no row staying at **High** as a residual, the residual-risk acceptance authority (per the ICT RMM approval matrix, Ministry-owned system, Project risks) is:

- **Medium-High residual → Chairperson of IDSC or Head of Agency**
- **Medium / Low residual → Chairperson of PMC or CIO / System Owner**

That is the acceptance pack Jace's pre-go-live risk-assessment session produces for the IDSC. It satisfies SSP controls `pm-2` (risk assessment) and `pm-4` (IDSC residual-risk approval), and ICT RMM Stage 5.

---

*Generated 2026-09-03 from the [consolidated RAID](2026-09-03-W36-mvp-raid-consolidated.md). DRAFT — current I/L is a first pass; treatment options, residual targets, action parties (as email addresses), and due dates to be set with Rama and engineering at the pre-go-live risk-assessment session. Format per `context-library/reference/govtech-irm-risk-register-template.md`.*
