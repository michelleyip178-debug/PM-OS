# APA Writeup — Michelle Yip
**Role:** Product Manager Apprentice (Pathfinder)

**Programme:** CareerCompass (OTEP)

**Period:** April 2026 — present

---

## Context

I am a Business Analyst at Level 2, currently on the Pathfinder programme working on CareerCompass (OTEP). I own the Opportunities Listing, WOG Authentication, POCDEX integration, and FormSG features, working with a pod of 1 designer, 1 tech lead, and 2 engineers.

---

## Impact — C+ (Meets expectations of the job level)

When I picked up OTG ingestion, only 160 of 633 live gigs were passing validation — a 75% failure rate. I led the discovery and data quality analysis end-to-end, produced a structured brief with a per-agency remediation plan, and got v3 ingestion rules (D-026) implemented. That unblocked onboarding for Enterprise Singapore, clearing 178 previously blocked gigs.

I also found that OTG, C@G, and CompBank were using three different taxonomies with no agreed canonical structure. I mapped all three, quantified the gap (210 unmappable C@G listings), and presented four options with trade-offs. That gave the senior technical lead what he needed to close a decision that had been deferred for weeks and confirm WOG 23 Job Families as the canonical structure.

On WOG Auth, I led discovery and scoped the feature to a pilot of 6 agencies (~5,400 officers). For POCDEX, I spotted a hidden 4-story dependency chain that would've been invisible in standard sprint planning, elevated it to a dedicated Epic, and restructured sequencing to land infrastructure in Sprint 3 before it blocked Sprint 4.

---

## Craft & Execution — B (Exceeds expectations of the job level)

I ran DoR audits before every planning ceremony across 4 sprints. In Sprint 4 alone, I caught 6 AC conflicts before they reached engineering. Stories that went into planning were ready to build, which meant the team wasn't burning sprint capacity on rework or mid-sprint clarifications.

I kept a running decisions log from D-001 to D-026+ throughout the MVP build, capturing rationale, owner, and status for every scope call. We had 0 unlogged scope changes across 4 sprints. When stakeholders questioned decisions, we could point to the log rather than relitigate from memory.

I also proposed separating the QA and UAT environments after noticing the two were getting conflated. Engineers now verify AC independently before officers test real workflows. It removed a recurring source of ambiguity and cleaned up what was reaching UAT.

---

## Ownership — B (Exceeds expectations of the job level)

The POCDEX dependency chain wasn't on anyone's radar. I caught it, mapped the full 4-story chain across squads, elevated it to an Epic, and restructured sequencing across 2 sprints to get infrastructure landed in Sprint 3. Without that, POCDEX would have blocked Sprint 4 and put the 100% auto-provisioning target for ~5,400 pilot officers at risk.

On OTG operations, I noticed that batch job mismatches were being handled as UI fixes rather than escalated upstream. I pushed for root cause fixes in the source systems instead. ~113,000 WOG officers see accurate opportunity data because the problem was fixed properly, not patched over.

---

## Strategic Alignment — C+ (Meets expectations of the job level)

One thing I changed early was how we wrote sprint goals. We'd been framing them around delivery tasks. I pushed to reframe them around officer outcomes instead. That gave the team a clear standard to push back on scope creep without needing to escalate. It also contributed directly to 0 unlogged scope changes across 4 sprints.

For WOG Auth, I kept discovery anchored to the pilot target throughout — 6 agencies, ~5,400 officers. That kept the feature scope tight and the team focused on what needed to ship for October.

---

## Culture and Organisational Influence — B (Exceeds expectations of the job level)

I ran a cross-agency AI Learn-Create-Share session for the GovTech PM community. 4.25/5 satisfaction score, 75% of attendees said they came away with more clarity on using AI in their work. One attendee went on to build their own synthesis assistant and shared it with their team.

For OTG, I designed a 4-week, 12-session handover sequenced by complexity rather than recency. I didn't want the incoming team to inherit a stack of documents they'd have to reverse-engineer. The goal was for them to understand the system well enough to make their own calls.

---

## Career Focus

1. Get sharper at problem framing. I'm good at structured discovery but I want to generate stronger hypotheses earlier, before I've fully mapped the space.
2. Lead trade-off conversations with senior stakeholders more independently. I still lean on manager support in those moments more than I'd like.
3. Build data literacy. I want to define better metrics and actually use analytics to drive decisions, not just reference numbers that already exist.

