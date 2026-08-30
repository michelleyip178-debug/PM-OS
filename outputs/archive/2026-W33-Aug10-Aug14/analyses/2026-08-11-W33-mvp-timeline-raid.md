---
date: 2026-08-11
week: 2026-W33
scope: OTEP MVP Timeline board (Jira board 22177), assuming PS/DS approves the 7-week delay proposal
---

# RAID Log — MVP Timeline (Board 22177)

**Context:** This RAID assumes PS/DS approves the pending 7-week MVP delay (release moving early-Oct → end-Nov 2026). The board's own dates already appear to plan against this revised timeline, not the old baseline — see Assumption A1. Source: live pull from the "MVP Timeline" Kanban board (OTEP-1047/1048/1049/1082/1085 epics), cross-checked against `open-items.md` #39 and `risks.md`.

---

## Risks

| # | Risk | Likelihood | Impact | Notes |
|---|------|-----------|--------|-------|
| R1 | **VAPT Round 2 retesting has a broken date range** (OTEP-1116: start 12 Oct, due 26 Aug — due before start). If this is a real typo and Round 2 actually needs to run after Round 1 closes (28 Sep), Final Report (currently 26 Oct) may already be unachievable, or the true Round 2 window was never entered. | High (data confirmed broken, not a misread) | High — cascades to Final Report and everything after (Go-Live) | Flag to board owner before treating any post-VAPT date as reliable |
| R2 | **VAPT has no visible remediation/re-test buffer as a distinct task**, despite the PS/DS proposal explicitly negotiating a 3-week remediation buffer with NCS. Only "Round 2 retesting" exists, and its dates are broken (R1). | Medium | High — if the 3-week buffer isn't actually built into the schedule, a single round of defects blows the Nov release date | Confirm with Rama/NCS whether buffer is folded into Round 2 or missing entirely |
| R3 | **WOG AD (OTEP-71) re-enable is blocked on an external fix, outside Pathfinder's control** — a ticket is raised (root cause: auth subdomain resolving to a public IP, per today's Slack thread), but resolution sits with a team beyond Pathfinder. UAT Phase 3 ("Account Setup With WOG AD," 16 Aug) and Internal UAT Phase 3 (19 Aug) assume it's ready. **Update 2026-08-11: this is no longer an internal ownership gap Michelle can close by asking Léo — it's an external dependency to track and escalate.** | High — no lever internal to Pathfinder to pull, and no Sprint 9 to absorb a slip | High — Phase 3 UAT, Agency Whitelisting (24 Aug), and SSO with CSC/CC (24 Aug) all sit downstream | **Follow-up scheduled for Thursday 13 Aug** (same day as Backlog Grooming) — check status/ETA, escalate to Rama/Adrian if still no visibility. This is a risk to surface upward, not a task to push on directly. |
| R4 | **Go-Live epic (OTEP-1082) has zero dates on any sub-task** — Production readiness prep, AI Clearance (IDSC), Code Freeze, Performance testing, Production Deployment checklist, Data readiness are all undated Backlog items. | High (confirmed empty on board) | High — IDSC clearance in particular has historically slow, unpredictable lead time; if it isn't started early it could unilaterally push the Nov date regardless of VAPT outcome | This is the single biggest blind spot on the board — everything upstream is dated, this isn't |
| R5 | **Non-FE UAT items cluster right at feature-freeze boundary** (Course File Import, Learner ID Mapping, Opps File Upload, JumpStart Course Recs — all 24–25 Aug), leaving no slack before defect-fixing windows start eating into September alongside VAPT prep. | Medium | Medium — compounds if any of these slip even a few days | Watch this cluster specifically in Sprint 8 close-out |
| R6 | **VAPT close-date conflict, unresolved** — `risks.md`/`open-items.md` #39 flagged Rama confirming 23 Oct with NCS in a 2026-07-30 Slack thread vs. an earlier-tracked 16 Oct. Board doesn't resolve this either (Final Report shown as 26 Oct, closer to but not matching either prior figure). | Low-Medium | Medium | Treat board's 26 Oct as the newest data point, but confirm explicitly — three different dates now exist across three sources |
| R7 | **Sprint 8 confirmed as end of MVP development (2026-08-11)** — there is no Sprint 9 dev mop-up. This changes the severity of every other risk on this board: R3 (WOG AD no owner/date) and R5 (non-FE UAT cluster at freeze boundary) no longer have a buffer sprint to absorb slippage. Anything not resolved by 24 Aug is out for MVP scope entirely, not deferred. | High (confirmed fact, not speculative) | High — amplifies R3 and R5 specifically; the Go-Live epic (R4) also has less runway to start in parallel than previously assumed | Raises the urgency on today's WOG AD ask (R3) from "before Sprint 8 locks" to "this is genuinely the last chance" |

---

## Assumptions

