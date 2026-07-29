# Product Strategy One-Pager — CareerCompass Opportunities Unified Hub

*Product strategy one-pager — sections below follow the standard problem / strategy / roadmap / open-issues structure.*

| Field | Value |
|---|---|
| Name of the product | CareerCompass - Opportunities Unified Hub |
| Business Owner(s) | Xian Zhang GUO (PSD), Jacky LEE (PSD) |
| Team Members | Michelle Yip (Product Manager), Tan Pow Hwee (Tech Lead), Amber Tong (Designer), Thomas Huchede (Full-Stack), Chua Hao Eng (Full-Stack), Leo Milbor (Full-Stack), Jace Tan (Lead Product Manager), Adrian Ang (Product Lead) |
| Product Lifecycle Stage | POV |
| End Users | Primary: Public Officers <br>Secondary: Agency HRs <br>Tertiary: |

## 1. Change log

| Date | Change |
|---|---|
| | *(not yet populated)* |

## 2. Problem

### 2.1 Status Quo

**Problem Statement:** Officers have no shared way to discover short-term stints across the public service — they're arranged informally through personal networks, agency by agency, so development access depends on who you know, not merit, and agencies can't tap the best-fit officer beyond their own team.

**Current State:** Across the public service, officers have little visibility into short-term attachments and project stints — weeks-to-months-long cross-agency assignments that let them build new skills and experience without committing to a full role change. These opportunities are typically arranged informally, agency by agency, through personal networks or ad hoc requests, with no shared place to see what's available across the service. As a result, officers who want to grow their capabilities before pursuing a bigger move have no structured way to find a relevant stint, and agencies with short-term project needs can't easily tap officers outside their own team.

