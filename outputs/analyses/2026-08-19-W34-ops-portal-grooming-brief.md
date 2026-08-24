# Grooming Prep — Ops Portal

**Date:** 19 Aug 2026 · **Source:** [ops-portal-user-stories.md](../prds/2026-08-17-W34-ops-portal-user-stories.md), derived from [epic one-pager](../prds/2026-08-17-W34-ops-portal-epic-one-pager.md) Section 8/12 · Rama facilitates, Michelle leads content.

**Heads up before the room:** these 5 stories aren't in Jira yet — Epic Link is TBC (one-pager header). This session is really "are these ready to become tickets," not a live-backlog groom. Say that up front so nobody expects to walk out with sprint-ready Jira IDs.

**Fixes applied to the source ACs ([user-stories doc](../prds/2026-08-17-W34-ops-portal-user-stories.md)) ahead of the session:**
- **Story 1 split into 1a/1b/1d** — the original story bundled 3 separable capabilities (re-pull/diff/log, categorization, identity resolution) with no independent test/ship path. **1a** (re-pull, diff, log) has no open blocker and is buildable now. **1b** (categorize into 6 buckets) depends on 1a but is otherwise clear, TC7 pulled from its priority list (re-opened, not settled). **1d** (identity resolution for TC2/TC4/TC8/TC13) is broken out as its own not-yet-scoped story, gated on the open Decision Tracker call — previously this lived as a footnote under the combined Story 1, easy to miss in estimation.
- Story 2: AC #4 kept, destination marked TBC pending the receiving-team decision — no longer blocks Story 2 on an org decision; **Target** — before code freeze, no open blocker.
- Story 3: sequencing dependency on Story 4 stated directly in the AC; marked "discuss, don't estimate"; **Target** — no MVP date, blocked on a design session that hasn't happened.
- Story 4: due-diligence AC split into 4 per-destination checks (was one compound AC covering routing to Engineering/POCDEX/HR/receiving-team — the receiving-team branch is now flagged unverifiable separately, not bundled with the 3 that are testable today); explicit dependency on Story 3 added; marked "discuss, don't estimate"; **Target** — no MVP date, ACs partly unverifiable until the launch-gate decision lands.
- Story 5: **Target** line added — no date, don't groom until Adrian's proposal is approved.

