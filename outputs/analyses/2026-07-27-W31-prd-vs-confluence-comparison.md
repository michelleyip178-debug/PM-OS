---
date: 2026-07-27
week: 2026-W31
topic: Local PRD vs. Confluence Epic 4 page — comparison
status: comparison complete
sources:
  - local: PM-skills-ALL-1/02-prd/prd-opportunities.md
  - confluence: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1976550683/Epic+4+Opportunity+Discovery+MVP+-+STIPs+Gigs+SJRs+Internal+Jobs+External+Jobs+-+C+G (version 43)
---

# Local PRD vs. Confluence Epic 4 Page — Comparison

**Bottom line: these are two different snapshots of the same document, and neither is fully current.** The Confluence page (v43) is *older* than today's local reconciliation work but has content the local file never had — most notably a full "Success Criteria" appendix and some open items already resolved there that the local file hadn't caught. Meanwhile, the local file has today's corrections (OTEP-91→405, OTEP-318 deleted, no-SJR scope decisions, Out-of-scope section) that Confluence doesn't have at all.

**Neither file should be treated as the source of truth right now — they need to be merged.**

---

## Sections 1–7 (Background, Problem Statement, Data, Market Scan, Target User, Hypothesis, Success Metrics)

**Identical, word-for-word**, between local and Confluence. No drift here. Not a concern.

---

## Section 8 (Scope / Story Table) — where the two diverge

| Row | Local PRD (today, post-reconciliation) | Confluence v43 | What this means |
|---|---|---|---|
| **Search (US-02)** | `OTEP-405` — fully specified, in progress | `⚠️ No Jira ticket yet` — flagged as unscoped, notes "OTEP-92 is a tracking sub-task of OTEP-86, not a search story. Search scope may be deferred." | Confluence is **stale here** — OTEP-405 is real and in progress per live Jira. This local correction hasn't been pushed back to Confluence. |
| **Category filter (US-03)** | `OTEP-86 / OTEP-437` — OTEP-318 explicitly noted as deleted/superseded | `OTEP-86 / OTEP-318` — still live, "ACs TBC — no Jira description yet; confirm at Sprint 3 grooming" | Confluence is **stale** — OTEP-318 was deleted from Jira today. Needs updating. |
| **Detail page ringfencing (US-01b)** | `OTEP-127 ✅ Done (spike) / OTEP-390, 408, 409 (build)` — both spike and build cited | `OTEP-127` only, no mention of 390/408/409 | Confluence is **incomplete** — doesn't yet reflect that ringfencing moved from spike to active build. |
| **Apply via OTG (US-09)** | `OTEP-132` — "Deferred to R1. SJR opportunities also shifted to R1." | `OTEP-132 ⚠️` with a note: **"ID mismatch corrected: PRD previously showed OTEP-130 on this row. OTEP-130 = FormSG full+webhook story (Sprint 5). OTG redirect story = OTEP-132 (TBD sprint — confirm at Sprint 4 planning)."** | **Confluence caught a real error the local file never had** — at some point the local PRD had OTEP-130 miscited on the US-09 row, and someone corrected it directly in Confluence with a visible audit note. The local file today shows OTEP-132 correctly, so this specific bug is fixed in both — but the local file's history of *how* it got fixed is missing this context. |
| **OTEP-133 (EDM deep-link)** | Same content as Confluence, same ⚠️ title-mismatch flag | Same | No drift. |
| **Detail page auth-gate note** (OTEP-128, "Detail pages are not publicly accessible...") | **Present** — attributed to "Confirmed by Hao Eng Chua + Léo, Slack, 2026-07-02" | **Absent entirely** | Local file has newer, more complete ACs on OTEP-128 than Confluence does. This is a case of local being ahead. |
| **OTEP-129/284 row** | Local merges these as `OTEP-129 / OTEP-284`, separately calling out Sprint 4 timing for the "Closing soon" badge | Confluence has `OTEP-129` only, with the closing-soon badge AC folded into the same row without the OTEP-284 ticket reference, and includes the deep-link closed-message AC in the same row | Different structuring of the same underlying facts — not a factual conflict, just a formatting difference. Local's explicit OTEP-284 citation is more traceable. |

---

## Section 8 additions in the local file with NO Confluence equivalent

