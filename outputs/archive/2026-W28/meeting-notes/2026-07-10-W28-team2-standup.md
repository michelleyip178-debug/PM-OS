# Meeting Notes: Team 2 Standup

**Date:** 2026-07-10 (Fri, W28)

**Attendees:** Pow Hwee TAN, Michelle YIP, Rathika Ramalingam, fanxu.wang, Léo, (referenced but not confirmed present: Hao Eng, Kingsley, Adrian, Rama Moorthy)

**Type:** Engineering Sync — daily standup (escalated into risk review)

**Duration:** Not specified

---

## Summary

This was not a typical stand-up — it turned into a risk escalation session. OTG competencies import is live in Dev and QA for some accounts, but the OTG upload/CFT integration path is broken and blocking demo readiness, with no single owner and heavy dependence on Hao Eng's knowledge of CFT. The team agreed to stop hiding issues behind workarounds, hold future demos from QA, and tighten QA as a release gate. Michelle's confidence in demo readiness is dropping, and nobody in the meeting challenged that assessment.

This is the third Team 2 standup logged this week ([2026-07-07](../../outputs/meeting-notes/2026-07-07-W28-team2-standup.md), [2026-07-08](../../outputs/meeting-notes/2026-07-08-W28-team2-standup.md)) — the pattern across all three is the same: feature progress is outpacing deployment/environment confidence. The 07-07 notes flagged "QA environment migration mostly succeeded, but critical validation... remains incomplete" as a theme; today's meeting confirms that gap widened into a full blocker.

---

## Decisions Made

1. **No workaround-only demo strategy**
   - **Why:** Pow Hwee TAN and Michelle YIP both argued that hiding the broken OTG/CFT flow behind a temporary workaround just to hit the demo would bury the root cause and let technical debt accumulate silently.
   - **Who decided:** Pow Hwee TAN, supported by Michelle YIP.
   - **Impact:** Permanent fixes take precedence over demo optics. This raises real risk that OTG import has nothing new to show next week (see Risks below).

2. **Two teams to hold a joint CFT troubleshooting session**
   - **Why:** Michelle requested screen-sharing and a focused working session because Slack threads aren't resolving the root cause.
   - **Who decided:** Michelle YIP, accepted by the group.
   - **Impact:** Needs Adrian, Kingsley, and relevant engineers convened — see Action Items.

3. **Future demos will be conducted from QA, not Dev**
   - **Why:** Pow Hwee TAN confirmed this was already agreed previously; reaffirmed here given today's confidence drop.
   - **Who decided:** Pow Hwee TAN.
   - **Impact:** Consistent with the 07-07 decision to "use QA environment for future sprint demonstrations, not Dev" — this is now being enforced under pressure rather than treated as aspirational.

4. **QA becomes the formal release gate**
   - **Why:** Michelle and Pow Hwee reinforced that QA should verify functionality and escalate issues as bugs, not absorb them as unpaid engineering troubleshooting.
   - **Who decided:** Michelle YIP and Pow Hwee TAN.
   - **Impact:** Depends heavily on Rathika Ramalingam operationalizing this manually today — see Risks Not Being Fully Addressed.

---

## Action Items

| Task | Owner | Due Date | Priority | Notes |
|------|-------|----------|----------|-------|
| Convene troubleshooting session with Adrian, Kingsley, and relevant engineers to find CFT root cause | Léo | No date given — schedule within 48 hrs given demo urgency | 🔴 High | Screen-sharing session |
| Escalate lack of visibility/access into CFT setup | fanxu.wang | No date given | 🔴 High | To discuss with Rama Moorthy; clarify responsibilities and required access |
| Schedule discussion on test accounts and test data strategy | Rathika Ramalingam | Monday (2026-07-13) | 🟡 Medium | Explicitly planned for Monday |
| Define and communicate QA promotion/gating process | Rathika Ramalingam | No date given — recommend before next demo | 🔴 High | Team-wide process, currently undocumented |
| Request developers notify QA immediately after Dev deployment | Rathika Ramalingam | No date given | 🟡 Medium | Reduces accumulation of untested changes |
| Progress automation of end-to-end QA testing | Rathika Ramalingam | Next sprint | 🟢 Low | Targeted, not urgent |
| Continue OTG import fixes and Careers@Gov changes | Léo | Ongoing | 🔴 High | Existing priority workstream |
| Stocktake architecture and refresh diagrams | Unassigned | No date given — needs an owner | 🔴 High | Proposed by Michelle YIP; not formally assigned — see Risks Not Being Fully Addressed |

