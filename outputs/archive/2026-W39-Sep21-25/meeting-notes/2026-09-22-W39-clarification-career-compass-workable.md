---
date: 2026-09-22
week: 2026-W39
type: meeting-notes
meeting_type: Cross-team discovery session (HI/OGP + Career Compass)
attendees: Rama Moorthy, Michelle Yip, Adrian Ang, HI/OGP team (Workable)
topic: Clarification with Career Compass and Workable (10:00am)
---

# Meeting Notes: Clarification with Career Compass and Workable

**Date:** 2026-09-22, 10:00am

**Attendees:** Rama Moorthy, Michelle Yip, Adrian Ang, HI/OGP team

**Type:** Discovery session — Workable's fit as a possible future ATS for Internal Jobs and SJR

**Michelle's assessment:** positive exploratory session, no final decision.

---

## Summary

Positive, substantive discovery session on Workable's capabilities. The team separated three opportunity types by complexity — STIPs/Gigs (low), Internal Jobs (medium), SJR (high) — and found Workable aligns reasonably well with Internal Jobs but much less with SJR. No target-state architecture was chosen; five options remain on the table. **Biggest takeaway, per Michelle: SJR is not really an ATS problem, it's a workflow orchestration and governance problem that happens to touch an ATS.**

**Important context this doc must flag clearly:** the R1 risk register states Workable was **abandoned as the R1 architecture direction on 18 Sep 2026**, in favor of HRPS/Cumulus discovery. This meeting does not reverse that — it's a **separate, longer-horizon exploration of Workable as a possible future ATS for Internal Jobs/SJR**, distinct from R1's own architecture. The two should not be conflated. See Reconciliation Required, below.

---

## What Went Well

1. **The team stopped forcing one model onto three different problems.** STIPs/Gigs, Internal Jobs, and SJR got treated as genuinely different use cases:

   | Opportunity Type | Complexity |
   |---|---|
   | STIPs/Gigs | Low |
   | Internal Jobs | Medium |
   | SJR | High |

   Workable fits Internal Jobs reasonably well, much less well for SJR. This prevents a false "one solution solves everything" assumption.

2. **Workable's actual capabilities got clarified**, moving discussion from theory to practical possibility: internal/confidential job posting, application tracking, candidate workflow management, API availability, existing HRPS integration, future Harbour middleware use, and planned/in-progress SSO support. **Key architectural realization: Workable is a SaaS ATS, not a customizable platform** — anything Career Compass needs beyond ATS functions has to live elsewhere.

3. **SJR requirements got well-articulated** by Rama, Michelle, and Adrian. SJR involves cycle creation, HR assignment, functional lead ownership, time-bound windows, complex ringfencing, and agency/job-family/officer-level restrictions — **none of which are standard ATS concepts.** This tells you what has to stay in Compass, get built elsewhere, or be explicitly procured in future ATS requirements.

4. **Future tender reality surfaced early.** HI team was explicit: Workable is not guaranteed to be the future ATS. An open tender is likely, possibly starting 2027, outcome unknown, another vendor could win. This is a genuinely useful finding — it stops Career Compass from tightly coupling to Workable specifically.

## What Didn't Go Well

1. **Discussion drifted repeatedly** between Internal Jobs, STIPs/Gigs, and SJR without closure on any one. Adrian repeatedly had to steer back to SJR/Internal Jobs since STIPs/Gigs is a completely different operating model. Result: good exploration, few concrete outcomes.

2. **No target-state architecture was chosen.** Five options remained on the table at close:
   - A: Compass → Workable
   - B: Compass → Harbour → ATS
   - C: Compass + custom SJR layer + ATS
   - D: Future ATS via open tender
   - E: Future HRPS 2.0 ATS

   Reasonable for a discovery session, but architectural ambiguity remains.

3. **SJR problem diagnosed, not solved.** Confirmed: Workable doesn't natively support SJR workflows — cycle management, assignment workflows, and targeted exposure mechanisms are all missing. No answer on where these capabilities should ultimately live. Meeting ended with "Compass may need a custom layer" — directionally useful, still vague.

---

## Decisions Made

1. **Workable appears suitable for Internal Jobs exploration** — not a commitment, a direction worth continuing.
2. **SJR requirements are significantly more complex than standard ATS workflows.**
3. **Career Compass should not assume Workable will be the long-term ATS.**
4. **Compass releases proceed regardless of future ATS finalization** — existing HRPS/Cumulus integrations remain the interim approach. **This is consistent with today's earlier confirmation that R1 doesn't depend on Workable.**
5. **STIPs/Gigs is not the immediate focus** compared to Internal Jobs and SJR discussions — explicitly advocated in the meeting.

---

## Risks Explicitly Raised

| # | Risk | Detail |
|---|---|---|
| 1 | 🔴 **ATS vendor uncertainty.** | The biggest strategic risk. Open tender likely, Workable may not win, future ATS solution undecided. Any Workable-specific integration built now could become technical debt. |
| 2 | 🔴 **SJR not supported by standard ATS.** | Confirmed SJR is far more complex than normal hiring. Future ATS solutions may still not support cycle creation, ringfencing, assignments, or officer targeting — Career Compass may need custom functionality regardless of which ATS wins procurement. |
| 3 | 🟠 **Multiple HR systems in play.** | HRPS, Cumulus, ATS, Compass, and Harbour all participating — growing integration complexity. |
| 4 | 🟠 **Timeline misalignment.** | ATS procurement is likely later than Compass releases; R1/R2/R3 will proceed before ATS direction is finalized. Risk: temporary solutions become permanent solutions. |

