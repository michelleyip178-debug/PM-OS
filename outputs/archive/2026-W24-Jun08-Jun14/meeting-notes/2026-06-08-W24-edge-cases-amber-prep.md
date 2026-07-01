---
date: 2026-06-08
time: 16:00
type: Meeting Prep
meeting: Edge Cases & Error States
attendees: Michelle, Amber (confirm if Pow Hwee/Rathika also attending)
---

# Meeting Prep: Edge Cases & Error States with Amber
**Time:** 16:00 today

---

## Context

Two things on the table: (1) unresolved items from this morning's mid-sprint review that Amber owns, and (2) the Edge Cases proposal (E1–E12) for S4 grooming. Format below is state-by-state so Amber can map directly to her Figma frames.

---

## Edge case reference — full list

| Code | Page | State | Sprint | Status |
|------|------|-------|--------|--------|
| — | Listing | Default | S3 | ✅ Amber confirmed |
| — | Listing | Loading (skeleton) | S3 | ✅ Amber confirmed |
| E3 | Listing | Empty — filter applied (no results) | S5 | ✅ Amber confirmed — clarify: E3 ≠ E1/E2, separate states |
| ~~E1~~ | ~~Listing~~ | ~~Empty — no profile data (unfiltered + non-dismissible banner)~~ | Post-MVP | ❌ Descoped — tell Amber: not needed for MVP |
| ~~E2~~ | ~~Listing~~ | ~~Empty — partial profile data (unfiltered + dismissible banner)~~ | Post-MVP | ❌ Descoped — tell Amber: not needed for MVP |
| ~~E5~~ | ~~Listing~~ | ~~Empty — no opportunities at all~~ | Parked | ❌ Deprioritised |
| E4 | Listing | Error — API failure / timeout | S3 (close now) | ❓ Amber asking — confirm: yes, full page replacement + Retry CTA |
| — | Detail | Default | S3 | ✅ Amber confirmed |
| — | Detail | Applied — FormSG redirect | S3 | ✅ Amber confirmed — fallback state (missing `formsg_url`) S5 |
| — | Detail | Deadline approaching — "Closing soon" label | S3 | ✅ Amber confirmed — decide placement today (recommend: near Closing Date) |
| — | Detail | Ringfenced — Ineligible | S5 | ❓ Amber asking — walk in with position: show-but-disable (BO to confirm) |
| — | Detail | Ringfenced — Eligible | S5 | ❓ Amber asking — walk in with position: surface eligibility indicator |
| — | Detail | Closed (deep-link only — direct URL to past `closing_date`) | S4 | ⭕ Not started — tell Amber: reuses E12, no new frame needed |
| E11 | Detail | Load failure — API 5xx / timeout | S4 | 🔲 Not mentioned — still to design |
| E12 | Detail | No longer exists — 404 + 410 Gone | S4 | 🔲 Not mentioned — still to design |

---

## Pre-meeting checklist

- [ ] Paste LifeSG error page reference into OTEP-326
- [x] ~~Decide: "Closed" state~~ — decided: reuses E12, no separate design
- [ ] Decide: Ringfenced ineligible = hide or show-but-disable?
- [ ] Confirm attendees — if Pow Hwee is there, bring E12 question: does unpublished return `404` or a different status code?

---

## Listing page

### Default

The first thing an officer sees. If it loads fast and feels complete, they stay and explore.

**Behaviour:**
- Returns all opportunities where `closing_date > today`, sorted by Posting Date descending
- 3-column grid, 15 cards per page, paginated

**Rule:** no filters pre-applied, no personalisation. Every officer sees the same feed at launch.

### Loading

The officer clicked in. The page is working. They just can't see it yet.

**Behaviour:**
- Skeleton state replaces cards while API call is in flight
- Nav stays mounted throughout

**Rule:** never show a blank page. Skeleton over spinner — it sets expectations on layout.

### Empty — filter applied (E3) — *S5*

The officer narrowed their search and got nothing. They need to know why — and how to undo it.

**Behaviour:**
- Trigger: officer applies filter(s); API returns empty array (not an error)
- Show: "No opportunities found" + subtext + "Clear filters" CTA
- "Clear filters" resets all active filters and re-triggers the API call
- Search bar and filter bar stay active

**Rule:** this is not an error state. The feed is working. The filter is the cause — make that obvious.

**Decision:** ✅ None — design can proceed.

### ~~Empty — incomplete profile (E1/E2)~~ — DESCOPED from MVP

Personalisation is out of scope for MVP. Every officer sees the same unfiltered listing regardless of profile completeness. Showing a "complete your profile" banner when profile data doesn't affect the listing is a trust problem.

**Decision:** ✅ Kill E1/E2 for MVP. No banner, no variants. Parked post-MVP: [OTEP-POSTMVP-personalised-listing.md](../../PM-skills-ALL-1/03-stories/jira-sync/Backlog/OTEP-POSTMVP-personalised-listing.md)

<mark>**Tell Amber:** E1/E2 removed from MVP scope. Two fewer frames to design.</mark> 👈 Amber

