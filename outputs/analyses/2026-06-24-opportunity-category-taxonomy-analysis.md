---
date: 2026-06-24
topic: Opportunity Category Taxonomy — Three-Source Analysis & Synthesis
status: Draft — for Michelle's review
tickets: OTEP-318 (filter by category), OTEP-88 (C@G listing), OTEP-289 (C@G category filter spike)
decision-needed: Is OTEP-318 scoped to OTG opportunities only for MVP, with C@G category filter deferred to R1?
---

# Opportunity Categories — Full Analysis & Synthesis

## What We're Actually Dealing With

Three taxonomies built for three different purposes, pulled into one product that needs a single coherent filter experience.

| Source | Items | Built for | Officer-facing? |
|--------|-------|-----------|-----------------|
| OTG Job Family | 21 | Filtering OTG gigs in OTG | Yes — used in OTG's filter panel today |
| C@G FieldSet (`Indus`) | 35 | Classifying C@G jobs on Careers@Gov | Yes — used in C@G's "Job function" filter |
| CompBank master list | ~400 | Competency framework catalog (agency + role + grade) | No — internal competency management tool |

**CompBank is a red herring for the filter problem.** It's the backend source for competency matching — explicitly deferred to R1 in the PRD. It should not touch OTEP-318.

The real decision is between OTG's 21 and C@G's 35.

---

## The Mapping Problem in Full

### Clean 1:1 matches (4 only)

| OTG Job Family | C@G FieldSet |
|----------------|-------------|
| Human Resources | Human Resources |
| International Relations | International Relations |
| Organisation Development | Organisation Development |
| Others | Others |

### Workable but imperfect mappings (12 — judgment call required)

| C@G Field | Listings | Maps to OTG | Friction |
|-----------|---------|-------------|---------|
| InfoComm, Technology, New Media Comms | 404 | Infocomm Technology & Smart Systems | Low |
| Engineering | 210 | Science, Technology & Engineering | Medium — OTG is broader |
| Education | 157 | Education & Skills Development | Low |
| Policy Formulation | 116 | Policy & Planning | Low |
| Accounting, Audit, Finance | 115 | Accounting & Finance + Audit + Finance | Medium — C@G merges 3 OTG families |
| Social and Community Development | 92 | Social Services | Low |
| Administration Support | 82 | Service Delivery | Medium — not the same thing |
| Enforcement | 54 | Regulation, Enforcement & Compliance | Medium — OTG is broader |
| Public Relations/Corp Comms/Psychology | 48 | Public Communications | Medium — "Psychology" has no OTG home |
| Marketing/Business Development | 40 | Industry/Sector Development & Programme Mgmt | High — stretch |
| Research and Analysis | 37 | Data Analysis & Data Management | Medium — different emphasis |
| Training and Development | 23 | Education & Skills Development | Low |

### C@G categories with no OTG home — 210 listings at risk

| C@G Field | Listings | Risk if force-mapped |
|-----------|---------|---------------------|
| Building and Estate Management | 65 | Becomes "Others" |
| Customer Service | 32 | Becomes "Others" |
| Healthcare | 31 | Becomes "Others" |
| Law/Legal Services | 23 | Becomes "Others" |
| Economics/Statistics + Statistics | 33 | Becomes "Others" |
| Corporate Strategy/Top Management | 17 | Becomes "Others" |
| Home Team Uniformed Services | 16 | Becomes "Others" |
| Foreign Service | 10 | Becomes "Others" |
| Arts/Cultural/Heritage | 7 | Becomes "Others" |
| Landscape/Horticulture | 7 | Becomes "Others" |
| Occupational Safety and Health | 6 | Becomes "Others" |
| Conciliation/Mediation | 4 | Negligible |
| Public Service Leadership | 2 | Negligible |
| Singapore Armed Forces | 0 | No impact |
| Translators/Interpreters | 0 | No impact |

**Total unmappable C@G listings: ~210 (11% of C@G catalogue)**

### OTG Job Families with no C@G equivalent (4)

These will only show results when filtering OTG opportunities — fine, because they represent OTG-specific opportunity types.

- Emergency Preparedness & Response
- Partnership & Engagement
- Procurement
- Transport & Logistics

