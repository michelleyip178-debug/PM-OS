---
date: 2026-08-14
week: 2026-W33
scope: POCDEX integration — data classification/approval, UAT coverage, Day-2 support/traceability, Ops Portal design, sync mechanics
status: Rewritten in full 2026-08-14 (evening) against three new companion documents — the operational design doc, the Day-2 Support RACI/SOP proposal, and the formal Ops Portal PRD. Supersedes all prior versions of this log.
---

# RAID Log — POCDEX Integration

**Why this log exists:** POCDEX-related risk has been tracked across many artifacts this week. This consolidates them into one place, updated in place rather than spun into new documents.

**Source documents behind this rewrite** (all dated 14 Aug 2026 unless noted):
- [Operational Design doc](2026-08-14-W33-pocdex-data-lifecycle-operational-design.md) — the authoritative reference; supersedes the 13 Aug discovery scope doc
- [Day-2 Support RACI/SOP Proposal](2026-08-14-W33-pocdex-day2-support-raci-sop-proposal.md) — candidate, unconfirmed
- [Ops Portal PRD v0.1](../prds/2026-08-14-W33-ops-portal-prd.md) — **supersedes** the 13 Aug OpsPortal Day-2 Traceability PRD
- open-items.md #55/#56, the 11 Aug classification/UAT thread, today's earlier Slack thread and Squad Sync notes (folded in, superseded where the new docs go further)

