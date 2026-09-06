# BO Prioritisation Session — Run Sheet (Employment Lifecycle Day 2)

| Field | Detail |
|---|---|
| **When** | Tuesday — WD employment-profile-change discussion |
| **Run by** | Imelda MO |
| **Length** | ~50 min |
| **Goal** | BOs **ratify a priority ranking** + **make 4 decisions**. This is not a re-scoping session. |
| **Two outcomes I must leave with** | (1) A confirmed list of which cases are in for this UAT round. (2) The 4 decisions, made or deferred with a named owner. |

---

## Production evidence (reference)

The identity cases below are no longer theoretical. Four production exception exports from the target app (PSD Singapore, corp id 1215) give us real numbers:

| Report | Rows | What it shows |
|---|---|---|
| Email-collision errors (`Data_Errors_Email_Attachment.csv`) | **82** | Real "email already belongs to another user" errors blocking account create (72) / update (10). **68% are at the POCDEX ↔ legacy/other-agency boundary** — PSD onboarding someone whose email is still tied to an older non-POCDEX account (Sentosa, JTC, CEA, HTX, IMDA, MOF, etc.) or a legacy NRIC-keyed account. Only 32% are another POCDEX-format UID. **7 are genuinely different identities** (the rest are self-collisions from re-issued UIDs). |
| Duplicated user records (`Duplicated_User_Records.csv`) | 3,654 (1,796 officers) | Same officer appearing 2–4×, almost all **HRP + Cumulus cross-system** duplication (251 confirmed pairs). **Tested directly — group by email, count distinct NRICs: zero cross-person email collisions between POCDEX-native officers.** |
| Missing users comparison | 457 | Reconciliation / sync-timing gap, not identity |
| Role mapping undefined (`User_Roles_Not_defined_in_WA.csv`) | **65,367** | Job grade/function/family combinations with no defined Role mapping — data-completeness, not identity/security |

**Scope caveat:** these figures are against the **full POCDEX–OTG set (~152,000 records)**. Career Compass consumes **~110,000** (~72%). The in-scope counts are a subset of the above and have not been broken out yet — treat the raw numbers as an upper bound, not the exact Compass exposure. A filtered pull against the 110k is a follow-up for whoever owns the POCDEX 2.xlsx sizing.

**How this lands on the ranking:**

