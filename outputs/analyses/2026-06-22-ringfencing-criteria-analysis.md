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

## Implication for BusinessUnit field optionality (I-019)

BU appears as an active filter in criterion 2 (9 opps use "BU + Function INCLUDE" for domain-specific ringfencing). This means making BU optional on the opportunity record may have ringfencing consequences -- but only if the opportunity's BU field is what drives the filter.

**Open question:** Is the BU field on the opportunity record the same BU used in the ringfencing filter, or does the ringfencing filter use the applicant's BU?

- If opportunity BU drives the filter: making BU optional could cause those 9 opps to lose ringfencing criteria, becoming unintentionally WOG-wide visible
- If applicant BU drives the filter: making opportunity BU optional is lower risk

This needs to be confirmed with Pow Hwee before deciding I-019.
