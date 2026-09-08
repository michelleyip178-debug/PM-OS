# Meeting Notes: STIP/Gig Opportunity Posting — OTG vs Compass

**Date:** 2026-09-07

**Attendees:** Adrian Ang (Director of Product Management, CareerCompass Product Lead), Michelle Yip (PM, PSD), Li Ting Kway (Designer, GovTech)

**Type:** Stakeholder discussion — R1 operating model / scope

**Source:** Slack thread

**Duration:** Async thread

---

## Summary

Adrian opened the question of how STIPs and Gigs should be posted once CareerCompass R1 adds native apply: double-post on OTG and CC, post on OTG and flow into CC, or post on CC and flow to OTG. Li Ting's design read is that double-posting is the outcome to avoid, because agencies revert to old tools when the new path is more work. The key finding surfaced in the thread: HR avoid OTG today because its opportunity and application forms can't be customised, so they already double-post across FormSG, Careers@Gov, and OTG. No decision was made. Adrian wants the technical feasibility of posting to OTG clarified first, then a co-creation ("jamming") session with WD, with agency requests consolidated and context set before it runs.

---

## Decisions Made

_None. This was a framing discussion. Direction and next steps below._

**Emerging alignment (not yet decided):**
- Double-posting is undesirable as the R1 model — Li Ting on design-adoption grounds, Michelle's proposed strategy also routes around it. Adrian has not confirmed.
- The problem is being reframed from "posting tool" to "form customisation" — the reason agencies avoid OTG.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Clarify what's technically possible for posting/flowing opportunities to OTG (feasibility of CC→OTG, and whether OTG exposes STIPs/Gigs/internal jobs/secondments in an ingestible feed) | @Michelle | Before the WD session — no date set, flag | 🔴 High | Not started |
| Consolidate the agency requests / "reasonable" customisation asks into one artefact to set context for the WD session (pull real FormSG / Careers@Gov workaround forms, categorise the recurring fields) | @Michelle | Before the WD session | 🔴 High | Not started |
| Schedule the co-creation ("jamming") session with WD, once feasibility + agency requests are clear, with a written context brief | @Michelle | After the two items above | 🟡 Medium | Blocked on the two above |
| Continue the Fuel50 integration research as a reference input for the options | @Michelle | Ongoing | 🟢 Low | In progress |

**No due dates were stated in the thread.** Adrian sequenced the work (feasibility → consolidate → session) but did not attach dates. Given Adrian is away 5–9 Oct, the WD session and any decision needing his sign-off should land in the week of 22 Sep or the week of 29 Sep. Confirm the target with Jace.

---

## Key Insights & Quotes

**The reframe — this is a form problem, not a posting-tool problem (Li Ting [4]):**
> A major pain point for HR not posting on OTG is the inability to customise opportunity and application forms, leading to double posting on FormSG, Careers@Gov, and OTG.

This is the load-bearing finding. It matches the [W37 creation & dual-posting analysis §3](../analyses/2026-09-07-W37-r1-opportunity-creation-and-dual-posting.md): OTG is already half-abandoned for roles needing custom questions. A CC apply flow that is also fixed-form rebuilds OTG's limitation with a nicer UI.

**Adrian's challenge to the scope [2]:**
> Questioned the purpose of building opportunity posting functionality on CC if opportunities are only posted on OTG.

This is the "why does R1 own creation" question. If the answer is "it doesn't, that's R4," R1's apply flow reads as thin. The form-customisation finding is what turns minimal creation into an R1 unlock rather than an R4 nicety.

**Li Ting on adoption risk [1]:**
> Agencies might resist adopting new posting methods if accustomed to previous ones — double posting is undesirable for future expansion.

**Michelle's proposed strategy [5]:**
> Piloting agencies keep creation and application within Compass, and only post on OTG separately if they want to open opportunities to a wider team.

This is the Option D shape from the Friday analysis — pilot agencies author in CC, OTG-side visibility is a deliberate, separate, per-role choice, not a default sync.

**Michelle's fallback for OTG-side reach [3]:**
> If posting from CC to OTG is technically feasible, officers not on Compass could apply via CC, though they'd manually enter details.

Manual re-entry is the weak version. The Friday analysis prefers a link-only listing stub (title + "apply on CareerCompass", no form, no data sync) over manual re-entry.

---

## Open Questions

- [ ] Is CC→OTG posting technically feasible, and does OTG expose STIPs/Gigs/internal jobs/secondments in an ingestible feed? — **Owner:** @Michelle (with Pow Hwee / OTEP-578 spike) — **By:** before WD session
- [ ] What is the authoritative authoring system for each opportunity type in R1? (the matrix: internal jobs / secondment / STIP / Gig × authoring system × discovery in CC × posting in CC) — **Owner:** @Michelle to propose, @Adrian to confirm — **By:** before Adrian's 5–9 Oct absence
- [ ] Which "reasonable agency requests" are in scope for the WD session vs out? — **Owner:** @Michelle — **By:** before WD session
- [ ] Does dropping full native creation from R1 (keeping minimal template-based creation) need to go back to Mark, given the 9 Jul SteerCo "A+B+C floor" sign-off? — **Owner:** @Michelle → @Adrian — **By:** R1 grooming

---

## Blockers

1. **The WD jamming session is blocked on two upstream pieces**
   - **Blocked by:** OTG technical feasibility (not yet answered) + consolidated agency requests (not yet built)
   - **Impact:** No co-creation session, no transition plan, R1 opportunity-creation scope stays open
   - **Resolution:** Get the OTEP-578 spike read from Pow Hwee at the Sprint 9 sync; pull real FormSG/Careers@Gov workaround forms this week and categorise them

