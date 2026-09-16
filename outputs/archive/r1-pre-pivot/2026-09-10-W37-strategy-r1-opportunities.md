---
title: R1 Opportunities — Product Strategy
date: 2026-09-10
week: 2026-W37
author: Michelle Yip
status: Draft — for Adrian / R1 grooming; supersedes the one-pager-in-progress
audience: Adrian Ang, Jace, R1 grooming attendees, WD co-creation session
horizon: R1 (through ~Q1 2027) with a line of sight to R4
scope: product-line strategy — R1 Opportunities (both Pathfinder workstreams)
related:
  - outputs/decisions/2026-09-10-W37-decision-r1-opportunity-type-scope.md
  - outputs/analyses/2026-09-10-W37-r1-opportunities-scope-frame.md
  - outputs/research-synthesis/2026-09-10-W37-r1-admin-portal-discovery.md
  - outputs/analyses/2026-09-10-W37-impact-sizing-r1-admin-portal.md
  - context-library/prds/r1-seamless-application-draft.md
  - outputs/prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md
  - context-library/strategy/counter-positioning.md
  - context-library/decisions/otg-ingestion-decision-log.md (D-016)
---

# R1 Opportunities — Product Strategy

## Executive Summary

CareerCompass MVP is a discovery board: officers browse STIPs and Gigs, then leave the platform to apply on FormSG, OTG, or Careers@Gov. R1's job is to turn it into a place where talent mobility actually happens — an officer finds an opportunity and applies and tracks it without leaving, and an HR team creates and manages that opportunity without stitching together four tools.

The strategy rests on one insight from discovery: **agencies abandoned OTG because they can't customise its forms, so they already run every posting across OTG + FormSG + Careers@Gov + Excel.** The pain isn't "no place to post" — it's "no place that does the whole job." R1 wins by being that place for the opportunity types where the pain concentrates (STIPs and Gigs), with a custom form builder as the wedge that ends the FormSG workaround. It deliberately does *not* try to own every opportunity type or replace OTG wholesale — Internal Jobs and SJRs are ingested read-only for now, and full native creation for all agencies stays an R4 goal.

**North Star:** share of pilot-agency STIP/Gig postings created and managed entirely in CareerCompass (no parallel FormSG form, no parallel OTG post) — target ≥60% within 3 months of R1 launch. This is the single number that says whether R1 broke the double-posting habit or just added another tool to the pile.

**TL;DR:**
- **Objective:** Move CareerCompass from "discovery board" to "the place mobility happens" for pilot agencies — measured by STIP/Gig postings that live entirely in CC.
- **Approach:** Three pillars — (1) native apply & track for STIPs/Gigs, (2) an admin portal with a custom form builder as the adoption wedge, (3) unified discovery across all types even where apply redirects.
- **Impact:** ~270+ OTG postings/year across 6 pilot agencies consolidate into CC, plus the FormSG/C@G volume on top; the HR "post-box" CV relay is removed; officers stop waiting weeks in application limbo.
- **The explicit no:** R1 does not own Internal Job / SJR creation, does not write back to OTG, does not replace OTG for the ~108,000 non-pilot officers.

---

## ⚠️ Open conflict to resolve before this strategy locks

The [7 Sep planning-review PRD](../prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md) and today's [type-scope decision doc](../decisions/2026-09-10-W37-decision-r1-opportunity-type-scope.md) disagree on two points. This strategy takes the decision-doc position; the conflict must be settled with Adrian first.

| Point | Planning-review PRD (7 Sep) | Type-scope decision doc (10 Sep) | This strategy |
|---|---|---|---|
| R1 cohort | WSG / PA / MSF ("run the platform as an internal marketplace") | 6 pilot agencies: PSD, ESG, MDDI, URA, MCCY, CAAS | Uses the 6-agency list (matches the OTG data, the admin synthesis, and MVP ring-fencing). **Confirm which cohort R1 actually serves.** |
| Internal Jobs / SJRs in R1 | First-class types, target ≥40% of R1 application volume | Ingested read-only, apply on OTG | Ingested read-only. If R1's cohort really is internal-marketplace agencies, this call flips — hence the conflict matters. |

