---
title: User Research Synthesis — R1 CareerCompass Admin Portal
date: 2026-09-10
week: 2026-W37
initiative: R1 Opportunities / Admin Portal
source: IA research + stakeholder interviews (prototype walkthrough), 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS)
source_doc: 2026-09-10-W37-r1-admin-portal-discovery-source.md
synthesized_by: Michelle Yip
status: draft — for WD jamming session (10 Sep) and R1 grooming
---

# User Research Synthesis: R1 CareerCompass Admin Portal

## Executive Summary

The discovery confirms a clear, well-evidenced problem: **the admin side of opportunity management is held together by manual workarounds because no single system does the whole job.** HR POCs run one posting across OTG, FormSG, Excel, SharePoint and email, and personally act as the CV relay between applicants and hiring managers. OTG's gaps (no CV storage, no status updates, no custom forms) are the specific reason agencies like MDDI left it for FormSG.

The MVP PRDs (`opportunities-listing.md`, `r1-seamless-application-draft.md`) are almost entirely officer-side. This research is the first structured look at the **admin/host-agency** experience, and it surfaces a portal scope the current R1 draft doesn't cover.

**Top 3 insights:**

1. **The custom form builder is the wedge, not a feature.** It's named the single most important capability, and stakeholders said plainly they'll revert to FormSG without it. This is the thing that determines whether R1 consolidates the workflow or just adds another place to post.
2. **HR POCs are a human integration layer.** The "post-box burden" (manually downloading and emailing CVs) and the SharePoint/Google Drive CV workaround exist because there's no CV storage and no way to route an applicant to a hiring manager inside a system. Removing the POC as a relay is the highest-leverage admin outcome.
3. **Two product decisions are unresolved and block clean scoping:** (a) the line-manager CV access model — gatekeeper vs. self-serve, and (b) whether SJR is a system marker or a program label, which determines the posting-status model and fixes WOG secondment reporting.

**Recommended actions:**

1. Build the custom form builder as the R1 admin-portal anchor. Size it with `/impact-sizing` before committing scope.
2. Resolve the line-manager access model and the SJR-marker question as written decisions before R1 grooming — draft both with `/decision-doc`.
3. Write the R1 admin-portal strategy (`/write-prod-strategy`) — the position is "the single place an opportunity lives and gets managed," and the form builder is how you kill the FormSG fallback.

**Sample caveat:** this is a prototype-walkthrough round across 6 pilot agencies, roles skewed to HR POCs and central teams (WD, DevOps). Weight it as directional, not saturated — see Missing Voices.

---

## Theme 1: Fragmented Tooling for a Single Posting

**Frequency:** Cross-cutting — described by HR POCs across multiple pilot agencies and by central WD/DevOps.

**Severity:** 😤 High — it's the daily workflow, and it's the reason MDDI abandoned OTG.

**Current workaround:** One posting is run across OTG (listing), FormSG (custom application form), Excel ("mega huge" spreadsheets for vacancies/interest/attendance), SharePoint or personal Google Drive (CV storage), and email (the "flyer" to all HRLs).

### The problem
There is no single system that handles create → collect → screen → track → report for an opportunity. Each tool covers one slice, so HR POCs stitch them together by hand for every posting. Agencies that post directly to OTG without going through the central DevOps team see lower engagement because they miss the bi-weekly WOG EDM, so even the "official" channel doesn't stand on its own.

### Supporting evidence
- HR Managers "juggle" OTG, FormSG, Excel, SharePoint and email "flyers" to manage a single posting. (Executive summary)
- MDDI abandoned OTG in favour of FormSG because OTG lacks CV storage, automated status updates, and custom forms. (Takeaways; §2.3)
- Direct OTG posts see lower engagement than EDM-curated ones. (§2.2)
- Stibs/Gigs vacancies, interest and attendance tracked in "mega huge" Excel spreadsheets for HCS reporting. (§2.2)

### Recommended solution
**Build:** the R1 admin portal as a single create-to-report surface, with the custom form builder (Theme 2) as the anchor that removes the FormSG dependency.

**Why:** the fragmentation is downstream of missing capabilities (custom forms, CV storage, status updates). Add those three and the workaround chain collapses.

**What NOT to build:** a static form template with fixed fields. Stakeholders said explicitly they'd stay on FormSG if that's all R1 offered — a template doesn't move the workflow.

**Success metrics:**
- Primary: % of pilot-agency postings run end-to-end in CareerCompass (no parallel FormSG form, no parallel OTG post).
- Guardrail: time-to-publish a posting doesn't increase vs. the OTG baseline.

