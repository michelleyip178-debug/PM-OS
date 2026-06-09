# Agenda: OTG Ingestion Analysis — Sprint Impact Check-in
**With:** Pow Hwee  

**Proposed date:** This week (before Sprint 4 Planning, Thu 11 Jun)  

**Duration:** 30 minutes  

**Format:** Working session

---

## Why this meeting

The OTG ingestion analysis (Jun 9) shows that only 160 of 633 open gigs (25%) can be ingested today. 473 are blocked. Before the BO meeting to resolve the business rules, I want to align with you on what this means for our sprint plan and whether OTEP-192 / OTEP-348 scope needs to change.

---

## Agenda

### 1. Ingestion health snapshot (5 min)
Quick walk-through of what the analysis found:

- 160 gigs passing, 473 blocked (74.7%)
- Top blockers: Start Date (288), Function (174), Type Tag (163)
- 346 stale gigs, 255 with zero applicants
- 4 BO decisions pending before we know final ingestible count

Key question for you: does this match what you're seeing in the data, or are there surprises?

---

### 2. Sprint 3 impact — OTEP-192 and OTEP-358 (10 min)

**OTEP-192** (Recurring OTG data ingestion job) is in Sprint 3 backlog and on the critical path for OTEP-85 (cards with real OTG data).

- If we run ingestion today, we get ~160 gigs — is that enough to unblock OTEP-85 and demo meaningfully?
- OTEP-358 (nil-date OTG spike, mine) — the start date issue affects 288 gigs. What's the spike output telling us? Does nil-date handling need to be in S3 scope or can it wait?

**OTEP-348** (OTG ingestion scheduler and observability) is also in S3 as carry-over scope.

I want to understand: what does 160 gigs do to the sprint demo story?

---

### 3. Sprint 4 + 5 — do we need to re-sequence ingestion work? (10 min)

The analysis flags three structural issues that will recur after launch:

1. **No agency feedback loop** — blocked gigs are invisible to agencies
2. **Type tag fragility** — 18 unrecognised tag variants, no canonical list
3. **No ingestion sync cadence** — D-016 (Jun 2026) decided one-time port only; may need revisiting

Discuss:
- Does any of this change what we planned for S4/S5?
- Should we add a story for agency-visible remediation tooling, or is that post-MVP?
- The BO meeting (to be scheduled) will determine final ingestible count — do we need a contingency story ready if the count stays low?

---

### 4. What I need from you before the BO meeting (5 min)

Before I brief the BO, I want your read on:

- Is the ingestion pipeline ready to re-run once BO decisions are made and agencies remediate?
- How long does a full re-ingest take? Can we do it agency-by-agency?
- Any technical constraints the BO should know before they decide on stale gig handling or required fields?

---

## Pre-read (optional)

Analysis reports are in `context-library/research/OTEP Ingestion Analysis/`:
- `01_summary_dashboard.html` — top-level snapshot
- `04_oqa_risks_assumptions.html` — 7 risks + open questions
- `06_bo_prep.html` — the 4 BO decisions and their impact

---

## What I'm deciding after this meeting

- Whether OTEP-192/348 scope in S3 needs adjustment
- Whether a new story is needed for agency remediation tooling
- Go/no-go on scheduling BO meeting and timing (before or after S4 planning)
