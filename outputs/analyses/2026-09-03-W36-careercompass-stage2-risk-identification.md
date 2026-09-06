---
date: 2026-09-03
week: 2026-W36
type: risk-assessment-identification
standard: GovTech ICT RMM — Stage 2 (Identify Risks)
scope: Career Compass MVP
system_owner: TBC (PSD — Ministry-owned system)
status: DRAFT — Stage 2 output for the pre-go-live risk-assessment session. Risk list is a systematic baseline walk plus scope-specific scenarios. Impact/likelihood scoring is Stage 3, not done here.
references:
  - context-library/reference/govtech-ict-rmm-methodology.md
  - context-library/reference/govtech-ict-rmm-risk-library.md
  - context-library/reference/govtech-irm-risk-register-template.md
  - outputs/analyses/2026-09-03-W36-careercompass-stage1-scope-asset-inventory.md
  - outputs/analyses/2026-09-03-W36-careercompass-project-risk-register.md
  - outputs/analyses/2026-09-03-W36-careercompass-data-security-risk-register.md
---

# Career Compass — Stage 2: Identify Risks

**Purpose:** ICT RMM Stage 2. Produces the identified risk list with the four fields Stage 2 requires fully completed: **Risk ID, Risk Type, Risk Category, Risk Statement**. Impact and likelihood are Stage 3 and are not scored here.

**Method (per the baseline library §1.1):**
1. System characteristics from [Stage 1](2026-09-03-W36-careercompass-stage1-scope-asset-inventory.md): **Intranet Application**, processes **entity information**, Ministry-owned (PSD), **not CII/SII**, on GCC (Low-Risk Cloud), integrates POCDEX / CSC / Jumpstart / WOG AD.
2. Walk every baseline risk. Any row with **"Y" in the Intranet App column** is mandatory and must be in the register.
3. Add scope-specific scenarios that the baseline does not name but the Stage 1 asset/flow/zone map surfaces.
4. Preserve baseline risk-statement wording (library §1.2). Scope-specific statements use the ICT RMM Annex B structure.
5. Reconcile against the two existing registers — what maps, what is new, what needs adding.

**Applicability filter result:** Career Compass is Intranet App + not-CII/SII + not-Infrastructure (GovTech owns the GCC platform; Compass owns its tenancy config only). So:
- **Include:** every Cybersecurity and Data Security baseline row marked Y for Intranet App.
- **Include:** every Project/Operations baseline row (all marked Y for Intranet App).
- **Exclude as mandatory:** rows that are *only* marked for CII/SII or Infrastructure — the pure network-appliance rows (firewall, IDS/IPS, DNS, router, wireless), the physical-datacentre rows, and the CII resilience rows. Some are still carried as contextual where Compass owns a slice (e.g. tenancy network config).

---

## 1. Risk Type coverage — what this programme needs

| Risk Type | In scope? | Status |
|---|:-:|---|
| **Project** | Yes | Register exists — [project register](2026-09-03-W36-careercompass-project-risk-register.md), 25 risks. This Stage 2 pass adds 5. |
| **Data Security** | Yes | Register exists — [data security register](2026-09-03-W36-careercompass-data-security-risk-register.md), 17 risks. This Stage 2 pass adds 3 and flags 2 for scope extension. |
| **Cybersecurity** | Yes | **No register exists.** The ACISO review flagged this. Stage 2 below identifies 18 mandatory Cybersecurity baseline risks. A Cybersecurity register needs to be built. |
| **Cloud Security** | Yes (GCC / SSP) | Partly covered by SSP control mapping in the reference file. A short Cloud Security sheet or an explicit "covered by SSP self-assessment" statement is needed for the accreditation pack. |

**Headline for the session:** the Project and Data Security registers are in reasonable shape as drafts. **Cybersecurity is the gap** — 18 baseline risks with no register. That is the biggest single item Stage 2 surfaces.

---

## 2. Cybersecurity risks — baseline walk (NEW register needed)

