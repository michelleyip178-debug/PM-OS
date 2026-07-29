# Opportunities Through the Golden Path

*Discover → Define → Validate → Build → Measure. Where Opportunities actually sits today, versus where the golden path says it should be, and what that implies for what we do next.*

**Why this doc exists:** the Opportunities Hub already has a full strategy one-pager ([2026-07-28-W31-careercompass-opportunities-strategy-one-pager.md](2026-07-28-W31-careercompass-opportunities-strategy-one-pager.md)). This doc doesn't repeat that — it asks a different question: are we actually moving through the 5 stages in order, or have we jumped ahead of ourselves on some parts?

**Headline finding:** Opportunities' Discover stage is weaker than the strategy doc presents it. The "demand evidence" table labeled "pilot, by quarter" in the strategy one-pager is actually 2025 data the business owners consolidated for OTG (the legacy system) — not usage data from a live CareerCompass pilot across the 6 named agencies. And the personas (Intentional Mover, Passive Watcher) are built from that same OTG source, not from CareerCompass users. Both of the strategy's foundational Discover-stage claims — "the pilot proves demand" and "here's who the Intentional Mover is" — trace back to the same pre-CareerCompass dataset, mislabeled as pilot evidence.

---

## 1 · Discover — Finding the problem

**Rule: solve the most impactful problem.**

**What we actually have:** A real dataset — 2025 vacancy and sign-up numbers that the business owners consolidated for OTG, showing sign-ups outpacing vacancies consistently. That's genuine signal that demand for short-term postings exists in the target population. The problem statement built on it is sharp — discovery and matching are informal and network-dependent, so access is uneven rather than merit-based.

**Where Discover is thin — and this is the real finding, not a footnote:**
- The strategy one-pager labels this dataset "Demand evidence (pilot, by quarter)" and frames it as 6-agency CareerCompass pilot data. It isn't. It's 2025 OTG data, consolidated by the business owners, predating CareerCompass entirely. That mislabel matters: a reader citing "the pilot" is actually citing a different system, a different year, and (most likely) a different, broader population than the 6 pilot agencies. The demand signal itself may still be directionally useful, but it is not evidence about how officers behave on CareerCompass, and it should not be described as pilot data anywhere in the strategy.
- The personas (Intentional Mover, Passive Watcher) trace to the same source. Their own "Data sources" line names R1 PRD journey lanes, funnel sizing, and OTG baseline metrics (9% re-login, ~15-20% apply completion, 23% active engagement) — the same 2025 OTG dataset, not CareerCompass pilot usage and not live officer interviews. So the strategy's single most load-bearing insight (*"they've already decided to apply before they open the platform — discovery isn't where we win or lose them, apply flow is"*) and its "pilot proves demand exists" claim both rest on one mislabeled, pre-product dataset, not two independent sources of evidence the way the doc currently presents them.
- This is compounded, not just single-sourced: two separate persona documents, six weeks apart, both named "Intentional Mover," both carrying this same unwarranted insight, neither one flagging the other or reconciling which is current.

**Golden-path read:** Discover currently rests on a labeling error, not a data problem per se — the 2025 OTG numbers are real, but they've been relabeled as CareerCompass pilot evidence and used to justify both the demand claim and the persona split. Until CareerCompass has its own usage data or officer interviews, neither claim is actually Discover-stage evidence about this product's users.

**What reimagining means here:** correct the label on the "pilot" demand table in the strategy one-pager — state plainly it's 2025 OTG business-owner data, not CareerCompass pilot usage. Stop citing the Intentional Mover insight as established fact; either validate it against real CareerCompass usage or officer interviews once the platform has live users, or mark it everywhere as an untested, OTG-derived assumption. Retire one of the two duplicate persona docs so there's a single, honestly-labeled source.

---

## 2 · Define — Framing the solution

**Rule: no measurable goal = no priority.**

**What we actually have:** This is Opportunities' strongest stage. The North Star is precise and hard to game — "50% of onboarded officers complete at least one development action, tracked on a rolling 12-month basis, browsing/enrolling/applying alone doesn't count." The OKR roadmap ladders every release to a dated, numeric target through Q3 2027. D-001 (every feature must justify against North Star or OKRs) is an explicit, working priority filter — not aspirational language, an actual decision that killed/deferred features (profiling tools, gamification, career coaching cluster pushed to R3/R4).