**Headline change since this morning:** most of what looked unresolved this morning (deployment status, identity join key, detection mechanism, field list) is now either answered or has a *named, dated* design behind it — because the "Request for POCDEX Data for CareerCompass" source document was located and reconciled against everything else. But the new documents also surface a materially worse risk than anything tracked before: **TC13 (email reuse causing one officer to see another officer's data) is now rated Critical**, and the fix for it is blocked on an unapproved privacy/security item. That's the new top risk on this log, not any of this morning's items.

Legend: 🔴 Critical/High · 🟡 Medium · 🟢 Low/Managed · ✅ Resolved

---

## Risks

| # | Risk | Likelihood | Impact | Notes |
|---|---|---|---|---|
| **R1** | **TC13 — email reuse causes data exposure between two different officers.** A new officer issued a departed officer's previous email can see the departed officer's employment and competency data. Rated **Critical** in the design doc's own gap register — "escalate above standard MVP-limitation framing." The designed fix (NRIC/FIN token as a fallback identity check) is **not yet approved**. | High — CC's MVP identity model (email-only) makes this structurally possible, not a rare edge case | **Critical** — real data exposure between two individuals, not just stale data | This is the single highest-severity item across all three new documents. Escalate independently of the rest of this log. |
| **R2** | **NRIC/FIN tokenisation has no privacy/security approval — rated Red, and blocks 4 test cases plus effectively all 4 complex identity scenarios.** Engineering's own recommendation: escalate this as a named, dated ask, not one item among many — it's the single highest-leverage open item in the entire Day-2 design. | High — flagged Red by the design's own risk rating | High — R1 (TC13) cannot be fixed until this clears; TC2, TC4, TC5, TC12 and both NRIC/FIN-blocked complex scenarios all wait on this too | Distinct from R1: R1 is the exposure, R2 is the blocked fix. Fixing R2 is how R1 actually closes. |
| **R3** | **CC's daily-diff detection design fully covers 3 of the 6 priority test cases (TC9, TC10, TC11) and misses 4 of the 14 total test cases entirely (TC2, TC4, TC8, TC13) — including R1 above.** The 6-field diff scope (agency, job family, job function, job grade, position/employment) doesn't include identity fields (email, NRIC/FIN, officerId), so identity-adjacent drift is invisible to the daily job even once built. | High — confirmed by direct scope analysis, not a guess | High — the flagship Day-2 detection mechanism, once built, still won't catch the highest-severity case (TC13/R1) without a scope decision to extend it | Decision needed: extend the diff to identity fields, or explicitly accept these 4 as out of automated-detection scope (Open Item #28) |
| **R4** | **Two independently-produced field classifications directly contradict each other on the same fields, with real design consequences.** The changed-fields extract analysis classifies `workemailaddress`/`idnumber` as **Base Data (cosmetic, low-risk)**. The Ops Portal PRD's Section 7.2.7 batch-categorization safety logic depends on the *opposite* — Identity/contact-change fields must stay case-by-case (high-risk), not bulk-eligible. If the Base Data classification were used instead, **batching would silently become unsafe for exactly the TC2/TC8/TC9/TC13 wrong-person-mapping cases.** | Medium — a live, unresolved contradiction, not hypothetical | High if unresolved before build — this is a structural safety mechanism, not a cosmetic labeling choice | Open Item #33 in the design doc. Must resolve to one answer before batch categorization (PRD Section 7.2.7) is built, not just before it's turned on. |
| **R5** | **Cross-system multi-hat/double-hat has no POCDEX-defined resolution rule.** Sized: **274 officers whole-of-government** hold conflicting active positions across HRPS + Cumulus simultaneously (worst case: officer P0157383-D9B, 4 positions, 2 systems, 2 agencies). Zero cross-source cases observed in the pilot population so far — this is a WoG-scale risk not yet manifesting at MVP scale. | High — confirmed, sized population; no design exists | High if it occurs in pilot — no path to fix; today it's a Woodrow-scale-only exposure, MVP is currently clean | Open Item #2. Distinct from same-source multi-hat (71 pilot cases), which has a proposed fix (deterministic Employment ID precedence). |
| **R6** | **Nothing in the Ops Portal / Day-2 design ships inside the MVP code freeze.** Direct Engineering confirmation: code freeze applies for VAPT and MVP launch — every capability in the new PRD (categorize-and-route portal, daily-diff job, receiving-team workflow) is a **post-MVP fast-follow**. | High — confirmed directly by Engineering, not inferred | High — Huiting's Day-2 traceability ask (the reason this whole workstream exists) will not be answered with working software at MVP go-live | This needs to be communicated to Huiting/Data Office explicitly as a timing fact, not left implicit — see R11 below |
| **R7** | **Three overlapping escalation/tier models exist with no reconciled answer, and Agency HR has no home in any of them.** (1) the design doc's own Tier 1-4 *fix-ownership* framework (Compass-patchable/needs-POCDEX/needs-upstream/structural gap); (2) the RACI proposal's T1-T4 *support-tier* structure (BO/Product Ops/Engineering/Upstream); (3) the POCDEX Data Request document's L1/L2/L3 *escalation ladder* (Ops team/Agency HR/POCDEX) — which explicitly notes L2 (Agency HR)'s procedures are "yet to be established." Agency HR doesn't appear as a stakeholder anywhere in the RACI's T1-T4 model. | High — three separate documents, none reconciled with each other | High — the receiving-team SOP (R9 below) can't be considered complete until this resolves; a correctly-detected case landing on a team with no defined authority fails as badly as a missed detection | Open Item #38. This is the structural version of what Squad Sync surfaced this morning as "no one agrees what the Ops Portal is for" (see R9) — same root problem, now with three competing formal artifacts instead of an informal gap |
| **R8** | **The RACI (Section 6 of the SOP proposal) has not been confirmed with the T2/T3/T4 owners it names.** Drafted from a single Squad Sync discussion. The clearest signal it contains — "SOP updates" being T2 (Product Operations)'s responsibility — implies T2 is the intended SOP author, but no stakeholder has said this explicitly. | Medium — internally consistent, but unconfirmed by design | Medium-High — if T2 isn't actually willing/resourced to own SOP authorship, the entire receiving-team plan (R7, R9) has no author | Needs direct confirmation from T2/T3/T4 owners, not inference from the RACI table alone |
| **R9** | ~~No shared understanding of the Ops Portal's purpose, user, or success criteria~~ **Substantially answered by the new PRD** — Section 3 (Background) and Section 4 (Objective) now state a clear purpose (BO sees drift, categorizes, routes — doesn't fix), a clear primary user (the BO), and Key Results. **What's still open:** the PRD's own Key Results have no baseline data, and the receiving team (who actually resolves a routed case) is still unnamed (R7/R8). | Low — purpose is now documented; residual risk is in receiving-team ownership, not portal purpose | Medium — the read-only categorize-and-route design itself is confirmed and stable; remaining risk is downstream of it, not the design gap Squad Sync flagged this morning | Today's Squad Sync gap is closed by the PRD's existence; don't re-open this as "no shared understanding" — the residual gap is narrower (R7/R8) |
| **R10** | **The MVP pilot record count doesn't reconcile across the document set.** The real snapshot comparison shows 5,322/5,342 records for the 6 MVP agencies; every other figure in the design doc cites **5,270** pilot officers. ~1% gap, not yet confirmed as a records-vs-distinct-officers counting difference or a different pull date. | Medium — small gap, but load-bearing figures (90 lifecycle-risk officers, 1.7%) rest on 5,270 | Low-Medium — doesn't change the qualitative picture, but should be confirmed before either number is cited externally (e.g. to Huiting) | Open Item #30 |
| **R11** | **Huiting/Data Office has not yet been told explicitly that nothing in this design ships at MVP.** Her original ask (Day-2 traceability, write-back) is a condition of her approving the current data-sharing approach. R6 confirms none of it lands before go-live — but there's no evidence this has been communicated to her as a plain fact yet. | Medium-High — a timing expectation gap with the approving stakeholder is a relationship risk, not just a scheduling one | High — if Huiting is expecting Day-2 tooling at go-live and discovers post-launch it doesn't exist, that damages trust more than communicating the gap now would | Needs a direct, proactive message to Huiting — this is a "tell her before she asks" situation, not a "wait and see" one |
| **R12** | **Course data delivery date — conflicting stakeholder accounts.** Imelda cites the official CSC delivery window as 31 Aug–4 Sep with no earlier commitment; Rama separately believes an engineer suggested mid-next-week might be possible. ~20% of UAT scope depends on which is real. | High — active disagreement between two named stakeholders | High — if the optimistic date is assumed and the pessimistic one is real, course testing starts 1-2 weeks late | Carried from this morning's Squad Sync — unchanged by the new documents |
| **R13** | **CSAT measurement approach (VOGA) is not viable** — CC is intranet-based, VOGA requires internet. Threatens the ability to evidence the MVP's CSAT success metric at all. | High — confirmed blocker | High — "did MVP succeed" becomes unanswerable without a working mechanism | Team leaning toward a lightweight in-house rating widget; ticket creation already decided (not deferred) — carried from Squad Sync |

