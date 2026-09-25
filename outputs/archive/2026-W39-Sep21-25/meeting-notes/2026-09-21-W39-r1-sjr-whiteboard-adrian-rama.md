---
date: 2026-09-21
week: 2026-W39
type: meeting-notes
meeting_type: ad-hoc stakeholder/engineering discussion
attendees: Adrian Ang, Rama Moorthy, Michelle Yip
topic: R1 Opportunities — SJR whiteboard sketch
---

# Meeting Notes: Ad-hoc Discussion with Adrian and Rama on R1 Opportunities (SJR Whiteboard)

**Date:** 2026-09-21

**Attendees:** Adrian Ang (Product Lead), Rama Moorthy (Engineering), Michelle Yip

**Type:** Ad-hoc working session (whiteboard sketch, not formally minuted)

**Input:** Michelle's read of the whiteboard, submitted for correction

---

## Summary

Adrian and Rama whiteboarded an SJR (Structured Job Rotation) model with three parts — Discovery, Creation, Apply — targeting "SJR ready" by Nov 2027, ahead of OTG switching off in 2028. **Concept vs. solution (clarified 21 Sep, later):** the concept is fixed — SJR is in scope for R1, discoverable via Compass. The solution is not — **whether "Creation" and "Apply" on the board mean Compass builds them, or the HR systems do**, is still open. That ambiguity determines whether the eventual solution is consistent with, or a direct contradiction of, the "no ATS in Compass" architecture already locked in the SJR to-be handover brief.

---

## Michelle's Reading of the Whiteboard (For Correction)

- **R1 SJR has three parts:** Discovery (ingesting roles + ringfencing rules), Creation, and Apply.
- **Creation** is role-based, with an exercise-cycle admin (dates, deploy, invite officers). A "normal creation form + CV upload" option is crossed out.
- **Apply** is a structured application form with CV upload, plus application status.
- **Target:** "Nov 2027: SJR ready," with OTG switching off in 2028. A "12–14 months" note roughly matches ~14 months from now (i.e., from Sep 2026).
- **2027 cycle sequence per the board:** training for functional leaders/HR/nominated officers in March → functional leaders set up in OTG in May → HR creates opportunities July–September → applications and shortlisting September–November.
- **Also on the board:** de-duplication between OTG and Compass; four agencies outside the two main HR systems — MINDEF, CPF, DSTA, A*STAR; Singpass.

---

## Decisions Made

None confirmed yet — **this entire discussion is pending clarification**, per the open question below. Nothing here should be treated as locked until Adrian/Rama confirm the reading.

---

## Open Questions

- [ ] **The core question: was this sketch of what Compass builds in R1 (Creation and Apply inside Compass), or of what the HR systems provide (Compass stays discovery-only)?** — **Owner:** Adrian Ang / Rama Moorthy — **By:** Before this goes any further into R1 scope or Tuesday's estimation delivery
- [ ] Which 2027 cycle timeline is correct — the board's (Mar training → May OTG setup → Jul-Sep creation → Sep-Nov apply, target Nov 2027) or the handover brief's (End-Mar 2027 written HR commitments → End-Jun 2027 test environment → Oct 2027 go/no-go → Jan-Feb 2028 dry run → Mar 2028 cutover)? — **Owner:** Michelle Yip, confirm with Adrian/Rama — **By:** Before touching the SJR timeline in any doc
- [ ] Do MINDEF, CPF, DSTA, and A*STAR need their own ingestion feed, given they sit outside HRPS and Cumulus? — **Owner:** Michelle Yip / Rama Moorthy — **By:** TBD, feeds into sizing
- [ ] Does centralizing STIPs & Gigs in Compass, plus SJR discovery, require a POCDEX exploration to get all officer records? — **Owner:** Michelle Yip — **By:** TBD, new dependency surfaced by Michelle, not yet scoped with POCDEX team (Daryll)

---

## What This Could Change (Michelle's Read, Flagged for Validation)

1. **Where Creation and Apply live.** If the board means Compass builds Creation and Apply natively, that's a different model from the HR-hosted apply flow already agreed in the SJR to-be handover brief, and from the R1 "no ATS in Compass" position. It would pull much of the HR-system build (structured form, CV upload, status) into the CareerCompass squad.
2. **Dates.** The board's 2027 cycle timing doesn't match the handover brief's phasing — needs reconciling before it's used for planning.
3. **Sizing.** A Compass-hosted form and cycle admin would push the CareerCompass estimate well above the handover brief's original 7–17 person-month range.
4. **New systems.** MINDEF, CPF, DSTA, and A*STAR sit outside HRPS and Cumulus — open whether they need a separate feed.

---

## Update (21 Sep, later same day)

