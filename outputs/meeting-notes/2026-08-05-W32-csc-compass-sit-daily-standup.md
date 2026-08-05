# Meeting Notes: CSC-Compass SIT Daily Standup

**Date:** 2026-08-05

**Attendees:** Michelle Yip, Rama Moorthy, Imelda, Adrian (Lo), Aderick (Cheng), Pow Hwee Tan, Herman Hartoyo — plus CSC/infra representatives referenced but not confirmed present (Kimberly, Eugene, central infra team)

**Meeting Type:** Daily standup — CSC/Compass/JumpStart SIT integration

**Duration:** Not specified

---

## Summary

First real execution-mode standup off the dated tracker built yesterday. Overall status: 🟠 Amber. The team re-validated several "assumed complete" items instead of taking status reports at face value, and agreed to centralize infrastructure info into a dedicated Confluence page. But the meeting surfaced that infrastructure (DNS, endpoint routing, whitelisting) is the real critical path and isn't being managed as one — plus a new UAT timeline slip (31 Aug, not the previously tracked 24/25 Aug) and a JumpStart/CSC staging data mismatch that could produce false defects downstream.

**This is the actual standup output — separate from this morning's earlier prep huddle notes** ([outputs/meeting-notes/2026-08-05-W32-csc-standup-alignment-with-ram-imelda.md](2026-08-05-W32-csc-standup-alignment-with-ram-imelda.md)). Notably, the VAPT date conflict (16 Oct vs. 23 Oct) that was flagged as today's priority to raise here **did not come up** — still unresolved, still needs a direct ping to Rama separately.

---

## Timeline Risks

- **TIMELINE RISK: CSC-track UAT slipping from 24/25 Aug to 31 Aug.** Every existing tracker (`csc-sit-uat-tracker-restructure.md`, `csc-war-room-tracker.md`, `sit-uat-completion-checklist.md`, `raid-log.md`, `timeline-raid-log.md` — all dated 2026-08-04) has the CSC-track UAT window as **24/25 Aug – 4 Sep**. Today's standup has CSC representatives calling **31 Aug** "the realistic expectation" for Workstream 1 and SSO-related activities. This is a ~1-week slip that isn't yet reflected anywhere except this meeting. It also compounds the already-unresolved question (flagged in yesterday's RAID log, item A7/TA1) of whether this CSC-track UAT window is genuinely separate from the OTEP-wide UAT window (11 Aug–4 Sep, `open-items.md` #39) — a slip to 31 Aug narrows whatever buffer existed between the two.
- **TIMELINE RISK: SIT window closes 7 Aug — 2 working days left as of today — but SSO (WS3) has no confirmable completion date.** DNS resolution, endpoint access, and intranet routing are all still unresolved, with troubleshooting duration explicitly called out as unknown. If WS3 doesn't close by 7 Aug, the downstream UAT entry gate (yesterday's tracker: "before 25 Aug") is at further risk on top of the 31 Aug slip above.

---

## Decisions Made

1. **Run daily standups off the day-by-day tracker, not the high-level Confluence plan**
   - **Why:** Forces activity-level visibility, accountability, and early escalation — Rama's framing from this morning's prep huddle carried through
   - **Who decided:** Team consensus, driven by Michelle/Imelda
   - **Impact:** Matches `outputs/analyses/2026-08-05-W32-csc-pm-tracking-list.md` structure — confirmed as the working document.

2. **Incomplete activities roll forward explicitly, not silently**
   - **Why:** Prevents status drift where a missed task just disappears from view
   - **Who decided:** Team consensus
   - **Impact:** Today's incomplete items should appear on tomorrow's tracker row, not be dropped.

3. **Consolidate infrastructure info into a dedicated Confluence page**
   - **Why:** Domains, endpoints, API keys, connectivity info, and infra config are currently scattered across Jira and ad hoc discussion — Michelle raised this as a programme control gap
   - **Who decided:** Michelle raised it, Rama agreed to own it
   - **Impact:** New deliverable for Rama (see Action Items) — this is separate from the existing per-workstream trackers.

4. **SSO troubleshooting treated as a separate track**
   - **Why:** Resolution can't realistically be guaranteed in a single day given firewall/central-team dependencies
   - **Who decided:** Team consensus
   - **Impact:** WS3 effectively gets its own cadence rather than being folded into the daily workstream check-in — but no owner or escalation process was defined for this separate track (see Risks).

5. **UAT preponement (bringing dates forward) is not realistic for at least some workstreams**
   - **Why:** CSC representatives pushed back — teams aren't ready, dependencies remain open
   - **Who decided:** CSC representatives, acknowledged by the team
   - **Impact:** This directly contradicts Adrian's proposal from yesterday's Squad Sync to deploy CSC to UAT immediately after SIT (see `timeline-raid-log.md` TR4/TD5) — worth flagging that tension explicitly rather than letting both positions sit unreconciled.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Create infrastructure Confluence page — consolidate domains, endpoints, API keys, connectivity/config info | Rama | No date set | 🔴 High | Not Started |
