---
date: 2026-09-22
week: 2026-W39
type: meeting-notes
meeting_type: Engineering sync / operational readiness review
attendees: Rama Moorthy, Michelle Yip, Imelda Mo
topic: OTEP Squad Sync — Day 2 Operations / Support Model Review
---

# Meeting Notes: OTEP Squad Sync — Day 2 Ops / Support Model Review

**Date:** 2026-09-22

**Attendees:** Rama Moorthy (led), Michelle Yip, Imelda Mo

**Type:** Stress-test of the Day2Ops support model ahead of formalization — reviewed against the [Day2Ops draft page](../decisions/2026-09-22-W39-day2ops-review.md) (21 Sep, reviewed earlier today)

---

## Summary

This was a stress-test, not a document walkthrough. The team surfaced real gaps in the Day2Ops draft before it gets formalized: the support flow assumes requests only come from Business Owners (they'll actually come from pilot agencies and end users too), request categories aren't yet cleanly separated, proposed support hours (9am-6pm, later 8:30am-6pm) don't address what happens when Compass goes down outside those hours, and the operational model currently depends heavily on Rama personally with no named deputy. **The biggest unresolved question, and the one Michelle would push hardest on: who actually responds to and restores a Sev1 outage at 2am, and is that covered contractually by a vendor?**

This directly extends the [Day2Ops document review](../decisions/2026-09-22-W39-day2ops-review.md) from earlier today — several gaps flagged in that review (unfilled support contacts, thin §5 Incidents section, no explicit incident-command continuity) are now confirmed as live, unresolved discussion points, not just document drafting gaps.

---

## What Went Well

1. **The review did its job — hidden assumptions got exposed before formalization.** Assumptions around who raises requests, incident ownership, agency reporting paths, and support hours all got challenged in the room rather than shipped silently.
2. **Governance requirements surfaced early.** PSD/WOG severity reporting obligations were explicitly named — Sev1 incidents trigger mandatory escalation and reporting, and can't be treated as a normal support case.
3. **Request-type distinctions started to emerge**: product enhancements, UX issues, data/account issues, incidents/outages, bug reports — recognized as needing different workflows and routing, not one generic flow.
4. **The team didn't accept an incomplete model as done.** Repeatedly flagged "this needs more design" rather than closing the discussion prematurely.

## What Didn't Go Well

1. **The Day2Ops flow assumes Business Owner → Service Request → Operations Team, but that's not reality.** Michelle pointed out many issues will originate from pilot agencies and end users directly, not BOs. User journeys aren't fully mapped, escalation channels are unclear, support ownership isn't fully defined. **This is the same gap flagged in the Day2Ops document review** — the document's role table doesn't have an "agency end user" row at all, only Business Owner.
2. **Incident management and service requests kept getting mixed together in discussion**, which suggests the support catalogue itself isn't established yet — without clean categorization, SLAs become unmanageable, tickets route incorrectly, and reporting gets inconsistent.
3. **Proposed support hours conflict with incident expectations.** Rama proposed 9am-6pm, later aligned to 8:30am-6pm. Michelle's direct challenge: "If Compass goes down at 2am, the support clock does not wait until 8:30am." Exposed a real contradiction — normal support hours ≠ incident response coverage — with no agreement yet on after-hours support, an on-call roster, vendor obligations, or escalation paths.
4. **The operational model depends heavily on specific individuals.** Rama noted incident command may effectively sit with him, since another lead is moving off Compass work. No answer yet on who deputizes, who covers leave, who commands incidents after hours, or who owns comms if multiple incidents hit at once.

---

## Decisions Made

1. **Support hours documented as 8:30am-6:00pm**, not 9:00am-6:00pm, aligning with PSD working arrangements.
2. **Day2 support flow must explicitly include pilot agencies, end users, and HR users** — not assume requests only originate from Business Owners.
3. **Request categories must be split and routed separately**: product requests, UX issues, bug reports, incidents, account/data issues. The current flow is too generic.
4. **Incident handling must align with established PSD/WOG governance requirements**, not a newly invented local process.

---

## Key Risks Not Yet Addressed

| # | Risk | Severity | Detail |
|---|---|---|---|
| 1 | No clear 24x7 support operating model | 🔴 | Alerts can occur anytime; Sev1 requires immediate action; engineering support may not be available after hours; support hours alone don't solve outage response. |
| 2 | Vendor support obligations unclear | 🔴 | The discussion repeatedly returned to "who actually restores the system?" — developers built the platform, but engineers may not be on standby, and after-hours arrangements are undefined. Incident commander may have accountability without the resources to act. |
| 3 | Sev1 governance obligations not integrated into Day2 design | 🔴 | Michelle flagged that escalation to leadership, regular updates, and reporting obligations already exist under governance processes — the operations model risks being designed without incorporating mandatory procedures. |
| 4 | User support ownership ambiguous | 🟠 | Unclear whether agencies contact BOs, PSD, GovTech, or use Teams/email/ticketing — risk of duplicated reports and missed escalations across channels. |
| 5 | Single point of failure in operational leadership | 🟠 | Model currently depends heavily on specific individuals (Rama). If primary leads are unavailable, incident management continuity is at risk. |

---

## Michelle's Read Between the Lines

This was less a document review and more a stress-test of whether Compass Day 2 operations are actually production-ready. The team found real weaknesses, but the central unresolved question is: **who is responsible for responding to and restoring Compass during a Sev1 incident at 2am, and what contractual/vendor arrangements back that commitment?** Until that's answered, Day2 operations, incident response readiness, and support coverage are the highest operational risks for Compass R1 — a stronger claim than anything currently in the R1 risk register, which has treated operational readiness as a background concern (R-05's funding cliff, VAPT ownership) rather than naming 24x7 incident coverage as a top-tier risk in its own right.

