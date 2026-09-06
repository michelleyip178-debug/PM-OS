---
archived: 2026-09-03
week: 2026-W35 (24–28 Aug)
type: archive-digest
supersedes:
  - 2026-08-26-W35-pocdex-test-case-scoping-brief-for-adrian.md
  - 2026-08-26-W35-pocdex-p1-test-data-source.md
  - 2026-08-26-W35-pocdex-pm-analysis-all-tabs.md
  - 2026-08-26-W35-proposed-pocdex-test-cases-for-bos.md
superseded_by:
  - outputs/analyses/2026-09-02-W36-employment-profile-uat-scope-reconciliation.md
  - outputs/analyses/2026-09-02-W36-employment-profile-decisions-brief.md
---

# W35 POCDEX Test-Case Scoping History — Digest

Four W35 analyses that took POCDEX's 82-row P1 test-data file, built runnable cases from it, and cut to a BO-ready set. This was the **first** scoping pass. It was later superseded when the [scope reconciliation](../../../analyses/2026-09-02-W36-employment-profile-uat-scope-reconciliation.md) folded four framings together (118 workbook → 82 P1 → 41-row jam cut / 50-case Huiting commitment → 24 decision-blocked scenarios) and the [decisions brief](../../../analyses/2026-09-02-W36-employment-profile-decisions-brief.md) renamed the decision points BD-01…BD-10.

**Mapping W35 → W36 naming:** the W35 docs used ID-01…ID-08 / COM-01…COM-09 for test cases and "Identity-1/2/3, Leave-1/2, Exit-1, Mobility-2" for decisions. The W36 executable cases renumbered to MOV-01…MOV-08 (movement) and ID-01…ID-07 (identity); the decisions became BD-01…BD-10. The underlying scenarios are the same.

---

## The scoping story these four told

**Starting point:** Compass captures an officer's profile once, at first login, and never re-checks it (Day-2 discovery, assigned 13–14 Aug). Any real-world job change sits there wrong until manually caught.

**Sizing (pilot: 6 agencies, ~5,270 officers):**
- 90 officers (1.7%) sit in the lifecycle-risk population — 71 duplicate/multi-hat identities, 19 with no email on record.
- A further 279 are missing job metadata entirely.
- Measured: **3.45% of records change in any 2-week window** — routine, not edge case.
- Whole-of-government: 1,905 officers (1.25%) duplicate/multi-hat, 274 spanning two HR systems at once.

**P1 breakdown (82 of the 118-row workbook):**

| Category | Cases | Share |
|---|---|---|
| Job, position & employment changes | 33 | 40.2% |
| Mobility: transfer & secondment | 24 | 29.3% |
| Identity & contact changes | 9 | 11.0% |
| Exit, rescind & rehire | 8 | 9.8% |

P2 (27 cases, backend timing/backdating) and P3 (3 cases, cosmetic) were out of scope.

**The funnel:** 82 P1 cases → 18 runnable cases built → **17 proposed for scoping** (brief for Adrian) → **11 for the BO round** (proposed-test-cases-for-bos), the highest-severity/frequency set.

---

## 1. Brief for Adrian — Officer-Impact Case (26 Aug)

*The ask: "17 gaps — 10 ready to test now, 7 need a BO decision, 2 need a POCDEX/Compass decision — before I close this out by the 28th."*

**Three ways drift shows up for a real officer:**
1. **Someone sees data that isn't theirs** — privacy incident, not a bug report. 3 of 17 cases (email reuse, shared email, split identity across systems).
2. **Let in when they shouldn't be, or blocked when they shouldn't be** — access-boundary failures during NPL or after a rescinded hire. 3 cases.
3. **Own profile shows the wrong thing** — old title, wrong grade, stale agency. The largest bucket: 12 cases in the full 118-row set, zero coverage. The biggest untested gap.

**Blocking the 28 Aug close:**