**Open questions:**
- [ ] What is the actual posting volume per pilot agency per month? Needed to size this. — @HR POCs / WD
- [ ] Does the bi-weekly EDM stay as the demand driver, or does R1 need its own distribution mechanism? — @DevOps / WD

---

## Theme 2: The Custom Form Builder Is the Adoption Wedge

**Frequency:** Named as the single most important feature in the prototype walkthrough.

**Severity:** 😤 High — it's the stated switch/no-switch condition.

**Current workaround:** FormSG, built fresh per Gig for role-specific technical questions.

### The problem
Gigs need bespoke application questions (technical screening, availability, project-fit). A one-size template can't hold that, so HR POCs build a FormSG form every time, which pulls the whole application flow out of CareerCompass and back into the fragmented state (Theme 1). The form builder isn't a nice-to-have — it's the capability that decides whether R1 owns the application flow.

### Supporting evidence
- "A custom form builder within CareerCompass is identified as the single most important feature to eliminate the need for external tools like FormSG." (Executive summary)
- "Users noted they would likely revert to FormSG if CareerCompass only offered a static template." (§4.1)
- Directly consistent with the MVP decision (12 March 2026) to replace FormSG as the front-door with an OTEP-hosted application flow. (`opportunities-listing.md`)

### Recommended solution
**Build:** a custom form builder for the "create opportunity" flow — configurable question types, required/optional, per-opportunity. Scope the v1 field types against what FormSG forms actually use today (pull 3–5 real Gig forms from pilot agencies).

**Why:** it's the root cause of the FormSG fallback and it's already the direction of a locked MVP decision.

**What NOT to build (v1):** conditional/branching logic, scoring/auto-ranking. Get flat custom fields working first; branching is a fast-follow if the real forms need it.

