*Draft, not yet synced to Confluence. Scoped out of [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md). Consolidates the Internal Jobs row (Epic B) that previously had no dedicated one-pager, folds in IJR (previously [Epic D](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md), now merged — see "Why IJR folds into this epic" below), and adds Secondment (previously confirmed R1 scope with no dedicated epic doc anywhere — see "Why Secondment folds in here too"). Source: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md) D-049, [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md), [OTEP Opportunity Journeys reference artifact](https://claude.ai/artifact/Cf6DXbqmwWzfkvNLQSqzjk). Template origin: [Product Epic 1-pager Template](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931675660/Product+Epic+1-pager+Template).*

# CareerCompass | OTEP-Pathfinder — Epic B: Internal Jobs, IJR & Secondment

| | |
|---|---|
| **Release** | R1 (Opportunities Marketplace) — Epic B, now covering three discovery sources |
| **Date** | 25 Sep 2026 |
| **Target** | Pending re-estimate — man-weeks, sprint count, kickoff date all unreconciled across R1 docs ([R-12](../analyses/2026-09-16-W38-r1-risk-register.md)) — no epic-specific date yet, blocked on the item below |
| **Status** | 🔴 **Blocked** — HRPS API has no committed delivery date (D-01). IJR and Secondment sub-scopes are unblocked and groomable now |
| **Author** | Michelle Yip |
| **Last updated** | 28 Sep 2026 — Secondment added as a third discovery source |
| **Product Designer** | Unconfirmed as of 27 Sep — the "single designer, concurrent workstreams" risk was reopened after Adrian confirmed nobody's actually assigned ([R-10](../analyses/2026-09-16-W38-r1-risk-register.md)) |
| **Engineering Leads** | Rama Moorthy, Barry Lim |

## The Short Version

Epic B covers discovery for three opportunity types that share one shape — discovery-only, no native apply, creation, or review in Compass — but not one ingestion source:

1. **Internal Jobs:** Compass ingests directly from HRPS (Cumulus pushes into HRPS upstream) for the primary path. A residual of postings that never migrate to HRPS/Cumulus stays OTG-only, with no deep-link. Apply redirects to whichever system hosts the posting.
2. **IJR (Internal Job Rotation):** Compass ingests from OTG directly, unaffected by Internal Jobs' ingestion change. Ringfencing is per-officer eligibility criteria, not just a flat agency check. Apply redirects to OTG.
3. **Secondment (non-SJR):** Compass ingests from the hosting HR system for each listing. Apply redirects to OTG or the hosting HR system, whichever actually hosts the posting. Distinct from SJR — SJR itself stays off Compass entirely through the 2027 cycle (see "Secondment vs. SJR" below).

**Internal Jobs is currently the harder blocker.** The HRPS API this ingestion depends on has no committed delivery date (D-01) — until it lands, Internal Jobs discovery has no primary ingestion source at all. IJR and Secondment have no equivalent blocker; IJR's OTG deep-link question and Secondment's cross-HR-system auth gap are quality/access questions, not hard stops, so both are groomable now while Internal Jobs is not.

> **🔴 D-049, 25 Sep.** Internal Jobs' ingestion source reversed twice the same day: native-Compass architecture (23-24 Sep) → OTG-dependent (25 Sep, morning, per Mark/GK's confirmed R1 direction) → direct HRPS/Cumulus again (25 Sep, later, D-049 — this document's current state). IJR and Secondment were not part of this second reversal; they remain OTG/hosting-system-dependent throughout. Full detail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), the entry on Internal Jobs' ingestion source.

---

## Why IJR folds into this epic

IJR previously had its own one-pager ([Epic D](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md)), rewritten four times in three days as its scope whiplashed between a native-Compass build and a discovery-only redirect. Since its 25 Sep reversal, IJR has been the same shape as Internal Jobs — discovery pull-through plus redirect-to-apply, no native build — and the Epic D document itself recommended folding its estimate into Epic B's rather than sizing it separately.

Keeping IJR as a nominally separate epic when it shares Internal Jobs' shape creates two costs with no delivery benefit: duplicate epic-tracking overhead, and a standing invitation for a fifth IJR-specific rewrite the next time something shifts elsewhere in R1. Folding it into Epic B as a second discovery source keeps the real distinctions (different ingestion system, different ringfencing model) visible as scope lines, without maintaining a second nearly-identical document.

**What does NOT change by folding IJR in:** IJR's own eligibility model, its groomability, or its risk tracking. This is a documentation consolidation, not a scope change.

## Why Secondment folds in here too

Secondment (non-SJR) has confirmed R1 scope — the [R1 Confirmed Scope doc](../analyses/2026-09-25-W39-r1-confirmed-scope.md) and the risk register's resolution both state it plainly: Secondment is posted on Compass, discoverable WOG-wide, apply redirects to whoever hosts it. But until now, Secondment had no dedicated epic doc at all — its shape only existed scattered across the risk register's resolution entry and the confirmed-scope table.

Secondment shares Internal Jobs and IJR's exact shape (discovery-only, no native apply/creation/review, redirect-to-source) and the same "not blocked, groomable now" status as IJR. Giving it its own epic document would duplicate most of this one's structure for no real benefit — the same reasoning that folded IJR in applies here.

**What's genuinely different about Secondment, kept visible as its own scope line, not blurred into Internal Jobs or IJR:**
- **Ingestion source:** the hosting HR system for each listing (not HRPS/Cumulus specifically, not OTG specifically) — whichever system actually owns that secondment posting.
- **No per-officer eligibility model** like IJR's — Secondment doesn't carry IJR's agency-defined criteria layer.
- **Inherits the cross-HR-system auth gap directly** ([R-24](../analyses/2026-09-16-W38-r1-risk-register.md)) — an officer who can see a Secondment listing but lacks access to the hosting HR system hits a dead end applying. This is Secondment's own named risk, distinct from Internal Jobs' HRPS-API blocker and IJR's deep-link question.
- **Sits inside a broader "Secondment" umbrella that also contains SJR** — see below. Getting this distinction right matters because the two have completely different R1 treatment.

## Secondment vs. SJR — a distinction worth restating clearly

**Secondment is the umbrella; SJR sits inside it as one specific path.** Per the risk register's resolution (confirmed directly by Michelle, 23 Sep): there are three paths under the Secondment umbrella — PSD's annual SJR cycle, agency-led secondment (e.g. MDDI's PC SJR), and officer-initiated secondment. This epic covers the non-SJR paths only.

| | Secondment (non-SJR) — this epic | SJR (PSD's annual programme) |
|---|---|---|
| **In Compass for R1?** | Yes — discovery + redirect-to-apply | **No** — stays entirely off Compass |
| **Posting lives in** | Hosting HR system | OTG |
| **Timeline** | Now, R1 | Migrates to Compass ahead of the **2028** cycle, not R1 |
| **Why the difference** | Simple listing-and-redirect shape, same as Internal Jobs/IJR | Coordinated WD programme with nomination and cycle logic — a native build would be "an epic, not an R1 line," per the original R1 opportunity-type scope decision |

**This distinction doesn't trace to one clean written source** — the closest prior doc titles itself "SJR (Secondment)" and reads with the opposite hierarchy (agency-led secondment as a variant *within* SJR). Michelle's 23 Sep confirmation that Secondment is the umbrella and SJR sits inside it is currently the authoritative version, but if this gets presented externally (to Adrian, Mark, or beyond this register), it should be captured in a real source doc rather than resting on a register entry and this epic doc alone.

---

## 1. Background & Context

**Why this matters strategically:** Internal Jobs, IJR, and Secondment postings are all currently invisible to officers outside their own agency (or outside whichever HR system happens to host them). This epic fixes the *discovery* half of that gap for all three — WOG-wide visibility in one catalog — but not the apply half, which stays wherever it lives today (HRPS, Cumulus, OTG, or the hosting HR system) for all three.

**What changed 25 Sep:** Internal Jobs' ingestion source reversed twice (see D-049 banner above). IJR was reversed once, from a native-Compass build (confirmed 24 Sep) back to discovery-only, OTG-hosted — unaffected by Internal Jobs' subsequent, separate reversal. Secondment was not part of either Internal Jobs reversal or IJR's — its discovery-only, redirect-based shape has held steady since Adrian's 23 Sep scope slide.

**What's actually the same, what's actually different, across all three types:** duration, entry paths, browsing model, and process time are broadly similar (per BO confirmation, 23 Sep, for Internal Jobs/IJR specifically). The real differences are ingestion source (HRPS/Cumulus primary + OTG residual for Internal Jobs; OTG directly for IJR; the hosting HR system for Secondment) and access model (Internal Jobs: flat agency-level check; IJR: agency-level plus optional per-officer eligibility criteria; Secondment: whatever the hosting HR system's own access model is, which is exactly where R-24's auth gap bites).

## 2. Problem Statement

**For officers:** Internal Jobs, IJR, and Secondment postings live in systems officers don't have a reason to check regularly (HRPS, Cumulus, OTG, or whatever HR system hosts a given secondment), split across sources with no unified view. An officer has no way to browse any of the three from Compass today. This epic closes the discovery half of that gap for all three. **It does not close the apply half** — applying, for any of the three, redirects out of Compass to wherever the posting actually lives.

**For Agency HR:** unaffected by this epic, for all three types. Whatever HR does today for Internal Jobs, IJR, and Secondment, they continue doing — no new in-app review tool, no new intake channel.

**Type-specific problems this epic does not fully solve:**
- **Internal Jobs:** a residual of postings will stay OTG-only (never migrated to HRPS/Cumulus), keeping the weak, no-deep-link experience even after this epic ships — an accepted, sized-later gap.
- **Secondment:** the cross-HR-system auth gap ([R-24](../analyses/2026-09-16-W38-r1-risk-register.md)) means an officer can discover a listing they structurally can't act on if they lack access to the hosting HR system — no R1-scoped fix currently proposed.

## 3. Target User

**Population: WOG-wide catalog visibility for all three types**, with different eligibility/access resolution underneath. Internal Jobs: any officer in the agency can see and apply (flat agency-level check). IJR: any officer can see listings exist WOG-wide, but eligibility/matching resolves per-officer, against agency-defined criteria, since IJR is structurally within-agency by definition (Rotation Guidebook). Secondment: any officer can see listings WOG-wide, but whether they can actually act on one depends on their access to the specific hosting HR system.

- **Lane 1 — Discoverer (Internal Jobs):** any officer browsing the unified catalog who sees an Internal Jobs listing sourced from HRPS/Cumulus (or, for the residual case, OTG). Clicking through redirects to whichever system hosts it.
- **Lane 2 — Discoverer (IJR):** any officer browsing the unified catalog who sees an IJR listing, respecting per-officer eligibility criteria if their agency sets any. Clicking through redirects to OTG.
- **Lane 3 — Discoverer (Secondment):** any officer browsing the unified catalog who sees a Secondment listing (non-SJR path). Clicking through redirects to OTG or whichever HR system hosts that specific posting — may hit the R-24 access gap if they lack that system's access.

**Explicitly not a user of this epic:** Agency HR, in any capacity, for any of the three types. No in-app review, no in-app decision stage.

## 4. Value Propositions & Hypotheses

### 4.1 Overall Value Propositions

- **For Officers:** "Find Internal Jobs, IJR, and Secondment openings across government in one place, alongside every other opportunity type." Discovery-only for all three — applying itself is unchanged from today.
- **For Agency HR:** no new value proposition — HR's process doesn't change under this epic, for any type.

### 4.2 Core Hypotheses

1. **Unified Discovery (Internal Jobs):** *If* Internal Jobs postings appear in Compass's catalog, sourced primarily from HRPS/Cumulus, *then* officer awareness of openings outside their own agency increases, since they no longer need to know HRPS or Cumulus exist as separate systems. No target set yet — blocked on HRPS API delivery before this can even be tested.
2. **Unified Discovery (IJR):** *If* IJR postings appear in Compass's catalog alongside other opportunity types, *then* officer awareness of IJR openings in their agency increases, since they no longer need to know OTG is where to look. No target set yet.
3. **Unified Discovery (Secondment):** *If* Secondment postings appear in Compass's catalog regardless of which HR system hosts them, *then* officer awareness of secondment opportunities increases, since they no longer need to know which specific system to check. No target set yet.

## 5. End-to-End User Journeys

### 5.1 Officer Journey — Internal Jobs (Discover → Redirect → Apply on HRPS/Cumulus/OTG)

1. **Discover:** logs in, lands on the unified Opportunities catalog, sees Internal Jobs listings sourced primarily from HRPS (Cumulus pushes into HRPS upstream), agency-ringfenced. A residual of OTG-only postings also surfaces, flagged as a weaker experience.
2. **Apply:** clicks Apply. For HRPS/Cumulus-sourced postings, deep-links to the specific posting on whichever system hosts it. For OTG-only postings, redirects to OTG's general landing page — no deep-link, officer has to re-search.
3. **Track / Outcome:** happens entirely outside Compass, on whichever system hosted the posting.

### 5.2 Officer Journey — IJR (Discover → Redirect → Apply on OTG)

1. **Discover:** logs in, lands on the unified Opportunities catalog, sees ringfenced IJR listings (agency-level plus optional per-officer eligibility criteria).
2. **Apply:** clicks Apply, redirects to OTG. Whether Compass can deep-link to the specific posting or only the general OTG landing page is IJR's own open sub-issue.
3. **Track / Outcome:** happens entirely outside Compass, unchanged from today.

### 5.3 Officer Journey — Secondment (Discover → Redirect → Apply on hosting HR system)

1. **Discover:** logs in, lands on the unified Opportunities catalog, sees Secondment listings (non-SJR paths) pulled from whichever HR system hosts each one.
2. **Apply:** clicks Apply, redirects to OTG or the hosting HR system, whichever actually owns the posting. If the officer lacks access to that hosting system, they hit a dead end — the R-24 cross-HR-system auth gap, with no R1-scoped fix yet.
3. **Track / Outcome:** happens entirely outside Compass, on whichever system hosted the posting.

### 5.4 Agency HR Journey — all three types

Unaffected by R1. HR's process for Internal Jobs, IJR, and Secondment continues exactly as it runs today, entirely outside Compass.

---

## 6. Success Metrics

**6.1 Core North Star Contribution**

Indirect only, through discovery volume, for all three types. Apply and outcome all happen outside Compass's instrumentation.

**6.2 Input Metrics**
- **Discovery reach (Internal Jobs):** number of listings pulled into Compass's catalog via the HRPS/Cumulus primary path, and officer views per listing. Blocked until the HRPS API delivers.
- **Discovery reach (IJR):** number of IJR listings pulled into Compass's catalog, and officer views per listing. Not blocked — groomable now.
- **Discovery reach (Secondment):** number of Secondment listings pulled into Compass's catalog across hosting systems, and officer views per listing. Not blocked — groomable now.
- **Redirect Click-Through Rate:** % of detail views that click through to the source system, tracked separately per type since deep-link quality differs across all three.
- **OTG-Only Residual Rate (Internal Jobs):** % of Internal Jobs postings that never migrate to HRPS/Cumulus and stay on the weak, no-deep-link path. New metric — not yet sized.
- **Access-Gap Hit Rate (Secondment):** % of Secondment detail-view click-throughs where the officer likely lacks access to the hosting HR system. New metric, not yet instrumented — would need R-24's interim answer settled first to even define "access gap" precisely.

**6.3 Guardrail Metrics**
- No guardrail metrics defined yet for any of the three types. Worth setting once the HRPS API delivery date is known and Internal Jobs stories can actually be groomed, and once R-24's interim answer is set for Secondment.

## 7. Scope (Stories + Success Criteria)

| Type | Stage | Story | Success Criteria | Groomable now? |
|---|---|---|---|---|
| Internal Jobs | Discovery | Pull postings from HRPS directly (Cumulus feeds HRPS upstream) | Listings appear in the unified catalog, agency-ringfenced, sourced from HRPS | 🔴 **No** — blocked on HRPS API delivery date (D-01) |
| Internal Jobs | Discovery | Surface OTG-only residual postings | Listings that never migrated to HRPS/Cumulus still appear, flagged with the weak redirect treatment | 🔴 No — same blocker, plus needs a sizing estimate on how many postings this covers |
| Internal Jobs | Apply | Redirect to HRPS/Cumulus with a specific deep-link | Officer lands on the exact posting, not a general page | 🔴 No — depends on HRPS API |
| Internal Jobs | Apply | Redirect to OTG's general landing page (residual case) | Officer lands on OTG, told to re-search | 🟡 Partially — the fallback pattern can be designed now, but can't be built against a real feed yet |
| IJR | Discovery | Pull IJR postings from OTG into Compass catalog | Listings appear in the unified catalog, ringfenced per agency plus per-officer eligibility criteria | ✅ Yes |
| IJR | Apply | Redirect to OTG to apply | Officer sent to OTG — specific posting if deep-linking is supported, general landing page otherwise | ✅ Yes, pending the OTG deep-link answer |
| Secondment | Discovery | Pull non-SJR Secondment postings from hosting HR systems into Compass catalog | Listings appear in the unified catalog, WOG-wide | ✅ Yes |
| Secondment | Apply | Redirect to OTG or the hosting HR system, whichever hosts the posting | Officer sent to the correct system — subject to R-24's access-gap risk | ✅ Yes, pending R-24's interim answer for how the access gap is disclosed |

**Explicitly Out of Scope (all three types):** native creation/posting flow, native in-app apply/review/decision flow, in-app status tracking, RBAC for an in-app HR actor — none of this applies, since no in-app applicant data exists for any of the three. **Also out of scope:** SJR itself — see "Secondment vs. SJR" above.

## 8. What We Need You to Design

> ⚠️ No designer confirmed as of 27 Sep — see [R-10](../analyses/2026-09-16-W38-r1-risk-register.md). Scope below stands once someone is assigned.

1. **The unified discovery card/detail view** — shared pattern across Internal Jobs, IJR, and Secondment, not three bespoke components.
2. **The HRPS/Cumulus deep-link redirect treatment** — "you'll apply on [HRPS/Cumulus]" signal. Internal Jobs only, blocked until the API delivers, but can be designed ahead of that.
3. **The OTG general-landing-page redirect treatment** — shared between IJR (its default case) and Internal Jobs (its residual case).
4. **The hosting-HR-system redirect treatment (Secondment)** — "you'll apply on [system]" signal, one component that needs to work across whichever system hosts a given posting, not a fixed HRPS/Cumulus/OTG set.
5. **The access-disclosure pattern for Secondment (R-24-dependent)** — once R-24's interim answer lands, Secondment listings likely need a visible signal when the officer's access to the hosting system is uncertain. Depends on R-24 resolving first.
6. **The "some listings link straight to the job, some don't" distinction**, if it needs a visible UI signal — worth a direct conversation on whether officers should be able to tell the difference before clicking Apply. Applies across all three types, not just Internal Jobs' residual case.

## 9. Data Analysis & Evidence

No usage data exists for any of the three types inside CareerCompass. For IJR, OTG-side volume data (cycles per year, per agency) exists in the Rotation Guidebook and could ground a discovery-reach estimate. For Internal Jobs, no volume split between HRPS/Cumulus-sourced and OTG-only-residual postings exists yet — needed before this epic's build can be accurately scoped. For Secondment, no volume or hosting-system breakdown exists yet either — needed for the same reason.

## 10. Market / Benchmark Scan

Not done.

---

## 11. Go-To-Market & Timeline

Pending re-estimate — man-weeks, sprint count, and kickoff date are all still unreconciled across R1 documents ([R-12](../analyses/2026-09-16-W38-r1-risk-register.md)). Internal Jobs specifically cannot be estimated with confidence until the HRPS API delivery question closes. Recommend splitting this epic's estimation into two passes: IJR's and Secondment's stories can be sized now; Internal Jobs' stories should wait for D-01 to close, or be sized with an explicit placeholder contingency if a date is needed sooner.

---

## 12. Risks, Assumptions & Mitigations

| Risk | Category | Impact | Mitigation |
|---|---|---|---|
| **Internal Jobs: HRPS API undelivered, no date** (D-049) | Integration | 🔴 Red. Internal Jobs' primary discovery path has no ingestion source until HRPS's API lands | Get a committed delivery date from NCS/Lee Koon TEU (D-01) — the single highest-priority open item for this epic |
| **IJR: OTG deep-link unresolved** (separate sub-issue) | Integration | 🟠 Amber. Whether Compass can deep-link to a specific IJR posting or only the general OTG landing page | Get a direct answer on OTG deep-linking capability for IJR — doesn't block grooming, but affects discovery quality |
| **Secondment: cross-HR-system auth gap** ([R-24](../analyses/2026-09-16-W38-r1-risk-register.md)) | Technical Architecture / UX | 🔴 Red at the register level (applies to Secondment, Internal Jobs, and IJR alike, but Secondment's redirect-to-hosting-system pattern is where it bites hardest). An officer who can see a listing but lacks access to the hosting HR system hits a dead end | Needs an R1-scoped interim answer — disclose access requirements on the card, or restrict "consolidated" framing to what the officer's access covers. Raise directly with Adrian — still open |
| **IJR reversed to OTG-hosted, discovery-only** | Scope | Resolved as of this document. All native-Compass work from 24 Sep is out of scope | No action needed — this document reflects the current, final state |
| **Internal Jobs OTG-only residual not sized** | Data / Technical | Unknown volume of postings will keep the weak, no-deep-link experience even after HRPS delivers | Get a size estimate on how many internal jobs are OTG-only vs. HRPS/Cumulus-sourced |
| **Secondment volume/hosting-system split not sized** | Data / Technical | Unknown how many Secondment postings exist, or how they split across hosting systems — needed for both estimation and R-24's disclosure design | Get a volume/hosting-system breakdown before this epic's Secondment scope is fully estimated |
| **OTG data migration for IJR** (moot) | Data / Technical | IJR data stays on OTG — Compass never ingests it, so there's no migration to plan | No action needed |

## 13. Engineering Requirements Summary

Shares the same squad as the parent R1 doc (Section 13). IJR's and Secondment's builds are both discovery pull-through plus redirect — the smallest kind of story in R1, ready to size now (Secondment's ingestion is marginally more complex than IJR's single-source pull, since it needs to handle "whichever system hosts this listing" rather than one fixed source). Internal Jobs' build is the same shape but currently unsizeable with confidence: the HRPS API dependency determines both when this can start and how much of it (the OTG-residual fallback) needs building at all.

## 14. Decision Tracker (Key BO Calls Needed)

| Decision Needed | Who Decides | Needed By | Recommendation |
|---|---|---|---|
| **HRPS API committed delivery date** | Rama Moorthy, Adrian Ang (with NCS/Lee Koon TEU) | Immediately — blocks this epic's entire Internal Jobs half | Escalate directly; this is now the single highest-priority open dependency in R1 |
| **OTG deep-link capability for IJR** | Rama Moorthy, Adrian Ang | Before IJR discovery stories are finalized | Get a direct technical answer — doesn't block grooming, refines it |
| **Size of the Internal Jobs OTG-only residual** | Michelle Yip, Rama Moorthy | Before Internal Jobs' full scope can be estimated | Pull a volume estimate — how many current internal-job postings live only on OTG, not HRPS/Cumulus |
| **Whether HRPS supplies ringfencing/eligibility data directly, or Compass builds it** | Rama Moorthy, Adrian Ang | Before Internal Jobs stories are groomable | Confirm with HRPS's API documentation once access is granted |
| **R-24 interim answer for R1** (applies to Secondment specifically here) | Adrian Ang, Michelle Yip | Before Secondment's apply flow ships | Disclose HR-system access requirements on the listing card, or restrict "consolidated" framing to what the officer's access covers |
| **Volume/hosting-system split for Secondment** | Michelle Yip, Rama Moorthy | Before Secondment's full scope can be estimated | Pull a breakdown of current Secondment postings by which HR system hosts each one |

---

*Related: [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md), [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (Internal Jobs ingestion, IJR/Secondment resolution, cross-HR-system auth gap), [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md) (D-049), [Epic D One-Pager — IJR](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md) (superseded, folded into this document), [OTEP Opportunity Journeys reference artifact](https://claude.ai/artifact/Cf6DXbqmwWzfkvNLQSqzjk)*

*Next review: once the HRPS API delivery date is known. Internal Jobs' scope and timeline should be revisited immediately after, not on the normal weekly cadence. R-24's interim answer, once it lands, should trigger a review of Secondment's design/scope specifically.*
