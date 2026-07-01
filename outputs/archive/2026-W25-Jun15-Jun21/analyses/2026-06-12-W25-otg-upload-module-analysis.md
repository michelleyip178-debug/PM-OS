---
title: OTG Upload Module — Product Analysis
date: 2026-06-12
owner: Michelle Yip
relates_to: OTEP-397, OTEP-403, OTEP-192, OTEP-348, OTEP-427
status: Draft — for sign-off session prep and S4 scoping
---

# OTG Upload Module — Product Analysis

**What this is:** A complete analysis of the OTG file upload module — what it is, what it needs to do, how big it is, what it risks, and what decisions need to be made before scoping the build.

**Why this matters:** This module is scoped as "interim until OTG decommissions in 2028." That means it will run in production for 2+ years, across ~100 import runs, touching every pilot agency. It needs to be designed and operated as a service, not a one-time migration tool.

---

## 1. What the module does

The OTG upload module is the admin-facing interface for ingesting OTG opportunity data into CareerCompass. It sits on top of the OTEP-192 ingestion engine and provides a DevOps admin with a three-step workflow:

```
Drop (upload .xlsx file)
    ↓  Schema validation — reject immediately if file structure is wrong
    ↓  Security scan via Cloud File Transfer (CFT)
    ↓  Dry-run against OTEP-192 ingestion rules
Review (preview before publish)
    ↓  Pass count, skip count, skip-by-reason, per-agency breakdown
    ↓  Admin decides to publish or abort
Publish
    ↓  Records written to CareerCompass DB
    ↓  Skip report generated and downloadable
    ↓  Run logged with full audit record
```

OTG has no API. There is no automated sync until OTEP-348 (scheduler) is built — which is blocked on the C@G dedup rule (I-010, open). For MVP and for most of the 2026–2028 window, this wizard is the only way to get OTG data into CareerCompass.

---

## 2. Operational context

This is not a one-time migration. It is a recurring operational workflow.

| Dimension | Detail |
|---|---|
| **Cadence** | Fortnightly (as per OTEP-397 user story) |
| **Runs to decommission** | ~52 per year × 2 years = ~104 runs |
| **OTG decommission** | 2028 (programme milestone) |
| **Users** | DevOps admin (named individual, role-restricted) |
| **Pilot agencies in scope** | PSD, ESG, MDDI, URA, MCCY, CAAS |
| **Catalogue dependency** | CareerCompass listing quality is directly tied to upload run quality |
| **Scheduler alternative** | OTEP-348 (automated sync) — blocked on C@G dedup, not in near-term scope |

Because it runs until 2028, every design decision made now has a 2-year operational consequence.

---

## 3. Scope sizing

### What's already built (do not recount)

| Ticket | What it covers | Status |
|---|---|---|
| OTEP-192 | Core ingestion engine — validates, hard-skips, upserts to DB | QA, closes S3 |
| OTEP-403 | Pipeline hardening — malformed files, concurrent runs, schema-drift logging | S4, 5pts, Léo |

### The upload module build (OTEP-397)

**Layer 1 — Backend: file ingestion endpoint**

Accept `.xlsx`, run through OTEP-192 engine, return structured pass/skip results.

| Condition | Estimate |
|---|---|
| Dry-run mode exists in OTEP-192 | 2–3 pts |
| Dry-run mode does not exist and needs building | 5–8 pts |

This is the largest single uncertainty. **Confirm with Léo before S4 planning.**

**Layer 2 — Frontend: admin upload wizard**

| Screen | What it includes | Estimate |
|---|---|---|
| Drop | File picker, data source selector, CFT scan state, schema error state | 2–3 pts |
| Review | Pass/skip counts, skip-by-reason grouped table, per-agency breakdown, ring-fenced count | 3–5 pts |
| Publish | Confirmation action, post-publish skip report download, run success state | 2–3 pts |

FE total: **7–11 pts**

**Layer 3 — Skip report output**

| Format | Estimate |
|---|---|
| Simple CSV download (skip reason + row data) | 1–2 pts |
| Formatted Excel matching OTEP_Remediation_Report_v3.xlsx | 3–5 pts |

### Total scope estimate

| Scenario | BE | FE | Skip report | Total |
|---|---|---|---|---|
| Best case (catalogue preview exists, simple CSV report) | 2–3 pts | 7–8 pts | 1–2 pts | **10–13 pts** |
| Realistic (catalogue preview needs building, formatted report) | 5–8 pts | 9–11 pts | 3–5 pts | **17–24 pts** |

At current velocity: 10–13 pts = one sprint. 17–24 pts = two sprints.

**Sprint availability:**

| Sprint | Dates | Available for upload module? |
|---|---|---|
| S4 | 15–28 Jun | OTEP-397 spike only (3pts, Michelle). No build stories yet. |
| S5 | 29 Jun–10 Jul | Ring-fencing already has 11pts (OTEP-408 + OTEP-409), unassigned. OTEP-390 unpointed. Tight. |
| Post-S5 | Aug onward | Go-live prep window. Build here = post-launch delivery. |

