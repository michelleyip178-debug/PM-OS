# Meeting Notes: OTG Operational Review — Employment Profile Changes

**Date:** 2 September 2026 (W36)

**Attendees:** Michelle Yip, Rama Moorthy, Adrian Ang, Imelda Mo, Adrian Lo, Kingsley Low, Pow Hwee Tan (referenced), Compass PM + engineering

**Meeting Type:** Team planning — operational knowledge transfer, scope input for UAT, architecture direction

**Source:** Executive assessment (self-authored judgement layer)

**Follow-up to:** [2026-09-01-W36-grooming-employment-profile-changes.md](2026-09-01-W36-grooming-employment-profile-changes.md) — this is the "another meeting tomorrow to prioritise" that session ended on.

---

## Summary

Michelle walked the Compass team through OTG's real operational incidents (email collisions, duplicate records, multi-hatting, secondments, NPL, missing role mappings) rather than theoretical scenarios. The team converged on NRIC-first identity resolution as the right primary key and confirmed the profile-unification direction over OTG's legacy profile-selection model. Adrian's read at the end: most cases raised are already broadly covered by the proposed architecture, so no new scenario class invalidates the current design. The session's main output is a richer set of production scenarios for Imelda to turn into UAT test cases.

The reframe worth carrying forward: **the biggest remaining risk is no longer identity resolution. It is governance of employment-profile data and agreeing the business behaviour when an officer has multiple active or changing roles.** Most OTG issues originate upstream (HR systems, POCDEX/Product data), and NRIC resolution does not fix bad upstream data.

---

## Decisions Made

1. **Proceed with NRIC-based identity resolution and profile unification.**
   - **Why:** Multiple participants independently converged that keying on NRIC rather than email or individual officer IDs removes most identity and profile-fragmentation problems. Proposed flow: log in → resolve officer via NRIC → retrieve all active officer IDs for that NRIC → build a consolidated employment and competency view.
   - **Who decided:** Team consensus (engineering + product).
   - **Impact:** Confirms the direction the 1 Sep grooming session called the "architectural gatekeeper." Directional, not a source-of-truth spec — see Open Questions.

2. **Pursue employment-profile consolidation across multiple active officer records, not OTG's legacy profile-selection model.**
   - **Why:** OTG lets the user self-select which profile to view. Compass will instead merge the active records into one view.
   - **Who decided:** Team.
   - **Impact:** Rules out replicating OTG's editable-role-profile and user-selection behaviours. The multi-hat display rules this creates are unresolved (see What Didn't Go Well).

3. **Use OTG incidents and operational cases as input for Compass test cases and acceptance criteria.**
   - **Why:** Real production scenarios are a better signal for UAT scope than a fully theoretical list.
   - **Who decided:** Team, Michelle's OTG experience as the source.
   - **Impact:** Imelda owns converting the meeting's scenarios into test-coverage inputs. Feeds the 118+ → cut exercise still open from 1 Sep.

4. **Preserve historical competency and profile data on employment change, even without a dedicated UI in the first release.**
   - **Why:** The data must not be lost; the presentation can come later.
   - **Who decided:** Team.
   - **Impact:** Storage requirement is in scope for MVP; the historical-competency UX is explicitly deferred.

5. **Compass is not expected to resolve upstream HR or Product data defects.**
   - **Why:** Wrong records in HRPS, Cumulus, or Product are outside Compass's control; Compass consumes what it is given.
   - **Who decided:** Team acknowledgement.
   - **Impact:** Sets the boundary, but leaves upstream ownership, monitoring, and prevention unassigned — flagged as the top systemic risk below.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Convert the meeting's OTG scenarios into UAT/test-case coverage inputs; prioritise and refine | Imelda Mo | Not stated — feeds the 118+ cut | 🔴 High | 🔴 Not Started |
