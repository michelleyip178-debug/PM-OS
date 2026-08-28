# POCDEX Compass Test Plan — 82 P1 Cases

Our analysis and requirements for POCDEX test data and scenarios (real HRIDs/POCDEX UIDs), the prioritised P1 subset of the 118-row workbook. P2 (27 cases, backend timing/backdating) and P3 (3 cases, cosmetic) are out of scope for this doc — summary only, at the bottom.

---

## The 82 P1 cases, by lifecycle category

| Category | Cases | Share | Coverage included |
|---|---|---|---|
| Job, position & employment changes | 33 | 40.2% | Job function/family/grade, titles, positions, job changes, missing data |
| Mobility: transfer & secondment | 24 | 29.3% | Transfers, secondments, end-secondments, deployments, CUS postings |
| Identity & contact changes | 9 | 11.0% | FIN/NRIC/HRID, email/name changes, duplicates, identifier collisions |
| Exit, rescind & rehire | 8 | 9.8% | Termination, corrections, rescinds, last-day extraction, rehire |
| Leave / NPL | 4 | 4.9% | Future NPL, concurrent-system NPL, return from NPL |
| Population eligibility & exclusions | 4 | 4.9% | Contingent-worker and worker-population inclusion/exclusion rules |
| **Total** | **82** | **100%** | |

---

## By officer impact

### Group 1: Officer sees someone else's data, or someone else sees theirs (highest stakes)

| Category | Scenario | Residual risk if untested |
|---|---|---|
| Identity & contact | New hire reuses a departed officer's email | Cross-officer data exposure — privacy/security incident |
| Identity & contact | Same email, different officer, different HR systems | Wrong person sees wrong data under a real login |
| Identity & contact | Same officer, different email in different systems | Identity confusion, support escalation with no resolution path |
| Identity & contact | FIN→NRIC (incl. HRID) changes | Officer locked out, or resolves to the wrong record |

### Group 2: Officer let in, or blocked out, incorrectly

| Category | Scenario | Residual risk if untested |
|---|---|---|
| Leave / NPL | NPL, incl. concurrent records disagreeing across 2 systems | Unauthorized access during a restricted period |
| Population eligibility | Contingent-worker inclusion/exclusion (Cumulus/TIVO/HRP) | Unauthorized access, or a valid officer wrongly excluded |
| Exit, rescind & rehire | New hire rescinded (incl. backdated) | Non-employee could retain access to an officer profile |
| Mobility | Secondment out of HRP/Cumulus (out of POCDEX scope) | Officer sees a role they no longer hold |

### Group 3: Officer's own profile shows the wrong job details (largest volume)

| Category | Scenario | Residual risk if untested |
|---|---|---|
| Job, position & employment | Job info changes without a Position ID change | **Largest single gap** — 12 of 82 cases, zero UAT coverage |
| Mobility | Secondment (within or cross HR system) | High-frequency; cross-system handoffs are highest complexity |
| Mobility | Transfer (within or cross HR system) | Same complexity concern as secondment |
| Job, position & employment | Position ID change | Common trigger tied to transfers and role changes |
| Job, position & employment | Job grade change (incl. blank→populated) | Visible, checkable — easy for officer to notice and escalate |
| Job, position & employment | Business/employment title change | Visible on profile card |
| Identity & contact | Email and name change | High-visibility personal-detail error |
| Job, position & employment | Missing job function/family/grade/competency info entirely | Blank profile reads as broken |
| Mobility | CUS Posting (Common User Scheme) | Onboarding timing resolved (AGD/MTI, later stages than pilot); scheme eligibility/posting rules still open |
| Job, position & employment | Mixed WOG/MHA job indicators | Feeds role recommendations and competency matching downstream |

---

## Test cases mapped to the 82

