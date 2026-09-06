---
date: 2026-09-03
week: 2026-W36
type: readiness-view
scope: Career Compass MVP (24–25 Nov 2026)
gates: [POCDEX, UAT, VAPT, Launch]
companion: 2026-09-03-W36-mvp-raid-consolidated.md
---

# Career Compass MVP — Readiness Gates

One view, four gates, in dependency order. Each gate carries only: owner, current status, blocking issue, decision needed, latest safe date. Everything below the table is the detail that would otherwise be scattered across email and Teams.

**Path:** POCDEX → UAT → VAPT → Launch

**Fixed points:** VAPT starts 7 Sep · VAPT sign-off ~7 Nov · MVP launch 24–25 Nov · employment-profile dev freeze end-Sept · employment-profile UAT starts 19 Oct (Huiting's team).

---

## The gates

| Gate | Owner | Current status | Blocking issue | Decision needed | Latest safe date |
|------|-------|----------------|----------------|-----------------|------------------|
| **1. POCDEX** | Pow Hwee (POCDEX side) / Rama (Compass side) | 🟠 Active. UAT API live since 26 Aug. Data Sharing Form locked 14 Aug. Employment-change semantics still open. | "Last modified date" change-detection rule — accepted by Adrian 31 Aug, **Rama's formal engineering sign-off not landed**. Scope-framing dispute: is the API/infra Compass-specific or wider UHDP? | (a) Rama signs off the last-modified-date rule. (b) Agree what Compass is entitled to depend on vs. what's shared UHDP end-state — likely surfaces at the 2 Sep architecture review. | Sign-off: this week. Scope-framing: before VAPT locks API surface (7 Sep). |
| **2. UAT** | Imelda (overall) / Michelle + Christopher Woo (employment-profile test cases) | 🟡 In progress. Phase 1–2 done (Sprint 8). Edge-case coverage expanding — 21 personas, Master Test Cases (terminated-email reuse, same-email/different-officer, secondment, grade scenarios). | BD-01–BD-10 acceptance criteria not decided — ~24 scenarios can't get a pass/fail result. UAT data-prep unassigned (Compass ITC vs. joint POCDEX ask). ≥25 additional POCDEX-recommended scenarios have no owner (since 11 Aug). | (a) PM team decides BD-01–BD-04, BD-10 this week. (b) Name owners for BD-07 (NPL), BD-09 (ambiguous records). (c) Assign UAT data-prep. (d) Johnny's ask: update the 21-person UAT sheet with outcome columns as testing completes. | BD decisions: this week (Friday use-case target). Employment-profile UAT must be executable by **19 Oct**. |
| **3. VAPT** | Jace (ITC coordinator) / Jobelle (daily tracking from 7 Sep) / Rama (intranet routing migration) | 🟠 On track. **PO issued (confirmed 2 Sep email update)** — the top operational risk is cleared. 6-report schedule exists (Jobelle). Compass + CIE assess 7–25 Sep; POCDEX 9–22 Sep. | NCS reporting-cadence dependency has no Plan B if incremental reporting isn't agreed. Verify NCS actually has infra access (the PO's last step), not just the PO. | (a) Confirm NCS access provisioning before 7 Sep. (b) Confirm 5 POCDEX endpoints fold into the same NCS engagement (preserves the 8 Nov target). (c) Victor's read on whether CIE/CV retraining is "minor/logic-only" before 7 Sep. (d) Reconcile the old 16 Oct vs 23 Oct closure-date discrepancy against the ~7 Nov framing. | Access confirmed: before 7 Sep. Endpoint-fold decision: before 7 Sep. Sign-off: ~7 Nov. |
| **4. Launch** | Adrian Ang (business constraint owner) | 🟡 Date confirmed (24–25 Nov), path gated on 1–3 plus Day-2 readiness. | AI IDSC approval (~1 Sep expected, hard blocker, no fallback). Data classification inventory + Day-2 support model — both on Michelle, both launch-gating, not started. Key-person leave: Adrian away 5–9 Oct, Jace away 26 Oct–5 Nov. | (a) Confirm AI IDSC approval landed. (b) Day-2 support model + SLA first draft — owner for each sub-component (currently unowned). (c) Performance testing: confirm UAT is the environment (prod likely not feasible — Compass calls CSC courses + Jumpstart). | AI IDSC: now. Day-2 draft: before VAPT crunch (~18 Sep) consumes dev capacity. |

