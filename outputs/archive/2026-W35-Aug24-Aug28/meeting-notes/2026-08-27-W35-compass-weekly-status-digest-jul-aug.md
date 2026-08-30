# Meeting Notes: Compass MVP Weekly Status Digest (31 Jul – 27 Aug 2026)

**Compiled:** 27 Aug 2026

**Source:** Adrian ANG's weekly updates + Mark HO's management queries, organised by reporting date (most recent → oldest). PM's own compilation from an Outlook thread ("RE: Compass weekly update"), not a single meeting transcript.

**Meeting Type:** Rolling programme-status record / leadership update thread

**Key contributors:** Adrian ANG (weekly updates), Mark HO (management queries), Jace TAN (VAPT coordinator), NCS / Ryan Lam (vendor), WD team (UAT execution)

---

## Summary

Over four weeks the Compass MVP programme moved from a **delivery risk** (UAT completion) to a **launch-readiness risk** (VAPT commercials, AI governance, operational readiness). UAT slipped from 20 Aug to 26 Aug but stayed inside buffer. SSO failed its final UAT case on 24 Aug, became the dominant risk, and by 27 Aug had a solution validated in dev with UAT deployment set for 28 Aug. The critical path is now: **SSO validation (28 Aug) → code freeze (28 Aug) → VAPT kickoff (7 Sep) → AI IDSC approval (~1 Sep) → MVP launch readiness.** Two items need active leadership attention: the NCS PO landing by 4 Sep without pushing VAPT start, and AI IDSC clearance for the CIE CV component.

---

## Decisions Made

1. **Annual POCDEX VAPT decoupled from Compass VAPT** *(25 Aug)*
   - **Why:** Preserve the Compass VAPT schedule; the annual POCDEX VAPT cadence would have created a scheduling collision.
   - **Impact:** Compass VAPT now covers the five POCDEX API endpoints directly. This is the source of the expanded scope, the extra NCS commercial approval, and the new PO dependency.

2. **Jace TAN designated overall ITC VAPT coordinator** *(25 Aug)*
   - **Why:** Prevent resource contention between the Compass VAPT and the HR Alchemist VAPT running in parallel.
   - **Impact:** Single coordination point for VAPT resourcing across ITC. Aligns with the RAID R15 finding that there was no consolidated VAPT readiness owner across the three parallel streams.

3. **User re-authentication accepted as SSO fallback** *(24 Aug)*
   - **Why:** If seamless cross-domain SSO (Compass intranet ↔ CSC external) can't be achieved, re-auth on the Compass→CSC hop is acceptable provided it's smooth.
   - **Impact:** Gives the programme a non-blocking path even if the validated Solution 1 fails on 28 Aug. Superseded in practice by the 27 Aug update that a dev-validated solution exists using standard WOG SSO behaviour.

4. **SSO solution approach: standard WOG SSO, no test-scenario change** *(27 Aug)*
   - **Why:** The validated fix uses standard WOG AD login behaviour, so the existing UAT test scenario stands unchanged.
   - **Impact:** WD team validates on 28 Aug by logging in via WOG AD and navigating to CSC courses. No CSC-side VAPT triggered.

5. **Day-2 officer-profile-change handling classified as not a VAPT blocker** *(26–27 Aug)*
   - **Why:** The gap is an operational data-freshness issue, not a security vulnerability in the code going to VAPT.
   - **Impact:** VAPT proceeds on schedule. Mark HO has queried this classification directly (see Concerns Raised). Team intends to automate profile-transition handling before MVP launch, but design is still in discovery.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Deploy SSO solution to UAT | Rama / dev team | 28 Aug | 🔴 High | 🔴 Not Started |