If the upload module comes in at the realistic range (17–24pts), it **cannot fit in S5 alongside ring-fencing.** A call needs to be made before S4 planning.

---

## 4. Discovery questions

30 questions identified. 11 answered, 19 open. Full checklist: `2026-06-12-W25-otg-upload-discovery-checklist.md`.

**The 5 that block scoping:**

| # | Question | Why it blocks |
|---|---|---|
| D1 | Does OTEP-192 support catalogue preview? | Determines BE scope by 3–5 pts. Confirm with Léo this week. |
| D2 | Who is the named DevOps admin for the soft-launch? | No named person = no user to design for. Persona is assumed, not validated. |
| D3 | What does the admin do with the skip report — and who owns the agency follow-through? | If no owner, the skip report UI has no operational value. |
| D4 | Is there a rollback / un-publish path if bad data is published? | Absent from current scope. Must be explicitly decided (in or out) before build. |
| D5 | Is the upload module transitional (pre-scheduler) or permanent ops tooling? | Affects design investment, monitoring requirements, and handover to Jobelle. |

---

## 5. Operational risks

Ranked by probability × impact over the 2026–2028 window.

### Risk 1 — No named operational owner 🔴 High

**What happens:** The DevOps admin who ran the first 10 uploads moves on. Nobody picks up the fortnightly cadence. The catalogue goes stale for 6 weeks. When someone eventually re-runs it, there's no audit trail of what was last imported.

**Root cause:** "DevOps will handle it" is not an owner. This is a recurring operational task that needs to be in a named person's job description.

**Mitigation:** Name the operational owner before go-live. Define what "owning" means — who runs uploads, who reviews the skip report, who chases agencies on remediation. Document this in a runbook.

---

### Risk 2 — OTG export schema drifts silently 🔴 High

