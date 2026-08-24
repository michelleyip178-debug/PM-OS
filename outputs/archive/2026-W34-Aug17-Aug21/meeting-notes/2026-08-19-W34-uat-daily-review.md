# Meeting Notes: UAT Daily Review

**Date:** 2026-08-19

**Attendees:** Michelle YIP, Adrian LO, Pow Hwee TAN, Xian Zhang GUO, Imelda MO, Christopher WOO, Kingsley Low, Thomas Huchede, Adrian ANG (post-meeting ask)

**Meeting Type:** UAT execution review / engineering sync

**Overall Health:** 🟡 Amber (per the source's own assessment)

---

## Summary

A productive triage session — several fixed defects moved into retest, two "look-like-bugs" turned out to be intended behavior once clarified, and cross-team collaboration was strong. But two new defects (search performance under large result sets, and a bad-gateway failure on special-character search) surfaced without a resolution path, and one of them — possible server-side memory exhaustion — is a genuine production-stability risk, not a UX polish item. Separately, this session directly closes yesterday's "testing is scenario-based, not experience-based" concern in one narrow way (competency/Jumpstart edge cases are now understood) while opening the same underlying pattern in a new place: undocumented business rules living in meeting discussions, which Adrian ANG explicitly asked to have written into the Ops Portal epic one-pager (as a known-scenario note for BOs, not because the underlying logic lives there).

---

## Decisions Made

1. **Roles without functional competencies are excluded from recommendations — confirmed as intended behavior, not a defect**
   - **Why:** Competency matching requires functional competencies; a role with none would always produce a 0% match, so it's correctly excluded rather than surfaced with a false score.
   - **Who decided:** Team, based on Engineering's explanation.
   - **Impact:** Closes a UAT finding that looked like a defect. Needs documenting (see Action Items) so it doesn't get re-reported as a bug later.

2. **Test case 933 (Jumpstart zero-recommendation result) can likely be archived**
   - **Why:** Jumpstart has its own internal fallback — if matching fails, it returns popularity-based courses instead of nothing. A true zero-result state is considered highly unlikely.
   - **Who decided:** Team.
   - **Impact:** Removes one large recommendation-engine edge case from the open test list. "Likely" archived, not fully closed — no one confirmed removing it from the tracker.

3. **Search result limiting was not adopted**
   - **Why:** Xian Zhang GUO pushed back — artificially limiting which results display risks hiding relevant opportunities from the officer.
   - **Who decided:** No resolution reached; team will keep discussing alternatives (prompts to refine, loading indicators).
   - **Impact:** The "Director" search returning ~3,000 roles with slow/laggy UI remains unresolved. This decision only rules out one option, it doesn't pick a replacement.

4. **URL update deployment moved from that evening to the following morning**
   - **Why:** Avoid disrupting active testing.
   - **Who decided:** Team.
   - **Impact:** Low-risk scheduling change, no further action needed.

5. **Final UAT focus shifts to SSO, agency whitelisting, exclusion filters, and retesting fixes, once current ticket clearance finishes**
   - **Why:** These are the remaining scope items, and they're specifically the kind that tend to expose identity, data-access, and access-control defects.
   - **Who decided:** Team.
   - **Impact:** Concentrates the highest-risk remaining test category (access control) into a single week — see Timeline Risks.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Check why Assistant Director / Senior Deputy Director role is missing from test results | Imelda MO | No due date mentioned — schedule within 48 hours | Medium | 🔴 Not Started |
| Reapply grade-suffix fix on newly uploaded scrambled data and validate | Kingsley Low | No due date mentioned — schedule within 48 hours | Medium | 🔴 Not Started |
| Obtain clarification on production course date handling from Cheryl | Imelda MO | No due date mentioned | Medium | 🔴 Not Started |
| Align on revised course sorting logic once data clarification is received | Imelda MO, Xian Zhang GUO, Christopher WOO | Depends on Cheryl's clarification above | Medium | 🔴 Not Started |
| Fix duplicate competency matching issue in opportunities cards | Thomas Huchede | No due date mentioned — schedule within 48 hours | Medium | 🔴 Not Started |
| Investigate large-search performance issue | Adrian Lo / Engineering Team | No due date mentioned — high operational risk, should be dated this week | High | 🔴 Not Started |
| Investigate memory exhaustion diagnosis | Pow Hwee TAN and Engineering Team | No due date mentioned — high operational risk, should be dated this week | High | 🔴 Not Started |
| Create or update bug for special-character / bad-gateway issue | Engineering Team | No due date mentioned — blocks core search/navigation flow, should be dated this week | High | 🔴 Not Started |
| Compare UAT tracking spreadsheet against Confluence and reconcile remaining test volume | Imelda MO and Xian Zhang GUO | No due date mentioned | Medium | 🔴 Not Started |
| Move validated tickets to passed status so accounts can be reused | Xian Zhang GUO | No due date mentioned | Low | 🔴 Not Started |
| Document role recommendation edge case in Ops Portal epic one-pager (known-scenario note for BOs) | Michelle YIP | No due date mentioned — requested directly by Adrian ANG, schedule within 48 hours | Medium | ✅ Done — Section 8 note added 20 Aug, cross-referenced to [competency-recommendation-filtering.md](../../context-library/prds/competency-recommendation-filtering.md) |
| Document Jumpstart fallback edge case in Ops Portal epic one-pager | Imelda MO | No due date mentioned | Medium | 🔴 Not Started |

**Notes:**
- No due dates were given for any of the 12 action items. The three that should be dated first: memory-exhaustion investigation, large-search performance investigation, and the bad-gateway bug — all three touch the same suspected root cause and all three carry real production-stability risk if unresolved before the remaining access-control UAT week.
- Two items (documenting the role-recommendation and Jumpstart edge cases) point at the same underlying gap yesterday's session also raised in a different form: knowledge currently lives in meeting discussion, not product documentation.

---

## Key Insights & Quotes

**The three search/performance issues may share one root cause, not three separate bugs:**
Slow UI on large result sets, a suspected server-side memory exhaustion (flagged directly by Pow Hwee TAN), and bad-gateway failures on special-character search (and reportedly on a single-character search too, per Christopher WOO) were discussed as distinct symptoms. But memory exhaustion under large/unusual query loads is a plausible single explanation for all three. Worth investigating together rather than assigning three separate fixes that might converge on one infrastructure issue.

**Two "defects" this session were actually missing documentation, not missing functionality:**
The functional-competency exclusion and the Jumpstart fallback both looked like gaps until someone in the room explained the intended behavior. That's a good outcome for this session specifically, but it's the same failure mode yesterday's notes named as a risk in a different form (scenario-based testing missing end-to-end context) — here it's *business rules* that only exist as tribal knowledge, not documentation. Adrian ANG's direct ask to document both in the Ops Portal epic one-pager is the right fix, but it's reactive — worth asking whether other "intended behavior" explanations are sitting undocumented elsewhere.

**Xian Zhang GUO's tracking sheet (60+ items) vs. Imelda MO's estimate (~20) is a two-source-of-truth problem, not just a counting error:**
The gap is explained (some Confluence cases were retired/crossed out and the spreadsheet didn't follow), but if two people responsible for the same test surface are working from different live counts, that's a process gap that will resurface unless the reconciliation actually happens — it's tracked as an action item above, not yet done.

**Quote worth keeping:** Pow Hwee TAN's diagnosis that the search slowness "may be server-side, memory exhaustion suspected" is the single most consequential technical statement from this session — everything else discussed was UX friction or already-explained behavior; this is the one item with plausible production-outage implications if true.

---

## Open Questions

- [ ] Is the search slowness a UX issue, a server memory issue, or both? - **Owner:** Adrian Lo / Pow Hwee TAN / Engineering - **By:** Before finalizing a fix approach — investigation only started this session
- [ ] Is the bad-gateway failure limited to specific special characters, or a broader single-character input problem (per Christopher WOO's report)? - **Owner:** Engineering Team - **By:** Before the bug is scoped/fixed
- [ ] How does production handle course dates for evergreen digital-learning content (no meaningful start date)? - **Owner:** Cheryl (external to this team) - **By:** Needed before course-sorting logic (Ticket 937) can be finalized
- [ ] What's the actual remaining UAT test volume — Xian Zhang's ~60 or Imelda's ~20? - **Owner:** Imelda MO / Xian Zhang GUO - **By:** Before treating tomorrow as "the last major UAT day"

---

## Blockers

1. **Search performance / suspected memory exhaustion**
   - **Blocked by:** No root-cause diagnosis yet — investigation just started
   - **Impact:** If the memory-exhaustion theory is correct, this isn't a UX issue, it's a production-stability risk (outages, gateway failures, unpredictable behavior under load)
   - **Resolution:** Root cause analysis owned by Pow Hwee TAN and Engineering, no timeline yet

2. **Bad-gateway failures on special-character (and possibly single-character) search**
   - **Blocked by:** Root cause not yet identified; scope of the trigger (one character, one symbol, or broader) unconfirmed
   - **Impact:** Search/navigation journey can break completely for affected inputs
   - **Resolution:** Bug creation/update owned by Engineering Team, no timeline yet

3. **Course-sorting logic depends on production data behavior nobody on this team can currently see**
   - **Blocked by:** No visibility into how evergreen course dates are actually maintained in production
   - **Impact:** Ticket 937's sort logic (date, then alphabetical) may be unintuitive if evergreen courses lack meaningful dates — can't finalize until Cheryl clarifies
   - **Resolution:** Waiting on Cheryl; no date given

---

## Timeline Risks

- **TIMELINE RISK — access-control testing is now concentrated into the final UAT week.** SSO, agency whitelisting, exclusion filters, and no-pay-leave scenarios are exactly the categories most likely to expose identity and access-control defects (per this session's own framing), and they're now compressed into whatever's left of UAT after current ticket clearance. This echoes yesterday's flagged risk that low defect counts might reflect limited test coverage rather than genuine system quality — if access-control testing is rushed in the final window, that same false-confidence risk applies specifically to the highest-severity test category remaining.
- **TIMELINE RISK — "tomorrow is the last major UAT day" assumption may be premature.** Xian Zhang GUO's tracking shows 60+ remaining items; Imelda MO's estimate is closer to 20. Until that's reconciled (tracked as an action item above), planning around tomorrow as a closing day carries real risk of being wrong in either direction.

---

## Next Steps

**Immediate (This Week):**
- Date and start the memory-exhaustion and search-performance investigations — these are the two items with the clearest production-stability implications
- Create/scope the bad-gateway bug, including whether it's broader than the pipe character
- Michelle to document the role-recommendation edge case in the Ops Portal epic one-pager per Adrian ANG's direct request — done 20 Aug, see Section 8

**Short-term (Next 2 weeks):**
- Reconcile the UAT tracking spreadsheet against Confluence to establish one shared remaining-volume count
- Get Cheryl's clarification on production course-date handling, then finalize Ticket 937's sort logic
- Fix and retest the duplicate competency-matching issue on opportunity cards

**Follow-up Meeting:**
- Next UAT Daily Review — confirm whether tomorrow is genuinely the last major UAT day once the tracking reconciliation lands.

---

## Context for Future Reference

- This session partially closes one thread from [yesterday's UAT Daily Review](2026-08-18-W34-uat-daily-review.md): the "scenario-based, not experience-based" testing concern doesn't get resolved here, but two specific edge cases that could have looked like end-to-end failures (competency matching, Jumpstart fallback) got clarified as intended behavior instead. The broader false-confidence risk from yesterday still stands, and this session's own access-control-concentration timeline risk (above) is arguably a sharper version of the same concern.
- Adrian ANG's ask was for the Ops Portal one-pager specifically, as a known-scenario note so BOs don't mistake this filtering behavior for record drift when reviewing cases — not because the recommendation logic itself lives in Ops Portal scope. The underlying mechanism (functional-competency exclusion from role recommendations) is documented separately in [competency-recommendation-filtering.md](../../context-library/prds/competency-recommendation-filtering.md), cross-referenced from Ops Portal Section 8 near TC11. Jumpstart fallback still needs its equivalent note, added by Imelda.
- The memory-exhaustion/bad-gateway/search-slowness cluster has no equivalent in yesterday's notes — this is new risk surface, not a continuation.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw meeting summary</summary>

**What went well:** UAT progressing with few critical blockers (Tickets 1235, 1260 fixed/retesting; multiple prior tickets Done); role-recommendation and Jumpstart fallback behavior clarified as intended, not defects; strong UAT/Product/Engineering/PSD collaboration with live investigation of issues.

**What didn't go well:** Search on generic terms (e.g. "Director") returns ~3,000 roles with slow/laggy UI, no consensus solution reached; special-character (pipe) and possibly single-character search triggers bad-gateway errors; course-sorting logic (Ticket 937) depends on production data behavior the team can't currently see.

**Risks not fully addressed (source's own framing):** performance scalability / suspected memory exhaustion (High, investigation only, no mitigation plan yet); undocumented business rules (Medium governance risk, per Adrian ANG's direct documentation ask); UAT completion assumptions may be optimistic given the 60-vs-20 tracking discrepancy (Medium delivery risk); remaining UAT scope concentrated into access-control-heavy scenarios next week (Medium-high deployment risk).

**Source's own readiness assessment:** 🟡 Yellow — not due to functional defects, but due to search scalability/memory concerns, unknown production course-sorting behavior, and remaining identity/access-control testing still ahead. Source explicitly notes none of the known issues currently challenge the core Career Compass recommendation journey itself.

**Source's own priority ranking:** 🔴 High — memory exhaustion/large-search performance, bad-gateway search failures. 🟠 Medium — SSO/whitelisting/exclusion-filter testing, course-sorting logic dependent on production data. 🟡 Governance/Operational — undocumented edge cases, UAT tracking count mismatch.

</details>
