# Meeting Notes: Sprint 6 Backlog Grooming

**Date:** 2026-07-02

**Attendees:** Imelda MO (PM, Learning Course Discovery), Amber Tong (Design), Engineering team (unnamed in source)

**Meeting Type:** Design review / backlog grooming

**Feature Area:** CareerCompass Courses (Imelda's squad — Learning Course Discovery, [context-library/prds/learning-course-discovery.md](../../context-library/prds/learning-course-discovery.md))

---

## Summary

This ran as a design review and grooming session for the Courses experience, not a sprint-planning meeting. The team worked through card design, search, filtering, and onboarding edge cases, landing seven decisions with generally strong MVP discipline. Two threads stayed open at the end: search relevance/ranking has direction but no agreed model, and a "new tab" interaction decision for Courses cards was extended to Opportunities cards — a cross-squad, platform-level call that affects Michelle's product area too.

---

## Decisions Made

1. **Course cards open in a new tab (and so will Opportunity cards)**
   - **Why:** Consistency across CareerCompass card-based CTAs; easier to compare multiple courses without losing place; back-button patterns can be dropped where new-tab applies.
   - **Who decided:** Team consensus, driven by Imelda's consistency framing.
   - **Impact:** This is a platform-level interaction pattern, not just a Courses decision — it reaches into Opportunities (Michelle's area). No explicit owner named for the Opportunities-side change. **Confidence: High.**

2. **Remove course start date from cards**
   - **Why:** Large proportion of courses lack start-date data; left too much white space; hurts list density.
   - **Impact:** Amber to update card design. **Confidence: High.**

3. **Adopt shorter, compact course card design**
   - **Why:** Reduces scrolling, improves density, better use of screen real estate.
   - **Impact:** Amber to update design. **Confidence: High.**

4. **Landing page only shows for users with learning history**
   - **Why:** Users with no learning history get more value going straight to the catalogue/search experience than landing on an empty-state page.
   - **Impact:** Affects onboarding flow for first-time users. **Confidence: High.**

5. **Opportunity search stays unchanged for now**
   - **Why:** Enhancements were discussed but deprioritized — Courses search work takes priority; a spike is planned for future Opportunity search exploration.
   - **Impact:** No near-term change to Opportunities search scope. Cross-references the Pathfinder Sprint 6 grooming brief, where Opportunities search AC ownership is already flagged as unresolved (open item #51) — worth keeping these two threads connected. **Confidence: High.**

6. **Search dropdown limited to 8 suggestions**
   - **Why:** Matches common product patterns (e.g., Google).
   - **Caveat:** Based on precedent, not data. **Confidence: Medium — flag for validation if search usage data becomes available.**

7. **Filters display available-only values** (hide filter options that would return zero results)
   - **Why:** Avoids dead-end filter selections.
   - **Caveat:** Directionally agreed, not user-validated. **Confidence: Medium.**

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Remove course start date from card design | Amber Tong | Not stated — recommend within 1 week | Medium | 🔴 Not Started |
| Apply new-tab behaviour to course card UX | Amber Tong | Not stated — recommend within 1 week | High (blocks consistency decision) | 🔴 Not Started |
| Update compact course-card design | Amber Tong | Not stated | Medium | 🔴 Not Started |
| Continue detailed design updates across course pages | Amber Tong | Not stated | Medium | 🔴 Not Started |
| Verify whether multiple course start dates exist in source data | Imelda MO | Not stated — should precede any future re-add of start-date display | Low | 🔴 Not Started |
| Evaluate complexity of broader search enhancements and ranking approaches | Engineering team | Not stated | High (this is the largest open risk — see below) | 🔴 Not Started |
| Investigate future opportunity-search improvements via spike | Engineering team | Not stated | Medium | 🔴 Not Started |
| Clarify profile creation cadence/messaging for newly onboarded users without profile records | Product/Engineering | Not stated | Medium | 🔴 Not Started |
| Revisit filter strategy and validate dynamic filtering approach | Product team | Not stated | Medium | 🔴 Not Started |
| **Apply new-tab decision to Opportunity cards** | **Unowned — needs a name** | Not stated | Medium | 🔴 Not Started |

**Notes:**
- No due dates were captured in the source material for any item — recommend scheduling all "High" priority items within 48 hours per standard practice, and flagging the rest for confirmation at the next Courses sync.
- The Opportunity-card new-tab change has no owner. Since this affects Michelle's product area, recommend Michelle either takes it or explicitly hands it to Thomas/whoever owns Opportunity card UI.

---

## Key Insights & Quotes

**Product/Process Observations:**
- Imelda consistently anchored decisions to user behavior, cross-CareerCompass consistency, MVP prioritization, engineering effort vs. value, and scalability — called out as the strongest pattern in the session.
- Multiple decisions were challenged with "why are we doing this?" rather than accepted on precedent (start dates, square cards, filters, new tabs, domain display) — reduces risk of carrying forward UI decisions with no current justification.
- Scope discipline held: search enhancements, vector search, and Opportunity search improvements were all explicitly parked/spiked rather than expanded into this session.

**Cross-Squad Note:**
- This meeting produced two decisions that reach beyond Imelda's Courses scope: the new-tab pattern (touches Opportunities) and the parked Opportunity-search spike (touches the same search-readiness gap already flagged in Pathfinder Sprint 6 grooming, open item #51 — search AC ownership). Recommend a short sync between Michelle and Imelda to align these before either squad builds independently.

---

## Open Questions

- [ ] What is the search success metric / KPI for Courses search? No threshold was defined during the session. - **Owner:** Imelda MO (product) - **By:** Not stated — recommend before search implementation is considered complete
- [ ] Is course domain tagging quality consistent enough to support domain-based search and filtering? - **Owner:** Imelda MO / Engineering - **By:** Not stated
- [ ] If search becomes strong enough, is the large filter panel still needed, or does it become redundant? - **Owner:** Product team - **By:** Not stated — deferred, not urgent
- [ ] What's the detailed recovery flow for officers who authenticate but have no profile record yet? Currently only a display message is planned. - **Owner:** Product/Engineering - **By:** Not stated — cross-references OTEP-594's similar "pilot agency, no POCDEX profile yet" gap in the Pathfinder Sprint 6 brief; worth checking whether these are the same underlying timing issue across both Courses and Opportunities.
- [ ] What readiness criteria validate that pilot-scale success will hold at larger scale (more agencies, larger populations)? - **Owner:** Not assigned - **By:** Not stated

---

## Risks Not Fully Addressed

1. **Search quality could become the MVP's biggest weakness (High severity)**
   - Team discussed fuzzy search, starts-with/contains ranking, and description matching in depth but never defined what "successful" search looks like, a KPI, or a success threshold.
   - **Resolution needed before:** implementation is considered complete.

2. **Domain tagging quality unvalidated (High severity)**
   - Search and filtering both assume courses are tagged correctly; several comments suggested tagging quality may be inconsistent. If so, domain search, filters, and any future recommendations all degrade together.

3. **Filter discoverability / relevance vs. search (Medium severity)**
   - Open question raised late in the meeting: if search gets good enough, does the large filter panel still add value, or does it become redundant UI weight?

4. **New-joiner onboarding gap (Medium severity)**
   - Officers who authenticate but don't yet have a profile record only see a message today — no detailed recovery flow discussed. Note: this may be the same underlying POCDEX-timing issue as OTEP-594's new scenario in Pathfinder (see Open Questions above).

5. **Scalability assumptions unvalidated (High severity)**
   - Team referenced future onboarding waves, more agencies, and larger populations, and acknowledged pilot success doesn't guarantee scale success — but no explicit readiness criteria were defined.

---

## Timeline Risks

No hard deadline conflicts found. The Learning Course Discovery PRD ([context-library/prds/learning-course-discovery.md](../../context-library/prds/learning-course-discovery.md)) targets an October 2026 launch with no near-term milestone that these open search/filter questions would immediately jeopardize — but "search readiness: 5/10" per the source assessment means this should get a checkpoint well before that date, not be left open indefinitely.

---

## Assessment (per source material)

| Area | Score |
|---|---|
| Product Health | 8/10 — strong MVP discipline |
| Design Readiness | 7/10 — most page-level decisions feel mature |
| Search Readiness | 5/10 — least-defined area |
| Delivery Risk | Medium |

**If surfacing to SteerCo or leadership:** Course discovery UX is largely stabilized; search relevance, ranking, and filtering strategy remain the primary product risk before implementation is complete.

---

## Next Steps

**Immediate:**
- Amber to action the four design updates (start date removal, new-tab UX, compact card, continued page updates)
- Michelle + Imelda to sync on the new-tab decision's reach into Opportunities, and on whether the Courses/Opportunities search-readiness gaps are worth tracking as one shared risk

**Short-term:**
- Engineering to scope the search-ranking evaluation and the Opportunity-search spike
- Define a search success KPI before calling search "done" — currently the single largest unresolved risk

**Follow-up meeting:** Not scheduled in source material — recommend booking a search-strategy-specific session given it's the lowest-scoring readiness area.

---

## Context for Future Reference

This is the first captured meeting on Courses search/filter/card decisions in this workspace — no prior meeting notes existed to cross-check against. The [learning-course-discovery.md](../../context-library/prds/learning-course-discovery.md) PRD should be updated with these seven decisions once confirmed, particularly the new-tab pattern and the deferred-search-enhancement decision, since both affect scope statements likely already in that doc.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: PM-authored meeting assessment (Executive Summary / What Went Well / Key Decisions / Action Items / What Didn't Go Well / Risks Not Fully Addressed / Overall Assessment format), submitted as-is via /meeting-notes invocation on 2026-07-02.

</details>
