# Opportunities Listing — Unified Discovery Hub

<!-- Paths in this file are relative to THIS file's location (knowledge/product/features/opportunities-listing.md). -->

## Meta
- Owner: (PM TBD)
- Status: building
- Priority: MVP P0 — one of two confirmed MVP pillars
- Last updated: 2026-05-22

## Problem

Officers struggle to discover and apply for development opportunities because they are fragmented across multiple portals (standalone FormSG links, Careers@Gov, OTG). This results in confusion on validity of job postings and friction for officers who want a single view of all short-term and long-term opportunities.

Host agencies face the reverse: no operational visibility into applicants, manual sign-up tracking, no feedback loop on whether opportunities actually filled.

## Target users

1. **Primary:** Government officer seeking development opportunities (STIPs, Gigs, SJRs, job rotations) — discover and apply without informal networks or multi-system navigation
2. **Secondary:** Host agency coordinator posting opportunities and tracking applicants — reach eligible officers at scale; track sign-ups without manual overhead

## Success metrics

**North star (Outcome)**
- **Application Completion Rate** — forms submitted ÷ Apply button clicks × 100
- **Channel migration:** ≥50% of total STIP/Gig applications submitted via OTEP by Month 3

**Input metrics**
- Click-through rate: listing page → detail page
- Apply click rate: detail page → form
- Form field drop-off rate (no single field should cause abandonment)

**Instrumentation events (per story)**
- `oppr_list_view`, `oppr_detail_view`
- `search_performed`, `search_to_detail`, `search_zero_results`
- `filter_applied`, `filter_search_applied`, `filter_to_detail`
- `click_to_formsg`, `formsg_webhook_received`
- `click_to_CG`, `edm_to_detail`, `edm_to_noaccess`

**Guardrails**
- Submission error rate → pause and investigate (Engineering)
- Confirmation email delivery rate → escalate to Infra

**Demand baseline (STIPs + Gigs, annual — correlational, interest data only)**
- Total sign-ups: 7,097 | Vacancies: 4,752 | Demand-over-supply: +49%
- STIPs: 6,411 sign-ups vs 4,056 vacancies (highest volume, biggest standardisation impact)
- Gigs: 686 sign-ups vs 696 vacancies (balanced; Q2-concentrated)
- ⚠️ FormSG baseline submission volumes not yet pulled — needed for channel migration target baseline

## Scope — MVP user stories

| Jira ID | Story | Notes |
|---|---|---|
| OTEP-85 | Opportunity card listing (3-col grid, 15/page, auth-gated, ringfenced) | Sprint 2 |
| OTEP-267 | Pagination | Sprint 2 |
| OTEP-268 | Empty / error / partial-load states | Sprint 2 (re-added 2026-05-18) |
| OTEP-276 | **[Spike]** Investigate custom design system reimplementation | Sprint 2 (Thomas) |
| OTEP-295 | Mock detail endpoint for opportunity | Sprint 2 (Leo) |
| OTEP-296 | Prepare defined report format matching data model | Sprint 2 (Michelle) |
| OTEP-128 | Opportunity detail page (absorbs OTEP-285) | Sprint 2 |
| OTEP-129 | Open/closed status; "Closing soon" (≤7 days) | Sprint 2 |
| OTEP-127 | Ringfencing via POCDEX | Sprint 3 |
| ⚠️ No Jira | US-02: Keyword search | Scope TBC; may be deferred |
| OTEP-86 | Filter opportunities by type | Sprint 3 (deferred from Sprint 2) |
| OTEP-318 | Filter by category | Sprint 3 (no ACs yet) |
| OTEP-317 | Clear all filters | Sprint 3 |
| OTEP-319 | Apply via FormSG — basic redirect (STIPs, Gigs, Internal Jobs) | Sprint 3 (`formsg_url` confirmed ✓) |
| OTEP-130 | Apply via FormSG — full with webhook | Sprint 4 |
| OTEP-87 ⚠️ | Detail page: apply CTA + competencies | Sprint 3 (Jira ACs mismatch — reconcile) |
| OTEP-132 ⚠️ | Apply via OTG redirect — SJRs / Internal Jobs | Sprint TBD (Note: US-19 for SJR apply via OTG was dropped 2026-05-13. Confirm if this ticket is also dropped) |
| OTEP-88 | C@G listing label on card | Sprint 5 |
| OTEP-89 | C@G deep-link apply CTA | Sprint 5 |
| OTEP-133 ⚠️ | EDM deep-link landing | Sprint 5 (Jira title mismatch) |

