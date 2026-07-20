---
date: 2026-07-14
week: 2026-W29
type: meeting-notes
meeting: OTEP Squad Sync
time: 9:30-10:30am
---

# OTEP Squad Sync

**Date:** July 14, 2026, 9:30–10:30am

**Organiser:** Jace TAN

**Attendees:** Jace TAN, Rama MOORTHY, Michelle YIP, Adrian ANG, plus wider squad (full list not specified in source)

**Type:** Delivery progress review

**Source:** Pre-structured executive summary provided by Michelle (not a raw transcript) — decisions, risks, and action items below reflect that analysis directly.

> **Note on OTEP-505:** This meeting was flagged in today's daily plan as the earliest venue to force a written answer on OTEP-505 (Hao Eng's CFT integration sub-task, unresolved for 2+ days). **OTEP-505 does not appear anywhere in the source summary.** Either it wasn't raised, or it was raised and not captured in this write-up. Treat as still unresolved — see Open Questions and Heads Up below.

---

## Summary

Delivery-focused progress review. Infrastructure blockers are largely clearing (SAF environment whitelisting up to production, most external MVP dependencies now known) and the team believes UX stories will complete by month-end. But the meeting surfaced two serious planning gaps that shift schedule risk away from engineering and toward governance: the Huiting data-sharing approval may not land in time for an August MVP, and UAT has no defined operating model (ownership, test data, test accounts, sign-off process all unresolved). Early R1 discovery planning also started, with Adrian pushing PMs to tighten epic one-pagers.

---

## Decisions Made

1. **Internal demo preparation: document demo accounts and test scenarios; create conference/demo pages for complex demonstrations.**
   - **Why:** Reduce ad-hoc demo prep and firefighting during showcases.
   - **Impact:** Standardizes how the team demos complex flows going forward.

2. **Infrastructure dependency management: teams must actively follow through on infra requests; no more siloed discussions.**
   - **Why:** Rama explicitly acknowledged a recurring failure pattern — discussions happened without resolution, dependencies weren't followed through, and issues only surfaced during demos as firefighting.
   - **Impact:** Sets an explicit expectation: requesting teams own follow-up, cross-team decisions get communicated broadly, and "we discussed it" no longer counts as "it's being handled."
   - **Cross-check:** This is the same failure pattern named in yesterday's #58 (QA/UAT infra blockers, demo postponed) — see [2026-07-13-W29-demo-postponed-qa-uat-blockers.md](2026-07-13-W29-demo-postponed-qa-uat-blockers.md). This is now the second explicit acknowledgment of the same root cause in two days, this time with a named process fix attached.

3. **WoGA integration: WoGA proceeds as the baseline feedback solution; additional mechanisms (custom banners, FormSG surveys) remain under discussion.**
   - **Why:** No firm decision reached on the fuller feedback strategy — WoGA was the default that had no objection, not a considered choice.
   - **Impact:** Feedback mechanism strategy is deferred, not resolved. Don't treat this as closed.

4. **WOG AD rollout: implemented in UAT and Production only.**
   - **Why:** Not detailed in source — likely ties to the WOG AD account-creation constraints raised in the UAT access discussion (see Risks below).
   - **Impact:** Dev/QA environments continue on existing auth approach; scope of WOG AD work is bounded to two environments.

5. **PostHog: migration to GovTech PostHog is configuration-based, not a blocker.**
   - **Why:** Technical assessment — no architectural rework needed.
   - **Impact:** Removes PostHog from the critical-path risk list.

6. **R1 discovery: designers split between application flow and CMM work; PMs to tighten epic one-pagers before designer engagement.**
   - **Why:** Adrian pushed to avoid a gap between MVP completion and R1 delivery start.
   - **Impact:** R1 discovery work starts now, in parallel with MVP close-out, rather than after.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Gather outstanding VAPT documents (complete package for NCS engagement) | Rama Moorthy | Not specified | 🔴 High | 🔴 Not Started |
