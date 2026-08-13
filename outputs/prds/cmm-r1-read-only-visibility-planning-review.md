# CMM — R1 Read-Only Competency Visibility

**Stage:** Team Kickoff

**Last Updated:** 2026-08-11

**Owner:** Imelda MO

**Status:** Draft

**Stage note (revised after multi-perspective review, 2026-08-11):** Downgraded from Planning Review to Team Kickoff. Two foundational assumptions — CDG/WD governance validity and whether existing data contains confidential competencies — are both unconfirmed. Planning Review implied more settled ground than the content supports. Re-promote to Planning Review once both are resolved (see Open Questions).

---

## Hypothesis

**If we** give officers and BOs a read-only, consolidated view of existing competency data (sourced from the current bank, no cleanup, no editing),
**then** downstream recommendation logic and role-mapping features can consume a single consistent source instead of fragmented Excel references,
**because** the July 30 technical walkthrough confirmed recommendation logic is "largely understood and agreed," but delivery risk sits in "data quality, master-data alignment, and the migration away from spreadsheet-based competency references."

**Supporting Evidence:**
- 320k competency records currently need cleanup, and agencies have shown reluctance to do this manually (R1 Discovery Planning, 2026-07-21)
- Role profile data quality issues — multi-value fields, blanks, grade info leaking into labels — flagged as a precondition for scaling any recommendation feature (CMM Governance Squad Sync, 2026-07-07)
- Team explicitly decided (R1 Timeline Planning, 2026-08-06) that competency cleanup itself is out of R1 scope, and the existing competency bank stays in place — this PRD is scoped to the visibility layer only, not a rebuild

---

## Strategic Fit

**Why this? Why now?**

R1's opportunity capabilities and agency onboarding were confirmed as the team's highest priority at the Aug 6 R1 Timeline Planning session, with CMM and CIEJD explicitly descoped from full R1 build. This PRD is the minimum viable slice of CMM that R1 actually needs: a read-only view so officers and BOs aren't blocked by scattered spreadsheets while the bigger CMM governance question (what CMM is *for* — enforce, facilitate, or trace) stays open for discovery to resolve.

**Why this doesn't contradict the Aug 6 descoping decision:** The Aug 6 decision descoped CMM *build* work — governance workflows, cleanup tooling, read/write capability, the ~16-man-week effort Adrian flagged to Mark/Gek Khiang. This PRD is deliberately smaller than that: a display layer over data that already exists, with zero governance or cleanup logic. If this still competes meaningfully with R1's stated top priority (opportunity capabilities, agency onboarding) once scoped, the answer is to cut this PRD, not to quietly build full CMM under a "thin slice" label. Confirm capacity impact with Adrian before XFN Kickoff — this defense is asserted here but not yet tested against actual team bandwidth.

**Impact Sizing:**

Full funnel/revenue sizing not yet run — this PRD is scoped narrowly enough (read-only, existing data, no new ingestion) that impact is primarily *risk reduction* (avoiding rework, avoiding scaling data-quality problems) rather than a growth metric. Recommend `/impact-sizing` once discovery confirms which agencies and record volumes are actually in scope for R1's read-only view.

**Confidence Assessment:**

| Assumption | Confidence | Risk Level | De-risking Action |
|------------|------------|------------|-------------------|
| Existing competency bank data is usable as-is for a read-only view, without cleanup | Medium | Data quality issues (multi-value fields, blanks, grade leakage) may make raw data confusing even in read-only form | Confirm with Imelda/discovery whether a light display-layer normalization (not a data cleanup) is needed before this ships |
| Discovery will converge on scope questions in time for this PRD to move to XFN Kickoff | Low-Medium | Discovery has no committed completion date as of 2026-08-06 | Track against the Competency Ownership Decision Paper (assigned 2026-08-06, still undated) |
| Governance sign-off on the canonical competency list (CDG/WD) is still valid | **Low — flagged contradiction** | Marked "resolved, outside team control" at 9 Jul SteerCo, but reopened as an unresolved ownership question at the 6 Aug meeting with no reference to a CDG/WD decision | Confirm directly with CDG/WD whether their 9 Jul sign-off still stands before treating source data as settled |

