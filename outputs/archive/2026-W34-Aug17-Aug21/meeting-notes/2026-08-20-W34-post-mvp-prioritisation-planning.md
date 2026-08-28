# Meeting Notes: Post-MVP Prioritisation Planning

**Date:** 20 Aug 2026 (processed; original meeting date not stated in transcript — confirm before filing)

**Attendees:** Michelle YIP (Ops Portal/CMM/HRPS discovery owner), Imelda (meeting summarizer), Pow Hwee (tech debt/capacity to Rama), Designer (unnamed), others unconfirmed from transcript

**Meeting Type:** Roadmap and sprint capacity planning (R1 MVP, Sept–Nov window)

**Duration:** ~65 minutes (timestamps to 1:02:00)

---

## Summary

The team locked a five-sprint structure from 7 Sept to 13 Nov, splitting capacity 50/50 between VAPT/go-live readiness and feature work (enhancing search, Ops Portal employment profile changes, R1/CMM discovery). Employment profile change was prioritized over unifying officer accounts/double-hatting. Soft launch was set for ~15 Nov, MVP launch for late Nov. Real friction underneath: engineering capacity is effectively down to one stable engineer (Thomas) with uncertain support from a second (Howing), a single designer is stretched across R1 + CMM discovery and going on leave end-Aug/early-Sept, and the combined workload (MVP polish, search, employment profile change, CMM/R1 discovery, CAM groundwork) doesn't cleanly fit 2.5 feature sprints.

---

## Decisions Made

1. **Five-sprint structure locked: 7–18 Sept, 21 Sept–2 Oct, 5–16 Oct, 19–30 Oct, 2–13 Nov, plus residual late-Nov buffer**
   - **Why:** Gives a shared anchor for downstream scope and capacity conversations after VAPT/UAT wraps.
   - **Who decided:** Team (Michelle facilitating).
   - **Impact:** All scope commitments below are sized against this structure.

2. **50/50 capacity split: half to VAPT/go-live readiness, half to feature work**
   - **Why:** Avoids assuming full feature capacity during a heavy VAPT/go-live period — named explicitly as a trap to avoid.
   - **Who decided:** Team.
   - **Impact:** Feature work (search, employment profile change, discovery) only gets ~2.5 sprints of real capacity, not 5.

3. **Employment profile change (Ops Portal) prioritized over unifying officer accounts/double-hatting**
   - **Why:** Higher frequency and broader impact.
   - **Who decided:** Team.
   - **Impact:** Double-hatting/account unification pushed to R1+ or later — **not explicitly confirmed as fully out of MVP scope**, see Open Questions.

4. **Enhancing search scoped as ≤1 sprint, can start around or slightly before/after VAPT**
   - **Why:** Small, low-risk, non-feature-introducing change; doesn't threaten code-freeze rules.
   - **Who decided:** Michelle, agreed by team.
   - **Impact:** Can ship alongside MVP without competing hard for the 2.5 feature sprints.

5. **SingPass integration for non-POCDEX users deferred to R2+**
   - **Why:** Not needed until non-POCDEX users are actually onboarded.
   - **Who decided:** Team.
   - **Impact:** Removes one item from near-term scope pressure.

6. **Soft launch ~15 Nov, MVP launch late Nov (not into December)**
   - **Why:** December capacity is explicitly weak.
   - **Who decided:** Team.
   - **Impact:** ⚠️ See Timeline Risks — this conflicts with dates already tracked in the 11 Aug MVP Timeline RAID log.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Allocate engineering capacity across the 5 sprints (VAPT vs. feature) and confirm who's available each sprint | Rama | No due date mentioned — schedule within 48 hours | High | 🔴 Not Started |
