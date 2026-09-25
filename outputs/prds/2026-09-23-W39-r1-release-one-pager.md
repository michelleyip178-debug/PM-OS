*Draft, not yet synced to Confluence. Supersedes [2026-09-18-W38-r1-epic-one-pager.md](2026-09-18-W38-r1-epic-one-pager.md) — that version was pilot-scoped (6 agencies) and pre-dates the 23 Sep scope confirmation. Source: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), [R1 Scope Decision artifact](../journey-maps/2026-09-23-W39-r1-scope-decision-opportunities.html), [Mobility Programmes Journey Map Index](../journey-maps/2026-09-22-W39-mobility-programmes-journey-map-index.md). Template origin: [Product Epic 1-pager Template](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931675660/Product+Epic+1-pager+Template).*

# CareerCompass | OTEP-Pathfinder — R1 Release One-Pager

| | |
|---|---|
| **Release** | R1 (Opportunities Marketplace — WOG-Wide Confirmed Scope) |
| **Date** | 23 Sep 2026 |
| **Target** | **⚠️ Pending re-estimate (R-12) — Feb-Mar 2027 is a target window from the 21 Sep Product x BO meeting, not a reconciled kickoff/launch date. Do not quote as final.** |
| **Status** | Draft — scope confirmed, effort/timeline pending re-estimate against this scope |
| **Author** | Michelle Yip |
| **Last updated** | 25 Sep 2026, third and final correction this round — STIPs & Gigs apply reverts back to uniform FormSG-extraction for every agency, pilot/non-pilot split withdrawn (R-27, third pass); Internal Jobs, IJR, Secondment unaffected, remain pure OTG-redirect |
| **Product Designer** | Li Ting Kway (Liting) |
| **Engineering Leads** | Rama Moorthy, Barry Lim |
| **Prototype - Figma** | [zipper-ritzy-40733845.figma.site](https://zipper-ritzy-40733845.figma.site) |

## The Short Version

**⚠️ Architecture reversed 25 Sep, and STIPs & Gigs apply corrected a third time — read the banner below before anything else in this document.** Mark & GK's confirmed R1 direction moves STIPs & Gigs, Internal Jobs, IJR, and Secondment back toward an OTG-dependent, discovery-only model. STIPs & Gigs apply is now confirmed **unchanged from MVP, for every agency, no exceptions** — a pilot/non-pilot native-apply split was floated and withdrawn the same day, see the banners below.

For every opportunity type in R1, officers still leave CareerCompass to apply, and once they leave, we still lose visibility — except where Compass can surface a FormSG link directly as the Apply button (STIPs & Gigs). For posting creators, finding internal talent continues to happen through OTG, not natively in Compass, for every agency.

R1 covers five opportunity types under one confirmed population model, plus two platform foundations:

1. **STIPs & Gigs (Discovery for all, FormSG-extraction Apply, unchanged from MVP):** Postings continue in OTG for every agency, no exceptions — Compass never builds a creation flow. Discovery is native to Compass, WOG-wide. **Apply is unchanged from MVP, confirmed 25 Sep, third and final pass:** Compass extracts the FormSG link embedded in the OTG posting's description and shows it as the Apply button. If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly. No native in-app apply exists anywhere, for any agency.
2. **Internal Jobs (Discovery Only):** Postings continue in OTG (fed upstream by HRPS/Cumulus). Compass displays OTG postings for discovery. Apply redirects back to OTG. Whether Compass can deep-link to a specific posting or only the general OTG landing page is unresolved (R-07, 🟠 Amber).
3. **Secondment (agency-led & officer-initiated paths):** Same model as Internal Jobs — OTG-hosted, discovery via Compass, redirect to apply. **This does not include SJR itself** — PSD's specific annual exercise stays on OTG through the 2027 cycle, migrating ahead of the 2028 cycle (R-13, unaffected by this reversal).
4. **Internal Job Rotation (IJR):** **Reversed 25 Sep (R-25) — grouped with Internal Jobs and Secondment.** OTG-hosted, discovery-only in Compass, redirect to apply. None of 24 Sep's native-Compass work (self-serve creation, in-app HR review, status tracking) applies going forward. See [Epic D One-Pager](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md) — needs a full rewrite as a discovery-only epic.
5. **Mainstream Jobs (Careers@Gov):** Unchanged — discovery-only via existing C@G ingestion, external redirect to apply. No Compass ownership beyond the listing.
6. **RBAC & Privacy:** Module-scoped access control, open to any WOG-authenticated officer — re-sized against WOG-wide population, not the old 6-pilot-agency gate. With no native apply anywhere in R1 (STIPs & Gigs included, as of the third correction), there's no in-app applicant data to gate — RBAC scope narrows to platform-level module access only.
7. **CAM Integration:** **⚠️ Pending (R-15)** — status conflicts across source documents, see Section 9.

> **🔴 STIPs & GIGS APPLY REVERTED AGAIN, 25 Sep, third and final pass on this point: FormSG-uniform confirmed, pilot/non-pilot split withdrawn.** The banner below this one ("STIPs & GIGS CORRECTED") introduced a pilot/non-pilot split (6 pilot agencies native apply, everyone else OTG). **That split is now withdrawn.** The OTEP Squad Sync transcript (25 Sep) confirms Mark/GK's actual direction: STIPs & Gigs apply is **unchanged from MVP** for every agency, no exceptions. Compass extracts FormSG links embedded in OTG posting descriptions and surfaces them as the Apply button. If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly. No native in-app apply exists anywhere in this model — the pilot-agency native-apply build (RBAC, applicant review, in-app status tracking) does not happen. Confirmed directly by Michelle after reviewing the conflict between the two accounts. Full detail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27, third pass; R-31, process risk).
>
> **🔴 ARCHITECTURE OVERRIDDEN, 25 Sep — read this before citing anything above.** Mark & GK's confirmed R1 direction, relayed via Xian and confirmed as applying to R1 itself, reverses the native-Compass architecture built up 23-24 Sep. Internal Jobs, IJR, and Secondment move to an OTG-dependent, discovery-only model, redirect to apply, for every agency. Full detail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, R-25, R-31), [Impact Analysis](../analyses/2026-09-25-W39-r1-scope-impact-mvp-conflict.md).
>
> **🟠 STIPs & GIGS CORRECTED, 25 Sep, later same day: pilot/non-pilot split, not uniform OTG/FormSG.** ~~The banner above initially applied to STIPs & Gigs too — that was wrong. The 6 pilot agencies apply natively in-app in Compass, same shape as the original 23-24 Sep confirmation. Only non-pilot agencies redirect to OTG, exactly as today.~~ **This split was itself withdrawn later the same day — see the banner at the top.** Posting/creation stays OTG-only for every agency regardless of apply mechanics. Full detail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27, corrected a third time).
>
> **🟢 SCOPE CONFIRMED, 23 Sep** — Adrian's R1 scope slide ("STIPs & Gigs | Internal Jobs, SJRs & Secondments") settled the population and platform questions that blocked this document for two weeks. **This is now WOG-wide, not pilot-only.** This population confirmation is unaffected by any of the 25 Sep apply-mechanism churn above — WOG-wide still holds for discovery, only the apply mechanics changed. Full detail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-13, R-14, R-23, R-24).
>
> **What this document does NOT yet have:** a re-estimated effort figure (R-12, 🔴 Red — every man-week number that's circulated predates both the 23 Sep scope confirmation and the 25 Sep architecture reversal) and a resolved CAM position (R-15, 🟠 Amber — three source documents disagree on whether CAM is R1 or deferred to R2). Sections 12 and 14 below are marked pending rather than guessed at. Don't cite this document's timeline or effort numbers until those close.

---

## 1. Background & Context

**Why this matters strategically:** Our North Star metric is officers completing a development action — but today, once an officer clicks Apply, they leave CareerCompass entirely, so we have no way to know if they ever finished. R1 is what makes that metric measurable at all, not just bigger.

**Why we're doing this now:** Leadership approved "apply without leaving CareerCompass" back in March 2026 SteerCo Meeting. R1 is where we actually build it.

**What's changed since the last one-pager (18 Sep):** Two weeks of scope disagreement — pilot-only vs. WOG-wide population, whether SJR and Secondment are the same thing — resolved on 23 Sep via Adrian's scope slide. Whether IJR was in scope took a genuinely bumpy path on 24 Sep alone: briefly logged as decided (wrongly) → corrected to "open" → resolved to "out of R1, moves with SJR" → **reversed again to confirmed R1 scope**, same day. The final state: IJR ships in R1, same delivery shape as STIPs & Gigs, decoupled from SJR's 2028 timeline. The prior document's "6 pilot agencies" framing, its Mainstream Jobs grouping (which conflated Internal Jobs, SJR, and Secondment into one discovery-only bucket), and its "no native apply beyond STIPs/Gigs" position are all superseded. See the [R1 Scope Decision artifact](../journey-maps/2026-09-23-W39-r1-scope-decision-opportunities.html) for the full before/after.

Today, officers already use CareerCompass to find STIPs and Gigs — the discovery half works there. Internal Jobs, Secondment, and now IJR discovery/apply are what this scope confirmation commits to. IJR's design is the least mature of the three — see [Epic D One-Pager](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md), which needs a full rewrite from its current "out of scope" framing into real groomable stories.

## 2. Problem Statement

**For officers:** you find something worth applying to, click Apply, and get sent to a different website where you retype everything you already told us once. Then you hear nothing. As far as CareerCompass is concerned, you vanished. **Confirmed 25 Sep, third pass: this stays unsolved for every type, including STIPs & Gigs.** STIPs & Gigs apply is unchanged from MVP — Compass surfaces the posting's FormSG link as the Apply button (or a disabled button with "contact the poster" if no link exists), but the officer still leaves Compass to actually apply. Every officer applying to Internal Jobs, IJR, or Secondment also redirects out, to OTG or the hosting HR system. Only Mainstream Jobs was ever redirect-only by design.

**For posting creators (any officer or manager):** posting a gig means juggling informal channels — broadcasting across chats, fielding applications by email, and tracking progress in a manual spreadsheet. Nothing connects to the officer's profile. **Posting itself stays OTG-only for every agency, no exceptions** — this was never in question and doesn't change with the apply-mechanism corrections. Applicant review also stays entirely off-platform, in whatever channel the poster already uses (email, FormSG's own response view) — there is no in-app applicant review anywhere in R1, for any agency.

**Cross-HR-system authentication (R-24):** an officer anywhere in government can discover a listing hosted on an HR system they don't personally have access to. This risk doesn't go away under the reversal — if anything it's more central now, since redirect is the primary apply mechanism for nearly every type, not an edge case.

## 3. Target User

**Population: WOG-wide**, not the prior 6-agency pilot cohort — this is the single biggest change from the 18 Sep draft (R-14, resolved). STIPs & Gigs discovery/creation/application opens to all WOG officers via POCDEX integration with WOG officer data.

- **Lane 1 — Intentional Mover:** Senior, targeted, time-pressured officer who knows what they want. Primary beneficiary of WOG-wide discovery and consolidated browsing. For STIPs & Gigs, Apply either deep-links to the posting's FormSG form or is disabled with "contact the poster" — not an in-app flow either way.
- **Lane 2 — Passive Watcher:** Early-career officer, open but not actively searching. Primary beneficiary of Saved Jobs — unaffected by any of the apply-mechanism churn.
- **Lane 3 — Posting Creator (Anybody):** Any officer (project lead or team manager) WOG-wide who needs support on a project, task, or gig. **Posting itself continues in OTG for every agency, no exceptions.** Zero HR role in STIPs & Gigs (R-27) holds cleanly now — there's no in-app applicant data anywhere in this model, pilot agency or not.
- **Lane 4 — Rotation/Secondment Seeker:** An officer exploring Secondment (non-SJR paths) discovers on Compass, redirects to OTG or the hosting HR system to apply (reversed 25 Sep, same model as Internal Jobs). **IJR seekers are grouped the same way** (R-25, reversed 25 Sep) — OTG-hosted, discovery-only in Compass, redirect to apply. No native creation, apply, or review in Compass for IJR. See Epic D, rewritten to reflect this.

## 4. Value Propositions & Hypotheses

### 4.1 Overall Value Propositions

- **For Officers:** "Find every public sector opportunity in one place." **Corrected 25 Sep, third pass:** the "apply in under two minutes with your profile already filled in" claim is retired entirely — apply is unchanged from MVP for STIPs & Gigs (FormSG, off-platform) and every other type. Discovery is the whole pitch now.
  *(Shift: No more checking three separate portals to find opportunities. Applying itself is unchanged from today, across every opportunity type.)*
- **For Posting Creators (Anybody Posting a Gig/STIP):** posting continues on OTG for every agency, no exceptions. Applicant review also stays off-platform — there is no in-app review table for any agency. This value prop is now purely "your posting gets WOG-wide visibility," not an applicant-management upgrade.
- **Unifying Pitch:** "CareerCompass brings every public sector opportunity into one discovery view, WOG-wide." Confirmed 25 Sep, third pass — drop the "apply in two minutes flat" claim for good. Discovery is the pitch, not apply.

### 4.2 Core Hypotheses (1 Line Each)

1. **Gig Apply (Pre-fill):** *If* we pre-fill gig applications with profile data, *then* application completion will jump from ~20% to ≥40% because officers avoid retyping basic info. **Retired 25 Sep, third and final pass.** No native apply build exists for any agency — STIPs & Gigs apply is unchanged from MVP (FormSG link extraction, off-platform), so there's no in-app form to pre-fill. This hypothesis does not apply to R1.
2. **Applicant Review (Managers):** *If* managers get an instant email alert and a simple Offer/Reject review table, *then* outcome turnaround will drop to ≤14 days. **Retired 25 Sep, third and final pass.** No in-app applicant review exists anywhere in this model — posters see applicants however FormSG already surfaces them, entirely off-platform.
3. **Unified Discovery (WOG-wide):** *If* we aggregate STIPs, Gigs, Internal Jobs, Secondment, and IJR into one catalog, *then* monthly active searchers will grow by **≥30%**, even where apply routes externally. **Still holds, R1's sole surviving core value hypothesis** alongside Saved Jobs — every apply path in R1 routes off-platform, discovery is what Compass actually delivers.
4. **Saved Jobs (Retention):** *If* officers can bookmark roles in one click, *then* 7-day repeat visits will rise by **≥25%** as passive watchers return to review saved roles. **Unaffected by any of the apply-mechanism churn.**

*Two of R1's four hypotheses are retired as of 25 Sep, confirmed final on the third pass. Discovery and Saved Jobs are what's left standing — both hold up under the OTG-redirect/FormSG-link model. Targets for the two surviving hypotheses are still carried over from the pilot-scope draft and haven't been revalidated against WOG-wide population; treat as directional until re-estimate lands.*

## 5. End-to-End User Journeys

Full detail lives in the [Mobility Programmes Journey Map Index](../journey-maps/2026-09-22-W39-mobility-programmes-journey-map-index.md) — twelve journey maps (officer + HR, six types) plus two comparison artifacts, each now carrying an inline R1-scope-boundary note. Summarized:

### 5.1 Officer Journey (Discover → Decide → Apply → Track)

1. **Discover & Browse:** Officer logs in via Singpass/TechPass. Lands on the unified Opportunities page, viewing listings across STIPs, Gigs, Internal Jobs, Secondment, IJR, and Mainstream Jobs — filtered to their eligibility, WOG-wide.
2. **Bookmark (Optional):** Clicks the bookmark icon on interesting roles to review later under the "Saved Jobs" filter tab.
3. **Apply — confirmed 25 Sep, third pass, all paths redirect or deep-link out of Compass:**
   - **STIPs & Gigs (FormSG-extraction, unchanged from MVP, confirmed 25 Sep third pass):** Sees the listing in Compass, discovered via OTG pull-through, WOG-wide, for every agency. Clicking Apply either deep-links to the FormSG URL Compass extracted from the OTG posting's description, or, if no FormSG link exists on the posting, shows a disabled Apply button telling the officer to contact the poster directly. No native in-app apply exists for any agency, pilot or not.
   - **Internal Jobs (OTG redirect, reversed 25 Sep):** Sees the listing in the unified catalog, sourced from OTG. Clicking Apply redirects back to OTG — either the general Opportunities landing page or a specific posting, depending on whether OTG deep-linking is technically possible (open question, R-07).
   - **IJR (OTG redirect, reversed 25 Sep):** Same model as Internal Jobs — grouped with it under Mark/GK's direction. No native creation, apply, or review inside Compass.
   - **Secondment, non-SJR paths (OTG redirect):** Same model — discovery via Compass, redirect to OTG (or the hosting HR system) to apply. R-24's cross-system auth gap remains relevant if that redirect still lands officers somewhere they don't have access.
   - **Mainstream Jobs & SJR (Redirect, unchanged):** Clicks through to Careers@Gov or OTG. Application and tracking happen entirely on the source system — this was never native and is unaffected by the 25 Sep corrections.
4. **Track Status:** No in-app status tracking for any type under the confirmed model — everything now redirects or deep-links out before an officer would ever reach an in-app status view.
5. **Outcome:** Outcome communication happens outside Compass for every opportunity type.

### 5.2 Posting Creator Journey — Anybody (Post → Alert → Review → Decide)

**Corrected 25 Sep, third pass — this section previously described a native in-app review/decide flow for pilot agencies. That flow does not exist.** Posting continues on OTG for every agency; applicant review and decisioning happen entirely off-platform, through whatever FormSG already provides, not inside Compass:

1. **Create Posting:** Any authenticated officer, WOG-wide, creates the posting in OTG — unaffected by any of this document's corrections, this was never a Compass build. Poster includes a FormSG link in the posting description if they want applicants to be able to apply.
2. **Publish:** Posting goes live on OTG, WOG-wide discoverable once Compass's pull-through syncs it into the unified catalog.
3. **Receive Applications:** Handled entirely through FormSG's own notification/response mechanism, outside Compass — no Compass-native notification, review table, or decision flow exists.
4. **Decide & Close:** Offer/reject decisions and vacancy closure happen through whatever process the poster already uses today (FormSG responses, email, manual tracking). Compass has no role here.

*(Prior text, retired 25 Sep, third pass: a native "Post → Alert → Review → Decide" in-app flow with instant email alerts, an applicant review table, and in-app Offer/Reject actions. That flow was briefly confirmed for pilot agencies on 25 Sep afternoon and withdrawn the same day — no native review/decide capability exists in R1 for any agency.)*

---

## 6. Success Metrics

**6.1 Core North Star (Discovery & Action)**
- **Opportunities Discovered per Officer:** Average number of opportunity detail views per active officer per month. Unaffected by any of the apply-mechanism corrections — this is R1's strongest, most directly measurable metric.
- **Officers completing a development action:** 10% of onboarded officers (North Star lagging outcome) — target date pending re-estimate. **Not directly measurable for any opportunity type, confirmed 25 Sep, third pass.** STIPs & Gigs apply is unchanged from MVP (FormSG, off-platform) — Compass can see that an officer clicked the Apply/FormSG link, not whether they completed or were selected. Same for every other type. This metric needs a proxy (see Outbound/FormSG-Click Intent Rate below), not a direct completion measurement, anywhere in R1.

**6.2 Input Metrics (Discovery & Conversion) — confirmed 25 Sep, third pass**
- **Search-to-Click Rate:** ≥70% of opportunity searches result in a detail view. Unaffected.
- **Recommendation Click-Through Rate (CTR):** ≥20% click-through on personalized opportunity cards. Unaffected.
- ~~**Apply Completion Rate (STIPs/Gigs):**~~ **Retired 25 Sep, third and final pass.** No native apply exists for any agency, so there's no in-app completion event to measure. Replaced by FormSG-Click Rate below.
- **FormSG-Click Rate (STIPs & Gigs):** % of STIPs/Gigs detail views where the officer clicks through to the extracted FormSG link. This is the actual measurable apply-intent signal for STIPs & Gigs under the confirmed model — Compass has no visibility past this click.
- **Dead-End Apply Rate (STIPs & Gigs):** % of STIPs/Gigs detail views where the Apply button is disabled because the posting has no FormSG link. New metric, 25 Sep — flags posters who aren't including a FormSG link, a real gap this model creates (R-27).
- **Outbound Redirect Intent Rate:** ≥20% of opportunity detail views click through to source portals. Covers Internal Jobs, IJR, and Secondment (STIPs & Gigs now tracked separately via FormSG-Click Rate above, since it deep-links rather than redirects to a landing page). This is the primary conversion metric for most of R1.
- ~~**Status Latency (STIPs/Gigs):**~~ **Retired 25 Sep, third and final pass.** Status lives entirely on whatever channel the poster uses (FormSG, email) — Compass has no status data to measure latency against, for any agency.
- **Cross-HR-system dead-end rate** — % of Secondment/Internal Job/IJR clicks that hit the auth gap (R-24). Still one of the only conversion signals Compass can instrument for those types, since apply happens off-platform for nearly everything. No target set yet; needs a baseline once R-24 has an R1-scoped answer.

**6.3 Guardrail Metrics**
- Pilot officer satisfaction ≥3.5/5. Unaffected.
- ~~**Pre-fill trust (pilot agencies):** stale/wrong pre-fill must not increase form abandonment vs. baseline.~~ **Retired 25 Sep, third and final pass.** No pre-fill exists anywhere in this model — there's no native form to pre-fill for any agency.
- ~~If apply completion rate <25% at 4-week mark, or stale pre-fill incidents >10% of submissions → pause rollout.~~ **Replaced.** New guardrail: if Dead-End Apply Rate (postings missing a FormSG link) exceeds 15% at the 4-week mark, escalate to Adrian/BOs on whether to require FormSG links at posting time on OTG.

## 7. Scope (Stories + Success Criteria)

**🔴 Architecture reversed 25 Sep, and STIPs & Gigs corrected a third time — every row below rewritten.** STIPs & Gigs, Internal Jobs, IJR, and Secondment all move to OTG-dependent, discovery/redirect (or, for STIPs & Gigs specifically, discovery + FormSG-link-extraction). See [Epic A One-Pager (STIPs & Gigs)](2026-09-24-W39-epic-a-stips-gigs-one-pager.md), [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md), and [Epic D One-Pager (IJR)](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md) — all three rewritten to match. Epic A is now the thinnest epic in R1, not the most built-out; Epic D collapses to match Internal Jobs' shape rather than Epic A's old native shape.

| Epic | Story | Success Criteria | Notes to designers/devs |
|---|---|---|---|
| **A — STIPs & Gigs (Discovery for all; FormSG-extraction Apply, unchanged from MVP)** | Pull OTG postings into Compass discovery for everyone; extract FormSG links from posting descriptions and surface as the Apply button, for every agency | Any WOG officer browses STIPs/Gigs in Compass's unified catalog. Apply either deep-links to the posting's FormSG URL or shows a disabled button with "contact the poster" if none exists. No native creation, apply, or review in Compass for any agency — posting and applicant handling stay in OTG/FormSG | **Corrected 25 Sep, third and final correction this round.** The pilot/non-pilot native-apply split (confirmed earlier the same day) is withdrawn. Zero-HR-role (R-27) holds cleanly — no in-app applicant data exists anywhere in this model |
| **B — Internal Jobs (Discovery)** | Discovery of Internal Jobs via OTG (fed upstream by HRPS/Cumulus) | Unified catalog listing, sourced from OTG, agency-ringfenced (flat agency-level check). Apply redirects to OTG | **R-07 severity down to 🟠 Amber** — the undelivered-HRPS-API blocker is moot since Compass no longer builds direct HRPS integration. Open question: whether OTG supports deep-linking to a specific posting or only the general landing page — unresolved, materially affects discovery quality |
| **C — Secondment (Non-SJR paths)** | Discovery on Compass, redirect to OTG or the hosting HR system to apply | Consolidated listing on Compass; apply happens on the source system | **Unchanged in direction by the reversal** — was already redirect-based. R-24 (🔴 Red) still pending: cross-HR-system auth gap means some officers hit a dead end applying |
| **D — IJR** | Discovery of IJR via OTG, redirect to apply | Unified catalog listing, ringfenced per agency plus optional per-officer eligibility criteria. No native creation, apply, or review in Compass | **Reversed 25 Sep (R-25) — grouped with Internal Jobs, not STIPs & Gigs.** Self-serve creation, in-app HR review, and status tracking confirmed 24 Sep are all out of scope again. Epic D one-pager rewritten a fourth time, now much thinner, mirroring Internal Jobs' row above. R-30 (OTG data migration) is now moot — IJR data never leaves OTG |
| **E — Mainstream Jobs (Discovery)** | Discovery of C@G Public Vacancies | Ingestion from C@G public feed (F-23); external redirect CTA with disclaimer | Unchanged — this was always the shape the other types just reverted to |
| **F — Saved Jobs (P1)** | Officer bookmarks opportunities | Bookmark toggle on cards/details; filter tab on Opportunities page | Unaffected by the reversal |
| **G — RBAC & Privacy (P0)** | Module-scoped access control | Any WOG-authenticated officer gets module access | **Shrinks further, 25 Sep, third pass** — no in-app applicant review table anywhere, for any agency, means no poster/collaborator drawer-access RBAC to design for STIPs & Gigs or IJR at all. Re-scope against discovery-only, platform-level module access, not any native-apply model |
| **H — CAM Integration** | Keycloak SCIM connector | **⚠️ Status conflict, not yet resolved (R-15).** Unaffected by the architecture reversal — still a separate open question | Do not commit engineering capacity to this epic until Adrian confirms which version is correct |
| **I — SJR (explicitly excluded from R1)** | — | SJR-the-programme is NOT an R1 epic, unaffected by the reversal. Stays on OTG through the 2027 cycle, migrates to Compass ahead of 2028 (R-13, resolved) | Listed here only to make the exclusion explicit — don't let SJR work drift into an R1 sprint |

**Explicitly Deferred to R2 (Out of Scope):**
- Native in-app apply, creation, and review for STIPs & Gigs, Internal Jobs, IJR, and Secondment (all reversed out of R1 on 25 Sep — would need a future release to reopen). STIPs & Gigs specifically: the pilot-agency native-apply build (RBAC, applicant review, in-app status tracking) that was briefly confirmed 25 Sep afternoon does not happen — withdrawn the same day, third pass.
- Live API integration with HRPS (Civil Service SAP) and Cumulus (Stat Board Workday) — even less relevant now that Compass's integration point is OTG, not HRPS directly.
- Dynamic form builders and agency-specific custom question configuration.
- Multi-file PDF resume/portfolio uploads and automated parsing.
- Multi-stage ATS recruitment pipeline (shortlist, interview booking, scoring rubrics).
- Automated candidate regret email campaigns.
- SJR-the-programme's migration to Compass (targeted for the 2028 cycle, not R1).
- Cross-HR-system authentication / single sign-on across OTG, HRPS, Cumulus, Compass (R-24's long-horizon fix — Workable becoming the WOG ATS is a 2027+ track; R1 needs its own interim answer, not this, and this answer now matters for more of R1 than before).

## 8. What We Need You to Design (For Liting)

**🔴 Design scope shrinks substantially, confirmed 25 Sep, third and final pass.** The native application form and applicant review table are not needed for STIPs & Gigs, or for any other type — apply/review happen externally, for every agency. What's left is discovery UI plus a FormSG-link/redirect-out pattern, not native form/table components:

1. ~~The fixed standard application form (STIPs & Gigs, pilot agencies only).~~ **Retired 25 Sep, third and final pass.** No native form exists for any agency — this was briefly reinstated earlier the same day and withdrawn. Do not build.
2. ~~The poster's applicant review table.~~ **Retired 25 Sep, third and final pass.** No in-app applicant review exists for any agency — applicant handling stays entirely in FormSG/OTG, off-platform.
3. **The saved jobs bookmark toggle.** Unaffected — bookmark icon on opportunity cards/detail views and the "Saved Jobs" filter tab on the Opportunities catalog.
4. **The redirect/deep-link-out pattern.** How a listing card and detail view signal "you'll leave Compass to apply here" — for STIPs & Gigs, this is a deep-link to the extracted FormSG URL; for Internal Jobs, IJR, and Secondment, it's a redirect to OTG or the hosting system. Applies to every agency now, no pilot exception.
5. **New, 25 Sep: the "no FormSG link, contact poster" disabled state.** For STIPs & Gigs postings with no FormSG link in the description, the Apply button needs a disabled treatment that tells the officer to contact the poster directly. This is a new design need created by the third correction.
6. **The cross-HR-system access disclosure (R-24).** Whatever interim answer R1 lands on for the auth gap likely needs a UI treatment — disclosing access requirements on the card, or another pattern. Depends on R-24 resolving first.

*Note on Internal Jobs, Secondment:* unaffected in direction by the reversal — both were already redirect-only or heading that way. Internal Jobs' deep-link-vs-landing-page question (R-07) still determines how specific the redirect can be.

*Note on IJR:* **reversed 25 Sep.** The structured application form, HR applicant review table, and officer status tracking Liting was cleared to start on 24 Sep are all out of scope again. IJR now needs the same discovery/redirect treatment as Internal Jobs, item 4 above, not its own component set.

*Note on Mainstream Jobs:* unchanged — discovery-only, redirects externally to Careers@Gov. Was always the shape everything else just reverted to.

**For Liting:** both native components (form, review table) are off the design roadmap, confirmed final. Focus is the discovery catalog, the FormSG-deep-link/redirect-out treatment, the new disabled-Apply "contact poster" state, and the R-24 disclosure pattern once it's scoped — worth a direct conversation on what this frees up her capacity for, given design scope has now narrowed twice in one day.

---

## 9. Data Analysis & Evidence

We don't have real usage data yet because we've never tracked this inside CareerCompass before — the numbers below are our best current estimate, not measured fact, and were sized against the prior pilot-only scope. **These need revisiting once the re-estimate (R-12) lands**, since a WOG-wide population is a materially different denominator than 6 agencies.

| Metric | Where we are now (estimated) | Where we want to be |
|---|---|---|
| % of officers who complete an application without leaving CareerCompass | **0%, confirmed 25 Sep, third pass** — no native apply exists anywhere, so this is structurally 0%, not an estimate | N/A under the confirmed model — retired as a target (see Section 6) |
| Officers completing a development action (our North Star) | Can't measure today | 10% of onboarded officers — target date pending re-estimate. Not directly instrumentable under the confirmed model (see Section 6); needs a proxy metric |
| Applications submitted through CareerCompass | 0 today, and 0 under the confirmed model (applications submit via FormSG, not Compass) | N/A — retired, see FormSG-Click Rate (Section 6.2) instead |

**When we'd pull back:** replaced 25 Sep, third pass — see the new Dead-End Apply Rate guardrail (Section 6.3). The prior 25%-completion / 10%-stale-pre-fill thresholds don't apply anymore since there's no native completion or pre-fill event to measure.

## 10. Market / Benchmark Scan

Not done. No market or benchmark scan exists in any source document.

---

## 11. Go-To-Market & Timeline

**⚠️ This entire section is pending re-estimate (R-12, 🔴 Red) — and this is now the THIRD major re-scoping event to invalidate a not-yet-run estimate.** WOG-wide vs. pilot-only (23 Sep), the IJR back-and-forth (24 Sep, five status changes in one day), and now the 25 Sep architecture reversal each landed before the prior one was ever sized. **The re-estimate should only be run once, against this now-confirmed, final architecture** — running it again before this reversal, only to redo it a fourth time, would repeat the exact pattern R-31 flags as a process risk in itself. Populate this section only after Adrian/Rama/Michelle complete that estimate against the reversed scope — don't carry forward any prior draft's numbers as placeholders.

**What we do know:**
- **Population committed:** WOG-wide (R-14, resolved), unaffected by the architecture reversal — this still changes the discovery/ingestion pipeline load versus the 6-agency pilot figure.
- **Target window referenced elsewhere:** Feb-Mar 2027, from the 21 Sep Product x BO meeting — a target window, not a committed kickoff or launch date. Don't present this as reconciled.
- **VAPT is confirmed in scope for R1**, with R1 and R2 findings both going through risk acceptance rather than a hard pre-launch remediation gate — this removes VAPT's prior "could add 6 weeks" uncertainty from the timeline picture once the re-estimate happens. Unaffected by the reversal.
- **Squad composition changed:** Thomas Huchedé moves into the Tech Lead role, alongside Barry Lim / Rama Moorthy. Build capacity is now **3.5 engineers**, not 3 — see Section 13.
- **New, 25 Sep, confirmed on a third pass: engineering scope shrank further and is now final.** Native creation, apply, and review for STIPs & Gigs and IJR are out, for every agency, no exceptions. RBAC narrows to platform-level module access only. Design work narrows to discovery + FormSG-link/redirect UI. The re-estimate needs to reflect this materially smaller build, not the pilot/non-pilot split briefly confirmed earlier the same day. Epic A is now the thinnest epic in R1 — a discovery pull-through plus FormSG-link extraction, no native build at all.

---

## 12. Risks, Assumptions & Mitigations

Full register: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (31 risks, 7 assumptions, 10 issues, 9 dependencies as of 25 Sep). Top items relevant to this scope:

| Risk | Category | Impact | Mitigation |
|---|---|---|---|
| **R-07 — OTG-dependent Internal Jobs, deep-link unresolved (REVERSED 25 Sep)** | Integration | Down to 🟠 Amber — the undelivered-HRPS-API blocker is moot, Compass no longer builds direct HRPS integration. Open question now: whether Compass can deep-link to a specific OTG posting or only the general landing page — materially affects discovery quality | Get a direct answer on OTG deep-linking capability — the single open technical question for Internal Jobs discovery |
| **R-24 — No cross-HR-system authentication** | Technical Architecture / UX | Unaffected by the reversal, and more central now — officers hit this dead end across nearly every redirect-based type, not just Secondment/Internal Jobs | Needs an R1-scoped answer (disclosure on the card, or restrict "consolidated" framing to what the officer's access actually covers) — not a 2027+ deferral |
| **R-25 — IJR reversed to OTG-hosted, redirect-only (REVERSED 25 Sep)** | Scope | Grouped with Internal Jobs and Secondment. None of 24 Sep's native-Compass work applies — no self-serve creation, no in-app HR review, no in-app status tracking. Epic D rewritten a fourth time as a thin discovery-only epic | Rewrite Epic D modeled on Internal Jobs (R-07), not STIPs & Gigs — done, see [Epic D One-Pager](2026-09-24-W39-epic-d-ijr-scoping-one-pager.md) |
| **R-27 — STIPs & Gigs apply reverted again, third and final pass, 25 Sep** | Scope / Operational Readiness | The pilot/non-pilot native-apply split confirmed earlier the same day is withdrawn. Apply is unchanged from MVP for every agency — FormSG links extracted from OTG postings become the Apply button, or the button is disabled with "contact the poster" if no link exists. Zero-HR-role holds cleanly — no in-app applicant data exists anywhere in this model | Rewrite Epic A's stories a third time, back to a single discovery + FormSG-extraction model. Confirm with Rama/Barry how FormSG link extraction actually parses posting descriptions |
| **R-29 — FormSG MVP data migration (applies to every agency again, 25 Sep)** | Data / Technical | FormSG is now the confirmed apply mechanism for all agencies, not just non-pilot — this re-widens the migration question back to its original, full scope | Confirm with Adrian/BOs whether in scope for R1; get a volume estimate covering all agencies, not just non-pilot |
| **R-30 — OTG data migration for IJR (MOOT 25 Sep)** | Data / Technical | Closed. IJR data stays on OTG under the reversed model — Compass never ingests it natively, so there's no migration to plan | No action needed. Reopen fresh if a future release moves IJR data natively into Compass |
| **R-31 — Architecture has reversed six times in three days (new, 25 Sep, proven out again same day)** | Process | Team trust in source-of-truth documents is genuinely at risk, not hypothetically — this is the second reversal within one day. Relayed, second-hand accounts of Mark/GK's direction produced three different pictures of the same decision; the direct transcript was the most reliable | Get Adrian, Xian, Mark, and GK in one room, or at minimum treat Xin Zhang's written summary as canonical, before touching R1 architecture again. Treat direct meeting transcripts as higher-confidence than second-hand summaries when accounts conflict |
| **R-12 — Effort/timeline unreconciled** | Timeline | Every circulating man-week/date figure predates the 23 Sep scope confirmation, the 25 Sep architecture reversal, and this third STIPs & Gigs correction | Re-run the estimate once, only after this correction has fully propagated — see Section 11 |
| **R-15 — CAM status conflict, narrowed further 25 Sep** | Governance | CMM narrows to read/view only, not creation (per OTEP Squad Sync) — Compass reads and surfaces competency data, it is not a CRUD platform. CAM half still a three-way conflict, unresolved | Update one-pager/reduced-scope brief to the read/view-only CMM model; get Adrian's direct confirmation on CAM before any Mark-facing slide states a position |
| **CAM SCIM rejection** | Technical | If rejected, effort expands +3–4 mw (pre-dates re-estimate, may shift) | Sizing contingent on SCIM adoption; escalate for a 4th engineer or descope if rejected |
| ~~Pre-fill data accuracy trust cliff (pilot agencies)~~ | Product | **Retired 25 Sep, third and final pass.** No pre-fill exists anywhere in this model — there's no native form for any agency | N/A |
| **R-32 — No confirmed ATS strategy for 2027 (new, 25 Sep)** | Strategic / Dependency | R1's entire discovery-only, redirect/FormSG architecture implicitly assumes a future ATS absorbs the transaction layer Compass isn't building now. If ATS isn't viable, Compass may need native posting/workflow/application-management capability | Get Gek Khiang's 2027 ATS viability answer on record with a date; escalate immediately if the answer is "not viable" or "uncertain" |
| **R-33 — R1 defers rather than solves OTG replacement (new, 25 Sep)** | Strategic | Adrian's own framing: "we are only dodging the bullet, we are kicking it down to R2." No end-state exists yet for STIPs & Gigs creation, Internal Jobs creation, or opportunity publishing once OTG is eventually retired | Make this trade-off explicit whenever R1 scope is presented upward; start a standing R2/R3 "decommissioning debt" tracking item now |

---

## 13. Engineering Requirements Summary

**⚠️ Pending re-estimate (R-12) — scope changed three times today, this is the final shape to estimate against.** The prior draft's 18.5–24.0 man-week figure (and the reduced-scope brief's 18.0–23.5 mw) were sized against pilot-only scope and the pre-23-Sep squad shape. Do not quote any old figure. Re-estimate against: **STIPs & Gigs (discovery + FormSG-link extraction, confirmed 25 Sep third pass — no native apply build for any agency)**, Internal Jobs discovery (OTG-sourced, deep-link question open), Secondment non-SJR (unchanged, redirect-based), IJR (OTG-hosted discovery-only, same shape as Internal Jobs), RBAC (platform-level module access only, no applicant-data gating needed anywhere), CAM (pending confirmation of whether it's even in scope, and now narrowed to read/view-only per R-15) — run against the squad below.

**Worth re-confirming with Rama:** Epic A's original "no blocking risk, start first" sequencing logic (Section 7) still holds under the confirmed model — it's now the smallest epic in R1, smaller than the WOG-wide-native version and smaller than the pilot/non-pilot split briefly confirmed earlier the same day. Confirm the actual size against the re-estimate once it runs.

**Dedicated Squad (updated 23 Sep — Thomas moves to Tech Lead):**
- **Tech Lead (0.5+ FTE):** Thomas Huchedé — was previously counted as a dedicated build engineer; re-estimate needs to reflect this capacity shift, not just a headcount swap
- **Platform & Auth (1.0 FTE):** Hao Eng Chua
- **Backend & Ingestion (1.0 FTE):** Léo Milbor
- **+1.0 FTE build capacity:** Jennie — name confirmed 24 Sep, surfaced via the [Opportunities Estimation](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2691465430/Opportunities+Estimation) Confluence page (20 gross / 18 net man-weeks, Oct–Feb), brings total build+lead capacity to **3.5 engineers**. Start date and whether the 0.5 FTE gap vs. the prior 1.5 FTE placeholder is real or a rounding difference still needs confirming with Rama
- **Tech Lead (0.3 – 0.5 FTE, shared):** Barry Lim / Rama Moorthy — unchanged from prior draft, now alongside Thomas rather than as the sole tech-lead capacity
- **Product Designer (0.5 FTE):** Li Ting Kway (Liting)

---

## 14. Decision Tracker (Key BO Calls Needed)

| Decision Needed | Who Decides | Needed By | Recommendation |
|---|---|---|---|
| **Confirm with Mark/GK this correction is genuinely final, not still contested (new, 25 Sep)** | Michelle Yip, Adrian Ang | Immediately — before any further downstream work builds on this version | Per R-31's mitigation: get Adrian, Xian, and Mark/GK in a joint conversation, or treat Xin Zhang's written summary as canonical, not relayed through one channel at a time. This is the highest-priority open item in this tracker |
| **Re-estimate effort/timeline against the confirmed, now-final scope** | Michelle Yip, Adrian Ang, Rama Moorthy | ASAP, but only after the item above closes — blocks this document's Sections 11 & 13 | Run the estimation session once, against Section 7 as it now stands — this is the third re-scoping event for STIPs & Gigs alone, don't estimate again until confirmed final |
| **Start date for Jennie (4th engineer, named 24 Sep)** | Barry Lim / Rama Moorthy | Before the re-estimate session | Still need start date; also worth checking whether the squad still needs 3.5 engineers given the reduced build scope (see Section 13) |
| ~~**Owner for STIPs & Gigs guardrail functions (RBAC, audit log) — pilot-agency native flow**~~ | Rama Moorthy, Barry Lim | — | **No longer applies, 25 Sep, third pass.** No native infrastructure or applicant data exists anywhere in this model — nothing for RBAC/audit-log to gate |
| **CAM: R1 or R2** | Adrian Ang | Before any Mark-facing scope slide goes out again | Unaffected by the architecture reversal. CMM half now narrowed to read/view-only (R-15) — get a single written answer on CAM; update this document and any other affected doc the same day |
| **R-24 interim answer for R1** | Adrian Ang, Michelle Yip | Before Secondment's, Internal Jobs', or IJR's apply flow ships | More urgent now — this gap applies across more of R1's redirect surface than before. Disclose HR-system access requirements on the listing card, or restrict "consolidated" framing to what the officer's access covers |
| **Open Posting by Anybody (Self-Serve vs Moderation)** | Adrian / PSD BOs | Before grooming | Unaffected by the reversal — OTG-side posting creation still needs this answered. Approve self-serve posting; rely on post-publish transparency |
| ~~**Standard Form Policy (pilot-agency native apply)**~~ | Xian Zhang / Adrian | — | **No longer applies, 25 Sep, third pass.** No native form exists for any agency — this was briefly reinstated earlier the same day and withdrawn |
| ~~**Candidate Data Purge Window (pilot-agency applicant data)**~~ | Legal / PSD BOs | — | **No longer applies, 25 Sep, third pass.** No native applicant data exists anywhere in this model — nothing for Compass to hold or purge |
| **FormSG MVP data migration: in or out of scope? (all agencies)** | Adrian / PSD BOs | Before launch | Back to its original, full scope — FormSG is confirmed the apply mechanism for every agency, not just non-pilot. Worth an explicit answer (R-29) |
| ~~**Does posting creation/review also split by agency, or stay OTG-only for everyone?**~~ | Adrian Ang | — | **Resolved, 25 Sep, third pass.** Posting and applicant handling stay entirely OTG/FormSG-side for every agency, no exceptions. There is no in-app review to split by agency |
| ~~**IJR Decision-stage shape: simple Offer/Reject, or pooled matching view?**~~ | Adrian Ang | — | **No longer applies, 25 Sep** — there's no in-app Decision stage under the reversed model. Matching/assignment stays entirely offline, unchanged from today |
| ~~**IJR OTG data migration: migrate at launch, or start clean?**~~ | Adrian Ang, Rama Moorthy | — | **Moot, 25 Sep (R-30)** — IJR data stays on OTG, Compass never ingests it, so there's nothing to migrate |

---

*Next review: once the re-estimate (R-12) and CAM confirmation (R-15) land — this document's Sections 7, 11, 13 should be revisited immediately after, not on the normal weekly cadence.*
