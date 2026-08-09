# Meeting Notes: POCDEX Data Sharing Approval — Email Thread

**Date:** 2026-08-07 (thread date, as reported)

**Participants:** Huiting Lian, Grace Gan (Data Office), CareerCompass team (Michelle Yip + team)

**Meeting Type:** Email thread — data sharing requirements, API design, UAT readiness, data governance

**Duration:** N/A (async)

---

## Summary

Huiting Lian reviewed the CareerCompass/POCDEX data sharing draft and raised several clarifications before the agreement can lock: three new API fields to add, one field (Owner Agency Code) whose MVP necessity is unconfirmed, and a formal documentation ask on how multiple-employment-position officers are handled. Separately, the Data Office (Grace Gan, Huiting) raised a governance concern — whether production HR data has been loaded into the CareerCompass UAT environment — and instructed an immediate purge rather than waiting for UAT to complete. POCDEX also flagged that current UAT test coverage is too thin (mostly straightforward scenarios, little lifecycle or Day-2 troubleshooting testing) and proposed 25+ additional scenarios.

---

## Decisions Made

1. **Add Main Job Indicator, Main Job Family Indicator, Main Job Function Indicator to the data sharing form**
   - **Why:** Already available in the API; helps CareerCompass prioritize which of an officer's multiple active job profiles to use.
   - **Who decided:** Huiting Lian requested; CareerCompass to action.
   - **Impact:** Data sharing form needs updating before the 11 Aug freeze.

2. **Add Source System and HR ID (from Identity Resolution API) to the data sharing form**
   - **Why:** Supports self-service troubleshooting when agencies report officers that can't be found — reduces reliance on POCDEX support tickets.
   - **Who decided:** Huiting Lian requested.
   - **Impact:** Also needs UI/support workflow alignment (see action items) — this isn't just a data field addition, it implies support tooling work.

3. **Multiple employment positions: use first primary position returned for MVP**
   - **Why:** For officers with multiple primary positions across different HR systems, CareerCompass will save all returned positions but use the first primary position returned for profile display, as an MVP simplification.
   - **Who decided:** CareerCompass team, communicated to Huiting.
   - **Impact:** Huiting has asked this assumption be formally documented in the data sharing form — not yet done. She also flagged that officer profile data (HRPS) and employment data (Cumulus) must be linked by officerId + source-system consistency, and must not be mixed.

4. **Purge any production data from UAT immediately — do not wait for UAT completion**
   - **Why:** Data Office position is that production data should never reside in UAT; only synthetic/test data is acceptable. CareerCompass's initial response (anonymised production data would be purged after UAT completes 31 Aug) was not accepted — Data Office instructed immediate purge.
   - **Who decided:** Grace Gan / Data Office, overriding CareerCompass's proposed timeline.
   - **Impact:** This is a compliance instruction, not a negotiable timeline — see Risks below.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm whether Owner Agency Code is required for MVP | CareerCompass team | Before 11 Aug field freeze | 🔴 High | 🔴 Not Started |
| Update Data Sharing Form with main job indicators + Identity Resolution API fields | CareerCompass team | Before 11 Aug field freeze | 🔴 High | 🔴 Not Started |
| Decide and freeze final data fields | CareerCompass + POCDEX | 11 Aug | 🔴 Critical | 🔴 Not Started |
| Align UI and support workflow for source system / HR ID troubleshooting data | CareerCompass, Xian Zhang Guo, Christopher Woo | Not set | Medium | 🔴 Not Started |
| Execute API integration testing, Compass UAT ↔ POCDEX Dev environment | POCDEX + CareerCompass | POCDEX targeting 7 Aug support | High | 🟡 In Progress (POCDEX side ready) |
| Review and incorporate additional UAT scenarios proposed by POCDEX (25+) | CareerCompass | Not set — POCDEX delivering incrementally | High | 🔴 Not Started |
| **Purge all production data from UAT environment, confirm compliance with IM8** | CareerCompass team | **Immediate** — Data Office instruction, not tied to 31 Aug UAT end | 🔴 Critical | ✅ Complete (confirmed 2026-08-07) — send confirmation back to Grace Gan/Huiting Lian to formally close the governance concern |
| Provide 2 additional UAT test personas | POCDEX | This week or early next week | Medium | 🟡 In Progress |

