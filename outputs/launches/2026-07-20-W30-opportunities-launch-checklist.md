---
feature: Opportunities (Listing + Detail + Apply) — MVP P0 pillar
prd: context-library/prds/opportunities-listing.md
launch_date: 2026-10-19 to 2026-10-23 (target — see Risk Mitigation, this date is contested)
launch_type: Staged rollout (6 pilot agencies, staggered pairs) — Government MVP, not a commercial launch
risk_level: High
---

# Launch Checklist: Opportunities (MVP)

**Target Launch:** Week of 19–23 Oct 2026 (per programme plan) — **but the 2026-06-23 launch-readiness review found this unachievable given VAPT timelines; November is more realistic.** This checklist tracks readiness against the real critical path, not the contested date.

**Rollout Strategy:** Staged — 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), staggered pairs, ~5,400 officers

**Owner:** Michelle Yip (PM) — **note: no single end-to-end launch readiness owner has been named across UAT + VAPT + data + agency onboarding + comms + production validation.** This gap is flagged as a P0 item below, not assumed resolved by this checklist.

---

## Where This Sits Relative to Existing Work

This checklist does not replace the UAT Operating Model (2026-07-17) — it assumes that model's 5 readiness conditions (SIT complete, all external integrations connected, environment stability + auth readiness, test accounts/persona data ready, external teams notified of freeze window) as the UAT entry gate, and focuses on what's specific to **Opportunities** as a feature plus the broader **go-live** operational surface the UAT model doesn't cover (data pipeline health, agency onboarding, support readiness, rollback).

---

## Pre-UAT: Now → 11 Aug (UAT start)

### Product & Data

- [ ] **[P0] Name a single end-to-end launch readiness owner** (Blocks: everything below — without one, gaps between streams repeat) — @Adrian or @Rama — Due: This week
  - Flagged unresolved at 23 Jun launch-readiness review; still open as of 20 Jul. UAT, VAPT, data, agency onboarding, and comms are being run as separate streams with no one accountable for the critical path across all of them.
- [ ] **[P0] Pull FormSG baseline submission volumes** (Blocks: channel migration target validity) — @Michelle / @Engineering — Due: Before UAT
  - Still not pulled as of this PRD's last update. Without it, "≥50% channel migration by Month 3" is an unverified target — you won't know if 50% is ambitious or trivial.
- [ ] **[P0] Resolve OTG UAT read-replica data quality issue** (Blocked by: Daryll/Pow Hwee; Blocks: meaningful UAT test data) — @Pow Hwee / @Daryll — Due: Before UAT starts
  - Open item #33: "UAT read replica code table is very unclean." Dirty data blocks both testing and data alignment — this is a data pipeline risk, not just a feature risk.
- [ ] **[P1] Confirm OTG ingestion job reliability under real cadence** (Blocked by: OTG data quality above) — @Léo / @Pow Hwee — Due: Before UAT
  - Opportunities depends on a daily Excel import (OTG) and API feed (C@G). "The listing renders" is not the same as "the pipeline feeding it is operationally sound" — confirm the scheduled trigger (OTEP-666, Done) has actually run clean for several consecutive days before trusting it in UAT.
- [ ] **[P1] Confirm ringfencing behavior against incomplete profile data** (Blocked by: POCDEX data completeness) — @Michelle / @Pow Hwee — Due: Before UAT
  - 23 Jun meeting flagged a live contradiction: agency onboarding assumes clean profile data, but the same meeting surfaced missing profile mappings. For Opportunities specifically, this determines whether ringfencing (OTEP-127) silently over-blocks or under-blocks eligible officers — needs an explicit test case, not an assumption.

### Guardrail Ownership (defined in PRD, unowned in practice)

- [ ] **[P0] Assign an owner to monitor submission error rate post-launch** (currently defined as a guardrail with no named owner) — @Engineering lead — Due: Before UAT
- [ ] **[P0] Assign an owner to monitor confirmation email delivery rate** (currently defined as a guardrail with no named owner) — @Fabian / Infra — Due: Before UAT
  - Both guardrails exist on paper in the PRD ("pause and investigate" / "escalate to Infra") but no one is named as the person who actually watches these dashboards from day one. A guardrail without a watcher isn't a guardrail.

### UAT Prep Specific to Opportunities

