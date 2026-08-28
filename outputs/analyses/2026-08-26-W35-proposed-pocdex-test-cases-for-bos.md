# Proposed Test Cases for Compass BOs

Compass profile data goes stale after first login and never rechecks — a job transfer, a name change, a rescinded hire, and the officer's profile just doesn't catch up. These 11 test cases (all P1) check whether that gap actually breaks something an officer would notice.

- **4 need a clean BO decision** — Identity-2, Identity-3, Leave-1, Exit-1
- **1 is a PRD-scope confirmation** — Identity-1 (whether email reuse is already excluded from MVP; confirm before treating it as an open decision)
- **1 is a POCDEX routing question** — Mobility-2 CUS rules, non-blocking
- **2 ready to test** — Job-1, Mobility-1
- **3 resolved, no BO decision needed** — Exit-2/Exit-3 need no new test case, Population-1 is ready to write

---

## Group 1: Officer sees someone else's data, or someone else can see theirs

| ID | Category | Row # | What the officer experiences | Decision needed | Test data | Pass condition |
|---|---|---|---|---|---|---|
| **Identity-1** *(PRD-scope check, not a BO decision)* | Identity & contact changes | 88–90 | New officer logs in and sees a departed officer's prior role, agency, or competency data — assigned that officer's old email | Confirm against the PRD capability table: does email reuse already fall under the MVP exclusion? If yes, test as a negative (login must fail cleanly). If the exclusion is narrower, this is a real gap. | Officer A (terminated); Officer B (new hire, assigned A's former email) | B sees only their own current data — no trace of A |
| **Identity-2** | Identity & contact changes | 85–86 | Officer gets blocked with no explanation, or sees a mix of both people's job data | Block with an error, or deterministically resolve to the correct record? | Two HRIDs seeded with the same email, different source systems | Clear blocking error, or clean resolution — "silently mixed" must fail |
| **Identity-3** | Identity & contact changes | 87 | Same officer, different email, sees a different version of their own profile | Which email is authoritative? | One officer, two source-system records, two emails | Both logins resolve to one consistent identity |

---

## Group 2: Officer is let in — or blocked out — incorrectly

| ID | Category | Row # | What the officer experiences | Decision needed | Test data | Pass condition |
|---|---|---|---|---|---|---|
| **Leave-1** | Leave / NPL | 41–44, 91 | Loses access instantly when NPL starts, or keeps access when they shouldn't | Immediate cutoff, or a grace period? | One officer with a future-dated NPL start | Access matches BO-confirmed policy, consistently |
| **Exit-1** | Exit, rescind & rehire | 110, 113–114 | Hire cancelled — can't log in (correct), or gets into a profile that shouldn't exist | Account shouldn't exist, or exist-but-blocked? | New-hire record created then rescinded near first login | Login fails cleanly — no partial profile, no lingering access |
| **Exit-2** *(resolved — no test case needed)* | Exit, rescind & rehire | 11–15 | Officer leaves and rejoins — could lose all history, or retain stale data | ✅ Covered under existing rehire rows | Termination record, then new hire record later, same NRIC | Only current employment shown; no duplicate; access starts fresh |
| **Exit-3** *(resolved — no test case needed)* | Exit, rescind & rehire | 74–76 | Record deleted then recreated — officer locked out, or ends up with conflicting records | ✅ Covered under existing rehire rows, same underlying scenario as Exit-2 | Record deleted, then recreated shortly after | No duplicate profile; access restored; nothing orphaned |
| **Population-1** *(resolved — ready to write)* | Population eligibility & exclusions | 58–60, 69 | Contingent worker correctly included — we test the block side, never the correct-inclusion side | ✅ POCDEX provides the officer list based on whitelisted agencies Compass shares with them | Eligible contingent worker, whitelisted pilot agency | Logs in successfully, sees correct profile |

---

## Group 3: Officer's own profile shows the wrong job details

| ID | Category | Row # | What the officer experiences | Decision needed | Test data | Pass condition |
|---|---|---|---|---|---|---|
| **Mobility-2** *(ready — 1 open question)* | Mobility: transfer & secondment | 115–116 | Officer under CUS scheme (Common User Scheme — Accountant/Economist/Info Officer) sees missing/wrong posted agency | — *AGD and MTI are both onboarding to POCDEX, at later stages than the pilot. Test needs an interim-state variant (parent agency not yet connected) alongside the fully-onboarded one. Open: the scheme's actual eligibility/posting rules — POCDEX, doesn't block writing this test case.* | CUS officer, parent MDDI (onboarded — pilot agency) / AGD or MTI (onboarding, interim state, not yet in pilot) | Onboarded case: correct posted agency shown. Interim case: doesn't show blank/broken, degrades gracefully instead |
| **Job-1** *(ready)* | Job, position & employment changes | 46–55, 64–65 | Job function/family changed, Compass still shows old — wrong recommendations too | — | Officer whose job title/function/family changes, Position ID same | Profile + recommendations reflect the new role — **largest gap: 12 of 82 P1 cases, zero UAT coverage** |
| **Mobility-1** *(ready)* | Mobility: transfer & secondment | 2–3, 23–37, 68 | Seconded, Compass still shows old posting | — | Officer seconded, same HR system | Current seconded agency/role shows as primary — high-frequency, recurs post-launch |

---

## Deferred (not dropped)

| ID | Category | Row # | Variant |
|---|---|---|---|
| Leave-2 | Leave / NPL | 41–44, 91 | NPL concurrent-systems variant |
| Population-2 | Population eligibility & exclusions | — | Net-new first-login case, no source row |
| Mobility-3 | Mobility: transfer & secondment | 38–40 | Cross-system secondment variant of Mobility-1 |
| Mobility-4 | Mobility: transfer & secondment | 26–31, 111–112 | Permanent cross-system transfer variant of Mobility-1 |
| Mobility-5 | Mobility: transfer & secondment | 26–31, 111–112 | Same-system transfer variant of Mobility-1 |
| Job-2 | Job, position & employment changes | 79–82 | Position ID change variant |
| Identity-4 | Identity & contact changes | 77–78 | Name/email correction variant |
| Identity-5 | Identity & contact changes | 70–71 | FIN→NRIC identity continuity |
| Identity-6 | Identity & contact changes | 72–73 | Compound ID+HRID change |

Full case detail available on request.

---

## Decision ownership

| Case | Category | Risk | Owner |
|---|---|---|---|
| Identity-2, Identity-3 | Identity & contact changes | Wrong-person data exposure | BO — bundle with Identity-1 into one conversation |
| Identity-1 | Identity & contact changes | Wrong-person data exposure | PM — confirm against PRD capability table before the BO conversation; may already be excluded from MVP |
| Leave-1 | Leave / NPL | Access grant/denial during NPL | BO |
| Exit-1 | Exit, rescind & rehire | Lingering access after rescind | BO |
| Mobility-2 | Mobility: transfer & secondment | CUS (Common User Scheme) eligibility/posting rules — name is known, rules aren't | POCDEX — informational, non-blocking |

---

## Open items

- [open-items.md #60](../../../PM-skills-ALL-1/00-hub/open-items.md) — due 28 Aug, owned with Imelda Mo
- POCDEX's 9 Aug data-prep question — unanswered since 11 Aug
- Two informational, non-blocking questions from POCDEX's own test data: why MOE appears in a secondment example; whether there's more to know about officers with mixed WOG & MHA jobs

---

<details>
<summary>Appendix: rationale and background</summary>

**Source:** POCDEX's 82-case P1 test-data file. Runnable test cases were built from it (18 in total), then cut to the 11 in this doc for the BO round — the highest-severity/frequency set. All trace directly to real rows in the 82 cases (row numbers in each table above).

**Why this cut:**

| Group | What goes wrong | Why it's kept |
|---|---|---|
| Group 1 (3 cases) | Officer could see someone else's data, or someone else sees theirs | Privacy incident, not a display bug — kept in full |
| Group 2 (2 cases) | Someone let in or blocked when they shouldn't be | During leave, or after a hire gets rescinded |
| Group 3 (3 cases) | Officer's own profile shows wrong job details | Biggest gap found — kept the largest cluster + highest-frequency case |

The other 9 runnable cases (Leave-2, Population-2, Mobility-3/4/5, Job-2, Identity-4/5/6) are deferred, not dropped — see the table above. Identity-5/6 (FIN→NRIC continuity) sit in a zero-coverage area; confirm the deferral is a conscious call at the jam.

P2 (backend timing/backdating corrections) has zero proposed cases, including one unverified assumption that could reclassify to P1 if wrong — a real gap, not solved just because P1 has coverage.

**POCDEX's 82-case P1 test-data file, reconciled:** POCDEX sent 82 concrete P1 test-data cases (real HRIDs/UIDs) across 6 lifecycle categories — test data to seed our cases with, not a new requirements source.

| POCDEX category | Cases | Maps to |
|---|---|---|
| Job, position & employment changes | 33 | Job-1 |
| Mobility: transfer & secondment | 24 | Mobility-1, Mobility-2 |
| Identity & contact changes | 9 | Identity-1, Identity-2, Identity-3 |
| Exit, rescind & rehire | 8 | Exit-1, Exit-2, Exit-3 |
| Leave / NPL | 4 | Leave-1 |
| Population eligibility & exclusions | 4 | Population-1 |

Everything in the 11 has real test data available. The 11 are decision-complete once the 4 BO calls + the Identity-1 PRD check land — but all of them are blocked on data prep, and coordination ownership (Compass ITC vs. joint POCDEX ask) is still unassigned. Name the owner and a seeding date at the jam. The one flag from the cross-check: POCDEX's own test data for Mobility-2 (rows 115–116) carries their own note asking about CUS Posting. CUS = Common User Scheme — the name is known, but the actual eligibility/posting rules governing it aren't defined anywhere yet. Onboarding timing (AGD/MTI) is separately resolved and doesn't depend on this answer.

Full backend/mechanism context: [2026-08-26-W35-pocdex-pm-analysis-all-tabs.md](2026-08-26-W35-pocdex-pm-analysis-all-tabs.md)

</details>
