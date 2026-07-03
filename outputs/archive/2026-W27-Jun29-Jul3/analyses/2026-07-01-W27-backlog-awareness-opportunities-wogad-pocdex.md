# Backlog Awareness — Opportunities, WOG AD, POCDEX

**Date:** 2026-07-01 (W27)

**Purpose:** Full live backlog for these three areas, cross-checked against what's actually been discussed in Monday's Sprint 4 Retro + Demo (29 Jun) and today's SteerCo prep debrief, CoachPal session, and standup. Not a prioritisation ask — just visibility into what exists but hasn't come up recently.

**Source:** Live Jira pull, project OTEP, all Backlog-status items (179 total across the project), filtered by keyword and manually checked against recent meeting notes.

---

## Opportunities (32 backlog items)

Already covered elsewhere (see [BO prioritisation brief](2026-07-01-W27-opportunities-bo-prioritisation-brief.md)): OTEP-283, 336, 390, 408, 409, 497.

**Not raised in any recent meeting — for awareness:**

| Ticket | What it is | Note |
|---|---|---|
| OTEP-69 / OTEP-575 | Epic 4 "Opportunities Unified Hub" + its Post-MVP successor epic | Umbrella epics everything else in this list rolls into |
| OTEP-130 / OTEP-132 | Apply flows — STIP/Gig via FormSG; SJR/internal job via OTG redirect | Foundational apply-flow tickets |
| OTEP-197 / OTEP-422 / OTEP-425 | Bookmarking — spike (OTEP-422, already assigned to Michelle), story, and "view bookmarked" list | Spike not yet actioned |
| OTEP-281 / OTEP-282 | Loading states + title truncation on the listing | Small UI polish, adjacent to but distinct from the spacing/layout regression discussed this week |
| OTEP-347 | Integrate CIE inference results into opportunity detail page (matches *officer* competency profile against opportunity requirements) | **Related but distinct** from the new CIE risk (item 10) logged in the BO brief — that one is about inferring the *job's* competencies from its JD text, not matching an officer's profile against known requirements |
| OTEP-355 | "Show job opportunities for next role" | Reads as a recommendation feature |
| OTEP-429 | WD DevOps — OTG opportunity data upload/processing | Currently the only ticket sitting in Sprint 6 |
| OTEP-436 | "Ingest Careers@Gov opportunities" | **⚠️ Likely stale duplicate of OTEP-88** — bare ticket, no ACs, probably predates OTEP-88's detailed spec. Recommend closing or merging rather than actioning separately. |
| OTEP-431 / OTEP-502 | PostHog tracking/analytics for opportunities engagement | Not discussed recently |
| OTEP-493 / OTEP-576 / OTEP-577 / OTEP-578 | "Explore New Roles" search, new filter categories, Google-style search result matching, Jobs/Secondments/Rotations ingestion | All read as post-MVP scope, likely intentionally deferred |

---

## WOG AD / Auth (10 backlog items)

| Ticket | What it is | Note |
|---|---|---|
| OTEP-80 | Parent epic "WOG AD Authentication Integration" | Everything else in this section nests under it |
| OTEP-71 / OTEP-110 | Basic login success/fail flows | Confirmed live 2026-07-02 — both still sit in Backlog, not superseded or closed. Full ACs already drafted for both in `auth.md`; not orphaned, just not yet scheduled. |
| OTEP-331 | "WOG AD - SSO integration with CSC" | This is the CSC SSO chain from open-items #30 — sitting in Backlog, not started |
| OTEP-373 | Tech debt: migrate Keycloak to its own repo | Infra housekeeping, not urgent |
| OTEP-594 | "Officer is routed to the correct page after WOG AD authentication" — covers post-login routing (authorised → profile page; not-in-pilot-agency → unauthorised page; etc.) | **Update 2026-07-02 — scope boundary now clarified, resolving most of the ambiguity below.** Rama flagged OTEP-111 and OTEP-594 as duplicates at Squad Sync; on review they're not, but the boundary needed sharpening: **OTEP-594 owns the routing decision** (which of 4 outcomes an officer lands on immediately post-auth), **OTEP-111 owns the unauthorised-page display only**. A new system-error scenario also surfaced (Pow Hwee/Imelda/Rama): pilot-agency officer with no POCDEX profile *yet* is a timing error, not access-denied — needs its own message + auto-logging, carved out of OTEP-111's generic page into a new OTEP-594 outcome. Full write-up in `PM-skills-ALL-1/03-stories/otep-stories/auth.md` (decisions #7–#11). **Still open:** OTEP-594 is immediately-post-login routing; #43 is mid-session routing to a specific opportunity for an already-authenticated officer — these remain genuinely distinct scenarios (confirmed, not just suspected), so no further confirmation needed with BO/Thomas on that specific overlap. |
| OTEP-393 / OTEP-530 | Keycloak login theme; Entra ID/HTTPS proxy config chores | OTEP-393 already flagged as deferred per decision log (until WOG AD is live); OTEP-530 is lower-priority infra |

---

## POCDEX (5 backlog items)

| Ticket | What it is | Note |
|---|---|---|
| OTEP-337 | Parent epic "POCDEX API Integration" | |
| OTEP-273 / OTEP-274 | Harmonise POCDEX API data/auth; integrate real read-replica setup | Foundational plumbing, unmentioned recently |
| OTEP-382 | Pull Job Family/Job Function/Job Grade from POCDEX (Kingsley Low) | Ties directly to the competency SSOT governance gap (open-items #18/#41) discussed repeatedly this week |
| OTEP-516 | Import DLE ID for POCDEX ID (JumpStart integration) | Not discussed recently |

---

## Two things worth a quick look before next grooming

1. **OTEP-436 likely duplicates OTEP-88** — bare ticket with no ACs, probably safe to close/merge rather than track as separate work. *(Unchanged as of 2026-07-02 — still worth closing/merging.)*
2. ~~OTEP-594 and the #43 ineligible-officer question cover related but distinct routing scenarios — confirm with BO/Thomas they're not meant to converge.~~ **Resolved 2026-07-02** — these are confirmed distinct (OTEP-594 = post-login landing, #43 = mid-session deep-link routing for an already-authenticated officer). No BO/Thomas confirmation needed on this specific point. The real open item is now #43 itself (hide vs. show-but-disable for the authenticated-ineligible case) — see updated BO prioritisation brief.

---

*Sources: live Jira pull 2026-07-01 (project OTEP, status=Backlog, 179 items across both pages), cross-checked against [2026-06-29-W27-s4-retro-and-demo.md](../meeting-notes/2026-06-29-W27-s4-retro-and-demo.md), [2026-07-01-W27-steerco-prep-debrief.md](../meeting-notes/2026-07-01-W27-steerco-prep-debrief.md), [2026-07-01-W27-coachpal-discussion.md](../meeting-notes/2026-07-01-W27-coachpal-discussion.md), [2026-07-01-W27-daily-standup.md](../meeting-notes/2026-07-01-W27-daily-standup.md), and [2026-07-01-W27-opportunities-bo-prioritisation-brief.md](2026-07-01-W27-opportunities-bo-prioritisation-brief.md). Re-verified live 2026-07-02 for OTEP-71/110/594/111 (all confirmed still Backlog, unassigned); OTEP-111/594 scope boundary resolved same day — see `PM-skills-ALL-1/03-stories/otep-stories/auth.md` decisions #7–#11.*