| # | Assumption | Confidence | What breaks if wrong |
|---|-----------|-----------|----------------------|
| A1 | The board's dates (UAT starting mid-Aug, VAPT starting 7 Sep) already reflect the *proposed* revised PS/DS timeline, not the old baseline — implying the team is planning against it even though `open-items.md` #39 still shows approval as unconfirmed. | Medium | If PS/DS actually rejects the delay, the entire board needs to be re-dated back to the old baseline (VAPT 7 Sep–16 Oct was coincidentally similar, but UAT/Go-Live would compress hard against the original Nov target with much less runway than currently planned) |
| A2 | Round 1 VAPT testing (7–28 Sep, 3 weeks) is long enough to surface the defects that need Round 2 — i.e., Round 1 won't itself slip. | Medium | Any Round 1 slip pushes Round 2's already-broken timeline further, with zero declared buffer |
| A3 | WOG AD will have a firm re-enable date "soon" (today's ask) and that date lands before 16 Aug (UAT Phase 3 start). | Low-Medium — this is actively unresolved as of this morning | If Léo can't commit to a pre-16-Aug date, Phase 3 UAT either slips or runs on Keycloak again, undermining the point of testing the real auth flow before go-live |
| A4 | AI Clearance from IDSC (OTEP-1080, undated) can run in parallel with VAPT rather than sequentially after it. | Unknown — no data on this board either way | If IDSC clearance is sequential and slow (this is the historical pattern with government clearance processes), it could be the true long pole, not VAPT |
| A5 | The 3-week remediation buffer negotiated with NCS is accounted for somewhere, even if not visible as its own board item. | Low | If it isn't ticketed, it isn't planned for — teams tend to consume unticketed buffer implicitly and then discover it's gone |

---

## Issues (already live, not hypothetical)

| # | Issue | Status | Owner |
|---|-------|--------|-------|
| I1 | PS/DS approval on the 7-week delay itself. Mark's review landed EOD 2026-08-11 as committed — line-edit/structural feedback, not the accept/reject decision. Core finding: Mark still unsure what the delay is about, traced to deletions that stripped explanatory content. Fix (bridging paragraph + sub-headers) drafted, see [tracking doc](../decisions/2026-08-11-W33-mark-psd-note-review-tracking.md). SD(WD) and D(ITC) routing approvals still pending sign-off — now the long pole for submission, independent of content quality. **Ownership corrected 2026-08-11: Adrian owns the entire thread (content rewrite + routing chase) end to end — Michelle is informed only, not tracking or actioning this.** | 🟡 Review received — content rewrite + routing sign-off both needed before resubmission; approval decision itself still pending | **Adrian (owns end to end)**; Michelle informed only; Mark (will re-review once resubmitted) |
| I2 | UAT Gate 2 (Jira tickets updated with current test data) — not explicitly confirmed by Rama despite Gate 1 (internal UAT) being declared complete. | 🔴 Open | Michelle → Rama (today's Priority 1 ask) |
| I3 | OTEP-1116 date error (start after due) — a data-integrity issue on the timeline board itself, independent of the PS/DS question. | 🔴 Open, unflagged until now | Needs a board owner — raise today |
| I4 | ~~UAT read replica data quality unclean (open-items #33)~~ — **transferred to Core team 2026-08-11** along with POCDEX Authorisation. Confirmed tracked on Core team's own tracker; no longer active on this board. | ✅ Transferred | Core team (Pei Ern/Kingsley) |

---

## Dependencies

| # | Dependency | Chain | Risk if it slips |
|---|-----------|-------|-------------------|
| D1 | PS/DS approval (Mark's sign-off) → every date on this board being "real" vs. provisional | Root dependency for the entire RAID. Mark's review landed EOD — content feedback received, approval decision now waits on a rewrite (bridging paragraph/sub-headers) plus SD(WD)/D(ITC) routing sign-off, both still open, both **owned by Adrian, not Michelle** (corrected 2026-08-11). | Nothing downstream is safe to commit to until the resubmitted note clears both the content bar and routing sign-off. Michelle no longer has a lever here — visibility only, via Adrian. |
| D2 | WOG AD re-enable (OTEP-71, fix ticket pending outside Pathfinder) → UAT Phase 3 (16 Aug) → Agency Whitelisting + SSO with CSC/CC (both 24 Aug) | Sequential, single point of failure — but now an **external** one, not Léo internally. Pathfinder can monitor and escalate, not directly unblock. | A slip here doesn't just delay Phase 3 — it delays two other 24 Aug items that assume Phase 3 is done, and there's no internal fix to accelerate it |
| D3 | VAPT Round 1 complete (28 Sep) → Round 2 retesting → Final Report (26 Oct, pending R1 fix) → Go-Live epic (undated) | Long sequential chain with the weakest link (R1's date error) sitting in the middle | If Go-Live prep (IDSC clearance especially) hasn't started in parallel by the time VAPT closes, the Nov target slips regardless of VAPT outcome |
| D4 | Non-FE UAT (Course/Learner/Opps file imports, 24–25 Aug) → defect fixing window → Go-Live readiness | Clusters tightly at feature-freeze boundary | Compounds with D2 if both slip in the same week |

---

## Priority to Resolve

Ranked by how much each item gates everything downstream, not by chronological order. Items 1-3 should all move today; the rest can wait for the mid-week checkpoint.

| Rank | Item | Why it's ranked here | Owner | When |
|------|------|----------------------|-------|------|
| ~~1~~ | ~~D1 — Mark's review comments/edits on the PS/DS note (I1)~~ | **Resolved off Michelle's plate 2026-08-11:** Mark's review landed as committed, but ownership of the follow-through (content rewrite, routing sign-off) was corrected to Adrian end-to-end. No longer an active item for Michelle to track or rank. | Adrian | N/A — informed only |
| **1** | **R3/D2/R7 — WOG AD fix ticket: confirm owner + ETA** | Now top of the list following I1's resolution. Reframed 2026-08-11: not an internal ownership ask — a ticket is raised and the fix sits outside Pathfinder's control. With Sprint 8 confirmed as end of MVP development (R7) and no Sprint 9 buffer, the action is confirming ticket ownership/ETA and escalating early if there's no visibility. | Michelle → confirm ticket owner (TBC); scheduled follow-up Thu 13 Aug | Light-touch check done 11 Aug. **Thu 13 Aug: formal follow-up**, same day as Backlog Grooming |
| **2** | **I3 — VAPT Round 2 date error (R1)** | Cheapest item on this list to fix (it's a data-entry correction, not a negotiation), but currently poisons every date after 28 Sep on the board. Costs nothing to raise; costs a confused October if it's discovered late. Still unraised as of 2026-08-11. | Board owner (Rama or PMO) | Overdue — raise this week, quick flag not a full conversation |
| **3** | **R4 — Go-Live/IDSC clearance has no schedule (A4)** | Biggest unknown, not yet urgent by calendar but highest blind-spot risk: if IDSC clearance is sequential and slow, it's the true long pole and nobody is watching it. Needs scoping, not just a date fix. | Michelle → Rama/Adrian (who owns IDSC engagement?) | This week — raise at Wed check-in if not resolved sooner |
| **4** | **R2/A5 — VAPT remediation buffer not visibly ticketed** | Depends on #2 being fixed first (can't tell if buffer is missing or just mis-dated until Round 2's dates are correct). | Rama/NCS | After #2 resolves |
| **5** | **R5/D4/R7 — Non-FE UAT cluster at freeze boundary** | Still lower urgency day-to-day (24-25 Aug is two weeks out), but worth noting given R7: since Sprint 8 close-out is now the true end of MVP dev, this cluster has zero fallback sprint if it slips. Elevate to active tracking sooner than "check-in at close-out." | Michelle (monitor, more actively than before) | Check in mid-week, not just at close-out |
| **6** | **R6 — VAPT close-date conflict (16 vs 23 vs 26 Oct)** | Explicitly flagged in `risks.md` as likely moot once PS/DS approval lands — don't spend time resolving independently. | — | Resolves itself once PS/DS approval lands (Adrian's thread, I1) |
| ~~7~~ | ~~I4 — UAT read replica data quality (open-items #33)~~ | Transferred to Core team 2026-08-11 (same handoff as POCDEX Authorisation) — no longer Pathfinder's to track. | Core team | N/A |

**The pattern worth naming:** two of the top three active items (#1, #3) are "no owner or no confirmed date" gaps rather than technical blockers — the timeline's real risk right now is decision and ownership latency, not engineering capacity. Michelle's own active-ownership footprint on this board has narrowed since this morning: PS/DS (I1/D1) moved fully to Adrian, leaving WOG AD (#1), the VAPT date error (#2), and Go-Live/IDSC scoping (#3) as the three items she's actually driving.

---

## What This Means for the Rest of This Week

The PS/DS decision itself (I1/D1) is now Adrian's thread end-to-end — nothing further needed from Michelle there beyond staying informed. Two structural gaps remain independent of that decision and are still unraised as of 2026-08-11:
1. VAPT Round 2's date is broken (needs a board fix regardless of PS/DS outcome) — still hasn't been flagged to a board owner
2. Go-Live/IDSC clearance has no schedule at all, and could become the real critical path once VAPT closes

Recommend raising both this week — cheap to surface now, expensive to discover in October. WOG AD (rank #1) has its own dedicated Thursday follow-up already scheduled; these two don't yet have a day attached and risk sliding if not deliberately placed on the calendar.

---

*Generated: 2026-08-11, updated 2026-08-11 (PS/DS ownership corrected to Adrian; WOG AD promoted to rank #1; ranking renumbered)*
*Source: Jira board 22177 (MVP Timeline) live pull, open-items.md #39/#33, risks.md VAPT row, 2026-08-09 decision docs*
