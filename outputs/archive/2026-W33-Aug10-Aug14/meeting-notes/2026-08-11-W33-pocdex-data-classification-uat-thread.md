# Meeting Notes: POCDEX Data Classification, UAT Coverage & Day-2 Support (Email Thread)

**Date:** 2026-08-11

**Participants:** Huiting LIAN (Data Office), Dawn LAI (Data Office), Xian Zhang GUO, Michelle YIP (Product)

**Type:** Stakeholder review — data governance / email thread

**Source:** Email thread, "RE: Draft...eerCompass"

---

## Summary

Data Office pushed the POCDEX → CareerCompass integration conversation past "get data approval" into three harder questions: whether Compass can legally ingest agency-specific competency data given its classification level, whether UAT tests real operational complexity or just happy paths, and whether Compass can troubleshoot data issues independently post-launch or will lean on POCDEX for every incident. Huiting confirmed CareerCompass (Restricted/Security Normal) must exclude MHA and MFA agency-specific competencies, which are classified above its clearance. POCDEX also recommended at least 25 additional UAT scenarios covering lifecycle and edge cases not currently tested.

---

## Decisions Made

1. **CareerCompass excludes MHA and MFA agency-specific competency data (and associated ratings)**
   - **Why:** MHA agency-specific competencies are classified Confidential; MFA's are Confidential Cloud Eligible. CareerCompass is only cleared to Restricted/Security Normal.
   - **Who decided:** Huiting LIAN
   - **Impact:** HRPS already removed MHA roles from manual extracts; needs to confirm the same for MFA if any agency-specific competencies exist there.

2. **MFA expected competencies follow the same classification as their associated job function, absent other instruction**
   - **Why:** MFA never defined separate handling for agency-specific competencies, so default treatment applies.
   - **Who decided:** Dawn LAI, in response to Xian Zhang GUO's question
   - **Impact:** Resolves the immediate classification ambiguity for MFA — but only until/unless MFA issues explicit instructions otherwise.

3. **Expected competencies (role-based) and endorsed competencies (individual-based) are treated as distinct data types**
   - **Why:** Expected competencies are role metadata, not personal to an officer; endorsed competencies are personal assessment data.
   - **Who decided:** Team consensus, framed by Data Office
   - **Impact:** Endorsed competencies likely need stricter handling than expected competencies going forward.

4. **Data Sharing Form is the single source of truth for fields, API contract, and governance conditions**
   - **Why:** POCDEX requested this be finalized by 11 Aug to lock down what's shared and under what classification.
   - **Who decided:** POCDEX/Data Office requirement
   - **Impact:** Nothing else (informal Slack confirmations, prior emails) should be treated as authoritative once this form is finalized.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm whether any MFA agency-specific competencies currently exist in the dataset | Imelda | Not stated — recommend this week | 🔴 High | Not Started |
| Ensure Data Sharing Form explicitly documents excluded classifications (MHA/MFA agency-specific) | Rama | Not stated — tie to 11 Aug form finalization | 🔴 High | Not Started |
| Confirm UAT test plan covers the ≥25 additional scenarios POCDEX flagged (multi-hatting, secondment, email change, NPL, missing mappings, etc.) | Rama / QA | Not stated | 🔴 High | Not Started |
| Review Day-2 support requirements — Operations Portal needs source-system visibility, API response traceability, troubleshooting logs, ownership routing | Imelda | Not stated | 🔴 High | Not Started |
| Remove MFA agency-specific competencies from extracts (mirroring MHA treatment), if any exist | HRPS/Core team | Not stated | 🟠 Medium | Not Started |

**Notes:**
- None of the five action items have a stated due date. Given this thread explicitly ties to the 11 Aug Data Sharing Form deadline (already today/passed as of this processing) and UAT started 11 Aug, treat all five as overdue-risk, not just unscheduled.
- Owners assigned per open-items.md #55's existing pattern (Rama drives requirements/data-flow write-up, Imelda owns Level 2/competency-adjacent questions) — Michelle confirms consistency, does not author.

---

## Key Insights & Quotes

**Data Office's underlying concern (synthesized across the thread):** Huiting isn't objecting to CareerCompass — she's testing whether the product team has actually thought through governance, data semantics, independent operability, system-disagreement handling, and real-world test coverage before POCDEX invests further engineering effort.

