---
date: 2026-06-25
topic: C@G Indus Code Reference (Passthrough — No Translation Needed)
status: Superseded for ingestion purposes — C@G is now the canonical filter taxonomy
sources: cag_field_set.json (SAP OData v2)
related-files:
  - PM-skills-ALL-1/03-stories/otep-stories/OTEP-289-spike-definition.md
  - PM-skills-ALL-1/03-stories/story-pipeline/draft/OTEP-ingestion-v3-rule-updates.md (Story 4 AC4)
  - outputs/analyses/2026-06-25-otg-to-cag-job-family-mapping.md
  - outputs/analyses/2026-06-24-pow-hwee-taxonomy-assessment.md
---

# C@G Indus Code Reference

**Decision 2026-06-25:** C@G's Indus codes are the canonical filter taxonomy. C@G ingestion is a passthrough — store `Indus` directly, no translation needed. The WOG → C@G translation table below is retained as reference only and is NOT used in the ingestion pipeline.

The file that matters for engineering is [outputs/analyses/2026-06-25-otg-to-cag-job-family-mapping.md](2026-06-25-otg-to-cag-job-family-mapping.md) — that's the OTG → C@G Indus translation Leo needs to implement.

---

## C@G Indus Reference (Historical — WOG Mapping Approach, Now Superseded)

**Match quality key (historical — WOG approach):**
- ✅ Clean — direct or near-direct equivalent
- ⚠️ Partial — best available mapping
- ❌ No match — would have stored as "Others"

---

## Mapping Table

| Indus | C@G Description | WOG + OTG Canonical | Match |
|---|---|---|---|
| 0001 | Accounting, Audit, Finance | Finance | ✅ Clean |
| 0002 | Administration Support | Corporate Administration | ⚠️ Partial |
| 0003 | Arts/Cultural/Heritage | Arts & Culture | ✅ Clean |
| 0004 | Building and Estate Management | Land & Estate Management | ✅ Clean |
| 0005 | Conciliation/Mediation | Others | ❌ No match |
| 0006 | Conciliation/Mediation and Statistics | Others | ❌ No match |
| 0007 | Corporate Strategy/Top Management | Corporate Administration | ✅ Clean |
| 0008 | Customer Service | Service Delivery | ⚠️ Partial |
| 0009 | Economics/Statistics | Trade & Economy | ⚠️ Partial |
| 0010 | Education | Education & Skills Development | ✅ Clean |
| 0011 | Enforcement | Regulatory | ✅ Clean |
| 0012 | Engineering | Science, Tech & Engineering | ✅ Clean |
| 0013 | Foreign Service | International Relations | ✅ Clean |
| 0014 | Healthcare | Others | ❌ No match (31 listings) |
| 0015 | Home Team Uniformed Services | Emergency Preparedness & Response | ⚠️ Partial |
| 0016 | Human Resources | Human Resource | ✅ Clean |
| 0017 | InfoComm, Technology, New Media Communications | Infocomm Technology & Smart Systems | ✅ Clean |
| 0018 | International Relations | International Relations | ✅ Clean |
| 0019 | Investigation | Regulatory | ⚠️ Partial |
| 0020 | Landscape/Horticulture | Environment & Resources | ⚠️ Partial |
| 0021 | Law/Legal Services | Legal | ✅ Clean |
| 0022 | Marketing/Business Development | Industry & Sector Development | ⚠️ Partial |
| 0023 | Occupational Safety and Health | Regulatory | ⚠️ Partial |
| 0024 | Organisation Development | Organisation Development | ✅ Clean |
| 0025 | Others | Others | ✅ Clean |
| 0026 | Policy Formulation | Policy & Planning | ✅ Clean |
| 0027 | Public Relations/Corporate Communications/Psychology | Public Communications | ✅ Clean |
| 0028 | Public Service Leadership | Partnership & Engagement | ⚠️ Partial |
| 0029 | Research and Analysis | Research & Innovation | ✅ Clean |
| 0030 | Sciences (e.g. life sciences, bio-technology etc.) | Research & Innovation | ⚠️ Partial |
| 0031 | Singapore Armed Forces | Others | ❌ No match (0 listings) |
| 0032 | Social and Community Development | Social & Community Services | ✅ Clean |
| 0033 | Statistics | Research & Innovation | ⚠️ Partial |
| 0034 | Training and Development | Education & Skills Development | ✅ Clean |
| 0035 | Translators/Interpreters | Others | ❌ No match (0 listings) |

**Summary:** 18 clean, 11 partial, 6 no match. Only Healthcare (0014, 31 listings) is a meaningful officer-facing gap.

---

## Notes

- `0001` Accounting, Audit, Finance maps to `Finance` only. `Internal Audit` is an OTG-only path — C@G cannot distinguish audit-specific roles from the Indus code alone.
- `0016` C@G label is `Human Resources` (plural); WOG canonical is `Human Resource` (singular). Leo must store the WOG string exactly.
- `0014` Healthcare has no WOG equivalent and 31 live listings. Accepted for MVP; revisit in R1 if usage data shows officers are missing these.
- Partial-fit codes that trigger a warning log even when mapped: `0002`, `0008`, `0009`, `0015`, `0020`, `0022`, `0023`, `0028`, `0030`, `0033`

---

## WOG Canonical List (29 families, confirmed 2026-06-25)

Arts & Culture, Corporate Administration, Education & Skills Development, Emergency Preparedness & Response, Environment & Resources, Finance, Governance Risk & Controls, Human Resource, Industry & Sector Development, Infocomm Technology & Smart Systems, Internal Audit, International Relations, Land & Estate Management, Legal, Organisation Development, Partnership & Engagement, Planning, Policy & Planning, Procurement, Programme & Project Management, Programme Evaluation, Public Communications, Regulatory, Research & Innovation, Science Tech & Engineering, Service Delivery, Social & Community Services, Trade & Economy, Urban & Physical Planning
