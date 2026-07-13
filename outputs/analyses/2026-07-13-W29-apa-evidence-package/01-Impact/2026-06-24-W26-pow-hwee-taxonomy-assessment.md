---
date: 2026-06-24
updated: 2026-06-25
topic: Assessment — Pow Hwee's WOG 29 Job Families Taxonomy Proposal
status: Closed — proposal accepted 2026-06-25
decision-needed: ~~ Confirm WOG list before accepting ~~ Closed.
related-files:
  - outputs/analyses/2026-06-24-opportunity-category-taxonomy-analysis.md
  - PM-skills-ALL-1/01-discovery/research/categorisation-research.md
  - PM-skills-ALL-1/03-stories/otep-stories/OTEP-289-spike-definition.md
---

# Assessment: Pow Hwee's Taxonomy Proposal

## Status — Closed 2026-06-25

WOG canonical list confirmed as **29 Job Families** (not 23 as originally stated). Full list confirmed 2026-06-25. Proposal accepted. Two-dictionary architecture ready to implement. See OTEP-289-spike-definition.md for mapping tables.

---

## The Proposal

Pow Hwee is proposing:
1. Canonical taxonomy = WOG's Job Families
2. OTG's 27 values map into WOG 29 via a translation dictionary at ingestion
3. C@G's 33 values map into WOG 29 via the same dictionary at ingestion
4. Unmapped values fall to "Others" with a warning log
5. Frontend filter shows the WOG 29 categories — source-agnostic

---

## What This Gets Right

**Architecture pattern is correct.** Translation at ingestion with a canonical presentation layer is the right call. The frontend stays source-agnostic and officers see one coherent filter — not OTG's terminology vs C@G's terminology. This is structurally better than the hybrid source-toggle model recommended in May 2026.

**Authoritative canonical layer.** Using WOG's official Job Families (rather than inventing an OTEP-native 17-category list) means the taxonomy has organisational standing. It's unlikely to change arbitrarily, and future sources (PSFG, SJR, future platforms) can map into it using the same pattern.

**Warning log is good operational hygiene.** Surfacing unmapped values at ingestion means data quality issues are visible before they hit officers. Consistent with the Jun 16 decision.

**OTG-to-WOG mapping is trivial.** OTG uses the HR 27-family taxonomy, which is a direct subset of WOG 29. All 27 OTG families map 1:1 to WOG — Dictionary 1 is effectively a passthrough. No translation logic needed at ingestion for OTG.

---

## WOG Canonical List — Confirmed 2026-06-25

**29 Job Families:**

Arts & Culture, Corporate Administration, Education & Skills Development, Emergency Preparedness & Response, Environment & Resources, Finance, Governance Risk & Controls, Human Resource, Industry & Sector Development, Infocomm Technology & Smart Systems, Internal Audit, International Relations, Land & Estate Management, Legal, Organisation Development, Partnership & Engagement, Planning, Policy & Planning, Procurement, Programme & Project Management, Programme Evaluation, Public Communications, Regulatory, Research & Innovation, Science Tech & Engineering, Service Delivery, Social & Community Services, Trade & Economy, Urban & Physical Planning

**Relationship to other taxonomies:**
- HR 27 = WOG 29 minus Partnership & Engagement and Corporate Administration
- OTG 27 = HR 27 (same taxonomy, confirmed 2026-06-25)
- OTG maps 1:1 to WOG — no translation needed
- C@G 33 requires translation — Dictionary 2 (see OTEP-289)

---

## C@G Coverage Under WOG 29

The Jun 24 analysis found ~210 C@G listings (11%) unmappable under OTG 21. Under WOG 29, that drops significantly.

| C@G Category | Listings | Under OTG 21 | Under WOG 29 |
|---|---|---|---|
| Building and Estate Management | 65 | ❌ Others | ✅ Land & Estate Management |
| Customer Service | 32 | ❌ Others | ⚠️ Service Delivery (partial) |
| Healthcare | 31 | ❌ Others | ❌ Still Others |
| Law/Legal Services | 23 | ❌ Others | ✅ Legal |
| Economics/Statistics | 33 | ❌ Others | ⚠️ Trade & Economy / Research & Innovation (judgment) |
| Corporate Strategy/Top Management | 17 | ❌ Others | ✅ Corporate Administration |
| Home Team Uniformed Services | 16 | ❌ Others | ⚠️ Emergency Preparedness & Response (partial) |
| Foreign Service | 10 | ❌ Others | ✅ International Relations |
| Arts/Cultural/Heritage | 7 | ❌ Others | ✅ Arts & Culture |
| Landscape/Horticulture | 7 | ❌ Others | ⚠️ Environment & Resources (stretch) |
| Occupational Safety and Health | 6 | ❌ Others | ⚠️ Regulatory (partial) |
| Conciliation/Mediation | 4 | ❌ Others | ❌ Still Others |

