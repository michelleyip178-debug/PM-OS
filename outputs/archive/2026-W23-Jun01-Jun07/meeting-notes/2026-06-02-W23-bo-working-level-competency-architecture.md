# Meeting Notes: BO Working Level — Competency Data Architecture (HR systems vs Compass)

**Date:** 2 June 2026
**Meeting Type:** Working-level architecture / strategy review
**Topic:** Competency data model, source-of-truth, and sync between HR systems (HRPS/Cumulus) and Compass (OTEP)
**Related:** Follows the [25 May BO Strategic Review](../../2026-W22-May25-May31/meeting-notes/2026-05-25-W22-bo-strategic-review-notes.md); touches live Core competency stories (OTEP-105, 112, 310, 311, 340)

> ⚠️ **Internal — strategic.** Contains workforce-planning positioning and a not-yet-decided governance question. Keep to working team + leadership until the SSOT direction is set.

---

## Summary

The team walked through how Compass populates competencies (a 2-step model: HR sync + OTG bank augmentation) and surfaced a core governance gap: **there is no single source of truth for competencies today.** The sharp tension is whether Compass stays a *consumer* of HR data or becomes a *system of record* that syncs back. MVP proceeds unchanged, but two strategic questions (2-way sync, "next role" sourcing) are explicitly left open and need leadership input.

---

## How Competency Population Works Today (shared understanding)

**Step 1 — Pull from HR systems (HRPS / Cumulus):** Competencies are tagged to Job ID by HR admins. Compass retrieves Job ID(s) + competency codes and mirrors them. *What the user sees in HRPS = what they see in Compass* (same source system).

**Step 2 — Augment from OTG Role Profile Bank:** Job family + function + grade → Role ID → OTG competency bank. These are added on top of Step 1, duplicates removed → final set.

**Coverage:** Step 2 alone ≈ 60–70%; Step 1 + Step 2 ≈ 90%.

**Important limitation:** the HRPS/Cumulus data in use today is **static snapshots, not live integration.**

---

## Decisions Made (aligned)

1. **Step 1 (HR sync) is the required baseline; Step 2 is augmentation only.**
   - Why: HR-tagged competencies are the agency-recognised truth; the OTG bank fills coverage gaps.
   - Impact: Confirms the current 2-step model as the MVP approach.

2. **HR systems (HRPS / Cumulus) are the practical source of truth for *roles*.**
   - Why: They reflect real, agency-recognised roles. The OTG bank can surface "fictitious" roles that don't exist in practice, which risks misleading users.
   - Impact: "Next role" sourcing leans toward HR systems, not the OTG bank.

3. **MVP proceeds with the current approach — no major model change now.**
   - Why: The known gaps (SSOT, 2-way sync) are strategic, not MVP blockers.
   - Impact: Unblocks current competency stories; defers the governance call.

---

## The Core Problems Identified

1. **No SSOT for competencies.** The OTG role profile bank isn't used universally — agencies keep their own frameworks and Excel files. → Same role across agencies can carry different competencies; even within an agency, tagging can be inconsistent.

2. **System misalignment.** HRPS vs Compass competencies can diverge if Step 2 differs; job-family/function/grade concatenation may not match the OTG bank.

3. **Role Profile Bank is not authoritative.** It's reference/recommendation only, not mandated — agencies may or may not follow it.

4. **"Next role" definition is weak.** HRPS job roles aren't a progression taxonomy; multiple roles map to the same family/function. → Recommender may suggest wrong/misleading next roles, and gaps get computed against wrong targets.

5. **🔴 Data sync gap (critical).** Sync is one-way: HRPS → Compass ✅, Compass → HRPS ❌. User-added competencies in Compass aren't reflected back; HR appraisal uses stale data; profiles diverge over time.
   - *Verbatim:* "Out of sync… will destroy trust… people will stop using it."

---

## The Strategic Tension (the real decision)

**What should Compass be?**

| Option A — Consumer system | Option B — System of record |
|---|---|
| Displays + enriches HR data | Syncs back to HR systems |
| Accepts mismatch / flexibility | Drives workforce planning + appraisal |

The strong view raised: if Compass is positioned as a **career-development + workforce-planning** tool, it *must* be in sync with HR systems — otherwise it creates dirty data and undermines trust. *"Which one will they trust? We won't fulfil our goal."*

---

## Open Questions (not yet decided)

