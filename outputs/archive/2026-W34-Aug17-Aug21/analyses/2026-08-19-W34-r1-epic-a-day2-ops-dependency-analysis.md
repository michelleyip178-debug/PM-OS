# R1 Epic A (Opportunity Creation) — Is It Blocked by "Day 2 Ops," and On What Exactly?

**Date:** 2026-08-19

**Owner:** Michelle YIP

**Status:** Working analysis, not a decision doc. Thread 4 (below) is now owned by the design team's discovery (Liting) — this doc's open questions are their brief, not a separate action for Michelle.

**Related:** [R1 Epic One-Pager](../prds/2026-08-03-W32-r1-epic-one-pager.md), [Squad Sync notes 2026-08-18](../meeting-notes/2026-08-18-W34-otep-squad-sync.md), [Competency recalculation decision doc](../decisions/2026-08-18-W34-competency-recalculation-on-profile-change.md)

---

## The trigger

If agencies can't fully retire their legacy posting tool, HR ends up double-posting — and prioritising Epic A (Opportunity Creation) in R1 becomes wasted work. The instinct was to blame "Day 2 ops" (officer lifecycle data) and pause Epic A until that resolves.

**On working through it: "Day 2 ops" turned out to be a placeholder for four separate uncertainties, not one named blocker.** This doc separates them out so any pause has a real exit condition.

---

## Part 1: What Epic A actually depends on, per the PRD

Epic A's scope (R1 Epic One-Pager, v13): HR authors a posting natively in CareerCompass; saved as an OTEP-native record; publish/edit/close lifecycle.

**Stated blocker:** agency-admin auth path — can HR staff even log in — owned by Pow Hwee/Fabian.

**Not stated as a blocker anywhere:** officer competency sync, POCDEX/CMM/UHDP data flow, or Epic E (Competency Sync).

**Conclusion:** on paper, Epic A doesn't depend on officer data syncing correctly. A job posting existing in CC's database doesn't require an officer's competency profile to be accurate — these are two different data flows.

---

## Part 2: Where the real dependency lives — adoption, not data

The actual argument is about **adoption**, not technical dependency: *if agencies can't fully retire their legacy posting tool, HR won't sustainably use Epic A, because posting twice is worse than posting once in the familiar place.*

"Day 2 ops" was reached for as the reason, but it's really four separate threads:

| # | Thread | Tracked where | Blocks agency cutover? |
|---|---|---|---|
| 1 | Officer competency sync — does the list stay current on job/grade change | Squad Sync OQ#1, unresolved | Unclear — about officer profiles, not job postings |
| 2 | CMM target architecture — competency IDs moving POCDEX → UHDP | New, untracked in OTEP | Unclear — same as above |
| 3 | Epic E (R1) — read-only vs. read+write-back officer sync | R1 PRD Decision Tracker, unresolved | No link found — feeds Epic B, not Epic A |
| 4 | Whatever actually keeps agencies on their legacy posting tool | **Not tracked anywhere** | **This is the one that matters — and it's undefined** |

**Finding:** threads 1–3 are officer/competency data problems, not demonstrated to affect posting-tool adoption. Thread 4 — the real reason agencies might stay on their old system — hasn't been named by anyone. "Day 2 ops" conflates the two.

---

## Part 3: Does this cascade to Epic B and C?

