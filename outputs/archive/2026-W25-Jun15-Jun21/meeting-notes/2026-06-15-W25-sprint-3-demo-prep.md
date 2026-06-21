---
date: 2026-06-15
meeting: OTEP Sprint 3 Demo (Retro + Demo — 4pm)
sprint: OTEP-Pathfinder Sprint 3 (2 Jun – 12 Jun 2026)
sprint_goal: By end of Sprint 3, an officer can find relevant opportunities using filters and successfully initiate an application to any active OTG opportunity (except SJRs), powered by live imported data.
---

# Sprint 3 Demo Prep — Mon 15 Jun 2026

## Sprint Goal (remind the room at the top)

> "By end of Sprint 3, an officer can find relevant opportunities using filters and successfully initiate an application to any active OTG opportunity (except SJRs), powered by live imported data."

---

## Demo Flow — What to Show

Walk the user journey end-to-end. Start at login, end at apply. The story is: **real data, real filters, real application path.**

### 1. Login (OTEP-305, OTEP-369/368)

- Officer lands on the OTEP login page (Keycloak, not yet WOG AD)
- Logs in successfully — redirected to listing page
- **Call out:** Login/Logout pages are built and functional. WOG AD swap-in is gated on POCDEX and WOG domain submission (S5 gate).

### 2. Opportunity Listing — with real OTG data (OTEP-85, OTEP-380/381)

- Listing page loads with **real OTG data from the ingestion pipeline** (not mocks)
- Cards show: title, agency, opportunity type, closing date
- Data ordered by posting date, newest first
- **Call out:** OTEP-192 (ingestion job) and OTEP-313 (raw ingest) are Done. Léo built the pipeline; 415 opportunities pass v3 rules (up from 160 at sprint start — story for the BO team).
- C@G badge visible on Careers@Gov listings (OTEP-88 / OTEP-375/374)

### 3. Filter by Type (OTEP-86, OTEP-317)

- Filter panel: officer selects "Gig" — listing refreshes to show only Gigs
- Clear filters button resets the view
- Filter params persist in the URL (BE: OTEP-380/381)
- **Note:** Still in QA as of sprint close. Show in staging/QA env if not merged to main.

### 4. Opportunity Detail Page (OTEP-128, OTEP-327/314/334)

- Click into an opportunity card — detail page loads with full data
- Key fields: description, competencies, agency, type, closing date
- Open/closed state handling (OTEP-362 backend) — closed opportunities filtered from listing
- C@G deep-link visible on C@G cards (OTEP-89) — **Note:** still in QA

### 5. Apply via FormSG (OTEP-319)

- Officer clicks "Apply" on an OTG opportunity
- Redirected to FormSG application URL (`formsg_url` field)
- **Note:** OTEP-319 still in QA. If live: show the redirect. If not: describe the flow and show the field in the data model.

### 6. OTG Data Ingestion (OTEP-192, OTEP-313, OTEP-320, OTEP-296)

- If audience is technical or BO: show the pipeline
- Excel → report format (OTEP-296) → raw ingest (OTEP-313) → data model (OTEP-193) → real DB access (OTEP-320)
- **v3 numbers:** 633 total OTG rows → 415 passing (was 160) → 205 still blocked → 13 SJR excluded
- Key unlocks: Function optional (I-014), StartDate optional for Job/Secondment (I-015), TC exempt for PSFG (I-013)

---

## Sprint Scorecard

| Status | Count | Key tickets |
|--------|-------|-------------|
| **Done** | 24 | OTEP-380/381 (filter params), OTEP-88 (C@G listing), OTEP-374/375 (C@G badge/fields), OTEP-325/326 (error/empty states), OTEP-193 (data model), OTEP-288 (backend endpoint), OTEP-296 (report format), OTEP-313 (OTG raw ingest), OTEP-320 (real DB access), OTEP-170 (base layout), OTEP-368/369 (login page/redirect), OTEP-351 (Azure AD mock), OTEP-334/327/314 (detail page BE+FE), OTEP-362 (closed opps filter), OTEP-367 (competencies UI), OTEP-303 (POCDEX field check), OTEP-332 (shared reference data), OTEP-391 (virus scanning spike) |
| **QA carry-in to S4** | 8 | OTEP-85 (listing cards), OTEP-86 (filter by type), OTEP-89 (C@G deep-link), OTEP-128 (detail page), OTEP-192 (ingestion job), OTEP-268 (empty/error states), OTEP-305 (login/logout), OTEP-319 (FormSG redirect) |
| **Still in progress** | 11 | OTEP-324 (OAuth rotation), OTEP-350 (WOG AD), OTEP-352 (POCDEX code table), OTEP-322 (Playwright E2E), OTEP-349 (competency spike), OTEP-276 (design system spike), OTEP-361 (ADR forum), OTEP-363 (closed opp UI), OTEP-317 (clear filters), OTEP-438 (admin UI), OTEP-129/OTEP-363 split |