## Risks Michelle Thinks Aren't Being Addressed Enough

1. **Governance ownership risk.** Who owns SJR business rules, ringfencing logic, functional lead workflows, officer eligibility rules? The conversation assumes these rules exist somewhere; no one discussed rule governance, change management, or policy ownership. Could become a major Day-2 issue.
2. **ATS lock-in risk.** Career Compass is increasingly designing around ATS assumptions, but ATS products change. Without a strong abstraction layer (Harbour or equivalent), every future ATS change creates integration rework. Acknowledged but not deeply addressed.
3. **Experience fragmentation risk.** The discussion assumed discovery-in-Compass, application-in-ATS, processing-in-ATS, monitoring-partly-in-Compass — but the officer experience implications (multiple redirects, multiple interfaces, confusing journey) were never examined.
4. **Harbour dependency risk.** Harbour was named as a strategic integration layer, but its ownership, roadmap, service levels, and support model were never discussed. If Compass becomes dependent on it, that's a real external dependency with no visibility yet.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Prepare ATS requirements (SJR requirements, cycle management, ringfencing rules, assignment workflows, visibility restrictions) for HI's tender specification drafting | Career Compass team | **~October** (discussed) | 🔴 High | Not Started |
| Investigate modular ATS integration approach (Compass↔ATS vs. Compass↔Harbour↔ATS), avoid vendor lock-in | Career Compass team | Not specified | 🔴 High | Not Started |
| Understand Harbour architecture and its role as integration layer | Rama Moorthy | Not specified | 🟡 Medium | Not Started |
| Draft ATS tender specifications, considering whether SJR requirements should be represented | HI/OGP team | Not specified | 🟡 Medium | Not Started |
| Re-engage Career Compass on tender requirements | HI/OGP team | **~end October** (discussed) | 🟡 Medium | Not Started |

**Note:** two rough dates exist (October for CC's requirements, end-October for HI's re-engagement) — worth pinning to exact dates rather than "around," and confirming they sequence correctly (CC needs to deliver requirements before HI can meaningfully re-engage on them).

---

## Michelle's Bottom-Line Assessment

The meeting achieved its purpose: reduced uncertainty about Workable, and exposed the gap between standard ATS capabilities and Career Compass's SJR operating model. **The real finding isn't whether Workable works — it's that SJR is not really an ATS problem. It's a workflow orchestration and governance problem that happens to touch an ATS.** That distinction should heavily influence future product and architecture decisions.

**Michelle's top three SteerCo warnings, if this were headed there:**
1. Future ATS vendor remains unknown.
2. SJR workflow requirements are not currently supported by standard ATS products.
3. Compass should adopt a modular integration strategy (Harbour or equivalent) to avoid future ATS replacement costs.

---

## Reconciliation Required — How This Fits With Today's Other SJR/Scope Threads

**This does not reverse the 18 Sep pivot away from Workable as R1's own architecture** — that stands. What this meeting adds is a **separate, future-facing exploration**: whether Workable (or another ATS via open tender) becomes the eventual system for Internal Jobs and SJR, on a timeline (2027+ tender) well beyond R1.

This connects to, and partially updates, several things already tracked today:

- **R1 Scope Confirmed doc, Tier 3:** states "SJR strictly kept on OTG for the 2027 cycle... transition to Compass deferred to the 2028 cycle." This meeting doesn't change that R1 timeline, but it adds real texture to *what* "transition to Compass" might mean by 2028 — likely not Compass-native, but Compass-orchestrated-via-ATS (Option B or C above), given "Workable is a SaaS ATS, not a customizable platform" and SJR's custom-layer needs.
- **R-13 (risk register, SJR delivery mechanism) — already re-opened today.** This meeting adds a fourth possible mechanism (Compass + custom SJR layer + ATS, i.e. Option C) to the Compass-native-vs-HR-system-hosted framing R-13 was tracking. Worth folding into R-13's re-opened language.
- **Today's Estimation Discussion's finding that "Internal Jobs ingestion" is treated as mandatory R1 scope** — this Workable conversation is squarely about the *longer-term* application/processing side of Internal Jobs, not the R1 discovery/ingestion piece. Keep these two separate when scoping R1: ingestion (R1, mandatory) vs. full ATS-backed application workflow (future, tender-dependent).
- **The October ATS-requirements deadline is a new, previously-untracked commitment** — worth adding to whatever tracks cross-team deliverables, since it's not in the risk register yet and has real dependencies on the still-unresolved SJR governance question (who owns ringfencing/eligibility rules) raised as a gap in this same meeting.

---

## Next Steps

**Immediate:**
- Add this meeting's SJR-as-governance-not-ATS-problem framing to the risk register's SJR tracking (R-13).
- Get concrete dates on the ATS-requirements deliverable (Career Compass → HI) and HI's re-engagement — "around October" and "end October" are too loose for something with real downstream dependencies.
- Flag the governance-ownership gap (who owns SJR business rules, ringfencing logic, eligibility rules) as a genuinely new, unaddressed risk — it wasn't raised as a named item in any of today's earlier SJR discussions.

---

*Related: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-13, notes the 18 Sep Workable-to-HRPS/Cumulus pivot for R1 itself), [R1 Scope — Proposed, pending alignment](../decisions/2026-09-22-W39-r1-scope-confirmed-transition-plan.md) (Tier 3, SJR 2027/2028), [R1 Opportunities Estimation Discussion notes](2026-09-22-W39-r1-opportunities-estimation-discussion.md), [SJR Whiteboard notes](2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md)*
