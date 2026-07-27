# Sprint 6 Test Scenarios — Gherkin Format

**Source:** [2026-07-08-W28-sprint6-test-scenarios.md](2026-07-08-W28-sprint6-test-scenarios.md) (table format), converted to Gherkin.

**Scope covered:** OTEP-71 (WOG AD login), OTEP-111 (no-access page), OTEP-110 (login failure), OTEP-613 (default agency logo) — the four "Ready" tickets recommended as Sprint 6's opening commitment.

**Not covered:** OTEP-594 and OTEP-331 are excluded. Both are flagged Not ready in the sprint plan brief — writing Given/When/Then against AC that's still marked NEEDS RE-SCOPE would bake in false precision. Add these once the re-scope lands.

---

## Feature: WOG AD Login (OTEP-71)

*As a public officer from an onboarded agency, I want to log in to OTEP via WOG AD with a single click, so that I can access the platform using my existing government credentials.*

**Tags:** sprint-6, auth

**Background:** The officer is not currently logged in.

### Scenario: Successful login for an onboarded agency with an active POCDEX profile
*Tags: happy-path, critical*

- **Given** the officer's agency is onboarded to OTEP
- **And** the officer has an active POCDEX profile
- **When** the officer clicks "Log in with WOG AD"
- **And** the officer authenticates successfully with valid WOG AD credentials
- **Then** the officer lands directly on the OTEP home page
- **And** no manual credential entry is required within OTEP
- **And** no account creation or registration step is shown

### Scenario: Login attempt from a non-onboarded agency
*Tags: error-handling, high*

- **Given** the officer has valid WOG AD credentials
- **But** the officer's agency is not onboarded to OTEP
- **When** the officer authenticates successfully with WOG AD
- **Then** the officer sees a message explaining their agency is not yet onboarded
- **And** the officer does not see a generic error page
- **And** no OTEP session is created

### Scenario: Login attempt with invalid WOG AD credentials
*Tags: error-handling, critical*

- **Given** the officer is not a recognized public officer account
- **When** the officer attempts to log in with invalid credentials
- **Then** WOG AD returns a login failure
- **And** the officer sees a clear error message
- **And** no OTEP session is created

> Note: overlaps with OTEP-110's AC ("handled entirely at WOG AD") — confirm which ticket owns this behavior before both are built independently.

### Scenario: WOG AD account is disabled or locked
*Tags: edge-case, medium*

- **Given** the officer's WOG AD account is disabled or locked
- **When** the officer attempts to log in with WOG AD
- **Then** WOG AD returns an account-disabled-specific error
- **And** OTEP passes through AD's specific message rather than a generic one

> Note: AC states this is handled by WOG AD — confirm whether any OTEP-side testing is actually required.

### Scenario: WOG AD service is unreachable
*Tags: error-handling, high*

- **Given** the WOG AD service is down or unreachable
- **When** the officer clicks "Log in with WOG AD"
- **Then** the officer sees a graceful error message
- **And** the officer is not shown a blank page or unhandled exception
- **And** no partial or corrupted session state is created

### Scenario: Officer logs in concurrently on a second device
*Tags: edge-case, medium, needs-decision*

- **Given** the officer already has an active session on Device A
- **When** the officer logs in via WOG AD on Device B
- **Then** the expected behavior is undefined

> Blocked: this is an open product question in OTEP-71's own description. Needs an explicit decision (allow both sessions, or invalidate Device A) before this scenario can be asserted.

### Scenario: Officer's agency is de-onboarded after a prior successful login
*Tags: edge-case, low, needs-decision*

- **Given** the officer previously logged in successfully
- **And** the officer's agency is subsequently removed from OTEP's onboarded list
- **When** the officer attempts to log in again
- **Then** the expected behavior is undefined

> Blocked: presumably should match the "agency not onboarded" scenario above, but not explicitly confirmed in the AC.

---

## Feature: Officers With No Access (OTEP-111)

*As an officer with no role profile or a deactivated status, I want to see a clear message telling me I do not have access, so that I am not left wondering or trying multiple times.*

**Tags:** sprint-6, auth

### Scenario: Officer has no role profile
*Tags: happy-path, critical*

- **Given** the officer is not part of the pilot
- **And** the officer has no role profile
- **When** the officer authenticates successfully via WOG AD
- **Then** the officer sees the message "Oops, you do not seem to have access at the moment. Please contact your HR for more information."
- **And** the officer is not granted app access

### Scenario: Officer's POCDEX profile is deactivated
*Tags: happy-path, high*

- **Given** the officer has left the service
- **And** the officer's POCDEX profile is marked inactive
- **When** the officer authenticates successfully via WOG AD
- **Then** the officer sees the same no-access message as an officer with no role profile
- **And** the officer is not granted app access

### Scenario: No-access screen meets quality bar
*Tags: edge-case, low*

- **Given** the no-access screen is triggered by any path
- **Then** the message text matches the approved copy exactly
- **And** the page is screen-reader accessible
- **And** the officer can navigate away without being trapped

---

## Feature: Login Failure Using WOG AD (OTEP-110)

*As an officer, I want to see clear instructions if I fail to log in using WOG AD, so that I understand what happened and what to do next.*

**Tags:** sprint-6, auth

### Scenario: WOG AD authentication fails
*Tags: error-handling, medium, needs-scope-check*

- **Given** the officer attempts to log in with credentials WOG AD rejects
- **When** WOG AD returns a login failure
- **Then** the officer sees clear instructions on what happened and what to do next
- **And** no OTEP session is created

> Scope flag: AC states failure is "handled entirely at WOG AD." Confirm with engineering whether OTEP renders any UI here at all — if not, this ticket may have no testable OTEP-side behavior and should be re-scoped or closed rather than tested as-is.

---

## Feature: Default Agency Logo (OTEP-613)

*As an officer browsing opportunities, I want to see a default logo when an agency has none, so that the listing never shows a broken image.*

**Tags:** sprint-6, ui

### Scenario: Opportunity card for an agency with no logo asset
*Tags: happy-path, low*

- **Given** an opportunity's agency has no logo asset on file
- **When** the officer loads the opportunity listing page
- **Then** the opportunity card displays a default placeholder logo
- **And** no broken image icon or blank space is shown

### Scenario: Agency logo URL fails to load
*Tags: edge-case, low, unconfirmed-scope*

- **Given** an agency has a logo URL on file
- **But** the logo asset returns a 404 or times out
- **When** the officer loads the opportunity listing page
- **Then** the opportunity card falls back to the default placeholder logo

> Scope note: OTEP-613 has no description in Jira — this fallback-on-error case is inferred, not confirmed AC. Confirm with engineering whether it's in scope for this ticket.

---

## Open Items Carried From Tag Flags

| Tag | Scenario | Action needed |
|---|---|---|
| needs-decision | Concurrent sessions (OTEP-71) | Product decision: allow both, or invalidate the earlier session |
| needs-decision | Agency de-onboarded post-login (OTEP-71) | Confirm behavior matches the "not onboarded" scenario |
| needs-scope-check | WOG AD login failure (OTEP-110) | Confirm with engineering whether there's any OTEP-rendered UI at all |
| unconfirmed-scope | Logo fallback on broken URL (OTEP-613) | Confirm scope — ticket has no Jira description |

*Generated: 2026-07-08*
