*Draft, not yet synced to Confluence. Scoped out of [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md). Consolidates the Internal Jobs row (Epic B) that previously had no dedicated one-pager, and folds in IJR (previously [Epic D](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md), now merged — see "Why IJR folds into this epic" below). Source: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md) D-049, [OTEP Opportunity Journeys reference artifact](https://claude.ai/artifact/Cf6DXbqmwWzfkvNLQSqzjk). Template origin: [Product Epic 1-pager Template](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931675660/Product+Epic+1-pager+Template).*

# CareerCompass | OTEP-Pathfinder — Epic B: Internal Jobs (incl. IJR)

| | |
|---|---|
| **Release** | R1 (Opportunities Marketplace) — Epic B, now covering two discovery sources |
| **Date** | 25 Sep 2026 |
| **Target** | **⚠️ Pending re-estimate (R-12)** — no epic-specific date yet, blocked on the item below |
| **Status** | 🔴 **Blocked** — HRPS API has no committed delivery date (D-01). IJR sub-scope is unblocked and groomable now |
| **Author** | Michelle Yip |
| **Last updated** | 25 Sep 2026 — first dedicated one-pager for this epic; IJR folded in from the now-superseded Epic D |
| **Product Designer** | Li Ting Kway (Liting) |
| **Engineering Leads** | Rama Moorthy, Barry Lim |

## The Short Version

Epic B covers discovery for two distinct opportunity types that share one shape — discovery-only, no native apply, creation, or review in Compass — but not one ingestion source:

1. **Internal Jobs:** Compass ingests directly from HRPS (Cumulus pushes into HRPS upstream) for the primary path. A residual of postings that never migrate to HRPS/Cumulus stays OTG-only, with no deep-link. Apply redirects to whichever system hosts the posting.
2. **IJR (Internal Job Rotation):** Compass ingests from OTG directly, unaffected by Internal Jobs' ingestion change. Ringfencing is per-officer eligibility criteria, not just a flat agency check. Apply redirects to OTG.

**Internal Jobs is currently the harder blocker.** The HRPS API this ingestion depends on has no committed delivery date (D-01) — until it lands, Internal Jobs discovery has no primary ingestion source at all. IJR has no equivalent blocker; its OTG deep-link question (R-07's IJR sub-issue) is a quality question, not a hard stop, so IJR's stories are groomable now while Internal Jobs' are not.

> **🔴 D-049, 25 Sep.** Internal Jobs' ingestion source reversed twice the same day: native-Compass architecture (23-24 Sep) → OTG-dependent (25 Sep, morning, per Mark/GK's confirmed R1 direction) → direct HRPS/Cumulus again (25 Sep, later, D-049 — this document's current state). IJR and Secondment were not part of this second reversal; they remain OTG-dependent throughout. Full detail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07).

---

## Why IJR folds into this epic

IJR previously had its own one-pager ([Epic D](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md)), rewritten four times in three days as its scope whiplashed between a native-Compass build and a discovery-only redirect. Since its 25 Sep reversal, IJR has been the same shape as Internal Jobs — discovery pull-through plus redirect-to-apply, no native build — and the Epic D document itself recommended folding its estimate into Epic B's rather than sizing it separately (Section 11, 13 of that document).

Keeping IJR as a nominally separate epic when it shares Internal Jobs' shape creates two costs with no delivery benefit: duplicate epic-tracking overhead, and a standing invitation for a fifth IJR-specific rewrite the next time something shifts elsewhere in R1. Folding it into Epic B as a second discovery source keeps the real distinctions (different ingestion system, different ringfencing model) visible as scope lines, without maintaining a second nearly-identical document.

**What does NOT change by folding IJR in:** IJR's own eligibility model, its groomability, or its risk tracking (R-25 stays IJR's risk; R-07 tracks two separate sub-issues, one per source system). This is a documentation consolidation, not a scope change.

---

## 1. Background & Context

**Why this matters strategically:** Internal Jobs and IJR postings are both currently invisible to officers outside their own agency. This epic fixes the *discovery* half of that gap for both — WOG-wide visibility in one catalog — but not the apply half, which stays wherever it lives today (HRPS, Cumulus, or OTG) for both types.

**What changed today (25 Sep):** Internal Jobs' ingestion source reversed twice (see D-049 banner above). IJR was reversed once, from a native-Compass build (confirmed 24 Sep) back to discovery-only, OTG-hosted (R-25, 25 Sep) — unaffected by Internal Jobs' subsequent, separate reversal.

**Internal Jobs vs. IJR — what's actually the same, what's actually different** (per BO confirmation, 23 Sep): duration, entry paths, browsing model, process time, and HR ownership are the same shape across both. The real differences are ingestion source (HRPS/Cumulus primary + OTG residual for Internal Jobs, vs. OTG directly for IJR) and ringfencing type (Internal Jobs: flat agency-level check; IJR: agency-level plus optional per-officer eligibility criteria, e.g. minimum tenure in a role, as AgilePSD requires).

## 2. Problem Statement

**For officers:** Internal Jobs and IJR postings live in systems officers don't have a reason to check regularly (HRPS, Cumulus, OTG), split across sources with no unified view. An officer has no way to browse either from Compass today. This epic closes the discovery half of that gap for both types. **It does not close the apply half** — applying, for either type, redirects out of Compass to wherever the posting actually lives.

**For Agency HR:** unaffected by this epic, for both types. Whatever HR does today for Internal Jobs and IJR, they continue doing — no new in-app review tool, no new intake channel.

**The Internal Jobs-specific problem:** even once this epic ships, a residual of Internal Jobs postings will stay OTG-only (never migrated to HRPS/Cumulus), and those keep the weak, no-deep-link experience this epic is otherwise meant to fix. This isn't solved by the current scope — it's an accepted, sized-later gap.

## 3. Target User

**Population: WOG-wide catalog visibility for both types**, with different eligibility resolution underneath. Internal Jobs: any officer in the agency can see and apply (flat agency-level check). IJR: any officer can see listings exist WOG-wide, but eligibility/matching resolves per-officer, against agency-defined criteria, since IJR is structurally within-agency by definition (Rotation Guidebook).

- **Lane 1 — Discoverer (Internal Jobs):** any officer browsing the unified catalog who sees an Internal Jobs listing sourced from HRPS/Cumulus (or, for the residual case, OTG). Clicking through redirects to whichever system hosts it.
- **Lane 2 — Discoverer (IJR):** any officer browsing the unified catalog who sees an IJR listing, respecting per-officer eligibility criteria if their agency sets any. Clicking through redirects to OTG.

**Explicitly not a user of this epic:** Agency HR, in any capacity. No in-app review, no in-app decision stage, for either type.

## 4. Value Propositions & Hypotheses

### 4.1 Overall Value Propositions

- **For Officers:** "Find Internal Jobs and IJR openings across government in one place, alongside every other opportunity type." Discovery-only for both — applying itself is unchanged from today.
- **For Agency HR:** no new value proposition — HR's process doesn't change under this epic, for either type.

### 4.2 Core Hypotheses (1 Line Each)

1. **Unified Discovery (Internal Jobs):** *If* Internal Jobs postings appear in Compass's catalog, sourced primarily from HRPS/Cumulus, *then* officer awareness of openings outside their own agency increases, since they no longer need to know HRPS or Cumulus exist as separate systems. No target set yet — blocked on HRPS API delivery before this can even be tested.
2. **Unified Discovery (IJR):** *If* IJR postings appear in Compass's catalog alongside other opportunity types, *then* officer awareness of IJR openings in their agency increases, since they no longer need to know OTG is where to look. No target set yet.

## 5. End-to-End User Journeys

### 5.1 Officer Journey — Internal Jobs (Discover → Redirect → Apply on HRPS/Cumulus/OTG)

1. **Discover:** logs in, lands on the unified Opportunities catalog, sees Internal Jobs listings sourced primarily from HRPS (Cumulus pushes into HRPS upstream), agency-ringfenced. A residual of OTG-only postings also surfaces, flagged as a weaker experience.
2. **Apply:** clicks Apply. For HRPS/Cumulus-sourced postings, deep-links to the specific posting on whichever system hosts it. For OTG-only postings, redirects to OTG's general landing page — no deep-link, officer has to re-search.
3. **Track / Outcome:** happens entirely outside Compass, on whichever system hosted the posting.

### 5.2 Officer Journey — IJR (Discover → Redirect → Apply on OTG)

1. **Discover:** logs in, lands on the unified Opportunities catalog, sees ringfenced IJR listings (agency-level plus optional per-officer eligibility criteria).
2. **Apply:** clicks Apply, redirects to OTG. Whether Compass can deep-link to the specific posting or only the general OTG landing page is IJR's own open sub-issue under R-07 — a separate question from Internal Jobs' HRPS-API-delivery concern under the same risk ID.
3. **Track / Outcome:** happens entirely outside Compass, unchanged from today.

### 5.3 Agency HR Journey — both types

Unaffected by R1. HR's process for both Internal Jobs and IJR continues exactly as it runs today, entirely outside Compass.

---

## 6. Success Metrics

**6.1 Core North Star Contribution**

Indirect only, through discovery volume, for both types. Apply and outcome both happen outside Compass's instrumentation.

**6.2 Input Metrics**
- **Discovery reach (Internal Jobs):** number of listings pulled into Compass's catalog via the HRPS/Cumulus primary path, and officer views per listing. Blocked until the HRPS API delivers.
- **Discovery reach (IJR):** number of IJR listings pulled into Compass's catalog, and officer views per listing. Not blocked — groomable now.
- **Redirect Click-Through Rate:** % of detail views that click through to the source system, tracked separately per type since Internal Jobs' deep-link quality differs from IJR's.
- **OTG-Only Residual Rate (Internal Jobs):** % of Internal Jobs postings that never migrate to HRPS/Cumulus and stay on the weak, no-deep-link path. New metric — not yet sized.

**6.3 Guardrail Metrics**
- No guardrail metrics defined yet for either type. Worth setting once the HRPS API delivery date is known and Internal Jobs stories can actually be groomed.

## 7. Scope (Stories + Success Criteria)

| Type | Stage | Story | Success Criteria | Groomable now? |
|---|---|---|---|---|
| Internal Jobs | Discovery | Pull postings from HRPS directly (Cumulus feeds HRPS upstream) | Listings appear in the unified catalog, agency-ringfenced, sourced from HRPS | 🔴 **No** — blocked on HRPS API delivery date (D-01) |
| Internal Jobs | Discovery | Surface OTG-only residual postings | Listings that never migrated to HRPS/Cumulus still appear, flagged with the weak redirect treatment | 🔴 No — same blocker, plus needs a sizing estimate on how many postings this covers |
| Internal Jobs | Apply | Redirect to HRPS/Cumulus with a specific deep-link | Officer lands on the exact posting, not a general page | 🔴 No — depends on HRPS API |
| Internal Jobs | Apply | Redirect to OTG's general landing page (residual case) | Officer lands on OTG, told to re-search | 🟡 Partially — the fallback pattern can be designed now, but can't be built against a real feed yet |
| IJR | Discovery | Pull IJR postings from OTG into Compass catalog | Listings appear in the unified catalog, ringfenced per agency plus per-officer eligibility criteria | ✅ Yes |
| IJR | Apply | Redirect to OTG to apply | Officer sent to OTG — specific posting if deep-linking is supported, general landing page otherwise | ✅ Yes, pending the OTG deep-link answer (IJR's own sub-issue under R-07) |

**Explicitly Out of Scope (both types):** native creation/posting flow, native in-app apply/review/decision flow, in-app status tracking, RBAC for an in-app HR actor — none of this applies, since no in-app applicant data exists for either type.

## 8. What We Need You to Design (For Liting)

1. **The unified discovery card/detail view** — shared pattern across Internal Jobs and IJR, not two bespoke components.
2. **The HRPS/Cumulus deep-link redirect treatment** — "you'll apply on [HRPS/Cumulus]" signal. Internal Jobs only, blocked until the API delivers, but can be designed ahead of that.
3. **The OTG general-landing-page redirect treatment** — shared between IJR (its default case) and Internal Jobs (its residual case). One component, two use cases.
4. **The "some listings link straight to the job, some don't" distinction**, if it needs a visible UI signal — worth a direct conversation on whether officers should be able to tell the difference before clicking Apply.

## 9. Data Analysis & Evidence

No usage data exists for either type inside CareerCompass. For IJR, OTG-side volume data (cycles per year, per agency) exists in the Rotation Guidebook and could ground a discovery-reach estimate. For Internal Jobs, no volume split between HRPS/Cumulus-sourced and OTG-only-residual postings exists yet — needed before this epic's build can be accurately scoped.

## 10. Market / Benchmark Scan

Not done.

---

## 11. Go-To-Market & Timeline

**⚠️ Pending re-estimate (R-12), and Internal Jobs specifically cannot be estimated with confidence until the HRPS API delivery question closes.** Recommend splitting this epic's estimation into two passes: IJR's stories can be sized now; Internal Jobs' stories should wait for D-01 to close, or be sized with an explicit placeholder contingency if a date is needed sooner.

---

## 12. Risks, Assumptions & Mitigations

| Risk | Category | Impact | Mitigation |
|---|---|---|---|
| **R-07 — Internal Jobs: HRPS API undelivered, no date (D-049)** | Integration | 🔴 Red. Internal Jobs' primary discovery path has no ingestion source until HRPS's API lands | Get a committed delivery date from NCS/Lee Koon TEU (D-01) — the single highest-priority open item for this epic |
| **R-07 — IJR: OTG deep-link unresolved (separate sub-issue)** | Integration | 🟠 Amber. Whether Compass can deep-link to a specific IJR posting or only the general OTG landing page | Get a direct answer on OTG deep-linking capability for IJR — doesn't block grooming, but affects discovery quality |
| **R-25 — IJR reversed to OTG-hosted, discovery-only** | Scope | Resolved as of this document. All native-Compass work from 24 Sep is out of scope | No action needed — this document reflects the current, final state |
| **New — Internal Jobs OTG-only residual not sized** | Data / Technical | Unknown volume of postings will keep the weak, no-deep-link experience even after HRPS delivers | Get a size estimate on how many internal jobs are OTG-only vs. HRPS/Cumulus-sourced, to know how much residual weak-fallback experience ships with R1 |
| **R-30 — OTG data migration for IJR (moot)** | Data / Technical | IJR data stays on OTG — Compass never ingests it, so there's no migration to plan | No action needed |

## 13. Engineering Requirements Summary

Shares the same squad as the parent R1 doc (Section 13). IJR's build is a discovery pull-through plus redirect — the smallest kind of story in R1, ready to size now. Internal Jobs' build is the same shape but currently unsizeable with confidence: the HRPS API dependency (D-01) determines both when this can start and how much of it (the OTG-residual fallback) needs building at all.

## 14. Decision Tracker (Key BO Calls Needed)

| Decision Needed | Who Decides | Needed By | Recommendation |
|---|---|---|---|
| **HRPS API committed delivery date** | Rama Moorthy, Adrian Ang (with NCS/Lee Koon TEU) | Immediately — blocks this epic's entire Internal Jobs half | Escalate directly; this is now the single highest-priority open dependency in R1 |
| **OTG deep-link capability for IJR** | Rama Moorthy, Adrian Ang | Before IJR discovery stories are finalized | Get a direct technical answer — doesn't block grooming, refines it |
| **Size of the Internal Jobs OTG-only residual** | Michelle Yip, Rama Moorthy | Before Internal Jobs' full scope can be estimated | Pull a volume estimate — how many current internal-job postings live only on OTG, not HRPS/Cumulus |
| **Whether HRPS supplies ringfencing/eligibility data directly, or Compass builds it** | Rama Moorthy, Adrian Ang | Before Internal Jobs stories are groomable | Confirm with HRPS's API documentation once access is granted |

---

*Related: [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, R-25, R-30), [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md) (D-049), [Epic D One-Pager — IJR](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md) (superseded, folded into this document), [OTEP Opportunity Journeys reference artifact](https://claude.ai/artifact/Cf6DXbqmwWzfkvNLQSqzjk)*

*Next review: once the HRPS API delivery date is known. Internal Jobs' scope and timeline should be revisited immediately after, not on the normal weekly cadence.*
