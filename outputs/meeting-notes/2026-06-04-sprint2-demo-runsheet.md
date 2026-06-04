---
date: 2026-06-04
type: demo-runsheet
ceremony: Sprint 2 Demo (Retro + Demo)
tier: Regular — working level (up to Jacky)
facilitator: Rama
content-lead: Michelle
---

# Sprint 2 Demo — Run Sheet

**Tier:** Regular demo. Working level up to Jacky. **This is a working session, not a showcase** — scoped to Sprint 2 output, eng demos their own parts. Keep it tight.

**Set the expectation up front:** "This is a working-session demo of last sprint's output. Some of the listing → detail journey is built and clickable but still in QA — I'll flag what's Done vs in-flight as we go." That one line stops it creeping into showcase expectations and pre-empts "is this shipped?"

---

## The honest framing (say this in the open, ~30 sec)

Sprint 2 goal was the **listing → detail journey** end-to-end. What we'll show: the journey is **clickable today**. What closed as Done is the foundation underneath it — data model, backend, pagination, design system. The journey screens themselves (base layout, detail page, cards on real data) are **built and in QA**, carried into Sprint 3 to finish. So: the spine works, we're verifying it.

Lead with the working demo, name the QA status once, move on. Don't over-apologise — built-and-in-QA at sprint close is normal.

---

## Running order (≈15 min demo)

| # | What | Who demos | Done/QA | Framing line |
|---|------|-----------|---------|--------------|
| 1 | **The journey, live:** open OTEP → listing → click into a detail page | Eng (Thomas/Léo) | Journey in QA, foundation Done | "Here's the spine working end-to-end." |
| 2 | **Pagination** on the listing | Eng | ✅ Done (OTEP-267) | "Listing pages cleanly as the data grows." |
| 3 | **Design system** applied to the screens | Eng / Amber | ✅ Done (OTEP-252) | "Consistent components — this is why the screens look finished." |
| 4 | **Backend + data model** behind it | Léo | ✅ Done (OTEP-193, 288) | "The endpoint and schema the listing reads from." |
| 5 | **FormSG spike outcome** (apply path) | Léo / Michelle | ✅ Done (OTEP-194) | "De-risked the apply redirect — feeds Sprint 3's OTEP-319." |

> OTEP-296 (report format) is internal plumbing — mention only if asked, don't demo.

---

## What's Done vs in-flight (have this ready for "is it shipped?")

**Done at Sprint 2 close (6):**
- OTEP-267 — pagination
- OTEP-252 — design system
- OTEP-194 — FormSG integration spike
- OTEP-193 — opportunity data model
- OTEP-288 — backend endpoint (in-memory stub)
- OTEP-296 — report format

**Built, in QA, carried to Sprint 3 (the journey screens):**
- OTEP-170 base layout · OTEP-128 detail page · OTEP-85 cards on real OTG data · OTEP-268/325/326 empty/error states · OTEP-314/327 detail consuming real response

**One-liner if pushed:** "The journey is clickable; the screens are in QA verification. Done is the foundation; the UI is finishing in Sprint 3's carry-over."

---

## Retro — bring exactly two things (working agreement)

Come with **one specific improvement** and **one win**. Not generic.

**Improvement (pick one, specific):**
- *"We closed the plumbing as Done but the user-facing journey landed in QA, not Done. The Sprint 2 goal was the journey — next time let's define 'Done' for a journey sprint as the clickable path, not the foundation, so our burndown matches the goal."* (This is honest, specific, and it's a real process insight — exactly the BA→PM move of naming the gap rather than smoothing it.)

**Win (recognise the team):**
- *"Thomas is the sole FE and the design system + listing screens still came together against a Wed design lock — that's a real lift on a single-threaded FE."* (Names a person, names the constraint.)

---

## Anticipated questions

- **"Why is the journey in QA and not Done?"** → "Sprint 2 front-loaded the foundation — data model, backend, design system. The screens came together late against the design lock and are in QA now, carried into Sprint 3. The spine is clickable; we're verifying."
- **"Is the apply flow working?"** → "Not yet — Sprint 2 de-risked it with the FormSG spike (OTEP-194). The actual redirect is OTEP-319, this sprint."
- **"When does the full journey ship?"** → "Sprint 3 — the QA tail finishes early, then filters + apply land on top."

---

*Source: sprint-status.md (Sprint 2 closed, 6 Done) + ceremony-prep.md two-tier demo format (working agreement Imelda + Rama, 2026-06-02).*
