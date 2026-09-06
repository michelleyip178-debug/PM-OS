---
date: 2026-09-03
week: 2026-W36
type: risk-assessment-scope
standard: GovTech ICT RMM — Stage 1 (Establish Scope)
scope: Career Compass MVP
system_owner: TBC (PSD — Ministry-owned system)
status: DRAFT — Stage 1 input for the pre-go-live risk-assessment session. Asset inventory and data classification to be confirmed with Rama (tech), the security POC, and the system owner.
references:
  - context-library/reference/govtech-ict-rmm-methodology.md
  - context-library/reference/govtech-low-risk-cloud-ssp-checklist.md
  - outputs/analyses/2026-09-03-W36-careercompass-project-risk-register.md
  - outputs/analyses/2026-09-03-W36-careercompass-data-security-risk-register.md
---

# Career Compass — Stage 1: Establish Scope

**Purpose:** ICT RMM Stage 1. Defines what is being assessed before impact/likelihood scoring. Without this, the project and data-security registers have no verified basis. This document is the answer to the ACISO challenge "where is your Stage 1."

**What Stage 1 must produce (ICT RMM):** system description and boundary, asset inventory, data classification, trust boundaries and data flows, and the assessment's in-scope / out-of-scope statement.

---

## 1. System description and boundary

| Attribute | Value |
|---|---|
| System name | Career Compass (Compass) — part of the OTEP Pathfinder programme |
| Function | Intranet application. Gives public officers a consolidated view of their employment profile, competencies, learning history and career-development content, sourced from central HR systems via POCDEX. |
| Hosting | Government Commercial Cloud (GCC), Singapore region |
| Deployment model | Intranet Application on GCC. Low-Risk Cloud (SSP profile applies). |
| Classification | **Restricted / Sensitive Normal** |
| Ownership | Ministry-owned (PSD). System owner: TBC — must be named before Stage 5. |
| CII / SII | No. Not Critical Information Infrastructure, not Systems of Important Interest. |
| User base | Public officers in POCDEX-onboarded agencies. Whitelist-gated at MVP. |
| Authentication | WOG AD (Windows AD) + access whitelist. SingPass not in MVP scope. |
| Assessment trigger | Pre-go-live accreditation for the MVP release (target 24–25 Nov 2026). |

### In scope for this assessment

- The Career Compass application, its database, its admin tooling, and its logs and backups.
- The POCDEX inbound interface (read).
- The CSC and Jumpstart runtime integrations (outbound calls).
- The GCC tenancy configuration that Compass controls.
- UAT and other non-production environments while they hold production or production-like data.

### Out of scope for this assessment

| Item | Why out | Where it is covered |
|---|---|---|
| POCDEX platform internal security | Separate system, separate owner (GovTech). | POCDEX's own accreditation. Compass relies on it as a trusted source. |
| Source HR systems (HRP, Cumulus, HRPS, WOGAD) | Upstream, not owned by the programme. | Their own accreditations. Compass treats their data quality as an inherited risk (PROJ-1). |
| CSC and Jumpstart internal security | Separate systems. | Their own accreditations. In scope here only for the transport channel and what Compass sends them (DATA-13). |
| GCC platform security | GovTech-run. | GCC's platform accreditation. Compass owns only its tenancy config. |
| CAM (Competency & Access Management) automated exit-cleanup | Deferred to R1. | Future release assessment. Retention risk carried at MVP as DATA-14. |
| Employment-lifecycle re-derivation feature | Proposed for R1 deferral (3 Sep Jace check-in, pending Adrian). | R1 assessment. MVP carries the stale-data risk as PROJ-2 / DATA-4 with a compensating control. |

---

## 2. Asset inventory

Seven asset groups. Each row: what it is, what data it holds, its classification, who owns it operationally, and the SSP control domains that apply.

