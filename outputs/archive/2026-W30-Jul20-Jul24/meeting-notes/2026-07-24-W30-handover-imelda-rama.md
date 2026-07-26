---
date: 2026-07-24
week: 2026-W30
meeting_type: team-planning
topic: UAT Handover — Products Data Requirements & Core Persona Review
---

# Meeting Notes: Handover of Cases to Imelda and Rama

**Date:** 2026-07-24

**Attendees:** Michelle Yip, Rama Moorthy, Imelda Mo

**Meeting Type:** Team planning / working session (UAT data scoping handover)

**Duration:** Not stated

**Source:** Meeting notes (structured summary provided directly)

---

## Summary

Michelle walked Rama and Imelda through the consolidated UAT plan to answer one question: what's the minimum set of Products accounts and officer personas needed from DO so UAT can start. The headline finding is good news — most Pathfinder test cases don't need Products data at all, and even competency matching (previously assumed to need real accounts) can likely run on mock users with seeded competencies. Ring-fencing is the one genuine dependency, and it looks like it only needs two accounts, not a large batch. The open wound is whitelisting: nobody has decided whether Products or Compass owns pilot-agency filtering, and that decision changes both the UAT scenario count and the account count.

---

## Decisions Made

1. **Competency matching will use mock Compass users with seeded competencies, not real Products accounts**
   - **Why:** Rama proposed seeding competency profiles directly into mock users rather than waiting on DO to provision real accounts with specific competency configurations
   - **Who decided:** Rama Moorthy (proposed), Michelle Yip (agreed)
   - **Impact:** Removes competency matching from the Products-dependency list entirely — this was previously assumed to require DO turnaround

2. **Ring-fencing needs only 2 Products accounts, not a large batch**
   - **Why:** Eligibility only depends on agency and job family fields, so two accounts covering different agency/job family combinations should be sufficient to exercise the logic
   - **Who decided:** Michelle Yip
   - **Impact:** Sharply narrows the actual DO ask on this dimension — worth stating this explicitly in whatever request goes to DO so it doesn't get inflated back up

3. **Pathfinder will reuse Core personas instead of requesting new accounts**
   - **Why:** Avoids asking DO for duplicate accounts when Core is already building out a persona set
   - **Who decided:** Imelda Mo and Rama Moorthy
   - **Impact:** P01 (happy path persona) is confirmed reusable across both Core and Pathfinder testing

4. **Missing-title and missing-job-function edge cases will be mocked rather than sourced from real data**
   - **Why:** Role Profile Bank and HRPS don't naturally contain records with those fields blank, so waiting for real matching records isn't viable
   - **Who decided:** Imelda Mo
   - **Impact:** Edge Case 1 (missing employment/business titles) uses valid Job IDs with titles manually omitted; Edge Case 2 (Job Family present, Job Function absent) is mocked outright

5. **Multiple-Job-ID scenarios will use placeholder titles**
   - **Why:** Role-profile data exists at Job ID level but position-level data (where employment/business titles actually live) doesn't support multi-Job-ID officers cleanly
   - **Who decided:** Imelda Mo
   - **Impact:** Testing proceeds with placeholders rather than blocking on position-level data that doesn't exist in the right shape

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Clarify whitelisting design (Products-side filter vs. Compass-side whitelist) with Pow Hwee Tan | Rama Moorthy | Not stated | 🔴 High | 🔴 Not Started |
| Finish Core persona mapping and clean up the Products data request before sending to DO | Imelda Mo | Not stated | 🔴 High | 🔴 Not Started |
| Confirm DO will create seconded/double-hatted officer accounts with profile verification | Imelda Mo (to request from DO) | Not stated | 🟡 Medium | 🔴 Not Started |
| Run AI-assisted traceability review comparing PRD, user stories, acceptance criteria, and Radhika's QA cases to find Core coverage gaps | Imelda Mo | Not stated | 🟡 Medium | 🔴 Not Started |
| Send finalized Products data requirements to DO | Imelda Mo / Rama Moorthy | Not stated | 🔴 High | 🔴 Not Started |