| Blocker | Owner | Status then → now |
|---|---|---|
| CUS Posting: unclear if AGD/MTI onboarded to POCDEX | POCDEX/HR | Later resolved — CUS-Deploy = Secondment (parent agency restricted to AGD/MTI/MDDI), CUS-AO = Transfer ([31 Aug findings](../../../analyses/2026-08-31-W36-agd-mti-mddi-cus-scheme-findings.md)) |
| "Last modified date" business rule undefined (RAID R11) | Compass team | Accepted by Adrian 31 Aug; Rama's formal sign-off still outstanding (open item #60) |

The missing "last modified date" *field* was confirmed being added to the Data Sharing Form — that closed the data-contract gap; how Compass *uses* it stayed open.

**17 cases, grouped by officer experience:**
- **Group 1 — wrong-person data exposure (3, all need BO decision):** ID-01 (new hire sees departed officer's data via email reuse), ID-02 (two officers share one login email), ID-03 (one officer, two emails, two profiles).
- **Group 2 — let in / blocked incorrectly (3, 2 need BO decision):** ID-06 (NPL access cutoff timing), ID-07 (NPL status disagrees across systems), COM-08 (hire rescinded at first login) — plus ready-to-test companion ID-08 (a legitimate first login, the positive case UAT never tests).
- **Group 3 — own profile shows wrong job details (8, 1 needs routing, 7 ready):** COM-07 (CUS Posting, route to POCDEX/HR); ready: COM-01 (job info change, no Position ID change — the largest hole), COM-02/03 (secondment within/cross system), COM-04/05 (transfer cross/within), COM-06 (Position ID change), COM-09 (email + name change).
- **Group 4 — identity changes that shouldn't disrupt the officer (2, both ready):** ID-04 (FIN→NRIC), ID-05 (ID+HRID together).

**Framing recommended for Adrian:**
- Lead with officer impact, not case count: "3 are privacy-incident-severity, 10 are the routine wrong-data-on-screen problem."
- Name the two blockers with owner and next step — don't leave open-ended.
- The 7 BO decisions share one root question: "which record/system wins when they disagree, and what happens to the officer's access." Bundle into one BO conversation, not seven.

**Also flagged:** Compass's own assumption — "officer can log in until their last day" — is itself unverified. If wrong, several low-priority cases jump into identity/access-risk territory. A one-line flag to engineering, not for Adrian.

---

## 2. P1 Test-Data Source Reference (26 Aug)

Straight transcription of `POCDEX_Compass Test Plan_(downstream sharing).pdf` — all 82 Compass-user P1 cases, grouped by lifecycle, with row-number index by category. Purpose: let other docs verify the row numbers they cite. All 82 cases carry an Original HRID, POCDEX UID, and upstream source; the No. column maps to Master Test Cases.

Proposed Compass solutions per category (as stated in the source):
- **Job/position/employment:** effective-dated profile synchronisation — rebuild role and course recommendations whenever job/position/grade/title/family/function changes; preserve prior values for audit; clear fallback when fields are blank or masked.
- **Mobility:** model multiple/concurrent employments explicitly, with effective dates and a clear primary-employment rule; switch agency/job context without duplicate profiles; honour start/end/last-day extraction.

---

## 3. PM Analysis — 82 P1 Cases, All Tabs (26 Aug)

Full working analysis: the 82 P1 cases by lifecycle category and by officer impact, mapped to the 18 runnable test cases, with decision ownership and recommendations.

**Decision ownership (as assigned then):**

| Case | Risk | Owner |
|---|---|---|
| Identity-1, Identity-2, Identity-3 | Wrong-person data exposure | BO — bundle into one conversation |
| Leave-1, Leave-2 | Access grant/denial during NPL | BO |
| Exit-1 | Lingering access after rescind | BO |
| Mobility-2 | CUS eligibility/posting rules | POCDEX — informational, non-blocking |

10 cases ready with no open decision, pending POCDEX data seeding.

**Recommendations:**
1. Close Group 1 first — the only cases where the failure mode is another person's data under a real login.
2. Group 3's job-info cluster is the biggest hole — 12 cases, zero coverage, the change officers see most often.
3. Close Mobility-2's CUS eligibility/posting question — non-blocking, needs a plain-language answer.

**Existing UAT coverage against the full 118-row set:**

| Pattern | Status |
|---|---|
| NPL access-gating | NO COVERAGE |
| Population/whitelist inclusion side | PARTIAL — exclusion tested (OTEP-1379/1380), inclusion had no proving case |
| Identifier changes (FIN/NRIC/HRID) | NO COVERAGE |
| Identity/multi-agency (same/reused email) | OUT OF SCOPE (PRD) |
| Employment-event data changes | NO COVERAGE — existing tests display already-loaded data, not change detection |
| CUS Posting | NO COVERAGE |
| Backdating/rescind/terminate timing | NO COVERAGE |

**Derived Ops/engineering requirements (not officer-facing):** exception queue for NPL-blocked API responses; discrepancy/reconciliation view for population scoping; multi-identifier lookup with audit trail; proactive email-reuse check at record creation; CC-vs-Ops discrepancy view + effective-dated officer timeline; patch/override workflow with reversibility for backdating, plus a monitoring check on the access-stays-clean assumption.

**Provenance:** the 118-row workbook (82 P1) builds on Compass's original 20/21-persona test plan, expanded with more scenarios — a joint artifact grounded in Compass's original scope.

---

## 4. Proposed Test Cases for Compass BOs (26 Aug)

The 11-case BO round, cut from the 18 runnable cases. Grouped:
- **Group 1 — officer sees someone else's data:** Identity-1/2/3
- **Group 2 — let in or blocked out incorrectly:** Leave-1, Exit-1
- **Group 3 — own profile shows wrong job details:** Job-1, Mobility-1, Mobility-2 (routing)

**Of the 11:** 4 need a clean BO decision (Identity-2, Identity-3, Leave-1, Exit-1); 1 is a PRD-scope confirmation (Identity-1 — whether email reuse is already MVP-excluded); 1 is a POCDEX routing question (Mobility-2 CUS rules, non-blocking); 2 ready to test (Job-1, Mobility-1); 3 resolved, no BO decision needed (Exit-2/Exit-3 need no new case, Population-1 ready to write).

**Deferred (not dropped) — 9 cases:** Leave-2 (NPL concurrent-systems), Population-2 (net-new first login), Mobility-3 (cross-system secondment), Mobility-4/5 (permanent transfer variants), Job-2 (Position ID change), Identity-4 (name/email correction), Identity-5 (FIN→NRIC), Identity-6 (compound ID+HRID). All later re-absorbed into the W36 movement/identity test-case sets.

**Open items flagged then:** open item #60 (due 28 Aug, with Imelda); POCDEX's 9 Aug data-prep question (unanswered since 11 Aug); data-prep coordination ownership (Compass ITC vs joint POCDEX ask) — *still unresolved in W36*.

---

## What carried forward vs what changed

| W35 framing | W36 status |
|---|---|
| 17 → 11 case cut | Superseded by the four-frame reconciliation → ~50 Tier-1 + ~7 Tier-2 clusters + 3 parked NPL |
| "7 BO decisions, one root question" | Became BD-01…BD-10 in the decisions brief |
| Identity-1 = PRD-scope check | Confirmed: 82 production email-collision errors, 7 genuine — became BD-08, now needs POCDEX |
| CUS onboarding unknown (blocker) | Resolved — [31 Aug CUS findings](../../../analyses/2026-08-31-W36-agd-mti-mddi-cus-scheme-findings.md) |
| "Last modified date" rule (R11) | Accepted by Adrian 31 Aug; Rama sign-off still open (#60) |
| Data-prep coordination ownership | **Still unassigned in W36** — carried into the readiness-gates doc as a cross-gate unowned item |
| "Officer can log in until last day" assumption unverified | Not re-raised; still open |

---

*Digest generated 2026-09-03 from four W35 POCDEX scoping analyses. Original files removed on archival — the parts that still matter are captured above. Current scope: [scope reconciliation](../../../analyses/2026-09-02-W36-employment-profile-uat-scope-reconciliation.md) + [decisions brief](../../../analyses/2026-09-02-W36-employment-profile-decisions-brief.md).*
