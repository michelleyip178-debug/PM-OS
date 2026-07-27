---
date: 2026-07-13
week: 2026-W29
type: evidence-verification
status: complete
---

# APA Write-Up — Evidence Findings Report

Full findings from the evidence search run against the "Revised Panel-Ready Documentation" draft (16 claims flagged for sourcing). Searched across `PM-OS` (context-library/, outputs/) and `PM-skills-ALL-1` (00-hub/, 03-stories/, 04-ceremonies/, 06-skills-and-decisions/).

**Overall finding:** the "0 unlogged scope changes" and original "6 AC conflicts" claims were self-asserted in APA drafts with no primary-source evidence, the "178 blocked gigs cleared" claim materially misread the source data, and there were multiple internal inconsistencies across documents (WOG taxonomy count, AC conflict counts, D-026 content). Decisions on all four flagged items are recorded in [2026-07-13-W29-apa-evidence-corrections.md](2026-07-13-W29-apa-evidence-corrections.md).

---

## 1. "178 previously blocked gigs" cleared / Enterprise Singapore / ingestion numbers
**Partially found — claim was a misreading of the source data.**

- `context-library/research/OTEP Ingestion Analysis/OTEP_Research/01_summary_dashboard.html`: "633 open opportunities" confirmed as the base population.
- `.../OTEP_Research/09_ingestion_rules.html`: same 633 figure.
- `outputs/archive/2026-W27-Jun29-Jul3/analyses/2026-07-01-W27-apa-writeup.md`: "When I picked up OTG ingestion, only 160 of 633 live gigs were passing validation — a 75% failure rate... produced v3 ingestion rules (D-026) implemented. That unblocked onboarding for Enterprise Singapore, clearing 178 previously blocked gigs." — 160/633/75% match the source dashboard.
- **However**, `.../OTEP_Research/04_oqa_risks_assumptions.html`: "ESG was 178 of 473 blocked under the old rules (38%). Under v3, ~150 ESG records unlocked via the StartDate rule. ~44 ESG records remain blocked... ESG is still the single largest blocked agency but less dominant than before."
- `.../OTEP_Research/02_agency_breakdown.html`: raw data shows `{name:'Enterprise Singapore', open:197, blocked:44, ...}` — i.e. 44 currently blocked, not 178.
- **Conclusion:** 178 was ESG's blocked count under the *old* (pre-v3) rules — not the number of gigs cleared. The actual number unblocked for ESG is ~150. **Resolution applied:** reworded to "~150 previously-blocked Enterprise Singapore gigs unblocked (of 178 originally blocked under pre-v3 rules; 44 remain blocked)."

## 2. D-026 (v3 ingestion rules)
**Found — but two "D-026" entries in the workspace are inconsistent.**

- `outputs/decisions/2026-05-29-W22-decisions-log.md:19`: D-026 = "OTG ingestion rules v3: StartDate optional for Jobs, Function optional, TC for Gig/STIP only" (2026-06-12, ✅ Final). This matches the APA writeup's claim.
- **But** `00-hub/open-items.md:35` (updated 2026-07-03): "Epic C (status tracking) reverted from ATS integration (World A, confirmed 2026-06-24 as D-026) back to OTEP-native (World B)" — a different D-026 is referenced elsewhere. `weekly-reviews/2026-06-29-W27-weekly-review.md:80` also references "a full epic reversal (D-026→D-030)" in the ATS context.
- This is a real numbering collision in the workspace — two different decisions are called "D-026" in different documents. The ingestion-rules D-026 (2026-05-29 log) is the one supporting the APA claim.
- The canonical ingestion decision log actually uses I-### numbering (`context-library/decisions/otg-ingestion-decision-log.md`, up to I-022), not D-###. The D-### numbering lives in a separate, parallel log (`outputs/decisions/2026-05-29-W22-decisions-log.md`).
- **Status:** housekeeping fix, not panel-facing — logged as open item D in the corrections doc.

## 3. Job taxonomy conflict — OTG/C@G/CompBank, 210 unmappable, WOG count
**Found — with a confirmed, dated inconsistency.**

- `outputs/archive/2026-W26-Jun22-Jun26/analyses/2026-06-24-W26-opportunity-category-taxonomy-analysis.md`: OTG = 21 Job Families, C@G = 35 FieldSet/Indus codes, CompBank = ~400 categories; "Total unmappable C@G listings: ~210 (11% of C@G catalogue)."
- `outputs/archive/2026-W26-Jun22-Jun26/meeting-notes/2026-06-24-W26-product-x-bo-senior-level.md:51-53`: "Opportunity category taxonomy: WOG 23 Job Families as canonical layer... Canonical taxonomy = WOG's 23 Job Families (already decided, per Jun 16 log)" — dated 2026-06-24.
- **But** `outputs/archive/2026-W26-Jun22-Jun26/analyses/2026-06-24-W26-pow-hwee-taxonomy-assessment.md:17`: "WOG canonical list confirmed as 29 Job Families (not 23 as originally stated). Full list confirmed 2026-06-25." — a same-week correction of the "23" figure.
- `context-library/decisions/wog-taxonomy-mapping.md` (current canonical reference, dated 2026-06-25, decision I-019): confirms 30 categories (29 + Healthcare added as the 30th after BO review). This is the most recent and authoritative figure.
- `context-library/decisions/otg-ingestion-decision-log.md` I-019: also states "WOG 29-category taxonomy is the canonical filter layer."
- **Conclusion:** "23" was the working number for one day (2026-06-24), superseded the next day (2026-06-25) by "29," with the canonical mapping file now showing 30. **Resolution applied:** corrected to "WOG 30 Job Families."
- "210 unmappable listings" is well-sourced and consistent everywhere it appears — no change needed.

