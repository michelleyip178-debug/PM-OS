---
week: 2026-W35
week_start: 2026-08-24
week_end: 2026-08-28
quarter: Q2/Q3 2026
---

# Weekly Plan - Week of August 24, 2026

## TL;DR

- **Top 3:** (1) Track R1 planning artefacts (#59) toward mid-Sept grooming — designer output committed 12 Aug, still in progress, real deadline is grooming in mid-September, not this week; (2) Confirm Sprint 8's 20 orphaned tickets roll cleanly into Sprint 9 — this week is Phase 3 UAT by design, Sprint 9 starts next week, but the 20 open tickets (incl. 6 WOG AD/auth) need an explicit triage call before they land there; (3) Close CAM integration's case-linkage and PDPA gaps before it can be sized for R1.
- **Meeting load:** Unknown — Calendar API token expired (`invalid_grant`), re-auth needed. Planning without calendar context this week; treat meeting-load assumptions below as provisional.
- **Key milestone:** No active sprint on the Pathfinder board this week — **by design**, this week is Phase 3 UAT and Sprint 9 starts next week (24 confirmed). This isn't the structural gap it was flagged as on Thursday; it's a planned sequencing choice.

> **Correction (24 Aug):** PS/DS's accept/reject decision, previously tracked here as a 3rd-week-stalled Priority 1, was actually accepted on 18 Aug — resolved the same week as WOG AD and Gate 2, but never logged. It's removed from this week's priorities; R1 planning artefacts (#59) takes its place as Priority 1. See the corrected [W34 weekly review](../weekly-reviews/2026-08-24-W34-weekly-review.md).
>
> **Second correction (24 Aug, later):** R1 planning artefacts was initially framed here as "2 weeks overdue, blocking grooming" — that overstated the urgency. Grooming for R1 doesn't start until mid-September; the artefacts are still in progress with real runway. Priority 1 stays R1 artefacts, but the framing below has been softened from a fire drill to active tracking.

---

## Strategic Context

**Quarter Goal:** MVP go-live (target week of 19–23 Oct 2026), gated by WOG AD auth → CSC SSO chain and UAT Gate 2 broadcast. OKR 1–3 targets depend on the pilot cohort (6 agencies, ~5,400 officers) onboarding on schedule.

**North Star Progress:** Pre-MVP — baseline establishment phase, not yet tracking against the Dec 2026 MVP target.

**This Week's Focus:**
Last week's WOG AD, UAT Gate 2, and PS/DS blockers all cleared by 18 Aug — PS/DS's closure wasn't caught until this week's correction. With all three of last week's named blockers resolved (none via the planned escalation), this week is Phase 3 UAT by design, with Sprint 9 intentionally starting next week rather than this one — not the structural gap Thursday's stale-check first flagged it as. The real open item is narrower than originally framed: do the 20 tickets left open when Sprint 8 closed (including OTEP-71 and 5 related auth tickets) have an explicit, confirmed path into Sprint 9, or are they at risk of being silently dropped in the handoff. R1 planning artefacts, still in progress with grooming targeted mid-September, gets a check-in this week — not an escalation, since the earlier "2 weeks overdue" framing overstated how urgent it actually is.

---

## Top 3 Priorities

### Priority 1: Track R1 Planning Artefacts (#59) Toward Mid-Sept Grooming ⭐ Most Important

**Why this matters:**
- Advances: Grooming readiness — grooming for R1 is targeted for mid-September, not this week; this item has real runway, not an active block.
- Impact: Designer output was committed for 12 Aug and is still in progress as of this week. Real deadline is mid-Sept grooming, correcting an earlier "2 weeks overdue, blocking now" framing that overstated the urgency.
- Risk if not done: Left unchecked for several more weeks without any confirmed status, this could still repeat the pattern that let PS/DS's actual resolution go unnoticed for a week — worth a periodic check-in, not a daily escalation.

**Success looks like:**
- A confirmed in-progress status with a realistic delivery estimate ahead of mid-Sept grooming — not a fire drill, just active tracking so it doesn't quietly slip past that date.

**Key tasks:**
- [ ] This week: check in with the designer/design lead on #59 progress and get a rough delivery estimate against mid-Sept (Est: 0.5 hr)
- [ ] Confirm the estimate comfortably clears mid-Sept grooming; if not, flag early rather than close to the date (Est: 0.5 hr)
- [ ] Update the PRD pipeline status to reflect "in progress, targeting mid-Sept" rather than "overdue" (Est: 0.5 hr)

**Dependencies:**
- Needs from: Designer / design lead — progress update
- Blocks: Mid-Sept grooming (not immediate)

**Linked to:**
- [W34 weekly review](../weekly-reviews/2026-08-24-W34-weekly-review.md)

---

### Priority 2: Confirm Sprint 8's 20 Orphaned Tickets Roll Into Sprint 9

**Why this matters:**
- Advances: MVP go-live critical path — a clean, understood board state going into Sprint 9
- Impact: Sprint 8 closed 23 Aug (1 day ahead of its scheduled end) with 20 of 73 issues not Done, including 6 WOG AD/auth-adjacent tickets (OTEP-71, 594, 331, 110, 305, 111). Sprint 9 starts next week by design — this week is Phase 3 UAT — so the gap itself isn't the risk Thursday's stale-check first flagged. The real risk is narrower: whether the 20 open tickets have a confirmed, explicit path into Sprint 9, or whether they're at risk of getting lost in the handoff between UAT week and next week's sprint start.
- Risk if not done: Tickets could sit unconfirmed through UAT week and only surface as a gap when Sprint 9 planning happens next week, losing a week of lead time to sort them.

**Success looks like:**
- Explicit confirmation that all 20 open Sprint 8 tickets have a named destination: rolled into Sprint 9, closed as done-in-substance, or deliberately deprioritized — not left to be sorted out ad hoc when Sprint 9 planning starts.
- OTEP-71 and the other WOG AD tickets specifically reconciled: access is confirmed working, so these should mostly be ticket-hygiene closes, not real remaining engineering work — confirm that's true rather than assuming it.

**Key tasks:**
- [ ] Monday: confirm with Rama/Adrian that the 20 open Sprint 8 tickets are slated for Sprint 9, and get a rough sense of Sprint 9's planning timeline this UAT week (Est: 0.5 hr)
- [ ] Reconcile the 6 WOG AD/auth tickets specifically — confirm with Léo/Thomas whether each is a real remaining task or a stale status that should just move to Done before Sprint 9 planning (Est: 1 hr)
- [ ] Update `open-items.md` #26 and `sprint-status.md` to reflect confirmed Sprint 9 timing and ticket destinations (Est: 0.5 hr)

**Dependencies:**
- Needs from: Rama/Adrian (Sprint 9 timing confirmation), Léo/Thomas (per-ticket reconciliation)
- Blocks: Clean board state for Sprint 9 planning; VAPT/UAT scheduling clarity

**Linked to:**
- [sprint-status.md](file:///Users/michelleyip/Documents/PM-skills-ALL-1/00-hub/sprint-status.md)
- [open-items.md #26](file:///Users/michelleyip/Documents/PM-skills-ALL-1/00-hub/open-items.md)

---

### Priority 3: Resolve CAM Integration's Case-Linkage and PDPA Gaps

**Why this matters:**
- Advances: R1 scope confirmation — CAM was confirmed for R1 this week but currently carries 5 unresolved gaps that block real sizing
- Impact: The two most consequential gaps (does a CAM event generate an Ops Portal case, and who owns the PDPA-relevant personal-data-cleanup action on Staff Exit) aren't addressed anywhere in the CAM design sources — they need an explicit decision, not more architecture review.
- Risk if not done: CAM stays a target ("ships in R1") without a buildable scope, repeating the same "no owner, no date" pattern already flagged with R1 planning artefacts.

**Success looks like:**
- Case-linkage decision made: CAM-triggered actions either generate an Ops Portal case or explicitly bypass it, documented in the CAM epic one-pager.
- PDPA ownership for Staff Exit's personal-data-cleanup action assigned to a real team, even if the process itself isn't built yet.

**Key tasks:**
- [ ] Identify who owns the Ops Portal case-generation decision (likely Adrian or whoever owns Ops Portal scope) and raise it directly (Est: 0.5 hr)
- [ ] Flag the PDPA/personal-data-cleanup gap to whoever owns compliance review — this hasn't been raised anywhere yet (Est: 0.5 hr)
- [ ] Update the CAM epic one-pager's Decision Tracker once either resolves (Est: 0.5 hr)

**Dependencies:**
- Needs from: Adrian/Ops Portal owner (case-linkage), compliance/legal contact (PDPA) — not yet identified
- Blocks: CAM effort estimate, R1 minimum-viable scope definition

**Linked to:**
- [CAM integration epic one-pager](../prds/2026-08-20-W34-cam-integration-epic-one-pager.md)

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|----------------|
| Ops Portal / Career Compass (Day-2 profile-change detection) | v0.2, scrutiny pass complete, interim fix path drafted | Staged Confluence v45 published (pending explicit go-ahead) | Confirm with stakeholder whether the held v45 draft is ready to publish |
| CAM Integration | New epic, R1 confirmed, 5 open gaps | 2 of 5 gaps resolved (case-linkage, PDPA ownership) | Direct asks per Priority 3 above |
| R1 planning artefacts (#59) | Designers committed 12 Aug, still in progress | Confirm progress and estimate ahead of mid-Sept grooming | Periodic check this week — real deadline is mid-September, not immediate |

---

## Key Meetings

**Calendar data unavailable this week** — Google Calendar API token expired (`invalid_grant`, ~7-day TTL). Re-authenticate to restore meeting context for daily planning. Until then, treat any meeting-load assumption as unconfirmed.

**Protected block this week:** Wednesday 2–4pm, no meetings (carried forward from the last 2 weeks' named block). **This is now the 3rd consecutive week naming this exact block** — last week it was displaced twice by legitimately urgent same-day items (Sept capacity gap, memory-exhaustion investigation), not reactive noise, so the pattern itself isn't broken, but it's worth tracking whether it survives contact with this week too. Use it specifically for: confirming Sprint 9/ticket-reconciliation status (Priority 2) and the R1 artefacts follow-through (Priority 1).

---

## Strategic Pillar Balance

| Pillar | This Week's Time | Last Week | Trend |
|--------|------------------|-----------|-------|
| MVP delivery (auth/UAT critical path, sprint reconciliation) | 40% | 45% | ↓ Slightly down — freeze-week focus eases, but the Sprint 8 cleanup is real work |
| Ops Portal / Day-2 profile-change | 25% | 35% | ↓ Down — most PRD work is done; this week is publish-decision, not drafting |
| CAM Integration | 20% | 0% (didn't exist) | ↑ New — needs its own budget now that it's a confirmed R1 epic |
| R1 planning | 15% | 20% | ↓ Slightly down — same unresolved artefact-delivery item, not new work |

**Balance check:**
CAM is new and needs explicit budget rather than absorbing time unacknowledged, the way Ops Portal did in W33. If CAM's case-linkage/PDPA asks stall (no response by Wednesday), that's the signal to escalate rather than let it sit another week unbounded — the same failure mode already flagged with R1 artefacts.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** R1 planning artefacts (#59) drifts unchecked for several weeks with no status update, risking a late surprise close to mid-Sept grooming.
  - **Mitigation:** Priority 1's check-in this week confirms an in-progress status and a realistic estimate — low urgency, but worth a periodic touch rather than silence until grooming is imminent.

- **Risk:** The 20 Sprint 8 tickets sit unconfirmed through UAT week and only surface as a gap once Sprint 9 planning starts next week, losing lead time.
  - **Mitigation:** Confirm their destination this Monday, ahead of Sprint 9 planning, rather than waiting for the sprint-start conversation to surface it.

- **Risk:** CAM's case-linkage and PDPA asks go to the wrong owner or get no response, since neither has a clearly identified owner yet.
  - **Mitigation:** If no response by Wednesday's protected block, name both as open risks in next week's review rather than let them silently carry a 3rd time.

**Capacity concerns:**
Meeting load is unknown this week (calendar access down) — re-authenticate early in the week so daily plans aren't operating blind.

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] R1 planning artefacts (#59) — designer output committed 12 Aug, still in progress; real deadline is mid-Sept grooming, now tracked (not escalated) as Priority 1
- [ ] September capacity gap (Amber leaving, new PM delayed, R1 feasibility) — flagged 18-19 Aug, still has no owner or tracker line; not yet promoted to a Top 3 priority, but risks becoming a stall if it stays unowned another week

**Resolved, previously miscounted as carried over:**
- [x] PS/DS accept/reject decision — accepted 18 Aug; was incorrectly tracked as an open 3rd-week stall until this week's correction

**Learnings applied:**
- Three weeks running, "escalate, don't re-ask" was named as the fix but never actually tested — all three named blockers (WOG AD, Gate 2, PS/DS) cleared on their own before any trigger fired (W34 learning #1, revised) → this week, don't assume any current carry-over item (R1 artefacts, CAM gaps) will behave differently; check confirmed status directly rather than assuming resolution.
- An item can resolve and still go untracked for a week if nobody explicitly confirms it (this week's PS/DS correction) → apply the same direct-confirmation discipline to R1 artefacts rather than letting "probably delivered" stand in for a checked status.
- Undocumented business rules kept surfacing as apparent defects during UAT (W34 learning #1, different numbering) → worth applying the same lens to any new UAT findings this week: check "is this a rule that was never written down" before treating something as a bug.
- New risks (Sept capacity gap, CAM gaps) need an explicit budget line from week one, not absorption into existing priorities unacknowledged (W34 learning, Ops Portal pattern from W33) → CAM gets its own 20% pillar allocation above rather than folding into Ops Portal or MVP delivery.

---

## Success Metrics

**How we'll know this week was successful:**
1. R1 planning artefacts (#59): in-progress status confirmed with a realistic delivery estimate ahead of mid-Sept grooming — not assumed silent.
2. All 20 Sprint 8 open tickets have a confirmed destination (Sprint 9, closed, or deprioritized) by Monday EOD, ahead of next week's Sprint 9 start.
3. CAM: at least one of the two priority gaps (case-linkage, PDPA ownership) has an identified owner and a next step, even if not fully resolved.

**Leading indicators to track:**
- Whether the designer/design lead responds to the R1 artefacts check-in by Monday/Tuesday (sets up the Wednesday escalation trigger)
- Whether the 20 Sprint 8 tickets have a confirmed Sprint 9 destination by Wednesday's protected block
- Calendar API re-auth status — affects whether Thursday/Friday planning has real meeting context

---

## This Week's Strategic Skill

**Suggested:** `/stale-check`

**Why this week:** PS/DS's actual 18 Aug resolution went unlogged for a week — the exact drift `/stale-check` exists to catch. R1 artefacts and CAM's open gaps are this week's candidates for the same silent-drift risk.

**When to run:** Wednesday's protected block, as already scheduled — confirm R1 artefacts and Sprint 9 status actually moved, not just re-flagged as pending.

**What you'll get:** Confirmation (or correction) of whether this week's tracked items reflect their real current state, before another status quietly goes stale for a week.

---

## Skills Checklist — Run This Week

*Generated based on the Sprint 8 closure gap, the PS/DS tracking-drift correction, and new CAM epic — no formal ceremony confirmed this week pending calendar re-auth.*

| When | Skill | Why |
|------|-------|-----|
| Monday | `/sprint-check` | ⚠️ Critical — Sprint 9 starts next week; needs a pre-planning brief this UAT week so the 20 orphaned tickets have a confirmed destination before planning starts |
| Wednesday (protected block) | `/stale-check` | High — confirm R1 artefacts status and the Sprint 8 ticket destinations actually moved, not just re-flagged as pending |
| Ongoing | `/feature-results` | Medium — Ops Portal's interim fix path and CAM's R1 confirmation are both worth capturing before more status shifts |
| Daily | `/stale-check` | High — keep hub trackers honest given last week's finding that Sprint 8's closure and PS/DS's resolution both sat uncaught for a day+ |
| Friday | `/weekly-review` | ⚠️ Critical — closes the loop on whether R1 artefacts and the Sprint 9 ticket handoff actually resolved this week |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- ⚠️ Critical items carry real delivery risk if skipped, given Sprint 9's imminent start and last week's tracking-drift finding.

---

*Generated: 2026-08-24*
*Next: Run `/daily-plan` each morning to execute against this plan*
