# Meeting Notes: Bi-weekly Sync with Adrian Ang

**Date:** 31 August 2026

**Attendees:** Adrian Ang (Director of Product Management), Michelle Yip

**Meeting Type:** 1:1 / recurring bi-weekly sync

**Source:** Otter.ai transcript

---

## Summary

Adrian tightened the employment-lifecycle-change timeline significantly: development must finish by **end of September**, not "before VAPT" as loosely tracked — because Huiting's team expects Compass to start employment-profile UAT on **19 October**, and working backward from a December development-freeze / January UAT / VAPT chain for R1 leaves only ~6 weeks for this workstream. Adrian and Michelle aligned to commit to **50 of Huiting's 118 test cases** (the highest-impact subset: job ID, job family/function, and competency changes — explicitly *not* covering position-ID-only changes like no-pay-leave holding positions, which Adrian will tell Huiting is out of scope for Compass). Separately, Adrian flagged a people-management issue with Rama (overloaded, information bottleneck between PM and engineers) and asked Michelle for feedback to relay; discussed the opportunities R1 one-pager BCR approach; and gave feedback on AI-assisted one-pager writing (cut duplication, don't just accept every AI suggestion).

---

## Decisions Made

1. **Compass's employment-change scope narrows to four data domains: job ID, job family, job function, and competency changes.**
   - **Why:** These are the fields that materially affect Compass output (matching, recommendations). Position-ID-only holding patterns (e.g., no-pay-leave parking positions) don't carry competency data and don't affect Compass.
   - **Who decided:** Adrian
   - **Impact:** Directly resolves Mobility-2/no-pay-leave-adjacent ambiguity — Adrian will explicitly tell Huiting this is "important for product/HR, not important for Compass" and Compass will not cover it in this employment-change round.

2. **Commit to 50 of Huiting's 118 test cases for this round.**
   - **Why:** Covers the highest-impact subset (job ID, family/function, competency) without absorbing the full 118-case list, which includes P1-for-Huiting items (like no-pay-leave) that aren't consequential for Compass.
   - **Who decided:** Adrian, confirmed with Michelle
   - **Impact:** This is now the working scope commitment to communicate to Huiting's team — separate and in addition to the ~11-case POCDEX Day-2 cut already in progress with Imelda (these appear to be two related but distinct case sets; worth explicitly reconciling which cases overlap before either commitment goes out).

3. **Employment-lifecycle development must finish by end of September — six-week window, three sprints.**
   - **Why:** Huiting's team expects Compass employment-profile UAT to start **19 October**. Sprint 9 doesn't start until 6 September (confirmed via this week's stale-check) — working backward, Sept only gives ~3 sprints, and the team then needs to pivot to CMM/R1 work afterward. Adrian: "we don't have... at most, this employee profile change can only do development until end September."
   - **Who decided:** Adrian
   - **Impact:** **This is materially tighter than what's currently tracked.** The W36 weekly plan and open item #60 treat employment-lifecycle work as "before VAPT" with no hard date; this conversation sets a concrete **end-September dev freeze**, driven by an **external 19 October UAT start date from Huiting's team** that isn't in any current tracker. Flagging as a timeline risk below.

4. **"Last modified date" business rule: accept it as the working requirement, decouple from test case definition.**
   - **Why:** Adrian doesn't see a viable alternative flag/mechanism, and Huiting's team has been asking for this since July. Rama's hesitation to commit isn't about the mechanism being wrong — it's separable from test-case design, which is "another thing." Adrian: "we just have to accept and put it as a requirement."
   - **Who decided:** Adrian
   - **Impact:** This directly resolves the R11 blocker tracked in open item #60 and referenced across three prior documents as the unresolved gap blocking POCDEX Day-2 test case scoping. **Recommend updating #60 and the R11 tracking to reflect this as accepted**, pending Rama's explicit sign-off (see Action Items).

5. **Rama and Adrian Lo to receive PM-sourced requirements directly, in parallel, rather than serially through Rama.**
   - **Why:** Rama is overloaded and has become an information bottleneck (duplicative work observed — Rama was both scoping test cases *and* thinking through the solution). Removing the serial handoff frees Rama's mental space for architecture/design review, where Adrian has observed him accepting engineer proposals without enough scrutiny due to time pressure.
   - **Who decided:** Adrian
   - **Impact:** Structural change to how the team communicates — Adrian wants a joint conversation with both Rama and Adrian Lo to set this up explicitly, "make it very clear to Adrian [Lo] that... you are not waiting on Rama."

6. **Compass will not pursue a "Year 7" OTG extension; push back using officer lock-in / license utilisation data.**
   - **Why:** Reported OTG login metrics use misleading cumulative reporting (a "line chart that will always not do worse than last month"). Real utilisation is estimated at roughly 1,000 active users against a 100,000-seat license (~1%), with 113,000 accounts provisioned and 3,000 unfilled. Adrian: "I'll be surprised if even 10,000 log in a month."
   - **Who decided:** Adrian (direction); Michelle already pushing back with Xian Zhang
   - **Impact:** Strengthens the case to decline OTG's contract extension ask. Action: get OTG's actual monthly active user numbers if they'll share them.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Tell Huiting: no-pay-leave / position-ID-only changes are out of scope for Compass's employment-change work | Adrian | This week (before Wed BO sync per #60/#39 threads) | 🔴 High | 🔴 Not Started |
| Confirm 50-of-118 test case commitment with Huiting's team | Adrian / Michelle | Before Wed (Huiting expects lockdown of requirements Wednesday) | 🔴 High | 🔴 Not Started |
| Get Rama's explicit sign-off on "last modified date" as the accepted requirement (decoupled from test case design) | Michelle | This week | 🔴 High | 🔴 Not Started |
| Reconcile the 50-case Huiting commitment against the ~11-case POCDEX Day-2 BO cut (Imelda's Tuesday session) — same universe or different? | Michelle | Before finalizing either commitment | 🔴 High | 🔴 Not Started |
| Design a way to tell BOs which failures are "fixable now" vs. "not fixable, here's why" (e.g., HR system didn't deactivate an old account properly) so they don't escalate to Product unnecessarily | Michelle | Ongoing, feeds Tuesday's WD session | 🟡 Medium | 🟡 In Progress |
| Set up joint conversation with Rama and Adrian Lo — direct PM-to-engineer requirement flow, Rama holds quality/architecture bar | Adrian | Not stated | 🟡 Medium | 🔴 Not Started |
| Give Rama direct feedback (from the CSC/ThoughtWorks miscommunication incident, 29 Aug) — be explicit, he may miss softer signals | Michelle | Not stated — Michelle already partially did this via Slack | 🟡 Medium | 🟡 In Progress |
| Share opportunities R1 discovery findings from designer once received | Michelle | When designer shares | 🟢 Low | 🔴 Not Started |
| Send opportunities one-pager Google Doc to Adrian for review | Michelle | Not stated | 🟡 Medium | 🔴 Not Started |
| Try to get OTG's actual monthly active login numbers (not cumulative) to strengthen the "no Year 7 extension" case | Michelle | Not stated | 🟢 Low | 🔴 Not Started |
| Confirm whether R1 needs a second VAPT cycle, and size the CAM-integration-driven new-endpoint scope | Michelle | Feeds R1 planning | 🟡 Medium | 🔴 Not Started |

**Notes:**
- Several items have no due date — the two flagged 🔴 High with "before Wed" are hard because Huiting's team expects the requirements locked Wednesday (per Adrian: "on Wednesday, Hui Ting expects us to lock down the requirements").
- The Rama/Adrian Lo structural conversation and the direct feedback to Rama should probably happen this week too, given the CSC incident is fresh (29 Aug) and Rama already sensed friction.

---

## Key Insights & Quotes

**On scope:** "For Compass, we are interested in family, function, and competency changes... these three normally come with job ID as well." — Adrian, drawing the exact boundary of what Compass needs to handle from HR system changes.

**On the no-pay-leave case:** "To us, it is so-called not important because that no-pay-leave position probably has no competency and nothing." — Adrian, explaining why a position-ID-only change (holding position during NPL) doesn't need Compass coverage, even though it matters to the product/HR side.

**On risk tolerance for launch:** "If they just complain and we can fix it, it's not a problem... If they complain and there's no way to manually patch it, that's a problem." — Adrian, articulating the actual bar for what must ship before 24–25 Nov vs. what can be fixed post-launch.

**On the Rama bottleneck:** "If I turn back time, the test cases are probably... you all should just run the lead, and then just run it, because he had to spend so much time looking at the test cases, then he went to think of the solution... they were doing duplicative work." — Adrian, diagnosing why Rama is overloaded.

**On OTG's reporting:** "That line chart will always not do worse than last month... it's like actually I don't understand how DS can accept that type of report." — Adrian, on OTG's cumulative-login metric obscuring real (low) utilisation.

**On one-pager quality:** "I think AI is not really helping us in this... if you get one comment from your AI chat, you will easily introduce one paragraph, maybe two. Then you keep on doing that — you bloat." — Adrian, on why AI-assisted writing needs active editing, not just incorporation of every suggestion.

---

## Open Questions

- [ ] Does the 50-of-118 commitment to Huiting overlap with, replace, or sit alongside the ~11-case BO cut Imelda is running through tomorrow (Tuesday WD session)? — **Owner:** Michelle — **By:** Before Tuesday's session, ideally before Wednesday's Huiting lockdown
- [ ] Does R1 require a second, separate VAPT cycle? Adrian's working assumption is yes ("I think once we do... we have to do a VAPT again for R1") — needs confirming against R1 planning, not just noted in passing here. — **Owner:** Michelle — **By:** Feeds R1 planning timeline
- [ ] What is Compass's actual R1 development-to-UAT-to-VAPT critical path, given "UAT by mid-Jan, then 8 weeks VAPT"? This wasn't previously tracked at this level of specificity. — **Owner:** Michelle/Adrian — **By:** R1 planning

---

## Blockers

1. **End-September employment-lifecycle dev freeze is a new, tighter constraint not reflected in any current tracker.**
   - **Blocked by:** Nothing yet — this is a planning input, not a blocker in progress. But it materially compresses the window compared to what open item #60 and the W36 weekly plan assume.
   - **Impact:** If treated as "before VAPT" (loose) rather than "end of September, 3 sprints" (Adrian's actual framing), the team could plan against the wrong deadline.
   - **Resolution:** Update open item #60, risks.md, and the W36 weekly plan to reflect the real constraint: dev freeze end-Sept, driven by Huiting's team's 19 October UAT start.

2. **Huiting's Wednesday requirements lockdown expectation is a hard, near-term deadline with no current owner assigned in the trackers.**
   - **Blocked by:** Rama's outstanding sign-off on "last modified date" as the accepted requirement (Decision 4 above)
   - **Impact:** If Rama's sign-off doesn't land before Wednesday, the lockdown conversation with Huiting either slips or proceeds without full internal alignment.
   - **Resolution:** Michelle to close the loop with Rama this week, ahead of Wednesday.

---

## Timeline Risks

- **TIMELINE RISK: A new, harder external deadline surfaced in this meeting that isn't in any current tracker.** Adrian named **19 October** as the date Huiting's team expects Compass employment-profile UAT to start, and worked backward to an **end-of-September development freeze** (3 sprints from Sprint 9's 6 Sep start). The current W36 weekly plan and open item #60 both describe this work as "before VAPT" with no specific date. These are not the same deadline — end-September is materially earlier and tighter than "before the 7 Sep VAPT kickoff" framing would suggest. **Action:** reconcile and correct open-items #60, risks.md, and next week's planning against the real end-September constraint, sourced to Adrian directly.

- **TIMELINE RISK: Two potentially overlapping test-case commitments are being tracked separately.** Imelda's Tuesday WD session is working from an ~11-case BO-approved cut (from POCDEX's original 82→18 case funnel). This meeting names a separate **50-of-118** commitment to Huiting's team. It's unconfirmed whether these describe the same underlying scope from two different angles (POCDEX case IDs vs. Huiting's requirement-level test cases) or genuinely different case sets. **Action:** reconcile before Wednesday's Huiting lockdown, so Michelle/Imelda aren't accidentally committing to two different scopes that don't add up.

- **TIMELINE RISK: R1 UAT/VAPT critical path floated verbally (UAT by mid-January, 8 weeks VAPT) has not been sized or logged anywhere.** This is early, rough math from the conversation, not a committed plan — but if it starts getting repeated as a working assumption without a proper sizing exercise, it risks becoming "fact" the way the 31 Aug Sprint 9 date did. **Action:** treat as a discussion input only until formally sized; don't let it propagate into trackers uncorroborated.

---

## Next Steps

**Immediate (Today/Tomorrow):**
- Close the loop with Rama on "last modified date" sign-off, ahead of Wednesday
- Reconcile the 50-case Huiting commitment against Imelda's ~11-case BO cut before/during tomorrow's WD session
- Update open item #60 and risks.md with the corrected end-September dev-freeze constraint

**Short-term (This Week):**
- Adrian tells Huiting: no-pay-leave/position-ID-only changes are out of Compass scope
- Confirm 50-of-118 with Huiting's team before Wednesday's lockdown
- Send opportunities one-pager to Adrian
- Give Rama direct feedback; support Adrian's planned joint conversation with Rama + Adrian Lo

**Follow-up Meeting:**
- Next bi-weekly sync (2 weeks out) — Adrian mentioned continuing individual "experience" discussions ("Yip life") as a recurring feature of this catch-up series, separate from work-tracking content.

---

## Context for Future Reference

This conversation reframes the employment-lifecycle timeline in a way that supersedes the looser "before VAPT" framing carried in open item #60 and the current weekly plan. It also surfaces, for the first time in any tracked document, a specific external deadline (19 October, Huiting's team) driving that framing — worth treating as authoritative since it came directly from Adrian, the person with visibility into Huiting's team's plan.

Separately: the Rama/Adrian Lo structural conversation is a real people-management thread that will likely need its own follow-up, distinct from the delivery-timeline content above. The CSC/ThoughtWorks miscommunication incident from Friday 29 Aug is the immediate, concrete example driving Adrian's concern — worth having ready if a broader conversation about Rama's role happens.

---

## Appendix: Raw Transcript

<details>
<summary>Click to expand raw transcript</summary>

See source document: `Bi-weekly sync - Michelle_transcript.txt` (Otter.ai transcription, 2026-08-31)

</details>
