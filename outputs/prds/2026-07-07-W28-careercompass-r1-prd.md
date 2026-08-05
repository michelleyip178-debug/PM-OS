## Product Requirements Document: CareerCompass Release 1 (R1)

**Author:** Michelle Yip

**Date:** 2026-07-07

**Status:** ⚠️ Architecture direction changed 2026-08-05 — see Section 6 and revised Non-Goal #1. Section 5 acceptance criteria referencing "entirely OTEP-native (World B)" are stale pending this update; Mark's original 9 Jul sign-off was against the World B architecture below, not this revision — re-confirmation needed.

**Stakeholders:** Adrian (Director of Product Management), Mark & GK (PS/DS steering), Jacky & Xian Zhang (business owners), Pow Hwee (Tech Lead), Amber (Design), Barry (resourcing/scope), Imelda (competency/profile squad), Rama (delivery ops)

**Supersedes:** [2026-06-25-W26-careercompass-r1-xfn-kickoff.md](2026-06-25-W26-careercompass-r1-xfn-kickoff.md) and [2026-06-23-W26-r1-epic-brief-confluence.md](../decisions/2026-06-23-W26-r1-epic-brief-confluence.md). The epic brief in particular is stale — it still describes Epic C as ATS-integrated (World A), which was reverted 2026-07-03 and CIO-confirmed 2026-07-07. This document is the single canonical R1 scope reference going forward; treat the two prior docs as historical record only.

---

### 1. Executive Summary

CareerCompass MVP gets an officer to the door of an opportunity — browse, filter, view, click out to apply — and stops there. R1 closes the loop: agencies create postings natively in CareerCompass, officers apply without leaving the platform, and applications are tracked end-to-end inside OTEP. This is the release that makes the North Star metric (development actions completed) actually measurable, because today every application becomes invisible to the platform the moment an officer clicks Apply.

### 2. Background & Context

MVP proved officers can discover relevant opportunities in one place. But visibility without a working apply flow doesn't move the North Star — an officer who discovers an opportunity and drops off at a redirect, a blank form, or a status black hole hasn't completed a development action.

Three failure points exist today, all outside CareerCompass's control because the apply flow lives externally:

| Failure point | Today | R1 |
|---|---|---|
| The redirect | Officer leaves CareerCompass to an external FormSG or C@G site | Native in-Compass apply form, no external handoff |
| The blank form | Officer re-enters all details manually, no profile data carried over | Pre-filled from officer's OTEP profile |
| The status black hole | Application disappears into a FormSG inbox, officer hears nothing | End-to-end status tracking, natively in OTEP |

**Prior art / decision history:** R1 scope has moved three times on the same fork. The 2026-06-24 post-review confirmed ATS integration (World A) for status tracking. That was reversed 2026-07-03 (D-030) back to fully OTEP-native tracking (World B), after Engineering confirmed ATS integration requires an e-tender process and won't be available until 2028 — a claim re-confirmed directly by the CIO (2026-07-07), making it board-level sourced fact at the time. **This has since moved again as of 2026-08-05: R1 now works with Workable's functions for the backend, with CareerCompass as the front-end for creation and application tracking.** This is a hybrid model, distinct from both World A (full ATS integration, e-tender-gated, unavailable until 2028) and World B (fully OTEP-native, no external system). See Section 6 for what this means architecturally — this supersedes the World B lock-in below where the two conflict.

**Steering context:** Native in-Compass apply (no redirects) was approved at Steering 2026-03-12 (D-025). R1 is where that direction is implemented.

### 3. Objectives & Success Metrics

**Goals:**
1. Agencies can author and publish Internal Job, Secondment, STIP, and Gig postings directly in CareerCompass, with no dependency on OTG for creation.
2. Officers can apply to a posting inside CareerCompass, with the form pre-filled from their OTEP profile, with no external redirect (excluding C@G, which stays on its own rails).
3. Officers and posting managers can both see application status update end-to-end within OTEP, with no external system in the loop.
4. Officer competency data stays current enough that pre-fill (Goal 2) doesn't erode trust through stale or wrong data.

