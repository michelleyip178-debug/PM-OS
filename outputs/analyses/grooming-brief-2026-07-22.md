## Grooming Briefing — 2026-07-22

**Context:** Sprint 6 closes Sunday 26 Jul. `/sprint-check` (20 Jul) found the Ready shelf at zero — no story carries `ready-for-sprint`. `/grooming-close` (today) found no grooming brief exists for today either, confirming grooming for Sprint 7 candidates hasn't happened yet this cycle. This brief evaluates the 23 stories currently sitting in Sprint 6's Backlog status (the de facto Sprint 7 candidate pool) so a real grooming session can run against them before Monday's planning.

### Sprint Goal

Not set. Sprint 6/7 have no recorded goal in `sprint-status.md` (last formal goal recorded was Sprint 4's). **Flag for the session:** agree a Sprint 7 goal before or during grooming — right now there's no filter to prioritise this list against.

---

### Grooming Readiness Scorecard

| Story ID | Title | Story Format | AC Written | AC Language | Design Status | Dependencies | Open Items | Ready? |
|---|---|---|---|---|---|---|---|---|
| OTEP-408 | [BE] Listing API — ringfencing eligibility filter | ⚠️ No user story frame, spec-style bullets | ✅ Present | ⚠️ Mixed — "API filters by...", "silent fallback" reads mechanism | ❌ Not noted | ✅ None blocking | ✅ None | ⚠️ Near-ready |
| OTEP-409 | [FE] Listing — reflect ringfenced results | ⚠️ No user story frame | ✅ Present | ⚠️ Mechanism-heavy ("renders the filtered response", "no additional FE filtering logic") | ❌ Not noted | ⚠️ Depends on OTEP-408 (also not yet Ready) | ✅ None | ❌ Blocked — sequence after 408 |
| OTEP-336 | Competency match signal on Gig/STIP cards | ✅ Proper user story | ✅ Present, 2 ACs | ✅ Observable ("shows a match count") | ❌ Not noted | ✅ None noted | ✅ None | ⚠️ Near-ready |
| OTEP-570 | Matched competencies on Gig/STIP detail page | ✅ Proper user story | ✅ Present (truncated in pull, appears multi-AC) | ✅ Observable so far | ❌ Not noted | ⚠️ Shares competency-matching foundation with OTEP-336 — group these two | ✅ None | ⚠️ Near-ready |
| OTEP-403 | OTG data import hardening | ❌ No user story, engineering spec dump | ❌ Reads as a design doc, not ACs | ❌ Pure mechanism throughout | ❌ N/A (backend) | ✅ None | ✅ None | ❌ Blocked — needs AC extraction from the spec before it's groomable |
| OTEP-348 | OTG ingestion — scheduler & observability | ⚠️ No user story frame | ✅ Present, 4 ACs | ⚠️ Mixed ("job runs on schedule", "produces a summary log") — borderline acceptable for an internal/ops story | ❌ N/A | ⚠️ "Companion to OTEP-192" — confirm OTEP-192 status before committing | ✅ None | ⚠️ Near-ready, confirm dependency first |
| OTEP-502 | Track opportunity engagement in PostHog | ⚠️ No user story frame (rationale doc) | ⚠️ Rationale present, explicit ACs not visible in pull | N/A yet | ❌ Not noted | ⚠️ References OTEP-488 (flags-disabled SDK) as a hard constraint — confirm still true | ✅ None | ❌ Blocked — needs explicit AC section written |
| OTEP-569 | Events (sub-task of PostHog tracking) | ❌ No story format, background note only | ❌ Missing | N/A | N/A | ⚠️ Parented to OTEP-502, same blocker | ✅ None | ❌ Blocked — same as OTEP-502 |
| OTEP-329 | Keycloak Client Secret Externalization | ⚠️ Chore, no user story (acceptable for infra chores) | ✅ Present, 3 ACs | ⚠️ Mechanism throughout — acceptable given this is pure infra, not user-facing | ❌ N/A | ✅ None | ✅ None | ✅ Ready (infra-chore exception) |
| OTEP-393 | Custom OTEP login theme in Keycloak | ⚠️ Chore framing | ✅ Present, detailed | ⚠️ Mixed but mostly acceptable for infra/design chore | ⚠️ "Design asset must be linked before development starts" — **not yet linked** | ✅ None | ✅ None | ❌ Blocked — design asset missing |
| OTEP-404 | Page size on tablet/mobile | ⚠️ One-liner, no story frame | ⚠️ Single implicit AC ("should be 10 not 15") | ✅ Observable, trivial | ❌ Not noted | ✅ None | ✅ None | ⚠️ Near-ready — thin but low-risk, could pass with a 1-line AC rewrite |
| OTEP-679 | CSC ↔ CareerCompass connectivity | ❌ No description at all | ❌ Missing | N/A | N/A | ❓ Unknown — no detail to assess | ✅ None | ❌ Blocked — needs full spec before grooming can even start |
| OTEP-755 | Seed POCDEX ref agency code table | ⚠️ One-off ops task, not a story | ⚠️ Implicit only | N/A | N/A | ✅ None noted | ⚠️ Connects to the still-open POCDEX data-quality thread (open item #33/#55) | ⚠️ Near-ready — small, but confirm it isn't superseded by the bigger POCDEX data work |
| OTEP-768 | CFT upload error message scoping (bug) | N/A (bug) | ⚠️ Problem described, no explicit AC | N/A | N/A | ✅ None | ✅ None | ⚠️ Near-ready — rewrite as AC: "error only shown when CFT auth/download fails, not for opportunity upload errors" |
| OTEP-130 | Apply for STIP/Gig — PostHog Tracking | ❌ "User Story: TBC" | ❌ Missing entirely | N/A | N/A | ✅ None | 🔴 **Open item #57 unresolved** — likely duplicate of Sprint 3's US-18/OTEP-319, needs a close-vs-keep call | ❌ Blocked — do not groom until the duplicate call is made |
| OTEP-680 | Check with OPS for observability needs | N/A (spike/investigation) | N/A | N/A | N/A | ✅ None | ✅ None | ✅ Ready (investigation task, no AC gate applies) |
| OTEP-659 | Investigate smoke test for pipeline | N/A (spike) | N/A | N/A | N/A | ✅ None | ✅ None | ✅ Ready (investigation task) |
| OTEP-662 | Login error after redeploy in dev (bug investigation) | N/A (bug) | ⚠️ Problem described, no AC | N/A | N/A | ✅ None | ✅ None | ⚠️ Near-ready — rewrite as AC once root cause understood |
| OTEP-483 | Technical tasks | ❌ No description | ❌ Missing | N/A | N/A | ❓ Unknown | ✅ None | ❌ Blocked — placeholder ticket, needs real content or should be closed |
| OTEP-485 | Run update deps in otep-service | N/A (chore) | N/A | N/A | N/A | ✅ None | ✅ None | ✅ Ready (routine maintenance chore) |
| OTEP-681 | Run integration testing in pipeline | ❌ No description | ❌ Missing | N/A | N/A | ⚠️ Likely depends on OTEP-723 (integration testing, In Progress) | ✅ None | ❌ Blocked — needs scope written, and confirm it's not duplicating OTEP-723 |
| OTEP-682 | Autogenerate doc in pipeline | ❌ No description | ❌ Missing | N/A | N/A | ✅ None | ✅ None | ❌ Blocked — needs scope written |
| OTEP-684 | Refactor ingestion model (split OTG/C@G importer) | ❌ No description | ❌ Missing | N/A | N/A | ⚠️ Touches same area as OTEP-403 (import hardening) — group these | ✅ None | ❌ Blocked — needs scope written |

**Score summary:** 4 Ready outright, 6 Near-ready (thin but fixable live in the room), 13 Blocked (missing scope, unresolved dependency, or an open decision).

---

### Grooming Order (recommended)

1. **OTEP-130** first, but only to *resolve the open-item #57 duplicate call*, not to groom it as a story — get Pow Hwee/Rama's read on close-vs-keep before spending room time on it.
2. **OTEP-408 → OTEP-409** (paired — ringfencing BE then FE, in sequence; tighten AC language on both)
3. **OTEP-336 → OTEP-570** (paired — competency-match cards then detail page, shared foundation)
4. **OTEP-329, OTEP-680, OTEP-659, OTEP-485** — quick Ready confirmations, low room-time cost, builds shelf depth fast
5. **OTEP-404, OTEP-768, OTEP-662** — thin but fixable with a live AC rewrite (5 min each)
6. **OTEP-348** — confirm OTEP-192 status first, then groom
7. **OTEP-393** — chase the missing design asset link before or during
8. **OTEP-755** — quick check against POCDEX data-quality thread, then Ready
9. Everything else (OTEP-502/569, 403, 679, 483, 681, 682, 684) — flag as **not groomable today**, needs scope written first; assign an owner to draft before next session

---

### Open Items — Assign an Owner in the Session

| Open Item | Suggested Owner | Needed By |
|---|---|---|
| OTEP-130 duplicate-vs-keep call (open item #57 follow-up) | Michelle + Pow Hwee | This session — blocks nothing else, but should close today |
| OTEP-403/684 scope overlap (import hardening vs. ingestion model refactor) — confirm whether these are one piece of work or two | Léo | This session |
| OTEP-348 dependency on OTEP-192 status | Michelle to confirm before grooming OTEP-348 | Before this item comes up in the room |
| OTEP-393 missing design asset link | Amber | This session — flag, assign a date |
| OTEP-679, 483, 681, 682, 684 — all missing scope/description | Respective assignees (Fanxu, unassigned, Léo-adjacent) | Before next grooming session |

---

### R1 Deflection List

- Any request to expand OTEP-336/570 beyond presence-only matching (e.g. proficiency-level comparison) → "Logging as R1 — presence-only match is the MVP cut, proficiency scoring is a good post-launch iteration."
- Any ask to make OTEP-408 ringfencing configurable per-agency beyond POCDEX-resolved eligibility → "R1 — out of scope for the eligibility filter MVP."

---

### Pow Hwee Will Probably Ask...

- **On OTEP-408/409:** "What happens when POCDEX times out vs. returns an explicit ineligible response — is silent fallback the same for both?" (AC only covers "POCDEX unavailable," not slow/error responses distinctly)
- **On OTEP-336/570:** "Where does the competency profile come from if POCDEX hasn't resolved yet — same silent-fallback pattern as ringfencing, or does the card just not render?" (Not addressed in either story's visible AC)
- **On OTEP-403:** "This reads like an engineering design doc, not groomed stories — do you want me to break this into 3-4 separate tickets with real ACs, or are we grooming it as one big spike?"
- **On OTEP-130:** "Why are we even discussing this if #57 already says it's likely a duplicate — has someone made the close call or not?" (Pre-empt: bring the call *into* the room already made, don't let it become a live debate)

> **Self-check before closing:** Reviewed every AC for mechanism-language — flagged OTEP-408/409/403/348/329/393 above, several acceptable given infra/chore context, OTEP-403 needs real rework. Checked for conflicting rules across ACs in the same story — none found in this pull, but OTEP-403's spec-dump format makes conflicts hard to spot; worth a closer read before the session if time allows.

---

*Generated: 2026-07-22. Source: live Jira pull (Sprint 34620, status=Backlog, 23 issues). Next: run grooming session against this order, then re-run `/grooming-close` today to gate whatever passes and write `ready-for-sprint` to Jira.*
