# CY2026 APA Brief — For Jace

---

## Cover Message

Hi Jace,

Thank you for the check-in today. Sharing my CY26 APA brief below, structured around the five committed KRs we confirmed.

Two things I need your input on before I finalise:

1. **Go-live timing:** The squad has effectively concluded November is more realistic than October, given the VAPT and remediation window. Is this yours to raise with Adrian, or mine?
2. **KR 6 attribution:** If KR 6 surfaces from the standby list, should the rating be on my inputs (discovery brief, v3 rules, outreach) rather than the agency's data clean-up output?

Let me know if you'd like to adjust anything before I submit.

Michelle

---

## Officer Details

**Name:** Michelle Yip

**Role:** Business Analyst (Programme Management) Level 2 / PM Apprentice, OTEP Pathfinder (CareerCompass)

**Period:** January–December 2026

**Assessment level:** BA (Programme Management) Level 2

---

## At a Glance

| KR | What It Covers | Status |
|---|---|---|
| KR 1 | Ship unified Opportunities listing (OTG + C@G) | On track — Sprint 4 active; ingestion and taxonomy resolved |
| KR 2 | Ship WOG AD authentication | In progress — domain submitted Jun 10; approval clock running |
| KR 3 | Deliver POCDEX-side authorisation | On track — Epic elevated; cross-squad architecture resolved Jun 11 |
| KR 4 | Hold MVP scope discipline | On track — decisions log D-001 to D-026+; 49-item open items log active |
| KR 5 | Land sprint goals consistently | On track — Sprints 1–4 done; process improvements adopted by team |

---

## Committed KRs

---

### KR 1 — Ship unified Opportunities listing (OTG + C@G) live in prod by go-live

**How we measure it:**
Did OTG and C@G opportunities both go live? Can officers browse, filter, and apply end-to-end in one place?

