---
title: WOG Taxonomy — C@G and OTG Mapping Reference
decision: I-019
date: 2026-06-25
status: Partial (OTG A–K pending)
relates_to: OTEP-437, OTEP-ingestion-v3 Story 4, OTEP-318
---

# WOG Taxonomy Mapping Reference

CareerCompass uses a 30-category WOG taxonomy as the canonical filter layer (decision I-019, 2026-06-25; updated 2026-06-25 — Healthcare added as 30th category after BO review). Both OTG and C@G translate their native job classification to a WOG category at ingestion. This file is the authoritative mapping reference for those translations.

**BO decisions resolved 2026-06-25:** Healthcare added as standalone WOG category; Finance confirmed (no Audit split); Marketing/Business Development confirmed → Public Communications; New Media Comms confirmed → ICT; Consultancy and Learning & Development not present in OTG opportunity data — removed from map.

---

## Consolidated Mapping Table

| WOG Category (MASTER) | C@G Code(s) | OTG Job Family |
|---|---|---|
| Arts & Culture | 0003 | Arts & Culture; Library & Archives |
| Corporate Administration | 0002, 0025 | Corporate Administration |
| Education & Skills Development | 0010, 0034 | Academic Operations; Education & Skills Devt |
| Emergency Preparedness & Response | 0015, 0031 | Emergency Preparedness & Response |
| Environment & Resources | 0020 | Environment & Resources |
| Finance | 0001 | Finance and Accounting |
| Governance, Risk & Controls | — | Governance, Risk & Controls |
| Healthcare | 0014 | — |
| Human Resource | 0016 | Human Resources |
| Industry & Sector Development | — | Industry & Sector Development; Industry & Sector Devt |
| Infocomm Technology & Smart Systems | 0017 | Infocomm Tech & Smart Systems; Infocomm Technology & Smart Systems |
| Internal Audit | — | Internal Audit |
| International Relations | 0013, 0018 | Int'l Relations |
| Land & Estate Management | 0004 | Land & Estate Mgmt; Land Sales Admin |
| Legal | 0005, 0006, 0021 | Legal |
| Organisation Development | 0024, 0028 | Corporate Development; Organisation Devt |
| Partnership & Engagement | — | Citizen Engagement; Partnership & Engagement |
| Planning | 0007 | Planning |
| Policy & Planning | 0026 | Policy & Planning |
| Procurement | — | Procurement |
| Programme & Project Management | — | Programme & Project Mgmt |
| Programme Evaluation | — | Programme Eval |
| Public Communications | 0022, 0027, 0035 | Public Comms; Strategic Communications |
| Regulatory | 0011, 0019, 0023 | Compliance & Enforcement; Enforcement; Regulatory |
| Research & Innovation | 0009, 0029, 0033 | Research ⚠️; Research & Innovation |
| Science, Tech & Engineering | 0012, 0030 | Science, Tech & Engrg; Technical Capbability ⚠️ |
| Service Delivery | 0008 | Service Delivery |
| Social & Community Services | 0032 | Social & Community Services |
| Trade & Economy | — | Trade & Economy |
| Urban & Physical Planning | — | Development Services and Planning; Urban & Physical Planning; Urban Planning and Design ⚠️ |

⚠️ = ambiguous mapping pending HR/BO confirmation. See Decisions Pending below.

---

## Detailed Reference

