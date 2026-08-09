# Meeting Notes: R1 Timeline Planning

**Date:** 2026-08-06

**Attendees:** Not specified in source notes — confirm and backfill

**Meeting Type:** Team planning session (scope + timeline)

**Duration:** Not specified

---

## Summary

The team pushed back hard on cramming CMM and CIEJD into R1, converging toward opportunity capabilities and agency onboarding as the real R1 priority. That's the win. But nothing here is actually locked: there's no final in/out scope line, no owner for competency governance, and no critical-path timeline working back from the February target. Discovery is doing a lot of load-bearing work as the answer to nearly every open question, which is fine as a next step but risky as a planning crutch — several of these are execution-blocking, not nice-to-know.

---

## Decisions Made

1. **Discovery must complete before CMM design and operating-model decisions are finalized**
   - **Why:** Too many workflow and UI calls depend on understanding HR operating processes, competency maintenance workflows, ownership model, current user behavior, and agency expectations — deciding now would be guessing.
   - **Who decided:** Team consensus
   - **Impact:** CMM design work is now gated on discovery completing — this needs a date, not just a sequencing note (see Timeline Risks below).

2. **CIEJD is likely decoupled from R1**
   - **Why:** Keeps opportunity functionality from being held hostage to CIEJD delivery; CIEJD would release separately after VAPT.
   - **Who decided:** Team consensus, described as "repeatedly moved towards" — treat as directionally strong, not yet a hard commitment.
   - **Impact:** Reduces R1 scope pressure, but this isn't formally locked (see Open Questions).

3. **Opportunity capabilities are the highest R1 priority**
   - **Why:** Strongest alignment point in the meeting — opportunity creation/posting and agency onboarding shouldn't be delayed by everything else competing for the same resources.
   - **Who decided:** Team consensus
   - **Impact:** Resourcing should follow this priority first; other workstreams (CMM, CIEJD) are explicitly secondary.

4. **Competency cleanup is not R1 scope**
   - **Why:** No major competency-cleanup module planned for R1; read-only visibility is acceptable for now.
   - **Who decided:** Team consensus
   - **Impact:** Reduces R1 build scope, but leaves the ownership/source-of-truth question (Risk 1, Risk 2 below) unresolved and now deferred past R1.

5. **Existing competency bank stays in place**
   - **Why:** No reason to disrupt what's working while CMM capability decisions are still pending.
   - **Who decided:** Team consensus
   - **Impact:** No immediate action needed; revisit once CMM ownership decision lands.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Draft R1 Scope Contract (1-pager: In R1 / Out of R1 / Requires Discovery) | @Michelle | Not set — no due date mentioned, schedule within 48 hours | High | 🔴 Not Started |
| Build Dependency Tracker (HRPS, Products/UHDP, CMM, CIEJD, VAPT, eng resources — owner, decision date, risk level per item) | @Michelle | Not set — no due date mentioned, schedule within 48 hours | High | 🔴 Not Started |
| Force a decision via Competency Ownership Decision Paper (source of truth, steward, updater, consumer systems) | @Michelle, needs input from whoever owns Compass/HR systems/Products-UHDP | Not set — no due date mentioned | High | 🔴 Not Started |
| Build Critical Path Timeline working back from February R1 target (discovery completion → design freeze → dev freeze → UAT window → VAPT window → release readiness) | @Michelle | Not set — no due date mentioned | High | 🔴 Not Started |
| Confirm whether infrastructure migration alone triggers a new VAPT requirement | Owner TBC | Not set | Medium | 🔴 Not Started |
| Define support/ops model for post-launch (BA responsibilities, escalation workflow) | Owner TBC | Not set | Medium | 🔴 Not Started |
| Calculate the engineering timeline separately (explicitly flagged as still outstanding at meeting close) | Owner TBC (Engineering) | Not set | High | 🔴 Not Started |

**Notes:**
- Every action item above is unowned-by-name except the four PM artefacts, which default to Michelle per the source notes' "Product Manager Perspective" section — confirm this assignment is actually agreed, not just recommended.
- None of these have due dates. Given the February R1 target, the Critical Path Timeline item is the one to sequence first — everything else's urgency depends on what that timeline reveals.

