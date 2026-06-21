---
date: 2026-06-11
sprint: OTEP-Pathfinder Sprint 4 (14–28 Jun 2026)
type: sprint-planning
---

# Sprint 4 Planning — MoSCoW + ACs + Tasks + Points

**Story point scale:** 1 = trivial (< half day) · 2 = small (1 day) · 3 = medium (2 days) · 5 = complex (3–4 days) · 8 = large (needs splitting)

**Capacity:** Léo, Thomas, Hao Eng (all full-stack) + Pow Hwee (tech lead/arch) + Rathika (QA/Playwright)

---

## Pre-Sprint Actions — Michelle to resolve before Mon 15 Jun

1. **OTEP-87 ACs** — remove FormSG/competency language; lock C@G-only scope (no competency block in S4)
2. **OTEP-358 spike output** — Michelle owns; confirm recommendation written and shared with Léo before OTEP-403 starts
3. **OTEP-393 + OTEP-283** — both gated on Amber design assets; don't plan as buildable until assets confirmed
4. **OTEP-386** — confirm with Amber: modal overlay or `/opportunity-types` page before dev estimates
5. **OTEP-281 priority** — promote to Must if OTEP-405 (search) is in scope; search requires the spinner

---

## MUST — Sprint Goal Spine

---

### OTEP-88 — C@G opportunities in the listing page

**Priority:** Must | **Depends on:** OTEP-374, C@G ingestion live

**AC to confirm before planning:**

- Fallback behaviour when a required C@G field is missing (Pow Hwee + Amber — was open at S3 start; confirm resolved): hide field / show placeholder / drop card entirely

**Default listing behaviour (agreed 2026-06-11):** Officers without a profile or competencies see the full opportunity listing with no personalisation applied — all published opportunities are shown, ordered by posted date. No profile check or empty-state gating at the listing level.

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [BE] OTEP-374: Expose `source` + `agency` fields in listing API response |
| 2 | [FE] OTEP-375: Render C@G badge on OpportunityCard per Amber spec |
| 3 | [FE] Handle graceful degradation when required C@G field is missing (per confirmed fallback) |
| 4 | [FE] Pagination, type filter (OTEP-86), empty/error states (OTEP-268) apply consistently to C@G results |

**Points:** OTEP-374 = **2** · OTEP-375 = **3** · OTEP-88 parent = 0 (tracks subtasks)

---

### OTEP-405 — Keyword Search for Opportunities

**User story:** As an officer, I want to search for opportunities by keyword so I can quickly find roles relevant to my interests without scrolling through the full listing.

**Priority:** Must | **Depends on:** OTEP-86, OTEP-281

**Open item before build:** Confirm with Pow Hwee — server-side (preferred, given pagination in place) vs client-side.

**ACs:**

1. A search box labelled "Search jobs and opportunities" is visible at the top of the listing page, above the filters
2. As I type, the listing updates to show only opportunities whose title, agency, or type matches my keyword
3. Search is not case-sensitive and returns partial matches — typing "data" returns "Data Analyst" and "Senior Data Engineer"
4. If nothing matches, the standard empty state is shown
5. Search and type filters work together — I can search and filter at the same time
6. Clearing the search box brings back the full listing (keeping any active filters)
7. The listing does not update on every keystroke — it waits a moment after I stop typing before searching
8. While results are loading, I see a loading spinner

**Out of scope:** Full-text search on description body · search suggestions / autocomplete · search history · relevance ranking · personalisation based on officer profile or competencies (officers without a profile see the full listing; no gating or reordering by match score in S4)

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [BE] Add `q` query param to listing API; filter on title, agency, opportunity type (server-side, case-insensitive, partial match) |
| 2 | [FE] Search input above filter sidebar; debounce 300ms |
| 3 | [FE] Compose with active type filters; clear restores full listing |
| 4 | [FE] Show loading spinner (OTEP-281) during search fetch |
| 5 | [FE] Empty state reuses OTEP-268 — no new component |

**Points:** **6**

---

### OTEP-403 — OTG data import hardening

**User story:** As PSD Ops, I want the data import pipeline to handle bad or messy files gracefully so that a single bad row or corrupted upload never wipes out the live catalogue.

**Priority:** Must | **Assignee:** Léo

**Depends on:** OTEP-358 spike output (nil-date recommendation — Michelle to confirm complete before S4 starts)

