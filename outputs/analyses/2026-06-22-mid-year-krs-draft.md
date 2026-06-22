---
date: 2026-06-22
owner: Michelle Yip
due: 2026-06-22
relates_to: Q2 2026 sprint planning, Oct MVP go-live
status: DRAFT — needs Thomas + Léo data before finalizing
---

# Mid-Year KRs — Draft (3 KRs)

**Quarter Goal:** MVP go-live week of 19–23 Oct 2026. S4 is dev sprint 4 of 9.

**Your three KRs tied to October delivery:**

---

## KR 1: Opportunities Funnel — [CONFIRM NUMBER WITH THOMAS]

**What it measures:** Officer adoption and progression through the discovery-to-apply journey.

**Baseline (from OTG data):** 
- Total OTG opportunities in pilot agencies: [ASK THOMAS]
- Current officer login rate: ~14% (baseline from OTG; recalibrated 2026-06-19)
- Target: officers log in, find, and apply to opportunities at increasing rates as features land

**Artifact needed:** 
- Thomas owns the live tracking dashboard (PostHog events) for: login count, search count, filter usage, detail page views, apply clicks, apply completions
- Your KR should name the specific metric (e.g., "D30 login rate", "weekly active searchers", "apply-to-view ratio") and target

**Questions for Thomas (ask Mon/Tue):**
1. What's the current weekly active officer count in the test environment?
2. What % of those who log in attempt a search?
3. What % of searchers click into a detail page?
4. What % of detail page views result in an apply click?
5. By end of Q2, what's a realistic target for each of these (given S4 and S5 still shipping)?

**Draft KR (pending data):**
> Officer funnel: [X% weekly active] → [Y% searchers] → [Z% detail page viewers] → [W% apply clicks] by 30 Jun 2026. Baseline: 14% login rate; target: [CONFIRM WITH THOMAS].

---

## KR 2: WOG Authentication & Authorisation — [CONFIRM NUMBER WITH THOMAS]

**What it measures:** Readiness for officers to log in with real WOG AD credentials and see their ringfenced opportunities.

**Current state:**
- Keycloak mock auth: done (OTEP-305, in QA)
- WOG AD domain submission: pending (~2–4 week lead time, submitted early Jun)
- POCDEX integration: in progress (S3 plumbing, S4 seeding, S5 ringfencing — OTEP-202 blocks it)
- CSC SSO: feasibility pending Pow Hwee confirmation

**Artifact needed:**
- Léo owns the ingestion accuracy metrics: how many OTG records pass v3 validation rules, how many fail, why
- Your KR should track: (a) % of pilot agency officers seeded into CareerCompass via POCDEX, (b) % of those who can log in with WOG AD
- Also: zero unauthorised access (ringfencing enforcement)

**Questions for Léo (ask Mon/Tue):**
1. What's the current OTG seeding count? How many records are valid/invalid?
2. Of the valid records, what % are from pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS)?
3. What's the failure rate on validation rules (I-008, I-013, I-015)? What are the top 3 failure modes?
4. By end of Q2, what's realistic for: seeding % complete, WOG AD auth readiness, ringfencing test coverage?

**Draft KR (pending data):**
> Auth & authorisation: [X% officers seeded from POCDEX] + zero unauthorised access (ringfencing 100% enforced in test) by 30 Jun 2026. Baseline: [CONFIRM WITH LÉIO — OTG seeding %, WOG AD lead time status].

---

## KR 3: Process Improvement — [CONFIRM SCOPE]

**What it measures:** Internal PM/team velocity and decision quality.

**Context:** 
- Scope ownership clarification (North Star brief, transition plan, gap analysis — NOT Michelle's)
- OTG monthly report delegated to Jobelle (frees ~1–2 hrs/month recurring)
- Grooming cadence optimisation (discovered grooming without confirmed tech decisions = wasted session)

**Options for this KR (pick one that's measurable by 30 Jun):**

**Option A — Grooming quality**
> Grooming productivity: 100% of S5+ grooming sessions have all foundational tech decisions confirmed before the room (vs. 67% in S4). Measured: % of stories that don't need re-scoping mid-sprint after grooming.

**Option B — Delegation & scaling**
> Delegation success: 3+ recurring tasks/reports transitioned to team members, freeing 3+ hrs/week PM capacity for strategy work. Measured: OTG report → Jobelle (done), [task 2], [task 3] by 30 Jun.

**Option C — Decision velocity**
> Decision throughput: Reduce decision cycle time from 5-7 days to 3-4 days (average across I-016 through I-018 decisions). Measured: decision log latency, time from open question to ratified decision.

**What I need from you:**
- Which resonates most for your Q2 focus? Option A (team quality) or B (scaling yourself) or C (speed)?
- If Option B, what two other tasks would you delegate this quarter?
- If Option A, what metric would you track (re-scopes per sprint, QA rework rate)?

**Draft KR (pending your choice):**
> [Option A/B/C as selected above]. Baseline: [current state]. Target: [outcome by 30 Jun 2026].

---

## Submission checklist

Before sending to Jace (by Wed EOD):

- [ ] Thomas confirmed: opportunities funnel baseline + target (Léo tracking dashboard)
- [ ] Léo confirmed: auth/authorisation baseline + target (OTG seeding %, WOG AD readiness)
- [ ] Process improvement KR: scoped and measurable (Option A/B/C selected with success metrics)
- [ ] All three KRs tied to Oct MVP go-live goal + Q2 sprint progress
- [ ] Each KR has a number (baseline + target) or artifact (dashboard, decision log, tracker)

---

*Follow-up: Ask Thomas (opportunities funnel) and Léo (auth/auth) Mon or Tue. Finalize process improvement choice by Wed AM. Send all three to Jace by Thu 8:45 check-in.*
