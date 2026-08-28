# Career Compass — Product Requirements Document: Ops Portal

*Read-only case categorization for Business Operations, plus the candidate receiving-team remediation workflow*

**Status:** DRAFT — for internal review

**Prepared by:** Career Compass Product Team · 14 August 2026 · Version 0.2

---

## 1. Summary

The Ops Portal is the tool Career Compass Business Operations (BOs) use to see when an officer's employment data has changed or looks wrong, sort that change into a plain-language category, and hand it off to the team that fixes it. The BO reviews and categorizes; the BO does not edit officer data directly. This PRD covers both sides of that handoff: the read-only portal a BO uses, and the candidate workflow a receiving team would follow to act on what the BO flagged.

## 2. Contacts

| Name/Team | Role | Comment |
|---|---|---|
| Michelle Yip | Product Manager, Career Compass | Document owner |
| Imelda Mo (PSD) | Requested this discovery | Raised the Ops Portal data-drift question that led to this PRD |
| Compass Product Operations Team | Candidate receiving team (unconfirmed) | Not yet formally assigned |
| Compass Engineering/Architecture | Builds the daily-diff job and portal | Owns technology decisions |
| POCDEX Team | Upstream data source, escalation point | pocdex_support@psd.gov.sg; Eric Lee |
| HRPS/Cumulus (Agency HR) | Source-of-truth for employment data | Fixes go here when the error is upstream, not in Compass |

## 3. Background

CC shows officers their employment profile (agency, position, job grade, competencies) using POCDEX data. Today, CC only looks up an officer's data once, at first login. If that data changes afterward (agency transfer, new position, corrected email), CC doesn't know, and there's no simple way to see or explain the mismatch.

This surfaced through two discussions this month: operational design work identified concrete stale-profile cases and sized the scale — roughly **1.7% of pilot population (90 of 5,270 officers)** shows a lifecycle-risk or duplicate-record issue, and **274 officers whole-of-government** hold conflicting positions across two HR systems at once. Separately, a working session looked at who should handle these day to day and drafted a support-tier model/SOP outline, surfacing the same gap from the operations side: nobody had agreed who does what.

**Why now:** on 14 August, the team confirmed a specific design constraint — the Ops Portal will be **read-only for the BO**. A BO can see and categorize a case but cannot patch, override, or link a profile directly. That decision immediately raises the question this PRD answers: if the BO can't fix it, who does, and how does the handoff work? Before 14 August, the working assumption was that BOs would take direct action; that assumption is no longer current.

## 4. Objective

The original single objective conflated two JTBDs with different urgency and different owners — BO triage efficiency, and identity-safety containment. Split below so the safety thread can't get diluted by general portal polish.

### 4.1 Objective A — BO Triage Efficiency

Give CC BOs a reliable way to see when an officer's data has drifted from POCDEX, sort each case into a category a non-technical reader can understand, and route it to the right team — without giving the BO a way to make the data worse by acting on incomplete information.

Matters for **officer trust**: an officer with wrong data has no visible path to a fix today, and CC can't explain what changed.