**Why this strategy sides with the decision doc:** the OTG posting data, the admin-portal research, and MVP ring-fencing all use the 6-agency pilot. The planning-review PRD's WSG/PA/MSF framing may be an earlier rollout assumption that moved. If it hasn't moved, the type-scope call needs redoing. **This is question 1 for Adrian.**

---

## 1. Objective

### Mission
Make CareerCompass the place where a pilot-agency officer finds their next opportunity and applies for it, and where the HR team that posted it manages the whole thing — without either of them leaving the platform.

### North Star Metric
**Share of pilot-agency STIP/Gig postings created and managed entirely in CareerCompass** (no parallel FormSG form, no parallel OTG post).

- **Current:** ~0% (MVP has no creation; all STIP/Gig apply redirects to FormSG)
- **Target:** ≥60% within 3 months of R1 launch
- **Why this metric:**
  - *Captures user value:* an HR team only stops double-posting when CC genuinely does the whole job — creation, custom form, applicants, status. The metric can't move without the pain being solved.
  - *Drives the outcome:* every posting that consolidates into CC is one where officers get native apply + tracking, which is the talent-mobility goal.
  - *The team can influence it:* it's a direct function of whether the form builder covers real agency needs and whether the create flow is genuinely easier than FormSG.

### Supporting metrics
| Metric | Current | Target |
|---|---|---|
| Officer application completion rate (native apply, STIP/Gig) | n/a (redirect only) | ≥ FormSG historical completion rate |
| Median time from hiring-manager decision → officer status notification | weeks (exercise-close only) | ≤ 24 hours |
| CVs routed to hiring managers in-portal vs. emailed by HR POC | 0% in-portal | ≥ 70% in-portal |
| Officers who apply for ≥1 opportunity via CC within 6 months (R1 north-star from `r1-seamless-application-draft.md`) | n/a | 20% of onboarded officers |
| Internal Job / SJR records ingested clean from OTG | n/a | ≥ 60% pass rate (reuse ingestion bar) |

### Guardrails (won't sacrifice for adoption)
- MVP STIP/Gig discovery funnel (listing → detail → apply) must not degrade — no filter clutter, no slower listing.
- Time-to-publish a posting in CC must not exceed the OTG baseline.
- No increase in unauthorized CV-access incidents (depends on the access-model decision).
- No CC→OTG write-back — the architecture line (D-016) holds regardless of adoption pressure.

---

## 2. Users

R1 Opportunities serves both sides of one loop. Design the shared objects (opportunity, application, status, form, CV) once.

### Segment 1: Government officer seeking an opportunity (the applicant)

- **Who:** Public officers in the 6 pilot agencies, looking for STIPs, Gigs, and (discoverable but apply-elsewhere) Internal Jobs / SJRs.
- **Size:** the pilot-agency officer population; the R1 north-star targets 20% applying via CC within 6 months.
- **Pain:** opportunities are fragmented across portals; after applying, weeks of silence with no status.
- **JTBD:** *When I'm looking for my next development move, I want to find every relevant opportunity in one place and know where my application stands, so I can act on my career without working informal networks or refreshing four sites.*
- **Current alternatives:** OTG (discovery, clunky), FormSG links passed around, Careers@Gov, word of mouth. None give a unified view or a status signal.
- **Success criteria:** one place to look; apply without re-entering data; a status that updates within a day of a decision.

### Segment 2: HR POC / host-agency coordinator (the poster)

- **Who:** Agency HR points of contact who create postings and manage applicants; also Functional Leads (job-family view), hiring managers (review CVs for their role), WOG admins (reporting).
- **Size:** OTG data shows ~270 postings/year across the 6 pilot agencies on OTG alone, concentrated in PSD + ESG (70%); FormSG/C@G volume is on top of that and not yet counted.
- **Pain:** one posting run across OTG + FormSG + Excel + SharePoint + email. The HR POC personally downloads and emails every CV to hiring managers ("the post-box burden"). No CV storage, no custom forms, no status updates — the reason MDDI left OTG for FormSG entirely.
- **JTBD:** *When I have an opportunity to fill, I want to post it once with the exact questions I need, see and route applicants without manual work, and report on outcomes, so I'm not stitching four tools together for every role.*
- **Current alternatives:** FormSG for custom forms, OTG for the listing, Excel for tracking, email for CV relay, SharePoint/Google Drive for CV storage.
- **Success criteria:** build a custom application form in minutes; applicants and CVs land in one place; a hiring manager can see the CVs for their role without HR emailing them; attendance/outcome reporting isn't a manual Excel roll-up.

