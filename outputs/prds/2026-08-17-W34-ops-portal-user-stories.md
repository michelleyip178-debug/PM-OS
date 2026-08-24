# User Stories — Ops Portal (Day-2 Profile-Change Detection)

Derived from Section 7 (Scope) of the [epic one-pager](2026-08-17-W34-ops-portal-epic-one-pager.md). Originally grouped by the 4 stories outlined there; the epic's Story 1 has since been split into 1a/1b/1c (below) because it bundled 3 separable capabilities — re-pull/diff/log, categorization, and identity resolution — into one story with no independent test/ship path. Stories 2-5 numbering is unchanged from the original 4-story scope.

---

## Story 1a: Daily Sync — Re-pull, Diff, Log

**As** the system,
**I want to** re-pull each officer's POCDEX record daily and diff it against the last known copy, logging every detected change,
**so that** drift is captured automatically, before any categorization or routing logic exists to act on it.

**Acceptance Criteria:**

- [ ] The daily job re-pulls every officer's record from POCDEX and diffs it against the previous day's copy.
- [ ] Each detected change gets a reason code and a priority.
- [ ] Every action is logged — who, when, what changed — for a full audit history.
- [ ] Reporting/org-structure fields (`reportingmanageruid`, `departmentid`, `departmentname`, `personnelarea`, `personnelsubarea`) are explicitly excluded from the diff — not silently dropped, not accidentally caught.

**Note:** this story deliberately does not include categorization — see Story 1b. A raw, logged change-set is useful and testable on its own, and doesn't require the 6-category rules to be finalized first.

**Target:** before code freeze — no open blocker, buildable independent of the identity-resolution decision below.

---

## Story 1b: Daily Sync — Categorize Detected Changes

**As** the system,
**I want to** sort each change detected by Story 1a into one of six categories,
**so that** a Business Owner sees a meaningful reason for the change, not a raw field diff.

**Acceptance Criteria:**

- [ ] A detected change is sorted into one of six categories: Organisational move, Role change, Classification change, Identity/contact change, Eligibility/status change, or Multiple/conflicting records.
- [ ] Changes to `agencyid`/`agencyname` are categorized as Organisational move.
- [ ] Changes to `employmentid`/`primaryposition` are categorized as Role change.
- [ ] Changes to `jobfamily`/`jobfunction`/`jobgrade` are categorized as Classification change.
- [ ] Changes to `email`/`firstname`/`lastname` are categorized as Identity/contact change — **field-level detection only**. This does not resolve TC2/TC4/TC8/TC13 (identity misattribution risk) — those require identity resolution beyond a field diff, tracked as Story 1c below.
- [ ] Changes to `status` are categorized as Eligibility/status change.
- [ ] The system correctly categorizes these 3 priority test cases in UAT: TC1 (agency transfer), TC3 (secondment), TC9 (Position ID change). **TC7 (NPL/ML and return) is excluded from this priority list** — re-opened per Section 11 (POCDEX won't pass the NPL reason code, so Ops can't distinguish expected NPL exclusion from a real gap); re-add once Michelle + POCDEX resolve it. TC2 and TC8 are field-level only here — see Story 1c for their identity-resolution component.

**Depends on:** Story 1a's diff output. Each category rule (agency, role, classification, identity, status) is independently testable and could ship incrementally if one mapping needs rework without blocking the others.

**Target:** before code freeze — conditional on Story 1a landing first; no dependency on the identity-resolution decision below.

---

## Story 1c: Daily Sync — Identity Resolution (TC2/TC4/TC8/TC13)

**As** the system,
**I want to** resolve *who* a changed record actually belongs to when identity fields (`email`, `idnumber`, `officerId`) themselves change or conflict,
**so that** the misattribution risk behind TC2/TC4/TC8/TC13 — a real person seeing another real person's data — is actually caught, not just field-diffed.

