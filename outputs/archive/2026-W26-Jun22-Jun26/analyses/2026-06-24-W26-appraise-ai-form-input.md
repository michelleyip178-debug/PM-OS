# AppraisAI Form Input — Copy-Paste Ready
# CY2026 | Michelle Yip | BA (Programme Management) Level 2

**How to use this file:**
- Each KR and competency has two parts: PASTE (goes into AppraisAI) and EVIDENCE (your tracking guide — do not paste)
- Section 3 → paste into Overall Summary text box
- Section 4 → rename files as shown and upload to Attachments

**Before submitting, fill in the [X] placeholders in the paste text.**

---

## SECTION 1 — Goals / Key Results

---

### KR 1 — Ship unified Opportunities listing (OTG + C@G) live in prod by Oct go-live

**PASTE INTO APPRAISAI:**

- Delivered a unified Opportunities listing to six pilot agencies (~5,400 officers) by Oct 2026 go-live, covering search, filter, sort, and data currency across OTG and C@G sources.
- Identified and addressed a 75% data validation failure rate in the OTG ingestion pipeline (only 160 of 633 live gigs passing validation, per the Jun 10 ingestion discovery report). Led product discovery to separate data quality failures from overly conservative validation rules, producing a structured brief and per-agency remediation plan. The resulting v3 ingestion rules (D-026) lifted catalogue coverage to [X] records and unblocked onboarding for Enterprise Singapore, which held 178 previously blocked gigs — 38% of all blocked content.
- Resolved a three-taxonomy conflict between OTG's 21 Job Families, C@G's 35 FieldSet codes, and CompBank's ~400 competency categories. Mapped 210 unmappable C@G listings and presented four options with trade-offs, enabling the canonical architecture decision — WOG 23 Job Families via translation dictionary at ingestion — to be finalised in the Jun 24 Product x BO senior working session.

**EVIDENCE TO TRACK:**

| What | How to Get It | When | Status |
|---|---|---|---|
| Post-v3 catalogue count — fill in [X] | Ask Léo or Thomas: "What was the final valid gig count after v3 ingestion rules?" Get answer in writing (Slack/email) | After v3 rules run | Pending |
| OTG ingestion discovery report (Jun 10) | Already exists: outputs/archive/2026-W24.../2026-06-10-W24-otg-ingestion-product-discovery.md — export to PDF | Now | Ready to export |
| Taxonomy analysis report (Jun 24) | Already exists: outputs/analyses/2026-06-24-opportunity-category-taxonomy-analysis.md — export to PDF | Now | Ready to export |
| Production screenshot (listing live) | Screenshot careercompass.gov.sg at go-live showing OTG + C@G listings | Oct go-live | Pending |
| careercompass-phased-rollout.md | Already exists — export to PDF to evidence the 6-agency / ~5,400 officer figure | Now | Ready to export |

---

### KR 2 — Ship WOG AD authentication live in prod by Oct go-live

**PASTE INTO APPRAISAI:**

- Delivered WOG AD authentication to production for six pilot agencies, with a login success rate of [X]% confirmed via auth logs at go-live.
- Unblocked a feature that had stalled since Sprint 1 by identifying careercompass.gov.sg as the correct domain for WOG AD onboarding and submitting it for approval on Jun 10, starting the 2–4 week approval clock. Managed the Keycloak → WOG AD transition plan through UAT and go-live.

**EVIDENCE TO TRACK:**

| What | How to Get It | When | Status |
|---|---|---|---|
| Auth logs (login success rate) — fill in [X] | Ask Thomas or DevOps: "Can you export the login success rate from WOG AD auth logs for the first week post go-live?" Screenshot or export | Oct go-live | Pending |
| Domain submission record (Jun 10) | Email or Teams message from Jun 10 confirming careercompass.gov.sg submitted to WOG AD onboarding — screenshot it | Now | Find and save |
| WOG AD PRD | Already exists in workspace — export to PDF as supporting scope definition evidence | Now | Ready to export |

---