| Track all workstream activities and ensure teams update status daily | Rama | Ongoing | 🔴 High | Not Started |
| Add named owners to activities (CSC-side and Compass-side), flesh out and sequence workstream tasks | CSC / Compass teams | No date set | 🔴 High | Not Started — same gap flagged yesterday, still open |
| Verify learner file, share endpoints, support infrastructure setup, confirm connectivity status | Adrian (Lo) | No date set | 🔴 High | Not Started |
| Continue DNS and connectivity troubleshooting; validate endpoint routing; confirm firewall vs. infrastructure root cause | Aderick / Infrastructure teams | No date set | 🔴 Critical | In Progress — unknown duration |
| Review SIT test cases for coverage and suitability | Pow Hwee & Herman | No date set | 🟡 Medium | Not Started |
| Resolve SIT scope ambiguity: is invalid-formatted-file (unhappy-path) testing in SIT or UAT? | Adrian / Imelda to align | No date set | 🟡 Medium | Open — Adrian said out of scope, Imelda wants further discussion, no resolution reached |
| Investigate JumpStart staging data vs. CSC staging environment course data mismatch | Unassigned | No date set | 🔴 High | Not Started — newly surfaced this meeting |
| Define authoritative test dataset for WS4; confirm mock data prep timeline | Unassigned | No date set | 🟡 Medium | Not Started |
| Track dependency on Yu Xuan Tay's return from leave (WS4) | Unassigned | Unknown — depends on leave return date | 🟡 Medium | Not Started — newly surfaced this meeting |
| Get explicit CFT transfer testing completion date (WS1) | Michelle/Rama, to push CFT team | No date set | 🔴 High | Not Started |
| Lock down UAT account list; confirm source-of-truth owner for WS2 mapping file; get Kimberly's sign-off | Unassigned | No date set | 🔴 High | Not Started |
| Create escalation tracker for WS3 (DNS, firewall, endpoint routing, intranet connectivity) as executive-level blockers | Unassigned (PM-owned per recommendation) | No date set | 🔴 Critical | Not Started |
| Push the VAPT date conflict (16 Oct vs. 23 Oct) with Rama directly | Michelle | Today | 🔴 Critical | **Did not happen at this standup** — carried from today's daily plan, still needs a separate ping |

**Notes:**
- Nearly every action item from this meeting has no due date — this mirrors the "activity-driven, not dependency-driven" critique in the notes below. Worth pushing for dates at tomorrow's standup rather than letting another day pass on "no date set."
- The infrastructure troubleshooting item (Aderick) is the one genuinely blocking the most downstream work, and it's also the one with the least schedule certainty.

---

## Key Insights & Quotes

**On planning being activity-driven, not dependency-driven:**
- Repeated dependencies surfaced across the discussion — endpoint, DNS, firewall, whitelisting, CFT — but no critical path board, dependency board, or blocker escalation process exists yet. The risk: "teams keep reporting task status while actual delivery is blocked."

**On hidden dependencies on people not in the room:**
- Multiple points in the meeting referenced needing input from people absent from the call: Kimberly, Eugene, "central team." No escalation path exists for chasing them.

**On the environment data mismatch (new, significant):**
- JumpStart staging data does not match the CSC staging environment course data. Even if connectivity between systems works, recommendations may fail, validation may fail, and false defects may get reported as a result — this could waste debugging time on issues that are actually data-mismatch artifacts, not real integration bugs.

**On SIT scope ambiguity (unresolved from yesterday too):**
- Adrian's read: invalid-formatted-file testing is outside SIT scope. Imelda's read: needs more discussion, might belong in UAT instead. No decision reached — same "align with CSC on SIT vs UAT expectations" gap flagged in this morning's earlier prep notes.

---

## Assessment: Workstream RAG (from this meeting, not an official project status)

| Workstream | Status | Confidence |
|---|:---:|:---:|
| WS1 — Course Integration / CFT File Transfer | 🟠 Amber | Medium |
| WS2 — Learner File & Mapping | 🟠 Amber | Medium |
| WS3 — SSO Integration | 🔴 Red | Low |
| WS4 — JumpStart Recommendation Integration | 🟠 Amber | Medium |
| **Overall Programme** | **🟠 Amber-Red** | **Low-Medium** |

This differs from yesterday's War Room Tracker, which had WS4 at 🟢 Green with no blocker reported — today's meeting downgrades WS4 to Amber, driven by the staging data mismatch plus a newly surfaced resourcing risk (see WS4 detail below). Worth reconciling which read is current before the next tracker update.

