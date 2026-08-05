# Meeting Notes: UAT Plan Walkthrough for POCDEX

**Date:** 2026-08-04

**Attendees:** Michelle Yip, Rama Moorthy, Pow Hwee Tan, Adrian Lo, Johnny Lim, Kingsley Low (Core team, technical leads, POCDEX team represented)

**Meeting Type:** Team planning — technical + PM alignment on POCDEX Product API UAT approach

**Duration:** Not specified

**Delivery health assessment (from source material):** Achievable, but very little buffer and several risks unmanaged.

---

## Summary

The team aligned on how to test the POCDEX Product API integration before business-owner UAT starts next Tuesday, with internal UAT planned for this weekend. Good technical collaboration produced a workable fixture-based testing strategy and clearer role separation (PM vs. technical decision-making, UAT board vs. engineering boards). But no firm readiness dates were confirmed, weekend engineering support wasn't actually secured, and the schedule (weekend internal UAT, Tuesday BO UAT) is driving readiness rather than the reverse.

---

## Decisions Made

1. **Connectivity testing can begin before final UAT data is available.**
   - **Why:** De-risks waiting for the complete UAT dataset before any testing starts — network, endpoint, and API key validation can be separated from business data validation.
   - **Who decided:** Team consensus.
   - **Impact:** Unblocks Career Compass to start integration work immediately rather than waiting on POCDEX's full UAT environment.

