# 360 Peer Feedback — Pow Hwee

**From:** Michelle Yip (PM, OTEP Pathfinder)

**Working relationship:** Pow Hwee is Tech Lead on my pod. We work together on scope calls, technical blockers, and cross-team dependencies (WOG AD auth, CSC SSO, POCDEX, OTG ingestion) roughly weekly, more often during sprint planning and grooming.

**Format:** STARS (Situation, Task, Action, Result, So-what) for each example.

---

## Strengths

### Root-cause diagnosis under pressure

- **Situation:** Léo was hitting a flaky 403/redirect error against WOG AD in dev, with no clear cause after initial investigation.
- **Task:** Find the actual root cause, not just a workaround, with feature freeze approaching.
- **Action:** Pow Hwee traced it to a subdomain (`auth.env.careercompass.gov.sg`) resolving to a public IP and interfering with Menlo's remote browser. Rather than patch around it, he made the call to abandon that DNS approach entirely and reuse the existing `env.careercompass.gov.sg` domain, differentiated by path, and resubmitted the WOG AD form himself.
- **Result:** Dev-environment fix confirmed working within days (13 Aug), closing Léo's issue.
- **So what:** This is the pattern I see from him repeatedly, on CSC SSO feasibility, the FormSG webhook question, POCDEX coordination: he doesn't stop at the symptom, and he comes back with an actual architectural answer rather than a patch.

### Technical judgment I trust enough to change my mind on

- **Situation:** I proposed a tiered error-handling approach (hard skip / warn / silent skip) for OTG ingestion.
- **Task:** Get to the right design before it's locked into Sprint 3 build.
- **Action:** Pow Hwee pushed back with a specific dirty-data and migration-complexity argument for why tiering was the wrong call.
- **Result:** I changed the approach based on his reasoning.
- **So what:** I'd rather have a tech lead who argues a scope call with reasoning I can follow, even outside my own technical depth, than one who defers to avoid friction.

### Proactive unblocking, not just reactive fixing

- **Situation:** Sprint 2 FE/BE work risked stalling on sequencing; separately, POCDEX API work (OTEP-203) couldn't be scoped until Core team answered open questions.
- **Task:** Keep both threads moving without waiting for them to become sprint-level blockers.
- **Action:** He proposed a contract-first approach to decouple FE/BE work, and separately surfaced the exact two questions Core team needed to answer before POCDEX work could proceed.
- **Result:** Both threads unblocked earlier than if we'd waited for them to visibly stall.
- **So what:** He spots bottlenecks before they hit the sprint, not after, which is the difference between a scope conversation and a fire drill.

### Grooming quality bar

- **Situation:** Ongoing, across sprints.
- **Task:** Keep ACs and ticket scope clean enough that conflicts don't surface mid-sprint.
- **Action:** Consistently catches AC conflicts, scope creep, and fold/drop/reframe calls during grooming.
- **Result:** Fewer scope surprises landing mid-sprint.
- **So what:** I've started drafting stories with his likely flags in mind, which has made my own prep faster too.

---

## Growth Areas

### Follow-through on open commitments with an external dependency

- **Situation:** WOG AD dev fix was confirmed working (13 Aug), but two questions remained open: prod/UAT confirmation, and whether the form resubmission restarted the 2-4 week approval clock.
- **Task:** Get both answered before feature freeze (21 Aug, no Sprint 9 buffer).
- **Action:** I named this as a specific, dated ask three separate times across one week (12, 13, 14 Aug).
- **Result:** Neither question was answered. As of today (17 Aug), OTEP-71 is still In Progress in Jira.
- **So what:** This isn't a diagnosis gap, the hard technical work was already done well. It's that once the ball moved from a technical question to a status/coordination one, it stalled without a signal back to me. With one week left before freeze, that gap is now a real schedule risk, not just an open item.

### A couple of other decisions have sat without a date

- **Situation:** The notification-service build-vs-buy decision and the search-indexing infra approach both need Pow Hwee's input and have been open for a while.
- **Task:** Get a decision or at least a dated next step on each.
- **Action:** No update yet on either.
- **Result:** Both remain 🔴 open with no date.
- **So what:** Neither is urgent alone, but it's the same pattern as WOG AD: decisions that need his input tend to lose out to active build work, and I don't always get a signal that something's stalled versus just in progress.

### Environment/config change discipline

- **Situation:** During baseline config capture, manual changes to environment variables and secrets were observed with no change-control process in place.
- **Task:** Establish governance so environments stay reproducible and debuggable.
- **Action:** Flagged and acknowledged in the team's own risk assessment (rated Red).
- **Result:** No concrete mitigation has landed yet, as far as I've seen.
- **So what:** Given how much cross-environment debugging this team already does, an ungoverned config surface multiplies risk rather than just being untidy.

---

## What Would Help

If a technical ask depends on coordination outside your immediate control, a quick "still waiting on X, no update" beats silence, even if the underlying answer hasn't changed. I don't need progress, I need to know a question is still live versus dropped, so I'm not the one finding out three days later that nothing moved. That's on me to ask for clearly too, but closing that loop would save real time, this sprint alone it's cost us a week on a critical-path item.

---

*Drafted 2026-08-17. This is a personal working draft for a 360 process — review before submitting to confirm tone and check nothing here needs softening or removing for the actual review channel.*
