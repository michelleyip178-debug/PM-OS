---
title: Impact Sizing — R1 Admin Portal (Form Builder, CV Relay Removal, Status Transparency)
date: 2026-09-10
week: 2026-W37
initiative: R1 Opportunities / Admin Portal
source: user-research-synthesis 2026-09-10-W37-r1-admin-portal-discovery.md
synthesized_by: Michelle Yip
status: draft — sizing on stated assumptions; needs pilot posting-volume data to firm up
---

# Impact Sizing: R1 Admin Portal

Sizing the three high-severity themes from the R1 admin-portal discovery: **Theme 2 (custom form builder)**, **Theme 3 (CV relay removal)**, **Theme 4 (status transparency)**.

CareerCompass is a non-commercial internal WOG platform. Impact is measured in **admin hours saved**, **channel consolidation** (postings no longer duplicated across OTG/FormSG/Careers@Gov), and **officer experience** (time-to-status), not revenue.

---

## Inputs and baseline

| Input | Value | Source | Confidence |
|---|---|---|---|
| Pilot agencies | 6 (PSD, ESG, MDDI, URA, MCCY, CAAS) | Discovery §5 | High |
| Annual STIP + Gig sign-ups (WOG, all agencies) | 7,097 | `opportunities-listing.md` demand baseline | High (interest data, correlational) |
| Annual STIP + Gig vacancies (WOG, all agencies) | 4,752 | `opportunities-listing.md` | High |
| STIP sign-ups / vacancies | 6,411 / 4,056 | `opportunities-listing.md` | High |
| Gig sign-ups / vacancies | 686 / 696 | `opportunities-listing.md` | High |
| Pilot share of WOG postings | **Assumed ~15%** (6 agencies of ~90 WOG entities, pilot skews to more active agencies) | Estimate — **needs validation** | Low |
| FormSG baseline submission volume | Not pulled | Open item on `opportunities-listing.md` | Missing |
| Postings per pilot agency per month | Not measured | **Key gap** | Missing |

**Derived pilot-scope estimates (expected case):**
- Pilot annual vacancies (STIP + Gig): 4,752 x 15% ≈ **710/year ≈ 60/month across 6 agencies** (~10/agency/month)
- Pilot annual applications (STIP + Gig): 7,097 x 15% ≈ **1,065/year ≈ 90/month**

These two numbers drive everything below. Both rest on the 15% assumption — the single biggest unknown.

---

## DATA UPDATE — 2026-09-10: OTG posting volume received

Source: OTG data (`gigs_v2_report` label is a misnomer), counted by LocationName (agency) and DateCreated (posting month).

**Scope, corrected 2026-09-10:**
- **OTG channel only.** Postings agencies created directly in FormSG or Careers@Gov are **not** in this count.
- **Includes STIPs, Internal Jobs, SJRs, and Gigs** — the full set of OTG-hosted opportunity postings, not Gigs alone.

### OTG opportunity postings per pilot agency, 2026

| | PSD | ESG | MDDI | URA | MCCY | CAAS | Total |
|---|---|---|---|---|---|---|---|
| Jan | 2 | 2 | – | – | – | – | 4 |
| Feb | 24 | 3 | – | – | – | – | 27 |
| Mar | 8 | 13 | – | – | – | – | 21 |
| Apr | 4 | 20 | 6 | – | 2 | – | 32 |
| May | 2 | 6 | 10 | – | – | – | 18 |
| Jun | 8 | 9 | 12 | 4 | 2 | 1 | 36 |
| Jul | 1 | 7 | 6 | 6 | – | 1 | 21 |
| Aug | – | 4 | – | – | – | – | 4 |
| Sep | 1 | 2 | – | – | – | – | 3 |
| **Total** | **50** | **66** | **34** | **10** | **4** | **2** | **166** |

### What the data says

| Metric | Value |
|---|---|
| Total pilot OTG postings (STIP+IJ+SJR+Gig), Jan–Sep 2026 (9 mo) | 166 |
| Monthly avg, Jan–Sep | ~18/month across 6 agencies |
| Monthly avg, Jan–Jul (fuller months; Aug=4/Sep=3 look like report lag) | **~23/month** |
| Peak month (Jun, all 6 agencies live) | 36 |
| Jun–Sep avg (all 6 agencies onboarded) | ~16/month |
| Annualised (Jan–Jul run rate) | **~270 OTG postings/year** |

