---
date: 2026-06-16
type: Grooming Brief
ceremony: Squad Internal Groom (S4 W1 Tuesday) — stories targeting Sprint 5
owner: Michelle Yip
---

# Grooming Brief — 2026-06-16

**Ceremony:** Squad Internal Groom

**Facilitator:** Rama

**Content lead:** Michelle

**Target sprint for these stories:** Sprint 5 (29 Jun–10 Jul)

**Sprint 5 goal (draft):** Ringfencing (eligibility filter + detail page states) + session persistence + listing loading state. Auth stays on Keycloak — WOG AD not ready. C@G detail (OTEP-87) is S4 work.

> ⚠️ **Auth status update (2026-06-16):** WOG AD credentials are not ready. Team continues on Keycloak for MVP. Auth epic stories (OTEP-71, OTEP-110, WOG-06, WOG-17) are parked. OTEP-304 (session persistence) is in S5 Jira but its ACs have an unresolved idle timeout value — see below.

> ⚠️ **OTEP-133 closed:** OTEP-133 (EDM deep-link) was absorbed into OTEP-390 and should be closed in Jira. It is no longer a separate grooming item.

> ⚠️ **OTEP-89 clarification:** In Jira, OTEP-89 is the deep-link CTA story (status: QA in S3, assigned Thomas). The cag-handoff.md story doc has it as "summary view" — these are misaligned. OTEP-87 (View C@G Opportunity Detail) is the actual detail page story and is in S4. Confirm with Pow Hwee which ticket covers what.

---

## Sprint Context

Sprint 4 is active (15–28 Jun). S5 grooming must happen now — stories need to be estimated and DoR-ready before Sprint Planning (Thu 26 Jun).

**Actual S5 stories in Jira (as of 2026-06-16):**

| Ticket | Title | Status | Points |
|--------|-------|--------|--------|
| OTEP-390 | Ringfenced opportunity detail page states | Backlog | — |
| OTEP-408 | [BE] Listing API — apply ringfencing eligibility filter | Backlog | 8 |
| OTEP-409 | [FE] Listing — reflect ringfenced and pinned results | Backlog | 3 |
| OTEP-304 | Session persistence (logged-in officer stays authenticated) | Backlog | — |
| OTEP-281 | [FE] Listing loading state (spinner) | Backlog | — |

**Not in S5 Jira (grooming brief previously assumed these — now corrected):**
- OTEP-88 — C@G flow clarity: In Progress S4, closes in S4
- OTEP-89 — Deep-link CTA: QA in S3 (Thomas), likely Done
- OTEP-133 — EDM deep-link: absorbed into OTEP-390, close in Jira
- US-10 — Application confirmation: not in Jira yet, no ACs, not ready

---

## Grooming Readiness Scores

| Story ID | Title | Story Format | AC Written | AC Language | Design Status | Dependencies | Open Items | Ready? |
|----------|-------|:---:|:---:|:---:|---|---|---|:---:|
| OTEP-390 | Ringfenced detail page states | ✅ | ✅ | ✅ | ❌ Amber spec needed (AC2 eligible indicator) | OTEP-127 (BE eligibility), WOG AD #26, POCDEX #31 | Eligible indicator visual treatment; alternative opp ranking logic; EDM source param | ⚠️ |
| OTEP-408 | [BE] Eligibility filter on listing API | ✅ | ✅ | ✅ | n/a | WOG AD #26, POCDEX #31, OTEP-127 spike output | All 3 gates must clear before S5 planning | ⚠️ |
| OTEP-409 | [FE] Listing ringfenced/pinned results | ✅ | ✅ | ✅ | n/a | OTEP-408 must complete first | None beyond 408 | ⚠️ |
| OTEP-304 | Session persistence | ✅ | ⚠️ Idle timeout TBD in AC | ✅ | n/a | Keycloak (no WOG AD dependency) | Idle timeout value unresolved — "30 minutes — TBD" in AC | ⚠️ |
| OTEP-281 | Listing loading state (spinner) | ✅ | ✅ | ✅ | n/a | OTEP-268 must close first | Confirm OTEP-268 Done in S4 | ⚠️ |