**Confirmed: no further changes to C@G ingestion.** Whatever SJR turns out to be (own epic, Compass-hosted Creation/Apply, or otherwise), it will **not** route through or modify the existing C@G public-vacancy ingestion pipeline (F-23). This resolves the ingestion-pipeline question raised in Michelle's response to Adrian's earlier thread ("might need to set a new pipeline or enhance the existing one just for SJR") — the answer is a new/separate pipeline if SJR needs one, not a change to C@G's.

**This does not resolve the core whiteboard question.** Whether Compass builds SJR's Creation and Apply natively, or the HR systems do, is still open. C@G ingestion staying fixed is a constraint on *how* SJR gets built, not an answer to *who* builds it.

---

## Timeline Risks

**TIMELINE RISK: The board's 2027 cycle sequence conflicts with the SJR to-be handover brief's timeline.** The board has training (Mar) → OTG setup (May) → HR creates opportunities (Jul–Sep) → apply/shortlist (Sep–Nov) → "SJR ready" Nov 2027. The handover brief (`2026-09-20-W38-sjr-to-be-handover-brief.md`) has written HR commitments (end-Mar 2027) → test environment (end-Jun 2027) → go/no-go (Oct 2027) → dry run (Jan-Feb 2028) → cutover (Mar 2028). These describe different models — the board's sequence still runs the 2027 cycle *on OTG* (matches "2027 cycle stays on OTG" in the brief) with a Nov 2027 target, while the brief's Oct 2027 go/no-go is about the *cutover to HRPS/Cumulus*, arriving after the 2027 OTG cycle would already be running apply/shortlist. These aren't necessarily contradictory, but they haven't been reconciled into one sequence — confirm with Adrian/Rama before either timeline gets used in planning.

**TIMELINE RISK: This directly intersects Tuesday's (22 Sep) R1 estimation delivery to Adrian.** The reduced-scope feasibility brief already has a pending note that SJR may split into its own epic. If the whiteboard means Compass builds Creation and Apply, the sizing impact is much larger than the "own epic, pending confirmation" framing currently in that doc — this needs to be resolved with Adrian before Tuesday's number is finalized, not after.

---

## Connections to Existing Risk Register

**This directly extends risk R8** (tracked since early September): "NRIC-only identity model may not hold for non-POCDEX agencies (MINDEF/DSTA/A*STAR/CPF run separate OTG pipelines) or identity-transition cases." The whiteboard's mention of these same four agencies, in the context of SJR ingestion, is the concrete scenario R8 was flagged as "deferred, watch for" — this may be the trigger to revisit it rather than continue deferring. See `outputs/analyses/2026-09-07-W37-pocdex-raid.md`.

**New dependency surfaced, not yet in any tracker:** POCDEX exploration needed to get all officer records, driven by the idea of centralizing STIPs & Gigs in Compass alongside SJR discovery. This should be raised with Daryll (POCDEX Team Lead) — see `context-library/prds/pocdex.md`.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm with Adrian/Rama: does the whiteboard mean Compass builds Creation/Apply, or HR systems do? | Michelle Yip | Before Tuesday's (22 Sep) estimation delivery | 🔴 High | Not Started |
| Reconcile the board's 2027 cycle timeline against the handover brief's timeline into one sequence | Michelle Yip | Before either timeline is used in planning | 🟡 Medium | Not Started |
| Raise POCDEX exploration need with Daryll (all officer records, for centralized STIPs/Gigs + SJR discovery) | Michelle Yip | TBD | 🟡 Medium | Not Started |
| Revisit R8 (NRIC-only identity model) given MINDEF/DSTA/A*STAR/CPF now appear in SJR context, not just MVP | Michelle Yip | TBD, ahead of SJR ingestion scoping | 🟡 Medium | Not Started |

---

## Next Steps

**Immediate (before Tuesday 22 Sep):**
- Get the core "who builds Creation/Apply" question answered — this is the single fact that determines whether SJR's sizing impact on R1 is marginal (own epic, HR-hosted) or major (Compass-hosted ATS-like build).

**Short-term:**
- Reconcile the two competing 2027 timelines into one.
- Scope the POCDEX conversation.
- Decide whether R8 needs to move from "deferred, watch" to "active" given this SJR context.

---

*Related: [SJR To-Be Handover Brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md), [SJR Scope Reply to Adrian](../slack-messages/2026-09-21-W39-sjr-scope-reply-to-adrian.md), [R1 Reduced-Scope Feasibility (pending SJR carve-out note)](../analyses/2026-09-18-W38-r1-reduced-scope-feasibility.md), [PoCDEX Raid Log](../analyses/2026-09-07-W37-pocdex-raid.md)*
