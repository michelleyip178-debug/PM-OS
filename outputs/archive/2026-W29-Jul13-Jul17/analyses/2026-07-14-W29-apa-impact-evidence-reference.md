---
date: 2026-07-14
week: 2026-W29
type: evidence-reference
status: supports-apa-writeup-corrected
---

# APA Impact Section — Evidence Reference

Citation-by-bullet backing for the Impact section of the APA write-up, as reframed 2026-07-14 to Jace's requested structure. References below are by **filename only** — match against whatever folder you land these files in on SharePoint, not the local path structure.

---

## Bullet 1 — Opportunities Listing & Auth, 9 sprints, ~5,400 officers, ~113,000 zero-disruption

**Claim:** *"Led development of the CareerCompass Opportunities Listing and Authentication/Authorisation features across 9 sprints, securing the October 2026 go-live timeline for ~5,400 officers while ensuring zero service disruption for ~113,000 active users on the legacy OTG system."*

- **Sprint history / go-live timeline:** <link to jira board> — programme plan (12 sprints, 4 May–16 Oct 2026), Sprint 6 active as of 2026-07-14. Live sprint state (goals, dates, issue status) lives on the Jira board, not a static file — link the OTEP-Pathfinder / OTEP-Core boards directly.
- **~5,400 officers, 6 pilot agencies:** `decisions-log.md` (canonical, 82-entry version), entry 2026-06-02 — *"MVP pilot (Oct–Nov 2026) = 6 agencies, ~5,400 officers: PSD, ESG, MDDI, URA, MCCY, CAAS."* Also appears in **`2026-05-29-W22-decisions-log.pdf`** (earlier snapshot).
- **~113,000 active OTG users:** Confirmed accurate by Michelle, 2026-07-13. **Not independently documented in a decisions log entry** — prior APA drafts flagged it as "PENDING CONFIRMATION." Treat as a self-attested figure, not one you can point to a source doc for if pressed.
- **⚠️ Adjacent figure not to conflate:** `decisions-log.md`, entry 2026-06-02 — *"Halt OTG onboarding for the remaining 24 agencies (~108,000 officers); target full cutover to CareerCompass by Oct 2027."* This is the **remaining, non-pilot agencies specifically** — a different scope from the ~113,000 full active user base. Full reconciliation in `apa-evidence-findings-report.md` §9.

### Sub-bullet: 82-item decisions log
- `decisions-log.md` (canonical) — 82 dated entries as of 2026-07-14 (D-001 through the most recent, 2026-07-13). Count will keep climbing — re-verify before the actual panel date if this draft sits for more than a few days. *(No single PDF of the full current log — `2026-05-29-W22-decisions-log.pdf` is an earlier, smaller snapshot only.)*

### Sub-bullet: 4-story POCDEX dependency chain, 2 new Core API endpoints
- **`2026-06-11-W24-dependencies-sync.pdf`** — the Dependencies Sync-Up session (11 Jun) that defined the in-code interface approach, data storage strategy, and 2 new Core endpoints.
- `decisions-log.md`, entry 2026-05-22 — *"POCDEX epic to be created and owned by Michelle."* *(No PDF.)*

### Sub-bullet: sprint schedule restructured, Sprint 4 delivery block prevented
- **`craft-execution-summary.pdf`** — Sprint 4 Readiness Assessment: 5 blockers and 4 design gates identified and resolved before Sprint 4 start (15 Jun), each with a named owner.

---

## Bullet 2 — Taxonomy resolution, 350–400 record catalogue

**Claim:** *"Resolved conflicting data structures across three legacy systems (OTG, C@G, and CompBank), driving the ingested opportunity catalogue toward a 350–400 record range without requiring manual agency intervention."*

- **350–400 record range:** Sourced from the risks dashboard — *"The launch threshold of 350 is reachable without agency remediation. Agency outreach can push towards 500+."* Current passing count (415) already sits inside this range. Confirmed by Michelle 2026-07-14 as the intended reading — the ingestion target/threshold framing, not a separate catalogue-size metric. Full detail in **`ingestion-report-executive-summary.pdf`**; raw source: `04_oqa_risks_assumptions.html`.

### Sub-bullet: 75% rejection rate, 160/633, 178→~44 ESG blocked, current 415/633
**⚠️ Two different points in time are cited together here — know which is which before the panel does:**

