# Meeting Notes: OTEP Squad Sync

**Date:** 2026-08-07

**Time:** 9:00–9:30 AM

**Organiser:** Jace Tan

**Attendees:** Rama Moorthy, Pow Hwee Tan, Adrian Ang, Victor Ong, Imelda Mo, Michelle Yip (and team)

**Meeting Type:** Team sync — UAT/VAPT readiness and risk review

**Duration:** 30 minutes

---

## Summary

Moderately positive overall, with one critical blocker: unresolved infrastructure connectivity is preventing internal UAT despite the POCDEX API itself being ready. Most CSC/SIAW workstreams (course file, learner file, JumpStart) are complete or near-complete, and the team is proactively trying to pull Phase 3 UAT testing into Phase 2 to build recovery buffer before VAPT. Status reporting relied heavily on verbal assurances ("should be able to," "looks completed") rather than confirmed evidence — worth treating today's "green" self-assessments with some skepticism until the infra blocker actually clears.

---

## Decisions Made

1. **AI recommendation UAT validation will test relevance, not ranking order**
   - **Why:** Testers will be given a test account, job family, job function, and role profile data, then filter the dataset themselves and compare to the UI. Randomised recommendation ordering is accepted and won't be treated as a defect.
   - **Who decided:** Team consensus
   - **Impact:** Avoids a potentially large debate about AI recommendation accuracy standards; keeps UAT scope focused on whether filtering logic works, not on ranking quality.

2. **Role profile data will be used for manual UAT validation**
   - **Why:** Testers filter role profile data themselves and compare results with the UI output.
   - **Who decided:** Team consensus
   - **Impact:** Defines the concrete UAT test method for recommendations.

3. **Assess pulling Phase 3 UAT test cases into Phase 2**
   - **Why:** CSC can only do UAT in late August/early September, which compresses the schedule against VAPT. Pulling test cases earlier (recommendation testing, whitelisting, employment exclusion testing) creates recovery buffer.
   - **Who decided:** Team consensus, Rama to confirm details
   - **Impact:** Not yet finalized — Rama and Imelda are assessing which items can actually move.

4. **No new UAT personas will be created**
   - **Why:** Existing personas remain; email addresses will be substituted for selected test accounts instead, per Johnny's advice.
   - **Who decided:** Team consensus, informed by Johnny
   - **Impact:** Simplifies UAT account setup, avoids new persona-creation overhead.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Assess and confirm which Phase 3 items can move into Phase 2 UAT | Rama Moorthy / Imelda Mo | Monday | High | 🔴 Not Started |
| Investigate and resolve infrastructure connectivity blocker (POCDEX/Transit Gateway) | Rama Moorthy, Pow Hwee Tan, engineering | Midday update today | 🔴 Critical | 🟡 In Progress |
| Confirm whether further approvals are needed for alternative infra routing | Rama Moorthy | Today | 🔴 Critical | 🔴 Not Started |
| Provide more precise SSO testing date | Pow Hwee Tan | Today | High | 🔴 Not Started |
| Provide endpoint list for possible VAPT expansion | Pow Hwee Tan | ASAP, no fixed date | Medium | 🔴 Not Started |
| Follow up with Johnny and Eng Chuan on connectivity solution | Pow Hwee Tan | ASAP, no fixed date | High | 🔴 Not Started |
| Complete AI-IDSC evaluation write-up | Victor Ong | Not set — flagged "Pending" | Medium | 🔴 Not Started |
| Chase data dependency from HRPS/CVs | Adrian Ang | Ongoing, no fixed date | Medium | 🟡 In Progress |
| Identify replacement accounts for CSC-related SSO testing | Imelda Mo, Rama Moorthy | After meeting | Medium | 🔴 Not Started |
| Send test account email after account review | Imelda Mo, Rama Moorthy | After meeting | Medium | 🔴 Not Started |

**Notes:**
- Almost every item beyond today's midday infra update has no fixed due date — worth confirming these before they slip silently.
- The infra connectivity item is the single blocking dependency: nothing downstream (internal UAT, external UAT, VAPT start) can proceed with confidence until it's resolved.

---

## Key Insights & Quotes

**On UAT readiness confidence vs. official status:**
- Michelle's own Teams message captured the real concern: "Not meant to be naggy, is our UAT environment ready for internal UAT?" Despite most workstreams self-reporting green, this became the meeting's central issue — confidence is lower than the stated status suggests.

**On the infrastructure blocker:**
- API is ready; infrastructure connectivity is not. The original Transit Gateway approach is reportedly no longer supported, and the team is evaluating an alternative agency-managed approach (both accounts belong to the same agency, so Pow Hwee suggested this could be solved internally rather than waiting on a central team).
- No confirmed root cause was presented — possible causes floated include Transit Gateway support change, new connectivity architecture requirement, service request rejection, DNS/name resolution issues, or internal routing config. Several participants had only partial visibility.

