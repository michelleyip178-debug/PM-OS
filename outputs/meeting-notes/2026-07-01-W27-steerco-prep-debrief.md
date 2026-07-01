# Meeting Notes: Career Compass — Full Debrief (SteerCo 9 Jul Readiness)

**Date:** 2026-07-01

**Attendees:** Michelle, Imelda, Adrian, Mark, Thomas, Li Hui, Gek Khiang (plus reference to Rama, Pao Yi, Barry)

**Meeting Type:** Stakeholder review / SteerCo prep

**Duration:** Not specified (full working session, multiple topics)

---

## Summary

Broad review of Career Compass ahead of the 9 Jul SteerCo: competency profile UX, CIE (CV-based competency inference), opportunities ingestion, CMM framing, Coach Pal, and engineering delivery health. Product surfaces (profile, search, CIE upload, opportunities) are demoable and largely working. The exposure is everywhere the platform runs into governance, policy, or organizational gaps it can't resolve alone — competency duplication (~20%), an inconsistent CIE validation story, undefined proficiency-level policy, an unbriefed Coach Pal team, and a real data-corruption incident. Two items presented as "decisions" are actually still open (duplicate-labeling approach, CMM-vs-R1 resourcing trade-off) and should go into SteerCo flagged as pending, not settled.

---

## Decisions Made

1. **Competency profile UX locked**
   - **Why:** Three-section layout (core/functional/additional) with view more/less tested well; duplicate prevention rules defined (same name + different ID allowed only where necessary)
   - **Who decided:** Team, based on Imelda's walkthrough
   - **Impact:** Ready to demo; "self-declared" terminology removal is a known bug fix, not a design change

2. **Role-based competencies: hide/show only, no officer-add**
   - **Why:** Deliberate constraint to keep role-based competencies governed
   - **Who decided:** Team
   - **Impact:** Hidden items reappear at bottom of list when re-editing — confirm this is documented in the PRD

3. **CIE file support: DOCX now, text-based PDF next, image-only PDFs out of scope**
   - **Why:** Text-based PDF inference is feasible; image-only PDFs aren't reliably parseable
   - **Who decided:** Team
   - **Impact:** Sets expectations for what officers can upload at launch

4. **Opportunities ingestion approach confirmed**
   - **Why:** OTG data comes in with existing tags; Careers@Gov JDs need inferred (not pre-tagged) competencies
   - **Who decided:** Team
   - **Impact:** Near-term sprint work scoped: fix ministry logos, exclude restricted/ring-fenced opportunities from ineligible officers

5. **CMM framing for SteerCo: "fixes fragmented governance," not "another SSOT"**
   - **Why:** The Excel/duplication/manual-effort narrative is the stronger, more fundable story
   - **Who decided:** Adrian (narrative), team aligned
   - **Impact:** This is the framing to carry into the 9 Jul session — but see Risk below on whether it's locked in

