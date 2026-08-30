# Meeting Notes: Risk Register Ownership, Readiness Checklist, Pow Hwee Departure, R1 Scope

**Date:** 2026-08-27

**Attendees:** Michelle Yip, Jace (direct manager)

**Meeting Type:** Governance / readiness review

---

## Summary

Split the Risk Register's ownership by domain (Product owns Project + Data Security; Engineering owns SSP, Cloud, Infra). Ran through the Readiness Checklist and found change management status unclear — unconfirmed whether it's actively tracked. Flagged Pow Hwee's planned departure after MVP to Jace, who raised strong concern given her role as technical gatekeeper. Confirmed R1 direction: prioritize bringing STIP, Gig, and SJR opportunity types into OTEP so the OTG vendor contract can end on schedule by March 2028.

---

## Decisions Made

1. **Risk Register ownership split by domain**
   - **What:** Product owns Project and Data Security risk categories. Engineering owns SSP, Cloud, and Infra.
   - **Why:** Not stated in the notes — likely to match risk ownership to the team with actual visibility/control over each domain, consistent with the "who decides" governance pattern flagged repeatedly this week (see R13 in the [25 Aug RAID log](../analyses/2026-08-25-W35-raid-log.md)).
   - **Impact:** Product no longer needs to track or report on SSP/Cloud/Infra risks directly — routes those to Engineering. Clarifies accountability for the next risk register update.

