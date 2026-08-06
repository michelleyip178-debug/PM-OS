---
date: 2026-08-05
week: 2026-W32
scope: Full programme timeline — SIT window, all UAT tracks, VAPT, and go-live
status: working draft — confirm dates with Rama before treating as final
reconciled: 2026-08-05
---

# Programme Timeline — Risks, Assumptions, Issues, Dependencies

Every date-related risk, assumption, issue, and dependency across the programme, in one place. The core problem this log exists to name: **there is no single authoritative timeline.** Six different UAT dates and two different VAPT dates are all in circulation at once, and nobody has reconciled them.

Legend: 🔴 High priority · 🟡 Medium · 🟢 Low / managed

---

## The dates currently in play (in sequence)

Legend: 🔴 High priority / unresolved · 🟡 Medium / partially settled · 🟢 Low risk / confirmed

| | Timeline | Window | Status | Source |
|:---:|---|---|---|---|
| 🔴 | SIT (CSC integration) | 27 Jul – 7 Aug | 2 working days left, but only 4 of 30 tracked pre-requisites are actually done and the course file has been overdue since 4 Aug — the close date hasn't moved, but almost nothing needed to hit it has landed | CSC SIT/UAT tracker; CSC-Compass SIT standup, 5 Aug |
| 🟡 | "Internal UAT" (mentioned at Tuesday's Squad Sync) | Targeted this Thu/Fri | Not confirmed whether this is the same event as the POCDEX weekend UAT below | OTEP Squad Sync, 4 Aug |
| 🟡 | POCDEX weekend internal UAT | This weekend, then BO UAT on Tuesday | Scheduled, but readiness criteria haven't been defined | POCDEX UAT Plan Walkthrough, 4 Aug |
| 🟢 | OTEP-wide UAT | 11 Aug – 4 Sep | Committed | Programme open-items tracker, item #39 |
| 🟡 | CSC-track UAT (as tracked) | 24 or 25 Aug – 4 Sep | Proposed, not confirmed against the OTEP-wide UAT dates above | CSC SIT/UAT tracker |
| 🔴 | CSC-track UAT (revised, raised 5 Aug) | 31 Aug | CSC reps called this "the realistic expectation" at the 5 Aug standup — not yet reflected in any tracker. Unclear whether this replaces the 24/25 Aug date or is still being negotiated. **No stated reason for the ~2-week gap between SIT close (7 Aug) and this date** — see Risks below; Adrian has separately been asking the same question. | CSC-Compass SIT standup, 5 Aug |
| 🔴 | VAPT closure | Either 16 Oct or 23 Oct — disputed | Unresolved since 31 Jul. Still hasn't been raised directly with the person who can settle it, despite being flagged as a priority twice this week. | Programme risks tracker; VAPT Planning Slack thread, 30 Jul |
| 🔴 | Go-live approval window | 19–23 Oct | Depends on which VAPT date above is correct — buffer shrinks either way if the later date holds, and shrinks further if the 31 Aug UAT date above turns out to be real | Derived from the VAPT closure row above |

**The open question underneath all of this:** are the various UAT dates actually separate, parallel tracks — or do some of them conflict? Nobody has confirmed either way.

---

## Risks

| Risk | What happens if it's realised | Priority | Owner | Status | Source |
|---|---|:---:|---|---|---|
| Five or six different UAT dates exist with no single document saying which is current | Teams double-book effort or plan against the wrong date; every new meeting re-surfaces the same confusion | 🔴 High | Rama | Open | Recurring across SIT readiness sync (3 Aug), Squad Sync (4 Aug), POCDEX walkthrough (4 Aug) |
| VAPT closure date conflict (16 Oct vs. 23 Oct) is still unresolved, and now compounded by a CSC-driven delay chain (CSC delay → UAT delay → bug-fix delay → VAPT delay → go-live delay) | Go-live approval window loses buffer, or slips entirely | 🔴 High | Needs a name — currently nobody owns pushing this to resolution | Open | Programme retro, 31 Jul; restated at Squad Sync, 4 Aug |
| CSC mentioned SSO testing "likely moves to next week," which conflicts with the SIT window closing 7 Aug | Every SIT exit date tied to SSO (connectivity test, course-page check, fix window) needs to shift, and hasn't been reconciled yet | 🔴 High | Rama | Open | OTEP Squad Sync, 4 Aug |
| One team proposed deploying straight to UAT right after SIT finishes, which conflicts with the documented CSC-track UAT start date | If that proposal is accepted, every UAT date on record becomes stale until updated — this is a live negotiation, don't update dates preemptively | 🟡 Medium | Rama, waiting on CSC's answer | Pending | OTEP Squad Sync, 4 Aug (Adrian's proposal) |
| The SIT window has almost no slack — about 4 working days, assuming everything works on the first try across connectivity, file transfer, parsing, and mapping | Any single failure (already happening — one file is overdue) eats directly into a fixed close date, with no stated fallback plan | 🔴 High | Team | Open | CSC/OTEP SIT Readiness Sync, 3 Aug |
| The post-SIT bug-fix window is scheduled for 11–12 Aug, which is *after* SIT is supposed to have already closed on 7 Aug | This suggests SIT close is quietly already slipping, or "SIT" and "UAT prep" are blurring into the same activity without anyone saying so | 🟡 Medium | Unassigned | Flagged, not yet raised | Derived from the CSC SIT/UAT tracker's own dates, 4 Aug synthesis |
| The Tuesday BO UAT session has a fixed date but no defined pass/fail criteria tied to how the internal UAT testing goes | The date won't move even though the thing that's supposed to justify it (internal UAT results) isn't defined yet | 🔴 High | Unassigned | Open | POCDEX UAT Plan Walkthrough, 4 Aug |
| **New this week:** the CSC-track UAT date may be slipping to 31 Aug instead of the previously tracked 24/25 Aug | Narrows whatever gap exists between this track and the separately-committed OTEP-wide UAT window | 🔴 High | Rama | Open, unconfirmed | CSC-Compass SIT standup, 5 Aug |
| **New this week:** a technical test confirmed the SSO integration can't resolve certain addresses over the internal network, though it works fine over the public internet | If this can't be fixed on the internal network, the team may need to switch to a public-internet path — which would trigger additional security review scope, compounding the VAPT date conflict above | 🔴 High | Nobody has been named to decide whether to keep troubleshooting or escalate this | Open | CSC-Compass SIT standup, 5 Aug (Aderick's connectivity test) |
| **New this week:** the person who owns sharing API details for the recommendations integration is on leave until 7 Aug — the same day SIT is supposed to close | The rest of that integration's testing may be stuck behind this one person's return, with nobody covering in the meantime | 🟡 Medium | Unassigned | Open | CSC-Compass SIT standup, 5 Aug |
| **New this week:** the UAT test environment itself isn't ready — database migrations and code deployments still need to happen before login (WOG AD/Keycloak) will even work there | This sits on the same critical path as the SSO connectivity problem above. If both slip, they compound each other rather than one absorbing the other, and there's currently no date attached to this at all | 🔴 High | Michelle chasing; no engineering owner named yet | Open, no date set | OTEP Team 2 standup, 5 Aug |
| **New this week:** the SSO connectivity problem above may be getting tracked twice — the same day it was raised at the CSC standup, a separate internal engineering discussion on "Keycloak/CSC SSO integration" happened at Team 2's standup | If these are genuinely the same blocker, tracking them as two threads risks duplicated effort or conflicting status reads; not yet confirmed either way | 🟡 Medium | Michelle to confirm after the internal discussion | Open, unconfirmed | OTEP Team 2 standup, 5 Aug |
| **New this week:** CSC's automated file extraction (replacing SIT's manual process) is scheduled for 24 Aug, downstream of both the SIT close (7 Aug) and the possible UAT slip to 31 Aug above | If the UAT date does move to 31 Aug, this milestone has less buffer than planned — raised as a question (should CSC prepone it?) but nobody owns deciding | 🟡 Medium | Unassigned | Open | Slack SIT/UAT workstream thread, 5 Aug |
| **New this week:** whether one shared test account is sufficient for UAT sign-off, given 20 UAT personas need matching DLE accounts | If it isn't sufficient, WS3 test-account planning (already a standing blocker) needs to be redone under a different assumption | 🟡 Medium | Unassigned | Open | Slack SIT/UAT workstream thread, 5 Aug |
| **New:** no stated cause for the ~2-week gap between SIT close (7 Aug) and the CSC-track UAT start (31 Aug, if that date holds). CSC called 31 Aug "the realistic expectation" for WS1 and SSO-related activities specifically, but never explained *why* — no stated dependency, no named prep work filling the gap. Adrian has separately been asking this same question (tied to whether CSC's 24 Aug automated file extraction should be preponed, given the "end-of-August SIT/UAT pressure" — raised 5 Aug, left open). Two people asking the same underlying question from different angles and neither has gotten a causal answer. | If the 2 weeks is actually needed (e.g. a real CSC-side dependency), fine — but if it's an unexamined default, it's slack the programme could reclaim. Left unexplained, it also means nobody can tell whether 31 Aug itself is durable or will slip again the way 24/25 Aug already did. | 🟡 Medium | Rama — needs to explain what fills the 7–31 Aug window, not just confirm the date | Open | CSC-Compass SIT standup, 5 Aug (31 Aug raised); Slack SIT/UAT workstream thread, 5 Aug (Adrian's preponement question) |

---

## Assumptions (things being treated as true but not actually confirmed)

| Assumption | Why we think this | Needs confirming by | Owner | Source |
|---|---|---|---|---|
| The CSC-track UAT window (24/25 Aug) is genuinely separate from the OTEP-wide UAT window (11 Aug), not a scheduling conflict | This is explicitly flagged as unconfirmed in the source tracker itself | Before the next planning session | Rama | CSC SIT/UAT tracker |
| The "Internal UAT" mentioned at Tuesday's meeting and POCDEX's weekend UAT are the same event | Neither source has said this outright — it's an inference | Before either date arrives, so the same confusion doesn't get re-solved twice | Rama | OTEP Squad Sync + POCDEX UAT Plan Walkthrough, both 4 Aug |
| The 11–12 Aug fix/re-test window still counts as "SIT," not something that's quietly already become UAT | This is assumed by how the tracker is structured, but it's undercut by that window falling after SIT's stated close date | Before SIT is declared complete | Rama | Derived from the CSC SIT/UAT tracker's own dates |
| Internal UAT results will actually be ready in time to inform Tuesday's BO UAT start | The schedule implies this, but nobody's explicitly checked that the dependency holds | Before Tuesday | Team | POCDEX UAT Plan Walkthrough, 4 Aug |
| **New this week:** a prior confirmation that ATS-style integration work is blocked by a lengthy procurement process until 2028 does not also apply to the SSO team's potential move to a public-internet path | Not yet checked — if it does apply, escalating the SSO issue could hit the same procurement wall that blocked a similar decision elsewhere in the programme | Before formally proposing the internet-path escalation above | Rama | Cross-referenced against the R1 PRD's ATS/e-tender decision (D-030) |

---

## Issues (already happened — actively causing delay, not a future risk)

| Issue | Impact | Owner | Status | Source |
|---|---|---|---|---|
| The course-file push for the CSC integration was due 4 Aug and still hasn't happened | Directly eating into the SIT window's remaining working days | CSC-side contact | Overdue | CSC SIT/UAT tracker; confirmed still open at CSC-Compass SIT standup, 5 Aug |
| A consolidated SIT plan that was promised earlier this week — meant to be the one document everyone works from — still hasn't been delivered | The gap this document was supposed to close keeps recurring instead of getting fixed | Rama | Open, overdue | CSC/OTEP SIT Readiness Sync, 3 Aug; still open at Squad Sync, 4 Aug |
| Three separate meetings in two days each independently rediscovered "we don't have one agreed timeline," without anyone actually fixing it | Confirms this isn't a one-off mix-up — it's a standing gap that keeps costing meeting time | Programme-level | Recurring, not yet structurally addressed | SIT Readiness Sync (3 Aug), Squad Sync + POCDEX walkthrough (both 4 Aug) |
| **New this week:** the VAPT date conflict didn't get raised at either of today's two CSC-related meetings, despite being flagged as today's top priority to push on | Second meeting in a row where this didn't land — the conflict has now sat open for 5 days with no forward motion | Michelle | Open, hasn't been escalated outside these meetings yet | Ram/Imelda prep huddle + CSC-Compass SIT standup, both 5 Aug |
| **New, 5 Aug — corrects earlier tracking:** Imelda requested Aderick push both the WS1 course catalogue files and the WS2 Learner ID file to CFT. Aderick confirmed two workflow IDs were needed for the two WS1 files (paid + subscription, not "paid + digital learning" as previously worded) and that the CFT script was being updated to accommodate this. Aderick then successfully **triggered** an adhoc CFT transfer for the WS2 file and both WS1 files — but Imelda reported **none of the three files were received**, despite the webhook being correctly configured. | This is a different failure mode than what was previously tracked. WS1 was logged as "push not yet done" (implying it hadn't been attempted) — it was actually attempted and failed silently at the transport layer. WS2 was logged as ✅ Done, 4 Aug on the live activities log — that status is now contradicted by this 5 Aug report and needs correcting, not just supplementing. If the webhook is confirmed correctly configured but delivery still fails, the root cause is somewhere in the CFT pipeline itself (routing, script update, or workflow ID mapping), not a "hasn't started" problem — worth investigating before re-triggering blindly. | Aderick Cheng (GovTech) — trigger side; Imelda — confirmed non-receipt | Open, unresolved as of 5 Aug | Reported by Imelda, 5 Aug |

---

## Dependencies (what's blocking what)

| This needs to happen | Before this can | Target date | Status | Source |
|---|---|---|---|---|
| SIT sign-off across all four integration workstreams | Any of the downstream UAT windows can start with confidence | 7 Aug | At risk — the overdue file above is already eating into this | CSC/OTEP SIT Readiness Sync, 3 Aug |
| CSC-track UAT actually starting | Confirming whether it runs in parallel with the OTEP-wide UAT window or collides with it | 24/25 Aug (or 31 Aug — see above) | Unconfirmed | CSC SIT/UAT tracker |
| Internal UAT testing + defined pass/fail criteria | BO UAT proceeding on schedule Tuesday, instead of needing to slip | Before Tuesday | Criteria not yet defined | POCDEX UAT Plan Walkthrough, 4 Aug |
| The VAPT closure date getting resolved | Confidence in the final go-live approval window | 19–23 Oct | At risk pending the date conflict above | Programme retro, 31 Jul; restated at Squad Sync, 4 Aug |
| CSC's answer on the immediate-post-SIT UAT proposal | Whether the 24/25 Aug UAT date holds or moves earlier | No date — live negotiation | Pending CSC | OTEP Squad Sync, 4 Aug |
| **New this week:** someone naming an owner for the intranet-vs-escalate decision on the SSO integration | Whether the VAPT scope needs to expand on top of the existing date conflict | No date — decision doesn't have an owner yet | Blocked | CSC-Compass SIT standup, 5 Aug |
| **New this week:** database migrations and code deployments to the UAT environment | Login (WOG AD/Keycloak) working in that environment at all, which the SSO testing above also depends on | No date set | Not started | OTEP Team 2 standup, 5 Aug |

---

## What this actually means

- **The VAPT date conflict, the SSO connectivity problem, the possible UAT slip, and now the UAT environment not being ready are all converging on the same window, not sitting separately.** If the UAT date really does move to 31 Aug, *and* the SSO team has to switch to a public-internet path (more security review), *and* the environment itself isn't ready for login testing yet, the go-live buffer gets squeezed from three directions at once. Worth raising this as one combined risk at the next senior-level conversation rather than four separate line items — the compounding is the actual story.
- **The VAPT date conflict has now missed two chances in a row to get resolved through the regular CSC meetings.** Standups clearly aren't the right forum for this — it needs a direct, one-on-one conversation with whoever can actually settle it, not another attempt to raise it in a group setting.
- **The question of whether "Internal UAT" and the POCDEX weekend UAT are the same event is cheap to resolve and hasn't been.** One direct message would close this in minutes. Worth doing before it costs a fourth meeting's worth of confusion.
- **Is the 11–12 Aug fix window still "SIT," or has it quietly become UAT prep?** Worth asking this as a direct, plain question rather than letting it stay ambiguous — the answer changes what "SIT complete" actually means.
- **The WS3 (SSO) blocker may be getting worked twice.** The CSC standup rated it Red the same day Team 2's internal standup had a separate Keycloak/CSC SSO discussion. Worth confirming these are the same problem before more parallel effort goes in — cheap to check, same pattern as the "is Internal UAT the same as POCDEX UAT" question above.
- This log covers timeline and date risk only. Broader programme risks (resourcing, scope, discovery quality) live elsewhere.

*Last updated 2026-08-05, based on this week's SIT readiness sync, squad sync, POCDEX walkthrough, today's CSC-Compass SIT standup, OTEP Team 2 standup, and today's Slack digest. Not yet confirmed with Rama.*
