---
date: 2026-09-25
week: 2026-W39
type: meeting-notes
topic: OTEP Squad Sync — R1 re-scope (Opportunities, Internal Jobs, SR/SJR, CMM)
attendees: Adrian Ang, Rama Moorthy, Barry Lim, Michelle Yip, Imelda, Jobelle, Xin Zhang (Xian Zhang Guo)
related:
  - outputs/analyses/2026-09-16-W38-r1-risk-register.md
  - outputs/prds/2026-09-23-W39-r1-release-one-pager.md
  - outputs/meeting-notes/2026-09-25-W39-opportunities-mvp-scope-mark-gk.md
---

# Meeting Notes: OTEP Squad Sync — R1 Re-Scope

**Date:** 25 Sep 2026

**Attendees:** Adrian Ang, Rama Moorthy, Barry Lim, Michelle Yip, Imelda, Jobelle, Xin Zhang

**Meeting Type:** Engineering/product sync, executive-direction relay

**Duration:** Not specified

---

## ⚠️ Read This First — Corrects a Same-Day Correction

Earlier today, the register was corrected from a full OTG/FormSG reversal to a STIPs & Gigs pilot/non-pilot split (6 pilot agencies get native in-app apply, non-pilot agencies use OTG). **This transcript confirms that correction was wrong.** Mark and Gek Khiang's actual direction, as relayed in this meeting: STIPs & Gigs apply is **unchanged from MVP** — FormSG links extracted from OTG postings become the Apply button, for every agency, no native in-app apply anywhere. Confirmed directly by Michelle after reviewing the conflict — see the risk register's newest banner for the corrected state. This is the sixth distinct status change on this specific point in three days.

Everything else in this transcript — Internal Jobs (discovery-in-Compass, redirect-to-source-to-apply), SR/SJR (fully removed from Compass R1), and the OTG deep-link limitation — matches what's already in the register. CMM's new read-only direction is genuinely new and wasn't previously captured.

---

## Summary

Mark and Gek Khiang gave executive direction that substantially simplified R1 scope, anchored on two principles: don't expose Compass to non-MVP agencies, and don't create dual-posting confusion between OTG and Compass. STIPs & Gigs stays exactly as MVP (OTG posting, FormSG-extracted apply links). Internal Jobs becomes a federated discovery model (Compass surfaces postings from OTG/HRPS/Cumulus, applications redirect back to source). SR/SJR is removed entirely from Compass R1 scope. CMM shifts from a creation/CRUD platform to a read-only visibility layer. The team accepted real UX debt (OTG can't deep-link to a specific posting, so redirects dump users on a generic landing page; duplicate postings across sources are tolerated) in exchange for schedule certainty. Adrian's framing: this doesn't eliminate the hard problems, it defers them to R2/R3 — "we are only dodging the bullet."

---

## Decisions Made

1. **STIPs & Gigs apply: FormSG-extraction, unchanged from MVP — reverses today's pilot/non-pilot split**
   - **What:** Posting stays in OTG. Compass extracts FormSG links embedded in OTG posting descriptions and displays them as the Apply button. If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly. No native in-app apply for any agency.
   - **Why:** Confirms Mark/GK's "don't create posting confusion" principle applies to apply mechanics too — introducing a native apply flow for 6 agencies while everyone else uses FormSG was itself a source of inconsistency the team didn't intend to create.
   - **Who decided:** Mark, Gek Khiang (relayed via Xin Zhang); confirmed by Michelle 25 Sep after reviewing the conflict with the earlier same-day correction.
   - **Impact:** Reverses R-27 back to the FormSG-uniform model. Undoes this afternoon's Epic A stories rewrite (Path 2 pilot-native-apply stories, US-A8/A10-13/A19) and the corresponding HTML artifact edits. Removes the RBAC/applicant-data build for pilot agencies entirely — there's no in-app applicant data to protect if apply never lands in Compass.

2. **Internal Jobs: federated discovery, redirect-to-source apply**
   - **What:** Compass pulls internal job postings from OTG, HRPS, and Cumulus for unified discovery. Application always redirects to the originating system — OTG-origin jobs apply in OTG, HR-system-origin jobs apply in HRPS/Cumulus. Compass is a search engine, not a transaction engine.
   - **Why:** Matches the "no dual posting confusion" principle and avoids building transaction capability Compass doesn't need for R1.
   - **Who decided:** Mark, Gek Khiang.
   - **Impact:** Matches what's already in the register (R-07) — no change needed there. Confirms OTG cannot reliably deep-link to a specific posting, so Compass redirects land users on a generic OTG landing page, not the exact job (already flagged as the register's open question under R-07).

