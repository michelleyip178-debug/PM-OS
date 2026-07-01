---
date: 2026-07-01
scope_baseline: mvp-scope-2026-05-21.md (52 stories, 10 themes)
sprint_data_as_of: Sprint 5 Day 3 (live pull 2026-06-30)
---

# Opportunities Stocktake — Original Scope vs. Sprint Delivery

**Baseline:** The 21 May 2026 MVP scope snapshot (`mvp-scope-2026-05-21.md`) is the most complete single artifact mapping all 52 originally-scoped stories to sprints. Comparing that plan against actual delivery through Sprint 5 Day 3 (live Jira pull 2026-06-30).

**Bottom line up front:** Of 52 originally scoped stories, **~41 have a Jira ticket and are moving** (Done, In Progress, or QA); **~10 never got a ticket** as of the 21 May snapshot (mostly WOG AD/Admin sub-stories and instrumentation); a handful were **explicitly descoped to R1** after the snapshot (competency ratio, SJR apply, bookmarks). The plan has held up reasonably well on sequencing, but **auth (WOG AD) and CSC SSO have slipped from their "S4 best case" and are now tracking to S5/S6 as the snapshot's own "working assumption" predicted.**

---

## 1. Foundation & Infrastructure — ✅ 100% Complete

All 8 stories were Sprint 1 prerequisites. All Done as of the 21 May snapshot; confirmed still Done in the current sprint-status.md.

| Story | Status |
|---|---|
| OTEP-209, 171, 201, 207, 204, 224, 252, 190 | ✅ All Done (Sprint 1) |

**No drift.** This theme delivered exactly as planned.

---

## 2. Opportunity Listing & Discovery — ✅ Mostly Delivered (8/9)

| Story | Originally Planned | Actual |
|---|---|---|
| OTEP-170 (base layout) | Sprint 1→2 | ✅ Done |
| OTEP-288 (backend stub) | Sprint 2 | ✅ Done |
| OTEP-85 (cards w/ real OTG data) | Sprint 2 | ✅ Done (landed Sprint 3, one sprint late) |
| OTEP-267 (pagination) | Sprint 2 | ✅ Done (Sprint 2, on time) |
| OTEP-268 (empty/error states) | Sprint 2 | ✅ Done — landed Sprint 5 QA, **3 sprints late** |
| OTEP-129 (open/closed + closing-soon badge) | Sprint 2 | ✅ Done — split into OTEP-362/363, delivered Sprint 4 |
| OTEP-86 (filter by type) | Sprint 3 | ✅ Done — landed Sprint 5 QA, **2 sprints late** |
| OTEP-317 (clear filters/reset) | Sprint 3 | Not tracked as a standalone ticket in current sprint data — **verify status, may have been folded into OTEP-86** |
| OTEP-318 (filter by category) | Sprint 3, conditional on OTEP-289 spike | Superseded — **OTEP-437 (filter by job family)** now the live successor, currently a Sprint 6 backlog candidate |

**Drift:** Core listing/discovery is functionally complete, but timing slipped 2-3 sprints on several items (cards, empty states, type filter). The category filter concept evolved into job-family filtering (OTEP-437) rather than shipping as originally scoped — a reasonable evolution given Imelda's job-family master list work, but worth noting as scope-morph, not scope-slip.

---

## 3. Opportunity Detail & Apply — ⚠️ Partially Delivered (4/8 clearly done)

| Story | Originally Planned | Actual |
|---|---|---|
| OTEP-295 (mock detail endpoint) | Sprint 2 | Superseded by real endpoint work — not separately tracked, presumed folded in |
| OTEP-128 (view detail page) | Sprint 2 | ✅ Done — landed Sprint 5 QA, **3 sprints late** |
| OTEP-87 (enhanced detail, apply CTA) | Sprint 3 | ⚠️ Still in Backlog as of Sprint 6 grooming prep (1 Jul) — **not started, 3 sprints behind plan**. Flagged in this week's grooming brief as needing AC restructuring |
| OTEP-319 (FormSG basic redirect) | Sprint 3 | ✅ Done — `formsg_url` confirmed, delivered on schedule |
| OTEP-131 (null formsg_url fallback) | Sprint 3, no ticket yet at snapshot | ✅ Done — ticket created and delivered, landed Sprint 5 QA |
| OTEP-130 (FormSG full — webhook, status sync) | Sprint 4 | **Not visible in current sprint data as a distinct story** — likely absorbed into OTEP-505 (CFT upload/webhook) or descoped; needs verification |
| US-10 (application confirmation screen) | Sprint 4, no ticket at snapshot | **No ticket found in current data — appears to have never been created.** Flag for confirmation: is this still needed, or superseded by FormSG's own confirmation flow? |

