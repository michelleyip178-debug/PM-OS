# OTEP Decisions Log

Captures product, technical, and scope decisions made across meetings and syncs. Ordered newest first.

---

## How to use this log

- **Add an entry** every time a non-obvious decision is made — even small ones that might be revisited
- **Link to source** so the context lives somewhere; this log is the index
- **Flag status** if a decision is provisional or has a known revisit trigger

---

## Decision Index

| # | Decision | Date | Area | Status |
|---|----------|------|------|--------|
| D-048 | R1 confirmed scope consolidated into a single reference doc, superseding the piecemeal register trail | 2026-09-25 | Process / Governance | ✅ Final — see [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md) |
| D-047 | Does a new competency require WD approval? | 2026-09-25 | Governance / CMM | 🔴 Open — Mark's position suggests no, Xin Zhang believes governance may require it |
| D-046 | No confirmed ATS strategy for 2027 — Compass's entire discovery-only architecture assumes a future ATS absorbs transactions | 2026-09-25 | Strategic / Dependency | 🔴 Open — Gek Khiang validating; if ATS isn't viable, Compass needs native posting/workflow/application capability |
| D-045 | STIPs & Gigs apply: uniform FormSG-link extraction for every agency, no pilot/non-pilot split, no native Compass build | 2026-09-25 | Scope / R1 | ✅ Final — third and final correction, confirmed by direct OTEP Squad Sync transcript |
| D-044 | R1 architecture reversed WOG-wide: STIPs & Gigs, Internal Jobs, IJR, Secondment all move from native-Compass to OTG/HRPS-dependent, discovery-only with redirect-to-apply | 2026-09-25 | Scope / Architecture | ✅ Final — supersedes D-034, D-035, D-040; Mark & GK's direction, relayed via Xian, confirmed by direct transcript |
| D-043 | CMM narrows to read/view-only — competency creation and lifecycle stay in HR systems, Compass surfaces for visibility and governance oversight only | 2026-09-25 | Scope / CMM | ✅ Final — WD-approval question still open, see D-047 |
| D-042 | SR/SJR fully removed from Compass R1 scope — no posting, discovery, or application inside Compass for any part of it | 2026-09-25 | Scope | ✅ Final — reconfirms D-033 under the new architecture, no change in outcome
| D-041 | IJR creation model and post-submission status visibility | 2026-09-24 | Scope / IJR | ⚪ Superseded — moot under D-044, IJR is discovery-only, no creation or status-tracking model to decide
| D-040 | IJR reversed back into R1 scope, same delivery shape as STIPs & Gigs, HR matching stays offline | 2026-09-24 | Scope / R1 | ✅ Final — third status change on IJR in one day, see R-25 |
| D-039 | STIPs & Gigs guardrail functions (RBAC design, audit log, orphan-posting fallback) have no owner — HR is confirmed out entirely | 2026-09-23 | Scope / Operational Readiness | 🔴 Open — owner still unnamed |
| D-038 | "One development programme at a time" rule is Guidebook policy, not an R1 platform feature — Compass does not enforce it | 2026-09-23 | Scope | ✅ Final |
| D-037 | VAPT runs in R1; R1 and R2 findings go through risk acceptance, not a hard pre-launch remediation gate | 2026-09-23 | Governance / Security | ✅ Final — risk-acceptance process owner still needed |
| D-036 | No cross-HR-system authentication exists — officers can discover listings on systems they can't access and hit a dead end applying | 2026-09-23 | Technical Architecture / UX | 🔴 Open — needs an R1-scoped answer, not a 2027+ deferral |
| D-035 | Internal Jobs architecture: Compass pulls from HRPS only (not Cumulus directly), periodic sync, apply is a confirmed redirect | 2026-09-23 | Integration / Architecture | ✅ Final — corrects an earlier misread of the source diagram |
| D-034 | R1 scope confirmed WOG-wide via Adrian's scope slide: Compass becomes sole platform for STIPs, Gigs, Internal Jobs, and Secondment | 2026-09-23 | Scope / Governance | ✅ Final |
| D-033 | SJR-the-programme stays OTG-hosted through the 2027 cycle; Secondment (the broader umbrella) posts on Compass now | 2026-09-23 | Scope | ✅ Final |
| D-027 | North Star metric stays combined: Opportunities placement rate tracked inside the shared 15%-by-Dec'28 target with Courses, not disaggregated | 2026-07-28 | Strategy / Metrics | ✅ Final |
| D-026 | OTG ingestion rules v3: StartDate optional for Jobs, Function optional, TC for Gig/STIP only | 2026-06-12 | Data / Ingestion | ✅ Final — see [otg-ingestion-decision-log.md](../context-library/decisions/otg-ingestion-decision-log.md) |
| D-025 | 5-category model: STIPs · Gigs · Jobs · SJR · PSFG | 2026-06-12 | Data / Ingestion | 🟡 Pending Xian Zhang validation |
| D-024 | "Jobs" consolidates Secondments + Internal Jobs; Secondment is a mechanism not a category | 2026-06-12 | Data / Ingestion | 🟡 Pending Xian Zhang validation |
| D-023 | MVP ring-fencing = agency-level only; R1+ adds job-family and officer-level | 2026-06-12 | Ring-fencing | ✅ Final |
| D-022 | C@G source-of-truth dedup rule (where job exists in both OTG and C@G) | 2026-06-12 | Data / Ingestion | 🔴 Open — ESG HR confirmation needed |
| D-021 | PSFG is its own category | 2026-06-12 | Data / Ingestion | 🟡 Pending Xian Zhang validation |
| D-020 | Ingestion rules revisit: current rules are working rules for S4; structured review in S5/S6 | 2026-06-10 | Data / Ingestion | ✅ Final |
| D-019 | Pilot agency scope for OTG bulk import: 6 MVP agencies only (PSD, ESG, MDDI, URA, MCCY, CAAS) | 2026-06-02 | Data / Ingestion | ✅ Final |
| D-018 | SJR excluded from MVP listing and ingestion | 2026-05-21 | Data / Ingestion | ✅ Final |
| D-017 | Demo format: squad-by-squad for working sessions (Jace); consolidated cross-squad narrative for Mark + GK | 2026-05-29 | Process | ✅ Final |
| D-016 | OTG competency porting: initial one-time port only; no ongoing sync — pilot agencies driven to Compass | 2026-05-29 | Data / Ingestion | ✅ Final |
| D-015 | OTG disappearing opportunities → auto-deactivate (soft delete) | 2026-05-28 | Data / Ingestion | ✅ Final |
| D-014 | Failure alerting for ingestion job → deferred to post-MVP | 2026-05-28 | Data / Ingestion | ✅ Final |
| D-013 | Design lock deadline: Wednesday 3 June | 2026-05-28 | Process | ✅ Final |
| D-012 | Demo sequence: internal validation first, then Jacky + Mark | 2026-05-28 | Stakeholder mgmt | ✅ Final |
| D-011 | AI feedback loop deferred to a later sprint | 2026-05-28 | AI track | ✅ Final |
| D-010 | OTG competency migration: file ingestion, not live API | 2026-05-28 | Data / Ingestion | ✅ Final |
| D-009 | Role competencies are hide-only; additional competencies fully editable | 2026-05-28 | Competency UX | ✅ Final |
| D-008 | Competency API split from profile API | 2026-05-28 | API design | ✅ Final |
| D-007 | "Competency" terminology everywhere — not "skills" | 2026-05-28 | Terminology | ✅ Final |
| D-006 | PostHog selected for OTEP analytics and OKR monitoring | 2026-05-26 | Tooling | ✅ Final |
| D-005 | FormSG pre-fill removed from MVP; native application form targeted for R1 | 2026-05-26 | FormSG / Scope | ✅ Final |
| D-004 | CSC SSO feasibility confirmed; OTEP builds own SSO, DLE integrates with it | 2026-05-25 | WOG Auth / SSO | ⚠️ Partial — Step 2 (OTEP capabilities) still pending |
| D-003 | POCDEX API not a critical blocker — scheduling and requirements clarity needed | 2026-05-25 | POCDEX | ✅ Final |
| D-002 | No OTG redirects in MVP; officers must not have to re-authenticate in OTG | 2026-05-25 | Scope / UX | ✅ Final |
| D-001 | MVP feature filter: every feature must ladder to North Star or OKRs | 2026-05-25 | Strategy | ✅ Final |