### The loop
The poster creates the opportunity and its custom form, and manages applicants and status. The applicant discovers it, applies via that form, and tracks the status the poster sets. The **opportunity, application, form, CV, and status objects are shared** — one data model, two surfaces.

### Biggest friction points (from discovery)
| Friction | Impact today |
|---|---|
| No custom form builder | Agencies build FormSG forms per Gig → double-posting (the stated switch condition) |
| No CV storage / no in-portal routing | HR POC manually downloads + emails every CV; CVs sit in personal Google Drives |
| No real-time status | Officers wait weeks (SJR: whole cycle) with no signal |
| SJR ↔ Secondment definitional gap | WOG secondment reporting is "derivative" guesswork; can't convert an unfilled SJR to a general opportunity without recreating it |

---

## 3. Superpowers

CareerCompass is an internal government platform, not a commercial product, so "superpower" means durable structural advantage over the incumbent tools (OTG, FormSG, Careers@Gov), not market moat.

### Power 1: Counter-positioning against OTG (the incumbent can't follow)

**The advantage:** CareerCompass can offer per-posting custom application forms and native CV storage. OTG structurally cannot — and the reason is instructive.

**Why OTG can't copy it:**
- OTG is a mature platform on a contract to March 2028 with ~108,000 officers on it. Adding a form builder + CV storage + status engine is a rebuild, not a feature, and there's no mandate or runway to do it before the planned Oct 2027 cutover.
- OTG's role is being deliberately sunset. Investment goes to the replacement (CareerCompass), not the incumbent. Any OTG team that tried to build these would be building the thing they're being replaced by.
- **The tell:** MDDI already abandoned OTG for FormSG over exactly this gap. OTG watched a pilot agency leave and didn't (couldn't) respond.

This is textbook counter-positioning (`context-library/strategy/counter-positioning.md`): the incumbent won't adopt the better model because it contradicts their position — here, OTG's position is "the system being replaced."

**Evidence:** MDDI's defection; the 7 Sep finding that HR avoid OTG specifically for form customisation; OTG has no API and an Excel-only export.

### Power 2: The single source of officer data (cornered resource)

**The advantage:** CareerCompass consumes POCDEX (officer, employment, competency data) and CV/competency profiles natively. It can pre-fill applications, match opportunities to competencies, and show endorsed-vs-self-assessed competencies at a glance. FormSG can't — it's a generic form tool with no officer context. OTG can't — it doesn't store CVs or competency data.

**Why it's durable:** the POCDEX integration, the competency model, and the CV inference pipeline are built and are MVP infrastructure. A competing tool would have to replicate the entire officer-data spine. Within the WOG context there's no reason to build a second one.

**Evidence:** MVP already does POCDEX ring-fencing, competency profiles, CV inference. R1 apply flow can pre-fill from this; a FormSG form starts blank every time.

### Power 3: Mandate + the whole loop (process power)

**The advantage:** CareerCompass is the sanctioned WOG talent-mobility platform with a funded roadmap to own discovery → apply → track → manage → report as one system. No incumbent owns the whole loop — OTG does listing + basic apply, FormSG does forms, Excel does tracking, email does routing.

**Why it's durable:** the mandate is organisational, not technical — it can't be out-built. And owning the whole loop compounds: shared objects (one opportunity, one application, one status) make each part more useful than the equivalent standalone tool.

---

## 4. Vision

### Vision statement (R4 horizon, ~2027)

