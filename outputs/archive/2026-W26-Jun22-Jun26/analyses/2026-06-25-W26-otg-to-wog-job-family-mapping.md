---
date: 2026-06-25
topic: OTG Job Family → WOG Canonical Job Family Mapping
status: Confirmed
sources: HR-confirmed OTG taxonomy (27 families, 2026-06-25), WOG canonical list (29 families, 2026-06-25)
related-files:
  - PM-skills-ALL-1/03-stories/otep-stories/OTEP-289-spike-definition.md
  - PM-skills-ALL-1/03-stories/story-pipeline/draft/OTEP-ingestion-v3-rule-updates.md (Story 4 AC5)
  - outputs/analyses/2026-06-25-cag-indus-to-wog-job-family-mapping.md
---

# OTG Job Family → WOG Canonical Mapping

OTG uses the same 27-family HR taxonomy, which is a direct subset of WOG 29. All 27 OTG values map 1:1 to WOG — no translation logic needed at ingestion. The OTG `job_family` value is stored directly as the canonical value.

**Engineering note:** Dictionary 1 is a passthrough. No map, no transform. Store as-is.

---

## Mapping Table

| OTG Job Family | WOG Canonical | Match |
|---|---|---|
| Arts & Culture | Arts & Culture | ✅ Exact |
| Education & Skills Development | Education & Skills Development | ✅ Exact |
| Emergency Preparedness & Response | Emergency Preparedness & Response | ✅ Exact |
| Environment & Resources | Environment & Resources | ✅ Exact |
| Finance | Finance | ✅ Exact |
| Governance, Risk & Controls | Governance, Risk & Controls | ✅ Exact |
| Human Resource | Human Resource | ✅ Exact |
| Industry & Sector Development | Industry & Sector Development | ✅ Exact |
| Infocomm Technology & Smart Systems | Infocomm Technology & Smart Systems | ✅ Exact |
| Internal Audit | Internal Audit | ✅ Exact |
| International Relations | International Relations | ✅ Exact |
| Land & Estate Management | Land & Estate Management | ✅ Exact |
| Legal | Legal | ✅ Exact |
| Organisation Development | Organisation Development | ✅ Exact |
| Planning | Planning | ✅ Exact |
| Policy & Planning | Policy & Planning | ✅ Exact |
| Procurement | Procurement | ✅ Exact |
| Programme & Project Management | Programme & Project Management | ✅ Exact |
| Programme Evaluation | Programme Evaluation | ✅ Exact |
| Public Communications | Public Communications | ✅ Exact |
| Regulatory | Regulatory | ✅ Exact |
| Research & Innovation | Research & Innovation | ✅ Exact |
| Science, Tech & Engineering | Science, Tech & Engineering | ✅ Exact |
| Service Delivery | Service Delivery | ✅ Exact |
| Social & Community Services | Social & Community Services | ✅ Exact |
| Trade & Economy | Trade & Economy | ✅ Exact |
| Urban & Physical Planning | Urban & Physical Planning | ✅ Exact |

**27 of 27 exact matches. No translation needed.**

---

## WOG Families with No OTG Equivalent

These 2 WOG canonical families exist for C@G coverage only. No OTG opportunities will ever map to them.

| WOG Canonical | Source |
|---|---|
| Corporate Administration | C@G only (Indus 0002, 0007) |
| Partnership & Engagement | C@G only (Indus 0028) |

---

## Warning Log

Only one warning event applies to OTG ingestion: `OTG_JOB_FAMILY_NULL` — fired when `job_family` is missing or blank on an OTG record. The row is still ingested (per I-014); the warning surfaces the data quality issue separately from C@G unmappable events (`CAG_INDUS_UNMAPPED`).
