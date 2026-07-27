# APA Evidence Summary — By Folder

**Officer:** Michelle Yip | Business Analyst (Programme Management) L2 / PM Apprentice, OTEP Pathfinder (CareerCompass)

**Source:** [2026-07-13-W29-apa-evidence-package](2026-07-13-W29-apa-evidence-package/) (5 folders, mapped to L2 schema dimensions)

**Purpose:** One-page-per-folder summary of what's in each folder and the specific evidence it proves — for panel prep or a quick refresher before submission.

---

## 01 — Impact

**What this folder proves:** Concrete, numbers-backed product outcomes — not activity, actual before/after change.

**Specific evidence:**
- **OTG ingestion recovery:** 633 open opportunities, only 160 passing validation pre-fix (74.7% blocked). After v3 ingestion rules (ratified 12 Jun, D-026): 415 passing (65.6%), 218 still blocked — a 255-record recovery with zero agency action required. Enterprise Singapore's blocked count alone fell from 178 to ~44.
- **Taxonomy conflict resolved:** Reconciled three incompatible category systems (OTG 21 Job Families, C@G 35 FieldSet codes, CompBank ~400 competency categories), mapped 210 unmappable C@G listings, and produced four options that let the senior technical lead close a canonical architecture decision (WOG 23 Job Families via translation dictionary) the same week.
- **POCDEX dependency chain resolved:** Ran a Dependencies Sync-Up (11 Jun) that surfaced and closed a 4-story cross-squad dependency before it became a Sprint 4 surprise.
- **WOG Auth scope defined:** Pilot scope locked at 6 agencies, ~5,400 officers.

**Evidence files:** ingestion dashboards (`01_summary_dashboard.html`, `02_agency_breakdown.html`, `04_oqa_risks_assumptions.html`, `09_ingestion_rules.html`), `OTEP_Remediation_Report_v3.xlsx`, `otg-ingestion-logic-v3.pdf`, decisions log entry D-026, taxonomy analysis + Pow Hwee assessment, `wog-taxonomy-mapping.pdf`, `wog-authentication.pdf`, `dependencies-sync.pdf`.

**Caveat:** Cite the 415/218 post-v3 figures, not older interim numbers — the folder README flags a prior "350-400" estimate as superseded.

---

## 02 — Craft & Execution

**What this folder proves:** Delivery discipline — catching problems before they hit engineering, not cleaning up after.

**Specific evidence:**
- **Sprint 4 planning (11 Jun):** Intercepted 2 AC conflicts (OTEP-87 FormSG/C@G boundary; C@G payload schema for OTEP-378) before day 1, each with a named owner and date set at planning.
- **Point estimate correction against live Jira:** Caught drift on two tickets (OTEP-405: 6pt planning estimate vs. 3pt live; OTEP-406: 5pt vs. 2pt) — brought sprint total from 57 to a corrected 54 points before commitment, not after the sprint was running hot.
- **Structured readiness gate:** Separated "ready" into 5 blockers + 4 design gates, each with an owner, rather than a single yes/no call. Explicit capacity sense-check flagged Thomas (sole FE) as carrying elevated WIP and blocked further Sprint 4 week-1 scope from landing on him.
- **QA/UAT environment separation (4 Jun):** Proposed and facilitated the team decision splitting QA (engineer AC verification) from UAT (business acceptance) — removed a recurring source of environment-drift bugs.
- **Sprint-close governance (4 Jun):** Proposed the rule that only the Business Owner can move stories from UAT to Done — put the acceptance gate with the person accountable for business value, not engineering self-certifying.
- **Pattern across 94-entry decisions log (Mar–Jul):** Repeated signature of catching AC/scope ambiguity before it reaches engineering (e.g., OTEP-268 partial-load AC removed pre-build; OTEP-276 dropped once already-answered by other work).

**Evidence files:** `2026-06-11-W24-sprint-4-planning.md`, `decisions-log.md`, `craft-execution-summary.md`. Sprint 4 also has a dedicated retro whiteboard: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/whiteboard/2406157920?atl_f=PAGETREE (Sprint 2 retro: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/whiteboard/2305329887?atl_f=PAGETREE).

**Open item:** QA/UAT environment separation is logged as a **Team** decision (4 Jun, 9am meeting), not solely authored by Michelle. If citing this as personal ownership, frame it as "facilitated" or "proposed," not "decided" — the evidence package flags this ownership framing as still unresolved.

---

## 03 — Ownership

**What this folder proves:** Taking on ambiguous, unowned scope and escalating the right things upstream rather than absorbing them silently.