3. **SR/SJR: fully removed from Compass R1 scope**
   - **What:** No posting, no discovery, no application inside Compass, for any part of SR/SJR. Nominated officers continue using OTG exactly as today.
   - **Why:** SR is invite-based — nominated officers already receive direct communications and are instructed to use OTG. Adrian's assessment: Compass would create confusion, not value, for this population.
   - **Who decided:** Adrian Ang, confirmed with Mark/GK.
   - **Impact:** Matches R-13's existing resolution (SJR stays OTG through 2027) — no change needed. Adrian explicitly called this "effectively removing SR from the Pathfinder scope for R1."

4. **CMM: read/view model, not a creation platform**
   - **What:** Competency creation and lifecycle management stay in HR systems. Compass reads and surfaces competency data for visibility and governance oversight — it does not become a tool for creating or updating competencies.
   - **Why:** Mark's position: Workforce Development wants visibility into competencies, not operational management of them. This is a reversal of the team's prior direction, which was exploring CRUD capabilities, creation flows, and governance workflows inside Compass.
   - **Who decided:** Mark.
   - **Impact:** New information — not previously captured in the register. Materially reduces CMM scope (R-15 flagged CMM as confirmed R1 scope with manual approval workflows; this narrows it further to pure read/view). Rama needs to re-estimate delivery timeline against the reduced scope. **Open governance question, unresolved:** does a new competency require WD approval? Mark's position suggests no; Xin Zhang believes governance may require it.

---

## Key Insights & Quotes

**On the strategic trade-off (Adrian):**
"We are only dodging the bullet. We are kicking it down to R2." — describing how R1 simplification is achieved by deferring OTG replacement, posting capability, and migration work rather than solving them.

**On the UX compromise (Barry):**
Barry explicitly described the redirect-and-re-search experience for Internal Jobs as "awkward" — officers discover in Compass, get redirected to OTG, and have to log in and search again to find the same posting.