**Success metrics:**
- Primary: % of new Gig/opportunity postings using the CareerCompass form builder instead of a new FormSG form.
- Guardrail: form-completion rate for applicants stays ≥ the FormSG baseline (pull the baseline — it's an open item on `opportunities-listing.md`).

**Open questions:**
- [ ] Which FormSG field types and validations are actually in use across pilot-agency Gig forms? — @HR POCs
- [ ] FormSG pre-fill / URL-param parity (open item #14 with Pow Hwee) — still unresolved; does the builder need it? — @Pow Hwee

---

## Theme 3: HR POCs as a Human Integration Layer ("The Post-Box Burden")

**Frequency:** Described as standard practice for HR POCs across pilot agencies.

**Severity:** 😤 High — it's manual, repetitive, and creates security exposure.

**Current workaround:** POC downloads each CV, emails it to the hiring manager. CVs themselves are stored via officer-uploaded Google Drive / WOG SharePoint links pasted into form fields.

### The problem
Because there's no CV storage and no way to route an applicant to a hiring manager inside a system, the HR POC becomes the relay. Every application is a manual download-and-forward. The CV-link workaround also breaks for agencies without .gov.sg emails, who can't open the SharePoint links.

### Supporting evidence
- "HR Points of Contact (POCs) often act as administrative intermediaries, manually downloading and emailing CVs to hiring managers due to lack of direct system access and integrated CV storage." (Executive summary)
- "Officers upload CVs to personal Google Drives or WOG SharePoint folders and paste the links into form fields. This creates security and access issues for agencies without .gov.sg emails." (§2.3)
- "Strong desire for a 'mass download' feature or a seamless way to 'relay' applicants to line managers within the portal." (§2.3)

### Recommended solution
**Build:** (1) native CV upload + storage on the application, (2) an in-portal "share with hiring manager / opportunity owner" action that grants scoped view access without full admin rights, (3) "Select All" + "Download All CVs" for the cases where bulk export is still needed.

**Why:** removes the POC-as-relay step, which is the single most repetitive admin task, and closes the SharePoint-link security gap.

**What NOT to build:** a full ATS. The job is "get the right CV to the right hiring manager without email," not applicant-tracking-system parity.

**Success metrics:**
- Primary: reduction in CVs manually emailed by POCs (self-reported in pilot, or count of "share to hiring manager" actions as the proxy).
- Guardrail: no increase in unauthorized CV access incidents — depends on the access model in Theme 5.

**Open questions:**
- [ ] Does "share to hiring manager" need an audit trail for compliance? — @Security / WD
- [ ] Retention policy for stored CVs? — @Security / data classification

---

## Theme 4: Applicants Left in Limbo — No Status Transparency

**Frequency:** Called out for SJR explicitly; the general pattern applies across types.

**Severity:** 😤 High for officer experience — weeks of silence; it's a stated reason talent mobility stalls.

**Current workaround:** None. HR cannot notify unsuccessful candidates until the entire exercise closes and a final candidate is confirmed.

### The problem
The system doesn't support real-time status changes, so officers who applied hear nothing for weeks. For SJR this is structural — the cycle has to fully close first. This directly undercuts the R1 north-star intent (officers applying and tracking progress in one place).

### Supporting evidence
- "Officers are often left 'hanging' for weeks. The system does not allow HR to notify unsuccessful candidates until the entire exercise is closed and a final candidate is confirmed." (§2.1)
- Requirement: "A feature to 'reject' or 'shortlist' candidates in real-time, triggering automated notifications so applicants are not left uninformed for months." (§4.2)
- Aligns with `r1-seamless-application-draft.md` success metric: "Application status update latency ≤ 24 hours of hiring manager action."

### Recommended solution
**Build:** applicant status states (applied / shortlisted / not progressing / interview / offered) that HR or the opportunity owner can set per applicant, with automated notification to the officer on change.

**Why:** it's a named requirement, it maps to an existing R1 success metric, and it's low integration lift (internal state + notification) compared to webhook-based ATS status sync.

**What NOT to build (v1):** two-way sync with external ATS status. That's the heavier `r1-seamless-application-draft.md` open question; native status covers the pilot.

**Success metrics:**
- Primary: median time from hiring-manager decision to officer notification (target ≤ 24h, per R1 PRD).
- Guardrail: % of applicants who reach a terminal status (not left in "applied" indefinitely).

**Open questions:**
- [ ] For SJR specifically, can status move before cycle close, or is "not progressing" still gated by the program? — @WD / Functional Leads
- [ ] What status vocabulary do agencies already use? Match it rather than inventing one. — @HR POCs

---

## Theme 5: The Line-Manager Access Conflict (CONTRADICTION)

**Frequency:** Explicitly flagged as a tension in the interviews — HR POCs split.

**Severity:** 😕 Medium as pain, High as a design fork — it changes the permissions model.

### 🔴 Contradiction
- **Group A — reduce the admin work:** give line managers / hiring managers direct access to CVs and competencies for their roles, so HR isn't the relay (ties to Theme 3).
- **Group B — keep the gatekeeper:** insist on a preliminary HR screening layer so agency-level standards are met before CVs go to line managers.

### Why it matters
The R1 permissions model (`opportunities-listing.md` names HR POC, FL, Opportunity Owner, WOG Admin) has to pick a default. Build for A and Group B agencies feel they've lost control; build for B and you've kept the POC in the loop for every applicant.

### Recommended resolution
**Default to configurable per agency or per posting:** HR POC chooses at posting creation whether hiring-manager CV access is (a) immediate or (b) after HR screening. Ship with "after HR screening" as the default (the more conservative choice for a pilot), with a one-click "release to hiring manager" for the whole shortlist.

**Why:** preserves control where it's wanted, removes the manual relay where it isn't, and doesn't force a WOG-wide policy call that isn't yours to make.

**Open questions:**
- [ ] Is there a WOG-level policy on who can see officer CVs, or is it agency discretion? — @WD / PSD
- [ ] Does "released to hiring manager" need officer consent or notification? — @Security

**→ This needs a `/decision-doc` before R1 grooming.**

---

## Theme 6: SJR vs. Secondment — Definitional Gap Breaks Reporting

**Frequency:** Surfaced in interviews as a recurring source of confusion; named as a data-integrity problem for WOG.

**Severity:** 😕 Medium for daily users, High for WOG reporting accuracy and for the posting-status model.

### The problem
"Secondment" and "SJR" are used interchangeably but aren't the same: SJR is a coordinated program, secondment is the mechanism. WOG secondment numbers are currently derived by comparing parent vs. borrowing agency codes rather than read from a dedicated marker, so the reporting is approximate. Related: HR POCs can't switch a posting from "SJR" to a general "Opportunity" — if an SJR role doesn't fill in-cycle, they close it and create a brand-new entry for the open market.

### Supporting evidence
- "WOG data on secondments is inaccurate because it relies on a 'derivative' logic (comparing parent and borrowing agency codes) rather than a dedicated system marker." (§5)
- "Users cannot easily switch a posting from 'SJR' to a general 'Opportunity.' ... the HR POC must manually close the post and create a brand-new entry for the general market." (§2.3)
- Open question already live on `opportunities-listing.md`: "'Secondment' classification: BO to confirm if distinct type or sub-type of SJR."

### Recommended solution
**Build:** (1) a data model where opportunity *type* (SJR, Secondment, Internal Job, Gig, Stib) and *movement mechanism* (secondment) are separate attributes, with an explicit secondment marker set at posting or placement; (2) a posting-status transition that lets an unfilled SJR convert to a general Opportunity without re-creating the entry.

**Why:** the separate marker fixes WOG reporting at the source; the status transition removes a manual re-keying step and preserves the posting's application history.

**What NOT to build:** a rigid taxonomy that assumes every opportunity is exactly one type forever — the SJR→Opportunity flow shows types transition.

**Success metrics:**
- Primary: WOG secondment count read directly from the marker vs. reconstructed — variance closes.
- Secondary: # of SJR→Opportunity conversions done via transition (vs. close-and-recreate).

**Open questions:**
- [ ] BO / WD: is Secondment a distinct type or a sub-type of SJR, in policy terms? (This has been open since the MVP PRD — force a decision.) — @BO / WD
- [ ] Who sets the secondment marker and when — posting creation, or placement confirmation? — @WD

**→ This needs a `/decision-doc` — it's blocking the R1 data model.**

---

## Theme 7: Manual Reporting for Stibs & Gigs

**Frequency:** Described as standard for DevOps and host agencies.

**Severity:** 🤷 Low–Medium — painful quarterly/annually, not daily.

**Current workaround:** Excel templates emailed to DevOps; attendance and interest tracked in large spreadsheets; DevOps vets blurbs and competency mappings by hand.

### The problem
Vacancy, interest and attendance data lives in spreadsheets, and reporting to HCS is a manual roll-up. Host agencies have no way to mark attendance in-system.

### Supporting evidence
- "Vacancies, interest gathered, and attendance are tracked in 'mega huge' Excel spreadsheets for reporting to HCS." (§2.2)
- Requirement: "host agencies should be able to mark attendance directly in the system to simplify quarterly and annual reporting." (§4.3)

### Recommended solution
**Build (fast-follow, not v1 blocker):** in-system attendance marking for Stibs/Gigs and a basic reporting export (vacancies, sign-ups, attendance) that matches the HCS report shape. Note: `opportunities-listing.md` already has OTEP-296 "Prepare defined report format matching data model" (Michelle) — connect this to that.

**Why:** removes a recurring manual roll-up, but it's a reporting convenience, not an adoption blocker — lower priority than Themes 2–4.

**Open questions:**
- [ ] What exact fields does the HCS report need? Get the current template. — @DevOps
- [ ] Does OTEP-296's defined report format already cover this? — @Michelle (self)

---

## Theme 8: Competency Bank Misalignment

**Frequency:** Named for Statutory Boards specifically.

**Severity:** 😕 Medium — a manual mapping tax on every cross-bank posting.

**Current workaround:** "Best-effort" manual mapping between agency banks (Workday, HRPS) and the WOG standard.

### The problem
Different agencies use different competency banks. Mapping them to the WOG standard for matching and reporting is manual and imprecise. This also connects to the perf-test / matching risk track (label-based matching, MTI→METI agency renames) from the 9 Sep architecture review.

### Supporting evidence
- "Different agencies (especially Statutory Boards) use different competency banks (e.g., Workday vs. HRPS). Mapping these to the WOG standard is currently a manual, 'best-effort' task." (§2.3)
- Related MVP need already logged: "Backend mapping of opportunity competencies to competency bank (avoid inconsistencies)." (`opportunities-listing.md`)

### Recommended solution
**Build:** a canonical competency mapping table (agency bank → WOG standard) maintained centrally, applied at posting creation. This is the same fix direction as the code-based-ID / canonical-mapping approach from the architecture review — do it once, use it for matching and admin.

**Why:** removes per-posting manual mapping and de-risks the label-based-matching fragility flagged for the perf test.

**What NOT to build:** per-agency bespoke integrations to each HR system in R1 — a mapping table covers the pilot.

**Open questions:**
- [ ] Does a WOG-standard competency bank with mappings already exist somewhere in Core data? — @Rama / Core
- [ ] Who owns maintaining the mapping table as agencies change banks? — @WD / Core

---

## Themes We're NOT Prioritising for R1 v1 (And Why)

| Theme / request | Why deprioritised |
|---|---|
| Integrated interview scheduling (§4.2) | Real pain but a discrete add-on; email scheduling is a tolerable workaround. Fast-follow after the CV-relay and status problems are solved. |
| Endorsed vs. self-assessed competency view (§4.3) | Valuable for screening, but it's a display enhancement on top of the CV/competency access that Themes 3 & 5 deliver. Sequence it after access is settled. |
| Two-way ATS status sync (`r1-seamless-application-draft.md` open Q) | Heavy integration lift. Native status (Theme 4) covers the pilot; revisit post-pilot. |
| Ring-fencing advanced logic (§4.1) | MVP already has OTEP-127 (ringfencing via POCDEX). R1 extends it (job family, function, exclusions) but it's an extension of existing work, not a net-new anchor. |
| Automated attendance / HCS reporting (Theme 7) | Quarterly pain, not daily. Fast-follow, tied to OTEP-296. |

---

## 🚨 Missing Voices (Research Gaps)

**Who this round covered:**
- HR POCs at 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS)
- Central teams: Workforce Development, DevOps
- Prototype-walkthrough format (reacting to a prototype, not open discovery)

**Who is missing or thin:**
- **Officers (the applicants).** The limbo problem (Theme 4) is described *by HR*, not by officers themselves. No officer quotes on what the silence costs them or what they'd want to see.
- **Hiring managers / opportunity owners.** They're a named role in the permissions model and central to the access conflict (Theme 5), but there's no direct evidence of what they actually need — it's all inferred from HR's view of them.
- **Functional Leads.** Named as needing a job-family view; no direct FL input on what that view must show.
- **Non-pilot agencies**, especially those with high posting volume or those fully committed to Careers@Gov — the ones whose duplicative-posting pain is the headline GTM claim.
- **Agencies without .gov.sg email access** — flagged as blocked by the CV-link workaround, but not represented in the sample.

**Risks this creates:**
- Building the access model (Theme 5) primarily from HR's framing may miss what hiring managers actually do with CVs.
- The "reduced duplicative effort" success claim rests on agencies not in this sample.
- Officer-side status/notification design (Theme 4) is being specced without officer input.

**Recommended follow-up:**
- 4–5 interviews with hiring managers / opportunity owners who have received CVs via the current post-box process.
- 3–4 officer interviews focused on the application-then-silence experience.
- 1–2 Functional Lead sessions on the job-family view.

---

## Contradictions & Open Questions (Consolidated)

**Contradiction:**
- Line-manager CV access: gatekeeper vs. self-serve (Theme 5). Resolution proposed: configurable per posting, default to HR-screening-first. Needs `/decision-doc`.

**Open product decisions blocking R1 scope:**
1. Line-manager access model (Theme 5) — `/decision-doc`
2. SJR-as-marker vs. SJR-as-label, and the secondment marker (Theme 6) — `/decision-doc`; also unblocks WOG reporting
3. Custom form builder v1 field scope (Theme 2) — needs real FormSG forms pulled from pilot agencies
4. Does the EDM stay the demand engine, or does R1 need its own distribution (Theme 1)
5. "Application within CareerCompass" definition — no redirects vs. starts-in-CareerCompass (carried from `r1-seamless-application-draft.md`, Michelle → Adrian/Jace)

**Data still needed:**
- Posting volume per pilot agency per month (sizing input for Themes 1–3)
- FormSG baseline submission + completion volumes (carried open item from `opportunities-listing.md`)
- Current HCS report template fields (Theme 7)

---

## Recommended Next Steps

1. **Take Themes 5 and 6 to the WD jamming session (10 Sep) as decisions to make, not topics to discuss.** Bring the proposed resolutions above. If the prerequisites aren't ready, use the session to assign owners and dates to the two decision docs and the FormSG-form pull.
2. **`/impact-sizing`** on Themes 2, 3, 4 (form builder, CV relay removal, status transparency) — need posting-volume and POC-count data first. This is what gives R1 grooming a priority order.
3. **`/write-prod-strategy`** for the R1 admin portal — position: the single place an opportunity is created, managed and reported; the form builder is the wedge that ends the FormSG fallback. Use `counter-positioning.md` (vs. OTG + Careers@Gov + FormSG).
4. **`/decision-doc`** ×2 — line-manager access model, SJR/secondment marker.
5. **`/prd-draft`** for the R1 Admin Portal once 1–4 land — this synthesis populates the problem, target users (HR POC / FL / hiring manager / WOG admin), and hypothesis sections. The existing `r1-seamless-application-draft.md` is officer-side and doesn't cover this scope.
6. **Follow-up research** — hiring managers, officers, Functional Leads (see Missing Voices).

---

## Appendix: Source

Full briefing document: [2026-09-10-W37-r1-admin-portal-discovery-source.md](2026-09-10-W37-r1-admin-portal-discovery-source.md)

Related PRDs: [opportunities-listing.md](../../context-library/prds/opportunities-listing.md) (officer-side, MVP), [r1-seamless-application-draft.md](../../context-library/prds/r1-seamless-application-draft.md) (officer-side, R1 scoping)