**Pre-sprint:** Confirm file size threshold for oversized file handling with Léo.

**ACs:**

1. If the uploaded Excel file is corrupted or unreadable, the import stops cleanly and the existing catalogue data is not affected
2. If the file has unexpected or missing columns, the import logs a warning and skips rows it can't map — it does not crash or stop the whole run
3. Invalid or missing dates are handled correctly using the fix from OTEP-358 (replaces the previous hardcoded workaround)
4. Rows with an unrecognised opportunity type are skipped and logged — the rest of the file continues to process
5. Rows with a malformed application form URL are skipped and logged — the rest of the file continues to process
6. If two import jobs are triggered at the same time, the second one exits cleanly without corrupting data — only one import runs at a time
7. The per-run log distinguishes between rows skipped due to data quality issues and rows skipped because required fields are missing

**Out of scope:** Changes to hard-skip rule for required fields (OTEP-192 closed) · per-agency skip reports (S5/S6) · C@G ingestion hardening (separate pipeline)

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [BE] Malformed Excel: clean exit, no DB mutation |
| 2 | [BE] Unexpected column schema: log warning, skip unmappable rows, continue |
| 3 | [BE] Permanent nil-date fix — implement OTEP-358 spike recommendation |
| 4 | [BE] Unrecognised type prefix: hard-skip + log |
| 5 | [BE] Malformed `formsg_url`: hard-skip + log |
| 6 | [BE] PostgreSQL advisory lock on import job |
| 7 | [BE] Per-run log: skips by hardening rule vs missing-field skips |

**Points:** **5**

---

### OTEP-406 — Sort Opportunities by Posted / Closing Date

**User story:** As an officer, I want to sort the opportunity listing by posted date or closing date so I can see the freshest postings first or prioritise ones that are closing soon.

**Priority:** Must | **Depends on:** OTEP-85, OTEP-86, OTEP-405

**Open item before build:** Confirm with Léo whether listing API already supports a `sort` param; confirm nil-date sort behaviour in DB query.

**ACs:**

1. "Sort by" control in filter sidebar with two options: "Posted date" and "Closing date"
2. Default sort = "Posted date" (newest first) — consistent with current listing behaviour
3. Selecting "Closing date" re-sorts ascending (soonest closing first)
4. Selected sort persists across page changes
5. Sort composes with type filters (OTEP-86) and keyword search (OTEP-405) — all three apply simultaneously
6. Evergreen opportunities (nil closing date) shown last when sorting by closing date
7. Sort control visible on all screen sizes — does not collapse on smaller viewports

**Out of scope:** Sort by relevance / match score (R1) · sort by agency name or opportunity type · saving sort preference across sessions

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [BE] Add `sort` param to listing API (`posted_date` or `closing_date`); nil closing dates sorted last |
| 2 | [FE] "Sort by" control in filter sidebar; two options; default = Posted date |
| 3 | [FE] Closing date sort = ascending; nil dates at bottom |
| 4 | [FE] Sort persists across page changes; composes with filters + search |
| 5 | [FE] Visible on all screen sizes |

**Points:** **5**

---

## MUST — Auth & Session

---

### OTEP-392 — Keycloak federated logout

**User story:** As an officer, I want logging out of CareerCompass to fully end my session so I'm not left inadvertently signed in on a shared or unattended device.

**Priority:** Must

**ACs:**

1. Clicking "Log out" ends both the CareerCompass session and the underlying identity provider session — the officer cannot return to CareerCompass without logging in again
2. If the identity provider logout call fails, the CareerCompass session is still cleared — the officer is not left in a broken half-logged-in state
3. After logout, all session cookies are cleared on Chrome, Edge, and Safari

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [BE] Wire Keycloak end-session endpoint into NextAuth signOut flow |
| 2 | [BE] Server-side log on Keycloak call failure; clear NextAuth session regardless |
| 3 | [QA] Verify KEYCLOAK_IDENTITY cookie cleared post-logout on Chrome, Edge, Safari |

**Points:** **3**

---

### OTEP-329 — Keycloak client secret externalisation

**User story:** As the engineering team, I want the Keycloak client secret managed in secure secret storage so that credentials are never exposed in config files or source code.

**Priority:** Must | **Assignee:** Pow Hwee

**ACs:**

