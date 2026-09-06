# Identity & Officer-ID UAT Test Cases (Compass Side)

Date: 2 September 2026 (W36)

These are the executable UAT test cases for the identity scenarios, written from Compass's end. They cover the FIN/NRIC/HRID and email-identity rows in the 118-row POCDEX workbook (`POCDEX_Compass_Test_Plan_with_PM_Priority_4.xlsx`), grouped into 7 test cases (ID-01 to ID-07).

Same situation as the movement cases: the workbook has the POCDEX-side ingestion steps and the file-extraction results, but no Compass-side expected behaviour. That's what these fill in.

## Why these matter

The [production exception exports](2026-08-29-W35-employment-lifecycle-bo-prioritisation-brief.md) turned this from theory into numbers: 82 real "email already belongs to another user" errors blocking account setup, 7 of them genuine cross-person collisions, 251 officers with dual HRP/Cumulus records. The identity scenarios are the ones where getting it wrong means an officer sees someone else's profile. Every one of these is P1.

## The core design (agreed)

Compass anchors identity on the **POCDEX UID**, not email and not HRID. Login resolves `email → POCDEX UID → all active officer IDs → consolidated profile`. NRIC, FIN, and HRID are attributes, not keys. Aliases for previous identifiers are kept, and there's an audit trail when any of them change. These test cases check that this holds under the messy real-world sequences.

## How to read a case

Each case has: an ID and title, the 118 rows it covers, the persona and engineered test data, preconditions, numbered test steps, and per-assertion expected results. Assertions blocked on an undecided business rule are tagged `[BLOCKED — BD-xx]` with the recommended answer in brackets. Set up and run the case regardless; hold sign-off on the tagged lines. Decisions are in the [decisions brief](2026-09-02-W36-employment-profile-decisions-brief.md).

## Test data

These need engineered POCDEX records with controlled UID/NRIC/FIN/HRID/email values and sequenced deltas. The workbook's Master Test Cases sheet already carries the intended values for each row (the UID, HRID, and email columns). Use those. Base the officer shape on:

| Persona | Shape | Use for |
|---|---|---|
| P01 / P016 John Tan / Michelle Yip | Happy path, one Job ID | Baseline for ID-01, ID-02, ID-05 |
| P10 Janice Wong | Two Job IDs, one pilot + one outside pilot | ID-04 (same person, two source records) |
| P02 Richard Ramos | Login email differs from the POCDEX identifier email | ID-06 (email vs identifier mismatch) |

Data-prep ownership (Compass ITC vs a joint POCDEX ask) is still unassigned and blocks every fixture. Raise it at the architecture walkthrough.

## Common preconditions (all cases)

- The officer's agency is a pilot agency, whitelisted on POCDEX.
- The officer has a resolved baseline profile and can log in via WOG AD.
- Baseline user-generated data: at least one self-declared competency and one in-progress opportunity application. This is what the "user data survives the identity change" assertions check.

---

## ID-01: FIN to NRIC conversion (HRP)

Covers rows 70, 71. HRP. P1. Category 4a.

The classic case. A new hire onboards on a FIN (foreign identification number), then converts to an NRIC when they get PR or citizenship. The POCDEX UID stays the same; the officer ID value changes.

### Test data

Engineered HRP officer, single employment, based on P01.
- POCDEX UID: `P0235607-48c` (stable across the conversion)
- HRID: `24030601`
- Initial officer ID: FIN `G7638402P`
- Converted officer ID: NRIC `S1664140E`, effective in the 2024-01-15 file
- Agency: a pilot agency. Grade, function, family: a complete valid set.

### Preconditions

- Officer onboarded and active on FIN `G7638402P`.
- Baseline profile resolved. One self-declared competency, one in-progress application.

### Test steps

