---
date: 2026-09-25
week: 2026-W39
type: meeting-notes
topic: Opportunities in Career Compass — MVP scope direction from Mark & GK (via Xian)
meeting_type: stakeholder review / scope discussion
status: draft — flags a major conflict with the current R1 risk register, needs reconciliation before either version is treated as authoritative
---

# Meeting Notes: Opportunities MVP Scope — Mark & GK Direction (via Xian)

**Date:** 24 Sep 2026 evening → 25 Sep 2026 morning (spans two sessions per the source summary)

**Source:** UAT Compass | Teams (channel/summary, not a raw transcript — this is already a structured recap, likely written by or for Xian Zhang Guo)

**Attendees:** Not explicitly listed in the source. Named participants: Adrian Ang (PSD), Xian Zhang Guo (PSD). Mark and GK are referenced as having set the "agreed direction" but weren't necessarily in this specific exchange — Xian is relaying their position, not presenting live from them. Worth confirming who was actually in the room versus whose position is being reported secondhand.

**Meeting Type:** Stakeholder scope discussion / internal debate on MVP direction

---

## ⚠️ Read This First — Conflicts With the Current R1 Risk Register

This meeting describes an MVP direction that is **materially different, and in some ways contradictory, to what the [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) currently has as confirmed R1 scope.** Flagging every conflict explicitly, since this needs active reconciliation, not silent merging:

1. **STIPs/Gigs application flow.** This meeting: officers continue applying via FormSG, OTG remains the posting source, Compass pulls in for discovery only. **The register (R-25, R-27, Epic A one-pager):** STIPs & Gigs is fully native in Compass — self-serve creation, native structured-form apply, in-app review, zero HR role, no OTG dependency at all. These are not compatible descriptions of the same feature. One of these is stale.

2. **Internal Jobs / IJR / Secondments application flow.** This meeting: officers redirect back to OTG to apply, for all three types, no distinction drawn between them. **The register:** Internal Jobs and Secondment redirect to HRPS/Cumulus specifically (not OTG) — R-07's confirmed architecture explicitly established Cumulus pushes into HRPS, Compass pulls from HRPS only, with no OTG involvement in that data flow at all. IJR, as of yesterday's final resolution (R-25), is fully native in Compass — self-serve creation, in-app apply, in-app HR review — the opposite of "redirect back to OTG."

3. **SJR.** This meeting: Xian argues for dropping SJR development effort since Compass isn't meant to actively promote it. **The register (R-13):** already resolved — SJR-the-programme stays on OTG through 2027, Compass doesn't build SJR's mechanics. This part may actually be consistent, just described from a different angle (Xian arguing FOR the thing that's already decided, possibly without realizing it's already decided).

4. **The open questions listed in this meeting** ("are Internal Jobs truly posted in OTG first, or created in HRPS/Cumulus and surfaced in OTG afterward?") **were already answered and resolved in the register on 23 Sep** (R-07: Cumulus pushes into HRPS, Compass pulls from HRPS only, confirmed redirect to whichever system hosts the posting). If this question is genuinely still being debated in this room, the 23 Sep resolution either didn't reach this group, or something has changed that reopened it.

**The most likely explanation, not yet confirmed:** this meeting may be describing an **earlier, MVP-stage** scope (possibly pre-dating or separate from "R1" as the register defines it — the source doc says "MVP," not "R1," throughout). If MVP and R1 are being used as two different scope tiers by different parts of the org, that's a real and urgent terminology gap, not just a content conflict. Recommend clarifying this distinction before anything else.

---

## Summary

Xian Zhang Guo relayed a "lean MVP" direction he attributes to Mark and GK: STIPs/Gigs keep using FormSG and OTG for posting, with Compass as a discovery-only pull-through; Internal Jobs/IJR/Secondments similarly stay OTG-sourced with Compass redirecting officers back to OTG to apply. Adrian pushed back the following morning, arguing the team should first understand where Internal Jobs actually originate (OTG-native vs. HR-system-native, just duplicated into OTG) before locking this down, since a direct HRPS/Cumulus consumption path could reduce HR disruption and improve the officer journey. Xian countered that the duplication problem is rare and will resolve itself once OTG sunsets, so the extra integration effort may not be worth it. No final decision emerged — Xian's action item is to document the discussion, align with Mark and GK, and produce a full posting/discovery/application journey map covering all opportunity types.

