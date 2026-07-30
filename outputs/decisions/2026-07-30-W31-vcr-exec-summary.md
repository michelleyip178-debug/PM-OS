# OTEP Value-Cost Ratio — Executive Summary

**Date:** 2026-07-30

**Owner:** Michelle Yip

**For:** Q1 FY28 Value for Cost Review checkpoint (IAA Paper Section 3b, para 37-39)

---

## The headline number

**OTEP costs $49.44 for every hour of officer time it saves** (the flip side of the same number: 20.23 hours saved per $1,000 spent). This number stays exactly the same every year from FY28 to FY30, once the platform is fully up and running.

**Why it doesn't improve over that stretch:** both what we're spending and what we're saving hold steady in the paper's numbers, so the ratio between them holds steady too. Think of it like a mortgage: your monthly payment doesn't shrink just because time is passing, it stays flat until the loan is paid off. Same here. The number will genuinely get better later, around FY30/31, once the development cost is fully "paid off" (see amortisation below) and drops out of the equation. At that point the ratio roughly doubles to about 38.7 hours saved per $1,000.

**The formula, in plain terms:** VCR = value delivered ÷ what it cost to deliver it. Value here is 183,000 hours of officer time saved per year (this is the paper's chosen "North Star" number, not a dollar figure). Cost is development cost (spread out over time, see below) plus the ongoing cost of running the platform.

## Why the timing makes this look worse than it is

Picture buying a house: you pay for it upfront, but you don't get years of living-in-it value until after you move in. Q1 FY28 is the moment right after we've paid nearly the whole cost of the "house" but before we've had any real time to live in it.

Concretely: by Q1 FY28, we'll have spent **76-81% of OTEP's total $22.4M lifecycle cost**. But Release 6, the last piece of the platform, launches that same quarter. Officers won't have had time yet to actually experience the time savings. So the review is landing at the worst possible moment to judge value, right when cost is maxed out and value has barely started counting up. That's a timing problem, not a sign OTEP isn't working.

## A quick note on "amortisation" and the "Greenfield Exception," since these drive the whole calculation

**Amortisation** just means spreading a big upfront cost out over the years you'll benefit from it, instead of counting it all in the year you paid it. Like buying a $12,000 laptop and mentally treating it as "costing" $4,000/year over 3 years, rather than one huge hit in year one.

**The Greenfield Exception** is a rule that says: for something built from scratch (like OTEP), don't start that spreading-out clock until the thing actually goes live. It doesn't make sense to say the laptop is "costing you money each year" while it's still sitting in the box being built. So OTEP's $12.96M build cost doesn't start counting against it until FY28, when the platform goes live, not back in FY26 when construction began.

## What we can trace by release, and what we can't

- **MVP** accounts for about 116,455 of the 183,000 hours saved per year (roughly 64% of the total), from the parts that help officers find courses and opportunities.
- **Release 2** accounts for the remaining ~66,545 hours (36%), from the career development planning features.
- **Release 1 and Releases 3-6 don't show up in this hours-saved number at all.** That doesn't mean they have no value, it means their value gets tracked through different measures instead (like application volume for Release 1, or agency dashboard adoption for Release 4).
- **The bigger problem is on the cost side.** The source paper only tells us total build cost for the whole project ($12.96M), never broken down release by release. So even for MVP and Release 2, where we know the value side clearly, we can't build a true release-level VCR without real cost data broken out by release, which we don't currently have.
- **Release 1's VCR (0.27 applications per $1,000, or about $3,668 spent per application it enables) is a rough estimate, not a real number.** We built it using two guesses: splitting total cost evenly by how long each release took, and assuming Release 1 drives one-sixth of the total application target. Don't quote this one outside the team or use it to make a go/no-go call.

## What to bring to the Q1 FY28 Review

Show three separate things rather than mashing them into one number, because they answer three different questions:

1. **The VCR itself** (20.23 hrs saved per $1,000). Be upfront that it's flat right now by design, and say when it'll actually improve (~FY30/31).
2. **Real adoption numbers** — how many officers/agencies are actually using OTEP against the targets (OP1, OP3), since these have real dates that land around the same time as the review.
3. **Cash savings vs. estimated value, kept separate.** Cash savings is the boring, provable number: $0.375M/year, which takes about 8 years to pay back the extra cost of building OTEP ourselves instead of buying OTG. The $8.4M/year figure is an estimate of what officers' saved time is worth (equivalent to freeing up 84 full-time staff), not money that's actually landed in an account. Both are legitimate, they just answer different questions ("did this save money" vs. "did this make people more efficient"), so don't blend them into one headline.

**How confident are we in this?** Very confident the VCR math itself is right. Less certain about the exact amount spent by Q1 FY28 specifically, since the source paper only gives full-year numbers, not quarter-by-quarter, so double-check the real number with Finance/CS before quoting it outside the team.

## Still open

- Confirm the actual amount spent by Q1 FY28 with Finance/CS (we're currently using a full-year estimate as a stand-in)
- Confirm Release 6 is still on track to land at or before Q1 FY28
- Get real OP1/OP3 numbers once they're in, not just the targets
- Ask whether PSD tracks project cost by release internally. If they do, we could swap out the guessed numbers for Release 1, MVP, and Release 2 with real ones

---

## Where the detail lives

- [One-pager](2026-07-29-W31-otep-vcr-one-pager.md) — the full calculation, release-by-release breakdown, and recommendation. This summary is built from it.
- [Comprehensive study note](../analyses/2026-07-29-W31-vcr-comprehensive-study-note.md) — explains every concept from scratch (what CAPEX/OPEX mean, cash vs. estimated value, the Greenfield Exception, full working, glossary, and a self-test at the end).
- [Release 1 two-options doc](../analyses/2026-07-29-W31-release1-vcr-two-options.md) — why Release 1 needed a rough estimate instead of a real number, the alternative we didn't use, and the tracking metrics proposed for it instead.

**One thing worth flagging:** [`2026-07-27-W31-opportunities-uat-value-cost-ratio.md`](../analyses/2026-07-27-W31-opportunities-uat-value-cost-ratio.md) also has "Value-Cost Ratio" in the title, but it's completely unrelated, it's about ranking QA test gaps by effort vs. value, not this financial VCR. Worth flagging so the two don't get mixed up if someone just says "VCR" without more context.

*Source data: OTEP IAA Paper v1.1 (18 Mar 2026), Tables 6, 7, 8, 10, Section 3b paras 32-39. VCR Playbook (shared 2026-07-29).*
