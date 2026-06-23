---
jira_key: OTEP-427
type: Spike
assignee: Michelle Yip
sprint: S4 (2026-06-15 to 2026-06-28)
priority: Medium
status: In Progress
---

# OTEP-427: Tighten OTG Ingestion Logic — Validate Rules + Decide Job Function

## Problem we're solving

OTG data is inconsistent. Records vary in completeness -- some have missing fields, expired dates, broken FormSG links, or unrecognizable opportunity types. Without clear ingestion rules, bad records make it onto the platform and officers see opportunities that are incomplete, broken, or not meant for them.

OTG also embeds ringfencing criteria in each record, but it's not always present. Without a clear policy on how to handle that, opportunities either reach the wrong people or get unnecessarily blocked.

This spike defines both: what gets ingested (quality rules) and who can see what (ringfencing criteria). Engineering can't build OTEP-192 confidently without these decisions made first.

---

## Summary

Define and validate the ingestion rules for OTG opportunities -- what gets ingested, what gets dropped, and who can see what. Covers quality rules (hard-skip criteria, optional fields), edge cases from live OTG data, Job Function optionality, and MVP ringfencing criteria. Output feeds directly into OTEP-192 implementation and OTEP-127 ringfencing.

**Approach:**
1. Review OTEP-192 implementation against v3 decisions
2. Test edge cases from live import
3. Make Job Function field decision (optional or required)
4. Review endpoint design for long-term viability
5. Run and validate dry-run results

---

## Key Decisions

| ID | Decision | Status | Gates |
|----|----------|--------|-------|
| I-008 | Hard-skip any record with missing or unresolvable mapped field | ✅ Ratified | OTEP-192 skip logic |
| I-009 | SJR excluded from MVP listing and ingestion | ✅ Ratified | OTEP-192, listing filter |
| I-010 | C@G as source of truth where a job exists in both OTG and C@G | 🔴 Open — ESG HR confirmation needed | OTEP-348, ESG ingestion |
| I-011 | MVP ingests open opportunities only; all expired excluded | ✅ Ratified | OTEP-192 |
| I-012 | MVP ring-fencing = agency-level only | ✅ Ratified | OTEP-127, ring-fencing spike |
| I-013 | TimeCommitment required for STIPs and Gigs only | ✅ Ratified | OTEP-192 ACs |
| I-014 | Function field is optional / display-only (all types) | ✅ Ratified | OTEP-192 ACs, OTEP-427 |
| I-015 | StartDate optional for Jobs (Job + Secondment types) | ✅ Ratified | OTEP-192 ACs, OTEP-427 |
| I-016 | PSFG is its own category (voluntary, skills-based) | 🟡 Pending Xian Zhang validation | OTEP-86, OTEP-289 |
| I-017 | "Jobs" consolidates Secondments + Internal Jobs + C@G jobs | 🟡 Pending Xian Zhang validation | OTEP-86, card labelling |
| I-018 | 4-category model: STIPs · Gigs · Jobs · SJRs (PSFG deferred from MVP) | ✅ Ratified | OTEP-86, OTEP-289 |
| I-019 | Job Function field is optional for MVP ingestion. When present, ringfencing logic must factor it in; when absent, no BU filter is applied. | ✅ Ratified | OTEP-192 validation, OTEP-127 ringfencing |

> Full decision detail in `context-library/decisions/otg-ingestion-decision-log.md`. I-010 remains open (ESG HR confirmation needed). I-019 is now ratified.

---

## Acceptance Criteria

### AC 1: All v3 Ingestion Rules Validated in Implementation
- [ ] Decisions I-008 through I-015 are correctly implemented in OTEP-192 code
- [ ] Each rule has at least one test case covering happy path + failure mode
- [ ] Rules tested against sample OTG data (minimum 50 records, representing each type: Job, Secondment, STIP, Gig, SJR, PSFG)
- [ ] No discrepancies between decision documentation and actual code

