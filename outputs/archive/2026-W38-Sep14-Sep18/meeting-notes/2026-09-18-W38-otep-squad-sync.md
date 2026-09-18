# Meeting Notes: OTEP Squad Sync

**Date:** 2026-09-18  
**Week:** W38  
**Meeting Type:** Engineering & Delivery Sync  
**Attendees:** Michelle Yip (PM), Adrian Ang (Lead / Stakeholder), Barry Lim (Tech Lead / Architect), Jobelle Lim (Delivery / Project Lead)  
**Referenced Stakeholders & Partners:** Rama Moorthy, Adrian Lo, Daniel (NCS VAPT PM), Li Kun (HRPS), Huiting (Cumulus), Essential (Workday vendor), Gek Khiang  
**Meeting Link:** [OTEP Squad Sync | Teams](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADE3YTU1YmQ1LWQ3ZWUtNDVjMy04OGJjLTY4ZWFlOWQwNDRhNgFRAAgI3xUXyF8AAEYAAAAAnvaJNmeGgk2Oi_aQWYPzUgcAg5DHAVv-EEuM_SyI5Vc40AAAAAABDQAAXbmH-sk3tkSlB8Awfp-gSAAAc-JnBgAAEA%3d%3d&EntityRepresentationId=419e6796-39ad-43b6-99ed-fa5b5e33a336)

---

## Summary

The squad evaluated VAPT remediation progress and executed a major strategic pivot on internal job discovery for CareerCompass. The team challenged and disproved the working assumption that Careers@Gov (C@G) hosts hidden internal jobs, converging instead on HRPS (civil service) and Cumulus (statutory boards) as the primary upstream sources. Leadership agreed that Compass must act as a discovery and aggregation layer rather than attempting to replace existing enterprise HR platforms or introduce a fourth disconnected application system.

---

## Key Strategic Shift

```
[Previous Working Assumption]
Careers@Gov (C@G) Feed ---> Hosts all civil service jobs (Public + Internal) ---> Compass Ingestion

[Validated Reality & Emerging Architecture]
Public Jobs Only ---------> Careers@Gov (C@G)
Civil Service Internal ---> HRPS Internal Marketplace (SAP/NCS)  ---> Compass Aggregation & Search
Stat Board Internal ------> Cumulus Internal Marketplace (Workday)    (External redirect to apply)
Gigs & STIPs -------------> Native CareerCompass (Open posting)
```

---

## Decisions Made

1. **Pursue HRPS and Cumulus discovery instead of assuming C@G is the internal job source**
   - **Why:** Team investigation found insufficient evidence that Careers@Gov possesses internal or hidden job capabilities. Forcing C@G integration risks building against the wrong upstream system.
   - **Who decided:** Adrian Ang, Barry Lim, Michelle Yip.
   - **Impact:** Pauses assumptions on C@G internal job feeds; triggers active technical discovery with Li Kun (HRPS) and Huiting (Cumulus).

2. **Position Compass as an opportunity aggregator, not a replacement HR system**
   - **Why:** Adrian emphasized that introducing a fourth standalone application workflow will result in low adoption, mirroring past user friction on OTG. Existing enterprise systems already own applicant routing and approval chains.
   - **Who decided:** Adrian Ang, aligned with squad.
   - **Impact:** Compass focuses on discovery, unified search, and skill-based recommendations, redirecting officers to authoritative source systems to complete mainstream applications.

3. **Verify upstream technical feasibility before sizing engineering effort**
   - **Why:** Cross-system access constraints, API readiness, and ringfencing logic are currently unverified. Sizing without discovery creates false schedule commitments.
   - **Who decided:** Entire squad.
   - **Impact:** Sizing for internal mainstream jobs remains gated on stakeholder discovery sessions.

