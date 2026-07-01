# R1 Release — Epic Brief
**CareerCompass | OTEP-Pathfinder**

| | |
|---|---|
| **Release** | R1 |
| **Target** | Jan 2027 |
| **Status** | Confirmed — scope locked post-review; pending Mark sign-off (#40) |
| **Author** | Michelle Yip |
| **Last updated** | 24 Jun 2026 |
| **Reviewed with** | Scope confirmed post-senior review; jam with Adrian scheduled Wed 24 Jun 2026 (pending) |

---

## What R1 is

MVP gets an officer to the *door* of an opportunity — browse, filter, view, click out to apply. R1 brings both ends in-house.

Agencies create opportunities directly in CareerCompass. Officers apply without leaving it. The application is tracked from submission to outcome. CareerCompass stops being a read-only window onto OTG and becomes the system of record.

**R1 = Create it. Post it. Pre-fill it. Submit it. Track it. Save it. Sync it.**

---

## Why R1 now — the OKR case

Three OKR targets only unlock if R1 ships on time:

| OKR | Target | R1's contribution |
|-----|--------|-------------------|
| **North Star** | 10% of onboarded officers complete a development action by Mar 2027 | Without in-Compass apply, officers can't complete an action within the platform. R1 is the only release that can hit this milestone. |
| **OKR 2** | 1,850 officers applied via CareerCompass by Q4 2028 | ~405–540 applications expected in the pilot cohort in Q1 '27 alone — ~22–29% of the lifetime OKR target in the first 3 months. |
| **Status latency** | Application status updates ≤24 hours of hiring-manager action by Q1 '27 | Requires a defined state machine — now ATS-backed (World A). Architecture must be confirmed before Epic C is groomed. Can't be retrofitted after R2. |

**Pilot cohort at R1 launch:** ~5,400 officers across 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), staggered rollout.

---

## Problem

CareerCompass MVP solves the visibility problem — officers can find opportunities in one place. But visibility without a frictionless apply flow won't move the North Star. An officer who discovers an opportunity but drops off at a redirect, a blank form, or a status black hole hasn't taken a development action.

R1 removes exactly those three failure points:

| Failure point | What happens today | R1 fix |
|---|---|---|
| The redirect | Officer clicks Apply and leaves CareerCompass entirely — external FormSG or C@G site | Native in-Compass apply form (no external handoff) |
| The blank form | Officer fills the form from scratch — no profile pre-fill, manual entry every time | Pre-filled application from officer's OTEP profile |
| The status black hole | Application disappears into a FormSG email inbox — officer hears nothing, chases manually | End-to-end status tracking in OTEP; officer sees status in-platform |

**Why the North Star is blocked without R1:** You can't measure completion of a development action if the action happens outside the platform. Every application is invisible to CareerCompass the moment the officer clicks Apply. An officer who redirects to FormSG, submits, and hears nothing has not — from CareerCompass's perspective — done anything.

FormSG was always the MVP vehicle, not the long-term solution. Steering approved replacing it with an OTEP-hosted application flow (Steering, 2026-03-12). R1 is where that direction becomes real.

---

## As-Is: Current State

### Officer Experience (today)

| Step | What happens | The pain |
|------|-------------|----------|
| 1. Discovers an opportunity | Browses CareerCompass, filters, finds a relevant posting | No friction here — MVP solves this |
| 2. Clicks Apply | Redirected out of CareerCompass to FormSG or C@G external site | Platform breaks. Officer loses confidence in the product. |
| 3. Fills the form | Enters all details from scratch — name, grade, competencies, motivation — manually | No profile data carries over. Feels like the system doesn't know who they are. |
| 4. Submits externally | FormSG submission goes to an email inbox. CareerCompass has zero record of it. | Application is invisible to the platform the moment it's submitted. |
| 5. Waits | No acknowledgement, no reference number, no status updates | Officer has to chase manually. Most don't. Applications stall or go dark. |

**Current apply completion rate (estimated):** ~15–20% of officers who reach the Apply CTA complete an application. The redirect and blank form are the primary drop-off points.