### Reconciliation with the 15%-assumption estimates above

The corrected scope changes the read materially.

- This is **OTG-channel only**, and it's **all opportunity types** (STIP + Internal Job + SJR + Gig), not Gigs alone.
- The sizing's ~60 postings/month was meant to be STIP+Gig **across all channels**. This data says the 6 pilot agencies create **~16–23 postings/month on OTG**, all types combined.
- **OTG volume is a FLOOR, not the total.** The synthesis (Theme 1) established that agencies run one posting across OTG + FormSG + Careers@Gov. Whatever they post directly to FormSG or C@G is **on top of** this ~270/year. So total pilot posting volume is *higher* than 270/year — by an unknown multiple.
- **Net:** the sizing's 60/month combined figure is **plausible** — if OTG is roughly a third to a half of each agency's total posting activity, total pilot volume is ~500–800/year ≈ 45–65/month. But that split is now the key unknown, replacing "pilot = 15% of WOG."

### The MDDI signal — check this

MDDI shows **34 OTG postings** here (Apr–Jul), yet the synthesis says **MDDI abandoned OTG for FormSG**. Two possibilities, both worth confirming:
1. The abandonment is recent (post-Jul) or partial — MDDI still uses OTG for some types.
2. MDDI's *real* posting volume is well above 34, with most of it on FormSG and invisible to this report.

If (2), it's direct evidence that OTG data undercounts true posting volume — and a concrete data point for the R1 strategy doc: MDDI is already a full defector, and R1's job is to win them (and prevent the others following).

### Distribution findings that matter for the build

1. **OTG volume is concentrated in 2 agencies.** PSD (50) + ESG (66) = **70% of all pilot OTG postings.** MCCY (4) and CAAS (2) are negligible on OTG. Target the form-builder pilot and the FormSG-form pull at **PSD and ESG first** — caveat: this only reflects OTG behaviour; an agency light on OTG could still be heavy on FormSG (see MDDI).
2. **PSD is spiky** (24 in Feb, 1–2 most other months) — a cyclical batch exercise. ESG is steady (~6–13/month). ESG is the better steady-state pilot; PSD tests the batch-creation flow.
3. **Onboarding ramp is visible:** MDDI joined Apr, URA + CAAS Jun. All 6 only active from Jun. Use **Jun–Sep (~16/month)** as the "all-agencies-live" OTG run rate.
4. **Aug–Sep near-zero** — almost certainly report lag / incomplete extract. Confirm with whoever pulled the report before using Aug–Sep in any trend.

### Impact on the theme sizing

- **Theme 2 (form builder):** The relevant funnel is "postings that need a custom form." Custom forms are today built in **FormSG** — which is exactly the volume *not* in this OTG report. So this data doesn't directly size the custom-form funnel; it sizes the *OTG-hosted* postings that are the easier migration (they already use a structured create flow). The custom-form demand is in the FormSG numbers we still don't have.
- **Channel-consolidation claim:** the defensible framing shifts. Not "~270 postings/year stop needing a FormSG form" — rather, "~270 OTG postings/year could consolidate into CareerCompass, **plus** the FormSG/C@G volume on top." Pull the FormSG count to complete this.
- **Themes 3 & 4 (CV relay, status):** scale with *applications*, not postings. Unchanged — still need application counts.

### Revised de-risking priority

1. ✅ **OTG posting volume** — done (this section). ~270/year across the 6 pilot agencies, all types, OTG only.
2. **FormSG posting volume for the 6 pilot agencies** — now the top gap. This is where the custom-form demand (Theme 2) and the true "duplicative effort" number live. Ask each agency's HR POC, or check if there's a FormSG admin report.
3. **Careers@Gov posting volume for the 6 pilot agencies** — the third channel; completes the "one posting, three places" picture.
4. **Application counts per agency** (Themes 3 & 4) — still needed.
5. **Confirm the MDDI OTG-vs-FormSG split** — tells you how much OTG data undercounts, and it's a strategy-doc data point.
6. **Pull 3–5 real FormSG forms from PSD and ESG** — field types + template divergence (still valid; PSD/ESG are the OTG-heavy agencies, likely also active on FormSG).

---

## THEME 2: Custom Form Builder

### Usage funnel (per month, pilot)

