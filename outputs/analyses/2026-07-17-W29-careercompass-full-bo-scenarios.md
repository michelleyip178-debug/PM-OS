# CareerCompass — Full Product UAT Scenarios for Business Owner Review

**For:** Chris & XZ (Business Owners)

**From:** Michelle Yip (Pathfinder PM), coordinated with Imelda (Core, Intelligence)

**Purpose:** One document covering the whole officer journey across CareerCompass — Core, Pathfinder, and Intelligence combined — so you review it the way an officer experiences it, not split by which team built which part.

**Covers:** Full MVP scope — what's shipped, what's in final testing, and what's still being built (each clearly marked)

**Format:** Each journey below is a **business process** — a chain of steps an officer actually takes in one sitting, with a single overall pass/fail, not a list of isolated button clicks. This matches how UAT is meant to work: you're validating whether the whole experience holds together, not grading individual screens.

---

## How to use this document

For each business process:

1. Read the **business outcome** it validates — the real-world question being answered
2. Walk through the steps in order, as if you were the officer
3. At the end, judge the **whole chain**: did it hold together end-to-end, or did it break down somewhere?
4. Mark: ☐ **Works as expected** · ☐ **Breaks down at step ___** (note which one) · ☐ **Needs discussion**

**Status key** (shown per process):
- 🟢 **Ready for UAT** — shipped and QA-complete, testable today
- 🟡 **In final testing** — built, currently being verified by the team before it's handed to you
- 🔴 **Not built yet** — included so you can review and agree on the intended flow early, not something to test now

If a process mixes statuses (some steps 🟢/🟡, one step 🔴), that's flagged inline — walk through it anyway so you understand where the flow currently stops, and confirm the *rest* of it reads correctly for when that step is added.

---

## Personas for testing

Each process below should be walked through **as a specific persona**, not as an abstract "officer." These six are pulled directly from the edge cases already written into the scenarios — they're not invented extras, they're the people the acceptance criteria already assume exist. Testing with the right persona per process is what actually exercises the edge case; testing every process as Priya (the clean happy-path case) would mean the edge-case steps never get a real check.

| Persona | Who they are | Why they matter for testing | Primarily used in |
|---|---|---|---|
| **Priya** — Standard pilot officer | Complete, clean HR record: valid role, agency, title, full set of role-based competencies | The baseline. If something fails for Priya, it's broken for everyone — this is the happy path every process should clear first | All processes |
| **Marcus** — Officer with a data gap | Logged in and authenticated fine, but his role-based competencies can't be matched (job ID doesn't resolve, or resolves to a role with no competencies tagged) | Exercises the "something went wrong, not the officer's fault" recovery loop — the Report Issue flow only gets tested if someone actually hits this state | Process 4, Process 8 (step 6) |
| **Farah** — Officer with no role assigned | POCDEX has no current role/position on record for her at all — a distinct, more severe gap than Marcus's (he has a role, just no matched competencies) | Tests the "worse than empty" state — if Marcus's persona is used here by mistake, the wrong empty-state message gets validated | Process 8 (steps 7–8), cross-cutting recommendations blank state |
| **Wei Ling** — Officer with incomplete HR data | Her POCDEX record is missing agency name or job title (field is blank or "NA") | Tests that the product hides missing fields cleanly rather than showing broken placeholders — easy to miss if every test officer has a complete record | Process 1 (step 5) |
| **Daniel** — Officer applying from a shared device | Uses a shared office computer/kiosk rather than a personal laptop | Tests the logout/session-integrity steps that don't matter on a personal device but are a real risk on shared government hardware | Process 1 (steps 7–9) |
| **Kumar** — Officer who hasn't self-declared anything yet | Complete role and role-based competencies, but has never used the "add competency" flow | Tests the "not empty because of an error, empty because they haven't gotten to it yet" state — different messaging than Marcus's or Farah's error states, easy to accidentally collapse into the same "empty state" if not tested separately | Process 8 (step 5) |

