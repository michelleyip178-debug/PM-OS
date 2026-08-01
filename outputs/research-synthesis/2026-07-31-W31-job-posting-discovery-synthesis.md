# Research Synthesis: Job Posting & Discovery Problems (OTG / CareerCompass)

**Date:** July 31, 2026

**Sources:** Meeting discussions ("Discussion...eerCompass"), sprint demos, OTG Onboarding PDF, OTEP background PDF

**Synthesized by:** Michelle (PM-drafted synthesis, structured here)

**Status:** Preliminary synthesis of discussions and artefacts — not a validated interview study

---

## What This Is (and Isn't)

This is a synthesis of recurring themes raised across meetings, sprint demos, and onboarding documentation — not a set of structured user interviews. That distinction matters for how you use it:

- **What it's good for:** Spotting patterns worth investigating, grounding PRD problem statements, prioritizing what to validate next.
- **What it's not:** Statistically validated research. None of the source citations include participant counts, frequency data, or verbatim quotes from officers/HR — they're synthesizer paraphrases of discussion content, not raw observations.
- **Before this goes into a PRD or stakeholder deck as evidence:** the "recurring" and "several discussions" language needs actual frequency counts, and ideally 2-3 direct quotes per theme from the underlying meeting transcripts.

**Missing Segments:** No officer voice and no HR voice appear directly in this synthesis — everything is filtered through internal team discussions about officers and HR, not officers/HR themselves. This is the single biggest gap before treating any of this as validated.

---

## Cross-Reference: What's Already Confirmed Elsewhere

Two of these themes are **not new** — they're already validated with real numbers in existing PRDs, which upgrades their confidence level substantially:

- **Fragmentation across platforms** is confirmed in [opportunities-listing.md](../../context-library/prds/opportunities-listing.md): "Officers struggle to discover and apply for development opportunities because they are fragmented across multiple portals (standalone FormSG links, Careers@Gov, OTG)." This PRD also has actual demand data — 7,097 sign-ups vs. 4,752 vacancies (+49% demand-over-supply) — which is real evidence this synthesis doesn't have.
- **Poor matching / vacancy-centric posting** connects directly to the Opportunity Recommender work already scoped in [talent-marketplace-job-matching-approaches.md](2026-07-03-W27-talent-marketplace-job-matching-approaches.md), which stress-tested hypotheses like "aspiration > role-similarity" (H2) against external benchmarks (LinkedIn, Indeed, Gloat, Fuel50). That brief explicitly flags H1 (discovery gap, not relevance gap) as still needing officer interviews — same gap this synthesis has.
- The **Inclusive Job Portal meeting** (2026-07-30) already reaffirmed the "not a full ATS" scope boundary and the SJR-stays-in-Compass rule that this synthesis's HR themes 1, 2, and 6 depend on.
- **SJR apply flow scope** and **which ATS to integrate with** are still open questions in [r1-seamless-application-draft.md](../../context-library/prds/r1-seamless-application-draft.md) — this synthesis doesn't resolve them, it just restates why they matter.

---

## Executive Summary

**Top 3 Insights:**
1. Fragmentation (across OTG, Careers@Gov, FormSG, agency portals, email) is the most corroborated theme — it has independent confirmation in the opportunities-listing PRD with real demand data, not just discussion mentions.
2. Poor matching (vacancy-centric postings vs. competency-based discovery) is a known, already-scoped problem — the Opportunity Recommender work is actively stress-testing this, so this synthesis theme should route into that existing thread, not spawn a parallel one.
3. Everything downstream of categorization inconsistency (data quality, HR manual overhead, search/filter breakage) is one root cause wearing different clothes — inconsistent metadata at the point of posting cascades into every other symptom.

**Recommended Actions:**
1. Treat fragmentation + poor matching as validated-enough to act on (real data exists elsewhere) — prioritize these for R1/R2 scoping.
2. Do NOT treat the 12 HR recommendations as prioritized or scoped — they're a brainstorm, not a backlog. Needs an impact/effort pass before any PRD references them as commitments.
3. Before quoting this synthesis externally (SteerCo, stakeholder decks), get 2-3 direct officer/HR quotes per theme — right now it's entirely mediated through internal discussion, which weakens it as evidence.