| Validate SSO in UAT via WOG AD login → CSC courses | WD team | 28 Aug | 🔴 High | 🔴 Not Started |
| Notify Mark HO when SSO/UAT testing is complete | Adrian ANG | On completion (from 28 Aug) | 🔴 High | 🔴 Not Started |
| Write up the rationale for why VAPT-adjacent findings are not launch blockers, for Mark HO | Michelle / Adrian ANG | Before 28 Aug leadership check-in | 🔴 High | 🔴 Not Started |
| UAT code freeze | Dev team | 28 Aug | 🔴 High | 🔴 Not Started |
| Receive NCS quotation for expanded VAPT scope (5 POCDEX APIs) | NCS / Ryan Lam | 28 Aug | 🔴 High | 🔴 Not Started |
| Issue NCS PO | ITC procurement / Adrian ANG | 4 Sep | 🔴 High | 🔴 Not Started |
| NCS VAPT kickoff | Jace TAN / NCS | 28 Aug | 🟡 Medium | 🔴 Not Started |
| WD review of AI IDSC clearance for CIE CV component | WD team | 1 Sep | 🔴 High | 🔴 Not Started |
| Weekly NCS touchpoint with Ryan Lam | Adrian ANG / Jace TAN | Weekly, ongoing | 🟡 Medium | 🟡 In Progress |
| Continue pre-scans to reduce VAPT remediation effort | Dev / infra teams | Before 18 Sep interim findings | 🟡 Medium | 🟡 In Progress |
| Finalise Day-2 officer-profile-change automation design (grade/job/email/designation → competency refresh) | Compass team + Imelda's squad | Before MVP launch (date TBC) | 🔴 High | 🟡 In Progress (discovery) |
| Provide additional Day-2 test cases once design firms up | Compass team | "Later" — no date | 🟡 Medium | 🔴 Not Started |
| Performance testing (needs stable post-freeze code, coordination with CSC/Jumpstart/POCDEX) | Dev + infra + partner teams | 7–15 Sep | 🟡 Medium | 🔴 Not Started |
| Production deployment checklist | Rama / dev team | Post-VAPT | 🟢 Low | 🔴 Not Started |

**Notes:**
- Two action items have no firm date: "additional Day-2 test cases" and the Day-2 automation itself ("before MVP launch" with no launch date confirmed). Both should get real dates within 48 hours.
- The 28 Aug items form a single hard gate: SSO deploy + validate, code freeze, and NCS quotation all land the same day.

---

## Concerns Raised

**Mark HO (management queries, 27 Aug):**
1. **Wants to be told when testing is complete** — a direct request for a completion notification, not a status inference. Adrian to close the loop.
2. **Questioning why VAPT-related testing findings aren't launch blockers** — specifically the Day-2 officer-profile-change gap. This is a "who decides what blocks launch" challenge from leadership. The programme's position (operational gap, not a security defect) needs a clear written rationale, because right now it reads as the team self-certifying its own carve-out.

**Programme-level (rolled up across the four weeks):**
- SSO cross-domain behaviour (Compass intranet vs CSC external) was the dominant risk from 22 Aug to 26 Aug and only cleared in dev on 27 Aug — still unvalidated in UAT.
- Expanded VAPT scope (5 POCDEX APIs) introduced a commercial dependency (NCS PO by 4 Sep) that didn't exist before the 25 Aug decoupling decision.
- NCS vendor availability flagged as a standalone risk, mitigated only by weekly touchpoints.
- Day-2 data-sync logic named as one of the four biggest programme risks on 26 Aug, still in discovery on 27 Aug.

---

## Timeline Risks

- **TIMELINE RISK — the 28 Aug gate is fully loaded.** SSO deploy to UAT, WD SSO validation, UAT code freeze, and the NCS quotation all fall on 28 Aug. If SSO validation fails that day, code freeze either slips or freezes broken SSO. The 1–4 Sep buffer absorbs bug fixes but not a failed SSO approach. Confirm at the 28 Aug check-in whether code freeze is contingent on SSO passing or independent of it.

- **TIMELINE RISK — NCS PO (4 Sep) vs VAPT start (7 Sep) is a 3-day margin with a vendor already flagged as an availability risk.** The quotation isn't due until 28 Aug and the PO is only "projected" for 4 Sep. Any slip in the quotation or approval chain compresses or breaks the 7 Sep start. This is a named Red leadership item — treat the 4 Sep date as the real deadline, not 7 Sep.

