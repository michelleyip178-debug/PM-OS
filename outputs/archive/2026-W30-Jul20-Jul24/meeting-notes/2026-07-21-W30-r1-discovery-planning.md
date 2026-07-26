---
date: 2026-07-21
week: 2026-W30
meeting_type: discovery-planning
topic: R1 Discovery Planning (Competency Management Module)
---

# Meeting Notes: R1 Discovery Planning

**Date:** 2026-07-21, 3:00–4:00pm

**Organizer:** Li Ting KWAY

**Attendees:** Li Ting Kway, Imelda Mo, Michelle Yip, Barry Lim, Michelle Chen, design team (unnamed individuals referenced)

**Meeting Type:** Team planning / meta-planning session

**Duration:** 1 hour

**Source:** Meeting transcript + chat (transcribed), condensed into an executive summary before processing

---

## Summary

This wasn't a discovery session on the Competency Management Module (CMM) itself — it was a meta-planning session about how discovery for R1 CMM should be structured. The group spent most of the hour on four unresolved questions: who the stakeholders and owners are, what problem is actually being solved, how discovery should be structured, and what timeline is realistic. The strongest outcome was alignment that the team doesn't yet know enough to commit to a solution, so discovery needs to validate whether a CMM is even the right answer before design work starts. The sharpest open tension: Imelda wants to start discovery with business/policy owners to frame the problem; Michelle Yip and the design team want to go direct to user pain points first, without letting existing assumptions bias what gets asked.

---

## Decisions Made

1. **Discovery before solutioning**
   - **Why:** The team doesn't yet understand the underlying problem well enough to commit to building a CMM, an AI-inference layer, or any specific system
   - **Who decided:** Group consensus, catalyzed by Michelle Yip's challenge ("Do we even need a CMM?") and echoed by Barry Lim and Michelle Chen
   - **Impact:** No solution design work should start until discovery validates the problem

2. **Three discovery areas adopted as the operating framework**
   - **Why:** Gives structure to what would otherwise be an unbounded discovery effort
   - **Who decided:** Li Ting Kway and Imelda Mo converged on this framing
   - **Impact:** Discovery will organize around (1) Competency Governance & Approval — creation, review, approval, retirement; (2) Competency Management & Tagging — assignment, ownership, agency-specific creation, quality confidence; (3) Job ID Creation & Role Mapping — Job ID lifecycle, competency mapping, system updates

3. **Stakeholder interviews as the primary discovery mechanism**
   - **Why:** Not explicitly justified in the notes, but consistent with the "understand real pain points" position that won out over pure policy-owner framing
   - **Who decided:** Group
   - **Impact:** Discovery execution will center on interviews rather than, e.g., data analysis or workshops as the primary method

4. **WD/CDGO stakeholders to be engaged early**
   - **Why:** Given how unresolved ownership is (CDGO vs. WD, Workforce Planning vs. Upskilling), early engagement is needed to even map who owns what
   - **Who decided:** Group
   - **Impact:** Kickoff discussions with business owners become a near-term dependency

5. **Discovery questions to be jointly refined by design and product**
   - **Why:** Not stated explicitly, but implied by the design team's admission they currently lack context on existing competency workflows
   - **Who decided:** Group
   - **Impact:** Li Ting Kway and Imelda Mo own consolidating the actual interview question set

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Refine stakeholder map (clarify Jamie, Wilson, Mastura, Xiu Hui, Xin Zhang, and others) | Imelda Mo / Team | Not stated | 🔴 High | 🔴 Not Started |
| Refine interview plan and consolidate discovery questions | Li Ting Kway + Imelda Mo | Not stated | 🔴 High | 🔴 Not Started |
| Schedule kickoff discussions with business owners | Imelda Mo | Not stated ("mentioned as next step") | 🔴 High | 🔴 Not Started |
| Identify ministry and stat-board participants for discovery | WD/CDGO stakeholders | Not stated | 🟡 Medium | 🔴 Not Started |
| Share existing competency workflows and artefacts with design team | Product / Business team | Not stated | 🟡 Medium | 🔴 Not Started |
| Determine realistic discovery timeline | Li Ting Kway and team | Not stated — **no agreement reached in this meeting** | 🔴 High | 🔴 Not Started |

**Notes:**
- None of these six action items have a due date. Given this meeting was explicitly meta-planning (not discovery itself), recommend Michelle push for dates on at least the stakeholder map and kickoff scheduling within the next few days — otherwise this risks becoming a second meta-planning session before real discovery starts.
- "Determine realistic discovery timeline" failing to close in this meeting is itself the finding, not a gap in these notes — see Timeline Risk below.

