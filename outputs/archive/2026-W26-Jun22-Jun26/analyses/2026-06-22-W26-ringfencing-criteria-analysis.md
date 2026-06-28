# Ringfencing Criteria Analysis
*Derived from live OTG filter data | 2026-06-22*

---

## The four key criteria

**1. Agency ownership of the deliverable**
If the output primarily benefits or belongs to a specific agency → **Location INCLUDE filter** for that agency. Enterprise Singapore exemplifies this: 170 opps ringfenced to their own staff, all on active projects. Rule of thumb: *"Does this gig produce something the host agency owns?"* → filter by location.

**2. Functional/domain prerequisite**
If the opportunity requires a specific professional background to contribute meaningfully → **BU + Function filter**. The 9 opps using this target HR, Policy & Planning, Data, and ICT roles. Rule of thumb: *"Would someone from an unrelated function waste their time or the host's time?"* → filter by function.

**3. Cross-agency mobility programmes → no filter**
SJRs, Secondments, and Jobs are intentionally WOG-wide; restricting them defeats their purpose. These 238 open opps (52% of unfiltered live) should remain unfiltered by design.

**4. Collaborative or WOG-wide initiatives → no filter**
Generic STIPs, learning journeys, and whole-of-government events (data literacy, AI bootcamps, policy webinars) are open to all by intent. Filtering would reduce reach unnecessarily.

---

## Derived ruleset summary

| Scenario | Recommended filter |
|---|---|
| Agency-specific project/gig | Location INCLUDE (host agency) |
| Role needs specialist domain skills | BU + Function INCLUDE |
| Cross-agency rotation / mobility | No filter |
| WOG learning / event / STIP | No filter |
| Multi-agency collaboration | Location INCLUDE (all partner agencies) |

---

## Structural note

The data shows the EXCLUDE filter is almost never used (1 instance vs. 242 INCLUDE). The platform's de facto standard is a **whitelist model** -- define who *can* see it, not who can't. Any new ringfencing guidance should formalise this as the default approach.

---

## Ringfencing criteria (agreed)

### MVP scope

One criterion in scope for MVP, aligned with I-012 (ring-fencing = agency-level only):

| Scenario | Filter | Logic |
|---|---|---|
| Opportunity belongs to a specific agency | Location INCLUDE (host agency) | If Location is present in the record, apply it |
| All other opportunities (WOG-wide, cross-agency, learning events, STIPs) | No filter | Visible to all by default |

**Structural rule:** Whitelist model only -- define who CAN see an opportunity, not who can't. No EXCLUDE filters. This formalises what the data already shows (242 INCLUDE vs. 1 EXCLUDE in live data).

### Deferred to R1+

| Scenario | Filter |
|---|---|
| Role requires specialist domain skills | Job Function + Function INCLUDE |
| Multi-agency collaboration | Location INCLUDE (all partner agencies) |

Rationale for deferral: Job Function is optional in ingestion, making Job Function-based ringfencing unreliable for MVP. Lower volume (9 opps) and higher implementation complexity -- better to get Location-based ringfencing right first.

---

## Implication for Job Function field optionality (I-019)

Job Function is an active filter for 9 opps using "Job Function + Function INCLUDE" for domain-specific ringfencing. This is deferred to R1+. For MVP, Job Function is optional during ingestion -- records without it are ingested and visible to all by default. The ingestion job should log which records came in without Job Function so the R1+ ringfencing implementation has visibility into incomplete records.
