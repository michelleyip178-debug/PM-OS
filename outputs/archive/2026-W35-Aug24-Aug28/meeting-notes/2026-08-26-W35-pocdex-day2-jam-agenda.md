# Jam Agenda: Employment Lifecycle Day 2 Test Cases — Michelle, Adrian, Imelda

**Goal:** Agree what to test, close open questions, before the 28th.

---

## 1. The problem

Compass pulls an officer's employment data once, at first login, and never rechecks it. When that data changes afterward — a transfer, a name change, a rescinded hire — the officer's profile just doesn't catch up. In the worst cases, this isn't a display bug: it's the wrong officer's data showing up under a real login.

8 test cases proposed against this gap (detail in Appendix A).

---

## 2. First decision: how does Compass detect a change?

**Question:** POCDEX timestamp vs. nightly recheck of every record.

**Ask:** confirm an answer today. If not, a named owner and a date.

---

## 3. Test cases needing a decision

Of the 8: 5 need a BO decision, 1 (Mobility-2) has one small open item, 2 are ready to test.

**5 needing a BO decision:**

| ID | Category | Row # | Situation | What we need to decide | Likelihood |
|---|---|---|---|---|---|
| Identity-1 | Identity & contact | 88–90 | New hire given a departed officer's old work email | Zero trace of previous person — hard requirement or nice-to-have? | Medium |
| Identity-2 | Identity & contact | 85–86 | Two people share one login email | Block both, or let the system resolve who's who? | Low |
| Identity-3 | Identity & contact | 87 | One officer has two emails across data sources | Which email is "real"? | Medium |
| Leave-1 | Leave / NPL | 41–44, 91 | Officer going on unpaid leave, future-dated | Cut access at leave start, or a grace period? | High |
| Exit-1 | Exit, rescind & rehire | 110, 113–114 | Hire rescinded right at first login | Account shouldn't exist, or exist but "blocked"? | Low |

**Ask:** make real calls on as many as we can today.

**Mobility-2 (rows 115–116, CUS Posting = Common User Scheme):** AGD and MTI are both onboarding to POCDEX, at later stages than the pilot — test case needs an interim-state variant alongside the fully-onboarded one. One open item: the scheme's actual eligibility/posting rules — POCDEX doesn't have those defined yet. Doesn't block writing the test case.

**2 ready to test, no decision needed:**

| ID | Category | Row # | Situation | What the officer should experience |
|---|---|---|---|---|
| Job-1 | Job, position & employment | 46–55, 64–65 | Job title/team changes, profile doesn't update | Sees real, current job |
| Mobility-1 | Mobility | 2–3, 23–37, 68 | Seconded, same data source | New agency shows immediately |

---

## 4. Open items before the 28th

*Fill in Who/When live.*

| # | What | Who | When |
|---|---|---|---|
| 1 | Drive the 5 decisions in section 3 | | |
| 2 | Update Mobility-2's test case (rows 115–116) for AGD/MTI's interim onboarding state | | |
| 3 | Write Population-1, the contingent-worker test case (rows 58–60, 69) | | |
| 4 | Write Exit-2/Exit-3, the leave/rejoin (rows 11–15) and delete/recreate (rows 74–76) test cases | | |
| 5 | Write final cases into the tracker | | |

All 3 previously-open questions (leave/rejoin, delete/recreate, contingent workers) are resolved — no BO decision needed. Detail: [proposed-pocdex-test-cases-for-bos.md](../analyses/2026-08-26-W35-proposed-pocdex-test-cases-for-bos.md). Source row data: [pocdex-p1-test-data-source.md](../analyses/2026-08-26-W35-pocdex-p1-test-data-source.md).

---

## 5. If time allows

Backdated employment corrections — assuming Compass access stays unchanged throughout, unconfirmed.

---

## Appendix A: Assumptions, risks, and mitigations

| # | Assumption | Risk if wrong | Mitigation |
|---|---|---|---|
| 1 | Section 2's question gets settled today | Largest coverage gap stays untestable | Named owner + hard date if not resolved live |
| 2 | AGD/MTI onboarding — resolved, both onboarding at later stages than the pilot | Officers could see broken/blank profiles until onboarding completes | Mobility-2 needs an interim-state test variant |
| 3 | CUS (Common User Scheme) eligibility/posting rules — open, POCDEX's own test data doesn't define them | Test case built against an assumed rule set | Ask POCDEX for the actual scheme rules; non-blocking |
| 4 | 28 Aug is fixed, not negotiable | Jam optimizes for speed over decision quality | Confirm with Adrian if the date can flex |

**Why these 8:**

| # of cases | What goes wrong | Kept |
|---|---|---|
| 3 | Officer could see someone else's data, or someone else sees theirs | Full — privacy incident, not a display bug |
| 2 | Someone let in or blocked when they shouldn't be | Highest-frequency variant |
| 3 | Officer's own profile shows wrong job details | Largest cluster + highest-frequency case |

9 lower-priority cases deferred, not dropped. P2 (backend timing/backdating) has zero proposed cases — a real gap, not solved just because P1 has coverage.

**Two small, non-blocking questions from POCDEX's own test data:** why MOE appears in a secondment example; whether there's more to know about officers with mixed WOG & MHA jobs. Neither affects any of the 8 cases' pass conditions.

---

## Appendix B: Which test cases also matter for the Ops Portal

BOs will use the Ops Portal to investigate officer data issues. Detail: [2026-08-14-W33-ops-portal-prd.md](../prds/2026-08-14-W33-ops-portal-prd.md).

| Case | What a BO would see if unhandled |
|---|---|
| Wrong-person data exposure | Two related records, no rule for which one wins |
| Name, email, or ID change cases | Update may not surface as a flagged case at all |
| Rejoin / delete-recreate | History could look duplicated or attached to the wrong record |

**Ask:** log these as open items on the Ops Portal PRD too?
