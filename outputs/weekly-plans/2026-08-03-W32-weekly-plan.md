---
week: 2026-W32
week_start: 2026-08-03
week_end: 2026-08-07
quarter: Q2/Q3 2026
---

# Weekly Plan - Week of August 3, 2026

## TL;DR

- **Top 3:** Consolidate the Products/POCDEX data-trust risk into one tracked item → Confirm the CSC Integration Master Tracker landed and resolve the VAPT date conflict → Advance the Opportunity Taxonomy PRD past Planning Review
- **Meeting load:** Medium — spread across all five days now, not just Mon/Wed. Notable additions since first draft: a Tue cross-cluster lunch (HRPS/Cumulus/IT/CS — worth attending given Priority 1's data-trust thread runs through exactly these systems), a new Wed "R1 timeline planning" meeting, and Thu now carries both Squad Sync (moved) and Craft Hours (North Star Metric session) back-to-back.
- **Key milestone:** Get the data-trust risk consolidated before it surfaces a sixth time — this is the carry-over item with the clearest compounding cost if left another week.

---

## Strategic Context

**Quarter Goal:** Ship Sprint 7/8 scope toward the 11 Aug UAT start (Profile + Opportunities modules), with feature freeze at end of Sprint 8 (21 Aug). MVP now tracks to end-November (VAPT-driven, confirmed via Slack thread 23-24 Jul).

**North Star Progress:** Sprint 7 is active (28 Jul–9 Aug, confirmed live via Jira and this week's stale-check), goal now formally set in Jira: "Ship ringfenced opportunity listing and detail views, close out login/auth replacement, and CFT file-upload integration." Current state: 16 Done, 8 In Progress, 2 QA, 2 To Do, 24 Backlog — a real, working sprint, not the thin 4-chore-story shelf from two weeks ago.

**This Week's Focus:**
Last week's review flagged three carry-overs, and none of them are safe to let ride a second week. The data-trust risk in particular (Products/POCDEX reliability) was raised independently by four people across five meetings last week — every day it stays unconsolidated is another day someone else re-discovers it locally instead of once, centrally. The CSC tracker and VAPT date conflict are both concrete, checkable items — either they got resolved and need confirming, or they didn't and need pushing. With Tue/Thu/Fri comparatively clear this week, this is also the first real chance in a while to protect a genuine thinking block rather than let it get squeezed — see Protected Block below.

---

## Top 3 Priorities

### Priority 1: Consolidate the Products/POCDEX Data-Trust Risk ⭐ Most Important

**Why this matters:**
- Advances: Delivery confidence ahead of the 11 Aug UAT start — this risk directly threatens UAT's validity (fixture data vs. real Products data was never resolved)
- Impact: Right now the same root question ("can we trust the data moving HRPS→Cumulus→POCDEX→Products→Compass?") is being solved five separate times by five different people. Consolidating it into one owned artifact is the single highest-leverage move available this week — it's cheap to do and expensive to keep deferring.
- Risk if not done: A sixth independent rediscovery is likely, given the pattern from last week (Pow Hwee, Rama, Adrian, and Michelle each raised a version of this in a different meeting). Each rediscovery costs a meeting's worth of re-explaining and produces another local, disconnected fix.

**Success looks like:**
- A single tracked artifact exists (same shape as the CSC Integration Master Tracker) naming the risk, its owner, and current status — not five scattered mentions
- Adrian has confirmed (or denied) that his "data challenges" comment from PM Weekly was pointing at this same risk

**Key tasks:**
- [ ] Raise directly with Adrian at Monday's PM Weekly catch-up: is his "data challenges" flag the same Products/POCDEX risk surfacing elsewhere? (Est: 10 min, in-meeting)
- [ ] Build the consolidated tracker — requirement/question, owner, status, next action — modeled on the CSC tracker structure (Est: 45 min)
- [ ] Assign one owner (likely Rama, given he's the common thread across 4 of the 5 meetings that raised this) and get their explicit buy-in that they own it going forward (Est: 15 min)

**Dependencies:**
- Needs from: Adrian's confirmation at PM Weekly (Mon), Rama's agreement to own it
- Blocks: Nothing directly, but every week this stays unconsolidated increases the chance it resurfaces as a UAT-blocking surprise rather than a managed risk

**Linked to:**
- `outputs/meeting-notes/cleanup-2026-07-30-31.md` (where this pattern was first named)
- `outputs/decisions/2026-07-31-W31-csc-integration-alignment-retro.md` (the tracker template to reuse)

---

### Priority 2: Confirm CSC Tracker Landed and Resolve the VAPT Date Conflict

**Why this matters:**
- Advances: SSO/CSC alignment credibility and accurate go-live buffer planning
- Impact: The CSC Integration Master Tracker was due before Monday's alignment meeting per last week's retro — this week is the first chance to confirm it actually happened, not just that it was planned. Separately, `risks.md` and `open-items.md` #39 still say VAPT closes 16 Oct while Rama confirmed 23 Oct with NCS on 30 Jul — a live, unresolved conflict that directly affects whether the 19-23 Oct go-live approval window still has any buffer.
- Risk if not done: If the CSC tracker didn't actually get built, the exact confusion from two weeks ago repeats at the next CSC touchpoint. If the VAPT date conflict stays unresolved, go-live planning proceeds on a number that may already be wrong by a week.

**Success looks like:**
- Confirmed answer (not assumed) on whether the CSC tracker exists and is being used
- One authoritative VAPT closure date, with `risks.md` and `open-items.md` #39 both updated to match

**Key tasks:**
- [ ] Check with Rama whether Monday's CSC alignment meeting happened and whether the tracker was used (Est: 10 min)
- [ ] Get a direct answer from Rama on which VAPT date is correct (16 Oct vs. 23 Oct) and update both tracker files once confirmed (Est: 20 min)
- [ ] If 23 Oct is confirmed, reassess whether the 19-23 Oct go-live approval window still has adequate buffer (Est: 20 min)

**Dependencies:**
- Needs from: Rama, on both the tracker status and the VAPT date
- Blocks: Accurate go-live timeline communication to stakeholders

**Linked to:**
- `outputs/decisions/2026-07-31-W31-csc-integration-alignment-retro.md`
- `00-hub/risks.md`, `00-hub/open-items.md` #39 (both flagged, not yet resolved, per this week's `/stale-check`)

---

### Priority 3: Advance the Opportunity Taxonomy PRD Past Planning Review

**Why this matters:**
- Advances: Protects the existing Opportunities Listing MVP P0 investment — this PRD addresses the root cause (posting-time categorization) behind data quality issues that silently break officer-facing search
- Impact: The PRD is drafted but has real open questions blocking it from moving forward — notably the actual frequency of the null/unmapped job function bug, and whether this shares engineering surface area with Opportunities Listing or R1 Seamless Application
- Risk if not done: The PRD sits at Planning Review indefinitely without the data needed to size it properly, and the underlying data-quality problem keeps generating HR remediation overhead in the meantime

**Success looks like:**
- Baseline pulled from HR's existing remediation reports (frequency of categorization gaps) — this data already exists, just hasn't been quantified
- Confirmation from engineering on whether this shares scope with Opportunities Listing or R1 Seamless Application

**Key tasks:**
- [ ] Pull remediation report volume/frequency from HR to fill the impact-sizing gap (Est: 30 min)
- [ ] Confirm with engineering leads whether this shares surface area with Opportunities Listing or R1 (Est: 20 min — the previously-expected Wednesday Sprint Planning/Grooming slot isn't showing on the current calendar pull; raise at Wednesday's R1 timeline planning or Thursday's Squad Sync instead, whichever comes first)
- [ ] Settle the standardized taxonomy list (Jobs, Gigs, SJR, Secondments, STIPs) with agency-facing stakeholders (Est: 30 min)

**Dependencies:**
- Needs from: HR remediation data, engineering confirmation on scope overlap
- Blocks: Moving the PRD to XFN Kickoff

**Linked to:**
- `outputs/prds/2026-07-31-W31-opportunity-taxonomy-data-quality-planning-review.md`
- `context-library/prds/opportunities-listing.md`

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| Opportunity Taxonomy & Data Quality | Planning Review | XFN Kickoff (stretch) | HR remediation data + engineering scope confirmation (Priority 3) |
| R1 Design PRD | Scope approved, 3 design surfaces open | No change expected this week | Blocked on design capacity — not this week's forcing function |
| CareerCompass R1 (engineering) | XFN / job stories drafted | No change expected | Watch only — R1 discovery continues per last week's Squad Sync, regroup pending |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon | OTEP Squad Sync (9:30-10:30am) | R1/MVP/SSO alignment — likely follow-up on last week's data-trust and CSC threads | Y — bring Priority 1/2 questions |
| Mon | OTEP Team 2 stand-up (11-11:15am) | Daily sync | N |
| Mon | Design Review with BO (2-3pm) | Weekly design decisions | Y if R1 design surfaces are on the agenda |
| Mon | PM Weekly catchup (4-5pm) | Adrian's PM craft/data-challenges updates | Y — raise the data-trust consolidation question directly (Priority 1) |
| Tue | OTEP Team 2 stand-up (11-11:15am) | Daily sync | N |
| Tue | Cross-Cluster Move-In Lunch with DS(T) — IT, HRPS, Cumulus, CS (12-2pm) | Cross-agency relationship building — HRPS/Cumulus people in the room are the exact systems behind Priority 1's data-trust risk | Y — worth a few informal questions on data currency/handoff if the moment allows, not a formal ask |
| Wed | OTEP Team 2 stand-up (11-11:15am) | Daily sync | N |
| Wed | R1 timeline planning (2-3pm) | New this week — R1 sequencing, likely touches the Compass-side whitelisting carry-over | Y — bring the R1 carry-over item from last week |
| Wed | Product x BO Senior-level (3-4pm, bi-weekly) | Stakeholder alignment at senior level | Y — VAPT date conflict and CSC tracker status likely relevant here |
| Thu | OTEP Squad Sync (9:30-10:30am) | Moved from Mon slot — now recurring Thu | Y — Priority 1 tracker status check-in |
| Thu | Craft Hours 3 — North Star Metric or Not? (10-11am) | Craft development session | N unless directly relevant to Opportunity Taxonomy's success metrics (Priority 3) |
| Fri | Sprint Internal Demo (2:30-3:30pm) | Sprint 7 mid-sprint demo | Y — bring Opportunity Taxonomy scope-overlap confirmation if resolved by then |

**Meeting load:** ~8.75 hours / ~40 hour week = ~22% — still light, but the original Tue/Thu/Fri "open" read is now wrong. Thursday morning in particular is no longer free — Squad Sync moved there and Craft Hours sits right after it.

**Deep work capacity:** ~13-15 hours, now spread thinner across all five afternoons rather than concentrated in two full open days.

**Protected block this week:** ~~Thursday 10am-12pm~~ **now conflicts with Squad Sync (moved) and Craft Hours — no longer viable.** Re-set to **Friday 10am-12pm — no meetings** (Friday's only fixed commitment is the 2:30pm demo, leaving the morning genuinely clear). Use this slot for Priority 1's tracker-building. This is the second time this block has needed re-anchoring around a shifting calendar — worth checking the calendar again Thursday afternoon before treating Friday morning as locked.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** Adrian's "data challenges" comment turns out to be unrelated to the Products/POCDEX risk, leaving Priority 1 without the mandate it was hoping to borrow.
  - **Mitigation:** Build the tracker regardless — it's useful even without Adrian's explicit backing, just proceed on Michelle's own initiative if his answer is "no, something else."

- **Risk:** Rama is unavailable or the CSC/VAPT questions get deprioritized under his existing load (he was already carrying 12+ action items across 5 meetings last week).
  - **Mitigation:** These are quick, specific questions (yes/no on tracker existing, which VAPT date is correct) — frame them as 10-minute asks, not new work, to respect his capacity.

**Capacity concerns:**
- None significant this week — meeting load is genuinely lighter than the past several weeks. The risk is under-using the open Tue/Thu/Fri blocks on reactive work rather than the three priorities above.

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] Sprint 7 planning / emergency grooming outcome — last week's review flagged this as unconfirmed (no meeting notes evidenced whether it happened). **Resolved this week via direct Jira check:** Sprint 7 is confirmed active with a real, working shelf (16 Done, 8 In Progress, 2 QA, 2 To Do, 24 Backlog) — not the empty-shelf scenario feared. No further action needed; noting it here so it doesn't get re-flagged as still-open.
- [ ] Consolidate Products/POCDEX data-trust risk — now Priority 1
- [ ] Compass-side whitelisting ownership and scope — new work created two weeks ago when Priority 3 resolved as "both POCDEX and Compass, different layers." Not elevated to top-3 this week, but worth a status check if it surfaces in Monday's Squad Sync.
- [ ] Competency governance philosophy (expose-gaps vs. patch-gaps) — deferred to a joint session between Adrian Ang and Xian Zhang Guo, not yet scheduled as of last Friday. Watch for whether it gets scheduled this week.

**Learnings applied:**
- Last week's review flagged that naming a risk multiple times doesn't consolidate it — Priority 1 this week is built specifically to break that pattern with one artifact and one owner, not another mention.
- Last week's Priority 2/3 both resolved via a source that had more current information than expected (an async Slack thread) — worth checking async channels again this week before assuming the VAPT/CSC questions need fresh meetings to resolve.

---

## Success Metrics

**How we'll know this week was successful:**
1. The Products/POCDEX data-trust risk has one tracked artifact and one named owner, not five scattered mentions
2. Both the CSC tracker status and the VAPT date conflict have confirmed (not assumed) answers by Wednesday's senior-level session
3. The Opportunity Taxonomy PRD has real HR remediation data and an engineering scope confirmation, moving it toward XFN Kickoff

**Leading indicators to track:**
- Whether Adrian's Monday PM Weekly answer actually clarifies or muddies the data-trust consolidation question
- Whether Thursday's protected block actually happens as scheduled, or gets absorbed — this is the first real test of the new protected-time enforcement from this week's `/weekly-plan` update

---

## This Week's Strategic Skill

**Suggested:** `/decision-doc`

**Why this week:** The VAPT date conflict (16 Oct vs. 23 Oct) is exactly the kind of decision that benefits from the new pre-mortem step added to `/decision-doc` this week — it's a date stakeholders will hold the team to, hard to walk back once communicated, and a wrong assumption here directly compresses the go-live approval buffer. Worth running the resolution through `/decision-doc` rather than just updating a tracker line, so the reasoning and confidence level are documented, not just the final date.

**When to run:** After Rama confirms the correct VAPT date (targeting Monday or Tuesday), before Wednesday's Senior-level Product x BO session where it's likely to come up.

**What you'll get:** A documented decision on the VAPT closure date with rationale, confidence level, and — via the new pre-mortem step — a check on what else could still slip the go-live window before it's presented at the senior level.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, ceremonies, and this week's specific risks.*

| When | Skill | Why |
|------|-------|-----|
| Monday, before Squad Sync | `/meeting-prep` or quick review of last week's data-trust findings | Walk in ready to raise Priority 1 directly, not reactively |
| Monday, PM Weekly | `/meeting-notes` (after) | Capture Adrian's answer on "data challenges" precisely — this determines Priority 1's framing |
| Tuesday, before/after the cross-cluster lunch | `/meeting-notes` (after, if HRPS/Cumulus conversation touches data currency) | Informal signal on the data-trust question is still signal — worth capturing even from a lunch, not just formal meetings |
| Wednesday, before Senior-level Product x BO | `/decision-doc` ⚠️ Critical | Document the VAPT date resolution before it's presented at the senior level (see Strategic Skill above) |
| Wednesday or Thursday, whichever hits first | `/sprint-check` | Confirm Sprint 7's current shelf health mid-sprint — the previously-assumed Wednesday grooming slot isn't on the current calendar, so this needs a home wherever it fits |
| Friday, protected block (moved from Thu) | `/decision-doc` continuation or Priority 1 tracker build | This is the deep-work slot — treat it as sacred, not fillable |
| Daily | `/stale-check` ⚠️ Critical | Non-negotiable tracker hygiene — especially relevant this week given the VAPT date conflict is still open |
| Friday | `/weekly-review` ⚠️ Critical | Non-negotiable close of the week — check specifically whether the Friday protected block actually held, given it already had to be re-anchored once this week |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- ⚠️ Critical items create a delivery or communication risk if skipped, especially the VAPT decision-doc given it's headed to a senior-level audience Wednesday.
- This list is not exhaustive — it's the minimum set to prevent gaps given this week's specific context.

---

*Generated: 2026-08-01*
*Data sources: `outputs/weekly-reviews/2026-07-31-W31-weekly-review.md`, live Jira (Sprint 34621, pulled 2026-08-01), live Google Calendar (2026-08-03 to 2026-08-07), `00-hub/open-items.md`, `00-hub/risks.md`, `outputs/prds/2026-07-31-W31-opportunity-taxonomy-data-quality-planning-review.md`*
*Next: Run `/daily-plan` each morning to execute against this plan*
