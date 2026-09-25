---
date: 2026-09-24
week: 2026-W39
type: meeting-notes
topic: R1 Backlog Grooming — Opportunities (STIPs & Gigs, Internal Jobs, IJR, SJR)
meeting_type: engineering sync / team planning
status: draft — speaker attribution is unreliable; this meeting's IJR conclusion was later confirmed as the actual R1 decision (see update below)
---

# Meeting Notes: R1 Backlog Grooming — Opportunities

**Date:** 24 Sep 2026 (source: Otter.ai transcript, "[Weekly] OTEP - Sprint planning_ Backlog grooming")

**Attendees:** Not stated in transcript. Based on content and speaking patterns, likely includes Rama Moorthy (runs the technical walkthrough), Thomas Huchedé (raised the non-whitelisted/POCDEX question, referenced by name), and BO/business-side participants (raising ring-fencing, MVP agency, and comms concerns). **Speaker labels are not reliable in this transcript** — Otter did not diarize distinctly, and several turns are ambiguous or garbled. Treat attributions below as best-guess, not confirmed.

**Meeting Type:** Engineering sync / backlog grooming

**Duration:** ~56 minutes

---

## ✅ Update, later 24 Sep — This Meeting's IJR Conclusion Was Confirmed

Earlier processing of these notes flagged this meeting as conflicting with the risk register's then-current "IJR is out of R1" position. **That register position has since been reversed.** IJR is now confirmed R1 scope, following essentially the shape this meeting was converging toward: native creation/discovery/apply via a structured form (like STIPs & Gigs), with HR matching staying offline exactly as it runs today. This meeting turned out to be the real decision surfacing in real time, not a stale conflict — see [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-25) and [Epic D One-Pager](../prds/2026-09-24-W39-epic-d-ijr-scoping-one-pager.md) for the confirmed version.

Two things from this meeting remain genuinely unresolved and now matter more, not less, since IJR is real scope again:

1. **Whether IJR postings get ingested from HRPS/Cumulus in R1, or created fresh natively in Compass.** This meeting leaned toward ingestion ("if we ingest, lah"); the confirmed decision leans toward native creation matching STIPs & Gigs. Worth reconciling directly — these are materially different builds.
2. **Ring-fencing ownership** ("does Compass need to build this logic itself?") — still open, echoes R-07 closely, now more urgent given IJR's confirmed status.

The deduplication issue (officer identity across multiple agency logins) and the non-whitelisted-officer framing below remain open questions in their own right, unaffected by the IJR reversal — see Open Questions.

---

## Summary

A working session walking through the R1 Opportunities flow end-to-end: what's fully native in Compass (STIPs & Gigs), what's discovery-only with external apply (Internal Jobs via HRPS/Cumulus), and where IJR/SJR sit (contested in this meeting — described as deferred to a later release, with real debate about whether IJR specifically could be folded into R1 alongside STIPs & Gigs using a shared template). Significant time spent on: whether non-whitelisted (non-pilot-agency) officers can browse/apply without a POCDEX profile, ring-fencing mechanics and their limits, the "first impression" risk of onboarding OTG users to a visibly less-featured Compass, and a real concern about officer identity deduplication across multiple agency logins.

---

## Decisions Made

1. **STIPs & Gigs: fully native in Compass, ingestion from OTG stops once R1 creation goes live**
   - **Why:** This is the "main feature" that can be fully removed from OTG — self-serve, no HR gate, officers don't need to be taught anything special.
   - **Who decided:** Consensus in the room, not attributed to one person.
   - **Impact:** A cutoff banner/notice needed on OTG once Compass creation opens — "no more job creation" — discussed but not assigned an owner.

2. **Internal Jobs and Secondment (non-SJR): discovery-only in Compass, apply routes back to HRPS/Cumulus**
   - **Why:** Compass isn't building an ATS; the source HR system remains the system of record and handles the actual application/matching workflow.
   - **Who decided:** Consensus.
   - **Impact:** This matches the register's confirmed R-07 architecture (HRPS/Cumulus as source, Compass discovery-only, apply-as-redirect) — **no conflict here**, good corroboration.

