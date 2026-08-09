# Meeting Notes: CSC Integration SIT Progress Review

**Date:** 2026-08-06

**Attendees:** Rama Moorthy, Sy En Lee, Aderick Cheng (GovTech), Pow Hwee Tan, Kimberly Ngu, Boon Siang Teh, Mindy Wong, Ziheng Tay (Temus) — cross-agency: PSD, CSC, GovTech, Temus

**Meeting Type:** SIT progress review — CSC/DLE integration (WS1–WS4)

**Duration:** Not specified

---

## Summary

Overall tone was positive — several workstreams are functionally working (JumpStart recommendations, CFT files visible on receipt) and the team is actively unblocking each other in real time (Sy En generated the learner file on Kimberly's behalf; Aderick uploaded it live during the meeting). But the meeting also surfaced the **root cause behind the 5 Aug CFT non-receipt issue already flagged in this week's tracking**: files are landing but the "file ready for download" webhook event isn't firing, so the pipeline can't run end-to-end automatically — every success so far has depended on manual confirmation. The team reaffirmed the 31 Aug UAT target without resolving that gap, agreed to test WS3 over internet routing as a temporary workaround for the still-unresolved intranet DNS issue, and marked JumpStart complete. The biggest unaddressed risk: SIT is currently being validated with manually generated files, not genuine system-generated ones, and nobody has yet defined what UAT-ready actually requires per workstream.

---

## Decisions Made

1. **Use internet routing as a temporary WS3 test path, in parallel with the still-unresolved intranet DNS issue**
   - **Why:** Connectivity tests suggest functionality should be equivalent over either path; unblocks SIT progress while the intranet service request (filed 5 Aug, still open) continues
   - **Who decided:** Team consensus, Pow Hwee Tan confirmed outcome shouldn't materially change once routing reverts to intranet
   - **Impact:** Converts an immediate SIT blocker into a deferred production-readiness risk — UAT may start on a connectivity path that isn't the intended production architecture. The intranet route stays open as an unresolved dependency.

2. **JumpStart recommendation workstream (WS4) marked complete**
   - **Why:** Course recommendation retrieval is now working; Rama confirmed with Temus that there are no outstanding connectivity issues
   - **Who decided:** Rama Moorthy, team consensus
   - **Impact:** Removes WS4 from the critical path — but data-governance validation (whether JumpStart's course data matches CSC's staging source) is still open, so "complete" here means SIT-level connectivity, not full data alignment.

3. **SIT activities may spill into next week if infrastructure/CFT items aren't resolved in time**
   - **Why:** Explicit acknowledgment that not everything will close within the original window
   - **Who decided:** Team consensus
   - **Impact:** This is the clearest signal that the program is already eating into its contingency buffer between SIT close and UAT start.

4. **UAT target reaffirmed at 31 Aug, unconditionally**
   - **Why:** Ziheng Tay (Temus) explicitly restated the team is working toward the 31 Aug staging/UAT milestone
   - **Who decided:** CSC/Temus team
   - **Impact:** No one proposed moving the date despite several open SIT dependencies (CFT eventing, WS3 infra routing, learner-file validation) not being closed. This is now a committed program assumption, not a target contingent on SIT closing cleanly.

5. **Learner-file onboarding proceeds using manually generated test data**
   - **Why:** Removes dependency on waiting for a specific individual (Kimberly) to be available
   - **Who decided:** Sy En Lee generated the file; Aderick Cheng uploaded it to the OTEP CFT workflow live during the meeting
   - **Impact:** Unblocks WS2 short-term, but increases the case for a dedicated UAT data-validation phase later, since SIT is not yet exercising genuine production-generated files.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Investigate why "file ready for download" event is not received | Mindy Wong + CFT/CSC team | No date set | 🔴 Critical | Not Started — this is the root cause behind the WS1/WS2 non-receipt issue flagged 5 Aug |
| Confirm source of missing download events | CSC/CFT stakeholders | No date set | 🔴 Critical | Not Started |
| Ensure learner file with required records is available | Kimberly Ngu / CSC | No date set | 🔴 High | ✅ Done — Sy En generated on her behalf |
| Upload learner file to CFT | Aderick Cheng | No date set | 🔴 High | ✅ Done — uploaded live during meeting |
| Validate learner load results | SIT team | No date set | 🟡 Medium | Not Started — blocked until the eventing issue is understood, since success can't be confirmed automatically |
| Follow up ITSM request (WS3 intranet) | Boon Siang Teh + infra team | No date set | 🔴 Critical | Open — same service request flagged 5 Aug, no resolution date |
| Provide API endpoint list for VAPT | Integration team | No date set | 🟡 Medium | Not Started |
| Provide internet egress details for whitelisting | Aderick Cheng | No date set | 🟡 Medium | Not Started |
| Configure whitelist and verify connectivity | Pow Hwee Tan + team | No date set | 🟡 Medium | Not Started |
| Validate whether JumpStart data originates from same CSC staging source | Sy En Lee | No date set | 🟡 Medium | Not Started |
| Check if scheduler still sends data from staging | CSC team | No date set | 🟡 Medium | Not Started |
| Confirm course catalogue alignment between environments | CSC team | No date set | 🟡 Medium | Not Started |

**Notes:**
- Almost every action item has no due date — same pattern flagged in prior standups this week.
- The eventing investigation (Mindy Wong) is the single highest-leverage item: nothing downstream of CFT ingestion can be trusted as automated until this is resolved.

---

## Key Insights & Quotes

**On the CFT eventing gap (the actual root cause of this week's WS1/WS2 non-receipt issue):**
- Files are visible on the receiving side and teams can manually confirm they exist, but the "file ready for download" event is not being received — so the pipeline cannot run end-to-end automatically. Current "success" relies on manual checks, which masks that the workflow is still incomplete.

**On what SIT has actually proven vs. what it hasn't:**
- The real business process isn't "file arrives" — it's "file generated → transferred → event emitted → ingestion triggered → data processed successfully." That full chain has not yet been demonstrated; only the first step (arrival) has been shown repeatedly.

**On data authenticity:**
- Several participants explicitly stated that SIT files are not the actual system-generated files that production will use — they're manually created or manually generated test data. A workflow can pass SIT on these and still fail once genuine generated files are introduced.

**On WS3's internet-routing workaround:**
- Pow Hwee Tan: outcome should not materially change once routing reverts to intranet — but this is an assumption, not yet proven, and the intranet path remains an open dependency.

---

## Risks (PM-flagged, not explicitly raised as risks in the meeting itself)

1. **UAT may start validated against fake assumptions**
   - **Why it matters:** SIT currently relies on manually generated/sample files. A workflow that passes SIT this way can still fail once real, system-generated files are introduced in UAT or production.

2. **End-to-end automation has not actually been demonstrated**
   - **Why it matters:** Every "file arrived" success has depended on manual confirmation because the download-ready event isn't firing. The team has been celebrating file arrival, but that's the easy 1/5 of the real chain (generate → transfer → event → ingest → process).

3. **VAPT schedule is threatened by unresolved infrastructure**
   - **Why it matters:** VAPT scoping work is proceeding in parallel with unresolved network routing and incomplete API exposure details. If WS3's infra questions drag further, VAPT may need to be re-scoped — compounding the VAPT date conflict already tracked separately (16 Oct vs. 23 Oct).

4. **Operational support ownership is undefined**
   - **Why it matters:** Every blocker this week required ad-hoc intervention from Rama, Sy En, or Aderick personally. Nobody has been asked who monitors failed transfers, responds to missing events, or validates daily loads during actual operation (BAU) — this becomes a real gap once SIT-era hand-holding stops.

5. **No defined data reconciliation strategy**
   - **Why it matters:** With full loads, delta loads, manual files, and JumpStart-generated content all in play, there's no stated answer to: how do we know all records arrived? How are missing records detected? How are duplicates handled? How are failed deltas recovered? These are UAT-critical, not nice-to-haves.

---

## Escalation View (as if PM were stepping in)

| Level | Item |
|---|---|
| 🔴 Red | Missing CFT "file ready for download" events |
| 🔴 Red | Infrastructure/ITSM dependency blocking WS3 |
| 🔴 Red | No proof of genuine end-to-end automation yet |
| 🟡 Amber | JumpStart/CSC dataset alignment unvalidated |
| 🟡 Amber | Learner-file loading/verification incomplete |
| 🟡 Amber | VAPT scope not finalized |
| 🟢 Green | Recommendation integration (WS4 connectivity) |
| 🟢 Green | Course data SIT validation |
| 🟢 Green | Cross-team collaboration and responsiveness |

---

## Open Questions

- [ ] Can SIT be declared complete if CFT event-triggering is still failing? — **Owner:** Unassigned — **By:** Before SIT sign-off
- [ ] What objective exit criteria must each workstream satisfy before entering UAT? — **Owner:** Unassigned — **By:** Before UAT prep starts (already flagged separately as a cross-workstream gap)
- [ ] Has the team tested with actual system-generated files, not manually-created SIT files? — **Owner:** Unassigned — **By:** Before UAT
- [ ] What's the contingency if intranet routing is still unresolved by UAT start? — **Owner:** Unassigned — **By:** Before 31 Aug
- [ ] Who owns UAT data reconciliation, and how will full-load/delta-load records be confirmed to match across CSC, JumpStart, and Compass? — **Owner:** Unassigned — **By:** Before UAT

---

## Blockers

1. **CFT "file ready for download" event not firing**
   - **Blocked by:** Root cause not yet identified — investigation assigned to Mindy Wong and the CFT/CSC team
   - **Impact:** Blocks true end-to-end automation for WS1 and WS2; this is the same issue behind this week's WS1/WS2 file non-receipt already logged in the timeline RAID log (5 Aug)
   - **Resolution:** Open, no date

2. **WS3 intranet connectivity still unresolved**
   - **Blocked by:** ITSM request pending with central infra team
   - **Impact:** Testing proceeding via internet routing as a workaround, but production-intended path unproven; downstream VAPT scope risk
   - **Resolution:** Boon Siang Teh following up; no date

---

## Next Steps

**Immediate:**
- Chase Mindy Wong's investigation into the missing eventing — this is now the single highest-leverage unblock, superseding the earlier framing of "the file just hasn't landed yet"
- Raise the 5 PM readiness questions (below) directly with Rama/CSC before SIT is declared complete

**Short-term:**
- Define objective SIT exit criteria per workstream, since "declare SIT complete" currently has no stated bar
- Get explicit answers on data reconciliation ownership before UAT prep begins

**Follow-up Meeting:**
- Not specified in source material

---

## Context for Future Reference

This meeting directly explains the mechanism behind the WS1/WS2 CFT non-receipt issue already logged in `outputs/analyses/2026-08-05-W32-timeline-raid-log.md` (5 Aug) and reflected in the plan/grooming docs: files were triggered via correctly-configured webhooks and never received. This meeting names the actual root cause under investigation — the "file ready for download" event isn't firing — and assigns it to Mindy Wong, which was previously "Unassigned" in the plan doc's WBS (item 2.1.1).

**Top 5 UAT Readiness Questions (PM-authored, worth carrying into the next CSC forum):**
1. Can we declare SIT complete if CFT event-triggering is still failing?
2. What objective exit criteria must each workstream satisfy before entering UAT?
3. Have we tested with actual system-generated files rather than manually-created SIT files?
4. What is the contingency plan if intranet routing is still unresolved by UAT start?
5. Who owns UAT data reconciliation, and how will we confirm that full-load and delta-load records match between CSC, JumpStart, and Compass?

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original executive summary</summary>

Full PM-authored executive summary covering: overall tone (positive, tactical workarounds emerging); What Went Well (SIT producing tangible results, team actively removing blockers, good dependency traceability from Rama); What Didn't Go Well (CFT eventing issue unresolved, manual file handling risk, WS3 infrastructure uncertainty, shallow UAT readiness discussion); 5 key decisions (internet routing workaround, JumpStart complete, SIT spillover acknowledged, UAT target reaffirmed at 31 Aug, learner-file onboarding via generated test data) each assessed for UAT-readiness impact; action items by category (CFT/Eventing, Learner File, Infrastructure, Data Validation); 5 PM-flagged risks not explicitly raised in the meeting (fake-assumption UAT, unproven end-to-end automation, VAPT schedule threat, unclear operational ownership, data integrity/reconciliation gap); Red/Amber/Green escalation view; 3 "important non-decisions" that could become UAT risks; and a closing list of 5 UAT readiness questions.

</details>
