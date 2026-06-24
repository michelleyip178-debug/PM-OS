---
date: 2026-06-24
topic: Assessment — Pow Hwee's WOG 23 Job Families Taxonomy Proposal
status: For Michelle's review
decision-needed: Confirm WOG 23 coverage for C@G unmappables before accepting proposal as final
related-files:
  - outputs/analyses/2026-06-24-opportunity-category-taxonomy-analysis.md
  - PM-skills-ALL-1/01-discovery/research/categorisation-research.md
  - outputs/decisions/decisions-log.md (D-023 — D-026)
---

# Assessment: Pow Hwee's Taxonomy Proposal

## The Proposal

Pow Hwee is proposing:
1. Canonical taxonomy = WOG's 23 Job Families (already decided Jun 16)
2. OTG's 21 values map into the 23 via a translation dictionary at ingestion
3. C@G's 35 values map into the 23 via the same dictionary at ingestion
4. Unmapped values fall to "Others" with a warning log
5. Frontend filter shows the 23 WOG categories — source-agnostic

---

## What This Gets Right

**Architecture pattern is correct.** Translation at ingestion with a canonical presentation layer is the right call. The frontend stays source-agnostic and officers see one coherent filter — not OTG's terminology vs C@G's terminology. This is structurally better than the hybrid source-toggle model recommended in May 2026.

**Authoritative canonical layer.** Using WOG's official 23 Job Families (rather than inventing an OTEP-native 17-category list) means the taxonomy has organisational standing. It's unlikely to change arbitrarily, and future sources (PSFG, SJR, future platforms) can map into it using the same pattern.

**Warning log is good operational hygiene.** Surfacing unmapped values at ingestion means data quality issues are visible before they hit officers. Consistent with the Jun 16 decision.

**OTG-to-WOG mapping is low-risk.** OTG's 21 Job Families and WOG's 23 Job Families are related — OTG's taxonomy was likely derived from WOG's. The delta is small (2 families). Mapping OTG → WOG 23 is straightforward and unlikely to produce bad mappings.

---

## The Core Risk: Unknown Coverage for C@G

The taxonomy analysis showed that when OTG's 21 families is used as canonical, **~210 C@G listings (11% of the C@G catalogue) have no clean mapping** and fall to "Others." The "Others" bucket would balloon from 141 listings to ~350, making it useless as a filter.

The critical question Pow Hwee's proposal does not yet answer: **What are the 2 additional Job Families in WOG 23 vs OTG 21?**

This matters because the unmappable C@G listings are concentrated in specific categories:

| C@G Category | Listings | Falls to "Others" under OTG 21 |
|---|---|---|
| Building and Estate Management | 65 | Yes |
| Healthcare | 31 | Yes |
| Customer Service | 32 | Yes |
| Law/Legal Services | 23 | Yes |
| Economics/Statistics | 33 | Yes |
| Corporate Strategy/Top Management | 17 | Yes |
| Home Team Uniformed Services | 16 | Yes |
| Foreign Service | 10 | Yes |
| Arts/Cultural/Heritage | 7 | Yes |
| Others (already) | various | Yes |
| **Total** | **~210** | — |

If WOG's 2 additional families are "Legal" and "Healthcare," the proposal significantly reduces the "Others" problem. If the 2 additional families are something unrelated (e.g. "Transport & Logistics" and "Emergency Preparedness" — categories OTG has but WOG may formalise differently), the C@G coverage problem is essentially unchanged from Option A in the taxonomy analysis.

**This is the one fact that needs confirming before accepting the proposal as final.**

---

## How This Compares to Previous Options

| Approach | C@G Coverage | Architecture | Timeline | Status |
|---|---|---|---|---|
| May 2026 recommendation (hybrid/source-toggle) | Poor — "All" view has no category filter | Source-aware UI, no translation | Fast | Superseded |
| Jun 24 analysis — Option A (OTG 21, MVP) | Poor — 210 C@G listings fall to "Others" | No translation needed | Fastest | Recommended for MVP |
| Jun 24 analysis — Option D (OTEP 17-category) | Good — purpose-built to cover both | Translation at ingestion | ~1 sprint | Recommended for R1 |
| Pow Hwee proposal (WOG 23) | **Unknown — depends on those 2 extra families** | Translation at ingestion | ~1 sprint | Proposed today |