**Alternatives Considered:**
- **Full CMM build (governance + cleanup + read/write)** — Not doing because team explicitly descoped this from R1 (Aug 6 decision) given CMM/CIEJD scope pressure and unresolved governance ownership
- **Do nothing, keep Excel references for R1** — Not doing because this directly blocks the recommendation logic already agreed in the July 30 walkthrough, and compounds the 320k-record cleanup problem the longer it's deferred

---

## Non-Goals

What we are explicitly NOT doing in this R1 slice:
- **Competency data cleanup** — Out of scope per Aug 6 decision; existing bank stays in place as-is, warts included
- **Write/edit capability for officers, BOs, or agencies** — This is read-only visibility only; no governance workflow, no agency self-maintenance
- **Enforcing standardisation across agencies** — The core "what is CMM for" question (enforce vs. facilitate vs. traceability) is unresolved; this PRD doesn't presume an answer
- **AI-based competency tagging or inference** — Explicitly out of scope per the CMM Governance Squad Sync (2026-07-07); revisit only once the visibility layer is stable
- **High-risk workforce / confidential competency handling** — Flagged as a live open question in the 2026-08-11 Design Review (system classification implications); excluded from this PRD until Business Owners/Product Leadership answer the three scope questions below

**Trade-offs Made:**
- Shipping a visibility-only layer means officers/BOs still can't fix bad data they see — accepted because attempting cleanup within R1 risks repeating the scope-creep pattern already flagged twice (6 Jul SteerCo, 6 Aug R1 planning)

---

## Success Metrics