---

## Gate detail

### Gate 1 — POCDEX

**What's settled:** Data Sharing Form locked and approved (14 Aug). UAT API cutover done (26 Aug, from Dev API). Last Updated Date exposed per-endpoint, not rolled up (2 Sep POCDEX sync). Supervisor ID field agreed across Officer/Employment/Job APIs. UAT accountability model: WD does app-level UAT, Compass ITC validates API outputs, Compass PSD staff sign off for POCDEX — vendors are not accountable signatories.

**What's open:**
- **Last-modified-date rule** — Adrian accepts it as the working requirement, decoupled from test-case design. Rama and Pow Hwee reconfirmed the direction 1 Sep. Rama's formal sign-off is the only thing between this and closed (open item #60).
- **Compass-specific vs. wider UHDP** — Pow Hwee's email reinforces the API/infra is not solely for Compass and must be considered against the broader UHDP end-state. This changes the question from "does POCDEX work" to "what is Compass entitled to depend on, and what could get re-prioritised as shared infra." Likely a 2 Sep architecture review topic.
- **Johnny Lim's 3 API-side items** — Last Updated Date behaviour doc, Resolve API OpenAPI/Confluence update, API response evidence for validation. All undated. These gate Compass's API validation work.
- **UID-succession** — does the POCDEX feed carry a UID-change event? Unanswered. If not, FIN→NRIC and ID-change scenarios have no detection path.

### Gate 2 — UAT

**What's settled:** Phase 1–2 ran in Sprint 8. Identity direction locked 2 Sep (NRIC-first, one consolidated profile, no OTG profile-selection). OTG operational incidents adopted as the source for test scenarios over a theoretical list. Historical competency data preserved on change (storage in scope, UI deferred).

**Test artefacts in play:**
- **21 officer personas** — Johnny asked for the UAT sheet updated for all 21, with outcome columns filled as testing completes.
- **Master Test Cases** — terminated-officer email reuse, same email / different officers, secondment, grade scenarios. Edge cases, not happy paths.
- **Four scoping frames reconciled** (see the [scope reconciliation](2026-09-02-W36-employment-profile-uat-scope-reconciliation.md)): 118 workbook → 82 Compass P1 → 41-row jam cut / 50-case Huiting commitment → 24 decision-blocked scenarios. Working scope: ~50 test-ready rows (Tier 1) + ~7 blocked clusters (Tier 2) + 3 parked NPL scenarios (Tier 3).

**What's open:**
- **BD-01–BD-10** — the acceptance-criteria backlog. BD-01–04 + BD-10 unblock most of Tier 2. Session brief ready, no date set.
- **Ownership split** — Michelle authors test cases, Imelda prioritises the cut and owns BO ratification. Needs explicit confirmation so both aren't scoping the same 50 from different angles.
- **Data-prep** — unassigned; blocks even Tier 1 from executing.
- **≥25 additional scenarios** POCDEX recommended (multi-hatting, secondment, email change, NPL, missing mappings, terminated officers) — no owner since 11 Aug.

### Gate 3 — VAPT

**What's settled:** 6-report schedule with owner/status/target/days-left per stage (Jobelle). Streams staged, not simultaneous: Compass (Cloud/Web/API) + CIE (Cloud) assess 7–25 Sep, close 29–30 Oct; POCDEX (Cloud, API PT) assesses 9–22 Sep, closes 5–6 Nov — POCDEX's later close feeds the ~7 Nov sign-off. Daily tracking by Jobelle from 7 Sep. Rama owns intranet-routing/VAPT migration.

