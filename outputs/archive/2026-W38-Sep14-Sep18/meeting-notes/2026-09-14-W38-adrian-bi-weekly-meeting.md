# Meeting Notes: R1 Planning & Architecture Alignment with Adrian Ang

**Date:** 2026-09-14  
**Attendees:** Adrian Ang (Director of Product Management), Michelle Yip (Product Manager)  
**Meeting Type:** Bi-weekly 1:1 / Product Lead Strategic Review  
**Duration:** 45 minutes  
**Related Documents:** [Master PRD](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md), [RICE Scoring & Synthesis](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-problems-hypotheses-rice.md), [Adrian Jam Guide](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-adrian-product-lead-jam-guide.md)

---

## Summary

Adrian and Michelle reviewed R1 Opportunities Marketplace architecture pathways, ATS integration options, and scope protection boundaries. The discussion centered on minimizing HR friction by evaluating Workable integration (led by OGP PM Daryl Snow) alongside GDP and SMGS architectural options. Adrian confirmed that if delivery velocity or integration complexity requires a scope cut, Internal Jobs and Secondments will fall back strictly to read-only ingestion, protecting core Gig, STIPs, and Rotation application flows.

---

## Decisions Made

1. **Scope Cut-Line Fallback: Pure Ingestion for Internal Jobs and Secondments**
   - **Why:** Full application tracking and dual-system reconciliation for Internal Jobs and Secondments introduce massive HRPS and ATS dependency risks. If integration spikes reveal delays or velocity drops, reducing Internal Jobs and Secondments to read-only ingestion protects the MVP release date.
   - **Who decided:** Adrian Ang (endorsed by Michelle Yip).
   - **Impact:** Gigs, STIPs, and Rotations remain the active application core in R1. Ingestion feeds (F-23) fulfill discovery for Internal Jobs and Secondments without blocking on deep ATS workflow integrations.

2. **Operational Rule for Internal Agency Handling**
   - **Why:** Certain pilot agencies may require processing candidates within their own native internal workflows or security boundaries.
   - **Who decided:** Adrian Ang.
   - **Impact:** If an agency specifies internal handling, CareerCompass will capture applicant intake via shared standardized forms and push applicant packages directly to the agency HR team.

3. **Mandatory Role-Based Access Control (RBAC) Governance**
   - **Why:** Multi-opportunity handling (Internal Jobs, Secondments, Gigs, STIPs) requires strict boundary controls so line managers, central HR, and public officers only access authorized candidate data.
   - **Who decided:** Adrian Ang.
   - **Impact:** Confirms implementation of the 4-tier RBAC architecture (Public Officer, Line Manager / Evaluator, Agency HR POC, Central Super Admin) defined in Section 5.3 of the Master PRD.

4. **Tri-Track Architectural Investigation for HR Portal Integrations**
   - **Why:** Agency HR officers must not be forced to learn another isolated portal. We need an integration architecture that unifies posting and shortlisting.
   - **Who decided:** Adrian Ang and Michelle Yip.
   - **Impact:** Engineering and Product will evaluate three specific options: Option 1 (Workable via OGP), Option 2 (GDP Products), and Option 3 (SMGS Architecture).

---

## Architectural Options Evaluated

| Option | Architecture & System | Pros | Risks & Unknowns | Next Investigation Step |
|---|---|---|---|---|
| **Option 1: Workable Integration** | Third-party ATS used across OGP initiatives. Ingest from HRPS to Workable, then pull into CareerCompass. | Agency HR uses one consolidated ATS system. Eliminates dual-entry for HR teams. | CUMULUS alignment unknown. Data sync lag between HRPS, Workable, and CareerCompass. | Technical discovery sync with Daryl Snow (OGP PM). |
| **Option 2: GDP Products** | Government Digital Products suite. | Native whole-of-government platform alignment. Potential pre-existing infrastructure. | Unclear if GDP supports candidate application workflows and candidate shortlisting tracking. | Audit GDP product capabilities for application forms and shortlist status. |
| **Option 3: SMGS Architecture** | Existing Smart Management / Service architecture. | Already has structured vacancy details, application forms, and shortlisting criteria mechanisms. | May require custom data adapters for CareerCompass candidate schema. | Review SMGS form and shortlisting APIs with Tech Lead Tan Pow Hwee. |

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Schedule architecture discovery sync with Daryl Snow (OGP PM) on Workable integration and CUMULUS roadmap | @Michelle Yip | 2026-09-18 | High | 🔴 Not Started |
| Assess GDP products for candidate application submission and shortlisting state management | @Michelle Yip | 2026-09-22 | Medium | 🔴 Not Started |
| Review SMGS architectural assets (form schemas, shortlisting criteria) with Tan Pow Hwee | @Michelle Yip | 2026-09-20 | Medium | 🔴 Not Started |
| Update Section 2.3 and Section 3.3 of Master PRD to reflect the ingestion-only scope cut contingency | @Michelle Yip | 2026-09-15 | High | 🔴 Not Started |
| Document form handoff protocol for agencies managing selections internally | @Michelle Yip | 2026-09-23 | Low | 🔴 Not Started |