3. **Non-whitelisted (non-pilot-agency) officers: creation only, not full discovery**
   - **Why:** Without a POCDEX profile, ring-fencing and competency matching "will be degraded" for these officers — the room concluded they'd see only "Jobs and Opportunities" and the Opportunities dashboard, not the full experience.
   - **Who decided:** Attributed to a Thomas-led question, resolved by the group.
   - **Impact:** **Potential conflict with R-14** (resolved 23 Sep: STIPs & Gigs discovery/creation/application is WOG-wide via POCDEX integration). This meeting's framing sounds like a narrower, degraded experience for non-pilot officers than R-14's "full WOG-wide" resolution implies. Worth checking directly whether this was resolved differently by the time R-14 closed, or whether R-14's "WOG-wide" claim needs an asterisk this transcript is surfacing.

4. **SJR (not IJR): deferred, stays on OTG through 2027**
   - **Why:** Rebuilding SJR's full existing OTG functionality (cycles, nomination, function-leader assignment, ranked preferences) in Compass is "too big" for R1 scope and timeline. **Correction: this reasoning applies to SJR, not IJR** — IJR was separately confirmed into R1 later the same day (see update above), following the STIPs & Gigs shape this meeting was actively exploring for it.
   - **Who decided:** Consensus after significant back-and-forth.
   - **Impact:** SJR stays on OTG through the 2027 cycle; the room discussed phasing SJR's Compass migration across R2 (FL modules for nomination) and R3/R4 (opportunity listing/creation), targeting readiness before the March 2028 cycle. **This phasing detail (R2 → R3 → R4) is new information not currently in the register** — worth adding if confirmed accurate.

5. **Applying with the standard STIPs & Gigs template for IJR** — this meeting flagged it as still needing exploration, not yet decided. **Since confirmed**: IJR's application step uses the same structured-form pattern as STIPs & Gigs. What remains open from this meeting's discussion: whether IJR's own template needs to differ from STIPs & Gigs' template at all, or whether they're genuinely identical (customizable templates are out of scope for R1 regardless, for both types).

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Ask HRPS/Cumulus whether they can flag if an internal job posting also exists on Careers@Gov (dedup indicator) | Unclear — likely whoever owns the HRPS/Cumulus relationship (Lee Koon TEU per register D-01?) | Not stated | 🔴 High — blocks a real UX gap (officer sees same job twice) | Not started |
| Put a spec question to HRPS: can they confirm whether a role is a "common" (shared) posting or a standalone job | Unclear | Not stated | 🟡 Medium | Not started |
| Confirm with ESG whether their scattered/inconsistent internal posting process (multiple people posting, no single structure) can be simplified before pushing them fully onto Compass | Unclear — "I will check with Soo Chin" mentioned | Not stated | 🟡 Medium | Not started |
| Decide and communicate a firm cutoff point for STIPs & Gigs creation on OTG once Compass creation opens (banner/notice) | Unclear | Not stated | 🔴 High — needed before launch, prevents dual-creation confusion | Not started |
| Clarify with pilot agencies (PSD, ESG) whether IJR postings can be simplified to follow the STIPs & Gigs template shape, or need their own distinct template | Unclear | Not stated | 🔴 High — IJR is confirmed R1 scope as of later today, this is no longer deferrable | Not started |
| Confirm the R2 → R3 → R4 SJR phasing plan (FL modules → opportunity listing/creation → full cycle) against the actual release calendar | Michelle Yip (inferred — this is exactly the kind of cross-release phasing that belongs in the register) | Before this gets treated as a real plan | 🔴 High | Not started |

**Notes:**
- No task in this meeting has a clear, confirmed owner name — the transcript's speaker attribution is too unreliable to assign with confidence. Recommend confirming ownership directly with whoever ran this session before treating any of these as assigned.
- Several items ("I got two more minutes left," "can I time check my term minutes") suggest this session ran over time and some threads (data migration for IJR, officer deduplication) were explicitly tabled for a future session, not resolved.