**What's open:**
- **PO issuance — DONE.** Confirmed in the 2 Sep email update. This was the single highest operational delivery risk (5 sequential internal steps, no parallelisation). It landed ahead of the ~4 Sep expectation and 5 days before the 7 Sep VAPT start. Residual: the chain's last step is access provisioning — confirm NCS actually has infra access in hand, not just the PO.
- **5 POCDEX endpoints in the NCS engagement** — emerging approach to fold them into the same engagement so Compass keeps its 8 Nov completion target. Needs confirming.
- **NCS reporting cadence** — team asked NCS to release findings incrementally per component. No fallback if NCS won't. Rama to send the follow-up.
- **Performance testing** — Adrian flagged prod perf testing may not be feasible; UAT is the likely environment because Compass calls CSC courses and uses Jumpstart recommendations.
- **CIE/CV retraining** — realistically end-Sept (CV data blocked, Victor + Benjamin on overlapping leave), lands in the VAPT freeze window. Plan is to characterise any change as minor/logic-only to avoid a full re-VAPT — technically unconfirmed, needs Victor.
- **16 Oct vs 23 Oct closure discrepancy** — never reconciled line-by-line against the ~7 Nov framing.

### Gate 4 — Launch

**What's settled:** Date confirmed 24–25 Nov (Adrian, 25 Aug). VAPT sign-off ~7 Nov. Production data load starts week of 2 Nov, completes in ~1 week, rest is monitoring.

**What's open:**
- **AI IDSC approval** (~1 Sep) — hard blocker, no fallback if it slips.
- **Data classification inventory** — field-level, POCDEX/HRPS/Compass-generated/user-generated. On Michelle, launch-gating, not started.
- **Day-2 support model + SLA** — L1 triage, mailbox, roster, engineer rotation. First draft on Michelle. Each sub-component currently unowned.
- **Key-person leave** — Adrian 5–9 Oct (mid-VAPT), Jace 26 Oct–5 Nov (soft launch + first release). Cover: Adrian, Rama, Barry, Pow Hwee.

---

## Cross-gate: what's genuinely unowned

These sit across gates and have no owner. They should not default to Michelle — routing them is the priority.

| Item | Gate | Should own |
|------|------|-----------|
| Upstream data-defect detection / monitoring / prevention | 1, 2 | Rama + operations |
| BD-07 (NPL scope decision) | 2 | Adrian Ang |
| BD-09 (missing/ambiguous source records) | 2 | Rama + operations |
| UAT data-prep (Compass ITC vs joint POCDEX ask) | 2 | Rama / Pow Hwee to assign |
| ≥25 additional POCDEX UAT scenarios | 2 | Rama to assign |
| NCS cadence fallback / Plan B | 3 | Jace / Rama |
| 16 Oct vs 23 Oct reconciliation | 3 | — |
| Day-2 support sub-component owners | 4 | Rama / Adrian Lo |

---

## Also unsettled (not a gate, but launch-adjacent)

- **KPIs are ambiguous** ("hum tum" — Michelle's Teams thread). Before UAT/launch, split **delivery metrics** (VAPT sign-off, UAT pass rate, PO landed) from **product-outcome metrics** (% of lifecycle changes handled without manual intervention — the proposed North Star; adoption; recommendation accuracy). Worth a `/metrics-framework` or `/define-north-star` pass before launch, not after.
- **CSC SSO integration reliability** — #30 was closed in June (requirements/ownership settled, DLE testing targeted August), but there's an active CSC↔Compass SSO failure now, with a course-URL-handling change proposed as the workaround. This is a regression from "resolved" — reopen as an issue, not a blocker: it's a support/launch reliability risk, not a core architecture problem.

---

*Generated: 2026-09-03. Companion to the [consolidated RAID](2026-09-03-W36-mvp-raid-consolidated.md) and the [employment-profile epic one-pager](../prds/2026-09-03-W36-employment-profile-changes-epic-one-pager.md). Built from recent Outlook + Teams activity plus this week's meeting notes. The gate table is the circulation version; everything below it is backup.*
