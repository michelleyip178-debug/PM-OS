# Meeting Notes: Huiting Lian — POCDEX Data Sharing Slack Message

**Date:** 2026-07-10

**Format:** Slack message (async, one-way from Huiting Lian)

**Participants:** Huiting Lian (sender); Compass team (recipient, presumably Michelle/Rama/Imelda)

**Meeting Type:** Stakeholder communication — data governance follow-up

---

## Summary

Huiting confirms POCDEX's team needs internal time to work out how to operationalise their read-replica environment (UAT and Prod) for sharing data with Compass by October, with a response promised by end of next week. She restates — now more concretely — that Compass must first firm up its data requirements before testing can start: specific fields, population coverage, filtering criteria, transfer frequency, delta vs. full load, testing scenarios, and WD Director approval to obtain data from DO. This is the same core ask as open item #55, now sharpened with a hard October target and a fuller list of exactly what's missing.

---

## Decisions Made

No decisions were made in this message — it's a status update plus a restated blocking ask, not a resolution.

1. **POCDEX needs internal discussion time before confirming UAT/Prod read-replica operationalisation**
   - **Why:** Sharing data with Compass by October requires POCDEX's own internal alignment on how their read-replica environments will support this.
   - **Who said it:** Huiting Lian.
   - **Impact:** POCDEX's side isn't blocked on Compass right now — they're doing their own internal work in parallel and will revert by end of next week (~17 Jul).

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm relevant data fields Compass needs from POCDEX | Rama / Imelda (per #55 ownership) | Before testing can start | 🔴 High | 🔴 Not Started |
| Confirm population coverage (which officers/records) | Rama / Imelda | Before testing can start | 🔴 High | 🔴 Not Started |
| Define filtering criteria for certain employment records | Rama / Imelda | Before testing can start | 🔴 High | 🔴 Not Started |
| Confirm frequency of data transfer | Rama / Imelda | Before testing can start | 🔴 High | 🔴 Not Started — connects directly to open item #56 (sync cadence, still unanswered as of 8 Jul) |
| Decide whether the API needs delta loads, full loads, or both | Rama / Imelda | Before testing can start | 🔴 High | 🔴 Not Started |
| Define testing scenarios | Rama / Imelda | Before testing can start | 🟡 Medium | 🔴 Not Started |
| Obtain WD Director approval for obtaining data from DO | Michelle → Rama/relevant approver | Before testing can start | 🔴 High | 🔴 Not Started — new, specific approval requirement not previously tracked this explicitly |
| Huiting's team to revert with an internal update on UAT/Prod read-replica operationalisation | Huiting Lian | End of next week (~17 Jul) | 🟡 Medium | 🟡 In Progress — her side, not ours |

**Notes:**
- This message effectively packages open item #55's existing "Level 1 data requirements" ask into a concrete checklist. Recommend treating this list as the actionable breakdown of #55, rather than a new parallel ask.
- **WD Director approval for obtaining data from DO is a new, explicit requirement** not previously called out this specifically in prior tracking — worth confirming who "WD Dir" refers to and getting this approval path started early, since approval processes often take longer than expected.
- No due date was given for Compass's response beyond the implicit urgency ("without these requirements being firmed up... risks significant back-and-forth") — recommend proposing a concrete date back to Huiting given the October target, consistent with the standing recommendation on #55.

---

## Key Insights & Quotes

**On the real driver behind this ask:**
- Huiting's closing line is worth preserving verbatim: *"Without these requirements being firmed up, proceeding directly to the testing phase risks significant back-and-forth, which would cost both time and effort for all parties involved."* This is a process-protection argument, not just a bureaucratic gate — she's flagging that skipping this step costs more time later, not less.

**On timeline:**
- October is now an explicit target for data sharing to be operational — this is new information. Previously, the timeline pressure was framed around VAPT prep (per open item #56, "Michelle flagged need by Aug for VAPT prep") — worth checking whether "share data by October" and "VAPT prep by August" are the same deadline pressure restated, or two separate dates that need reconciling.

**On what's actually new here vs. already known:**
- Six of the seven data-requirement items Huiting lists (fields, coverage, filtering, frequency, delta/full load, testing scenarios) map directly onto the Level 1/Level 2 framework from the 2026-07-06 thread. The one genuinely new, specific item is **WD Director approval for obtaining data from DO** — this wasn't previously broken out as its own explicit checklist item.

---

## Timeline Risks

- **TIMELINE RISK:** This message sets an implicit **October** target for POCDEX-Compass data sharing to be operational. Open item #56 separately tracks an **August** need ("Michelle flagged need by Aug for VAPT prep"). These two dates may refer to different things (data sharing live vs. VAPT scope needing sync-cadence clarity), but worth explicitly reconciling — if VAPT prep in August depends on data actually flowing, and data sharing isn't targeted to be ready until October, that's a real sequencing gap needing escalation, not just a note.
- **TIMELINE RISK:** Open item #55 already has Rama's draft response to Huiting's first questions "due week of 13 Jul" — this message arrived 2026-07-10, before that date. Worth confirming Rama's response, once shared, actually addresses the fuller checklist in this message (fields, coverage, filtering, frequency, delta/full, testing scenarios, WD Dir approval) rather than just the original narrower ask.

---

## Open Questions

- [ ] Who is "WD Dir" and what does their approval process for obtaining data from DO typically take? - **Owner:** Michelle to identify - **By:** Before this becomes a late-stage surprise
- [ ] Does the October target here reconcile with the August VAPT-prep need already tracked in open item #56, or are these two separate deadlines that need to be sequenced explicitly? - **Owner:** Michelle - **By:** Before responding to Huiting
- [ ] Does Rama's draft response (due week of 13 Jul per #55) already cover this fuller checklist, or does it need to be expanded? - **Owner:** Michelle to check with Rama - **By:** Before week of 13 Jul

---

## Blockers

1. **Compass's data requirements aren't yet firmed up, blocking any testing-phase start**
   - **Blocked by:** Rama/Imelda haven't yet produced the Level 1 data domain list (already tracked as blocking in open item #55, unchanged status).
   - **Impact:** POCDEX won't move to testing without this — Huiting is explicit that skipping ahead risks costly back-and-forth for both sides.
   - **Resolution:** This message gives a much more concrete checklist than the original #55 ask — worth using it directly as the working document for Rama/Imelda's response, rather than re-deriving requirements from scratch.

2. **WD Director approval path is unclear**
   - **Blocked by:** No one currently identified as owning this approval step.
   - **Impact:** If this approval process is slow (as governance approvals often are), it could become the real critical-path item even after data requirements are defined.
   - **Resolution:** Identify who "WD Dir" is and what their approval timeline looks like now, in parallel with the data-requirements work, rather than sequencing it after.

---

## Next Steps

**Immediate (This Week):**
- Confirm with Rama whether the draft response due week of 13 Jul already covers this fuller checklist (fields, coverage, filtering, frequency, delta/full, testing scenarios, WD Dir approval).
- Identify who "WD Dir" is and start that approval conversation in parallel, not sequentially after data requirements are finalized.
- Reconcile the October data-sharing target against the August VAPT-prep need from open item #56.

**Short-term (Next 2 Weeks):**
- Rama/Imelda to produce the Level 1 data domain list and data flow diagram (already tracked in #55) — use this message's checklist as the concrete spec to work against.
- Respond to Huiting with a proposed date for Compass's requirements to be ready, rather than leaving the timeline open-ended.

**Follow-up Meeting:**
- **Trigger:** Huiting's team reverts by end of next week (~17 Jul) on their internal UAT/Prod read-replica discussion.
- **Purpose:** Align Compass's data requirements timeline against POCDEX's own internal readiness timeline.
- **Attendees:** Huiting Lian, Rama, Imelda, Michelle (per existing #55 pattern).

---

## Context for Future Reference

This message is a direct continuation of the thread already tracked as **open item #55** — it doesn't introduce a new ask so much as convert Huiting's earlier, more conceptual Level 1/2/3 framework into a concrete, actionable checklist. The one genuinely new element is the **WD Director approval for data-from-DO** requirement, which should be added explicitly to #55's tracking.

This also connects to **open item #56** (POCDEX sync cadence, still unanswered as of 8 Jul) — the "frequency of data transfer" and "delta vs. full load" questions in this message are the same underlying unresolved question as #56, just phrased from POCDEX's side rather than Compass's. Worth linking these explicitly so the same question isn't chased twice through two different threads.

**Timeline note worth flagging to leadership:** an October target for data sharing, set against an August VAPT-prep need (per #56), may represent a real sequencing risk if VAPT scope depends on live POCDEX data. This is worth surfacing rather than assuming the two deadlines are compatible by default.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: Slack message from Huiting Lian, 2026-07-10, in response to a Compass-side outreach (referenced "as discussed over Teams" — prior conversation not included in this input).

Full message text:

> Thank you for reaching out.
> We will need some time internally to discuss how to operationalise POCDEX's read-replica environment (both UAT and Prod) in order to share data with the Compass system by October. We aim to revert to you by end of next week.
>
> In the meantime, as discussed over Teams, we would require Compass's team to first confirm their data requirements. This includes the relevant data fields, population coverage, filtering criteria for certain employment records, frequency of data transfer, whether the API will support delta or full loads, the various testing scenarios, and ultimately WD Dir's approval for obtaining data from DO.
>
> Without these requirements being firmed up, proceeding directly to the testing phase risks significant back-and-forth, which would cost both time and effort for all parties involved.

</details>

---

*Generated: 2026-07-10*
*Next: Confirm Rama's draft response (due week of 13 Jul) covers this full checklist; identify WD Dir approval path; reconcile October vs. August timeline pressure.*