**Scoring legend:** ✅ confirmed · ⚠️ incomplete / open questions · ❌ missing

---

## AC Review — Flags and Fixes Needed

### OTEP-390 — Ringfenced opportunity detail page states

ACs are well-written and outcome-oriented. Three items need resolution before grooming:

1. **AC2 — Eligible indicator visual treatment:** "Design treatment to be confirmed by Amber." This is intentionally loose, but Pow Hwee will want a proposal in the session. Confirm with Amber before — recommendation: subtle badge ("Available to you"), no full banner.

2. **AC5 — Alternative opportunity ranking:** "Pure eligibility filter, or also ranked by relevance?" Recommend eligibility-only for MVP — keep it simple, state it clearly in the session so it's not re-opened.

3. **EDM analytics open question:** Does the EDM deep-link carry a `source=edm` param? Confirm with the comms/EDM owner before S5 planning if EDM tracking is in scope.

**AC language check:** Clean. All ACs describe observable officer behaviour. No mechanism-language flagged.

---

### OTEP-408 — [BE] Listing API eligibility filter

ACs are clean and well-specified. One flag:

1. **Gate dependency:** All three must clear before S5 planning (26 Jun): WOG AD domain submission (#26 Fabian), POCDEX read replica (#31 Daryll), OTEP-127 spike output accepted. **If WOG AD doesn't move by 26 Jun, this story and OTEP-409 cannot enter S5.** Flag this to Pow Hwee in the session and have a contingency ready (OTEP-281 + OTEP-304 + OTEP-427 as alternative S5 fill).

**AC language check:** Clean — ACs describe system behaviour at the API boundary, appropriate for a BE story.

---

### OTEP-409 — [FE] Listing ringfenced/pinned results

ACs are clean and minimal — FE just renders what BE returns, no logic. No changes needed.

**One confirm needed:** AC4 says no "Available to you" badge on listing cards — that's on detail page only (OTEP-390). Confirm this is the agreed treatment with Amber before the session so it's not re-opened.

---

### OTEP-304 — Session persistence

One AC is incomplete:

1. **AC fix needed:** "If I've been idle for more than [30 minutes — TBD]..." — the timeout value is unresolved. This must be locked before estimation. Recommendation: 30 minutes is standard for Singapore government applications. Confirm with Pow Hwee or Fabian whether there's a WOG or IM8 standard that governs this.

**AC language check:** Clean. Outcome-oriented. The TBD is the only gap.

---

### OTEP-281 — Listing loading state (spinner)

ACs are clean and specific (spinner vs skeleton clearly called out, sub-300ms threshold defined). One dependency:

1. **Confirm OTEP-268 Done in S4** before estimating — AC states "OTEP-268 must be closed first."

**AC language check:** Clean.

---

## Step 3 — Risk Areas (What Pow Hwee Will Probe)

> ⚠️ **OTEP-390/408/409 — WOG AD gate.** Three S5 stories gate on WOG AD (#26) and POCDEX (#31). WOG AD approval clock running since 10 Jun (2–4 weeks). If approval doesn't land before 26 Jun, OTEP-390/408/409 cannot be planned into S5. Have contingency ready: OTEP-281 + OTEP-304 + OTEP-427 (ingestion tightening) fill the sprint instead. State this clearly — don't let Pow Hwee discover it mid-session.

> ⚠️ **OTEP-390 — Eligible indicator spec.** AC2 is intentionally loose on visual design. Pow Hwee will push for a locked spec before estimating. Brief Amber before the session — get at least a wireframe or written description of the "Available to you" treatment.

> ⚠️ **OTEP-304 — Idle timeout TBD.** Pow Hwee will flag the TBD value. You need to walk in with a number and a source (IM8 standard or product decision). Recommendation: 30 minutes, stated as a product decision if no IM8 standard applies.

> ⚠️ **OTEP-133 still open in Jira.** If it shows up on the board, Pow Hwee will ask about it. Answer: absorbed into OTEP-390 AC3–6. Close the ticket before the session.

> ⚠️ **OTEP-88 S4 status.** Still In Progress. Confirm it closes Done in S4 before the session — if it carries, it needs to enter S5 scope and affects capacity estimates.

---

## Step 4 — Recommended Grooming Order

1. **OTEP-304** — Session persistence. Fast win — one TBD to resolve (idle timeout), otherwise clean. No WOG AD dependency.
2. **OTEP-281** — Listing loading state. Fast win — ACs are clean, just confirm OTEP-268 closes in S4.
3. **OTEP-408** — BE eligibility filter. Anchor the WOG AD gate conversation here. If gate is red, park OTEP-408/409/390 as a block.
4. **OTEP-409** — FE listing ringfencing. Depends on 408; keep together.
5. **OTEP-390** — Ringfenced detail page. Most complex — lock eligible indicator spec and alternative opp ranking before estimating.

---

## Step 5 — Grooming Briefing

### Sprint 5 Goal (Draft — revised)

By end of Sprint 5: Officers have a persistent session (OTEP-304), see a loading state on the listing (OTEP-281), and — if WOG AD approval lands before 26 Jun — see a ringfenced listing with eligible opportunities pinned and an eligibility-aware detail page (OTEP-408/409/390). If WOG AD doesn't land, S5 pivots to ingestion tightening (OTEP-427) and CSC SSO documents.

---

### Open Items — Assign an Owner in the Session

| Open Item | Suggested Owner | Needed By |
|-----------|----------------|-----------|
| Idle timeout value for OTEP-304 — lock to 30 min or confirm IM8 standard | Michelle / Fabian | Before session |
| OTEP-390 eligible indicator visual treatment — "Available to you" badge spec | Amber | Before session |
| OTEP-390 alternative opportunity ranking — eligibility-only vs relevance-ranked | Michelle (call it in session) | During session |
| WOG AD domain submission status (#26) — is it submitted? | Fabian | Before S5 planning (26 Jun) |
| POCDEX read replica status (#31) — confirmed and scoped? | Daryll | Before S5 planning (26 Jun) |
| OTEP-133 — close as absorbed into OTEP-390 | Michelle | Before session |
| OTEP-268 — confirm Done in S4 (unblocks OTEP-281) | Pow Hwee / Thomas | Standup this week |
| OTEP-88 S4 close status — Done or carry into S5? | Pow Hwee / Thomas | Standup this week |
| Ringfencing BO sign-off (open item #43) — 7 policy questions before OTEP-127/408/409 can be built | Michelle → BOs | Before S5 backlog grooming (Thu 26 Jun) |
| Amber flow walkthrough (open item #45) — full opportunity flow before S5 design starts | Amber to confirm date | End of this week |
| 403 error page — confirm treatment with LifeSG (open item #44) | Michelle | Before S5 design lock |

---

### R1 Deflection List

Ready responses for out-of-scope topics that will come up:

- **"Can officers save/bookmark opportunities?"** → "Logging as R1. MVP is browse and apply only."
- **"What about notifications when application status changes?"** → "R1 — notifications are out of MVP scope entirely."
- **"Can we pre-fill the FormSG from POCDEX data?"** → "Pre-fill is R1 (decided 2026-05-26). MVP keeps FormSG forms unchanged."
- **"Competency section on C@G or OTG detail page?"** → "Cut from S4, no confirmed sprint yet. Blocked on Imelda's squad confirming schema. R1 candidate until unblocked."
- **"Multiple WOG AD roles / group memberships?"** → "Two roles only for MVP: officer and admin. Granular RBAC is R1."
- **"What if officer is on secondment — which agency do they see?"** → "Out of MVP scope. Cross-posting and secondment agency resolution is R1."
- **"Should we warn officers if their session will expire?"** → "WOG-16 (pre-expiry session warning) is deferred. Idle timeout (OTEP-304) is the fallback. R1."
- **"Category / job-family filters?"** → "Type filter (5-category model) is in MVP. Job-family filter is also in MVP — it's in OTEP-427 scope. Agency and grade filters are R1."
- **"Can officers see agency/grade eligibility criteria on the detail page?"** → "Not in MVP. Detail page shows 'not available to you' only — no breakdown of why. R1."

---

### Pow Hwee Will Probably Ask...

- **"What's the WOG AD situation — are OTEP-390/408/409 actually deliverable in S5?"** — Answer: approval clock running since 10 Jun, 2–4 weeks. If it doesn't land before 26 Jun, these three stories can't be planned. Contingency is OTEP-427 + CSC SSO fill. State this upfront so it's not a surprise.
- **"What's the idle timeout for OTEP-304?"** — Lock the number before the session. 30 minutes unless IM8 says otherwise.
- **"What does 'Available to you' look like on the detail page?"** — Have Amber's proposal ready, even if it's a sketch. Pow Hwee won't estimate without a visual direction.
- **"Does OTEP-409 have a hard dependency on OTEP-408 being Done first?"** — Yes. They must be sequenced; FE cannot be built until the BE filter contract is confirmed. State this clearly so they're not treated as parallel.
- **"Why is OTEP-133 still open?"** — It was absorbed into OTEP-390. Close it before the session so it doesn't appear on the board.
- **"Where is the C@G detail page in all this?"** — OTEP-87 is S4 work (assigned Thomas, with subtasks OTEP-377/378/379). It's not a S5 grooming item.

---

## C@G Payload Reference (confirmed 2026-06-16)

Source: [careersgovsg-jobs-data job-listings schema](https://github.com/opengovsg/careersgovsg-jobs-data/blob/main/.github/instructions/job-listings.instructions.md)

**Fields available for OTEP-87 detail page (S4):**

| Field | Value | Notes |
|-------|-------|-------|
| `jobTitle` | ✅ Always present | Safe to display |
| `agency` | ✅ Always present | Safe to display |
| `employmentType` | ✅ Always present | e.g. "Permanent", "Contract" |
| `experienceRequired` | ✅ Always present | e.g. "03-09 year(s)", "Entry level" |
| `field` / `functionalArea` | ✅ Always present | Job function equivalent |
| `closingDate` | ⚠️ Nullable | Null when platform doesn't publish a deadline — show `closingDateText` as fallback |
| `closingDateText` | ✅ Always present | Human-readable fallback |
| `jobDescription` | ✅ Always present | ⚠️ Greenhouse jobs contain raw HTML — must sanitise before rendering (XSS risk) |
| `jobResponsibilities` | ✅ hrp + workable | Empty for greenhouse |
| `jobRequirements` | ✅ hrp + workable | Empty for greenhouse |
| `workArrangement` | ⚠️ Inconsistent | Don't surface in MVP |
| `location` | ✅ Always present | |

**No competency field in the payload** — confirms OTEP-87 competency section stays deferred.

**Deep-link URL format (for OTEP-89 CTA on OTEP-87):**
- hrp: `https://jobs.careers.gov.sg/jobs/{platform}/{jobId}/{postingNo}`
- greenhouse: `https://jobs.careers.gov.sg/jobs/{platform}/{jobId}?gh_jid={jobId}`
- workable: `https://apply.workable.com/j/{postingNo}`

---

> **Self-check:** ACs reviewed for mechanism-language — OTEP-408 uses system/API language appropriately for a BE story. All FE/PM-facing ACs are outcome-oriented. OTEP-304 has one TBD (idle timeout) that must be resolved before estimation. OTEP-390/408/409 gate on WOG AD — have a contingency sprint plan ready if the gate is red on 26 Jun.

---

*Sources: 03-stories/jira-sync/OTEP-Pathfinder-Sprint-5/, Sprint-34618-OTEP-Pathfinder-Sprint-4/, Backlog/ · 03-stories/otep-stories/cag-handoff.md · careersgovsg-jobs-data schema · 2026-06-16-W25-mvp-delivery-stocktake.md*

*Generated: 2026-06-16 (revised to reflect actual S5 Jira contents)*
