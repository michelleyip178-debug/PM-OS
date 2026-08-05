# Meeting Notes: CSC Daily Standup Alignment — Prep with Ram & Imelda

**Date:** 2026-08-05

**Attendees:** Rama Moorthy (Delivery/Resource Lead), Imelda (Fellow PM), Michelle Yip

**Meeting Type:** Internal prep huddle, ahead of the 9:30am CSC-Compass SIT Daily Standup

**Duration:** ~40 min

---

## Summary

Internal alignment call before today's 9:30am CSC-Compass SIT standup. Confirmed the technical shape of all four workstreams (course files, learner ID/NRIC mapping, SSO, JumpStart) and agreed to drive the standup off a dated, per-activity tracker rather than high-level status. Biggest gaps: workstream activities are still too high-level to catch missing preconditions, SIT vs. UAT boundaries for test accounts aren't crisply resolved, and the timeline slip hasn't been re-baselined — all three get pushed into this morning's standup as the next forcing function.

This directly feeds the 9:30am standup already on today's daily plan — use this as walk-in prep, not just a debrief.

---

## Decisions Made

1. **Use the dated "for discussion" tracker as the primary standup document going forward**
   - **Why:** Organized by date, supports "done / not done / why" tracking per Rama's framing
   - **Who decided:** Michelle, Imelda, Rama
   - **Impact:** This is the same structure as `outputs/analyses/2026-08-05-W32-csc-pm-tracking-list.md` — already live. Standup should walk this document line by line, not restate status verbally.

2. **WS1 (Course) SIT success criteria confirmed**
   - **Why:** CSC pushes both paid and non-paid course files via CFT; Career Compass downloads, parses, and loads into DB successfully — that's "done"
   - **Who decided:** Michelle + Rama
   - **Impact:** Matches the war room tracker's WS1 row (currently 🔴 RED, file overdue since Aug 4) — this criteria should be cited directly at standup when pushing Marcus/Aderick on the overdue file.

3. **One shared test account/learner ID will drive end-to-end integration testing**
   - **Why:** Avoids needing separate provisioning per workstream; simplifies UAT readiness
   - **Who decided:** Rama to own communicating this to CSC
   - **Impact:** Needs provisioning across three systems (WOG AD/EAD, Career Compass, Products/Learn) — no committed dates yet from CSC.

4. **SIT vs. UAT scope boundary confirmed**
   - **Why:** SIT = intra-configuration, connectivity, file movement, back-end validation. UAT = business-facing scenarios and user flow validation.
   - **Who decided:** Michelle + Rama, confirmed in the SSO (WS3) discussion
   - **Impact:** This is the boundary to hold CSC to if they try to push scope into UAT — flagged as a live risk (see below).

5. **All calls to be recorded going forward**
   - **Why:** Michelle's rationale — protects against later disputes on what was committed/when, especially relevant if escalation to Adrian/Ross becomes necessary
   - **Who decided:** Michelle, agreed by Imelda
   - **Impact:** Standard practice starting with today's 9:30am standup.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Present the SIT plan per workstream at 9:30am standup, walking through 4 Aug and 5 Aug tracker rows line by line | Rama | Today, 9:30am | 🔴 High | Not Started |
