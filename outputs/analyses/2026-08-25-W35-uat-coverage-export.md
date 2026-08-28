---
date: 2026-08-25
week: 2026-W35
audience: Christopher Woo and stakeholders — sign-off assurance
purpose: Answer "have we tested the necessary things," in business-capability terms
status: DRAFT — first cut
---

# UAT Assurance — Have We Tested What Matters

Answers "can Business Owners be confident the things officers actually need to do were tested" — not "how many test cases exist." Flagged risk areas first, then full capability coverage.

---

## Part 1 — Risk areas stakeholders flagged

### 1. Whitelist / agency access — "have whitelist scenarios really been tested?"

**Yes.**

| Test Case | What it proves | Status |
|---|---|---|
| OTEP-1379 (POCDEX-012) | Non-whitelisted agency officer routed to Unauthorized Access | Done |
| OTEP-1380 (POCDEX-013) | Excluded employment group routed to Unauthorized Access (404) | Done |
| OTEP-1221 (ERR-01) | WOGAD login with no matching POCDEX record routes to Unauthorized Access | Done |

Three distinct exclusion paths, each tested and passing. **Not yet confirmed:** whether the inclusion side is tested — a case proving a whitelisted officer from an included agency gets full access, not just that excluded ones get blocked.

### 2. CSC SSO — open blocker from yesterday's sync

No test case exists in either epic's UAT set. Matches what's already known: the final SSO case is still in progress, not yet a passing UAT ticket.

### 3. Apply flow (FormSG / Careers@Gov)

**Covered.** Apply via FormSG and Apply via Careers@Gov are both tested via the Apply CTA test cases.

### 4. Identity / multi-agency / double-hatting — scope exclusion, not a gap

PRD explicitly excludes double-hatting display and multi-role/agency-transfer handling from MVP. Nothing to test because nothing was built — state this as a known exclusion, not a UAT gap.

---

## Part 2 — Full capability coverage (PRD-anchored)

### Opportunities (Pathfinder)

| Capability | Tested? | Evidence |
|---|---|---|
| Browse opportunity listing, paginated, ringfenced | ✅ | OTEP-955, 958, 959 + ringfencing suite (975, 1301, 1302) |
| Search by keyword | ✅ | OTEP-1019–1033 (10 cases) |
| Filter by type/category, clear filters | ✅ | OTEP-961–966 |
| Opportunity detail page, incl. closed/expired deep-links | ✅ | OTEP-967, 969–973 |
| "Closing soon" label | ✅ | OTEP-972, 973 |
| Apply via FormSG | ✅ | Apply CTA test cases |
| Apply via Careers@Gov, incl. EDM email deep-link | ✅ | Apply CTA test cases (badge behavior: OTEP-999–1003) |
| Empty, error, partial-load states | ✅ | OTEP-960, 964, 970 |

### Officer Profile

| Capability | Tested? | Evidence |
|---|---|---|
| WOGAD login, session/SSO handling | ✅ | OTEP-1174 |
| Error state + retry on login failure/access denied | ✅ | OTEP-1221, 1379, 1380 |
| Lands on profile by default after login | ✅ | OTEP-833–835 (PROF-01–03) |
| View basic profile info | ✅ | OTEP-833–842 (8 cases) |
| View Core + Functional competencies, self-declared section | ✅ | OTEP-843–849 (7 cases) |
| OTG carried-over self-declared competencies show automatically | ✅ | OTEP-105 |
| Add competencies via keyword search | ✅ | OTEP-850–857, 900 (9 cases) |
| Hide/show role competencies, remove self-declared (w/ confirmation) | ✅ | OTEP-858–863, 901, 902 (8 cases) |
| Empty state + feedback mechanism when no role/competencies | ✅ | OTEP-864 onward |
| Auto-update profile on role change, outdated comps move to "Additional" | ⚠️ | No matching test case found — worth confirming, a data-integrity capability |

### My Development

| Capability | Tested? | Evidence |
|---|---|---|
| Compare current vs. next-progression role competencies | ✅ | OTEP-872 (REC-01) onward |
| Compare current vs. chosen target role, w/ agency/family/function/grade filters | ✅ | OTEP-1243–1259 (15+ cases) |
| View a competency's description inline | ✅ | OTEP-1242 (EXPD-06) |
| Recommended courses tied to missing competencies, w/ fallback logic | ✅ | OTEP-893 (CRS-01, swimlane display), OTEP-894 (CRS-02, under 3 recommendations), OTEP-895 (CRS-03, recommendation logic/tier ranking), OTEP-1322 (CRS-04, no recommended courses), OTEP-1236 (CRS-05, tie-break randomization), OTEP-1237 (CRS-06, possessed-competency backfill) |
| No-role-profile officer can still select target role / see generic swimlane | ✅ | OTEP-879 (BLANK-01), OTEP-880–885, 1260, 1261 |
| MX7+ roles excluded from target-role selection | ⚠️ | Ringfencing tested generally (OTEP-876) but no case specifically verifies MX7+ exclusion |

### Courses

| Capability | Tested? | Evidence |
|---|---|---|
| "Recommended for you" swimlane (Jumpstart) | ✅ | OTEP-1284 (JMP-01) |
| Competency-gap-matched course swimlane, hidden if no matches | ✅ | See CRS cases above |
| Course tile info + click-through to detail page | ✅ | OTEP-952 onward |
| Full course detail view + "Learn more" handoff | ✅ | OTEP-944–951 |
| Search/filter full catalog, clear filters, autocomplete | ✅ | OTEP-937–943, 1289–1299 (20 cases — most thoroughly tested capability in either epic) |
| No-history officer can still browse/search full catalog | 🟡 | Implied by generic-account coverage; no case frames it explicitly as zero-history |
| Blank/missing fields handled gracefully on listing | ✅ | OTEP-947 (untestable for Duration, but covers Competencies/Outcomes omission) |

---

## What to tell Christopher Woo, in order of what he asked

1. **Whitelist: yes, tested** — OTEP-1379, 1380, 1221.
2. **Apply flow (FormSG and Careers@Gov): tested** via the Apply CTA test cases.
3. **Identity/double-hatting isn't untested, it's unbuilt** — different risk category, don't lump into UAT gaps.
4. **Two secondary gaps, not urgent:** profile auto-update on role change; MX7+ exclusion rule in My Development.

---

*Sources: live Jira, `labels = PATHFINDER AND labels = uat` (44 tickets) and `project = OTEP AND labels in (CORE, core)` (149 tickets after removing 15 stale duplicates) — pulled 2026-08-25, cross-referenced against PRD capability statements. Full ticket-level detail: [2026-08-25-W35-uat-test-case-export.md](2026-08-25-W35-uat-test-case-export.md).*
