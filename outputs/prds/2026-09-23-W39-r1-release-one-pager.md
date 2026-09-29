*Draft, not yet synced to Confluence. Source: [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md), [Mobility Programmes Journey Map Index](../journey-maps/2026-09-22-W39-mobility-programmes-journey-map-index.md). Template origin: [Product Epic 1-pager Template](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931675660/Product+Epic+1-pager+Template).*

# CareerCompass | OTEP-Pathfinder — R1 Release One-Pager

| | |
|---|---|
| **Release** | R1 (Opportunities Marketplace — 6 Pilot Agencies) |
| **Status** | Scope confirmed. Effort/timeline pending re-estimate against this scope. **Zero R1 epics exist as Jira tickets yet.** Sprint 10 ran entirely on MVP hardening/VAPT, no R1 progress. Sprint 11 planning (Thu 1 Oct) is where ticketing actually starts (see [Sprint 11 Planning Agenda](../analyses/2026-09-29-W40-r1-sprint-planning-agenda.md)) |
| **Target** | Pending re-estimate. Feb-Mar 2027 is a target window from an earlier Product x BO meeting, not a reconciled kickoff/launch date |
| **Author** | Michelle Yip |
| **Product Designer** | Li Ting Kway — has end-state screens for this scope |
| **Engineering Leads** | Rama Moorthy, Barry Lim |
| **Prototype - Figma** | [zipper-ritzy-40733845.figma.site](https://zipper-ritzy-40733845.figma.site) |

## The Short Version

R1 is a coexistence model, not a migration. Compass centralizes **discovery** across five opportunity types, for the **6 pilot agencies** (PSD, ESG, MDDI, URA, MCCY, CAAS), not WOG-wide. **Posting and applying stay exactly where they live today** (OTG, HRPS/Cumulus, or the hosting HR system) for every pilot agency, no exceptions.

For every opportunity type, officers still leave CareerCompass to apply, and once they leave, we lose visibility. The one exception is STIPs & Gigs, where Compass extracts the FormSG link embedded in the OTG posting and surfaces it directly as the Apply button. For posting creators, finding internal talent continues to happen through OTG, not natively in Compass.

R1 covers five opportunity types (STIPs & Gigs counted as one) under one 6-pilot-agency population model, plus two platform foundations:

1. **STIPs & Gigs (Discovery for all, FormSG-extraction Apply) — live.** Postings stay in OTG for every pilot agency. Compass never builds a creation flow. Discovery is native to Compass, scoped to the 6 pilot agencies. Compass extracts the FormSG link embedded in the OTG posting's description and shows it as the Apply button. If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly. No native in-app apply exists anywhere.
2. **Internal Jobs (Discovery Only):** Postings live primarily in HRPS/Cumulus (Cumulus pushes into HRPS upstream); some postings remain OTG-only. Compass ingests directly from HRPS for the primary path, not via OTG, scoped to the 6 pilot agencies. Apply redirects to whichever system (HRPS or Cumulus) hosts the posting, with a specific deep-link. The live dependency is HRPS API delivery, which has no committed date. Postings that stay OTG-only keep the old weak, landing-page-only redirect, unresolved by this change.
3. **Secondment (agency-led & officer-initiated paths):** ingested from each listing's own hosting HR system, not OTG specifically, scoped to the 6 pilot agencies. Discovery via Compass, redirect to apply, unaffected by Internal Jobs' ingestion source. **This does not include SJR itself.** PSD's specific annual exercise stays on OTG through the 2027 cycle, migrating ahead of the 2028 cycle.
4. **Internal Job Rotation (IJR):** OTG-hosted, discovery-only in Compass, redirect to apply, still ingested via OTG, scoped to the 6 pilot agencies. Documented alongside Internal Jobs and Secondment in [Epic B One-Pager (Internal Jobs, IJR & Secondment)](2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md).
5. **Mainstream Jobs (Careers@Gov):** Discovery-only via existing C@G ingestion, external redirect to apply. No Compass ownership beyond the listing.
6. **RBAC & Privacy:** Module-scoped access control, open to any authenticated officer within the 6 pilot agencies. With no native apply anywhere in R1, there's no in-app applicant data to gate. RBAC scope is platform-level module access only.

**What this document does not yet have:** a re-estimated effort figure. Every man-week number that's circulated predates the current scope. Section 11 below is marked pending rather than guessed at. Don't cite this document's timeline or effort numbers until that closes.

**CAM Integration is deferred to R2**, confirmed directly by Adrian. Not part of R1's build.

---

## 1. Background & Context

**Why this matters strategically:** Our North Star metric is officers completing a development action. Today, once an officer clicks Apply, they leave CareerCompass entirely, so we have no way to know if they ever finished. R1 is what makes that metric measurable at all, not just bigger.

**Why we're doing this now:** Leadership approved "apply without leaving CareerCompass" at an earlier SteerCo. R1 is where we actually build it, though R1's confirmed shape delivers unified discovery, not native apply, for every type except the FormSG-deep-link case.

**Population:** the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), not WOG-wide. IJR ships in R1, same delivery shape as STIPs & Gigs, decoupled from SJR's 2028 timeline, scoped to the same 6 agencies.

