---
feature: CareerCompass Release 1
stage: XFN Kickoff
last_updated: 2026-06-25
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
| The status black hole | Application disappears into a FormSG inbox, officer hears nothing | End-to-end status tracking in OTEP via ATS integration |

**Why the North Star is blocked without R1:** You can't count a completed development action if the action happens outside the platform. Every application today is invisible the moment the officer clicks Apply.

---

## Strategic Fit

Three OKR targets only unlock if R1 ships on time:

| OKR | Target | R1's contribution |
|-----|--------|-------------------|
| North Star | 10% of onboarded officers complete a development action by Mar 2027 | R1 is the only release that makes in-platform completion measurable. Without it, the target is unmeasurable. |
| OKR 2 | 1,850 officers applied via CareerCompass by Q4 2028 | ~405-540 applications expected in the pilot cohort in Q1 '27 alone — ~22-29% of the lifetime target in the first quarter. |
| Status latency | Updates to officer within 24 hours of hiring-manager action by Q1 2027 | Requires the ATS-backed state machine confirmed in Epic C. Can't be retrofitted after R2. |

**Agency-side case:** Posting managers today work across three systems with no connective tissue: opportunity lives in OTG, applications land in email, tracking lives in a spreadsheet. Internal Jobs and Secondments have no creation tooling at all — removed from MVP because no native path existed. R1 rebuilds the full posting lifecycle inside CareerCompass.

---

## The Five Epics

**R1 = Create it. Post it. Pre-fill it. Submit it. Track it. Save it. Sync it.**

### Epic A — Opportunity Creation

Agencies author and manage postings directly in CareerCompass: structured creation form, OTEP-native posting record, publish workflow, edit/close lifecycle.