## Risks

See [../../../hypotheses/opportunities-listing.md](../../../hypotheses/opportunities-listing.md) for full hypothesis set.

Key risks:
- **Feasibility:** OTEP-87 and OTEP-133 have Jira ACs mismatches — reconciliation needed before sprint grooming
- **Feasibility:** FormSG pre-fill (open item #14 with Pow Hwee) — unresolved; affects Sprint 5 scope
- **Viability:** Channel migration target (≥50% by Month 3) unverified without FormSG baseline data
- **Value:** Competency match ratio (personalised detail page) deferred to R1 — may limit officer value perception at launch

## Dependencies & Scope

- **Systems:** OTG (daily export → OTEP schema, confirm with Rama); Careers@Gov (deep-links only, no data return); Email delivery service (Fabian/Infra)
- **Auth:** POCDEX integration for ringfencing (confirm session handling with POCDEX owner)
- **Exclude:** 2026 SJR opportunities from MVP
- **Deferred to R1:** Competency match ratio / personalisation on detail page; agency/grade/commitment filters; faceted search
- **Confirmed decision (12 March 2026):** Replace FormSG as front-door with OTEP-hosted application flow
- **Need:** Backend mapping of opportunity competencies to competency bank (avoid inconsistencies)

## Timeline

- Sprint 3 grooming: OTEP-87 Jira reconciliation, OTEP-318 AC definition, search scope decision
- Sprint 4 planning: OTEP-132 sprint assignment
- Sprint 5: OTEP-130 (FormSG full + webhook)

## Evidence

- [ingestion/adhoc/2026-05-22-epic4-opportunity-discovery-prd.md](../../../ingestion/adhoc/2026-05-22-epic4-opportunity-discovery-prd.md)

## Linked

- Hypotheses: [../../../hypotheses/opportunities-listing.md](../../../hypotheses/opportunities-listing.md)
- Decisions: [../../../decisions/2026-04-02-opportunities-mvp-steering-approval.md](../../../decisions/2026-04-02-opportunities-mvp-steering-approval.md)
- Stakeholders affected: [../../../stakeholders/pow-hwee.md](../../../stakeholders/pow-hwee.md), [../../../stakeholders/rama.md](../../../stakeholders/rama.md), [../../../stakeholders/amber.md](../../../stakeholders/amber.md)

## Open questions

- Search scope (US-02): confirm at Sprint 3 grooming — defer or build?
- OTEP-87: reconcile Jira ACs with actual US-08 intent (missing-FormSG-link) before Sprint 3
- OTEP-318 (filter by category): ACs TBC at Sprint 3 grooming
- FormSG pre-fill via URL params (Pow Hwee open item #14): unresolved — blocks OTEP-130 scope clarity
- FormSG baseline submission volumes: Engineering to pull — needed before channel migration target is meaningful
- 'Secondment' classification: BO to confirm if distinct type or sub-type of SJR
- Pilot agency selection for GTM: 1-2 agencies with higher posting volume + willing HR partner — TBD

## Follow-up after launch

- Check channel migration rate at Month 1 and Month 3 (target: ≥50% by Month 3)
- Monitor application completion rate vs FormSG historical completion rate
- Review `search_zero_results` to inform R1 filter design
- Evaluate competency match ratio feature viability with R1 data
