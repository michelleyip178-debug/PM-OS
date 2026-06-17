---
date: 2026-06-16
week: W25
type: Defensive Narrative
topic: Why PSFG is deferred from OTEP MVP
audience: Diana + Jacky, Adrian, Xian Zhang (separate session, date TBD — Xian Zhang to confirm)
relates_to: I-016, I-018, OTEP-289
stakeholder_alignment: Adrian ✅, Xian Zhang ✅
---

# Defensive Narrative — PSFG Deferral from MVP

**For:** Diana, Jacky, Adrian, Xian Zhang (separate session, date TBD — Xian Zhang to confirm)

**Your position in one sentence:** PSFG is intentionally deferred — not rejected — because it cannot be set up to succeed within MVP given three structural gaps in the current data. Including it now risks a poor officer experience and misleading pilot results.

---

## The framing to open with

Before Diana can object, frame it yourself:

> "We want to include PSFG. The question is *when*, not *whether*. Bringing it in before the data foundations are ready would actually hurt the programme — officers would have a broken apply experience, and we'd draw wrong conclusions from the pilot. So we've set specific conditions for inclusion. Once those are met, PSFG comes in."

This takes the heat out. You're not blocking PSFG — you're protecting it.

---

## The three structural gaps (your evidence base)

These come from the OTG data analysis of all 20 PSFG records.

### Gap 1 — Zero competency tagging (0 of 20 records)

Every single PSFG opportunity has N/A in the Talents field. This isn't a data entry miss — it appears to be an intentional design choice: PSFG is framed as values-driven volunteering, not skills development.

**Why this matters:** CareerCompass works by matching officers to opportunities based on their competency gaps. Without competency tags, PSFG cannot be matched to anyone. It just shows up as a flat list with no relevance signal. That's not a better experience — it's worse than OTG.

**If Diana says "that's fine, we'll surface it without matching":** That's a product design decision that contradicts the MVP hypothesis (officers act when they see competency-linked opportunities). It also creates a two-tier listing experience. Not something to agree to without Adrian and Pow Hwee in the room.

---

### Gap 2 — Application flow is off-platform and inconsistent (10 of 20 missing FormSG links)

50% of PSFG opportunities have no extractable FormSG link. Of those that do have a link, some still route to the host org's own portal rather than a standard form.

**Why this matters:** OTEP's apply flow assumes a FormSG URL is present. OTEP-131 covers the fallback state (broken link = show contact message). But if half the PSFG catalogue at launch has no apply path at all, that's not a fallback state — that's the norm. Officers land on a dead end.

**If Diana says "we'll fix the links before launch":** Ask when. The agency contacts for PSFG are managed by the OTG team (otg@psd.gov.sg), not individual agencies. Getting 10 missing FormSG links sourced and validated before the MVP catalogue freeze is a real dependency, not a quick fix.

---

### Gap 3 — Zero application data captured (0 applicants across all 20 records)

All 20 PSFG opportunities show Filled: No and TotalNumberOfApplicants: 0. This isn't a sign PSFG is unpopular — sign-ups happen via FormSG externally and are never written back to OTG.

**Why this matters for the pilot:** The MVP go/no-go gate is ≥350 passing records in the catalogue. But the pilot also measures officer behaviour — do they click, do they apply? If PSFG records show zero applications in pilot data, it looks like the feature failed. We'd be drawing conclusions from a structural data gap, not real signal.

**Data point to cite:** The entire PSFG programme has generated 20 opportunities over 3 years, with 5 currently open. That's a small catalogue contribution. The cost-to-include is high (data fixes, custom apply flow, pilot noise); the catalogue value at launch is low.

---

## Stakeholder alignment (cite this if pushed)

Adrian and Xian Zhang are both aligned on deferral. This was confirmed in an adhoc session on 16 Jun — not just a PM call.

If Diana frames this as Michelle blocking PSFG, redirect: "Adrian and Xian Zhang reviewed the same data and reached the same conclusion. I'm happy to loop them in if there's disagreement on the sequencing."

---

## Objection responses

**"PSFG should be in MVP — it's a key part of the talent mobility story."**

The talent mobility story is strongest when officers have a high-quality, consistent experience. Right now, 50% of PSFG records have no apply path, none are competency-tagged, and we have no application data. Including them in MVP as-is weakens the story — it introduces broken experiences right alongside the ones we want to showcase. We protect PSFG's impact by bringing it in when it's ready.

---

**"PSFG doesn't need competency tagging — it's voluntary, not developmental."**

That's a legitimate framing, but it means we'd need to design a different discovery model just for PSFG within MVP — one that surfaces untagged opportunities alongside competency-matched ones. That's a scope change, not just a data decision. If we want to go that route, it needs a design decision from Amber and an engineering estimate from Pow Hwee. We can't agree to it in this session.

---

**"Just include the ones with FormSG links. Exclude the others."**

That's 10 records — roughly half of 5 currently open. At launch that's maybe 2-3 live PSFG opportunities in the catalogue. The engineering and data quality effort to handle PSFG as a custom stream outweighs the value of 2-3 records. And we'd still have zero competency matching and zero application tracking.

---

**"Can we at least include it as a separate tab or section?"**

Category separation is already agreed — PSFG will have its own category when it's included (I-016). But a separate tab doesn't solve the data gaps. Officers would still hit broken apply links and see unmatched opportunities. The UX model doesn't change the structural problem.

---

## What you'll commit to

Don't leave the room with only a "no." Give Diana a path forward:

> "Here are the three things PSFG needs before we can include it. Once these are confirmed, we scope the ingestion work and give it a sprint."

| Condition | What's needed | Owner |
|-----------|--------------|-------|
| Competency tagging | Host orgs agree to tag OCCs/FCs on each PSFG opportunity before posting | PSFG programme team / OTG team |
| Standardised apply flow | All PSFG opportunities have a valid FormSG link or agree to use an in-platform apply path | OTG team (otg@psd.gov.sg) |
| Participation tracking | Agree mechanism to capture sign-up data (FormSG integration or manual reporting) | PSFG programme team |

**Your ask to Diana:** "Can you tell us who owns PSFG data quality — the OTG team or the host agencies? That determines who we need to work with to close these gaps."

---

## Session management

Diana is attending the squad grooming — the primary agenda is S5 story estimation. If the PSFG conversation looks like it'll run long:

- **Timebox it:** "We have 10 minutes on this before we need to move to the grooming agenda. Can we capture the open questions and take them offline?"
- **Don't resolve data quality decisions in the room.** Any commitment to "fix the links" or "sort out competency tagging" needs a real owner and timeline — not a session agreement.
- **The outcome you want:** Diana understands the conditions, agrees to work on the data side, and the grooming proceeds. You don't need her to agree PSFG should be deferred — you need her to understand what has to happen for it to be included.

---

*Sources: PSFG_Discovery_Brief.docx (20 OTG records), PSFG_Defensive_Narrative.docx, decision log I-016/I-018, meeting notes 2026-06-16-W25-adhoc-psfg-opportunities.md*
