---
week: 2026-W36
week_start: 2026-08-31
week_end: 2026-09-04
quarter: Q3 2026
---

# Weekly Review - Week of August 31, 2026

## TL;DR

The week's Priority 1 — landing the WD employment-lifecycle discussion so engineering could size the work before VAPT crunch — got overtaken by a bigger call on Wednesday: employment-lifecycle handling is **out of MVP scope entirely**. Michelle and Jace aligned that MVP is the window to *learn* how the new POCDEX API data behaves in production, not to build the re-derivation and exception machinery against assumptions. So a week of test-case rationalisation, OTG operational mapping, and BD-decision scheduling produced real artefacts, but the epic they were feeding moved to R1. The pivot is the right one, and it happened fast — from "commit to 50 of Huiting's 118 cases" (Mon) to "post-MVP" (Wed). Priority 2 (code freeze) landed cleanly: freeze confirmed for Wednesday, technical fixes through Friday. Priority 3 (data classification + Day-2 draft) partly happened, folded into the pre-go-live readiness work that is now the actual PM focus. The open risk: Huiting's testers are still working to a 19 Oct UAT date that no longer exists, and Adrian's formal sign-off on the scope cut was still pending as of Friday.

---

## Top 3 Priorities Review

### Priority 1: Land Tuesday's WD Employment-Lifecycle Discussion

**Planned:** Walk 11–19 representative test cases through the BOs (~70% coverage), frame and validate 3 hypotheses, present AGD/MTI/MDDI common-user-scheme findings — all to unblock engineering sizing before VAPT remediation locks capacity.

**Actual:** The discussion happened (1 Sep grooming, 2 Sep OTG operational review, 2 Sep POCDEX DO sync) and produced the artefacts. Then on 3 Sep the Jace check-in reframed the whole thing: employment-lifecycle handling is **out of MVP**. The prep work was real and is not wasted — it now feeds the R1 epic — but the sizing-before-VAPT goal is moot because the work is no longer on the MVP critical path.