**Consequences:** Officers lose access to the lowest-risk, most frequent form of career development available to them — one that could serve as a stepping stone toward larger mobility (secondments, promotions) later. Agencies keep running short-term projects understaffed or staffed only by whoever happens to be available internally, rather than the best-fit officer service-wide. Over time, this widens the gap between officers with strong networks (who hear about stints) and those without (who don't), making development opportunity access uneven rather than merit-based.

**Market size (reach validated by pilot onboarding; demand signal below is from 2025 OTG data, not pilot usage — see note):**

| Layer | Estimate | Key Assumptions | Data Sources |
|---|---|---|---|
| TAM | 150,000 | Full Public Service (16 ministries + ~50 stat boards); every officer experiences the fragmented-discovery problem regardless of agency | PSD/data.gov.sg staff strength |
| SAM | ~5,400 | Current policy mandate/operational scope: 6 pilot agencies (2 ministries, 4 stat boards) actually onboarded | Pilot agency reach (actual) |
| SOM (Year 1 OKR) | ~1,080 | Committed target: 20% of SAM | Team OKR |

The eligible population spans the full Public Service at ~150,000 officers (TAM). Given the product's current policy mandate — 6 pilot agencies, a mix of ministries and statutory boards — the serviceable addressable market is ~5,400 officers (SAM), not the full population, since operational reach is bounded by which agencies have actually onboarded, not by user interest.

**Demand evidence (2025 OTG data, by quarter — NOT CareerCompass pilot usage):**

*Correction (2026-07-28): the table below was previously labeled "pilot, by quarter" and described elsewhere in this doc as pilot evidence. It is actually 2025 vacancy/sign-up data for OTG (the legacy pre-CareerCompass system), consolidated by the business owners (Xian Zhang GUO, Jacky LEE). It predates CareerCompass and was not measured from the 6 pilot agencies' usage of this product. It's a real signal that demand for short-term postings existed in OTG, but it is not CareerCompass pilot data and should not be cited as such. Every other reference to "the pilot" proving demand in this document (Sections 3.1, 3.2) refers back to this same OTG dataset and carries the same correction.*

| Quarter | Vacancies (cumulative) | Sign-ups (cumulative) | Vacancies (this quarter) | Sign-ups (this quarter) | Demand gap (this quarter) | Note |
|---|---|---|---|---|---|---|
| Q1 | 635 | 877 | 635 | 877 | +242 | |
| Q2 | 876 | 1,334 | 241 | 457 | +216 | |
| Q3 | 1,064 | 1,825 | 188 | 491 | +303 | |
| Q4 | 2,177 | 3,061 | 1,113 | 1,236 | +123 | Gig spike (1,113 net-new vacancies published this quarter) |

The published figures were cumulative totals since the start of this 2025 OTG dataset; the columns above break out actual per-quarter activity, which is the real demand signal. Read this way, sign-ups have outpaced vacancies in every quarter (a consistent, real signal in OTG), but the gap has **not** been steadily widening — it moved +242 → +216 → +303 → +123, roughly flat to narrowing, not accelerating. Q4's Gig spike is the standout: agencies published far more vacancies than any prior quarter (1,113, versus ~200 in Q2/Q3), and sign-ups kept pace closely enough that the gap actually narrowed that quarter. This is evidence that officers applied faster than agencies published in OTG, which supports the core discovery-bottleneck thesis — but it does not support a "demand is accelerating away from supply" narrative, and it is not evidence about CareerCompass or the 6 pilot agencies specifically. Any claim built on this data needs to say "OTG, 2025," not "the pilot."

**Policy alignment:** This is a direct operationalization of Minister Chan Chun Sing's commitments at SPARK: Public Service Festival 2026. He stated that "for officers whose roles will change, we will do our best to equip them with the new skills and, where possible, also emplace them into the new roles — within the Public Service and outside," and that leadership carries "the responsibility to redesign the jobs for all our people impacted by AI" so that "every officer has a meaningful role to play." As AI reshapes roles across agencies, officers will increasingly need a structured way to move into new roles — not just be trained for them. The Short-Term Developmental Opportunities Hub is the mechanism that lets officers test-drive and move into those new roles in low-stakes, low-commitment increments, delivering on the Minister's stated intent to emplace, not just equip.

**Not solving for:** Full postings, secondments, or promotions (that's the broader Opportunities Unified Hub's scope); formal courses or certifications (that's CareerCompass's courses side); performance evaluation or officer selection criteria for stints (agencies retain that decision); and mandatory or performance-linked assignments — this is strictly voluntary, officer-initiated development.

### 2.2 Vision

**Ideal future state:** Every officer across the public service opens CareerCompass and sees a career path shaped around them — not a static catalog of jobs and courses, but a living view of where they could go next and exactly what stands between them and getting there. Postings, secondments, stints, and courses are no longer scattered across agency portals and word-of-mouth; they live in one connected system that knows an officer's competencies and learning history well enough to point them toward what's actually relevant. Applying to an opportunity, enrolling in a course, and tracking progress toward a next role all happen without leaving the platform or repeating information the system already has.

**How officer experience and outcomes improve:** Officers stop guessing which course to take and start training toward something specific — a course only shows up because it closes a real gap to a real opportunity. Officers stop missing roles they never heard about, because opportunities they're qualified for surface to them directly instead of requiring them to already know where to look. The anxious, silent wait after applying — "did anyone even see this?" — is replaced by visible status and honest timelines. Rejections come with a clear next step instead of a dead end. Over time, officers experience their career not as something they have to piece together alone, but as something the system actively helps them navigate.

**Why this is aspirational yet realistic:** The aspiration is a genuinely guided career system, not a bigger job board or course catalog — that's the leap worth building toward. It's grounded in what's already real: confirmed pilot reach (5,400 officers, 6 agencies onboarded), a demand signal from 2025 OTG data (not yet replicated on CareerCompass itself — see correction above), a national policy mandate already in motion (the SWDA merger, Minister Chan's SPARK 2026 commitment to equip *and* emplace officers), and a phased path from a 6-agency pilot to full public service coverage rather than a big-bang launch. The vision doesn't require inventing new government behavior — it requires connecting behavior and data that already exist but currently sit apart, and confirming the OTG-era demand signal still holds once CareerCompass has its own usage data.

### 2.3 Success Metrics

**North Star:** Opportunities Placement rate — how many officers who log in actually end up placed into a stint, secondment, or posting through CareerCompass. This is deliberately tracked as part of the combined 15%-by-Dec'28 target alongside course completions, not disaggregated into its own approved number. That's a conscious choice, not an open gap: Opportunities and Courses are two paths to the same underlying outcome (an officer moving their career forward), and a combined target keeps both teams accountable to that outcome together rather than incentivizing either side to optimize its own number in isolation. The trade-off is that a strong Courses quarter could mask a weak Opportunities quarter (or vice versa) in the headline 15% figure — the leading indicators below exist partly to catch that, since they're Opportunities-specific and can't be offset by course completions.

