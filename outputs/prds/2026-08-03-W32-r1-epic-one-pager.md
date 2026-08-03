*Synced from Confluence: [R1 - Opportunities Creation and Application](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2379546760/R1+-+Opportunities+Creation+and+Application) (v13, last updated 30 Jul 2026) — Confluence is the source of truth for this doc. Template origin: [Product Epic 1-pager Template](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931675660/Product+Epic+1-pager+Template). Source PRDs: [R1 PRD](2026-07-07-W28-careercompass-r1-prd.md), [R1 Design PRD](2026-07-30-W31-r1-design-prd.md).*

# CareerCompass | OTEP-Pathfinder

| | |
|---|---|
| **Release** | R1 |
| **Target** | Q1 2027 |
| **Status** | *(blank on Confluence)* |
| **Author** | Michelle Yip |
| **Last updated** | 30 Jul 2026 |
| **Reviewed with** | *(blank on Confluence)* |
| **Prototype - Figma** | [zipper-ritzy-40733845.figma.site](https://zipper-ritzy-40733845.figma.site) |
| **References** | STIP_Brownbag Session for Dev Opps_29 Jul 2026.pdf · SJR Brownbag 2026.pdf · stipprocessdeck.pdf · gigprocessdeck.pdf (attachments on Confluence page, not mirrored here) |

## The Short Version

Right now, officers leave CareerCompass to apply anywhere, and once they leave, we lose all visibility — no idea if they finished, got rejected, or gave up. On the HR side, posting a job means juggling three disconnected tools today: post it in one system, field applications by email, track progress in a spreadsheet. R1 fixes both: applying happens inside CareerCompass, HR creates and manages postings natively, and both the officer and the hiring team can see where things stand until there's an outcome.

**For Amber:** your part starts at "What We Need You to Design," right below. Everything after that is business/leadership context, kept in for the full record.

## What We Need You to Design

Three moments in this release need real design work:

1. **The rejection message.** When an officer doesn't get the role, how we tell them matters — this is the most emotionally sensitive point in the whole release, and it deserves its own careful pass rather than a generic "not this time" banner. This needs to be designed together with how we store application status underneath it, not bolted on afterward.

2. **The hiring manager's view.** Today, once an officer applies, there's a silent gap — nobody has ever designed what the person reviewing applications actually sees or does. This is genuinely new ground, nothing to extend from. **This is the one to start first** — nothing else in the status-tracking piece can be scoped or estimated until this exists.

3. **The "create a posting" form.** HR needs one form that works for six different posting types (Internal Job, Secondment, STIP, Gig, Internal Rotation, SJR), some of which sound alike (is this a "Secondment" or an "Internal Rotation"?). One idea worth testing: group them upfront as long-term (Job, Secondment, Internal Rotation, SJR) vs. short-term/gig (STIP, Gig) — a rough first cut, not a full answer.

**Note on SJR:** it's one of the six posting types, and it should get the same design care as the rest — but it stays switched off until 2028. Design it properly, just don't expect to see real usage or feedback on it any time soon.

**Where things stand right now:**
- **You can start exploring:** the officer's apply experience and HR's posting-creation flow — there's enough settled to begin.
- **Nothing can move forward until this is designed:** the hiring manager's view (#2 above). This isn't a "do it whenever" item — it's blocking everyone else's estimate.
- **Open question, doesn't block starting:** how HR tells similar posting types apart (#3 above).

---

## 1. Background & Context

**Why this matters strategically:** Our North Star metric is officers completing a development action — but today, once an officer clicks Apply, they leave CareerCompass entirely, so we have no way to know if they ever finished. R1 is what makes that metric measurable at all, not just bigger.

**Why we're doing this now:** Leadership approved "apply without leaving CareerCompass" back in March 2026 SteerCo Meeting. R1 is where we actually build it.

**What's changed since then:** We initially planned to integrate with an external ATS (applicant tracking system) for tracking application status. That plan was dropped on 3 July 2026 after Engineering — and separately, the CIO directly — confirmed that integration path won't be ready until 2028 and after.

Today, officers already use CareerCompass to find STIPs, and Gigs — the discovery half works. It's the discovery of Internal Jobs, Secondments and the apply half that still sends them elsewhere.

## 2. Problem Statement

**For officers:** you find something worth applying to, click Apply, and get sent to a different website where you retype everything you already told us once. Then you hear nothing. As far as CareerCompass is concerned, you vanished.

**For HR:** posting a job means juggling three separate tools — post it in one system, field applications by email, track progress in a spreadsheet. Nothing talks to each other.

## 3. Data Analysis & Evidence

We don't have real usage data yet because we've never tracked this inside CareerCompass before — the numbers below are our best current estimate, not measured fact.

| Metric | Where we are now (estimated) | Where we want to be |
|---|---|---|
| % of officers who complete an application without leaving CareerCompass | ~15–20% (estimate) | 40%+ by March 2027 |
| Officers completing a development action (our North Star) | Can't measure today | 10% of onboarded officers by March 2027 |
| Applications submitted through CareerCompass | 0 today | 405–540 in the pilot group by Q1 2027 |

**When we'd pull back:** if, after the first 4 weeks, fewer than 25% of officers are completing applications, or more than 10% of submissions have wrong/outdated pre-filled data, we pause the rollout and fix it before expanding further.

## 4. Market / Benchmark Scan

Not done. No market or benchmark scan exists in either source document.

## 5. Target User

**Pilot cohort:** ~5,400 officers across 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), onboarded in staggered pairs.

