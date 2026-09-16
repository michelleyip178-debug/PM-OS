## R1: Why We Need 4 Engineers, Not 3

**Date:** 2026-09-16

**Owner:** Michelle Yip

**Audience:** Rama / Adrian

**Decision needed:** Approve a 4th dedicated engineer on R1, or name what gets cut.

---

### TL;DR

R1's 5.5-sprint plan assumes 3 engineers (Thomas, Hao Eng, Léo) covering 10 marketplace features. It doesn't account for CAM integration (confirmed for R1, unscoped), OTG ingestion enhancement (unsized backlog spike, OTEP-578), or RBAC's real weight (F-27, booked at 1.0 sprint but gates everything downstream). All three compete for the same 3-person pool. Layered on a squad that has never closed a sprint at 100%, that leaves no slack. We need a 4th engineer, or an explicit call on what gets cut.

---

### 1. CAM integration — confirmed, unscoped

CAM ships in R1 (confirmed 20 Aug): 7 real-time HR event types via webhook, each with its own CC-side action, plus 7 read-only APIs to integrate. The epic's own one-pager says it plainly: *"Effort not estimated. R1 commitment isn't credible without a sizing pass."* Case-linkage to Ops Portal and Staff-Exit data cleanup (PDPA) are also unresolved.

**Open item (16 Sep):** Hao Eng found Keycloak's SCIM standard might let CAM wire directly to Keycloak, skipping custom endpoints entirely (OTEP-1553). She's proposed this to the CAM team; response pending. If it holds, CAM shrinks a lot. Until then, don't quote an effort number — flag it as pending.

### 2. OTG ingestion enhancement — unsized

OTEP-578 is an unassigned spike in Sprint 9's backlog. R1's Pillar 1 (Move Off OTG) already assumes clean ingestion (F-23, F-26, F-29) — this spike's outcome feeds committed scope, it's not separable.

### 3. RBAC — underweighted

F-27 is booked at 1.0 sprint but gates CV upload and everything downstream of it (F-05, F-11). A 4-tier access model plus privacy plus audit logging in one sprint is thin, and this squad's WOG AD/auth tickets show exactly this kind of work slipping 3+ weeks past sprint close before.

### 4. The squad has never hit 100%

Ticket throughput (this team doesn't track points), last 4 closed sprints:

| Sprint | Committed | Done at close | % |
|---|---|---|---|
| S4 | 66 | 28 | 42% |
| S5 | 75 | 30 | 40% |
| S7 | 56 | 23 | 41% |
| S8 | 73 | 52 (+6 more, 3 weeks late) | 71% eventual |

Every sprint carries forward 30-50% of committed work. Thomas alone holds 5 of 15 Sprint 9 tickets right now — none of them R1. The plan's 0.7-sprint buffer doesn't cover this pattern, let alone CAM/OTG/RBAC risk on top of it.

---

### The Ask

**Add a 4th engineer**, owning CAM (once sized) or OTG ingestion — so Thomas, Hao Eng, and Léo hold the marketplace build at this team's actual demonstrated throughput, not the PRD's RICE-estimated one.

**If no 4th is available:** name what gets cut or deferred to R2 before Sprint 1 freeze — don't let it surface mid-sprint the way WOG AD did in Sprint 8.

---

### Confirmed vs. needs your call

- ✅ CAM scope, OTG spike status, RBAC placement, sprint throughput — all pulled from live PRD/Jira.
- ⚠️ The "~7 tickets/feature" estimate behind the capacity math is inferred from this squad's history, not confirmed by Rama or Adrian — flag as assumption, not agreed fact.
- ⚠️ Whether CAM and OTG ingestion are meant to land inside this same 5.5-sprint window is this brief's assumption — check with Adrian.
