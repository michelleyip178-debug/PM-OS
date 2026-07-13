# Meeting Notes: Squad Sync — Role Profile Data Readiness & CMM Architecture

**Date:** 2026-07-07 (Tue, W28), 9:30–10:30am

**Attendees:** Pow Hwee TAN, Adrian ANG, Barry LIM, Victor ONG, Imelda MO, Rama MOORTHY, Jace TAN

**Type:** Squad Sync — data readiness + architecture/governance review

**Duration:** 60 minutes

---

## The biggest unresolved question emerging from this session is:

**Is CMM intended to enforce standardisation, facilitate review, or simply maintain traceability between agency-specific and WOG competencies?**


## Summary

Two threads: CareerCompass role profile data has real quality problems (multiple job families/functions in one field, blanks, grade info leaking into labels) that need fixing before recommendation features scale. Rama then presented a 3-layer CMM (Competency Management Module) architecture, but the discussion moved quickly from "how do we build this" to "who governs this" — and landed on an unresolved question none of the proposed architecture answers: is CMM meant to enforce one standard competency bank, facilitate review, or just maintain traceability between agency and WOG competencies? Different people in the room were operating on different assumptions about that.

**This connects directly to the open SSOT/governance thread from 2026-06-26 and 2026-06-29** (see Context for Future Reference) — this is the third meeting in a row where the same unresolved question (who owns the canonical taxonomy, does CareerCompass become SSOT) has surfaced without being answered by the people who actually can.

---

## Decisions Made

1. **Role profile data quality issues will be analysed and planned into an upcoming sprint.**
   - **Why:** Issues (multi-value fields, blanks, grade info embedded in labels, sensitive grade references) are foundational — if they surface later in UAT or MVP rollout instead of now, recommendation accuracy gets questioned and CareerCompass credibility takes the hit.
   - **Who decided:** Team consensus.
   - **Impact:** Adds scope to an upcoming sprint; blocks scaling recommendation features until resolved.

2. **Investigate whether a mapping layer is needed between HRPS/Cumulus job family/function values and competency bank values** — rather than assuming the source systems can just be aligned directly.
   - **Why:** Same root problem as the 2026-06-26 sync — no agreed canonical source for job family/function. This decision treats misalignment as the working assumption instead of hoping it resolves itself.
   - **Who decided:** Team, driven by Rama's investigation.
   - **Impact:** Could add a translation/mapping layer to the architecture Rama proposed, which isn't currently scoped for it.