**Notes:**
- The production-data-purge item is the most time-sensitive action in this thread despite having no explicit deadline stated — "immediate" per Data Office instruction should be treated as today/this week, not folded into the 31 Aug UAT timeline.
- The 11 Aug field freeze is four days from this thread's date — Owner Agency Code and the three new field additions both need resolving before then.

---

## Key Insights & Quotes

**On data governance risk:**
- Data Office's position is unambiguous: "Production data should not reside in UAT" and "if production data exists, it must be purged immediately." CareerCompass's initial framing (anonymised production data, purge after 31 Aug UAT completion) was explicitly not accepted — the instruction was to purge immediately and avoid production data altogether going forward.
- This reads as a compliance/IM8 issue, not a scheduling preference — worth treating as a hard stop rather than a negotiable item.

**On UAT test coverage:**
- POCDEX's own assessment: current UAT plan "covers mainly straightforward scenarios," has "little validation of lifecycle changes across time," and "does not sufficiently test operational troubleshooting scenarios." They're proposing 25+ additional scenarios covering edge cases, officer lifecycle events, and simulated Day-2 troubleshooting, to be delivered incrementally.
- This is an external party telling CareerCompass its own UAT plan is thin — worth treating as a credible outside check, not just an add-on ask.

**On multiple employment positions:**
- CareerCompass's stated approach: save all returned positions, use the first primary position returned for profile display when an officer has multiple primary positions across HR systems. Huiting's requested guardrail: officer profile data (HRPS) and employment data (Cumulus) must be linked by officerId + source-system consistency, and the two must not be mixed.

**Strategic considerations:**
- POCDEX has already delivered API fixtures (4 Aug) and prepared data for the 20 requested UAT personas — the POCDEX side of the relationship is moving faster than CareerCompass's own field-freeze and governance items right now.

---

## Open Questions

- [ ] Is Owner Agency Code actually required for MVP, or can it be removed from data-sharing scope? — **Owner:** CareerCompass team — **By:** Before 11 Aug field freeze
- [ ] What is the business rationale for Owner Agency Code, if it's kept? — **Owner:** CareerCompass team — **By:** Before 11 Aug field freeze
- [ ] Has production data already been loaded into the CareerCompass UAT environment, and if so, when will purge be confirmed? — **Owner:** CareerCompass team — **By:** Immediate, per Data Office instruction
- [ ] Who owns building the UI/support workflow changes for source system / HR ID visibility? — **Owner:** Xian Zhang Guo / Christopher Woo, per action items, but not explicitly confirmed in the thread — **By:** Not set

---

## Blockers

1. **Data field freeze (11 Aug) has two unresolved items: Owner Agency Code and the three new field additions**
   - **Blocked by:** No confirmed answer yet on whether Owner Agency Code is needed
   - **Impact:** If not resolved by 11 Aug, POCDEX's stated intent to avoid rework is compromised — field changes after freeze likely mean rework on both sides
   - **Resolution:** CareerCompass to confirm and update the Data Sharing Form before 11 Aug

2. **Potential production data in UAT environment — compliance exposure**
   - **Blocked by:** Unclear from the thread whether purge has actually happened yet, only that Data Office instructed it
   - **Impact:** IM8 compliance risk if not resolved quickly; Data Office has already escalated once (rejecting the original "purge after 31 Aug" plan)
   - **Resolution:** Needs immediate confirmation and action, independent of the broader UAT timeline

---

## Risks

1. **Governance/compliance risk on production data in UAT** (✅ Resolved 2026-08-07)
   - **Blocked by:** N/A — purge confirmed complete
   - **Impact:** IM8 compliance restored
   - **Resolution:** Purge confirmed today. Still need to send formal confirmation back to Grace Gan/Huiting Lian to close the loop with Data Office.

2. **UAT test coverage gap identified by POCDEX** (🟠 Medium-High)
   - **Blocked by:** Current UAT scenarios not yet expanded to cover lifecycle/Day-2/troubleshooting cases POCDEX flagged
   - **Impact:** If unaddressed, UAT may pass on scenarios that don't reflect real operational conditions — same "SIT passing on manually-generated files" pattern flagged in this week's CSC SIT progress review
   - **Resolution:** Incorporate POCDEX's 25+ proposed scenarios as they're delivered incrementally

