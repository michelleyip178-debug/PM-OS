# Backlog Grooming Brief: Ringfencing (OTEP-127)

*Prepared: 2026-06-17 | For: S5 backlog grooming (target 26 Jun)*

---

## What we're grooming

Ringfencing = restricting which officers can see or apply to a given opportunity, based on eligibility criteria (agency, job family, grade, scheme of service). It's a post-auth, post-profile capability — it can only work once WOG AD login and officer profile data are in place.

**Stories in scope for this session:**

| Jira | Story | Status | Sprint target |
|------|-------|--------|---------------|
| OTEP-127 | [Spike] Define ringfencing eligibility contract | Backlog | S5 |
| — | Apply ringfencing: show/hide ineligible opportunities | Not written | S5 or S6 |
| — | Agency admin: set audience criteria on posting | Not written | R1 (likely) |

**The goal for 26 Jun:** use the session to discover and define the ringfencing tickets together with the squad. Come out with: (1) BO policy questions answered, (2) OTEP-127 ACs confirmed and estimated, (3) build story shells drafted with enough AC to go into S5/S6 grooming. This is a discovery-first grooming session, not a standard estimation run.

---

## As-is: How ringfencing works in OTG today

OTG lets opportunity owners set an "audience filter" when posting. Three filter types exist: **Location** (agency-based, 97% of usage), **Business Unit**, and **Function**. The filter is stored as an allowlist of eligible agencies in a separate report (`RAW_GIG_AUDIENCE_FILTERS`). In OTG, the system enforces the filter at display time — officers only see opportunities they're eligible for. One edge case: one MDDI record uses an EXCLUDE/blocklist format (~100 agencies blocked), making it effectively MDDI-only.

**OTEP currently has no equivalent.** All officers see all listings regardless of audience filters. Ringfencing must be built before pilot agencies that use it (primarily ESG) go live.

### Data picture (ingestion analysis, updated 15 Jun)

- 669 open opportunities total; **253 (38%) are ringfenced**
- **Enterprise Singapore accounts for 172 of 253 ringfenced (68%).** ESG uses OTG as a near-pure internal HR platform — 127 of those are ESG-internal Secondments, not WOG-open roles.

| Type | Ringfenced | Rate | Note |
|------|-----------|------|------|
| Jobs (incl. Secondments) | 36 of 102 | 35% | Secondments: 51% ringfenced, ESG dominates |
| GIG | 9 of 38 | 24% | All 9 are ESG-only |
| STIP | 1 of 9 | 11% | Low impact |
| SJR | 0 of 57 | 0% | Fully WOG-open |

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

The engineering chain: (1) ingestion pipeline must join both OTG reports — not currently done; (2) officer's agency must be readable from session context — depends on WOG AD / Keycloak (OTEP-71, OTEP-304); (3) agency-resolution source (D-2) must be confirmed. The spike (OTEP-127) is really about pinning down steps 1 and 3.

---

## The spike: OTEP-127

**Goal:** Produce a written eligibility matrix and API contract doc. Answers: what POCDEX fields drive eligibility for each opportunity type, and what does the API payload from POCDEX look like?

**Why it's a spike, not a story:** We don't know yet whether POCDEX can serve eligibility data in real time, or whether OTEP needs to cache it. The spike resolves that architectural question. Build stories can only be estimated after the spike closes.

**Dependencies before the spike can start:**

| Dependency | Status | Owner |
|-----------|--------|-------|
| WOG AD login (OTEP-71) | Backlog, no sprint | Pow Hwee |
| POCDEX API service (OTEP-203) | Blocked — Core team Q&A pending | Core team (Pei Ern / Kingsley) → Pow Hwee |
| POCDEX seed database (OTEP-202) | In S4 | Léo |
| Agency-resolution source (D-2) | Unresolved | Pow Hwee |

**New blocker on POCDEX (2026-06-17):** Pow Hwee has asked Core team two questions before OTEP-203 can proceed: (1) what data is expected from POCDEX? (2) how does Core team intend to set up profile data for QA and UAT with POCDEX data? Until Core team responds, OTEP-203 is blocked — which in turn blocks OTEP-127. The dependency chain is now: **Core team answers → Pow Hwee builds OTEP-203 → spike can start.**

The spike cannot start until POCDEX 203/202 close in S4, Core team's Q&A is resolved, and D-2 is confirmed — so realistically mid-S5 at the earliest. It can still be estimated and ticketed in the 26 Jun session, with the start gate and Core team dependency noted explicitly in the AC.

**Current Jira description (sparse):** "What POCDEX fields drive eligibility for each opportunity type? What does the API contract look like? Output: written eligibility matrix + API contract doc." Already estimated at 3 points.

**Suggested ACs for the spike:**

