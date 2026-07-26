---
date: 2026-07-24
week: 2026-W30
topic: UAT Operating Model — CareerCompass (reference draft, merges the prior Operating Model + Rama's draft into one owning document)
status: draft — needs RACI sign-off from every named party before this can be called final
---

# UAT Operating Model — CareerCompass

**Note on scope:** this is the governance rulebook (RACI, standards, rules, readiness gate) — it is not a day-by-day execution schedule. A separate **UAT Execution Plan** (sequencing Phase 0 and module rollout against dates) is still needed and doesn't exist yet.

**Owner:** Michelle Yip (PM, scenario intent) + Rama Moorthy (UAT Coordinator, readiness gatekeeping)

**Status:** Draft. Not final until every name in the RACI below has explicitly confirmed acceptance — silence in a meeting does not count as sign-off.

**Supersedes:** Rama's "UAT Plan Overview" draft and the 2026-07-17 "UAT Operating Model" one-pager. Both covered the same ground independently; this merges them into the single document either should have been from the start.

---

## 1. Scope Boundary

**UAT covers end-to-end business flows and external integrations only.**

**The test:** if an issue could have been caught by story-level QA without any external dependency, it is not a UAT scenario — it belongs in grooming or QA, and gets routed back there, not carried into UAT as unresolved ambiguity.

**What this means in practice:**
- ✅ In scope: an officer logging in via WOG AD, browsing opportunities, seeing the right ring-fenced results, applying via FormSG — the full journey, touching real integrations.
- ❌ Out of scope: whether a button is the right shade of green, whether an individual component renders correctly in isolation, whether a single field validates — these are QA's job, verified before a story is even eligible for a UAT scenario.

**Gate to enter UAT scenario-writing:** a story must have zero open Jira comment-thread questions before a UAT scenario gets written against it. An open question ("what should happen on X edge case?") is a QA/grooming gap, not something UAT should discover live.

---

## 2. RACI

One accountable name per row. No shared cells — where this quarter's actual RACI had a real gap (the authentication readiness condition listing both Pow Hwee and Adrian Lo), that gap is called out explicitly below, not smoothed over.

| Condition / Activity | Accountable (one name) | Contributes | NOT accountable for |
|---|---|---|---|
| Scenario intent, user-journey framing, BO sign-off criteria (Pathfinder) | Michelle Yip | QA (coverage advice) | Technical test steps, raw data creation |
| Scenario intent, user-journey framing, BO sign-off criteria (Core) | Imelda Mo | QA (coverage advice) | Technical test steps, raw data creation |
| Story-level AC verification, SIT, pre-UAT confidence checks | QA lead (Rathika Ramalingam) | — | Driving BO-facing UAT execution, re-authoring scenarios |
| Test data + persona provisioning, environment stability | Tech Leads (per squad) | — | Scenario design |
| **Authentication readiness (WOG AD)** | ⚠️ **UNRESOLVED — pick one: Pow Hwee or Adrian Lo** | — | — |
| Products/POCDEX data readiness | Rama Moorthy (coordination) / Products-DO (delivery) | — | — |
| Readiness gatekeeping, daily defect triage, external dependency coordination, freeze discipline | Rama Moorthy | — | — |
| Executing scenarios, validating against policy intent, pass/fail evidence | BOs (named per module) | — | Designing test cases, debugging root causes |

**Cross-squad scenario ownership:** each PM (Michelle, Imelda) owns their own squad's scenarios independently. There is no single cross-squad UAT owner — Rama's Coordinator role is the layer that sits above both, not a merge of the two scenario-authoring roles. Stated explicitly here so it never has to be re-asked mid-execution.

**Action before this plan is final:** resolve the authentication readiness row. One name, picked this week, not "risk-assessed jointly."

---

## 3. Test Case Standard

Every UAT scenario contains exactly 5 elements. No exceptions, no scenario goes into the plan without all 5.

| Element | Requirement |
|---|---|
| Scenario intent | One sentence: the business outcome being validated, not the technical mechanism |
| Persona / account | A named persona ID from the shared Personas page — never an inline description |
| Steps | BO-friendly, numbered, no jargon, no internal field names |
| Expected outcome | Plain-language description of what a BO should see |
| Pass/fail criteria | Explicit, binary, no room for interpretation |

**Worked example:**

| Element | Content |
|---|---|
| Scenario intent | An officer who qualifies for a restricted opportunity can see and apply to it |
| Persona | Eligible Officer (P3) |
| Steps | 1. Log in as P3. 2. Navigate to the opportunity listing. 3. Open the restricted opportunity. 4. Click Apply. |
| Expected outcome | The opportunity appears in the listing, the detail page loads with no restriction notice, and the Apply button is active |
| Pass/fail | Pass = all three (visible, accessible, applyable). Fail = any one missing |

**Rule:** any test case that doesn't fit this shape gets rewritten before it enters the plan — never patched with an extra ad-hoc column mid-execution.

---

## 4. Personas

Referenced by ID only — see [Test Personas — Pathfinder + Core](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2487747944) for the full, shared list. One page, one source, used by every squad's scenarios — never independent per-squad persona lists that need reconciling after the fact.

**Data setup ownership:** Imelda, per the shared Personas page. Two personas are blocked until WOG login is built (Profile Setup Delay/Issue Officer, No Platform Access Officer); one (Seconded/Double-Hatted Officer) needs a DO confirmation before setup can start. Flagged here so the readiness gate (Section 6) inherits this dependency directly rather than discovering it separately.

---

## 5. Defect Severity Rule

| Severity | Rule |
|---|---|
| Critical / High | Must be fixed before sign-off. No exceptions, no override. |
| Medium / Low | Risk-assessed jointly by **Michelle/Imelda (PM) + Rama (Coordinator)** — named here, not left as "jointly" with no parties specified. Documented decision per item, not a verbal call. |

**Sign-off statement required from each BO module owner:** "This meets our expectations for MVP" — a qualitative judgment, sitting alongside the defect-severity floor above, not a replacement for it. Both must be true to sign off.

---

## 6. Readiness Gate

UAT cannot start until all five conditions are true. Status below is as of **2026-07-24** — stated honestly, including where it conflicts with the scheduled start date, rather than asserting the gate is met when it isn't.

| Condition | Status (2026-07-24) | Owner | Target date |
|---|---|---|---|
| SIT completed | Not confirmed complete | Rama | Before UAT start |
| Integrations verified (WOG AD, POCDEX, C@G, FormSG) | Partial — C@G working end-to-end; WOG AD auth still gated on Keycloak client config (no ETA); POCDEX data commitment from Products/DO still unconfirmed | Rama (coordination) / Léo (Keycloak) / Products-DO (data) | ⚠️ No date — this is the sharpest open risk |
| Environment stable | 🔴 Red — manual env var/secret drift observed, no change-control mechanism yet | Pow Hwee | Not yet defined |
| Test accounts validated | Partial — 4 core personas (P0-P6 family) can be created now; 2 blocked on WOG login build; 1 (seconded officer) blocked on DO confirmation | Imelda | Tied to WOG login + DO response |
| External teams briefed and on standby | Not confirmed | Rama | Before UAT start |

**Honest read against the schedule:** UAT is currently dated 11 Aug – 4 Sep (staggered: Profile + Opportunities from 11 Aug). Given the integrations and environment conditions above are not yet green, **this gate cannot currently certify an 11 Aug start** on a literal reading of its own rule. This is stated here explicitly rather than left as a gap discovered later — same principle as the "no surprises" rule this gate is built on. If 11 Aug holds anyway, that's a conscious risk-acceptance call by Rama/Adrian, not an assumption this document should quietly carry.

**Separately flagged (2026-07-24, senior bi-weekly):** the broader MVP timeline itself is now in question — VAPT vendor (NCS) unavailable until mid-September compresses hard against the current 7 Sep–16 Oct VAPT window and 2 Nov release date, and senior stakeholders are informally treating November as more credible than October. This UAT gate's own schedule risk is a symptom of that larger timeline problem, not a separate issue — the two should be resolved together, not tracked in parallel documents.

---

## 7. External Dependencies

Tracked here, inside the plan, not in a separate list that needs cross-referencing.

| Dependency | Owner | Status | Needed by | Escalation trigger |
|---|---|---|---|---|
| WOG AD Keycloak client config | Léo | In progress, no ETA | Before auth readiness can go green | If no ETA within 1 week, escalate to Adrian |
| POCDEX/Products data commitment | Products/DO (via Rama) | Not committed | Before test-account validation completes | Already flagged this week (Handover meeting) — whitelisting ownership (Products vs. Compass) is the blocking sub-question |
| Environment change-control mechanism | Pow Hwee | Not yet defined | Before environment condition can go green | Rated 🔴 Red already — escalate if no mechanism by next standup |
| VAPT vendor scheduling (NCS) | Rama / Barry | Unavailable until mid-Sep | Before VAPT can start | Already escalated to senior leadership 2026-07-24 |

---

## 8. Non-Negotiables

- UAT is guided validation, not exploratory chaos.
- BO time is scarce — every scenario must be simple and unambiguous, no exceptions for "just this once."
- Ambiguity in ownership is a guaranteed failure — if a RACI row has two names or no name, this plan is not final.
- Alignment before UAT matters more than speed during UAT — a rushed start against a red readiness gate creates rework, not time saved.

---

## How This Differs From How It Actually Happened This Quarter

This document exists as the reference version of what should have been written at release kickoff — before test cases, before persona work, before scenario drafting began. What actually happened:

- The Operating Model was written 2026-07-17, in Sprint 6, after weeks of test-case and persona work were already underway — meaning several artifacts needed a retroactive "re-audit against the 5-element standard" that a from-day-one plan would never have required.
- Two competing documents (Rama's draft, the Operating Model) existed in parallel and were never formally reconciled — this document is that reconciliation, done once, instead of left open.
- The authentication ownership gap (Pow Hwee vs. Adrian Lo) was identified and explicitly named as violating the plan's own principle, then left unresolved with a soft "this week" deadline — still open as of today. Section 2 above surfaces it as a blocking action, not a footnote.
- The readiness gate was written stricter than the known state of external dependencies, without an honest read against the schedule at the moment of writing — Section 6 above states that conflict directly instead of letting it surface later as a surprise.

**The fix going forward isn't a better document — it's writing this one earlier, getting every RACI name to confirm in writing, and treating "gate says red" as an immediate escalation trigger the day it's true, not a fact to discover at UAT execution.**
