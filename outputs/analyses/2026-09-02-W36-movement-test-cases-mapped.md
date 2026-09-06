# Movement Test Cases, Mapped to the 118 POCDEX Rows

Date: 2 September 2026 (W36)

Source: `POCDEX_Compass_Test_Plan_with_PM_Priority_4.xlsx`, the "Master Test Cases" sheet.

This covers the movement rows only: transfers, secondments, CUS postings, NPL, and position changes. That's 32 of the 118.

Here's the problem this doc solves. The workbook gives us the scenario and the POCDEX-side ingestion steps for every row, but the "Downstream Expected Results" column is empty for all 32 movement rows. Compass has to write that half. So I've grouped the 32 rows into 8 test cases (MOV-01 through MOV-08), and for each one I've written the expected downstream behaviour, the POCDEX fields that trigger it, and the decision it's waiting on. Where a decision hasn't been made, the expected result says `[BLOCKED — BD-xx]`.

Decisions this depends on: BD-01, BD-02, BD-02a, BD-03, BD-04, BD-04a, BD-10. All in the [decisions brief](2026-09-02-W36-employment-profile-decisions-brief.md).

## What counts as a profile change

From the [29 Aug BO brief](2026-08-29-W35-employment-lifecycle-bo-prioritisation-brief.md): if `positionId`, `primaryPosition`, `jobFunctionId`, `jobFamilyId`, or `jobGradeId` changes on an active record, Compass re-derives the role profile and the competencies. A change to `employmentTitle` or `businessTitle` on its own is cosmetic and doesn't trigger anything.

There's a second trigger the brief implies but doesn't spell out. When the set of active records changes (a role goes inactive, comes back, or a new concurrent role appears), the primary appointment and the competency union re-derive too, even though no field on a surviving record moved. MOV-03, MOV-04, and MOV-08 all hit this.

## Coverage map

| TC | Rows | Pattern | Prio | Re-derives? | Trigger fields | Blocks | Readiness |
|---|---|---|---|---|---|---|---|
| MOV-01 | 111, 112 | Transfer inside one HR system | P1 | Yes | `positionId` moves, so function/family/grade re-derive | BD-10 | Tier 1 |
| MOV-02 | 26, 27, 30, 31 | Transfer across systems (HRP ↔ Cumulus) | P1 (27 P2) | Yes | `positionId` and `jobGradeId`; `primaryPosition` switches during the overlap | BD-02, BD-02a, BD-10 | Tier 2 |
| MOV-03 | 23, 24, 25, 28, 29 | Cross-system secondment plus End Secondment | P1 | Yes (24, 25, 28, 29; 23 is baseline) | active-record set changes, so primary and the competency union re-derive; each record carries its own function/family/grade | BD-01, BD-02, BD-02a, BD-03, BD-04, BD-04a | Tier 2 |
| MOV-04 | 2, 3, 32–37 | Secondment inside one system, plus backdated end | P1 | Yes (3, 33, 37, 34, 35; 2, 32, 36 baseline) | `positionId` moves to the seconded position; function/family/grade re-derive | BD-02, BD-04, BD-04a | Tier 2 |
| MOV-05 | 38, 39, 40 | Secondment out of POCDEX | P1 | No. The record just stops arriving. Nothing changes value, so this is an access-state test, not a profile-change test. | none | BD-04, BD-09 | Tier 2 |
| MOV-06 | 68 | Secondment in from a system POCDEX doesn't cover | P1 | Yes | `positionId`, function, family, grade (MX12) all populate on the first resolve | BD-03 | Tier 1 |
| MOV-07 | 45, 79–82, 93–95, 115, 116 | Position or job change, additional position, CUS posting | P1 | Yes, every row | `positionId` on all of them; `primaryPosition` on row 45; function/family/grade re-derive | BD-10, plus BD-02 and BD-02a for 45, 93–95, 115, 116 | Tier 1 for 79 and 81, Tier 2 for the rest |
| MOV-08 | 41, 42, 43, 44, 91 | NPL, then return | P1 (91 P2) | Split. Row 42 (NPL in one system, still active in the other) re-derives because the active set shrinks. Rows 43 and 44 (NPL in both, then return) are access-state, not re-derivation. Row 41 is baseline, 91 is future-dated. | 42: active-set change. 43, 44: none. | BD-07 (nobody owns it) | Tier 3, parked |

Rows 46–57, 63–65, 109, 117, and 118 aren't in here. They're job-attribute changes with no position move, so they sit in the Tier 1 "Job / position / employment" set instead. Some of them still re-derive the profile through a function, family, or grade change. The point is they're grouped elsewhere, not that they don't trigger.

## About "switches during the overlap"