**Non-Goals:**
1. **⚠️ Revised 2026-08-05 — was "OTEP does not become a system of record for HR or an ATS replacement," written against the World B (no external system) architecture. That framing needs re-validation now that Workable is in scope for backend functions.** Original Non-Goal #1 existed to address a raised concern (Barry) that Compass creation + status tracking together start to resemble Compass becoming the de facto ATS — a concern that becomes more, not less, relevant with Workable now in the loop. Open question: does OTEP still avoid being the system of record for HR if Workable owns backend status functions and Compass is the presentation layer, or does that arrangement itself constitute the de facto ATS Barry was concerned about? This needs an explicit answer before Non-Goal #1 can be considered current — flagged in Section 7 and Open Questions below.
2. Criteria authoring (ringfencing rules) — stays in OTG. Re-opens the POCDEX write path (Core #31), explicitly deferred to R1.5.
3. Smart Assistant (auto-populate strengths, CV builder, CIE/CV inference) — confirmed for R3.
4. C@G native apply — C@G officers continue to redirect externally, as in MVP. Not changed in R1.
5. SJR (Short-Term Job Role) creation — excluded, consistent with MVP ingestion scope, unless explicitly pulled in by Mark.
6. Opportunity recommender / Intelligence Dashboard — hypothesis-stage, not committed to any release yet.

**Success Metrics:**

| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| Apply completion rate (reached Apply CTA → submitted without leaving CareerCompass) | ~15–20% (estimated, no in-platform tracking exists today) | 40%+ by Mar 2027 | PostHog funnel: list view → detail view → in-Compass form submit → confirmation |
| North Star — officers completing a development action | Not measurable today (applications invisible outside platform) | 10% of onboarded officers by Mar 2027 | Same PostHog funnel, tied to pilot cohort |
| Applications via CareerCompass (contribution to lifetime OKR) | 0 today | 405–540 in pilot cohort, Q1 2027 (~22–29% of the 1,850 Q4 2028 lifetime target) | Application record count in OTEP |
| Status latency (manager action → officer sees update) | No tracking exists | ≤24 hours by Q1 2027 | Timestamp delta, manager status update → officer-visible change, entirely within OTEP — **measurement point needs Adrian's explicit sign-off; this is a redefinition of what the OKR measures (in-OTEP action vs. prior ATS-event framing), not just where** |
| Pilot officer satisfaction (guardrail — must not harm) | N/A | ≥3.5/5 | UAT/pilot survey |
| Pre-fill trust (guardrail — must not harm) | N/A | Stale/wrong pre-fill must not increase form abandonment vs. baseline | Instrumented separately from completion rate |

**Kill criteria:** If apply completion rate at the 4-week mark is below 25%, or stale pre-fill incidents exceed 10% of submissions, pause rollout and remediate before expanding beyond the pilot cohort.

### 4. Target Users & Segments

**Pilot cohort:** ~5,400 officers across 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), onboarded in staggered pairs.

**Officer segments (from R1 journey lanes):**
- **Lane 1 — Intentional Mover:** Senior, targeted, time-pressured officer who knows what they want. Primary beneficiary of Epics B (pre-fill) and C (status tracking). Aha moment: "I don't have to retype everything."
- **Lane 2 — Passive Watcher:** Early-career officer, open but not actively searching. Primary beneficiary of Epic D (Saved Jobs). OTG's 9% re-login rate is this persona's current-state symptom.
- **Lane 3 — Posting Manager:** Agency HR managing 5–20 active postings across three disconnected systems today (OTG for posting, email for applications, spreadsheet for tracking). Primary beneficiary of Epics A (creation) and C (status tracking) — but see Non-Goal #1: this does not extend to full ATS-style HR system-of-record functionality.

### 5. User Stories & Requirements

**P0 — Must Have (the non-negotiable floor — A + B + C):**