**Internal Jobs and Secondments:** These types were pulled from MVP entirely — there is no creation tooling for them anywhere. Officers cannot discover or apply to IJ or Secondment opportunities through any channel today.

---

### Agency / Posting Manager Experience (today)

| Step | What happens | The pain |
|------|-------------|----------|
| 1. Creates a posting | Authors the opportunity in OTG — a separate legacy system. Fills OTG's posting form. | No link to where applications will eventually land. Dual-system from the start. |
| 2. Posting goes live | Publishes in OTG marketplace. CareerCompass ingests it read-only. | Manager has no visibility of how it appears to officers in CareerCompass. Posted blind. |
| 3. Applications arrive | FormSG submissions land in an email inbox. No dashboard, no structured data. | Every applicant is an email. Tracking means building a spreadsheet. |
| 4. Reviews applicants | Reads free-form FormSG responses. Has to contact HR systems manually for profile data. | No competency data, no grade, no service history — none of this is in FormSG. Assessment quality is low. |
| 5. Shortlists | Updates a spreadsheet. No audit trail. | If challenged on a selection decision, there's no record. Defensibility risk. |
| 6. Communicates decisions | Emails each applicant individually — or doesn't. | Applicants are left without updates. "What happened to my application?" is an offline chase. |
| 7. Closes the posting | Manual in OTG. No auto-close. | Postings sit open after they're filled. Officers apply to roles that no longer exist. |

**The disconnect today:** Posting lives in OTG. Applications land in email. Tracking lives in a spreadsheet. These are three separate systems with no connective tissue. CareerCompass sits between them as a read-only window — it can show the opportunity, but nothing else in the lifecycle.

---

### The Seam — The Highest-Risk Undesigned Surface

Both the officer journey and the agency journey go quiet at the same point. The handoff from "officer submits" to "application lands in manager's queue" to "status goes back to officer" is currently undefined and unbuilt.

```
  Officer             CareerCompass (OTEP)          Posting Manager
 ──────────────────────────────────────────────────────────────────────
  Discovers ──────────► Listing page
  Views detail ────────► Detail page
  Clicks Apply                │
                         ═══════════════ TODAY: broken here ════════════
                              │
                     Redirected to FormSG
                     Submits externally
                     Hears nothing                 Email inbox
                                                   Spreadsheet
                                                   Manual chase
```

**In R1, this seam is replaced by:**

```
  Officer             CareerCompass (OTEP)          Posting Manager
 ──────────────────────────────────────────────────────────────────────
  Discovers ──────────► Listing page
  Views detail ────────► Detail page
  Clicks Apply ────────► In-Compass form (pre-filled)
  Submits ─────────────► Application record in OTEP
                              │
                    ════════════════ THE SEAM ═════════════════
                              │
                              ▼                  Manager dashboard
                                                 Structured applicant profiles
                                                 Shortlist / status update
                              ◄──── status sync ──────────────
  Status visible in OTEP
```

The 24-hour latency OKR lives in this seam — specifically in the status-sync path from manager action back to officer. This is where R1 succeeds or fails, and it's the part most at risk of under-investment in favour of the more visible officer-facing apply UX.

---

## The 5 Epics

### Epic A — Opportunity Creation

Agencies author and manage postings directly in CareerCompass. A structured creation form, the posting lives in OTEP's database, validation and publish workflow, and the edit/close lifecycle.

**Scope: full 5-type creation (confirmed)**
All five opportunity types are in scope for R1 creation: Internal Jobs, Secondments, STIPs, Gigs, and PSFG.

| Type | Why in R1 |
|------|-----------|
| Internal Jobs | No creation tooling anywhere post-OTG; pulled from MVP |
| Secondments | Same — no other home |
| STIPs | Currently FormSG-only; agency authors need a native path |
| Gigs | Same as STIP |
| PSFG | Conditional on confirmed policy intent from leadership. If intent is confirmed (Jace check-in Thu 25 Jun), it's in. If not, it defers to R1.5. |