Every row below is marked **Y for Intranet App** in the baseline library and is therefore **mandatory**. Risk statements are the baseline wording, preserved. Risk IDs are `CYBER-n` working references.

| Risk ID | Risk Category | Risk Statement (baseline wording) | Scope anchor (Stage 1) | Existing coverage |
|---|---|---|---|---|
| CYBER-1 | Cybersecurity risk management | In the event that inadequate security controls are applied on the system due to the lack of a risk assessment being performed, the inadequate security controls may result in weak security controls in the system, leading to the compromise of the system. | Whole system | Partial — this assessment IS the treatment. Twins DATA-10 / PROJ (compliance). |
| CYBER-2 | Security management | In the event that agency is unable to implement security controls appropriately, due to the lack of policies, standards, and procedures, the inappropriate security controls may result in the compromise of the system. | A1, A4, A5 | None |
| CYBER-3 | Security management | In the event that the user engages in unacceptable security behaviours due to the lack of a clearly defined Acceptable Use Policy, the behaviour may result in the compromise of the system, leading to the unauthorised disclosure of classified or sensitive information. | Z1 users, Z6 admins | None |
| CYBER-4 | Information management | In the event that mishandling of classified/sensitive information occurs due to the system not being properly security classified, the mishandling of data may result in the unauthorised access, disclosure and exfiltration of classified or sensitive data. | A2, §3 classification | **Twins DATA-1** (classification inventory not done) |
| CYBER-5 | IT asset management | In the event that loss of IT assets occurs due to poorly managed asset inventory, the loss may result in the unauthorised access, disclosure and exfiltration of classified or sensitive data. | §2 asset inventory | Partial — Stage 1 §2 is the inventory; needs to be maintained |
| CYBER-6 | Access Control | In the event that abuse of authorisations due to excessive rights being granted, the unauthorised activities can result in the unauthorised disclosure of classified or sensitive data within the system. | Z6, A5, F7 | **Twins DATA-12** |
| CYBER-7 | Access Control | In the event that unauthorised access to a system due to the use of a dormant or unused account, the activities performed using this account may result in the compromise of the system. | Z1 whitelist, WOG AD | None — needs account-lifecycle / dormancy review |
| CYBER-8 | Access Control | In the event that unauthorised access to a system occurs due to the use of an unattended session, the activities performed using this account may result in the compromise of the system. | A1 session mgmt | None — session timeout / lock |
| CYBER-9 | Access control | In the event that unauthorised access to a system occurs due to the use of default authentication credentials, the activities performed using this account may result in the compromise of the system. | A1, A4, third-party components | None |
| CYBER-10 | Access control | In the event that unauthorised access to the system occurs due to an attacker obtaining the cleartext authentication credentials for the system stored or hardcoded within a script or program, the use of these credentials by an attacker may result in the compromise of classified or sensitive data within the system. | A4 secrets, F11 | **Twins PROJ-20** (manual secret changes) — extend |
| CYBER-11 | Access control | In the event that unauthorised access to a system occurs due to the use of an administrative account which does not have multiple-factor authentication, the activities performed using this account may result in the compromise of the system. | Z6, A5 | None — confirm MFA on all admin paths |
| CYBER-12 | Access control | In the event that unauthorised privileged system access occurs due to the poor management of privileged accounts, the unauthorised access may result in the compromise of the system. | Z6, A5, F7 | **Twins DATA-12** |
| CYBER-13 | ICT system management | In the event that a cyber attack on a system occurs due to the lack of monitoring controls, the attack may result in the unavailability of services to the agency. | A1, A2, A6 | Partial — DATA-9 covers data-incident tracing, not availability monitoring |
| CYBER-14 | ICT system management | In the event that an attack exploits unknown vulnerabilities on a system due to the lack of vulnerability scanning, the attack may result in the compromise of the system. | A1, VAPT | **Twins PROJ (VAPT)** — the NCS engagement is the control |
| CYBER-15 | ICT system management | In the event that the difficulty in performing security investigations occurs due to the lack of logs, the difficulty may result in not being able to know the full extent of the attack. | A6, F8 | **Twins DATA-9** (partially) — extend to security investigation, not just data tracing |
| CYBER-16 | ICT system management | In the event that misconfiguration of a system occurs due to the lack of a secure configuration baseline, the misconfiguration may result in the unauthorised access to the system. | A1, A4 | Partial — PROJ-20 (config change control); needs a hardening baseline |
| CYBER-17 | ICT system management | In the event that malware is introduced into the system due to the lack of anti-malware protection, the malware may result in the compromise of the system. | A1, F4 (CV upload) | Partial — DATA-8 covers malware scan on CV upload; needs system-wide anti-malware |
| CYBER-18 | ICT system management | In the event that timestamps for different system logs are inconsistent due to the systems' clocks not being synchronised to a common time source, the inconsistent timestamps may result in the difficulty in performing security or forensic investigations. | A6 | None — NTP / time-source sync |
| CYBER-19 | ICT system management | In the event that the inability to restore system operations occurs due to the unavailability of backups, may result in a disruption to agency operations. | A7, F9 | None — **availability/DR gap flagged in Stage 1 §5** |
| CYBER-20 | ICT system management | In the event that the unauthorised access of information stored in backup storage media occurs due to the lack of encryption of the media, the loss of information may result in the unauthorised disclosure of classified or sensitive information. | A7, F9 | Partial — **twins DATA-15** (residency); add encryption-at-rest for the vault |
| CYBER-21 | ICT system management | In the event an unauthorised or incorrect change occurs due to the lack of a proper change management process, the change may result in the unavailability of the system, leading to a disruption of Agency and business operations. | A1, A4, F11 | **Twins PROJ-20** |
| CYBER-22 | ICT system management | In the event that compromise to ICT systems occurs due to the lack of security controls on the non-production environment, the compromise may result in the disruption of business operations and exfiltration of production data. | Z7, F10 | **Twins DATA-6** (prod data in UAT) |
| CYBER-23 | ICT system management | In the event that a communications interception attack occurs due to the use of poor encryption algorithms, the attack may result in the unauthorised disclosure or modification of classified or sensitive information. | A3, F5, F6 | **Twins DATA-13** |
| CYBER-24 | Application management | In the event that a compromise of a system occurs due to an insecure application architecture design, the compromise may result in the unauthorised disclosure of classified or sensitive information. | A1 | None — architecture security review |
| CYBER-25 | Application management | In the event that the disclosure of classified or sensitive information occurs due to the verbosity of logs, the disclosure may result in the compromise of the system. | A6, F8 | **Twins DATA-7** |
| CYBER-26 | Application management | In the event that session hijacking occurs due to the lack of protection against client-side attacks, the attack may result in the unauthorised access to an application account. | A1, Z1 | None |
| CYBER-27 | Application management | In the event that an SQL injection attack occurs due to the lack of server-side input validation, the attack may result in the unauthorised disclosure of classified or sensitive information. | A1, A2 | None — VAPT should cover; needs a register row |
| CYBER-28 | Application management | In the event that access to classified or sensitive information occurs due to improper access permissions, the access may result in the unauthorised disclosure of classified or sensitive information. | A1, F3 | **Twins DATA-3 / DATA-5 / PROJ-3** |
| CYBER-29 | Application management | In the event that the compromise of the application occurs due to the lack of security testing performed on the application, the compromise may result in the unauthorised disclosure of classified or sensitive information. | A1, VAPT | **Twins PROJ (VAPT chain)** |
| CYBER-30 | Security testing | In the event that vulnerabilities in the agency's ICT systems are exploited due to the lack of security testing on the ICT systems, the exploitation of the vulnerability may result in the compromise of the ICT system. | VAPT | **Twins PROJ-5 / PROJ-6 / PROJ-25** (VAPT delivery risks) |
| CYBER-31 | Security testing | In the event that security vulnerabilities are exploited due to the lack of implementation of mitigation measures, the exploitation of the vulnerabilities may result in the compromise of the system leading to the exfiltration of sensitive information. | VAPT remediation | **Twins PROJ (remediation-timeline recovery plan)** |
| CYBER-32 | Vulnerability Management | In the event that known security vulnerabilities are exploited due to the lack of a formalised process in the identification and remediation of known security vulnerabilities, this may result in the compromise of the system leading to unauthorised access of the ICT system. | A1, SSP st-5 | None — needs a remediation-SLA process (Critical 14d / High 30d / Medium 60d per SSP) |
| CYBER-33 | Log Management | In the event that security breaches and suspicious activities may not be detected, due to a lack of log protection, monitoring and reviews, this may result in the impediment of an Agency to respond with the necessary corrective actions. | A6, F8 | Partial — DATA-9; add active monitoring/review |
| CYBER-34 | Log Management | In the event that log reviews are not performed due to a lack of resources, this may result in the impediment of an Agency to respond with the necessary corrective actions. | A6, Day-2 ops | **Twins PROJ-9** (manual Day-2 model) |
| CYBER-35 | Network security management | In the event of a malware infection initiated from a web browser occurs due to the lack of a web proxy to filter malicious web traffic, the infection may result in the compromise of the endpoint, leading to a wider compromise of the agency network. | Z1 endpoints (WOG-managed) | Contextual — WOG endpoint control, largely inherited; note as inherited |

