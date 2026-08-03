# Product Strategy One-Pager — CareerCompass Opportunities Unified Hub

*Sections below follow the standard problem / strategy / roadmap / open-issues structure.*

| Field | Value |
|---|---|
| Name of the product | CareerCompass - Opportunities Unified Hub |
| Business Owner(s) | Xian Zhang GUO (PSD), Jacky LEE (PSD) |
| Team Members | Michelle Yip (PM), Tan Pow Hwee (Tech Lead), Amber Tong (Designer), Thomas Huchede (FS), Chua Hao Eng (FS), Leo Milbor (FS), Jace Tan (Lead PM), Adrian Ang (Product Lead) |
| Product Lifecycle Stage | POV |
| End Users | Primary: Public Officers · Secondary: Agency HRs · Tertiary: — |

## 1. Change Log

| Date | Change |
|---|---|
| 2026-08-03 | **Opportunity Taxonomy PRD closed.** The posting-time categorization/data quality issue it addressed was resolved via implementation, tracked in Jira — no PRD needed. *Open question: is this the same issue as the "poor UAT test-environment data quality" risk in §3.2/§4? Not confirmed — flagging, not merging.* |
| 2026-08-03 | **"R1" naming collision flagged.** This doc uses "R1" for a metrics-milestone date (Mar '27, when the 30% click-through target comes due). A separate epic one-pager (`2026-08-03-W32-r1-epic-one-pager.md`) uses "R1" for the *next release* (Creation/Apply/Status Tracking epics, Jan/Feb 2027 pilot). Same label, two meanings, two live docs — not yet reconciled. |
| 2026-08-03 | **North Star target corrected: 15% by Dec '28 is Opportunities alone, not bundled with Courses.** Earlier draft described it as a deliberately combined target — that was wrong. Corrected in §2.3; the two Open Issues premised on it being bundled (North Star ownership, disaggregation-never-argued) are resolved and removed. |

## 2. Problem

### 2.1 Status Quo

**The problem:** Officers have no shared way to discover short-term stints across the public service. Stints are arranged informally, agency by agency, through personal networks — so access depends on who you know, not merit, and agencies can't tap the best-fit officer beyond their own team.

**Why it persists:**
- Short-term attachments and project stints (weeks to months, cross-agency) let officers build skills without committing to a full role change — but there's no shared place to see what's available service-wide
- Arrangements happen through personal networks or ad hoc requests
- Officers without strong networks have no structured way to find a relevant stint
- Agencies with short-term project needs can't easily tap officers outside their own team

**Consequences:**
- Officers lose access to the lowest-risk, most frequent form of career development — a stepping stone toward bigger moves (secondments, promotions) later
- Agencies keep running projects understaffed, or staffed by whoever's available internally rather than the best-fit officer service-wide
- Access gap widens over time between officers with strong networks and those without — development becomes network-based, not merit-based

**Market size** *(reach validated by pilot onboarding; demand signal below is 2025 OTG data, not pilot usage)*

| Layer | Estimate | Basis |
|---|---|---|
| TAM | 150,000 | Full Public Service (16 ministries + ~50 stat boards) — everyone faces this problem regardless of agency |
| SAM | ~5,400 | 6 pilot agencies actually onboarded (2 ministries, 4 stat boards) — current policy mandate |
| SOM (Year 1 OKR) | ~1,080 | 20% of SAM — committed team OKR |

TAM is bounded by who *could* use this (full Public Service); SAM is bounded by who's actually onboarded, not by user interest.

**Demand evidence — OTG, 2025 (⚠️ not CareerCompass pilot usage)**

> **Correction (2026-07-28):** this table was previously mislabeled "pilot, by quarter." It's actually 2025 vacancy/sign-up data from OTG (the legacy system), consolidated by the business owners. It predates CareerCompass and wasn't measured from the 6 pilot agencies' usage of *this* product. Real signal that demand existed in OTG — not evidence about CareerCompass. Every "the pilot proves demand" reference elsewhere in this doc (§3.1, §3.2) points back to this same dataset and carries the same correction.

| Quarter | Vacancies (this Q) | Sign-ups (this Q) | Gap (this Q) | Note |
|---|---|---|---|---|
| Q1 | 635 | 877 | +242 | |
| Q2 | 241 | 457 | +216 | |
| Q3 | 188 | 491 | +303 | |
| Q4 | 1,113 | 1,236 | +123 | Gig spike — 1,113 net-new vacancies, ~5x prior quarters |

Sign-ups outpaced vacancies every quarter — a real, consistent OTG signal. The gap is **flat-to-narrowing** (+242 → +216 → +303 → +123), not accelerating. Q4's spike shows agencies *can* surge supply, and demand kept pace. This supports the discovery-bottleneck thesis but not a "demand is running away from supply" narrative. Any claim from this data must say "OTG, 2025," never "the pilot."

**Demand evidence — Careers@Gov (C@G), separate dataset**

| Period | Jobs | Total Applications | Applications from Public Officers | Public Officers Applying |
|---|---|---|---|---|
| Apr–Jun 2026 (actual, 3 mo) | 4,151 | 172,810 | 27,580 | 3,500 |
| Annualized (×3) | ~12,000 | — | — | ~10,500 |

Same caveat as above: C@G platform-wide demand, not CareerCompass usage. C@G is integrated into CareerCompass only as a badge/deep-link (§6.1) — this is evidence of demand *on C@G*, not evidence officers engage with C@G opportunities *through* CareerCompass.

**Policy alignment:** Direct operationalization of Minister Chan Chun Sing's SPARK 2026 commitments — to "equip *and* emplace" officers into new roles as AI reshapes jobs, and to give leadership "the responsibility to redesign the jobs for all our people impacted by AI." This Hub is the mechanism: low-stakes, low-commitment role-testing that delivers on "emplace," not just "equip."

**Not solving for:** Full postings, secondments, or promotions (broader Opportunities Unified Hub's scope) · formal courses/certifications (CareerCompass Courses) · performance evaluation or officer selection (agencies retain that) · mandatory or performance-linked assignments (strictly voluntary, officer-initiated).

### 2.2 Vision

**Ideal future state:** Every officer opens CareerCompass and sees a career path shaped around them — not a static catalog, but a living view of where they could go next and what stands between them and getting there. Postings, secondments, stints, and courses live in one connected system that knows an officer's competencies well enough to point them toward what's actually relevant, without leaving the platform or repeating information it already has.

**How the experience improves:**
- Officers train toward something specific, not guess at courses — a course only shows up because it closes a real gap to a real opportunity
- Officers stop missing roles they never heard about — qualified opportunities surface directly
- The anxious post-apply silence ("did anyone even see this?") is replaced by visible status and honest timelines
- Rejections come with a clear next step, not a dead end

**Why aspirational yet realistic:** The leap is a genuinely guided career system, not a bigger job board. It's grounded in what's real today: confirmed pilot reach (5,400 officers, 6 agencies), a demand signal from 2025 OTG data (not yet replicated on CareerCompass — see correction above), a national policy mandate in motion (SWDA merger, SPARK 2026), and a phased path to full coverage rather than big-bang launch. It doesn't require inventing new government behavior — just connecting data that already exists but sits apart, and confirming the OTG-era signal holds once CareerCompass has its own usage data.

### 2.3 Success Metrics

**North Star: Opportunities Placement rate** — officers who log in and end up placed into a stint, secondment, or posting through CareerCompass.

**Target: 15% by Dec '28, Opportunities alone** — not bundled with Courses. This is a disaggregated, Opportunities-specific number, so a strong or weak Courses quarter has no way to mask Opportunities performance in this figure.

**The funnel logic:** click-through → application → 180-day return tells us if officers are finding things, acting on them, then sticking around. HR dashboard usage and officer satisfaction catch the failure mode where placement numbers look fine but the product underneath is broken.

| Outcome metric | Current Baseline | Target | Timeline |
|---|---|---|---|
| Successful opportunity placement rate | 0% (no product yet) | 15% (Opportunities alone) | Dec '28 |
| Click-through into listing | No baseline | 30% within 6 months | R1: Mar '27 |
| Application rate | **OTG: 0.21% of all accounts** (233/109,076) · **2.19% of logged-in users** (233/10,648) | 20% applied | R2: Jun '27 |
| Login rate (180 days) | No baseline | 20% of onboarded officers | R3: Sep '27¹ |
| Agency HR dashboard usage | No baseline | 60% of HR officers | R3: Sep '27 |
| Officer satisfaction (apply process) | ≥3.5/5 (MVP) | ≥3.8/5 | MVP → R3: Sep '27 |

*¹ Re-dated from Jun '27 — a 180-day retention read needs a cohort with 180 days of history, not available until ~6 months post-MVP (ships 2 Nov). Sep '27 is the earliest mathematically valid date. (Duplicate "Officer satisfaction" row from an earlier draft consolidated above.)*

**Why these metrics:** Placement, not application — an officer who applies and never gets placed hasn't been served (matches Minister Chan's "place, not just train" framing). Click-through/applications/logins triage where the funnel breaks if the North Star stalls. HR dashboard usage and satisfaction catch a good placement number hiding a broken experience underneath.

**Cost effectiveness (VCR):** *Not yet populated* — needs Dev/Ops EOM figures and an impact-unit definition from finance/PMP before the Q4'26–Q3'27 table or the benchmark assessment can be filled in.

## 3. Strategy

### 3.1 Proposed Product Strategy

**Hypotheses to validate:**
1. Discoverable cross-agency stints raise application rates specifically for officers with weak/no prior networks — closing the access gap, not just shuffling existing demand
2. Competency-matched surfacing (not a raw list) improves click-through *and* application quality — a matched officer is more likely to apply and be a good fit
3. A structured, low-stakes placement experience (clear status, honest timelines) normalizes stints as part of a career path — driving repeat usage across multiple stints, not just first-time signups

**Theory of change:** 2025 OTG data shows real, consistent demand — sign-ups outpaced vacancies every quarter. That evidence predates CareerCompass and hasn't been replicated on the pilot, but directionally supports the same read: discovery and matching are informal and network-dependent, making access uneven. The Opportunities Hub makes the informal formal — publishing what's available, matching it to competencies, giving agencies a channel beyond their own team. It doesn't create demand (OTG suggests demand exists) — it removes the network-access bottleneck between demand and placement. *Still needs confirming on CareerCompass's own data.*

**Guiding principles:**
- **Placement over activity.** North Star is placement, not applications or logins — every metric in §2.3 reflects this
- **Match, don't just list.** A raw list fails the merit-based-access goal as surely as no listing at all — matching is core, though currently blocked on an unresolved data dependency (§3.2)
- **Voluntary, always.** Not solving for mandatory/performance-linked assignments — satisfaction is a guardrail, not just placement volume
- **Phased reach, not big-bang.** 6 agencies → full public service, matching the SAM/TAM structure in §2.3 — each phase's data quality and matching accuracy must be provable before scaling

**Policy fit:** Directly operationalizes "emplace, not just equip" as AI reshapes roles — low-stakes, reversible role-testing a full posting/secondment can't offer. Also gives agencies a service-wide sourcing channel instead of running projects understaffed — an operational win independent of the individual-development framing.

### 3.2 Risks and Mitigations

*Strategy-level summary; a fuller risk register is maintained separately.*

**Market**
- **Demand validation is reach-based, not desire-based.** §2.1's TAM/SAM/SOM sizes who *could* use this, not who *wants* to — the OTG gap is real legacy-system evidence, not proof it holds on CareerCompass at any scale. → *Treat the R1 click-through/application targets as the real demand-validation experiment; a miss is the signal to revisit demand assumptions.*
- **A persistent demand-supply gap is a trust risk, not just a metric.** If the platform generates applications faster than agencies supply vacancies, officer trust erodes ("I apply and nothing happens") faster than slow discovery ever would. → *Track applications-per-vacancy as an explicit guardrail once CareerCompass has its own data; escalate to agency sourcing conversations if it deteriorates.*
- **"Already applied" state has no confirmed MVP scope.** A real first-impression risk on the exact trust-building experience the strategy depends on. → *Force an explicit scope decision before UAT (11 Aug).*

**Technical**
- **Competency matching — the core differentiator — is blocked on an unresolved data dependency** (agency codes across source systems). If it ships broken or descoped, the product degrades to an undifferentiated listing. → *Treat as launch-blocking, not backlog; escalate ownership + resolution date before feature freeze (21 Aug).*
- **Ringfencing is architecturally unverified.** ~2 dozen test cases blocked on test-account provisioning; rule precedence for overlapping include/exclude rules undefined; API-level enforcement untested. A failure here directly contradicts the merit-based-access premise. → *Resolve the test-account blocker and rule-precedence gap before UAT — cheapest fix, highest exposure if skipped.*
- **UAT test-environment data quality flagged poor.** Threatens credibility of the whole discovery experience for the first UAT wave (11 Aug). → *Tracked with an owner; needs a resolution date tied to UAT start.*

**Team / resource**
- **Engineering capacity is split** across profiles, competencies, onboarding, auth, and opportunities. Opportunities-specific work could stall quietly if capacity shifts elsewhere. → *Watch at sprint checkpoints; flag to leadership the moment it stalls, not after.*
- **No accessibility (screen-reader) testing capability exists** — a fixed compliance obligation, not something more sprint time fixes. → *Needs a specialist or testing partner before pre-launch review.*

**Experiments run:** None on CareerCompass itself. The 2025 OTG data is the closest thing to POV-stage evidence — suggestive, not confirmatory. No matching-hypothesis experiment yet run (matching hasn't shipped). Real usage data / officer interviews and the matching experiment are both open validation gaps.

## 4. Roadmap

| Timeline | Initiative | Why it matters |
|---|---|---|
| Now → feature freeze (21 Aug) | Resolve competency-matching data dependency; ship match on listing/detail | Without this, MVP ships as an undifferentiated list, not the matched-discovery product the strategy promises |
| Before 11 Aug UAT (Profile + Opportunities) | Resolve ringfencing test-account access, rule-precedence gap, UAT data-quality issue | De-risks first UAT wave — a ringfencing failure would contradict the merit-based premise in front of reviewers |
| 7 Sep – 16 Oct: VAPT | Security/pen-test incl. access-control paths | Confirms safe to expose to full pilot population; scope (POCDEX/CSC/Cumulus) still TBC |
| 19–23 Oct: go-live approval · 26–30 Oct: soft launch | Deploy to prod, staged rollout | First real read on click-through/application targets against actual traffic |
| Week of 2 Nov: MVP first release | Live for 6 agencies (~5,400 officers) | Starts the clock on R1 targets — 30% click-through, first placement data |
| R1: Mar '27 | Click-through target (30%) due | First real signal on hypothesis 1 (network-bottleneck removal) |
| R2: Jun '27 | Application rate target (20%) due | Tests the browse→apply conversion leg |
| R3: Sep '27 | HR dashboard (60%), satisfaction (3.8/5), 180-day login (20%) due | Confirms it works for agencies, not just officers, and that people return |
| Ongoing | Phased scale-up beyond 6 agencies toward full TAM (~150,000) | Gated on SAM-level data quality and matching accuracy holding at each phase |

**Dependency:** This roadmap assumes competency matching resolves before feature freeze. If not, Nov MVP either ships without matching (undermining "match, don't just list") or slips — the single largest schedule risk here, tracked in §3.2.

## 5. Open Issues

*Known unknowns — carried forward from §2/§3, plus items from this week's reconciliation.*

**Metric & scope soundness**

| Issue | Owner | Needed by |
|---|---|---|
| **20% application-rate target vs. OTG baseline (0.21%–2.19%)** implies a 9x–100x jump. No stated reason why (matching? native apply? discovery?) or by how much each should contribute. | Michelle | Before PDO/leadership review |
| **6-agency SAM is asserted from "policy mandate," never questioned** — yet it gates the SOM target and the entire phased-reach roadmap. The most load-bearing number in the doc, stated as given. | Michelle | Before conversion/strategy review |
| **Theory of Change's causal claim (network-dependency → the gap) is asserted, not proven.** OTG data shows a gap existed, not that network-dependency caused it. If wrong, the matching strategy solves the wrong problem. | Michelle | Before justifying the matching investment |
| **Scope boundary (stints-only vs. full postings/secondments) is stated, not argued** — while a sibling release (R1 epic one-pager) actively builds the excluded scope. No stated reason for the line. | Michelle | Before conversion/strategy review |

**Delivery blockers**

| Issue | Owner | Needed by |
|---|---|---|
| **Competency-matching dependency has no resolution date** — the single largest schedule risk on the roadmap. | Unowned — needs a name | Before feature freeze (21 Aug) |
| **Ringfencing rule precedence undefined** — real architecture gap, not just a missing test. | Squad decision needed | Before 11 Aug UAT |
| **"Already applied" state has no confirmed MVP scope**, currently fails testing. | Michelle → squad decision | Before 11 Aug UAT |
| **A separate connectivity dependency isn't scoped or in the test plan.** | Engineering lead (needs grooming) | Before feature freeze |
| **Demand-supply gap sustainability unconfirmed on CareerCompass.** OTG's gap is consistent, not worsening, but Q4's spike shows vacancy supply can swing hard quarter to quarter — unaddressed by any current metric beyond the §3.2 guardrail. | Michelle → agency sourcing conversation (owner TBD) | Before scaling past 6 agencies |

**Housekeeping**

| Issue | Owner | Needed by |
|---|---|---|
| **VCR table entirely unpopulated** — can't assess cost-effectiveness without Dev/Ops EOM figures and an impact-unit definition. | Michelle → finance/PMP | Before using this doc to justify investment |

## 6. Appendix

### 6.1 Delivered

*Built and functionally complete as of the pilot phase, ahead of Nov MVP. QA sign-off in progress on several — see §3.2 (Technical risk) for what's outstanding.*

- **Opportunity listing** — card grid, sorted by posting date, auth-gated, paginated
- **Empty/error/partial-load states** — no silent failure at the top of the funnel
- **"Closing soon" badge** + open/closed visibility — nudges application timing
- **Sort** by posted date / closing date
- **Filter** by opportunity type, with one-action clear-all
- **Opportunity detail page** — full fields, fallback copy, Apply CTA above the fold, deep-link auth gate
- **Closed/expired deep-link handling** — clear "no longer available" messaging, preserves trust
- **Careers@Gov (C@G) integration** — badge, detail page, apply-via-C@G deep link. C@G itself carries real volume (4,151 jobs, 172,810 applications, 3,500 applying officers in Apr–Jun 2026 alone — §2.1); CareerCompass isn't generating that demand, but the integration determines how much becomes visible through this platform
- **Apply via FormSG** — basic redirect for Internal Jobs, STIPs, and Gigs

**Not yet delivered, scoped for Nov MVP:** competency matching on listing/detail (blocked, §3.2/§5) · runtime ringfencing enforcement · keyword search and job-category filter (in progress).

---

*Generated: 2026-07-28. Last readability pass: 2026-08-03.*
