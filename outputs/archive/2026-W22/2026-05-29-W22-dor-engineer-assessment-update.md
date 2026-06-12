# Proposed DoR Update: Engineer Implementation Assessment

**Proposed by:** Michelle
**Reason:** Sprint 2 retro — story prep was "fuzzy," seeding and DB schema underspecified at sprint start. Engineers need earlier input before stories are finalized.
**Bring to:** S03 internal squad grooming (Wed 03 Jun)
**Applies to:** Story DoR, "Ready" stage

---

## What's Changing

The Story DoR at the **Ready** stage currently requires:

> Prioritised and able to deliver in a sprint. All platform subtasks (including test cases) identified and created. UI assets and UX flows designed and linked to all Acceptance Criteria. Feature flag designed with entry point identified. API Contract identified and documented.

**Proposed addition (one new gate):**

> Engineer implementation assessment completed: at least one engineer has reviewed the story, confirmed the approach is technically sound, flagged any implementation unknowns, and agreed the story is achievable in a single sprint.

---

## What This Looks Like in Practice

Before a story moves to "Ready" in Jira:

1. PM drafts the story with ACs and links designs/contracts as usual
2. PM shares the draft with the engineer who'll likely pick it up (or any engineer in the squad)
3. Engineer reviews and answers three questions:
   - Is the implementation approach clear?
   - Are there any unknowns that need a spike first?
   - Can this realistically be done in one sprint as scoped?
4. If yes to all three, the story is ready. If not, PM and engineer resolve the gaps together before it moves to Ready.

This doesn't need a formal meeting. It can be a Slack thread, a Jira comment, or 5 minutes at the end of standup.

---

## What This Fixes

| Problem (Sprint 2) | How this helps |
|--------------------|---------------|
| Seeding strategy was unclear at sprint start | Engineer flags ambiguity before grooming, not during sprint |
| Stories had too many technical details baked in by PM | Engineer shapes the technical framing, PM shapes the user outcome |
| DB schema felt rushed | Schema decisions surface in story prep, not day 1 of sprint |

---

## What This Doesn't Change

- Engineers don't write the story or own the ACs — that's still PM
- No new ceremony required
- The existing DoR gates (designs, test cases, API contract, feature flag) all stay as-is
- This gate sits *after* PM drafts and *before* the story moves to Ready — it's the last check, not the first step

---

## Open Question for the Team

How lightweight should this assessment be? Options:

**Option A (lightest):** Jira comment from an engineer saying "reviewed, looks good" or "flagged X — needs resolving"

**Option B (structured):** A standard 3-question checklist in the story description (approach clear? unknowns? sprint-sized?) that the engineer fills in

**Option C (verbal only):** Engineer confirms verbally at internal grooming and PM notes it in the story

Recommendation: start with Option A. If stories still slip mid-sprint, move to Option B.

---

*Draft for team discussion — S03 grooming Wed 03 Jun*