---

## Decisions Made

**None of this was actually decided in this exchange — it's framed as an active debate, not a resolution.** The one thing presented as an existing "agreed direction" (STIPs/Gigs and Internal Jobs/IJR/Secondments both OTG-sourced, redirect-to-apply) is attributed to Mark and GK secondhand, via Xian, not confirmed as a decision made in this specific meeting. Treat this whole document as capturing an open debate, not a decision log entry — nothing here should be added to the [decisions log](2026-05-29-W22-decisions-log.md) until it's reconciled against the register and confirmed as current.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Reconcile this meeting's MVP framing against the R1 Risk Register's confirmed scope (R-07, R-25, R-27) — determine if "MVP" and "R1" are the same scope tier or different ones | Michelle Yip | Immediate — blocks trusting either document | Not started |
| Investigate whether Internal Jobs postings originate in OTG or in HRPS/Cumulus and are merely surfaced in OTG | Adrian Ang (requested), likely needs Rama/technical input | Not stated | 🔴 High — this was already answered in the register 23 Sep (R-07); needs re-confirming or the register needs correcting | Not started |
| Check whether Compass can deep-link officers to a specific OTG posting vs. only the general Opportunities landing page | Unclear — technical question, likely Rama/Barry | Not stated | Medium | Not started |
| Check whether SJR can technically be surfaced in Compass the same way Internal Jobs are, and whether the effort is justified | Unclear | Not stated | Low-Medium — SJR's non-inclusion is already resolved in the register (R-13); this may be moot | Not started |
| Document and summarize this discussion; align with Mark and GK | Xian Zhang Guo | Not stated | 🔴 High — this is the path to resolving the conflict flagged above | In progress (this document may be the output of that action) |
| Produce a user journey map covering Posting, Discovery, and Application for STIPs, Gigs, Internal Jobs, IJR, Secondments, and SJR | Xian Zhang Guo | Not stated | 🔴 High | Not started |

**Notes:**
- Every action item above needs a real due date — none were stated in the source.
- The journey-map deliverable Xian is planning to produce would substantially duplicate the [Mobility Programmes Journey Map Index](../journey-maps/2026-09-22-W39-mobility-programmes-journey-map-index.md) already maintained in this workspace, covering the same six opportunity types. Worth sharing that existing artifact with Xian before he builds a parallel one from scratch — could save significant duplicate work, or could surface that his version is intentionally scoped differently (MVP vs. R1) in a way that clarifies the terminology question above.

---

## Key Insights & Quotes

**Adrian's framing (paraphrased, no verbatim quotes in the source):** the core instinct is "understand the actual system of record before designing around an assumption." He's specifically questioning whether OTG is the true source for Internal Jobs or just a downstream copy — if it's the latter, Compass could plausibly skip OTG as an intermediary entirely and pull from HRPS/Cumulus directly, which "would reduce disruption to HR officers and improve the officer journey."

**Xian's framing (paraphrased):** effort-justification argument — HRPS/Cumulus teams reportedly indicated duplicate postings are rare, OTG is being sunset anyway, so the "problem" of building extra integration to solve duplication "may disappear naturally." Also raised for the application-integration proposal specifically: "CEG's response timeline remains uncertain," and Mark was "already comfortable" with the simpler OTG-redirect approach, so extending scope now may not be worth it.

**The framing worth sitting with:** Xian's argument is essentially "don't build for a transitional state that's going away anyway." That's a reasonable instinct in isolation, but it directly conflicts with R-07's confirmed architecture, which already committed to a specific technical design (Compass pulls from HRPS, not OTG, for Internal Jobs) for exactly the reason Adrian is raising here — reducing dependency on OTG as an intermediary. If Xian isn't aware R-07 already resolved this in the direction he's now separately worried is too much effort, that's worth surfacing directly, since the "shall we build the HRPS integration" debate may already be over, just not communicated to this room.

---

## Open Questions

