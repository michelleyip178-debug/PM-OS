# CareerCompass — UAT Test Cases

**Format:** One test case per field, per the [UAT Operating Model](../meeting-notes/2026-07-17-W29-uat-operating-model.md) — Test Case ID, AC Reference, Scenario, Pre-conditions, Test Steps, Test Data, Expected Result, Actual Result, Pass/Fail, Tested By/Date, Comments.

**AC References:** Jira ticket IDs the scenario is derived from (live pull, 2026-07-17)

**Status key:** 🟢 Ready for UAT · 🟡 In final testing · 🔴 Not built yet

**Personas:** See persona definitions at the end of this document — each test case names which persona/account to use, per the Operating Model's mandatory persona field

---

## Login & Identity (Squad: Pathfinder — Login · Core — Profile Details)

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
| Status | 🟢 Ready (per AC) / 🟡 pending final testing status |
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

## Navigation (Squad: Core)

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

## Competencies — Viewing (Squad: Core)

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

## Competencies — Adding (Squads: Core, Intelligence)

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

## Competencies — Managing Visibility (Squad: Core)

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

## Development Summary (Squad: Core)

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

## Opportunities & Applying (Squad: Pathfinder)

**Not duplicated here** — see [Pathfinder UAT Test Cases](2026-07-17-W29-pathfinder-uat-test-cases.md) for the full converted set (UAT-OPP-xxx, UAT-APPLY-xxx). Referenced here for sequencing only: this is the natural next step after an officer reviews their Development gaps (UAT-DEV series above).

---

## Courses (Squad: Core) — 🔴 Not built yet

No test cases yet — "Learning and Courses" nav destination doesn't exist. Placeholder only; will be added once scoped and built. If Chris/XZ have strong expectations for this flow (e.g., should it connect to competency gaps from UAT-DEV-002/003?), capture now before scoping.

---

## Cross-Cutting (All Squads)

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

## Personas — Test Accounts Required

Per the UAT Operating Model's rule that reserved, non-mutated profiles are required where data can't be freely created — each persona below needs an actual reserved POCDEX/test account, not just a conceptual description.

| Persona | Data shape required | Reserved account status |
|---|---|---|
| **Priya** | Complete record: valid role, agency, title, full Core + Functional competencies | *(needs assignment)* |
| **Marcus** | Valid login, but role-based competencies unresolvable (bad/missing job ID mapping) | *(needs assignment)* |
| **Farah** | No role/position on POCDEX record at all | *(needs assignment)* |
| **Wei Ling** | Agency name or job title field blank/"NA" | *(needs assignment)* |
| **Daniel** | Any valid account — persona is about device/session context, not data shape | *(needs assignment — shared-device test needs 2 accounts)* |
| **Kumar** | Complete role + role-based competencies, zero self-declared competencies added | *(needs assignment)* |

**Action needed:** confirm with Tech Leads (per Operating Model RACI — Tech Leads own "preparing UAT test data aligned to personas") which real or synthetic POCDEX records satisfy each persona, and reserve them before Phase 0 so they aren't mutated mid-UAT.

---

*Generated: 2026-07-17*
*Converted from: [CareerCompass BO business-process scenarios](2026-07-17-W29-careercompass-full-bo-scenarios.md) — that document remains the plain-language version for BO pre-review; this document is the execution-ready format per the UAT Operating Model*
*Next: Assign real test accounts to each persona; resolve UAT-ADDCOMP-003's open AC question before it can be marked pass/fail-ready*
