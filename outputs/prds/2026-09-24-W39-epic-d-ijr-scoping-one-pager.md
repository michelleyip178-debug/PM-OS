**⚪ SUPERSEDED, 25 Sep — folded into [Epic B: Internal Jobs (incl. IJR)](2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md).** This document is kept for historical traceability (it has its own four-rewrite history worth preserving) but is no longer the active reference for IJR scope. IJR's shape converged with Internal Jobs' (discovery-only, no native build) after this document's own Sections 11/13 recommended folding its estimate into Epic B's rather than tracking it separately — that recommendation is now acted on. Use the linked Epic B document for current IJR scope, risks, and stories.

---

*Draft, not yet synced to Confluence. Rewritten a fourth time today. Source: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-25, reversed), [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md) (Epic B row, structural model for this epic now), [IJR/SJR CareerCompass Scope Exploration](../analyses/2026-09-22-W39-ijr-sjr-careercompass-scope-exploration.md).*

# CareerCompass | OTEP-Pathfinder — Epic D: IJR

| | |
|---|---|
| **Release** | R1 (Opportunities Marketplace) — Epic D |
| **Date** | 24 Sep 2026 |
| **Target** | **⚠️ Pending re-estimate (R-12)** — no epic-specific date yet |
| **Status** | **Reversed 25 Sep — rewritten as a discovery-only epic, grouped with Internal Jobs** |
| **Author** | Michelle Yip |
| **Last updated** | 25 Sep 2026 (fourth rewrite — reversed from native-Compass shape to OTG-hosted, discovery-only, per R-25) |
| **Product Designer** | Li Ting Kway (Liting) |
| **Engineering Leads** | Rama Moorthy, Barry Lim |

## The Short Version

This is Epic D's fourth rewrite in three days — reversed 25 Sep, per Mark & GK's confirmed R1 direction, from the native-Compass shape confirmed 24 Sep to a much thinner discovery-only epic. IJR's shape now matches Internal Jobs in one sense only: both are discovery-only, with no native apply, creation, or review in Compass. Their ingestion sources have since diverged (D-049) — IJR postings continue in OTG, Compass surfaces them for discovery, officers redirect back to OTG to apply; Internal Jobs now ingests directly from HRPS/Cumulus instead. HR's process is unaffected by R1 under this model, exactly as it runs today.

None of 24 Sep's confirmed native-Compass work applies going forward: no self-serve creation in Compass, no in-app applicant review for Agency HR, no in-app officer status tracking, no in-app Decision stage. The only mechanic Compass still owns is discovery: pulling IJR postings into the unified catalog and respecting IJR's ringfencing (agency-level plus optional per-officer eligibility criteria, per the 23 Sep BO clarification — this distinction still applies to what the discovery view needs to respect, even with nothing built natively).

> **🔴 REVERSED, 25 Sep.** Full detail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-25). This is a confirmed, final decision, matching the same direction applied to Internal Jobs, STIPs & Gigs, and Secondment.

---

## 1. Background & Context

**Why this matters strategically:** IJR opportunities are currently invisible to officers outside their own agency's HR channel. Under this epic's current, reversed scope, Compass fixes the *discovery* half of that gap — officers can find IJR listings WOG-wide — but not the apply or status-tracking half, which stays inside OTG-adjacent, offline processes exactly as it does today.

