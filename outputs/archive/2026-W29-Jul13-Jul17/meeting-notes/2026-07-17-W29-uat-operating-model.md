---
date: 2026-07-17
week: 2026-W29
meeting_type: internal-planning
topic: Career Compass UAT Operating Model
---

# Meeting Notes: UAT Planning (Internal) — Career Compass UAT Operating Model

**Date:** 2026-07-17

**Type:** Internal planning — UAT operating model definition

**Format:** One-pager (provided as structured document, not raw transcript)

---

## Summary

This session produced a formal UAT Operating Model for CareerCompass — the governing document for what UAT is/isn't, who's accountable for what, the required shape of every test case, environment readiness gates, and defect management rules. It resolves several ambiguities that had been surfacing informally across UAT prep work this week: what belongs in UAT vs. QA/SIT, who authors scenarios, and what "Ready for UAT" actually requires.

---

## Decisions Made

1. **UAT scope is bounded to end-to-end MVP flows and external integrations — not component-level defect discovery**
   - **Why:** Prevents UAT from absorbing QA's job. Guardrail stated explicitly: "If an issue could have been detected via story-level QA without external dependencies, it should not first surface in UAT."
   - **Impact:** Directly resolves the ambiguity flagged earlier this week when deriving test scenarios from Sprint 5/6 Jira tickets — those were correctly QA-level, not UAT-level, and this model confirms that split.

2. **PM owns scenario intent; QA advises coverage; Tech Leads supply data; BOs review before UAT starts, not during**
   - **Why:** Clear authorship model, stated as "PMs own scenario intent → QA contributes coverage knowledge → Tech leads supply data requirements → BOs review scenarios before UAT starts."
   - **Impact:** Confirms the approach already taken in this week's BO sign-off documents (business-process format, Agree/Needs-change/Not-sure review) — this model formalizes that as the standard, not a one-off choice.

3. **Every UAT test case must contain 5 fixed elements:** scenario intent, persona/account, step-by-step BO-friendly actions, expected outcome, pass/fail criteria.
   - **Why:** "One scenario = one meaningful business outcome" — prevents UAT scenarios from drifting into technical test-case territory.
   - **Impact:** The persona field is now a **required** part of every scenario, not optional detail — this retroactively validates adding personas to the CareerCompass BO doc, and means the Pathfinder-only sign-off doc should get the same treatment if it hasn't already.

4. **UAT cannot start unless five readiness conditions are all true:** SIT completed, integrations verified, environment stable, test accounts validated, external teams briefed and on standby.
   - **Why:** "No Surprises" principle — avoid discovering blocking gaps once BO time is already committed.
   - **Impact:** This is stricter than Rama's draft UAT Plan Overview, which only names authentication as the single blocking dependency (Section 2). This model implies environment stability, integration verification, and external-team readiness are *equally* blocking, not secondary.

5. **Reserved, non-mutated test profiles for UAT** — where Products data can't be freely created, curated realistic profiles must be reserved and left untouched mid-UAT.
   - **Why:** Prevents a BO from re-testing a scenario only to find the underlying data changed mid-cycle.
   - **Impact:** Directly relevant to the persona work already done (Priya, Marcus, Farah, Wei Ling, Daniel, Kumar) — these now need to map to actual reserved POCDEX/test accounts, not just conceptual descriptions.

6. **Severity-based defect resolution rule:** Critical/High must be fixed before sign-off; Medium/Low are risk-assessed jointly (not auto-blocking).
   - **Why:** Prevents low-severity cosmetic issues from stalling MVP sign-off.
   - **Impact:** Gives a concrete answer to something Rama's original UAT Plan draft left ambiguous — its Section 5 "Failed/Blocked" column didn't distinguish severity tiers.

7. **Success criteria for "good UAT" is a BO's explicit statement:** "This meets our expectations for MVP" — not just a defect count.
   - **Why:** Makes sign-off a qualitative business judgment, not purely a checklist pass.

---

## RACI Established

| Role | Accountable for | NOT accountable for |
|---|---|---|
| **PMs** (Michelle, Imelda) | Scenario intent, real-user-journey framing, defining BO sign-off criteria | Deep technical test steps, raw system data creation |
| **QA** | Story-level AC verification, SIT, pre-UAT confidence checks, coverage-gap advice to PMs | Driving BO-facing UAT execution, re-authoring scenarios for UAT |
| **BOs** (Chris, Xian Sheng) | Executing provided scenarios, validating against policy/intent, clear pass/fail evidence | Designing test cases from scratch, debugging root causes |
| **Tech Leads** | UAT test data aligned to personas, environment stability, defect fixes within agreed severity/timeline | — |
| **UAT Coordinator** (Rama) | Readiness gatekeeping, daily defect triage, external dependency coordination, deployment freeze discipline | — |

