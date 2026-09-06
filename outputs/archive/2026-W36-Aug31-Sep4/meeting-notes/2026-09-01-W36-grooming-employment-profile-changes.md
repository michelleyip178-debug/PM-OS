# Meeting Notes: [Weekly] OTEP — Sprint Planning/Backlog Grooming (Actually: Employment Profile Change Scoping)

**Date:** September 1, 2026

**Attendees:** Michelle Yip, Rama Moorthy, Xian Zhang (Guo), Christopher Woo (+ Compass team, referenced via action items)

**Meeting Type:** Team planning — scope negotiation, MVP prioritisation, risk management (not a standard sprint/grooming ceremony, despite the calendar title)

**Source:** AI-generated executive assessment (self-authored judgement layer included)

---

## Summary

The calendar called this "Sprint Planning/Backlog Grooming" — it was actually the employment-profile-change and identity-unification scoping session flagged all week. The team made real progress stack-ranking MVP items (identity unification and employment profile changes are now the clear top two) and agreed to use OTG Day-2 operational pain points to drive UAT scenario prioritisation. But scope is still oversized against 2.5 remaining sprints, no identity source-of-truth decision was made (email vs. NRIC vs. FIN vs. POCDEX UID), and the meeting ended with "we need another meeting tomorrow to prioritise" — prioritisation is directional, not locked.

---

## Decisions Made

1. **Identity unification and employment profile changes are the top two MVP priorities.**
   - **Why:** Both solve multiple downstream issues and directly affect recommendation quality — higher leverage than display-only or cleanup items.
   - **Who decided:** Team consensus, driven by Rama Moorthy's identity-fragmentation framing and Xian Zhang's customer-impact push.
   - **Impact:** Job family competency suffix, role cleanup, and lifecycle-management enhancements are explicitly deprioritised — can ship post-MVP if needed.

2. **UAT scenario prioritisation will be driven by OTG Day-2 operational pain points, not theoretical requirements.**
   - **Why:** Frequent real-world support incidents are a better signal for what MVP must handle than a fully theoretical scenario list.
   - **Who decided:** Team, with Michelle's OTG operational experience as the explicit input source.
   - **Impact:** Michelle and Christopher Woo now own mapping OTG Day-2 issues to test cases — this is the actual mechanism for cutting the 118+ scenario list down.

3. **Lifecycle-related profile updates are not MVP-critical.**
   - **Why:** WOGAD already blocks departed officers from logging in — the lifecycle problem this would solve is already covered by an existing control.
   - **Who decided:** Team.
   - **Impact:** Removes a category of work from MVP scope — one of the few concrete scope cuts actually agreed, not just directional.

4. **Prioritise changes that affect recommendations and officer-visible outcomes over display-only changes.**
   - **Why:** Job ID, job function, and competency changes affect what officers actually see and act on; title changes are cosmetic by comparison.
   - **Who decided:** Xian Zhang (Guo), repeatedly redirecting the discussion.
   - **Impact:** Gives a concrete tiebreaker rule for the scenario-cutting exercise still in progress — ties directly to the same logic behind the 41-row cut from the Confluence prioritisation ([2026-09-01-W36-prioritised-test-rows.md](../analyses/2026-09-01-W36-prioritised-test-rows.md)), which already kept the full Job/position/employment category for the same reason.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Review OTG Day-2 operational issues and map them to test cases | Michelle Yip, Christopher Woo | Not stated — feeds tomorrow's follow-up meeting | 🔴 High | 🔴 Not Started |
