# LNO Prioritization — Michelle's Overloaded Month (June 2026)

**Date:** 2026-06-02
**Trigger:** Day cleanup flagged Michelle on 8 of 9 action items, with VAPT / CSC SSO / R1 design all clustering June–early Aug.
**Source:** tasks-active.md open items + this session's R1 work. Classified against the strategic spine: **MVP launch (16 Oct) + R1 readiness + the auth chain (WOG AD → CSC SSO)**.

> **The honest headline:** you have ~30 open items and roughly one person's worth of time. This isn't a "work harder" problem — it's a "what gets dropped" problem. Below: the 4-5 Leverage items that actually move R1/MVP, the Neutral items to timebox at B-, and the Overhead to delegate, defer, or kill.

---

## L — Leverage (do these yourself, deeply; they compound)

| Task | Why it's Leverage | Est. | Strategic tie |
|------|-------------------|------|---------------|
| **Feed Adrian the R1 resource ask** (3 builds / 1 FE) | Unblocks the *entire* R1 capacity problem. One conversation that determines whether R1 is deliverable. Highest ROI item on the list. | 1h | R1 delivery |
| **Drive R1 design alignment WITH designers** | Moves R1 from PM-solo to cross-functional — the explicit PM Weekly ask. Without it, R1 discovery stalls. | 3-4h | R1 readiness |
| **Force the ATS fork (C1)** — World A vs B decision | Gates 2 of 3 R1 builds *and* native-vs-ATS creation. Open since 12 May; every week costs build window. | 2-3h (decision doc) | R1 architecture |
| **CSC SSO feasibility deep-dive** | The auth chain is a 6-week dependency on the critical path to Sprint 5. Resolving "why intentional re-login" may relieve major timeline pressure (or confirm a hard blocker). | 2-3h w/ Pow Hwee | MVP auth |
| **WOG Auth success metrics → Adrian** | Committed, overdue, gates Sprint 4 metric instrumentation. Already drafted — just needs to ship. | 0.5h (finish) | MVP measurement |

**Leverage total: ~10-12h.** Note: the R1 capacity work + ATS fork are the two that *create leverage for everything else* — they decide what the team even builds.

---

## N — Neutral (necessary, timebox to B-, don't over-polish)

| Task | Timebox | Note |
|------|---------|------|
| Revert to Clarissa — Malaysian NRIC (due Thu 4 Jun) | 1h | Hard deadline; assess OTG impact, reply. Don't gold-plate. |
| PostHog OKR + metric instrumentation (Rama's call) | Attend, 1h | Rama drives; you define metric defs. Don't own the taxonomy. |
| Update FormSG PRD + OTEP-130 Jira rescope | 1h combined | Mechanical edits — batch them. |
| Sync with Imelda (4 CSC/reference-data asks) | 0.5h | One message, four questions. Async if possible. |
| Schedule POCDEX session with Daryll (before Sprint 4) | 0.25h | Just send the invite. |
| OTEP-87/318 AC alignment + OTEP-128 AC clean | 1h | Grooming prep; async with Amber. |
| Jobelle handover prep (joins 3 Jun) | 1h | Share Phoebe's copy now; Daniel's later. |
| WOG AD onboarding next steps w/ Fabian/Pow Hwee | 0.5h | Coordinate, don't own the technical detail. |

**Neutral total: ~7h.** The trap here is treating any of these as Leverage and over-investing. They're all B- work.

---

## O — Overhead (delegate, defer, automate, or kill)

| Task | Action | Why |
|------|--------|-----|
| ~~Email DDs on PSC (Fri 29 May)~~ | **STALE — verify/kill** | Dated 29 May, "today" deadline 4 days past. Done or moot. |
| Cybersecurity quiz (by 31 Dec) | **Defer** | 7 months out. Not June. |
| Clean up email inbox | **Timebox 15 min or skip** | Classic overhead-that-feels-urgent. |
| Load Adrian's OKR doc into NotebookLM | **Kill** | You confirmed it's likely already `otep-roadmap-okrs-2627.md`. |
| Map dependencies → risks.md / dependency stories | **Delegate to Pow Hwee** | He asked for it; he has the technical map. You review. |
| Create POCDEX Epic + move tickets in Jira | **Delegate / batch** | Jira admin. Batch with other ticket work or hand to whoever grooms. |
| Follow up: session-notes test cases / OTG co-innovation | **Defer** | No hard date; "when opportunity arises" = not now. |
| PIM risk assessment (OTG ops) | **Defer or delegate** | Important but not June-critical; not on the MVP/R1 spine. |
| Loop Diana in / Daryll DQ follow-up | **Batch, 15 min** | Quick admin; do in one sitting. |

**Overhead reclaim: ~4-5h** freed by killing/deferring/delegating these.

---

## Distribution

| | This list (as-is) | After re-sort | Target |
|---|---|---|---|
| Leverage | ~25% (buried under admin) | **~50%** (10-12h) | 40-50% |
| Neutral | ~35% | ~35% (7h) | 30-40% |
| Overhead | ~40% (you're drowning in it) | **~15%** | 10-20% |

**You're currently Overhead-heavy** — the R1/MVP-critical work is buried under Jira admin, stale follow-ups, and "nice to track" items. The re-sort pulls you back to a healthy ~50/35/15.

---

## Capacity reality-check

**Leverage need: ~10-12h.** In a normal week with meetings, you have maybe 12-15h of deep-work time. **It fits — but only if you protect it and actually drop the Overhead.** If you try to do the Neutral + Overhead "to be safe," Leverage gets crowded out (which is exactly what happened — that's why R1 felt solo and the ask was "go cross-functional").

**The one structural fix:** the R1 capacity problem is itself the meta-leverage. Resolving Adrian's resource ask + the ATS fork doesn't just check two boxes — it changes how much of the *rest* of this list is even yours to carry.

---

## Recommended week (this week)

| When | Block | Item |
|------|-------|------|
| **Today/tomorrow AM** | Leverage | Feed Adrian the R1 resource ask (1h) + finish WOG Auth metrics (0.5h) |
| **Wed AM** | Leverage | R1 design alignment with Amber/designers (3h) |
| **Wed/Thu** | Neutral | Clarissa reply (due 4 Jun) + FormSG/OTEP-130 edits — timeboxed |
| **Thu AM** | Leverage | ATS fork decision doc (start) |
| **Before Sprint 5** | Leverage | CSC SSO feasibility w/ Pow Hwee |
| **Friday PM** | Overhead | 30-min batch: Diana loop, Daryll DQ, inbox, kill the NotebookLM task |

---

## The 3 things to drop/delegate this week (be specific)

1. **Delegate to Pow Hwee:** dependency mapping → risks.md + the high-level dependency stories. He asked for them and owns the technical detail. You review, don't author.
2. **Kill:** the NotebookLM OKR-doc load (already exists) + verify-then-close the stale PSC email.
3. **Defer out of June:** Cybersecurity quiz (Dec), PIM risk assessment (not on the MVP/R1 spine), session-notes/OTG-co-innovation follow-ups (no date).

---

*LNO pass 2026-06-02. Classified against MVP-launch + R1 + auth-chain priorities. The meta-point: your overload is real, but ~40% of it is Overhead that can leave your plate this week. Protect the R1 capacity + ATS decisions — they're the leverage that shrinks everything else.*