- [ ] Is "MVP" in this meeting the same scope tier as "R1" in the risk register, or a distinct, earlier tier? — **Owner:** Michelle Yip — **By:** Before any further reconciliation, this determines whether there's a real conflict or a terminology mismatch
- [ ] Does Mark/GK's "agreed direction" (OTG-sourced, redirect-to-apply for everything) reflect an actual decision made in a meeting Michelle wasn't part of, or is this Xian's read/proposal being presented as settled? — **Owner:** Michelle Yip, confirm with Xian directly — **By:** Immediate
- [ ] Are Internal Jobs truly posted in OTG first, or created in HRPS/Cumulus and surfaced in OTG afterward? — **Owner:** Adrian Ang / technical team — **By:** Not stated. **Note: this was already answered in the register 23 Sep (R-07) — Cumulus pushes into HRPS, Compass pulls from HRPS only. Someone needs to check why this is being asked again.**
- [ ] Can Compass deep-link to a specific OTG posting, or only the general landing page? — **Owner:** Unclear — **By:** Not stated
- [ ] Is SJR development effort justified for MVP? — **Owner:** Unclear — **By:** Not stated. **Note: SJR's exclusion from R1 build is already resolved (R-13) — this question may already be answered, just not visible to this group**

---

## Blockers

1. **Two documents describing the same scope, pointing in different directions**
   - **Blocked by:** No reconciliation has happened yet between this meeting's framing and the R1 risk register's confirmed architecture
   - **Impact:** If both are treated as live simultaneously, engineering could receive contradictory direction — one saying "build native Compass apply for STIPs & Gigs and IJR," the other saying "redirect everything to OTG"
   - **Resolution:** Needs a direct conversation with Xian (and ideally Adrian, Mark, GK) to establish which document is current, or whether they're describing genuinely different scope tiers

---

## Timeline Risks

- **TIMELINE RISK:** This meeting's open questions about Internal Jobs' data source were already closed in the register on 23 Sep. If this group has been operating on outdated information for two days, any work already done based on this meeting's "redirect to OTG" framing needs to be checked against what's actually been built or is being built per R-07/R-25's confirmed architecture.
- **TIMELINE RISK:** Xian's planned journey-map deliverable has no due date. Given this directly gates resolving the scope conflict above, an open-ended timeline on it is itself a risk — recommend pushing for a specific date.

---

## Next Steps

**Immediate (This Week):**
- Michelle to reach out to Xian directly: share the current R1 Risk Register and the Mobility Programmes Journey Map Index, and ask whether "MVP" in his summary is the same scope as "R1" in the register
- Confirm with Adrian whether the Internal-Jobs-data-source question is genuinely still open on his end, or whether he's aware of R-07's 23 Sep resolution and is asking something different
- Flag to whoever owns engineering execution: don't build against this meeting's "redirect to OTG for STIPs/Gigs and IJR" framing without confirming it against the register first, given the direct conflict

**Short-term (Next 2 weeks):**
- Once terminology/scope-tier confusion is resolved, fold whichever framing is actually current into a single source of truth — don't let two parallel "what's the MVP/R1 scope" narratives keep running
- If Xian's journey-map deliverable is still planned, connect him with the existing Mobility Programmes Journey Map Index to avoid duplicate work

**Follow-up Meeting:**
- Not scheduled in the source. Given the severity of the conflict, recommend requesting one specifically to reconcile this with Adrian, Xian, and ideally Mark/GK directly rather than through secondhand relay.

---

## Context for Future Reference

This is a **structured summary, not a raw transcript** — likely already written by or for Xian, sourced from a Teams channel labeled "UAT Compass." That means some editorial framing and emphasis may already be baked in (e.g., how "Mark & GK's agreed direction" is characterized) rather than a neutral record of exactly what was said. Worth getting the raw transcript or talking to a direct participant if the stakes of this reconciliation turn out to be high.

The deeper pattern worth naming: this is now the second time in two days that a scope decision believed to be settled in the register turned out to still be actively contested in a room Michelle wasn't in (the [backlog grooming meeting](2026-09-24-W39-r1-backlog-grooming.md) yesterday was the first, though that one turned out to validate the eventual register decision rather than conflict with it). Worth considering whether there's a communication gap between wherever "R1 scope" gets decided and the wider team/BO groups discussing "MVP scope" — these might be the same conversation happening twice, out of sync.

---

*Related: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, R-13, R-25, R-27), [R1 Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md), [Mobility Programmes Journey Map Index](../journey-maps/2026-09-22-W39-mobility-programmes-journey-map-index.md), [R1 Backlog Grooming meeting notes](2026-09-24-W39-r1-backlog-grooming.md)*