**Drift:** This is the theme with the most real slippage. OTEP-87 (detail page competency/apply enhancement) is the biggest concern — still not started after being planned for Sprint 3, and it's the same ticket flagged in this week's grooming brief as needing AC rework. Two stories (OTEP-130, US-10) can't be confirmed as delivered, descoped, or dropped — worth a direct check with Pow Hwee/Thomas.

---

## 4. OTG Data Integration — ✅ Delivered (5/5)

| Story | Originally Planned | Actual |
|---|---|---|
| OTEP-296 (Excel format standardisation) | Sprint 2 | ✅ Done |
| OTEP-193 (data model) | Sprint 2 | ✅ Done |
| OTEP-313 (raw ingest table) | Sprint 2 | ✅ Done |
| OTEP-316 (real DB query, replace mock) | Sprint 2 | ✅ Done (as OTEP-320, "replace mock endpoint with real db access") |
| OTEP-192 (recurring OTG fetch job) | Sprint 3 | ✅ Done |

**No drift.** Delivered on schedule. Bonus: this theme also absorbed real-world hardening work not in the original plan — the 75% OTG validation failure rate fix (v3 ingestion rules, D-026) and OTEP-348/403 (scheduler/observability, import hardening) are still active Sprint 6 candidates, meaning the team is now doing quality work beyond the original scope, which is a good sign for data reliability even though it wasn't originally budgeted.

---

## 5. Careers@Gov Integration — ⚠️ In Progress, Behind Schedule

| Story | Originally Planned | Actual |
|---|---|---|
| Story D (C@G API ingestion setup) | Sprint 4, no ticket at snapshot | ✅ Delivered — became OTEP-482 (import) + OTEP-539 (background import), both tracked and largely Done/In Progress |
| OTEP-88 (OTG vs C@G visual distinction) | Sprint 4 | 🔵 Still In Progress in Sprint 5 (Léo) — **1 sprint late, still not closed** |
| OTEP-89 (C@G detail + apply CTA) | Sprint 5 | **Not found as a distinct open ticket** — appears to have merged into OTEP-87's scope (OTEP-87's description now explicitly covers "View Careers@Gov Opportunity Detail"). This is scope consolidation, not disappearance, but worth confirming explicitly since OTEP-87 itself is stalled. |
| OTEP-133 (EDM email deep-link) | Sprint 6 | ✅ Marked "Resolved" per open-items.md #20/#43 discussion — absorbed into OTEP-390's scope per Sprint 6 grooming brief notes |

**Drift:** C@G integration is real but behind the original Sprint 4-5 target, and the consolidation of OTEP-89 into OTEP-87 means the stalled OTEP-87 ticket is now blocking two original features at once (native detail view AND C@G apply), not one.

---

## 6. WOG AD Authentication — 🟡 Tracking to Plan's Own "Worst Case" (S5), Now Slipping Further

The snapshot itself flagged this as high-risk with a dual timeline: "S4 best case, S5 working assumption."

