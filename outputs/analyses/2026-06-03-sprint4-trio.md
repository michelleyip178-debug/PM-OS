---
date: 2026-06-03
type: sprint-analysis
lens: PM + Engineer + Designer
sprint: Sprint 4 (16–27 Jun) — forward-looking prep, driven by live Sprint 3 carry-over
source: live Jira pull 2026-06-03 (Pathfinder S3 / Sprint 34617) + sprint-allocation.md (re-based 2026-06-03) + S3 FE capacity analysis + open-items/risks
---

# Sprint 4 Trio Analysis — Finish-the-Spine Catch-Up Sprint

**Headline:** Sprint 4 is a recovery sprint disguised as a build sprint. All three lenses converge on the same uncomfortable truth: **the S4 plan is honest about *what* carries (Stream 0) but optimistic about *capacity and gates*.** The spine the whole plan rests on (apply OTEP-319) is unassigned and in Backlog at S3 Day 2, the two external clocks that gate Streams A and B (POCDEX, WOG AD/OTEP-350) are not actually running, and the C@G + auth UX that fills S4's frontend has never been reviewed as a journey. The plan is the right *shape*. The risk is that S4 inherits not just S3's tickets but S3's unmade decisions.

This is prep, not a review of active work. The job is to get S4 groomable.

---

## Sprint Health Pass (the manager hat)

**Live S3 composition (49 issues, 2026-06-03 Day 2):**

| Status | Count | Note |
|--------|-------|------|
| Done | 4 | All BE/data foundation (OTEP-193, 288, 296, 313). Zero FE, zero goal-spine done. |
| In Progress | 6 | OTEP-380 (BE filter), 369 (login FE), 85 (cards), 362 (closed-opp BE), 322 (Playwright), 276 (design-system spike) |
| QA | 12 | The S2 carry tail — listing/detail/states/auth-rotation. 7 are FE (Thomas). |
| Backlog | 27 | Includes the entire goal spine: 319 apply, 86/317 filter, 192 ingest, all C@G, all auth UI |

**What this means for S4 intake:** the realistic S4 carry-over is not "a few stories that slip." It is the **majority of the sprint-goal spine plus the entire C@G and auth-UI surface**, because none of it has started and one FE dev can't clear a 12-deep QA tail and a 12-deep FE backlog in 8 days. Stream 0 in the plan is correctly scoped. The error would be treating Streams A/B as parallel-startable.

**Carry-over the plan acknowledges well:** Stream 0 names the C@G stream, auth UI, and ingestion polish. Good.

**Carry-over the plan under-weights:** the **12-ticket QA tail** itself. The S4 plan lists feature carry-over but not the QA verification load. Those 12 QA tickets need Thomas (7 FE) and Léo (BE) time *in S4* before the new full-stack dev's velocity is even net-positive — you don't get 1.5 FE from day 1, you get 1.5 FE minus whatever onboarding + QA-drain the existing devs are doing.

**Owner + estimate gaps (goal-critical, live):**

- **Unassigned on live board:** OTEP-319 (apply — the keystone), OTEP-85 (cards, In Progress but no owner), OTEP-86/317 (filters), OTEP-192 (ingestion — no live data without it), OTEP-87 (C@G detail), 363 (closed-opp UI), and C@G sub-tasks 374/377/378/379.
- **Has an owner but no movement:** OTEP-350 (WOG AD onboarding — Fabian, Backlog). This is the long-lead external clock and it is sitting still.
- **Unpointed / un-contracted:** OTEP-130 (full FormSG webhook), OTEP-127 (ringfencing) — both carry undefined integration contracts (see Engineer lens).

**Dependency order (the build chain):**

```
data ─────────────► API ──────────────► UI ──────────────► flow
OTEP-192 ingest     OTEP-374 source/    OTEP-375 badge      OTEP-319 apply
OTEP-348 scheduler  agency fields       OTEP-378 C@G map    OTEP-130 full apply
POCDEX 352/203/271  OTEP-377 C@G payload OTEP-87 detail     OTEP-127 ringfence
WOG AD (OTEP-350)   OTEP-71 login        OTEP-305/368/370   WOG-06 first-login
```