---

## Timeline Risks

- **TIMELINE RISK: No discovery timeline was set, and the meeting tried to sequence kickoff → discovery → design → technical discovery → PRD → development before agreeing on scope, discovery sequence, stakeholders, or success outcomes.** This mirrors the exact pattern flagged in open item #50 (CMM scope pressure, tracked since 2026-06-29): "Adrian repeatedly asked 'how do we add this without affecting the roadmap' with no convincing answer." That item was escalated to Mark/Gek Khiang at the 9 Jul SteerCo specifically because CMM scope had no trade-off decision against the Career Compass roadmap. This meeting suggests that escalation hasn't produced a scoped answer yet — CMM discovery is now running in parallel with zero timeline commitment, which is the same risk #50 named three weeks ago, just further along.

---

## Key Insights & Quotes

**The pivotal moment was Michelle Yip's question: "Do we even need a CMM?"** Per the "My Read" section of the source notes, this question shifted the entire meeting from assuming a system would be built to validating whether one should be. Before this point, the discussion largely assumed CMM as a foregone conclusion; after it, framing shifted toward problem validation.

**Multiple people independently questioned the solution, not just the PM.** Barry Lim explicitly asked the team not to conclude on solutions before user studies. Michelle Chen stated the result of discovery may be that no system is necessary at all. This is a healthy signal — the team is catching a "build first, validate later" risk before committing engineering time, not after.

**The real problem may be governance and adoption, not competency inference.** Concrete evidence raised in the meeting: 320k competency records need cleanup, agencies show large-scale reluctance to do manual cleanup, existing maintenance processes aren't being consistently followed, and HRPS/Cumulus already have their own update/validation problems. This reframes CMM from a technology problem to an organizational-behavior problem — a system can't fix low agency motivation to maintain data.

**Six different, only-partially-overlapping problem statements surfaced in the same meeting:** competency governance, competency cleanup, AI-assisted role tagging, standardisation for Career Compass, agencies maintaining their own data, and "a competency bank." The team moved between these without settling on one, which is consistent with — and possibly the root cause of — the CMM scope-pressure ambiguity flagged in open item #50.

**Stakeholder ownership is unresolved even within the project team, not just externally.** CDGO vs. WD, Workforce Planning vs. Upskilling, and named individuals (Jamie vs. Wilson, Diana vs. others) all surfaced as ownership questions the team itself couldn't answer. This is a more concerning signal than typical stakeholder-mapping gaps — the team can't yet explain who owns what internally.

**Discovery operating model is directionally agreed but not finalized:** design leads discovery, product supports, business validates — but who drives interviews, who synthesises findings, who owns final prioritisation, and who makes scope calls were not settled.

---

## Open Questions

- [ ] Discovery approach: start with business/policy owners (Imelda's preference) or go direct to user pain points first (Michelle Yip + design's preference)? — **Owner:** Michelle Yip / Imelda Mo — **By:** Before interview plan is finalized
- [ ] What is the actual problem statement — governance, cleanup, AI-tagging, standardisation, agency self-maintenance, or a competency bank? Possibly more than one, but they need to be named as separate workstreams if so — **Owner:** Li Ting Kway + Imelda Mo (per the discovery-question consolidation action item) — **By:** Before discovery execution starts
- [ ] What is the target governance model — how much central governance vs. agency autonomy? The meeting repeatedly surfaced tension between "govern the competency bank" and "don't become an approval bottleneck" without resolving it — **Owner:** Not assigned — **By:** Not stated, but blocks defining Discovery Area 1's actual questions
- [ ] How does this connect to the CMM scope-pressure risk already tracked in open item #50 (escalated to Mark/Gek Khiang at 9 Jul SteerCo)? Has that escalation produced any roadmap trade-off decision, or is discovery now proceeding in parallel with an unresolved capacity question? — **Owner:** Michelle Yip to confirm with Adrian — **By:** Before discovery timeline is set
- [ ] Does this connect to this morning's UAT prep finding — that OTG opportunities lack agency code, so competency matching against the (agency-scoped) master list structurally fails? That's a Pathfinder-side symptom of the same underlying competency-data-model ambiguity this meeting is trying to scope for R1 — worth flagging to whoever owns CMM discovery Area 1 (Governance) so it isn't rediscovered independently — **Owner:** Michelle Yip — **By:** Before Discovery Area 1 interviews start
- [ ] What discovery scope boundary prevents this from expanding into workforce planning, HRPS, Cumulus, and Career Compass all at once? Michelle Yip raised this as a live risk but no boundary was agreed — **Owner:** Not assigned — **By:** Before interview plan is finalized
- [ ] How will conflicts between policy-owner goals (standardisation, governance, quality) and user goals (speed, convenience, minimal added work) be resolved when they collide? — **Owner:** Not assigned — **By:** Not stated

