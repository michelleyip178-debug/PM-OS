---
date: 2026-06-10
type: sprint-planning-prep
sprint: Sprint 4 (14–28 Jun 2026)
planning-session: Thu 11 Jun, 14:00–16:00
---

# Sprint 4 Planning Prep

**Planning session:** Thu 11 Jun, 14:00–16:00

**Sprint 4 dates:** 14–28 Jun 2026

**Context:** Sprint 3 ends Fri 12 Jun. Sprint goal (filters + apply) stayed Backlog — OTEP-380 QA, OTEP-381 In Progress. S4 picks up where S3 left off and adds C@G as the headline new capability.

---

## Proposed Sprint 4 Goal

> By end of Sprint 4, an officer can discover both OTG and Careers@Gov opportunities in one listing, tell them apart at a glance, and reach the right apply path for each — FormSG redirect for OTG, a direct deep-link to C@G.

**Fallback goal** (if OTEP-319 carries as active work from S3, not a done floor):

> By end of Sprint 4, OTG apply via FormSG works end-to-end, and C@G opportunities appear in the listing with a C@G badge and a working apply path via deep-link to Careers@Gov.

Same story set either way. The fallback just names OTEP-319 as active work rather than a baseline.

**What's explicitly out of the goal:**

- Auth / WOG AD swap-in — best-case stretch only; gate is WOG AD onboarding form approved in time
- OTEP-130 FormSG Phase 2 webhook — only if OTEP-319 lands clean and capacity allows
- Competency section on C@G detail — blocked by Imelda's squad (open item #18)
- Filter-by-C@G toggle — Pow Hwee flagged this as needed; create a new S4 ticket, don't block the goal on it

---

## Story Set

### Core C@G stories (new capability)

| Story | Title | Status | Assignee | Sub-tasks |
|-------|-------|--------|----------|-----------|
| OTEP-88 | C@G opportunities in the listing | Backlog | — | OTEP-374 (BE, unassigned), OTEP-375 (FE, Thomas) |
| OTEP-87 | View C@G opportunity detail | Backlog | — | OTEP-377 (BE, unassigned), OTEP-378 (FE, unassigned), OTEP-379 (tests, unassigned) |
| OTEP-89 | View C@G job — deep-link apply | Backlog | — | None |

### Carry-forwards from S3

| Story | Title | Status | Assignee | Notes |
|-------|-------|--------|----------|-------|
| OTEP-319 | Apply via FormSG — basic redirect | Backlog | — | S3 sprint goal item; not started |
| OTEP-86 | Filter opportunities by type | Backlog (parent) | — | OTEP-380 (BE) in QA, OTEP-381 (FE) In Progress — almost done |
| OTEP-348 | OTG ingestion — scheduler & observability | Backlog | — | Companion to OTEP-192 (In Progress, Léo) |

### Stretch (best-case, not the goal)

| Story | Title | Gate |
|-------|-------|------|
| OTEP-71 | Login authentication (WOG AD) | WOG AD onboarding form approved + no errors |
| ~~OTEP-130~~ | ~~FormSG Phase 2 webhook~~ | ~~Removed from S4 — moved to Backlog for BO alignment (2026-06-10)~~ |

---

## Story-by-Story Notes

### OTEP-88 — C@G in the listing

**Grooming-ready.** Fallback behaviour confirmed (2026-06-10): render with available fields, no card break. AC4 is closed.

**Key dependency:** C@G ingestion pipeline. OTEP-192 (OTG ingestion) is In Progress with Léo — C@G is a separate API-based pipeline. Confirm with Pow Hwee: is C@G ingest live for S4, or does OTEP-88 start with mock data?

**Size:** Medium. OTEP-374 (BE field exposure) ~2–3 days. OTEP-375 (FE card badge) ~1–2 days Thomas.

### OTEP-87 — C@G detail page

**Jira cleanup needed before Planning:** Description still has FormSG/Internal Jobs language from an earlier draft. Quick rewrite before 14:00 tomorrow — strip all FormSG references, confirm scope is C@G payload display + Apply CTA only.

**Competency section:** Out of scope for S4. The AC says so. Don't let it get pulled back in — it's blocked by open item #18 (Imelda's squad).

