## Grooming Close — 2026-07-22

**Note on process:** No grooming session/brief existed for today going in — `/grooming-close` normally evaluates stories discussed in a same-day session. Per Michelle's direction, this run evaluated 4 stories she named directly (OTEP-329, OTEP-680, OTEP-659, OTEP-485) — the 4 scored "outright Ready" in the `/groom-prep` scorecard run earlier today ([grooming-brief-2026-07-22.md](2026-07-22-grooming-brief.md)) — to get something on the shelf today rather than wait for a full session. The remaining 19 candidates from that scorecard still need a real grooming session.

### Stories confirmed Ready for Sprint (4)

| Story | Title | DoR gates confirmed | Jira label |
|-------|-------|---------------------|------------|
| OTEP-329 | chore: Keycloak Client Secret Externalization | All 6 ✅ (AC gate: 3 ACs present, mechanism-language acceptable for a non-user-facing infra chore) | ✅ Added |
| OTEP-680 | Check with OPS for observability needs | All 6 ✅ (investigation/spike — AC gate exempt by convention) | ✅ Added |
| OTEP-659 | Investigate smoke test for pipeline | All 6 ✅ (investigation/spike — AC gate exempt; scope is thin, title-only, worth firming up in standup) | ✅ Added |
| OTEP-485 | Run update deps in otep-service | All 6 ✅ (routine dependency chore, no AC/design/dependency gates apply) | ✅ Added |

### Stories not yet ready (19)

Full detail in [grooming-brief-2026-07-22.md](2026-07-22-grooming-brief.md). Summary:

| Story | Title | Blocker | Owner |
|-------|-------|---------|-------|
| OTEP-130 | Apply for STIP/Gig — PostHog Tracking | Open item #57: likely duplicate of Sprint 3's US-18/OTEP-319; no close-vs-keep call made yet. AC reads "TBC." | Michelle + Pow Hwee |
| OTEP-408 | [BE] Listing API — ringfencing filter | Near-ready — AC language mechanism-heavy, design status not noted | Unassigned |
| OTEP-409 | [FE] Listing — reflect ringfenced results | Blocked on OTEP-408 not yet Ready; sequence together | Unassigned |
| OTEP-336 | Competency match signal on cards | Near-ready — no design status noted | Unassigned |
| OTEP-570 | Matched competencies on detail page | Near-ready — shares foundation with OTEP-336, group in session | Unassigned |
| OTEP-403 | OTG data import hardening | Reads as an engineering design doc, not groomed stories — needs AC extraction / possible split into multiple tickets | Léo |
| OTEP-348 | OTG ingestion — scheduler & observability | Near-ready — confirm OTEP-192 status before committing | Unassigned |
| OTEP-502 | PostHog engagement tracking | No explicit AC section written yet; confirm OTEP-488 flags-disabled constraint still holds | Thomas |
| OTEP-569 | Events (sub-task of OTEP-502) | Same blocker as parent OTEP-502 | Unassigned |
| OTEP-393 | Custom OTEP login theme in Keycloak | Design asset not yet linked (explicitly required before dev starts) | Amber |
| OTEP-404 | Page size on tablet/mobile | Near-ready — thin AC, 1-line rewrite needed | Thomas |
| OTEP-679 | CSC ↔ CareerCompass connectivity | No description at all — needs full spec | Fanxu |
| OTEP-755 | Seed POCDEX ref agency code table | Near-ready — confirm not superseded by broader POCDEX data-quality thread (#33/#55) | Unassigned |
| OTEP-768 | CFT upload error message scoping (bug) | Near-ready — needs AC rewrite from problem description | Hao Eng |
| OTEP-680-adjacent items (OTEP-483, 681, 682, 684) | Technical tasks / pipeline items | No description on any — placeholder tickets, need real scope written | Various/unassigned |
| OTEP-662 | Login error after redeploy (bug) | Near-ready — needs AC once root cause confirmed | Thomas |

### Ready Shelf — 2026-07-22

**Depth:** 4 stories · points not tracked in this Jira instance (confirmed null across sampled Done issues per 2026-07-20 `/sprint-check`) · ~0.16 sprints of runway using story-count velocity

**Status:** 🔴 At risk (up from 0 stories / 0.0 sprints on 2026-07-20)

**Velocity basis:** Avg ~25.5 stories/sprint (Sprint 3: 23 Done, clean close; Sprint 4: 28 Done, clean close — Sprint 5 excluded, not a clean close)

### What to do next

4 stories is real progress off zero, but nowhere near enough to plan Sprint 7 from Monday. The two closest to filling the gap fast: **OTEP-336/OTEP-570** (competency-match pair, both near-ready, same session) and **OTEP-408/OTEP-409** (ringfencing pair, sequence matters but both close to DoR). A real grooming session — not another single-story pass — is now the binding constraint, not story quality; most of the 19 remaining candidates need 5-15 minutes each, not rework. Get that session on the calendar before Sprint 7 planning, not after.