| Figure | State | Source |
|---|---|---|
| 160 passing / 633 total (75% rejection) | **Pre-v3 baseline** (as at 9 Jun, pre-remediation) | **`ingestion-report-executive-summary.pdf`** — *"415 passing (was 160)"* |
| 178 blocked, Enterprise Singapore | **Pre-v3 baseline for ESG specifically** | **`ingestion-report-executive-summary.pdf`** — corrected framing: *"~150 previously-blocked ESG gigs unblocked (of 178 originally blocked under pre-v3 rules); 44 remain blocked"* |
| 415 passing / 218 blocked, overall | **Current state, post-v3 rules** (ratified 12 Jun, live from 15 Jun) | **`ingestion-report-executive-summary.pdf`** — full write-up; also `01_summary_dashboard.html`, `04_oqa_risks_assumptions.html` (HTML dashboards, render natively, not converted) |
| ~44 blocked, Enterprise Singapore | **Current state** | **`ingestion-report-executive-summary.pdf`** — *"ESG residual — ~44 of 218 blocked opportunities (20%)... ~19 TypeTag (unresolvable without DevOps fix) and ~25 other field gaps"* |

Remediation plan detail: `OTEP_Remediation_Report_v3.xlsx` (per-agency breakdown, Excel, opens natively), **`otg-ingestion-logic-v3.pdf`** (v3 rules rationale, decision D-026).

### Sub-bullet: WOG 30 Job Families, SAP OData v2
- **`wog-taxonomy-mapping.pdf`** — canonical mapping reference, 30-category WOG taxonomy (decision I-019, 2026-06-25; Healthcare added as 30th category after BO review — **not 29**, which is the pre-review figure).
- **`2026-06-24-W26-pow-hwee-taxonomy-assessment.pdf`** — WOG 29→30 correction detail.
- **`2026-06-24-W26-opportunity-category-taxonomy-analysis.pdf`** — 3-taxonomy conflict (OTG, C@G, CompBank), 210 unmappable listings quantified, 4 options presented with trade-offs.
- `cag_field_set.json` — raw SAP OData v2 API response, 35 C@G Indus codes with live listing counts. Confirms the SAP OData v2 API claim directly — retrieved independently, not delegated to engineering. *(No PDF — raw data file.)*

---

## Bullet 3 — DoR audits, AC conflicts, sprint goal reframing

**Claim:** *"Established systematic Definition of Ready (DoR) quality-gate audits before sprint planning, preventing scope creep and saving an estimated 20+ minutes of planning time per sprint."*

- **`craft-execution-summary.pdf`** — full DoR discipline write-up.
- **⚠️ "20+ minutes of planning time per sprint" is Michelle's estimate, not independently logged anywhere in either workspace.** If a panelist asks for the source, say so directly rather than implying a measured figure — nothing found contradicts it either, it's simply unaudited.

### Sub-bullet: AC conflicts resolved before planning
- **`craft-execution-summary.pdf`** — 2 AC conflicts intercepted before Sprint 4 start: OTEP-87 (FormSG redirect vs. C@G deep-link boundary, flagged twice by tech lead) and the C@G payload schema dependency (owner + deadline set at planning, 15 Jun).
- Note: an earlier draft's "6 AC conflicts in Sprint 4" claim was corrected to 2 — confirm you're using the corrected number if cross-referencing older APA drafts.

### Sub-bullet: sprint goals reframed to user outcomes
- Sprint 4 goal, from **`craft-execution-summary.pdf`**: *"Deliver a complete, usable opportunity listing experience — officers can search, filter, and sort opportunities, understand what each type means, and trust that the data they're seeing is current and accurate."* Outcome-framed, not task-framed — cite this line directly if asked for an example.

---

## Figures Deliberately Kept As-Written (Not Independently Verified)

Per Michelle's confirmation 2026-07-14 — flagging here so it's visible in one place:

- **"9 sprints"** — programme is actually in Sprint 6 as of today (13–26 Jul); "9 sprints" likely refers to a different count basis (e.g. full delivery arc including UAT sprints) that wasn't reconciled against <link to jira board>'s Sprint 1–12 numbering. Kept as written per Michelle's direction.
- **"20+ minutes of planning time per sprint"** — see Bullet 3 above.

If a panelist presses on either, the honest answer is "that's my estimate / working figure, not a logged metric" — better to say that upfront than to imply a source that doesn't exist.

---

## Evidence Files Referenced (All PDFs, Filename Only)

- `2026-05-29-W22-decisions-log.pdf`
- `2026-06-11-W24-dependencies-sync.pdf`
- `craft-execution-summary.pdf`
- `ingestion-report-executive-summary.pdf`
- `otg-ingestion-logic-v3.pdf`
- `wog-taxonomy-mapping.pdf`
- `2026-06-24-W26-pow-hwee-taxonomy-assessment.pdf`
- `2026-06-24-W26-opportunity-category-taxonomy-analysis.pdf`

Non-PDF supporting files (native formats, not converted): `01_summary_dashboard.html`, `02_agency_breakdown.html`, `04_oqa_risks_assumptions.html`, `09_ingestion_rules.html`, `OTEP_Remediation_Report_v3.xlsx`, `cag_field_set.json`.
