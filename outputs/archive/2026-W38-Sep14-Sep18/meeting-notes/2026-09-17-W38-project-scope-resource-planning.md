# Meeting Notes: Project Scope and Resource Planning

**Date:** 2026-09-17, 02:07–02:19 PDT (12 min)

**Attendees:** Adrian Ang (57% talk time), Imelda Mo (28%), Michelle Yip (15%)

**Meeting Type:** Pre-planning scoping session

**Source:** [Otter.ai transcript](https://otter.ai/u/c-kZyZDFSXoxjZBkjaILRMmKx_g?view=summary)

**Transcript quality note:** short, fast, heavy overlap, garbled transcription in places (speaker attribution flips mid-sentence; several phrases — "double head," "picking span," "memories," "replica," "eye level" — are likely mis-transcriptions of domain terms). Low-confidence items are flagged as things to confirm, not as record.

---

## Summary

Pre-planning session covering three threads: build-vs-reuse on the job-posting template, the CV-analysis loading-state design fight, and how to size R1 (test cases, buffers, single-designer capacity). Several good calls were made cheaply and conversationally, but none were captured in an artifact, and the session opened by targeting an **R1 start of "mid-November"** — a date already superseded two days ago.

---

## ⚠️ Timeline Conflict — Flag Before Any Estimation Work Proceeds

**This meeting scopes R1 against a "mid-November" start.** That date was explicitly corrected on 2026-09-16 and is tracked as **R-11 (🔴 Red)** in the [risk register](../analyses/2026-09-16-W38-r1-risk-register.md): the same 3 engineers are needed for MVP hardening through the 24-25 Nov launch, so R1 Sprint 1 realistically starts **~1 Dec 2026**, not mid-November. That correction's action item — "re-baseline Sprint 1 kickoff to ~1 Dec in all planning docs" — is explicitly assigned to **Michelle Yip and Adrian Ang**, both of whom were in this meeting.

This matters beyond a date label: the entire estimation sequence discussed here (engineering count → buffer → size → slice → capacity check) is being run against a start date that's already ~2 weeks off. If sizing and slicing happen before the date is corrected in this workstream too, the output inherits the same problem R-11 was raised to prevent. Worth correcting before "by next week I should know" (Action Item 3) locks in a plan against the wrong start date.

---

## Decisions Made

1. **Use the existing shared template for job posting**, not a new build — accepts confinement to the template's existing fields. Co-contributor component assessed as buildable in-house.
2. **Adrian writes up the scope** for the requesting stakeholders.
3. **No progress bar, no rotating messages on CV analysis.** Instead, extend the existing "Analyzing your CV / competencies" string to name the four things being analyzed, so users can anticipate duration — resolves a design deadlock (two prior proposals rejected by stakeholders) without new design work.
4. **Courses and opportunities are regression scope, not new test scope** — only touched via the competency change. New test effort concentrates on the market/course recommendation matching path.
5. **The designer produces wireframes only**, not final design. Engineers derive the final UI. Explicitly reframed given a one-person design team; she should also strip out anything already descoped.
6. **Estimation sequence confirmed:** engineering supplies its own count → apply a buffer → size → slice → verify capacity exists. **Buffer figure itself is unresolved** — see below.
7. **Scope delivered in a non-PDF format** — Michelle: "I don't want to say in the PDF anymore." Format not specified.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Write up the project scope for requesting stakeholders | Adrian | This week (implied) | 🔴 High | 🔴 Not Started |
| Produce the scope artifact in non-PDF format | Michelle | Before next week's check-in | 🔴 High | 🔴 Not Started |
| Confirm R1 feasibility / know where things stand | Michelle | **By next week** | 🔴 High | 🔴 Not Started |
| Map team test cases against stakeholder-supplied SIDs; report coverage of the ~50-case set | Imelda | No date — "I'll work on it, see how much I can finish" | 🔴 High | 🔴 Not Started |
| Update loading copy to enumerate the four analysis steps | Imelda (inferred) | Unstated | 🟡 Medium | 🔴 Not Started |
| Ask designer to strip descoped elements, deliver pure wireframes | Michelle (inferred) | Unstated | 🟡 Medium | 🔴 Not Started |
| Collect engineering estimate counts, apply buffer, size/slice, check capacity | Adrian | Unstated | 🔴 High | 🔴 Not Started |
| Run the regression test pass | Engineering | Assumed, not formally assigned | 🟡 Medium | 🔴 Not Started |
| Confirm ticket count can be held to ≤5 | Imelda | Never closed — "I have a feeling that's possible" | 🔴 High | 🔴 Not Started |

**Note on confidence:** several items above (test-case mapping, ticket-count ceiling, buffer number) are the load-bearing inputs to R1's entire size estimate, and all three are currently either undated, unowned in practice, or based on a stated "feeling" rather than a number. This is worth surfacing directly — R1 sizing shouldn't proceed on these until at least the buffer figure is fixed.

---

## Key Insights & Quotes

**On the reuse mandate's real cost (Adrian):**
"I just hope they go and ask themselves whether this is a club they really want to go" — and "people tell us to use the product, don't rebuild everything, but eventually we have to rebuild." Real friction with the shared-template decision, raised but not picked up in the room.

**On stakeholder-driven churn (Michelle):**
"We have to play the same game... cannot hold on." Reads as resignation, not addressed.

**On engineering's defensiveness post-feedback (Adrian):**
Engineering is "scarred" by a prior comment from Mark, will "double check, triple check" — which risks inflating estimates on top of the stated buffer. You may be buffering an already-padded number without a way to tell.

**On the designer's capacity (Adrian):**
"Then she go on holiday. If she comes back, then she go holiday." Single designer, imminent unavailability, R1 wireframes for the whole release depend on her. The mitigation discussed was reducing her scope, not covering her absence.

---

## Timeline Risks

- **TIMELINE RISK (primary):** This entire session scoped R1 against a "mid-November" start, which was corrected to ~1 Dec 2026 in the risk register the day before (R-11), with the correction assigned to two attendees of this meeting. See the flag at the top of this document.
- **TIMELINE RISK:** The buffer figure changed from "30%" (0:07) to "20%" (0:09) within the same 12-minute conversation, unnoticed by anyone in the room. Against a release sized at ~148 units, that's a multi-week swing. Needs to be fixed as one number before any estimate is finalized.
- **TIMELINE RISK:** Action Item 3 ("confirm R1 feasibility by next week") depends on Action Item 4 (test-case mapping, no date) and Action Item 9 (ticket-count ceiling, never closed). A "by next week" commitment sitting on top of two undated/unclosed dependencies is optimistic without those being locked down first.
- **TIMELINE RISK:** No dates were put on the designer's holiday, despite it being named as a direct constraint on R1's wireframe critical path. Given R1's corrected kickoff (~1 Dec) is roughly 10-11 weeks out from this meeting, not 8 as assumed under the mid-November framing, there may be more room to plan around her absence than the room assumed — worth resurfacing with the corrected date in hand.

---

## Open Questions

- [ ] Is the buffer 20% or 30%? — **Owner:** Adrian — **By:** Before any estimate is finalized
- [ ] Can the ~148 items genuinely be held to ≤5 tickets, or was that a feeling, not a commitment? — **Owner:** Imelda — **By:** Before sizing is locked
- [ ] Is the existing regression suite automated? The narrowed test scope (Decision 4) depends entirely on this being true. — **Owner:** Adrian/Engineering — **By:** Before test-scope is finalized
- [ ] Do the shared template's existing fields actually cover R1's required fields? — **Owner:** Unassigned — **By:** Before the reuse decision becomes hard to reverse
- [ ] Has the four-item loading-state copy been validated with stakeholders, given two prior proposals were already rejected? — **Owner:** Unassigned — **By:** Before building it

---

## Risks We're Not Addressing

| Risk | Why It Matters | Current State |
|---|---|---|
| Single designer going on holiday | R1 wireframes for the whole release funnel through one person with imminent unavailability | No dates, no backup, no critical-path check |
| "Prioritizing on time" as the stated tradeoff | Imelda has already pushed work to backlog and told stakeholders she's optimizing for schedule; nobody asked what came out | Undiscussed |
| Engineering is defensive post-feedback | May inflate estimates on top of the stated buffer, with no way to detect double-padding | Named, not mitigated |
| Mid-November start assumed, with scope still open | Now compounded by the fact the actual corrected date (~1 Dec) wasn't used in this session at all | See timeline flag above |
| Stakeholder-driven design churn on the loading state | The accepted compromise hasn't been shown to stakeholders yet; already competing against "prioritizing on time" | Not validated |
| Template field constraints | Classic reuse decision that reverses expensively if discovered late | Not assessed |
| Screenshot/expectation concern dismissed | Waved off as "that's just how we keep repeating" — may be minor, but was the actual reason the design fight happened | Effectively dropped |

---

## Next Steps

**Immediate:**
- Correct the "mid-November" framing to ~1 Dec across this workstream's estimation, before Action Item 3's "by next week" commitment locks in against the wrong date.
- Fix the buffer number (20% vs. 30%) in writing.
- Get a yes/no on regression-suite automation before finalizing the narrowed test scope.

**Before Next Week:**
- Put a date and definition of done on the test-case-to-SID mapping (Imelda).
- Get the designer's holiday dates onto the corrected R1 timeline.
- Close the ≤5-tickets question with an actual number, not a feeling.

---

## Context for Future Reference

This session ran roughly 2 hours after the earlier [Roadmap Planning session](2026-09-17-W38-roadmap-planning-r1-and-beyond.md) today, and shares an attendee (Adrian) with it. That session flagged its own timeline risk (a scope change not yet re-costed against the sprint budget) and its own pattern of unowned action items. Combined with this session's mid-November/~1 Dec mismatch, there's a recurring theme across today's meetings: real decisions are getting made in conversation, but the corrected planning baseline (dates, scope, owners) isn't consistently carrying forward between sessions, even among the same people. Worth a single source-of-truth check before Friday's continuation and before this workstream's "by next week" commitment.

---

## Appendix: Raw Debrief

<details>
<summary>Click to expand original debrief</summary>

Original structured debrief supplied by Michelle Yip on 2026-09-17, generated from the Otter.ai transcript at https://otter.ai/u/c-kZyZDFSXoxjZBkjaILRMmKx_g?view=summary. Sections: What this meeting actually was, What went well, What didn't go well, Risks you're not addressing, Decisions made (7), Action items (9), What I'd do before next week.

</details>