---

## Decision Detail

---

### D-048 — R1 confirmed scope consolidated into a single reference doc

**Date:** 2026-09-25

**Area:** Process / Governance

**Status:** ✅ Final

**Decision:** All of R1's scope, after six architecture status changes across three days, is consolidated into one reference document — [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md) — stating only the final, current position for every opportunity type. The risk register remains the full historical trail (every reversal, every rationale); this new doc is the answer for anyone who needs "what's actually confirmed right now" without reading the trail.

**Rationale:** The register's Executive Summary had accumulated eight-plus banners tracking successive corrections. That's the right record for how the decision was reached, but the wrong first read for someone who just needs the current state — engineers picking up a story, or a stakeholder asking "what's in R1." Splitting "history" (register) from "current state" (this doc) keeps both usable.

**Impact:** New canonical pointer for scope questions going forward. Register stays the audit trail; this doc is what gets linked in stories, stakeholder updates, and any future scope conversation.

**Source:** [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md).

---

### D-047 — Does a new competency require WD approval?

**Date:** 2026-09-25

**Area:** Governance / CMM

**Status:** 🔴 Open

**Decision:** Not yet decided. Mark's direction narrowing CMM to read/view-only (D-043) implies competency creation stays entirely in HR systems, but doesn't settle whether Workforce Development needs to approve a new competency before it's usable. Mark's position in the OTEP Squad Sync suggested no approval gate; Xin Zhang's read is that governance may require one.

**Rationale:** Not yet resolved — genuine disagreement between two people in the same conversation, not a gap in documentation.

**Impact:** Doesn't block CMM's read/view-only build (D-043 stands either way), but does affect whether WD needs a workflow of their own outside Compass — worth settling before CMM's one-pager gets written, so it doesn't need a second pass.

**Source:** [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md). Owner: Adrian Ang, to clarify directly with Mark.

---

### D-046 — No confirmed ATS strategy for 2027

**Date:** 2026-09-25

**Area:** Strategic / Dependency

**Status:** 🔴 Open

