---
date: 2026-07-01
for_sprint: Sprint 6 (13–26 Jul 2026)
facilitator: Rama
content_owner: Michelle
stories_scored: 21
---

# Grooming Briefing — Sprint 6 (13–26 Jul 2026)

## Sprint Goal

⚠️ **Not yet set.** `sprint-status.md` has goals through Sprint 5 ("officers browsing the opportunity listing can see which roles they're eligible for and filter by job category") but nothing defined for Sprint 6. Sprint 5's theme plus the best-prepared backlog stories (OTEP-437, competency-match trio) suggest a natural Sprint 6 goal: **deepen listing relevance — job family filtering live, and officers see which opportunities match their competencies.** Recommend locking this at the top of the grooming session before working through stories.

---

## Grooming Order (Recommended)

**Tier 1 — Sprint-ready, groom first:**
1. **OTEP-437** — Filter by job family — ✅ best-prepared ticket; resolve the ⚠️ mapping-table rows live, then move fast
2. **OTEP-329** — Keycloak client secret externalization — ✅ clean chore, no blockers

**Tier 2 — Goal-aligned, needs light cleanup (core of the session):**
3. **OTEP-87** — View C@G Opportunity Detail — restructure AC into bullets, scrub stale FormSG/opportunity-type language. ⚠️ **Live Jira update:** this is now **In Progress**, assigned to Thomas — not an untouched backlog candidate. Confirm with Thomas what's already built before grooming ACs live, so the session isn't rewriting requirements against code that already exists.
4. **OTEP-336** — Competency match signal (listing cards) — tighten AC3 language; groom jointly with OTEP-570 (shared BE subtask)
5. **OTEP-570** — Matched competencies (detail page) — tighten AC5 language; groom jointly with OTEP-336
6. **OTEP-571** — Card layout swap (time commitment vs. competency) — confirm it isn't already shipping in Sprint 5 (status is QA, not Backlog) before spending time on it
7. **OTEP-283** — Ministry icons — rewrite the single AC to user-behavior language; get a fallback-icon decision from Thomas's open question first

**Tier 3 — Dependency-gated, flag don't deep-groom:**
8. **OTEP-390** — Ringfenced detail page states — blocked on #43 (BO sign-off)
9. **OTEP-408** — [BE] Ringfencing eligibility filter — blocked on #43 + #31 (POCDEX/Core team)
10. **OTEP-409** — [FE] Listing reflects ringfencing — sequenced behind OTEP-408
11. **OTEP-304** — Session authentication — mostly ready, but surface #52 (Hao Eng leave coverage) as a live risk
12. **OTEP-444** — Azure/Entra AD mock — confirm Sprint 5 decision status before treating as new Sprint 6 scope

**Tier 4 — Needs rework/scope decision, don't finalize ACs live:**
13. **OTEP-403** — OTG import hardening — convert notes into committed ACs; coordinate with OTEP-348
14. **OTEP-348** — OTG ingestion scheduler/observability — Léo's re-evaluation comment unresolved; contradicts item #34's "one-time port only" decision
15. **OTEP-393** — Keycloak login theme — resolve build-vs-skip with Thomas before ACs matter (AzureAD may replace this screen entirely)
16. **OTEP-404** — Page size tablet/mobile — needs ACs written from scratch
17. **OTEP-289** — [Spike] Filter by Functions — likely close/supersede in favor of OTEP-437

**Tier 5 — Remove from Sprint 6 candidate list (housekeeping only):**
18. **OTEP-328** — Already Done; close it
19. **OTEP-483** — Stale Sprint 4 umbrella ticket
20. **OTEP-484** — No content
21. **OTEP-485** — No content

---

## Scoring Table

