# Movement UAT Test Cases (Compass Side)

Date: 2 September 2026 (W36)

These are the executable UAT test cases for the movement scenarios, written from Compass's end. They cover the 32 movement rows in the 118-row POCDEX workbook (`POCDEX_Compass_Test_Plan_with_PM_Priority_4.xlsx`), grouped into 8 test cases (MOV-01 to MOV-08).

The workbook already has the POCDEX-side ingestion steps and the expected file-extraction results for each row. What it doesn't have is the Compass-side expected behaviour. That's what these fill in.

## How to read a case

Each case has: an ID and title, the 118 rows it covers, the persona and test data, preconditions, numbered test steps, and expected results broken out per assertion so a tester can pass or fail each line on its own.

Some expected results depend on a business decision that hasn't been made yet. Those lines are tagged `[BLOCKED — BD-xx]` and carry the recommended answer in brackets. A tester can still set up the case and run the steps; they just can't sign off the tagged assertions until the decision lands. The decisions are in the [decisions brief](2026-09-02-W36-employment-profile-decisions-brief.md).

## Test data

The movement scenarios need engineered POCDEX data, not the standard 22 personas, because they involve sequenced deltas (new hire, then transfer, then end). Base the engineered records on these existing personas where the shape matches:

| Persona | Shape | Use for |
|---|---|---|
| P01 / P016 John Tan / Michelle Yip | Happy path, one Job ID, MDDI, JR11 | Baseline "before the move" state in MOV-01, MOV-07 |
| P13 Mary Lee | Seconded officer, home agency differs from current posting | MOV-03, MOV-04 base |
| P14 Daniel Tan | Double-hatting, one position returned as primary (highest allocation) | MOV-02 overlap, MOV-03 concurrent state |
| P10 Janice Wong | Two unique Job IDs, one pilot agency + one outside, CAA primary + LTA secondary | MOV-02, MOV-07 remove-additional-position |
| P19 Grace Lim | Single employment, multiple jobs (10087798; 10087799) | MOV-07 change-job |
| P20 Hannah Ong | Two employments, each with multiple jobs, nested families/functions | MOV-03, MOV-08 dual-system |
| P08 Ravi Kumar | Seconded officer, no job function/family, grade MX09 | MOV-04, MOV-06 fallback checks |

Every engineered record needs: a stable POCDEX UID, an NRIC, and a work email per employment. Data-prep owner is still unassigned (Compass ITC vs a joint POCDEX ask). Flag at the architecture walkthrough.

## Common preconditions (all cases)

- The officer's agency is one of the 6 pilot agencies and is whitelisted on POCDEX.
- The officer can already log in to Compass (WOG AD) and has a resolved baseline profile.
- The officer has some user-generated data on the baseline profile: at least one self-declared competency and one in-progress opportunity application. This is what the "don't overwrite user data" assertions check against.
- Compass resolves identity by NRIC and fans out to all active officer IDs (the agreed design).

---

## MOV-01: Transfer inside one HR system (HRPS)

Covers rows 111, 112. HRP. P1. Kept in the 41-row cut.

### Test data

Engineered HRP officer, single active employment, based on P01's shape.
- POCDEX UID: `MOV01-UID` · NRIC: `MOV01-NRIC` · email: `mov01_officer@mddi.test.gov.sg`
- Baseline position: `01080684`, agency MDDI, grade JR11, job family Accounting & Finance (00000001), job function Financial Policy & Reviews (00000027)
- Transfer target: position `01080682`, same agency, different function/family/grade (pick a distinct set so the re-derivation is visible, e.g. family 00000021 Policy & Planning, function 00000143 Sector Policy, grade JR10)

### Preconditions

- Officer active on position 01080684 with a resolved profile.
- Baseline profile shows Financial Policy & Reviews, Accounting & Finance, JR11, and the competencies derived from that role.
- One self-declared competency ("Stakeholder Management") and one in-progress application recorded.

### Test steps

