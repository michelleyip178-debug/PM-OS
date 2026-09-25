---
date: 2026-09-22
week: 2026-W39
type: exploratory-analysis
topic: What CareerCompass could do for IJR and SJR (Secondment) — based on Rotation Guidebook (Feb 2026)
status: exploratory — not workshop-ready, not a scope decision
purpose: working draft to reason through feasibility and fit, ahead of deciding whether/when this belongs on the roadmap
---

# IJR / SJR — What Could CareerCompass Do? (Exploratory)

**Framing:** This is not a scope decision. It's a first pass at mapping IJR and SJR onto the same Discovery → Creation → Publish → Application → Notification → Decision → Post-Offer stages used for STIPs & Gigs, to see where the mechanics transfer and where they don't. Whether this belongs in R1, R2, or never is an open question this exercise is meant to help answer, not something it assumes.

**Headline finding: IJR and SJR are not "STIPs & Gigs with different population rules."** They're structurally different products. Discovery is gated by eligibility criteria and HR-mediated matching, not open population tiers. Creation is HR/agency-surfaced, not self-serve. Application is a multi-week matching workflow, not a native modal apply. Any CareerCompass involvement has to be scoped as its own feature shape, not a variant toggle on the STIPs & Gigs build.

---

## Why IJR and SJR Need Separate Scoping