**OTEP-87 / OTEP-89 overlap:** Nearly identical ACs. Recommend merging OTEP-89 into OTEP-87 as a sub-task at Planning. The click behaviour (open in new tab, log event) is ~1 day of work — not a standalone story.

**Size:** Medium-large. OTEP-377 (BE payload fetch) ~2–3 days. OTEP-378 (FE detail UI) ~2–3 days Thomas. OTEP-379 (tests) ~1 day Rathika.

### OTEP-89 — C@G deep-link apply

**Recommend merging into OTEP-87 at Planning.** ACs are duplicative. As a sub-task: Thomas opens the CTA in a new tab and fires a `click_to_cag` event. Done.

### OTEP-319 — Apply via FormSG redirect

**Grooming-ready.** Most ACs-complete story in the set. One open question from Pow Hwee (28 May): should OTEP append tracking params to the FormSG URL?

**Tracking params:** Needed, but blocked — pending PostHog procurement and implementation. AC should note the intent (append opportunity ID as a tracking param) with a clear "implement when PostHog is live" gate. For now, no params appended; analytics event fired in OTEP only.

**Size:** Small-medium. No new UI components — click handler + fallback state on the CTA. FE (Thomas) ~1–2 days.

### OTEP-348 — OTG ingestion scheduler & observability

**Grooming-ready with two TBCs:** run cadence and alert threshold. Bring defaults to Planning: daily run at 02:00, alert after 3 consecutive failures.

**Note:** Rathika added a test cases doc (2026-06-05 comment). Check it covers the observability ACs before Planning.

**Dependency:** OTEP-192 should be close to done or done by S3 end. If it carries, slot OTEP-348 second in the S4 queue behind OTEP-192 close-out.

**Size:** Small. Scheduler config + logging layer. ~2–3 days Léo.

### OTEP-86 — Filter by opportunity type (carry-forward wrap-up)

Not a new build. OTEP-380 (BE) is in QA; OTEP-381 (FE) is In Progress. Thomas finishes 381, QA closes it, story closes. ~1–2 days Thomas at S4 start.

Don't size this as a fresh story.

---

## Decisions to make at Planning

| Decision | Recommendation |
|----------|---------------|
| OTEP-89 merge into OTEP-87? | Yes — make it a sub-task |
| Tracking params on FormSG redirect? | Intent confirmed — blocked on PostHog procurement; note in AC as a follow-up gate |
| OTEP-348 run cadence? | Daily 02:00 |
| OTEP-348 alert threshold? | 3 consecutive failures |
| C@G ingestion: live pipeline or mock data for S4? | Confirm with Pow Hwee |
| OTEP-88 missing-field fallback? | ✅ Confirmed — render with available fields, no card break |
| OTEP-127 + OTEP-130 in-or-out of S4 board? | Pull or label "backlog, not committed" — both uncontracted |
| Auth (OTEP-71) placement? | Stretch column — "ships if WOG AD approved by Week 1 of S4" |

---

## Suggested Planning run-of-show

1. **Open:** Sprint 3 close status — filters subtasks nearly done (380 QA, 381 In Progress), sprint goal missed but QA tail is strong. 14 items in QA. No drama.
2. **S4 goal:** Read it out. Get the room to react. If anyone wants to add auth, move it to the stretch column.
3. **Story sizing order:** OTEP-88 → OTEP-87+89 (merged) → OTEP-319 (carry, light touch) → OTEP-348 → OTEP-86 (carry, wrap-up).
4. **Stretch:** Add OTEP-71 to the board as stretch, explicitly gated on WOG AD form approval.
5. **Board cleanup:** Call OTEP-127 + OTEP-130 in-or-out before closing.

---

## Open items to watch at the Dependencies Sync (16:00 today)

Four asks for Imelda (open item #18/#30):

1. Integration method — API, file sync, or push?
2. Schema + field names for competency and reference data
3. Availability timeline — when can OTEP integrate?
4. C@G competency tag mapping — how do OTG/C@G competency tags map to her squad's competency bank?
5. CSC SSO ownership (#30) — who passes documents to CSC after WOG AD completes?

Output needed before S4 Planning: at minimum, whether the competency section of OTEP-87 stays out of S4 scope (expected yes) and whether a competency integration story belongs in S5.

---

*Generated: 2026-06-10. Next: run `/meeting-notes` after Thu Planning to capture goal, story sizing, and any scope changes.*