| Get a firm answer on whether Heo Eng stays on through the sprints | Rama | No due date mentioned — flagged as urgent in-meeting ("I cannot afford to have someone suddenly drop") | High | 🔴 Not Started |
| Finalize enhancing-search scope to fit ≤1 sprint | Michelle | No due date mentioned | Medium | 🔴 Not Started |
| Lock R1 MVP scope (application + role-based access + creation form with ring-fencing) against actual headcount; explicitly mark what gets cut | Michelle | No due date mentioned | High | 🔴 Not Started |
| Initiate Compass's onboarding process with the CAM team | Michelle | No due date mentioned | High | 🔴 Not Started |
| Clarify minimum audit/log scenarios needed for CAM's first phase | Michelle | No due date mentioned — depends on profile refresh readiness | Medium | 🔴 Not Started |
| Raise Product-team request for reporting manager ID field | Rama / Adrian | No due date mentioned — explicitly "now, to get into the queue" | Medium | 🔴 Not Started |
| Raise Product-team request for lastUpdated/modified timestamp fields at multiple levels | Rama / Adrian | No due date mentioned — same urgency as above | Medium | 🔴 Not Started |
| Reply to Hui Ting confirming her OTG test cases are sufficient to scope employment profile changes | Rama / Imelda | No due date mentioned | Medium | 🔴 Not Started |
| Send written debrief (timeline, capacity split, scope priorities) to the team | Imelda | No due date mentioned — meeting ended on this commitment | High | 🔴 Not Started |
| Produce a matrix of profile-change scenarios (agency change, email change, double-hatting, NRIC mapping) with phase-1-vs-later breakdown | Michelle / Imelda / Core Team | No due date mentioned | High | 🔴 Not Started |
| Schedule September discovery syncs with HRPS and other stakeholders for Ops Portal + CMM | Michelle | No due date mentioned — "in September" | Medium | 🔴 Not Started |
| Complete first batch of R1 + CMM designs | Designer | End of August | High | 🔴 Not Started |
| Schedule a design walkthrough before designer goes on leave | Designer | Before end-Aug/early-Sept (designer's leave date) | High | 🔴 Not Started |
| Send Rama an assessment of technical debt and available capacity for new work | Pow Hwee | No due date mentioned | Medium | 🔴 Not Started |
| Inform CAM which users exist in Compass so CAM can manage identities | Michelle | No due date mentioned | Medium | 🔴 Not Started |
| Record soft-launch and main-launch dates in the shared log (Confluence) | Imelda | No due date mentioned | Low | 🔴 Not Started |

**Notes:**
- **Zero of these 17 action items have a stated due date.** Given this feeds directly into 5 sprints starting 7 Sept, the ones without dates should be dated this week, not left to drift — this is a launch-critical planning cycle, not a routine sync.
- Two items are already overdue by nature of the meeting itself: the capacity firm-answer ask (Howing) and the Product field requests, both explicitly flagged in-meeting as needing to happen "now."

---

## Key Insights & Quotes

**Capacity is the real constraint, not enthusiasm or prioritization clarity:**
"I only left with one engineer" — describes going from a team to essentially Thomas alone once one engineer is on leave in September and another returns to prior scope. This directly undercuts the "2.5 feature sprints" capacity assumption baked into the 50/50 split — 2.5 sprints of *what* engineer's time is now genuinely unclear.

**The scope-vs-capacity gap was named but not resolved with hard cuts:**
"It's very obvious that the resource not enough... I need to have application, role-based, creation form with ring fencing." This is an explicit acknowledgment that R1 scope as stated doesn't fit current headcount, but the meeting closed without naming what gets cut. The follow-up email (Imelda's action item) is where this either gets resolved or continues to drift.

**Employment profile change and CAM work are both being called "epic-level" without being broken down yet:**
The employment profile change is described as "almost an epic by itself," and CAM work is sized at "minimally three months" once started — but the scenario matrix (agency change, email change, double-hatting, NRIC mapping) that would actually make these estimable doesn't exist yet. Building against unscoped epics risks the rework the meeting itself worried about.

**Quote worth keeping for stakeholder comms:** "The onboarding process actually can take quite a while... Can we start the onboarding first?" — good justification if CAM timeline pressure needs explaining upward later.

---

## Open Questions