By the time OTG sunsets, CareerCompass is the only place any WOG opportunity is created, discovered, applied for, and tracked. An HR coordinator posts an internal job, a secondment, a gig or a rotation through one create flow, builds whatever custom questions that role needs, and never touches FormSG or Excel again. An officer sees every opportunity they're eligible for in one list, ranked by fit to their competencies, applies with a pre-filled form, and watches the status move from "applied" to "shortlisted" to "offered" in real time. WOG reporting on mobility reads straight from the system, not from reconciled spreadsheets. The question "where do I post this / where do I find this" stops being asked.

### R1 is the first third of that

R1 proves the loop for the two types where the pain is worst (STIP, Gig) and the segment that's onboarded (6 pilot agencies), while keeping the rest visible through ingestion. If the pilot agencies stop double-posting their STIPs and Gigs, the model is proven and R1.x/R4 extend it to Internal Jobs, SJRs, and the full WOG.

### What changes

| Today (MVP) | R1 | R4 vision |
|---|---|---|
| Browse STIPs/Gigs, apply on FormSG | Apply + track STIPs/Gigs natively in CC | Apply + track every opportunity type in CC |
| HR builds a FormSG form per Gig | HR builds a custom form in CC's form builder | Same, for all types |
| HR emails each CV to hiring managers | Hiring managers view CVs in-portal | Same |
| Weeks of application silence | Status updates ≤ 24h of a decision | Same |
| Internal Jobs/SJRs: not in CC | Internal Jobs/SJRs: discoverable in CC, apply on OTG | Internal Jobs/SJRs: native in CC |
| WOG secondment count: derived from agency-code comparison | (unchanged in R1) | Read from a dedicated marker |
| OTG live for everyone | OTG live for ~108k non-pilot officers | OTG sunset |

---

## 5. Strategic Pillars

### Pillar 1: Native apply & track for STIPs and Gigs

**What:** An officer applies for a STIP or Gig inside CareerCompass — a form (custom per posting), submitted natively, with a status they can see — and never redirects to FormSG.

**Why:** This is the core of `r1-seamless-application-draft.md`. Without native apply, R1 is "MVP with better filters." STIPs and Gigs are the types the pilot agencies actually post (OTG data) and where form-customisation pain concentrates.

**How we'll win:**
- Native application submission for STIP/Gig, pre-filled from POCDEX/profile data (Power 2).
- Native applicant status model (applied / shortlisted / not progressing / interview / offered) with automated officer notification — low integration lift, maps to the existing R1 status-latency metric.
- Defer two-way ATS status sync to post-R1 (heavy integration; native status covers the pilot).

**Success looks like:**
- Application completion rate ≥ FormSG baseline.
- Status notification ≤ 24h of hiring-manager action.

### Pillar 2: The admin portal, with the custom form builder as the wedge

**What:** HR POCs create and manage postings in CC — build a custom application form, see and route applicants, set status, store CVs — for STIPs and Gigs.

**Why:** The form builder is the single stated condition for agencies to stop using FormSG (admin synthesis Theme 2; 7 Sep thread). Everything else in the portal (CV storage, applicant routing, status) only matters if the create flow lands them in CC in the first place. This pillar is what makes the North Star move.

**How we'll win:**
- **Form builder v1:** flat custom fields (no branching yet), field set scoped from real FormSG Gig forms pulled from PSD + ESG (where 70% of volume is).
- **Kill the post-box burden:** native CV upload/storage + an in-portal "share with hiring manager" action (scoped view, no full admin rights) + "Download All CVs" for bulk cases.
- **Template-based creation, not full free-form** — covers the custom-question pain without rebuilding OTG's entire authoring surface (keeps R1 inside the R4 boundary; flag to Mark/GK if it crosses the 9 Jul "A+B+C floor").
- Extend MVP ring-fencing (OTEP-127) to per-posting agency / job-family / function scoping.

**Success looks like:**
- North Star ≥ 60% (STIP/Gig postings entirely in CC).
- ≥ 70% of CVs routed in-portal, not emailed.

### Pillar 3: Unified discovery across all types, even where apply redirects

**What:** Every opportunity type — including Internal Jobs and SJRs ingested read-only from OTG — is discoverable, filterable, and competency-matchable in one CC list. Apply redirects for the ingested types; discovery does not.