2. **R1 priority confirmed: STIP, Gig, SJR opportunity types**
   - **What:** R1 should focus heavily on bringing STIP, Gig, and SJR opportunities into OTEP.
   - **Why:** Enables ending the contract with the OTG vendor on schedule by March 2028 — this is a hard external deadline, not just a scope preference.
   - **Impact:** Directly supports the existing OKR target (≥80% of job opportunities — STIPs, GIGs, SJR, C@G — listed on OTEP; ≥50% of STIP/Gigs applications migrated from FormSG to OTEP by Month 3, per [otep-roadmap-okrs-2627.md](file:///Users/michelleyip/Documents/PM-skills-ALL-1/06-skills-and-decisions/otep-roadmap-okrs-2627.md)). This gives that existing OKR a concrete forcing deadline (Mar 2028 vendor contract end) it didn't previously have attached in writing.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Update Risk Register to reflect Product/Engineering ownership split (Project + Data Security vs. SSP/Cloud/Infra) | Michelle | Not specified — flag for this week | High | 🔴 Not Started |
| Clarify change management status on the Readiness Checklist — confirm whether it's actively ongoing or stalled | Michelle | Not specified | High | 🔴 Not Started |
| Follow up with Jace on Pow Hwee's post-MVP departure — confirm timeline and discuss gatekeeper succession/handover plan | Michelle | Not specified — should be soon given Jace's concern level | High | 🔴 Not Started |
| Scope R1's STIP/Gig/SJR work against the Mar 2028 OTG vendor contract end date — confirm this is reflected in R1 planning artefacts (open-items.md #59) | Michelle | Not specified | Medium | 🔴 Not Started |

**Notes:**
- No due dates were given for any of these — all four should get dates within 48 hours per the "no due date = schedule it" rule.
- The Pow Hwee item is arguably the most time-sensitive: Jace's concern signals this needs a plan, not just a flag, before MVP ships.

---

## Key Insights & Quotes

**Governance/Risk:**
- Risk Register ownership was previously undifferentiated by domain — this splits accountability so Product isn't tracking risks (SSP, Cloud, Infra) it doesn't have direct visibility into.
- Change management status being unclear on the Readiness Checklist is a gap worth naming explicitly, not assuming it's "probably fine" — this matches a pattern already flagged repeatedly this week in the RAID log (R13: "who decides" gap, six+ instances).

**People risk:**
- Pow Hwee is described internally as "the gatekeeper" — Jace's concern reads as more than routine transition planning. Worth treating this as a named risk, not an FYI.
- No detail yet on Pow Hwee's actual last day, what "gatekeeper" specifically covers (technical sign-off? architecture decisions? something else?), or who could absorb that role.

**Strategic direction:**
- R1's STIP/Gig/SJR focus is now explicitly tied to a hard external forcing function (OTG vendor contract ending Mar 2028), not just an OKR target. That changes how this should be scoped and defended in future planning — it's a deadline-driven scope decision, not an aspirational one.

---

## Open Questions

- [ ] What specifically does "gatekeeper" mean for Pow Hwee's role — which decisions/approvals route through her that would need a new owner? - **Owner:** Michelle (with Jace) - **By:** Not specified, should be soon
- [ ] Is Pow Hwee's departure date confirmed, or still a plan/rumor at this stage? - **Owner:** Michelle - **By:** Not specified
- [ ] What is "the Readiness Checklist" specifically — is this the same as the VAPT readiness checklist already flagged in the 25 Aug RAID log (R15, owned by Jace Tan/Jobelle Lim), or a separate/broader readiness artifact? - **Owner:** Michelle - **By:** Before next update
- [ ] Who owns confirming change management status, and what would "ongoing" look like if confirmed? - **Owner:** Unclear — Michelle to determine - **By:** Not specified

---

## Blockers

1. **Change management status unclear on the Readiness Checklist**
   - **Blocked by:** No named owner or confirmed status yet
   - **Impact:** Readiness Checklist can't be marked complete/trustworthy if this line item stays ambiguous — risks the same "assumed fine, actually not tracked" pattern that caused the PS/DS miscount two weeks ago (per RAID log learnings)
   - **Resolution:** Identify the owner and get an explicit status (ongoing / not started / N/A) rather than leaving it implied

2. **Pow Hwee gatekeeper succession — no plan yet**
   - **Blocked by:** No successor identified, no documented scope of what she gatekeeps
   - **Impact:** Risk to post-MVP delivery continuity if she leaves before a handover plan exists
   - **Resolution:** Needs a direct conversation with Jace (and likely Pow Hwee) to scope the role and identify next steps

---

## Next Steps

**Immediate (This Week):**
- Update the Risk Register with the new Product/Engineering ownership split
- Get an explicit status on change management (Readiness Checklist)
- Confirm with Jace next steps on Pow Hwee's departure and gatekeeper handover

**Short-term (Next 2 weeks):**
- Reflect the Mar 2028 OTG vendor deadline in R1 planning artefacts (ties to open-items.md #59)
- Clarify whether "Readiness Checklist" is the same artifact as R15 in the RAID log or something separate — reconcile trackers if they're duplicating

---

## Context for Future Reference

This session ties together three previously separate threads:
1. The RAID log's ongoing "who decides" governance gap (R13) — the risk register ownership split is a direct instance of naming an owner rather than leaving it ambiguous.
2. R15 (VAPT readiness checklist, owned by Jace Tan/Jobelle Lim, flagged 25 Aug) — worth confirming if this is the same "Readiness Checklist" referenced here, since a duplicate/parallel tracker would recreate the exact governance confusion R13 already flags.
3. R1 planning artefacts (open-items.md #59) — the STIP/Gig/SJR direction should get folded into that in-progress artefact set rather than tracked separately.

**Related open items:** [open-items.md #59](file:///Users/michelleyip/Documents/PM-skills-ALL-1/00-hub/open-items.md) (R1 planning artefacts), [25 Aug RAID log](../analyses/2026-08-25-W35-raid-log.md) (R13, R15).

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

Product should focus on Project and Data security in the Risk Register. SSP, Cloud and Infra will be under Engineering Team.

We also need to run through the Readiness Checklist - right now, change management is not clear and unsure if it's ongoing.

Highlighted to Jace about Pow Hwee leaving the team after MVP and Jace is very concerned as we need Pow Hwee as the gatekeeper. R1 should focus heavily on bringing in STIP, Gig and SJRs so that we can end the contract with OTG vendor timely by Mar 2028.

</details>
