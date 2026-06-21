---
date: 2026-06-16
week: W25
topic: PSFG Opportunities — Adhoc Alignment
attendees: Michelle, Adrian, Xian Zhang
type: Adhoc stakeholder discussion
relates_to: I-016, I-018, OTEP-86, OTEP-289
---

# Meeting Notes: Adhoc — PSFG Opportunities

**Date:** 2026-06-16 (W25)

**Attendees:** Michelle, Adrian, Xian Zhang

**Type:** Adhoc alignment — PSFG category model and MVP scope

---

## Summary

Aligned with Adrian and Xian Zhang on two key PSFG positions: (1) PSFG opportunities must still be tagged with competencies even if they sit in their own category, and (2) PSFG is excluded from MVP because they are voluntary with scarce application data in OTG. Xian Zhang also confirmed the transition plan excludes Secondments and Internal Jobs from OTG in the first intake due to non-SSO UX friction. Diana disagrees with the current PSFG proposal and is coming in Thursday to raise her objections. Need to prep a defensive narrative before then.

---

## Decisions Made

**1. PSFG must be tagged with competencies**

- **What:** Even if DevOps categorise PSFG under its own separate category, each opportunity still requires competency tagging.
- **Why:** Competency tagging is core to how CareerCompass surfaces relevant opportunities to officers. Separating PSFG as a category does not exempt it from this requirement.
- **Who decided:** Adrian + Xian Zhang aligned, Michelle present.
- **Impact:** PSFG records without competency tags will still hard-skip at ingestion (pending Pow Hwee confirming Q-5 from the decision log).

**2. PSFG excluded from MVP**

- **What:** PSFG will not be included in the MVP catalogue.
- **Why (two reasons):**
  - PSFG opportunities are voluntary in nature — officer intent is materially different from STIPs, Gigs, or Jobs.
  - OTG data confirms the PSFG group has scarce applications relative to total opportunities posted. Low signal for MVP launch.
- **Who decided:** Adrian + Xian Zhang aligned.
- **Impact:** OTEP-289 taxonomy spike can note PSFG as post-MVP. Update I-016 status accordingly.

**3. Secondments and Internal Jobs excluded from first OTG intake**

- **What:** The transition plan (owned by Xian Zhang) explicitly excludes Secondments and Internal Jobs from OTG in the first import batch.
- **Why:** Non-SSO user experience. When an officer clicks to apply, they are taken to OTG's apply flow which does not support SSO — creating a jarring handoff. Not acceptable for MVP.
- **Impact:** The Jobs category at MVP launch will draw primarily from C@G and any Jobs-tagged OTG records that do link to an SSO-compatible apply path. Clarify with Xian Zhang which records are affected.

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Prep defensive narrative for Diana session (rescheduled to 29 Jun) | Michelle | Before 29 Jun | 🟡 Medium — more lead time now |
| Update I-016 and I-018 in decision log to reflect PSFG-excluded-MVP decision | Michelle | This week | 🟡 Medium |
| Confirm with Pow Hwee: does missing competency tag hard-skip PSFG records? (Q-5) | Michelle | This week | 🟡 Medium |
| Clarify with Xian Zhang which OTG records are affected by the SSO exclusion | Michelle | This week | 🟡 Medium |

---

## Open Questions

- [ ] Which specific OTG records (Secondments, Internal Jobs) are excluded by the SSO gap? — **Owner:** Michelle to confirm with Xian Zhang — **By:** This week
- [ ] Is PSFG fully post-MVP, or is there a soft commitment to include it in R1? — **Owner:** Michelle to pin down — **By:** Thursday prep
- [ ] What is Diana's specific objection? Is it about PSFG exclusion from MVP, competency tagging, or the category model itself? — **Owner:** Michelle to anticipate before Thursday

---

## Thursday Prep: Defensive Narrative — PSFG

Diana is requesting a separate session to raise her PSFG objections. **Rescheduled to 29 Jun (2026-06-17 update).** Not part of the 18 Jun backlog grooming. Anticipate her objections and prepare responses.

**Likely objection 1: "PSFG should be in MVP"**

- Counter: Voluntary nature means officer intent is fundamentally different. Mixing with STIPs/Gigs/Jobs dilutes discovery quality for all types.
- Counter: OTG data shows the PSFG group has scarce applications vs opportunities posted — low catalogue value for MVP launch. Not worth the engineering scoping effort before go/no-go.
- Counter (MVP constraint angle): The question is not whether PSFG belongs in the product long-term — it's what we can reliably support within MVP given where the platform is today. Competency tagging coverage, the application flow, and tracking are all still being established. Adding PSFG before those foundations are stable increases scope risk without proportionate user value at launch.
- Supporting: Adrian and Xian Zhang are aligned on exclusion.

**Likely objection 2: "PSFG doesn't need competency tagging — it's voluntary"**

- Counter: Competency tagging is how CareerCompass personalises results for officers. If PSFG records are untagged, they cannot be surfaced to the right officers — they become noise.
- Counter: Voluntary nature does not reduce the value of matching. It actually increases it — you want the right officers opting in, not every officer seeing an irrelevant gig.

**Likely objection 3: "PSFG should be its own category without standard rules"**

- Counter: Category separation is already agreed (I-016). That is a UX model decision, not a data quality exemption. Same ingestion standards apply.

**Refer to:**
- `context-library/research/OTEP Ingestion Analysis/PSFG_Defensive_Narrative.docx` — already exists in your research folder, review and update with today's decisions.
- `context-library/research/OTEP Ingestion Analysis/PSFG_Discovery_Brief.docx` — use to ground the data argument.
- Decision log I-016, I-018 for ratified positions to cite.

---

## Context for Future Reference

The PSFG exclusion from MVP is now backed by two stakeholders (Adrian + Xian Zhang) and two independent reasons (nature of volunteering + OTG application data scarcity). This is not a unilateral PM call — document the stakeholder alignment explicitly when Diana challenges it.

The SSO exclusion for Secondments and Internal Jobs from the first OTG intake is Xian Zhang's transition plan decision, not a PM call. This affects the Jobs category count at launch — factor into the ≥350 catalogue gate calculation.

---

*Saved to `outputs/meeting-notes/2026-06-16-W25-adhoc-psfg-opportunities.md`*