**What I've done:**
- Sprint 3 near-goal: filters, apply, and deep-link reached QA. Sprint 4 active: search, filter, sort, data currency in flight.
- OTG ingestion (Jun 10): identified that only 160 of 633 live gigs (25%) were passing validation — a 75% failure rate. Produced a structured discovery brief and per-agency remediation plan. Two field scope decisions identified that could lift the catalogue to 350–400 records without agency action. Enterprise Singapore prioritised — 178 blocked gigs, 38% of all blocked content. V3 ingestion rules produced (D-026).
- Taxonomy (Jun 24): three-source conflict (OTG's 21 Job Families / C@G's 35 FieldSet codes / CompBank's ~400 categories) mapped in full. 210 unmappable C@G listings quantified. Four options presented with trade-offs; canonical architecture (WOG 23 Job Families via translation dictionary at ingestion) finalised in the same week.

**What I'll confirm at go-live:**
Both pipelines live in production; PostHog funnel dashboard showing officer journey from browse to apply; post-v3 catalogue count confirmed with engineering.

*Behavioural dimension supported: Craft and Execution*

---

### KR 2 — Ship WOG AD authentication live in prod by go-live

**How we measure it:**
Can officers log in using their real GovTech work account in the live system? What is the login success rate?

**What I've done:**
- Feature had stalled since Sprint 1 with no movement. Identified careercompass.gov.sg as the unblocking domain, briefed Adrian with two concrete asks, got domain submitted (Jun 10) — starting the 2–4 week approval clock.
- Keycloak mock auth live in QA (OTEP-305). Keycloak → WOG AD transition plan scoped and tracked.
- Note: Michelle's role is unblocking and scoping, not owning infra. Evidence = unblocking actions, not infra delivery.

**What I'll confirm at go-live:**
WOG AD auth live in production; login success rate from auth logs.

*Behavioural dimension supported: Ownership*

---

### KR 3 — Deliver POCDEX-side authorisation (100% pilot officers auto-provisioned, zero unauthorised access)

**How we measure it:**
Were all ~5,400 officers across six pilot agencies set up automatically from day one, without manual HR intervention? Were there any security incidents?

**What I've done:**
- Identified a hidden four-story cross-squad dependency chain in POCDEX (provisioning, ringfencing, two new Core API endpoints) that would have been invisible in standard sprint tracking. Elevated POCDEX to its own Epic (22 May 2026) before it became a blocker.
- Staggered infrastructure stories (OTEP-271, OTEP-203) into Sprint 3 so the plumbing existed before Sprint 4 ringfencing (OTEP-127) needed it. Sequencing call that prevented a delivery block nobody had flagged.
- Cross-squad architecture resolved with Core squad in a single Dependencies Sync-Up (Jun 11): in-code interface, no foreign keys, two new Core endpoints scoped.

**What I'll confirm at go-live:**
Provisioning logs showing 100% of pilot officers set up; zero unauthorised access incidents from audit log.

*Behavioural dimension supported: Ownership*

---

### KR 4 — Hold MVP scope discipline (0 unlogged scope changes, all items resolved or dated before go-live)

**How we measure it:**
Was every scope decision documented with a rationale, owner, and status — nothing decided verbally and forgotten? Were all programme open items resolved or given a clear close date before go-live?

**What I've done:**
- Decisions log (D-001 to D-026+): every scope call logged with rationale, status, and owner. Any stakeholder can trace a decision back to the policy intent and who made it. Key calls include: FormSG pre-fill deferred (D-005), OTG sync = one-time port (D-016), SJR excluded MVP (D-018), native apply deferred to R1 (D-025), ringfencing = agency-level only (D-023).
- 49-item open items log: maintained across the full delivery cycle. Every dependency, blocker, and risk has a named owner and current status. Nothing untracked.

**What I'll confirm at go-live:**
Decisions log export; open items log snapshot showing all 49 items resolved or explicitly dated.

*Behavioural dimension supported: Strategic Alignment*

---

### KR 5 — Land sprint goals consistently (hit or named carry-in every sprint, 1+ named process improvement)

**How we measure it:**
Did the team hit their goal every sprint, or name a clear reason for any carry-in — with no silent misses across Sprints 1–9? Did at least one new working practice get adopted and evidenced?

**What I've done:**
- Sprints 1–4: goals hit or carry-in explicitly named and explained. No silent slips.
- DoR audits before every ceremony: Sprint 3 caught two AC conflicts (OTEP-128 and OTEP-129 both duplicating OTEP-85 logic) the day before planning — prevented scope re-litigation and incorrect build. Sprint 4: six pre-planning actions resolved in 1h45 before the ceremony.
- Three process improvements adopted by the team: DoR audit cadence, UAT/QA environment separation (QA for engineer-driven verification; UAT for user-driven acceptance), sprint closure gated on BO sign-off.

**What I'll confirm at go-live:**
Sprint goal log (Sprints 1–9); Jira pre-planning screenshots from Sprint 3 and 4; retro notes showing process adoption.

*Behavioural dimensions supported: Craft and Execution, Strategic Alignment*

---

## Behavioural Dimensions

---

### Craft and Execution
*Evidenced through KR 1 and KR 5*

- Mapped three data sources (OTG, C@G, CompBank) and quantified exact friction points — 210 unmappable C@G listings — to drive a canonical architecture decision rather than escalating an unresolved conflict to engineering. Applied the same rigour to the POCDEX data contract: translated Core squad's technical interface into ACs Léo could build against without a follow-up session. *(KR 1)*
- Introduced DoR audits and UAT/QA environment separation as standing process improvements, directly improving delivery predictability and reducing mid-sprint rework from incorrect or conflicting acceptance criteria. *(KR 5)*

---

### Ownership
*Evidenced through KR 2, KR 3, and Jan–Mar OTG operations*

- Identified a hidden four-story cross-squad dependency chain in POCDEX and elevated it to a dedicated Epic without being asked — a proactive call that prevented a Sprint 4 delivery block, documented in the Sprint 2 Retro (22 May 2026). *(KR 3)*
- Unblocked the WOG AD authentication feature after it had stalled since Sprint 1, by identifying the correct domain and driving the approval submission — without waiting for direction. *(KR 2)*
- Maintained system integrity for ~113,000 WOG users throughout Jan–Apr OTG operations by escalating POCDEX-OTG batch job mismatches upstream to source systems rather than applying local UI patches. *(OTG BAU)*

---

### Strategic Alignment
*Evidenced through KR 4 and KR 5*

- Maintained a decisions log (D-001 to D-026+) and 49-item open items log throughout the delivery cycle, ensuring every scope decision was traceable and no dependency fell through untracked. *(KR 4)*
- Shifted sprint goals from delivery outputs to officer outcomes from Sprint 2 onward, giving the team a clear framework to evaluate and reject scope creep without manager escalation. When the WOG AD environment gap was confirmed mid-Sprint 2, rebuilt the sprint scope around unblocked work — the sprint still advanced programme OKRs. *(KR 5)*

---

### Culture and Organisational Influence
*Evidenced through cross-GovTech engagement and team handover*

- Facilitated a cross-agency PMP AI Learn-Create-Share session (8 May 2026, hybrid, MBC Level 10): 4.25/5 satisfaction score; 75% reported greater AI clarity; 100% would recommend. At least one attendee built and shared a synthesis assistant across their own team — impact beyond the room.
- Designed and executed a 4-week, 12-session structured handover plan for OTG operations, sequenced by complexity rather than recency so Jobelle could build a mental model before taking on live tasks. Knowledge continuity maintained with zero operational gaps.

---

## Appendix A — Standby KRs

Not formally assessed. Available as supporting evidence if needed.

| KR | What It Measures | Evidence Available |
|---|---|---|
| KR 6 — Unblock OTG data quality | Catalogue coverage from ~25% to launch-ready; per-agency outreach logged | Jun 10 discovery brief; v3 rules (D-026); per-agency remediation plan |
| KR 7 — Recommend-first | Lead with a recommendation, not a menu of options | R1 brief to Adrian (Jun 23); taxonomy recommendation to Pow Hwee (Jun 24) |
| KR 8 — Stakeholder influence | Own cross-squad alignment without escalating | Core architecture session Jun 11 resolved without manager involvement |
| KR 9 — R1 roadmapping | Own R1 scope framing and MVP→R1 sequencing | R1 competitive analysis and feature brief (Jun 23); R1 jam with Adrian (Jun 24) |
| KR 10 — Capability beyond core | Share knowledge, raise team capability | PMP AI session (May 8): 4.25/5 satisfaction, 75% greater AI clarity |

---

## Appendix B — Open Evidence Items

Items to close before final year-end submission.

| What's Needed | How | When |
|---|---|---|
| Post-v3 catalogue count | Ask Léo or Thomas for the final valid gig count after v3 rules ran | After v3 rules run |
| OTG active user count | Pull exact figure from latest OTG monthly report | Now |
| PMP AI session feedback form | Locate FormSG results from May 8 — check email/Teams from 8–12 May | Now (urgent) |
| Auth logs (login success rate) | Ask Thomas/DevOps for export from first week post go-live | Oct/Nov go-live |
| Provisioning logs | Ask Daryll/Imelda for confirmation of 100% provisioning at go-live | Oct/Nov go-live |
| Sprint goal log (Sprints 1–9) | Add hit/carry-in table to sprint-status.md now; update after each sprint | Do this week |

---

*Prepared: 2026-06-25 | Assessment level: BA (Programme Management) Level 2 | For Jace Tan*
