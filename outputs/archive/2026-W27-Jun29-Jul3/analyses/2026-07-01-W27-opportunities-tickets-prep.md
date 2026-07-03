# Opportunities Tickets — Prep for Creation

**Date:** 2026-07-01 (W27)

**Source:** Monday's Sprint 4 Retro + Demo (29 Jun) + today's SteerCo prep debrief (1 Jul)

**Status:** Draft — nothing created in Jira yet. Review before running `/create-tickets`.

---

## Context

Nine opportunities-related action items were raised across the two demos. As of today, none of the Monday demo's due-today items (UI inconsistency tickets, search standardisation tickets) had actually been actioned.

**Update — full sprint/backlog cross-check (2026-07-01):** searched the entire OTEP project (not just Sprint 5) for keyword matches against all 6 draft tickets. Three of the six have real, confirmed overlaps with existing backlog items. Findings below, ticket-by-ticket.

---

## Ticket 1

**[Frontend] Fix Opportunities page spacing/layout regression (shared layout dependency)**

```
## Context
Sprint 4 Retro (29 Jun) — shared layout changes from another team caused unintended spacing/layout regressions on Opportunities/Jobs pages. No owner named as of 29 Jun; still unresolved as of 1 Jul.

## Objective
Restore correct spacing/layout on Opportunities and Jobs pages following the shared layout change, and confirm whether "ministry logos on opportunity cards" (raised separately 1 Jul) is the same underlying defect.

## Acceptance Criteria
- [ ] Identify the specific shared layout change(s) causing the regression
- [ ] Confirm with Thomas whether the ministry-logo display issue is the same root cause or a separate defect
- [ ] Restore correct spacing/layout on all affected Opportunities/Jobs views
- [ ] No regression re-introduced by future shared layout changes (flag ownership gap below)

## Technical Notes
Root cause: another (unnamed) team's shared layout changes affect OTEP pages with no clear ownership or governance boundary. This is a recurring risk, not a one-off — recommend raising shared layout governance at the next cross-team sync (see Open Question, Sprint 4 retro).

## Dependencies
- None blocking — can start immediately
- Related: ministry logo display issue (confirm same/different before splitting into two tickets)

## Priority: P1
## Component: Frontend / Opportunities
```

**⚠️ Backlog check result: PARTIAL overlap, not a clean duplicate.** Found **OTEP-497** ("Standardise typography and spacing on opportunities detail page — Sprint3 demo comment fix"), Backlog, unassigned. Its ACs are specifically about heading/font-size/line-spacing consistency on the *detail* page — a design-consistency issue from Sprint 3 feedback. That's a **different root cause** than Monday's regression, which is a code-level layout break caused by *another team's* shared layout changes landing in Sprint 4/5. Recommend: don't merge into OTEP-497, but do link the two as related, and check with Thomas whether OTEP-497 has already been fixed incidentally by whatever caused the newer regression (worth a quick visual check before writing new ACs).

**Also confirmed: OTEP-283** ("Opportunity Detail - Add Ministry icons to detail page") is the ministry-logo ticket already in the backlog — see Ticket 6 area below, this is not a new ticket to create, just link to OTEP-283 directly.

---

## Ticket 2

**[Frontend] Investigate and fix missing C@G icon on opportunity cards**

```
## Context
Sprint 4 Retro (29 Jun) — missing C@G (Careers@Gov) icon flagged, due 30 Jun, not yet actioned.

## Objective
Restore the C@G badge/icon on Careers@Gov-sourced opportunity cards per OTEP-88's acceptance criteria (C@G badge visible without hover).

## Acceptance Criteria
- [ ] Identify why the C@G icon is missing/not rendering
- [ ] Restore icon display on all C@G-sourced cards
- [ ] Confirm fix doesn't regress the C@G banner/apply-label work (see Ticket 3)

## Dependencies
- Related to OTEP-88 (C@G opportunities in listing page) — check if this is a sub-issue of that ticket rather than standalone

## Priority: P1
## Component: Frontend / Opportunities
```

**⚠️ Backlog check result: CONFIRMED overlap.** OTEP-88's own ACs already include: *"C@G badge on card — each C@G card displays a Careers@Gov badge, visible without hover or click. Badge design per Amber spec."* The missing-icon issue is almost certainly a bug against OTEP-88's existing scope, not new work. **Recommend: don't create a new ticket — file this as a bug/comment on OTEP-88 (currently In Progress, owner Léo) instead.**

---

## Ticket 3

