---
date: 2026-09-21
week: 2026-W39
type: meeting-notes
source: Teams/Slack thread
topic: R1 Scope Alignment (Cumulus/OTEP)
participants: Adrian Ang (PSD), GK, Mark, Hao Eng Chua (GovTech), Rama Moorthy (PSD), Barry Lim (PSD), Michelle Yip
---

# Debrief: R1 Scope Alignment (Cumulus/OTEP)

**Context:** Adrian Ang shared that GK aligned R1 scope with Mark across 8 areas, sparking thread discussion.

---

## Key Decisions/Updates by Topic

| Topic | Status | Detail |
|---|---|---|
| **Employment changes** | Aligned | Proceed as planned, no MVP commitment, target fastest release. |
| **CAM integration** | Open, leaning defer | Michelle flagged that once CAM risks are mitigated via Day2 Ops for public officers (plus admin accounts via CFT upload and upcoming RBAC), safe to defer to R2 — onboarding proceeds regardless. Hao Eng Chua exploring if Keycloak SCIM reduces integration effort, feasibility wraps in 2 weeks. Adrian later suggested pausing CAM and resuming post-R1. |
| **Opportunities/Internal Jobs** | Aligned | Same login friction expected for Cumulus officers applying to HRPS jobs. Pathfinder scope may include 1-2 discovery integrations if feasible, pending Cumulus job-posting confirmation. |
| **SJRs** | Unresolved, active pushback | See below. |
| **CMM/JobID competency** | No change | Original scope stands — consolidated bank in R1; API integration deferred but scoped by Dec. |
| **VAPT risk** | Not directly answered | Adrian flagged that if VAPT takes 6 weeks, it must be planned into the timeline and scope reduced accordingly. Needs Barry Lim's input. |
| **Timeline** | In progress | Rama Moorthy committed to providing timeline by **Tuesday** for internal discussion (not Wed noon as originally asked). |

---

## SJRs — Detail (More Complex Than Expected)

Compass needs cycle management/nomination and application tracking. WD DevOps needing dual-platform access is undesirable.

**Friction points:**
- WD DevOps' biweekly SJR Ops Reporting to Mark.
- Functional leaders spanning HRPS/Cumulus need a unified applicant view.

**Michelle's proposal:** Limit R1 to discovery-only (pulling OTG-posted SJRs into Compass), defer full cycle support to 2028. Also suggested leveraging WD DevOps' November programme review as discovery input.

**Open pushback from Adrian (unresolved):** If SJRs today are purely on OTG, applications can't realistically be pulled to Compass without a "show stopper UX." Needs confirmation on:
1. Whether SJRs flow into HRPS/Cumulus at all.
2. If OTG-only, R1 must support pulling SJRs into Compass **with applications managed directly there** (dual-source applications for job posters) for the 2027 cycle — a materially different scope than discovery-only.

**This is the same question Adrian raised directly to Michelle** (see [SJR scope reply draft](../slack-messages/2026-09-21-W39-sjr-scope-reply-to-adrian.md)) — confirmed here as still open in the wider thread, not resolved.

**Reconciliation with the SJR to-be handover brief:** The [handover brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md) confirms SJRs sit in OTG today (as-is) and lays out a to-be design where they move natively into HRPS/Cumulus by the March 2028 cutover, with three possible apply paths (A: HR system creates a visiting-applicant record, B: CareerCompass intake-and-relay forward-only, C: 2027 manual route with a named case owner). Adrian's pushback effectively asks: **if that to-be state isn't ready by the 2027 cycle, does R1 need to build path B or a heavier equivalent now, not just discovery?** This is the crux to resolve, not just "is OTG the source of truth" (that part is confirmed).

---

## Meetings Scheduled

- **Monday:** Rama scheduled a call with HRPS/Cumulus/NCS on CMM integration and SJR/Internal Jobs API discovery. Michelle added via Rama's invite; cancelled her own separate Cumulus invite to piggyback on this one. Rama shared a discovery questions doc for the call.

---

## Open Items for Michelle

1. **Answer Adrian's SJR question** — is SJR truly OTG-only today, and how would linking/application actually work without a "show stopper UX"? *(As-is is confirmed OTG-only; the open part is whether R1 needs to support 2027-cycle applications directly, per Adrian's dual-source concern, or whether discovery-only holds until the 2028 HRPS/Cumulus cutover.)*
2. **VAPT scoping/timeline** — still needs an answer from Barry Lim.
3. **Monday CMM/SJR/Internal Jobs discovery call** — on the agenda via Rama's invite.

---

*Related: [SJR To-Be Handover Brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md), [SJR scope reply to Adrian](../slack-messages/2026-09-21-W39-sjr-scope-reply-to-adrian.md), [HRPS Internal Jobs API — Open Questions](../decisions/2026-09-18-W38-hrps-internal-jobs-api-open-questions.md)*