| Story ID | Title | Live Status / Owner | Story Format | AC Written | AC Language | Design Status | Dependencies | Open Items | Ready? |
|---|---|---|---|---|---|---|---|---|---|
| OTEP-87 | View C@G Opportunity Detail | **In Progress** — Thomas | ⚠️ prose, not bullets | ✅ | ⚠️ 1 flag (payload/analytics mention) | ❌ not noted | OTEP-377/378/379/89; #18; #49 | Stale FormSG/type language unresolved | ⚠️ |
| OTEP-289 | [Spike] Filter by Functions | Backlog — Thomas | ✅ (spike format) | ✅ | N/A | N/A | Superseded by OTEP-437? | Confirm close vs. keep | ⚠️ |
| OTEP-304 | Session stays authenticated | In Progress — Hao Eng | ✅ | ✅ | ⚠️ 1 minor flag | ❌ not noted | #26/#42 (WOG AD timeout) | #52 Hao Eng leave risk | ⚠️ |
| OTEP-328 | OpenTelemetry integration | **Done** — Thomas | N/A (chore) | ✅ | N/A | N/A | None | Already Done — close it | ❌ |
| OTEP-329 | Keycloak secret externalization | Backlog — Pow Hwee | N/A (chore) | ✅ | ✅ (chore-appropriate) | N/A | None | None | ✅ |
| OTEP-336 | Competency match signal (listing) | Backlog — Unassigned | ✅ | ✅ 6 ACs | ⚠️ 1 flag (endpoint named in AC) | ❌ not noted | Shared w/ OTEP-570; #18, #41 | Endpoint specs pending | ⚠️ |
| OTEP-348 | OTG ingestion scheduler/observability | Backlog — Unassigned | N/A (chore) | ⚠️ 3 TBCs | ✅ (chore) | N/A | OTEP-192; conflicts #34 | Léo flags re-evaluation needed | ❌ |
| OTEP-390 | Ringfenced detail page states | Backlog — Unassigned | ✅ | ✅ thorough | ✅ mostly clean | ⚠️ explicitly open | #43 hard block | 3 open questions in ticket | ❌ |
| OTEP-393 | Keycloak login theme | Backlog — Unassigned | N/A (chore) | ⚠️ notes, not ACs | ✅ (chore) | ❌ blocked, asset missing | Scope question from Thomas | Build-or-skip undecided | ❌ |
| OTEP-403 | OTG import hardening | Backlog — Léo | N/A (tech debt) | ❌ no formal ACs | N/A | N/A | Overlaps OTEP-348 | Not yet committed scope | ⚠️ |
| OTEP-404 | Page size tablet/mobile | Backlog — Thomas | ✅ implied | ❌ | N/A | ❌ not noted | None | Needs ACs from scratch | ❌ |
| OTEP-408 | [BE] Ringfencing eligibility filter | Backlog — Unassigned | ✅ | ✅ terse | ⚠️ pure mechanism language | N/A (BE) | #43 + #31 hard block | Inherits both blockers | ❌ |
| OTEP-409 | [FE] Listing reflects ringfencing | Backlog — Unassigned | ✅ | ✅ | ✅ mostly OK | Depends on OTEP-390 | Hard dep on OTEP-408 | Inherits #43/#31 | ❌ |
| OTEP-437 | Filter by job family | Backlog — Unassigned | ✅ | ✅ 4 ACs + mapping table | ✅ clean | Depends on OTEP-86 filter UI | Supersedes OTEP-289; #49 | ⚠️ mapping rows unresolved | ✅ |
| OTEP-444 | Azure/Entra AD mock for testing | Backlog — Léo | N/A (spike) | ❌ no formal ACs | N/A | N/A | #26, #42 | Decision not yet locked | ❌ |
| OTEP-483 | Technical tasks Sprint 4 (umbrella) | Backlog — Unassigned | N/A | ❌ | N/A | N/A | Parent of -484/-485 | Stale sprint label | ❌ |
| OTEP-484 | ER diagram generation update | Backlog — Unassigned | N/A | ❌ | N/A | N/A | Child of -483 | No description | ❌ |
| OTEP-485 | Update deps in otep-service | Backlog — Unassigned | N/A | ❌ | N/A | N/A | Child of -483 | No description | ❌ |
| OTEP-570 | Matched competencies (detail page) | Backlog — Unassigned | ✅ | ✅ 8 ACs | ⚠️ 1 flag (endpoint named in AC) | ❌ not noted, implies Amber | Shared w/ OTEP-336; #18, #41 | Same as OTEP-336 | ⚠️ |
| OTEP-571 | Swap card layout | **QA** — Hao Eng | ✅ minor | ⚠️ minimal | ✅ OK, could tighten | Implied | Coupled to OTEP-336 | Status is QA — may not belong here | ⚠️ |
| OTEP-283 | Ministry icons on detail page | Backlog — Unassigned | ✅ | ✅ 1 line | ⚠️ "system must display" | Icon source resolved; mapping WIP | None tracked | 19 agencies unmapped, fallback undecided | ⚠️ |

---

## Risk Areas Pow Hwee Is Likely to Probe

> ⚠️ **OTEP-390 vs. OTEP-408/409** — Conflicting rules: OTEP-390 shows an explicit notice for ineligible officers via direct URL, while OTEP-408/409 describe ineligible opportunities simply excluded from the listing with no indicator. → Get #43's BO answers on hide-vs-message before accepting either AC.

> ⚠️ **OTEP-336 vs. OTEP-570** — Both define "no match / error / no profile" fallback states independently, built by potentially different people on different surfaces. → Confirm fallback behavior is guaranteed identical, not just similarly worded.

> ⚠️ **OTEP-348 vs. item #34** — AC says "runs on a defined recurring schedule" but #34 already resolved OTG sync is one-time port only. Léo already flagged this contradiction. → Rewrite ACs before grooming, don't discover it live.

