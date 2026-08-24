# Competency-Based Recommendation Filtering

## Meta
- Owner: Adrian Lo (Engineering)
- Status: confirmed intended behavior
- Priority: MVP
- Last updated: 2026-08-19

## Problem / Behavior
Role recommendations ("Based on your current role" and "Explore new roles" panels) only surface roles that have at least one functional competency attached. A role with zero functional competencies — core competencies only — always produces a 0% match, so it's excluded from recommendations entirely rather than shown with a misleading/false score.

This looked like a bug in UAT (roles missing from results) before being confirmed as intended.

## Source PRD
[Epic 2: My Development Page](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931314890) — Decision Tracker entry, 17 Aug 2026, owner WD: "Exclude WOG role profiles from any role recommendations in Explore new Role and Based on Current role. So all roles should have an agency tagged to it." Local copy: [epic2-my-development-page.md](epic2-my-development-page.md).

This is the formal decision behind the behavior. OTEP-1235 (below) is the UAT confirmation that the decision was actually implemented, framed slightly differently ("no functional competencies" rather than "no agency tag") — both point at WOG/core-only role profiles being excluded from recommendations, worth confirming these are literally the same filter and not two overlapping rules.

## Confirmed via
- **Epic 2 Decision Tracker** (17 Aug 2026, WD) — the formal decision to exclude WOG role profiles (no agency tag) from recommendations.
- **OTEP-1235** (UAT test case, 19 Aug 2026) — retested by Christopher Woo: searching an agency with no roles returns nothing (expected), but searching Council of Estate Agencies (CEA) also returned zero results despite CEA having profiles in the master list.
- **Rama Moorthy's explanation** (OTEP-1235, 19 Aug): CEA's 145 role profiles carry only core competencies (`[CEA]_OCC_*`) and zero functional competencies. Since the platform only shows roles with at least one functional competency, all CEA roles are correctly filtered out — same as any core-only role.
- Confirmed again in the 19 Aug UAT Daily Review as intended behavior, not a defect.

**Open verification:** Epic 2's decision is framed as "no agency tag" (WOG role profiles specifically); OTEP-1235's explanation is framed as "no functional competencies" (any agency, including CEA which does have an agency tag). CEA proves these aren't identical in practice — CEA is tagged, not WOG, and still got excluded. So the actual implemented rule is closer to the functional-competency-count check, and the Decision Tracker's "no agency tag" framing may be an incomplete or earlier statement of the same intent. Worth confirming with Adrian Lo/WD which is the accurate description before citing either as canonical.

## Open questions (raised by Christopher Woo, OTEP-1235, not yet answered in-ticket)
- Is the exclusion dynamic? If CEA's roles later get functional competencies added, do they reappear automatically after a profile-bank refresh, or is this a static/one-time filter?
- Is full exclusion (undiscoverable) the right behavior, or should roles without functional competencies be deprioritized/shown lower in "Based on your profile" instead of hidden entirely?

Neither question has a recorded answer as of 20 Aug 2026 — ticket moved to Done without either being closed out.

## Where this needs to be known
- **Ops Portal** — BOs reviewing profile-change cases may see a role/officer with no functional competencies and reduced/absent matches; this is expected, not drift. See note in [ops-portal-epic-one-pager.md Section 8](../../outputs/prds/2026-08-17-W34-ops-portal-epic-one-pager.md).
- Distinct from TC11 in the Ops Portal doc (masked classification-change risk) — that's about a *change* silently altering which competencies apply; this doc is about the *display filter* once competencies are known. Easy to conflate since both surface as "competencies look different than expected."

## Linked
- Jira: OTEP-1235
- [Ops Portal epic one-pager](../../outputs/prds/2026-08-17-W34-ops-portal-epic-one-pager.md)
- [competency-profile.md](competency-profile.md) — related but distinct: that doc covers role-change sync triggers, this doc covers recommendation-display filtering once competency data is known.