**On duplicate postings (Michelle's question, team response):**
Michelle raised whether the same job could appear from both OTG and an HR system simultaneously. Stakeholders confirmed they're aware and accept this for now — a conscious trade-off favoring source-of-truth ownership and reduced integration complexity over a polished catalog.

**On the unresolved OTG question (Rama, repeated across the meeting):**
Rama repeatedly challenged why the team continues investing in OTG integration when the long-term goal is decommissioning OTG — essentially asking whether this is throw-away work. Never fully answered in this meeting.

---

## Open Questions

- [ ] Can ATS integration realistically happen in 2027? — **Owner:** Gek Khiang (validating) — **By:** Not specified. If ATS isn't viable, Compass may need native posting/workflow/application-management capability, which would fundamentally change the roadmap.
- [ ] Does a new competency need WD approval? — **Owner:** Adrian Ang (to clarify with Mark) — **By:** Not specified. Mark and Xin Zhang appear to disagree.
- [ ] What replaces OTG posting once OTG is retired? — **Owner:** Unassigned — **By:** Not specified. No answer yet for Tips & Gigs or Internal Jobs post-retirement.
- [ ] When does Compass stop being discovery-only and start taking on transaction capability? — **Owner:** Unassigned — **By:** Not specified. No transition plan defined.

---

## Risks Not Being Fully Addressed (from the transcript's own risk framing)

1. **R1 simplification is deferring an R2/R3 cliff.** Reducing R1 scope and deferring OTG replacement, posting capability, and migration work moves the hard problems, doesn't solve them. Adrian's own words: "kicking it down to R2."
2. **No confirmed ATS strategy.** If ATS integration isn't viable by 2027, Compass may need to build native posting/workflow/application-management capability — a major scope reversal risk sitting one validation step away.
3. **Opportunity posting has no defined end-state.** Clear R1 behavior exists; no end-state exists for Tips & Gigs creation, Internal Jobs creation, or opportunity publishing once OTG retires.
4. **Competency integration dependency remains.** HRPS integration and live competency sync are still needed eventually; the manual-upload approach is accepted temporarily, not strategically.
5. **CAE performance may become an adoption issue.** Break point around 1,300 concurrent users; resume-to-competency generation ~10 seconds at baseline, longer under stress. Currently accepted with a plan to measure drop-offs and revisit — a real but deferred UX risk.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Receive final summary from Xin Zhang on Mark's decisions | @Adrian Ang | Not specified | High | 🔴 Not Started |
| Clarify ATS strategy with Gek Khiang and Kai Xiu | @Adrian Ang | Not specified | High | 🔴 Not Started |
| Clarify competency approval requirements with Mark | @Adrian Ang | Not specified | Medium | 🔴 Not Started |
| Review implications of revised Internal Jobs / Opportunities scope | @Michelle Yip, @Rama Moorthy | Not specified | High | 🔴 Not Started |
| Support future design discussions if ATS route proves unviable | @Michelle Yip, @Rama Moorthy | Contingent on ATS answer | Medium | 🔴 Not Started |
| Re-estimate delivery timeline against reduced CMM scope | @Rama Moorthy | Not specified | High | 🔴 Not Started |
| Update specifications with Adrian Lo | @Rama Moorthy | Not specified | Medium | 🔴 Not Started |
| Review data model assumptions | @Rama Moorthy | Not specified | Medium | 🔴 Not Started |
| Establish CAE performance baseline and final report | @Rama Moorthy | Not specified | Medium | 🔴 Not Started |
| Update UAT strategy | @Imelda | Not specified | Medium | 🔴 Not Started |
| Align with Chris before Monday's TOH/UAT discussion | @Imelda | Monday (next occurrence) | High | 🔴 Not Started |
| Push for functional-test-case approach over duplicated Product UAT | @Imelda | Not specified | Medium | 🔴 Not Started |
| Follow up on outstanding VAPT reports and findings status | @Jobelle | Not specified | Medium | 🔴 Not Started |

**Notes:**
- No due dates were specified for most items in the source transcript — flagging per standard practice: these should be scheduled within 48 hours.
- I-06/D-07 (VAPT) already tracked as closed in the register per the 23 Sep VAPT scope decision — Jobelle's item here is about outstanding *reports*, not the scope decision itself; worth confirming these are the same thread, not a regression.

---

## Timeline Risks

- **TIMELINE RISK:** This transcript reverses R-27 for the second time today, and it's the sixth distinct status change to STIPs & Gigs' apply mechanism in three days (per R-31, already tracking this pattern). R-12's unreconciled effort estimate cannot be re-run credibly until this stops moving — re-running it against today's now-superseded pilot/non-pilot model would have been wasted work within hours.
- **TIMELINE RISK:** Rama is asked to "re-estimate delivery timeline based on reduced CMM scope" with no due date. CMM wasn't previously in the reduced-scope brief or one-pager at all (R-15 already flags this staleness) — this new read-only direction needs to land in both documents before any estimate is meaningful.

---

## Context for Future Reference

This is the second Mark/GK-relay meeting captured today (see [Opportunities MVP Scope — Mark/GK](2026-09-25-W39-opportunities-mvp-scope-mark-gk.md) for the first). That first meeting's summary used FormSG as the described STIPs & Gigs mechanism; Michelle's mid-session correction moved the register to a pilot/non-pilot split; this transcript confirms the original FormSG-uniform framing was actually correct and the pilot/non-pilot split was the error. Net effect: the register ends today closer to where the first Mark/GK meeting summary originally pointed, after a detour through a pilot/non-pilot model that didn't hold.

**Pattern worth naming for the retro:** three separate relays of the same underlying Mark/GK conversation (the first meeting summary, Michelle's verbal correction, this transcript) produced three different pictures of one decision. The transcript is the most complete and most directly sourced of the three — treat direct transcripts as higher-confidence than second-hand summaries going forward when they conflict.

---

## Next Steps

**Immediate (This Week):**
- Propagate the FormSG-uniform reversal across the risk register, release one-pager, Epic A one-pager/stories, and the affected HTML artifacts (in progress).
- Adrian to get Xin Zhang's written summary of Mark's decisions as the canonical record — reduces future relay drift.

**Short-term (Next 2 weeks):**
- Gek Khiang's ATS-viability validation — this is the single highest-leverage open question; its answer determines whether Compass needs native posting capability at all.
- Re-run R-12's effort estimate once, after this correction lands everywhere (per R-31's mitigation) — not before.

**Follow-up Meeting:**
- Monday's TOH/UAT discussion (Imelda + Chris) — separate thread, not scope-related.