2. **Fixture-based testing will support development and internal UAT readiness.**
   - **Why:** A containerised fixture solution already exists; deploying it into a Products environment lets testing proceed without final UAT data.
   - **Who decided:** Team consensus.
   - **Impact:** Real risk attached — see [Risks Nobody Is Really Addressing](#risks-nobody-is-really-addressing), item 1: fixture success may not predict real UAT success once actual data lands.

3. **Career Compass will connect to the Products endpoint made available first**, while waiting for the final UAT environment.
   - **Why:** Avoids blocking on GovTech's full environment readiness.
   - **Who decided:** Team consensus.
   - **Impact:** Creates a dependency on Johnny Lim/POCDEX team's Thursday target for endpoint availability — not yet confirmed.

4. **Internal UAT planned over the weekend.**
   - **Why:** Needed before business-owner UAT starts Tuesday.
   - **Who decided:** Team consensus (schedule pre-existing, per source material — "readiness is being engineered backwards from those dates").
   - **Impact:** Compresses prep time; several dependencies (DNS/whitelisting, test data, fixture deployment) still need to land before this window opens.

5. **Business-owner UAT planned to begin next Tuesday.**
   - **Why:** Fixed external commitment.
   - **Who decided:** Not specified — appears to be a pre-existing schedule constraint, not decided in this meeting.
   - **Impact:** No go/no-go criteria were agreed for whether internal UAT results actually clear this gate (see Open Questions).

6. **Business UAT board stays user-facing; engineering work moves to separate Jira boards, linked back to UAT tickets.**
   - **Why:** Keeps business officers from being exposed to engineering-level ticket clutter.
   - **Who decided:** Team consensus.
   - **Impact:** Positive governance decision — should reduce BO confusion and matches the same "keep business and technical views separate" pattern raised in yesterday's SIT readiness sync.

7. **Technical triage and prioritisation are owned by engineering leads, not PMs.**
   - **Why:** Clarifies decision rights after Michelle's intervention exposed that people had different mental models of who owns what.
   - **Who decided:** Clarified as: PMs = Michelle + Rama (test coordination); Tech leads = Pow Hwee (Pathfinder) + Adrian Lo (Core).
   - **Impact:** Reduces ambiguity going into the weekend, though the fact this needed clarifying at all is itself a signal (see Risks, item 5).

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Share development endpoint and enable connectivity testing | Johnny Lim / POCDEX team | Target Thursday | 🔴 Critical | 🔴 Not Started |
| Follow up on DNS and IP whitelisting approvals | Johnny Lim | As soon as approval status available | 🔴 Critical | 🔴 Not Started |
| Review UAT test data and identify gaps | Adrian Lo | Immediate | High | 🔴 Not Started |
| Prepare fixture deployment accessible to Career Compass | POCDEX team | Before internal UAT | High | 🔴 Not Started |
| Confirm engineering support arrangement for weekend | Adrian Lo | Same-day follow-up requested | 🔴 Critical | 🔴 Not Started — no named engineer committed as of meeting close |
| Schedule internal UAT and send calendar invites | Rama Moorthy | Immediate | High | 🔴 Not Started |
| Summarise agreed plan in Slack | Rama Moorthy | Within the day | Medium | 🔴 Not Started |
| Upload Pathfinder UAT data after environments are ready | Michelle Yip | When environment readiness confirmed | High | 🔴 Blocked — waiting on Kingsley's readiness notification |
| Notify Michelle when environments are ready for data upload | Kingsley Low | Before internal UAT | 🔴 Critical | 🔴 Not Started |
| Prepare Core-side master/reference datasets (role profiles, competencies, JFF, etc.) | Core team | Before Saturday internal UAT | High | 🔴 Not Started |

**Notes:**
- Weekend engineering support is the one action item explicitly flagged in the source as **not actually secured**, despite being listed as an action — "confirm engineering support arrangement" was requested same-day, but the meeting ended with "triage first, determine severity, then decide whether fixes are needed" rather than a named on-call owner.
- Michelle's action item (upload Pathfinder UAT data) is blocked on two upstream dependencies landing first: Kingsley's environment-ready notification and Core team's dataset prep — worth tracking as a chain, not an independent task.

---

## Key Insights & Quotes

**What went well:**
- Teams converged on a technical testing strategy that separates network/connectivity validation, API endpoint validation, API key validation, and business data validation — meaning testing doesn't have to wait for a fully-ready UAT dataset.
- Technical teams were solution-oriented, not defensive: a containerised fixture solution exists, deploying fixtures into a Products environment was actively discussed, and using the dev endpoint as an interim step was explored.
- Roles for weekend UAT became clear by the end: Michelle + Rama as PM/test coordinators, Pow Hwee (Pathfinder) and Adrian Lo or delegate (Core) as technical counterparts, with PM-led triage explicitly separated from engineering triage.
- Defect management process is now sensible: UAT board stays business-facing, engineering discussion happens on technical boards, defects link back rather than clutter BO-facing tickets.

**What didn't go well:**
- No firm readiness dates. Rama repeatedly asked for timelines; the answers were consistently soft — "Thursday should be fine," "ideally Thursday," "depends on GovTech," "still need time for UAT data." None of final API availability, complete test dataset availability, or true UAT environment readiness were firmly committed by meeting close.
- The schedule is driving readiness, not the other way around: internal UAT is already set for the weekend and BO UAT for Tuesday, and technical teams repeatedly pushed back explaining dependencies and prep work still outstanding. From a programme view, the dates are fixed while readiness remains variable.
- Weekend support was requested but not secured — pushback from engineers, fairness concerns raised given the long weekend, and no named engineer committed. Final position was "triage first, then decide if fixes are needed," which is not the same as confirmed coverage.
- Multiple load-bearing assumptions surfaced without contingency plans: GovTech DNS/whitelisting completing on time, Thursday endpoint availability, the UAT environment being able to consume a fixture deployment, existing personas being sufficient, and Core/Pathfinder data being ready before Saturday.

---

## Open Questions

- [ ] What is the exact UAT readiness checklist, and who signs off each item? — **Owner:** Not assigned — **By:** Tomorrow, per the PM readout in source material
- [ ] What is the fallback plan if GovTech approvals miss Thursday? — **Owner:** Not assigned — **By:** Before Thursday, ideally now — no answer was given when this was raised in the meeting
- [ ] What are the go/no-go criteria before allowing BO UAT to start Tuesday? — **Owner:** Not assigned — **By:** Before Tuesday — currently undefined
- [ ] What is the minimum pass rate / acceptable defect severity threshold for internal UAT to be considered a pass? — **Owner:** Not assigned — **By:** Before internal UAT results are used to justify proceeding to BO UAT
- [ ] Who is the named on-call engineer for the weekend, with an escalation tree? — **Owner:** Adrian Lo (per action item) — **By:** Same day — still open as of meeting close

---

## Risks Nobody Is Really Addressing

*(Preserved as a distinct section from the source material — these are the PM-flagged risks that didn't get resolved in-meeting.)*

1. **Business-owner UAT may start before realistic data exists.** Testing strategy leans heavily on fixtures, but preparing actual UAT data isn't straightforward — transaction trails must stay valid, source files must travel through ingestion pipelines, and direct patching could break the UAT database. **Concern: fixture success may not predict real UAT success once realistic data appears** — you could pass internal UAT and still fail BO UAT.

2. **No exit criteria for internal UAT.** No agreement heard on minimum pass rate, acceptable defect severity threshold, or go/no-go criteria. Internal UAT is scheduled; success conditions are undefined.

3. **GovTech dependency has no fallback.** DNS approval and whitelisting both depend on GovTech, with no fallback plan discussed if approval slips. The question "what happens if Thursday doesn't happen?" was raised and went unanswered.

4. **Resource risk over the weekend.** The plan assumes PMs testing, technical triage available, and engineers available if needed — but engineer commitment remains uncertain. Missing: a named on-call owner plus escalation tree.

5. **Ownership ambiguity still exists.** Michelle's intervention ("who are the PMs and who are the technical decision makers?") exposed that people had different mental models of accountability. After clarification (PMs = Michelle + Rama; tech leads = Pow Hwee + Adrian Lo), the ambiguity is resolved for now — but the fact it needed clarifying at all is a signal worth tracking, especially given the same pattern (unclear ownership, clarified live rather than pre-established) surfaced independently in [yesterday's SIT readiness sync](2026-08-03-W32-csc-otep-sit-readiness.md) and [today's Squad Sync](2026-08-04-W32-otep-squad-sync-uat-timeline.md).

---

## Risks That Are Being Managed

| Risk | Mitigation | Status |
|---|---|---|
| Network connectivity | Dev endpoint shared early; whitelisting and DNS requests already raised | 🟢 Being actively managed |
| UAT data preparation | Fixture approach available; existing personas under review; more data can still be requested | 🟡 Partially managed |
| Defect governance | Separate UAT and engineering boards; clearer communication path | 🟢 Well managed |

---

## Timeline Risks

- **TIMELINE RISK:** This is now the **fourth distinct UAT/SIT timeline surfaced this week** — alongside OTEP-wide UAT (11 Aug–4 Sep, `open-items.md` #39), CSC-track UAT (24/25 Aug–4 Sep), and "Internal UAT" from today's Squad Sync (targeted Thu/Fri) — this meeting adds a fifth data point: internal UAT specifically for POCDEX, planned this weekend, with BO UAT starting Tuesday. Whether "Internal UAT" from the Squad Sync and this weekend's POCDEX internal UAT are the same event or two separate ones is not clear from either source — worth confirming with Rama, since running the same reconciliation exercise twice would waste time.
- **TIMELINE RISK:** BO UAT is scheduled for Tuesday with no go/no-go criteria defined for whether internal UAT results justify proceeding. This is the same "schedule fixed, readiness variable" pattern flagged in today's Squad Sync notes — except here it's compressed into a period of days, not weeks, raising the stakes on getting a go/no-go framework in place fast.
- **TIMELINE RISK:** Weekend engineering support was requested but not secured, and internal UAT is scheduled to happen through the weekend regardless. If a P1 defect surfaces Saturday with no named on-call engineer, the weekend timeline itself is at risk of silently slipping without anyone noticing until Monday.

---

## PM Readout (from source material — Michelle's assessment)

The three questions to push the team to answer tomorrow:
1. What is the exact UAT readiness checklist, and who signs off each item?
2. What is the fallback plan if GovTech approvals miss Thursday?
3. What are the go/no-go criteria before allowing BO UAT to start Tuesday?

None of these three were resolved in the meeting, and they represent the biggest delivery risk heading into the weekend.

---

## Next Steps

**Immediate (Today/Tomorrow):**
- Push for answers on the three unresolved PM readout questions above
- Adrian Lo confirms weekend engineering support arrangement (same-day follow-up requested, not yet delivered)
- Rama sends Slack summary of the agreed plan and schedules internal UAT calendar invites

**Before Thursday:**
- Johnny Lim/POCDEX team share dev endpoint and confirm DNS/whitelisting approval status
- Confirm fallback plan if GovTech approvals miss Thursday (currently no answer)

**Before Saturday (internal UAT):**
- POCDEX team prepares fixture deployment accessible to Career Compass
- Core team prepares master/reference datasets
- Kingsley notifies Michelle when environments are ready for data upload; Michelle uploads Pathfinder UAT data

**Before Tuesday (BO UAT):**
- Define and agree go/no-go criteria based on internal UAT results — currently undefined

**Follow-up Meeting:**
- Not explicitly scheduled in source material.

---

## Context for Future Reference

This is the **third distinct meeting in two days** (following [yesterday's CSC/OTEP SIT readiness sync](2026-08-03-W32-csc-otep-sit-readiness.md) and [today's Squad Sync](2026-08-04-W32-otep-squad-sync-uat-timeline.md)) that independently surfaces the same structural pattern: ownership gaps clarified live in the room rather than pre-established, no single reconciled timeline, and exit/go-no-go criteria left undefined until someone (usually Michelle) asks for them directly. The recurrence across three separate forums in 48 hours is itself the signal — this is a programme-level gap, not a one-off meeting issue.

This meeting also adds a fifth UAT/timeline data point to the ones already tracked this week (OTEP-wide #39, CSC-track, today's Squad Sync's "Internal UAT," and now POCDEX-specific internal UAT) — worth resolving whether any of these are duplicates before the confusion compounds further.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw input (Executive Assessment)</summary>

UAT Plan Walkthrough for POCDEX — Executive Assessment covering: what went well (technical testing strategy convergence, solution-oriented problem-solving, clearer weekend UAT roles, defect management process clarified); what didn't go well (no firm readiness dates, schedule driving readiness rather than the reverse, weekend support not actually secured, heavy reliance on unvalidated assumptions); risks being managed (network connectivity — actively managed, UAT data preparation — partially managed, defect governance — well managed); risks nobody is really addressing (BO UAT may start before realistic data exists, no exit criteria for internal UAT, GovTech dependency has no fallback, weekend resource risk, ownership ambiguity); key decisions (connectivity testing can start before final UAT data, fixture-based testing approach, Career Compass connects to available Products endpoint first, internal UAT over the weekend, BO UAT starts Tuesday, UAT board stays business-facing, technical triage owned by engineering leads); action items by owner (Johnny Lim, Adrian Lo, POCDEX team, Rama Moorthy, Michelle Yip, Kingsley Low, Core team); and a PM readout naming three unresolved questions as the biggest delivery risk heading into the weekend: UAT readiness checklist/sign-off, GovTech fallback plan, and BO UAT go/no-go criteria.

</details>
