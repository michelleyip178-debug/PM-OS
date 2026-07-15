# User Journey Map: MVP Officer Discovery Journey ("See All Opportunities")

**Persona:** Government officer seeking development opportunities (STIPs, Gigs, Internal Jobs) — no validated persona research exists yet for MVP specifically; R1's personas (Intentional Mover, Passive Watcher) are themselves flagged unvalidated. Treat emotions/thoughts below as PM-inferred hypotheses from the PRD's own stated pain points, not confirmed via interviews.

**Goal:** Find a relevant opportunity across fragmented sources (OTG, Careers@Gov) in one place, and get to the external application without confusion about which listings are current or valid.

**Duration:** Single session, minutes (browse to apply-click), not multi-day. Does not include the apply-to-outcome timeline, that's outside MVP scope entirely.

**Data sources:** [R1 PRD](../prds/2026-07-07-W28-careercompass-r1-prd.md) (background section on MVP failure points), [opportunities-listing.md](../../context-library/prds/opportunities-listing.md), [otep-mvp-release.md](../../../PM-skills-ALL-1/02-prd/otep-mvp-release.md), live Sprint 6 pull (2026-07-15). No interview or analytics data exists yet for this specific journey, this map is PRD-derived, not research-validated. Flagged inline where this matters.

---

## Journey Overview

Login (WOG AD) → Listing page → Filter/Search → Card scan → Detail page → Apply click → **Exit OTEP** (FormSG redirect, C@G deep-link, or excluded entirely if SJR)

MVP stops at the apply click. There is no in-platform status tracking, no "what happened after I applied" phase, that gap is explicitly R1's job to close (see R1 PRD Background, "the status black hole").

---

## Phase 1: Login (WOG AD Authentication)

**Duration:** Seconds, if working | **Goal:** Get into the platform at all

| Element | Details |
|---------|---------|
| **Touchpoints** | WOG AD / Azure Entra AD login screen, custom OTEP login page |
| **Actions** | Officer navigates to OTEP, is redirected to WOG AD SSO, authenticates, lands back on OTEP |
| **Thoughts** | "Is this the government's real login page?" / "Why do I need to log in again if I was just on another gov system?" |
| **Emotions** | 😐 Neutral, if it works. 😤 Frustrated, if session handling is inconsistent (see Pains) |
| **Pains** | 🔴 **No live WOG AD test environment exists yet** — mock solution in progress (OTEP-444, Sprint 6, Léo). This is the single gate on the entire journey; if it doesn't work, nothing downstream matters. 🟡 Session-expiry mid-flow doesn't yet reliably return the officer to their original page, an edge case flagged in the MVP planning doc but not yet resolved as of this sprint. |
| **Opportunities** | 💡 Confirm WOG AD mock-to-live transition path before Sprint 8 feature freeze (21 Aug), this is a go/no-go gate for the whole MVP, not a nice-to-have. 💡 Fix session-expiry redirect to preserve the officer's place in the journey (currently drops to homepage). |
| **Metrics** | No login funnel metrics exist yet. Recommend instrumenting before launch, this is the true top of funnel. |

**This phase gates everything downstream. Per GOALS.md: "no auth, no MVP."**

---

## Phase 2: Listing Page (Discovery)

**Duration:** Seconds to a couple minutes of scanning | **Goal:** See what's available in one place, without checking multiple systems