**What got produced:**
- ✅ AGD/MTI/MDDI CUS-scheme findings ([analysis](../analyses/2026-08-31-W36-agd-mti-mddi-cus-scheme-findings.md)) — CUS-Deploy = Secondment, CUS-AO = Transfer; no new scheme rules, folds into existing Mobility coverage
- ✅ Test-case reconciliation resolved: 118 (Huiting's workbook) → 82 (Compass P1) → ~41 rows / ~11–18 scenarios (BO jam cut). Not three competing scopes — nested. ([prioritised test rows](../analyses/2026-09-01-W36-prioritised-test-rows.md))
- ✅ OTG operational incidents mapped to Compass test cases (email collisions, duplicates, multi-hatting, secondments, NPL) — [movement](../analyses/2026-09-02-W36-movement-uat-test-cases-compass.md), [identity](../analyses/2026-09-02-W36-identity-uat-test-cases-compass.md) UAT case sets
- ✅ Identity direction landed: **NRIC-based resolution + profile unification** (not email, not POCDEX-UID-only — MINDEF/DSTA use Malaysian ICs), confirmed across the squad sync and the OTG review
- ✅ Employment-profile-changes epic one-pager ([PRD](../prds/2026-09-03-W36-employment-profile-changes-epic-one-pager.md))

**Status:** 🟡 Partial — the discussion landed and the artefacts exist, but the priority's actual purpose (unblock MVP sizing) was overtaken by the scope cut.

**Learning:** The W36 plan was built specifically from "what's on the critical path, not carried-over tracking items" because four prior weeks got displaced by unplanned work. This week it got displaced again — but by a *decision to descope*, not by a fire. That's a different and healthier kind of displacement. The signal worth keeping: when a workstream keeps generating "we need another meeting to prioritise" (1 Sep session ended exactly there), that is often the system telling you the scope doesn't fit, and the right move is to cut it, not to schedule the next meeting.

---

### Priority 2: Confirm Code Freeze + Support Overall UAT Sign-Off

**Planned:** Explicitly confirm the code freeze landed (not assume it because SSO closed), support Imelda's overall UAT sign-off email, confirm Sprint 9's actual scope.

**Actual:** Freeze confirmed and announced by Rama at the 1 Sep squad sync — **product changes freeze Wednesday, technical fixes allowed until Friday, future MVP changes need approval**. Clean confirmation, not an assumption.

**Tasks:**
- ✅ Code freeze status confirmed directly (squad sync, Rama announced)
- 🟡 Overall UAT sign-off — SSO resolved 28 Aug, BO signed off; Imelda's closure email status not explicitly tracked in this week's notes
- 🟡 Sprint 9 scope — VAPT reporting structure and timeline got fully reconciled via Jobelle's 6-report schedule (7–25 Sep Compass/CIE assessment, 9–22 Sep POCDEX, ~7 Nov overall sign-off), but the 20 orphaned Sprint 8 tickets' destination still isn't confirmed

**Status:** ✅ Complete on the core ask (freeze confirmed). Sprint 9 ticket housekeeping still open.

**Learning:** The freeze had a clear owner and a clear announcement this time. The gap flagged in the plan — "approval authority for future MVP changes is undefined" — is still undefined (logged as a risk in the squad sync notes).

---

### Priority 3: Data Classification Inventory + Day-2 Support Model First Draft

**Planned:** Start the field-level data classification inventory (POCDEX / HRPS / Compass-generated / user-generated); draft the Day-2 operating model and SLA as a discussion starter.

**Actual:** Partially done and partly superseded. The CareerCompass risk work happened — [stage 1 scope/asset inventory](../analyses/2026-09-03-W36-careercompass-stage1-scope-asset-inventory.md), [stage 2 risk identification](../analyses/2026-09-03-W36-careercompass-stage2-risk-identification.md), [data security risk register](../analyses/2026-09-03-W36-careercompass-data-security-risk-register.md), [project risk register](../analyses/2026-09-03-W36-careercompass-project-risk-register.md), [consolidated MVP RAID](../analyses/2026-09-03-W36-mvp-raid-consolidated.md), [MVP readiness gates](../analyses/2026-09-03-W36-mvp-readiness-gates.md). The Jace check-in then redirected PM focus explicitly onto pre-go-live readiness, so this priority effectively expanded into the week's new centre of gravity rather than staying a side draft.

**Status:** 🟡 Partial on the literal deliverables (field-level classification inventory not clearly complete), but the broader intent — give leadership something concrete on readiness instead of a blank operating model — is well ahead of where the plan expected.

**Learning:** The plan predicted this priority was "the one most likely to get compressed" against Priority 1. The opposite happened — Priority 1 got descoped and this became the main work. Worth noting the plan's own capacity forecast was inverted by a scope decision it didn't anticipate.

---

## Key Decisions Made

1. **Employment-lifecycle change handling is out of MVP scope** (3 Sep, Jace check-in). MVP becomes the observation window to learn how the new POCDEX API data behaves in production. Minimum MVP deliverable drops to: BOs can *see* what the data errors are (email collisions, missing mappings, stale transfers), not automated handling. Reverses the end-September dev-freeze / 19 Oct UAT assumption. Michelle + Jace aligned; **Adrian to confirm** (was still pending Friday).

2. **NRIC-based identity resolution + profile unification** (1–2 Sep, squad sync + OTG review). Key on NRIC, not email or individual officer IDs. Resolve officer → retrieve all active officer IDs for that NRIC → build a consolidated employment + competency view. Rules out replicating OTG's user-selects-which-profile model. Directional, not a source-of-truth spec.

3. **Product/change freeze confirmed** (1 Sep, squad sync). Product changes freeze Wednesday, technical fixes until Friday, future MVP changes need approval (approval authority still undefined).

4. **Compass's employment-change scope narrows to four data domains** (31 Aug, Adrian sync): job ID, job family, job function, competency changes. Position-ID-only holding patterns (no-pay-leave parking positions) explicitly out — "important for product/HR, not important for Compass." *(Note: superseded three days later by decision 1, which cut the whole workstream from MVP — but the four-domain framing carries into the R1 epic.)*

5. **"Last modified date" business rule accepted as a working requirement** (31 Aug, Adrian sync; reconfirmed 1 Sep squad sync). Decoupled from test-case definition. Resolves the R11 blocker (open item #60) that three prior documents flagged as unowned — pending Rama's explicit sign-off.

6. **VAPT reporting = 6 reports, POCDEX staged separately** (31 Aug walkthrough). Career Compass 3 (Cloud/Web/API) + CIE 1 + POCDEX 2. Jobelle's schedule is now the authoritative timeline: Compass/CIE assessment 7–25 Sep, POCDEX 9–22 Sep, overall sign-off ~7 Nov.

7. **UAT accountability model** (2 Sep, POCDEX DO sync). WD does application-level UAT, Compass ITC validates API outputs, **Compass PSD staff provide the sign-off POCDEX needs — not vendors**. Huiting was explicit that API validation must be accountable to PSD personnel.

8. **CMM direction: no full standardisation** (31 Aug architecture forum, emerging not finalised). Hybrid model — central competency "bank" + agency-specific parent-child extensions; CMM as enabling structure, not enforcement gate. Co-creation workshops Sept–Oct. BO share-out 15 Sep.

Worth a standalone `/decision-doc`: **#1 (employment-lifecycle out of MVP)** — this reverses a tracked assumption, has an external stakeholder (Huiting's testers) still working to the old date, and needs Adrian's confirmation on record.

---

## Top 3 Learnings

**1. A descope is a legitimate way for a priority to "fail" — and a good one.** Five straight weeks (W32–W36) the plan's Priority 1 got displaced. W32–W35 it was fires. This week it was a deliberate call that the scope didn't fit 2.5 sprints, made quickly once the "we need another meeting to prioritise" signal was clear. Change to make: when a scoping workstream generates a third consecutive "let's meet again to decide," treat that as evidence the scope is wrong, and put "cut it" on the table alongside "prioritise it."

**2. The week's capacity forecast was inverted by a decision the plan didn't see coming.** The plan said Priority 3 would get compressed against Priority 1. Instead Priority 1 was cut and Priority 3 became the main work. The plan reasoned well about *effort contention* but had no mechanism for *"what if we decide not to do Priority 1 at all."* Weekly plans could carry one line — "what would make us drop this priority entirely?" — per top item.

**3. Artefacts outlived the goal that produced them.** The test-case rationalisation, OTG mapping, and identity direction were built to unblock MVP sizing. That goal evaporated, but the artefacts are now the starting point for the R1 epic. This is the second time recently (CAM deferral) that in-flight work got redirected rather than dropped. Keep doing this — when descoping, explicitly name where the completed work lands so it doesn't read as wasted.

---

## Next Week Preview (W37)

### Top 3 Priorities (Draft)

1. **Get Adrian's formal sign-off on the employment-lifecycle scope cut, and align on resetting Huiting's 19 Oct UAT expectation.** As of Friday this was still an informal Michelle+Jace agreement. Downstream testers are working to a date that no longer exists. This is the single most time-sensitive open item.
2. **Scope the minimum MVP deliverable — "BOs can see what the data errors are."** Decision 1 defined the bar; nobody has defined what the error view is, who builds it, or where it lives. Needs a concrete spec before it can be sized.
3. **Continue the pre-go-live readiness work as the primary PM focus.** The RAID, risk registers, and readiness gates exist as of 3 Sep. Next step is Jace's meeting to assign a POC and walk the pre-go-live checklist + risk assessment. Drive that to named owners per gate.

> Run `/weekly-plan` Monday to formalise these.

### Key Meetings Next Week

- **15 Sep:** CMM discovery BO share-out (not W37, but prep starts) — internal POV needs to be defensible before co-creation
- **From 7 Sep:** VAPT assessment window opens (Compass/CIE); daily tracking with Jobelle continues
- **Jace's pre-go-live readiness meeting** — POC assignment + checklist walkthrough (date TBC, flagged in the 3 Sep check-in)

### Items to Unblock

| Item | Blocked Since | Blocked By | Action Needed |
|------|---------------|------------|---------------|
| Employment-lifecycle scope cut — formal sign-off | 3 Sep | Adrian Ang not yet confirmed | Catch Adrian W37; get it on record; align the Huiting 19 Oct reset |
| Minimum MVP error-view — scope undefined | 3 Sep | No spec, no owner | Define what/who/where before it can be sized |
| Day-2 support model sub-component ownership | 28 Aug (W35) | Rama / Adrian Lo — L1 triage, mailbox, roster, engineer rotation unowned | Get a named owner per sub-component |
| Sprint 8's 20 orphaned tickets | Sprint 8 close (23 Aug) | Sprint 9 scope answer | Confirm what Sprint 9 covers now that it's open (6–20 Sep), then route the tickets |
| R1 artefacts #59 status | ~4 weeks | Design lead — no status in 4 consecutive weeks | Delegate the chase or drop it as a standing priority — the same 15-min ask keeps not happening |
| POCDEX "last modified date" (R11) — Rama sign-off | 25 Aug+ | Rama's explicit confirmation | Accepted as a requirement per Adrian; needs Rama to formally close it |

**Priority unblocks:**
1. Adrian's sign-off on the scope cut + the Huiting date reset — everything about W37's employment-profile work depends on the descope being real and communicated.
2. Define the minimum MVP error-view so it can enter a sprint.

---

## Metrics to Monitor Next Week

- **VAPT assessment progress** (Compass/CIE window 7–25 Sep) — daily tracking with Jobelle; watch for the interim-report slip that already moved from ~18 Sep to 25 Sep in the squad sync
- **AI IDSC approval** — expected ~1 Sep per the W36 plan; hard launch blocker with no fallback if it slips. Confirm status early W37.
- **NCS PO issuance** — W36 plan had it due 4 Sep; confirm it landed

---

*Generated: 2026-09-04.*
*Data sources: W36 weekly plan, 5 daily plans, 11 meeting notes, 19 analyses, 1 decision doc, 2 PRDs/roadmaps, git log.*
*Next: `/stale-check` (trackers most out of date right now — this review just surfaced what changed), then `/weekly-plan` Monday.*