**Not yet represented by a persona:** officers on secondment or working two roles (double-hatting). This edge case is named in Process 1 but isn't scoped or built, so there's no persona for it yet — add one once that flow is defined, rather than guessing at the data shape now.

**How to use these:** each process below is now tagged with which persona to test it as. Where a process has multiple edge-case steps, walk it once as Priya for the happy path, then again as the named edge-case persona for the steps marked as edge cases — don't try to make one persona cover a whole process end-to-end.

---

## Process 1: An officer logs in and confirms their identity

*(Squad: Pathfinder — Login · Core — Profile Details)* · 🟡 **In final testing**
**Test as:** Priya (steps 1–4, 6–8) · Wei Ling (step 5) · Daniel (step 9)

**Business outcome this validates:** Does an officer get into the system smoothly and immediately trust that CareerCompass knows who they are?

| Step | Officer action | Expected system response |
|---|---|---|
| 1 | Opens CareerCompass, clicks to log in | Authenticated using their existing work account — no separate login form, no new password to remember |
| 2 | Login succeeds | Lands on their profile page automatically |
| 3 | Looks at the top of their profile | Sees their name, an avatar with their initials, their job title, and their agency |
| 4 | Checks whether the title/agency shown matches what they know to be true | It does — pulled from their actual HR record, not something they had to type in |
| 5 | *(Edge case: their HR record is missing agency or title info)* | That field is simply absent — no blank box, no "N/A" placeholder cluttering the page |
| 6 | Tries clicking on their name, title, or agency | Nothing happens — this is a confirmation of identity, not an editable field |
| 7 | Finishes their session, clicks Log Out | Session fully ends, returned to the login page |
| 8 | Presses the browser back button after logging out | Not let back in — stays on the login page |
| 9 | *(Edge case: on a shared office computer)* | The next person who uses that browser sees no trace of the officer's session or data |

**Not yet covered by this process:** officers on secondment or working two roles (double-hatting) — this scenario hasn't been scoped yet. If you have a strong expectation of what should happen for these officers, flag it now so it's captured before it's built, rather than after.

**Sign-off:** ☐ Works as expected · ☐ Breaks down at step ___ · ☐ Needs discussion

---

## Process 2: An officer navigates around CareerCompass during a single session

*(Squad: Core — Navigation)* · 🟡 **In final testing**
**Test as:** Priya

**Business outcome this validates:** Once logged in, can an officer move fluidly between the main parts of the product without getting lost or confused about where they are?

| Step | Officer action | Expected system response |
|---|---|---|
| 1 | Lands on their profile after login | Sees a navigation bar: Home, Jobs and Opportunities, Learning and Courses, Your Development |
| 2 | Clicks "Jobs and Opportunities" | Taken to the jobs listing page |
| 3 | Clicks "Your Development" | Taken to the development summary page — the previous page (Jobs) is clearly no longer marked active |
| 4 | Clicks "Your Development" again, while already on it | Nothing happens — stays exactly where they are |
| 5 | Clicks their avatar in the corner | A dropdown appears with a single option: Log Out |
| 6 | Clicks anywhere outside that dropdown | It closes without needing a specific "close" action |
| 7 | Clicks "Home" | Returned to their profile page |

**Sign-off:** ☐ Works as expected · ☐ Breaks down at step ___ · ☐ Needs discussion

---

## Process 3: An officer reviews what competencies are already associated with their role

*(Squad: Core — View My Competencies)* · 🟡 **In final testing**
**Test as:** Priya

**Business outcome this validates:** Can an officer clearly understand what skills the system already knows about them, and does the display stay usable even when there's a lot of data?

| Step | Officer action | Expected system response |
|---|---|---|
| 1 | Navigates to "My Competencies" on their profile | Sees three distinct sections: Core Competencies, Functional Competencies (both tied to their role), Self-declared Competencies (added by them) |
| 2 | Reads the section for their role-based competencies | A short description clarifies these come from their HR-assigned role, not something they entered |
| 3 | Wants to understand what "Core" vs. "Functional" actually means | Hovers a tooltip on each, sees a plain-language explanation for both |
| 4 | *(Their role has 12 Functional Competencies)* | Sees the first 8, with a "view more" option that reveals the rest — not a wall of text or a broken layout |
| 5 | Scrolls to Self-declared Competencies | Sees ones they've personally added, separate from role-based ones |

