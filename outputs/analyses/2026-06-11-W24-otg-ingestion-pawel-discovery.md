---
date: 2026-06-11
topic: OTG Ingestion — Pawel Discovery Framework
product-stage: existing
source: 2026-06-10-otg-ingestion-product-discovery.md
framework: Pawel /discover — brainstorm-ideas-existing + opportunity-solution-tree
---

# OTG Ingestion — Product Discovery (Pawel Framework)

## Discovery Question

**How do we get from "the pipeline works technically" to "the catalogue is trustworthy enough to launch on" — while maximising the number of opportunities officers can find at go-live?**

**Desired outcome:** ≥350 visible, high-quality opportunities on CareerCompass at launch day, with a clear remediation path to 500+ within 4 weeks post-launch.

**What we already know:**
- 633 open gigs in OTG; only 160 (25%) pass current rules
- Three levers: field scope decisions (PM call), agency remediation (ops), and ingestion rule review (S5/6)
- Biggest single unlock: Enterprise Singapore (178 blocked = 38% of all blocked)
- Two field scope decisions (start date, function) alone could lift catalogue from 160 → 350–400

---

## Step 1: Brainstorm — 10 Ideas Across Perspectives

### PM Perspective (strategic value + customer impact)

**1. Tiered ingestion rules by opportunity type**
Different skip rules for Secondments vs Gigs vs STIPs — Secondments are standing roles (start date optional), Gigs are time-bound (start date required). Matches role semantics instead of applying a blanket rule. Estimated unlock: ~200 gigs.

**2. "Soft skip" flag with admin visibility**
Records that fail a non-critical field (function, time commitment) ingest but are flagged in an admin dashboard as "data incomplete." Officers see them (with graceful null states); admins see the data gap report. Separates "show to officers" from "data is complete."

**3. Pre-launch catalogue threshold gate**
Define an explicit go-live gate: ≥350 gigs, with ≥3 types having 20+ each. Sprint 5/6 check against this before flipping the switch. Makes the launch decision concrete rather than subjective.

**4. Agency remediation fast-track (top 3 first)**
Skip the broad rollout; start with Enterprise Singapore (178 blocked), MTI (42), MSF (40). Three targeted sessions before launch could add 260 gigs. Pair with a canonical type-tag guide so they fix it correctly.

**5. Skip rate as a launch metric (PostHog)**
Track skip rate per run as a product metric — not just an engineering log. If skip rate > 70%, alert PM. Ties ingestion health to the North Star (catalogue quality = officer trust).

### Designer Perspective (officer experience + usability)

**6. "Fewer opportunities than expected" empty state with honest copy**
If catalogue is thin (< 250 gigs), show officers a context message: "We're adding more opportunities from more agencies — check back soon." Manages expectations, preserves trust, reduces early churn signal.

**7. Progressive disclosure for incomplete opportunity cards**
Cards without function or start date show with a subtle "Details pending" label instead of being hidden entirely. Officers can still see and save the role. Data gaps are surfaced to agencies via the skip report, not hidden from officers.

**8. Secondment-specific card design**
Secondments are standing roles — they don't have start dates by nature. A card design that doesn't show "Start: —" (jarring) but instead shows "Ongoing / No fixed start" turns a data gap into an accurate representation.

### Engineer Perspective (technical possibilities + data leverage)

**9. Two-pass ingestion with a "probable valid" queue**
First pass: hard rules (type tag, agency, `formsg_url`). Second pass: soft rules (start date, function). Records that pass only the first pass go into a "probable valid" queue — ingested but flagged. Engineers can tune pass-2 rules without re-running the whole pipeline.

**10. Ingestion dry-run before every go-live**
A `--dry-run` flag on the ingestion script that counts pass/fail by field without writing to DB. Gives PM a pre-launch catalogue forecast in 2 minutes. No engineering cost after initial implementation; high operational value.

---

## Step 2: Top 5 Ideas Selected for Validation

Prioritised by: strategic alignment + catalogue impact + feasibility within S4/S5 window.

| # | Idea | Why selected | Key assumption to validate |
|---|------|-------------|---------------------------|
| 1 | **Tiered ingestion rules by type** | Highest catalogue unlock (~200 gigs) from a PM decision alone — no agency action needed | Secondments genuinely don't have start dates (not a data quality gap, but a role characteristic) |
| 2 | **Agency remediation fast-track (top 3)** | Enterprise Singapore alone = 38% of blocked content; one session could add 178 gigs | Agency HR contacts can fix OTG data within a 2-week window before go-live |
| 3 | **Pre-launch catalogue threshold gate** | Without a defined floor, "ready" is subjective — this makes the go-live decision PM-owned and measurable | BOs (Jacky/Xian Zhang) will agree to 350+ as the launch floor |
| 4 | **Ingestion dry-run flag** | Zero-cost operational improvement; gives PM a catalogue forecast before every deployment | Léo can add `--dry-run` in < half a day |
| 5 | **"Fewer opportunities" honest empty state** | Even if catalogue is thin at launch, officer trust is preserved if expectations are set correctly | Officers shown a "more coming soon" message are less likely to churn than officers who assume the catalogue is complete |

