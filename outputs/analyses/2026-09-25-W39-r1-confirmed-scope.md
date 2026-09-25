---
date: 2026-09-25
week: 2026-W39
type: scope-reference
scope: CareerCompass R1 (Opportunities Marketplace)
owner: Michelle Yip
status: confirmed, final
supersedes:
  - outputs/prds/2026-09-18-W38-r1-epic-one-pager.md
  - outputs/analyses/2026-09-25-W39-r1-scope-impact-mvp-conflict.md
related:
  - outputs/analyses/2026-09-16-W38-r1-risk-register.md
  - outputs/decisions/2026-05-29-W22-decisions-log.md (D-042 through D-048)
  - outputs/meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md
  - outputs/journey-maps/2026-09-23-W39-r1-scope-decision-opportunities.html
  - outputs/journey-maps/2026-09-25-W39-otep-opportunity-journeys-reference.html
---

# R1 Confirmed Scope

**This is the current state only.** For how we got here — three days, six status changes on STIPs & Gigs alone, plus a same-day reversal on how Internal Jobs is ingested — see the [R1 Risk Register](2026-09-16-W38-r1-risk-register.md) or the [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md). This doc doesn't repeat that trail. Every decision here is logged in the [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md), D-042 through D-048.

**The one-line version:** Compass centralizes discovery across STIPs & Gigs, Internal Jobs, IJR, and Secondment. Posting and applying stay exactly where they live today. R1 is a coexistence model, not a migration.

---

## Scope by type

| Type | Posting | Discovery | Apply |
|---|---|---|---|
| **STIPs & Gigs** | OTG, every agency, no exceptions | Native in Compass, WOG-wide | FormSG link extracted from the OTG posting, shown as the Apply button. No link → Apply disabled, "contact the poster" |
| **Internal Jobs** | Primarily HRPS/Cumulus (Cumulus pushes into HRPS upstream); some postings remain OTG-only | Native in Compass, **pulled directly from HRPS/Cumulus for the primary path, not via OTG** — WOG-wide catalog, agency-level ringfencing. OTG-only postings still surface, but with the weak, no-deep-link experience (see Apply) | Redirect to whichever system (HRPS or Cumulus) hosts the posting, with a specific deep-link. Direct ingestion means Compass can deep-link postings sourced from HRPS/Cumulus — HRPS API delivery (D-01) is the live dependency (R-07). **OTG-only postings keep the old landing-page-only redirect**, not resolved by this change |
| **IJR** | OTG, unchanged | Native in Compass, pulled via OTG, WOG-wide catalog, per-officer eligibility criteria respected | Redirect to OTG. Deep-link question still open for this type (R-07) |
| **Secondment** (non-SJR) | Hosting HR system | Native in Compass | Redirect to OTG or the hosting HR system |
| **SJR** (PSD's annual programme) | OTG | **Not in Compass** | **Not in Compass** — stays on OTG through the 2027 cycle, migrates ahead of 2028 |
| **CMM** | N/A | Read/view only — Compass surfaces competency data, doesn't create or manage it | N/A |
| **CAM** | Still unresolved — three-way conflict between the Mark-facing slide, one-pager, and confirmed-scope doc (R-15) | | |

**Population:** WOG-wide for every type where Compass does discovery, via POCDEX integration with WOG officer data. Not pilot-only. This has held since 23 Sep and is unaffected by any of the architecture changes above.

**No native apply or creation exists anywhere in Compass for R1**, for any type, any agency. Every apply path either stays where it already is (SJR, CMM) or redirects out of Compass (everyone else).

---

## What R1 actually builds

1. **A unified discovery catalog** — STIPs & Gigs, Internal Jobs, IJR, and Secondment postings pulled from OTG/HRPS/Cumulus into one WOG-wide browsing experience in Compass.
2. **Apply-signaling UI** — listing and detail views that make clear, before the officer clicks, whether Apply opens a FormSG link (STIPs & Gigs) or redirects to another system (everything else), plus the disabled-button/no-link fallback for STIPs & Gigs.
3. **CMM read/view surfaces** — competency data displayed for visibility and governance oversight, no creation or edit capability.

That's it. No native application forms, no applicant review tables, no in-app status tracking, no RBAC beyond platform-level module access.

---

## What R1 explicitly does not build

- Native posting/creation in Compass, for any type, any agency.
- Native in-app apply, for any type, any agency (including STIPs & Gigs pilot agencies — that carve-out was floated and withdrawn 25 Sep).
- Applicant review tables, offer/reject workflows, or any HR-side review UI inside Compass.
- SJR discovery, posting, or application of any kind.
- Cross-HR-system authentication (officers without access to a listing's host system still hit a dead end — open gap, R-24).
- Enforcement of the "one development programme at a time" policy (Rotation Guidebook, Annex A, Q12) — this is a policy constraint, not a platform feature (R-28).

---

## Still open — not scope questions, dependency and governance questions

| # | Question | Owner | Why it matters |
|---|---|---|---|
| R-07 | HRPS API delivery date for direct Internal Jobs ingestion (D-01, no date committed); can Compass deep-link a specific IJR/OTG posting, or only the landing page? Separately, how many internal jobs stay OTG-only and keep the weak, no-deep-link experience even after HRPS delivers | Michelle, Rama, Adrian | Internal Jobs' primary path has no ingestion source until HRPS's API lands — a harder blocker than the deep-link question, which still applies to IJR and to whatever share of internal jobs never leaves OTG |
| R-24 | No cross-HR-system authentication — what happens when an officer can't access the host system? | Michelle, Adrian | More central now that redirect is the primary apply mechanism for nearly everything |
| R-15 / CAM | Three-way conflict on whether CAM Integration is R1 scope | Michelle, Adrian | Needs resolving before any Mark-facing scope slide goes out again |
| D-047 | Does a new competency need WD approval? | Adrian (with Mark) | Mark and Xin Zhang disagree; affects whether WD needs a workflow outside Compass |
| D-046 / R-32 | Is ATS integration viable by 2027? | Adrian, Gek Khiang | Single point of failure for the entire discovery-only strategy — if ATS falls through, Compass may need native posting/workflow capability after all |
| R-12 | Effort estimate re-run against this final scope | Michelle, Adrian, Rama | Every prior estimate predates at least one of the six reversals — this should be the last pass |

---

## Known trade-offs, accepted deliberately

- **Duplicate postings are possible** if the same opportunity exists on multiple source systems — accepted rather than solved, to avoid the integration cost of deduplication.
- **The redirect experience is imperfect** — officers may need to re-authenticate and re-search once they land on OTG/HRPS/Cumulus, especially where deep-linking isn't available.
- **This defers OTG replacement, not solves it.** R1's simplicity comes from keeping OTG/HRPS/Cumulus as the systems of record. The harder questions — what replaces OTG posting, whether Compass eventually becomes a transaction platform — move to R2/R3 (see D-046, "decommissioning debt" risk, R-33).

---

*Source of truth for how these decisions were made: [R1 Risk Register](2026-09-16-W38-r1-risk-register.md). Source of truth for the decisions themselves: [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md), D-042–D-048. This document is a snapshot — if scope moves again, update it here, don't let it drift out of sync with the register.*
