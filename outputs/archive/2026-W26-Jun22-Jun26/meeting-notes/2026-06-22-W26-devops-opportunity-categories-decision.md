---
date: 2026-06-22
time: 10:00–10:30
attendees: Michelle, DevOps team
meeting_type: Decision confirmation — OTG opportunity type strategy
decision_impact: High — unblocks S5 grooming, changes PSFG path
updated: 2026-07-03 — WD/ITC follow-up meeting + post-meeting email superseded the "Open: Policy Intent on PSFG" section below. See addendum at end of file.
---

# Meeting Notes: Opportunity Categories in CareerCompass

**Date:** Monday, 22 June 2026, 10:00–10:30

**Attendees:** Michelle (OTEP PM), DevOps team

**Type:** Strategy confirmation — OTG opportunity type model for MVP

---

## Decision Made

### No STIP + Gig Merge in MVP

**Decision:** STIP and Gig remain separate categories in MVP. No display merge, no schema consolidation.

**Rationale:** Keep MVP simple. Business value of merging (cognitive load reduction) is low compared to execution risk and rework during sprint close.

**Impact:** 
- OTEP-86 (filter by type) proceeds as-is: separate STIP and Gig filter chips
- No schema changes needed
- No AC updates required for type consolidation
- Display labels stay: "STIP" and "Gig" (unchanged)

---

### PSFG Inclusion: Conditional on Policy + Programme Support

**Decision:** PSFG becomes a category in MVP **only if**:
1. Strong policy intent from leadership (explicit go/no-go)
2. PSFG programme is strongly supported (defined roadmap, committed resourcing)

**Current Status:** 🟡 Conditional — not in MVP by default

**Rationale:** PSFG has structural data gaps (competency tagging, FormSG coverage, participation tracking) documented in defensive brief. Including it MVP without programme commitment creates risk of low-quality catalogue entry and misleading pilot signals. Better to gate it on real stakeholder investment.

**Path Forward:** 
- Michelle to gauge policy intent from Jace/Adrian
- If strong intent: PSFG moves to "MVP consideration" with programme team owning data quality
- If no intent: PSFG defers to R1, surfaces as a capability but not a pilot feature

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Confirm with Jace/Adrian: Is PSFG a policy priority for MVP? | Michelle | By Wed 24 Jun | High |
| **Do NOT update OTEP-86 ACs** for merge (no change needed) | — | — | — |
| **Do NOT send recategorisation brief to Xian Zhang** | — | — | — |
| If PSFG is priority: loop programme team on data quality conditions | Michelle | After Jace check-in | Medium |
| Update I-018 (decision log): Revert merge decision, lock PSFG conditional gate | Michelle | By Wed | Medium |

---

## What Changed from Last Week's Plan

| What We Thought | What's Real | Impact |
|---|---|---|
| STIP+Gig merge in S5 | No merge; stay separate | OTEP-86 ACs are clean; no rework |
| PSFG deferred to R1 | PSFG conditional on policy intent | Could come to MVP if leadership prioritizes |
| 4-cat mapping needed for Xian Zhang validation | No mapping needed | Frees time; no stakeholder alignment session required |

---

## Unblocks

✅ **S5 grooming is unblocked** — no foundational category model changes to gate stories

✅ **OTEP-86 can close as-is** — no AC updates required; filter story is ready

✅ **3 hours of rework avoided** — no recategorisation design, no Xian Zhang validation cycle

---

## Open: Policy Intent on PSFG

**Question:** Does leadership see PSFG as a MVP feature or a R1 nice-to-have?

**Why it matters:** 
- If MVP: Programme team needs to address data quality gaps (competency tagging, FormSG links)
- If R1: Current gaps are acceptable; PSFG launches post-pilot when data is ready

**Next step:** Jace check-in Thu 25 Jun — confirm intent before sprint close

---

## Implications for This Week

**Good news:**
- S5 grooming readiness gate is cleared
- OTEP-86 can close without rework
- Frees time for KR docs + R1 epic draft

**Action for you:**
- Confirm PSFG policy intent with Jace (not an urgent ask, but good to know)
- Revert recategorisation brief (or mark as "deferred consideration")
- Update decision log I-018 to reflect "no merge in MVP"

---

*Impact: This simplifies MVP scope and clarifies PSFG's path based on policy intent rather than product convenience.*

---

## Addendum: WD/ITC Follow-Up (2026-07-03)

A follow-up meeting between WD and ITC, plus a post-meeting email from the WD/PSFG programme side, resolves the "Open: Policy Intent on PSFG" question above and adds new decisions, risks, and actions. This supersedes the open-question framing — PSFG is no longer a binary MVP-or-not question, it's a categorization and Release-1 timing question.

### What This Resolves

**PSFG is recognized as a legitimate development opportunity, not a special case.** WD's position: PSFG isn't a one-off — it began in 2023 as a movement to help officers build capabilities while serving the community. WD wants it treated the same as STIPs, Gigs, and secondments — as a standalone category, not folded into an existing one.

**This was never a rejection.** The Career Compass team's hesitation is about categorization and UX, not whether PSFG belongs. The specific concerns: does PSFG warrant its own category, is there enough volume to justify it, and would a sparsely-populated category hurt the user experience.