| | IJR | SJR (Secondment) |
|---|---|---|
| Scope of movement | Within one agency | Across agencies (WOG) |
| Owner of the cycle | Each agency, independently | PSD centrally (annual), or agency/Ministry-family-led as a secondary path |
| Cadence | Agency's discretion — can be frequent (HTX runs postings twice monthly) | PSD's SJR: once a year, fixed calendar (Mar–Sep). Agency-led secondment: varies (e.g. MDDI's PC SJR runs twice yearly) |
| System of record today | OTG | OTG |
| Existing digital system already does both | Yes — OTG explicitly serves both IJR and SJR (Section 5.2) | Same |

Because the cadence, owner, and matching complexity differ, "CareerCompass support for IJR/SJR" is really two separate scoping questions, not one. Below, each stage is scored for IJR and SJR separately.

---

## Stage-by-Stage: What Transfers, What Doesn't

### 1. Discovery

| | IJR | SJR |
|---|---|---|
| Who can see opportunities | Officers within the agency, filtered to eligibility (grade, years in role, years in agency/grade — agency-set, guidebook suggests ~3yrs as a common norm) | WOG-wide in principle, but visibility is nomination-gated: officers must first be nominated into the cycle before they can browse SJR roles in OTG (Annex B Q7) |
| Gating mechanism | Eligibility criteria, agency-defined | Eligibility criteria (Table 5: MX12-10 grade, 3yrs in role, min 'C' performance 2yrs) **plus** HR nomination — you don't browse freely, you're added to a cycle first |
| Fit with STIPs & Gigs Discovery model (open catalog, ringfenced by eligibility) | **Partial fit.** An eligibility-filtered catalog view is plausible — closer to STIPs & Gigs mechanics than SJR is. | **Poor fit.** STIPs & Gigs Discovery assumes an officer can browse before being "let in." SJR requires nomination *before* visibility. A CareerCompass SJR catalog would need a pre-nomination gate that doesn't exist in the STIPs & Gigs model at all. |

**Note:** Both IJR and SJR already have a working discovery mechanism today, OTG. Any CareerCompass discovery build here is a **migration/duplication question**, not a greenfield build — worth asking "why would this move off OTG" before scoping the how.

### 2. Creation

| | IJR | SJR |
|---|---|---|
| Who creates a posting | **HR**, not individual officers — HR consolidates vacant/vacating roles into a pool (Table 2: "HR consolidates available job roles") | **Agencies**, via HR — agencies surface roles into PSD's central pool, encouraged to surface 2 roles per nominated officer (Annex B Q18) |
| Self-serve creation (STIPs & Gigs model: any officer posts) | **No fit.** IJR creation is HR-curated, not open. Applying the STIPs & Gigs "any authenticated officer posts, no HR gating" pattern here would contradict how IJR is designed to work. | **No fit**, same reason — this is an HR/agency-surfaced pool, not open posting. |

This is the single clearest mismatch with the STIPs & Gigs mechanics already locked in R1 scope. If CareerCompass took on IJR/SJR creation, it would need an HR-facing "surface a role into the pool" flow, structurally closer to an internal ATS req-posting tool than to the STIPs & Gigs creation form.

### 3. Publish & Lifecycle

| | IJR | SJR |
|---|---|---|
| Publish trigger | Tied to agency's cycle phase ("Publicising Job Roles" — 8 weeks per Table 2), not instant | Tied to PSD's annual calendar (Table 4: Preparation phase, mid-May to end-Jun) |
| Expiry / closing | Implicit — tied to the matching window closing, not a rolling auto-expiry | Same — tied to the Jul–Aug application/matching window |
| Fit with STIPs & Gigs model (instant publish, 30-day auto-expiry, manual close) | **No fit.** Both run on fixed-phase calendars, not rolling instant-publish/auto-expire logic. A CareerCompass build here needs cycle/phase state, not a single "published/expired" status. |

### 4. Application

| | IJR | SJR |
|---|---|---|
| How officers apply | Discuss with cluster/division directly, submit **ranked preferences** (not a single application) → HR-run matching exercise (Table 2, "Matching," 8 weeks) | Browse SJR roles in OTG, apply via "raise hand" feature (Annex B Q7) → selection interviews → placement confirmation |
| Single native modal apply (STIPs & Gigs model) | **No fit.** Ranked preferences across multiple roles, resolved by a matching algorithm/process, is a different object entirely from a single application record. | **Partial fit** — the "raise hand" mechanic in OTG is actually closer to a lightweight apply action. But it's still followed by interviews and multi-party placement confirmation, not an instant decision. |
| Time to apply | Not applicable — this is a multi-week process, not a <2min action | Same |

### 5. Notification & Review

| | IJR | SJR |
|---|---|---|
| Who reviews | Agency HR facilitates matching; receiving division interviews | Borrowing Agency HR accesses list of interested applicants in OTG (Annex B Q7); FLs facilitate matching centrally |
| Fit with STIPs & Gigs model (instant email to poster, in-app review table) | **Partial fit for SJR** — a review table of interested applicants is a similar shape to STIPs & Gigs' "My Posted Gigs" table. **Weaker fit for IJR**, which is a preference-ranking/matching exercise, not a simple applicant list. |

### 6. Decision & Outcome

| | IJR | SJR |
|---|---|---|
| Decision mechanism | Role matching exercise assigns officers to roles based on preferences + organisational needs (not a simple offer/reject per applicant) | Selection interviews → placement confirmations (closer to a traditional offer/reject, but agency-to-agency, with FL/PSD involvement) |
| Fit with STIPs & Gigs model (Offer/Reject buttons, instant status badge) | **No fit for IJR** — matching is a batch/algorithmic exercise across a pool, not one-by-one decisions. **Closer fit for SJR**, though it still involves a formal interview stage STIPs & Gigs doesn't have. |

### 7. Post-Offer

| | IJR | SJR |
|---|---|---|
| What happens after match/placement | Handover arrangements, admin setup (4–16 weeks), agencies align start dates to a common window (Table 2) | Pre-secondment briefing (payroll, reporting lines, ranking/promotion process), onboarding, **6-month check-in cadence**, **mid-secondment re-integration planning starting 6 months before end** (Annex F) |
| Fit with STIPs & Gigs model (informal email/Teams coordination, out of scope) | **No fit, but for a different reason than STIPs & Gigs.** STIPs & Gigs Post-Offer was moved out of scope because it's genuinely lightweight and informal. IJR/SJR post-offer is the opposite: it's a formal, HR-owned, multi-month process (onboarding checklist, mid-point re-integration planning, buddy assignment) — see Annex F. If CareerCompass ever touched this, it's a substantial standalone workflow, not a "coordinate via email" out-of-scope carve-out. |

---

## What's Genuinely Reusable from STIPs & Gigs Mechanics

Being direct about the honest overlap, since it's thin:

- **RBAC concept (3-tier: officer / poster-collaborator / admin)** — the *shape* of role-based access could extend to "officer / HR-poster / central admin (PSD)" for IJR/SJR, though SJR adds a fourth actor (Functional Leaders) that doesn't exist in STIPs & Gigs at all.
- **Audit logging** — same requirement would apply (who viewed whose profile/application).
- **Profile pre-fill** — officer profile data (name, agency, grade, competencies) pre-filling an application is plausible for both.

Everything else — creation ownership, publish/expiry logic, application structure, decision mechanism, post-offer process — needs its own design, not reuse.

---

## Open Questions This Exercise Surfaces

- **Why would IJR/SJR move off OTG at all?** OTG already does this today (Section 5.2 explicitly). Before scoping a CareerCompass build, worth establishing what OTG can't do that's driving the ask — otherwise this is a migration project, not a feature gap.
- **Does the "one active mobility track at a time" rule (Annex A Q12) need to be enforced in-app?** If STIPs & Gigs, IJR, and SJR ever coexist in one catalog, an officer applying to a Gig while nominated for SJR is a real conflict the guidebook says shouldn't happen.
- **SJR governance gap (SJR3 in your R1 scope tree) is upstream of this.** No one currently owns ringfencing/eligibility rules for SJR — that's a precondition for any digital scoping, IJR/SJR discovery can't be built without knowing who's allowed to see what.
- **This connects to the open SJR1/SJR2 threads already in your R1 scope tree** — whether SJR stays on OTG through 2027 and how/when it might transition to Compass is unresolved. This exercise is a data point for that conversation, not a substitute for it.

---

## Bottom Line

If someone asks "can CareerCompass do IJR and SJR the same way it does STIPs & Gigs," the honest answer is **no** — the population, creation ownership, cadence, and matching complexity are different enough that it's a separate feature, not a scope extension. The closest structural fit is SJR's "raise hand" apply action and its applicant-review table; everything else (creation, publish/expiry logic, decision mechanism, post-offer) would need to be designed from scratch against a fundamentally different, HR-mediated, cycle-based workflow.

---

*Related: [STIPs & Gigs Scope Map](../decisions/2026-09-22-W39-stips-gigs-scope-map.md), R1 Scope Tree (SJR1–4 threads on OTG-to-Compass transition and governance gap)*