**Cybersecurity Stage 2 result:** 35 mandatory scenarios. Roughly half twin an existing Project or Data Security risk (cross-reference, do not re-score). The **genuinely uncovered** Cybersecurity risks needing new register rows: CYBER-2, 3, 7, 8, 9, 11, 18, 19, 24, 26, 27, 32 — 12 rows. The rest are cross-references.

---

## 3. Data Security risks — baseline walk vs the existing register

Every baseline Data Security row is Y for Intranet App. Mapping each to the existing [data security register](2026-09-03-W36-careercompass-data-security-risk-register.md):

| Baseline scenario (abbreviated) | Existing DATA-n | Gap? |
|---|---|---|
| Planning and Design — no data security risk assessment | DATA-10 | Covered |
| Acquire and Store — unnecessary data collected | DATA-5 (partial), DATA-14 | Partial — add a "data minimisation at collection" row (DATA-5 is about presentation, not collection) |
| Access and Distribute — large volume exfiltrated over time | DATA-11 | Covered |
| Acquire and Store — loss of endpoint device holding data | — | **Low relevance** (no data-at-rest on endpoints by design). Note and exclude with justification. |
| Access and Distribute — poor access controls → CIA compromise | DATA-3, DATA-5, DATA-17 | Covered |
| Usage — unauthorised privileged access | DATA-12 | Covered |
| Incident Response — no file marking → slow tracing | DATA-9 | Covered |
| Usage — investigation hindered by lack of detailed logs | DATA-9 (partial) | Partial — DATA-9 is about data marking; add a "log detail sufficiency for data-incident scoping" aspect |
| Usage — attack due to lack of monitoring controls | DATA-9 (partial) | **Twins CYBER-13/33** — cross-ref |
| Access and Distribute — email to wrong recipient | — | **Low relevance** (system does not send classified data by email). Note and exclude. |
| Access and Distribute — data transferred to unauthorised location | DATA-6 (UAT), DATA-15 (residency) | Covered |
| Usage — indirect access via unsecured platforms / data dumps | DATA-6, DATA-17 | Covered |
| Acquire and Store Usage — direct access by compromising controls | DATA-3, DATA-8, DATA-11 | Covered |
| Usage — exposure of sensitive attributes, no restriction | DATA-5 | Covered |
| Acquire and Store Usage — indirect access, no segment-level control | DATA-17 | Covered |
| Acquire and Store Usage — key management compromise | — | **NEW — DATA-18 needed.** Encryption keys for data-at-rest and TLS. Maps SSP `ck`. Stage 1 A4 holds secrets. |
| Access and Distribute — unencrypted file access | DATA-8 | Covered |
| Access and Distribute — data modified in distribution, no integrity check | DATA-13 (partial) | Partial — DATA-13 is confidentiality/transport; add integrity-in-transit for POCDEX ingest (F1) |
| Usage — privileged-user exfiltration undetectable | DATA-11, DATA-12 | Covered |
| Usage — third-party-user exfiltration undetectable | — | **NEW — DATA-19 needed.** CSC / Jumpstart receive data (F5, F6); no technical control over what they do with it. Transfer/Accept candidate. |
| Access and Distribute — password in same channel as file | — | **Low relevance.** Note and exclude. |
| Access and Distribute — unsecured distribution channel | DATA-13 | Covered |