---

## Step 3: Opportunity Solution Tree

```
DESIRED OUTCOME
└── ≥350 visible, quality opportunities at launch; skip rate < 50% by S5

    OPPORTUNITY 1: Officers can't find relevant secondments (89% blocked)
    ├── Solution 1A: Tiered skip rules — start date optional for Secondments + Jobs
    │   └── Experiment: Rerun ingestion on current OTG data with start date = optional
    │       for Secondments. Measure: how many of the 288 blocked gigs now pass?
    │       Success: ≥150 additional gigs pass. Effort: 1 day (Léo + Michelle call).
    │
    ├── Solution 1B: Secondment-specific card design (no "Start: —" jarring state)
    │   └── Experiment: Amber designs a "Secondment" card variant with "Ongoing role"
    │       label. Test in design review with 3 officers. Success: no confusion about
    │       missing start date. Effort: 0.5 day design.
    │
    └── Solution 1C: "Function" as display-only, not required
        └── Experiment: Rerun on current data with function = optional. Measure: how
            many of the 174 blocked gigs now pass? Success: ≥100 additional gigs.
            Effort: PM decision + 0.5 day Léo change.

    OPPORTUNITY 2: Launch catalogue too thin to drive officer trust (160 gigs)
    ├── Solution 2A: Agency fast-track remediation (Enterprise Singapore first)
    │   └── Experiment: Send ESG a per-agency skip report with the top 3 fixable issues
    │       (type tag, missing fields). Set 2-week window. Measure: how many of their
    │       178 blocked gigs pass after fix? Success: ≥80 gigs remediated.
    │       Effort: 0.5 day to generate report; ESG owns the fix.
    │
    ├── Solution 2B: Pre-launch dry-run + catalogue threshold gate
    │   └── Experiment: Léo adds --dry-run flag. Run before S5 planning to get
    │       current forecast. PM compares to threshold (350). Go/no-go is explicit.
    │       Success: forecast ≥350 OR clear path to it with committed agency fixes.
    │       Effort: 0.5 day (Léo).
    │
    └── Solution 2C: Honest "more coming" empty state for thin catalogue
        └── Experiment: Design + copy for sub-250 catalogue state. Test copy with
            2 officers in user testing. Success: officers understand and don't
            assume the catalogue is complete. Effort: 0.5 day design.

    OPPORTUNITY 3: No feedback loop — PM can't tell if ingestion is healthy
    ├── Solution 3A: Skip rate as a tracked metric (PostHog or admin dashboard)
    │   └── Experiment: Add skip count + pass count to ingestion run log; surface
    │       in admin view. Measure: PM can see skip rate without reading logs.
    │       Success: skip rate visible within 1 click. Effort: 1 day (Léo + Hao Eng).
    │
    └── Solution 3B: Per-run ingestion summary emailed to Michelle + Pow Hwee
        └── Experiment: After each ingestion run, script emails a 5-line summary:
            total records, passed, skipped (with top 3 skip reasons). No dashboard
            needed. Success: PM receives summary without checking logs.
            Effort: 0.5 day (Léo).
```

---

## Step 4: Critical Assumptions (Impact × Risk)

Ranked by test priority — highest impact + highest uncertainty first.

| # | Assumption | Category | Impact | Uncertainty | Priority | How to test |
|---|-----------|----------|--------|-------------|----------|-------------|
| 1 | Secondments genuinely don't have start dates (not a data gap — a role type characteristic) | Value | High | High | 🔴 Test first | Confirm with Pow Hwee + check OTG data: what % of secondments have NO start date across all 259 records? |
| 2 | Enterprise Singapore can fix their 178 blocked gigs in a 2-week remediation window | Viability | High | High | 🔴 Test first | One call with ESG HR contact to confirm: do they have resource + authority to update OTG records? |
| 3 | BOs (Jacky/Xian Zhang) will accept 350+ as the launch floor | Viability | High | Medium | 🟠 Test this week | BO meeting — present catalogue scenarios (160 vs 350 vs 500); get explicit floor number |
| 4 | Tiered rules (start date optional for Secondments) actually unlocks ~200 gigs | Feasibility | High | Low | 🟡 Easy to verify | Léo reruns ingestion dry-run with start date = optional for Secondments. Count passes. |
| 5 | Officers shown a "more coming soon" message don't churn in the first session | Value | Medium | High | 🟠 Test in pilot | Include in Sprint 6 user testing brief — show thin-catalogue state to 3 pilot officers |
| 6 | Ingestion dry-run flag is fast to build (< 1 day) | Feasibility | Medium | Low | 🟢 Confirm at standup | Ask Léo at standup: is --dry-run a quick add? |
| 7 | Agencies understand what "valid type tag" means without a canonical reference list | Usability | Medium | High | 🟠 Test with ESG | Send ESG the skip report without a tag guide first; see if they ask for one |