| Element | Details |
|---------|---------|
| **Touchpoints** | Opportunity listing hub — 3-column grid, 15 per page, paginated |
| **Actions** | Officer scans cards, scrolls, paginates |
| **Thoughts** | "Is this actually everything, or just some of it?" / "Are these listings still open?" — this maps directly to the PRD's own stated problem: "confusion on validity of job postings" from fragmentation across FormSG, Careers@Gov, and OTG today |
| **Emotions** | 🙂 Relief, if this genuinely replaces checking 2-3 separate systems (the PRD's stated value prop). 😕 Uncertain, if data feels incomplete or stale |
| **Pains** | 🟡 Officer has no way to know if this listing is comprehensive versus just OTG-sourced, unless C@G integration is fully visible and clearly labeled. 🟢 No saved/bookmark mechanism exists (explicitly deferred to R1) — an officer who wants to compare a few opportunities has to hold them in working memory or re-search. |
| **Opportunities** | 💡 Empty/error/partial-load states are already built (Done), good, this directly protects against the "confusion on validity" problem when data is incomplete. 💡 Consider a visible data-freshness indicator ("updated daily") to build the trust that MVP is meant to establish, since OTG sync is daily, not real-time. |
| **Metrics** | Per the opportunities-listing PRD's own instrumentation plan: `oppr_list_view` should be tracked. No baseline exists yet, this is the funnel's true entry point and needs a number before launch. |

---

## Phase 3: Filter and Search

**Duration:** Seconds | **Goal:** Narrow a broad list down to what's actually relevant

| Element | Details |
|---------|---------|
| **Touchpoints** | Filter by type (STIP/Gig/Job), sort by posted/closing date, keyword search bar |
| **Actions** | Officer applies a type filter, or types a keyword, or sorts by closing date to see what's urgent |
| **Thoughts** | "Can I search for what I actually want, or do I have to browse everything?" |
| **Emotions** | 🙂 Satisfied, if filter/sort work as expected. 😤 Frustrated, if search returns nothing or feels incomplete (keyword search is still In Progress this sprint, not yet shipped) |
| **Pains** | 🟡 **Keyword search (OTEP-405) is still In Progress in Sprint 6** — if this isn't done by feature freeze, officers are limited to type-filter and manual scanning only, a meaningfully weaker discovery experience than "search." 🟢 Agency, grade, and commitment filters are explicitly deferred to R1 — an officer trying to narrow by "opportunities in my agency" or "part-time only" cannot do that at MVP. |
| **Opportunities** | 💡 If keyword search slips past Sprint 8, communicate this gap proactively rather than let officers discover the limitation themselves, it changes what "discovery" means for this launch. |
| **Metrics** | PRD instrumentation calls for `search_performed`, `search_zero_results`, `filter_applied`. `search_zero_results` is explicitly flagged in the PRD as a signal to "inform R1 filter design", worth watching from day one, not adding later. |

---

## Phase 4: Card Scan and Detail Page

**Duration:** Seconds per card, longer if reading a detail page closely | **Goal:** Decide which opportunities are worth a closer look, then get full information

| Element | Details |
|---------|---------|
| **Touchpoints** | Opportunity cards (agency icon, closing-soon label, competency tags), full detail page (Ministry icons, competency tags, apply CTA) |
| **Actions** | Officer scans cards for agency/type/urgency signals, clicks into ones that look relevant, reads the detail page |
| **Thoughts** | "Does this actually match what I'm looking for?" / "Am I even eligible for this?" |
| **Emotions** | 🙂 Confident, when card and detail information is clear and complete. 😕 Uncertain, when competency tags are shown without any match indication (see Pain below) |
| **Pains** | 🟡 **No competency match score at MVP** — competency tags display as "what you'll develop," not a calculated match percentage. This was a deliberate MVP scope cut (deferred to R1) to avoid building a taxonomy + scoring algorithm before launch, but it does mean an officer has to self-assess fit rather than get a signal from the platform. 🟢 Ringfenced eligibility states are still In Progress this sprint (OTEP-390), an officer viewing a ringfenced opportunity they're not eligible for may not yet see a clear "not eligible" state. |
| **Opportunities** | 💡 The PRD's own scope note frames the competency-tags-without-scoring approach as intentional risk acceptance, worth confirming this doesn't undercut launch value perception, flagged as a named Viability risk in the opportunities-listing PRD ("may limit officer value perception at launch"). |
| **Metrics** | `oppr_detail_view`, click-through rate from listing to detail. No baseline yet. |

---

## Phase 5: Apply (Exit Point — Fragments by Source)

**Duration:** Seconds to click through; the actual application happens outside OTEP | **Goal:** Apply to the opportunity without extra friction

This is the phase where the journey stops being unified. Unlike discovery (one experience across sources), applying splits into three separate paths depending on where the opportunity originated, and this fragmentation is itself the core problem MVP does not fully solve, it only solves it for discovery, not application.

| Path | What happens | Status |
|---|---|---|
| **OTG-sourced (STIP, Gig, Internal Job)** | Redirect to FormSG, webhook receipt captured for internal metrics only (not shown to officer) | FormSG basic redirect Done; full webhook version (OTEP-130) has an unresolved dependency (FormSG pre-fill via URL params, open item #14) |
| **Careers@Gov-sourced** | Deep-link handoff, officer leaves OTEP entirely onto C@G's own flow | C@G detail view in QA (OTEP-87); deep-link apply CTA scoped for Sprint 5 per the opportunities-listing plan |
| **SJR opportunities** | Not available at all | **Excluded from MVP entirely**, deferred to R1 alongside OTG redirect apply (OTEP-132) |

| Element | Details |
|---------|---------|
| **Touchpoints** | Apply CTA on detail page, FormSG form (external), C@G site (external) |
| **Actions** | Officer clicks Apply, is redirected off-platform, fills out an external form |
| **Thoughts** | "Wait, why am I leaving the page I was just on?" — this is the PRD's own named failure point, called "the redirect" |
| **Emotions** | 😐 Neutral to mildly 😤 jarred, per the PRD's own framing: "a jarring handoff." This is a known, accepted MVP limitation, not a bug, R1 exists specifically to fix it. |
| **Pains** | 🔴 **The redirect breaks momentum** (PRD's own words) — officer leaves the trusted, unified OTEP experience right at the point of highest intent. 🔴 **The blank form** — no pre-fill exists at MVP; officer retypes information OTEP may already have. 🔴 **FormSG pre-fill via URL params is still unresolved** (open item #14 with Pow Hwee), this directly blocks whether OTEP-130's "full apply" scope can close as designed, worth checking current status before assuming this ships. |
| **Opportunities** | 💡 These three pains are explicitly what R1 is scoped to fix (native apply, pre-fill, status tracking), so the honest framing for MVP is: discovery is solved, application is not, yet. Set expectations accordingly in any MVP launch communication. |
| **Metrics** | `click_to_formsg`, `formsg_webhook_received`, `click_to_CG` per the PRD's instrumentation plan. Apply completion rate (~15-20% today per R1 PRD's baseline) is the number MVP inherits and R1 is meant to improve to 40%+. |

---

## Phase 6: After Apply — The Gap MVP Doesn't Close

**Duration:** Indefinite | **Goal:** Know what happened to the application

| Element | Details |
|---------|---------|
| **Touchpoints** | None. This is the point. |
| **Actions** | Officer waits, possibly emails or follows up manually outside any system |
| **Thoughts** | "Did anyone see this? Am I supposed to hear back?" |
| **Emotions** | 😟 Uncertain to 😤 frustrated, the longer silence continues |
| **Pains** | 🔴 **"The status black hole"** (PRD's own term) — application disappears into a FormSG inbox or C@G's own system with zero visibility from OTEP. This is a known, named MVP gap, not an oversight. |
| **Opportunities** | 💡 Nothing to build here at MVP, this phase is explicitly out of scope and belongs entirely to R1 (Epic C, status tracking). The opportunity is in communication: MVP should not imply status tracking exists if it's asked about. |
| **Metrics** | None exist because nothing is tracked. This absence is itself the reason the North Star metric (development actions completed) isn't measurable until R1 ships. |

---

## Summary

### Biggest Pain Points

1. 🔴 **The redirect + blank form + status black hole** (Phase 5-6) — these are the PRD's own three named failure points. MVP deliberately does not solve them; R1 exists specifically to close this loop. This isn't a launch risk so much as a scoping fact that needs to be communicated honestly.
2. 🔴 **WOG AD has no live test environment yet** (Phase 1) — this gates the entire journey and is still using a mock solution as of Sprint 6, worth explicit tracking against the Sprint 8 feature freeze deadline.
3. 🟡 **Keyword search is not yet shipped** (Phase 3) — if it slips, MVP discovery is meaningfully weaker (filter + scan only, not search), worth a go/no-go check before launch communications promise "search."
4. 🟡 **No competency match signal at MVP** (Phase 4) — an intentional scope cut, but flagged in the PRD's own risk table as a possible dampener on launch value perception.

### Top Opportunities

1. 💡 **Set explicit expectations that MVP solves discovery, not application** — the journey map makes clear these are two very different experiences (one unified, one fragmented three ways). Launch communications should say this plainly rather than let officers discover the gap themselves.
2. 💡 **Instrument the funnel from day one** — no baseline metrics exist yet for any phase (login, list view, search, detail view, apply click). Per the PRD's own guardrails, several of these (like `search_zero_results`) are meant to directly inform R1 design, so gaps in instrumentation now become gaps in R1 evidence later.
3. 💡 **Track WOG AD mock-to-live transition explicitly against Sprint 8 freeze** — this is the one dependency that can silently sink the entire journey if it slips quietly.

### Emotional Journey

```
😐 Neutral → 🙂 Relieved → 🙂 Satisfied → 😕 Uncertain → 😐 Jarred → 😟 Uncertain/Frustrated
[Login]      [Listing]     [Filter/Search] [Detail]      [Apply]     [After Apply]
```

The emotional arc peaks at Listing/Filter (the actual "one place to see it all" value prop landing) and steadily declines from Detail page onward as the officer approaches and then crosses the point where OTEP hands them off to external, disconnected systems. This mirrors the PRD's own framing precisely: MVP is confident about being "See All Opportunities" and openly incomplete about "Click-Apply-Track," which is R1's job.

### Next Steps

- [ ] Confirm WOG AD mock-to-live path and target date against Sprint 8 feature freeze (21 Aug) — Owner: Pow Hwee/Fabian
- [ ] Get a go/no-go read on keyword search (OTEP-405) shipping before feature freeze — Owner: Thomas
- [ ] Resolve FormSG pre-fill via URL params (open item #14) — this blocks OTEP-130's full scope — Owner: Pow Hwee
- [ ] Instrument the discovery funnel (`oppr_list_view`, `search_performed`, `click_to_formsg`, `click_to_CG`) before launch, not after — Owner: Michelle/Engineering
- [ ] Draft MVP launch communication that explicitly frames "discovery solved, application not yet" rather than let the gap surface as a surprise — Owner: Michelle
- [ ] Once officers are live, run `/user-interview` or `/activation-analysis` against real usage data to replace this PRD-derived map with an evidence-based one

---

*Generated: 2026-07-15. Sources: R1 PRD, opportunities-listing.md, otep-mvp-release.md, live Sprint 6 pull.*
*Caveat: no user research or analytics exist yet for this journey — thoughts/emotions are PM-inferred from the PRD's own stated problem framing, not confirmed via interviews. Revisit once MVP is live and real usage data exists.*
*Next: revisit after MVP launch with real funnel data; feeds directly into R1's Epic B/C design (this journey's Phase 5-6 gaps are exactly what R1 is built to close).*
