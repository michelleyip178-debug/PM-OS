# Sprint Planning Briefing — 2026-07-09 → Sprint 6 (Pathfinder)

> Sprint 6 dates: 13–26 Jul 2026. Prep run 2026-07-07 (Tue, W28), ahead of Thursday planning (9 Jul).
> **Superseded v1 (same date):** an earlier draft of this brief used Sprint 5's leftover Backlog as the candidate pool. A same-day `/jira-sync Pathfinder Sprint 6` pull found live Jira already has 10 tickets staged directly in Sprint 6 (34620) — this version is built from that live set instead. The Sprint 5 leftovers are folded in below as a secondary pool, since the live Sprint 6 set on its own doesn't cleanly support a sprint goal.

---

### The core problem to raise at planning

Live Jira has already staged Sprint 6 with the auth epic (5 tickets), one apply-flow story, three ungroomed discovery spikes, and one small FE fix — not the filtering/eligibility continuation work from Sprint 5. This doesn't match the provisional plan in `sprint-allocation.md` (which expected CSC SSO + C@G deep-links + admin), and two of the auth tickets (OTEP-594, OTEP-331) aren't build-ready. Flag this mismatch to the team directly — it's a planning input, not something to quietly work around.

### Proposed Sprint Goal

**Option A (conservative, auth-focused):** By end of Sprint 6, an officer using WOG AD can log in, get routed to the right page based on their pilot/POCDEX status, and see a clear message if they don't have access — closing out the core login and access-routing flow that's been carried since Sprint 3/4.

**Option B (ambitious, blended):** All of Option A, plus the job-family filter and ringfencing detail-page work carried over from Sprint 5 (OTEP-437, 408, 409, 390) if the team has capacity beyond the auth tickets.

Recommend Option A as the one to open with. The live-Jira set is genuinely auth-shaped, and OTEP-71/111/110 have workable AC. **Update 2026-07-08: OTEP-71 and OTEP-110's ownership overlap on invalid credentials is resolved** — OTEP-110 owns the error display, OTEP renders it (not WOG AD). Both ACs corrected directly in Jira. The auth-core opening scope stays as OTEP-71 + OTEP-111 + OTEP-110 (plus OTEP-613 as filler), three real tickets. Don't commit to the full epic — OTEP-594 and OTEP-331 have real gaps (see below) and pulling them in as-is risks a sprint that can't close cleanly.

**Update 2026-07-08 — Option B is more viable than originally framed.** The "stretch only if Thomas/Léo have room" caveat assumed Thomas was the sole FE dev and Léo was BE-only, making FE work (auth core + Sprint 5 leftovers) a single-threaded bottleneck. That's no longer true — both are full-stack, so FE work can genuinely run in parallel across two people. This doesn't mean auto-commit to Option B — grooming still needs to confirm OTEP-437/408/409/390's individual readiness gaps (see Sprint 5 leftover pool below) — but the capacity argument for holding it back as a stretch-only add is weaker than it was Tuesday. Worth actively considering Option B as the opening proposal, not just a maybe-later add, if grooming clears the remaining design/dependency questions on OTEP-390 and OTEP-437.

### Candidate Stories — live Sprint 6 set (Jira board 12541, sprint 34620)

