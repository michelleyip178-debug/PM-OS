---
date: 2026-06-04
type: grooming-brief
ceremony: Backlog Grooming — Sprint 4 (16–27 Jun)
facilitator: Rama
content-lead: Michelle
source: live Jira ticket files (Sprint-34617 folder) + sprint-status.md + 2026-06-03-sprint4-trio.md + 2026-06-03-sprint4-grooming-agenda.md
---

# Grooming Brief — Backlog Grooming, Sprint 4

**Rama facilitates. You lead content.** This brief is the line-level layer under the [Sprint 4 grooming agenda](2026-06-03-sprint4-grooming-agenda.md): per-story readiness, the AC problems that will get caught in the room, and ready answers for the questions Pow Hwee asks.

One thing to fix before you walk in: **OTEP-87's AC still says C@G "triggers the FormSG redirect."** Pow Hwee has flagged this twice in comments. If it's not fixed, he catches it a third time in the room. Details in Risk Areas below.

---

## Sprint Goal (Sprint 4)

No dedicated S4 goal is set yet — S4 is a **catch-up sprint** to finish the S3 spine. Working framing from the trio: *"Finish the listing → filter → detail → apply spine and land the Careers@Gov surface, powered by live ingested data."* Bring this as the proposed goal; it ties the carry-over to one outcome.

---

## Readiness Scorecard

| Story | Title | Story Format | AC Written | AC Language | Design | Deps | Open Items | Ready? |
|---|---|---|---|---|---|---|---|---|
| **OTEP-319** | Apply via FormSG — basic redirect | ✅ | ✅ | ✅ observable | ✅ (S3 lock) | ⚠️ needs 87 CTA | ⚠️ tracking-param Q open | ⚠️ resolve 1 Q |
| **OTEP-86** | Filter by type | ✅ | ✅ | ✅ observable | ✅ | ⚠️ 380 BE in prog | ✅ | ✅ |
| **OTEP-317** | Clear filters / reset | ✅ | ✅ | ✅ observable | ✅ | ⚠️ on 86 | ✅ | ✅ |
| **OTEP-88** | C@G in listings | ✅ | ⚠️ thin | ✅ observable | ⚠️ badge only | ⚠️ 374 BE | ⚠️ PH: "make it the listing page" | ⚠️ rescope |
| **OTEP-87** | C@G detail | ✅ | ⚠️ conflict | ❌ FormSG conflict | ⚠️ no competency | ⚠️ 377/378 | ❌ PH flagged ×2 | ❌ fix first |
| **OTEP-89** | C@G deep-link | ✅ | ✅ | ⚠️ 1 mechanism AC | ⚠️ leave-product UX | ⚠️ on 87 | ✅ | ⚠️ minor |
| **OTEP-305** | Login + Logout | ✅ | ⚠️ login thin | ✅ observable | ⚠️ against mock | ❌ on 350 | ⚠️ PH: login underspecced | ⚠️ |
| **OTEP-368** | Session-expiry redirect | ⚠️ subtask | ❌ none | — | ⚠️ | ⚠️ | ❌ no desc | ❌ |
| **OTEP-369** | Custom login page | ⚠️ subtask | ❌ none | — | ⚠️ mock | ❌ on 350 | ❌ no desc, In Prog | ❌ |
| **OTEP-370** | Provider logout redirect | ⚠️ subtask | ❌ none | — | ⚠️ | ⚠️ | ❌ no desc | ❌ |
| **OTEP-348** | Ingestion scheduler/obs | ✅ (BE) | ⚠️ TBC-gated | ⚠️ untestable | n/a | ⚠️ on 192 | ❌ PH: sharpen + how to test | ❌ sharpen first |
| **OTEP-192** | Recurring ingestion job | ✅ (BE) | ✅ | ✅ | n/a | ✅ | ⚠️ cadence TBC; parse errors (Léo) | ⚠️ |
| **OTEP-130** | Full FormSG apply (webhook) | ✅ | ⚠️ | ❌ heavy mechanism | ❌ confirmation UX | ❌ on 319 | ❌ no webhook contract | ❌ not ready |
| **OTEP-374** | Expose source/agency fields (API) | n/a eng-task | ❌ none | — | n/a | — | — | ⚠️ size only |
| **OTEP-377** | Fetch C@G detail payload (API) | n/a eng-task | ❌ none | — | n/a | — | — | ⚠️ size only |
| **OTEP-378** | Map C@G payload to UI | n/a eng-task | ❌ none | — | n/a | ⚠️ on 377 | — | ⚠️ size only |

