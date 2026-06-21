---
date: 2026-06-03
type: sprint-analysis
lens: three POVs — PM, Tech Lead/Engineer, Designer
source: live Jira S3 pull 2026-06-03 (Pathfinder Sprint 34617, 49 issues); design-lock day
---

# Sprint 3 Through Three Lenses — PM, Engineer, Designer

Three roles look at the same 49-issue board and worry about different things. The value isn't the three lists — it's **where they agree (act on it), where they conflict (you decide), and the blind spots each has.** Full single-lens write-ups: [PM/backlog review](2026-06-03-pow-hwee-sprint3-backlog-review.md) · [Engineer POV](2026-06-03-sprint3-engineer-pov.md).

---

## 🎯 Product Manager — "are we building the right outcome?"

1. **The sprint is mostly plumbing; the officer's promised outcome (apply, OTEP-319) is unowned and buried.** It's the North Star event (application completion) and it's third in its group, unassigned, unestimated.
2. **Careers@Gov is quietly eating half the net-new scope** — a depth-vs-breadth bet that defaulted in through grooming rather than a product call. Recommend OTG apply *depth* this sprint; C@G carries to S4.
3. **OTEP-87's competency section is an unresolved product question** — the BO meeting (2 Jun) exposed no source-of-truth for competencies. Pull that scope until the SSOT call.
4. **MVP-risk lens:** Oct go-live, Aug freeze. Tech-debt/CI/ADR don't earn slots in a sprint already over capacity.

---

## 🔧 Tech Lead / Engineer — "is it buildable, in what order, where does it break?"

1. **The dependency chain is inverted — leaf-first, not foundation-first.** OTEP-85 (cards w/ real data) is In Progress while OTEP-192 (the ingestion job that *produces* the data) is Backlog + unassigned. Nothing downstream is truly testable. **Start 192 today.**
2. **OTEP-87 has no defined API contract** ("Leo & Thomas to work out the shape") — that's a 13 = flag, not estimate. Its C@G payload sub-tasks (374/377/378) hang off a contract that doesn't exist.
3. **Spikes run parallel to the work they should de-risk** — 289 (taxonomy), 349 (competency), 358 (nil-date) all sit beside their dependent stories. A spike that lands after the story is half-built is pre-paid rework.
4. **QA tail can't drain — the E2E harness (OTEP-322) is still In Progress.** "12 in QA" is really "12 pending a test framework that isn't ready." Prioritise 322; it's leverage on 12 tickets.
5. **Auth is built before its environment exists** (OTEP-351 = Azure AD *mock*). These stories are partial by construction; real-WOG-AD pass follows. Start OTEP-350 (long external lead).
6. **Léo is single-threaded on the live-data path** — quiet serialisation risk across "small" BE tickets.

---

## 🎨 Designer — "is the experience coherent, and is it actually designed?"

> Today is design-lock day — so these are the questions that decide whether "locked" means anything.

1. **The states are well covered, but is the happy path designed end-to-end?** Empty (325), error (326), partial-load (268), closed-opportunity (363) are all ticketed — strong instinct, error states are usually the thing teams forget. But they're scattered across separate tickets. **The risk: each state is designed in isolation and the *journey* (browse → filter → detail → apply) was never reviewed as one flow.** A user doesn't experience tickets; they experience a path.

2. **OTEP-319 (apply) is "basic redirect" — the handoff to FormSG is the scariest UX moment and it's the thinnest-specced.** The user leaves OTEP and lands in a different system's form. Is there a confirmation? Does the back-button return them sanely? What does "you've applied" look like when the actual submission happens in FormSG, outside our walls? "Basic redirect" hides a real design gap: the moment of *leaving the product* is where trust is won or lost, and there's no story for the return/confirmation experience.

3. **C@G vs OTG visual differentiation is under-designed.** OTEP-375 (C@G badge on card) + OTEP-88 (C@G in listings) put two opportunity *sources* in one list. Designer's question: how does an officer know *why* one card behaves differently (deep-links out to C@G) vs another (applies in-OTEP)? A badge isn't enough if the interaction model differs. This is a coherence problem, not a styling one.

4. **The design-system migration (OTEP-252 done, 327 detail-page-on-design-system in QA, 276 spike) means UI is being re-skinned mid-sprint.** Designer's worry: are the *new* stories (filters, apply, C@G) being designed in the locked design system, or against the old components? If 276's spike outcome changes the system, anything designed before it lands is rework.

5. **OTEP-87 competency UI (367) — same flag as PM/Eng, from the UX side:** you can't design "display competencies for this opportunity" when it's unsettled *whether* an opportunity even has competency data. Designing an empty-vs-populated state for data that may not exist is guesswork.

---

## 🔺 Where the three AGREE — act on these, no debate needed

| Convergence | PM reason | Eng reason | Designer reason |
|-------------|-----------|------------|-----------------|
| **Start OTEP-192 / own the data spine today** | It's the officer's outcome | Root of the dependency tree | Can't design real states against fake data |
| **OTEP-87 is not sprint-ready** | Competency = unresolved product Q | No API contract = can't build | Can't design competency UI for maybe-absent data |
| **OTEP-319 (apply) needs to be the spine, properly specced** | It's the North Star event | It's the goal's leaf — must be reachable | The FormSG handoff is the riskiest UX moment |

**These three all point at the same two tickets (192 + 319) and the same deferral (87's competency scope).** That's your highest-confidence grooming action — three independent lenses converging is as strong a signal as you get.

---

## ⚡ Where they CONFLICT — your call as PM

1. **C@G: breadth (PM says defer) vs the team has already groomed 8 C@G tickets (Eng/effort sunk) vs designer wants the OTG/C@G coherence solved before adding more.** → You decide: I'd hold C@G depth, ship OTG apply clean. The designer's coherence concern *reinforces* deferring — don't add a second source until the single-source experience is solid.

2. **QA tail priority (Eng: drain it first, it's blocking) vs new outcome (PM: apply is what matters) vs polish (Designer: states must be right before lock).** → These compete for the same FE dev (Thomas). The honest answer: apply-first means the QA tail and some states slip. Name that trade openly rather than pretending all three fit.

3. **Design lock TODAY vs design-system spike (276) still In Progress vs new stories not yet designed.** → Real tension: you can't "lock" a design that's mid-migration with un-designed new surfaces. Lock what's stable (listing/detail in the design system); explicitly *don't* lock filters/apply/C@G yet — flag them as design-pending. A partial honest lock beats a full fake one.

---

## 🕳️ Blind spots — what each lens MISSES

- **PM misses:** build order. The PM review never noticed 85 is being built before its data source exists — that's invisible without the dependency view.
- **Engineer misses:** the *user's* experience of the FormSG handoff and OTG/C@G coherence. "Basic redirect" is technically complete and experientially broken.
- **Designer misses:** the capacity math. The beautiful end-to-end flow still has to be built by one FE dev against an undrained QA tail. Coherence is moot if apply doesn't ship.
- **All three miss (until combined):** that OTEP-87 is flagged by *every* lens for a *different* reason — which is the strongest possible case that it simply shouldn't be in this sprint.

---

## Bottom line for grooming

**Do without debate (all three agree):** own + start OTEP-192 and OTEP-319 today; pull OTEP-87 (at least its competency scope) out of the sprint.

**Decide (you, as PM):** C@G depth-vs-breadth (recommend defer); the apply-first trade that slips QA/states; what "design lock" honestly covers today (lock the stable, flag the pending).

**The convergence is the headline:** three lenses, looking for different things, all land on the same two tickets and the same deferral. Lead grooming with that.
