# Sprint 4 Planning Prep

**Date:** Thu 11 Jun 2026

**Meeting:** Sprint Planning — Sprint 4

**Sprint:** OTEP-Pathfinder Sprint 4 (15–26 Jun 2026)

**Attendees:** Michelle (PM), Pow Hwee (Tech Lead), Amber (Designer), Léo, Thomas + team

**Facilitator:** Michelle

---

## Sprint 3 — Where We're Handing Off

Sprint 3 ends Fri 14 Jun. Six stories are in QA and should close clean:

| Ticket | Story | Notes |
|--------|-------|-------|
| OTEP-85 | Opportunity listing with real OTG data | In QA |
| OTEP-86 | Filter by opportunity type | In QA — subtasks 380/381 Done |
| OTEP-128 | Opportunity detail page | In QA |
| OTEP-192 | OTG data ingestion | In QA — closed per hard-skip decision 2026-06-10 |
| OTEP-268 | Empty, error, partial-load states | In QA |
| OTEP-305 | Login and logout (Keycloak page replaced) | In QA |
| OTEP-317 | Clear filters and reset view | In QA |

Still in progress going into S4: OTEP-88 (C@G listing), OTEP-350 (WOG AD onboarding), OTEP-324 (OAuth refresh), OTEP-322 (Playwright E2E), OTEP-349 (competency matching spike).

---

## Sprint 4 Goal (proposed)

> Deliver a complete, usable opportunity listing experience — officers can search, filter, and sort opportunities, understand what each type means, and trust that the data they're seeing is current and accurate.

---

## Sprint 4 Scope — 14 tickets, ~42 points

| Ticket | Type | Story | Pts | DoR | Notes |
|--------|------|-------|-----|-----|-------|
| OTEP-281 | Story | [FE] Opportunity listing loading state | 3 | Ready | Spinner only; gated on OTEP-268 closed |
| OTEP-283 | Story | Ministry icons on detail page | 2 | Ready | |
| OTEP-284 | Story | "Closing soon" badge on cards + detail | 3 | Ready | ACs pushed to Jira today |
| OTEP-304 | Story | Session persistence while active | 2 | Ready | Confirm timeout value (30 min?) at planning |
| OTEP-329 | Story | Keycloak client secret externalisation | 3 | Ready | Assigned Pow Hwee |
| OTEP-386 | Story | Opportunity type tooltip + in-app explainer | 2 | Ready* | Open item: Amber to confirm modal vs page |
| OTEP-392 | Task | Keycloak federated logout | 3 | Ready | Description pushed to Jira today |
| OTEP-403 | Story | OTG data import hardening | 5 | Ready* | AC3 gated on OTEP-358 spike output — confirm with Léo |
| OTEP-404 | Task | Tablet/mobile page size fix (10 not 15) | 1 | Ready | Assigned Thomas |
| OTEP-405 | Story | [FE/BE] Keyword search | 8 | Ready* | Confirm server-side vs client-side with Pow Hwee |
| OTEP-406 | Story | [FE] Sort by posted/closing date | 5 | Ready* | Confirm `sort` param + nil-date handling with Léo |
| OTEP-127 | Spike | [Spike] Define ringfencing eligibility contract | 3 | Ready* | Needs owner assigned |
| OTEP-393 | Task | Custom OTEP login theme in Keycloak | 2 | Ready | Amber confirmed screen done 2026-06-10 |
| OTEP-110 | Story | Login fail using WOG AD | 3 | **Not ready** | AC says "handled at WOG AD" — scope undefined |

**Total (all 14):** 45 pts

**Excluding OTEP-110 (not ready):** 42 pts (OTEP-393 now ready — Amber confirmed 2026-06-10)

OTEP-328 (OpenTelemetry) removed from sprint — moved back to backlog (Foundation epic, no S4 driver).

---

## Decisions to Make at Planning

### 1. OTEP-110 — scope or defer?

The current AC ("authentication failure will be handled at WOG AD") defines a mechanism, not a user outcome. Two options:

- **Option A — scope as FE error state:** Engineer shows a clear error message + IT support instructions when WOG AD auth fails. OTEP doesn't own the WOG AD flow, just the display. Fast to build — likely 2–3pts as-is.
- **Option B — defer to S5:** Auth errors are edge-case; the main flow (successful login) is already done in S3. Defer and protect S4 capacity.

**Recommended:** Option B unless Pow Hwee confirms this is quick.

### 2. OTEP-393 — pull in ✅

Amber confirmed the screen is done (2026-06-10). Design asset is ready. Pull into S4 — no blocker.

### 3. OTEP-127 spike — who owns it?

The spike is 3 pts, 2-day timebox. Needs a named owner. Likely Pow Hwee or Léo — confirm at planning.

### 4. OTEP-386 — modal or page?

Amber needs to confirm whether the "Learn more" destination is a modal overlay or a dedicated `/opportunity-types` route. This affects FE routing and the point estimate (2 pts for modal, likely 3 for a new page).

---

## Open Items to Raise at Planning

| # | Item | Owner | Why it matters now |
|---|------|-------|--------------------|
| #26 | WOG AD form — submitted by Pow Hwee 2026-06-10 ✅ | — | Approval clock running (~2-4 weeks). Raise at planning to confirm no blockers. |
| #31 | POCDEX read replica (CP item #2 due 13 Jun) — on track? | Pow Hwee | Gates OTEP-127 spike output and OTEP-408/409 in S5. |
| #35 | OTEP-358 nil-date spike output — is it done? | Léo | OTEP-403 AC3 depends on it. |
| #41 | Competency API meeting — has Pow Hwee scheduled with Core? | Pow Hwee | Affects OTG ingestion completeness and OTEP-87 competency section. |
| #45 | Amber flow walkthrough — has a date been set? | Amber | Needed before S5 design starts. |

---

## Carry-Over Watch List (from Sprint 3)

These didn't complete in S3 and may land in S4 as unplanned work — plan capacity with buffer:

- **OTEP-88** (C@G listing) — In Progress, multiple subtasks
- **OTEP-324** (OAuth refresh token) — In Progress
- **OTEP-322** (Playwright E2E) — In Progress, Rathika
- **OTEP-350** (WOG AD onboarding) — In Progress, Fabian; blocked on #26

---

## Planning Run-of-Show

| Time | Segment | Owner |
|------|---------|-------|
| 5 min | Sprint 3 close — what landed in QA, what's carrying | Michelle |
| 5 min | Sprint 4 goal — agree wording | Michelle + Pow Hwee |
| 20 min | Walk each ticket — confirm estimates, assign owners | Pow Hwee facilitates |
| 10 min | Decisions: OTEP-110, OTEP-393, OTEP-127 owner, OTEP-386 modal vs page | Michelle |
| 5 min | Open items sweep (#26, #31, #35, #41, #45) | Michelle |
| 5 min | Capacity check — any leave, carry-over risk, buffer | Team |

**Total: ~50 min**

---

## What Michelle Needs to Prepare Tonight

- [x] WOG AD form (open item #26) — filled in by Pow Hwee 2026-06-10, approval clock running
- [x] OTEP-393 design asset — Amber confirmed screen done 2026-06-10. OTEP-386 modal vs page still open — raise at Planning.
- [ ] Confirm OTEP-358 spike output with Léo — is it written up?
- [ ] Decide your position on OTEP-110 (scope vs defer) before walking in

---

*Created: 2026-06-10 | Sprint 4 planning: Thu 11 Jun 2026*