**[Frontend] Fix C@G banner and apply-label behaviour**

```
## Context
Sprint 4 Retro (29 Jun) — C@G banner and apply-label behaviour flagged as in-progress/needing fix, owner Thomas.

## Objective
Correct the C@G banner and apply-button labeling so it accurately reflects C@G-sourced opportunities (as distinct from OTG).

## Acceptance Criteria
- [ ] Banner displays correctly for C@G-sourced opportunities
- [ ] Apply-label text is accurate for C@G opportunities (differs from OTG per OTEP-87's "apply directly on C@G platform" flow)
- [ ] No regression to OTG opportunity display

## Dependencies
- Related: OTEP-87 (C@G opportunity detail page)

## Priority: P0
## Component: Frontend / Opportunities
```

**Backlog check result: no confirmed duplicate found.** Keyword searches ("banner", "apply label", "apply-label") surfaced only tangential matches (course pages, filter APIs) — nothing that names a C@G banner or apply-label bug directly. This one looks like genuinely new/uncaptured work — safe to create as-is, though worth a quick check with Thomas since he owns the related OTEP-87/88 work and may already be tracking this informally.

---

## Ticket 4

**[Product/Design] Define search UX behavior model (trigger, suggestions, clear-search, fuzzy match)**

```
## Context
Sprint 4 Retro (29 Jun) — search UX decisions (trigger model, suggestions, clear-search behaviour, fuzzy match) remain undecided; unclear if this is a PM or design decision. Same root cause later logged as hub tracker item #51 (search AC ownership gap — Thomas/Amber/Rathika all touching search with no one owning final sign-off).

## Objective
Assign a single owner for final search acceptance criteria and align on the UX behavior model before further search implementation work proceeds.

## Acceptance Criteria
- [ ] Name one owner for final search AC sign-off (currently split across Thomas/backend, Amber/Figma behavior doc, Rathika/UI review)
- [ ] Define trigger model (on-type vs. on-submit)
- [ ] Define suggestions behavior (if any)
- [ ] Define clear-search behavior
- [ ] Define fuzzy-match tolerance
- [ ] Document decisions and link to OTEP-405 (Keyword Search)

## Dependencies
- Blocks: further iteration on OTEP-405 (keyword search) without rework risk
- Related: hub tracker open-items #51

## Priority: P1
## Component: Product / Design
```

**Backlog check result: no duplicate ticket — this is a decision-alignment gap, not missing engineering work.** OTEP-405 (Keyword Search, In Progress, Thomas) exists and is being built, but no ticket anywhere defines the UX behavior model itself. Confirms this should stay as a product/design alignment task, not a dev ticket — correctly scoped as-is.

---

## Ticket 5

**[Backend/Frontend] Extend opportunity search to competency-based filters**

```
## Context
SteerCo prep debrief (1 Jul) — opportunity search currently limited to title/agency matching. Competency-based filtering raised as a gap, distinct from the search UX behavior work in Ticket 4.

## Objective
Add competency as a filterable/searchable dimension on the opportunity listing, separate from the existing keyword search behavior fixes.

## Acceptance Criteria
- [ ] Officers can filter opportunities by competency (in addition to existing title/agency match)
- [ ] Confirm interaction with existing type/function filters (OTEP-86, OTEP-289, OTEP-437)
- [ ] Scope explicitly separated from Ticket 4 (UX behavior fixes) — this is new filter scope, not a bug fix

## Dependencies
- Depends on: competency data availability (ties to open-items #18/#41, SSOT governance — competency-matching tickets OTEP-336/570 are blocked on this same dependency)
- Related: OTEP-405 (keyword search), OTEP-437 (filter by job family)

## Priority: P2 (new scope, not a defect — sequence behind Tickets 1-4)
## Component: Backend / Frontend / Opportunities
```

**⚠️ Backlog check result: STRONG overlap — recommend not creating this ticket.** Found **OTEP-336** ("Show competency match signal on Gig/STIP listing cards") with an AC that reads almost exactly like this request: *"Competency match count renders on Gig/STIP cards... Given an officer views the opportunity listing, When their competency profile is successfully retrieved, Then each Gig and STIP card shows a match count."* Also found **OTEP-570** ("View matched competencies on Gig/STIP detail page") covering the same idea at the detail-page level. Both are already in the backlog, both already gated on the same Core competency endpoint dependency this draft ticket names. **Recommend: don't create Ticket 5 — it's already covered by OTEP-336/570. If the SteerCo debrief's ask was specifically about *search/filter* rather than a *card-level match signal*, confirm that distinction with Thomas before writing anything new.**