---

## Core Structural Problem

If you force-map C@G into OTG's 21 Job Families, 210 C@G listings fall into "Others" because they represent public service roles that OTG doesn't have gigs for (Healthcare, Law, Building Management, etc.). "Others" balloons from 141 to ~350 listings and becomes meaningless as a filter.

If you go the other direction and use C@G's 35 as canonical, OTG's Procurement, Emergency Preparedness, Transport & Logistics, and Partnership & Engagement categories have no equivalent — and OTG's own taxonomy becomes second-class.

Neither direction works cleanly without a purpose-built OTEP taxonomy.

---

## Four Options for OTEP-318

### Option A — Use OTG's 21 Job Families (fastest for MVP)

OTG opportunities: native match. C@G opportunities: force-mapped to nearest Job Family, or left uncategorized and only appearing in "All" view.

**Pros:** OTEP-318 ACs can be written now. No new taxonomy work. C@G category filter deferred to Sprint 5 alongside OTEP-88/89.

**Cons:** 210 C@G listings are uncategorizable or mis-categorized. When C@G lands in Sprint 5, the category filter will feel broken for C@G jobs.

**When to pick:** If OTEP-318 is scoped to OTG opportunities only for MVP, and C@G category filter is explicitly deferred to R1.

---

### Option B — Use C@G's 35 FieldSet as canonical

C@G opportunities: native match. OTG opportunities: mapped to nearest FieldSet value (mostly workable, with 4 OTG-only families needing new entries or forced mapping).

