# Meeting Notes: Slack Comms Digest — Yesterday & Today

**Date:** 2026-08-05 (covering Slack activity 2026-08-04 to 2026-08-05)

**Participants across threads:** Imelda Mo, Adrian Ang, Pow Hwee Tan, Barry Lim, Rama Moorthy, Benjamin Aw (GovTech), Victor Ong (GovTech), Jace Tan (cc'd), Michelle Yip

**Meeting Type:** Slack thread digest (6 topics, multiple channels)

**Duration:** N/A — async, spans two days

---

## Summary

Six distinct threads. The most time-critical is CIE CV data validation — GovTech's Benjamin Aw says an end-of-week data delivery is workable, but there's no confirmed fallback path if that slips, and Adrian's own deadline for escalating to Mark is this week. The SIT/UAT workstream thread adds real detail to the CSC integration picture already being tracked: Marcus/Sheryl's automated extraction work is scheduled for 24 Aug (not this week), and there's an unresolved question about whether one shared SSO test account is actually sufficient for UAT sign-off given 20 UAT personas need matching DLE accounts. A new VAPT scope question surfaced (CIE-JD re-VAPT, no funding line) that isn't connected to the VAPT date conflict already being tracked elsewhere, but adds to the same overall VAPT uncertainty. Rama is out today (WFH, headache) — his promised SIT/UAT alignment briefing to Michelle and Imelda didn't happen.

---

## Decisions Made

1. **CIE CV data validation will use a refined data ask to Lee Koon, not the original Cumulus export plan**
   - **Why:** No easy way to export real officer CVs from Cumulus — workaround would take ~1 month, too slow. C@G data was floated as an alternative but may be outdated.
   - **Who decided:** Adrian, acting on Imelda's flag
   - **Impact:** Adrian sent a specific ask (job IDs/role variety, JDs, shortlisted-candidate CVs, success/fail identifier on C@G applications) to Lee Koon today. Benjamin Aw says this should be okay if it lands by end of week.

2. **Fallback agreed if JDs can't be linked to CVs: take a "first cut" of CVs and deprioritize JDs**
   - **Why:** Keeps CIE engine validation moving even if the full data set isn't achievable in time
   - **Who decided:** Not explicitly attributed, floated in the thread
   - **Impact:** This is the working fallback if Lee Koon's data doesn't fully match the ask — worth confirming this is actually acceptable to whoever validates the CIE engine, not just assumed.

3. **CSC's automated file extraction (for UAT, replacing SIT's manual extraction) is scheduled for 24 Aug**
   - **Why:** SIT used a manually extracted file; UAT needs Marcus/Sheryl to build automated extraction from CSC's live applications
   - **Who decided:** Already scheduled, confirmed in thread
   - **Impact:** This is new detail not previously captured in the CSC integration tracking — it explains part of why WS1's course-file work has felt disconnected from what "SIT ready" actually requires long-term. Adrian raised whether this should be preponed given the end-of-August SIT/UAT pressure — left open.

4. **SSO approach: one shared test account across CareerCompass, CSC, and JumpStart domains**
   - **Why:** Simplifies provisioning versus separate accounts per system
   - **Who decided:** Pow Hwee
   - **Impact:** Adrian immediately flagged a real gap: is one shared account sufficient for UAT sign-off, given 20 UAT personas need matching DLE accounts? This directly affects WS3's test-account readiness, which is already flagged elsewhere as blocked. Left unresolved.

5. **Course/learner sync contact confirmed as Kimberly, not Mindy**
   - **Why:** Correction of an earlier assumption
   - **Who decided:** Imelda confirmed today
   - **Impact:** This matches what's already tracked in the CSC integration files (Kimberly was already the named WS2 contact there) — good confirmation, not new information, but worth noting the earlier confusion existed.

6. **Course registration testing scope clarified: not testing registration logic, only that CSC routes officers to LEARN's course page**
   - **Why:** Narrows what WS1/course-related testing actually needs to prove
   - **Who decided:** Clarified today, attributed to the broader thread
   - **Impact:** Worth checking this matches the SIT success criteria already documented for WS1 — if registration *logic* was assumed in scope anywhere else, that assumption needs correcting.

