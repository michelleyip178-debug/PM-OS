---
date: 2026-06-09
topic: OTG Ingestion — Data Reality Impact Analysis (Product Trio Prep)
status: Draft — for trio alignment before Sprint 4 Planning (Thu 11 Jun)
audience: Product Trio (Michelle, Pow Hwee, Amber)
---

# OTG Ingestion — Product Trio Prep

## Why this session matters

We've confirmed the ingestion pipeline logic and hard-skip rule. We've also now run the pipeline against the actual OTG dataset. The result: **75% of open gigs will not ingest on the first run.** This isn't just a data quality problem — it surfaces decisions the trio needs to make before OTEP-192 closes and before Sprint 4 Planning on Thursday.

This document is the brief. Read it before the session.

---

## The headline numbers

| Metric | Count |
|---|---|
| Total open gigs in OTG source | 633 |
| Currently passing ingestion (all required fields present) | **160 (25%)** |
| Blocked — will hard-skip on first run | **473 (75%)** |
| Open gigs with a past closing date (stale) | 346 |
| Open gigs with zero applicants | 447 |
| Gigs with unrecognised or missing type tags | 163 |

**At launch under current rules: OTEP surfaces 160 opportunities.** After filtering by type or function, some views will return single digits.

---

## What's blocking the 473

| Field missing | Gigs affected | Currently required? |
|---|---|---|
| Start date (`GigStart`) | **288** | Not yet confirmed — the #1 unresolved question |
| Function | 174 | Not yet confirmed |
| Type tag (no prefix, unrecognised, or TBC) | 163 | Yes — hard skip (decision 2026-06-04) |
| Business unit | 47 | Not yet confirmed |
| End date | 51 | Partially — `"00/01/1900"` is valid |
| Agency (unresolvable) | 27 | Yes — hard skip |
| Time commitment | 5 | Not yet confirmed |

Many gigs fail on more than one field — the counts above overlap. The net blocked count is 473.

---

## Where the blocked gigs live

### By type

| Type | Open gigs | Blocked | % blocked |
|---|---|---|---|
| Secondment | 259 | **230** | 89% |
| Job | 129 | 87 | 67% |
| No tag (unclassifiable) | 78 | 78 | 100% |
| Other (TBC) | 56 | 35 | 63% |
| SJR | 39 | 13 | — excluded by design |
| agilePSD (TBC) | 29 | 5 | 17% |
| Gig | 36 | 20 | 56% |
| STIP | 7 | 5 | 71% |

Secondments are the biggest type in OTG by far — and 89% of them are blocked. The blockers are almost certainly start date and function, not type tag (Secondments resolve fine). If start date and function are relaxed for Secondments, the catalogue more than doubles.

### By agency (top blocked)

| Agency | Blocked gigs |
|---|---|
| Enterprise Singapore | **178 (38% of all blocked)** |
| Ministry of Trade and Industry | 42 |
| Ministry of Social and Family Development | 40 |
| National Library Board | 20 |
| EDB | 18 |
| NCSS | 18 |
| Workforce Singapore | 16 |
| MDDI | 17 |

A single focused session with Enterprise Singapore unlocks more than a third of the platform's blocked content.

---

## What the confirmed hard-skip rule means against this data

**Confirmed rule (Pow Hwee, 2026-06-09):** Hard skip any record with any missing or unresolvable OTEP-mapped field. No partial imports.

Against the actual dataset, this rule has three consequences that weren't fully visible when we confirmed it:

**1. Start date (GigStart) is the largest single blocker — and it's not yet in the required field list.**

288 gigs are missing start date. Our data dictionary from this morning doesn't include `GigStart` as a required field — it was pending confirmation. If start date is required, 288 gigs hard-skip on day one. If it's optional (import null), many of those gigs pass. This is the single highest-leverage decision before OTEP-192 closes.

**2. Function being required blocks 174 gigs, mostly Secondments.**

Function drives the filter on the listing page (OTEP-86). If function is required: 174 gigs hard-skip and the filter still works. If function is optional (display-only): those gigs appear in unfiltered browsing but don't show up in function-filtered search. The BO analysis recommends keeping function required — but that's a call to confirm explicitly.

**3. 163 unclassifiable gigs are permanently blocked until OTG fixes their tags at source.**

These are the "No tag", "Other (TBC)", and "agilePSD (TBC)" categories. Our ingestion logic has no way to classify them. They'll keep failing every run until agencies add a recognised prefix, or until a lookup table approach replaces the regex (a bigger pipeline change). For MVP, these 163 are blocked indefinitely.