Leading up to that: click-through on listings, application rate, and whether people keep logging back in over 180 days. These tell us if officers are finding things, then acting on them, then sticking around long enough for any of this to matter.

After placement happens, we also want to know if HR at each agency is actually using their dashboard, and whether officers were happy with how the process felt. Both matter because a good placement number can hide a bad experience — agencies barely engaging, or officers grinding through a clunky process to get there.

| Outcome metrics | Current Baseline | Target | Timeline |
|---|---|---|---|
| Successful opportunity placement rate | 0% (no product yet) | Feeds into 15% overall | Dec '28 |
| Click-through into opportunity listing | No baseline | 30% within 6 months | R1: Mar '27 |
| Application rate for opportunities | No baseline | 20% applied | R2: Jun '27 |
| Login rate (180 days) | No baseline | 20% of onboarded officers | R3: Sep '27 *(re-dated from Jun '27 — see note below)* |
| Agency HR dashboard usage | No baseline | 60% of HR officers | R3: Sep '27 |
| Officer satisfaction (application process) | ≥3.5/5 (from MVP) | ≥3.8/5 | MVP → R3: Sep '27 |

*Note on the login-rate date: a 180-day retention read requires a cohort with 180 days of history, which isn't available until ~6 months after MVP ships (2 Nov). The original Jun '27 target didn't allow enough time for that; Sep '27 is the earliest date with a mathematically valid cohort. The duplicate "Officer satisfaction" row present in an earlier draft has also been consolidated into one row above.*

**Why these:** Placement, not application, because someone applying and never getting placed means we didn't actually solve anything for them — that lines up with what Minister Chan said at SPARK 2026 about placing officers, not just training them. Click-through, applications, and logins are there so if the North Star stalls, we know roughly where to look — bad discovery, uninteresting opportunities, or people just not coming back. HR dashboard usage and satisfaction are in there because you could hit the placement number and still have a broken product underneath it — agencies barely showing up, or officers only getting through because they had no other choice.

*How do you ensure the cost effectiveness of the product?*

| | Q4 2026 | Q1 2027 | Q2 2027 | Q3 2027 | Total |
|---|---|---|---|---|---|
| **Total Cost [a]** | | | | | |
| *Dev EOM* | | | | | |
| *Ops EOM* | | | | | |
| *Hosting Cost* | | | | | |
| *Other Costs* | | | | | |
| **Total Value (Units of Impact) [b]** | | | | | |
| **VCR [b]/[a]** | | | | | |

*(Cost/value table not yet populated — needs Dev/Ops EOM figures and impact-unit definition from finance/PMP before this can be filled in.)*

**Provide an assessment of your VCR against benchmarks of existing government / commercial products:** *(not yet populated)*

## 3. Strategy

### 3.1 Proposed Product Strategy

**Hypotheses to validate:**
1. If officers can discover cross-agency stints in one place instead of relying on personal networks, application rates will rise for officers who previously had weak or no informal networks — closing the access gap, not just moving existing demand around.
2. If we surface opportunities matched to an officer's actual competencies (not just a raw listing), click-through and application quality both improve — a matched officer is more likely to actually apply and be a good fit, versus browsing an undifferentiated list.
3. If the placement experience feels structured and low-stakes (clear status, honest timelines, guided next steps), more officers will treat stints as a normal part of their career path rather than a one-off favor — increasing repeat usage over multiple stints, not just first-time signups.

**Theory of change:** The core problem isn't that stints don't exist — 2025 OTG data shows real, consistent demand (sign-ups outpaced published vacancies every quarter in that dataset). That evidence predates CareerCompass and hasn't yet been replicated on the pilot itself, but directionally it supports the same read: the problem is *discovery and matching* are informal and network-dependent, which makes access uneven rather than merit-based. CareerCompass's Opportunities Hub addresses this by making the informal formal: publishing what's actually available, matching it to what an officer can already do, and giving agencies a channel to source talent beyond their own team. This doesn't create demand — the OTG data suggests demand already exists — it removes the network-access bottleneck standing between demand and placement, a claim that still needs confirming on CareerCompass's own usage data.