**On status reporting maturity:**
- Repeated use of "should be able to," "hopefully," "looks like completed," "we expect to resolve" — limited evidence-based reporting for a programme this close to UAT/VAPT. Worth treating today's green/amber self-assessments with some skepticism until backed by an actual passed test.

**On VAPT scope risk:**
- If intranet routing isn't resolved and internet routing remains the working path, VAPT scope may expand because the MVP was designed without that route — additional endpoints, potential cost and schedule impact.

**Strategic considerations:**
- Adrian Ang repeatedly challenged assumptions on UAT readiness, VAPT impact, dependency timelines, and infra blockers — described as healthy governance surfacing risk early rather than at the deadline.
- Ownership emerged organically (Pow Hwee on SSO/endpoints, Rama on UAT phase reassessment, Victor on AIIDSC docs, Michelle on data readiness/UAT accounts) but no single accountable owner was named for the infra blocker itself.

---

## Open Questions

- [ ] Who is the single accountable owner for infra connectivity resolution? — **Owner:** Unassigned (distributed across Rama, Pow Hwee, engineering, platform teams) — **By:** Today
- [ ] What exactly is failing — API call, routing, TGW, DNS, firewall? When did it start? Can it be bypassed? — **Owner:** Rama/Pow Hwee to produce a one-page root-cause summary — **By:** Not set, recommend today
- [ ] Is the agency-managed fallback routing feasible, and does it need approvals? — **Owner:** Pow Hwee — **By:** Today (per action items)
- [ ] What's the fallback if the infra blocker isn't resolved by tomorrow or next week? — **Owner:** Unassigned — **By:** Not discussed in meeting, needs defining
- [ ] Does revised VAPT scope (if internet routing becomes permanent) have a cost/schedule estimate? — **Owner:** Unassigned — **By:** Not set

---

## Blockers

1. **Infrastructure connectivity preventing POCDEX API access in UAT**
   - **Blocked by:** Root cause not yet confirmed; Transit Gateway approach no longer supported, alternative being evaluated
   - **Impact:** Blocks internal UAT → external UAT → defect-fix window → VAPT start → go-live, in cascading sequence
   - **Resolution:** Midday update expected today; no committed fix owner named in the meeting itself

2. **Intranet routing unresolved, internet routing used as interim path**
   - **Blocked by:** Same underlying infra issue as above
   - **Impact:** If internet routing becomes the permanent path, VAPT scope likely expands beyond what MVP was designed/scoped for
   - **Resolution:** Open, no date

---

## Timeline Risks

- **TIMELINE RISK:** This meeting's CSC UAT window (late August–first week of September) and the infra/VAPT compression concerns track closely with the PS/DS approval note discussed in today's daily plan appendix (proposing UAT move to mid-Aug–early-Sep, VAPT to early-Sep–mid-Nov 2026). Worth checking whether this Squad Sync's schedule-risk framing already assumes the revised PS/DS timeline, or is still working against the original (pre-delay) dates — the transcript doesn't make this explicit either way.
- **TIMELINE RISK:** No formal critical-path tracker exists connecting infra fix → internal UAT → external UAT → defect fixing → VAPT → go-live, despite this chain being referenced repeatedly. Without it, the schedule risk from today's blocker can't be quantified. This is the same "no critical path timeline" gap flagged in yesterday's R1 timeline planning meeting notes — a second, separate critical-path artifact this week without an owner or date.
- **TIMELINE RISK:** "Investigate and resolve infra connectivity blocker" has a midday-today checkpoint, but every other action item in this meeting has no fixed due date ("ASAP," "ongoing," "pending," "after meeting"). Given the infra item is the pacing blocker for the whole chain, the undated items downstream of it (SSO date, endpoint list, AIIDSC write-up) have no way to be sequenced against it yet.

---

## Risks

1. **Infrastructure blocker delays internal UAT** (🔴 Critical)
   - **Blocked by:** Root cause not yet identified
   - **Impact:** Cascades through internal UAT → external UAT → defect-fix window → VAPT → go-live
   - **Resolution:** Escalate today if root cause remains unknown after midday, no committed fix owner emerges, or no successful end-to-end test completes

2. **VAPT timeline compression** (🔴 High)
   - **Blocked by:** CSC UAT only available late Aug/early Sep, leaving limited buffer before VAPT
   - **Impact:** Could become the longest critical-path item outside PSD's direct control
   - **Resolution:** Escalate if UAT start slips, Phase 2/3 consolidation fails, or critical defects remain open entering VAPT

3. **Internet routing becomes permanent, expanding VAPT scope** (🔴 High)
   - **Blocked by:** Intranet routing still unresolved
   - **Impact:** Additional VAPT scope, possible cost increase, additional endpoint testing, schedule impact
   - **Resolution:** Escalate if intranet route isn't confirmed by the next readiness review