1. The Keycloak client secret is stored in secure secret storage for Dev, Staging, and Prod environments — not hardcoded in any config file
2. Infrastructure config is updated so the app reads the secret automatically on startup
3. Staging and Prod environments use the secret from secure storage — removing the previous hardcoded value

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [Infra] Create AWS Secrets Manager entries (Dev / Staging / Prod) |
| 2 | [Infra] Update `otep-web/terragrunt.hcl` |
| 3 | [BE] Keycloak bootstrap reads secret dynamically |

**Points:** **2**

---

## SHOULD — C@G Detail + Tooltip + Badges

---

### OTEP-87 — View C@G Opportunity Detail (non-competency fields only)

**User story:** As an officer, I want to view the full details of a Careers@Gov opportunity so I can decide whether it's relevant and go directly to C@G to apply.

**Priority:** Should | **Depends on:** OTEP-88, C@G ingestion live

**Competency block: CUT from S4** — defer until Imelda confirms schema + mapping

**Pre-sprint:** Michelle to fix Jira ACs — remove FormSG language and competency block ACs before Mon 15 Jun.

**ACs:**

1. Detail page renders C@G opportunity payload: title, agency, description, duration, available structured fields from C@G API
2. No competency section on this page in S4
3. Single prominent CTA: "Apply via Careers@Gov" (wired in OTEP-89)
4. `click_to_CG` analytics event fired on CTA click

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [BE] Detail endpoint for C@G opportunities: title, agency, description, duration, structured fields |
| 2 | [FE] Detail page renders C@G payload fields (no competency section) |
| 3 | [FE] "Apply via Careers@Gov" CTA (deep-link wired in OTEP-89) |
| 4 | [FE] Fire `click_to_CG` event on CTA click |

**Points:** **6**

---

### OTEP-131 — Missing or broken FormSG application link

**User story:** As an officer, I want to see a clear message if the application link is unavailable so I know how to get help rather than facing a broken or missing button.

**Priority:** Should | **Depends on:** OTEP-319 (FormSG redirect)

**ACs:**

1. If `formsg_url` is missing or empty for an Internal Job, STIP, or Gig, the Apply button is not shown — it is replaced with "Application form unavailable — contact the posting agency"
2. The message is shown in the same position as the Apply button would be — no layout shift
3. If `formsg_url` is present but the FormSG form is down or closed, the officer lands on FormSG's own error page — CareerCompass shows no additional error state for this case
4. SJR detail pages are out of scope — no Apply button or error message applies to SJRs in MVP

**Note:** OTEP-319 already includes a version of this fallback — this ticket formalises the design treatment per Amber's Figma spec. Confirm with Amber whether "contact the posting agency" is the final copy or whether a specific agency POC field is available in the payload.

**Out of scope:** SJR detail pages · detecting whether a FormSG URL is live/reachable before rendering the button · agency POC email or contact details (requires payload field confirmation)

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [FE] Replace Apply button with "Application form unavailable — contact the posting agency" when `formsg_url` missing |
| 2 | [FE] Maintain layout — no shift in card/detail page when error state shown |
| 3 | [QA] Verify error state renders correctly for all three types (Internal Job, STIP, Gig) |

**Points:** **2**

---

### OTEP-89 — Apply via C@G deep-link

**User story:** As an officer, I want the "Apply via Careers@Gov" button to take me directly to that specific posting on C@G so I don't have to search for it again on another platform.

**Priority:** Should | **Depends on:** OTEP-87

**ACs:**

1. "Apply via Careers@Gov" CTA on C@G detail page opens specific opportunity on C@G platform in a new tab
2. `click_to_CG` event fired at point of redirect (confirm dedup with OTEP-87 if already wired there)
3. If opportunity no longer available on C@G: C@G handles the error; OTEP shows nothing

**Out of scope:** No FormSG or OTG application flow for C@G listings

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [FE] Deep-link CTA opens C@G opportunity in new tab |
| 2 | [FE] `click_to_CG` event fired |

**Points:** **2**

---

### OTEP-386 — Opportunity type tooltip + in-app explainer

**User story:** As an officer who is new to CareerCompass, I want a quick explanation of what each opportunity type means so I can filter confidently without having to ask someone.

**Priority:** Should | **Depends on:** OTEP-86

**Open item before planning:** Confirm with Amber — modal overlay or dedicated `/opportunity-types` page. This determines routing and back-navigation behaviour.

