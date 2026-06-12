# Proposal: Tech Debt Tracking

**Proposed by:** Michelle
**Reason:** Sprint 2 retro — team is anxious about untracked tech debt accumulating. Backlog tickets exist but have no structure or prioritization.
**Bring to:** S03 Sprint Planning (Thu 05 Jun)
**Decision needed:** Which approach to adopt from Sprint 3 onwards

---

## The Problem

We're moving fast and that's good. But we're carrying tech debt with no consistent way to:
- Know how much there is
- Decide what to address when
- Protect time for it without it becoming a negotiation every sprint

Right now it lives in backlog tickets with no label, no urgency signal, and no protected capacity. That means it either gets ignored or it surfaces as an incident.

---

## Two Things to Decide

### 1. How do we track it?

**Option A — Label only**
Add a `tech-debt` label in Jira to any story, chore, or bug that addresses existing debt. No new epic, no separate structure.

- Easy to add retroactively
- Searchable and filterable
- Gives us a visible backlog to pull from at planning

**Option B — Dedicated epic / bucket**
Create a "Tech Debt" epic that all debt tickets roll up to.

- More visible in roadmap view
- Harder to maintain if the epic grows unwieldy
- Better if we eventually report on debt as a metric

Recommendation: **Option A** for now. Label is lighter and gets us visibility without overhead. We can add a dedicated epic later if the volume warrants it.

---

### 2. How do we protect capacity for it?

**Option A — Per-sprint allocation (10%)**
Reserve 1 dev day per engineer per sprint explicitly for tech debt. This shows up in sprint planning as protected capacity, not up for grabs.

With our current team size (~2 engineers), that's roughly 2 dev days per sprint.

- Predictable and sustainable
- Team knows debt won't pile up forever
- Could feel like overhead if debt backlog is thin early on

**Option B — Per-sprint allocation (20%)**
Reserve 2 dev days per engineer per sprint. More aggressive paydown, faster cleanup.

- Better if we're already behind
- Risk: feels like a tax on velocity in early sprints when debt isn't yet acute

**Option C — Opportunistic (no fixed allocation)**
Pull a debt ticket into sprint if there's capacity after core stories are planned.

- Zero overhead
- In practice, never gets done because there's always another feature ticket to fill the slot

Recommendation: **Option A (10%).** Start there. If debt is growing faster than we're clearing it after two sprints, move to 20%. If the backlog stays thin, we can dial it back.

---

## What This Looks Like Starting Sprint 3

1. Before S03 Planning (Thu 05 Jun): Michelle adds `tech-debt` label to any existing Jira tickets that are unambiguously tech debt
2. At S03 Planning: team pulls 1-2 labelled tickets into sprint, targeting ~2 dev days total
3. End of sprint: note in retro whether the allocation felt right, too heavy, or not enough
4. Review after S04 retro (next async check-in sprint) and adjust

---

## What This Doesn't Do

- It doesn't create a formal tech debt roadmap or reporting structure — that's overhead we don't need yet
- It doesn't block feature work — 10% is a carve-out, not a ceiling
- It doesn't cover architectural refactors that need dedicated planning — those are a separate conversation

---

*Draft for team discussion — S03 Sprint Planning Thu 05 Jun*