7. **CMM (current R1 scope: HR system integration + admin UI) likely doesn't need re-VAPT; CIE-JD does**
   - **Why:** Barry's assessment — CIE-JD is a new feature moving from MOM to PSD infrastructure, which triggers re-review; CMM isn't moving infrastructure. Fewer findings expected for CIE-JD since MOM already patched most issues.
   - **Who decided:** Barry Lim, in response to Adrian's question
   - **Impact:** This is a new, separate VAPT scope question — not the same as the already-tracked VAPT closure-date conflict (16 Oct vs. 23 Oct). Two different VAPT threads are now open: one about *when* VAPT closes, one about *what* needs VAPT at all. Worth keeping them distinct so they don't get conflated.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm whether anything is missing from the OTEP master timeline Imelda shared | Team | No date — asked, no replies | 🟡 Medium | Open, unanswered |
| Deliver CIE CV validation data (job IDs, JDs, shortlisted CVs, success/fail identifiers) | Lee Koon, via Benjamin Aw | End of this week | 🔴 High | In progress — Benjamin says workable if it lands by EOW |
| Escalate CIE CV data gap to Mark/"the bosses" if no path exists by end of week | Adrian | This week, conditional | 🔴 High | Not yet done — pending EOW outcome |
| Decide whether CSC/Marcus should be asked to prepone the 24 Aug automated extraction work | Adrian raised, no owner assigned | No date | 🟡 Medium | Open, unresolved |
| Resolve whether one shared SSO test account is sufficient for UAT sign-off given 20 personas need DLE accounts | Unassigned | No date | 🔴 High | Open — directly affects WS3 test-account readiness |
| Set up test accounts (CC/CSC/JumpStart) | Blocked pending NRIC/learner ID info from Kimberly | No date | 🔴 High | Blocked |
| Resolve VAPT funding — no official budget line for CIE-JD re-VAPT | Adrian raised, cc'd Jace Tan | No date | 🔴 High | Open, no reply from Jace yet |
| Determine whether the new HRPS API integration for CMM complicates VAPT scope | Unassigned | No date | 🟡 Medium | Open, thread went quiet |
| Add MVP feature screenshots to the Compass roadmap deck for HRPS 2.0 team | Adrian (or delegate) | End of this week | 🟡 Medium | Not started |
| Rama to brief Michelle and Imelda on SIT/UAT alignment with CSC | Rama | Was "this morning" — didn't happen, Rama WFH with headache | 🔴 High | Missed — needs rescheduling |

**Notes:**
- The CIE CV data item and the VAPT funding item are the two with the clearest external deadlines (end of week) and the least clear fallback if those deadlines slip.
- Rama's missed briefing compounds an existing pattern — the VAPT date conflict has now also missed multiple chances to get resolved through him this week (see Timeline Risks below).

---

## Timeline Risks

