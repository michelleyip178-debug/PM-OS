---
date: 2026-06-25
sprint: OTEP-Pathfinder Sprint 5
sprint-dates: 29 Jun – 13 Jul 2026
stories: 8
prepared-by: Michelle
---

# Sprint 5 Planning Brief — 25 June 2026

---

## Proposed Sprint Goal

**Option A — Conservative (recommended):**
"By end of sprint, officers browsing the opportunity listing can see which roles they're eligible for and filter by job category — so they spend less time on opportunities that aren't relevant to them."

Anchored on ringfencing end-to-end (OTEP-390, 408, 409) and job category filter (OTEP-437). Deliverable even if OTEP-336 slips.

**Option B — Ambitious:**
"By end of sprint, officers have a meaningfully smarter opportunity listing — ringfenced results reflect their eligibility, job category filters are live, and matched competencies appear on the detail page."

Adds OTEP-336 (competency match signal on listing cards) and OTEP-570 (matched competencies on detail page). Endpoint specs confirmed (#41) — this is now viable.

**Recommendation: lead with Option A.** Option B is now a realistic stretch given endpoint specs are confirmed.

---

## Candidate Stories

| Story | Title | Pts | Readiness | Risk |
|---|---|---|---|---|
| OTEP-390 | Ringfenced opportunity detail page states | 5 | ACs written ✅ | 🔴 Gated: WOG AD (#26) + POCDEX (#31) + BO sign-off (#43). Amber design not final. Could be 8 if design lands late. |
| OTEP-408 | [BE] Listing API — apply ringfencing eligibility filter | 8 | ACs written ✅ | 🔴 Gated: WOG AD (#26) + POCDEX (#31) + OTEP-127 spike accepted |
| OTEP-409 | [FE] Listing — reflect ringfenced and pinned results | 3 | ACs written ✅ | 🟡 Blocked on OTEP-408 completing first |
| OTEP-437 | [FE/BE] Filter by job function/family | 5 | ACs written ✅ | 🟢 Clean — no major external dependencies |
| OTEP-336 | Show competency match signal on Gig/STIP listing cards | 3 | ACs written ✅ | 🟢 Endpoint specs confirmed (#41). Shares BE officer profile work with OTEP-570 — may drop to 2 if 570 ships first. |
| OTEP-570 | View matched competencies on Gig/STIP detail page | 5 | ACs written ✅ | 🟢 Endpoint specs confirmed (#41). Owns shared BE officer profile endpoint if picked up first. |
| OTEP-283 | Add Ministry icons to detail page | 1 | Minimal ACs ⚠️ | 🟡 Icon source not confirmed (Michelle's comment on ticket) |
| OTEP-304 | Logged-in officer remains authenticated | 3 | ACs in Jira ✅ | 🟡 Depends on WOG AD being live (#26). Build starts when gate clears. |
| | **Total** | **33** | | Ringfencing bundle (390+408+409) = 16 pts behind open gates — have a swap plan if they don't clear |

---

## Gate Status

| Gate | Status | Blocks |
|---|---|---|
| WOG AD approval (#26) | 🟡 Form submitted 10 Jun, 2–4 week window → could land ~24 Jun to 8 Jul | OTEP-408, OTEP-390, OTEP-304 |
| POCDEX read replica (#31) | 🔴 Core team (Pei Ern / Kingsley) haven't answered Pow Hwee's 2 questions | OTEP-408, OTEP-390 |
| OTEP-127 spike output accepted | 🟡 Michelle's spike In Progress in S4 — must be reviewed before 408 starts | OTEP-408 |
| BO ringfencing sign-off (#43) | 🔴 Open — hide vs show-ineligible, message copy, MDDI blocklist treatment | OTEP-390, OTEP-408 |
| Competency endpoint specs (#41) | ✅ Confirmed — specs finalised | OTEP-336, OTEP-570 |

**If WOG AD and POCDEX haven't cleared by 29 Jun:** OTEP-408, 409, 390, 304 stay in Backlog. Sprint de-scopes to OTEP-437 (filter) + OTEP-283 (icons) + any S4 QA carry-in. Name this scenario explicitly at planning so the team isn't surprised.

---

## Capacity Flags

- **S4 QA carry-in:** 8 stories were in QA at last sync (OTEP-86, 268, 85, 305, 128, 129, 324, 438). Any not Done by 26 Jun carry into S5 — confirm count at S4 close before planning.
- **No Singapore public holidays in S5 window** (29 Jun – 13 Jul) — clean sprint.
- **Thomas (FE):** OTEP-409, OTEP-437, OTEP-390, OTEP-336, OTEP-570 all have FE components — five FE stories is heavy. OTEP-336 and OTEP-570 share the same BE officer profile endpoint so FE work can be sequenced; flag capacity in the room.
- **OTEP-437 BE side:** Léo's OTG→C@G Indus translation map (Story 4 / OTEP-ingestion-v3-rule-updates) needs to land this sprint for the filter to work across both sources. Pair with OTEP-437 FE.
- **OTEP-336 + OTEP-570 BE:** Officer profile endpoint (#41 confirmed) is built once and shared — whichever story starts first owns the endpoint build.

---

## Michelle's Opening Statement

"Sprint 4 closes Friday with the core listing experience in shape — search, filter, sort, and C@G listings all in play. Sprint 5 is about making the listing feel relevant. Right now officers see every opportunity regardless of whether they can apply — this sprint we fix that. Eligible roles surface at the top, ineligible ones are filtered out, and the job category filter lets officers narrow down to what they actually work in.

The three ringfencing stories (OTEP-408, 409, 390) ship together — they're not useful in isolation, so we treat them as a bundle. OTEP-437 (job category filter) is independent and can go in parallel. One thing to confirm before we commit: ringfencing depends on WOG AD approval and POCDEX being live. I'll state gate status upfront and we'll plan to the right scope from there."

---

## What NOT to Do in This Session

- Don't assume WOG AD and POCDEX have cleared — confirm gate status before committing the ringfencing bundle
- Don't assign stories to engineers — let them self-select based on their own S4 close state
- Flag Thomas's FE load early — five FE stories is a lot; let him size and self-select which to take
- Make sure OTEP-336 and OTEP-570 are picked up together or sequenced explicitly so the shared BE endpoint doesn't get built twice
- Don't let OTEP-283 (ministry icons) stall the room — it's 1 point; if icon source is unresolved, park it and move on

---

*Updated: 2026-06-25 — 8 stories (OTEP-390, 408, 409, 437, 336, 570, 304, 283). OTEP-336 split into listing (336) + detail (570); competency endpoint specs confirmed (#41); Option B now viable stretch.*
*Prior version (earlier today) focused on C@G detail + ingestion hardening — superseded by live board.*