7 need a BO decision; the rest are ready once data prep is done. Most trace to a case in our analysis — only Population-2 (proving a legitimate officer's first login works) is net-new.

### Group 1: Officer sees someone else's data, or someone else can see theirs

All 3 need a BO decision — privacy/security incidents if untested.

| ID | Category | Row # | What the officer experiences | Decision needed | Test data | Pass condition |
|---|---|---|---|---|---|---|
| **Identity-1** | Identity & contact | 88–90 | New officer logs in, sees a departed officer's data — assigned that officer's old email | Does email reuse fall under the existing MVP exclusion, or is it a distinct must-handle case? | Officer A (terminated); Officer B (new hire, A's former email) | B sees only their own current data |
| **Identity-2** | Identity & contact | 85–86 | Officer gets blocked, or sees a mix of both people's job data | Block with an error, or resolve to the correct record — procedurally how? | Two HRIDs, same email, different source systems | Clear blocking error, or clean resolution — silent mixing must fail |
| **Identity-3** | Identity & contact | 87 | Same officer, different email, sees a different version of their own profile | Which email is authoritative? | One officer, two source-system records, two emails | Both logins resolve to one consistent identity |

### Group 2: Officer is let in — or blocked out — incorrectly

3 need a BO decision; Population-2 is ready to test.

| ID | Category | Row # | What the officer experiences | Decision needed | Test data | Pass condition |
|---|---|---|---|---|---|---|
| **Leave-1** | Leave / NPL | 41–44, 91 | Loses access instantly when NPL starts, or keeps access when they shouldn't | Immediate cutoff, or a grace period? | One officer, future-dated NPL start | Matches BO-confirmed policy, consistently |
| **Leave-2** | Leave / NPL | 41–44, 91 | Should be blocked on NPL in one system, still gets in via the other | Which system's status wins when they disagree? | One officer, active in System A, NPL in System B | Matches a BO-defined precedence rule |
| **Exit-1** | Exit, rescind & rehire | 110, 113–114 | Hire cancelled — can't log in (correct), or gets into a profile that shouldn't exist | Account shouldn't exist, or exist-but-blocked? | New-hire record created then rescinded near first login | Login fails cleanly — no partial profile |
| **Population-2** *(ready)* | Population eligibility | — | A real eligible officer simply logs in and gets their profile | — | One eligible officer, whitelisted pilot agency | Logs in successfully, sees correct profile |

### Group 3: Officer's own profile shows the wrong job details

1 (Mobility-2) has one small open item; 7 are ready to test.

| ID | Category | Row # | What the officer experiences | Decision needed | Test data | Pass condition |
|---|---|---|---|---|---|---|
| **Mobility-2** *(1 open item)* | Mobility | 115–116 | Officer under CUS scheme (Common User Scheme) sees missing/wrong posted agency | AGD/MTI onboarding timing resolved — needs interim-state test variant. Open: the scheme's actual eligibility/posting rules — POCDEX, non-blocking. | CUS officer, parent MDDI (onboarded — pilot agency) / AGD or MTI (interim, not yet in pilot) | Correct posted agency shown; interim case degrades gracefully |
| **Job-1** *(ready)* | Job, position & employment | 46–55, 64–65 | Job function/family changed, Compass still shows old — wrong recommendations too | — | Officer whose job title/function/family changes, Position ID same | Profile + recommendations reflect new role — largest gap: 12 cases, zero coverage |
| **Mobility-1** *(ready)* | Mobility | 2–3, 23–37, 68 | Seconded, Compass still shows old posting | — | Officer seconded, same HR system | Current seconded agency/role shows as primary |
| **Mobility-3** *(ready)* | Mobility | 38–40 | Cross-system secondment — profile could go stale or blank | — | Officer seconded HRP↔Cumulus | No gap or stale window |
| **Mobility-4** *(ready)* | Mobility | 26–31, 111–112 | Wrong/mixed agency after a permanent cross-system move | — | Officer permanently transferred HRP↔Cumulus | Agency, position, job info fully reflect new agency |
| **Mobility-5** *(ready)* | Mobility | 26–31, 111–112 | Wrong agency after a same-system transfer | — | Officer transferred between two HRP agencies | Agency/position updates correctly |
| **Job-2** *(ready)* | Job, position & employment | 79–82 | Title changed but grade didn't, or vice versa | — | Officer whose Position ID changes | Title, grade, job family/function update together |
| **Identity-4** *(ready)* | Identity & contact | 77–78 | Name/email correction could lock officer out or show a duplicate profile | — | Officer whose name and email are both corrected together | Login succeeds, no duplicate profile, no lost history |

### Group 4: Identity changes that shouldn't disrupt the officer at all

Both ready to test.

| ID | Category | Row # | What the officer experiences | Test data | Pass condition |
|---|---|---|---|---|---|
| **Identity-5** | Identity & contact | 70–71 | Ideally nothing. If it fails: treated as a new person, loses access | Officer whose ID type changes FIN→NRIC mid-employment | Profile, history, access continue uninterrupted |
| **Identity-6** | Identity & contact | 72–73 | Same as Identity-5, compounded | Officer whose ID and HRID both change together | Continuity preserved, no duplicate/orphaned profile |

### Resolved, no case needed

| ID | Category | Row # | Resolution |
|---|---|---|---|
| Exit-2 | Exit, rescind & rehire | 11–15 | ✅ Officer leaves and rejoins — covered under existing rehire rows |
| Exit-3 | Exit, rescind & rehire | 74–76 | ✅ Accidental delete/recreate — same underlying scenario as Exit-2, covered under existing rehire rows |
| Population-1 | Population eligibility | 58–60, 69 | ✅ Contingent-worker eligibility — POCDEX provides the officer list based on whitelisted agencies Compass shares with them |

---

## Decision ownership

| Case | Category | Risk | Owner |
|---|---|---|---|
| Identity-1, Identity-2, Identity-3 | Identity & contact | Wrong-person data exposure | BO — bundle into one conversation |
| Leave-1, Leave-2 | Leave / NPL | Access grant/denial during NPL | BO |
| Exit-1 | Exit, rescind & rehire | Lingering access after rescind | BO |
| Mobility-2 | Mobility | CUS (Common User Scheme) eligibility/posting rules | POCDEX — informational, non-blocking |

10 cases are ready with no open decision, pending POCDEX seeding the data.

---

## Recommendations

1. **Close Group 1 first.** Only cases where the failure mode is another person's data appearing under a real login.
2. **Group 3's job-info cluster is the biggest coverage hole** — 12 cases, zero current UAT coverage, the change officers will see most often post-launch.
3. **Close Mobility-2's remaining open item:** CUS (Common User Scheme) eligibility/posting rules — non-blocking, but worth a plain-language answer.

---

## Open items

- [open-items.md #60](../../../PM-skills-ALL-1/00-hub/open-items.md) — POCDEX Day 2 test case scoping, due 28 Aug, owned with Imelda Mo
- CUS (Common User Scheme) eligibility/posting rules — route to POCDEX; non-blocking for Mobility-2
- Data-prep coordination ownership (Compass ITC vs. joint POCDEX ask) — confirm at the jam

---

<details>
<summary>Appendix: P2/P3 summary, background, and out-of-scope detail</summary>

**P2 (27 cases, 23% of 118) — mostly invisible to the officer, if handled correctly:** backend timing/backdating corrections. Assumed access stays clean until last day — unverified anywhere in the dataset. ⚠️ Rows 97–99 (rescind of termination before effective date) show a plausible path for that assumption to be wrong, which would reclassify those cases into P1.

**P3 (3 cases, 3% of 118) — cosmetic:** job function/family description wording, one same-day start/end edge case. No dedicated tooling needed.

**Pilot sizing (6 agencies, ~5,270–5,342 officers):** 90 officers (1.7%) sit in the lifecycle-risk population — 71 duplicate/multi-hat identities, 19 with no email on record. A further 279 are missing job metadata entirely. Whole-of-government: 1,905 officers (1.25%) duplicate/multi-hat, 274 spanning two HR systems at once.

**Existing UAT coverage patterns (against full 118-row set):**

| Pattern | Status | Note |
|---|---|---|
| NPL access-gating | NO COVERAGE | None of the existing UAT tickets touch NPL |
| Population/whitelist inclusion side | PARTIAL | Exclusion side tested (OTEP-1379/1380); inclusion side had no proving case |
| Identifier changes (FIN/NRIC/HRID) | NO COVERAGE | Existing UAT tests never vary identifiers |
| Identity/multi-agency (same email, reused email) | OUT OF SCOPE (PRD) | Existing capability table explicitly excludes this from MVP |
| Employment-event data changes | NO COVERAGE | Existing UAT tests display of already-loaded data, not whether the change event was detected |
| CUS Posting | NO COVERAGE | Onboarding status now resolved (AGD/MTI, later stages) |
| Backdating/rescind/terminate timing | NO COVERAGE | None of the existing UAT tickets touch this |
| Cosmetic/low-risk fields | NO COVERAGE (low risk) | No dedicated tooling needed |

**Derived Ops/engineering requirements (not officer-facing):**
- Exception queue for NPL-blocked API responses with a cross-system status timeline
- Discrepancy/reconciliation view for population scoping (inclusion side)
- Multi-identifier lookup with audit trail across ID/HRID changes
- Proactive email-reuse check at record creation, feeding a duplicate/identity-conflict tool
- CC vs. Ops discrepancy view + effective-dated officer timeline
- Patch/override workflow with reversibility for backdating cases, plus a monitoring check on the access-stays-clean assumption

**"Last modified date" / trigger-detection mechanism (RAID R11):** the employment-event coverage gap is the same underlying issue as the last-modified-date business rule — the existing UAT set never tests whether a change event is detected. The field itself is confirmed added to the Data Sharing Form; whether/how Compass uses it as a detection trigger is a separate, still-open engineering/architecture question the officer-facing test cases above don't depend on.

**Provenance:** the 118-row workbook (of which these 82 are the P1 subset) builds on Compass's original 20/21-persona test plan, expanded with additional scenarios — a joint artifact, grounded in Compass's original scope and requirements.

**Related:** [proposed-pocdex-test-cases-for-bos.md](2026-08-26-W35-proposed-pocdex-test-cases-for-bos.md) (standalone test-cases doc), [2026-08-25-W35-raid-log.md](2026-08-25-W35-raid-log.md) (R11).

</details>