| WOG Category (MASTER) | C@G Indus Code(s) | OTG Job Family | Notes |
|---|---|---|---|
| Arts & Culture | 0003 Arts/Cultural/Heritage | Library & Archives | |
| Corporate Administration | 0002 Administration Support; 0025 Others | — | OTG A–K pending |
| Education & Skills Development | 0010 Education; 0034 Training and Development | Academic Operations; Education & Skills Devt | OTG: L&D not present in OTG opportunity data (BO confirmed 2026-06-25) |
| Emergency Preparedness & Response | 0015 Home Team Uniformed Services; 0031 Singapore Armed Forces | Emergency Preparedness & Response | |
| Environment & Resources | 0020 Landscape/Horticulture | Environment & Resources | |
| Finance | 0001 Accounting, Audit, Finance | Finance and Accounting | C@G: BO confirmed all roles stay under Finance — no Audit split (2026-06-25) |
| Governance, Risk & Controls | — | Governance, Risk & Controls | No C@G source |
| Healthcare | 0014 Healthcare | — | WOG category confirmed 2026-06-25. No OTG equivalent in current data. |
| Human Resource | 0016 Human Resources | Human Resources | |
| Industry & Sector Development | — | Industry & Sector Development; Industry & Sector Devt | No C@G source |
| Infocomm Technology & Smart Systems | 0017 InfoComm, Technology, New Media Communications | Infocomm Tech & Smart Systems; Infocomm Technology & Smart Systems | C@G: BO confirmed New Media Comms stays under ICT (2026-06-25) |
| Internal Audit | — | Internal Audit | C@G: no standalone source — 0001 fully maps to Finance (BO confirmed 2026-06-25) |
| International Relations | 0013 Foreign Service; 0018 International Relations | — | OTG A–K pending |
| Land & Estate Management | 0004 Building and Estate Management | Land & Estate Mgmt; Land Sales Admin | |
| Legal | 0005 Conciliation/Mediation; 0006 Conciliation/Mediation and Statistics; 0021 Law/Legal Services | Legal | 0006 has ~0 listings |
| Organisation Development | 0024 Organisation Development; 0028 Public Service Leadership | Organisation Devt | |
| Partnership & Engagement | — | Partnership & Engagement | No C@G source |
| Planning | 0007 Corporate Strategy/Top Management | Planning | |
| Policy & Planning | 0026 Policy Formulation | Policy & Planning | |
| Procurement | — | Procurement | No C@G source |
| Programme & Project Management | — | Programme & Project Mgmt | No C@G source |
| Programme Evaluation | — | Programme Eval | No C@G source |
| Public Communications | 0022 Marketing/Business Development; 0027 PR/Corp Comms/Psychology; 0035 Translators/Interpreters | Public Comms; Strategic Communications | C@G: BO confirmed Marketing/Business Development → Public Communications (2026-06-25). 0035 has 0 listings. |
| Regulatory | 0011 Enforcement; 0019 Investigation; 0023 Occupational Safety and Health | Regulatory | |
| Research & Innovation | 0009 Economics/Statistics; 0029 Research and Analysis; 0033 Statistics | Research ⚠️; Research & Innovation | OTG: "Research" is a legacy code consolidating with Research & Innovation |
| Science, Tech & Engineering | 0012 Engineering; 0030 Sciences | Science, Tech & Engrg; Technical Capability ⚠️ | OTG: Technical Capability could be Infocomm Technology & Smart Systems — confirm with HR |
| Service Delivery | 0008 Customer Service | Service Delivery | |
| Social & Community Services | 0032 Social and Community Development | Social & Community Services | C@G: 0014 Healthcare moved to WOG Healthcare category (BO confirmed 2026-06-25) |
| Trade & Economy | — | Trade & Economy | No C@G source |
| Urban & Physical Planning | — | Urban & Physical Planning; Urban Planning and Design ⚠️ | OTG: "Urban Planning and Design" is legacy code consolidating with Urban & Physical Planning |

---

## Decisions Pending Before Map is Final

| # | Issue | Decision needed from | Blocks | Status |
|---|---|---|---|---|
| 1 | C@G 0001: does Audit split to Internal Audit, or stays as Finance? | BO / HR | Finance vs Internal Audit filter labels | ✅ **Finance confirmed** — no split (BO 2026-06-25) |
| 2 | C@G 0014 Healthcare: which WOG filter label? | BO | Filter placement of 31 listings | ✅ **Healthcare category added** — standalone WOG category (BO 2026-06-25) |
| 3 | C@G 0017: does New Media Comms stay under ICT or split to Public Communications? | BO | Filter placement | ✅ **ICT confirmed** — all stays under Infocomm Technology & Smart Systems (BO 2026-06-25) |
| 4 | C@G 0022: does Business Development stay under Public Communications or move to Industry & Sector Development? | BO | Filter placement | ✅ **Public Communications confirmed** (BO 2026-06-25) |
| 5 | OTG "Learning & Development": Education & Skills Development or Organisation Development? | HR | Translation map entry | ✅ **Moot** — job family not present in OTG opportunity data (confirmed 2026-06-25) |
| 6 | OTG "Technical Capbability" (typo): Science, Tech & Engineering or Infocomm Technology & Smart Systems? | HR / Léo | Translation map entry | ⏳ Open |
| 7 | OTG "Consultancy": which WOG category? | BO / HR | Story 4 translation map | ✅ **Moot** — job family not present in OTG opportunity data (confirmed 2026-06-25) |
| 8 | OTG duplicates ("Industry & Sector Devt", "Infocomm Tech & Smart Systems", "Int'l Relations", "Technical Capbability"): data quality issues in source — confirm variants should all map to canonical WOG category | HR / Léo | Story 4 map needs both variants as entries | ⏳ Open |

---

## C@G Source Reference (35 codes, 33 active)

Source: `cag_field_set.json` (SAP OData v2). Listing counts as of May 2026.