4. **Remediate VAPT findings incrementally with NCS**
   - **Why:** Waiting for 100% remediation of all findings creates unnecessary release blockers.
   - **Who decided:** Jobelle Lim, Adrian Ang.
   - **Impact:** Fixed issues will be submitted to NCS for incremental rescans immediately upon completion.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Collate counts of High, Medium, and Low VAPT findings and current fix status with Adrian Lo / Rama | @Jobelle Lim | 2026-09-19 | High | 🟡 In Progress |
| Check with Daniel on the delivery status of the official NCS interim VAPT report | @Jobelle Lim | 2026-09-19 | High | 🔴 Not Started |
| Prepare consolidated VAPT status update for the WT team after internal verification | @Jobelle Lim | 2026-09-22 | Medium | 🔴 Not Started |
| Continue discovery with Li Kun (HRPS) and Huiting (Cumulus) on internal marketplace architecture and API access | @Michelle Yip | 2026-09-23 | High | 🟡 In Progress |
| Document upstream source ownership, ringfencing behavior, and API availability across HRPS and Cumulus | @Michelle Yip | 2026-09-24 | High | 🔴 Not Started |
| Attend technical discovery session arranged by Huiting with Workday (Essential) and NCS technical representatives | @Michelle Yip | 2026-09-25 | Medium | 🔴 Not Started |
| Consolidate architectural findings and present updated direction to leadership (including Gek Khiang) | @Adrian Ang | 2026-09-25 | High | 🔴 Not Started |
| Conclude spike on whether C@G supports any internal jobs or acts strictly as an external recruitment portal | @Squad | 2026-09-23 | Medium | 🟡 In Progress |

---

## Key Insights & Discussion Points: Internal Jobs Deep Dive

### 1. Product Positioning & The "Fourth System" Dilemma
- *"If we introduce a fourth system, nobody will use it."* (Adrian Ang)
- **The OTG Warning:** The team recalled that One Public Service (OTG) suffered low user adoption because it tried to introduce an unintegrated, standalone job application workflow that bypassed existing agency recruitment channels.
- **Aggregation vs. Duplication:** If internal jobs already exist in agency-specific HR systems, Compass must win on unified discovery, cross-agency visibility, and intelligent skill-matching, not by duplicating application forms or attempting to become a third-party ATS.
- **The Dual-Track Architecture:**
  1. **STIPs & Gigs (Native):** Handled natively in Compass (2-minute apply, verified profile pre-fill, in-app Offer/Reject drawer) because no enterprise public sector platform currently manages micro-tasks.
  2. **Mainstream Internal Jobs & Secondments (Aggregated):** Surfaced in Compass for search, personalized recommendations, and skill-gap analysis, but redirecting externally to the originating HR system to complete applications.

### 2. Upstream System Fragmentation
- **Civil Service Core (Ministries):** Core ministries post internal jobs and process transfers inside **HRPS** (built on SAP, maintained by NCS). 
- **Statutory Boards:** Several key statutory boards operate independently on **Cumulus** (built on Workday, implemented by Essential).
- **Public Clearinghouse (Careers@Gov):** C@G is exclusively configured for external, open-market civil service vacancies. It does not hold internal-only opportunities or ringfenced ministry openings.

### 3. Critical Operational & Access Constraints Identified
- **The Cross-System Mobility Wall:** If an officer in a ministry on HRPS discovers an internal job in a statutory board on Cumulus, they hit an identity and authorization wall. They do not possess active user credentials or intranet access on the destination platform. Surfacing opportunities alone does not solve cross-system mobility if the application door is locked.
- **Intranet & VPN Dependencies:** Both HRPS and Cumulus internal marketplaces typically operate behind government firewalls or require GSIB / civil service intranet access. If an officer browses CareerCompass on their mobile phone or personal device via Singpass, an outbound redirect link to HRPS/Cumulus may fail to load unless they are on an official government device.
- **Deep-Linking Feasibility:** It is currently unknown whether HRPS (SAP) or Cumulus (Workday) support direct URL deep-linking to a specific job requisition, or if an outbound redirect can only land the officer on a generic portal home page where they must search for the job again manually.
- **Secondments & SJRs (Scheme for Junior Researchers / Rotations):** The squad noted that secondments and cross-agency rotations are often not posted as standard job requisitions in HRPS or Cumulus. Instead, they are distributed via email circulars and ad-hoc agency memos. Ingesting these will require specific curation rather than standard database feeds.