---

## Theme 1: Fragmentation Across Platforms

**User Impact:** Both HR and officers — frequency not quantified in source

**Severity:** High (root cause of duplicate postings, migration burden, officer confusion)

**Confidence:** High — independently confirmed with real demand data in [opportunities-listing.md](../../context-library/prds/opportunities-listing.md)

**Current Workaround:** Officers/HR manually check multiple channels (OTG, Careers@Gov, FormSG, agency portals, email circulars)

### The Problem
Opportunities exist across five-plus channels with no single source of truth. Duplicate postings appear when the same job is listed on both OTG and Careers@Gov.

### Supporting Evidence
- Discussion-sourced: "duplicate opportunities appearing when jobs are posted in both OTG and Careers@Gov" [Discussion...eerCompass | Meeting]
- Independently confirmed with numbers: opportunities-listing.md demand baseline shows 7,097 total sign-ups vs. 4,752 vacancies — real usage data, though this measures demand-over-supply, not fragmentation directly. ⚠️ No FormSG baseline submission volumes pulled yet, per that PRD — so the "channel migration" success metric still lacks a starting point.

### Recommended Direction
This is already MVP P0 scope per opportunities-listing.md ("Opportunity card listing... one of two confirmed MVP pillars"). No new recommendation needed — just confirm this synthesis's HR-side view of fragmentation (duplicate posting effort) feeds into that existing epic, since opportunities-listing.md currently reads primarily from the officer-discovery side.

**Open Questions:**
- [ ] What's the FormSG baseline submission volume? (blocks channel migration success metric) - @Michelle
- [ ] Does the HR-side duplicate-posting burden have its own metric, or does it ride on officer-side channel migration? - @Michelle

---

## Theme 2: Inconsistent Categorization & Data Quality

**User Impact:** HR (posting burden) and officers (broken search/filter) — frequency not quantified

**Severity:** High — described as blocking filtering, discovery, and reporting

**Confidence:** Medium — corroborated across multiple discussion sources (sprint demos + meetings) but no officer/HR quotes

**Current Workaround:** Manual remediation reports; HR corrects prefixes/categories by hand before migration

### The Problem
Agencies use inconsistent naming conventions and prefixes. Missing opportunity type prefixes create ambiguity between jobs, secondments, gigs, STIPs, and SJR. Sprint demos surfaced concrete downstream effects: null/unmapped job functions cause opportunities to silently disappear from filtered results.

### Supporting Evidence
- "Missing opportunity type prefixes... Agencies interpreting categories differently" [Discussion...eerCompass | Meeting]
- "Null or unmapped job functions cause opportunities to disappear from results" [Sprint Internal Demo | Meeting]

This is the strongest candidate for a root-cause theme — categorization inconsistency is the upstream cause of Theme 5 (data quality) and a major contributor to Theme 6 (HR manual overhead). Worth treating as one theme with two symptoms rather than three separate ones when this goes into a PRD.

### Recommended Direction
**Build:** Standardized opportunity type taxonomy with mandatory fields enforced at posting time (validation/guardrails), not cleaned up after the fact.

**Why:** Addresses root cause (posting-time inconsistency) rather than the downstream symptom (remediation reports).

**What NOT to build:** A remediation-reporting tool that treats bad data as inevitable — that's treating the symptom.

**Open Questions:**
- [ ] What's the actual frequency of "opportunities disappearing from filtered results" — is this a rare edge case or common? Sprint demo notes don't say. - @Michelle
- [ ] Which specific categories/prefixes are most frequently misapplied? Worth pulling from remediation reports already being generated per Theme 6. - @Michelle

---

## Theme 3: Poor Matching / Vacancy-Centric Posting

**User Impact:** Officers — frequency not quantified

**Severity:** High

**Confidence:** Medium-High — this synthesis restates a problem already being actively worked in a separate, more rigorous thread

**Current Workaround:** Officers manually interpret whether a role suits them by reading vacancy descriptions