**Inverted build order — the structural finding:** OTEP-369 (login FE) and OTEP-362 (closed-opp BE) are **In Progress**, while their enabling foundations are in Backlog: login UI is in flight while WOG AD onboarding (OTEP-350) hasn't started, and the apply keystone (OTEP-319) that the closed-opp check exists to protect is still Backlog. FE leaf work is moving ahead of the data/auth foundations it sits on. That's leaf-first, and it's exactly how you generate S4 rework.

**Capacity / single-threaded paths:**

- **FE:** Thomas, single-threaded across ~20 FE stories. S4 adds ~0.5 of the new full-stack dev at an even split → ~1.5 FE. Still the binding constraint.
- **BE:** Léo single-threaded on the data path (ingestion, filter BE, detail BE, plus the Azure AD mock OTEP-351). Léo is a quieter SPOF than Thomas but a real one — ingestion, C@G payload, and ringfencing all route through him.
- **POCDEX/infra:** Pow Hwee single-threaded on POCDEX (303, 332, 352) *and* owns the Daryll relationship that gates it.

---

## 🎯 Product Manager — are we building the right outcome?

1. **Apply-first is the correct S4 keystone, and the plan already knows it — but the call hasn't been *made* in S3.** The North Star is application completion rate. OTEP-319 (basic FormSG redirect) closes the end-to-end journey; filters without apply is a dead end. The S4 plan says "recommend apply-first in S3 to avoid this" — but on the live board OTEP-319 is **Backlog, unassigned**, and OTEP-380 (filter BE) is **In Progress**. The queue is quietly choosing filters-first right now. If that isn't reversed this week, S4 opens with the keystone still undone. This is the single highest-leverage PM action.

2. **Stream B is a strategic bet defaulting in, not a product call.** The plan gates Stream B (OTEP-71/110/127, WOG-06) on "OTEP-350 onboarding complete by ~16 Jun." But OTEP-350 is Backlog with no movement, the risks doc itself says auth in **S5 is the working assumption**, and open-item #26 says onboarding *steps* aren't even mapped with Fabian yet. Planning Stream B into S4 as "best case" is fine as a label — but it should not consume any grooming/design oxygen until OTEP-350 shows a real start. **Recommend: pull Stream B out of S4 grooming entirely; carry it as a watch-item, not a stream.**

3. **OTEP-87's competency section is being treated as settled when it isn't.** Open-item #18 is explicit: BO Working Level (2 Jun) surfaced **no SSOT for competencies**, the consumer-vs-system-of-record fork is open, and OTG→bank mapping is unconfirmed. The S4 plan carries OTEP-87 "includes competency section" as scope. We'd be building a UI section against unsettled data. **Recommend: split OTEP-87 — ship C@G detail without the competency section in S4; gate the competency block on #18 resolving.** This also de-risks the designer's coherence problem (below).

4. **Does every S4 story buy down launch risk? Stream 0 yes; Stream A partially; Stream B no.** Stream A's OTEP-202 (POCDEX seed) and instrumentation buy down real risk (ringfencing validation + the metrics that prove the North Star). But OTEP-130 (full FormSG webhook) is only valuable *after* OTEP-319 lands — sequencing it as "new S4 work" risks building Phase 2 apply before Phase 1 apply exists. **Instrumentation is the quiet must-have:** without `click_to_formsg` + `oppr_list_view`, we ship the apply flow and can't measure the one metric the whole programme is judged on.