**Pros:** Better coverage for C@G (1,908 live listings vs. OTG's ~160–400). More future-proof if C@G grows as the dominant source.

**Cons:** OTG-specific categories become second-class. Officers on OTG will see filter labels from C@G, which aren't what they know. Similar mapping effort to Option A but inverted.

**When to pick:** If C@G becomes the dominant opportunity source and OTG is transitional.

---

### Option C — Hybrid: source-aware filtering (May 2026 recommendation)

Officers see a "Source" toggle (OTG / C@G / All). When filtering OTG, they see OTG Job Family filter. When filtering C@G, they see C@G Job function filter. "All" view has no category filter.

**Pros:** No mapping required. Honest about the two-system reality. Fast to ship.

**Cons:** "All" view has degraded filter experience. Officers must understand they're dealing with two systems. UX debt grows as C@G catalogue grows.

**When to pick:** If unified category filter is explicitly deferred to R1, and MVP filter experience can be scoped to OTG only.

---

### Option D — Build a new OTEP-native taxonomy (recommended for R1)

Design a clean 15–18 item taxonomy purpose-built for OTEP's use case. Map both OTG Job Families and C@G FieldSet codes into it. This becomes the canonical `job_family` field in CareerCompass's DB.

**Draft OTEP taxonomy:**

| # | OTEP Category | Maps from OTG | Maps from C@G |
|---|--------------|---------------|---------------|
| 1 | Tech & Digital | Infocomm Technology & Smart Systems | InfoComm Technology (0017) |
| 2 | Policy & Strategy | Policy & Planning | Policy Formulation (0026), Corporate Strategy (0007) |
| 3 | Finance & Accounting | Accounting & Finance, Audit, Finance | Accounting, Audit, Finance (0001) |
| 4 | People & HR | Human Resources | Human Resources (0016) |
| 5 | Education & Learning | Education & Skills Development | Education (0010), Training & Development (0034) |
| 6 | Science & Engineering | Science, Technology & Engineering | Engineering (0012), Sciences (0030) |
| 7 | Social Services | Social Services | Social and Community Development (0032) |
| 8 | Data & Research | Data Analysis & Data Management | Research and Analysis (0029), Economics/Statistics (0009, 0033) |
| 9 | Regulation & Enforcement | Regulation, Enforcement & Compliance | Enforcement (0011), Investigation (0019), OSH (0023) |
| 10 | Communications | Public Communications | PR/Corp Comms/Psychology (0027) |
| 11 | International | International Relations | International Relations (0018), Foreign Service (0013) |
| 12 | Org & Admin | Organisation Development, Administration | Organisation Development (0024), Admin Support (0002) |
| 13 | Healthcare | — | Healthcare (0014) |
| 14 | Legal | — | Law/Legal Services (0021) |
| 15 | Industry & Sector | Industry/Sector Development & Programme Mgmt | Building & Estate (0004), Customer Service (0008), Marketing (0022) |
| 16 | Defence & Security | Emergency Preparedness & Response, Transport & Logistics | Home Team Uniformed Services (0015), SAF (0031) |
| 17 | Others | Others, Partnership & Engagement, Procurement | Others (0025), Arts (0003), Landscape (0020) |

**Pros:** Clean officer experience. Both catalogues map coherently. "Others" is small and honest. Scalable to new sources (PSFG, SJR, future platforms).

**Cons:** Requires PM to make all mapping decisions (~2 hours). Requires a new DB field and migration. Probably a sprint of work.

**When to pick:** For R1, once C@G is live and category filter usage data from MVP informs the right groupings.

---

## Recommendation

### For MVP (Sprint 3–5): Option A + scoped C@G deferral

- OTEP-318 uses OTG's 21 Job Families as the filter taxonomy
- ACs can be written now: "Officers can filter by Job Family; filter values are drawn from OTG's 21 Job Family taxonomy"
- C@G opportunities ingest with their native `Indus` code stored in the DB, but do not appear in category filter results in MVP — they appear only in "All" view and via the "Jobs" type filter (OTEP-86)
- Consistent with OTEP-88/89 being Sprint 5 (C@G is late in the build anyway)
- Eliminates the need to solve the mapping problem before Sprint 3 grooming

### For R1: Option D — OTEP-native taxonomy

Build the 17-category taxonomy above. Use Sprint 5 `filter_applied` event data to validate which groupings officers actually use before committing to final labels. The mapping table in this document is the starting brief for that work.

### For CompBank: park it entirely

CompBank belongs in the competency matching feature (R1, per the PRD — deferred from OTEP-87). When competency matching ships, officers search by competency (CompBank taxonomy) separately from browsing by category (OTEP taxonomy). These are two different discovery modes. Do not conflate.

---

## The One Decision Needed Now

**Is OTEP-318 scoped to OTG opportunities only for MVP, with C@G category filter deferred to R1?**

- **If yes:** write the ACs today using OTG's 21 Job Families. Category filter ships in Sprint 3 without any cross-taxonomy mapping work. C@G opportunities show in "All" view only; category filter shows no C@G results.
- **If no (C@G must be categorizable in MVP):** the mapping table above needs to be finalised, a DB migration is required before Sprint 5, and the ~210 unmappable C@G listings need an explicit decision on what they show as (likely "Others", which is a UX problem).

Confirm with Pow Hwee + Amber before OTEP-318 ACs are written.

---

## Related Files

- [Categorisation Research (May 2026)](../../../PM-skills-ALL-1/01-discovery/research/categorisation-research.md) — original OTG vs C@G filter comparison; recommended hybrid model
- [OTG Ingestion Discovery (Jun 2026)](../archive/2026-W24-Jun08-Jun14/analyses/2026-06-10-W24-otg-ingestion-product-discovery.md) — 75% skip rate; function field decisions
- [MVP Category Model Decision (22 Jun 2026)](2026-06-22-4cat-mapping-xian-zhang.md) — STIP/Gig/Jobs/PSFG decision; no merge
- [C@G FieldSet raw data](../../cag_field_set.json) — SAP OData v2 response; 35 Indus codes with live counts
- [Opportunities Listing PRD](../../../PM-skills-ALL-1/02-prd/prd-opportunities.md) — OTEP-318 ACs TBC; CompBank deferred to R1

---

*Written: 2026-06-24*
*Sources: cag_field_set.json (C@G API), OTG Job Family list (21 items), CompBank master list (~400 items), categorisation-research.md, otg-ingestion-product-discovery.md, 4cat-mapping-xian-zhang.md, prd-opportunities.md*
*Next: Confirm OTEP-318 MVP scope with Pow Hwee + Amber. If OTG-only, write ACs. If C@G included, finalise mapping table and raise DB migration with Leo.*