---

## Product Perspective: Outcomes vs. Solutions

A critical takeaway from this meeting is that the team spent significant time discussing technical plumbing (APIs, webhooks, middleware) without first locking the target user and business outcome. 

The core danger: success gets defined as *"We integrated HRPS and Cumulus APIs"* instead of *"Public officers discovered and applied for more relevant opportunities."* APIs are enablers, not success measures.

### Problem Statement
> **"Public officers do not have a single, easy way to discover internal jobs, secondments, gigs, and opportunities across fragmented public sector systems."**

If Compass is primarily an aggregation and visibility layer rather than an ATS replacement, success metrics must track discovery, conversion, and workforce mobility rather than API delivery.

### Suggested North Star Metric
- **Opportunities Discovered per Officer:** Average number of opportunity detail views per active officer per month.
- **Why this metric:** Since application completion occurs externally in HRPS/Cumulus, discovery volume and engagement depth represent the primary value created by CareerCompass.

### 4-Layer Metrics Framework

#### Layer 1: Discovery (Reach & Exploration)
| Metric | Purpose / Rationale | Target |
|---|---|---|
| **% Officers Engaging with Opportunities** | Measures overall reach and catalog interest | ≥30% of active monthly users |
| **Opportunity Detail Views** | Measures depth of exploration | Track monthly growth |
| **Search-to-Click Rate** | Validates search relevance and findability | ≥70% |
| **Recommendation Click-Through Rate (CTR)** | Validates intelligent skill-matching engine | ≥20% |
| **Internal Job Discovery Rate** | Measures whether previously hidden roles are being surfaced | Track monthly growth |

#### Layer 2: Conversion (Action & Intent)
| Metric | Purpose / Rationale | Target |
|---|---|---|
| **Opportunity → Apply / Redirect Rate** | Validates whether discovery drives intent to act | ≥15% of views lead to apply click |
| **Opportunity → Raise Hand Rate** | Measures engagement with informal mobility mechanisms | Track pilot baseline |
| **Unique Applicants per Opportunity** | Measures marketplace liquidity across roles | ≥3 applicants per role |
| **Repeat Applicants** | Demonstrates ongoing officer trust in the platform | ≥25% repeat users |

#### Layer 3: Marketplace Health (Supply Side)
*The squad focused almost entirely on the applicant experience, but opportunities require posters to function.*
| Metric | Purpose / Rationale | Target |
|---|---|---|
| **Agencies Actively Surfacing Opportunities** | Measures breadth of participating public sector bodies | All 6 pilot agencies on Day 1 |
| **Total Opportunities Active** | Ensures sufficient catalog density | 20–30 active postings at launch |
| **% Opportunities with Applicants** | Avoids empty/dead postings | ≥80% within 14 days |
| **Time to First Applicant** | Leading indicator of poster satisfaction | ≤5 days from publish |

#### Layer 4: Mobility Outcomes (Workforce Impact for PSD & Gek Khiang)
| Metric | Purpose / Rationale |
|---|---|
| **Internal Moves Facilitated** | Total transfers completed where discovery initiated on Compass |
| **Secondments Filled** | Strategic workforce redeployments enabled |
| **Gigs Completed** | Short-term task liquidity across departments |
| **Cross-Agency / Cross-System Moves** | Transfers bridging the HRPS (Ministry) and Cumulus (Stat Board) divide |

---

### MVP Aggregation Validation Targets

If R1 validates the hypothesis that aggregation creates standalone value without native ATS apply, track these 5 operational gates:

| Gate Metric | Target | Validation Purpose |
|---|---|---|
| **Internal Jobs Coverage** | ≥90% of available roles in pilot agencies | Proves catalog completeness |
| **MoM Internal Discovery Growth** | Positive growth | Proves officers rely on Compass for discovery |
| **Outbound Click-Through Rate** | ≥20% | Proves listings generate genuine candidate intent |
| **Redirect Success Rate** | ≥95% | Proves external links route cleanly to HRPS/Cumulus |
| **Search Success Rate** | ≥80% | Proves officers find relevant listings on initial query |

---

### The Acid Test: What Becomes Harder Without Compass?

Before locking final telemetry, leadership must align on which fundamental question Compass solves:

| Scenario | Core Failure if Compass Disappeared | Primary Metric Focus |
|---|---|---|
| **Option A** | Officers cannot find cross-system opportunities | **Discovery & Detail Views** (Recommended for R1) |
| **Option B** | Officers cannot complete applications smoothly | **Application Completion Rate** |
| **Option C** | Hiring agencies struggle to attract applicant volume | **Marketplace Liquidity & Fill Rates** |
| **Option D** | Central government cannot improve workforce mobility | **Cross-Agency Mobility Outcomes** |

### Lean Value Tree Alignment

```
[Outcome]
Increase visibility and uptake of public sector development opportunities.
   │
   ├── [Leading Metrics]
   │     ├── Opportunity searches & search success rate
   │     ├── Detail views per active officer
   │     ├── Recommendation click-through rate (CTR)
   │     └── Outbound redirect clicks to HRPS/Cumulus
   │
   └── [Lagging Metrics]
         ├── Applications submitted on source platforms
         ├── Raise-hand submissions
         ├── STIPs & Gigs completed
         └── Cross-agency mobility transfers facilitated
```

---

## Open Questions & Risks

### Open Questions
- [ ] Do HRPS and Cumulus expose REST APIs or webhooks for vacancy ingestion, or do they rely on batch SFTP flat-file extracts? (**Owner:** @Michelle Yip, **By:** 2026-09-24)
- [ ] How is ringfencing enforced in HRPS and Cumulus today (by ministry code, scheme of service, or user clearance grade)? (**Owner:** @Michelle Yip, **By:** 2026-09-24)
- [ ] If an officer in a ministry on HRPS finds an internal role in a statutory board on Cumulus, can they apply without an active account on the destination system? (**Owner:** @Adrian Ang / @Michelle Yip, **By:** 2026-09-25)
- [ ] What is the exact delivery timeline for the NCS interim VAPT report from Daniel? (**Owner:** @Jobelle Lim, **By:** 2026-09-19)

### Key Risks Flagged
1. **Upstream Source Fragmentation:** Internal postings may remain split across HRPS, Cumulus, OTG, and informal email broadcasts. Technical integration cannot compensate for a lack of central posting policy.
2. **Governance & Cross-System Mobility Policy:** Public sector HR rules may restrict cross-agency applications between ministries and statutory boards, rendering discovery moot if officers cannot apply.
3. **Data Taxonomy Inconsistency:** Aggregating job postings across different platforms without standardized role taxonomies and agency codes risks degrading search quality and match relevance.

---

## Next Steps

**Immediate (Today - 22 Sep):**
- Jobelle establishes ground truth on VAPT finding counts and syncs with Daniel (NCS).
- Michelle completes discovery outreach with Li Kun and Huiting.
- Michelle, Rama, and Barry finalize R1 technical estimation sync with these discovery boundaries in mind.

**Follow-Up Sessions:**
- **Technical Estimation Sync:** Today, 18 Sep 2026 (Rama, Barry, Michelle).
- **HRPS / Cumulus Stakeholder Discovery:** Target week of 21–25 Sep 2026 (Michelle, Huiting, Li Kun, vendor technical reps).
- **Leadership Alignment Sync:** Target 25 Sep 2026 (Adrian Ang, Gek Khiang).
