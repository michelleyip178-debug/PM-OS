# Test Scenarios: Pathfinder Sprint 6 (In Progress Stories)

**Source:** Live Jira ACs for the 9 In Progress, non-subtask Pathfinder stories (pulled 2026-07-17)

**Total scenarios:** 42

**Coverage:** Happy path / edge cases / error handling / data-mapping / accessibility

**Sprint:** OTEP-Pathfinder Sprint 6 (2026-07-14 → 2026-07-26)

⚠️ **Read the "Open questions blocking test execution" section before running these** — several stories have unresolved threads in Jira comments that determine what "expected result" actually means. Testing against an assumption here will produce false-fail or false-pass results.

---

## OTEP-88 — C@G opportunities in the listing page

**Assignee:** Léo Milbor · **Points:** 5

### Scenario 1: C@G opportunity renders in listing with badge
**Preconditions:** C@G ingestion pipeline live, at least one C@G opportunity with all required fields

**User role:** Logged-in officer

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Load opportunities listing | C@G opportunities appear alongside OTG opportunities |
| 2 | Observe C@G card | Careers@Gov badge visible without hover/click, per Amber's spec |
| 3 | Check card fields | Title, agency, opportunity type, closing date render — same layout as OTG cards |

**Priority:** Critical

---

### Scenario 2: C@G card with missing required field — graceful degradation
**Preconditions:** C@G payload missing one non-critical field

**User role:** Logged-in officer

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Load listing with the incomplete C@G record | Card renders with available fields; listing does not break |

⚠️ **Blocked on an open decision** (per AC4): fallback behaviour was TBC with Pow Hwee + Amber as of 8 Jun — confirm whether the resolved behaviour is "hide field," "show placeholder," or "drop card entirely" before writing this as pass/fail. As written, "does not break" is testable; the *specific* fallback rendering is not yet confirmed.

**Priority:** High

---

### Scenario 3: Pagination, filter, and empty/error states apply consistently to C@G results
**Preconditions:** Mixed OTG + C@G listing, >15 results

**User role:** Logged-in officer

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Paginate to page 2 | C@G and OTG results paginate together, no duplicates or drops |
| 2 | Apply type filter (OTEP-86) | C@G results included in filtered set correctly |
| 3 | Filter to a category with zero C@G or OTG matches | Standard empty state shown |

**Priority:** High

---

### Scenario 4: C@G detail page and apply CTA — explicitly out of scope
**Preconditions:** N/A

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Click into a C@G card from the listing | **Do not test detail page content (OTEP-87) or apply deep-link (OTEP-89) against this ticket** — out of scope per AC |

**Priority:** N/A (scope-boundary check only)

---

## OTEP-305 — Login and Logout (replace Keycloak page with actual)

**Assignee:** Unassigned · **Points:** 2

### Scenario 5: WOG AD login — happy path
**Preconditions:** Valid WOG AD credentials

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Click "Log in with WOG AD" | OTEP authenticates against AD in background — no login form shown |
| 2 | Auth succeeds | OTEP loads |

**Priority:** Critical

---

### Scenario 6: Logout — session termination
**Preconditions:** Logged-in officer

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Click "Log out" | Session ends, officer taken to login page |
| 2 | Press browser back button | Not let back into OTEP — redirected to login |
| 3 | Type any OTEP URL directly | Redirected to login page |

**Priority:** Critical

---

### Scenario 7: WOG AD auth failure — underspecified, needs clarification before testing
**Preconditions:** Invalid or failed WOG AD auth attempt

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Attempt login, AD auth fails | **AC does not specify what the officer sees.** Pow Hwee flagged this exact gap in comments (28 May) — "login is underspecified, what happens if WOG AD auth fails?" |

⚠️ **Cannot execute as a pass/fail test yet.** Also flagged: Rathika's 15 Jul comment says the no-login-form behaviour isn't visible in QA env — confirm whether this is an environment gap or an implementation gap before testing.

**Priority:** Critical (blocking — resolve before Sprint 6 QA pass)

---

### Scenario 8: Dependency check — WOG AD onboarding (OTEP-350)
**Preconditions:** N/A

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Confirm OTEP-350 (Onboard WOG AD) status before testing this story | Pow Hwee flagged this as a likely blocking dependency (28 May) — confirm resolved before treating OTEP-305 as testable end-to-end |

