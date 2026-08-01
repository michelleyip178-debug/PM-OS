# Opportunity Taxonomy & Posting-Time Data Quality

**Stage:** Planning Review

**Last Updated:** July 31, 2026

**Owner:** Michelle Yip

**Status:** Draft

---

## Hypothesis

Agencies posting opportunities across OTG and CareerCompass use inconsistent naming conventions, prefixes, and category assignments. Missing or ambiguous opportunity type prefixes blur the line between jobs, secondments, gigs, STIPs, and SJR. Sprint demos confirmed a concrete downstream effect: opportunities with null or unmapped job functions silently disappear from filtered search results. HR absorbs the cost today by manually generating remediation reports and hand-correcting categories before every migration or publication cycle.

**If we** enforce a standardized opportunity type taxonomy with mandatory fields validated at posting time,
**then** opportunities will stop silently vanishing from filtered results and HR's manual remediation workload will drop,
**because** the root cause is bad data entering the system, not bad data being hard to find afterward.

**Supporting Evidence:**
- "Null or unmapped job functions cause opportunities to disappear from results" — Sprint Internal Demo
- "Missing opportunity type prefixes... Agencies interpreting categories differently" — CareerCompass discussion
- "Reports must be generated to identify malformed opportunities. HR teams need to manually coordinate remediation before migration or publication." — CareerCompass discussion

**⚠️ Evidence gap:** All three points above come from internal discussion synthesis, not direct HR quotes or a frequency count of how often results are affected. See [full synthesis](../research-synthesis/2026-07-31-W31-job-posting-discovery-synthesis.md) for the validation caveat. Recommend pulling actual remediation report volumes from HR before this moves past Planning Review — that data already exists as a byproduct of the current manual process.

---

## Strategic Fit

**Why this? Why now?**

This is the upstream root cause behind two other tracked problems. Opportunities Listing (MVP P0, [opportunities-listing.md](../../context-library/prds/opportunities-listing.md)) already has real demand data — 7,097 sign-ups against 4,752 vacancies — but that discovery experience degrades silently whenever a posting's job function field is null or unmapped, since the opportunity just doesn't show up under the relevant filter. Fixing categorization at the point of entry protects the investment already made in the discovery/listing work rather than adding a second, disconnected effort.

**Impact Sizing:**

**Step 1: Estimate Usage (Funnel)**
| Stage | Users | Drop-off Reason |
|-------|-------|-----------------|
| Opportunities posted per cycle | Unknown — need HR posting volume | Not yet pulled |
| Opportunities with categorization gaps | Unknown | Need remediation report counts from HR |
| Opportunities affected in officer-facing search | Unknown | Sprint demo confirms this happens; frequency not quantified |

**Step 2: Calculate Impact**
- *Engagement Impact:* Reduces silent search/filter failures on the officer side — direct support for the existing Opportunities Listing north star (application completion rate, channel migration target).
- *Top-Line Impact:* Not directly revenue-linked; this is an internal government platform. Impact is measured in officer discovery completeness and HR time saved.
- *Bottom-Line Impact:* Reduction in HR remediation report volume and manual correction time — needs a baseline pull to quantify.

**Step 3: Confidence Assessment**
| Assumption | Confidence | Risk Level | De-risking Action |
|------------|------------|------------|-------------------|
| Categorization gaps are the primary cause of missing-from-filter bugs | Medium | Medium | Pull sprint demo bug reports; confirm root cause with engineering before committing scope |
| HR remediation burden is significant enough to justify posting-time validation investment | Medium | Low | Pull actual remediation report volume/frequency from HR (data already exists) |
| Standardized taxonomy won't break existing agency workflows | Low | Medium | Review with agency-facing stakeholders before defining mandatory fields |

**Summary:**
- Users affected: HR posters (all agencies) + officers using filtered search — exact numbers pending baseline pull
- Revenue impact: N/A (internal platform); impact framed as officer discovery completeness + HR time saved
- Strategic value: Medium-High — protects existing MVP P0 investment in Opportunities Listing

**Alternatives Considered:**
- Remediation-reporting tool that flags bad data after posting — rejected because it treats the symptom (bad data existing) rather than the cause (bad data being allowed to enter); also duplicates work HR is already doing manually.
- Leave categorization ungoverned and rely on agency discipline — rejected because this is the current state, and it's the documented source of the problem.

---

## Non-Goals

What we are explicitly NOT doing in this scope:
- **Not building ATS-like application workflow features.** The [Inclusive Job Portal meeting (2026-07-30)](../meeting-notes/2026-07-30-W31-inclusive-job-portal.md) reaffirmed CareerCompass "is not meant to be a full fledge ATS." This PRD is scoped to posting-time categorization and validation only, not application tracking or hiring workflow.
- **Not retroactively cleaning existing bad data in this phase.** V1 stops new bad data from entering; a separate backfill/migration effort would be needed to fix already-posted opportunities, and that's out of scope here until the taxonomy itself is validated.
- **Not resolving SJR-specific application flow scope.** That's a live open question in [r1-seamless-application-draft.md](../../context-library/prds/r1-seamless-application-draft.md) and isn't blocked by this PRD, but isn't solved by it either — SJRs still need their own scope decision.