3. **Field freeze slippage risk (11 Aug)** (🟡 Medium)
   - **Blocked by:** Owner Agency Code decision and field-list finalization both still open
   - **Impact:** Rework on both CareerCompass and POCDEX sides if fields change post-freeze
   - **Resolution:** Resolve Owner Agency Code question and update the Data Sharing Form before 11 Aug

---

## Timeline Risks

- **TIMELINE RISK:** The 11 Aug data field freeze is 4 days from this thread's date and directly touches this week's Priority 1 (data-trust consolidation) work — worth folding this field-freeze deadline into whatever tracker gets built today rather than tracking it separately, since it's part of the same POCDEX/data-trust risk surface as open items #55 and #56.
- **TIMELINE RISK:** "Purge immediately" (Data Office instruction) has no stated deadline in the thread but reads as more urgent than the 11 Aug field freeze — worth confirming today whether this has already been actioned, since the language suggests it should not wait for any other item on this list.
- **TIMELINE RISK:** POCDEX targeted 7 Aug (today, per this session's date context) for API integration testing support from Compass UAT to POCDEX Dev — worth confirming this environment testing is actually proceeding today as planned, given the separate infra connectivity blocker raised in this morning's Squad Sync (POCDEX API connectivity failing via Transit Gateway). These two items may be directly related: POCDEX says its side is ready for integration testing, but the Squad Sync flagged that connectivity itself is broken. Worth checking whether this email thread already reflects that blocker or predates it.

---

## Next Steps

**Immediate (Today/This week):**
- Confirm and action the production data purge in UAT; report status to Data Office
- Confirm Owner Agency Code MVP necessity
- Update Data Sharing Form with the three new fields (main job indicators) and Identity Resolution API fields (Source System, HR ID)

**Short-term (Before 11 Aug):**
- Freeze final data field list with POCDEX
- Begin incorporating POCDEX's proposed 25+ additional UAT scenarios
- Align UI/support workflow for source system / HR ID troubleshooting visibility with Xian Zhang Guo and Christopher Woo

**Follow-up Meeting:**
- Not specified in thread — recommend a short sync with Huiting/Data Office once the purge is confirmed, to close the governance concern explicitly rather than leaving it as an unconfirmed email reply

---

## Context for Future Reference

This thread is the same underlying risk surface as `open-items.md` #55 (Huiting Lian's escalated Compass data requirements ask — feasibility risk to August MVP) and #56 (POCDEX sync cadence / data-currency, unconfirmed since 2026-07-08). It's also exactly the material this week's Priority 1 ("consolidate the Products/POCDEX data-trust risk into one tracked artifact") was built to capture — worth feeding this thread's specifics (field freeze date, purge instruction, UAT coverage gap) directly into that tracker rather than treating it as a separate item.

The production-data-in-UAT concern is a new, more urgent thread than #55/#56 — it's a compliance instruction from the Data Office, not a data-modeling question, and probably deserves its own line in whatever tracker gets built today rather than being folded silently into the broader data-trust risk.

Also worth cross-checking against this morning's Squad Sync notes (`outputs/meeting-notes/2026-08-07-W32-otep-squad-sync.md`): POCDEX's stated 7 Aug target for API integration testing support may be directly affected by the infra connectivity blocker (Transit Gateway/POCDEX API) raised in that meeting. If POCDEX believes their side is ready for testing today but Compass-side connectivity is still broken, that's a discrepancy worth resolving today rather than letting both threads run separately.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original PM-authored summary</summary>

Full PM-authored summary covering: overall theme; key decisions/clarifications (additional API fields requested, Owner Agency Code unresolved, multiple employment positions handling); timeline & testing commitments from POCDEX (fixtures delivered 4 Aug, 20 personas prepared, field freeze 11 Aug, environment testing target 7 Aug, 2 additional personas requested); major concern on UAT test coverage (25+ additional scenarios proposed); data governance & IM8 concerns (Data Office position on production data in UAT, purge instruction); operational support improvements requested by POCDEX (source system/HR ID visibility, self-service diagnostics); PM view on three critical paths (lock requirements, strengthen UAT coverage, resolve governance risk); action items table.

</details>