---

## Key Insights & Quotes

**Technical Constraints:**
- "For internal jobs, we would actually get all those [from] HRPS as Cumulus internal jobs... not sure whether it does really exist over at their end... internal jobs, second one." — genuine uncertainty about whether HRPS/Cumulus can reliably tell Compass whether a posting is a shared/common job or a standalone one. This is a real, unresolved data-quality dependency, close to but not identical to R-07's ringfencing question.
- "We are also exploring whether we can use the same authentication so that you don't need to log in... trigger via the SSO, the WOGAD logging." — SSO exploration for the HRPS/Cumulus apply-redirect flow, to avoid a second login. Not currently mentioned in the register — worth adding as a nice-to-have technical note under R-07 or R-24.
- "It's called back [therapy?] for this one is only once a year cycle" (garbled) — likely referring to SJR's annual cycle constraint on migration timing.

**Ring-Fencing Mechanics (echoes R-07 closely):**
- "This kind... exists in Cumulus, so this is how they ring-fence... it's fake ring-fencing also, to me I assume that they can't ring-fence at all... they said today it's this, they put in the ring-fencing in the back, whether they have system that would allow them, they have to explore." — strong, direct corroboration of R-07's open question (does HRPS/Cumulus actually supply ring-fencing data, or is it something Compass has to build/assume). This transcript suggests real doubt about whether Cumulus's ring-fencing is even real today.
- Ring-fencing criteria discussed as agency + job family, explicitly **not** going deeper (no job grade, no nominated-officer-level targeting) for R1 — "I don't want to make it so complicated like OTG."

**Officer Identity / Deduplication — Genuinely New Issue:**
- "If I log in today using my PSD email and apply, then it'll be your PSD profile. Then tomorrow I use another... email login and apply. Then it'll be your [other agency] profile... but I cannot deduplicate... is it possible for us to find out that these two are the same person? ... No, not for now."
- This is a real gap: an officer with access to multiple agency emails could apply to the same posting under two different identities, and HR reviewing applicants has no way to know it's the same person. **Not currently tracked anywhere in the risk register.** Recommend adding as a new risk.

**First-Impression / Change Management Concern (BO voice):**
- Real worry that inviting non-pilot-agency OTG users into Compass too early, when Compass only has "jobs and opportunities" and looks feature-poor next to OTG, damages the platform's first impression — "their first impression is very important... how come this platform only has so limited features as compared to OTG."
- Counter-argument: frame it as "single place for HR to post, single place for officer to discover" — a genuinely good outcome, not a downgrade, if communicated right.

---

## Open Questions

- [ ] Does IJR ingest postings from HRPS/Cumulus, or does creation happen natively in Compass (self-serve, like STIPs & Gigs)? This meeting leaned toward ingestion; the confirmed R1 decision leans native — reconcile directly — **Owner:** Michelle Yip, Adrian Ang — **By:** Before Epic D's stories are drafted
- [ ] Does the "non-whitelisted officers get a degraded experience" framing in this meeting conflict with R-14's "WOG-wide, full parity" resolution, or was this resolved since? — **Owner:** Michelle Yip — **By:** Before communicating WOG-wide scope externally again
- [ ] Can HRPS/Cumulus confirm whether their ring-fencing data is real/reliable, or does Compass need to build ring-fencing logic itself? — **Owner:** Unclear, likely feeds R-07/D-01 — **By:** Not stated in meeting, more urgent now IJR is confirmed
- [ ] Can officer identity be deduplicated across multiple agency-email logins for the same person? — **Owner:** Unclear — **By:** Not stated, flagged as a future problem, not urgent for R1
- [ ] Is the R2 (FL modules) → R3 (opportunity listing) → R4 (full SJR cycle, ready by March 2028) phasing plan real and confirmed, or one participant's proposal? — **Owner:** Michelle Yip — **By:** Before this phasing is treated as planned. Applies to SJR only now, since IJR decoupled from that timeline

---

## Blockers

