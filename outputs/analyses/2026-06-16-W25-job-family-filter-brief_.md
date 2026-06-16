---
date: 2026-06-16
type: Technical Brief
audience: Pow Hwee
topic: Job Family Filter — MVP scope decision + mapping design
owner: Michelle Yip
---  
  
  
  
  
  
  
  
  
# Job Family Filter — Brief for Pow Hwee
  
**TL;DR:** Job family / functional area filter is in MVP. OTG and C@G use different taxonomies. We now have both: OTG `Job_function` (20 values) and the WOG canonical `Job Family` list (23 values from the custom gigs report) — which is almost certainly what Imelda's endpoint will return. Recommend anchoring to the WOG 23-family list and mapping OTG + C@G onto it at ingest. Three C@G-only values (Legal, Security, Healthcare) need a call. Need your read on scope fit before 26 Jun.
  
---
  
## What changed
  
Job family / functional area filter is in MVP. Officers need to filter across both OTG and C@G by job type — type-only filter (OTEP-86) isn't enough for discoverability. OTG and C@G use different taxonomies, so we need a mapping layer at ingest time.
  
---
  
## The mapping problem
  
| Source | Field | Values | Status |
|--------|-------|--------|--------|
| OTG | `Job_function` | 21 unique values (from `valid-otg-source-data.xlsx`, 191 rows) | Known — see cross-map below |
| C@G | `functionalArea` | 29 known values (e.g. "Infocomm Technology", "Policy & Planning") | In payload, not yet ingested for this field |
| C@G | `category` | 88% "Others", 12% blank | Useless — ignore |
  
Without a normalisation layer, a functional area filter on C@G only would break the unified listing experience.
  
---
  
## Job family data — two sources
  
### Source A: OTG `Job_function` (from `valid-otg-source-data.xlsx`, 191 rows, 5% blank)
  
| OTG `Job_function` | Count |
|--------------------|-------|
| Human Resources | 30 |
| Partnership & Engagement | 25 |
| Finance | 24 |
| Infocomm Technology & Smart Systems | 22 |
| Public Communications | 16 |
| Service Delivery | 12 |
| Others | 10 |
| Customer Service & Engagement | 7 |
| Social Services | 6 |
| Policy & Planning | 6 |
| Procurement | 5 |
| Science Tech and Engineering | 4 |
| Customer Insights & Analytics | 3 |
| Service Quality Management | 3 |
| Digital Services Management | 2 |
| Customer Experience Strategy | 2 |
| Organisation Development | 2 |
| Content Development | 1 |
| Business Analyst | 1 |
| Policy and Planning | 1 |
  
**Data quality flags:**
  
- "Policy & Planning" (6) and "Policy and Planning" (1) are near-duplicates — merge at ingest.
- "Business Analyst" (1) is a role title, not a function — skip-and-log at ingest.
- V2 file (`OTG Oppr-V2.xlsx`, 311 rows) has 35% blank and 39 fragmented values — use valid file as reference.
- V3 remediation report does not contain `Job_function` — was never a blocking ingest field.
  
### Source B: WOG `Job Family` (from `custom_gigs_report_2026-06-09`, `user_demographics_report` sheet, 109,074 rows)
  
This is the canonical WOG/PSG job family taxonomy — 23 values, used across the public service. 66% of user records have this populated.
  
| WOG Job Family | User count |
|----------------|------------|
| Service Delivery | 5,856 |
| Education & Skills Development | 5,471 |
| Policy & Planning | 4,612 |
| Infocomm Technology & Smart Systems | 3,908 |
| Regulation, Enforcement & Compliance | 3,051 |
| Public Communications | 2,687 |
| Human Resources | 2,481 |
| Data Analysis & Data Management | 1,197 |
| Partnership & Engagement | 1,082 |
| Accounting & Finance | 1,049 |
| Social Services | 932 |
| Library & Archives | 822 |
| Transport & Logistics | 719 |
| Industry/Sector Dev & Programme Mgmt | 707 |
| Emergency Preparedness & Response | 476 |
| Procurement | 423 |
| Audit | 413 |
| Academic Operations | 283 |
| Organisation Development | 249 |
| Central Banking Operations | 139 |
| Urban Planning and Design | 46 |
| International Relations | 26 |
| EMA | 5 |
  
**This is almost certainly what Imelda's endpoint will return.** It's the PSG-standard job family list. The gig postings themselves use a `Function` sub-field (96 sub-functions, 44% null) — that's the drill-down level, not the filter level.
  
---
  
## Cross-mapping: OTG + C@G → WOG Job Family (canonical anchor)
  
The WOG Job Family list (23 values from the custom gigs report) is the right anchor — it's the PSG standard and almost certainly what Imelda's endpoint returns. Map both OTG and C@G onto this at ingest.
  
