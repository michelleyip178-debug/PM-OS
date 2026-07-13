# Meeting Notes: Team 2 Standup

**Date:** 2026-07-07 (Tue, W28), 11:00–11:15am

**Organiser:** Pow Hwee TAN

**Attendees:** Pow Hwee TAN, Michelle YIP, Thomas, Léo, Fanxu, Rathika, Amber (referenced, unclear if present)

**Type:** Engineering Sync — daily standup

**Duration:** 15 minutes

---

## Summary

Feature progress is healthy but deployment confidence is lagging behind it. Pow Hwee's core concern: QA validation, environment stability, and smoke-testing coverage haven't kept pace with what's been built. Michelle challenged Amber's usability-testing (UT) plan for having no governance for handling findings before VAPT. **This maps directly onto the confirmed UAT/VAPT timeline** (open item #39): UAT starts 11 Aug, feature freeze is end of Sprint 8 (21 Aug) — Pow Hwee's "about two sprints left" estimate checks out against that date, which makes this a real countdown, not a vague concern.

---

## Decisions Made

1. **Prioritise WOG AD connectivity validation before further Keycloak config work.**
   - **Why:** Connectivity depends on external parties (Microsoft/WOG AD), so validating it early de-risks a dependency Pow Hwee doesn't control, rather than spending more time on configuration detail that doesn't matter if connectivity itself fails.
   - **Who decided:** Pow Hwee TAN.
   - **Impact:** This is the same WOG AD dependency chain tracked in open item #26 — Léo's Keycloak client config had no ETA as of 2026-06-30. This decision reorders Léo's work to test the riskiest unknown first.

2. **C@G will not be ring-fenced.**
   - **Why:** Michelle clarified this directly, preventing unnecessary dev and testing effort on a scope that doesn't apply.
   - **Who decided:** Michelle YIP.
   - **Impact:** Removes ring-fencing work from C@G's test/dev scope — worth confirming this is reflected whereever C@G ring-fencing might have been assumed (e.g. OTEP-408/409 eligibility filter work, which is scoped to non-C@G sources already per Sprint 5/6 tracking).

3. **Use QA environment for future sprint demonstrations, not Dev.**
   - **Why:** Demos in Dev don't prove deployability. Moving to QA is a real maturity signal — it forces the team to confront whether QA can actually support a demo, rather than deferring that question.
   - **Who decided:** Pow Hwee TAN, agreed by Fanxu.
   - **Impact:** Raises the bar for what "demo-ready" means going forward — if QA can't support a clean demo, that's now visible immediately rather than hidden behind Dev's more forgiving environment.

4. **Avoid SQL-seeded data — load data through actual jobs instead.**
   - **Why:** Validates production-like operational flows rather than manually-seeded shortcuts that mask whether the real ingestion path works.
   - **Who decided:** Pow Hwee TAN.
   - **Impact:** Surfaces import fragility earlier (see Thomas's OTG import issues below) instead of it being hidden by manual seeding.

5. **Raise the actual C@G implementation issue as a bug.**
   - **Why:** Rathika asked whether this warranted a ticket; Michelle confirmed yes.
   - **Who decided:** Michelle YIP.
   - **Impact:** Rathika to create the ticket (see Action Items).

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Test Keycloak connectivity to Microsoft login endpoints / WOG AD | Léo | No date given — schedule within 48 hrs | 🔴 High | 🔴 Not Started |
| Prepare for discussion with Adrian and Fanxu on deployment approach | Léo | No date given | 🔴 High | 🔴 Not Started |
| Complete OTG import fixes and submit PR | Thomas | No date given — schedule within 48 hrs | 🔴 High | 🔴 Not Started |
| Populate and publish agency logos once reference agency data is fixed | Thomas | No date given | 🟡 Medium | 🔴 Not Started |
| Develop detailed UT plan and discuss governance/approach with team | Amber | No date given — flagged as urgent by Michelle's challenge | 🔴 High | 🔴 Not Started |
| Create bug ticket for actual C@G implementation issue | Rathika | No date given — schedule within 48 hrs | 🔴 High | 🔴 Not Started |
| Conduct QA smoke testing with Rathika | Fanxu | No date given — schedule within 48 hrs | 🔴 High | 🔴 Not Started |
| Verify Opportunities and broader feature set in QA | Fanxu | No date given — schedule within 48 hrs | 🔴 High | 🔴 Not Started |
| Populate Jira with technical gaps before sprint planning | Engineering Team | **Before Sprint 6 planning — 9 Jul, 2 days out** | 🔴 High | 🔴 Not Started |
| Validate all services and integrations inside QA | Engineering Team | No date given | 🔴 High | 🔴 Not Started |
| Share competency architecture/process diagram | Pow Hwee TAN | No date given | 🟡 Medium | 🔴 Not Started |
| Continue R1/R1 work and OTG activities | Michelle YIP | Ongoing | — | Informational |

**Notes:**
- Almost every action item has no due date, and several are explicitly urgent (WOG AD connectivity, OTG import PR, smoke testing, Jira gap population before Sprint 6 planning). Given Sprint 6 planning is **9 Jul — 2 days from this meeting** — the "populate Jira with technical gaps" item in particular needs a hard date today, not left open.
- The UT governance action item (Amber) is the one Michelle explicitly flagged as unresolved and risky — see Blockers below. This isn't a normal "develop a plan" task; it's blocking a decision about how findings get triaged before VAPT.

---

## Key Insights & Quotes

**What's actually driving the concern:** feature development has outpaced deployment confidence. QA environment migration mostly succeeded, but critical validation — WOG AD/Keycloak, ingress, OTG imports, C@G integration, smoke-test coverage — remains incomplete. Readiness is being inferred, not proven.

**Pow Hwee's recurring pattern callout:** "Teams test profile flows but not Opportunities and Courses." This is a testing-coverage gap on core MVP functionality, not a peripheral one.

**Import fragility, concretely:** Thomas reported that one upstream file's changed column structure broke the import, and agency mapping issues caused failures (e.g. A*STAR missing from reference data). One upstream file change breaking the pipeline is an operational fragility signal worth tracking, not a one-off.

**Michelle's UT governance challenge, stated plainly:** Amber's plan was "do UT, then figure out what needs fixing afterward." Michelle's pushback: if major issues surface close to VAPT, someone needs a pre-agreed process for fix-now vs. defer — and right now there's no escalation framework, no severity/decision matrix, no triage mechanism, and no agreed ownership for handling UT findings.

---

## Open Questions

- [ ] What are the go/no-go readiness criteria for QA, UAT, and sprint demos? Nobody has stated what must pass, who signs off, or how readiness is measured. — **Owner:** Unassigned — Pow Hwee is the natural owner given his push toward QA-first validation — **By:** Before UAT (11 Aug)
- [ ] What's the severity/triage framework for UT findings surfaced close to VAPT? — **Owner:** Amber (as part of the UT plan action item) — **By:** Before UT execution
- [ ] Is C@G data currently real or mocked in QA? Rathika raised this and it wasn't resolved in the meeting. — **Owner:** Unassigned
- [ ] Is ingress configuration actually resolved, or still open? — **Owner:** Unassigned — repeatedly named as unresolved

---

## Blockers

1. **UT governance gap — no framework for handling findings before VAPT.**
   - **Blocked by:** No severity definitions, no decision authority, no fix-now-vs-fix-later framework, no agreed ownership.
   - **Impact:** If UT surfaces a major issue close to the VAPT window (7 Sep–16 Oct per open item #39), there's currently no process to decide whether to fix immediately or defer — risking either a rushed late fix or an unaddressed risk going into security testing.
   - **Resolution:** Amber's action item (develop UT plan + governance) needs to actually answer this, not just produce a testing schedule. Worth Michelle following up directly rather than assuming the governance question gets addressed as a byproduct.

2. **QA readiness is assumed, not verified end-to-end.**
   - **Blocked by:** Opportunities and Courses haven't been comprehensively tested in QA (Fanxu acknowledged this directly); ingress and C@G integration status both remain unclear.
   - **Impact:** If core MVP functionality (Opportunities, Courses) hasn't actually been verified in QA, the team may be inferring deployability rather than proving it — risk surfaces late, likely during UAT or a demo.
   - **Resolution:** Fanxu + Rathika's smoke-testing and Opportunities-verification action items directly address this — worth confirming these aren't deprioritized against feature work.

---

## Timeline Risks

- **TIMELINE RISK:** Pow Hwee's "roughly two sprints left before UAT-related activities" lines up with the confirmed schedule — UAT starts 11 Aug, and feature freeze is end of Sprint 8 (21 Aug), per open item #39. That means Sprint 6 (13–26 Jul) and Sprint 7 (27 Jul–9 Aug) are the *only* remaining sprints before feature freeze. Every unresolved item in this standup (QA validation, WOG AD/Keycloak, ingress, UT governance) needs to land inside that window — there's no slack sprint after S7 to absorb slippage before freeze.
- **TIMELINE RISK:** "Populate Jira with technical gaps before sprint planning" has no explicit date, but Sprint 6 planning is 9 Jul — 2 days out. If this doesn't happen before planning, technical debt and QA gaps risk being invisible when Sprint 6 gets scoped, which then repeats the same "feature work outpaces deployment confidence" pattern this standup is trying to correct.
- **TIMELINE RISK:** WOG AD connectivity testing (Léo) is prioritized correctly, but the broader WOG AD onboarding chain (open item #26) already has Léo's Keycloak client config sitting with "no ETA" as of 2026-06-30, and downstream CSC SSO integration (open item #30) is sequentially gated behind it with DLE's own testing not targeted until August. If today's connectivity test surfaces a problem, it stacks directly onto an already-tight chain with very little runway left before feature freeze.

---

## Next Steps

**Immediate (Today/Tomorrow):**
- Get explicit due dates on the Jira technical-gap population task ahead of 9 Jul Sprint 6 planning
- Push Amber for the UT severity/triage framework specifically, not just a testing schedule

**Short-term (Before Sprint 6 planning, 9 Jul):**
- Léo's WOG AD/Microsoft connectivity test
- Thomas's OTG import PR
- Fanxu + Rathika's QA smoke testing and Opportunities verification

**Follow-up Meeting:**
- **Date:** Next standup (daily cadence)
- **Purpose:** Confirm whether QA smoke testing and Opportunities verification actually happened, and whether Amber's UT governance framework has an answer, not just a plan to make one
- **Attendees:** Same, plus ideally Adrian for the deployment-approach discussion Léo is preparing

---

## Context for Future Reference

- **This connects directly to the confirmed UAT/VAPT timeline** (open item #39, `PM-skills-ALL-1/00-hub/open-items.md`): UAT 11 Aug–4 Sep (staggered), feature freeze end of Sprint 8 (21 Aug), VAPT 7 Sep–16 Oct. Pow Hwee's "two sprints left" isn't an estimate — it's Sprint 6 and Sprint 7, full stop, before feature freeze.
- **WOG AD/Keycloak thread** ties into open items #26 (WOG AD onboarding, Léo's client config had no ETA as of 2026-06-30) and #30 (CSC SSO, sequentially gated behind WOG AD, DLE testing targeted for August). Today's connectivity-test decision is the right next step, but the chain behind it is already tight.
- **Michelle's UT governance challenge is a genuinely new risk, not previously tracked** — worth adding to `risks.md` or `open-items.md` as its own tracked item given VAPT timing makes it time-sensitive, rather than letting it live only in this meeting's notes.
- **Prior Team 2 standups exist** (`2026-05-26-W22-standup-team2.md`, `2026-06-22-W26-otep-team2-standup.md`) — worth a quick check next time whether the QA-readiness and import-fragility concerns raised today are new or a continuation of a pattern from those sessions.

---

## My Overall Assessment

**Delivery Confidence: 7/10 | Environment Readiness: 5/10 | Operational Readiness: 5/10** (per source assessment).

The most important thing in this standup wasn't any single decision — it was Michelle's UT governance challenge. Everything else (WOG AD connectivity, QA-first demos, avoiding SQL-seeded data) is good engineering hygiene that improves confidence incrementally. But if UT surfaces something serious close to VAPT with no triage framework in place, that's the one failure mode that could actually blow up the timeline this late in the process — worth treating as a tracked risk, not just an action item on Amber's plate.

**If preparing a SteerCo-style update, the three watch items from the source assessment hold up well against the actual dated timeline:**
1. QA environment validation and smoke-test completion
2. WOG AD / Keycloak / ingress integration readiness
3. UT governance and handling of high-severity findings before VAPT

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original meeting summary as provided</summary>

Executive Summary, What Went Well, What Didn't Go Well, Key Decisions Made, Action Items, Risks Explicitly Discussed, Risks Not Adequately Addressed, and Overall Assessment sections as submitted by the PM on 2026-07-07 — condensed and restructured above; full original text available in the conversation history for this session.

</details>

---

*Saved: 2026-07-07 (W28)*
*Next: Confirm Jira technical-gap population lands before 9 Jul Sprint 6 planning. Push Amber for the specific UT severity/triage framework, and consider logging the UT-governance gap as its own tracked risk given VAPT timing.*
