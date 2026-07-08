# Sprint 6 External Dependencies

**Source:** Internal grooming (2026-07-08) — [meeting notes](../meeting-notes/2026-07-08-W28-internal-grooming.md)
**Corrected 2026-07-08 (v6)** per Pow Hwee's review. Two ownership patterns, not one blanket rule: ring-fencing's DO clearance (#3) is Compass's to drive even though POCDEX supplies the data (Correction 7). WOG AD (#5) has two layers that both need stating — root cause is shared/not Compass-specific (Correction 4), but the external statement we own is that our own infra setup timeline does not inspire confidence (Correction 5).
**Purpose:** One-page view of what Sprint 6 delivery actually depends on outside the squad, in priority order.

---

## Dependency Map (in Sprint 6 priority order)

| # | Work item | External dependency | Owner (their side) | Status |
|---|---|---|---|---|
| 1 | OTG ingestion | None — fully within squad control | — | In progress, stabilization ongoing |
| 2 | C@G (Careers@Gov) ingestion | None — fully within squad control | — | In progress, stabilization ongoing |
| 3 | Ring-fencing | **Two tied pieces:** (a) Compass data domain list + data flow diagram — the Level 1 deliverable Rama/Imelda owe as part of Huiting LIAN's 3-level data-requirements framework; (b) POCDEX-sourced data for ring-fencing has to satisfy Data Office (DO) requirements — **if those DO questions aren't answered, that's Compass's problem to own, not POCDEX's or DO's** | Rama / Imelda (own the Level 1 deliverable) — Huiting LIAN reviews/gates it. **Compass owns driving DO clearance on the data itself — this doesn't get outsourced.** | 🔴 Open — no date given for the Level 1 deliverable. DO clearance status not yet confirmed; Compass needs to actively drive this, not wait for it to resolve on its own |
| 4 | Competency matching | Core team has provided their competency API — the gap is on our side: **we don't have a defined signal for when the data coming through it is good enough to match against opportunities** | Core team (provided the API) — the readiness-signal work is ours to define, in collaboration with them | 🔴 Open — not a Core-team-readiness problem, a "we haven't defined match-ready yet" problem on our side |
| 5 | WOG AD (WOGAD) in test environments | **Root cause is not a Compass-specific problem** — nobody has clear accountability for the end-to-end infra setup, and the infra architecture isn't kept current, so it's genuinely hard for anyone to tell what's missing. **But the only thing we can honestly say externally is what's true of Compass:** our infra setup timeline does not inspire confidence. We don't get to say "POCDEX isn't ready" or "CSC isn't ready" — that's not ours to judge, same rule either way. | Unclear who owns the end-to-end infra across teams — but Compass owns saying, plainly, that our own timeline confidence is low | 🟡 Open — shared root cause, but the statement we're accountable for making is about our own timeline, not anyone else's readiness |

**Where does POCDEX actually come in?** Not as a C@G/#2 blocker — that mention was corrected out (see Correction 6). POCDEX matters specifically on **ring-fencing (#3)**, tied together with the Level 1 data domain list: ring-fencing needs POCDEX-sourced data, and that data has to clear Data Office (DO) review. **If DO questions on that data aren't answered, that's a Compass problem to solve — not something we can attribute to POCDEX or DO and wait on.**

---

## Corrections Log (2026-07-08)

1. **Ring-fencing dependency — be specific about which document.** The blocker is Rama/Imelda's Level 1 data domain list + data flow diagram — the deliverable Huiting LIAN is reviewing as part of her formal data-requirements framework (see [Huiting meeting notes](../meeting-notes/2026-07-06-W28-huiting-data-requirements-teams-message.md)). Don't conflate this with the separate "draft response to Huiting's first questions" (due week of 13 Jul) — that's a related but smaller item, not the Level 1 deliverable itself.

2. **POCDEX's API is not a blocker.** POCDEX has already provided their API. No open issue on their side.

3. **The "data not good enough to match" gap belongs to competency matching (#4) and Core team's API, not POCDEX.** Core team has provided their competency API — the missing piece isn't the API, it's that we haven't defined what "match-ready" data looks like yet. That's work on our side, done in collaboration with Core team, not something we're waiting on them to fix unilaterally.

4. **WOG AD test-environment gap is not Compass-specific — restored to Pow Hwee's original framing.** His exact point: "WOG AD not avail for test is not a problem specific to Compass. The issue is who [is] accountable or own[s] the end-to-end infra setup. Similar to other artefact issue[s], the infra arch[itecture] is not updated — not easy for anyone to tell what is missing." This is a shared, cross-team infra-ownership and documentation problem — not something Compass caused or can fix alone. An earlier draft of this doc drifted into calling it "our own infra setup" in a way that made it sound Compass-specific again, which was the opposite of his correction — fixed.

5. **Framing rule, exact wording from Pow Hwee: "we cannot say POCDEX is not ready. Just like we cannot say CSC is not ready. We can only say what Compass is not ready — the infra setup timeline does not inspire confidence."** This has two halves that both need to stay in the doc:
   - **Half 1:** don't characterize POCDEX, CSC, or infra broadly as "not ready" — not ours to judge.
   - **Half 2 (the part an earlier draft dropped):** the thing we *are* accountable for saying plainly is our own read — Compass's infra setup timeline does not inspire confidence. This isn't in tension with Correction 4 (root cause is shared, not Compass-caused) — it's the external-facing statement we're responsible for making about ourselves, regardless of who ultimately owns the underlying infra gap.

6. **C@G ingestion has no external dependency at all — retracted the POCDEX mention on this row.** C@G ingestion (#2) is fully in-squad, same as OTG (#1). Earlier drafts incorrectly attached a "POCDEX has provided their API" note to this row, implying C@G depended on POCDEX. It doesn't. POCDEX only matters via ring-fencing's data requirements (#3), not C@G ingestion.

7. **Ring-fencing is tied to POCDEX, and DO (Data Office) clearance on that data is Compass's problem, not POCDEX's or DO's.** Ring-fencing depends on POCDEX-sourced data satisfying Data Office requirements. If those DO questions don't get answered, the responsibility for solving that sits with Compass — it's not a blocker we get to attribute externally and passively wait on. This applies the same framing rule as WOG AD (Correction 5): name what's ours to drive, don't outsource the risk.

---

## Why This Order Matters

The priority order isn't arbitrary — it's sorted by **how much of each item the squad actually controls**:

- **#1 (OTG ingestion)** and **#2 (C@G ingestion)** both have no external dependency at all — this is why they're first, and why they're grouped together as "fully ours."
- **#3 (Ring-fencing)** is squad-buildable but needs Rama/Imelda's Level 1 data domain list, and needs POCDEX-sourced data to clear Data Office review — and if DO clearance stalls, that's on Compass to resolve, not something to leave with POCDEX or DO.
- **#4 (Competency matching)** splits cleanly: **logic is ours, and so is defining what "match-ready" means** — Core team's API already exists.
- **#5 (WOG AD)** is placed last because it's the least resolved structurally. Root cause is shared — nobody across teams has clear ownership of the end-to-end infra, and the architecture documentation is stale for everyone. But separately, our own honest read is that our infra setup timeline doesn't inspire confidence — both things are true at once.

---

## What to Escalate, and How

**Ring-fencing / Level 1 data requirements (Rama/Imelda, gated by Huiting):** treat this as its own mini data-architecture deliverable, not a quick reply. No date proposed back to Huiting yet — that's the actual next step. **Separately, own the Data Office clearance question directly** — if POCDEX data doesn't yet satisfy DO requirements, don't wait for POCDEX or DO to resolve it; Compass needs to actively drive getting those questions answered.

**Competency matching / match-ready definition:** the ask isn't to Core team to "get ready" — it's an internal (plus Core-team-collaborative) task to define what match-ready competency data actually looks like, since the API itself is already there.

**WOG AD / infra ownership:** two things to say, not one. First, raise the cross-team root cause directly — who owns the end-to-end infra architecture, and can the documentation be brought current so anyone can tell what's missing; this likely needs resolution above squad level. Second, and separately, state plainly what we're accountable for saying: **Compass's own infra setup timeline does not inspire confidence.** Don't soften this into "infra isn't ready" (not ours to say) or drop it entirely in favor of only the shared-ownership framing — both statements need to land.

---

## The Pattern Worth Naming

Three real gaps here, but they don't all have the same ownership shape — worth being precise rather than applying one blanket rule:

- **Ring-fencing (#3)** and **competency matching (#4)**: something Compass owns (a document, a DO clearance, a definition) hasn't been produced or driven yet. These are ours to push, even where the underlying data comes from another team.
- **WOG AD (#5)**: two-layered. The root cause is genuinely not Compass-specific — it's a shared infra-ownership and documentation gap. But the statement we're accountable for making externally is about ourselves only: our infra setup timeline does not inspire confidence. Don't collapse this into either "it's all shared, not on us" or "we're not ready" — both halves are true and need to be said together.

OTG and C@G ingestion, by contrast, have no such gap — both are fully in-squad and shouldn't be listed alongside the three real dependencies.

---

*Generated: 2026-07-08*
*Corrected: 2026-07-08 (v6) — restored the second half of Pow Hwee's WOG AD framing rule, which v5 had dropped: root cause is shared/not Compass-specific, AND separately, Compass's own infra setup timeline does not inspire confidence — both statements stay, neither replaces the other.*
*Next: Push for a real date on the Level 1 data domain list (Rama/Imelda), own driving DO clearance on ring-fencing's POCDEX data, define match-ready data with Core team, and raise both halves of the WOG AD picture — shared infra-ownership gap, and Compass's own low timeline confidence.*
