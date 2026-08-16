# Career Compass — Day 2 Support Roles, Responsibilities & Operations SOP

**Proposed support-tier model, RACI, and Day-2 Operations SOP, drafted from a working session on Day-2 support**

*Career Compass Product Team · 14 Aug 2026*

**STATUS: PROPOSED, NOT CONFIRMED.** This entire document is a candidate answer, not a confirmed one. Nothing here has been ratified as the official support model or operating procedure — see the closing section for what's still open.

---

## 1. Purpose and Status

Captures two related things: the Day-2 support role structure (a four-tier escalation model — Business Operations/Service Desk, Product Operations, Engineering, Upstream System Owners — plus a RACI for recurring activities), and a candidate Day-2 Operations SOP (scope, daily checks, incident classification, drift-management procedure, employment-lifecycle decision tree, escalation matrix, change tracking, reporting). Standalone proposal, not yet merged into any other operational documentation.

**Naming note:** this document's role structure uses "Support Tier 1-4 (T1-T4)" to describe *who staffs the escalation chain*. This is a different axis from any framework describing *where a data-correctness fix belongs* (e.g. Compass-patchable/needs-POCDEX/needs-upstream HR/structural gap) — the two are not interchangeable, and this document stays labelled "Support Tier"/"T1-T4" specifically to stay distinct from that other kind of tiering.

**Relationship to the Ops Portal:** the confirmed read-only portal design establishes that a BO categorizes a change and it "routes to another team via SOP," without naming that team or writing the SOP. This document is a candidate answer to both — Support Tier 2 (Product Operations) is a plausible receiving team, and the SOP sections below are a candidate first draft of the SOP itself. Neither is confirmed.

---

## 2. Support Tier 1 (T1): Business Operations (BO) / Service Desk

**Purpose:** first-line support and user-facing issue triage.

**2.1 Responsibilities**
- **User Support:** respond to enquiries, validate reported issues, gather info, manage ticket logging/updates.
- **Initial Investigation:** search profile in Ops Portal, compare CC vs. latest Products data, verify whether it's a system defect, data discrepancy, known MVP limitation, or user misunderstanding.
- **Operational Monitoring:** review daily drift dashboard, monitor newly detected discrepancies, review operational alerts.
- **Ticket Management:** categorise incidents, assign severity, escalate when required.

**2.2 Cannot Do:** update profile data, merge profiles, delete profiles, modify competency records, access databases directly.

*Consistent with the confirmed read-only Ops Portal design — T1/BO views, categorizes, and escalates; does not act on the data.*

**2.3 Typical Cases**

| Scenario | T1 Action |
|---|---|
| Officer cannot find profile | Validate account and escalate |
| Competency mismatch | Verify and escalate |
| Profile drift detected | Record and escalate |
| FAQ enquiry | Resolve directly |

---

## 3. Support Tier 2 (T2): Product Operations / Functional Support

**Purpose:** own business logic, operational workflows, employment lifecycle investigations.

**3.1 Recommended Owners:** Product Manager, Business Analyst, Product Operations Team.

**Note:** likely people currently performing this role during MVP include Michelle Yip, Imelda Mo, and other product team members — a description of who's doing the work today, not a confirmed permanent staffing model.

**3.2 Responsibilities**
- **Root Cause Analysis:** determine whether an issue originates from CC, Products, POCDEX, CSC, or user behaviour.
- **Employment Lifecycle Review:** assess agency transfers, email changes, position changes, multi-hatting cases.

Many of these scenarios remain **operationally undefined** — identity matching, timestamp semantics, and daily-diff field scope are all still open elsewhere. This document doesn't resolve those; it only confirms T2 is the expected team.

- **Drift Assessment:** classify detected drift as Informational, Monitoring required, Action required, or Escalation required.
- **Product Decisions:** document known limitations, temporary workarounds, operational guidance, future enhancement requests.
- **Upstream Coordination:** engage Products/POCDEX/CSC teams when required.

