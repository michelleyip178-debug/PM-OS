| | |
|---|---|
| Doc Created | 17 Aug 2026 |
| PM | Michelle |
| Tech | — |
| Designer | — |
| Business Owner | Xian Zhang and WD Ops |
| Infra Eng | — |
| Target launch | Pre-freeze, full portal — not yet Engineering-confirmed. See Section 1. |
| Epic Link | TBC, not yet in Jira |
| Figma Link | — |

## 1. Background & Context

Career Compass shows officers their employment record — agency, job, grade, skills — using data from POCDEX, the government's central employment-record system. It only checks that record once, at first login. Anything that changes after that, a transfer, a new role, a corrected email, goes unnoticed, with no way to explain the mismatch to anyone.

- 1.7% of the pilot (90 of 5,270 officers) already has some kind of record mix-up.
- 274 officers government-wide hold two active job records at once, across two different HR systems.
- A separate working session on who handles this day-to-day found nobody had agreed who was responsible for what.
- **Original Engineering finding:** the full Ops Portal, the BO-facing UI, the receiving-team workflow, doesn't ship inside the MVP code freeze. That was called post-MVP fast-follow. Data Office/Huiting asked for Day-2 traceability and should hear this directly rather than find out after go-live.
- **Since superseded by a new ask, not yet re-confirmed by Engineering.** BOs need something to start with, and Huiting has assessed 6 of the 14 test cases (TC1, TC2, TC3, TC7, TC8, TC9) as crucial to test pre-MVP. The team is now targeting the full 4-story portal, detection, Overview/Update status, case review, and escalation, ahead of the code freeze, not just detection-only. This is a target, not a confirmed Engineering commitment, see Section 12.
- The daily-check design already calls the POCDEX API to re-pull data, so that part isn't missing. What's missing is POCDEX's own last-updated timestamp, which was never requested during scoping. So we can say the check runs daily, just not how fresh the underlying data actually is.

---

## 2. Problem Statement

> Career Compass can't detect when an officer's record drifts after first login, because it only checks POCDEX once, resulting in stale or wrong data sitting on a profile with nobody able to see it, officer, BO, or Product/Engineering.

> Business Owners have the same problem from the other side: no way to see a record's gone out of date, sort it, and route it, because nothing surfaces drift at all. Issues only turn up if an officer happens to notice and complain.

---

## 3. Data Analysis & Evidence

| Metric | Value |
|---|---|
| Pilot group with record mix-up/duplicate entry | 90 of 5,270 officers (1.7%) |
| Officers government-wide holding 2 active jobs across 2 HR systems | 274 |
| Government-wide scale (design must eventually cover) | ~1,905 officers affected (1.25% of 152,895 records) |
| Measured daily change volume, 6 pilot agencies | ~23 changes/day |
| Projected daily change volume, government-wide | ~781 changes/day |
| Pilot officers with no email on file | 19 (0.36%) — identity resolution fails outright |
| Pilot officers affected by duplicate/multi-hat records | 71 (1.35%) |

**Data caveat:** pilot record count doesn't fully reconcile across source documents. A real snapshot shows 5,322/5,342 records for the 6 MVP agencies, while every percentage above is calculated against 5,270, about a 1% gap. Unconfirmed whether that's a counting-method difference or a different pull date. Worth confirming before citing these figures externally.

Which test cases are UAT-priority, and full handling for all 14, are in **Section 8 (Scope)**.

---

## 5. Target User

| # | User | Primary need |
|---|---|---|
| **1 — Primary** | Business Owner (BO), confirms officer data looks right for their agency or escalates. Only the BO or their assignee can access the portal, not Product/Engineering. | Understand what changed and sort it, without needing POCDEX's technical data structure or risking the record getting worse. |
| **2 — Secondary** | Receiving team, not yet formed. Cases will route here once a team exists. | Enough evidence, category, why it was flagged, before/after values, to act correctly first time. |
| **3 — Tertiary** | Central support staff, responding to a specific officer's enquiry, not proactive review. | See POCDEX vs. Career Compass for one officer, to answer directly instead of escalating. |
| **4 — Affected** | The officer whose record drifted. | Their record reflects reality, or at least a visible sign someone's working on it. |