Today, officers at the pilot agencies already use CareerCompass to find STIPs and Gigs. The discovery half works there. Internal Jobs, Secondment, and IJR discovery are what this scope confirmation adds, for the same 6 agencies. All three now sit together in one epic, see [Epic B One-Pager (Internal Jobs, IJR & Secondment)](2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md).

## 2. Problem Statement

**For officers (at the 6 pilot agencies):** you find something worth applying to, click Apply, and get sent to a different website where you retype everything you already told us once. Then you hear nothing. As far as CareerCompass is concerned, you vanished. This stays unsolved for every type. STIPs & Gigs surfaces the posting's FormSG link as the Apply button (or a disabled button with "contact the poster" if no link exists), but the officer still leaves Compass to actually apply. Every officer applying to Internal Jobs, IJR, or Secondment also redirects out, to OTG or the hosting HR system. Mainstream Jobs was always redirect-only by design.

**For posting creators (any officer or manager at a pilot agency):** posting a gig means juggling informal channels, broadcasting across chats, fielding applications by email, and tracking progress in a manual spreadsheet. Nothing connects to the officer's profile. Posting itself stays OTG-only for every pilot agency. Applicant review also stays entirely off-platform, in whatever channel the poster already uses (email, FormSG's own response view). There is no in-app applicant review anywhere in R1.

**Cross-HR-system authentication:** an officer at a pilot agency can discover a listing hosted on an HR system they don't personally have access to. This gap is central now, since redirect is the primary apply mechanism for nearly every type.

## 3. Target User

