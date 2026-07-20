---
date: 2026-07-12
week: 2026-W29
type: meeting-notes
meeting: Product x BO - Working Level
time: 16:00-17:00
---

# Product x BO – Working Level: "Explore New Role" Search Design

**Date:** July 12, 2026 (Sunday — per "yesterday, 4–5pm"; verify if this was actually the Bi-Weekly OTEP Product x BO slot, which calendar shows recurring Mondays 4–5pm), 4:00–5:00pm

**Organizer:** Imelda Mo

**Attendees:** Imelda Mo, Xian Zhang Guo, Christopher Woo, plus product/dev team (full attendee list not specified in source)

**Type:** Design review / risk-resolution session

**Source:** Pre-structured analysis provided by Michelle (not a raw transcript) — decisions and risk framing below reflect that analysis directly

> **Scope note:** This is a **different search surface** from open item #51 (opportunity listing search, resolved 2026-07-13 to fuzzy match + submit only, no trigger model or suggestions). This meeting covers the **"Explore New Role" search/filter experience** — Agency, Job Family, Job Function filtering with dynamic relationships. Don't conflate the two; #51's scope cut does not apply here.

---

## Summary

Design-review session for CareerCompass's "Explore New Role" search experience, working through competing pressures between performance/scalability, usability, and HR taxonomy maintainability. The team moved away from broad unrestricted filtering toward a constrained model resembling OTG's existing implementation: Job Function only becomes visible after Job Family is selected, with hard caps (1 Job Family, 5 Job Functions) to control combinatorial/URL-size blowup. Bookmarking search results was deprioritized once the team realized business doesn't actually need it — reducing the original justification for several technical constraints. Real job-family/function distribution data (Christopher Woo: ~237 functions expected post-cleanup, not ~500) grounded part of the discussion, but several core decisions (1 Job Family limit, 5 Job Function limit) remain assumption-driven rather than evidence-based.

---

## Decisions Made

1. **Search/filter flow: users can start from Agency or Job Family, and can search-then-filter or filter-then-search.**
   - **Why:** Matches flexible entry points officers may use depending on whether they know what agency or what kind of role they're looking for.
   - **Impact:** No single mandatory starting filter — both Agency and Job Family are valid entry points into the experience.

2. **Job Function only appears after Job Family is selected (progressive disclosure).**
   - **Why:** Directly modeled on OTG's existing implementation, which the team used as a reference to resolve ambiguity. Prevents officers from facing a flat, unfiltered list of ~237+ job functions.
   - **Impact:** Removes the worst version of the "scrolling through 500+ values" usability problem. Reduces autocomplete/dynamic-filter processing load since Job Function options are always pre-scoped to a single Job Family.

3. **Selection limits: Agency = no limit, Job Family = limit to 1, Job Function = limit to 5.**
   - **Why:** Controls combinatorial explosion (URL length, dynamic filter processing overhead) that a fully open multi-select across all three dimensions would create. Job Family limit of 1 in particular constrains the Job Function list to a manageable, family-scoped set.
   - **Impact:** This is the most load-bearing decision in the meeting and the least evidence-backed (see Risk 1 below) — no data was cited on whether officers naturally think in single-job-family terms, or whether career changers exploring across families will find a 1-family limit restrictive.

4. **Dynamic filtering retained; autocomplete respects currently-selected filters.**
   - **Why:** Xian Zhang pushed back on the alternative (turning off dynamic filtering entirely) as a technical-convenience shortcut that would hurt UX.
   - **Impact:** Preserves a more polished search experience, but means the underlying performance question (can dynamic filtering handle the real data volume fast enough) is deferred, not resolved — see Risk 3.

5. **Bookmarking: search *results* will not be bookmarkable; bookmarking individual *roles* is more useful and is the direction to pursue instead.**
   - **Why:** Xian Zhang directly challenged the business value of bookmarkable search URLs. Once tested, business confirmed no real need for it.
   - **Impact:** Significantly reduces the URL-length/payload-size pressure that had been driving several other filter-constraint decisions. **This is flagged in the source analysis as a late discovery** — meaning earlier design effort may have been spent solving a constraint (URL length from bookmarkable searches) that turned out not to matter. Worth checking whether any of Decisions #2/#3 above were shaped more than necessary by this now-deprioritized requirement.