**Priority:** High (pre-test gate)

---

## OTEP-405 — Keyword Search for Opportunities

**Assignee:** Thomas Huchedé · **Points:** 3

### Scenario 9: Basic keyword search — happy path
**Preconditions:** Listing has opportunities with varied titles/agencies

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Type "data" in search box | No update yet — listing does not update until Search is clicked (confirmed AC) |
| 2 | Click Search | Listing shows only opportunities whose title/agency match "data" — e.g. "Data Analyst," "Senior Data Engineer" |

**Priority:** Critical

---

### Scenario 10: Case-insensitivity and partial match
**Preconditions:** Known opportunity titled "Data Analyst"

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Search "DATA" (uppercase) | Same results as lowercase "data" |
| 2 | Search "dat" (partial) | Partial match returns "Data Analyst" |

**Priority:** High

---

### Scenario 11: Zero results
**Preconditions:** N/A

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Search a keyword matching nothing | Standard no-results state shown |

**Priority:** High

---

### Scenario 12: Search + filter combined
**Preconditions:** Active type filter applied

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Apply a type filter, then search a keyword | Both constraints apply together |

**Priority:** High

---

### Scenario 13: Clear search retains filters
**Preconditions:** Active search + active filter

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Clear the search box | Full listing returns for that filter — filter itself is NOT cleared |

**Priority:** Medium

---

### Scenario 14: Relevance ordering
**Preconditions:** Multiple matching results with varying match strength

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Search a keyword with multiple exact + partial matches | Results ordered by relevance first, then posting date |

⚠️ **"Relevance" was clarified in comments (17 Jun) as "exact match of the search text in title or agency"** — not occurrence count or position weighting, despite Rathika's original question suggesting a more complex model. Test against the simpler, confirmed definition.

**Priority:** Medium

---

### Scenario 15: Description-match snippet — explicitly out of scope
**Preconditions:** N/A

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Search a term that only appears in an opportunity's description, not title/agency | **Do not test this as a defect** — description matching is explicitly out of scope for MVP; only title/agency are searched |

**Priority:** N/A (scope-boundary check)

---

### Scenario 16: Known open bug
**Preconditions:** N/A

OTEP-668 ([BUG] Bugs open for Search opportunities feature) is still To Do — pull its contents before sign-off; there is at least one known unresolved defect in this feature.

**Priority:** Critical (tracking note, not a new scenario)

---

## OTEP-386 — Opportunity type explainer (tooltip/modal)

**Assignee:** Thomas Huchedé · **Points:** 2

### Scenario 17: Open and read the explainer
**Preconditions:** Officer on listing page

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Locate "Learn more about the different opportunity types" link in page header | Link visible below page description |
| 2 | Click link | In-app page or modal opens explaining all four opportunity types |
| 3 | Read content | Copy matches agreed text for Internal Job, STIP, Gig, SJR exactly |

**Priority:** Medium

---

### Scenario 18: Close/dismiss
**Preconditions:** Modal/page open

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Use close/back action | Modal or page closes, visible action exists |

**Priority:** Medium

---

### Scenario 19: Accessibility — keyboard navigation and focus trap
**Preconditions:** Keyboard-only navigation

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Tab to the "Learn more" link | Link is keyboard-focusable |
| 2 | Activate via keyboard (Enter/Space) | Modal opens, focus traps inside it |
| 3 | Close via keyboard | Focus returns to the triggering link, not lost to page top/body |

**Priority:** High (explicit AC, easy to silently break)

---

## OTEP-283 — Ministry icons on detail page

**Assignee:** Unassigned · **Points:** 1

### Scenario 20: Icon displays for mapped agency
**Preconditions:** Officer viewing detail page for an opportunity whose agency has a mapped icon

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Load opportunity detail page | Ministry icon displays next to agency name |

**Priority:** Medium

---