**Notes:**
- No due dates were stated for any item. Given DO turnaround time is the thing UAT is waiting on, "send requirements to DO" should get a hard date, not stay open-ended — every day this slips pushes the same UAT/VAPT chain flagged in [2026-07-24-W30-otep-squad-sync.md](2026-07-24-W30-otep-squad-sync.md).
- The whitelisting clarification is a blocking dependency for the DO request — sending requirements before that's resolved risks asking DO twice.

---

## Key Insights & Quotes

**Scope reduction was the big win:**
- Most Pathfinder features (listing, discovery, filtering, search, opportunity browsing) don't touch Products data at all. Only competency matching and ring-fencing genuinely depend on it, and competency matching just got moved off that list via mocking. This cuts the DO ask down to essentially ring-fencing accounts (2) plus whatever Core needs.

**QA coverage gap flagged, not yet resolved:**
- Pathfinder has ~88 test cases; Core has ~42. Michelle flagged Core as looking under-covered relative to Pathfinder and asked Imelda to run a traceability check (PRD vs. user stories vs. acceptance criteria vs. Radhika's QA cases) to find what's missing before assuming Core is actually thin, rather than fully covered but just written differently.

---

## Open Questions

- [ ] Who owns pilot-agency whitelisting — Products (API-side filter) or Compass (own whitelist)? - **Owner:** Rama Moorthy (to clarify with Pow Hwee Tan) - **By:** Not stated
- [ ] Exact Products accounts needed, pending the whitelisting decision - **Owner:** Rama Moorthy / Michelle Yip - **By:** Not stated
- [ ] Do the 16 Core Products-dependent personas fully cover UAT requirements? - **Owner:** Imelda Mo - **By:** Not stated
- [ ] Is Core's QA coverage (~42 cases) actually thin, or just scoped differently than Pathfinder's ~88? - **Owner:** Imelda Mo - **By:** Not stated

---

## Blockers

1. **Whitelisting design undecided**
   - **Blocked by:** No agreement yet on whether Products or Compass owns pilot-agency filtering
   - **Impact:** Can't finalize the DO account request or the full UAT scenario set for ring-fencing until this is resolved — Option 2 (Compass-side whitelist) requires additional scenarios and possibly additional accounts that Option 1 wouldn't
   - **Resolution:** Rama Moorthy to raise with Pow Hwee Tan

---

## Next Steps

**Immediate (this week):**
- Rama clarifies whitelisting design with Pow Hwee Tan
- Imelda finishes Core persona mapping and the cleaned-up Products data request
- Once whitelisting is resolved, finalize and send the Products data ask to DO

**Short-term (next 2 weeks):**
- Imelda runs traceability review on Core QA coverage
- Confirm DO can produce seconded/double-hatted officer accounts with verification

**Follow-up meeting:**
- Not stated. Recommend a short check-in once Pow Hwee Tan responds on whitelisting, since that answer reshapes both the DO request and the ring-fencing UAT scenarios.

---

## Context for Future Reference

This session is the direct working-level follow-through on the "send Products-related requirements to DO/Products team ASAP" action item from today's [OTEP Squad Sync](2026-07-24-W30-otep-squad-sync.md), and builds on the consolidated test plan referenced in [2026-07-24-W30-consolidated-test-plan.md](../analyses/2026-07-24-W30-consolidated-test-plan.md) and [2026-07-24-W30-consolidated-test-plan-core.md](../analyses/2026-07-24-W30-consolidated-test-plan-core.md). The practical effect of this meeting is a much smaller DO ask than the squad sync implied was needed — worth surfacing that scope reduction back to Adrian/leadership, since "send Products requirements ASAP" reads differently once you know it's really just ring-fencing accounts (2) plus whatever Core's 16 Products-dependent personas require, not a broad data pull.

No stakeholder profile exists yet for Radhika (QA test case author, referenced but not present in `context-library/stakeholder-profiles.md`) — worth adding if she becomes a recurring point of contact for QA coverage questions.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw transcript/notes</summary>

See command arguments for full source content as originally provided.

</details>