### WS1 — Course Integration / CFT File Transfer (🟠 Amber)

**Working:** Workflow IDs and credentials shared; CSC confirmed receipt; manual file transfer identified as a fallback if CFT routing doesn't resolve in time; team understands the testing sequence.

**Concerns:** CFT routing into multiple workflows still being configured; full transfer-process testing depends on CFT team support; team targeting "today or tomorrow" rather than a firm date.

**Risk:** Inability to complete CFT setup delays SIT execution; multi-workflow routing may surface additional issues; bug-fixing can't start until actual file transfers occur.

**Why Amber, not Red:** Positive progress, no major architectural uncertainty — but critical testing hasn't happened yet.

**PM focus:** Get an explicit CFT transfer testing completion date; track the CFT dependency separately from application-level testing.

### WS2 — Learner File & Mapping (🟠 Amber)

**Working:** Credentials exchanged; learner file transfer reported complete; verification activities planned with owners identified; team understands the NRIC-to-Learner-ID mapping requirement for UAT accounts.

**Concerns:** Mapping responsibility not fully clear; some duplicate/overlapping tasks needed clarification during the meeting; Kimberly's confirmation still needed on several items.

**Risk:** UAT account provisioning could become a late blocker; CSC coordination dependency remains; data quality issues may only surface once verification actually begins.

**Why Amber, not Red:** Technical work looks straightforward — the risk is unsettled dependencies and ownership, not the work itself.

**PM focus:** Lock down the UAT account list; confirm the source-of-truth owner for the mapping file; get Kimberly's sign-off on open items.

### WS3 — SSO Integration (🔴 Red)

**Working:** Endpoint to be tested identified; infra vs. config responsibilities split with named owners — **Adrian Lo (infrastructure)**, **Pow Hwee TAN + team (configuration)**.

**Major issues:** DNS resolution unresolved; intranet routing unresolved; endpoint accessibility unresolved; root cause not yet confirmed; troubleshooting timeline uncertain — explicitly may exceed one day and may involve firewall or central-platform dependencies.

**Downstream impact:** Until resolved — SSO SIT can't proceed fully, configuration work can't progress, UAT readiness is threatened, and **VAPT scope may change if internet pathways end up required** (new — ties back to the still-unresolved VAPT date/scope conflict).

**Why Red:** Unresolved infrastructure blockers sit on the critical path with an uncertain resolution timeline.

**Hidden risk:** The SSO dependency chain is being tracked as activities, not managed as a programme-level risk.

**PM focus:** Create an escalation tracker for DNS resolution, firewall dependencies, endpoint routing, and intranet connectivity — treat these as executive-level blockers, not routine tracker rows.

### WS4 — JumpStart Recommendation Integration (🟠 Amber)

**Working:** Connectivity largely available; API keys and endpoints largely exchanged; team believes API calls can be tested quickly; no infrastructure concerns on the scale of WS3.

**Concerns:** Staging data mismatch between Compass and CSC environments (carried from earlier); recommendation results may not match expectations; mock data generation required; **new — dependency on Yu Xuan Tay, currently on leave, may delay some activities.**

**Risk:** False SIT failures caused by bad test data; recommendation validation may be impossible without aligned datasets; end-to-end testing depends on other workstreams completing first.

**Why Amber:** Technology looks functional — the open risk is environmental/data alignment and a resourcing gap, not the integration itself.

**PM focus:** Define the authoritative test dataset; confirm the mock data prep timeline; track the dependency on Yu Xuan Tay's return.

### Programme-Level View (as if presenting at SteerCo)

| Area | RAG | Comment |
|---|:---:|---|
| WS1 Course Integration | 🟠 | Progressing, awaiting CFT testing |
| WS2 Learner File | 🟠 | Progressing, dependencies on mapping/account readiness |
| WS3 SSO | 🔴 | Critical path blocked by connectivity and DNS issues |
| WS4 JumpStart | 🟠 | Technically progressing, data alignment risks remain |
| SIT Readiness | 🟠 | Work underway, key dependencies unresolved |
| UAT Readiness | 🔴 | Premature to assess until SSO and SIT blockers are closed |

**The good:** daily cadence established; detailed activity tracking now exists; team is openly flagging blockers; owners are gradually becoming clearer.

**The bad:** infrastructure critical path still not explicitly managed; SSO remains unresolved; UAT acceleration requests were largely rejected as unrealistic; several activities remain dependent on absent stakeholders.

---

## Open Questions