**Data Security Stage 2 result:** existing 17 rows hold up well. **New rows needed:**
- **DATA-18** — key management (encryption keys, TLS keys) poorly managed → safeguards defeated.
- **DATA-19** — data sent to CSC / Jumpstart cannot be technically controlled at the third party → exfiltration/misuse risk. Transfer or Accept with data-sharing terms.
- **DATA-20** — data minimisation at *collection* from POCDEX (distinct from DATA-5 presentation minimisation).
- **Extend DATA-13** to cover integrity-in-transit on the POCDEX ingest (F1), not just confidentiality on outbound.
- **Extend DATA-9** to explicitly cover log-detail sufficiency for scoping a data incident.

---

## 4. Project risks — baseline walk vs the existing register

All Project/Operations baseline rows are Y for Intranet App. The existing [project register](2026-09-03-W36-careercompass-project-risk-register.md) has 25 rows built from the RAID. Mapping the baseline scenarios that are NOT yet represented:

| Baseline scenario (abbreviated) | Existing PROJ-n | Gap? |
|---|---|---|
| End User Acceptance — data-privacy 'compulsion' concerns | PROJ-3, PROJ-21 (partial) | Partial — officer data-privacy perception of a consolidated profile view is not explicitly a risk. Consider PROJ-26. |
| Environmental — unplanned compliance scope from new policy | PROJ-4, PROJ-12 | Covered |
| Environmental — third-party component vulnerability (BoM / SCA) | — | **NEW — PROJ-26 needed.** No risk covers a dependency/library vulnerability. Maps SSP + CYBER. |
| Environmental — procured server/service unavailable | PROJ-5 (NCS), PROJ (POCDEX outage — Stage 1 §5) | Partial — add the POCDEX-availability risk from Stage 1 §5 |
| Environmental — fire / flood / power | — | Inherited from GCC. Note as inherited, exclude as mandatory. |
| Operations — unclear change management → high incident rate | PROJ-20 | Covered |
| Ops-Tech integration — solution adverse impact on Agency ops/policies | PROJ-1, PROJ-9, PROJ-12 | Covered |
| Ops-Tech integration — adverse impact on *other* agencies | PROJ-4 (Huiting), PROJ-14 | Covered |
| Ops-Tech integration — wrong/inadequate scope, BO missed requirements | PROJ-7, PROJ-8, PROJ-11 | Covered |
| Ops-Tech integration — poor project team composition | PROJ-17 | Partial |
| Ops-Tech integration — BO insists on specific tech before ICT validates | — | Low relevance now. Note. |
| Ops-Tech integration — unchartered policy area, untested processes | PROJ-1, PROJ-9 | Covered (CMM discovery, data-pattern learning) |
| Ops-Tech integration — key requirements omitted, user churn | PROJ-12 | Covered |
| Ops-Tech integration — poor user adoption, users not engaged early | PROJ-21 | Partial — add an adoption/change-management risk (PROJ-27) |
| Ops-Tech integration — slow management review/decision cycle | PROJ-16, PROJ-13 | Covered |
| Ops-Tech integration — deployment fails from human error | PROJ-20 | Partial — add deployment-process risk |
| Ops-Tech integration — regression from a change request | PROJ-18 (CSC SSO) | Partial — generalise beyond CSC: a regression-test-strategy risk (PROJ-28) |
| Ops-Tech integration — insufficient testing before roll-out | PROJ-10 (data prep), PROJ-19 (perf) | Partial — add a UAT-coverage/test-strategy risk (PROJ-29) |
| Project Management — buggy solution, inadequate testing | PROJ-10, PROJ-19 | Partial — see PROJ-29 |
| Project Management — not built to IM8 / standards, no consolidated checklist | PROJ-15 (AI IDSC), DATA-10 | Partial — add an IM8-compliance-checklist risk (PROJ-30) |
| Project Management — performance not optimised, no perf test env | PROJ-19 | Covered |
| Project Management — poor exception handling by design | PROJ-9 | Covered (exception queue) |
| Project Management — missing source code / VCS not managed | — | **NEW — PROJ-31 needed.** Maps SSP. |
| Project Management — slow to deploy critical patches | PROJ-32 (see below) | **NEW — PROJ-32 needed.** Ties CYBER-32 remediation SLA. |
| Project Management — security issues found late at code review | PROJ-6 (VAPT freeze), CYBER-29 | Partial |
| Project Management — URL redirect not validated | PROJ-18 (CSC course-URL workaround) | Covered — but confirm the workaround is a validated redirect approach |
| Project Management — secret key embedded / abused | PROJ-20, CYBER-10 | Covered |
| Project Management — a user can access another user's record | PROJ-3 | Covered |
| Project Management — compromised via upstream application (trust boundary) | PROJ-1 | Partial — PROJ-1 is data quality; add an "input validation on POCDEX feed" risk (PROJ-33) — twins F1 integrity |
| Project Management — backup / RTO-RPO not defined | — | **NEW — PROJ-34 needed.** The availability/DR gap from Stage 1 §5. Twins CYBER-19. |
| Project Management — poor handover docs to Ops | PROJ-9 (Day-2) | Partial — add an Ops-handover-readiness risk (PROJ-35) |
| Project Management — offboarding access rights not updated | DATA-14 (retention), CAM | Partial — CAM deferred; carry an MVP access-offboarding risk (PROJ-36) |
| Project Management — capacity management not established | PROJ-19 | Partial |