- **Lane 1 — Intentional Mover:** Senior, targeted, time-pressured officer who knows what they want. Primary beneficiary of Epics B (pre-fill) and C (status tracking).
- **Lane 2 — Passive Watcher:** Early-career officer, open but not actively searching. Primary beneficiary of Epic D (Saved Jobs, P1).
- **Lane 3 — Posting Manager:** Agency HR managing 5–20 active postings across three disconnected systems today. Primary beneficiary of Epics A (creation) and C (status tracking).

## 6. Hypothesis (Value Proposition)

**Draft — not in either source PRD, needs Michelle's sign-off before this counts as final.** Built directly from the goals and metrics already stated in §3/§7, not new claims.

**Officer-facing:** If officers can apply to an opportunity without leaving CareerCompass, with a form pre-filled from their profile, then more officers will complete applications instead of dropping off at an external redirect or a blank form, leading to a measurable increase in development actions completed (our North Star) and a rise in apply completion rate from ~15–20% toward the 40%+ target.

**HR-facing:** If HR can create, publish, and manage postings natively in CareerCompass instead of across three disconnected tools, then HR will spend less time reconciling status across systems and give officers a status update faster, leading to status updates reaching officers within the ≤24-hour target instead of today's untracked, ad hoc turnaround.

## 7. Success Metrics

**7.1 Outcome Metrics (North Star)**
- Officers completing a development action: not measurable today → 10% of onboarded officers by Mar 2027