**Notes:**
- Items marked with 🔴 are critical path dependencies for sprint architecture planning.
- Technical discovery with Daryl Snow will determine whether Workable is feasible for R1 or deferred to R2.

---

## Key Insights & Discussion Points

### HR Operational Load
- Agency HR officers are resistant to managing multiple portals. If they post in HRPS, having an automated pipeline via Workable prevents manual duplicate posting.
- CUMULUS is a key variable. We must understand how Workable plans to interface with CUMULUS before committing technical effort.

### Scope Defense Strategy
- Having an explicit fallback boundary gives our team high confidence. If Workable or HRPS integration hits friction, dropping Internal Jobs and Secondments to pure ingestion preserves the entire release schedule without compromising Gigs, STIPs, or Rotations.
- If agencies handle selections internally, the system focuses on structured intake and push handoffs, rather than building custom back-office evaluation tooling.

### Role-Based Security
- Adrian strongly reinforced role-based governance across all four opportunity types. Different opportunities carry distinct privacy implications (e.g. substantive job applications require tighter privacy than casual gig participation).

---

## Open Questions

- [ ] What is the exact data contract and sync frequency between HRPS and Workable? - **Owner:** Undetermined for now (Tech Lead / OGP TBD; Michelle Yip provides product context) - **By:** 2026-09-18
- [ ] How is CUMULUS planning to interact with Workable for civil service postings? - **Owner:** @Michelle Yip (via Daryl Snow) - **By:** 2026-09-18
- [ ] Do GDP products support an applicant-facing state tracking interface (Applied, Shortlisted, Rejected)? - **Owner:** @Michelle Yip - **By:** 2026-09-22
- [ ] Does SMGS expose public sector tenant separation for candidate dossier downloads? - **Owner:** @Tan Pow Hwee - **By:** 2026-09-20

---

## Timeline Risks

- **TIMELINE RISK:** Workable integration discovery with Daryl Snow must finish before Sprint 2 kickoff. If Workable architecture requires CUMULUS changes, we must immediately trigger the fallback decision (pure ingestion for Jobs and Secondments) to protect the 8.0-sprint core build.
- **TIMELINE RISK:** Clarifying internal agency form push requirements must happen before finalizing F-11 (Candidate Pack Download) specifications.

---

## Next Steps

**Immediate (This Week):**
- Connect with Daryl Snow (OGP PM) for the Workable technical briefing.
- Review SMGS form and shortlisting architecture with Tan Pow Hwee.
- Formalize the scope cut-line in the Master PRD.

**Short-term (Next 2 Weeks):**
- Complete GDP product feature capability assessment.
- Present architecture recommendation (Option 1 vs Option 2 vs Option 3) to Adrian during the next bi-weekly sync.

**Follow-up Meeting:**
- **Date:** 2026-09-28 (Monday, bi-weekly cadence)
- **Purpose:** Review Workable discovery outcomes, select architecture option, and confirm sprint allocation.
- **Attendees:** Adrian Ang, Michelle Yip, Tan Pow Hwee.

---

## Context for Future Reference

- This meeting operationalizes the R1 Master PRD strategy. It validates our contingency design where Jobs and Secondments can scale down to ingestion without disrupting Gigs, STIPs, and Rotations.
- Reference stakeholder profile: Adrian Ang (Director of Product Management). Key focus: practicality, avoiding HR friction, delivering high-quality user experience without over-engineering back-office systems.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw meeting notes</summary>

```
3. R1 Planning
    1. Workable - integrate with that system - so that HRs don’t need to learn another system
        1. Architecture - OGP PM - Daryl Snow
        2. For Internal Jobs and Secondments - How they post in HRPS, how we can pull from Workable 
        3. HR officers use one system
        4. For CUMULUS - may need discovery on how Workable is intending to work
    2. 2nd option GDP products - do they have apply stuff and whether u are shortlisted
    3. 3rd option Using SMGS architecture
        1. They already have details, form, and shortlisting criteria
	4. Internal Jobs, Secondments, Gigs, STIPS, Role-based
		1. Role-based 

If need to cut scope, we will cut internal jobs and secondments to just purely ingestion. 
If they say handle internally, we will need to share the forms and push.
```

</details>
