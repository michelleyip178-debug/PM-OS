# Meeting Notes: CareerCompass CMM Discovery Shareback

**Date:** 2026-09-15 (Week 38)  
**Time:** 2:00 PM to 3:00 PM  
**Venue:** L3 Synergy (Hybrid)  
**Organiser:** Evelyn Susan Lek  
**Meeting Type:** Stakeholder Discovery Shareback and Scope Alignment  
**Transcript Reference:** [Career Compass CMM Discovery Shareback](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADE3YTU1YmQ1LWQ3ZWUtNDVjMy04OGJjLTY4ZWFlOWQwNDRhNgBGAAAAAACe9ok2Z4aCTY6L5pBZg-NSBwCDkMcBW-8QS4z5LIjlVzjQAAAAAAENAABduYf_yTe2RKUHwDB_n_BIAABz8pN3AAA%3d)

---

## Executive Summary

The product team presented findings from the Competency Management Module (CMM) discovery exercise covering interviews with HR practitioners and policy stakeholders across Whole-of-Government. The primary stakeholder friction centered on positioning: Jace Tan (PSD / CDGO) strongly pushed back on whether the discovery surfaced genuinely new insights or merely reopened settled governance, rationalisation, and agency autonomy positions already agreed between Workforce Development (WD) and CDGO. 

While the team's qualitative findings validated real practitioner friction (such as fragmented spreadsheets and HRPS usability challenges), stakeholders demanded that future sharebacks clearly separate validated baseline facts from net-new insights, and provide rigorous trade-off models before proposing architectural shifts, specifically centralising competency tagging inside CMM rather than existing HRPS and Cumulus systems. No delivery timeline or scope commitments were altered.

---

## Attendees & Roles

| Attendee | Organisation / Role | Stance / Perspective |
|---|---|---|
| **Adrian Ang** | PSD, Director of Product Management / Product Lead | Presenter and discussion lead; framed discovery as grounding operational reality. |
| **Michelle Chen** | PSD | Participant / stakeholder. |
| **Jace Tan** | PSD / CDGO Representative | Challenged whether findings were new; guarded settled policy and delivery timelines. |
| **Li Ting Kway** | GovTech, Product Design Lead | Monitoring user experience implications and current vs future workflow journeys. |
| **Pow Hwee Tan** | PSD | Technical and operational stakeholder. |
| **Jacky Lee** | PSD | Business stakeholder / governance alignment. |
| **Wilson Koh** | PSD | Policy and stakeholder oversight. |
| **Mark Ho** | PSD | Senior leadership / governance oversight; questioned newness of discovery insights. |
| **Gek Khiang Tan** | PSD | Senior leadership / technical governance oversight. |
| **Evelyn Susan Lek** | PSD / Meeting Organiser | Facilitator. |
| **Charlene Teo** | CDGO | Working-level representation for Mastura Manap (on work trip). |

---

## Key Discussion Themes & Stakeholder Pushback

### 1. "Validated Understanding" vs "Reopening Settled Policy"
* **The Core Friction:** Mark Ho repeatedly questioned what new insights emerged from the discovery exercise. He noted that duplicate competencies, agency-specific variations, and competency governance frameworks had already been debated extensively and closed across WD and CDGO.
* **Stakeholder Concern:** Re-litigating known problems risks introducing unnecessary delivery delays, scope creep, and confusion among senior leadership.
* **Product Team Defense:** While macro pain points were known, direct observation revealed high operational friction in everyday HR behavior (e.g., shadow Excel sheets, broken approval handoffs) that directly affects whether officers and HR will actually adopt CMM features.

### 2. Architecture Debate: Competency Tagging Location (CMM vs HRPS / Cumulus)
* **The Emerging Proposal:** The product team proposed exploring whether competency tagging should be centralised natively within CMM rather than forcing users into HRPS and Cumulus.
* **The Trade-off:**
  * *Pro-CMM:* Superior user experience, tighter governance controls, reduced field-level fragmentation.
  * *Counter-Arguments / Risks:* Substantial implementation complexity, duplicate data entry across legacy systems, change management resistance from central HR teams, and potential R1 timeline slippage.