### Error (E4) — *S3, close now*

The listing fails. The officer sees nothing. If there's no clear recovery path, they leave.

**Behaviour:**
- Trigger: API returns 4xx, 5xx, or times out
- Replace full content zone: "Something went wrong. We couldn't load opportunities at this time."
- Single "Retry" CTA — re-triggers the API call without full page reload
- Nav and search bar stay mounted

**Rule:** one message, one action. No partial load state — fetch is all-or-nothing.

**Decision:** ❓ Confirm Amber's Figma frame matches this pattern — full replacement + Retry. Lock today.

<mark>**Confirm with Amber:** full content zone replacement with Retry CTA — does her frame match?</mark> 👈 Amber

---

## Detail page

### Default

The officer picked an opportunity. Now they're deciding whether to apply. Every field that's missing is a reason to hesitate.

**Behaviour:**
- Returns full payload: Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop", Commitment type
- Dates formatted "DD Month YYYY"
- Missing optional fields: section hides entirely — no empty label shown
- "Back to opportunities" preserves filter + pagination state via URL params

**Rule:** hide missing fields, never show empty labels. Partial information is fine; placeholder text is not.

### Applied (OTEP-319)

The officer clicked Apply. They're ready. Don't make them hunt for the form.

**Behaviour:**
- Redirects to FormSG in a new tab
- No OTEP-side state change on the detail page
- If `formsg_url` missing: show "Application form unavailable — contact the posting agency" in place of Apply button *(fallback — S5)*
- If FormSG is down: officer sees FormSG's own error; OTEP has no handling needed

**Rule:** OTEP's job ends at the redirect. FormSG owns everything after the click.

### Deadline approaching (OTEP-284)

The window is closing. The officer needs to feel the urgency without being alarmed.

**Behaviour:**
- Trigger: `closing_date` within 7 days of today
- "Closing soon" label on listing card and detail page
- Opportunity remains active and apply-able — no behaviour change

**Rule:** urgency signal only. Don't change the apply flow or disable anything.

**Decision:** ❓ Placement of "Closing soon" on detail page — next to Type, or near Closing Date field? Recommend: near Closing Date (date-related context).

<mark>**Confirm with Amber:** where does "Closing soon" sit on the detail page?</mark> 👈 Amber

### Ringfenced — Ineligible (OTEP-127) — *S5, gated on WOG AD + POCDEX*

The opportunity exists but it's not for this officer. They need an explanation — not a broken experience.

**Behaviour:**
- Trigger: officer's POCDEX profile does not match the ringfence criteria
- Options: (a) hide from listing entirely, or (b) show in listing, block Apply with explanation on detail page

**Rule:** don't silently disable. If the officer can see the opportunity, they deserve to know why they can't apply.

**Decision:** ❌ Not yet made — Michelle to walk in with a position. See [BO decision doc](2026-06-08-W24-bo-edge-cases-decisions.md).

<mark>**Decision needed:** hide or show-but-disable? Amber cannot design this until resolved.</mark> 👈 Amber

### Ringfenced — Eligible (OTEP-127) — *S5, gated on WOG AD + POCDEX*

The opportunity is specifically open to this officer. That's a signal worth surfacing — it increases confidence to apply.

**Behaviour:**
- Trigger: officer's POCDEX profile matches the ringfence criteria
- Option: surface "this opportunity is available to you" indicator, or show normal detail page silently

**Rule:** a positive eligibility signal reduces hesitation. But only show it if it's reliably accurate — a false positive is worse than silence.

**Decision:** ❌ Not yet made — yes or no on the eligibility indicator. See [BO decision doc](2026-06-08-W24-bo-edge-cases-decisions.md).

<mark>**Decision needed:** show eligibility indicator or stay silent?</mark> 👈 Amber

### Closed (direct link only) — *S4, reuses E12*

The listing never shows closed opportunities. The only way here is a stale bookmark or shared link.

**Behaviour:**
- Trigger: direct URL to an opportunity where `closing_date` has passed
- Backend returns `410 Gone` — falls through to E12 "This opportunity is no longer available"
- No new frame needed — one design covers 404 and 410

**Rule:** closed = gone. Reuse E12. Don't design a separate state for a scenario that's nearly unreachable in normal flow.

**Decision:** ✅ Confirmed — E12 covers this. Tell Amber: no new frame needed.

<mark>**Tell Amber:** Closed reuses E12. No separate design needed.</mark>

### Detail page load failure (E11) — *S4*

The officer clicked through. The detail page failed. They need a way out — and a way to try again.

**Behaviour:**
- Trigger: API returns 5xx or times out
- Full page error: "Something went wrong. We couldn't load this opportunity."
- Two CTAs: "Back to opportunities" (listing) + "Retry" (re-triggers detail fetch)

**Rule:** always give two exits — back and retry. Must be visually distinct from E12 (error ≠ gone).

**Decision:** 🔲 No Amber input yet — to design in S4.

### Listing no longer exists (E12) — *S4*

The opportunity is gone. There's nothing to retry. Get the officer back to the listing.

