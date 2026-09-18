# Grooming Session Prep: Ringfencing Rule for Multi-Employment Officers

**Date:** 2026-09-17

**Owner:** Michelle Yip

**For:** Grooming session covering OTEP-1587, OTEP-232, OTEP-1598

---

## 1. Why We're Grooming This

Thomas Huchedé's analysis (Slack, 17 Sep) found that the simple rule we assumed — "check if the officer belongs to any eligible agency" — breaks once an opportunity excludes people, or combines Agency with Job Family in one rule.

**Ringfencing today runs on two fields:** Agency and Job Family, each set to either Include or Exclude.

This needs a decision made once in this session, not picked silently in code, since it affects all three tickets.

---

## 2. The One Decision

**When an officer holds two jobs, do we check each job on its own, or pool all their facts together and check each fact separately?**

| | Check by job (Recommended) | Check by fact |
|---|---|---|
| **How it works** | Look at each job as a complete package (its Agency + Job Family together). Officer qualifies if at least one whole job clears the opportunity's rule. | Pool every Agency and every Job Family the officer has across both jobs, then check each one independently. |
| **Why it matters** | Matches how a person would manually decide this: "does this specific job of yours qualify you." | Can accidentally qualify someone through a mix of facts that never actually belong to any single real job they hold. |

**Recommendation: Check by job.** This is Thomas's own stated instinct ("I would assume ringfencing should allow the officer to view if they meet criteria for at least one employment"), and it's the safer default — it avoids the field-mixing risk above.

---

## 3. Walking the Room Through It

Rows 4 and 5 below are Thomas's own worked examples from his Slack analysis (his GIG-3 and GIG-4 scenarios) — he built these specifically to pressure-test his own "check by job" instinct before bringing it to grooming. Rows 1-3 are simpler cases added here to warm up the room first.

**Note:** every answer below assumes "check by job" — this table isn't a settled decision, it's a test of whether the room agrees with that recommendation. If the room prefers "check by fact" instead, rows 4-5 flip to ✅ (see Section 2's risk).

Same officer used throughout: **Job 1 = Agency BCA, Job Family Finance. Job 2 = Agency LTA, Job Family Ops.**

Start with the easy case to confirm the room agrees, then move to the case that forces the real decision.

| # | Opportunity's Rule | Qualifies? | Why | What the officer actually sees |
|---|---|---|---|---|
| 1 (warm-up) | Open only to BCA officers | ✅ | Their BCA/Finance job is enough on its own | Gig appears normally |
| 2 | Closed to BCA officers | ✅ | Their BCA job doesn't qualify, but their LTA job isn't BCA, so it clears the exclusion | Gig appears normally |
| 3 | Open only to BCA Finance officers | ✅ | Their BCA/Finance job matches both conditions | Gig appears normally |
| 4 (the fork) | Closed to BCA Finance officers, and separately closed to LTA Ops officers | ❌ | Neither job clears the rule alone — the BCA job is Finance (excluded), the LTA job is Ops (also excluded) | Gig never appears — no "restricted" badge, no explanation |
| 5 (same fork, mirrored) | Open only to LTA Finance officers | ❌ | Neither job matches both conditions at once — BCA job has Finance but not LTA; LTA job has LTA but not Finance | Gig never appears — same silent absence |

**Rows 1-3:** both models agree — this is why "check by job" isn't a big behavior change for the common case.

**Rows 4-5:** this is where the two models split. Under "check by fact," both of these would incorrectly become visible to the officer (see Section 2's risk).

---

## 4. What This Means Beyond the Logic Decision

- **Ringfencing is invisible to the officer today.** No "restricted" badge, no explanation when something doesn't appear. If "check by job" removes access an officer expected to have, their only recourse is Report Issue or contacting HR — worth flagging as a support-load risk.
- **This connects to the other two tickets.** OTEP-1587 and OTEP-1598 cover role-change transitions, so an officer's catalog will visibly shift (things appearing/disappearing) the moment a role change processes — nothing in today's UI tells them that happened either.

---

## 5. How to Run the Session

1. Open with the plain-language problem (Section 1).
2. Walk row 1 — confirm the room agrees on the easy case.
3. Walk row 4 — ask "does this officer see it?" before naming the two models. Let the disagreement surface first.
4. Propose "check by job" as the default. If anyone pushes for "check by fact," escalate rather than resolve live — that's a sign it needs a BO decision (see the [ringfencing BO brief](../decisions/2026-09-17-W38-ringfencing-bo-brief.md), held in reserve).

## Keep Out of This Session

- **Data availability** — covered separately in the [ringfencing grooming questions](2026-09-17-W38-opportunities-ringfencing-grooming-questions.md) doc.
- **Per-ticket AC review** — this is one shared decision for all three tickets, not three separate discussions.

## Capture From the Session

One line in the [active-agency ringfencing ticket draft](2026-09-17-W38-opportunities-active-agency-ringfencing-ticket-draft.md)'s AC: check-by-job or check-by-fact, and who signs off if it's contested.
