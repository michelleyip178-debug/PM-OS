---
date: 2026-06-25
topic: OTG Job Family → C@G Indus Code Mapping
status: Confirmed
sources: HR-confirmed OTG taxonomy (27 families, 2026-06-25), cag_field_set.json (SAP OData v2)
related-files:
  - PM-skills-ALL-1/03-stories/otep-stories/OTEP-289-spike-definition.md
  - PM-skills-ALL-1/03-stories/story-pipeline/draft/OTEP-ingestion-v3-rule-updates.md (Story 4)
  - outputs/analyses/2026-06-25-cag-indus-to-wog-job-family-mapping.md (superseded — WOG approach not used)
---

# OTG Job Family → C@G Indus Code Mapping

C@G's 33 Indus codes are the canonical filter taxonomy for CareerCompass (decision: 2026-06-25). C@G opportunities are a passthrough — their `Indus` code is stored directly. OTG opportunities must translate `job_family` → C@G `Indus` code at ingestion.

**Engineering note:** OTG transform layer applies the map below. C@G transform layer stores `Indus` as-is, no map needed.

**Match quality key:**
- ✅ Clean — direct or near-direct equivalent
- ⚠️ Partial — best available mapping; fires warning log at ingestion
- ❌ No equivalent — falls to `0025` Others; fires warning log

---

## Mapping Table

| OTG Job Family | C@G Indus | C@G Description | Match | Notes |
|---|---|---|---|---|
| Arts & Culture | 0003 | Arts/Cultural/Heritage | ✅ Clean | |
| Education & Skills Development | 0010 | Education | ✅ Clean | Training & Development (0034) is a separate C@G code |
| Emergency Preparedness & Response | 0015 | Home Team Uniformed Services | ⚠️ Partial | Uniformed services ≠ emergency preparedness entirely |
| Environment & Resources | 0025 | Others | ❌ No equivalent | No C@G code covers environment/resources |
| Finance | 0001 | Accounting, Audit, Finance | ✅ Clean | |
| Governance, Risk & Controls | 0007 | Corporate Strategy/Top Management | ⚠️ Partial | Closest available; GRC is not the same as top management |
| Human Resource | 0016 | Human Resources | ✅ Clean | |
| Industry & Sector Development | 0022 | Marketing/Business Development | ⚠️ Partial | Reasonable grouping; not exact |
| Infocomm Technology & Smart Systems | 0017 | InfoComm, Technology, New Media Communications | ✅ Clean | |
| Internal Audit | 0001 | Accounting, Audit, Finance | ⚠️ Partial | Merged with Finance at C@G code level — audit-specific filter visibility lost |
| International Relations | 0018 | International Relations | ✅ Clean | |
| Land & Estate Management | 0004 | Building and Estate Management | ✅ Clean | |
| Legal | 0021 | Law/Legal Services | ✅ Clean | |
| Organisation Development | 0024 | Organisation Development | ✅ Clean | |
| Planning | 0026 | Policy Formulation | ⚠️ Partial | Collapses with Policy & Planning under same code |
| Policy & Planning | 0026 | Policy Formulation | ✅ Clean | |
| Procurement | 0002 | Administration Support | ⚠️ Partial | Stretch — procurement is not admin support |
| Programme & Project Management | 0025 | Others | ❌ No equivalent | No C@G code covers programme/project management |
| Programme Evaluation | 0029 | Research and Analysis | ⚠️ Partial | Collapses with Research & Innovation under same code |
| Public Communications | 0027 | Public Relations/Corporate Communications/Psychology | ✅ Clean | |
| Regulatory | 0011 | Enforcement | ✅ Clean | |
| Research & Innovation | 0029 | Research and Analysis | ✅ Clean | Collapses with Programme Evaluation |
| Science, Tech & Engineering | 0012 | Engineering | ✅ Clean | |
| Service Delivery | 0008 | Customer Service | ⚠️ Partial | Service delivery is broader than customer service |
| Social & Community Services | 0032 | Social and Community Development | ✅ Clean | |
| Trade & Economy | 0009 | Economics/Statistics | ⚠️ Partial | Reasonable grouping; not exact |
| Urban & Physical Planning | 0004 | Building and Estate Management | ⚠️ Partial | Collapses with Land & Estate Management under same code |

**Summary:** 13 clean, 12 partial, 2 no equivalent (Environment & Resources, Programme & Project Management).

---

## Collisions (Multiple OTG Families → Same C@G Code)

These collapses are accepted. Officers filtering by C@G label will see opportunities from both OTG families.

| C@G Indus | C@G Description | OTG Families That Collapse Here |
|---|---|---|
| 0001 | Accounting, Audit, Finance | Finance + Internal Audit |
| 0004 | Building and Estate Management | Land & Estate Management + Urban & Physical Planning |
| 0026 | Policy Formulation | Planning + Policy & Planning |
| 0029 | Research and Analysis | Research & Innovation + Programme Evaluation |
| 0025 | Others | Environment & Resources + Programme & Project Management |

---

## C@G Indus Codes with No OTG Equivalent

These C@G filter values will only surface C@G opportunities — no OTG opportunities will map to them.

| C@G Indus | C@G Description | Listings |
|---|---|---|
| 0005 | Conciliation/Mediation | 4 |
| 0006 | Conciliation/Mediation and Statistics | ~0 |
| 0013 | Foreign Service | 10 |
| 0014 | Healthcare | 31 |
| 0015 | Home Team Uniformed Services | 16 |
| 0019 | Investigation | ~5 |
| 0020 | Landscape/Horticulture | 7 |
| 0023 | Occupational Safety and Health | 6 |
| 0028 | Public Service Leadership | 2 |
| 0030 | Sciences | ~10 |
| 0031 | Singapore Armed Forces | 0 |
| 0033 | Statistics | ~5 |
| 0034 | Training and Development | ~15 |
| 0035 | Translators/Interpreters | 0 |

Healthcare (0014, 31 listings) is the most notable — it has real C@G content and no OTG equivalent, so it was invisible under the WOG 29 approach. Using C@G as the canonical layer makes Healthcare visible in the filter.

---

## Warning Log Events

| Event | Trigger | Stored Value |
|---|---|---|
| `OTG_JOB_FAMILY_UNMAPPED` | OTG job_family not in map | `"0025"` (Others) |
| `OTG_JOB_FAMILY_WARN` | OTG job_family in `otgJobFamilyWarnOnMap` | Mapped C@G Indus code (still ingested) |
| `OTG_JOB_FAMILY_NULL` | OTG job_family is blank/null | `"0025"` or null per I-014 rule |