---

## Structured Questions for Follow-Up (Michelle's Framing)

Organized around the five areas where the team circled without resolving:

**1. Support Model & Ownership** — first point of contact for pilot agency users (agency HR? PSD BO? Compass support? GovTech/NCS?); official support channels; whether all issue types share one entry point; RACI for Day2 ops; who acts as Incident Commander when the primary owner is unavailable.

**2. Request Categorisation** — official ticket categories and what differentiates Incident/Problem/Service Request/Change Request/Enhancement; triage mechanism; who decides defect vs. service request; SLA per category; recurring-issue tracking.

**3. Incident Management Readiness** (biggest unresolved area) — official Sev1-4 definitions and triggering scenarios; who has authority to declare a Sev1/Sev2; tie-breaker on severity disagreement; required response/restoration timelines per severity, and whether these already exist in contract/tender specs; how performance is monitored; what "restored" means vs. "permanently resolved."

**4. After-Hours Support Coverage** (the risk Michelle would push hardest on) — who responds to a 2am Sev1; official on-call roster; contractual vendor coverage; engineer contactability after hours; escalation if the assigned engineer can't be reached; weekend/holiday arrangements; whether vendors are contractually bound to 24x7 production support, and if not, how WOG incident obligations get met; whether after-hours support has been funded at all.

**5. Vendor Accountability** — who owns infrastructure, application support, monitoring, database recovery, security incidents; existing contractual support commitments; escalation path when vendors miss SLAs; who can authorize emergency fixes; whether a major-incident vendor bridge process exists; whether a production support runbook has been completed and tested.

**6. Governance & Reporting** — applicable PSD/WOG incident reporting requirements; which severities require leadership escalation; who owns stakeholder comms during an incident; who prepares incident reports; required reporting cadence during Sev1; who must be notified (Adrian? Kah Chee? CIO Office? GovTech?); whether the support model has been reviewed against PSD's incident governance requirements at all.

**7. Operational Readiness Before Go-Live** — has the Day2 process been walkthrough-tested; has a Sev1 simulation run; do all support parties know their roles in a major incident; are contact lists maintained/tested; is there a documented continuity plan for key-person unavailability; what operational risks remain open before launch; what must be complete before Compass is operationally ready.

