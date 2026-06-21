---
title: OTG Upload Module — Discovery Question Checklist
date: 2026-06-12
owner: Michelle Yip
relates_to: OTEP-397, OTEP-427
status: In progress — answers populated where known as of 12 Jun 2026
---

# OTG Upload Module — Discovery Question Checklist

Use this before scoping OTEP-397. Questions marked ✅ are answered. Questions marked 🔲 need a research session or stakeholder confirmation.

---

## Theme 1: Who is doing this job today?

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 1.1 | Who currently exports from OTG and what do they do with the file? | 🔲 Open | Not confirmed. Assumed to be DevOps / Rama's team. Need to verify with Rama. |
| 1.2 | Is the "DevOps admin" persona real — do we have a named person at each pilot agency? | 🔲 Open | No named person confirmed. Soft-launch to one admin is the plan but the person is TBC. |
| 1.3 | What does their current workflow look like end-to-end after they export? | 🔲 Open | Unknown. Has not been observed or mapped. |
| 1.4 | How technical are they? Are they comfortable with file uploads and reading error logs? | 🔲 Open | Unknown. Informs how much hand-holding the UI needs. |

---

## Theme 2: What is the actual job to be done?

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 2.1 | Are we building a one-time migration tool or a recurring ops workflow? | ✅ Answered | MVP = one-time import. Pilot agencies post directly to Compass going forward. Ongoing scheduler (OTEP-348) is a future state, blocked on C@G dedup rule (I-010). Source: `otg-ingestion-brief.md`. |
| 2.2 | Does the MVP upload UI need to serve both one-time and recurring use cases? | ✅ Answered | No. MVP = one-time. Recurring cadence is OTEP-348 scope, not OTEP-397 scope. |
| 2.3 | What triggers a re-upload post-MVP? | 🔲 Open | Not defined. Process design question — not a UI question, but must be answered before production. |

---

## Theme 3: What does success look like for the admin?

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 3.1 | What does a "good" upload session feel like to the admin — fast, confident, clear? | 🔲 Open | Not asked. Need user research session. |
| 3.2 | What is their biggest fear in this workflow? | 🔲 Open | Not asked. Hypothesis: publishing wrong data with no way to undo. Needs validation. |
| 3.3 | What would make them trust the system enough to press Publish? | 🔲 Open | Not asked. The Review step (catalogue preview) is designed to address this, but needs validation with a real admin. |

---

## Theme 4: How often does this need to happen?

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 4.1 | For MVP: how many import runs are needed before launch? | 🔲 Open | Not defined. Could be 1–3 runs during pilot testing. Needs confirmation with DevOps. |
| 4.2 | Post-MVP: is this weekly, monthly, or event-triggered? | 🔲 Open | Not defined. OTEP-397 user story says "once a week frequency" but this has not been validated as an actual operational need. |
| 4.3 | Who decides when to trigger a re-upload? | 🔲 Open | Not defined. No owner confirmed. |

---

## Theme 5: What does the admin do with the skip report?

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 5.1 | After seeing 205 skipped records, what does the admin do next? | 🔲 Open | Assumed: forward skip report to agency contacts. Not confirmed. |
| 5.2 | Does the admin have relationships with agency contacts (MSF, NCSS, ESG)? | 🔲 Open | Unknown. If not, the skip report doesn't drive remediation — agency outreach needs a separate channel. |
| 5.3 | Does the skip report need to be reformatted before it's useful to an agency? | 🔲 Open | Unknown. `OTEP_Remediation_Report_v3.xlsx` is the current manual artefact — check if that format works for agencies. |
| 5.4 | Who owns the follow-through on skipped records? | 🔲 Open | Not assigned. Critical gap — without an owner, skipped records stay skipped regardless of UI quality. |

---