**Sign-off:** ☐ Works as expected · ☐ Breaks down at step ___ · ☐ Needs discussion

---

## Process 4: An officer's role-based competencies can't be found, so they report it and later see it resolved

*(Squad: Core — Report Issue button)* · 🟡 **In final testing**
**Test as:** Marcus

**Business outcome this validates:** When something goes wrong with an officer's data — not their fault, a data gap — does the whole recovery loop actually work: noticing the problem, reporting it, and eventually seeing it fixed?

| Step | Officer action | Expected system response |
|---|---|---|
| 1 | Navigates to "My Competencies" | Core and Functional sections are empty — the system couldn't find or match their role's competencies |
| 2 | Reads the empty-state messaging | Sees a clear explanation: "No competencies found for your role yet," and a "Report Issue" button |
| 3 | Clicks "Report Issue" | Sees a toast: "We've received your report and are looking into it" |
| 4 | Navigates away, returns to their profile later the same day | Button now reads "Issue Reported," greyed out — not asking them to report the same thing again |
| 5 | Checks "Your Development" in the same session | Sees the same missing-competency state reflected there too — not fixed on one page and still broken on another |
| 6 | *(Time passes — the underlying data issue is fixed by the product/data team)* | — |
| 7 | Logs in again after the fix | Competencies now display normally; the Report Issue button and messaging are gone entirely |

**Sign-off:** ☐ Works as expected · ☐ Breaks down at step ___ · ☐ Needs discussion

---

## Process 5: An officer adds a competency they know they have, by searching for it

*(Squad: Core — Add competencies without CIE)* · 🟡 **In final testing**
**Test as:** Priya

**Business outcome this validates:** Can an officer easily add a skill they know they have, even if it's outside their formal role, without it becoming a tedious search?

| Step | Officer action | Expected system response |
|---|---|---|
| 1 | Clicks the "+" icon under Self-declared Competencies | Taken to a page with two options: keyword search, or upload CV |
| 2 | Clicks into the search bar without typing anything | No recent searches or suggestions shown yet |
| 3 | Types 2 characters | No suggestions triggered yet — minimum is 3 characters |
| 4 | Types a 3rd character | Matching suggestions now appear — ones starting with what they typed shown first, then ones that merely contain it |
| 5 | Keeps typing something with many matches | Sees 10 results, more load on scroll, capped at 20 total |
| 6 | Selects a competency from the list | It's added to their Self-declared Competencies |
| 7 | Returns to their profile | The newly added competency is visible in the Self-declared section |

**Sign-off:** ☐ Works as expected · ☐ Breaks down at step ___ · ☐ Needs discussion

---

## Process 6: An officer uploads their CV and lets the system suggest competencies

*(Squads: Core — Add competencies flow · Intelligence — CV inference)* · 🟡 **In final testing**
**Test as:** Priya

**Business outcome this validates:** For officers who don't want to search one competency at a time, does the CV-upload shortcut actually save them effort — and is it clear which suggestions are AI-generated versus their own choice?

| Step | Officer action | Expected system response |
|---|---|---|
| 1 | From the same "add competency" page, chooses "upload CV" instead of search | Prompted to upload a CV — drag-and-drop or file picker |
| 2 | Attempts to upload a .pdf | *(Confirm expected handling — AC specifies .docx only, up to 5MB; flag if a friendlier error/format-conversion prompt is expected here)* |
| 3 | Uploads a valid .docx CV under 5MB | Upload succeeds, a "Review competencies" button becomes active |
| 4 | Changes their mind, clicks the trash icon on the uploaded file | File is removed, "Review competencies" goes back to inactive |
| 5 | Re-uploads their CV, clicks "Review competencies" | System processes it and returns up to 12 suggested competencies, ranked by relevance |
| 6 | Reviews the suggestions | Officer decides which to actually keep — nothing is auto-added without their choice |
| 7 | Confirms their selections | Chosen competencies appear in their Self-declared list, same as the search-based path in Process 5 |