---

## Ticket 6

**[Backend/Frontend] Implement exclusion logic for restricted/ring-fenced opportunity types**

```
## Context
SteerCo prep debrief (1 Jul) — restricted/ring-fenced opportunities need exclusion logic so ineligible officers don't see them. This directly depends on the still-unresolved BO sign-off (open-items #43: hide vs. show-but-disable for ineligible officers).

## Objective
Implement the exclusion logic per the BO's eventual decision on hide vs. show-but-disable.

## Acceptance Criteria
- [ ] BLOCKED until BO sign-off (#43) resolves hide-vs-show-but-disable question
- [ ] Once resolved: ineligible officers do not see restricted opportunities (or see them per the show-but-disable spec)
- [ ] Confirm against existing OTEP-390/408/409 ACs (ringfencing detail/listing states) — these tickets already have fully-specified ACs pending the same BO decision; check whether this is genuinely separate scope or the same work restated

## Dependencies
- BLOCKED BY: open-items #43 (BO sign-off, already past its "before S5 grooming" due date)
- Likely duplicate/overlap with OTEP-390/408/409 — confirm with Thomas/Amber before treating as new ticket

## Priority: Cannot start — blocked
## Component: Backend / Frontend / Opportunities
```

**⚠️ Backlog check result: CONFIRMED duplicate.** OTEP-408 ("[BE] Listing API — apply ringfencing eligibility filter") already has these exact ACs: "Listing API filters by officer's POCDEX data resolved at login; Ineligible opportunities excluded from response; Eligible ringfenced Internal Jobs pinned to top; POCDEX unavailable → silent fallback to unfiltered listing." OTEP-409 ("[FE] Listing — reflect ringfenced and pinned results") covers the frontend half. OTEP-390 covers the detail-page states. All three are fully-specified, already in Backlog, already blocked on the same open-items #43 BO sign-off this draft ticket names. **Recommend: don't create Ticket 6 — it's a restatement of OTEP-390/408/409, not new scope.**

---

## Not converted to a ticket

**Opportunity-to-officer competency matching (maturity gap)** — flagged in the SteerCo debrief risk table as: ingestion and display work exists, but officer-to-opportunity competency *matching* — the core value proposition — isn't built yet. This is a larger, unscoped gap, not a discrete actionable ticket. **Confirmed via backlog check: OTEP-336 and OTEP-570 already exist and directly address this (match-count signal on cards, matched-competencies on detail page), both blocked on the same competency SSOT dependency (open-items #18/#41).** No new ticket needed — the gap is tracked, just blocked upstream. Recommend a scoping conversation only if the SteerCo debrief's language implies something beyond what OTEP-336/570 already cover (e.g., true search/filter by competency, not just a display signal).

---

## Final recommendation after full backlog cross-check

| Ticket | Verdict | Action |
|---|---|---|
| 1 — Spacing/layout regression | Partial overlap with OTEP-497 (different root cause) | Create, but link to OTEP-497 as related; check if already incidentally fixed |
| 2 — Missing C@G icon | **Confirmed duplicate of OTEP-88's existing AC** | **Do not create — file as bug/comment on OTEP-88** |
| 3 — C@G banner/apply-label | No duplicate found | Create as-is; confirm informally with Thomas first |
| 4 — Search UX behavior model | No duplicate — correctly scoped as decision gap | Create as-is |
| 5 — Competency-based search filter | **Confirmed duplicate of OTEP-336/OTEP-570** | **Do not create — confirm with Thomas if genuinely distinct scope, otherwise skip** |
| 6 — Ringfencing exclusion logic | **Confirmed duplicate of OTEP-390/408/409** | **Do not create — these tickets already exist with matching ACs, already blocked on #43** |

**Net result: create 3 tickets (1, 3, 4), skip 3 (2, 5, 6) as confirmed or near-confirmed duplicates.** This cuts the original 6-ticket draft down meaningfully — worth flagging that half of what looked like new work from the two demos was actually already tracked, just not visible from the meeting notes alone.

---

*Sources: [2026-06-29-W27-s4-retro-and-demo.md](../meeting-notes/2026-06-29-W27-s4-retro-and-demo.md), [2026-07-01-W27-steerco-prep-debrief.md](../meeting-notes/2026-07-01-W27-steerco-prep-debrief.md), live Jira cross-check against OTEP-88, OTEP-87, OTEP-405, OTEP-390/408/409, OTEP-336/570, open-items #43/#51.*
