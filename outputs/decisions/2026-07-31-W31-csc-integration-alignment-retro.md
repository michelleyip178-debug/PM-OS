# Retro: CSC Integration Alignment Gap

**Type:** Process/incident retro (not sprint retro)

**Date:** [Schedule — recommend within this week while context is fresh]

**Attendees:** Michelle, Rama Moorthy, Jace Tan (recommend including — PSD escalation runs through him)

**Facilitator:** Michelle

**Source meeting:** [2026-07-31 Squad Sync](../meeting-notes/2026-07-31-W31-squad-sync-r1-mvp-sso.md)

---

## Why This Retro

Not a sprint retro — this is a targeted process retro on one finding: during the July 31 squad sync, nobody could confirm what's actually been shared with CSC on SSO integration specs. PSD believes specs were already provided; CSC is still asking for them. No one owns a consolidated record that settles the disagreement.

This matters because the gap is invisible until someone asks directly (as Michelle did in that meeting) — and every week it stays unresolved, CSC's ~4-week SSO setup clock (per [wog-authentication.md](../../context-library/prds/wog-authentication.md)) doesn't start.

Goal: understand why we didn't catch this sooner, and commit to the one change that prevents it recurring at the next handoff.

---

## 1. What Happened, Factually

*(Fill in once the CSC Integration Master Tracker reconstructs the actual timeline — this section should be evidence-based, not reconstructed from memory in the room.)*

- When was the CSC integration first scoped?
- When did ownership change hands on the CSC side (Marcus inheriting the relationship)?
- When did the "specs already provided" assumption take hold on the PSD side?
- When did the gap surface? → July 31 squad sync, when Michelle asked directly what's been shared and what CSC still needs.

**Note:** Keep this section factual and sourced. If the tracker isn't built yet, that's itself a fact worth logging here.

---

## 2. Why Didn't We Catch This Sooner? (Root Cause)

Root cause chain (5 Whys, from prior analysis):

1. Each side believes the other owns the next move → specs were communicated through scattered channels (emails, ad hoc engineering discussions), not one shared artifact.
2. No tracked artifact existed → no one owned setting one up when the integration started.
3. No one set one up → the integration was assumed to be small ("Pathfinder only needed to build a small piece"), so formal coordination felt unnecessary.
4. Assumed small despite not being small → an ownership handoff happened (Marcus) with no documented transfer of what had already been agreed.
5. No documented handoff → nothing in the process *requires* a spec/status handoff document when a person or role changes on a cross-agency integration. It depended on individual diligence, which didn't happen.

**Root cause:** Missing process control at the PSD–CSC org boundary — no required, owned artifact for cross-agency integration status. This is a process gap, not an individual failure.

---

## 3. What Would Have Caught It Earlier?

Concrete triggers, not vague intentions — each should be a rule the team can point to, not a hope:

- Any cross-agency dependency gets a shared tracker from day one, before the first spec conversation happens.
- Role or ownership handoffs on either side require a written status document as a hard gate, not optional courtesy.
- PM reviews external-dependency status on a recurring cadence (e.g. monthly) rather than only when something surfaces in a squad sync.

---

## 4. What We're Actually Committing To

Retros fail when they produce five action items nobody owns. One committed change, ranked highest-leverage:

| Action | Owner | Deadline | Status |
|--------|-------|----------|--------|
| Stand up the CSC Integration Master Tracker (requirement, owner, PSD-provided?, CSC-acknowledged?, spec provided?, API contract provided?, outstanding questions, next action) as a living, owned artifact — not a one-off for Monday's meeting | Rama Moorthy | Before Monday alignment meeting (initial version); ongoing ownership after | ⏳ |
| Make cross-agency handoff documentation a required step (not optional) for future ownership changes on integration dependencies | Michelle (to propose as process, confirm with Jace) | Within 2 weeks | ⏳ |

**Explicitly deferred (not this retro's job):** re-litigating why Michelle wasn't invited to the original alignment call. That's a symptom worth a quick fix (add her to the recurring invite), not the root cause — don't let it become the headline finding.

---

## 5. Signal to Watch

If the tracker gets built for Monday's meeting and then goes stale again within a few weeks, that's evidence the root cause wasn't actually fixed — ownership of the artifact matters more than its existence. Revisit at the next retro checkpoint if so.

---

**Next retro checkpoint:** [Set date ~4 weeks out — roughly aligned with CSC's SSO setup window, to confirm the tracker held up and the clock actually started]
