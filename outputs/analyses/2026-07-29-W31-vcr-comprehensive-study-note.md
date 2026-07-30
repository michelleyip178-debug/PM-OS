# Comprehensive Study Note: Understanding OTEP's Value-Cost Ratio (VCR)

This note starts from zero and builds up every concept using OTEP's actual numbers from the IAA Paper (v1.1, 18 Mar 2026). Nothing is assumed to be already known.

---

## Part 1: What is a VCR, and why does OTEP have one?

**VCR = Value-Cost Ratio.** It's not a meeting or a checkpoint — it's a calculated number, a ratio: how much value a product delivers per $1,000 spent. Per the VCR Playbook: *"VCR is defined as the ratio between a product's delivered value (the numerator) and its total project cost (the denominator)."* It's meant to be tracked continuously (quarterly or annually), not produced once as a report.

This distinction matters because the IAA paper separately describes **Value for Cost Reviews** (Section 3b, para 32-35) — these are the *events* (Post-Release Product Reviews, 3 months after each release; Annual Reviews) at which someone would actually sit down and calculate the VCR. So: **the VCR is the number; the Review is the meeting where you calculate and discuss it.**

The paper names one specific Review checkpoint explicitly: **Q1 FY28**, timed to land right after Release 6 finishes and the platform moves from "being built" to "steady-state operations" (para 38). This is the checkpoint this study note is built around — the VCR *number* we'll calculate throughout this note is the one you'd bring to that Q1 FY28 Review.

**Why this checkpoint is tricky:** it sits at the exact seam between two very different phases of the project — the expensive building phase, and the (hopefully) value-generating operating phase. Reviewing right at that seam means you're asking "what's the VCR?" before the value side of the ratio has had much time to grow. That tension is the whole reason this note exists.

---

## Part 2: The two kinds of "cost" — and why OTEP's are split this way

Before we can talk about value, we need to be precise about cost. The IAA paper splits OTEP's cost into two phases (Table 6, page 15):

| Phase | What it means in plain terms | OTEP's actual number |
|---|---|---|
| **Building phase (CAPEX)** | Money spent creating something that didn't exist before — designing, coding, testing, launching | $12,962,828 (FY26-FY27) |
| **Steady-state phase (OPEX)** | Money spent keeping something running once it exists — salaries, hosting, maintenance | $9,453,870 (FY28-FY29, 2 years) |

**CAPEX** stands for **cap**ital **ex**penditure — spending that creates a lasting asset (the platform itself). **OPEX** stands for **op**erating **ex**penditure — the ongoing cost of running something that already exists.

Add them together and you get OTEP's full lifecycle cost: **$22,416,699** (~$22.4M), spread across FY26 through FY29 (Table 10, page 21):

| Year | Cashflow | Running total |
|---|---|---|
| FY26 | $6,544,526 | $6,544,526 |
| FY27 | $6,645,225 | $13,189,751 |
| FY28 | $3,840,933 | $17,030,684 |
| FY29 | $3,840,933 | $22,416,699 |

This table matters because it lets us answer a very specific question later: *"How much has actually been spent by the time we reach the Q1 FY28 VCR checkpoint?"* — roughly $17-18M, or about 76-81% of the total $22.4M, depending on how much of FY28's spend has landed by Q1 specifically versus across the whole year.

---

## Part 3: Why you can't just compare OTEP's cost to OTG's cost directly

The paper is explicit about this (para 18): **OTG and OTEP are built on fundamentally different delivery models**, so a naive dollar-for-dollar comparison would mislead you.

- **OTG runs on SaaS** (Software as a Service) — think of it like a subscription, similar to paying for Netflix. A vendor (Career Engagement Group Limited) owns and runs the software; PSD pays a recurring fee to use it.
- **OTEP runs on co-sourcing** — PSD builds and owns the software itself, using a mix of in-house staff and hired contractors, rather than renting someone else's finished product.

This is why the paper can't just say "OTG costs $X/year, OTEP costs $Y/year, compare X and Y." Instead it splits both systems into the same two phases (building vs. steady-state) so the comparison is apples-to-apples within each phase (Table 6):

