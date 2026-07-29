# Rolling Out the BO-Executable UAT Format Across Batch 1

Folder: [Batch 1](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/folder/2491422508/Batch+1)
Validated format: [DRAFT SAMPLE — BO-Executable UAT Format (Ringfencing)](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2498301048) — Ringfencing + Listing & Discovery sections of Epic 4, converted as proof of concept.

## Goal

Every UAT page in Batch 1 uses one consistent, plain-English, BO-executable format: plain-English steps, inline collapsible personas, a Pass/Fail/Blocked/N-A status column, one assertion per row, Jira-linked Test IDs, and a progress rollup per section.

## Status as of this writing

Nothing beyond the draft sample page has been touched. All six live pages below are unchanged — this is a plan, not a report of work done.

## The six pages, in three buckets

### Bucket 1 — Decide first (content question, not a formatting one)

**Epic 69 (Opportunities Unified Hub) + WOG AD Integration and Authentication**

These two overlap: WOG AD's 18 login/auth cases are a duplicate of Epic 69's own Login section (confirmed by direct comparison — same 18 UAT-AUTH cases, word for word). Before converting either page, decide:
- Merge WOG AD's content into Epic 69 and archive/redirect the WOG AD page, or
- Keep both pages but cross-link them so BOs don't execute the same 18 cases twice

This decision changes how much conversion work Epic 69 actually needs, so it should happen before any reformatting starts.

### Bucket 2 — Convert (real content already exists)

| Page | Current format | Scale | Notes |
|---|---|---|---|
| Epic 69 – Opportunities Unified Hub | Old UAT-XXX ID scheme; already has Actual Result / Pass-Fail columns, but IDs aren't Jira keys | ~100+ cases across 9 sections | Partially converted already (Ringfencing + Listing & Discovery samples). Confirmed Listing & Discovery's UAT-OPP-001–006 map 1:1 to Jira test tickets OTEP-955–960; other sections' UAT-XXX → Jira-key mapping still needs verifying case by case. |
| WOG AD Integration and Authentication | Same UAT-XXX scheme | 18 cases (all duplicate of Epic 69 Login section) | See Bucket 1 decision above — conversion work depends on the merge/keep call. |
| Epic 67 – Profile Page | ID/JIRA/Account/Steps/Data/Expected columns, no Result column | ~50 cases across 6 sub-features (Profile, Viewing, Adding, Hide/Show, Report Issue, OTG port, Duplicates), 15 named accounts | **Largest single conversion.** Has a detailed "Expected Competencies per Account" appendix and provisioning JSON — leave the technical appendix as-is (see "What stays untouched" below). |
| Epic 68 – My Development Gap Analysis | Same schema as Epic 67, no Result column | ~40 cases, 9 accounts, heavy data-dependency notes (match %, grade-based ringfencing) | Already reviewed in detail in an earlier pass this session. |
| Courses | Same schema as Epic 67/68, no Result column | 22 cases across 3 sections (Landing, Search & Discovery, Detail), 1 account | Comparatively light — already has clean "out of scope, see OTEP-812" exclusion notes worth preserving as-is in the new format. |

**Five-part conversion job, per page:**
1. Swap Test IDs to Jira keys where not already linked; merge the separate ID/JIRA columns into one linked Test ID column (pattern already used in the Listing & Discovery sample)
2. Pull persona/account tables into a collapsible "who to log in as" panel, scoped per section rather than one giant table at the top or bottom
3. Add the Result status-flag column (Not Yet Run / Pass / Fail / Blocked / N/A) plus "What actually happened" — currently missing on Epic 67, 68, and Courses entirely
4. Split compound test cases into one assertion per row (flagged specifically in Epic 67's EDITCOMP-07/08/09 and Epic 68's EDGE-01–06, and in Epic 69's original Ringfencing cases before conversion)
5. Rewrite Given/When/Then and technical phrasing (POCDEX, fail-open, raw query params) into plain English — heaviest lift on Epic 69/WOG AD, lighter touch needed on Epic 67/68/Courses since those were already written closer to tester-friendly language

### Bucket 3 — Author fresh (no conversion needed)

**Epic 125 – Add Competencies with CIE**

Currently a stub: table headers exist (ID/JIRA/Account/Test Steps/Test Data/Expected Result) but zero test case rows are filled in. Write this one directly in the new format from the start rather than back-filling the old schema and converting later.

## What stays untouched

The technical "Account Setup for Provisioning" JSON appendices on Epic 67 and Epic 68 are explicitly marked "testers can skip" — they serve engineers/QA leads provisioning test accounts, not BOs executing UAT. Don't apply the plain-English rewrite there; the audience is different and the current format already suits them.

## Suggested sequencing

1. Resolve the Epic 69 / WOG AD duplication question
2. Convert Epic 69 + WOG AD (already started, highest visibility given the earlier gap-fill work)
3. Convert Epic 67 + Epic 68 (biggest scope, most actively referenced, most account complexity — highest value once BOs start relying on this for real UAT execution)
4. Convert Courses (quick, already fairly clean)
5. Author Epic 125 fresh (not a conversion — write directly in the new format)