### Scenario 21: Missing icon — placeholder fallback
**Preconditions:** Agency exists in reference table but has no matching icon in the CSV (Thomas listed ~13 such agencies, 29 Jun)

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Load detail page for an opportunity from one of the unmapped agencies | Placeholder icon shown (per Michelle's 1 Jul confirmation: "for those with missing logos, we will just have a placeholder") |

**Priority:** High

---

### Scenario 22: QA environment deployment check
**Preconditions:** N/A

Rathika flagged (15 Jul) that logos aren't visible in QA env — confirm this story is actually deployed there before running Scenarios 20–21, or these will false-fail on an environment gap, not a feature defect.

**Priority:** Critical (pre-test gate)

---

## OTEP-437 — Filter by job family (C@G/OTG unified WOG category)

**Assignee:** Hao Eng · **Points:** 3

This is the most data-mapping-heavy story in the sprint — the WOG category mapping table in the ticket is large and has multiple explicit "not in ref_job_family, have to add" notes. Test data needs to specifically include the edge-case rows, not just clean happy-path categories.

### Scenario 23: C@G opportunity appears under correct WOG category (AC1)
**Preconditions:** C@G opportunity tagged with a mapped Indus Code (e.g. 0001 → Finance)

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Filter listing by "Finance" | C@G opportunity with Indus Code 0001 appears in results |

**Priority:** Critical

---

### Scenario 24: C@G and OTG appear together, unlabeled by source (AC2)
**Preconditions:** Same WOG category has both a C@G and an OTG opportunity

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Filter by that category | Both appear in the same results list, no source label/distinction shown |

**Priority:** High

---

### Scenario 25: C@G opportunity with no job category still visible (AC3)
**Preconditions:** C@G listing has no job category tag

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Browse listing with no filter applied | Opportunity is visible — not silently dropped |

**Priority:** High

---

### Scenario 26: Unrecognised C@G job category — no error, no disappearance (AC4)
**Preconditions:** C@G introduces an Indus Code not yet in the mapping table

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Browse listing containing this opportunity | Opportunity still appears — no error, not missing from results |

**Priority:** Critical (this is the resilience case most likely to actually occur, since C@G is an external feed)

---

### Scenario 27: Specific mapping edge cases — categories flagged "not in ref_job_family"
**Preconditions:** Test data covering: Education & Skills Development, Environment & Resources, Research & Innovation, Urban & Physical Planning, Land & Estate Management — all explicitly noted in the ticket as needing to be *added* to ref_job_family, not already present

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Filter by each of these five categories | Confirm the new ref_job_family rows have actually been added and opportunities map correctly — **do not assume this is done just because the mapping table specifies it** |

⚠️ **Open question in comments (14–15 Jul):** how unmatched records surface in the "error report" view is still being sorted out between Hao Eng, Pow Hwee, and Imelda. Confirm this is resolved before treating AC4's "no error" behaviour as verifiable — if there's a separate operational error-report view, testers need to know whether that's in scope for this UAT pass or not.

**Priority:** Critical

---

### Scenario 28: OTG job family exact-match vs. fallback logic
**Preconditions:** One OTG opportunity with a job_family that exactly matches ref_job_family; one that doesn't

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Check opportunity record for the exact-match case | job_family_id populated |
| 2 | Check the non-matching case | Only job_family_label and job_family_code populated, no job_family_id (no FK) — per Hao Eng's 15 Jul comment | 

**Priority:** Medium (data-integrity check, likely needs DB-level verification, not just UI)

---

## OTEP-390 — Ringfenced opportunity detail page states

**Assignee:** Thomas Huchedé

### Scenario 29: Eligible officer — standard experience
**Preconditions:** Officer eligible for a ringfenced opportunity (matches agency/job family inclusion rule)

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | View detail page | Renders normally, no eligibility notice, standard Apply CTA — no eligibility indicator of any kind (confirmed removed per Michelle's 7 Jul comment) |

**Priority:** Critical

---

### Scenario 30: Ineligible officer via direct URL / shared link
**Preconditions:** Officer NOT eligible, logged in, accessing via shared URL/EDM/bookmark

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Land on detail page | Page loads with clear notice: "This opportunity is not available to you." |
| 2 | Check for listing link | Link back to full listing always visible |

**Priority:** Critical

---

### Scenario 31: POCDEX lookup failure — silent degradation
**Preconditions:** Simulate POCDEX unavailable/lookup failure for officer's agency/job family

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Load detail page during POCDEX outage | Page renders normally, no eligibility rules applied — access is NOT blocked on a failed lookup |

**Priority:** Critical (fail-open behaviour — worth double-checking this is actually the intended security posture, not just the documented one, given it means officers get through when eligibility can't be verified)

---

### Scenario 32: Unauthenticated access — redirect and return
**Preconditions:** Not logged in

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Access detail page via direct URL | Redirected to login |
| 2 | Complete login | Returned to original detail page URL, not the generic listing |

**Priority:** Critical

---

### Scenario 33: Listing sort order for ringfenced content
**Preconditions:** Mixed ringfenced STIP/Gig and open opportunities

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Load listing | Ringfenced STIP/Gig sorted by posted date (latest first); open opportunities (mixed) also by posted date latest-first |

⚠️ **Open question from Rathika (7 Jul):** whether sort is "default by posted_date within pinned items (listed first) and ineligible cards" is still unclear — confirm exact sort/grouping behaviour before finalizing this as pass/fail.

**Priority:** Medium

---

### Scenario 34: OTEP-133 absorbed — closure check
**Preconditions:** N/A

Confirm OTEP-133 (EDM deep-link) is formally closed now that its scenario is covered by AC3–6 above — don't test it as a separate open ticket.

**Priority:** N/A (housekeeping)

---

## OTEP-131 — Missing or broken FormSG application link

**Assignee:** Thomas Huchedé · **Points:** 2

### Scenario 35: Missing formsg_url — Apply button replaced
**Preconditions:** Internal Job, STIP, or Gig opportunity with empty/missing formsg_url

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | View detail page | Apply button NOT shown — replaced with "Application form unavailable — contact the posting agency" |
| 2 | Check layout | Message occupies same position as Apply button would — no layout shift |

**Priority:** Critical

---

### Scenario 36: FormSG form down/closed (URL present but form unavailable)
**Preconditions:** formsg_url present, but FormSG form itself is down or closed

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Click Apply | Officer lands on FormSG's own error page — CareerCompass shows no additional error state |

**Priority:** High

---

### Scenario 37: SJR — no Apply button, no error message
**Preconditions:** SJR-type opportunity

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | View SJR detail page | Neither Apply button nor the "unavailable" error message is shown — no application flow for SJRs in MVP |

**Priority:** Medium

---

### Scenario 38: Data completeness — known gap
**Preconditions:** N/A

Thomas's 25 Jun comment confirms the source Excel is missing POC data for many opportunities, so this ticket is partially blocked by data, not just code. Confirm with Rama/data owner whether representative test data (with and without formsg_url) actually exists before running Scenarios 35–36, or these will be untestable in QA/UAT.

**Priority:** Critical (pre-test gate — Rathika flagged the same concern 15 Jul: "does this mean the actual implementation is blocked by data?")

---

## OTEP-444 — Azure/Entra AD mock solution for testing

**Assignee:** Léo Milbor · **Points:** 3

This is infrastructure/test-tooling, not a user-facing story — scenarios here validate the mock's fidelity, not an officer journey.

### Scenario 39: Mock IdP emits correct claims
**Preconditions:** Mock Entra AD (secondary Keycloak realm) configured

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Authenticate against the mock | `oid`, `tid`, and `groups` claims emitted correctly via custom mappers |
| 2 | Validate token signature | Signature validates deterministically |

**Priority:** High

---

### Scenario 40: Token version parity with production
**Preconditions:** Mock configured for the same OIDC version as production (v1.0 vs v2.0)

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Inspect claims returned | Matches production's actual version — e.g. `upn` (v1.0) vs `preferred_username` (v2.0), not silently defaulted to whichever is easiest to mock |

⚠️ **This is explicitly flagged by Léo as unresolved** ("Our configuration should mirror the exact production version" — implies it currently might not). Confirm which version production actually uses before treating this as pass/fail.

**Priority:** High

---

### Scenario 41: Real Azure AD egress path (parallel/fallback check)
**Preconditions:** Per Pow Hwee's 24 Jun comment, real Azure AD testing may now be possible (real user ID required; egress being set up by Boon Siang)

| Step | Action | Expected Result |
|------|--------|------------------|
| 1 | Check current status of the egress path with Boon Siang | Determine whether Sprint 6 testing should use the real Azure AD path instead of/alongside the Keycloak mock — this may make some mock-fidelity scenarios above moot |

**Priority:** Medium (status-check, could change test approach for this story entirely)

---

### Scenario 42: Claims/groups handling — offloaded to POCDEX
**Preconditions:** N/A

Léo's own description flags this as unresolved ("I didn't take into account how we would handle claims/groups/roles... this is, for now, offloaded to POCDEX"). Not independently testable yet — track as an open design question, not a scenario, until it's scoped.

**Priority:** N/A (tracking note)

---

## Coverage Matrix

| Story | Happy Path | Edge Cases | Error Handling | Data/Mapping | Accessibility | Blocked by open question |
|---|---|---|---|---|---|---|
| OTEP-88 | ✅ | ✅ | ✅ | — | — | ✅ (AC4 fallback) |
| OTEP-305 | ✅ | — | ✅ | — | — | ✅ (auth failure UX) |
| OTEP-405 | ✅ | ✅ | ✅ | — | — | — |
| OTEP-386 | ✅ | — | — | — | ✅ | — |
| OTEP-283 | ✅ | ✅ | — | — | — | ✅ (QA deploy status) |
| OTEP-437 | ✅ | ✅ | ✅ | ✅ | — | ✅ (error-report view) |
| OTEP-390 | ✅ | ✅ | ✅ | — | — | ✅ (sort order) |
| OTEP-131 | ✅ | ✅ | ✅ | — | — | ✅ (data completeness) |
| OTEP-444 | — | ✅ | — | ✅ | — | ✅ (token version, real AD path) |

---

## Open questions blocking test execution

*(Every story in this sprint has at least one — this is the real headline finding.)*

1. **OTEP-88 (AC4):** C@G fallback behaviour for missing fields — hide/placeholder/drop — still TBC as of the last comment.
2. **OTEP-305:** WOG AD auth-failure UX is unspecified; QA env may not reflect intended login behaviour yet (Rathika, 15 Jul).
3. **OTEP-283:** Confirm QA env actually has this deployed before testing — Rathika couldn't see logos as of 15 Jul.
4. **OTEP-437:** How unmatched job-category records surface in the "error report" view — still being worked out between Hao Eng/Pow Hwee/Imelda as of 14–15 Jul.
5. **OTEP-390:** Exact sort/grouping behaviour for pinned vs. ineligible cards still unclear per Rathika's 7 Jul question.
6. **OTEP-131:** Source Excel is missing POC data for many opportunities — confirm test data actually exercises both the missing-link and broken-link paths.
7. **OTEP-444:** Token version (v1.0 vs v2.0) parity with production unconfirmed; real Azure AD egress path may supersede the mock entirely — check status with Boon Siang before finalizing test approach.

**Recommendation:** Raise items 1, 4, 5, and 7 at today's OTEP Team 2 stand-up or Squad Sync — they're the ones most likely to change what "pass" means, not just add detail.

---

## Test Data Requirements

- **C@G opportunities:** at least one complete record, one with a missing non-critical field, one with an unmapped Indus Code
- **OTG opportunities:** at least one with job_family exactly matching ref_job_family, one that doesn't
- **WOG category edge cases:** opportunities specifically covering Education & Skills Development, Environment & Resources, Research & Innovation, Urban & Physical Planning, Land & Estate Management (all flagged as needing new ref_job_family rows)
- **Ringfencing:** one eligible-officer/opportunity pair, one ineligible pair reachable via direct URL
- **FormSG links:** opportunities with formsg_url present-and-working, present-but-form-down, and missing/empty
- **SJR opportunity:** at least one, to confirm no Apply button/error message appears
- **Agencies without icons:** at least one of the ~13 agencies Thomas listed as missing icon mappings
- **WOG AD test accounts:** pilot-agency account (valid), non-pilot agency account, deactivated POCDEX profile — needed regardless of mock vs. real Azure AD path

---

*Generated: 2026-07-17*
*Source: Live Jira sync (03-stories/jira-sync/Sprint-34620-OTEP-Pathfinder-Sprint-6/), pulled 2026-07-16*
*Next: Confirm open questions above before QA execution; consider whether Critical-priority blocked scenarios (OTEP-305 Scenario 7, OTEP-437 Scenario 27) need same-day escalation given they gate the rest of their story's test pass*