| Life cycle phase | OTEP (co-sourcing) | OTG (SaaS) | Difference |
|---|---|---|---|
| Building Phase | $12,962,828 | $9,347,058 | OTEP costs **+$3.6M more** to build |
| Steady State Phase (2 years) | $9,453,870 | $10,205,157 | OTEP costs **$0.75M less** to run |
| **Total** | **$22,416,699** | **$19,552,214** | OTEP costs **+$2.9M more** overall |

**Read this table carefully — it contains the seed of everything else in this note:**
- OTEP is *more expensive to build* (+$3.6M) because you're paying to create custom software from scratch, instead of renting something that already exists.
- OTEP is *cheaper to run* (-$0.75M per 2 years) because once it's built, you're not paying subscription fees anymore — you own it.
- Net result: OTEP costs $2.9M more overall, over this particular time window (FY26-FY29).

This $2.9M gap is the "hole" that OTEP's value story needs to fill. Everything from here on is about how the paper argues that gap gets filled — and how fast.

---

## Part 4: Cash value — the first way to fill the $2.9M gap

**Definition: Cash value is a saving that shows up as an actual, smaller number leaving PSD's bank account, compared to what would have been spent otherwise.** It's the kind of saving an auditor can verify just by looking at invoices and payment records — no assumptions required about how people behave.

From Table 6 above, the steady-state phase shows OTEP costing $0.75M less than OTG over 2 years. Divide that by 2 to get an annual figure:

$0.75M ÷ 2 years = **$0.375M per year** (this is stated directly in Table 8, page 18, as the "annualised opex difference")

**Where does this saving actually come from?** OTG's steady-state costs are dominated by recurring subscription fees ($7,937,899 of its $10,205,157 steady-state total, per Table 6) — that's the vendor charging PSD every year just to keep using their software, the same way you'd keep paying for a Netflix subscription. OTEP has no subscription fee, because PSD owns the software outright. Once OTEP is built, that $7.9M-ish subscription line simply disappears from the ledger.

**Using this cash saving to answer the $2.9M question (Table 8, page 18):**

| Item | Amount |
|---|---|
| Extra upfront cost of OTEP vs OTG | ~$2.9M |
| Annual cash saving once running | ~$0.375M/year |
| Time to earn back $2.9M at that rate | ~$2.9M ÷ $0.375M ≈ **~8 years** (post-steady-state) |

**This is a slow number.** Eight years is a long payback period, and it's the reason the paper doesn't stop here — cash value alone makes OTEP look like a mediocre financial bet. That's exactly why Section 3b introduces a second, much larger number.

---

## Part 5: Economic value — the second (and much bigger) way to fill the gap

**Definition: Economic value is a benefit that's real in terms of human time and effort saved, but that never appears as a transaction anywhere — no invoice shrinks, no bank balance changes.** It's a *projection* about what saved time is *worth*, not a record of money that moved.

The paper builds this number in four explicit steps (Section 3b(B), pages 16-17, plus Table 7):

**Step 1 — measure current time spent.** Officers today spend (on average) 40 minutes/year on course-and-opportunity discovery, plus 60 minutes/year on career development planning/conversations, while using OTG.

**Step 2 — estimate how much OTEP cuts that time.** The paper's own diagram (Table 7) breaks this into three specific tasks:
- Course Discovery: 40 minutes today → 15 minutes with OTEP = **25 minutes saved**, doubled for "2 courses/year" assumption = 50 minutes saved
- Opportunity Discovery: 40 minutes today → 20 minutes with OTEP = **20 minutes saved**
- Career Development Planning: 40 minutes today → 40 minutes with OTEP, but **halved because officers now only need 1 conversation instead of 2** = effectively 40 minutes saved (2 × 20 min)

Total: roughly 183,000 hours saved annually is the headline figure the paper lands on after applying these per-task savings across the whole officer population (see Step 3).

**Step 3 — multiply by how many people.** The paper scales this across **100,000 officers** (the WOG-wide target population, footnote 1, page 16). Small minutes-per-person, multiplied by a huge population, becomes a large number of hours: **~183,000 hours saved per year**.

