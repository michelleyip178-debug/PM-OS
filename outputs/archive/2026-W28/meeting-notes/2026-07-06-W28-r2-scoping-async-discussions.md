---
date: 2026-07-06
type: meeting-notes
format: async (Teams chat + Slack 1:1, not a live meeting)
release: R2 (scoping, not yet committed)
attendees: Adrian Ang, Imelda Mo, Michelle Yip, Pow Hwee Tan
---

# R2 Scoping — Async Discussions (Teams + Slack, 6 Jul 2026)

**Type:** Async discussion recap (Teams chat + separate Slack 1:1) — not a live meeting

**Status:** Exploratory. Nothing below is a committed decision — these are technical feasibility checks and options under discussion for **R2**, separate from the R1 discovery work already locked this session.

---

## Summary

Two related but separate threads on R2 scope. Adrian opened a Teams thread asking how MVP keyword search works today, then used the answer to float five potential R2 scope items (related-role job search, learner history, competency-driven search, goal setting, proficiency levelling), assigning Michelle and Pow Hwee to check technical feasibility. Separately, Michelle and Pow Hwee discussed two options for how competency tagging would work for C@G opportunities, which don't carry their own competency data today.

---

## Thread 1: Teams Chat — Keyword Search & R2 Scope

### Key Insights

**How MVP search actually works (Imelda):**
- Multi-word phrases like "project management accounting" are treated as a single string, not separate keywords
- Search logic supports three modes: "starting with," "contains all," and "either/or"
- "Either/or" means each word in the phrase is searched independently — confirmed by Imelda when Adrian asked

**R2 scope items Adrian floated (all unconfirmed, feasibility TBD):**
1. Keyword search for jobs related to a target role
2. Aggregated learner history
3. Competency learning via search enhancements
4. Simple goal setting
5. Competency proficiency levelling

**Feasibility findings so far (Michelle):**
- Searching C@G opportunities by target role **already works today** — if the posting title is the target role, existing search logic covers it. No new build needed.
- Including the target role in the opportunity **description** (not just title) is technically feasible within a single sprint.

**Specific feature discussed — "Explore related opportunities" (myDevelopment page):**
- Adrian's framing: reuse the existing search algorithm to find C@G jobs matching a user's selected next role, surfaced in a swim lane
- Adrian's recommended starting approach: **title matching only**, then track clicks to improve recommendations over time — explicitly deferring fuzzy/close-match search rather than building it upfront
- Michelle raised the open question of what to do when there's no exact match: show close matches, or omit the swim lane entirely?
  - Example given: a search for "dato" could loosely match "data" — illustrates the risk of noisy false positives
- Adrian's follow-on concern: close matching could surface roles **lower** than the user's intended next role (e.g., matching partial grade strings). His suggested guardrail: parse grade titles as whole units (e.g., "senior executive," "senior manager") rather than doing substring matching on grade terms.
- **Pow Hwee's concern (raised separately):** pure keyword/title matching has a false-negative problem, not just a false-positive one. If a user searches "Senior Software Engineer," equivalent or adjacent titles like "Software Developer" won't match and won't surface in recommendations, even though they may be the same or a relevant next role. Title matching alone under-recommends whenever agencies use inconsistent job titles for equivalent roles.

---

## Thread 2: Slack 1:1 — Michelle & Pow Hwee on Competency Tagging for C@G

C@G (Courses @ Gov, presumably) opportunities have no competency data of their own today. Two options discussed for how to handle competency tagging/matching for these opportunities:

**Option 1 — Role-based tagging**
Competencies are inferred from the role the job posting is tagged to (i.e., borrow the role's competency profile).

**Option 2 — CIE-inferred tagging**
Don't tag C@G opportunities directly. Instead, let CIE (the matching/inference engine) infer competencies for C@G opportunities at match time, since C@G has no native competency data to tag against.

**Status:** Both options are still open. No recommendation or decision made yet — this needs a technical feasibility check before it can move into R2 scoping proper.

*Context: [competency-profile.md](../../context-library/prds/competency-profile.md) documents the existing competency profile / role-change sync logic this would build on or interact with.*

---

## Decision (Adrian, 6 Jul, following feasibility check)

**Ship title-word matching fix (full-title matching instead of word-fragment matching) and stop there. Do not invest in grade-based ranking or CIE cross-title/competency matching for R2.**

**Why:** Adrian's call, not a technical limitation — different agencies inflate or deflate designations and grades, so title text and grade data are both unreliable signals across agencies regardless of how much matching sophistication we build. Ranking (Option 2/#2) and cross-title competency matching (Option 3/#3) would be real engineering investment for a payoff that's undermined by inconsistent source data. Adrian's view: "we probably can survive on #1 for a long time."

**Impact:**
- The Option 1 vs. Option 2 competency-tagging question from Thread 2 is deprioritized for now — no need to resolve it for this feature, since CIE-based matching isn't being pursued here.
- The grade-ranking scoping conversation with OTG/C@G ingestion owners is not needed for this feature.
- This closes 2 of the 3 open questions below as "decided: not pursuing," not "answered."

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Feasibility check: keyword search enhancements for related-role jobs, learner history, competency-driven search, goal setting, proficiency levelling | @Michelle Yip, @Pow Hwee Tan | Not specified | Medium | 🔴 Not Started |
| Decide close-match handling for "Explore related opportunities" swim lane (show near-matches vs. omit lane) | @Michelle Yip | Not specified | Medium | 🔴 Not Started |
| Ship full-title matching (treat "Senior Director," "Senior Manager," etc. as whole units, not word fragments) for "Explore related opportunities" | @Michelle Yip / Engineering | Not specified | Medium | 🔴 Not Started |
| ~~Define grade-parsing guardrail so close matching doesn't surface roles below the user's target role~~ | — | — | — | ⚪ Decided: not pursuing (Adrian, 6 Jul — grade unreliable across agencies) |
| ~~Address title-matching false negatives via synonym/CIE cross-title matching~~ | — | — | — | ⚪ Decided: not pursuing (Adrian, 6 Jul — title/designation unreliable across agencies) |
| ~~Technical feasibility check: Option 1 vs. Option 2 competency tagging for C@G opportunities~~ | — | — | — | ⚪ Deprioritized — not needed unless CIE cross-title matching is revisited later |

**No due dates were mentioned in either thread — recommend confirming target dates with Adrian before these become tracked R2 commitments.**

---

## Open Questions

- [ ] Show close/fuzzy matches or omit the swim lane entirely when no exact role match exists for "Explore related opportunities"? — **Owner:** Michelle Yip
- [x] ~~How to guard against close matching surfacing roles below the user's intended next role~~ — **Closed 6 Jul.** Adrian decided not to pursue grade-based ranking; agencies inflate/deflate grades, making it unreliable regardless of build effort.
- [x] ~~How to catch equivalent/adjacent titles that title-matching alone misses~~ — **Closed 6 Jul.** Adrian decided not to pursue CIE cross-title matching for the same reason: designations aren't consistent enough across agencies to make the investment worthwhile.
- [ ] Role-based vs. CIE-inferred competency tagging for C@G opportunities — **deprioritized**, no longer needed for this feature now that cross-title CIE matching isn't in scope. Still open if this resurfaces for a different use case.
- [ ] None of the five R2 scope items floated by Adrian have relative priority yet — is this an ordered list or a shopping list to size in parallel?

---

## Context for Future Reference

This is **R2 scope exploration**, distinct from the R1 CareerCompass discovery work (journey map, personas, job stories, effort sizing, jam refresh) completed earlier this session. Nothing here should be folded into the 9 Jul SteerCo R1 recommendation — these are separate, earlier-stage, unscoped ideas.

Two of Adrian's five R2 ideas (target-role search, related-opportunities swim lane) already have partial answers from existing MVP capability — worth flagging to Adrian that some "new scope" is actually near-zero-build, which could reshape how R2 gets sized and prioritized once feasibility checks land.

---

## Next Steps

**Immediate:**
- Michelle and Pow Hwee to scope technical feasibility for the five R2 items and report back to Adrian
- Michelle to make a call (or bring options) on the close-match / no-match swim lane behavior

**Before this becomes tracked R2 scope:**
- Get Adrian to prioritize or sequence the five floated items — right now they're an unordered list
- Confirm due dates for the feasibility checks so this doesn't stall

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw input</summary>

Adrian ANG (PSD) inquired about the MVP's course keyword search functionality, specifically if it searches separate keyword sets or combined strings, and Imelda MO (PSD) clarified the current logic. Adrian ANG (PSD) then explored the possibility of enhancing search to understand phrases for either/or searches, which Imelda MO (PSD) confirmed as possible but complex. Adrian ANG (PSD) outlined several potential R2 scope items, including jobs related to target roles, aggregated learner history, competency learning via search enhancements, simple goal setting, and competency proficiency levelling, assigning action items to Michelle YIP (PSD) and Pow Hwee TAN (PSD) for technical feasibility checks. Michelle YIP (PSD) confirmed that searching C@G opportunities by target role as the posting title is already supported and that including the target role in the opportunity description is technically feasible within a sprint, and also raised questions about handling close matches for related job suggestions.

Imelda MO (PSD) explained that the MVP's keyword search treats phrases like "project management accounting" as a single string and uses logic of "starting with," "contains all," and "either/or" for searches. Imelda MO (PSD) also confirmed that "either/or" means each word is searched on its own.
Adrian ANG (PSD) proposed several potential R2 scope items: keyword search for jobs related to target roles, storing learner history, competency learning via search enhancements, simple goal setting, and competency proficiency levelling.
Michelle YIP (PSD) stated that if C@G opportunities use the target role as the posting title, keyword search already supports this, and including the target role in the opportunity description is technically feasible within a sprint. Michelle YIP (PSD) also asked for clarification on whether to show close matches or omit the swim lane if no exact match is found for related job suggestions.
Adrian ANG (PSD) clarified that for the myDevelopment page's "Explore related opportunities" feature, the goal is to leverage the search algorithm to find C@G jobs based on the selected next role and display them in a swim lane.
Adrian ANG (PSD) suggested starting with title matching for related job recommendations and tracking clicks to improve recommendations in the future, rather than immediately implementing fuzzy search.
Michelle YIP (PSD) provided an example of close matching, where "dato" might show results for "data".
Adrian ANG (PSD) raised a concern about close matching potentially returning roles lower than the intended next role, suggesting a check to parse grades as a whole, like "senior executive" or "senior manager".

Separate Slack 1:1, Michelle Yip and Pow Hwee Tan on competency tagging for C@G opportunities:
Option 1) Based on the role where job is tagged to role
Option 2) Comp tagging but C@G is not tagged — CIE to infer for C@G opportunity as they have no competencies.

</details>