| Story ID | Title | Readiness | Risk |
|---|---|---|---|
| OTEP-71 | Login Authentication Successful (WOG AD) | ✅ **Ready, updated 2026-07-08** | Both open questions resolved and AC corrected directly in Jira: single active session enforced (new device login invalidates prior session); agency de-onboarding shows the same "not onboarded" message. Still depends on WOG AD onboarding (#26) — Léo's Keycloak client config had no ETA as of 2026-06-30, confirm status before committing |
| OTEP-111 | Officers with no access (unauthorised page) | ✅ Ready — clear AC, fixed copy given | Gates OTEP-594's routing logic — build this before/alongside 594 |
| OTEP-110 | Invalid-credential error display | ✅ **Re-scoped 2026-07-08, ready** | Owns invalid-credential error display — OTEP renders this state, not WOG AD. AC updated directly in Jira alongside OTEP-71. See [test scenarios doc](2026-07-08-W28-sprint6-test-scenarios.md) (Scenario 11) for full detail. |
| OTEP-594 | Officer routed to correct page after auth | 🟡 **Re-scoped 2026-07-08, AC ready — screen not built** | All three blocking decisions (#7/#8/#9) resolved and AC rewritten directly in Jira: "no POCDEX profile yet" routes to its own system-error page (not OTEP-111); copy is now generic ("try again shortly," no hard-coded day count); no auto-logging, officer-clicked "Report issue" CTA instead. **The system-error screen itself doesn't exist yet** — kept as one ticket (not split), but this is real, sizeable build work, not just a routing-logic ticket. Still depends on OTEP-111 + OTEP-350 (WOG AD onboarding). Estimate ~3 points against demonstrated team velocity (comparable single-state builds like OTEP-129/131/305 landed at 2; this has slightly more routing-logic surface). With Thomas and Léo both full-stack (corrected 2026-07-08), this no longer needs to wait on one engineer's FE bandwidth specifically — either can pick it up |
| OTEP-331 | WOG AD - SSO integration with CSC | 🔴 Not ready | Zero description in Jira. Per open item #30: technical design is confirmed but approval/governance docs are still TBC and DLE's own integration testing isn't targeted until August — too early for a Sprint 6 build commitment regardless of local readiness |
| OTEP-130 | Apply for STIP/Gig via FormSG link | 🟡 **Scope cut proposed 2026-07-08, needs Pow Hwee confirmation** | Michelle's working direction: cut webhook, submission tracking, and both email notifications — keep only the redirect notice/tab/label. Not yet pushed to Jira; raised for Pow Hwee at internal sprint planning, not this session. If confirmed, remaining scope may be identical to what Sprint 3 (US-18/OTEP-319) already shipped — check for duplicate/closure. Tracked as [open-items #57](../../../PM-skills-ALL-1/00-hub/open-items.md). |
| OTEP-613 | [FE] Default logo when agency logo missing | ✅ Ready — trivial, no blockers | Good small filler alongside the auth work |
| OTEP-614 | [SPIKE] Advanced filters/search (competency, job function) | 🔴 Not sprint-ready | No description, no scope, no timebox in Jira — needs shaping at grooming before it can go in a sprint as-is |
| OTEP-615 | [SPIKE] Suggested search after 3 characters | 🔴 Not sprint-ready | Same — no description or timebox defined |
| OTEP-425 | [SPIKE] Bookmark opportunities | ⚫ **Removed from Sprint 6, 2026-07-08** | Pulled from Sprint 6 (confirmed — no longer shows a sprint assignment in live Jira). Consistent with the scope-conflict flag raised in this brief: bookmarking is explicitly out of MVP/R1 scope, so this spike didn't belong evaluated as sprint delivery work. No further action needed for Sprint 6 planning. |

### Candidate Stories — Sprint 5 leftovers (secondary pool, if auth core doesn't fill the sprint)

| Story ID | Title | Readiness | Risk |
|---|---|---|---|
| OTEP-437 | Filter by job family (unified C@G/OTG taxonomy) | ✅ Ready — full AC + mapping table | Depends on OTEP-289 spike output (unmapped taxonomy fallback) — confirm spike closed before committing |
| OTEP-408 / OTEP-409 | Ringfencing eligibility filter (BE/FE) | ✅ Ready — clear AC | Build 408 before/alongside 409. With Thomas and Léo both full-stack (corrected 2026-07-08), 408 (BE) and 409 (FE) can genuinely run in parallel across two people rather than queue behind one FE dev |
| OTEP-390 | Ringfenced detail page states | 🟡 Mostly ready | 3 open design questions still listed (indicator treatment, EDM param, alt-opportunity ranking) — confirm with Amber first. Design gap is the real blocker here, not FE capacity — resolve with Amber regardless of the eased capacity picture |
| OTEP-663 / OTEP-668 | Bugs — competencies listing, search | ✅ Ready | Good fill-in work regardless of what else lands |
| OTEP-283 / OTEP-404 | Small FE fixes (ministry icons, mobile page size) | ✅ Ready | Trivial, good filler |
| OTEP-336 / OTEP-570 | Competency match signals | 🔴 Not ready | Blocked on Core competency endpoint (#41) and POCDEX data (#31) |
| OTEP-393 | Custom Keycloak login theme | 🔴 Not ready | Hard blocker — Amber's design asset not yet provided |

### Capacity Flags

- No Singapore public holidays fall inside 13–26 Jul — no calendar-driven capacity loss.
- Hao Eng's confirmed leave (7–10 Jul) sits entirely in Sprint 5, not Sprint 6 — she should be back at full capacity.
- **Correction 2026-07-08: Thomas is no longer the sole FE engineer.** Both Thomas and Léo are full-stack, so FE work can be split across two people rather than bottlenecked on one. This eases the capacity risk flagged elsewhere in this brief (e.g. OTEP-594's screen build, Sprint 5 leftover FE work OTEP-409/390) — still worth confirming actual split/self-selection at planning, but this is no longer a single-point constraint.
- Carry-over risk: Sprint 5 closes 12 Jul with items still in QA/To Do as of the last pull (2026-07-06) — expect some slip into Sprint 6, eating into net new capacity.
- None of the 10 live Sprint 6 tickets have an assignee or story points yet — all ungroomed. Grooming needs to happen before or during planning, not after.

### Michelle's Opening Statement

"Jira already has Sprint 6 staged with the WOG AD login and access-routing work, not the filtering and eligibility work we expected from the provisional plan — so that's what I want to open with today. I'm proposing we commit to the login flow — OTEP-71, OTEP-111, and OTEP-110 — since all three now have workable AC. OTEP-110 specifically owns invalid-credential error display; we clarified that split with OTEP-71 today. Hold off on the routing story and the CSC SSO ticket until we've resolved a couple of open scope questions and confirmed the WOG AD onboarding dependency is actually clear. Now that Thomas and Léo are both full-stack, FE work isn't bottlenecked on one person anymore — so I'd actually like to look seriously at pulling in the job-family filter and ringfencing detail page from Sprint 5 as part of the opening commitment, not just a maybe-later stretch, assuming grooming clears OTEP-390's open design questions with Amber first."

### What NOT to do in this session

- Don't assign stories to engineers — let them self-select
- Don't commit to scope the team hasn't agreed to
- Don't commit OTEP-331 as-is — still has unresolved scope/dependency gaps. OTEP-594's decisions are resolved but the screen isn't built yet — size it with that explicitly in scope (see sizing note below), don't treat the AC being clean as "ready to ship"
- ~~Don't let OTEP-425 (bookmark spike) get treated as sprint delivery work~~ — **moot, 2026-07-08:** OTEP-425 removed from Sprint 6 entirely
- Don't let OTEP-390's three open design questions go unresolved into the sprint if it's pulled in as a stretch item
