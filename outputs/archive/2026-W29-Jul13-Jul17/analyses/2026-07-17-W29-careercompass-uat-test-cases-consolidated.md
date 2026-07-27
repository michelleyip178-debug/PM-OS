# CareerCompass — Consolidated UAT Test Cases

**For:** Business Owners (Chris, Xian Sheng) — one document, one continuous pass, no switching between team-specific files

**From:** Michelle Yip (Pathfinder PM), Imelda Mo (Core, Intelligence)

**Format:** One test case per field — Test Case ID, AC Reference, Scenario, Persona, Pre-conditions, Test Steps, Test Data, Expected Result, Actual Result, Pass/Fail, Tested By/Date, Comments — per the [UAT Operating Model](../meeting-notes/2026-07-17-W29-uat-operating-model.md).

**Order:** Sequenced the way an officer actually moves through CareerCompass in one sitting — log in, look around, review competencies, add to them, check development gaps, browse jobs, apply. Not grouped by which squad built which part.

**Status key:** 🟢 Ready for UAT · 🟡 In final testing · 🔴 Not built yet

**Total:** 53 test cases across Login, Navigation, Competencies, Development, Opportunities, and Applying

---

## How to use this document

Work through the sections in order — that's the sequence an officer would naturally follow. Each test case is self-contained (persona, pre-conditions, steps, expected result), so you can execute one at a time and fill in Actual Result / Pass-Fail / Tested By as you go. Where a test case's Status is 🔴, it's not built yet — skip execution but read the Expected Result so you understand what's coming.

