---
date: 2026-07-17
week: 2026-W29
meeting_type: stakeholder-directive
topic: UAT test case consolidation and AC coverage
---

# Meeting Notes: Adrian's UAT Consolidation Ask (from UAT Planning Session)

**Date:** 2026-07-17

**Type:** Stakeholder directive, captured from UAT planning session

**Source:** Adrian Ang, tagging Michelle Yip and Imelda Mo

---

## Summary

Adrian raised three asks during the UAT planning session: consolidate UAT test cases for easier BO testing, validate (using AI) whether story ACs alone can generate the majority of test cases, and get Michelle + Imelda to sync so Tech Leads understand test data requirements.

---

## Decisions Made

1. **Consolidation is required before BOs test** — test cases currently split across separate Core/Pathfinder documents need to be usable as one artifact by Chris and Xian Sheng.
   - **Why:** Adrian's framing — "we should have UAT test cases consolidated for easier testing by BOs."
   - **Impact:** Direct action item; addressed below.

2. **AC-to-test-case coverage should be validated, not assumed.** Adrian's stated theory: "the stories' ACs should be able to cover all/most test cases."
   - **Why:** If true, it validates AI-assisted test case generation as a repeatable QA method going forward, not a one-off exercise.
   - **Impact:** Audited — see [AC-to-Test-Case Coverage Audit](2026-07-17-W29-ac-to-test-case-coverage-audit.md). Finding: 72% of existing test cases are directly AC-derivable, 87% if multi-AC synthesis is included. The remaining 13% split between comment-thread-only requirements (8%) and cases with no AC basis at all (5%) — mostly scope-boundary confirmations and one genuinely blocked case (invalid CV file upload, OTEP-205).

3. **Michelle and Imelda need to sync directly with Tech Leads on test data requirements** — not just hand over a document.
   - **Why:** Adrian's explicit framing: "tech leads may need PM help to understand what data needs to be formed/created."
   - **Impact:** The [test data prep list](2026-07-17-W29-uat-test-data-prep-list.md) already exists as a requirements doc; this decision converts it from a document handoff into a live sync requirement.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Consolidate CareerCompass + Pathfinder UAT test case docs into one BO-facing artifact | @Michelle | Before Phase 0 (11 Aug) | 🔴 High | Not Started |
| Share AC-to-test-case coverage audit findings with Adrian | @Michelle | This week | 🟡 Medium | 🟢 Complete — audit produced 2026-07-17 |
| Schedule sync with Imelda + Tech Leads (Pow Hwee, Adrian Lo, Victor) on test data requirements | @Michelle + @Imelda | This week | 🔴 High | Not Started |
| Resolve UAT-ADDCOMP-003's open AC gap (invalid file upload) before it can be marked pass/fail-ready | @Michelle → Core PM | Before test data sync | 🟡 Medium | Not Started |
| Consider migrating Category C findings (comment-thread-only answers) back into their source Jira ACs | @Michelle | Non-blocking, housekeeping | 🟢 Low | Not Started |

**Notes:**
- The consolidation and sync items are both blocking for Phase 0 readiness — flagged 🔴 High.
- No due date was explicitly stated by Adrian in the source message; "this week" assumed given UAT planning urgency and the 11 Aug Phase 0 start.

---

## Key Insights

**On AC coverage (validates Adrian's theory, with a caveat):**
72% of test cases built so far come directly from a single story's AC, read plainly — confirming AI-assisted generation is a reliable method for the bulk of test case authoring. But 8% of cases required pulling the real answer from a Jira comment thread, not the AC field itself (e.g. OTEP-405's search ranking logic was clarified in a comment, never migrated back into the AC). This means **any AC-to-test-case process needs to include a comment-thread scan, not rely on the AC field alone** — a meaningful finding to bring back to QA before this becomes the standard method.

**On test data (confirms the existing gap):**
Adrian's ask directly validates concerns already flagged in the [test data prep list](2026-07-17-W29-uat-test-data-prep-list.md) — several personas and data states (Farah's "no role" record, Marcus's unresolvable competency mapping, the missing-formsg_url opportunity) need real reserved test accounts that don't yet exist. This isn't a new problem Adrian is raising; it's the same one already surfaced, now with explicit executive attention and a mandate to solve it via a live sync rather than a document handoff.

---

## Open Questions

- [ ] What format should the consolidated BO test case document take — merge into one file, or a single index pointing to both? — **Owner:** Michelle — **By:** before consolidation work starts
- [ ] Should Category C findings (comment-thread-derived answers) be formally migrated into their Jira ACs, or is flagging them in the audit sufficient? — **Owner:** Michelle + QA — **By:** non-blocking, can follow Phase 0
- [ ] Confirm meeting time for the Michelle/Imelda/Tech Lead sync — **Owner:** Michelle — **By:** this week

---

## Timeline Risks

**TIMELINE RISK:** Adrian's ask assumes there's runway to consolidate, sync with Tech Leads, and resolve open AC gaps (like UAT-ADDCOMP-003) before Phase 0 on 11 Aug. This is the same window already flagged as tight given the UAT Operating Model's stricter readiness gate (SIT completed, integrations verified, environment stable) conflicting with Rama's draft plan's undated external dependencies. Adding a formal Tech Lead sync and document consolidation to that runway is reasonable but should be sequenced explicitly, not assumed to fit alongside everything else already queued for this week.

---

## Next Steps

**Immediate:**
1. Consolidate the two UAT test case documents (see Open Questions above for format decision)
2. Send the AC-to-test-case coverage audit to Adrian directly
3. Propose sync times to Imelda for the Tech Lead data-requirements conversation

**This week:**
- Run the Tech Lead sync once scheduled, using the existing test data prep list as the working document
- Resolve UAT-ADDCOMP-003's blocked status with Core PM

---

*Generated: 2026-07-17*
*Next: Run `/slack-message` to propose sync times to Imelda, or proceed directly to consolidating the test case documents*
