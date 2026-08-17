---
date: 2026-08-04
week: 2026-W32
purpose: How Michelle, as PM, runs the CSC integration end-to-end as Integration Readiness Owner — the operating model, not just the tracker
target: Confluence — new page, linked from the main CSC SIT/UAT doc and the Integration Plan
status: draft — this proposes Michelle take the Integration Readiness Owner role explicitly, confirm with Rama/Adrian first
---

# CSC Integration — PM Operating Model (Confluence draft)

**What this page is:** every artifact built this week (the tracker, the integration plan, the war-room board, the DLE tracker) answers "what's the status." This page answers **"who's running this and how"** — the role CSC asked for on 3 Aug that's still unassigned. If you take this on, this is the page that makes it visible and repeatable rather than something only you hold in your head.

---

## 1. Why a PM owns cross-workstream integration readiness

Three separate meetings this week (SIT readiness sync, Squad Sync, POCDEX walkthrough) independently reached the same conclusion: nobody owns the whole, only the parts. Engineering leads correctly own their workstream's technical execution — but *no one* owns:

- Noticing when one workstream's delay silently blocks another (WS2 → WS3/WS4)
- Deciding whether "SIT complete" actually means all four workstreams together, not four independent sign-offs
- Escalating a stalled cross-team dependency before it becomes a missed date
- Keeping one current source of truth instead of five different documents saying five different things

This is PM work, not engineering work — it doesn't require solving the technical problem, it requires making sure the technical problem gets seen and routed to the right person fast. That's the case for the PM (not a tech lead) holding this role.

---

## 2. The operating model

### Daily (5-10 min, every SIT/UAT day)

1. **Scan the [War Room Tracker](2026-08-04-W32-csc-war-room-tracker.md)** — update workstream status, blockers, Today's Top 3.
2. **Check the dependency chain specifically** — don't just read each workstream's own status; ask "is anything upstream quietly blocking something downstream that hasn't been flagged yet?" (This is the check that catches WS2-style hidden bottlenecks before they surface as a missed date.)
3. **Post the day's status to the team channel** — 3 lines: overall RAG, today's top blocker, who needs to act. Not a copy-paste of the tracker; a distillation of it.
4. **Log any escalation** — if something's been stuck 2+ days, that goes in the Escalation Log with a name and a date, not just a color change.

### Weekly (or at each Squad Sync)

1. **Reconcile the tracker against what actually got said in the room** — today's session showed two meetings (POCDEX walkthrough, Squad Sync) disagreeing on the same fact (Johnny's fixtures decision) hours apart. The PM's job is to catch that gap, not assume meetings self-synchronize.
2. **Re-confirm the SIT/UAT boundary is holding** — check whether "what counts as SIT success" is being re-litigated in the room again. If it is, the criteria weren't actually published/read, and that's worth naming directly rather than re-explaining from scratch each time.
3. **Capacity-check whoever's carrying the most action items** — this week that's Rama (9+ items across 2 meetings). A PM running integration readiness should notice this pattern before it becomes a delivery risk, not after.

### At each gate (SIT exit, UAT entry, UAT exit)

Don't let a gate be "everyone individually says their workstream is done." Run it as a single collective checkpoint:
1. Pull the exit criteria for all 4 workstreams into one view (Section 3 of the [Integration Plan](2026-08-04-W32-csc-integration-plan-confluence-draft.md))
2. Confirm the cross-workstream test (GAP-16, end-to-end Course Journey) actually passed — this is the one test that proves integration, not just four isolated components
3. Sign off explicitly, as the Integration Readiness Owner, separate from each workstream's own sign-off
4. Only then does the next phase open

---

## 3. What "good" looks like vs. what's happening now

| Signal | Now | Target |
|---|---|---|
| Source of truth | 5+ separate documents (Confluence doc, this week's 3 derived trackers, meeting notes) | One live tracker, everything else links to it |
| Cross-workstream blockers | Discovered live in meetings, after the fact | Caught in daily scan, flagged before the next meeting |
| "SIT success" definition | Re-asked by CSC repeatedly | Published once, referenced, not re-litigated |
| Escalation | Ad hoc, verbal, easy to lose | Logged with date + outcome, visible to all |
| Ownership gaps (WS1/2/4 CC-side) | Blank | Named, or explicitly flagged as still open with a chase date |

---

## 4. Guardrails — what this role is NOT

To keep this sustainable and not just add more to your plate:

- **Not technical decision-making.** Engineering leads (Pow Hwee, Adrian Lo) still own how a workstream gets fixed. This role owns whether it's visible and routed, not the fix itself.
- **Not a substitute for Rama's SIT plan ownership.** Rama still owns the plan's content and CSC-facing coordination. This role is the cross-workstream lens layered on top — checking the seams between workstreams, which is structurally different from owning any one workstream.
- **Not a new meeting.** This runs through the existing Squad Sync cadence and a daily async scan, not an additional standing call — the team already flagged meeting/coordination-burden risk this week (see UAT Phase 3 pushback in Squad Sync notes); adding a war-room meeting would work against that.

---

## 5. Handoff / escalation rule

If the daily scan finds a blocker that:
- **Has an owner and a plan** → note it, move on
- **Has an owner but no movement in 2+ days** → escalate directly to that owner with a specific ask, log it
- **Has no owner** → this is the PM's job to name one, not wait for it to surface in the next meeting
- **Crosses organisational lines (CSC vs. CC) and isn't moving** → escalate to Rama/Adrian same-day, don't let it ride to the next Squad Sync

---

## For Rama / Adrian — confirming this role

This page proposes Michelle formally take the Integration Readiness Owner role named in the [Integration Plan](2026-08-04-W32-csc-integration-plan-confluence-draft.md) (Section 1) — CSC asked for this on 3 Aug and it's been open since. Before publishing:

1. Confirm this is the right person for the role, given Michelle already owns UAT test coordination broadly
2. Confirm this doesn't conflict with or duplicate Rama's SIT Plan Owner role — the split above (Rama = plan content + CSC coordination; Michelle = cross-workstream visibility + escalation) is a proposed division, not yet agreed
3. If confirmed, update the Integration Plan's Section 1 table to name Michelle in the Overall Integration Readiness Owner row

---

*Drafted 2026-08-04. Pairs with the [Integration Plan](2026-08-04-W32-csc-integration-plan-confluence-draft.md) (the governance/reference layer) and the [War Room Tracker](2026-08-04-W32-csc-war-room-tracker.md) (the daily live status). This page is the "how," those are the "what."*