1. Log in as the officer. Record the profile: agency, employment title, job function, job family, grade, and the full competency list (mark which are role-derived vs self-declared).
2. Record the in-progress application's state.
3. Ingest the POCDEX delta: position 01080684 extracts for the last time on 2024-01-08, position 01080682 extracts from 2024-01-09.
4. Trigger a profile refresh (log out and back in, or run the scheduled refresh).
5. Reload the profile and the My Development recommendations.
6. Check the competency list again. Check the self-declared competency and the application.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | The profile updates to position 01080682's job function (Sector Policy), job family (Policy & Planning), and grade (JR10). | — |
| 2 | The officer keeps the same `officerId`. No second Compass account is created. | — |
| 3 | Role-derived competencies re-derive from position 01080682. The old role's competencies (from 01080684) are re-labelled "past role". | [BD-04] |
| 4 | "Past role" competencies stay visible on the profile but do not appear in role-matching or recommendations. | [BD-04] |
| 5 | My Development recommendations recompute from the new active role only. Old-role matches no longer appear. | [BD-04] |
| 6 | The self-declared competency "Stakeholder Management" is unchanged. | [BD-10] |
| 7 | The in-progress application is unchanged and still tied to this officer. | [BD-10] |
| 8 | No overlap period is observed. The profile shows the old role right up to the refresh, then the new role. There is never a moment where both roles show as current. | — |

### Notes

Rows 111 and 112 in the workbook are the "new hire" and "transfer" halves of the same journey. Run them as one sequence, not two cases. This is the simplest movement case: single system, single record, no concurrency. If BD-10 confirms user data keys to the person and not the `officerId`, this whole case is Tier 1 and can be signed off immediately after the BD session.

---

## MOV-02: Transfer across systems (HRP ↔ Cumulus)

Covers rows 26, 27, 30, 31. HRP and Cumulus. P1 (row 27 is P2). Rows 26, 30, 31 kept in the 41-row cut.

### Test data