**Primary Metric:** % of officers/BOs using the CMM read-only view instead of Excel-based competency references, when looking up role/competency data
- Current: 0% (feature doesn't exist)
- Target: TBD — needs discovery input on realistic adoption baseline
- Timeline: TBD, pending discovery completion (see Open Questions)

**Guardrail Metrics:**
- No increase in support/escalation tickets related to competency data confusion (would indicate the display layer surfaces existing data-quality issues worse than the status quo)

**Kill Criteria:**
- If discovery concludes CMM's core purpose (enforce/facilitate/trace) materially changes what "read-only visibility" should even show, pause this PRD and re-scope rather than ship a view that doesn't match the resolved purpose.
- **If CDG/WD confirms the 9 Jul governance sign-off is no longer valid** (or was never actually granted), pause this PRD entirely — the premise that source data is "existing and governed" no longer holds, and scope needs to be re-derived from scratch.
- **If the Data Office confirms the existing competency bank contains confidential agency-specific data**, pause and do not ship any view until a classification-safe filtering approach is designed — do not treat this as a launch-and-patch situation given the system-classification implications flagged in the 2026-08-11 Design Review.

---

## Solution Overview

**User Flow:**
1. Officer or BO navigates to the competency view for a role/agency
2. System displays existing competency bank data as-is (no editing controls)
3. User can view but not modify — any correction needs to go through an out-of-band process (TBD, not defined in this PRD)

**Key Interactions:**
- View-only display of competency records sourced from the existing bank
- No search/filter complexity assumed yet — scope TBD pending discovery on actual usage patterns

**Edge Cases:**
- **Data-quality display, default committed (resolved after multi-perspective review):** blank fields are hidden rather than shown empty; multi-value fields render as a comma-separated list rather than raw/truncated. This is *display normalization only* — no underlying data changes, consistent with the "no cleanup" non-goal. Accepting this as the default rather than leaving it open, since an undefined default was in direct tension with the "no increase in support tickets" guardrail metric. Revisit with real user testing once a prototype exists.
- **Confidential/agency-specific competencies — detection mechanism does not yet exist.** The non-goal says these should be excluded, but the existing bank has no confirmed confidentiality flag to filter on today. This is not yet an edge case with a defined handling rule — it's an open scoping question (see Open Questions) that blocks XFN Kickoff until resolved. Default posture until then: **do not ship any view of agency-specific competency data**, only WOG-common competencies, until the Data Office confirms what (if anything) in the existing bank needs to be excluded.

**Data source (needs confirmation before XFN Kickoff):** Not yet specified whether this reads directly from the competency bank's database, consumes an API Imelda's team owns, or works from a batch export. This materially changes the engineering estimate and who needs to be in the XFN Kickoff room — flagged as a blocking open question, not a minor detail.

**Mockup/Prototype:** Not yet created — recommend `/napkin-sketch` now, even before discovery fully completes, specifically to force a decision on the search/browse interaction (how does a user find the role/agency they're looking for — this is currently undefined, not just under-specified, and is more fundamental than field-level display questions)

---

## Risks and Recovery

| Risk | Detection | Fallback | Kill Switch |
|------|-----------|----------|-------------|
| CDG/WD governance sign-off on source data is not actually valid (contradiction flagged 2026-08-11) | Confirm directly with CDG/WD before build starts | Treat source data as unconfirmed; do not present it as "governed" to users | **PRD paused entirely — see Kill Criteria above** |
| Confidential competency classification issue (raised in 2026-08-11 Design Review) turns out to affect the existing bank, not just future agency-specific data | Data Office / Product Leadership confirm classification scope | Delay ship until classification impact is understood — do not display data that may need higher classification handling | **PRD paused entirely — see Kill Criteria above** |
| Discovery doesn't converge on "what CMM is for" in time, and this read-only view ships against an assumption that later proves wrong | Track against Competency Ownership Decision Paper completion | Treat this PRD's scope as provisional; re-review before XFN Kickoff | Imelda |
| No confirmed data source/API contract exists for the read-only view | Confirm with Imelda's team before estimating engineering effort | Cannot move to XFN Kickoff without this — treat as blocking, not a nice-to-have | Imelda |
| This PRD is quietly rebuilding CMM under a "thin slice" label, competing with R1's stated top priority | Confirm capacity impact with Adrian before XFN Kickoff | If capacity conflict is real, cut this PRD rather than proceed | Adrian / Michelle |

---

## Open Questions

- [ ] **Blocking:** Is the 9 Jul SteerCo governance sign-off (CDG/WD) on competency source data still valid, or was it effectively reopened by the 6 Aug meeting? - @Imelda MO / @Michelle Yip
- [ ] **Blocking:** Does the existing competency bank contain any agency-specific data that may need confidential classification (per 2026-08-11 Design Review)? No detection mechanism exists today — see Solution Overview. - @Data Office
- [ ] **Blocking for XFN Kickoff:** What's the actual data source — direct DB read, API, or batch export? - @Imelda MO's team
- [ ] **Blocking for XFN Kickoff:** Does this compete with R1's stated top priority (opportunity capabilities, agency onboarding) for engineering capacity? - @Adrian / @Michelle Yip
- [ ] What's a realistic target sprint for this once discovery completes? - @Imelda MO, pending Competency Ownership Decision Paper
- [ ] Who is the actual owner of the "what is CMM for" question — Compass, HR systems, or Products/UHDP? Still unresolved as of 2026-08-06/08-11 - @Business Owners / Product Leadership
- [ ] Does this need WCAG accessibility compliance given the government/WOG context? Not yet addressed. - @Design

---

## Appendix

**Source context:** This PRD synthesizes decisions and open questions from:
- CMM Governance Squad Sync, 2026-07-07 (proposed architecture, "what is CMM for" question first raised)
- R1 Discovery Planning, 2026-07-21 ("Do we even need a CMM?" reframing, 320k record scale)
- Role Competencies Technical Walkthrough, 2026-07-30 (recommendation logic confirmed, CMM migration flagged as future risk)
- R1 Timeline Planning, 2026-08-06 (CMM/CIEJD descoped from R1, cleanup out of scope, bank stays as-is)
- Design Review — CMM, 2026-08-11 (confidential competency classification risk surfaced)

**Known contradiction (flag for resolution before XFN Kickoff):** July 9 SteerCo marked competency governance sign-off "resolved" (CDG/WD, outside team control). The Aug 6 meeting reopened the identical ownership question with no reference to that resolution. This PRD treats source-data governance as **unconfirmed** until directly clarified — do not assume the July resolution still holds.

**Evidence gap (flagged in multi-perspective review, 2026-08-11):** This PRD's hypothesis is inferred from process artifacts (technical walkthrough, discovery planning notes) rather than direct user demand — there's no officer/BO quote or frequency data establishing that people actually want a consolidated view versus their current workaround. Recommend a lightweight discovery question specifically validating this before XFN Kickoff, not just assuming the need.

**Multi-perspective review completed 2026-08-11** (engineer, designer, executive, skeptic). Key changes made: stage downgraded to Team Kickoff, explicit kill criteria added for governance/classification risks, "why not full CMM" defense added, data-quality display default committed, data source and confidentiality-detection gaps flagged as blocking for XFN Kickoff, accessibility question added.
