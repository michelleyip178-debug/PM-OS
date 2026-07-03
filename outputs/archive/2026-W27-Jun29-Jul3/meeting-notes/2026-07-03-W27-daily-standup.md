---
date: 2026-07-03
meeting: OTEP Daily Standup
organizer: Pow Hwee Tan
time: "11:00–11:15"
type: Team standup / engineering sync
attendees: [Pow Hwee Tan, Michelle Yip, Léo, Thomas, Hao Eng Chua, Amber, Rathika Ramalingam]
---

# Meeting Notes: OTEP Daily Standup (3 Jul 2026)

## Summary

Team is aligned on MVP delivery priorities (ring-fencing and WOG AD auth over lower-risk filtering work) and actively managing scope via Michelle's MVP stocktake. Two structural risks surfaced: the new-tab UX decision has low engineering confidence despite being accepted as a business call, and multiple workstreams (branding, agency mapping, Azure ID) remain dependency-gated with no clear owner for the underlying gaps. Overall status: **Amber-Green** — solid delivery discipline, but demo-readiness and cross-team dependency risk are building.

---

## Decisions Made

1. **Opportunity cards will open in a new browser tab when selected**
   - **Why:** Inherited from a prior business decision, not decided fresh in this meeting. Despite explicit engineering/product pushback in an "intensive debate," the decision stands.
   - **Who decided:** Business call (pre-existing), reaffirmed here
   - **Impact:** MVP usage data will be used to reassess. **This is the same decision flagged in yesterday's Sprint 6 grooming** — Amber's team applied new-tab to Courses cards and extended it to Opportunity cards, with the Opportunities-side ownership marked "unowned" in that meeting's action items. Today's standup shows engineers are still uneasy about it, not newly informed — worth closing that ownership gap given the discomfort is real and ongoing, not resolved by "we'll see after MVP."

2. **Ring-fencing and WOG AD work take precedence over Job Function filtering**
   - **Why:** Team consciously prioritized higher architectural/access-control risk over feature completeness.
   - **Impact:** Job Function filtering slips down the priority stack; no explicit new date given.

3. **Agency coverage should include agencies beyond current products data**
   - **Why:** Future Careers@Gov integration will likely require full agency coverage, not just the agencies currently in scope.
   - **Impact:** Expands the agency-mapping problem (see Risks) rather than shrinking it — this decision adds scope to an already-messy area.

4. **Session expiry will use a dedicated sign-out page instead of broken/blank screens**
   - **Why:** Usability fix — Hao Eng completed the underlying work and aligned with design.
   - **Impact:** Improves MVP polish; low risk, already done.

5. **Potential recommendation: use Career Compass branding instead of a broken-looking default image where agency logos are unavailable — not finalized**
   - **Why:** Addresses the visible risk of blank/broken logo placeholders ahead of demos.
   - **Impact:** Design team to consider and revert — this is provisional, not a locked decision.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Conduct MVP scope stocktake — determine MVP vs. Post-MVP work | Michelle Yip | Not specified — recommend this week given "next week" framing elsewhere | 🔴 High | Not Started |
| Review bug tickets raised from testing | Michelle Yip | Not specified | Medium | Not Started |
| Complete logging middleware and merge MR | Léo | Not specified | Medium | Not Started |
| Continue Keycloak + Azure ID integration discussions | Léo | Not specified | 🔴 High | Not Started |
| Explore agency handling approach with reference agency table | Thomas | Not specified | 🔴 High | Not Started |
| Progress ring-fencing implementation | Thomas | Not specified | 🔴 High | Not Started |
| Compile missing agency codes, pass to Pow Hwee Tan | Hao Eng Chua | Not specified | 🔴 High | Not Started |
| Complete MR cleanup and reviews | Hao Eng Chua | Not specified | Medium | Not Started |
| Provide session-expiry designs in Figma | Amber | Not specified | Medium | Not Started |
| Follow up on branding/images with design team, update group | Amber | Not specified | 🔴 High | Not Started |
| Raise bugs for listing/detail/search testing findings | Rathika Ramalingam | Not specified | 🔴 High | Not Started |
| Begin login-related testing | Rathika Ramalingam | Next week | Medium | Not Started |
| Create ticket for smoke test tracking | Thomas | Not specified | Medium | Not Started |
| Conduct Jira stocktake and sprint health check | Pow Hwee Tan | Next week | 🔴 High | Not Started |

