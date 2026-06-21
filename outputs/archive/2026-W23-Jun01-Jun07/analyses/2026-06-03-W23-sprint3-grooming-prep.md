---
date: 2026-06-03
type: grooming-prep
sprint: Pathfinder Sprint 3 (active, Day 2)
source: live Jira pull 2026-06-03; synthesis of PM + Engineer + Designer analyses
note: produced inline — the sprint-trio agent loads next session; this is the same output
---

# Grooming Prep — Pathfinder Sprint 3

**Walk in with this:** the sprint is 49 issues, only 4 Done, and **every goal-critical story is unassigned and unpointed** (OTEP-85, 192, 86, 317, 319, 87). Three independent lenses (PM, Engineer, Designer) all converge on the same two tickets and the same deferral. Lead the meeting with that convergence — it's the strongest signal you have, and it cuts through ticket-by-ticket debate.

---

## The 60-second open (say this first)

> "Before we groom individual tickets — we have 49 issues, 4 Done, and the six stories that *are* the sprint goal are all unassigned and unpointed on Day 2. We can't groom our way out of that. I want to do three things: assign the spine, make one product call on C@G, and pull one story that isn't ready. Then we point the rest."

---

## 1. ✅ Do without debate (all three lenses agree)

These need no discussion — assign/start/defer them and move on.

| Action | Why it's not debatable |
|--------|------------------------|
| **Assign + start OTEP-192 (OTG ingestion) today** | PM: it's the data behind the officer's outcome. Eng: it's the root of the dependency chain — OTEP-85 is being built against data that isn't ingested yet. Designer: can't design real states against fake data. |
| **Make OTEP-319 (apply) the owned, pointed spine** | PM: it's the North Star event (application completion). Eng: it's the goal's leaf — must be reachable. Designer: the FormSG handoff is the riskiest UX moment and it's the thinnest-specced. |
| **Pull OTEP-87's competency scope out of the sprint** | PM: competency SSOT is unresolved (BO mtg, 2 Jun). Eng: no defined API contract = can't build. Designer: can't design UI for data that may not exist. Flagged by all three for different reasons — the clearest "not ready." |

---

## 2. ⚡ Decide (your calls as PM — recommendation + reason)

| Decision | Recommendation | Reason |
|----------|---------------|--------|
| **C@G depth vs breadth** — 8 C@G stories vs solid OTG apply | **Hold C@G depth; ship OTG apply clean.** Let C@G stream start but most carries to S4. | C@G defaulted into the sprint via grooming, not a product call. OTG is the channel we've built toward; depth on apply proves the model. The 2nd dev lands S4 to absorb C@G. |
| **Filter-first vs apply-first** (one FE dev, can't do both well) | **Apply-first (OTEP-319).** | North Star is application completion; apply on an unfiltered list is a complete journey, filters without apply is a dead end. Name that the QA tail + some states slip. |
| **What "design lock" honestly covers today** | **Lock the stable (listing/detail in design system); flag filters/apply/C@G as design-pending.** | Design-system spike (276) is still In Progress and new surfaces aren't designed. A partial honest lock beats a full fake one. |

---

## 3. 📋 Owner + estimate actions (the mechanical fixes)

**Assign at grooming (all unassigned, all goal-critical):**

- OTEP-85 (cards w/ real data — already In Progress with no owner)
- OTEP-192 (OTG ingestion — likely Léo)
- OTEP-86 / OTEP-317 (filters)
- OTEP-319 (apply)
- OTEP-87 (after scoping down — non-competency C@G detail only)

**Point the FULL board, not the proposal's flat list.** Pow Hwee's introducing Fibonacci pointing this sprint — good. Point the carry-over QA tail too, sum it, compare to velocity. The total makes the overload objective. Watch for: OTEP-87 points as a **13 (= flag, undefined contract)** until its response shape is designed.

**Sequencing the engineer will raise (back him up):**
- Run OTEP-358 (nil-date) *inside* OTEP-192, not after
- Run OTEP-289 (taxonomy) / OTEP-349 (competency) spikes *before* their dependent stories, or move those stories to S4
- Prioritise OTEP-322 (E2E harness) — it's leverage that drains the 12-ticket QA tail
- Start OTEP-350 (WOG AD onboarding) — longest external lead time; the mock (351) is a workaround, not the goal

---

## 4. 🗣️ Response to Pow Hwee's proposed backlog

Endorse: the 5-group structure, story-point estimation, the "split C@G ingestion across 2 sprints" realism.

Push on: (1) the proposal omits the 12-ticket QA carry-over tail — real load is his ~24 + carry-over ~25 = the 49 on the board; (2) sequence, don't just list — apply-first; (3) pressure-test the tech-debt/CI/ADR items against the Oct freeze — first cuts if over velocity.

---

## 5. Carry into grooming — one card

```
OPEN: 49 issues, 4 Done, the spine is unowned. Fix that first.

DO (no debate):  assign+start 192 · own+point 319 · pull 87's competency scope
DECIDE (mine):   C@G → defer depth · apply-first · lock only the stable design
POINT:           the full board incl. QA tail · 87 = 13 until contract defined
BACK THE ENG:    358 inside 192 · spikes before stories · 322 to drain QA · start 350
```

Full reasoning: [three-POV analysis](2026-06-03-sprint3-three-povs.md) · [PM backlog review](2026-06-03-pow-hwee-sprint3-backlog-review.md) · [engineer POV](2026-06-03-sprint3-engineer-pov.md) · [capacity + S4 impact](2026-06-03-sprint3-fe-capacity-and-sprint4-impact.md).
