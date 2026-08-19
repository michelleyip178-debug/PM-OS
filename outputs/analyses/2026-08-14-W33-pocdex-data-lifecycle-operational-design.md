# Career Compass — Data Requirements, Data Lifecycle & Operational Design (Final Draft)

*Companion Document to the Career Compass Business Requirements Document (BRD)*

Prepared to support the POCDEX data-sharing approval submission and to set out data, lifecycle, governance and operational coverage for the Data Office's review.

**Status:** DRAFT — for internal review before POCDEX submission

**Prepared by:** Career Compass Product Team

**Date:** 2026-08-13

---

## Document Status & Context

Companion to the existing Career Compass BRD (does not replace it). Written to close gaps repeatedly raised by POCDEX/Data Office across the "Career Compass — POCDEX Data Requirements" and "Draft for Data Sharing Approval for CareerCompass" correspondence (24 Jul – 9 Aug 2026): data coverage, current/historical/future scope, source-of-truth ownership, officer lifecycle handling, Day 2 operational troubleshooting, and audit/retention.

**⚠️ OPEN ITEM:** As of 9 Aug (8:28pm), several items were still open, responses requested by 11 Aug. Confirm current status of each in Section 9 before finalising/submitting.

**Key dates:** UAT window 11–28 Aug 2026 (incl. defect fixing/stabilisation); Production Soft Launch 12–17 Nov 2026; Production Go-Live (Pilot Agencies) 24 Nov 2026. POCDEX proposed ≥25 additional baseline test scenarios beyond Compass's existing 20/21-persona test plan.

---

## 1. Executive Summary

**Purpose:** document Career Compass's data requirements, lifecycle, operational considerations, governance assumptions and integration design in support of the POCDEX data-sharing approval.

**Objective:** Career Compass requires employment/competency data to verify eligibility (WOG AD + POCDEX employment status), construct officer profiles, map competencies, recommend opportunities, support Day-2 troubleshooting (Ops Portal, L1), and support audit/access reviews.

**MVP Scope:**
- Active officers only, six MVP agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) — Wave 1: PSD+ESG (~1,600 users); Wave 2: MDDI+URA (~1,900); Wave 3: MCCY+CAAS.
- Real-time POCDEX lookup, performed once at first login only. No re-call on subsequent logins for MVP.
- Core profile/competency mapping (Job ID, Job Family, Job Function, Job Grade → Expected Competencies).
- Ops Portal for L1 troubleshooting (Central Users call POCDEX live, compare vs. stored).
- No bulk historical migration. No terminated-officer lifecycle automation (WOG AD is sole access gate for MVP; no CAM yet).

**Post-MVP Scope:**
- CAM integration (push-based, email identifier + NRIC fallback).
- Automated lifecycle mgmt — POCDEX re-call every login (Release 1).
- Employment profile versioning (OTEP-831).
- Elimination of manual data patching / upstream sync issues (OTEP-830).
- Employment profile lifecycle capability, ~2-3 weeks post-MVP, needing a dedicated POCDEX testing round (Section 9, Appendix B).

---

## 2. Data Requirement Matrix

| Data Domain | Field | Purpose | MVP? | Historical? | Current? | Future? |
|---|---|---|---|---|---|---|
| Officer Identity | POCDEX UID | Primary API key; HR ID cross-reference in Ops Portal/IMTL | Yes | No | Yes | No |
| Officer Identity | Email address (login ID) | Primary identifier linking WOG AD login to POCDEX record — **NOT NRIC** (see Section 3 risk) | Yes | No | Yes | No |
| Officer Identity | NRIC | Fallback lookup for CAM-driven email changes (post-MVP only) | Post-MVP | No | Yes | No |
| Officer Identity | HR ID (HRPS PERNR / Cumulus Worker Number) | Day-2 troubleshooting (IMTL, Support Guidelines) — not used by CC logic | Yes (ops only) | No | Yes | No |
| Employment | Agency (POCDEX Agency Code) | Current agency display; gates MVP 6-agency access | Yes | No | Yes | No |
| Employment | Position ID | Competency mapping; troubleshooting | Yes | No | Yes | No |
| Employment | Job ID | Competency mapping — must match HRPS/Cumulus source exactly | Yes | No | Yes | No |
| Employment | Job Family Code | Competency mapping — must match source exactly | Yes | No | Yes | No |
| Employment | Job Function Code | Competency mapping — must match source exactly | Yes | No | Yes | No |
| Employment | Job Grade ID (JR/MX series) | Competency + recommendation eligibility (JR8/JR7 ring-fencing — def. unclarified, Section 9) | Yes | No | Yes | No |
| Employment | Business/Employment Title | Display. Business Title = Cumulus only, not HRPS | Yes | No | Yes | No |
| Employment | Secondment/Deployment Type Indicator | Active working position; filters "holding" positions | Yes | No | Yes | No |
| Employment | Staff Allocation % (multi-hat) | Primary position for multi-position officers ("highest allocation" rule) | Yes | No | Yes | No |
| Employment | Employment Status (ACTIVE/INACTIVE/NPL/Contingent) | Login eligibility gate; drives Ops error responses | Yes | No | Yes | No |
| Competency | Expected Competencies | Gap analysis — tied to role, not individual | Yes | No | Yes | No |
| Competency | Self-Assessed Competencies | Career planning | Future | No | Yes | No |
| Competency | Endorsed Competencies | Personal to individual — ownership/retention undecided (Section 9) | Future | Potentially | Yes | No |
| Competency | Agency-specific (MHA, MFA) | **Excluded from MVP** — data minimisation. MHA=Confidential, MFA=Confidential Cloud Eligible. Must be written explicitly into Data Sharing Form. | No | No | N/A | No |

**Business justification detail:** Job Family/Function/ID/Grade + Agency Code are a linked key set — "consistently used across Career Compass, Role Profile, and Competency data." If one is missing/mismatched, competency mapping fails silently. Main/Job/Family/Function Indicators exist in the API "to help Compass appreciate priority in the decision engine" — whether CC's engine actually consumes these is an open item. Owner Agency Code is present in the API but not in the Data Sharing Form — needs an explicit business rationale answer (Section 9).

---

## 3. Data Coverage Requirements

**Current data:** the only category in active MVP use (login match, recommendations, profile generation).

**Historical data:** none required for MVP. POCDEX itself doesn't hold historical data ("may need to tap on ODIN2 info. To be discussed again") — track as a separate integration risk, not an assumed POCDEX deliverable.

**Future-dated data:** not required — confirmed directly: "Do Compass need future hire/termination information in advance? ... seems like not the case." Accounts simply inactivate based on current employment status.

**Population/scope exclusions:**
- Cumulus Casual ≠ TIVO Casual/temp — correct exclusion is TIVO, not a blanket "Casual" label. Confirm the current form reflects this.
- "Holding" deployment positions filtered at the POCDEX API level — CC doesn't need to filter itself.
- Contingent workers (HRPS/Cumulus/TIVO) excluded per TC14.
- Only 6 MVP-whitelisted agencies in scope; others get an API error (codes TBC).
- MFA agency-specific competencies to be excluded from HRPS extraction.

**NPL handling — ✅ RESOLVED 14 Aug:** officers on NPL >90 days are not passed to CC at all (excluded before reaching CC). NPL <90 days remain active, shared normally. Confirms the 31 Jul correspondence; resolves an apparent (but not actual) conflict in the Support Guidelines' phrasing. **Still open:** rationale for maintaining a separate inactive/active NPL record, and what API shape (full load vs. delta) that needs (Open Item #11).

---

## 4. End-to-End Data Lifecycle

**Flow 1 — Employment Data Acquisition:** HRPS/Cumulus → POCDEX → CC API → CC Database → Profile Generation. MVP: once, at first login only. This is why transfers/corrections/position changes after first login are edge cases requiring the Ops Portal.

**Flow 2 — Officer Login:** WOG AD → Email match vs. POCDEX → Employment Validation → Profile Generation (first login only) → Home. WOG AD is the first gate — if it blocks a disallowed login, CC never gets a say. This is how CC mitigates the absence of CAM-driven deprovisioning during MVP.

**Flow 3 — Competency Mapping:** Job ID + Job Family + Job Function + Job Grade → Expected Competencies (role-based) → Gap Analysis → Opportunity/Course Matching.

**Flow 4 — Account Lifecycle Management (Post-MVP):** Officer Status Change (HRPS/Cumulus) → POCDEX → CAM (push) → CC (validates against known email; falls back to NRIC lookup via POCDEX API if not found) → Update Access Status.

**⚠️ OPEN ITEM:** Directionality mismatch — CAM is push, POCDEX-Compass is pull. If an officer's email changes, "how does CAM update this officer record using CAM's latest email... when Compass don't even have this info?" CC's mitigation (re-validate email at login, fall back to NRIC) is confirmed **required for R1** — i.e., does not exist yet for MVP.

