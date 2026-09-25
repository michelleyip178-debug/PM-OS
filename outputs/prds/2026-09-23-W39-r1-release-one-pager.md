*Draft, not yet synced to Confluence. Current state as of 25 Sep, including a same-day ingestion-source change for Internal Jobs (now direct HRPS/Cumulus, not OTG) — for the full correction history, see the [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) and [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md). Source: [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md) D-042–D-048, [Mobility Programmes Journey Map Index](../journey-maps/2026-09-22-W39-mobility-programmes-journey-map-index.md). Template origin: [Product Epic 1-pager Template](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931675660/Product+Epic+1-pager+Template).*

# CareerCompass | OTEP-Pathfinder — R1 Release One-Pager

| | |
|---|---|
| **Release** | R1 (Opportunities Marketplace — WOG-Wide) |
| **Date** | 25 Sep 2026 |
| **Target** | Pending re-estimate (R-12). Feb-Mar 2027 is a target window from the 21 Sep Product x BO meeting, not a reconciled kickoff/launch date |
| **Status** | Scope confirmed and final. Effort/timeline pending re-estimate against this scope |
| **Author** | Michelle Yip |
| **Product Designer** | Li Ting Kway (Liting) |
| **Engineering Leads** | Rama Moorthy, Barry Lim |
| **Prototype - Figma** | [zipper-ritzy-40733845.figma.site](https://zipper-ritzy-40733845.figma.site) |

## The Short Version

R1 is a coexistence model, not a migration. Compass centralizes **discovery** across five opportunity types, WOG-wide. **Posting and applying stay exactly where they live today** — OTG, HRPS/Cumulus, or the hosting HR system — for every agency, no exceptions.

For every opportunity type, officers still leave CareerCompass to apply, and once they leave, we lose visibility — except for STIPs & Gigs, where Compass extracts the FormSG link embedded in the OTG posting and surfaces it directly as the Apply button. For posting creators, finding internal talent continues to happen through OTG, not natively in Compass.

R1 covers five opportunity types (STIPs & Gigs counted as one) under one WOG-wide population model, plus two platform foundations:

1. **STIPs & Gigs (Discovery for all, FormSG-extraction Apply):** Postings stay in OTG for every agency — Compass never builds a creation flow. Discovery is native to Compass, WOG-wide. Compass extracts the FormSG link embedded in the OTG posting's description and shows it as the Apply button. If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly. No native in-app apply exists anywhere.
2. **Internal Jobs (Discovery Only):** Postings live primarily in HRPS/Cumulus (Cumulus pushes into HRPS upstream); some postings remain OTG-only. Compass ingests directly from HRPS for the primary path, not via OTG. Apply redirects to whichever system (HRPS or Cumulus) hosts the posting, with a specific deep-link — the live dependency is HRPS API delivery, which has no committed date (R-07, 🔴 Red). Postings that stay OTG-only keep the old weak, landing-page-only redirect, unresolved by this change.
3. **Secondment (agency-led & officer-initiated paths):** OTG-hosted, discovery via Compass, redirect to apply — unaffected by Internal Jobs' ingestion change. **This does not include SJR itself** — PSD's specific annual exercise stays on OTG through the 2027 cycle, migrating ahead of the 2028 cycle (R-13).
4. **Internal Job Rotation (IJR):** OTG-hosted, discovery-only in Compass, redirect to apply — unaffected by Internal Jobs' ingestion change, still ingested via OTG. Folded into [Epic B One-Pager (Internal Jobs, incl. IJR)](2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md) as of 25 Sep (D-050).
5. **Mainstream Jobs (Careers@Gov):** Discovery-only via existing C@G ingestion, external redirect to apply. No Compass ownership beyond the listing.
6. **RBAC & Privacy:** Module-scoped access control, open to any WOG-authenticated officer. With no native apply anywhere in R1, there's no in-app applicant data to gate — RBAC scope is platform-level module access only.
7. **CAM Integration:** Status open (R-15) — see Section 9.

**What this document does not yet have:** a re-estimated effort figure (R-12, 🔴 Red — every man-week number that's circulated predates the current scope) and a resolved CAM position (R-15, 🟠 Amber — three source documents disagree on whether CAM is R1 or deferred to R2). Sections 12 and 14 below are marked pending rather than guessed at. Don't cite this document's timeline or effort numbers until those close.

---

## 1. Background & Context

**Why this matters strategically:** Our North Star metric is officers completing a development action — but today, once an officer clicks Apply, they leave CareerCompass entirely, so we have no way to know if they ever finished. R1 is what makes that metric measurable at all, not just bigger.

**Why we're doing this now:** Leadership approved "apply without leaving CareerCompass" back in March 2026 SteerCo. R1 is where we actually build it — though as of 25 Sep, R1's confirmed shape delivers unified discovery, not native apply, for every type except the FormSG-deep-link case.

**Population:** WOG-wide, not a pilot cohort. This resolved on 23 Sep via Adrian's scope slide and has held since. IJR ships in R1, same delivery shape as STIPs & Gigs, decoupled from SJR's 2028 timeline.

Today, officers already use CareerCompass to find STIPs and Gigs — the discovery half works there. Internal Jobs, Secondment, and IJR discovery are what this scope confirmation adds. IJR's design is the least mature of the three — see [Epic B One-Pager (Internal Jobs, incl. IJR)](2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md).

## 2. Problem Statement

**For officers:** you find something worth applying to, click Apply, and get sent to a different website where you retype everything you already told us once. Then you hear nothing. As far as CareerCompass is concerned, you vanished. This stays unsolved for every type. STIPs & Gigs surfaces the posting's FormSG link as the Apply button (or a disabled button with "contact the poster" if no link exists), but the officer still leaves Compass to actually apply. Every officer applying to Internal Jobs, IJR, or Secondment also redirects out, to OTG or the hosting HR system. Mainstream Jobs was always redirect-only by design.

**For posting creators (any officer or manager):** posting a gig means juggling informal channels — broadcasting across chats, fielding applications by email, and tracking progress in a manual spreadsheet. Nothing connects to the officer's profile. Posting itself stays OTG-only for every agency. Applicant review also stays entirely off-platform, in whatever channel the poster already uses (email, FormSG's own response view) — there is no in-app applicant review anywhere in R1.

**Cross-HR-system authentication (R-24):** an officer anywhere in government can discover a listing hosted on an HR system they don't personally have access to. This gap is central now, since redirect is the primary apply mechanism for nearly every type.

## 3. Target User

**Population: WOG-wide.** STIPs & Gigs discovery/creation/application opens to all WOG officers via POCDEX integration with WOG officer data.

- **Lane 1 — Intentional Mover:** Senior, targeted, time-pressured officer who knows what they want. Primary beneficiary of WOG-wide discovery and consolidated browsing. For STIPs & Gigs, Apply either deep-links to the posting's FormSG form or is disabled with "contact the poster" — not an in-app flow either way.
- **Lane 2 — Passive Watcher:** Early-career officer, open but not actively searching. Primary beneficiary of Saved Jobs.
- **Lane 3 — Posting Creator (Anybody):** Any officer (project lead or team manager) WOG-wide who needs support on a project, task, or gig. Posting continues in OTG for every agency. Zero HR role in STIPs & Gigs (R-27) — there's no in-app applicant data anywhere in this model.
- **Lane 4 — Rotation/Secondment Seeker:** An officer exploring Secondment (non-SJR paths) discovers on Compass, redirects to OTG or the hosting HR system to apply. IJR seekers are grouped the same way — OTG-hosted, discovery-only in Compass, redirect to apply. No native creation, apply, or review in Compass for IJR.

## 4. Value Propositions & Hypotheses

### 4.1 Overall Value Propositions

- **For Officers:** "Find every public sector opportunity in one place." Discovery is the whole pitch — applying itself is unchanged from today, across every opportunity type.
- **For Posting Creators (Anybody Posting a Gig/STIP):** posting continues on OTG for every agency. Applicant review also stays off-platform. This value prop is "your posting gets WOG-wide visibility," not an applicant-management upgrade.
- **Unifying Pitch:** "CareerCompass brings every public sector opportunity into one discovery view, WOG-wide." Discovery is the pitch, not apply.

### 4.2 Core Hypotheses (1 Line Each)

1. **Unified Discovery (WOG-wide):** *If* we aggregate STIPs, Gigs, Internal Jobs, Secondment, and IJR into one catalog, *then* monthly active searchers will grow by **≥30%**, even where apply routes externally. R1's core value hypothesis, alongside Saved Jobs.
2. **Saved Jobs (Retention):** *If* officers can bookmark roles in one click, *then* 7-day repeat visits will rise by **≥25%** as passive watchers return to review saved roles.

*Targets for both surviving hypotheses are carried over from an earlier pilot-scope draft and haven't been revalidated against WOG-wide population; treat as directional until re-estimate lands.*

*Two hypotheses from an earlier draft — pre-filled gig applications and an in-app applicant review table — no longer apply, since no native apply build exists for any agency.*

## 5. End-to-End User Journeys

Full detail lives in the [Mobility Programmes Journey Map Index](../journey-maps/2026-09-22-W39-mobility-programmes-journey-map-index.md) — twelve journey maps (officer + HR, six types) plus two comparison artifacts. Summarized:

### 5.1 Officer Journey (Discover → Decide → Apply → Track)

1. **Discover & Browse:** Officer logs in via Singpass/TechPass. Lands on the unified Opportunities page, viewing listings across STIPs, Gigs, Internal Jobs, Secondment, IJR, and Mainstream Jobs — filtered to their eligibility, WOG-wide.
2. **Bookmark (Optional):** Clicks the bookmark icon on interesting roles to review later under the "Saved Jobs" filter tab.
3. **Apply — every path redirects or deep-links out of Compass:**
   - **STIPs & Gigs (FormSG-extraction):** Sees the listing in Compass, discovered via OTG pull-through, WOG-wide, for every agency. Clicking Apply either deep-links to the FormSG URL Compass extracted from the OTG posting's description, or, if no FormSG link exists, shows a disabled Apply button telling the officer to contact the poster directly.
   - **Internal Jobs (HRPS/Cumulus redirect, with an OTG-only residual):** Sees the listing in the unified catalog, sourced directly from HRPS/Cumulus for most postings. Clicking Apply redirects to the specific posting on HRPS or Cumulus, whichever hosts it — contingent on HRPS's API actually being delivered (open, R-07, 🔴 Red). Postings still sitting on OTG-only land on a general landing page instead, no deep-link.
   - **IJR (OTG redirect):** Discovery via OTG, unaffected by Internal Jobs' ingestion change. No native creation, apply, or review inside Compass.
   - **Secondment, non-SJR paths (OTG redirect):** Discovery via Compass, redirect to OTG (or the hosting HR system) to apply. R-24's cross-system auth gap is relevant if that redirect lands officers somewhere they don't have access.
   - **Mainstream Jobs & SJR (Redirect, unchanged):** Clicks through to Careers@Gov or OTG. Application and tracking happen entirely on the source system.
4. **Track Status:** No in-app status tracking for any type — everything redirects or deep-links out before an officer would reach an in-app status view.
5. **Outcome:** Outcome communication happens outside Compass for every opportunity type.

### 5.2 Posting Creator Journey — Anybody (Post → Alert → Review → Decide)

Posting continues on OTG for every agency; applicant review and decisioning happen entirely off-platform, through whatever FormSG already provides:

1. **Create Posting:** Any authenticated officer, WOG-wide, creates the posting in OTG. Poster includes a FormSG link in the posting description if they want applicants to be able to apply.
2. **Publish:** Posting goes live on OTG, WOG-wide discoverable once Compass's pull-through syncs it into the unified catalog.
3. **Receive Applications:** Handled entirely through FormSG's own notification/response mechanism, outside Compass.
4. **Decide & Close:** Offer/reject decisions and vacancy closure happen through whatever process the poster already uses today (FormSG responses, email, manual tracking). Compass has no role here.

---

## 6. Success Metrics

**6.1 Core North Star (Discovery & Action)**
- **Opportunities Discovered per Officer:** Average number of opportunity detail views per active officer per month. R1's strongest, most directly measurable metric.
- **Officers completing a development action:** 10% of onboarded officers (North Star lagging outcome) — target date pending re-estimate. Not directly measurable for any opportunity type: Compass can see that an officer clicked the Apply/FormSG link, not whether they completed or were selected. Needs a proxy (see FormSG-Click Rate below).

**6.2 Input Metrics (Discovery & Conversion)**
- **Search-to-Click Rate:** ≥70% of opportunity searches result in a detail view.
- **Recommendation Click-Through Rate (CTR):** ≥20% click-through on personalized opportunity cards.
- **FormSG-Click Rate (STIPs & Gigs):** % of STIPs/Gigs detail views where the officer clicks through to the extracted FormSG link. The actual measurable apply-intent signal for STIPs & Gigs — Compass has no visibility past this click.
- **Dead-End Apply Rate (STIPs & Gigs):** % of STIPs/Gigs detail views where the Apply button is disabled because the posting has no FormSG link. Flags posters who aren't including a FormSG link, a real gap this model creates (R-27).
- **Outbound Redirect Intent Rate:** ≥20% of opportunity detail views click through to source portals. Covers Internal Jobs, IJR, and Secondment (STIPs & Gigs tracked separately via FormSG-Click Rate, since it deep-links rather than redirects to a landing page). The primary conversion metric for most of R1.
- **Cross-HR-system dead-end rate:** % of Secondment/Internal Job/IJR clicks that hit the auth gap (R-24). One of the only conversion signals Compass can instrument for those types. No target set yet; needs a baseline once R-24 has an R1-scoped answer.

**6.3 Guardrail Metrics**
- Pilot officer satisfaction ≥3.5/5.
- If Dead-End Apply Rate (postings missing a FormSG link) exceeds 15% at the 4-week mark, escalate to Adrian/BOs on whether to require FormSG links at posting time on OTG.

## 7. Scope (Stories + Success Criteria)

See [Epic A One-Pager (STIPs & Gigs)](2026-09-24-W39-epic-a-stips-gigs-one-pager.md), [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md), and [Epic B One-Pager (Internal Jobs, incl. IJR)](2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md) for full detail. Epic A is the thinnest epic in R1 — a discovery pull-through plus FormSG-link extraction, no native build. **IJR is folded into Epic B as of 25 Sep** (D-050) — its own one-pager (previously "Epic D") is superseded; the two types share one shape (discovery-only, no native build) even though their ingestion sources differ.

| Epic | Story | Success Criteria | Notes to designers/devs |
|---|---|---|---|
| **A — STIPs & Gigs (Discovery for all; FormSG-extraction Apply)** | Pull OTG postings into Compass discovery for everyone; extract FormSG links from posting descriptions and surface as the Apply button, for every agency | Any WOG officer browses STIPs/Gigs in Compass's unified catalog. Apply either deep-links to the posting's FormSG URL or shows a disabled button with "contact the poster" if none exists. No native creation, apply, or review in Compass — posting and applicant handling stay in OTG/FormSG | Zero-HR-role (R-27) holds cleanly — no in-app applicant data exists anywhere in this model |
| **B — Internal Jobs + IJR (Discovery, two sources)** | Internal Jobs: discovery via direct HRPS/Cumulus integration for the primary path, not OTG (Cumulus pushes into HRPS upstream); OTG-only postings still surface too. IJR: discovery via OTG directly, folded into this epic 25 Sep (D-050), unaffected by Internal Jobs' ingestion change | Internal Jobs: unified catalog listing, sourced directly from HRPS, agency-ringfenced. Apply redirects to HRPS or Cumulus with a specific deep-link, or OTG's landing page for the residual case. IJR: unified catalog listing, ringfenced per agency plus optional per-officer eligibility criteria. Apply redirects to OTG | Internal Jobs: HRPS API has no committed delivery date (D-01) — a hard blocker (R-07, 🔴 Red), not sizeable yet. IJR: not blocked, groomable now — its own OTG deep-link sub-issue under R-07 is a quality question, not a hard stop |
| **C — Secondment (Non-SJR paths)** | Discovery on Compass, redirect to OTG or the hosting HR system to apply | Consolidated listing on Compass; apply happens on the source system | R-24 (🔴 Red) pending: cross-HR-system auth gap means some officers hit a dead end applying |
| **E — Mainstream Jobs (Discovery)** | Discovery of C@G Public Vacancies | Ingestion from C@G public feed (F-23); external redirect CTA with disclaimer | This was always the shape the other types moved toward |
| **F — Saved Jobs (P1)** | Officer bookmarks opportunities | Bookmark toggle on cards/details; filter tab on Opportunities page | — |
| **G — RBAC & Privacy (P0)** | Module-scoped access control | Any WOG-authenticated officer gets module access | No in-app applicant review table anywhere means no poster/collaborator drawer-access RBAC to design for STIPs & Gigs or IJR. Scoped to discovery-only, platform-level module access |
| **H — CAM Integration** | Keycloak SCIM connector | Status open (R-15) | Do not commit engineering capacity to this epic until Adrian confirms which version is correct |
| **I — SJR (explicitly excluded from R1)** | — | SJR-the-programme is NOT an R1 epic. Stays on OTG through the 2027 cycle, migrates to Compass ahead of 2028 (R-13) | Listed here only to make the exclusion explicit — don't let SJR work drift into an R1 sprint |

**Explicitly Deferred to R2 (Out of Scope):**
- Native in-app apply, creation, and review for STIPs & Gigs, Internal Jobs, IJR, and Secondment.
- Cumulus API integration — Compass reads Internal Jobs from HRPS only; Cumulus data reaches Compass indirectly, via Cumulus's own upstream push into HRPS.
- Dynamic form builders and agency-specific custom question configuration.
- Multi-file PDF resume/portfolio uploads and automated parsing.
- Multi-stage ATS recruitment pipeline (shortlist, interview booking, scoring rubrics).
- Automated candidate regret email campaigns.
- SJR-the-programme's migration to Compass (targeted for the 2028 cycle, not R1).
- Full cross-HR-system single sign-on across OTG, HRPS, Cumulus, and Compass — the long-horizon fix, contingent on Workable becoming the WOG ATS, a 2027+ track. **This is deferred; the gap itself (R-24) is not** — R1 needs its own interim answer (disclosure on the card, or narrower "consolidated" framing), tracked in Section 12 and Section 14, not punted to R2.

## 8. What We Need You to Design (For Liting)

The native application form and applicant review table are not needed for STIPs & Gigs, or for any other type — apply/review happen externally, for every agency. What's left is discovery UI plus a FormSG-link/redirect-out pattern:

1. **The saved jobs bookmark toggle.** Bookmark icon on opportunity cards/detail views and the "Saved Jobs" filter tab on the Opportunities catalog.
2. **The redirect/deep-link-out pattern.** How a listing card and detail view signal "you'll leave Compass to apply here" — for STIPs & Gigs, this is a deep-link to the extracted FormSG URL; for Internal Jobs, IJR, and Secondment, it's a redirect to OTG or the hosting system.
3. **The "no FormSG link, contact poster" disabled state.** For STIPs & Gigs postings with no FormSG link in the description, the Apply button needs a disabled treatment that tells the officer to contact the poster directly.
4. **The cross-HR-system access disclosure (R-24).** Whatever interim answer R1 lands on for the auth gap likely needs a UI treatment — disclosing access requirements on the card, or another pattern. Depends on R-24 resolving first.

*Note on Internal Jobs:* ingests directly from HRPS/Cumulus now, not OTG — deep-linking to the specific posting is achievable once HRPS's API lands (R-07). Secondment is unaffected, still OTG-hosted.

*Note on IJR:* needs the same discovery/redirect treatment as Internal Jobs, item 2 above, not its own component set.

*Note on Mainstream Jobs:* discovery-only, redirects externally to Careers@Gov.

**For Liting:** both native components (form, review table) are off the design roadmap. Focus is the discovery catalog, the FormSG-deep-link/redirect-out treatment, the disabled-Apply "contact poster" state, and the R-24 disclosure pattern once it's scoped.

---

## 9. Data Analysis & Evidence

We don't have real usage data yet because we've never tracked this inside CareerCompass before — the numbers below are our best current estimate, not measured fact. **These need revisiting once the re-estimate (R-12) lands**, since a WOG-wide population is a materially different denominator than a pilot cohort.

| Metric | Where we are now (estimated) | Where we want to be |
|---|---|---|
| % of officers who complete an application without leaving CareerCompass | 0% — no native apply exists anywhere, so this is structural, not an estimate | N/A under this model — retired as a target (see Section 6) |
| Officers completing a development action (our North Star) | Can't measure today | 10% of onboarded officers — target date pending re-estimate. Not directly instrumentable; needs a proxy metric |
| Applications submitted through CareerCompass | 0 (applications submit via FormSG, not Compass) | N/A — see FormSG-Click Rate (Section 6.2) instead |

## 10. Market / Benchmark Scan

Not done. No market or benchmark scan exists in any source document.

---

## 11. Go-To-Market & Timeline

**Pending re-estimate (R-12, 🔴 Red).** Populate this section only after Adrian/Rama/Michelle complete an estimate against the confirmed scope below — don't carry forward any prior draft's numbers as placeholders.

**What we do know:**
- **Population committed:** WOG-wide (R-14, resolved).
- **Target window referenced elsewhere:** Feb-Mar 2027, from the 21 Sep Product x BO meeting — a target window, not a committed kickoff or launch date. Don't present this as reconciled.
- **VAPT is confirmed in scope for R1**, with R1 and R2 findings both going through risk acceptance rather than a hard pre-launch remediation gate.
- **Squad composition:** Thomas Huchedé is Tech Lead, alongside Barry Lim / Rama Moorthy. Build capacity is **3.5 engineers** — see Section 13.
- **Engineering scope is final in shape, but not fully sizeable yet.** Native creation, apply, and review for STIPs & Gigs and IJR are out, for every agency. RBAC narrows to platform-level module access only. Design work narrows to discovery + FormSG-link/redirect UI. Epic A is the thinnest epic in R1 — but Epic B's Internal Jobs half is currently the harder blocker: it has no committed HRPS API delivery date (D-01, R-07, 🔴 Red), so it can't be sized with the rest of this list yet. IJR (folded into Epic B, D-050) is not blocked and can be estimated now.

---

## 12. Risks, Assumptions & Mitigations

Full register: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md). Top items relevant to this scope:

| Risk | Category | Impact | Mitigation |
|---|---|---|---|
| **R-07 — Internal Jobs ingests directly from HRPS/Cumulus, not OTG; HRPS API undelivered; OTG-only postings remain a weak residual** | Integration | 🔴 Red. Internal Jobs' primary discovery path has no ingestion source until HRPS's API is delivered — no committed date (D-01). Separately, whatever share of internal jobs stays OTG-only keeps the old weak, no-deep-link experience even after HRPS delivers. IJR and Secondment are unaffected, still OTG-ingested | Get a committed delivery date on the HRPS API from NCS/Lee Koon TEU; confirm whether HRPS supplies ringfencing/eligibility data directly or Compass builds that logic; size how many internal jobs are OTG-only vs. HRPS/Cumulus-sourced |
| **R-24 — No cross-HR-system authentication** | Technical Architecture / UX | Officers hit this dead end across nearly every redirect-based type | Needs an R1-scoped answer (disclosure on the card, or restrict "consolidated" framing to what the officer's access actually covers) — not a 2027+ deferral |
| **R-27 — STIPs & Gigs apply mechanism** | Scope / Operational Readiness | FormSG links extracted from OTG postings become the Apply button, or the button is disabled with "contact the poster" if no link exists, for every agency. Zero-HR-role holds cleanly | Confirm with Rama/Barry how FormSG link extraction actually parses posting descriptions |
| **R-29 — FormSG MVP data migration (all agencies)** | Data / Technical | FormSG is the confirmed apply mechanism for all agencies | Confirm with Adrian/BOs whether in scope for R1; get a volume estimate covering all agencies |
| **R-31 — Source-of-truth reliability** | Process | Relayed, second-hand accounts of leadership direction have produced conflicting pictures of the same decision in the past; direct transcripts have proven more reliable | Get Adrian, Xian, Mark, and GK in one room, or at minimum treat a written summary as canonical, before any future architecture change. Treat direct meeting transcripts as higher-confidence than second-hand summaries when accounts conflict |
| **R-12 — Effort/timeline unreconciled** | Timeline | Every circulating man-week/date figure predates the current confirmed scope | Re-run the estimate once, against Section 7 as it now stands |
| **R-15 — CAM status open** | Governance | CMM is read/view only, not creation — Compass reads and surfaces competency data, it is not a CRUD platform. CAM half still unresolved | Get Adrian's direct confirmation on CAM before any Mark-facing slide states a position |
| **CAM SCIM rejection** | Technical | If rejected, effort expands +3–4 mw (pre-dates re-estimate, may shift) | Sizing contingent on SCIM adoption; escalate for a 4th engineer or descope if rejected |
| **R-32 — No confirmed ATS strategy for 2027** | Strategic / Dependency | R1's discovery-only, redirect/FormSG architecture implicitly assumes a future ATS absorbs the transaction layer Compass isn't building now. If ATS isn't viable, Compass may need native posting/workflow/application-management capability | Get Gek Khiang's 2027 ATS viability answer on record with a date; escalate immediately if the answer is "not viable" or "uncertain" |
| **R-33 — R1 defers rather than solves OTG replacement** | Strategic | Adrian's own framing: "we are only dodging the bullet, we are kicking it down to R2." No end-state exists yet for STIPs & Gigs creation, Internal Jobs creation, or opportunity publishing once OTG is eventually retired | Make this trade-off explicit whenever R1 scope is presented upward; keep a standing R2/R3 "decommissioning debt" tracking item |

---

## 13. Engineering Requirements Summary

**Pending re-estimate (R-12), and split into two passes per D-050.** Estimate now: STIPs & Gigs (discovery + FormSG-link extraction, no native apply build), IJR (OTG-hosted discovery-only, folded into Epic B but not blocked), Secondment non-SJR (redirect-based, OTG), RBAC (platform-level module access only), CAM (pending confirmation of whether it's in scope, narrowed to read/view-only per R-15). **Hold Internal Jobs discovery out of this pass** — it's the Epic B story that depends on direct HRPS/Cumulus integration, and it has no committed API delivery date (D-01, R-07, 🔴 Red). Sizing it now would produce a number that has to be redone once the API date is known; wait, or size it with an explicit placeholder contingency if a number is needed sooner.

**Worth confirming with Rama:** Epic A's "no blocking risk, start first" sequencing logic (Section 7) — it's the smallest epic in R1, and now shares that "ready to start" status with IJR's half of Epic B. Internal Jobs' half is the one epic-level item actually blocking a full re-estimate.

**Dedicated Squad:**
- **Tech Lead (0.5+ FTE):** Thomas Huchedé
- **Platform & Auth (1.0 FTE):** Hao Eng Chua
- **Backend & Ingestion (1.0 FTE):** Léo Milbor
- **+1.0 FTE build capacity:** Jennie — via the [Opportunities Estimation](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2691465430/Opportunities+Estimation) Confluence page (20 gross / 18 net man-weeks, Oct–Feb). Total build+lead capacity: **3.5 engineers**. Start date still needs confirming with Rama
- **Tech Lead (0.3 – 0.5 FTE, shared):** Barry Lim / Rama Moorthy
- **Product Designer (0.5 FTE):** Li Ting Kway (Liting)

---

## 14. Decision Tracker (Key BO Calls Needed)

| Decision Needed | Who Decides | Needed By | Recommendation |
|---|---|---|---|
| **Confirm this scope is genuinely final with Mark/GK, not still contested** | Michelle Yip, Adrian Ang | Immediately — before any further downstream work builds on this version | Get Adrian, Xian, and Mark/GK in a joint conversation, or treat a written summary as canonical, not relayed through one channel at a time. Highest-priority open item in this tracker |
| **HRPS API committed delivery date** | Rama Moorthy, Adrian Ang (with NCS/Lee Koon TEU) | Immediately — blocks Internal Jobs discovery entirely (Epic B) | Escalate directly. Without this, Internal Jobs has no ingestion source and can't be sized (D-01, R-07, 🔴 Red) — the single highest-priority open dependency in R1 after Mark/GK confirmation above |
| **Re-estimate effort/timeline against confirmed scope** | Michelle Yip, Adrian Ang, Rama Moorthy | ASAP, but only after the two items above close — blocks this document's Sections 11 & 13 | Run the estimation session in two passes per D-050: everything except Internal Jobs now, Internal Jobs once the HRPS API date lands |
| **Start date for Jennie (4th engineer)** | Barry Lim / Rama Moorthy | Before the re-estimate session | Still need start date; also worth checking whether the squad still needs 3.5 engineers given the reduced build scope (see Section 13) |
| **CAM: R1 or R2** | Adrian Ang | Before any Mark-facing scope slide goes out again | CMM half narrowed to read/view-only (R-15) — get a single written answer on CAM; update this document and any other affected doc the same day |
| **R-24 interim answer for R1** | Adrian Ang, Michelle Yip | Before Secondment's, Internal Jobs', or IJR's apply flow ships | Disclose HR-system access requirements on the listing card, or restrict "consolidated" framing to what the officer's access covers |
| **Open Posting by Anybody (Self-Serve vs Moderation)** | Adrian / PSD BOs | Before grooming | Approve self-serve posting; rely on post-publish transparency |
| **FormSG MVP data migration: in or out of scope? (all agencies)** | Adrian / PSD BOs | Before launch | FormSG is confirmed the apply mechanism for every agency — worth an explicit answer (R-29) |

---

*Next review: once the re-estimate (R-12) and CAM confirmation (R-15) land — this document's Sections 7, 11, 13 should be revisited immediately after, not on the normal weekly cadence.*
