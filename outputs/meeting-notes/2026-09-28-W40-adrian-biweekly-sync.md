---
date: 2026-09-27
week: 2026-W40
type: meeting-notes
meeting_type: 1:1 with manager-chain stakeholder (bi-weekly sync)
attendees: [Adrian Ang, Michelle Yip]
duration: 32 min
source: Otter.ai transcript
---

# Meeting Notes: Bi-weekly Sync — Michelle & Adrian

**Date:** September 27, 2026, 10:53 PM PDT

**Attendees:** Adrian Ang, Michelle Yip

**Meeting Type:** 1:1 (standing bi-weekly sync)

**Duration:** 32 minutes

---

## Summary

Adrian and Michelle covered team staffing (Zhikai and Jihua joining, ownership assignments across employment change, CMM, Segregator/R2, and Course Aggregator), a root-cause fix for oversized sprint stories (story points + poker sizing), a scope-management move for R1 (split into R1/R1.5 rather than cutting), and interview prep for Michelle's upcoming round. The meeting surfaced ten distinct open risks — most without an owner or date — including sprint capacity planning that has never been sized, a flagged tension in Michelle's working relationship with Rama, and a squeeze on Michelle's own interview-rehearsal time.

**Context:** This is the standing bi-weekly sync noted in Adrian's stakeholder profile — escalation for Michelle normally routes through Jace, but this session ran with Adrian directly, per the transcript title "Bi-weekly sync – Michelle."

---

## Decisions Made

1. **Team ownership assignments**
   - **Decision:** Imelda keeps the employment-change workstream through launch, then moves to Course Aggregator with Jihua (apprentice). Zhikai takes Segregator (R2) discovery and CMM.
   - **Why:** Balances load across the team as R2 scoping begins — nobody is overloaded per this split.
   - **Who decided:** Adrian
   - **Impact:** Michelle becomes Zhikai's onboarding buddy (see below); CMM ownership transitions to Zhikai mid-discovery.

