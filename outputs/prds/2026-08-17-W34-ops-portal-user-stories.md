# User Stories — Ops Portal (Day-2 Profile-Change Detection)

Derived from Section 8 (Scope) of the [epic one-pager](2026-08-17-W34-ops-portal-epic-one-pager.md). Grouped by the 4 stories already outlined there, expanded with acceptance criteria pulled from the field table, the descope list, and the missing-fix-path decision.

---

## Story 1: Daily Sync — Detect, Diff, Categorize, Log

**As** the system,
**I want to** re-pull each officer's POCDEX record daily, compare it against the last known copy, and sort any change into a category,
**so that** drift gets caught automatically instead of sitting unnoticed until an officer complains.

**Acceptance Criteria:**

- [ ] The daily job re-pulls every officer's record from POCDEX and diffs it against the previous day's copy.
- [ ] A detected change is sorted into one of six categories: Organisational move, Role change, Classification change, Identity/contact change, Eligibility/status change, or Multiple/conflicting records.
- [ ] Each detected change gets a reason code and a priority.
- [ ] Every action is logged — who, when, category — for a full audit history.
- [ ] The system correctly detects and categorizes all 6 priority test cases in UAT: TC1 (agency transfer), TC2 (POCDEX↔non-POCDEX transfer), TC3 (secondment), TC7 (NPL/ML and return), TC8 (upstream correction), TC9 (Position ID change).
- [ ] Changes to `agencyid`/`agencyname` are categorized as Organisational move.
- [ ] Changes to `employmentid`/`primaryposition` are categorized as Role change.
- [ ] Changes to `jobfamily`/`jobfunction`/`jobgrade` are categorized as Classification change.
- [ ] Changes to `email`/`firstname`/`lastname` are categorized as Identity/contact change.
- [ ] Changes to `status` are categorized as Eligibility/status change.
- [ ] Reporting/org-structure fields (`reportingmanageruid`, `departmentid`, `departmentname`, `personnelarea`, `personnelsubarea`) are explicitly excluded from the diff — not silently dropped, not accidentally caught.

**Known gap (not yet resolved by this story alone):** the diff as scoped doesn't cover identity fields (`email`, `idnumber`, `officerId`), so TC2, TC4, TC8, and TC13 aren't fully caught by detection alone. See Decision Tracker.

---

## Story 2: BO Views Overview and Update Status

**As a** Business Owner,
**I want to** see how many cases are open and whether the nightly check ran cleanly,
**so that** I know what needs my attention and whether the detection pipeline itself is healthy.

**Acceptance Criteria:**

- [ ] Overview shows the open case count and its urgency.
- [ ] From Overview, a BO can click into a group of cases.
- [ ] Update status shows records where the nightly check failed or got stuck, and why.
- [ ] A BO can flag a stuck/failed record to the receiving team from Update status.
- [ ] These two sections work standalone — if the other four sections aren't ready yet, Overview and Update status still function and nothing is lost from the daily sync running underneath them.

**Note:** these are the two lowest-complexity sections and the ones to launch first if visual design slips on the rest.

---

## Story 3: BO Reviews and Sorts Identity, Employment Record, and Record Change Cases

**As a** Business Owner,
**I want to** review a flagged case, see what changed, and sort it into the right category,
**so that** it's routed correctly without me risking making the officer's record worse.

**Acceptance Criteria:**

- [ ] A BO can view a before/after comparison for any changed field.
- [ ] A BO can pick a category and add an optional note, then send the case on.
- [ ] A BO cannot directly edit the officer's record — categorize and route only.
- [ ] Identity/contact change and duplicate/conflicting-record cases are never grouped for bulk review — they always stay one-at-a-time.
- [ ] Genuine second-job cases (double-hatting) are distinguished from mistaken duplicates.
- [ ] A stale or reused email is treated as the highest-severity case type it can be — this is the TC13 exposure risk, where a different real person could see someone else's data.

**Blocked by:** no visual designs exist yet for these four sections (Identity issues, Employment record issues, Record changes, History and reporting). Sprint planning can't start until a design session happens.

---

## Story 4: Case Escalates to POCDEX or the Receiving Team

**As a** Business Owner (or the system, on a stuck case),
**I want to** escalate a case to the right destination with all the evidence needed,
**so that** whoever picks it up next can act correctly the first time, without back-and-forth.

**Acceptance Criteria:**

- [ ] A case that leaves detection/routing scope goes to the correct destination: technical bugs to Engineering, POCDEX data mismatches to POCDEX, upstream agency HR errors to that agency's HR team, no-existing-rule questions to the receiving team.
- [ ] A POCDEX escalation includes all required due-diligence fields before the ticket is raised: POCDEX UID, HR ID, current email, latest position ID, action type, effective/last-updated date, upstream screenshots, and confirmation the payload was actually received.
- [ ] A ticket left unresolved for 7 days (POCDEX's own auto-close SLA) is tracked independently, so a case can't silently close unverified on our side.

**Blocked by:** the receiving team doesn't exist yet — "Compass Product Operations" is a name on a line item, not a staffed function. This story can be built, but nothing routed to the receiving team will actually get worked until that gap closes. See Story 5.

---

## Story 5 (Proposal, Not Yet Decided): Auto-Resolve Low-Risk Categories

**As a** Business Owner,
**I want** low-risk field changes (job family, job function) to update automatically without needing a human reviewer,
**so that** cases don't pile up unworked while a receiving team doesn't exist yet.

**Acceptance Criteria (proposed, pending Section 12 decision):**

- [ ] Fields an officer wouldn't personally notice if wrong (job family, job function) auto-resolve directly from the confirmed source-system correction.
- [ ] Fields an officer would notice if wrong (NRIC, email) always require human review — never auto-resolved.
- [ ] This path is explicitly an interim measure, not a replacement for standing up a real receiving team — the decision between the two is still open.

**Status:** this is Adrian's proposal, not yet approved. Included here so it's not lost if the team decides to build it instead of (or alongside) forming a receiving team.

---

## Not Included as Stories (Explicitly Out of Scope)

| Item | Why it's not a story here |
|---|---|
| Reporting/org-structure change detection | Not displayed anywhere in Career Compass today; POCDEX field availability unconfirmed |
| Officer-facing display of double-hatting status | Officer Profile Page already excludes this from display — nothing to build a screen for yet |
| Automatic deactivation for departed officers | No contract, timeline, or owner exists — not scoped at all yet |