**Population: the 6 pilot agencies** (PSD, ESG, MDDI, URA, MCCY, CAAS). STIPs & Gigs discovery opens to officers at these 6 agencies via POCDEX integration with their officer data. Creation stays OTG-only (Section 1); application is the FormSG-extraction/deep-link pattern, not a native Compass flow (see Section 7's Explicitly Out of Scope list).

- **The Active Searcher:** Knows what they want, searches and browses directly. Primary beneficiary of pilot-scoped discovery and consolidated browsing. For STIPs & Gigs, Apply either deep-links to the posting's FormSG form or is disabled with "contact the poster," not an in-app flow either way.
- **The Passive Browser:** Not actively searching, discovers opportunities incidentally. Primary beneficiary of Saved Jobs.
- **The Opportunity Poster:** Any officer or manager at a pilot agency, posting a STIP or Gig because they need support on a project or task. Posting continues in OTG for every pilot agency. Zero HR role, there's no in-app applicant data anywhere in this model. **STIPs & Gigs is the only type anybody can post.** Every other type below is HR-created.
- **The Mobility Seeker:** Exploring Secondment (non-SJR paths) or IJR, within the 6 pilot agencies. Discovers on Compass either way, then redirects out to apply, to whichever HR system hosts the Secondment listing, or to OTG for IJR. No native creation, apply, or review in Compass for either.

**Not yet its own lane, a gap, not a decision:** Internal Jobs, IJR, and Secondment postings are all created by HR admins (in HRPS/Cumulus, OTG, or the hosting HR system respectively), not "anybody" the way STIPs & Gigs postings are. No lane currently covers this HR-creator population across those three types; add one if their posting side needs its own design/comms treatment.

## 4. Value Propositions & Hypotheses

### 4.1 Overall Value Propositions

- **For Officers (at the 6 pilot agencies):** "Find every opportunity across your agency and its peers in one place." Discovery is the whole pitch. Applying itself is unchanged from today, across every opportunity type.
- **For Posting Creators (Anybody Posting a STIP/Gig, at a pilot agency):** posting continues on OTG for every pilot agency. Applicant review also stays off-platform. This value prop is "your posting gets visibility across the 6 pilot agencies," not an applicant-management upgrade. Internal Jobs, IJR, and Secondment postings are HR-created, not "anybody." This value prop is scoped to STIPs & Gigs only.
- **Unifying Pitch:** "CareerCompass brings every opportunity across the 6 pilot agencies into one discovery view." Discovery is the pitch, not apply.

### 4.2 Core Hypotheses (1 Line Each)

1. **Unified Discovery (6 pilot agencies):** *If* we aggregate STIPs, Gigs, Internal Jobs, Secondment, and IJR into one catalog across PSD, ESG, MDDI, URA, MCCY, and CAAS, *then* monthly active searchers will grow by **≥30%**, even where apply routes externally. R1's core value hypothesis, alongside Saved Jobs.
2. **Saved Jobs (Retention):** *If* officers can bookmark roles in one click, *then* 7-day repeat visits will rise by **≥25%** as passive watchers return to review saved roles.

*Targets for both hypotheses are directional, not validated, until re-estimate lands. Two other hypotheses (pre-filled applications, an in-app applicant review table) don't apply, since no native apply exists for any type.*

## 5. End-to-End User Journeys

Full detail lives in the [Mobility Programmes Journey Map Index](../journey-maps/2026-09-22-W39-mobility-programmes-journey-map-index.md): twelve journey maps (officer + HR, six types) plus two comparison artifacts. Summarized:

### 5.1 Officer Journey (Discover → Decide → Apply → Track)

1. **Discover & Browse:** Officer logs in via Singpass/TechPass. Lands on the unified Opportunities page, viewing listings across STIPs, Gigs, Internal Jobs, Secondment, IJR, and Mainstream Jobs, filtered to their eligibility, scoped to the 6 pilot agencies.
2. **Bookmark (Optional):** Clicks the bookmark icon on interesting roles to review later under the "Saved Jobs" filter tab.
3. **Apply. Every path redirects or deep-links out of Compass:**
   - **STIPs & Gigs (FormSG-extraction):** Sees the listing in Compass, discovered via OTG pull-through, for every pilot agency. Clicking Apply either deep-links to the FormSG URL Compass extracted from the OTG posting's description, or, if no FormSG link exists, shows a disabled Apply button telling the officer to contact the poster directly.
   - **Internal Jobs (HRPS/Cumulus redirect, with an OTG-only residual):** Sees the listing in the unified catalog, sourced directly from HRPS/Cumulus for most postings. Clicking Apply redirects to the specific posting on HRPS or Cumulus, whichever hosts it, contingent on HRPS's API actually being delivered. Postings still sitting on OTG-only land on a general landing page instead, no deep-link.
   - **IJR (OTG redirect):** Discovery via OTG. No native creation, apply, or review inside Compass.
   - **Secondment, non-SJR paths (OTG redirect):** Discovery via Compass, redirect to OTG (or the hosting HR system) to apply. The cross-system auth gap is relevant if that redirect lands officers somewhere they don't have access.
   - **Mainstream Jobs & SJR (Redirect, unchanged):** Clicks through to Careers@Gov or OTG. Application and tracking happen entirely on the source system.
4. **Track Status:** No in-app status tracking for any type. Everything redirects or deep-links out before an officer would reach an in-app status view.
5. **Outcome:** Outcome communication happens outside Compass for every opportunity type.

### 5.2 Posting Creator Journey — Anybody, STIPs & Gigs Only (Post → Alert → Review → Decide)

Posting continues on OTG for every pilot agency; applicant review and decisioning happen entirely off-platform, through whatever FormSG already provides. **This journey covers STIPs & Gigs only.** Internal Jobs, IJR, and Secondment postings are HR-created, not "anybody," and have no posting-creator journey documented here yet:

1. **Create Posting:** Any authenticated officer at a pilot agency creates the posting in OTG. Poster includes a FormSG link in the posting description if they want applicants to be able to apply.
2. **Publish:** Posting goes live on OTG, discoverable across the 6 pilot agencies once Compass's pull-through syncs it into the unified catalog.
3. **Receive Applications:** Handled entirely through FormSG's own notification/response mechanism, outside Compass.
4. **Decide & Close:** Offer/reject decisions and vacancy closure happen through whatever process the poster already uses today (FormSG responses, email, manual tracking). Compass has no role here.

---

## 6. Success Metrics

**6.1 Core North Star (Discovery & Action)**
- **Opportunities Discovered per Officer:** Average number of opportunity detail views per active officer per month. R1's strongest, most directly measurable metric.
- **Officers completing a development action:** 10% of onboarded officers (North Star lagging outcome), target date pending re-estimate. Not directly measurable for any opportunity type: Compass can see that an officer clicked the Apply/FormSG link, not whether they completed or were selected. Needs a proxy (see FormSG-Click Rate below).

**6.2 Input Metrics (Discovery & Conversion)**
- **Search-to-Click Rate:** ≥70% of opportunity searches result in a detail view.
- **Recommendation Click-Through Rate (CTR):** ≥20% click-through on personalized opportunity cards.
- **FormSG-Click Rate (STIPs & Gigs):** % of STIPs/Gigs detail views where the officer clicks through to the extracted FormSG link. The actual measurable apply-intent signal for STIPs & Gigs. Compass has no visibility past this click.
- **Dead-End Apply Rate (STIPs & Gigs):** % of STIPs/Gigs detail views where the Apply button is disabled because the posting has no FormSG link. Flags posters who aren't including a FormSG link, a real gap this model creates.
- **Outbound Redirect Intent Rate:** ≥20% of opportunity detail views click through to source portals. Covers Internal Jobs, IJR, and Secondment (STIPs & Gigs tracked separately via FormSG-Click Rate, since it deep-links rather than redirects to a landing page). The primary conversion metric for most of R1.
- **Cross-HR-system dead-end rate:** % of Secondment/Internal Job/IJR clicks that hit the auth gap. One of the only conversion signals Compass can instrument for those types. No target set yet, needs a baseline once R1 has an interim answer for the auth gap.

**6.3 Guardrail Metrics**
- Pilot officer satisfaction ≥3.5/5.
- If Dead-End Apply Rate (postings missing a FormSG link) exceeds 15% at the 4-week mark, escalate to Adrian/BOs on whether to require FormSG links at posting time on OTG.

## 7. Scope (Stories + Success Criteria)

See [Epic A One-Pager (STIPs & Gigs)](2026-09-24-W39-epic-a-stips-gigs-one-pager.md), [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md), and [Epic B One-Pager (Internal Jobs, IJR & Secondment)](2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md) for full detail. Epic A is live; IJR and Secondment (documented inside Epic B, alongside Internal Jobs) are the remaining build.

| Epic | Story | Success Criteria | Notes to designers/devs |
|---|---|---|---|
| **A — STIPs & Gigs** ✅ Live | Pull OTG postings into Compass discovery; extract FormSG links from posting descriptions and surface as the Apply button | Any officer at the 6 pilot agencies browses STIPs/Gigs in Compass's unified catalog. Apply either deep-links to the FormSG URL or shows a disabled button with "contact the poster." Posting and applicant handling stay in OTG/FormSG | Zero-HR-role holds cleanly, no in-app applicant data exists in this model |
| **B — Internal Jobs, IJR & Secondment (Discovery, three sources)** | Internal Jobs: discovery via direct HRPS/Cumulus integration for the primary path, not OTG (Cumulus pushes into HRPS upstream); OTG-only postings still surface too. IJR: discovery via OTG directly. Secondment (non-SJR): discovery via each listing's hosting HR system | Internal Jobs: unified catalog listing, sourced directly from HRPS, agency-ringfenced. Apply redirects to HRPS or Cumulus with a specific deep-link, or OTG's landing page for the residual case. IJR: unified catalog listing, ringfenced per agency plus optional per-officer eligibility criteria. Apply redirects to OTG. Secondment: unified catalog listing; apply redirects to OTG or the hosting HR system | Internal Jobs: HRPS API has no committed delivery date, a hard blocker, not sizeable yet. IJR and Secondment: not blocked, groomable now. Design covered by Li Ting Kway, pending fit-check against current scope |
| **E — Mainstream Jobs (Discovery)** | Discovery of C@G Public Vacancies | Ingestion from C@G public feed; external redirect CTA with disclaimer | This was always the shape the other types moved toward |
| **F — Saved Jobs (P1)** | Officer bookmarks opportunities | Bookmark toggle on cards/details; filter tab on Opportunities page | None |
| **G — RBAC & Privacy (P0)** | Module-scoped access control | Any authenticated officer at a pilot agency gets module access | No in-app applicant review table anywhere means no poster/collaborator drawer-access RBAC to design for STIPs & Gigs or IJR. Scoped to discovery-only, platform-level module access |
| **I — SJR (explicitly excluded from R1)** | None | SJR-the-programme is NOT an R1 epic. Stays on OTG through the 2027 cycle, migrates to Compass ahead of 2028 | Listed here only to make the exclusion explicit. Don't let SJR work drift into an R1 sprint |

**Explicitly Deferred to R2 (Out of Scope):**
- CAM Integration (Keycloak SCIM connector), confirmed by Adrian. No R1 engineering capacity committed to it.
- Native in-app apply, creation, and review for Internal Jobs, IJR, and Secondment.
- Native in-app apply, creation, and review for STIPs & Gigs — planned R2 scope, see the [STIPs & Gigs Native Creation & Apply Backlog](../analyses/2026-09-22-W39-stips-gigs-backlog.md) (8 epics, 13 stories, needs re-validation before grooming).
- Cumulus API integration. Compass reads Internal Jobs from HRPS only; Cumulus data reaches Compass indirectly, via Cumulus's own upstream push into HRPS.
- Dynamic form builders and agency-specific custom question configuration.
- Multi-file PDF resume/portfolio uploads and automated parsing.
- Multi-stage ATS recruitment pipeline (shortlist, interview booking, scoring rubrics).
- Automated candidate regret email campaigns.
- SJR-the-programme's migration to Compass (targeted for the 2028 cycle, not R1).
- Full cross-HR-system single sign-on across OTG, HRPS, Cumulus, and Compass, the long-horizon fix, contingent on Workable becoming the WOG ATS, a 2027+ track. **This is deferred; the gap itself is not.** R1 needs its own interim answer (disclosure on the card, or narrower "consolidated" framing), tracked in Section 12 and Section 14, not punted to R2.

## 8. What We Need You to Design

> Li Ting Kway is R1's designer, with end-state screens already drafted. The list below is the scope to walk through against those screens at the 30 Sep session, not a from-scratch brief.

The native application form and applicant review table are not needed for STIPs & Gigs, or for any other type. Apply/review happen externally, for every pilot agency.

**Genuinely new for R1** (no MVP equivalent, Internal Jobs, IJR, and Secondment weren't in Compass's catalog before):
1. **New type badges on the existing catalog/card component**, for Internal Jobs, IJR, and Secondment. The catalog and card shape themselves are unchanged from MVP. This is a data-mapping and visual addition, not a new component.
2. **The saved jobs bookmark toggle.** Bookmark icon on opportunity cards/detail views and the "Saved Jobs" filter tab on the Opportunities catalog.
3. **The redirect/deep-link-out signal, three variants:** the HRPS/Cumulus deep-link (Internal Jobs primary path, can be designed now, ahead of the API delivering); the OTG general-landing-page redirect (shared between IJR's default case and Internal Jobs' OTG-only residual); and the hosting-HR-system redirect (Secondment, needs to handle an arbitrary system name, not a fixed OTG/HRPS/Cumulus set). One component with a dynamic destination, not three bespoke designs. **Confirm at the 30 Sep session that Secondment's variant redirects to the hosting HR system, not OTG.**

**Already live, no design work needed:**
4. The discovery catalog and shared card component itself (base layout, filters).
5. The FormSG deep-link pattern (STIPs & Gigs).
6. The "no FormSG link, contact poster" disabled state.

**Blocked on other decisions, don't design yet:**
7. **The cross-HR-system access disclosure.** Whatever interim answer R1 lands on for the auth gap needs a UI treatment, disclosing access requirements on the card, or another pattern. Depends on that answer resolving first.
8. **The "link vs. no-link" visible distinction** (whether officers should be able to tell a deep-link apart from a general-landing-page redirect before clicking Apply). Not yet confirmed as a real requirement; needs a product decision before it's a design task.

*Note on Mainstream Jobs:* discovery-only, redirects externally to Careers@Gov, no new design need.

---

## 9. Data Analysis & Evidence

We don't have real usage data yet, this hasn't been tracked inside CareerCompass before. The numbers below are our best current estimate, not measured fact. Revisit once the re-estimate lands.

| Metric | Where we are now (estimated) | Where we want to be |
|---|---|---|
| % of officers who complete an application without leaving CareerCompass | 0%, no native apply exists anywhere, so this is structural, not an estimate | N/A under this model, retired as a target (see Section 6) |
| Officers completing a development action (our North Star) | Can't measure today | 10% of onboarded officers, target date pending re-estimate. Not directly instrumentable; needs a proxy metric |
| Applications submitted through CareerCompass | 0 (applications submit via FormSG, not Compass) | N/A, see FormSG-Click Rate (Section 6.2) instead |

## 10. Market / Benchmark Scan

Not done. No market or benchmark scan exists in any source document.

---

## 11. Go-To-Market & Timeline

**Pending re-estimate.** Populate this section only after Adrian/Rama/Michelle complete an estimate against the confirmed scope below. Don't carry forward any prior draft's numbers as placeholders.

**What we do know:**
- **Population committed:** the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), not WOG-wide.
- **Target window referenced elsewhere:** Feb-Mar 2027, from an earlier Product x BO meeting, a target window, not a committed kickoff or launch date. Don't present this as reconciled.
- **VAPT is confirmed in scope for R1**, with R1 and R2 findings both going through risk acceptance rather than a hard pre-launch remediation gate.
- **Squad composition:** Thomas Huchedé is Tech Lead, alongside Barry Lim / Rama Moorthy. Build capacity is **3.5 engineers** (see Section 13).
- **Engineering scope is final in shape, but not fully sizeable yet.** Epic A is live, no estimate needed. Native creation, apply, and review for Internal Jobs, IJR, and Secondment are out of R1. RBAC narrows to platform-level module access. Design narrows to new type badges, bookmark toggle, and redirect UI. Internal Jobs is the harder blocker: no committed HRPS API delivery date, so it can't be sized yet. IJR and Secondment can be estimated now.