**Sign-off:** ☐ Works as expected · ☐ Breaks down at step ___ · ☐ Needs discussion

---

## Process 7: An officer curates which role-based competencies show on their public profile

*(Squad: Core — Delete and Hide Competencies)* · 🟡 **In final testing**
**Test as:** Priya

**Business outcome this validates:** Can an officer control their own public-facing profile without accidentally being able to claim competencies outside their actual role?

| Step | Officer action | Expected system response |
|---|---|---|
| 1 | Clicks the edit ("pen") icon next to their competencies | Taken to a screen listing all Core and Functional competencies tied to their role, all shown and selected by default, alphabetically ordered |
| 2 | Lands on this screen without changing anything | No "Save" button visible — nothing to save yet |
| 3 | Clicks the "eye" icon next to one competency | A short description of that competency appears |
| 4 | Unchecks two competencies they don't want visible | A "Save changes" button now appears |
| 5 | Tries to find a way to add a brand-new competency from this screen | Can't — this screen only controls visibility of existing role-based competencies, not addition of new ones |
| 6 | Clicks "Save changes" | Returned to their profile page, with the two unchecked competencies now hidden |
| 7 | Returns to the edit screen later | The two previously-hidden competencies are still unchecked, but still present in the list — hiding didn't delete them, they can be re-shown anytime |

**Sign-off:** ☐ Works as expected · ☐ Breaks down at step ___ · ☐ Needs discussion

---

## Process 8: An officer checks their development summary and acts on gaps

*(Squad: Core — Your Development / My Dev pages)* · 🟡 **In final testing**
**Test as:** Priya (steps 1–4) · Kumar (step 5) · Marcus (step 6) · Farah (steps 7–8)

**Business outcome this validates:** Does the development summary give officers a fast, accurate snapshot — and does it correctly handle every combination of "do I have a role, do I have competencies" without ever showing a broken or confusing state?

