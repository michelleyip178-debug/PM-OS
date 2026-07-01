---
date: 2026-06-04
type: demo
meeting: Sprint 2 Demo (Retro + Demo, 16:00)
attendees: Imelda, Xian Zhang, Rama, Thomas (FE demo), Amber/Michelle Chen (design), Barry, Michelle, eng team
note: Two demos shown — Core squad's competency-profile integration, then Pathfinder's listing + detail (Thomas).
---

# Sprint 2 Demo — Thu 4 Jun

## Summary
Both squads demoed. Core showed the **competency profile** pulling real profile data (HRPS/POCDEX) by job ID, with masked data for dev. Pathfinder (Thomas) showed **login (mocked Azure AD) → opportunity listing → detail page on real ingested OTG data.** The honest caveats landed as expected: competency counts, search, filters, and the apply link are **not plugged in yet**. The build is now branded **CareerCompass**. Most discussion was data-exposure risk (Core) and card design differentiation (Pathfinder).

---

## What was demoed

**Core squad — competency profile integration**
- Profile pulls real data by job ID (HRPS or POCDEX), competencies appended from the OTG profile band.
- Three sections: core / functional / self-declared competencies. "View more / view less" appears above 8.
- Data was **masked/randomised for dev** (running on local machines) — UAT will use near-real production data.
- Report-issue button (for when competencies don't load) is built on the front end; back-end logging via PostHog not connected yet (license pending).

**Pathfinder (Thomas) — listing → detail**
- Login via "work ID" → mocked Azure AD page → dashboard. (Real Azure flow only in production.)
- Listing: full list, 15/page with pagination. Cards show name, type, work arrangement, posting date, "closing soon" (≤7 days). Search + side filters **visible but not plugged in.**
- Real ingested OTG data — clean rows loaded, unclean ones flagged. Some duplicates and a wrong-title row visible (data, not display).
- Detail page on real OTG data, formatted "best effort" (source text has no formatting). Competency list + apply link **not plugged in yet.**
- Empty/error fallback states shown (no-results, generic error).

---

## Decisions / alignments

1. **Demo data stays masked until UAT** — real (near-production) data only in the UAT environment.
   - **Why:** Data classification + exposure concern (Xian Zhang) — competency data sits in the app, vendor shouldn't see it. Masking is a dev-stage measure only; connecting to POCDEX/HRPS UAT keys resolves it.

2. **Listing logic confirmed:** show all active opportunities, sorted by posting date descending; "closing soon" = closing within 7 days, counting down (closes today → "closing in 1 day").

3. **SJRs excluded from the demo / Mark & GK showing** — show full work-in-progress to the squad, but only logical milestones to Mark/GK (UAT), to avoid "more questions than answers."

4. **Date format standardised:** short numeric (e.g. 9 June 2026 → 9 Jun 2026 style), single digit if single digit. Consistency across cards.

5. **Header casing → follow GovTech convention** (first character capitalised only), aligned with other GovTech products and the design library. Amber/designer to confirm against PSD site.

6. **Product name is CareerCompass** — live in the build (logo still placeholder).

---

## Action Items

| Task | Owner | Due | Priority | Note |
|------|-------|-----|----------|------|
| Plug in competency count/list on cards + detail | Thomas / eng | Next sprint | 🔴 | Waiting on competency data work |
| Plug in apply link (FormSG / "Apply via OTG") on detail | Thomas / eng | Next sprint | 🔴 | Ties to OTEP-319/87 |
| Connect search + filters | Thomas / eng | Next sprint | 🔴 | Visible but inert in demo |
| Connect report-issue button to PostHog logging | eng | After PostHog license | 🟡 | Button greys out once clicked, per design |
| Decide report-issue follow-up flow (ack email? "contact Jake"?) | Imelda | This week | 🟡 | How users hear back after reporting |
| Fix card border differentiation (SJR vs closing-soon) | Amber / Michelle Chen | Next sprint | 🟡 | Same-shape borders confuse the two states |
| Confirm header casing against PSD/GovTech standard | Amber | This week | 🟢 | First-char-cap convention |
| Resolve "first name / last name" parsing (POCDEX sometimes empty) | eng | Next sprint | 🟡 | Names can look like rubbish if source is rubbish |

---

## Issues / risks surfaced

1. **Competency data exposure (Xian Zhang).** Real competency data lives in the app; concern about exposing the whole bank. Resolved for now by masking in dev; real fix is connecting to POCDEX/HRPS UAT keys. *Take the agency-data-classification piece offline.*

2. **Secondment flag > primary role (new, surfaced yesterday).** OTEP currently takes the *primary* position for title/agency. But the team found the **secondment flag takes precedence over primary** — an officer seconded out (e.g. PSD→MOE) should show the secondment record. **This isn't in the current ticket** → needs a supplementary ticket. *(Counter-intuitive rule; confirm with the data owner.)*

3. **OTG data is dirty** — duplicates, wrong titles, unformatted description text. Same root issue as standup/grooming (unrecognised prefixes, parse failures). The demo made it visible on real data, which is the point — it shows what ops needs to clean.

4. **Card design differentiation unresolved** — SJR vs "closing soon" borders look too similar; affects the whole design system. Amber + Michelle Chen working the icon/label treatment. Flagged as "not a small thing — affects the whole design."

---

## Pathfinder takeaways (for you)

- **Your demo run sheet framing held:** the spine is clickable on real OTG data, but competency/apply/search/filters are honestly "not plugged in yet." That's the build-vs-Done gap you prepped — it showed exactly as expected.
- **The secondment-flag finding is a real new scope item** — supplementary ticket needed. Worth adding to the S4/S5 backlog (profile correctness).
- **Mark/GK showing gets a milestone gate** — don't show them WIP; pick a logical endpoint. Aligns with your two-tier demo decision (2026-06-02).
- **Report-issue follow-up flow is a small PM decision you co-own** with Imelda — how users hear back after reporting.

---

## Timeline Risks
- **TIMELINE RISK:** Competency, apply link, search, and filters are all "next sprint" — that's the S3 spine + S4 carry-over stack. Confirms the spine is carrying into S4 (matches the catch-up goal). No new conflict, but it's the same load showing up again.

---

## Context for Future Reference
- Demo prep + framing: [demo run sheet](2026-06-04-sprint2-demo-runsheet.md).
- Dirty-data thread → [standup](2026-06-04-standup.md) + [grooming](2026-06-04-backlog-grooming.md) (same OTG data-quality root).
- CareerCompass name confirmed 2026-06-02 (decisions-log).

<details><summary>Raw transcript</summary>

Otter.ai transcript — Sprint 2 Demo (Retro + Demo session). Two demos: Core competency-profile integration, then Pathfinder listing/detail (Thomas presenting). Source: `[Weekly] OTEP - Sprint planning_ Backlog grooming_otter_ai_transcript (1).txt`.

</details>