4. **AIIDSC approval path not confirmed** (🟡 Medium)
   - **Blocked by:** Uncertainty on submission route (email vs. formal evaluation) and required documentation
   - **Impact:** 3–4 week lead time discussed — if the path isn't confirmed soon, this could itself become a critical-path item
   - **Resolution:** Victor Ong's write-up in progress, no date set

5. **Dependency visibility too low — status reporting relies on unconfirmed assurances** (🟠 Medium)
   - **Blocked by:** No integrated critical-path tracker
   - **Impact:** Leadership may believe delivery is green while schedule risk is actually increasing
   - **Resolution:** Escalate if no tracker exists by end of day

---

## RAG Status (as assessed from this meeting)

| Area | Status | Comment |
|---|---|---|
| UAT Environment Readiness | 🔴 Red | Infrastructure connectivity blocker unresolved |
| POCDEX Integration | 🔴 Red | Connectivity issue preventing full internal UAT |
| CSC Integration Workstreams | 🟢 Green | Workstreams 1, 2, 4 (course file, learner file, JumpStart) largely complete; SSO ongoing |
| SSO Workstream | 🟠 Amber | Connectivity verified via internet route; intranet route pending |
| VAPT Readiness | 🟠 Amber | Dependent on routing resolution and UAT completion |
| Overall Delivery | 🟠 Amber | Deliverable, but infra blocker sits squarely on the critical path |

---

## Next Steps

**Immediate (Today):**
- Midday update on infra connectivity investigation
- Confirm whether alternative infra routing needs further approvals
- Pow Hwee to provide precise SSO testing date and endpoint list for VAPT
- Run a 3pm readiness checkpoint with a binary (not amber) answer: Ready for Internal UAT — Yes/No
- If not confident UAT can be ready, flag to WD today rather than waiting

**Short-term (This week):**
- Rama/Imelda confirm Phase 3→Phase 2 UAT consolidation by Monday
- Establish a single accountable owner for the infra blocker, not distributed ownership
- Produce a one-page root-cause summary for the connectivity issue (what's failing, since when, who owns the fix, can it be bypassed, what validates success)
- Define fallback scenarios: fixed today → proceed; fixed next week → rebaseline UAT; not fixable before UAT → define manual/mock integration; requires architecture change → escalate to Steering Committee

**Follow-up Meeting:**
- **Date:** Not specified — 3pm readiness checkpoint today is the immediate next touchpoint
- **Purpose:** Binary readiness call on internal UAT
- **Attendees:** Not specified, presumably same core group plus WD if a delay needs flagging

---

## Context for Future Reference

This is the second meeting this week (after yesterday's CSC-Compass SIT Progress Review) to surface an unresolved infrastructure/connectivity gap sitting upstream of UAT readiness — yesterday's was the CFT "file ready for download" eventing gap, today's is POCDEX API connectivity via Transit Gateway. Both share the same underlying pattern: components report "complete" or "ready" based on partial or manual verification, not full end-to-end proof. Worth naming as a programme-wide pattern (verification maturity, not just two isolated bugs) if it recurs a third time.

This also connects directly to the PS/DS timeline approval note referenced in today's daily plan (`outputs/daily-plans/2026-08-07-W32-daily-plan.md`) — that note proposes UAT move to mid-Aug–early-Sep and VAPT to early-Sep–mid-Nov 2026. This meeting's framing of "CSC UAT only available late Aug/early Sep, compressed against VAPT" doesn't explicitly reference that proposal, so it's unclear whether this Squad Sync was already working from the revised dates or still assumed the original timeline. Worth clarifying which one the team is actually planning against before more schedule-risk analysis compounds on a stale baseline.

The "no critical path tracker" gap flagged here is the same failure mode flagged in yesterday's R1 timeline planning notes (`outputs/meeting-notes/2026-08-06-W32-r1-timeline-planning.md`) — two different workstreams (R1 planning, UAT/VAPT readiness) both missing the same artifact this week.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original PM-authored assessment</summary>

Full PM-authored assessment covering: executive summary; What Went Well (UAT validation alignment, CSC/SIAW workstream progress, proactive schedule-risk reduction, early risk surfacing by Adrian, emerging ownership); What Didn't Go Well (UAT readiness confidence gap, poorly understood infra blocker, reliance on verbal assurances, unsettled VAPT assumptions); 5 major risks with severity ratings; risks not sufficiently addressed (no contingency plan, no critical path tracking, manual-workaround risk, absent defect management strategy); 4 decisions made; 10 action items; PM assessment with 5 numbered priorities (single recovery owner, confirm failure point, validate agency-managed fallback, don't wait on ticket SLA, prepare UAT fallback strategy); RAG status table; recommended 3pm checkpoint questions.

</details>