Scoring: ✅ confirmed · ⚠️ incomplete · ❌ missing

> 374/377/378 are engineering subtasks — no story-format AC expected. They size in the room; flag only that **C@G FE is blocked on C@G BE** (Léo serialised). Sequence BE-first.

---

## Grooming Order (recommended)

**Block 1 — Sprint-ready, size fast (≈10 min):**
1. **OTEP-86** (filter by type) — clean, BE already In Progress.
2. **OTEP-317** (clear filters) — clean, small, pairs with 86.

**Block 2 — Spine, one open question each (≈10 min):**
3. **OTEP-319** (apply redirect) — *resolve the tracking-param question live* (see Pow Hwee section). This is the keystone; if it didn't land in S3 it's the #1 S4 item.

**Block 3 — C@G surface, the real S4 load and the under-defined part (≈20 min):**
4. **OTEP-88** (C@G listing) — rescope to "actual C@G listing page" per Pow Hwee, not just a badge.
5. **OTEP-87** (C@G detail) — **fix the FormSG/deep-link AC conflict before sizing.** Competency block cut (open #18).
6. **OTEP-89** (C@G deep-link) — rewrite the one mechanism AC, confirm leave-product UX.

**Block 4 — Ingestion (BE, ≈10 min):**
7. **OTEP-192 + OTEP-348** — confirm cadence with Léo/Thomas; note the parse-error finding (72/~200 rows).

**Do NOT groom (state up front):** OTEP-130 (no webhook contract — defer to S5), all Stream B auth (OTEP-71/110/305/368/369/370 gated on OTEP-350 onboarding).

---

## Open Items — Assign an Owner in the Session

| Open Item | Suggested Owner | Needed By |
|---|---|---|
| OTEP-319 tracking-param question (do we append opp ID to FormSG URL?) | Léo confirm + Michelle decide | Before S4 build |
| OTEP-87 AC rewrite — remove FormSG, point to C@G deep-link (OTEP-89) | Michelle (today, in Jira) | Before sizing |
| OTEP-88 rescope to full C@G listing page | Michelle | This session |
| Ingestion cadence (192/348) — how often does the job run? | Léo + Thomas | This session |
| OTEP-192 parse failures (72/~200 rows) — is this a blocker for live data? | Léo | S3, tracked |
| C@G card vs OTG card click-outcome differentiation (design) | Amber | S4 design review |
| OTEP-350 WOG AD onboarding steps (gates all auth) | Michelle → Fabian (#26) | Watch-item |

---

## R1 Deflection List

Ready responses for out-of-scope topics that will come up:

- **"Can we add C@G as a filter option?"** (Pow Hwee already suggested this on OTEP-86) → "Logging as a Sprint 4+ ticket once C@G listings are live — good catch, it pairs with OTEP-88."
- **"Should the apply flow pre-fill the FormSG form?"** → "Dropped from MVP — Squad Sync 2026-05-26, open item #14. R1."
- **"What about competency matching on the detail page?"** → "Cut from S4 — no SSOT confirmed yet (open #18, Imelda's squad). Detail ships without it; competency block gates on the schema."
- **"Can officers save opportunities for later?"** → "R1 — not in MVP scope."
- **"Supervisor endorsement on apply?"** → "UI copy only for MVP, no backend. R1."
- **"Webhook / submission confirmation email on apply?"** → "That's OTEP-130, Phase 2 apply. Blocked on OTEP-319 landing clean and on a defined webhook contract — not grooming it today."
- **"SJR apply flow?"** → "No apply action in MVP. Deferred — all apply eventually routes through OTEP, but not this release."

---

## Pow Hwee Will Probably Ask...

Pre-empted so you're not caught off guard. He catches **(1) AC rule conflicts, (2) mechanism-language, (3) tickets that should be folded or reframed** — fix these here, not in the room.

**OTEP-319 — the tracking-param question (he already flagged it):**
> *"Did we resolve whether the redirect appends OTEP tracking params? You can't size this until that's settled — appending params could break FormSG submission."*
- **Your answer:** Recommend **no params on the URL** for MVP — capture the `click_to_formsg` event OTEP-side at the moment of redirect instead, so we get the North Star metric without risking the FormSG submission. Confirm with Léo it's a clean event-capture, then it's groomable.

**OTEP-87 — the AC conflict he's flagged twice:**
> *"The AC still says the Apply CTA triggers the FormSG redirect for C@G. C@G should deep-link to Careers@Gov (OTEP-89), not FormSG. Which is it?"*
- **Your answer:** "Fixed — C@G detail shows one CTA, 'Apply via Careers@Gov,' that deep-links out (OTEP-89). FormSG is OTG-only (OTEP-319). I've split the detail behaviour by source." **Do this rewrite in Jira before the session** so he sees it's already done.

**OTEP-88 — reframe he already asked for:**
> *"Is this the actual C@G listing page, or just a badge that differentiates the flow?"*
- **Your answer:** "Rescoping it to the C@G listing page — the badge (OTEP-375) is one AC within it, and the data dependency is OTEP-374 exposing source/agency fields. Noting the dependency so it's not blocked at build."

**OTEP-89 — the one mechanism AC:**
> *"'OTEP captures a click-to-CG event at the point of redirect' — that's describing the system, not the officer."*
- **Your answer:** Already rewritten (see below). The observable AC is "the officer reaches the right Careers@Gov opportunity in a new tab"; the event-capture is an engineering note, not an AC.

**OTEP-192 / 348 — the cadence and the parse failures (he's asked to sharpen 348 + how to test):**
> *"What's the ingestion cadence? And Léo flagged 72 of ~200 rows fail to parse — is that a data problem or a transform problem?"*
- **Your answer:** Cadence is TBC by design — bring it to a decision this session (recommend daily, matching the OTG export). On parse: it's the OTEP-358 nil-date spike territory — flag it as the reason the spike needs to run before S4 ingestion is sized clean.
- **For 348 specifically:** bring the sharpened ACs + test plan below (**[OTEP-348 — Sharpen with Pow Hwee](#otep-348--sharpen-with-pow-hwee-ingestion-scheduler--observability)**). The bad-row test uses Léo's real 72/200 failing dataset, which answers his data-vs-transform question directly.

**OTEP-305 / 369 — login underspecced (his comment):**
> *"Login is underspecified — what happens when WOG AD auth fails? And doesn't this depend on OTEP-350?"*
- **Your answer:** "Correct on both — that's why the whole auth set is **out of S4 grooming**. It's gated on OTEP-350 onboarding, which isn't started. S5 working assumption. OTEP-369 is In Progress against a Keycloak mock and will need a second pass when real WOG AD lands."

---

## Mechanism-Language Fixes (apply before grooming)

**OTEP-89 — one AC:**
- ❌ "OTEP captures a 'click-to-CG' event at the point of redirect."
- ✅ Move to engineering notes. Officer-facing AC: *"Clicking 'Apply via Careers@Gov' opens the correct opportunity on Careers@Gov in a new tab."* (Instrumentation tracked separately as a must-have metric.)

**OTEP-130 — heavy mechanism throughout (the reason to defer, not just fix):**
- ❌ "A webhook is set up between FormSG and OTEP..."
- ❌ "On receiving webhook confirmation, OTEP records the submission event against the officer and opportunity ID."
- These are system-of-record statements with **no defined webhook contract** (payload shape, retry, idempotency). Don't rewrite-and-size — **defer to S5.** Size as "13 = unknown until contract exists." This is the cleanest "fold/defer" call to make before Pow Hwee makes it for you.

**OTEP-87 — rule conflict (not mechanism, but same fix-first urgency):**
- Two ACs define different apply behaviour for C@G: one says FormSG redirect, the scope says C@G deep-link. Resolve to deep-link-only for C@G before the session.

---

## OTEP-348 — Sharpen with Pow Hwee (ingestion scheduler & observability)

> Pow Hwee commented that this needs sharpening **together, including how to test.** He's right — every AC is gated on a TBC, and you can't write a test for a TBC. Bring this draft as positions; let Léo/Pow Hwee confirm the three numbers (cadence, threshold, channel). *Paste his exact comment over this note once synced — the cached ticket file is stale and doesn't carry it yet.*

**Why it's not groomable as written:** "cadence TBC," "threshold TBC," and "alerts" (undefined) make three of four ACs untestable. The fix is to turn each TBC into a proposed decision and pair every AC with an observable test.

**Sharpened ACs (paste into Jira):**

1. The ingestion job runs automatically on a **daily schedule at [time — propose 6am SGT]**, no manual trigger.
2. Every run writes a **run-summary record**: timestamp, records read / inserted / updated / skipped / errored, and run status (success / partial / failed).
3. A run with invalid rows **completes as partial** — bad rows skipped and listed, good rows still loaded, run does not abort.
4. After **[N — propose 3] consecutive failed runs**, an alert fires to **[channel — propose Teams ops]** naming the job and the failure count.
5. The run summary is **retrievable by an engineer after the run** (queryable table or log location, not console-only).

**How to test (the part he asked for):**

| AC | Test | Pass bar |
|---|---|---|
| 1 schedule | Deploy, let the scheduled window pass | A run row exists at the scheduled time, no manual trigger |
| 2 summary | Run against the ~200-row OTG export | Counts reconcile against the file (read = total; inserted/updated/skipped add up) |
| 3 bad-row resilience | Feed the **"00/01/1900" nil-date rows** (the 72/200 Léo flagged) | Run = partial, bad rows in skip list, good rows loaded, no abort |
| 4 failure alert | Point the job at an unreachable source 3× | Alert fires after the 3rd run, names job + count |
| 5 retrievable log | Query the summary location as an engineer post-run | Summary returned without redeploy or console access |

**The strong move:** AC 3's test isn't hypothetical — it's the **real failing dataset** (Léo's 72-of-200 "00/01/1900" rows). Naming it ties OTEP-348 to the OTEP-358 nil-date spike: 358 fixes the parse, 348 proves the pipeline survives a bad row. Bring them as a pair.

**Three calls to land in the session (engineering's to confirm):** daily cadence + time · 3-failure alert threshold · alert channel. They're TBCs because they're real decisions, not because they're vague — surface them as decisions-to-make, not gaps.

---

> **Self-check (done):** Every AC reviewed for mechanism-language — flagged OTEP-89 (one AC) and OTEP-130 (pervasive). Conflicting rules checked — found OTEP-87 (FormSG vs deep-link for the same C@G state), already on Pow Hwee's radar. Both are fixed-before-room actions above, not discoveries for the room.

---

*Companion docs: [Sprint 4 grooming agenda](2026-06-03-sprint4-grooming-agenda.md) (intake + PM decisions) · [Sprint 4 trio analysis](2026-06-03-sprint4-trio.md) (the why behind the cuts).*