**In scope:** Internal Jobs, Secondments, STIPs, Gigs, PSFG (conditional — see Open Questions #1).  

**Out:** SJR creation, C@G (stays on its own rails), criteria authoring (POCDEX write path blocked).  

**Readiness gate:** Agency-admin auth undefined. Who these users are, how they authenticate, and who builds it is unresolved — this must be confirmed before the R1 story pipeline opens.

### Epic B — Streamlined Apply + Smart Pre-fill

A native in-Compass application form (no FormSG redirect). Auto-populated from the officer's OTEP profile — competencies and work history filled in, officer reviews, edits where needed, submits without leaving CareerCompass.

**In scope:** In-Compass form (OTEP-native), profile-driven pre-fill.  

**Out:** CV upload, CIE inference (OTEP-205). Pre-fill is profile-driven only.  

**Dependency:** Competency SSOT endpoint contract between Léo and Kingsley (open items #18/#41) must be finalised before pre-fill quality can be guaranteed.

### Epic C — Status Tracking

End-to-end application monitoring. OTEP owns the state machine. ATS integration confirmed (World A — ATS/HRPS/Cumulus) so status updates surface in CareerCompass and reflect in existing HR systems simultaneously.

**State machine:** Submitted → Under Review → Outcome.  

**Scope change from R1 jam:** ATS integration is confirmed in scope (previously World B / OTEP-native only). This reverses the jam recommendation. Implications: the ATS integration spec and the webhook/polling architecture decision move from R2 planning into R1.  

**Where the 24hr OKR lives:** The status-back-to-officer path from manager action in ATS, not the apply flow. ATS introduces external latency OTEP doesn't control — the OKR measurement point must be confirmed before grooming.  

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
| **Must** | A (opportunity creation) · B (native apply + pre-fill, excl. C@G) · C (status tracking, ATS integration) |
| **Should** | E (competency management v1, read-only sync minimum) · D (Saved Jobs — save half) |
| **Could** | E write-back (if POCDEX write path unblocks) · D resume-application half (if abandonment >40%) |
| **Won't** | Criteria authoring · Smart Assistant (R3) · CIE/CV inference · SJR creation · opportunity recommender · C@G native apply |

**If R1 has to cut:** D goes first. If integration specs slip, E defers to read-only sync only. A + B + C is the non-negotiable floor.

---

## Success Metrics

**Primary:** Apply completion rate — officer who reaches the Apply CTA and submits without leaving CareerCompass.
- Baseline: ~15-20% (estimated; no in-platform tracking exists today)
- Target: 40%+ by Mar 2027

**North Star progress:**
- Target: 10% of onboarded officers complete a development action by Mar 2027
- Measured via: PostHog funnel — list view → detail view → in-Compass form submit → confirmation (Thomas owns instrumentation)

**Status latency:**
- Target: officer sees status update within 24 hours of manager action in ATS
- Measured via: timestamp delta between ATS event and OTEP status update

**Guardrails (must not harm):**
- UAT/pilot officer satisfaction score: ≥ 3.5/5
- Pre-fill trust: stale or wrong pre-fill must not increase form abandonment vs. baseline (instrument separately)

**Kill criteria:** If apply completion rate at 4-week mark is below 25%, or if stale pre-fill incidents exceed 10% of submissions, pause and remediate before expanding pilot.

---

## Rollout Plan

**Phase 1 — Pilot (Jan 2027)**
6 agencies, staggered pair onboarding. Epics A + B + C gated on ATS integration spec confirmation and agency-admin auth path. Epic D and E as ready.

**Phase 2 — Expand (Mar 2027)**
Expand to additional agencies based on Phase 1 satisfaction scores and completion rate. North Star 10% target assessment point.

**Rollback:** If status sync fails or pre-fill data quality falls below threshold, disable in-Compass form and revert to FormSG redirect with a user-facing message. FormSG path remains in the codebase through R1.

---

## Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| ATS integration owner and spec unknown | Red — blocks Epic C | Which ATS, who owns the API contract, and webhook vs polling architecture — must be confirmed before C is groomed. |
| Agency-admin auth undefined | Red — readiness gate for Epic A | No auth path = Epic A can't ship. Confirm with Pow Hwee / Fabian before pipeline opens. |
| Competency Management v1 scope unconfirmed | Red — if write-back is intended, re-opens Core #31 | Confirm read-only vs write-back with Imelda / Daryll before grooming. |
| Thomas is single FE across A, B, and C | Red — capacity risk | Full-type creation + native apply + ATS integration surface all route through one FE. Capacity check against sprint plan is a blocker before R1 grooming opens. |
| Rejection screen under-designed | Red | Most emotionally sensitive screen in the release. Amber to scope alongside Epic C data model, not after. |
| 24hr latency OKR at risk with ATS | Amber | External system introduces latency OTEP doesn't control. Measurement point (ATS manager action vs CareerCompass display) must be confirmed with Adrian. |
| Pre-fill quality depends on #18/#41 | Amber | Competency SSOT contract between Léo and Kingsley not finalised. Pre-fill erodes trust faster than no pre-fill if data is stale. |

---

## Open Questions

- [ ] **PSFG in R1 or R1.5?** Policy intent to be confirmed — Jace / Adrian. If not confirmed before grooming, PSFG creation defers to R1.5; other 4 types proceed. (#1 — today's Jace check-in)
- [ ] **ATS integration spec** — which system, who owns the API contract, webhook vs polling? — Pow Hwee / Fabian
- [ ] **Agency-admin auth** — does it exist, who builds it? — Pow Hwee / Fabian
- [ ] **Competency Management v1 scope** — read-only sync vs write-back? — Imelda / Daryll
- [ ] **24hr latency OKR measurement point** — from ATS manager action or from status appearing in CareerCompass? — Adrian
- [ ] **Epic C state machine** — who triggers each transition (officer, HR, ATS event, OTEP)? Each answer is a different backend shape. — Pow Hwee + Michelle
- [ ] **Mark sign-off on shaped epic set** (#40) — Michelle → Mark

---

## Non-Goals

- **Criteria authoring** — re-opens the POCDEX write path (Core #31). Comes R1.5.
- **Smart Assistant** (auto-populate strengths, CV builder) — confirmed R3. Reduces AI complexity in R1.
- **C@G native apply** — C@G officers redirect as today. Excluded.
- **SJR creation** — out unless Mark pulls it in.
- **CV upload / CIE inference** (OTEP-205) — smart pre-fill is profile-driven only.
- **ATS as system of record for postings** — OTEP owns the posting record. ATS integration is status-sync only in R1.
- **Opportunity recommender / Intelligence Dashboard** — hypothesis-stage; roadmap item.

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
Agency HR creates a posting in OTEP native form, publishes, sees applications routed to ATS, updates status in ATS, status syncs back to CareerCompass, officer notified. Closes posting in OTEP.

*Unlock condition:* ATS integration spec confirmed (World A). Manager dashboard shape depends on whether OTEP surfaces applicant data or defers fully to the ATS — this is unresolved and must be confirmed alongside the Epic C spec.

### Key Decisions Made

| # | Decision | Date | Status |
|---|----------|------|--------|
| D-025 | Native in-Compass apply (no FormSG redirect) | Steering 2026-03-12 | Confirmed |
| D-026 | ATS fork — World A (ATS/HRPS/Cumulus integration) | Post-review 2026-06-24 | Confirmed |
| D-027 | Smart Assistant → R3 | Post-review 2026-06-24 | Confirmed |
| D-028 | Saved Jobs → R1 | R1 jam 2026-06-24 | Confirmed |
| D-029 | C@G native apply → excluded from R1 | Confirmed | Confirmed |
| Open | PSFG in R1 vs R1.5 | — | Pending (Jace 2026-06-25) |

</details>

---

*Stage: XFN Kickoff. Last updated: 2026-06-25.*  
*Sources: R1 epic brief (2026-06-23), R1 jam draft v3 (2026-06-22), manager briefing (2026-06-23), OTEP OKR roadmap (2026-06-16), live Jira S4 (2026-06-25).*  
*Next: Mark sign-off (#40) → open R1 story pipeline → Epic A + C readiness gates before grooming.*