**PSFG note:** Policy intent is still being confirmed (Michelle to gauge with Jace/Adrian). If PSFG is in, the programme team owns data quality conditions (competency tagging, FormSG coverage). If not confirmed by grooming, PSFG creation defers to R1.5 and the other 4 types proceed.

**Explicitly out of Epic A:**
- Criteria authoring — keeps R1 off the blocked POCDEX write path (Core #31). Comes R1.5.
- SJR creation — excluded from MVP ingestion; out unless Mark pulls it in.
- C@G — stays on its own rails, not the generic create form.

**Open dependency:** Agency-admin auth is undefined. Who these users are, how they authenticate, and who builds it is unresolved. This is a go/no-go gate for Epic A. (→ Pow Hwee / Fabian to confirm before R1 pipeline opens)

---

### Epic B — Streamlined Application + Smart Pre-fill

A native in-Compass application form — no FormSG redirect. Pre-populated from the officer's OTEP profile (competencies and work history). Officer completes and submits without leaving CareerCompass.

**What's in:**
- In-Compass application form (OTEP-native, not a FormSG embed)
- Auto-population of officer's strengths and experience from their OTEP profile
- Officer submits, form posts to OTEP backend

**What's not in:**
- CV upload or CIE inference (OTEP-205, a separate capability) — smart pre-fill is profile-driven only, not inference-driven.

**Design note:** The pre-filled-then-editable form needs intentional design even if the smart inference is cut. What does the officer see when pre-fill is wrong, partial, or stale? That interaction lives in Epic B regardless of how much "smart" gets added.

**Dependency flag:** Pre-fill rides on the competency SSOT endpoint contract between Léo and Kingsley (tickets #18/#41). Pre-fill is not a given until that contract is finalised.

---

### Epic C — Status Tracking

End-to-end application monitoring with integration to ATS, HRPS, and Cumulus. OTEP owns the state machine:

**Submitted → Under Review → Outcome**

**Scope change (confirmed, post-review):** ATS integration is now in scope for R1 (previously World B / OTEP-native only). Status tracking integrates with ATS, HRPS, and Cumulus so status updates are visible inside CareerCompass and reflected in existing HR systems simultaneously.

**This reverses the World B recommendation from the Jun 24 jam.** World A (ATS-backed) is now the confirmed direction. Implications:
- The posting-manager journey must be re-examined — it no longer depends solely on an OTEP-native state machine
- The ATS integration spec and vendor/system ownership must be confirmed before Epic C can be groomed
- Webhook or polling architecture decision moves from R2 planning to R1 scope

**Depends on:** Epic B (needs a submitted application to have a status). ATS/HRPS/Cumulus integration specs confirmed with Pow Hwee.

**Design decisions to make early:**
- Who triggers each transition — officer, HR, ATS system event, or OTEP? Each answer is a different backend shape.
- "Outcome = rejection" is the most emotionally sensitive screen in the release — needs design attention alongside the data model, not after.
- Who sees the status — officer only, or HR dashboard too? (→ Amber + Pow Hwee)
- How does status sync work when ATS is the system of record? Push (webhook) vs pull (polling)?

**Note:** The 24hr latency OKR lives in the status-back-to-officer path, not the apply flow. ATS integration adds latency risk to this path — surface to Pow Hwee before grooming.

---

### Epic D — Saved Jobs

Officers save and bookmark opportunities, and resume in-progress applications without losing data.

**Two halves:**

| Half | What it does | When it ships |
|------|-------------|--------------|
| "Save an opportunity" | Bookmark a posting, surface it later | Semi-independently; parallel-track candidate |
| "Resume an application" | Pick up an in-progress form | After Epic B; only build if MVP abandonment data shows >40% drop-off mid-form |

**Open questions:** Cross-session persistence duration (90 days? forever?), what happens when a saved posting closes, does saving trigger a deadline notification. (→ Pow Hwee)

---

### Epic E — Competency Management v1

Ensure officer competencies are in sync between CareerCompass and existing HR systems (HRPS, Cumulus, POCDEX).

**Why it's in R1:** Pre-fill quality (Epic B) and status tracking integrity (Epic C) both depend on competency data being accurate and current. If officer profiles in CareerCompass are stale or misaligned from HR system records, pre-fill erodes trust and matching logic fails before R1 has a chance to prove value.

**Scope boundary — critical open question:**
This epic has two very different shapes depending on the answer to one question:

| Scope | What it means | Build complexity |
|---|---|---|
| **Read-only sync** | CareerCompass reads competency data from POCDEX/HRPS at login; officer profile stays current without manual entry | Moderate — depends on open items #18/#41 |
| **Read + write-back** | Officers update competencies in CareerCompass; changes sync back to HRPS/Cumulus | High — requires POCDEX write path (Core #31), currently blocked |

**Recommendation:** Confirm with Imelda / Daryll before grooming. If write-back is intended, this epic re-opens the POCDEX write path (Core #31) that was explicitly closed at R1. That is a sequencing risk and needs a new decision log entry.

**Dependency:** Competency SSOT contract between Léo and Kingsley (open items #18/#41). Epic E cannot be groomed until the schema is stable.

**Explicitly out (until scope is confirmed):** Competency authoring UI, criteria matching (Epic A deferred item), CV inference (OTEP-205).

---

## Priority Order + Critical Path

| Priority | Epic | Why | Confidence |
|----------|------|-----|------------|
| 1 | **A — Opportunity Creation (all types incl. Secondments)** | Upstream spine. HR can post all job types in Compass, eliminating OTG dependency for creation entirely. | High |
| 2 | **B — Streamlined Application + Smart Pre-fill** | Officer-facing payoff. Native in-Compass apply form (no redirects, excl. C@G). Pre-filled from OTEP profile. | High |
| 3 | **C — Status Tracking (ATS/HRPS/Cumulus integration)** | Closes the status black hole. World A confirmed — ATS integration in scope. Scope early; architecture decision gates the whole epic. | High — but integration complexity is new risk |
| 4 | **E — Competency Management v1** | Pre-fill and matching quality depend on competency data accuracy. Scope boundary (read vs write) must be confirmed before grooming. | Medium — pending scope boundary confirmation |
| 5 | **D — Saved Jobs** | High officer value, lower build cost. "Save an opportunity" ships semi-independently as a parallel track. | Medium |

**The critical path:** A and B are the two delivery spines. C and E are integration-heavy — both gate on external system specs that aren't fully defined. D is the parallel-track candidate.

**If R1 has to cut:** D goes first. If integration specs slip, E's write-back scope defers to R1.5 (read-only sync only). A + B + C is the non-negotiable floor.

**If PSFG policy intent isn't confirmed:** PSFG creation defers to R1.5. IJ, Secondment, STIP, Gig proceed.

**Capacity flag:** ATS integration (Epic C) + Competency Management (Epic E) both add system integration work that wasn't in the original scope. Capacity check against the sprint plan is a blocker before R1 grooming opens — Thomas remains the single FE across A and B.

---

## MoSCoW

| Bucket | Epics | The line |
|--------|-------|----------|
| **Must** | A (creation — all types incl. Secondments) · B (native apply + pre-fill, excl. C@G) · C (status tracking + ATS/HRPS/Cumulus integration) | R1's promise = create → apply → track. Drop any one and R1 doesn't close the loop. |
| **Should** | E (Competency Management v1 — read-only sync at minimum) · D (Saved Jobs — "save" half) | E is a quality gate for pre-fill and matching. D is high officer value, low build cost. Both are semi-independent parallel tracks. |
| **Could** | E's write-back scope (if POCDEX write path unblocked) · D's "resume application" half | E write-back re-opens Core #31 — only if Imelda's squad confirms the path is clear. D "resume" is data-gated on abandonment >40%. |
| **Won't (this release)** | Ringfencing-criteria authoring · Smart Assistant (→ R3) · CIE/CV inference · SJR creation · opportunity recommender · Intelligence Dashboard (roadmap item, not in current sprint scope) | Smart Assistant explicitly moved to R3 (confirmed post-review). Criteria authoring re-opens POCDEX write path — explicitly out unless E's write-back scope is confirmed. |

---

## User Journeys

**Lane 1 — Intentional Mover (Epics B + C)**
Senior officer, targeted, time-pressured. Browses → finds opportunity → clicks Apply → pre-filled form appears in-Compass → reviews, edits, adds motivation statement → submits → confirmation + reference number → "My Applications" tab shows live status → push notification when status changes.

*Aha moment:* Profile already loaded into the form. "I don't have to retype everything."
*Risk:* Stale pre-fill erodes trust faster than no pre-fill.

**Lane 2 — Passive Watcher (Epic D)**
Early career, open but not searching. Browses → saves an opportunity → closes tab → returns later → "Saved Jobs" surfaces it → "Closes in 3 days" nudge → decides to apply → joins Lane 1.

*Why it matters:* The 9% OTG re-login rate is this persona's symptom. Saved Jobs converts a one-time visitor into a returning user.

**Lane 3 — Posting Manager (Epics A + C)**
Agency HR. Manages 5–20 active postings. Creates posting in OTEP native form → sees officer preview pane → publishes → applications routed to ATS → shortlists / updates status in ATS → status synced back to CareerCompass → officers notified → closes posting.

*Unlock condition:* World A (ATS integration) is confirmed. The posting-manager journey now depends on the ATS integration spec being defined — which ATS, how status events flow back to OTEP, and who owns the integration. This is unresolved and is a go/no-go gate for Epic C. Manager dashboard shape may also change depending on whether OTEP surfaces applicant data or defers to the ATS.

**The undesigned seam:** Both Lane 1 and Lane 3 go quiet at the same point. The officer-submits → submission-routes-to-manager-queue → status-back-to-officer chain is where the 24hr latency OKR actually lives. This is the highest-risk undesigned surface in R1.

---

## Decisions Needed Before R1 Grooming Opens

| # | Decision | Status | Owner |
|---|----------|--------|-------|
| 1 | "Apply within CareerCompass" — native, no redirects (excl. C@G) | ✅ Confirmed | — |
| 2 | ATS fork — World A (ATS integration) vs World B (OTEP-native) | ✅ Confirmed — World A, ATS/HRPS/Cumulus integration in scope | — |
| 3 | Smart Assistant | ✅ Confirmed — R3, out of R1 | — |
| 4 | Saved Jobs | ✅ Confirmed — in R1 | — |
| 5 | Competency Management v1 | ✅ Confirmed in scope — **scope boundary open:** read-only sync vs write-back? | Imelda / Daryll |
| 6 | PSFG in R1 or R1.5? | Open | Jace / Adrian |
| 7 | Criteria authoring — R1 or R1.5? | Recommended R1.5 (POCDEX write path blocked) | Pow Hwee |
| 8 | Agency-admin auth — does it exist, who owns it? | Open — go/no-go gate for Epic A | Pow Hwee / Fabian |
| 9 | ATS integration spec — which ATS, who owns the API contract? | Open — go/no-go gate for Epic C | Pow Hwee / Fabian |
| 10 | 24hr latency OKR measurement point — from ATS manager action, or from status appearing in CareerCompass? | Open — affects whether OKR is achievable with ATS integration | Adrian / Pow Hwee |

---

## Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| ATS integration owner unknown | RED — blocks Epic C grooming | World A is now confirmed but no one has named which ATS, who owns the integration spec, or what the API contract looks like. This must be confirmed before Epic C is groomed. |
| Competency Management v1 scope boundary unconfirmed | RED — if write-back is intended, re-opens Core #31 | Confirm with Imelda / Daryll: read-only sync or write-back? If write-back, POCDEX write path is back on the table and must be scoped before grooming. |
| Agency-admin auth undefined | RED — go/no-go gate for Epic A | Confirm with Pow Hwee / Fabian before pipeline opens. If it doesn't exist, Epic A cannot ship. |
| "Rejection" screen in Epic C under-designed | RED — most emotionally sensitive screen in release | Amber to scope this alongside C's data model pass, not after. ATS integration adds uncertainty to what data is available at rejection time. |
| Epic C state machine unresolved — now more complex with ATS | AMBER → RED | World A means status transitions may originate from an external ATS event, not from OTEP. Who triggers each transition must be confirmed with Pow Hwee before grooming. Each answer is a different backend shape. |
| Epic B pre-fill at risk until #18/#41 closes | AMBER | Competency SSOT endpoint contract between Léo and Kingsley not yet finalised. Pre-fill quality depends on this — and now so does Epic E. |
| Thomas (FE) is single point of failure for A, B, and potentially C | RED | Scope has grown: full-type creation (A) + native apply (B) + ATS integration surface (C) all route through FE. Capacity check against the sprint plan is a blocker before R1 grooming opens. |
| 24hr status latency OKR at risk with ATS integration | AMBER | ATS integration introduces external system latency that OTEP doesn't control. Need to confirm whether the latency OKR (≤24hrs) is measured from manager action in ATS or from status appearing in CareerCompass — these are different targets. |

---

## Explicitly Out of R1

| Item | Reason |
|------|--------|
| Ringfencing-criteria authoring | Re-opens POCDEX write path — blocked on Core #31. Comes R1.5. |
| Smart Assistant (auto-populate strengths + CV build) | Confirmed R3 post-review. Reduces AI complexity in R1. |
| SJR creation | Excluded from MVP ingestion; out unless Mark pulls it in. |
| CV upload / CIE inference (OTEP-205) | Separate capability. Smart pre-fill = profile-driven only. |
| Job Function ringfencing | Agency-level ringfencing ships MVP. Job Function filters come R1+. |
| C@G native apply | C@G stays on its own rails — explicitly excluded from in-Compass apply (confirmed). Officers applying to C@G jobs redirect as today. |
| C@G creation | Stays on its own rails — not the generic create form. |
| Opportunity recommender | Still hypothesis-stage. |
| ATS as posting system of record | ATS integration is in scope for status sync — but OTEP owns the posting record, not the ATS. ATS as posting SOR is R2+. |

---

## One MVP decision this affects

**OTEP-87 (C@G detail + apply CTA):** R1's native in-Compass form changes the apply destination. MVP CTA points at FormSG/C@G redirect; R1 replaces it. Don't over-build the redirect in MVP if R1 is ~2 sprints out.

---

## Next Steps

| Action | Owner | By when |
|--------|-------|---------|
| Confirm Competency Management v1 scope boundary (read-only vs write-back) | Michelle → Imelda / Daryll | Before R1 grooming opens |
| Confirm ATS integration spec — which system, who owns API contract | Michelle → Pow Hwee / Fabian | Before Epic C is groomed |
| Confirm agency-admin auth path | Pow Hwee / Fabian | Before R1 pipeline opens |
| Finalise competency SSOT contract (#18/#41) | Léo + Kingsley | Ongoing — gate for Epic B pre-fill and Epic E |
| Epic C state machine decision — who triggers status transitions (more complex now with ATS) | Pow Hwee + Michelle | Before C is groomed |
| Clarify 24hr latency OKR measurement point with ATS integration | Michelle → Adrian | Before Epic C is groomed |
| Early design pass on rejection/outcome screen | Amber | Alongside Epic C data model |
| Mark sign-off on shaped epic set (#40) | Michelle → Mark | Pending |
| Open R1 story pipeline | Michelle | After Mark confirms |

---

*Scope confirmed post-senior review. Jam with Adrian pending (Wed 24 Jun 2026). Story pipeline opens after Mark sign-off (#40). Last updated: 24 Jun 2026.*
*Sources: Post-review confirmed scope slide, manager briefing (2026-06-23-W26-r1-manager-briefing-reforge.md), R1 jam draft v3 (2026-06-22), impact sizing (2026-06-18), OTEP roadmap OKRs 2026–27.*