| Story | Originally Planned | Actual |
|---|---|---|
| OTEP-111 (no-access handling) | Sprint 1 | ✅ Done |
| OTEP-72 (account creation) | Sprint 1 | ✅ Done |
| OTEP-71 (log in with WOG AD) | S4 best / **S5 assumption** | **Status unclear in current data** — not visible as an open Sprint 5 ticket. Given WOG AD approval (#26) is still pending as of today (1 Jul), this likely cannot have shipped for real WOG AD login yet — may be built against Keycloak stub per the 2026-06-02 decision, with real WOG AD swap still pending. |
| OTEP-110 (login fail/error) | S4 best / **S5** | ✅ Done — landed Sprint 3 final state per sprint-status, ahead of the S5 "working assumption" |
| OTEP-304 (stay logged in) | S4 best / **S5** | 🔵 In Progress, Sprint 5 (Hao Eng) — **on the working-assumption timeline**, but now compounded by #52 (Hao Eng leave next week, no handover) |
| OTEP-305 (log out) | S4 best / **S5** | ✅ Done — landed Sprint 5 QA |
| WOG-06 (first-time login/profile) | S4 best / **S5**, no ticket at snapshot | **No ticket visible in current data — appears not yet created or tracked under a different ID.** Needs verification. |
| WOG-10 (resolve agency from AD identity) | S4+, no ticket, blocked on agency-resolution decision | **Still no visible ticket.** The underlying blocker (open item #18 competency/data source governance) is still open as of today — this has been blocked for over a month. |
| WOG-17 (complete logout, shared devices) | S4+, no ticket | **No ticket visible.** Related work (OTEP-392, federated logout) is in Sprint 5 QA — may satisfy this requirement once it ships, but not confirmed as the same scope. |

**Drift:** This is the second-most concerning theme after Detail & Apply. Real WOG AD login (OTEP-71) status is genuinely unclear from available data — this needs a direct answer, since it's the actual authentication mechanism the pilot depends on, and the underlying WOG AD approval (#26) is still pending after being submitted 2026-06-10 (3 weeks ago). Two of three "no ticket yet" items (WOG-06, WOG-17) still have no ticket over a month later.

---

## 7. CSC SSO — 🟡 On Track Per Its Own Delayed Timeline

| Story | Originally Planned | Actual |
|---|---|---|
| Story B (CSC SSO integration) | S5 best / **S6 assumption**, no ticket at snapshot | Technical feasibility confirmed 2026-06-26 (open item #30) — architecture agreed, DLE integration testing targeted for **August**, sequentially gated behind WOG AD (#26) completing. Approval/governance docs still TBC. |

**Drift:** Tracking close to the plan's own "S6 working assumption," though real delivery now depends on WOG AD (#26) resolving first, and #26 itself is delayed. This is a downstream risk, not a standalone slip.

---

## 8. POCDEX & Ringfencing — ⚠️ Blocked, Behind Schedule

| Story | Originally Planned | Actual |
|---|---|---|
| OTEP-183 (spike) | Sprint 1 | ✅ Done |
| OTEP-271 (local POCDEX DB) | Sprint 3 | **Status unclear** — flagged in sprint-status.md as "still NOT on Sprint 3 board, reconcile" as of the 12 Jun snapshot; not visible as a separately closed item since |
| OTEP-203 (standalone POCDEX API service) | Sprint 3 | **Same as above — blocked on Core team's two outstanding questions per open item #31, still unresolved as of 17 Jun** |
| OTEP-202 (POCDEX seed DB) | Sprint 4 | Not separately confirmed Done |
| OTEP-127 (apply ringfencing criteria) | S4 best / **S5 assumption** | ✅ Done — delivered Sprint 4, actually **ahead of the S5 working assumption** |

**Drift:** Mixed picture. The actual ringfencing logic (OTEP-127) beat its own pessimistic timeline. But the POCDEX infrastructure underneath it (OTEP-203, OTEP-271) is still gated on open item #31 (Core team hasn't answered two basic questions since 17 June — two weeks stale) and is now blocking the entire OTEP-390/408/409 ringfencing-display trio sitting in the Sprint 6 grooming backlog. This is the clearest case of infrastructure debt catching up with a feature that shipped ahead of schedule on a stub.

---

## 9. Admin & Role-Based Access — ❌ Not Started (0/2)

| Story | Originally Planned | Actual |
|---|---|---|
| WOG-02 (agency admin login) | Sprint 6, no ticket at snapshot | **Still no ticket.** Correctly not urgent yet — Sprint 6 is only just being groomed now. |
| WOG-07 (RBAC, 2 roles) | Sprint 6, no ticket at snapshot | **Still no ticket.** Same — not yet due, but also not yet on the Sprint 6 backlog candidate list reviewed for grooming today. **Worth checking whether these need to be added before Sprint 6 planning**, since they were explicitly slated for this sprint in the original plan and aren't in the 21-story backlog just scored. |

**Drift:** On schedule by default (nothing due yet), but **this is a real gap to flag**: neither story appeared in the Sprint 6 grooming candidate list reviewed today. If Sprint 6 was meant to include admin/RBAC per the original plan, these need tickets created before the grooming session, not after.

---

## 10. Instrumentation — ❌ Not Started

| Story | Originally Planned | Actual |
|---|---|---|
| Analytics events (list_view, detail_view, search, filter, click-throughs) | Sprint 4, no ticket at snapshot | **No ticket found anywhere in current sprint data.** This has now been due for 2 sprints (S4, S5) with zero visible progress. |

**Drift:** This is a silent gap. Without these events instrumented, none of the MVP success metrics (search usage, filter usage, click-through to FormSG/OTG/C@G) can actually be measured at launch. Given UAT starts 11 Aug and this has had no ticket since it was due in Sprint 4, **this needs to be raised now** — it's exactly the kind of gap that's invisible until go-live, when it's too late to instrument retroactively.

---

## Cross-Cutting Observations

**1. The plan's own risk-flagging was accurate.** WOG AD auth and POCDEX/ringfencing were flagged as high-risk in the 21 May snapshot with explicit "best case vs. working assumption" dual timelines — and both are indeed the two most delayed/unclear themes today. The snapshot's risk judgment held up.

**2. Two silent gaps need attention now, not later:**
- **Instrumentation** — zero tickets, zero progress, 2 sprints overdue. Without this, launch metrics can't be measured.
- **Admin/RBAC (WOG-02, WOG-07)** — correctly not urgent yet, but not on today's Sprint 6 candidate list either. If Sprint 6 was meant to start this per the original plan, tickets need creating before grooming, not discovered missing after.

**3. OTEP-87 is now a bottleneck for two original features, not one.** The original plan had OTEP-87 (enhanced detail page) and OTEP-89 (C@G detail + apply) as separate stories. They've since consolidated into one ticket (OTEP-87), which is still sitting untouched in Backlog with known AC quality issues (flagged in today's grooming brief). This single stalled ticket is now blocking more original scope than it originally represented.

**4. Two stories can't be confirmed as done, descoped, or dropped:** OTEP-130 (FormSG full apply w/ webhook) and US-10 (application confirmation screen). Both were "Sprint 4" targets with no clear resolution in current data. Worth a direct question to Pow Hwee/Thomas rather than assuming either outcome.

**5. Explicit R1 descopes are holding.** Competency match ratio, bookmarks, application tracking, save-for-later, AI recommendations — all cleanly deferred and staying deferred, no evidence of scope creep pulling these back into MVP. This is a genuine discipline win worth naming in any stakeholder-facing retrospective (e.g., the APA writeup's "0 unlogged scope changes across 4 sprints" claim is consistent with what this stocktake shows).

**6. Scope evolved sensibly in one place:** OTEP-318 (category filter) → OTEP-437 (job family filter) is a scope-morph, not a slip — it anchors to Imelda's job-family master list instead of an ad-hoc category taxonomy, which is a better long-term decision even though it means the original ticket ID never shipped as originally named.

---

## Recommended Actions

1. **Raise instrumentation now** — no ticket exists for launch-metric events, 2 sprints overdue. Needs an owner and a sprint slot before UAT (11 Aug).
2. **Confirm WOG-02/WOG-07 (Admin/RBAC) status** before Sprint 6 planning — they were slated for S6 in the original plan but aren't in today's 21-story Sprint 6 candidate list.
3. **Get a direct answer on OTEP-71 (real WOG AD login)** — current data doesn't clearly show whether this is built against the Keycloak stub only, or genuinely tested against WOG AD. Given #26 (WOG AD approval) is still pending, this matters for realistic S5/S6 exit criteria.
4. **Resolve OTEP-130 and US-10 status** — confirm whether these shipped under different IDs, were descoped, or are simply missing from tracking.
5. **Treat OTEP-87 as higher priority than its current Backlog position suggests** — it's now blocking two original opportunities (detail page enhancement + C@G apply), not one, and has known AC quality issues per this week's grooming brief.

---

*Generated: 2026-07-01 | Baseline: mvp-scope-2026-05-21.md (52 stories) | Cross-referenced against: sprint-status.md (S1-S5 live data), open-items.md, grooming-brief-2026-07-01.md*
*Next: Confirm the 5 flagged unknowns (OTEP-130, US-10, OTEP-71, WOG-02/07, instrumentation) with Pow Hwee before Sprint 6 planning.*