**Project Stage 2 result:** the RAID-derived 25 are solid on the *live* delivery risks. The baseline walk exposes **standing project-hygiene risks** the RAID never surfaced because they are not "on fire":

| New PROJ ID | Risk Category | Risk Statement (Annex B) |
|---|---|---|
| PROJ-26 | Environmental | In the event that the application is exploited through a third-party component due to a disclosed vulnerability in a library it depends on, the exploit may result in loss of confidentiality, integrity or availability of the system. |
| PROJ-27 | Ops-Tech Integration | In the event that user adoption is poor due to key users not being engaged early enough to preview features before UAT, the low adoption may result in the system not delivering its intended operational benefit. |
| PROJ-28 | Ops-Tech Integration | In the event that a regression is introduced into an existing feature due to no defined regression-test strategy across the whole application, the regression may result in loss of feature availability and rework close to the freeze. |
| PROJ-29 | Project Management | In the event that the solution is unstable after go-live due to insufficient end-to-end test coverage and a test strategy that was never defined at multiple granularity levels, the gaps may result in production defects and inaccurate data. |
| PROJ-30 | Project Management | In the event that the application is found non-compliant at audit due to no consolidated IM8 / standards checklist tracked through the build, the finding may result in remediation cost and a delayed accreditation. |
| PROJ-31 | Project Management | In the event that the team cannot revert or patch the application due to source code not being fully version-controlled and linked to each release, the gap may result in uncertainty and larger testing effort when a fix is needed. |
| PROJ-32 | Project Management | In the event that a critical patch cannot be deployed quickly due to the time and manpower needed to test application changes, the delay may result in a longer exposure window while the system is unpatched. |
| PROJ-33 | Project Management | In the event that the application is compromised through the POCDEX feed due to inputs from the upstream interface being trusted without sufficient validation, the compromise may result in data tampering or loss of protected data. |
| PROJ-34 | Project Management | In the event that the system cannot be restored after data loss or corruption due to no defined and tested backup, RTO and RPO, the gap may result in service unavailability that does not meet business needs. |
| PROJ-35 | Project Management | In the event that Operations cannot support the system at launch due to incomplete handover documentation on architecture, interfaces and escalation, the gap may result in avoidable downtime. |
| PROJ-36 | End User Acceptance | In the event that a departed or role-changed officer retains access due to no offboarding process while automated exit-cleanup is deferred, the stale access may result in unauthorised activity on the system. |
| PROJ-37 | Ops-Tech Integration | In the event that a procured external dependency is unavailable at go-live due to an outage at the upstream provider, the unavailability may result in the consolidated profile being unbuildable or stale. *(the POCDEX-availability risk from Stage 1 §5)* |

