---
date: 2026-07-24
week: 2026-W30
meeting_type: engineering-sync
topic: Team 2 Standup — Import Stabilisation, Ring-Fencing, Production Env Risk
---

# Meeting Notes: Team 2 Standup

**Date:** 2026-07-24

**Attendees:** Michelle Yip, Thomas, Rathika Ramalingam, Léo, Hao Eng Chua, fanxu.wang@thoughtworks.com

**Meeting Type:** Engineering sync (daily standup)

**Duration:** Not stated

**Source:** Meeting transcript, condensed into an executive summary before processing

---

## Summary

Overall health is green with amber risks. OTG and Careers@Gov imports are largely working end-to-end (37 of ~43 opportunities imported successfully), ring-fencing is nearly done and expected to merge today, and the team has shifted from "can we build it" to "can we stabilise, test, and operationalise it." The sharpest risk to emerge wasn't technical — it's that the production environment is blocked because the supporting GovTech team lost capacity to layoffs, and current escalation isn't landing.

---

## Decisions Made

1. **Remove the opportunity card divider across all cards**
   - **Why:** More than half of opportunities don't have the data the divider was separating, so it often divides nothing and just adds whitespace
   - **Who decided:** Team (design change assigned to Amber)
   - **Impact:** Amber to update the design; divider removed consistently across all cards

2. **Do not switch closing-date logic to start-date logic**
   - **Why:** The latest data file has no future start dates, so switching would risk showing little or no data to users
   - **Who decided:** Michelle Yip ("Let's just go with what we have as of now. I don't want to disrupt this working version anymore.")
   - **Impact:** Current implementation stays; a spike is created to investigate the date-logic question later rather than risking a live regression now

3. **Freeze OTG data enhancement work for MVP**
   - **Why:** Current version is functioning; further changes risk destabilising something that already works
   - **Who decided:** Team
   - **Impact:** Future improvements get handled separately; MVP logic stays as-is

4. **Escalate the unresolved agency-code approach to Pow Hwee**
   - **Why:** Unclear whether engineering will commit to maintaining additional agency mappings going forward
   - **Who decided:** Team (deferred, not resolved in this meeting)
   - **Impact:** If engineering declines to maintain additional mappings, this becomes a business call on whether to simply not display opportunities from unmapped agencies — see Blockers below

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Continue carrier retry mechanism improvements; complete remaining MRs | Léo | Not stated | 🟡 Medium | 🟡 In Progress |
| Review agency reference-table issue with Pow Hwee | Léo | Not stated | 🔴 High | 🔴 Not Started |
| Merge ring-fencing changes | Thomas | Today (2026-07-24) | 🔴 High | 🟡 In Progress |
| Continue OTG import stabilisation | Thomas | Not stated | 🟡 Medium | 🟡 In Progress |
| Participate in agency-code discussion | Thomas | Not stated | 🔴 High | 🔴 Not Started |
| Finalise competency-ID support | Thomas | Not stated | 🟡 Medium | 🔴 Not Started |
| Fix integration tests | Hao Eng Chua | Not stated | 🟡 Medium | 🔴 Not Started |
| Investigate upload issue | Hao Eng Chua | Not stated | 🟡 Medium | 🔴 Not Started |
| Follow up on missing agency codes | Hao Eng Chua | Not stated | 🔴 High | 🔴 Not Started |
| Attend agency-data discussion | Hao Eng Chua | Not stated | 🔴 High | 🔴 Not Started |
| Address MR review comments | fanxu.wang@thoughtworks.com | Not stated | 🟡 Medium | 🔴 Not Started |
| Continue deployment automation work | fanxu.wang@thoughtworks.com | Not stated | 🟡 Medium | 🟡 In Progress |
| Escalate production environment support issue | fanxu.wang@thoughtworks.com | Not stated | 🔴 High | 🔴 Not Started |
| Demo function filter and Careers@Gov functionality | Rathika Ramalingam | Not stated | 🟡 Medium | 🔴 Not Started |
| Complete detailed-page testing | Rathika Ramalingam | Not stated | 🟡 Medium | 🔴 Not Started |
| Review additional QA coverage; update test scenarios | Rathika Ramalingam | Not stated | 🟡 Medium | 🟡 In Progress |
| Review OTG enhancement opportunities separately (spike) | Michelle Yip | Not stated | 🟢 Low | 🔴 Not Started |
| Make business call on unsupported agencies if engineering declines mapping maintenance | Michelle Yip | Not stated | 🔴 High | 🔴 Not Started |
| Drive UAT test-scenario consolidation | Michelle Yip | Not stated | 🔴 High | 🟡 In Progress |
| Support internal demo readiness | Michelle Yip | Not stated | 🟡 Medium | 🔴 Not Started |