**3.3 Cannot Do:** deploy code, modify production databases, change API integrations.

**3.4 Typical Cases**

| Scenario | T2 Action |
|---|---|
| Email changed | Assess expected MVP behaviour |
| Agency transfer | Determine impact |
| Multi-hatting officer | Investigate and document |
| Data mismatch | Escalate upstream |
| Competency issue | Validate business rules |

---

## 4. Support Tier 3 (T3): Engineering / Technical Support

**Purpose:** resolve application, infrastructure, and integration issues.

**4.1 Responsibilities:** Application Support (defect investigation, troubleshooting, bug fixes); Integration Monitoring (Products API, POCDEX integration, auth services, batch jobs); Data Synchronisation (failed syncs, missing records, API failures, scheduled refresh failures); Technical Analysis (app bug vs. infra vs. integration vs. data issue); Deployment Support (hotfix, emergency fixes, rollback coordination).

**4.2 Typical Cases**

| Scenario | T3 Action |
|---|---|
| API failure | Investigate and restore |
| Sync job failure | Diagnose |
| Authentication issue | Resolve |
| Production defect | Fix |
| Performance degradation | Investigate |

**4.3 Success Metrics:** mean time to resolution, system availability, incident closure rate.

---

## 5. Support Tier 4 (T4): Upstream System Owners

**Purpose:** own source data and external dependencies.

**5.1 Examples**

| System | Owner |
|---|---|
| Products | Products Team |
| POCDEX | POCDEX Team |
| CSC Course Data | CSC Team |
| HR Source Systems | Agency HR Teams |

Several discrepancies discussed may ultimately originate upstream rather than in CC — a separate axis from this document's support-tier structure (see the naming note above).

**5.2 Responsibilities:** Source Data Ownership (maintain accuracy of employment/position/agency records); Data Correction (perform corrections at source); Escalation Handling (review/investigate invalid data, missing records, incorrect attributes).

**5.3 Typical Cases**

| Scenario | T4 Action |
|---|---|
| Incorrect employment data | Correct source record |
| Missing officer record | Investigate upstream |
| Job ID mismatch | Validate source data |
| Agency mapping issue | Correct source system |

---

## 6. Recommended RACI

| Activity | T1 BO | T2 Product Ops | T3 Engineering | T4 Upstream Owner |
|---|---|---|---|---|
| User enquiry | R | A | C | I |
| Ticket triage | R | A | I | I |
| Drift review | R | A | C | I |
| Employment lifecycle analysis | C | A/R | I | C |
| Root cause analysis | C | A | R | C |
| API failure investigation | I | C | A/R | C |
| Product defect fix | I | C | A/R | I |
| Source data correction | I | C | I | A/R |
| SOP updates | C | A/R | C | I |
| Operational reporting | R | A | C | I |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

This RACI has **not** been confirmed with T2/T3/T4 owners individually — it reflects a single working-session discussion, not a sign-off. "SOP updates" being A/R with T2 is the clearest signal that T2 is the intended SOP author, but this hasn't been stated explicitly by any stakeholder and should be confirmed directly rather than inferred.

---

## 7. MVP Operating Principle

One key lesson from the working session: **BOs should initially operate as visibility and triage agents, not data correction agents.** Uncertainty remains around profile patching, deletion, competency impacts, and lifecycle changes. Until governance and remediation workflows are formally agreed, T1/T2 should focus on detecting drift, assessing impact, escalating appropriately, and tracking trends — not directly modifying production data. Keeps Day-2 operations manageable for MVP while the team gathers actual production data on drift volume and lifecycle edge cases.

*Directly consistent with the confirmed read-only Ops Portal design — reached independently, reinforcing each other.*

---

## 8. Day-2 Operations SOP — Scope

The sections above define **who**; this section onward defines **what they do day to day**.