| Walk through the solution architecture (follow-up outside this meeting) | Rama Moorthy, Adrian Lo, Kingsley Low | Not stated | 🔴 High | 🔴 Not Started |
| Validate the architecture with Pow Hwee Tan | Engineering / Product | Not stated | 🟡 Medium | 🔴 Not Started |
| Define acceptance criteria for employment-profile changes (promotion, transfer, secondment, multi-hat) | PM team | Not stated | 🔴 High | 🔴 Not Started |
| Produce detailed use cases and expected behaviours | PM team | End of week (target discussed, not locked) | 🔴 High | 🔴 Not Started |
| Estimate implementation effort once requirements stabilise (incl. QA and UAT planning) | Engineering team | After requirements stabilise | 🟡 Medium | 🔴 Not Started |
| Share OTG reference materials and links for Compass team review | Michelle Yip | Not stated | 🟡 Medium | 🔴 Not Started |
| Follow up with Product / POCDEX on edge-case handling (shared mailboxes, employment transitions) | Team | Not stated | 🟡 Medium | 🔴 Not Started |

**Notes:**

- Almost every item has no hard date despite capacity pressure (2.5 sprints to the end-Sept freeze). Push for real dates.
- "Define acceptance criteria" and "produce detailed use cases" are the critical path — effort estimation and UAT prep both wait on them.

---

## Key Insights & Quotes

**On the core reframe:**
- Most OTG operational issues are not caused by OTG. They come from how upstream HR systems and POCDEX/Product data represent officers, emails, movements, secondments, and concurrent employments. NRIC resolution fixes identity resolution; it does not fix bad upstream data.

**On NRIC as the key:**
- Repeated agreement from engineering and product that resolving by NRIC and fanning out to all active officer IDs "should dramatically reduce OTG-style edge cases."

**On scope confidence:**
- Adrian Ang, near the end: most cases raised are already broadly covered by the proposed architecture. No fundamentally new employment-profile scenario class emerged.

**On OTG behaviours Compass will not copy:**
- Editable role profiles, user self-selection of profiles, and OTG's competency behaviour were discussed at length and largely concluded to be OTG-specific quirks, not requirements for Compass.

---

## Open Questions

- [ ] **Multi-hat officer: one profile or multiple?** What title displays? Which email? How are competencies combined? Are historical and active roles separated? — **Owner:** PM team — **By:** feeds end-of-week use cases
- [ ] **Identity source-of-truth when two active records disagree** (grade, agency, title) — which system's job data is primary? — **Owner:** Rama (technical framing was his) — **By:** architecture walkthrough
- [ ] **NPL (No Pay Leave):** officers on NPL currently cannot log in; there is future demand; SJR 2027 may depend on it. Product/delivery decision? — **Owner:** unassigned — **By:** not set
- [ ] **Upstream data-defect ownership, monitoring, and prevention** — who owns it, how is it detected before user impact? — **Owner:** unassigned — **By:** not set
- [ ] **Historical competency presentation** — data is preserved; how (if at all) is it surfaced? — **Owner:** PM team — **By:** post-MVP
- [ ] **Proactive detection of profile-transition problems** — no monitoring approach discussed for Compass. — **Owner:** unassigned — **By:** not set

---

## Blockers

1. **Acceptance criteria for employment-profile changes are not yet defined.**
   - **Blocked by:** Multi-hat business rules being undecided (what an officer sees, what a manager sees, how profile switching works).
   - **Impact:** Effort estimation, UAT scenario prioritisation, and use-case production all wait on this.
   - **Resolution:** PM team to land the multi-hat display rules this week, ahead of the end-of-week use-case target.

2. **NPL support has demand but no product decision.**
   - **Blocked by:** No owner, no forum assigned to decide it.
   - **Impact:** If SJR 2027 depends on NPL login and it stays parked, it becomes a late surprise.
   - **Resolution:** Name an owner and route it to a decision, even if the decision is "not for this release."

---

## Risks We Are Not Fully Addressing

