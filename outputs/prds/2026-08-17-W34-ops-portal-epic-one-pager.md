| | |
|---|---|
| Doc Created | 17 Aug 2026 |
| PM | Michelle |
| Tech | — |
| Designer | — |
| Business Owner | Xian Zhang and WD Ops |
| Infra Eng | — |
| Target launch | First release after MVP code freeze. Engineering's confirmed nothing here ships at MVP go-live. |
| Epic Link | TBC, not yet in Jira |
| Figma Link | — |

## 1. Background & Context

**Purpose:** Help the reader understand why this exists now.

Career Compass shows officers their employment record — agency, job, grade, skills — using data from POCDEX, the government's central employment-record system. It only checks that record once, at first login. Anything that changes after that, a transfer, a new role, a corrected email, goes unnoticed, with no way to explain the mismatch to anyone.

- 1.7% of the pilot (90 of 5,270 officers) already has some kind of record mix-up.
- 274 officers government-wide hold two active job records at once, across two different HR systems.
- A separate working session on who handles this day-to-day found nobody had agreed who was responsible for what.
- Engineering has confirmed nothing in this epic ships inside the MVP code freeze. The portal, the daily-diff job, the receiving-team workflow, all of it is post-MVP fast-follow. Data Office/Huiting asked for Day-2 traceability and should hear this directly rather than find out after go-live.
- The daily-check design already calls the POCDEX API to re-pull data, so that part isn't missing. What's missing is POCDEX's own last-updated timestamp, which was never requested during scoping. So we can say the check runs daily, just not how fresh the underlying data actually is.

---

## 2. Problem Statement

**Purpose:** Clearly define the problem before jumping to solution.

> Career Compass can't detect when an officer's record drifts after first login, because it only checks POCDEX once, resulting in stale or wrong data sitting on a profile with nobody able to see it, officer, BO, or Product/Engineering.

> Business Owners have the same problem from the other side: no way to see a record's gone out of date, sort it, and route it, because nothing surfaces drift at all. Issues only turn up if an officer happens to notice and complain.

---

## 3. Data Analysis & Evidence

**Purpose:** Show this is not opinion-driven. What proof do we have that this is real and worth solving?

| Metric | Value |
|---|---|
| Pilot group with record mix-up/duplicate entry | 90 of 5,270 officers (1.7%) |
| Officers government-wide holding 2 active jobs across 2 HR systems | 274 |
| Government-wide scale (design must eventually cover) | ~1,905 officers affected (1.25% of 152,895 records) |
| Measured daily change volume, 6 pilot agencies | ~23 changes/day |
| Projected daily change volume, government-wide | ~781 changes/day |
| Pilot officers with no email on file | 19 (0.36%) — identity resolution fails outright |
| Pilot officers affected by duplicate/multi-hat records | 71 (1.35%) |

### The 6 Priority Test Cases

A structured POCDEX data review found 14 distinct drift scenarios. Six got flagged Priority in source correspondence from 9 Aug — if UAT time runs short, these can't be dropped:

| # | Scenario | What Happens Today | MVP Handling |
|---|---|---|---|
| TC1 | Agency transfer (incl. HRPS-internal, HRPS↔Cumulus, especially cross-system secondment) | Reflects original position only if old email retained | Ops Portal patch is the current mitigation; post-MVP, link records across email change via NRIC, pending discovery |
| TC2 | POCDEX↔non-POCDEX transfer | If an officer's email is wrongly recorded at first instance, CC shows the wrong person's position. 19 pilot officers (0.36%) have no email on file at all | Known limitation, since CC uses email as primary identifier. Root cause of the misattribution risk. More robust ID resolution planned post-MVP |
| TC3 | Secondment POCDEX↔non-POCDEX | Same as TC1 | Officer may still log in if email matches first login and WOG AD allows |
| TC7 | NPL/ML (no-pay/medical leave) and return | Resolved 14 Aug. NPL over 90 days excluded entirely, not shown as INACTIVE | Ops sees a clean `ON_NPL_MORE_THAN_90_DAYS` reason code |
| TC8 | Data wrongly entered then corrected upstream | Same failure mode as TC2 | Won't auto-update the profile once corrected upstream. Post-MVP concern if it recurs |
| TC9 | Position ID change | Same failure mode as TC2, stale position | Won't update the profile on a Position ID change post-first-login |