- **TIMELINE RISK — AI IDSC approval (~1 Sep) is a hard launch blocker with a single review checkpoint.** WD review is "expected by 1 Sep" with no stated fallback if it doesn't clear. Unlike SSO (which has a re-auth fallback) and the PO (which has a buffer), AI IDSC has neither. Confirm what happens to the launch date if 1 Sep slips.

- **TIMELINE RISK — Day-2 automation is committed "before MVP launch" but no MVP launch date is stated in this digest.** Previous programme docs have referenced both 19–23 Oct and 24–25 Nov. Design is still in discovery. A pre-launch commitment against an unconfirmed launch date, on work that hasn't left discovery, is not a plan. This needs a date on both sides.

- **TIMELINE RISK — interim VAPT findings from 18 Sep collide with performance testing (7–15 Sep) and the tail of remediation.** Pre-scans are underway to reduce the load, but if performance testing runs long past 15 Sep it overlaps the first VAPT findings and the teams needed for both are the same.

---

## Key Insights

**The risk profile inverted over four weeks:**
- **31 Jul – 14 Aug:** 🟢 Green. UAT readiness, personas built, connectivity established, AI governance planning started. The question was "will we be ready to test."
- **22 Aug:** 🟡 First crack. UAT slipped 20 → 26 Aug (increased coverage, a 4-hour environment outage, missing POCDEX data fields). Still inside buffer. First signal SSO could go critical.
- **24 Aug:** 🔴 SSO failed its final UAT case. Cross-domain (intranet ↔ external) root-cause hypothesis. SSO became the dominant risk.
- **25–26 Aug:** 🟡 VAPT commercials became the new front. POCDEX VAPT decoupled, scope expanded to 5 APIs, NCS PO dependency created. Four named programme risks: NCS PO, AI IDSC, SSO validation, Day-2 sync.
- **27 Aug:** 🟢🟡 SSO validated in dev (not UAT). Day-2 handling is the residual amber, still in discovery.

**The pattern:** as delivery risks closed, launch-governance risks (commercial approval, AI clearance, operational readiness) opened in their place. The programme is not de-risking so much as moving the risk downstream toward the launch gate.

**What "UAT largely complete" is carrying:** as of the 22 Aug snapshot, 19 of 183 test cases were still open — 8 of those waiting on test data/accounts and 7 on defect remediation. "Largely complete" in the exec summary papers over the fact that the remaining cases include SSO (the one that failed) and data-dependent cases that trace back to the same POCDEX data-field gaps that caused the original slip.

**Day-2 profile-change handling has been visible since 14 Aug** — "discovery ongoing for officer profile change handling," "Ops dashboard created to monitor POCDEX-Compass data drift," and a Day-2 enhancement plan (role/profile change handling, robust identifier strategy, competency storage redesign). Two weeks later it's still in discovery and is now a Red leadership item. It has not moved.

---

## Open Questions

- [ ] Does UAT code freeze on 28 Aug proceed if SSO validation fails that day, or is it gated on SSO passing? — **Owner:** Adrian ANG / Rama — **By:** 28 Aug
- [ ] What is the fallback if the NCS PO doesn't issue by 4 Sep? Does VAPT start slip, or is there a provisional-start mechanism? — **Owner:** Adrian ANG / Jace TAN — **By:** 1 Sep
- [ ] What is the contingency if AI IDSC review doesn't clear by 1 Sep? — **Owner:** WD team / Adrian ANG — **By:** 1 Sep
- [ ] What is the confirmed MVP launch date that Day-2 automation is being committed against? — **Owner:** Michelle / Adrian ANG — **By:** this week
- [ ] Which of the 19 open UAT cases (22 Aug snapshot) are still open now, and are any on the critical path beyond SSO? — **Owner:** WD team — **By:** 28 Aug
- [ ] Is there a written, agreed definition of what constitutes a launch blocker vs an operational gap, to answer Mark HO's challenge durably? — **Owner:** Michelle — **By:** before 28 Aug check-in

---

## Blockers