| Code | C@G Label | Volume | WOG Category |
|---|---|---|---|
| 0001 | Accounting, Audit, Finance | high | Finance |
| 0002 | Administration Support | 82 | Corporate Administration |
| 0003 | Arts/Cultural/Heritage | 7 | Arts & Culture |
| 0004 | Building and Estate Management | 65 | Land & Estate Management |
| 0005 | Conciliation/Mediation | 4 | Legal |
| 0006 | Conciliation/Mediation and Statistics | ~0 | Legal |
| 0007 | Corporate Strategy/Top Management | 17 | Planning |
| 0008 | Customer Service | 32 | Service Delivery |
| 0009 | Economics/Statistics | 33 | Research & Innovation |
| 0010 | Education | high | Education & Skills Development |
| 0011 | Enforcement | high | Regulatory |
| 0012 | Engineering | high | Science, Tech & Engineering |
| 0013 | Foreign Service | 10 | International Relations |
| 0014 | Healthcare | 31 | Healthcare |
| 0015 | Home Team Uniformed Services | 16 | Emergency Preparedness & Response |
| 0016 | Human Resources | high | Human Resource |
| 0017 | InfoComm, Technology, New Media Communications | high | Infocomm Technology & Smart Systems |
| 0018 | International Relations | high | International Relations |
| 0019 | Investigation | ~5 | Regulatory |
| 0020 | Landscape/Horticulture | 7 | Environment & Resources |
| 0021 | Law/Legal Services | 23 | Legal |
| 0022 | Marketing/Business Development | high | Public Communications |
| 0023 | Occupational Safety and Health | 6 | Regulatory |
| 0024 | Organisation Development | high | Organisation Development |
| 0025 | Others | — | Corporate Administration |
| 0026 | Policy Formulation | high | Policy & Planning |
| 0027 | Public Relations/Corporate Communications/Psychology | high | Public Communications |
| 0028 | Public Service Leadership | 2 | Organisation Development |
| 0029 | Research and Analysis | high | Research & Innovation |
| 0030 | Sciences (life sciences, bio-technology) | ~10 | Science, Tech & Engineering |
| 0031 | Singapore Armed Forces | 0 | Emergency Preparedness & Response |
| 0032 | Social and Community Development | high | Social & Community Services |
| 0033 | Statistics | ~5 | Research & Innovation |
| 0034 | Training and Development | ~15 | Education & Skills Development |
| 0035 | Translators/Interpreters | 0 | Public Communications |

---

## OTG Source Reference (full list — 44 entries)

Duplicate/abbreviated variants are included as separate entries — the translation map must handle each string exactly as OTG sends it.

| OTG Job Family | WOG Category | Notes |
|---|---|---|
| Academic Operations | Education & Skills Development | |
| Arts & Culture | Arts & Culture | |
| Citizen Engagement | Partnership & Engagement | |
| Compliance & Enforcement | Regulatory | |
| Consultancy | — | ⚠️ No clean WOG match — decision needed |
| Corporate Administration | Corporate Administration | |
| Corporate Development | Organisation Development | |
| Development Services and Planning | Urban & Physical Planning | |
| Education & Skills Devt | Education & Skills Development | Abbreviated variant of next entry |
| Emergency Preparedness & Response | Emergency Preparedness & Response | |
| Enforcement | Regulatory | Variant of Compliance & Enforcement |
| Environment & Resources | Environment & Resources | |
| Finance and Accounting | Finance | |
| Governance, Risk & Controls | Governance, Risk & Controls | |
| Human Resources | Human Resource | |
| Industry & Sector Development | Industry & Sector Development | |
| Industry & Sector Devt | Industry & Sector Development | Abbreviated variant — duplicate |
| Infocomm Tech & Smart Systems | Infocomm Technology & Smart Systems | Abbreviated variant — duplicate |
| Infocomm Technology & Smart Systems | Infocomm Technology & Smart Systems | |
| Int'l Relations | International Relations | Abbreviated variant — duplicate |
| Internal Audit | Internal Audit | |
| Land & Estate Mgmt | Land & Estate Management | |
| Land Sales Admin | Land & Estate Management | |
| Learning & Development | Education & Skills Development | ⚠️ could be Organisation Development — confirm with HR |
| Legal | Legal | |
| Library & Archives | Arts & Culture | |
| Organisation Devt | Organisation Development | |
| Partnership & Engagement | Partnership & Engagement | |
| Planning | Planning | |
| Policy & Planning | Policy & Planning | |
| Procurement | Procurement | |
| Programme & Project Mgmt | Programme & Project Management | |
| Programme Eval | Programme Evaluation | |
| Public Comms | Public Communications | |
| Regulatory | Regulatory | |
| Research | Research & Innovation | ⚠️ Legacy code — consolidates with Research & Innovation |
| Research & Innovation | Research & Innovation | |
| Science, Tech & Engrg | Science, Tech & Engineering | |
| Service Delivery | Service Delivery | |
| Social & Community Services | Social & Community Services | |
| Strategic Communications | Public Communications | |
| Technical Capbability | Science, Tech & Engineering | ⚠️ Typo in OTG source data — map the typo as-is |
| Trade & Economy | Trade & Economy | |
| Urban & Physical Planning | Urban & Physical Planning | |
| Urban Planning and Design | Urban & Physical Planning | ⚠️ Legacy code — consolidates with Urban & Physical Planning |

---

*Created 2026-06-25. Decision I-019. Updated by: add OTG A–K families when confirmed.*
