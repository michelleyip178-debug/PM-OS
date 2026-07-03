---
date: 2026-07-02
meeting: "[Replacement] OTEP Product x BO — Senior Level"
time: "17:00–18:00"
organizer: Imelda Mo
attendees: [Imelda Mo, Adrian Ang, Product Team — full list TBC]
type: Stakeholder review (prioritisation/positioning)
sprint_context: Sprint 5
---

# Meeting Notes — OTEP Product x BO Senior Level (2 Jul 2026)

## Summary

This was a prioritisation and positioning discussion, not a solution-design session. The team is aligned that MVP scope needs to shrink to protect the January launch, and that Competency Management Module (CMM) is now the single most consequential scope decision on the table. The real risk isn't technical: it's agency adoption, change management, and whether the team can tell a story that convinces PS/PS(D) that CMM matters more than visible officer-facing features. That story wasn't resolved in this session.

This is the third time in a week this exact tension has surfaced (see [Cross-Meeting Context](#cross-meeting-context) below) — it's now the standing open item, not a one-off.

---

## Decisions Made

1. **CMM discussion takes priority over broader feature discussion**
   - **Why:** CMM is the highest-leverage, least-resolved scope question ahead of the PS/PS(D) conversation.
   - **Impact:** Other roadmap topics (onboarding, course aggregation, competency sync) get deferred until CMM positioning is settled.

2. **Some onboarding-flow enhancements and profile-completion concepts drop from MVP**
   - **Why:** ~5 weeks of build runway left before development closure; these features add delivery risk without protecting launch.
   - **Impact:** Officer-facing onboarding experience will be leaner than originally scoped.

3. **Static/simpler onboarding guidance replaces richer onboarding experience for MVP**
   - **Why:** More realistic to deliver within remaining timeline.
   - **Impact:** Onboarding UX design work should be redirected toward the simpler approach now, not the richer one.

4. **Course Aggregator is not ready for commitment — not pushed as an immediate deliverable**
   - **Why:** Not mature enough to commit to given the timeline.
   - **Impact:** Remove from near-term delivery conversations; revisit later.

5. **Competency synchronisation (Compass ↔ HR systems ↔ CMM) deferred to a separate conversation**
   - **Why:** Too large and unresolved to fold into the CMM prioritisation decision without derailing it.
   - **Impact:** This is the same open SSOT/governance question flagged in the 29 Jun BO Working Level session — deferring it again keeps it unresolved, not solved.

6. **Leadership conversation scope narrowed to: CMM, MVP readiness, onboarding approach**
   - **Why:** Avoid diluting the PS/PS(D) conversation with too many adjacent topics (this meeting itself drifted into 7+ topics).
   - **Impact:** Deck and talking points should be trimmed to these three threads only.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Update deck to clearly show what's dropped, deferred, retained across R1–R4 | Adrian Ang / Product Team | Before PS/PS(D) session (date TBC) | 🔴 High | Not Started |
| Build a crisp CMM value proposition narrative (business + officer value, not architecture) | Product Team | Before PS/PS(D) session | 🔴 High | Not Started |
| Prepare explicit trade-off explanation: what's gained vs. what's delayed if CMM is prioritised | Product Team | Before PS/PS(D) session | 🔴 High | Not Started |
| Build current-state vs. future-state visual showing how CMM improves officer/agency processes | Product Team | Before PS/PS(D) session | 🟡 Medium | Not Started |
| Update agenda and materials for the leadership conversation | Product Team | Before PS/PS(D) session | 🔴 High | Not Started |
| Clarify onboarding and rollout sequencing assumptions | Product Team | No date given — recommend within 1 week | 🟡 Medium | Not Started |
| Separate competency synchronisation discussion from CMM approval discussion (own thread) | Product Team | No date given — recommend scheduling before next Design Review | 🟡 Medium | Not Started |

**Notes:**
- None of the action items in the source material have a named individual owner beyond "Adrian ANG / Product Team" — recommend assigning specific owners before the PS/PS(D) session, not leaving it at team level.
- No due date was given for any item beyond "before the upcoming leadership conversation." If that date isn't already fixed, get it fixed first — everything else is scheduled against it.

---

## Timeline Risks

- **TIMELINE RISK:** The meeting assumes there's enough runway to build a crisp CMM narrative, trade-off explanation, and current/future-state visuals — all before an undated "upcoming PS/PS(D) conversation" — while only ~5 weeks of build time remain before development closure. If the PS/PS(D) date is close, narrative-building work is competing directly with build time. Confirm the PS/PS(D) date now.
- **TIMELINE RISK:** This same CMM scope-pressure issue was flagged as open item #50 in `open-items.md` on 2026-07-01, with a recommended resolution "before Mark/Gek Khiang stakeholder session (date TBC)." That date is still not fixed as of this meeting. Two escalation paths (PS/PS(D) and Mark/Gek Khiang) may be converging on the same underlying decision — worth checking whether these are the same session or two separate ones that need to be sequenced.

---

## Key Insights

**Strategic tension (unresolved):**
> "If we prioritise CMM, how do we explain to leadership why it matters more than visible officer-facing features?"

This question was asked repeatedly and never fully answered. The team keeps describing CMM in system/architecture/process terms; leadership will evaluate it in business/officer-value terms. That gap is the actual work still to be done — not more internal discussion.

**Positioning shift, not yet reconciled:**
- Current product story: *Career growth + opportunities* → "Discover opportunities → apply for opportunities."
- Emerging product story if CMM leads: *Competency infrastructure* → "Build competency foundations."
- These are two different narratives and the team hasn't decided which one to lead with, or how to bridge them.

**Mature call-out worth keeping:** the team explicitly recognized that building CMM doesn't guarantee agency adoption — WD/CDGO have to drive agency engagement, and technology alone won't create the outcome. This is a correct diagnosis; it's just not yet paired with a plan.

**Recalibrated metrics:** the team pushed back on onboarding-count vanity metrics and shifted toward active users / login rate / engagement as the real signal. Onboarded population ≠ usage. Good instinct, targets were adjusted accordingly.

---

## Risks

### Being addressed
1. **January delivery risk** — mitigated by reducing MVP scope, cutting lower-priority features, protecting the launch date.
2. **Resource constraints** — mitigated by explicit trade-off conversations with PS and prioritizing within fixed capacity rather than promising concurrent delivery.
3. **Large-scale rollout instability** (6 agencies → much wider) — mitigated via staggered onboarding and progressive scaling instead of big-bang deployment.

### NOT yet properly addressed

1. **Adoption risk for CMM — Risk Rating: High**
   Assumption: "if we build it, agencies will use it." No adoption plan exists. Open: who owns agency onboarding, how are HR teams trained, what incentives exist, how is compliance monitored?

2. **Leadership rejection risk — Risk Rating: High**
   The current deck doesn't make gain/loss/rationale clear enough for a PS-level audience. If leadership can't see what's traded away and why, the proposal may not get approved.

3. **Multiple sources of competency truth — Risk Rating: Very High**
   Competency data could live in HR systems, Compass, CMM, and officer-added profiles simultaneously, with no agreed reconciliation approach. This is the same taxonomy/SSOT problem flagged on 2026-06-29 (BO Working Level) — still unresolved five days later, across three separate meetings.

4. **Change management effort underestimated — Risk Rating: High**
   CMM changes HR workflows, competency governance, and data ownership. Repeatedly acknowledged as necessary; no plan yet exists.

5. **Value proposition drift — Risk Rating: Medium-High**
   "Career growth + opportunities" vs. "competency infrastructure" — not yet reconciled into one coherent officer-facing story.

---

## Overall Health Assessment

| Area | Status |
|---|---|
| MVP delivery confidence | 🟢 Good |
| Scope control | 🟢 Good |
| Leadership narrative | 🟠 Needs work |
| CMM justification | 🟠 Needs work |
| Agency adoption strategy | 🔴 Weak |
| Competency data governance | 🔴 Major unresolved issue |
| Change management planning | 🔴 Major unresolved issue |
| Rollout strategy | 🟠 Partially formed |

---

## What Leadership Is Most Likely to Challenge

Not technical delivery, architecture, or APIs. Expect:
1. Why CMM now?
2. What are we sacrificing?
3. What officer value is delayed?
4. What evidence suggests agencies will actually use it?
5. Why can't CMM and officer-facing features be developed together?

None of these five questions has a settled answer yet. Treat these as the actual agenda for deck prep, not a side list.

---

## Cross-Meeting Context

This is the **third consecutive surfacing** of the same underlying issue:
- **29 Jun** — BO Working Level: taxonomy/SSOT governance gap surfaced, no owner or date assigned ("we need to go back to BOs to clarify").
- **30 Jun** — Squad Sync: CMM estimated at ~16 person-weeks; workforce-dev stakeholders want CMM + CAE improvements + data clean-up alongside Career Compass delivery, with no roadmap de-prioritisation offered. Logged as [open item #50](../../PM-skills-ALL-1/00-hub/open-items.md).
- **2 Jul (this meeting)** — Same trade-off question raised again at senior level, still without a convincing answer beyond "staffing flexibility assumptions."

Open item #50 already recommends: *"single tracked escalation instead of resurfacing per meeting."* This meeting is more evidence for that recommendation — the question isn't getting closer to resolved by discussing it again at a more senior level; it needs an actual decision forced, likely from Adrian.

**Related PRD:** [prd-my-development.md](../../PM-skills-ALL-1/02-prd/prd-my-development.md) — the competency gap / My Development epic this CMM decision ultimately feeds. Worth checking whether the survey data there (21% of OTG users rank competency management as top-2 priority, but only 9% relogin rate) belongs in the CMM value-prop narrative the action items ask for — it's a stat that already exists and directly supports "why officers would use this."

---

## Next Steps

**Immediate (this week):**
- Confirm the actual date of the PS/PS(D) leadership conversation — everything else is scheduled against it and it wasn't stated.
- Assign named owners (not just "Product Team") to each of the 5 pre-PS/PS(D) action items.
- Decide whether this is the same escalation as Mark/Gek Khiang open item #50, or a separate one — sequence accordingly.

**Before the PS/PS(D) conversation:**
- CMM value proposition narrative (business + officer value)
- Trade-off explanation (gain vs. loss across R1–R4)
- Current-state vs. future-state visual
- Updated deck and agenda

**Recommend scheduling separately (not blocking PS/PS(D) prep):**
- Competency synchronisation / SSOT governance conversation (Compass ↔ HR systems ↔ CMM) — this has now been deferred twice without a scheduled follow-up.

---

## Appendix: Raw Notes

<details>
<summary>Original analysis (click to expand)</summary>

See source transcript-derived analysis provided by the PM on 2026-07-03, covering: TL;DR, What Went Well, What Did Not Go Well, Risks Addressed/Not Addressed, Key Decisions, Action Items, Assessment, and Overall Health Table.

</details>