1. **SSO UAT validation (28 Aug)**
   - **Blocked by:** Nothing — solution validated in dev, awaiting UAT deployment and WD execution.
   - **Impact:** Blocks code freeze confidence and is the top Red leadership item. If it fails, the re-auth fallback exists but re-opens the "seamless SSO" question.
   - **Resolution:** Deploy to UAT 28 Aug, WD validates via WOG AD → CSC courses same day.

2. **AI IDSC clearance for CIE CV component**
   - **Blocked by:** WD review, expected by 1 Sep.
   - **Impact:** Hard production-launch blocker. Required because Compass uses an AI component (CV inference). No stated fallback.
   - **Resolution:** WD completes review by 1 Sep. Escalate now if the review hasn't started.

3. **NCS PO issuance (4 Sep) for expanded VAPT scope**
   - **Blocked by:** NCS quotation (due 28 Aug) → commercial approval chain → PO.
   - **Impact:** Blocks the 7 Sep VAPT start. 3-day margin, vendor availability already a flagged risk.
   - **Resolution:** Quotation on 28 Aug, PO by 4 Sep, weekly NCS touchpoints maintained.

4. **Day-2 officer-profile-change automation**
   - **Blocked by:** Design still in discovery; no confirmed MVP launch date to plan against; competency re-derivation trigger ownership sits with Imelda's squad, not the Compass team.
   - **Impact:** Named Red operational-readiness gap. Not a VAPT blocker, but a launch-readiness question leadership is now probing.
   - **Resolution:** Firm up the design, get a date, and answer Mark HO's blocker-classification challenge in writing.

---

## Next Steps

**Immediate (by 28 Aug):**
- Deploy SSO to UAT and have WD validate it via WOG AD → CSC courses.
- Freeze UAT code (confirm first whether this is gated on SSO passing).
- Receive the NCS quotation for the 5-API expanded scope.
- Bring a written rationale to the leadership check-in for why Day-2 findings aren't launch blockers — answering Mark HO directly, not deferring.
- Notify Mark HO the moment SSO/UAT testing completes.

**Short-term (29 Aug – 4 Sep):**
- Drive the NCS PO to issue by 4 Sep; escalate through Jace TAN if the approval chain stalls.
- Complete WD's AI IDSC review by 1 Sep; escalate now if it hasn't started.
- Lock a confirmed MVP launch date so Day-2 automation has something real to plan against.
- Continue pre-scans ahead of the 18 Sep interim VAPT findings.

**Medium-term (7 Sep onward):**
- VAPT kickoff 7 Sep, target completion 8 Nov.
- Performance testing 7–15 Sep (stable post-freeze code, coordinated with CSC/Jumpstart/POCDEX, sequenced around VAPT scans).
- First interim VAPT findings from 18 Sep — remediation capacity planned against the performance-testing tail.

**Follow-up:**
- **Date:** 28 Aug leadership check-in
- **Purpose:** SSO validation result, code-freeze go/no-go, NCS quotation status, response to Mark HO's blocker-classification query
- **Attendees:** Adrian ANG, Mark HO, Jace TAN, Michelle, Rama

---

## Context for Future Reference

**Related meeting notes:**
- [24 Aug – UAT/VAPT readiness](2026-08-24-W35-uat-vapt-readiness.md)
- [24 Aug – UAT readiness exec assessment](2026-08-24-W35-uat-readiness-exec-assessment.md)
- [25 Aug – CSC-SSO troubleshooting](2026-08-25-W35-csc-sso-troubleshooting.md)
- [25 Aug – Programme coordination: UAT/VAPT/cutover](2026-08-25-W35-programme-coordination-uat-vapt-cutover.md)
- [26 Aug – Daily VAPT activities: CSC-Compass SSO](2026-08-26-W35-uat-vapt-daily-activities.md)
- [27 Aug – Risk register / readiness review (with Jace)](2026-08-27-W35-risk-register-readiness-review.md)