3. **NRIC-vs-Product-ID identity issue will NOT block MVP — tracked as post-MVP technical debt.**
   - **Why:** Real issue, but not launch-blocking. Rama explicitly committed to creating the tech-debt ticket.
   - **Who decided:** Rama Moorthy.
   - **Impact:** Deliberately deferred, not dropped — needs a place on a remediation backlog (see Risks Not Addressed #5).

4. **Proposed CMM direction (NOT yet approved architecture):** competency library becomes source of truth → existing competency data loads into a central repository → read-only UI initially → manual governance process initially → future sync to AI engine and HR systems.
   - **Why:** Rama's proposal, discussed as a starting direction to react to, not a locked design.
   - **Who decided:** Nobody — explicitly flagged as proposed only.
   - **Impact:** If governance/policy questions below aren't resolved first, this architecture risks being optimized for the wrong operating model (see Open Questions).

5. **SteerCo messaging (9 Jul) stays business-focused, not technical.**
   - **Why:** Adrian pushed for this — architecture detail isn't what SteerCo needs; they need the business problem, high-level outcomes, and dependencies named at a high level only.
   - **Who decided:** Adrian Ang.
   - **Impact:** Adrian owns translating the technical architecture into business narrative before Thursday.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Analyse role profile data quality issues, plan remediation into upcoming sprint | Imelda MO & Rama MOORTHY | No date given — schedule within 48 hrs | 🔴 High | 🔴 Not Started |
| Investigate mapping layer requirement: competency bank ↔ HR system job family/function | Rama MOORTHY | No date given — schedule within 48 hrs | 🔴 High | 🔴 Not Started |
| Offline comparison of MVP user data (POCDEX/HR systems) to size discrepancy magnitude | Rama MOORTHY & Imelda MO | No date given — schedule within 48 hrs | 🟡 Medium | 🔴 Not Started |
| Create tech-debt ticket for NRIC-based identifier correction (post-MVP) | Rama MOORTHY | No date given — schedule within 48 hrs | 🟡 Medium | 🔴 Not Started |
| Review outstanding comments from Xian Zhang before sending data requirements | Rama MOORTHY | No date given — schedule within 48 hrs | 🟡 Medium | 🔴 Not Started |
| Translate CMM technical architecture into business narrative for SteerCo | Adrian ANG | **9 Jul SteerCo** — 2 days out | 🔴 High | 🔴 Not Started |
| Engage policy owners on competency governance implications | Rama MOORTHY / Team | No date given | 🔴 High | 🔴 Not Started |
| Attempt alignment discussion with Jacky / policy stakeholders on governance changes | Rama MOORTHY | No date given | 🔴 High | 🔴 Not Started |
| Begin comms with external dependency teams on SAT/UAT readiness and timeline alignment | Core Team | No date given — flagged as urgent by Rama | 🔴 High | 🔴 Not Started |

**Notes:**
- Almost none of these action items have a due date. Given two of them (business narrative for SteerCo, policy owner engagement) are meant to inform or precede the **9 Jul SteerCo** — 2 days from this meeting — that's a real risk, not a formality. Push Adrian and Rama for explicit dates today, not after the meeting.
- The governance/policy engagement items ("engage policy owners," "alignment discussion with Jacky") have no clear single owner beyond "Rama MOORTHY / Team" — worth tightening before Thursday, since diffuse ownership on the most load-bearing item is exactly the failure mode "What Did Not Go Well #1" describes.

---

## Key Insights & Quotes

**Data quality problems surfaced (role profile / job family / job function):**
- Multiple job families in a single field
- Multiple job functions in a single field
- Blank fields
- Grade information embedded in role profile names
- Sensitive grade references appearing in profile labels

**The meeting's real shift:** from "how do we build the module" to "how should competencies be governed." Several participants recognized agencies need autonomy, WOG needs standardisation, and those two goals are in tension — technology doesn't resolve that tension, policy does.

**The load-bearing unresolved question (Michelle's read, echoing the framing used in the source notes):** Is CMM meant to (a) enforce a single standardized competency bank, (b) facilitate review without enforcing standardization, or (c) simply maintain traceability between agency-specific and WOG competencies? Different participants in the room were implicitly operating on different answers. Until policy owners resolve this, the architecture risks being built for the wrong model entirely.

**Governance ahead-of-architecture mismatch, named explicitly by multiple participants:** the team discussed centralisation, source-of-truth databases, approval workflows, and sync models — while "who owns competencies," "who approves changes," "what authority does WD have," and "can agencies reject WD guidance" all remain unanswered.

---

## Open Questions

- [ ] Is CMM meant to enforce standardisation, facilitate review, or maintain traceability only? — **Owner:** Policy owners (via Rama's alignment attempt with Jacky) — **By:** Before architecture is locked, ideally before 9 Jul SteerCo
- [ ] Does WD have the operational capacity to act as central reviewer/approver/governance/validation layer? — **Owner:** Unassigned — flagged by multiple participants, nobody owns confirming this
- [ ] Can agencies reject WD guidance, or is compliance mandatory? — **Owner:** Policy owners — **By:** TBD
- [ ] Who owns the competency bank — WD, agencies, or CareerCompass/product? — **Owner:** Unassigned
- [ ] Will agencies accept losing the ability to create competencies directly? (Likely resistance, acknowledged but not mitigated) — **Owner:** Unassigned
- [ ] Is a mapping layer required between competency bank and HR system job family/function values? — **Owner:** Rama MOORTHY (investigating)
- [ ] Whether WD approves/reviews, whether agencies can independently create competencies, whether competency mappings are required — all need alignment **before 9 Jul SteerCo**, per the team's own risk identification

---

## Blockers

1. **Governance/policy decisions are blocking architecture validation, not the other way around.**
   - **Blocked by:** No policy owner has yet confirmed WD's authority, capacity, or whether agencies retain competency-creation autonomy.
   - **Impact:** The proposed CMM architecture (competency library as SoT, central repository, manual governance) may be optimized for a governance model that doesn't match what policy owners actually intend or can support.
   - **Resolution:** Rama's planned alignment discussion with Jacky/policy stakeholders needs to happen before the architecture is treated as anything more than a proposal — and ideally before 9 Jul SteerCo so messaging doesn't get ahead of a decision that hasn't been made.

2. **Dependency overload risk for SAT/UAT.**
   - **Blocked by:** Core Team has many external-team dependencies for SAT/UAT readiness that haven't started alignment yet.
   - **Impact:** Delivery timeline risk if this doesn't start immediately.
   - **Resolution:** Core Team to begin comms with external dependency teams now — flagged as urgent by Rama, no date attached yet.

---

## Timeline Risks

- **TIMELINE RISK:** Two action items (translate architecture to business narrative, engage/align with policy owners on governance) are meant to inform the **9 Jul SteerCo** — only 2 days after this meeting — but neither has an explicit due date or a confirmed single owner for the policy-engagement piece. Given "What Did Not Go Well" in this same meeting already flags that business owners aren't driving governance decisions fast enough, there's a real risk SteerCo happens without these questions actually resolved, only reframed for a business audience. Recommend Michelle confirm today whether Adrian and Rama can realistically land both before Thursday, or whether SteerCo messaging should explicitly flag these as "still being resolved" rather than presented as settled.
- **TIMELINE RISK:** This is the third squad sync in a row (2026-06-26, 2026-06-29, today) surfacing the same unresolved SSOT/governance question without a policy owner in the room to answer it. If this pattern continues past 9 Jul SteerCo without escalation, it stops being a normal open question and starts being a recurring blocker that nobody has authority to close — worth naming this pattern explicitly to Adrian rather than logging it as a fresh open question each time.

---

## Next Steps

**Immediate (Today/Tomorrow):**
- Confirm explicit due dates with Rama and Adrian on the SteerCo-facing action items (business narrative, policy engagement) given the 9 Jul deadline is 2 days out
- Rama to review Sheng Shyang's outstanding comments before sending data requirements

**Short-term (Before 9 Jul SteerCo):**
- Rama's alignment attempt with Jacky/policy stakeholders on governance
- Adrian's business-narrative translation of the CMM architecture
- Core Team to open comms with external SAT/UAT dependency teams

**Follow-up Meeting:**
- **Date:** Implied — before or immediately after 9 Jul SteerCo
- **Purpose:** Confirm whether policy owners have actually answered the standardisation-vs-review-vs-traceability question, and whether WD's capacity/authority is confirmed
- **Attendees:** Should include an actual policy owner (Jacky or equivalent) this time, not just product/engineering restating the same open question

---

## Context for Future Reference

- **This is a continuation, not a new topic.** The same core question — is CareerCompass the SSOT for competency/taxonomy data, and will HR systems (Cumulus, HRPS) and policy actually support that — was first surfaced 2026-06-26 (`2026-06-26-W26-squad-sync-competency-roadmap.md`) and reinforced 2026-06-29 (`2026-06-29-W27-standup-and-bo-working-level.md`). Both prior sessions ended with the same unresolved ownership question. Today's session reframes it more precisely (standardisation vs. review vs. traceability) but still didn't get a policy owner's answer.
- **Victor ONG's AI-for-taxonomy-harmonisation framing has now surfaced twice** (2026-06-26, and implicitly again in today's shift toward "future synchronisation to AI engine"). The 2026-06-26 notes flagged this directly: AI risks becoming a workaround for an unresolved governance problem rather than a fix for it. Worth watching for this framing resurfacing again as a way to move fast before the data/governance foundation is settled.
- **Barry LIM has now challenged CMM/data-governance assumptions in at least two consecutive syncs** (2026-06-26 and today) — consistent signal that resourcing/capacity-minded stakeholders are watching this space closely for scope creep, separate from his R1 ATS-scope-creep concern raised earlier this week.
- **Imelda MO's concern is an internal team dynamic worth tracking**: product and engineering are absorbing discovery work that policy/business owners should be driving. If this repeats, technical teams become de facto policy owners by default — worth raising with Adrian directly rather than letting it self-resolve.
- Links to open items: this thread connects to hub tracker #18/#41 (competency SSOT governance) and #50 (CMM scope pressure, no leadership trade-off decision — Adrian already owns escalating this to Mark/Gek Khiang per the 2026-07-06 update) and the Epic E scope-boundary question (read-only sync vs. write-back) in the new [R1 PRD](../prds/2026-07-07-W28-careercompass-r1-prd.md), Section 7.

---

## My Overall Assessment

**Meeting effectiveness: 8/10** (per source notes — reasonable given the outcome).

The most valuable outcome wasn't the architecture — it was the team recognizing, out loud, that the hardest problems here are governance and operating-model questions, not technical ones. That's a mature reframing and matches the same conclusion the team reached on 2026-06-26, which is itself worth noting: recognizing the problem a second time without a policy owner answering it means the org hasn't actually moved the question forward in two weeks, just re-described it more precisely.

**The single most important unresolved question, unchanged in substance since 2026-06-26:** which system is the canonical source of truth, and does CareerCompass becoming that source have policy backing — or is the team designing an architecture (central repository, manual governance, future AI sync) for an operating model nobody with actual authority has confirmed?

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original meeting summary as provided</summary>

Executive Summary, What Went Well, What Did Not Go Well, Decisions Made, Key Risks, Risks Not Adequately Addressed, Action Items, and Overall Assessment sections as submitted by the PM on 2026-07-07 — condensed and restructured above; full original text available in the conversation history for this session.

</details>

---

*Saved: 2026-07-07 (W28)*
*Next: Confirm due dates on SteerCo-facing action items with Adrian/Rama before 9 Jul. Consider escalating the recurring, unresolved SSOT/governance pattern (three syncs running) directly to Adrian rather than letting it resurface a fourth time.*