| Stage | Count | Drop-off | Reason |
|---|---|---|---|
| New opportunity postings created | 60 | — | Derived pilot volume |
| Postings needing a custom form (not a standard template) | 24 | 60% | Gigs + some STIPs need role-specific questions; standard STIPs may not. Assume ~40% need custom. |
| Postings where creator uses CC form builder (vs. reverting to FormSG) | 17 | 30% | Adoption ramp: early builder v1 won't cover every field type; some fall back |
| Postings run fully in CC, no parallel FormSG form | 17 | — | = builder adoption |

### Impact

**Admin-time impact (primary):**
- Time to build a FormSG form from scratch per posting: **assume 45 min** (create form, set fields, test, wire webhook/notification) — Med-Low confidence, needs POC validation
- Time to configure a CC form builder form: **assume 15 min** (template + custom fields, no separate webhook wiring)
- Saving: 30 min/posting x 17 postings/month = **~8.5 admin-hours/month across pilot** = ~100 hours/year
- Plus: eliminates maintaining a separate FormSG form list and reconciling submissions back — hard to quantify, call it a further ~20%

**Channel-consolidation impact (primary — this is the strategic one):**
- 17 postings/month move from "posted on OTG + custom FormSG form" to "posted on CC only"
- Over a year: ~200 postings that would have been duplicative are single-channel
- This is the mechanism behind the R1 GTM claim "reduced duplicative effort"

**Adoption / switch impact:**
- The stated switch condition: stakeholders revert to FormSG without this. So the counterfactual for the whole R1 admin portal (Themes 1, 3, 4 all assume the flow is in CC) is: **without the builder, ~0% of custom-form postings stay in CC.** The builder isn't additive to the other themes — it gates them.

### Driver tree

```
Custom form builder ships (v1: flat custom fields)
    ↓
40% of pilot postings need custom forms → 24/month
    ↓
70% builder adoption (v1 field coverage) → 17 postings/month use it
    ↓
30 min saved/posting → 8.5 admin-hrs/month → ~100 hrs/year pilot
    +
17 postings/month become single-channel → ~200/year not duplicated
    ↓
Enables Themes 3 & 4 to live in CC at all (gate, not add-on)
```

### Confidence assessment

| Assumption | Confidence | De-risking action |
|---|---|---|
| Pilot = 15% of WOG postings → 60 postings/month | **Low** | Ask each of the 6 pilot HR POCs: how many STIP/Gig/Job postings did you create in the last 3 months? 1 question, 6 people. Do before grooming. |
| 40% of postings need a custom (non-template) form | **Low** | Pull 3–5 real FormSG Gig forms per pilot agency; count how many diverge from a standard template. Already a synthesis action. |
| 45 min to build a FormSG form, 15 min in CC builder | **Med-Low** | Time one POC doing each. Or ask 3 POCs to estimate. 30-min task. |
| 70% builder adoption in v1 | **Low** | Depends entirely on v1 field-type coverage vs. the real forms — resolved by the same FormSG-form pull. |

### Sensitivity

| Scenario | Pilot postings/mo | Custom-form % | Builder adoption | Admin hrs/yr saved | Single-channel postings/yr |
|---|---|---|---|---|---|
| Worst case | 30 | 25% | 50% | ~22 | ~45 |
| Expected | 60 | 40% | 70% | ~100 | ~200 |
| Best case | 100 | 55% | 85% | ~280 | ~560 |

The range is wide because three Low-confidence assumptions stack. **The FormSG-form pull + the 6-POC volume question collapse most of it.**

---

## THEME 3: CV Relay Removal ("Post-Box Burden")

### Usage funnel (per month, pilot)

| Stage | Count | Drop-off | Reason |
|---|---|---|---|
| Applications submitted (pilot) | 90 | — | Derived pilot volume |
| Applications where a CV is attached and needs to reach a hiring manager | 72 | 20% | Some Stibs/short events don't involve CV review |
| Applications currently relayed manually by a POC (download + email) | 72 | 0% | This is the current default for all of them |
| Applications routed in-portal after R1 (share-to-hiring-manager) | 58 | 20% | Some agencies keep manual relay during pilot; ramp |

### Impact

**Admin-time impact (primary):**
- Time for a POC to download a CV and email it to the hiring manager (per applicant, incl. context): **assume 4 min** — Med confidence
- For bulk exercises (SJR), POCs do this per applicant; "mass download" helps but the routing decision is still per-applicant
- Saving: 4 min x 58 applicants/month = **~3.9 admin-hours/month pilot** = ~47 hours/year
- **Plus the "mega huge Excel" reconciliation** the POC does alongside — not sized here, but it's real and recurring

