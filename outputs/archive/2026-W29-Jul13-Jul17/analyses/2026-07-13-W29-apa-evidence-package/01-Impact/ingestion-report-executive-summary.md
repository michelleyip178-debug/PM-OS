# OTG Ingestion Report — Executive Summary

**Source:** OTG Oppr.xlsx (gigs_v2_report sheet) · Analysis date 9 Jun 2026 · Updated 15 Jun 2026 (v3 ingestion rules, ratified 12 Jun 2026)

---

## Headline

Of 633 open OTG opportunities, **415 now pass ingestion (65.6%)** and **218 remain blocked (34.4%)** after applying v3 ingestion rules. This is a sharp improvement from the pre-v3 baseline of **160 passing / 473 blocked (74.7% blocked)** — the v3 rule changes unblocked 255 records without requiring any agency action.

The 350-record launch threshold is already cleared. Agency outreach on the remaining 218 could push the passing count toward 500+.

---

## What Changed (v3 Rules, Ratified 12 Jun 2026)

Three Business Owner decisions unlocked the bulk of the improvement:

| Decision | Rule | Records Unlocked |
|---|---|---|
| I-013 | Time Commitment (TC) required for Gig/STIP only — not Job, Secondment, PSFG | Resolves all "TBC" TC uncertainty |
| I-015 | Start Date optional for Job and Secondment (standing roles may have no start date) | ~200 Secondments + ~61 Jobs |
| I-014 | Function optional (display-only) for all types | 174 Gigs |

Two further classification confirmations (15 Jun): Secondment now classified as Job (I-017), and agilePSD reclassified as PSFG, TC-exempt (I-018).

---

## Where the Remaining 218 Blocked Records Sit

- **Enterprise Singapore (ESG) — still the single largest blocked agency, but reduced.** Was 178 of 473 blocked pre-v3 (38%); now ~44 of 218 (20%). ~150 ESG records were unlocked by the Start Date rule alone. Remaining ~44 split between unresolvable type-tag issues (~19, needs a DevOps fix) and other field gaps (~25).
- **No type tag — 78 opportunities** carry no `[prefix]` in the name at all. MSF accounts for 37 of these; their titles suggest `[Job]` is the correct tag, pending a decision on how to handle (hard-block, ingest as "Unknown," or flag for agency fix).
- **Stale listings — 346 open opportunities have already passed their end date** (74 by more than a year), and 255 of those have zero applicants. These aren't part of the 218 "blocked" count, but they're a live risk: ingesting them as-is would surface dead listings and erode applicant trust. Candidate for auto-delist.
- **3 test entries** (GigIDs 13733, 14807, 14813) are currently `Open` status and will attempt ingestion unless explicitly excluded by the pipeline.

---

## Risks Carried Forward

| Severity | Risk |
|---|---|
| High | No source-level enforcement — the OTG creation form can't be modified, so every new opportunity can carry the same missing-field problems. Without a validation gate at source, this remediation exercise recurs every ingestion run. |
| Medium | Enterprise Singapore residual (~44 records, ~20% of remaining blocked) — largest single agency exposure, partly unresolvable without a DevOps fix. |
| Medium | Stale listings (346 records, 255 with zero applicants) risk eroding applicant trust if ingested as live opportunities. |
| Medium (was High) | 218 of 633 still blocked post-v3 — down from 473, and the launch threshold is already clear, but this is not zero. |
| Low | 7 blocked opportunities have no named owner — routed to a shared inbox (otg@psd.gov.sg), so there's no individual accountable for remediation. |

---

## Open Questions Still Needing a Business Owner Call

1. **No type tag (78 records):** hard-block, ingest as "Unknown," or flag for agency fix before the next run?
2. **Misused tags:** `[Female Only]` and grade-filter tags (e.g. `[For Grade 12/11 equivalent]`) describe eligibility, not opportunity type — may need a separate eligibility field rather than being crammed into the type classification.
3. **Tag governance:** no owner currently exists for the canonical tag list. Casing duplicates (`[Innofest]` vs `[INNOFEST]`) and 18 Job/Secondment sub-variants already exist, and will keep multiplying without a governed taxonomy.

---

*Full detail, agency-level breakdowns, and the complete ingestion rules decision tree are in the companion dashboards: `01_summary_dashboard.html`, `02_agency_breakdown.html`, `04_oqa_risks_assumptions.html`, `09_ingestion_rules.html`, and the per-agency remediation plan in `OTEP_Remediation_Report_v3.xlsx`.*