| Epic | Actual dependency | Depends on Epic A? |
|---|---|---|
| **B — Apply** | Competency SSOT contract (#18/#41); a posting existing in CC's listing — already satisfied via ingestion (OTG/C@G → OTEP) | **No** |
| **C — Status/hiring manager view** | An application existing, via Epic B — not how the posting was created | **No** |

**No cascade.** B and C can proceed against ingested postings regardless of Epic A or Thread 4.

**One flag:** the R1 pilot cohort (WSG, PA, MSF) was chosen partly for heavy posting-tool usage. If Epic A pauses, worth checking whether that pilot rationale still holds for a B+C-only scope.

---

## Part 4: What this means

The highest-leverage move is naming Thread 4 as a discrete, answerable question — candidates to rule in or out:

| # | Candidate reason | Status |
|---|---|---|
| a | Legacy tool feeds a downstream HR/reporting system CC doesn't replicate | Unconfirmed |
| b | An approval/compliance workflow CC doesn't cover | Unconfirmed |
| c | Actually about officer data after all (threads 1–3) | Unconfirmed |
| d | Genuinely unknown — needs a direct agency conversation | Unconfirmed |

**Owner confirmed 2026-08-19:** this sits inside the design team's discovery (Liting), which already covers Creation + Apply + hiring manager view. Li Ting KWAY (GovTech) may help on Thread 2 specifically (CMM/UHDP timing) — not Thread 4, which is an agency-operations question.

**Exit condition:** once Thread 4 is named and answered, Epic A's go/no-go can be made on its own merits — proceed or defer, but with a specific reason instead of an open-ended "waiting on Day 2 ops."

---

## Appendix: Epic B (Apply) — Feasibility / Viability / Desirability

Since Epic B doesn't depend on Epic A, worth its own quick health check.

| Dimension | Verdict | For | Against / unresolved |
|---|---|---|---|
| **Desirability** | Plausible, unproven | - Named pain point: officers "retype everything," then "hear nothing" after redirect<br>- STIP/Gig demand exceeds supply (+49%, up to +884 in Q4) — interest already exists | - **A1 (channel choice):** will officers pick CareerCompass over OTG/C@G habit? Confidence "very low," and can't be validated before R1 build begins<br>- Target lift (15–20% → 40%+) has no behavioral evidence yet |
| **Viability** | Strategically confirmed; pilot-scale only | - Enables the North Star metric directly — no way to measure completion without it<br>- Leadership already approved (March 2026 SteerCo)<br>- Guardrails defined: pause if completion <25% at 4 weeks or bad pre-fill >10% | - Pilot ambition is modest by design (405–540 applications) — validates, doesn't prove at scale<br>- No GTM/comms/training plan yet beyond the pilot |
| **Feasibility** | Improved since May; two gates open | - ATS fork **resolved** (CIO, 3 Jul) — biggest earlier unknown is gone<br>- Form model locked: native in-Compass, not embedded<br>- PRD confirms "enough settled to begin" | - **Competency SSOT contract** (#18/#41) still open — gates pre-fill<br>- **FE capacity:** Thomas is sole dev; May estimate was "medium-low confidence" even before Epic A/C joined the same window, no re-estimate since<br>- Profile-to-form-schema mapping not started |

**Most actionable open item:** the competency SSOT contract — confirmed open, blocking, and has a named owner (Léo/Kingsley).

### Opportunity sizing

| Driver | Value | Source |
|---|---|---|
| Total annual STIP/Gig sign-ups | 7,097 | Opportunities MVP PRD §3 |
| Total annual STIP/Gig vacancies | 4,752 | Opportunities MVP PRD §3 |
| Demand exceeds supply by | +49% | Opportunities MVP PRD §3 |
| R1 pilot population | ~5,400 officers, 6 agencies | R1 Epic One-Pager §5 |
| Current apply-completion rate (est.) | ~15–20% | R1 Epic One-Pager §3 |
| Target apply-completion rate | 40%+ by Mar 2027 | R1 Epic One-Pager §7.2 |
| Target applications (pilot) | 405–540 | R1 Epic One-Pager §3 |

**What this means:** demand is already large and proven — Epic B converts existing demand leaking at the redirect/blank-form/status-black-hole points, it doesn't need to create demand. The 405–540 target roughly doubles completion rate against the pilot's 5,400 officers, not the full 7,097 annual sign-up volume — intentionally pilot-scale, not a market-wide claim.

**Caveat:** the 7,097/4,752 dataset is sign-ups/interest, not confirmed fill rates. Completion rate (what R1 actually instruments) is the more reliable sizing basis going forward.

### TAM / SAM / SOM

| Tier | Definition | Value | Source |
|---|---|---|---|
| **TAM** | All public service officers on legacy OTG, before its Mar 2028 sunset | **~108,000** | `risks.md` |
| **SAM** | Officers with real, recurring STIP/Gig demand | **~11,849 sign-ups/year** *(proxy, not headcount)* | Opportunities MVP PRD §3 |
| **SOM** | R1 pilot cohort, Q1'27 target | **~5,400 officers, 6 agencies** | R1 Epic One-Pager §5 |

**Caveat on SAM:** 7,097 is annual sign-up *events*, not distinct officers — one person can sign up multiple times, so this likely overstates real headcount. No distinct-officer count exists yet; treat SAM as "tens of thousands, well below TAM" until that data exists. Worth flagging to Rama/Pow Hwee as a real gap.

**What this tells you:**
- SOM/TAM ≈ 5% — R1 is a small, deliberate slice of the eventual population, not a platform-wide claim.
- The real ceiling is Mar 2028, not R1 — full reach depends on the R1→R4 rollout staying on schedule, gated by program-level risk, not Epic B's own build.

---

## Discovery brief for the design team (Liting)

1. What specifically keeps an agency's HR team from fully stopping use of their legacy posting tool if Epic A ships? (Thread 4 — currently unanswered)
2. Is this the same uncertainty as the officer-competency-sync question already open with Pow Hwee (Squad Sync OQ#1), or genuinely separate?

## Still Michelle's to track

3. If Epic A pauses, does the pilot-agency rationale (WSG/PA/MSF, chosen for internal-marketplace usage) still hold for a B+C-only scope?
4. Should Epic A's pause (if confirmed) go into the R1 PRD's Decision Tracker as a formal decision with an owner and review date?
