---
date: 2026-09-28
week: 2026-W40
type: meeting-notes
meeting_type: cross-team-sync
organizer: Imelda MO
attendees: [Imelda MO, Christopher Woo, POCDEX team, Compass/Pathfinder team]
related:
  - /Users/michelleyip/Documents/PM-skills-ALL-1/00-hub/open-items.md (#55, #61)
  - outputs/meeting-notes/2026-08-11-W33-pocdex-data-classification-uat-thread.md
  - outputs/analyses/2026-08-14-W33-pocdex-raid-log.md
---

# Meeting Notes: POCDEX x Compass Sync — UAT Test Cases

**Date:** 28 Sep 2026, 4:00–5:00pm

**Organizer:** Imelda MO

**Attendees:** Imelda MO, Christopher Woo, POCDEX team, Compass/Pathfinder team

**Meeting Type:** Cross-team working session (UAT test-case design)

**Transcript available:** Yes

---

## Summary

A working session on whether POCDEX can support Career Compass UAT testing for employment-profile-change scenarios, and how those test cases should be structured. Both teams aligned on organizing testing around real business scenarios rather than POCDEX's existing test-case shapes, and agreed that delta (over-time) testing matters more than static-snapshot testing. Ownership of test-data preparation, POCDEX's realistic capacity to support every Compass permutation, and how Compass users troubleshoot recommendation changes without backend access all remain unresolved.

**This is a continuation, not a fresh start.** POCDEX recommended ≥25 additional UAT scenarios back on 11 Aug 2026 (open-items #55) — unowned and unactioned since then. This meeting is effectively that item finally getting worked, six weeks later, against a UAT start date (19 October, per open-items #61) that is now three weeks away.

---

## Decisions Made

1. **Compass business scenarios are the organizing framework, not POCDEX's existing test cases.**
   - **Why:** Compass scenarios don't map one-to-one onto POCDEX's test-case structure; forcing that mapping was wasting time and obscuring real coverage gaps.
   - **Who decided:** Joint, both teams.
   - **Impact:** Test planning restructures around actual employment-profile-change events (static updates, identity changes, role changes, double-heading, stop-double-heading, agency-onboarding-status changes) instead of API-specific behavior.

2. **Role changes are modeled as Position ID / Job ID changes, not HR concepts (promotion, redesignation, transfer).**
   - **Why:** Matches what the underlying data actually carries — Compass's recommendation engine reacts to ID changes, not HR labels for why they changed.
   - **Who decided:** Joint, technical alignment.
   - **Impact:** Test scenarios should be written against ID-level deltas, not HR-process terminology — worth checking this lands cleanly in any test-case docs already using promotion/transfer language.

3. **Trigger mechanism confirmed: compare latest update timestamps; if newer employment-profile data is detected, refresh.**
   - **Why:** Existing mechanism, reconfirmed rather than changed.
   - **Who decided:** POCDEX team (technical).
   - **Impact:** No new build implied — but see Risk 2 below on whether "refreshed correctly" is actually verifiable by Compass users.

4. **Delta testing (Day 0 → Day 1 → Day 2 → subsequent updates) is the primary validation approach, not static point-in-time snapshots.**
   - **Why:** The feature is fundamentally about handling change over time — a correct-looking snapshot doesn't prove the same officer experienced the correct transition.
   - **Who decided:** Joint, both teams converged on this independently during discussion.
   - **Impact:** Test-case design needs explicit before/after/sequence structure, not isolated "does this profile look right" checks.

5. **Compass may compress some recommendation-related test scenarios into combined cases rather than testing every permutation individually.**
   - **Why:** Team challenged whether separate job-family-change vs. job-function-change scenarios were both necessary, and whether some tests just re-verify already-proven functionality.
   - **Who decided:** Discussed jointly; not yet finalized which scenarios actually compress.
   - **Impact:** Could meaningfully reduce total test count — but "which scenarios" is still open (see Action Items).

---

## Key Insights & Quotes

**On the core tension between the two teams:**
- POCDEX's position: "We provide employment profile data."
- Compass's position: "We need enough data to validate business outcomes."
- Neither side has agreed who prepares test data, who engineers special/edge cases, or how much downstream validation POCDEX is realistically expected to support. This is a real, unresolved ownership gap, not a communication misunderstanding — flagged as a significant risk by both sides.

**On identity resolution (useful clarifications that emerged):**
- Email is the primary login identifier; NRIC/FIN is the underlying identity identifier.
- Every login effectively triggers identity validation.
- Email changes can happen independently of role changes.
- Existing accounts must be matched correctly, not duplicated — this was previously a confusing area and the walkthrough resolved several open questions about changed-email scenarios.

**Christopher Woo's recurring concern, stated directly and repeatedly:** *"How do I explain and troubleshoot this when agencies raise issues?"* Per his stakeholder profile, this is exactly his lane — business assurance and evidence-backed operational readiness, not technical delivery. The meeting stayed focused on pre-launch testing and did not resolve this — day-2 diagnostics, evidence, and audit-trail visibility remain undefined. Worth treating this as a standing item to bring back to him directly, not something that gets absorbed into general UAT planning.

**Assumption-challenging that prevented scope creep:** the team explicitly questioned why job-family-change and job-function-change needed separate scenarios, whether a recommendation change was actually expected for each, and whether some proposed tests just re-verified functionality already proven elsewhere. Worth preserving this instinct going into the scenario-filtering action item below.

---

## Timeline Risks

- **TIMELINE RISK: UAT is ~3 weeks away (per the meeting's own estimate) against a 19 October UAT start date already on record (open-items #61).** Sprint completion is roughly 2 weeks out. None of the six action items below have dates attached, and the most consequential ones (data ownership, POCDEX's realistic scenario-support capacity) are exactly the kind of question that stalls a sprint if left open. This is the same failure pattern flagged in #55 since 11 Aug — a real risk surfaced, then sitting unowned for six weeks. Don't let this action-item list repeat that.
- **TIMELINE RISK: this meeting's ≥25-scenario thread is the same one from open-items #55 (11 Aug), previously unowned.** If the filtering/scoping work here doesn't get an explicit owner and date this week, it risks becoming a third instance of the same stall.

---

## Risks Explicitly Discussed

1. **Data preparation effort.** Compass needs many test combinations; POCDEX says they cannot realistically engineer every downstream application's required scenarios.
   - **Impact:** UAT scenarios may not be fully testable as currently scoped.

2. **Recommendation verification.** The recommendation engine may update correctly on the backend, but Compass users may lack visibility into why a recommendation changed, which profile field drove it, or how to troubleshoot.
   - **Impact:** UAT could pass technically while operational support remains genuinely difficult — a gap between "the system works" and "someone can explain why" to an agency raising an issue.

3. **UAT timeline.** ~2 weeks to sprint completion, ~3 weeks to UAT start; planning needs to happen immediately.
   - **Impact:** Any of today's unresolved test-data questions convert directly into schedule risk. See Timeline Risks above.

---

## Risks Raised in the Meeting But Not Adequately Addressed

These surfaced but didn't get real discussion time — worth escalating rather than letting the meeting's "amber, no fundamental blockers" framing paper over them.

1. **UAT exit criteria are still undefined.** No agreement on what constitutes UAT success, minimum pass coverage, must-pass scenarios, or severity thresholds. Given how central UAT governance is to this launch, this is a real gap, not a nice-to-have.

2. **Operational troubleshooting model is undefined.** Chris's repeated question (above) got acknowledged but not answered. No agreement yet on day-2 support, diagnostics, evidence available to support teams, or audit-trail visibility.

3. **Identity edge cases remain weakly tested.** Email changes, NRIC changes, FIN holders, multiple HR systems, and missing legal IDs were discussed but several were deprioritized for being rare. Low-frequency identity issues are exactly the kind that produce hard-to-recover production defects — rarity isn't the same as low impact here.

4. **Recommendation-engine validation strategy is immature.** Substantial debate on job-family/job-function changes and their recommendation impact, but no validation strategy emerged beyond "look before and after." That proves data changed; it doesn't prove the recommendation itself is correct.

---

## What Didn't Go Well (Process Notes)

1. **The meeting repeatedly drifted into implementation detail** — API call sequences, identity-resolution mechanics, NRIC vs. email matching, data-ingestion logic, POCDEX UID generation. Participants explicitly tried to pull the discussion back to business scenarios more than once. This consumed time that could have gone to finalizing UAT scope — worth a tighter facilitation structure next time (e.g., a parking lot for technical tangents).

2. **System documentation gaps slowed the meeting down.** Architecture diagrams, identity-flow diagrams, and an updated profile-update workflow diagram were all requested and none were immediately available.

3. **Many scenarios remain loosely defined** — job-family-only, job-function-only, combined changes, recommendation-change verification, triple-heading. Extensively debated, but preconditions, expected behavior, and pass/fail criteria weren't consistently defined for any of them.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Filter UAT scenarios — remove Compass-only cases, identify POCDEX-dependent ones | Imelda MO / Compass team | No date set — schedule within 48 hours given the 19 Oct UAT start | 🔴 High | Not Started |
| Review which scenarios POCDEX can actually support with prepared data | POCDEX team | No date set — schedule within 48 hours | 🔴 High | Not Started |
| Provide updated profile-update workflow / flow diagram | POCDEX team | No date set | 🟡 Medium | Not Started |
| Review overlap between existing POCDEX test cases and Compass scenarios | Both teams | No date set | 🟡 Medium | Not Started |
| Determine how Chris can verify recommendation changes (admin portal, API outputs, or prepared datasets) | Compass + POCDEX | No date set | 🔴 High — this is Chris's repeated, unresolved concern | Not Started |
| Finalize UAT planning based on which scenarios are actually supported | Compass team | Before UAT begins (19 Oct, per #61) | 🔴 High | Not Started |

**None of these six items have an assigned date.** Given the timeline risk above, this is the single biggest thing to fix coming out of this meeting — not the scenario content itself.

---

## Open Questions

- [ ] Who owns test-data preparation overall? — **Owner:** Unresolved between POCDEX/Compass — **By:** Not specified
- [ ] Can POCDEX realistically support all Compass-specific test permutations, or does scope need to shrink? — **Owner:** POCDEX team — **By:** Not specified
- [ ] How do Compass users (specifically Chris, for agency-facing troubleshooting) verify recommendation changes without deep backend access? — **Owner:** Compass + POCDEX — **By:** Not specified
- [ ] What is the final, locked scope of UAT scenarios to execute? — **Owner:** Imelda MO / Compass team — **By:** Not specified
- [ ] What are UAT's minimum pass criteria and must-pass scenarios? — **Owner:** Unassigned — **By:** Not specified — flagged as a gap, not discussed in depth
- [ ] What's the day-2 operational support/troubleshooting model (diagnostics, evidence, audit trail)? — **Owner:** Unassigned — **By:** Not specified — flagged as a gap, not discussed in depth

---

## Next Steps

**Immediate (this week):**
- Get explicit owners and dates on all six action items above — the meeting produced good scenario clarity but no schedule commitment, and UAT is 3 weeks out.
- Filter the UAT scenario list to Compass-only vs. POCDEX-dependent (first action item) — this gates most of the others.

**Before UAT (19 Oct):**
- Finalize UAT planning based on confirmed-supportable scenarios.
- Resolve Chris's recommendation-verification question — this has now come up multiple times (this meeting, and implicitly in #55's Day-2 support flag from 11 Aug) without a concrete answer.

**Follow-up meeting:** Not explicitly scheduled in this session — worth booking one now given the six ownerless action items.

---

## Context for Future Reference

**This meeting directly continues open-items #55** (Huiting/POCDEX data-classification-and-UAT thread, 11 Aug 2026), where POCDEX first recommended ≥25 additional UAT scenarios and flagged day-2 support traceability as a gap. That recommendation sat unowned for six weeks. This meeting is the first real working session against it — worth updating #55 on the Pathfinder hub tracker to reflect that it's now active, not stalled.

**Also connects to open-items #61** (employment-lifecycle UAT, 19 October start date, Michelle + Christopher Woo own the OTG-to-test-case mapping). This meeting's scenario list (static updates, identity changes, role changes, double-heading, agency-onboarding status) should be checked against #61's already-scoped 4 domains (job ID, job family, job function, competency) and the 50-of-118 test-case commitment to Huiting's team — worth confirming these aren't two parallel, unreconciled scopes.

**Chris's repeated question is a pattern, not a one-off.** He's raised operational-troubleshooting/evidence concerns before (per his stakeholder profile: "expects engineering to commit a dedicated technical triage lead," pushes back on claims without empirical backing). Two meetings now (this one, and the 11 Aug thread) have surfaced the same day-2 support gap without resolving it — worth naming this explicitly next time rather than letting it resurface as a fresh concern each meeting.

---

## Appendix: Source Notes

This meeting's raw material was provided as a pre-structured debrief (Otter.ai-style summary with the reporter's own SteerCo-style assessment), not a raw transcript — processed directly from that structure rather than re-deriving from a transcript.

**Reporter's own SteerCo-style assessment (preserved for reference):**
- **Overall status:** Amber
- **Positive:** Good alignment on business scenarios; strong shared understanding of employment-profile-change architecture; constructive engagement; no fundamental blockers identified.
- **Concerns:** Test-data ownership unresolved; UAT scope still fluid; recommendation-validation approach not mature; day-2 operational support largely absent; timeline pressure increasing.
- **What the reporter would escalate now:** (1) agree who owns test-data creation, (2) define minimum UAT pass criteria, (3) confirm which scenarios are mandatory for go-live, (4) define post-launch support/troubleshooting evidence, (5) finalize the recommended-role validation approach, not just profile-update validation.

<details>
<summary>Click to expand original debrief</summary>

Executive Summary, What Went Well, What Did Not Go Well, Key Decisions, Risks, Action Items, and Assessment sections as pasted by Michelle — full content folded into the structured sections above; original preserved in the conversation history for this file's creation.

</details>
