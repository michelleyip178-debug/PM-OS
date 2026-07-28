---
date: 2026-07-27
week: 2026-W31
topic: How the Opportunities PRD should look based on live Jira (Epic 4)
status: draft — for PRD rewrite
---

# Opportunities PRD — Reconciled Against Live Jira (Epic 4, OTEP-69)

**What this is:** a direct comparison of what [prd-opportunities.md](../../../PM-skills-ALL-1/02-prd/prd-opportunities.md) currently says vs. what Epic 4 (OTEP-69) actually contains in Jira as of 2026-07-27 (52 tickets, live pull). The PRD's Section 8 story table only lists 18 tickets — 34 tickets under the epic aren't in the PRD at all.

**Bottom line:** the PRD is not wrong so much as **incomplete and stale in specific places** — a few referenced tickets don't exist or belong to a different epic, and a meaningful slice of Backlog scope (bookmarking, ingestion hardening, mobile layout) has never been written into the document.

---

## 2. Epic 4 scope the PRD never mentions (34 tickets)

Grouped by theme, in the same structure as the [feature backlog](2026-07-27-W31-opportunities-feature-backlog.md) from earlier this session.

### Listing — quality-of-life gaps — RESOLVED 2026-07-27: not MVP
| Ticket | Status | Summary |
|---|---|---|
| OTEP-281 | Backlog | Opportunity Listing — Implement data fetching loading states |
| OTEP-282 | Backlog | Opportunity Listing — Truncate long opportunity titles |
| OTEP-404 | Backlog | Handle different page size on tablet and mobile |

**Confirmed: not covered for MVP.** Add to the PRD's "Out of scope" section so it's explicit rather than silently missing. Carry into R1/later planning as appropriate.

### Bookmarking — R1 scope, confirmed 2026-07-27
| Ticket | Status | Summary |
|---|---|---|
| OTEP-197 | Backlog | View list of bookmarked opportunities |
| OTEP-425 | Backlog | [SPIKE] discovery - Bookmark opportunities |

**Resolved: Bookmarking is R1 scope, not MVP.** Not a gap to fill in the current PRD — it belongs in the R1 scope document instead. Note this explicitly in the MVP PRD's "Out of scope" section so a reader doesn't wonder whether it was missed, and carry OTEP-197/425 into R1 planning.

### Competency matching on Opportunities — RESOLVED 2026-07-27: MVP scope (reversed from earlier "not MVP" call)
| Ticket | Status | Summary |
|---|---|---|
| OTEP-336 | Backlog | Show competency match signal on Gig/STIP listing cards |
| OTEP-570 | Backlog | View matched competencies on Gig/STIP detail page |
| OTEP-349 | Done | [Spike] competency matching integration with OTEP-Core squad |
| OTEP-810 | Backlog | OTG Ingestion — Include Comp ID and match against the Comp ID |

**Confirmed: IS covered for MVP** (correction, 2026-07-27 — supersedes the earlier "not MVP" call in this same doc). Added as a proper scope-table row in the PRD (Section 8), not the Out-of-scope section. The PRD's OTEP-128 row was also corrected — it previously said competency match ratio is "deferred to R1," which no longer holds.

**Still open:** REQ-X2 (competency-to-opportunity matching, agency-code resolution) is the blocking dependency and remains unresolved — this now blocks actual MVP scope, not just a future-scope nice-to-have, so it should be re-prioritized accordingly. Separately, the RTM's REQ-20 ("Competency-match display on cards") still needs its status corrected — it currently says "✅ Done, no Jira ID," but the actual stories (OTEP-336, 570) are Backlog. Only the spike (OTEP-349) is done.

### C@G ingestion — RESOLVED 2026-07-27
**OTEP-436 deleted from Jira.** No separate C@G ingestion story exists or is needed — OTEP-88 (C@G opportunities in the listing page) covers the full scope. PRD's C@G section doesn't need an ingestion/display split; OTEP-88 stands alone as written.

