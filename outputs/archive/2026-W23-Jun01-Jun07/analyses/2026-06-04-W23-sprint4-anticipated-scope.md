---
date: 2026-06-04
type: sprint-scope-forecast
sprint: Sprint 4 (16–27 Jun) — ANTICIPATED, not committed
status: forecast as of Sprint 3 Day 3; firms up at S3 close (14 Jun)
source: live Jira (Sprint-34617) + 2026-06-03-sprint4-trio.md + grooming-brief-2026-06-04.md
---

# Sprint 4 — Anticipated Scope

> **Superseded as scope source (2026-06-04):** the team adopted **Pow Hwee's "Planning draft for sprint 3 and after"** (Confluence) as the S2–S6 plan of record. This doc's **readiness/AC/Pow-Hwee-prep detail still holds** and is the line-level layer under his plan — but his streams are now the scope source of truth. Native apply = R1 (not the S4 spike his draft showed). S4 dates = 14–28 Jun. See [adoption reconciliation](2026-06-04-adopt-powhwee-plan-reconciliation.md).

**Read this as a forecast, not a commitment.** Sprint 4 is a catch-up sprint, and most of its content is whatever the Sprint 3 spine doesn't finish. At S3 Day 3, ~45 of 49 issues are still open — so the carry-over isn't "a few stragglers," it's the bulk of the sprint goal. The committed S4 backlog can't be locked until S3 closes (14 Jun). What follows is the **anticipated** intake plus the decisions that hold regardless of what lands.

---

## What "anticipated" means here

| | Anticipated (forecast — confirms at S3 close) | Firm now (decide regardless of S3) |
|---|---|---|
| **Carry-over set** | Which exact tickets carry depends on S3's last 8 days | — |
| **New work** | Stream A only starts *if* the spine lands | — |
| **Sequencing** | — | Drain-then-build; apply-first; FE-weighting |
| **Cuts** | — | Auth, competency block, OTEP-130 — out regardless |

The carry-over is a forecast. The sequencing and the cuts are calls — make them now so grooming isn't a negotiation.

---

## Stream 0 — Anticipated carry-over (the likely bulk of S4)

*Forecast: these carry unless S3's final week clears them. Each row notes what would have to happen in S3 to drop it from S4.*

| Story | What | Drops from S4 if… | S3 status (Day 3) |
|---|---|---|---|
| OTEP-319 | Apply via FormSG redirect | …it lands Done in S3 (the goal) | Backlog, unassigned ⚠️ |
| OTEP-86 / 317 | Filter by type + clear | …filter FE (381) finishes | 380 In Progress, 381 Backlog |
| OTEP-88 / 89 | C@G listing + deep-link | …unlikely to clear in S3 | Backlog |
| OTEP-87 (core) | C@G detail, non-competency | …unlikely to clear in S3 | Backlog |
| OTEP-374–379 | C@G API + payload + UI + tests | …BE chain clears (Léo) | Backlog |
| OTEP-305 / 368 / 370 | Logout, session redirect (Keycloak) | …FE clears (Thomas) | Backlog / 369 In Progress |
| OTEP-192 / 348 | Ingestion job + scheduler/obs | …both land Done in S3 | Backlog; 348 needs sharpen |

**Highest-confidence carry:** the C@G surface (88/89/87/374–379) — none started, won't clear in S3's remaining days. **Treat C@G as the spine of S4, not as "new work."**

**Wildcard:** OTEP-319. If it's forced ahead this week (it should be), it may close in S3 and drop off S4. If it doesn't, it's S4's #1 item. Everything downstream (OTEP-130, full apply) hangs on this one.

---

## Stream A — Anticipated new work (conditional on the spine landing)

*Only groom these if the spine is actually clearing. Otherwise S4 is pure catch-up.*

| Story | What | Gate |
|---|---|---|
| OTEP-202 | POCDEX seed DB for local dev | Daryll planning session (#31) |
| — | Instrumentation: list_view, detail_view, filter_applied, click_to_formsg | Must-have to measure the North Star — not optional |
| OTEP-130 | Full FormSG apply (webhook) | **Only if OTEP-319 lands clean** + webhook contract specced. Else S5. |

---

## Not in Sprint 4 — cut regardless of S3 (state up front)

These are firm. They don't depend on how S3 closes.

- **All auth / WOG AD** (OTEP-71 / 110 / 127, WOG-06) — gated on OTEP-350 onboarding, not started. **S5 working assumption.**
- **OTEP-87 competency block** — no SSOT (open #18). Cut, not deferred-with-design.
- **OTEP-130** — no webhook contract. Defer to S5 unless 319 lands clean.
- **OTEP-127 ringfencing** — POCDEX plumbing off-board (271/203). Not buildable on current evidence.

---

## Decisions that hold regardless (make these now — don't wait for S3 close)

1. **Force apply-first (OTEP-319) in S3 this week.** Assign to Thomas, ahead of filter FE. The single highest-leverage move — it decides whether 319 is S4's #1 item or already done.
2. **Drain-then-build.** S4 week 1 = QA tail + apply + filter; week 2 = C@G. The 12-ticket QA tail is the hidden S4 tax.
3. **New dev ~70/30 FE/BE**, the BE slice on the C@G API chain (374/377/378) so FE isn't idled waiting on C@G BE.
4. **Lock C@G card / deep-link UX at the S4 design review** before building — one 30-min call unblocks badge + card + detail.

---

## When this firms up

- **Now → 14 Jun:** treat as forecast. Groom against it, but label carry-over as anticipated.
- **S3 close (14 Jun):** whatever's not Done carries → that becomes the committed S4 backlog.
- **S4 planning (Thu wk 2):** confirm the goal + final scope against the actual close state.

---

## Proposed Sprint 4 goal (for grooming)

> By end of Sprint 4, an officer can complete the full discovery-to-apply journey on live data — browse, filter, view a detail page, and apply to any OTG opportunity — and see Careers@Gov opportunities in the same listing with a clear path out to apply there.

Ties the carry-over spine and the C@G work to one officer outcome. Bring it as the proposed goal so grooming commits to an outcome, not a ticket list.

---

*Companion: [grooming brief](grooming-brief-2026-06-04.md) (per-story readiness) · [trio analysis](2026-06-03-sprint4-trio.md) (the why) · [grooming agenda](2026-06-03-sprint4-grooming-agenda.md) (session structure).*