**What changed today (25 Sep):** IJR reverses from the STIPs & Gigs native shape confirmed 24 Sep back to a discovery-only, OTG-redirect model, grouped with Internal Jobs and Secondment. This is the fifth distinct status this scope question has carried in three days (R-25 has the full history if it's ever needed) — this document only carries the current, final state forward and won't re-litigate the prior four states here.

**Relationship to other epics:** this epic now mirrors Epic B (Internal Jobs) in the [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md)'s scope table in shape (both discovery-only, no native apply/creation/review) but not in ingestion source. The distinguishing factor from Internal Jobs is IJR's ringfencing model (per-officer eligibility criteria, not just a flat agency check) and its source system: IJR ingests from OTG directly. Internal Jobs' primary path no longer feeds through OTG as of D-049 (25 Sep) — it ingests directly from HRPS, with Cumulus pushing into HRPS upstream, though some postings remain OTG-only. That's a bigger divergence than previously stated.

## 2. Problem Statement

**For officers:** IJR opportunities live inside OTG and agency-internal HR processes. Today, an officer has no way to browse IJR openings from Compass. This epic closes the discovery half of that gap. **It does not close the apply half** — applying, and everything downstream, redirects back to OTG, unchanged from today.

**For Agency HR:** HR's process is entirely unaffected by R1 under this model. No new in-app review tool, no new intake channel. Whatever HR does today for IJR, they continue doing.

**What this epic does NOT solve:** native apply, in-app HR review, in-app status tracking, and any matching/assignment logic — none of this is R1 scope for IJR anymore. If a future release reopens native IJR build, this document's prior version (24 Sep, STIPs & Gigs shape) is a ready reference, not something to reinvent.

## 3. Target User

**Population:** WOG-wide catalog visibility, per the BO-confirmed 23 Sep distinction (unaffected by the reversal): any officer can see IJR listings exist, but eligibility/matching resolves to their own agency, since IJR is structurally within-agency by definition (per the Rotation Guidebook).

- **Lane 1 — Discoverer:** any officer browsing the unified Opportunities catalog who sees an IJR listing. The only Compass-native user this epic serves. Clicking through redirects to OTG.
- ~~**Lane 2 — Posting Creator (Agency HR or any officer): self-serve creation.**~~ **Drops, 25 Sep.** Posting continues in OTG. Compass offers no creation flow.
- ~~**Lane 3 — Co-evaluator.**~~ **Drops, 25 Sep.** No Compass-native review means no Compass-side collaborator role.

## 4. Value Propositions & Hypotheses

### 4.1 Overall Value Propositions

- **For Officers:** "Find IJR opportunities across your agency in one place, alongside every other opportunity type." Discovery-only — drop any claim about applying faster or more easily, that part is unchanged from today.
- ~~**For Agency HR:** "Review IJR applicants in one place instead of juggling OTG-adjacent tools."~~ **No longer holds, 25 Sep.** HR's process doesn't change under this epic.

### 4.2 Core Hypotheses (1 Line Each)

1. **Unified Discovery:** *If* IJR postings appear in Compass's unified catalog alongside other opportunity types, *then* officer awareness of IJR openings in their agency increases, since they no longer need to know OTG is where to look. No target set yet.

*This replaces the native-apply/HR-turnaround hypotheses drafted 24 Sep, which no longer apply.*

## 5. End-to-End User Journeys

### 5.1 Officer Journey (Discover → Redirect → Apply on OTG)

1. **Discover:** logs in, lands on the unified Opportunities catalog, sees ringfenced IJR listings (agency-level plus optional per-officer eligibility criteria).
2. **Apply:** clicks Apply, redirects to OTG. Whether Compass can deep-link to the specific posting or only the general OTG landing page is IJR's open sub-issue under R-07. Internal Jobs' R-07 concern is now a separate question (D-049): whether the HRPS API ships at all, not deep-linking capability.
3. ~~**Track:** checks status in-app.~~ **Drops, 25 Sep.** No in-app status tracking.
4. ~~**Outcome:** sees a decision badge in-app.~~ **Drops, 25 Sep.** Outcome communication happens entirely outside Compass, unchanged from today.

### 5.2 Agency HR Journey

**Unaffected by R1.** HR's process for reviewing and deciding on IJR applicants continues exactly as it runs today, entirely outside Compass.

---

## 6. Success Metrics

- **Discovery reach:** number of IJR listings pulled into Compass's catalog, and officer views per listing. The primary metric this epic can actually measure.
- **OTG Redirect Click-Through Rate:** % of IJR detail views that click through to OTG. Mirrors the equivalent metric for Internal Jobs.
- ~~Apply completion rate, HR review turnaround, status latency~~ — **drop, 25 Sep.** None of these are measurable from Compass under the reversed model; they happen entirely on OTG's side.

## 7. Scope (Stories + Success Criteria)

| Stage | Story | Success Criteria | Groomable now? |
|---|---|---|---|
| Discovery | Pull IJR postings into Compass catalog | IJR listings from OTG appear in the unified Opportunities catalog, ringfenced per agency plus per-officer eligibility criteria | Yes, pending OTG sync mechanism (IJR-specific; Internal Jobs' equivalent open question is now HRPS API delivery, not OTG sync, per D-049) |
| Discovery | Redirect to OTG to apply | Clicking Apply sends the officer to OTG — specific posting if deep-linking is supported, general landing page otherwise | Yes, pending the OTG deep-link answer (IJR's own sub-issue under R-07, no longer shared with Internal Jobs — see R-07 detail) |
| ~~Creation~~ | ~~Self-serve posting creation~~ | **Drops, 25 Sep — posting stays in OTG** | N/A |
| ~~Application~~ | ~~Native structured-form apply~~ | **Drops, 25 Sep — redirect replaces this** | N/A |
| ~~Review~~ | ~~In-app HR applicant review table~~ | **Drops, 25 Sep — HR review stays offline/OTG-side** | N/A |
| ~~Decision~~ | ~~Offer/Reject or pooled matching~~ | **Drops, 25 Sep — no in-app decision stage, question is moot** | N/A |
| ~~RBAC~~ | ~~HR actor access model~~ | **Drops, 25 Sep — no in-app data to gate access to** | N/A |

**Explicitly Out of Scope:** native creation, native apply, in-app HR review, in-app decision/matching logic, RBAC for an in-app HR actor, everything previously scoped in the 24 Sep native-shape version of this document.

## 8. What We Need You to Design (For Liting)

**Design scope drops to the same shape as Internal Jobs, 25 Sep.** The structured application form, HR review table, and status-tracking components Liting was cleared to start on 24 Sep are all out of scope again.

1. **IJR's discovery card/detail view** — likely shares a pattern with Internal Jobs and Secondment, not a bespoke component.
2. **The OTG redirect treatment** — shared design work, see the parent R1 one-pager Section 8, item 4.

Nothing IJR-specific needs dedicated design time beyond ringfencing-aware discovery, which may already be covered by Internal Jobs' component work.

## 9. Data Analysis & Evidence

No usage data exists for IJR inside CareerCompass. OTG-side volume data (cycles per year, per agency) exists in the Rotation Guidebook and could ground a discovery-reach estimate, not yet pulled in.

## 10. Market / Benchmark Scan

Not done.

---

## 11. Go-To-Market & Timeline

**⚠️ Pending re-estimate (R-12).** This epic's build shrinks to roughly the same size as Internal Jobs (Epic B) under the reversal — a discovery pull-through and a redirect link. Should be folded into the same estimation pass as Epic B, not sized as a separate large build the way the 24 Sep version anticipated.

---

## 12. Risks, Assumptions & Mitigations

| Risk | Category | Impact | Mitigation |
|---|---|---|---|
| **R-25 — Reversed to OTG-hosted, redirect-only (25 Sep)** | Scope | Fifth status change in three days for this scope question. All 24 Sep native-Compass work is out of scope again | Rewrite complete — this document reflects the current, final state. Confirm with Mark/GK this is genuinely final before further downstream work (see parent R1 one-pager, Section 14) |
| **R-07 — OTG deep-link question (IJR's sub-issue)** | Integration | Whether Compass can deep-link to a specific IJR posting or only the general OTG landing page. No longer shared with Internal Jobs — Internal Jobs' R-07 concern is now the undelivered HRPS API (D-01, D-049), a separate sub-issue under the same risk ID | Get a direct answer on OTG deep-linking capability for IJR |
| **R-30 — OTG data migration (MOOT, 25 Sep)** | Data / Technical | IJR data stays on OTG under the reversed model — Compass never ingests it, so there's no migration to plan | No action needed. Reopen fresh if a future release moves IJR data natively into Compass |
| **R-31 — Architecture whiplash (new, 25 Sep)** | Process | This epic has now been rewritten four times in three days — real risk of team trust erosion and wasted rework if a fifth reversal happens | Confirm alignment across Adrian, Xian, and Mark/GK jointly before treating any future IJR scope change as final |

## 13. Engineering Requirements Summary

Shares the same squad as the rest of R1. Now sized similarly to Internal Jobs (Epic B) — a discovery pull-through plus redirect, not the native build the 24 Sep version anticipated. Recommend folding into the same estimation and sprint slot as Epic B rather than treating as a separate large effort.

## 14. Decision Tracker (Key BO Calls Needed)

| Decision Needed | Who Decides | Needed By | Recommendation |
|---|---|---|---|
| **Confirm this reversal is genuinely final** | Michelle Yip, Adrian Ang | Immediately — see parent R1 one-pager Section 14 | Don't commit further design/engineering time until confirmed jointly with Mark/GK |
| **OTG deep-link capability for IJR** | Rama Moorthy, Adrian Ang | Before discovery stories are finalized | Get a direct technical answer. No longer resolves Internal Jobs too (D-049) — that epic's open question is HRPS API delivery, tracked separately |
| ~~**Decision-stage shape: simple Offer/Reject, or pooled matching view?**~~ | Adrian Ang | — | **No longer applies, 25 Sep** — no in-app Decision stage exists |
| ~~**OTG data migration: migrate at launch, or start clean?**~~ | Adrian Ang, Rama Moorthy | — | **Moot, 25 Sep (R-30)** — IJR data stays on OTG |

---

*Related: [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md), [Epic A One-Pager](2026-09-24-W39-epic-a-stips-gigs-one-pager.md) (no longer this epic's structural model — see Epic B row instead), [IJR/SJR CareerCompass Scope Exploration](../analyses/2026-09-22-W39-ijr-sjr-careercompass-scope-exploration.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, R-25, R-30, R-31)*

*Next review: once Mark/GK alignment is confirmed and this epic's estimate is folded into Epic B's. If a future release reopens native IJR build, the 24 Sep version of this document (STIPs & Gigs shape) is the reference to restart from, not a fresh design.*