### The 5 Questions to Take Back to Rama

1. Who owns first response for a Sev1 Compass outage at 2am?
2. Do we have contractual 24x7 engineering support to restore service?
3. How does the proposed support model comply with PSD/WOG incident governance requirements?
4. What's the escalation path from agency user → BO → support team → vendor during a major incident?
5. What operational capability is still missing before Compass Day2 ops can be called production-ready?

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Revise Day2 support workflow to include agency user reporting paths | Rama Moorthy | Not specified | 🔴 High | Not Started |
| Split request categories and routing logic (enhancements, bugs, incidents, UX, account/data) | Rama Moorthy | Not specified | 🔴 High | Not Started |
| Review and incorporate Michelle's comments directly into the operations deck | Rama Moorthy | Not specified | 🟡 Medium | Not Started |
| Clarify incident support arrangements with Barry — especially after-hours coverage | Rama Moorthy | Not specified | 🔴 High — feeds Risk 1 & 2 above | Not Started |
| Review PSD incident management policy for alignment | Rama Moorthy | Not specified | 🔴 High — feeds Risk 3 | Not Started |
| Check existing maintenance plans/SLAs as a benchmark reference | Rama Moorthy | Not specified | 🟡 Medium | Not Started |

**Note:** all six action items are owned by Rama, with no due dates. Given the severity of Risks 1-3 (all 🔴) and that this now looks like the single highest operational risk area for R1 per Michelle's own assessment, this concentration on one person with no dates is itself a risk worth naming — consistent with Risk 5 (single point of failure) surfacing again in how the follow-up work is being assigned.

---

## Timeline Risks

**TIMELINE RISK: this surfaces as arguably the highest operational risk for R1, but has no visible connection yet to the R1 risk register or Tuesday's estimation discussion.** Neither the current risk register (R-01 through R-16) nor today's 11:30am estimation discussion appear to account for 24x7 incident coverage, vendor on-call contracts, or Day2 operational readiness as a scope/timeline factor. If closing these gaps requires new vendor contracts, funded after-hours coverage, or additional engineering headcount, that has real cost and timeline implications that aren't currently reflected anywhere in R1 planning.

---

## Connections to This Week's Threads

- **[Day2Ops document review](../decisions/2026-09-22-W39-day2ops-review.md), earlier today** — this meeting confirms several gaps flagged there are real and unresolved, not just drafting gaps: the missing "agency end user" request path, the thin §5 Incidents section, and the account-provisioning exclusion that undercuts the CAM-integration deferral rationale from yesterday's Product x OTEP thread.
- **R-05 (risk register, developer funding cliff)** — after-hours/on-call coverage questions may compound this; if 24x7 support requires additional headcount or vendor spend, that's a new cost line not currently in R-05's framing.
- **VAPT triage ownership (weekly plan, Priority 3)** — a related but distinct gap: VAPT is about security remediation ownership, this is about operational incident response. Both point to the same underlying pattern — critical operational roles without a clearly named, resourced owner.
- **Not yet in the risk register** — none of Risks 1-5 above have a corresponding R-ID yet. Given Michelle's own assessment that this may be the highest operational risk for R1, worth adding as new risk register entries rather than leaving this only in meeting notes.

---

## Next Steps

**Immediate:**
- Add Risks 1-5 above to the R1 risk register as new entries — currently untracked there despite being flagged as potentially the highest operational risk.
- Push for named dates and possibly split ownership on the six action items above — six 🔴/🟡 items on one person with no dates is a real execution risk.
- Send the 5 questions directly to Rama as a forcing function, separate from the broader 7-section question list, to get a concrete answer rather than another open-ended discussion round.

---

*Related: [Day2Ops document review](../decisions/2026-09-22-W39-day2ops-review.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), [Product x BO Working-Level notes](2026-09-21-W39-product-x-bo-working-level.md)*