**Specific evidence:**
- **POCDEX elevated from story to Epic:** Identified a hidden four-story cross-squad dependency chain and formally elevated it to Epic status (documented in the 2 Jun EOD and the formal Epic scope doc, 18 Jun) — gave the programme visibility on a dependency nobody else had surfaced.
- **Upstream escalation over local patching:** OTG/POCDEX batch job mismatches were escalated to source systems (POCDEX, Cumulus, HRPS) rather than patched at the OTEP UI layer — a consistent pattern of fixing root cause over symptom.
- **AppraiseAI input list itself:** A comprehensive, dated self-audit spanning BA operations (Jan-Apr, ~113,000 OTG users) through PM delivery (Apr-Dec) — evidence that ownership extended across a full role transition, not just the current scope.

**Evidence files:** `2026-06-02-W23-eod.md`, `2026-06-18-W25-epic-pocdex-authorisation.md`, `2026-06-24-W26-appraise-ai-input-list.md`.

**Caveats flagged in the input list itself (confirm before final submission):** post-v3 catalogue count, exact OTG user count (~113,000), PMP AI session FormSG results, CareerCompass go-live artefacts (PostHog funnel, auth logs), Jobelle handover completion date, R1 scope sign-off from Mark.

---

## 04 — Strategic Alignment

**What this folder proves:** Delivery stayed mapped to a consistent MVP narrative across 9 sprints, with goals that ladder to outcomes, not just outputs.

**Specific evidence:**
- **Sprint goal framing as officer outcomes, not delivery lists:** e.g., Sprint 4's goal was "officers can search, filter, and sort opportunities... and trust the data is current," not "ship OTEP-85/86/128." This framing gave the team a basis to defer scope creep (e.g., a Sprint 2 request to add auth) without manager escalation.
- **Full sprint history (S2 through S9) traceable to one MVP thread:** every sprint goal ladders toward the same Nov go-live target, with the fixed downstream chain visible (VAPT 7 Sep-16 Oct, deploy 19-23 Oct, soft launch 26-30 Oct, first release week of 2 Nov).
- **Tracker integrity maintained across 9 sprints:** each close captured an honest final state (Done/QA-carry-in/Backlog-carry-in counts), not just a "sprint closed" label — visible in the Sprint 2 through Sprint 5 entries.

**Evidence files:** `sprint-status.md` (full S1-S9 goal and closure history). Verifiable directly against the live OTEP-Pathfinder board: https://sgtechstack.atlassian.net/jira/software/c/projects/OTEP/boards/12541/timeline (board 12541).

---

## 05 — Culture and Organisational Influence

**What this folder proves:** Investment in other people's capability, not just individual delivery — the "beyond my own ticket count" dimension.

**Specific evidence:**
- **Jobelle handover — a designed, not improvised, transition:** 12 sessions across 4 weeks, explicitly sequenced by complexity (OTG ops context first, OTEP delivery second) rather than by recency or convenience. Session 1 ran 8 Jun with all reference materials staged beforehand. ARK access secured proactively through Adrian ahead of the handover deadline, not requested reactively.
- **Explicit success gate, not an open-ended handover:** Week 4 Session 3 is a formal reverse-shadow sign-off — Jobelle leads a live task, Michelle observes only. Structure forces a real independence test rather than a soft "she's probably ready" call.
- **Co-presented at PMP #2 Learn-Create-Share Friday (8 May 2026)** — an AI-empowerment session for product officers ("AI-Empowered Product Officers Work Smarter & Deliver Better"). 4.25/5 satisfaction, 100% would recommend, 75% reported clearer understanding of AI afterward (25% no change). Credited as co-presented, not sole ownership, per the post-event feedback's "both presenters" framing.

**Evidence files:** `2026-06-10-W24-jobelle-handover-plan.md`. AI session sourced separately to `PMP LCS Friday Feedback Results for Sharing_8May2026.pdf` (located outside PM-OS/PM-skills-ALL-1, confirmed 2026-07-16 in the main APA write-up).

**Note:** this item was flagged "unsourced, do not cite" in the original evidence package README (2026-07-13) — that flag is now stale. The source file was located and the claim confirmed in the main write-up on 2026-07-16; safe to cite with the stats above.

**Still not included — no evidence found:**
- "PM Operating System adopted by other programme PMs" — no named PMs or supporting evidence found; cut from the main write-up per Jace's flag (comment JT6).

---

## Before Submitting — Open Items Across All Folders

1. Confirm the QA/UAT environment split (02) is framed as "facilitated/proposed" not "decided solely by Michelle" — it's logged as a Team decision.
2. ~~Source or drop the AI session stats claim (05)~~ — resolved 2026-07-16, sourced to `PMP LCS Friday Feedback Results for Sharing_8May2026.pdf`. "Adopted by other PMs" claim remains dropped, no evidence found.
3. Resolve the 6 confirmation flags in the AppraiseAI input list (03) — catalogue count, user count, FormSG results, go-live artefacts, handover completion date, Mark's R1 sign-off.
4. Confirm no confidential/internal-only content in the ingestion dashboards or decisions logs before any wider SharePoint sharing.

---

*Generated: 2026-07-16. Source: `2026-07-13-W29-apa-evidence-package/README.md` and each folder's contents.*