| # | User Story | Acceptance Criteria |
|---|-----------|-------------------|
| A1 | As an agency HR officer, I want to author an Internal Job, Secondment, STIP, or Gig posting directly in CareerCompass, so I don't need to use OTG for creation. | Structured creation form per opportunity type; posting saved as an OTEP-native record; publish/edit/close lifecycle supported. Excludes SJR and C@G (which retain their existing creation paths). **Blocked until agency-admin auth path is confirmed (Pow Hwee/Fabian) — go/no-go gate, not yet resolved.** |
| A2 | As an agency HR officer, I want every opportunity I create to require competency tagging at the point of creation, so downstream matching and analytics aren't built on missing data. | Creation form requires at least one OCC competency tag before publish is enabled. Applies uniformly across opportunity types in scope. |
| B1 | As an officer, I want to apply to an opportunity inside CareerCompass without being redirected to FormSG, so the experience doesn't break at the point of highest intent. | Apply CTA opens an in-Compass form (not a FormSG embed or redirect) for all opportunity types except C@G. |
| B2 | As an officer, I want my application form pre-filled from my OTEP profile (competencies, work history), so I don't have to retype information the platform already has. | Form loads with profile-driven fields pre-populated; officer can review and edit before submit; no CV upload or inference-based pre-fill (profile-driven only). **Dependency: competency SSOT endpoint contract between Léo and Kingsley (#18/#41) must be finalised before pre-fill quality can be guaranteed — not yet closed.** |
| C1 | As an officer, I want to see my application's status update inside CareerCompass, so I'm not left wondering what happened after I submit. | Status visible on a "My Applications" view; state machine is Submitted → Under Review → Outcome; entirely OTEP-native (World B) — no ATS/HRPS/Cumulus integration or sync of any kind. |
| C2 | As a posting manager, I want to move an applicant through Submitted → Under Review → Outcome directly inside OTEP, so I can manage the process in one place without an ATS or spreadsheet. | Manager-facing status-update UI inside OTEP. **This is net-new, undesigned scope** — it didn't exist as a requirement under the prior World A plan (the ATS would have owned this UX). Needs its own design pass before this story is sized, not folded into Epic C's existing estimate. |
| C3 | As an officer, I want a clear and appropriately sensitive message when my application outcome is a rejection, so the experience doesn't feel dismissive at the most emotionally sensitive point in the flow. | Rejection/outcome screen designed alongside the Epic C data model, not after. Design owner: Amber. |

**P1 — Should Have:**