---

## Blockers

1. **No agreed problem statement**
   - **Blocked by:** Six competing framings (governance, cleanup, AI-tagging, standardisation, agency self-maintenance, competency bank) never converged into one
   - **Impact:** Discovery questions can't be finalized without knowing which problem(s) are actually in scope
   - **Resolution:** Assigned to Li Ting Kway + Imelda Mo as part of "refine interview plan and consolidate discovery questions" — no date set

2. **Stakeholder ownership unresolved, including within the project team**
   - **Blocked by:** CDGO vs. WD, Workforce Planning vs. Upskilling, and specific named-individual ownership questions (Jamie vs. Wilson, Diana vs. others) unanswered
   - **Impact:** Can't confirm who to interview, who validates findings, or who makes scope decisions
   - **Resolution:** Assigned to Imelda Mo / Team as "refine stakeholder map" — no date set

3. **No discovery timeline**
   - **Blocked by:** Attempting to sequence the full kickoff-to-development pipeline before agreeing scope, sequence, stakeholders, or success outcomes
   - **Impact:** No forcing function yet for when discovery needs to produce an answer — risks running indefinitely, especially given open item #50's unresolved roadmap-capacity question
   - **Resolution:** Assigned to Li Ting Kway and team as "determine realistic discovery timeline" — explicitly unresolved in this meeting

---

## Next Steps

**Immediate (this week):**
- Push for dates on the stakeholder map refinement and business-owner kickoff scheduling — both are prerequisites for everything else and currently have no due date
- Confirm with Adrian whether open item #50's SteerCo escalation produced any roadmap trade-off decision, since this discovery effort is proceeding without one

**Short-term (next 2 weeks):**
- Resolve the Imelda-vs-Michelle discovery-approach tension (business-owner-first vs. user-pain-point-first) before the interview plan locks
- Name discovery scope boundaries explicitly to prevent expansion into workforce planning, HRPS, Cumulus, and Career Compass simultaneously
- Connect this discovery effort with the agency-code/competency-matching gap surfaced in today's separate UAT prep note — same underlying data-model ambiguity, different symptom

**Follow-up Meeting:**
- Not scheduled. Given "determine realistic discovery timeline" is an open action item with no owner-committed date, recommend proposing one rather than waiting for it to be raised again.

---

## Context for Future Reference

This meeting is the first concrete activity against **open item #50** (CMM scope pressure, tracked since 2026-06-29, escalated by Adrian to Mark/Gek Khiang at the 9 Jul SteerCo). That item flagged the core risk as "CMM gets informally absorbed without a trade-off decision" against the Career Compass roadmap — this meeting shows discovery is now proceeding, but the roadmap-capacity question from #50 doesn't appear to have been resolved first. Worth confirming whether that's intentional (discovery informs the trade-off decision) or a gap (discovery started without waiting for the trade-off decision it was supposed to depend on).

Separately, this connects to today's other meeting note ([2026-07-22-W30-uat-test-scenarios.md](2026-07-22-W30-uat-test-scenarios.md)): the OTG-opportunities-lack-agency-code gap that breaks Pathfinder-side competency matching is a symptom of the same underlying competency data model ambiguity this CMM discovery is trying to scope. Worth ensuring whoever drives Discovery Area 2 (Competency Management & Tagging) knows about that Pathfinder-side finding rather than rediscovering it independently.

**Stakeholder profile note:** Michelle Chen's profile is flagged as a stub (per `context-library/stakeholder-profiles.md`) — her comment in this meeting ("the result may be that no system is necessary") is a useful data point for firming that profile up once her R1 involvement solidifies.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes (condensed executive summary as provided)</summary>

Meeting: R1 Discovery Planning
Organizer: Li Ting KWAY
Date: Yesterday, 3–4pm
Source: Meeting transcript and meeting chat (meeting was transcribed).

Executive Summary (30-second version)