### The Problem
Jobs are posted as vacancies (here's a role, does it fit you?) rather than competency-based opportunities (here's what matches your profile). This requires competency tagging, role profile mapping, job family alignment, and recommendation logic that doesn't yet exist consistently.

### Supporting Evidence
- "Many jobs are posted as vacancies rather than as competency-based opportunities. As a result, officers must manually interpret whether a role suits them." [Technical...er Compass | Meeting], [OTEP (1) | PDF]

### Recommended Direction
**Do not duplicate work.** This is already the subject of active hypothesis testing in [opportunity-recommender-hypotheses.md](2026-06-05-W23-opportunity-recommender-hypotheses.md) and external-benchmarking in [talent-marketplace-job-matching-approaches.md](2026-07-03-W27-talent-marketplace-job-matching-approaches.md). That work already identified H1 ("discovery gap, not relevance gap") as still needing officer interviews — this synthesis's Theme 3 doesn't add new evidence to that gap, it just restates the same open question from a different source.

**Recommendation:** merge this theme into the existing Opportunity Recommender research thread rather than treating it as a separate finding. Running new interviews should test H1/H2 directly, informed by both source sets.

---

## Theme 4: Manual Operational Overhead for HR

**User Impact:** HR — frequency not quantified

**Severity:** Medium-High — described as structural ("depends on human discipline rather than system guardrails")

**Confidence:** Medium — single discussion source, no HR quotes

**Current Workaround:** Manual remediation coordination before migration/publication

### The Problem
Agencies must manually correct categories and prefixes; HR generates reports to find malformed opportunities and coordinates remediation by hand. Posting quality depends on individual diligence, not system-enforced guardrails.

### Supporting Evidence
- "Reports must be generated to identify malformed opportunities. HR teams need to manually coordinate remediation before migration or publication." [Discussion...eerCompass | Meeting]

### Recommended Direction
Same root cause as Theme 2 — this is the HR-facing cost of the same categorization/data-quality gap. Solving Theme 2 with posting-time validation directly reduces this. Not a separate feature; a consequence to measure as a success metric of the Theme 2 fix (e.g., reduction in remediation report volume).

---

## Theme 5: Ringfencing Complicates Visibility

**User Impact:** Officers (confusion about eligibility) — frequency not quantified

**Severity:** Medium

**Confidence:** Medium — two discussion sources, no direct officer quotes on confusion

**Current Workaround:** None identified — officers apparently don't understand why they see/don't see certain postings

### The Problem
Agency-, job-family-, or officer-level ringfencing rules restrict visibility. Officers can't tell why they can see some jobs and not others, creating uncertainty about what's genuinely available to them.

### Supporting Evidence
- [OTEP ITC-WD | Teams], [Discussion...eerCompass | Meeting] — both citations, but no verbatim officer confusion quotes included in this synthesis.

### Recommended Direction
**Build:** Transparent ringfencing — apply rules behind the scenes, but when a job isn't visible or isn't eligible, consider whether the product should explain why (vs. rules being invisible/silent).

