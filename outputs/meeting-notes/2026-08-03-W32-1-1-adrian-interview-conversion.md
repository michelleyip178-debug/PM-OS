# Meeting Notes: 1:1 with Adrian — PM Apprenticeship Coaching

**Date:** 2026-08-03

**Attendees:** Adrian Ang (Director of Product Management, coaching Michelle's BA→PM conversion), Michelle Yip

**Meeting Type:** 1:1 — PM apprenticeship coaching, first of a new fortnightly cadence, last-minute addition to calendar today

**Duration:** Not specified

---

## Summary

This was a wide-ranging coaching conversation covering five threads: the **one-pager** (opportunity-focused, Michelle's deliverable, with Jace covering the risk/complexity side), **interview preparation structure** (one-pager + live case, block training, mock interviews), Michelle's self-identified **skill gap** (linking metrics to business outcomes), **team dynamics/conflict-handling** as a PM (tension between Rama and Howie/Paoli, siloed working), and **SSO integration readiness** (Compass↔DLE), which surfaced real gaps — no clear test account, unclear specs, incomplete tracking. Adrian's throughline: real ambiguity and team friction happening right now (SSO, cross-team tension) is valuable interview material if Michelle can articulate it as PM judgment in action, not just noise to survive.

**Correction from earlier same-day note:** the one-pager's scope-split partner is **Jace**, who owns the risk/complexity side while Michelle owns opportunity — this wasn't captured in the original shorter note.

---

## Decisions Made

1. **One-pager scope split: Michelle owns opportunity, Jace owns risk/complexity.**
   - **Why:** Divides the one-pager's coverage across two people so each can go deep rather than covering everything shallowly.
   - **Who decided:** Adrian.
   - **Impact:** Michelle's draft should stay scoped to the opportunity side; risk/complexity content is Jace's to own, not something Michelle needs to backfill.

2. **One-pager timeline: final draft by September, sent out by October (for early assessment).**
   - **Why:** Gives a working draft window before the October assessment cycle.
   - **Who decided:** Adrian.
   - **Impact:** Confirms and refines the timeline from the original shorter note — "September" is specifically for a *final draft*, "October" is specifically for *sending it out*, not just vague month-level targets.

3. **Interview prep will use multiple channels: block training (PM 101/201), mock interviews (Sep/Oct), self-driven weekend practice, and AI/online tools as thought partners for metrics framing.**
   - **Why:** Adrian is explicit that block training alone won't be enough — self-practice matters as much as formal sessions.
   - **Who decided:** Adrian.
   - **Impact:** Michelle needs to build in her own practice time, not just attend scheduled sessions — this connects directly to the existing `/spine-drill` habit already in progress.

4. **Michelle is explicitly positioned to step into cross-team alignment gaps as part of PM growth, not just observe them.**
   - **Why:** Adrian frames PMs as the people who clarify assumptions and bridge misunderstandings between engineers/stakeholders (named example: Rama, Paoli, Howie, CSC).
   - **Who decided:** Adrian.
   - **Impact:** This reframes today's SIT readiness intervention (where Michelle redirected a vague SIT planning discussion — see `2026-08-03-W32-csc-otep-sit-readiness.md`) as exactly the kind of move Adrian is coaching toward, not a one-off.

5. **SSO follow-up approach: Michelle joins the 4pm SSO meeting to observe and identify the exact gap (test account? missing specs? tracking?), and considers using her own Learn account as a temporary test path if appropriate.**
   - **Why:** There's real confusion over what's actually missing for SSO validation, not just who owns fixing it.
   - **Who decided:** Adrian, with Michelle's agreement.
   - **Impact:** Directly overlaps with the CSC SSO Slack thread processed earlier today — see Context for Future Reference.

---

## Action Items

### Michelle's Actions

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Draft the one-pager (opportunity framing, using OTG + C@G data) | Michelle | Final draft by September 2026; sent by October 2026 | High | 🔴 Not Started (has a version started in Google Drive) |
| Join the 4pm SSO meeting — identify exact gap (test account / specs / tracking) | Michelle | Today | High | 🔴 Not Started |
| Clarify whether a test SSO account exists, or whether Michelle can temporarily use her own Learn account to validate "Compass A = Learn A" | Michelle | Today's 4pm meeting | Medium | 🔴 Not Started |
| Push for clear documentation of the Compass→DLE click flow and expected behavior | Michelle | Ongoing | Medium | 🔴 Not Started |
| Proactively step into Slack/meeting misunderstandings (e.g. Rama and others talking past each other); suggest short calls over long async threads | Michelle | Ongoing | Medium | 🔴 Not Started |
| Prepare experience deep-dive content | Michelle | October 2026 | High | 🔴 Not Started |
| Prepare live-case material | Michelle | October 2026 | High | 🔴 Not Started |
| Capture current work (MVP, UAT, SSO, team tension) as concrete interview story material | Michelle | Ongoing | Medium | 🔴 Not Started |
| Continue self-driven practice (mock interviews, problem framing, metrics) | Michelle | Ongoing, weekends | Medium | 🔴 Not Started (connects to `/spine-drill`) |
| Attend fortnightly 1:1s with Adrian | Michelle | Ongoing, every 2 weeks | High | 🔴 Not Started |

### Adrian's Actions

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Send opportunity-related data (OTG + C@G stats) for the one-pager | Adrian | Not yet set | Medium | 🔴 Not Started |
| Continue guiding Michelle through PM training and mock interviews | Adrian | Sep/Oct 2026 | Medium | 🔴 Not Started |

### Others' Actions

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Clarify SSO integration specs and whether a test account is ready | Rama / Engineers / CSC-CSE | Not yet set | High | 🔴 Not Started |
| Align on the actual Compass→DLE flow and risk areas | Rama / Engineers / CSC-CSE | Not yet set | High | 🔴 Not Started |
| Continue understanding cross-team issues; work with Michelle to clear SSO/UAT blind spots; explore using existing Learn accounts for testing | Imelda | Ongoing | Medium | 🔴 Not Started |

**Notes:**
- The SSO-related action items here overlap substantially with today's other two SSO/SIT threads (`2026-08-03-W32-csc-sso-slack-pow-hwee-rama.md` and `2026-08-03-W32-csc-otep-sit-readiness.md`) — see Context for Future Reference for how these reconcile.

---

## Key Insights & Quotes

**Nature of the conversion, reframed:** This isn't just a BA→PM title conversion — Adrian is running an active coaching relationship where real work (SSO ambiguity, team tension) is being explicitly used as training material. The one-pager and mock interviews are downstream outputs; the actual coaching mechanism is Adrian pointing at live ambiguity and asking Michelle to practice PM judgment on it in real time.

**On frameworks:** Adrian explicitly said there's no single "correct" PM framework and the curriculum isn't a rigid textbook — the block training (PM 101/201) is meant to gear Michelle toward the interview format, not replace hands-on judgment.

**On the skill gap:** Michelle identified metrics — specifically linking metrics to business outcomes — as her main gap. Adrian's suggested approach is using AI/online tools as a "thought partner" on Michelle's own specific examples, not generic study. This is a concrete, actionable framing worth carrying into `/spine-drill` Cycle 2 (which already adaptively weights toward the weakest dimension from feedback — see `.claude/skills/spine-drill/SKILL.md`).

**On team dynamics as interview material:** Adrian named real, current tension — Rama trying to do too many things alone and struggling to read Howie's short/terse communication style; Paoli and Rama having spec/expectation misunderstandings — and explicitly framed this as valuable interview material *if Michelle can articulate her intervention*. This turns today's actual SIT readiness meeting (where Michelle intervened on vague SIT planning) into live evidence for the interview case, not just operational work.

**Hidden interview-story material identified in this meeting:**
- **Execution example:** driving clarity on an ambiguous SSO integration across Compass, DLE, and CSC/CSE
- **Risk management:** spotting blind spots (missing test account, missing specs, missing tracking)
- **Team leadership without authority:** stepping in between Rama, Howie, Paoli, and Imelda to clarify assumptions and reduce tension
- **Outcome focus:** ensuring "Compass A = DLE A" so users get a smooth SSO experience

Recommended story structure: Problem → Impact/Risk → Michelle's intervention as PM → Outcome/Learning.

---

## Open Questions

- [x] ~~What does "interview conversion" mean here?~~ **Resolved 2026-08-03:** Business Analyst → Product Manager role conversion, structured as ongoing PM apprenticeship coaching.
- [x] ~~Exact date for the fortnightly 1:1 series?~~ **Resolved 2026-08-03:** Cadence starts today.
- [x] ~~When is the one-pager drafted vs. finalized?~~ **Resolved 2026-08-03:** Final draft by September 2026, sent out by October 2026.
- [x] ~~Who is Michelle's one-pager scope-split partner?~~ **Resolved 2026-08-03:** Jace, covering risk/complexity while Michelle covers opportunity.
- [ ] What's the formal criteria/rubric for the PM conversion — is there a defined competency framework? — **Owner:** Michelle to clarify with Adrian — **By:** Next 1:1
- [ ] Who assesses the live case and mock interviews — Adrian alone, or a panel? — **Owner:** Michelle to clarify with Adrian — **By:** Before October
- [ ] Does the live case/mock interview format mirror standard PM interview rounds (Product Sense/Execution/Behavioral), making `/interview-prep` directly reusable? — **Owner:** Michelle to clarify with Adrian — **By:** Before October
- [ ] Is there an actual SSO test account, or does Michelle need to use her own Learn account as a workaround? — **Owner:** Michelle, via today's 4pm meeting — **By:** Today
- [ ] Is a proper tracking list maintained across the four SSO/UAT workstreams with CSC? — **Owner:** Michelle to raise — **By:** Today's 4pm meeting

---

## Timeline Risks

- **TIMELINE RISK:** The one-pager timeline (draft by September, send by October) could slip if UAT/SSO firefighting consumes Michelle's attention — Adrian named this explicitly as a risk in the meeting. Given the SIT readiness meeting today confirmed a compressed ~4-day SIT window with several open blockers, this risk is not hypothetical — it's already active. Worth tracking whether SSO/SIT work is displacing one-pager progress week to week.
- **TIMELINE RISK:** October is carrying multiple milestones (one-pager sent, experience deep-dive, live-case, mock interviews starting) with no fine-grained sequencing yet — same risk flagged in the original shorter note, still unresolved.

---

## Next Steps

**Immediate (Today):**
- Join the 4pm SSO meeting — identify whether the gap is a missing test account, missing specs, or missing tracking
- Consider whether Michelle's own Learn account can serve as a temporary SSO test path

**This Week:**
- Get the fortnightly 1:1 series confirmed on the calendar going forward

**By End of September:**
- Have a full draft of the one-pager ready, opportunity-focused, using OTG + C@G data from Adrian

**October:**
- Send the one-pager out for early assessment; complete experience deep-dive and live-case prep; begin mock interviews

---

## Context for Future Reference

**This meeting directly overlaps with two other threads processed today:**

- **CSC SSO Slack thread** (`2026-08-03-W32-csc-sso-slack-pow-hwee-rama.md`): that note concluded Pathfinder's SSO connectivity delivery is complete and the "missing spec" Marcus asked about already exists (sent 15 Jun) — it just needs re-confirming. This 1:1 with Adrian, however, surfaces that from *Michelle's* vantage point, SSO tracking is still murky: no clear test account, incomplete Confluence documentation, unclear ownership between Rama/Pow Hwee/CSC-CSE. These aren't necessarily contradictory — Pathfinder's own connectivity piece may be done while the broader test/validation picture Adrian is pointing Michelle toward remains genuinely unresolved. Worth reconciling directly: is the test-account gap the same DLE-side item flagged in the SSO Slack thread, or a separate, still-open piece?

- **CSC/OTEP SIT Readiness Sync** (`2026-08-03-W32-csc-otep-sit-readiness.md`): this is the same underlying tension Adrian describes — Rama, Howie (referred to as "Herman"/"Aderick" in the SIT meeting's attendee list; worth confirming if Howie = Herman Hartoyo or a distinct person), and unclear ownership/tracking across SSO and other workstreams. The SIT readiness meeting's own PM Readout ("real risk is integration governance, not SSO") is effectively the same diagnosis Adrian is coaching Michelle to make independently. **This is strong, direct evidence Michelle is already doing the PM-level work Adrian is coaching toward** — worth naming explicitly at the next 1:1 rather than treating the SIT intervention and this coaching conversation as separate.

**Name-check needed:** this account introduces "Howie" and "Paoli" as people in tension with Rama. The SIT readiness meeting's attendee list includes Muhammad Herman Hartoyo and Aderick Cheng (CSC), plus references to "Marcus" and "Kimberly" with roles unspecified. Worth confirming whether Howie/Paoli map to any of these names or are entirely separate people — this affects whether the team-tension coaching material and the SIT readiness meeting are describing the same relationships or different ones.

**Existing resources still relevant:** `context-library/personal-context-pm-background.md` (natural home for the one-pager's narrative raw material), `.claude/skills/interview-prep/SKILL.md` and `.claude/skills/interview-feedback/SKILL.md` (PM interview frameworks — 5-Step Product Sense, CIRCLES, AARM, STAR — and mock-interview scoring, likely reusable once format is confirmed with Adrian), `.claude/skills/spine-drill/SKILL.md` (daily habit already in motion, Cycle 2's adaptive weighting toward weakest dimension is a natural fit for the metrics-to-outcomes gap Michelle named today).

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw debrief as provided</summary>

Regenerated debrief covering: Overall Context (PM apprenticeship coaching — one-pager, interview prep, team dynamics/conflict-handling, SSO integration/UAT readiness, PM role in clarifying expectations); What Went Well (one-pager clarity and timeline, interview prep structure, support for skill gaps, recognition of real PM work beyond textbook); What Didn't Go Well (SSO communication/alignment gaps, lack of simple SSO test setup, team tension/siloed working — Rama/Howie/Paoli, process/documentation weaknesses); Risks (UAT/delivery, schedule/assessment, team/stakeholder, personal PM growth/interview); Decisions Made (one-pager scope+deadlines, interview prep strategy, PM ownership on alignment/tension, SSO follow-up approach, data support for one-pager); Key Actions (Michelle's: one-pager, SSO/UAT, team dynamics, interview prep; Adrian's: data + continued guidance; Others': Rama/Engineers/CSC-CSE spec clarification, Imelda's cross-team work); Hidden Opportunities for interview stories (execution example, risk management, team leadership without authority, outcome focus).

Full original text preserved in the command input for this session.

</details>