**Step 4 — put a dollar figure on an hour of an officer's time.** The paper uses the median wage for an "MX11 officer" — **$100,000/year**, divided by (42 working hours/week × 52 weeks/year) to get an hourly-equivalent rate (footnote 2, page 16). Multiply 183,000 hours by that hourly rate, and you get:

**$8.4M per year** — equivalent to freeing up the working capacity of **84 full-time employees (FTEs)**, without actually hiring 84 new people. This is the number quoted throughout the paper as OTEP's headline productivity case.

### Why this $8.4M is fundamentally different from the $0.375M cash saving

Walk through what would have to be true for this $8.4M to become real, tangible value, versus what's actually being measured:

- **Nobody is "paid" $8.4M.** No department's budget shrinks by $8.4M. No invoice changes.
- What actually happens is: 100,000 individual officers each get back a handful of minutes here and there.
- The $8.4M number is what you get if you ask, hypothetically, *"if we had to pay someone to do all that saved time's worth of work, what would it cost?"* — but nobody is actually paying for that work either way. The officers were always going to spend that time regardless; OTEP just changes how much of it goes to browsing vs. everything else in their job.
- **The saved time only becomes valuable if it's redirected to something useful** — more courses completed, more thoughtful career conversations, more strategic work. If an officer saves 10 minutes and spends it doing nothing differently, the $8.4M "value" for that officer never actually materializes as anything real-world-observable.

This is precisely why the paper itself is careful to say (para 24, page 18):

> *"While these gains are treated as economic value rather than direct cost savings, they significantly strengthen the case for OTEP..."*

The authors are drawing exactly the same line this study note is drawing — they know $8.4M isn't the same *kind* of number as $0.375M, even though both get called "value" in casual conversation.

---

## Part 6: Putting cash value and economic value side by side (the break-even comparison)

The paper computes two very different break-even timelines depending on which kind of value you use (para 24, Table 8):

| Which value counts | Break-even timeline |
|---|---|
| **Cash value only** ($0.375M/year) | ~8 years post-steady-state to recover the $2.9M extra build cost |
| **Cash + Economic value** ($0.375M + $8.4M/year ≈ $8.8M/year) | **Within the first year of steady state** (i.e., roughly Year 3 from project start) |

This is a massive difference — 8 years vs. under 1 year — and it comes entirely from whether you count the $8.4M productivity estimate as "real" for break-even purposes. The paper explicitly chooses to present both, rather than picking one, because:
- The 8-year number is conservative and unimpeachable, but makes OTEP look financially weak.
- The <1-year number is compelling, but rests on a projection about human behavior that hasn't been tested yet.

**Neither number is "wrong."** They're answering two different questions: *"Did OTEP save PSD money directly?"* (cash) vs. *"Did OTEP make the whole public service more efficient?"* (economic). A good VCR reports both, labeled clearly, rather than picking whichever one looks better.

---

## Part 7: Why the Q1 FY28 VCR timing makes this distinction especially important

Recall from Part 1: the VCR is scheduled at Q1 FY28, right after Release 6 finishes (para 38). Now combine that with what we've learned:

- **Cumulative cash spent by Q1 FY28:** ~$17-18M of the $22.4M total (Part 2's cashflow table) — a real, large, already-committed number.
- **Cumulative cash value earned by Q1 FY28:** The $0.375M/year cash saving only starts counting once OTEP is fully in steady-state (i.e., once OTG's subscription would otherwise still be running) — so at the VCR checkpoint, this is close to zero, or just barely starting.
- **Cumulative economic value earned by Q1 FY28:** The $8.4M/year figure is a *run-rate that assumes the full platform is built and officers are actively using it*. But Release 6 — the very last release — is scheduled to land right around the same quarter as the VCR itself. Officers haven't had meaningful time to actually experience the time-savings yet, because the features that create those savings have only just gone live (or are about to).

**Put simply: the VCR is scheduled to happen at the exact moment when the "cost" side of the ledger is nearly maxed out, but the "value" side (both kinds) has barely started ticking upward.**

This isn't a flaw in OTEP's execution — it's a structural feature of *when* the review is scheduled relative to *when value physically can start accumulating*. A construction project reviewed the day the building is finished, before anyone has moved in, will always look like "we spent a fortune and nobody's using it yet" — even if the building goes on to be perfectly successful for the next 20 years.

---

## Part 8: What to actually present at the VCR (tying it all together)

Given everything above, a defensible VCR presentation has three layers, each answering a different question:

1. **"How much have we spent, and does it match budget?"**
   → Answer with the cash actuals table from Part 2. This is uncontroversial — it's just accounting.

2. **"Is anyone actually using the thing we built?"**
   → Answer with adoption/KPI actuals — e.g., OP1 (50% of onboarded officers with updated competency profiles, due Q4 2027) and OP3 (80% of onboarded agencies using analytics dashboards, due Q1 2028). These targets land right around the VCR date, so there should be real, non-projected numbers to cite here.

3. **"Was this worth it, financially?"**
   → Answer with both break-even numbers from Part 6, explicitly labeled: the conservative 8-year cash-only case, and the <1-year case *if and only if* the $8.4M/year productivity estimate holds up — and be upfront that this second number is a projection, not yet an observed result, precisely because the platform has only just finished being built.

The single biggest mistake to avoid: presenting *only* the cash view (looks like a failure, since $17-18M is spent for a slow 8-year payback) or *only* the economic view (looks unrealistically rosy, since none of it is proven yet). Presenting both, and explaining *why* the timing makes this the expected pattern rather than a warning sign, is what makes the VCR credible.

---

## Part 9: Glossary — every term used above, defined plainly

- **VCR (Value-Cost Ratio):** A calculated ratio — value delivered per $1,000 of cost — used to track a product's efficiency over time. Not itself a meeting; the *Review* (see below) is the event where it gets calculated and discussed.
- **VCR Review / Value for Cost Review:** The checkpoint event (per the IAA paper, Post-Release or Annual) at which the VCR ratio is actually calculated and discussed with stakeholders.
- **CAPEX (Capital Expenditure):** Money spent building something new that will last and be used repeatedly (e.g., building the OTEP platform itself).
- **OPEX (Operating Expenditure):** Money spent on an ongoing basis to keep something running (e.g., staff salaries, hosting fees, maintenance) once it already exists.
- **SaaS (Software as a Service):** A way of using software where you don't own it — you pay a recurring subscription fee to a vendor who owns and maintains it (this is how OTG works).
- **Co-sourcing:** A delivery model where PSD builds and owns the software itself, using a blended team of internal staff and hired contractors, rather than renting a finished product from a vendor.
- **Break-even point:** The point in time at which cumulative savings/value finally equal the extra amount originally spent — i.e., when you've "earned back" what you overspent.
- **Cash value / direct cost savings:** A saving that shows up as a real, smaller number of dollars actually leaving the organization's accounts, verifiable by looking at invoices or payment records.
- **Economic value / productivity value:** A benefit measured in terms of time or effort saved, converted into a dollar figure using an assumed wage rate — real in a meaningful sense, but not a transaction that appears anywhere in a ledger.
- **FTE (Full-Time Equivalent):** A way of expressing a large amount of saved time as if it were the working capacity of a certain number of full-time staff (e.g., "84 FTEs" means the total hours saved equal what 84 full-time employees would work in a year).
- **Run-rate:** A projection of what an ongoing number (like annual savings) would be, assuming current conditions continue — as opposed to a cumulative actual, which only counts what has definitely already happened.
- **Steady-state:** The phase of a project after building/launch is complete, when the system is simply being operated and maintained rather than actively developed.

---

## Part 10 (correction & extension): Applying the actual VCR Playbook formula to OTEP

This section replaces an earlier draft that misapplied the playbook. Two errors in that draft, corrected here:

1. **The Value numerator must be a North Star usage/impact metric, not a dollar figure.** Per the playbook's own case studies (Spotify: listening time; Singpass: number of logins; ClaimCore: lead-time/man-days saved), dollars belong only in the Cost denominator. OTEP's correct North Star Value metric is **183,000 hours saved per year** — not the $8.4M figure, which is a *derived economic interpretation* of those hours, kept separate rather than fed back into the VCR formula.

2. **The Greenfield Exception must be applied correctly.** The playbook states that for greenfield products, amortisation of development cost begins only when the product goes live — not at project start. OTEP is greenfield. Applying this correctly means the Year-1 and Year-2 development blocks don't start amortising until FY28 (when the platform is live and in steady-state), and — critically — **this produces a flat VCR across FY28-FY30, not a rising one.** An earlier draft that started amortisation at project start produced an artificial "VCR improves 31.3% in Year 4" result — that was purely an accounting artifact of amortising too early, not a real efficiency gain, and the Greenfield Exception exists specifically to prevent this kind of error.

### Step 1: Allocation (spreading development cost across build years)

OTEP's CAPEX ($12,962,828 total, Table 6) is allocated across its two build years (FY26, FY27) using Table 10's own cashflow weighting (the only per-year granularity the IAA paper actually provides):

| Year | Allocated Development Cost |
|---|---|
| FY26 | $6,431,931 |
| FY27 | $6,530,897 |
| **Total** | **$12,962,828** |

### Step 2: Amortisation (Greenfield Exception — starts at go-live, FY28)

Each year's allocated block is spread over a 3-year useful life, starting from FY28 (go-live), not from the year it was spent:

| Development block | Amortised per year | Years it applies to |
|---|---|---|
| FY26 block | $2,143,977/year | FY28, FY29, FY30 |
| FY27 block | $2,176,966/year | FY28, FY29, FY30 |
| **Combined amortised dev cost** | **$4,320,943/year** | FY28, FY29, FY30 |

**Nothing amortises in FY26 or FY27 themselves** — this is the Greenfield Exception in action. The platform hasn't gone live yet, so there's no "useful life" being consumed.

### Step 3: Operating cost (steady-state OPEX)

Table 6's steady-state OPEX total ($9,453,870 for FY28-FY29) is the only OPEX figure the paper gives cleanly at the phase level — split flat across the two years, since no finer per-year breakdown is available:

| Year | Operating Cost |
|---|---|
| FY28 | $4,726,935 |
| FY29 | $4,726,935 |
| FY30 (extrapolated — not in the original paper, flagged as an assumption) | $4,726,935 |

### Step 4: Total Project Cost per year, and the VCR calculation

| Row | Item | FY28 | FY29 | FY30* |
|---|---|---|---|---|
| 1 | Amortised Development Cost | $4,320,943 | $4,320,943 | $4,320,943 |
| 2 | Operating Cost | $4,726,935 | $4,726,935 | $4,726,935 |
| 3 | **Total Project Cost [a]** | **$9,047,878** | **$9,047,878** | **$9,047,878** |
| 4 | Value Metric — Hours Saved [b] | 183,000 | 183,000 | 183,000 |
| 5 | **VCR (hours per $1,000) = [b] ÷ ([a]/1000)** | **20.23** | **20.23** | **20.23** |
| 6 | **Inverse VCR (cost per hour saved) = [a] ÷ [b]** | **$49.44** | **$49.44** | **$49.44** |

*FY30 is an extrapolation beyond the IAA paper's own FY26-FY29 window — flagged, not sourced.

**Why the VCR is flat, not rising:** Once the Greenfield Exception is applied correctly, both the amortised development cost and the operating cost are constant year-over-year for FY28-FY30 (the paper gives us no data suggesting either changes), and the 183,000-hours value metric is treated as a constant run-rate too. A flat cost and a flat value produce a flat VCR — **$49.44 to save one hour of an officer's time, every year, once the platform is live.** This is the actually-correct reading of "does OTEP's VCR improve over time" using OTEP's own numbers: it doesn't rise or fall on this model — it holds steady, because nothing in the paper's own data suggests either cost or adoption changes year to year once steady-state begins.

**What would make the VCR actually improve (per the Playbook's Lifecycle Stage Matrix, Part 4 above):** the Playbook's "Scale" and "Mature" stages describe VCR improving either because value keeps growing while costs are already sunk (Scale) or because costs ramp down while value holds (Mature). For OTEP, this would require either (a) hours-saved growing beyond 183,000/year as adoption spreads past the current ~100,000-officer assumption, or (b) the amortised development cost finishing its 3-year run (ending FY30 on this model), after which Total Project Cost would drop to OPEX-only (~$4.7M/year) — at that point, VCR would roughly **double to ~38.7 hrs/$1,000**, since the same 183,000 hours would be divided by a much smaller cost base. That's the point in OTEP's lifecycle where a real, non-artificial VCR improvement would show up — but it falls outside the paper's own FY26-FY29 window.

### The one number to hold onto

**OTEP costs about $49.44 to save one hour of a public officer's time**, once the platform is fully live and in steady-state, per the paper's own cost and adoption figures. Whether that's "worth it" is a judgment call the paper doesn't make for you — but per the Playbook's own philosophy (Part 5 above), the point isn't to compare $49.44 against some universal pass/fail bar. It's to track this number over subsequent VCRs and confirm whether it holds, drops (as amortisation finishes), or rises (if adoption falls short of the 100,000-officer assumption).

---

## Part 11: VCR at each release — MVP, R1, R2... R6

The Part 10 table only calculated VCR at the fully-built endpoint (FY28-30, post-Release-6). But the IAA paper's own Post-Release Product Review cadence (para 33) means a VCR should, in principle, be calculated **3 months after every release** — MVP, then R1 through R6 — not just once at the end. Here's how far that can actually be taken using OTEP's real numbers, and where the source data runs out.

### The value side: traceable per release, using Table 7's own task buckets

Table 7 doesn't give one lump 183,000-hour figure — it actually builds that total from **three separate task buckets**, each with its own minutes-saved-per-officer figure:

| Task bucket | Minutes saved/officer/year | Share of total | Hours/year (of the 183,000 total) |
|---|---|---|---|
| Course Discovery | 50 min | 45.5% | ~83,182 hrs |
| Opportunity Discovery | 20 min | 18.2% | ~33,273 hrs |
| Career Development Planning | 40 min | 36.4% | ~66,545 hrs |
| **Total** | **110 min** | **100%** | **~183,000 hrs** |

Now match each bucket to *which release's stated features actually deliver it*, using the roadmap's own feature descriptions (Section 3b):

- **MVP** ships "Unified Opportunity Hub," "Find Relevant Courses through keyword search," and "See Competency Gaps at one glance" — this is literally the Course Discovery and Opportunity Discovery buckets. MVP's own stated value proposition is *"one place to understand competencies and discover Learning and Development opportunities"* — a direct match.
  → **MVP unlocks ~116,455 hrs/year (Course Discovery + Opportunity Discovery combined) — about 63.6% of the full 183,000-hour value.**

- **Release 2** ships "Dynamic Career Profiling," "Competency Gap Detection Engine," and "Smart Development Planner" — this is the Career Development Planning bucket.
  → **Release 2 unlocks the remaining ~66,545 hrs/year — the last 36.4%**, bringing cumulative value to the full 183,000 hrs/year once R2 is live.

- **Release 1** (Seamless Application) and **Releases 3-6** (development plan collaboration, agency tools, AI matchmaking, predictive nudges) don't map to a *new* hours-saved bucket under Table 7's model. That doesn't mean they're valueless — their value shows up in *other* KPIs the paper tracks separately (OP2's 1,850 applications target for Release 1's application flow; OP3's 80% agency-analytics-adoption target for Release 4's agency tools). **Table 7 simply doesn't have a fourth "hours saved" bucket for these** — so on the hours-saved VCR specifically, they don't move the numerator further.

**This is a real, load-bearing gap worth naming explicitly:** the value story for R1 and R3-R6 exists, but it's not expressible in the same *hours-saved* North Star metric used for MVP and R2. A rigorous VCR tracking exercise would need a second North Star metric (e.g., applications submitted, or agencies onboarded) to track R1 and R4's value properly, rather than forcing everything through the hours-saved lens.

### The cost side: this is where the source data runs out

The IAA paper gives CAPEX only at the **phase level** ($12,962,828 total for the whole FY26-27 build), never broken down release-by-release. There's no line in the paper saying "MVP cost $X, Release 1 cost $Y." This means:

- **A precise per-release VCR (with a real dollar denominator) cannot be computed from the source paper alone** — doing so would require either (a) the underlying project cost breakdown by release (likely exists in the team's actual budget tracking, just not disclosed in this IAA paper), or (b) a defensible assumption for splitting $12.96M across 7 releases of uneven size and duration (MVP = 6 months, each Release = 3 months).
- **A rough, clearly-labeled proxy** would be to split CAPEX by release *duration* as a share of total build time (6 + 3×6 = 24 months): MVP (6/24 = 25%) ≈ $3.24M, each subsequent release (3/24 = 12.5%) ≈ $1.62M. This assumes uniform spend intensity across the roadmap, which is unlikely to be true (MVP typically carries disproportionate setup/infrastructure cost) — so treat this only as a placeholder, not a real cost figure, unless validated against actual project accounting.

### What this means practically for your Post-Release Reviews

| Release | Value tracked via | Cost tracked via | VCR computable? |
|---|---|---|---|
| MVP | Hours saved (Course + Opportunity Discovery: ~116,455 hrs/yr, once fully adopted) | Phase-level CAPEX only — no release-specific figure in the paper | **Not with real IAA numbers** — would need actual project cost tracking by release |
| Release 1 | Not covered by hours-saved metric — track via OP2 (applications submitted) instead | Same gap | Needs a different Value metric before VCR is meaningful |
| Release 2 | Hours saved (Career Dev Planning: ~66,545 hrs/yr) — cumulative total now 183,000 hrs/yr | Same gap | **Not with real IAA numbers** |
| Releases 3-6 | Not covered by hours-saved metric — track via OP2/OP3 or a new agency-side metric | Same gap | Needs a different Value metric before VCR is meaningful |

**The honest takeaway:** the IAA paper supports a real, traceable *value* story per release (which release unlocks which slice of the 183,000 hours, or which other KPI), but it does **not** support a real, traceable *cost* story per release — only per phase. Before your team can report a genuine per-release VCR at each Post-Release Review, someone would need to pull the actual release-by-release cost breakdown from internal project accounting (sprint costs, team allocation by release), since the IAA paper itself was never built to support that level of granularity.

### Release 1, specifically

Release 1 ("Seamless Application for Opportunities") is the clearest example of the gap above — it doesn't unlock a new hours-saved bucket at all (Table 7 only models pre-application tasks, not the act of applying itself). **Decision: use an illustrative VCR (Option B)** rather than leaving the number blank:

| Item | Release 1 (illustrative) |
|---|---|
| CAPEX share (duration-proportional, 12.5%) | $1,620,354 |
| Amortised dev cost/year (3-yr life, Greenfield Exception, starting at R1 go-live) | $540,118 |
| OPEX share/year (same proportional logic) | $590,867 |
| **Total illustrative cost/year** | **$1,130,985** |
| Value: applications/year (1/6 of the 1,850 target, placeholder) | ~308 |
| **Illustrative VCR** | **0.27 applications per $1,000** |
| **Illustrative Inverse VCR** | **~$3,668 per application enabled** |

**Carries real caveats wherever it's used:** both the cost split and the value split are placeholders, not sourced from actual release-level project data. Full reasoning, including the rejected alternative (Option A — no number, state the gap), lives in [`2026-07-29-W31-release1-vcr-two-options.md`](../decisions/2026-07-29-W31-release1-vcr-two-options.md).

### Release 1's Metrics Plan: leading and lagging indicators

Because OP2 (the only IAA-sourced metric relevant to R1) doesn't resolve until Q4 2028 and isn't release-attributed, a separate leading/lagging indicator set was built specifically for R1, tied to its actual shipped features:

**Lagging (sourced where possible):**
- Officers who apply via OTEP (**sourced** — OP2, target 1,850 by Q4 2028, whole-platform)
- Applications submitted per officer who started one — completion rate (proposed)
- Repeat application rate (proposed)
- User satisfaction score for the application experience (proposed, modeled on OP1's 3.5/5 convention)

**Leading (all proposed — the IAA paper defines none for R1):**
- % of applications using auto-populated fields (tests Smart Application Assistant adoption)
- Time-to-complete an application (direct proxy for "frictionless," R1's own stated value word)
- Application abandonment rate (started but not submitted)
- % of officers who set a target role in Gap Radar
- Status-tracking page views per application (tests trust in the new visibility, vs. reverting to asking HR directly)

**Why this matters:** the IAA paper gives Release 1 a lagging target but zero leading indicators — meaning without this proposed layer, there'd be no real signal on whether R1 is working until years after it ships.

---

## Part 12: Final self-check — explain it without notes

Try answering each of these out loud. If you can, you've internalized the distinction:

1. **Why is OTEP more expensive to build but cheaper to run than OTG?**
   → Because OTEP is built in-house (higher upfront labor cost to create custom software) but doesn't pay recurring subscription fees afterward, while OTG is the reverse (cheap to start using, but pays a subscription forever).

2. **Where does the $0.375M/year cash saving physically come from?**
   → It's the subscription fee OTG would have kept charging PSD, that OTEP no longer has to pay once it's built and running.

3. **Where does the $8.4M/year economic value physically come from, step by step?**
   → Officers spend less time browsing/planning on OTEP than OTG → multiply minutes saved by ~100,000 officers → multiply total hours saved by an assumed hourly wage rate → get a dollar figure that represents the *value* of time freed up, not money collected.

4. **Why does the $8.4M number only count as break-even evidence "eventually," not now?**
   → Because it assumes the full platform is built and in active use — and the last release (Release 6) is scheduled to land right around the same time as the VCR review itself, so there hasn't been time yet for officers to actually experience and act on the time savings.

5. **If someone asks "so is OTEP actually worth it or not?" — what's the honest one-paragraph answer?**
   → On a strict cash basis, OTEP breaks even against OTG in about 8 years — a real but slow number. If the platform delivers the productivity gains it's designed for, break-even happens in under a year of steady-state operation instead — but that faster number is a projection about officer behavior, not yet a measured fact, and it can only start being tested once the platform is fully built and officers have had time to actually use it differently.

6. **Using the actual VCR Playbook formula, what does OTEP cost per hour of officer time saved?**
   → About $49.44 per hour saved, once live and in steady-state (FY28-FY30), using 183,000 hours/year as the North Star value metric and the Greenfield-Exception-corrected amortised cost. This number is expected to stay flat through FY30, then roughly halve once the 3-year development amortisation finishes — that's the real "does VCR improve" story, not an artificial jump from amortising too early.

7. **Can you calculate a real VCR for MVP alone, or for Release 2 alone?**
   → Value, yes — MVP unlocks ~116,455 of the 183,000 hrs/year (Course + Opportunity Discovery), and Release 2 unlocks the remaining ~66,545 hrs/year (Career Development Planning), traceable directly from Table 7's task buckets and each release's stated features. Cost, no — the IAA paper only gives CAPEX at the whole-build-phase level ($12.96M for FY26-27 combined), never broken down release by release, so a real dollar-denominator VCR per release isn't computable from this paper alone. It would need actual internal project cost tracking by release to close that gap.

8. **What was decided for Release 1's VCR, and why isn't it as solid as the MVP/Release 2 numbers?**
   → Release 1 doesn't unlock a new hours-saved bucket at all (it automates applying, not discovering/planning, which is all Table 7 measures) — so an illustrative VCR (Option B) was used instead: 0.27 applications per $1,000, or ~$3,668 per application enabled. Unlike MVP/R2's hours-saved VCR (traceable directly from sourced IAA figures), Release 1's number rests on two flagged placeholder assumptions — a duration-proportional cost split and an even 1/6 share of the whole-platform 1,850-application target — neither of which is sourced from real release-level project data.