**ACs:**

1. A "Learn more about the different opportunity types" hyperlink appears in the page header text, below the page description
2. Clicking the link opens an in-app page or modal explaining all four opportunity types
3. In-app page/modal copy (agreed):
   - **Internal Job** — "A full-time role open to eligible officers across the Public Service."
   - **STIP** — "A short-term attachment (weeks to months) to build skills in a new area."
   - **Gig** — "A project-based task you can take on alongside your current role."
   - **SJR** — "A secondment or job rotation — an extended placement in a different role or agency."
4. The modal or page has a visible close/back action
5. Accessible: link is keyboard-navigable; modal/page traps focus correctly and returns focus on close

**Out of scope:** Info icons on individual filter labels · tooltip on opportunity card or detail page · link-out to any external site

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [FE] "Learn more about the different opportunity types" hyperlink in page header, below description text |
| 2 | [FE] Link opens modal or `/opportunity-types` page (confirm with Amber) |
| 3 | [FE] In-app modal/page with all 4 type descriptions (copy agreed above) |
| 4 | [FE] Accessibility: keyboard navigation, focus trap, focus return on close |

**Points:** **3**

---

### OTEP-284 — "Closing soon" badge on cards and detail page

**User story:** As an officer, I want to see a visual signal on opportunities that are closing within a week so I can prioritise which ones to look at before they're gone.

**Priority:** Should | **Depends on:** OTEP-85, OTEP-362

**ACs:**

1. "Closing soon" badge appears on the listing card and detail page when the closing date is between today and 7 days from now (today counts, already-closed does not)
2. No badge for opportunities with no closing date
3. No badge for opportunities closing more than 7 days away
4. Badge text: "Closing soon" — design per Amber's spec
5. Badge appears in the same position on both listing card and detail page header
6. The 7-day check is done on the server and returned in the API response — the frontend just reads the flag

**Out of scope:** Hiding closed/expired opportunities (OTEP-85 + OTEP-362) · exact countdown label ("Closes in 3 days")

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [BE] Add `is_closing_soon` boolean (or `days_remaining`) to API response, computed server-side |
| 2 | [FE] Render badge on listing card per Amber spec |
| 3 | [FE] Render badge on detail page header |
| 4 | [FE] Badge not shown for nil closing date |

**Points:** **3**

---

### OTEP-348 — OTG ingestion scheduler + observability

**User story:** As PSD Ops, I want the OTG catalogue to refresh automatically on a weekly schedule so that the data stays current without anyone having to manually trigger an import.

**Priority:** Should | **Depends on:** OTEP-403 (hardening done first)

**ACs:**

1. Ingestion triggered on a weekly schedule (confirm day/time with Pow Hwee)
2. Per-run summary: pass count, skip count by rule, error count — logged to run summary
3. Alert/notification triggered if skip rate exceeds threshold (confirm threshold — suggestion: >60%)

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [BE] Weekly scheduler for ingestion job (confirm cadence) |
| 2 | [BE] Per-run summary: pass / skip by rule / error counts |
| 3 | [BE] Alert if skip rate > threshold |

**Points:** **3**

---

## COULD — UI Polish + Telemetry

---

### OTEP-281 — Loading state for listing data fetch

**User story:** As an officer, I want to see a loading indicator when the opportunity listing is fetching data so I know the page is working and not broken.

**Priority:** Could → **promotes to Must if OTEP-405 (search) is in scope**

**Depends on:** OTEP-268

**ACs:**

1. Spinner displayed immediately when listing page initiates a data fetch — officer never sees blank page or empty grid mid-load
2. Spinner shown for full duration of fetch; replaced by card grid on success or error state (OTEP-268) on failure
3. No flicker if fetch resolves in < 300ms
4. Card heights uniform once grid renders — absent optional fields do not cause layout shift

**Out of scope:** Per-card skeleton/shimmer loading · partial load states (removed in OTEP-268)

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [FE] Spinner on data fetch initiation; reuse existing pattern from filter/pagination transitions |
| 2 | [FE] Replace spinner with card grid on success; with OTEP-268 error state on failure |
| 3 | [FE] No-flicker for < 300ms fetches |

**Points:** **1**

---

### OTEP-283 — Ministry icons on opportunity listing card