**Note — this directly answers a question raised earlier this week:** when reviewing Rama's draft UAT Plan, I'd flagged that Section 5's "Authentication confirmed working" gate listed both Pow Hwee and Adrian Lo as owner with no clear split. This RACI doesn't resolve that specific conflict, but it does clarify the layer above it — Tech Leads collectively own data/environment readiness, and Rama owns readiness gatekeeping overall. Worth using this session's RACI to specifically re-resolve the Pow Hwee/Adrian Lo split, since the pattern (one accountable name per condition) is the same principle this model applies everywhere else.

---

## Non-Negotiables (stated verbatim, worth preserving as-is)

- UAT is not exploratory chaos; it is guided validation
- BO time is scarce → scenarios must be simple and unambiguous
- Ambiguity in ownership == guaranteed UAT failure
- Alignment before UAT matters more than speed during UAT

---

## Timeline Risks

**TIMELINE RISK:** This model's readiness gate requires "SIT completed" and "integrations connected and verified" before UAT can start — but Rama's draft UAT Plan Overview (reviewed earlier this week) still has five external dependencies marked "Not started" with no target dates (Course Data, NRIC-to-DLE, JumpStart, WOG AD, POCDEX), and UAT Phase 0 is scheduled for only 4 days (11–14 Aug). If this operating model's gate is enforced literally, UAT cannot start on 11 Aug as currently scheduled unless those five items close first. This is the same gap flagged in this morning's review — worth explicitly reconciling this operating model against Rama's Section 6 timeline before both documents are treated as final.

**TIMELINE RISK:** The Pathfinder Sprint 6 test-scenario work already done this week found that every one of the 9 In Progress stories has at least one open Jira comment-thread question blocking a clean pass/fail scenario (e.g. OTEP-305's login-failure UX, OTEP-437's error-report handling). Under this model's guardrail ("if an issue could have been detected via story-level QA... it should not first surface in UAT"), these open questions need to resolve at the QA/grooming layer before Sprint 6 stories are eligible for UAT scenario-writing — not carried into UAT as unresolved ambiguity.

---

## Open Questions

- [ ] Does this operating model supersede or sit alongside Rama's draft "UAT Plan Overview"? They cover overlapping ground (readiness gates, RACI, defect flow) but aren't identical — **Owner:** Michelle, confirm with Rama — **By:** before Phase 0 planning finalizes
- [ ] Who resolves the Pow Hwee/Adrian Lo shared ownership on the authentication readiness condition, using this session's "ambiguity in ownership == guaranteed UAT failure" principle? — **Owner:** Michelle — **By:** this week
- [ ] Does "PMs own scenario intent" mean Imelda and Michelle each independently own their squads' scenarios, or is there a single UAT scenario owner across all three squads? — **Owner:** Michelle + Imelda — **By:** before scenario authoring finalizes
- [ ] What are the specific severity-assignment criteria for Medium/Low defects that get "risk-assessed jointly" — jointly between whom? — **Owner:** Rama — **By:** before UAT execution begins

---

## Next Steps

**Immediate:**
- Reconcile this operating model's readiness gate against Rama's draft UAT Plan Overview timeline — flag the Phase 0 date conflict explicitly (see Timeline Risks above)
- Confirm whether the persona work already done for CareerCompass/Pathfinder BO scenarios maps to actual reserved test accounts, per this model's "reserved, non-mutated profiles" rule

**Short-term:**
- Build the RACI table and UAT readiness checklist offered as next steps in the source document (both explicitly suggested — see below)
- Re-audit the CareerCompass and Pathfinder BO scenario docs against the 5-element test case model (scenario intent, persona, BO-friendly steps, expected outcome, pass/fail criteria) to confirm full compliance

---

## Context for Future Reference

This document formalizes several things that were already being worked toward informally this week:
- The QA-vs-UAT boundary question (resolved: UAT is end-to-end business flows only)
- The scenario-authorship model (resolved: PM-owned intent, BO reviews before execution — matches the sign-off format already built)
- The persona requirement (resolved: now mandatory per scenario, validating the persona work already done)

It does **not** resolve the specific ownership conflicts and undated dependencies already flagged in Rama's draft plan — those still need a live conversation, and this model actually raises the bar on what "ready" means, which makes the undated dependencies a sharper problem, not a smaller one.

---

## Suggested Extensions (from source document)

The one-pager itself flagged two ready-to-produce follow-ups:
- A RACI table version of this model
- A UAT readiness checklist aligned to the "Ready for UAT" gate

Both are quick to produce from this document — flagging as immediate candidates rather than new asks.

---

*Generated: 2026-07-17*
*Next: Run `/slack-message` if this needs to go to Rama/Imelda for reconciliation against the draft UAT Plan Overview, or `/decision-doc` if the RACI conflicts need formal documentation before Phase 0*