**Sprint goal — partially met.** Core listing and data ingestion are Done. Filter by type, detail page, and apply redirect are in QA (not Done). Auth is Keycloak (not WOG AD). The gap is real but explainable: Keycloak dependency gated QA close on several tickets.

---

## Key Wins to Call Out

1. **Real OTG data is flowing.** The full ingestion pipeline is Done — from the standardised Excel format (OTEP-296) through raw ingest (OTEP-313) to a live database the frontend reads. The team built this from scratch in two sprints.

2. **415 opportunities passing** (up from 160 at sprint start). The three BO decisions ratified on 12 Jun — Function optional (I-014), Start date optional for Job/Secondment (I-015), TC exempt for PSFG (I-013) — unlocked 255 additional opportunities. This is a concrete unblock tied to BO alignment work.

3. **C@G integration groundwork Done.** Badge, fields, and deep-link built (OTEP-374/375/88). C@G opportunities visible in the listing alongside OTG data — dual-source listing working.

4. **Auth path de-risked.** Azure AD mock (OTEP-351) built for testing without prod WOG AD. Login/Logout pages (OTEP-369/368) done. WOG AD swap-in is scoped and tracked (#26) — not blocked, just paced.

5. **POCDEX groundwork.** Field check (OTEP-303) done. Code table load (OTEP-352) in progress. Virus scanning spike (OTEP-391) done.

---

## Things to Address Directly (don't let them come up as surprises)

**Why is login/logout still in QA?**
Keycloak login pages are built. QA hasn't closed because testing required integration with WOG AD, which is pending POCDEX and domain submission (Fabian, Hao Eng). This is tracked — it's not a build problem, it's an environment dependency. Target for S4 close.

**Why are filter by type and the detail page in QA, not Done?**
Both are built and in QA. They landed in QA tail-end of sprint, and Keycloak gated the integrated test scenario (you need to log in to filter). Same root cause as above.

**Why is the sprint goal "partially met"?**
The "initiate an application" AC requires FormSG redirect (OTEP-319) — this landed in QA on the last day. The filtering story (OTEP-86) is also in QA. Both are tracking to close in the first week of S4.

---

## Retro Prompts (if running retro in the same session)

**What went well:**
- OTG ingestion pipeline built and functional — real data in real DB
- BO working sessions + v3 decisions unlocked 255 more opportunities
- C@G integration groundwork done ahead of schedule
- Sprint Planning on 11 Jun produced a tighter S4 goal

**What could improve:**
- QA closed late — integrated testing needs login, which needs Keycloak/WOG AD. Need to front-load auth environment earlier.
- OTEP-192 ACs were stale when Léo started — caused rework (nil-date handling, upsert vs append). Update ACs before sprint start, not mid-sprint.
- 8 QA tickets carrying into S4 is high. Consider a "QA blitz" first few days of sprint.

**One thing to try in S4:**
- Agree a "done = merged to main" definition earlier. QA tickets sitting in QA at sprint close count as not Done. Set a Wednesday cutoff: anything not in QA by Wednesday of sprint week 2 does not count toward the sprint goal.

---

## S4 Preview (2 lines — give the room a bridge forward)

Sprint 4 goal: a complete, usable listing experience — search, filter, sort, and data currency. The 8 QA carry-ins close in week 1. New work: search (OTEP-127?), type filter (OTEP-86 if not closed), schedule and observability (OTEP-348).

---

*Prep by Michelle · Sprint 3 Demo · Mon 15 Jun 2026 4pm*