**7.2 Input Metrics**
- Apply completion rate: ~15–20% → 40%+ by Mar 2027
- Status latency (manager action → officer sees update): no tracking today → ≤24 hours by Q1 2027 (measurement point still needs Adrian's explicit sign-off)

**7.3 Guardrail Metrics**
- Pilot officer satisfaction ≥3.5/5 — must not harm
- Pre-fill trust: stale/wrong pre-fill must not increase form abandonment vs. baseline
- If apply completion rate <25% at 4-week mark, or stale pre-fill incidents >10% of submissions → pause rollout

## 8. Scope (Stories + Success Criteria)

| Epic | Story | Success Criteria | Notes to designers/devs |
|---|---|---|---|
| A — Creation | HR authors Internal Job, Secondment, STIP, or Gig posting directly in CareerCompass | Structured creation form per type; posting saved as OTEP-native record; publish/edit/close lifecycle | **Blocked** until agency-admin auth path confirmed (Pow Hwee/Fabian) — go/no-go gate |
| A — Creation | Every posting requires competency tagging at creation | At least one OCC competency tag required before publish | Applies uniformly across types in scope |
| B — Apply | Officer applies inside CareerCompass, no FormSG redirect | Apply CTA opens in-Compass form (not FormSG embed) for all types except C@G | — |
| B — Apply | Application form pre-filled from OTEP profile | Form loads with profile-driven fields, editable before submit; no CV upload/inference | Dependency: competency SSOT endpoint contract (Léo/Kingsley, #18/#41) not yet closed |
| C — Status | Officer sees application status inside CareerCompass | "My Applications" view; state machine Submitted → Under Review → Outcome; fully OTEP-native | — |
| C — Status | Manager moves applicant through status states inside OTEP | Manager-facing status-update UI | **Net-new, undesigned scope** — needs its own design pass before sizing (Amber + Pow Hwee) |
| C — Status | Rejection/outcome screen | Designed alongside the Epic C data model, not after | **Most emotionally sensitive moment in the release** — design owner: Amber |
| D — Saved Jobs (P1) | Officer saves/bookmarks an opportunity | Save action on listing/detail pages; retrievable in a "Saved" view | Ships independently, no dependency on Epic B |
| E — Competency Sync (P1) | Officer's profile stays in sync with HRPS/Cumulus/POCDEX | Read-only sync at login, minimum viable scope | Read-only vs. read+write-back is an open policy question, not yet confirmed with Imelda/Daryll |

**Explicitly not in scope for R1:** the bigger discovery problem (officers still may look across multiple platforms to find opportunities), categorisation inconsistency across agencies, and smarter competency-based matching/recommendations (later release). This release covers what happens *after* someone finds something: applying, and knowing what happened next.

## 9. Go-To-Market Plan

**Who sees this first:** 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), rolled out in pairs. The order of those pairs hasn't been decided yet.

**Timeline (the only two dates we can commit to right now):**
- **January/February 2027 — pilot launch.** This depends on all three pieces of work (creation, apply, status tracking) being finished, plus two open questions being resolved first: whether agency HR staff can even log in and create postings (see Risks below), and how the hiring manager's screen works (see the design section above).
- **March/April 2027 — wider rollout.** This depends on the pilot going well: at least 3.5/5 officer satisfaction, and application completion trending toward our 40% target.

We haven't yet worked out what happens after wider rollout, or the comms/training/support plan for getting agencies ready to use this. Flagging that gap rather than guessing at it.

## 10. Risks, Assumptions & Mitigations

We don't have formal likelihood/impact scoring for these yet — rather than guess, we've left that blank. Here's what could go wrong and what we're doing about each one:

| What could go wrong | Category | What we're doing about it |
|---|---|---|
| We don't yet know if HR staff can even log in to create postings — this could block the whole creation feature | Technical | Pow Hwee and Fabian are confirming this before we open up development work |
| Nobody has designed what a hiring manager sees or does — we can't estimate this work until it's designed | Design | Amber and Pow Hwee need to do this design pass before we can plan and estimate it |
| The technical contract for pulling in officer competency data isn't finalized yet | Technical | If this drags on, we'll launch with read-only data sync and hold off on two-way sync |
| If an officer's pre-filled data is wrong or outdated, it could damage trust in the platform | Product | We're tracking this separately as a safety metric, and we'll pause rollout if more than 10% of submissions have bad data |
| How we deliver a rejection needs real care — it's the most emotionally sensitive moment in the whole experience | Design | This is our #1 design priority, built together with the underlying system, not added afterward |
| Some worry CareerCompass starts to look like a full HR system, not just a discovery tool | Policy | We've drawn an explicit line: CareerCompass tracks only what happens on our own platform — it's not taking over HR's system of record |

## 11. Dependencies & Assumptions

**What this relies on:** officer profile data (skills, work history) already in the system, for pre-filling applications; data feeds from HR systems (POCDEX/HRPS/Cumulus) for keeping profiles current; existing job-posting feeds, which keep working exactly as they do today.

**Who else needs to be involved:** Pow Hwee and Fabian (confirming HR staff can log in), Léo and Kingsley (the technical data contract for competencies), Amber (the three design pieces above), Imelda and Daryll (deciding how deep the competency data sync goes).

**What we're assuming:** CareerCompass only tracks applications that happen on our own platform — we're not trying to replace or represent HR's official hiring records. We're also not building the "SJR" posting type into this rollout, in line with what we didn't build for the earlier MVP either.

**On data quality:** beyond the pre-fill safety check mentioned in Section 7, we haven't made other assumptions about data readiness — worth surfacing if that turns out to be optimistic.

## 12. Decision Tracker

**What needs a decision, and from whom:**

| Decision needed | Who decides | Needed by |
|---|---|---|
| Can HR staff actually log in and create postings — and if not, who builds that? | Pow Hwee / Fabian | Before we open up development work |
| How much should officer data sync automatically — just read it, or also let officers update it back? | Michelle, with Imelda / Daryll | Before that piece of work is planned |
| Does our 24-hour "how fast should status updates reach officers" target measure the right thing? | Michelle, with Adrian | Before that piece of work is planned |
| What does the hiring manager's screen actually look like? | Amber / Pow Hwee | Before that work can be estimated |
| Is the competency data contract (the technical handshake between systems) finalized? | Léo / Kingsley | Ongoing — affects two pieces of this release |

**What happens once these are resolved:** we open up the development pipeline, and detailed planning begins.

**Next review:** not yet scheduled.