**8.1 In Scope**
- **Employment Profile Issues:** email changes, agency transfers, position changes, job ID changes, cost centre changes, multi-hatting officers, missing profiles, new profiles not reflected in CC.
- **System Support:** eligibility queries, competency mismatch queries, opportunity matching concerns, profile synchronisation issues.
- **Monitoring Activities:** daily drift monitoring, daily operational dashboard review, trend analysis.

**8.2 Out of Scope — Cannot Do:** manual database updates, direct updates to POCDEX/Products data, production hotfixes, profile consolidation/unioning. *Require Product Team approval + engineering support — consistent with the read-only Ops Portal design and the Cannot Do lists above.*

---

## 9. Daily Operations

**9.1 Daily Health Check** (frequency: daily, each morning)

- **Profile Synchronisation:** review drift dashboard, identify newly detected discrepancies, monitor failed sync jobs.
- **API Health:** verify Products API call status, verify scheduled sync execution status.

This daily health check assumes the drift dashboard and daily sync job **already exist**. The daily-diff batch job is **designed but not yet built**. Until it is, this checklist describes the target state, not what a BO can actually check each morning today.

**9.2 Operational Metrics:** review daily — drifted profiles, new profile creations, failed profile updates, open support cases, aging tickets. Output: daily operations summary.

---

## 10. Incident Classification

| Severity | Description | Example |
|---|---|---|
| P1 | Service unavailable | Users cannot access Career Compass |
| P2 | Core function impacted | Competencies not loading |
| P3 | Individual profile issue | Single officer profile mismatch |
| P4 | Information request | User enquiry |

This P1-P4 scale is a **different scheme** from the P0/P1 severity used elsewhere for reason codes. Not directly mappable one-to-one (this scheme's P1 = system outage; the other scheme's P0 reason codes are individual-case severities). If both are kept, they need distinct names — a BO confusing a reason-code P0 with an incident P1 is a real risk.

---

## 11. Profile Drift Management SOP

**11.1 Trigger** — either of:

- **Route A: User Reports Issue** — officer reports profile incorrect, competencies missing, or agency information incorrect.
- **Route B: Drift Dashboard Detection** — daily monitoring identifies employment changes, position changes, or data mismatch.

Route B is proposed proactive detection, **not yet built**. Until the daily-diff batch job exists, Route B isn't available — Route A (user-reported) is the only trigger that works today.

**11.2 Investigation Steps**

- **Step 1 — Retrieve Officer Details:** email, officer ID, NRIC identifier (masked), agency.
- **Step 2 — Check Ops Portal:** compare CC data against Products/POCDEX data.
- **Step 3 — Identify Drift Category:**

| Category | Example |
|---|---|
| Email Change | officer@agencyA.gov.sg → officer@agencyB.gov.sg |
| Transfer | Agency movement |
| Position Change | Job ID updated |
| Competency Impact | Competency assignment affected |
| Data Error | Upstream mismatch |

**Note:** this five-category breakdown covers similar ground to a separate Change Category Taxonomy defined elsewhere — e.g. "Transfer" here maps to "Organisational move" there; "Competency Impact" here has no direct equivalent there. **The two lists should be reconciled into one taxonomy before either is built into the portal.**

- **Step 4 — Determine Action:** **No Action Required** (informational or known MVP limitation — update ticket, close) or **Escalation Required** (wrong employment info, missing updates, upstream discrepancy — escalate to T2).

---

## 12. Employment Lifecycle Decision Tree

Identified as the key gap from the working session — the following four scenarios are a first attempt at closing it, **not a confirmed design**.

**12.1 Scenario A: Email Change** — expected MVP behaviour: a new profile may be created, existing retained, no automatic merge. Action: log the occurrence, record affected officer, no manual patching, escalate to T2.

This connects to a known email-reuse risk elsewhere in the design — "no automatic profile merge" is consistent with the broader structural-gap framing, but doesn't yet reference the NRIC/FIN fallback token design proposed to close it. Should be read together, not independently.

