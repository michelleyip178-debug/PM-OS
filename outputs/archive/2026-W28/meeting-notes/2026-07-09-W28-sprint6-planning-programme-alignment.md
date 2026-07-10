# Meeting Notes: Sprint 6 Planning — Programme-Level Alignment

**Date:** 2026-07-09

**Organiser:** Imelda Mo

**Attendees:** Imelda, Amber, Rama Moorthy, Barry Lim, Adrian Lo, Rathika Ramalingam, Victor Ong, Fanxu Wang, engineering teams (individuals not all named in source)

**Meeting Type:** Sprint planning — functioned as a programme-level alignment session across product, design, engineering, data, infra, QA/UAT, and integration

**Duration:** 2 hours

---

## Summary

This wasn't a normal sprint-planning session — it surfaced cross-squad risk across four areas: design standardisation (UX churn still happening close to UAT), job family/function data alignment (mismatches found across PSD master data, Products/Codex, HRPS/Cumulus, and role profiles), UAT readiness (very short window, data/accounts still in prep), and integration dependencies (CSC SSO gated on CSC's own timeline, WOG AD environment constraints). Bottom line: the programme is feature-complete enough to approach UAT, but the risk has shifted from "can we build it" to "is the underlying data and integration layer correct before business users start testing."

---

## Decisions Made

1. **Course pages will reuse the existing opportunity search design**
   - **Why:** Avoid building a second, divergent search pattern for a nearly-identical use case.
   - **Who decided:** Team (design-led, Amber).
   - **Impact:** CTA changes from "Apply Now" to "Learn More"; design-system components used wherever possible; privacy statement, terms-of-use, and vulnerability-reporting link get added to course pages.

2. **Course search will NOT reuse the opportunities fuzzy-search implementation**
   - **Why:** Not stated explicitly in source — likely different search semantics for course content vs. opportunity listings.
   - **Who decided:** Team.
   - **Impact:** Domain-based filtering stays; autocomplete behaviour is unchanged from current implementation.

3. **Proceed with competency matching on opportunity pages**
   - **Why:** Competency APIs are already available for consumption — no new integration blocker cited.
   - **Who decided:** Team.
   - **Impact:** Unblocks the opportunity-competency display work; still dependent on the job family/function mapping risk being resolved (see Risks).

