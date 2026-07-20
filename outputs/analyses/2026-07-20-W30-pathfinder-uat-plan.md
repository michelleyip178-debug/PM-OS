# Pathfinder UAT Plan — CareerCompass MVP

**Owner:** Michelle Yip (PM, Pathfinder)

**Scope:** Pathfinder squad only (Opportunities: Login, Listing, Detail, Filter, Search, Apply)

**Status:** Draft — for review before Phase 0

---

## 1. Purpose & Scope

**What UAT is for:** validating that Pathfinder's shipped scope meets business intent end-to-end — officers can discover, filter, and apply to opportunities the way BOs expect, and posting-adjacent flows (auth, ringfencing) hold up under real business scenarios.

**What UAT is NOT for:** catching bugs that story-level QA should already have caught. If an issue could have been detected via component/story QA without needing an external dependency, it should not first surface here.

**In scope for Pathfinder UAT:**
- Login / authentication (Keycloak-backed, WOG AD swap pending)
- Opportunities listing (browse, sort, pagination)
- Filtering (type, job family) and search
- Opportunity detail page (including ringfenced/ineligible states)
- Apply via FormSG (redirect flow only — no webhook, per the 2026-07-20 scope-cut decision on OTEP-130)
- Empty/error/closed-opportunity states

**Out of scope for this plan:**
- Core squad scenarios (Profile, competency data, JumpStart) — separate plan, Imelda owns
- Products integration / read-replica risk — cross-squad dependency, tracked separately, not a Pathfinder execution item
- Anything not yet shipped to Done/QA as of plan lock date (see Section 5, Readiness Gate)

---

## 2. RACI

| Role | Accountable for | Not accountable for |
|---|---|---|
| **PM (Michelle)** | Scenario intent, business-outcome framing, sign-off criteria, reconciling scope against the sprint board | Deep technical test steps, raw test data creation |
| **QA** | Story-level AC verification prior to UAT, coverage-gap advice on scenarios, pre-UAT confidence check | Authoring or re-authoring UAT scenarios |
| **Tech Leads (Pow Hwee, Léo, Thomas)** | Environment stability, test data aligned to personas, timely defect fixes within agreed severity | Scenario design, BO communication |
| **BOs (named executor(s) TBC)** | Executing scenarios, judging pass/fail against business intent, providing MVP-readiness sign-off | Designing test cases, root-cause debugging |
| **UAT Coordinator (Rama, cross-squad)** | Readiness gatekeeping, daily defect triage, deployment freeze discipline | Pathfinder-specific scenario content |

**Open action:** BO executor(s) for Pathfinder scenarios not yet named — needed before Section 5's gate can be marked complete.

---

## 3. Test Case Format

One test case = one meaningful business outcome. Every case carries 5 fixed elements:

1. **Scenario intent** — the business outcome being proven
2. **Persona/account** — who, realistically
3. **Test steps** — BO-friendly, no technical jargon
4. **Expected outcome**
5. **Pass/fail criteria**

**Existing test case inventory (already drafted, reference not duplicate):**
- [Pathfinder UAT Test Cases](../2026-07-17-W29-pathfinder-uat-test-cases.md) — shipped scope, Sprints 1–5
- [AC-to-Test-Case Coverage Audit](../2026-07-17-W29-ac-to-test-case-coverage-audit.md) — coverage gap analysis

**Action before Phase 0:** re-run the coverage audit against Sprint 6's final Done list (42 stories as of 2026-07-20 live pull) — the existing test case doc was drafted against Sprint 5 shipped scope and needs a pass for anything Sprint 6 added.

---

## 4. Test Case "Ready for BO" Checklist

Section 3 defines the *format* a test case must follow. This section defines when an individual test case is actually fit to hand to a BO — distinct from Section 5's environment-level gate. A test case is **not** ready for BO execution until every item below is true.