**Decision:** Not yet decided — tracked as an open validation, not a scope call. Gek Khiang is checking whether ATS integration can realistically land in 2027. R1's entire discovery-only architecture (D-044) implicitly assumes a future ATS eventually absorbs posting, workflow, and application transactions Compass explicitly isn't building now. If ATS isn't viable, that assumption breaks and Compass may need to build native posting/workflow/application capability instead.

**Rationale:** Raised directly in the OTEP Squad Sync as the single biggest open dependency behind the "coexistence, not migration" strategy (D-044) — R1's simplicity depends on someone else's system working out.

**Impact:** Single point of failure for the whole "Compass stays discovery-only" direction. A "not viable" or "uncertain" answer here is a strategic risk to R2/R3 planning, not just a scheduling question — surfaces new build scope R1's architecture assumed would never land on Compass at all.

**Source:** [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md); [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-32). Owner: Adrian Ang, Gek Khiang.

---

### D-045 — STIPs & Gigs apply: uniform FormSG, no pilot/non-pilot split

**Date:** 2026-09-25

**Area:** Scope / R1

**Status:** ✅ Final — third and final correction on this specific point

**Decision:** STIPs & Gigs apply is unchanged from MVP, for every agency, no exceptions. Compass extracts FormSG links embedded in OTG posting descriptions and surfaces them as the Apply button. If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly. No native in-app apply exists for any agency — a pilot/non-pilot split (6 pilot agencies get native apply, everyone else OTG) was confirmed earlier the same day and withdrawn hours later. Posting/creation stays OTG-only for every agency throughout every version of this decision — never in question.

**Rationale:** A direct meeting transcript (OTEP Squad Sync) surfaced that the pilot/non-pilot split, itself a same-day correction of an earlier uniform-OTG-redirect assumption, was also wrong — it was based on an incomplete relay of Mark & GK's actual direction. The transcript is a first-hand account of the meeting that produced the direction in the first place, which is why it's treated as authoritative over the two prior second-hand relays (a meeting summary, then a verbal correction).

**Impact:** This is the sixth distinct status change to STIPs & Gigs' apply mechanism in three days (see D-044's note, and R-31). Concretely: the pilot-agency native-apply build (RBAC, applicant review table, in-app status tracking) does not happen. Epic A collapses to a single thin discovery + FormSG-extraction story. Every downstream artifact touched by the pilot/non-pilot split (register, both one-pagers, Epic A stories, journey map index, 3 HTML artifacts) was corrected a second time in the same afternoon.

**Source:** [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md); [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27, third pass; R-29; R-31).

---

### D-044 — R1 architecture reversed WOG-wide: OTG/HRPS-dependent, discovery-only, redirect-to-apply

**Date:** 2026-09-25

**Area:** Scope / Architecture

**Status:** ✅ Final

**Decision:** STIPs & Gigs, Internal Jobs, IJR, and Secondment all move from the native-Compass architecture built up 23-24 Sep to an OTG/HRPS/Cumulus-dependent, discovery-only model. Postings continue to live in their existing source systems. Compass provides discovery only — a unified catalog pulled from those sources. Officers redirect out of Compass to apply, back to whichever system hosts the posting. This reverses D-034, D-035, and D-040 outright. SJR is unaffected — see D-042. STIPs & Gigs' specific apply mechanism was corrected twice more the same day; see D-045 for the final state.

**Rationale:** Mark and Gek Khiang's confirmed executive direction, anchored on two principles: don't expose Compass to non-MVP agencies yet, and don't create dual-posting confusion between OTG and Compass for job posters. Building native apply/creation flows in Compass for some types while OTG remained the system of record for others was judged to create exactly that confusion. This removes R1's original stated justification (closing the "officer leaves Compass, we lose visibility" gap) for every type except whatever native flow remains after this reversal.

**Impact:** Materially shrinks R1's build — no native creation, apply, or review UI for STIPs & Gigs, Internal Jobs, IJR, or Secondment. RBAC narrows to platform-level module access, no applicant-data gating needed. Design scope narrows to discovery and redirect-signaling UI. Forces a re-estimate (R-12) that has now been deferred twice already, waiting for the architecture to stop moving. Opens a real strategic risk (D-046, "decommissioning debt") that R1's simplicity is bought by deferring OTG replacement work to R2/R3, not solving it.

**Source:** [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md); [Meeting notes — Opportunities MVP scope, Mark/GK](../meeting-notes/2026-09-25-W39-opportunities-mvp-scope-mark-gk.md); [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, R-25, R-27, R-30, R-31); confirmed directly by Michelle.

---

### D-043 — CMM narrows to read/view-only

**Date:** 2026-09-25

**Area:** Scope / CMM

**Status:** ✅ Final (WD-approval question still open, see D-047)

**Decision:** Competency creation and lifecycle management stay entirely in HR systems. Compass reads and surfaces competency data for visibility and governance oversight only — it does not become a creation or CRUD platform, not even the manual-approval-workflow version previously scoped on 21-22 Sep.

**Rationale:** Mark's direction: Workforce Development wants visibility into competencies, not operational management of them. Narrower than the prior confirmed scope (consolidated competency bank with manual WD approval workflows), which itself predated this correction and needs updating in source docs.

**Impact:** Materially reduces CMM build effort versus the 21-22 Sep confirmed scope — needs re-estimating alongside the broader R1 re-estimate (R-12). One-pager and reduced-scope brief still don't mention CMM at all and need updating to the narrower model.

