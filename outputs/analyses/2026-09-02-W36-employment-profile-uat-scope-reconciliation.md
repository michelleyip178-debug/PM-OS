# Employment-Profile UAT Scope — Reconciling the Three Frames

**Date:** 2 September 2026 (W36)

**Purpose:** Three separate documents are scoping the same employment-profile UAT work, each counting a different universe. Imelda is being asked to prioritise against all three. This reconciles them into one working scope before test-case design starts.

**Feeds:** the architecture walkthrough (Rama / Adrian Lo / Kingsley Low) and Imelda's test-case prioritisation.

---

## The three frames

| Frame | Source | Universe | What it counts |
|---|---|---|---|
| **A — The 118 workbook** | Huiting's POCDEX employment-lifecycle test workbook | 118 rows | Every employment-lifecycle scenario row, all agencies, Huiting's definition of coverage |
| **B — The 50-case Huiting commitment** | [Adrian 1:1, 31 Aug](../meeting-notes/2026-08-31-W36-adrian-biweekly-sync.md) | 50 of the 118 | The subset Compass commits to test: job ID, job family, job function, competency changes. Explicitly excludes position-ID-only / no-pay-leave holding positions. |
| **C — The 41-row cut** | [Confluence prioritised scenarios](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2603157647) + BO jam screenshot, captured in [2026-09-01-W36-prioritised-test-rows.md](2026-09-01-W36-prioritised-test-rows.md) | 41 of Compass's own 82 P1 rows | The ~50% cut of Compass's P1 subset, kept for the BO jam. Counts scenarios, not rows (88–90 = one case, 41–44 = one case). |
| **D — The 24 decision scenarios** | Draft UAT test-case descriptions (2 Sep) | 24 scenarios + 10 detailed drafts | The scenarios whose *expected result* is blocked on a business decision (BD-01 to BD-10). A decision inventory, not a coverage list. |

Four frames, not three — the new draft adds D.

---

## How they nest

```
118  (Frame A — Huiting's full workbook)
 │
 ├─ 82  Compass's P1 subset  (the rows Compass rated P1 of the 118)
 │   │
 │   └─ 41  the BO-jam cut  (Frame C — ~50% of the 82, scenario-counted)
 │
 └─ 50  the Huiting commitment  (Frame B — job ID / family / function / competency)

 24  (Frame D)  — NOT a subset. A cross-cutting view: which scenarios
                   (from anywhere in the 118) need a BO decision before
                   their expected result can be approved.
```

**The key relationships:**

- **B (50) and C (41) are both cuts of the 118, but cut on different axes.** B is cut by *data domain* (keep job/competency changes, drop position-ID-only). C is cut by *severity + BO-relevance* (keep the P1 scenarios that need a jam decision or are high-value). They overlap heavily but are not the same 40-ish rows.
- **C is scenario-counted, B is row-counted.** C's "41" collapses multi-row sequences (88–90, 41–44) into one case each; on a row basis C is ~46 rows. So "41 vs 50" is closer than it looks — maybe a 5–8 row real difference once counted the same way.
- **D (24) is orthogonal.** It doesn't compete with B or C for a number. It says: of everything in scope, these 24 can't be given a pass/fail expected result until BD-01 to BD-10 are decided.

---

## Where the three disagree

| Scenario | Frame B (50-case) | Frame C (41-cut) | Frame D (24 decisions) | Reconciliation |
|---|---|---|---|---|
| **Job / position / competency changes** (rows 1–9, 45–57, 63–65, 79–95, 109, 117–118) | **In** (this is the core of the 50) | **In** (all 33 "Job/position/employment" rows kept) | Covered by BD-04 (inactive-role competencies), BD-10 (replace vs preserve) | **Agreed in scope.** This is the intersection all three keep. Start here. |
| **Position-ID-only changes** (no-pay-leave holding positions) | **Out** — Adrian's explicit exclusion | Not in the 41 | Not in the 24 | **Out.** All three agree. |
| **NPL access-gating** (rows 41–44) | **Out** — Adrian excluded no-pay-leave from the 50 | **In** — kept as one high-severity scenario | UAT-18/19/20, BD-07, marked "Critical if required for SGR/SJR" | **CONFLICT.** Frame B drops it, Frame C keeps it, Frame D can't rate it. Needs a decision: is NPL login in MVP UAT scope? Unowned since the 1 Sep grooming. |
| **Email reuse** (rows 88–90) | Ambiguous — it's an identity case, not a job-domain case | **In** — kept as critical, cross-officer data exposure | UAT-16, BD-08 (shared mailbox), "requires POCDEX clarification" | **In, but blocked.** Keep in scope; expected result blocked on BD-08 + POCDEX. Matches the [production evidence](2026-08-29-W35-employment-lifecycle-bo-prioritisation-brief.md) (82 email-collision errors, 7 genuine). |
| **Multi-hat / concurrent roles** (secondment with two active records) | Partially — competency changes yes, the display model no | Mobility rows kept only where they drive a grade/position change (26, 30, 31, 68, 111, 112) | UAT-01/03/04/05/06/10, BD-01/02/03 — the biggest decision cluster | **In scope, heavily blocked.** Frame C only kept the *job-change* slice; Frame D shows the *display-model* slice is the real work and it's entirely undecided. This is the gap between "what's cut for the jam" and "what actually needs building." |
| **Cross-system secondment** (Mobility-3, rows 38–40) | In (job change) | **Out** — "ready to test," excluded from the 41 | UAT-10/11, BD-04 | **In scope, test-ready.** Not in the jam cut because it doesn't need a BO decision — but it still needs to be built and run. Don't lose it. |
| **Identity-4/5/6** (name/email correction, FIN→NRIC, ID+HRID) | Not in the 50 (identity, not job-domain) | **Out** — "ready to test," excluded from the 41 | Not in the 24 (no decision blocking them) | **In scope, test-ready, low-noise.** All frames agree these are runnable. Schedule them; they're the easy wins. |
| **Exit-1** (rescinded new hire, rows 110, 113–114) | Not in the 50 | **Out** — "needs a BO decision, not in this cut" | UAT (implied), BD-09 (ambiguous source records) | **In scope, blocked.** Frame C flags it as decision-blocked but out of the jam cut — so it has no forum. Route to BD-09. |