- [ ] Is the CSC-track UAT window now 31 Aug, or is 24/25 Aug still the tracked date? — **Owner:** Rama — **By:** Before this gets propagated into any tracker update
- [ ] Does the 31 Aug slip affect the OTEP-wide UAT window overlap question (still unresolved from yesterday, RAID item A7)? — **Owner:** Rama — **By:** Before next planning touchpoint
- [ ] Is invalid-formatted-file testing in SIT scope or UAT scope? — **Owner:** Adrian + Imelda — **By:** Not yet scheduled
- [ ] What's causing the JumpStart/CSC staging data mismatch, and does it block WS4 test execution? — **Owner:** Unassigned — **By:** Not yet scheduled
- [ ] When does Yu Xuan Tay return from leave, and does WS4 have a workaround in the meantime? — **Owner:** Unassigned — **By:** Not yet scheduled
- [ ] Could VAPT scope change if WS3 ends up requiring an internet-facing pathway instead of intranet? — **Owner:** Rama / Victor (VAPT) — **By:** Once WS3 root cause is confirmed — ties directly to the still-open VAPT date conflict
- [ ] VAPT date conflict (16 Oct vs. 23 Oct) — still not raised in any CSC-track forum today — **Owner:** Michelle → Rama — **By:** Today, per the daily plan's protected item

---

## Blockers

1. **SSO (WS3) infrastructure — DNS, endpoint routing, intranet path**
   - **Blocked by:** Firewall/central-team dependencies, troubleshooting duration unknown
   - **Impact:** Highest schedule risk workstream; multiple downstream WS3 tasks can't start until resolved; SIT window closes in 2 working days
   - **Resolution:** Being treated as a separate track (per today's decision) but with no named owner or escalation trigger defined yet

2. **JumpStart/CSC staging data mismatch**
   - **Blocked by:** Unclear — root cause not yet investigated
   - **Impact:** Could produce false defects and wasted debugging time even once connectivity is resolved
   - **Resolution:** Not yet assigned an owner

3. **No critical-path or dependency management process**
   - **Blocked by:** Governance gap — no dependency board, no blocker escalation process exists despite repeated dependency mentions
   - **Impact:** Delivery may be blocked while task-status reporting shows progress, masking the real state
   - **Resolution:** Not agreed at this meeting — flagged as the PM's highest-value next intervention (see below)

---

## Next Steps

**Immediate (Today):**
- Push the VAPT date conflict with Rama directly — didn't come up in this standup, still needs resolving per today's daily plan
- Confirm whether 31 Aug or 24/25 Aug is the actual CSC-track UAT date before it propagates further

**Short-term (This week, before tomorrow's standup if possible):**
- Define SIT exit criteria — what counts as SIT complete, what moves to UAT, what defects block UAT (currently ambiguous, as shown by the unhappy-path testing disagreement)
- Create the Critical Dependency Board: dependency, owner, blocking-what, status, escalation-needed — especially DNS, endpoint access, whitelisting, CFT transfer, API connectivity, test account readiness
- Assign an owner to investigate the JumpStart/CSC staging data mismatch

**Follow-up Meeting:**
- **Date:** Tomorrow's CSC-Compass SIT Daily Standup
- **Purpose:** Continue the dated tracker walkthrough; push for named dates on today's still-undated action items; confirm infrastructure Confluence page progress
- **Attendees:** Same group

---

## Context for Future Reference

This meeting directly follows the pre-standup prep huddle with Ram and Imelda captured earlier today. The prep huddle correctly anticipated most of what came up (dated tracker discipline, WS2 mapping cadence as a hidden dependency, SIT vs. UAT scope ambiguity) — but the VAPT date conflict prep item didn't get raised in the actual meeting, and two new things surfaced that weren't anticipated: the UAT date slip to 31 Aug, and the JumpStart/CSC staging data mismatch.

**Recommended PM interventions (from this session's own analysis, worth acting on rather than just logging):**
1. Build the Critical Dependency Board — this is different from the existing per-workstream trackers, which are activity-based, not dependency-based
2. Force explicit escalation whenever an item becomes "waiting for central team" or "needs troubleshooting" — require a named owner, an escalation target, and a next review date, rather than letting it linger as an open status line
3. Reconcile today's WS4 Amber assessment against yesterday's Green rating in the War Room Tracker before publishing any updated RAG view

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original executive assessment</summary>

Full executive assessment covering: overall Amber status; what went well (daily cadence established, assumptions challenged and re-validated, realistic schedule discussions, dependency visibility recognized); what didn't go well (activity-driven not dependency-driven planning, incomplete ownership mapping, WS3/SSO significantly behind, SIT scope ambiguity on unhappy-path testing); 5 decisions; 5 unaddressed risks (infrastructure as true critical path, hidden dependency on absent stakeholders, weak SIT timeline confidence, UAT dates possibly disconnected from reality, JumpStart/CSC staging data mismatch); actions by owner (Rama, CSC/Compass teams, Adrian, Aderick/infra teams, Pow Hwee & Herman); and recommended PM interventions (Critical Dependency Board, SIT exit criteria, Workstream RAG view, explicit dependency escalation).

</details>