**Source:** [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md); [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-15).

---

### D-042 — SR/SJR fully removed from Compass R1 scope

**Date:** 2026-09-25

**Area:** Scope

**Status:** ✅ Final — reconfirms D-033, no change in outcome

**Decision:** No posting, no discovery, no application inside Compass for any part of SR/SJR, for R1. Nominated officers continue using OTG exactly as today.

**Rationale:** SR is invite-based — nominated officers already receive direct communications and are instructed to use OTG. Adrian's assessment, confirmed with Mark/GK: Compass would create confusion, not value, for this population. Adrian described this as effectively removing SR from the Pathfinder scope for R1.

**Impact:** None beyond reconfirmation — this matches D-033's prior resolution (SJR stays OTG through 2027) exactly. Recorded here because the OTEP Squad Sync treated it as a fresh confirmation under the new architecture direction, not because anything changed.

**Source:** [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md); [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-13).

---

### D-041 — IJR creation model and post-submission status visibility

**Date:** 2026-09-24

**Area:** Scope / IJR

**Status:** ⚪ Superseded — moot under D-044

**Decision (as originally recorded, now moot):** Not yet decided. Following D-040's reversal, three questions blocked IJR's stories from being drafted: (1) is posting creation self-serve or HR-curated; (2) does Agency HR see applicants inside Compass at all; (3) does the officer get post-submission status visibility.

**Why this is superseded:** D-044 (25 Sep) reversed IJR out of the native-Compass model entirely — it's now grouped with Internal Jobs as discovery-only, redirect-to-apply, for every agency. None of the three original questions apply anymore: there's no native creation flow to decide the ownership of, no in-app applicant view for HR to have a role in, and no in-app status to track. This entry stays in the log for traceability, not because the questions are open.

**Source:** [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-25), [Epic D One-Pager](../prds/2026-09-24-W39-epic-d-ijr-scoping-one-pager.md).

---

### D-040 — IJR reversed back into R1 scope, STIPs & Gigs shape, HR matching stays offline

**Date:** 2026-09-24

**Area:** Scope / R1

**Status:** ✅ Final (third status change on IJR in a single day — see note below)

**Decision:** IJR is confirmed R1 scope. Officers discover and apply to IJR postings natively inside Compass, via a structured form, the same pattern as STIPs & Gigs. Everything after application, HR pooling eligible officers, running matching, assigning roles, stays exactly as it works today: offline, unchanged. Compass builds the front door only, not the HR-side matching engine. This decouples IJR from SJR — SJR alone stays on OTG through 2027, migrating ahead of 2028, on its own independent timing.

**Rationale:** Not recorded beyond the decision itself — no business reason for the reversal is documented in the register. Worth getting Adrian's rationale in writing, especially since the immediately prior call (IJR out of R1, moving with SJR) had a clear, stated technical reason (shared OTG module) that this reversal implicitly overrides.

**Note on the day's whiplash:** IJR's status changed four times on 2026-09-24 alone — confirmed (wrongly stated, inherited from 23 Sep) → corrected to open decision → resolved out of R1 (moving with SJR ahead of 2028) → reversed back in, this decision. Every downstream artifact (register, both one-pagers, journey map index, 5 published HTML artifacts, meeting notes, a BO-facing summary) was corrected in step with each change. If this comes up again, the final state is this entry — treat the intermediate states as historical only.

**Impact:** Epic D's one-pager, previously rewritten as an "out of scope" record, was rewritten a third time into a real (though still undesigned) epic doc. See D-041 for what's still blocking it. R-30 (OTG data migration) reopened as R1-relevant. R-13 (SJR) reverted to its original, IJR-independent reasoning.

**Source:** [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-25, R-13, R-30), verbal confirmation from Michelle 2026-09-24. Corroborated independently by the same-day [R1 Backlog Grooming meeting](../meeting-notes/2026-09-24-W39-r1-backlog-grooming.md), which had been converging toward this exact shape before the decision was confirmed.

---

### D-039 — STIPs & Gigs guardrail functions have no owner

**Date:** 2026-09-23

**Area:** Scope / Operational Readiness

**Status:** 🔴 Open

**Decision:** STIPs & Gigs has zero HR role of any kind, confirmed — no Central Admin HR, no Agency Admin HR, not even a passive guardrail function. This is a stronger statement than the prior "HR is a guardrail only" framing used across journey maps and comparison artifacts, which implied a passive-but-real HR function; that framing is now superseded. RBAC/access-control design, the audit log, and the orphan-posting fallback (when a poster leaves or changes agency before closing their posting) still need to happen, they just don't have an owner.

**Rationale:** Confirmed directly by Michelle. This isn't resolved by assuming "the system automates it" — it's genuinely unassigned, and shouldn't default to Engineering/Platform without an explicit decision.

**Impact:** Every artifact that previously framed HR as the passive owner of these functions needed correcting, not softening. US-A14 (orphaned posting fallback, Epic A) cannot be sized until an owner is named.

**Source:** [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27).

---

### D-038 — "One programme at a time" rule is Guidebook policy, not an R1 feature

**Date:** 2026-09-23

**Area:** Scope

**Status:** ✅ Final

**Decision:** The Rotation Guidebook's "one development programme at a time" rule (Annex A, Q12 — officers can't be in two of IJR/SJR/STIPs/Gigs concurrently) is not implemented by R1 at all. This isn't "the rule exists but Compass doesn't enforce it yet" — R1 has no plan to check or flag concurrent enrollment, full stop.