1. Eligibility matrix written: for each opportunity type (STIP, Gig, SJR, Jobs), lists which POCDEX fields are checked (agency, job family, grade, scheme of service, or others), the match logic (exact, prefix, list-membership), and the fallback when a field is null.
2. API contract documented: endpoint, request params, response shape, error codes. Includes the "no eligibility criteria set" case (open = all officers eligible).
3. POCDEX field availability confirmed: for each field used in the matrix, confirmed that POCDEX exposes it in the officer profile API.
4. Architectural decision logged: real-time check vs OTEP-side cache, with justification.
5. Output reviewed by Pow Hwee and signed off before spike closes.

**Estimate check:** 3 points feels right for a spike with a bounded, written output. Push back only if POCDEX field mapping turns out to need a separate workshop with Daryll.

---

## The 7 BO policy questions (open-item #43)

These must be resolved before Amber can design eligibility states and before we can write build story ACs. Target: answered at or before the 26 Jun grooming session.

| # | Question | Why it matters |
|---|----------|----------------|
| 1 | Hide vs show-but-disable for ineligible officers | Changes the entire UX pattern — two different Figma flows |
| 2 | Agency/comms implications of showing restricted postings | If "show-but-disable," do we surface the posting agency? Comms sensitivity. |
| 3 | Does any pilot agency need "Exclude" mode (blocklist vs allowlist)? | Affects the data model — allowlist is simpler; blocklist needs extra logic |
| 4 | Can criteria be stacked? (e.g. agency AND job family) | Determines whether it's a simple lookup or a rule engine |
| 5 | Can audience be edited post-publish? | Affects edit flow and notification triggers |
| 6 | How specific should the ineligibility message be? ("You are not eligible" vs "This is only for [agency] officers") | Legal/comms sensitivity; affects copy writing scope |
| 7 | Should OTEP surface a positive eligibility signal for eligible officers? | Net-new feature if yes — needs its own story |

**Also worth probing:** Do any pilot agencies actually plan to ringfence at launch? If none do, we can park questions 1–7 and treat the spike as a design-only deliverable for now. This is the hypothesis that could collapse the entire grooming agenda.

---

## What to define in the session

**Target outputs from 26 Jun:**

1. **OTEP-127 (spike) — estimated and ticketed.** ACs above are the starting point. Pow Hwee validates POCDEX field availability in the room. Note the start gate in the ticket: "Can start once OTEP-203/202 done and D-2 confirmed."

2. **Officer experience build stories — shells drafted.** BO answers to questions 1, 2, 6 (hide/show, message specificity) determine the AC shape. If BOs are in the room, draft the ACs live. If not, come out with the question list answered and write ACs after.

3. **Agency admin story — confirm R1 or MVP.** MVP assumption is criteria are set via script/config, not a self-service UI. If BOs expect a UI at launch, that's a net-new story that changes the S5/S6 scope. Pin this down in the session.

**What not to try to close in one session:** full AC detail on the build stories. The spike has to run first to confirm the POCDEX contract. Draft the shells, flag the open fields, and sequence the estimation for after the spike closes.

---

## What to bring to the session

**For you to prep:**
- [ ] Send BO questions 1–7 to Jacky / Xian Zhang before 26 Jun — need written answers, not verbal
- [ ] Chase Core team (Pei Ern / Kingsley) to answer Pow Hwee's two POCDEX questions before 26 Jun — this gates OTEP-203 and therefore the spike start date
- [ ] Confirm with Pow Hwee: do any pilot agencies plan to ringfence at launch? (The "do we even need this at MVP?" check)
- [ ] Confirm with Pow Hwee: is MVP admin = script-based config, not a UI? (Scopes out the agency admin story)
- [ ] Review OTEP-127 ACs above with Pow Hwee before the session

**For Amber:**
- [ ] No design work until BO Q1 (hide vs show-disable) is answered — block is real
- [ ] Once Q1 is answered, she needs: the eligibility matrix from the spike and the ineligibility message copy (Q6)

**For the squad in the session:**
- Present OTEP-127 spike with the ACs above
- Get Pow Hwee to validate: POCDEX field availability, API contract feasibility, 3-point estimate
- Confirm spike target: mid-S5 start (dependent on 203/202 landing in S4)
- Log any build story ACs that emerge from BO Q answers as a draft in the parking lot — don't try to estimate them in this session

---

## Risk

**D-9 (BO sign-off) is the single critical path item.** If the 7 questions aren't answered by 26 Jun, S5 ringfencing grooming produces nothing actionable. The spike can be estimated, but the build stories can't be written or sequenced.

If BO answers arrive late: push ringfencing build stories to S6 and use S5 solely to run the spike. Auth stories (OTEP-71 et al.) fill the S5 slot instead — they have a cleaner dependency chain once WOG AD onboarding progresses.

---

*Source: OTEP-127 (Jira), open-items.md #43, sprint-allocation.md S5 table, decisions-log.md D-2, scan-2026-06-17.md D-9, 17_ringfencing_analysis.html (RAW_GIG_AUDIENCE_FILTERS, 669 records, updated 15 Jun 2026)*
