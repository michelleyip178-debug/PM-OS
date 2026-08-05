# Meeting Notes: CSC/OTEP SIT Readiness Sync

**Date:** 2026-08-03

**Attendees:** Michelle Yip, Rama Moorthy, Pow Hwee Tan, Adrian Lo, Sy En Lee (CSC), Muhammad Herman Hartoyo (CSC), Aderick Cheng (CSC), plus references to Marcus, Kimberly (roles not specified in source)

**Meeting Type:** Stakeholder review — cross-team SIT (System Integration Testing) readiness assessment

**Duration:** Not specified

---

## Summary

CSC and the OTEP/PSD team met to align on System Integration Testing (SIT) readiness across four workstreams: SSO, Course integration, Learner file, and Jumpstart. The team made real progress clarifying the SSO architecture and surfaced a critical open question (internet vs. intranet routing for token validation) before it became a hidden blocker. CSC pushed hard, and rightly, on the absence of clear SIT acceptance criteria, ownership, and planning detail. Michelle intervened to redirect a vague dates-only discussion toward activity-level planning with named owners. The meeting closes with several open risks — most notably a compressed timeline with no contingency plan, and no single owner for cross-workstream integration readiness.

---

## Decisions Made

1. **Use intranet routing for CSC-to-OTEP token validation (for now).**
   - **Why:** Avoids introducing an internet-facing path that would trigger additional VAPT (security assessment) scope, which the team doesn't have time to absorb given the compressed timeline.
   - **Who decided:** Team consensus, driven by the SSO architecture discussion.
   - **Impact:** CSC will perform connectivity tests against this routing first. If intranet routing proves infeasible, this decision reopens and VAPT scope changes.

2. **Slack for daily coordination, email for formal summaries, weekly syncs continue.**
   - **Why:** Given only ~4 working days before SIT activities begin, the team needs a fast, low-friction channel.
   - **Who decided:** Team consensus.
   - **Impact:** No daily stand-up was agreed — see Risks below; CSC flagged concern that async-only coordination may not be enough for a 4-day window.

3. **DEV/QA/UAT environment mappings are generally aligned.**
   - **Why:** Baseline confirmation needed before SIT can start.
   - **Who decided:** Team consensus.
   - **Impact:** Career Compass endpoint details still need to be finalized and shared (see Action Items).

4. **Rama to own revising the SIT plan with activity-level detail, acceptance criteria, and named owners.**
   - **Why:** Michelle's intervention — the discussion had drifted into dates without execution substance. CSC (Sy En Lee) had already flagged this as a gap.
   - **Who decided:** Michelle, agreed by Rama.
   - **Impact:** This is the single highest-leverage action item from the meeting — see PM Readout below.

---

## Action Items

*WS Affected mapped against the CSC SIT/UAT Confluence tracker's workstream definitions: WS1 = Course Integration, WS2 = Learner File (NRIC→DLE), WS3 = SSO, WS4 = JumpStart. Source meeting notes don't tag by workstream — this mapping is inferred from task content, not stated in the meeting.*

