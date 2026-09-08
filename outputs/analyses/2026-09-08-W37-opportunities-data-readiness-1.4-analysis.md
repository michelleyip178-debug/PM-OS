---
date: 2026-09-08
week: 2026-W37
type: source-analysis
scope: Opportunities data readiness for Compass MVP — perf-test load + go-live refresh
owner: Michelle Yip
status: analysis of Confluence "Data Readiness — Opportunities (1.4)" (v5, authored by Michelle 7 Sep)
source: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2639662972
related:
  - outputs/meeting-notes/2026-09-08-W37-otep-squad-sync.md
  - outputs/analyses/2026-09-03-W36-mvp-readiness-gates.md
  - outputs/analyses/2026-09-07-W37-r1-opportunity-creation-and-dual-posting.md
---

# Opportunities Data Readiness (1.4) — Analysis

Analysis of the Confluence page "Data Readiness — Opportunities (1.4)" — what it commits Michelle to, where the risk sits, and what it does not yet cover. The page is the data-readiness plan for getting real opportunity data into Compass Prod for two events: the 15–17 Sep performance test and the 25 Nov MVP launch.

---

## 1. What the page says (summary)

Compass Opportunities has **two data sources**, at different readiness levels:

| Source | What | Ingestion | Status |
|---|---|---|---|
| **Source 1 — Careers@Gov (C@G) vacancies** | Public Service job vacancies across all participating agencies, ~2,000+ live | Automated daily River batch crawlers (`cag_scheduled_import` → `cag_import_master` → `cag_details_worker`) | **Done** — real live API feed |
| **Source 2 — OTG & CFT opportunities** | Gigs and STIPs | Excel file parser (`otg/importer.go`) + Compass Admin bulk upload (`/admin/upload`) | **In progress** — file-based, and the file comes from Michelle |

The plan needs **two data loads into Prod**:

| Load | Window | Purpose |
|---|---|---|
| **1. Perf-test baseline load** | 12–14 Sep 2026 | Real Source 1 + Source 2 data in Prod so the 15–17 Sep performance test benchmarks against authentic volume, descriptions, agency spread, and payload sizes |
| **2. Go-live refresh** | 2–6 Nov 2026 | Refresh Source 2 with opportunities whose closing dates are ≥ 30 Nov 2026; keep Source 1 on daily sync |

The perf test itself is dated **15–17 Sep** here, benchmarking GIN trigram index performance, faceted-search latency, and memory under **90–300 concurrent queries**.

---

## 2. What this commits Michelle to

Michelle is the owner or single point of failure on **5 of the 9 deliverables**, and the entire Source 2 pipeline depends on her file.

