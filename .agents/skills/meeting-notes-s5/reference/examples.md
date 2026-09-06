# Real meeting-notes examples

Three files produced from real meetings, kept whole. They are the pattern to match: structure, depth, voice, how sections flex by meeting type. When the current skill and these examples disagree, the examples win.

## Contents

- Example 1 — 1:1 discovery huddle (light, 100 lines): metadata + Related line, contingency decision with why/impact, capacity risk called out, raw appendix kept
- Example 2 — team sync (medium, 130 lines): timestamped source refs, distinctions table, friction section, risk table, decisions split by theme, action items by owner
- Example 3 — senior governance meeting (heavy, 200 lines): 10 dated decisions, IDSC clearance sub-table, feedback-triage rule, three timeline-risk flags cross-referenced against the confirmed roadmap, RAID-dashboard shortlist
- Slack-friendly shape — the --slack escape hatch

---

## Example 1 — 1:1 discovery huddle

    # Meeting Notes: Huddle with Liting on R1 Opportunities Discovery
    
    **Date:** 4 September 2026 (2026-W36)
    **Attendees:** Michelle Yip (PM), Liting (Li Ting Kway, Product Designer)
    **Meeting Type:** 1:1 Design & Discovery Huddle
    **Related:** [R1 Brainstorm Running Doc](../decisions/2026-09-01-W36-r1-brainstorm-running-doc.md) · [CMM Discovery Readout Notes](2026-08-31-W36-architecture-review-forum-cmm-discovery.md) · [R1 Epic A Dependency Analysis](../../outputs/archive/2026-W34-Aug17-Aug21/analyses/2026-08-19-W34-r1-epic-a-day2-ops-dependency-analysis.md)
    
    ---
    
    ## Summary
    
    Liting shared initial R1 discovery findings, including user pain points and wish lists from Amy and Qiu Yan. A critical research gap surfaced: Liting has been unable to connect with operational personnel handling internal jobs and secondments. If this gap is not closed, the team will need to narrow the R1 scope to native creation and application for STIPs and Gigs in CareerCompass, while falling back to ingesting internal jobs and secondments from Careers@Gov (C@G) or OneTalent Gateway (OTG). Michelle connected Liting with Megan Yeo from PCG to address the stakeholder gap. Underpinning this is a major capacity risk: only 1 designer is currently assigned across two large, concurrent discovery scopes (CMM and R1 Opportunities).
    
    ---
    
    ## Decisions & Directional Shifts
    
    1. **Contingency scope boundary for R1 Opportunities defined:**
       - **Direction:** If discovery with internal jobs and secondment operators cannot be completed in time, R1 will split opportunity types:
         - **Native in Compass:** Full end-to-end creation and application workflow for STIPs (Short-Term Immersion Programmes) and Gigs.
         - **Ingestion / Link-off:** Ingest internal jobs and secondments from C@G or OTG, rather than building native creation and management workflows in Compass.
       - **Why:** Cannot design workflows without operational input from the personnel who run these schemes.
       - **Impact:** De-risks delivery by avoiding speculative design, but introduces cross-system UX friction (dual posting, additional logins) that requires deeper solutioning.
    
    2. **Stakeholder intervention for internal jobs and secondments:**
       - **Action:** Michelle identified Megan Yeo from PCG (Public Sector Career Group / PSD) as the operational contact point for Liting.
    
    ---
    
    ## Action Items
    
    | Task | Owner | Due Date | Priority | Status |
    |------|-------|----------|----------|--------|
    | Arrange discovery chat with Megan Yeo (PCG) on internal jobs and secondments | Liting | Next week (w/c 7 Sep) | 🔴 High | 🔴 Not Started |
    | Investigate technical and UX options to reduce dual posting and additional login friction for ingested internal jobs/secondments | Michelle + Pow Hwee | Before Sprint 9 R1 brainstorm | 🟡 Medium | 🔴 Not Started |
    | Synthesize Amy and Qiu Yan interview findings into the R1 brainstorm running doc | Liting | Next week | 🟡 Medium | 🔴 Not Started |
    | Flag designer capacity constraint (1 designer across CMM + R1 Opportunities) to Adrian Ang | Michelle | Ongoing / 1:1 | 🔴 High | 🔴 Not Started |
    
    ---
    
    ## Key Insights & Findings
    
    ### Discovery Findings (Amy & Qiu Yan)
    - Pain points and wish lists captured from Amy and Qiu Yan cover the operational realities of posting opportunities and tracking candidates.
    - Full details to be synthesized into the running R1 discovery log once Liting consolidates interview notes.
    
    ### The Internal Jobs & Secondments Gap
    - **Core issue:** Internal jobs and secondments operate under different administrative rules, approval chains, and governance compared to lightweight STIPs and Gigs.
    - **Blocker:** Liting had no direct line of contact with the actual personnel managing internal jobs and secondments, leaving that half of the opportunity spectrum unvalidated.
    
    ### User Experience & Dual Posting Problem
    - If internal jobs and secondments are managed in C@G or OTG while STIPs/Gigs live in Compass:
      - **Hiring managers / HR:** Face dual posting if they have multiple opportunity types across platforms.
      - **Public officers:** Experience disjointed application flows, extra hops, or additional authentication barriers if redirected to C@G or OTG.
      - Deeper investigation needed with engineering (Pow Hwee) on single sign-on, deep linking, and automated sync options.
    
    ---
    
    ## Blockers & Capacity Risks
    
    1. **Designer Bandwidth Bottleneck (1 Designer, 2 Scopes):**
       - **Risk:** Liting is the sole designer covering both the **Competency Management Model (CMM)** discovery track (agency interviews, parent-child model, 15 Sep BO sharing milestone) and **R1 Opportunities** (creation, application, hiring manager dashboard).
       - **Impact:** High risk of context switching, shallow discovery, or schedule slip on one or both tracks.
       - **Mitigation needed:** Discuss design resourcing with Adrian Ang. Validate whether additional design capacity (e.g., Michelle Chen or Amber once MVP wrap completes) can be unlocked.
    
    2. **Access to Internal Job & Secondment Administrators:**
       - **Risk:** Discovery schedule is dependent on Megan Yeo's availability and responsiveness.
       - **Mitigation:** Liting to initiate contact immediately; Michelle to follow up if scheduling stalls.
    
    ---
    
    ## Next Steps
    
    **Immediate (This Week / Next Week):**
    - Liting to send meeting invite to Megan Yeo (PCG).
    - Michelle to update the R1 Brainstorm Running Doc ([2026-09-01-W36-r1-brainstorm-running-doc.md](../decisions/2026-09-01-W36-r1-brainstorm-running-doc.md)) with Liting named as R1 designer and record the contingency scope option.
    - Bring the dual posting and additional login challenge to the Sprint 9 R1 Brainstorm kickoff with Pow Hwee.
    
    **Follow-up Meeting:**
    - **Date:** Week of 6 September (Sprint 9 Session 1 of R1 Brainstorm)
    - **Attendees:** Michelle Yip, Pow Hwee Tan, Liting
    - **Agenda:** Review Megan Yeo discovery findings (if held), evaluate native vs ingestion feasibility, and review technical approaches to authentication and posting sync.
    
    ---
    
    ## Context for Future Reference
    
    This huddle marks the first concrete scope boundary discussion for R1 Opportunities post-MVP. In MVP, opportunities are read-only with external application links. R1 originally envisioned native creation and application across all opportunity types. Today's huddle establishes the pragmatic architectural fallback: STIPs and Gigs are lighter and well-suited to native Compass workflows, whereas internal jobs and secondments carry heavier civil-service machinery that may warrant ingestion from C@G/OTG unless discovery with Megan Yeo proves native Compass handling is straightforward.
    
    ---
    
    <details>
    <summary>Appendix: Raw Notes</summary>
    
    Huddle with Liting on R1 Discovery.
    Liting shared about the pain points and wish lists from Amy and Qiu Yan.
    There is one challenge where Liting is unable to touch base with any personnel that handles internal jobs and secondments.
    Thus, if this is not done, R1 scope may need to change to handling creation and application of STIPs, Gigs in Compass, while allowing ingestion of internal jobs and secondments from either C@G or OTG.
    However, we may need to deep dive a bit more into how we can reduce the dual posting or additional login required for internal jobs and secondments.
    I have managed to find Megan Yeo from PCG to chat with Liting and pending Liting's arrangement.
    My concern is only 1 designer and she had to manage 2 scopes - CMM and R1 Opportunities.
    
    </details>