**MVP stays unchanged.** No new PSFG category for MVP — the team is holding the line on avoiding added complexity this close to launch.

**Release 1 is now the live conversation, not MVP.** No final decision yet, but PSFG as a standalone R1 category is actively being explored, contingent on the conditions below being met.

**Competency tagging is confirmed non-negotiable and confirmed feasible.** If PSFG surfaces in Career Compass, every opportunity must tie to competencies (particularly OCCs) — and per the post-meeting note, **WD has confirmed all PSFG opportunities can be tagged against OCCs.** This closes the data-quality gap flagged in the original defensive brief (competency tagging was listed as a structural gap; that gap is now resolved from WD's side).

**Volume commitment provided.** Per WD's post-meeting note: expect at least 3 evergreen PSFG opportunities plus at least 10 total opportunities over the course of a year, with natural peaks and troughs in curation/launch cadence. This directly answers Risk 1 below with a concrete (if modest) number — worth stress-testing whether 3 evergreen + 10/year is enough to avoid the "sparse category" UX problem before committing to a standalone category.

### New Decisions

1. **WD's formal position: PSFG should be a standalone category, similar to STIPs and Gigs.** (Confirms what was "Open" in this file's original Action Items table.)
2. **Category governance principle remains unresolved and will resurface.** The meeting exposed a deeper, unanswered product question: should Career Compass organize opportunities by programme/policy type (WD's preferred approach — PSFG, Gigs, STIPs as parallel categories), or by user need (duration, commitment, career outcome)? No resolution. Flagging this as a recurring architectural question, not a one-off PSFG decision — it will likely resurface whenever the next programme (e.g., PSLF) asks for its own category.
3. **Categories will expand over time, but only through PS/DS-gated governance.** WD/ITC confirmed: new categories require policy consultation + PS/DS approval; removing a category also requires management sign-off first, "even if there are strong reasons for doing so." This is a governance commitment worth citing if category-proliferation concerns come up later.

### New Risks

| Risk | Detail | Rating |
|---|---|---|
| **Sparse PSFG category** | If only a small number of PSFG opportunities stay active, a dedicated category could look underutilized and weaken UX. Partially mitigated by WD's volume commitment (3 evergreen + 10/year) but not fully resolved — worth validating against actual OTG-era PSFG cadence before Release 1 commitment. | Medium |
| **Future category proliferation** | Other programmes (e.g. PSLF) may make the same standalone-category ask. Without a clear governance principle beyond "PS/DS approval required," Career Compass risks drifting toward programme-driven categorization instead of user-driven — same tension as decision #2 above. | Medium-High |
| **OTG → Career Compass transition confusion** | Open questions on where opportunities get posted during the transition, what agencies should use, and how outreach/comms work while both OTG and Career Compass coexist. No owner has answered this yet. | Medium |

### New Action Items

| Task | Owner | Status / Note |
|---|---|---|
| Confirm WD's formal position on standalone PSFG category | Diana / WD | ✅ Done — WD confirmed: PSFG should be a standalone category, similar to STIPs and Gigs |
| Demonstrate PSFG can sustain sufficient opportunity volume | Diana / WD | ✅ Done — at least 3 evergreen opportunities + 10 total/year, with acknowledged peaks and troughs |
| Ensure all PSFG opportunities tagged with competencies (especially OCCs) | Diana / WD | ✅ Done — WD confirmed all PSFG opportunities can be tagged against OCCs |
| Align with Jacky and stakeholders on preferred categorization approach for PSFG | Michelle / Christopher | 🔴 Open — no due date given |
| Send meeting summary and document agreed next steps | Michelle | 🔴 Open — no due date given |
| Continue discussion on whether PSFG belongs in Release 1 and what criteria must be met | Career Compass team + WD | 🔴 Open, ongoing — no due date given |
| Clarify OTG-to-Career Compass transition and comms approach for agencies/officers | WD / Xian Zhang team | 🔴 Open — no due date given |

**Note:** 4 of 7 action items have no due date. Given this directly affects R1 scoping (Epic A — Opportunity Creation, PSFG in/out per the R1 PRD's Open Question #1), recommend timeboxing at minimum the categorization-alignment task (Michelle/Christopher) and the R1-criteria discussion, since both gate the R1 PRD's still-open PSFG question.

### Cross-Reference

- **R1 PRD Open Question #1** ([2026-06-25-W26-careercompass-r1-xfn-kickoff.md](../../../prds/2026-06-25-W26-careercompass-r1-xfn-kickoff.md)) has been updated to reflect this addendum: WD has verbally positioned PSFG as a standalone category with volume + tagging commitments made, but the category-vs-user-need governance principle is still unresolved, and **formal policy intent still needs to be confirmed by WD** — the standalone-category stance from this meeting/email hasn't yet been formalized as an official sign-off.
- **Original defensive brief** (referenced in this file's initial "Rationale" for conditional gating) flagged competency tagging, FormSG coverage, and participation tracking as structural gaps. Competency tagging is now resolved per WD's confirmation above; FormSG coverage and participation tracking are not mentioned in this follow-up and should be checked before treating the original gap list as closed.

---

*Addendum source: Post-meeting email from WD/PSFG programme lead, following a WD–ITC discussion, 2026-07-03.*
