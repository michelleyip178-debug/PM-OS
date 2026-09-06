# OTG Operational Root-Cause Analysis (from email threads)

**Source:** ChatGPT analysis of OTG email threads (Fuel50 vendor correspondence, support tickets, org-change threads). Different data source than the workspace's POCDEX pilot drift measurements — this is qualitative root-cause diagnosis, not a frequency count.

**Why this matters now:** tomorrow's follow-up (per [2026-09-01-W36-grooming-employment-profile-changes.md](../meeting-notes/2026-09-01-W36-grooming-employment-profile-changes.md)) needs OTG Day-2 incidents mapped to Compass UAT scenarios. This doesn't give ticket counts, but it gives the *shape* of why OTG generates operational load — arguably more useful for design decisions than a raw frequency table.

---

## The core finding

OTG's operational problem isn't ticket volume — it's that **OTG relies on manual intervention, person-specific knowledge, and vendor coordination to keep data and configuration correct**, because there's no automated reconciliation between source-of-truth data and the application state.

Standard failure pattern: *source data changes → OTG doesn't reconcile automatically → user hits the discrepancy → support ticket → investigation → vendor/manual fix.*

---

## 6 recurring operational problems, with evidence

| # | Problem | Evidence in emails | Compass implication |
|---|---------|---------------------|------------------------|
| 1 | Identity/profile data isn't self-healing | Ticket asking Fuel50 to manually update a user's email; needed a reminder before vendor confirmed | Directly the same root cause as this week's identity-unification gap — email-based identity requires manual reconciliation by design |
| 2 | Access/population rules run on brittle inclusion/exclusion files | Managing 500+ NRICs for VITAL alone considered infeasible as an alternative | If Compass encodes eligibility as lists rather than rules (employment status + agency + appointment type + effective date → eligibility), it inherits the same scaling failure at WoG size |
| 3 | Config changes require repeated vendor clarification | Back-and-forth over whether "Team Skills View" becomes "Team Competencies View" in a Fuel50 release | Not directly a Compass risk today (no SaaS vendor dependency), but worth watching if CMM introduces a similar external dependency |
| 4 | Reference-data/taxonomy maintenance is manual | Ticket to edit Job Function for certain Job Families | Same category as the "job family competency suffix" item just deprioritised in today's grooming — worth checking whether deprioritising it also defers this maintenance burden, or just delays it |
| 5 | Org change creates downstream operational work | WSG-SSG → SWDA rename affecting login, agency mapping, historical records | Directly relevant to Compass's agency-transfer and secondment scenarios (TC1/TC3) — same "does the platform consume effective-dated org changes cleanly" question |
| 6 | Support depends on multiple hand-offs, not deterministic resolution | Email-update example needed a reminder before the vendor even completed it | This is the argument for Compass's own Day-2 support model question (still unowned, per today's Open Questions) — hand-off-heavy resolution paths are what OTG shows happens by default if nobody designs against it |

---

## 4 root causes (per the analysis)

| Root cause | Consequence |
|---|---|
| Data lifecycle gaps | User records drift from reality |
| Rule automation gaps (lists instead of rules) | Manual reconciliation and exceptions |
| Vendor dependency | Slow resolution, reduced control |
| Fragmented ownership | Long diagnosis paths, unclear accountability |

**Underneath all four:** no operational control plane — no layer that answers "who should exist, what should their state be, what changed, did the system process it, if not why, who owns the fix."

---

## What this means for Compass — direct application to this week's open questions

This is a genuine warning, not just background reading. It maps onto exactly the gaps flagged as unowned in both of today's meetings:

- **"No operational support model for identity mismatches"** (open question in both [squad sync](../meeting-notes/2026-09-01-W36-squad-sync.md) and [today's grooming session](../meeting-notes/2026-09-01-W36-grooming-employment-profile-changes.md)) — OTG's pattern (#6 above) is what happens by default without one.
- **Root cause #2 (brittle inclusion/exclusion lists)** is a direct warning against solving the non-Products-officer population question with an ad hoc list — the same "unowned, unquantified" gap flagged today.
- **Root cause #1 (identity isn't self-healing)** restates the exact problem this week has been calling "identity unification is the architectural gatekeeper" — this OTG analysis is independent confirmation that solving identity with a durable rule (not manual reconciliation) is the right instinct, from a live example of what happens when you don't.

**The proposed design reversal, directly usable as a framing for tomorrow's session:**

> Instead of *"every unusual change → human investigation,"* build *"every expected change → automated; only genuine exceptions → humans."*

---

## Proposed North Star operational metric

**% of officer lifecycle changes completed without manual intervention** — e.g. "≥95% of employment/profile changes automatically reflected in Compass within X hours without a support ticket."

Supporting measures: manual interventions per 1,000 users, profile reconciliation mismatch rate, median resolution time, vendor escalations/month, stale-account rate.

This is a stronger design objective than "reduce support tickets" — worth considering as an actual success metric for the employment-lifecycle workstream, not just a talking point.

---

## What this is NOT

This doesn't answer "what's the biggest frequency OTG Day-2 issue" — that's still tomorrow's open action (Michelle + Christopher Woo, per today's grooming session). This is a root-cause diagnosis from email threads, not a ticket count. Don't conflate the two when briefing the team — this explains *why* Day-2 support is heavy; it doesn't rank *which* scenario happens most.

---

## Team-facing version — what to change in the design (from the 2 Sep deck)

*Absorbed from the standalone deck `2026-09-02-W36-otg-ops-root-cause-deck.md` (merged here 2026-09-03). Audience: Compass PM, eng, design. Purpose: shape the employment-lifecycle design before Sprint 9 locks.*

**Framing question for the team:** does our current design prevent OTG's failure pattern, or reproduce it?

### The design reversal

> **Instead of** *"every unusual change → human investigation,"*
> **build** *"every expected change → automated; only genuine exceptions → humans."*

Every P1 scenario in the 118-row test set should be an *expected* change the system handles with no ticket. If a scenario can't be made automatic, that's a scoping signal: design it to be automatic, or explicitly accept it as a manual Day-2 process **with a named owner, before launch** — not after the first ticket.

### Where OTG's root causes map onto Compass's current open gaps

| OTG root cause | Matching Compass gap, right now |
|---|---|
| Identity isn't self-healing | "Identity unification is the architectural gatekeeper" — and reused-email → inherited-profile (rows 90–92) is currently marked "post-MVP?" |
| Rules encoded as lists | Non-Products officer population is still "solve it later" — which defaults to a maintained list |
| Fragmented ownership, hand-off-heavy support | "No operational support model for identity mismatches" — open in both meetings this week |
| Org change creates downstream work | Secondment / agency-transfer / rescind scenarios are the same "does the platform consume effective-dated changes cleanly" question |

### Three things to add to the design

1. **An exception queue, not just a happy path.** Every change event resolves to **processed / rejected / needs-review**. Rejected and needs-review events go into a visible queue showing what came in (POCDEX UID, reason, payload), why it didn't auto-process, which track it routed to, and an owner *by failure type* (identity ambiguity, unknown reason code, missing attributes). This is the operational control plane OTG never had — and it *is* the Day-2 support model.
2. **Eligibility and population as rules, evaluated per event.** No NRIC lists, no non-Products spreadsheet. When an event arrives, compute eligibility from attributes: `active employment + agency in scope + appointment type + effective date`. Same rule, same evaluation, for everyone.
3. **Effective-dated changes handled natively, including corrections.** Hold future-dated state; re-evaluate on every correction (backdated rescind, future-effective terminate then corrected); unwind side effects (an auth block applied, then rescinded). Most of these are marked P2 on the High Level Priorities page — **they're not P2 because they're rare, they're the hard cases.** Reclassify by difficulty, not frequency.

### Success metric (same as above, stated as the target)

> **≥95% of officer lifecycle changes reflected in Compass within [X] hours, with zero manual intervention.**

Reframes the workstream from "ship the 3 tracks" to "ship a system that doesn't need people to keep it correct."

### Asks for the team

1. **Agree** the exception queue and rules-based eligibility are MVP scope, not post-MVP.
2. **Decide** rows 90–92 (reused email): in or out — the "identity first" argument depends on the answer.
3. **Reclassify** the rescind/backdate scenarios by difficulty; re-check what fits before the end-Sep freeze.
4. **Name an owner** for the Day-2 exception-handling model (unowned in two meetings running).
5. **Adopt** the ≥95% no-touch metric as the workstream's success measure.

---

*Source: ChatGPT analysis of OTG email threads (Fuel50 correspondence, support tickets, org-change threads), pasted by Michelle 2026-09-01. Team-facing section merged from the 2 Sep deck on 2026-09-03. Permanent reference copy of the diagnosis lives in `context-library/research/`.*
