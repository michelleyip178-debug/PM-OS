# Discovery Plan — Compass↔OTG Two-Way Sync

**Owner:** Michelle Yip

**Date:** 2026-08-14

**Scope:** How opportunities posted natively in CareerCompass (R1) and opportunities posted on OTG become visible on both platforms — specifically for STIPs, Gigs, SJRs, and secondments.

**Status: Closed 2026-08-14 — Q2 confirmed negative, true blocker resolved same day.** OTG has no API (read or write). This single answer resolves the discovery: 2-way sync as Adrian described it (post once, appears on both platforms automatically) is not buildable against OTG as it exists today. See Resolution section below.

---

## Why This Exists

Adrian raised this first on Wed 12 Aug (UAT standup thread) and again directly today, unanswered both times. It's not a standalone question — it sits directly on top of the R1 Epic A discovery plan (30 Jul), which already flagged that OTG ingests postings via one-directional text-matching (Q2 of that plan). R1 is adding native posting creation *in* CareerCompass for six posting types. Nobody has yet confirmed what happens to a posting created in Compass from OTG's side, or vice versa.

**The literal question Adrian asked:** in the ideal case, does a poster only need to post once (on either platform) and have the opportunity appear on both? Right now that's an assumption baked into R1's pitch, not a confirmed mechanism.

**Why this matters beyond just answering Adrian:** if the honest answer is "no, these become two separate, unreconciled posting stores," that's a material change to what R1 is actually promising agencies and officers — not a technical footnote.

---

## The Four Open Questions

### Q1 — Which system is the source of truth, and does direction matter?

Today, OTG → Compass is one-directional (ingestion only). R1 introduces the reverse direction (Compass → OTG) for the first time. Two sub-questions:

- Does a posting created *in Compass* need to write back to OTG, or does Compass just become a second, independent source alongside OTG?
- If a posting is edited or closed on one side, does the other side need to reflect that change, or is a one-time sync at creation enough?