**Why:** The MVP unified-listing hypothesis (consolidation lifts discovery and mobility) extends to types R1 doesn't natively own. An officer should see the internal job even if they finish applying on OTG. This also keeps R1's scope honest — we're not pretending to own creation for types we haven't done discovery on (PCG / Megan Yeo).

**How we'll win:**
- Reuse the MVP ingestion pipeline for Internal Jobs / SJRs from OTG (pending OTEP-578 spike confirming an ingestible feed).
- Listing stub for ingested types: full detail + "apply on OTG" link, no native form, no data write-back.
- Careers@Gov stays a deep-link (unchanged).
- Competency match ratio on the detail page (deferred from MVP) applied across all discoverable types.

**Success looks like:**
- Internal Job / SJR records ingest ≥ 60% clean.
- Officer-reported clarity on opportunity type and eligibility ≥ 3.5/5.

### What we're NOT doing (non-goals)

| Non-goal | Why we considered it | Why not |
|---|---|---|
| **Native create + apply for Internal Jobs and SJRs** | The 7 Sep planning-review PRD wanted them first-class; internal-marketplace agencies live on these types | PCG/Megan Yeo discovery hasn't happened; SJR is a coordinated program (nomination, cycle logic), not a form; engineering is VAPT-bound through November. Ingest now, go native in R1.x/R4. **Contingent on resolving the cohort conflict above.** |
| **CC→OTG write-back sync** | Would give CC-authored postings OTG-side reach for non-pilot officers | Contradicts D-016 (one-time port, no ongoing sync) and the OTG architecture. Agencies can post to OTG themselves as a deliberate per-role choice. |
| **Replacing OTG for non-pilot agencies** | It's the eventual goal | R4. ~108k officers stay on OTG until Oct 2027 cutover. R1 coexists with a live OTG. |
| **Full free-form opportunity authoring** | Maximal flexibility for HR | R4. R1 template-based creation covers the real pain (custom application questions) at a fraction of the build. |
| **Two-way ATS status integration** | Cleaner status for roles managed in an external ATS | Heavy integration. Native status covers the pilot; revisit post-R1. |
| **The SJR/secondment data-model fix** (dedicated marker) | Fixes WOG reporting; surfaced in both discovery docs | Real, but it's a WOG-reporting improvement, not an R1 adoption blocker. Separate decision doc; sequence into R1.x. |
| **Interview scheduling, endorsed-vs-self competency view, automated attendance** | All named in discovery | Fast-follows. Discrete add-ons on top of the Pillar 1–2 foundation; email scheduling and manual reporting are tolerable workarounds short-term. |

---

## 6. Impact

### User impact

**Applicants (officers):**
- Every pilot-agency officer applying for a STIP/Gig gets native apply + a status signal instead of a FormSG redirect and weeks of silence. R1 north-star: 20% of onboarded officers apply via CC within 6 months.
- Time-to-status drops from weeks (or a full SJR cycle) to ≤ 24h of a decision.

**Posters (HR POCs, ~6 agencies):**
- The post-box burden goes away: ~70%+ of CVs routed in-portal instead of manually downloaded and emailed. Modest hours (~50/year pilot) but a real data-classification win — CVs off personal Google Drives.
- The FormSG-per-Gig workaround ends for adopting agencies: ~270 OTG postings/year (plus uncounted FormSG volume) consolidate into one create flow.

### Business / programme impact

Non-commercial, so "impact" = channel consolidation + admin efficiency + mobility outcome, not revenue.

```
R1 Opportunities succeeds
    ↓
North Star: ≥60% of pilot STIP/Gig postings live entirely in CC
    ↓
    ├─→ Driver 1: form-builder adoption on new STIP/Gig postings ≥60%
    │       ↓
    │       ├─→ Pillar 2 form builder covers real FormSG field needs (PSD+ESG forms)
    │       └─→ Create flow is genuinely faster than FormSG (~30 min saved/posting)
    │
    ├─→ Driver 2: officers use native apply (completion ≥ FormSG baseline)
    │       ↓
    │       └─→ Pillar 1 native apply + POCDEX pre-fill removes re-entry friction
    │
    └─→ Driver 3: officers don't disengage after applying
            ↓
            └─→ Pillar 1 status model → ≤24h notification removes the limbo
    ↓
Outcome: talent mobility moves through CC for the pilot → R1.x/R4 extends to all types + all WOG
```