**Notes:**
- Most items have no due date despite explicit urgency ("if this thing is not solved today, we are all screwed next week"). Given the PO demo is imminent, the CFT troubleshooting session and the architecture stocktake both need hard dates assigned, not left open.
- The architecture stocktake is a high-value recommendation with no owner — flagging this as the single most important gap to close in this list.

---

## Key Insights & Quotes

**Michelle YIP, on architecture visibility (meeting chat):**
"the first step the two team should do is to stocktake on the entire architecture and update the diagram, else we are shooting blanks"

**Michelle YIP, on demo confidence:**
"that confidence level is dropping for me" and "If this thing is not solved today, we are all screwed next week." — not challenged by anyone in the meeting.

**Knowledge concentration:**
"Only Hao Eng really knows what is happening with CFT." Per [[Hao Eng pronouns]] memory, Hao Eng is female (she/her) — this is a single point of failure risk, not a phrasing note.

**Infrastructure diagnosis progress:** fanxu.wang identified that requests were routed to a public ALB instead of the intended intranet ALB, plus a CFT configuration problem — real technical diagnosis, not fully resolved yet.

---

## Open Questions

- [ ] Who is the single accountable owner for CFT resolution until it's fixed in production? — **Owner:** Unassigned — **By:** Immediately (no declared owner as of this meeting)
- [ ] What can actually be demonstrated at the PO demo if OTG import isn't ready? — **Owner:** Pow Hwee TAN / Michelle YIP — **By:** Before demo planning finalizes
- [ ] Who owns the architecture stocktake and diagram refresh Michelle proposed? — **Owner:** Unassigned — **By:** Needs assignment this week

---

## Risks

**High Risk: CFT integration blocking MVP capability**
OTG imports unavailable, demo capability reduced, testing blocked. This is now the single biggest blocker to the PO demo.

**High Risk: Environment instability**
Repeated references to configuration conflicts, environment variables, and QA networking constraints (public vs. intranet ALB) point to ongoing platform instability beyond this one incident.

**High Risk: Single points of failure**
Knowledge and access are concentrated in a handful of people (notably Hao Eng on CFT). Any absence creates a hard stop on troubleshooting.

## Risks Not Being Fully Addressed

These are inferences from the discussion, not explicit decisions:

1. **No formal incident owner.** The team debated who broke it, who knows it, and who should troubleshoot, but never declared a single person accountable until resolution.
2. **Architecture debt is now affecting delivery.** No shared, current end-to-end architecture reference exists — people understand their own areas but not the full flow across CFT, OTG import, Keycloak, and competency ingestion. Michelle called this out directly in chat, and it went unassigned in the action items.
3. **Demo objectives are still unclear** this close to the PO demo — the team was still debating what can and can't be shown, suggesting demo planning is lagging execution.
4. **QA governance is aspirational, not embedded.** Gating, deployment approvals, and end-to-end tests were proposed but currently depend entirely on Rathika Ramalingam's manual intervention — a second single-point-of-failure risk alongside the CFT knowledge concentration.

---

## Timeline Risks

- **TIMELINE RISK:** This is the third standup this week (07-07, 07-08, 07-10) raising deployment/environment confidence gaps, and each one escalated in severity — from "QA validation lagging" (07-07) to "OTG import cannot be demoed, no clear owner" (07-10). If the PO demo date is inside the next few days, the CFT root cause needs to be found today or tomorrow at the latest for any fix-and-verify cycle to complete in time. No demo date was stated in this transcript — confirm it explicitly before committing to Léo's troubleshooting session as sufficient runway.

---

## My Bottom-Line Assessment

If reporting to SteerCo or programme leadership: the primary risk is no longer feature development, it's operational coordination. The team can build functionality, but environment ownership, cross-team integration, architecture visibility, and QA governance are now the main constraints on delivery confidence. OTG import/CFT integration is the most visible blocker, and unless accountability, architecture clarity, and troubleshooting ownership are tightened immediately, similar blockers will keep emerging even after this specific issue is fixed.

Per [[SteerCo scope]] memory: Michelle co-preps the SteerCo demo with the trio but doesn't own the North Star brief or SteerCo deck — if this escalates to SteerCo, flag that ownership boundary early rather than assuming Michelle drafts it.

---

## Next Steps

**Immediate (today/tomorrow):**
- Convene the CFT troubleshooting session (Léo) — this is the critical path item
- Assign an accountable owner for CFT resolution
- Assign an owner for the architecture stocktake

**This week:**
- Rathika's Monday test data/account strategy discussion
- Define QA promotion/gating process formally

**Follow-up:**
- Revisit demo scope once CFT root cause is known — confirm what's actually demoable
