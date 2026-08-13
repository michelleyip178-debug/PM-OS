---
date: 2026-08-12
week: 2026-W33
scope: Audit of user story / acceptance criteria changes across OTEP-Pathfinder tickets, Sprint 1 through Sprint 8 (current), including live UAT findings from board 20498 (CC-UAT)
---

# Pathfinder Story & AC Drift — Sprint 1 → Sprint 8

## Method Note

The per-sprint Jira snapshot folders at `PM-skills-ALL-1/03-stories/jira-sync/` do **not** provide a usable AC diff history. Diffing all 54 tickets that overlap between `Sprint-34621-OTEP-Pathfinder-Sprint-7/` and `Sprint-34622-OTEP-Pathfinder-Sprint-8/` found zero AC text changes — only status, story points, sprint field, new subtasks, and comments changed. Sprint 1/2/3 folders only have 3, 3, and 8 tickets respectively, with no overlap on most tickets discussed below.

**The real AC-change history lives in narrative sources**, not the Jira sync snapshots: `06-skills-and-decisions/decisions-log.md`, `00-hub/open-items.md`, `03-stories/deferred-acs.md`, `03-stories/scoping-gaps-tracker.md`, archived meeting notes/grooming briefs across weeks W22–W33, and — for a fourth category of drift the planning-doc trail can't surface — live UAT test results from Jira board 20498 (CC-UAT), pulled directly via API on 2026-08-12. See Group D.

---

## Group A — Tickets with Multiple Documented Changes

### OTEP-87 — Detail page apply CTA + competencies (C@G detail)

