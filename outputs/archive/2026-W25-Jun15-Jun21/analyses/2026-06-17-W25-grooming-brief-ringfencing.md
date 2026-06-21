# Backlog Grooming Brief: Ringfencing (OTEP-127)

*Prepared: 2026-06-17 | For: S5 backlog grooming (target 26 Jun)*

---

## What we're grooming

Ringfencing = restricting which officers can see a given opportunity based on eligibility criteria set by the posting agency. **Scope decision (2026-06-17):** Opportunity creation and criteria-setting stays in OTG — CareerCompass reads the ringfencing rules from the OTG ingestion pipeline and enforces them at display time only. No criteria-authoring UI in OTEP.

**Stories in scope for this session:**

| Jira | Story | Status | Sprint target |
|------|-------|--------|---------------|
| OTEP-127 | [Spike] Define ringfencing display contract — OTG rules → CareerCompass listing | Backlog | S5 (1 pt, 0.5 day) |
| OTEP-408 | [BE] Listing API — apply ringfencing eligibility filter | Backlog | S5 |
| OTEP-409 | [FE] Listing — reflect ringfenced results | Backlog | S5 |
| OTEP-390 | Ringfenced opportunity detail page states | Backlog | S5 |

**The goal for 26 Jun:** close OTEP-127 (2 BO questions remaining), estimate OTEP-408/409/390 as a block. This is now a standard estimation session — the architectural unknowns are largely resolved.

---

## As-is: How ringfencing works in OTG today

OTG lets opportunity owners set an "audience filter" when posting. Three filter types exist: **Location** (agency-based, 97% of usage), **Business Unit**, and **Function**. The filter is stored as an allowlist of eligible agencies in a separate report (`RAW_GIG_AUDIENCE_FILTERS`). In OTG, the system enforces the filter at display time — officers only see opportunities they're eligible for. One edge case: one MDDI record uses an EXCLUDE/blocklist format (~100 agencies blocked), making it effectively MDDI-only.

**OTEP currently has no equivalent.** All officers see all listings regardless of audience filters. Ringfencing must be built before pilot agencies that use it (primarily ESG) go live.

### Data picture (ingestion analysis, updated 15 Jun)

- 669 open opportunities in OTG total
- **Jobs and Secondments excluded from MVP entirely (decision 2026-06-17, Adrian + Xian Zhang).** 102 of 669 (15%) removed from the MVP listing. BOs are aware of the volume affected.
- **MVP listing scope: 567 opportunities** (STIPs, Gigs, SJRs, C@G External)
- Of those, **217 (38%) are ringfenced** — all from GIG and STIP types

| Type | MVP? | Total | Ringfenced | Rate | Note |
|------|------|-------|-----------|------|------|
| Jobs (incl. Secondments) | ❌ Excluded from MVP | 102 | 36 | 35% | R1 — native creation needed first |
| GIG | ✅ | 38 | 9 | 24% | All 9 ringfenced are ESG-only |
| STIP | ✅ | 9 | 1 | 11% | Low impact |
| SJR | ✅ | 57 | 0 | 0% | Fully WOG-open |
| C@G External | ✅ | varies | 0 | 0% | C@G has no ringfencing |

**ESG impact:** ESG accounts for the majority of ringfenced opportunities (172 of 253 in full OTG). With Jobs/Secondments excluded, ESG's ringfenced exposure drops to GIG-only (9 records). ESG remains a pilot agency — they are aware their Secondments won't appear at MVP.

### What's already decided (I-012, ratified 12 Jun)

OTEP MVP will enforce **agency-level ringfencing only** (Location filter). The approach: ingest all opportunities (including ringfenced), store the eligible agency list in the pipeline, and at display time filter what each officer sees based on their agency from the WOG AD / Keycloak session token. BU and Function ringfencing (13 records total) is deferred post-MVP.

This partially answers BO question #1 (hide vs show-disabled) — the confirmed approach is **hide** (officers only see eligible opportunities). Confirm with BOs whether they want to revisit this before grooming.

### How the pieces connect

```
OTG export (GIGS_V2_REPORT)
  + RAW_GIG_AUDIENCE_FILTERS (joined on Gig ID)
      → ingestion pipeline stores eligible agency list per opportunity
          → at display time: match officer agency (from session token) against list
              → officer sees only eligible opportunities
```

The engineering chain: (1) ingestion pipeline must join both OTG reports and store the eligible agency list on the opportunity record — not currently done; (2) officer's agency must be readable from session context — depends on WOG AD / Keycloak (OTEP-71, OTEP-304); (3) null/missing ringfencing field = treat as open to all (resolved 2026-06-17).

**POCDEX is not in this chain.** Ringfencing criteria come from OTG at ingestion time, not from the officer's POCDEX profile. The spike confirms the OTG field mapping and display rule — not a POCDEX contract.

---

## The spike: OTEP-127

**Goal:** Close the two remaining display UX questions so OTEP-408/409/390 can be estimated and entered into S5. As-is OTG field mapping is known. Null/missing ringfencing field = open to all (resolved).

**Why still a spike:** BO sign-off on display rule and message copy hasn't landed yet. Once it does, the spike closes and build stories can be estimated immediately.

**1 point, 0.5 day. Updated in Jira 2026-06-17.**

