# Slack Thread Roundup: Week of Jun 22-26, 2026

**Source:** Slack threads (AI-summarized)

**Participants:** Adrian ANG, Michelle YIP, Imelda MO, Rama MOORTHY, Barry LIM, Victor ONG, Pow Hwee TAN

**Processed:** 2026-06-29

---

## Summary

Seven parallel threads covering CareerCompass MVP readiness. Key themes: Max bot integration decision pending (currently low confidence), attribution tracking confirmed as OKR-critical, course aggregator effort analysis in progress, CMM timeline under pressure for Q4, and master data standardization being resolved (29 WOG FAs as source of truth). Auth requirements shared for QA/UAT verification.

---

## Decisions Made

1. **Attribution tracking is a critical MVP OKR**
   - Track full path: Compass → course detail page → LEARN → completion
   - "Completion" = actual finishing of course or opportunity within a timeframe (not just click-through)
   - CTR from course detail page to LEARN is in scope; learner history connection via Victor's API is needed

2. **29 WOG FAs as master data for course filtering**
   - LEARN has 44 domains; WOG FC has 29
   - Decision: filter on the 29 WOG FAs as expected by WD
   - Categories not closely matching these FAs to be handled (approach TBD)
   - Master data numbers confirmed: 127 agencies, 30 job families, ~346 job functions

3. **Backlog tracker to become product request tracker**
   - Imelda proposed converting it for external business teams
   - Adrian to rename sheet to differentiate from backlog (done)

4. **Roadmap transparency approach under discussion**
   - Adrian advocates for full WOG visibility via Excel or a public Compass page
   - No final decision yet

---

## Action Items

| Task | Owner | Due Date | Priority |
|------|-------|----------|----------|
| Check with Max team on bot strengths and future roadmap | Adrian | TBD | Medium |
| Define placement for Max bot (profile page) and engagement survey integration | Adrian | TBD | Low |
| Confirm learner history connection via Victor's API for attribution tracking | Imelda / Victor | TBD | High |
| Share analysis of effort and dependencies for Course Aggregator Option 2 | Rama / Barry | TBD | High |
| Confirm if HRPS and Cumulus can display ALL LEARN courses | Imelda | TBD | High |
| Provide high-level ETA for CMM v1.0 + v1.1 targeting Q4 production | Victor / Barry | TBD | High |
| Verify Career Compass Login & Auth Requirements doc for QA/UAT/Prod | Pow Hwee, Michelle | TBD | High |
| Resolve handling of course categories not matching 29 WOG FAs | Michelle / Imelda | TBD | Medium |
| Decide on roadmap transparency format (Excel vs Compass page) | Adrian | TBD | Low |

---

## Key Insights

**Max Bot:** Current consensus is it's "quite useless" as a FAQ bot. Adrian is checking roadmap before committing to integration. Low confidence it adds value at MVP. Placement suggestion: profile page + engagement survey.

**Attribution tracking:** This is the business North Star metric (% of enrolments attributed to OTEP). Already flagged as a risk in the Learning Course Discovery PRD — good that it's now confirmed as a tracked OKR. The API dependency on Victor for learner history is the key technical risk here.

**Course aggregator complexity:** Option 2 plays a bigger role in routing users but brings more integration dependencies (up to 5 systems: HRPS, Cumulus, DA + others). Effort analysis is still pending — this could be a timeline risk.

**CMM acceleration request:** WD and CDGO are concerned about operationally scaling competency management. This is flagged as a scale-out risk for Compass. Adrian is pushing for a Q4 prod release discussion on CMM v1.0 + v1.1. Note: JD CIE does not have SB competencies (confirmed by Victor).

**Data standardization:** 44 LEARN domains vs 29 WOG FAs is now resolved directionally (use 29), but the engineering alignment work to standardize agency/job family/job function master data is still in progress.

---

## Open Questions

- [ ] What is Max bot's actual roadmap and capability timeline? Will it become useful within Compass's planning horizon? -- Adrian to follow up with Max team
- [ ] How do we handle course categories that don't map cleanly to the 29 WOG FAs? -- Michelle / Imelda to align
- [ ] Can learner history be connected via Victor's API in time for MVP attribution tracking? -- Imelda / Victor
- [ ] What is the realistic effort for CMM v1.0 + v1.1 and does Q4 hold? -- Victor / Barry to scope
- [ ] Which 5 systems does the course aggregator need to integrate with? Is this all in scope for MVP? -- Rama / Barry
- [ ] Is the roadmap transparency decision (Excel vs Compass page) owned by Adrian alone or needs alignment? -- Adrian

---

## Context for Future Reference

**Learning Course Discovery PRD risk confirmed:** The attribution tracking dependency (cannot measure enrolment CVR without OTEP attribution in LEARN) is now being actively addressed as a MVP OKR. This validates the risk flagged in the PRD.

**CMM is a potential schedule risk for scale-out.** If WD and CDGO cannot scale competency management operationally, Compass's personalization features may be limited. Worth watching as Q4 approaches.

**Master data (agencies/job families/job functions) is being standardized** across HRPS, LEARN, and WOG FC. The confirmed numbers (127 agencies, 30 JFs, ~346 JFNs) should be locked as engineering reference data once validated.

---

*Processed from AI-summarized Slack threads. No verbatim transcript available -- action items and decisions reflect synthesis of thread summaries.*
