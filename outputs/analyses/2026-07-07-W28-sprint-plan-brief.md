# Sprint Planning Briefing — 2026-07-09 → Sprint 6 (Pathfinder)

> Sprint 6 dates: 13–26 Jul 2026. Prep run 2026-07-07 (Tue, W28), ahead of Thursday planning (9 Jul).
> **Superseded v1 (same date):** an earlier draft of this brief used Sprint 5's leftover Backlog as the candidate pool. A same-day `/jira-sync Pathfinder Sprint 6` pull found live Jira already has 10 tickets staged directly in Sprint 6 (34620) — this version is built from that live set instead. The Sprint 5 leftovers are folded in below as a secondary pool, since the live Sprint 6 set on its own doesn't cleanly support a sprint goal.

---

### The core problem to raise at planning

Live Jira has already staged Sprint 6 with the auth epic (5 tickets), one apply-flow story, three ungroomed discovery spikes, and one small FE fix — not the filtering/eligibility continuation work from Sprint 5. This doesn't match the provisional plan in `sprint-allocation.md` (which expected CSC SSO + C@G deep-links + admin), and two of the auth tickets (OTEP-594, OTEP-331) aren't build-ready. Flag this mismatch to the team directly — it's a planning input, not something to quietly work around.

### Proposed Sprint Goal

**Option A (conservative, auth-focused):** By end of Sprint 6, an officer using WOG AD can log in, get routed to the right page based on their pilot/POCDEX status, and see a clear message if they don't have access — closing out the core login and access-routing flow that's been carried since Sprint 3/4.

**Option B (ambitious, blended):** All of Option A, plus the job-family filter and ringfencing detail-page work carried over from Sprint 5 (OTEP-437, 408, 409, 390) if the team has capacity beyond the auth tickets.

Recommend Option A as the one to open with. The live-Jira set is genuinely auth-shaped, and OTEP-71/111/110 have workable AC. But don't commit to the full epic — OTEP-594 and OTEP-331 have real gaps (see below) and pulling them in as-is risks a sprint that can't close cleanly. Option B is a stretch add only if Thomas/Léo have room after the auth core.

### Candidate Stories — live Sprint 6 set (Jira board 12541, sprint 34620)