Every UAT case should test both what's actually stored in CC and what shows in the Ops module. That pairing is the real test, not just the end-state business rule.

Two of the remaining eight matter regardless of their UAT tag:

- **TC13 (Critical)** — a new officer sees a departed officer's data through email reuse. The NRIC/FIN fallback token would close this, but it's not built, and the approval blocker only cleared 14 Aug.
- **TC11 (High)** — a masked-to-non-masked job classification change could go completely undetected, read as "no update."

**Data caveat:** pilot record count doesn't fully reconcile across source documents. A real snapshot shows 5,322/5,342 records for the 6 MVP agencies, while every percentage above is calculated against 5,270, about a 1% gap. Unconfirmed whether that's a counting-method difference or a different pull date. Worth confirming before citing these figures externally.

---

## 5. Target User

**Purpose:** Clarify who is your target user.

| # | User | Primary need |
|---|---|---|
| **1 — Primary** | Business Owner (BO), confirms officer data looks right for their agency or escalates. Only the BO or their assignee can access the portal, not Product/Engineering. | Understand what changed and sort it, without needing POCDEX's technical data structure or risking the record getting worse. |
| **2 — Secondary** | Receiving team, not yet formed. Cases will route here once a team exists. | Enough evidence, category, why it was flagged, before/after values, to act correctly first time. |
| **3 — Tertiary** | Central support staff, responding to a specific officer's enquiry, not proactive review. | See POCDEX vs. Career Compass for one officer, to answer directly instead of escalating. |
| **4 — Affected** | The officer whose record drifted. | Their record reflects reality, or at least a visible sign someone's working on it. |

Covers 6 pilot agencies at launch. Design has to scale government-wide eventually.

---

## 6. Hypothesis (Value Proposition)

**Purpose:** Make your belief explicit and testable.

> If we give BOs a reliable way to see when a record has gone out of date, sort it into a clear category, and route it, then Business Owners will catch and act on record drift instead of it going unnoticed, building officer trust that Career Compass data is accurate, without a way to accidentally make things worse by acting on incomplete information.

---

## 7. Success Metrics

**Purpose:** Define what "good" looks like. Must be quantifiable.

Detection without a receiving team to act on it doesn't deliver the hypothesis above. That makes this a launch gate, not just something to track. A portal that correctly flags 23 cases a day into a queue nobody works is a different, unmet promise, not a smaller version of success.

### 7.1 Outcome Metrics (North Star)

- % of flagged cases that reach a confirmed, correct resolution (not measurable until a receiving team exists)
- Officer trust signal: reduction in officer-reported "my profile is wrong" enquiries over time

### 7.2 Input Metrics

- % of in-scope field changes detected within 24 hours of occurring
- % of cases correctly auto-categorized (no BO re-categorization needed)
- BO time-to-sort per case
- Of the 6 priority test cases (TC1, TC2, TC3, TC7, TC8, TC9), % correctly detected and categorized in UAT — this is the acceptance bar

### 7.3 Guardrail Metrics (Events that will lead to rollback or pause)

- Any identity/contact or duplicate-record case processed via bulk action pauses everything for an audit. This should never happen by design.
- Batch job failing to complete within its target window escalates to Engineering.
- Any sign of one officer's data showing against a different officer's identity is a hard stop. That's the one failure mode (TC13) this whole design exists to prevent.

---

## 8. Scope (Stories + Success Criteria)

**Purpose:** Define what gets built and how we'll know each piece works.

| Story | Success Criteria | Notes |
|---|---|---|
| Daily sync detects, diffs, categorizes, and logs a POCDEX record change | A detected change is sorted into one of six categories with a reason code and priority; every action is logged (who, when, category) | Straightforward build against fields already confirmed real, no new visual design needed. Has to cover the 6 priority test cases at minimum. |
| BO reviews Overview and Update status sections | BO can see open case count and urgency; BO can see stuck/failed nightly runs and flag them | The two lowest-complexity sections, launch these first if design slips on the other four |
| BO reviews and sorts Identity, Employment record, and Record change cases | Officer identity/contact and duplicate-record cases stay one-at-a-time, never bulk-processed | No visual designs exist yet for these four sections, blocking sprint planning until a design session happens |
| A case escalates to POCDEX or the receiving team | Escalation includes all required due-diligence fields (POCDEX UID, HR ID, current email, position ID, etc.) before the ticket is raised | Receiving team doesn't exist yet, see Section 10 |