| # | User Story | Acceptance Criteria |
|---|-----------|-------------------|
| E1 | As an officer, I want my competency profile in CareerCompass to stay in sync with HRPS/Cumulus/POCDEX, so my pre-filled application (B2) reflects accurate, current data. | Read-only sync from POCDEX/HRPS at login, minimum viable scope. **Scope boundary (read-only vs. read+write-back) is an open policy question — not yet confirmed with Imelda/Daryll. Read+write-back would re-open the POCDEX write path (Core #31), which is explicitly out of R1 scope until that's decided.** |
| D1 | As an officer, I want to save/bookmark an opportunity and come back to it later, so I don't lose track of something I'm interested in but not ready to apply to yet. | Save action available on listing/detail pages; saved items retrievable in a "Saved" view. Ships as a semi-independent parallel track — no dependency on Epic B. |

**P2 — Nice to Have / Future:**

| # | User Story | Acceptance Criteria |
|---|-----------|-------------------|
| D2 | As an officer, I want to resume an in-progress application I didn't finish, so I don't lose my partially completed form. | Only builds if MVP abandonment data shows >40% drop-off mid-form. Gated on data, not committed as of this PRD. |
| E2 | As an officer, I want to update my own competency data directly in CareerCompass and have it sync back to HRPS/Cumulus. | Read+write-back scope. Only in play if Epic E1's scope boundary resolves toward write-back — currently unconfirmed and not recommended given Core #31 is explicitly blocked. |

### 6. Solution Overview

**⚠️ Architecture direction changed 2026-08-05 — supersedes the D-030/World B lock-in below.** New direction: **R1 works with the functions Workable provides for the backend; CareerCompass is the front-end for creation and application tracking.** This is a hybrid — distinct from World A (full ATS integration via e-tender, blocked until 2028) and from World B (fully OTEP-native, no external system whatsoever). Not yet resolved as of this update:
- Which functions specifically live in Workable vs. OTEP (posting record, application record, status state machine — Epics A/B/C — need to be mapped against what Workable actually provides)
- Whether this requires the e-tender process that blocked World A, or whether Workable was procured through a different path
- Whether the CIO's 2026-07-07 confirmation (that ATS integration is blocked until 2028) still applies here, or whether Workable sits outside that constraint
- Data flow and ownership: does OTEP still own the application/status records with Workable as a function provider, or does Workable become the system of record with OTEP as a pure front-end?

**This directly affects the timeline in Section 8** — Phase 1 (Jan 2027) was scoped and gated against the World B architecture. A hybrid model with an external system in the loop needs its own integration timeline, similar to the CSC/DLE SSO integration currently in SIT (see `outputs/analyses/2026-08-05-W32-csc-pm-tracking-list.md`) — that integration alone has taken multiple weeks and surfaced infrastructure, data-mapping, and scope risks. Assume this needs re-planning, not a straight swap.

---

**Prior architecture (locked 2026-07-03 per D-030, CIO-confirmed 2026-07-07 — superseded 2026-08-05, kept here for decision history):** R1 was fully OTEP-native for status tracking. There was no ATS, HRPS, or Cumulus integration anywhere in the apply-to-outcome chain. This was "World B" — OTEP owned the posting record (Epic A), the application record (Epic B), and the full status state machine (Epic C), all inside its own database, with no external system in the loop.

*Why this mattered for Non-Goal #1 under World B:* Because OTEP owned all three of these records natively, the boundary between "OTEP as a talent-discovery and apply tool" and "OTEP as a de facto ATS" was a real one worth being precise about — the system technically ended up owning creation, application, and status data end-to-end, which is functionally similar to what an ATS does, even without integrating with or replacing any named ATS vendor. World B's position: OTEP's ownership was scoped strictly to records that originate inside CareerCompass itself. It didn't ingest, sync, or represent HR's system-of-record data for postings or hires that don't go through CareerCompass, and made no claim to be authoritative for HR reporting, headcount, or compliance purposes. Existing OTG/C@G postings continued to ingest read-only in parallel, unchanged from MVP. **This reasoning needs to be re-derived for the Workable hybrid model — it doesn't automatically carry over.**

**The seam (highest-risk undesigned surface):** Both the officer journey and posting-manager journey go quiet at the same point — officer submits → application routes to manager queue → status returns to officer. This is where the 24-hour latency OKR lives, and it needs its own design pass before Epic C is groomed, not discovered during grooming.

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
                    Manager reviews, updates status — all inside OTEP
                             │
Status visible in OTEP ◄─────┘
```

**Rollback plan:** If status tracking or pre-fill data quality falls below threshold, disable the in-Compass form and revert to FormSG redirect with a user-facing message. The FormSG path stays in the codebase through R1 specifically to make this rollback possible.

**Rollout:** Phase 1 (Jan 2027) — 6 agencies, staggered pair onboarding, gated on agency-admin auth (Epic A) and the manager status-update UX design (Epic C). Phase 2 (Mar 2027) — expand based on Phase 1 satisfaction and completion-rate data; this is also the North Star assessment point.

### 7. Open Questions

| Question | Owner | Deadline |
|----------|-------|----------|
| **⚠️ New 2026-08-05:** Map which R1 functions (posting record, application record, status state machine) live in Workable vs. OTEP under the new hybrid model | Michelle | Before Epic A/B/C grooming resumes |
| **⚠️ New 2026-08-05:** Does the Workable hybrid require the e-tender process that blocked ATS integration (World A) until 2028, or was Workable procured through a different path? | Michelle → Engineering/Procurement | Before committing to the Jan 2027 Phase 1 timeline |
| **⚠️ New 2026-08-05:** Does Non-Goal #1 (OTEP not becoming a de facto ATS/system of record) still hold with Workable providing backend functions? | Michelle → Barry | Before Non-Goal #1 can be treated as current |
| **⚠️ New 2026-08-05:** Re-confirm Mark's 9 Jul sign-off — it was against the World B architecture, not this hybrid revision | Michelle → Mark | Before R1 story pipeline proceeds on the new architecture |
| Mark's sign-off on this shaped epic set (#40) — original sign-off, against World B | Michelle → Mark | 9 Jul 2026 SteerCo — ✅ done, but see re-confirmation item above |
| Agency-admin auth — does it exist, who builds it? Go/no-go gate for Epic A | Pow Hwee / Fabian | Before R1 story pipeline opens |
| Competency Management (Epic E) scope boundary — read-only sync vs. read+write-back | Michelle → Imelda / Daryll | Before Epic E is groomed |
| PSFG in R1 or R1.5? WD has verbally committed to standalone-category status but this isn't yet a formal policy sign-off | Michelle → WD / Jace | Before R1 grooming, or defers to R1.5 by default |
| 24-hour latency OKR measurement point — needs explicit confirmation this now measures in-OTEP manager action, not an external event | Michelle → Adrian | Before Epic C is groomed |
| Native manager status-update UX design (C2) — this is genuinely new scope with no existing design | Amber + Pow Hwee | Before Epic C is sized |
| Competency SSOT endpoint contract (#18/#41) between Léo and Kingsley | Léo + Kingsley | Ongoing — gates Epic B pre-fill and Epic E |
| CIE as an opportunity-side competency-inference layer (distinct from the officer-side CIE Non-Goal) — raised as an idea, not sized or discussed with the team | Michelle | Before R1 grooming, if pursued |

### 8. Timeline & Phasing

| Milestone | Target | Dependency |
|---|---|---|
| Mark sign-off on R1 scope | 9 Jul 2026 (SteerCo) | This PRD |
| R1 story pipeline opens | After Mark's sign-off | Agency-admin auth path confirmed (Epic A gate) |
| Epic C grooming | After manager status-update UX design pass | Amber + Pow Hwee design output |
| Epic E grooming | After read-only vs. write-back scope confirmed | Imelda / Daryll decision |
| Phase 1 pilot launch | Jan 2027 | Epics A, B, C shipped; agency-admin auth and manager UX both resolved |
| Phase 2 expansion | Mar 2027 | Phase 1 satisfaction ≥3.5/5 and completion rate trending toward 40% target |

**If R1 has to cut scope:** Epic D (Saved Jobs) goes first. If the competency SSOT contract (#18/#41) slips, Epic E defers to read-only sync only (no write-back). Epics A + B + C remain the non-negotiable floor — but note Epic C's actual constraint is no longer ATS integration risk (that's gone with the World B lock-in), it's the undesigned native manager status-update UX. Don't treat Epic C as de-risked just because the ATS fork resolved; confirm the new UX is actually smaller in scope than the prior integration work before treating the floor as safe.

**Capacity flag (updated 2026-07-08):** Thomas is no longer the sole front-end engineer — Léo is full-stack and can also pick up FE work, so front-end capacity across Epics A, B, and the new manager-facing UX in Epic C is no longer a single-point bottleneck. This eases the risk originally flagged here, but a capacity check against the sprint plan is still worth doing before R1 grooming opens — confirm actual FE/BE split between Thomas and Léo given the combined R1 + ongoing MVP/R1.5 workload, rather than assuming the eased constraint fully resolves the question.

---

*Sources: R1 XFN kickoff PRD (2026-06-25, updated 2026-07-03), R1 epic brief (2026-06-23, now superseded), R1 jam draft v3 (2026-06-22), OTEP roadmap OKRs 2026–27, open items #18/#26/#40/#41 (PM-skills-ALL-1/00-hub/open-items.md), D-030 decision record.*
*Next: Mark sign-off (#40) at 9 Jul SteerCo → open R1 story pipeline → resolve Epic A (agency-admin auth) and Epic C (manager UX design) gates before grooming either.*
