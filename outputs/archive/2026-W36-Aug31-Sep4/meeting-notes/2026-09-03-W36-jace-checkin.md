# Meeting Notes: Check-in with Jace

**Date:** 3 September 2026 (W36)

**Attendees:** Michelle Yip, Jace Tan

**Meeting Type:** 1:1 — priority alignment

**Source:** Michelle's notes

**Related:** [consolidated RAID](../analyses/2026-09-03-W36-mvp-raid-consolidated.md) · [employment-profile epic one-pager](../prds/2026-09-03-W36-employment-profile-changes-epic-one-pager.md) · [2 Sep OTG operational review](2026-09-02-W36-otg-operational-review-employment-profile.md) · open items #60, #61, #63–#67

---

## Summary

Michelle and Jace aligned that employment-lifecycle changes should **not** be squeezed into MVP. The reframe: MVP is when we *learn* the data patterns, because the POCDEX API is new and we can't yet anticipate how the data will actually affect Compass. The MVP bar drops to giving BOs visibility into what the data errors are, not building the full re-derivation and exception-handling machinery. Engineering capacity for that machinery is also unclear. Jace and Michelle agreed PMs should redirect onto pre-go-live readiness instead. Jace has set up a meeting to assign a POC and walk the pre-go-live checklist and risk assessment.

---

## Decisions Made