**Flow 5 — Ops Portal Live Comparison (MVP Operational Safety Net):** Ops Central User request → Ops Portal calls POCDEX live → Compare vs. stored CC profile → Identify discrepancy → Manual data recovery/patch. Exists specifically because CC doesn't auto-refresh after first login — the primary Day-2 mechanism until CAM + per-login calls are built (Section 7.2).

---

## 5. System of Record / Source of Truth

| Data Element | Source of Truth | Consumer | Notes |
|---|---|---|---|
| Employment Status | POCDEX (via HRPS/Cumulus) | CC | Captured once at first login, not refreshed |
| Agency Information | POCDEX | CC | Determines MVP whitelist eligibility |
| Position Information | POCDEX | CC | Filtered by login email + MVP agency at API layer |
| Job Family/Function/Grade/ID | HRPS/Cumulus (via POCDEX passthrough) | CC | POCDEX must return values identical to source — CC doesn't independently validate/transform |
| Login Eligibility (first gate) | WOG AD | CC | Sole access control for terminated/ineligible officers during MVP |
| Login Eligibility (employment gate) | POCDEX status (ACTIVE/INACTIVE/NPL/Contingent) | CC | See NPL, Section 3 |
| Account Deprovisioning (post-MVP) | CAM | CC | Push-based; not built for MVP |
| Competency Mapping Logic | CC business logic | CC | Only element CC itself owns and changes |
| User Preferences | CC | CC | — |

**Principle:** one system should be responsible for changing each element. Where CC caches a value sourced elsewhere, CC is a consumer, not an owner, and must not silently diverge without a defined reconciliation path — today, for MVP, that's manual (Ops Portal).

---

## 6. Officer Lifecycle Scenarios

### 6.1 Scenario Summary

| Scenario | Situation | MVP Handling | Status |
|---|---|---|---|
| A | Active, single agency/position | Logs in, profile generated at first login | Supported |
| B | Seconded officer | Uses seconded position as working position; email/position mismatches via Ops Portal | Supported for MVP |
| C | Double-hat / multi-hat | Highest staff allocation % as primary. Cross-system double-hatting has **no POCDEX-defined rule yet**. | Open item (Section 9) |
| D | NPL/ML officer | **Resolved** — NPL >90d not passed to CC at all, reason code `ON_NPL_MORE_THAN_90_DAYS`. NPL <90d unaffected. | Supported for MVP |
| E | Officer leaves service | No automated lifecycle mgmt for MVP; WOG AD sole access control until CAM lands | Not supported (post-MVP) |

### 6.2 Gap & Risk Register

The two highest-severity items — **TC13 (email reuse / data exposure between individuals)** and **TC11 (masked/non-masked classification change going undetected)** — deserve explicit attention rather than getting lost in a 19-row list.

| Scenario | Gap | Nature | Severity |
|---|---|---|---|
| A — Active officer | No ongoing validation once cached | Design assumption | Low |
| B — Seconded officer | Old email retained → CC shows pre-secondment position indefinitely | Silent data drift | Medium |
| C — Double-hat/multi-hat | No POCDEX-defined rule across HRPS+Cumulus. **Sized:** 71 same-source multi-hat + 0 cross-source in pilot (6 agencies); 274 cross-source WoG (out of 1,905 total duplicate/multi-hat, 1,592 same-source). Worst case: officer P0157383-D9B, 4 active positions, 2 systems, 2 agencies. | Unbuilt capability | **High** — no path to fix if it occurs; 274 confirmed WoG cases, none yet in pilot |
| D — NPL/ML | **Resolved** — POCDEX excludes >90d before it reaches CC. Duration/start/end date fields still not exported, but no longer needed for eligibility. | Resolved | Low |
| E — Officer leaves service | WOG AD is sole access control; no independent check | Single point of failure | **High** — security exposure if WOG AD fails to block |
| TC1 — Agency transfer | Same as B | Silent data drift | Medium |
| TC2 — POCDEX↔non-POCDEX transfer | Email-based identity → misrecorded email causes wrong-person data. **Sized:** 19 pilot officers (0.36%) have no email on record at all — identity resolution fails outright. | Misattribution/privacy | **High** |
| TC3 — Secondment POCDEX↔non-POCDEX | Same as TC1 | Silent data drift | Medium |
| TC4 — FIN→NRIC identifier change | No reconciliation logic across identifier change. Confirmed unbuilt. | Unbuilt capability | High — will fail if it occurs |
| TC5 — Leave and rejoin | Same as TC4 — no reconciliation against old record | Unbuilt capability | High |
| TC6 — Accidental delete/recreate in POCDEX | Invisible to CC since it doesn't re-call POCDEX after first login | Latent/masked gap | Medium — surfaces once per-login calls exist |
| TC7 — NPL/ML and return | Resolved alongside Scenario D | Resolved | Low |
| TC8 — Data wrongly entered then corrected | No propagation — CC keeps showing wrong name/email/NRIC until manually patched | Silent data drift | Medium |
| TC9 — Position ID change | Same propagation gap — stale position drives wrong competency mapping | Silent data drift | Medium |
| TC10 — Title change, no Position ID change | Same gap; cosmetic only | Silent data drift | Low |
| TC11 — Job function/family change (incl. masked↔non-masked) | Masked-to-non-masked classification change could go **completely undetected**, treated as "no update" | Potential security/classification gap | **High** — looks cosmetic, may not be |
| TC12 — Duplicate POCDEX record | "Use first active entry, union competencies" — no detection, no documented POCDEX dedup. **Sized:** 71 distinct pilot officers (1.35%) affected — now measured with a proposed fix (deterministic Employment ID precedence, Section 7.2.2). | Data integrity workaround | Medium — sized, fix pending build |
| TC13 — Email reuse by new officer | New officer inherits a departed officer's data via email reuse. This is what the NRIC/FIN fallback token is designed to close — **but that fix needs privacy/security approval first (Section 9)**, so exposure remains live. | Data exposure between individuals | **Critical** — escalate above standard MVP-limitation framing |
| TC14 — Contingent worker exclusion | Reverse transition (active → later reclassified Contingent) not addressed — only Contingent→normal documented | Untested, unconfirmed symmetric | Medium |

Rows C/TC2/TC12/TC13 sized against real production extract: pilot lifecycle-risk population is **90 officers (1.7% of 5,270)** — 71 duplicate/multi-hat + 19 missing-email — plus a separately tracked 279 officers with missing job metadata. NPL (D) couldn't be sized the same way — no NPL duration/effective-date field in the export.

### 6.3 Priority Test Cases (Time-Constrained UAT Scope)

Explicitly marked "[Priority]" in source correspondence (9 Aug) — TC1 (esp. HRPS↔Cumulus cross-system secondment sub-cases), TC2, TC3, TC7, TC8, TC9. If UAT time runs short, these must not be dropped.

| # | Scenario | Stored in CC (per login) | Seen in Ops module | MVP Handling / Business Rule | Detection Fields | Status |
|---|---|---|---|---|---|---|
| TC1 | Agency transfer (incl. HRPS-internal, HRPS↔Cumulus) | Reflects original position only if old email retained | Reflects latest once available; used by Central Users to patch | Ops Portal patch is current mitigation. Post-MVP: link records across email change (e.g. via NRIC) — pending discovery. | agencyid, agencyname, employmentid | Priority; MVP gap, Ops Portal only |
| TC2 | POCDEX↔non-POCDEX transfer | Assumes accurate first-instance email — if X's email wrongly recorded as Y's, CC shows X's position when Y logs in | Reflects latest once corrected; used to patch Y's account | CC uses email as primary identifier — root cause of misattribution risk. MVP edge case; more robust ID resolution planned post-MVP. | workemailaddress/email + idnumber (NRIC/FIN) + officerId — confirmed real API fields | Priority; known MVP limitation |
| TC3 | Secondment POCDEX↔non-POCDEX | Same as TC1 | Same as TC1 | Officer may still log in if email matches first login and WOG AD allows | agencyid, employmentid | Priority; same as TC1 |
| TC7 | NPL/ML and return | **Resolved** — NPL>90d excluded entirely, not returned INACTIVE | ~~Ops sees `ON_NPL_MORE_THAN_90_DAYS` reason code~~ **Correction 17 Aug: POCDEX confirmed no reason code passed — Ops sees only `status` = Inactive, unqualified** | Already-NPL-at-launch → excluded, login blocked. NPL begins after first login → WOG AD denies. Distinguishing "expected NPL exclusion" from a real gap needs a different mechanism than the reason code originally assumed. | status only (reason code not available) | Priority; resolved 14 Aug for the exclusion logic, but Ops-visible reason code retracted 17 Aug |
| TC8 | Data wrongly entered then corrected | Same as TC2 | Same as TC2 | MVP will NOT update profile once corrected upstream. Post-MVP: applies if recurs. | firstname, lastname, workemailaddress, idnumber, officerId (anchors same-officer while base field differs) | Priority; known MVP limitation |
| TC9 | Position ID change | Same as TC2 | Same as TC2 | MVP will not update profile on Position ID change post-first-login. Flagged for post-MVP handling. | employmentid, primaryposition | Priority; known MVP limitation |