1. Log in as the officer (authenticating against the FIN-era record). Record the profile, the competency list, and the user-generated data.
2. Note how the officer is identified internally (confirm the resolve returns POCDEX UID `P0235607-48c`).
3. Ingest the initial load and full job/competency load (rows 70's steps).
4. Ingest the delta from row 71: officer ID changes from FIN `G7638402P` to NRIC `S1664140E`, effective 2024-01-15, in the 2024-01-15 file. POCDEX UID is unchanged.
5. Trigger a profile refresh.
6. Log in again. Record the profile, the competency list, the recommendations, and the user-generated data.
7. Check for an audit record of the FIN-to-NRIC change.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | The officer resolves to the same POCDEX UID `P0235607-48c` both before and after the conversion. | — |
| 2 | The officer is not treated as a new person. No second `officerId`, no second Compass account, no duplicate profile. | — |
| 3 | After the conversion, the profile is unchanged except for the identifier: same agency, role, grade, competencies. | — |
| 4 | The FIN `G7638402P` is retained as a historical alias of the officer, not discarded. | [BD-10] [recommended: retain aliases] |
| 5 | The self-declared competency and the in-progress application are intact and still tied to this officer. | [BD-10] |
| 6 | Recommendations and role matches are unchanged by the conversion. | — |
| 7 | An audit record exists showing FIN `G7638402P` → NRIC `S1664140E` with the effective date. | [BD-10] [recommended: audit trail on identifier changes] |
| 8 | If the officer logs in via a mechanism keyed on the identifier value (rather than email or UID), login still succeeds post-conversion. | — |

### Notes

This is the scenario the workbook flags as zero-UAT-coverage-today with a high-severity failure mode (officer treated as brand new, loses access and history). Because the POCDEX UID is stable here, the design should handle it cleanly. The test is really checking that Compass keys on the UID and not the FIN/NRIC value. If it passes, ID-02 (where the UID also changes) is the harder follow-on.

---

## ID-02: Officer ID and HRID both change, so the POCDEX UID also changes (Cumulus)

Covers rows 72, 73. Cumulus. P1. Category 4b.

The harder version of ID-01. Here the HRID changes as well as the NRIC, and because the POCDEX UID is derived partly from those, the UID changes too. So the officer's anchor identifier is now different. This is where "key on the UID" stops being enough on its own.

### Test data

Engineered Cumulus officer, single employment, based on P01.
- Initial: HRID `23016780`, NRIC `S1288691H`, POCDEX UID `P0235626-8aa`
- Changed: HRID `23016781`, NRIC `S0335819D`, POCDEX UID `P0235628-d9e`
- The change is a single delta ("HRID and NRIC changes").

### Preconditions

- Officer onboarded and active on HRID `23016780` / UID `P0235626-8aa`.
- Baseline profile resolved. One self-declared competency, one in-progress application, one saved development journey.

### Test steps

1. Log in. Record the profile, the competency list, and all user-generated data. Confirm the resolve returns UID `P0235626-8aa`.
2. Ingest the initial load (row 72).
3. Ingest the delta from row 73: HRID `23016780` → `23016781`, NRIC `S1288691H` → `S0335819D`, and consequently POCDEX UID `P0235626-8aa` → `P0235628-d9e`.
4. Trigger a profile refresh.
5. Log in again. Record the profile, competencies, recommendations, and all user-generated data.
6. Check whether the old UID `P0235626-8aa` still resolves, and to what.
7. Check for an audit record linking the old and new UIDs.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | Compass recognises the new UID `P0235628-d9e` as the same person as the old UID `P0235626-8aa`. | [BD-09] [recommended: yes, via a UID-succession link from POCDEX] |
| 2 | The officer is not treated as a new person. No duplicate profile, no second account. | [BD-09] |
| 3 | The old UID `P0235626-8aa` either resolves to the same consolidated profile or is redirected to the new UID. It does not resolve to an empty or orphaned profile. | [BD-09] |
| 4 | The self-declared competency, the in-progress application, and the saved journey all carry over to the new UID intact. | [BD-10] |
| 5 | Both former identifiers (old HRID, old NRIC, old UID) are retained as historical aliases. | [BD-10] |
| 6 | The profile content (agency, role, grade, competencies) is unchanged. | — |
| 7 | An audit record links `P0235626-8aa` → `P0235628-d9e` with the effective date and the reason. | [BD-10] |
| 8 | If POCDEX does not supply a succession link between the old and new UIDs, Compass routes the case to operations rather than silently creating a duplicate. | [BD-09] |

### Notes

This is the real test of the identity model. If the POCDEX UID can change, then "anchor on the UID" needs a succession mechanism: POCDEX has to tell Compass "UID X is now UID Y". Assertion 8 is the fallback if it doesn't. This case should be raised at the architecture walkthrough as a direct question to Rama and to POCDEX: **does the feed carry a UID-change / UID-succession event, or only the new UID with no link back?** The answer decides whether this is a clean automated case or an ops-exception case.

---

## ID-03: New hire reuses a departed officer's email (Cumulus)

Covers rows 88, 89, 90. Cumulus. P1. Category 13. This is TC13, one of the two highest-severity non-job cases in the 41-row cut.

Officer A onboards with an email. A is terminated. Officer B (a genuinely different person) onboards later and is assigned A's old email, because the email was released and recycled.

### Test data

Engineered Cumulus officers, based on P01. Three officers in the workbook's setup; the collision is between two of them.
- Officer A: HRID `23016774`, primary and secondary email `23016774@email.com`, UID `P0235622-139`
- Officer B: HRID `23016775` (was `23016774` in earlier days per the workbook, i.e. the HRID is reused too), same primary email `23016774@email.com`, UID `P0235640-528`
- A and B have different NRICs and different POCDEX UIDs. Same email.

### Preconditions

- Officer A onboarded and active with email `23016774@email.com`. A has a resolved profile with role competencies, one self-declared competency, and one submitted application.
- Officer B does not exist in Compass yet.

### Test steps

1. Log in as Officer A. Record A's profile, competencies, and user-generated data (especially the submitted application).
2. Ingest the delta from row 89: Officer A is terminated.
3. Confirm A's Compass access is now blocked (A is no longer active).
4. Ingest the delta from row 90: Officer B is a new hire, assigned the primary email `23016774@email.com`, with B's own NRIC and POCDEX UID `P0235640-528`.
5. Attempt to log in with email `23016774@email.com`. Record who resolves and what profile is shown.
6. Trigger a resolve directly against the email. Record the response.
7. Check whether any of Officer A's data (application, competencies, self-declared items) is visible to Officer B.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | After A is terminated, A's access is blocked. A cannot log in. | — |
| 2 | When B logs in with the reused email, the resolve returns Officer B's POCDEX UID `P0235640-528`, not Officer A's. | [BD-08] [recommended: resolve by UID/NRIC, email is not the key] |
| 3 | Officer B sees only their own profile: B's agency, B's role, B's competencies. | [BD-08] |
| 4 | Officer B sees none of Officer A's data. The submitted application, self-declared competencies, and any journeys belonging to A are not visible to B and are not re-associated to B. | [BD-08, BD-10] |
| 5 | If the resolve is ambiguous (the email maps to two UIDs and Compass cannot tell which is current), the login is blocked with a clear message rather than guessing. | [BD-08] [recommended: block on ambiguity, don't guess] |
| 6 | The ambiguous or reused-email case is surfaced to operations. | [BD-08, BD-09] |
| 7 | Officer A's historical data is retained (A left, but the record and its history are not deleted). | [BD-10] |

### Notes

This is the scenario with real production evidence: 82 blocked account-setup attempts, 7 of them genuine cross-person collisions. The failure mode is a privacy incident, the worst outcome on the whole employment-profile workstream. Assertion 4 is the one that matters most. The workbook also has a related "check whether `s***@sentosa.gov.sg` and `j***@sentosa.gov.sg` are shared functional mailboxes" note; if a test email turns out to be a role mailbox rather than a person's, that's a different failure mode (an officer's login is a shared inbox) and worth a separate line. BD-08 (shared-mailbox handling) needs a POCDEX conversation.

---

## ID-04: Same person, two source records with different identifiers

Covers rows 85, 86, 87. Cumulus and HRP. P1. Categories 12a, 12b, 12c.

Three variants of "the feed contains two records that are really the same person, or really different people, and the identifiers don't make it obvious".

- Row 85 (12b): same name, same email, **different** HRID and NRIC, one record in each source system. Likely two different people who happen to share a name and a (possibly shared) email.
- Row 86 (12a): same name, same email, different HRID and NRIC, **both in the same source system**. Same likely interpretation.
- Row 87 (12c): same name, **same NRIC**, different email and HRID, one record in each source system. This is one person legitimately spanning two systems (the 251-officer pattern).

### Test data

Engineered records per the workbook's values.
- Row 85: HRP record HRID `HRP-24030604` UID `P0235610-2af`; Cumulus record HRID `23016776` UID `P0235623-885`. Same name, same email, different NRICs.
- Row 86: two Cumulus records, HRIDs `23016777` and `23016778`, UIDs `P0235624-55b` and `P0235625-efb`. Same name, same email, different NRICs.
- Row 87: HRP record HRID `HRP-24030605` UID `P0235611-e54`; Cumulus record HRID `23016779`, **same UID `P0235611-e54`**. Same NRIC, different emails.

### Preconditions

- The engineered records are loaded per the variant.
- For row 87, one baseline profile exists (the officer has logged in at least once).

### Test steps

1. For each variant, load the two records.
2. Trigger a resolve for the shared attribute (email for 85/86, NRIC for 87).
3. Record how many distinct officers/profiles Compass produces.
4. For row 87 (same NRIC, same UID): log in with each email in turn. Record the profile shown each time.
5. For rows 85/86 (same email, different NRIC/UID): attempt login with the shared email. Record what resolves.
6. Check the operations exception list for any of the three.

### Expected results

| # | Variant | Assertion | Decision |
|---|---|---|---|
| 1 | 85, 86 | Because the NRICs and POCDEX UIDs differ, Compass treats these as **two different people**. Two profiles, not one merged one. | [BD-08] [recommended: NRIC/UID is the key, shared email does not merge] |
| 2 | 85, 86 | A shared email between two different UIDs does not cause one person's data to appear under the other. | [BD-08, BD-10] |
| 3 | 85, 86 | If the shared email makes a login resolve ambiguous, the login is blocked with a clear message and the case goes to operations. | [BD-08] |
| 4 | 87 | Because the NRIC (and UID) is the same, Compass treats the two records as **one person** with two employments. One consolidated profile. | [BD-01] |
| 5 | 87 | Logging in with either email shows the same consolidated profile, not a partial or different view. | [BD-01] |
| 6 | 87 | The primary appointment shown follows the primary rule (source `primaryPosition` flag, then most recent effective date, then source-system priority). | [BD-02] |
| 7 | 87 | Both emails are retained as valid aliases for the person. | [BD-10] |

### Notes

Row 87 is the 251-officer production pattern (one NRIC, two HRP/Cumulus records, different emails). Rows 85 and 86 are the "looks like a duplicate but isn't the same person" trap. The dedup check on the production data (`group by email, count distinct NRICs`) found zero cross-person email collisions among POCDEX-native officers, so in practice 85/86 may be rare, but the test still needs to prove Compass won't merge on email. BD-08 and BD-01 together cover this.

---

## ID-05: Backdated terminate, then rescinded (Cumulus)

Covers rows 74, 75, 76. Cumulus. P1. Category 6.

An officer is terminated, the termination is backdated, and then it's rescinded. The question is what state the officer's access and profile are in at each step, and whether a rescind cleanly restores everything.

### Test data

Engineered Cumulus officer, based on P01.
- HRID `23016770`, UID `P0235618-558`
- Onboard 2024-01-01. Terminate effective 2024-01-15 (delta arrives 2024-01-16). Backdated terminate rescinded in a later delta.

### Preconditions

- Officer onboarded and active. Baseline profile resolved. One self-declared competency, one in-progress application.

### Test steps

1. Log in. Record the profile and the user-generated data.
2. Ingest the initial load (row 74).
3. Ingest the termination delta (row 75): terminated effective 2024-01-15, delta in the 2024-01-16 file.
4. Attempt to log in on 2024-01-16 (post-termination). Record what the officer sees.
5. Attempt to log in with an effective date between 2024-01-15 and 2024-01-16 if the environment allows time control. Record.
6. Ingest the rescind delta (row 76): the backdated termination is rescinded. The officer is active again.
7. Trigger a refresh. Log in. Record the profile, competencies, recommendations, and all user-generated data.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | After the termination takes effect, the officer's access is blocked. They cannot log in, or they land in a "no active employment" routed state. | [BD-07 / BD-09] [recommended: block on termination] |
| 2 | The officer's profile and all user-generated data are retained, not deleted, while they are terminated. | [BD-10] |
| 3 | Compass applies the termination on the effective date (2024-01-15), not the file arrival date (2024-01-16). | — |
| 4 | On rescind, the officer's access is fully restored. They can log in again. | — |
| 5 | On rescind, the profile is exactly as it was before the termination: same role, same competencies, same recommendations. | [BD-10] |
| 6 | The self-declared competency and the in-progress application are intact after the rescind. | [BD-10] |
| 7 | An audit trail records the terminate and the rescind with their effective dates. | [BD-10] [recommended: audit trail] |

### Notes

This is an identity-adjacent lifecycle case: it's not about the identifier changing, it's about the officer's active state flipping off and back on. It shares the "block on no active employment" behaviour with MOV-05 and MOV-08. The rescind path (steps 6–7) is the test of whether Compass's state changes are reversible without data loss. Rows 97–108 in the workbook are a larger family of rescind cases (rescind before effective date, rescind after, change-job rescind) that are mostly P2 and out of the current cut; ID-05 covers the P1 backdated-terminate-rescind sequence.

---

## ID-06: Primary email and name change together (HRP)

Covers rows 77, 78. HRP. P1. Categories 8a, 8b.

The officer's primary email changes and their name changes in the same delta, alongside a job update. The workbook's example: "Tony 2" with email `24030602@pmo.gov.sg` becomes "Tony Stark" with email `Test_24030602@pmo.gov.sg`.

### Test data

Engineered HRP officer, based on P02 (login email differs from the identifier email).
- HRID `24030602`, UID `P0235608-783` (stable)
- Before: first name "Tony 2", primary email `24030602@pmo.gov.sg`
- After: first name "Tony Stark", primary email `Test_24030602@pmo.gov.sg`, effective 2024-01-15, with a job update in the same delta

### Preconditions

- Officer onboarded and active as "Tony 2" with email `24030602@pmo.gov.sg`.
- Baseline profile resolved. One self-declared competency, one in-progress application.
- The officer has logged in at least once using the old email.

### Test steps

1. Log in with the old email `24030602@pmo.gov.sg`. Record the profile (name displayed, email displayed), competencies, and user-generated data. Confirm the resolve returns UID `P0235608-783`.
2. Ingest the initial load (row 77).
3. Ingest the delta from row 78: name → "Tony Stark", primary email → `Test_24030602@pmo.gov.sg`, plus a job update, effective 2024-01-15.
4. Trigger a refresh.
5. Attempt to log in with the **old** email `24030602@pmo.gov.sg`. Record the result.
6. Attempt to log in with the **new** email `Test_24030602@pmo.gov.sg`. Record the profile, competencies, and user-generated data.
7. Check the displayed name and the audit trail.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | The officer resolves to the same UID `P0235608-783` before and after the change. Same person, no duplicate. | — |
| 2 | The displayed name updates to "Tony Stark". | — |
| 3 | The job update in the same delta is applied: the profile re-derives to the new role attributes. | — |
| 4 | Logging in with the new email `Test_24030602@pmo.gov.sg` resolves to the same person and shows the same consolidated profile. | [BD-08] |
| 5 | Logging in with the old email `24030602@pmo.gov.sg`: define the expected behaviour. Recommended: the old email is kept as an alias for a grace period and still resolves to the same person, or it is cleanly rejected with a "your email has changed" message. It must not resolve to a blank profile or a different person. | [BD-08] [recommended: old email as alias, or clean rejection] |
| 6 | The self-declared competency and the in-progress application are intact under the new email. | [BD-10] |
| 7 | Both emails and both names are retained in the audit trail with the effective date. | [BD-10] |
| 8 | The name change does not on its own trigger a role/competency re-derivation. Only the job-update part of the delta does. | — |

### Notes

This case bundles a name change, an email change, and a job update into one delta, which is realistic (agency moves often do all three at once). Assertion 5 is the open design question: what happens to the old email. It matters because officers, POCs, and support will all keep using the old address for a while. The workbook's own framing ("Profile Change + Job Update All") suggests this is a compound delta the ingestion has to unpack into its parts. BD-08 covers the email-alias behaviour.

---

## ID-07: FIN/NRIC conversion with concurrent employments

Covers: the FIN-to-NRIC path (rows 70/71 logic) applied to an officer who also has a second active employment.

Not a distinct workbook row, but a combination the pilot population will hit: an officer converts FIN → NRIC while holding two active Job IDs (the 251-officer pattern plus a conversion). It's worth an explicit case because it stresses both the identity model and the consolidation model at once.

### Test data

Engineered officer, based on P10 (two Job IDs, one pilot + one outside pilot).
- POCDEX UID: stable across the conversion
- Employment 1 (pilot agency): Job ID from a pilot agency, active
- Employment 2 (second agency): a second active Job ID
- Officer ID: FIN, converting to NRIC in a later file

### Preconditions

- Officer active with two employments, one consolidated profile (per BD-01).
- Baseline profile resolved with the union of competencies from both roles. One self-declared competency, one in-progress application.

### Test steps

1. Log in. Record the consolidated profile, the primary appointment shown, and the full (union) competency list.
2. Ingest the FIN → NRIC conversion delta (officer ID changes value, UID stable).
3. Trigger a refresh.
4. Log in. Record the profile, the primary appointment, the competency list, the recommendations, and the user-generated data.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | The officer still resolves to the same POCDEX UID, and the resolve still fans out to both active officer IDs. | — |
| 2 | The consolidated profile is unchanged by the conversion: same two employments, same primary appointment, same union of competencies. | [BD-01, BD-02, BD-03] |
| 3 | Neither employment is dropped or duplicated as a result of the identifier change. | — |
| 4 | The FIN is retained as a historical alias. | [BD-10] |
| 5 | The self-declared competency and the in-progress application are intact. | [BD-10] |
| 6 | An audit record captures the conversion. | [BD-10] |

### Notes

This case only matters if FIN→NRIC conversions occur in the pilot population and any of those officers hold concurrent employments. Confirm the pilot data actually contains this before building the fixture. If it doesn't, ID-07 can be deferred, but flag it as a known post-pilot gap.

---

## Summary and readiness

| Case | Rows | What it tests | Sign-off readiness | Blocked on |
|---|---|---|---|---|
| ID-01 | 70, 71 | FIN → NRIC, UID stable | Tier 1 after BD-10 | BD-10 (alias + audit) |
| ID-02 | 72, 73 | HRID + NRIC change, UID also changes | Tier 2 (raise at architecture walkthrough) | BD-09 (UID succession), BD-10 |
| ID-03 | 88, 89, 90 | Reused email, new person | Tier 2 (highest severity) | BD-08, BD-10 |
| ID-04 | 85, 86, 87 | Two records, same person or not | Tier 2 | BD-08, BD-01, BD-02 |
| ID-05 | 74, 75, 76 | Backdated terminate then rescind | Tier 2 | BD-07 / BD-09, BD-10 |
| ID-06 | 77, 78 | Email + name + job change together | Tier 2 | BD-08, BD-10 |
| ID-07 | (70/71 + concurrency) | FIN → NRIC with two employments | Tier 2, confirm pilot data first | BD-01, BD-02, BD-03, BD-10 |

Two questions to put to the architecture walkthrough and to POCDEX:

1. **Does the POCDEX feed carry a UID-succession event** when a UID changes (ID-02), or does Compass just receive a new UID with no link back? This decides whether ID-02 is automated or an ops exception.
2. **What is the shared-mailbox / recycled-email contract** (ID-03, ID-04, ID-06)? BD-08 can't be written without POCDEX's position on how reused and shared emails are represented in the feed.

What to do now:

1. Imelda builds the ID-01 fixture and drafts the test-case doc. It can be signed off right after the BD session.
2. ID-02 through ID-07: build fixtures, run steps, hold the tagged assertions.
3. ID-03 is the highest-severity case (cross-person data exposure). Prioritise its fixture and get BD-08 moving with POCDEX this week.
4. Data-prep ownership is still unassigned and blocks every fixture. Raise it at the architecture walkthrough.
