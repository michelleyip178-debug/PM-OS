# Meeting Notes: CSC-Compass SIT Daily Standup

**Date:** 2026-08-07

**Time:** 9:30 AM (per today's calendar)

**Attendees:** Michelle Yip, Adrian Lo, Pow Hwee Tan, Muhammad Herman Hartoyo, Rama Moorthy, Kimberly (CSC), plus PSD/CSC/GovTech/Thoughtworks cross-team — full list not specified in source notes

**Meeting Type:** SIT daily standup — CSC/Compass integration (WS1–WS4)

**Duration:** Not specified

---

## Summary

Productive and execution-focused. Workstream 1 (Course File Import) and Workstream 2 (Learner Mapping/File Validation) both passed SIT cleanly with no blocking defects, and the team walked through and aligned on the full end-to-end officer learning journey for the first time. Workstream 3 (SSO) remains the main open item — ownership and remaining scope were unclear for much of the meeting until pushed toward concrete work items. Two risks got surfaced but not resolved: intranet routing for VAPT (currently running on internet routing, no migration plan) and unhappy-path/error-handling testing, which was consciously deferred to UAT rather than covered in SIT.

---

## Decisions Made

1. **Workstream 1 and Workstream 2 SIT passed, scope considered complete**
   - **Why:** Course file imports and update file verification both completed successfully with no blocking defects.
   - **Who decided:** Team consensus
   - **Impact:** Removes uncertainty from data ingestion components; team can shift focus to end-to-end integration and UAT prep. Unhappy-path testing (malformed files, validation failures) is explicitly deferred to UAT, not additional SIT.

2. **Unhappy path testing deferred to UAT**
   - **Why:** Not stated explicitly beyond time/scope — but the team chose to defer rather than extend SIT.
   - **Who decided:** Team consensus
   - **Impact:** Operational support procedures, root-cause identification, and error reporting usability remain untested until UAT — see Risk 3 below.

3. **Use CSC's 4 validated accounts for UAT, replacing previously identified test accounts**
   - **Why:** These 4 accounts exist in JumpStart, match available test data, and can support UAT scenarios — the prior account set had data issues.
   - **Who decided:** Team consensus, based on CSC's identification
   - **Impact:** Resolves a previously open UAT-readiness blocker on test data.

4. **UAT target remains 31 Aug, tentative pending confirmation**
   - **Why:** No new information changed the date; team continues planning toward it.
   - **Who decided:** Team consensus (CSC to confirm)
   - **Impact:** Matches the date reaffirmed in yesterday's CSC SIT progress review — but see Timeline Risks below on how this squares with today's other threads.

5. **Keycloak account changes route through Leo**
   - **Why:** Consolidates account-configuration change requests to a single point.
   - **Who decided:** Team consensus
   - **Impact:** Adrian Lo to send account additions/modifications to Leo for implementation.

6. **End-to-end officer learning journey approved and aligned**
   - **Why:** First full walkthrough of the journey (Compass login → Learning & Courses tab → landing page → JumpStart recommendations → Search & Discovery → Course Detail → Learn More CTA → SSO into Learn portal).
   - **Who decided:** Team consensus
   - **Impact:** Gives the team a shared mental model for future testing and issue triage — this didn't exist as a documented, agreed sequence before today.

7. **Production data loading: initial full load, then delta loads**
   - **Why:** Standard approach for ongoing sync after initial population.
   - **Who decided:** Team consensus
   - **Impact:** Delta-load window/resilience question still open (see Risk 5) — Rama to verify.

8. **Move SIT standup cadence to Slack unless a live discussion is needed**
   - **Why:** Not stated explicitly — likely reflects that most workstreams have moved from active testing to configuration/monitoring.
   - **Who decided:** Team consensus
   - **Impact:** Standing meeting cadence changes; worth confirming this doesn't reduce visibility into WS3/routing risk while those remain open.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Document SSO monitoring items, hostname risks, and required changes | Adrian Lo | No date set | 🔴 High | 🔴 Not Started |
| Complete SSO configuration between CSC and authentication service | Pow Hwee Tan / Muhammad Herman Hartoyo | No date set | 🔴 High | 🟡 In Progress |
| Provide CSC SL configuration and required parameters | Pow Hwee Tan | No date set | 🔴 High | 🔴 Not Started |
| Replace existing personas with 4 validated UAT accounts | Team | No date set | High | 🔴 Not Started |
| Send account additions/modifications to Leo for implementation | Adrian Lo | No date set | High | 🔴 Not Started |
| Validate latest dataset has been sent to Johnny | Adrian Lo | No date set | Medium | 🔴 Not Started |
| Verify production delta-loading approach (resilience question) | Rama Moorthy | No date set | 🟡 Medium-High | 🔴 Not Started |
| Confirm UAT schedule/date | CSC team | No date set | 🔴 High | 🔴 Not Started |

**Notes:**
- Every action item lacks a due date — same pattern flagged in yesterday's CSC SIT progress review and this morning's Squad Sync. This is now the third consecutive CSC-related meeting this week with this exact gap.
- SSO-related items (documentation, configuration, SL config/parameters) are the largest cluster — 3 of 8 action items — consistent with WS3 being the least resolved workstream.

---

## Key Insights & Quotes

**On the difficulty of turning technical discussion into action:**
- Michelle Yip, mid-meeting: "I hear issue, issue, but I'm trying to think what issue." This captured a real pattern — the group moved through hostname changes → AGD login issues → routing → VAPT → SSO configuration without translating any of it into a concrete owned work item until pushed.

**On intranet routing / VAPT readiness:**
- Current setup uses internet routing; desired final state is intranet routing; VAPT will likely require intranet routing. No migration plan, timeline, owner, test approach, or regression-impact assessment was discussed. This is the same intranet/internet routing gap flagged in yesterday's CSC SIT progress review and this morning's Squad Sync — three consecutive days surfacing the identical unresolved risk.

**On hostname risk:**
- Current hostname may change again; SSO partners may need reconfiguration if it does. No decision on final hostname, freeze date, or communications process.

**On data refresh resilience:**
- Kimberly (CSC) raised: should the delta load cover just the last day, or several days, to provide resilience if a run fails? Left unanswered, deferred to later verification (Rama).

**Strategic considerations:**
- The product-adjacent discussion (clickstream, impressions, recommendation source attribution, deep links, UTM-style parameters) shows the team thinking past MVP into measurement — good instinct, but no decisions were made, so this is a future scope item, not yet a commitment.

---

## Open Questions

- [ ] What exactly remains in Workstream 3, and who owns each piece? — **Owner:** Adrian Lo (documentation), Pow Hwee/Herman (config) — **By:** Not set
- [ ] What is the migration plan for intranet routing ahead of VAPT — timeline, owner, test approach, regression impact? — **Owner:** Unassigned — **By:** Not set, flagged High risk
- [ ] What is the final hostname, and when does it freeze? — **Owner:** Unassigned — **By:** Not set
- [ ] Should delta load cover 1 day or multiple days for resilience against a failed run? — **Owner:** Rama Moorthy — **By:** Not set
- [ ] Is the 31 Aug UAT date still realistic given SSO/routing dependencies are unresolved? — **Owner:** CSC team — **By:** Not set

---

## Blockers

1. **Workstream 3 (SSO) configuration incomplete**
   - **Blocked by:** SL configuration/parameters not yet provided (Pow Hwee), SSO config between CSC and auth service in progress
   - **Impact:** UAT readiness is described as "mostly dependent on completing SSO configuration and test account setup" — this is the critical path item for UAT start
   - **Resolution:** Open, no date

2. **Intranet routing for VAPT — no migration plan exists**
   - **Blocked by:** No timeline, owner, or test approach defined
   - **Impact:** Flagged as a likely late-stage deployment blocker if not addressed before VAPT
   - **Resolution:** Open, no date, no owner

---

## Risks

1. **Intranet routing for VAPT** (🔴 High)
   - **Blocked by:** No migration plan, timeline, or ownership defined; currently running on internet routing
   - **Impact:** Could become a late-stage deployment blocker — same risk flagged independently in yesterday's SIT progress review and this morning's Squad Sync
   - **Resolution:** Needs an owner and migration plan; this is the third meeting this week to surface it without one

2. **Hostname change risk** (🟠 Medium-High)
   - **Blocked by:** No final hostname or freeze date decided
   - **Impact:** SSO partners may need reconfiguration if hostname changes again — future rework likely
   - **Resolution:** Needs a freeze date and communications process

3. **Unhappy-path testing deferred to UAT** (🔴 High)
   - **Blocked by:** Conscious scope decision to defer malformed-file/validation-failure/recovery testing
   - **Impact:** Operational support procedures, root-cause identification process, and error-reporting usability are all untested going into UAT — particularly risky for Day-2 operations
   - **Resolution:** No mitigation discussed; worth flagging as a UAT-entry risk, not just a scope note

4. **Recommendation analytics design undefined** (🟡 Medium)
   - **Blocked by:** No decisions made on clickstream/impressions/attribution/deep-link tracking design
   - **Impact:** If telemetry requirements emerge post-MVP, data model and API changes could become expensive rework
   - **Resolution:** Not urgent for MVP, but worth a scoping decision before it becomes a retrofit

5. **Data refresh failure handling / delta-load resilience** (🟠 Medium-High)
   - **Blocked by:** Open question on whether delta load should cover 1 day or multiple days for resilience
   - **Impact:** Potential operational data loss if a run fails and delta window is too narrow
   - **Resolution:** Rama to verify production delta-loading approach, no date set

---

## Timeline Risks

- **TIMELINE RISK:** This is the third consecutive CSC/UAT-related meeting this week (yesterday's SIT progress review, this morning's Squad Sync, now this standup) to flag intranet-vs-internet routing as an unresolved VAPT dependency with no owner or migration plan. The risk isn't new information each time — it's the same gap surfacing repeatedly without anyone actually owning the fix. Worth escalating as a named, owned risk rather than letting it resurface a fourth time.
- **TIMELINE RISK:** UAT readiness is described here as "mostly dependent on completing SSO configuration and test account setup," and the 31 Aug UAT date is only "tentative pending confirmation" — yet none of the 8 action items in this meeting have due dates. If SSO completion is genuinely the pacing item for UAT start, it needs a date, not an open-ended "in progress."
- **TIMELINE RISK:** As flagged in this morning's Squad Sync notes and today's daily plan, there's an unconfirmed PS/DS approval note proposing UAT move to mid-Aug–early-Sep and VAPT to early-Sep–mid-Nov 2026. This standup's continued "31 Aug, tentative" framing doesn't reference that proposal — worth confirming today whether CSC/this standup's planning already reflects the revised dates or is still working off the original ones. Same open question raised twice today now (Squad Sync and this standup).

---

## Next Steps

**Immediate:**
- Adrian Lo to document SSO monitoring items, hostname risks, required changes
- Pow Hwee/Herman to complete SSO configuration; Pow Hwee to provide CSC SL configuration and parameters
- Replace test personas with the 4 CSC-validated accounts; Adrian Lo to send account changes to Leo

**Short-term:**
- Rama to verify production delta-loading/resilience approach
- CSC to confirm the UAT schedule/date
- Define an owner and migration plan for intranet routing ahead of VAPT — currently the biggest unowned risk across three consecutive meetings

**Follow-up Meeting:**
- Cadence moving to Slack unless a live discussion is needed — worth confirming this doesn't reduce visibility into the still-open WS3/routing risk while those remain unresolved

---

## Context for Future Reference

This is the third meeting this week (after yesterday's CSC SIT progress review and this morning's OTEP Squad Sync) to surface the intranet-vs-internet routing gap as an unresolved VAPT dependency. All three flag it as high-risk; none assign an owner or timeline. This is now a clear pattern, not a one-off gap — worth naming explicitly in whatever tracker or escalation comes out of today, rather than letting a fourth meeting re-surface it.

The "I hear issue, issue, but I'm trying to think what issue" moment is a good example of the PM role converting ambiguous technical discussion into ownership — worth carrying into `/daily-plan`'s Growth From Yesterday framing for tomorrow, alongside yesterday's CSC SIT diagnostic (separating "files arrived" from "the full chain worked").

Also connects to this morning's separate meeting notes: `outputs/meeting-notes/2026-08-07-W32-otep-squad-sync.md` (POCDEX infra connectivity blocker, same UAT-readiness critical path) and `outputs/meeting-notes/2026-08-07-W32-pocdex-data-sharing-approval-email.md` (11 Aug field freeze, production-data purge instruction). All three of today's CSC/UAT-adjacent items — SSO/routing, POCDEX connectivity, and data governance — are converging on the same UAT start date without a single consolidated critical-path view. This is the second distinct programme area this week (after yesterday's R1 timeline planning) missing that artifact.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original PM-authored assessment</summary>

Full PM-authored assessment covering: overall assessment (productive, execution-focused); executive summary status table (WS1/WS2 SIT passed, WS3 partial, WS4 largely complete, UAT tentatively 31 Aug); What Went Well (SIT progress, cross-team alignment, end-to-end journey walkthrough, test account resolution, analytics discussion); What Didn't Go Well (WS3 ownership fuzzy, risk-to-action translation weak, UAT dependency tracking immature); 5 risks not adequately addressed with ratings (intranet routing High, hostname Medium-High, unhappy-path deferral High, analytics design Medium, data refresh resilience Medium-High); decisions table; action items table; PM value-add section (converting technical discussion to actions, clarifying ownership, refocusing toward UAT readiness); overall verdict (🟡 Yellow) with SteerCo-style summary framing.

</details>