| Step | Officer action | Expected system response |
|---|---|---|
| 1 | Navigates to "Your Development" | Sees their current role title and functional competencies, split into "From this role" and "You've added these" |
| 2 | Tries to edit a competency directly on this page | Can't — this is read-only; a "Manage competencies" button is the only path to editing |
| 3 | Clicks "Manage competencies" | Taken to their profile page, scrolled directly to the competencies section — not dropped at the top of the page to scroll down manually |
| 4 | Edits a competency there (as in Process 7), returns to Your Development | The change is reflected automatically — no separate sync step, no stale data |
| 5 | *(Edge case: has a role and role-based competencies, but never added self-declared ones)* | Sees an "add competencies" button in that section instead of empty space |
| 6 | *(Edge case: has a role and self-declared competencies, but role-based ones couldn't be found)* | Sees the same "Report Issue" flow from Process 4 — not a blank section |
| 7 | *(Edge case: has no role assigned at all, and no competencies of any kind)* | Sees a clear "Roles unavailable right now" message explaining why, not an empty or broken page |
| 8 | Scrolls to "Based on your current role" recommendations, with no role assigned | Sees an explicit blank-state message, not a silently empty container |

**Sign-off:** ☐ Works as expected · ☐ Breaks down at step ___ · ☐ Needs discussion

---

## Process 9: An officer discovers and applies for a job opportunity

*(Squad: Pathfinder — Opportunities Explore)* · 🟢 **Ready for UAT today**
**Test as:** Priya (see linked document for the full persona breakdown at that level of detail)

**This process is already fully detailed as its own document:** [Pathfinder BO sign-off — Journeys 1–5](2026-07-17-W29-pathfinder-bo-uat-scenarios-signoff.md), covering the same chained-process format: browsing → filtering → viewing a specific opportunity → applying (both via Careers@Gov and via CareerCompass-native FormSG forms).

**Recommendation:** Sign off using that document directly rather than duplicating the full chain here. It's referenced in this document so you can see where it sits in the full officer journey — right after Process 8, since "what should I develop" naturally leads an officer to "what opportunities match that."

**Sign-off:** *(tracked in the linked document)*

---

## Process 10: An officer discovers and enrolls in a learning course

*(Squad: Core — Course Discovery, Course Detail)* · 🔴 **Not built yet**

**Business outcome this will validate (once built):** Alongside job opportunities, can an officer find and act on courses that close their competency gaps?

This process isn't scoped or built yet — "Learning and Courses" exists as a nav item (Process 2) but has no destination behind it today. Flagging it here now, in sequence, so you can see it's a known gap in the journey rather than an oversight. You'll get a full process to review once it's built.

**If you have strong expectations for this flow** (e.g., should course recommendations connect to the competency gaps surfaced in Process 8?) — note them now so they're captured before this is scoped.

**Sign-off:** *(not applicable yet — will return once built)*

---

## Cross-cutting process: An officer moves across the whole product in one session, expecting it to feel like one coherent system

*(Spans all three squads)*
**Test as:** Priya (steps 1–4) · Farah (step 6, since agency/job-family restriction is most visible for officers whose role is ambiguous or missing)

**Business outcome this validates:** CareerCompass is built by three separate teams. Does it feel like one product to the officer, or do the seams show?

| Step | Officer action | Expected system response |
|---|---|---|
| 1 | Logs in, sees their profile (Process 1) | Identity confirmed |
| 2 | Adds a competency via CV upload (Process 6) | Competency appears in Self-declared list |
| 3 | Immediately checks "Your Development" (Process 8) | The newly-added competency shows up there too, same session, no delay or refresh needed |
| 4 | Navigates to "Jobs and Opportunities" (Process 9) | Listing loads normally — their identity and session carry over without re-authenticating |
| 5 | *(Not yet built)* Expects the competency they just added to somehow influence which jobs are shown as a better match | *This does not happen yet — competency-based job matching is a later release, not MVP. Flag now if this gap will confuse officers or generate support tickets during pilot.* |
| 6 | *(Not yet built)* Expects only jobs open to their agency/job family to be visible | *The rule for this has been agreed but isn't enforced yet — a separate process will be shared once it's built.* |

**Sign-off:** ☐ Works as expected · ☐ Breaks down at step ___ · ☐ Needs discussion (particularly steps 5–6, since these are expectation-setting rather than defects)

---

## What's intentionally not in this document yet

- **Process 10** (courses) — backlog, not started
- **Competency-based job matching / recommendations** — later release, flagged in the cross-cutting process
- **Job family/agency-based restriction on visible opportunities** — design agreed, enforcement not built
- **Real work-account login** — currently a stand-in login for testing (Process 1, step 1)
- **Search and filter-by-category on the jobs page** — in progress, covered separately in the Pathfinder document once ready
- **Seconded/double-hatting officer profile handling** — backlog, flagged in Process 1

---

## What happens after you sign off

1. 🟢 Processes move straight into the formal UAT tracker for execution once approved
2. 🟡 Processes get their final QA pass, then come back to you to confirm nothing changed before UAT
3. 🔴 Processes return to you once built, in this same chained format
4. If a process "breaks down at step ___," that step gets resolved with the product team, then the **whole process** is re-walked with you — not just the one step — since a fix partway through a chain can change what officers experience downstream

---

*Prepared: 2026-07-17 by Michelle Yip, with Core/Intelligence scope confirmed against live Jira as of this date*
*Format note: rewritten 2026-07-17 from individual test-case format into chained business-process format, per standard UAT convention — validates whole officer journeys end-to-end rather than isolated interactions*
*Companion documents: [Pathfinder-only detailed sign-off](2026-07-17-W29-pathfinder-bo-uat-scenarios-signoff.md), engineering-facing test scenarios available on request*
*Next: Circulate to Imelda (Core/Intelligence PM) for a joint review before this goes to Chris/XZ, since Processes 1–8 and 10 touch her teams directly*
