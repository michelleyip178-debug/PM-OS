# Career Compass — Ops Portal PRD (Condensed)

*Read-only case categorization for BOs, plus candidate remediation workflow*

**Status:** DRAFT · v0.2 · Full version: [2026-08-14-W33-ops-portal-prd.md](2026-08-14-W33-ops-portal-prd.md)

---

## The problem

CC only pulls an officer's employment data once, at first login. If it changes afterward (agency transfer, new position, corrected email), CC doesn't know, and there's no way to see or explain the mismatch. ~1.7% of pilot officers (90/5,270) already show a lifecycle-risk or duplicate-record issue; 274 officers whole-of-government hold conflicting positions across two HR systems right now.

**Decided 14 Aug:** the Ops Portal is **read-only for the BO**. They categorize and route; they can't patch, override, or link a profile directly. That decision creates the open question this PRD answers: if the BO can't fix it, who does?

## Two objectives, split because they have different urgency

**A — BO triage efficiency (Release 1 target):** 100% of manually-triggered cases have a complete evidence record (before/after, category, timestamp) at time of routing. Time-to-categorize targets are deferred — no baseline exists yet.

**B — Identity-safety containment (release gate, not a KR):** zero incidents of a case remediated using the wrong officer's data, verified via an immutable audit trail. **Gated on NRIC/FIN privacy/security approval** — not achievable in Release 1. Don't enable batch categorization for Identity/contact-change or Multiple/conflicting-records until this has a verifiable audit mechanism.

## Who uses it

- **BO (primary):** confirms officer data looks right, or escalates. Access restricted to the assigned BO only — not Product/Engineering.
- **Receiving team (secondary, unconfirmed):** acts on a routed case. Candidate: Compass Product Operations — not yet formally assigned.
- **Central Users (tertiary):** troubleshoot one officer's issue, reactively.

## What the portal does — six areas

| Area | Shows | BO does |
|---|---|---|
| Operations overview | Risk volume, service health | Starting point — drill into a queue |
| Identity exceptions | Email/NRIC-FIN lookup failures | Categorize as Identity/contact change; route |
| Employment exceptions | Multi-hat vs. duplicate | Categorize as Multiple/conflicting records; route |
| Profile differences | Before/after diffed fields | Categorize per taxonomy; route |
| Refresh monitoring | Stale/failed profile pulls | Flag to receiving team if stuck |
| Audit and reporting | Case timeline, evidence, decisions | Read-only |

**No wireframes exist yet.** These are six functional areas mixing three interaction modes (dashboard, triage/action, health-check) without a resolved nav structure. Recommend a half-day IA session before sprint planning.

## Categorize-and-route: the only write action

BO selects a category from a 7-item taxonomy (Organisational move, Role change, Classification change, Reporting/org-structure change, Identity/contact change, Eligibility/status change, Multiple/conflicting records), optionally notes, routes. Doesn't change officer data. Logged with BO identity, timestamp, category.

Each case also carries a machine-generated reason code (10 codes, P0/P1 severity) that drives the officer-facing message shown while the case is open. **Content-design gap:** current messages ("Your profile update is under review") are near-identical, vague, and give no actionable next step — needs a real content pass before Release 1 ships officer-facing copy.

## Batch categorization (Release 2, not Release 1)

Once the daily-diff job exists, same-category cases from a nightly run get grouped for bulk review. **Not every category is bulk-eligible** — Identity/contact change and Multiple/conflicting records stay case-by-case, since batching those trades a small time saving for a real risk of routing the wrong officer's case.

**Blocking:** a second, independently-produced field classification disagrees with this PRD's risk tiering — it puts Identity/contact-change fields in a *low-risk* bucket. Must resolve to one agreed classification before batch categorization is built, not just before it's turned on.

## Receiving-team workflow — candidate only, not confirmed

*Everything below is a draft from one working session. Do not build against it without a named receiving team and an approved SOP.*

Six stages (Detect → Categorize & route → Triage → Investigate → Remediate → Verify & close), BO involvement ends after stage 2. Includes a draft escalation matrix (app defects → Engineering, POCDEX mismatches → POCDEX team, upstream HR errors → Agency HR, lifecycle questions → Compass Product).

## Technology — what gates freshness and safety

- **Refresh mechanism changed 24 Aug:** no longer a daily full diff. POCDEX will supply a last-modified-date per API endpoint (4 endpoints); Compass compares dates to detect change. Not yet built. Open: what happens once a date-change is detected (full re-pull vs targeted diff) is still undecided.
- **Identity matching:** 4-step hierarchy (WOG AD email → NRIC/FIN token [not yet approved] → Employment ID → timestamp-as-signal-only). `officerId` is confirmed already in production use for this kind of disambiguation.
- **Two unresolved gaps, both required before Release 1 build:**
  1. No decision table exists for when identity-matching signals *disagree* (not just absent) — this is the exact shape of the highest-severity known failure case (email reuse).
  2. "Read-only" enforcement layer isn't specified — needs to be stated explicitly as API/auth-layer enforcement, not UI-only, or the safety argument doesn't hold.
- **NFRs:** P95 API ≤100ms; ~125,000 POCDEX requests/month post-MVP; 4-year retention for inactive accounts.

## Release plan

**Nothing in this PRD ships inside the current MVP code freeze** — confirmed with Engineering. Everything here is post-MVP.

| Phase | Scope | Depends on |
|---|---|---|
| MVP baseline (today) | Manual comparison only, no categorization | Nothing |
| Release 1 | Categorize-and-route portal, taxonomy, reason codes, audit trail | UI design work |
| Release 2 | Daily-diff job live, batch categorization | Field-mapping confirmed; Identity risk-tier conflict resolved |
| Release 3 | Receiving-team workflow formalized | Team named, SOP approved |
| Further out | NRIC/FIN identity fallback | Privacy/security sign-off |

---

## Biggest open items (highest leverage first)

1. **NRIC/FIN token privacy/security approval** — flagged as the single highest-leverage open item in the full PRD; gates Objective B entirely.
2. **Receiving team not named** — three different framings exist (RACI signal, tier model, this PRD's language) and haven't been reconciled.
3. **Identity/contact-change risk classification conflict** — blocks Release 2's batch categorization design.
4. **Audit trail schema** — retention period, immutability guarantee, and bulk-action logging aren't specified; can't build Objective B's safety gate without it.
5. **`reportingmanageruid` and 4 other fields** (largest-volume changing field in the dataset) have no home in the current taxonomy or confirmed API contract.

*Full detail, all reasoning, and every caveat behind these calls: [2026-08-14-W33-ops-portal-prd.md](2026-08-14-W33-ops-portal-prd.md).*

---

*Condensed 2026-08-27 from v0.2 (14 Aug, revised same day). No new decisions made in this pass — this is a length reduction only.*