**Acceptance Criteria:** not yet written — this story is a placeholder until the Decision Tracker call resolves (extend Story 1b's diff scope to identity fields, or formally accept the gap). Story 1b's Identity/contact-change category catches the *field* changing; it does not resolve *whose* record it is.

**Blocked by:** open Decision Tracker row — "Extend the daily-diff scope to identity fields, or formally accept the TC2/TC4/TC8/TC13 gap." Was previously a footnote under the old combined Story 1; broken out here so it's tracked as real, unscoped work rather than an asterisk.

**Target:** no date — don't groom until the Decision Tracker call lands and this story has actual ACs.

---

## Story 2: BO Views Overview and Update Status

**As a** Business Owner,
**I want to** see how many cases are open and whether the nightly check ran cleanly,
**so that** I know what needs my attention and whether the detection pipeline itself is healthy.

**Acceptance Criteria:**

- [ ] Overview shows the open case count and its urgency.
- [ ] From Overview, a BO can click into a group of cases.
- [ ] Update status shows records where the nightly check failed or got stuck, and why.
- [ ] A BO can flag a stuck/failed record for follow-up from Update status. **Destination TBC** — routes to the receiving team once that team exists (Decision Tracker, Section 11); until then, flagged records are logged and visible, not silently dropped.
- [ ] These two sections work standalone — if the other four sections aren't ready yet, Overview and Update status still function and nothing is lost from the daily sync running underneath them.

**Note:** these are the two lowest-complexity sections and the ones to launch first if visual design slips on the rest. Sprint-ready as-is — no open blocker.

**Target:** before code freeze — no open blocker, this is the story most likely to actually land on that timeline.

---

## Story 3: BO Reviews and Sorts Identity, Employment Record, and Record Change Cases

**As a** Business Owner,
**I want to** review a flagged case, see what changed, and sort it into the right category,
**so that** it's routed correctly without me risking making the officer's record worse.

**Acceptance Criteria:**

- [ ] A BO can view a before/after comparison for any changed field.
- [ ] A BO can pick a category and add an optional note, then send the case on. **"Send the case on" hands off to Story 4's escalation flow** — Story 3 does not define what happens to a routed case if Story 4 isn't built yet; treat Story 3 and 4 as sequence-dependent, not independently shippable.
- [ ] A BO cannot directly edit the officer's record — categorize and route only.
- [ ] Identity/contact change and duplicate/conflicting-record cases are never grouped for bulk review — they always stay one-at-a-time.
- [ ] Genuine second-job cases (double-hatting) are distinguished from mistaken duplicates.
- [ ] A stale or reused email is treated as the highest-severity case type it can be — this is the TC13 exposure risk, where a different real person could see someone else's data.

**Blocked by:** no visual designs exist yet for these four sections (Identity issues, Employment record issues, Record changes, History and reporting). Sprint planning can't start until a design session happens.

**Grooming status:** discuss for shared understanding, do not estimate this cycle — blocked on design, and sequence-dependent on Story 4 (see AC above).

**Target:** no MVP date — blocked on a design session that hasn't happened. Not realistic before code freeze unless that session lands this week.

---

## Story 4: Case Escalates to POCDEX or the Receiving Team

**As a** Business Owner (or the system, on a stuck case),
**I want to** escalate a case to the right destination with all the evidence needed,
**so that** whoever picks it up next can act correctly the first time, without back-and-forth.

**Acceptance Criteria:**

- [ ] A case that's a technical bug routes to Engineering.
- [ ] A case that's a POCDEX data mismatch routes to POCDEX.
- [ ] A case caused by an upstream agency HR error routes to that agency's HR team.
- [ ] A case with no existing rule routes to the receiving team. **Not verifiable yet** — the receiving team doesn't exist, so this routing rule has no destination to test against until the launch-gate decision (Section 11) resolves.
- [ ] BO sees a clear warning and cannot submit a POCDEX escalation if a required due-diligence field is missing: POCDEX UID, HR ID, current email, latest position ID, action type, effective/last-updated date, upstream screenshots, confirmation the payload was actually received.
- [ ] A ticket left unresolved for 7 days (POCDEX's own auto-close SLA) is tracked independently, so a case can't silently close unverified on our side.
- [ ] **Depends on Story 3** — a case only reaches this story's escalation flow via Story 3's "send the case on" action; this story alone has no entry point.

**Blocked by:** the receiving team doesn't exist yet — "Compass Product Operations" is a name on a line item, not a staffed function. This story can be built, but nothing routed to the receiving team will actually get worked until that gap closes. See Story 5.

**Grooming status:** discuss for shared understanding, do not estimate this cycle — blocked on the launch-gate decision (Section 11) and sequence-dependent on Story 3.

**Target:** no MVP date — 3 of 4 routing destinations exist and are buildable, but the story's own success criteria can't be fully verified until the receiving-team decision lands. Building now risks shipping unverifiable ACs.

---

## Story 5 (Proposal, Not Yet Decided): Auto-Resolve Low-Risk Categories

**As a** Business Owner,
**I want** low-risk field changes (job family, job function) to update automatically without needing a human reviewer,
**so that** cases don't pile up unworked while a receiving team doesn't exist yet.

**Acceptance Criteria (proposed, pending Section 11 decision):**

- [ ] Fields an officer wouldn't personally notice if wrong (job family, job function) auto-resolve directly from the confirmed source-system correction.
- [ ] Fields an officer would notice if wrong (NRIC, email) always require human review — never auto-resolved.
- [ ] This path is explicitly an interim measure, not a replacement for standing up a real receiving team — the decision between the two is still open.

**Status:** this is Adrian's proposal, not yet approved. Included here so it's not lost if the team decides to build it instead of (or alongside) forming a receiving team.

**Target:** no date, not a story yet — relevance itself is conditional on which way the Section 11 launch-gate decision goes. Don't groom until approved.

---

## Not Included as Stories (Explicitly Out of Scope)

| Item | Why it's not a story here |
|---|---|
| Reporting/org-structure change detection | Not displayed anywhere in Career Compass today; POCDEX field availability unconfirmed |
| Officer-facing display of double-hatting status | Officer Profile Page already excludes this from display — nothing to build a screen for yet |
| Automatic deactivation for departed officers | No contract, timeline, or owner exists — not scoped at all yet |