## Theme 6: What breaks when it goes wrong?

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 6.1 | If an admin publishes a bad file, can they fix it? Who do they call? | 🔲 Open | No rollback is currently scoped. Identified as a blind spot in the trio prep. |
| 6.2 | How bad is a false positive (record that should have been skipped but wasn't)? | ✅ Answered | Bad — visible to officers immediately in the listing. Undermines catalogue trust. Hard-skip rule exists to prevent this. Source: OTEP-192 ACs + ingestion brief. |
| 6.3 | How bad is a false negative (record that should have passed but was skipped)? | ✅ Answered | Manageable — reduces catalogue size but doesn't surface bad data. Remediation report addresses this. Source: ingestion brief. |
| 6.4 | What is the rollback / un-publish path if wrong data is published? | 🔲 Open | Not scoped. Soft-launch to one pilot admin is the current risk mitigation. Needs a formal answer before production. |

---

## Theme 7: What do agencies need from this process?

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 7.1 | Have pilot agency contacts been told that records will be skipped? | 🔲 Open | Not confirmed. Agency outreach (w/c 15 Jun) is on the action list but hasn't happened yet. |
| 7.2 | Who is the single point of contact at MSF, ESG, NCSS for data fixes? | 🔲 Open | Not identified. MSF (37 blocked) and ESG (~19 blocked) are the highest priority. Xian Zhang is the bridge contact. |
| 7.3 | What is the agency's incentive to fix TypeTag or EndDate issues? | 🔲 Open | Not established. If agencies don't care, remediation stalls regardless of tooling. |
| 7.4 | Do agencies know CareerCompass is replacing OTG discovery? | ✅ Answered | Yes — pilot agencies are confirmed (PSD, ESG, MDDI, URA, MCCY, CAAS). They are in-scope for MVP. Source: I-001, `otg-ingestion-brief.md`. |

---

## Theme 8: Upload module vs scheduler — what are we building?

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 8.1 | If the OTEP-348 scheduler is built, does the upload module become redundant? | ✅ Answered | Not redundant — upload module is for admin-triggered imports and edge cases. Scheduler handles automated recurring sync. Different use cases. Source: OTEP-348 description. |
| 8.2 | Is the upload module a transitional tool (pre-scheduler) or permanent capability? | 🔲 Open | Not decided. Affects how much investment it warrants. Needs a call from Pow Hwee and Michelle. |
| 8.3 | What is the dependency order — upload module first, then scheduler? | ✅ Answered | Yes. OTEP-397 (upload) is in S4 scope. OTEP-348 (scheduler) is Backlog, blocked on C@G dedup (I-010). Source: sprint plan. |

---

## Theme 9: Are we solving the right problem?

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 9.1 | What is the admin's core pain today — no visibility into what will ingest, or something else? | 🔲 Open | Hypothesised as "no visibility." Not validated with a real admin. |
| 9.2 | Have we observed an admin doing this work, or are we designing from assumption? | 🔲 Open | No observation session has happened. OTEP-397 spike should include this. |
| 9.3 | Is there a pain before upload (getting the export from OTG) that we're ignoring? | 🔲 Open | Unknown. If exporting from OTG is itself painful or error-prone, solving the upload UI alone won't fix the workflow. |

---

## Theme 10: Scope boundaries

| # | Question | Status | Answer / Source |
|---|---|---|---|
| 10.1 | Is agency self-service upload (agencies upload their own records) in future scope? | 🔲 Open | Not decided. If yes, the current admin-only design needs to leave the door open. |
| 10.2 | Is editing skipped records in the UI ever in scope? | ✅ Answered | No. Source data fixes happen upstream in OTG. The upload module surfaces skips but does not let admins patch data. Source: ingestion brief — hard-skip rule, no partial imports. |
| 10.3 | Are notifications and alerts (failed upload, schema drift) in scope for MVP? | 🔲 Open | Not scoped. OTEP-403 covers logging. Whether alerts surface to admins via email/Slack is not decided. |
| 10.4 | Is schema drift validation (warn admin if OTG export structure has changed) in scope? | ✅ Answered | Yes, as fail-loud rejection. Agreed in trio prep — reject file with clear error rather than silent best-effort parsing. Source: 2026-06-12 trio prep. |
| 10.5 | Is a catalogue preview (how many records will ingest before publish) in scope? | ✅ Answered | Yes — this is the Review step in the wizard. Contingent on OTEP-192 supporting a catalogue preview mode. Confirm with Léo. Source: upload user journey in `otg-ingestion-brief.md`. |

---

## Summary

| | Count |
|---|---|
| ✅ Answered | 11 |
| 🔲 Open — needs research or stakeholder confirmation | 19 |
| **Total** | **30** |

**Priority open questions to close before scoping OTEP-397 build stories:**
1. Who is the named DevOps admin for the soft-launch? (1.2)
2. Does OTEP-192 support catalogue preview mode? Confirm with Léo. (10.5)
3. What does the admin do with the skip report — and who owns the agency follow-through? (5.4)
4. Is there a rollback path if bad data is published? (6.4)
5. What triggers a re-upload — and who decides? (4.3)

---

*Last updated: 2026-06-12. Tick off questions as answers are confirmed. Update source column with the meeting or artefact that closed each question.*