---

## Example 2 — team sync

    # OTEP Squad Sync — Debrief
    
    **Date:** 2026-09-04 (W36)
    
    **Focus:** Staff movement scenarios (job ID changes) framed as stories/test scenarios; mapping to the 118 PoTEX test items; NCS VAPT coordination; performance-test personas.
    
    ---
    
    ## 1. High-Level Context
    
    The meeting covered three threads:
    
    1. **Movement scenarios** — clarifying and organising promotion, transfer, secondment, forward deployment, and double-heading for job ID changes, and how to frame them as scenarios/stories rather than low-level data or test cases.
    2. **Presentation and mapping** — how to present scenarios to business and test teams (WD, PoTEX), and how to map them onto the existing 118 PoTEX test items.
    3. **Operational follow-ups** — VAPT on Compass with NCS (communication, acknowledgement, account setup) and performance/load-testing personas, including adding business users' emails.
    
    ---
    
    ## 2. What Went Well
    
    ### Shared understanding of scenarios
    
    - **Imelda** did the groundwork: converted tech language (job ID, NRIC changes) into scenario/story language, cross-checked against previous OTG scenarios to confirm Compass coverage, and marked in-scope items. She flagged double-heading and inter-agency transfer as important [0:02:55–0:04:55].
    - The team clarified key distinctions:
    
    | Distinction | Detail |
    |---|---|
    | Single vs multiple job IDs | Adrian: one officer → one job ID; one officer → two job IDs; one officer from two job IDs → one job ID [0:06:29–0:07:02] |
    | Within agency vs across agencies | Jace pushed to explicitly call out: within same agency, ministry ↔ ministry, stat board ↔ stat board, cross ministry/stat board [0:07:10–0:08:23, 0:09:54–0:10:33] |
    | Movement vs change of role | Michelle: "Will it be better if we position it as it's a movement of the officer?" — "change of role" is too broad and not intuitive [0:12:30–0:13:01] |
    
    ### Healthy challenge on structuring requirements
    
    - Michelle noted the B1–B5 scenarios apply not only to "change of role" but also to promotion and other types [0:11:05–0:11:41].
    - Adrian and Imelda recognised story-level and data-level are different layers: scenarios/stories first, then ACs that define data changes [0:25:21–0:26:06]. Agreed to start at scenario level, then map to data-level job ID/agency changes and PoTEX items [0:26:06–0:27:03].
    
    ### Awareness of stakeholder constraints
    
    - **PoTEX (Hui Ting):** works off her own 118-item Excel "menu" and will not reframe her view to match the team's scenario framing [0:18:53–0:19:56, 0:23:24–0:24:01]. Plan: do the first mapping (scenarios → PoTEX items) internally before asking her targeted questions.
    - **NCS VAPT:** the team is intentionally de-fragmenting communication into one WhatsApp group and one email thread [0:32:56–0:34:07].
    
    ---
    
    ## 3. Friction Points
    
    ### Terminology confusion and looping
    
    - **"Agency" vs "ministry" vs "stat board":** Imelda used "agency" to mean a stat board or ministry; Jace used it differently and pushed to clarify "within agency" vs "across agency" [0:08:23–0:09:13].
    - **Transfer vs movement vs change of role:** oscillation on whether "transfer within agency" is a distinct thing or just "change of role" [0:18:21–0:18:44, 0:22:05–0:23:03]. Unclear whether an internal department move (e.g. WB → CDGO) is a transfer, a change of role, just a job ID change, or all of them [0:22:24–0:22:58].
    - **Double-acting / double-heading:** second-guessing about whether it can occur within the same agency and how to represent it [0:28:35–0:28:57].
    
    Net effect: the discussion became circular and time-consuming. Structure was refined but not locked.
    
    ### Scenario vs test-case alignment still unsettled
    
    - Not clear by the end how scenarios will be grouped (by movement type? by outcome?) or how ACs will be written to be concrete enough for engineers and POCDEX .
    - Adrian warned that business-terms-only scenarios let each engineer interpret data prep differently [0:24:01–0:25:21].
    - Imelda's list is a starting point; no final agreed scenario taxonomy was captured.
    
    ### Dependency on individuals and informal channels
    
    - **POCDEX:** heavy reliance on one person's 118-item Excel and her availability; Paoli notes she is very busy with a 24 September deadline [0:21:01–0:21:52].
    - **NCS:** unresponsive to email — Jace: "They can see lah. They don't reply lah." [0:32:09–0:32:11]. Communication spread across multiple email threads, Slack, and a separate WhatsApp group not everyone is in [0:30:49–0:33:00].
    
    ### Hidden or informal engineering actions
    
    - Johnny has already started load-test persona work, apparently not fully surfaced to PM/WD: "I wasn't aware until Johnny told me lah. I think he might have done out of goodwill." [0:37:01–0:37:19].
    - Hesitation on how to tell Hui Ting about persona email changes because of possible process/ingestion implications [0:37:19–0:38:36].
    
    ---
    
    ## 4. Risks Not Fully Addressed
    
    | Risk | Evidence | Implication |
    |---|---|---|
    | **Scenario coverage** — important movement scenarios may be missing or ambiguously defined | Jace worries about missing movement types beyond promotion/secondment/forward deploy [0:18:21–0:18:44]; team repeatedly revisits internal transfer, cross-agency transfer, double-acting within same agency, promotion with immediate cross-agency move [0:15:05–0:15:31, 0:22:05–0:22:42, 0:28:35–0:29:00]; Imelda plans to check with Sin Chong but WD/business has not yet validated coverage of all real-world movement types | Gaps could lead to defects in Compass behaviour for less common but critical staff movements |
    | **Mapping risk** — misalignment between OTEP's scenario view and PoTEX's 118 data-level items | Paoli stresses scenarios must originate from the PoTEX Excel; she won't interpret OTEP's framing [0:18:53–0:19:56]; no explicit owner or tracking approach decided; no concrete "scenario → PoTEX IDs" example agreed | A scenario could look "covered" when the exact PoTEX items don't match the intended job ID/agency movement combination; over-testing some, missing others |
    | **Vendor responsiveness / timeline (NCS VAPT)** — VAPT slips because NCS hasn't acknowledged the brought-forward schedule | Multiple chasers with no reply [0:30:49–0:31:39, 0:32:14–0:32:21]; VAPT is meant to start next Monday [0:33:00–0:33:42]; Adrian: "We have to push them a bit to accept the product moving schedule... Otherwise, all these things that we have pushed forward will be for nothing." [0:34:31–0:34:38] | VAPT may not start on time, or runs on the wrong environment/account, wasting OTEP prep |
    | **Communication fragmentation** — conflicting instructions to NCS and internal teams across channels | Adrian "slightly worried" about fragmentation across multiple WhatsApp groups and email threads [0:32:56–0:34:07]; plan to start one clean email thread [0:33:42–0:34:07] | NCS may miss critical instructions or treat older emails as superseded; internally, people assume someone else has communicated something |
    | **Governance / process on personas and email ingestion** — persona and email changes may bypass agreed ingestion process | Paoli unsure whether adding Sin/Chris emails needs full ingestion: "If he [Johnny] needs to run through the ingestion, then Hui Ting will probably have some views." [0:37:26–0:37:50]; she's in a "difficult position" on how/when to tell Hui Ting [0:37:19–0:38:36]; Johnny already committing to new personas [0:36:56–0:37:19] | Misalignment with governance/security expectations; data inconsistencies between personas and ingestion sources |
    
    ---
    
    ## 5. Decisions Made (or Strongly Implied)
    
    ### Scenario structuring and terminology
    
    1. **Use business-terms scenarios as the starting point** — officer movement scenarios (promotion, transfer, secondment, forward deploy, double-acting, internal transfer) rather than purely job ID changes [0:11:05–0:11:41, 0:25:54–0:26:06].
    2. **Differentiate within vs across agency clearly** — Michelle: "You just put within the same agency... the one within the ministry or step board, you can just take it out." [0:28:57–0:29:12].
    3. **Promotion is a movement scenario** that can also involve cross-agency moves [0:15:05–0:15:31]. "Change of role" as a category is too broad and will be pruned or redefined [0:16:02–0:16:25].
    
    ### Process with PoTEX
    
    4. **Team does the first mapping (scenarios → PoTEX menu)** — they will not ask PoTEX to recast her view. Paoli: "We have to do our first mapping first... and then if we have any question whether that menu item meets our scenario, then it's probably fair." [0:23:24–0:24:01].
    5. **Approach PoTEX with specific, not open-ended, questions** — Imelda to respect that Hui Ting is busy and focused on her 118-item list [0:20:53–0:21:52].
    
    ### NCS VAPT coordination
    
    6. **One WhatsApp group and one email thread** — Victor to add Jobel and others to the existing NCS WhatsApp group [0:32:41–0:33:00]; new email thread with a clear subject on VAPT progress including all relevant OTEP and NCS parties [0:33:42–0:34:07].
    7. **Keep chasing NCS for acknowledgement** — Jace to send another chaser after lunch if no reply, and tag AWS account info [0:32:21–0:32:56].
    
    ### Personas and load testing
    
    8. **Johnny to clarify persona creation and ingestion needs** — Paoli to check whether persona changes need full ingestion or are just a patch [0:37:26–0:38:36], then decide whether to bundle email changes (Sin, Chris, others) with the new load-testing personas or handle separately [0:37:50–0:38:36].
    
    ---
    
    ## 6. Action Items
    
    | Owner | Action | Ref |
    |---|---|---|
    | Imelda | Refine scenario list: adjust terminology ("within same agency", cross-agency differentiation); re-categorise or remove the overly broad "change of role" category | 0:16:02–0:16:25, 0:28:57–0:29:12 |
    | Imelda | Call with Sin Chong to validate priority and completeness of scenarios; then post scenarios into WD chat for Ellen, Chris, Jackie to comment | 0:04:55–0:05:39, 0:29:41 |
    | Imelda | Work with Adrian to translate the scenario list into ACs / data changes; map scenarios to PoTEX's 118 items with the team | 0:25:21–0:27:03 |
    | Jace | Ensure within vs cross-agency movements are covered: ministry ↔ ministry, stat board ↔ stat board, cross-entity | 0:07:10–0:08:23 |
    | Jace | Send another email chase to NCS after lunch if no response; include AWS account details for the assumed role | 0:31:39–0:32:56 |
    | Jace | Provide domain context (movement types, transfer semantics) when mapping scenarios to test cases | 0:18:21–0:18:44, 0:20:29–0:20:44 |
    | Michelle | Provide WD/business validation that the movement-based framing matches how HR sees staff movement | 0:12:30–0:13:38 |
    | Michelle / Victor | Ensure OTEP team members (e.g. Jobel) are added to the main NCS WhatsApp group | 0:32:41–0:33:00, 0:34:31–0:34:38 |
    | Adrian | Guide the team to express ACs in terms of job ID and agency data changes for engineers | 0:24:01–0:26:06 |
    | Adrian | Own or push for the new consolidated VAPT progress email thread, including NCS and internal stakeholders | 0:33:42–0:34:07 |
    | Victor | Add Jobel (and likely others) to the existing NCS WhatsApp group so it becomes the single group | 0:32:41–0:33:00 |
    | Paoli | Reinforce with PoTEX that scenarios must map to her 118-item Excel and OTEP should come with pre-mapped questions | 0:23:24–0:24:01 |
    | Paoli | Clarify with Johnny whether new personas and email changes require ingestion; decide whether to bundle business email additions (Sin, Chris) with the performance-test personas or handle separately | 0:37:19–0:38:36 |
    | Johnny (via Paoli) | Confirm scope of new personas for performance/load testing; confirm whether persona email changes are simple patches or require full ingestion | 0:36:56–0:37:50 |
    
    ---
    
    ## 7. Open Follow-Ups
    
    - No final scenario taxonomy was agreed. Next step is Imelda's refined list + Sin Chong validation + WD chat review.
    - No owner assigned for the scenario → PoTEX ID mapping tracker. Worth naming one before the PoTEX conversation.
    - NCS acknowledgement of the brought-forward VAPT schedule is still outstanding with VAPT due to start Monday.