| Task | Owner | WS Affected | Due Date | Priority | Status |
|------|-------|:---:|----------|----------|--------|
| Perform connectivity test to OTEP endpoints | Muhammad Herman Hartoyo (CSC) | WS3 | Immediate — SIT window is ~4 working days | High | 🔴 Not Started |
| Provide entry URL and remaining SSO prerequisites | Muhammad Herman Hartoyo (CSC) | WS3 | Before SIT connectivity testing | High | 🔴 Not Started |
| Test CFT (file transfer) process; support file movement into Career Compass | Aderick Cheng (CSC) | WS1 (likely also WS2 — CFT carries both the course file and the DLE mapping file; source doesn't specify which) | Before SIT | High | 🔴 Not Started |
| Provide updated issuer URLs and SSO configuration details | Pow Hwee Tan | WS3 | Before SIT connectivity testing | High | 🔴 Not Started |
| Coordinate connectivity investigation | Pow Hwee Tan | WS3 | This week | High | 🔴 Not Started |
| **Revise SIT plan: break down activities, add acceptance criteria, clarify ownership, send revised timeline, coordinate daily tracking, verify VAPT implications** | Rama Moorthy | WS1, WS2, WS3, WS4 (cross-workstream — this is the master tracker action) | Urgent — before SIT begins | 🔴 Critical | 🔴 Not Started |
| Work with Aderick on file transfer validation; support endpoint testing; prepare account setup approach | Adrian Lo | WS1 (file transfer) + WS3 (endpoint testing, account setup reads as SSO-related) | Before SIT | High | 🔴 Not Started |

**Notes:**
- Rama's action item is really six distinct deliverables bundled into one line in the source material — worth splitting into a tracked checklist given how much rides on it (see PM Readout).
- No action item currently owns "cross-workstream integration readiness" as a whole — this is itself a gap (see Risks).
- **WS3 (SSO) carries the heaviest concentration of action items** — 4 of 7 items touch it directly (both Herman's, both Pow Hwee's), plus Adrian Lo's item partially. Consistent with WS3 being the workstream with the unresolved routing decision and no SSO test run yet as of this meeting.

---

## Key Insights & Quotes

**What went well:**
- The SSO architecture is now clear: Career Compass as Identity Provider (via Keycloak), CSC/DLE as Relying Party, with token validation, client registration, and endpoint exchange mechanics discussed.
- The internet-vs-intranet routing question was surfaced *before* SIT started, not during it — this exposed a hidden assumption with real implications for firewall setup, networking, security review, and VAPT scope.
- CSC's pushback (led by Sy En Lee) on unclear SIT activities, missing acceptance criteria, and unclear ownership was constructive, not obstructive — these are legitimate programme management gaps.
- Michelle's intervention shifted the conversation from "what dates" to "what activities, owned by whom, with what resourcing" — this is the single most consequential moment in the meeting.

**What didn't go well:**
- **No agreed SIT success criteria per workstream.** CSC repeatedly asked "what exactly constitutes SIT success?" and got improvised answers in the room. Risk: different people believe SIT is "done" while having tested different things.
- **Ownership is still being derived live, not pre-established.** Example: Aderick pushed back that he owns connectivity but not data integrity; CSC had to ask who owns data validation. This should have been settled before the meeting, not during it.
- **SIT and UAT scope are being conflated.** SIT should cover connectivity/routing/file transfer/API validation; UAT should cover business data validation, recommendation accuracy, end-to-end journeys. CSC asked multiple times why data integrity validation is being pushed to UAT rather than SIT — this was never fully resolved in the meeting.
- **Dependencies aren't ready:** Course integration file transfer still pending (CFT exists but untested), SSO issuer URLs and endpoints still changing, Jumpstart has staging data mismatch concerns with unclear active sync to CSC.

---

## Risks

### Actively discussed (owned, but still open)

1. **Network connectivity risk** — routing path, firewall expectations, whitelist requirements, and actual connectivity testing outcome are all still unresolved. Mitigation: CSC to test and troubleshoot. **Status: Open.**
2. **VAPT impact risk** — unresolved questions on internet-facing components, API exposure, WOGAD connectivity, and VAPT assessment scope. Rama committed to checking with the VAPT team. **Status: Open.**
3. **Data consistency across workstreams** — course data, learner data, and Jumpstart recommendations must align for end-to-end testing; Jumpstart staging may not reflect current CSC staging data. **Status: Open.**

### Not being actively addressed (surfaced in this analysis, not resolved in the meeting)

4. **Schedule risk (highest risk).** The current plan implicitly assumes connectivity, file transfer, parsing, and data mapping all work on the first try, with only ~4 working days available. CSC repeatedly warned about this. No contingency plan was discussed.
5. **Integration owner risk.** No single person owns overall integration readiness, cross-workstream defect triage, or end-to-end validation — everyone owns a component, nobody owns the whole. This is the same integration-workstream concern flagged in earlier discussions.
6. **Test data strategy risk.** No agreed golden test dataset, agreed officer population, or expected outputs exist yet. Without this, UAT risk becoming subjective — different people validating against different implicit standards.
7. **Daily governance risk.** The team agreed to skip a daily stand-up in favor of Slack-only coordination, but CSC explicitly flagged "we only have four days" as a reason this might not be enough. Compressed timelines usually need tighter sync, not looser.

---

## PM Readout (Michelle's Assessment)

The most important framing from this meeting: **the real risk isn't SSO, it's integration governance.** Five signals point to this:
1. No integrated SIT plan
2. No documented acceptance criteria
3. No agreed end-to-end test dataset
4. No clear integration lead
5. A very compressed timeline

**Recommended next move:** ask Rama to publish a single tracker with columns for Workstream | Owner | SIT Entry Criteria | SIT Exit Criteria | Dependencies | Blockers, and track it daily in Slack. This single artifact would resolve nearly every concern CSC raised in this meeting and materially improve confidence that SIT completes successfully before UAT starts.

---

## Open Questions

- [ ] Why is data integrity validation being pushed to UAT instead of SIT — is this intentional scope design, or a gap? — **Owner:** Rama / Michelle — **By:** Before SIT begins, since this defines what SIT is actually supposed to prove
- [ ] Who owns overall cross-workstream integration readiness (not just their own component)? — **Owner:** Needs to be assigned — **By:** Immediately, ideally before SIT starts
- [ ] What is the actual SIT success criteria per workstream (SSO, Course integration, Learner file, Jumpstart)? — **Owner:** Rama, per the SIT plan revision action item — **By:** Before SIT begins
- [ ] Is there a golden test dataset / agreed officer population for UAT, and if not, who defines it? — **Owner:** TBD — **By:** Before UAT, ideally before SIT ends
- [ ] Does Slack-only async coordination hold up across a genuinely compressed 4-day window, or does this need a daily stand-up after all? — **Owner:** Team — **By:** Reassess after day 1-2 of SIT

---

## Timeline Risks

- **TIMELINE RISK:** SIT is planned to begin with only ~4 working days available this week, and the plan implicitly assumes first-try success across connectivity, file transfer, parsing, and data mapping. No contingency plan exists if any of these fail on the first attempt, which given the number of moving parts (SSO, Course, Learner file, Jumpstart) across two organizations, is a real possibility. This directly threads into the UAT prep already tracked today (POCDEX requirements, UAT window 11–28 Aug) — if SIT slips, UAT's own tight runway compresses further.
- **TIMELINE RISK:** Rama's action item bundles six distinct deliverables (revise timeline, break down activities, add acceptance criteria, clarify ownership, coordinate daily tracking, verify VAPT implications) with no per-item deadline, against a ~4-day SIT window. This is a lot to land quickly — worth checking in with Rama on sequencing and whether support is needed rather than treating it as one clean task.
- **TIMELINE RISK:** VAPT scope is still unresolved and tied to the intranet-vs-internet routing decision. If Rama's VAPT check comes back requiring broader assessment than expected, this could introduce a new, unplanned timeline dependency on the security review process — worth flagging to whoever owns the overall program timeline now rather than discovering it mid-SIT.

---

## Next Steps

**Immediate (This Week):**
- Rama publishes the revised SIT plan (activities, acceptance criteria, owners) — the single highest-leverage action from this meeting
- CSC performs connectivity testing against the agreed intranet route
- Pow Hwee provides updated issuer URLs / SSO config
- Push for the Workstream/Owner/Entry-Exit-Criteria/Dependencies/Blockers tracker Michelle recommended in the PM Readout

**Before SIT Completes:**
- Resolve whether data integrity validation belongs in SIT or UAT, explicitly
- Assign an overall integration readiness owner
- Define the golden test dataset for UAT

**Follow-up Meeting:**
- Not explicitly scheduled in source material — recommend a short daily Slack-based check-in given the 4-day window, per the Daily Governance Risk above

---

## Context for Future Reference

- This connects directly to today's earlier CSC SSO Slack thread note (`2026-08-03-W32-csc-sso-slack-pow-hwee-rama.md`), which covered Pow Hwee/Rama/Marcus discussing the same SSO integration spec. That thread concluded the spec already existed (15 Jun) and just needed re-confirmation. This SIT readiness meeting is a broader, higher-stakes forum covering SSO plus three other workstreams, and surfaces that the SSO spec question was really a symptom of a larger pattern — the same "answered the questions ≠ approved/aligned" gap keeps recurring across this program (also flagged in the POCDEX requirements doc processed earlier today, and in the 14 Jul OTEP squad sync).
- This also connects to today's UAT tracking work (CC-UAT board sync, OTEP-1047 epic sync) — SIT is the gate before UAT, so a SIT slip has direct downstream impact on the UAT window already confirmed for 11–28 Aug.
- Given three separate today's-date threads (this meeting, the POCDEX requirements doc, and the CC-UAT/OTEP-1047 Jira syncs) all point to the same underlying issue — **unclear ownership and unconfirmed sign-off recurring across CSC, POCDEX, and internal UAT tracking** — this is worth naming explicitly as a program-level pattern, not three separate one-off gaps.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw input (Executive Assessment)</summary>

CSC/OTEP Readiness — Executive Assessment covering: what went well (SSO architecture clarity, early surfacing of internet/intranet routing question, CSC pushback on SIT planning gaps, Michelle's intervention, communication approach agreement); what didn't go well (no acceptance criteria, blurry ownership, SIT/UAT conflation, dependencies not ready); risks being discussed (network connectivity, VAPT impact, data consistency) and risks nobody is addressing (schedule risk, integration owner risk, test data strategy risk, daily governance risk); decisions made (intranet routing, Slack/email communication, environment mapping, SIT planning ownership to Rama); action items by person (Herman, Aderick, Pow Hwee, Rama, Adrian Lo); and a PM readout recommending a single Workstream/Owner/Entry-Exit-Criteria/Dependencies/Blockers tracker updated daily in Slack.

Full original text preserved in the command input for this session.

</details>