**Key Result (Release 1 only, achievable against Release 1's actual scope):**
- 100% of manually-triggered cases have a complete evidence record (before/after values, category, timestamp) at time of routing.

**Deferred, not yet committed** (require the daily-diff job and a measured baseline, neither of which exist yet):
- 100% of P0-severity cases categorized and routed within 1 business day of detection.
- Median time from detection to categorization under 4 business hours (P0), 2 business days (P1).

No production data exists yet on categorization/remediation time. One input is no longer a pure unknown: a real 14-day change-frequency measurement shows ~23 field changes/day across the 6 MVP agencies and 781/day whole-of-government — an expected daily case volume to plan against. Treat the volume figure as evidence; treat the deferred time targets as a discussion starting point once the next release is scoped, not a commitment now.

### 4.2 Objective B — Identity-Safety Containment

**Gated on the NRIC/FIN privacy/security approval resolving — do not treat as achievable in Release 1.** Several test cases share a failure mode where a naive fix could attach the wrong officer's data to a profile — actively making things worse, not just leaving it stale. A read-only, categorize-and-route portal removes part of that risk by design, but the identity-matching fallback behavior itself is not yet fully specified — see the flag under Technology.

**Release gate condition, not a percentage KR:** zero incidents of a case remediated using the wrong officer's data, verified via an immutable audit trail. This is a safety floor — either met or not — and should not be reported alongside percentage-based KRs as if it were a dial to tune. Do not enable batch categorization for Identity/contact-change or Multiple/conflicting-records categories until this gate has a verifiable audit mechanism behind it.

## 5. Market Segment(s)

**Primary: the Business Owner (BO) reviewing officer data.** Responsible per pilot agency for confirming officer data looks right, or escalating if not. Constraint: access is restricted to "the BO in production, or a person specifically assigned by BO" — explicitly not for the Product/Engineering team. MVP: 6 pilot agencies; design must scale to whole-of-government, where the same drift affects ~1,905 officers (1.25%) of 152,895.

**Secondary: the receiving team that acts on a routed case.** Whoever ends up owning this workflow (candidate: Compass Product Operations) — resolves the case via a controlled repull, escalation, or redirect to agency HR.

**Tertiary: Central Users troubleshooting a specific officer's issue.** Compass central support staff needing to see what POCDEX actually sent for one officer, typically responding to an enquiry, not proactive review.

## 6. Value Proposition(s)

**6.1 For the BO:** JTBD — "When an officer's data looks wrong, I need to understand what changed and get it to the right team, without needing to know POCDEX's internal data model." Gain: one screen showing plain categories instead of raw field diffs. Pain avoided: drift is currently invisible until an officer complains; today's ambiguity about "can I just fix this myself?" is removed by the read-only design.

**6.2 For the receiving team:** JTBD — "When a case is routed to me, I need enough evidence to act correctly the first time, without re-investigating from scratch." Gain: every case arrives with category, reason code, before/after evidence attached — no re-triage. Pain avoided: the wrong-person-mapping risk is caught by categorization, not silently auto-applied.

**6.3 For the officer:** faster, more accurate data correction affecting competency matches and recommendations; no risk of a rushed edit merging their data with a different officer's record.

## 7. Solution

Two halves — only the first is confirmed design. The portal itself (below) is confirmed read-only as of 14 Aug, including batch categorization (proposed, not confirmed). The receiving-team workflow further down is a candidate design from a single working session, not yet assigned or approved.

### 7.1 UX / Prototypes

No wireframes exist. Specified as six functional areas, not screens — each needs actual UI design before build. **Single biggest concrete next step this PRD doesn't cover.**

**Scoped design phase needed, not a one-line dependency.** The six areas below mix three different interaction modes without acknowledging it: **dashboard/reporting** (Operations overview, Audit and reporting — look, don't act), **triage/action** (Identity exceptions, Employment exceptions, Profile differences — categorize and route), and **health-check/ops** (Refresh monitoring — flag, don't categorize). A BO moving between these is switching mental models, not just data views. Refresh Monitoring's own description hints it should surface *inside* the triage flow when it's the root cause of a case, which the current flat six-area list doesn't reflect.

**Recommend a half-day IA working session before this goes into sprint planning** — resolve nav structure (tabs? one dashboard with contextual panes? does refresh monitoring surface inline within a case?) and produce an actual information architecture, not just a function list. This is a scoped design phase, not a single line in a dependency column.

**No onboarding/decision-aid design exists.** The categorization taxonomy has subtle, consequential distinctions — "Organisational move" vs. "Role change" vs. "Classification change" require domain knowledge a first-time BO won't have, and miscategorization has downstream effects (wrong queue, wrong bulk-eligibility tier). Given BOs are agency staff, not Compass product people, triaging potentially dozens of cases a day, this needs its own content-design workstream: in-portal guidance, a categorization decision aid, or training material. Not currently scoped anywhere.

| Portal Area | What It Shows | What the BO Does Here |
|---|---|---|
| Operations overview | Risk volume, service health across open cases | Starting point each session — drill into a queue |
| Identity exceptions | Unresolved/conflicting people — email lookup failures, NRIC/FIN token issues | Categorize as Identity/contact change; route |
| Employment exceptions | Valid multi-hat vs. duplicate — employment IDs, agencies, source systems | Categorize as Multiple/conflicting records; route |
| Profile differences | Before/after values for the diffed fields | Categorize per taxonomy; route material differences |
| Refresh monitoring | Stale/failed profiles — last refresh, attempt count, error reason | Flag to receiving team if stuck |
| Audit and reporting | Case timeline, evidence, decisions, approvals, overrides | Read-only — proving what happened and why |

### 7.2 Key Features

**7.2.1 Change Category Taxonomy** — a BO categorizes a detected change into a plain-language category, not raw field names.

| Category | What Changed | Underlying Fields |
|---|---|---|
| Organisational move | Officer moved agency | agencyid, agencyname |
| Role change | Position changed | employmentid, primaryposition |
| Classification change | Job family/function/grade changed | jobfamily, jobfunction, jobgrade |
| Reporting/org-structure change | Reporting manager or department changed (not currently in diff scope) | reportingmanageruid, departmentid, departmentname, personnelarea, personnelsubarea |
| Identity/contact change | Email or name changed, or doesn't resolve to one person | workemailaddress/email, firstname, lastname, idnumber/idNumber, idType, officerId |
| Eligibility/status change | Active/Inactive/NPL/Contingent changed | status — confirmed real API field with a documented reason-code list richer than this design's own ELIGIBILITY-CHANGED code |
| Multiple or conflicting records | Duplicate or multi-hat — not a single-field change | employmentid (multiple), officerId — confirmed already used in production to disambiguate records across HR systems |

A real changed-fields analysis found `reportingmanageruid` — the single largest-volume changing field in the entire dataset (2,439 changes, more than double the next-largest) — plus `departmentid`, `departmentname`, `personnelarea`, `personnelsubarea` had no home in the original six-category taxonomy. A seventh category (Reporting/org-structure change) has been added, but the reason-code mapping isn't designed — none of the existing codes currently fire for it.

`officerId`, `idType`, `status` have been reinstated across every field list, reversing an earlier removal, after confirmation that all three are real, documented API fields — `officerId` is already used in production to disambiguate records across HR systems. One caveat survives: confirmed usable at login-time is not the same as confirmed diffable in a daily batch job — should be checked with POCDEX before extending the diff scope to include them.

**7.2.2 Reason Codes** — each case carries one machine-generated code, mapping to a category, driving the officer-facing message.

| Reason Code | Severity | Detection Rule | Officer-Facing Message |
|---|---|---|---|
| ID-NO-MATCH | P0 | WOG AD email returns no POCDEX person | We could not match your employment information. |
| ID-MULTI-MATCH | P0 | Email returns multiple people or identity tokens | Your employment information requires review. |
| ID-TOKEN-CONFLICT | P0 | NRIC/FIN token missing, changes unexpectedly, or maps to multiple profiles | Your employment information requires review. |
| EMP-AGENCY-CONFLICT | P0 | Same person, conflicting active agency codes | Your profile update is under review. |
| ELIGIBILITY-CHANGED | P0 | Inactive, NPL, contingent, or non-pilot response | Your access status has changed. |
| REFRESH-FAILED | P0 | POCDEX timeout, error, or reconciliation failure | Your profile could not be refreshed. |
| EMP-MULTI-ACTIVE | P1 | More than one active Employment ID | Multiple employment records require review. |
| PROFILE-CHANGED | P1 | Daily pull differs from stored snapshot on any of six diffed fields | Your employment profile has been updated. |
| ID-FALLBACK-MATCH | P1 | Email differs but the secured NRIC/FIN token matches an existing person | Your employment profile is being refreshed. |
| OVERRIDE-ACTIVE | P1 | A prior receiving-team action has linked or patched a profile | Contact support if your details are incorrect. |

**7.2.3 Categorize-and-Route Action** — the only write action a BO has in-portal: select a category, optionally note, route. Does not change officer data. Every routing action logged with BO identity, timestamp, category.

**7.2.4 Audit Trail** — full case lifecycle (detection, categorization, routing, remediation once available) retained with before/after values and actor identity. Requirement, not a nicety.

**Schema not yet specified.** "Retained with before/after values and actor identity" is not buildable as written. Before Release 1 build, this needs:
- **Retention period for audit records specifically** — the 4-year NFR for inactive accounts may or may not extend to audit/case records; unclear whether they inherit that or need their own retention policy.
- **Immutability/append-only guarantee.** Objective B's release-gate condition ("zero incidents of wrong-officer remediation") cannot be verified without tamper-evidence on the audit log itself — an editable audit trail can't prove a negative.
- **Bulk-action audit schema.** Bulk-route logs each case individually, "not a collapsed audit entry" — but it's not defined whether the individual entries cross-reference a parent batch-action record, or how the BO's single bulk-route action is represented alongside the per-case entries it produced.
- **Access/query rights.** The Audit and reporting portal area is "read-only — proving what happened and why," but it's not stated who beyond the BO role can query it — e.g. for a Data Office compliance review.

**7.2.5 Refresh Monitoring** — visibility into whether the nightly POCDEX pull completed, and for which officers it failed — surfaced in the same portal since a failed refresh is itself often the root cause of a case.

**7.2.6 Officer-Facing Messaging** — each reason code maps to a message shown while the case is open.

**Content design gap.** The messages as drafted are near-identical, vague, and static regardless of case age or severity — "Your employment information requires review," "Your profile update is under review," "Your access status has changed" give an officer no actionable next step. Officer trust is a core objective — an officer with wrong data has no visible path to a fix, and CC can't explain what changed — but these messages don't explain anything, which undercuts that objective directly. Especially for P0 cases, which by definition are the most likely to be confusing or alarming to the officer experiencing them.

**Required before Release 1 ships officer-facing messaging:** a real content-design pass covering (a) an expected resolution timeframe where one can be stated, (b) a support contact or next step, and (c) lifecycle-aware messaging — a case open 1 day should not show the officer the identical static string as a case that's been open 2 weeks. This is a dedicated content-design task, not a copywriting pass on the existing table.

**7.2.7 Batch Categorization** — once the daily-diff job is live, each nightly run produces a set of cases, already tagged with changed field(s) and category. Groups same-category cases from the same run so a BO reviews several at once.

- Group by category first, then optionally by agency within a category.
- **Bulk route:** BO selects an entire batch (or deselects specific cases) and routes the remainder in one action. Portal still logs each case individually — bulk action is a convenience, not a collapsed audit entry.
- **Partial-failure behavior not defined:** if a batch of N cases is bulk-routed and one case fails to route (network error, downstream rejection, etc.), does the whole batch roll back, partially commit, or does the BO get told which cases succeeded and which need individual retry? **Required before build:** define the transaction boundary — this is not hypothetical at whole-of-government-scale batch sizes.
- **Not every category is bulk-eligible.** Organisational move, Role change, Classification change, Eligibility/status change are lower-risk, batchable. **Identity/contact change and Multiple/conflicting records stay case-by-case** — exactly the categories behind the wrong-person-mapping risk; batching would trade a small time saving for a real chance of routing the wrong officer's case without individual review.

Only makes sense once the daily-diff job exists — today's manual, on-demand, single-officer comparison has nothing to batch. Belongs in a later release than Release 1, alongside the daily-diff job itself.

**Blocking, not yet resolved:** the bulk-eligibility rule above assumes Identity/contact change is correctly high-risk. A second, independently-produced classification puts the equivalent fields (email, idNumber) in a **low-risk "Employment Base Data" bucket instead**. If that classification were used, batching safety logic would silently break — identity-change cases could become bulk-eligible. **Must resolve to a single agreed classification before batch categorization is built**, not just before it's turned on.

---

**Everything from here to the start of Technology is a candidate proposal, not confirmed.** Drafted from one working session. **Do not build against this without a named receiving team and an approved SOP.** The prose below reads like a settled spec — it is not. Treat stage names, approval requirements, and escalation routing as a starting draft for discussion, not an engineering-ready contract.

---

**7.2.8 Receiving-Team Case Workflow (candidate, unconfirmed)** — six stages, BO participates only in the first two:

| Stage | What Happens | Who |
|---|---|---|
| 1. Detect | System creates case with reason code, severity, correlation ID | System (daily-diff job, once built) |
| 2. Categorize & route | BO reviews, assigns category (individually or batch), routes | BO — involvement ends here |
| 3. Triage | Related cases grouped; recommended next action shown | Receiving team |
| 4. Investigate | Identity/employment records compared against agency/POCDEX source truth | Receiving team — four-eyes approval required for any identity link/merge |
| 5. Remediate | Controlled repull, escalation, or source-correction request, per SOP | Receiving team |
| 6. Verify & close | Profile re-read, detection rules rerun, case closed with root cause recorded | Receiving team |

**7.2.9 Employment Lifecycle Decision Tree (candidate, unconfirmed)** — four scenarios as a starting point:

- **Email change** — expected: a new profile may be created, existing retained, no automatic merge. Escalate to receiving team; no manual patching.
- **Agency transfer** — receiving team validates latest source data, checks pilot-agency membership, assesses competency-mapping impact.
- **Position/employment change** — receiving team reviews competency implications and matching outcomes.
- **Multi-hatting officer** — receiving team verifies active profiles, captures the use case. Largest known population: **274 officers whole-of-government** hold conflicting cross-system positions today.

**7.2.10 Escalation Matrix (candidate, unconfirmed)**

| Issue Type | Escalates To |
|---|---|
| Application defect/API failure | Compass Engineering |
| POCDEX data mismatch | POCDEX Team |
| Upstream HR data error | Agency HR (HRPS/Cumulus) |
| Lifecycle design question (no existing rule) | Compass Product Team |

### 7.3 Technology

Included because it directly gates what the portal shows and how fresh it is.

- **Refresh mechanism (superseded 2026-08-24):** ~~a daily batch job — full-profile repull, field-by-field diff against yesterday's snapshot, once per day for every officer. Replaces an earlier login-triggered design.~~ **New direction, per UAT/VAPT readiness meeting 2026-08-24:** POCDEX will supply one last-modified-date per API endpoint (4 endpoints — profile, employments, positions, jobs), table-level detail collapsed to endpoint level on POCDEX's side. Compass compares each endpoint's date against its last-stored value; a forward-moved date is the change signal, replacing the daily full diff. Not yet built. See [2026-08-24-W35-uat-vapt-readiness.md](../meeting-notes/2026-08-24-W35-uat-vapt-readiness.md) (Decision 6).
- **Open — not yet resolved:** the meeting explicitly deferred *what to do* once a date change is detected (full re-pull of that endpoint vs. targeted diff; how to reconcile multiple endpoints changing near-simultaneously; what specifically counts as an "employment profile change" — e.g. does a job-table-only update qualify). This is the same open question the daily-diff design was trying to answer via **Diffed field scope** below, and that scope work is not automatically obsolete — it may still define *which fields matter* once an endpoint's date signals a change, even though the *refresh trigger* itself has moved off a daily full pull.
- **Diffed field scope today (needs reconciling against the new endpoint-level trigger):** agencyid, agencyname, jobfamily, jobfunction, jobgrade, employmentid, primaryposition — plus jobId, officerId, idType, status, all now confirmed real POCDEX API fields. This fully covers detection for position/classification-change categories; **Identity/contact-change (workemailaddress, idnumber) still needs diffability confirmed.**
- **Identity matching:** a four-step hierarchy — WOG AD email locates a candidate record (entry point, not durable identity); a secured NRIC/FIN token confirms identity across email changes (not yet approved — needs privacy/security sign-off); Employment ID reconciles the active position set; timestamps are a change signal only, never identity. `officerId` is confirmed already in production use for exactly this kind of cross-system disambiguation — a stronger starting point than previously documented.

**New gap — identity-matching fallback failure behavior is unspecified.** The reason codes cover ID-NO-MATCH (no signal) and ID-MULTI-MATCH (too many signals), but nothing covers the case where **signals from two or more of the four hierarchy steps genuinely disagree** — e.g. email locates a candidate, but Employment ID reconciliation points to a different active position set than what the email-matched record suggests. This isn't hypothetical: it's the exact shape of the highest-severity failure case in the underlying data (email reuse, rated Critical in the source gap register). This gap matters independently of whether NRIC/FIN gets approved — even once approved, the system needs a defined decision table for conflicting-signal states, not just "wait for the missing signal." **Required before the next build phase:** a decision table (not prose) covering every combination of match/no-match/conflict across the four hierarchy steps, plus a new reason code for the "signals disagree" state distinct from "signal absent."

**New gap — "read-only" enforcement layer is not specified.** The portal's entire safety argument rests on BOs being unable to write officer data. This section never states *how* that's enforced: at the API/auth layer (the BO's session token literally cannot call write endpoints), or only at the UI layer (write controls aren't rendered, but the API would still accept a write from that session if called directly). These have materially different risk profiles — UI-only enforcement means a compromised session or direct API access bypasses the safety argument entirely. **Required before Release 1 build:** state explicitly that read-only is enforced at the API/auth layer, not just the UI, as a hard requirement.

- **Access model:** portal access restricted to the BO in production, or a person the BO specifically assigns. Product/Engineering cannot use the portal to investigate a live issue directly.
- **Non-functional targets:** P95 API response ≤100ms; ~125,000 POCDEX API requests/month expected post-MVP (25,000 MVP monthly active sessions, distinct from pilot-officer record counts tracked elsewhere — sessions and officers are different units); 4-year retention for inactive accounts.
- **Master data sync risk:** Role Profile and Competency master files are extracted and manually uploaded on a **quarterly cadence**, independent of the POCDEX employment-diff problem this PRD otherwise focuses on. An officer tagged to a newly-created job profile won't have competencies mapped until the next quarterly update — a distinct staleness risk not currently in scope anywhere in this PRD.

### 7.4 Assumptions

Reversed from an earlier version — jobId, officerId, idType, status were previously removed after a real changed-fields extract showed no matching column, then confirmed as real, documented API fields. Field names have been updated to reinstate them. One caveat survives: this describes login-time API behaviour, not confirmed daily-batch-diff behaviour.

The receiving team has **not been named**. The receiving-team workflow above assumes Compass Product Operations, based on one signal in a draft RACI ("SOP updates" being that team's responsibility) — not a confirmed assignment. A separate tier model adds a third framing (L1 Ops team/L2 Agency HR/L3 POCDEX) with Agency HR as an escalation stop that has no home in either the RACI's tier model or this PRD's receiving-team language. Until reconciled, treat the receiving-team sections as a proposal, not a spec engineering can build against.

The SOP the receiving team would follow **does not exist yet**. The six-stage workflow and decision tree are first drafts from a single working session, not reviewed or approved.

The daily-diff scope does not cover the Identity/contact-change category at all — it would silently miss cases where only email or NRIC/FIN value changed. Deciding whether to extend the diff scope to identity fields, or explicitly accept that gap, is unresolved.

The Change Category Taxonomy doesn't account for `reportingmanageruid`, `departmentid`, `departmentname`, `personnelarea`, `personnelsubarea` — fields the real-data analysis found changing regularly, including the single largest-volume field in the entire dataset. These don't appear in the API contract documentation either — sharpens rather than resolves the gap: they may not be part of the API contract CC can even call at all, not just unscoped in this design.

The risk tiering behind Batch Categorization depends on Identity/contact change being classified high-risk. A second, independently-produced classification disagrees, putting the equivalent fields in a low-risk bucket. **Must resolve to one agreed answer before batch categorization is built.**

The daily-diff batch job itself is **not built**. Every part of this PRD depending on proactive detection (as opposed to an officer reporting an issue) depends on this job existing first.

The NRIC/FIN secured token for identity fallback matching has **not** received privacy/security approval, and POCDEX has not confirmed it reliably returns this value in all cases. This approval should be tracked and escalated as the **single highest-leverage open item** in this PRD.

**On identity handling generally:** no identity-adjacent case (Identity/contact change, Multiple/conflicting records) should ever auto-resolve, regardless of matching confidence — the failure mode is silent misattribution, not a visible error. `officerId` should be used as a corroborating second signal now (confirmed real, already load-bearing in production), rather than waiting on NRIC/FIN approval to add any identity-layer signal at all. The receiving-team review queue for these categories should stay manual by design even post-MVP — real change-frequency data shows volumes low enough that automating a low-frequency, high-consequence category isn't justified.

The daily-diff job effort estimate (previously 55-125 person-days) was scoped before the batch-job design was finalized and needs re-validation, including for a much higher nightly API call volume at whole-of-government scale. A real 14-day change-frequency measurement (~781 field changes/day whole-of-government, 23/day MVP, out of 3.45% of records changing at all) should anchor the re-validation instead of the original point-in-time sizing alone.

No wireframes or UI design exist for any of the six portal areas — this PRD specifies function, not layout.

## 8. Release

No exact dates — relative sequencing, since several dependencies (daily-diff job, receiving-team assignment, SOP) aren't yet scheduled work.

### 8.1 MVP

**Nothing in this PRD ships inside the current MVP code freeze.** Per direct Engineering confirmation, code freeze applies for VAPT and MVP launch — everything here is a post-MVP fast-follow, not arriving at go-live.

| Phase | Scope | Depends On |
|---|---|---|
| MVP baseline (current state) | Manual Ops Portal comparison only — a BO manually compares CC's stored profile against a live POCDEX call, no categorization workflow, no daily diff, no taxonomy, no batching | Nothing — this is what exists today, unaffected by anything in this PRD |

### 8.2 Subsequent Releases

Three post-MVP increments plus a further-out phase, sequenced by dependency rather than fixed date.

| Phase | Scope | Depends On |
|---|---|---|
| **Release 1** | Categorize-and-route portal: six portal areas, taxonomy, reason codes, audit trail, against manually-triggered comparisons. | UI design work; no other new backend dependency |
| **Release 2** | Daily-diff batch job live — case detection becomes proactive; missing-email newly-vs-persisting distinction possible; batch categorization ships alongside, since bulk review only useful once cases arrive in daily batches | Field-mapping confirmed against the real API contract; daily-batch diffability of jobId/officerId/idType/status still needs POCDEX confirmation; re-validated effort estimate (23/day MVP, 781/day whole-of-government); engineering capacity; Base/Identity classification conflict resolved |
| **Release 3** | Receiving-team workflow formalized — team named, SOP written and approved, remediation tooling built; overlapping tier models reconciled into one | Assumptions above resolved — can't start until a team and SOP exist, and Agency HR's role is placed somewhere |
| Further out | NRIC/FIN token approved and built as identity fallback; identity-field diff coverage added | Privacy/security sign-off; POCDEX confirmation |

*Releases 1-3 are sequential by design — each depends on the previous shipping first. "Further out" doesn't strictly require Release 3 first, but has its own independent approval dependencies unlikely to clear before Release 3 does anyway.*

---

*Generated: 2026-08-14, Version 0.1. Revised same day to Version 0.2 against a product trio review — split Objective into A (BO efficiency, Release-1-achievable) and B (identity-safety, gated on the NRIC/FIN approval); marked the receiving-team sections as structurally provisional; gave CAM integration its own subsection, currently excluded from Release 1 pending real scope; added identity-fallback decision-table and read-only-enforcement gaps to Technology; specified the audit trail schema gaps; added bulk-route partial-failure gap; scoped the IA/design-phase and BO-onboarding gaps; flagged the officer-facing messaging content-design gap. All cross-references to external documents and internal section numbers removed for a self-contained read.*
