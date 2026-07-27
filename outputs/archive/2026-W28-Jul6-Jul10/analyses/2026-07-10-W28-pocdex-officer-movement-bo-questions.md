# POCDEX Officer Movement — Questions for BOs

**Purpose:** Get explicit BO direction on how CareerCompass should handle officers who move agencies (transfer, secondment, attachment) via POCDEX. Currently undefined, and a live data bug shows the current system doesn't reliably handle officer status changes at all.

**Audience:** Business Owners (Xian Zhang, Jacky), shared with the team for context ahead of the conversation.

**Why now:** This connects to a live, unresolved issue (open item #37, detailed below). Getting BO direction now avoids building against assumed behavior that may not match what they actually want.

---

## Start Here: What's Actually Blocking Rama's Data Request Approval

Everything below this section is real analysis, but **none of it needs to be resolved to get Rama's "Request for POCDEX Data for Career Compass" approved.** Only three things are genuinely open in that document's review thread:

1. **Officer-level `status` vs. Employment-level `status` — unresolved, asked twice by Huiting in review comments, no answer given.** Needs a direct clarification from Rama/Pow Hwee — even a one-line answer closes this.
2. **What "additional email" field is for** — a small loose end on page 2 of Rama's doc, never answered. Either confirm it's needed and why, or drop it from the request.
3. **Session/token lifetime sanity check** — not a comment in Rama's doc, but worth a quick confirmation that a departed officer's live session can't outlast the "check only at next login" design by an unacceptable margin. This is a build-phase engineering question, not a data-scope one — don't let it hold up submission, just don't let it go unasked.

**Everything else in this document — the six-event model, CAM Reality Check, edge-case table, Day-2 Ops, the no-CAM framing — is product/build-phase work for after the data request is approved.** It's useful, but treating it as a precondition for sign-off is overcomplicating what should be a fast approval. Come back to the rest of this document once Rama's request has moved forward.

---

## Background: How Staff Movement Works in the Public Service

Officer movement across the public service isn't a rare exception — it's a routine, structural feature of how the civil service operates. Officers regularly move between agencies through several distinct pathways, each with different implications for a system like CareerCompass:

- **Transfers** — a permanent move from one agency to another, typically as part of career progression or organisational restructuring.
- **Secondments** — a temporary assignment to a different agency while remaining formally employed by the home agency, often for a fixed term.
- **Attachments** — short-term placements, sometimes cross-agency or cross-sector, for specific projects or exposure.
- **Adjunct/inactive status** — an officer who is no longer actively serving in a role but hasn't formally exited the service (e.g., extended leave, pending reassignment, or administrative transition states).
- **Exit from service** — retirement, resignation, or contract end, where the officer leaves the public service entirely.

Each of these has different implications for identity, access, and data ownership — a permanent transfer probably warrants a clean handover of access, while a secondment likely needs dual or host-agency access without severing the home-agency relationship. None of this is unique to CareerCompass: HR systems across the public service (HRPS, Cumulus) already model these movement types in some form, and POCDEX exists specifically to give downstream systems a consistent, centralized view of officer status so each system doesn't have to independently interpret HR data.

**The problem: CareerCompass doesn't yet have a defined policy for any of this.** There's no confirmed business rule for what should happen to an officer's CareerCompass access, data, or in-progress activity when they move, and that gap is what this conversation is meant to close.

**Why this isn't hypothetical — a live illustration (open item #37):**

- An officer (Lim Kah Ann, case DS-OTG-000007) was marked *adjunct* in the source HR record, but POCDEX still shows them as active.
- Result: their OTG account keeps getting auto-recreated in a loop, rather than staying deactivated.
- This has been ongoing since **April** — not a one-off glitch, an unresolved months-old issue.
- Root cause is still under joint investigation by POCDEX and TECQ; no fix confirmed yet.
- Flagged as a genuine **source-of-truth mismatch** between POCDEX and the upstream HR system — this undermines confidence in account lifecycle integrity more broadly, and connects to the same trust concerns already tracked under the competency data SSOT thread (open items #18, #41).
- Status: 🔴 Open, currently tagged "verify source" (came from an email radar scan, not yet independently reconfirmed).

This case shows what happens when a movement-adjacent status (adjunct) isn't handled with a clear, agreed rule: the system doesn't fail gracefully, it fails in a way nobody explicitly designed for. That's the risk of leaving officer movement undefined for CareerCompass more broadly, not just for this one case.

---

## Questions for BOs

### 1. Core business rules — what should happen, in principle

1. When an officer moves agencies (transfer, secondment, attachment), should their CareerCompass access transfer immediately, or is there an acceptable grace period?
   - *For BOs to consider:* How often does this actually happen across our pilot agencies? If it's rare, is it worth a strict same-day rule, or is a short grace period genuinely fine operationally?

2. If an officer is on secondment (temporarily at Agency B but still formally employed by Agency A), which agency's opportunities and ringfencing rules should they see — home agency, host agency, or both?
   - *For BOs to consider:* From the officer's day-to-day experience, which agency's opportunities are actually relevant to them while seconded? Is there a risk of confusing or demotivating the officer if we get this wrong?

3. Should officers see their own movement history in-product (e.g., "you moved from Agency A to Agency B on [date]"), or is this purely a backend access-control matter with no user-facing surface at all?
   - *For BOs to consider:* Is there value to the officer in seeing this, or would it just raise questions/concerns they don't currently have? Is this the kind of transparency officers would expect, or an unnecessary surface?

4. Is there a defined "in-transit" state — movement initiated but not yet finalized in HR systems — that needs its own handling, or should OTEP simply wait until POCDEX reflects the completed move?
   - *For BOs to consider:* Does HR actually have a distinct "movement in progress" status today, or is a move typically a single instant change in the source systems? If there's no real in-transit period, this question may not need a separate answer.

### 2. Timing and data currency

5. How fast does a movement need to reflect in CareerCompass after it's approved in the source HR system? Same day? Next login? Does the answer differ for transfers vs. secondments vs. terminations?
   - *For BOs to consider:* Is there a security or compliance reason certain movement types (e.g., termination) need faster access removal than others (e.g., a routine transfer)? Worth distinguishing urgency by risk, not treating all movement types the same.

6. If HRPS/Cumulus only pushes to POCDEX on a daily cadence (this is still unconfirmed — see open item #56), is same-day access change even feasible? Should BOs expect and accept up to 24-48 hours of lag as a known platform constraint, or is faster sync a hard requirement?
   - *For BOs to consider:* If same-day sync isn't achievable given current infrastructure, is a 24-48 hour lag an acceptable operational risk, or does it create a real exposure (e.g., a departed officer retaining access too long)?

### 3. Edge cases surfaced by the live bug

7. **Given the open DS-OTG-000007 case (officer marked adjunct but POCDEX still shows active, causing account auto-recreation):** independent of when the underlying technical bug gets fixed, what is the *correct end state* BOs want for an officer marked adjunct or moved? Should their account be deactivated but retained, fully deleted, or handled some other way?
   - *For BOs to consider:* What does "adjunct" mean in your own operational terms — is it different from "moved," "on leave," or "terminated"? Worth defining these terms plainly, since the current bug suggests different systems may already disagree on what they mean.

8. What happens to an officer's in-progress activity (saved jobs, in-flight applications, development plans) when they move agencies mid-use? Does it carry over to the new agency context, get archived, or get wiped entirely?
   - *For BOs to consider:* Does the answer depend on whether the move is permanent (transfer) versus temporary (secondment)? Is there a fairness or continuity concern if an officer loses in-progress work through no fault of their own?

9. If an officer moves to an agency that isn't yet onboarded to CareerCompass, what should they see? Locked out entirely, or a message like "your new agency isn't on the platform yet"?
   - *For BOs to consider:* Given the staged onboarding schedule, how likely is this to actually happen during the pilot period? Is a plain "not yet available" message sufficient, or does this need to feel more considered given it's a real officer experience, not just an edge case?

### 4. Ownership and governance

10. Who owns the "movement" event as a business decision? Is it entirely dictated by HRPS/Cumulus and POCDEX, with OTEP purely a downstream consumer with no say — or do BOs need any override capability for cases where the HR data itself is wrong (as in the #37 case)?
    - *For BOs to consider:* If HR source data is ever wrong (as in the #37 case), who should be able to intervene and correct an officer's access — is there already a process/team for this outside of OTEP, or does this expose a gap in escalation ownership that needs to be assigned?

---

## What We Owe Huiting: Requirements & API Questions

Separate thread, same root issue. Huiting Lian (data governance, HRPS side) has already asked Compass to formalize its data requirements before going further on source-system integration — and her join/leave signaling question directly overlaps with the officer-movement problem above. The BO conversation should produce answers that let us respond to Huiting properly, not duplicate her ask.

**What Huiting is waiting on from us (per 2026-07-06 and 2026-07-07 threads, open item #55):**

1. **Data domain list** — what data domains, exact elements, and business purpose per element does Compass actually need? (e.g., expected vs. self-assessed vs. endorsed competencies; why secondment indicators are needed; officer profile fields required — org, title, agency.)
   - *Link to BO conversation:* Question 2 (secondment ringfencing) and Question 8 (in-progress activity on move) directly inform why we need a secondment indicator and what officer-state fields Compass actually requires. We can't answer Huiting's "why do you need this field" question until BOs confirm the underlying business rule.

2. **Time coverage of data** — does Compass need historical data, current-state only, or future-dated records? Huiting flagged future-dated data as high complexity.
   - *Link to BO conversation:* Question 4 (in-transit state) is the same question from a different angle — if BOs confirm there's no real "movement pending" state in source systems, that simplifies the answer to Huiting (current-state only, no future-dated handling needed for movement).

3. **End-to-end data flow diagram** — where does data come from, does everything flow through POCDEX, or are direct-from-source/interim paths needed?
   - *Link to open item #31:* Core team (Pei Ern/Kingsley) still hasn't answered Pow Hwee's 17 Jun questions on what data POCDEX will provide — this blocks a full answer to Huiting regardless of what BOs decide on movement.

4. **Officer join/leave (offboarding) signaling — the most directly overlapping item.** Huiting explained OTG's current approach: POCDEX sends a full active-officer dataset, and consumers manually diff current vs. previous files to detect departures. She asked whether Compass needs **additional API parameters** to signal an officer joining or leaving, rather than relying on that manual-diff approach. Pow Hwee has already ruled out reusing OTG's model — Compass needs its own design.
   - *Link to BO conversation:* This is functionally the same question as Question 7 (correct end-state for adjunct/moved officers) and Question 1 (how fast should movement reflect), but from the API-design side rather than the business-rule side. **We cannot spec the API parameters Huiting is asking about until BOs answer Questions 1, 6, and 7** — the API needs to know what event to signal (deactivate? retain? grace period?) before Pow Hwee/Rama can design it.
   - Also unresolved: does POCDEX send any notification at all when an officer leaves Public Service, or does Compass need to build its own detection mechanism? This is a separate technical question for Rama/Pow Hwee, not something BOs need to answer, but it's the same underlying gap as #37 (POCDEX not reliably reflecting an officer's actual status).

5. **NRIC vs. POCDEX UID as primary identifier** — flagged 2026-07-07 as a live policy risk (a PSD Circular Minute may require NRIC; Compass's MVP is currently built around POCDEX UID only). Not directly a BO question on movement, but worth flagging in the same conversation since it's the same category of foundational identity-model risk, and Xian Zhang/Rama read the policy differently.

6. **Data retention/audit requirements** — Huiting flagged that Compass can't retain officer data indefinitely without justification. No concrete retention period defined yet. If BOs decide adjunct/moved officer records should be "retained but deactivated" (Question 7), that retention period needs to satisfy whatever Information Management requirements Huiting is applying — worth checking this doesn't conflict before committing to an answer.

**Sequencing implication:** The BO conversation on officer movement isn't just useful context for Huiting's ask — it's a **hard prerequisite** for the join/leave API design specifically (item 4 above). Recommend closing the BO conversation first, then feeding the confirmed business rules directly into Rama/Pow Hwee's response to Huiting, rather than running these as two disconnected workstreams that end up answering the same question twice.

---

## Proposed Business Flow (Draft — For BOs to Confirm or Amend)

This is a starting proposal, not a finalized decision — it exists to give BOs something concrete to react to rather than a blank page. Rama's technical data-flow diagram (POCDEX API / CAM / WOG AD / SingPass) currently treats officer status as a single binary check ("active employment found: yes/no"), which doesn't have room for the distinct movement types below. This business flow is meant to feed directly into a revised version of that diagram once BOs confirm or adjust it.

### Step 1: HR system records a movement event

An officer's status changes in the source HR system (HRPS/Cumulus) — this could be a transfer, secondment, attachment, adjunct/inactive status, or exit. This is the trigger; everything downstream reacts to it.

### Step 2: POCDEX reflects the new status

POCDEX is meant to be the single source of truth downstream systems consume — the movement event should propagate from HR systems into POCDEX. (Sync cadence and whether this is real-time or daily-batch is still unconfirmed — open item #56.)

### Step 3: CareerCompass detects the change and applies the movement-specific rule

This is the step that needs a distinct rule per movement type, rather than one binary check:

| Movement Type | Proposed CareerCompass Behaviour (draft) | Open Question for BOs |
|---|---|---|
| **Transfer** (permanent, Agency A → Agency B) | Access fully moves to Agency B. Home-agency ringfencing and opportunities update to reflect the new agency. Old agency access is revoked. | How fast should this take effect — immediately, next login, or with a short grace period? (Question 1) — ⚠️ CAM's native "Staff Exit" scenario only removes access; it doesn't grant new-agency access. See Reality Check below. |
| **Secondment** (temporary, still employed by Agency A, working at Agency B) | Officer retains home-agency (A) identity but sees host-agency (B) opportunities/ringfencing for the secondment duration. Reverts to Agency A view automatically when secondment ends. | Which agency's view should actually apply — home, host, or both? (Question 2) — ⚠️ **No native CAM support for dual-context access — see Reality Check below.** Whatever BOs choose here may not be buildable against CAM within MVP timeline. |
| **Attachment** (short-term, project-based) | Treated like a lightweight secondment — host-agency visibility for the attachment period, reverting after. May not need full ringfencing changes if the attachment is very short. | Does this need the same handling as secondment, or a lighter-touch rule given the shorter duration? — ⚠️ **Same CAM gap as secondment — see Reality Check below.** |
| **Adjunct/inactive status** | Account access suspended (not deleted) — officer cannot log in or see opportunities, but their historical data (saved jobs, applications, development plans) is retained in case they return to active status. | Should "adjunct" mean suspended-but-retained, or something else? This is the direct fix for the #37 bug pattern — the current system does neither of these cleanly. (Question 7) — CAM's NPL >90-day trigger is a reasonably close native fit, but is keyed on NPL specifically, not a general "adjunct" status — see Reality Check below. |
| **Exit from service** | Account deactivated. Data retention follows whatever period Huiting's Information Management requirements specify (data retention question, not yet scoped). No re-activation expected. | Should any data be retained post-exit, or fully purged after the retention window? — CAM's "Staff Exit" scenario covers this natively (full account/access removal), if Compass is onboarded to CAM. |
| **In-transit / movement pending** (if this state genuinely exists in HR systems) | No distinct handling proposed for MVP — CareerCompass waits until POCDEX reflects the completed move, rather than trying to model a "pending" state itself. | Does HR actually have a distinct in-progress state, or is a move typically a single instant change? If the latter, this row can be dropped entirely. (Question 4) |

### Step 4: In-progress activity carries the movement-type rule, not a single blanket rule

Rather than one answer for "what happens to saved jobs/applications on any move" (Question 8), the draft proposes this follows the same movement-type table above: transfers and exits are more disruptive (data likely archived or retained per policy), while secondments/attachments are temporary enough that in-progress activity should probably just persist untouched, since the officer is expected to return to their home context.

### Step 5: CareerCompass signals the outcome upstream, where relevant

For the join/leave API question Huiting raised (see previous section) — once BOs confirm the table above, this step becomes concrete: CareerCompass's API needs to signal at minimum "officer deactivated" (adjunct, exit) and "officer reactivated" (return from adjunct/secondment/attachment) as distinct events, not a single generic status-change ping. This directly resolves the ambiguity Rama's diagram left in the CAM push step.

**What this flow deliberately leaves open, pending BO input:**
- Exact timing/SLA per movement type (Questions 1, 5, 6)
- Whether officers see any of this movement history in-product (Question 3)
- Retention period specifics for adjunct/exit states (needs to reconcile with Huiting's data retention ask)
- Escalation path if HR/POCDEX data conflicts with what BOs intend (Question 10) — this flow assumes POCDEX is authoritative, but the #37 bug shows that assumption isn't always safe today

---

## Proposed Data Flow (Draft — Technical Companion to the Business Flow)

This translates the business flow above into the system-level detail Rama's original diagram was missing — specifically, replacing the single binary "active employment found: yes/no" check with movement-type-aware branching. Still a draft; the exact payload fields and API contract need Pow Hwee/Rama to finalize, but this shows what needs to exist.

### 1. Source event

HRPS/Cumulus records a movement event against an officer record: `movement_type` (transfer / secondment / attachment / adjunct / exit), `effective_date`, `from_agency`, `to_agency` (where applicable), and — critically, since this is currently undefined — a `movement_id` or equivalent so downstream systems can track a single event through to completion rather than inferring it from a status diff.

### 2. POCDEX sync

HRPS/Cumulus → POCDEX. Whatever the confirmed cadence turns out to be (open item #56 — real-time push vs. daily batch), POCDEX's officer record needs to carry the movement fields above, not just a flattened current-state snapshot. This is the same gap Huiting flagged: today's model (full active-officer dataset, diffed by consumers) can't carry `movement_type` — it can only tell you *that* something changed, not *what kind* of change it was.

### 3. Signal to CareerCompass — replacing the single CAM push with typed events

This is the core fix to Rama's diagram. Instead of one generic "employment status changed" push, CAM (or whatever change-notification layer sits in front of POCDEX) needs to emit **typed movement events**:

| Event | Payload (minimum) | Triggers |
|---|---|---|
| `officer.transferred` | officer_id, from_agency, to_agency, effective_date | Transfer |
| `officer.secondment_started` / `officer.secondment_ended` | officer_id, home_agency, host_agency, start_date, end_date | Secondment |
| `officer.attachment_started` / `officer.attachment_ended` | officer_id, home_agency, host_agency, start_date, end_date | Attachment |
| `officer.suspended` (adjunct) | officer_id, effective_date, reason (optional) | Adjunct/inactive |
| `officer.reactivated` | officer_id, effective_date | Return from adjunct/secondment/attachment |
| `officer.exited` | officer_id, effective_date | Exit from service |

This is a genuine gap today, not a naming exercise — right now the flow only supports a single implicit signal ("active" vs. "not active"), which is exactly how #37 happens: an "adjunct" event has nowhere to go except being squeezed into the same bucket as "still active," so the system defaults to recreating the account.

### 4. CareerCompass processing — per-event handler, not one binary check

Each event type maps to a distinct handler (matching the Step 3 table in the business flow above):

- `officer.transferred` → update agency context immediately or on next login (per Question 1); revoke old-agency ringfencing.
- `officer.secondment_started` / `attachment_started` → apply host-agency ringfencing view; retain home-agency identity; schedule automatic revert on `_ended` (or on `effective end_date` if the event is missed).
- `officer.suspended` → block login; retain all existing data (saved jobs, applications, development plans) in a suspended state, not deleted.
- `officer.reactivated` → restore prior access and data view.
- `officer.exited` → deactivate account; apply whatever data retention period is confirmed (pending Huiting's Information Management requirement); no reactivation path expected.

### 5. Fallback / reconciliation path

Given typed events depend on POCDEX/CAM reliably emitting them — and #37 shows the upstream signal itself can't yet be trusted — CareerCompass needs a periodic reconciliation check (e.g., nightly) that re-pulls each active officer's current status from POCDEX and flags any mismatch between "what CareerCompass thinks is true" and "what POCDEX currently says," rather than relying purely on push events. This is the piece entirely missing from Rama's original diagram, and it's the direct mitigation for the #37 failure mode: if a typed event is ever missed or malformed, reconciliation catches the drift instead of leaving a stale record indefinitely.

### 6. What stays unresolved until BOs and Huiting's team answer

- Exact effective-date semantics — does `effective_date` mean "when HR approved it" or "when it should take effect in CareerCompass"? These can differ, and the gap is the grace-period question (Question 1).
- Whether `movement_type` and event granularity above is even something HRPS/Cumulus can emit today, or whether Compass needs an interim manual/batch process until that capability exists — this needs a direct conversation with the POCDEX/TECQ team, not just BOs.
- Payload fields for competency/profile data carried across a transfer vs. wiped — ties back to the #18/#41 competency SSOT thread.

---

## Reality Check: What CAM Actually Covers (vs. the Typed-Event Proposal Above)

The typed-event model in the data flow above (Step 3) was drafted assuming CAM as a generic, flexible notification layer. CAM is in fact a specific, already-deployed system with its own fixed API contract (SCIM-based: Get/List/Disable/Remove User and Group) and its own trigger scenarios — not something we get to design from scratch. Worth reconciling our proposal against what CAM actually does before treating the six-event model as buildable.

**Mapping our movement types to CAM's real, native scenarios:**

| Our Movement Type | CAM's Native Coverage | Fit |
|---|---|---|
| **Exit** (resignation, retirement, termination, transfer to another agency) | Direct match — CAM's "Staff Exit" scenario removes account + access rights automatically, triggered by POCDEX sending the exit date | ✅ Full coverage, if Compass is onboarded as a CAM app |
| **Transfer** | Also falls under CAM's "Staff Exit" bucket — CAM treats "transfer to another agency" the same as resignation/retirement: remove access, full stop | ⚠️ Partial mismatch — CAM's binary remove doesn't distinguish "left the service" from "moved and should get new-agency access." Our proposed behaviour (revoke old, grant new) needs a second step CAM doesn't natively provide |
| **Department change within agency** | CAM's "Staff Change Department" scenario: retain account, trigger a review workflow, auto-remove access if review isn't completed within 7 calendar days | ⚠️ Different shape — CAM defaults to *retain-then-review*, not immediate reassignment. Useful precedent for Question 1 (grace period), but it's review-gated, not automatic re-provisioning |
| **Secondment** | Not a distinct CAM scenario at all — CAM only models exit and dept-change, both binary in outcome | ❌ Gap — CAM has no native concept of "temporary, dual-context access." Our proposed host-agency-view/auto-revert behaviour has no CAM equivalent |
| **Attachment** | Same as secondment | ❌ Gap |
| **Adjunct/inactive status** | CAM's NPL >90 days trigger is the closest match — disables account (not delete) after continuous No Pay Leave | ✅ Reasonably close fit — functionally similar to what we proposed for adjunct (suspend, retain data). But it's keyed on **NPL specifically**, not a general "adjunct" HR status — worth confirming these are the same concept, since the #37 officer wasn't necessarily on NPL |
| **Inactivity (>90 days, no login)** | CAM has a *separate* trigger for this, independent of HR status — disables based on `LastLoginDate` alone | New scenario we hadn't modeled — CAM disables even active, still-employed officers who simply haven't logged in. Compass inherits this automatically once onboarded to CAM |
| **Periodic access review** | CAM runs scheduled reviews (privileged accounts monthly/quarterly, non-privileged annually) independent of any movement event | New standing operational requirement not yet scoped — Compass would need System Owner and ARC (Access Review Coordinator) roles assigned for this to function |

**The core finding:** CAM gives us exit and adjunct-like coverage close to free, but has **no native concept of secondment or attachment** — the two movement types our proposed six-event model invents that CAM has no slot for. Building against CAM's real API means a Compass-side layer on top of (or independent of) CAM would still be needed for dual-context access — CAM's contract only supports Get/List/Disable/Remove, nothing that models "grant host-agency view while retaining home-agency identity."

**⚠️ This changes the Proposed Data Flow above.** The six-event model in Step 3 (`officer.secondment_started`/`ended`, `officer.attachment_started`/`ended`) is not buildable against CAM as it exists today — CAM has no mechanism to emit or act on these. Any handler built against those two event pairs (Step 4) is building against a contract CAM doesn't offer. Treat those four events as a Compass-side extension we'd need to build and maintain ourselves, not something CAM gives us — this is a real scope and ownership question, not just a naming detail.

**Is CAM onboarding for Compass even confirmed? This may be the actual blocking question.**

CAM has a real onboarding mandate and timeline for existing systems (Mode 1/WOG AD systems were due Dec 2022), but Compass is a new system standing up now, and **its CAM onboarding status isn't confirmed anywhere in current tracking.** Compass authenticates via WOG AD (open item #26), which is CAM's fastest onboarding tier for pre-existing systems — but no open item currently tracks whether Compass has a CAM onboarding request in flight, or a target date. Until this is confirmed, discussing which CAM-dependent behavior BOs want (Questions 1, 2, 7) is somewhat premature — if CAM isn't onboarded in time for MVP, none of CAM's native coverage (exit, adjunct/NPL) is available either, not just the secondment/attachment gap. **Recommend raising this with Rama/Pow Hwee before or alongside the BO conversation, not after it** — the answer changes how much weight the BO conversation's outcome can actually carry into MVP scope.

**Alternatives while CAM isn't confirmed ready for Compass:**

Options if CAM isn't live in time for MVP:

1. **Direct POCDEX polling (reconciliation-only), no CAM dependency.** This is the same mechanism already proposed in Step 5 above (nightly reconciliation) — it becomes the *primary* mechanism instead of a fallback if CAM isn't onboarded in time, not just a safety net for missed push events.
2. **Manual/admin-triggered deactivation as an interim control**, mirroring CAM's own exemption/waiver posture for agencies that can't onboard yet — an admin tool to manually suspend/reactivate an officer's account from an ad-hoc HR/POCDEX report, until CAM integration is live.
3. **Scope MVP without secondment/attachment differentiation.** Since CAM has no native model for these regardless of onboarding timeline, one honest option is to treat secondment/attachment as "no change" for MVP (officer keeps home-agency-only view) and flag this explicitly to BOs as a known gap, rather than building bespoke dual-context logic CAM won't support even later.

**⚠️ Update, per Rama's formal POCDEX data request doc ("Request for POCDEX Data for Career Compass"):** the above was written assuming CAM is out of scope entirely. Rama's document clarifies this is actually an **MVP-phase gap, not a permanent one** — CAM integration is explicitly planned for **post-MVP**. The confirmed MVP design is: real-time, on-demand POCDEX API call at WOG AD login, returning active-employment-only records, with no delta feed or scheduled sync. Officers who've left service are handled purely by the next login returning no active record — Compass "does not require any additional API, scheduled feed, or notification service from POCDEX for resigned or left-service officers" for MVP, deferring proactive status-change handling to CAM after MVP. This changes the framing above: alternatives 1-3 remain useful stopgaps, but the actual open question is no longer "will CAM ever arrive" — it's "what edge cases does the MVP login-gate design leave exposed until CAM lands post-MVP." See the new Edge Cases section below.

---

## Edge Cases in the MVP Design (Real-Time Login-Gated API Call)

These are concrete scenarios surfaced by reviewing Rama's actual POCDEX data request and its login-gated, active-only, no-CAM-until-post-MVP design. Unlike the policy questions above, most of these are technical or UX gaps that need a specific answer, not a BO preference.

| # | Edge Case | What Happens Today (per Rama's Design) | What Needs Defining |
|---|---|---|---|
| 1 | **Officer exits mid-session** — resignation processed while the officer has a live Compass session | No re-check happens until the next login; the current session isn't re-validated against POCDEX | WOG AD session/token lifetime — is the window short enough to be acceptable, or does Compass need a mid-session re-validation call? Needs an answer from Pow Hwee/Fabian, not a policy call. **Highest-priority, most concrete gap.** |
| 2 | **Officer on NPL, not exited** | The flow diagram has only one branch ("active employment found: yes/no") — an NPL officer likely falls into "No" and hits the same "access denied" state as someone who's actually left the service | Whether Compass can distinguish "on leave, temporarily inactive" from "permanently exited" using the fields POCDEX actually returns, and what the officer sees if not. Risks reproducing OTG's login-loop confusion as a silent lockout instead. |
| 3 | **Officer on secondment** | POCDEX returns `secondment = true`, but no logic in Rama's document consumes that flag | This is Question 2 above, now with a concrete trigger — needs a decision before this field starts flowing, or Compass defaults to home-agency-only with no confirmed BO sign-off. |
| 4 | **Officer double-hatting** (two concurrent roles) | POCDEX only sends **one position** with an `is_primary` boolean — no structured multi-position indicator exists | If Compass genuinely cannot detect double-hatting from the data it receives, this should be flagged as a known, permanent MVP limitation, not an open item to keep chasing. |
| 5 | **Officer-level status conflicts with employment-level status** | Unresolved in Rama's document — Huiting asked this exact question twice in review comments with no visible answer | Which status field the login gate actually checks, and what happens if an officer has one active and one inactive employment record simultaneously (e.g., mid-transfer). Needs a direct technical answer from Rama/Pow Hwee. |
| 6 | **Officer moves to a non-onboarded agency** | POCDEX likely still reports "active employment," but Compass has no ringfencing/opportunity rules for an unrecognized agency | This is Question 9 above — needs an explicit UX decision (locked out vs. "not yet available" message), not an unhandled fallthrough. |
| 7 | **POCDEX itself is wrong at call-time** (the #37 pattern, live-call version) | Compass fully trusts whatever POCDEX returns at the moment of the call — there's no local cache to reconcile against, so there's nothing to detect the disagreement | Architecturally, this can't be caught by a technical mechanism under the current call-time-only design — only a manual report/escalation channel can catch it. Worth confirming this is an accepted risk rather than something engineering is expected to solve. |
| 8 | **Multiple active employment records with a shifting primary designation** | The schema supports this (`is_primary`, `main_job_indicator`, `main_position_indicator` all exist for this reason), but no continuity behaviour is described | What Compass shows if the "primary" record changes between one login and the next — abrupt view change, or some continuity handling expected? |

**Priority if only a few can be chased now:** Edge cases #1 (session lifetime) and #5 (status-field conflict) have concrete, answerable technical questions raisable with Pow Hwee/Fabian/Rama this week. #3 and #6 depend on the BO conversation already in motion above. #4 and #7 are architectural limitations worth naming explicitly as accepted MVP risk rather than continuing to treat as open questions.

---

## Day-2 Operations (Draft — What Running This Actually Requires)

Shipping the data flow above is the easy part. This section covers what it takes to keep it working once it's live — the operational load this design creates, not just the initial build.

### Monitoring & alerting

- **Reconciliation mismatch alerts.** Every time the nightly reconciliation job (Step 5 above) finds a mismatch between CareerCompass's record and POCDEX's current status, that's a signal something's wrong upstream — this needs to page someone, not just log silently. Given #37 has been open since April with no one clearly monitoring for exactly this kind of drift, this is the single highest-value Day-2 control to put in place.
- **Missed/failed event alerts.** If a typed event (`officer.transferred`, `officer.suspended`, etc.) fails to process — bad payload, downstream error — that failure needs visibility. A queue of silently-dropped movement events is how a new version of #37 gets created. Note: per the Reality Check above, `officer.transferred` and `officer.suspended` (adjunct/NPL) map reasonably well to CAM's native Staff Exit and NPL-disablement triggers respectively — those alerts are meaningful today. Secondment/attachment events have no CAM equivalent, so any alerting for those would monitor a Compass-side mechanism we'd own outright, not a CAM integration point.
- **Volume/anomaly monitoring.** A sudden spike in `officer.exited` or `officer.suspended` events (e.g., a mass restructuring) is useful to know about operationally, separate from any individual event failing.

### Ownership and on-call

- **Who owns this pipeline day-to-day?** Right now #37 sits in a gap — "POCDEX / TECQ (Michelle tracking)" — which isn't a real operational owner. Before this ships, there needs to be a clear answer: does Pow Hwee's team own the CareerCompass-side handlers and reconciliation job? Does POCDEX/TECQ own upstream event delivery? What's the escalation path when a mismatch alert fires at 2am?
- **Runbook for common failure modes**, at minimum: (1) reconciliation finds a mismatch — what does the on-call engineer actually do — manually correct, or escalate to POCDEX/TECQ? (2) an event fails to process — replay it, or does replaying risk applying it twice? (3) an officer reports incorrect access — how do they raise it, and who has resolution authority?

### Data quality and manual correction

- **Manual override capability** (this is Question 10 from the BO list, made concrete): when POCDEX/HR data is confirmed wrong, someone needs the ability to manually correct an officer's CareerCompass status without waiting for the source system to fix itself — otherwise every case like #37 stays open indefinitely by default, exactly as it has since April.
- **Audit trail for manual corrections.** Any manual override needs to be logged (who, when, why) — this is standard practice for anything touching access control, and likely required by whatever data governance standard Huiting's team applies.

### Support and officer-facing operations

- **A defined process for officers who report a problem** (e.g., "I moved agencies and I still can't see the right opportunities," or the reverse — "I moved and I can still see my old agency's data"). Someone in the support chain needs to know this is a known category of issue with a runbook, not a one-off bug report each time.
- **Comms for planned mass movements** — e.g., a known organisational restructuring affecting many officers at once. Does support get advance notice so a spike in related tickets isn't mistaken for a system failure?

### Ongoing data governance

- **Recurring check-in on retention policy compliance** — once BOs and Huiting's team confirm a retention period for adjunct/exited officer data, someone needs to periodically confirm CareerCompass is actually purging/retaining on schedule, not just that the logic was correct at launch.
- **Periodic review of event-type coverage** — if HR ever introduces a new movement type not in the current event model (Step 3 above — noting that secondment/attachment events aren't CAM-native and would need their own Compass-side maintenance, per the Reality Check), there needs to be a known process to extend the model, rather than the new type falling into the same "doesn't fit the binary check" trap the original design had.

### What this section deliberately doesn't answer yet

Ownership assignment (Pow Hwee vs. POCDEX/TECQ vs. a shared model), alert thresholds/on-call rotation, and the manual-override tooling itself are all implementation decisions for engineering, not BOs — but the *existence* of an owner, a runbook, and an override capability are things worth confirming are in scope before this ships, not discovered after the next #37-style incident.

---

## If BOs Don't Have a Ready Answer

Likely, since this hasn't been raised with them before. Worth proposing a simplified default for them to react to — e.g., host-agency ringfencing during secondment, next-login sync, deactivate-but-retain for adjunct officers — so the conversation gives them something concrete to adjust rather than asking them to invent a policy from a blank page.

---

## Bringing BOs Up to Speed: No CAM in the Picture

Everything above (Questions 1-10) was originally framed without spelling out a key constraint: **Compass is not integrating with CAM.** That fact changes what a "safe" answer looks like for several of these questions, and BOs need to understand it explicitly before answering — not discover it later as a reason their earlier answer needs revisiting.

**Why this matters enough to explain upfront, not bury in a technical appendix:**

CAM is the government's standard system for automatically removing access when someone leaves or changes role — it's what most agency systems rely on to catch a departed officer's access before it becomes a problem. Compass doesn't have that. This means for several of the questions below, Compass itself is the *only* thing standing between a POCDEX error and an officer keeping access they shouldn't have (or losing access they should keep). There's no second system quietly catching a mistake in the background.

**Suggested way to introduce this, before walking through the questions:**

> "Before we go through these, one thing that changes how we should think about the answers: most government systems that manage staff access lean on a central system called CAM, which automatically removes or flags access when someone's employment status changes. Compass isn't hooked up to CAM. That means whatever we agree on here, Compass has to enforce entirely on its own — there's no backup system catching a slip. So a few of these questions are really asking: how much risk are we comfortable carrying ourselves, versus what we might have gotten 'for free' if CAM were in the picture?"

**Scenario-based walkthrough — use these to ground the abstract questions in something concrete:**

1. **The "officer already left, but Compass hasn't caught up yet" scenario.** Walk through: an officer resigns on a Monday. POCDEX takes up to 48 hours to reflect it (pending #56 confirmation). With CAM, a second system might independently flag "this officer hasn't logged in / is no longer in HR records" and disable access as a backstop. Without CAM, Compass's only protection is whatever we build ourselves — a manual check or a scheduled reconciliation job. Ask directly: **is a 24-48 hour window where a departed officer could still access Compass acceptable, given nothing else is watching for it?**

2. **The "POCDEX says one thing, HR system says another" scenario.** Walk through open item #37 concretely: an officer was marked adjunct in the source HR record, but POCDEX kept showing them as active, and the account kept getting recreated instead of staying off. This has been open since April with no fix. Ask directly: **if this happens to a Compass officer, who is responsible for noticing and fixing it, since there's no CAM layer that might catch the discrepancy independently?**

3. **The "officer's access needs manual correction" scenario.** Since there's no CAM to fall back on, any correction has to go through a tool and a person Compass builds and staffs itself. Ask directly: **is BOs comfortable that this correction path is entirely internal to Compass, with no external system providing a second check?**

**Guidance for facilitating the actual conversation:**

- Don't ask "are you okay with no CAM?" as an abstract yes/no — most BOs won't have the technical context to answer that meaningfully. Use the three scenarios above to make the tradeoff concrete first, then ask the specific question tied to each.
- Expect the instinct to say "just make it work like CAM would" — if that comes up, be direct that replicating CAM's behavior means Compass has to build and maintain that logic itself indefinitely, which is a real cost decision, not just a policy one. Worth naming that tradeoff explicitly rather than letting it pass as a given.
- If BOs push back on accepting any lag or risk at all, that's a legitimate signal Compass may need to revisit whether "no CAM integration" is actually viable for MVP, rather than something to talk them out of. Surface it as a real option, not something to smooth over.

---

## Suggested Framing for the Conversation

Lead with the **live bug (open item #37)** — it makes the ask concrete rather than hypothetical. Then walk through Questions 1-4 (core rules) before getting into Questions 5-6 (timing/technical constraints), since the technical feasibility should follow the business rule, not define it. Close with Question 10 (ownership) to make sure there's a clear escalation path if HR data itself is ever wrong.

**What "done" looks like after this conversation:**
- An explicit target end-state for adjunct/moved officers, to guide the #37 bug-fix work once root cause is confirmed.
- Clarity on whether same-day sync is a real requirement, so engineering isn't over- or under-building against an assumed SLA.
- Enough confirmed business rule to let Rama/Pow Hwee draft the join/leave API signaling design Huiting is waiting on — closing this loop unblocks both the BO ask and the Huiting response in one pass.

---

*Generated: 2026-07-10*
*Related: [open-items.md #37](../../../../PM-skills-ALL-1/00-hub/open-items.md), [open-items.md #56](../../../../PM-skills-ALL-1/00-hub/open-items.md) (POCDEX sync cadence), open item #55 (Huiting data requirements), [2026-07-06 Huiting thread](../meeting-notes/2026-07-06-W28-huiting-data-requirements-teams-message.md), [2026-07-07 Huiting discussion](../meeting-notes/2026-07-07-W28-huiting-data-requirements-discussion.md), [POCDEX-OTG as-is](2026-07-10-W28-pocdex-otg-as-is.md), [POCDEX-CAM as-is](2026-07-10-W28-pocdex-cam-as-is.md)*