| OTG `Job_function` | → WOG Job Family | Confidence |
|--------------------|------------------|------------|
| Human Resources | Human Resources | Clean |
| Finance | Accounting & Finance | Clean |
| Infocomm Technology & Smart Systems | Infocomm Technology & Smart Systems | Clean |
| Policy & Planning / Policy and Planning | Policy & Planning | Clean (merge dupes first) |
| Public Communications | Public Communications | Clean |
| Social Services | Social Services | Clean |
| Procurement | Procurement | Clean |
| Partnership & Engagement | Partnership & Engagement | Clean |
| Customer Service & Engagement | Service Delivery | Close |
| Service Delivery | Service Delivery | Close |
| Service Quality Management | Service Delivery | Close |
| Customer Experience Strategy | Service Delivery | Close |
| Customer Insights & Analytics | Data Analysis & Data Management | Close |
| Digital Services Management | Infocomm Technology & Smart Systems | Close |
| Science Tech and Engineering | (no direct WOG equivalent — Imelda to confirm) | Needs call |
| Organisation Development | Organisation Development | Clean |
| Content Development | Public Communications | Close |
| Others | (untagged / Others) | Map to untagged |
| Business Analyst | — | Skip (role title) |
  
| C@G `functionalArea` | → WOG Job Family | Confidence |
|----------------------|------------------|------------|
| Human Resource | Human Resources | Clean |
| Finance | Accounting & Finance | Clean |
| Infocomm Technology | Infocomm Technology & Smart Systems | Clean |
| Policy & Planning | Policy & Planning | Clean |
| Public Communications | Public Communications | Clean |
| Social Services | Social Services | Clean |
| Procurement | Procurement | Clean |
| Community & Engagement | Partnership & Engagement | Close |
| Customer Service | Service Delivery | Close |
| Data Science & AI | Data Analysis & Data Management | Close |
| Science & Technology | (no direct WOG equivalent — Imelda to confirm) | Needs call |
| Legal | Legal (not in WOG 23 — new entry needed?) | Needs call |
| Security | (no direct WOG equivalent) | Needs call |
| Built Environment | Urban Planning and Design | Close |
| Education & Training | Education & Skills Development | Close |
| Healthcare | (no direct WOG equivalent) | Needs call |
| Regulation | Regulation, Enforcement & Compliance | Close |
| Industry/Sector Development | Industry/Sector Dev & Programme Mgmt | Clean |
| Academic Operations | Academic Operations | Clean |
| Audit | Audit | Clean |
| Others | (untagged / Others) | Map to untagged |
  
---
  
## Proposed approach
  
Anchor to Imelda's job family master list as the OTEP canonical vocabulary. Map both sources onto it at ingest time.
  
**Why Imelda's list:**
  
- She owns job family / job function as master reference for the whole platform (confirmed 2026-05-21)
- The Dependencies Sync (2026-06-11) already scoped a "job family + job function master list" endpoint from Core — Léo and Kingsley are aligning on the spec (open item #41)
- OTG label→code reconciliation at import time is already the pattern in OTEP-427 — this extends it, doesn't replace it
  
**Two mapping tasks:**
  
1. OTG `Job_function` values → Imelda job family codes (at OTG ingest)
2. C@G `functionalArea` values → Imelda job family codes (at C@G ingest)
  
Both mappings sit in the transform layer. Each opportunity gets a normalised `job_family_code` tag at import. Filter UI queries that tag — same query regardless of source.
  
---
  
## Provisional OTEP canonical job family list
  
The WOG 23-value `Job Family` taxonomy from the custom gigs report is the right foundation — don't invent a new list. Use this as the provisional anchor until Imelda's endpoint is live. Migration is a config swap, not a rebuild.
  
The 23 WOG families, with two open items flagged:
  
1. Service Delivery
2. Education & Skills Development
3. Policy & Planning
4. Infocomm Technology & Smart Systems
5. Regulation, Enforcement & Compliance
6. Public Communications
7. Human Resources
8. Data Analysis & Data Management
9. Partnership & Engagement
10. Accounting & Finance
11. Social Services
12. Library & Archives
13. Transport & Logistics
14. Industry/Sector Dev & Programme Mgmt
15. Emergency Preparedness & Response
16. Procurement
17. Audit
18. Academic Operations
19. Organisation Development
20. Central Banking Operations
21. Urban Planning and Design
22. International Relations
23. Others
  
**Two open items for Imelda/Pow Hwee:** C@G has `Legal`, `Security`, and `Healthcare` as `functionalArea` values that don't map cleanly to any of the 23 WOG families. Confirm whether these should (a) map to nearest WOG family, (b) be added as new entries, or (c) map to "Others" for MVP.
  
---
  
## What I need from you
  
1. **OTEP-427 scope** — does the job family mapping (OTG + C@G) fit cleanly as an addition to the ingestion tightening spike, or does it need a separate story?
  
2. **Imelda's endpoint timeline** — is the job family master list endpoint (from the 11 Jun sync with Kingsley) going to be ready before S5 planning (26 Jun)? If not, we build against the provisional list above.
  
3. **C@G null rate handling** — 11% of C@G records have no `functionalArea`. Tag as "Others", leave untagged, or exclude from filter display?
  
---
  
## What this doesn't change
  
- OTEP-86 (type filter) — unchanged, in QA, ships as planned
- OTEP-427 scope — extends it, doesn't replace the nil-date / ingestion tightening work
- R1 items — function-level competency matching, multi-layer ringfencing by job family — still R1
  
---
  
*Happy to talk through before or after standup. Lmk if you want me to draft the spike story.*
  