**Resolved/closed today, no longer tracked as open risks:**
- **Data Sharing Form approval** — confirmed locked/finalized/approved by Rama.
- **Missing "last modified date" field** — moot; the daily-diff design (full-record comparison) doesn't need timestamp semantics at all, sidesteps the open risk entirely rather than depending on it.
- **Identity join key** — confirmed `officerId`, already load-bearing in production today for cross-system disambiguation. NRIC/FIN is a separate field, used for DLE matching, not the WOG AD → CC join.
- **Ops Portal deployment status / "what's it for"** — the formal PRD answers this directly (Section 3-4); no longer an open logistics or alignment question.
- **NPL threshold conflict** — resolved: NPL >90 days excluded by POCDEX before reaching CC; NPL <90 days unaffected. Confirms prior correspondence, resolves an apparent (not actual) conflict in the Support Guidelines wording.
- **Provenance of the "Request for POCDEX Data" source document** — located, reviewed, confirmed genuine and internally consistent (this is the document that resolved most of the above).

---

## Assumptions

| # | Assumption | Confidence | What breaks if wrong |
|---|---|---|---|
| A1 | The daily-diff job's field-diffability is the same at login-time and in daily-batch polling for `officerId`/`idType`/`status`/`jobId`. | Low-Medium — confirmed real and usable at login; **not confirmed** for daily-batch behaviour (Open Item #37) | If these fields don't behave consistently under daily polling, the diff scope built against them would silently miss changes, undermining the very detection mechanism this design is built around |
| A2 | Compass Product Operations is the correct receiving team for routed cases. | Low — inferred from one signal in an unconfirmed RACI ("SOP updates" = T2), not a stated assignment | If a different team is actually meant to own this, Sections 7.2.8-7.2.10 of the PRD need to be rewritten against a different owner's constraints |
| A3 | Linear extrapolation from pilot (×28.6) to whole-of-government is a reasonable planning approximation for effort/capacity sizing. | Low-Medium — the design doc's own extrapolation check shows real variance: duplicate/multi-hat ~5% off, missing email 44% understated, missing job metadata 24% overstated | Effort/capacity plans built on the extrapolation rather than the real WoG counts could be meaningfully wrong in either direction |
| A4 | The two field classifications (Base Data vs. Identity Data, R4) describe the same underlying data and just disagree on risk tier — not a deeper schema mismatch. | Medium | If the disagreement reflects something more structural (e.g. different underlying assumptions about what "identity" even means in this system), resolving R4 needs a design conversation, not just a relabeling exercise |
| A5 | Huiting's approval of the data-sharing approach doesn't hinge on Day-2 tooling existing *at* MVP go-live, only on a credible plan existing. | Low — untested; this is exactly what R11 flags as unconfirmed | If her approval was conditional on working tooling, not just a plan, R6 (nothing ships at MVP) becomes a go-live blocker, not a fast-follow note |

