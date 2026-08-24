---
date: 2026-08-18
week: 2026-W34
type: async-update
source: Slack
attendees: [Michelle, Gek Khiang TAN (PSD), Victor ONG (PSD), Imelda (consolidator)]
---

# Weekly Update: CareerCompass (Slack, w/e 14 Aug)

**Type:** Async status broadcast (Slack), not a live meeting

**Consolidated by:** Imelda

---

## Summary

UAT Phase 1 (Profile, Opportunities) started 11 Aug and is going smoothly, bugs in progress. UAT Phase 2 has been pulled forward a week to 17 Aug (originally later) to give testers more runway, driven by a CSC data-provision date also moving up to 20 Aug. Separately, AI IDSC prep for CIE CV assessment is queued for next week with Victor's team running validation checks first.

---

## Decisions Made

1. **UAT Phase 2 start date moved earlier, to 17 Aug**
   - **Why:** BO feedback asked for more time to review and execute test cases; CSC also brought forward their DLE Learn course catalog staging data-provision date to 20 Aug, which lets Course functionality testing land by end of next week instead of later.
   - **Who decided:** CareerCompass/Imelda's team, in response to BO feedback + CSC's date move.
   - **Impact:** UAT Phase 2 sequence is Opportunities → Profile phase 2 → myDevelopment → Courses. This matches what's already confirmed on the ground today (18 Aug) — WOG AD prod/UAT access and Gate 2 test-data confirmation both landed this week, consistent with Phase 2 being underway.

2. **Day 2 Ops dashboard stood up in the Ops Portal**
   - **Why:** To monitor count and severity of data drift between POCDEX and CareerCompass.
   - **Who decided:** Team, as part of Day 2 Ops workstream.
   - **Impact:** Directly relevant to the CC Ops Portal MVP PRD (Section 8) — this may be the detection-side story already in scope; worth confirming whether this dashboard *is* that story or a separate interim tool.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm AI IDSC approach for CIE CV, respond to Gek Khiang | Victor ONG | Next week (w/c 24 Aug) | Medium | 🔴 Not Started |
| Run validation checks on HRPS-provided CVs for model accuracy | Victor ONG's team | Next week | Medium | 🟡 In Progress (starting) |
| Confirm whether data-sharing form needs modification for officer data-change scenarios (ministry/email change) | XZ + team | Next week | High | 🟡 In Progress — sub sent, awaiting confirmation |
| Connect POCDEX API to POCDEX UAT database (real staging data for UAT Phase 2) | Engineering | Mid next week (~20-21 Aug) | High | 🔴 Not Started |
| VAPT access setup + application walkthrough with NCS | Team + VAPT (NCS) | Next week | Medium | 🔴 Not Started |
| Kickstart go-live checklist review and preparation | Team | Next week | Medium | 🔴 Not Started |

**Notes:**
- No explicit owner named for "internal planning for post-VAPT fast follows" (Day 2 ops data handling, WOG role profile competency identifier, officer competency storage model) — flag if this needs a named driver before it's just a list of ideas.

---

## Key Insights & Quotes

**Data-sharing form scope may expand:**
"We are doing tech analysis on data required to support officer data changes like if officer changed ministries, changed email, etc. There is a chance that we need to modify the data sharing requirement."
→ This is the same thread as open item #55 (Huiting's data requirements ask) — the Data Sharing Form was confirmed locked 14 Aug per that tracker, but this note suggests a possible reopening if officer-data-change scenarios require different data. Worth reconciling: is this new scope, or the ≥25 additional UAT scenarios POCDEX already recommended (still unowned as of 11 Aug per open-items #55)?

**UAT Phase 2 pulled forward, not delayed:**
Unusual direction — most items in this tracker slip later. Worth naming as a positive pattern break in Friday's review.

---

## Timeline Risks