**Where Define is thin:**
- The North Star metric ownership itself is unresolved. Per the Opportunities one-pager's open issues: placement rate is bundled inside the combined 15%-by-Dec'28 target with course completions, and nobody has signed off on Opportunities being held to its own disaggregated number. A strong Courses quarter could mask a weak Opportunities quarter — the metric that's supposed to be the sharpest thing we have has an accountability gap sitting inside it.
- Competency matching is defined as strategically load-bearing ("match, don't just list" is a named guiding principle) but has no committed resolution date on the data dependency blocking it. You can't call something Defined if the thing it depends on doesn't have an owner yet.

**Golden-path read:** the goal-setting machinery is real and rare — most teams don't have a North Star this precise this early. The risk isn't the definition, it's that North Star ownership and the competency data dependency are Defined in name but not in accountability. A goal without an owner is not meaningfully different from no goal.

**What reimagining means here:** force the North Star ownership question to a decision before this doc's insights go into any leadership review — it's flagged as open, not hard. Same for the competency-matching dependency: name an owner and a date, don't let it sit as a risk-log line item through feature freeze.

---

## 3 · Validate — Proving the value

**Rule: no measurable user change = no scale.**

**What we actually have:** The only artifact resembling Validate evidence is the 2025 OTG demand dataset (application-vs-vacancy data, consolidated by the business owners) — but as established in Discover, that's legacy-system data, not something measured from CareerCompass or its 6 pilot agencies. It's a real signal that demand for short-term postings exists somewhere in the target population, but it doesn't validate anything about how officers behave on CareerCompass specifically.

**Where Validate is thin, and this is the biggest gap in the whole read:**
- There is no CareerCompass-native validation of the core problem claim at all yet — what's been treated as "the pilot validates demand" is actually the mislabeled 2025 OTG dataset. Until CareerCompass has live usage or officer interviews of its own, the problem itself is still an assumption carried over from a different system, not a validated finding about this product.
- Hypothesis 2 — "matched discovery beats undifferentiated listing" — is the strategy's core differentiator (guiding principle #2, "match, don't just list") and it has **zero experiments run against it**, per the Opportunities one-pager's own admission. Competency matching hasn't shipped, so there's nothing to validate yet.
- Ringfencing (access control) is "architecturally unverified" — test cases exist but are blocked on test-account provisioning, rule precedence for overlapping rules is undefined, and API-level enforcement is untested. This is a Validate-stage gap wearing a Build-stage costume: it looks like a QA checklist item, but it's actually "we don't know if the core merit-based-access premise holds."
- "Already applied" state has no confirmed MVP scope and currently fails testing — a first-impression validation gap on the exact trust-building moment the whole strategy depends on.

**Golden-path read:** nothing here has actually been validated on CareerCompass yet — not the problem (still resting on relabeled OTG data), and not the solution (matching, ringfencing, the apply flow). That's a wider gap than "we proved the problem but not the solution" — right now neither side of the Validate stage has CareerCompass-native evidence behind it.

**What reimagining means here:** treat competency matching and ringfencing as Validate-stage work, not late-Build polish. Right now they're tracked as launch-blocking technical risks (correctly), but they should also be tracked as "we haven't proven this works" — which changes the bar from "does it function" to "does it produce the officer behavior change we're claiming it will." And once CareerCompass goes live, prioritize pulling real usage data (or running officer interviews) early enough to actually validate the demand claim on this product, not just carry the OTG number forward indefinitely.

---

## 4 · Build — Scaling the solution

**Rule: quality is in the details.**

**What we actually have:** This is where Opportunities has spent the most real engineering effort, and it shows. From the Sprint 7 sync: 52 issues in the active sprint, a genuinely wide delivered surface (listing, filters, search, detail pages, Careers@Gov integration, FormSG apply flow) already functionally complete pre-MVP. The sprint cadence, DoR/DoD discipline, and jira-sync/grooming-close tooling all point to a team that treats delivery process seriously.

**Where Build is thin — this is where "quality is in the details" is actually being tested right now:**
- WOG AD authentication (the literal foundation everything else depends on) is still not fully landed — OTEP-71/110/111/594 are Backlog in the active sprint, unassigned, gating the entire personalized-discovery experience.
- The Sprint 7 rollover itself surfaced a quality signal worth noting: 30 open tickets reset from In Progress back to Backlog on sprint close, several tickets had drifted out of the tracked cache entirely (OTEP-364 had no file at all), and the Core board has had no active sprint since 2026-07-26 despite its planned start date passing. None of these are catastrophic, but they're exactly the kind of small-detail erosion the rule is about — a team building fast enough that its own tracking can't quite keep pace.
- Competency match on listing/detail pages — the feature Section 3.1 of the strategy doc calls a guiding principle, not a nice-to-have — is not yet built, blocked on an unnamed-owner data dependency, sitting inside the single largest schedule risk on the roadmap.