**What happens:** OTG renames a column in a quarterly release. The pipeline accepts the file (it's valid `.xlsx`), processes rows, but maps the renamed field to null. Records ingest with blank function tags or wrong type labels. No error fires. Catalogue degrades quietly.

**Root cause:** Fail-loud validation catches structurally invalid files. It does not catch semantic drift — a column that exists but means something different.

**Mitigation:** Schema fingerprinting on every upload. If the column set changes from the last accepted file, flag it to the admin before processing. This is a 2–3 pt addition to the BE layer and is strongly recommended given the 2-year window.

---

### Risk 3 — Agency data quality degrades over time 🟡 Medium-High

**What happens:** Agency contacts who fixed their TypeTag issues in mid-2026 turn over. New contacts don't know the rules. Skip rates climb back to pre-remediation levels over 12–18 months. The catalogue shrinks without any explicit decision to shrink it.

**Root cause:** No feedback loop. The skip report tells agencies what's broken today but there's no mechanism to alert them when their skip rate worsens again, and no SLA on remediation.

**Mitigation:** Build the per-agency skip report as a shareable artefact from day one (not an afterthought). Define an escalation path when an agency's skip count exceeds a threshold. Assign Xian Zhang's team as the ongoing agency liaison.

---

### Risk 4 — No audit trail for 2 years of runs 🟡 Medium-High

**What happens:** In 2027, there's a complaint that a specific opportunity appeared and then disappeared from the catalogue. Jobelle cannot reconstruct which run published it, whether it was previously skipped, or what changed between runs.

**Root cause:** OTEP-403 adds per-run logging, but it's scoped to single-run observability. There's no longitudinal run history — no way to query "when did record X first pass?" or "which run skipped record Y and why?"

**Mitigation:** Run history table in the DB — one row per import run, with run ID, timestamp, triggered-by, pass count, skip count, skip breakdown. Not expensive to build. Makes 2027 debugging tractable.

---

### Risk 5 — No rollback if wrong data is published 🟡 Medium

**What happens:** Admin uploads the wrong file (last week's export instead of today's). Presses Publish. 60 stale or incorrect records are now live. There's no undo. A manual DB fix is required, involving Léo or Pow Hwee.

**Root cause:** Rollback is not in current scope. The soft-launch (one pilot admin) is the only risk mitigation.

**Mitigation (options):**
- **Option A:** Soft-publish with a 15-minute undo window. Low-complexity, low-risk.
- **Option B:** Publish writes to a staging state; a second confirmation pushes to live. Higher complexity, stronger guarantee.
- **Option C:** Accept the risk. Manual DB fix is the rollback. Document it in the runbook. Only viable if admin access is highly restricted and runs are infrequent.

Option C is acceptable for MVP. Option A is recommended before full DevOps rollout.

---

### Risk 6 — The module becomes critical infrastructure without being treated as such 🟡 Medium

**What happens:** Because it's framed as "interim," nobody invests in monitoring or alerting. An upload fails silently on a Friday. The skip count is 205 instead of 50, but nobody checks the dashboard. The catalogue has 160 opportunities instead of 415 for two weeks.

**Root cause:** "Interim" framing suppresses operational investment. But 104 runs over 2 years is not interim — it's a core system.

**Mitigation:** Define a minimal monitoring baseline before go-live: run success/failure alert, skip count threshold alert (e.g. skip rate >60% triggers a notification), weekly catalogue health check. These can be lightweight — even a Slack notification from the run log is better than silence.

---

### Risk 7 — OTG decommission drain is unplanned 🟡 Medium

**What happens:** In late 2027, the programme team needs to run 3–5 final OTG exports as agencies migrate off OTG. The upload module hasn't been touched in 18 months. Léo has moved. The schema has drifted. The decommission drain takes 6 weeks of unplanned engineering effort.

**Root cause:** Nobody has thought about decommission as a use case for this module.

**Mitigation:** Document the decommission use case now. Confirm with the programme team how many final imports are expected and by when. Ensure the module is included in handover documentation to whoever owns CareerCompass in 2027–2028.

---

## 6. Scope options

Three options for how to treat this in the sprint plan.

### Option A — MVP manual, wizard as fast-follow

DevOps runs the initial import manually via OTEP-192 (it exists, it works). OTEP-397 wizard ships as a post-launch capability in S6 or later. Ring-fencing ships on time in S5.

**Pros:** No S5 compression. Ring-fencing is the higher-stakes MVP requirement. Manual import is viable for a one-time launch run.

**Cons:** Fortnightly cadence without a wizard is operationally painful from week 2 onward. DevOps admin is doing raw file management with no skip visibility. Operational risks 1–6 are all unmitigated at launch.

**Verdict:** Acceptable for launch day. Not acceptable as a sustained operating model.

---

### Option B — Minimal wizard in S5 (best-case scope only)

Confirm catalogue preview exists with Léo. Build the three-screen wizard at best-case scope (10–13 pts). Skip formatted report — CSV download only. Defer rollback, schema fingerprinting, and run history to post-launch.

**Pros:** Admin has a usable UI at launch. Skip visibility from day one. Fits in S5 if ring-fencing stays at 11pts and OTEP-390 is scoped slim.

**Cons:** Operational risks 2 (schema drift), 4 (audit trail), and 5 (rollback) remain unmitigated. Requires catalogue preview confirmation before S4 planning.

**Verdict:** Recommended if catalogue preview exists. Makes the launch operationally viable.

---

### Option C — Full wizard with operational hardening (realistic scope)

Build the full wizard (17–24 pts) including schema fingerprinting, run history, and downloadable formatted skip report. Treat this as the service it is from day one.

**Pros:** Operationally sound for 2 years. Reduces handover risk. Mitigates risks 1–6 at build time.

**Cons:** Cannot fit in S5 alongside ring-fencing at current capacity. Either ring-fencing slips to S6, or upload module starts in S4 before the spike closes (rework risk).

**Verdict:** Right scope, wrong timing. Target this as the S6 hardening release, not the S5 MVP build.

---

## 7. Recommended path

| Action | Owner | When |
|---|---|---|
| Confirm catalogue preview capability with Léo | Michelle | Before S4 planning (15 Jun) |
| Name the DevOps admin for soft-launch | Michelle + Rama | Before S4 planning |
| Run one stakeholder session (Rama + DevOps contact) to validate admin persona and skip report workflow | Michelle | w/c 15 Jun (S4 week 1) |
| Decide Option A vs B before S4 grooming | Michelle + Pow Hwee | S4 week 1 |
| Define the operational owner and runbook as part of OTEP-397 spike output | Michelle | OTEP-397 spike deliverable |
| Add schema fingerprinting and run history to the post-launch backlog (Option C scope) | Michelle | S4 backlog grooming |
| Confirm decommission use case with programme team | Michelle | Before S5 planning |

---

## 8. Open decisions

| # | Decision | Owner | Needed by |
|---|---|---|---|
| OD-1 | Option A (manual launch) vs Option B (minimal wizard in S5)? | Michelle + Pow Hwee | S4 planning (15 Jun) |
| OD-2 | Does OTEP-192 support catalogue preview? | Léo | Before S4 planning |
| OD-3 | Who is the named operational owner of the upload cadence? | Michelle + DevOps lead | Before go-live |
| OD-4 | Is rollback in or out of MVP scope? | Michelle + Pow Hwee | Before OTEP-397 build grooming |
| OD-5 | Is schema fingerprinting a MVP requirement or post-launch hardening? | Michelle + Pow Hwee | Before OTEP-397 build grooming |
| OD-6 | Is the upload module transitional (pre-scheduler) or permanent ops tooling until 2028? | Michelle | Before sign-off session |

---

*Last updated: 2026-06-12. Related files: `otg-ingestion-brief.md`, `otg-ingestion-decision-log.md`, `2026-06-12-W25-otg-upload-discovery-checklist.md`, `../decisions/2026-06-12-W25-otg-upload-signoff-trio-prep.md`.*