This was not actually a discovery session on Competency Management Module (CMM) itself. It was a meta-planning session about how discovery should be conducted for R1 CMM.
The group spent most of the session trying to answer four questions:
1. Who exactly are the stakeholders and owners?
2. What problems are we trying to solve?
3. How should discovery be structured?
4. What timeline is realistic?

The strongest outcome was alignment that the team does not yet know enough to commit to a solution, and therefore discovery must focus on validating whether a CMM is even the right answer. Multiple participants explicitly stated that the user studies may reveal that a system should not be built at all.

The biggest unresolved tension was around discovery approach:
* Imelda MO preferred starting with business/policy owners to frame the problem.
* You (Michelle YIP) and the design team advocated understanding real user pain points directly and not biasing discovery around existing assumptions.

What Went Well
1. The team challenged solution assumptions — Barry LIM explicitly asked the team not to conclude on solutions before user studies. Michelle CHEN stated that the result may be that no system is necessary. You questioned whether there is enough understanding of current workflows to know whether a CMM should even exist.
2. Discovery became more structured — Li Ting and Imelda MO converged around three primary discovery streams: Area 1 (Competency Governance & Approval), Area 2 (Competency Management & Tagging), Area 3 (Job ID Creation & Role Mapping).
3. Stakeholder mapping started — Policy/CDGO side: Mastura, Jamie, Wilson, Xiu Hui, Mark, Jacky, Xin Zhang. Operational: Ministry HR teams, Statutory Board HR teams, Functional Leads.
4. The team recognised governance as the harder problem — 320k competency records needing cleanup, large-scale reluctance from agencies, existing maintenance processes not consistently followed, HRPS/Cumulus already facing update and validation problems.

What Didn't Go Well
1. Stakeholder ownership is still extremely unclear — CDGO vs. WD, Workforce Planning vs. Upskilling, Jamie vs. Wilson, Diana vs. others, Functional leads vs. HR practitioners.
2. The problem statement is still not crisp — six competing versions (governance, cleanup, AI-assisted role tagging, standardisation for Career Compass, agencies maintaining data, competency bank).
3. Timeline discussion was premature — attempted to sequence kickoff, discovery, design, technical discovery, PRD, development before agreeing scope, discovery sequence, stakeholders, success outcomes.
4. Discovery ownership remains fuzzy — design leads discovery, product supports, business validates (loosely agreed), but operating model not finalised.

Biggest Risks We Are NOT Addressing
Risk 1: CMM may not solve the real problem (agency resistance, governance, incentives, manpower, process ownership).
Risk 2: AI becomes the solution looking for a problem (inference accuracy not validated as the actual pain point).
Risk 3: No clear governance target state ("govern the competency bank" vs. "don't become an approval bottleneck" unresolved).
Risk 4: Discovery may become too broad (competency governance, workforce planning, HRPS, Cumulus, Career Compass, agency workflows all at once).
Risk 5: Building for policy owners but not users (standardisation/governance/quality vs. speed/convenience/minimal work — conflict resolution not established).

Decisions Made
1. Discovery should be conducted before committing to solutions.
2. Three discovery areas will be used as the operating framework.
3. Stakeholder interviews will be the primary discovery mechanism.
4. WD/CDGO stakeholders need to be engaged early.
5. Discovery questions will be further refined jointly by design and product teams.

Action Items
- Refine stakeholder map — Imelda MO / Team — Clarify Jamie, Wilson, Mastura, Xiu Hui, Xin Zhang and others.
- Refine interview plan and research questions — Li Ting KWAY + Imelda MO — Consolidate discovery questions.
- Schedule kickoff discussions with business owners — Imelda MO — Mentioned as next step.
- Identify ministry and stat-board participants for discovery — WD/CDGO stakeholders — Discovery recruitment support required.
- Share existing competency workflows and artefacts with design team — Product / Business team — Design team indicated they currently lack context.
- Determine realistic discovery timeline — Li Ting KWAY and team — No agreement reached during meeting.

My Read (as Product Lead)
The most important moment in this meeting was actually your challenge: "Do we even need a CMM?" That question fundamentally changed the conversation. Up until then, much of the discussion assumed a system would be built. After that point, the meeting started shifting towards validating: what problem actually exists, who experiences it, whether technology is the answer, and whether governance/process interventions may be more important than software.

If I were prepping a SteerCo-style summary, I would state the key takeaway as: the project has alignment on conducting structured discovery, but there is not yet alignment on the underlying problem statement, target governance model, or whether a Competency Management Module is the appropriate solution. Discovery should therefore prioritise validation of the problem and operating model before solution design.

</details>