5. **The plan's three named PM decisions — validation:** (1) *Force apply-first in S3* — **endorse strongly**, it's not yet reflected on the board, act this week. (2) *Weight the new S4 dev toward FE* — **endorse**, the constraint is provably FE (20 FE stories, one dev); an even split wastes the relief where it's needed. (3) *Chase OTEP-350* — **endorse the intent, challenge the framing:** chasing OTEP-350 the ticket isn't enough; the real chase is open-item #26 (map onboarding steps with Fabian) — the ticket can't progress until the *process* is mapped, and that's a Michelle→Fabian action, not an engineering assignment.

---

## 🔧 Tech Lead / Engineer — is it buildable, in what order, where does it break?

1. **The dependency chain is leaf-first where it matters.** OTEP-130 (Stream A) is explicitly "depends on OTEP-319 (S3) being done" — and 319 is Backlog/unassigned. Scheduling 130 as new S4 work means starting Phase-2 apply before Phase-1 apply's contract is proven. Same pattern with login: OTEP-369 (login redirect FE) is In Progress against a Keycloak stub (OTEP-190), while real WOG AD (OTEP-350) hasn't started — **this FE is being built against a mock and will need rework when real WOG AD lands.** OTEP-351 (Azure AD mock, Léo, Backlog) confirms the team knows there's no real auth env; building login UI now guarantees a second pass.

2. **Two stories are un-estimable until contracts exist — flag both as "13 = unknown."** OTEP-130 has no defined FormSG webhook callback contract (open: payload shape, retry/idempotency, confirmation trigger). OTEP-127 (ringfencing) has no defined POCDEX query contract *and* a broken dependency chain (below). Neither should be pointed at grooming as a normal story — they need a contract/spike first or they'll be sized as guesses.

3. **The POCDEX gate for Stream A/B is not actually closed.** The plan flags it, but live state is worse than "confirm 271/203 are done": **271 and 203 are not on the S3 board at all.** What *is* on the live board is OTEP-352 (load POCDEX prod code table, Pow Hwee, Backlog), 303 (field check, QA), 332 (shared ref repo, QA). So ringfencing (OTEP-127) depends on a POCDEX plumbing chain that is partly off-board and partly unstarted, and on OTEP-202 (seed) which is S4-new and unassigned. Plus open-item #31: Daryll's team (POCDEX support) hasn't even confirmed a planning date, and Imelda's squad is competing for them. **Ringfencing is not buildable in S4 on current evidence.**

4. **Spikes are positioned to de-risk too late.** OTEP-358 (nil-date handling) and OTEP-349 (competency-match integration) sit in S3 Backlog. If they don't run *before* S4 planning, then S4 ingestion-correctness (348) and any competency scope are planned blind. Open-item #35 timeboxes 358 at 2 days — run it this week or S4 ingestion polish inherits a fragile hardcoded nil-date fix.

5. **Serialisation risk on Léo (the quiet SPOF).** Ingestion (192/348), filter BE (380), C@G payload (374/377), detail BE (334), the Azure AD mock (351), *and* ringfencing BE all route through one BE dev. The new full-stack dev's BE half helps here — but only if explicitly assigned to unblock Léo's queue rather than starting net-new. **Recommend the new dev's BE time goes to the C@G API chain (374/377/378) so the C@G UI isn't FE-blocked-on-BE in S4.**

6. **CI/QA infra readiness for the carry tail.** OTEP-322 (Playwright E2E) is *still In Progress*. The 12-ticket QA tail carrying into S4 needs E2E coverage to verify efficiently. If Playwright doesn't land, S4 QA is manual and slower than the plan assumes — directly eroding the 1.5-FE relief.

---

## 🎨 Designer — is the experience coherent, and is it actually designed?

