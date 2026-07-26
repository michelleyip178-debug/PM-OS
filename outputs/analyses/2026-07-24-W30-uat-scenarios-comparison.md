---
date: 2026-07-24
week: 2026-W30
topic: Comparison — Pathfinder UAT Scenarios (Journey-Based) vs Consolidated Test Plan
status: draft
sources:
  - https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481295622/Pathfinder+UAT+Scenarios+Journey-Based
  - https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934/Consolidated+Test+Plan+Pathfinder
---

# Comparison: Pathfinder UAT Scenarios (Journey-Based) vs Consolidated Test Plan

## Structure

| | Journey-Based UAT Scenarios | Consolidated Test Plan |
|---|---|---|
| Format | 14 end-to-end journeys (UAT-01 to UAT-14), each with setup, numbered steps, and one observable result | 90+ atomic test cases (UAT-OPP/RF/COMP/APPLY/AUTH-###), grouped by feature area |
| Audience | Business testers, walk a whole flow at once | BO-executable, one row per discrete behavior |
| Granularity | Coarse — one scenario often bundles 3-5 checks (e.g. UAT-01 covers cards, badges, pagination, and detail page in one pass) | Fine — each row isolates a single expected result |

## Coverage differences

**In the Consolidated plan but absent from Journey-Based:**
- Login/Authentication (UAT-AUTH-001 to 018, OTEP-111) — entire feature area, not touched by journey scenarios at all
- Competency Matching detail (UAT-COMP-001 to 013) — journey UAT-08 only checks card layout order, not match-count correctness, graceful degradation, or async loading
- POCDEX/ringfencing edge cases: case-sensitivity (RF-007), whitespace (RF-008), exact-match vs substring (RF-010), POCDEX outage fail-open (RF-017/018), mid-session eligibility switch (RF-015), tracking-param survival through login redirect (RF-014) — journey UAT-14 covers only the three happy/blocked paths, none of these edge cases

**In Journey-Based but thinner or absent in Consolidated:**
- Search — flagged as "not written yet" in the Consolidated doc; Journey-Based has UAT-05 covering search (case-insensitivity, debounce-on-submit, filter interaction, no-results state). Journey-Based is ahead here.
- UAT-01's "no agency logo shows default logo" and Ministry icon detail
- SJR page handling (UAT-11: "SJR page shows neither Apply button nor unavailable message") — no SJR-specific case in Consolidated at all

**Matched coverage (present in both, roughly equivalent):**
- C@G apply flow: single CTA, no FormSG flow shown (Journey UAT-09 / Consolidated APPLY-005)
- Closed and invalid opportunity links (Journey UAT-13 / Consolidated OPP-016, 017)
- Logged-out deep link redirect-then-return (Journey UAT-12 / Consolidated RF-013, AUTH-017)

## Ticket (OTEP-) reference differences

**Only in Journey-Based:** OTEP-88, 131, 283, 406, 437, 571

**Only in Consolidated:** OTEP-111, 127, 129, 267, 268, 85

**In both:** OTEP-86, 89, 284, 317, 319, 390, 405, 408, 409

## Bottom line

Not duplicates — they cover overlapping ground at different altitudes. The Consolidated plan is the more current, granular, BO-executable source of truth (it has Auth and detailed Competency coverage the journey doc lacks entirely). The Journey-Based doc reads faster end-to-end but is missing Auth completely and has shallower ringfencing/competency edge-case coverage.

**Gaps that matter most if reconciling into one source:**
1. Auth is only in Consolidated — must carry forward as-is.
2. SJR handling is only in Journey-Based — needs a home in Consolidated (currently flagged as an open decision, RTM item 11).
3. Search is only properly covered in Journey-Based (UAT-05) — Consolidated has an empty placeholder for it.
