---
date: 2026-06-23
type: slack-thread
channel: psd-pdo-otep-int
period: 2026-06-18 to 2026-06-23
messages: 38
participants: Adrian ANG (PSD), Michelle YIP (PSD), Victor ONG (GovTech)
topic: CoachPal / Max integration into CareerCompass
---

# Slack Thread: CoachPal + Max Integration into CareerCompass

**Channel:** psd-pdo-otep-int

**Period:** 18–23 Jun 2026 (38 messages)

**Participants:** Adrian ANG, Michelle YIP, Victor ONG (GovTech)

---

## Summary

Mark has already committed to the Max team that CareerCompass will have a Max entry point — this is not a question, it is a given. The active question is *where* and *how*. Separately, the team is being asked to explore CoachPal integration. Both Adrian and Michelle are sceptical: CoachPal is a FAQ bot with weak engagement metrics and Michelle's research confirms user frustration. Adrian's instinct is to scope it narrowly (profile page placement) and push the heavier lift — an engagement survey tool — back onto the Max team. Victor adds that CoachPal's utility could improve significantly if fed CareerCompass personalised data. Meeting with Jasmine Richard (Max/CoachPal team) scheduled for 29 Jun; Adrian joining 30 Jun after his return from leave.

---

## Decisions Made

1. **Meeting with Jasmine Richard confirmed: 29 Jun**
   Michelle has booked it. Adrian to join 30 Jun (first day back from leave). No decision output expected until after both sessions.

2. **Framing: Max is the priority, CoachPal is the constraint**
   Mark's commitment creates the Max entry point as a must-explore. CoachPal integration is being driven by someone else's ask — the team's job is to understand the use case before committing scope.

3. **Adrian's working hypothesis: CoachPal on the profile page**
   Narrow placement, low-risk. Doesn't commit CC to owning the product post-integration. Push the engagement survey tool request back to Max team to build natively.

---

## Action Items

| Task | Owner | Due | Status |
|------|-------|-----|--------|
| Meet Jasmine Richard — CoachPal/Max use case, integration intent, ownership, timeline | Michelle | 29 Jun | 🟡 Booked |
| Join Jasmine Richard follow-up session after leave | Adrian | 30 Jun | 🟡 Planned |
| Understand Max's strengths + find suitable CC placement | Michelle | Before 30 Jun debrief | 🔴 In progress |
| Share CoachPal research report with team | Michelle | Done (shared in thread) | 🟢 Done |

---

## Questions for Jasmine Richard (29 Jun)

From Michelle:
- What does CoachPal usage data look like? (volumes, sessions, drop-off)
- What does "integration" actually mean — entry point only, or deeper?
- What are the technical constraints on CoachPal's end?
- Who owns the product post-integration — the Max team or CC?
- What is the timeline rationale? Why now?

From Adrian:
- What problems is CoachPal designed to solve? (stated purpose vs actual use)
- What are the performance metrics? (not just engagement — outcomes)
- Is there data on categorised query types? (what are users actually asking it?)

---

## Key Context

**CoachPal — what the team knows:**
- FAQ bot architecture, not a conversational AI
- Average turns per conversation: 2.4
- 70% of users give up after 2 prompts
- User frustration is documented — both Adrian and Michelle have observed this
- Low engagement is consistent with the FAQ-bot design pattern (users expect a conversation, get a lookup tool)

**Max — what the team knows:**
- Mark has already committed CC will have a Max entry point (not negotiable)
- Michelle shared a research report on Max in this thread (see `CoachPal_Research_Report.docx` — confirm this is the right file, currently untracked in PM-OS root)
- Michelle has a live interview script for Max → CC integration research (`../../../research-synthesis/2026-06-18-W25-careercompass-max-interview-script.md`)
- Research assumptions being tested: whether officers who reflect via Max end up on CC, whether direction is unclear before they can act, whether commitment friction is the blocker

**Victor's point (GovTech):**
CoachPal's performance could improve substantially if it is fed CC's personalised officer data (competencies, career stage, saved jobs, application history). This reframes the integration: rather than just placing a CoachPal widget in CC, CC becomes the data layer that makes CoachPal smarter. Worth surfacing with Jasmine.

---

## Open Questions

- [ ] What exactly is the Max entry point Mark has committed to — link, widget, CTA, summary card? **Owner: Michelle → clarify with Adrian before 30 Jun**
- [ ] Does CoachPal integration have a formal ask / scope attached, or is this exploratory? **Owner: Michelle → clarify with Jasmine 29 Jun**
- [ ] Who owns CoachPal post-integration — if CC places it, does CC own support/maintenance? **Owner: Michelle → confirm with Jasmine 29 Jun**
- [ ] Victor's personalised-data angle — is CC's data architecture ready to serve CoachPal? **Owner: Pow Hwee (flag after 29 Jun meeting)**
- [ ] Does this become an open item / R1.5+ scope, or is it MVP-adjacent? **Owner: Michelle → raise with Adrian after 30 Jun debrief**

---

## Risks

**Scope creep risk:** Mark's commitment creates implicit pressure to deliver something without a clear brief. The 29 Jun meeting should produce a use case definition before any scope is agreed — don't let a commitment become a feature without going through the normal discovery → scope → decision chain.

**Ownership risk:** FAQ bots with low engagement are expensive to maintain and tend to get orphaned. If CC integrates CoachPal and the Max team doesn't own it, CC inherits a low-value surface. Adrian's instinct (push engagement survey back to Max team) protects against this.

---

## Next Steps

**Before 29 Jun:**
- Review Max research interview script to prep for Jasmine meeting
- Clarify with Adrian: what exactly is the Max entry point Mark committed to?

**29 Jun — Jasmine Richard session:**
- Run through the question list above
- Get a clear definition of "integration" from their side
- Ask about ownership model explicitly

**30 Jun — Adrian debrief:**
- Share Jasmine session output
- Get Adrian's call on scope: does CoachPal integration go on the product roadmap, profile page only, or parking lot?

**After debrief:**
- If it lands on the roadmap → open item in `00-hub/open-items.md`
- If parking lot → log decision in `../../../decisions/2026-05-29-W22-decisions-log.md` with rationale

---

## Related Files

- [Max interview script](../../../research-synthesis/2026-06-18-W25-careercompass-max-interview-script.md) — research being run in parallel
- `CoachPal_Research_Report.docx` — untracked in PM-OS root; move to `outputs/research-synthesis/` or `context-library/research/`

---

*Captured: 2026-06-23. Source: Slack AI summary, psd-pdo-otep-int, Jun 18–23 (38 messages).*
