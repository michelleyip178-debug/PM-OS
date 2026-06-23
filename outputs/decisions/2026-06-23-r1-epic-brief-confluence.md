# R1 Release — Epic Brief
**CareerCompass | OTEP-Pathfinder**

| | |
|---|---|
| **Release** | R1 |
| **Target** | Mar 2027 |
| **Status** | Provisional — pending Mark sign-off (#40) |
| **Author** | Michelle Yip |
| **Last updated** | 23 Jun 2026 |
| **Reviewed with** | Adrian (jam, Wed 24 Jun 2026) |

---

## What R1 is

MVP gets an officer to the *door* of an opportunity — browse, filter, view, click out to apply. R1 brings both ends in-house.

Agencies create opportunities directly in CareerCompass. Officers apply without leaving it. The application is tracked from submission to outcome. CareerCompass stops being a read-only window onto OTG and becomes the system of record.

**R1 = Create it. Post it. Pre-fill it. Submit it. Track it. Save it.**

---

## Why R1 now — the OKR case

Three OKR targets only unlock if R1 ships on time:

| OKR | Target | R1's contribution |
|-----|--------|-------------------|
| **North Star** | 10% of onboarded officers complete a development action by Mar 2027 | Without in-Compass apply, officers can't complete an action within the platform. R1 is the only release that can hit this milestone. |
| **OKR 2** | 1,850 officers applied via CareerCompass by Q4 2028 | ~405–540 applications expected in the pilot cohort in Q1 '27 alone — ~22–29% of the lifetime OKR target in the first 3 months. |
| **Status latency** | Application status updates ≤24 hours of hiring-manager action by Q1 '27 | Requires a native state machine in OTEP. Can't be retrofitted after R2. |

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

## The 4 Epics

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

End-to-end application monitoring, native in OTEP. OTEP owns the state machine:

**Submitted → Under Review → Outcome**

No ATS integration in R1. OTEP builds and owns the record store, routing logic, and state machine. World B (OTEP-native) is the recommended path — it's the only way the posting-manager journey exists in R1.

**Depends on:** Epic B (needs a submitted application to have a status).

**Design decisions to make early:**
- Who triggers each transition — officer, HR, or system? Each answer is a different backend shape.
- "Outcome = rejection" is the most emotionally sensitive screen in the release — needs design attention alongside the data model, not after.
- Who sees the status — officer only, or HR dashboard too? (→ Amber + Pow Hwee)

**Note:** The 24hr latency OKR lives in the status-back-to-officer path, not the apply flow. Don't over-invest in the visible apply UX at the expense of this.

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

## Priority Order + Critical Path

| Priority | Epic | Why | Confidence |
|----------|------|-----|------------|
| 1 | **A — Opportunity Creation (all 5 types)** | Upstream spine. All 5 types in scope: IJ, Secondment, STIP, Gig, PSFG (PSFG conditional on policy intent). Full creation is the Must — not a stretch. | High (4 types confirmed) / PSFG conditional |
| 2 | **B — Streamlined Application + Smart Pre-fill** | Officer-facing payoff. The native form everything else hangs off. | High |
| 3 | **C — Status Tracking** | Closes the "submit into a black box" problem. New data model — scope early even if it ships after B. | High |
| 4 | **D — Saved Jobs** | High officer value, lower build cost. "Save an opportunity" can ship semi-independently as a parallel track. | Medium |

**The critical path:** A and B are the two spines — different surfaces so scoping parallelises, but build serialises through one FE (Thomas). C is scoped alongside B, ships after. D is the parallel-track candidate.

**If R1 has to cut:** D's "resume application" half goes first, then D entirely. A (full 5-type) + B + C is the non-negotiable core. Without all three, R1 doesn't close the create → apply → track loop.

**If PSFG policy intent isn't confirmed:** PSFG creation defers to R1.5. The other 4 types (IJ, Secondment, STIP, Gig) proceed as planned.

**Capacity flag:** Full 5-type creation is a materially larger build than the narrow scope. Capacity check needed against the sprint plan before R1 grooming opens — particularly with Thomas as the single FE across A and B.

---

## MoSCoW

| Bucket | Epics | The line |
|--------|-------|----------|
| **Must** | A — full 5-type creation (IJ, Secondment, STIP, Gig, PSFG*) · B (apply + pre-fill) · C (status tracking) | R1's promise = create → apply → track. Drop any one and R1 doesn't deliver. *PSFG conditional on leadership policy intent. |
| **Should** | D (Saved Jobs — "save" half) | High officer value, lower build cost. Semi-independent parallel track. |
| **Could** | D's "resume application" half | Enhancement on a working form. Data-gated — only if abandonment >40%. |
| **Won't (this release)** | Ringfencing-criteria authoring · ATS integration · CIE/CV inference · SJR creation · opportunity recommender | Named so they don't creep in. Criteria authoring re-opens POCDEX write path (Core #31) — explicitly out. |

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
Agency HR. Manages 5–20 active postings. Creates posting in OTEP native form → sees officer preview pane → publishes → applications land in a structured dashboard → shortlists / updates status → officers auto-notified → closes posting.

*Unlock condition:* This persona's dashboard only exists if we build the record store and state machine in OTEP (World B). World A — ATS integration — means this manager journey doesn't exist in R1.

**The undesigned seam:** Both Lane 1 and Lane 3 go quiet at the same point. The officer-submits → submission-routes-to-manager-queue → status-back-to-officer chain is where the 24hr latency OKR actually lives. This is the highest-risk undesigned surface in R1.

---

## Decisions Needed Before R1 Grooming Opens

| # | Decision | Options | Recommendation |
|---|----------|---------|---------------|
| 1 | "Apply within CareerCompass" — does it mean no redirects at all, or that the experience *starts* in Compass? | (a) Fully native, no redirects · (b) Starts in Compass, redirects at submission | (a) Native form, no redirects |
| 2 | ATS fork — World A (ATS-backed state machine + webhooks) vs World B (OTEP-native state machine)? | (a) ATS integration · (b) OTEP-native | World B for R1. ATS integration is R2+ when a vendor is confirmed. |
| 3 | PSFG in R1 or R1.5? | (a) R1 if policy intent confirmed · (b) R1.5 if not | Confirm with Jace (Thu 25 Jun). IJ, Secondment, STIP, Gig are in regardless. |
| 4 | Criteria authoring — R1 or R1.5? | (a) R1 · (b) R1.5 | R1.5. Keeps R1 off the POCDEX write blocker (Core #31). |
| 5 | Agency-admin auth — does it exist, who owns it? | To be confirmed | Unknown — go/no-go gate for Epic A. (→ Pow Hwee / Fabian) |

---

## Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Agency-admin auth undefined | RED — go/no-go gate for Epic A | Confirm with Pow Hwee / Fabian before pipeline opens. If it doesn't exist, Epic A cannot ship. |
| "Rejection" screen in Epic C under-designed | RED — most emotionally sensitive screen in release | Amber to scope this alongside C's data model pass, not after. |
| Epic C state machine unresolved | AMBER | Confirm who triggers each status transition (officer / HR / system) with Pow Hwee before grooming. Each answer is a different backend shape. |
| Epic B pre-fill at risk until #18/#41 closes | AMBER | Competency SSOT endpoint contract between Léo and Kingsley not yet finalised. Pre-fill is not a given until it is. |
| Thomas (FE) is single point of failure for A and B | RED | Full 5-type creation + native apply form both route through Thomas. Scope is materially larger now that A covers all types. Capacity check against the sprint plan is a blocker before R1 grooming opens. |

---

## Explicitly Out of R1

| Item | Reason |
|------|--------|
| Ringfencing-criteria authoring | Re-opens POCDEX write path — blocked on Core #31. Comes R1.5. |
| ATS integration | R2+ when a vendor is confirmed. |
| SJR creation | Excluded from MVP ingestion; out unless Mark pulls it in. |
| CV upload / CIE inference (OTEP-205) | Separate capability. Smart pre-fill = profile-driven only. |
| Job Function ringfencing | Agency-level ringfencing ships MVP. Job Function filters come R1+. |
| C@G creation | Stays on its own rails — not the generic create form. |
| Opportunity recommender | Still hypothesis-stage. |

---

## One MVP decision this affects

**OTEP-87 (C@G detail + apply CTA):** R1's native in-Compass form changes the apply destination. MVP CTA points at FormSG/C@G redirect; R1 replaces it. Don't over-build the redirect in MVP if R1 is ~2 sprints out.

---

## Next Steps

| Action | Owner | By when |
|--------|-------|---------|
| Agree epic set + priority order | Adrian + Michelle | Wed 24 Jun jam |
| Confirm agency-admin auth path | Pow Hwee / Fabian | Before R1 pipeline opens |
| Finalise competency SSOT contract (#18/#41) | Léo + Kingsley | Ongoing — gate for Epic B pre-fill |
| Epic C state machine decision (who triggers transitions) | Pow Hwee + Michelle | Before C is groomed |
| Early design pass on rejection/outcome screen | Amber | Alongside Epic C data model |
| Mark sign-off on shaped epic set (#40) | Michelle → Mark | Immediately after jam |
| Open R1 story pipeline | Michelle | After Mark confirms |

---

*Provisional until Mark confirms scope (#40). Shaped in jam with Adrian, Wed 24 Jun 2026.*
*Sources: R1 jam draft v3 (2026-06-22), impact sizing (2026-06-18), OTEP roadmap OKRs 2026–27.*