These are new since Confluence v43 — reconciliation work from earlier today that hasn't been pushed back:

- **"Out of scope (MVP)" subsection** (Bookmarking, listing polish, competency matching, advanced search) — doesn't exist in Confluence at all.
- **Section 11 Dependencies** — local has the new "OTG ingestion status" paragraph tying ingestion completeness to the UAT data-quality risk; Confluence's Section 11 is still just the bare unfilled headers.

---

## The big Confluence-only asset: "Success Criteria for Epic 4 — Opportunities"

This entire second half of the Confluence page **does not exist in the local PRD file at all**. It's a structured, per-epic success-criteria appendix (Standard vs. Edge-case/data criteria) covering:

- Opportunities Listing (OTEP-85, 267, 268)
- Filtering (OTEP-86, 317, 318)
- Search (OTEP-405) — **note: this section correctly cites OTEP-405**, contradicting the stale "no ticket yet" note earlier in the same page. The page is internally inconsistent.
- Opportunity Detail Page (OTEP-128, 129, 284)
- Ringfencing (OTEP-127, 390, 408, 409) — **already correctly cites the runtime build tickets**, again ahead of the earlier stale scope-table row on the same page.
- Apply — Careers@Gov (OTEP-88, 89, 87)
- Apply — FormSG / CareerCompass-Native (OTEP-319)

**This section is genuinely valuable and worth pulling into the local PRD** — it's not duplicate content, it's a different altitude (success criteria vs. acceptance criteria) with real substance:

- Explicitly separates "happy path" criteria from "edge case / data" criteria — a distinction the local PRD's Section 8 doesn't make as cleanly.
- Surfaces **data dependencies that read as genuine open risks**, several of which corroborate or extend what's already in your UAT/RTM work:
  - Filtering: "filter-by-category (OTEP-318) has no ACs written yet" — now moot since OTEP-318 is deleted and OTEP-437 supersedes it, but worth updating this line rather than deleting the pattern.
  - Search: "incomplete OTG payloads will silently produce false negatives, not visible errors" — a risk not previously flagged in your RTM open items.
  - Ringfencing: **"officer personas for 'incomplete profile data' and 'explicitly ineligible' are not yet defined or reserved... this is a real gap, not a documentation gap"** — this directly matches RTM open item 7 (the 3 missing test accounts) and your own UAT-OPP-037 comment about confirming intent. Independent corroboration from a different document.
  - Ringfencing: flags a **jobID/competency bug currently being investigated by Rama**, described as "the same structural dependency" as the ringfencing data risk — this is not referenced anywhere in the RTM, UAT docs, or local PRD. **This may be a genuinely new risk your other tracking has missed.**
  - Apply/C@G: "this entire epic currently has no confirmed QA test coverage (Confluence page is an empty stub)" — corroborates Pow Hwee's Coverage Targets finding that the OTEP-88/87 QA page is empty (NEW-18..27 in your gap-case work).

---

## Recommendation

1. **Pull the "Success Criteria" appendix into the local PRD** as a new section — it's genuinely additive, not duplicate, and several of its data-dependency notes corroborate or extend existing RTM/UAT findings (especially the ringfencing persona gap and the C@G empty-QA-page finding).
2. **Investigate the Rama jobID/competency bug** mentioned under Ringfencing — this doesn't appear anywhere else in your tracked documents and may be a real gap in your risk register.
3. **Push today's local corrections back to Confluence** (OTEP-405 for search, OTEP-318 deletion, OTEP-127+390/408/409 both cited, the new Out-of-scope section) so the two documents stop diverging. Confluence is the one your broader team actually reads.
4. **Fix the internal inconsistency within Confluence itself** — the Section 8 story table says "no Jira ticket yet" for search while the Success Criteria appendix two sections later correctly cites OTEP-405. Same page, contradicts itself.

---

*Generated: 2026-07-27*
*Sources: local [prd-opportunities.md](../../../PM-skills-ALL-1/02-prd/prd-opportunities.md), Confluence [Epic 4: Opportunity Discovery](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1976550683) v43, pulled 2026-07-27.*
*Next: confirm whether to (a) pull the Success Criteria section into the local file now, (b) push local corrections to Confluence, or (c) both — and separately, flag the Rama jobID/competency bug to someone who can confirm its current status.*