**Notes:**
- "Merge ring-fencing changes" is the only item with an implied date (end of day today) — everything else is open-ended. Given production environment access and agency-code decisions are both flagged as top risks, those two in particular need real dates, not "whenever."
- "Drive UAT test-scenario consolidation" is the same deliverable tracked across [2026-07-24-W30-otep-squad-sync.md](2026-07-24-W30-otep-squad-sync.md) and [2026-07-24-W30-handover-imelda-rama.md](2026-07-24-W30-handover-imelda-rama.md) — already in progress, not a fresh start.

---

## Key Insights & Quotes

**Scope discipline on date logic:**
"Let's just go with what we have as of now. I don't want to disrupt this working version anymore." — Michelle Yip. Deferring the date-logic question to a spike instead of touching working code mid-stabilisation is the right call this close to UAT.

**Production environment frustration:**
"There's no way you can stretch into GovTech." / "Make them go and do their work." — Michelle Yip, reacting to fanxu.wang's update that the supporting GovTech team's capacity dropped due to layoffs. This signals the current escalation path isn't landing and engineers can't self-unblock here.

**Import health:**
Thomas reported ~37 of the latest opportunity file's records imported successfully, 6 failing, and the rest excluded because their opportunity types (jobs, secondments) aren't supported yet. Ring-fencing is at "mostly the final state" and expected to merge today.

---

## Open Questions

- [ ] Who owns agency reference data maintenance going forward — engineering or business? - **Owner:** Pow Hwee (to weigh in), Michelle Yip (business call if engineering declines) - **By:** Not stated
- [ ] What's the actual path to unblock the production environment given GovTech's reduced capacity? - **Owner:** fanxu.wang@thoughtworks.com - **By:** Not stated
- [ ] Is there an escalation deadline or fallback plan if GovTech capacity doesn't recover? - **Owner:** Not assigned - **By:** Not stated

---

## Blockers

1. **Production environment access blocked by GovTech capacity loss**
   - **Blocked by:** The GovTech team supporting production environment setup lost capacity to layoffs
   - **Impact:** MVP could be feature-complete and still miss its deployment window because of an external team's reduced bandwidth — this is not something engineering can fix by working harder
   - **Resolution:** fanxu.wang to escalate; no alternative path, deadline, or contingency plan currently exists. This is the single biggest open risk from this standup and needs an owner beyond "escalate and hope"

2. **Agency reference data governance unresolved**
   - **Blocked by:** No agreed answer on whether engineering will maintain mappings for agencies not currently represented in reference tables
   - **Impact:** Opportunity visibility could become inconsistent — some agencies show, others silently don't, with no documented business rule for why
   - **Resolution:** Deferred to a discussion with Pow Hwee; if engineering won't maintain new mappings, Michelle makes the business call on whether unmapped agencies simply don't get shown

---

## Next Steps

**Immediate (this week):**
- Confirm ring-fencing merge completed as expected
- Push fanxu.wang's production environment escalation to get a concrete response, not just "escalated"
- Land the agency-code conversation with Pow Hwee and get a decision, not another deferral

**Short-term (next 2 weeks):**
- Complete QA coverage review and detailed-page testing (Rathika)
- Run the OTG data quality spike (Michelle)
- Continue folding UAT scenario consolidation into the broader UAT plan already in motion

**Follow-up meeting:**
- Not stated. Given the production environment issue has no deadline or contingency yet, recommend flagging it in the next squad sync or directly to Adrian Ang, since it's an external dependency the team can't resolve on its own — same pattern as the VAPT/Products risks already being escalated to leadership per [2026-07-24-W30-otep-squad-sync.md](2026-07-24-W30-otep-squad-sync.md).

---

## Context for Future Reference

This is the first standup surfacing the GovTech layoffs impact on the production environment — no prior meeting notes in this workspace mention it, so it's a new risk, not a recurring one. It sits alongside the VAPT vendor risk and Products data risk already tracked from today's squad sync as a third external-dependency threat to the October MVP timeline, but unlike those two, this one currently has no owner-assigned escalation deadline or fallback plan. Worth treating as equally leadership-visible, not just an engineering-sync footnote.

The agency-code/agency-mapping governance question also connects to the broader agency-data threads already active in [2026-07-23-W30-cc-pocdex-data-requirements.md](2026-07-23-W30-cc-pocdex-data-requirements.md) and the [OTG ingestion decision log](../../context-library/decisions/otg-ingestion-decision-log.md) — this may be the same underlying reference-data gap resurfacing in a new context rather than a distinct new issue.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw transcript/notes</summary>

See command arguments for full source content (executive summary, what went well/didn't, decisions, actions, and risks as originally provided).

</details>
