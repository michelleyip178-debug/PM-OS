# Sequencing: Ops Portal + Day-2 Ops — What Has to Happen Before Either Can Ship

**Date:** 2026-08-14

**Why this doc exists:** the Ops Portal PRD (v0.2) and the Day-2 Support RACI/SOP Proposal were drafted separately, on the same day, and each independently assumes answers the other hasn't confirmed. Neither is buildable as-is. This lays out what has to resolve, in what order, before either moves past "candidate design."

**Source documents:**
- [Ops Portal PRD v0.2](../prds/2026-08-14-W33-ops-portal-prd.md)
- [Day-2 Support RACI/SOP Proposal](2026-08-14-W33-pocdex-day2-support-raci-sop-proposal.md)
- [POCDEX RAID Log](2026-08-14-W33-pocdex-raid-log.md) — full risk detail behind several items below

---

## Tier 1 — Shared foundation. Blocks everything downstream in both documents.

Neither document can move past "candidate, unconfirmed" until these four resolve. All four are cross-document — each shows up independently in both the PRD and the Day-2 Ops proposal, which is itself the signal that they need one shared resolution, not two separate patches.

| # | What | Why it blocks everything | Owner |
|---|---|---|---|
| 1 | **Confirm the receiving team.** Both documents assume Compass Product Operations (T2), based on one unconfirmed signal in a draft RACI ("SOP updates" = T2's responsibility). Neither document has an actual named, agreed owner. | The SOP, the escalation matrix, the lifecycle decision tree, and the PRD's entire receiving-team workflow (Sections 7.2.8–7.2.10) have no author until this lands. | Michelle, Rama, Adrian + T2/T3/T4 owners |
| 2 | **Reconcile the two categorization taxonomies into one.** PRD's 7-category Change Category Taxonomy vs. Day-2 Ops's 5-category Drift Category list — partial overlap, no clean mapping ("Competency Impact" has no PRD equivalent). | Building the portal against one taxonomy while training BOs against a different one guarantees mismatched categorization from day one. | Product (Michelle) |
| 3 | **Reconcile the two severity scales.** PRD's P0/P1 (case-level reason codes) vs. Day-2 Ops's P1–P4 (incident-level, where P1 = system outage) — the same label means opposite things across the two documents. | A BO reading "P1" needs it to mean one thing. Confusable severity labels risk real triage errors, not just documentation untidiness. | Product (Michelle) |
| 4 | **Place Agency HR in the model.** A third escalation framework (referenced in both documents, not detailed here) puts Agency HR in its own tier. Neither the PRD's escalation matrix nor Day-2 Ops's T1–T4 structure gives Agency HR a formal seat. | Escalation logic in both documents can't be finalized while a real stakeholder in the chain has no defined place. | Michelle, Rama, Adrian |

**Recommend:** one working session covering all four, not four separate conversations. They're the same underlying gap (two documents drafted independently making incompatible assumptions) surfacing four times.

---

## Tier 2 — Blocks the Ops Portal specifically

Assumes Tier 1 is resolved. These gate the PRD's own releases.

| # | What | Gates | Owner |
|---|---|---|---|
| 5 | **NRIC/FIN privacy/security approval.** Flagged as the single highest-leverage open item in the PRD. | Identity-fallback matching can't be built without it — the highest-severity failure case (wrong-person data exposure) has no fix path, not just a delayed one. | Security/Privacy leadership — escalate as a named, dated ask |
| 6 | **Specify identity-matching fallback failure behavior** (what happens when signals *disagree*, not just when they're absent). New gap surfaced in the trio review. | A decision table is required before Release 2 build — independent of whether #5 clears. | Michelle, Architecture |
| 7 | **Specify the "read-only" enforcement layer** — API/auth-level or UI-only. | The portal's entire safety argument rests on this being a stated hard requirement before Release 1 build. | Engineering/Architecture |
| 8 | **Resolve the Base Data vs. Identity Data classification conflict.** Two independently-produced classifications disagree on the same fields' risk tier. | Determines whether batch categorization (Release 2) is safe to build at all — wrong classification silently allows bulk-routing of the highest-risk cases. | Michelle (Product) |
| 9 | **Build the daily-diff batch job.** Not yet built; today only manual, single-officer comparisons are possible. | Gates Release 2 of the portal. Also gates Day-2 Ops's Route B (Drift Dashboard Detection) and Section 9.1 (Daily Health Check) — see Tier 3 overlap below. | Engineering |
| 10 | **Real IA/design pass on the six portal areas.** No wireframes exist — function-only, not screens. | Needs a scoped half-day working session before sprint planning, not a one-line dependency in the release table. | Design + Product |

---

## Tier 3 — Blocks Day-2 Ops specifically

Assumes Tier 1 is resolved.

| # | What | Gates | Owner |
|---|---|---|---|
| 11 | **Formal sign-off on the RACI from T2/T3/T4 owners.** Currently drafted from a single meeting, not cross-team reviewed. | Same underlying blocker as Tier 1 #1, but specifically at the RACI-table level — needs each named owner to actually confirm their row. | Michelle, Ops leadership |
| 12 | **Resolve the naming collision between Day-2 Ops's own T1–T4 tier structure and at least one other competing tier framework** referenced within its own document. | Not yet resolved even within Day-2 Ops's own scope — a prerequisite for treating the SOP as internally consistent, separate from reconciling against the PRD. | Michelle, Ops leadership |

---

## Shared dependency — the one thing both sides need at the same time

**Item 9 (daily-diff batch job)** is the single piece of infrastructure both documents depend on simultaneously:
- Portal Release 2 (proactive detection, batch categorization) cannot ship without it.
- Day-2 Ops's Route B trigger and Daily Health Check both currently describe a target state assuming this job exists — it doesn't, so as written, only Route A (user-reported issues) works today.

This is worth flagging explicitly in planning: it's not "Portal blocks Day-2 Ops" or vice versa — they're both blocked on the same not-yet-built piece of engineering.

---

## Can proceed in parallel, not gated on Tier 1–3

These don't block or get blocked by the items above — safe to start now:

- Content-design pass on officer-facing reason-code messaging (Portal PRD §7.2.6)
- Audit trail schema specification — retention period, immutability, bulk-action schema, access/query rights (Portal PRD §7.2.4)
- BO onboarding / categorization decision-aid design (Portal PRD §7.1)

---

## Recommended sequence

1. **This week:** Tier 1 working session (items 1–4) — one session, not four.
2. **This week, in parallel:** escalate item 5 (NRIC/FIN approval) as a standalone ask — highest severity, doesn't need Tier 1 to resolve first.
3. **Once Tier 1 lands:** items 6–8 and 11–12 become answerable — they're currently blocked by not having a confirmed team/taxonomy/severity scale to design against.
4. **Once items 6–8 land:** engineering can start item 9 (daily-diff job) with a stable spec instead of one that's still shifting.
5. **Parallel-track throughout:** item 10 (IA/design pass) and the three "can proceed in parallel" items — none of these need to wait.

---

*Generated: 2026-08-14.*
*Next: convene the Tier 1 working session; escalate NRIC/FIN approval (item 5) independently and immediately.*