**Related decisions:**
- I-015: StartDate optional for Jobs (Job + Secondment types)
- I-014: Function field is optional / display-only (all types)
- I-013: TimeCommitment required for STIPs and Gigs only
- I-012: MVP ring-fencing = agency-level only
- I-011: MVP ingests open opportunities only; all expired excluded
- I-008: Hard-skip any record with missing or unresolvable mapped field

---

### AC 2: Edge Cases Identified and Handled
- [ ] List of edge cases from live OTG import documented (at least 5 edge cases)
- [ ] Each edge case has a defined handling rule (hard-skip, optional field, error log, or transform)
- [ ] At least 3 edge cases have test coverage in OTEP-192 implementation

**Examples to test:**
- Opportunity with no type prefix (unrecognized type)
- Missing or malformed FormSG URL
- Closing date in the past (should be excluded per I-011)
- No Job Function field with all other fields present (OTEP-427 decision)
- Competency field missing vs. null vs. unexpected format
- FormSG URL that resolves to non-existent form

---

### AC 3: Job Function Field Optionality Decision Made
- [ ] Decision documented: Is Job Function required or optional for MVP?
- [ ] If optional: Updated validation rules coded, tested with 16–22 records that lack BU, impact on catalogue size confirmed
- [ ] If required: Rationale documented, count of records excluded on this basis logged
- [ ] Decision recorded in decision log (I-XXX)

---

### AC 4: Ingestion Endpoint Design Reviewed
- [ ] Current endpoint design (from OTEP-391 / OTEP-505) reviewed for long-term viability (S5+)
- [ ] Decision: Is current design adequate for R1+ scope (Secondments, Internal Jobs, PSFG), or does rework need to be scoped?
- [ ] If rework needed: Spike or story created for future sprint (S5 or S6), link it here
- [ ] If adequate: Rationale documented

**Context:** Hao Eng noted endpoint design may not be "the best way long term" — confirm if this is a blocker or acceptable MVP.

---

### AC 5: Dry-Run Validation Complete
- [ ] Léo runs dry-run import against all pilot agency OTG data (~311 records total)
- [ ] Results documented: [X] records pass validation, [Y] records fail, [Z] records skipped (with reason)
- [ ] All failures align with documented rules and edge case handling
- [ ] Reconciliation: Confirm v3 rules estimate (~400–450 passing records from earlier analysis) vs. actual dry-run results
- [ ] Any unexpected results investigated and documented

**Success = Dry-run results are predictable and align with v3 model.**

---

## Definition of Done

- [ ] All ACs met
- [ ] Edge case documentation updated in decision log or ingestion brief
- [ ] Job Function decision added to I-018 or new decision entry
- [ ] Endpoint design review summary added to decision log
- [ ] Dry-run results shared with Léo + Michelle + Pow Hwee
- [ ] Any follow-on work (endpoint rework, further edge cases) captured as future stories
- [ ] OTEP-192 ACs updated if any rule clarifications emerged

---

## Related Tickets

**Blocks:**
- OTEP-202 (seed database — needs validated dry-run)
- OTEP-127 (ringfencing — depends on seeding readiness)
- S5 grooming (needs confidence in ingestion model)

**Depends on:**
- OTEP-192 (OTG ingestion job — must be implemented first)
- OTEP-391 (CFT vs GuardDuty spike — done, architecture confirmed)

**Related:**
- OTEP-348 (ingestion scheduler)
- OTEP-358 (nil-date spike)
- OTEP-397 (file upload UI)
- OTEP-505 (CFT integration)

---

## Notes

**Timeline:** This is a gate for S5 grooming (25 Jun) and S5 planning (25–26 Jun). Results must be ready by Thu 25 Jun EOD so Léo + team can act on findings before sprint close.

**Effort estimate:** ~4–6 hours PM spike (Michelle) + ~2–3 hours engineering (Léo for dry-run, Hao for endpoint review).

**Success criteria:** Dry-run results are predictable, all failures align with documented rules, Job Function decision is made, endpoint design is cleared or rework is scoped. No surprises for S5 ingestion work.

---

*Updated: 2026-06-22 (decision made after DevOps chat — no merge, OTEP-427 scope clarified)*