| Ask each workstream owner at standup: done / in progress / late / why — force explicit ownership per row | Michelle + Imelda | Today, 9:30am | 🔴 High | Not Started |
| Flesh out high-level workstream activities into precise, sequenced, owned steps (Imelda's "A, B, C, not A, C, what happened to B" standard) | Rama, with Adrian Lo/Edric/JumpStart teams | No date set — flag at standup | 🔴 High | Not Started |
| Confirm test account/learner ID provisioning: exact accounts needed, which system (WOG AD/EAD, Career Compass, Products/Learn), target dates | Rama | No date set | 🔴 High | Not Started |
| Communicate to CSC that one shared test account will cover all integration testing | Rama | No date set | 🟡 Medium | Not Started |
| Align with Adrian Lo and Pow Hwee on which edge cases (empty file, malformed data, partial failure) must be covered in SIT vs. deferred to UAT | Rama | No date set — internal sync first, before raising with CSC | 🟡 Medium | Not Started |
| Add SIT success/exit criteria and UAT entry criteria per workstream to the tracker | Rama + Michelle | No date set | 🔴 High | Not Started |
| Start an escalation-readiness log: when timelines were first shared, when slips occurred, what commitments were made | Michelle | No date set | 🟡 Medium | Not Started |
| Push CSC on WS1 overdue course file (via standup) | Michelle/Rama | Today | 🔴 Critical | Not Started — carried from yesterday's war room tracker |

**Notes:**
- No explicit due dates were set for most items in this prep call — the recurring pattern is "raise it at the 9:30am standup," which is today. Several of these should get real dates out of that meeting; if they don't, that's itself worth flagging.
- WS1's overdue file push is the one item with a hard commitment (today) and should be the standup's opening question.

---

## Key Insights & Quotes

**On the timeline:**
- "The timeline has totally slipped, in my opinion, because it has indeed slipped." — Michelle
- No re-baselined SIT/UAT dates came out of this call; that's explicitly deferred to the 9:30am standup.

**On planning granularity (the core gap):**
- "The activities are still a little bit high level... if we can be as specific as possible, I think that would be very great." — Imelda
- "Like I do A, then you do B. Not I do A, then you do C. Then what happened to B?" — Imelda
- This is the same granularity gap the war room tracker was built to solve yesterday — worth checking whether that tracker's structure actually satisfies Imelda's bar, or whether it still needs another pass.

**On SIT vs. UAT expectations with CSC:**
- Adrian (relayed by Michelle): "We need to align on the expectations of what do we consider success for SIT with CSC because they have a slightly different idea..."
- This is a live risk — CSC may consider SIT "done" under lighter criteria than the team is holding to.

**On test accounts:**
- Rama's answers on whether account setup blocks SIT were described as "partially circular" — SIT doesn't strictly need accounts, but the team should collect them during SIT to be ready for UAT. No crisp yes/no landed by end of call.

**On escalation:**
- "If we really need escalation from our stakeholders, right? We need to be justifiable as to why we are pushing them so hard... it's gonna be like fighting a legal case." — Michelle
- No concrete escalation trigger was defined — only the intent to "prepare bullets."

---

## Open Questions

- [ ] Is test account/learner ID provisioning a hard blocker for SIT completion, or only for UAT entry? — **Owner:** Rama — **By:** Today's standup
- [ ] Which edge cases (empty file, partial failure, malformed data) will CSC agree are in SIT scope vs. deferred to UAT? — **Owner:** Rama, after syncing with Adrian Lo/Pow Hwee — **By:** Not yet scheduled
- [ ] Who holds ultimate authority over the SIT plan — Rama as integration lead, or Michelle/Imelda as PM drivers? — **Owner:** Unresolved — **By:** Not yet raised explicitly
- [ ] What's the concrete trigger for escalating to Adrian/Ross if CSC continues slipping? — **Owner:** Michelle — **By:** Not yet defined

---

## Blockers

1. **WS1 course file overdue since Aug 4 (carried from yesterday's war room tracker)**
   - **Blocked by:** Aderick/Edric Cheng (CSC) hasn't pushed the file to CFT
   - **Impact:** Blocks WS1 SIT exit; cascades toward WS4 dependency
   - **Resolution:** Push directly at 9:30am standup — this is the opening question

2. **WS2 mapping file cadence still unconfirmed**
   - **Blocked by:** No named owner (CSC: Kimberly: CC: unassigned) has confirmed supplier/channel/refresh cadence
   - **Impact:** This is the hidden dependency blocking WS3 test accounts and WS4 — flagged in yesterday's tracker as "highest-leverage open item"
   - **Resolution:** Needs a name and a cadence commitment at standup, not another "will confirm"

3. **No named Overall Integration Readiness Owner**
   - **Blocked by:** Rama was asked to propose someone as of yesterday's tracker (4 Aug row, still 🔴)
   - **Impact:** No single person owns cross-workstream escalation — this is why blockers like #1 and #2 sit until someone happens to notice
   - **Resolution:** Rama to name this today, per yesterday's governance gate check

---

## Next Steps

**Immediate (Today):**
- Walk the 9:30am standup through 4 Aug / 5 Aug tracker rows, forcing each owner to state status live
- Push for the overdue WS1 course file and the WS2 mapping cadence — both have "today" commitments riding on them
- Get a clean answer on whether test accounts block SIT or only UAT

**Short-term (This week):**
- Flesh out high-level activities into detailed, owned, sequenced steps across all workstreams
- Rama to align with Adrian Lo/Pow Hwee on edge-case SIT vs. UAT scope before raising with CSC
- Start the escalation-readiness log

**Follow-up Meeting:**
- **Date:** 9:30am today (already on calendar)
- **Purpose:** CSC-Compass SIT Daily Standup — drive off the dated tracker, get explicit per-row status
- **Attendees:** CSC + Career Compass + JumpStart workstream owners

---

## Context for Future Reference

This prep call maps directly onto the CSC integration tracker set built yesterday (`outputs/analyses/2026-08-04-W32-*`). Same names, same workstreams, same open governance gaps (no Integration Readiness Owner, no CC-side owners for WS1/WS2/WS4). Nothing here contradicts yesterday's War Room Tracker — this call was internal prep to walk into today's standup with a plan, not new information.

**Cross-reference:** "Speaker 1" in the raw transcript is Rama (role and language match his stakeholder profile — resourcing/dependency framing, "chasing all the teams"). "Edric Cheng" in the transcript likely refers to the same person as "Aderick Cheng (GovTech)" in the PM tracking list — worth confirming spelling with Rama rather than assuming.

**Timeline check:** No conflict found against known dates — SIT window (27 Jul–7 Aug) and the "5-Day Countdown to SIT Close" from yesterday's war room tracker still apply; this meeting's dates align with "Today = Aug 5" on that countdown (bug-fix window running, WS3 config/infra due to complete).

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original debrief content</summary>

Full structured debrief as provided by the PM, covering: big picture framing, what went well (technical flow clarity, PM rigor, Michelle/Imelda alignment), gaps (high-level activities, unresolved account-setup dependency, timeline slippage not re-baselined, authority ambiguity), risks (granular planning gap, SIT/UAT misalignment risk with CSC, test data as silent blocker, edge-case coverage gap, escalation politics), decisions, and the original action list broken out by Ram vs. Michelle/Imelda.

</details>
