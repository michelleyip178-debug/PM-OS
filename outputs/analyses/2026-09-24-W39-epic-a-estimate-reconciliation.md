---
date: 2026-09-24
week: 2026-W39
type: analysis
topic: R1 Epic A — reconciling engineering estimate (Confluence) against sequencing and scope docs
status: draft — findings for Michelle to confirm with Rama/Thomas before this resolves R-12
---

# Epic A — Estimate Reconciliation

**Source:** [Opportunities Estimation](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2691465430/Opportunities+Estimation) (Confluence, PSD-OTEP space, v24, pulled 24 Sep 2026) — a mid-level engineer's sizing. Compared against the [Epic A User Stories](../prds/2026-09-24-W39-r1-epic-a-stips-gigs-stories.md) and [Sprint Sequencing](2026-09-24-W39-epic-a-sprint-sequencing.md) docs.

**What this resolves:** part of R-12 (effort/timeline unreconciled) — this is the first real engineering estimate that exists for Epic A specifically, as opposed to the folded-in R1-wide 18.5–24.0 mw figure that predates the 23 Sep scope confirmation entirely.

**What this does NOT resolve:** R-12 stays open. This is one engineer's mid-level estimate, not a reconciled team estimate, and it carries its own open questions (flagged below) that need answers before anyone commits a date against it.

---

## Squad Match — Good News First

The Confluence page's engineer roster **matches the R1 one-pager's named squad**: Hao Eng, Leo (Léo Milbor), Thomas (Huchedé). This is the right team's estimate, not a stray or outdated one. One name doesn't match — **Jennie** appears here with 18 net man-weeks but isn't named in the one-pager's Section 13 squad list. Worth a quick check with Rama on whether Jennie is a 4th confirmed engineer (the one-pager flagged "+1.5 FTE, name TBC" as still unconfirmed) or borrowed capacity from elsewhere.

**Capacity available:**

| Engineer | Gross MW (Oct–Feb) | Net MW after leave/holidays |
|---|---|---|
| Hao Eng | 20 | 17 |
| Leo | 20 | 18 |
| Thomas | 20 | 10 |
| Jennie | 20 | 18 |
| **Total** | **80** | **63** |

**After BAU set-aside (30%, 18 mw):** **45 net man-weeks available for R1 build**, Oct–Feb.

---

## Estimate vs. Stories — Line-by-Line

The Confluence breakdown doesn't map 1:1 onto the 13 groomable user stories (US-A1–A13) — it's organized by technical component, not by user story. Reconciled below:

| Confluence Line Item | MW | Maps to Story | Notes |
|---|---|---|---|
| Role Management — access control strategy | 2 | US-A13 (RBAC) | "Both core and pathfinder to agree" — open cross-team dependency, not just an internal decision |
| Role Management — implementation | 6 | US-A13 | Flagged as impacting **all existing systems, both teams** — this is a bigger number than the sequencing doc treated it as ("Medium" effort) |
| Role Management — hydration (managing roles) | 2 | US-A13 (partial) | Managing "admins" — doesn't map cleanly to any Epic A story; may be platform-level, not STIPs & Gigs-specific |
| **Template Forms — Option A (customisable)** | **16–20** | US-A4 (FormSG fallback) | **Flagged explicitly as high-complexity** — "refer to FormSG, took so many releases." This is wildly higher than the sequencing doc assumed ("Low" effort, Sprint 3) |
| Template Forms — Option B (predefined template) | 3 | US-A2/US-A8 (standard form) | This is almost certainly the option actually in scope — the stories doc locks a **fixed standard application form**, not a customisable builder (which is explicitly out of scope per the stories doc's "Explicitly Out of Scope" list) |
| CRUD — frontend navigation to creation page | 1 | US-A1 | Assumes access-control is "already figured out" — depends on the Role Management line above landing first |
| CRUD — E2E creation (form + POST) | 4 | US-A1, US-A5 | Assumes the application form is fixed, not custom — consistent with Option B above |
| CRUD — Listing (no search, with RBAC) | 3 | Part of catalog/discovery, not explicitly one of the 13 stories | This may be a platform-level Opportunities-catalog cost, not Epic A-specific — worth clarifying scope boundary |
| CRUD — Edition (with RBAC) | 3 | Not an explicit story in the current set | Editing an existing posting isn't named in US-A1–A14 at all — a gap worth naming, see below |
| CRUD — Competency tagging + autocomplete | 2 | Implicit in US-A1 (posting form has "competencies" field) | Assumes reuse of an existing competency facade |
| CRUD — Co-owner (co-evaluator) | 2 | US-A3 | Matches — sequencing doc had this as "Low" effort, this confirms it |
| Poster Dashboard — Applicant list | 2 | US-A11 | Matches |
| Poster Dashboard — Applicant detail | 2 | US-A11 (drawer view) | Matches, roughly doubles US-A11's real cost vs. what sequencing assumed |
| Poster Dashboard — Applicant status tracking | 2 | US-A12 (Offer/Reject, status badge) | Matches |
| Apply flow (whitelisted officer, auto-populated) | 4 | US-A8 | Matches — "auto-populate but no draft/edit/cancel" is a scope note worth confirming against US-A8's acceptance criteria |
| Apply flow (non-whitelisted officer) | N/A | — | Flagged as **not applicable — "ringfencing and competency matching requires a POCDEX profile."** This is a real, unflagged dependency worth checking against R-14's WOG-wide POCDEX assumption |
| Data migration | N/A, TBD | R-29 (FormSG MVP migration) | **Confluence page independently flags this as open** — "do we need to migrate existing opportunities data? Needs more context before estimating." This corroborates R-29 exactly; good sign the register and engineering are seeing the same gap |
| Internal Jobs and Secondment (Option A/B) | 2 / 4 | **Not Epic A at all** | This line sits on the same estimation page but belongs to Epic B/C, not Epic A/STIPs & Gigs. Don't fold this into Epic A's total. |
| CAM | N/A | — | "Scope unclear for now" — consistent with R-15's open status conflict |

**Notable stories from the sequencing doc with no visible line item on this page:** US-A6 (auto-expiry), US-A7 (manual close), US-A9 (apply via poster's custom form), US-A10 (notification email). These may be folded into other estimated lines implicitly, or genuinely not yet sized — worth asking directly rather than assuming either way.

---

## What This Changes About the Sequencing Doc

1. **US-A4 (FormSG custom form) is far more expensive than sequenced.** The sequencing doc put it in Sprint 3 as "Low effort," reasoning it was a small escape-hatch story. The Confluence estimate shows the *customisable form builder* option (16-20 mw) is genuinely large — but that option is also explicitly **out of scope** per the stories doc ("dynamic form builders" is in the Explicitly Out of Scope list). **The actual in-scope path is Option B (predefined template, 3 mw)** — US-A4's real shape is "poster pastes a link to an already-built FormSG form," not "we build a form builder." If anyone reads the 16-20 mw line item without this context, they'd wrongly conclude US-A4 is a massive story. **Action: make sure whoever estimates against this page is scoping US-A4 as Option B, not Option A.**

2. **RBAC (US-A13) is bigger than "Medium."** 2+6+2 = 10 mw across Role Management alone, and it's flagged as cross-team ("both core and pathfinder to agree") and impacting all existing systems. The sequencing doc's placement of US-A13 in Sprint 1 is still right, but its risk/effort rating should move from Medium to **High**, and it may need to be its own mini-milestone before the rest of Sprint 1 can build on top of it (several other line items explicitly assume "access-control already figured out").

3. **A likely scope gap: editing an existing posting.** The Confluence page has a 3 mw "Edition (with RBAC)" line item that doesn't correspond to any of the 13 current user stories. Either this is implicitly covered somewhere (e.g., folded into US-A1) or it's a real gap in the stories doc. Worth confirming with Rama whether posters can edit a live posting at all in R1 scope, since the stories doc is silent on it.

4. **Non-whitelisted officer access depends on POCDEX**, same as R-14's assumption — this isn't new risk, but it's a second independent confirmation the dependency is real and worth keeping visible.

---

## Rough Total (Directional Only — Not a Committed Number)

Summing only line items that clearly map to in-scope Epic A stories (Option B for forms, excluding Internal Jobs/Secondment and CAM):

**2 + 6 + 2 (RBAC) + 3 (form, Option B) + 1 + 4 + 3 + 3 + 2 + 2 (creation/CRUD) + 2 + 2 + 2 (poster dashboard) + 4 (apply) ≈ 38 mw**

This is a rough sum of visible line items, **not a validated total** — it excludes the stories with no visible line item (US-A6, A7, A9, A10) and the "Listing" line item's scope boundary is unclear (platform-level vs. Epic A-specific). Against the **45 net man-weeks available**, this leaves a thin ~7 mw margin if the excluded items add meaningfully, which they likely do.

**Do not quote 38 mw externally.** This is a reconciliation exercise, not a commitment — flag to Rama/Thomas that the missing line items (A6/A7/A9/A10) need adding before anyone treats this as complete.

---

## Recommended Next Steps

1. **Confirm Jennie's status** — 4th squad member or borrowed capacity — before treating 45 mw as the real Epic A budget.
2. **Confirm US-A4 is scoped as Option B (3 mw), not Option A (16-20 mw)** with whoever owns this estimate — this is the single highest-leverage clarification, given the 5-6x cost difference.
3. **Ask Rama directly about the 4 stories with no visible line item** (US-A6, A7, A9, A10) — either get them added to the estimate or confirm they're folded into existing lines.
4. **Resolve the "Edition" gap** — either add a story for editing a live posting, or confirm it's out of scope and note it explicitly in the stories doc's Out of Scope list.
5. **Once 1-4 are answered, this becomes the actual input to close R-12** for Epic A specifically — update the risk register and the Epic A one-pager's Section 13 (currently "not applicable, no epic-specific allocation") with the real total.

---

*Related: [Epic A User Stories](../prds/2026-09-24-W39-r1-epic-a-stips-gigs-stories.md), [Epic A One-Pager](../prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md), [Sprint Sequencing](2026-09-24-W39-epic-a-sprint-sequencing.md), [R1 Risk Register](2026-09-16-W38-r1-risk-register.md) (R-12, R-29)*