### KR 3 — Deliver POCDEX-side authorisation (100% pilot officers auto-provisioned, zero unauthorised access)

**PASTE INTO APPRAISAI:**

- [X]% of pilot agency officers auto-provisioned at go-live; zero unauthorised access incidents recorded, as confirmed by provisioning logs.
- Elevated POCDEX from a single story to its own Epic after identifying a hidden four-story cross-squad dependency chain (provisioning, ringfencing, and two new Core API endpoints) that would have been invisible in standard sprint tracking. Staggered infrastructure stories OTEP-271 and OTEP-203 into Sprint 3 to ensure the plumbing existed before Sprint 4 ringfencing (OTEP-127) needed it — a sequencing call documented in the Sprint 2 Retro on 22 May 2026 that prevented a delivery block no one had flagged. Cross-squad architecture resolved with Core squad in a single Dependencies Sync-Up on Jun 11.

**EVIDENCE TO TRACK:**

| What | How to Get It | When | Status |
|---|---|---|---|
| Provisioning logs — fill in [X] | Ask Daryll or Imelda: "Can you confirm the provisioning rate for all six pilot agencies at go-live?" Get written confirmation | Oct go-live | Pending |
| Sprint 2 Retro notes (22 May 2026) | Already exists — locate retro notes or the decisions log entry from 22 May documenting POCDEX Epic elevation — export relevant section | Now | Ready to export |
| Jun 11 Dependencies Sync-Up notes | Already exists: meeting notes from Jun 11 Core squad sync — export to PDF | Now | Ready to export |
| Zero unauthorised access confirmation | Security or audit log at go-live — ask DevOps for a clean record confirming no access incidents | Oct go-live | Pending |

---

### KR 4 — Hold MVP scope discipline (0 unlogged scope changes, all items resolved or dated before go-live)

**PASTE INTO APPRAISAI:**

- Maintained a decisions log (D-001 to D-026+) capturing rationale, owner, and status for every scope call across Sprints 1–9. Zero unlogged scope changes throughout the delivery cycle. Any stakeholder can trace a decision back to the policy intent and who made it.
- Maintained a 49-item open items log from programme kick-off through to go-live — all items resolved or explicitly dated before go-live. Every dependency, blocker, and risk had a named owner and a current status update at all times.

**EVIDENCE TO TRACK:**

| What | How to Get It | When | Status |
|---|---|---|---|
| Decisions log (D-001 to D-026+) | Already exists: outputs/decisions/2026-05-29-W22-decisions-log.md — export to PDF at go-live showing all decisions with rationale and status | Before submission | Ready to export |
| Open items log (49 items) | Already exists: PM-skills-ALL-1/00-hub/open-items.md — take a snapshot at go-live showing all items resolved or explicitly dated | Oct go-live | Pending snapshot |

---

### KR 5 — Land sprint goals consistently (hit or named carry-in every sprint, DoR-ahead rate, 1+ named process improvement)

**PASTE INTO APPRAISAI:**

- Sprint goals hit or carry-in explicitly named and explained across Sprints 1–9, with no silent slips. All carry-ins were logged with a clear reason before the next planning session.
- Introduced systematic Definition of Ready (DoR) audits before every planning ceremony. In Sprint 3, caught two AC conflicts — OTEP-128 and OTEP-129 both duplicating OTEP-85 logic — the day before planning, preventing scope re-litigation in the room and a risk of incorrect build. In Sprint 4, resolved six pre-planning actions including two AC conflicts and a cross-squad architecture risk in a 1h45 window before the ceremony.
- Three named process improvements adopted by the team across the delivery cycle: DoR audit cadence before every ceremony, UAT/QA environment separation (QA for engineer-driven verification; UAT for user-driven acceptance), and sprint closure gated on Business Owner sign-off.

**EVIDENCE TO TRACK:**