2. **Adrian away 5–9 Oct**
   - **Blocked by:** Calendar
   - **Impact:** Any R1 operating-model decision needing his sign-off has a hard window — before 5 Oct or after 9 Oct
   - **Resolution:** Target the decision for the week of 22 or 29 Sep; confirm with Jace

---

## Timeline Risks

- **TIMELINE RISK:** The WD session has no date and depends on two unstarted items, while R1 grooming needs the opportunity-creation scope settled. R1 also has a single designer (Li Ting, shared with CMM through mid-Sep) and engineering tied up in VAPT remediation through November (per [4 Sep collision analysis](../analyses/2026-09-04-W36-r1-timeline-and-handoff-collision-analysis.md)). If the feasibility + consolidation work slips past mid-Sep, the WD session pushes into Adrian's absence window and the R1 scope decision slips with it. Confirm the target date with Jace this week.

---

## Next Steps

**Immediate (this week):**
1. Get the OTG ingestion feasibility read from Pow Hwee at the Sprint 9 sync (OTEP-578 spike) — does OTG expose the opportunity types in an ingestible feed, and is CC→OTG posting possible.
2. Start the FormSG/Careers@Gov workaround analysis — pull 15–20 real forms agencies use, categorise the recurring custom fields. This becomes both the "consolidated agency requests" artefact and the input to the template-picker scope.
3. Take the authoring-system matrix to Adrian at the 16:00 PM catchup (8 Sep) as a proposed decision (Option D: pilot agencies author in CC with template forms, non-pilot in OTG read-only, no write-back sync) — confirm or redirect before his 5–9 Oct absence.

**Short-term (next 2 weeks):**
- Write the WD session context brief once feasibility + agency requests are clear.
- Schedule the WD jamming session for the week of 22 or 29 Sep.
- Fold the outcome into the [R1 opportunity-scope PRD](../prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md) and [R1 Opportunities RAID](../analyses/2026-09-07-W37-r1-opportunities-raid.md).

**Follow-up meeting:**
- **What:** WD co-creation ("jamming") session on the opportunity-posting transition plan
- **When:** Week of 22 or 29 Sep (after feasibility + consolidation)
- **Who:** Michelle, Li Ting, WD team, + Pow Hwee for technical input
- **Prep:** Written context brief — feasibility findings, consolidated agency requests, the proposed operating model

---

## Context for Future Reference

**Where this sits:** This is the R1 opportunity operating-model question. Michelle already has the options analysis ([creation & dual-posting](../analyses/2026-09-07-W37-r1-opportunity-creation-and-dual-posting.md), [transition strategy](../analyses/2026-09-07-W37-r1-opportunity-creation-transition-strategy.md), [hypotheses register](../analyses/2026-09-08-W37-r1-opportunity-creation-hypotheses.md)) — Friday's work. The Slack thread is Adrian asking the question those documents answer. The gap is decision-forcing and the two prerequisites Adrian named (feasibility + consolidated requests) before the WD session.

**Adrian's working style (stakeholder profile):** Primary decision authority for the programme; normally reached through Jace unless directly in the room. Cares about WOG alignment and agency buy-in — which is why he wants WD in the co-creation early, not presented to. He sequenced the work rather than deciding, so the move is to bring him a proposed decision to confirm, with the feasibility caveat stated where it's still open.

**Key constraint to carry into every version of this:** OTG contract runs to March 2028, full cutover Oct 2027. Native creation for all agencies is an R4 deliverable. D-016 says one-time OTG port, no ongoing sync — a CC→OTG write-back sync contradicts the stated architecture. Any R1 model has to coexist with a live OTG for ~108,000 non-pilot officers.

**"WD"** = the design/co-creation partner referenced for the jamming session (confirm exact team name before scheduling).

---

## Appendix: Raw Notes

<details>
<summary>Original Slack thread (7 Sep)</summary>

Adrian ANG (PSD) initiated a discussion with Michelle YIP (PSD) and Li Ting KWAY (GOVTECH) regarding challenges in managing opportunity postings for STIPs and Gigs on OTG and/or Compass, exploring options like double posting, posting only on OTG with flow to CC, or posting only on CC with flow to OTG. Michelle YIP is researching Fuel50 integrations for potential solutions, while Li Ting KWAY highlighted that avoiding double posting is ideal to prevent agencies from reverting to old methods. The team agreed to schedule a jamming session with WD to co-create a transition plan, once Michelle YIP clarifies OTG integration possibilities and consolidates agency requests.

1. Li Ting KWAY noted that agencies might resist adopting new posting methods if they are accustomed to previous ones, making double posting undesirable for future expansion.
2. Adrian ANG questioned the purpose of building opportunity posting functionality on CC if opportunities are only posted on OTG.
3. Michelle YIP suggested that if posting from CC to OTG is technically feasible, officers not using Compass could apply via CC, though they would need to manually enter details.
4. Li Ting KWAY identified that a major pain point for HR not posting on OTG is the inability to customize opportunity and application forms, leading to double posting on platforms like FormSG, Careers@Gov, and OTG.
5. Michelle YIP proposed a strategy where piloting agencies keep creation and application within Compass, and only post on OTG separately if they wish to open opportunities to a wider team.
6. Adrian ANG emphasized the need to understand current technical possibilities for posting to OTG and then holding a jamming session with WD to discuss options, involving them early in the co-creation process.
7. Adrian ANG requested Michelle YIP to schedule a jamming session with WD once OTG integration possibilities are understood and reasonable agency requests are consolidated, with a clear context set for the session.

</details>