6. **Competency import: use Competency ID lookup only — no competency-name fallback logic needed.**
   - **Why:** Team confirmed every competency should have a competency-bank ID in production, with no scenario where an ID is absent; final dataset is expected to contain complete ID mappings.
   - **Impact:** Removes uncertainty/complexity that a name-based fallback path would have added. Simplifies the ingestion/matching logic. **Cross-check:** this is consistent with, but a separate decision from, this morning's confirmation that Compass maps competencies via `job_id`/`position_id` against its own competency bank rather than ingesting POCDEX's `competency` table directly (see [2026-07-13-W29-compass-data-requirements-walkthrough.md](2026-07-13-W29-compass-data-requirements-walkthrough.md)) — both decisions point toward ID-based, not name-based, competency matching as the emerging pattern across the system.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Validate performance against the proposed filter configuration (1 Job Family / 5 Job Function limits) | Imelda Mo / technical team, via discussion with Adrian | Not specified | 🔴 High | 🔴 Not Started |
| Confirm actual maximum job-function counts after data cleanup | Christopher Woo | Not specified | 🟡 Medium | 🔴 Not Started |
| Implement search/filter design aligned to the agreed flow (Decisions #1–4) | Product & development team | Not specified | 🔴 High | 🔴 Not Started |
| Finalise competency-bank mapping dataset with IDs populated for all records | Christopher Woo | Not specified | 🔴 High | 🔴 Not Started |
| Review documents and align before submission to Huiting | Xian Zhang Guo and team | Not specified | 🔴 High | 🔴 Not Started |

**Notes:**
- No due dates were specified in the source analysis for any action item — recommend attaching real dates before these are treated as committed.
- **"Review documents and align before submission to Huiting"** likely connects to open item #55 (Huiting's formal data requirements ask) and this morning's Compass Data Requirements Workthrough, which is separately feeding a written requirements doc to Rama for the same Huiting-facing submission. Worth checking whether these are the same submission or two separate documents heading to Huiting around the same time — sending uncoordinated asks could create the exact "why didn't you tell us everything at once" friction flagged in this morning's notes about working with Huiting.

---

## Key Insights

**What went well (per source analysis):**
- The team moved from symptom-level discussion ("the filter is slow") to root-cause discussion ("too many selectable combinations and URL payload size") — a good pattern to note and repeat in future design reviews.
- Xian Zhang's repeated challenges (questioning removing Job Function entirely, questioning turning off dynamic filtering, challenging bookmarking's business value, asking whether OTG already solved this) is exactly the kind of business-side pushback that prevented a purely technical-convenience solution. Worth naming this pattern explicitly if a stakeholder-behavior note gets added for Xian Zhang.
- OTG's existing implementation served as a genuinely useful reference model to resolve ambiguity quickly once introduced — worth defaulting to "check what OTG already does" earlier in future design discussions on adjacent problems, rather than after extended open-ended exploration.