**Three themes Huiting returns to repeatedly (per the thread's own analysis):**
1. Day-2 support readiness — can Compass troubleshoot independently, or does every issue escalate to POCDEX?
2. Synchronisation & identity management — email changes, multiple HR systems, multiple positions, source-of-truth alignment.
3. Test coverage robustness — whether real operational scenarios (not just happy paths) have been tested before launch.

**Classification rule of thumb established:** CareerCompass may consume "normal" (non-agency-specific) competencies. It may not consume MHA/MFA agency-specific competencies or their associated ratings (expected or endorsed).

---

## Open Questions

- [ ] Does CareerCompass's current competency dataset already include any MFA or MHA agency-specific competencies that need to be stripped? - **Owner:** Imelda - **By:** Not stated
- [ ] What is the actual mechanism (Operations Portal feature set) for Day-2 traceability — source system visibility, API logs, escalation routing? - **Owner:** Rama / Engineering - **By:** Not stated
- [ ] Who owns writing the ≥25 additional UAT scenarios POCDEX requested? - **Owner:** Rama (to assign) - **By:** Not stated
- [ ] Is production data still loaded into the UAT environment, and has it been purged as Data Office requested? - **Owner:** Rama - **By:** Not stated

---

## Blockers

1. **Data Sharing Form not yet finalized**
   - **Blocked by:** Outstanding classification clarifications and field-list agreement between Data Office and Compass
   - **Impact:** Without this, governance approval — and by extension data flow — can't be considered locked down
   - **Resolution:** Finalize required fields, API contract, and excluded-classification list explicitly in the form

2. **UAT scope gap**
   - **Blocked by:** Current test plan covers mainly simple scenarios; POCDEX assessed it as insufficient for lifecycle/edge-case coverage
   - **Impact:** Risk of passing UAT but failing in production on real workforce scenarios (multi-hatting, secondment, email changes, terminated officers)
   - **Resolution:** Add the ≥25 recommended scenarios before UAT is considered complete

---

## Timeline Risks

- **TIMELINE RISK:** This thread ties directly into the same MVP timeline currently in flux (weekly plan Priority 1, Mark's PS/DS 7-week delay note under review as of 2026-08-11). UAT started 11 Aug per the current plan, but Data Office is asking for ≥25 additional UAT scenarios with no stated timeline for writing or executing them — this could extend UAT further than even the proposed 7-week delay accounts for. Worth flagging this scope addition explicitly when the PS/DS decision doc runs, since it's a new input the original 7-week estimate likely didn't include.
- **TIMELINE RISK:** open-items #56 (POCDEX sync cadence / data-currency) was marked "✅ Transferred 2026-08-11 — closed on this tracker, live on Core team's" the same day this thread's concerns were raised. This thread's classification, UAT-coverage, and Day-2-support concerns are product/PM-level, not the ETL/infra-level questions #56 originally tracked — closing #56 may have prematurely dropped visibility on these adjacent but distinct risks. Worth confirming these are being tracked somewhere (open-items #55, still 🔴 Open, is the closer match) rather than assuming #56's closure covers this too.

---

## Next Steps

**Immediate (This Week):**
- Imelda: confirm/rule out MFA agency-specific competencies in current dataset
- Rama: push for the Data Sharing Form's excluded-classification wording to be explicit
- Rama: identify who owns writing the ≥25 additional UAT scenarios

**Short-term (Next 2 weeks):**
- Rama/Imelda: define Day-2 support / Operations Portal traceability requirements with Engineering
- Rama: confirm production data purge from UAT environment

**Follow-up Meeting:**
- **Date:** Not specified in thread
- **Purpose:** Likely needs a dedicated session with Huiting/Dawn to close the classification and UAT-scope questions before they resurface at go-live readiness review
- **Attendees:** Huiting LIAN, Dawn LAI, Michelle, likely Rama/Pow Hwee (data flow ownership)

---

## Context for Future Reference

This thread reframes the POCDEX relationship from a one-time data-approval ask into an ongoing governance and operational-readiness relationship. It directly overlaps with open-items #55 (Huiting's broader Compass data requirements ask, escalated 2026-07-14 as a feasibility risk to August MVP) — this thread reads as a continuation of that same conversation, now sharpened into concrete classification rules and a UAT coverage gap. Recommend linking this note to #55 rather than treating it as a new, separate thread.

**Top 5 risks from this thread, ranked (per the source analysis):**
1. 🔴 Insufficient UAT test coverage / missing edge cases
2. 🔴 Data classification breach risk (MHA/MFA agency-specific competency data)
3. 🔴 Day-2 operational support readiness
4. 🔴 Cross-system data synchronisation and identity resolution
5. 🟠 Multiple position / multi-hatting business rules

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw thread summary</summary>

See original pasted content — executive summary, classification decisions (expected vs. endorsed competencies, MHA/MFA exclusion), 10 ranked risks (classification breach, UAT coverage, data sync, Day-2 support, multi-hatting, competency mapping, data sharing approval delays, identity resolution, production data in UAT, timeline compression), and PM interpretation of Huiting's three core recurring concerns (Day-2 support, sync/identity, UAT robustness).

</details>

---

*Generated: 2026-08-12*
*Sources: Email thread (2026-08-11), cross-checked against open-items.md #55/#56, risks.md*