| Conduct follow-up operational review meeting | Rama Moorthy and team | Tomorrow (per "we need another meeting tomorrow to prioritise") | 🔴 High | 🔴 Not Started |
| Use OTG operational scenarios to prioritise UAT scope | Compass team | Feeds the same follow-up meeting | 🔴 High | 🔴 Not Started |
| Identify highest priority employee change scenarios | Compass team | Not stated | 🔴 High | 🔴 Not Started |
| Determine which existing test cases map to operational pain points | Compass team, with OTG inputs | Not stated | 🟡 Medium | 🔴 Not Started |
| Return prioritised UAT scenarios to Huiting's team for test data preparation | Compass team | Not stated — but Products needs lead time, see Risk R2 | 🔴 High | 🔴 Not Started |
| Produce first cut of prioritised test scenarios | Team | End of week (target discussed, not locked) | 🔴 High | 🔴 Not Started |

**Notes:**
- Almost every item lacks a hard due date despite the team explicitly naming capacity risk (2.5 sprints left) — worth pushing for real dates at tomorrow's follow-up rather than letting "end of week" stay a soft target.
- "Review OTG Day-2 operational issues and map them to test cases" is the actual mechanism that should close open item #61's still-unreconciled thread — see Context for Future Reference below.

---

## Key Insights & Quotes

**On scope:**
- 118+ test scenarios against 2.5 remaining sprints — team explicitly acknowledged needing to cut scope by at least 50%, but no cut list was locked in this session. ("We still need another meeting tomorrow to prioritise.")

**On identity:**
- Rama Moorthy: current identity model is email-based; needs to move to NRIC or an equivalent unique officer identifier to support secondment, multi-hatting, agency transfers, FIN→NRIC changes, and multiple organisational accounts.
- The real dependency, stated directly in the source: *"Career Compass cannot reliably handle employment profile changes until it first solves officer identity unification."* Nearly every high-priority scenario (secondment, multi-hatting, agency transfer, FIN→NRIC, competency consolidation) traces back to this one dependency.

**On customer impact:**
- Xian Zhang (Guo) repeatedly redirected the team toward changes that affect recommendations and officer experience (job ID, job function, competency) over display-only changes (title) — a concrete prioritisation lens, not just a stated value.

---

## Open Questions

- [ ] What is the actual business problem statement and success criteria for identity unification? Discussion covered NRIC/FIN/APIs/consolidation logic extensively but never defined what "done" looks like. — **Owner:** Rama Moorthy, Michelle — **By:** Before implementation work starts, to avoid churn
- [ ] Which identifier is the source of truth — email, NRIC, FIN, or POCDEX UID? Still unresolved; directly the same open question flagged in [2026-09-01-W36-squad-sync.md](2026-09-01-W36-squad-sync.md)'s Identity Architecture Deep Dive. — **Owner:** Rama Moorthy, Pow Hwee Tan — **By:** Not stated, blocks identity work from being more than directional
- [ ] What is the operational support model for identity mismatches — who investigates, how does reconciliation happen, what do users see when identities collide, what's the escalation path? — **Owner:** Not assigned — **By:** Not stated, flagged as a Day-2 support gap
- [ ] What's the quantified impact of non-Products officers (how many, which agencies, what's the workaround)? — **Owner:** Not assigned — **By:** Not stated, risk of becoming a post-launch surprise
- [ ] What are the data governance requirements — audit trail, historical competency records, legal retention, restoration/recovery after the 4-year deletion point? — **Owner:** Not assigned — **By:** Not stated

---

## Blockers

