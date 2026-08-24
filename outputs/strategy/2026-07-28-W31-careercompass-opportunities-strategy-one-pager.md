# Product Strategy One-Pager — CareerCompass Opportunities Unified Hub

*Sections follow standard problem / strategy / roadmap / open-issues structure.*

| Field | Value |
|---|---|
| Name of the product | CareerCompass - Opportunities Unified Hub |
| Business Owner(s) | Xian Zhang GUO (PSD), Jacky LEE (PSD) |
| Team Members | Michelle Yip (PM), Tan Pow Hwee (Tech Lead), Amber Tong (Designer), Thomas Huchede (FS), Chua Hao Eng (FS), Leo Milbor (FS), Jace Tan (Lead PM), Adrian Ang (Product Lead) |
| Product Lifecycle Stage | POV |
| End Users | Primary: Public Officers · Secondary: Agency HRs |

## 1. Change Log

| Date | Change |
|---|---|
| 2026-08-19 | **Epic 4 (Opportunities Unified Hub) confirmed 47/47 Done in Jira.** Competency matching, ringfencing, keyword search, and job-category filter — all previously flagged as blocked or in progress — have shipped. See §3.2, §5, §6.1. |
| 2026-08-03 | "R1" naming collision: this doc uses R1 for a metrics date (Mar '27); a sibling doc (`r1-epic-one-pager.md`) uses R1 for the next release (Creation/Apply/Status epics). Not yet reconciled. |
| 2026-08-03 | North Star corrected: 15% by Dec '28 is Opportunities alone, not bundled with Courses. |

## 2. Problem

### 2.1 Status Quo

**The problem:** Officers have no shared way to discover short-term stints across the public service. Arrangements happen informally, agency by agency, through personal networks — access depends on who you know, not merit.

**Consequences:** Officers lose the lowest-risk form of career development. Agencies staff projects with whoever's available internally, not the best fit service-wide. The access gap between well-networked and poorly-networked officers widens over time.

**Market size**

| Layer | Estimate | Basis |
|---|---|---|
| TAM | 150,000 | Full Public Service (16 ministries + ~50 stat boards) |
| SAM | ~5,400 | 6 pilot agencies onboarded (current policy mandate) |
| SOM (Year 1 OKR) | ~1,080 | 20% of SAM |

**Demand evidence** ⚠️ *All figures below are 2025 OTG (legacy system) data or C@G platform data — not CareerCompass pilot usage. Real signal that demand exists; not yet proof it holds on this product.*

| Quarter | Vacancies | Sign-ups | Gap |
|---|---|---|---|
| Q1 | 635 | 877 | +242 |
| Q2 | 241 | 457 | +216 |
| Q3 | 188 | 491 | +303 |
| Q4 | 1,113 | 1,236 | +123 (gig spike, ~5x prior quarters) |

Sign-ups outpaced vacancies every quarter. The gap is flat-to-narrowing, not accelerating — supports a discovery-bottleneck thesis, not a runaway-demand one.

C@G (separate dataset, Apr–Jun 2026): 4,151 jobs, 172,810 applications, 3,500 public officers applying. CareerCompass integrates C@G only as a badge/deep-link — this is demand *on* C@G, not demand *through* CareerCompass.

**Policy alignment:** Operationalizes Minister Chan's SPARK 2026 "equip and emplace" commitment — low-stakes role-testing that delivers the "emplace" half.

**Not solving for:** Full postings/secondments/promotions · formal courses · performance evaluation · mandatory assignments.

### 2.2 Vision

Every officer opens CareerCompass and sees a career path shaped around them — postings, secondments, stints, and courses in one system that knows their competencies well enough to point them toward what's actually relevant.

**Why realistic:** grounded in confirmed pilot reach (5,400 officers, 6 agencies), a real demand signal (2025 OTG data, not yet replicated on CareerCompass), and a live policy mandate. No new government behavior required — just connecting data that already exists.

### 2.3 Success Metrics

**North Star:** Opportunities Placement rate — officers placed into a stint/secondment/posting through CareerCompass. **Target: 15% by Dec '28, Opportunities alone.**

| Metric | Baseline | Target | Timeline |
|---|---|---|---|
| Placement rate | 0% | 15% | Dec '28 |
| Click-through into listing | No baseline | 30% | R1: Mar '27 |
| Application rate | OTG: 0.21%–2.19% | 20% | R2: Jun '27 |
| Login rate (180 days) | No baseline | 20% | R3: Sep '27¹ |
| HR dashboard usage | No baseline | 60% | R3: Sep '27 |
| Officer satisfaction | ≥3.5/5 (MVP) | ≥3.8/5 | R3: Sep '27 |

*¹ Re-dated from Jun '27 — 180-day retention needs 180 days of cohort history, unavailable until ~6 months post-launch.*

**Why placement, not applications:** an officer who applies and never gets placed hasn't been served. The funnel metrics (click-through, applications, logins) triage where things break if the North Star stalls; HR usage and satisfaction catch a good placement number hiding a broken experience.

**Cost effectiveness (VCR):** not yet populated — needs Dev/Ops EOM figures and an impact-unit definition from finance/PMP.

## 3. Strategy

### 3.1 Proposed Product Strategy

**Hypotheses:**
1. Discoverable cross-agency stints raise application rates specifically for weakly-networked officers — closing the access gap, not just shuffling demand
2. Competency-matched surfacing improves click-through *and* application quality over a raw list
3. Structured status/timelines normalize stints as a repeatable career step, not a one-off

**Theory of change:** 2025 OTG data shows real demand; access is uneven because discovery and matching are informal and network-dependent today. The Hub formalizes it — publish, match, open beyond an agency's own team. It doesn't create demand, it removes the network-access bottleneck. *Still needs confirming on CareerCompass's own data.*

**Guiding principles:** Placement over activity · Match, don't just list · Voluntary, always · Phased reach (6 agencies → full public service), each phase proven before scaling.

### 3.2 Risks and Mitigations

| Category | Risk | Status | Mitigation |
|---|---|---|---|
| Market | Demand validation is reach-based, not desire-based — TAM/SAM/SOM sizes who *could* use this, not who *wants* to | Open | Treat R1 click-through/application targets as the real validation experiment |
| Market | A persistent demand-supply gap erodes trust faster than slow discovery does | Open | Track applications-per-vacancy as a guardrail once CareerCompass has its own data |
| Market | "Already applied" state has no confirmed MVP scope, currently fails testing | **Still open** | Force a scope decision |
| Technical | Competency matching (OTEP-336/570) | **RESOLVED 2026-08-19** | Confirmed Done in Jira ⚠️ confirms the build shipped, not that REQ-X2 (agency-code data dependency) independently closed — no RTM doc exists in this workspace to verify directly |
| Technical | Ringfencing (OTEP-390/408/409) | **RESOLVED 2026-08-19** | Confirmed Done — same caveat, worth confirming the test-account and rule-precedence gaps were actually resolved, not just that the code merged |
| Technical | UAT test-environment data quality flagged poor | **Still open** | No evidence this closed |
| Team / resource | Engineering capacity split across profiles, competencies, onboarding, auth, and opportunities — could stall quietly | Open | Watch at sprint checkpoints |
| Team / resource | No accessibility (screen-reader) testing capability exists | Open | Needs a specialist before pre-launch review |

**Experiments run:** none on CareerCompass itself. OTG data is the closest thing to POV-stage evidence — suggestive, not confirmatory.

## 4. Roadmap

| Timeline | Initiative | Why it matters |
|---|---|---|
| ~~Now → feature freeze (21 Aug)~~ | ~~Resolve competency-matching dependency~~ | **RESOLVED 2026-08-19** — see §3.2 |
| Before UAT | Resolve UAT data-quality issue | Still open — de-risks the first UAT wave |
| 7 Sep – 16 Oct: VAPT | Security/pen-test, incl. access-control | Confirms safe to expose to full pilot; scope (POCDEX/CSC/Cumulus) still TBC |
| 19–23 Oct → 26–30 Oct | Go-live approval → soft launch | First real read on click-through/application targets |
| Week of 2 Nov | MVP first release, 6 agencies (~5,400 officers) | Starts the clock on R1 targets |
| R1: Mar '27 | Click-through target (30%) due | First signal on hypothesis 1 |
| R2: Jun '27 | Application rate target (20%) due | Tests browse→apply conversion |
| R3: Sep '27 | HR dashboard, satisfaction, 180-day login due | Confirms it works for agencies and that people return |
| Ongoing | Scale beyond 6 agencies toward full TAM (~150,000) | Gated on data quality and matching accuracy holding at each phase |

## 5. Open Issues

**Metric & scope soundness**

| Issue | Owner | Needed by |
|---|---|---|
| 20% application-rate target vs. OTG baseline (0.21–2.19%) implies a 9x–100x jump, no stated driver | Michelle | Before PDO/leadership review |
| 6-agency SAM asserted from "policy mandate," never questioned — gates the entire roadmap | Michelle | Before strategy review |
| Theory of Change's causal claim (network-dependency → the gap) is asserted, not proven | Michelle | Before justifying the matching investment |
| Scope boundary (stints-only) is stated, not argued, while a sibling doc (R1) builds the excluded scope | Michelle | Before strategy review |

**Delivery blockers**

| Issue | Owner | Needed by |
|---|---|---|
| ~~Competency-matching / ringfencing dependencies~~ | — | **RESOLVED 2026-08-19** — see §3.2 |
| "Already applied" state has no confirmed MVP scope | Michelle → squad | **Still open** |
| Connectivity dependency not scoped or in test plan | Engineering lead | **Still open** |
| Demand-supply gap sustainability unconfirmed on CareerCompass | Michelle → agency sourcing | Before scaling past 6 agencies |
| OTEP-1185, "[Enhance Search]" story (Title+Agency combined query returns zero results due to score-threshold dilution) — correctly scoped as Post-MVP enhancement, not a defect | Unowned | Confirm severity/officer impact before deciding R1 vs. later Post-MVP sequencing |

**Housekeeping**

| Issue | Owner | Needed by |
|---|---|---|
| VCR table entirely unpopulated | Michelle → finance/PMP | Before using this doc to justify investment |

## 6. Appendix

### 6.1 Delivered — Officer End-to-End Journeys

*Epic 4 (OTEP-69) confirmed 47/47 Done, 2026-08-19 — MVP build is functionally complete ahead of the 21 Aug feature freeze. Framed as journeys, not a flat feature list, since that's what actually matters to an officer.*

**✅ Journey 1 — Internal Jobs, STIPs, Gigs (complete, discovery → application submitted)**

Login (auth-gated) → Listing (OTEP-85, sorted, ringfenced items pinned) → Search/Filter (OTEP-405, OTEP-86/437) → Detail page (OTEP-128, full fields + competency match via OTEP-336/570¹) → Apply (OTEP-319, FormSG redirect) → officer completes application on FormSG.

**✅ Journey 2 — Careers@Gov listings (complete, discovery → hand-off to C@G)**

Login → Listing (C@G badge, OTEP-88) → Filter/Search (shared listing infra) → C@G Detail page (OTEP-87) → Deep-link to Careers@Gov (OTEP-89) → officer completes application on the C@G platform.

**🔴 SJR — broken journey, no apply step.** Officer can discover and view an SJR detail page, but the OTG-redirect apply flow (OTEP-132) is deferred to R1 — a dead end, not a complete path, until then.

**⚠️ Systemic gap — no post-apply visibility, either journey.** Once an officer clicks through to FormSG or C@G, CareerCompass has no visibility into what happens next ("as far as CareerCompass is concerned, you vanished"). This is the exact gap R1's Epic C (status tracking) is built to close.

**⚠️ Known crack in both complete journeys — no "already applied" state.** An officer who's already applied and returns to the listing has no confirmed way to see that (§5, open issue) — a real first-impression risk even on the two journeys that are otherwise fully built.

**Supporting infrastructure (not a journey on its own):** empty/error/partial-load states · "closing soon" badge · closed/expired deep-link handling · ringfencing enforcement (OTEP-390/408/409, see §3.2 REQ-X2 caveat).

¹ *Competency match — see §3.2 REQ-X2 caveat: ticket confirmed shipped, underlying data dependency not independently verified.*

**Post-MVP (OTEP-575) — 13 items, all Backlog, no fix version/sprint/label set on any of them (fully untriaged, not roughly-sequenced).**

| Item | Journey impact | R1 recommendation |
|---|---|---|
| **OTEP-132** — SJR apply via OTG redirect | Fixes the broken SJR journey → 3rd complete journey | ✅ **Propose for R1** — fixes a *broken* journey, not a new one; matches R1's apply-friction thesis exactly; low build cost (same redirect pattern already proven) |
| OTEP-578 — OTG ingestion (Secondments, Internal Jobs, Rotations) | Widens the front door, all journeys | ❌ Not R1 — scope-widening, not friction removal |
| OTEP-577 — description-text search matching | Discovery step, relevance ranking | ❌ Not R1 |
| OTEP-607, OTEP-614 — competency-based filtering | Discovery step, fit-based narrowing | ❌ Not R1 — discovery-quality work, deprioritized by the R1 rationale doc in favor of apply-friction fixes |
| OTEP-615 — 3-char autocomplete | Discovery step, faster search entry | ❌ Not R1 |
| OTEP-576 — new filter categories | Discovery step | ❌ Not R1 |
| OTEP-612 — personalised recommendations | New: proactive surfacing (officers currently only browse/search) | ❌ Not R1 — same reasoning as competency filtering |
| OTEP-1185 — search-scoring enhancement (Story, not a bug; combined Title+Agency queries score below threshold) | Discovery step, search quality | ❌ Not R1 — correctly scoped as Post-MVP already; confirm officer-facing severity before sequencing, no reason to fast-track |
| OTEP-197, OTEP-425 — bookmarking | New: save-for-later, an interaction mode neither current journey supports | ❌ Not R1 |
| OTEP-986 — ringfencing for officers with multiple employments | Correctness fix, not officer-visible unless previously mis-shown | ❌ Not R1 |
| OTEP-1190 — upload audit trail | Not officer-facing at all | ❌ Not R1 |

**Net effect if all of OTEP-575 ships:** 2 complete journeys → 3 (SJR fixed). Discovery goes from reactive-only to proactive + higher-fidelity. Officers gain a save-for-later path that doesn't exist today. **Not addressed by any of it:** the two systemic gaps above (post-apply status, "already applied" state) — both are R1 Epic C scope, not Post-MVP-575 scope.

**Caveat on the one recommendation:** even OTEP-132 alone should come with an explicit capacity check before adding to R1 — the R1 discovery matrix already flagged FE capacity as tight (sole developer, 5 opportunity types, 3-month window) *before* any OTEP-575 additions.

---

*Generated: 2026-07-28. Last updated: 2026-08-19.*