---

## Issues (already live, not hypothetical)

| # | Issue | Status | Owner |
|---|---|---|---|
| **I1** | Receiving team and SOP for routed changes still not formally named or written | 🔴 Open — candidate answer drafted (RACI proposal), not confirmed | Compass Product + Ops leadership |
| **I2** | Three overlapping tier/escalation models unreconciled (see R7) | 🔴 Open | Compass Product + Ops leadership |
| **I3** | NRIC/FIN privacy/security approval not obtained | 🔴 Open, rated Red by the design doc itself | Compass Security/Privacy |
| **I4** | POCDEX NRIC/FIN availability not confirmed reliable in all cases | 🔴 Open, rated Red | POCDEX |
| **I5** | Daily-diff scope excludes 4 of 14 test cases (TC2, TC4, TC8, TC13) — no decision made on extending vs. accepting the gap | 🔴 Open | Compass Product + Architecture |
| **I6** | ≥25 additional UAT scenarios POCDEX recommended — **26 draft scenarios now written** (Appendix B.2 of the design doc), covering multi-hatting, secondment, email changes, NPL, missing mappings | 🟡 Substantially progressed — drafted, **not yet reviewed with POCDEX or executed** | Compass + POCDEX |
| **I7** | Whether the 11 Aug Data Office request (confirm anything specific POCDEX needs for test-data prep) was actually responded to by the 11 Aug deadline | 🔴 Open, unconfirmed either way | Compass |
| **I8** | UAT/production data purge from UAT environment — committed by Engineering for 3 Sep; synthetic-data-approval question still open | 🟡 Partially resolved — purge date committed, approval question outstanding | Compass + Data Office (WD) |
| **I9** | Whether Compass retrieved production data from HRPS/Cumulus *before* formal WD Sensitive Data approval was granted — a live, unanswered process-integrity question from the Data Office | 🔴 Open — needs a factual answer, not a deferral | Compass |
| **I10** | Whether the sizing dataset (used for all the 90-officer / 274-officer / etc. figures) already contains MHA/MFA agency-specific competencies that should have been excluded | 🔴 Open — MHA reportedly already stripped by HRPS; MFA not yet checked | Compass + HRPS |
| **I11** | Daily-diff effort estimate (55-125 person-days) and API-volume NFR (~125,000 req/month) both predate the daily-batch design decision and need re-validation against it specifically | 🔴 Open | Compass + POCDEX (for API volume agreement) |
| **I12** | MVP pilot record-count discrepancy (5,270 vs. 5,322/5,342) — see R10 | 🟡 Open, low urgency | Compass Product + Architecture |