**Remaining open questions (both need BO answer — open-item #43):**

| # | Question | Why it matters |
|---|----------|----------------|
| 1 | Hide the listing entirely vs show-but-disable apply CTA for ineligible officers? | Two completely different Figma flows; Amber can't design until this is answered |
| 2 | Ineligibility message copy — how specific? ("Not available to you" vs "This is for [agency] officers only") | Legal/comms sensitivity; affects copy scope |

**Already resolved (not spike questions anymore):**

| Item | Resolution |
|------|-----------|
| OTG field mapping — which fields carry ringfencing criteria | Known from as-is analysis (RAW_GIG_AUDIENCE_FILTERS) |
| Storage at ingestion — how OTEP stores the eligible agency list | Field on opportunity record, joined at ingestion |
| Null/missing ringfencing field | Treat as open to all (decided 2026-06-17) |
| EXCLUDE/blocklist mode (MDDI edge case) | Follow OTG behaviour: invert blocklist at ingestion → eligible set = all WOG agencies minus blocked list. Pipeline must handle both INCLUDE and EXCLUDE mode. Resolved 2026-06-17. |
| POCDEX dependency | Removed — criteria come from OTG, not officer profile |

**Dependencies before spike can start:** None. It can start as soon as BO answers Q1 and Q2.

**Expected output:** Confirmed display rule + message copy (BO sign-off), go/no-go on OTEP-408/409/390 for S5.

---

## The 4 BO questions (open-item #43)

Scope decision (2026-06-17): criteria-setting stays in OTG. Stacked criteria, post-publish editing, and audience editing are OTG's responsibility — not OTEP's. Five questions remain for BOs.

| # | Question | Why it matters |
|---|----------|----------------|
| 1 | Hide the listing entirely vs show-but-disable apply CTA for ineligible officers? | Two different Figma flows; Amber is blocked until this is answered |
| 2 | How specific should the ineligibility message be? ("Not available to you" vs "This is only for [agency] officers") | Legal/comms sensitivity; affects copy scope |
| 3 | Should OTEP surface a positive eligibility signal for eligible officers? ("Available to you" badge) | Net-new feature if yes — needs its own story shell |
| 4 | Jobs filter chip — show (returns empty until R1 when Internal Jobs/Secondments are ingested) vs hide entirely until R1? | Affects OTEP-86 filter chip display logic; "show empty" risks confusing officers at launch |
| 5 | EXCLUDE/blocklist mode (MDDI edge case) — should blocked officers see any indication they are excluded, or is silent hide acceptable? | OTEP will invert the blocklist at ingestion (follow OTG behaviour — resolved). But ~100 blocked agencies won't see the posting and won't know why. Same hide-vs-message decision as Q1/Q2 applies here, but for a blocklist rather than an allowlist. BOs need to confirm: same treatment as standard ringfencing, or different message? |

**Also worth probing:** Do any pilot agencies actually plan to ringfence at launch? If none do, we can park OTEP-127/408/409/390 as a design-only deliverable and let them sit in S6 backlog. This is the hypothesis that could collapse the entire grooming agenda.

---

## What to define in the session

**Target outputs from 26 Jun:**

1. **OTEP-127 (spike) — confirm closed or close in session.** If BO Q1 and Q2 are answered before 26 Jun, the spike is done and you walk in with it closed. If not, close it live in the session with BOs present.

2. **OTEP-408/409/390 — estimate as a block.** These three are sequenced: 408 (BE) → 409 (FE) → 390 (detail page states). Pow Hwee estimates 408, FE estimates 409, Amber estimates 390. State the dependency order clearly so they're not treated as parallel.

3. **Agency admin story — confirm R1 (not MVP).** Criteria-setting stays in OTG. OTEP has no agency admin UI at MVP. State this as settled — not a question for the session.

**What not to try to close:** full AC detail on 408/409/390 if BO questions 1 and 2 haven't landed yet. In that case, draft shells, flag the two open fields, and hold final estimation until after BO sign-off.

---

## What to bring to the session

**For you to prep:**
- [ ] Send BO questions 1–5 to Jacky / Xian Zhang before 26 Jun — need answers before estimation, even async is fine. Q5 (EXCLUDE/blocklist mode) is new — flag it explicitly so BOs know it's an edge case from OTG's current MDDI record
- [ ] Probe: do any pilot agencies actually plan to ringfence at launch? Ask Jacky / Xian Zhang in the same message — this determines whether the stories enter S5 at all
- [ ] OTEP-127 is already updated in Jira (2026-06-17) — confirm it's closed or close it live if BO answers arrive in the session

**For Amber:**
- [ ] No design work until BO Q1 (hide vs show-disable) is answered — block is real
- [ ] Once Q1 is answered: eligible indicator treatment for OTEP-390 AC2 ("Available to you" badge direction)

**For the squad in the session:**
- Lead with the scope clarification: criteria-setting stays in OTG, OTEP display only. Framing for Pow Hwee: simpler build, no POCDEX dependency
- Walk through OTEP-408 → 409 → 390 as a sequenced block; 408 must close before 409 starts
- Confirm OTEP-127 closed before asking for 408/409/390 estimates

---

## Risk

**BO sign-off (#43) is the single critical path item.** Down from 7 questions to 3 — much more tractable. If the 3 display questions aren't answered by 26 Jun, OTEP-408/409/390 can't be estimated.

If BO answers arrive late: OTEP-127 spike can still close (OTG field questions are answered), but build stories slip to S6. S5 fills with OTEP-304 (session persistence), OTEP-281 (loading state), and OTEP-427 (ingestion tightening) instead. State this contingency upfront in the session — don't let it surface as a surprise mid-planning.

---

*Updated: 2026-06-17 — (1) creation/criteria stays in OTG, OTEP display-only; (2) Jobs + Secondments excluded from MVP (102 opps, BOs aware); (3) POCDEX dependency removed; (4) 7 BO questions → 3; (5) OTEP-127 reduced to 1pt/0.5 day. Sources: OTEP-127 (Jira), open-items.md #43, decisions-log.md 2026-06-17, 17_ringfencing_analysis.html (RAW_GIG_AUDIENCE_FILTERS, 669 records, updated 15 Jun 2026)*