**Related analysis:**
- [25 Aug – RAID log](../analyses/2026-08-25-W35-raid-log.md) — R10 (VAPT sequence reconciliation), R11 (Day-2 profile-refresh business rules, no owner), R13 ("who decides" pattern, 6+ instances), R14 (UAT sign-off has no acceptance checklist), R15 (no consolidated VAPT Definition of Ready)
- [Employment Lifecycle Scenarios - Day 2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2597226493) — the officer-facing test-case scoping for the same Day-2 gap
- [Prioritised Employment Lifecycle Scenarios](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2603157647) — full 82-case P1 analysis
- Epic: CC Ops Portal (MVP), Confluence page 2555380790 — the BO-facing side of Day-2 drift handling

**How this digest maps to the RAID log:** Mark HO's blocker-classification challenge is RAID R13 (the "who decides" pattern) surfacing at leadership level. The Day-2 automation gap is RAID R11 (no owner for profile-refresh business rules). The VAPT commercial dependency and 7 Sep-vs-4 Sep margin is the practical form of RAID R10.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original digest (Adrian ANG updates + Mark HO queries, 31 Jul – 27 Aug)</summary>

**Organised by reporting date (most recent → oldest).**

### 27 Aug 2026 — Status Updates
1. **SSO Issue** — Solution validated in dev. Deployment to UAT scheduled 28 Aug. WD team to validate using WOG AD login and navigate to CSC courses. Approach uses standard WOG SSO behaviour, no change to test scenario.
2. **Officer Profile Change Handling** — Team identified scenarios where employment profile updates (grade, job changes, etc.) affect competencies. Discovery and solution design ongoing. Additional test cases later. Explicitly not a VAPT blocker. Team intends to automate profile-transition handling before MVP launch.

**Management Concerns — Mark HO asked:** to be informed when testing is completed; why issues discovered during VAPT-related testing are not considered launch blockers.

**Assessment:** 🟢 SSO close to resolution. 🟡 Risk remains around employment-profile-change handling because design is still in discovery.

### 26 Aug 2026 — Main Risks Discussed
1. **UAT Completion Risk** (potential VAPT blocker) — UAT must complete before VAPT. Only SSO-related testing outstanding. UAT env ready for broader exploratory testing. Critical defects addressed before VAPT.
2. **Code Freeze Risk** (potential delay) — UAT code freeze planned 28 Aug. Buffer 1–4 Sep for fixes if needed.
3. **Expanded VAPT Scope** (potential delay) — Compass VAPT now includes 5 POCDEX API endpoints. Additional commercial approval needed. NCS quotation expected 28 Aug. PO projected by 4 Sep. Team seeking assurance VAPT can still start 7 Sep and end as planned.
4. **Vendor Readiness Risk** — NCS availability a risk. Weekly touchpoints with NCS account manager Ryan Lam.
5. **VAPT Remediation Risk** — Interim VAPT findings expected from 18 Sep. Teams conducting pre-scans to reduce remediation effort.

**Launch Blocker — AI IDSC Clearance:** CV AI component (CIE CV) requires AI IDSC approval before production launch. WD review expected by 1 Sep. Approval required because Compass uses an AI component.

**Additional Explanations:**
- *Performance Testing (7–15 Sep)* — required after code freeze: needs stable code, coordination with CSC/Jumpstart/POCDEX, must avoid interfering with VAPT scans.
- *Day-2 Operations Enhancement* — current gap: changes in officer email, designation, grade, job role etc. do not automatically refresh profiles. Complex scenarios unresolved. Planned as fast-follow but targeted before MVP launch.

**Assessment:** 🟡 Biggest programme risks: (1) NCS PO issuance by 4 Sep, (2) AI IDSC clearance, (3) final SSO validation, (4) Day-2 data synchronisation logic.

### 25 Aug 2026 — Key Updates
- **SSO Issue** — Team still evaluating fixes. Goal: avoid a solution requiring a separate CSC-side VAPT. Update promised 26 Aug.
- **VAPT Planning (major decision)** — Annual POCDEX VAPT decoupled from Compass VAPT. Compass VAPT will cover the five POCDEX APIs directly. Intended to preserve VAPT schedule.
- **Governance** — Jace TAN designated overall ITC VAPT coordinator. Role: prevent resource contention between Compass and HR Alchemist VAPTs.
- **Milestones** — NCS VAPT kickoff 28 Aug. VAPT start 7 Sep. Target completion 8 Nov.