**Personas used throughout** (full definitions in the [Personas section](#personas--test-accounts) at the end):
**Priya** (standard officer, the baseline) · **Marcus** (competency data gap) · **Farah** (no role assigned) · **Wei Ling** (incomplete HR record) · **Daniel** (shared-device session test) · **Kumar** (hasn't self-declared anything yet)

---

# Section 1 — Login & Identity

*(Squad: Pathfinder — Login · Core — Profile Details)*

### UAT-LOGIN-001

| Field | Value |
|---|---|
| Test Case ID | UAT-LOGIN-001 |
| AC Reference | OTEP-305 |
| Status | 🟡 In final testing |
| Scenario | Officer logs in using existing work credentials, without a separate login form |
| Persona | Priya |
| Pre-conditions | Officer has a valid, active work account in a pilot agency |
| Test Steps | 1. Open CareerCompass. 2. Click to log in. 3. Complete authentication. |
| Test Data | Priya's standard test account (pilot agency, active) |
| Expected Result | Authenticated in the background against existing work account — no separate password/login form shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | Currently tested against interim Keycloak stub, not real WOG AD — confirm this distinction doesn't affect expected UI behavior |

### UAT-LOGIN-002

| Field | Value |
|---|---|
| Test Case ID | UAT-LOGIN-002 |
| AC Reference | OTEP-74 |
| Status | 🟡 In final testing |
| Scenario | Officer's identity is correctly confirmed on landing page after login |
| Persona | Priya |
| Pre-conditions | Login (UAT-LOGIN-001) successful |
| Test Steps | 1. Complete login. 2. Observe landing page. 3. Compare displayed name/title/agency against known HR record. |
| Test Data | Priya's account — complete POCDEX record (name, title from HRP/CUMULUS field, agency) |
| Expected Result | Lands on profile page; sees name, initials avatar, job title (sourced from correct HR field per source system), and agency — matches HR record exactly |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-LOGIN-003

| Field | Value |
|---|---|
| Test Case ID | UAT-LOGIN-003 |
| AC Reference | OTEP-74 |
| Status | 🟡 In final testing |
| Scenario | Officer with incomplete HR data does not see broken or placeholder fields |
| Persona | Wei Ling |
| Pre-conditions | Wei Ling's POCDEX record has agency name or title blank/"NA" |
| Test Steps | 1. Log in as Wei Ling. 2. Observe profile page. |
| Test Data | Wei Ling's account — agency = "NA" or blank field |
| Expected Result | Missing field is simply absent — no blank box, no "N/A" text shown; divider line removed if both title and agency are unavailable |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-LOGIN-004

| Field | Value |
|---|---|
| Test Case ID | UAT-LOGIN-004 |
| AC Reference | OTEP-74 |
| Status | 🟢 |
| Scenario | Profile identity fields are not clickable/editable |
| Persona | Priya |
| Pre-conditions | Logged in |
| Test Steps | 1. Click on name, title, and agency in turn. |
| Test Data | — |
| Expected Result | No interaction triggered on any field |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-LOGIN-005

| Field | Value |
|---|---|
| Test Case ID | UAT-LOGIN-005 |
| AC Reference | OTEP-305 |
| Status | 🟡 In final testing |
| Scenario | Logout fully terminates the session |
| Persona | Priya |
| Pre-conditions | Logged in |
| Test Steps | 1. Click Log Out. 2. Press browser back button. 3. Type a CareerCompass URL directly into the address bar. |
| Test Data | — |
| Expected Result | Session ends, returned to login page; back button does not restore access; direct URL entry redirects to login |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-LOGIN-006

| Field | Value |
|---|---|
| Test Case ID | UAT-LOGIN-006 |
| AC Reference | OTEP-305, WOG-17 |
| Status | 🟡 In final testing |
| Scenario | Shared-device logout leaves no trace for the next user |
| Persona | Daniel |
| Pre-conditions | Two officers, one shared browser/device |
| Test Steps | 1. Daniel logs in on a shared computer. 2. Daniel logs out. 3. A second officer uses the same browser session immediately after. |
| Test Data | Daniel's account + a second distinct test account |
| Expected Result | Second officer sees no trace of Daniel's session or data — redirected to login |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | ⚠️ Zero-tolerance guardrail — flag as blocking if this fails, not standard-severity |

**Not yet covered:** secondment/double-hatting officers — no test case yet, not scoped.

---

# Section 2 — Navigation

*(Squad: Core)*

### UAT-NAV-001

| Field | Value |
|---|---|
| Test Case ID | UAT-NAV-001 |
| AC Reference | OTEP-106 |
| Status | 🟡 In final testing |
| Scenario | Officer navigates between main site sections without full page reloads or getting lost |
| Persona | Priya |
| Pre-conditions | Logged in |
| Test Steps | 1. Observe nav bar (Home, Jobs and Opportunities, Learning and Courses, Your Development). 2. Click "Jobs and Opportunities." 3. Click "Your Development." 4. Click "Your Development" again while already on it. 5. Click Home. |
| Test Data | — |
| Expected Result | Each click routes correctly without full refresh; active state updates; clicking the current page again does nothing; Home returns to profile |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-NAV-002

| Field | Value |
|---|---|
| Test Case ID | UAT-NAV-002 |
| AC Reference | OTEP-106 |
| Status | 🟡 In final testing |
| Scenario | Avatar dropdown shows only Log Out and dismisses cleanly |
| Persona | Priya |
| Pre-conditions | Logged in |
| Test Steps | 1. Click avatar. 2. Click outside the dropdown. |
| Test Data | — |
| Expected Result | Dropdown shows a single "Log Out" option; clicking outside closes it without a dedicated close action |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Section 3 — Competencies: Viewing

*(Squad: Core)*

### UAT-COMP-001

| Field | Value |
|---|---|
| Test Case ID | UAT-COMP-001 |
| AC Reference | OTEP-75 |
| Status | 🟡 In final testing |
| Scenario | Officer sees competencies correctly split into Core, Functional, and Self-declared sections |
| Persona | Priya |
| Pre-conditions | Logged in; role-based competencies present |
| Test Steps | 1. Navigate to "My Competencies." 2. Observe section structure. 3. Hover tooltips on Core and Functional. |
| Test Data | Priya's account — role with both Core and Functional competencies assigned |
| Expected Result | Three distinct sections shown; tooltip explains Core vs. Functional in plain language |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-COMP-002

| Field | Value |
|---|---|
| Test Case ID | UAT-COMP-002 |
| AC Reference | OTEP-75 |
| Status | 🟡 In final testing |
| Scenario | Competency section with more than 8 items collapses correctly |
| Persona | Priya (with a role assigned ≥9 Functional Competencies) |
| Pre-conditions | Test account has a role mapped to 9+ Functional Competencies |
| Test Steps | 1. Navigate to "My Competencies." 2. Count visible items in Functional Competencies. 3. Click "view more." |
| Test Data | Role profile with 12 Functional Competencies |
| Expected Result | First 8 shown by default; "view more" reveals the rest via collapsible drawer |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-COMP-003

| Field | Value |
|---|---|
| Test Case ID | UAT-COMP-003 |
| AC Reference | OTEP-290 |
| Status | 🟡 In final testing |
| Scenario | Officer with no matchable role-based competencies sees Report Issue flow, not a blank page |
| Persona | Marcus |
| Pre-conditions | Marcus's role either can't resolve a job ID, or resolves to a job ID with zero tagged competencies |
| Test Steps | 1. Log in as Marcus. 2. Navigate to "My Competencies." 3. Read empty-state messaging. 4. Click "Report Issue." |
| Test Data | Marcus's account — unresolvable or empty job ID mapping |
| Expected Result | Clear explanatory copy + "Report Issue" button shown instead of blank sections; clicking shows confirmation toast |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-COMP-004

| Field | Value |
|---|---|
| Test Case ID | UAT-COMP-004 |
| AC Reference | OTEP-290 |
| Status | 🟡 In final testing |
| Scenario | Reported issue persists across sessions without re-prompting |
| Persona | Marcus |
| Pre-conditions | UAT-COMP-003 completed (issue already reported) |
| Test Steps | 1. Log out. 2. Log back in later the same day. 3. Navigate to "My Competencies." |
| Test Data | Marcus's account, post-report |
| Expected Result | Button reads "Issue Reported," greyed out — not prompting to report again |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-COMP-005

| Field | Value |
|---|---|
| Test Case ID | UAT-COMP-005 |
| AC Reference | OTEP-290 |
| Status | 🟡 In final testing |
| Scenario | Reported issue resolution clears the Report Issue state on next login |
| Persona | Marcus |
| Pre-conditions | Underlying data issue fixed by product/data team after UAT-COMP-003/004 |
| Test Steps | 1. (Backend fix applied by team.) 2. Log in as Marcus. 3. Navigate to "My Competencies." |
| Test Data | Marcus's account, post-fix |
| Expected Result | Competencies display normally; Report Issue button and messaging fully gone |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | Requires coordination with product/data team to actually apply a fix mid-UAT — sequence this test case after a real fix, not simulated |

---

# Section 4 — Competencies: Adding

*(Squads: Core, Intelligence)*

### UAT-ADDCOMP-001

| Field | Value |
|---|---|
| Test Case ID | UAT-ADDCOMP-001 |
| AC Reference | OTEP-112 |
| Status | 🟡 In final testing |
| Scenario | Keyword search returns correct, correctly-ordered suggestions |
| Persona | Priya |
| Pre-conditions | Logged in |
| Test Steps | 1. Click "+" under Self-declared Competencies. 2. Click search bar without typing. 3. Type 2 characters. 4. Type a 3rd character. 5. Type a term with many matches. 6. Select a result. |
| Test Data | Competency Bank containing multiple matches for the test keyword |
| Expected Result | No suggestions shown at 0–2 characters; suggestions appear at 3+ characters, "starts with" ranked before "contains"; 10 results load initially, more on scroll, capped at 20; selecting adds to Self-declared list |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-ADDCOMP-002

| Field | Value |
|---|---|
| Test Case ID | UAT-ADDCOMP-002 |
| AC Reference | OTEP-205 |
| Status | 🟡 In final testing |
| Scenario | CV upload — valid file — generates suggested competencies |
| Persona | Priya |
| Pre-conditions | Logged in, has a valid .docx CV under 5MB |
| Test Steps | 1. Choose "upload CV" instead of search. 2. Upload a valid .docx under 5MB. 3. Click "Review competencies." 4. Review suggestions. 5. Select which to keep. |
| Test Data | Sample .docx CV, under 5MB, with content matching known WOG FC Bank competencies |
| Expected Result | Upload succeeds, "Review competencies" activates; generates 0–12 suggestions ranked by relevance, no confidence score shown; officer chooses which to keep, nothing auto-added |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-ADDCOMP-003

| Field | Value |
|---|---|
| Test Case ID | UAT-ADDCOMP-003 |
| AC Reference | OTEP-205 |
| Status | 🟡 In final testing |
| Scenario | CV upload — invalid file type — handled gracefully |
| Persona | Priya |
| Pre-conditions | Has a .pdf file to attempt upload with |
| Test Steps | 1. Attempt to upload a .pdf in place of .docx. |
| Test Data | Sample .pdf file |
| Expected Result | *(Open — AC only specifies .docx/5MB happy path; confirm expected error/rejection behavior with Core PM before this test case can be marked pass/fail-ready)* |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | ⚠️ Blocked — needs AC clarification before execution |

### UAT-ADDCOMP-004

| Field | Value |
|---|---|
| Test Case ID | UAT-ADDCOMP-004 |
| AC Reference | OTEP-205 |
| Status | 🟡 In final testing |
| Scenario | Officer can remove an uploaded CV before generating suggestions |
| Persona | Priya |
| Pre-conditions | A CV has been uploaded but "Review competencies" not yet clicked |
| Test Steps | 1. Upload a CV. 2. Click the trash icon. |
| Test Data | Sample .docx CV |
| Expected Result | File removed, "Review competencies" reverts to inactive |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Section 5 — Competencies: Managing Visibility

*(Squad: Core)*

### UAT-MANAGECOMP-001

| Field | Value |
|---|---|
| Test Case ID | UAT-MANAGECOMP-001 |
| AC Reference | OTEP-126 |
| Status | 🟡 In final testing |
| Scenario | Officer hides role-based competencies without being able to add new ones outside their role |
| Persona | Priya |
| Pre-conditions | Logged in, has role-based competencies |
| Test Steps | 1. Click edit ("pen") icon. 2. Observe default state (no Save button). 3. Click "eye" icon on one competency. 4. Uncheck two competencies. 5. Attempt to add a new competency from this screen. 6. Click "Save changes." |
| Test Data | Priya's account, role with ≥3 Core/Functional competencies |
| Expected Result | Full list shown, alphabetical, all checked by default; no Save button until a change is made; eye icon shows description; unchecking reveals Save button; no path to add new competencies here; saving returns to profile with changes applied |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-MANAGECOMP-002

| Field | Value |
|---|---|
| Test Case ID | UAT-MANAGECOMP-002 |
| AC Reference | OTEP-126 |
| Status | 🟡 In final testing |
| Scenario | Hidden competencies are hidden, not deleted — reversible |
| Persona | Priya |
| Pre-conditions | UAT-MANAGECOMP-001 completed (two competencies hidden) |
| Test Steps | 1. Return to the edit screen. 2. Confirm the two hidden competencies are still present but unchecked. |
| Test Data | — |
| Expected Result | Both competencies still listed, still unchecked, re-checkable at any time |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Section 6 — Development Summary

*(Squad: Core)*

### UAT-DEV-001

| Field | Value |
|---|---|
| Test Case ID | UAT-DEV-001 |
| AC Reference | OTEP-421 |
| Status | 🟡 In final testing (QA per Jira) |
| Scenario | Development summary accurately reflects role and competencies, read-only, with correct deep-link to edit |
| Persona | Priya |
| Pre-conditions | Logged in, has role + role-based + self-declared competencies |
| Test Steps | 1. Navigate to "Your Development." 2. Attempt to edit a competency directly. 3. Click "Manage competencies." 4. Edit a competency there. 5. Return to "Your Development." |
| Test Data | Priya's account, complete profile |
| Expected Result | Role title, "From this role" and "You've added these" sections shown, matching profile page exactly; page is read-only; "Manage competencies" deep-links directly to the competency section (not page top); edits made there reflect automatically on return |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-DEV-002

| Field | Value |
|---|---|
| Test Case ID | UAT-DEV-002 |
| AC Reference | OTEP-512 (Scenario 2) |
| Status | 🟡 In final testing (QA per Jira) |
| Scenario | Officer with role and role-based competencies, but no self-declared ones, sees an "add" prompt not an empty section |
| Persona | Kumar |
| Pre-conditions | Kumar has a complete role and role-based competencies, zero self-declared |
| Test Steps | 1. Log in as Kumar. 2. Navigate to "Your Development." |
| Test Data | Kumar's account |
| Expected Result | "Add competencies" button shown in the self-declared section instead of empty space; "Manage competencies" and "Explore new roles" CTAs present as normal |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-DEV-003

| Field | Value |
|---|---|
| Test Case ID | UAT-DEV-003 |
| AC Reference | OTEP-512 (Scenario 3) |
| Status | 🟡 In final testing (QA per Jira) |
| Scenario | Officer with a role but no matchable role-based competencies sees Report Issue flow within the development summary |
| Persona | Marcus |
| Pre-conditions | Marcus has a role, self-declared competencies exist, role-based competencies unresolvable |
| Test Steps | 1. Log in as Marcus. 2. Navigate to "Your Development." |
| Test Data | Marcus's account |
| Expected Result | "Report Issue" flow shown for the role-based section (same as UAT-COMP-003), not a blank section; self-declared competencies still shown normally |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-DEV-004

| Field | Value |
|---|---|
| Test Case ID | UAT-DEV-004 |
| AC Reference | OTEP-521 |
| Status | 🟡 In final testing (QA per Jira) |
| Scenario | Officer with no role assigned sees an explicit "Roles unavailable" state, not a broken or empty page |
| Persona | Farah |
| Pre-conditions | Farah's POCDEX record has no current role/position at all |
| Test Steps | 1. Log in as Farah. 2. Navigate to "Your Development." 3. Scroll to "Based on your current role" section. |
| Test Data | Farah's account — no role on record |
| Expected Result | Clear "Roles unavailable right now" message with explanation; "Based on your current role" recommendations shows an explicit blank-state illustration + title + copy, not silent emptiness |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Section 7 — Browsing Opportunities

*(Squad: Pathfinder)*

### UAT-OPP-001

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-001 |
| AC Reference | OTEP-85 |
| Status | 🟢 Ready for UAT |
| Scenario | Officer sees a correctly sorted grid of opportunity cards on first visit |
| Persona | Priya |
| Pre-conditions | Logged in; open opportunities exist |
| Test Steps | 1. Log in. 2. Land on opportunities listing page. |
| Test Data | Listing with ≥5 open opportunities, varied posting dates |
| Expected Result | Cards shown in 3-column grid, up to 15/page, sorted newest-posted-first |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-002

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-002 |
| AC Reference | OTEP-85 |
| Status | 🟢 Ready for UAT |
| Scenario | Each card displays correct basic info |
| Persona | Priya |
| Pre-conditions | Listing loaded |
| Test Steps | 1. View any card. |
| Test Data | — |
| Expected Result | Title, Agency, Posting Date (absolute format, e.g. "12 May 2026"), Type all visible |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-003

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-003 |
| AC Reference | OTEP-85 |
| Status | 🟢 Ready for UAT |
| Scenario | Closed opportunities are excluded from the listing entirely |
| Persona | Priya |
| Pre-conditions | Listing includes at least one opportunity past its closing date |
| Test Steps | 1. Load the listing. 2. Confirm the closed opportunity is absent. |
| Test Data | One opportunity with closing_date in the past |
| Expected Result | Closed opportunity does not appear in the grid |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-004

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-004 |
| AC Reference | OTEP-267 |
| Status | 🟢 Ready for UAT |
| Scenario | Pagination controls appear when there are more than 15 opportunities |
| Persona | Priya |
| Pre-conditions | Listing has >15 open opportunities |
| Test Steps | 1. Load the listing. 2. Observe pagination controls. |
| Test Data | 16+ open opportunities |
| Expected Result | "Next"/"Previous" controls appear; page indicator shows "Page X of Y" |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-005

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-005 |
| AC Reference | OTEP-267 |
| Status | 🟢 Ready for UAT |
| Scenario | Pagination controls are fully hidden when everything fits on one page |
| Persona | Priya |
| Pre-conditions | Listing has ≤15 open opportunities |
| Test Steps | 1. Load the listing. |
| Test Data | ≤15 open opportunities |
| Expected Result | Pagination controls entirely absent, not just disabled |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-006

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-006 |
| AC Reference | OTEP-268 |
| Status | 🟢 Ready for UAT |
| Scenario | Zero-opportunity state shows a clear message, not a blank page |
| Persona | Priya |
| Pre-conditions | No open opportunities exist |
| Test Steps | 1. Load the listing with zero available opportunities. |
| Test Data | Empty opportunity set |
| Expected Result | "No opportunities available right now" message with supporting text/illustration; no pagination controls shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Section 8 — Filtering

*(Squad: Pathfinder)*

### UAT-OPP-007

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-007 |
| AC Reference | OTEP-86 |
| Status | 🟢 Ready for UAT |
| Scenario | Filtering to a single opportunity type narrows the listing correctly |
| Persona | Priya |
| Pre-conditions | Listing has a mix of types |
| Test Steps | 1. Select "STIP" filter only. |
| Test Data | Listing with STIP, Gig, and Jobs types present |
| Expected Result | Only STIP opportunities shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-008

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-008 |
| AC Reference | OTEP-86 |
| Status | 🟢 Ready for UAT |
| Scenario | Filtering to multiple types shows the union of those types |
| Persona | Priya |
| Pre-conditions | Listing has a mix of types |
| Test Steps | 1. Select "STIP" and "Gig" together. |
| Test Data | Listing with STIP, Gig, and Jobs types present |
| Expected Result | Both STIP and Gig shown, nothing else |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-009

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-009 |
| AC Reference | OTEP-86 |
| Status | 🟢 Ready for UAT |
| Scenario | Active filter persists across pagination |
| Persona | Priya |
| Pre-conditions | Filter active, >15 filtered results |
| Test Steps | 1. Apply a filter. 2. Page to page 2. |
| Test Data | >15 opportunities matching one filter type |
| Expected Result | Filter remains applied on page 2 |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-010

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-010 |
| AC Reference | OTEP-86, OTEP-268 |
| Status | 🟢 Ready for UAT |
| Scenario | A filter combination matching zero results shows the standard empty state |
| Persona | Priya |
| Pre-conditions | A filter combination with no matching opportunities |
| Test Steps | 1. Apply a filter combination with zero matches. |
| Test Data | Filter combo guaranteed to match nothing in test data |
| Expected Result | Same empty-state message as UAT-OPP-006 |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-011

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-011 |
| AC Reference | OTEP-317 |
| Status | 🟢 Ready for UAT |
| Scenario | "Clear all" resets every active filter in one action |
| Persona | Priya |
| Pre-conditions | One or more filters active |
| Test Steps | 1. With filters active, click "Clear all." |
| Test Data | — |
| Expected Result | All filters removed, full unfiltered listing shown, result count updates, "Clear all" option itself disappears |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-012

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-012 |
| AC Reference | OTEP-317 |
| Status | 🟢 Ready for UAT |
| Scenario | "Clear all" is not shown when no filters are active |
| Persona | Priya |
| Pre-conditions | No filters active |
| Test Steps | 1. Load the listing with no filters applied. |
| Test Data | — |
| Expected Result | "Clear all" option is not shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Section 9 — Opportunity Detail Page

*(Squad: Pathfinder)*

### UAT-OPP-013

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-013 |
| AC Reference | OTEP-128 |
| Status | 🟢 Ready for UAT |
| Scenario | Detail page displays full opportunity information |
| Persona | Priya |
| Pre-conditions | Valid opportunity exists |
| Test Steps | 1. Click into an opportunity from the listing. |
| Test Data | Opportunity with all fields populated |
| Expected Result | Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop," Commitment type all shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-014

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-014 |
| AC Reference | OTEP-128 |
| Status | 🟢 Ready for UAT |
| Scenario | "Back to opportunities" link works from the detail page |
| Persona | Priya |
| Pre-conditions | On a detail page |
| Test Steps | 1. Click "Back to opportunities." |
| Test Data | — |
| Expected Result | Returns to the listing |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-015

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-015 |
| AC Reference | OTEP-128 |
| Status | 🟢 Ready for UAT |
| Scenario | Detail page loads correctly via direct/bookmarked URL |
| Persona | Priya |
| Pre-conditions | Valid opportunity ID, officer logged in |
| Test Steps | 1. Save a detail page URL. 2. Access it directly (not via listing click). |
| Test Data | Valid opportunity ID |
| Expected Result | Loads the correct opportunity directly |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-016

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-016 |
| AC Reference | OTEP-128 |
| Status | 🟢 Ready for UAT |
| Scenario | Invalid opportunity ID shows a clean "not found" state |
| Persona | Priya |
| Pre-conditions | — |
| Test Steps | 1. Access a detail URL with an invalid/nonexistent opportunity ID. |
| Test Data | Malformed or nonexistent opportunity ID |
| Expected Result | "Opportunity not found" message with a link back to the listing — not a broken page |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-017

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-017 |
| AC Reference | OTEP-129 |
| Status | 🟢 Ready for UAT |
| Scenario | Deep-link to a closed opportunity shows a clear closed-state message |
| Persona | Priya |
| Pre-conditions | Opportunity past its closing date |
| Test Steps | 1. Access a deep-link to a now-closed opportunity. |
| Test Data | Opportunity with closing_date in the past |
| Expected Result | "This opportunity is no longer available" message, link back to listing |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-018

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-018 |
| AC Reference | OTEP-284 |
| Status | 🟢 Ready for UAT |
| Scenario | "Closing soon" badge shows correctly within the 7-day threshold |
| Persona | Priya |
| Pre-conditions | Opportunity closing within 7 days, strictly in the future |
| Test Steps | 1. View the opportunity's card. 2. View its detail page. |
| Test Data | Opportunity closing in 5 days |
| Expected Result | "Closing soon" badge visible in the same position on both card and detail page |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-019

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-019 |
| AC Reference | OTEP-284 |
| Status | 🟢 Ready for UAT |
| Scenario | "Closing soon" badge does not show for evergreen (no closing date) opportunities |
| Persona | Priya |
| Pre-conditions | Opportunity with nil closing_date |
| Test Steps | 1. View the opportunity's card. |
| Test Data | Opportunity with no closing date set |
| Expected Result | No "Closing soon" badge shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Section 10 — Applying: Careers@Gov

*(Squad: Pathfinder)*

### UAT-APPLY-001

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-001 |
| AC Reference | OTEP-89 |
| Status | 🟢 Ready for UAT |
| Scenario | C@G opportunity detail page shows correct sourced information |
| Persona | Priya |
| Pre-conditions | C@G-sourced opportunity exists |
| Test Steps | 1. Click into a C@G-sourced opportunity. |
| Test Data | C@G opportunity with complete payload |
| Expected Result | Title, agency, description, duration, and available structured fields shown — same layout as OTG detail page |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-002

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-002 |
| AC Reference | OTEP-89 |
| Status | 🟢 Ready for UAT |
| Scenario | Responsibilities/pre-req fields are intentionally excluded from the C@G detail page |
| Persona | Priya |
| Pre-conditions | C@G payload includes responsibility/pre-req fields |
| Test Steps | 1. View the C@G detail page. 2. Confirm responsibilities/pre-reqs are not shown inline. |
| Test Data | C@G payload with responsibilities/pre-req data present |
| Expected Result | That data is NOT shown in CareerCompass, even though it exists in the payload — officer is directed to Careers@Gov for it |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-003

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-003 |
| AC Reference | OTEP-89 |
| Status | 🟢 Ready for UAT |
| Scenario | "Apply via Careers@Gov" deep-links directly to the correct posting |
| Persona | Priya |
| Pre-conditions | Valid C@G opportunity |
| Test Steps | 1. Click "Apply via Careers@Gov." |
| Test Data | — |
| Expected Result | New tab opens, deep-links directly to that specific posting on the real Careers@Gov site — not the homepage; `click-to-cag` event captured |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-004

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-004 |
| AC Reference | OTEP-89 |
| Status | 🟢 Ready for UAT |
| Scenario | C@G posting no longer available post-click is handled entirely on C@G's side |
| Persona | Priya |
| Pre-conditions | C@G posting has been taken down since the officer clicked through |
| Test Steps | 1. Click through to a C@G posting that's since been removed. |
| Test Data | — |
| Expected Result | No CareerCompass-side error state shown; handled by Careers@Gov |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-005

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-005 |
| AC Reference | OTEP-89 |
| Status | 🟢 Ready for UAT |
| Scenario | C@G detail page shows only one apply path |
| Persona | Priya |
| Pre-conditions | C@G opportunity |
| Test Steps | 1. View the C@G detail page. |
| Test Data | — |
| Expected Result | Only "Apply via Careers@Gov" CTA shown — no FormSG or OTG-native apply option |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Section 11 — Applying: FormSG / CareerCompass-Native

*(Squad: Pathfinder)*

### UAT-APPLY-006

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-006 |
| AC Reference | OTEP-319 |
| Status | 🟢 Ready for UAT |
| Scenario | Apply button opens the correct FormSG form for the opportunity |
| Persona | Priya |
| Pre-conditions | Internal Job, STIP, or Gig with valid formsg_url |
| Test Steps | 1. Click "Apply" on the detail page. |
| Test Data | Opportunity with valid formsg_url |
| Expected Result | Opens that opportunity's FormSG form in a new tab |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-007

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-007 |
| AC Reference | OTEP-319 |
| Status | 🟢 Ready for UAT |
| Scenario | Each opportunity's Apply button opens its own correct form, never a mismatched one |
| Persona | Priya |
| Pre-conditions | Two distinct opportunities, each with a different formsg_url |
| Test Steps | 1. Apply on Opportunity A. 2. Return and apply on Opportunity B. |
| Test Data | Two opportunities, distinct formsg_url values |
| Expected Result | Each opens its own correct form |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-008

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-008 |
| AC Reference | OTEP-319 |
| Status | 🟢 Ready for UAT |
| Scenario | Missing formsg_url shows a clear fallback message, not a broken button |
| Persona | Priya |
| Pre-conditions | Opportunity with no formsg_url configured |
| Test Steps | 1. View the detail page for an opportunity with no application link. |
| Test Data | Opportunity with empty/missing formsg_url |
| Expected Result | "Application form unavailable — contact the posting agency" shown in place of the Apply button, no layout shift |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | ⚠️ Confirm representative test data exists — Sprint 5 comments noted the source Excel was missing POC data for many opportunities |

### UAT-APPLY-009

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-009 |
| AC Reference | OTEP-319 |
| Status | 🟢 Ready for UAT |
| Scenario | FormSG form itself being down is handled by FormSG, not CareerCompass |
| Persona | Priya |
| Pre-conditions | formsg_url present, but destination form is closed/unavailable |
| Test Steps | 1. Click Apply on an opportunity whose FormSG form is closed. |
| Test Data | Opportunity with a formsg_url pointing to a closed/unavailable form |
| Expected Result | Officer sees FormSG's own error page — CareerCompass shows no additional error state |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Section 12 — Cross-Cutting

*(Spans all three squads)*

### UAT-XCUT-001

| Field | Value |
|---|---|
| Test Case ID | UAT-XCUT-001 |
| AC Reference | OTEP-205, OTEP-421, OTEP-85 (cross-cutting, no single ticket owns this) |
| Status | 🟡 In final testing |
| Scenario | A competency added via CV upload is immediately consistent across Development summary and profile in one session |
| Persona | Priya |
| Pre-conditions | Logged in |
| Test Steps | 1. Add a competency via CV upload (UAT-ADDCOMP-002). 2. Immediately navigate to "Your Development." 3. Navigate to "Jobs and Opportunities." |
| Test Data | Priya's account |
| Expected Result | New competency appears on Development summary with no delay/refresh needed; session/identity carries over to Opportunities without re-authentication |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-XCUT-002

| Field | Value |
|---|---|
| Test Case ID | UAT-XCUT-002 |
| AC Reference | N/A — expectation-setting, not a build defect |
| Status | 🔴 Not built yet |
| Scenario | Confirm officers are not shown competency-based job matching (explicitly deferred to a later release) |
| Persona | Priya |
| Pre-conditions | Officer has added competencies via UAT-ADDCOMP series |
| Test Steps | 1. Add competencies. 2. Browse Opportunities listing. |
| Test Data | Priya's account |
| Expected Result | No competency-based match indicator or filtering appears — this is intentional, not a defect. Flag if Chris/XZ believe this gap will confuse pilot officers or generate support tickets. |
| Actual Result | *(filled during test run)* |
| Pass/Fail | N/A — expectation confirmation, not pass/fail |
| Tested By/Date | *(filled during test run)* |
| Comments | Sign-off here means "we understand and accept this gap for MVP," not "this works correctly" |

### UAT-XCUT-003

| Field | Value |
|---|---|
| Test Case ID | UAT-XCUT-003 |
| AC Reference | OTEP-127 (design decision only, enforcement not built) |
| Status | 🔴 Not built yet |
| Scenario | Confirm ringfencing enforcement (agency/job-family restriction on visible jobs) is not yet active |
| Persona | Farah |
| Pre-conditions | — |
| Test Steps | 1. Log in as Farah (no role assigned). 2. Browse Opportunities listing. |
| Test Data | Farah's account |
| Expected Result | *(Confirm current behavior — since enforcement isn't built, document what actually happens today so it's not mistaken for a defect)* |
| Actual Result | *(filled during test run)* |
| Pass/Fail | N/A — behavior documentation, not pass/fail |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

# Not Yet Ready for UAT Test-Case Status

Still in the plain-language BO review documents' "not yet ready" lists, no test case IDs yet — will be added once built:

- Real WOG AD login (still interim Keycloak stub)
- Keyword search
- Filter by job category/family
- C@G opportunities appearing automatically in the main listing
- Ringfencing enforcement (design decided, not built)
- Full FormSG apply-tracking flow (webhook, notifications) — open item #57, unconfirmed scope
- "What do job types mean" explainer
- Agency logos on detail page
- Specific broken-FormSG-link fallback message (OTEP-131, in progress)
- Course discovery and enrollment (no destination built yet behind the "Learning and Courses" nav item)
- Secondment/double-hatting officer profile handling

---

# Personas & Test Accounts

Per the UAT Operating Model's rule that reserved, non-mutated profiles are required where data can't be freely created — each persona below needs an actual reserved POCDEX/test account, not just a conceptual description.

| Persona | Data shape required | Reserved account status |
|---|---|---|
| **Priya** — Standard pilot officer | Complete record: valid role, agency, title, full Core + Functional competencies | *(needs assignment)* |
| **Marcus** — Data gap | Valid login, but role-based competencies unresolvable (bad/missing job ID mapping) | *(needs assignment)* |
| **Farah** — No role assigned | No role/position on POCDEX record at all | *(needs assignment)* |
| **Wei Ling** — Incomplete HR data | Agency name or job title field blank/"NA" | *(needs assignment)* |
| **Daniel** — Shared-device test | Any valid account — persona is about device/session context, not data shape; needs a second distinct account for the shared-device test | *(needs assignment — 2 accounts)* |
| **Kumar** — Hasn't self-declared anything | Complete role + role-based competencies, zero self-declared competencies added | *(needs assignment)* |

**Also needed (data states, not officer personas):**
- Opportunity record with missing formsg_url (UAT-APPLY-008)
- Listing/filter state producing genuinely zero results (UAT-OPP-006, UAT-OPP-010)
- Role profile with 9+ Functional Competencies assigned (UAT-COMP-002)
- 16+ open opportunities in one dataset (UAT-OPP-004)

**Action needed:** confirm with Tech Leads (Pow Hwee — Pathfinder, Adrian Lo — Core, Victor — Intelligence; per Operating Model RACI) which real or synthetic records satisfy each persona/data state, and reserve them before Phase 0 so they aren't mutated mid-UAT. Full requirements detail in the [UAT Test Data Prep List](2026-07-17-W29-uat-test-data-prep-list.md).

---

## What happens after you sign off

1. 🟢 Test cases move directly into the Jira UAT board (CC-UAT) for execution
2. 🟡 Test cases get their final QA pass, then return here to confirm nothing changed before UAT
3. 🔴 Test cases return once built, in this same format
4. Per the Operating Model's severity rules: Critical/High defects found during execution must be fixed before sign-off; Medium/Low are risk-assessed jointly

---

*Generated: 2026-07-17*
*Consolidates: [CareerCompass UAT Test Cases](2026-07-17-W29-careercompass-uat-test-cases.md) (26 cases) + [Pathfinder UAT Test Cases](2026-07-17-W29-pathfinder-uat-test-cases.md) (27 cases) into one 53-case document, per Adrian Ang's consolidation request*
*Plain-language BO pre-review versions (business-process/journey format) remain separate: [CareerCompass](2026-07-17-W29-careercompass-full-bo-scenarios.md), [Pathfinder](2026-07-17-W29-pathfinder-bo-uat-scenarios-signoff.md) — use those first for Chris/XZ's intent sign-off, then this document for execution*
*Next: Resolve UAT-ADDCOMP-003's open AC gap; assign real test accounts to each persona; load into Jira UAT board*