1. **Unclear whether HRPS/Cumulus can reliably signal "is this posting a shared/common job or standalone"**
   - **Blocked by:** HRPS/Cumulus technical confirmation, not yet requested formally per the transcript ("put that into the specs")
   - **Impact:** Without this, Compass can't reliably show officers whether an internal job posting might also be discoverable via a different route, or dedupe display
   - **Resolution:** Needs a formal spec question sent to HRPS, per the action item above

2. **Ring-fencing data reliability from Cumulus is in doubt** (echoes R-07)
   - **Blocked by:** Cumulus's own ring-fencing implementation, described in this meeting as possibly "fake"
   - **Impact:** If Cumulus can't reliably ring-fence, Compass either has to trust unreliable data or build its own logic — same open question as R-07, now with an additional data point suggesting the answer may be worse than assumed
   - **Resolution:** R-07's existing mitigation (get a direct answer from HRPS/Cumulus) already covers this — no new action needed, but worth citing this meeting as corroborating evidence when that conversation happens

---

## Timeline Risks

- **TIMELINE RISK:** This meeting describes SJR phasing across R2/R3/R4 targeting "ready by March 2028" — but the current register (R-12, still 🔴 Red) has **no reconciled R1 timeline yet**, let alone an R2-R4 phasing plan. Citing a 4-release phasing plan for SJR before R1's own timeline is settled risks presenting more certainty than exists. Don't repeat the R2/R3/R4 breakdown externally until it's been checked against actual release planning.
- **TIMELINE RISK:** IJR is now confirmed R1 scope with no stories, no effort estimate, and no resolution on the ingestion-vs-native question above. R-12 (effort/timeline unreconciled) now needs to account for a fourth confirmed opportunity type it didn't have this morning — flag this explicitly in the next re-estimate conversation, don't let IJR quietly ride along assuming it's cheap because it looked excluded earlier today.

---

## Next Steps

**Immediate (This Week):**
- Reconcile the ingestion-vs-native question for IJR creation with Adrian directly — this meeting and the confirmed decision point in different directions, worth resolving before Epic D's stories get drafted
- Check R-14's "WOG-wide, full parity" resolution against this meeting's "non-whitelisted = degraded experience" framing — these may be describing the same thing in different language, or a real gap
- Add the officer-identity-deduplication gap as a new tracked item (no register ID assigned yet — recommend next available risk ID)

**Short-term (Next 2 weeks):**
- Formalize the HRPS/Cumulus spec questions (common-job flag, ring-fencing data reliability) discussed in this meeting into the existing D-01 dependency tracking, now more urgent given IJR's confirmed status
- Validate whether the R2→R3→R4 SJR phasing plan is a real proposal worth adding to the risk register, or informal brainstorming that shouldn't be repeated as settled

**Follow-up Meeting:**
- Not scheduled in transcript — recommend one specifically to turn this meeting's IJR groundwork into Epic D's actual stories, now that the scope question is settled and the remaining gap is mechanics, not scope

---

## Context for Future Reference

This transcript is difficult to parse cleanly — cross-talk, unattributed speakers, and heavy Singlish/colloquial phrasing throughout, transcribed by Otter.ai without reliable diarization. Several names mentioned ("Suchi," references to "Amy," "Kimberlés"/Cumulus mishearing) may be transcription errors rather than real names — verify before citing anyone by name from this document.

This meeting turned out to be where the real IJR-in-R1 decision was actually worked out in the room, even though it read as unresolved (and briefly as conflicting with the register) when these notes were first processed. Worth remembering for next time: a "contested in the meeting, not yet in the register" gap isn't necessarily staleness, it can be the decision still catching up to the room. Don't discount grooming-session conclusions just because they haven't hit the register yet.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw transcript</summary>

[Full transcript as provided by the PM — see original Otter.ai file: "[Weekly] OTEP - Sprint planning_ Backlog grooming_otter_ai_transcript.txt"]

</details>

---

*Related: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, R-13, R-14, R-25), [R1 Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md), [Epic D One-Pager — IJR](../prds/2026-09-24-W39-epic-d-ijr-scoping-one-pager.md)*