**User story:** As an officer, I want to see the posting agency's logo on the opportunity card so I can recognise the agency at a glance while browsing the listing.

**Priority:** Could

**ACs:**

1. The agency logo appears in the top-right corner of every opportunity card on the listing page, per Amber's card design
2. The logo is sized and contained consistently across all cards — it does not overflow or distort regardless of the original asset dimensions
3. If no icon asset exists for an agency, the top-right corner is left empty — no placeholder or broken image shown
4. The agency name text below the title is still shown regardless of whether an icon is present
5. The icon is decorative — no `alt` text required beyond an empty `alt=""` attribute

**Out of scope:** Ministry icon on the opportunity detail page · icons on C@G cards (separate asset set)

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [FE] Render agency icon in top-right of listing card per Amber's spec |
| 2 | [FE] Constrain icon to fixed dimensions; no overflow or distortion |
| 3 | [FE] Hide icon slot if no asset available for that agency |

**Points:** **2** (gated on design asset)

---

### OTEP-393 — Custom OTEP login theme for Keycloak

**User story:** As an officer, I want the CareerCompass login page to look like part of the product so the experience feels consistent from the moment I sign in.

**Priority:** Could

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [FE] Integrate custom OTEP theme into Keycloak service configuration |
| 2 | [FE] Fallback to default Keycloak theme if assets fail |
| 3 | [QA] Verify in staging before merge |

**Points:** **3**

---

### OTEP-328 — OpenTelemetry integration for otep-web

**User story:** As the engineering team, I want distributed tracing in place for the web frontend so we can diagnose performance issues and errors quickly after launch.

**Priority:** Could

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [FE] Integrate otep-web with OpenTelemetry collector using official plugin |

**Points:** **2**

---

### OTEP-404 — Mobile/tablet page size

**User story:** As an officer browsing on my phone or tablet, I want a shorter listing page that loads faster and is easier to scroll through on a small screen.

**Priority:** Could | **Assignee:** Thomas

**ACs:**

1. Page size on mobile and tablet viewports = 10 (not 15)
2. Desktop page size remains 15

**Tasks:**

| # | Task |
| --- | ------ |
| 1 | [FE] Detect viewport; set page size = 10 on mobile/tablet, 15 on desktop |

**Points:** **1**

---

## WON'T — Not S4 (gates not cleared)

| Ticket | Reason | Re-evaluate |
| ------ | ------ | ----------- |
| OTEP-127 — Ringfencing eligibility spike | WOG AD onboarding incomplete; POCDEX plumbing unconfirmed | S4 mid-sprint review |
| OTEP-110 — Login fail / WOG AD error state | AC vs design spec mismatch (open item #32) unresolved | After #32 fixed |

---

## Points Summary

| Ticket | Priority | Points |
| ------ | -------- | ------ |
| OTEP-374 (subtask of 88) | Must | 2 |
| OTEP-375 (subtask of 88) | Must | 3 |
| OTEP-405 — Search | Must | 6 |
| OTEP-403 — Import hardening | Must | 5 |
| OTEP-406 — Sort | Must | 5 |
| OTEP-392 — Federated logout | Must | 3 |
| OTEP-329 — Keycloak secret | Must | 2 |
| **Must subtotal** | | **26** |
| OTEP-87 — C@G detail | Should | 6 |
| OTEP-131 — Missing FormSG link | Should | 2 |
| OTEP-89 — C@G deep-link | Should | 2 |
| OTEP-386 — Type tooltip | Should | 3 |
| OTEP-284 — Closing soon badge | Should | 3 |
| OTEP-348 — Ingestion scheduler | Should | 3 |
| **Should subtotal** | | **19** |
| OTEP-281 — Loading state | Could→Must | 1 |
| OTEP-283 — Ministry icons | Could | 2 |
| OTEP-393 — Login theme | Could | 3 |
| OTEP-328 — OpenTelemetry | Could | 2 |
| OTEP-404 — Mobile page size | Could | 1 |
| **Could subtotal** | | **9** |
| **Grand total (all)** | | **54** |

---

*Generated: 2026-06-11*
*Source: OTEP-Pathfinder-Sprint-4 Jira sync + sprint-allocation.md + dor-dod-guidelines.md*
*Next: push AC fixes to OTEP-87 Jira file · confirm OTEP-358 spike output · verify design assets for OTEP-393/283 with Amber*