---

## 12. Risks, Assumptions & Mitigations

Full register: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md). Top items relevant to this scope:

| Risk | Category | Impact | Mitigation |
|---|---|---|---|
| **Internal Jobs ingests directly from HRPS/Cumulus, not OTG; HRPS API undelivered; OTG-only postings remain a weak residual** | Integration | 🔴 Red. Internal Jobs' primary discovery path has no ingestion source until HRPS's API is delivered, no committed date. Separately, whatever share of internal jobs stays OTG-only keeps the old weak, no-deep-link experience even after HRPS delivers. IJR is unaffected, still OTG-ingested; Secondment is unaffected too, ingested from each listing's own hosting HR system, not OTG or HRPS specifically | Get a committed delivery date on the HRPS API from NCS/Lee Koon TEU; confirm whether HRPS supplies ringfencing/eligibility data directly or Compass builds that logic; size how many internal jobs are OTG-only vs. HRPS/Cumulus-sourced |
| **No cross-HR-system authentication** | Technical Architecture / UX | Officers hit this dead end across nearly every redirect-based type | Needs an R1-scoped answer (disclosure on the card, or restrict "consolidated" framing to what the officer's access actually covers), not a 2027+ deferral |
| **FormSG MVP data migration (6 pilot agencies)** | Data / Technical | FormSG is the confirmed apply mechanism for the 6 pilot agencies | Confirm with Adrian/BOs whether in scope for R1; get a volume estimate covering the 6 pilot agencies |
| **Source-of-truth reliability** | Process | Relayed, second-hand accounts of leadership direction have produced conflicting pictures of the same decision in the past; direct transcripts have proven more reliable | Get Adrian, Xian, Mark, and GK in one room, or at minimum treat a written summary as canonical, before any future architecture change. Treat direct meeting transcripts as higher-confidence than second-hand summaries when accounts conflict |
| **Effort/timeline unreconciled** | Timeline | Every circulating man-week/date figure predates the current confirmed scope. Epic A (STIPs & Gigs) needs no estimate at all, it's already shipped; the remaining unresolved effort is IJR, Secondment, and the new catalog type badges only | Re-run the estimate once, against Section 7 as it now stands, excluding Epic A entirely |
| **No confirmed ATS strategy for 2027** | Strategic / Dependency | R1's discovery-only, redirect/FormSG architecture implicitly assumes a future ATS absorbs the transaction layer Compass isn't building now. If ATS isn't viable, Compass may need native posting/workflow/application-management capability | Get Gek Khiang's 2027 ATS viability answer on record with a date; escalate immediately if the answer is "not viable" or "uncertain" |
| **R1 defers rather than solves OTG replacement** | Strategic | Adrian's own framing: "we are only dodging the bullet, we are kicking it down to R2." No end-state exists yet for STIPs & Gigs creation, Internal Jobs creation, or opportunity publishing once OTG is eventually retired | Make this trade-off explicit whenever R1 scope is presented upward; keep a standing R2/R3 "decommissioning debt" tracking item, see the [R2/R3 Decommissioning Debt Tracker](../analyses/2026-09-28-W40-r2-r3-decommissioning-debt-tracker.md) |
| **OTEP-1505 decouples opportunity user resolution away from POCDEX** | Technical / Consistency | Contradicts this document's Section 3 claim that pilot-agency discovery works via POCDEX integration. Live Jira ticket, not yet reconciled with the one-pager | Reconcile with Rama/Léo at Sprint 11 planning (1 Oct), whichever is correct, update the other |
| **OTEP-1686 renames a ringfencing column ahead of product definition** | Sequencing | Risk of locking in a ringfencing assumption for IJR before the product call on eligibility criteria is actually made | Confirm with Thomas whether the rename presumes an answer; flag at Sprint 11 planning if so |
| **OTEP-1693 spikes a dynamically-generated OTG Excel sheet** | Architecture | Suggests OTG ingestion may be file-based, not a live feed. Affects any future discovery build against OTG (Internal Jobs' OTG-only residual, IJR), not STIPs & Gigs, which already ingests successfully | Confirm with Thomas what OTG ingestion actually looks like before sizing Internal Jobs/IJR discovery |

---

## 13. Engineering Requirements Summary

**Pending re-estimate, split into two passes.** Estimate now: IJR and Secondment (both discovery-only, not blocked), new catalog type badges, RBAC (platform-level module access). Epic A is live and needs no estimate; CAM is out of R1 entirely. **Hold Internal Jobs discovery out of this pass** — it depends on the HRPS API, which has no committed delivery date, so sizing it now would just need redoing.

**Jira status, 29 Sep:** none of the epics above exist as tickets yet. Sprint 11 is primarily an MVP sprint (continued hardening/VAPT); the intent is for R1's first slice to ride inside it, not to become R1's sprint. Sprint 11 planning (Thu 1 Oct) is where the first real R1 tickets get created. IJR-from-OTG and Secondment-from-hosting-system are the two unblocked candidates; OTEP-578 (the OTG-ingestion spike Epic B's readiness depends on) is unassigned with a stale title. See [Sprint 11 Planning Agenda](../analyses/2026-09-29-W40-r1-sprint-planning-agenda.md).

**Dedicated Squad:**
- **Tech Lead (0.5+ FTE):** Thomas Huchedé
- **Platform & Auth (1.0 FTE):** Hao Eng Chua
- **Backend & Ingestion (1.0 FTE):** Léo Milbor
- **+1.0 FTE build capacity:** Jennie, via the [Opportunities Estimation](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2691465430/Opportunities+Estimation) Confluence page (20 gross / 18 net man-weeks, Oct–Feb). Total build+lead capacity: **3.5 engineers**. Start date still needs confirming with Rama
- **Tech Lead (0.3 – 0.5 FTE, shared):** Barry Lim / Rama Moorthy
- **Product Designer:** Li Ting Kway — has end-state screens for this scope; FTE allocation not yet stated

---

## 14. Decision Tracker (Key BO Calls Needed)

| Decision Needed | Who Decides | Needed By | Recommendation |
|---|---|---|---|
| **Confirm this scope is genuinely final with Mark/GK, not still contested** | Michelle Yip, Adrian Ang | Immediately, before any further downstream work builds on this version. **Not yet scheduled, this has been the tracker's top item for two days with no visible progress.** | Get Adrian, Xian, and Mark/GK in a joint conversation, or treat a written summary as canonical, not relayed through one channel at a time. Highest-priority open item in this tracker. If still unscheduled by end of today, escalate to a same-day resolution with Adrian rather than another day of carry-over |
| **HRPS API committed delivery date** | Rama Moorthy, Adrian Ang (with NCS/Lee Koon TEU) | Immediately, blocks Internal Jobs discovery entirely (Epic B). **Direct-call request not yet confirmed sent.** The written-question approach already produced no date in over a week | Escalate directly. Without this, Internal Jobs has no ingestion source and can't be sized. The single highest-priority open dependency in R1 after Mark/GK confirmation above |
| **Re-estimate effort/timeline against confirmed scope** | Michelle Yip, Adrian Ang, Rama Moorthy | ASAP, but only after the two items above close. Blocks this document's Sections 11 & 13 | Run the estimation session in two passes: everything except Internal Jobs now, Internal Jobs once the HRPS API date lands |
| **Start date for Jennie (4th engineer)** | Barry Lim / Rama Moorthy | Before the re-estimate session | Still need start date; also worth checking whether the squad still needs 3.5 engineers given the reduced build scope (see Section 13) |
| **Interim answer for the cross-HR-system auth gap** | Adrian Ang, Michelle Yip | Before Secondment's, Internal Jobs', or IJR's apply flow ships | Disclose HR-system access requirements on the listing card, or restrict "consolidated" framing to what the officer's access covers |
| **Fit-check Li Ting Kway's screens against current scope** | Michelle Yip, Li Ting Kway | 30 Sep design/scope/grooming session | Confirm her screens reflect the Secondment hosting-HR-system redirect before treating any UI story as DoR-clearable |
| **FormSG MVP data migration: in or out of scope? (6 pilot agencies)** | Adrian / PSD BOs | Before launch | FormSG is confirmed the apply mechanism for every pilot agency, worth an explicit answer |
| **Rescope and assign OTEP-578** | Rama Moorthy | Sprint 11 planning (1 Oct) | Title predates Internal Jobs' move off OTG (D-049). Rescope to IJR-from-OTG plus Secondment-from-hosting-system; assign an owner in the room, not as a follow-up |
| **Reconcile OTEP-1505 against Section 3's POCDEX claim** | Rama Moorthy, Léo Milbor | Sprint 11 planning (1 Oct) | Live ticket decouples user resolution from POCDEX; contradicts this document until reconciled |

---

*Next review: once the re-estimate lands, this document's Sections 7, 11, 13 should be revisited immediately after, not on the normal weekly cadence.*

---

## Document History

Originated 25 Sep 2026. Major corrections since then, most recent first:

- **29 Sep:** Epic A (STIPs & Gigs) confirmed already shipped in MVP, removed from build/design/estimation scope throughout. Sprint 11 confirmed as primarily an MVP sprint, not R1's own sprint. Li Ting Kway confirmed as R1's designer, with existing end-state screens. CAM Integration confirmed deferred to R2 (D-052). Product-trio review fixed an internal contradiction on Secondment's ingestion source (hosting HR system, not OTG) and found R1 has zero Jira tickets despite reading as ready-to-groom.
- **27–28 Sep:** Prior designer assignment in Section 8 confirmed wrong and reopened; IJR and Secondment folded into Epic B as second and third discovery sources.
- **25 Sep:** Internal Jobs' ingestion source moved back to direct HRPS/Cumulus, same day as an earlier reversal.

Full correction trail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md), [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md), [Sprint 11 Planning Agenda](../analyses/2026-09-29-W40-r1-sprint-planning-agenda.md).

**29 Sep (later still):** R1's population corrected from WOG-wide to the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), confirmed directly by Michelle. Every population/scope claim throughout this document (Release line, Short Version, Sections 1-3, 4, 7, 9, 11, 12, 14) rewritten to reflect the 6-agency pilot scope, not WOG-wide. This reverses the "WOG-wide, not a pilot cohort" framing that had held since 23 Sep. Same correction propagated to the R1 Scope Map, Grooming Readiness Checklist, Sprint 11 Planning Agenda, SJR Two-Path Scope Brief, and OTEP Opportunity Journeys artifact, plus a full audit-and-fix pass on 9 files that still described Epic A as unbuilt.

**29 Sep (end of day):** STIPs & Gigs native creation, apply, and review confirmed as real R2 planning scope, not just a placeholder deferral. Section 7's deferred list updated to point at the [STIPs & Gigs Native Creation & Apply Backlog](../analyses/2026-09-22-W39-stips-gigs-backlog.md), retargeted from its original (superseded) R1 draft — 8 epics, 13 stories, real technical questions already drafted, needs re-validation before R2 grooming but isn't starting from zero.