| # | Risk | Why it matters | Level |
|---|------|----------------|-------|
| 1 | **Source data quality** | Team confidence that Compass "solves identity" is outrunning reality. If HRPS / Cumulus / Product records are wrong (missing entirely, transfers not reflected, email changes not propagated, duplicates persisting for months), Compass consumes the wrong data. Outside Compass's control, and no ownership/monitoring/prevention was defined. | 🔴 High |
| 2 | **Multi-hat UX expectations undefined** | Architecture can merge competencies, store history, and support multiple job IDs, but the team has not agreed what officers see, what managers see, or how profile switching works. Likely to surface as a late-stage UAT issue. | 🔴 High |
| 3 | **Historical competency treatment** | Agreement to preserve past-role, current-role, additional, and self-declared competencies. No agreement on presentation or future UX. | 🟡 Medium |
| 4 | **No proactive detection of profile-transition problems** | OTG finds issues only when an officer complains, a POC notices, or an audit runs. No monitoring approach discussed for Compass. | 🟡 Medium |
| 5 | **NPL and personal-email use cases** | OTG handles some NPL scenarios manually; Compass does not. SJR ambitions may require it. No mitigation exists. | 🟡 Medium |

---

## Timeline Risks

- **The end-of-week target for detailed use cases and expected behaviours is soft and sits on the critical path.** Effort estimation, UAT prioritisation, and the 118+ scenario cut all depend on it. No hard date was set. Against the end-September development freeze (per [Adrian's 31 Aug sync](2026-08-31-W36-adrian-biweekly-sync.md)), 2.5 sprints remain — a slipping requirements target compresses build and UAT prep directly. Push for a committed date at the architecture walkthrough.

- **The 50-of-118 vs ~11-case reconciliation is still open** (flagged in the 31 Aug sync and the 1 Sep cleanup). This meeting adds OTG scenarios as a third input to test-case scope. Imelda's prioritisation work needs all three reconciled — the 118→82→41 Confluence cut, the 50-case Huiting commitment, and now the OTG operational scenarios — before any of it goes to Products for test-data prep.

---

## SteerCo-Style Readout

**Green**
- NRIC-centric design validated as directionally correct.
- No new class of employment-profile scenario discovered — the current architecture holds.
- Rich operational knowledge transferred from OTG to Compass; UAT inputs are much stronger.

**Amber**
- Multi-hat business rules.
- Historical competency treatment.
- NPL handling.
- UAT scope and acceptance criteria still being refined.

**Red**
- Upstream HR / POCDEX / Product data quality is the primary systemic risk.
- Many OTG incidents originate outside OTG and would keep surfacing in Compass if source data is wrong.

**Bottom line:** The meeting strengthened confidence in the Compass architecture and made clear that the team's biggest remaining risk is no longer identity resolution. It is governance of employment-profile data, and agreement on business behaviour when officers have multiple active or changing roles.

---

## Next Steps

**Immediate (this week):**
- PM team lands multi-hat display rules (one/multiple profiles, title, email, competency merge, history separation).
- PM team produces detailed use cases and expected behaviours — push for a hard date.
- Michelle shares OTG reference materials with the Compass team.
- Rama / Adrian Lo / Kingsley Low hold the architecture walkthrough; validate with Pow Hwee after.

**Short-term:**
- Imelda reconciles the three test-case inputs (Confluence 41-row cut, 50-case Huiting commitment, OTG operational scenarios) and prioritises.
- Engineering estimates effort once requirements stabilise.
- Name an owner for NPL and for upstream data-defect governance; route both to a decision.

**Follow-up meeting:**
- Architecture walkthrough (Rama, Adrian Lo, Kingsley Low), date not set.

---

## Context for Future Reference

This session closes the loop the 1 Sep grooming meeting opened — OTG Day-2 pain points are now transferred and become UAT input, owned by Imelda. It does not resolve the identity source-of-truth decision (still Rama's to bring), the multi-hat display rules (PM team, this week), or NPL (unowned). The strategic shift to record: the team has moved past "can we resolve identity" to "how do we govern employment-profile data and define the business behaviour for multi-role officers" — that is now the top risk area, not the architecture.