* **Stakeholder Mandate:** Stakeholders did not shut down the CMM tagging option, but explicitly conditioned further discussion on a structured comparative trade-off paper.

### 3. Packaging and Presentation Failure Mode
* Participants agreed that the user findings themselves were sound, but the framing was counterproductive. By presenting known operational hurdles alongside novel design suggestions without clear categorisation, the presentation gave the impression that the squad was questioning established policy mandates.

---

## Decisions Made

| # | Item | Status | Decision & Governance Detail |
|---|---|:---:|---|
| **DEC-01** | Discovery Findings Validity | **Agreed** | The discovery findings are accepted as valid operational corroboration of user friction, confirming that current competency workflows remain inefficient. |
| **DEC-02** | Continued Exploration of CMM Tagging | **Agreed (Conditional)** | Product team may continue evaluating centralised competency tagging in CMM, provided it is supported by a formal trade-off analysis comparing HRPS/Cumulus against CMM. |
| **DEC-03** | Working-Level Alignment Rhythm | **Agreed** | Further working-level sessions between the Product Team, CDGO, and WD are required before any scope recommendations go to senior steering committees. |
| **DEC-04** | R1 Scope and Timeline Changes | **No Change / Deferred** | No final decisions were made regarding CMM scope adjustments, timeline shifts, delivery phasing, or policy alterations. The baseline 5.5-sprint delivery plan stands. |

---

## Action Items & Next Steps

| # | Action Item | Owner | Target Date | Status / Deliverable |
|---|---|---|:---:|---|
| **ACT-01** | **Repackage Discovery Findings:** Restructure deck into the 5 mandated buckets: (1) Validated Baseline, (2) Novel Observations, (3) Product Recommendations, (4) Policy Considerations, and (5) Delivery Trade-offs. | Adrian Ang & Product Team | Next Stakeholder Sync | 🟡 In Progress |
| **ACT-02** | **CMM vs HRPS/Cumulus Tagging Trade-off Paper:** Produce a structured comparative analysis detailing user experience, implementation effort, integration risk, and change management implications. | Product Team | Sprint 1 Mid-Point | 🔴 High Priority |
| **ACT-03** | **Current-State vs Future-State Workflow Maps:** Illustrate officer and HR journeys to demonstrate exactly where CMM adds value without duplicating HRPS. | Li Ting Kway & Product Team | Next Design Review | 🟡 In Progress |
| **ACT-04** | **CDGO & WD Policy Briefing Session:** Convene a dedicated working-level alignment sync with CDGO (Charlene Teo / Mastura Manap) and WD to align on pre-existing governance decisions. | Product Team & Jacky Lee | Within 1 Week | 🔴 Scheduled |
| **ACT-05** | **R1 Scope & Delivery Impact Check:** Assess whether CMM discovery findings threaten the locked 5.5-sprint runway, and confirm cut-lines with engineering. | Product Team | Immediate | 🟢 Completed (No R1 scope expansion allowed) |

---

## PM Assessment & Strategic Recommendations

1. **Defend the R1 Runway:** Jace Tan's alertness to delivery risk confirms our posture from the 14 September Architecture Jam. We must not allow exploratory CMM tagging work to consume capacity from the locked 5.5-sprint R1 Opportunities build. Any advanced CMM workflow must sit strictly in R2 unless proven zero-effort.
2. **Shift Presentation Posture from "Discovery" to "Validation & Cost":** When presenting to CDGO and WD, frame findings not as "new problems we discovered," but as: *"We verified the exact cost of the status quo that your policies previously identified, and here is the lightweight technical path to enforce it."*
3. **The 5-Bucket Reporting Structure:** Adopt this taxonomy for all subsequent steering updates to prevent defensive pushback:
   * **Category A (Validated Understanding):** What was already known and confirmed by interviews.
   * **Category B (Discovery Validation):** Quantitative and qualitative verification from users.
   * **Category C (New Observations):** True edge cases or unanticipated operational blockers.
   * **Category D (Product Recommendations):** Features within current sprint constraints.
   * **Category E (Policy Considerations):** Items belonging entirely to WD/CDGO policy governance.
