---
date: 2026-08-05
week: 2026-W32
source: Slack threads — "Request for Unique Agency, Job Family, and Job Function Reference Data for Validation with Career Compass Role Profiles" (started 2026-07-09); "Draft for Data Sharing Approval for CareerCompass" (started 2026-08-04)
status: working draft — confirm owners/dates with Huiting and Rama before treating as final
---

# RAID Log — POCDEX Reference Data & Data-Sharing Approval — 2026-08-05

Legend: 🔴 Critical/High · 🟡 Medium · 🟢 Low/Managed

---

## Risks

| ID | Risk | Impact if realised | Likelihood | Owner | Status | Raised |
|---|---|---|---|---|---|---|
| R1 | UAT data ingest into UAT environment has no formal approval workflow yet | UAT could be blocked at the door, or run without proper governance sign-off on vendor-operated POCDEX data | 🔴 High | Unassigned | Open | 2026-08-04 |
| R2 | Data-sharing approval form is stale — hasn't been updated to reflect current rules | Approval process and actual delivery mechanics diverge, creating governance gaps right as UAT approaches | 🔴 High | Unassigned | Open | 2026-08-04 |
| R3 | Compass access eligibility (active/eligible-officer filtering) may not match what's actually implemented | Wrong users could gain or be denied access at go-live | 🔴 High | Unassigned | Open | 2026-08-04 |
| R4 | Manual MVP ingestion/transformation accepted as a stopgap | Timing drift or data inconsistency between manual runs, especially under UAT/go-live pressure | 🟠 Medium-High | Unassigned | Accepted risk, not yet mitigated | 2026-08-04 |
| R5 | Multiple-primary-position edge case (Compass falls back to "first primary returned by POCDEX") may only be an informal fallback, not a confirmed MVP rule | If treated as settled without sign-off, an edge case could surface late as a data-quality bug | 🟠 Medium | Unassigned | Open — needs confirmation | 2026-08-05 |

---

## Assumptions

| ID | Assumption | Basis | Validation needed by | Owner | Raised |
|---|---|---|---|---|---|
| A1 | Job Family / Job Function labels can safely follow the WD master list without further reconciliation | Huiting's stated position, treated as agreed | Before reference-data build is finalized | Huiting | 2026-07-13 |
| A2 | Compass does not need full Job ID / Job Family / Job Function descriptions from POCDEX — IDs/labels are sufficient | Open question from Huiting, not yet answered by product/UI | Before the data-sharing form is finalized | Unassigned (product/UI call needed) | 2026-08-04 |
| A3 | "First primary position returned by POCDEX" is an acceptable MVP rule when an officer has multiple primary positions | Rama's note in the data-sharing draft thread, not yet formally confirmed as policy vs. fallback | Before UAT data is ingested | Rama | 2026-08-05 |

---

## Issues

*(Already happened / actively blocking, not just a future risk)*

| ID | Issue | Impact | Owner | Status | Raised |
|---|---|---|---|---|---|
| I1 | Agency label models differ between POCDEX and ODIN2, with no confirmed mapping yet | Reference-data validation can't fully close until this is resolved | Huiting | Open | 2026-07-13 |
| I2 | Whether Compass needs Job ID/Job Family/Job Function descriptions from POCDEX is still unanswered | Blocks finalizing both the data-sharing form and the UI's data expectations | Unassigned (needs product/UI confirmation) | Open | 2026-08-04 |
| I3 | Data-sharing approval form has not been updated to reflect current governance rules | Approval process for UAT data ingest can't proceed cleanly | Unassigned | Open | 2026-08-04 |

---

## Dependencies

| ID | Dependency | Depends on | Blocks | Target date | Status | Raised |
|---|---|---|---|---|---|---|
| D1 | UAT data ingest into UAT environment | Formal written approval (per Huiting, official email required) | UAT start for POCDEX-fed data | No date set | Blocked — approval workflow undefined | 2026-08-04 |
| D2 | Data-sharing form finalization | Resolving I2 (descriptions needed or not) + R2 (form refresh) | Formal approval sign-off | No date set | Open | 2026-08-04 |
| D3 | Agency label mapping (Compass ↔ POCDEX ↔ ODIN2) | Huiting's alignment work | Reference-data validation close-out | No date set | In progress | 2026-07-13 |
| D4 | Compass access-eligibility implementation check | Confirming the documented filtering rules (active eligible officers only, excluding TIVO/adjuncts/NPL/retirees/NS/volunteers) match what's actually built | UAT and go-live access correctness | No date set | Open, not yet verified against implementation | 2026-08-04 |

---

## Notes

- Thread 1 (reference data, open since 2026-07-09) is mostly resolved — architecture and ownership are settled (Johnny as POCDEX API owner, periodic-pull production approach, WD master list for labels). What's left is narrow: agency label mapping (I1/D3) and the descriptions question (I2/A2).
- Thread 2 (data-sharing approval, open since 2026-08-04) is the more urgent of the two — it sits directly on the path to UAT and currently has no approval workflow, a stale form, and an unverified eligibility-filtering implementation. This is where delivery risk actually lives right now.
- R5/A3 (multiple-primary-position fallback) is worth a direct one-line confirmation from Rama or whoever owns MVP data rules — "fallback we're going with for now" and "confirmed MVP rule" carry different risk if it surfaces as a defect later.
- This log is scoped to the POCDEX reference-data and data-sharing threads only. It does not cover the separate CSC/DLE SIT-UAT integration RAID log (`2026-08-05-W32-timeline-raid-log.md`) — keep them distinct since they involve different vendors, different data, and different approval chains.

*Generated 2026-08-05 from the two Slack threads summarized above. Not yet confirmed with Huiting or Rama — treat owners and dates as a starting draft.*
