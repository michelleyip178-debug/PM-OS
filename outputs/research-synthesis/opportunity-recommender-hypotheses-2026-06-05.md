---
date: 2026-06-05
type: hypothesis-set
feature: Opportunity Recommender
release: R1 (scoping)
status: draft — not yet validated
linked_prd: PM-skills-ALL-1/02-prd/otep-mvp-release.md
linked_okr: PM-skills-ALL-1/06-skills-and-decisions/otep-roadmap-okrs-2627.md
---

# Opportunity Recommender — Hypotheses for R1 Scoping

**Purpose:** Assumptions to stress-test before committing R1 build scope, and questions to take into officer interviews.

**Scope:** Opportunity recommendations (OTG/C@G/STIP/Gig). Learning recommendations covered separately in prd-learning-discovery.md.

---

## H1 — Officers don't know what they don't know

**Hypothesis:** The biggest barrier to opportunity discovery isn't search quality — it's that officers aren't looking in the first place. They don't have a mental model of what's available to them.

**Why it matters for scoping:** If true, a recommender that surfaces opportunities officers didn't know to search for has higher leverage than improving search relevance. Push > pull.

**Interview question:** "Walk me through the last time you looked at a posting outside your current role type. What triggered you to look?"

**Kill condition:** If most officers report browsing regularly but just struggling to find good matches, the problem is relevance, not discovery.

---

## H2 — Role similarity is a weak signal; aspiration is stronger

**Hypothesis:** Officers don't want recommendations based on who they are now (current agency, grade, job family). They want recommendations based on where they want to go — which they may not have articulated yet.

**Why it matters for scoping:** A PMI-style "similar to you" model (like Jumpstart POC1) may under-deliver for opportunities. Learning history works for courses because past behaviour predicts future learning. Opportunity decisions are more intentional.

**Interview question:** "If we showed you opportunities based on your current role profile, how useful would that be? What would you want us to factor in instead?"

**Kill condition:** Officers say they just want relevant, not aspiration-led. They want "things I qualify for" before "things I might want."

---

## H3 — Competency gaps are too abstract to drive action

**Hypothesis:** Showing "you're missing 3 competencies for this role" doesn't motivate officers to apply — it demotivates them. The framing creates a gap to close, not an opportunity to pursue.

**Why it matters for scoping:** If the competency gap engine (R2 in the roadmap) is the main recommender input, we may be building on a frame that doesn't convert. The 40% OKR (viewed competency gap analysis → clicked through to recommendation) could fail not because we built it wrong, but because the frame is wrong.

**Interview question:** "If we told you 'you're missing 2 competencies for this posting' vs 'this posting is a 70% match for your profile' — which would make you more likely to click through?"

**Kill condition:** Officers respond positively to gap framing. They want to know what they're missing, not just what they match.

---

## H4 — The bottleneck is acting, not discovering

**Hypothesis:** Officers who find a good opportunity still don't apply — not because the apply flow is broken, but because the perceived cost of applying (writing statement, approval, manager conversation) is higher than the perceived benefit of the role.

**Why it matters for scoping:** A better recommender gets officers to the door faster but doesn't get them through it. If we're optimising CTR as the primary metric, we may be measuring the wrong thing.

**Interview question:** "Think of a posting you looked at but didn't apply for. What stopped you?"

**Kill condition:** Officers say the apply process is easy and the main barrier is finding the right opportunity.

---

## H5 — Personalisation requires trust, and trust is earned late

**Hypothesis:** Officers won't share useful signal (competencies, career interests, development goals) until they trust the platform delivers value first. Asking for profile inputs upfront creates friction before the product has earned it.

**Why it matters for scoping:** If we gate the recommender on a complete competency profile, we'll get sparse data and a cold-start problem for most officers. A good-enough recommender with minimal inputs may outperform a "perfect" one that requires a full profile.

**Interview question:** "How much time would you spend setting up a profile if it meant better recommendations? What would you need to see first to know it was worth it?"

**Kill condition:** Officers are willing to invest upfront if the value proposition is clear. Trust isn't the barrier — awareness is.

---

## H6 — Managers are the hidden gatekeeper, not the system

**Hypothesis:** The recommendation engine optimises for officer-system fit, but the actual decision goes through the manager. Officers self-select out of good matches because they anticipate a "no" from their manager, not because the recommendation was wrong.

**Why it matters for scoping:** This is a product + org design problem. A recommender can't solve it alone — but knowing it exists changes what success looks like (and what we tell SteerCo about the OKR).

**Interview question:** "If you saw a posting that was a great fit for you — would you apply without telling your manager first? What makes that conversation easy or hard?"

**Kill condition:** Manager dynamics are not a primary barrier; officers apply independently when they're interested.

---

## Recommended interview sequence

Use H4 → H1 → H2 → H5 → H3 → H6. Start with the action gap (H4) to open up the emotional context, then work backwards to discovery (H1) and signal quality (H2). H3 and H6 are the riskiest reframes — save them for when rapport is established.

---

## Status tracker

| Hypothesis | Evidence so far | Validated? |
|------------|----------------|------------|
| H1 — Discovery gap | CSC workshop: officers cite fragmentation + inability to compare (indirect) | Not yet |
| H2 — Aspiration > similarity | No direct evidence | Not yet |
| H3 — Gap framing demotivates | No direct evidence | Not yet |
| H4 — Acting bottleneck | No direct evidence | Not yet |
| H5 — Trust before personalisation | No direct evidence | Not yet |
| H6 — Manager gatekeeper | No direct evidence | Not yet |

---

*Created 2026-06-05 · Pre-R1 scoping · Validate via officer interviews before committing recommender build scope*