**Consolidation figure for the strategy narrative:** ~270 OTG postings/year across the 6 pilot agencies, **plus** the FormSG and Careers@Gov volume (not yet counted — top data gap). Pull the FormSG number to complete this.

**Cost to execute:** Pillar 1 (native apply + status) + Pillar 2 (template form builder + CV storage/routing) is the core R1 build. Pillar 3 (ingestion) reuses the MVP pipeline + a listing stub. Fits the R1 window *if* engineering capacity frees post-VAPT (~early Oct — confirm with Rama). Single designer (Li Ting) is a constraint on Pillar 2's build pace.

### Strategic value

- **Answers Adrian's scope challenge** — R1 owns STIP/Gig creation because that's where the form-customisation pain is; it doesn't own everything, and that's deliberate.
- **Proves the counter-positioning** — if pilot agencies stop double-posting, CC has demonstrably done what OTG structurally can't.
- **De-risks the OTG cutover** — R1 is the evidence base for whether the replacement works before the 2027 sunset commits.

### Confidence & risks

| Confidence | On |
|---|---|
| **High** | The pain is form customisation (multiple independent sources); STIPs/Gigs are the pilot-agency posting volume (OTG data). |
| **Medium** | The 60% North Star target — no FormSG baseline yet; depends on form-builder v1 field coverage. |
| **Low** | Pilot posting volume beyond OTG (FormSG/C@G uncounted); whether OTG exposes an ingestible IJ/SJR feed (OTEP-578 pending); R1 engineering capacity timing. |

| Key risk | P × I | De-risking |
|---|---|---|
| Cohort conflict unresolved (WSG/PA/MSF vs 6 pilot agencies) | Med × High | Question 1 for Adrian this week — the whole type-scope call depends on it |
| Form-builder v1 misses real agency fields → agencies keep using FormSG | Med × High | Field set scoped from real PSD+ESG FormSG forms before build; usage-rate metric watched from week 1; fast-follow additions |
| OTEP-578 spike: no ingestible IJ/SJR feed | Med × Med | Fall back to deep-link listing stub for those types; STIP/Git strategy unaffected |
| Engineering capacity doesn't free post-VAPT | Med-High × High | Confirm with Rama; if later, phase Pillar 1 (STIP native first, Gig second) |
| Template-based creation crosses the SteerCo "A+B+C floor" | Med × Med | Flag to Mark/GK via Adrian now, not at grooming |

---

## 7. Roadmap

### Now (0–3 months) — fixed once the type-scope decision and cohort conflict are confirmed

| Initiative | Pillar | Target | Owner | Status |
|---|---|---|---|---|
| Resolve cohort conflict (WSG/PA/MSF vs 6 pilot) + confirm type-scope matrix | — | Adrian sign-off before 5 Oct | Michelle | Decision doc sent |
| OTEP-578 spike: OTG ingestible feed for IJ/SJR + CC→OTG feasibility | 3 | Spike read at Sprint 9 sync | Pow Hwee | Pending |
| Pull 15–20 real FormSG/C@G forms from PSD + ESG; categorise fields | 2 | Consolidated-requests artefact + form-builder v1 field set | Michelle | Not started |
| WD co-creation session — STIP/Gig authoring transition plan | 2 | Held week of 22 or 29 Sep | Michelle + WD + Li Ting + Pow Hwee | Not scheduled |
| R1 Opportunities PRD (officer + admin, shared data model) | 1, 2, 3 | Groomed once dev capacity frees | Michelle + Imelda | After this strategy |
| First R1 brainstorm session (opportunity-type scope, native/ingested) | — | This week | Michelle + Pow Hwee + Li Ting | Overdue |