**Resolved today:**
- **I13 (was: POCDEX field list request)** — ✅ resolved. Full API contract now documented (Data Request document, reconciled in design doc Section 7.2.1b).
- **I14 (was: Ops Portal deployment status unconfirmed)** — ✅ resolved via the formal PRD's existence and Section 3's design confirmation.

---

## Dependencies

| # | Dependency | Chain | Risk if it slips |
|---|---|---|---|
| **D1** | NRIC/FIN privacy/security approval (I3/R2) → TC13 fix (R1) → 4 test cases + all NRIC/FIN-blocked complex scenarios | Root dependency for the entire identity-safety story. Engineering's own recommendation: escalate this above all other open items. | R1 (email-reuse data exposure between individuals) stays live and unmitigated for as long as this is unresolved |
| **D2** | Receiving team named + SOP written (I1) → Release 3 of the Ops Portal PRD (remediation tooling, formalized workflow) | Sequential — can't build remediation tooling for a team and process that don't exist yet | Release 3 stalls indefinitely; Releases 1-2 (portal, daily-diff) can proceed without this, but nothing ever gets *fixed*, only detected and categorized |
| **D3** | Field-mapping reconciliation (done — Section 7.2.1b) → daily-batch diffability confirmation for officerId/idType/status/jobId (#37) → extending the diff scope to identity fields (I5) | Two-step: mapping is done, diffability under daily polling is not yet confirmed | If diffability fails, the identity-field extension needed to catch TC13 (R1) can't be built as currently designed — a different mechanism would be needed |
| **D4** | Base/Identity classification conflict (R4) resolved → Batch Categorization (PRD 7.2.7) safe to build | Blocking — building batching before this resolves risks shipping an unsafe bulk-action path for the highest-risk categories | A batching feature that silently allows bulk-routing of Identity/contact-change cases is a worse outcome than not building batching at all |
| **D5** | Effort re-validation (I11) → funding/scheduling decision for Option 2 (daily-diff job) | The 55-125 PD estimate is explicitly flagged as unconfirmed for the batch-job shape it now needs to cost | Funding decisions made against the stale estimate could be materially wrong once re-validated |
| **D6** | Three tier-model reconciliation (R7) → receiving-team SOP (I1) being genuinely complete | Agency HR needs a home in *some* model before the SOP can be considered done | A case correctly routed per an incomplete model could land on a team with no defined authority — fails as badly as a missed detection |

---

## Sizing & Evidence Reference

Everything below is now measured against real production data, not estimated — worth citing directly rather than re-deriving.

**Pilot (6 MVP agencies, 5,270-5,342 officers depending on which count is used — see R10):**
- Lifecycle-risk population: **90 officers (1.7%)** — 71 duplicate/multi-hat + 19 missing-email
- Missing job metadata: 279 (separate backlog)
- Highest-risk pilot case: 1 officer, 3 active positions, single source system
- MDDI is a confirmed **data-quality outlier** on two independent signals: 11.4% duplicate/multi-hat rate (vs. 0.3-1.8% elsewhere) and 5.17% affected-record change rate (vs. 1.46-4.38% elsewhere), plus highest fields-per-affected (2.82 vs. 1.33-2.00)

**Whole-of-Government (152,895 records):**
- Potential duplicate records: 3,827 → 1,905 distinct affected officers (1.25%)
- Cross-source multi-hat: **274 officers** (worst case: 4 positions, 2 systems, 2 agencies) — see R5
- Missing email: 782 (0.51%); Missing job grade: 6,064 (3.97%)

**14-day change-frequency (15-29 Jul snapshots, all agencies):**
- **3.45%** of records (5,259/152,559) had ≥1 field change — ~781 field changes/day WoG, ~23/day across 6 MVP agencies
- MVP-scope specifically: **172 affected records, 326 changed fields** over 14 days across all 6 pilot agencies — small enough for human-reviewable triage without automation at MVP scale
- Field split: ~51% Employment Profile Data (drives competency/role mapping), ~49% Employment Base Data (cosmetic/display) in MVP agencies — see R4 for the classification conflict this same data feeds into

**Ops Readiness (from the earlier field-list/gap-assessment doc, still valid):** Ops can diagnose ~80% of user issues but fix **<30%** of root causes. Feed this into the PRD's Key Results conversation — any target for "% resolved without escalating to POCDEX" set without accounting for this ceiling will underperform.

---

## Priority to Resolve

Ranked by severity and how much each item gates everything downstream. **Fully re-ranked 2026-08-14 (evening)** — this morning's top items (Ops Portal purpose, deployment status) are resolved; today's new top item is a genuine data-safety risk, not a process gap.

| Rank | Item | Why it's ranked here | Owner | When |
|---|---|---|---|---|
| **1** | **R1/R2 — Escalate NRIC/FIN privacy/security approval as a named, dated ask** | This is Engineering's own explicit recommendation and the single highest-leverage item across all three new documents. Unresolved, it leaves a real data-exposure risk (TC13, Critical severity) live indefinitely. Nothing else on this list matters as much. | Michelle → Security/Privacy leadership, direct escalation | **This week — do not let this ride as one item among many** |
| **2** | **R11 — Tell Huiting explicitly that nothing in this Day-2 design ships at MVP go-live** | A timing-expectation gap with the approving stakeholder is a trust risk if discovered post-launch rather than communicated now. Cheap to do; expensive to skip. | Michelle → Huiting, direct message | This week |
| **3** | **R7/R8/D6 — Reconcile the three overlapping tier models and confirm the RACI with T2/T3/T4 owners** | Structural version of this morning's "no shared purpose" gap — now with three competing formal documents instead of an informal disagreement. Blocks the receiving-team SOP (I1) from ever being genuinely complete. | Michelle, Rama, Adrian + T2/T3/T4 owners | This week |
| **4** | **R3/I5 — Decide: extend the daily-diff scope to identity fields, or explicitly accept TC2/TC4/TC8/TC13 as out of automated-detection scope** | The flagship detection mechanism currently can't catch the highest-severity case (TC13/R1) as scoped. This is a scope decision with two clear options already on the table — not new research. | Michelle, Rama, Architecture | This week |
| **5** | **R4/D4 — Resolve the Base Data vs. Identity Data classification conflict** | Blocks batch categorization from being buildable safely. Both candidate answers already exist — this needs a decision, not more analysis. | Michelle (Product) | Before Release 2 build starts, ideally this week |
| **6** | **I6 — Get the 26 drafted UAT scenarios reviewed by POCDEX and scheduled against the UAT window** | Substantially de-risked from this morning (drafted, not just requested) — but still needs POCDEX's eyes and an execution slot before UAT closes 28 Aug. | Michelle, POCDEX | This week — window is closing |
| **7** | **I9 — Answer the Data Office's process-integrity question (was production data pulled before formal SD approval?)** | A live, factual question from the approving stakeholder. Omitting an uncomfortable answer costs more trust than stating it plainly, per the design doc's own framing. | Michelle | This week |
| **8** | **I10 — Confirm the sizing dataset doesn't already contain excluded MHA/MFA competency data** | Verification action, not a design question — needs a factual yes/no before the extract or its figures are cited further in the Data Sharing Form submission. | Compass + HRPS | This week |
| **9** | **R12 — Course data delivery date reconciliation** | Carried from this morning — ~20% of UAT scope depends on resolving the Imelda/Rama discrepancy. | Jace Tan → CSC/Marcus | This week |
| **10** | **A1/D3 — Confirm daily-batch diffability of officerId/idType/status/jobId with POCDEX** | Gates whether the identity-field diff extension (rank 4, if chosen) is even buildable as designed. | Architecture + POCDEX | After rank 4 decision |
| **11** | **I11/D5 — Re-validate the daily-diff effort estimate and API-volume NFR against the real batch-job design** | Needed before Release 2 can be funded/scheduled with confidence. | Compass + POCDEX | Before Release 2 funding decision |
| **12** | **R5 — Design a cross-system multi-hat resolution rule** | High severity if it occurs, but currently zero pilot cases — WoG-scale risk, not an MVP-blocking one today. | Compass + POCDEX | Post-MVP discovery, per design doc sequencing |
| **13** | **R10/I12 — Reconcile the 5,270 vs. 5,322 pilot record-count discrepancy** | Low urgency, but should close before either figure is cited externally again. | Compass Product + Architecture | This week, low priority |
| **14** | **R13 — CSAT measurement mechanism** | Already moving (ticket decided) — carried from this morning. | Imelda | Ticket this week; build TBD |

**The pattern worth naming:** the three new documents didn't just answer this morning's open questions — they surfaced a genuinely more serious risk underneath them. This morning's "we don't know what the Ops Portal is for" gap was a process problem; today's "TC13 lets one officer see another officer's data, and the fix is blocked on an unapproved security item" is a real risk to real people's data. Worth internalizing: resolving a process gap sometimes just clears the fog enough to see the actual risk that was underneath it the whole time.

---

## What This Means Going Forward

**The single most important action this week is escalating the NRIC/FIN approval (rank 1).** Everything else on this log — the detection scope decision, the batching safety question, even the receiving-team SOP — either depends on it directly or is secondary in severity to the risk it leaves open. Recommend treating this as a standalone escalation, not folded into a general status update.

**Second: communicate the MVP-timing reality to Huiting now (rank 2).** The three new documents make it unambiguous that nothing ships at go-live. She's the approving stakeholder for the whole data-sharing relationship — she should hear this from Compass proactively, not discover it.

**Third: the tier-model reconciliation (rank 3) is worth doing once, properly, rather than patched incrementally.** Three separate documents (this design doc, the RACI proposal, the POCDEX Data Request document) each independently invented a tiering scheme. A fourth patch would make this worse, not better — this needs one working session that produces one answer, with Agency HR explicitly placed.

**Lower down the list but worth flagging:** the UAT scenario work (rank 6) has moved from "unowned ask" to "drafted, needs review" — genuine progress since this morning, and the closing UAT window (28 Aug) makes it time-sensitive despite not being top-ranked by severity.

---

## Document Map

For anyone picking this up fresh, the source documents in reading order:

1. [Operational Design doc](2026-08-14-W33-pocdex-data-lifecycle-operational-design.md) — start here; the most complete and current single source
2. [Ops Portal PRD v0.1](../prds/2026-08-14-W33-ops-portal-prd.md) — the product spec for what BOs actually see and do
3. [Day-2 Support RACI/SOP Proposal](2026-08-14-W33-pocdex-day2-support-raci-sop-proposal.md) — candidate operating model, explicitly unconfirmed (Section 17 lists everything still open)

**Superseded by the above, kept for history only:**
- [2026-08-13 OpsPortal Day-2 Traceability PRD](../prds/2026-08-13-W33-opsportal-day2-traceability-prd.md) — superseded by the v0.1 PRD above
- [2026-08-13 Discovery Scope doc](2026-08-13-W33-ops-portal-day2-discovery-scope.md) — superseded by the Operational Design doc
- [2026-08-14 (morning) POCDEX field-list/Ops Readiness doc](#) — content absorbed into the Operational Design doc's Section 7.2.1b

---

*Generated: 2026-08-14 (evening), full rewrite superseding all prior versions of this log from earlier today.*
*Source: three new companion documents (Operational Design doc, RACI/SOP Proposal, Ops Portal PRD v0.1), all dated 14 Aug 2026, reconciling the "Request for POCDEX Data for CareerCompass" source document against everything previously tracked.*
*Next: escalate NRIC/FIN approval (rank 1) this week; message Huiting on MVP timing (rank 2) this week; convene the tier-model reconciliation session (rank 3) this week.*