| Story ID | Title | Readiness | Risk |
|---|---|---|---|
| OTEP-71 | Login Authentication Successful (WOG AD) | 🟡 Mostly ready | AC solid but 2 open questions in the description itself (concurrent sessions across devices — allowed or not? agency de-onboarded after login — what happens next?). Also depends on WOG AD onboarding (#26) — Léo's Keycloak client config had no ETA as of 2026-06-30, confirm status before committing |
| OTEP-111 | Officers with no access (unauthorised page) | ✅ Ready — clear AC, fixed copy given | Gates OTEP-594's routing logic — build this before/alongside 594 |
| OTEP-110 | Login fail using WOG AD | ✅ Ready — but nearly a no-op | AC says failure is "handled at WOG AD" entirely; confirm there's actually FE work here (e.g. redirect handling) or whether this is just a documentation/closure ticket |
| OTEP-594 | Officer routed to correct page after auth | 🔴 Not ready | AC explicitly flagged `[NEEDS RE-SCOPE: decision #7/#8/#9]` in Jira; also rests on an unconfirmed assumption ("2-day POCDEX sync lag" — not verified with Rama/Pow Hwee) and depends on OTEP-111 + OTEP-350 (WOG AD onboarding). Don't commit until re-scope lands |
| OTEP-331 | WOG AD - SSO integration with CSC | 🔴 Not ready | Zero description in Jira. Per open item #30: technical design is confirmed but approval/governance docs are still TBC and DLE's own integration testing isn't targeted until August — too early for a Sprint 6 build commitment regardless of local readiness |
| OTEP-130 | Apply for STIP/Gig via FormSG link | 🟡 Needs a scope check first | Full AC, but basic FormSG redirect (US-18/OTEP-319) already shipped in Sprint 3 — this ticket's AC includes webhook confirmation + email notifications, which reads as new/incremental scope, not a duplicate. Confirm with Pow Hwee what's actually left to build here before grooming it as fresh work |
| OTEP-613 | [FE] Default logo when agency logo missing | ✅ Ready — trivial, no blockers | Good small filler alongside the auth work |
| OTEP-614 | [SPIKE] Advanced filters/search (competency, job function) | 🔴 Not sprint-ready | No description, no scope, no timebox in Jira — needs shaping at grooming before it can go in a sprint as-is |
| OTEP-615 | [SPIKE] Suggested search after 3 characters | 🔴 Not sprint-ready | Same — no description or timebox defined |
| OTEP-425 | [SPIKE] Bookmark opportunities | 🔴 Scope conflict, flag directly | No description/timebox, AND "Save for later" (bookmarking) is explicitly out of MVP/R1 scope in the guardrails. Confirm with Adrian whether this spike is meant to inform R1 planning only — if so it doesn't belong evaluated as sprint delivery work |

### Candidate Stories — Sprint 5 leftovers (secondary pool, if auth core doesn't fill the sprint)

| Story ID | Title | Readiness | Risk |
|---|---|---|---|
| OTEP-437 | Filter by job family (unified C@G/OTG taxonomy) | ✅ Ready — full AC + mapping table | Depends on OTEP-289 spike output (unmapped taxonomy fallback) — confirm spike closed before committing |
| OTEP-408 / OTEP-409 | Ringfencing eligibility filter (BE/FE) | ✅ Ready — clear AC | Build 408 before/alongside 409 |
| OTEP-390 | Ringfenced detail page states | 🟡 Mostly ready | 3 open design questions still listed (indicator treatment, EDM param, alt-opportunity ranking) — confirm with Amber first |
| OTEP-663 / OTEP-668 | Bugs — competencies listing, search | ✅ Ready | Good fill-in work regardless of what else lands |
| OTEP-283 / OTEP-404 | Small FE fixes (ministry icons, mobile page size) | ✅ Ready | Trivial, good filler |
| OTEP-336 / OTEP-570 | Competency match signals | 🔴 Not ready | Blocked on Core competency endpoint (#41) and POCDEX data (#31) |
| OTEP-393 | Custom Keycloak login theme | 🔴 Not ready | Hard blocker — Amber's design asset not yet provided |

### Capacity Flags

- No Singapore public holidays fall inside 13–26 Jul — no calendar-driven capacity loss.
- Hao Eng's confirmed leave (7–10 Jul) sits entirely in Sprint 5, not Sprint 6 — she should be back at full capacity.
- Thomas remains the sole FE engineer and already carries several open items — watch his load if both the auth core and any Sprint 5 leftover FE work (OTEP-409, 390) get pulled in together.
- Carry-over risk: Sprint 5 closes 12 Jul with items still in QA/To Do as of the last pull (2026-07-06) — expect some slip into Sprint 6, eating into net new capacity.
- None of the 10 live Sprint 6 tickets have an assignee or story points yet — all ungroomed. Grooming needs to happen before or during planning, not after.

### Michelle's Opening Statement

"Jira already has Sprint 6 staged with the WOG AD login and access-routing work, not the filtering and eligibility work we expected from the provisional plan — so that's what I want to open with today. I'm proposing we commit to the login flow (OTEP-71, 111, 110) since those have workable AC, but hold off on the routing story and the CSC SSO ticket until we've resolved a couple of open scope questions and confirmed the WOG AD onboarding dependency is actually clear. If we've got room after that, the job-family filter and ringfencing detail page carried from Sprint 5 are ready to pick up."

### What NOT to do in this session

- Don't assign stories to engineers — let them self-select
- Don't commit to scope the team hasn't agreed to
- Don't commit OTEP-594 or OTEP-331 as-is — both have unresolved scope/dependency gaps, not just readiness gaps
- Don't let OTEP-425 (bookmark spike) get treated as sprint delivery work without confirming with Adrian that it's R1-discovery-only, given bookmarking is explicitly out of MVP scope
- Don't let OTEP-390's three open design questions go unresolved into the sprint if it's pulled in as a stretch item