- [ ] Is double-hatting/account unification *definitively* out of MVP and pushed to R1+, or still an open call? — **Owner:** Team (unconfirmed who drives this specifically) — **By:** Before the follow-up email goes out, since it's currently stated as "prioritized below" employment profile change, not explicitly descoped
- [ ] Who owns CAM — is it under Core, or a separate interacting workstream? — **Owner:** Team/Michelle — **By:** Before CAM onboarding action item proceeds, to avoid working at cross-purposes with whoever else assumes ownership
- [ ] How much of CMM discovery is realistically achievable in September given one designer is also on R1 and going on leave? — **Owner:** Michelle + Designer — **By:** Before September discovery syncs are scheduled, so expectations are set correctly with HRPS/stakeholders
- [ ] What specific field(s) and timeline does "minimum viable CAM integration" mean for phase 1? — **Owner:** Michelle + Engineering — **By:** Before CAM work formally starts, to avoid a 3-month CAM effort ballooning without a defined floor

---

## Blockers

1. **Engineering capacity below what the 50/50 split assumes**
   - **Blocked by:** Uncertain whether the second engineer (Howing) stays through the sprint cycle; only Thomas confirmed as stable.
   - **Impact:** The "2.5 feature sprints" the team is planning around may not actually exist at full strength — search, employment profile change, and discovery are all competing for a possibly-smaller pool than assumed.
   - **Resolution:** Rama to get a firm commitment before finalizing sprint allocation (already an action item above).

2. **Design bottleneck — single designer, three concurrent demands, imminent leave**
   - **Blocked by:** One designer covering R1 opportunity-creation flows, CMM discovery, and remaining MVP UI screens, going on leave end-Aug/early-Sept.
   - **Impact:** Discovery artifacts for CMM and R1 may arrive late or incomplete; engineers could proceed on partial/outdated designs during her leave.
   - **Resolution:** Design walkthrough before leave (action item above) is the stated mitigation, but doesn't solve the underlying single-point-of-failure.

3. **Employment profile change and CAM work lack a defined scenario matrix**
   - **Blocked by:** No matrix yet covering agency change, email change, double-hatting, and NRIC-based identity mapping — the actual complexity driver behind both epics.
   - **Impact:** Engineering may start building against incomplete requirements, risking rework once edge cases (e.g., distinguishing double-hatting from a genuine agency move when both emails are active) surface mid-build.
   - **Resolution:** Michelle/Imelda/Core Team's matrix action item (above) — currently has no date attached.

---

## Timeline Risks

- **TIMELINE RISK — soft launch (15 Nov) / MVP launch (late Nov) conflicts with the last tracked MVP Timeline RAID log** ([2026-08-11-W33-mvp-timeline-raid.md](../analyses/2026-08-11-W33-mvp-timeline-raid.md)). That analysis (9 days before this meeting) flagged VAPT Round 2 dates as internally broken on the Jira board (start date before due date), the Go-Live epic as entirely undated on every sub-task including IDSC AI Clearance (historically slow, unpredictable), and three different VAPT close dates in circulation (16 Oct / 23 Oct / 26 Oct) with none confirmed as authoritative. This meeting states 15 Nov/late-Nov as settled without referencing whether any of those three RAID risks (R1, R4, R6) have actually been resolved since 11 Aug. **Before treating 15 Nov as reliable, confirm the Go-Live epic (particularly IDSC clearance) now has real dates and that VAPT Round 2's date error was fixed** — otherwise this meeting's launch date may be built on the same undated foundation the RAID log warned about.
- **TIMELINE RISK — VAPT window stated in this meeting (roughly Sept–Nov, capacity dedicated "for this") doesn't match the RAID log's VAPT Round 1 window (7–28 Sept) plus Round 2 retesting (dates broken) plus Final Report (26 Oct, "pending R1 fix").** If VAPT genuinely extends into November per this meeting, that's a material timeline shift from what was tracked 9 days ago — confirm which is current before both figures propagate into different documents.
- **TIMELINE RISK — "2.5 feature sprints" capacity assumption stated as available, but "I only left with one engineer" was said in the same meeting.** These two statements aren't reconciled — the sprint/capacity plan (Action Item 1) needs to resolve this before it's treated as locked.

