# Meeting Notes: Discussion on Data Requirements with Huiting

**Date:** 2026-07-07 (Tue, W28)

**Attendees:** Huiting LIAN, Rama MOORTHY, Pow Hwee TAN, Xian Zhang GUO

**Type:** Stakeholder Review — data governance / architecture discussion

**Duration:** Not specified

---

## Summary

This is the live follow-on to yesterday's Teams thread (2026-07-06) where Huiting first asked Compass to formalize its data requirements before going further on source-system integration. Today's session covered five threads: NRIC vs. POCDEX UID as primary identifier, officer offboarding/data purging (unresolved), data retention/audit requirements, the POCDEX data request approval process, and the same historical/current/future data-scoping question from yesterday. **One clear decision came out of this session that yesterday's thread didn't have: Pow Hwee explicitly rejected reusing OTG's data feed** — Compass needs its own approach, not an inherited one.

---

## Decisions Made

1. **Standardise terminology on "POCDEX UID," not "POCDEX ID."**
   - **Why:** Huiting corrected the team's informal usage; Rama confirmed the two terms had been used interchangeably and agreed to standardise going forward.
   - **Who decided:** Rama MOORTHY (accepting Huiting's correction).
   - **Impact:** Documentation, API specs, and any existing internal references to "POCDEX ID" should be updated to "POCDEX UID" for consistency — worth a quick sweep of Compass docs/tickets that use the older term.

2. **MVP identity design stays POCDEX UID-based; NRIC adoption deferred to post-MVP.**
   - **Why:** Rama's position — Compass's MVP is already built around POCDEX UID. Huiting flagged that recent PSD guidance (a Circular Minute on NRIC usage) may require justification if Compass chooses *not* to use NRIC, and Xian Zhang separately noted the policy document seemed to point toward requiring NRIC.
   - **Who decided:** Rama MOORTHY (as current position, not a final policy ruling).
   - **Impact:** This is a real, unresolved policy risk, not a settled decision — see Open Questions. If the Circular Minute does mandate NRIC, MVP's identifier choice could need revisiting post-launch, which is a nontrivial identity-model change.

3. **Reject reuse of OTG's data feed for Compass.**
   - **Why:** Rama suggested reusing OTG's existing POCDEX-sourced active-officer dataset since it's already a large, available feed. Pow Hwee stated directly: no reuse of OTG.
   - **Who decided:** Pow Hwee TAN.
   - **Impact:** Compass needs its own data-sourcing design rather than inheriting OTG's model — this directly affects the POCDEX data request scope and timeline, since it's now solving the problem fresh rather than piggybacking on existing infrastructure.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Update internal references from "POCDEX ID" to "POCDEX UID" for consistency | Rama MOORTHY | No date given — schedule within 48 hrs | 🟡 Medium | 🔴 Not Started |
| Review PSD guidance / Circular Minute on NRIC usage and confirm whether Compass must use NRIC or can justify POCDEX UID-only | Rama MOORTHY / Xian Zhang GUO | No date given — this blocks a real design decision | 🔴 High | 🔴 Not Started |
| Design an approach for detecting officers who've left Public Service and purging/deactivating their Compass records | Rama MOORTHY (technical) / Pow Hwee TAN | No date given — flagged as unresolved | 🔴 High | 🔴 Not Started |
| Clarify with Huiting whether additional API parameters are needed to signal an officer joining/leaving | Rama MOORTHY | No date given | 🟡 Medium | 🔴 Not Started |
| Address Huiting's comments on the POCDEX data request document before sign-off | Rama MOORTHY | No date given — blocks approval | 🔴 High | 🔴 Not Started |
| Continue defining historical/current/future data requirements (carried from 2026-07-06 thread) | Rama MOORTHY / Imelda MO | Week of 13 Jul (per yesterday's thread — Rama's draft response due to share then) | 🔴 High | 🟡 In Progress |

**Notes:**
- The NRIC-vs-POCDEX-UID review and the offboarding/purging design are the two highest-stakes items here — both are open policy/design questions with no date attached, and both materially affect Compass's core data model. Recommend pushing for explicit dates on these two specifically, not just the data request document.
- This session's action items sit on top of the still-open items from yesterday's thread (data domain list, data flow diagram, consolidated question list) — none of those appear to have progressed to a scheduled date yet either.

---

## Key Insights & Quotes

**NRIC vs. POCDEX UID is now a live policy risk, not a settled MVP assumption.** Yesterday's thread didn't surface this at all. Today, Huiting flagged that recent PSD guidance may require justification if Compass doesn't use NRIC, and Xian Zhang independently read the document as pointing toward NRIC being required. If that reading holds, Compass's entire MVP identity model (built around POCDEX UID) could face a policy-driven change post-launch — this is a bigger risk than a normal open question, since it touches the core data model, not a single feature.

**Officer offboarding has no design yet, and the API model makes it harder than it looks.** Huiting explained OTG's current approach: POCDEX sends a full active-officer dataset, and consumers manually diff current vs. previous files to detect departures. Supporting this properly via API (rather than diffing) would need new parameters to signal join/leave events — more complex than OTG's existing model. The team recognizes WOG AD/Singpass can block a departed officer from *logging in*, but that doesn't solve the separate problem of purging or deactivating their *stored* Compass records. This is a real gap, not just an edge case — every officer who leaves Public Service is an unaddressed data lifecycle event right now.

**"No reuse of OTG" (Pow Hwee, verbatim as summarized) is a scope-defining statement.** It forecloses an easy path (reuse OTG's existing feed) in favor of Compass building its own POCDEX-sourced approach — which likely means more upfront design work but avoids inheriting OTG's known limitations (e.g., the manual-diff offboarding approach that doesn't scale well).

**Data retention/audit requirements were raised but not resolved with specifics.** Huiting reiterated that systems can't retain data indefinitely without justification, and retention periods must comply with Information Management requirements — but no concrete retention period or audit requirement was defined in this session. This is effectively still open, folded into the broader data-requirements exercise from yesterday.

---

## Open Questions

- [ ] Does the PSD Circular Minute on NRIC usage require Compass to use NRIC as an identifier, or can POCDEX UID be justified as sufficient? — **Owner:** Rama MOORTHY / Xian Zhang GUO — **By:** No date given, but this blocks a core identity-model decision
- [ ] Does POCDEX send any notification when an officer leaves Public Service, and if not, what mechanism (API parameter, batch diff, or something else) should Compass use to detect this? — **Owner:** Rama MOORTHY, informed by Huiting's CAM/ITSM context — **By:** Unresolved, flagged as open design issue
- [ ] What specific retention periods apply to Compass's stored officer data, per Information Management requirements? — **Owner:** Rama MOORTHY / Huiting LIAN — **By:** Not yet scoped
- [ ] What clarifications does Huiting still need on the POCDEX data request document before she'll sign off? — **Owner:** Rama MOORTHY — **By:** Blocks approval progress

---

## Blockers

1. **NRIC vs. POCDEX UID is unresolved and carries real re-architecture risk.**
   - **Blocked by:** Ambiguous policy guidance (the Circular Minute) that two people in the room read differently (Rama treating POCDEX UID as sufficient for now; Xian Zhang reading the document as pointing toward NRIC being required).
   - **Impact:** If NRIC turns out to be mandatory, Compass's MVP identity model needs to change post-launch — a costly, foundational shift rather than a minor patch.
   - **Resolution:** Get a definitive policy read (not an internal interpretation) before treating "POCDEX UID for MVP, NRIC later" as safe. This is exactly the kind of ambiguity that shouldn't be resolved by which team member's reading wins informally.

2. **No design exists for officer offboarding / record purging.**
   - **Blocked by:** POCDEX's join/leave signaling mechanism isn't confirmed, and OTG's existing manual-diff approach is explicitly not being reused.
   - **Impact:** Every officer who leaves Public Service is currently an unhandled data lifecycle event in Compass's design — this is a real data-integrity and possibly compliance gap, not a future nice-to-have.
   - **Resolution:** Needs a dedicated design conversation between Rama, Pow Hwee, and Huiting's team — this isn't a quick API tweak, it's a new process design.

3. **POCDEX data request document still has outstanding comments from Huiting.**
   - **Blocked by:** Huiting's review comments haven't been addressed yet.
   - **Impact:** Blocks formal approval of the data request, which gates broader POCDEX integration work.
   - **Resolution:** Rama to review and respond to Huiting's comments — no date currently attached.

---

## Timeline Risks

- **TIMELINE RISK:** This session adds two new high-stakes open items (NRIC policy risk, offboarding design) on top of the already-open Level 1/2/3 data-requirements work from yesterday's thread — none of which have dates. Given open item #55 already tracks the broader data-requirements ask with "week of 13 Jul" as the target for Rama's draft response, today's session effectively expands scope on that same timeline without adjusting it. Worth flagging to Rama whether the 13 Jul target still holds given the added scope (NRIC review, offboarding design) surfaced today.

---

## Next Steps

**Immediate (This Week):**
- Get a definitive read on the NRIC Circular Minute — don't let this stay an internal interpretation disagreement
- Rama to address Huiting's outstanding comments on the data request document

**Short-term (Before 13 Jul):**
- Continue the Level 1/2/3 data-requirements work already tracked in open item #55
- Scope a dedicated design conversation for officer offboarding/purging — this needs its own session, not a follow-up email

**Follow-up Meeting:**
- **Date:** Tied to the "week of 13 Jul" target already set for Rama's draft response (open item #55)
- **Purpose:** Confirm progress on data domains, NRIC policy clarification, and offboarding design
- **Attendees:** Huiting LIAN, Rama MOORTHY, Xian Zhang GUO, Pow Hwee TAN

---

## Context for Future Reference

- **This is a direct continuation of the 2026-07-06 Teams thread** ([2026-07-06-W28-huiting-data-requirements-teams-message.md](2026-07-06-W28-huiting-data-requirements-teams-message.md)) and open item #55 in `open-items.md`. The Level 1/2/3 framework, the data domain list, and the consolidated question list from that thread are all still open — today's session added new specifics (NRIC, offboarding, OTG-reuse rejection) rather than resolving the original asks.
- **The NRIC-vs-POCDEX-UID question connects to the same root issue as #18/#41 (competency SSOT)** — Compass keeps discovering foundational identity/data-model questions that were assumed rather than confirmed, this time surfacing from the data-governance side (Huiting) rather than the engineering side (Léo/Kingsley).
- **"No reuse of OTG" is worth remembering as a standing constraint** — any future temptation to shortcut Compass's data architecture by leaning on existing OTG infrastructure has already been explicitly closed off by Pow Hwee.
- **Ownership stays with Rama/Imelda per open item #55** — Michelle's role continues to be confirming scheduling and consistency with #18/#41, not authoring the data requirements herself.

---

*Saved: 2026-07-07 (W28)*
*Next: Push for a definitive NRIC policy answer rather than letting it ride as an internal disagreement. Confirm whether the 13 Jul target for Rama's draft response still holds given today's added scope.*