Engineered officer with a sequenced cross-system transfer, based on P10's two-system shape.
- POCDEX UID: `MOV02-UID` · NRIC: `MOV02-NRIC`
- System A (HRP): position `HRP-A`, agency LTA, grade JR04, work email `mov02_officer@lta.test.gov.sg`
- System B (Cumulus): position `CUM-B`, agency CAA, grade MX06, work email `mov02_officer@caa.test.gov.sg`
- Row 27 variant: System B grade `MX41` (deliberately outside Compass's grade set)

### Preconditions

- Officer active in System A (HRP) only, with a resolved profile showing LTA / JR04 / the System-A role.
- User-generated data on the profile: one self-declared competency, one in-progress application.
- No System-B record yet.

### Test steps

1. Log in. Record the baseline profile (System A: LTA, JR04, role) and the user-generated data.
2. Ingest delta 1: System-A record active (baseline confirmed in the feed).
3. Ingest delta 2: Transfer Out of System A. System-A position `HRP-A` extracts for the last time on its cut-off date.
4. Ingest delta 3: Transfer In to System B. System-B position `CUM-B` extracts from its effective date. There is now a window where both `HRP-A` and `CUM-B` are in the feed.
5. During the overlap window, before `CUM-B`'s effective date: refresh and record the profile.
6. During the overlap window, on or after `CUM-B`'s effective date: refresh and record the profile.
7. After the overlap (System-A record has dropped from the feed): refresh and record the profile, competencies, and recommendations.
8. Log out. Log back in using the System-B work email. Record the profile and the user-generated data.
9. Repeat steps 2–7 for the row 27 variant (System-B grade MX41).

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | Before `CUM-B`'s effective date, even with both records in the feed, the profile still shows System A (LTA, JR04). | [BD-02a] [recommended: yes] |
| 2 | On `CUM-B`'s effective date, the profile switches to System B (CAA, MX06). System A is shown as a secondary active role, not the primary. | [BD-02a] |
| 3 | The switch happens at the next refresh after the effective date, never mid-session. | [BD-02a] |
| 4 | Once the System-A record drops from the feed, System-A role competencies are re-labelled "past role". Before that, while System A is still a secondary active role, its competencies are still current. | [BD-04] |
| 5 | After the transfer completes, the profile is System B only. NRIC still resolves to both `officerId`s; the profile consolidates to System B as primary. | [BD-01, BD-02] |
| 6 | Logging in with the System-B email shows the same consolidated profile. The in-progress application and self-declared competency are present and unchanged. | [BD-01, BD-10] |
| 7 | Row 27 variant: the System-B grade MX41 is not in Compass's grade set. The profile shows a graceful fallback (e.g. the grade band left blank or shown as "not mapped"), not an error page and not a blank profile. The officer's login still succeeds. | — |
| 8 | Row 27 variant: the unmapped grade is logged as a data-mapping gap for follow-up. It does not block the officer. | — |

### Notes

Rows 26 and 30 are the two directions of the transfer (HRP→Cumulus, Cumulus→HRP). Row 31 is the completion of row 30. Row 27 is the same as 26 but with an out-of-set grade, and it's P2 for that reason. The overlap window (steps 5–6) is the crux. It is the difference between "the profile updates cleanly" and "the officer sees the wrong agency for two days". BD-02a is the decision that resolves it.

---

## MOV-03: Cross-system secondment, with End Secondment

Covers rows 23, 24, 25, 28, 29. HRP and Cumulus. P1. The 41-row cut dropped 23–25 and 28–29 as "ready to test".

### Test data

Engineered officer with a parent employment and a concurrent seconded employment, based on P13 (seconded officer) + P20 (dual employment).
- POCDEX UID: `MOV03-UID` · NRIC: `MOV03-NRIC`
- Parent (HRP): position `HRP-PARENT`, agency CAA, grade JR03, position id `01185647`, work email `mov03_officer@caa.test.gov.sg`
- Receiving (Cumulus): position `CUM-RECV`, agency URA, grade MX05, work email `mov03_officer@ura.test.gov.sg`
- Secondment period: In on the effective date, End Secondment on 2024-01-25

### Preconditions

- Officer active in the parent system (CAA / JR03) only, with a resolved profile and parent-role competencies.
- User-generated data: one self-declared competency, one in-progress application, one saved development journey.
- No receiving-system record yet.

### Test steps

1. Log in. Record the baseline profile (parent: CAA, JR03, role), competencies, and all user-generated data.
2. Ingest delta 1: parent record active.
3. Ingest delta 2: Secondment Out of parent + Secondment In to the receiving system. Both `HRP-PARENT` and `CUM-RECV` are now active concurrently.
4. During the secondment period: refresh. Record the profile, the primary role shown, the full competency list, and the recommendations.
5. Ingest delta 3 (row 25): End Secondment. `CUM-RECV` ends on 2024-01-25. `HRP-PARENT` remains active (or reactivates).
6. After End Secondment: refresh. Record the profile, competencies, recommendations, and all user-generated data.
7. Log out. Log back in with the parent work email. Confirm the profile and the user-generated data.
8. Repeat steps 2–7 for rows 28/29 (secondment in the other direction: Cumulus parent, HRP receiving, grade MX05).

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | During the secondment, the officer has one consolidated profile, not two switchable ones. | [BD-01] [recommended: one profile] |
| 2 | During the secondment, the primary role shown is the receiving appointment (URA, MX05). | [BD-02] |
| 3 | During the secondment, the competency list is the union of parent-role and receiving-role competencies, de-duplicated by competency code. Where the same competency appears in both at different proficiency levels, the higher level is shown. | [BD-03] |
| 4 | Recommendations during the secondment are computed from the union of both active roles. | [BD-03] |
| 5 | On End Secondment, the parent appointment becomes primary again automatically. The officer does not have to select or confirm anything. | [BD-04a] [recommended: auto-revert] |
| 6 | On End Secondment, the receiving-role competencies are re-labelled "past role", retained and visible, but excluded from recommendations. | [BD-04, BD-04a] |
| 7 | After the return, the profile shows the parent role (CAA, JR03). | [BD-02] |
| 8 | The self-declared competency, the in-progress application, and the saved development journey are all intact and tied to the person, regardless of which point in the sequence they were created. | [BD-10] |
| 9 | Row 23 on its own (new hire, before any secondment) produces a normal baseline profile with no "past role" and no concurrency. | — |

### Notes

This is the hardest movement case because of the concurrent-records state (step 4) and the auto-revert on return (step 5). Both are entirely blocked on decisions: BD-01, BD-02, BD-03, BD-04, and BD-04a. If any of those slip, this case can't be signed off. It should be the first thing the BD session unblocks, because a cross-system secondment that shows the wrong agency or loses an officer's application is exactly the OTG failure Compass is meant to fix.

---

## MOV-04: Secondment inside one system, plus backdated end

Covers rows 2, 3, 32, 33, 34, 35, 36, 37. HRP and Cumulus. P1.

### Test data

Engineered officer with a single record whose position moves to a seconded position within the same system, based on P08 (seconded, missing function/family).
- POCDEX UID: `MOV04-UID` · NRIC: `MOV04-NRIC` · email: `mov04_officer@ura.test.gov.sg`
- Home position: `HOME-POS`, agency URA, grade MX09, a defined function/family
- Seconded position (within URA): `SEC-POS` (row 3 uses `10037809`; row 33 uses `P-11037136B`), a different function/family/grade
- Backdated end (rows 34, 35): End Secondment Within with an effective date of 2024-01-14 arriving in a later file

### Preconditions

- Officer active on the home position with a resolved profile and home-role competencies.
- User-generated data: one self-declared competency, one in-progress application.

### Test steps

1. Log in. Record the baseline profile (home position: function, family, grade) and the user-generated data.
2. Ingest the secondment-within delta: the single record's position changes from `HOME-POS` to `SEC-POS`.
3. Refresh. Record the profile (should reflect `SEC-POS`'s function, family, grade) and the competencies.
4. Ingest the End Secondment Within delta, current-dated. Refresh. Record the profile.
5. Reset the data. Re-run steps 1–3, then ingest the End Secondment Within delta as a backdated change (effective 2024-01-14, file arrives 2024-01-16 or later).
6. If possible, log in during the gap between the real effective date and the file arriving. Record what the profile shows.
7. Refresh after the file arrives. Record the profile and the user-generated data.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | The secondment-within is a single position change. The profile updates in place. No second record, no concurrency. | [BD-10] |
| 2 | The profile re-derives to `SEC-POS`'s job function, job family, and grade. | — |
| 3 | If `SEC-POS` and `HOME-POS` produce different primary attributes, `SEC-POS` is primary for its effective period. | [BD-02] |
| 4 | On End Secondment (current-dated), the profile returns to `HOME-POS`. If home-role competencies had moved to "past role", they return as current. | [BD-04] |
| 5 | On backdated End Secondment, Compass applies the effective date (2024-01-14), not the file date. | — |
| 6 | If the officer logged in during the gap (step 6), they saw the seconded position. After the file arrives and the refresh runs, the profile corrects to the home position. | — |
| 7 | The self-declared competency and the in-progress application survive both the secondment and the backdated correction. | [BD-10] |

### Notes

Rows 2 and 32 and 36 are "new hire" baselines. Rows 3, 33, 37 are the secondment. Rows 34, 35 are the backdated end. The backdated case (steps 5–7) is the interesting one: it tests whether Compass respects effective dates over file dates, which matters for every retroactive correction, not just this scenario. Note rows 2 and 3 mention "secondment within to MOE" and the workbook has a comment asking why MOE is called out. Treat MOE as just another agency for the test; if the "why MOE" question turns out to matter, it's a POCDEX clarification.

---

## MOV-05: Secondment out of POCDEX

Covers rows 38, 39, 40. HRP and Cumulus. P1.

### Test data

Engineered officer whose only active position is a secondment out of the POCDEX-covered systems, based on P01.
- POCDEX UID: `MOV05-UID` · NRIC: `MOV05-NRIC` · email: `mov05_officer@mddi.test.gov.sg`
- Baseline position: `OUT-POS`, agency MDDI, grade JR11, a defined role
- Row 39: `OUT-POS` extracts for the last time on 2024-01-08, then stops appearing
- Row 40: officer is already seconded out at the initial load (no active position from the start)

### Preconditions

- For rows 38/39: officer active with a resolved profile and user-generated data.
- For row 40: officer exists in POCDEX but has no active in-scope position from the start.

### Test steps

1. (Rows 38/39) Log in. Record the baseline profile and the user-generated data.
2. (Rows 38/39) Ingest the secondment-out delta: `OUT-POS` extracts on 2024-01-08, then stops. The Resolve API now returns no active in-scope employment for this NRIC.
3. Attempt to log in. Record what the officer sees.
4. Trigger a resolve directly (API level). Record the response.
5. (Row 40) Attempt the officer's first-ever login. Record what they see.
6. Ingest a return delta: the position reappears in the feed. Refresh and log in. Record the profile and the user-generated data.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | When the Resolve API returns no active in-scope employment, the login still completes (authentication succeeds) but the officer is routed to a clear "your profile isn't available while you're posted outside" state. | [BD-09] [recommended: routed state, not error] |
| 2 | The officer does not see a hard error page. | [BD-09] |
| 3 | The officer does not see a blank or half-built profile. | [BD-09] |
| 4 | The officer's historical profile and all user-generated data are retained, not deleted. | [BD-09, BD-10] |
| 5 | The case is visible to operations (an exception list or equivalent), flagged as a legitimate state rather than a defect. | [BD-09] |
| 6 | Row 40 (already seconded out at first login): same routed state. No profile is created with empty fields. | [BD-09] |
| 7 | On return, when the position reappears, the profile reactivates from the returning record. The retained user-generated data re-associates to the person by NRIC. | [BD-10] |

### Notes

This is not a profile-change test. No field changes value; the record simply stops arriving. It's an access-state test, and the assertions are about graceful handling of "no resolvable active employment", which is BD-09. It overlaps MOV-08 stage 3 (NPL in both systems produces the same "no active employment" state) but the cause is different, so keep them as separate cases. The routed-state UX (assertion 1) needs a design; flag it if it doesn't exist yet.

---

## MOV-06: Secondment in from a system POCDEX doesn't cover

Covers row 68. Cumulus. P1. Kept in the 41-row cut as the one mobility row held for a grade change.

### Test data

Engineered officer with no prior Compass profile, entering via a secondment-in from a non-POCDEX source, based on P08.
- POCDEX UID: `MOV06-UID` · NRIC: `MOV06-NRIC` · email: `mov06_officer@caa.test.gov.sg`
- New position: `NC2C-POS`, agency CAA (Cumulus), grade MX12, a defined function/family
- Optional variant: the same officer also has a retained "past role" from an earlier POCDEX stint (to test the union case)

### Preconditions

- Base case: the officer has no Compass profile at all. They were outside POCDEX coverage.
- Variant: the officer has a retained "past role" on file from a prior employment that ended.

### Test steps

1. Confirm the officer has no Compass profile (base case) or has only a "past role" on file (variant).
2. Ingest the secondment-in delta: a new active Cumulus position `NC2C-POS` appears, tagged as a non-Cumulus-to-Cumulus secondment, grade MX12.
3. Log in for the first time. Trigger a resolve.
4. Record the profile: agency, grade, job function, job family, and the competency list.
5. (Variant) Check whether the prior "past role" competencies are shown, and how they're labelled.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | NRIC resolves to the new `officerId`. A fresh consolidated profile is built from the Cumulus record. | — |
| 2 | The profile shows grade MX12, agency CAA, and the position's job function and job family. | — |
| 3 | Role-derived competencies are computed from `NC2C-POS`. | — |
| 4 | The login succeeds cleanly. No error, no half-built profile, no "profile not available" state. | — |
| 5 | Variant: if the officer has a retained "past role", the current Cumulus role is primary and the prior competencies are labelled "past role". | [BD-03] |
| 6 | Base case (no prior data): the profile behaves exactly like a normal new-hire flow. | — |

### Notes

For the base case this is essentially a new-hire test with an unusual entry path, and it's Tier 1. The only thing that makes it a movement case is the variant where the officer has prior retained data, which is blocked on BD-03. If the team decides "past role" data only exists for officers who were already in Compass, the variant may not be reachable in the pilot; confirm before building the fixture.

---

## MOV-07: Position or job change, additional position, CUS posting

Covers rows 45, 79, 80, 81, 82, 93, 94, 95, 115, 116. HRP and Cumulus. P1.

This case has five sub-cases with different triggers. Run them as separate executions under one case ID.

### Test data

| Sub-case | Persona base | Key data |
|---|---|---|
| 7a — Position ID change, current-dated (79, 81) | P01 / P19 | Single position, ID changes from `POS-A` to `POS-B`, effective same day |
| 7b — Position ID change, future-dated (80, 82) | P01 | ID change with an effective date ~1 week ahead of the file date |
| 7c — Change Job A→B (93–95) | P19 Grace Lim | Employment A (`P-20003732`) ends, Employment B (`P-20003732A`) begins, future-dated, overlap window |
| 7d — Remove Additional Position (45) | P10 Janice Wong | Officer holds two positions: primary `P-10233797` (MX10), additional `P-11038466` (blank grade). Additional position is removed. |
| 7e — CUS Posting (115, 116) | P01 | New hire with employment position `01147297`, then a CUS posting changes the position to `01147307` |

### Preconditions

- Officer active with a resolved profile.
- For 7d: officer holds two positions, one primary (MX10), one additional (blank grade).
- User-generated data on the profile in every sub-case.

### Test steps (per sub-case)

1. Log in. Record the baseline profile and the user-generated data.
2. Ingest the sub-case's delta (see table above).
3. For future-dated sub-cases (7b, 7c): refresh both before and on the effective date.
4. For 7c (overlap): refresh during the A/B overlap window.
5. Refresh after the change completes. Record the profile, competencies, recommendations, and user-generated data.

### Expected results

| # | Sub-case | Assertion | Decision |
|---|---|---|---|
| 1 | 7a | Profile updates in place to the new position's attributes. Prior role competencies → "past role". User data preserved. | [BD-04, BD-10] |
| 2 | 7b | The change applies on the effective date, not the file date. Before the effective date, the profile still shows the old position. | — |
| 3 | 7c | During the A/B overlap, Employment B is primary from its effective date. | [BD-02a] |
| 4 | 7c | Once Employment A goes inactive, A's competencies → "past role". Applications tied to A stay with the person. | [BD-04, BD-10] |
| 5 | 7d | After the additional position is removed, the profile reflects the single remaining position (`P-10233797`, MX10). | — |
| 6 | 7d | The removed position and its competencies → "past role". | [BD-04] |
| 7 | 7d | If the removed position had been the primary one, the remaining position becomes primary. | [BD-02] |
| 8 | 7e | The CUS posting is treated as a position change on the same employment. The profile reflects the CUS position (`01147307`). | [BD-02] |
| 9 | 7e | Until POCDEX clarifies what a CUS posting is, the assertion is limited to: the profile degrades gracefully, shows the CUS position, and does not blank out. | — (POCDEX clarification pending) |

### Notes

Sub-cases 7a and 7b (rows 79, 81, and 80, 82) are Tier 1 for the current-dated variant and near-Tier-1 for the future-dated one. 7c, 7d, 7e are blocked on BD-02, BD-02a, or a POCDEX answer. The "what is a CUS posting" question is a real open item flagged in the workbook itself; don't over-invest in 7e until it's answered.

---

## MOV-08: NPL, then return

Covers rows 41, 42, 43, 44, 91. Cumulus and HRP. P1 (row 91 is P2). Adrian left NPL out of the 50-case commitment. The 41-row cut kept it as one scenario.

### Test data

Engineered officer active in both HRP and Cumulus, based on P20 (dual employment).
- POCDEX UID: `MOV08-UID` · NRIC: `MOV08-NRIC`
- HRP employment: agency A, one competency set, work email `mov08_officer@caa.test.gov.sg`
- Cumulus employment: agency B, grade MX08, one competency set, work email `mov08_officer@ura.test.gov.sg`
- Row 91 variant: single HRP officer with a future-dated NPL

### Preconditions

- Officer active in both systems, with a resolved consolidated profile and competencies from each active role.
- User-generated data: one self-declared competency, one in-progress application.

### Test steps

1. Log in. Record the baseline consolidated profile and the full (union) competency list.
2. Ingest delta: NPL flag set on the Cumulus record only. HRP stays active.
3. Refresh. Record the profile, the primary role, and the competency list.
4. Ingest delta: NPL flag set on the HRP record too. Both records now flag NPL.
5. Attempt to log in. Record what the officer sees.
6. Ingest delta: NPL ends on both records. Both reactivate.
7. Refresh and log in. Record the profile, competencies, and user-generated data.
8. (Row 91) Set up a single HRP officer with a future-dated NPL. Log in before the NPL effective date. Record the profile.

### Expected results

| # | Assertion | Decision |
|---|---|---|
| 1 | Baseline: the consolidated profile shows the union of the HRP and Cumulus competencies. | [BD-01, BD-03] |
| 2 | NPL on Cumulus only: the officer keeps access through the still-active HRP role. The profile shows HRP only. The Cumulus role is re-labelled "past role". | [BD-07] [recommended: retain access via the active role] |
| 3 | NPL on Cumulus only: the competency list re-derives from the surviving HRP role. This is a profile re-derivation because the active-record set shrank. | [BD-07] |
| 4 | NPL on both systems: access is blocked. The login completes but returns no active employment, landing the officer in the same routed state as MOV-05. | [BD-07] [recommended: block, matches current OTG behaviour] |
| 5 | NPL on both systems: the profile and all user-generated data are retained, not deleted. | [BD-07, BD-10] |
| 6 | Return from NPL: the profile reactivates from the returning records. The competency list re-derives to the full union again. | [BD-07] |
| 7 | Return from NPL: the self-declared competency and the in-progress application are restored intact. | [BD-10] |
| 8 | Row 91: a future-dated NPL has no effect before its effective date. The profile is normal until then. | — |

### Notes

Every assertion here except rows 91 and the baseline is blocked on BD-07, which nobody owns. Route it to Adrian this week with a single question: is NPL login in scope for MVP UAT? He already excluded no-pay-leave from the 50-case Huiting commitment, so the likely answer is to test the block-on-NPL and restore-on-return path (assertions 4–7) and park the "support NPL login" ambition, which would need a separate SGR/SJR decision. Until BD-07 lands, build the fixture and run the steps, but don't sign anything off.

---

## Summary and readiness

| Case | Rows | Sign-off readiness | Blocked on |
|---|---|---|---|
| MOV-01 | 111, 112 | Tier 1 after BD-10 | BD-10 |
| MOV-02 | 26, 27, 30, 31 | Tier 2 | BD-02, BD-02a, BD-10 |
| MOV-03 | 23, 24, 25, 28, 29 | Tier 2 (highest priority to unblock) | BD-01, BD-02, BD-02a, BD-03, BD-04, BD-04a |
| MOV-04 | 2, 3, 32–37 | Tier 2 | BD-02, BD-04, BD-04a |
| MOV-05 | 38, 39, 40 | Tier 2 | BD-09 (+ routed-state UX) |
| MOV-06 | 68 | Tier 1 base case; variant blocked on BD-03 | BD-03 (variant only) |
| MOV-07 | 45, 79–82, 93–95, 115, 116 | Tier 1 for 79, 81; Tier 2 for the rest | BD-02, BD-02a, BD-10, POCDEX (CUS) |
| MOV-08 | 41–44, 91 | Tier 3 (parked) | BD-07 (unowned) |

What to do now:

1. Imelda builds fixtures for MOV-01, MOV-06, and MOV-07 sub-cases 7a/7b, and drafts the test-case docs. These can be signed off right after the BD session.
2. Everything else gets its fixture built and its steps confirmed, with the tagged assertions held until the decisions land.
3. Data-prep ownership (Compass ITC vs a joint POCDEX ask) is still unassigned and blocks every fixture. Raise it at the architecture walkthrough.
4. Route BD-07 to Adrian. Route BD-09 to Rama. Get BD-01, BD-02, BD-02a, BD-03, BD-04, BD-04a, BD-10 decided at the PM session.