| # | Asset | Description | Data held | Classification | Operational owner | Key SSP domains |
|---|---|---|---|---|---|---|
| A1 | **Application** | Career Compass web app + application/API layer running on GCC. Serves the officer-facing UI and the internal API. | Transient: session data, request/response payloads carrying officer profile data. No long-term store in this tier. | Restricted (processes Restricted data) | Rama / dev team | `ac`, `as`, `sd`, `is`, `st` |
| A2 | **Database** | The Compass data store. Holds the consolidated officer profile built from POCDEX plus Compass-generated and user-generated data. | Officer identifiers (NRIC, FIN, HRID, email, name); employment records (agency, grade, position, job family/function); competency data and ratings; learning history; Compass-generated derivations. | **Restricted / Sensitive Normal** | Rama / dev team | `dp`, `ac`, `lm`, `sd`, `br` |
| A3 | **Interfaces / APIs** | (a) POCDEX inbound (read, scheduled/triggered pull). (b) Compass internal API (UI to backend). (c) CSC outbound (runtime). (d) Jumpstart outbound (runtime). | In transit: full officer profile payloads (POCDEX in, internal API); identifier + context data (CSC, Jumpstart out). | Restricted (data in transit) | Rama / dev team | `dp` (transport), `as`, `ac`, `ns` |
| A4 | **GCC tenancy** | The cloud environment configuration Compass controls: network config, IAM, secrets, storage provisioning, region settings, environment separation. | Configuration and secrets (DB credentials, API keys, service-account tokens). No officer data directly, but controls access to all of it. | Restricted (config governs Restricted data) | Pow Hwee / platform | `is`, `sd`, `ac`, `cs`, `ck`, `dp-1` (residency) |
| A5 | **Admin tooling** | Internal tooling for support and operations: any admin console, DB query access, the whitelist/access-management mechanism, support-side lookup. | Read (and in some paths write) access to the full officer dataset in A2. | Restricted | Pow Hwee / support ops | `ac` (privileged access), `lm` (privileged-action logging), `is` |
| A6 | **Logs** | Application logs, API logs, access logs, audit logs. Held in the GCC log sink(s). | Potentially: identifiers and profile fragments in log lines (DATA-7); access events; privileged actions. | Restricted (until sanitisation confirmed) | Rama / Pow Hwee | `lm` (sanitisation, tamper-resistance, retention, anomaly detection) |
| A7 | **Backups** | Database backups and any snapshot/restore artefacts. Held in a GCC backup vault. | A full copy of the A2 dataset. | **Restricted / Sensitive Normal** (same as source) | Pow Hwee / platform | `br` (backup/restore), `dp` (encryption, residency), `ac` |

### Asset inventory gaps to close at the session

1. **A5 (Admin tooling) is the least-defined asset.** Who has DB query access to A2? Is there a PAM path? Is the whitelist mechanism itself access-controlled and logged? This drives DATA-12 and PROJ-20.
2. **A6 (Logs): sanitisation not confirmed.** Until it is, logs hold Restricted data and inherit A2's controls. DATA-7.
3. **A7 (Backups): residency and encryption not individually verified.** Level 0 control `dp-1` requires SG region for every store including backup vaults. DATA-15.
4. **A4 (GCC tenancy): manual, uncontrolled config changes observed** (Team 2 standup, 14 Jul, rated red). No change control on env vars / secrets. PROJ-20.

---

## 3. Data classification

**System accreditation ceiling: Restricted / Sensitive Normal.** Nothing above this may enter any asset.

### 3.1 Data categories and their classification

| Category | Examples | Classification | Sensitivity dimension | Notes |
|---|---|---|---|---|
| Direct identifiers | NRIC, FIN, HRID, work email, full name | Restricted | Confidentiality | Multiple direct identifiers per record. Drives Data Security likelihood up (ICT RMM Table 5). |
| Employment records | Agency, grade, position ID, job family, job function, appointment history | Restricted / Sensitive Normal | Confidentiality, Integrity | Grade and position are sensitive in aggregate. Integrity matters: wrong record = wrong entitlements shown. |
| Competency data and ratings | Competency framework mappings, proficiency ratings, assessment outcomes | Restricted / Sensitive Normal | Confidentiality | Ratings are personal-performance-adjacent. See exclusion rule below. |
| CV / uploaded content | Officer-uploaded CV files and their parsed content | Restricted | Confidentiality | Free-text, unpredictable content. Malware vector on upload (DATA-8). |
| Learning history | Courses taken, completion status, learning records | Sensitive Normal | Confidentiality | Lower sensitivity but still personal data. |
| Compass-generated data | Derived profile fields, recommendation outputs, consolidated views | Inherits the classification of its inputs | Confidentiality, Integrity | A derivation over Restricted inputs is Restricted. |
| Configuration and secrets | DB credentials, API keys, service-account tokens (A4) | Restricted | Confidentiality, Integrity, Availability | Compromise gives access to everything in A2/A7. |