**Guiding principles:**
- **Placement over activity.** Every metric decision in Section 2.3 already reflects this — the North Star is placement, not applications or logins, because an officer who applies and never gets placed hasn't been served.
- **Match, don't just list.** A job board that lists everything and asks the officer to sort it out fails the merit-based-access goal as surely as no job board at all — competency matching is core to the strategy, not a nice-to-have, even though it's currently blocked on an unresolved data-matching dependency (see 3.2).
- **Voluntary and officer-initiated, always.** Explicitly not solving for mandatory or performance-linked assignments (Section 2.1) — the strategy depends on officers choosing to engage, which is also why officer satisfaction is tracked as a guardrail metric, not just placement volume.
- **Phased reach over big-bang launch.** 6 pilot agencies to full public service coverage, matching the SAM/TAM structure already validated in Section 2.3 — this keeps each phase's data quality and matching accuracy provable before scaling exposure.

**How this advances policy and business objectives:** Directly operationalizes Minister Chan's SPARK 2026 commitment to "emplace, not just equip" officers as AI reshapes roles — this product is the mechanism for low-stakes, reversible role-testing that a full posting or secondment isn't. It also gives agencies with short-term project needs a way to source talent service-wide instead of running projects understaffed, which is a direct operational win independent of the individual-officer development framing.

### 3.2 Risks and Mitigations

*Addressing market, technical, and team/resource risk. This section summarizes what's material at the strategy level; a fuller risk register with additional detail is maintained separately.*

**Market risk:**
- **Demand validation is headcount- and OTG-based, not CareerCompass-usage-validated.** Section 2.1's TAM/SAM/SOM table sizes *reach* (who could use this), not *desire* (who wants to). The application-vs-vacancy gap cited as demand evidence is 2025 OTG data, not CareerCompass pilot usage — it's real evidence that demand existed in the legacy system, but it doesn't yet prove the same holds on CareerCompass, let alone as reach scales from 6 agencies to the full SAM. *Mitigation:* treat the R1 click-through/application targets (Section 2.3) as the actual demand-validation experiment, not the OTG data or the TAM/SAM table — if R1 misses target, that's the signal to revisit demand assumptions before scaling reach further.
- **A persistent demand-supply gap could become a trust risk, not just a metrics footnote.** Sign-ups outpaced vacancies in every quarter of the 2025 OTG dataset (Section 2.1) — a consistent, real gap in that system, not a worsening one, and directionally suggestive for CareerCompass, but still unconfirmed on this product. If the platform gets good at generating applications but agencies can't supply matching vacancies fast enough, officer trust erodes ("I apply and nothing happens") faster than a slow-discovery product would have caused. *Mitigation:* track applications-per-vacancy as an explicit guardrail alongside placement rate once CareerCompass has its own data — flag if the ratio deteriorates as scale increases, and escalate to agency sourcing conversations rather than treating it as a product-side problem.
- **"Already applied" state has no confirmed MVP scope.** An officer revisiting an opportunity they already applied to could see confusing state at launch — a first-impression risk on exactly the trust-building experience the strategy depends on. *Mitigation:* force an explicit MVP-scope decision before UAT (11 Aug), not after.

**Technical risk:**
- **Competency matching — the strategy's core differentiator — is blocked on an unresolved data-matching dependency (resolving agency codes across source systems).** This isn't a peripheral bug; matching is guiding principle #2 above. If it ships broken or descoped, the product degrades into an undifferentiated listing, undermining the "match, don't just list" strategy at launch. *Mitigation:* this needs to be treated as a launch-blocking dependency, not a backlog item — escalate ownership and a resolution date before the feature-freeze deadline (21 Aug).
- **Ringfencing (access control) is architecturally unverified.** Around two dozen test cases are written but blocked on test-account provisioning; rule precedence for overlapping include/exclude rules is undefined; API-level enforcement (not just UI-level) is untested. Given the strategy explicitly promises *merit-based* access replacing informal networks, a ringfencing failure that shows officers opportunities they're not eligible for directly contradicts the strategy's premise. *Mitigation:* resolve the test-account blocker and the rule-precedence spec gap before UAT — cheapest fix, highest strategic exposure if skipped.
- **Underlying data quality is flagged as poor on the UAT test environment.** Threatens the credibility of the entire discovery experience for the first UAT wave (Opportunities, 11 Aug). *Mitigation:* tracked as an open data-quality item with an owner assigned — needs a resolution date tied explicitly to the UAT start, not left open-ended.