**Golden-path read:** the listing-and-apply surface is a legitimate Build success — wide, functional, shipped ahead of MVP. But "quality is in the details" cuts against us on two fronts simultaneously: the foundational auth layer isn't done, and the differentiating layer (matching) isn't started. We've built the middle of the funnel well and left both ends exposed.

**What reimagining means here:** the next sprint's real priority isn't more listing polish, it's closing the two bookends — auth (blocking everything downstream) and matching (the thing that makes this a career platform instead of a job board). Everything else is detail work on a foundation that isn't finished yet.

---

## 5 · Measure — Learn and adapt

**Rule: continuous learning and improvement.**

**What we actually have:** The metrics ladder (Section 2.3 of the Opportunities strategy doc) is genuinely well-built — click-through, application rate, 180-day login, HR dashboard usage, satisfaction, each with a baseline-to-target-to-date row, each explicitly there to diagnose *where* the North Star would stall if it does (bad discovery vs. uninteresting opportunities vs. people not returning). That's rare rigor for a pre-launch product.

**Where Measure is thin:**
- There's no baseline yet for almost everything — Current Baseline reads "No baseline" for 4 of 6 outcome metrics. That's expected pre-launch, but it means Measure hasn't actually started; it's Defined (targets exist) without being Measured (nothing to compare against yet).
- The cost/value (VCR) table is entirely unpopulated — no Dev/Ops EOM figures, no impact-unit definition. We can't yet answer "is this worth what it costs," which is itself a Measure question, not a finance afterthought.
- The applications-per-vacancy guardrail (proposed to catch a demand-supply trust risk as reach scales) is a good idea flagged in the strategy doc but not yet instrumented anywhere.

**Golden-path read:** the *plan* to measure is strong. The *practice* of measuring hasn't started because nothing has launched yet. The real test of this stage comes in November — whether the team actually pulls baseline numbers and revisits assumptions, or whether the metrics ladder becomes a document nobody re-opens after go-live.

**What reimagining means here:** name who owns pulling the R1 click-through number in March and what happens if it misses. A metrics table with no owner for the "what do we do if it's wrong" step isn't Measure, it's Define wearing a Measure costume.

---

## Synthesis — what "reimagining Opportunities" actually means

| Stage | Good | Bad | Missing | How |
|---|---|---|---|---|
| Discover | Sharp problem statement; a real (if mislabeled) demand signal exists somewhere in the data | The "pilot, by quarter" demand table is actually 2025 OTG business-owner data, not CareerCompass pilot usage; personas trace to the same mislabeled source, not interviews or live users | Real CareerCompass usage data or officer interviews to validate demand and the persona split; a single, honestly-labeled persona doc instead of two duplicates | Correct the "pilot" label on the demand table; stop citing the Intentional Mover insight as established; retire one duplicate doc |
| Define | Precise North Star, working D-001 filter | North Star ownership unresolved (bundled with course completions) | Owner + resolution date for competency data dependency | Force ownership decision before leadership review |
| Validate | A real (mislabeled) demand signal exists in the 2025 OTG data | Zero experiments on the matching hypothesis; ringfencing unverified; the "problem is real" claim itself still needs CareerCompass-native validation, not just OTG data | "Already applied" state unscoped, fails testing | Run one lightweight experiment before feature freeze; validate demand against actual CareerCompass usage once live |
| Build | Wide functional surface shipped pre-MVP | WOG AD auth unassigned; sprint tracking eroding | Competency matching not started | Prioritize auth + matching over listing polish next sprint |
| Measure | Well-built metrics ladder | No baseline for 4 of 6 metrics; VCR table empty | Applications-per-vacancy guardrail not instrumented | Name an owner for the R1 number and the "what if it's wrong" response |

**Bottom line:** Opportunities hasn't actually proven the problem on CareerCompass yet, let alone the solution. What's been cited as "pilot data" is 2025 OTG business-owner data mislabeled as pilot evidence, and the personas trace to that same source. The highest-leverage moves are: correct the mislabeling wherever "the pilot" is cited, get real CareerCompass usage data or officer interviews as soon as the platform is live, and run one real experiment on the matching hypothesis before feature freeze — alongside closing the auth gap currently blocking the whole personalized-discovery experience.