Covers 6 pilot agencies at launch. Design has to scale government-wide eventually.

---

## 6. Hypothesis (Value Proposition)

> If we give BOs a reliable way to see when a record has gone out of date, sort it into a clear category, and route it, then Business Owners will catch and act on record drift instead of it going unnoticed, building officer trust that Career Compass data is accurate, without a way to accidentally make things worse by acting on incomplete information.

---

## 7. Success Metrics

The team is now targeting the full 4-story portal pre-freeze (see Section 1), which means this gate applies earlier than previously framed. Detection without a receiving team to act on it doesn't deliver the hypothesis above. That makes this a launch gate, not just something to track, and the receiving-team gap (Section 10) now blocks the earlier target too, not just a comfortably post-MVP release. A portal that correctly flags 23 cases a day into a queue nobody works is a different, unmet promise, not a smaller version of success.

### 7.1 Outcome Metrics (North Star)

- % of flagged cases that reach a confirmed, correct resolution (not measurable until a receiving team exists)
- Officer trust signal: reduction in officer-reported "my profile is wrong" enquiries over time

### 7.2 Input Metrics

- % of in-scope field changes detected within 24 hours of occurring
- % of cases correctly auto-categorized (no BO re-categorization needed)
- BO time-to-sort per case
- Of the 6 priority test cases (TC1, TC2, TC3, TC7, TC8, TC9), % correctly detected and categorized in UAT — this is the acceptance bar. TC7's detection method is an open question, see Section 12, so this bar isn't fully locked yet.

### 7.3 Guardrail Metrics (Events that will lead to rollback or pause)

- Any identity/contact or duplicate-record case processed via bulk action pauses everything for an audit. This should never happen by design.
- Batch job failing to complete within its target window escalates to Engineering.
- Any sign of one officer's data showing against a different officer's identity is a hard stop. That's the one failure mode (TC13) this whole design exists to prevent.

---

## 8. Scope (Stories + Success Criteria)

| Story | Success Criteria | Notes |
|---|---|---|
| Daily sync detects, diffs, categorizes, and logs a POCDEX record change | A detected change is sorted into one of six categories with a reason code and priority; every action is logged (who, when, category) | **All 4 stories below now target pre-freeze,** per the updated ask in Section 1 (not yet Engineering-confirmed). The 6 priority test cases (TC1, TC2, TC3, TC7, TC8, TC9) are Huiting's pre-MVP-critical set. Straightforward build against fields already confirmed real, no new visual design needed. |
| BO reviews Overview and Update status sections | BO can see open case count and urgency; BO can see stuck/failed nightly runs and flag them | The two lowest-complexity sections, launch these first if design slips on the other four |
| BO reviews and sorts Identity, Employment record, and Record change cases | Officer identity/contact and duplicate-record cases stay one-at-a-time, never bulk-processed | No visual designs exist yet for these four sections, blocking sprint planning until a design session happens |
| A case escalates to POCDEX or the receiving team | Escalation includes all required due-diligence fields (POCDEX UID, HR ID, current email, position ID, etc.) before the ticket is raised | Receiving team doesn't exist yet, see Section 10 |

A structured POCDEX data review found 14 distinct drift scenarios. Six got flagged Priority in source correspondence from 9 Aug — TC1, TC2, TC3, TC7, TC8, TC9 — if UAT time runs short, these can't be dropped. Every UAT case should test both what's actually stored in CC and what shows in the Ops module, that pairing is the real test, not just the end-state business rule.

TC13 and TC11 matter regardless of their non-priority UAT tag, severity trumps priority tagging here — see their rows below for detail.

### All 14 Test Cases, Full Context