> ⚠️ **OTEP-408, OTEP-283** — Mechanism-language slipped through: "Listing API filters by officer's POCDEX data" and "the system must display the Ministry icon." → Rewrite toward observable behavior before the session (see per-story notes below).

> ⚠️ **OTEP-336 AC3 / OTEP-570 AC5** — Both name "the Core competency endpoint" directly in the AC. → Move backend-dependency detail to the subtask; keep the AC officer-facing.

> ⚠️ **OTEP-289 + OTEP-437** — OTEP-437's mapping table already delivers what OTEP-289's spike was scoped to produce. → Propose closing OTEP-289 as superseded rather than grooming both.

> ⚠️ **OTEP-336 + OTEP-570 + OTEP-571** — Three stories touching the same competency-match UI surface with an explicitly shared BE subtask. → Groom as one connected unit; sequencing (who builds the shared endpoint first) matters more than treating independently.

> ⚠️ **OTEP-408 + OTEP-409** — Tightly coupled (FE explicitly says "no additional filtering logic, renders BE's response"). Pow Hwee may ask why these are two tickets instead of one BE/FE checklist. → Have a rationale ready (parallel work by different owners).

> ⚠️ **OTEP-483/484/485** — Stale Sprint 4 umbrella with two content-less children. → Recommend pulling all three from the Sprint 6 list rather than grooming.

> ⚠️ **OTEP-393** — Thomas's comment is effectively "let's not build this" (AzureAD may replace the Keycloak screen entirely). → Reframe as a scope/de-scope discussion, not content grooming.

**AC rewrites needed before the session:**
- **OTEP-408:** "Listing API filters by officer's POCDEX data" → "When an officer requests the listing, they only see opportunities they're eligible for."
- **OTEP-283:** "The system must display the Ministry icon next to the agency name" → "When an officer views an opportunity's detail page, they see the ministry's icon next to the agency name."
- **OTEP-304:** "OTEP detects the expired token and redirects me" → "When my session has expired and I try to use OTEP, I'm taken to the login page instead of seeing a broken page."
- **OTEP-336 AC3:** "Given the Core competency endpoint returns an error or times out" → "Given the officer's competency match data isn't available when the listing loads, then cards render without a match count and no error is shown."
- **OTEP-570 AC5:** same pattern as OTEP-336 AC3 — move "Core competency endpoint" reference to the subtask.
- **OTEP-87:** "The detail page renders the C@G opportunity payload sourced from the C@G API" → "When an officer opens a C@G opportunity, they see the opportunity's title, agency, description, duration, and other structured job-info fields." (Keep the click-to-cag analytics event as a separate technical subtask, not a user-facing AC.)

---

## Open Items — Assign an Owner in the Session