**Team / resource risk:**
- **Engineering capacity is split across profiles, competencies, onboarding, auth, and opportunities simultaneously.** If capacity gets pulled toward auth or competency work elsewhere, Opportunities-specific build (ringfencing rules, competency-matching resolution) could stall without a visible trigger — a quiet risk, not a loud one. *Mitigation:* watch at sprint planning/mid-sprint checkpoints; flag explicitly to product/engineering leadership the moment Opportunities-specific work stalls for capacity reasons, rather than after the fact.
- **No accessibility (screen-reader) testing capability currently exists on the team**, despite this being a fixed compliance obligation, not a scalable-with-usage risk. *Mitigation:* needs either a specialist brought in or a defined testing partner before pre-launch review — this is an organizational gap, not something more sprint time resolves on its own.

**Experiments already run:** None on CareerCompass itself yet. The 2025 OTG data (Q1-Q4 vacancy/sign-up figures, Section 2.1) is the closest thing to POV-stage evidence in this document — it suggests demand existed for informal short-term postings before this product existed — but it is not a CareerCompass experiment and doesn't confirm officers will engage with this specific product. No dedicated experiment has yet been run on the matching hypothesis (hypothesis 2 above), since competency matching hasn't shipped. Getting real CareerCompass usage data or officer interviews, and running the matching experiment, are both open validation gaps, tied to resolving the data-matching dependency above.

## 4. Roadmap

| Timeline | Initiative | Expected Impact |
|---|---|---|
| Now – feature freeze (21 Aug) | Resolve the competency-matching data dependency; ship competency match on listing and detail pages | Unblocks guiding principle #2 ("match, don't just list") — without this, MVP ships as an undifferentiated listing, not the matched-discovery product the strategy depends on |
| Before 11 Aug UAT (Profile + Opportunities wave) | Resolve ringfencing test-account access, rule-precedence spec gap, and the UAT test-environment data-quality issue | De-risks the first UAT wave; ringfencing failures would directly contradict the merit-based-access premise (Section 2.1) in front of UAT reviewers |
| 7 Sep – 16 Oct: VAPT | Security/pen-test of MVP build, including access-control paths (ringfencing, auth) | Confirms the platform is safe to expose to the full pilot population before go-live; scope (POCDEX/CSC/Cumulus) still TBC |
| 19-23 Oct: go-live approval; 26-30 Oct: soft launch | Deploy to production, staged rollout begins | First real-world read on click-through and application-rate targets (Section 2.3) against actual, not pilot-proxy, traffic |
| Week of 2 Nov: MVP first release | Full MVP live for 6 pilot agencies (~5,400 officers, current SAM) | Starts the clock on the R1 targets below — 30% click-through and the first placement-rate data toward the combined 15%-by-Dec'28 target |
| R1: Mar '27 | Click-through target (30%) comes due; first read on whether discovery (not just reach) is working | Validates or invalidates hypothesis 1 (network-access bottleneck removal) — first real signal, not pilot-proxy |
| R2: Jun '27 | Application rate target (20%) comes due | Tests whether officers convert from browsing to applying — the "acting" leg of the funnel in Section 2.3 |
| R3: Sep '27 | Agency HR dashboard usage (60%), officer satisfaction (3.8/5), and 180-day login rate (20%) targets come due | Confirms the product works for agencies, not just officers, and that officers return over time — catches the "good placement number, broken experience underneath" failure mode named in 2.3 |
| Ongoing, full public service scale-up | Phased reach expansion beyond the 6-agency pilot toward full TAM (~150,000), pace gated by whether SAM-level data quality and matching accuracy hold | Realizes guiding principle #4 (phased reach) — each phase's data quality must be proven before the next agency cohort onboards |

**Dependency note:** This roadmap assumes the competency-matching data dependency resolves before feature freeze. If it doesn't, the Nov MVP release either ships without competency matching (undermining guiding principle #2) or slips further — this is the single largest schedule risk on this roadmap and is tracked as a technical risk in Section 3.2.

## 5. Open issues

*Known unknowns not yet resolved — carried forward from Sections 2 and 3, plus items that surfaced during this week's PRD/Jira reconciliation and don't yet have an owner or a decision.*