- [ ] **Should Compass push data back to HR systems (2-way sync)?** — Owner: Michelle to raise with leadership — By: before next governance forum
- [ ] **Final "next role" competency sourcing** (HR-only vs HR+OTG, and how to avoid artificial skill gaps) — Owner: Product/Design — By: before My Development page build
- [ ] **How are user-added competencies handled** if there's no push-back path? — Owner: Product + Eng — By: TBD
- [ ] **Define the SSOT strategy for competencies** — Owner: Michelle (governance) — By: TBD
- [ ] **Did this session resolve OTEP-87 / OTEP-319?** — your daily plan expected the BO Working Level to hold this; it's not in this summary. Confirm whether it was covered or still needs an answer. — Owner: Michelle — By: today

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Raise SSOT + 2-way-sync question with leadership (Mark / stakeholders) — frame as adoption/trust risk | Michelle | This week | 🔴 High | 🔴 Not started |
| Define SSOT strategy for competencies (position paper / decision doc) | Michelle | This week | 🔴 High | 🔴 Not started |
| Finalise "next role" sourcing logic + competency mapping for progression | Product/Design | Before My Dev build | 🟠 Med | 🔴 Not started |
| Validate recommender-engine feasibility given weak HRPS taxonomy | Product/Design | TBD | 🟠 Med | 🔴 Not started |
| Assess technical feasibility of APIs to push data back to HR systems | Eng/Data | TBD | 🟡 Med | 🔴 Not started |
| Review impact of upcoming job-family model change (Q3/Q4) on role mapping + competency linking | Eng/Data | Before Q3 | 🟡 Med | 🔴 Not started |
| Draft OTEP MVP value-prop narrative — why MVP vs existing OTG (manage expectations) | Michelle/Comms | TBD | 🟢 Low | 🔴 Not started |
| Confirm OTEP-87 / OTEP-319 resolution status | Michelle | Today | 🔴 High | 🔴 Not started |

> Most items had no explicit owner in the transcript — owners above are suggested based on role. Confirm before broadcasting.

---

## Key Quotes

- "What I see inside the HR system is the same as what I see in Compass… because we refer to the same source system."
- "The role profile bank is used by OTG only… agencies have their own competency frameworks."
- "It is not mandated… agencies may or may not follow it."
- "Job roles in HRPS are not a proper taxonomy… not designed to define progression."
- "There's no pushing back… Compass is a consumer."
- "Out of sync… will destroy trust… people will stop using it."
- "Otherwise we are creating dirty data… and undermine trust."
- "Which one will they trust? We won't fulfil our goal."

---

## Why This Matters For You (Michelle)

1. **Data governance risk is real and now acknowledged on the record** — you have grounding to raise SSOT at SteerCo/governance: "out-of-sync systems will undermine adoption and trust."
2. **This is a product-positioning decision, not just tech** — needs alignment on whether Compass is an advisory tool or the official career/workforce system before you commit the My Development experience.
3. **Direct links to current work** — touches OTEP MVP scope, metrics credibility, cross-agency alignment, and the HRPS/CSC/OTG integration threads you already own.

---

## Risks / Watch

- **Job-family model change (Q3/Q4)** could reshape role mapping and competency linking — sequence the "next role" decision around it.
- **MVP value-prop gap** — concern that MVP features look weaker than existing OTG; emerging direction is to lead on seamless experience, opportunity discovery, future customisability, and manage expectations actively.

---

## Next Steps

**This week:**
- Take the SSOT / 2-way-sync question to leadership (highest priority — it gates the positioning).
- Start the SSOT decision doc (consider `/decision-doc` — this is a logged-decision-worthy fork: consumer vs system-of-record).
- Close the loop on OTEP-87 / OTEP-319.

**Before My Development build:** lock "next role" sourcing logic.

**Suggested follow-up forum:** governance/SteerCo slot to ratify Compass's positioning (consumer vs system of record).

---

## Appendix: Raw Summary

<details>
<summary>Original summary provided by Michelle</summary>

Full competency-architecture summary covering: current 2-step data model (HR sync + OTG bank), coverage rationale (60–70% → 90%), five identified problems (no SSOT, system misalignment, non-authoritative role bank, weak "next role" definition, one-way sync gap), the consumer-vs-system-of-record tension, My Development page design debates, agency flexibility vs standardisation, static-snapshot data limitation, Q3/Q4 job-family model change risk, MVP value-prop concern, and confirmed/open decisions. Provided 2026-06-03.

</details>

---

*Processed: 2026-06-03 · Next: `/decision-doc` for the SSOT fork · `/status-update` to surface the governance ask · update [decisions-log.md](../../../decisions/2026-05-29-W22-decisions-log.md)*
