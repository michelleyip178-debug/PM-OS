---
product: CareerCompass (OTEP)
feature: R1 — Epics A, B, C (Must-have floor) + Epic D (Should-have) + Epic E (Should-have, infra)
date: 2026-07-06
owner: Michelle Yip
type: job-stories
parent-prd: outputs/prds/2026-07-07-W28-careercompass-r1-prd.md
personas: outputs/research-synthesis/2026-07-06-W28-r1-user-personas.md
status: draft — pending Mark sign-off (#40); several stories flagged against unresolved PRD blockers; Epic D flagged as scope-risk (first cut candidate); Epic E added 2026-07-06 to close a gap where it was missing from job stories despite being in the parent PRD's five-epic scope
---

# R1 Job Stories — Epics A, B, C, D, E

Job stories for R1's three Must-have epics plus the conditional Epics D and E, written against the situations named in the PRD's own journey lanes (Lane 1 — Intentional Mover, Lane 2 feeding Lane 1, Lane 3 — Posting Manager) and the [R1 personas](../research-synthesis/2026-07-06-W28-r1-user-personas.md). Epic E has no dedicated persona lane — it's infrastructure underneath Epic B's pre-fill and Epic A's tagging, not a standalone user-facing journey.

**Format note:** These are job stories (`When... I want... so I can...`), not the `As a / I want / So that` role-based format used in MVP story files (e.g. `auth.md`). Job stories are used here deliberately — R1's core insight (per the personas doc) is that the *situation* triggering each epic matters more than the role: an Intentional Mover applying under time pressure needs a different design lens than a Posting Manager mid-cycle.

**Blocker flag convention:** Stories built against unresolved PRD scope carry a `⚠️ BLOCKED` tag naming the exact open item. Don't groom these until the named blocker resolves — this mirrors the effort-sizing analysis's warning not to size the "unknown" bucket as if it were already clear.

---

## Epic A — Opportunity Creation

*Serves: Posting Manager persona. PRD readiness gate: agency-admin auth undefined — no story below can move to grooming until that resolves.*

### A1 — Publish a New Posting

**Title:** Publish a posting without a manual workaround

**Description:** When a new development posting opens up in my agency's programme cycle, I want to create and publish it directly in CareerCompass, so I can make it visible to officers without emailing a spreadsheet update to another team or waiting on OTG.

**Design:** _TODO: Figma link — Epic A creation form, not yet designed per PRD_

**Acceptance Criteria:**
1. When I start a new posting, the form asks for opportunity type (Internal Job, Secondment, STIP, or Gig — PSFG excluded pending WD sign-off, see Open Questions #1 in the parent PRD) before showing type-specific fields.
2. The system requires competency tagging (OCC-aligned) before the posting can be published — per Epic A's "data front door" design principle, this is not optional metadata.
3. Once published, the posting appears on the officer-facing listing within the same session, with no manual sync step.
4. I can save a draft and return to finish it later without losing entered fields.
5. If I try to publish without required fields (type, title, competency tags, closing date), I see field-specific errors, not a generic submit failure.
6. ⚠️ **BLOCKED — agency-admin auth undefined.** This story cannot be groomed until the PRD's Epic A readiness gate (who these users are, how they authenticate) is resolved with Pow Hwee/Fabian.

---

### A2 — Edit or Close a Live Posting

**Title:** Update or close a posting as circumstances change

**Description:** When a posting's details change or it's been filled ahead of its closing date, I want to edit or close it directly in CareerCompass, so I can keep the listing accurate without officers applying to something that's no longer live.

**Design:** _TODO: Figma link_

**Acceptance Criteria:**
1. When I edit a live posting, changes reflect on the officer-facing detail page without requiring a republish step.
2. When I close a posting early, it's removed from the active listing immediately, and any in-progress applicant sessions see an "opportunity closed" state rather than a broken link.
3. Closing a posting does not delete existing application records — those remain visible to me under Epic C's tracking view.
4. I can distinguish between "closed — filled" and "closed — cancelled" when I close it, since this affects officer-facing messaging.
5. Edge case: if an officer has an in-progress (unsubmitted) application when I close the posting, they see a clear message rather than a silent failure on submit.

---

### A3 — Structure Competency Data at the Point of Creation

**Title:** Tag competencies once, at creation, not as an afterthought

**Description:** When I'm creating a posting, I want to tag its required competencies against the OCC framework at the same time I set the other fields, so I can avoid a separate tagging pass later and give officers (and later, agency dashboards) structured data from day one.

**Design:** _TODO: Figma link_

**Acceptance Criteria:**
1. The creation form surfaces a competency-tagging step inline, not as a follow-up task after publish.
2. Tagged competencies immediately feed the officer-facing detail page's competency display.
3. The system flags if I publish with zero competencies tagged, since untagged postings recreate the same missing-competency-data gap the PRD flags as already occurring on C@G-ingested jobs.
4. ⚠️ **Open problem, not yet solved (per parent PRD):** manual tagging may not scale across every author and opportunity type. This story ships the manual-tagging mechanism only — it does not include any inference or auto-suggestion (that's a distinct, unsized idea tracked separately as open item #54).

---

## Epic B — Streamlined Apply + Smart Pre-fill

*Serves: Intentional Mover persona (Lane 1) and, as an on-ramp, the Passive Watcher (Lane 2). PRD dependency: competency SSOT contract (#18/#41) between Léo and Kingsley must finalize before pre-fill quality is guaranteed.*

### B1 — Apply Without Leaving CareerCompass

**Title:** Submit an application natively, no external redirect

**Description:** When I find an opportunity I want to apply to, I want to complete the entire application inside CareerCompass, so I can avoid the jarring handoff to FormSG and the momentum loss the PRD names as "the redirect."

**Design:** _TODO: Figma link — native apply form_

**Acceptance Criteria:**
1. Clicking Apply opens an in-Compass form — no external site, no new tab, no FormSG redirect.
2. I can complete and submit the entire application without leaving CareerCompass at any point.
3. On submit, I receive a confirmation with a reference number I can use to track status later.
4. If I navigate away mid-form, my entered data is preserved when I return (ties into Epic D's resume-application half, if that scope lands).
5. Edge case: if the posting closes while I'm mid-form, I see a clear message before I attempt to submit, not a failure after.
6. Instrumentation: form-section abandonment is tracked from day one, per the PRD's "ready to pull into stories now" candidate-idea recommendation.

---

### B2 — Apply With Pre-filled Profile Data

**Title:** Skip retyping what CareerCompass already knows

**Description:** When I open the apply form, I want my competencies and work history already filled in from my OTEP profile, so I can review and adjust rather than retype information the platform already has.

**Design:** _TODO: Figma link_

**Acceptance Criteria:**
1. When I open the apply form, competency and work-history fields are pre-populated from my OTEP profile.
2. I can edit any pre-filled field before submitting — pre-fill is a starting point, not a lock.
3. If pre-fill data is stale or missing (e.g. profile not yet synced), the form clearly indicates which fields need my manual input rather than silently leaving them blank.
4. ⚠️ **BLOCKED — competency SSOT contract not finalized (open items #18/#41).** Per the parent PRD's explicit guardrail, stale or incorrect pre-fill must not increase form abandonment versus the no-pre-fill baseline — this story should not be marked ready until Léo and Kingsley confirm the endpoint contract.
5. Pre-fill accuracy is instrumented separately from general form abandonment, since the PRD treats pre-fill trust as a signal that affects officer trust in competency data platform-wide, not just this form.

---

### B3 — Add Context Beyond the Pre-filled Profile

**Title:** Add a motivation statement the profile can't capture

**Description:** When my profile data alone doesn't make my case for a specific opportunity, I want to add a free-text motivation statement, so I can explain why I'm a fit in my own words alongside the structured data.

**Design:** _TODO: Figma link_

**Acceptance Criteria:**
1. The apply form includes an optional (or required, pending Amber's design) free-text field for a motivation statement.
2. Character limits and formatting are clearly indicated before I start typing, not discovered on submit failure.
3. This field is visible to the Posting Manager alongside my pre-filled profile data in their applicant view (Epic C).
4. This is explicitly the only unstructured, non-profile-driven part of the form — the PRD's Non-Goals confirm pre-fill stays profile-driven only, no CV upload or CIE inference in R1.

---

## Epic C — Status Tracking

*Serves: Intentional Mover persona (officer-facing side) and Posting Manager persona (manager-facing side — new scope per D-030). No ATS in the loop; OTEP owns the full state machine natively.*

### C1 — See My Application Status Without Following Up

**Title:** Check status inside CareerCompass instead of emailing to ask

**Description:** When I've submitted an application and I'm waiting to hear back, I want to see its current status inside CareerCompass, so I can avoid the "status black hole" and the awkward, slow email follow-up the PRD names as today's only option.

**Design:** _TODO: Figma link — officer status view_

**Acceptance Criteria:**
1. A "My Applications" view shows every application I've submitted with its current status: Submitted, Under Review, or Outcome.
2. Status updates reflect within 24 hours of the posting manager's action inside OTEP (⚠️ this latency target still needs Adrian's explicit sign-off per the parent PRD — the measurement point changed from an ATS event to an in-OTEP action).
3. The status view is a timeline, not just a single badge — per the PRD's "ready to pull into stories now" candidate-idea recommendation.
4. When status moves to "Outcome," I receive a notification (push or in-app) rather than needing to check manually.
5. If an outcome is a rejection, the messaging is designed with care — the PRD flags the rejection/outcome screen as "the most emotionally sensitive surface in the release," requiring its own design pass, not an afterthought bolted onto the state machine spec.

---

### C2 — Move an Applicant Through the Review Process

**Title:** Update applicant status directly in CareerCompass, no external system

**Description:** When I'm reviewing applicants for my posting, I want to move each one through Submitted → Under Review → Outcome directly inside CareerCompass, so I can manage the whole process in one place without an ATS or a separate spreadsheet.

**Design:** _TODO: Figma link — manager-facing status-update UX, explicitly undesigned as of parent PRD_

**Acceptance Criteria:**
1. I see a list of applicants per posting, with their current status and submission date.
2. I can move an applicant's status forward (Submitted → Under Review → Outcome) with a direct action in the UI — no external system, no manual email to trigger the officer-facing update.
3. Status changes I make are reflected on the officer's "My Applications" view within the 24-hour target (pending Adrian's sign-off on what this measures).
4. The terminal "Outcome" transition requires a confirm step, since it's irreversible and outcome-facing to the officer — per the candidate-ideas analysis, this needs a "quick resolve first" on the confirm-step design.
5. ⚠️ **BLOCKED — this entire manager-facing workflow is undesigned scope, flagged Red risk in the parent PRD.** It did not exist under the prior ATS-integration plan (World A) and needs its own design and sizing pass before Epic C grooming opens.

---

### C3 — See Applicant Profile Data Without Guessing at Fit

**Title:** Assess applicants using structured data, not self-reported text alone

**Description:** When I'm deciding who to move forward in the review process, I want to see each applicant's competency profile alongside their application, so I can make a defensible shortlisting decision without relying only on what they typed into a free-text field.

**Design:** _TODO: Figma link_

**Acceptance Criteria:**
1. Each applicant's view shows their pre-filled competency and work-history data (from Epic B) alongside any motivation statement they added.
2. I can see whether an applicant's profile data was pre-filled-and-unedited versus pre-filled-and-adjusted, since edited fields may carry different weight in my assessment.
3. If an applicant's profile lacks competency data entirely (e.g. still gated on the SSOT contract, open items #18/#41), the view surfaces that gap explicitly rather than showing an empty field with no explanation.
4. This story depends on Epic B's pre-fill quality — if B2 above is blocked, this story's data is only as good as whatever an officer typed manually.

---

## Epic D — Saved Jobs

*Serves: Passive Watcher persona (Lane 2), as the on-ramp into the Intentional Mover's Lane 1. Scope status: "Should," not "Must" — the PRD names this as the first epic cut under scope pressure. Only the "save" half is confirmed for R1; the "resume an in-progress application" half is gated behind MVP abandonment data.*

### D1 — Save an Opportunity for Later

**Title:** Bookmark an opportunity without committing to it yet

**Description:** When I find an opportunity that looks interesting but I'm not ready to act on it, I want to save it, so I can come back to it later without losing track or re-finding it from scratch.

**Design:** _TODO: Figma link_

**Acceptance Criteria:**
1. From the opportunity listing or detail page, I can save an opportunity with a single action (no multi-step flow).
2. Saved opportunities appear in a dedicated "Saved" view, separate from the general listing.
3. I can unsave an opportunity from either the listing/detail page or the Saved view itself.
4. Saving an opportunity does not require starting an application — this is a low-commitment action, distinct from Epic B's apply flow.
5. If a saved opportunity closes before I act on it, it remains visible in my Saved view with a clear "closed" state, rather than silently disappearing.

---

### D2 — Get Nudged Before a Saved Opportunity Closes

**Title:** Don't let a saved opportunity close without warning

**Description:** When an opportunity I've saved is approaching its closing date, I want to be nudged, so I can make a decision instead of finding out later that it's already closed.

**Design:** _TODO: Figma link_

**Acceptance Criteria:**
1. I receive a nudge (push or in-app) when a saved opportunity is a defined number of days from closing (e.g., "closes in 3 days" — exact threshold TBD).
2. The nudge links directly to the opportunity, not just to the general Saved view.
3. I don't receive duplicate nudges for the same opportunity within the same closing window.
4. If I've already started or completed an application for the saved opportunity, I don't receive a nudge to act on it again.
5. ⚠️ **Scope note:** this story has no committed R1 metric yet (per the personas doc's cross-persona table) — define a target (e.g., saved-to-applied conversion rate) before this is sized, not after.

---

### D3 — Resume an In-Progress Application (conditional)

**Title:** Pick up a started application where I left off

**Description:** When I navigate away from an in-progress application before submitting, I want to resume it later exactly where I left off, so I don't have to redo work I already completed.

**Design:** _TODO: Figma link_

**Acceptance Criteria:**
1. If I leave an in-progress application (per Epic B1's AC4), my entered data is preserved and retrievable from the Saved view or "My Applications."
2. Resuming shows me the form pre-populated with my previously entered data, not a blank form.
3. If the underlying opportunity has closed since I started, I see a clear message rather than being able to resume into a dead end.
4. ⚠️ **BLOCKED — conditional scope.** This story is explicitly gated behind MVP abandonment data: it only enters R1 scope if mid-form drop-off exceeds 40%. Don't groom this until that data threshold is confirmed one way or the other.

---

### D4 — Move From a Saved Opportunity Into the Apply Flow

**Title:** Go from "saved" to "applying" without starting over

**Description:** When I decide to act on a saved opportunity, I want to move straight into the apply flow from my Saved view, so the transition feels like continuing a thought, not starting a new task.

**Design:** _TODO: Figma link_

**Acceptance Criteria:**
1. From the Saved view, I can launch directly into Epic B's apply flow for that opportunity, without returning to the general listing first.
2. The apply experience from this entry point is identical in speed and quality to applying directly from the listing (no degraded path for saved-opportunity entrants).
3. Once I've applied, the opportunity is removed from "Saved — not yet applied" and reflected in "My Applications" (Epic C) instead, so it isn't tracked in two places at once.
4. This is the mechanism the PRD's own journey lane refers to as "decides to apply. Joins Lane 1." — instrument this transition specifically (saved → applied conversion), since it's currently unmeasured.

---

## Epic E — Competency Management v1

*Serves no single R1 persona directly — this is infrastructure underneath Epic B's pre-fill (officer-facing) and Epic A's competency tagging (agency-facing). No R1 personas doc covers this epic; it doesn't have a face-to-face journey lane the way A-D do. Scope status: "Should," read-only sync only. Write-back is a "Could," explicitly gated behind Core #31 (POCDEX write path) reopening.*

**PRD scope note:** Unlike Epics A-D, the parent PRD gives Epic E a single scope-boundary line, not a detailed spec: "Read-only sync (moderate lift) vs. read + write-back (high lift, re-opens POCDEX write path Core #31). Confirm with Imelda / Daryll before grooming." The stories below are written against the read-only floor, since that's the only half currently approvable as scope.

### E1 — Keep Officer Competency Data Current from HR Systems

**Title:** Sync competency data from HRPS/Cumulus/POCDEX without manual re-entry

**Description:** When an officer's competency record changes in an upstream HR system (HRPS, Cumulus, or POCDEX), I want CareerCompass to reflect that change, so I can trust that pre-filled application data (Epic B) and tagged postings (Epic A) are working from current information, not a stale snapshot.

**Design:** _TODO: architecture spec — sync direction, frequency, and conflict handling not yet defined_

**Acceptance Criteria:**
1. Competency data sourced from HRPS/Cumulus/POCDEX is readable within CareerCompass without manual officer re-entry.
2. Sync is one-directional (read-only) — CareerCompass does not write changes back to any upstream HR system in this story.
3. If an upstream system is unavailable during sync, CareerCompass falls back to the last successfully synced data rather than showing a blank or error state to the officer.
4. Sync latency (time between an upstream change and it appearing in CareerCompass) is measured and reported, even before a target SLA is set.
5. ⚠️ **BLOCKED — scope boundary unconfirmed.** This story cannot be sized until Imelda/Daryll confirm read-only is in fact the full R1 scope, not a placeholder pending a write-back decision. Per the parent PRD, this confirmation is required "before grooming."

---

### E2 — Surface Data Freshness to Downstream Epics

**Title:** Know whether competency data is fresh or stale before trusting it elsewhere

**Description:** When Epic B's pre-fill or Epic A's competency tagging displays officer competency data, I want the system to know whether that data reflects the latest sync or a stale copy, so downstream epics can make an informed choice about whether to trust it or flag it.

**Design:** _TODO: no design surface named yet — this may be an internal/system-level story rather than an officer-facing screen_

**Acceptance Criteria:**
1. Every competency record surfaced by Epic E carries a last-synced timestamp, accessible to Epic B and Epic A even if not shown directly to the officer or manager.
2. If a sync has failed or is significantly overdue, downstream epics (B's pre-fill, A's tagging) can detect this rather than silently trusting stale data.
3. This story exists specifically to support Epic B's own guardrail — that stale pre-fill must not increase abandonment versus the no-pre-fill baseline — by giving Epic B a signal to act on, not just a data feed to trust blindly.
4. This does not include a UI for officers or managers to view sync status directly; it's an internal signal for other epics, not a new officer-facing surface.

---

### E3 — Write-Back (Conditional, Not R1 Floor)

**Title:** Let CareerCompass push officer-confirmed corrections back to source systems

**Description:** When an officer corrects or updates a competency in their CareerCompass profile, I want that correction to sync back to the authoritative HR system, so the correction doesn't have to be re-entered separately in HRPS, Cumulus, or POCDEX.

**Design:** _TODO: not designed — this is Could-bucket scope, not committed_

**Acceptance Criteria:**
1. ⚠️ **BLOCKED — Could-bucket, not R1 floor.** Per the parent PRD's MoSCoW, this only enters scope "if POCDEX write path unblocks." It re-opens Core #31, the same blocker family already gating Epic A's criteria authoring (also deferred to R1.5 for the same reason).
2. Do not size or design this story until Core #31 status changes — treating it as R1-adjacent work risks the same "unknown bucket treated as known" mistake the effort-sizing analysis already flagged for Epics A/B/C.
3. If Core #31 unblocks, this story should be re-scoped fresh rather than assumed to inherit E1's read-only architecture unchanged — write-back typically carries validation and conflict-resolution requirements that a read-only sync does not.

---

## Cross-Epic Dependency Notes

- **A1 and every Epic A story are blocked on the same gate:** agency-admin auth. Nothing in Epic A can be groomed until Pow Hwee/Fabian confirm who these users are and how they log in.
- **B2 and C3 share the same upstream blocker:** the competency SSOT contract (#18/#41). Sourcing sign-off has already resolved *where the data comes from* (Imelda's workstream, confirmed 2026-07-05) — what's still open is the endpoint payload spec between Léo and Kingsley, which gates pre-fill quality specifically.
- **C2 is the single largest unscoped item across all three epics.** Per the effort-sizing analysis, this is one of three "hardest and least optional" pieces hiding in R1's unknown bucket (alongside A1's auth gate and B2's pre-fill). Don't let sprint planning treat C2 as smaller than C1 just because the state machine itself (C1's backend) is simpler to spec.
- **C1's rejection/outcome messaging (AC5) and C2's confirm-step (AC4) are the same design surface** — Amber should scope them together, not as two separate reviews, since one is the officer-facing view of the other's action.
- **Epic D is a scope-risk dependency, not a technical one.** Unlike A, B, and C, nothing blocks D1/D2 today — the risk is that Epic D gets cut entirely under scope pressure (PRD names it the first cut candidate). If cut, D4's saved-to-applied handoff disappears, and Lane 1 (Persona 1) only receives first-time, high-intent entrants with no funnel-widening on-ramp.
- **D3 is separately gated** behind MVP abandonment data (>40% mid-form drop-off threshold) and ties directly to B1's AC4 (preserving mid-form data on navigate-away) — don't size D3 until that data threshold is confirmed.
- **Epic E underlies Epic B's core trust guarantee.** B2's pre-fill accuracy and E1/E2's sync freshness are the same data pipeline viewed from two epics. If Epic E's scope (read-only vs. write-back) isn't confirmed before Epic B grooming, B2 risks being sized against an assumption about data freshness that Epic E hasn't actually committed to yet.
- **E3 (write-back) and Epic A's criteria authoring share the same blocker** (Core #31, POCDEX write path) — both are deferred for the identical reason. If Core #31 unblocks, re-evaluate both together rather than as two separate asks.

---

*Source: R1 XFN Kickoff PRD, R1 user personas, R1 effort-sizing analysis, R1 candidate-ideas ICE prioritization.*
*Next: These stories are not ready for grooming as a set — Epic A is fully gated on agency-admin auth, and Epic C's C2 needs its own design pass before any of Epic C is sized. Epic B stories (B1, B3) are the least blocked and could enter grooming first if Mark's sign-off lands 9 Jul as planned. Epic D (D1, D2) has no technical blockers and could groom alongside Epic B, but shouldn't be sized as committed scope until the Should-vs-Must scope call is made — grooming it doesn't guarantee it ships. Epic E (E1, E2) is blocked on the same read-only-vs-write-back scope confirmation the parent PRD already calls for (Imelda/Daryll) — don't groom Epic B's pre-fill stories as fully ready until this lands, since B2's trust guarantee assumes E's data pipeline is settled.*
