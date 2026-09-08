---
date: 2026-09-07
week: 2026-W37
type: raid-log
scope: POCDEX — Career Compass MVP dependency (launch 24–25 Nov 2026)
parent: 2026-09-03-W36-mvp-raid-consolidated.md
sources:
  - outputs/analyses/2026-09-03-W36-mvp-raid-consolidated.md
  - outputs/analyses/2026-09-03-W36-mvp-readiness-gates.md
  - outputs/meeting-notes/2026-09-02-W36-pocdex-do-compass-weekly-sync.md
  - outputs/meeting-notes/2026-08-31-W36-adrian-biweekly-sync.md
  - PM-skills-ALL-1/00-hub/open-items.md
---

# POCDEX RAID — as of 7 September 2026 (W37)

POCDEX-only view, split out from the [consolidated MVP RAID](2026-09-03-W36-mvp-raid-consolidated.md) for the POCDEX DO ↔ Compass weekly sync. Everything here also lives in the consolidated log; this is the filtered cut, not new analysis.

**What POCDEX is on the critical path for:** the employment-profile data feed (identity resolution, employment changes, job/competency data) and the POCDEX VAPT stream (2 of the programme's 6 reports).

**Key dates:** POCDEX VAPT assesses **9–22 Sep**, closes **5–6 Nov** → feeds the **~7 Nov** overall sign-off → **MVP launch 24–25 Nov**. Employment-profile dev freeze was end-Sept (now moot — employment-lifecycle handling cut from MVP on 3 Sep; the API surface Compass depends on is still MVP-frozen).

---

## Risks

| # | Risk | Impact | Status / mitigation | Owner |
|---|------|--------|---------------------|-------|
| R2 | **NCS reporting-cadence dependency has no fallback.** Team asked NCS to release VAPT findings incrementally per component; nobody has asked what happens if NCS won't shift cadence. POCDEX VAPT (9–22 Sep) rides on this. | The whole remediation-timeline recovery plan assumes NCS cooperation. | 🔴 Open. Rama to send follow-up email. No Plan B. | Rama |
| R3 | **Source data quality — "Compass solves identity" confidence is outrunning reality.** If the POCDEX feed carries wrong/missing/stale records (transfers not reflected, email changes not propagated, months-old duplicates), Compass consumes bad data. NRIC resolution fixes *resolution*, not upstream quality. | Top systemic risk for anything that reads the POCDEX feed. | 🔴 Open. No owner for upstream-defect detection before user impact. | Unowned — route |
| R6 | **CIE/CV retraining may slip to end-Sept**, landing inside the VAPT freeze window. Team plans to characterise it as "minor/logic-only" to avoid retriggering full VAPT — technically unconfirmed. | If it's not minor, it retriggers a VAPT cycle mid-window. | 🟡 Open. Get Victor's read (was due before 7 Sep). | Victor |
| R7 | **VAPT remediation's 2-week assumption (SGEMS precedent) may not scale.** POCDEX adds Cloud + API PT on top of Compass's Cloud/Web/API surface. | If remediation runs long, ~7 Nov sign-off slips → 24 Nov launch at risk. | 🟡 Flagged (squad sync 1 Sep), lower urgency. No evidence either way. | Jace / Jobelle |
| R8 | **NRIC-only identity model may not hold** for non-POCDEX agencies (MINDEF/DSTA/A*STAR/CPF run separate OTG pipelines) or identity-transition cases (FIN→NRIC, Malaysian ICs in production, double-hatting). | Rework if non-POCDEX / transition scenarios expand post-MVP. | 🟡 Deferred by design, not urgent. Watch: WD onboarding roadmap, SingPass, non-POCDEX expansion. | Michelle (watch) |

---

## Assumptions

| # | Assumption | If wrong |
|---|-----------|----------|
| A1 | NRIC is sufficient as the identity key for MVP. | Rework across career / learning / competency history, which assume the identity continuity POCDEX's UID guarantees and NRIC doesn't. |
| A2 | "Last modified date" is the accepted change-detection rule (Adrian 31 Aug; Rama + Pow Hwee reconfirmed 1 Sep). | Rama's *formal* engineering sign-off hasn't landed (open item #60). Adrian's acceptance ≠ engineering sign-off. |
| A5 | POCDEX's later VAPT close (5–6 Nov) feeds the ~7 Nov overall sign-off; the 29–30 Oct Compass/CIE close is a separate stream, not a conflict. | Reconciled 31 Aug — treat as settled unless the schedule moves. |

---

## Issues (open)

| # | Issue | Owner | Status |
|---|-------|-------|--------|
| I-60 | **"Last modified date" business rule** — accepted as the working requirement, decoupled from test-case design. Rama's formal engineering sign-off is the only thing between this and closed. | Michelle + Imelda (scoping) / Rama (sign-off) | 🟡 Substantially resolved, sign-off pending |
| I-BD08 | **Email reuse / shared mailbox** — needs POCDEX clarification. 82 production email-collision errors, 7 genuine. | Needs POCDEX | 🔴 Open, external dependency |
| I-BD09 | **Missing / duplicate / ambiguous source records** — also swallows Exit-1 (rescinded new hire). | Rama + operations — unowned | 🔴 Open |
| I-55a | **≥25 additional UAT scenarios POCDEX recommended** (multi-hatting, secondment, email change, NPL, missing mappings, terminated officers) — unactioned since 11 Aug. | Rama to assign | 🔴 Open |
| I-55b | **Day-2 support traceability scoping** — source-system visibility, API logs, escalation routing. | Rama / Imelda | 🔴 Undated |
| I-R9 | **UAT data-prep unassigned** — Compass ITC vs. joint POCDEX ask. Blocks even Tier-1 test cases from running (perfect cases, no test data). | Unassigned since W35 | 🔴 Open — raise at standup |

---

## Dependencies

| # | Dependency | What breaks if it doesn't land | Escalation trigger |
|---|-----------|-------------------------------|--------------------|
| D-NCS | **NCS infra access provisioning** — the PO's last step. PO issued (confirmed 2 Sep). | POCDEX VAPT can't start 9 Sep if NCS has the PO but not system access. | Not confirmed provisioned by 9 Sep |
| D6 | **Johnny Lim's 3 API-side items** — Last Updated Date behaviour doc, Resolve API OpenAPI/Confluence update, API response evidence for validation. | Gate Compass's API validation work. No dates set. | Still undated at the next POCDEX sync |
| D8 | **UID-succession — does the POCDEX feed carry a UID-change event?** (Johnny Lim / POCDEX) | If not, FIN→NRIC and ID-change scenarios have no detection path. | Not answered at the architecture walkthrough |
| D4 | **Architecture walkthrough** (Rama, Adrian Lo, Kingsley Low — date not set). | Identity source-of-truth (input to BD-02, BD-09), multi-hat model, and UID-succession all stall. Owed since 1 Sep. | Not on the calendar by end of W37 |
| D10 | **CIE/CV retraining change-scope** — confirm with Victor. | If it's not "minor / logic-only," it retriggers a full VAPT cycle mid-window. | Victor hasn't weighed in (was due before 7 Sep) |
| D-endpoints | **5 POCDEX endpoints fold into the same NCS engagement.** | If they don't, POCDEX VAPT runs as a separate engagement and the 8 Nov target is at risk. | Fold not confirmed before 9 Sep |

---

## Settled — not a risk anymore (kept for traceability)

| Item | Resolved | Detail |
|------|----------|--------|
| **NCS PO issuance** | 2 Sep (email update) | Was the top operational risk. Residual: verify NCS has infra access, not just the PO (D-NCS above). |
| **Data Sharing Form** | 14 Aug | Locked and approved. |
| **UAT API cutover** | 26 Aug | Moved from Dev API to UAT API. |
| **Last Updated Date exposure** | 2 Sep (POCDEX sync) | Exposed per-endpoint, not rolled up. Supervisor ID field agreed across Officer / Employment / Job APIs. |
| **UAT accountability model** | 2 Sep (POCDEX DO sync) | WD does app-level UAT · Compass ITC validates API outputs · **Compass PSD staff provide the sign-off** — vendors are not accountable signatories. |
| **VAPT reporting structure** | 31 Aug walkthrough | 6 reports total. POCDEX staged separately: 2 reports (Cloud, API PT), assess 9–22 Sep, close 5–6 Nov. |
| **Identity direction** | 1–2 Sep (squad sync + OTG review) | NRIC-based resolution + profile unification. Not email, not POCDEX-UID-only (MINDEF/DSTA use Malaysian ICs). Directional, not a source-of-truth spec. |

---

## This week — POCDEX critical path (W37)

1. **Confirm NCS infra access is provisioned** (D-NCS) — POCDEX VAPT assesses from 9 Sep. PO ≠ access.
2. **Confirm the 5-endpoint fold** (D-endpoints) with Pow Hwee / Rama — preserves the 8 Nov target.
3. **Get Victor's CIE/CV retraining read** (R6 / D10) — overdue; blocks a clean VAPT scope.
4. **Nudge Rama on the "last modified date" formal sign-off** (I-60 / A2) — accepted, just needs closing.
5. **Get the architecture walkthrough on the calendar** (D4) — three POCDEX-side unknowns (identity SoT, BD-09, UID-succession) ride on it.

**Unowned, needs routing (should not default to Michelle):** R3 (upstream data quality), I-BD09 (ambiguous records), I-55a (25 extra scenarios), I-R9 (UAT data-prep). These get owners once the employment-profile epic has an end-to-end owner — proposed to roll under Imelda's Epic 2, awaiting Adrian's confirmation.

---

*Generated: 2026-09-07. Filtered from the consolidated MVP RAID (3 Sep) plus the 7 Sep jira-sync and calendar pulls. Re-status alongside the consolidated RAID at each `/weekly-review`.*