---

## 5. What the identification pass changes

### 5.1 New registers / sheets required

| Item | Action |
|---|---|
| **Cybersecurity risk register** | Build it. 12 uncovered rows minimum (CYBER-2, 3, 7, 8, 9, 11, 18, 19, 24, 26, 27, 32) plus cross-references to the ~23 that twin Project / Data Security risks. This is the biggest Stage 2 finding. |
| **Cloud Security** | Either a short sheet or a written statement that Cloud Security risk is covered by the Low-Risk Cloud SSP self-assessment, referenced in the accreditation pack. |

### 5.2 Rows to add to existing registers

| Register | Add |
|---|---|
| Data Security | DATA-18 (key management), DATA-19 (third-party data misuse — CSC/Jumpstart), DATA-20 (collection minimisation). Extend DATA-9 (log detail) and DATA-13 (ingest integrity). |
| Project | PROJ-26 to PROJ-37 (12 standing project-hygiene rows, above). |

### 5.3 The Stage 1 §5 gaps — now placed

| Stage 1 §5 gap | Now covered by |
|---|---|
| Availability / DR / RTO-RPO | PROJ-34 + CYBER-19 |
| POCDEX outage in production | PROJ-37 |
| Insider / privileged misuse | DATA-12 + CYBER-6 / CYBER-12 (confirmed adequate) |
| Cutover / migration integrity | **Still open** — needs a dedicated row. Propose PROJ-38: initial data load mis-merges or corrupts records with no rollback. |
| Audit-log sufficiency for incident scoping | DATA-9 extended + CYBER-15 / CYBER-33 |
| Day-2 manual model has no staffing plan | PROJ-9 + CYBER-34 (confirm PROJ-9 scope covers staffing) |

