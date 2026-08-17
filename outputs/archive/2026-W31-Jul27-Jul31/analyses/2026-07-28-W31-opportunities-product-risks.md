---
date: 2026-07-28
week: 2026-W31
topic: Product risks across the Opportunities pillar (Epic 4, OTEP-69)
status: draft — for review
---

# Opportunities — Product Risk Register

**Scope:** Every risk visible across the Opportunities feature backlog, PRD-vs-Jira reconciliation, UAT value-cost analysis, and hub trackers, as of 2026-07-28. Organized into Resource, Technical, Market, and Strategic buckets.

**Severity legend:** 🔴 Could block MVP/UAT if unresolved · 🟡 Degrades quality or trust, not a hard blocker · ⚪ Watch, not yet biting

**Note on balance:** Almost everything sourced from the Opportunities-specific analyses is Technical or Resource risk — that's what feature backlogs and QA trackers surface by nature. Market risk is genuinely thin in this material; Strategic risk mostly comes from the broader MVP-timeline context (VAPT, Nov slip), not the Opportunities pillar itself. Flagged rather than force-fitted.

---

## Resource Risks

*People, capacity, and tooling constraints — not "is it built," but "do we have who/what we need to build, test, or fix it."*

| Risk | Severity | Why it matters | Status |
|---|---|---|---|
| **Ringfencing test accounts missing** — ~24 QA cases written for OTEP-390, zero executed, blocked on 3 test accounts | 🔴 | Pure resource blocker: the work is written, only provisioning is missing. Highest-value, lowest-cost unblock in the whole pillar. | Open — VCR rank #1 |
| **No screen-reader tester available for accessibility cases** — 10 net-new cases needed (DSS obligation), team has no one who can execute this testing | 🟡 | This is an organizational/skills gap, not a technical one — the cases can be written, but nobody on the team can run them. | Open, organizational blocker |
| **Engineers split across too many scopes** (profiles, competencies, onboarding, auth, opportunities) | 🟡 | If Léo/Thomas capacity gets pulled toward auth or competency work, Opportunities-specific fixes could stall without a visible trigger — flagged at planning, not yet confirmed biting. | Watch |
| **CSC connectivity (OTEP-679) had no owner or grooming session** | 🟡 | Fanxu now confirmed supporting Adrian Lo on this as of OTEP Team 2 standup, 5 Aug — resourcing gap closed. Still needs a grooming slot to get scoped, and with UAT timing itself now in question (possible slip to 31 Aug per CSC standup, 5 Aug), worth confirming the grooming session actually gets booked rather than assuming it follows automatically. | Owner assigned — grooming slot still needed |
| **No agreed performance thresholds from engineering** — performance testing can't start until this exists | ⚪ | Not a capacity shortfall exactly, but a missing input that only engineering can supply — blocks the non-functional test area from starting at all. | Not started |
| **C@G ingestion testing has no controllable source fixture or pipeline access** | 🟡 | BOs/QA can't execute these cases without tooling that doesn't exist yet — a build/access gap, not a people gap, but it sits in the same "can't start work" category. | Open |

---

## Technical Risks

*Build quality, architecture gaps, and unverified system behavior.*

