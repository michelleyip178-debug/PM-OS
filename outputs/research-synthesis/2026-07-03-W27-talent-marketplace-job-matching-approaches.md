---
date: 2026-07-03
type: competitor-research-brief
mode: quick-brief
topic: How talent marketplace players approach job matching
linked_analysis: outputs/research-synthesis/2026-06-05-W23-opportunity-recommender-hypotheses.md
status: reference — not yet validated against officer interviews
---

# How Talent Marketplace Players Do Job Matching

**Purpose:** Quick reference for R1/R2 Opportunity Recommender scoping. Not a full competitor deep-dive — see [Deep Analysis mode](../../.claude/skills/competitor-analysis/SKILL.md) if you need SWOT/positioning-map depth later.

**What we already knew (internal):** [Opportunity Recommender Hypotheses](2026-06-05-W23-opportunity-recommender-hypotheses.md) names a "PMI-style 'similar to you' model (Jumpstart POC1)" and stress-tests it via H2 (aspiration > role-similarity). No external reference points existed for that comparison until now.

---

## Three matching philosophies, by player

### 1. External job boards (LinkedIn, Indeed) — filter-then-rank on current profile

Both optimize matching against **who you are now**, not where you want to go:

- **LinkedIn:** Skill-based matching via a Semantic Skill Graph — 38,000+ skills mapped into an ontology that infers related skills from experience context ("Built predictive models in Python" → Data Science), not just keyword match. Ranking factors: skills match %, experience relevance (past job title similarity), education/credentials, social proof (endorsements). (High confidence — [LinkedIn algorithm breakdown](https://www.linkedin.com/top-content/future-of-work/ai-job-matching-tools/skill-based-job-matching-algorithms/), verified 2026-07-03)
- **Indeed:** Analyzes 10,000+ attributes across 900 occupations (skills, licenses, schedules, pay, work setting). Explicitly **filters out non-matches first** (missing license, wrong location preference), then ranks what's left by fit. Learns from search/apply behavior over time. (High confidence — [Indeed Job Matching 101](https://www.indeed.com/news/releases/how-indeed-job-matching-works), verified 2026-07-03)

**Pattern:** current-state fit, not aspiration. This is the model your H2 flags as likely too weak for opportunity decisions — officers want "where I could go," not "roles like my last one."

### 2. Internal talent marketplaces (Gloat, Fuel50) — dynamic skills ontology + real-time signal

Closer analogue to CareerCompass since they're solving internal mobility, not external hiring:

- **Gloat:** AI-generated skills ontology that updates continuously from market + org data; matches employees to projects/gigs/roles in real time as skills data changes. (Medium confidence — vendor-sourced, [Gloat internal marketplace overview](https://gloat.com/blog/internal-talent-marketplace-implementation/), verified 2026-07-03)
- **Fuel50:** Builds a "career fingerprint" per person from real-time skills data, matches to gigs/projects/roles — explicitly framed around individual career pathing, not just open-role fulfillment. (Medium confidence — vendor-sourced, [Fuel50 talent marketplace software](https://fuel50.com/blog/talent-marketplace-software), verified 2026-07-03)

**Pattern:** both lean on a live, continuously-updated skills graph as the matching substrate — not a static profile snapshot. This directly bears on your #18/#41 competency SSOT problem in the R1 PRD: Gloat/Fuel50's matching quality is bottlenecked by the same thing you're already flagging as a Red/Amber risk — skills data has to be current and trustworthy, or matching degrades regardless of algorithm sophistication.

---

## What this means for your H1-H6 hypotheses

| Hypothesis | What the market evidence suggests |
|---|---|
| **H1** (discovery gap, not relevance gap) | Not directly addressed by any player's public materials — they all assume users are already searching. Doesn't confirm or kill H1; still needs officer interviews. |
| **H2** (aspiration > role-similarity) | External boards (LinkedIn/Indeed) match on current-state fit — the exact model H2 predicts will under-deliver. Internal marketplaces (Gloat/Fuel50) don't publicly detail whether they weight aspiration vs. current skills, but their "career fingerprint" framing (Fuel50) suggests movement toward aspiration-aware matching. **Weak support for H2** — worth citing Fuel50's framing in officer interviews as a concrete contrast to "similar to you." |
| **H3** (gap framing demotivates) | No player publicly frames matching as "here's what you're missing." All frame it as %-fit or qualifying attributes. This is a mild signal that the market has converged away from deficit framing — worth flagging as external validation if H3 tests true in interviews. |
| **H5** (trust before personalization) | All three internal-marketplace-style players require an existing skills profile as the matching input — none solve the cold-start problem publicly. This doesn't resolve H5; if anything it confirms the cold-start tension is real and unsolved industry-wide, not a CareerCompass-specific gap. |
| **H6** (manager gatekeeper) | Not addressed by any player — this looks like a genuinely OTEP/public-sector-specific dynamic, not something the market has already solved. No external benchmark available. |

---

## Gaps not covered by this brief

- Pricing, deployment models, and specific accuracy metrics for Gloat/Fuel50 (vendor-sourced content only, not independently verified)
- SeekOut excluded — public materials position it as external recruiting/talent intelligence, not internal-mobility matching, so it's not a relevant analogue here
- No data on how any player handles the manager-approval gate (H6) — likely because it's not a common feature in commercial products built for open, self-serve internal mobility

**If this needs to go further** (e.g., for a SteerCo or R2 scoping conversation), recommend upgrading to Deep Analysis mode: pull G2/Capterra reviews for Gloat/Fuel50 to see what internal-mobility users actually complain about post-matching (adoption, not algorithm quality), which is a stronger analogue to your #50 (CMM adoption risk) thread than the algorithms themselves.

---

*Source: Web research, 2026-07-03. Confidence levels noted per claim. Quick-brief mode — see competitor-analysis skill for Deep Analysis upgrade path.*
