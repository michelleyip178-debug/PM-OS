---
date: 2026-08-11
week: 2026-W33
scope: Mark's review feedback on the PS/DS 7-week MVP delay note, tracked ahead of running /decision-doc on the underlying accept/reject question
---

# Mark's PS/DS Note Review — Tracking Log

**Context:** This is the review Mark committed to returning EOD 2026-08-11 (open-items #39, MVP timeline RAID D1/I1). It's line-edit and structural feedback on the PS/DS note draft, not yet the accept/reject decision itself — that decision doc still needs to run once this round of edits is resolved and the note is submission-ready.

---

## Tracking Table

| # | Comment / Change | What it means | Follow-up needed | Status |
|---|---|---|---|---|
| 1 | Mark removed "that" and added "We apologise for the delay." in the Aim paragraph. | Tone is more direct and accountable for the delay. | Decide if the apology line should remain as-is or be softened for PS/DS. | Pending confirmation |
| 2 | New heading "Reasons for Delay" inserted by Mark. | Note is being reframed to lead directly into the delay rationale. | Confirm this replaces/works with the surrounding structure cleanly. | To review |
| 3 | "Background and recap" heading marked for deletion. | Contextual recap of the 9 Jul PSC approval is being removed. | Confirm PS/DS don't need this reminder retained. | To decide |
| 4 | Paragraph on MVP foundational features (competency gaps, career opportunities, CSC catalogue) marked for deletion. | Removes detailed feature explanation. | Check if enough context remains without this for readers unfamiliar with MVP scope. | To review |
| 5 | "Reasons for the Proposed Timeline Adjustment" heading and the "Additional four weeks... pre-UAT" sub-header marked for deletion. | Streamlining/removing what may be a duplicate framing of the reasons section. | Ensure the remaining reasons flow logically without these headers. | To clean up |
| 6 | VAPT expanded by Gek Khiang as "(Vulnerability Assessment & Penetration Testing)". | Clarifies the acronym for senior readers. | Keep — no action needed. | Accepted |
| 7 | Gek Khiang added: "This step is mandatory for us to identify and close any potential security gaps before MVP launch." | Strengthens justification for why VAPT can't be skipped/rushed. | Check wording tone is suitable for a PS/DS-level note. | To refine |
| 8 | SD(WD) and D(ITC) routing approvals both marked "pending" (highlighted yellow). | Clearance chain isn't complete yet. | Follow up to get sign-off before submission. | Pending |
| 9 | **Mark's overall feedback: he is still unsure what the delay is about.** | Despite his edits, the core "why" of the delay may not be landing clearly — likely because the deletions in items 3–5 stripped explanatory content without a clear replacement narrative. | Rework "Reasons for Delay" to give a tight, upfront 2–3 sentence explanation (data validation issues → UAT slip → VAPT buffer) before the detailed breakdown. | **Needs rewrite — prioritized below** |

---

## Root Cause of Item 9

Item 9 ties directly to items 3–5. The new "Reasons for Delay" heading (item 2) was inserted, but the paragraph directly under it is empty — the detailed explanation (data validation, UAT phases, VAPT) starts several paragraphs later as a numbered list with no upfront summary tying it together. Readers have to piece together the "why" from scattered details rather than getting it in one breath.

Cutting "Background and recap" (item 3) and the MVP feature paragraph (item 4) compounds this: a reader not at the 9 Jul PSC loses the grounding needed to understand what's being delayed in the first place.

---

## Fix: Bridging Paragraph (Drafted)

Placed directly after the "Reasons for Delay" heading, before any remaining detail:

> The proposed seven-week delay is driven by two factors. First, more rigorous validation of production data and system integration is required ahead of UAT — discrepancies in data structures and business rules across upstream systems (POCDEX, HRPS, Cumulus, OTG) surfaced during development, requiring four additional weeks to resolve with the respective system owners. Second, mandatory security testing (VAPT) and a three-week contingency buffer for remediation are needed before production deployment, to ensure all vulnerabilities are identified and closed. Together, these push the MVP launch from early Oct 2026 to end Nov 2026.

**Refinement recommended before use:**
1. **Lead with the timeline shift, not end with it.** Move "push the MVP launch from early Oct 2026 to end Nov 2026" to the front of the paragraph — PS/DS-level readers want the so-what before the rationale (matches this workspace's own executive-writing rule: numbers and impact first).
2. **Sharpen "discrepancies in data structures and business rules"** — this is soft for something costing 4 weeks. A more specific clause (e.g., naming the actual POCDEX/HRPS mismatch type) preempts the exact kind of follow-up question that produced Mark's item 9 comment.

## Fix: Sub-headers (Recommended, Not Yet Drafted)

Turn the existing italic signpost lines ("Additional four weeks needed for validation...", "Additional three weeks needed for VAPT...") into proper bold sub-headers under "Reasons for Delay," so the structure reads as:

- **Reasons for Delay**
  - Reason 1: Data Validation and Integration Delay (4 weeks)
  - Reason 2: VAPT and Production Readiness Delay (3 weeks)

## Fix: Minimal Context Restoration (Recommended)

Rather than fully restoring the deleted "Background and recap" and MVP-feature paragraphs (items 3–4), add one grounding sentence: *"The MVP roadmap approved at the 9 Jul PSC targeted an early Oct 2026 launch."* This anchors the delay for readers unfamiliar with MVP scope without re-adding the longer sections Mark cut.

## Fix: Reinforce the Math Up Front

The Aim paragraph states "seven weeks" but doesn't break down 4+3 until Table 1, later in the document. Stating the 4-week + 3-week split explicitly in the opening pre-empts the exact ambiguity Mark flagged.

---

## Open Follow-Ups (Not Yet Resolved)

- [ ] Decide whether the "We apologise for the delay" line (item 1) stays as-is or gets softened — **Owner:** Adrian — **By:** Before resubmission
- [ ] Confirm removing "Background and recap" (item 3) doesn't lose necessary context for PS/DS — **Owner:** Adrian — **By:** Before resubmission
- [ ] Confirm the MVP feature paragraph cut (item 4) doesn't need the one-sentence grounding restoration above — **Owner:** Adrian — **By:** Before resubmission
- [ ] Refine Gek Khiang's VAPT-mandatory wording (item 7) for PS/DS tone — **Owner:** Adrian — **By:** Before resubmission
- [ ] Chase SD(WD) and D(ITC) sign-off (item 8) — still pending, blocks submission regardless of content edits — **Owner:** Adrian — **By:** ASAP, this is now the long pole once content is fixed
- [ ] Draft and insert the bridging paragraph + sub-headers (item 9) — **Owner:** Adrian — **By:** Next, before any other cleanup — this is the fix Mark's own feedback prioritizes

---

## What This Changes About Today's Priority 1

Mark's review has landed on schedule (EOD commitment honored). This is **not yet a decision on accept/reject the 7-week delay** — it's feedback on how the note explains the delay. The actual `/decision-doc` on "do we accept the 7-week MVP delay?" should run once:
1. The bridging paragraph + sub-header fixes are applied (addresses item 9)
2. SD(WD) and D(ITC) sign-off status is confirmed (item 8) — this is now the item most likely to block submission timing, separate from content quality

**Recommend:** Adrian treats content fixes (items 1–7, 9) as today's/tomorrow's writing task, and chases item 8 (routing approvals) in parallel since it doesn't depend on the rewrite. Michelle is informed only — not tracking this through to resubmission; that's Adrian's to own end to end.

---

*Generated: 2026-08-11*
*Source: Mark's tracked review feedback (Slack/doc comments), user-drafted bridging paragraph*
*Related: [MVP Timeline RAID](2026-08-11-W33-mvp-timeline-raid.md) (D1/I1), open-items.md #39*