**Open Question:** Does OTEP intend to show "you're not eligible for this because X" messaging, or does ringfencing stay fully silent (jobs simply don't appear)? This is a real product decision with UX and trust implications, not yet resolved in this synthesis or, as far as I can tell, in existing PRDs.

**Open Questions:**
- [ ] Confirm with design/eng whether silent ringfencing vs. explained ineligibility has been decided. - @Michelle

---

## Theme 6: Transition-State Confusion (OTG → CareerCompass Migration)

**User Impact:** HR (dual posting burden) and officers (fragmented application experience)

**Severity:** Medium — temporary but real operational cost during migration window

**Confidence:** Low-Medium — discussion-sourced only, no specifics on duration or scale of dual-posting burden

### The Problem
During migration, agencies may need to run OTG and CareerCompass posting processes in parallel, keeping postings synchronized manually.

### Supporting Evidence
- [Discussion...eerCompass | Meeting], [Brief on C...dmap R1-R3 | Meeting]

### Recommended Direction
This is a rollout/change-management question, not a product feature gap. Worth a specific transition plan (how long is the dual-run window, what's the sync mechanism) rather than a build recommendation. Flag to whoever owns the R1-R3 roadmap brief.

---

## Themes We're NOT Prioritizing (And Why)

### "12 HR Recommendations" list (single-platform, templates, auto-tagging, auto-ringfencing, auto-expiry, integrated ATS, AI matching, dashboards, bulk tools)
**Why not prioritizing as-is:** This is a brainstorm of solution ideas, not a prioritized backlog. Several overlap directly with themes above (auto-tagging = Theme 2 fix, integrated ATS = contradicts the "not a full ATS" boundary reaffirmed in the Inclusive Job Portal meeting). Needs an impact/effort pass — recommend running this list through `/prioritize` before it goes anywhere near a PRD as committed scope.

---

## Contradictions & Open Questions

**Potential contradiction:** The synthesis recommends "Integrated applicant tracking" as an HR recommendation, but the Inclusive Job Portal meeting (2026-07-30) explicitly reaffirmed CareerCompass "is not meant to be a full fledge ATS," with a simple email handoff to HRs proposed as sufficient. These two documents pull in different directions — worth resolving which framing wins before either goes into a PRD.

**Open validation gap:** No theme in this synthesis includes a direct officer or HR quote. Recommend pulling 2-3 verbatim quotes per theme from the underlying meeting transcripts (Discussion...eerCompass sources) before using this synthesis in a stakeholder-facing document.

---

## Recommended Next Steps

1. **Merge, don't duplicate:** Theme 3 (poor matching) should route into the existing Opportunity Recommender research thread, not become a separate initiative.
2. **Resolve the ATS contradiction:** Reconcile "integrated applicant tracking" recommendation against the Inclusive Job Portal meeting's "not a full ATS" scope boundary before either informs a PRD.
3. **Prioritize the 12 HR recommendations:** Run through `/prioritize` (impact/effort) — do not treat as a scoped backlog.
4. **Pull direct quotes:** Before this synthesis is used in any stakeholder-facing deck, get verbatim officer/HR quotes from the underlying meeting transcripts to upgrade confidence from discussion-paraphrase to evidence.
5. **Decide the ringfencing UX question:** silent vs. explained ineligibility — flag to design if undecided.
6. **Consider `/prd-draft`:** Theme 1 (fragmentation) and Theme 2 (categorization/data quality) are both mature enough, with independent corroboration, to move into PRD scoping now. Theme 3 should wait for the Opportunity Recommender thread's own interview round.

---

## Appendix: Raw Themes as Provided

<details>
<summary>Click to expand original synthesis input</summary>

1. Job postings fragmented across multiple platforms (OTG, Careers@Gov, FormSG, agency portals, email, future CareerCompass channels); duplicate postings across OTG/Careers@Gov.
2. Opportunity categorisation inconsistent — missing prefixes, ambiguous job/secondment/gig/STIP/SJR distinctions, agencies interpret categories differently.
3. Discovery difficult for officers — no readily available platform historically; applicants struggle with competency-lens view.
4. Poor matching between jobs and officer profiles — need competency tagging, role/job family mapping, recommendation engines; vacancy-centric posting requires manual fit interpretation.
5. Data quality issues reduce search/filter effectiveness — misaligned job function mappings, null/unmapped functions hide opportunities, categories need mapping tables and remediation.
6. Manual operational overhead for HR — manual category/prefix correction, remediation reports, manual coordination before migration/publication.
7. Ringfencing rules complicate visibility — agency/job-family/officer-level rules create confusion about eligibility.
8. Transition-state confusion — dual posting processes during OTG-to-CareerCompass migration, manual sync burden.

Root problem (as originally synthesized): Jobs posted as isolated vacancies across fragmented systems with inconsistent metadata, making discovery hard for officers and management hard for HR.

Product opportunity (as originally synthesized): Move from "posting jobs" to "publishing structured, competency-tagged opportunities" — discoverable, searchable, matched, governed consistently.

Officer three-theme reduction: (1) Can't see all opportunities. (2) Don't know what's a good fit. (3) Applying isn't seamless across systems.

Proposed product statement: "Enable HR to create once, publish everywhere, and manage opportunities through an automated, competency-driven workflow with minimal manual intervention."

</details>
