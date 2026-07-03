# Grooming Briefing — Pathfinder Sprint 6 (2026-07-02)

**Sprint 6 dates:** 13–26 Jul 2026 (Sprint 34620, future). 8 stories assigned in Jira so far, all still Backlog status, unassigned, no points.

## Sprint Goal
Not yet set for Sprint 6 in `sprint-status.md` — only S5's goal is confirmed ("officers browsing the opportunity listing can see which roles they're eligible for and filter by job category"). Worth naming a S6 goal before or at grooming — the 8 stories split cleanly into two threads (auth/WOG AD landing, and bookmarking), which suggests the goal is auth-completion-driven, not a single user outcome yet.

---

## Grooming Readiness

| Story | Title | Story Format | AC Written | AC Language | Design Status | Dependencies | Open Items | Ready? |
|---|---|---|---|---|---|---|---|---|
| OTEP-71 | Login Authentication Successful | ✅ | ⚠️ (flow narrative, not bullets) | ⚠️ mechanism language | Not noted | Blocked on #26 (Keycloak client config) | #26 | ❌ |
| OTEP-72 | New Officer account creation | ✅ | ⚠️ (AC #3 vague; Tech section mixes mechanism into story) | ⚠️ mechanism language in Tech notes | Not noted | POCDEX/HRPS/Cumulus sync timing (confirmed instant per Rama) | #37 (POCDEX loop bug, watch) | ⚠️ |
| OTEP-110 | Login fail using WOG AD | ✅ | ✅ | ✅ clean | Spec exists but **conflicts with Jira AC** | WOG AD | #32 | ❌ |
| OTEP-111 | Officers with no access (unauthorised page) | ✅ | ⚠️ (1 AC explicitly missing) | ✅ clean | Not noted | OTEP-594 (routing lands here) | Decision #10 (Rama) needed | ⚠️ |
| OTEP-594 | Officer routed to correct page after auth | ✅ | ⚠️ (1 AC needs re-scope, 1 assumption unconfirmed) | ✅ clean | "Screen not ready for this state" | OTEP-111, OTEP-350, blocks OTEP-71 | Decision #7/8/9, 2-day sync assumption | ❌ |
| OTEP-331 | WOG AD - SSO integration with CSC | ❌ no description | ❌ | ❌ | Not noted | WOG AD (#26) sequential gate | #30 (rich context not yet in ticket) | ❌ |
| OTEP-425 | Bookmark opportunities | ❌ no description | ❌ | ❌ | Not noted | Unclear — spike OTEP-422 not yet run | None logged | ❌ |
| OTEP-197 | View list of bookmarked opportunities | ❌ no description | ❌ | ❌ | Not noted | Depends on OTEP-425 | None logged | ❌ |

**Bottom line:** 0 of 8 are grooming-ready as-is. OTEP-110 and OTEP-111 are closest — good ACs, but each has one concrete blocker/gap to close before the room. The other six need real prep work first.

---

## Flag Risk Areas

> ⚠️ **OTEP-71** — AC is written as a flow narrative ("Officer clicks → OTEP authenticates in background → OTEP loads") not testable bullets, and "authenticates against AD in the background" is mechanism language. → Rewrite as: "Officer who clicks 'Log in with WOG AD' lands on their profile without seeing a login form or password prompt." Also surface the #26 blocker (Léo's Keycloak client config, no ETA) up front — don't let the room discover this is unbuildable mid-discussion.

> ⚠️ **OTEP-72** — AC #3 ("they should see the default view of viewing his profile details and My Competency section") is vague on what "default view" means, and the Tech section describes HRPS/Cumulus → POCDEX → OTEP push mechanics inside what should be a user-facing AC set. → Split: keep Tech as engineering notes, rewrite AC #3 to name exactly what's visible on first login.

> ⚠️ **OTEP-110 vs. design spec** — Open item #32 says the Jira ACs and the design spec don't match, and it's pending compliance sign-off on error copy (non-enumeration NFR — i.e., the error message can't reveal *why* login failed, to avoid leaking account-existence info). This is exactly the kind of AC-conflict Pow Hwee catches. → Resolve before grooming, not in the room: confirm which version (Jira or spec) reflects the compliance-approved copy.

> ⚠️ **OTEP-111 and OTEP-594 scope boundary** — Already resolved 2026-07-02 (per your backlog-awareness doc): OTEP-594 owns the routing *decision*, OTEP-111 owns the unauthorised-page *display* only. Bring this boundary explicitly into the room since Rama flagged them as possible duplicates at Squad Sync — pre-empt the question rather than re-litigating.

> ⚠️ **OTEP-594 — three open threads in one ticket.** (1) A rescope-flagged AC for the "pilot agency, no POCDEX profile yet" case, (2) an unconfirmed 2-day POCDEX sync-lag assumption behind the proposed copy, (3) "screen is not ready for this state" — meaning design hasn't caught up to the new scenario. → This ticket is not groomable in its current state. Recommend: confirm the 2-day assumption with Rama/Pow Hwee and get Amber to commit to a screen state *before* grooming, or pull this story from Sprint 6 scope and re-add once unblocked.

> ⚠️ **OTEP-331 — ticket has zero description, but open item #30 has a fully worked architecture** (OIDC Authorization Code Flow, OTEP as IdP, DLE as Relying Party, ~15 man-days DLE-side effort, August testing target). → This is a documentation gap, not a scoping gap — copy #30's content into the ticket before grooming so the room isn't starting from a blank ticket on a story that's actually well-understood.

> ⚠️ **OTEP-425 / OTEP-197 — bookmarking pair has no description, no AC, and an un-run spike.** Your backlog-awareness doc (2026-07-01) already flagged OTEP-422 (bookmarking spike, assigned to you) as "not yet actioned." Building 425/197 without that spike's output risks scoping blind. → Recommend either running the spike before grooming this pair, or explicitly deferring both out of Sprint 6 until the spike lands.

---

## Recommended Grooming Order

1. **OTEP-111** — closest to ready; only needs decision #10 (mid-session agency removal) closed. Groom first to set the auth-error pattern others reference.
2. **OTEP-110** — clean ACs, but resolve the Jira-vs-spec conflict (#32) before the session; groom once resolved, otherwise defer to next session.
3. **OTEP-71** — rewrite AC to outcome language and surface the #26 blocker as a known risk, not a surprise; groom the *shape* of the story even if build can't start until Keycloak config lands.
4. **OTEP-72** — split Tech from AC, tighten AC #3, then groom.
5. **OTEP-594** — only groom if the rescope + screen-state gaps close beforehand; otherwise flag as "not ready, pull from S6" at the top of the session rather than spending room time on it.
6. **OTEP-331** — backfill description from open item #30's content before the room sees it; then a light groom (mostly confirming scope, not discovering it).
7. **OTEP-425 / OTEP-197** — lowest priority; recommend explicitly deferring both until OTEP-422 spike output exists, rather than grooming blind.

---

## Open Items — Assign an Owner in the Session

| Open Item | Suggested Owner | Needed By |
|---|---|---|
| #26 — Léo's Keycloak/Azure AD client config, no ETA (blocks OTEP-71/110/594) | Léo (Pow Hwee to chase timeline) | Before Sprint 6 planning |
| #32 — OTEP-110 Jira AC vs. design spec conflict, compliance sign-off pending | Michelle | Before grooming this ticket |
| Decision #10 — OTEP-111 mid-session agency-removal AC | Rama | Before grooming OTEP-111 |
| Decision #7/8/9 — OTEP-594 rescope + 2-day POCDEX sync assumption | Rama / Pow Hwee | Before grooming OTEP-594 |
| OTEP-422 spike (bookmarking) — not yet actioned | Michelle | Before grooming OTEP-425/197 |
| Backfill OTEP-331 description from open item #30 content | Michelle | Before grooming OTEP-331 |

---

## R1 Deflection List

- Notifications on bookmark/apply status → "Logging as R1 — great idea for post-MVP, notifications are already out of MVP scope per guardrails."
- Save-for-later beyond bookmarking → "That's the same R1 exclusion as 'Save for later' — bookmarking covers the MVP need."
- Competency proficiency levels surfacing in profile view (OTEP-72) → "Binary competency model only for MVP — proficiency levels are R1."

---

## Pow Hwee Will Probably Ask...

- On OTEP-71/594: "What happens if WOG AD auth succeeds but the Keycloak client isn't configured yet — do we have a fallback, or does this just not work until #26 closes?" (Pre-empt: state plainly that build is blocked, not degraded, until #26 resolves.)
- On OTEP-72: "Is the POCDEX push actually instantaneous in production, or was that confirmed only for a test scenario?" (Rama confirmed instant — but item #37's account-recreation loop is live evidence POCDEX sync isn't always clean. Have that caveat ready.)
- On OTEP-111: "Does the unauthorised page ever need to distinguish *why* access was denied for support/HR purposes, even if the officer-facing copy stays generic?" — i.e., is there a logging/audit AC missing.
- On OTEP-594: "What's the actual data source for '2-day POCDEX sync lag' — is that a real SLA or a guess?" (It's currently an assumption pending confirmation — say so, don't improvise a justification.)
- On OTEP-331: "Has DLE actually committed to the August testing window, or is that still provisional?" (Per #30: approval/governance docs are still TBC — flag as not fully locked.)
- On OTEP-425/197: "What's actually in scope for 'bookmark' — is this SJRs too, or only apply-able opportunity types?" (No AC exists yet to answer this — that's the gap.)

> **Self-check before closing:** Have you reviewed every AC for mechanism-language? Yes — flagged in OTEP-71, OTEP-72. Have you checked for conflicting rules across ACs in the same story? Yes — OTEP-110 (Jira vs. spec, #32) and OTEP-594 (rescope flag) are the two live conflicts. Both are already captured above, not left for Pow Hwee to find first.

---

*Source: live Jira pull 2026-07-02, sprint 34620 (Pathfinder Sprint 6, future, 13–26 Jul). Cross-checked against `00-hub/open-items.md`, `00-hub/risks.md`, `00-hub/sprint-status.md`, and `06-skills-and-decisions/decisions-log.md` (no bookmark/SSO-specific entries found — OTEP-331/425/197 confirmed genuinely un-scoped, not just under a different name).*