2. **Story sizing fix: story points + 7–9 point cap + poker sizing**
   - **Decision:** All stories get story points; no story exceeds 7–9 points; sizing happens via poker estimation after a design walkthrough.
   - **Why:** Root cause of oversized sprint stories (Kingsley's retro feedback) is that the team has never sized stories at all — planning currently runs on assumed velocity ("Rama times three or four"), not measured capacity.
   - **Who decided:** Michelle, agreed by Adrian
   - **Impact:** Thomas starts poker sizing this round; burndown tracking needs to start alongside it (no owner/date yet — see Open Questions).

3. **R1 scope: split into R1 / R1.5 rather than cut**
   - **Decision:** Instead of cutting scope from R1 outright, split it into R1 and R1.5, grouping the two together for delivery and roadmap purposes.
   - **Why:** Matches Adrian's ask for forward planning into R2; avoids losing scope outright while still landing a shippable R1.
   - **Who decided:** Michelle, confirmed by Adrian
   - **Impact:** Adrian's explicit warning: scope cut from R1 "comes back" — the R1.5/R2 overflow has to be repaid, and quickly (see Risks).

4. **Design bar: wireframes are sufficient, not pixel-perfect**
   - **Decision:** Michelle can move forward on wireframes; pixel-perfect design isn't required before proceeding.
   - **Why:** Design is a known bottleneck — no named Compass designer yet, and design tends toward perfectionism.
   - **Who decided:** Adrian
   - **Impact:** Needs to be communicated to designers directly — no owner/date assigned yet (see Open Questions).

5. **One-pager scope and deadline**
   - **Decision:** The one-pager covers the whole opportunity through R2 (not just R1) and is due in October.
   - **Why:** Adrian wants the full opportunity story, not a narrower R1-only pitch; October deadline is fixed.
   - **Who decided:** Adrian
   - **Impact:** A smaller R1 (post-split) makes the value proposition harder to write — flagged directly by Adrian as a real difficulty, not a formality.

6. **Michelle is Zhikai's onboarding buddy**
   - **Decision:** Michelle takes on buddy duties for Zhikai's onboarding.
   - **Who decided:** Adrian
   - **Impact:** Adds a concrete task this week (Wednesday sync with Zhikai) on top of an already tight timing window — see Timeline Risks.

---

## Key Insights & Quotes

**On sprint capacity being unmeasured:**
- Adrian's concern, paraphrased: the team has never sized stories, and current planning implicitly assumes everyone works at Rama's pace — "Rama times three or four." This means every existing plan rests on a guess, not data.

**On scope debt:**
- Adrian's framing, paraphrased as a "loan shark" analogy: whatever gets deferred out of R1 into R1.5/R2 has to be paid back, and paid back fast — deferring is not the same as solving.

**On the working relationship with Rama:**
- Adrian flagged visible tension between Michelle and Rama directly, and asked Michelle not to let it become personal. Explicit warning that if unaddressed, it could affect both planning and technical quality.

**On Michelle's own development time:**
- Adrian acknowledged, unprompted, that their syncs always end up being entirely about Compass delivery — no space carved out for Michelle's own development (e.g., interview rehearsal) even when that's an explicit agenda need. No rehearsal actually happened in this session despite being on the table.

**On timing pressure generally:**
- Adrian, on why there's no good time to slow down: "there will never be a low-key period."

---

## Open Questions

- [ ] Who covers Zhikai's CMM questions while Adrian is in the US next week? — **Owner:** Unassigned (Adrian suggested Rama or Imelda, neither confirmed) — **By:** This week, before Adrian's flight
- [ ] Does the core team's Playwright regression suite include Michelle's test cases? — **Owner:** Michelle to check — **By:** Not specified
- [ ] What's the resolution on the seat budget / PSD conversation? — **Owner:** Unclear, conversation was inconclusive — **By:** Not specified
- [ ] Who owns telling designers that wireframes are sufficient (not pixel-perfect), and who is the named Compass designer? — **Owner:** Unassigned — **By:** Not specified
- [ ] Who sets up story-point + burndown tracking for the squad, and starting when? — **Owner:** Michelle told Thomas to start tracking — no confirmed date for when this becomes standard practice
- [ ] When does Jihua's apprenticeship actually start? — **Owner:** N/A — **By:** Depends on Wave 1 finishing first, no date given

---

## Risks Nobody Is Currently Addressing

*(named directly by Adrian or surfaced in discussion, distinct from the Open Questions above because these are structural, not single-owner action items)*

1. **Team capacity is unmeasured.** Every current plan assumes velocity that's never been validated against sized stories.
2. **R1 scope debt will resurface in R2**, stacked alongside Course Aggregator — a real near-term capacity collision, not a hypothetical one.
3. **Design bottleneck with no named owner.** Perfectionist tendency + no assigned Compass designer.
4. **Michelle's squad and Imelda's squad plan sprints separately** — no shared visibility into combined capacity across the two.
5. **Working relationship tension with Rama** — flagged directly by Adrian as a risk to planning and technical quality if it isn't addressed deliberately.
6. **Regression test coverage uncertain** — unclear whether Michelle's test cases are represented in the core team's automated suite.
7. **Zhikai's onboarding is structurally squeezed** — CMM handover must happen before Adrian leaves for the US, his Confluence license is still pending, and he's inheriting a three-month discovery process with thin support.
8. **One-pager evidence gaps** — BCR figures are missing Howing's engineer data; Adrian wants BCR shown improving over time, not just a snapshot.
9. **Genuine calendar collision:** one-pager due in October, Adrian traveling next week (exactly when Zhikai starts), Michelle on leave Nov 1–6, and no standing interview-rehearsal slot has been set up despite being raised twice now.
10. **Jihua's start date depends on Wave 1 completing** — sequencing risk for the next apprentice batch, no firm date.

---

## Timeline Risks

- **TIMELINE RISK:** Adrian is traveling to the US starting next week — the exact week Zhikai's CMM handover is supposed to happen and his onboarding needs the most support. No confirmed backup owner for CMM questions during that window (Rama and Imelda were both suggested, neither confirmed).
- **TIMELINE RISK:** The one-pager (covering R1 through R2) is due in October, the same window Michelle is asked to prepare and rehearse interview answers — and no rehearsal slot has materialized in two attempts at scheduling one (this session and, implicitly, before it, per Adrian's own acknowledgment that syncs "always end up about Compass").
- **TIMELINE RISK:** Michelle is on leave November 1–6. If the one-pager or interview process slips into late October, there's a hard capacity wall right after.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Send Adrian the one-pager link before his flight | @Michelle | Before Adrian's US trip (this week) | 🔴 High | Not Started |
| Submit the one-pager (covers R1 through R2) | @Michelle | October | 🔴 High | Not Started |
| Prepare and rehearse: intro, data-driven prioritization, success metrics, why Compass adoption beats OTG | @Michelle | Not specified — no rehearsal slot booked yet | 🔴 High | Not Started |
| Book time with Zhikai for new-joiner questions | @Michelle | Wednesday (this week) | 🟡 Medium | Not Started |
| Tell Thomas to start tracking story points and burndown each sprint | @Michelle | Not specified | 🟡 Medium | In Progress (told Thomas; tracking not yet standard) |
| Review Michelle's one-pager | @Adrian | Before his flight | 🔴 High | Not Started |
| Add Zhikai to Manda PSD-PMs channel | @Adrian | Not specified | 🟢 Low | Not Started |
| Share Excel onboarding plan with Zhikai; help get his Confluence license | @Adrian | This week | 🟡 Medium | Not Started (license pending) |
| Onboard Zhikai on CMM | @Adrian | This week, before travel | 🔴 High | Not Started |
| Bring Zhikai to tomorrow's Compass sharing session | @Adrian | Sep 28 | 🟡 Medium | Not Started |
| Add Zhikai to the ITC WD channel | @Imelda | Not specified | 🟢 Low | Not Started |

**No owner yet (worth assigning explicitly, not letting drift):**
- Set up a recurring (weekly/fortnightly) interview rehearsal slot with Adrian.
- Tell designers wireframes are sufficient; name the Compass designer.
- Confirm whether Michelle's test cases are in the core team's Playwright suite.
- Resolve the seat budget / PSD question.
- Get Howing's engineer data for the one-pager's BCR figures.
- Name who covers Zhikai's CMM questions while Adrian is traveling.

---

## Next Steps

**Immediate (This Week):**
- Send one-pager link to Adrian before his flight.
- Book Wednesday time with Zhikai.
- Confirm CMM backup coverage for Zhikai before Adrian leaves.
- Attend Compass sharing session with Zhikai (Sep 28).

**Short-term (Next 2 Weeks):**
- Submit the one-pager (October deadline).
- Get a rehearsal slot with Adrian actually on the calendar — has failed to materialize twice now.
- Pull Howing's engineer data for BCR figures.

**Follow-up Meeting:**
- Next bi-weekly sync — no date confirmed in this transcript; Adrian traveling next week likely shifts the cadence.

---

## Context for Future Reference

This is the first workspace record of several new names and structures worth tracking going forward:
- **Zhikai** — new team member, taking Segregator (R2) discovery and CMM ownership from Michelle/Adrian's prior split. No stakeholder profile exists yet.
- **Jihua** — incoming apprentice, joining Course Aggregator with Imelda once Wave 1 completes. No stakeholder profile exists yet.
- **Kingsley** — gave the retro feedback on oversized stories that prompted the story-points fix. No stakeholder profile exists yet.
- **"Segregator"** — new term in this workspace, described as R2-scoped discovery work Zhikai is taking on. No prior documentation found; worth clarifying scope/relationship to R1/R1.5/R2 in a future sync.
- **R1 / R1.5 split** — reintroduces a naming pattern ("R1.5") that has historical precedent in this workspace's July archives, but the current split is a fresh scope decision, not a resumption of the earlier R1.5 effort — worth confirming these aren't being conflated.
- **Michelle's interview process** — this transcript is the first record in this workspace of Michelle preparing for an interview (RICE framework, OTG adoption baseline, rehearsal need). Prior session notes never captured this; worth checking whether earlier interview-prep context exists outside this workspace.

---

## Appendix: Source

Original debrief supplied as a pre-structured summary (Otter.ai transcript, 32 min, Sep 27 10:53 PM PDT) rather than a raw transcript. Timestamped links to the original recording were preserved in the source material but are not reproduced here since they point to an external Otter.ai session not accessible from this workspace.

Per the source material's own caveat: "Kai" in the recording is assumed to mean Zhikai; parts of the audio (especially the budget discussion at the start) were hard to make out, so some details may be imprecise.
