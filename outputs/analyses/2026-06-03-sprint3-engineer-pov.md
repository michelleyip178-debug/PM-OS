---
date: 2026-06-03
type: sprint-analysis
lens: engineering (tech lead / senior dev POV)
source: live Jira S3 pull 2026-06-03 (Pathfinder Sprint 34617, 49 issues)
---

# Sprint 3 — Engineer's POV

**Framing:** not "are we building the right thing" (that's the PM lens) but "is this buildable, in what order, and where does it break." An engineer reading this board sees a sprint that's **sequenced wrong, parallelised poorly, and carrying hidden integration risk** behind a pile of small UI tickets.

---

## 1. The dependency chain is inverted — we're building the roof before the walls

The board lists stories flat. But technically they form a strict chain, and the **foundation stories are still in Backlog while leaf UI stories are being picked up:**

```
OTEP-192 (OTG ingestion: transform + upsert)   ← Backlog, UNASSIGNED
   └─ OTEP-320 (real /opportunities endpoint)   ← QA
        └─ OTEP-85 (cards w/ real OTG data)      ← In Progress
             └─ OTEP-86 / 380 / 381 (filtering)  ← Backlog / In Progress
                  └─ OTEP-319 (apply redirect)   ← Backlog, UNASSIGNED
```

**The problem an engineer sees immediately:** OTEP-85 ("cards with real OTG data") is *In Progress*, but OTEP-192 (the job that produces the real data) is *Backlog and unassigned*. You cannot meaningfully finish or test 85 against real data that isn't being ingested yet. Either 85 is being built against mocks (fine, but then it's not "done" in the goal sense), or it's blocked and the In-Progress status is optimistic.

**Engineer's ask:** assign and start OTEP-192 **today**. It's the root of the entire data path and it's unowned on Day 2. Nothing downstream is truly testable until ingestion produces real rows.

---

## 2. Backend is single-threaded through Léo; one path can't be parallelised

BE/infra ownership: Léo has 320 (QA), 334 (QA), 380 (In Progress). OTEP-192 + 348 (ingestion) are unassigned and almost certainly land on Léo too (he owns the data model and raw-ingest, OTEP-193/313).

So the **critical data path — ingestion → endpoint → filtering BE — is effectively one engineer deep (Léo).** That's a serialisation risk just like the FE one, but quieter because it's spread across "small" tickets. The filtering split (380 BE / 381 FE) is good practice, but 380 still queues behind Léo's QA items.

**Engineer's ask:** the second full-stack dev (S4) should take ingestion-adjacent BE so Léo isn't the sole owner of the live-data path. If they're available even partially before S4, point them at OTEP-348 (scheduler/observability) — it's separable from 192's core transform logic.

---

## 3. Spikes are scheduled in parallel with the work they're supposed to de-risk

Three open spikes, and the timing is backwards:

- **OTEP-289** (filter by functions — C@G/OTG taxonomy) — Backlog. But OTEP-86/318 filtering is *also* in the sprint. You're meant to spike the taxonomy *before* committing the filter implementation, not alongside it.
- **OTEP-349** (competency matching integration with Core) — Backlog. Feeds OTEP-87/367 (competency UI), which are *also* in the sprint. Same inversion.
- **OTEP-358** (nil-date handling for OTG Excel) — Backlog. This is an ingestion robustness spike that should land *inside or before* OTEP-192, not after.

**Engineer's worry:** a spike whose output arrives after the dependent story is half-built is just rework insurance you've already cashed. Either the spikes run first (and some dependent stories move to S4), or the team accepts they're building on unvalidated assumptions.

**Engineer's ask:** run OTEP-358 *as part of* 192 (it's the same code path). Run 289 and 349 early-sprint or pull their dependent stories out.

---

## 4. The OTEP-129 → 362/363 split is clean; the C@G split is half-done

Good: OTEP-129 (open/closed) was split into 362 (BE: don't return closed) + 363 (UI: show closed) — clear seam, BE already In Progress. That's how to slice.

Less good: the C@G stream (87/88/89 + 374/377/378/379) mixes BE and FE sub-tasks but **OTEP-87 still hasn't had its response shape worked out** ("Leo and Thomas to work out the shape" per Pow Hwee's note). From an engineering standpoint that means 87 is a **13 — not an estimate, a flag.** You can't point or commit a detail-page story whose API contract is undefined. The C@G payload tickets (374/377/378) are downstream of a contract that doesn't exist yet.

**Engineer's ask:** OTEP-87 is not ready for the sprint. Do the response-shape design first (a half-day spike, not a story), define the contract, *then* the 374/377/378 sub-tasks become estimable 2s and 3s.

---

## 5. QA tail is a testing-infrastructure problem, not just a queue

12 tickets in QA, and OTEP-322 (Playwright E2E framework) is still *In Progress*. So the entire Listing→Detail journey is sitting in QA **without the E2E harness that would actually verify it** finished. Manual QA on 12 interdependent UI/BE tickets is slow and regression-prone.

**Engineer's worry:** the QA tail won't drain at a predictable rate until 322 lands. Right now "12 in QA" looks like near-done; technically it's near-done *pending a test framework that isn't ready*.

**Engineer's ask:** prioritise OTEP-322 to unblock automated verification of the QA tail. It's leverage — it accelerates 12 tickets, not one.

---

## 6. Auth is being built before the environment exists to test it

OTEP-305/368/369/370 (login/logout/session) are in the sprint. OTEP-350 (Onboard WOG AD) is Backlog, and OTEP-351 (Azure AD *mock* for testing) tells the real story: **there's no WOG AD environment yet, so auth has to be built and tested against a mock.**

**Engineer's read:** building auth UI against a mock is fine for the happy path but guarantees a second pass when the real WOG AD lands (redirect URIs, token claims, session behaviour always differ from mock). So these auth stories are *partial by construction* this sprint — they'll need rework in S4/S5 when OTEP-350 completes.

**Engineer's ask:** scope the S3 auth stories explicitly as "against mock, real-AD pass to follow." Don't let them be marked Done in a way that implies WOG AD integration is finished. And start OTEP-350 now — it's the long external lead time (the mock is a workaround, not the goal).

---

## 7. Story-point estimation arriving this sprint is the right instinct

Pow Hwee introducing Fibonacci pointing is genuinely the most useful process change here. From an engineer's seat it's the tool that exposes everything above: OTEP-87 points as a 13 (undefined contract = flag), the ingestion chain reveals its serialisation, the spikes-before-stories ordering becomes obvious when you can't point a story whose spike hasn't run. **Point the dependency-ordered board, not the flat list** — and the build order falls out of the estimates.

---

## Engineer's bottom line

The sprint isn't unbuildable, but as ordered it will thrash:

1. **Start OTEP-192 today** — root of the data path, unassigned.
2. **OTEP-87 isn't ready** — define the C@G response contract first, then its sub-tasks are real.
3. **Run OTEP-358 inside 192; run 289/349 before their dependent stories** — or move those stories to S4.
4. **Prioritise OTEP-322** — the E2E harness is what actually drains the 12-ticket QA tail.
5. **Scope auth as "mock-only this sprint"** and start OTEP-350's external clock now.
6. **Don't let Léo be the sole owner of the live-data path** — point the S4 dev at ingestion-adjacent BE.

Build order, not ticket count, is the risk. The board is sequenced leaf-first; flip it foundation-first and the sprint settles.