**Trade-offs Made:**
- Prioritizing prevention (validation at posting time) over remediation (cleanup tooling) — slower to show HR-facing time savings on existing bad data, but stops the problem from growing.

---

## Success Metrics

**Primary Metric:** Reduction in opportunities with null/unmapped job function fields at time of publish
- Current: Unknown — needs baseline pull from existing remediation reports
- Target: TBD once baseline exists
- Timeline: TBD

**Guardrail Metrics:** (Must not harm)
- Time-to-post for HR: mandatory field validation should not meaningfully slow down the posting flow
- Opportunities Listing application completion rate (from [opportunities-listing.md](../../context-library/prds/opportunities-listing.md)): should hold steady or improve, not regress

**Kill Criteria:**
If mandatory-field validation increases HR posting abandonment or measurably slows the posting workflow without a corresponding drop in downstream data quality issues, we will revisit the validation UX rather than the taxonomy itself.

---

## Solution Overview

**User Flow:**
1. HR poster begins creating an opportunity in CareerCompass
2. System requires selection from a standardized opportunity type taxonomy (Jobs, Gigs, SJR, Secondments, STIPs — final list TBD with agency stakeholders)
3. System validates mandatory fields (including job function mapping) before allowing publish
4. If validation fails, HR poster sees specific, actionable guidance on what's missing — not a generic error
5. Published opportunity flows into Opportunities Listing search/filter with complete metadata

**Key Interactions:**
- Validation blocks publish rather than allowing publish-then-flag — this is the core behavior change from today's remediation-after-the-fact model.

**Edge Cases:**
- Agency-specific categories that don't map cleanly to the standard taxonomy: needs a defined escalation/exception path, not yet designed.
- Opportunities migrated in bulk from OTG during the transition window ([squad sync 2026-07-31](../meeting-notes/2026-07-31-W31-squad-sync-r1-mvp-sso.md) notes dual-posting burden during migration) — bulk migration tooling may need a different validation entry point than one-at-a-time posting.

**Mockup/Prototype:** Not yet created.

---

## Risks and Recovery

| Risk | Detection | Fallback | Kill Switch |
|------|-----------|----------|-------------|
| Standardized taxonomy doesn't fit all agency use cases, causing posting friction or workarounds | HR posting abandonment rate; agency complaints | Add an exception/escalation path for edge-case categories | PM (Michelle) |
| Validation at posting time slows HR workflow enough to hurt adoption | Time-to-post metric, qualitative HR feedback | Simplify mandatory field set to only what directly causes search/filter breakage | PM (Michelle) |

---

## Open Questions

- [ ] What's the actual frequency of opportunities disappearing from filtered results due to null/unmapped job functions? Sprint demo notes don't quantify this. - @Michelle (pull from engineering/sprint demo follow-up)
- [ ] Which specific categories/prefixes are most frequently misapplied? Worth pulling from remediation reports HR already generates. - @Michelle
- [ ] What's the final standardized taxonomy list (Jobs, Gigs, SJR, Secondments, STIPs, others)? Needs agency-facing stakeholder input, not just internal team decision. - @Michelle
- [ ] Does this taxonomy work share engineering surface area with the Opportunities Listing MVP P0 work or the R1 Seamless Application work? Needs confirmation with engineering leads before scoping sprint work. - @Michelle
- [ ] How does bulk OTG-to-CareerCompass migration interact with posting-time validation — does migrated data get validated on entry, or does it need a separate remediation pass? - @Michelle / @Imelda Mo

---

## Appendix

**Source synthesis:** [Job Posting & Discovery Problems synthesis, 2026-07-31](../research-synthesis/2026-07-31-W31-job-posting-discovery-synthesis.md) — Theme 2 (Inconsistent Categorization & Data Quality), cross-referenced against Theme 1 (Fragmentation, already MVP P0).

**Related PRDs:**
- [opportunities-listing.md](../../context-library/prds/opportunities-listing.md) — MVP P0, officer-facing discovery; this taxonomy work directly protects that investment.
- [r1-seamless-application-draft.md](../../context-library/prds/r1-seamless-application-draft.md) — has open questions on ATS integration and SJR scope that this PRD respects but doesn't resolve.

**Related meetings:**
- [Inclusive Job Portal, 2026-07-30](../meeting-notes/2026-07-30-W31-inclusive-job-portal.md) — sets the "not a full ATS" boundary this PRD's non-goals rely on.
- [Squad Sync, 2026-07-31](../meeting-notes/2026-07-31-W31-squad-sync-r1-mvp-sso.md) — flags OTG-to-CareerCompass migration as an active operational concern, relevant to the bulk-migration edge case above.
