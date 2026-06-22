---
date: 2026-06-22
to: Xian Zhang
purpose: Validate OTG → CareerCompass category mapping before S5 grooming
status: DRAFT — fill in [CONFIRMED TYPE NAME] after DevOps chat
---

# OTG → CareerCompass Category Mapping — Validation Request

Hi Xian Zhang,

Following the decision to simplify the opportunity type model for MVP, I'd like to confirm the mapping with you before we update the sprint stories and lock the filter design for Sprint 5. This is a quick validation — I just need a thumbs-up or any corrections before **Thursday 26 June** (S5 grooming).

---

## Proposed Category Mapping

This is what officers will see in CareerCompass at MVP. Categories are officer-facing groupings, not the internal OTG posting types.

| CareerCompass Category | What it covers | OTG source types | Live at MVP? |
|---|---|---|---|
| **[CONFIRMED TYPE NAME]** | Short-term attachments and project-based tasks — opportunities with a defined time commitment and end date | `STIP`, `Gig` | Yes |
| **Jobs** | Internal roles, secondments, and Careers@Gov external jobs | `Job`, `Secondment`, C@G source | Yes |
| **SJR** | Structured job rotations | `SJR` | No — excluded from MVP listing |
| **PSFG** | Voluntary, skills-based public service opportunities | TBD | No — deferred to R1 |

**Notes:**
- STIP and Gig are merged into a single filter chip and card label at MVP. The underlying data retains both values; this is a display-layer change only. *(Pending DevOps confirmation that no schema change is needed.)*
- C@G opportunities appear in the same listing as OTG opportunities. They are visually badged as "Careers@Gov" so officers know they're leaving CareerCompass to apply.
- SJR and PSFG are not visible in the MVP listing. Officers looking for these will not see them.

---

## Why PSFG is deferred — and what needs to change

PSFG has its own category in the model (I-016) and will be included when the data is ready. Three structural gaps in the current OTG data are blocking it.

**1. No competency tagging (0 of 20 PSFG records)**
Every PSFG record has N/A in the Talents field. CareerCompass surfaces opportunities based on competency gaps — without tags, PSFG can't be matched to any officer. It would appear as a flat, unranked list with no relevance signal, which is a worse experience than OTG today.

**2. Incomplete apply flow (10 of 20 records have no FormSG link)**
Half of all PSFG opportunities have no extractable apply path. If half the catalogue is a dead end at launch, that's not an edge case — it's the default experience. Officers clicking "Apply" on a PSFG card would hit a broken state at the moment of highest intent.

**3. No participation tracking**
Sign-ups happen via external FormSG links and are never written back to OTG. This means we can't measure officer behaviour on PSFG in the pilot — any data we collect would be structurally empty, not a real signal on adoption.

**Conditions for inclusion (PSFG comes in once these are met):**

| Condition | What's needed | Who to chase |
|-----------|--------------|-------------|
| Competency tagging | Host orgs tag OCCs/FCs on each PSFG opportunity before posting | PSFG programme team / OTG team |
| Standardised apply flow | All live PSFG opportunities have a valid FormSG link | OTG team (otg@psd.gov.sg) |
| Participation tracking | Agreed mechanism to capture sign-up data | PSFG programme team |

Once these three conditions are confirmed, we scope the ingestion work and assign it a sprint. This is a sequencing decision, not a rejection.

---

## What's changing from the previous model

The old working model had STIP and Gig as separate filter chips. We're merging them because:
- Both types have identical business rules (time commitment required, FormSG apply flow)
- Officers don't distinguish between them when searching — they just want "shorter-term opportunities"
- Fewer filter chips reduce cognitive load on the listing page

---

## What I need from you

1. **Is the merged category name ([CONFIRMED TYPE NAME]) clear to officers?** Does it accurately describe both STIP and Gig opportunities in plain language?
2. **Does the Jobs grouping make sense?** Secondments and internal job postings show up together with Careers@Gov roles — is this the right bundling from a BO perspective?
3. **Any concerns about SJR or PSFG being absent from MVP?** Both are excluded — confirming you're aligned before we lock the sprint.

A quick reply or a 15-min chat this week works. I need confirmation before **Thursday 26 June 14:00 (S5 grooming)**.

---

*Background: Decision I-018 (OTG Ingestion Decision Log, 2026-06-12, revised 2026-06-16). Recategorisation approach confirmed: Option A+C (display label merge now, data model cleanup pre-R1).*
