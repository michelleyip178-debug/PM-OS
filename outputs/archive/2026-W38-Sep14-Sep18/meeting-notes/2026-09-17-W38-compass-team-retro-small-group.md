# Meeting Notes: Compass Team Retro — Small Group

**Date:** 2026-09-17

**Time:** 10:00 AM – 11:30 AM (UTC+08:00)

**Location:** In person, LTA

**Attendees:** Adrian Ang (Facilitator/Team Lead), Michelle Yip, Pow Hwee Tan, Rama Moorthy, Barry Lim (Engineering Lead), Imelda Mo (Chair), Jace Tan, Adrian Lo (Technical Lead)

**Meeting Type:** Team Retrospective (Start, Stop, Continue)

**Note:** Pow Hwee Tan left early to travel to the office.

---

## Summary

First retro of its kind on file for this team. Discussion centered on scope instability, unclear stakeholder decision authority, and engineers feeling disconnected from the broader roadmap — all consistent with what's already showing up in the R1 planning work this week (the ~1 Dec kickoff correction, the 5 unconfirmed readiness gates, the BO alignment brief). The team agreed on 8 actions, but most have no deadline attached, which is itself a retro-pattern risk worth naming.

---

## Decisions Made

1. **Develop a documented ways-of-working guide** (stakeholder engagement, dependency management, operating principles)
   - **Why:** responsibilities between PMs, engineers, BOs, and dependent teams haven't been sufficiently defined, causing confusion during discovery and delivery.
   - **Who decided:** Team consensus, owned by Adrian Ang and Product Team.

2. **Adopt a more deliberate stakeholder alignment approach** — socialize major decisions/trade-offs with senior stakeholders before formal sessions
   - **Why:** working-level stakeholder reps often can't make trade-off decisions independently and need escalation, causing delays. Working-level discussions become ineffective when leaders haven't been pre-aligned.
   - **Impact:** directly relevant to this week's BO alignment brief — this is the pattern that brief was built to pre-empt.

3. **PMs continue providing richer roadmap/strategic context to engineers; explore regular engineering knowledge-sharing sessions**
   - **Why:** engineers feel disconnected from programme vision, want to understand how current sprint work ties to longer-term outcomes. Epic docs and sprint planning alone are insufficient.
   - **Who raised:** Pow Hwee Tan (relaying engineer feedback).

4. **All team members should proactively raise material risks and concerns, regardless of role/seniority**
   - **Why:** operational and Day 2 concerns have surfaced too late. Team drew a manufacturing-line analogy — anyone should be able to "stop the line" on a safety-equivalent concern.

5. **Explore value-driven prioritization frameworks** for scope trade-off conversations
   - **Why:** current scope discussions focus on feature completeness rather than measurable business value; scope keeps getting reshaped after stakeholder discussions, eroding confidence in delivery commitments.

6. **Future releases: earlier design completion, stronger external alignment, clearer readiness checkpoints before development begins**
   - **Why:** in MVP execution, design wasn't finalized before development started, and testing accumulated late in the cycle — team named this a key lesson learned.
   - **Impact:** this is the exact principle behind the 5-readiness-gate structure already built for R1 Sprint 1 — the retro validates that structure independently, after the fact.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Publish ways-of-working guide (stakeholder engagement, dependency management, operating principles) | Adrian Ang + Product Team | Not specified | 🟡 Medium | 🔴 Not Started |
| Establish PM + Engineering pairing model for discovery/stakeholder discussions | Product & Engineering Leads | Ongoing, before future discovery activities | 🔴 High | 🔴 Not Started |
| Improve stakeholder alignment — engage senior decision-makers earlier | Product Team | Ongoing | 🔴 High | 🔴 Not Started |
| Provide richer roadmap/strategic context to engineers | Product Managers | Ongoing | 🟡 Medium | 🔴 Not Started |
| Explore regular engineering knowledge-sharing sessions | Barry Lim (discussion lead) | Not specified | 🟡 Medium | 🔴 Not Started |
| Encourage proactive risk escalation culture | Entire Team | Immediate and ongoing | 🔴 High | 🔴 Not Started |
| Evaluate value-based prioritization frameworks | Product Team | Not specified | 🟡 Medium | 🔴 Not Started |
| Ensure design/requirements/dependency alignment complete before development begins | PMs, Designers, Engineering Leads | Before next major release cycle | 🔴 High | 🔴 Not Started |

**Notes:**
- 4 of 8 action items have no due date. "Ongoing" and "not specified" are effectively the same as no deadline — worth assigning concrete dates in the ways-of-working guide itself so these don't join the pattern the team just described (things surfacing too late, decisions not made at the working level).
- Item 8 ("before next major release cycle") lines up directly with R1 — this retro's own output is a mandate that R1 Sprint 1 shouldn't start without the readiness gates cleared, which is already the position taken in the [R1 Sprint 1 readiness gate](../analyses/2026-09-16-W38-r1-sprint1-readiness-gate.md) and today's [planning session brief](../analyses/2026-09-16-W38-r1-planning-session-brief.md).

