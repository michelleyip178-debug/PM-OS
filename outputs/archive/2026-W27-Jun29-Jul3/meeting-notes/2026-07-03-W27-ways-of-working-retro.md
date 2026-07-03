---
date: 2026-07-03
meeting: Ways of Working Retro
type: Team retrospective
attendees: [Michelle Yip, Imelda Mo, Adrian Ang, Pow Hwee Tan, Barry Lim, Rama Moorthy]
format: Miro/retro board — Good / Bad-could-be-better columns
---

# Meeting Notes: Ways of Working Retro (3 Jul 2026)

## Summary

A cross-squad retrospective (Pathfinder + Core, business + tech) surfaced strong team execution fundamentals (collaboration, sprint delivery discipline, improved trust from leadership) alongside five structural process gaps: slow/unclear prioritization decisions, thin documentation outside Jira, weak cross-squad communication, unclear infra ownership, and a request for BOs to engage with more decision-making rigor. None of this is new team dysfunction — it reads as growing pains from scaling up cross-squad delivery, not a breakdown.

---

## What's Working (Good column)

- **Business-tech alignment has measurably improved.** "Initially there were many meetings, but this has improved" — regular syncs between business and tech now cover requirements, constraints, and pressure points directly, with communication described as "pretty direct and constructive."
- **Good alignment on sprint goal and product vision** — noted as a standalone positive, distinct from the general collaboration point.
- **Ticket grooming timelines are well-managed** across design/engineering — deliverables staying on track.
- **Strong team problem-solving culture** — "get things done" mindset, engineers cross-reviewing each other's work, team "efficient in delivering," "technically strong generally and responsible."
- **MVP timeline is being held** — explicitly called out as being kept on track.
- **A Pathfinder squad staffing issue was resolved quickly** — cited as an example of the team's responsiveness.
- **Leadership trust has increased.** "We have gotten more support from Mark and Jacky!" — explicitly compared favorably to before this team came in.
- **Trust in the product team is improving**, alongside a shift toward point estimation instead of man-day estimation for planning.
- **Cross-team progress overall has been good.**

---

## What Needs Work (Bad / Could Be Better column)

### 1. Prioritization & Decision-Making

- **Approval process spans too many levels**, and requirements/scope can change at the last minute as a result.
- **Key decisions are sometimes postponed too long** — named examples: design consistency, logo, competencies discussion.
- **Requirements and scope keep changing** — flagged directly under Adrian Ang and Pow Hwee Tan's names, suggesting this is being raised as feedback to/about product ownership and PSD-side scope stability.
- Business team is **still not fully familiar with sprint process**, which is costing extra time in sprint planning and demos.
- Ask to **do proper prioritization before adding scope**, based on problem/impact — not on an ad hoc basis.
- Ask to **spend more time validating assumptions and requirements before committing** technical scope.
- Two notes specifically about BO engagement:
  - "Need to encourage BOs to make decisions based on the info we know today (judgement required)."
  - "Break away from OTG mindset; confirm some decisions are unclear."
  - PMs asked to ensure Xian Zhang is updating Jacky/Mark internally, and to keep emphasizing this internally.
- **Debates/discussions sometimes don't reach consensus** — the team needs to resolve quickly and move forward even without full agreement, rather than letting disagreement stall progress. "Everyone needs to be mindful" of this dynamic.
- Product team flagged as **not well-plugged into competitor analysis / what's available externally** — risk of losing market awareness if not actively "watching" ongoing comms and market movement.

### 2. Documentation

- **No clear end-to-end flow documentation** exists — raised as an open question, not yet resolved.
- **Feature documentation outside of Jira is fragmented** — no single source of truth for feature-level context.
- **Discussion outcomes are not being captured** in requirements or technical design documents — decisions made in conversation aren't making it into durable artifacts.
- Requests: more sharing on technical design, and enabling transcripts for all meetings to reduce information loss.

### 3. Cross-Squad Communication