**12.2 Scenario B: Agency Transfer** — validate latest Products data, determine whether the officer remains within pilot agencies, assess competency-mapping impact. Escalate to T2.

**12.3 Scenario C: Position/Job ID Change** — review competency implications and matching outcomes. Escalate to T2 and BO Lead.

**12.4 Scenario D: Multi-Hatting Officer** — verify active profiles, review profile presentation, capture the use case. Escalate to T2.

**Note:** multi-hatting is the largest known population in this category — **274 officers whole-of-government** per current production sizing. "Capture the use case" likely needs to scale to that volume, not individual one-off investigations.

---

## 13. Escalation Matrix

| Issue Type | Escalate To |
|---|---|
| Application defect | T3 (Engineering) |
| API failure | T3 (Engineering) |
| POCDEX mismatch | T4 — POCDEX Team |
| Products mismatch | T4 — Products Team |
| CSC course data issues | T4 — CSC Team |
| Lifecycle design questions | T2 (Product Team) |

*By-issue-type quick reference; the full activity-level RACI is above.*

A separate source document describes a **three-tier escalation model for data issues specifically**: L1 (Ops team, self-diagnose in-portal) → L2 (Agency HR) → L3 (POCDEX), with L2's operating procedures explicitly noted as "yet to be established." **Agency HR does not appear anywhere in this document's T1-T4 model** — no row, no tier, names Agency HR as a stakeholder. Before this matrix or the T1-T4 model can be treated as complete, Agency HR needs an explicit place in one or the other.

---

## 14. Change Tracking

Every operational issue should capture: Ticket ID, Date detected, Drift category, Agency, Impacted user count, Resolution path, Root cause. This creates the evidence trail the audit/reporting portal area already requires.

---

## 15. Operational Reporting

**15.1 Weekly Review**
- **Volume:** total support tickets, new drift cases, open escalations.
- **Trends:** most common drift type, agencies generating highest drift volumes, competency-related incidents.
- **Product Insights:** MVP gaps discovered, new lifecycle scenarios surfaced, candidate backlog items.

---

## 16. Governance & Audit

**16.1 Not Allowed Without Approval:** direct database updates, profile merging, user deletion, competency reassignment. Uncertainty remains around manual patching/deletion processes — these stay prohibited until formally approved through governance and SOP review, consistent with the read-only Ops Portal design.

---

## 17. What This Document Does Not Resolve

Carrying this content into other operational documentation is a separate decision from drafting it here. The first four are role/RACI questions; the remaining six are specific SOP gaps that should close before go-live:

- Whether T2 is formally the "receiving team" for the Ops Portal, and whether "SOP updates" being T2's responsibility here means T2 is expected to author the SOP.
- Whether this four-tier structure replaces, sits alongside, or needs reconciling with any other existing escalation structure.
- The naming collisions flagged above (T1-T4 vs. a fix-ownership tier framework; this document's P1-P4 vs. a separate P0/P1 reason-code severity) — both need resolution before adoption into shared team vocabulary.
- **Formal sign-off from T2, T3, T4 owners on the RACI** — drafted from a single meeting discussion, not a cross-team review.
- Who owns employment lifecycle decisions?
- Which profile changes are informational vs. actionable?
- Can BOs trigger remediation actions, or only monitor? *(Answered elsewhere as "only monitor" per the confirmed read-only Ops Portal design — but that confirmation postdates this SOP draft and should be reflected back into the sections above.)*
- What constitutes a valid profile drift?
- When should cases go to Products, POCDEX, or upstream agencies specifically, vs. staying with T2?
- What is the acceptable SLA for profile discrepancies?

**Until these are resolved, this document should be treated as a proposal for discussion, not an approved operating model or SOP.**

---

*Generated: 2026-08-14. All cross-references to external documents and internal section numbers removed for a self-contained read.*