| Review VAPT vendor cost options with Barry (validate NCS approach) | Rama Moorthy | Not specified | 🟡 Medium | 🔴 Not Started |
| Prepare data flow diagram and CAM information (needed for Huiting review) | Rama Moorthy | Not specified — blocks #55 | 🔴 High | 🔴 Not Started |
| Review all Huiting comments and update documents | Rama Moorthy | Not specified — critical dependency for approval | 🔴 High | 🔴 Not Started |
| Schedule clarification meeting with Huiting | Rama Moorthy | Next week | 🔴 High | 🔴 Not Started |
| Begin environment testing after infra unblock (validate connectivity and data import) | Product/Business Teams | Not specified | 🟡 Medium | 🔴 Not Started |
| Define UAT process, accounts, test data, and execution model | Rama Moorthy, Michelle Yip, Imelda Mo | Not specified — currently unresolved | 🔴 High | 🔴 Not Started |
| Create UAT planning Confluence page (document proposed approach) | Rama Moorthy | Not specified | 🟡 Medium | 🔴 Not Started |
| Share production readiness checklist lessons from SGEMS | Jace Tan / SGEMS team | Not specified | 🟢 Low | 🔴 Not Started |
| Tighten R1 epic one-pagers | PM Team | Required before designer engagement | 🟡 Medium | 🔴 Not Started |
| Start discovery research for R1 initiatives (application flow, CMM) | PMs & Designers | Not specified | 🟡 Medium | 🔴 Not Started |
| Track engineering velocity and burn-up data | Rama Moorthy | For future planning/reporting | 🟢 Low | 🔴 Not Started |
| Create new AOR for StackOps/observability if required | Rama Moorthy | Existing AOR insufficient | 🟢 Low | 🔴 Not Started |

**Notes:**
- No due dates given for most items — this was a progress review, not a commitment-setting meeting. Recommend attaching real dates, especially for the 4 Rama-owned Huiting-approval items above, given the timeline risk below.
- **"Define UAT process..." is jointly owned by Rama, Michelle, and Imelda** — three names on one action item with no lead specified is a common way for it to stall. Worth naming a single driver before next sync.

---

## Key Insights