---

## Step 5: Validation Experiments (Sequenced)

### This week (before S4 starts Mon 15 Jun)

**Experiment 1: Tiered rules dry-run** *(today — Pow Hwee call)*
- Hypothesis: Making start date optional for Secondments and Jobs unlocks ≥150 gigs
- Method: Pow Hwee or Léo reruns ingestion logic against current OTG data with start date = optional for Secondments/Jobs
- Metric: Count of gigs that pass with new rule vs current 160
- Success: ≥150 additional gigs pass
- Effort: 1 day; PM decision + Léo runs it
- Decision: If ≥150 pass → update OTEP-192 ACs with tiered rule. If < 100 → investigate why (are there other blocking fields?)

**Experiment 2: BO catalogue floor conversation** *(this week — Jacky/Xian Zhang)*
- Hypothesis: BOs will accept 350+ as the launch gate
- Method: Present three scenarios (160/350/500+) with what officer filter views look like at each. Ask: "What's the minimum you'd be comfortable launching with?"
- Metric: Explicit floor number from BOs
- Success: Agreed threshold of 250–400
- Effort: 0.5 day prep (use existing BO brief); 1 meeting
- Decision: Threshold becomes the Sprint 5 go/no-go gate

### Sprint 4 (15–26 Jun)

**Experiment 3: ESG remediation feasibility call**
- Hypothesis: Enterprise Singapore can fix ≥80 of their 178 blocked gigs in 2 weeks
- Method: Send per-agency skip report to ESG HR contact (Rama to provide contact). One 30-min call to confirm: do they have resource + authority?
- Metric: ESG confirms willingness + timeline
- Success: ESG commits to a remediation window
- Effort: 0.5 day (generate report + schedule call)
- Decision: If yes → schedule remediation window for S5. If no → target MTI or MSF next.

**Experiment 4: Ingestion dry-run flag**
- Hypothesis: Léo can add `--dry-run` in < 1 day
- Method: Léo adds flag; PM runs before every deployment to get catalogue forecast
- Metric: PM can forecast catalogue size in < 5 min
- Success: Dry-run output matches actual ingestion pass count (within 5%)
- Effort: 0.5–1 day (Léo)
- Decision: Becomes standard pre-launch checklist item

---

## Step 6: Discovery Plan Summary

### Timeline

| Week | Action |
|------|--------|
| Now (11 Jun) | Pow Hwee call: confirm tiered rule (Decision A). Run dry-run on new rule. Update OTEP-192 ACs. |
| This week (12–13 Jun) | BO meeting: catalogue floor (Decision F). Agency contact list from Rama. |
| S4 W1 (15–19 Jun) | Send ESG skip report. Léo adds `--dry-run`. Amber designs null states for function + secondment cards. |
| S4 W2 (22–26 Jun) | ESG remediation window open. Second dry-run to forecast launch catalogue size. |
| S5 (29 Jun–10 Jul) | Ingestion rules review. Go/no-go against catalogue threshold. Per-agency skip reports for MTI + MSF. |

### Decision Framework

- **If tiered rules unlock ≥150 gigs** → update OTEP-192 ACs with per-type rules; announce S4 catalogue forecast to BOs
- **If tiered rules unlock < 100 gigs** → investigate secondary blockers; escalate to Pow Hwee for deeper rule review in S5
- **If BOs set floor > 500** → escalate: this requires agency remediation at scale before launch; feeds R1 planning
- **If ESG can't remediate in time** → deprioritise agency outreach; focus on rule relaxation to hit 350 through PM decisions alone
- **If dry-run shows < 300 at S5 start** → trigger ingestion rules review early; don't wait for S5/6 structured review

---

## What This Adds to the Existing Discovery Doc

The 2026-06-10 doc is strong on data reality and decisions. This layer adds:

1. **Prioritised experiments** — not just "what to decide" but how to validate the assumptions behind each decision, with explicit success criteria and effort estimates
2. **OST structure** — connects the officer experience problem (sparse catalogue) back to the three opportunity branches (secondments blocked, thin catalogue, no feedback loop)
3. **Assumption risk map** — surfaces which beliefs are high-uncertainty and need testing vs. low-uncertainty and can be acted on directly
4. **Decision framework** — if/then logic for each experiment outcome, so the plan doesn't stall when results come in

---

*Written: 2026-06-11*
*Framework: Pawel /discover (brainstorm-ideas-existing + opportunity-solution-tree)*
*Source: 2026-06-10-otg-ingestion-product-discovery.md*
*Next: Run Experiment 1 today (Pow Hwee call). Schedule BO meeting this week.*