Worth spelling out because it's the crux of MOV-02, MOV-03, and part of MOV-07.

A cross-system move isn't instant in the data. POCDEX extracts on a schedule, so for a day or two both records show up in the feed at once. The old position is still being extracted because it's on its last day. The new position has started extracting from its effective date. Compass sees two active positions for one person.

`primaryPosition` decides which one the profile displays. So the real question is: at what moment does it change from the old position to the new one?

The answer we're proposing (BD-02a): at the new appointment's effective date, mid-overlap, while the old record is still arriving. Not when both first appear, and not when the old record finally drops off a day or two later.

| Point in time | Old position | New position | Profile shows |
|---|---|---|---|
| Before the move | active, primary | not in the feed yet | old position |
| Overlap, before the new effective date | active, primary | active, not primary | old position |
| Overlap, on the new effective date | active, now secondary | active, now primary | new position |
| After the overlap | dropped from the feed, moves to "past role" | active, primary | new position |

The old position's competencies only move to "past role" when that record actually goes inactive, not at the moment primary switches.

---

## MOV-01: Transfer inside one HR system (HRPS)

Rows: 111 (new hire, position 01080684), 112 (transfer to 01080682, effective 2024-01-09). HRP. P1. Kept in the 41-row cut.

Precondition: officer's active on position 01080684, has a resolved profile, some self-declared competencies, and one application in progress.

Trigger: a delta moves the position to 01080682. Same agency, same system. The old position stops extracting on 2024-01-08, the new one picks up from 2024-01-09.

Steps: confirm the baseline profile shows 01080684's function, family, grade, and competencies. Apply the transfer delta. Refresh. Check the profile, the competencies, and the application.

Expected result:

- The profile updates in place to 01080682's function, family, and grade. Same `officerId`, no second account.
- Role competencies re-derive from the new position. The 01080684 competencies move to "past role", where they stay visible but drop out of the recommendation logic (BD-04).
- The application in progress and the self-declared competencies are left exactly as they were (BD-10).
- No overlap here. The old position goes inactive before the new one starts.

Blocked on: BD-10, specifically confirming that user-generated data keys to the person, not the old `officerId`. Otherwise this is Tier 1.

---

## MOV-02: Transfer across systems (HRP ↔ Cumulus)

Rows: 26 (HRP to Cumulus, JR04), 27 (HRP to Cumulus, Cumulus grade MX41, which Compass's grade set doesn't have, so P2), 30 (Cumulus to HRP, MX06), 31 (Cumulus to HRP, completion). HRP and Cumulus. P1, with 27 as P2. Rows 26, 30, 31 kept in the 41-row cut.

Precondition: officer's active in system A with a resolved profile and user-generated data. A system-B record is about to be created.

Trigger: deltas run in sequence. System A active, then Transfer Out of A, then Transfer In to B. Both records extract for a window: A on its last day, B from its start.

Stages:

| Stage | State | Expected |
|---|---|---|
| 1 | System A only | Profile shows system A. Baseline. |
| 2 | Overlap, both active | `[BLOCKED — BD-02a]` The arriving system-B appointment becomes primary from its effective date, even while A is still in the feed. A shows as a secondary active role until it goes inactive. |
| 3 | System A inactive | A's role competencies move to "past role" (BD-04). Profile is system B only. |
| 4 | Login with system-B credentials | Same consolidated profile, same NRIC resolution, same applications and journeys (BD-01). |

Also test:

- Row 27's grade (MX41) isn't in Compass's set. The profile should fall back gracefully, not show a blank or throw an error. Log it as a data-mapping gap, but don't block the officer's login over it.
- User-generated data comes through the cross-system move intact (BD-10).
- The switch happens on the next refresh after system B becomes primary, not mid-session.

Blocked on: BD-02, BD-02a, BD-10.

---

## MOV-03: Cross-system secondment, with End Secondment

Rows: 23 (new hire HRP, JR03, position 01185647), 24 (Secondment Out of HRP, In to Cumulus), 25 (End Secondment on 2024-01-25, back to HRP), 28 (Cumulus to HRP secondment, MX05), 29 (Secondment Out of Cumulus, In to HRP). HRP and Cumulus. P1. The 41-row cut dropped 23–25 and 28–29 as "ready to test".

Precondition: officer's active in the parent system with a resolved profile, parent-role competencies, and user-generated data.

Trigger: parent record active. Then Secondment Out of the parent and Secondment In to the receiving system, and both run concurrently for the length of the secondment. Then End Secondment: the receiving record ends and the parent record stays or reactivates.

Stages:

| Stage | State | Expected |
|---|---|---|
| 1 | Parent only | Profile shows the parent. Baseline. |
| 2 | Parent and receiving both active | `[BLOCKED — BD-01, BD-02, BD-03]` This is concurrent employment, so one consolidated profile (BD-01). Primary is the receiving appointment for the secondment period. Competencies are the union of parent and receiving roles, de-duplicated by code (BD-03). |
| 3 | End Secondment (row 25) | `[BLOCKED — BD-04a]` The parent appointment becomes primary again on its own. Receiving-role competencies move to "past role", retained but out of the recommendation logic. The officer doesn't have to do anything. |
| 4 | Login after the return | Consolidated profile shows the parent role. Applications and journeys from any point in the sequence still belong to the person (BD-10). |

Blocked on: BD-01, BD-02, BD-02a, BD-03, BD-04, BD-04a.

---

## MOV-04: Secondment inside one system, plus backdated end

Rows: 2 and 3 (secondment within, to MOE, position 10037809), 32 and 33 (within Cumulus, to P-11037136B), 34 and 35 (backdated end, effective 2024-01-14), 36 and 37 (within HRP, position 10020612). HRP and Cumulus. P1.

Precondition: officer's active on a home position inside one system, with a resolved profile and home-role competencies.

Trigger: a delta moves the position to a seconded position inside the same system. It's one record, and the position ID changes. Later, an End Secondment Within delta, and sometimes it's backdated (rows 34 and 35 have an effective date before the file date).

Steps: baseline on the home position. Apply the secondment-within delta. Refresh, and check the profile shows the seconded position's function, family, and grade. Apply the End Secondment Within delta, testing both the current-dated and the backdated version. Refresh, and check the profile's back on the home position.

Expected result:

- One record, one position change, so the profile updates in place (BD-10).
- Seconded-position competencies re-derive. `[BLOCKED — BD-02]` If the seconded and home positions produce different primary attributes, the seconded position is primary for its effective period.
- On End Secondment, the profile goes back to the home position. If home-role competencies had moved to "past role", they come back as current (BD-04).
- Backdated end (34, 35): Compass uses the effective date, not the file date. If the officer logged in during the gap between the real end date and the file arriving, the profile corrects on the next refresh and the user data is preserved (BD-10).

Blocked on: BD-02, BD-04, BD-04a.

---

## MOV-05: Secondment out of POCDEX

Rows: 38 and 39 (out of HRP, position 10070634 last extracts on 2024-01-08), 40 (already seconded out of Cumulus at the initial load). HRP and Cumulus. P1.

Precondition: officer's active with a resolved profile and user-generated data.

Trigger: a delta where the officer's only active position is a secondment out of the systems POCDEX covers. The position stops extracting. From Compass's side, the Resolve API comes back with no active employment.

Steps: baseline profile active. Apply the secondment-out delta, so the position stops extracting. Attempt a login, or trigger a resolve. For row 40, the officer's already seconded out at the first load, so just attempt the first login.

Expected result, `[BLOCKED — BD-09]`:

- Treat the officer as out of scope for now. The login resolves but returns no Compass-eligible employment, so route them to a clear "your profile isn't available while you're posted outside" state. Not a hard error, not a blank profile.
- Keep the historical profile and the user-generated data. Don't delete anything. The officer's expected back.
- Surface the case to operations. It's a legitimate state, not a defect, but ops should be able to see it.
- On return, when the position shows up in the feed again, the profile reactivates from the returning record and the user data re-associates by NRIC (BD-10).

This isn't a profile-change test. No field changes value, the record just leaves the feed. Blocked on BD-09. It overlaps BD-07 in spirit, but the cause is different: a secondment, not leave.

---

## MOV-06: Secondment in from a system POCDEX doesn't cover

Row: 68 (Secondment In to Cumulus from Non-Cumulus, tagged "NC2C", Job Grade MX12). Cumulus. P1. Kept in the 41-row cut, as the one mobility row held for a grade change.

Precondition: no Compass profile for this officer yet. They were outside POCDEX coverage.

Trigger: a delta where a new active Cumulus position appears via a secondment in from a non-POCDEX source, at Job Grade MX12.

Steps: officer has no profile. Apply the secondment-in delta. First login, trigger a resolve. Check the profile and the competencies.

Expected result:

- NRIC resolves to the new `officerId`, and a fresh consolidated profile builds from the Cumulus record.
- Job Grade MX12, the agency, and function/family populate. Competencies derive from the position.
- `[BLOCKED — BD-03]` If the officer also has a retained "past role" from an earlier POCDEX stint, the Cumulus role is primary and the earlier competencies sit under "past role". If there's genuinely nothing prior, this is just a clean new-hire flow.
- No error, no half-built profile.

Blocked on BD-03, and only if there's prior retained data. Otherwise it's Tier 1 and you treat it as a new hire.

