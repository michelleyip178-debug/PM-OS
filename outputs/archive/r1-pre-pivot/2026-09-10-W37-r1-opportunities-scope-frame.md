---
title: R1 Opportunities — Scope Frame for Pathfinder
date: 2026-09-10
week: 2026-W37
initiative: R1 Opportunities
owner: Michelle Yip
status: working frame — confirms the two-workstream scope, lists what each needs next
related:
  - context-library/prds/r1-seamless-application-draft.md (officer-side)
  - outputs/research-synthesis/2026-09-10-W37-r1-admin-portal-discovery.md (admin portal)
  - outputs/analyses/2026-09-10-W37-impact-sizing-r1-admin-portal.md
  - outputs/decisions/2026-09-10-W37-decision-employment-lifecycle-r1-scope.md
  - outputs/decisions/2026-09-01-W36-r1-brainstorm-running-doc.md
---

# R1 Opportunities — Scope Frame for Pathfinder

## Scope decision (confirmed 2026-09-10)

Pathfinder's R1 Opportunities work is **two workstreams**:

1. **Officer-side apply & track** — officer applies for and tracks an opportunity inside CareerCompass, without bouncing to FormSG / OTG / Careers@Gov.
2. **Admin / host-agency portal** — HR POCs, Functional Leads, hiring managers and WOG admins create postings, manage applicants, and report, inside CareerCompass.

**Employment-lifecycle handling** is a supporting workstream (identity resolution + profile sync + role-change), scoped separately in the [decision doc](../decisions/2026-09-10-W37-decision-employment-lifecycle-r1-scope.md). It's a dependency of both, not a third product surface.

The two workstreams are **two halves of one loop**: the admin portal produces the postings and manages the applicants; the officer side consumes the postings and tracks the application. They share a data model (opportunity, application, applicant status) and should be one PRD with two parts, not two disconnected specs.

---

## What ties them together

| Shared element | Officer side | Admin side |
|---|---|---|
| **Opportunity object** | What the officer browses and applies to | What the HR POC creates and rings-fences |
| **Application object** | The officer's submission + its status | The applicant record the hiring manager reviews |
| **Status model** | "Applied / shortlisted / not progressing / interview / offered" — officer sees it update | HR / owner sets it; drives the officer notification |
| **Custom form** | The questions the officer answers | The form the HR POC builds (Theme 2 — the wedge) |
| **CV** | Officer uploads once | Hiring manager views in-portal (Theme 3 — kills the post-box relay) |
| **Ring-fencing** | Determines what the officer sees | HR POC sets it per posting (extends OTEP-127) |

Design the status model and the form/CV objects once. They're the seam where the two workstreams meet.

---

## The undecided scope boundary (blocks both)

From the [R1 brainstorm running doc](../decisions/2026-09-01-W36-r1-brainstorm-running-doc.md) standing questions — still unmade:

**Which opportunity types are in R1, and are they native, ingested, or redirected?**

| Type | Options | Leaning (to confirm at brainstorm) |
|---|---|---|
| STIPs | Native in CC | Native — MVP already does discovery; R1 adds native apply |
| Gigs | Native in CC | Native — same |
| Internal Jobs | Native / ingested from OTG / redirect | TBD — depends on Megan Yeo (PCG) discovery landing in time |
| SJRs | Native / ingested / redirect | Deferred from MVP to R1 (confirmed 2026-06-05); native apply is a major integration lift per `r1-seamless-application-draft.md` |
| Careers@Gov postings | Deep-link only (no data return) | Redirect — MVP behaviour, likely unchanged in R1 |

**Fallback position already stated** (brainstorm doc, 2026-09-04 huddle): if PCG discovery on internal jobs/secondments can't land in time, R1 = **native STIPs/Gigs + ingestion from C@G/OTG for the rest.**

This boundary determines the scope of *both* workstreams. Decide it first.

---

## Also undecided (officer side)