---

## Example 3 — senior governance meeting

    # Meeting Notes: [Bi-weekly] OTEP Product x BO — Senior Level
    
    **Date:** 2026-09-04 (W36)
    
    **Organiser:** Imelda MO
    
    **Attendees:** Mark HO, Gek Khiang TAN, Xian Zhang GUO, Victor ONG, She Hui TAN, Li Ting KWAY, Imelda MO, product/engineering leads
    
    **Meeting Type:** Governance / assurance review (bi-weekly)
    
    **Duration:** 1 hour
    
    **Transcribed:** Yes (analysis based primarily on the transcript, with supporting context from the meeting chat)
    
    ---
    
    ## Summary
    
    Broadly positive governance meeting. Career Compass and related workstreams are on track: UAT largely complete, SSO issues resolved, VAPT preparation done and scheduled to start, and the CV Competency Inference Engine (CIE) progressing towards AI governance clearance. Leadership's attention has shifted from delivery execution to product readiness, user validation, adoption strategy, communications, and AI governance confidence. Mark HO spent little time challenging technical delivery and most of it probing whether the team is validating assumptions with real users before launch.
    
    The main unresolved concern is that four assumptions remain unvalidated: that CIE output is useful to users, that officers will understand Career Compass, that agencies will accept the MVP rollout model, and that a two-week soft-launch feedback period is enough.
    
    ---
    
    ## Decisions Made
    
    1. **Proceed with AI governance / IDSC clearance for CIE now**
       - **Why:** Waiting for more HRPS/Cumulus data would delay clearance; evaluation can continue in parallel.
       - **Who decided:** Leadership (Mark HO, Gek Khiang TAN).
       - **Impact:** CIE governance submission proceeds on current evidence base, on a fixed clearance path:
         | Milestone | Owner | Target |
         |---|---|---|
         | IDSC/assessment submission (incl. testing methodology) | Victor ONG | 7 Sep |
         | TRA review | — | 16 Sep |
         | Management approval | — | 23 Sep |
         | IDSC approval | — | 30 Sep |
       - **Watch-out:** Leadership signalled the approval discussion will focus on evaluation rigour and methodology, not the headline accuracy metrics.
    
    2. **Continue evaluating CIE with additional HRPS and Cumulus data as it becomes available**
       - **Why:** Larger, more representative samples strengthen the evaluation without blocking submission.
       - **Impact:** Evaluation is an ongoing track, not a gate.
    
    3. **Treat CIE as a reusable government capability, not just a Career Compass feature**
       - **Why:** Positioning it as API-consumable and agent-ready aligns with PSD's reusable-capability direction and helps the AI governance conversation.
       - **Impact:** Architecture and governance submissions must be framed around a reusable service. Supporting artefacts should emphasise composability and future reuse beyond Career Compass.
    
    4. **Maintain the MVP-first principle — only critical issues block MVP**
       - **Why:** Endless pre-launch optimisation is a bigger risk than shipping a contained MVP.
       - **Who decided:** Gek Khiang TAN, reinforced repeatedly.
       - **Impact:** Teams evaluate soft-launch feedback through an MVP lens. R1 release planning becomes critical because not all feedback will be accepted before launch. Feedback triage rule:
         | Feedback type | Action |
         |---|---|
         | Defect / blocking issue | Fix before MVP |
         | Minor UX improvement | Consider before MVP |
         | Major product change | Move to R1+ |
    
    5. **Soft launch remains in the plan**
       - **Why:** It is the preferred validation approach before public rollout; participants confirmed a soft launch is already planned.
       - **Working dates discussed:** soft launch 12–17 Nov, MVP launch 24 Nov.
       - **Impact:** Team now needs to define test objectives, decide whether dates move earlier, and decide whether testing happens only in production or earlier via test environments.
    
    6. **Test objectives must be defined before running the soft launch**
       - **Why:** Strongest ask from Mark HO — the team should explicitly define what is being tested before engaging agencies.
       - **Impact:** Team must prepare learning objectives, evaluation criteria, success measures, and a rule for which feedback influences MVP versus later releases.
    
    7. **Start detailed MVP communications planning now**
       - **Why:** Agency rollout messaging needs leadership clearance and is a near-term workstream, not a future one.
       - **Impact:** Xian Zhang GUO and team to prepare the comms approach, explain the MVP purpose, explain OTG ↔ Career Compass coexistence, and prepare material for PS/DS review.
    
    8. **Technical readiness checks before agency onboarding**
       - **Why:** Proactive checks on agency environments are a prerequisite for inviting users in.
       - **Impact:** Gek Khiang TAN to engage CIO counterparts to verify Comet migration status, WOGAAD readiness, and potential login issues before onboarding pilots.
    
    9. **Escalate data-access issues rather than wait**
       - **Why:** HRPS and Cumulus bottlenecks are blocking the CIE evaluation dataset.
       - **Impact:** Gek Khiang TAN to engage both GovTech and HRPS stakeholders; team keeps pushing for the CV/JD datasets.
    
    10. **Continue the weekly governance cadence; escalate blockers immediately**
       - **Impact:** No change to meeting rhythm; data-access blockers raised as they arise.
    
    ---
    
    ## Action Items
    
    | Task | Owner | Due Date | Priority | Status |
    |---|---|---|---|---|
    | Define clear objectives and success criteria for the Career Compass test party / soft launch | Xian Zhang GUO + Product Team | Before soft launch (no date set — schedule within 48h) | 🔴 High | 🔴 Not started |
    | Review whether the soft launch should occur earlier than planned | Product Team | Next BO sync | 🔴 High | 🔴 Not started |
    | Develop the MVP communications and rollout approach for PSD and ESG; prepare proposal for PS/DS review | Xian Zhang GUO | Before soft launch (no date set) | 🔴 High | 🔴 Not started |
    | Define agency communications for the OTG → Career Compass transition | Product Team | Before soft launch (no date set) | 🟡 Medium | 🔴 Not started |
    | Submit IDSC/AI assessment package for CIE, including the testing methodology (evaluation process, sample size, assessment rigour, benchmarking rationale) | Victor ONG + team | **7 Sep** | 🔴 High | 🔴 Not started |
    | Support the IDSC clearance path: TRA review (16 Sep) → management approval (23 Sep) → IDSC approval (30 Sep) | Victor ONG + team | 30 Sep | 🔴 High | 🔴 Not started |
    | Chase Cumulus data access and the cloaking-service dependency with GovTech contacts | Gek Khiang TAN | Ongoing (no date set) | 🔴 High | 🟡 In progress |
    | Follow up with HRPS on JD/CV data access issues; escalate if the bureaucratic blocker persists | Gek Khiang TAN | Ongoing (no date set) | 🔴 High | 🟡 In progress |
    | Prepare a coherent narrative reconciling HR Alchemist and Career Compass competency inference | She Hui TAN + Victor ONG + team | Before soft launch (no date set) | 🟡 Medium | 🔴 Not started |
    | Conduct agency technical readiness checks (Comet migration status, WOGAAD login, non-standard agency environments); engage CIO counterparts where needed | Gek Khiang TAN + Engineering | Before soft launch (no date set) | 🟡 Medium | 🔴 Not started |
    | Arrange a follow-up workshop on CMM findings and future scope prioritisation | Li Ting KWAY + Product Team + WD + CDGO | TBD (separate session) | 🟡 Medium | 🔴 Not started |
    
    **Notes:**
    - The IDSC path has firm dates (7 / 16 / 23 / 30 Sep). Everything else was raised without a due date and needs one assigned within 48 hours, anchored to the soft-launch window.
    - The soft-launch objectives item (Xian Zhang GUO) is the critical one: several other items (comms, narrative, readiness checks) only make sense once "what are we testing" is answered.
    
    ### For the PM / RAID dashboard next week
    
    These are the five items that most clearly change what the team does next:
    
    1. IDSC submission package ready by **7 Sep**, including testing methodology.
    2. Soft-launch objectives defined and agreed.
    3. MVP communications approach drafted for PS/DS clearance.
    4. Decision on whether soft-launch timing needs to move earlier.
    5. HRPS / Cumulus data-dependency escalation status.
    
    ---
    
    ## Key Insights
    
    **Leadership's focus has moved from "can we build it" to "is it the right thing."** Mark HO spent most of the meeting on user validation, not delivery. The team's delivery confidence (UAT, VAPT, integrations, environments) is running ahead of its user-validation confidence. This is a product risk, not an engineering risk.
    
    **AI governance approval will hinge on methodology, not the headline accuracy number.** Both Mark HO and Gek Khiang TAN pushed past the reported 80–90% precision to ask "what is the methodology?" The governance audience is likely to challenge the evaluation process, sample size (currently 20 CVs, 218 competencies), assessment rigour, and benchmarking rationale. Good metrics with a weak rationale could still stall.
    
    **The CIE / HR Alchemist narrative gap is a communications problem, not a technical one.** Officers will reasonably ask why two PSD tools infer competencies differently. No coherent answer exists yet.
    
    **A soft launch without defined learning objectives risks becoming symbolic.** The team listed eight candidate things to test (usability, user-friendliness, accuracy, development opportunities, landing-page effectiveness, comparison against OTG, career understanding, CV inference quality) but agreed on none. If participation is also low, the exercise produces reassurance rather than learning.
    
    ---
    
    ## Risks Not Fully Addressed
    
    | Risk | Detail | Why it matters |
    |---|---|---|
    | **Wrong product, not wrong delivery** | Team discussion centres on VAPT, UAT, integrations, environment readiness. Mark HO is asking whether users actually want this experience. | Discovering a fundamental mismatch with user expectations after most delivery work is done is expensive and late. |
    | **Soft launch may not generate actionable feedback in time** | The model assumes users participate quickly, feedback is meaningful, the team analyses fast, and developers react immediately. None of these were challenged. | Low participation turns the soft launch into a symbolic milestone, not a learning loop. |
    | **AI governance approval depends on methodology** | Concern is evaluation process, sample size, assessment rigour, benchmarking rationale — not the precision figure. | Weak rationale could make approval harder despite strong metrics. |
    | **Agency onboarding and communications not finalised** | No agreed MVP comms approach, rollout messaging, OTG-vs-Career-Compass positioning, or user transition guidance. PSD and ESG are first wave. | Unclear messaging creates confusion during launch for the exact agencies whose experience sets the tone. |
    | **Hidden technical onboarding edge cases** | WOGAAD login, Comet migration status, non-standard agency environments. Team believes risk is low; leadership still wants proactive CIO-team checks. | Issues here surface only when real users try to access the product. |
    
    ---
    
    ## Timeline Risks
    
    - **TIMELINE RISK — soft-launch dates cited in this meeting differ from the confirmed MVP roadmap.** The meeting stated soft launch 12–17 Nov and public MVP launch 24 Nov. The confirmed roadmap ([outputs/roadmaps/2026-09-01-W36-mvp-timeline-wbs-gantt.md](../roadmaps/2026-09-01-W36-mvp-timeline-wbs-gantt.md)) shows MVP launch **24–25 Nov** (Adrian Ang, confirmed 25 Aug) with overall VAPT sign-off **~7 Nov**, gated by POCDEX remediation 2–6 Nov. A soft launch starting 12 Nov leaves only ~5 working days between VAPT sign-off and soft launch, and ~2 weeks between soft-launch close (17 Nov) and public launch (24–25 Nov) to collect, assess, prioritise, and implement fixes. Confirm the soft-launch window is real and agreed, and check it against the VAPT sign-off gate before committing.
    
    - **TIMELINE RISK — soft-launch objectives are undefined but the window is fixed.** Leadership asked for learning objectives to be defined "before the soft launch," but the soft launch is roughly 10 weeks out and the objectives item has no owner-committed date. If objectives, comms, narrative, and readiness checks all compress into late October, they collide with the VAPT remediation window (POCDEX 2–6 Nov) and known leave (Adrian away 5–9 Oct, Jace away 26 Oct–5 Nov per the roadmap).
    
    - **TIMELINE RISK — "revisit whether the soft launch should start earlier" has no decision date.** Pulling it forward competes with VAPT sign-off (~7 Nov). Any earlier soft launch would run before security clearance, which needs an explicit leadership call. Open sub-question from the meeting: whether soft-launch testing happens only in production or earlier via test environments.
    
    - **TIMELINE RISK — IDSC approval (30 Sep) lands the same week as the employment-lifecycle end-September freeze.** Both draw on Victor ONG / engineering capacity. The IDSC path (submission 7 Sep, TRA 16 Sep, management 23 Sep, IDSC 30 Sep) has no slack built in; a slip at any stage pushes approval into October and closer to VAPT remediation.
    
    ---
    
    ## Open Questions
    
    - [ ] What exactly is the soft launch testing? (usability / accuracy / landing-page / OTG comparison / career understanding / CIE quality — pick the primary objective) — **Owner:** Xian Zhang GUO — **By:** next BO sync
    - [ ] Should the soft launch move earlier, and if so does it run before or after VAPT sign-off? — **Owner:** Product Team + Leadership — **By:** next BO sync
    - [ ] What is the CIE evaluation methodology in a form the AI governance board will accept? — **Owner:** Victor ONG — **By:** before governance submission
    - [ ] What is the one-line answer to "why do HR Alchemist and Career Compass infer competencies differently?" — **Owner:** She Hui TAN + Victor ONG — **By:** before agency comms go out
    - [ ] Are Comet migration and WOGAAD login confirmed working for PSD and ESG users specifically? — **Owner:** Gek Khiang TAN + Engineering — **By:** before soft launch
    
    ---
    
    ## Blockers
    
    1. **HRPS / Cumulus data access**
       - **Blocked by:** CV access delays, cloaking-service dependency, data-minimisation requirements, difficulty obtaining JD-CV mapping, slow upstream stakeholder responses.
       - **Impact:** Constrains the CIE evaluation dataset and JD/CV mapping work.
       - **Resolution:** Gek Khiang TAN chasing GovTech contacts for Cumulus and escalating HRPS if the bureaucratic blocker persists.
    
    ---
    
    ## Next Steps
    
    **Immediate (this week):**
    - Xian Zhang GUO to draft soft-launch learning objectives and success criteria.
    - Gek Khiang TAN to chase Cumulus (GovTech) and HRPS data access.
    - Assign real dates to all ten action items, anchored to the soft-launch window.
    
    **Short-term (next 2 weeks):**
    - Product team to bring a recommendation on soft-launch timing (earlier or as planned) to the next BO sync.
    - Victor ONG's team to assemble the AI governance methodology evidence pack.
    - She Hui TAN + Victor ONG to draft the HR Alchemist / Career Compass narrative.
    
    **Follow-up meeting:**
    - **Date:** Next bi-weekly OTEP Product x BO (Senior level)
    - **Purpose:** Review soft-launch objectives, soft-launch timing decision, AI governance evidence readiness
    - **Attendees:** Same group
    
    ---
    
    ## Context for Future Reference
    
    - Confirmed MVP roadmap and critical path: [outputs/roadmaps/2026-09-01-W36-mvp-timeline-wbs-gantt.md](../roadmaps/2026-09-01-W36-mvp-timeline-wbs-gantt.md). Critical path runs through VAPT (POCDEX 2–6 Nov → sign-off ~7 Nov), not employment-lifecycle work.
    - Related risk registers: [outputs/analyses/2026-09-03-W36-careercompass-project-risk-register.md](../analyses/2026-09-03-W36-careercompass-project-risk-register.md), [outputs/analyses/2026-09-03-W36-mvp-raid-consolidated.md](../analyses/2026-09-03-W36-mvp-raid-consolidated.md), [outputs/analyses/2026-09-03-W36-mvp-readiness-gates.md](../analyses/2026-09-03-W36-mvp-readiness-gates.md).
    - Prior decision on competency recalculation: [outputs/decisions/2026-08-18-W34-competency-recalculation-on-profile-change.md](../decisions/2026-08-18-W34-competency-recalculation-on-profile-change.md).
    
    **Reporting headline (for upward comms):** Delivery risk is reducing, but product adoption and validation risk remain under-explored. Watch four things over the next 6–8 weeks: real-user validation, AI methodology rigour, product narrative clarity, and agency understanding of what is launching.
    
    ---
    
    ## Suggested Follow-Ups
    
    - The soft-launch objectives gap is a research-planning problem. Consider `/user-research-synthesis` framing or an interview-guide pass once objectives are set.
    - The CIE / HR Alchemist narrative and the OTG transition messaging could be drafted with `/slack-message` or a short positioning note.
    - Decisions 1–5 are governance-significant. Worth a `/decision-doc` entry for Decision 1 (proceed with AI governance clearance on current evidence) and Decision 4 (MVP-first, defer major redesigns) so the rationale is on record.

---

## Slack-friendly shape (--slack)

```
*Meeting Recap: <topic>*

*Outcome:* <one sentence>

*Decisions:*
- <decision 1>
- <decision 2>

*Action items:*
- <task> — <owner> — due <date>
- <task> — <owner> — due <date>

*Open questions:*
- <question> — <owner> to resolve

*Next:* <date> — <what happens>

Full notes: <relative path to the saved file>
```
