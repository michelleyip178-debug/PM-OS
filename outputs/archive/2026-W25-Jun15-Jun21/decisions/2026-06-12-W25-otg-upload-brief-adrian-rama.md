---
title: OTG Upload Module — Programme Brief
date: 2026-06-12
owner: Michelle Yip
audience: Adrian Ang (Product Owner), Rama Moorthy (Delivery Lead)
purpose: Alignment on scope, operational model, resourcing, and change management for the OTG upload module (OTEP-397)
---

# OTG Upload Module — Programme Brief

**What we need from this conversation:**
1. Confirm the operational model — who owns the fortnightly upload cadence after go-live
2. Confirm the migration lead — who owns the agency migration journey from OTG to CareerCompass
3. Agree the MVP scope call — launch with manual import or build the upload wizard before go-live

---

## What this is

The OTG upload module is the bridge between OTG (current platform) and CareerCompass (new platform) during the transition period. It allows a DevOps admin to upload OTG's Excel export into CareerCompass on a fortnightly basis — keeping the catalogue current until OTG decommissions in 2028.

It is not a one-time migration tool. It will run approximately 104 times over 2 years.

---

## Why it matters to the programme

### The catalogue is the product

CareerCompass is only as valuable as the opportunities inside it. An officer who logs in and sees 160 opportunities — mostly from PSD and a handful of pilot agencies — will form an impression on that first visit. If it feels thin, they won't come back. Word travels. Adoption stalls before it starts.

The upload module is what gets the catalogue from 160 to ~415 at launch. That 2.6x difference is not an engineering problem — it came entirely from three PM rule changes ratified on 12 Jun (StartDate optional for Jobs, Function display-only, TimeCommitment exempt for Jobs/Secondments). No new engineering required. The module surfaces those records.

**160 opportunities at launch is a credibility risk. 415 is a credible start.**

### The dual-system period is longer than anyone is planning for

CareerCompass goes live in Aug–Sep 2026. OTG decommissions in 2028. That's a minimum of 18 months — likely closer to 24 — where both systems are live and agencies are posting to both.

During this period, every agency that hasn't fully migrated to CareerCompass is invisible to officers unless the upload runs. In 2027, that will still be a significant portion of the public service. The agencies most likely to lag — larger agencies with more complex posting workflows, agencies that missed the pilot cohort — are also the ones with the most opportunities. If they're invisible on CareerCompass, officers go back to OTG. CareerCompass loses relevance before it's had a chance to establish itself.

The upload module is not a launch tool. It is the primary mechanism for maintaining CareerCompass's catalogue relevance for the next two years.

### It is the programme's only migration instrument

Without the upload module, there is no way to know how the migration is progressing. With it, every fortnightly run produces a skip report — a per-agency breakdown of what passed, what was blocked, and why. That skip report is, in effect, a migration health check. It tells the programme which agencies have clean data and are ready to move to direct posting, which agencies have data quality issues that need a fix session, and which agencies have gone quiet and need chasing.

No other artefact in the current programme plan provides this visibility. The upload module, operated well, is the migration tracker.

### It is the decommission evidence in 2028

When OTG closes, someone needs to demonstrate to the programme and to agencies that all live opportunities were either migrated to CareerCompass or properly closed. The upload module's run history — if built with a proper audit log — is that evidence. Each run is a timestamped record of what was in OTG at that moment, what was ingested, what was skipped, and why.

Without that log, the decommission audit is a manual reconstruction exercise. With it, it's a report.

### The risk of getting this wrong is quiet, not loud

The failure mode for this module is not a system crash. It's a slow degradation that nobody notices until it's too late. Skip rates climb as agency contacts turn over and data quality slips. The upload cadence becomes inconsistent when the named admin leaves. The catalogue thins. Officers stop finding relevant opportunities. Agencies stop hearing that their records are being missed. By the time someone connects the dots, 6–12 months of drift has accumulated.

This is why the operational model — named owner, runbook, escalation path, monitoring — matters as much as the product build. The code works. The question is whether the programme around it is set up to run it reliably until 2028.

---

## The dual-system period (2026–2028)

From go-live until OTG decommissions, two systems will be live simultaneously. Officers discover opportunities on CareerCompass. Agencies post opportunities on OTG and/or CareerCompass, depending on where they are in their migration.

The upload module manages this gap. Its value in this period:

| Value | What it means in practice |
|---|---|
| Officers see a full catalogue | Agencies still on OTG remain visible on CareerCompass |
| Migration progress is visible | Each upload's skip report shows which agencies have clean data and which haven't migrated yet |
| Agencies get a soft migration path | Agencies can continue posting to OTG while migrating at their own pace — no hard cutover |
| Decommission evidence exists | Run history provides an audit trail that all live opportunities were captured before OTG closes |
| Final drain is possible | The module handles the last few OTG exports when agencies are still mid-migration at decommission |

---