**SMART pass on all 5 (this round's actual gap):** none of the 5 stories were time-bound before this pass — no story tied itself to a sprint, date, or "before code freeze" marker. That's now fixed above. The remaining SMART gaps (Story 3/4/5 not currently *achievable*, Story 5's *relevance* conditional on a decision not yet made) are stated outright in the doc rather than papered over — a story blocked on a real external dependency isn't achievable yet, and forcing a fake date or estimate would be a worse violation of SMART than naming the gap.

---

## Step 2 — Grooming Readiness Scorecard

| Story | Story Format | AC Written | AC Language | Design Status | Dependencies | Open Items | Target | Ready? |
|---|---|---|---|---|---|---|---|---|
| 1a. Daily Sync — Re-pull, Diff, Log | ✅ | ✅ (4 ACs, tightly scoped) | ✅ | ✅ No new visual design needed | ✅ None | None blocking | Before code freeze, no blocker | ✅ Sprint-ready |
| 1b. Daily Sync — Categorize | ✅ | ✅ (7 ACs, 6 are field→category mappings) | ✅ | ✅ No new visual design needed | ⚠️ Depends on 1a shipping first | None blocking | Before code freeze, conditional on 1a | ✅ Ready once 1a is groomed |
| 1d. Daily Sync — Identity Resolution | ✅ | ❌ not yet written — placeholder only | N/A | N/A | 🔴 Blocked on Decision Tracker call | 🔴 The open decision itself | No date | ❌ Not ready — don't estimate, nothing to estimate yet |
| 2. BO Views Overview / Update Status | ✅ | ✅ | ✅ | ❌ No visual designs yet (grouped with Story 3/4's design gap) | ✅ None — standalone by AC #5 | None blocking | Before code freeze, no blocker | ✅ Sprint-ready |
| 3. BO Reviews/Sorts Identity, Employment, Record-Change Cases | ✅ | ✅ | ✅ | ❌ No visual designs exist for any of these 4 sections | 🔴 Blocks sprint planning outright per the doc's own note | 🔴 TC13 severity language is in the AC itself | No MVP date | ❌ Not ready — explicitly blocked |
| 4. Case Escalates to POCDEX/Receiving Team | ✅ | ✅ | ✅ fixed — routing AC split into 4 per-destination checks; the 1 unverifiable branch (receiving team) is now isolated instead of bundled with the 3 that are testable | ❌ Same design gap as Story 3 | 🔴 Receiving team doesn't exist — 3 of 4 routing destinations are real, 1 isn't | 🔴 Launch-gate decision still open | No MVP date | ⚠️ 3 of 4 ACs buildable and testable now; 1 blocked |
| 5. Auto-Resolve Low-Risk Categories (proposal) | ✅ | ✅ (marked proposed) | ✅ | N/A — not approved yet | N/A | 🔴 Not yet decided (Section 12, last row) | No date, don't groom yet | ❌ Not a story — still a proposal, don't groom as if it's scoped |

**Read:** splitting old Story 1 turned one ambiguous "buildable but ships a gap" story into two genuinely sprint-ready stories (1a, 1b) plus one honest placeholder (1d) that was previously hiding as a footnote. Story 2 is sprint-ready. Story 4 improved on inspection — 3 of its 4 routing rules are real and testable today, only the receiving-team branch is blocked. Story 3 is still flatly blocked on design. Story 5 shouldn't be in the room as a story at all; it's Adrian's unapproved proposal.

---

## Step 3 — Risk Areas Pow Hwee Will Probe

> ✅ **Old Story 1 (resolved by the split)** — Pow Hwee's most likely opener would have been "this is four things, not one story." Splitting into 1a (plumbing)/1b (categorization)/1d (identity resolution) pre-empts it directly — each is independently testable and estimable now.

> ⚠️ **Story 1b** — TC7 (NPL/return) is listed as a UAT-priority test case in the AC, but Section 12 of the one-pager has it re-opened ("previously called fully resolved... Ops can no longer tell NPL exclusion apart from other Inactive cases"). → Already pulled from the priority list in the doc; confirm live that it's genuinely re-opened, not settled, before anyone assumes otherwise.

> ⚠️ **Story 1d** — has no ACs yet, only a placeholder. If it comes up in the room, the honest answer is "not scoped, blocked on Product+Engineering's Decision Tracker call" — don't let anyone estimate a story with no ACs just because it's on the doc.

> ⚠️ **Story 3 vs Story 4** — Story 3's AC says a BO can "send the case on," and Story 4 owns what happens after. No AC in either story defines what happens if Story 3 ships before Story 4, or vice versa. → Confirm sequencing dependency explicitly before grooming order is set (see Step 4).

> ✅ **Story 4 (resolved)** — the compound routing AC ("all required due-diligence fields... before the ticket is raised") has been split into 4 per-destination checks and rewritten to BO-observable language ("BO sees a warning..."). 3 of the 4 (Engineering, POCDEX, agency HR) are real and testable today.

> ⚠️ **Story 4** — the 4th routing destination (receiving team) has no team to route to. Pow Hwee's usual "can we build this" question has an unusual answer here: yes for 3 of 4 branches, no for the 4th, and it's now visible as an isolated AC rather than one blanket blocker. → Estimate the 3 buildable branches if the room wants to; leave the 4th out of any estimate until the launch-gate decision (Section 12) resolves.

> ⚠️ **Story 5** — Not decided. If it comes up, it'll be Pow Hwee asking why a proposal is in a grooming session. → Have the answer ready: included for visibility only, not up for estimation.

**Pow Hwee's usual 3 catches, pre-empted:**
1. **AC rule conflicts** — Story 3/4 sequencing gap above is the one live conflict.
2. **Mechanism-language** — one instance, Story 4's due-diligence AC, rewritten above.
3. **Fold/reframe candidates** — two instances this round: old Story 1 was oversized (4 bundled capabilities, now split into 1a/1b/1d), and Stories 2+3+4 could separately be read as one "Ops Portal core loop" epic split three ways for design-gate reasons, not real independence. Worth naming both out loud rather than let either surface as a "why is this one/many stories" question.

---

## Step 4 — Recommended Grooming Order

1. **Story 2** (Overview/Update Status) and **Story 1a** (Re-pull/Diff/Log) — both fully sprint-ready with no open blocker. Groom first, straight to estimation.
2. **Story 1b** (Categorize) — groom next; depends on 1a but has no other blocker. Treat TC7's re-opened status as a live agenda item, confirm it's genuinely unresolved before moving on.
3. **Story 4's 3 buildable routing branches** (Engineering, POCDEX, agency HR) — can be sized now as a partial estimate; the 4th branch (receiving team) stays out of scope for estimation.
4. **Story 3 + Story 4's receiving-team branch** — discuss together given the sequencing question above, but don't attempt to size either. The design session hasn't happened and the receiving-team decision hasn't landed. Grooming's job here is to surface exactly what's needed to unblock, not to fake readiness.
5. **Story 1d** and **Story 5** — mention for context only, both blocked on a decision that hasn't landed (Decision Tracker identity-field call; Section 12 launch-gate call respectively). Not on the agenda for estimation.

---

## Open Items — Assign an Owner in the Session

| Open Item | Suggested Owner | Needed By |
|---|---|---|
| Design session for Stories 3+4's 4 sections (Identity, Employment record, Record changes, History/reporting) | Amber / design lead | Before either story can be estimated |
| Receiving-team decision (stand up team vs. Adrian's auto-resolve proposal) | Product + Ops leadership, escalate to Ram/Adrian | Before Story 4 ships anything usable |
| Formal call: extend Story 1's diff to identity fields, or accept the TC2/TC4/TC8/TC13 gap | Product + Engineering | Before Story 1 build starts |
| TC7 re-confirmation now that POCDEX won't pass the NPL reason code | Michelle + POCDEX | Before TC7 goes back in an AC list as resolved |

---

## R1 Deflection List

- **"Can we also detect reporting/org-structure changes?"** → "Descoped — not displayed anywhere in Career Compass today, logging as post-MVP if that changes."
- **"What about showing double-hatting on the officer's own profile?"** → "Detection stays in scope, display doesn't — no screen exists to put it on yet. Logging as a fast-follow, great catch though."
- **"Can we auto-fix everything instead of routing to a person?"** → "That's Story 5, Adrian's proposal, still under review — not something to build against yet."

---

## Pow Hwee Will Probably Ask...

- "Why did Story 1 become three stories?" — answer: it bundled 3 separable capabilities (plumbing, categorization, identity resolution) with no independent test/ship path; 1a and 1b are workable now, 1d has no ACs yet because it's blocked on a decision.
- "What happens to a case where the diff genuinely can't tell who it belongs to?" (TC13/TC2 identity gap) — answer: currently nothing, that's Story 1d, blocked on the open Decision Tracker row.
- "Why are Story 2 and Story 3 split instead of one Ops Portal screen?" — answer: design gate, not a real functional split; Story 2's two sections are ready, the other four aren't.
- "If nobody's receiving cases yet, why build Story 4 at all this sprint?" — answer: 3 of its 4 routing branches don't depend on the receiving team and are buildable now; only the 4th branch is genuinely blocked.
- "Is TC7 actually resolved or not?" — answer: re-opened as of Section 12, already pulled from Story 1b's priority list, don't treat it as settled.

> **Self-check before closing:** Every AC reviewed for mechanism-language — one catch (Story 4). Rule conflicts checked across stories in the same story family — one catch (Story 3/4 sequencing). Both are named above, not waiting to surface in the room.
