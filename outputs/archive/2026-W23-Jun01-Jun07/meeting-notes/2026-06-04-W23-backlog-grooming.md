---
date: 2026-06-04
type: backlog-grooming
attendees: Imelda (Core PM), Amber (design), Xian Zhang (BO), Michelle (Pathfinder PM, content lead), Barry (eng/advisory), Speaker1 (engineer)
duration: ~55 min
note: Cross-squad — most of the session was OTEP-Core's competency-inference feature (Imelda's squad). Michelle led the Pathfinder/OTG portion at the end.
---

# Backlog Grooming — Thu 4 Jun

## Summary
Most of the session groomed the **competency-inference feature** (Core squad, Imelda) — CV upload → engine returns 8 inferred competencies. The big unresolved thread was whether to show competencies already in the user's profile. Two strategic threads for Pathfinder: **Xian Zhang pushed for an interim apply form** for agencies still on OTG (deferred to R1), and **Michelle surfaced an OTG data problem** — unrecognised opportunity-type prefixes. The OTG file-upload UI you flagged is real and the team is exploring it, likely landing **Sprint 5 or 6.**

---

## Decisions Made

1. **Competency list shows all 8 inferred, including ones already in profile — don't de-duplicate, don't differentiate role vs self-declared (default)**
   - **Why:** Users want to see what their CV actually surfaced. Showing only "new" ones risks an empty/confusing page. Michelle pushed for completeness; Xian Zhang for simplicity (don't make the user think).
   - **Caveat:** Two options were floated (Option 1 = exclude existing, show only new; Option 2 = show all, don't differentiate). **Landed on Option 2, pending an Intel-team check** on whether returns could exceed 8 (then categorisation needed).
   - **Owner:** Imelda

2. **AI-generated content needs a mandatory checkbox/disclaimer before generating**
   - **Why:** Security/compliance (Soumya, security engineer) — policy requires explicit acknowledgement when something is AI-generated. The "generate" button stays greyed until checked.
   - **Owner:** Imelda (has the policy doc)

3. **Competency descriptions render as plain text (no formatting) for now**
   - **Why:** Source Excel (from HRPS) has no formatting to carry. Barry/eng to do a discovery on whether Excel formatting (bullets, paragraphs) can be preserved.
   - **Owner:** Eng (discovery)

4. **Interim apply form for OTG-only agencies → deferred to R1, not built now**
   - **Why:** Xian Zhang asked for an interim application form to bridge agencies still posting on OTG (not on OTEP) during the parallel-running period. Michelle: this is R1 scope (R1 focus is the end-to-end opportunity/apply experience). Ties to the ATS discussion (still un-had with the ATS team — Adrian flagged "sometime in June").
   - **Owner:** Xian Zhang (BO) to carry into R1; ATS chat still to be scheduled

5. **Unrecognised OTG opportunity-type prefixes → left out of ingestion for now**
   - **Why:** OTG types are free-text prefixed on the title (STIP/Gig/SJR). Incoming data has unrecognised prefixes ("public service for good," "others"). Can't categorise → leave out until DevOps/DT confirms how to default them.
   - **Owner:** Michelle (messaged DevOps/DT team)

---

## Action Items

| Task | Owner | Due | Priority | Note |
|------|-------|-----|----------|------|
| Check with Intel team: can inference return >8? If so, need categorisation | Imelda | Before build | 🔴 | Gates the "show all" decision |
| Pull the AI-disclaimer policy doc (Soumya) | Imelda | This week | 🟡 | Confirms mandatory checkbox |
| Discovery: can we preserve Excel formatting in competency descriptions? | Eng/Barry | Next sprint | 🟡 | Affects readability |
| Confirm how to default unrecognised OTG type prefixes | Michelle → DevOps/DT | This sprint | 🔴 | Blocks clean ingestion |
| Schedule the ATS discussion (OTEP × ATS team) | Michelle/Adrian | June | 🔴 | Gates the R1 apply/creation path |
| Carry interim-apply-form ask into R1 scope | Xian Zhang (BO) | R1 planning | 🟡 | Don't build in MVP |
| Whitelist the CV-upload app URL + test if FormSG/proxy blocks upload | Eng | Before UAT | 🟡 | Xian Zhang raised upload-blocking risk |
| Research how other portals show "newly-added" competency highlight | Amber | Backlog | 🟢 | Bonus feature, parked |

---

## Pathfinder-Specific Takeaways (your squad)

**1. The OTG file-upload UI is real — and it's S5/S6, not S4.**
Michelle confirmed the team is exploring "a UI for users to plunk in the Excel/CSV file, picked up by the engine in the background." **Likely Sprint 5 or 6.** This answers your earlier question directly: it's an ops-facing import UI, not officer-facing, and it's *not* S4 scope. Don't groom it into S4.

**2. Sprint 5 is mostly WOG AD + back-end stitching.**
Michelle: S5 = WOG AD domain linkage + productionalising the API for officer profiles (Imelda's side) + cross-squad back-end. Pathfinder's S5 visible target: "ideal state of opportunity listing — filters + search, then detail linking out to FormSG and Careers@Gov." **This matches the adopted plan.**

**3. The OTG prefix problem is the standup data-error issue, confirmed at squad level.**
Same root cause Leo + Pow Hwee raised this morning. Now it's a cross-team ask to DevOps/DT to clean prefixes at source. Feeds OTEP-192/348/358.

**4. Soft-launch / SEO thread (end of transcript, fragmented).**
You + Barry discussed publishing early August for SEO, with a maintenance/coming-soon banner, and approvals (VAPT/go-live) needed early August. You agreed to take it offline with Barry. *Loosely captured — confirm the next step.*

---

## Open Questions

- [ ] Can the inference engine return more than 8 competencies? — **Imelda → Intel team** — before build
- [ ] How should unrecognised OTG type prefixes default? — **Michelle → DevOps/DT** — this sprint
- [ ] When is the ATS discussion happening, and who owns it? — **Michelle/Adrian** — June
- [ ] Does the early-August soft-launch/SEO plan affect Pathfinder's timeline? — **Michelle → Barry** (take offline)

---

## ⚠️ Notable — your prepped S4 intake didn't get groomed

You led the Pathfinder portion — but it was the **OTG ingestion / data-quality / S5-direction** thread, not the **S4 C@G + apply backlog** you prepped. Your prepped intake — OTEP-319 apply, 86/317 filters, 87/88/89 C@G, the OTEP-348 sharpen, the 127/130 in-or-out call — **never got sized in this session.**

**So the S4 stories still need grooming before Sprint Planning (Thu wk 2).** Your [grooming brief](../analyses/grooming-brief-2026-06-04.md) and [prep doc](2026-06-04-W23-grooming-prep-s4-s5.md) are still live and unused — the prep holds, it just didn't get spent today. Flag at standup or book a focused Pathfinder grooming slot.

---

## Timeline Risks

- **TIMELINE RISK:** Michelle placed the OTG upload UI in "Sprint 5 or 6" and WOG AD linkage in S5 — but the [adopted plan](../analyses/2026-06-04-W23-adopt-powhwee-plan-reconciliation.md) has S5 auth as "realistic landing" gated on WOG AD onboarding (#26), which hasn't started (2+ wk lead). If WOG AD slips, both the S5 auth *and* the API productionalisation Michelle described slip with it. Confirm the WOG AD clock is actually running.
- **TIMELINE RISK:** Soft-launch "early August" overlaps VAPT (early Aug, per decision 2026-06-02) and feature freeze (end S8). Tight. Confirm sequencing with Barry.

---

## Context for Future Reference
- Interim-apply-form → R1: aligns with the native-apply→R1 amendment (decision 2026-06-04) and the ATS pivot.
- OTG prefix problem → feeds OTEP-192/348/358 (nil-date + data quality). Same issue as [today's standup](2026-06-04-W23-standup.md).
- Competency feature is Core-squad; relevant to Pathfinder only via OTEP-87's competency block (cut from S4, gated on SSOT #18).

<details><summary>Raw transcript</summary>

Otter.ai transcript — [Weekly] OTEP Sprint planning / Backlog grooming. Full text retained in source file: `[Weekly] OTEP - Sprint planning_ Backlog grooming_otter_ai_transcript.txt`. Key speakers: Imelda (Core PM), Amber (design), Xian Zhang (BO), Michelle (Pathfinder lead), Barry (eng/advisory), Speaker 1 (engineer).

</details>