**Who can answer this:** Pow Hwee (OTG's current architecture/ownership), Rama (Compass-side data model)

### Q2 — Does OTG's API support writing new postings, or only reading them?

The existing OTG ingestion pipeline (per R1 Epic A discovery, Q2) only reads from OTG. Nobody has confirmed whether OTG exposes a write/create endpoint at all. If it doesn't, "2-way sync" isn't a data-modeling question, it's a "does this API exist" question first.

**Who can answer this:** Pow Hwee, Engineering (whoever owns the OTG integration)

### Q3 — How do the six R1 posting types map onto OTG's existing categories, in both directions?

OTG's current text-matching classification (R1 Epic A discovery, Q2) is already unreliable for telling Internal Rotation, Job, and Secondment apart on ingest. A 2-way sync makes this worse, not just repeated: a posting created in Compass with an explicit type needs to map cleanly back to whatever category OTG expects, or the reverse-sync will misclassify on the way out the same way ingestion misclassifies on the way in.

**Who can answer this:** Jobelle (OTG's actual category logic), Léo (feasibility)

### Q4 — What's the conflict-resolution rule if the same posting is edited on both sides?

If write-back exists at all (Q1/Q2), this is the failure mode that needs a rule before it happens in production: officer edits a posting in Compass while an agency HR admin edits the same posting in OTG. Whose edit wins, and does the other side get notified or silently overwritten?

**Who can answer this:** Pow Hwee, Adrian (policy call, not just technical)

---

## How to Run This

| # | Question | Who | Format | When |
|---|---|---|---|---|
| Q1 | Source of truth / direction | Pow Hwee, Rama | 30-min working session | This week |
| Q2 | Does OTG support write/create | Pow Hwee, Engineering | Direct message, not a meeting | This week — send today |
| Q3 | Posting-type mapping both directions | Jobelle, Léo | 30-min working session | This week |
| Q4 | Conflict resolution rule | Pow Hwee, Adrian | 30-min working session | Next week, after Q1/Q2 land |

**Q2 is the true blocker.** If OTG has no write/create endpoint, "2-way sync" as Adrian described it (post once, see it everywhere) isn't buildable as scoped — the answer becomes a scope conversation with Adrian, not an engineering task. Send this ask first, today, since it determines whether Q1/Q3/Q4 are even the right next questions.

**This overlaps R1 Epic A discovery's Q2 (posting-type classification) — don't run as a separate workstream.** Same people (Jobelle, Léo), same underlying ambiguity (OTG's text-matching rules), just viewed from the write-back direction instead of the read direction. Worth looping in whoever owns that thread so the classification rule gets designed once for both directions, not twice.

---

## What "Answered" Looks Like

Ready to reply to Adrian with a real answer once:

1. Confirmed whether OTG supports a write/create API at all (Q2) — this alone may fully answer his question if the answer is no.
2. If yes: source-of-truth model and sync direction are defined (Q1).
3. If yes: posting-type mapping is defined for both directions, reconciled with R1 Epic A's existing classification question (Q3).
4. If yes: conflict-resolution rule exists for simultaneous edits (Q4).

If Q2 comes back "no API exists for writing to OTG," stop there — that's a complete, honest answer to give Adrian this week, and the rest becomes a separate scope/roadmap conversation rather than a technical discovery.

---

## Resolution (2026-08-14)

**OTG has no API.** Not "no write endpoint" — no API at all, read or write. This changes the finding from "write-back isn't supported" to "there is no programmatic integration surface with OTG to build against, in either direction."

**What this means for Adrian's question:**
- True 2-way sync (post once on either platform, appears on both) is not achievable as a technical integration — there's no API for CareerCompass to call.
- The *existing* OTG → Compass ingestion (the one-directional pipeline referenced in R1 Epic A discovery Q2) must be running some other mechanism — file export/import, scheduled scrape, or manual upload rather than a live API call. Worth confirming which, since that's the only integration surface that currently exists and it constrains what any future workaround could look like.
- Q1, Q3, and Q4 (source of truth, posting-type mapping, conflict resolution) are now moot as technical design questions — there's nothing to design a sync mechanism against. They convert into a different, non-technical question: **does R1 proceed with Compass and OTG as two separate, unreconciled posting stores, and if not, what's the workaround?**

**Likely workaround shapes, for the scope conversation with Adrian (not yet decided, needs his input):**
1. **Manual dual-posting** — agency staff post separately on each platform; Compass gains no automation benefit over today, R1's "post once" pitch doesn't hold
2. **One-directional only, reversed from today** — Compass becomes the primary creation surface for the six R1 types, and OTG ingestion (whatever mechanism it uses today) gets pointed at Compass's data instead of the reverse; postings originating on OTG still don't flow to Compass automatically unless the existing ingestion pipeline is reused
3. **Scope R1's "2-way" claim down explicitly** — CareerCompass is the system of record for R1 posting types going forward; OTG is treated as legacy/deprecated for those types rather than kept in sync

**This is now a product/scope decision, not an engineering discovery.** Recommend NOT presenting options 1-3 to Adrian as a menu without more grounding — first confirm what mechanism today's one-directional ingestion actually uses (file/scrape/manual), since that determines which of the three is even feasible as a near-term workaround.

---

## Next Steps

1. ~~Send Q2 today~~ — ✅ Done, answered same day: no API exists.
2. Confirm what mechanism today's OTG → Compass ingestion actually runs on (file export, scrape, manual upload) — this determines which workaround (if any) is realistic. Ask Pow Hwee/Engineering.
3. Reply to Adrian today with the real answer: no API exists, true 2-way sync isn't buildable as he described it, and this is now a scope decision, not an engineering task — needs a short conversation with him on which workaround (if any) R1 should pursue.
4. Once the ingestion-mechanism question (step 2) is answered, bring 2-3 concrete workaround options to Adrian rather than an open-ended "what do you want to do."

---

*Generated: 2026-08-14*
*Related: [R1 Epic A Discovery Plan](2026-07-30-W31-r1-epic-a-discovery-plan.md) (Q2, posting-type classification — same underlying ambiguity, opposite direction); [2026-08-13 UAT standup thread](../meeting-notes/2026-08-13-W33-uat-standup-slack-updates.md) (original unanswered ask, now 2 days old).*