| Risk | Severity | Why it matters | Status |
|---|---|---|---|
| **Ringfencing rule precedence undefined** — no spec for include/exclude rule collisions | 🔴 | Genuine architecture/spec gap: the actual runtime behavior in a conflict case is unknown, not just untested. | Open — needs a squad decision |
| **IDOR / API-level security on ringfenced opportunities untested** (NEW-52) | 🔴 | If the UI hides an opportunity but the API doesn't enforce the same rule, ringfencing is cosmetic only — a real architectural exposure. | Open |
| **Competency-to-opportunity matching blocked on agency-code resolution (REQ-X2)** | 🔴 | Just reclassified from future-scope to confirmed MVP scope (OTEP-336/570) — the blocking technical dependency is unresolved and now blocks real delivery. | Open, newly elevated |
| **C@G ingestion lifecycle untested** — silent/systemic failure mode, every C@G card wrong at once if it breaks | 🔴 | High blast radius technical risk with no current way to verify it's working correctly. | Open |
| **OTG data quality on UAT read replica "very unclean"** (hub open item #33) | 🔴 | Directly threatens UAT execution for Opportunities, the first module in the 11 Aug UAT wave. | Open — owned by Pow Hwee/Daryll |
| **Known display bugs on core listing surface** — missing type tags, null `posted_date` shows "1 Jan 1970," closing-date sort inverted, broken Ministry-logo rendering (OTEP-663) | 🟡 | Four separate defects on the first screen every officer sees — individually cosmetic, but worth tracking as one pattern. | Open, filed |
| **OTEP-437 (job-category filter) in QA status with zero test cases run** | 🔴 | A ticket can't legitimately exit QA unverified — source page independently flags this as highest priority. | Open — VCR rank #3 |
| **Deep-link auth gate for ineligible officers unverified** (OTEP-133) | 🟡 | Same ringfencing surface, untested for the email deep-link entry path specifically. | Open |
| **Login/session test coverage thin** — OTEP-71 still Backlog, only 2 partial cases exist; compounds separately-flagged UAT-AUTH-018 gap (mid-session revocation) on the same auth surface | 🟡 | Two different gaps stacking on the same login system. | Open, write-now-run-later |
| **Closing-date boundary undefined** — no spec for whether "12 May" survives through 23:59 SGT | 🟡 | Affects listing, closing-soon badge, and open/closed visibility — real inconsistent state possible at the exact closing moment. | Open |
| **Ingestion hardening incomplete** — scheduler/observability (OTEP-348) and import hardening (OTEP-403) still Backlog | 🟡 | Compounds the OTG data-quality risk above — no observability means problems may not surface until UAT does it for you. | Open, Backlog |

---

## Market Risks

*External-facing: officer/agency adoption, competing options, or user trust.*

**Thin from the Opportunities-pillar material** — the source analyses (feature backlog, PRD reconciliation, UAT prioritization) are internal build/test trackers and don't surface end-user or market signal directly. The closest adjacent items:

| Risk | Severity | Why it matters | Status |
|---|---|---|---|
| **"Already applied" state has no MVP AC** — ambiguous whether in scope, test case currently fails (OTEP-667) | 🟡 | This is the one item in the set with direct user-trust exposure: an officer revisiting an opportunity they already applied to could see confusing or wrong state — a real first-impression risk if unresolved before launch. | Open decision — needs explicit MVP-scope call |
| **Pilot-agency rollout depends on ringfencing actually working** | 🔴 | Indirectly a market risk: if ringfencing fails, the pilot-agency trust relationship (and the whole staged-rollout premise) is what's actually at stake, not just a QA metric. Same underlying issue as the Resource/Technical ringfencing risks above, viewed from the adoption angle. | Open |

*Recommend: if you want a fuller Market Risks section, that likely needs input from outside this session's source material — e.g. pilot-agency feedback, adoption targets, or competing internal tools officers might default to instead of OTEP.*

---

## Strategic Risks

*Timeline, scope, and narrative risk at the program level — mostly not Opportunities-specific, but Opportunities is exposed to all of it as the first UAT module.*

| Risk | Severity | Why it matters | Status |
|---|---|---|---|
| **MVP launch confirmed slipping to end-November**, VAPT-driven (mid-Sept earliest scan slot, 8-week cycle) | 🔴 | Now a hard-evidence confirmation (23-24 Jul Slack thread with Adrian), not directional sentiment. Opportunities is the first UAT wave (11 Aug) sitting inside a schedule that's already slipped once. | Confirmed — needs the Oct/Nov one-pager to formalize the narrative |
| **PRD not published anywhere canonical** — lives only in Jira ACs, not Confluence/GitLab/shared drive | 🟡 | Strategic/governance risk: without one canonical spec, contradictions like the SJR apply-button conflict happen invisibly and nobody notices until QA trips over them. | Open |
| **RTM (Requirements Traceability Matrix) contains a false-positive status** — REQ-20 claims "Done," actual stories are Backlog, for a feature that's now confirmed MVP scope | 🔴 | If leadership or planning trusts the RTM as source of truth, this creates a false readiness signal at the program level, not just a tracking error. | Open — flagged, not yet corrected |
| **Compass-side whitelisting has no owner** (resolved this week as a shared POCDEX+Compass responsibility, but Compass-side build has no owner named) | 🟡 | Not Opportunities-specific, but ringfencing (an Opportunities-critical feature) depends on whitelisting working correctly at both layers. | Open — new item, no owner |
| **PRD-Jira drift as a recurring pattern** — Section 8 only listed 18 of 52 actual Epic 4 tickets before yesterday's reconciliation | 🟡 | Mostly fixed now, but the underlying cause (no PRD refresh cadence) will recur unless addressed structurally. | Mostly resolved 2026-07-27, watch for recurrence |

---

## Top 5 by urgency (given 11 Aug UAT start for Profile + Opportunities)

1. **Ringfencing test accounts** (Resource) — cheapest unblock, highest banked value, real access-control exposure if it ships unverified.
2. **REQ-X2 competency-matching dependency** (Technical) — newly reclassified as MVP-blocking, unresolved.
3. **OTG data quality on the UAT read replica** (Technical) — threatens the UAT wave starting in under 2 weeks.
4. **OTEP-437 QA exit with zero cases** (Technical) — false readiness signal.
5. **MVP timeline confirmed slipping to November** (Strategic) — needs the one-pager to lock one consistent narrative before it surfaces externally in inconsistent form.

---

*Generated: 2026-07-28 (rebucketed from the original risk list generated same day)*
*Sources: [Opportunities Feature Backlog](2026-07-27-W31-opportunities-feature-backlog.md), [PRD-Jira Reconciliation](2026-07-27-W31-opportunities-prd-jira-reconciliation.md), [UAT Value-Cost Ratio Prioritization](2026-07-27-W31-opportunities-uat-value-cost-ratio.md), `00-hub/risks.md`, `00-hub/open-items.md` (#33, #39), Jul 23-24 Slack thread (MVP timeline, whitelisting).*
*Next: Confirm severity calls with Adrian/Rama before treating this as committed — several 🔴 calls (REQ-X2, CSC connectivity, MVP slip) are judgment calls, not a formally agreed risk rating. Market Risks section is the weakest of the four — worth a dedicated pass if you want real coverage there (pilot-agency feedback, adoption risk, alternative-tool competition).*
