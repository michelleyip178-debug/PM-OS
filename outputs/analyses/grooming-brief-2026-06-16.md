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

**Sprint 5 goal (draft):** C@G detail completion + application confirmation + CSC SSO process started. Auth stays on Keycloak — WOG AD not ready.

> ⚠️ **Auth status update (2026-06-16):** WOG AD credentials are not ready. The team continues on Keycloak for MVP. Auth epic stories (OTEP-71, OTEP-110, OTEP-304, WOG-06, WOG-17) are removed from S5 grooming scope. OTEP-305 (login/logout UI) is already In QA in S4 against Keycloak — this stays. The WOG AD swap-in is now a post-MVP or late-sprint concern depending on when approval lands.

---

## Sprint Context

Sprint 4 is active (15–28 Jun). S5 grooming prep must happen now so stories are estimated and DoR-ready before the S4 Sprint Planning ceremony (Thu 26 Jun).

One story group is in scope for S5 grooming:
1. ~~**Auth epic**~~ — **REMOVED.** WOG AD not ready; auth stays on Keycloak. OTEP-71, OTEP-110, OTEP-304, WOG-06, WOG-17 parked until WOG AD approval lands.
2. **C@G handoff** — OTEP-89, OTEP-133, OTEP-88 (gated on C@G ingestion OTEP-482 completing in S4)
3. **Application confirmation** — US-10 (depends on OTEP-130 FormSG webhook, targeted S4)
4. **CSC SSO process** — external clock; documents need to go to CSC this sprint

---

## Step 2 — Grooming Readiness Scores

> Auth epic (OTEP-71, OTEP-110, OTEP-304, WOG-06, WOG-17) removed from scope — WOG AD not ready, staying on Keycloak.

| Story ID | Title | Story Format | AC Written | AC Language | Design Status | Dependencies | Open Items | Ready? |
|----------|-------|:---:|:---:|:---:|---|---|---|:---:|
| OTEP-89 | View C@G opportunity summary | ✅ | ⚠️ AC needs null-date + HTML sanitise additions | ✅ | ❌ No designs | C@G API data (OTEP-482 S4) | closingDate nullable; greenhouse HTML in jobDescription | ⚠️ |
| OTEP-133 | Redirect to Careers@Gov to apply | ✅ | ⚠️ AC needs 3-platform URL pattern | ✅ | ❌ No designs | OTEP-127 (ringfencing), deep-link URL format | URL format differs by platform (hrp/workable/greenhouse) | ⚠️ |
| OTEP-88 | Understand OTG vs C@G flow difference | ✅ | ✅ | ✅ | In Progress (S4) | OTEP-88 In Progress (S4) | Visual indicator spec for listing cards open | ⚠️ |
| US-10 | Receive application confirmation | ✅ | ❌ ACs not written | ✅ | ❌ No designs | OTEP-130 (FormSG webhook, S4) | ACs need drafting | ❌ |

**Scoring legend:** ✅ confirmed · ⚠️ incomplete / open questions · ❌ missing

---

## C@G Payload Reference (confirmed 2026-06-16)

