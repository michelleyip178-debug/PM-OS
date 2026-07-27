# STAR Feedback Drafts — Barry, Rama, Imelda

For AppraiseAI (or similar 360 tool). Relationship: Colleague. One situation each, mapped to the form's Strengths / Areas for Consideration / Manager Remarks fields, with STAR labels shown so you can see the structure — strip the labels before pasting if the tool just wants prose.

---

## Barry Lim (Engineering/Resourcing Advisory Partner)

### Strengths

**Situation:** At the 2 Jun OTEP squad sync, the team's working assumption was that VAPT submission could happen by early September, well clear of the 16 Oct go-live.

**Task:** Barry was asked to weigh in on the technical/security sequencing given his advisory role on VAPT and resourcing.

**Action:** He flagged that VAPT actually needed to *start* by early August, a materially earlier and harder constraint than the team assumed, and said so directly in the sync rather than letting the September assumption stand.

**Result:** That single flag converted a soft assumption into a tracked risk against the 16 Oct go-live, giving the team several weeks of lead time to replan sprint sequencing instead of discovering the conflict once feature freeze was already locked.

### Areas for Consideration

**Situation:** In the 4 Jun backlog grooming, a soft-launch/SEO timing question came up that overlapped with the VAPT and feature-freeze windows Barry had just helped tighten.

**Task:** The question needed a documented answer so the team could sequence around it.

**Action:** Barry resolved it in an offline conversation with me instead of in the shared session.

**Result:** The decision never made it back into the written record. Given Barry is often the most authoritative voice on these sequencing constraints, it'd help if calls like this landed as a short written decision rather than a side conversation the rest of the team can't see or plan against.

### Remarks for Manager & Review Panel

Barry's value shows up most when the team is about to accept a comfortable assumption; the VAPT timeline call is a clean example of him saying "that's tighter than you think" before it became a crisis. The gap is documentation habits, not judgment: important calls sometimes resolve in side conversations that don't make it back into the written record, which makes it harder for peer PMs to plan against them with confidence.

---

## Rama Moorthy (Delivery/Resource Lead)

### Strengths

**Situation:** Ahead of scoping the shared OTG/competency upload module, there was real risk of scope blowup without a clear understanding of Rama's intent and operational constraints.

**Task:** Michelle needed to pin down the MVP boundary and surface any operational-owner or migration-lead gaps before the team committed to a build plan.

**Action:** Rama sat through a structured 45-minute discovery session on 12 Jun, then on 15 Jun made a fast, clear call: MVP would be happy-path only, no in-UI validation feedback, with operational issues surfaced via backend report extraction. He also took ownership of escalating the S5-inclusion decision to Pow Hwee himself rather than leaving it with the requesting team.

**Result:** The scope stayed tight (this fed directly into OTEP-397), the spike got unblocked without weeks of back-and-forth, and the escalation path was clear because Rama owned it end to end.

### Areas for Consideration

**Situation:** At the 8 Jul grooming, environment/CFT troubleshooting risk was explicitly discussed and deprioritized so it wouldn't drain sprint capacity.

**Task:** The team needed that risk to actually stay deprioritized through sprint 6 planning and execution.

**Action:** Despite the prior day's call, Rama reported at the 9 Jul planning session that the team had already lost significant capacity to the same environment issues (CFT conflicts, pipeline interference between squads, outdated architecture diagrams). A similar pattern repeated on 13 Jul, when a demo was postponed same-morning over QA/UAT infra blockers that traced back to cross-team communication gaps.

**Result:** Sprint capacity took a hit twice from a risk the team had already tried to fence off, and the late, same-day notice made it hard for dependent squads to replan around it. I'd value earlier, more proactive flags when a previously-deprioritized risk starts resurfacing, rather than the team learning about it the same day capacity is lost.

### Remarks for Manager & Review Panel

Rama is at his best in 1:1 scoping conversations. He makes fast, well-reasoned calls and takes ownership of escalations rather than punting them back. The recurring theme to watch is environment/infra risk management: the same class of issue (CFT/pipeline conflicts) got explicitly deprioritized and then resurfaced twice within a week, each time discovered close to the point of impact rather than flagged early. Worth coaching toward earlier, standing visibility into infra health rather than per-incident firefighting.

---

## Imelda (Fellow PM, OTEP/Pathfinder-Core)

### Strengths

**Situation:** In the 4 Jun backlog grooming for competency inference, the team was stuck on whether to show all 8 inferred competencies or only the "new" ones, and the discussion risked stalling the feature.

**Task:** Someone needed to push the group to a workable default so grooming could move forward.

**Action:** Imelda proposed showing all competencies with no de-duplication, and took ownership of the two things gating that call: checking with the Intel team on whether inference could return more than 8 results, and pulling the AI-disclaimer policy doc.

**Result:** The feature stayed buildable instead of stalling on an unresolved UX question, and both follow-ups were assigned to a clear owner instead of left open.

### Areas for Consideration

**Situation:** At the 26 Jun competency roadmap sync, the learning filter's dependency on an undefined "Domain" field surfaced, and Imelda was the one who flagged she'd chase CSC for a real definition.

**Task:** That definition needed to land before the learning filter (and Pathfinder's downstream opportunity-listing filters, which depend on the same taxonomy) could be groomed with confidence.

**Action:** The item stayed in "acknowledged but undated" status through the 1 Jul SteerCo debrief, without a firm target date communicated back to affected squads.

**Result:** Because Pathfinder's roadmap sits downstream of Core's taxonomy decisions, the lack of a date made it hard to plan around. I'd find it useful if open items like this got an explicit date the moment they're identified, and if cross-squad implications were flagged to affected peer PMs directly rather than surfacing generically in a shared sync.

### Remarks for Manager & Review Panel

Imelda takes ownership of the messy, ambiguous parts of her scope rather than deferring them, and she's comfortable saying "we don't actually know this yet" in front of stakeholders. The gap to watch is closure speed and cross-squad visibility: items like the CSC Domain definition sit in "acknowledged but undated" status for multiple sync cycles, and because Core's taxonomy work gates a meaningful chunk of Pathfinder's roadmap, that lag has real ripple effects. Worth coaching toward naming a provisional date the moment an open item is identified.

---

*Sourced from: 2026-06-02 OTEP squad sync, 2026-06-04 backlog grooming, 2026-06-12 Rama discovery interview, 2026-06-15 file upload sync, 2026-06-26 competency roadmap sync, 2026-07-01 SteerCo prep debrief, 2026-07-08 grooming, 2026-07-09 sprint 6 planning, 2026-07-13 demo postponement notes. Fuller multi-situation drafts for Barry and Imelda already exist at `outputs/decisions/2026-07-03-W27-360-feedback-barry.md` and `...-imelda.md` if you want more than one example per person. Review before submitting — verify specifics against your own memory of these sessions.*