### 3.2 Exclusion rule — data that must NOT enter the system

| Excluded data | Classification | Rule | Control status |
|---|---|---|---|
| MHA agency-specific competencies and their ratings | Confidential | Must not enter Career Compass. | Exclusion agreed in the 11 Aug classification thread, captured in the Data Sharing Form. Filter implementation and test coverage **not confirmed** (DATA-2). |
| MFA agency-specific competencies and their ratings | Confidential Cloud Eligible | Must not enter Career Compass. | Same as above. |
| MFA expected competencies (no explicit instruction) | Default to the classification of their job function | Apply the default-classification rule; do not treat as unclassified. | Rule agreed, **not tested** (DATA-2). |
| Endorsed competencies | Under review (Q4 2026 recommendation pending) | Do not build against this category until the classification is settled. | "Don't build against it" guidance recorded (open item #55). DATA-16. |

### 3.3 Classification inventory status — the gating gap

**A field-level data classification inventory does not exist.** The Data Sharing Form (locked 14 Aug) sets the classification at the interface/API-contract level. It does not go field by field across all four data origins (POCDEX, source HR systems, Compass-generated, user-generated).

This is **DATA-1, rated High, launch-gating.** Every impact score in the data-security register is provisional until this inventory is done. It is the first thing to close after the session. Owner: Michelle, with Rama for the technical field list.

---

## 4. Trust boundaries and data flows

### 4.1 Trust zones

| Zone | Contents | Trust level | Boundary control |
|---|---|---|---|
| **Z0 — Internet / public** | Not applicable at MVP. No public access. | Untrusted | N/A (no public endpoint) |
| **Z1 — WOG intranet** | Officer browsers on the government network. | Authenticated users, varying need-to-know. | WOG AD authentication + access whitelist. Authorisation model must enforce need-to-know within this zone (DATA-5, DATA-11, DATA-17). |
| **Z2 — Compass application tier (GCC)** | A1 application/API layer. | Trusted service, no persistent data. | Network config (A4), `as` access-control checks on every request, `sd` environment separation. |
| **Z3 — Compass data tier (GCC)** | A2 database, A6 logs, A7 backups. | Most sensitive. Full dataset at rest. | IAM least-privilege (A4), `dp` encryption at rest, `lm` DB audit logging + anomaly detection, `br` backup controls. Only A1 and authorised A5 paths may reach it. |
| **Z4 — POCDEX (external, trusted source)** | POCDEX platform and API. | Trusted for data provenance; its internal security is out of scope. | TLS transport (`dp-3`), API authentication, agreed field contract (Data Sharing Form). Compass validates and bounds what it ingests (exclusion filter, DATA-2). |
| **Z5 — CSC / Jumpstart (external, trusted integrations)** | CSC and Jumpstart services, called at runtime. | Trusted for their function; internal security out of scope. | TLS transport with verified ciphers/certs (DATA-13), minimal outbound payload (`as` least-data). |
| **Z6 — Admin / support (GCC + intranet)** | A5 admin tooling, DB query access, whitelist management, support lookup. | Privileged. Highest-risk human access. | Privileged-access control (`ac`), privileged-action logging + alerting (`lm-13`), access review (`ac-4`), PAM if available. **Least-defined boundary — DATA-12, PROJ-20.** |
| **Z7 — Non-production (GCC)** | UAT and other lower environments. | Lower controls, but holds production/production-like data during testing. | Environment segregation (`sd-8`), production-data purge step (DATA-6), UAT access controls matched to Restricted while real data is present. |

### 4.2 Data flows

Numbered by flow. Each crosses at least one trust boundary.

| # | Flow | From → To | Boundary crossed | Data | Controls | Risk refs |
|---|---|---|---|---|---|---|
| F1 | POCDEX ingest | Z4 → Z2 → Z3 | Z4/Z2 (external in), Z2/Z3 (into data tier) | Full officer profile payloads (identifiers, employment, competency, learning) | TLS in; API auth; **exclusion filter** for MHA/MFA Confidential data; field-contract validation; write to A2 | PROJ-1, DATA-2, DATA-3, DATA-16, DATA-17 |
| F2 | Identity resolution / consolidation | within Z3 | none (internal) | NRIC-keyed fan-out; merge of HRP/Cumulus segments; 251 officers with dual records | NRIC-first resolution rule (agreed 2 Sep); email-reuse check at record creation (**not built** — DATA-3); segment-level access rules (**not defined** — DATA-17) | PROJ-3, DATA-3, DATA-17 |
| F3 | Officer views profile | Z1 → Z2 → Z3 → Z2 → Z1 | Z1/Z2 (auth), Z2/Z3 (data read) | Consolidated profile for the authenticated officer | WOG AD auth + whitelist; **per-request authorisation / need-to-know**; least-data field minimisation per endpoint (DATA-5); response over TLS | PROJ-3, DATA-3, DATA-5, DATA-11 |
| F4 | Officer uploads CV | Z1 → Z2 → Z3 | Z1/Z2, Z2/Z3 | User-uploaded file + parsed content | **Malware scan on upload** (`as-12`, not confirmed); encryption at rest (`dp-2`); IAM restriction on the CV store; content validation | DATA-8 |
| F5 | Runtime call to CSC | Z2 → Z5 | Z2/Z5 (external out) | Identifier + context data needed by CSC | TLS 1.2+ with verified cipher/cert (DATA-13); minimal payload (`as` least-data); no more than CSC needs | PROJ-18, DATA-5, DATA-13 |
| F6 | Runtime call to Jumpstart | Z2 → Z5 | Z2/Z5 (external out) | Identifier + context data needed by Jumpstart | Same as F5 | DATA-5, DATA-13 |
| F7 | Admin / support lookup | Z6 → Z3 | Z6/Z3 (privileged read, some paths write) | Read (some write) of the full A2 dataset | Privileged-access control; **privileged-action logging + alerting** (`lm-13`, not confirmed); access review; PAM if available | DATA-11, DATA-12, PROJ-20 |
| F8 | Logging | Z2, Z3, Z6 → A6 | into log sink | Request metadata; **potentially identifiers / profile fragments** (DATA-7) | **Log sanitisation / masking** (`lm-19`, not confirmed); tamper-resistant storage (`lm-2`); least-privilege log access; retention policy | DATA-7, DATA-9 |
| F9 | Backup | Z3 → A7 | into backup vault | Full copy of the A2 dataset | Encryption at rest; **SG-region verification** (`dp-1`, Level 0 — not individually verified); access control on the vault; restore testing (`br`) | DATA-15, PROJ (availability gap — see §5) |
| F10 | Production data into UAT | Z3 → Z7 | Z3/Z7 (into lower environment) | Production or production-like officer data | Environment segregation (`sd-8`); **defined purge step + owner** (DATA-6, open item #55); UAT access controls matched to Restricted while real data present | DATA-6 |
| F11 | Config / secrets management | admin → A4 | within Z6 / into tenancy config | DB credentials, API keys, service-account tokens | **Change control on env vars / secrets** (not in place — PROJ-20); secrets management (`ck`); least-privilege on the config plane | PROJ-20 |

### 4.3 Boundary-control summary — where the gaps are

| Boundary | Control expected | Status | Risk |
|---|---|---|---|
| Z1 → Z2 (user auth) | WOG AD + whitelist | In place | — |
| Z1 → Z3 (need-to-know within authenticated users) | Per-request authorisation, field minimisation, mass-read limits | **Partly defined** | DATA-5, DATA-11 |
| Z2 → Z3 (app to data tier) | IAM least-privilege, network segmentation | Assumed, not verified | DATA-12 |
| Z4 → Z2 (POCDEX ingest) | TLS, API auth, exclusion filter | Filter **not confirmed** | DATA-2 |
| within Z3 (identity merge) | Email-reuse check, segment-level access | **Not built** | DATA-3, DATA-17 |
| Z2 → Z5 (outbound integrations) | TLS cipher/cert verification, least-data | **Not verified** | DATA-13 |
| Z6 → Z3 (privileged access) | PAM, privileged-action logging + alerting, access review | **Least-defined** | DATA-12, PROJ-20 |
| logging (F8) | Sanitisation, tamper-resistance | **Not confirmed** | DATA-7 |
| backups (F9) | SG residency, encryption, restore test | **Not individually verified** | DATA-15 |
| Z3 → Z7 (prod data to UAT) | Purge step, matched controls | **No purge step** | DATA-6 |
| config plane (F11) | Change control | **Not in place** | PROJ-20 |

---

## 5. Identification gaps this scoping surfaces

Stage 1 done properly exposes risk categories the RAID-derived registers under-cover. These should be added before scoring:

| Gap | Asset / flow | Why it matters here | Proposed |
|---|---|---|---|
| **Availability / DR / RTO-RPO** | A2, A7, F9 | No risk covers the service being down at launch, backups not restore-tested, or no failover. Backups (A7) are inventoried but there is no restore-test risk. | New PROJ risk: "backup restore not tested / no defined RTO-RPO". |
| **POCDEX outage in production** | Z4, F1 | Compass depends on POCDEX at ingest. No risk covers POCDEX being unavailable or returning bad data at go-live. PROJ-1 is data quality, not availability. | New PROJ risk under Ops-Tech Integration. |
| **Insider / privileged misuse** | A5, Z6, F7 | Covered thinly by DATA-12. The project-level operational risk (support staff browsing records) is not stated. | Confirm DATA-12 covers it, or add a PROJ operational risk. |
| **Cutover / migration integrity** | F1, F2 | No risk covers the initial data load corrupting or mis-merging records, or having no rollback. PROJ-14 is contract timing only. | New PROJ risk under Ops-Tech Integration. |
| **Audit-log sufficiency for incident scoping** | A6, F8 | DATA-9 names the tracing gap. Confirm it covers "can we detect a cross-officer disclosure after the fact" and log retention length. | Extend DATA-9 scope or add a sub-risk. |
| **Day-2 manual model has no staffing plan** | F7, PROJ-9 | PROJ-9 names the reactive model as a risk. No risk covers that manual process having no owner or not scaling. | Extend PROJ-9 or add an Operations risk. |

---

## 6. What the session needs to confirm

1. **Name the system owner.** Remove "TBC" from both registers.
2. **Confirm the asset inventory** (§2) with Rama and platform — especially A5 (admin tooling) and A7 (backups).
3. **Confirm the data classification** (§3), including the four exclusion rules, and commit an owner + date for the DATA-1 field-level inventory.
4. **Validate the trust-boundary map** (§4) with engineering — particularly the Z6 privileged-access boundary and the F2 internal identity-merge flow.
5. **Add the §5 identification gaps** to the registers before impact/likelihood scoring.
6. **Then** score impact and likelihood with this scope in hand — not before.

---

*Generated 2026-09-03. DRAFT Stage 1 input for the pre-go-live risk-assessment session. Feeds the [project risk register](2026-09-03-W36-careercompass-project-risk-register.md) and the [data security risk register](2026-09-03-W36-careercompass-data-security-risk-register.md). Format per the ICT RMM methodology (`context-library/reference/govtech-ict-rmm-methodology.md`) and the Low-Risk Cloud SSP control domains (`context-library/reference/govtech-low-risk-cloud-ssp-checklist.md`).*