---

## Next Steps

**Immediate (This Week):**
- Get firm capacity commitment on Howing (blocks all downstream sprint planning)
- Raise Product-team field requests (reporting manager ID, lastUpdated fields) — explicitly time-sensitive per the meeting
- Confirm VAPT/Go-Live dates against the 11 Aug RAID log before the follow-up email states 15 Nov as fixed

**Short-term (Next 2 weeks):**
- Produce the profile-change scenario matrix with Michelle/Imelda
- Lock R1 MVP scope against actual (confirmed) headcount, with explicit cuts named
- Schedule the design walkthrough before the designer's leave

**Follow-up Meeting:**
- **Purpose:** Imelda's written debrief should trigger a confirmation round, not just a broadcast — especially on the double-hatting scope question and the capacity/timeline reconciliation above.

---

## Addendum: Scope Split and Sprint Dates (added 2026-08-24, from original meeting detail)

**Pathfinder scope:**
- Enhancing search (title + agency name, matches found in description)
- R1 scope for opportunities (minimally creation, structured application, bookmarking, ingesting other job types — Internal Jobs, SJRs/Secondments, PSFG — and allowing new job types to be added)
- Opportunities 2-way sync — ensuring opportunities show in both OTG and Career Compass (OTG has no API, and dual-posting may not be the best experience)
- CAM (includes role-based access, e.g. Agency HR creating opportunities)

**Core scope:**
- Employment profile changes
- Go-live preparations (SSP, risk assessment, performance testing, onboarding to ABLR)
- VAPT fixing
- Data modelling tech debt
- [Discovery] Scope the final CMM for R1, including CIE
- Onboarding ABLR

**Sprint dates (the "five-sprint structure" from Decision 1, itemized):**
- Sprint 1: 7 Sep – 18 Sep
- Sprint 2: 21 Sep – 2 Oct
- Sprint 3: 5 Oct – 16 Oct
- Sprint 4: 19 Oct – 30 Oct
- Sprint 5: 2 Nov – 13 Nov
- Window: 7 Sep (VAPT start) through 15 Nov (MVP full launch)

**Other notes from the original meeting detail:**
- By Jan 2028, everyone should have been ported to Compass, because the SJR cycle starts then.
- For the Ops module, Core team will assess residual risks from Employment Profile Changes; those residual risks get handled in the Ops Portal.
- If POCDEX needs to be involved in any workstream, engage the POCDEX team early — a reminder, not a new decision.
- CAM onboarding processing time may range 1–3 months; integration work follows onboarding but can only be tested once the Employment Profile Changes epic is ready.

**Cross-reference note:** the Sprint 5 end date (13 Nov) and "MVP full launch" target (15 Nov) here should be checked against the newer POCDEX-driven 24 Nov production rollout date and the "week of 2 Nov" figure tracked in `open-items.md` #39 — three different dates are now in circulation across sources generated at different points. Not reconciled in this pass; flagging for whoever next touches the launch-date question.

---

## Context for Future Reference

This meeting sits directly upstream of the Ops Portal epic one-pager work already in progress (see [2026-08-17-W34-ops-portal-epic-one-pager.md](../prds/2026-08-17-W34-ops-portal-epic-one-pager.md)) — the "employment profile change" prioritization decision here is the same workstream as that PRD's TC1–TC14 scope. The scenario matrix action item (double-hatting, NRIC mapping, agency change) overlaps meaningfully with that PRD's Section 7 test-case table and Story 1c (identity resolution) — worth checking whether Michelle's matrix and the PRD's existing TC breakdown should be the same artifact rather than two parallel ones.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw meeting summary (as provided)</summary>

Full big-picture context, what-went-well, friction points, risks, and decisions as originally submitted — condensed above into the structured format. Original included specific timestamp citations (e.g., [0:11:45–0:13:20]) for sprint dates, capacity split, and prioritization calls; retained in source material, not reproduced here to keep this file scannable.

</details>