- [ ] **[P0] AC-validation-status artifact covers Opportunities test cases explicitly** (Blocked by: this week's Priority 2 — consolidation of the 3 partial UAT docs) — @Michelle — Due: This week
- [ ] **[P1] Confirm E2E test scenarios for the full Opportunities journey** (list → detail → apply → confirmation) — @Product + @BOs — Due: Before UAT
  - Named as an open action from the 23 Jun review, still not confirmed closed.
- [ ] **[P1] Resolve OTEP-87 Jira AC / design intent mismatch** (Blocks: clean UAT test case authoring for the detail page) — @Michelle — Due: Before UAT case-writing
- [ ] **[P2] Resolve OTEP-133 Jira title mismatch (EDM deep-link landing)** — @Michelle — Due: Before UAT

---

## UAT Period: 11 Aug – 4 Sep

### Monitoring & Triage

- [ ] **[P0] Daily defect triage cadence established for Opportunities-specific bugs** (Blocked by: UAT Operating Model's RACI — QA advises, PM owns scenario intent) — @Michelle / @QA — Due: UAT start
- [ ] **[P0] Environment freeze expectations actually communicated to external teams** (not just decided internally) — @Rama — Due: Before freeze window starts
  - Flagged as still outstanding in the 2026-07-17 UAT Plan Sharing meeting notes — internal agreement exists, external comms doesn't yet.
- [ ] **[P1] Track `search_zero_results` and form field drop-off during UAT** — @Michelle / @Data — Due: Ongoing during UAT
  - These are the two input metrics most likely to surface Opportunities-specific UX gaps before they reach production.

---

## Pre-Go-Live: Post-UAT → VAPT → Deploy

### Timeline Reality Check

- [ ] **[P0] Escalate the Oct-vs-Nov go-live gap to Adrian and Jace explicitly** (Blocks: realistic external communication to BOs/agencies) — @Michelle — Due: Immediately, before it becomes a SteerCo surprise
  - The 23 Jun review already concluded November is more realistic than the Oct 19–23 target on record. This has been flagged internally since 2026-06-23 but per the same meeting's notes, was never formally escalated with a recommendation. Business expects 6 agencies live before November — the gap between that expectation and the real critical path needs a decision, not a hope.
- [ ] **[P0] Confirm VAPT scope (POCDEX/CSC/Cumulus) before Sprint 7 planning** (Blocked by: Barry/Pow Hwee) — @Michelle → @Barry / @Pow Hwee — Due: Before S07 planning
  - Open item #39 — still TBC as of last stale-check.

### Rollback Plan (Opportunities-specific)

- [ ] **[P0] Confirm rollback plan for Opportunities if ingestion or ringfencing fails post-launch** — @Pow Hwee / @Michelle — Due: Before deploy
  - Unlike R1's apply flow (which has an explicit FormSG-redirect rollback documented in the R1 PRD), MVP's Opportunities listing has no equivalent documented fallback if the OTG/C@G pipeline breaks post-launch or ringfencing misfires at scale. Needs its own answer: revert to a static/cached listing? Disable ringfencing and show all? This should be decided before go-live, not improvised during an incident.

### Agency Onboarding

- [ ] **[P1] Validate agency onboarding assumptions against actual data state** (Blocked by: profile data completeness confirmation above) — @Product team — Due: Before first pilot pair onboards
  - Named as an open question at 23 Jun review, no confirmation found since.
- [ ] **[P1] Socialise realistic MVP timeline with dependent teams** (Learn, Projects, integration teams) — @Product team — Due: Before deploy window

---

## Launch Week

### Final Checks

- [ ] **[P0] Confirm Data Office approval has landed** (Blocked by: Rama's request, flagged as a bottleneck risk since 23 Jun) — @Rama — Due: Before deploy
- [ ] **[P0] All 5 UAT Operating Model readiness conditions confirmed true, not just decided on paper** — @Michelle / @Rama — Due: Before go-live sign-off
  - Per last week's `/weekly-review`, the Operating Model's resolution of the QA/UAT boundary was contested live by Adrian and Jace and never visibly confirmed as accepted — this needs to be genuinely closed before treating the model as a real gate, not just a document that exists.
- [ ] **[P0] Feature flag / staged rollout mechanism confirmed working for staggered agency pairs** — @Engineering — Due: Before first pair goes live

### Monitoring & Operations

- [ ] **[P0] Dashboards live for the 4 core input metrics** (click-through, apply click rate, form drop-off, channel migration) — @Data/Eng — Due: Launch day
- [ ] **[P0] Guardrail alerts configured** (submission error rate, confirmation email delivery) — @Engineering — Due: Launch day
- [ ] **[P0] On-call / incident response owner named for Opportunities specifically** — @Pow Hwee / Eng Lead — Due: Launch day

---

## Post-Launch: T+1 Week

- [ ] **[P0] Metrics reviewed daily against MVP targets** (application completion rate, channel migration) — @Michelle — Due: Ongoing
- [ ] **[P0] No critical bugs blocking application submission** — @Eng/QA — Due: Ongoing
- [ ] **[P1] Support/helpdesk briefed on common Opportunities issues** (missing agency data, ringfencing confusion, FormSG redirect failures) — @Michelle / @Support — Due: T+1 week

## Post-Launch: T+4 Weeks

- [ ] **[P0] Channel migration rate checked at Month 1** (target: trending toward ≥50% by Month 3) — @Michelle — Due: T+4 weeks
- [ ] **[P0] Application completion rate vs. FormSG historical baseline** — @Michelle — Due: T+4 weeks
- [ ] **[P1] Run `/feature-results` for full post-launch analysis** — @Michelle — Due: T+4 weeks
- [ ] **[P1] Review `search_zero_results` data to inform R1 filter design** — @Michelle — Due: T+4 weeks

---

## Critical Path

```
Name launch readiness owner ──► Resolve OTG UAT data quality (Daryll/Pow Hwee)
                                        │
                                        ▼
                        Confirm E2E test scenarios + AC-validation artifact
                                        │
                                        ▼
                              UAT (11 Aug – 4 Sep, staggered)
                                        │
                                        ▼
                        Confirm VAPT scope (Barry/Pow Hwee, before S07 planning)
                                        │
                                        ▼
                              VAPT + remediation (up to 2 months per 23 Jun assessment)
                                        │
                                        ▼
                          Data Office approval + go-live sign-off
                                        │
                                        ▼
                       Staged deploy — 6 agencies, staggered pairs
```

**Total duration:** Programme plan assumes ~13 weeks from now to Oct 19–23 go-live. The 23 Jun launch-readiness review's own assessment puts VAPT + remediation alone at up to 2 months after code freeze (~early Sep) — pushing realistic go-live into November.

**Slack: negative.** The critical path as currently understood does not fit inside the stated target date. This is not a new risk this checklist introduces — it restates a finding from 2026-06-23 that appears not to have been formally escalated with a recommendation since.

**WARNING:** The single highest-leverage item on this checklist is not a feature-readiness task — it's escalating the Oct-vs-Nov gap to Adrian and Jace with a clear recommendation, before it surfaces as an unplanned surprise at a later SteerCo.

---

## Risk Mitigation

⚠️ **Risks:**

- **VAPT timeline likely pushes go-live past the stated Oct 19–23 target** — Mitigation: escalate now with a recommendation (see Critical Path above), don't wait for the date to slip visibly.
- **OTG UAT data quality is currently too unclean for meaningful test data** — Mitigation: Daryll/Pow Hwee resolve before UAT starts (open item #33); if not resolved, UAT risks testing against garbage data and producing false-negative or false-positive signal.
- **No named end-to-end launch readiness owner** — Mitigation: name one this week; without it, the same cross-stream gaps (UAT/VAPT/data/onboarding/comms) that were flagged 23 Jun will likely repeat.
- **Guardrails (submission error rate, email delivery rate) are defined but unwatched** — Mitigation: assign explicit owners before UAT, not at launch week.
- **Ringfencing behavior against incomplete profile data is untested** — Mitigation: write an explicit test case for officers with partial/missing POCDEX profile data before UAT, don't discover this in production.
- **No documented rollback plan for Opportunities' data pipeline or ringfencing** (unlike R1, which has an explicit FormSG-redirect fallback) — Mitigation: decide and document before go-live.

**Rollback criteria (draft — needs explicit confirmation, see rollback item above):**
- Submission error rate exceeds an as-yet-undefined threshold → pause and investigate (per PRD guardrail language, threshold not yet numeric)
- Ringfencing incorrectly blocks eligible officers at scale → disable ringfencing, show unfiltered listing with a banner, escalate to Pow Hwee
- OTG/C@G ingestion pipeline fails post-launch → fall back to last-known-good cached listing data, alert Engineering

---

*Generated: 2026-07-20*
*Sources: [opportunities-listing.md](../../context-library/prds/opportunities-listing.md), [UAT Operating Model](../meeting-notes/2026-07-17-W29-uat-operating-model.md), [launch-readiness squad sync](../archive/2026-W26-Jun22-Jun26/meeting-notes/2026-06-23-W26-squad-sync-launch-readiness.md), open items #33/#39 (00-hub/open-items.md), sprint-status.md (2026-07-20 live pull)*
*Next: Get the launch-readiness owner question and the Oct-vs-Nov escalation in front of Adrian/Jace this week — both are prerequisites for the rest of this checklist meaning anything.*