Source: [careersgovsg-jobs-data job-listings schema](https://github.com/opengovsg/careersgovsg-jobs-data/blob/main/.github/instructions/job-listings.instructions.md)

**Fields available for OTEP-89 detail page:**

| Field | Value | Notes |
|-------|-------|-------|
| `jobTitle` | ✅ Always present | Safe to display |
| `agency` | ✅ Always present | Safe to display |
| `employmentType` | ✅ Always present | e.g. "Permanent", "Contract" |
| `experienceRequired` | ✅ Always present | e.g. "03-09 year(s)", "Entry level" |
| `field` / `functionalArea` | ✅ Always present | Job function equivalent |
| `closingDate` | ⚠️ Nullable | Null when platform doesn't publish a deadline — needs explicit null-handling AC |
| `closingDateText` | ✅ Always present | Human-readable fallback; use this when `closingDate` is null |
| `jobDescription` | ✅ Always present | ⚠️ Greenhouse jobs contain raw HTML — must sanitise before rendering (XSS risk) |
| `jobResponsibilities` | ✅ hrp + workable | Empty for greenhouse; fall back to `jobDescription` |
| `jobRequirements` | ✅ hrp + workable | Empty for greenhouse |
| `workArrangement` | ⚠️ Inconsistent | hrp = "Full-time" only; workable = hybrid/onsite/remote; greenhouse = empty. Don't surface in MVP. |
| `location` | ✅ Always present | |

**No competency field in the payload** — confirms OTEP-87 competency section stays deferred. There is nothing to map.

**Deep-link URL format for OTEP-133** — three patterns by platform:
- hrp: `https://jobs.careers.gov.sg/jobs/{platform}/{jobId}/{postingNo}`
- greenhouse: `https://jobs.careers.gov.sg/jobs/{platform}/{jobId}?gh_jid={jobId}`
- workable: `https://apply.workable.com/j/{postingNo}`

OTEP-133 must construct the correct URL per platform. A broken or missing URL needs the fallback AC ("Search for this role on Careers@Gov").

---

### AC Language Check — Flags

**OTEP-89** — existing ACs are outcome-oriented. Two additions needed before grooming:
1. Add: "If the opportunity has no published closing date, I see 'Closing date not specified' — not a blank or broken field." (handles `closingDate` null)
2. Engineering note (not an AC): all `jobDescription` content from greenhouse must be HTML-sanitised before rendering.

**OTEP-133** — existing ACs are clean. One addition needed:
1. Broken/expired deep-link AC already exists ("Search for this role on Careers@Gov") — confirm it applies to all three URL patterns, not just one.

**OTEP-88** — clean. No changes needed.

**US-10** — ACs not yet written. Draft before session or pull from S5 scope. Key question: what does the officer see when the FormSG webhook hasn't fired yet — optimistic success, loading state, or async "we'll confirm by email"?

---

## Step 3 — Risk Areas (What Pow Hwee Will Probe)

> ✅ **OTEP-89 (C@G detail depth)** — C@G payload confirmed (careersgovsg-jobs-data schema). All fields in the existing OTEP-89 AC are available: title, agency, employment type, experience level, field/function. Two AC additions needed before grooming: (1) null `closingDate` handling, (2) engineering note on HTML sanitisation for greenhouse content. This risk is now closed — Pow Hwee will ask about null closingDate and HTML; have the answer ready.

> ⚠️ **OTEP-133 — "Leaving OTEP" interstitial.** The AC says "OTEP briefly tells me I'm leaving the platform" but doesn't specify how (modal vs toast vs new tab). Pow Hwee will want it locked. Recommendation: new tab, no interstitial for MVP. Confirm with Amber before the session.

> ⚠️ **OTEP-133 — Ringfencing dependency.** OTEP-127 (ringfencing) and OTEP-133 (C@G redirect) both target S5. Confirm whether OTEP-133 has a hard dependency on OTEP-127 being Done, or whether they can ship independently. If ringfencing slips, the redirect should still work — it just won't enforce who can see it.

> ⚠️ **US-10 — ACs missing.** No ACs written yet. Pow Hwee can't estimate a story with no ACs. Either draft them before the session or pull US-10 from S5 scope. Key question to answer first: what does the confirmation screen show when the FormSG webhook hasn't fired yet — loading state, success assumed, or nothing?

> ⚠️ **OTEP-88 — Already In Progress in S4.** Scope risk: if OTEP-88 closes Done in S4, the S5 grooming discussion is moot. If it carries into S5, confirm the remaining scope before estimating again.

---

## Step 4 — Recommended Grooming Order

1. **OTEP-88** — C@G flow clarity. Already In Progress in S4 — confirm remaining scope and whether it needs separate S5 estimation or closes in S4. Fast.
2. **OTEP-89** — C@G opportunity summary. Get Pow Hwee to confirm C@G API payload first. Core S5 deliverable.
3. **OTEP-133** — C@G redirect. Lock the interstitial mechanism (new tab recommended) and confirm ringfencing dependency direction before estimating.
4. **US-10** — Application confirmation. Only bring to the session if ACs are drafted beforehand. Otherwise flag as "needs AC work — not ready this session."

---

## Step 5 — Grooming Briefing

### Sprint 5 Goal (Draft — revised)

By end of Sprint 5: Officers can see and distinguish C@G opportunities in the listing, view a C@G opportunity summary, and be redirected to Careers@Gov to apply — with the CSC SSO documents submitted to start the external clock. Auth stays on Keycloak; WOG AD swap-in happens when approval lands.

---

### Grooming Order (Recommended)

1. OTEP-88 — C@G flow clarity (confirm S4 close vs S5 carry)
2. OTEP-89 — C@G opportunity summary (C@G payload spec needed from Pow Hwee first)
3. OTEP-133 — C@G redirect (lock interstitial mechanism, confirm ringfencing dependency)
4. US-10 — Application confirmation (only if ACs drafted before session)

---

### Open Items — Assign an Owner in the Session

| Open Item | Suggested Owner | Needed By |
|-----------|----------------|-----------|
| ~~C@G API minimum payload spec~~ | ~~Pow Hwee~~ | ✅ Resolved 2026-06-16 — careersgovsg-jobs-data schema confirmed. All OTEP-89 fields available. |
| "Leaving OTEP" interstitial mechanism — new tab vs modal | Michelle + Amber | Before OTEP-133 estimation; recommendation is new tab |
| OTEP-127 / OTEP-133 dependency direction — can redirect ship without ringfencing Done? | Pow Hwee | During session |
| US-10 ACs — draft confirmation screen behaviour (success state, webhook not yet fired, error state) | Michelle | Before session if US-10 is to be groomed |
| OTEP-88 S4 close status — will it close Done in S4 or carry into S5? | Pow Hwee / Thomas | Standup this week |
| Ringfencing BO sign-off (open item #43) — 7 policy questions before OTEP-127 can be built | Michelle → BOs | Before S5 backlog grooming (Thu 26 Jun) |
| Amber flow walkthrough (open item #45) — full opportunity flow before S5 design starts | Amber to confirm date | End of this week |
| 403 error page — confirm treatment with LifeSG (open item #44) | Michelle | Before S5 design lock |
| WOG AD status — when does approval land? Does it affect any S5 stories? | Pow Hwee / Fabian | Watch item — no S5 impact unless approval lands before 28 Jun |

---

### R1 Deflection List

Ready responses for out-of-scope topics that will come up:

- **"Can officers save/bookmark opportunities?"** → "Logging as R1. MVP is browse and apply only."
- **"What about notifications when application status changes?"** → "R1 — notifications are out of MVP scope entirely."
- **"Can we pre-fill the FormSG from POCDEX data?"** → "Pre-fill is R1 (decided 2026-05-26). MVP keeps FormSG forms unchanged."
- **"Competency section on C@G detail page?"** → "Cut from S4, no confirmed sprint yet. Blocked on Imelda's squad confirming schema. R1 candidate until unblocked."
- **"Multiple WOG AD roles / group memberships?"** → "Two roles only for MVP: officer and admin. Granular RBAC is R1."
- **"What if officer is on secondment — which agency do they see?"** → "Out of MVP scope. Cross-posting and secondment agency resolution is R1."
- **"Should we warn officers if their session will expire while they're filling out FormSG?"** → "WOG-16 (pre-expiry session warning) is deferred. Idle timeout is the fallback. R1."
- **"Category / job-family filters?"** → "Type filter (5-category model) is in MVP. Job-family filter is also in MVP — it's in OTEP-427 scope. Agency and grade filters are R1."

---

### Pow Hwee Will Probably Ask...

- **"What fields does the C@G API return, and what happens when closingDate is null?"** — You now have this. All OTEP-89 fields are available. `closingDate` is nullable — answer: show `closingDateText` as fallback, or "Closing date not specified." `workArrangement` is platform-inconsistent — don't surface it in MVP.
- **"Is the 'leaving OTEP' notice a modal or just a new tab?"** — Lock this before the session. A modal adds a story point; a new tab doesn't. Recommend: new tab, no modal for MVP.
- **"Does OTEP-133 need ringfencing done first?"** — Ringfencing controls *who can see* an opportunity; the redirect itself doesn't depend on it. They can ship in parallel. Be ready to confirm this cleanly.
- **"Is OTEP-88 actually a separate S5 story or will it close in S4?"** — Check its status in standup before the grooming session. If it's closing in S4, this slot opens for something else.
- **"What happens on the confirmation screen if the FormSG webhook hasn't fired yet?"** — The key design question for US-10. Optimistic (show success immediately) vs. waiting (spinner/loading) vs. async (show a "we'll confirm by email" message). Have a recommendation before the session.
- **"When is WOG AD actually landing?"** — Pow Hwee will flag it. Answer: approval clock running since 10 Jun, 2-4 weeks. No S5 auth stories until it lands. If it arrives during S5, we can pick up OTEP-71 as a late add — but don't plan for it.

---

> **Self-check:** ACs reviewed for mechanism-language — none flagged in the in-scope stories (OTEP-89, 133, 88). US-10 has no ACs yet — it cannot be groomed as-is. OTEP-89 cannot be estimated until C@G payload spec is confirmed. Auth epic stories (OTEP-71, 110, 304, WOG-06, WOG-17) removed from scope — WOG AD not ready, Keycloak continues.

---

*Sources: 03-stories/otep-stories/auth.md, cag-handoff.md · 00-hub/open-items.md · 00-hub/sprint-status.md · sprint-allocation.md · 2026-06-16-W25-mvp-delivery-stocktake.md*

*Generated: 2026-06-16*
