# Meeting Notes: Sprint Internal Demo

**Date:** 2026-07-10 (Fri, W28)

**Organizer:** Rama MOORTHY

**Attendees:** Rama MOORTHY, Michelle YIP, Pow Hwee TAN, Pei Ern Lim, Rathika Ramalingam, Adrian Lo, plus Engineering/Design/QA (individuals not fully specified in transcript)

**Type:** Sprint demo — evolved into project health review

**Duration:** Not specified

---

## Summary

The team demoed real progress on Career Pathing / Your Development and caught a batch of UI and logic defects before the stakeholder demo, which is healthy. But the meeting surfaced three programme-level risks: Opportunities is effectively undemonstrable due to unresolved CFT/environment blockers, Michelle's confidence in demo readiness is explicitly dropping, and a search-behaviour change (removing the search button for autoload) shipped without product or infrastructure alignment. Monday now carries both a CFT troubleshooting session ([today's earlier Team 2 standup](../../outputs/meeting-notes/2026-07-10-W28-team2-standup.md)) and an optimisation review — same day, same root blocker.

**This is the same blocker as this morning's Team 2 standup, from a different angle.** That meeting named CFT/OTG import as the top blocker with no accountable owner and knowledge concentrated in Hao Eng. This demo confirms the downstream consequence: Opportunities can't be shown at all, and Pow Hwee's explanation ("CFT not working, egress not ready, import functionality unavailable") matches almost verbatim. Read these two together, not separately, when reporting up.

---

## Decisions Made

1. **Do not artificially mock Opportunities data for the demo**
   - **Why:** Michelle YIP: "I don't really want to mock any more data or seek any more data just to make the demo nice." Preference is to expose actual readiness rather than stage a showcase.
   - **Who decided:** Michelle YIP.
   - **Impact:** Consistent with this morning's Team 2 standup decision to stop hiding CFT issues behind workarounds — this is the same principle applied to demo prep specifically. Raises real risk that Opportunities has nothing to show at the stakeholder demo (see Risks).

2. **Sorting inconsistency is a bug — competencies should match homepage ordering**
   - **Why:** Identified live during demo review; accepted immediately as a defect, not a design debate.
   - **Who decided:** Team consensus.
   - **Impact:** Assigned to Pei Ern Lim (see Action Items).

3. **Hidden competencies behaviour must be consistent across screens**
   - **Why:** If a competency is hidden in one view, it should be hidden consistently across related experiences — inconsistency was flagged as confusing.
   - **Who decided:** Team consensus.
   - **Impact:** Assigned to Pei Ern Lim.

4. **Agency should appear before Job Family and Job Function in filters**
   - **Why:** Not stated explicitly — resolved quickly as a filter-ordering fix during design review against Figma.
   - **Who decided:** Team consensus.
   - **Impact:** Visual ordering change, engineering to implement.

5. **Reinstate the Search button; revert autoload searching**
   - **Why:** Strong consensus from Product, Opportunities, and technical leadership that autoload searching was implemented and shipped without product or design being informed, and without infrastructure implications being evaluated.
   - **Who decided:** Product + Opportunities + Technical leadership (cross-functional consensus).
   - **Impact:** This is the meeting's clearest governance failure — a design/architecture change reached demo before going through a single decision-making process. Worth a retro-style follow-up on how design/eng changes get socialised, separate from just reverting this one instance.

6. **Optimisation review required Monday**
   - **Why:** Role search feels slow at ~50K role records; concern is this gets worse at production scale. The team wants to review query performance, database behaviour, indexing, caching, and production sizing before it becomes a bigger problem.
   - **Who decided:** Rama MOORTHY, Adrian Lo, Engineering.
   - **Impact:** Same-day collision with the CFT troubleshooting session from this morning's Team 2 standup (also targeting Monday). Both are high-priority, both need Engineering attention — confirm this isn't asking the same people to do both at once.

---

## Action Items

| Task | Owner | Due Date | Priority | Notes |
|------|-------|----------|----------|-------|
| Fix competency sorting issue | Pei Ern Lim | End of day (targeted by Rama MOORTHY) | 🔴 High | |
| Align hidden competency behaviour across views | Pei Ern Lim | Not specified — recommend before Monday demo | 🟡 Medium | |
| Review competency ordering logic | Team | Before demo | 🟡 Medium | |
| Adjust UI spacing/padding issues | Engineering + Design | Not specified | 🟢 Low | |
| Fix progress bar colour inconsistency | Engineering | Not specified | 🟢 Low | |
| Reorder filters (Agency first) | Engineering | Not specified — recommend before Monday demo | 🟡 Medium | |
| Reinstate Search button | Engineering team | To be discussed/implemented — recommend before Monday demo | 🔴 High | Reverts ungoverned change |
| Prepare multiple realistic test accounts for demo | Rathika Ramalingam | Monday (2026-07-13) demo prep | 🔴 High | Same Monday as her test-data discussion from this morning's Team 2 standup — likely the same workstream |
| Optimisation review call | Rama MOORTHY, Adrian Lo, Engineering | Monday (2026-07-13) | 🔴 High | Query performance, indexing, caching, prod sizing |
| Assess infrastructure implications of search behaviour | Engineering leadership | Monday (2026-07-13) | 🔴 High | |
| Update stakeholders if readiness risk remains | Rama MOORTHY / Michelle YIP | Before stakeholder expectations are impacted — no hard date given | 🔴 High | See Timeline Risks |