**Security-risk impact (primary — qualitative):**
- Eliminates the officer-uploaded-CV-to-Google-Drive/SharePoint-link workaround for these 58/month
- Closes the .gov.sg-email access gap for non-.gov.sg agencies (flagged in discovery §2.3)
- Removes an uncounted number of CVs sitting in personal Drives with link-based access
- This is a data-classification win that a pilot security review will care about — arguably higher value than the hours

**Officer-experience impact (secondary):**
- Faster CV-to-hiring-manager handoff → shorter time-to-first-review → feeds Theme 4 (status)

### Driver tree

```
Native CV storage + in-portal share-to-hiring-manager
    ↓
80% of applications involve CV review → 72/month pilot
    ↓
80% routed in-portal (ramp) → 58/month
    ↓
4 min saved/applicant → 3.9 admin-hrs/month → ~47 hrs/year pilot
    +
58 CVs/month off personal Drives/SharePoint → data-classification risk closed
    ↓
Removes POC-as-relay: the single most repetitive admin task in the discovery
```

### Confidence assessment

| Assumption | Confidence | De-risking action |
|---|---|---|
| 90 applications/month pilot | **Low** | Same 15% assumption as Theme 2 — same fix (6-POC question, also ask application counts). |
| 4 min per manual CV relay | **Med** | Ask 3 POCs to time or estimate their per-CV download-and-email. Quick. |
| 80% of applications involve CV review | **Med** | Reasonable for STIP/Gig/Job; confirm which opportunity types skip CV review with WD. |
| 80% in-portal routing adoption | **Med-Low** | Depends on the Theme 5 access-model decision — if default is "HR screens first," routing is a one-click shortlist release, high adoption. If contested, lower. |

### Sensitivity

| Scenario | Apps/mo | CV-review % | In-portal adoption | Admin hrs/yr saved | CVs/yr off personal storage |
|---|---|---|---|---|---|
| Worst case | 45 | 70% | 50% | ~13 | ~190 |
| Expected | 90 | 80% | 80% | ~47 | ~700 |
| Best case | 150 | 90% | 90% | ~120 | ~1,460 |

**The hours are modest; the security-risk closure is the real case.** Frame this theme on data classification, not time.

---

## THEME 4: Status Transparency

### Usage funnel (per month, pilot)

| Stage | Count | Drop-off | Reason |
|---|---|---|---|
| Applications submitted (pilot) | 90 | — | Derived pilot volume |
| Applications that currently get no status update until exercise close | 90 | 0% | This is the current state for all — that's the problem |
| Applications where HR/owner sets a status in R1 | 72 | 20% | Ramp; some exercises still batch-close |
| Applicants who receive an automated notification | 72 | 0% | Automated on status change |

### Impact

**Officer-experience impact (primary):**
- Current: officer waits **weeks** (SJR: entire cycle) with zero signal
- R1 target: status update within **≤ 24h** of hiring-manager action (matches `r1-seamless-application-draft.md` metric)
- Affected: ~72 applicants/month pilot ≈ **860/year** get timely status instead of silence
- Reduces "chase" emails to HR POCs (officer asking "any update?") — an uncounted inbound admin load

**Admin-time impact (secondary):**
- Fewer "what's my status" inbound queries. Assume each avoided query = 3 min POC time, assume 30% of silent applicants currently chase = 27/month x 3 min = **~1.4 hrs/month pilot**. Small.

**Platform-outcome impact (strategic):**
- The R1 north-star is "20% of onboarded officers apply for ≥1 opportunity through CareerCompass within 6 months." Silence-after-applying is a known reason officers disengage. Status transparency is a retention lever for the application behaviour the north-star measures. Not sized here — flag for `/feature-metrics`.

### Driver tree

```
Native applicant status states + auto-notification
    ↓
80% of applications get a status set (ramp) → 72/month pilot
    ↓
Officer notified within 24h of decision (vs. weeks of silence)
    ↓
~860 applicants/year get timely status
    +
Fewer "any update?" chase emails → ~1.4 admin-hrs/month
    ↓
Removes a known disengagement driver for the R1 north-star behaviour
```

### Confidence assessment