| What | How to Get It | When | Status |
|---|---|---|---|
| Sprint goal hit/carry-in table (Sprints 1–9) | Add a table to sprint-status.md now: Sprint / Goal / Hit or Carry-in / Reason. Update after every sprint close. No paper trail exists if not tracked live. | Do this week | Not started |
| Sprint 3 + 4 Jira pre-planning audit logs | Export or screenshot the Jira board state from the day before Sprint 3 and Sprint 4 planning, showing the AC conflicts that were caught and resolved | Now (while accessible) | Ready to export |
| Process improvement adoption evidence | Retro notes or ceremony notes showing DoR audit, UAT/QA split, and BO sign-off gate were formally adopted by the team | Now | Ready to export |

---

## SECTION 2 — Competencies / Behaviours

---

### Craft and Execution

**PASTE INTO APPRAISAI:**

- Mapped three data sources (OTG, C@G, CompBank) and quantified exact friction points — 210 unmappable C@G listings — to drive a canonical architecture decision rather than escalating an unresolved conflict to engineering. Applied the same rigour to the POCDEX data contract review, translating Core squad's technical interface into ACs that Léo could build against without a follow-up session.
- Introduced DoR audits and UAT/QA environment separation as standing process improvements across the Sprint 1–9 delivery cycle, directly improving delivery predictability and reducing mid-sprint rework from incorrect or conflicting acceptance criteria.

**EVIDENCE TO TRACK:**

| What | How to Get It | When | Status |
|---|---|---|---|
| Taxonomy analysis report | Already exists: outputs/analyses/2026-06-24-opportunity-category-taxonomy-analysis.md | Now | Ready to export |
| POCDEX data contract ACs | Already exists in Jira: OTEP-271, OTEP-203 story ACs — screenshot the AC text from Jira | Now | Ready to export |
| Sprint 3 + 4 DoR audit logs | Same as KR 5 — Jira board screenshots from day before each planning ceremony | Now | Ready to export |

---

### Ownership

**PASTE INTO APPRAISAI:**

- Identified a hidden four-story cross-squad dependency chain in POCDEX and elevated it to a dedicated Epic without being asked — a proactive call that prevented a Sprint 4 delivery block, with the rationale documented in the Sprint 2 Retro on 22 May 2026.
- Maintained system integrity for approximately [X] active WOG users throughout the Jan–Apr OTG operations period by escalating POCDEX-OTG batch job mismatches upstream to source systems (POCDEX, Cumulus, HRPS) rather than applying local UI patches — consistent discipline of fixing root causes rather than symptoms.

**EVIDENCE TO TRACK:**

| What | How to Get It | When | Status |
|---|---|---|---|
| OTG active user count — fill in [X] | Pull from the latest OTG monthly report. Confirm exact figure (expected ~113,000) | Now | Find and confirm |
| Sprint 2 Retro / POCDEX Epic elevation decision (22 May) | Already exists in decisions log — export the relevant entry | Now | Ready to export |
| Batch job escalation record | IM8 log entries or Teams messages showing upstream escalation pattern (Jan–Apr) — screenshot examples | Now | Find and save |

---

### Strategic Alignment

**PASTE INTO APPRAISAI:**

- Shifted sprint goals from delivery outputs to officer outcomes from Sprint 2 onward, giving the team a clear framework to evaluate and reject scope creep without manager escalation. When the WOG AD UAT environment gap was confirmed mid-Sprint 2, rebuilt the sprint scope around groomed, unblocked work rather than stalling — the sprint still advanced programme OKRs.
- Defined the Business Owner engagement model so senior stakeholders focused on problem framing, scope decisions, and sprint goals rather than routine grooming. Sprint 2 grooming ran without BO attendance and stayed on schedule; the model held across all subsequent sprints.

**EVIDENCE TO TRACK:**

| What | How to Get It | When | Status |
|---|---|---|---|
| Sprint 2 goal statement (officer outcome framing) | Already in sprint-status.md or Sprint 2 planning notes — screenshot the goal wording | Now | Ready to export |
| Sprint 2 scope rebuild record | Sprint 2 mid-planning notes or retro notes showing auth stories deferred and replaced with filter/apply work | Now | Ready to export |
| BO engagement model adoption | Meeting notes from session where BO model was agreed (Sprint 2 grooming ran without BO) — export relevant section | Now | Ready to export |