## 4. POCDEX 4-story dependency chain / Dependencies Sync-Up (Jun 11) / Epic creation
**Found and corroborated — no issues.**

- `outputs/archive/2026-W24-Jun08-Jun14/meeting-notes/2026-06-11-W24-dependencies-sync.md` — real meeting, dated 2026-06-11, referenced in Sprint 4 planning notes.
- `00-hub/open-items.md:36` (item #41): confirms architecture resolved 2026-06-11 — in-code interface, no foreign keys, two new Core endpoints scoped.
- Epic creation: `outputs/archive/2026-W23-Jun01-Jun07/daily-plans/2026-06-02-W23-eod.md:25`: "POCDEX Integration Epic created + OTEP-271/203/202/127 moved under it" (2026-06-02); decision log / meeting notes from 2026-05-22 show "POCDEX epic to be created and owned by Michelle," with formal Epic scope doc dated 2026-06-18.
- "Four-story cross-squad dependency chain" wording corroborated in `2026-06-25-W26-apa-brief-for-jace.md:90` and `2026-06-24-W26-apa-kr-metrics-evidence-brief.md:79`.

## 5. Sprint 4 "6 AC conflicts" vs "2 AC conflicts caught in Sprint 3"
**Found — "6" figure unsupported; "2" is correct and consistent.**

- Sprint 3: consistently 2 AC conflicts across many sources (OTEP-128/OTEP-129 duplicating OTEP-85) — `2026-07-02-W27-appraisal-panel-prep.md:228`, `2026-06-24-W26-appraise-ai-form-input.md:93`, `pm-conversion/evidence-tracker.md:89`, etc.
- Sprint 4: the primary source meeting notes (`outputs/archive/2026-W24-Jun08-Jun14/meeting-notes/2026-06-11-W24-sprint-4-planning.md`) show only one AC conflict explicitly resolved before planning — OTEP-87 (FormSG vs C@G deep-link boundary). No mention of 6 AC conflicts anywhere in this source document.
- Most APA drafts (`2026-07-02-W27-appraisal-panel-prep.md:229`, `2026-06-24-W26-appraise-ai-form-input.md`, `2026-06-25-W26-apa-brief-for-jace.md:124`, etc.) consistently state "Sprint 4: created two new tickets, fixed two AC conflicts" — i.e. 2, not 6.
- Only two drafts (`2026-07-02-W27-apa-writeup-pm2-schema.md:44`, `2026-07-01-W27-apa-writeup.md:28`) claim "6 AC conflicts" — unsupported by any primary source. **Resolution applied:** reverted to "2 AC conflicts" for Sprint 4.

## 6. Decisions log D-001 through D-026+ / "0 unlogged scope changes"
**Partially found.**

- `outputs/decisions/2026-05-29-W22-decisions-log.md`: log runs from D-001 through D-026 at minimum. `outputs/decisions/2026-07-08-W28-ats-2028-sourcing.md` references D-030, so the sequence continues to D-030 by July — but per #2 above, there's ambiguity in what "D-026" refers to across different docs.
- "0 unlogged scope changes": appears only in APA self-assessment drafts (`2026-07-01-W27-apa-writeup.md:30,46`; `2026-07-02-W27-apa-writeup-pm2-schema.md:66,84`) and one commentary note that is "consistent with," not independent verification of, the claim. **No dedicated tracking artifact, audit, or count exists anywhere that verifies this.** This is an assertion, not a sourced metric.
- **Status:** open item B in the corrections doc — needs either an actual audit against the decisions log, or a reworded claim.

## 7. WOG Auth pilot scope — 6 agencies, ~5,400 officers
**Found and confirmed, consistent across sources — no issues.**

- `context-library/prds/wog-authentication.md:22,28`: "MVP pilot = 6 agencies (~5,400 officers): PSD, ESG, MDDI, URA, MCCY, CAAS," sourced to "Implementation Details, 2026-06-02."
- `PM-skills-ALL-1/06-skills-and-decisions/decisions-log.md:43`: "MVP pilot (Oct–Nov 2026) = 6 agencies, ~5,400 officers: PSD, ESG, MDDI, URA, MCCY, CAAS." Fully consistent.

## 8. QA/UAT environment separation
**Found and confirmed, but ownership framing needs a check.**

- `PM-skills-ALL-1/06-skills-and-decisions/decisions-log.md:35`: "2026-06-04 | UAT runs in the Compass UAT environment; QA env is for the QA engineer to test all user stories and confirm ACs are met... Agreed at 9am team meeting. | Team"
- The decision is attributed to "the Team" collectively, not solely proposed by Michelle. The APA draft framing ("I proposed splitting the QA and UAT environments") is not fully corroborated by the decision log.
- **Status:** open item A in the corrections doc — find corroborating evidence of individual origination, or soften to "facilitated."

## 9. OTG batch job data mismatches / ~113,000 WOG officers
**Found, with the 113,000 figure previously self-flagged as unverified in source documents — confirmed by Michelle as accurate (2026-07-13).**

- Batch job mismatch claim: `outputs/archive/2026-W26-Jun22-Jun26/analyses/2026-06-24-W26-appraise-ai-input-list.md:32,92`: "Escalated POCDEX-OTG batch job mismatches upstream to source systems (POCDEX, Cumulus, HRPS) rather than patching at UI." Repeated consistently across several APA drafts.
- 113,000 figure: appears only in APA analysis drafts; multiple prior drafts explicitly flagged it as unconfirmed (`2026-07-02-W27-appraisal-panel-prep.md:18,340,360` — "PENDING CONFIRMATION," "confirm against latest OTG monthly report").
- A closely-adjacent but distinct figure exists: `PM-skills-ALL-1/06-skills-and-decisions/decisions-log.md:46` (Senior Mgmt decision, 2026-06-02): "Halt OTG onboarding for the remaining 24 agencies (~108,000 officers)" — this refers to the *remaining, non-pilot* agencies specifically, not the full ~113,000 total WOG OTG user base, so it isn't strictly a contradiction, but the two numbers are easy to conflate.
- **Resolution:** kept as-is per Michelle's confirmation (2026-07-13).

## 10. AI Learn-Create-Share session (8 May 2026) — 4.25/5 satisfaction, 75% AI clarity
**Not found.**

- No file anywhere in PM-OS or PM-skills-ALL-1 references "AI Learn-Create-Share," a session on 8 May 2026, a 4.25/5 satisfaction score, or "75% reporting greater AI clarity." Searches for "Learn-Create-Share," "4.25," "75% reporting," and "AI clarity" returned nothing relevant.
- **This claim has no supporting evidence anywhere in the searched workspace.** Status: open item C in the corrections doc — highest priority to resolve, since it's a fully unsupported, scrutinized claim. Locate the source (likely outside these two workspaces — survey export, feedback form, email) or remove/replace the claim.

## 11. Handover program for OTG/Jobelle — "4-week" vs "12-session, 4-week"
**Found and confirmed — "12-session, 4-week" is correct.**

- `outputs/archive/2026-W24-Jun08-Jun14/analyses/2026-06-10-W24-jobelle-handover-plan.md` frontmatter: `horizon: 4 weeks, 12 sessions`; body: "Format: 12 sessions across 4 weeks" (Week 1: 2 sessions ... Week 4: 3 sessions = 12 total).
- "4-week" alone is not wrong but is incomplete — "12-session, 4-week handover program" is the more accurate, stronger phrasing.

---

## Summary Table — Internal Inconsistencies

| Inconsistency | Documents in conflict | Resolution |
|---|---|---|
| "178 blocked gigs cleared" | APA drafts vs. `04_oqa_risks_assumptions.html` (178 = old-rules blocked count for ESG; only ~44 remain blocked, ~150 unlocked) | ✅ Applied — reworded to ~150 unlocked of 178 originally blocked |
| D-026 identity collision | `2026-05-29-W22-decisions-log.md` (D-026 = ingestion rules v3) vs. `open-items.md`/weekly review (D-026 = ATS World A confirmation) | Open — housekeeping, renumber one entry |
| WOG Job Family count: 21 vs 23 vs 29 vs 30 | OTG native = 21; "23" used 2026-06-24, superseded next day by "29" (2026-06-25); canonical mapping file now shows 30 | ✅ Applied — corrected to 30 |
| Sprint 4 AC conflicts: 2 vs 6 | Sprint 4 planning notes + majority of APA drafts say 2; only 2 later drafts say 6, unsupported | ✅ Applied — reverted to 2 |
| "113,000" vs "108,000" WOG officers | APA drafts self-flagged 113,000 as unconfirmed; decisions log cites ~108,000 for the 24 non-pilot agencies specifically (different scope) | ✅ Kept 113,000 per Michelle's confirmation |
| "0 unlogged scope changes" | Only self-asserted in APA narrative drafts; no audit trail or count artifact exists | Open — needs audit or reworded claim |
| AI Learn-Create-Share (8 May) session stats | No source found anywhere | Open — highest priority, locate source or remove |
| QA/UAT split — "I proposed" | Decision log attributes it to "Team" at a 9am meeting, not solely Michelle | Open — find corroboration or soften framing |

---

*See [2026-07-13-W29-apa-evidence-corrections.md](2026-07-13-W29-apa-evidence-corrections.md) for the action log and corrected Impact section text.*