### All 14 Test Cases, Full Context

Checked against the Officer Profile Page, the only screen that currently renders POCDEX data to an officer. Each row below covers what actually happens, what breaks, and how MVP handles it (or doesn't) for that test case.

| TC & Scenario | What's Actually Broken | Field(s) | If It Drifts | Severity | MVP Handling |
|---|---|---|---|---|---|
| **TC1** — Agency transfer, including HRPS-internal and HRPS↔Cumulus moves, especially cross-system secondment | Reflects the original position only if the old email is retained. | `agencyid`, `agencyname`, `employmentid` — shown on the profile header | Wrong agency shown on the officer's own profile, the first thing they see after login | Medium — silent data drift | **In MVP scope** — covered by the daily diff. Ops Portal patch is the current mitigation; post-MVP, link records across an email change via NRIC, pending discovery. |
| **TC2** — Officer transfers between a POCDEX agency and a non-POCDEX agency | Assumes accurate first-instance email — if officer X's email is wrongly recorded as officer Y's, Career Compass shows X's position when Y logs in. 19 pilot officers (0.36%) have no email on record at all, so identity resolution fails outright for them. | `workemailaddress`/`email`, `idnumber` (NRIC/FIN), `officerId` — email is the login credential | The wrong person's data can be shown to whoever logs in — a stale or reused email is a misattribution risk, not just staleness | High — misattribution/privacy | **Gap** — the diff doesn't cover identity fields, so this isn't actually caught. CC uses email as the primary identifier, the root cause. More robust ID resolution planned post-MVP. |
| **TC3** — Same underlying move as TC1, but via secondment specifically | Same as TC1. | `agencyid`, `employmentid` | Same as TC1 — wrong agency shown | Medium — silent data drift, same as TC1 | **In MVP scope** — covered by the daily diff. Officer may still log in if email matches first login and WOG AD allows. |
| **TC7** — No-pay or medical leave, and the officer's return from it | Resolved 14 Aug. NPL over 90 days was excluded entirely, not returned as INACTIVE, prior to the fix. | `status` + reason code (`ON_NPL_MORE_THAN_90_DAYS`) | Resolved — no drift risk remaining for this case | Low (resolved) | **Fully in MVP.** Already-NPL-at-launch officers are excluded, login blocked. NPL beginning after first login is denied by WOG AD. |
| **TC8** — An upstream data-entry error gets corrected at the source | Same failure mode as TC2. | `firstname`, `lastname`, `email`, `idnumber`, `officerId` — name and email are displayed | Officer keeps seeing wrong name/email until manually patched — same misattribution risk as TC2, just triggered by an upstream data-entry error instead of a transfer | Medium — silent data drift | **Gap.** Career Compass will not auto-update the profile once corrected upstream. Post-MVP concern if it recurs. |
| **TC9** — An officer's Position ID changes without a full agency transfer | Same failure mode as TC2 — stale position drives wrong competency mapping. | `employmentid`, `primaryposition` — shown via title and competency lookup | Wrong title shown, and old-role competencies stick around since nothing re-triggers the lookup | Medium — silent data drift | **In MVP scope** — covered by the daily diff. |
| **TC4** — An officer's identifier type flips (FIN→NRIC or vice versa) | No reconciliation logic across an identifier change. Confirmed unbuilt, not just untested. | `idnumber`, `idType` — confirmed real; `officerId` stays constant through the conversion | Invisible directly, but a matching field — if the ID type flips and nothing reconciles it, the system risks losing track of who's who behind the scenes | High — will fail if it occurs, unbuilt capability | **Not handled** — requires a discovery spike to determine record linking/reconciliation. |
| **TC5** — An officer departs and later returns to service | Same gap as TC4 — no reconciliation against the old record. | `employmentid`, `officerId`, `status` — daily-batch diffability still an open question | Officer could be wrongly blocked from logging back in if `status` doesn't correctly flip to active, or the system fails to recognize them as the same person | High — unbuilt capability | **Not handled,** same discovery need as TC4. |
| **TC6** — A POCDEX record is deleted and recreated by mistake | Invisible to Career Compass since it doesn't re-call POCDEX after first login. Masked by construction, not actually handled. | `employmentid`, `officerId`, `status` | Same login-gate risk as TC5 — wrong `status` or confused record identity, not a visible profile bug | Medium now, rises once per-login calls exist and the masking goes away | **Masked at MVP** by the first-login-only design; resolves by design post-MVP once per-login calls exist. |
| **TC10** — A title change happens without a Position ID change | Same treatment as TC9 — no update happens for MVP. | `employmenttitle`/`businesstitle`, `employmentid` unchanged | Wrong job title shown on the officer's own profile — cosmetic, but the second thing an officer sees after their name | Low — silent data drift, explicitly cosmetic only | **Gap** — no update for MVP. |
| **TC11** — A classification change, potentially including a masked-to-non-masked shift | Same treatment as TC9 for the base change, but a masked-to-non-masked shift could go completely undetected, read as "no update happened." | `jobfamily`, `jobfunction`, `jobgrade`, `employmentid` unchanged — shown via the competency section | Wrong Core/Functional competencies shown. Severity is specifically the masked case — could look like nothing happened, so nobody knows to check. | **High** — looks cosmetic but may not be, flagged as a potential security/classification gap | **Gap** — no update for MVP, masked changes can go fully undetected. |
| **TC12** — A duplicate or multi-hat officer record exists | No detection exists, no documented POCDEX dedup rule. Current behavior: use first active entry, union competencies. | `employmentid` (multiple), `officerId` as the disambiguation anchor — backend only | Not shown directly — connects to the same double-hatting display decision already descoped elsewhere. Detection matters; nothing to show an officer yet. | Medium — sized against real data (71 pilot officers, 1.35%), with a proposed fix already drafted | **Workaround only** — uses first active entry, real fix needs post-MVP discovery. |
| **TC13** — Email reuse assigns a new officer the same login identity a departed officer once had | The new officer can inherit and see the departed officer's actual data. The NRIC/FIN fallback token is designed to close this, but needed privacy/security approval first, keeping exposure live. Approval cleared 14 Aug; the fix itself is still not built. | `workemailaddress`, `idnumber`, `officerId` — same email, different token/`officerId` underneath, that mismatch is the mechanism | Highest-severity outcome of all 14 TCs — a real person sees a different real person's actual data. This is the concrete mechanism behind the stale-or-reused-email risk in TC2 above. | **Critical** — data exposure between two individuals, the only TC with that classification | **Gap** — NRIC/FIN fix designed but not built. |
| **TC14** — An officer becomes contingent, or moves between contingent and active status | CC saves a profile only at first login. Contingent at that point means no profile, can't log in. Later reclassification is treated as a new first login. The reverse transition (active → later contingent) isn't addressed, only contingent→normal is documented. | `sourcesystem`/`hrSystem`, `status` (`CONTINGENT_WORKER` reason code) — shown via login gate | No visible bug in the documented direction — intended behavior, not a defect. The undocumented reverse case is the real open question. | Medium — untested, unconfirmed symmetric | **Supported by design,** fully in MVP for the forward (documented) case. |

**Full severity distribution, all 14:** Critical — TC13. High — TC2, TC4, TC5, TC11. Medium — TC1, TC3, TC8, TC9, TC12, TC14. Low — TC7 (resolved), TC10 (cosmetic).

Two categories got cut from scope entirely, see Descoped below — not listed as their own TC rows since they're field categories, not individual test cases.

**Descoped:**

| Item | Why |
|---|---|
| Reporting/org-structure change | Not displayed anywhere in Career Compass today (checked against the Officer Profile PRD), and POCDEX field availability is unconfirmed except `departmentname` |
| Multiple/conflicting records (double-hatting) as a display concern | The system will still quietly notice and flag double-hatting cases to a BO behind the scenes. The officer just won't see anything about it on their own profile, because nobody's building that part of the screen — e.g. putting something on the officer's profile page that says "you have two jobs." |

**Note on double-hatting specifically:** if a fix ever gets built for it, that fix is on Career Compass to design, not POCDEX. POCDEX just hands over both job records when someone holds two jobs — it doesn't say which one is primary. Merging them into one sensible view is our logic to build.

### The Missing Fix Path (need you to assess if the proposal by Adrian is feasible, any risks etc)

Once a change is detected, someone still has to actually fix the officer's record. There's no team assigned to do that today. "Compass Product Operations" is a name on one line item in the Day-2 support document, not a staffed function with leadership.

**Proposal (from Adrian):** don't route every fix through a person. Split it by risk:

- **Auto-fix, no human needed:** fields like job family or job function. Most officers don't even track these details about their own role, so a human double-check doesn't add real safety, just delay.
- **Keep a human in the loop:** fields like NRIC or email. These are things an officer would notice if wrong, and a bad auto-fix here could cause real harm, like misrouting someone into the wrong account (see TC13, Section 3).

This gives the project two real paths forward, and neither is picked yet:

1. **Get a receiving team in place before launch,** so a person reviews and fixes every case.
2. **Auto-fix the low-risk fields, human-review only the risky ones (Adrian's proposal),** so this doesn't depend on having a full team ready on day one.

---

## 9. Go-To-Market Plan

**Purpose:** Shipping is not adoption.

- Target launch group: 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS)
- Comms plan: TBC, blocked on a receiving team existing at all, not just a sign-off. Also needs a direct message to Data Office/Huiting that nothing here ships at MVP go-live.
- Training / enablement: BO onboarding and in-portal guidance for the category system, not yet scoped
- Change management: TBC
- Support model: escalation paths defined for Engineering, POCDEX, and agency HR. The fourth path, no-existing-rule questions, has no team to route to yet.

**Phases:**

- First release (post-MVP code freeze): 6 pilot agencies
- Scale: government-wide, ~1,905 officers affected at that scale
- Steady state: TBC, depends on a receiving team and the fix workflow landing

---

## 10. Risks, Assumptions & Mitigations

**Purpose:** Think ahead.

These are the ones that actually touch MVP go-live.

| Risk/Assumption | Type | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| Nothing here ships at MVP go-live, and Data Office/Huiting may not know | Comms/Timing | High, no evidence this has been said plainly yet | High, finding out post-launch damages trust more than saying it now | Send a direct message now |
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

**Purpose:** Make it actionable.

| Decision required | Owner | Review date | Status |
|---|---|---|---|
| Extend the daily-diff scope to identity fields, or accept the TC2/TC4/TC8/TC13 gap formally | Product + Engineering | Before build starts | Open |
| Build the NRIC/FIN fallback token (closes TC13) | Engineering | Hard priority once epic starts | Open, approval blocker cleared 14 Aug, build not started |
| Resolve the `email`/`idnumber` risk-classification contradiction | Product + Engineering | Before batch categorization is built | Open |
| **Launch gate:** set up a receiving team, or auto-resolve low-risk categories (Adrian's proposal) as an interim path | Product + Ops leadership, escalate to Ram/Adrian | Before this ships | Open |
| Formal descope: Reporting/org-structure change | Product + Engineering | — | Proposed in section 8, pending confirmation |
| Confirm whether a detected job family/function/grade change automatically refreshes the officer's competency list, or whether the list stays wrong even after this system marks the case "resolved" (the list-building logic belongs to Imelda's squad, not this epic) | Imelda's squad | Before classification-change cases treated as solved | Open |
| Whether TC13/TC8 scenarios are frequent or rare in practice | Product, needs POCDEX confirmation | — | Open, doesn't change severity, only informs prioritization |
| Confirm pilot record-count discrepancy (5,270 vs. 5,322/5,342) before citing externally | Product + Engineering | — | Open, low urgency |

---

*Synced with Confluence page [PRD for CC Ops Portal (MVP)](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2555380790), version 17, 17 Aug 2026.*