**Rationale:** Confirmed directly by Michelle, correcting five artifacts (IJR/SJR officer and HR journey maps, the mobility-programmes comparison) that had overstated this as an active cross-cutting constraint "running through everything."

**Impact:** If cross-programme enrollment checking becomes a real future need, it's new scope, not something R1 already covers. Readers of the journey maps should not assume Compass catches this today.

**Source:** [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-28).

---

### D-037 — VAPT runs in R1; findings go through risk acceptance

**Date:** 2026-09-23

**Area:** Governance / Security

**Status:** ✅ Final

**Decision:** VAPT (vulnerability assessment and penetration testing) will run in R1. Findings for both R1 and R2 go through a risk-acceptance process rather than a hard pre-launch remediation gate.

**Rationale:** Closes a 3-week-outstanding question (Barry's VAPT scope/timeline answer) and removes VAPT's prior "could add 6 weeks" uncertainty from the R1 timeline picture.

**Impact:** Opens a new governance question this decision doesn't resolve on its own: risk acceptance means known vulnerabilities can ship to production if formally accepted, which needs a named risk-acceptance owner and defined severity thresholds — not yet assigned.

**Source:** [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-26).

---

### D-036 — No cross-HR-system authentication exists

**Date:** 2026-09-23

**Area:** Technical Architecture / UX

**Status:** 🔴 Open

**Decision:** Not a decision so much as a confirmed constraint, surfaced directly on Adrian's R1 scope slide: if an officer clicks an opportunity hosted on an HR system they don't have access to (OTG, HRPS, Cumulus, or Compass-native), they cannot proceed with application today. With Compass now positioned as the "consolidated Opportunities page," this is a structural gap affecting any WOG-wide officer, not an edge case.

**Rationale:** The slide punts the fix to "later, once Workable becomes the WOG ATS" — per the SJR ATS tender timeline, that's a 2027+ track, well outside R1.

**Impact:** Directly undermines the "Compass as sole platform, WOG-wide" narrative just confirmed the same day (D-034) — a consolidated catalog that silently fails to let officers apply risks being worse for trust than a narrower, honest one. No R1-scoped mitigation proposed yet.

**Source:** [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-24).

---

### D-035 — Internal Jobs architecture corrected: HRPS-only, periodic sync, confirmed redirect

**Date:** 2026-09-23

**Area:** Integration / Architecture

**Status:** ✅ Final

**Decision:** Compass pulls Internal Jobs postings from HRPS only, at regular sync intervals — not a live two-way API, and Compass does not hold or maintain the data itself. Cumulus pushes postings into HRPS's Internal Job Portal one-way, system-to-system; Compass has no direct relationship with Cumulus at all. Apply is a confirmed redirect (not TBC) — officers link out to whichever system actually hosts the posting, based on the link HRPS's record carries.

**Rationale:** Corrects a misread of the source architecture diagram that had been used to build the Internal Jobs journey maps, the full-scope and mobility-programmes comparison artifacts, the scope-decision artifact, and the R1 one-pager — all of which previously described "Compass reads from both HRPS and Cumulus, holds data directly." POCDEX's retirement in the target state is unaffected by this correction.

**Impact:** Every artifact using the old framing needed correcting, not just this register entry. New open question surfaced: whether HRPS supplies ringfencing/agency-tagging data directly, or Compass has to build that logic itself — this became the single open technical question replacing the prior "does the API exist at all" framing.

**Source:** [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07), corrected directly by Michelle.

---

### D-034 — R1 scope confirmed WOG-wide

**Date:** 2026-09-23

**Area:** Scope / Governance

**Status:** ✅ Final

**Decision:** Adrian's R1 scope slide ("STIPs & Gigs | Internal Jobs, SJRs & Secondments") confirms WOG-wide population, not pilot-only. STIPs & Gigs discovery/creation/application opens to all WOG officers via POCDEX integration with WOG officer data. Compass becomes the sole platform for STIPs, Gigs, Internal Jobs, and Secondment posting/discovery/application.

**Rationale:** Directly answers the pilot-only-vs-WOG-wide fault line that stalled the 22 Sep estimation session, where Rama and Michelle surfaced they'd been holding genuinely different mental models of who can discover opportunities.

**Impact:** Unblocks RBAC sizing, the effort re-estimate, and every downstream scope/architecture/GTM question that had been waiting on this. Also surfaces two new risks: the cross-HR-system authentication gap (D-036) and the still-undelivered HRPS API dependency for Internal Jobs, now time-critical since this slide depends on it.

**Source:** [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-14, R-23), [R1 Scope Decision artifact](../journey-maps/2026-09-23-W39-r1-scope-decision-opportunities.html).

---

### D-033 — SJR stays on OTG through 2027; Secondment posts on Compass now

**Date:** 2026-09-23

**Area:** Scope

**Status:** ✅ Final

**Decision:** SJR-the-programme (PSD's specific annual exercise) stays OTG-hosted through the 2027 cycle, migrating to Compass ahead of 2028. Secondment more broadly, the umbrella category SJR sits inside, is committed to being posted on Compass now, so OTG and Compass officers can discover/apply on the consolidated Opportunities page. The distinction matters: SJR-the-programme stays put; Secondment-the-listing-type (agency-led and officer-initiated paths) moves to Compass immediately.

**Rationale:** Adrian's scope slide draws this line explicitly. The Secondment-umbrella-contains-SJR hierarchy, and the three-path breakdown (PSD annual SJR, agency-led secondment, officer-initiated secondment) don't trace to a single written source document — confirmed directly by Michelle, but flagged as needing a proper source doc if presented externally beyond this register.

**Impact:** Secondment-on-Compass inherits the cross-HR-system auth gap (D-036) — an officer without access to the hosting HR system can discover but not apply. Longer-horizon ATS question (Workable/open-tender) remains separate, timeline TBC.

**Source:** [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-13).

---

### D-027 — North Star metric stays combined with Courses (15%-by-Dec'28)

**Date:** 2026-07-28

**Area:** Strategy / Metrics

**Status:** ✅ Final

**Decision:** Opportunities placement rate is tracked as part of the combined 15%-by-Dec'28 target alongside Courses completions. It is not being disaggregated into its own separately-approved North Star number.

**Rationale:** Opportunities and Courses are two paths to the same underlying outcome — an officer moving their career forward. A combined target keeps both teams accountable to that shared outcome rather than incentivizing either side to optimize its own number in isolation. The trade-off: a strong Courses quarter could mask a weak Opportunities quarter (or vice versa) in the headline 15% figure. The Opportunities-specific leading indicators (click-through, application rate, 180-day login rate, HR dashboard usage, officer satisfaction) exist partly to catch that divergence, since they can't be offset by course completions.

**Source:** Confirmed by Michelle, 2026-07-28, during strategy one-pager review. See [Product Strategy One-Pager — CareerCompass Opportunities](../strategy/2026-07-28-W31-careercompass-opportunities-strategy-one-pager.md), Section 2.3.

---

### D-017 — Demo format: squad-by-squad for working sessions; consolidated for Mark + GK

**Date:** 2026-05-29

**Area:** Process / Stakeholder management

**Status:** ✅ Final

**Decision:** Regular sprint demos run squad-by-squad — each squad presents their own work. Working-level attendees (Jace) should expect "working sessions" covering the previous sprint only. For Mark and GK sessions, the two squads consolidate into a single coherent narrative to present as one team.

**Rationale:** Regular demos reduce mental bandwidth — presenters only need to know their own part deeply enough to answer questions live. Mark/GK sessions are higher-stakes and need a "one team" story that doesn't look fragmented.

**Source:** Imelda (aligned with Rama), confirmed with Michelle 2026-05-29.

---

### D-016 — OTG competency porting: initial one-time port only; no ongoing sync

**Date:** 2026-05-29

**Area:** Data / Ingestion

**Status:** ✅ Final

**Decision:** Core team will do an initial one-time port of officer competencies from OTG into Compass. There is no ongoing automated sync after the initial import. Pilot agencies will instead be driven to adopt and use Compass directly going forward.

**Rationale:** Ongoing sync adds complexity and maintenance overhead. The programme intent is for officers to migrate their working practice to Compass — a perpetual sync undermines that goal by keeping OTG as the source of truth indefinitely. Initial port seeds the profile; adoption drives it forward.

**Impact:** Resolves the open question from Sprint 3 Planning on OTG sync cadence (weekly? monthly? who triggers?). Fanxu's Sprint 3 implementation scope is the one-time bulk import only — no recurring job needed. The "new vs existing officers" first-login sync (Fanxu + Kingsley) remains in scope as the mechanism for the initial port, but no follow-up cadence is required.

**Source:** Verbal confirmation 2026-05-29

---

### D-015 — OTG disappearing opportunities → auto-deactivate (soft delete)

**Date:** 2026-05-28

**Meeting:** Sprint 3 Planning Prep / Sprint Planning

**Area:** Data / Ingestion

**Decision:** When an opportunity disappears from the OTG Excel file, OTEP automatically soft-deletes (deactivates) it rather than hard-deleting or keeping it visible.

**Rationale:** Hard delete loses data. Keeping it visible misleads officers. Soft delete preserves the record while removing it from the listing — clean and reversible.

**Impact:** Affects OTEP-192 (ingestion job) ACs and the deactivation logic in Fanxu's implementation.

**Source:** [Sprint 3 Planning Prep](../archive/2026-W22-May25-May31/analyses/2026-05-28-W22-sprint-3-planning-prep.md)

---

### D-014 — Failure alerting for ingestion job → deferred to post-MVP

**Date:** 2026-05-28

**Meeting:** Sprint 3 Planning Prep

**Area:** Data / Ingestion

**Decision:** Automated failure alerting for the OTG ingestion job is out of Sprint 3 and MVP scope.

**Rationale:** Not blocking MVP. Can be added post-launch once the ingestion pattern is stable and failure modes are understood.

**Impact:** OTEP-192 does not include alerting ACs. Ops runbook may be needed as a manual compensating control.

**Source:** [Sprint 3 Planning Prep](../archive/2026-W22-May25-May31/analyses/2026-05-28-W22-sprint-3-planning-prep.md)

---

### D-013 — Design lock deadline: Wednesday 3 June

**Date:** 2026-05-28

**Meeting:** Sprint 3 Planning

**Area:** Process

**Decision:** Amber must finalise and sign off Figma for all competency management flows by end of day Wednesday 3 June. Engineers must not start UI work until design is locked.

**Rationale:** Thomas starts FE on Monday 1 June. Building against intermediate designs causes rework. One locked Figma version = single source of truth for the sprint.

**Impact:** Hard gate on FE start for competency UI. If missed, Thomas risks building against a moving target.

**Risk:** Amber's Figma audit is blocked on Rama's answer about whether a new design system is being adopted programme-wide. Ping Rama is P0 before Sprint 3.

**Source:** [Sprint 3 Planning Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-28-W22-sprint-3-planning.md)

---

### D-012 — Demo sequence: internal validation first, then stakeholders

**Date:** 2026-05-28

**Meeting:** Sprint 3 Planning

**Area:** Stakeholder management

**Decision:** Michelle validates the demo internally with the team first, then shares with Jacky and Mark.

**Rationale:** Iterative product — managing expectations matters. Internal validation surfaces issues before they're visible to stakeholders.

**Open item:** Mark's role and what he needs to see is still unconfirmed. Resolve before demo.

**Source:** [Sprint 3 Planning Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-28-W22-sprint-3-planning.md)

---

### D-011 — AI feedback loop deferred to a later sprint

**Date:** 2026-05-28

**Meeting:** Sprint 3 Planning

**Area:** AI track

**Decision:** The AI feedback loop feature is out of Sprint 3. Victor focuses on environment setup and evaluation layer only.

**Rationale:** No clarity yet on what data to capture or how users will interact with feedback. Building without this understanding risks rework.

**Revisit trigger:** Victor to define requirements before adding to a future sprint.

**Source:** [Sprint 3 Planning Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-28-W22-sprint-3-planning.md)

---

### D-010 — OTG competency migration: file ingestion, not live API

**Date:** 2026-05-28

**Meeting:** Sprint 3 Planning

**Area:** Data / Ingestion

**Decision:** OTG officer competency data comes via bulk Excel file import, not a live API. One-time import into a temp DB table; on first login, the officer's competencies are pulled using their user ID.

**Rationale:** OTG does not expose a real-time API. File-based ingestion is the only available mechanism.

**Constraints:**
- No automatic ongoing sync. Subsequent syncs are manual.
- Mapping logic: if competency already in role → ignore; else → add as "additional competency"

**Note:** This is officer-level personal competency data. Separate from POCDEX (OTEP-271/203), which is the job family/competency catalog for ringfencing.

**Open:** OTG sync cadence after initial import still unresolved (w/c 2 Jun deadline). Also unresolved: how do officers who joined after the initial bulk import get their data?

**Owner:** Fanxu

**Source:** [Sprint 3 Planning Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-28-W22-sprint-3-planning.md)

---

### D-009 — Role competencies are hide-only; additional competencies are fully editable

**Date:** 2026-05-28

**Meeting:** Sprint 3 Planning

**Area:** Competency UX

**Decision:**
- Role-assigned competencies → hide only (preserved in DB, removed from profile view)
- Additional competencies → officer can add or delete
- Hidden competencies → soft-removed from display, not deleted from DB

**Rationale:** Officers shouldn't permanently lose visibility of role-required competencies. Hiding preserves the data and intent while giving them control over their view.

**Impact:** Affects API design — hide and delete are separate endpoints (or at minimum separate operations). Also affects UI state: hidden state needs to be stored and retrievable.

**Source:** [Sprint 3 Planning Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-28-W22-sprint-3-planning.md)

---

### D-008 — Competency API split from profile API

**Date:** 2026-05-28

**Meeting:** Sprint 3 Planning

**Area:** API design

**Decision:** Competency management runs on a standalone API, separate from the profile API.

**Rationale:** Separation of concerns. Competency logic will grow — keeping it separate avoids bloating the profile API and makes it easier to evolve independently.

**Search API specs:**
- Returns core + functional competencies only
- Excludes competencies already added by the officer
- Triggers after 3 characters
- Priority: "starts with" first, then "contains"
- Max 20 results returned (frontend handles display for now; backend pagination deferred to Sprint 4)

**Owner:** Kingsley

**Source:** [Sprint 3 Planning Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-28-W22-sprint-3-planning.md)

---

### D-007 — "Competency" terminology everywhere — not "skills"

**Date:** 2026-05-28

**Meeting:** Sprint 3 Planning

**Area:** Terminology

**Decision:** All UI copy, API field names, and internal references use "competency," not "skills."

**Rationale:** Consistency with OTG's language. Reduces confusion for officers already familiar with OTG terminology.

**Impact:** Amber to audit Figma. Kingsley to check API field names.

**Source:** [Sprint 3 Planning Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-28-W22-sprint-3-planning.md)

---

### D-006 — PostHog selected for OTEP analytics and OKR monitoring

**Date:** 2026-05-26

**Meeting:** OTEP Squad Sync

**Area:** Tooling

**Decision:** PostHog is the analytics tool for OTEP. Tooling evaluation was completed by Rama before this decision.

**Rationale:** Can cover product metrics and OKR tracking in one place. Also useful for appraisal evidence (attribution of officer development actions).

**Next steps:** Michelle to design event taxonomy and metric definitions. Rama to handle tooling setup. Target: w/c 1 Jun.

**Source:** [Squad Sync Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-26-W22-otep-squad-sync.md)

---

### D-005 — FormSG pre-fill removed from MVP; native application form targeted for R1

**Date:** 2026-05-26 (confirmed in Squad Sync; technical rationale surfaced 2026-05-25 adhoc with Pow Hwee)

**Meeting:** OTEP Squad Sync + Adhoc with Pow Hwee

**Area:** FormSG / Scope

**Decision:** FormSG pre-fill via URL params is out of MVP. OTEP-130 retains basic FormSG redirect and webhook only. A native in-OTEP application form is the R1 target (Seamless Application PRD).

**Rationale:** FormSG pre-fill is technically fragile — any agency form field change silently breaks the pre-fill, creating an ongoing maintenance dependency outside the team's control. Combined with the BO constraint (no OTG redirects, no re-authentication), native form is the only stable long-term path.

**Impact:**
- OTEP-130 ACs reduced to basic redirect + webhook
- R1 Seamless Application PRD becomes the home for native form design
- Xian Zhang + Jacky briefed at 14:00 design review on 2026-05-26

**Note:** This decision was made bottom-up (Pow Hwee raised technical fragility → confirmed at squad sync). BO alignment happened same day.

**Source:** [Squad Sync Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-26-W22-otep-squad-sync.md), [Adhoc Pow Hwee Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-25-W22-adhoc-pow-hwee.md)

---

### D-004 — CSC SSO feasibility confirmed; OTEP builds own SSO, DLE integrates with it

**Date:** 2026-05-25

**Meeting:** Email confirmation from Sy En (CSC IT) + Adhoc with Pow Hwee

**Area:** WOG Auth / SSO

**Decision:** CSC (DLE) supports WOG AD / Azure AD SSO via OIDC and SAML. Seamless deep-link experience (no re-login) is technically possible. Architecture: OTEP builds its own SSO layer; DLE integrates with it.

**Status:** ⚠️ Partial — Step 2 (confirming OTEP's own SSO capabilities) still pending Pow Hwee's answer on whether WOG Auth (already in MVP scope) covers the SSO layer DLE needs.

**CSC answers confirmed:**
- WOG AD / Azure AD SSO: ✅ Yes
- Federated SSO (SAML / OIDC): ✅ Yes
- Deep link with valid session: ✅ No re-login needed
- If not logged in: redirects to OTEP's login page

**Source:** [CSC SSO Feasibility Plan](../archive/2026-W22-May25-May31/analyses/2026-05-25-W22-csc-sso-feasibility-plan.md), [Adhoc Pow Hwee Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-25-W22-adhoc-pow-hwee.md)

---

### D-003 — POCDEX API not a critical blocker — scheduling and requirements clarity needed first

**Date:** 2026-05-25

**Meeting:** Adhoc with Pow Hwee

**Area:** POCDEX

**Decision:** POCDEX API is not a technical blocker for current sprint work. The real dependency is requirements clarity — specifically the outcome of the WD×DO job family model discussion (29 May).

**Rationale:** Without knowing whether the job family model is changing, locking POCDEX requirements is premature.

**Next steps:** Michelle to schedule session with Daryll post-29 May job family discussion. Loop in Acacia on data model before that session.

**Source:** [Adhoc Pow Hwee Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-25-W22-adhoc-pow-hwee.md)

---

### D-002 — No OTG redirects in MVP; officers must not have to re-authenticate

**Date:** 2026-05-25

**Meeting:** BO Strategic Review

**Area:** Scope / UX

**Decision:** Any flow that requires an officer to leave OTEP and re-authenticate in OTG is out of MVP scope. This is a hard UX constraint, not a preference.

**Impact:**
- Secondments, SJR, and Common Roles deferred to R1 (they rely on OTG flows)
- FormSG workaround accepted as short-term bridge for STIPs and Gigs
- Native application form (R1) is the long-term answer
- Comms update needed: officers will see "most" opportunities, not all

**Source:** [BO Strategic Review Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-25-W22-bo-strategic-review-notes.md)

---

### D-001 — MVP feature filter: every feature must ladder to North Star or OKRs

**Date:** 2026-05-25

**Meeting:** BO Strategic Review

**Area:** Strategy

**Decision:** Every feature included in MVP must be justifiable against the North Star (50% of officers complete a development action by Dec '28) or OTEP OKRs. Features that can't demonstrate contribution to competency development, career progression, or meaningful user outcomes are challenged or deprioritised.

**Rationale:** Shifts decision-making from "OTG parity" to "outcome-driven." Reduces scope creep risk and provides a clear rejection criteria.

**Impact:**
- Profiling tools, gamification, career coaching, and goals cluster all challenged or deferred under this filter
- Competency ratings (self/peer/supervisor) need stronger justification before inclusion
- Career development cluster (goals, supervisor views, career conversations) targeted for R3/R4

**Source:** [BO Strategic Review Notes](../archive/2026-W22-May25-May31/meeting-notes/2026-05-25-W22-bo-strategic-review-notes.md)

---

*Last updated: 2026-09-24*
*Format: newest decisions at top of index, newest detail entries at top of detail section*
*Owner: Michelle YIP*
*Note: this log picks up major decisions episodically, not every register correction — see the [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) for the full, more granular history of R1-specific scope changes (including intermediate states this log skips, e.g. IJR's same-day flip-flopping on 24 Sep, captured here only as its final state, D-040).*