- **TIMELINE RISK: The 24 Aug automated-extraction work (Marcus/Sheryl) may be too late given end-of-August SIT/UAT pressure already flagged elsewhere.** This wasn't previously visible in the CSC integration tracking — it's a new, dated commitment that sits downstream of the current SIT window (closes 7 Aug) and upstream of UAT. If the CSC-track UAT date genuinely moves to 31 Aug (as raised at this morning's standup), 24 Aug automated extraction has even less buffer than originally thought. Worth connecting this explicitly to the existing UAT-date uncertainty rather than tracking it as a separate item.
- **TIMELINE RISK: CIE CV data delivery is due end of week, with escalation to Mark contingent on missing that date — but no specific day or trigger is defined for when "no path this week" gets declared.** Worth pinning down Friday close-of-business or similar as the explicit checkpoint, so the escalation doesn't quietly slip past the deadline it's meant to protect.

---

## Open Questions

- [ ] Is anything missing from the OTEP master timeline? — **Owner:** Team — **By:** Not yet set, thread unanswered
- [ ] Should CSC/Marcus be asked to prepone the 24 Aug automated extraction work? — **Owner:** Adrian raised — **By:** Not yet decided
- [ ] Is one shared SSO test account sufficient for UAT sign-off given 20 UAT personas need matching DLE accounts? — **Owner:** Unassigned — **By:** Not yet set, but blocks WS3 test-account planning
- [ ] How should VAPT for CIE-JD be funded with no official budget line? — **Owner:** Adrian → Jace Tan — **By:** No reply yet
- [ ] Does the new HRPS API integration for CMM complicate VAPT scope? — **Owner:** Unassigned — **By:** Thread went quiet, not yet answered

---

## Blockers

1. **Test account setup (CC/CSC/JumpStart) blocked on Kimberly providing NRIC/learner ID info**
   - **Blocked by:** Kimberly (CSC)
   - **Impact:** Same blocker already tracked elsewhere as the highest-leverage open item in the CSC integration work — this Slack thread confirms it's still the active constraint, not new
   - **Resolution:** Awaiting Kimberly's response

2. **CIE CV data validation blocked on Cumulus export limitations**
   - **Blocked by:** No easy export path from Cumulus; workaround takes ~1 month
   - **Impact:** Threatens CIE engine validation timeline; escalation to Mark is the fallback if the Lee Koon data ask doesn't land by end of week
   - **Resolution:** Pending Lee Koon's data delivery, tracked against Benjamin Aw's "should be okay by EOW" read

---

## Next Steps

**Immediate (This Week):**
- Confirm Lee Koon's data delivery lands by end of week, or trigger the Mark escalation
- Get a clear owner on the SSO shared-account-vs-20-personas question, since it affects WS3 planning already underway
- Reschedule Rama's SIT/UAT alignment briefing, given today's miss

**Short-term (Next 2 weeks):**
- Add MVP screenshots to the Compass roadmap deck for HRPS 2.0
- Resolve VAPT funding for CIE-JD with Jace
- Decide on preponing the 24 Aug automated extraction work if UAT dates continue to compress

**Follow-up Meeting:**
- **Purpose:** Rama's SIT/UAT alignment briefing (missed today)
- **Attendees:** Rama, Imelda, Michelle

---

## Context for Future Reference

This digest adds real detail to the CSC/DLE integration tracking already in progress — specifically, the 24 Aug Marcus/Sheryl automated-extraction milestone and the 20-persona SSO sign-off question weren't previously captured anywhere in today's CSC standup notes or trackers, and both are worth folding into that tracking rather than left standalone here.

The VAPT thread here (CIE-JD re-VAPT, no funding line) is a **separate, second VAPT question** from the VAPT closure-date conflict (16 Oct vs. 23 Oct) already being chased with Rama. Both are real and both are unresolved, but they're not the same problem — worth keeping them distinct in any consolidated tracking so a fix to one doesn't get mistaken for resolving the other.

Rama being out today explains why the VAPT date conflict didn't get raised at either of today's CSC forums, and why his promised alignment briefing didn't happen — this is circumstantial, not another instance of the pattern of it being deprioritized, though the net effect (still unresolved) is the same.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw Slack digest</summary>

Six topics as provided: OTEP Master Timeline (Imelda shared live timeline, asked for gaps, no replies), CIE CV Data for Engine Validation (Cumulus export limitations, C@G fallback, Adrian's refined data ask to Lee Koon, Benjamin Aw's EOW read, first-cut fallback), SIT/UAT Workstream Dependencies (course import/Marcus-Sheryl, learner file sync/Kimberly correction, SSO scope/Pow Hwee, JumpStart POC confirmed as Cindy Khouw, 24 Aug automated extraction, 20-persona SSO question, course registration testing scope clarified), VAPT Scope — CIE-JD/CMM (Barry's assessment, funding question to Jace, HRPS API integration question, Victor Ong's GovTech Platform AI infra note), Compass HRPS 2.0 Roadmap Deck (GK's request, existing deck shared, MVP screenshots task), and Other (Rama's missed briefing, WFH with headache).

</details>