- **The two squads run in silo most of the time** — flagged as the root cause under this theme.
- Information sharing between the two product squads could improve, even where the work is squad-specific.
- **Cross-dependencies between the two squads** are not well surfaced or managed.
- Communication of milestones, roadmap, QA environment setup, and UAT timelines is unclear across squads.
- Suggestion: **joint sprint goals** would help narrate demos better across squads, even with separate sprint execution.
- Specific action-oriented feedback:
  - Engineers (Rama) should be more proactive in asking questions during grooming, not after.
  - Imelda/Adrian: senior BO meeting agendas should be communicated and set earlier.
  - Imelda/Michelle: product teams should invite the other squad's PM as optional attendee, and transcribe meetings for visibility.
- Barry Lim flagged that **alignment/communication across engineering teams** specifically can be improved.

### 4. Infrastructure & Team Setup

- **Security consultant in TWs does not seem to add much value** — worth revisiting whether this role/engagement is working as intended.
- **Infra setup is taking too long.**
- **Unexpected CI/CD gaps** surfaced with no clear target for closure — resulted in lost time in the most recent sprint.

---

## Key Insights

**Pattern across all four "Bad" themes:** every one of them is a coordination/communication gap, not a skills or effort gap. The "Good" column explicitly praises technical strength, delivery discipline, and problem-solving — the friction is entirely in how decisions get made, documented, and shared across the two squads, not in whether the work itself is being done well.

**The prioritization theme has a business-process root, not a product one.** Multiple notes point at BOs and business stakeholders needing to build sprint-process fluency and make faster, judgment-based calls rather than waiting for perfect information — this reads as a maturity gap in how the business side engages with agile delivery, not a product-team failure to communicate.

**Cross-squad silo issue is structural, not personal.** "2 squads run in silo most of the time" is stated plainly, with concrete low-effort fixes proposed (invite other PM as optional, transcribe meetings, joint sprint-goal narrative) — these are process fixes, not relationship repairs.

---

## Cross-Reference to R1 / Current Work

This retro's "Bad" column lines up directly with friction already visible in the R1 PRD's own history:

- **"Requirements and scope keep changing" / "key decisions postponed too long"** — this is the same pattern as R1's D-025→D-030 decision reversal chain (ATS World A→B flip, PSFG categorization still unresolved after multiple meetings). The retro names this as a systemic issue, not a one-off — worth treating the R1 reversal pattern as a symptom of this broader prioritization gap, not an isolated incident.
- **"Discussion outcomes not captured in requirements or technical design"** — directly relevant to the ATS-2028 sourcing gap already flagged three times in the R1 PRD (a decision was made in conversation, never documented with a source). This retro finding explains *why* that gap exists structurally, not just as an oversight in that one PRD.
- **"BOs need to make decisions based on info we know today"** — connects to the CMM scope-pressure thread (open item #50, now surfaced in 5+ meetings) and the PSFG categorization question (WD's position stated verbally but not formalized) — both are cases of decisions sitting unresolved awaiting more certainty that may never fully arrive.
- **Cross-squad silo / QA-UAT timeline communication gap** — matches Thursday's Squad Sync note about a possible Monday (6 Jul) scheduling collision between Rama's action items and Pow Hwee's QA sit-down.

---

## Open Questions

- [ ] What does "end to end flow" documentation actually mean in practice, and who owns creating it? — **Owner:** Not assigned — **By:** Not stated
- [ ] Is the security consultant engagement being reassessed, or is this feedback being escalated anywhere? — **Owner:** Not assigned — **By:** Not stated
- [ ] What's the concrete plan to close the CI/CD gaps, given they already cost time in the most recent sprint? — **Owner:** Not assigned — **By:** Not stated — no target date exists yet, flagged explicitly as a gap in the notes themselves

---

## Next Steps

**Immediate (low-effort, named in the board itself):**
- Invite the other squad's PM as an optional attendee to squad-specific meetings (Imelda/Michelle)
- Enable transcripts for all meetings
- Communicate senior BO meeting agendas earlier (Imelda/Adrian)
- Engineers to raise questions proactively during grooming rather than after (Rama's squad)

**Needs ownership assigned:**
- End-to-end flow documentation
- CI/CD gap remediation plan with a target date
- Security consultant engagement review

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: Retro board (Miro-style, Good / Bad-could-be-better columns), Ways of Working retrospective, 2026-07-03. Attendees inferred from named stickies: Michelle Yip, Imelda Mo, Adrian Ang, Pow Hwee Tan, Barry Lim, Rama Moorthy. Submitted as an image/screenshot, transcribed for this record.

</details>