1. **UAT scenario prioritisation isn't finalized, but Products (Huiting's team) needs lead time to prepare test data.**
   - **Blocked by:** Tomorrow's follow-up meeting hasn't happened yet; the OTG-Day-2-to-test-case mapping (Michelle/Christopher's action item) is a prerequisite.
   - **Impact:** Every day this slips compresses Products' data-prep runway — this is Risk R2 below, and it's the most time-sensitive gap from this meeting.
   - **Resolution:** Push for the "end of week" target to become a hard date at tomorrow's follow-up, given Products is the one waiting.

2. **No identity source-of-truth decision, but identity is now confirmed as the architectural gatekeeper for MVP.**
   - **Blocked by:** No owner has been asked to bring a recommendation, not just facilitate more discussion.
   - **Impact:** Every high-priority scenario this meeting just prioritised (secondment, multi-hatting, FIN→NRIC, competency consolidation) depends on this being resolved. Continued discussion without a decision risks the same "known but not owned" pattern flagged in What Didn't Go Well below.
   - **Resolution:** Worth naming a single owner (Rama, given the technical framing was his) to bring a recommendation to the next session, rather than opening the identity question again from scratch.

---

## PM Assessment (self-authored, included in source)

**What went well:**
- Team moved from "everything is important" to real stack-ranking — competency job-family suffix deprioritised, employment profile changes and identity unification emerged as clear top items.
- Strong customer-impact discipline from Xian Zhang — tying dev effort to recommendation/UX outcomes, not just requirement completeness.
- OTG operational experience is finally driving prioritisation instead of theoretical scenario lists.
- Team correctly identified identity management as foundational, not incidental.

**What didn't go well:**
- Discussion stayed solution-first (NRIC, FIN, APIs, consolidation logic) without ever agreeing on the business problem statement or success criteria — "what does success look like?" was never answered.
- Scope is still oversized: 118+ scenarios, 2.5 sprints left, need to cut ≥50%, but no actual cut list was agreed. Ended with "another meeting tomorrow."
- Dependencies (Products test data, Huiting's team, OTG ops review, identity model, CAM integration) were discussed informally — no owner, timeline, or tracker.
- Operational ownership for known future issues (termination handling, 4-year data retention, non-Products officers, profile archival, exception handling) remains undecided — not just unsolved, but not even assigned.

**Risks the team is discussing:**

| Risk | Description | Potential impact |
|------|--------------|---------------------|
| R1 — Identity fragmentation | One officer may appear under different emails, agencies, FIN, and NRIC | Duplicate profiles, fragmented competencies, incorrect recommendations |
| R2 — UAT preparation risk | Products needs advance notice to prep data; prioritised scenarios aren't finalized | Delays in UAT, insufficient test coverage, launch risk |
| R3 — Capacity risk | Only 2.5 sprints remain, many scenarios remain | MVP scope exceeds delivery capacity |

**Risks the team is NOT yet fully addressing:**

| Risk | Why it's a gap |
|------|-----------------|
| No agreed identity authority | Discussion moves between email/NRIC/FIN/POCDEX UID with no decision on source of truth — implementation risk of churn later |
| No operational support model | No discussion of who investigates identity mismatches, how reconciliation happens, or escalation workflows — a real Day-2 support gap |
| Non-Products officers unquantified | Acknowledged to exist, but no count, agency breakdown, or workaround — could become a post-launch issue |
| Data governance risk | Retention, deletion after 4 years, and profile history touched on, but no decision on audit trail, historical records, or legal retention obligations |

**RAID classification (per source, if this were going to leadership):**
- 🟢 **Green:** product prioritisation improving; team converging on the right MVP foundations; OTG operational knowledge finally being leveraged.
- 🟡 **Amber:** UAT scope not locked; test case prioritisation incomplete; identity solution not finalised.
- 🔴 **Red:** timeline vs. remaining scope; dependency on Products test data prep; risk that identity-unification work expands beyond MVP capacity.

**Most important insight:** the real discussion wasn't "employee profile changes" — it was that Career Compass cannot reliably handle employment profile changes until it first solves officer identity unification. That dependency is effectively the architectural gatekeeper for MVP readiness, not a side workstream.

**Update 2026-09-01 (OTG email root-cause analysis, post-meeting):** a separate analysis of OTG's own email threads ([2026-09-01-W36-otg-operational-root-cause-analysis.md](../analyses/2026-09-01-W36-otg-operational-root-cause-analysis.md)) independently confirms the identity-unification finding from a completely different angle — live evidence of what happens when identity isn't self-healing, not architecture theory. OTG's operating model is "every unusual change → human investigation"; the analysis proposes Compass instead build "every expected change → automated; only genuine exceptions → humans." Two findings worth bringing into tomorrow's follow-up directly:
- **Don't solve the non-Products-officer population question with an ad hoc list.** OTG's own "managing 500+ NRICs for VITAL alone was infeasible" example is exactly the scaling failure Compass risks inheriting if that gap (still unowned, see Open Questions above) gets closed with a list instead of a rule.
- **Proposed North Star metric, stronger than "reduce support tickets":** % of officer lifecycle changes completed without manual intervention (e.g. ≥95% of employment/profile changes automatically reflected within X hours, no ticket). Worth proposing as an actual success metric for the employment-lifecycle workstream, not just a talking point.

---

## Next Steps

**Immediate (Tomorrow):**
- Follow-up operational review meeting (Rama and team) to finish prioritisation — this is where the cut list needs to actually land, not just get discussed again.
- Michelle/Christopher to bring the OTG Day-2-to-test-case mapping into that meeting as the working input.
- Bring the OTG root-cause findings above (list-vs-rule warning, proposed North Star metric) into the same session — they're direct inputs to the identity and non-Products-officer open questions, not a separate conversation.

**Short-term (This Week):**
- First cut of prioritised test scenarios — "end of week" target, needs to become a hard date.
- Return prioritised scenarios to Huiting's team so Products can start data prep with real lead time.

**Follow-up Meeting:**
- Tomorrow, operational review/prioritisation continuation (Rama and team).

---

## Context for Future Reference

This meeting directly resolves and extends several threads tracked earlier this week:

- **The 50-vs-11 test case question** — already resolved earlier today via the Confluence prioritisation page and jam cut screenshot ([2026-09-01-W36-prioritised-test-rows.md](../analyses/2026-09-01-W36-prioritised-test-rows.md)): 118 (Huiting's full workbook) → 82 (Compass P1 subset) → 41 rows (jam cut). This meeting's "118+ scenarios, need to cut ≥50%" framing is consistent with that same nested structure — worth explicitly connecting the two at tomorrow's follow-up so the team isn't re-deriving the same math from scratch.
- **Identity architecture** — this meeting's "current identity = email, future = NRIC or equivalent" framing is the same open question as [2026-09-01-W36-squad-sync.md](2026-09-01-W36-squad-sync.md)'s Identity Architecture Deep Dive, which already named the real strategic question as "what is Compass's long-term identity authority," not "NRIC vs. POCDEX UID." That analysis's RAID entries (Risk/Assumption/Decision/Watch Item) are directly reusable here rather than re-litigating from zero.
- **Open item #61** (employment-lifecycle end-September freeze) — this meeting is the actual execution of the "discuss employment-profile change requirements with BOs" action item tracked under #61. Worth updating #61 with today's outcome: scope is directionally prioritised (identity + profile changes are top two) but not locked, and Products' data-prep lead time is now the sharpest near-term risk.

**Pattern worth naming:** this is the third document this week (after the 50-vs-11 reconciliation and the squad-sync identity deep dive) converging on the same conclusion — identity resolution is the actual critical path, not a side issue. Three independent looks at the same problem landing on the same answer is strong signal, not coincidence.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw AI-generated executive assessment</summary>

[Weekly] OTEP — Sprint planning/Backlog grooming (actually employment profile change / identity unification scoping). Full source: AI-generated executive assessment covering Executive Summary, What Went Well (4 items), What Did Not Go Well (4 items), Decisions Made (Priority Ranking, UAT Prioritisation Principle, Lifecycle Changes Not MVP Critical), Actions Agreed (7 items), Risks Being Discussed (R1-R3), Risks Not Fully Addressed (4 items), a self-authored RAID classification (Green/Amber/Red), and a "Most Important Insight" section naming identity unification as the architectural gatekeeper for MVP readiness. Full text provided by Michelle as command arguments to `/meeting-notes` on 2026-09-01, tagged "[[Weekly] O...g grooming | Meeting]".

</details>