1. **Employment-lifecycle change handling is out of MVP scope.**
   - **Why:** The POCDEX API is new. We can't anticipate how the real data will affect Compass until we see it flowing in production. Building the full solution now means building against assumptions.
   - **Who decided:** Michelle + Jace (aligned; Adrian to confirm — see Open Questions).
   - **Impact:** Reverses the working assumption that this workstream ships by the end-September dev freeze for a 19 October UAT start. The BD-01–BD-10 decision session, the architecture walkthrough, and the Friday use-case target are no longer critical-path for MVP. Resolves the epic-ownership stall (open item #63) by removing the deadline that made it urgent.

2. **MVP position: learn the data patterns, don't solve them.**
   - **Why:** MVP becomes the observation window. Understand how POCDEX employment data behaves in production before committing to a design.
   - **Who decided:** Michelle + Jace.
   - **Impact:** The employment-profile-change epic shifts to post-MVP / R1. Scope during MVP is limited to instrumentation and error visibility.

3. **Minimum MVP deliverable: BOs can see what the data errors are.**
   - **Why:** Even without automated handling, BOs need a way to see which records are wrong (email collisions, missing mappings, stale transfers) so they aren't blind to it at launch.
   - **Who decided:** Michelle + Jace.
   - **Impact:** This is the one piece of the employment-profile work that stays in MVP. Needs scoping — what the error view is, who builds it, where it lives. Not yet defined.

4. **PMs redirect onto pre-go-live readiness.**
   - **Why:** With employment-lifecycle out of the MVP critical path, the higher-value PM work is launch readiness — the checklist, risk assessment, go-live gates.
   - **Who decided:** Michelle + Jace.
   - **Impact:** Michelle's focus shifts. The test-case authoring, OTG mapping, and BD-decision chasing drop in priority (they belong to the post-MVP epic now).

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Run the meeting to assign a POC and walk the pre-go-live checklist + risk assessment | Jace (set up) | Not stated — meeting is scheduled | 🔴 High | 🟡 Scheduled |
| Confirm with Adrian that employment-lifecycle is officially out of MVP (this was a Michelle+Jace alignment, needs the scope owner's sign-off) | Michelle | This week | 🔴 High | 🔴 Not Started |
| Scope the MVP "BO data-error visibility" deliverable — what it shows, who builds it, where it lives | Michelle (+ TBC) | Not stated | 🟡 Medium | 🔴 Not Started |
| Communicate the scope change to the employment-profile stakeholders (Imelda, Rama, Christopher Woo, Huiting's team) — especially Huiting, who has a 19 Oct UAT expectation | Michelle / Adrian | Before the 19 Oct expectation drives more prep | 🔴 High | 🔴 Not Started |
| Redirect onto pre-go-live readiness prep ahead of Jace's checklist meeting | Michelle | Before that meeting | 🔴 High | 🔴 Not Started |

**Notes:**
- The Adrian confirmation is the load-bearing one. Until he signs off, this is a two-person alignment, not a programme decision. Huiting's team is planning against 19 Oct — that expectation needs correcting fast, and Adrian owns Huiting comms.

---

## Key Insights

**On why this is the right call:**
- The POCDEX API is new. Building employment-lifecycle handling now means designing against how we *think* the data behaves. MVP is the first time real POCDEX employment data flows into Compass — that's the moment to learn, not to have already committed a design.

**On the minimum bar:**
- "The alternative to BOs should still be something they can see what the data errors are." Not automated handling — just visibility. BOs shouldn't be blind to bad records at launch, even if Compass can't fix them yet.

**On capacity:**
- Engineering resourcing for the full employment-lifecycle build was never clear. Taking it out of MVP removes a scope commitment that had no confirmed team behind it.

**On PM focus:**
- Jace's steer: PMs should be on pre-go-live readiness, not the employment-lifecycle deep-dive. That work now belongs to a post-MVP epic with its own timeline.

---

## What This Resolves

The [consolidated RAID's](../analyses/2026-09-03-W36-mvp-raid-consolidated.md) biggest open cluster was the employment-profile-change epic — no owner, unbooked BD session, 11 stalled items, hard end-September deadline. This meeting dissolves most of it by moving the deadline:

- **I-epic-owner / open item #63** — the epic-ownership gap is no longer a launch blocker. It still needs an owner (proposed: Imelda's Epic 2) but as post-MVP work, not a this-week escalation.
- **#61 (end-September dev freeze)** — the freeze was driven by Huiting's 19 Oct UAT start. If employment-lifecycle is out of MVP, that deadline doesn't apply to this workstream. Needs reconciling with Huiting.
- **BD-01–BD-10, architecture walkthrough, Friday use-case target** — all move to the post-MVP epic timeline. Not dropped, de-urgentised.
- **#64–#67 (BD-07, BD-09, walkthrough, data-prep)** — same. Still open, no longer this week's fire.

**Stays live in MVP:** the BO data-error visibility deliverable (Decision 3), and #62 (hidden-competency UAT bug — separate issue, unaffected).

---

## Open Questions

- [ ] **Does Adrian confirm employment-lifecycle out of MVP?** This was a Michelle+Jace alignment. Adrian owns MVP scope and Huiting comms. — **Owner:** Michelle — **By:** this week
- [ ] **What exactly is the "BO data-error visibility" deliverable?** A dashboard, a report, an export, a queue? Who builds it? Does it reuse anything from the Ops Portal work? — **Owner:** Michelle — **By:** feeds the pre-go-live scoping
- [ ] **How does Huiting's team react to losing the 19 Oct employment-profile UAT?** They've been planning test data prep against it. — **Owner:** Adrian / Michelle — **By:** ASAP
- [ ] **Who is the pre-go-live POC Jace is assigning?** — **Owner:** Jace — **By:** his scheduled meeting
- [ ] **Does the post-MVP employment-profile epic get a formal home now, or after MVP ships?** Proposed: under Imelda's Epic 2 (My Development). — **Owner:** Adrian / Imelda — **By:** not urgent

---

## Timeline Risks

- **TIMELINE RISK: Huiting's team is planning against a 19 October employment-profile UAT start** ([open item #61](../../PM-skills-ALL-1/00-hub/open-items.md), sourced to the 31 Aug Adrian bi-weekly sync). This meeting removes that workstream from MVP, which removes the 19 Oct date — but Huiting hasn't been told. The longer the gap between this decision and that conversation, the more test-data prep her team does against a target that no longer exists. Adrian owns Huiting comms; this needs to move this week.

- **TIMELINE RISK: the end-September dev freeze for employment-lifecycle** ([#61](../../PM-skills-ALL-1/00-hub/open-items.md)) was the tighter-than-MVP deadline. If it's lifted, confirm nothing else was implicitly depending on that work landing by then (e.g. did any Sprint 9 planning assume it?).

---

## Next Steps

**Immediate (this week):**
1. Michelle → Adrian: confirm employment-lifecycle is out of MVP, get it recorded as a scope decision.
2. Michelle / Adrian → Huiting: correct the 19 Oct expectation before her team preps further.
3. Michelle: prep for Jace's pre-go-live checklist + risk-assessment meeting.

**Short-term:**
- Scope the MVP BO data-error visibility deliverable.
- Update the trackers: #61, #63–#67 move from MVP-critical to post-MVP epic (partly done — see below).

**Follow-up meeting:** Jace's pre-go-live POC assignment + checklist walkthrough — scheduled, date TBC in these notes.

---

## Context for Future Reference

This is a scope-cut decision made in a 1:1, exactly the kind that got under-documented in W35 (CAM/R1 deferral). Recording it here and flagging it needs Adrian's formal sign-off so it doesn't sit as a "two people agreed in a check-in" that later gets questioned.

The employment-profile-change work isn't dead — it's repositioned. MVP is the learning window (watch how POCDEX employment data behaves in production), the full re-derivation + exception-queue design is post-MVP / R1, and it likely lives under Imelda's My Development epic since that's what profile accuracy feeds. The [OTG root-cause analysis](../analyses/2026-09-01-W36-otg-operational-root-cause-analysis.md) and the [decisions brief](../analyses/2026-09-02-W36-employment-profile-decisions-brief.md) stay valid as inputs to that post-MVP epic — don't archive them, just re-tag them.
