# Meeting Notes: POCDEX Day-2 Discovery — Slack Discussion

**Date:** 2026-08-14

**Attendees:** Adrian Ang (PSD), Michelle Yip (PSD), Rama Moorthy (PSD), Imelda Mo (PSD)

**Meeting Type:** Async team discussion (Slack thread)

**Related:** [OpsPortal Day-2 Traceability PRD](../prds/2026-08-13-W33-opsportal-day2-traceability-prd.md) · [Discovery Scope & Plan](../analyses/2026-08-13-W33-ops-portal-day2-discovery-scope.md)

---

## Summary

Adrian kicked off the Day-2 discovery Michelle was assigned to lead (per yesterday's Slack ask and the discovery scope doc). Discussion converged on the same conclusion the scope doc already reached: this needs more discovery before committing to a build approach. Two new data points from Michelle's pilot-agency analysis, and Rama surfaced two new technical clarifications not previously captured — NRIC/FIN ingestion and the Ops Portal's actual side-by-side display mechanics.

---

## Decisions Made

1. **Further discovery needed before choosing a re-ingestion approach**
   - **Why:** "Last modified date" isn't a single well-defined signal — Rama flagged multiple scenarios (HR-system-triggered vs. POCDEX-triggered updates, multiple employment position records, partial field changes) that all affect what "changed" even means
   - **Who decided:** Imelda (confirmed), consistent with Rama's phased-approach recommendation
   - **Impact:** Confirms the discovery scope doc's existing plan — this isn't ready to size into engineering effort yet; Michelle's POCDEX file comparison (below) is the next concrete step, not a design decision

2. **Phased approach preferred over full automation, starting with simpler use cases**
   - **Why:** Rama's recommendation, given the ambiguity in "last modified date" and multiple update-trigger scenarios
   - **Who decided:** Rama (proposed), Imelda (aligned)
   - **Impact:** Reinforces the discovery doc's existing scope split — TC1-14 priority rows first, full automated re-ingest explicitly out of scope for this round

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Compare POCDEX files from two weeks apart to identify typical change patterns | Michelle | Not stated | High | 🔴 Not Started |
| Confirm whether the Ops Portal is built and deployed | Michelle (asking) | Not stated | High | 🔴 Not Started — duplicates step 1 of discovery scope doc, still open |
| Provide list of data fields taken from POCDEX | Rama (implied — Michelle asked) | Not stated | Medium | 🔴 Not Started |
| Provide list of fields affecting competencies besides Job ID | Rama (implied — Michelle asked) | Not stated | Medium | 🔴 Not Started |
| Size scope, complexity, and effort for MVP fast-follow (probable use cases: transfers, secondments, job family changes) | Michelle | Not stated | High | 🟡 In Progress — discovery scope doc already drafted 13 Aug |

**Notes:**
- No due dates were set in this thread for any item. Given Adrian's framing yesterday ("give stakeholders assurance we're on it"), these should get dates this week rather than sit open-ended.
- The Ops Portal deployment-status question is asked here for a second time — it was already flagged as step 1 of the discovery plan yesterday and is still unconfirmed. Worth closing this loop directly with Rama rather than re-asking in threads.

---

## Key Insights & Quotes

**New data surfaced (Michelle, pilot-agency stats):**
- 6 pilot agencies, 5,720 active officers: 279 missing job metadata (emails, job family, job function, job grade, designation)
- 152,895 current active officers: CC cannot handle NPL duration, worker/employment type, deployment/holding-position indicators, or timestamps
- Critical gap: **no "last modified date" field exists in the current data request to POCDEX at all** — this isn't a definition problem alone, it's a missing field in the data contract

**Technical clarification (Rama):**
- NRIC/FIN is confirmed ingested into CC (answers part of the "identity matching" open question from yesterday's discovery scope doc — though which field is the actual join key for WOG AD login matching is still unconfirmed)
- Ops Portal already displays POCDEX employment data alongside CC data, including import timestamps — this is more mechanism detail than the discovery doc had; worth folding into the "what's confirmed built vs. not" table there once deployment status is confirmed

**Scope framing (Adrian):**
- Prefers an automated solution "unless the effort is too high" — a soft preference, not a hard requirement, which leaves room for the phased/manual-first approach Rama and Imelda converged on
- Reiterated the core MVP gap: initial login retrieves POCDEX data, but subsequent logins don't detect changes for re-ingestion — matches the PRD's problem statement verbatim

---

## Open Questions

- [ ] Is the Ops Portal actually built and deployed, or still a prototype? - **Owner:** Rama - **By:** Not stated (this is the second time this has been asked — treat as blocking)
- [ ] What is the definitive "last modified date" definition CC should use, given multiple update-trigger scenarios? - **Owner:** Rama / Michelle - **By:** Not stated
- [ ] Should a "last modified date" field be added to the data request to POCDEX, since it's currently absent entirely? - **Owner:** Michelle (to raise with POCDEX/Huiting) - **By:** Not stated
- [ ] What data fields does OTEP actually take from POCDEX today, and which fields affect competency matching besides Job ID? - **Owner:** Rama - **By:** Not stated

---

## Blockers

1. **Ops Portal deployment status unconfirmed — again**
   - **Blocked by:** No response yet from Rama on whether it's live or still prototype
   - **Impact:** Every downstream discovery step (write-back scoping, POCDEX file comparison relevance, sizing estimate) assumes an answer to this
   - **Resolution:** Direct 1:1 confirmation with Rama rather than a third async ask

---

## Next Steps

**Immediate (This Week):**
- Michelle: pull two POCDEX file snapshots two weeks apart and diff them for typical change patterns
- Michelle: get direct confirmation from Rama on Ops Portal deployment status (don't let this sit as an unanswered thread question a third time)
- Michelle: request the POCDEX field list and competency-affecting fields list from Rama

**Short-term (Next 2 weeks):**
- Fold this thread's findings (NRIC/FIN confirmed, no last-modified-date field exists, Ops Portal display mechanics) into the discovery scope doc's "what's confirmed built vs. not" table
- Raise the missing "last modified date" field gap with Huiting/POCDEX as part of the TC1-14 joint session, since it blocks any timestamp-based detection approach

**Follow-up Meeting:**
- No date set — this is still async. Given the "assurance" framing from Adrian, consider whether this needs a scheduled joint session with Rama rather than continuing over Slack.

---

## Context for Future Reference

This thread doesn't introduce a new workstream — it's Adrian and Rama's async input into the discovery Michelle already scoped yesterday (see linked PRD and discovery doc). The two new facts that matter most: (1) there is no "last modified date" field in the current POCDEX data request at all, which changes the change-detection question from "which definition of last-modified do we use" to "we need to add this field first," and (2) NRIC/FIN is confirmed ingested, partially answering Adrian's identity-matching question from yesterday.

**Open items to update:** This thread doesn't have its own open-items.md row yet — it's covered under the existing OpsPortal Day-2 PRD (Team Kickoff stage). No new item needed unless the "add last-modified-date field to POCDEX request" question needs independent tracking.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw Slack digest</summary>

@Adrian ANG (PSD) initiated a discussion on improving the process for updating officer information in Career Compass (CC) by detecting changes from POCDEX, assigning @Michelle YIP (PSD) to lead a discovery phase. The team explored leveraging an admin ops portal to automate re-ingestion of data, with @Adrian ANG (PSD) preferring an automated solution unless the effort is too high, and @Michelle YIP (PSD) proposing daily refreshes flagged for user review. Key challenges identified include defining "last modified date" and handling various employment lifecycle events, leading to a decision for further discovery to understand data drift, with @Rama MOORTHY (PSD) confirming NRIC/FIN ingestion and @Michelle YIP (PSD) to analyze POCDEX file changes.

@Adrian ANG (PSD) highlighted the operational challenge of manually patching officer information due to changes detected via date time stamps and proposed a quick discovery phase led by @Michelle YIP (PSD) to size the scope, complexity, and effort for MVP fast follow, focusing on probable use cases like transfers, secondments, and job family changes.

@Adrian ANG (PSD) stated that the MVP's primary issue is that initial logins retrieve POCDEX profile data, but subsequent logins do not detect changes for re-ingestion, suggesting an automated detection and re-ingestion process or utilizing the admin ops portal to call POCDEX live for automation and adhoc patching.

@Michelle YIP (PSD) suggested designing the ops portal for daily POCDEX profile refreshes, flagging changes for users to review and decide whether to patch CC records or escalate to POCDEX, HRPS, or Cumulus, but noted the need to understand the impact of patching fields like agency and job family.

@Michelle YIP (PSD) provided statistics for 6 pilot agencies, indicating that out of 5,720 active officers, 279 are missing job metadata (emails, job family, job function, job grade, designation), and for 152,895 current active officers, CC cannot handle NPL duration, worker/employment type, deployment/holding-position indicators, and timestamps, critically noting the absence of the last modified date in the data request to POCDEX.

@Rama MOORTHY (PSD) clarified that NRIC/FIN is ingested into CC and raised questions regarding the definition of "last modified date" due to multiple scenarios, such as updates triggered by underlying HR systems vs. POCDEX, multiple employment position records, and partial data changes, concluding that CC needs further assessment for a suitable approach.

@Rama MOORTHY (PSD) explained that the Ops Portal displays POCDEX employment data alongside CC data, including import timestamps, and emphasized the need for clarity on what data can be updated and under what circumstances, suggesting a phased approach starting with simpler use cases, which aligns with @Imelda MO (PSD)'s decision for more discovery on data drift.

@Michelle YIP (PSD) plans to compare POCDEX files from two weeks apart to identify typical changes and asked if the ops portal is built and deployed, also requesting a list of data fields taken from POCDEX and fields affecting competencies besides job ID.

</details>

---

*Generated: 2026-08-14*