| # | Deliverable | Due | Status on page | Read |
|---|---|---|---|---|
| 1 | Initial real OTG Excel file for perf testing | **10 Sep (Thu)** | In progress | **2 days away.** Hard blocker for the 13 Sep ingestion and the 15–17 Sep test. |
| 6 | Confirm Prod admin uploader list (`ADMIN_EMAILS`) | 23 Oct | Open | Low effort, easy to forget. Ties to the R1 agency-admin-auth question. |
| 7 | Final refreshed production OTG file | 30 Oct | Open | The real one — curated live postings, closing dates ≥ 30 Nov. |
| 8 | Final business data cleansing & sign-off | 4 Nov | Open | Validate FormSG URLs, owner emails, approved roles. |
| 9 | (Exec by Tech, depends on #7/#8) Final Prod data sync for go-live | 6 Nov | Open | Gated entirely on Michelle's #7 + #8. |

**The immediate one is #1 — due Thursday 10 Sep.** Everything in the 12–17 Sep chain is behind it: Tech can't run the 13 Sep Source 2 ingestion without the file, and the 15–17 Sep perf test loses fidelity on Source 2 if it slips (Source 1 would still be real).

---

## 3. Dependencies Michelle does not own but must chase

| Dependency | Owner | Due | Why it matters |
|---|---|---|---|
| Load reference tables (`ref_agency`, `ref_opportunity_type`, `ref_employment_type`) + Competency Bank codes in Prod | Adrian Lo (Core Squad) | 12 Sep | Opportunity import fails without these. Skill-matching resolution (`CompetencyFacade`) needs the Competency Bank. |
| Verify AWS Network Firewall outbound egress to Careers@Gov endpoints in Prod | Fanxu Wang (Platform/Infra) | 12 Sep | Source 1 crawler can't run in Prod without it. |
| Execute the 13 Sep Prod ingestion (both sources) | Thomas Huchede, Hao Eng (Pathfinder Tech) | 13 Sep | Turns Michelle's file + the C@G feed into a loaded Prod dataset. |
| Confirm OTEP-1460 (DoS protection) + OTEP-1457 (auth guardrails) are promoted to Prod | Hao Eng, Thomas Huchede | before 13 Sep | Validation rules the ingestion relies on. |

Both 12 Sep dependencies (Adrian Lo, Fanxu Wang) are **one working day** before the 13 Sep ingestion. No slack.

---

## 4. Risks the page carries

| # | Risk | Severity | Note |
|---|---|---|---|
| R1 | **The 10 Sep file is 2 days out and unstarted.** If it slips, the whole 12–17 Sep chain compresses or the perf test runs Source-2-light. | 🔴 High | Michelle owns this outright. |
| R2 | **Perf test date conflict.** This page says 15–17 Sep. The 8 Sep Squad Sync notes say testing "starts next week" with scripts, think-time model, scenarios, and load assumptions all still open. Data readiness ≠ test readiness — the data can be loaded on time into a test that isn't designed yet. | 🔴 High | Cross-check: [Squad Sync notes](../meeting-notes/2026-09-08-W37-otep-squad-sync.md), risks R1/R2 there. |
| R3 | **Two 12 Sep dependencies, one day before ingestion.** Adrian Lo (ref tables) and Fanxu Wang (firewall egress) each gate 13 Sep with zero buffer. | 🟠 Medium | Chase both by 11 Sep, not 12 Sep. |
| R4 | **Validation guardrails "to confirm if promoted to Prod."** OTEP-1460 / OTEP-1457 status in Prod is unconfirmed on the page. If they're not live, ingestion validation behaves differently than tested. | 🟠 Medium | Confirm with Hao Eng / Thomas this week. |
| R5 | **Go-live file quality is a manual cleanse.** #8 (4 Nov) is Michelle validating FormSG URLs, owner emails, approved roles by hand. Volume unknown. A bad batch here = broken apply links or unresolvable point-of-contact at launch. | 🟠 Medium | Scope the row count early; if it's large, this needs help or a script. |
| R6 | **`ADMIN_EMAILS` / uploader list (23 Oct) connects to the unresolved R1 agency-admin-auth question.** Who gets `/admin/upload` in Prod is the MVP version of the same access-ownership gap flagged in the R1 opportunities RAID. | 🟡 Low now, higher for R1 | Keep the MVP list tight; don't let it pre-empt the R1 decision. |

---

## 5. What the page does NOT cover (gaps)

1. **Where the OTG source data actually comes from.** The page says "file-based submissions from Michelle." It does not say who gives Michelle the data, in what format, or whether that upstream source is ready. If Michelle is collating from agencies or from OTG exports, that upstream step has no date and no owner on this page.
2. **Data volume for the go-live cleanse (#8).** "Validate FormSG URLs, owner emails, approved roles" with no row count. Can't tell if this is an afternoon or a week.
3. **What happens if the 10 Sep file is late.** No fallback. Does the perf test run Source-1-only? Does it slip? Not stated.
4. **Reconciliation with the descoped employment-lifecycle work.** This page is Gigs + STIPs only (Source 2). It does not touch internal jobs / secondments / rotations — consistent with those being out of MVP, but worth stating explicitly so no one assumes this plan covers them.
5. **Source 1 data-quality checks.** Source 1 is "Done" because the feed works. There's no check that the ~2,000 C@G vacancies are *good* data (dedup against Source 2, closing-date validity, agency-mapping correctness). The page treats "feed works" as "data ready."
6. **Perf-test exit criteria tie-back.** The page loads data for a test whose pass/fail thresholds live elsewhere (and per the Squad Sync, aren't defined yet). No link between "data loaded" and "test can be judged."
7. **The 25 Nov date vs the soft-launch window.** Page says "12–17 Nov Soft Launch, 25 Nov Official MVP." The W37 weekly plan and readiness-gates doc use **24–25 Nov**. Minor, but confirm the canonical launch date across docs.

---

## 6. Cross-checks against other live docs

| This page says | Other source says | Action |
|---|---|---|
| Perf test 15–17 Sep, data loaded 12–14 Sep | Squad Sync (8 Sep): test scripts, think-time, scenarios, load sizing all still open; Jobelle reworking OTG stats into the concurrency model | Data track is ahead of the test-design track. Flag both to Adrian as one readiness item, not two. |
| 90–300 concurrent queries (this page) | Squad Sync: 600 concurrent / 900 load / 1500 stress users, numbers questioned by Jace | Different figures — "concurrent queries" vs "concurrent users" may not be the same metric. Reconcile before the test. |
| Launch 25 Nov | Weekly plan / readiness gates: 24–25 Nov | Confirm canonical date. |
| Source 2 = Gigs + STIPs | R1 creation analysis: internal jobs / secondments are R1, not MVP | Consistent. State it on the page so it's explicit. |

---

## 7. Recommended actions

**This week (perf-test critical path):**

| Action | By | Owner |
|---|---|---|
| Produce and hand over the initial real OTG Excel file (Deliverable #1) | **10 Sep** | Michelle |
| Confirm the upstream source of that OTG data is in hand — if it's an agency/OTG export, get it now | 9 Sep | Michelle |
| Chase Adrian Lo (ref tables + Competency Bank in Prod) and Fanxu Wang (firewall egress) — confirm both land by 11 Sep, not 12 Sep | 10 Sep | Michelle |
| Confirm OTEP-1460 + OTEP-1457 Prod-promotion status with Hao Eng / Thomas | 10 Sep | Michelle |
| Raise the data-readiness vs test-readiness gap to Adrian as one item — data will be loaded into a test that isn't designed yet | 9 Sep | Michelle |
| Reconcile "90–300 concurrent queries" vs "600/900/1500 users" with Rathika / Rama | before 15 Sep | Michelle |

**Pre-launch (add to tracker, not urgent this week):**

| Action | By |
|---|---|
| Scope the row count for the 4 Nov business data cleanse (#8) — if large, get help or a validation script | mid-Oct |
| Confirm the `ADMIN_EMAILS` uploader list, kept tight, without pre-empting the R1 agency-admin-auth decision | 23 Oct |
| Deliver the final refreshed production OTG file, closing dates ≥ 30 Nov | 30 Oct |
| Add a Source 1 data-quality spot-check (dedup, closing dates, agency mapping) to the go-live runbook | Oct |
| Align the launch date wording (24–25 Nov vs 25 Nov) across this page, the weekly plan, and the readiness-gates doc | this week |

**Page edits worth making:**
- Name the upstream owner/source of the OTG data and give it a date.
- State a fallback for a late 10 Sep file.
- Note explicitly that this plan is Gigs + STIPs only; internal jobs / secondments are R1.

---

## 8. Bottom line

The page is a solid, specific plan — real file paths, real dates, named owners. Two things make it risky:

1. **Deliverable #1 is due in 2 days and hasn't started**, and it's the linchpin of the entire 12–17 Sep chain.
2. **It's a data-readiness plan sitting next to a test-design track that isn't ready** (per the same-day Squad Sync). Loading real data on 13 Sep into a performance test whose scripts and thresholds are still being written means the 15–17 Sep window is at risk regardless of how clean the data is.

Michelle's job this week: ship the file, chase the two 12 Sep dependencies early, and force the data-readiness and test-readiness conversations into one so Adrian sees a single go/no-go on the 15–17 Sep test, not two green ticks that don't add up.