Every UAT case should test **both columns** ("stored in CC" vs. "seen in Ops module"), not just the end-state business rule — that pairing is the actual test design for validating first-login-snapshot drift.

### 6.4 Remaining Test Cases (Not Flagged Priority)

TC4, TC5, TC6, TC10, TC12, TC13, TC14. TC11 corrected here from an earlier mislabel as "Priority" — it wasn't in source correspondence. TC13 remains Critical severity in the Gap Register (6.2) regardless of its non-priority UAT tag — priority for scheduling ≠ severity if left unresolved.

| # | Scenario | MVP Handling | Detection Fields | Status |
|---|---|---|---|---|
| TC4 | FIN→NRIC identifier change | Not currently handled — requires discovery to determine record linking/reconciliation | idnumber, idType (confirmed real); officerId stays constant through conversion | Known MVP gap — post-MVP discovery required |
| TC5 | Leave and rejoin service | Not currently handled — same discovery need as TC4 | employmentid, officerId, status (confirmed real); daily-batch diffability still open (#38) | Known MVP gap |
| TC6 | Accidental delete/recreate in POCDEX | Masked by first-login-only design during MVP; post-MVP (per-login calls) resolves by design | employmentid, officerId, status | MVP: masked; Post-MVP: resolved |
| TC10 | Title change, no Position ID change | Same treatment as TC9 — no update for MVP | employmenttitle/businesstitle, employmentid unchanged | Known MVP limitation |
| TC11 | Job function/family change (incl. masked↔non-masked, grade change) | Same treatment as TC9. Intersects with R/SN masking (Section 2). | jobfamily, jobfunction, jobgrade, employmentid unchanged | Known MVP limitation — corrected from earlier mislabel |
| TC12 | Duplicate officer record | CC uses first active entry, unions competencies. Post-MVP requires discovery for expected handling. | employmentid (multiple), officerId (disambiguation anchor) | Known MVP limitation — accepted edge case |
| TC13 | New officer reuses departed officer's email | CC may show departed officer's profile to the new officer during MVP. Enhancement planned shortly post-MVP. | workemailaddress + idnumber + officerId (same email, different token/officerId) | Known MVP limitation — near-term fix planned |
| TC14 | Contingent worker exclusion | CC saves profile only at first login. Contingent at that point → no profile, can't log in. Later conversion → next login treated as first login. | sourcesystem/hrSystem, status (~~`CONTINGENT_WORKER` reason code~~ **correction 17 Aug: reason code not passed by POCDEX, `status` unqualified only**) | Supported by design, contingent on the reason-code retraction above — worth re-checking whether the design still holds without it |

### 6.5 Known MVP Limitations Summary

- CC uses officer **email**, not NRIC or POCDEX UID, as primary identifier for MVP. Foundational decision with downstream consequences for TC2, TC12, TC13.
- CC captures the employment profile **once, at first login**, no re-query on subsequent logins for MVP. Any post-first-login change (transfer, position, title, job family/function, correction) will NOT auto-reflect — requires manual Ops Portal detection/patching.
- No automated identity reconciliation for FIN↔NRIC changes, rehire-after-departure, or duplicate records — all four need post-MVP discovery.
- Double-hat officers across two HR source systems (HRPS + Cumulus simultaneously) have **no POCDEX-defined primary-position rule today** — open item, not a documented edge case.

---

## 7. Day 2 Operations Model

Replaces a generic troubleshooting table with the actual escalation process, ticket lifecycle, and SLA downstream teams already operate under, per the "Support Request Guidelines for Downstream Teams V1.0" and the "Incident Management Tracking List (IMTL) User Guide."

### 7.1 How a Compass Business User Troubleshoots an Officer's Data

**⚠️ CONFIRMED DESIGN CONSTRAINT (14 Aug):** the Ops Portal is **read-only for the BO** — BOs view and categorize a change but cannot patch, override, or link a profile directly. The case routes to a separate receiving team via a defined SOP, who apply the actual fix. **The receiving team and SOP are not yet named or written — see Open Item #29.** Every "Ops Action"/"Primary Action" column in this section should be read as categorize-and-route, not act-directly, until that SOP exists.

- Ops Portal access is restricted to the BO in production, or a person the BO specifically assigns — confirmed directly in POCDEX correspondence: "definitely not intended for the Product Development Team (ITC)."
- Central Users are expected to have access to POCDEX's logs API for troubleshooting, per direct correspondence request — **confirm this access has actually been provisioned; it was a request, not yet confirmed.**
- Not yet resolved: whether business users expect a CSV/file export as standard troubleshooting output, and whether it's obvious which system (POCDEX vs. Master Excel linking layer) a data point originated from (Open Item #10).

### 7.2 Near-Term Ops Data Recovery Capability

Direction confirmed (13 Aug): the refresh mechanism is a **daily batch job** — full-profile repull and field-by-field diff, once per day, for every officer. Not a login-triggered repull. Against the worked example (Officer A's corrected email reflected by Day 14), this means the correction is caught at the next daily run regardless of whether Officer A logs in.

#### 7.2.1 What the Production Data Actually Shows

| Metric | Pilot (6 agencies, 5,270 officers) |
|---|---|
| Lifecycle-risk population | 90 officers (1.7%) |
| — Duplicate/multi-hat identities | 71 |
| — Missing-email cases | 19 |
| Missing job metadata (separate backlog) | 279 |
| Highest-risk case observed (pilot) | 1 officer, 3 active positions, single source system |
| MDDI duplicate/multi-hat rate (outlier) | 86 of 143 records (11.4%) vs. 0.3-1.8% elsewhere |

| Metric | Whole-of-Government (152,895 records) |
|---|---|
| Potential duplicate records | 3,827 |
| Distinct affected officers | 1,905 (1.25%) |
| — Same-source multi-hat | 1,592 |
| — Cross-source multi-hat | 274 — worst case officer P0157383-D9B: 4 positions, 2 systems, 2 agencies |
| Missing email | 782 (0.51%) |
| Missing job grade | 6,064 (3.97%) |

**⚠️ Unmeasurable in this extract:** NPL duration, worker/employment type (Contingent/Casual), deployment/holding-position indicators, timestamps. NPL threshold itself is resolved (Section 3) regardless.

**Extrapolation check — Pilot ×28.6 vs. Actual WoG:**

| Category | Extrapolated (pilot ×28.6) | Actual WoG | Variance |
|---|---|---|---|
| Duplicate/multi-hat | ~2,003 | 1,905 | ~5% off |
| Missing email | ~544 | 782 | 44% understated |
| Missing job metadata | ~7,985 | 6,064 | 24% overstated |

**⚠️** Linear pilot-to-WoG scaling is a reasonable planning approximation for duplicate/identity risk but not reliable case-by-case — effort sizing should use the real WoG counts, not the extrapolation.

#### 7.2.1a Real Change-Frequency Analysis — 15 to 29 Jul 2026 Snapshots

Actual before/after comparison across a 14-day window — first real measurement of *how often* data changes, not just how much is currently wrong.

| Metric | MVP agencies | Other agencies | Total |
|---|---|---|---|
| Old snapshot records | 5,322 | 147,237 | 152,559 |
| New snapshot records | 5,342 | 147,553 | 152,895 |
| Added records | 30 | 658 | 688 |
| Deleted records | 11 | 341 | 352 |
| Records with field changes | 131 | 5,128 | 5,259 |
| Affected records | 172 | 6,127 | 6,299 |
| Changed field values | 326 | 10,614 | 10,940 |

**Real drift rate: 3.45%** of records (5,259/152,559) had ≥1 field change in 14 days — ~781 field changes/day WoG, ~23/day across 6 MVP agencies. Relevant to Open Question #23 (daily-diff effort/API-volume resizing): the "up to 152,895 calls/night" figure is the worst-case ceiling if every officer is diffed nightly, but most nightly diffs would return no change — a materially different *processing* picture, even though API call *volume* doesn't shrink (every officer still needs pulling to find the 3.45% that changed).

| Code | Agency | Old | New | Affected | Changed fields | Fields/affected |
|---|---|---|---|---|---|---|
| PSD | Public Service Division | 525 | 529 | 23 | 45 | 1.96 |
| ESG | Enterprise Singapore | 1,089 | 1,097 | 36 | 48 | 1.33 |
| MDDI | Ministry of Digital Development and Information | 754 | 755 | 39 | 110 | 2.82 |
| URA | Urban Redevelopment Authority | 1,094 | 1,093 | 16 | 31 | 1.94 |
| MCCY | Ministry of Culture, Community and Youth | 405 | 408 | 16 | 32 | 2.00 |
| CAAS | Civil Aviation Authority of Singapore | 1,455 | 1,460 | 42 | 60 | 1.43 |
| **MVP TOTAL** | All six | **5,322** | **5,342** | **172** | **326** | **1.90** |

**⚠️** MDDI shows the highest affected-record rate (39/754 = 5.17% vs. 1.46-4.38% elsewhere) *and* highest fields-per-affected (2.82 vs. 1.33-2.00). Second independent signal (first being its 11.4% duplicate rate) — two different analyses both flagging MDDI is stronger evidence it warrants its own investigation, not proof of one shared root cause.

**Field classification findings (Base Data vs. Profile Data), several don't fully reconcile with existing documentation:**

- **⚠️** MVP pilot record count discrepancy: this snapshot shows 5,322/5,342; every other figure in the document cites 5,270. ~1% gap, possibly records-vs-distinct-officers, not yet reconciled.
- **⚠️** No "Job ID" or "Position ID" field name in the real extract — only `employmentid`/`primaryposition` appear, with no `jobid` field anywhere (not even a small count). Either Job ID had zero changes in 14 days, or the six-field diff scope doesn't map cleanly onto the real schema. **Resolved by 7.2.1b below** — the extract uses warehouse column names, not API field names; Job ID is a separate, confirmed-real API field.
- **⚠️** Fields changing regularly with **no home in any existing taxonomy**: `reportingmanageruid` — the single largest field by volume in the entire dataset (2,439 changes, more than double the next-largest) — plus `departmentid`, `departmentname`, `personnelarea`, `personnelsubarea`. Given `reportingmanageruid`'s volume, it should be evaluated for diff-scope inclusion, not left out by default.
- **⚠️ Direct classification conflict:** this analysis classifies `workemailaddress`/`idnumber` as **Base Data (cosmetic)**. The Ops Data Update Discovery brief (Section 2.1) classifies the equivalent fields as a separate **Identity Data** category — specifically *because* they carry the TC2/TC8/TC9/TC13 wrong-person-mapping risk, the highest write-back risk identified anywhere. Same fields, opposite risk tier, in two documents. **Needs one resolved answer before either is used to design update-authority rules.**

> officercompetencies changes are under-indexed for MVP agencies (0.52x the other-agency rate). Worth investigating — could mean pilot competency data is genuinely more stable, or updates aren't propagating as reliably.

#### 7.2.2 Recommended Identity & Refresh Design

Four-step deterministic matching hierarchy, answering whether WOG AD matches on NRIC or email:

1. **WOG AD email** — authenticates and locates a candidate POCDEX record. Entry point, not durable identity. No result or multiple results → case stopped and queued, not guessed.
2. **NRIC/FIN token** (returned by POCDEX, stored as a secured deterministic token) — matches the candidate to the existing CC person across email changes. This is what lets CC survive an email change without misattributing a profile (the TC13 exposure). **Not yet approved — needs privacy/security sign-off (Section 9).**
3. **Employment ID** — reconciles the officer's complete active employment set deterministically, replacing "first active record returned" (the current MVP behaviour and source of TC12's ambiguity).
4. **Timestamp/version** — a signal only, never identity.

Rule stated verbatim, worth carrying forward: **"Email is not the durable identity; timestamp never establishes identity."**

The architecture lead proposed change detection based on the record's last-modified date — reasonable default, but not yet settled; timestamp's exact meaning (source-system edit vs. POCDEX ingestion vs. something else, timezone, tie-ordering) needs confirmation with the POCDEX data owner first.

**This is now moot for the daily-diff design** — because the daily job pulls and compares every officer's full profile once a day regardless of timestamp, it doesn't need timestamp semantics resolved to be built. Sidesteps the open risk entirely rather than depending on it. Timestamp meaning still matters only if a faster-than-daily (event-triggered) refresh is pursued later.

#### 7.2.2a Daily Diff — Field Scope and Change Detection

Per product direction (13 Aug), the daily job diffs each officer's newly-pulled profile against yesterday's snapshot, field by field, across a defined set:

- Agency (agencyname/agencyid)
- Job Family
- Job Function
- Job Grade
- Position/Employment (employmentid, primaryposition)

Any difference raises a `PROFILE-CHANGED` case scoped to the specific field(s), not a generic flag.

**⚠️ Superseded by 7.2.1b below** — the five-field reduction reflected the extract's column naming only, not the real API contract. Read this scope as under revision.

#### 7.2.1b POCDEX Data Request Document Found — Reconciliation and Impact

**"Request for POCDEX Data for CareerCompass" located and reviewed (14 Aug).** Resolves Open Item #27's provenance question outright — genuine, detailed, internally consistent. Materially changes earlier field-naming conclusions.

Specifies the real API contract (camelCase): `officerId, jobId, positionId, email, firstName, status, idType, idNumber, hrSystem, hrId, presentAgencyCode, jobFamilyId, jobFunctionId, jobGradeId, employmentTitle, businessTitle, primaryPosition, department` — with a documented status reason-code list (`NOT_FOUND, ON_NPL_MORE_THAN_90_DAYS, DEPLOYED_OUT_HOLDING_POSITION, AGENCY_NOT_AUTHORISED, ADJUNCT_WORKER, INTERN, CONTINGENT_WORKER, NO_ELIGIBLE_EMPLOYMENT_FOUND`). This is the API transformation layer; the 7.2.1a extract is the underlying warehouse column naming — working assumption is one dataset, two representations.

| API Field | Extract Column | Status |
|---|---|---|
| officerId | no confirmed equivalent | **Confirmed real; already load-bearing in production** to disambiguate employment records across HR systems |
| idType, idNumber | idnumber | idType confirmed real; idNumber maps to idnumber |
| status | no confirmed equivalent | Confirmed real, with a reason-code list richer than the design's own `ELIGIBILITY-CHANGED` catch-all |
| jobId | no equivalent found | Confirmed real (sample: 10021535). Absence from the 14-day extract likely means it rarely changes, not that it doesn't exist |
| positionId, employmentId | employmentid | Both confirmed; likely the same underlying record |
| presentAgencyCode | agencyid, agencyname | Confirmed; API vs. warehouse naming |
| jobFamilyId, jobFunctionId, jobGradeId | jobfamily, jobfunction, jobgrade | Confirmed; same fields |
| hrSystem, hrId, pocdexUid | sourcesystem (partial) | hrSystem likely = sourcesystem; hrId/pocdexUid no extract equivalent yet |
| email, firstName, lastName | workemailaddress, firstname, lastname | Confirmed; same fields |
| department | departmentid, departmentname | Unclear if this maps to one, both, or neither — genuinely unresolved |
| no API field found | reportingmanageruid, personnelarea, personnelsubarea, officercompetencies | **Do not appear anywhere in the Data Request document.** Strongest reading: CC never requested them, not that POCDEX doesn't have them. `reportingmanageruid` was the single largest-volume field in the entire real extract and may not be part of the API contract CC can even call today. |

**⚠️ Reverses an earlier removal (previously Open Question #36):** `officerId`, `idType`, `status`, `jobId` should be treated as confirmed real fields, not removed pending confirmation. Detection Fields (6.3/6.4), diff scope, and Change Category Taxonomy have been updated. **Caveat survives the reversal:** this describes login-time API behaviour, not daily-batch-diff behaviour — confirmed-usable-at-login ≠ confirmed-diffable-daily (Open Question #38).

**⚠️ CORRECTED 17 Aug — POCDEX has since confirmed directly that they will NOT pass a reason code.** The reason-code list below was read off POCDEX's own Data Request document and treated as confirmed on 14 Aug, but POCDEX has since said outright, in conversation, that no reason code comes through. This resolves Open Question #25 the opposite way from what this doc originally assumed — the field is real, but no typed reason travels with it. `status` alone (Active/Inactive, no qualifier) is what Career Compass can actually expect. Every downstream reference to `ON_NPL_MORE_THAN_90_DAYS`, `CONTINGENT_WORKER`, or any other named reason code (TC7, TC14, the field-mapping table, Change Category Taxonomy) needs to be read as **not available** until POCDEX says otherwise. TC7's MVP handling in particular relied on this reason code to distinguish "expected NPL exclusion" from "a real gap" — that distinction now needs a different mechanism, or doesn't hold.

**⚠️ Superseded by the correction above.** `status`'s documented reason codes are more granular than the design's own `ELIGIBILITY-CHANGED` catch-all — surface POCDEX's actual typed reason where available. *(This was true of the documented API contract; POCDEX has since confirmed the reason code itself won't be passed.)*

**Three further findings (not field-naming):**

- **⚠️ CAM integration closes the "officer who never logs in again" gap** — CC receives inactive-officer notifications from CAM and triggers lifecycle actions independently of POCDEX. None of this design currently accounts for CAM as a data source. **Confirmed for Release 1 (14 Aug).**
- **⚠️ Master data sync risk:** 5 files (Role_Profile.xlsx, Competency.xlsx, Agency.xlsx, Job Family/Function.xlsx, Job_Grades.xlsx) are manually uploaded on a **quarterly-or-on-update cadence**, end-to-end automation targeted Q1 2027. Role Profile/Competency data can be up to 3 months stale — a distinct staleness risk from the POCDEX employment-diff problem, not currently scoped anywhere.
- **⚠️ Non-functional targets now documented:** P95 API response ≤100ms; ~125,000 POCDEX API requests/month expected post-MVP (25,000 MVP monthly active sessions); 4-year retention for inactive accounts. None of these appear in this design or the PRD's Technology section yet.

#### 7.2.3 Delivery Options and Recommendation

| Option | Scope | Effort (Low–Base–High, PD) | Recommendation |
|---|---|---|---|
| 1. Manual Ops containment | Runbook, Ops views, access, audit, manual patch controls | 15–25–40 | Interim containment only — recurring lifecycle events remain manual |
| 2. Daily full-profile repull and diff (all officers) | Nightly batch pull + six-field diff, reconciliation, audit, testing | 55–85–125 (unconfirmed, see flag) | **Preferred first automation increment** |
| 3. Timestamp-triggered incremental refresh | Faster-than-daily, timestamp-based | 90–140–210 | Lower priority — daily diff already resolves most of what this was for |

**⚠️** The 55-85-125 PD estimate was originally scoped for a *login-triggered* repull. A nightly batch pulling every officer once daily is a different technical shape — drops login-integration work but adds batch scheduling/orchestration and a much higher daily API call volume. **Needs re-validation against the batch design specifically before funding** (Open Question #23).

#### 7.2.4 Delivery Timing Constraint

**⚠️ None of the above ships inside the MVP release, regardless of discovery speed.** Per direct Engineering confirmation: "these changes will not be included in the initial MVP release, as we need to maintain a code freeze for VAPT and the MVP launch." This is a post-MVP fast-follow. The architecture lead separately flagged the earlier-floated "2-3 week fast-follow" framing as unrealistic given the state of the underlying data model.

#### 7.2.5 Why This Gap Exists — Root Cause

"Product team was very focused on solving 80% of the MVP problems. DO side was very worried about sustaining support for the 20%. We were optimising for different time horizons." Both teams were right about their own priority; the friction came from not aligning the time horizon early.

#### 7.2.6 Immediate Next Steps

| Activity | Lead | Participants | Target Effort | Status |
|---|---|---|---|---|
| Validate TC1-TC14 outcomes, incl. NRIC fallback scenarios | Compass Product Lead | Product, Ops, POCDEX, WOG AD | 2 workshops | Open |
| Confirm email + NRIC/FIN fallback contract | Compass Product Lead | WOG AD + POCDEX owners | 2-3 days | Open |
| Confirm profile API and timestamp semantics | Tech lead | POCDEX owner | 2-3 days | Open |
| Sample and investigate the 90 lifecycle cases | Ops/data analyst | Pilot agencies | 3-5 days | Open |
| Design daily-diff repull and reconciliation | Tech lead | Engineering, security, Ops | 3-5 days | Open |
| Size backlog and recurring demand | Compass Product Lead | Ops/data analyst | 1-2 days | Open |
| Agree recommendation and roadmap | Compass Product Lead | Stakeholders | 1 workshop | Open |

**Case-sampling priorities (P0):** the single complex-identity officer (>2 positions); a 15-officer sample of the 71 duplicate/multi-hat cases; a 10-officer sample of missing-email cases (to establish whether cause is consistently WOG AD/POCDEX mismatch or varies). P1: a 15-officer sample of missing-job-metadata.

**Two legitimate paths if capacity is constrained — choose explicitly, not by default:**

| | Full Path (Recommended) | Fast Path (If Time-Constrained) |
|---|---|---|
| What it is | Run the 7-activity workplan, then build Option 2 | Skip discovery, stand up Option 1 directly |
| Effort | 55-125 PD, unconfirmed for batch design | 15-25 PD |
| Delivers | Automated identity resolution + daily reconciliation for every officer | Runbook, Ops views, access controls, audit — manual triage, not automation |
| Dependency | Requires 7.2.2 identity design approved first — blocked on Items 17-19 | Doesn't require 7.2.2 approval; can start immediately |
| Residual risk | Low once built | High — recurring lifecycle events stay manual; frame as interim stopgap |

#### 7.2.7 Ops Portal Queue Design — Requirements from Discovery

| Flag/Queue | Trigger | Ops Action | Priority |
|---|---|---|---|
| Identity unresolved | Email lookup returns no unique person | Categorize as Identity/contact change; route — do not link/expose any profile | P0 |
| NRIC/FIN conflict | Token missing, changed, or linked to multiple profiles | Categorize as Identity/contact change; route per SOP | P0 |
| Duplicate active records | Multiple POCDEX records for one person | Categorize as Multiple/conflicting records; route to classify duplicate vs. legitimate multi-hat | P0 |
| Profile unavailable/refresh failed | No response, timeout, reconciliation failure | Flag unresolved; receiving team retries, retains last safe snapshot | P0 |
| Eligibility changed | Inactive/NPL/contingent response | Categorize as Eligibility/status change; reason-coded, no in-portal action | P0 |
| NRIC/FIN fallback used | Email changed but token matches existing person | Categorize as Identity/contact change; route only if differences breach defined rules | P1 |
| Profile changed | Live POCDEX differs from stored on one of the diffed fields | Categorize per taxonomy (7.2.10); route material/ambiguous differences | P1 |
| Manual override active | Profile link/patch exists from prior action | Portal shows owner, reason, approval, expiry — read-only to BO | P1 |
| Missing email — newly missing | Blank today, populated yesterday | Categorize as regression, flag; route — something broke since yesterday | P0 |
| Missing email — persisting | Blank both today and yesterday | Track against existing backlog; don't re-raise daily | P1 |

Every queue category requires audit evidence (request/response ID, before/after values, or approval record) — a requirement, not a nicety.

#### 7.2.8 Ops Portal Design — Coverage Areas

| Portal Area | Purpose | Primary Action (BO, read-only) |
|---|---|---|
| Operations overview | Risk volume, service health across open cases | Drill into a queue/case — no direct action |
| Identity exceptions | Unresolved/conflicting people | Categorize as Identity/contact change; route via SOP |
| Employment exceptions | Valid multi-hat vs. duplicates | Categorize as Multiple/conflicting records; route to classify + request source correction |
| Profile differences | Before/after values across diffed fields | Categorize per taxonomy; route material/ambiguous differences |
| Refresh monitoring | Stale/failed profiles — last refresh, attempts, error, correlation ID | Flag to retry, hold, or restore last safe snapshot |
| Audit and reporting | Case timeline, evidence, decisions, approvals, overrides | Export evidence and reporting |

#### 7.2.9 Reason Codes and Severity

| Reason Code | Detection Rule | Severity | Officer-Facing Message |
|---|---|---|---|
| ID-NO-MATCH | WOG AD email returns no POCDEX person | P0 | We could not match your employment information. |
| ID-MULTI-MATCH | Email returns multiple people/tokens | P0 | Your employment information requires review. |
| ID-FALLBACK-MATCH | Email differs but NRIC/FIN token matches one person | P1 | Your employment profile is being refreshed. |
| ID-TOKEN-CONFLICT | NRIC/FIN missing, changes unexpectedly, or maps to multiple | P0 | Your employment information requires review. |
| EMP-MULTI-ACTIVE | >1 active Employment ID | P1 | Multiple employment records require review. |
| EMP-AGENCY-CONFLICT | Conflicting active agency codes | P0 | Your profile update is under review. |
| PROFILE-CHANGED | Today's pull differs from yesterday's on the 5-field diff scope | P1 | Your employment profile has been updated. |
| REFRESH-FAILED | POCDEX timeout/error/reconciliation failure | P0 | Your profile could not be refreshed. |
| ELIGIBILITY-CHANGED | Inactive/NPL/contingent/non-pilot | P0 | Your access status has changed. |
| OVERRIDE-ACTIVE | Prior receiving-team action linked/patched a profile | P1 | Contact support if your details are incorrect. |

These are detection logic, not an action log — none describe a BO in-portal action. A reason code firing means the case is categorized and routed; the receiving team's SOP governs what happens next. `PROFILE-CHANGED` spans three categories (Organisational move, Role change, Classification change) and should likely be split once the taxonomy is implemented.

#### 7.2.10 Change Category Taxonomy for the Read-Only BO View

| Category | What Changed | Underlying Fields | Maps to Reason Code(s) |
|---|---|---|---|
| Organisational move | Officer moved agency | agencyid, agencyname | EMP-AGENCY-CONFLICT, PROFILE-CHANGED |
| Role change | Position changed | employmentid, primaryposition | PROFILE-CHANGED, EMP-MULTI-ACTIVE |
| Classification change | Job family/function/grade changed | jobfamily, jobfunction, jobgrade | PROFILE-CHANGED |
| Reporting/org-structure change | Reporting manager/department changed (not in current diff scope) | reportingmanageruid, departmentid, departmentname, personnelarea, personnelsubarea | PROFILE-CHANGED (proposed, none mapped yet) |
| Identity/contact change | Email/name changed, or doesn't resolve to one person | workemailaddress/email, firstname, lastname, idnumber/idNumber, idType, officerId | ID-NO-MATCH, ID-MULTI-MATCH, ID-FALLBACK-MATCH, ID-TOKEN-CONFLICT |
| Eligibility/status change | Active/Inactive/NPL/Contingent changed | status (confirmed real, richer reason-code list than ELIGIBILITY-CHANGED) | ELIGIBILITY-CHANGED |
| Multiple or conflicting records | Duplicate or multi-hat detected | employmentid (multiple), officerId (confirmed real, production-used) | EMP-MULTI-ACTIVE, EMP-AGENCY-CONFLICT |

**⚠️** Design proposal, not yet confirmed with POCDEX or the receiving team (Open Item #29). Seventh category added to cover `reportingmanageruid` + 4 department/personnel fields — none of which appear in the POCDEX Data Request document either, sharpening rather than resolving that gap.

### 7.3 Escalating to POCDEX — Process & Minimum Information

Per Support Request Guidelines, before escalating, downstream users must collect: POCDEX UID, HR ID, current email (with due diligence the profile is active), latest Position ID(s) + start date, latest action type + when/how updated upstream, effective date + last-updated date, screenshots of the relevant upstream UI (Annex E: HRPS IT0000/IT0001/IT0105/IT0395, or Cumulus "People" screen), and whether the payload was actually received downstream.

**✅ CORRECTED 14 Aug (confirmed):** logged in IMTL, and/or escalated by email to pocdex_support@psd.gov.sg. IMTL supersedes the earlier shared Excel tracking log referenced in the original Support Request Guidelines — Excel is no longer the current mechanism.

### 7.4 Common Issue Categories (Self-Serviceable Without POCDEX)

Nine pre-classified categories worth reusing verbatim in the CC runbook: records not yet effective; secondment holding position (not sent by design); concurrent appointment (HRPS, not supported); excluded population subsets (Fixed Term, Retiree, External, NSF, NSMen, Volunteers, GCs / PA Mayors); rehire with no break in service; late contract-renewal data entry; concurrent appointment while on secondment (Cumulus); email not mapped correctly (agency HR to fix at source); GovTech deployed workers (not supported); NPL disablement not triggered on time.

### 7.5 Ticket Lifecycle (IMTL)

Status flow: New → In Progress → (More Info Required | Further Investigation Required | Pending Vendor Actions | Data Recovery) → Pending Confirmation Closure → Resolved. SLA: acknowledgement 3-5 business days. **Auto-closure: no response within 7 days of "Pending Confirmation Closure" = auto-marked Resolved** — CC Ops should build this into its own SLA tracking so tickets aren't silently auto-closed unverified. IMTL limitations: no automated reminders, limited dashboards, manual status only, no real-time chat, 5,000-record cap.

### 7.6 Stakeholder / Escalation Contacts

| Stakeholder | Name | Role |
|---|---|---|
| POCDEX | pocdex_support@psd.gov.sg | General investigations |
| POCDEX | Lian Huiting | Investigations; Data Product Development lead |
| POCDEX | Eric Lee | Investigations |
| HRPS | Wan Teng Kweh | OM-related queries |
| HRPS | Cindy Ng | Deployment-related queries |
| HRPS | Kah Mun Ou | Attract-related queries |
| HRPS | Ryan Lim | Exit-related queries |
| HRPS | Samuel Huan | Leave-related queries |
| Cumulus | Ai Chuen Tang | Cumulus user team |
| Cumulus | Lydia Peck | Cumulus (Accenture) team |

### 7.7 DO Team Assurance and Engagement Boundary

| Area | Compass/PSD Ownership | DO Team Expectation | Escalation Trigger |
|---|---|---|---|
| Discovery and requirements | Compass leads TC review, sampling, decisions | No delivery role | Missing business policy requiring a DO decision |
| Solution architecture and build | Compass designs identity matching, repull, reconciliation, Ops workflow | No enhancement build assumed | Existing platform constraint Compass cannot resolve |
| POCDEX/WOG AD interfaces | Compass engages authoritative owners directly | DO may share documentation/contacts only | Interface access exclusively mediated by DO |
| Day 2 operations | Compass Ops owns queues, retries, patches, audit, SLAs | No recurring manual support | Incident requires DO-owned platform recovery |
| Testing and rollout | Compass owns TC1-14 regression, pilot, rollback | No test execution assumed | DO-controlled environment or release gate |
| Governance and reporting | Compass Product reports scope, risks, effort, outcomes | Stakeholder visibility only | Material scope or risk change |

Compass owns discovery, design, build, operations, testing and reporting end to end. DO's role is bounded to sharing existing interface documentation/contacts, only when Compass genuinely cannot resolve something itself.

---

## 8. Audit & Data Retention

**Active officers:** retained while account remains active.

**Inactive officers:** retention subject to approval and IM policies — not yet finalised (Section 9).

**Test/UAT Data Governance:**

**⚠️ Live compliance issue.** Data Office leadership (Deputy Director level): "there should [be] no production data, anonymised or otherwise, in the UAT environment. Do purge it immediately." Engineering committed anonymised production data purge from UAT by **3 Sep 2026** (UAT concluding 31 Aug), confirmation to be emailed once done. Separately open: whether loading synthetic (tweaked-from-production) data into UAT requires the same official email approval as live ingestion — POCDEX's model requires this on ingestion; question still open in the thread.

**⚠️ Sequencing/process-integrity question, unanswered anywhere:** Data Office directly asked whether Compass retrieved production data from HRPS/Cumulus **before** formal WD SD approval was granted. This is a process question, not a data-quality one — should be answered explicitly and factually.

**Audit records:** IMTL's audit trail is the existing mechanism to plug into, not a parallel trail to build. **Confirmed 14 Aug:** IMTL supersedes the earlier shared Excel tracking log — Excel is no longer current (see Section 7.3).

**Data classification:** CC is Restricted/Security Normal (R/SN). POCDEX is also R/SN; high-risk workforce data is masked upstream before reaching POCDEX — CC should only ever receive R/SN-and-below data by design. MHA agency-specific competencies = Confidential; MFA = Confidential Cloud Eligible. CC must exclude both (incl. ratings, expected or endorsed) without a separate data-sharing agreement. **This exclusion must be written explicitly into the Data Sharing Form itself** — a prior Slack/email confirmation is not a substitute.

**⚠️ Verification not yet done:** has anyone confirmed the pilot/production sizing dataset (Section 7.2) doesn't already contain MHA/MFA agency-specific competencies that should have been excluded? MHA's reportedly already stripped by HRPS. MFA's not yet checked — "if any" exist, no confirmation recorded. Should be closed before the extract or derived figures are cited in the Data Sharing Form submission.

---

## 9. Open Questions Requiring Alignment

### 9.1 Discovery vs. Solution Triage

Not every item needs the same kind of work.

**Discovery track (genuine unknown, needs cross-team research):** Item 2 (cross-system double-hat rule), Item 7 (historical data source/ODIN2), Item 4 (endorsed competency governance), Item 20 (timestamp semantics), Item 21 (unmeasurable production fields), Item 32 (new unscoped fields), Item 34 (MDDI outlier), Item 35 (officercompetencies under-index), Item 37 (daily-diffability of officerId/idType/status/jobId), Item 38 (three overlapping tier models incl. Agency HR).

**Solution track (fix shape known, missing a decision/build/confirmation):** Items 1, 3, 5, 6, 8-19, 28-31, 33, 36. Most bounded to a known set of options — the blocker is a decision or confirmation, not exploration.

**Verification track (secondary analysis claims to check against source):** Items 24, 25, 26 (Item 27 resolved, moved out).

### 9.2 Full Item List

| # | Topic | Open Question | Owner | Raised By |
|---|---|---|---|---|
| 1 | NPL Threshold | **✅ RESOLVED 14 Aug** — NPL>90d excluded before reaching CC; NPL<90d shared normally, no special identifier needed | Compass + POCDEX | Resolved 14 Aug — Section 3 |
| 2 | Cross-System Double-Hat | Primary-position rule when officer double-hats across HRPS+Cumulus — no universal definition today. Sized: 274 officers WoG. | Compass + POCDEX | 27 Jul, 4 Aug correspondence |
| 3 | Owner Agency Code | Business rationale for excluding from MVP Data Sharing Form despite presence in API | Compass | 4 Aug correspondence |
| 4 | Endorsed Competencies | Governance/retention model — personal to individual, ownership/cadence/retention undecided | Compass BO + Data Governance | Section 2; 7 Aug |
| 5 | NRIC vs POCDEX UID/Email | Long-term identifier strategy — email creates TC2/TC12/TC13 misattribution risk. NRIC/UID as primary post-MVP? | Compass + IDSC | Section 6.2, 6.4 |
| 6 | CAM Lifecycle Behaviour | How does CAM's push reconcile with CC's pull when identifying email changes? | CAM Team | 4 Aug — "data desync" risk |
| 7 | Historical Data Source | POCDEX has no historical data; ODIN2 suggested, undiscussed. Confirm before Post-MVP roadmap commitment. | Compass + POCDEX + ODIN2 owner | 31 Jul |
| 8 | Operational API/Logs Access | Confirm Central Users actually provisioned POCDEX logs API access, as requested | POCDEX | Section 7.1; 31 Jul |
| 9 | Synthetic Data Approval | Does synthetic (anonymised production) data into UAT need the same approval as live ingestion? | Compass + Data Office (WD) | Section 8.3; 4 Aug |
| 10 | Day 2 Ops Output Format & Provenance | CSV export expected? Is data-point origin (POCDEX vs Master Excel) obvious to Central Users? | Compass | Section 7.1; 31 Jul, no answer |
| 11 | NPL Record Rationale | Rationale for separate inactive/active NPL record, and API shape (full vs delta)? | POCDEX | Section 3.5; 31 Jul, no answer |
| 12 | Production Data Extraction Timing | Did Compass pull production data before formal WD SD approval? Process-integrity question, needs factual answer. | Compass | Section 8.3; 4 Aug |
| 13 | Data Sharing Form Currency | Form lagged behind later decisions at points — confirm reconciled against full thread before submission | Compass | "I observed the Data Sharing Form is not updated" — 4 Aug |
| 14 | Test Case Definitions | Positive/negative labelling, POCDEX's role in data prep vs business-outcome-driven prep, "missing competencies" for P02, JR8/JR7 ring-fencing meaning | Compass + POCDEX | 27 Jul |
| 15 | Ops Data Recovery — Delivery Decision | Sizing complete (90 pilot officers, 1.7%). Option 2 recommended (55-125 PD, unconfirmed for batch scope). Needs leadership endorsement + funding/scheduling. | Compass Product + Leadership | Section 7.2 |
| 16 | Structured Testing Roadmap | 26 draft scenarios written (Appendix B.2) covering the ≥25 POCDEX requested. Not yet reviewed with POCDEX or executed. | Compass + POCDEX | Section 1.3, Appendix B.2; 9 Aug |
| 17 | WOG AD Identity Matching Field | Resolved in design: email locates, NRIC/FIN token confirms (Section 7.2.2). Not yet approved — see 18, 19. | Compass + WOG AD owner | Section 7.2.2 |
| 18 | NRIC/FIN Tokenisation — Privacy/Security Approval | Rated **Red**. Blocks the TC13 email-reuse fix. | Compass Security/Privacy | Section 7.2.2 |
| 19 | POCDEX NRIC/FIN Availability | Confirm POCDEX reliably returns NRIC/FIN in all cases; define edge-case behaviour where it doesn't. Rated **Red**. | POCDEX | Section 7.2.2 |
| 20 | Timestamp Semantics | Per-field meaning (source edit vs POCDEX ingestion vs last-modified), timezone, tie-ordering. **Now moot for the daily-diff design** (sidesteps this entirely) — still matters if event-triggered refresh pursued later. Rated Red. | POCDEX data owner + Architecture | Section 7.2.2 |
| 21 | Unmeasurable Fields | NPL duration, worker/employment type, deployment indicators not in the extract — confirm if they exist elsewhere or need adding | POCDEX | Section 7.2.1 |
| 22 | Excluded Competency Data Already in Extract? | Confirm the sizing extract doesn't already contain MHA/MFA agency-specific competencies that should've been excluded | Compass + HRPS | Section 8.5 |
| 23 | Daily-Diff Effort and API Volume Re-Sizing | 55-85-125 PD estimate + ~125,000 req/month NFR both predate the daily-batch decision — need re-validation against batch design specifically | Compass + POCDEX | Section 7.2.3, Section 10 |
| 24 | Master Data Refresh Cadence | Secondary analysis claims quarterly manual upload — confirm accuracy; caps competency freshness independently of the daily-diff | Compass + POCDEX | Unverified — Item 27 |
| 25 | POCDEX-Native Eligibility Reason Codes | Does POCDEX already return reason codes CC can surface as-is, or are these Compass-side codes still to build? | Compass + POCDEX | Unverified — Item 27 |
| 26 | Unresolved-Officer Escalation Threshold | Secondary analysis proposes a 2-week escalation threshold — no source in correspondence. Confirm real vs unsourced. | Compass + POCDEX | Unverified — Item 27 |
| 27 | Provenance of "Request for POCDEX Data" doc | **✅ RESOLVED 14 Aug** — located, reviewed, genuine and internally consistent. See Section 7.2.1b. | Compass | Resolved 14 Aug |
| 28 | Daily-Diff Field Scope Excludes Four Test Cases | The 6-field scope fully covers TC9/TC10/TC11. Does **not** cover TC2/TC4/TC8/TC13 at all — those need identity-layer fields outside current scope. Decide: extend the diff, or explicitly accept these 4 as out of scope for automated detection. | Compass Product + Architecture | Derived 14 Aug |
| 29 | Receiving Team and SOP Not Yet Defined | Confirmed: Ops Portal is read-only for BO; cases route to "another team" per an SOP. Neither team nor SOP is named/written. **Candidate answer drafted** in the companion RACI proposal (Support Tier 2/Product Operations) — not yet confirmed. | Compass Product + Ops leadership | Confirmed 14 Aug |
| 30 | MVP Pilot Record Count Discrepancy | Real snapshot shows 5,322/5,342; everywhere else cites 5,270. ~1% gap, not yet confirmed as records-vs-officers or a pull-date difference. | Compass Product + Architecture | 14 Aug |
| 31 | Six-Field Scope May Not Map to Real Extract Schema | **Resolved by 7.2.1b** — extract uses warehouse naming, not API naming; Job ID confirmed real, moved out of Discovery track. | Compass Architecture + POCDEX | Resolved via 7.2.1b |
| 32 | New Unscoped Fields Found in Real Data | reportingmanageruid (largest field by volume, 2,439 changes) + 4 department/personnel fields not in any existing taxonomy | Compass Product + Architecture | 14 Aug |
| 33 | Base vs. Identity Data Classification Conflict | Two documents disagree on whether email/idnumber are cosmetic (Base) or highest-risk (Identity). Needs one resolved answer before either informs update-authority design. | Compass Product | 14 Aug |
| 34 | MDDI Flagged as Outlier by a Second Independent Signal | 11.4% duplicate rate + 5.17% affected-record rate + 2.82 fields/affected — two different analyses both flag MDDI | Compass Product + MDDI | 14 Aug |
| 35 | officercompetencies Under-Indexed for MVP | 0.52x the other-agency rate — genuinely more stable, or updates not propagating reliably? | Compass Product | 14 Aug |
| 36 | officerId, idType, status | **✅ RESOLVED 14 Aug** — confirmed real, reinstated throughout. See Section 7.2.1b. | Compass Architecture + POCDEX | Resolved via 7.2.1b |
| 37 | Confirmed-at-Login ≠ Confirmed-Diffable-Daily | officerId/idType/status/jobId confirmed at login-time; daily-batch-polling behaviour not confirmed | Compass Architecture + POCDEX | 14 Aug |
| 38 | Three Overlapping Escalation/Tier Models | This design's Tier 1-4 (fix-ownership) vs. RACI's T1-T4 (support-tier) vs. Data Request doc's L1/L2/L3 (with Agency HR, "yet to be established"). Agency HR unnamed in the RACI's T1-T4. Needs one reconciled answer before Open Item #29 is complete. | Compass Product + Ops leadership | 14 Aug |

---

## 10. POCDEX API Non-Functional Requirements

- **Expected volume:** ~25,000 MAS × up to 4 API calls + ~1,000 Ops Support queries/month × up to 4 calls (4,000 additional). **Total: up to ~125,000 requests/month, average ~5 req/min.**

**⚠️** Predates the daily-diff design. A nightly batch adds up to 5,270 additional calls/night (pilot) or 152,895/night (WoG) — **not yet sized or agreed with POCDEX**; should be confirmed as a distinct NFR, not assumed to fit the existing envelope.

- **Peak usage:** start of workday, following agency-wide comms, during onboarding/testing.
- **Response time:** P95 ≤100ms for standard calls.
- **Availability:** whenever CC is accessible; planned maintenance coordinated in advance.
- **Error handling:** standard REST HTTP codes, meaningful messages.
- **Security:** access restricted to authorised systems/service accounts.
- **Scalability:** must accommodate growth beyond MVP.

---

## Appendix A — Stakeholder Concerns and Coverage Status

Deliberately honest rather than aspirational — distinguishes genuinely answered from acknowledged-but-open.

| Stakeholder Concern | Section | Status |
|---|---|---|
| Is Compass cleared with R/SN — will POCDEX only pass R/SN-and-below? | 8.5 | Answered |
| What data domains/fields/justification are required? | 2 | Answered |
| Cumulus Casual vs TIVO exclusion | 3.4 | Answered |
| Should "holding" positions be filtered? | 3.4 | Answered |
| Which agencies in MVP scope? | 1.3, 3.4 | Answered |
| Owner Agency Code — why excluded? | 9, Item 3 | **Open** |
| Historical data needed (MVP)? | 3.2 | Answered |
| Future-dated data needed? | 3.3 | Answered |
| NPL>90 vs <90 — which shared? | 3.5; 9, Item 1 | **Open** — direct conflict in own source docs |
| Rationale for separate inactive/active NPL record? | 3.5; 9, Item 11 | **Open** |
| Only ACTIVE records for all categories? | 3, 6 | Acknowledged — implied, not written |
| Multi-hatting primary position rule, incl. cross-system? | 6, Scenario C; 9, Item 2 | Partially open — single-system defined, cross-system not |
| Primary Position Indicator still required? | 2.1 | Answered — confirmed removed/superseded |
| Historical/learning-history source and refresh? | 3.2; 9, Item 7 | **Open** — ODIN2, undiscussed |
| How do POCDEX + Master Excel derive Job Family/Function/Role? | 2.1, 5 | Answered |
| CAM integration mechanism, SSOT? | 4 (Flow 4), 5 | Answered |
| CAM/POCDEX reconciliation on email change? | 4 (Flow 4); 9, Item 6 | **Open** — mitigation described, confirmed not built (required for R1) |
| How does a business user troubleshoot + see original POCDEX data? | 7.1 | Answered |
| Do business users understand the workflow / expect CSV? | 9, Item 10 | **Open** |
| Logs API access for central users? | 7.1; 9, Item 8 | **Open** — requested, not confirmed provisioned |
| Audit/retention for active/inactive officers? | 8 | Partially answered — active clear, inactive pending |
| Production data in UAT, purged / synthetic approval? | 8.3; 9, Item 9 | **Open** — purge committed 3 Sep, synthetic-approval unresolved |
| Data retrieved before formal WD SD approval? | 8.3; 9, Item 12 | **Open** — needs factual answer |
| Is the Data Sharing Form current against the thread? | 9, Item 13 | **Open** — flagged out of date 4 Aug |
| Are UAT scenario definitions clear to POCDEX? | 9, Item 14 | **Open** — no recorded answer |
| Is the current UAT plan robust; how will ≥25 extra scenarios be resourced? | Appendix B.2; 9, Item 16 | Partially answered — 26 scenarios drafted, review/execution pending |
| Will Compass build a Day-2 recovery capability? | 7.2.1-7.2.3; 9, Item 15 | Partially answered — sized, option recommended, identity design (17-19) not yet approved |
| How to detect a POCDEX change and know when to re-pull; NRIC vs email matching? | 7.2.2; 9, Items 17-20 | Partially answered — hierarchy designed; NRIC/FIN approval + timestamp semantics still open |

---

## Appendix B — UAT Test Data & Testing Roadmap

- Existing plan uses a 20/21-persona template; POCDEX locked the final 21 personas and asked Compass not to change test data values further, to avoid rework.
- POCDEX's assessment: **"limited coverage"** — largely happy-path or already-known scenarios. Proposing ≥25 additional baseline scenarios; ceiling not defined.
- POCDEX asked whether CC validates against multiple sources (POCDEX, HRPS/Cumulus quarterly extracts, DLE); flagged that inserting test Job/Family/Function IDs into the HRPS/Cumulus master list may be needed for baseline scenarios to work.
- Cross-system integration testing needs more structured, earlier-coordinated planning than single-system dev — POCDEX explicitly cautioned that ad-hoc/iterative cycles strain both teams.
- Data Office requested confirmation by **Tue 11 Aug** of anything specific POCDEX needs Compass to watch for in test data prep, reserving the option to proceed with POCDEX's own view if no response by then — **confirm whether this response was sent.**

### B.1 Testing Roadmap Commitment

**⚠️ COMMITMENT:** This document commits Compass to a structured, resourced testing roadmap covering (i) the ≥25 additional scenarios, sequenced against the 11-28 Aug UAT window, and (ii) a dedicated second POCDEX-coordinated testing round for the employment profile lifecycle capability, ~2-3 weeks post-MVP. The roadmap should name a date range for round (ii), not leave it unscheduled, and be shared with POCDEX for input before finalising.

### B.2 Draft UAT Scenario List (26 of the requested ≥25)

| # | Category | Scenario | Traceability | Expected Outcome |
|---|---|---|---|---|
| 1 | Multi-hatting | 2 active positions, same source system (HRPS) | TC12; Gap Register C | Primary selected by defined precedence rule, not "first returned" |
| 2 | Multi-hatting | 2 active positions, same source system (Cumulus) | TC12; Gap Register C | Same precedence rule applied consistently |
| 3 | Multi-hatting | Active positions across HRPS + Cumulus simultaneously | Gap Register C; 274-officer WoG finding | No silent auto-pick; routes to EMP-AGENCY-CONFLICT queue |
| 4 | Multi-hatting | 3+ active positions (highest-risk pattern observed) | Section 7.2.1 highest-risk case | Ops Portal surfaces all positions, not just first |
| 5 | Multi-hatting | Multi-hat resolves — 2 active positions drop to 1 | TC9; Section 5 | Stale second position no longer shown after refresh |
| 6 | Secondment | Seconded between two POCDEX-onboarded agencies | TC1; Scenario B | Seconded position becomes working position |
| 7 | Secondment | Seconded to a non-POCDEX agency | TC3 | Login continuity preserved if email unchanged |
| 8 | Secondment | Holding position for home agency | Section 7.4, category 2 | Correctly excluded from display |
| 9 | Secondment | Secondment ends, returns to home agency | TC1; Gap Register B | Reflects home position, not stale seconded one |
| 10 | Email changes | Email corrected between agencies (typo fix) | TC8 | Old email session doesn't persist stale identity |
| 11 | Email changes | Email changes as part of inter-agency transfer | TC2; 7.2.2 hierarchy | NRIC/FIN fallback token links old and new identity correctly |
| 12 | Email changes | New officer issued a departed officer's previous email | TC13; Critical severity | System blocks auto-linking; routes to ID-MULTI-MATCH |
| 13 | Email changes | Officer logs in before record's effective date | Section 7.4, category 1 | Graceful "not yet effective" handling |
| 14 | Email changes | Email blank/missing at first login | 19 pilot missing-email cases | Routed to missing-email exception queue |
| 15 | NPL | Already on NPL>90d at MVP launch | TC7; Scenario D | Excluded by POCDEX (`ON_NPL_MORE_THAN_90_DAYS`); login blocked |
| 16 | NPL | Already on NPL<90d at MVP launch | Section 3.5, resolved | Remains active, unaffected |
| 17 | NPL | Goes on NPL after already logging in once | TC7 | WOG AD denies subsequent access |
| 18 | NPL | Returns from NPL | TC7 | Account reinstated; reflects current, not stale, position |
| 19 | Missing mappings | Missing Job Grade | 6,064 WoG cases | Graceful "data unavailable" state, not silent default |
| 20 | Missing mappings | Missing Job Family or Job Function label | Section 7.2.1 | Same graceful-degradation behaviour |
| 21 | Missing mappings | Missing Position ID equivalent (employmentid) | — | Competency-mapping logic doesn't silently mismap |
| 22 | Missing mappings | Sample case from MDDI duplicate-rate outlier | Section 7.2.1 | Confirms genuine duplicate vs agency-specific artifact |
| 23 | Other lifecycle | FIN→NRIC change mid-lifecycle | TC4 | No orphaned duplicate profile created |
| 24 | Other lifecycle | Accidentally deleted then recreated in POCDEX | TC6 | Surfaces correctly once per-login repull is built |
| 25 | Other lifecycle | POCDEX API times out/errors during fetch | REFRESH-FAILED reason code | Last known-safe snapshot retained |
| 26 | Other lifecycle | Two concurrent logins during a profile refresh | 7.2.2 reconciliation design | No race condition creates duplicate/inconsistent state |

---

*Generated: 2026-08-13. Substantially reconciled 14 Aug 2026 against the "Request for POCDEX Data for CareerCompass" source document (Section 7.2.1b) — reversed field removals, corrected identity-matching conclusions, resolved TC1-14 timestamp dependency for the daily-diff design.*