6. **Coach Pal: no MVP commitment**
   - **Why:** Consistent with this morning's separate CoachPal discussion — go back to Mark to clarify expectations and define use cases before any integration decision
   - **Who decided:** Team
   - **Impact:** Matches the outcome already logged in [today's CoachPal meeting notes](2026-07-01-W27-coachpal-discussion.md)

7. **Cross-team retro scheduled**
   - **Why:** Environment instability and the uncommunicated data-change incident (Rama ingesting officer data under his own agency code, corrupting data) need a structured follow-up
   - **Who decided:** Li Hui to run it, with Rama, Pao Yi, Barry
   - **Impact:** Addresses a real operational incident, not just a process gap

**Flagged as NOT actually decided (per the source debrief's own caveat):**
- **Duplicate competency labeling** (append agency name? WOG-first vs. alphabetical sort?) — floated, not finalized
- **CMM prioritisation over R1 application-flow work** — informal alignment exists, but Li Hui and Thomas (the engineers who'd execute it) haven't signed off on the capacity trade-off

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Fix competency profile tooltips | @Michelle | Not specified | 🟡 Medium | 🔴 Not Started |
| Remove "self declared" terminology from UI | @Michelle | Not specified | 🟡 Medium | 🔴 Not Started |
| Add text-based PDF support to CIE upload, incl. error handling | @Michelle / Product Team | Not specified | 🟡 Medium | 🔴 Not Started |
| Export real/representative CVs for CIE validation (move beyond synthetic data) | @Gek Khiang / Product Team | Not specified — should be urgent given SteerCo timeline | 🔴 High | 🔴 Not Started |
| Build a defined CIE validation methodology (sample size, accuracy/precision-recall targets, human-review feedback loop) | @Product Team | Not specified — before 9 Jul ideally | 🔴 High | 🔴 Not Started |
| Analyse production competency data and quantify duplicate rate (refresh/validate ~20% figure) | @Product Team | Not specified | 🔴 High | 🔴 Not Started |
| Refine duplicate competency display/governance rule (labeling, sort order) — proposed, not final | @Imelda / Team | Not specified | 🟡 Medium | 🔴 Not Started |
| Fix Ministry logos on opportunity cards | @Thomas | Not specified | 🟢 Low | 🔴 Not Started |
| Extend opportunity search to competency-based filters (currently title/agency only) | @Thomas | Not specified | 🟡 Medium | 🔴 Not Started |
| Implement exclusion logic for restricted/ring-fenced opportunity types | @Thomas | Not specified | 🟡 Medium | 🔴 Not Started |
| Frame CMM business case (Excel/duplication/automation narrative) for DS/PS, working with Jamie/PMRP | @Adrian | Not specified — before 9 Jul | 🔴 High | 🔴 Not Started |
| Clarify Coach Pal/Max scope and expectations with Mark before any MVP embedding decision | @WD / Coach Pal owner | Not specified | 🔴 High | 🔴 Not Started |
| Share Coach Pal usage/query log analysis to ground the integration discussion | @Thomas | Not specified | 🟡 Medium | 🔴 Not Started |
| Run cross-team retro on environment stability and data-change communication | @Li Hui | Not specified | 🔴 High | 🔴 Not Started |
| Clarify CMM-vs-R1-opportunity resourcing trade-off with engineering before committing publicly | @Li Hui / Team | Before 9 Jul SteerCo | 🔴 High | 🔴 Not Started |
| Prepare SteerCo storyline and anticipated Q&A | @Team | Before 9 Jul | 🔴 High | 🔴 Not Started |

**Notes:**
- No due dates were specified for most items despite a hard SteerCo date of **9 Jul** — that's 8 days out. Several 🔴 High items (CIE validation methodology, CMM resourcing trade-off, SteerCo storyline prep, Coach Pal clarification with Mark) need explicit deadlines this week or they will not land before SteerCo.
- Coach Pal action items here duplicate/overlap with action items already logged in [today's separate CoachPal meeting](2026-07-01-W27-coachpal-discussion.md) — reconcile so the same task isn't tracked twice under different owners.

---

## Timeline Risks

- **TIMELINE RISK:** SteerCo is 9 Jul (8 days from today, 1 Jul). Multiple 🔴 High action items — CIE validation methodology, CMM-vs-R1 resourcing trade-off, SteerCo storyline/Q&A prep — have no due date attached. Given the source debrief's own conclusion ("if forced to name the single highest-priority fix before 9 Jul, it's tightening the CIE validation narrative"), the CIE validation item in particular needs a hard date this week, not "not specified."
- **TIMELINE RISK:** Hub tracker item #50 (CMM scope pressure) already notes this has surfaced "3 consecutive days" (29 Jun, 30 Jun, and now implicitly again here) with "no convincing answer beyond staffing flexibility assumptions" from Adrian. Recommend not treating this as a new action item each time — see Context below.

---

## Key Insights & Quotes

**Strongest signal — CIE validation inconsistency:**
The team gave two different explanations of what the model was tested on: first "mostly simulated CVs generated from the competency bank," later "web CVs and LLM-generated CVs." Only ~50 real resumes used for verification, no labelled dataset, no accuracy/precision-recall targets, no documented correction feedback loop. Mark pushed hard on this directly: "I cannot go out to agencies saying this is not real." This is flagged as the single highest-priority fix before SteerCo.

**Competency duplication, now quantified:**
~20% of agency-specific competencies are duplicates or near-duplicates (e.g., "project management" vs. "project mgmt"), spanning WOG and agency banks, sometimes same name/different ID. No agreed ownership rule when agencies claim overlapping competencies — described accurately as a governance decision, not an engineering one.

**Engineering fragility surfaced informally, not through a channel:**
Li Hui and Thomas flagged that R1 scope may already exceed capacity, especially with CMM layered on. A concrete incident occurred: Rama made uncommunicated data changes (ingesting officer data under his own agency code), corrupting data, with heavy reliance on Pao Yi as the sole person who can fix environment issues — a single point of failure.

**Coach Pal team was never briefed:**
Thomas and Li Hui (Coach Pal side) don't see Career Compass as "OTG 2.0" and have no roadmap tying Max to competency gaps or opportunity matching. This matches and reinforces what came out of [this morning's separate CoachPal session](2026-07-01-W27-coachpal-discussion.md) — same conclusion reached independently from two different conversations.

**Proficiency Level policy gap:**
PLs are acknowledged as subjective and inconsistent across agencies, with no policy on whether they should drive recommendations or recruitment decisions. Risk of building either policy-incompatible features or under-specified ones (e.g., a recommendation engine agencies will expect).

---

## Risks

Carrying forward the source debrief's risk table with cross-references to existing tracked items:

1. **CIE trust & validation — High.** No labelled dataset, no accuracy targets, contradictory training-data narrative, minimal real-CV testing. Biggest reputational exposure if presented to agencies as-is.
2. **Competency bank governance — High.** ~20% duplication rate; no ownership resolution rule. **Same root issue as hub tracker #18** (competency SSOT governance, reopened 2026-06-26 per Squad Sync — Cumulus/HRPS/policy sign-off still unconfirmed).
3. **SteerCo narrative misalignment — High.** Risk of CMM being presented as "another module" instead of "the fix for fragmented governance." Framing agreed in this meeting (see Decisions) but not yet locked with DS/PS.
4. **Coach Pal scope mismatch — Medium-High.** No shared roadmap between Compass and Coach Pal teams. Corroborated independently in [today's CoachPal meeting](2026-07-01-W27-coachpal-discussion.md).
5. **Engineering delivery capacity & environment stability — Medium-High.** R1 scope may exceed capacity; fragile demo/UAT environments; single point of failure (Pao Yi); one confirmed data-corruption incident already occurred.
6. **Role/profile data dependency (HRPS, Cumulus, EUSS job IDs) — Medium-High.** If upstream role-to-competency mappings fail, competencies may not surface correctly, generating support load. **Related to hub tracker #41** (competency dependencies + API calls, architecture resolved 2026-06-11 but hard-skip vs. optional field distinction with Léo still pending).
7. **Proficiency Level policy gap — Medium.** No agreed stance on PL-driven recommendations or recruitment use. Needs CDU/Policy input.
8. **Opportunity matching maturity — Medium.** Ingestion and display work, but officer-to-opportunity competency *matching* — the core value prop — isn't built yet.

**Confidence:** Risks — High (multiple participants independently raised the same concerns, and several are independently corroborated by today's separate CoachPal meeting). Decisions — Low-Medium (many discussions, few concrete commitments; two "decisions" are actually still open).

---

## Open Questions

- [ ] Who owns competency truth when two agencies claim overlapping/duplicate competencies? - **Owner:** Governance decision, escalate — **By:** Before SteerCo if possible, otherwise flag as open at SteerCo
- [ ] What is the actual CIE training/validation dataset composition — the team gave two different answers in this same meeting? - **Owner:** @Product Team / Gek Khiang - **By:** Before 9 Jul
- [ ] Does CMM get resourced in R1 at the cost of application-flow work, or does it wait? - **Owner:** @Li Hui + Adrian - **By:** Before 9 Jul (this is hub tracker #50, already flagged as needing "a single tracked escalation instead of resurfacing per meeting")
- [ ] Should proficiency levels drive recommendations or recruitment decisions? - **Owner:** CDU/Policy - **By:** Not specified
- [ ] What is the SteerCo storyline and anticipated Q&A? - **Owner:** @Team - **By:** Before 9 Jul

---

## Blockers

1. **CIE validation story is inconsistent, not just early-stage**
   - **Blocked by:** No labelled dataset, no defined accuracy targets, contradictory explanation of training data
   - **Impact:** Highest reputational risk going into SteerCo — a sharp stakeholder will catch the inconsistency
   - **Resolution:** Build validation methodology and reconcile the training-data narrative before 9 Jul

2. **CMM-vs-R1 resourcing trade-off unresolved**
   - **Blocked by:** No leadership trade-off decision; engineers who'd execute (Li Hui, Thomas) haven't signed off
   - **Impact:** Matches hub tracker #50 exactly — this is a recurring, unresolved escalation, not a new issue
   - **Resolution:** Recommend a single tracked escalation to Mark/GK rather than resurfacing it meeting by meeting (per existing tracker guidance)

3. **Environment instability, single point of failure**
   - **Blocked by:** Heavy reliance on Pao Yi to fix environment issues; no monitoring during idle stretches
   - **Impact:** One data-corruption incident already occurred (Rama, uncommunicated agency-code change)
   - **Resolution:** Cross-team retro scheduled — outcome should include a communication protocol, not just a fix

---

## Next Steps

**Immediate (This Week):**
- Reconcile CIE validation narrative — get one consistent, accurate answer on training/test data composition
- Escalate CMM-vs-R1 trade-off as a single tracked item (not a fresh ask) — reference hub tracker #50
- Prepare SteerCo storyline and anticipated Q&A
- Reconcile Coach Pal action items between this meeting and this morning's separate CoachPal session

**Short-term (Next 2 weeks):**
- Cross-team retro on environment stability (Li Hui, Rama, Pao Yi, Barry)
- Duplicate competency governance rule — move from "proposed" to a decision, with an owner named
- Confirm CIE PDF/DOCX error-handling and validation methodology work is scheduled into a sprint

**Follow-up Meeting:**
- **Date:** 9 Jul (SteerCo)
- **Purpose:** Present Career Compass status — competency profile, CIE, opportunities, CMM framing — with known-open items flagged explicitly rather than presented as resolved
- **Attendees:** Mark, GK, plus consolidated-narrative demo trio (Michelle, Imelda, Rama, Pow Hwee per existing two-tier demo agreement)

---

## Context for Future Reference

**Michelle's SteerCo role:** Per the existing two-tier demo format decision (2 Jun), Michelle's job for the 9 Jul session is co-prepping the consolidated-narrative demo with Imelda, Rama, and Pow Hwee — not authoring the North Star brief, transition plan, or gap analysis, which are for-info and owned by other teams. This debrief should feed the demo prep, not become a new deliverable Michelle owns solo.

**CMM scope pressure is a recurring, tracked issue — not new.** Hub tracker item #50 already documents this surfacing on 29 Jun (BO Working Level), 30 Jun (Squad Sync, ~16 man-weeks estimated), and now again here. The tracker's own recommendation is "a single tracked escalation instead of resurfacing per meeting" — worth raising that directly with Adrian rather than letting this become action item #4 on the same unresolved question.

**Competency governance ties to existing open items #18 and #41** in the hub tracker — the SSOT governance question (who authorises the canonical competency list — Cumulus, HRPS, policy sign-off) was already reopened 2026-06-26 and remains unresolved. The ~20% duplication figure quantifies the same underlying gap rather than introducing a new one.

**Coach Pal conclusion matches this morning's separate meeting** ([2026-07-01-W27-coachpal-discussion.md](2026-07-01-W27-coachpal-discussion.md)) almost exactly — no shared roadmap, no MVP commitment, go back to Mark. Two independent conversations reaching the same conclusion strengthens the case, but also means the action items should be merged, not duplicated across two trackers.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw meeting debrief</summary>

[Full debrief as provided by Michelle — Career Compass Full Meeting Debrief covering competency profile UX, CIE, opportunities ingestion, CMM, Coach Pal, engineering delivery health, risks table, decisions, action items, and bottom line — condensed and cross-referenced above]

</details>