**Notes:**
- Several "not specified" due dates cluster around fixes that should land before the Monday stakeholder demo (hidden competency alignment, filter reorder, search button reinstatement). Recommend Rama or Michelle assign hard dates today rather than leaving them open through the weekend.
- Monday is heavily loaded: CFT troubleshooting (from this morning's Team 2 standup), the optimisation review, search infrastructure assessment, and test account prep all land the same day, several with overlapping Engineering ownership.

---

## Key Insights & Quotes

**Michelle YIP, protecting demo integrity:**
"I don't really want to mock any more data or seek any more data just to make the demo nice."

**Michelle YIP, on confidence:**
"My confidence level is getting lower, to be honest." — cited reasons: broken experiences, partial functionality, inability to show end-to-end journeys, uncertainty around demo readiness. This is the second time today Michelle's confidence in demo readiness has been raised explicitly (also stated in this morning's Team 2 standup: "that confidence level is dropping for me").

**Pow Hwee TAN, on Opportunities readiness:**
CFT not working, egress not ready, import functionality unavailable, environment issues have blocked progress for a while — visible sprint outcomes are limited because current work is backend/integration-focused.

**Governance gap, search behaviour:** Search button removal and autoload searching were implemented without product, design, or infrastructure being consulted. Discovered live during the demo, not before.

---

## Open Questions

- [ ] Does the Monday CFT troubleshooting session (Team 2 standup action item, owned by Léo) and the Monday optimisation review (this meeting, owned by Rama/Adrian/Engineering) share any of the same engineers? If so, sequence or reprioritize. — **Owner:** Rama MOORTHY / Pow Hwee TAN — **By:** Before Monday
- [ ] What specifically will be shown for Opportunities at the stakeholder demo, given the decision not to mock data? — **Owner:** Michelle YIP / Rama MOORTHY — **By:** Before Monday demo
- [ ] What governance gap allowed the search button/autoload change to ship without product or infra review — is this a one-off or a process gap? — **Owner:** Rama MOORTHY / Pow Hwee TAN — **By:** Follow-up needed, not urgent

---

## Risks

**High Risk: Opportunities workstream not demo ready**
CFT, egress, and import blockers mean Opportunities has little to show. This directly compounds the CFT blocker already flagged in this morning's Team 2 standup — same root cause, now confirmed to affect demo output specifically.

**High Risk: Declining delivery confidence**
Michelle's confidence statement here is the second explicit instance today (also in the Team 2 standup). Two independent, same-day statements of dropping confidence from the same person is a stronger signal than either alone — worth surfacing as a pattern, not two isolated comments.

**Medium Risk: Search behaviour governance gap**
A design/architecture change reached demo without product or infra sign-off. Consumed a large portion of meeting time to unwind. Risk of recurrence if the underlying process gap isn't addressed, not just this one instance reverted.

**Medium Risk: Performance/scale surprises emerging late**
Role search is slow at ~50K records; concern is this wasn't caught until implementation was already live, not during design. Suggests other optimisation surprises may still be ahead.

## Risks Not Being Fully Addressed

These are inferences from the discussion, not explicit decisions:

1. **Environment dependency risk.** CFT, egress, WOGAD, and CSC integration readiness are all external dependencies the product team doesn't control — a meaningful share of MVP readiness rests outside the team's hands. This is the same theme as "no clear owner for CFT" from this morning's standup, viewed at the programme level.
2. **Integration readiness risk.** Features are being demoed on seeded data, sample XML, and temporary datasets — a clean demo doesn't guarantee production readiness.
3. **Requirements governance risk.** The search-button incident suggests design, implementation, and performance decisions aren't consistently flowing through one decision-making process. More "small changes" could create disproportionate downstream impact if this isn't fixed structurally.

---

## Overall Health Assessment

| Area | Status | Note |
|------|--------|------|
| Product Health | 🟠 Amber | Pathfinder progressing, but polish and defect correction remain |
| Opportunities Health | 🔴 Red | Environment/integration blockers prevent meaningful demo |
| Technical Health | 🟠 Amber | Performance/scaling concerns visible but unresolved |
| Delivery Confidence | 🟠→🔴 Trending down | Explicit, repeated confidence drop from Michelle YIP — twice today, across two meetings |

---

## Timeline Risks

- **TIMELINE RISK:** Both this meeting and this morning's Team 2 standup point to Monday (2026-07-13) as the day CFT gets resolved, optimisation gets reviewed, search infra gets assessed, and demo test accounts get prepped — all before what appears to be a Monday or near-Monday stakeholder demo. That's a lot of high-priority, Engineering-heavy work compressed into one day immediately before the demo it's meant to de-risk. If the stakeholder demo is Monday itself, there's no runway left to act on what Monday's sessions uncover. Confirm the exact stakeholder demo date and whether it's Monday or later in the week — worth surfacing this compression risk to Rama and Pow Hwee directly.
- **TIMELINE RISK:** "Update stakeholders if readiness risk remains" (owned by Rama/Michelle) has no hard date, but is explicitly contingent on Monday's outcomes. If Monday's sessions don't resolve CFT and search infra in time, this update needs to go out same-day Monday, not slip into Tuesday.

---

## Next Steps

**Immediate (before Monday):**
- Assign hard dates to hidden-competency alignment, filter reorder, and search button reinstatement — currently unscheduled but implicitly needed before the stakeholder demo
- Confirm whether Monday's CFT troubleshooting and optimisation review compete for the same engineers

**Monday (2026-07-13):**
- CFT troubleshooting session (per Team 2 standup)
- Optimisation review call (Rama, Adrian Lo, Engineering)
- Infrastructure assessment of search behaviour change
- Rathika's test account prep / test data discussion

**Follow-up:**
- Address the process gap that let the search button change ship without product/infra review — separate from the immediate revert
- If Monday doesn't resolve the Opportunities blocker, Rama/Michelle to update stakeholders on readiness risk before the demo, not after