---

## Next Steps

- Ship OTEP MVP by October 2026: WOG Auth, Opportunities Listing, and POCDEX integration working end-to-end.
- Lead R1 scoping: kick off discovery for FormSG pre-fill and sequence what comes after MVP.
- Get tighter on PM fundamentals: PRD writing, prioritisation, and building the habit of connecting every delivery decision to a measurable outcome.

---

## Calibrated Ratings

| Dimension | Original | Calibrated | Rationale |
|---|---|---|---|
| Impact | C+ | C+ | Holds. OTG fix, taxonomy decision close, POCDEX catch are solid but not yet fully evidenced — confirm 178 gigs figure with engineering before considering an upgrade. |
| Craft & Execution | B | B | Holds. Most well-evidenced rating in the APA. |
| Ownership | B | B | Holds. POCDEX restructure and upstream escalation are genuinely B-level. |
| Strategic Alignment | C+ | C+ | Holds. Sprint goal reframe and WOG Auth scope defence are solid contributions but need more evidence of pressure-tested trade-offs to clear B. |
| Culture & Org Influence | A | B | Downgrade unless handover impact and LCS ripple effect can be verified with named evidence. |

---

## Feedback Seekers (15 people)

**Technical partners — Craft & Execution, Ownership:**

1. **Pow Hwee** — Tech Lead. Verify the POCDEX dependency catch, DoR audit impact, and whether AC quality reduced mid-sprint clarifications.
2. **Leo** — Engineer. Sprint quality and whether stories landing in planning were ready to build.
3. **Thomas** — Engineer. Day-to-day execution quality and whether AC writing reduced ambiguity during build.

**WD colleagues — OTG ops and CareerCompass product:**

4. **Christopher** — WD colleague on OTG ops. Speak to handover quality — whether the 4-week, 12-session structure equipped him to run operations independently. Also the OTG batch job mismatch escalation and whether the upstream fix made ops easier. Critical for Culture evidence.
5. **Alan** — WD colleague on CareerCompass product. Speak to cross-programme collaboration, scope and dependency communication, and what it's like to work alongside you as a PM.

**Business stakeholders — Strategic Alignment, Impact:**

6. **Xian Zhang** — Business Stakeholder. Scope decisions, design review preparation, and whether you came with clear options and a point of view.
7. **Jacky** — Business Stakeholder. Scope discipline in working-level demos and whether trade-off framing was clear.
8. **Rama Moorthy** — Delivery Lead. Whether dependency risks were flagged early and sprint sequencing decisions held up under delivery pressure.
9. **Diana** — Opportunities stakeholder. Stakeholder inclusion and whether she had what she needed at the right time.
10. **Barry Lim** — Resource decision-maker. Whether resourcing asks were well-framed and came with a clear business case.

**Design partner — Collaboration quality:**

11. **Amber** — Designer. Brief quality, AC clarity before design started, and whether you knew what decision you needed from her.

**Peer PM — Cross-squad collaboration:**

12. **Imelda** — Peer PM. Cross-feature dependency handling, whether you flagged impacts early, and what it's like to coordinate across squads.

**GovTech PM community — Culture & Org Influence:**

13. **LCS attendee who built their own synthesis assistant** — get a written note or Slack screenshot. This is the evidence that separates Culture at B from A.
14. **PMP LCS programme organiser** — whether your session was above average and whether it's being referenced or repeated.

**Senior stakeholders:**

15. **Mark or GK** — senior demo audience. Whether your framing was strategic and gave them confidence in programme progress.

---

**Priority if you can only chase 5:** Pow Hwee, Christopher, Xian Zhang or Jacky, the LCS attendee who built their own tool, and Alan.

---

## Pending Evidence to Confirm Before Submission

- [ ] 178 gigs unblocked — confirm post-v3 count with engineering
- [ ] ~113,000 WOG users — verify against latest OTG monthly report or remove/scope down the figure
- [ ] 4.25/5 and 75% clarity figures — locate post-session feedback form
- [ ] LCS attendee who built synthesis assistant — name them, get written confirmation
- [ ] WOG Auth go-live date or pilot onboarding count — add once shipped
- [ ] 12-session handover — confirm all sessions completed; get written note from Christopher on what worked