---

## MOV-07: Position or job change, additional position, CUS posting

Rows: 45 (Remove Additional Position, HRID 10233797 keeps P-10233797 at MX10 and drops P-11038466), 79–82 (Change Position ID, HRP and Cumulus, current and future-dated), 93–95 (Change Job from A to B, future-dated), 115 and 116 (CUS Posting, position 01147297 to 01147307). HRP and Cumulus. P1.

Precondition: officer's active with a resolved profile. For row 45, they hold two positions: one primary at MX10, one additional with a blank grade.

Expected result by sub-case:

| Sub-case | Expected |
|---|---|
| Position ID change, current-dated (79, 81) | Profile updates in place. Prior competencies move to "past role" (BD-04). User data preserved (BD-10). This is Tier 1. |
| Position ID change, future-dated (80, 82) | The change applies on the effective date, not the file date. Until then, the profile still shows the old position. |
| Change Job A to B (93–95) | `[BLOCKED — BD-02a, BD-10]` During the A-to-B overlap, Employment B is primary from its effective date. Once A goes inactive, A's competencies move to "past role". Applications tied to A stay with the person. |
| Remove Additional Position (45) | `[BLOCKED — BD-02]` The profile reflects the position that's left (P-10233797, MX10). The removed position and its competencies move to "past role". If the removed one had been primary, the remaining one takes over. |
| CUS Posting (115, 116) | `[BLOCKED — BD-02]` Treat it as a position change on the same employment. The profile reflects the CUS position. "What is a CUS posting" is still an open question for POCDEX, per the workbook's own comment. Until they answer, the test just asserts the profile degrades gracefully, shows the CUS position, and doesn't blank out. |

Blocked on: BD-10, BD-02, BD-02a. Rows 79 and 81 are Tier 1.

---

## MOV-08: NPL, then return

Rows: 41 (new hire in both agencies, one HRP competency and one Cumulus, Cumulus MX08), 42 (NPL in Cumulus only), 43 (NPL in both), 44 (return from NPL in both), 91 (HRP officer with a future NPL, P2). Cumulus and HRP. P1, with 91 as P2. Adrian left NPL out of the 50-case commitment. The 41-row cut kept it as one scenario.

Precondition: officer's active in one or both systems, with a resolved profile, competencies from each active role, and user-generated data.

Stages, `[BLOCKED — BD-07, and nobody owns it]`:

| Stage | State | Expected |
|---|---|---|
| 1 | Active in both systems | Consolidated profile, union of the HRP and Cumulus competencies (BD-01, BD-03). Baseline. |
| 2 | NPL in Cumulus only, HRP still active | The officer keeps access through the still-active HRP role. Profile shows HRP only. The Cumulus role moves to "past role". This one does re-derive the profile, because the active set shrank. |
| 3 | NPL in both systems | Access is blocked. That's the current OTG behaviour and the likely MVP position. The login resolves but returns no active employment, which lands them in the same state as MOV-05. Profile and user data are kept. |
| 4 | Return from NPL in both | The profile reactivates from the returning records. Competencies re-derive. Applications and self-declared competencies come back intact (BD-10). |

Blocked on BD-07, which nobody owns. Route it to Adrian: is NPL login in scope for MVP UAT? He already left no-pay-leave out of the 50-case commitment, so the likely answer is to test the block-on-NPL and restore-on-return path (stages 3 and 4) and park the "support NPL login" ambition, which would need a separate SGR/SJR decision.

---

## Summary

| Readiness | TCs | Rows | Action |
|---|---|---|---|
| Tier 1, write now | MOV-01, MOV-06, and rows 79 and 81 of MOV-07 | 111, 112, 68, 79, 81 | Imelda writes these now. The expected results above are approvable as they stand. |
| Tier 2, fixtures now, expected results after the BD session | MOV-02, MOV-03, MOV-04, MOV-05, and the rest of MOV-07 | 2, 3, 23–40, 45, 80, 82, 93–95, 115, 116 | Build the data fixtures. Fill in the expected results from BD-01, 02, 02a, 03, 04, 04a, 09, and 10 as they land. |
| Tier 3, parked | MOV-08 | 41–44, 91 | Blocked on BD-07, which is unowned. Route it to Adrian this week. |

Two decisions here that need adding to the brief: BD-02a (the arriving appointment is primary from its effective date during an overlap) and BD-04a (on return from secondment, the parent appointment takes back primary and the seconded competencies move to "past role"). Both are folded into the [decisions brief](2026-09-02-W36-employment-profile-decisions-brief.md) already.

One thing that's still on POCDEX: "what is a CUS posting", for rows 115 and 116.