## What needs to be decided

### Decision 1 — Operational owner (programme decision)

The upload module needs a named person whose job includes:
- Running the fortnightly upload
- Reviewing the catalogue preview before publishing
- Forwarding skip reports to agency contacts
- Escalating when skip rates are unusually high

**Right now, this person does not exist.** "DevOps will handle it" is not sufficient — this is a recurring operational task that needs to be in a named person's job description before go-live.

**Ask for Adrian / Rama:** Who owns this operationally, and is it a DevOps function or a programme function?

---

### Decision 2 — Migration lead (programme decision)

In 2027, agencies will be in different states of migration — some fully on CareerCompass, some still on OTG, most in between. Managing that journey requires:

- A migration status tracker by agency
- A target date per agency, agreed with agency contacts
- Regular progress reviews
- Escalation when agencies are behind

This is a programme-level responsibility, not a product responsibility. Michelle can own the tool (skip reports, remediation data). She cannot own the agency relationships and migration commitments across 20+ agencies.

**Ask for Adrian / Rama:** Who is the migration lead? Is this an existing role, or does it need to be resourced?

---

### Decision 3 — MVP scope (product + programme decision)

Two options for launch:

**Option A — Launch manually, wizard as fast-follow**

DevOps runs the initial import directly using the ingestion engine (already built). No admin wizard at go-live. The wizard ships post-launch.

- Catalogue is live on day one with ~415 opportunities
- FortnightlyFortnightly cadence is operationally painful without the wizard — no skip visibility, no catalogue preview
- Acceptable as a launch state. Not acceptable as a sustained model

**Option B — Minimal wizard at launch**

Build the three-screen upload wizard (Drop → Preview → Publish) before go-live. Confirmed as 10–13 points if catalogue preview capability exists in the current ingestion engine (confirming with Léo this week).

- Admin has full visibility before publishing
- Skip report is downloadable from day one
- Fits in S5 (29 Jun–10 Jul) if scope is confirmed by S4 planning (15 Jun)

**Ask for Adrian / Rama:** Is the wizard a go-live requirement or a fast-follow? This affects S5 sprint allocation.

---

## Change management required

Four workstreams. Two are product-owned, two need programme ownership.

| Workstream | What it involves | Owner | When |
|---|---|---|---|
| Agency data quality briefing | Per-agency remediation session — "here are your blocked records and what needs fixing." OTEP_Remediation_Report_v3.xlsx is the artefact. | Michelle + Xian Zhang | Before go-live |
| DevOps admin runbook | Written operating guide for the upload module — normal run, error handling, escalation path | Michelle (author) + DevOps lead (owner) | Before first production run |
| Agency migration tracking | Migration status by agency, target dates, progress reviews | **Programme — needs a named lead** | From go-live through 2028 |
| Officer-facing comms | What officers need to know when opportunities come from OTG vs CareerCompass directly | Programme comms + product | Before go-live |

The two programme-owned workstreams have no named owner today. Without them, the tool works but the migration doesn't.

---

## Risks if programme gaps aren't closed

| Risk | Probability | Impact |
|---|---|---|
| Catalogue quality degrades silently in 2027 as agency contacts turn over | High | High — officers stop finding relevant opportunities |
| No audit trail for OTG decommission in 2028 | Medium | High — programme cannot demonstrate clean handover |
| Agencies don't fix source data because nobody chases them | High | Medium — skip rate stays elevated, catalogue stays thin |
| Upload module runs without a named owner when Michelle hands over | High | Medium — fortnightly cadence breaks, catalogue goes stale |

---

## What Michelle needs to move forward

| Item | Need | Timeline |
|---|---|---|
| Named operational owner for fortnightly upload cadence | Programme decision | Before S5 planning (28 Jun) |
| Named migration lead for agency journey | Programme decision | Before go-live |
| Option A vs B call for MVP scope | Product + programme decision | Before S4 planning (15 Jun) |
| Agency contacts at MSF, ESG, NCSS confirmed | Rama / Xian Zhang to facilitate | w/c 15 Jun |

---

## Supporting documents

| Document | What it covers |
|---|---|
| `outputs/analyses/2026-06-12-otg-upload-module-analysis.md` | Full scope analysis, sizing, operational risks, scope options |
| `outputs/analyses/2026-06-12-otg-upload-discovery-checklist.md` | 30 discovery questions, 11 answered, 19 open |
| `context-library/prds/otg-ingestion-brief.md` | 5-minute product brief on OTG ingestion including upload user journey |
| `context-library/decisions/otg-ingestion-decision-log.md` | All 18 ingestion decisions, ratified and open |
| `context-library/research/OTEP Ingestion Analysis/OTEP_Remediation_Report_v3.xlsx` | Per-agency blocked records for agency remediation sessions |

---

*Prepared by Michelle Yip, 2026-06-12. For discussion with Adrian Ang and Rama Moorthy.*
