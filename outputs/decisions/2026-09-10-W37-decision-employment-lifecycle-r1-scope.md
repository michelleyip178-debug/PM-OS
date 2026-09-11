---
title: "Decision Doc — Employment Lifecycle Handling: R1 Scope + Competency Preference Rules"
date: 2026-09-10
week: 2026-W37
owner: Michelle Yip
status: Proposed — for Adrian Ang sign-off, joint Product position with Imelda
decision_deadline: 2026-09-11 (async confirm), locked at R1 grooming
format: DACI + scope decision
related:
  - Confluence "Employment Profile- Business Requirements" (page 2645166214, v9)
  - outputs/analyses/2026-09-10-W37-employment-profile-brd-analysis.md
  - outputs/decisions/2026-08-18-W34-competency-recalculation-on-profile-change.md
  - OTEP-1487 (exclude hidden role-based competencies from matching)
  - outputs/research-synthesis/2026-09-10-W37-r1-admin-portal-discovery.md (Theme 6 — secondment marker)
---

# Decision Doc — Employment Lifecycle Handling: R1 Scope + Competency Preference Rules

## TL;DR

**Decision:** Three linked calls on how Career Compass handles officer employment lifecycle events (promotion, transfer, secondment, forward deployment, double-hatting) after MVP:
1. **R1-v1 scope line** — what ships first vs. what defers.
2. **Competency hide/show preference** across a role change — carry over, or re-prompt.
3. **Secondment / forward-deployment display values** — which agency, email, designation the officer sees.

**Recommendation:**
1. **R1-v1 = identity resolution + profile sync + role-change (keep one position).** Defer secondment, forward deployment, double-hatting to R1.x.
2. **Carry the officer's existing hide/show preference over by default** when a competency moves between role-based and self-declared. Show a non-blocking review prompt on next login. (Option B.)
3. **During secondment/forward deployment, display the host/new agency + host email + new designation**, with the parent agency retained only for ring-fencing. Confirm home-email persistence with WD.