| Issue | Why it's open | Owner | Needed by |
|---|---|---|---|
| **North Star metric ownership** — placement rate is currently bundled inside the combined 15%-by-Dec'28 target with course completions, not approved as its own disaggregated number | A strong Courses quarter could mask a weak Opportunities quarter in the headline figure; nobody has explicitly signed off on Opportunities being held to its own number | Michelle → whoever owns the OKR | Before this doc goes to a PDO/leadership review |
| **Competency-matching data dependency has no confirmed resolution date** | Blocks the strategy's core differentiator (matching); currently the single largest schedule risk on the roadmap above | Unclear — needs an owner named | Before feature freeze (21 Aug) |
| **Demand-supply gap sustainability, and confirming it on CareerCompass** — sign-ups outpaced vacancies every quarter in the 2025 OTG dataset, a consistent (not worsening) gap, but Q4's Gig spike shows vacancy supply can be highly uneven quarter to quarter (Section 2.1); this pattern has not yet been confirmed on CareerCompass itself | Unclear whether agencies can source vacancies predictably enough as reach scales toward the full SAM, and unconfirmed whether the OTG-era pattern holds on this product at all; unaddressed by any current metric or mitigation beyond the guardrail proposed in 3.2 | Michelle (product) → agency sourcing conversation, owner TBD | Before scaling past the 6-agency pilot |
| **"Already applied" state MVP scope** — being tested, appears in no confirmed acceptance criteria, currently fails | Ambiguous whether in scope for the Nov MVP release; a real first-impression risk if unresolved | Michelle → squad decision | Before 11 Aug UAT |
| **A separate connectivity dependency has no acceptance criteria and isn't in the test plan yet** | Not even scoped yet; unclear if it's MVP-critical | Engineering lead (grooming needed) | Before feature freeze |
| **Ringfencing rule precedence undefined** — no spec for overlapping include/exclude rules | Genuine architecture gap, not just a missing test — actual runtime behavior in a conflict case is unknown | Squad decision needed, no single owner yet | Before 11 Aug UAT |
| **Cost/value (VCR) table entirely unpopulated** (Section 2.3) | Needs Dev/Ops EOM figures and an impact-unit definition from finance/PMP — can't assess cost-effectiveness against benchmarks without this | Michelle → finance/PMP | Before this doc is used to justify continued investment |

## 6. Appendix

### 6.1 Delivered

*Built and functionally complete as of this pilot phase, ahead of the Nov MVP release. QA sign-off is still in progress on several of these — see Section 3.2 (Technical risk) for what's outstanding.*

| Date | Initiative | Impact (how will it move the metrics) |
|---|---|---|
| Pilot phase (pre-MVP) | Opportunity listing — card grid view, sorted by posting date, auth-gated, with pagination | Foundation for click-through (Section 2.3) — officers can browse what's actually available instead of relying on informal channels |
| Pilot phase (pre-MVP) | Empty, error, and partial-load states for the listing | Reduces silent failure at the top of the funnel — officers get a clear signal instead of a broken page when there's nothing to show |
| Pilot phase (pre-MVP) | "Closing soon" badge and open/closed visibility on listings | Nudges application timing — directly supports the application-rate target (Section 2.3) by surfacing urgency |
| Pilot phase (pre-MVP) | Sort by posted date / closing date | Supports discovery for officers with specific timing constraints |
| Pilot phase (pre-MVP) | Filter by opportunity type, with clear-all-filters in one action | Reduces browsing friction — a precondition for click-through and application-rate targets |
| Pilot phase (pre-MVP) | Opportunity detail page — full fields, fallback copy for missing data, Apply CTA above the fold, deep-link auth gate | Core conversion surface between discovery and application — directly upstream of the application-rate target |
| Pilot phase (pre-MVP) | Closed/expired opportunity handling for deep links (clear "no longer available" messaging) | Preserves trust when an officer follows an old link — supports the officer-satisfaction guardrail (Section 2.3) |
| Pilot phase (pre-MVP) | Careers@Gov (C@G) integration — badge, detail page, apply-via-C@G deep link | Extends reach beyond platform-native postings to the existing C@G channel, widening what's discoverable in one place |
| Pilot phase (pre-MVP) | Apply via FormSG — basic redirect flow for Internal Jobs, STIPs, and Gigs | The core apply mechanism — directly the application-rate target's numerator |

**Not yet delivered but scoped for the Nov MVP release:** competency matching on listing and detail pages (blocked on the data dependency named in Section 3.2/5), runtime ringfencing enforcement, and the keyword-search and job-category filter features currently in progress.

---

*Generated: 2026-07-28. Section 1 (Change log) not yet populated.*