**Behaviour:**
- Trigger: API returns `404` or `410 Gone`
- Covers: deleted, unpublished, and closed opportunities via direct link
- Full page: "This opportunity is no longer available."
- Single CTA: "Browse all opportunities" — routes to listing
- No Retry CTA

**Rule:** no retry when the resource is gone. One exit only — back to the listing.

**Decision:** 🔲 Confirm with Pow Hwee: does unpublished return `404` or a different status code? May add a third state if not.

<mark>**Pow Hwee to confirm:** unpublished status code — `404` or different?</mark>

---

## OTEP-88: C@G badge (carry-over from mid-sprint review)

<mark>**AC2 badge spec** — LifeSG/C@G brand guideline or design freedom? Need a visual treatment from Amber before Thu planning.</mark> 👈 Amber

<mark>**Graceful degradation UI** — if a required C@G field is missing, what does the card look like? Amber to spec.</mark> 👈 Amber

---

## OTEP-317: Clear filters (carry-over from mid-sprint review)

<mark>**Trigger condition** — "Clear all" visible only when filters active, or always visible but disabled?</mark> 👈 Amber

<mark>**Page-reset behaviour** — if user clears on page 3, snap back to page 1 or stay?</mark> 👈 Amber

<mark>**"Clear all" placement** — inline with filter chips, below, or in filter bar?</mark> 👈 Amber

---

## OTEP-326: Error state — listing (carry-over from mid-sprint review)

Missing Figma link still unresolved. Paste LifeSG error page reference into the ticket before this meeting.

---

## Sprint proposal for edge case design

Amber has a full S4 plate already (OTEP-88 badge, OTEP-87 C@G detail, OTEP-110 login error, OTEP-317 clear filters). Edge cases are split to avoid overloading her.

| Sprint | Edge cases | Notes |
|--------|-----------|-------|
| **S3 (close by Fri 12 Jun)** | E4 / OTEP-326 (listing error) | Carry-over — lock spec today if Amber has the frames. Zero new design work. |
| **S4 (14–28 Jun)** | E11 (detail load failure), E12 (404/410 — no longer exists), Closed (reuses E12) | E11 + E12 are simple full-page states, one pattern each. Closed needs no new design — 410 falls through to E12. |
| **S5 (29 Jun – 10 Jul)** | E3 (empty filter), Applied fallback (missing `formsg_url`), Ringfenced Ineligible, Ringfenced Eligible | E3 needs filters (OTEP-86) stable first. Applied fallback pairs with OTEP-319. Ringfencing gated on WOG AD + POCDEX (#26, #31). |
| **Post-MVP** | E1/E2 (personalised listing) | No personalisation engine in MVP. |

<mark>**Walk Amber through this split — get her confirmation that S3 carry-overs (E4/OTEP-326) can close this sprint, and that S4 is just E11+E12.**</mark> 👈 Amber

---

## Decisions you're bringing in (don't reopen these)

- **E5 (No Opportunities Available) is deprioritised** — parked, BO to confirm pilot scenario.
- **E1/E2 descoped from MVP** — personalisation not in MVP scope (OTEP-87 Out of Scope). Parked post-MVP.
- **"Closed" state collapses into E12** — 410 Gone falls through to E12 "no longer available." No separate design.
- **E1/E12 open questions go to Pow Hwee** — if Pow Hwee isn't in the room, Slack him today with a Thu deadline.

---

## Exit criteria

1. AC2 badge spec for OTEP-88 confirmed (or date committed)
2. OTEP-317 trigger condition + placement locked
3. ~~"Incomplete profile" definition aligned~~ — E1/E2 descoped, no design needed for MVP
4. ~~"Closed" state decision~~ — decided: 410 Gone reuses E12, no separate design
5. Ringfencing approach decided (ineligible + eligible)
6. "Deadline approaching" on detail page confirmed
7. Sprint split for edge cases confirmed with Amber (S3 close E4/326, S4 E11+E12, S5 E3+ringfencing)

---

---

## Meeting outcomes — 2026-06-08 16:00

- **Error states (listing + detail):** will use LifeSG standard error pages for 404, 502, 503. 403 pending confirmation.
- **Closed state:** detail page + direct link only. Shows "This opportunity is no longer available." Confirmed reuses E12. No new frame needed.
- **Sprint:** error state screens (E11, E12, Closed) to be ready for S5.
- **Ringfencing:** Michelle to confirm with BOs before S5 starts. Amber cannot design until policy is set.
- **Flow walkthrough:** Amber to lock in a date end this week or early next week to run through the full flow with Michelle.

---

*Prep generated: 2026-06-08*
*Source: OTEP_EdgeCases_Proposal.pdf + 2026-06-08-mid-sprint-review.md + Amber's message 2026-06-08*
*BO decisions needed: [2026-06-08-W24-bo-edge-cases-decisions.md](2026-06-08-W24-bo-edge-cases-decisions.md) — ringfencing policy + empty listing scenario, needed before S5 planning (Thu 26 Jun)*
