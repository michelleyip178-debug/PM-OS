---
feature: Epic A — Opportunity Creation
date: 2026-07-03
owner: Michelle Yip
type: opportunity-solution-tree
parent-prd: outputs/prds/2026-07-07-W28-careercompass-r1-prd.md
status: discovery — not committed scope
---

# Epic A — Opportunity Solution Tree

Framework: Teresa Torres, *Continuous Discovery Habits*. Structure: Outcome → Opportunities (user/agency needs, pains, desires — from research and meeting evidence) → Solutions (ideas, unevaluated) → Experiments (how to test before committing).

**Why this exists:** Epic A's PRD section states design principles (structured data, competency tagging, type-as-metadata) but shouldn't carry solution detail — that's discovery work. This tree is where the "how" lives, so the PRD stays a scope document. Nothing here is committed R1 scope.

---

## Outcome

**Agencies get workforce-planning and competency visibility; postings enter CareerCompass with data quality good enough for R2+ to build on (recommender, gap analysis, dashboards) without a migration tax.**

Ladders up to: OKR 1 (competency growth), OKR 3 (workforce planning), Mission ("giving agencies better competency and workforce-planning visibility").

---

## Opportunities (user/agency needs — from research, not invented)

### O1 — Agencies need to post all their opportunity types somewhere, today they have no tooling for two of them
- Evidence: R1 jam draft — "Internal Jobs + Secondments are orphaned. No creation tooling exists anywhere."
- Evidence: Epic brief — officers "cannot discover or apply to IJ or Secondment opportunities through any channel today."

### O2 — Agencies want new programme categories added without a lengthy dev/policy cycle each time
- Evidence: WD/PSFG follow-up (2026-07-03) — WD wants PSFG as a standalone category; governance question ("programme-type vs. user-need categorization") explicitly flagged as likely to resurface with future programmes (PSLF named).

### O3 — Agencies (and PSD) need opportunities tagged with competencies, but can't reliably do this by hand at scale
- Evidence: WD confirmed all PSFG opportunities *can* be tagged against OCCs — but that's a volume of ~10-13/year for one programme. Scaling manual tagging to 5 opportunity types across 6+ agencies is an untested assumption.
- Evidence: C@G-ingested jobs arrive with zero competency data (no source tagging exists upstream).
- Evidence (mirror case): ESG meeting — officer-side competency data is also missing/fragmented outside HR systems. Same underlying problem, opposite side of the marketplace.

### O4 — Agencies need to see patterns across their postings (fill gaps, scarce competencies) but today's data is unstructured
- Evidence: OKR 3 target — 80% of agencies using analytics dashboards by Q1 2028. No current path from Creation's data shape to that dashboard if fields stay free-text.
- Evidence: OTG itself is the cautionary case — R1 exists partly because OTG's data quality was too poor to build on (~25% of 633 opportunities passed ingestion rules as-is).

### O5 — Officers need pre-fill/matching signal that's actually trustworthy, and today's model risks the same "current-state fit" trap as external job boards
- Evidence: Opportunity Recommender Hypotheses (H2) — aspiration may matter more than role-similarity for opportunity decisions.
- Evidence: Talent marketplace research brief — LinkedIn/Indeed match on current-profile fit; Gloat/Fuel50 lean toward "career fingerprint" framing instead.
- Note: this opportunity sits mostly downstream of Epic A (it's a recommender-era problem), but Epic A's schema choices determine whether R2+ can even attempt an aspiration-aware model.

---

## Solutions (unevaluated — ideas only, mapped to opportunities)

**For O1 (orphaned types):**
- S1a. Build native creation form scoped narrow (IJ + Secondment only first) — R1 jam draft's original recommendation
- S1b. Build full 5-type creation in one pass — current R1 PRD commitment (per epic brief, "confirmed")

**For O2 (category proliferation without governance):**
- S2a. Model opportunity type as metadata on a shared schema (small set of structured attributes: duration, commitment, competency tags), so new categories are configuration not code
- S2b. Keep type as a first-class schema concept (status quo pattern), accept that new categories are dev asks each time
- S2c. Escalate the programme-type vs. user-need categorization question to PS/DS as a formal governance decision before it resurfaces again (process solution, not a product one)

**For O3 (competency tagging at scale):**
- S3a. Require manual OCC tagging at creation, no tooling support — relies entirely on author diligence
- S3b. CIE-assisted tagging: infer competencies from JD/description text, present as an author-facing suggestion to confirm
- S3c. CIE as a fallback only for ingested jobs with no tags (C@G), leave natively-created opportunities to manual tagging
- S3d. Two-sided CIE: apply inference to both officer profiles (existing Non-Goal, deferred) and opportunities, as one shared inference layer rather than two separate builds

**For O4 (unstructured data blocking analytics):**
- S4a. Structured fields (role level, function, competency, time commitment) required at creation, no free-text equivalents
- S4b. Free text at creation now, retrofit structure later via a parsing/extraction pass (higher long-term cost, lower R1 lift)

**For O5 (current-state-fit trap):**
- S5a. No R1 action — pre-fill stays profile-driven, revisit only when recommender is scoped (R2+)
- S5b. Capture aspiration-adjacent signal at Creation time anyway (e.g., officer "interested in" tags), banking data for a future recommender even though Epic A/B don't use it yet

---

## Experiments (how to test before committing, ranked by what's cheapest to learn from)

| Experiment | Tests | Cost | Note |
|---|---|---|---|
| Ask WD/PSD: would agency authors actually complete manual OCC tagging at the volume R1 needs (5 types × 6 agencies)? | S3a vs S3b/c | Low — a conversation, not a build | Directly answers whether O3's "scale" assumption is real or theoretical |
| Prototype CIE-suggested tagging on a sample of existing OTG JDs, check inference accuracy against known-good OCC tags | S3b/c feasibility | Medium — needs CIE access + sample data | Answers whether CIE is accurate enough to trust before committing engineering time |
| Review OTG's actual historical category-change requests (has a new type/category been requested before PSFG?) | O2 real frequency | Low — desk research on existing data | Tests whether "category proliferation" is a real recurring pattern or a single anecdote (PSFG) |
| Compare structured-field completion rates vs. free-text completion rates in a quick agency-facing form mockup | S4a vs S4b | Low — a Figma test, not a build | Answers whether structured fields create authoring friction agencies will resist |

---

## What This Tree Does NOT Do

- Does not commit any solution to R1 scope. R1 PRD scope (Epic A: 5 types, structured form, publish workflow) stands as-is.
- Does not resolve the PSFG categorization governance question — that's a PS/DS policy decision, tracked separately (R1 PRD Open Question #1, WD addendum).
- Does not size CIE — open item #54 remains unsized and undiscussed with the team.

---

*Parent PRD: [2026-07-07-W28-careercompass-r1-prd.md](../../../prds/2026-07-07-W28-careercompass-r1-prd.md)*
*Related: [Talent marketplace job matching brief](../research-synthesis/2026-07-03-W27-talent-marketplace-job-matching-approaches.md), [R1 candidate ideas ICE](2026-07-03-W27-r1-candidate-ideas-ice.md)*
