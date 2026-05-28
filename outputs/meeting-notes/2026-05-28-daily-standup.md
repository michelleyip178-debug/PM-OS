# Meeting Notes: OTEP Team 2 Daily Standup

**Date:** Thu 28 May 2026
**Time:** 11:00
**Meeting type:** Daily standup
**Attendees:** Michelle, Thomas, Pow Hwee, Leo (+ Rama — to follow up with separately)

---

## Summary

Two issues surfaced at standup: a design system ambiguity in Figma that's blocking engineers from knowing which design system to build against, and a mid-sprint review to schedule for Monday 2 June (Sprint 3 Week 1). The design system gap is a risk that needs resolution before Sprint 3 FE work begins — Amber needs to clarify, and Michelle needs to loop Rama in for context on whether a new design system is being adopted.

---

## Issues Raised

### 1. Design System Ambiguity in Figma

**The problem:** Engineers looking at Figma can't tell which design system each page is referencing. If there are different references across different pages, they don't know which one to build against. If a new design system is being introduced, someone needs to own taking it up.

**What we know:**
- OTEP-252 (Sprint 2) confirmed Flagship/LifeSG design system was adopted and is Done
- But Figma pages may have inconsistent references — some pointing to Flagship, others potentially to a newer or different system
- Thomas (sole FE) is directly affected — he can't efficiently build Sprint 3 UI without knowing the source of truth

**What needs to happen:**
- Amber to audit Figma and clearly label which design system each page references
- If a new design system is being introduced, a team needs to formally own the adoption work — this cannot fall silently on Thomas mid-sprint
- Michelle to discuss with Rama to understand if there's a broader programme-level design system decision in flight

**Sprint 3 risk:** This was already flagged as a pre-planning gap (Thomas + Amber UI review not done before Planning). Today's standup confirms the risk is real. Raise at 14:00 Sprint Planning session.

---

### 2. Mid-Sprint Review — Monday 2 June

**Decision:** Michelle to run a mid-sprint review on Monday 2 June (Sprint 3 Week 1) to get a sensing of sprint progress and health early.

**Purpose:** Get a read on what engineers have picked up, what's moving, and what to watch — early enough to intervene if needed. Not a ceremony, just a quick PM pulse check.

**What Michelle wants to see:**
- What each engineer has picked up and started (vs. what's still sitting in Backlog)
- Early blockers or dependencies that weren't obvious at Planning
- Whether Thomas's FE load (4–5 stories) is realistic by Week 1 Friday

---

## Action Items

| Task | Owner | Due | Notes |
|------|-------|-----|-------|
| Discuss design system ambiguity with Rama — is a new design system being adopted at programme level? | Michelle | Today | Need answer before Sprint 3 FE work starts |
| Audit Figma — label which design system each page references; flag any inconsistencies | Amber | Before Sprint 3 FE starts (Mon 2 Jun) | Unblock Thomas. If a new system is needed, name who owns the adoption work |
| Raise design system risk at Sprint Planning (14:00 today) | Michelle | 14:00 today | Flag as a Sprint 3 FE blocker if unresolved by Monday |
| Schedule mid-sprint review for Monday 2 June | Michelle | EOD today | Short, informal pulse check — not a ceremony |

---

## Open Questions

- [ ] Is a new design system being introduced at programme level? — Michelle to ask Rama today
- [ ] Which design system is each Figma page referencing? — Amber to confirm before Mon 2 Jun
- [ ] If a new system is needed, which team owns the adoption work? — Needs a clear owner

---

## Sprint 3 Risk Flag

This design system gap validates the pre-planning risk already noted in `outputs/analyses/sprint-3-planning-prep-2026-05-28.md`:

> "Thomas and Amber haven't done their design-vs-implementation review yet — we should factor in time for that this sprint and not assume design is locked."

Today's standup is direct evidence. If Amber's Figma audit isn't done by Monday, Thomas may start Sprint 3 building against the wrong reference — and rework mid-sprint is the worst outcome given he's already the sole FE on 4–5 stories.

**Raise explicitly at Planning today:** "We found a design system ambiguity in Figma at standup. Amber needs to clarify before Thomas starts Sprint 3 FE work. If that's not resolved by Monday, we may need to adjust which FE stories Thomas picks up first."

---

*Notes: 2026-05-28 | Next: raise design system risk at Sprint Planning 14:00 | Mid-sprint review: Mon 2 Jun*
