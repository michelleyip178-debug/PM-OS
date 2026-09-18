# Meeting Notes: Roadmap Planning — R1 and Beyond

**Date:** 2026-09-17, 01:12–02:05 PDT (53 min)

**Attendees:** Michelle Yip (32% talk time), Barry Lim (22%), Adrian Ang (17%), Liting Kway (5%), plus unattributed voices (23%)

**Meeting Type:** Team planning / scoping session

**Source:** [Otter.ai transcript](https://otter.ai/u/DtKo8PctgTOrnqHVk2WDahBneCw?view=summary)

**Transcript quality note:** poor in places — heavy cross-talk, several speakers unattributed, garbled ASR around acronyms (Codex/Forex, OTG/OBG/ODG, SJR/SDR/SGR all appear interchangeably). Ambiguous sections are flagged below rather than smoothed over.

---

## Summary

Scoping session on the Compass job-posting and application flow for Sticks & Gigs, with side discussions on SJR, OTG ingestion, and R1 boundaries. Form design and scope cuts landed well — fixed template, no dynamic forms, SJR/internal jobs pushed out of development. Attachments, collaborators, and policy ownership were all raised and left unresolved. **This session also produced a scope change from the committed master PRD: the application form moves from embedded FormSG to a Compass-native build** (see Timeline Risks).

---

## ⚠️ Scope Change — Flag Before Friday

**Decision #1 below (build the form in Compass, not FormSG) contradicts the current locked master PRD.** The [R1 master PRD](../prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md) commits Gigs and STIPs to an **embedded FormSG flow** as one of the three pillars of the R1 leadership contract ("Apply Seamlessly... embedded FormSG flow," F-01 "3-field quick post in Compass; applications submitted in-app or via embedded FormSG container"). Today's room decided to build the form natively instead.

This is bigger than an implementation detail — it changes engineering scope (a form builder inside Compass vs. an embed), and Barry's own rationale for it ("if the goal is tracking and data, the team needs control of the collection surface") is a legitimate reason, but it wasn't tested against the 5.5-sprint budget the current PRD was built around. Before Friday's continuation, confirm: is this scope change absorbed within the existing sprint plan, or does it need to go through the same re-baselining the ~1 Dec kickoff correction just went through?

---

## Decisions Made

1. **Build the application form inside Compass, not FormSG**
   - **Why:** data control, tracking, and centralized reporting — currently reporting means downloading Excel from FormSG and stitching four reports together.
   - **Impact:** see scope-change flag above.

2. **Fixed template of ~10 questions, no dynamic forms**
   - **Why:** Michelle: "I don't think we have data supporting that custom form is required." Agency-specific questions offered as generic optional fields instead of configurability.
   - **Impact:** keeps a large piece of scope out of R1.

3. **Pre-fillable fields come off the form** (name, email, known competencies auto-populated)

4. **Build a poster dashboard / admin portal** — log in, see posted jobs, see applicants per job, act

5. **Dashboard shows only decision-critical fields** (~4 columns; competency match is the primary signal)

6. **Sticks & Gigs actions are offer/reject only, no shortlist step** — SJR needs shortlisting (it runs interviews), S&G doesn't

7. **RBAC: only the poster and authorized collaborators see applicants** — treated as minimum viable access control

8. **R1 limited to the six pilot agencies**; other agencies continue on OTG

9. **Decouple the form from Codex** — pre-filled inside the six pilot agencies, blank form outside; login succeeds either way (Adrian's proposal, removes a hard dependency from the critical path)

10. **Single "I agree to all the above" checkbox** replaces multiple declarations — integrity wording still needs formal sign-off

11. **No development for SJR and internal jobs** — stays with CFD/HR systems, requires a separate conversation with Careers

12. **SJR and internal jobs appear in Compass for discovery only** — creation and application stay in originating HR systems

13. **Ingest external postings (OTG, HRPS, Cumulus) via API**, with job-type tags feeding dashboard filters

14. **Target end-state: agencies stop posting to OTG directly** — Compass becomes the source, posts flow outward to the EDM

15. **Accept/reject triggers no customized email in R1** — in-app notification at most

16. **Continue the discussion Friday** — agenda unfinished

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Share the two form formats (job-posting creation, application form) | Liting | Before Friday | 🟡 Medium | 🔴 Not Started |
| Check with stakeholders whether a shortlist step is needed for SJR vs. offer/reject for S&G | Liting | Before Friday | 🟡 Medium | 🔴 Not Started |
| Bring back the most common custom questions agencies add to FormSG forms | Liting | Before Friday | 🟡 Medium | 🔴 Not Started |
| Decide attachments approach for S&G (upload vs. links vs. deferred); confirm SJR resume requirement | **Unassigned** | Before Friday | 🔴 High | 🔴 Not Started |
| Estimate security/privacy impact of requesting broader WOG data; decide whether to ask at all | **Unassigned** | Before Friday | 🔴 High | 🔴 Not Started |
| Confirm with platform team whether HR identity can be verified via officer directory (drives RBAC) | **Unassigned** | Not specified | 🟡 Medium | 🔴 Not Started |
| Get integrity/declaration wording formally cleared | **Unassigned** | Not specified | 🟡 Medium | 🔴 Not Started |
| Take the policy conversation to agencies: stop posting directly to OTG | **Unassigned** | Not specified | 🔴 High | 🔴 Not Started |
| Resolve the collaborator/co-owner model and the close-the-vacancy flow | **Unassigned** | Not specified | 🔴 High | 🔴 Not Started |
| Scope one-time OTG migration for 6 pilot agencies; define non-pilot exclusion rule for ingestion | **Unassigned** | Not specified | 🟡 Medium | 🔴 Not Started |
| Define ingestion attribute set for tagging SJR/internal jobs | **Unassigned** | Not specified | 🟡 Medium | 🔴 Not Started |
| Schedule Friday's continuation, starting from the unfinished opportunity/system thread | Michelle (implied) | This week | 🔴 High | 🔴 Not Started |

**9 of 12 action items have no owner.** This is the same pattern flagged in this morning's [Compass Team Retro](2026-09-17-W38-compass-team-retro-small-group.md) — the team explicitly agreed this morning that risks and concerns should be raised proactively, and yet the two biggest unresolved risks in this session (policy ownership, WOG data estimation) were named repeatedly and still left without a name attached. Worth naming this pattern directly before Friday.

---

## Key Insights & Quotes

**On why Compass needs to own the form (Barry):**
"If the goal is tracking and data, the team needs control of the collection surface" — otherwise agencies drift back to FormSG and the data stays invisible.

**On the competition risk (Adrian):**
"If we cannot compete against Form SG, they will always be married [to it]." OTG already failed on adoption for the same reason. Barry, conceding candidly: "I don't know how big that number is gonna be... I feel our adoption will be limited."

**On auto-population as a trust cliff (Barry):**
"Once I auto-populate, I see correctness, then you will break completely." No validation, override, or correction flow was designed for wrong pre-filled competencies.

**On the integrity declaration (Michelle):**
"I can fake, false declare." Accepted as a tradeoff without discussing what happens when it's abused.

**On zombie postings (Michelle, describing the ownership gap):**
HR poster creates an opportunity, leaves the role before closing it, assigns nobody, team reposts, original stays open forever — producing duplicates.

**On collaborators, trailing into ambivalence (Michelle):**
The feature "sounds more and more..." — compared to Google Forms, then: "really very hesitant to do this." Neither confirmed nor cut.

---

## Timeline Risks

- **TIMELINE RISK:** Decision #1 (native Compass form, replacing embedded FormSG) directly contradicts the "Apply Seamlessly" pillar and F-01 delivery mode in the locked [master PRD](../prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md), which was built around a 5.5-sprint hard ceiling. If this scope change isn't explicitly re-costed against that ceiling, it risks compounding the ~1 Dec kickoff slip already tracked as R-11 in the [risk register](../analyses/2026-09-16-W38-r1-risk-register.md) — the same pattern (scope added without re-baselining the sprint math) that produced this week's earlier timeline correction.
- **TIMELINE RISK:** "Continue the discussion Friday" has no confirmed time as of this transcript, and the meeting closed with the core "opportunity vs. system" thread still unresolved. Given 9 of 12 action items are unowned and several (WOG data estimation, policy conversation with agencies) are on the critical path, Friday's session risks repeating this one's ending unless owners are assigned beforehand, not live in the room.

---

## Open Questions

- [ ] Attachments mechanism for Sticks & Gigs — upload, links, or deferred? SJR resume requirement is compulsory; S&G is unresolved. — **Owner:** Unassigned — **By:** Friday
- [ ] Should Compass request WOG-wide data access, or stay scoped to the six pilot agencies? Security/privacy estimation hasn't happened. — **Owner:** Unassigned — **By:** Friday
- [ ] Collaborators/co-owner model — in or out? Directly blocks the close-the-vacancy flow and the zombie-posting fix. — **Owner:** Unassigned — **By:** Friday
- [ ] Who takes the policy conversation to agencies about stopping direct OTG posting? — **Owner:** Unassigned — **By:** Not specified

---

## Risks We're Not Addressing (carried from the debrief, structured)

1. **No adoption target, measurement plan, or fallback** if pilot agencies don't switch off FormSG — named three times in the meeting, no owner.
2. **Auto-population correctness has no validation/override/correction flow** — a single wrong pre-fill risks breaking trust in the system entirely.
3. **WOG-wide data request may be far bigger than the original 6-agency ask** — security/privacy estimation not yet done; the decoupled blank-form approach is currently masking the need for it, not removing it.
4. **Endorsed vs. self-declared competencies are being treated as equivalent** in the match/sort signal — accepted as a deliberate R1 tradeoff, risky if it becomes permanent by default rather than by decision.
5. **Integrity declaration has no teeth** — single checkbox, no discussion of abuse handling.
6. **Ownership gaps will keep producing zombie postings** — collaborators was the proposed fix and it stalled.
7. **Closure (the stated success metric) isn't built yet**, and sits alongside the unresolved collaborator question.
8. **Dashboard scope is already creeping** — stated goal was ~4 fields; competency match, filters, sort, and a "best match" ranking were all added in the same conversation.

---

## Next Steps

**Immediate (Before Friday):**
- Assign owners to the 9 unowned action items above — especially attachments, WOG data estimation, and the OTG policy conversation, all flagged as critical-path and non-engineering.
- Confirm whether Decision #1 (native form build) needs formal re-costing against the 5.5-sprint budget.

**Friday's Continuation:**
- Resume from the unfinished "opportunity vs. system" thread.
- Explicit decision needed on collaborators/co-owners — it's currently blocking both the ownership-gap fix and the closure flow.

---

## Context for Future Reference

This session's unresolved-and-unowned pattern is worth tracking against this morning's [Compass Team Retro](2026-09-17-W38-compass-team-retro-small-group.md), where the team agreed "all team members should proactively raise material risks and concerns, regardless of role or seniority." The risks in this session *were* raised proactively and repeatedly (competition risk named three times, WOG data risk flagged by two people) — the gap isn't visibility, it's follow-through to ownership. Worth raising this specific gap in Friday's session as a process point, not just a content one.

---

## Appendix: Raw Debrief

<details>
<summary>Click to expand original debrief</summary>

Original structured debrief supplied by Michelle Yip on 2026-09-17, generated from the Otter.ai transcript at https://otter.ai/u/DtKo8PctgTOrnqHVk2WDahBneCw?view=summary. Sections: What went well, What didn't go well, Risks we're not addressing, Decisions made (16), Action items (explicit + implied), The short version.

</details>