| Open Item | Suggested Owner | Needed By |
|---|---|---|
| BO sign-off on ringfencing display logic (#43) — hide vs. show-disabled, message specificity, positive eligibility signal, Jobs filter chip, EXCLUDE/blocklist visibility | Michelle → BOs (Jacky/Xian Zhang) | Before OTEP-390/408/409 can be finalized — raise as the top blocker at session start |
| POCDEX data expectations + QA/UAT profile setup (#31) | Core team (Pei Ern/Kingsley) → Pow Hwee | Before OTEP-408 can be scoped |
| Core competency endpoint payload spec — hard-skip vs. optional field (#41) | Léo + Kingsley | Before OTEP-336/OTEP-570 build starts |
| OTEP-348 re-evaluation — reconcile "recurring schedule" AC against #34's one-time-port resolution; decide if FE result display is in scope | Léo (input) → Michelle (decision) | Before OTEP-348 can be groomed as committed scope |
| OTEP-393 build-vs-skip decision given AzureAD may replace the Keycloak login screen | Michelle → Thomas / Pow Hwee | Before OTEP-393 consumes dev time |
| Ministry icon fallback treatment — hide vs. generic fallback for ~19 unmapped agencies | Michelle → Amber | Before OTEP-283 is called ready |
| OTEP-289 close-or-keep decision now that OTEP-437 delivers the mapping | Michelle → Pow Hwee | At this session |
| Hao Eng leave coverage for OTEP-304 (auth work) + pending CFT reviews (#52) | Michelle | Before Hao's leave starts (next week) |
| OTEP-483/484/485 — write real descriptions or close as stale Sprint 4 leftovers | Assignee TBD → Michelle to chase | Before next grooming cycle |
| Search AC consolidation ownership (#51) — not one of the 21, but touches the same listing surface as OTEP-437 | Michelle to assign | Before search moves to UAT |

---

## R1 Deflection List

- **Personalisation / AI-matching / recommendation engine:** "That's out of MVP scope — we're doing eligibility-based filtering only. Ranked recommendations are an R1 conversation."
- **Notification service:** "Notifications are out of MVP scope entirely. We'll flag it as an R1 dependency rather than building notification infra now."
- **Proficiency-level competency matching:** "MVP competency matching is presence-only — has it or doesn't have it. Proficiency levels are deferred to R1 across every competency story."
- **Save for later / bookmarking:** "Save-for-later is an out-of-MVP guardrail. If it comes up in a story's edge case, log it as an R1 flag and move on."
- **Supervisor endorsement workflow:** "UI copy only for MVP — no backend workflow."
- **Agency/grade/scheme-level eligibility display (e.g. "Open to MX officers only"):** "MVP shows binary eligible/ineligible only, not the underlying rule — that's R1+."
- **Competency page as a standalone build item:** "Not yet confirmed as MVP scope — that's open item #19, still waiting on Adrian's call."
- **Internal Jobs / Secondments ingestion:** "Excluded from MVP ingestion per the 2026-06-17 decision — only C@G External is ingested under the Jobs filter at MVP."
- **Sorting/filtering by competency match count:** "Match count display is MVP; sorting or filtering by it is R1."

---

## Pow Hwee Will Probably Ask...

- **OTEP-87:** What exact fields come back from the C@G payload when a field is genuinely absent vs. malformed? Where does the click-to-cag event get logged — hard requirement for launch or nice-to-have telemetry?
- **OTEP-336 / OTEP-570:** What's the timeout threshold before we treat the Core endpoint as "failed" vs. "still loading"? Since both stories share the officer-profile endpoint, who's building it first — does the other story's estimate assume it's already done?
- **OTEP-390 / OTEP-408:** When POCDEX lookup fails, do we retry, or does one failed call trigger the fallback? Is the ringfencing rule evaluated per-request or cached at login?
- **OTEP-437:** For C@G indus codes with multiple OTG job family mappings, is that a many-to-one merge, or can an opportunity carry more than one job family tag? What happens when C@G introduces indus codes outside the documented list?
- **OTEP-348 / OTEP-403:** If locking via PostgreSQL for concurrency, what happens when a lock can't be acquired — fail loudly, queue, or silently no-op?
- **OTEP-404:** What are the actual breakpoints for "tablet" vs. "mobile"? Does resizing mid-session reset pagination or filter state?
- **OTEP-444:** Has anyone validated end-to-end login against the real dev Entra tenant yet, or are we still assuming the Keycloak fallback?
- **OTEP-283:** For the ~19 unmatched agencies, is "hide the logo" safe from a BO/comms optics standpoint, or does someone senior need to sign off?
- **Cross-cutting:** For every "no error shown, degrade silently" story (OTEP-336, OTEP-390, OTEP-408, OTEP-570) — how do we detect silent degradation happening at scale in production? Any monitoring on fallback-path frequency, or are we flying blind?

> **Self-check before closing:** Have you reviewed every AC for mechanism-language? ✅ Done above (6 flagged, rewrites provided). Have you checked for conflicting rules across ACs in the same story or across paired stories? ✅ Done above (OTEP-390 vs. 408/409; OTEP-348 vs. #34). If Pow Hwee raises either in the room, that's a prep gap — this brief should have caught it first.

---

## Jira Re-Sync — 2026-07-01

Re-pulled all 21 stories directly against live Jira (REST API — Atlassian MCP unavailable this session, needs re-auth via `/mcp`). One drift found and fixed in the ticket cache:

- **OTEP-87: Status corrected Backlog → In Progress** in `03-stories/jira-sync/Sprint-34619-OTEP-Pathfinder-Sprint-5/OTEP-87.md`, stamped `Synced from Jira: 2026-07-01`. Assignee (Thomas) and points (8) already matched. This is reflected in the Scoring Table and Tier 2 note above.
- All other 20 tickets' Status/Assignee/Story Points already matched live Jira — no further cache changes needed.

**Flagged, not auto-fixed:** the `03-stories/jira-sync/` folder has duplicate copies of most of these 21 tickets sitting under two different naming conventions for the same sprints (e.g. both `Sprint-34619-OTEP-Pathfinder-Sprint-5/` and `OTEP-Pathfinder-12541-Sprint-5-34619/` exist for Sprint 5, with stale content in the older-named copies). This is a pre-existing structural duplication across the whole cache, not something introduced by this sync — cleaning it up means deleting ~dozens of stale files and is a bigger job than today's ask. Flagging for a dedicated `/jira-sync all` pass with a single batched delete-confirmation, per the skill's duplicate-handling rule.

*Generated: 2026-07-01 | Source: live Jira sync (Sprint-34619-OTEP-Pathfinder-Sprint-5 backlog stories), 00-hub/open-items.md, 00-hub/sprint-status.md*
*Next: Lock a Sprint 6 goal before the session starts (none currently set) — recommend "deepen listing relevance: job family filtering + competency match visibility."*
