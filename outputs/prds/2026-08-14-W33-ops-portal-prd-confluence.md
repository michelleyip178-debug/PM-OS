# Career Compass — Ops Portal

**Status:** DRAFT — for internal review

**Owner:** Michelle Yip, Product Manager, Career Compass

**Version:** 2.3 · 14 August 2026

## Summary

The Ops Portal is a tool that lets Career Compass support staff (called Business Owners, or BOs) see when an officer's employment record has changed or gone out of date, sort that change into a plain-language category, and hand it off to the team that will fix it. BOs review and sort; they can't edit an officer's data directly.

**This document leads with MVP** — the categorize-and-route portal plus the daily automatic check, launching once security testing (VAPT) passes. Everything beyond MVP (the receiving team's fully approved procedure, automatic deactivation, the NRIC/FIN backup identity check once approved) is covered in **Discussion — Future Releases** at the bottom, not mixed into the sections above it.

## Background

Career Compass shows officers their employment record — agency, job, grade, skills — using data supplied by POCDEX, the government's central employment-record system. Today, Career Compass only checks that record once, at first login. If anything changes after that (a transfer, a new role, a corrected email), Career Compass has no way of knowing, and no way to explain the mismatch to anyone.

- About 1.7% of the pilot group (90 of 5,270 officers) already has some kind of record mix-up or duplicate entry
- 274 officers government-wide hold two active job records at once, across two different HR systems
- A separate working session on who should handle these day-to-day found the same gap from the operations side — nobody had agreed who was responsible for what

On 14 August, the team confirmed the Ops Portal will let a BO *see and sort* a case, but not directly change an officer's record — so the receiving team, Compass Product Operations, does the actual fixing. That team's assignment rests on one line item in the Day-2 support document, not a leadership sign-off — **the single biggest operational risk of this launch, tracked in full under MVP Readiness below.**

**The Ops Portal, including the daily automatic check, is the MVP scope.** Ram is arranging engineers to build it; launch follows once security testing (VAPT) passes.

## What We're Trying to Achieve

**Give BOs a reliable way to see when a record has gone out of date, sort it into a clear category, and route it — without a way to accidentally make things worse by acting on incomplete information.** A real 14-day measurement of change frequency sizes the expected daily workload: roughly 23 changes/day across the six pilot agencies, ~781/day government-wide.

**Protect officer identity by design, not just by telling people to be careful.** A quick, well-meant fix could accidentally attach one officer's data to a different officer's profile — actively making the error worse, not just leaving it stale. Look-and-sort only, plus keeping identity/contact and duplicate-record cases off bulk-processing, removes part of that risk by design.

**Confirmed 14 August: no separate approval is required for the NRIC/FIN-based backup identity check** — it's the confirmed fallback whenever email can't match, and can be built without further sign-off. Closes what was previously Open Item #1.

Both goals point to the same thing: officer trust. An officer with a wrong record has no visible way to get it fixed today, and Career Compass can't explain what changed.

## Who This Is For

| Role | Who | What They Need |
|---|---|---|
| **Primary — Business Owner (BO)** | Confirms officer data looks right for their agency, or escalates. Only the BO or their assignee can access the portal — not Product/Engineering. | Understand what changed and sort it, without needing POCDEX's technical data structure or risking the record getting worse. |
| **Secondary — Receiving team** | Compass Product Operations (see Background). | Enough evidence — category, why it was flagged, before/after values — to act correctly first time. |
| **Tertiary — Central support staff** | Respond to a specific officer's enquiry, not proactive review. | See POCDEX vs. Career Compass for one officer, to answer directly instead of escalating. |
| **Affected — The officer** | The person whose record drifted. | Their record reflects reality; if not yet, some sign someone's working on it. |

Covers 6 pilot agencies at MVP; the design has to scale government-wide eventually, where the same drift affects ~1,905 officers (1.25% of 152,895 records).

**At MVP, every role above gets detection, understanding, or routing — nobody gets an automatic fix.** See Discussion — Future Releases for what changes after MVP.

## Situations This Portal Must Handle

Ten grouped situations, ranked by impact — frequency and impact aren't the same. Email reuse is the highest-impact row and one of the rarest, exactly why it needs a design fix rather than relying on volume to get attention. The Effort column shows how much dedicated design work each one still needs, separate from how serious it is.

| Situation | How Often | How Serious | How It Gets Solved | Effort |
|---|---|---|---|---|
| A new officer is issued a departed officer's old email, and sees the departed officer's data | Likely rare — agencies don't typically reissue emails, but frequency isn't confirmed | **Blocker** — one person's data shown to a different, real person; likelihood being low doesn't reduce what happens if it does | The NRIC/FIN backup identity check (see Objective) | Real design work — NRIC/FIN backup check |
| Identity details don't clearly point to one person (wrong/missing email, ambiguous match) | Rare (0.36% of pilot has no email on file) | **Blocker** — same danger as email reuse | Same fix: NRIC/FIN backup check | Real design work — same fix as above |
| Job classification changes, incl. whether a role is publicly listed or confidential | Sometimes (folded into 3.45% change rate) | **Blocker** — looks cosmetic, may be security-relevant | Daily check catches the change, but needs a dedicated high-priority reason code — not the generic bucket | Small addition — one new reason code |
| Officer holds two active jobs across two HR systems, no rule for which is primary | Rare at pilot (0 cases) / Common government-wide (274 confirmed) | **Blocker if it happens** — no resolution path today | Needs a POCDEX decision before government-wide rollout | Real design work — POCDEX decision needed |
| Same officer appears as two separate records | Sometimes (1.35% of pilot) | Worse experience, not a safety risk | Rule: correct, unique employment ID wins | Real design work — dedup rule |
| Job, position, agency, or posting changes | Sometimes (folded into 3.45% rate) | Worse experience — wrong skills/role match | Already in daily-check scope; solved as soon as MVP launches | Zero — daily check alone |
| Source-system correction never reaches Career Compass | Sometimes | Worse experience; becomes a Blocker if identity-related | Daily check catches it generally; identity slice covered by NRIC/FIN fix | Zero — daily check alone |
| ID type changes, or someone rejoins after leaving | Rare — not yet measured | Worse experience | Needs dedicated investigation — no fix designed yet | Real design work — discovery spike |
| Title change, accidental delete/recreate, unusual contractor status | Rare to sometimes | Minor/cosmetic | Covered by daily check or resolves by design | Zero — daily check alone |
| No-pay leave and return | — | Already solved | Already built | Zero — already shipped |

Four rows need zero dedicated design work — solved simply by shipping the daily automatic check. One (job classification changes) is caught by the same daily check but needs a small addition — its own dedicated reason code. The remaining five need real, separate design work: a deterministic dedup rule, a discovery spike, a POCDEX decision, and (for the two identity-related rows) the NRIC/FIN backup check.

## How MVP Works

### The Portal

Six sections. No visual designs exist yet — this is scope, not screens.

| Section | Shows | What the BO Does Here |
|---|---|---|
| Overview | Open case count and urgency | Starting point — click into a group |
| Identity issues | Officers whose identity doesn't clearly match one person | Sort as identity/contact issue; send on |
| Employment record issues | Genuine second job vs. mistaken duplicate | Sort as duplicate/conflicting record; send on |
| Record changes | Before/after comparison for the changed field | Sort into category; send on anything meaningful |
| Update status | Records where the nightly check failed/stuck, and why | Flag to receiving team if stuck |
| History and reporting | Full case timeline | View only |

A detected change sorts into one of seven categories, tied to the underlying fields:

| Category | What Changed | Underlying Fields |
|---|---|---|
| Organisational move | Agency changed | agencyid, agencyname |
| Role change | Position changed | employmentid, primaryposition |
| Classification change | Job family/function/grade changed | jobfamily, jobfunction, jobgrade |
| Reporting/org-structure change | Manager/department changed (not in daily-check scope today) | reportingmanageruid, departmentid, departmentname, personnelarea, personnelsubarea |
| Identity/contact change | Email/name changed, or doesn't resolve to one person | workemailaddress/email, firstname, lastname, idnumber/idNumber, idType, officerId |
| Eligibility/status change | Active/Inactive/NPL/Contingent changed | status |
| Multiple or conflicting records | Duplicate or multi-hat | employmentid (multiple), officerId |

Each category also has a reason code (e.g. `ID-NO-MATCH`, `PROFILE-CHANGED`, `EMP-AGENCY-CONFLICT`), a priority (P0/P1), and an eventual officer-facing message. A BO's only write action is pick a category, add an optional note, and send it on — never edit the record. Every action is logged (who, when, category) for a full audit history.

**The daily automatic check ships at MVP**: every night, the system re-pulls each officer's record and compares it to the day before.

- Same-category cases from one nightly run are grouped for bulk review — but only for the four lower-risk categories (agency move, role change, job classification, active/inactive-status)
- Identity/contact changes and duplicate records always stay one-at-a-time — that's where the wrong-person-data risk lives (see Objective). Confirmed 14 Aug: `email`/`idNumber` are classified high-risk identity data, closing what was previously Open Item #6.

### What Happens to a Case at MVP

At MVP, a BO's involvement is the full lifecycle — the case is detected, categorized, and sent on. What happens after it's sent on (triage, investigation, the actual fix) is Fast-Follow scope; see Discussion — Future Releases for the full six-step design.

| Step | What Happens | Who |
|---|---|---|
| 1. Detect | Case created with reason code, priority, reference number | System (daily check, MVP) |
| 2. Sort and send | BO reviews, picks a category, sends it on | BO — involvement ends here at MVP |

**Escalation, once a case leaves MVP scope:** technical bugs → Engineering; POCDEX data mismatches → POCDEX; upstream agency HR errors → that agency's HR team; no-existing-rule questions → Compass Product Operations.

**Escalating to POCDEX specifically requires due diligence before the ticket is raised.** Per POCDEX's own Support Request Guidelines, downstream must collect:

- **POCDEX UID** — the officer's system identifier
- **HR ID** — the officer's source-system identifier (HRPS PERNR or Cumulus Worker Number)
- **Current email**, with due diligence confirming the profile is actually active — not just pulling a stored value
- **Latest Position ID(s)**, plus start date
- **Latest action type**, and when/how it was updated upstream
- **Effective date and last-updated date**
- **Screenshots of the relevant upstream UI** — HRPS: IT0000, IT0001, IT0105, or IT0395 screens (Annex E); or Cumulus: the "People" screen
- **Whether the payload was actually received downstream** — confirmation Career Compass genuinely got (or didn't get) the data, not an assumption

Logged in IMTL, and/or escalated by email to pocdex_support@psd.gov.sg. Acknowledgement SLA is 3-5 business days; a ticket left at "Pending Confirmation Closure" for 7 days with no response auto-closes as Resolved — worth tracking independently so a case doesn't silently close unverified.

**What the officer sees at MVP:** nothing, until their case is routed (a short, generic message tied to the reason code) — unless proper officer-facing messaging is designed (not done yet, Open Items #9). At MVP, that's *flagged*, not *fixed*.

## Behind the Scenes (Technical Notes)

- **Refresh mechanism:** a once-daily job, full-profile repull, field-by-field diff against yesterday's copy. Not yet built.
- **Fields checked today:** `agencyid`, `agencyname`, `jobfamily`, `jobfunction`, `jobgrade`, `employmentid`, `primaryposition` — plus `jobId`, `officerId`, `idType`, `status`, all confirmed real POCDEX fields.
- **Identity confirmation (four steps, in order of reliability):** WOG AD email locates a candidate record (starting point, not proof) → secured NRIC/FIN token confirms identity across email changes (approved, not yet built — see Discussion) → Employment ID reconciles the active position set → timestamps are a signal only, never identity.
- **Access:** only the BO or their assignee. Product/Engineering can't use the portal to investigate a live issue.
- **Performance/storage:** P95 response ≤100ms; ~125,000 POCDEX requests/month expected once the daily check runs; 4-year retention for inactive accounts.
- **Batch-job completion window — not yet defined, flagged as a gap:** the daily check pulls and compares every officer's full record, every night, across the 6 pilot agencies at MVP (design must still scale to ~152,895 government-wide records eventually). There is currently no target for how long this run is allowed to take or what happens if it doesn't finish before the next business day starts. This needs a stated completion-time target and a defined failure behavior (partial run vs. abort-and-retry) before MVP build — added to Open Items #17.
- **Separate, slower risk:** role/skill-matching reference files are updated by hand, roughly quarterly — a different kind of staleness from the drift problem above.

## MVP Readiness

MVP is a larger scope than originally planned: the full Ops Portal, the daily automatic check, and case-grouping, launching together once security testing passes. What ships: all six portal sections, the category/reason-code system, a complete audit log, the daily check running automatically from day one, and grouped/bulk-processing for the four lower-risk categories.

### One Decision That Needs an Explicit Yes, Not a Default

Launching without this actively decided means it's been decided by inaction.

**Launching with the receiving team's procedure unsigned requires an explicit call.** MVP generates cases automatically, at full daily-check volume, from day one across the 6 pilot agencies (~23 changes/day, per Objective) — proactive from launch, not gradual. Product Operations' leadership needs to explicitly sign off on their own procedure before or immediately after launch (Open Items #13) — not be assumed willing because nobody's objected.

Sits with Michelle. (The identity-safety gap that previously sat alongside this — NRIC/FIN approval — is resolved; see Objective.)

### If a Blocking Open Item Slips

Six Open Items (#3, #4, #5, #7, #10, #16) block MVP build outright — work cannot proceed without them. If any slip, the fallback is **descope, not silently absorb the delay**:

- **#7 (no visual design), highest-probability risk** — launch with the two lowest-complexity portal sections (Overview, Update status), hold the other four for a fast-follow patch within MVP
- **#5 (bulk partial-failure)** — bulk-processing ships disabled; BOs categorize one case at a time, communicated as a known launch-week limitation, not discovered
- **#3 or #4 (read-only enforcement, audit-log schema)** — not descopable. These are the safety guarantees the design rests on; if either isn't ready, launch slips
- **#10 or #16 (daily-check field coverage/reliability)** — narrow the daily check's field scope at launch to what POCDEX has confirmed reliable; the rest is a known gap, not a silent drop

Decision owner: Michelle, with Ram and Engineering leadership — not a default outcome that happens if a date arrives.

---

## Open Items

| # | Open Item | Where It Bites | Owner / Next Step |
|---|---|---|---|
| 1 | ~~NRIC/FIN backup check requires Privacy/Security approval.~~ **RESOLVED 14 Aug** — confirmed no separate approval is required; NRIC/FIN is the confirmed fallback identity check whenever email can't match, and can be built as designed. | — | Closed. |
| 2 | No rule for when identity-matching signals disagree with each other, not just when one is missing. | The exact shape of the email-reuse failure case — undefined behavior here means email-reuse cases can still slip through even once the NRIC/FIN fallback is built. | **Product + Architecture.** Build the decision table before the next build phase. |
| 3 | Read-only enforcement location (system/security level vs. on-screen only) is unspecified. | If enforced only on-screen, a compromised login bypasses it — the portal's entire safety claim breaks. | **Engineering/Architecture.** State API/auth-layer enforcement as a hard requirement now. Blocks MVP build. |
| 4 | History-log design incomplete: retention, immutability, bulk-action schema, query access. | Can't prove "zero wrong-officer fixes" without this — the audit trail is unverifiable. | **Engineering.** Finalize before MVP build. Blocks MVP build. |
| 5 | No defined behavior for a bulk action that partly fails. | Undefined at MVP's 6-pilot-agency batch volume, and the gap only grows once the design scales government-wide. | **Engineering.** Define the transaction boundary before building. Required before launch. |
| 6 | ~~Two documents disagree whether `email`/`idNumber` are low-risk or high-risk.~~ **RESOLVED 14 Aug** — classified as high-risk identity data. `email`/`idNumber` stay case-by-case, never bulk-eligible, consistent with Identity/contact change's existing rule. | — | Closed. |
| 7 | No visual designs for any of the six portal sections. | Sprint planning cannot start. | **Design + Product.** Half-day working session, now — Ram is already resourcing engineers with nothing for them to build against. |
| 8 | No onboarding or in-portal guidance for the category system. | BOs triaging dozens of cases a day will mis-categorize on subtle distinctions with no way to check themselves. | **Design.** Scope guidance or training material. |
| 9 | Officer messages are generic and don't change with case age or severity. | Undermines officer trust — the PRD's own stated objective — most visibly on the highest-priority cases. | **Design/Content.** Rewrite covering timeframe, support contact, lifecycle stage. |
| 10 | Daily check doesn't scan identity/contact fields at all. | An email-only or NRIC/FIN-only change goes undetected — silently. | **Product + Architecture.** Decide: extend scope, or accept the gap in writing. Blocks MVP build. |
| 11 | No taxonomy category for `reportingmanageruid`, `departmentid`, `departmentname`, `personnelarea`, `personnelsubarea` — `reportingmanageruid` is the single highest-volume field in the dataset. | Real, sized detection gap, and it may not even be callable via the API. | **Product + Architecture.** Confirm API availability first, then design the category. |
| 12 | ~~Receiving team not named.~~ **RESOLVED 14 Aug** — confirmed as Compass Product Operations. Residual gap: a separate three-tier escalation model gives Agency HR no seat. | Agency HR has no defined place in the reconciled process. | **Product + Ops leadership.** Reconcile the models; place Agency HR explicitly. |
| 13 | Receiving team's procedure is an unsigned first draft. | MVP generates cases automatically across all 6 pilot agencies from day one — Product Operations would be absorbing that volume against a process their own leadership hasn't approved. | **Product + Ops leadership.** Get explicit sign-off before or immediately after MVP launch. |
| 14 | Effort estimate (55–125 MDs) predates the finalized design and real volume data. | Funding/schedule confidence is built on a stale number, for work that's now MVP-critical, not a later phase. | **Engineering.** Redo the estimate against real change data (~23/day pilot, ~781/day government-wide). Required before launch. |
| 15 | Automatic deactivation for departed officers has no contract, timeline, or owner — genuinely unscoped. | Login blocking stays the only safeguard against a departed officer's continued access, indefinitely, with no plan to close it. | **Product.** Write the scope; only then assign it a release. Nobody owns this today. |
| 16 | `officerId`/`idType`/`status`/`jobId` work at login but aren't confirmed to work in the nightly batch job. | If they don't hold up under nightly pulls, the daily check silently misses real changes on these fields. | **Architecture.** Confirm directly with POCDEX. Required before launch. |
| 17 | No completion-time target or failure behavior defined for the nightly batch job, at up to ~152,895 government-wide records. | If the job doesn't finish before the next business day, nobody has defined what happens — cases could be silently stale, duplicated, or missing depending on how it fails. | **Engineering/Architecture.** Set a completion-time target and define behavior for a run that doesn't finish in time (partial results vs. abort-and-retry). Required before MVP build. |

---

## Discussion — Future Releases

Everything below is out of MVP scope. Included for context and sequencing, not as build-ready spec — none of it should be read as committed or scheduled work until it's promoted into a phase with real dates.

### Release Plan

No firm dates — a relative order, since some dependencies aren't scheduled work yet.

| Phase | Scope | Needs to Happen First |
|---|---|---|
| **MVP** | The Ops Portal (all six sections, category system, reason codes, audit log) plus the daily automatic check — detection is automatic from day one; similar cases can be grouped. No automatic deactivation. Launches once security testing passes. | Visual/interaction design; security testing passed; field mapping confirmed; POCDEX confirms the daily check works reliably; effort estimate re-checked; batch-job completion target defined |
| **Fast-Follow** | Receiving team's process made official — approved procedure, tools to actually fix a case | Depends on several open items resolving first |
| Not yet placed | Automatic deactivation for departed officers | Scoping hasn't started |
| Further out | NRIC/FIN backup check, once built (approval no longer required — confirmed 14 Aug); daily check expanded to identity fields | Needs build effort, POCDEX confirmation |

MVP has to happen before Fast-Follow can start.

### The Receiving Team's Full Workflow (Fast-Follow)

Six steps, drafted from one working session — leadership sign-off is still outstanding (see Background, Open Items #13). Step 1 and 2 are MVP (covered above); steps 3-6 are Fast-Follow.

| Step | What Happens | Who |
|---|---|---|
| 1. Detect | Case created with reason code, priority, reference number | System (daily check, MVP) |
| 2. Sort and send | BO reviews, picks a category, sends it on | BO — involvement ends here |
| 3. Group similar cases | Related cases grouped, next step suggested | Receiving team |
| 4. Investigate | Records compared against agency/POCDEX source data | Receiving team — any identity link/merge needs a second person's independent sign-off |
| 5. Fix | Controlled re-check, escalation, or source-correction request | Receiving team |
| 6. Confirm and close | Record re-checked, rules re-run, case closed with root cause | Receiving team |

Step 4's second-person sign-off is the one mandatory safeguard that catches a wrong category or bad identity match before anyone acts on it — everything upstream can be wrong without anyone noticing, since that's the nature of drift. An actual repair for an officer's record only arrives once this workflow ships.

### Automatic Deactivation for Officers Who Leave

Career Compass would ideally get an automatic notification when an officer becomes inactive, closing their account without anyone having to notice. **Not part of MVP — genuinely undecided, not just scheduled for later.** No agreed contract, timeline, or owner exists (Open Items #15).

### NRIC/FIN Backup Identity Check, Once Built

No longer gated on approval (confirmed 14 Aug, closes former Open Item #1) — this is now a build-effort question, not a sign-off one. Once built, it closes the identity-safety gap described in Objective and gates extending the daily check's field scope to identity/contact fields (Open Items #10).

---

## Appendix: Why "Last Modified Date" Was Not Used for Change Detection

Worth documenting explicitly, since this alternative comes up periodically: the team considered using a "last modified date" field as the trigger for change detection, and deliberately moved away from it in favor of the daily full-record comparison described under How MVP Works. The risks below are why.

| # | Risk | Why It Matters |
|---|---|---|
| 1 | **Ambiguous meaning** — a timestamp could reflect the source-system edit (HRPS/Cumulus), or the moment POCDEX ingested/republished the record. These aren't the same moment. | If Career Compass assumes one meaning and POCDEX means the other, you get false negatives (a real change looks old) or false positives (a routine POCDEX re-sync looks like a fresh change). |
| 2 | **No agreed timezone or tie-ordering rule** — two fields changing close together, or a batch job rewriting records at midnight, can't be reliably ordered without one. | Undefined tie-breaking risks either missing changes or reprocessing the same case repeatedly. |
| 3 | **Signal only, never proof** — a recent timestamp says *something* touched the record, not *what* changed or whether it's meaningful. A full comparison is still needed to know that. | Undercuts the efficiency case for using timestamp-based detection in the first place — you end up needing the full diff anyway. |
| 4 | **Reliability not confirmed with POCDEX** — working at login-time doesn't mean POCDEX will consistently supply this field every night, for every officer, across all record types (transfers, corrections, multi-hat cases) — which is what the nightly comparison needs to actually catch a change. | An unreliable trigger means drift goes undetected on any record where the timestamp doesn't update as expected — silently. |
| 5 | **External dependency risk** — the field's exact behavior is owned and defined by POCDEX, outside Career Compass's control. | Any future change to how POCDEX populates or updates the field can silently break detection, with no visibility into why. |

**Why the daily full-record diff avoids all five:** it doesn't ask "did the timestamp change" — it directly compares every field, every night, against yesterday's snapshot. Timestamp semantics become irrelevant to detection. Timestamp only becomes relevant again if a faster-than-daily, event-triggered refresh is pursued later — explicitly lower priority, since the daily diff already resolves most of what that would have been for.

---

*Generated 2026-08-14, Version 2.3. Full formatting/consistency pass — cleaned up stale artifacts left behind by prior edits: a leftover bullet in "How MVP Works" still described Open Item #6 as an unresolved blocker after it was already marked closed; Technical Notes still said the NRIC/FIN token was "not yet approved," contradicting Objective; the Release Plan's MVP dependency list still listed "field-risk disagreement resolved" as a pending item. Verified heading hierarchy (H1→H2→H3, no skipped levels) and confirmed no remaining references treat Open Items #1 or #6 as open. No facts, numbers, gates, owners, or Open Items changed — only stale cross-references corrected.*