| Check | Why it matters |
|---|---|
| **No technical jargon in any step.** Steps read as actions a business user takes, not system/API/DB language (e.g. "click Apply," not "trigger the OTEP-130 redirect handler"). | BOs are validating business intent, not implementation. Jargon signals the case was written for QA, not UAT. |
| **Persona is named and mapped to a real, reserved test account** — not a conceptual description. | The Operating Model's "reserved, non-mutated profiles" rule exists because a BO re-testing a scenario with data that changed mid-cycle produces false failures. Confirm the account exists and is untouched before handing the case over. |
| **Pre-conditions are executable by the BO themselves**, or explicitly staged for them in advance (e.g. "listing must contain ≥5 open opportunities" — confirm this is true in the UAT environment, don't assume). | A BO who can't get to the starting state can't run the case at all. Pre-conditions that require engineering setup must be confirmed done, not left as an assumption in the test case text. |
| **Expected result is a single, unambiguous outcome** — not "should work correctly" or multiple possible correct states without a rule for which applies. | Ambiguous expected results force the BO to guess at pass/fail, which defeats the purpose of BO-executed testing. |
| **Pass/fail criteria are binary and don't require technical judgment.** If judging pass/fail requires knowing *why* something happened (root cause), the case is written at the wrong altitude. | Per the RACI (Section 2), BOs are not accountable for root-cause debugging — a case that requires it is really a QA case in UAT clothing. |
| **AC Reference traces to a story that is actually Done or QA-complete in Jira**, not In Progress or Backlog. | Testing against unfinished work wastes BO time and produces defects that are really "not built yet," not real failures. Cross-check against the live sprint board before handing over, not just at the point the case was originally drafted. |
| **Case has been through at least one internal dry-run** (PM or QA walks through the steps once) before it reaches a BO. | Catches broken pre-conditions, missing test data, or steps that don't match the actual UI — cheap to catch internally, expensive to discover with a BO's limited time. |
| **Severity/impact is implicitly clear from the scenario** even before execution — a BO shouldn't need PM/QA to explain why this scenario matters. | Ties back to Section 6's sign-off rule: BOs are judging "does this meet our expectations for MVP," which requires understanding what's being tested and why, not just following steps mechanically. |

**Process implication:** before any batch of test cases is sent to named BO executors, the PM runs this checklist against each case and marks it 🟢 Ready or 🔴 Needs rework — cases don't go to BOs individually as they're written, they go as a reviewed, gated batch. This is the same "no partial starts" principle as Section 5's environment gate, applied at the test-case level instead of the environment level.

**Current status:** the existing [Pathfinder UAT Test Cases](../2026-07-17-W29-pathfinder-uat-test-cases.md) doc has Actual Result / Pass/Fail / Tested By fields still blank (expected, pre-execution) — but hasn't yet been explicitly checked against this list. Run this checklist against that doc before Phase 0, in the same pass as the Sprint 6 coverage re-audit noted above.

---

## 5. Readiness Gate — "Ready for UAT"

UAT does not start until **all** of the following are true. No partial starts.

| Condition | Status as of 2026-07-20 | Owner |
|---|---|---|
| SIT completed for in-scope stories | 🟡 Confirm against Sprint 6 close (26 Jul) | QA |
| All external integrations connected (login/auth, OTG ingestion, C@G API) | 🟡 Confirm — OTG UAT read-replica data quality flagged unclean (open item #33) | Pow Hwee / Daryll |
| Environment stable | 🔴 Not yet confirmed | Pow Hwee |
| Test accounts / persona data prepared and reserved (non-mutated during UAT) | 🔴 Not yet confirmed | Tech Leads |
| External teams briefed on freeze window | 🔴 Not yet communicated externally | Rama |
| BO executor(s) named | 🔴 Not yet named | Michelle |

**Do not schedule BO time until this table is all-green.** A partial start risks discovering blocking gaps after BO time is already committed — the exact failure this gate exists to prevent.

---

## 6. Severity & Sign-off Rules

- **Critical/High defects:** must be resolved before sign-off. No exceptions.
- **Medium/Low defects:** risk-assessed jointly by PM + Tech Lead; does not auto-block sign-off.
- **Sign-off criteria:** BO explicit statement — "this meets our expectations for MVP" — not a defect count alone. A clean defect count without this statement is not sign-off.

---

## 7. Personas

Use existing shipped-scope personas from the CareerCompass UAT test case doc (Priya as default standard officer for Pathfinder flows). If ringfencing/ineligible-state scenarios need a distinct persona (officer with incomplete profile data, or explicitly ineligible officer), define and reserve those test accounts explicitly before Phase 0 — this is not yet done and is a named risk (ringfencing behavior against incomplete profile data is currently untested, per the 2026-07-20 launch checklist).

---

## 8. Phasing

| Phase | Scope | Target dates | Gate |
|---|---|---|---|
| Phase 0 | Login + Opportunities Explore (browse, detail) — shipped, stable scope | Per programme UAT window (11–14 Aug per current plan) | Section 5 all-green |
| Phase 1 | Filter, Search, Apply (FormSG redirect) | Following Phase 0 | Phase 0 sign-off + no new Critical/High from Phase 0 |

**Timeline risk (inherited, not resolved by this plan):** the 11–14 Aug Phase 0 window is 4 days. If Section 5's readiness gate is enforced literally, confirm this window is achievable given current status (3 of 6 conditions still 🔴 as of this draft) before treating the date as fixed.

---

## 9. Defect Triage Cadence

Daily defect triage during UAT execution, per the UAT Coordinator's (Rama) cross-squad process. Pathfinder-specific defects route to the relevant Tech Lead (Pow Hwee/Léo/Thomas depending on area) same-day.

---

## 10. Open Questions Before This Plan Is Final

1. Who are the named BO executor(s) for Pathfinder scenarios specifically? (Cross-squad notes name Chris and Xian Sheng as primary UAT executors overall — confirm if they cover Pathfinder or if a separate name is needed.)
2. Does this plan sit alongside or get folded into the cross-squad UAT Operating Model, given both cover overlapping ground (readiness gates, RACI, defect flow)? This plan was drafted standalone per this week's ask — reconcile before Phase 0 if a single governing document is preferred.
3. Ringfencing test personas (incomplete/ineligible profile data) — not yet defined. Needed before Section 5 can close.
4. Section 4's "Ready for BO" checklist hasn't been run against the existing Pathfinder test case doc yet — do this alongside the Sprint 6 coverage re-audit, before any cases go to named BO executors.

---

*Generated: 2026-07-20*
*Sources: [Pathfinder UAT Test Cases](../2026-07-17-W29-pathfinder-uat-test-cases.md), [opportunities-listing.md PRD](../../context-library/prds/opportunities-listing.md), sprint-status.md (2026-07-20 live pull), open items #33/#57 (00-hub/open-items.md)*
*Next: Close Section 5's readiness gate items, run Section 4's checklist against the existing test case doc, name BO executor(s), then this plan is ready for Rama/Adrian review.*