---

## The reconciled working scope

Collapsing the four frames into one list, by execution readiness:

### Tier 1 — In scope, test-design ready, no blocking decision (build now)

| Scenario | Rows | From |
|---|---|---|
| Job ID / family / function / grade / position changes | 1–9, 45–57, 63–65, 79–95, 109, 117–118 | B ∩ C |
| Mobility rows that drive a grade/position change | 26, 30, 31, 68, 111, 112 | C |
| Cross-system secondment (Mobility-3) | 38–40 | ready, not in jam cut |
| Name/email correction (Identity-4) | 77–78 | ready |
| FIN→NRIC mid-employment (Identity-5) | 70–71 | ready |
| ID + HRID change together (Identity-6) | 72–73 | ready |
| CUS scheme (Mobility-2) | 115–116 | ready, 1 non-blocking POCDEX item |

**~50 rows.** Expected results are approvable today. This is where test-case writing starts.

### Tier 2 — In scope, blocked on a business decision (design fixtures, hold expected results)

| Scenario cluster | Blocking decision | Owner |
|---|---|---|
| Multi-hat profile model (one profile vs many, primary selection, competency union) | **BD-01, BD-02, BD-03** | PM team — this week |
| Treatment of inactive-role competencies (transfer, promotion, return-from-secondment, role-goes-inactive) | **BD-04** | PM team |
| Missing / duplicate / ambiguous source records | **BD-09** | Rama + operations |
| Replace vs preserve after profile update | **BD-10** | PM team |
| Email reuse / shared mailbox | **BD-08** | needs POCDEX |
| Exit-1 (rescinded new hire) | **BD-09** | unowned — route here |
| Source correction after login (Journey D / R11) | detailed criteria needed | Rama (change-detection) |

### Tier 3 — In scope only if a policy decision says so (parked, needs an owner)

| Scenario | Decision | Status |
|---|---|---|
| NPL under 90 days (UAT-18) | **BD-07** | Unowned |
| NPL over 90 days (UAT-19) | **BD-07** | Unowned — "Critical if required for SGR/SJR" |
| NPL personal-email / manual account (UAT-20) | **BD-07** | Unowned |

### Tier 4 — Out of scope (all frames agree)

- Position-ID-only changes (no-pay-leave holding positions)
- Historical-competency UI (data preserved, presentation deferred — Decision 4 from the 2 Sep review)

---

## The number, reconciled

- **"50 of 118"** (Frame B) and **"41 of 82"** (Frame C) are not in conflict once you count the same way. Frame C row-counts to ~46; Frame B is ~50. The real gap is **NPL (4 rows) plus a handful of identity rows** that Frame B excludes as out-of-domain and Frame C either keeps (NPL) or defers (identity).
- **The working scope is ~50 test-ready rows (Tier 1) + ~7 blocked scenario clusters (Tier 2) + 3 parked NPL scenarios (Tier 3).**
- **Frame D's "24"** is the count of Tier 2 + Tier 3 scenarios — the ones that can't get a pass/fail result yet. That's the number to watch, because it's the size of the decision backlog, not the test backlog.

---

## What has to happen this week

1. **PM team decides BD-01 to BD-04 and BD-10** (multi-hat model, primary selection, competency union, inactive-role competencies, replace-vs-preserve). These unblock most of Tier 2.
2. **Name an owner for BD-07 (NPL) and BD-09 (ambiguous/missing records).** Both are unowned. BD-09 also swallows Exit-1.
3. **Rama brings the identity source-of-truth position** to the architecture walkthrough — this is the input to BD-02 and BD-09.
4. **Confirm the POCDEX ask for BD-08** (shared mailbox handling) — the one external dependency.
5. **Imelda prioritises Tier 1 for test-case writing now**, and parks Tier 2 expected-results pending the BD decisions.

---

## Open items this reconciliation does not resolve

- **Data-prep ownership** (Compass ITC vs joint POCDEX ask) — still unassigned, blocks even Tier 1 from actually running.
- **The 24→10 coverage trace** — the draft's 10 detailed cases don't visibly map to all 24 scenarios; NPL and source-correction have no executable draft despite being Critical.
- **Effort sizing** — none of the four frames carries a build estimate against the 2.5 sprints to the end-September freeze.