---

## Key Insights & Quotes

**Strategic considerations:**
- The meeting's own framing: repeated return to "What is the minimum required for R1?" — good discipline, consistent with the R1 SteerCo recommendation's existing pattern of avoiding presenting things as more settled than they are ([2026-07-06-W28-r1-steerco-recommendation.md](../status-updates/2026-07-06-W28-r1-steerco-recommendation.md)).
- Architectural ownership questions (competency ownership, source-of-truth) surfaced early rather than late — genuinely good, since these are the kind of question that normally blows up mid-build.

**Pattern worth naming:** this is the second time in this R1 cycle that a "no committed owner + no date" blocker has been logged and deferred rather than resolved. The 6 Jul SteerCo recommendation flagged three blockers (agency-admin auth, competency SSOT contract, manager status-update UX) as needing "owner + date, not headcount." Today's meeting adds competency governance ownership to that same unresolved category. Worth checking whether the earlier three ever got dates — if not, this is a recurring failure mode, not an isolated gap.

---

## Open Questions

- [ ] What exactly is in R1 vs. out vs. deferred to R1A/R2? Different parts of the conversation used different definitions of Opportunity/CMM/CIEJD scope — **Owner:** @Michelle (via Scope Contract) — **By:** Not set, recommend this week
- [ ] Who owns competency governance — Compass, HR systems, or Products/UHDP? — **Owner:** Unresolved, needs escalation — **By:** Not set
- [ ] Where is the source of truth for competencies, who updates it, who validates it, which system wins in a conflict? — **Owner:** Unresolved — **By:** Not set
- [ ] Does infrastructure migration alone trigger a new VAPT requirement? — **Owner:** Unclear, likely Security/Infra — **By:** Not set, this affects the critical path directly
- [ ] Is CIEJD's decoupling from R1 actually final, or still directional? — **Owner:** @Michelle to confirm — **By:** Not set
- [ ] Did the three blockers from the 6 Jul SteerCo recommendation (auth, SSOT contract, manager UX) ever get owner + date commitments? — **Owner:** @Michelle to check — **By:** Before next R1 planning touchpoint

---

## Timeline Risks

- **TIMELINE RISK:** The meeting referenced a "February R1 target" and repeatedly invoked backward planning, but no actual critical-path timeline exists yet — discovery completion, design freeze, dev freeze, UAT window, VAPT window, and release readiness dates are all unset. Until the Critical Path Timeline artefact exists, "February" is a target in name only.
- **TIMELINE RISK:** Discovery work is now a prerequisite for CMM design AND operating-model decisions AND (per Open Questions) competency governance ownership — multiple critical-path items are stacked behind a single discovery phase with no stated completion date. If discovery slips, everything downstream slips with it, and right now there's no visibility into how much slack exists.
- **TIMELINE RISK:** "Engineering timeline still needs to be calculated separately" was noted at meeting close — this means the R1 story-pointing/capacity work referenced in the 6 Jul SteerCo recommendation (36-64 estimable points, "1.5-2.5 sprints of two-developer capacity") has not been reconciled with today's scope changes (CIEJD out, competency cleanup out, CMM reduced). The estimate is now stale relative to today's decisions.
- **TIMELINE RISK:** HRPS vendor lead times and CR processes were flagged as a real dependency risk, but no lead time was quantified. Even if Compass/PSD-side work stays on track, this is an external dependency with unknown duration sitting on the critical path.

---

## Risks

1. **No accountable owner for competency governance**
   - **Blocked by:** Three-way ambiguity between Compass, HR systems, and Products/UHDP
   - **Impact:** Data quality degradation, fragmented change management, more expensive future integrations
   - **Resolution:** Competency Ownership Decision Paper (action item above) — needs to force a decision, not just document the options

2. **Source-of-truth ambiguity for competency data**
   - **Blocked by:** No agreement on where competencies originate, who updates/validates them, or which system wins in conflicts
   - **Impact:** Future integration projects could stall on inconsistent data
   - **Resolution:** Same Decision Paper as above — this and Risk 1 are really one decision, not two

