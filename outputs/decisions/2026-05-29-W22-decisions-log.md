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

*Last updated: 2026-05-29*
*Format: newest decisions at top of index, newest detail entries at top of detail section*
*Owner: Michelle YIP*