**What did not go well (per source analysis) — worth carrying into how future design reviews are run:**
- Problem framing was not crisp — performance, bookmarking, dynamic filtering, UX, and autocomplete were being discussed simultaneously without clear prioritization, causing the discussion to loop. A pre-meeting framing step (name the 2-3 actual constraints before the room debates solutions) would likely have shortened this.
- **No hard performance numbers were available at any point** — team repeatedly referenced "slow" without knowing which API call, what threshold is unacceptable, or how much the 500→237 function reduction actually helps. This is a real gap the action items only partially address (Action Item #1 asks Imelda/Adrian to "validate performance" but doesn't specify what data or threshold that validation needs to produce).
- Bookmarking was a late discovery that reduced the justification for other constraints — worth flagging as a process lesson: surfacing "does the business actually need X" earlier (before designing around X's technical implications) would have saved discussion time.

---

## Open Questions

- [ ] Is a 1-Job-Family selection limit actually sufficient for how officers browse, or does it block legitimate cross-family career exploration? — **Owner:** Imelda Mo / product team — **By:** before MVP ships, ideally validated with real officer behavior, not assumption
- [ ] Do users naturally think "Job Family first" when exploring roles, or are they searching for specific known roles instead? — **Owner:** product team — **By:** TBC — no evidence currently exists either way
- [ ] What is the actual backend response time target for dynamic filtering, and has it been load-tested against realistic data volumes? — **Owner:** Imelda Mo / Adrian / technical team — **By:** before the "validate performance" action item can be considered complete
- [ ] What is the maximum supported filter combination count the backend can handle, and has this been confirmed (not assumed)? — **Owner:** technical team — **By:** same as above
- [ ] Do officers understand what "Job Function" means as a filter label? Earlier user testing reportedly found some users didn't understand the term. — **Owner:** Imelda Mo / design — **By:** before filter UI is finalized — no decision was made on renaming, adding explanatory copy, or tooltips
- [ ] What specific data will be collected post-MVP to validate or invalidate the current filter-limit decisions, what are the success metrics, and what threshold triggers a redesign? — **Owner:** Imelda Mo / product team — **By:** before MVP launch — "we'll fine-tune after we get MVP data" was repeated without this being made concrete

---

## Risks Flagged (from source analysis — preserved as a distinct section given their weight)

**Risk 1 — Over-optimising for technical constraints, not user needs.** The final design (1 Job Family, 5 Job Functions) is shaped by URL/performance limits more than confirmed user behavior. No evidence was discussed on whether this matches how officers actually explore roles.

**Risk 2 — MVP analytics may be misleading.** If usage looks low under an artificially constrained filter set (1 family, 5 functions), the team could wrongly conclude officers don't want broader exploration — when the real cause is the constraint itself, not the demand. **This is a measurement-validity risk that should be flagged explicitly before analytics are used to justify not expanding the filters later** — otherwise the MVP constraint becomes self-confirming.

**Risk 3 — Dynamic filtering's underlying performance problem is not confirmed solved**, only reduced in scope. No backend response time targets, load-testing results, or max-combination confirmation exist yet.

**Risk 4 — Job Function taxonomy/label quality is unresolved.** Prior user testing feedback (referenced but not detailed in source) suggested some users didn't understand the "Job Function" label. No naming, copy, or tooltip decision was made despite this being a known issue.

**Risk 5 — No explicit validation plan for post-MVP iteration.** "We'll fine-tune after MVP data" was said repeatedly (including in meeting chat) without agreement on what data, what metrics, or what threshold would trigger a redesign. Without this, any post-MVP filter change becomes a subjective call rather than a data-driven one.

**Overall assessment (source analysis):** Strategic outcome good (avoided an oversimplified "remove Job Function" fix); product discovery quality moderate (intuition-driven, not evidence-driven); technical risk still medium (root performance problem not proven solved, just scoped down). **Biggest unaddressed question, as framed in the source: are we designing around actual user behaviour, or around system limitations?**

---

## Timeline Risks

- **TIMELINE RISK:** Action item "Review documents and align before submission to Huiting" (Xian Zhang + team) has no date, but per open item #55, Rama's response to Huiting is committed for "week of 13 Jul" — this week. If this meeting's search-design documentation is meant to feed the same Huiting submission as this morning's POCDEX data-requirements write-up, there are now **two workstreams converging on the same external deadline with no confirmed coordination point**. Worth checking today whether these are one document or two, and who owns reconciling them before anything goes to Huiting.

---

## Related

- `00-hub/open-items.md` #51 (opportunity listing search — different feature, already resolved to fuzzy-match-only; don't conflate with this meeting's Explore New Role filters) and #55 (Huiting formal data requirements ask — likely shared deadline pressure with this meeting's Huiting-facing action item)
- [2026-07-13-W29-compass-data-requirements-walkthrough.md](2026-07-13-W29-compass-data-requirements-walkthrough.md) — same-week decision to use ID-based (not name-based) competency matching, consistent with this meeting's competency-ID decision
- [2026-07-13-W29-cleanup.md](2026-07-13-W29-cleanup.md) — this meeting was flagged there as a coverage gap (no notes existed as of that cleanup); this note closes that gap

---

## Appendix: Source Material

<details>
<summary>Click to expand original pre-structured analysis provided by Michelle</summary>

Source was a pre-written executive summary, "what went well / what did not go well," decisions table, risks-not-addressed section, action items table, and overall assessment — not a raw transcript. All content above is restructured from that analysis; no raw transcript was available to independently verify quotes or exact phrasing.

</details>