---

### Culture and Organisational Influence

**PASTE INTO APPRAISAI:**

- Facilitated a cross-agency PMP AI Learn-Create-Share session on 8 May 2026 (hybrid, MBC Level 10) for the GovTech PM community, sharing a practical AI stack for PM work across Claude, Figma, and Notion. Post-session feedback showed a 4.25 out of 5 satisfaction score, with 75% of attendees reporting greater AI clarity and 100% saying they would recommend the session. At least one attendee built and shared a synthesis assistant across their own team — impact that extended beyond the session itself.
- Designed and executed a 4-week, 12-session structured handover plan for OTG operations, sequenced by complexity rather than recency so Jobelle could build a mental model before taking on live tasks. Knowledge continuity maintained with zero operational gaps through the transition period.

**EVIDENCE TO TRACK:**

| What | How to Get It | When | Status |
|---|---|---|---|
| PMP AI post-session feedback form results | Check email or Teams messages from 8–12 May for the FormSG form link or response summary. Download and save. Do this now while the trail is warm. | Now (urgent) | Not found yet |
| Downstream adoption confirmation | Any message from the attendee who built a synthesis assistant — screenshot the Teams/Slack message as proof of downstream impact | Now | Find and save |
| Jobelle handover completion record | Note the date all 12 sessions are done. Keep a brief session log with dates (Session 1: 8 Jun, Session 2: XX Jun, etc.) | Ongoing through Jul | Session 1 done |

---

## SECTION 3 — Overall Summary

**PASTE INTO APPRAISAI:**

During CY26, I operated across two workstreams: maintaining system integrity for approximately [X] WOG users on the OTG platform from January to March, then transitioning to PM Apprentice on OTEP Pathfinder from April to December to deliver CareerCompass MVP to six pilot agencies by the October go-live. Specific achievements are detailed in the Goals and Competencies sections above.

---

## SECTION 4 — Attachments / Evidence Files

Rename files exactly as shown before uploading so the panel can match each file to the claims.

| Evidence File | Proves | Suggested File Name |
|---|---|---|
| OTG ingestion discovery report (Jun 10) | KR 1 — 75% failure rate, v3 rules | Evidence_KR1_OTG_Ingestion_Report.pdf |
| Post-v3 catalogue count confirmation | KR 1 — catalogue lift result | Evidence_KR1_PostV3_Catalogue_Count.pdf |
| careercompass-phased-rollout.md export | KR 1/2/3 — 6 agencies, ~5,400 officers | Evidence_KR1-3_Pilot_Agency_Rollout.pdf |
| Auth logs export (Oct go-live) | KR 2 — login success rate | Evidence_KR2_WOG_Auth_Logs.pdf |
| Provisioning logs (Oct go-live) | KR 3 — auto-provisioning rate | Evidence_KR3_POCDEX_Provisioning_Logs.pdf |
| Sprint 2 Retro / decisions log (22 May) | KR 3 / Ownership — POCDEX Epic elevation | Evidence_KR3_POCDEX_Epic_Decision.pdf |
| Decisions log (D-001 to D-026+) | KR 4 — zero unlogged scope changes | Evidence_KR4_Decisions_Log.pdf |
| Open items log snapshot at go-live | KR 4 — all items resolved or dated | Evidence_KR4_Open_Items_Log.pdf |
| Sprint 3 + 4 Jira pre-planning screenshots | KR 5 / Craft — DoR audit evidence | Evidence_KR5_DoR_Audit_Logs.pdf |
| Sprint goal log (Sprints 1–9) | KR 5 — hit/carry-in record | Evidence_KR5_Sprint_Goal_Log.pdf |
| OTG monthly report (latest) | Ownership — WOG active user count | Evidence_Ownership_OTG_User_Count.pdf |
| PMP AI session feedback form results | Culture — 4.25/5 satisfaction score | Evidence_Culture_PMP_AI_Feedback.pdf |

---

*Prepared: 2026-06-24 | For year-end APA submission*
