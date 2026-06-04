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

## Goal vs. achieved (the honest scorecard)

**Goal:** an officer can open OTEP, see every published OTG opportunity (newest first), and click into a detail page — proving the Listing → Detail journey works end-to-end.

**Achieved:** the journey is **clickable**, but what reached *Done* was the foundation, not the journey. The journey screens landed in QA, and the cards aren't yet on real OTG data (OTEP-85 was In Progress at close). Plain version: **we hit the plumbing, not the promise** — the spine works as a build, but "Done" didn't cover the user-facing outcome the goal was written around.

| Goal promise | Delivers via | Status at close |
|---|---|---|
| Foundation: data model, backend, pagination, design system | OTEP-193, 288, 267, 252, (+194 spike, 296) | ✅ **Done (6)** |
| "See every opportunity on a listing page" | OTEP-170 layout · OTEP-85 cards on **real OTG data** | ⚠️ 170 QA · 85 **In Progress** |
| "Click into a detail page" | OTEP-128 · 314 · 327 | ⚠️ all **QA** |
| Empty / error states | OTEP-268 · 325 · 326 | ⚠️ all **QA** |

**If asked "did we hit the goal?"** → "The journey works end-to-end as a clickable build — you saw it. What's still Done-pending is QA verification and the cards on live OTG data. So: spine proven, verification finishing in Sprint 3." Don't claim the goal as met; claim the spine as proven.

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

**Improvement (lead with this one — it's specific, honest, and already half-solved):**
- *"Sprint 2's goal was the listing → detail journey, but what closed as Done was the foundation — the journey screens landed in QA, and the cards weren't on real OTG data yet (OTEP-85). We measured Done as ticket-completion of the plumbing, not the outcome the goal named. The good news: this morning's call — BO moves stories to Done from UAT — fixes it. None of those journey screens could have been called Done under that rule, because they never reached UAT. Let's make that the standard: for a journey sprint, Done = the clickable journey reaching the BO, not the foundation reaching QA, so the burndown matches the goal."*
- Why this lands: it names the gap instead of smoothing it (the BA→PM move), and it ties the fix to a decision the team *already made today* — so it's not a complaint, it's reinforcing a good call.

**Win (recognise the team):**
- *"Thomas is the sole FE and the design system + listing screens still came together against a Wed design lock — that's a real lift on a single-threaded FE."* (Names a person, names the constraint.)

---

## Anticipated questions

- **"Why is the journey in QA and not Done?"** → "Sprint 2 front-loaded the foundation — data model, backend, design system. The screens came together late against the design lock and are in QA now, carried into Sprint 3. The spine is clickable; we're verifying."
- **"Is the apply flow working?"** → "Not yet — Sprint 2 de-risked it with the FormSG spike (OTEP-194). The actual redirect is OTEP-319, this sprint."
- **"When does the full journey ship?"** → "Sprint 3 — the QA tail finishes early, then filters + apply land on top."

---

*Source: sprint-status.md (Sprint 2 closed, 6 Done) + ceremony-prep.md two-tier demo format (working agreement Imelda + Rama, 2026-06-02).*