---

## The three decisions the trio needs to make

These are blocking OTEP-192's acceptance criteria and Léo's implementation.

### Decision 1 — Is start date (`GigStart`) a required field?

**Affects:** 288 gigs — the biggest single lever on catalogue size.

| Option | Outcome |
|---|---|
| Required (hard skip if missing) | 288 gigs drop on first run. Catalogue = ~160. Applies consistent rule. |
| Optional (import null, display if present) | Most of those gigs pass. Catalogue potentially doubles. Officers see listings with no start date for some gigs. |
| Required for Gigs/STIPs only, optional for Secondments/Jobs | Targeted unlock. Secondments are standing roles — a start date may genuinely not exist. Requires type-specific logic in the transform. |

**Recommended:** Optional for Secondments and Jobs (standing roles); required for Gigs and STIPs (time-bound commitments where the date is material to the officer's decision).

**Owner:** Pow Hwee + Michelle. **By:** before OTEP-192 ACs are updated.

---

### Decision 2 — Is function a required field or display-only?

**Affects:** 174 gigs, heavily overlapping with Secondments.

| Option | Outcome |
|---|---|
| Required (hard skip if missing) | 174 gigs hard-skip. Filter works but fewer gigs to filter. |
| Optional / display-only | 174 gigs pass. They appear in unfiltered browsing but not in function-filtered views. |

**Recommended:** Optional / display-only. A gig without a function is still a valid opportunity. The filter simply won't surface it, but it appears in unfiltered browsing. This is better than silently dropping 174 records.

**Design implication for Amber:** If function is optional, the listing card needs a graceful state when function is null. This affects OTEP-86's filter results — if function is missing, the gig won't appear in that filter bucket.

**Owner:** Pow Hwee + Michelle. **By:** before OTEP-192 ACs are updated.

---

### Decision 3 — What is the policy on stale gigs?

**Affects:** 346 open gigs with a past closing date. 255 of those have zero applicants.

The existing lifecycle rule (decision 2026-05-13) already handles this at query time: `closing_date > today OR closing_date IS NULL`. A stale gig with a past closing date will be in the DB but hidden from the listing. So stale gigs that otherwise pass ingestion won't surface to officers — the visibility rule catches them.

**The real question is whether the pipeline should add an explicit exclusion rule before they even reach the DB.** Options:

| Option | Outcome |
|---|---|
| Rely on lifecycle rule (current) | Stale gigs ingest, sit in DB, never appear on listing. Clean from officer perspective. Some DB noise. |
| Pipeline exclusion: skip gigs with past closing date + zero applicants | 255 fewer records in DB. Cleaner audit trail. Agencies whose abandoned gigs are excluded get a signal in the skip log. |
| Pipeline exclusion: skip all gigs with past closing date | 346 fewer records. Cleanest DB. Risk: excludes legitimate evergreen roles where closing date was a placeholder. |

**Recommended:** Rely on the lifecycle rule for MVP. It already handles this correctly. Add an explicit exclusion in a follow-up once we've confirmed evergreen edge cases via OTEP-358.

**Also needed:** Explicitly exclude the 3 test entries (GigIDs 13733, 14807, 14813) from ingestion. These are sandbox records with Open status and will attempt ingestion otherwise. Léo to hardcode an exclusion list for MVP.

**Owner:** Pow Hwee + Michelle. **By:** before OTEP-192 closes.

---

## What this means for each role

### PM (Michelle)

1. **Confirm start date and function decisions with Pow Hwee today.** These are the two calls that most affect catalogue size. Both need to be in OTEP-192's ACs before Léo's next commit.
2. **Update the data dictionary** (`2026-06-09-W24-otg-excel-data-dictionary.md`) once field scope is confirmed — move `GigStart` and `Function` to the right bucket (required or optional).
3. **Add explicit test entry exclusion** to OTEP-192 ACs: GigIDs 13733, 14807, 14813 must be excluded from ingestion.
4. **Flag the minimum viable catalogue question to BO.** 160 gigs at launch is thin. Before setting a go-live date, someone needs to confirm: what's the floor? The BO analysis recommends 300+ passing gigs with at least 3 opportunity types with 20+ each. Get this confirmed.
5. **OTEP-358 into S4 planning brief.** The nil-date spike is even more critical now — the data shows there may be other evergreen patterns beyond `"00/01/1900"`. It needs a slot in S4.

### Tech Lead (Pow Hwee)

1. **Confirm start date and function required/optional with Michelle.** The field contract drives Léo's transform logic. One conversation, today.
2. **Review type-specific required field rules** if the recommendation to differentiate by type (required for Gigs/STIPs, optional for Secondments/Jobs) is adopted. The transform needs conditional logic per type.
3. **Confirm stale gig approach** — pipeline exclusion or rely on lifecycle rule. The DB hygiene question is a tech call.
4. **Close the CFT sequence diagram (OTEP-391).** Hao Eng is blocked on the backend webhook receiver. This needs to ship this week.
5. **Decide OTEP-348 sequencing** — S3 or S4. With OTEP-192 potentially closing this sprint, the scheduler and observability companion needs a home.

### Designer (Amber)

1. **If function is optional:** the listing card and filter need a graceful state when function is null. OTEP-86 filter won't surface those gigs in function-filtered views — that's expected, but the empty filter result state needs a design.
2. **OTEP-284 ("Closing soon" label) needs ACs before Sprint 4.** If the trio confirms that stale gigs are handled by the lifecycle rule and not the pipeline, a "Closing soon" indicator (OTEP-284) becomes the design layer that covers the edge case. Currently no description, no ACs, no assignee. If it's in S4 scope, it needs to be written this week.
3. **The "Application form unavailable" state is still dead code.** Confirmed again — with `formsg_url` as a required field, no officer can reach a detail page for an opportunity without a FormSG URL. Remove from the detail page design for MVP.
4. **Ministry icons (OTEP-283) is unblocked.** The `ministry_icon` field is derived from `ref_agency` at query time — not an ingestion input. No dependency on the field decisions above.

---

## What changes by Thursday if decisions aren't made

| If not resolved | Sprint 4 impact |
|---|---|
| Start date required/optional | OTEP-192 ACs are incomplete — Léo can't close the story |
| Function required/optional | OTEP-86 (filter) and OTEP-192 both carry an unresolved dependency into S4 |
| Test entry exclusion | 3 sandbox records will surface as live opportunities on OTEP on first real run |
| OTEP-284 ACs not written | It enters S4 Planning without a definition of done — unsize-able |
| Minimum viable catalogue not confirmed with BO | No go-live date can be set; S4 end-state is undefined |

---

## Catalogue scenarios at launch

| Scenario | Estimated gigs on OTEP |
|---|---|
| Current rules, no changes | **~160** |
| Start date optional + function optional | **~350–400** |
| Above + Enterprise Singapore remediates their data | **~500+** |
| All rules relaxed (no hard requirements) | ~600 (not recommended — data quality too low) |

The 350–400 range is achievable without any agency remediation, purely through field scope decisions. It requires two conversations with Pow Hwee.

---

## Open items table

| # | Decision / action | Owner | By when |
|---|---|---|---|
| 1 | Is start date (`GigStart`) required or optional (and per-type rule?) | Pow Hwee + Michelle | Today |
| 2 | Is function required or optional (display-only)? | Pow Hwee + Michelle | Today |
| 3 | Stale gig approach — pipeline exclusion or lifecycle rule | Pow Hwee + Michelle | Before OTEP-192 closes |
| 4 | Hardcode test entry exclusion in OTEP-192 (GigIDs 13733, 14807, 14813) | Léo (PM to add to ACs) | Before OTEP-192 closes |
| 5 | Are competencies + time commitment required or optional? | Pow Hwee + Michelle | Before Thu Planning |
| 6 | Write ACs for OTEP-284 ("Closing soon" label) | Michelle + Amber | Before Thu Planning |
| 7 | Minimum viable catalogue threshold confirmed with BO | Michelle | Before go-live date set |
| 8 | OTEP-358 (nil-date spike) added to S4 planning brief | Michelle | Thu |
| 9 | CFT sequence diagram (OTEP-391) | Hao Eng (Pow Hwee to unblock) | This week |
| 10 | OTEP-348 sequencing — S3 or S4 | Pow Hwee | Today at Squad Sync |

---

## Pre-read

- [Pipeline logic + hard-skip rule](2026-06-09-W24-otg-ingestion-trio.md) — confirmed decisions and trio actions
- [Data dictionary](2026-06-09-W24-otg-excel-data-dictionary.md) — required/optional field contract (draft, pending today's decisions)
- `context-library/research/OTEP Ingestion Analysis/` — full dataset analysis, BO briefing, agency breakdown, remediation report

---

*Written: 2026-06-09*
*Source: OTG Oppr.xlsx analysis (633 open gigs as at 2026-06-09)*
*Tickets in scope: OTEP-192, OTEP-284, OTEP-319, OTEP-348, OTEP-358, OTEP-391, OTEP-86*