- **TIMELINE RISK:** This Slack update (dated "this week 14 Aug") says UAT Phase 2 test case/data prep runs 17–24 Aug. But `risks.md` (updated 2026-07-31) shows UAT running 11 Aug – 4 Sep with a **PS/DS proposal pending** that would shift the whole timeline (UAT to mid-Aug–early-Sep, VAPT to early-Sep–mid-Nov, MVP launch to end Nov). If the PS/DS proposal is still unapproved, this week's dates in the Slack update may be operating off the *old* schedule, not the proposed one — worth confirming which timeline current planning is actually running against before treating 17–24 Aug as fixed.
- **TIMELINE RISK:** "POCDEX API connected to POCDEX UAT database by mid next week" (~20–21 Aug) is very close to Sprint 8 feature freeze (Friday 21 Aug, per this week's PM-OS weekly plan) — if that connection slips even a couple of days, it lands inside or after freeze week with no Sprint 9 buffer.

---

## Open Questions

- [ ] Is the data-sharing form modification (officer data-change scenarios) new scope, or the same ≥25 UAT scenarios POCDEX already flagged as needing an owner? - **Owner:** Michelle, cross-check with open-items #55 - **By:** Next week
- [ ] Does the new Ops Portal Day 2 dashboard fulfill the "daily sync detects, diffs, categorizes, logs" story from the Ops Portal PRD (Section 8), or is it a separate interim build? - **Owner:** Michelle - **By:** Before next Ops Portal planning touchpoint
- [ ] Which timeline is UAT Phase 2 actually running against — the 11 Aug–4 Sep schedule in risks.md, or the pending PS/DS-proposed shift? - **Owner:** Michelle - **By:** This week

---

## Next Steps

**Immediate (This Week):**
- Reconcile UAT Phase 2 dates against the PS/DS proposal status (still the open Priority 3 item from this week's plan)
- Confirm with Imelda/XZ whether data-sharing form scope change is real or already-tracked

**Next Week (w/c 24 Aug):**
- Respond to Gek Khiang on AI IDSC approach for CIE CV, after Victor's team completes validation checks
- Track POCDEX UAT database connection (~20-21 Aug) against freeze week

---

## Context for Future Reference

This update overlaps with two threads already active in this week's tracking:
- **Gate 2 / UAT Phase 2 start** — resolved today (18 Aug) per Michelle's direct confirmation; this Slack update corroborates the Phase 2 timeline (17–24 Aug test case/data prep) but was written before today's resolution.
- **PS/DS decision (open-items, Priority 3 this week)** — the VAPT/UAT timeline referenced here is exactly what's pending PS/DS approval. This update doesn't resolve that ambiguity, it just states dates as if settled.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw Slack content</summary>

Got it @Gek Khiang TAN (PSD), will get back next week on AI IDSC for CIE CV. @Victor ONG (PSD) side is planning to run some validation checks next week.

For this week 14 Aug CareerCompass updates (thanks Imelda for consolidating!):

**What happened this week**
1. UAT progress
   - UAT phase 1 with business teams started this Tuesday 11 Aug for Profile page and Opportunities. UAT went smoothly and bugs are in progress for being resolved.
   - Test case and data preparation for UAT phase 2: 17-24 August
2. DLE-Jumpstart dependency
   - DLE Learn course catalog file on staging environment – CSC team has brought forward their data provision date to 20 Aug. This will allow us to schedule UAT phase 2 such that Course functionality testing can be completed towards the end of next week.
3. POCDEX dependency
   - Data-sharing form - XZ sent a sub yesterday to seek approval. Note: We are doing tech analysis on data required to support officer data changes like if officer changed ministries, changed email, etc. There is a chance that we need to modify the data sharing requirement. Team will get back on a confirmation next week.
   - Day 2 Ops - Created a dashboard in the Ops Portal to monitor the count and severity of the informational drift between POCDEX and CC

**What's happening next week**
1. UAT Phase 2 - starting with Opportunities, Profile phase 2, myDevelopment then Courses. Taking in BO feedback, we brought forward UAT phase 2 to start earlier by a week so that UAT testers have sufficient time to review and execute the test cases.
2. POCDEX API is being connected to POCDEX UAT database by mid next week so that we can use actual staging data for our UAT phase 2.
3. Internal planning for post-VAPT fast follows – team has identified some data storing/handling enhancements that will be critical for scaling and reducing post go-live ops maintenance
   - Day 2 ops – handling officer data changes that can affect the officer experience on Compass like change in role, change in email address, etc.
   - Using a more robust identifier key for WOG role profile competencies – small data architecture adjustment. No impact to officer experience.
   - Officer competencies stored to their Compass profile – minor adjustment to data storage model to make it more robust. No impact to officer experience.
4. Access set up and application walkthrough with VAPT team (NCS)
5. AI IDSC preparation - @Victor ONG (PSD)'s team will receive some CVs from HRPS to assess model accuracy. We will then discuss with @Gek Khiang TAN (PSD) on approach to seek IDSC approval.
6. Kickstart reviewing go-live checklist and preparation

</details>
