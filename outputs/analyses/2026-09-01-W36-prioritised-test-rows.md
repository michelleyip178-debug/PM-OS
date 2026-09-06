# Prioritised Employment Lifecycle Test Rows — The 41-Row Cut

**Source:** [Compass Prioritised Employment Lifecycle Scenarios](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2603157647/Compass+Prioritised+Employment+Lifecycle+Scenarios) (Confluence, 82 P1 rows) + the BO jam cut screenshot (41-row prioritisation).

**What this is:** the ~50% cut of Compass's 82-row P1 subset, kept for the jam/BO conversation. Nested inside Huiting's full 118-row workbook — see [2026-09-01-W36-daily-plan.md](../daily-plans/2026-09-01-W36-daily-plan.md) for the 118 → 82 → 41 reconciliation.

---

## KEEP — Job, position & employment (all 33 rows)

Full category kept. Grade, job family, job function, position ID, and missing-data cases all live here — this is the high-value set.

| Rows |
|---|
| 1, 4, 5, 6, 7, 9, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 63, 64, 65, 79, 80, 81, 82, 92, 93, 94, 95, 109, 117, 118 |

---

## KEEP — Mobility rows that drive a grade/position/job change (6 rows)

Transfers and secondments that change Position ID and job grade — not pure agency-only relabels.

| Row | Why kept |
|---|---|
| 26 | Transfer HRP→Cumulus, Job Grade JR04 — grade change on move |
| 30 | Transfer Cumulus→HRP, Job Grade MX06 — grade change on move |
| 31 | Transfer Cumulus→HRP completion — position + grade land |
| 111 | Transfer within HRPS — position ID change |
| 112 | Transfer within HRPS completion — position ID change lands |
| 68 | Secondment-in NC2C, Job Grade MX12 — grade on secondment |

---

## KEEP — the two highest-severity non-job cases (2 scenarios, 7 rows)

| Row(s) | Why |
|---|---|
| 88, 89, 90 | Email reuse (new hire gets departed officer's email) — critical severity, cross-officer data exposure. This is TC13. Counts as one scenario across 3 rows. |
| 41, 42, 43, 44 | NPL access-gating — BO policy decision on access cutoff. Keep the sequence as one scenario. |

---

## Row count

33 (Job/position/employment) + 6 (Mobility) + 3 (88–90) + 4 (41–44) = **46 rows** if counted individually.

Counting 88–90 and 41–44 as one case each (not by row) brings the effective scenario count down — landing at **~50%** of the 82-row P1 set, consistent with the "41 of 82" framing.

---

## Cut, not kept (for reference — not in the 41-row list)

Per the Confluence page's own 18-test-case mapping, these are **ready to test or resolved but excluded from this cut**:

| Test case | Rows | Status |
|---|---|---|
| Mobility-2 (CUS scheme) | 115–116 | Ready, 1 open item — CUS eligibility/posting rules, non-blocking, routed to POCDEX |
| Mobility-3 (cross-system secondment) | 38–40 | Ready to test |
| Identity-4 (name/email correction) | 77–78 | Ready to test |
| Identity-5 (FIN→NRIC mid-employment) | 70–71 | Ready to test |
| Identity-6 (ID + HRID change together) | 72–73 | Ready to test |
| Exit-1 (rescinded new hire) | 110, 113–114 | Needs a BO decision — not resolved, just not in this cut |
| Population-2 (eligible officer logs in) | — | Already covered under existing UAT — no new case needed |

**Still needing a clean BO decision (regardless of this cut):** Identity-2, Identity-3, Leave-1, Leave-2, Exit-1 — these aren't excluded by prioritisation, they're blocked on a decision. Don't read "not in the 41" as "doesn't matter."

**Data-prep ownership still unassigned** — Compass ITC vs. a joint POCDEX ask. This blocks even the decision-complete cases from actually running. Confirm at the jam.

---

*Created 2026-09-01. Source page last edited 2026-08-31 (version 9). If the Confluence page changes, re-pull before treating this file as current.*