Checked against the Officer Profile Page, the only screen that currently renders POCDEX data to an officer. Each row below covers what actually happens, what breaks, and how MVP handles it (or doesn't) for that test case.

| TC & Scenario | What's Actually Broken | Field(s) | If It Drifts | Severity | Frequency | MVP Handling |
|---|---|---|---|---|---|---|
| **TC1** — Agency transfer, including HRPS-internal and HRPS↔Cumulus moves, especially cross-system secondment | Reflects the original position only if the old email is retained. | `agencyid`, `agencyname`, `employmentid` — shown on the profile header. API: `presentAgencyCode`, `employmentId`/`positionId` | Wrong agency shown on the officer's own profile, the first thing they see after login | Medium — silent data drift | Frequent (est.) | **In MVP scope** — covered by the daily diff. Ops Portal patch is the current mitigation; post-MVP, link records across an email change via NRIC, pending discovery. |
| **TC2** — Officer transfers between a POCDEX agency and a non-POCDEX agency | Assumes accurate first-instance email — if officer X's email is wrongly recorded as officer Y's, Career Compass shows X's position when Y logs in. 19 pilot officers (0.36%) have no email on record at all, so identity resolution fails outright for them. | `workemailaddress`/`email`, `idnumber` (NRIC/FIN), `officerId` — email is the login credential. API: `email`, `idNumber`, `officerId` | The wrong person's data can be shown to whoever logs in — a stale or reused email is a misattribution risk, not just staleness | High — misattribution/privacy | Occasional (19 confirmed, floor only) | **Gap** — the diff doesn't cover identity fields, so this isn't actually caught. CC uses email as the primary identifier, the root cause. More robust ID resolution planned post-MVP. |
| **TC3** — Same underlying move as TC1, but via secondment specifically | Same as TC1. | `agencyid`, `employmentid`. API: `presentAgencyCode`, `employmentId`/`positionId` | Same as TC1 — wrong agency shown | Medium — silent data drift, same as TC1 | Occasional (est.) | **In MVP scope** — covered by the daily diff. Officer may still log in if email matches first login and WOG AD allows. |
| **TC7** — No-pay or medical leave, and the officer's return from it | Resolved 14 Aug. NPL over 90 days was excluded entirely, not returned as INACTIVE, prior to the fix. | `status` only. API: `status` (no reason code) | Ops can't distinguish an expected NPL exclusion from a real gap using this field alone. | Low, but re-open pending Section 12 confirmation | Rare (est.) | **Open question** — previously called fully resolved. Login-block behavior is unaffected, but Ops can no longer tell NPL exclusion apart from other Inactive cases. See Section 12. |
| **TC8** — An upstream data-entry error gets corrected at the source | Same failure mode as TC2. | `firstname`, `lastname`, `email`, `idnumber`, `officerId` — name and email are displayed. API: `firstName`, `lastName`, `email`, `idNumber`, `officerId` | Officer keeps seeing wrong name/email until manually patched — same misattribution risk as TC2, just triggered by an upstream data-entry error instead of a transfer | Medium — silent data drift | Rare (est.) | **Gap.** Career Compass will not auto-update the profile once corrected upstream. Post-MVP concern if it recurs. |
| **TC9** — An officer's Position ID changes without a full agency transfer | Same failure mode as TC2 — stale position drives wrong competency mapping. | `employmentid`, `primaryposition` — shown via title and competency lookup. API: `employmentId`/`positionId`, `primaryPosition` | Wrong title shown, and old-role competencies stick around since nothing re-triggers the lookup | Medium — silent data drift | Frequent (est.) | **In MVP scope** — covered by the daily diff. |
| **TC4** — An officer's identifier type flips (FIN→NRIC or vice versa) | No reconciliation logic across an identifier change. Confirmed unbuilt, not just untested. | `idnumber`, `idType` — confirmed real; `officerId` stays constant through the conversion. API: `idNumber`, `idType`, `officerId` | Invisible directly, but a matching field — if the ID type flips and nothing reconciles it, the system risks losing track of who's who behind the scenes | High — will fail if it occurs, unbuilt capability | Rare (est.) | **Not handled** — requires a discovery spike to determine record linking/reconciliation. |
| **TC5** — An officer departs and later returns to service | Same gap as TC4 — no reconciliation against the old record. | `employmentid`, `officerId`, `status` — daily-batch diffability still an open question. API: `employmentId`/`positionId`, `officerId`, `status` | Officer could be wrongly blocked from logging back in if `status` doesn't correctly flip to active, or the system fails to recognize them as the same person | High — unbuilt capability | Rare (est.) | **Not handled,** same discovery need as TC4. |
| **TC6** — A POCDEX record is deleted and recreated by mistake | Invisible to Career Compass since it doesn't re-call POCDEX after first login. Masked by construction, not actually handled. | `employmentid`, `officerId`, `status`. API: `employmentId`/`positionId`, `officerId`, `status` | Same login-gate risk as TC5 — wrong `status` or confused record identity, not a visible profile bug | Medium now, rises once per-login calls exist and the masking goes away | Rare (est.) | **Masked at MVP** by the first-login-only design; resolves by design post-MVP once per-login calls exist. |
| **TC10** — A title change happens without a Position ID change | Same treatment as TC9 — no update happens for MVP. | `employmenttitle`/`businesstitle`, `employmentid` unchanged. API: `employmentTitle`/`businessTitle` | Wrong job title shown on the officer's own profile — cosmetic, but the second thing an officer sees after their name | Low — silent data drift, explicitly cosmetic only | Occasional (est.) | **Gap** — no update for MVP. |
| **TC11** — A classification change, potentially including a masked-to-non-masked shift | Same treatment as TC9 for the base change, but a masked-to-non-masked shift could go completely undetected, read as "no update happened." | `jobfamily`, `jobfunction`, `jobgrade`, `employmentid` unchanged — shown via the competency section. API: `jobFamilyId`, `jobFunctionId`, `jobGradeId` | Wrong Core/Functional competencies shown. Severity is specifically the masked case — could look like nothing happened, so nobody knows to check. | **High** — looks cosmetic but may not be, flagged as a potential security/classification gap | Occasional (est.) | **Gap** — no update for MVP, masked changes can go fully undetected. |
| **TC12** — A duplicate or multi-hat officer record exists | No detection exists, no documented POCDEX dedup rule. Current behavior: use first active entry, union competencies. | `employmentid` (multiple), `officerId` as the disambiguation anchor — backend only. API: `employmentId`/`positionId`, `officerId` | Not shown directly — detection here is in scope, but displaying it on the officer's profile is a separate, descoped decision (see Descoped table below). Detection matters even without a screen to show it on. | Medium — sized against real data (71 pilot officers, 1.35%), with a proposed fix already drafted | Documented (71 pilot, 274 govt-wide) | **Workaround only** — uses first active entry, real fix needs post-MVP discovery. |
| **TC13** — Email reuse assigns a new officer the same login identity a departed officer once had | The new officer can inherit and see the departed officer's actual data. The NRIC/FIN fallback token is designed to close this, but needed privacy/security approval first, keeping exposure live. Approval cleared 14 Aug; the fix itself is still not built. | `workemailaddress`, `idnumber`, `officerId` — same email, different token/`officerId` underneath, that mismatch is the mechanism. API: `email`, `idNumber`, `officerId` | Highest-severity outcome of all 14 TCs — a real person sees a different real person's actual data. This is the concrete mechanism behind the stale-or-reused-email risk in TC2 above. | **Critical** — data exposure between two individuals, the only TC with that classification | Rare, unmeasured | **Gap** — NRIC/FIN fix designed but not built. |
| **TC14** — An officer becomes contingent, or moves between contingent and active status | CC saves a profile only at first login. Contingent at that point means no profile, can't log in. Later reclassification is treated as a new first login. The reverse transition (active → later contingent) isn't addressed, only contingent→normal is documented. | `sourcesystem`/`hrSystem`, `status` only — no reason code — shown via login gate. API: `hrSystem`, `status` | No visible bug in the documented direction. Undocumented reverse case still open. Design didn't depend on the reason code, so no change here. | Medium — untested, unconfirmed symmetric | Rare (est.) | **Supported by design,** fully in MVP for the forward case. Unaffected by the reason-code gap. |

**Full severity distribution, all 14:** Critical — TC13. High — TC2, TC4, TC5, TC11. Medium — TC1, TC3, TC8, TC9, TC12, TC14. Low — TC7 (open question, see Section 12), TC10 (cosmetic).

**Frequency note:** Only TC2 and TC12 carry a real count (19 no-email pilot officers; 71 multi-hat pilot officers / 274 government-wide). Everything else is a reasoned estimate from the mechanism, not measured — worth a POCDEX pull before citing externally.

Two categories got cut from scope entirely, see Descoped below — not listed as their own TC rows since they're field categories, not individual test cases.

**Descoped:**

| Item | Why |
|---|---|
| Reporting/org-structure change | Not displayed anywhere in Career Compass today (checked against the Officer Profile PRD), and POCDEX field availability is unconfirmed except `departmentname` |
| Double-hatting status shown on the officer's own profile (display only, not detection — see TC12 for the detection side, which stays in scope) | The system will still quietly notice and flag double-hatting cases to a BO behind the scenes. The officer just won't see anything about it on their own profile, because nobody's building that part of the screen — e.g. putting something on the officer's profile page that says "you have two jobs." |

**Note on double-hatting specifically:** if a fix ever gets built for it, that fix is on Career Compass to design, not POCDEX. POCDEX just hands over both job records when someone holds two jobs — it doesn't say which one is primary. Merging them into one sensible view is our logic to build.

### The Missing Fix Path

Once a change is detected, someone still has to actually fix the officer's record. There's no team assigned to do that today. "Compass Product Operations" is a name on one line item in the Day-2 support document, not a staffed function with leadership.

**Proposal (from Adrian):** don't route every fix through a person. Split it by risk:

- **Auto-fix, no human needed:** fields like job family or job function. Most officers don't even track these details about their own role, so a human double-check doesn't add real safety, just delay.
- **Keep a human in the loop:** fields like NRIC or email. These are things an officer would notice if wrong, and a bad auto-fix here could cause real harm, like misrouting someone into the wrong account (see TC13, Section 8).

This gives the project two real paths forward, and neither is picked yet:

1. **Get a receiving team in place before launch,** so a person reviews and fixes every case.
2. **Auto-fix the low-risk fields, human-review only the risky ones (Adrian's proposal),** so this doesn't depend on having a full team ready on day one.

---

## 9. Go-To-Market Plan

- Target launch group: 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS)
- Comms plan: TBC, blocked on a receiving team existing at all, not just a sign-off. Also needs a direct message to Data Office/Huiting confirming the pre-freeze target once Engineering signs off, see Section 12.
- Training / enablement: BO onboarding and in-portal guidance for the category system, not yet scoped
- Change management: TBC
- Support model: escalation paths defined for Engineering, POCDEX, and agency HR. The fourth path, no-existing-rule questions, has no team to route to yet.

**Phases:**

- First release, full portal, targeting pre-freeze per Section 1: 6 pilot agencies. Target date is unconfirmed by Engineering, see Section 12.
- Scale: government-wide, ~1,905 officers affected at that scale
- Steady state: TBC, depends on a receiving team and the fix workflow landing

---

## 10. Risks, Assumptions & Mitigations

These are the ones that actually touch MVP go-live.

| Risk/Assumption | Type | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| Pre-freeze full-portal re-scope (Section 1) not yet Engineering-confirmed — Data Office/Huiting may still be working off the old "nothing ships at MVP" finding | Comms/Timing + Delivery | High — significant re-scope, no sign-off yet | High — risks repeating the original surprise, in the other direction | Get Engineering to confirm the new target before communicating it further, see Section 12 |
| TC13 (email reuse, cross-officer exposure) stays live while the NRIC/FIN fix is unbuilt | Data exposure | High, CC's email-only identity model makes this structurally possible | **Critical**, real exposure between two individuals, unmitigated through MVP go-live | Build the NRIC/FIN fallback token as a hard priority once this epic starts |
| No receiving team exists to act on cases | Ops | Confirmed, no team, not just no sign-off | Critical, this is a launch gate per Section 7, not just a build risk | Stand up a real team, name, staff, leadership, before this ships |

---

## 11. Dependencies & Assumptions

- **Systems depended on:** POCDEX, source of truth for employment data; Career Compass Officer Profile Page, the only current officer-facing consumer of this data; WOG AD, email as login identifier.
- **Cross-squad dependency:** classification-change detection (`jobfamily`/`jobfunction`/`jobgrade`) feeds the Officer Profile Page's competency re-derivation (OTEP-75/77), owned by Imelda's squad. Whether it fires automatically on a detected change is unconfirmed.
- **Teams needed:** Ram for engineering resourcing; Design for the six portal sections, currently zero visual designs; a receiving team, which doesn't exist yet and needs standing up, not just signing off; POCDEX support for the escalation path and the field-classification contradiction above; Imelda's squad to confirm the competency re-derivation trigger.
- **Policy assumptions:** none captured yet, needs input from BO/policy owner.
- **Data availability assumptions:** POCDEX assumed to reliably provide `agencyid`, `agencyname`, `jobfamily`, `jobfunction`, `jobgrade`, `employmentid`, `primaryposition`, `jobId`, `officerId`, `idType`, `status`, all confirmed real fields. Org-structure fields (`reportingmanageruid`, `departmentid`, etc.) aren't confirmed reliably available except `departmentname`, which is why that category is descoped.

---

## 12. Decision Tracker

| Decision required | Owner | Review date | Status |
|---|---|---|---|
| Extend the daily-diff scope to identity fields, or accept the TC2/TC4/TC8/TC13 gap formally | Product + Engineering | Before build starts | Open |
| Build the NRIC/FIN fallback token (closes TC13) | Engineering | Hard priority once epic starts | Open, approval blocker cleared 14 Aug, build not started |
| Resolve the `email`/`idnumber` risk-classification contradiction | Product + Engineering | Before batch categorization is built | Open |
| **Launch gate:** set up a receiving team, or auto-resolve low-risk categories (Adrian's proposal) as an interim path | Product + Ops leadership, escalate to Ram/Adrian | Before this ships | Open |
| Formal descope: Reporting/org-structure change | Product + Engineering | — | Proposed in section 8, pending confirmation |
| Confirm whether a detected job family/function/grade change automatically refreshes the officer's competency list, or whether the list stays wrong even after this system marks the case "resolved" (the list-building logic belongs to Imelda's squad, not this epic) | Imelda's squad | Before classification-change cases treated as solved | Open |
| Confirm TC13/TC8 frequency estimates against real POCDEX data (Section 8 labels both "rare, unmeasured") | Product, needs POCDEX confirmation | — | Open, doesn't change severity, only informs prioritization |
| Confirm pilot record-count discrepancy (Section 3 caveat, 5,270 vs. 5,322/5,342) before citing externally | Product + Engineering | — | Open, low urgency |
| Re-confirm TC7 resolution now that POCDEX has said no reason code (`ON_NPL_MORE_THAN_90_DAYS`) will be passed — find another way to distinguish expected NPL exclusion from a real gap, or accept Ops loses that distinction | Michelle + POCDEX | Before TC7 is called resolved again | Open, raised 17 Aug |
| Confirm the pre-freeze full-portal target with Engineering (Section 1) before it's communicated further, e.g. to Data Office/Huiting | Michelle + Engineering | Before further comms | Open, raised 17 Aug |
| Assess whether Adrian's auto-fix/human-review proposal (Section 8, Missing Fix Path) is feasible, and what risks it carries | (tagged reviewer, see Confluence) | Before the receiving-team-vs-auto-resolve launch gate decision above is made | Open |

---

*Synced with Confluence page [PRD for CC Ops Portal (MVP)](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2555380790), version 36, 18 Aug 2026 (pushed Frequency/Likelihood column + trims from local file).*