| Assumption | Confidence | De-risking action |
|---|---|---|
| 90 applications/month pilot | **Low** | Same 15% assumption — same fix. |
| 80% of applications get a status set by HR/owner | **Med-Low** | Behaviour change for HR — depends on whether setting status is one click in the flow they already use. Test in prototype. |
| SJR statuses can move before cycle close | **Low** | Open decision (Theme 4 open question / Theme 6). If SJR status stays gated by the program, this theme's SJR coverage drops to notification-at-close only. Confirm with WD. |
| 30% of silent applicants currently chase HR | **Low** | Ask POCs roughly how many status queries they field per exercise. |

### Sensitivity

| Scenario | Apps/mo | Status-set adoption | Applicants/yr with timely status | Admin hrs/yr saved (chase emails) |
|---|---|---|---|---|
| Worst case | 45 | 50% | ~270 | ~5 |
| Expected | 90 | 80% | ~860 | ~17 |
| Best case | 150 | 90% | ~1,620 | ~40 |

**Size this on officer experience and north-star retention, not admin hours.** The hours are negligible; the disengagement-driver removal is the point.

---

## Combined picture

| Theme | Primary impact | Expected-case magnitude (pilot, annual) | Confidence | Case rests on |
|---|---|---|---|---|
| **2. Form builder** | Channel consolidation + admin hours | ~200 postings single-channel; ~100 admin-hrs | Low overall | It's the **gate** — Themes 1/3/4 need the flow in CC |
| **3. CV relay removal** | Data-classification risk closed + admin hours | ~700 CVs off personal storage; ~47 admin-hrs | Med | Security review will value this |
| **4. Status transparency** | Officer experience + north-star retention | ~860 applicants get timely status | Med-Low | Removes a known disengagement driver |

**Priority order for R1 v1:**

1. **Form builder (Theme 2)** — not because its own numbers are biggest, but because it's the dependency. Without it, the stated behaviour is "revert to FormSG" and the rest of the admin portal has nowhere to live. Build the flat-custom-field v1.
2. **CV relay removal (Theme 3)** — pairs with the Theme 5 access decision. The security case is strong enough to carry it even though the hours are modest. Needs the access-model decision doc first.
3. **Status transparency (Theme 4)** — lower build complexity (internal state + notification), maps to an existing R1 metric, real officer-experience win. Can ship alongside or just after Theme 3.

---

## Strategic tie-in

- **R1 north-star** (`r1-seamless-application-draft.md`): "20% of onboarded officers apply for ≥1 opportunity through CareerCompass within 6 months." Theme 4 directly supports the *retention* side of this behaviour; Themes 2–3 make the admin side viable so there are opportunities worth applying to in-platform.
- **MVP channel-migration target** (`opportunities-listing.md`): "≥50% of STIP/Gig applications via OTEP by Month 3." Theme 2 is the admin-side lever for this — if HR keeps building FormSG forms, applications keep flowing to FormSG.
- **Counter-positioning** (`context-library/strategy/counter-positioning.md`): the incumbent bundle is OTG + FormSG + Careers@Gov + Excel. The form builder is the capability OTG structurally can't add fast (MDDI already left over it). That's the wedge for the R1 strategy doc.

---

## Recommendation

**Proceed with Theme 2 as the R1 admin-portal anchor. De-risk before committing scope and sequence.**

Three de-risking actions, all doable before R1 grooming, in rough priority:

1. **6-POC volume question** (1 question to each pilot HR POC: postings created + applications received, last 3 months). Collapses the 15% assumption that drives every number here. ~1 day of chasing.
2. **Pull 3–5 real FormSG Gig forms per pilot agency**, count field types and template divergence. Sizes the "40% need custom forms" and "70% builder adoption" assumptions and scopes the builder v1 field set. Already a synthesis action.
3. **Theme 5 access-model decision doc** — gates Theme 3's routing-adoption number and its sequencing.

Without action 1, this sizing is directional only — the sensitivity ranges span ~10x. With it, the priority order (2 → 3 → 4) is robust regardless, because Theme 2's gate role doesn't depend on volume.

---

## Next steps

- `/decision-doc` — line-manager access model (Theme 5), SJR/secondment marker (Theme 6)
- `/write-prod-strategy` — R1 admin portal position, using counter-positioning vs. OTG+FormSG+C@G
- `/feature-metrics` — Theme 4 north-star retention connection; set targets from the expected-case numbers here
- `/prd-draft` — R1 Admin Portal PRD (this sizing populates Strategic Fit)
- Data chase: 6-POC volume question; FormSG-form pull; FormSG baseline submission volume (Engineering, long-open)