**Impact:** Unblocks R1 grooming (currently blocked — the BRD has ~20 open questions and can't be sized). Resolves the OTEP-1487 assumption before it ships on a default. Closes the "employment-lifecycle scope-cut" item that has carried 5 working days.

**Reversibility:** Two-way door on scope (can pull secondment forward later). One-way-ish on the competency-preference rule once officers experience it — a later change means re-disrupting their hidden lists. Decide it deliberately.

---

## DACI

| Role | Who |
|---|---|
| **Driver** | Michelle Yip (owns this doc + the scope proposal) |
| **Approver** | Adrian Ang (primary decision authority for the programme) — via Jace |
| **Contributors** | Imelda (owns officer-profile + competency logic; co-owns the BRD), Pow Hwee (tech lead — feasibility of identity resolution + profile sync), Xian Zhang / Jacky (business — officer UX, scope), WD (POCDEX representation of scenarios), Johnny Lim / POCDEX (secondment indicator, forward-deployment identifiability) |
| **Informed** | Rama (perf-test scenario design — double-hatting deferral affects the 16 Sep run), R1 grooming attendees, Rathika (matching-logic risk) |

---

## Context

### Why we're making this decision

Career Compass today assumes **one employment record per officer** and uses **email as the primary identifier**. Post-MVP, officers hit lifecycle events — promotion, transfer, secondment, forward deployment, double-hatting — that change their POCDEX data (email, grade, agency, position ID, job ID, competency sets). The "Employment Profile- Business Requirements" Confluence page (v9, last edited 2026-09-09 by Imelda) captures the scenarios and the intended Compass behaviour.

**What triggered this:**
- R1 grooming is scheduled (Sept) and this epic is in scope for it.
- The BRD is a working alignment draft, not a spec: the Section 1 data-change table is explicitly "Needs validation from WD and POCDEX", and ~20 open decisions are embedded in the requirements column, most with two options and no answer.
- OTEP-1487 ("exclude hidden role-based competencies from matching") is unassigned in the backlog and about to be built on the assumption that `isHidden = true` means excluded — while this BRD hasn't decided whether `isHidden` even survives a role change.
- The "employment-lifecycle scope-cut confirmation" has been an open action item in daily plans for 5 working days.

**Current state:**
- MVP handles the single-employment, stable-identity case only.
- A related W34 draft (`competency-recalculation-on-profile-change.md`) already proposed "recalculate, don't merge" + "keep the old snapshot, dated" for competency handling on job change, with 5 open risks for Imelda's squad. That draft is unresolved and this decision builds on it.
- PSD Architecture Office's CMM (Competency Management Module) proposal would split competency records by owner (self-assessed → Compass, RO-endorsed → HR systems). Not confirmed whether Compass consumes CMM IDs before or after MVP freeze.

### Scope

**In scope for this decision:**
- The R1-v1 vs. R1.x line for the employment-lifecycle epic.
- The competency hide/show preference rule on role change (BRD open question, appears 4+ times).
- The identity/display values shown during secondment and forward deployment.

**Out of scope (separate decisions / owners):**
- The detailed competency recalculation logic — Imelda's squad (tracked in the W34 draft).
- Whether Compass consumes CMM competency IDs and when — Pow Hwee / Architecture Office.
- The admin-side SJR/secondment marker question — covered in the R1 admin-portal synthesis (Theme 6); **shares the underlying POCDEX `secondmentIndicator` field**, so decide the POCDEX-confirmation step once and apply to both.
- Front-end changes to show multiple positions (double-hatting UI) — deferred with the scenario.

### Constraints

- **Technical:** Forward deployment has no confirmed POCDEX marker; the BRD asks whether it can be identified "through a mixture of data points." Identity resolution across email + NRIC change needs a match approach Pow Hwee has not yet designed.
- **Data classification:** Matching officers on NRIC (fallback identifier when email changes) needs security sign-off.
- **Timeline:** R1 grooming is the forcing function. Async confirm target 11 Sep; locked at grooming.
- **Upstream:** Section 1 BRD table needs WD + POCDEX validation. Validating all 24 rows is not feasible pre-grooming; only the promotion / transfer / redesignation rows are needed for R1-v1.

---

## DECISION 1: R1-v1 Scope Line

### The decision
Which employment-lifecycle scenarios ship in R1-v1, and which defer?

### Options

#### Option 1A: Full epic in R1-v1 (all six scenario groups)
- **Pro:** Complete lifecycle coverage at one go; no "why doesn't secondment work" gaps for pilot officers who get seconded.
- **Pro:** One design/build effort rather than revisiting the area twice.
- **Con:** ~20 open decisions, an unvalidated upstream table, and forward deployment with no known POCDEX marker. Not groomable now; grooming would stall on open questions.
- **Con:** Double-hatting adds a second active position to the recommendation path — the same path flagged as the top perf/scalability risk on 9 Sep (tier-3 lateral, ~30k roles, app-tier over-fetch). Building it now collides with the 16 Sep perf test.
- **Cost:** Multi-sprint; blocked on WD/POCDEX discovery for secondment + forward deployment.
- **Assumption:** WD and POCDEX can turn around full Section 1 validation + forward-deployment identification in time. No evidence for this.

#### Option 1B (RECOMMENDED): Foundation + role-change in R1-v1; defer the rest
**In R1-v1:**
- **Identity resolution** — match an officer across email / NRIC / agency change so a lifecycle event never spawns a new profile.
- **Profile sync** — apply latest eligible POCDEX state to profile fields.
- **Role change, keep one position** (promotion, redesignation, transfer) — profile update + competency move rules + recommendation recalc + ring-fence on new grade/agency + Report Issue reset.

**Defer to R1.x:**
- Secondment (display rules unresolved; parent-agency ring-fencing is new logic).
- Forward deployment (no confirmed POCDEX marker — needs discovery first).
- Double-hatting start/stop (recommendation logic + 2-grade ring-fencing undesigned; definition still "TBC"; multiplies the perf-test matching risk).

- **Pro:** Groomable now. Only 3 open questions on the role-change path, all closable in one WD session. Behaviour is ~80% defined in the BRD already.
- **Pro:** Delivers the highest-value single piece first — officers stop losing their profile on a transfer (the most common lifecycle event).
- **Pro:** Keeps double-hatting out of the perf-test window; perf-test journeys can safely assume one active position per officer.
- **Con:** A pilot officer who gets seconded during R1-v1 sees stale agency/designation until R1.x. Mitigation: pilot cohort is small (6 agencies); flag secondment cases for manual review.
- **Con:** Two-phase design effort in the profile area.
- **Cost:** Fits R1 planning; foundation stories are contained; role-change is mostly spec'd.
- **Assumption:** WD can validate the promotion/transfer/redesignation rows of the Section 1 table and answer 3 role-change questions before grooming.

#### Option 1C: Foundation only (identity + profile sync), no scenario behaviour
- **Pro:** Smallest, safest first slice; unblocks everything downstream.
- **Con:** Doesn't actually handle any lifecycle event — an officer who gets promoted sees updated profile fields but stale competencies and recommendations. Half a feature.
- **Cost:** Minimal.
- **Assumption:** Acceptable to ship identity/sync without the behaviour that makes it useful. Weak — the value is in the scenario handling.

### Decision criteria

| Criterion | Weight | 1A Full | 1B Foundation + role-change | 1C Foundation only |
|---|---|---|---|---|
| Groomable / sizable now | High | 2/10 | 8/10 | 9/10 |
| Officer value in R1-v1 | High | 9/10 | 7/10 | 3/10 |
| Perf-test risk (16 Sep) | High | 3/10 | 8/10 | 9/10 |
| Upstream dependency risk | High | 2/10 | 7/10 | 8/10 |
| Avoids rework | Medium | 8/10 | 5/10 | 5/10 |
| **Weighted total** | | **~3.9** | **~7.2** | **~7.0** |

### Recommendation: Option 1B

1. **It's the only option that's groomable now.** 1A stalls grooming on 20 open questions; 1C ships something that doesn't handle a lifecycle event end to end.
2. **It front-loads the highest-value, best-understood scenario.** Transfer/promotion is the most common event and the BRD already specs ~80% of the behaviour. Secondment and forward deployment are genuinely under-discovered.
3. **It protects the perf test.** Double-hatting deferred means the 16 Sep run assumes one active position — no new multi-position load on the tier-3 lateral path during the launch gate.

**Confidence:** High (80%). Would reach very high if WD confirms the promotion/transfer/redesignation rows and the 3 role-change questions before grooming.

**What if we're wrong:** If a meaningful number of pilot officers get seconded during R1-v1 and the manual-review workaround doesn't hold, pull secondment forward into R1.x sooner. Two-way door — the deferral is a sequencing choice, not a cancellation.

---

## DECISION 2: Competency Hide/Show Preference on Role Change

### The decision
When a competency moves between role-based and self-declared because the officer changed roles, does the officer's existing hide/show preference carry over, or do we re-prompt?

### Why this matters
- The BRD asks this **4+ times** (role change, secondment, forward deployment, double-hat) and never answers it.
- **OTEP-1487** depends on it: that ticket excludes hidden role-based competencies from matching, assuming `isHidden = true` = excluded. If a role change silently resets `isHidden`, OTEP-1487's behaviour changes under the officer's feet.
- It touches the officer's sense of agency over their own profile — a wrong call feels like the system overriding them.

### Options

#### Option 2A: Reset preference — re-prompt the officer to decide hide/unhide on next login
- **Pro:** BRD's own framing: "maybe he really feels he got the competency suddenly after changing role" — a role change is a natural moment to re-evaluate.
- **Pro:** Clean state; no stale preferences carried against competencies that changed category.
- **Con:** Every role change forces the officer through a hide/unhide review even if their view hasn't meaningfully changed. Friction on an event they didn't initiate.
- **Con:** Between the change and the officer completing the re-prompt, `isHidden` state is undefined — OTEP-1487 matching has no clean input.
- **Con:** Officers who ignore the prompt (most will) leave competencies in an unset state.

#### Option 2B (RECOMMENDED): Carry the preference over by default; show a non-blocking review prompt
- When a competency moves category, its `isHidden` value moves with it.
- On next login, show a non-blocking notification: "Some of your competencies moved to additional competencies after your role change. Review them if needed." with a link to the competency section.
- Officer can act or dismiss; matching uses the carried-over `isHidden` value throughout.
- **Pro:** No undefined `isHidden` window — OTEP-1487 always has a clean input.
- **Pro:** Respects the officer's prior choice; the prompt informs without forcing.
- **Pro:** Matches the BRD's tentative answer for the no-competencies case ("shift all previous competencies to additional competencies") and the W34 draft's "never show a wrong answer silently" principle.
- **Con:** An officer who hid a competency for their old role might not want it hidden for the new one, and won't notice unless they open the review. Mitigation: the prompt names the change explicitly.
- **Con:** Carrying `isHidden` across a category change is a small extra data-model requirement for Imelda's squad.

#### Option 2C: Carry over silently, no prompt
- **Pro:** Zero friction.
- **Con:** Violates the W34 "never silently" principle. An officer whose competency view shifts with no signal will be confused when match scores move.
- **Con:** No moment for the officer to catch a preference that no longer fits.

### Recommendation: Option 2B

1. **It gives OTEP-1487 a defined input at all times.** No window where `isHidden` is unset.
2. **It respects prior officer intent** while still surfacing the change — the middle path between overriding them (2C) and forcing a re-decision (2A).
3. **It's consistent with the two adjacent decisions already drafted** — the W34 "never silently" principle and the BRD's tentative "move to additional competencies" answer.

**Confidence:** Medium-High (70%). The open risk is whether Imelda's squad's competency model can carry `isHidden` across a role-based ↔ self-declared move without extra work — confirm in the same session as the W34 risks.

**What if we're wrong:** If officer feedback in the pilot shows the carried-over preferences confuse more than they help, switch to 2A (re-prompt) in R1.x. Note this is partially one-way — officers will have experienced 2B, and a switch re-disrupts their hidden lists once more.

**Ship alongside:** Fold the OTEP-1487 assumption into this decision. OTEP-1487 should not be groomed or built until 2B is approved. Flag at the 14:00 grooming.

---

## DECISION 3: Secondment / Forward-Deployment Display Values

### The decision
During a secondment or forward deployment, which agency, email, and designation does the officer see on their profile? What does ring-fencing use?

### Context from the BRD
- Secondment: "Confirm which designation, agency and email should be shown during secondment." Ring-fence drafted as **new grade + both new and parent agency**.
- Forward deployment: "Will agency remain as home agency? Will email remain as home email? Which designation to take?" — BRD says profile info "should be from the new agency" but then re-asks whether home agency persists.
- POCDEX: a seconded position can be `primaryPosition=true` AND `secondmentIndicator=true` on the same record (TC68). Open: does `secondmentIndicator=true` apply to all seconded officers or only cumulus→non-cumulus?

### Options

#### Option 3A: Show home agency / home email / home designation; treat the secondment as invisible on the profile
- **Pro:** Stable identity — the officer's "who am I" doesn't change for a temporary posting.
- **Con:** Contradicts "latest POCDEX state is authoritative." The officer is doing the seconded role; showing the home role misrepresents their current work.
- **Con:** Recommendations recalc on the seconded role (per BRD) but the profile shows the home role — inconsistent.

#### Option 3B (RECOMMENDED): Show host/new agency + host email + new designation; retain parent agency for ring-fencing only
- Profile displays the current (seconded/forward) agency, designation, and the host email where POCDEX provides one; otherwise retain home email and flag with WD.
- Ring-fencing uses **new grade + both new and parent agency** (per BRD draft) — so the officer keeps visibility of parent-agency opportunities.
- Recommendations recalc on the seconded/forward role (consistent with BRD).
- **Pro:** Consistent with "latest POCDEX state is authoritative" and with the recommendation-recalc behaviour.
- **Pro:** Ring-fencing on both agencies preserves the officer's access to home-agency opportunities — the thing they'd care about losing.
- **Con:** Email is the messy part. If POCDEX doesn't carry a host email for seconded officers, showing "host agency" but keeping "home email" is a visible inconsistency. Needs WD/POCDEX confirmation of what's actually in the payload.
- **Con:** Requires the profile to distinguish "display agency" (host) from "ring-fence agencies" (both) — a small model addition.

#### Option 3C: Defer the display decision, ship secondment with home values as a placeholder
- **Pro:** Doesn't block R1.x on the email question.
- **Con:** Ships a known-wrong display and creates an expectation to unwind later. Same anti-pattern as the W34 "placeholder" risk.

### Recommendation: Option 3B, with an explicit WD/POCDEX confirmation gate on email

1. **It's the only option consistent with the BRD's own principles** (latest POCDEX state authoritative; recommendations on the current role).
2. **Dual-agency ring-fencing protects what the officer values** — continued access to home-agency opportunities during the posting.
3. **The email question is a factual POCDEX question, not a product judgement** — resolve it by confirming the payload, not by guessing.

**Confidence:** Medium (65%). Contingent on POCDEX confirming (a) whether `secondmentIndicator=true` covers all seconded officers, and (b) whether a host email is in the payload. If no host email exists, fall back to: display host agency + home email + a small "seconded from [home agency]" label.

**What if we're wrong:** If pilot officers find the host-agency display disorienting, add a persistent "Seconded from [home agency] · [home designation]" secondary line rather than reverting to home-as-primary. This is R1.x scope anyway — low cost to adjust before it ships.

---

## Stakeholder Input

### To consult before sign-off

| Stakeholder | Input needed | Channel |
|---|---|---|
| **Imelda** | Agree the R1-v1 scope line as a joint Product position; confirm the competency model can carry `isHidden` across a category move (Decision 2) | Direct, async — before this goes to Adrian |
| **Pow Hwee** | Feasibility of identity resolution (email + NRIC + agency match) and profile sync as R1-v1 stories; NRIC-match data-classification path | Pod sync |
| **WD** | Validate Section 1 BRD table for promotion / transfer / redesignation rows; answer the 3 role-change open questions | One focused working session |
| **Johnny Lim / POCDEX** | Does `secondmentIndicator=true` apply to all seconded officers? Is a host email in the payload? Can forward deployment be identified from the payload at all? | Direct (per Pow Hwee's standing instruction to go to Johnny directly) |
| **Xian Zhang / Jacky** | Business view on deferring secondment/forward-deployment/double-hatting from R1-v1 | Tue design review + written follow-up |
| **Rama** | Informed: double-hatting deferred → perf-test journeys assume one active position per officer | 17:00 perf-test readiness review |

### Anticipated concerns

**Concern (likely from WD or business):** "Deferring secondment leaves seconded pilot officers with a broken profile."

**Response:** The pilot cohort is 6 agencies. Secondment events within a single R1-v1 cycle will be few; flag them for manual review. The alternative — blocking R1-v1 on secondment discovery that hasn't started — delays the common case (transfer/promotion) for the rare one.

**Concern (likely from Imelda's squad):** "The competency-preference rule (Decision 2) adds work to our model."

**Response:** Carrying one boolean across a category move is small next to the alternative — an undefined `isHidden` window that breaks OTEP-1487. Confirm the actual effort in the same session as the outstanding W34 risks.

**Concern:** "This overlaps the W34 competency-recalculation draft — are we deciding the same thing twice?"

**Response:** No. W34 covers the recalculation *trigger and storage* (recalculate vs. merge, keep dated snapshots). This doc covers *scope* and the *hide/show preference rule*, which W34 doesn't address. They're complementary; this doc references W34 and doesn't re-open it.

### Unresolved disagreements
None recorded yet. Capture here after the Imelda and WD conversations.

---

## Success Metrics

**How we'll know the scope call (Decision 1) was right:**
- R1-v1 employment-lifecycle stories are groomed and sized within the first R1 grooming session (leading indicator: not carried over for re-discussion).
- Zero pilot support escalations of the form "I got promoted/transferred and lost my Compass profile" during R1-v1.
- Guardrail: pilot officers seconded during R1-v1 with a stale profile — must stay in single digits; if it climbs, pull secondment forward.

**How we'll know the competency-preference rule (Decision 2) was right:**
- OTEP-1487 ships with a defined `isHidden` input in all role-change paths (no "unset" states in logs).
- < 10% of officers who see the post-role-change review prompt then manually change a hide/show setting (i.e. the carried-over default was usually right).

**How we'll know the display rule (Decision 3) was right:**
- Deferred to R1.x; measure at that point. Leading check: POCDEX confirms host-email availability by R1.x grooming so 3B is buildable as specified.

---

## Implementation Plan

### Immediate (this week)
1. Send this doc to Imelda async; get agreement on the R1-v1 scope line — @Michelle, by 11 Sep.
2. Flag at 14:00 R1 grooming: OTEP-1487 blocked pending Decision 2 approval — @Michelle, 10 Sep.
3. Flag at 17:00 perf-test readiness: double-hatting deferred, perf-test assumes one active position — @Michelle, 10 Sep.
4. Send Adrian the doc via Jace with a "confirm or correct by [date]" ask — @Michelle, by 11 Sep.
5. Book the WD + POCDEX validation session (promotion/transfer/redesignation rows + `secondmentIndicator` scope + forward-deployment identifiability) — @Michelle.

### Short-term (next 2 weeks)
1. WD/POCDEX session held; Section 1 table validated for R1-v1 rows — @Michelle + WD.
2. Pow Hwee confirms identity-resolution + profile-sync feasibility and the NRIC-match data-classification path — @Pow Hwee.
3. Role-change 3 open questions closed (new-role-no-competencies behaviour; overlap hide/show; Report Issue reset) — @Michelle + Imelda's squad.
4. R1-v1 stories drafted for grooming: identity resolution, profile sync, role-change handling — @Michelle + Imelda.

### Dependencies / blockers
- **Blocker for grooming role-change stories:** WD validation of the 3 promotion/transfer/redesignation table rows.
- **Blocker for Decision 2 build:** Imelda's squad confirms `isHidden` can carry across category move (ties to open W34 risks).
- **Parallel:** the admin-portal Theme 6 secondment-marker question uses the same POCDEX confirmation — batch it into the same Johnny Lim conversation.

---

## Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation | Owner |
|---|---|---|---|---|
| WD can't validate the Section 1 rows before grooming | High — role-change stories can't be sized | Medium | Book the session this week; scope it to only the 3 rows R1-v1 needs, not all 24 | Michelle |
| Identity resolution on NRIC is blocked by data-classification review | High — it's the foundation story | Medium | Raise the NRIC-match approach with security in parallel with Pow Hwee's feasibility work, not after | Michelle / Pow Hwee |
| Seconded pilot officers hit stale profiles during R1-v1 | Medium | Low–Medium | Manual review flag for secondment cases; monitor the guardrail metric; pull secondment into R1.x early if it climbs | Michelle |
| OTEP-1487 gets built before Decision 2 lands, on the `isHidden`=excluded default | Medium — rework + inconsistent behaviour | Medium | Explicit hold flagged at 14:00 grooming; link this doc in the ticket | Michelle |
| Double-hatting pressure returns during R1-v1 (a pilot agency needs it) | Medium | Low | It's a two-way door; R1.x can take it. Don't pull it into the perf-test window regardless | Michelle |
| CMM competency-ID model lands mid-R1 and changes the self-declared vs. role-based split | Medium | Low–Medium | Track CMM confirmation with Pow Hwee; Decision 2's rule is expressed on categories, not ID sources, so it survives a source change | Michelle / Pow Hwee |

---

## Decision Log

- **Proposed:** 2026-09-10 by Michelle Yip
- **Consulted (Imelda):** [date]
- **Consulted (WD / POCDEX):** [date]
- **Approved:** [date] by Adrian Ang
- **Locked at R1 grooming:** [date]
- **Reviewed:** [after R1-v1 ships]

---

## Appendix

### Supporting analysis
- [Employment Profile BRD analysis](../analyses/2026-09-10-W37-employment-profile-brd-analysis.md)
- [R1 admin-portal research synthesis](../research-synthesis/2026-09-10-W37-r1-admin-portal-discovery.md) — Theme 6, shared secondment-marker question
- [W34 competency-recalculation draft](2026-08-18-W34-competency-recalculation-on-profile-change.md) — recalculation trigger + storage (complementary, not re-opened here)
- Confluence "Employment Profile- Business Requirements" page 2645166214, v9

### The 3 role-change open questions to close with WD/Imelda
1. If the new role has no role-based competencies, do previous role-based competencies all move to self-declared, or are some removed? (BRD tentative answer: move all to additional competencies — confirm.)
2. If a competency overlaps old and new role-based sets, and the officer had hidden it, does the hide preference persist? (Decision 2 says yes — confirm no model constraint.)
3. Does Report Issue status reset on a role change? (BRD tentative: yes, new role = new issues — confirm.)

### The 3 XZ answers already on record
| Question | XZ answer |
|---|---|
| Does Compass need officers to pick their own role from a list, like OTG? | No — role is HR-assigned. |
| If an old job/position ID reappears in the POCDEX payload — accurate or error? | Assume whatever POCDEX passes is correct. |
| Do seconded officers ever get a grade change? | Possible. |

### FAQ

**Q: Why not just ship the whole BRD — it's already written?**
A: It's an alignment draft with ~20 open decisions and an unvalidated upstream data table. "Written" isn't "spec'd." Grooming it whole means grooming 20 unanswered questions.

**Q: Isn't deferring secondment risky given officers get seconded all the time?**
A: WOG-wide, yes. Within a 6-agency pilot over one R1-v1 cycle, few. And the deferral is reversible — R1.x can pull it forward. Blocking the common case (transfer) for the rare one is the worse trade.

**Q: Does this contradict the W34 decision?**
A: No — W34 is about how competencies get recalculated and stored on a job change. This is about R1 scope and one preference rule W34 doesn't cover. This doc references W34 and leaves it intact.