**"Application within CareerCompass" — definition.** Open since the May draft (`r1-seamless-application-draft.md`): does it mean absolutely no redirects, or just that the experience starts in CC? This sets whether R1 rebuilds ~5 application forms natively (Theme 2's form builder is the answer to this) or allows a hosted-elsewhere fallback.

→ One question for Adrian, via Jace. Don't wait for a brainstorm to surface it.

---

## What each workstream needs next

### Officer-side apply & track

| # | Next step | Blocker it clears |
|---|---|---|
| 1 | Get the "application within CareerCompass" definition from Adrian | Whole officer-side scope |
| 2 | Confirm which ATS/systems R1 integrates with for status tracking (Michelle → Jacky / Xian Zhang — open in `r1-seamless-application-draft.md`) | Status-sync integration load |
| 3 | Confirm external-facing profile security model — public link / permissioned / system-to-system (Michelle → Security) | Whether hiring managers can see officer profiles at all |
| 4 | Native status model design (states + notification) — this is also Theme 4 of the admin synthesis | The shared status object |

### Admin / host-agency portal

| # | Next step | Blocker it clears |
|---|---|---|
| 1 | Resolve the two blocking decisions: line-manager CV access model (Theme 5), SJR/secondment marker (Theme 6) — `/decision-doc` | Permissions model + data model |
| 2 | Pull FormSG posting volume for the 6 pilot agencies | Sizes the form-builder wedge + the real "duplicative effort" number |
| 3 | Pull application counts per pilot agency | Sizes Themes 3 & 4 (they scale with applications) |
| 4 | Pull 3–5 real FormSG forms from PSD + ESG | Scopes the form-builder v1 field set |
| 5 | Confirm MDDI's OTG-vs-FormSG split | Tells you how much OTG data undercounts; strategy-doc input |
| 6 | Follow-up research: hiring managers, officers, Functional Leads (Missing Voices in the synthesis) | Access model is currently specced from HR's view only |

### Shared / sequencing

| # | Next step | Note |
|---|---|---|
| A | **Hold the first R1 brainstorm session** (Michelle + Pow Hwee + Liting) | Scheduled week of 6 Sep, not yet held. Agenda: the opportunity-type scope boundary + native/ingested/redirect call. |
| B | Confirm R1 dev-capacity start date with Rama / Adrian | MVP employment-lifecycle freeze runs through end-Sept; R1 build can't ramp until it closes. Plan against a real date. |
| C | `/write-prod-strategy` for R1 Opportunities (both workstreams) | The position that ties the loop together. Becomes Adrian's expected R1 one-pager. Do this in the pre-build runway. |
| D | `/prd-draft` — R1 Opportunities PRD, two parts (officer + admin) on a shared data model | After A–C. Scope is exactly what A decides. |

---

## Critical path

```
First R1 brainstorm (A) ──> opportunity-type scope boundary decided
        │
        ├──> "application in CC" definition from Adrian ──> officer-side scope firm
        │
        ├──> admin blocking decisions (Theme 5, 6) ──> admin-side data + permissions model firm
        │
        └──> /write-prod-strategy (C) ──> R1 position + one-pager for Adrian
                    │
                    └──> /prd-draft (D) ──> R1 Opportunities PRD (officer + admin)
                              │
                              └──> grooming (once dev capacity frees, ~early Oct — confirm with Rama)
```

Officer-side steps 2–3 (ATS integration, security model) and admin-side data pulls (2–5) run **in parallel** with the critical path — they're inputs to the PRD, not gates on the strategy.

---

## The one thing to do first

**Hold the R1 brainstorm session this week.** It's the protected slot that exists to make exactly the decision everything else waits on — opportunity-type scope and native/ingested/redirect. It's overdue. Everything downstream (strategy doc, PRD, grooming) is blocked on its output, and the pre-build runway (now through end-Sept) is the right window to spend on it.