1. **The end-to-end journey has never been reviewed as a journey.** S3's design lock (Wed 3 Jun) locks individual states. But the S4 surface is the first time **listing → filter → detail → apply → (C@G deep-link out) → (login)** all exist together. No artifact reviews that full path. The riskiest moments are the *handoffs*, and they're exactly the ones not yet designed: the leave-the-product moments (FormSG redirect in 319/130, C@G deep-link in 89) and the come-back moment (post-apply confirmation, which lives in S5's US-10 but whose *entry* is built in S4).

2. **Two data sources in one list is an unsolved coherence problem.** OTEP-88 puts Careers@Gov opportunities in the same listing as OTG. OTEP-375 adds a "C@G badge" to the card. But there's no spec for how a C@G card and an OTG card differ in affordance — OTG cards lead to an in-product apply (319), C@G cards lead *off-product* (deep-link, 89). **Same list, two fundamentally different click outcomes, no designed differentiation.** An officer clicking expecting in-product apply and landing on Careers@Gov is the highest-friction UX moment in the MVP, and it's specced as a badge.

3. **The competency section is being designed against data that doesn't exist.** OTEP-87's competency block (see PM lens #3 and open-item #18) has no confirmed schema, no SSOT, no OTG→bank mapping. Designing this section now means designing against a placeholder that will change. **Recommend: design OTEP-87 detail *without* the competency block for S4; spec the competency section only after #18 resolves.** Designing it twice is the cost of designing it now.

4. **Auth UX is being built against a mock, and the error states are the unspecced part.** OTEP-305/368/370 (logout, session-expiry redirect, provider logout) are FE-bound and carrying to S4. The happy path (login → session) is straightforward. The designed-or-hand-waved question is the *failure* surface: OTEP-110 (login fail / clear error) has a **known Jira-AC vs design-spec mismatch (open-item #32)**. So the one auth story whose entire value is the error experience has conflicting requirements. Building auth UI in S4 against a mock env + a contradicted error spec is double-jeopardy.

5. **Empty/error/partial-load coherence across the carry tail.** OTEP-268/325/326 (empty/error states) are in QA and carrying. As filters (86/317) and C@G (88) land in S4, *new* empty/error states appear (filtered-to-zero, C@G-payload-failed) that the original state designs didn't cover. The "clear filters and reset view" (317) empty state and the "filter returns nothing" state are distinct and only one is likely designed.

---

## 🔺 Where all three lenses AGREE (highest-confidence — do without debate)

| Finding | PM lens lands here because… | Engineer lens lands here because… | Designer lens lands here because… |
|---|---|---|---|
| **Apply-first (OTEP-319) must be forced in S3, not left to the queue** | It's the North Star journey; filters-without-apply is a dead end | OTEP-130 (S4) is blocked on 319; building 130 first inverts the chain | The apply redirect is the riskiest leave-product UX moment and isn't specced — needs to exist before S4 polishes it |
| **OTEP-87 competency section should be cut from S4** | Data SSOT unresolved (#18); building settled-looking UI on open questions | No confirmed schema/mapping → un-buildable, would be a guess | Designing against placeholder data = guaranteed re-design |
| **Stream B (auth/ringfencing) is not S4-ready** | OTEP-350 hasn't started; S5 is the working assumption | POCDEX chain off-board (271/203) + OTEP-127 has no contract; ringfencing un-buildable | Auth error UX (OTEP-110) has an AC-vs-spec mismatch (#32) + built against a mock env |
| **The C@G surface is the real S4 frontend load and it's under-defined** | C@G is mis-framed as "new" — it's groomed-but-undone carry | C@G API chain (374/377/378) serialises on Léo; FE blocked on BE | Two data sources, one list, two click outcomes, no designed differentiation (#2) |

**OTEP-87 is flagged by all three for different reasons** — PM (data unsettled), Engineer (no schema = unbuildable), Designer (re-design risk). That is the strongest possible signal: **split OTEP-87 and cut the competency block from S4 without debate.**

---

## ⚡ Where they CONFLICT (these are Michelle's calls)

1. **Drain the QA tail vs start new outcome.**
   - *Engineer* wants the 12-ticket QA tail + apply (319) cleared first — it's the foundation and it's verifiable.
   - *PM* wants visible new outcome (C@G, the breadth promise) to show BO progress.
   - **Decision (Michelle): drain-then-build.** Recommendation: S4 week 1 = QA tail + 319 apply + filter; week 2 = C@G *detail/listing* (87 ex-competency, 88). Rationale: the QA tail is unverified work already counted as "nearly done" — leaving it festering means S4 ends with the same 90%-done illusion S3 has now.

2. **Weight the new dev toward FE (clear carry) vs spread across FE/BE (unblock Léo's serialised queue).**
   - *Engineer* sees Léo as a quiet SPOF on the C@G API + ingestion chain → wants new dev on BE.
   - *PM/capacity analysis* says the provable constraint is FE (20 stories, one Thomas) → wants new dev on FE.
   - **Decision (Michelle): FE-weighted, with the BE slice aimed at the C@G API chain.** Recommendation: ~70/30 FE/BE, and the 30% BE goes specifically to OTEP-374/377/378 so the C@G *UI* isn't blocked on C@G *BE*. Rationale: FE is the binding constraint, but a small targeted BE assist removes the one dependency that would otherwise idle the FE relief.

3. **Lock C@G card design now vs wait for the deep-link UX decision.**
   - *Designer* can't finalise the C@G card until the "what happens when you click a C@G card" decision is made (in-product preview vs straight deep-link out).
   - *PM/Engineer* want the card built so C@G shows up in the list this sprint.
   - **Decision (Michelle): make the deep-link UX call *before* S4 grooming, then build.** Recommendation: decide the C@G click outcome (recommend: brief in-product C@G detail page = OTEP-87/89, *then* deep-link out with a clear "you're leaving OTEP" affordance) at the S4 design review, not mid-build. Rationale: it's a 30-minute decision that unblocks the badge, the card, and the detail page at once.

---

## 🕳️ Blind spots (what each lens confidently misses)

- **PM misses (Engineer/Designer see):** the QA tail is real, unverified work — the PM lens treats "QA" as nearly-done, but 12 tickets in QA with E2E (Playwright/322) still In Progress means verification capacity is the hidden S4 tax. And the "two data sources, one list" coherence problem is invisible from a roadmap view.
- **Engineer misses (PM/Designer see):** building login UI and C@G against mocks is locally efficient and feels like progress, but it's strategically rework — the PM/Designer see that OTEP-350 (the real auth env) and the deep-link UX decision must precede it, or it's a second pass.
- **Designer misses (PM/Engineer see):** the competency section's *real* blocker isn't visual coherence, it's that there's no data source (#18) and no schema — a beautiful spec is still un-buildable. And the designer can't see that OTEP-130's webhook contract gap makes the post-apply confirmation entry un-buildable regardless of how the screen looks.

---

## Grooming-Ready Output

### ✅ Do without debate (the convergence — assign/start/defer now)

1. **Force apply-first in S3 this week.** Assign OTEP-319 to Thomas; pause filter-FE (381) behind it. (All 3 lenses agree.)
2. **Split OTEP-87** — ship C@G detail *without* the competency block in S4; gate competency on open-item #18.
3. **Pull Stream B out of S4 grooming** — carry OTEP-71/110/127/WOG-06 as watch-items gated on OTEP-350, not as a stream. Working assumption stays S5.
4. **Add instrumentation to Stream A as a must-have, not a maybe** — `oppr_list_view`, `detail_view`, `filter_applied`, `click_to_formsg`. Without it the apply launch can't be measured against the North Star.
5. **Weight the new full-stack dev ~70% FE**, with the 30% BE aimed at the C@G API chain (374/377/378).

### 🤔 Decide (Michelle's calls — recommendation each)

| Decision | Recommendation | One-line rationale |
|---|---|---|
| Drain QA tail vs start new C@G | Drain-then-build: week 1 QA+apply+filter, week 2 C@G detail/listing | Unverified "done" work is the S3-illusion repeating into S4 |
| New dev FE-vs-BE split | 70/30 FE/BE, BE slice on C@G API chain | FE is the provable constraint; small BE assist unblocks the FE relief |
| C@G card click outcome | Decide deep-link UX at S4 design review before build | One decision unblocks badge + card + detail at once |
| OTEP-130 in S4 or S5 | Defer to S5 unless 319 lands clean by ~16 Jun | Phase-2 apply can't precede Phase-1 apply's proven contract |

### 📋 Owner + estimate actions (flag for the team's grooming session)

- **Assign owners now (goal-critical, currently unassigned on live board):** OTEP-319, 85, 86, 192, 317, 87, 363, and C@G sub-tasks 374/377/378/379.
- **Flag as un-estimable until a contract/spike exists ("13 = unknown"):** OTEP-130 (FormSG webhook contract), OTEP-127 (POCDEX query contract + broken dep chain).
- **Run before S4 planning:** OTEP-358 (nil-date, 2-day timebox, #35), OTEP-349 (competency-match spike) — so ingestion/competency scope isn't planned blind.
- **Confirm Playwright (OTEP-322) lands** — it's the verification capacity the 1.5-FE relief assumes.

### 🚫 Defer / not-ready (pull from S4, with blocking reason)

| Story | Blocking reason | Gate to clear |
|---|---|---|
| OTEP-87 competency block | No SSOT / schema / OTG→bank mapping (#18) | Imelda sync confirms method + schema |
| OTEP-127 ringfencing | POCDEX plumbing off-board (271/203) + no seed (202) + Daryll unconfirmed (#31) | POCDEX planning session + 202 assigned + 271/203 verified done |
| OTEP-71/110/WOG-06 (Stream B auth) | WOG AD (OTEP-350) not started; onboarding steps unmapped (#26) | OTEP-350 shows real start; Fabian maps steps |
| OTEP-130 full FormSG apply | Blocked on OTEP-319 (S3) being done + webhook contract undefined | 319 lands + webhook contract specced |

### Dependency gates + who owns clearing each

| Gate | Blocks | Owner to clear | Status (live) |
|---|---|---|---|
| **OTEP-350 (WOG AD onboarding)** | All Stream B auth | Michelle → Fabian (map steps, #26) — *not* an eng assignment | Backlog, owner Fabian, no movement |
| **POCDEX 271/203 + 202 seed** | OTEP-127 ringfencing | Michelle → Daryll planning session (#31); assign 202 | 271/203 off-board; 202 unassigned; Daryll unconfirmed |
| **OTEP-319 → OTEP-130** | Full FormSG apply (Stream A) | Thomas (assign 319 now); Léo/new-dev on 130 only after | 319 Backlog/unassigned |
| **Open-item #18 (competency SSOT)** | OTEP-87 competency block | Michelle → Imelda (schema + method on sync agenda) | Source confirmed; method/schema/timeline TBC |
| **OTEP-358 / 349 spikes** | S4 ingestion + competency scope | Léo / Michelle (run this week, #35) | Both S3 Backlog, not run |

---

## Validation of the three named PM decisions

1. **Force apply-first in S3 — ENDORSE STRONGLY.** Correct and not yet reflected on the live board (319 Backlog, filter-BE In Progress). The queue is choosing filters-first by default. Highest-leverage action this week.

2. **Weight the new S4 dev toward FE — ENDORSE, with refinement.** FE is the provable binding constraint. Refine to ~70/30 with the BE slice on the C@G API chain, so the FE relief isn't idled waiting on C@G BE.

3. **Chase OTEP-350 — ENDORSE INTENT, CHALLENGE FRAMING.** Chasing the *ticket* won't move it; the ticket can't progress until the WOG AD onboarding *process steps* are mapped with Fabian (open-item #26). The real chase is a Michelle→Fabian working session, then the ticket follows. And even cleared, the risks doc working assumption (auth = S5) should hold — treat S4 auth as best-case-only, which is why Stream B comes out of grooming.