### Search — advanced/future scope — RESOLVED 2026-07-27: not MVP
| Ticket | Status | Summary |
|---|---|---|
| OTEP-614 | Backlog | [SPIKE] discovery — Advanced filters / search options (competency-based) |
| OTEP-615 | Backlog | [SPIKE] Suggested search after keying in 3 characters |

**Confirmed: not covered for MVP.** Add a one-line "future scope, not MVP" note in the PRD so a reader doesn't wonder if search is finished once OTEP-405 ships. Neither spike has resolved into a story yet, consistent with this being later-stage scope.

### Ingestion hardening — operational risk not customer-facing, but real scope
| Ticket | Status | Summary |
|---|---|---|
| OTEP-192 | Done | OTG data ingestion |
| OTEP-223 | Done | Prepare data for OTG ingestion of Oppr types |
| OTEP-358 | Done | [Spike] Robust nil-date handling for OTG Excel import |
| OTEP-397 | Done | [spike] Discover OTG excel file upload — Flow and UI |
| OTEP-427 | Done | [spike] Tighten OTG ingestion logic |
| OTEP-348 | Backlog | OTG data ingestion — scheduler & observability |
| OTEP-403 | Backlog | OTG data import hardening |

**The base ingestion pipeline is built and done** — the PRD's "Current State" and "Dependencies" sections describe ingestion only in passing ("OTG / WG-managed opportunity lists (Excel input)"), which undersells how much dedicated work has gone into it. What's still open (scheduler/observability, import hardening) is operational risk, not a customer-facing gap — worth a short line in Section 11 (Dependencies) rather than the main scope table, but it shouldn't be invisible either, especially since the launch checklist has already flagged OTG UAT data quality as a live risk.

### Misc — one unclear item
| Ticket | Status | Summary |
|---|---|---|
| OTEP-386 | In Progress | Officer clicks on tooltip link to view a page/popup on the different [truncated] |
| OTEP-439 | In Progress | Design the page/popup [sub-task of OTEP-386] |

Summary is truncated in Jira and unclear from the title alone — worth pulling the full description before deciding whether this belongs in the PRD's scope table. Possibly the "what do job types mean" tooltip/explainer referenced in your UAT test cases (UAT-OPP-025) — if so, this resolves that open question from the feature backlog.

### QA/infra, correctly out of PRD scope
| Ticket | Status | Summary |
|---|---|---|
| OTEP-322 | Done | test: setup Playwright E2E Testing Framework |
| OTEP-391 | Done | Spike: Virus scanning capability on AWS GuardDuty vs CFT |
| OTEP-438 | QA | Placeholder UI for admin view |
| OTEP-768 | QA | Bug — cft_upload db table status to scope to cft related status |

These are infra/QA/tooling tickets, not product scope — correctly absent from the PRD. Listed here only for completeness so nothing looks silently dropped.

---

## 3. Tickets the PRD references that are NOT under Epic 4

Two "Opportunities-adjacent" tickets surfaced in a broader search but belong to different epics — worth knowing so they're not mistakenly folded into this PRD's scope:

- **OTEP-770** ("Ringfencing for JR7 and below") — belongs to **Epic 2: My Development Gap Analysis**, not Epic 4. It's about role *recommendation* eligibility, not the Opportunities listing's ringfencing (OTEP-390/408/409). Don't conflate these two ringfencing mechanisms in the PRD — they're different systems with the same word in the name.
- **OTEP-502** ("Track opportunity engagement events...") — belongs to **Epic: PostHog tracking** (OTEP-500), a cross-cutting instrumentation epic, not Epic 4 itself. Relevant to the PRD's Section 7 (Success Metrics) as the mechanism that will actually deliver the North Star/OKR 2 instrumentation, but it's not a Pathfinder-owned deliverable.

---

## 4. What the PRD's scope section should look like

Based on all of the above, here's the structure I'd recommend for a rewritten Section 8:

1. **Foundation** (as today) — listing, cards, pagination, empty/error states, sort. No changes needed to what's in scope.
2. **Filtering & Search** — reference OTEP-405 (search) and OTEP-437 (job-family filter). No changes needed to what's in scope.
3. **Detail Page** — cite OTEP-127 as the completed spike that defined the ringfencing contract, and OTEP-390/408/409 as the runtime build it fed into — both belong in the PRD, not just one.
4. **Careers@Gov** — OTEP-88 covers listing display; OTEP-87/89 cover detail/apply. No separate ingestion story (OTEP-436 deleted) — nothing further to reconcile here.
5. **Apply Flows** — as today, but resolve OTEP-131 vs. OTEP-128's SJR contradiction (already flagged in the feature backlog). OTEP-132 (SJR + Internal Job apply via OTG redirect) is confirmed R1 scope, unchanged — no re-scoping needed here.
6. **Competency Matching on Opportunities** (OTEP-336, 570) — added as a proper scope-table row, not Out-of-scope. Blocking dependency: REQ-X2 (agency-code resolution) is unresolved and now blocks real MVP scope.
7. **Out of scope (MVP)** — single consolidated list:
   - Bookmarking (OTEP-197/425) — confirmed R1
   - Listing quality-of-life polish (OTEP-281 loading states, OTEP-282 title truncation, OTEP-404 mobile/tablet page sizing) — confirmed not MVP
   - Advanced/suggested search (OTEP-614, 615) — confirmed not MVP, still spike-stage
8. **Login & Ringfencing** — as today.
9. **Ingestion & Data Quality** (new subsection under Dependencies, not Scope) — acknowledge the ingestion pipeline is substantially built (5 Done tickets) with 2 hardening items still open, tying directly to the OTG UAT data-quality risk already flagged in the launch checklist.

---

## 5. Net changes if you rebuild Section 8 from this

- **Fixed (2026-07-27):** OTEP-91 → OTEP-405 in the PRD; OTEP-318 deleted from Jira; OTEP-127 now referenced as the completed spike alongside OTEP-390/408/409 as the build; OTEP-132 confirmed unchanged (SJR + Internal Job, both R1).
- **Resolved, MVP (2026-07-27, corrected from an earlier "not MVP" call in this doc):** Competency matching on Opportunities (OTEP-336/570) — added as a scope-table row. REQ-X2 dependency now blocks actual MVP delivery, not just future scope.
- **Resolved, not MVP (2026-07-27):** Bookmarking (OTEP-197/425), listing quality-of-life polish (OTEP-281/282/404), and advanced/suggested search (OTEP-614/615) — confirmed out of MVP scope. Consolidated into a single "Out of scope (MVP)" section in the PRD.
- **Resolved (2026-07-27):** OTEP-436 (C@G ingestion) deleted from Jira — OTEP-88 stands alone, no ingestion/display split needed in the PRD.
- **Correct:** RTM's REQ-20 status still needs fixing (claims Done, actually Backlog) — now more urgent since this is confirmed MVP scope, not deferred.
- **Exclude explicitly:** OTEP-770 and OTEP-502, which read as Opportunities-related but belong to other epics

**Section 8 has been rewritten in the PRD to reflect all of the above**, including the OTEP-336/570 MVP correction.

---

*Generated: 2026-07-27*
*Source: live Jira pull via direct API, Epic 4 (OTEP-69), 52 tickets, 2026-07-27. Cross-referenced against [prd-opportunities.md](../../../PM-skills-ALL-1/02-prd/prd-opportunities.md) Section 8 and the [Requirements Traceability Matrix v2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2484896250) (as at 24 Jul 2026 — now 3 days stale against this pull).*
*Next: draft the actual rewritten PRD Section 8, plus a new "Out of scope (MVP)" section listing Bookmarking, listing polish, competency matching, and advanced search. Separately, correct RTM REQ-20's status from Done to Backlog.*
