# Meeting Notes: OTEP Squad Sync

**Date:** 2026-09-08 (09:30–10:30)

**Attendees:** Michelle Yip (PM), Jace Tan (Michelle's manager), Adrian Ang (Product Lead), Rama Moorthy (Eng), Pow Hwee Tan (Eng), Imelda Mo, Radhika Ramalingam, Adrian Lo, Jobelle Lim, Barry Lim (referenced, not confirmed present)

**Type:** Technical alignment / delivery-readiness sync

**Duration:** 1 hour

---

## Summary

Technical alignment and delivery-readiness meeting. The team resolved most of the ambiguity around the employment-profile integration with POCDEX/products APIs and aligned on direction for profile-change detection: last-modified date goes back into the APIs as a trigger, not a direct update instruction, with payload comparison before Compass updates a profile. The dominant theme was performance-testing readiness. Testing starts next week but think-time modelling, detailed scripts, scenario validation and several infrastructure assumptions are still open, and the load-sizing numbers (600 concurrent / 900 load / 1500 stress) are not yet backed by OTG data. External dependency readiness (Careers@GovTech, fromTFM NCS, Products/POCDEX) is unvalidated. The employment-profile change design is directionally agreed but the exact processing logic is still being written up.

---

## Decisions Made

1. **Employment Profile API — proceed with existing approach**
   - **Why:** Pow Hwee challenged the proposed NRIC-early optimisation to the products Resolve API. The officer API call happens regardless, so the change saves little except in some multi-appointment cases.
   - **Who decided:** Team consensus, Adrian Ang and Rama in the room
   - **Impact:** No products-team change requested. NRIC optimisation is not a priority and does not block delivery.

2. **Last-Modified Date — add back into APIs, treat as a trigger**
   - **Why:** The team clarified that last-modified date can change when no Compass-relevant field changed (upstream edits Compass doesn't consume). Treating it as a direct update instruction would cause false profile updates.
   - **Who decided:** Team consensus
   - **Impact:** Compass compares data payloads before deciding to update a profile. Reduces the risk of an incorrect sync model, but the exact comparison + recompute logic is still to be written (see Open Questions).

3. **Performance Testing — proceed toward next-week execution**
   - **Why:** Timeline pressure; the team wants to keep the test date.
   - **Who decided:** Rama owns the plan, team aligned
   - **Impact:** Baseline uses ~10% MVP-agency usage assumptions. Production Compass environment will be used while many dependencies stay pointed at non-production. Readiness gaps remain (see Risks).

4. **External Systems — engage owners, don't load-test them directly**
   - **Why:** Directly load-testing Careers@GovTech / fromTFM / Products risks production impact and vendor friction.
   - **Who decided:** Team consensus
   - **Impact:** The team must get supported-capacity and readiness confirmation from each dependency owner instead. Michelle owns the Careers@GovTech outreach.

---

## Action Items

| Task | Owner | Due | Priority | Status |
|------|-------|-----|----------|--------|
| Reach out to Careers@GovTech re: expected load capacity (via Lee Koon / Li Kun) | @Michelle | Before test execution (next week) — flag: no firm date | 🔴 High | Not started |
| Investigate how to engage fromTFM NCS owners — determine owner/contact | @PM team (Michelle to confirm she's not the default owner) | Before test execution | 🔴 High | Not started |
| Review scenarios and allocations in the performance test plan | @Michelle + stakeholders | This week (Pow Hwee requested it in-meeting) | 🔴 High | Not started |
| Rework OTG statistics into load-testing assumptions (normalise monthly numbers + usage patterns) | @Jobelle Lim | Before test execution | 🔴 High | Not started |
| Finalise performance testing plan | @Rama | Before next week's execution | 🔴 High | In progress |
| Complete detailed scripts and performance scenarios | @Rama, @Radhika, @Adrian Lo | This week | 🔴 High | In progress |
| Validate think-time assumptions (missing from plan) | @Rama | Before execution | 🔴 High | Not started |
| Link infrastructure-sizing doc (CPU, memory, autoscaling) into Confluence | @Rama | This week | 🟡 Medium | Not started |
| Share Careers@GovTech load requirements to PM team | @Rama | This week | 🟡 Medium | Not started |
| Review endurance-test duration (2h challenged — SGEMS used 12h, some agencies 24h) | @Rama, @Barry Lim | Before execution | 🟡 Medium | Not started |
| Work with Adrian Lo on employment-profile-change implementation sizing (fit within 2.5 sprints) | @Imelda Mo | This week | 🟡 Medium | Not started |
| Reschedule go-live checklist review session (include Barry Lim, Jace, others) | @Rama | This week | 🟡 Medium | Not started |
| Review + comment on the API proposal doc in Confluence | @All | Before testing commences | 🟢 Low | Open |

**Michelle's items:** Careers@GovTech outreach, fromTFM NCS owner question, performance-test scenario review. All three are "before next week" with no exact date — pin the date at the next readiness check.

---

## Key Insights

**Last-modified date is a trigger, not an instruction.** The core clarification of the meeting: an upstream last-modified timestamp can move without any Compass-relevant field changing. If Compass updates on the timestamp alone, it generates false profile updates → unnecessary competency recomputation → audit noise → profile-version bloat. The agreed model is: timestamp triggers a check, Compass compares payloads, updates only on a real delta. The comparison logic and the "when does competency recompute" rule are still being written up (Johnny to document).

**Performance-test readiness is behind the headline status.** Multiple threads ended in "put it in Confluence" or "we'll work out the details" — think-time modelling missing, scripts not final, scenarios not PM-reviewed, infra sizing (CPU/memory/autoscaling/async AI behaviour) still under review. Testing starts next week.

**Load-sizing numbers aren't evidence-based yet.** 600 concurrent / 900 load / 1500 stress. Jace thought 600 concurrent seemed high; Rama said he "expected around 1000" but was unsure. Jobelle owns reworking OTG historical stats into a defensible concurrency model — that needs to land before execution, not after.

**External dependencies are a systems-thinking win but an engagement gap.** The team correctly identified Careers@GovTech, fromTFM NCS, Products/POCDEX and CSC as part of performance readiness, not just Compass. But there's no confirmed engagement outcome with any of them. Decision to engage owners (not load-test them) is right; the outreach hasn't started.

**Scaling beyond MVP is acknowledged as out of scope.** MVP ≈ 6k users, future ≈ 150k officers. The team expects a second load test later. Watch that this round's results aren't read as production-readiness beyond MVP.

---

## Open Questions

- [ ] Employment-profile Day-2 design: exactly when does Compass update a profile, what fields get compared, and when does competency recomputation fire? — **Owner:** @Imelda / @Adrian Lo (Johnny documenting) — **By:** before implementation sizing lands
- [ ] Who owns the fromTFM NCS relationship and is the contact point for capacity confirmation? — **Owner:** PM team — **By:** this week
- [ ] Do any dependency owners (Careers@GovTech, Products) need a go-live notification or standby support arrangement? — **Owner:** @Michelle / @Rama — **By:** before execution
- [ ] What are the exit criteria for the performance test? (not stated in the meeting) — **Owner:** @Rama — **By:** readiness review
- [ ] Is the 2-hour endurance test the agreed duration, or does it move toward 12–24h? — **Owner:** @Rama / @Barry — **By:** before execution

---

## Blockers

1. **Performance test design incomplete with execution ~1 week out**
   - **Blocked by:** Think-time model, final scripts, PM-reviewed scenarios, infra-sizing sign-off all outstanding
   - **Impact:** Test runs on unvalidated assumptions → results may not be trustworthy, or execution slips
   - **Resolution:** End-of-week readiness review with a checklist: scripts, scenarios, think-time, infra config, exit criteria, dependency confirmations — each signed off or explicitly waived

2. **External dependency readiness unvalidated**
   - **Blocked by:** No engagement started with Careers@GovTech, fromTFM NCS, Products on supported capacity
   - **Impact:** A dependency owner could decline participation, raise vendor concerns, or require standby support — any of which moves the test date
   - **Resolution:** Start outreach now (Michelle on Careers@GovTech; assign the fromTFM NCS owner today)

---

## Timeline Risks

- **TIMELINE RISK:** Performance testing is scheduled to start next week (week of 15 Sep), but the plan, scripts, scenarios and think-time model are all "expected this week" and the load assumptions are still being reworked from OTG data. If any slips, execution slips. This test is on the critical path to the 24–25 Nov launch alongside VAPT. Get a hard readiness checkpoint on the calendar for Thu/Fri this week.
- **TIMELINE RISK:** External dependency engagement (Careers@GovTech, fromTFM NCS) has not started and each owner's response time is outside the team's control. Starting outreach "before next week" leaves no buffer if an owner needs a formal request or lead time. Send the first notes today.
- **TIMELINE RISK:** Employment-profile change implementation is being sized against a "2.5 sprint" window while the processing logic is still being documented. Sizing an undefined design tends to under-estimate. Confirm the design is written before the sizing number is committed.

---

## Next Steps

**Immediate (this week):**
1. Michelle: send the Careers@GovTech outreach (via Lee Koon / Li Kun) — capacity expectations, anticipated Compass traffic, whether a go-live notification is needed.
2. Michelle: raise the fromTFM NCS owner question — confirm who owns it; push back if "PM team" defaults to her without a reason.
3. Michelle: block time to review the performance-test scenarios and allocations, feedback into the Confluence page (Pow Hwee asked for this explicitly).
4. Get an end-of-week performance-test readiness checkpoint on the calendar (Rama owns the plan; Michelle can call the checkpoint).

**Short-term (before execution):**
- Confirm exit criteria and endurance-test duration are agreed, not still under negotiation.
- Confirm Jobelle's OTG-based concurrency model replaces the estimated 600/900/1500 figures.
- Add R1/R2 (below) to the MVP RAID and flag to Adrian.

**Follow-up meetings:**
- **Performance-test readiness review** — Thu/Fri this week — Rama, Michelle, Radhika, Adrian Lo, Jobelle — confirm sign-off on all test prerequisites
- **Go-live checklist review (rescheduled)** — Rama to set — include Barry Lim and Jace so SGEMS lessons are captured

---

## RAID Entries to Add

**R1 — Performance Test Readiness Risk** *(elevate to Adrian / SteerCo now)*
- **Risk:** Performance-test scenarios, scripts, think-time modelling and dependency assumptions may not be validated before execution week.
- **Impact:** Inaccurate results, or test execution slips — either compresses the runway to 24–25 Nov launch.
- **Mitigation:** End-of-week readiness review; PM review of scenarios; confirmation of external dependencies; agreed exit criteria.

**R2 — External Dependency Capacity Risk** *(elevate to Adrian / SteerCo now)*
- **Risk:** Careers@GovTech, fromTFM NCS and Products capacity and readiness are not confirmed.
- **Impact:** Production impact during testing, test restrictions, or go-live issues.
- **Mitigation:** Engage system owners this week, validate supported load, agree communication and standby approach.

**R3 — Employment Profile Change Detection Risk** *(engineering/product watchlist)*
- **Risk:** Undefined interpretation of upstream last-modified dates causes unnecessary profile refreshes and competency recalculation.
- **Impact:** Day-2 operational inefficiency, audit noise, profile-version bloat.
- **Mitigation:** Finalise the profile-update rules and payload-comparison logic before implementation; document before sizing is committed.

---

## Context for Future Reference

**Where this sits:** Performance testing is one of the launch gates for the 24–25 Nov Career Compass MVP, running in parallel with VAPT (7 Sep–8 Nov). See [MVP readiness gates](../analyses/2026-09-03-W36-mvp-readiness-gates.md) and [MVP RAID consolidated](../analyses/2026-09-03-W36-mvp-raid-consolidated.md) — R1 and R2 above should be added there.

**On the employment-profile thread:** this is the same workstream the 3 Sep descope touched. Full employment-lifecycle exception handling is out of MVP; the last-modified-date / change-detection logic discussed here is the ingestion-trigger mechanism, which stays in scope. Adrian's 8 Sep KB comments on hidden competencies and data freshness connect here — the "last-updated-date available?" question got a partial answer today: it's available and will be re-added to the APIs, but as a trigger requiring payload comparison, not a reliable freshness signal on its own.

**Stakeholder note — Jace:** actively challenged the load numbers (600 concurrent "seemed high") and the 2h endurance duration. He's bringing SGEMS delivery experience to the readiness bar. Rama wants him and Barry in go-live planning for the same reason.

**Stakeholder note — Pow Hwee:** consistently the one separating optimisations from blockers (NRIC API change) and naming missing rigour (think-time model, test-profile diversity). Useful ally for keeping the performance test honest.

---

## Appendix: Raw Notes

<details>
<summary>Original meeting summary (as provided)</summary>

Reviewed transcript and meeting chat from OTEP Squad Sync, held 2026-09-08 09:30–10:30.

Primarily a technical alignment and delivery-readiness meeting. Progress on resolving ambiguity around the employment profile integration with POCDEX/products APIs; alignment on direction for profile change detection; considerations surfaced for performance testing and go-live readiness. Still signs of unclear ownership, unresolved technical design decisions, incomplete performance test preparation, and external dependency risks to close before testing next week.

What went well: (1) Products/API design challenge handled constructively — NRIC-early optimisation to products Resolve API challenged by Pow Hwee; officer API call happens regardless; team aligned it's not blocking, not a priority. (2) Better understanding of "last modified date" — may reflect changes Compass doesn't consume; treat as trigger not instruction; compare payloads before updating. (3) Team challenged performance-test assumptions — concurrent user sizing, load projections, endurance duration, think time, production dependencies, caching from repeated users, external system impacts. (4) Dependency management awareness — Careers@GovTech, fromTFM NCS, Products/POCDEX, CSC systems all part of performance readiness.

What didn't go well: (1) Employment profile change design not fully settled — last-updated-date interpretation, update frequency, final processing logic all incomplete ("need to understand", "I'll ask Johnny to write down"). (2) Performance testing prep behind schedule — think time incomplete (Pow Hwee), detailed scripts not finalised (Radhika + Adrian Lo, expected end of week), scenario validation not done (PM review requested in-meeting), infra assumptions under review (CPU, memory, autoscaling, async AI during load). (3) Load sizing rationale lacks confidence — why 600 concurrent / 900 test / 1500 stress; Jace felt 600 high; Rama "expecting around 1000" but uncertain; OTG historical support unclear. (4) Endurance test duration may be insufficient — Jace flagged 2h too short; SGEMS used 12h; some agencies 24h; Barry previously questioned.

Risks not fully addressed: (1) False profile updates — last-modified date changes without Compass-relevant field change → excess updates, competency recalc, audit noise, version bloat; mitigation conceptual. (2) External platform operational readiness — Careers@GovTech, fromTFM NCS; no confirmed engagement outcome; rejection / vendor concerns / standby support could hit timelines. (3) Synthetic test traffic may not reflect reality — 50–60 profiles reused, limited diversity, DB caching, repeated search patterns → results look better than reality, bottlenecks hidden until go-live. (4) Scaling beyond MVP — MVP ≈ 6k, future ≈ 150k; another load test likely later; false sense of readiness beyond MVP. (5) Go-live checklist knowledge gap — Rama wants Jace + Barry in go-live planning for SGEMS lessons; unknown go-live activities may not be captured.

Decisions: Employment Profile API — proceed existing approach, NRIC optimisation not priority. Last Modified Date — add back into APIs, treat primarily as trigger. Performance Testing — continue prep for next week; baseline ~10% MVP-agency usage; production Compass env used while many dependencies point to non-prod. External Systems — avoid direct load-testing unless required; engage owners for supported capacity + readiness.

Action items: Review/feedback API proposal doc (team, Confluence). Employment profile change implementation sizing with Adrian Lo (Imelda, within 2.5 sprints). Reschedule go-live checklist review (Rama, incl. Barry Lim, Jace). Finalise perf test plan (Rama, before next week). Review scenarios + allocations in perf test plan (PMs + stakeholders, per Pow Hwee). Validate think-time assumptions (Rama). Complete detailed scripts + perf scenarios (Rama, Radhika, Adrian Lo, this week). Link infra-sizing doc into Confluence (Rama). Share Careers@GovTech load requirements to PM team (Rama). Reach out to Careers@GovTech re expected load capacity via Lee Koon/Li Kun (Michelle). Investigate how to engage fromTFM NCS owners (PM team). Rework OTG statistics into load-testing assumptions (Jobelle). Add further feedback to Confluence (all, before testing). Review endurance test duration (Rama, Barry).

Provider's read: healthy meeting, assumptions challenged early. Biggest takeaway = perf-test readiness less mature than headline. Top-3 escalatable: (1) perf test design incomplete before execution week, (2) external dependency readiness not validated, (3) employment profile change detection logic unresolved. Elevate R1 + R2 to Adrian/SteerCo now; keep R3 on engineering/product watchlist.

</details>