**~173 of 210 previously unmappable listings now resolve under WOG 29. ~37 remain (Healthcare is the main gap at 31 listings).**

---

## How This Compares to Previous Options

| Approach | C@G Coverage | Architecture | Status |
|---|---|---|---|
| May 2026 recommendation (hybrid/source-toggle) | Poor — "All" view has no category filter | Source-aware UI, no translation | Superseded |
| Jun 24 — Option A (OTG 21, MVP) | Poor — 210 C@G listings fall to "Others" | No translation | Was recommended for MVP |
| Jun 24 — Option D (OTEP 17-category) | Good — purpose-built for both | Translation at ingestion | Superseded |
| Pow Hwee proposal (WOG 29) | Good — ~37 listings fall to Others | Translation at ingestion | **Accepted** |

WOG 29 is strictly better than Option D — same architecture, more organisational authority, better C@G coverage than a purpose-built OTEP list.

---

## Translation Dictionary: Build and Maintenance

Two dictionaries needed:

**Dictionary 1 — OTG → WOG 29:** Trivial. All 27 OTG families map 1:1. Engineering effort is near-zero — just store the OTG Job Family value directly as the canonical value.

**Dictionary 2 — C@G → WOG 29:** ~2 hours PM judgment work. 15 clean matches, 12 partial, 6 fall to Others (Healthcare being the only meaningful one at 31 listings). Full mapping table in OTEP-289-spike-definition.md.

**Open: dictionary ownership**
- Who owns building Dictionary 2? → Michelle / Pow Hwee to confirm
- Who owns maintenance when C@G updates their FieldSet codes?
- Is the dictionary hardcoded in ingestion or managed in a config table (preferred — avoids deploys for new C@G codes)?
- Warning log SLA when a new unmapped code appears?

---

## STIPs and Gigs: Residual Risk

WOG 29 was designed to classify full-time roles. OTG STIPs and Gigs are temporary engagements and may cross multiple Job Families. If OTG's Job Family field is null at source (the Jun 10 ingestion discovery showed a 75% skip rate on the `function` field), the translation dictionary has nothing to translate.

**Mitigation:** Warning log must fire on null OTG Job Family values as well as C@G unmappables — these are different failure modes (data quality vs taxonomy gap) and need to be distinguishable in the log.

---

## Verdict — Closed (Updated 2026-06-25)

**Pow Hwee's architecture pattern is accepted. Canonical layer changed from WOG 29 to C@G taxonomy.**

Pow Hwee's proposal (translation at ingestion, source-agnostic frontend) is correct. However, the canonical display layer has been updated: instead of WOG 29, the filter uses C@G's 33 Indus descriptions directly. This was confirmed 2026-06-25.

**Revised implementation:**
1. C@G ingestion: store `Indus` code as-is — passthrough, no translation needed
2. OTG ingestion: map OTG `job_family` → C@G `Indus` code at ingest (hardcoded map in Story 4)
3. Warning log: flag OTG families with no C@G equivalent (`OTG_JOB_FAMILY_UNMAPPED`) and null OTG job_family (`OTG_JOB_FAMILY_NULL`) as separate event types
4. Filter UI: show C@G Indus descriptions as filter labels

**What this changes vs the WOG 29 approach:**
- Healthcare (0014, 31 C@G listings) is now a visible filter option — was stuck in "Others" under WOG 29
- Environment & Resources and Programme & Project Management (OTG-only families) fall to Others — no C@G equivalent
- Internal Audit collapses into Accounting, Audit, Finance (C@G cannot distinguish at code level)
- WOG 29 reference table is retained as context only — not used in the pipeline

See OTEP-289-spike-definition.md and Story 4 in OTEP-ingestion-v3-rule-updates.md for implementation details.

---

*Written: 2026-06-24. Updated: 2026-06-25 — WOG canonical list confirmed as 29 families; proposal accepted; C@G coverage table updated. Further updated 2026-06-25 — canonical filter layer changed from WOG 29 to C@G Indus taxonomy; implementation revised accordingly.*
*Sources: WOG 29 confirmed list (2026-06-25), HR-confirmed 27 OTG job families, opportunity-category-taxonomy-analysis.md, categorisation-research.md, OTEP-289-spike-definition.md*
