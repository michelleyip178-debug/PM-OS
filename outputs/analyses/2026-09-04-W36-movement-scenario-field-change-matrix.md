# Movement Scenario × Field Change Matrix

Same 14 lifecycle scenarios used throughout this thread, checked against the individual fields that actually exist in the source extracts. A ✅ means that field typically changes (or is at risk of changing) in that scenario; a ❌ means it typically stays untouched.

> **Note on the marks:** the check/cross pattern below was reconstructed from the closing narrative of the original matrix plus movement-domain logic, because the glyphs did not survive copy-paste. Treat the field-level marks as a first pass to be corrected against the source extracts. The final column (Compass handling) is new.

## Field-change grid

| TC# — Scenario | Name | NRIC/FIN | POCDEX UID | Work Email | Employment ID | Source System | Agency | Department | Position ID | Employment Title | Business Title | Job Grade | Job Function/Family | Employment Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TC1 — Transfer/secondment/attachment/CUS posting within HRPS or Cumulus | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| TC2 — Transfer POCDEX → non-POCDEX agency (new hire/terminate/rescinded) | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| TC3 — Secondment across the POCDEX/non-POCDEX boundary | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| TC4 — ID number change, FIN to NRIC | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| TC5 — Officer leaves and rejoins later | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| TC6 — Officer accidentally deleted, later recreated | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| TC7 — Officer on NPL/ML and returns | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| TC8 — Data wrongly entered, later corrected | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| TC9 — Change in Position ID | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| TC10 — No Position ID change, title changes | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| TC11 — No Position ID change, job function/family changes | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| TC12 — Duplicate officer record | ✅* | ✅* | ✅* | ✅* | ✅* | ✅* | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| TC13 — New officer reuses a departed officer's email | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| TC14 — Exclusion of contingent workers | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

\*TC12 works differently from the rest of the table — nothing on a single record is "changing." Instead, two separate records exist side by side, matching on some fields (Name, Work Email) and diverging on others (NRIC/FIN, POCDEX UID, Employment ID, Source System). The marks there show which fields are actually in play in the duplication, not which ones changed over time.

## Reading the columns

- **Work Email** is checked in eight scenarios (TC1, TC2, TC3, TC5, TC6, TC8, TC12, TC13) — by far the most frequently touched identity-adjacent field, which is why it has been the centre of this whole analysis.
- **POCDEX UID** is checked in four (TC2, TC5, TC6, TC13) — exactly the scenarios where a new or reissued identity is created.
- **NRIC/FIN** changes in two (TC4 directly, TC13 because it is a new person).
- **Name** changes in one real case (TC8) plus the duplicate case (TC12) — the field that is almost never the actual point of failure in this dataset.

## What Compass needs to handle, per scenario

| TC# — Scenario | Compass handling |
|---|---|
| TC1 — Transfer/secondment within HRPS or Cumulus | Update the existing profile in place, keyed on POCDEX UID. Refresh agency/department/position/title/grade/function and employment status. Work email may change; re-link, do not create a new account. No new identity. |
| TC2 — Transfer POCDEX → non-POCDEX agency | Detect that the officer has left the POCDEX population. Decide the retention/deactivation rule for the Compass profile. If the officer later re-enters via a non-POCDEX source, match on NRIC/FIN to avoid a duplicate. Handle the rescinded-transfer reversal cleanly. |
| TC3 — Secondment across the POCDEX/non-POCDEX boundary | Keep one continuous profile across the boundary. Decide which agency/department is "current" during the secondment. Do not deactivate on the source-system flip; treat it as an attribute change, not an exit. |
| TC4 — ID number change, FIN to NRIC | Match on POCDEX UID (stable), not NRIC/FIN. Update the stored ID number without breaking history or creating a second record. Confirm downstream systems that key on NRIC/FIN are re-pointed. |
| TC5 — Officer leaves and rejoins later | On rejoin, match the returning officer to the dormant profile (NRIC/FIN or prior POCDEX UID) rather than spinning up a fresh one. Reactivate, stamp a new employment ID, preserve prior history. Define the dormancy window before a rejoin counts as "new." |
| TC6 — Officer accidentally deleted, later recreated | Distinguish an operational-error recreation from a genuine rejoin. Prefer restore-from-history over a clean create so the officer's Compass record and activity are not lost. New POCDEX UID/employment ID must reconcile back to the original person. |
| TC7 — Officer on NPL/ML and returns | Treat leave as an employment-status state, not a departure. Suppress or flag the profile during leave per business rule, then restore on return with no re-onboarding and no identity change. |
| TC8 — Data wrongly entered, later corrected | Accept in-place corrections to name and most attributes without treating the correction as a real-world event (no "transfer" side effects). Keep an audit trail of the before/after. Guard against a correction that looks like a duplicate. |
| TC9 — Change in Position ID | Update department/position/title/grade/function on the existing profile. This is a substantive role change; make sure any Compass logic that reacts to role (recommendations, eligibility) picks it up. Employment status unchanged. |
| TC10 — Title changes, no Position ID change | Update employment/business title only. Low-risk cosmetic change; make sure it does not trigger role-change downstream effects meant for TC9. |
| TC11 — Job function/family changes, no Position ID change | Update job function/family on the existing profile. Decide whether a function change alone should drive Compass recommendation/eligibility logic even when position is stable. |
| TC12 — Duplicate officer record | Detect two live records for one person (match on name + work email, diverging on NRIC/FIN, POCDEX UID, employment ID, source system). Route to an exception queue. Define the survivorship/merge rule and which record wins. Do not silently show both. |
| TC13 — New officer reuses a departed officer's email | Never match on work email alone. Match on POCDEX UID + NRIC/FIN. Ensure the new person gets a clean profile and does not inherit the departed officer's Compass history, and that the departed officer's record is closed. |
| TC14 — Exclusion of contingent workers | Filter contingent/agency workers out of the Compass population at ingest, using employment status/worker type. Make sure a worker who later converts to a permanent officer is then included and matched to any prior identity. |