Most-churned ticket in the record. Five changes.

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| A1 | 2026-05-25 | AC mismatch identified — Jira ACs didn't match actual US-08 intent. Flagged for resolution before Sprint 3 grooming. | Michelle (with Designer/Pow Hwee) | `outputs/archive/2026-W22-May25-May31/2026-05-25-W22-weekly-plan.md` L66, L71 |
| A2 | 2026-05-27 | AC reconciled to "apply CTA only." Competency section moved Out of Scope (blocked on open item #18, competency data model). Synced to Jira alongside OTEP-86, 317, 319. | Michelle | `outputs/archive/2026-W22-May25-May31/daily-plans/2026-05-27-W22-daily-plan.md` L42, L74 |
| A3 | 2026-06-04 → 06-05 | AC conflict: FormSG vs C@G deep-link boundary, flagged twice by Pow Hwee. Resolved: FormSG removed from OTEP-87's AC, apply points to the C@G deep-link (OTEP-89). AC rewritten and synced 06-05. | Pow Hwee (flagged) / Michelle (rewrote) | `outputs/archive/2026-W23-Jun01-Jun07/analyses/2026-06-04-W23-grooming-brief.md` L77; `.../daily-plans/2026-06-05-W23-daily-plan.md` L98 |
| A4 | 2026-06-08 | Personalisation edge cases E1/E2 descoped from MVP, recorded against OTEP-87's Out-of-Scope block. | Michelle / Amber | `outputs/archive/2026-W24-Jun08-Jun14/meeting-notes/2026-06-08-W24-edge-cases-amber-prep.md` L271 |
| A5 | 2026-06-18 | Instruction to remove separate "STIP or Gig" references, replace with merged type name (same instruction as OTEP-319 K4). | Michelle | `outputs/archive/2026-W25-Jun15-Jun21/meeting-notes/2026-06-18-W25-grooming-opportunity-type-recategorisation.md` |

**Status:** A1–A4 confirmed (A3 confirmed resolved 2026-06-10/11 and again 2026-06-17). **A5 unverified** — instruction found, no confirmation the AC edit was pushed to Jira.

Note: an evidence-correction exercise on 2026-07-13 found a claim of "6 AC conflicts in Sprint 4" was unsupported and corrected it to 2 — OTEP-87 (FormSG/C@G boundary) plus a C@G payload schema dependency for OTEP-378. Source: `outputs/archive/2026-W29-Jul13-Jul17/analyses/2026-07-13-W29-apa-evidence-findings-report.md` §5, L54–60.

---

### OTEP-405 — Keyword Search for Opportunities

Four changes. **The description-match snippet question — open since 2026-06-17 — was finally closed via live UAT on 2026-08-12.**

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| B1 | 2026-06-17 | Two new ACs added: (a) description-match indicator — if a result matches on description rather than title/agency, card must show a visible snippet/signal (Google's "match in content" pattern); (b) result ordering — relevance first, then posting date. | Michelle (from standup decisions) | `outputs/archive/2026-W25-Jun15-Jun21/meeting-notes/2026-06-17-W25-standup.md`, "AC Update Needed: OTEP-405" section, L84+ |
| B2 | 2026-06-17 | AC clarifications answered in comments but never written into the AC field: "relevance" = exact match of search text in title or agency; search excludes description (title + agency only); submit-triggered, not live-type. | Rathika (question) / Michelle (answer) | Ticket comments in `03-stories/jira-sync/Sprint-34622-OTEP-Pathfinder-Sprint-8/OTEP-405.md`; flagged as defect in `outputs/archive/2026-W29-Jul13-Jul17/analyses/2026-07-17-W29-ac-to-test-case-coverage-audit.md` L62, L89 |
| B3 | 2026-07-13 | Search MVP scope cut: clear-search, trigger model, suggestions deferred to post-MVP. MVP search reduced to fuzzy match + submit-to-search. | Michelle | `06-skills-and-decisions/decisions-log.md` (2026-07-13 entry); `00-hub/open-items.md` #51 |
| B4 | **2026-08-12** | **Resolved via live UAT (board 20498, OTEP-1033 / UAT-SEARCH-015).** Multiple testers (Michelle, Guo XZ, Charles) independently found description-only search terms returned zero results. Pow Hwee checked the code directly: search is intentionally scoped to title + agency only, no description search, no snippet/highlight logic exists — matches the AC's stated MVP scope. **Closed as works-as-designed; description search reclassified as a future enhancement, not an MVP gap.** Michelle agreed to close and raise separately as an enhancement request. | Pow Hwee (code check) / Michelle (agreed to close) | Live Jira, `OTEP-1033` comments, 2026-08-11 → 2026-08-12; see Group D |

**Status: now resolved.** The AC text still has the underlying inconsistency described in B1–B2 (the description-match "Out of Scope" clause was never cleanly reconciled with the still-active relevance-ordering AC, and "relevance" was never migrated out of a comment into the AC field) — so a documentation cleanup is still worth doing — but the *product* question of whether description matches should be surfaced is now closed, and closed the opposite way from the original B1 proposal: no snippet, no indicator, silent non-match.

Related: **OTEP-668** — combined agency+title query defect descoped from Sprint 7 into a new ticket on 2026-08-07; new ticket creation still pending at time of writing. Sources: `outputs/archive/2026-W32-Aug3-Aug7/slack-messages/2026-08-07-W32-otep-668-descope-reply.md`; `.../meeting-notes/cleanup-2026-08-07.md` L91.

---

### OTEP-130 — FormSG apply flow

Four re-scopes over ~2 months, ending in a total scope cut. The cleanest end-to-end drift story in the record.

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| C1 | 2026-05-20 | Deferred to Sprint 5 (complex webhook integration). Basic redirect (US-18) pulled into Sprint 3 instead. | Pow Hwee / Michelle | `06-skills-and-decisions/decisions-log.md` (2026-05-20) |
| C2 | 2026-05-26 | Re-scoped to "basic redirect + webhook only, no pre-fill." Pre-fill (US-P3) deferred to R1. | Michelle (Squad Sync) | `outputs/archive/2026-W22-May25-May31/meeting-notes/2026-05-26-W22-otep-squad-sync.md` L46, L57 |
| C3 | 2026-06-10 | Removed from Sprint 4 entirely, moved back to Backlog for BO alignment. Webhook judged not a must-have. | Michelle (after Léo challenge) | `06-skills-and-decisions/decisions-log.md` (2026-06-10) |
| C4 | 2026-07-20 | All net-new scope cut — no webhook, no submission tracking, no officer email, no poster notification. Pow Hwee confirmed FormSG doesn't support webhooks. Remaining scope likely duplicates Sprint 3's US-18/OTEP-319. | Michelle / Pow Hwee | `06-skills-and-decisions/decisions-log.md` (2026-07-20); `00-hub/open-items.md` #57 |

**Status:** C4 confirmed and resolved. **Two loose ends remain open:** (1) never decided whether to close OTEP-130 as a duplicate of OTEP-319 or keep as a thin traceability ticket (still pending per 2026-07-23 RTM); (2) North Star visibility follow-up (no webhook = no visibility into whether STIP/Gig applications happen) logged as non-blocking, never closed.

---

### OTEP-128 — View opportunity detail page

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| D1 | 2026-05-14 | Created mid-Sprint-2 as scope addition when Sprint 2 reshuffled to Listing→Detail end-to-end. OTEP-129 absorbed into OTEP-85. | Pow Hwee / Michelle | `06-skills-and-decisions/decisions-log.md` (2026-05-14) |
| D2 | 2026-05-14 | 7 ACs pushed out at grooming: ministry icon, matching type label, browser-tab title (Good-to-have); "Save for later," supervisor endorsement workflow, "Similar opportunities," competency matching (all → R1). | Grooming | `03-stories/deferred-acs.md` |
| D3 | Sprint 3 | 2 AC conflicts (OTEP-128, 129 duplicating OTEP-85's logic) caught the day before planning, resolved pre-ceremony. | Michelle (DoR audit) | `outputs/archive/2026-W27-Jun29-Jul3/analyses/2026-07-02-W27-appraisal-panel-prep.md` L228, L248 |
| D4 | 2026-07-02 | 2 new ACs added directly in Jira **while ticket already in QA** — deep-link auth gate: unauthenticated deep-link redirects to login first, then lands on the specific opportunity page (not listing); deep-links stay valid while opportunity active. Original AC was silent on this. | Michelle (amended) / Hao Eng Chua + Léo (confirmed behaviour) | `00-hub/open-items.md` #53; `outputs/archive/2026-W27-Jun29-Jul3/analyses/2026-07-02-W27-appraise-ai-input-list.md` L35 |
| D5 | 2026-07-27 | PRD's OTEP-128 row corrected — competency match ratio was marked "deferred to R1," no longer true after competency matching reversed back into MVP. | Michelle | `outputs/analyses/2026-07-27-W31-opportunities-prd-jira-reconciliation.md` L45 |

**⚠️ Two flags.** D4 is marked 🟡 awaiting QA verification in open-items #53 — no confirmed closure found. Separately, **OTEP-128 and OTEP-131 contradict each other** on SJR apply-button treatment (128: disabled button; 131: neither button nor message) — moot since no SJRs exist, but the contradiction is still live in both tickets.

---

### OTEP-86 — Filter opportunities by type

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| E1 | 2026-05-13/14 | Deferred Sprint 2 → 3. 6 ACs pushed out: back-button filter preservation, active-filter visual distinction, broaden-filters prompt (Good-to-have); per-type counts (Should); category/function filter (→ US-03); competency filter (→ R1). | Pow Hwee / Michelle / Grooming | `06-skills-and-decisions/decisions-log.md` (2026-05-14); `03-stories/deferred-acs.md` |
| E2 | 2026-05-27 | AC updated and synced to Jira (batch with 87, 317, 319). | Michelle | `outputs/archive/2026-W22-May25-May31/daily-plans/2026-05-27-W22-daily-plan.md` L42 |
| E3 | 2026-06-16 | Category model changed twice in one day: 5-category model (STIPs, Gigs, PSFG, Jobs, SJR) superseded by 4-category model (Jobs/STIPs/Gigs/SJRs), PSFG removed from MVP entirely. | Michelle / Xian Zhang | `06-skills-and-decisions/decisions-log.md` (2026-06-16) |
| E4 | 2026-06-16 | Job family / functional area filter pulled INTO MVP — reversing the 2026-05-06 R1 deferral. | Michelle | `06-skills-and-decisions/decisions-log.md` (2026-06-16) |
| E5 | 2026-06-18 | AC update ordered to reflect merged STIP+Gig display label. Flagged 🔴 blocking — "cannot be marked Done until AC updated." | Michelle | `outputs/archive/2026-W25-Jun15-Jun21/meeting-notes/2026-06-18-W25-grooming-opportunity-type-recategorisation.md` |
| E6 | 2026-06-22 | **E5 reversed.** DevOps/categories decision: "OTEP-86 can close as-is — no AC updates required; filter story is ready." | Michelle (DevOps decision meeting) | `outputs/archive/2026-W26-Jun22-Jun26/meeting-notes/2026-06-22-W26-devops-opportunity-categories-decision.md` L79 |

**Status:** confirmed. E5→E6 is a genuine 4-day AC-change-then-reversal while the ticket sat blocked in QA.

---

### OTEP-71 — Login Authentication using WOG AD

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| F1 | 2026-05-21 | Whole auth epic (71, 110, 304, 305) moved Sprint 3 → Sprint 4+, overriding the 05-19 "Sprint 3 locked to 3 stories" decision. Driver: no WOG AD UAT environment. | Michelle (grooming) | `06-skills-and-decisions/decisions-log.md` (2026-05-21) |
| F2 | 2026-07-08 | AC updated: invalid-credential error handling routed to OTEP-110. Formalised edge-case split — WOG AD owns account-disabled/locked and network/AD-down; OTEP owns the fact AD returns only email + SOE-ID, so all profile data comes from POCDEX. | Michelle | `outputs/archive/2026-W28-Jul6-Jul10/analyses/2026-07-08-W28-sprint6-test-scenarios.md` L212, L331, L359 |

**Status:** confirmed — current Sprint 8 AC text matches.

---

### OTEP-110 — Login fail using WOG AD

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| G1 | 2026-05-25 | Jira/PRD AC mismatch flagged, needed Pow Hwee clarification. | Michelle | `outputs/archive/2026-W22-May25-May31/2026-05-25-W22-weekly-plan.md` L40, L50, L115 |
| G2 | 2026-05-21 | Moved out of Sprint 3 with rest of auth epic (see F1). | Michelle | `06-skills-and-decisions/decisions-log.md` (2026-05-21) |
| G3 | 2026-07-08 (morning) | Briefly closed as a near-no-op, on the assumption WOG AD owns all login-failure UI. | — | `outputs/archive/2026-W28-Jul6-Jul10/analyses/2026-07-08-W28-sprint6-test-scenarios.md` L210–212 |
| G4 | 2026-07-08 (same day) | **G3 reversed.** Final scope: OTEP-110 owns invalid-credential error display and renders it itself, not WOG AD. Real, testable FE work. Out-of-Scope block added: account disabled/locked and network/AD-unavailable stay with OTEP-71; authorisation failures (no pilot access, no POCDEX profile) belong to OTEP-111. | Michelle | Same source, L210–231, L331 |

**Status:** confirmed. Same-day close-then-reopen — the sharpest single-day AC churn example in the record.

---

### OTEP-594 — Routing after auth

Most explicitly documented re-scope in the corpus (scoping-gaps-tracker item #15).

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| H1 | pre-2026-07-08 | AC carried a literal `[NEEDS RE-SCOPE: decision #7/#8/#9]` marker in Jira. Ticket flagged 🔴 Not ready. | — | `outputs/archive/2026-W28-Jul6-Jul10/analyses/2026-07-08-W28-sprint6-test-scenarios.md` L7, L275 |
| H2 | 2026-07-08 | All three decisions resolved, AC rewritten directly in Jira. #7: "pilot agency, no POCDEX profile yet" routes to its own system-error state, not OTEP-111's unauthorised page. #8: system-error copy made generic ("try again shortly"), decoupled from the unresolved POCDEX sync-cadence question. #9: no auto-logging; replaced with officer-clicked "Report issue" CTA. | Michelle | `03-stories/scoping-gaps-tracker.md` #15; test-scenarios doc L282, L350 |
| H3 | 2026-07-08 | Structural decision: keep as one ticket rather than splitting the system-error screen into a separate story. | Michelle | `03-stories/scoping-gaps-tracker.md` #15 |

**⚠️ Gap #15 still marked "Open (decisions resolved; screen not built)."** AC re-scope confirmed complete, but the system-error screen doesn't exist yet.

---

### OTEP-88 — Careers@Gov opportunities in the listing

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| I1 | 2026-06-02/04 | Scope expanded from badge-only to a full C@G listing page — Pow Hwee's push. Flagged at grooming as thin AC needing rescope. | Pow Hwee (drove) / Michelle (rewrote) | `outputs/archive/2026-W23-Jun01-Jun07/analyses/2026-06-04-W23-grooming-brief.md` L31, L61, L78 |
| I2 | 2026-06-05 | AC rewritten and synced to Jira. | Michelle | `outputs/archive/2026-W23-Jun01-Jun07/meeting-notes/2026-06-05-W23-cleanup.md` L172 |
| I3 | 2026-06-08 | Mid-sprint review logs this as a scope change "bigger than originally sized" — right call, but flagged. AC4 (fallback) and AC2 (badge spec) left TBC. | Michelle | `outputs/archive/2026-W24-Jun08-Jun14/analyses/2026-06-08-W24-mid-sprint-review.md` L48 |
| I4 | 2026-06-10 | AC4 resolved: missing-field fallback — render with available fields, no card break, same graceful degradation as OTG. | Michelle | `06-skills-and-decisions/decisions-log.md` (2026-06-10) |
| I5 | 2026-07-27 | OTEP-436 deleted from Jira; OTEP-88 confirmed to cover full C@G scope standalone. | Michelle | `outputs/analyses/2026-07-27-W31-opportunities-prd-jira-reconciliation.md` L50 |

**⚠️ AC2 (badge spec) has no recorded resolution.** Mostly confirmed, one AC unresolved.

---

### OTEP-268 — Empty / error / partial-load states

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| J1 | 2026-05-14 | "No opportunities" empty state removed from Sprint 2, deferred to Sprint 3. Error state + partial-load handling kept. | Squad (grooming) | `06-skills-and-decisions/decisions-log.md` (2026-05-14) |
| J2 | 2026-05-19 | Partial-load AC removed outright (Tailwind stack fetches one API response — no per-card failure mechanism). Good-to-haves spun to separate backlog tickets. Empty state re-added with confirmed copy. Story renamed to "Error and empty states for the listing." | Pow Hwee / Michelle | `06-skills-and-decisions/decisions-log.md` (2026-05-19) |
| J3 | 2026-05-15 | Whole story sidelined from Sprint 2, left unticketed; full AC set preserved only in `deferred-acs.md`. | Michelle | `03-stories/deferred-acs.md` |

**Status:** confirmed. J1→J2 is a five-day remove-then-re-add of the empty state. Residual gap flagged 2026-07-17: OTEP-86's filter AC doesn't mention the empty state, and OTEP-268's empty-state AC doesn't mention filters — the combination exists in neither ticket.

---

### OTEP-319 — Apply via FormSG (basic redirect)

| # | Date | Change | Who | Source |
|---|---|---|---|---|
| K1 | 2026-05-20 | Pulled forward into Sprint 3 to deliver the core browse-to-apply loop early. | Pow Hwee / Michelle | `06-skills-and-decisions/decisions-log.md` (2026-05-20) |
| K2 | 2026-05-27 | Pre-fill resolved as Out of Scope. AC updated and synced. One open question left on tracking params. | Michelle | `outputs/archive/2026-W22-May25-May31/daily-plans/2026-05-27-W22-daily-plan.md` L77; `.../analyses/2026-05-28-W22-sprint-3-planning-prep.md` L236 |
| K3 | 2026-06-10 | Tracking-param AC gated: intent confirmed (append opportunity ID to FormSG redirect URL), implementation blocked pending PostHog procurement. Interim: fire `click_apply_formsg` event before redirect. | Michelle | `06-skills-and-decisions/decisions-log.md` (2026-06-10) |
| K4 | 2026-06-18 | AC update ordered to remove separate STIP/Gig references, use merged type name (same instruction as OTEP-87 A5). | Michelle | `outputs/archive/2026-W25-Jun15-Jun21/meeting-notes/2026-06-18-W25-grooming-opportunity-type-recategorisation.md` L83 |

**Status:** K2/K3 confirmed. **K4 unverified**, same caveat as OTEP-87 A5. The 2026-07-17 coverage audit praised OTEP-319's AC as "unusually complete."

---

## Group B — Tickets with a Single Documented Change

| Ticket | Date | Change | Who | Source |
|---|---|---|---|---|
| OTEP-85 | 2026-05-14 | OTEP-129 absorbed in; split into 85/85a/85b; 8 ACs deferred at grooming (title wrapping, ministry icon, commitment-type label, stable ordering, unknown-type render, sort directions, mobile/tablet layouts, filtering → OTEP-86). | Pow Hwee / Michelle | `06-skills-and-decisions/decisions-log.md` (2026-05-14); `03-stories/deferred-acs.md` |
| OTEP-85a | 2026-05-15 | Re-absorbed into OTEP-85 — "Closing soon" label ceased to exist as separate ticket. ACs preserved in `deferred-acs.md`. | Michelle | `03-stories/deferred-acs.md` |
| OTEP-129 | 2026-06-03 | Split into OTEP-362 (BE: don't return closed) + OTEP-363 (UI: show closed) mid-sprint. Both closed Done without AC disputes. | Engineering / Michelle | `outputs/archive/2026-W23-Jun01-Jun07/analyses/2026-06-03-W23-sprint3-engineer-pov.md` L58; `outputs/archive/2026-W25-Jun15-Jun21/analyses/2026-06-16-W25-feature-results-sprint-3.md` L82 |
| OTEP-133 | 2026-06-05 | Absorbed into OTEP-390 (AC3–6), to be closed in Jira. ⚠️ Still open as of 06-16/17/18 — chased three separate times. | Michelle | `outputs/archive/2026-W23-Jun01-Jun07/daily-plans/2026-06-05-W23-daily-plan.md` L75, L101; `outputs/archive/2026-W25-Jun15-Jun21/analyses/2026-06-16-W25-grooming-brief.md` L22, L45, L128 |
| OTEP-127 | 2026-06-17 | Ringfencing scope significantly reduced. Criteria-authoring UI cut entirely — creation/criteria-setting stay in OTG; CareerCompass reads and displays only. POCDEX dependency reduced from write-path to read-only. | Michelle | `06-skills-and-decisions/decisions-log.md` (2026-06-17) |
| OTEP-131 | 2026-06-11 | Added to Sprint 4 as Should (2 pts), SJR explicitly Out of Scope (no Apply button on SJR detail). | Michelle | `outputs/archive/2026-W24-Jun08-Jun14/meeting-notes/2026-06-11-W24-sprint-4-planning.md` L147; `.../2026-06-11-W24-cleanup.md` L90 |
| OTEP-131 | 2026-06-26 | POC field confirmed absent from OTG export — apply-link placeholder stays (not hidden) until future OTG export or R1 data-model change. Display-only, no backlog story created. | Thomas / Michelle | `06-skills-and-decisions/decisions-log.md` (2026-06-26) |
| OTEP-192 | ~2026-05-27 | Rewritten as groomable story — mechanism-oriented ACs replaced with four behaviour-based ACs (ingestion, lifecycle, validation, scheduling/failure). Closed QA without AC dispute. | Michelle | `outputs/archive/2026-W22-May25-May31/daily-plans/2026-05-27-W22-daily-plan.md` L42; `outputs/archive/2026-W25-Jun15-Jun21/analyses/2026-06-16-W25-ba-l2-apa-self-assessment.md` L26 |
| OTEP-276 | 2026-05-18 | Dropped from Sprint 2 — not deferred, superseded outright by OTEP-252 (Done), which already integrates LifeSG. No Sprint 3 ticket. | Pow Hwee / Michelle | `06-skills-and-decisions/decisions-log.md` (2026-05-18) |
| OTEP-285 | 2026-05-18 | Deferred to Sprint 3 (needed OTEP-85/128 first). 5 ACs deferred, later absorbed into OTEP-128. | Pow Hwee / Michelle | `06-skills-and-decisions/decisions-log.md` (2026-05-18); `03-stories/deferred-acs.md`; `outputs/analyses/2026-07-27-W31-opportunities-feature-backlog.md` L22 |
| OTEP-304 | 2026-06-18 | AC updated: session timeout owned by WOG AD, not OTEP — OTEP handles the expired-token state only. | Michelle | `outputs/archive/2026-W25-Jun15-Jun21/analyses/2026-06-18-W25-sprint-plan-brief.md` L37 |
| OTEP-336 | 2026-06-25 | New behaviour surfaced at Sprint 5 planning: officers with no competencies see a profile-update banner, no match signal shown. Flagged as needing new story/AC addition. | Michelle | `outputs/archive/2026-W26-Jun22-Jun26/meeting-notes/2026-06-25-W26-sprint-planning-s5.md` L43, L117; `.../analyses/2026-06-25-W26-sprint-brief-s5.md` L72 |
| OTEP-336 / OTEP-570 | 2026-07-27 | Competency matching on Opportunities reversed back INTO MVP scope — supersedes an earlier "not MVP" call made in the same document. | Michelle | `outputs/analyses/2026-07-27-W31-opportunities-prd-jira-reconciliation.md` L37–47, L124 |
| OTEP-393 | 2026-06-26 | Keycloak custom login theme deferred out of S4; won't pull into S5 unless WOG AD onboarding (OTEP-350) is Done. | Thomas / Michelle | `06-skills-and-decisions/decisions-log.md` (2026-06-26) |
| OTEP-91 | ~2026-07-27 | AC contradiction resolved by QA, not grooming: search fires on click/Enter only, not live-type. Flagged as "ticket AC needs updating to match." | QA / owner unassigned | `outputs/analyses/2026-07-27-W31-opportunities-feature-backlog.md` L37 |
| OTEP-404 | 2026-07-22 | Grooming scorecard: single implicit AC ("should be 10 not 15"), no story frame. Flagged as needing 1-line AC rewrite. | Michelle | `outputs/archive/2026-W30-Jul20-Jul24/analyses/grooming-brief-2026-07-22.md` L25, L49 |
| OTEP-768 | 2026-07-22 | Flagged "needs AC rewrite from problem description." | Hao Eng | `outputs/archive/2026-W30-Jul20-Jul24/analyses/2026-07-22-W30-grooming-close.md` L33 |
| OTEP-679 | 2026-07-24 | No description or AC in Jira at all — confirmed twice. Flagged as grooming gap blocking test-case drafting. | Flagged to Fanxu/Adrian | `outputs/archive/2026-W30-Jul20-Jul24/analyses/2026-07-24-W30-pathfinder-test-plan-engineering-reference.md` L18 |
| OTEP-331 | — | No documented AC change — but current Jira ticket shows "No description provided" despite QA status. Flagged 🔴 Not ready on 2026-07-08 alongside OTEP-594. AC absence, not AC change. | — | `03-stories/jira-sync/Sprint-34622-OTEP-Pathfinder-Sprint-8/OTEP-331.md`; `outputs/archive/2026-W28-Jul6-Jul10/analyses/2026-07-08-W28-sprint6-test-scenarios.md` L7 |

---

## Group C — Programme-Level Scope Decisions (Rewrote ACs Across Multiple Tickets)

All from `06-skills-and-decisions/decisions-log.md` unless noted.

| Date | Decision | Tickets Touched | Who |
|---|---|---|---|
| 2026-05-08 | Competency match ratio descoped to R1 — "What you'll develop" tags only, no scoring | OTEP-86, 87, 128 | Michelle |
| 2026-05-08 | No "Save for later" in MVP; supervisor endorsement UI-copy-only; competency levels binary only | OTEP-128 + programme-wide | Michelle |
| 2026-05-13 | Card type labels: "OTG" label removed, keep Internal Job / SJR / STIPs & Gigs | OTEP-85, 86 | Squad (internal groom) |
| 2026-05-13 | Pagination fixed 15/page, no deep-linking, spinner only | OTEP-267, 285 | Squad (internal groom) |
| 2026-05-21 | 2026 SJRs excluded from MVP ingestion entirely — supersedes 05-13's "visible, no apply" clause | OTEP-85, 86, 128, 131, 132 | Grooming |
| 2026-05-26 | FormSG pre-fill (US-P3) deferred to R1 | OTEP-130, 319 | Michelle (Squad Sync) |
| 2026-06-04 | Interim apply form for OTG-only agencies deferred to R1 | OTEP-131, 319 | Grooming (Xian Zhang BO) |
| 2026-06-08 | OTG ingestion error handling: hard skip all rows with missing/unresolvable data (rejected Michelle's tiered proposal) | OTEP-192, 348, 403 | Michelle / Pow Hwee |
| 2026-06-10 | C@G detail page: responsibilities/pre-requisites not shown inline — message directs to C@G instead | OTEP-87, 89 | Michelle / Thomas |
| 2026-06-15/16 | PSFG removed from MVP entirely; 5-category model superseded by 4-category | OTEP-86, 289, 427 | Michelle / Xian Zhang |
| 2026-06-16 | Personalised listing (profile/competency re-ranking) deferred to R1 | OTEP-408, 409, 336 | Michelle |
| 2026-06-17 | Internal Jobs and Secondments excluded from MVP entirely — 102 of 669 open OTG opportunities (15%) removed | OTEP-85, 86, 127, 192 | Adrian / Xian Zhang / Michelle |
| 2026-06-18 | STIP + Gig merged to one display label — cascading AC updates ordered | OTEP-86, 87, 319, 386 | Michelle |
| 2026-07-27 | Bookmarking (197/425), listing polish (281/282/404), advanced/suggested search (614/615) confirmed out of MVP | those tickets | Michelle |
| 2026-07-31 | WOG AD auth test page scoped down 18 → 7 test cases (test scope, adjacent to ticket AC) | UAT-AUTH suite | Michelle |

---

## Group D — Drift Surfaced by Live UAT (Board 20498, CC-UAT)

Groups A–C are all drawn from planning documents — grooming briefs, decision logs, sprint reviews. This group is different in kind: it's drift that only became visible once real UAT accounts hit real production-like data on the CC-UAT board (Jira board ID 20498, project OTEP), between 2026-08-08 and 2026-08-12. None of these four appear anywhere in the planning-doc trail — they are new findings, not historical record.

### OTEP-405 — description-match search (resolved, see B4 above)

Already covered above. Included here as a cross-reference since it's the clearest example of a years-old planning-doc "unresolved" item getting closed by live testing rather than by grooming.

### OTEP-972 / OTEP-973 — "Closing soon" badge fails on a class of C@G opportunities (new AC/data-contract gap)

| Ticket | Finding | Root Cause | Status |
|---|---|---|---|
| OTEP-972 (UAT-OPP-018) | "Closing soon" badge does not appear for C@G opportunities closing in 3–4 days, even though the AC's own test data (closing 14 Aug) passes. | Pow Hwee (2026-08-08, investigated with direct DB/source access): the C@G feed sends **absolute dates** for closings that are far out ("Closing on 14 Aug 2026") but switches to **relative text** ("Closing in 6 day(s)") once the closing date is near. The importer parses the absolute form successfully but cannot parse the relative form — it logs a warning and stores `closing_date` as NULL. Badge logic requires a non-null date 0–7 days out, so opportunities in exactly this window silently lose their badge. | 🔴 Failed/Blocked. Confirmed by Alan Lim 2026-08-11. **Impact: 479 of 1,355 C@G opportunities in UAT (35%) have no closing date.** Pow Hwee's suggested fix: parse the relative forms ("Closing in N day(s)", "Closing today"), and ensure re-ingest doesn't overwrite a previously-stored absolute date with NULL when the feed later switches to relative form for the same opportunity. |
| OTEP-973 (UAT-OPP-019) | Related AC question raised mid-investigation: for **evergreen** opportunities (no closing date at all, only a start date), does the "closing soon" logic need separate handling? | Michelle flagged (2026-08-11) that the badge's underlying logic may need to distinguish "genuinely evergreen" from "closing date lost to a parsing failure" — currently indistinguishable by data shape alone (both show NULL `closing_date`). | 🔴 Failed/Blocked, open question, not yet resolved as of last comment (Alan Lim, 2026-08-11, "Ok" — acknowledged, no resolution logged). |

**This is a new AC gap, not previously documented anywhere in Groups A–C.** OTEP-128's "closing soon" AC (and OTEP-85a's original, later absorbed into OTEP-85 — see Group B) assumed the source feed always provides a parseable date. It didn't account for the feed's format changing based on proximity to the deadline, and it didn't distinguish "no closing date because evergreen" from "no closing date because of a parsing failure." Both now collapse to the same NULL state in the database, which the AC never anticipated.

### OTEP-957 / OTEP-971 — closed-opportunity exclusion has an untested same-day boundary

| Ticket | Finding | Status |
|---|---|---|
| OTEP-957 (UAT-OPP-003) | "Closed opportunities excluded from listing" — passed for one tester (Charles, "as intended"), but **failed for a second tester (Serene) specifically on opportunities closing today.** | 🔴 Failed/Blocked, mixed result. |
| OTEP-971 (UAT-OPP-017) | Deep-link to a closed opportunity should show a clear closed-state message — **untestable as written**, because the test data's closing dates hadn't actually passed yet at test time. Both Charles and Alan Lim reported "unable to test, links not expired yet." | 🔴 Failed/Blocked — blocked on test-data timing, not a confirmed defect. |

**New AC ambiguity:** OTEP-85's "closed opportunities excluded from listing" AC (Group A/B history has no prior mention of this) never specified whether the boundary is `closing_date < today` or `closing_date <= today` — i.e., whether an opportunity closing *today* should still be visible. One tester's pass and another's fail on the same AC suggests the built behavior may be inconsistent, or that the two testers used different opportunities relative to the boundary. Worth a explicit AC clarification before this is retested, since "as intended" and "failed" can't both be correct for the same rule.

### Cross-reference: OTEP-1019/1020/1021/1024/1025/1026/1027/1029 (UAT-SEARCH-001 through 011) — all passed, confirming Group A's B2 clarifications as-built

Worth noting as a positive confirmation, not a drift: the search-scope and relevance-ordering behavior informally agreed in B2 (title/agency only, exact-match relevance, submit-triggered) was tested end-to-end across 8 separate UAT-SEARCH cases and passed on all of them (Charles: "working as intended"; Guo XZ: "🎉 Looks good!"). The AC *text* still needs cleanup (per B4's note above), but the *built* behavior matches what was informally agreed, not what's still contradictorily written in the ticket.

---

## Summary — What to Flag in a Retro

**Clearly confirmed and closed:**
OTEP-87 (A1–A4), OTEP-130 (C1–C4 — cleanest end-to-end drift narrative), OTEP-268 (J1–J3), OTEP-86 (E1–E6), OTEP-71 (F2), OTEP-110 (G4), OTEP-594 AC rewrite (H2), OTEP-88 AC rewrite (I1–I2, I4), OTEP-319 (K2–K3), OTEP-129 split, OTEP-127 reduction, OTEP-192 rewrite, OTEP-276 drop, **OTEP-405 (B4 — closed 2026-08-12 via live UAT, works-as-designed, description search deferred to a future enhancement).**

**⚠️ Unresolved or still in flux:**

1. **OTEP-405 documentation** — the *product* question is resolved (B4), but the AC text itself still needs cleanup: the description-match "Out of Scope" clause was never reconciled with the still-active relevance-ordering AC, and "relevance" was never migrated out of a comment into the AC field. Low-priority now that the ambiguity it caused has been tested and closed.
2. **OTEP-128 (D4)** — AC amended 2026-07-02 while already in QA; open-items #53 still marked 🟡 awaiting QA verification.
3. **OTEP-128 vs OTEP-131** — contradictory SJR apply-button ACs still both live.
4. **OTEP-594** — AC rewrite confirmed complete, but scoping-gaps #15 still Open because the system-error screen was never built.
5. **OTEP-130** — close-as-duplicate-vs-keep Jira call never made; North Star visibility follow-up never closed.
6. **OTEP-88** — AC2 (badge spec) has no recorded resolution.
7. **OTEP-91** — AC contradiction resolved by QA rather than grooming; ticket AC still needs updating to match reality (RTM open item 3).
8. **OTEP-668** — descope decision confirmed 2026-08-07; new ticket creation still pending.
9. **OTEP-679, OTEP-404, OTEP-768** — AC absent or one-line; flagged at grooming, no confirmed rewrite.
10. **OTEP-331** — no description in Jira at all despite QA status.
11. **A5 / K4** (STIP+Gig merged-name AC edits on OTEP-87 and OTEP-319) — instruction issued 2026-06-18, no confirmation it was pushed.
12. **OTEP-972/973 (new, 2026-08-08–11)** — "Closing soon" badge AC never anticipated the C@G feed switching from absolute to relative date format near the deadline; 35% of C@G opportunities in UAT lost their closing date as a result. Root cause identified, fix proposed, not yet built. Evergreen-vs-parsing-failure distinction (OTEP-973) also unresolved.
13. **OTEP-957/971 (new, 2026-08-11)** — closed-opportunity exclusion AC never specified the same-day-closing boundary; one tester passed, one failed, on what should be the same rule. OTEP-971 untestable until test data actually expires.

**Pattern worth naming:** three separate same-day-or-few-day reversals — OTEP-110 closed then reopened same day (07-08); OTEP-86 AC blocked then declared unnecessary within 4 days (06-18 → 06-22); OTEP-268 empty state removed then re-added within 5 days (05-14 → 05-19) — plus one programme-level reversal (competency matching cut from MVP then restored, both within the same 2026-07-27 document). A fourth pattern, distinct from the first three: **planning-doc-only audits (Groups A–C) can mark an item "unresolved" for months and be right about the paperwork while being blind to the fact that live testing will resolve it in a day** (OTEP-405) — and conversely, planning docs can show zero flags on an AC (OTEP-85's closed-opportunity exclusion, OTEP-128/85a's closing-soon badge) that live UAT immediately breaks. Worth treating Groups A–C and Group D as complementary, not redundant, in future retros: the former shows where the team's own process broke down, the latter shows where the process never even flagged the risk.

---

*Generated: 2026-08-12, updated 2026-08-12 (added Group D — live UAT findings from board 20498/CC-UAT; OTEP-405 status updated from unresolved to closed)*
*Sources: `PM-skills-ALL-1/06-skills-and-decisions/decisions-log.md`, `00-hub/open-items.md`, `03-stories/deferred-acs.md`, `03-stories/scoping-gaps-tracker.md`, `03-stories/jira-sync/` (Sprint 1–8 snapshots), archived meeting notes/grooming briefs across weeks W22–W33 in PM-OS/outputs/archive/, and live Jira board 20498 (CC-UAT) via direct API pull, 2026-08-12*