Pow Hwee's proposal and Option D (OTEP-native 17 categories) are architecturally equivalent — both use a canonical layer with translation at ingestion. The difference is the canonical list itself: WOG 23 (authoritative, pre-existing) vs. OTEP 17 (purpose-built to maximise C@G coverage).

**If WOG 23 includes Healthcare and Legal as explicit families, it's strictly better than the OTEP 17 approach.** It has organisational authority and doesn't require inventing a new taxonomy.

**If WOG 23 still leaves Healthcare, Legal, and Building Management unmapped, the OTEP 17-category approach from Option D gives better C@G coverage** — because that taxonomy was designed with those gaps in mind.

---

## Translation Dictionary: Build and Maintenance

Pow Hwee's proposal requires building two translation dictionaries:
- OTG Job Family → WOG 23 (21 mappings; likely straightforward)
- C@G FieldSet (`Indus`) → WOG 23 (35 mappings; several require judgment calls)

The analysis found 12 of 35 C@G categories are "workable but imperfect" mappings and would need judgment calls. Someone needs to make those calls before the dictionary is built.

**Open questions on the dictionary:**
1. Who owns building the initial mapping? (Michelle / Pow Hwee / Xian Zhang?)
2. Who owns maintenance when C@G updates their FieldSet codes?
3. Is the translation dictionary hardcoded in the ingestion layer, or managed in a config/table that can be updated without a deploy?
4. When the warning log fires for an unmapped value, what's the SLA and process for adding it to the dictionary?

The dictionary itself is ~2 hours of PM judgment work (mapping C@G's 35 to WOG 23) plus engineering to wire it into the ingestion pipeline. The bigger risk is that it's treated as a one-time build rather than a maintained asset.

---

## STIPs and Gigs: An Unresolved Fit Issue

WOG's 23 Job Families were designed to classify full-time roles. C@G permanent jobs map cleanly. But OTG's STIPs and Gigs are temporary engagements — and a STIP or Gig might cross multiple job families (e.g. a data analytics project run out of a social services team).

If a STIP is tagged to a single Job Family at source, the mapping works. If OTG's Job Family field is inconsistently filled (the Jun 10 ingestion discovery showed a 75% skip rate on the `function` field), the translation dictionary is working with unreliable input data.

**Risk:** For OTG opportunities, the "category" filter may feel incoherent because the source data is patchy — not because the taxonomy is wrong.

**Mitigation:** Build the warning log to also flag OTG opportunities with null/empty Job Family values, not just C@G unmappables.

---

## Verdict

**The architecture is right. The canonical list needs one confirmation.**

Accept the translation-at-ingestion pattern and the source-agnostic frontend. This supersedes the May 2026 hybrid recommendation and is directionally consistent with Option D from the Jun 24 analysis.

Before formally closing the taxonomy decision:

1. **Confirm WOG's 23 Job Families full list.** Specifically: do the 2 families not in OTG's 21 include Healthcare and/or Legal? If yes, WOG 23 is the right canonical layer and the proposal is ready to implement. If no, the OTEP 17-category taxonomy (Option D) gives better C@G coverage and should be preferred.

2. **Assign a dictionary owner.** The translation dictionary needs one PM or data owner to make the ~12 judgment-call mappings for C@G, and a maintenance model for when C@G's FieldSet changes.

3. **Flag OTG null Job Family values in the warning log**, not just C@G unmappables. This surfaces the ingestion data quality problem separately from the taxonomy problem.

4. **Confirm OTEP-318 MVP scope stays OTG-only.** The translation dictionary for C@G → WOG 23 is a pre-condition for C@G opportunities to appear in the category filter. If C@G is Sprint 5 (per the existing plan), the dictionary can be built in parallel — but it needs to be done before C@G ingestion goes to production.

---

## What to Confirm With Pow Hwee

> "The architecture makes sense — translation at ingestion, WOG 23 as the canonical presentation layer. Before we finalise, I need one thing from you: what are WOG's full 23 Job Families? Specifically, are Healthcare and Legal in there? The taxonomy analysis shows those are the two biggest unmappable C@G categories — 54 listings between them — so if WOG 23 covers them, the 'Others' problem mostly goes away. If not, we may want to revisit whether an OTEP-native list would give us better coverage."

---

*Written: 2026-06-24*
*Sources: Pow Hwee's taxonomy proposal (Product x BO senior session), opportunity-category-taxonomy-analysis.md, categorisation-research.md, decisions-log.md, otg-ingestion-product-discovery.md*