**On the data-sharing approval gap (the meeting's most consequential finding):**
- Michelle's update on Huiting's review surfaced that "we answered the questions" and "approvers are comfortable enough to approve" are being treated as equivalent when they are not. Rama stated comments had largely been addressed; Michelle's read is that Huiting still doesn't appear comfortable with the documentation, and approval has to go beyond Huiting to Mark.
- August timeline may not be feasible. Data cannot flow — even with infrastructure fully ready — without this approval landing first.
- **This directly escalates open item #55** (Huiting formal data requirements ask) — see [open-items.md #55](../../PM-skills-ALL-1/00-hub/open-items.md). #55 was tracked as "Rama has a draft response due week of 13 Jul." This meeting reveals the deeper problem: even a complete draft response may not be sufficient for Huiting/Mark to actually approve, and MVP timeline is now explicitly at risk because of it.

**On UAT planning maturity lagging delivery:**
- The meeting repeatedly circled "how exactly are we going to execute UAT?" without resolving it — no owner for test data prep, no owner for test scripts, no agreed sign-off process, uncertainty over WOG AD vs. Keycloak for test accounts.
- Given UAT starts 11 Aug (a fixed, external date per the quarter goal), this is a governance gap sitting directly on the critical path with roughly 4 weeks of runway.

**On recurring "risks surfaced late" pattern:**
- Team explicitly reflected that data-sharing requirements, additional approval forms, and production-setup expectations all emerged after work had already started, not before. This is now a named, self-acknowledged pattern — worth tracking as a recurring theme rather than one-off surprises.

**On R1 transition:**
- Adrian is pushing PMs to tighten epic one-pagers and start discovery early specifically to avoid a gap between MVP completion and R1 delivery — a proactive move given how much of this meeting was about MVP being newly at risk.

---

## Open Questions

- [ ] **OTEP-505 (Hao Eng, CFT integration) status — not addressed in this meeting per the source summary.** This was the explicit reason today's plan flagged Squad Sync as the first venue to resolve it. — **Owner:** Michelle — **By:** today, escalate to Pow Hwee if not resolved by midday per the weekly plan's own escalation rule
- [ ] What is the actual escalation path if Huiting/Mark approval is delayed past a workable date? No contingency plan was discussed. — **Owner:** Michelle / Rama — **By:** before next sync, given August timeline is already in question
- [ ] Who is the single driver for "Define UAT process, accounts, test data, execution model"? Three names, no lead. — **Owner:** Rama/Michelle/Imelda to self-assign — **By:** before UAT planning Confluence page is drafted
- [ ] What happens if VAPT findings, data approval delays, or UAT challenges combine to threaten the MVP date? No recovery plan, schedule compression, or scope-reduction discussion occurred. — **Owner:** Rama / Michelle — **By:** before this becomes a live SteerCo issue rather than a planning one
- [ ] Does Compass have a formal launch playbook, or is readiness still relying on tribal knowledge / SGEMS precedent? — **Owner:** Jace Tan / Rama — **By:** before launch readiness review

---

## Risks Flagged (from source analysis — preserved as a distinct section given their weight)

**Risk 1 — Single point of failure on data approval (High).** Huiting → ITC team → Mark are all named as critical approval gates with no explicit escalation strategy if delayed. No contingency plan discussed.

**Risk 2 — No formal UAT governance (High, given timing).** No agreed operating model, no test-data owner, no test-script owner, no sign-off process — with UAT starting 11 Aug, this should already be locked down and isn't.

**Risk 3 — Launch readiness depends on tribal knowledge.** Discussions repeatedly relied on past project experience and SGEMS examples rather than a formal Compass launch playbook. Increases operational risk as MVP approaches.

**Risk 4 — No explicit timeline recovery plan.** Data approval delays, VAPT findings, UAT challenges, and environment constraints were all raised as risks, but no discussion covered recovery plans, schedule compression, scope reduction, or contingency dates. Current working assumption is that issues resolve in time — untested.

**Overall assessment (source analysis, framed for SteerCo):** MVP remains broadly on track technically, but schedule risk has shifted from engineering to governance/approvals/operational readiness. Data-sharing approval is the top threat; absence of a UAT operating model is second. Both need management attention over the next 1–2 weeks.

---

## Timeline Risks

- **TIMELINE RISK — August MVP feasibility now explicitly in question.** Michelle's own update states the August timeline may not be feasible due to the Huiting/Mark approval gap. This is a materially different framing from open item #55, which still reads as "draft response due week of 13 Jul" — that item needs updating to reflect this escalation.
- **TIMELINE RISK — UAT starts 11 Aug (fixed, external date per quarter goal) with no operating model defined.** Roughly 4 weeks of runway to lock down ownership, test data, test accounts, and sign-off process from a standing start.
- **TIMELINE RISK — no recovery plan exists for the compounding scenario** (data approval delay + VAPT findings + UAT gaps landing together). Given Risk 1 and Risk 2 above are both active and both sit close to the same August/UAT window, the lack of a contingency plan is itself a risk multiplier.

---

## Related

- `00-hub/open-items.md` #55 (Huiting formal data requirements ask) — this meeting materially escalates it; the tracker entry needs updating to reflect the "August may not be feasible" framing, not just "draft response due this week"
- `00-hub/open-items.md` #52 (Hao Eng/OTEP-505) — **not addressed in this meeting**, still open; see today's daily plan for escalation path
- [2026-07-13-W29-demo-postponed-qa-uat-blockers.md](2026-07-13-W29-demo-postponed-qa-uat-blockers.md) (open item #58) — same "siloed communication / late-surfaced dependencies" root cause named again in this meeting, now with an explicit process fix (Decision #2)
- [2026-07-13-W29-compass-data-requirements-walkthrough.md](2026-07-13-W29-compass-data-requirements-walkthrough.md) — feeds the same Huiting-facing requirements doc this meeting flags as insufficient on its own

---

## Appendix: Source Material

<details>
<summary>Click to expand original pre-structured analysis provided by Michelle</summary>

Source was a pre-written executive summary, "what went well / what did not go well," risks-being-addressed and risks-not-adequately-addressed sections, decisions list, action tracker, and an overall SteerCo-framed assessment — not a raw transcript. All content above is restructured from that analysis; no raw transcript was available to independently verify quotes or exact phrasing.

</details>