**Assessment:** 🟡 Primary uncertainty remained SSO resolution and VAPT commercial arrangements.

### 24 Aug 2026 — Key Updates
- **SSO Failure** — Final UAT test case failed. Root cause hypothesis: Compass hosted in intranet, CSC hosted externally, SSO crossover problems between domains.
- **Fallback Option** — User re-authentication when moving from Compass to CSC. Acceptable if seamless SSO can't be achieved.
- **Timeline** — 25–26 Aug: end-to-end verification, VAPT PO preparation. 26–28 Aug: bug-fix buffer, UAT code freeze. 28 Aug: NCS VAPT kickoff.
- **Post-VAPT Activities Planned** — performance testing, production deployment checklist, Day-2 operational enhancements.

**Assessment:** 🔴 SSO the dominant risk. 🟡 VAPT still believed recoverable without timeline impact.

### 21 Aug 2026 Update (reported 22 Aug) — UAT Status
183 total test cases. 19 open: 3 under testing, 1 ready for testing, 8 awaiting test data/accounts, 7 defects under remediation.
- **Schedule Change** — UAT completion extended 20 Aug → 26 Aug. Causes: increased test coverage, 4-hour environment outage, missing POCDEX data fields.
- **Team Position** — VAPT timeline unaffected despite UAT extension.
- **DLE / Jumpstart Dependency** — SSO SIT encountered issues, under investigation.

**Assessment:** 🟡 UAT slipped but within contingency buffers. 🔴 First clear signal SSO could become critical path.

### 14 Aug 2026 — Progress
- **UAT** — Phase 1 started successfully. Defect fixes underway. Phase 2 preparation ongoing.
- **Dependency Updates** — CSC moved course catalog availability earlier to 20 Aug. Improved integrated testing.
- **POCDEX** — Data sharing approval submitted. Discovery ongoing for officer profile change handling. Ops dashboard created to monitor POCDEX-Compass data drift.
- **Day-2 Ops Enhancement Planning** — role/profile change handling; more robust identifier strategy; competency storage redesign.

**Assessment:** 🟢 Largely on-track. 🟡 Future operational-readiness gaps already identified.

### 7 Aug 2026 — Major Milestones
- **UAT Readiness** — UAT confirmed for 11 Aug. 21 production-like personas created. Compass-POCDEX API connectivity established.
- **Testing Data Strategy** — synthesized production data for realistic testing while protecting confidentiality.
- **Dependencies** — DLE Learn and Jumpstart connectivity testing completed successfully.
- **AI Governance** — initial planning for AI IDSC approval commenced.

**Assessment:** 🟢 Strong foundation established for UAT and downstream testing.

### 31 Jul 2026 — Initial Readiness Update
- **UAT Preparation** — Test cases created and loaded into Jira. Deployment expected week of 3 Aug. WD team briefed and prepared.
- **Next Actions** — Confirm expected testing effort with WD team. Update milestone communications.

**Assessment:** 🟢 Planning and readiness activities underway.

### Executive Summary (What Matters Now)
**Green:** UAT largely complete. SSO solution appears validated in development. NCS engaged and VAPT scope agreed. No additional VAPTs required from CSC or Jumpstart.

**Amber:** NCS quotation and PO issuance targeted for 4 Sep. AI IDSC clearance pending. Performance testing and production readiness activities outstanding. Officer-profile synchronisation automation still under design.

**Red / Leadership Attention:** (1) SSO UAT validation on 28 Aug must succeed. (2) NCS PO process must not delay VAPT start. (3) AI IDSC approval remains a launch blocker. (4) Day-2 handling of officer employment-profile changes remains a known operational gap.

**PM's read:** The programme has shifted from a delivery risk (UAT completion) in early August to a launch readiness risk (VAPT, AI governance, operational readiness) by late August. Critical path: SSO validation → code freeze → VAPT kickoff → AI IDSC approval → MVP launch readiness.

*Source thread: "RE: Compass weekly update" (Outlook).*

</details>