---

## Key Insights & Quotes

**On the waterfall/agile mismatch:**
- OTG stakeholders expected commitments delivered exactly as originally scoped, despite new discoveries during implementation. The team named this directly: the organization's mindset remains largely waterfall, while the project team is trying to operate agile. This mismatch is a recurring, structural source of tension around scope, timelines, and prioritization — not a one-off miscommunication.

**On discovery blind spots:**
- Earlier discovery efforts lacked sufficient engineering/product pairing, creating blind spots on operational impact, Day 2 support, and integration complexity. Some stakeholder groups underestimated effort because consequences only became visible later in delivery.

**On escalation culture:**
- The "stop the line" manufacturing analogy was used deliberately — the team wants any member, regardless of seniority, to be able to halt discussion when they spot a material risk, the same way a production line can be stopped for a safety concern.

---

## Timeline Risks

- **TIMELINE RISK:** Item 8 ("design/requirements/dependency alignment complete before development begins") is due "before next major release cycle" with no specific date — but R1 Sprint 1 is the next major release cycle, and the risk register already tracks R1's kickoff at ~1 Dec 2026 (corrected from mid-Nov, see [risk register](../analyses/2026-09-16-W38-r1-risk-register.md) R-11). If this retro action item isn't explicitly mapped to the existing 5 readiness gates (30 Oct / 13 Nov / 20 Nov drop-dead dates from the [planning session brief](../analyses/2026-09-16-W38-r1-planning-session-brief.md)), it risks being tracked as a separate, undated commitment that quietly duplicates work already in motion — or worse, nobody notices the two aren't the same thing and R1 planning proceeds without connecting them.
- **TIMELINE RISK:** "PM + Engineering pairing model... before future discovery activities" has no date, but OTEP-578 (OTG ingestion spike) is exactly this kind of discovery activity and is already flagged as unassigned in this week's grooming notes. If the pairing model isn't stood up before that spike gets picked up, it repeats the exact gap the retro just named.

---

## Open Questions

- [ ] Who owns turning "explore value-driven prioritization frameworks" into an actual framework choice, and by when? — **Owner:** Product Team — **By:** Not specified (recommend assigning a date)
- [ ] Does the ways-of-working guide supersede or complement existing docs (e.g. DoR/DoD guidelines in `06-skills-and-decisions/`)? — **Owner:** Adrian Ang — **By:** Not specified
- [ ] Should the "readiness checkpoints before development begins" principle be formally linked to the existing R1 Sprint 1 readiness gate doc, rather than tracked as a separate retro action? — **Owner:** Michelle Yip — **By:** Before R1 roadmap planning session (today, 4-5pm)

---

## Next Steps

**Immediate (This Week):**
- Bring the "readiness checkpoints before development begins" retro decision into today's 4-5pm R1 Roadmap Planning session as reinforcement for the existing 5-gate structure — this is a natural forcing function to get the room to actually commit to gate dates, since the whole team just agreed in principle this morning.
- Flag to Adrian Ang that 4 of 8 action items have no due date, before the ways-of-working guide gets drafted without them.

**Short-term (Next 2 weeks):**
- Stand up PM + Engineering pairing model before OTEP-578 (OTG ingestion spike) moves into active grooming.
- Identify who's evaluating value-based prioritization frameworks and set a target date.

**Follow-up Meeting:**
- No date set for next retrospective — recommend scheduling one after R1 Sprint 1 actually kicks off (~1 Dec) to check whether these 8 actions changed anything in practice, rather than letting it lapse until the next crisis.

---

## Context for Future Reference

This is the first retro captured in the workspace, so there's no prior-pattern comparison yet. Worth flagging: several of today's decisions (readiness checkpoints, stakeholder pre-alignment, risk escalation) are the team independently re-deriving principles already built into this week's R1 planning docs (the 5-gate readiness structure, the BO alignment brief). That's a good sign the planning work is directionally right — but it also means the retro's action items should reference those docs explicitly rather than spawn a parallel, undated set of commitments covering the same ground.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw transcript/notes</summary>

Full Minutes of Meeting as provided — Compass Team Retro - Small Group, 17 September 2026, 10:00 AM – 11:30 AM (UTC+08:00), In person, LTA. Chair: Imelda Mo. Facilitator: Adrian Ang. Source: meeting transcript and chat.

Sections covered: Attendees, Apologies for Absence, Introductions, Summary of Concerns Raised (Ways of Working, Stakeholder Alignment, Scope Management, Product Vision and Strategy, Engineering Context, Risk Escalation Culture, Delivery Readiness), Previous Actions and Retrospective Review, Further Discussions (6.1–6.6), Recommendations and Agreed Actions (8 items), Date of Next Meeting (none set), Meeting Conclusion.

Full original text supplied by Michelle Yip on 2026-09-17.

</details>
