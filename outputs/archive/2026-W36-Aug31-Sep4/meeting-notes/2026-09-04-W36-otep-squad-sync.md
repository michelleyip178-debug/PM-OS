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