**Notes:**
- 12 of 14 action items have no due date — recommend batching a follow-up to timebox at minimum the High-priority ones (Michelle's MVP stocktake, Léo's Azure ID work, Thomas's ring-fencing and agency handling, Hao Eng's agency codes, Amber's branding follow-up, Rathika's bug-raising).
- Michelle's MVP stocktake and Pow Hwee's Jira/sprint health check are closely related (both determine what's really in scope) — worth sequencing so the stocktake output feeds the health check rather than running in parallel blind to each other.

---

## Key Insights & Quotes

**Team Dynamics:**
- "Intensive debate" (Michelle, on the new-tab decision) — the discussion consumed significant standup time despite the decision already being made. This is a signal of unresolved team buy-in, not new information changing minds.
- Developers described the new-tab behaviour as poor UX and raised concerns about tab proliferation and forced re-login — these concerns were heard but not acted on, since it's framed as a business call.

**Technical Constraints:**
- Agency logos are currently manually uploaded, not available via API integration — flagged by Michelle as future operational debt (onboarding new agencies, maintaining logos, sync issues), but not discussed as an owned problem.
- Agency mapping has three distinct unresolved sub-problems: agencies absent from product data, non-standard agencies (A*STAR, CPF, etc.), and dependency on Kingsley's reference agency table rework — these are being treated as one blurry issue rather than three separate, sequenceable problems.

**Process Observation — Dependency Debt:**
Multiple contributors are blocked on external parties: Azure ID discussions, Kingsley's agency table work, Data Office inputs, Figma/design assets, and logo availability. This "waiting for X" pattern across several workstreams simultaneously is a structural warning sign this close to MVP, not just individually annoying blockers.

---

## Open Questions

- [ ] What feedback counts as failure for the new-tab decision? What metrics will be tracked, and how many complaints are acceptable? — **Owner:** Not assigned — **By:** Not stated. Currently the plan is "we'll see after MVP," which has no measurable exit criteria.
- [ ] Who owns long-term logo/branding asset management (beyond the MVP manual-upload workaround)? — **Owner:** Not assigned — **By:** Not stated
- [ ] If multiple items get pushed to Post-MVP from the stocktake, does the team actually have capacity and committed timeline to deliver them later? — **Owner:** Michelle (implied) — **By:** Not stated — this wasn't discussed and is a real risk to the stocktake's credibility
- [ ] What's the actual technical approach, delivery confidence, and remaining effort for ring-fencing? — **Owner:** Thomas / Pow Hwee — **By:** Not stated — everyone agrees it's high priority but visibility into progress is low
- [ ] **Who owns applying the new-tab decision to Opportunity cards specifically?** — carried over from yesterday's Sprint 6 grooming notes, still unowned. — **Owner:** Michelle to assign (likely Thomas, per current Opportunity-card ownership) — **By:** Not stated

---

## Risks

### Being Discussed (Acknowledged, Mitigation Planned)

1. **Poor UX from forced new-tab behaviour** — tab proliferation, repeated re-auth prompts, user confusion. Mitigation: use MVP analytics/feedback post-launch. **Gap:** no defined success/failure threshold (see Open Questions).
2. **Agency data completeness** — incomplete agency mapping risks broken logos, inconsistent filtering, and branding failures as Careers@Gov integration expands agency scope.
3. **Executive demo readiness** — incomplete images/logos may force last-minute scrambling before Perm Sec/DS-level demos. Pow Hwee explicitly raised this, meaning it's already on leadership radar.

### NOT Fully Addressed

1. **No success criteria for the new-tab experiment — Risk Rating: Medium-High.** "We'll see after MVP" isn't a measurement plan. Without a defined failure threshold, this risk can't actually be closed out post-launch — it'll just be a permanent ambiguous item.
2. **Logo management is manual, with no long-term ownership plan — Risk Rating: Medium.** Discussed only as an MVP implementation detail, not as an operational debt item with an owner.
3. **Growing MVP clean-up backlog with unclear post-MVP capacity — Risk Rating: Medium-High.** The stocktake could produce a long Post-MVP list with no corresponding capacity commitment to actually deliver it — this exact question wasn't discussed and should be raised before the stocktake concludes.
4. **Ring-fencing has low visibility despite high priority — Risk Rating: Medium.** Universal agreement on priority isn't the same as confidence in delivery — no technical approach, blockers, or remaining effort was discussed.

---

## Cross-Reference to Existing Tracking

- **New-tab / Opportunity cards ownership gap** — directly continues the unresolved thread from [yesterday's Sprint 6 grooming notes](2026-07-02-W27-sprint-6-grooming.md), where "apply new-tab decision to Opportunity cards" was flagged as unowned. Today's standup confirms the underlying UX discomfort is real and current, not just yesterday's design-review artifact — recommend resolving ownership now rather than letting it carry a second day unaddressed.
- **Open item #52** (Hao Eng leave coverage) — not mentioned in this standup at all. Hao Eng picked up two new action items today (compile agency codes, MR cleanup) with no reference to his upcoming leave or a handover plan. Worth explicitly raising this before it's assumed resolved by omission.
- **OTEP-445** (POCDEX code table spike, unowned per this morning's live Jira pull) — also not mentioned in this standup. Still appears to be unowned heading into the sprint's second week.
- **#51** (Search AC ownership) — not directly addressed, though Rathika's testing progress (listing/detail/search) and plan to raise bugs is adjacent. The underlying "who owns final AC sign-off" question remains open.

---

## Next Steps

**Immediate (today/this week):**
- Assign ownership for applying the new-tab decision to Opportunity cards (carried from Sprint 6 grooming, still open)
- Confirm Hao Eng's leave handover plan (open item #52) — not raised in this standup, still unresolved
- Confirm OTEP-445 owner (not raised in this standup, still unowned per live Jira)

**This week:**
- Michelle's MVP stocktake — sequence before or alongside Pow Hwee's Jira/sprint health check next week
- Amber's branding/design follow-up, given Pow Hwee's explicit demo-readiness concern

**Before stocktake concludes:**
- Raise and resolve the capacity-for-Post-MVP-work question explicitly — don't let scope get deferred without a corresponding commitment check

---

## Context for Future Reference

This standup's dominant theme (MVP discipline vs. feature completeness) is a positive signal on its own, but the underlying dependency debt (Azure ID, agency table, Data Office, design assets) and the new-tab team-buy-in gap are structural, not one-off. Worth watching whether next week's stocktake actually produces decisive scope cuts, or just documents the same ambiguity already visible today.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: Meeting transcript and chat, OTEP Daily Standup, organized by Pow Hwee TAN, 2026-07-03, 11:00–11:15. Submitted as a pre-structured PM assessment (Executive Summary / What Went Well / What Didn't Go Well / Risks / Key Decisions / Action Items / Overall Read format) via `/meeting-notes` invocation.

</details>
