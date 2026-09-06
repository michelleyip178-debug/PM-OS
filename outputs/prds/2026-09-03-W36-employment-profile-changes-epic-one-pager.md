| | |
|---|---|
| Doc Created | 3 Sep 2026 |
| PM | Michelle |
| Tech | Rama Moorthy (architecture), Adrian Lo (delivery) |
| Designer | — |
| Business Owner | Imelda Mo (UAT prioritisation + BO relationship) |
| Infra Eng | — |
| Target launch | MVP — 24–25 Nov 2026 |
| Dev freeze | End September 2026 (Adrian Ang, 31 Aug) |
| UAT start | 19 October 2026 (Huiting's team) |
| Epic Link | TBC, not yet in Jira |
| Figma Link | — |

## 1. Background & Context

Career Compass reads an officer's employment record once, at first login, and never rechecks it. When that record changes afterward — a transfer, a job/grade change, a secondment, a name or ID-type correction, a rescinded hire — the officer's profile drifts and nobody can see it. Recommendations, competencies, and access all key off the stale record.

The [1 Sep grooming session](../meeting-notes/2026-09-01-W36-grooming-employment-profile-changes.md) confirmed this as the top-two MVP priority alongside identity unification, and the two are linked: *"Career Compass cannot reliably handle employment profile changes until it first solves officer identity unification."* The [2 Sep OTG operational review](../meeting-notes/2026-09-02-W36-otg-operational-review-employment-profile.md) locked the direction — NRIC-first identity resolution, one consolidated profile per person, not OTG's profile-selection model.

This epic covers the **employment-profile-change handling** that sits on top of that identity foundation: detecting a changed record, re-deriving the profile, and getting the UAT coverage to prove it works before 19 October.

---

## 2. Problem Statement

> When an officer's employment record changes after first login, Career Compass keeps showing the old role, agency, grade, and competencies. The officer sees a wrong profile, gets wrong recommendations, and in some cases keeps or loses access incorrectly. There is no monitoring to catch it — OTG finds these only when an officer complains, a POC notices, or an audit runs.

---

## 3. Hypothesis (Value Proposition)

> If Career Compass re-derives an officer's profile whenever a material employment field changes (Position ID, `primaryPosition`, `jobFunctionId`, `jobFamilyId`, `jobGradeId`), keyed on NRIC across all their active officer records, then the profile and recommendations stay accurate through transfers, secondments, and corrections, because the officer's view is rebuilt from current data instead of a first-login snapshot.

---

## 4. What Triggers a Profile Change

Fixed in the [29 Aug BO brief](../analyses/2026-08-29-W35-employment-lifecycle-bo-prioritisation-brief.md):

| Change | Re-derives profile + competencies? |
|---|---|
| Position ID | Yes |
| `primaryPosition` / `is_primary` flag | Yes |
| `jobFunctionId` | Yes |
| `jobFamilyId` | Yes |
| `jobGradeId` | Yes |
| `employmentTitle` / `businessTitle` only | No — display-only |

Position-ID-only changes with no competency data (no-pay-leave holding positions) are **out of scope** — Adrian's explicit exclusion (31 Aug).

---

## 5. Target User

| # | User | Primary need |
|---|---|---|
| **1 — Primary** | Officer mid-change (transferred, seconded, promoted, corrected) | Profile and recommendations reflect the current role, not the one they logged in with |
| **2 — Secondary** | Business owners across pilot agencies (PSD, AGD, MTI, MDDI) | Confidence that officer-visible data is right at launch, no post-launch trust hit |
| **3 — Tertiary** | Compass Day-2 support / Ops team | Ability to tell "fixable now" drift from "upstream data defect, here's why" without escalating everything to Product |

---

## 6. Success Metrics

No baseline measured yet — these are what matters once instrumented:

| Metric | Why it matters |
|---|---|
| % of employment-lifecycle changes reflected in the profile without manual intervention | The proposed North Star for this workstream ([OTG root-cause analysis](../analyses/2026-09-01-W36-otg-operational-root-cause-analysis.md)) — measures whether re-derivation actually works at volume |
| Time from source record change → profile re-derived in Compass | Measures the size of the drift window this epic is meant to close |
| UAT pass rate on the Tier 1 test set by 19 October | The gate — dev freeze is end-Sept, so this is the near-term proof point |
| Cross-officer data-exposure incidents in UAT (email collision, wrong profile) | Privacy bar — 82 production email-collision errors, 7 genuine identity mismatches, must not recur |

---

## 7. Scope

**In scope for MVP** (reconciled from four framings in [the scope reconciliation](../analyses/2026-09-02-W36-employment-profile-uat-scope-reconciliation.md)):

- Re-derivation on any material field change (Section 4), keyed on NRIC across all active officer records
- One consolidated profile per person — merged view, no officer self-selection
- Historical competency data **preserved** on change (past-role, current-role, additional, self-declared) — storage in scope, presentation UI deferred
- **~50 test-ready scenarios (Tier 1)**: job ID / family / function / grade / position changes, mobility rows that drive a grade/position change, cross-system secondment, name/email correction, FIN→NRIC mid-employment, ID+HRID change, CUS scheme
- **~7 blocked scenario clusters (Tier 2)**: fixtures designed now, expected results held pending BD-01–BD-10

**Out of scope / deferred:**

- Position-ID-only changes (no-pay-leave holding positions) — all framings agree
- Historical-competency UI — data preserved, presentation is post-MVP
- Compass resolving upstream HR / Product data defects — Compass consumes what POCDEX gives it
- Lifecycle-related profile updates where WOGAD already blocks the departed officer (1 Sep, Decision 3)

**Not yet scoped (blocks a real MVP commitment — see Section 9):** the BD-01–BD-10 acceptance criteria, effort sizing against 2.5 sprints, and data-prep ownership for running the UAT.

---

## 8. Ownership Split

| Piece | Owner |
|---|---|
| Test-case **definition** — deriving from BD decisions + OTG scenarios, writing them executable (steps, fixtures, expected results) | **Michelle** |
| Test-case **prioritisation** — which scenarios make the ~50, the cut against the 118-workbook / 41-row / 50-case framings, BO ratification | **Imelda Mo** |
| Identity source-of-truth position + identity end-state design (input to BD-02, BD-09) | **Rama Moorthy** — owed since 1 Sep |
| Architecture walkthrough (identity SoT, multi-hat model, BD-09, UID-succession) | Rama, Adrian Lo, Kingsley Low — date not set |
| BD-07 (NPL scope) decision | **Adrian Ang** — unowned since 1 Sep |
| BD-09 (missing / ambiguous source records) decision | Rama + operations — unowned |
| Effort estimation once BD-01–BD-04 land | Engineering |
| Data-prep for UAT execution (Compass ITC vs. joint POCDEX ask) | **Unassigned** — blocks even Tier 1 from running |

---

## 9. Risks & Decision Tracker

| # | Risk / Open Decision | Why it matters | Mitigation / Status |
|---|---|---|---|
| 1 | **BD-01–BD-10 acceptance criteria not decided** — multi-hat model, primary-appointment selection, competency union, inactive-role competencies, replace-vs-preserve | Effort estimation, UAT prioritisation, and use-case production all wait on these. ~24 scenarios can't get a pass/fail result until they land. | Open. PM decisions session — [brief ready](../analyses/2026-09-02-W36-employment-profile-decisions-brief.md), no date set. Target: this week, ahead of Friday use-case target. |
| 2 | **Dev freeze is end-September, not "before VAPT"** — 2.5 sprints, driven by Huiting's 19 Oct UAT start | Materially tighter than open item #60 and the W36 plan assumed. Planning against the wrong deadline risks a late miss. | Open. Update open item #60, risks.md. Size Tier 1 the moment BD-01–BD-04 land. |
| 3 | **Multi-hat UX undefined** — architecture can merge competencies and support multiple job IDs, but the team has not agreed what officers see, what managers see, or how profile switching works | Likely to surface as a late-stage UAT issue. This is the real work behind Tier 2, not the job-change slice. | Open. BD-01/02/03. PM team to land the display rules this week. |
| 4 | **Source data quality** — if HRPS / Cumulus / Product records are wrong (missing, transfers not reflected, email changes not propagated, months-old duplicates), Compass consumes the wrong data | Team confidence that Compass "solves identity" is outrunning reality. NRIC resolution fixes identity resolution, not bad upstream data. No ownership, monitoring, or prevention defined. | Open. Top systemic risk. Needs an owner for upstream-defect detection before user impact. |
| 5 | **Data-prep ownership unassigned** | Blocks even Tier 1 test cases from actually executing — perfect cases with no test data. | Open. Raise as a named blocker at standup. |
| 6 | **NPL (BD-07) unowned** | Frame B drops it, Frame C keeps it, Frame D can't rate it. "Critical if required for SGR/SJR." If parked silently it becomes a late surprise. | Open. Send Adrian Ang a clean yes/no. |
| 7 | **Effort not estimated against 2.5 sprints** | "Ships in MVP" isn't a buildable commitment without a sizing pass. | Open. Engineering, after requirements stabilise. |
| 8 | **No proactive drift detection** — OTG finds profile-transition problems only via complaint, POC, or audit; no monitoring approach discussed for Compass | Repeats OTG's operational failure mode at launch. | Open. Not yet assigned. |

---

## 10. What Has to Happen This Week

1. PM team decides BD-01–BD-04 and BD-10 — unblocks most of Tier 2.
2. Name owners for BD-07 (NPL) and BD-09 (ambiguous/missing records).
3. Rama brings the identity source-of-truth position to the architecture walkthrough.
4. Confirm the POCDEX ask for BD-08 (shared-mailbox handling).
5. Michelle + Imelda confirm the ownership split (Section 8) and agree the Tier 1 list as the shared universe.
6. Imelda starts Tier 1 test-case prioritisation; Michelle starts test-case authoring against BD decisions as they land.

---

## 11. Source

- [1 Sep grooming / employment-profile scoping](../meeting-notes/2026-09-01-W36-grooming-employment-profile-changes.md)
- [2 Sep OTG operational review](../meeting-notes/2026-09-02-W36-otg-operational-review-employment-profile.md)
- [2 Sep POCDEX DO x Compass weekly sync](../meeting-notes/2026-09-02-W36-pocdex-do-compass-weekly-sync.md)
- [31 Aug Adrian bi-weekly sync](../meeting-notes/2026-08-31-W36-adrian-biweekly-sync.md) — dev-freeze and 50-case commitment
- [29 Aug BO prioritisation brief](../analyses/2026-08-29-W35-employment-lifecycle-bo-prioritisation-brief.md) — production evidence, what triggers a profile change
- [2 Sep employment-profile UAT scope reconciliation](../analyses/2026-09-02-W36-employment-profile-uat-scope-reconciliation.md) — the four framings, Tier 1–4
- [2 Sep decisions brief](../analyses/2026-09-02-W36-employment-profile-decisions-brief.md) — BD-01 to BD-10
- [1 Sep OTG operational root-cause analysis](../analyses/2026-09-01-W36-otg-operational-root-cause-analysis.md) — proposed North Star metric
- Open item #61 (employment-lifecycle freeze), #60 ("last modified date" rule)

---

*Generated: 2026-09-03. First draft. Companion to the identity-unification work — this epic is the profile-change handling that sits on top of it.*