4. **Opportunities and courses will share a common functional taxonomy**
   - **Why:** Supports future discovery and recommendation experiences across both surfaces.
   - **Who decided:** Team.
   - **Impact:** Sets a direction for how taxonomy work should be structured going forward — worth cross-checking against the existing OTG/C@G taxonomy mapping work (open item #49, #41) to confirm this doesn't conflict.

5. **Implicit scope-freeze direction: major UX changes should stop soon**
   - **Why:** Repeated new UX feedback close to UAT risks UAT becoming a design-review exercise instead of functional validation.
   - **Who decided:** Team consensus (driven by Amber's repeated pushback on one-off design exceptions).
   - **Impact:** Future enhancements are implicitly being pushed post-MVP. **This isn't yet a hard, dated freeze** — worth turning into an explicit date/decision rather than leaving it as an emerging norm (see Open Questions).

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Engage Michelle Chen (design) on design-system alignment and component standards | Barry Lim | Not specified | 🔴 High | Not Started |
| Unblock competency integration work | Adrian Lo | Not specified | 🔴 High | Not Started |
| Produce a one-pager explaining current job family/function mapping design | Adrian Lo | Not specified | 🔴 High | Not Started |
| Obtain latest job family/function master data for validation | Adrian Lo | Not specified | 🔴 High | Not Started |
| Obtain latest job family/function master list | Product/Data Team | Not specified | 🔴 High | Not Started |
| Validate Products data against master data | Product/Data Team | Not specified | 🔴 High | Not Started |
| Verify whether codes or labels should be used consistently across mappings | Product/Data Team | Not specified | 🔴 High | Not Started |
| Reconcile known job family/function mismatches | Product/Data Team | Not specified | 🔴 High | Not Started |
| Finalise QA/UAT test-account plan (positive + negative scenarios) | Rathika Ramalingam | Not specified | 🔴 High | Not Started |
| Share UAT account strategy with team | Rathika Ramalingam | Not specified | 🟡 Medium | Not Started |
| Share AI environment architecture and materials | Victor Ong | Not specified | 🟡 Medium | Not Started |
| Prepare proposed pre-prod/production architecture | Victor Ong | Not specified | 🟡 Medium | Not Started |
| Support infra review session | Victor Ong | Not specified | 🟡 Medium | Not Started |
| Host architecture-sharing session | Fanxu Wang | Not specified | 🟡 Medium | Not Started |
| Review infrastructure architecture and environment setup | Fanxu Wang | Not specified | 🟡 Medium | Not Started |
| Continue QA deployments without blocking the dev pipeline | Engineering teams | Ongoing | 🟡 Medium | Ongoing |
| Communicate environment changes that impact other squads | Engineering teams | Ongoing | 🔴 High | Ongoing |

**Notes:**
- **No due dates were given for any action item in this meeting** — same pattern flagged in yesterday's internal grooming notes ([2026-07-08-W28-internal-grooming.md](2026-07-08-W28-internal-grooming.md)). This is now two consecutive planning sessions where high-priority action items land with no date. Worth raising directly: real deadlines, or these drift the same way the Fangxi/Adrian WOGAD meeting and CSC connectivity ticket did last time.
- Given UAT starts **11 Aug** (open item #39) and the job family/function mapping risk is rated 🔴 Critical, the Adrian Lo and Product/Data Team action items above are the ones that most urgently need real dates.

---

## Key Insights & Quotes

**Process/prioritisation insight:**
- Amber explicitly noted engineering is repeatedly pulled into small design tweaks (font sizes, component sizing, search bar styling, header hierarchy) — a sign design governance and decision authority aren't fully settled. Emerging principle: *either align to the GovTech design system, or explicitly agree where deviations are acceptable* — not litigate each one live.

**Delivery/capacity insight:**
- Rama stated the team **lost significant capacity troubleshooting environment issues** during the sprint — CFT issues, pipeline interference between squads, config overrides, and outdated architecture diagrams were all named. This directly echoes the "biggest risk" framing from yesterday's internal grooming session (redirection & proxy risk), which was deliberately deprioritized there specifically to avoid this kind of capacity drain — worth flagging that the drain happened anyway.

**Data risk framing:**
- The team could not resolve, even after extensive discussion, whether job family/function mappings should rely on codes, labels, or transformed values — and concluded additional verification is still required. This is the single highest-rated risk from the session (🔴 Critical).

---

## Timeline Risks

- **TIMELINE RISK:** The meeting states the UAT window is "extremely short, approximately 2 weeks." Tracked open item #39 (`00-hub/open-items.md`) has UAT running **11 Aug – 4 Sep** (staggered: Profile + Opportunities from 11 Aug, remaining modules from 17 Aug) — that's closer to 3-4 weeks, not 2. Worth clarifying with the room which window they mean (e.g., the per-module window vs. the full UAT period) before this "2 weeks" framing propagates into planning as the wrong number.
- **TIMELINE RISK:** CSC SSO is described in this meeting as "potentially only becoming available around August" with "no clear contingency plan if CSC timelines shift." This matches open item #30 exactly (DLE/CSC integration testing target: August, ~15 man-days DLE-side effort) — not a new risk, but worth connecting explicitly: #30 already flags this as sequentially gated on WOG AD (#26) completing first, and DLE's August readiness "aligns with UAT start (11 Aug) — tight but feasible if WOG AD approves by Jul." If WOG AD slips (it's currently the lowest sprint priority per yesterday's grooming decision), this compounds directly into the CSC risk raised here.
- **TIMELINE RISK:** "Feature freeze" is referenced in open item #39 as confirmed for **end of Sprint 8 (21 Aug)** — this meeting's "major UX changes should stop soon" is directional but undated. These two should be reconciled into one explicit freeze date rather than left as two separate framings (a hard engineering freeze at 21 Aug vs. a soft, team-driven UX norm with no date).

---

## Open Questions

- [ ] Which job family/function master list is authoritative — PSD master lists, Products/Codex, or HRPS/Cumulus — and should mappings use codes, labels, or transformed values? - **Owner:** Adrian Lo (one-pager) + Product/Data Team (validation) - **By:** Not specified, needs a date given UAT starts 11 Aug
- [ ] Is the "2 weeks" UAT window framing accurate, or should it reference the full 11 Aug–4 Sep window from open item #39? - **Owner:** Michelle to clarify - **By:** Before this framing is repeated at SteerCo or in status updates
- [ ] What is the actual freeze date for UX changes — does it align with the confirmed 21 Aug feature freeze, or is it a separate, earlier internal norm? - **Owner:** Michelle / Amber - **By:** Before UAT prep intensifies
- [ ] Does the new "opportunities + courses share a common functional taxonomy" direction conflict with the existing OTG/C@G taxonomy work (open items #41, #49)? - **Owner:** Michelle to check - **By:** Before taxonomy work is committed to a sprint

---

## Blockers

1. **Job family/function mapping uncertainty**
   - **Blocked by:** No confirmed source of truth across PSD master data, Products/Codex, HRPS/Cumulus, and role profile data; codes-vs-labels question unresolved.
   - **Impact:** Blocks confident competency matching and recommendation logic; risks UAT participants reporting data-quality issues instead of validating user journeys.
   - **Resolution:** Adrian Lo's one-pager + Product/Data Team's master-data validation (both action items above) — needs a real due date.

2. **CSC SSO dependency**
   - **Blocked by:** CSC's own integration timeline (~August), outside this team's control.
   - **Impact:** Compresses integration testing and VAPT prep; no contingency plan discussed if CSC's timeline slips further.
   - **Resolution:** Track as a standalone programme-level risk (already partially tracked as open item #30); continue all non-SSO-dependent testing in parallel.

---

## Next Steps

**Immediate (This Week):**
- Push for real due dates on the job family/function mapping action items (Adrian Lo's one-pager, Product/Data Team's validation work) — these are the critical-path items given 11 Aug UAT start.
- Clarify the "2 weeks" vs. "11 Aug–4 Sep" UAT window discrepancy before it propagates further.
- Barry Lim to engage Michelle Chen on design-system alignment.

**Short-term (Next 1-2 Weeks):**
- Rathika to finalise and share the QA/UAT test-account strategy.
- Victor Ong and Fanxu Wang to run the architecture-sharing/review session (AI, pre-prod, production).
- Reconcile the informal "stop UX changes soon" norm with the confirmed 21 Aug feature freeze into one explicit date.

**Follow-up Meeting:**
- Not specified in source — recommend a dedicated data-alignment session once Adrian Lo's one-pager and the Product/Data Team's master-data validation are ready, given this is the top-rated risk and UAT is 11 Aug.

---

## Context for Future Reference

This session's environment/infra pain (Rama: "lost significant capacity troubleshooting environment issues") directly parallels the redirection & proxy risk named as "biggest risk" in yesterday's internal grooming ([2026-07-08-W28-internal-grooming.md](2026-07-08-W28-internal-grooming.md)) — that session explicitly deprioritized chasing it to avoid exactly this kind of capacity drain, reasoning that CSC's August floor made urgency pointless. Worth checking whether that reasoning still holds, since capacity was lost anyway this sprint on adjacent infra problems (config drift, pipeline interference) rather than the specific WOGAD redirect issue.

The CSC SSO and job family/function mapping risks raised here aren't new — they connect directly to already-tracked open items #30 (CSC SSO) and the broader competency SSOT thread (#18, #41). This session adds urgency and a concrete "no contingency plan" flag, but the underlying dependencies were already on the board.

**Top 3 risks from this session's own risk register**, for cross-reference against SteerCo/leadership framing:

| Risk | Likelihood | Impact | Priority |
|---|---|---|---|
| Job Family / Job Function Mapping Accuracy | High | High | 🔴 Critical |
| UAT Data & Readiness | High | High | 🔴 Critical |
| CSC SSO & Integration Dependencies | Medium | High | 🔴 Critical |

**Programme health view (from source's own assessment), for reference:**

| Area | Status |
|---|---|
| Feature delivery | 🟢 Mostly on track |
| UX implementation | 🟡 Nearing completion but still attracting changes |
| Data readiness | 🟠 Moderate risk |
| Recommendation engine logic | 🟠 Moderate risk |
| QA readiness | 🟡 Manageable |
| UAT readiness | 🟠 Time-compressed |
| CSC SSO dependency | 🟠 External dependency risk |
| Infrastructure/DevOps | 🟠 Needs stronger coordination |
| MVP scope control | 🟢 Team is actively protecting scope |

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: Pre-structured programme-level analysis submitted directly by the PM (Executive Summary / What Went Well / What Did Not Go Well / Decisions Made / Action Items / Biggest Risks / Programme Assessment format), covering the 9 Jul 2026 Sprint 6 planning session organised by Imelda Mo. Full risk detail (mitigations, potential impact per risk) preserved in the structured sections above; this appendix is a placeholder since the full raw text is already captured faithfully in the sections above rather than duplicated here.

</details>

---

*Generated: 2026-07-09*
*Next: Push for due dates on the job family/function mapping action items before UAT (11 Aug); clarify the UAT window discrepancy; reconcile the UX freeze date.*