| Case | Effect |
|---|---|
| Identity-1 | Rationale **broadens** — the scenario isn't only "a departed officer's old email." 68% of the 82 errors are an email colliding with a legacy or *other-agency* account. Still P1; the BO decision (A) now covers "email collides with any existing account," not just POCDEX-internal reuse. |
| Identity-2 (folded in) | Fold-in is now **evidenced**, not assumed — tested against 3,654 duplicate records, zero cross-person same-email collisions. |
| Identity-3 | Confirmed as the real cross-system pattern — 251+ officers hold dual HRP/Cumulus records. Stays P1, now with a number. |
| Role-mapping gap (65k) | **Not a Tuesday decision.** Data-completeness issue, connects to H1 (if the target role has no mapping, the competency lookup can't resolve) but it's engineering + POCDEX to reconcile, not a BO call. Added to "Still open after this session." |

---

# PART 1 — Before the session (my prep)

Do these in order. Nothing goes to the BOs until all five are done.

| # | Prep task | Why it matters | Done? |
|---|---|---|---|
| P1 | **Pull the PRD email-reuse wording.** The Prioritised Scenarios analysis says "same email, reused email — OUT OF SCOPE (PRD)." Get the exact capability-table text. | If email reuse is already excluded, Identity-1 is NOT a BO decision — it's a documented exclusion I test as a negative. I need to walk in able to say "the PRD excludes X; this only asks about Y" so the BOs don't relitigate a settled call. | ☐ |
| P2 | ~~Get Michelle's AGD/MTI/MDDI findings.~~ **Done 2026-08-31.** No distinct Job ID scheme for CUS officers — CUS-Deploy = Secondment (dual position, parent agency restricted to AGD/MTI/MDDI), CUS-AO = Transfer (full agency change). MDDI pilot users are affected if CUS-Deploy'd — check that status before assuming a blank/wrong posted agency is a data gap. See [2026-08-31-W36-agd-mti-mddi-cus-scheme-findings.md](2026-08-31-W36-agd-mti-mddi-cus-scheme-findings.md). | Frames the Mobility-2 (CUS) case — this resolves it: Mobility-2 doesn't need new scheme rules, it needs Mobility-1's/4-5's rules applied to the CUS terminology. | ☑ |
| P2b | **Pull the 7 genuine-collision UID pairs from `Data_Errors_Email_Attachment.csv` as real test data for Identity-1.** Confirm whether `s***@sentosa.gov.sg` (4 hits) and `j***@sentosa.gov.sg` (2 hits) are shared functional mailboxes, not individual officers. | Real production test data beats synthetic HRIDs. The Sentosa emails are a different failure mode — "officer's login is a role mailbox" — worth a line for the BOs if confirmed. | ☐ |
| P3 | **Decide the Identity-5/6 position.** They're deferred, zero UAT coverage, failure = officer loses access + history. | I have to bring the BOs a clear ask: "accept this deferral, or pull it into P1." Not a silent drop. | ☐ |
| P4 | **Confirm the R11 framing.** Change-detection mechanism (POCDEX timestamp vs nightly recheck) is unresolved — engineering's call, not the BOs'. Detection coverage isn't even uniform: Position-ID changes are covered by the daily-diff job, but a masked→non-masked shift "could go completely undetected." | I flag this at the top so nobody assumes the BO decisions unblock testing. It's a parallel track. | ☐ |
| P5 | **15-min sanity check with Michelle or Rama (Monday).** Whole deliverable is on me — nobody has checked the cut. | Catch a miscategorised case or a missing rationale before the BOs see it. Not a re-open. | ☐ |

**Materials to bring:** this run sheet, the [Prioritised Scenarios Confluence page](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2603157647) as the reference, the PRD capability-table extract (from P1), the 7 genuine-collision UID pairs (from P2b) as backup if a BO asks "how often does this actually happen."

---

# PART 2 — Running the session

## Step 0 — Open (2 min)

> "Career Compass reads an officer's employment record once, at first login, and never rechecks it. When the record changes afterward — a transfer, a job change, a name change, a rescinded hire — the officer's profile drifts and nobody can see it.
>
> POCDEX gave us 82 test-data cases. We've cut those to 18 runnable tests, then to 11 for this round — the highest-severity, highest-frequency set. I need two things from you today: **confirm the ranking, and make four decisions only you can make.**"

## Step 1 — Flag the R11 dependency (1 min)

> "Before we start: some of these cases can't actually be tested until engineering settles *how* Compass detects a record change. That's a parallel engineering track, not something we solve here. Don't let it stop us ranking today."

---

## Step 2 — Ratify the priority ranking (10 min)

**Walk the table. Ask two questions:** *"Is anything in P2 actually P1 for your agency? Anything in P1 you'd accept deferring?"*
**Then land the deferrals explicitly** (Step 2b).

**Rule I used:** P1 = officer sees someone else's data, OR is wrongly let in / blocked out, OR sees wrong job details at high frequency. P2 = real but lower-frequency, or a variant of a P1 case already covered. P3 = cosmetic — officer notices, nothing downstream breaks.

| Priority | Scenario (officer's view) | Case IDs | Why this priority | Impact if untested | Needs a BO decision? |
|---|---|---|---|---|---|
| **P1** | A new hire's email collides with an existing account — a departed officer's reused email, OR (more common) a legacy / other-agency account the email is still tied to | Identity-1 (Identity-2 folded in — see note) | Cross-officer data exposure — privacy incident. **82 production errors confirmed; 68% at the POCDEX↔legacy/other-agency boundary; 7 genuinely different identities.** | Wrong person's role / agency / competencies under a real login; or account create/update blocked | **PRD-check first** (Step 3, decision A) |
| **P1** | Officer has records in two HR systems, with a different email in each (different domains). Logs in with email B — does not get the same unified profile as email A. | Identity-3 | Officer legitimately spans two systems; the two emails are distinguishable, but the profile should be one. **251+ officers hold dual HRP/Cumulus records (production).** | Officer sees a partial / different profile depending which email they use; support can't reconcile it | **Yes** (decision 1) |
| **P1** | Officer on future-dated unpaid leave — loses access at leave start, or keeps it when they shouldn't | Leave-1 | Access grant/denial during a restricted period | Unauthorised access during NPL, or wrongful lockout | **Yes** (decision 2) |
| **P1** | New hire's contract rescinded right at first login | Exit-1 | Non-employee could retain access to an officer profile | A non-employee has a live account | **Yes** (decision 3) |
| **P1** | Job function / family changes, Position ID stays — Compass still shows the old role | Job-1 | **Largest gap: 12 of 82 cases, zero coverage.** Highest frequency post-launch. | Wrong role on profile, wrong recommendations | No — ready to test |
| **P1** | Officer seconded within the same data source — Compass still shows the old posting | Mobility-1 | High-frequency; the change officers notice most | Profile shows an agency / role they've left | No — ready to test |
| **P2→see note** | CUS-scheme officer sees a missing or wrong posted agency | Mobility-2 | **Reframed 2026-08-31:** not a new scheme — CUS-Deploy = Secondment (parent agency restricted to AGD/MTI/MDDI), CUS-AO = Transfer. No longer blocked on undefined scheme rules. | Blank / wrong posted agency for CUS officers whose parent agency isn't connected | **Propose to BOs: fold into Mobility-1 (CUS-Deploy) and Mobility-4/5 (CUS-AO) coverage rather than tracking separately** — see findings doc for the "which agency shows as primary" open sub-question this still shares with H2/Mobility-1 |
| **P2** | Cross-system secondment (HRP ↔ Cumulus) — profile could go stale or blank | Mobility-3 | Variant of Mobility-1, lower frequency, harder | Stale window or blank profile during the handoff | No — ready to test |
| **P2** | Permanent cross-system or same-system transfer — wrong / mixed agency shown | Mobility-4, -5 | Variant of Mobility-1 | Wrong agency / position after the move | No — ready to test |
| **P2** | Position ID changes — title and grade should update together | Job-2 | Common trigger, tied to transfers | Title updates, grade doesn't (or vice versa) | No — ready to test |
| **P2** | Name + email corrected together — could lock the officer out or show a duplicate | Identity-4 | High-visibility, lower frequency | Login fails, or duplicate profile | No — ready to test |
| **P2** | NPL status disagrees across two systems | Leave-2 | Variant of Leave-1 — cross-system precedence | Officer let in via the system that hasn't updated | **Deferred — confirm at Step 2b** |
| **P2** | ID type flips FIN → NRIC mid-employment; ID + HRID both change | Identity-5, -6 | **Zero UAT coverage.** Failure = access loss, not display. | Officer treated as a new person, loses access + history | **Deferred — confirm at Step 2b** |
| **P3** | Business/employment title changes, no Job ID change | Job (title-only) | Cosmetic — competencies are Position-ID-driven and didn't move | Wrong title on the card; nothing downstream breaks | No — ready to test (display-only) |
| — | **Resolved, no test case:** leave-and-rejoin (Exit-2), delete/recreate (Exit-3), contingent worker correctly included (Population-1) | Exit-2, -3, Population-1 | Covered under existing rehire rows / POCDEX supplies the officer list | — | No |

> **Note on Identity-2 (folded in):** Identity-2 was "two officers holding the *same* login email at the same time." Tested directly against 3,654 production duplicate records — group by email, count distinct NRICs — and found **zero cross-person same-email collisions** between POCDEX-native officers. Officers in two HR systems get *different* email domains (that's Identity-3). Identity-2 is a theoretical sub-case of Identity-1; decision A covers both.

### Step 2b — Land the two deferrals (2 min)

> "Two cases I've deferred from this round. I need you to accept these consciously, not by omission:
> - **Leave-2** — NPL status disagreeing across two systems. It's a variant of Leave-1; once we decide Leave-1, this follows.
> - **Identity-5/6** — an officer's ID type flipping FIN→NRIC. This one has **zero existing UAT coverage** and the failure mode is the officer being treated as a brand-new person and losing access. If FIN→NRIC changes happen in your pilot population at all, we're accepting that risk untested. Are you OK with that, or do you want it pulled into this round?"

---

## Step 3 — The 4 decisions (18 min)

One at a time. Frame each as **officer experience**, not system design. If a BO asks "how does the sync work" → *"parallel engineering track, let's stay on the officer experience."*

| # | Case | The question | Options | BO answer |
|---|---|---|---|---|
| **A** | Identity-1 (email collision — new hire's email tied to an existing account: reused, legacy, or other-agency) | *PRD-check first.* [From prep P1:] the MVP capability table [does / does not] exclude email reuse. **If it does:** we test as a negative — login must fail cleanly, no BO call needed. **If it doesn't:** should a new hire ever see *any* trace of the account the email was tied to? *(Production evidence: 82 errors, 68% at the legacy/other-agency boundary, 7 genuine cross-person cases.)* | Already excluded (test negative) / Hard requirement / Acceptable gap this round | _____ |
| **1** | Identity-3 (one officer, two emails — one per HR system, different domains; 251+ officers) | When an officer legitimately has records in two HR systems and logs in with either email, they should see one unified profile — not a partial or different view. Is that right, and: which system's job data is primary when the two disagree? | One unified profile from either login; primary = [most recent effective date / a source-system priority you name] | _____ |
| **2** | Leave-1 (NPL access cutoff) | When an officer goes on unpaid leave, when does their access stop? | Immediate cutoff at leave start / A defined grace period (how long?) | _____ |
| **3** | Exit-1 (hire rescinded at first login) | When a hire is cancelled right as the person first logs in, what state should the account be in? | Account shouldn't exist at all / Exists but blocked — either way, login fails cleanly, no partial profile | _____ |

**Context on Mobility-2 (not a live decision today):** the CUS scheme's eligibility / posting rules aren't defined by POCDEX yet. Routing this to POCDEX for a plain-language answer. Until it lands, the interim test only asserts "degrades gracefully, doesn't show blank" — not "correct agency."

---

## Step 4 — The 3 hypotheses (15 min)

For each: I state the officer experience → BOs say yes/no → we land the one open sub-question.

### H1 — Job change (Position ID / function / family / grade)

> "When an officer's job changes — a change to **Position ID, job function, job family, or job grade** — Compass shows their current role and recommends against it within [X] of the change. Their previous competency history is preserved, not wiped."

| Element | Assertion |
|---|---|
| What triggers it | Position ID / `primaryPosition`, `jobFunctionId`, `jobFamilyId`, `jobGradeId` — any change re-derives the role profile and its competencies |
| Profile | New title, job family, competencies reflect the new role |
| Recommendations | Re-derived — old-role matches stop appearing |
| History | Prior competency snapshot retained |
| **Open sub-question** | Should past competencies stay visible to the officer, or is only the current state shown? |
| **Watch item** | A masked→non-masked shift can go undetected (reads as "no change"). Confirm the BOs want this treated as a real competency change, not a no-op. |

### H2 — Officer transfers agency

> "When an officer moves agency (transfer or secondment), Compass treats them as the same person — same login, same profile, same history — now showing the new agency and role. No second profile, no lockout."

| Element | Assertion |
|---|---|
| Identity | Same officer, same account — resolved by the stable POCDEX UID |
| Profile | New agency and posted role; historical profile carried forward |
| Secondment | Current seconded agency / role shows as primary for the secondment period |
| **Open sub-question** | For a secondment specifically — should the officer see their home agency or the seconded agency as primary? |

### H3 — Title-only change (no Job ID change)

> "When only the officer's business/employment title changes but Position ID, job function, job family, and grade are all unchanged, Compass updates the displayed title and nothing else. No competency refresh, no recommendation change."

| Element | Assertion |
|---|---|
| What triggers it | `employmentTitle` / `businessTitle` only — none of the role-profile key fields moved |
| Profile | New title on the card (OTEP-74) |
| Competencies | Unchanged — derived from Position ID / function / family / grade, none of which changed |
| Recommendations | Unchanged |
| **Open sub-question** | Agreed this is display-only? Or does a title change in your agency ever signal a real role change you'd want reflected in competencies? |

---

## Step 5 — Close (2 min)

Read back and confirm:

- [ ] Priority ranking ratified (note any P1↔P2 moves the BOs made)
- [ ] Leave-2 and Identity-5/6 deferrals **explicitly accepted** (or pulled in)
- [ ] The 4 decisions recorded (A, 1, 2, 3)
- [ ] The 3 hypotheses signed off, each open sub-question answered
- [ ] WD confirms alignment on comms / support / UAT priorities

---

# PART 3 — After the session

## What I hand off

| Output | Goes to | For |
|---|---|---|
| Ratified priority ranking | Michelle | Test-case rationalisation (~13–19 cases) |
| The 4 decisions (made or deferred with an owner) | Michelle | Test-case pass conditions |
| 3 hypotheses signed off + sub-questions resolved | Michelle + Rama | Pass conditions and engineering sizing |
| Explicit BO acceptance of the deferrals | RAID log | Closes the "silent drop" risk |
| WD alignment confirmation | MVP Timeline Planning open question #2 | Closes "WD alignment assumed, not confirmed" |

## Still open after this session (not my call)

| Item | Owner |
|---|---|
| Change-detection mechanism — POCDEX timestamp vs nightly recheck (RAID R11) | Compass engineering / architecture |
| CUS scheme eligibility / posting rules | POCDEX |
| Detection coverage for masked→non-masked shifts (TC11) | Compass engineering |
| Filtered exception-report pull scoped to Compass's 110k records (the 82 / 7 / 251 figures are against the full 152k POCDEX–OTG set) | Whoever owns POCDEX 2.xlsx sizing |
| Role-mapping completeness — 65,367 undefined job grade/function/family → Role combinations in the exception set; connects to H1 (competency lookup can't resolve if the target role has no mapping) | Compass + POCDEX |

---

## References

| Doc | Use |
|---|---|
| [Prioritised Employment Lifecycle Scenarios](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2603157647) (Confluence) | The 82-case analysis and the 18→11 cut — bring as the reference |
| [Employment Lifecycle Scenarios - Day 2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2597226493) (Confluence) | The JAM agenda / decision-ownership table |
| `outputs/analyses/2026-08-26-W35-pocdex-p1-test-data-source.md` | POCDEX P1 test-data source (82 rows) |
| `pocdex_exception_reports_analysis.md` | Production exception exports — the 82 email-collision errors, 251 cross-system pairs, 65k role-mapping gap. **Against the full 152k POCDEX–OTG set; Compass consumes ~110k.** |
| MVP Timeline Planning note (28 Aug) | The decision that put this deliverable on Imelda |
| RAID log (25 Aug) | R11 (change-detection), R13 (who decides) |