Add **PROJ-38** (cutover/migration integrity) — the one Stage 1 gap with no home yet.

### 5.4 Count after Stage 2

| Risk Type | Before | After Stage 2 |
|---|:-:|:-:|
| Project | 25 | 38 (25 + PROJ-26..38) |
| Data Security | 17 | 20 (17 + DATA-18..20) |
| Cybersecurity | 0 | ~35 identified (≈12 standalone + ≈23 cross-referenced) |
| **Total identified** | 42 | **~93** |

---

## 6. What the session needs to do with this

1. **Agree the Cybersecurity register gets built** and who builds it (likely Rama + the security POC, not the PM alone).
2. **Approve the 13 new Project rows and 3 new Data Security rows** (or reject specific ones with justification).
3. **Confirm the "low relevance — excluded" baseline rows** (endpoint data loss, email-to-wrong-recipient, password-in-same-channel, physical datacentre, pure network appliances) with the security POC, so the exclusions are on the record and defensible at audit.
4. **Then move to Stage 3** — score impact and likelihood for the full ~93-risk list using the Stage 3 tables. Not before.

---

*Generated 2026-09-03. DRAFT Stage 2 output. Systematic walk of `context-library/reference/govtech-ict-rmm-risk-library.md` against the [Stage 1 scope](2026-09-03-W36-careercompass-stage1-scope-asset-inventory.md). Feeds the [project](2026-09-03-W36-careercompass-project-risk-register.md) and [data security](2026-09-03-W36-careercompass-data-security-risk-register.md) registers and a Cybersecurity register still to be built. Risk-statement wording for baseline rows preserved per library §1.2.*