**Milestones:**
- **Wk of 15 Sep:** OTEP-578 read in; FormSG-form pull done; cohort conflict raised with Adrian.
- **Wk of 22–29 Sep:** WD co-creation session; type-scope matrix confirmed; PRD drafted.
- **Early Oct:** R1 dev capacity confirmed with Rama; R1 grooming.

### Next (3–6 months) — directional

Focus (subject to grooming and capacity):
- Build Pillar 1 (native STIP/Gig apply + status) and Pillar 2 (form builder v1 + CV storage/routing).
- Ingestion for IJ/SJR (Pillar 3) if OTEP-578 confirms a feed.

Decision points:
- **Post-VAPT (Nov):** does engineering capacity support Pillars 1 + 2 in parallel, or phased?
- **After PCG/Megan Yeo discovery:** do Internal Jobs / SJRs move from ingested to native for R1.x?
- **After FormSG baseline pull:** is the 60% North Star target right, or recalibrate?

### Later (6+ months) — exploratory

- **R1.x:** native Internal Jobs (pending PCG discovery); the SJR/secondment dedicated-marker data-model fix; form-builder branching logic; interview scheduling.
- **R4:** native creation for all opportunity types, all WOG agencies; OTG sunset; WOG mobility reporting straight from CC.
- **Research questions:** What do hiring managers actually do with CVs (missing voice in discovery)? What's the real FormSG + Careers@Gov posting volume? Does the counter-positioning hold — do agencies stay off FormSG once they've moved, or drift back?

### Trade-offs made

- **Native-all-types (planning-review PRD's preference):** considered because R1's cohort may be internal-marketplace agencies who live on Internal Jobs/SJRs. Not chosen because the discovery to do it well hasn't happened and engineering can't build it in the window — *unless the cohort conflict resolves toward WSG/PA/MSF, in which case this trade-off reopens.*
- **Discovery-only R1 (no native apply):** considered as the low-capacity fallback. Not chosen because it concedes R1 owns nothing on apply and leaves the adoption blocker untouched.
- **Owning the OTG relationship (write-back sync):** considered for non-pilot reach. Not chosen — contradicts D-016 and the architecture; agencies can post to OTG themselves.

---

## Appendix

### References
- [Type-scope decision doc](../decisions/2026-09-10-W37-decision-r1-opportunity-type-scope.md)
- [R1 Opportunities scope frame](2026-09-10-W37-r1-opportunities-scope-frame.md)
- [Admin-portal research synthesis](../research-synthesis/2026-09-10-W37-r1-admin-portal-discovery.md)
- [Admin-portal impact sizing](2026-09-10-W37-impact-sizing-r1-admin-portal.md)
- [Employment-lifecycle decision doc](../decisions/2026-09-10-W37-decision-employment-lifecycle-r1-scope.md)
- [R1 seamless-application draft PRD](../../context-library/prds/r1-seamless-application-draft.md)
- [R1 opportunity-scope planning-review PRD (7 Sep)](../prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md) — **cohort conflict**
- [OTG ingestion brief](../../context-library/prds/otg-ingestion-brief.md) + [decision log D-016](../../context-library/decisions/otg-ingestion-decision-log.md)
- [Counter-positioning framework](../../context-library/strategy/counter-positioning.md)
- [7 Sep STIP/Gig/OTG posting discussion](../meeting-notes/2026-09-07-W37-stip-gig-otg-compass-posting-discussion.md)

### Open questions for Adrian (in priority order)
1. **Cohort:** is R1's cohort the 6 pilot agencies (PSD/ESG/MDDI/URA/MCCY/CAAS) or WSG/PA/MSF? The type-scope call depends on it.
2. **Type-scope matrix:** approve native STIP/Gig + ingested IJ/SJR + redirect C@G, no write-back?
3. **Template vs. full creation:** does reducing R1 to template-based creation need to go back to Mark/GK (9 Jul "A+B+C floor")?
4. **"Application within CareerCompass" definition:** no redirects at all, or starts-in-CC? (Sets Pillar 1's boundary.)

### Next review
After the WD co-creation session and the OTEP-578 spike read — fold both into the R1 PRD and recheck the North Star target against the FormSG baseline once pulled.
