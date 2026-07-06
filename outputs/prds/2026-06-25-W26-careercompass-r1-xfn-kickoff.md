---
feature: CareerCompass Release 1
stage: XFN Kickoff
last_updated: 2026-07-03
owner: Michelle Yip
status: In Review — pending Mark sign-off (#40)
links:
  epic-brief: outputs/decisions/2026-06-23-W26-r1-epic-brief-confluence.md
  r1-jam: outputs/decisions/2026-06-22-W26-r1-jam-draft-v2.md
  okrs: PM-skills-ALL-1/06-skills-and-decisions/otep-roadmap-okrs-2627.md
---

# CareerCompass — Release 1 (R1)

**Release target:** January 2027  

**Pilot cohort:** ~5,400 officers, 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS)

---

> **⚠️ Recent Changes (2026-07-03, sourcing updated 2026-07-06):** Epic C reverted from ATS integration ("World A") back to fully OTEP-native status tracking ("World B") — **ATS confirmed not ready until 2028** (source: Engineering Team, 2026-07-06 — ATS integration requires an e-tender process; this is now a sourced fact, citable directly at SteerCo). This reverses D-026 and re-confirms D-030. Removes the ATS-integration risk, but creates a new one: a native manager status-update UX that was never designed under World A. See [Decisions Log](#key-decisions-made) for full history. Full candidate-idea prioritization work for R1 (15 ideas, ICE-scored) lives in a separate linked analysis, not in this document — see link below.

---

## Problem and Hypothesis

MVP gets an officer to the door of an opportunity. Browse, filter, view, click out to apply. That's where it ends.

The moment an officer clicks Apply, CareerCompass loses them: they land in FormSG, fill the form from scratch, submit into a void, and hear nothing. The application is invisible to the platform. From CareerCompass's perspective, no development action occurred.

R1 closes that loop.

**Hypothesis:** If we bring opportunity creation, application submission, and status tracking in-house, then apply completion rate increases from ~15-20% to 40%+ and 10% of pilot officers complete a development action by Mar 2027, because officers currently drop off at three distinct failure points: the redirect, the blank form, and the status black hole.

**The three failure points R1 fixes:**

| Failure point | Today | R1 |
|---|---|---|
| The redirect | Officer leaves CareerCompass to an external FormSG or C@G site | Native in-Compass apply form, no external handoff |
| The blank form | Officer re-enters all details manually, no profile data carried over | Pre-filled from officer's OTEP profile |
| The status black hole | Application disappears into a FormSG inbox, officer hears nothing | End-to-end status tracking, natively in OTEP (World B) |

**Why the North Star is blocked without R1:** You can't count a completed development action if the action happens outside the platform. Every application today is invisible the moment the officer clicks Apply.

---

## Strategic Fit

Three OKR targets only unlock if R1 ships on time:

| OKR | Target | R1's contribution |
|-----|--------|-------------------|
| North Star | 10% of onboarded officers complete a development action by Mar 2027 | R1 is the only release that makes in-platform completion measurable. Without it, the target is unmeasurable. |
| OKR 2 | 1,850 officers applied via CareerCompass by Q4 2028 | ~405-540 applications expected in the pilot cohort in Q1 '27 alone — ~22-29% of the lifetime target in the first quarter. |
| Status latency | Updates to officer within 24 hours of hiring-manager action by Q1 2027 | Measurement point is HR manager action *in OTEP* (World B — no external ATS event). Removes external latency risk, but OTEP now owns the full manager-action UX. **Needs Adrian's explicit sign-off** — this redefines what the OKR measures, not just where it's measured, and hasn't been confirmed with him yet. |

**Agency-side case:** Posting managers today work across three systems with no connective tissue: opportunity lives in OTG, applications land in email, tracking lives in a spreadsheet. Internal Jobs and Secondments have no creation tooling at all — removed from MVP because no native path existed. R1 rebuilds the full posting lifecycle inside CareerCompass.

---

## The Five Epics

**R1 = Create it. Post it. Pre-fill it. Submit it. Track it. Save it. Sync it.**

### Epic A — Opportunity Creation

Agencies author and manage postings directly in CareerCompass: structured creation form, OTEP-native posting record, publish workflow, edit/close lifecycle.

**In scope:** Internal Jobs, Secondments, STIPs, Gigs, PSFG (conditional — see Open Questions #1).  

**Out:** SJR creation, C@G (stays on its own rails), criteria authoring (POCDEX write path blocked).  

**Readiness gate:** Agency-admin auth undefined. Who these users are, how they authenticate, and who builds it is unresolved — this must be confirmed before the R1 story pipeline opens.

**Design principle — Creation as the data front door, not just a posting form:** Epic A is the only R1 epic that serves the agency-side half of the CareerCompass mission ("giving agencies better competency and workforce-planning visibility") rather than the officer-facing half. How it's structured now determines whether later releases inherit clean data or a migration tax:

- **Competency tagging at point of creation, not as optional metadata.** Every opportunity type should require OCC tagging when authored — the same standard already set as non-negotiable for PSFG (WD confirmed all PSFG opportunities can be tagged against OCCs). If Creation becomes the front door where every opportunity enters with structured competency data, it directly feeds OKR 1 (competency growth) and the Competency Gap Detection Engine / AI Job Matchmaker planned for R5-R6. Skipping this recreates the #18/#41 SSOT problem from the supply side instead of the profile side. **Open problem, not yet solved:** manual tagging alone may not scale to every opportunity, every author, and C@G-ingested jobs arrive with no competencies attached at all — mirrors the missing-competency-data gap the ESG meeting surfaced on the officer side. See [open item #54](../../../PM-skills-ALL-1/00-hub/open-items.md) for early exploration; not sized, not committed to R1.
- **Structured fields over free text, so workforce-planning analytics falls out as a byproduct.** OKR 3 (80% of agencies using analytics dashboards by Q1 2028) needs agencies to see patterns — fill-rate gaps, scarce competencies, engagement by opportunity type. If Creation captures role level, function, competency requirements, and time commitment as structured fields now, R3's dashboard work gets this data for free. If it stays loosely structured to move fast, R3 inherits the same unstructured-data problem R1 exists to fix in OTG.
- **Model opportunity type as metadata on a shared schema, not a hardcoded category.** The WD/PSFG conversation surfaced an unresolved governance question — organize by programme type (STIP/Gig/PSFG/Secondment as parallel categories) or by user need (duration, commitment, outcome)? That question will resurface with every new programme that wants in (PSLF already named as a likely next ask). If Creation treats opportunity type as a first-class schema concept, each new category is an engineering request. If it's built around a smaller set of shared structured attributes that types map onto, new categories become configuration — serving OKR 3's agency-scale ambitions (60-100% of agencies by 2027) without a re-architecture each time.

**Not a commitment to build now** — R1 scope stays as defined above. This is a design lens for how Creation's schema and forms get built, so R2+ releases (recommender, gap analysis, dashboards) don't pay a data-quality tax for R1 decisions.

Discovery on how to address these gaps (not committed solutions): **[Epic A — Opportunity Solution Tree](../archive/2026-W27-Jun29-Jul3/analyses/2026-07-03-W27-epic-a-opportunity-solution-tree.md)**.

### Epic B — Streamlined Apply + Smart Pre-fill

A native in-Compass application form (no FormSG redirect). Auto-populated from the officer's OTEP profile — competencies and work history filled in, officer reviews, edits where needed, submits without leaving CareerCompass.

**In scope:** In-Compass form (OTEP-native), profile-driven pre-fill.  

**Out:** CV upload, CIE inference (OTEP-205). Pre-fill is profile-driven only.  

**Dependency:** Competency SSOT endpoint contract between Léo and Kingsley (open items #18/#41) must be finalised before pre-fill quality can be guaranteed.

**Design principle — pre-fill as trust infrastructure, not just a convenience feature:** Epic B is the epic that most directly serves the officer-facing half of the mission ("officers grow with clarity and purpose"). Its job isn't just removing form friction — it's the first place officers experience whether CareerCompass's competency data is trustworthy at all, which shapes how much they'll rely on every later release (gap analysis, recommendations, matchmaking).

- **Pre-fill accuracy is a trust signal, not just a UX convenience.** The PRD's own guardrail already treats this correctly (stale/wrong pre-fill must not increase abandonment vs. baseline) — worth keeping front of mind that a bad pre-fill experience here doesn't just cost this epic's completion-rate target, it teaches officers not to trust competency data anywhere else in the product.
- **Profile-driven-only pre-fill is a current-state signal — the same limitation the market's biggest job boards have.** Market research on talent-marketplace matching ([brief](../research-synthesis/2026-07-03-W27-talent-marketplace-job-matching-approaches.md)) shows LinkedIn/Indeed match on current-profile similarity, which the recommender hypotheses (H2) predict under-delivers for opportunity decisions specifically. This isn't a live R1 problem (pre-fill's job is accurate autofill, not aspirational matching — those are different jobs), but worth naming so the opportunity recommender (R2+) doesn't inherit Epic B's data shape uncritically.

**Not a commitment to build now** — R1 scope stays profile-driven pre-fill only, as defined above. This is a design lens for how the pre-fill experience should be evaluated (trust and accuracy, not just completion rate), not new scope.

### Epic C — Status Tracking

End-to-end application monitoring. OTEP owns the state machine — natively, no ATS integration (World B, D-030). See Recent Changes callout above for why this reverses the earlier World A decision.

**State machine:** Submitted → Under Review → Outcome — fully owned and updated within OTEP. HR/posting managers update status directly in OTEP; no external sync required.

**Key implication — new undesigned scope:** OTEP now needs a native manager-facing status-update UX (previously this lived on the ATS side). This did not exist under World A and needs its own design and sizing pass before Epic C is groomed (see Risks). Manager dashboard shape (Lane 3 journey, below) also needs rework — it assumed managers work in the ATS and status syncs back; now managers work directly in OTEP.

**Design flag:** The rejection/outcome screen is the most emotionally sensitive surface in the release. It needs design attention alongside the state machine spec, not after.

### Epic D — Saved Jobs

Officers save opportunities and resume in-progress applications without losing data.

| Half | When | Gate |
|------|------|------|
| Save an opportunity | Parallel track — semi-independent | None |
| Resume an application | After Epic B ships | Only if MVP abandonment data shows >40% drop-off mid-form |

### Epic E — Competency Management v1

Keeps officer competencies in sync between CareerCompass and existing HR systems (HRPS, Cumulus, POCDEX). Pre-fill quality in Epic B and matching signal in later releases both depend on competency data being accurate.

**Scope boundary to confirm:** Read-only sync (moderate lift) vs. read + write-back (high lift, re-opens POCDEX write path Core #31). Confirm with Imelda / Daryll before grooming.

---

## The Seam — Highest-Risk Undesigned Surface

Both the officer journey and the posting-manager journey go quiet at the same point. The handoff from "officer submits" to "application routes to manager queue" to "status returns to officer" is where the 24hr OKR lives, and it's the surface most at risk of under-investment.

```
Officer              CareerCompass (OTEP)          Posting Manager
────────────────────────────────────────────────────────────────────
Discovers ──────────► Listing page
Views detail ────────► Detail page
Clicks Apply ────────► In-Compass form (pre-filled)
Submits ─────────────► Application record in OTEP
                             │
              ══════════ THE SEAM ══════════
                             │
                   ATS / HRPS / Cumulus      Manager shortlists
                             │               Status update in ATS
                             ◄── status sync ─────────────────────
Status visible in OTEP
```

This seam needs its own design pass before Epic C is groomed, not during.

---

## MoSCoW

| Bucket | Epics |
|--------|-------|
| **Must** | A (opportunity creation) · B (native apply + pre-fill, excl. C@G) · C (status tracking, OTEP-native — World B) |
| **Should** | E (competency management v1, read-only sync minimum) · D (Saved Jobs — save half) |
| **Could** | E write-back (if POCDEX write path unblocks) · D resume-application half (if abandonment >40%) |
| **Won't** | Criteria authoring · Smart Assistant (R3) · CIE/CV inference · SJR creation · opportunity recommender · C@G native apply |

**If R1 has to cut:** D goes first. If integration specs slip, E defers to read-only sync only. A + B + C is the non-negotiable floor — **but C's actual gate has changed**: it's no longer ATS integration, it's the undesigned native manager status-update UX (see Risks). Don't treat C as "simpler now" just because ATS dropped out; confirm the new UX is actually smaller scope than the old integration work before treating the floor as safe.

---

## Success Metrics

**Primary:** Apply completion rate — officer who reaches the Apply CTA and submits without leaving CareerCompass.
- Baseline: ~15-20% (estimated; no in-platform tracking exists today)
- Target: 40%+ by Mar 2027

**North Star progress:**
- Target: 10% of onboarded officers complete a development action by Mar 2027
- Measured via: PostHog funnel — list view → detail view → in-Compass form submit → confirmation (Thomas owns instrumentation)

**Status latency:**
- Target: officer sees status update within 24 hours of manager action in OTEP (see Recent Changes callout — this measurement point needs Adrian's sign-off)
- Measured via: timestamp delta between manager status update and officer-visible status change, entirely within OTEP

**Guardrails (must not harm):**
- UAT/pilot officer satisfaction score: ≥ 3.5/5
- Pre-fill trust: stale or wrong pre-fill must not increase form abandonment vs. baseline (instrument separately)

**Kill criteria:** If apply completion rate at 4-week mark is below 25%, or if stale pre-fill incidents exceed 10% of submissions, pause and remediate before expanding pilot.

---

## Rollout Plan

**Phase 1 — Pilot (Jan 2027)**
6 agencies, staggered pair onboarding. Epics A + B + C gated on agency-admin auth path (Epic A) and the native manager status-update UX design (Epic C — see Risks). Epic D and E as ready.

**Phase 2 — Expand (Mar 2027)**
Expand to additional agencies based on Phase 1 satisfaction scores and completion rate. North Star 10% target assessment point.

**Rollback:** If status sync fails or pre-fill data quality falls below threshold, disable in-Compass form and revert to FormSG redirect with a user-facing message. FormSG path remains in the codebase through R1.

---

## Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Native manager status-update UX is undesigned | Red — new scope from World A→B revert (D-030) | With no ATS, OTEP needs its own manager-facing workflow to move applications through Submitted → Under Review → Outcome. This wasn't scoped under World A (ATS owned this UX). Needs its own design and sizing pass before Epic C grooming — treat as new scope, not a simplification. |
| Agency-admin auth undefined | Red — readiness gate for Epic A | No auth path = Epic A can't ship. Confirm with Pow Hwee / Fabian before pipeline opens. |
| Competency Management v1 scope unconfirmed | Red — if write-back is intended, re-opens Core #31 | Confirm read-only vs write-back with Imelda / Daryll before grooming. |
| FE capacity across A, B, and C | Amber — watch item, not a blocker | Both Thomas and Léo are full-stack, so FE work across opportunity creation, native apply, and status tracking isn't a single-person bottleneck. Léo also carries BE work (C@G ingestion, OTG import) — confirm during capacity planning that splitting his time across FE and BE for R1 doesn't create a different squeeze. The new native manager status-update UX (above) adds to this workload. |
| Rejection screen under-designed | Red | Most emotionally sensitive screen in the release. Amber to scope alongside Epic C data model, not after. |
| Pre-fill quality depends on #18/#41 | Amber | Competency SSOT contract between Léo and Kingsley not finalised. Pre-fill erodes trust faster than no pre-fill if data is stale. |

---

## Open Questions

- [ ] **PSFG in R1 or R1.5?** WD/ITC follow-up (2026-07-03) shifted this from a binary MVP-or-not question to a categorization question: WD has verbally positioned PSFG as a **standalone category**, similar to STIPs/Gigs, and committed to volume (3 evergreen + 10 total/year) and full OCC competency tagging. But two things are still unresolved: (1) the deeper category-governance principle — programme-type categories (WD's preference) vs. user-need categories — which is explicitly expected to resurface with future programmes (e.g. PSLF); (2) **formal policy intent to be confirmed by WD** — the standalone-category position stated in the follow-up meeting/email hasn't yet been formalized as an official policy sign-off. If not confirmed before grooming, PSFG creation defers to R1.5; other 4 types proceed. See [full addendum](../archive/2026-W26-Jun22-Jun26/meeting-notes/2026-06-22-W26-devops-opportunity-categories-decision.md) for WD's commitments and the unresolved governance question. (#1 — today's Jace check-in)
- [ ] **Agency-admin auth** — does it exist, who builds it? — Pow Hwee / Fabian
- [ ] **Competency Management v1 scope** — read-only sync vs write-back? — Imelda / Daryll
- [ ] **24hr latency OKR measurement point — needs Adrian's sign-off** — this now measures manager action *in OTEP* rather than an ATS event, which is a behavioral redefinition, not just a location change. Not yet confirmed with Adrian.
- [ ] **Native manager status-update UX** — what does the HR/posting manager experience look like for moving applications through Submitted → Under Review → Outcome, now that this lives entirely in OTEP instead of the ATS? Needs its own design pass before Epic C grooming. — Amber + Pow Hwee
- [ ] **Mark sign-off on shaped epic set** (#40) — Michelle → Mark. Mark's original 2026-06-05 briefing already specified "native status tracking (no ATS)" — the D-030 revert brings Epic C back in line with what Mark originally asked for, which may simplify this sign-off conversation.
- [ ] **CIE as opportunity-side competency inference layer** — explore using CIE to infer competencies for opportunities created in Compass (Epic A) and C@G-ingested jobs with no competencies attached. Relates to the open tagging-scale problem noted under Epic A. Distinct from the CIE/CV-inference Non-Goal below, which covers officer-side pre-fill only. Not yet sized or discussed with the team — see [open item #54](../../../PM-skills-ALL-1/00-hub/open-items.md). — Michelle
- [x] ~~**Source the "ATS not ready until 2028" claim**~~ — **Resolved 2026-07-06.** Engineering Team confirmed ATS integration will not be ready for Compass because it requires an e-tender process. This is now a sourced fact, not an unverified date, and can be cited directly at SteerCo. See hub tracker item #40.
- [ ] **Does Epic B pre-fill risk the same "current-state fit" trap external job boards fall into?** — market research on talent marketplace matching ([brief](../research-synthesis/2026-07-03-W27-talent-marketplace-job-matching-approaches.md)) shows LinkedIn/Indeed match on current profile similarity, which the recommender hypotheses (H2) predict under-delivers for opportunity decisions. Epic B's pre-fill is profile-driven only (by design, per Non-Goals), so this isn't a live R1 risk — but worth flagging before the opportunity recommender (R2+) inherits the same current-state-only signal. Not yet discussed with the team. — Michelle

---

## Non-Goals

- **Criteria authoring** — re-opens the POCDEX write path (Core #31). Comes R1.5.
- **Smart Assistant** (auto-populate strengths, CV builder) — confirmed R3. Reduces AI complexity in R1.
- **C@G native apply** — C@G officers redirect as today. Excluded.
- **SJR creation** — out unless Mark pulls it in.
- **CV upload / CIE inference** (OTEP-205) — smart pre-fill is profile-driven only. (Officer-side only — see Open Questions for a separate, unresolved idea on CIE for opportunity-side competency inference.)
- **ATS integration of any kind** — OTEP owns the posting record *and* the full status state machine natively in R1 (World B, D-030). Revisit ATS integration as a future release once the system is actually available. (Note: a candidate idea explores a lightweight *internal event-bus stub* to ease a future ATS re-integration — that's forward-compatible design, not ATS integration itself; see linked candidate-ideas analysis.)
- **Opportunity recommender / Intelligence Dashboard** — hypothesis-stage; roadmap item.

---

## Candidate Ideas for R1

A product trio brainstorm generated 15 candidate feature ideas targeting the new native manager status-update UX (Epic C) and known risks elsewhere in R1. None are committed scope. Full brainstorm, assumption-risk analysis, and ICE prioritization: **[R1 Candidate Ideas — Brainstorm, Assumption Risk, and ICE Prioritization](../archive/2026-W27-Jun29-Jul3/analyses/2026-07-03-W27-r1-candidate-ideas-ice.md)**.

**Ready to pull into stories now (no blockers):** instrument Epic B form-section abandonment, status timeline (not just a badge), "what happens next" micro-copy on confirmation.

**High-impact, needs a quick resolve first:** manager one-click status update — gated on a confirm-step design for the terminal "Outcome" transition and confirming the existing posting-view UI has room for it (Amber/Pow Hwee).

**Gated, don't build yet:** anything touching #18/#41 (competency SSOT) or agency-comparison framing (needs Adrian's sign-off) — see linked analysis for the full list and why.

---

<details><summary>Appendix — Impact Sizing, User Journeys, Decisions Log</summary>

### Impact Sizing

**Funnel to application (R1 target state):**

| Stage | Users | Note |
|-------|-------|------|
| Officers in pilot cohort | ~5,400 | 6 agencies, staggered |
| Officers who browse | ~2,700 (50%) | Based on OTG's 23% active engagement; targeting double with CareerCompass UX |
| Officers who reach Apply CTA | ~810 (30% of browsers) | Based on MVP baseline |
| Officers who complete in-Compass form | ~405-540 (50-67%) | R1 target; vs ~15-20% today via FormSG redirect |

**Applications in Q1 2027:** 405-540 = ~22-29% of the Q4 2028 OKR lifetime target (1,850) in the first quarter alone.

### User Journeys

**Lane 1 — Intentional Mover (Epics B + C)**  
Officer finds a STIP, clicks Apply, sees a pre-filled form with their competencies and work history already loaded. Adds a motivation statement. Submits. Gets a confirmation with a reference number. "My Applications" tab shows live status. Push notification when shortlisted.

*Aha moment:* "I don't have to retype everything."  
*Risk:* Stale pre-fill erodes trust faster than no pre-fill. Instrument error rate from day one.

**Lane 2 — Passive Watcher (Epic D)**  
Early career officer, open but not searching. Saves an opportunity. Returns days later. "Closes in 3 days" nudge. Decides to apply. Joins Lane 1.

*Why it matters:* OTG's 9% re-login rate is this persona's symptom. Saved Jobs converts a one-time visitor into a returning user.

**Lane 3 — Posting Manager (Epics A + C)**  
Agency HR creates a posting in OTEP native form, publishes, sees applications land natively in OTEP, updates status directly in OTEP, officer notified. Closes posting in OTEP.

**Updated 2026-07-03 (World B revert):** No ATS hop — applications and status live entirely in OTEP. Manager dashboard shape now needs to fully surface applicant data and a status-update workflow within OTEP itself, since there's no ATS to defer to. This is new design scope (see Risks: native manager status-update UX) and must be confirmed alongside the Epic C spec.

### Key Decisions Made

| # | Decision | Date | Status |
|---|----------|------|--------|
| D-025 | Native in-Compass apply (no FormSG redirect) | Steering 2026-03-12 | Confirmed |
| D-026 | ATS fork — World A (ATS/HRPS/Cumulus integration) | Post-review 2026-06-24 | **Reversed 2026-07-03 — see D-030** |
| D-027 | Smart Assistant → R3 | Post-review 2026-06-24 | Confirmed |
| D-028 | Saved Jobs → R1 | R1 jam 2026-06-24 | Confirmed |
| D-029 | C@G native apply → excluded from R1 | Confirmed | Confirmed |
| D-030 | ATS fork reverts to World B (OTEP-native status tracking, no ATS) | 2026-07-03 | Confirmed. **Source of "ATS not ready until 2028" documented 2026-07-06** — Engineering Team, e-tender process requirement. Reverts D-026 back to original R1 jam recommendation / Mark's 2026-06-05 briefing. |
| Open | PSFG in R1 vs R1.5 | — | Pending (Jace 2026-06-25) |

</details>

---

*Stage: XFN Kickoff. Last updated: 2026-07-03.*  
*Sources: R1 epic brief (2026-06-23), R1 jam draft v3 (2026-06-22), manager briefing (2026-06-23), OTEP OKR roadmap (2026-06-16), live Jira S4 (2026-06-25). ATS timeline update (2026-07-03, source not yet documented — see D-030 and Open Questions). Full candidate-idea brainstorm and ICE prioritization split to a [linked analysis](../archive/2026-W27-Jun29-Jul3/analyses/2026-07-03-W27-r1-candidate-ideas-ice.md) to keep this PRD readable.*  
*Next: Mark sign-off (#40) at 9 Jul SteerCo → open R1 story pipeline → Epic A readiness gate (agency-admin auth) + Epic C manager status-update UX design before grooming.*