3. **HRPS dependency lead times**
   - **Blocked by:** Vendor CR processes with lead times the team hasn't quantified
   - **Impact:** Even a fully ready PSD/Compass side could still be delayed by an external system
   - **Resolution:** Get a lead-time estimate from HRPS vendor and add it to the Dependency Tracker

4. **VAPT timing uncertainty**
   - **Blocked by:** Unclear whether infrastructure migration alone triggers a new VAPT cycle
   - **Impact:** Release schedule may be optimistic if a new VAPT window is required and not currently planned for
   - **Resolution:** Get a definitive answer from Security/Infra, feed into Critical Path Timeline

5. **Undefined post-launch support model**
   - **Blocked by:** No agreement on who supports, BA responsibilities, or escalation workflow
   - **Impact:** Operational ownership becomes a bottleneck right after launch, when the team can least afford one
   - **Resolution:** Assign an owner to define this before UAT, not after launch

6. **R1 still appears overloaded even after descoping**
   - **Blocked by:** Opportunity work, agency onboarding, MVP carry-over, integrations, UAT, and infra activities are all still inside R1
   - **Impact:** Effort may still be underestimated despite the CIEJD/CMM/competency-cleanup descoping wins
   - **Resolution:** The engineering timeline recalculation (action item above) needs to test this directly, not assume descoping alone solved the overload problem

---

## Next Steps

**Immediate (This Week):**
- Draft R1 Scope Contract (in/out/discovery-required)
- Start the Dependency Tracker
- Check status of the three unresolved blockers from the 6 Jul SteerCo recommendation

**Short-term (Next 2 weeks):**
- Force the Competency Ownership decision — this has now surfaced in two consecutive planning contexts without resolution
- Build the Critical Path Timeline backward from February
- Get VAPT and HRPS lead-time answers to close two open Timeline Risks

**Follow-up Meeting:**
- **Date:** Not set — recommend scheduling once Scope Contract and Dependency Tracker drafts exist, so the next session has something concrete to align on rather than re-litigating the same open questions
- **Purpose:** Review Scope Contract, Dependency Tracker, and Critical Path Timeline drafts; force the competency ownership decision
- **Attendees:** Whoever owns Compass, HR systems, and Products/UHDP need to be in the room for the ownership decision specifically — this can't resolve without them

---

## Context for Future Reference

This is the second R1 planning artifact in this cycle to flag "no owner, no date" as the core failure mode rather than a scope or requirements gap (see the 6 Jul SteerCo recommendation, which named the same pattern for auth/SSOT-contract/manager-UX blockers). The R1 Scope Contract, Dependency Tracker, Competency Ownership Decision Paper, and Critical Path Timeline are all attempts to convert "known risk, no owner" into "assigned decision, dated." Worth tracking whether these four artefacts actually get built and used, or whether they join the earlier three blockers in staying open without resolution — that would confirm a structural governance gap rather than a one-off oversight.

Related: [2026-07-06-W28-r1-steerco-recommendation.md](../status-updates/2026-07-06-W28-r1-steerco-recommendation.md) — same "owner + date, not headcount" framing, same underlying pattern of deferred ownership decisions.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw executive summary</summary>

Executive Summary: This was a productive working session because the team actively challenged assumptions, surfaced dependency risks early, and resisted locking in scope before discovery. The strongest outcome was a gradual convergence towards an R1 strategy focused on core opportunity capabilities while reducing pressure from larger CMM and CIEJD ambitions. However, the meeting also revealed significant unresolved architectural questions, ownership ambiguities, dependency risks, and resource contention. In many places the team identified risks but deferred decisions to discovery, meaning several critical path items remain uncertain.

Overall Assessment: Meeting effectiveness 7.5/10. Strengths: correct challenges raised, good product discussion, strong focus on reducing scope, risks surfaced early. Weaknesses: too many unresolved ownership questions, no final R1 boundary, dependency management remains weak, several risks acknowledged but not assigned owners.

Full raw content supplied by PM, structured into sections above (What Went Well, What Did Not Go Well, Decisions Made, Key Risks Not Fully Addressed, Product Manager Perspective, Overall Assessment).

</details>
