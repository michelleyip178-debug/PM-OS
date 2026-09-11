---
title: "Decision Doc — R1 Opportunities: Type Scope + Delivery Mode"
date: 2026-09-10
week: 2026-W37
owner: Michelle Yip
status: Proposed — for Adrian Ang sign-off before 5 Oct (his absence 5–9 Oct)
format: DACI
related:
  - context-library/prds/r1-seamless-application-draft.md
  - context-library/prds/otg-ingestion-brief.md
  - context-library/decisions/otg-ingestion-decision-log.md (D-016 — one-time port, no sync)
  - outputs/analyses/2026-09-07-W37-r1-opportunity-creation-and-dual-posting.md
  - outputs/analyses/2026-09-07-W37-r1-opportunity-creation-transition-strategy.md
  - outputs/analyses/2026-09-08-W37-r1-opportunity-creation-hypotheses.md
  - outputs/prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md
  - outputs/analyses/2026-09-07-W37-r1-opportunities-raid.md
  - outputs/meeting-notes/2026-09-07-W37-stip-gig-otg-compass-posting-discussion.md
  - outputs/analyses/2026-09-10-W37-r1-opportunities-scope-frame.md
  - outputs/research-synthesis/2026-09-10-W37-r1-admin-portal-discovery.md
---

# Decision Doc — R1 Opportunities: Type Scope + Delivery Mode

## TL;DR

**Decision:** For each opportunity type — STIP, Gig, Internal Job, SJR, Careers@Gov — is it in R1 scope, and how is it delivered: **native** (create + apply + track in CareerCompass), **ingested** (authored elsewhere, discoverable in CC, apply elsewhere or via a stub), or **redirect** (deep-link only)?

**Recommendation:** **Native for STIPs and Gigs** (create via a template-based form builder, apply and track in CC). **Ingested read-only from OTG for Internal Jobs and SJRs** (discoverable in CC, apply on OTG, no write-back). **Redirect for Careers@Gov** (unchanged from MVP). No CC→OTG write-back sync in R1 — it contradicts D-016 and the OTG architecture.

**Impact:** This is the boundary that scopes both Pathfinder R1 workstreams (officer-side apply/track, admin/host-agency portal). Nothing downstream — the strategy doc, the PRD, grooming — can proceed without it. Adrian named it as the thing to confirm before his 5–9 Oct absence.

**Reversibility:** Two-way door on adding types later (R1.x / R4 can bring Internal Jobs and SJRs native). One-way-ish on the form-builder investment — once agencies author STIPs/Gigs in CC, moving them back is disruptive. The native/ingested split is the deliberate, reversible-upward choice.

---

## DACI

| Role | Who |
|---|---|
| **Driver** | Michelle Yip |
| **Approver** | Adrian Ang (primary programme decision authority) — via Jace; confirm before 5 Oct |
| **Contributors** | Li Ting Kway (Designer — adoption/design read; already on record that double-posting is the outcome to avoid), Pow Hwee (Tech Lead — CC→OTG feasibility, OTEP-578 spike, ingestion pipeline load), WD (co-creation partner for the transition; must be in early, not presented to), Megan Yeo / PCG (Internal Jobs + secondment discovery — gates whether those can be more than ingested) |
| **Informed** | Mark / GK (9 Jul SteerCo signed off an "A+B+C floor" — dropping full native creation may need to go back to them), R1 grooming attendees, Rama (R1 dev-capacity timing), Imelda (shared data model) |

---

## Context

### Why we're making this decision

Adrian opened this on 7 Sep (Slack, with Michelle + Li Ting): once R1 adds native apply, how do STIPs and Gigs get posted — double-post on OTG + CC, post on OTG and flow to CC, or post on CC and flow to OTG? He challenged the scope directly: **"what's the purpose of building opportunity posting on CC if opportunities are only posted on OTG?"**

Li Ting's design read: **double-posting is the outcome to avoid** — agencies revert to old tools when the new path is more work.

The load-bearing finding from that thread: **HR already avoid OTG because its opportunity and application forms can't be customised**, so they already double-post across FormSG, Careers@Gov, and OTG. This is confirmed in the [R1 admin-portal synthesis](../research-synthesis/2026-09-10-W37-r1-admin-portal-discovery.md) (Theme 2 — the custom form builder is the stated switch condition) and the [creation & dual-posting analysis](../analyses/2026-09-07-W37-r1-opportunity-creation-and-dual-posting.md).

**Current state:**
- MVP does discovery only. STIPs/Gigs discoverable in CC, apply redirects to FormSG. SJRs and OTEP-132 (OTG redirect apply) already deferred to R1 (confirmed 2026-06-05).
- OTG ingestion pipeline works technically; it's a one-time Excel port for MVP (D-016: no ongoing sync).
- The options analysis is done (Friday's work) — "Option D" (pilot agencies author in CC, OTG-side visibility a deliberate per-role choice) is the current leaning, not confirmed.
- The WD co-creation session is blocked on two prerequisites Adrian named: OTG technical feasibility + consolidated agency requests. Both unstarted.

### Scope

**In scope for this decision:**
- The type × delivery-mode matrix for R1: STIP, Gig, Internal Job, SJR, Careers@Gov.
- Whether R1 includes any CC→OTG write-back.
- Whether R1 native creation is full or template-based (minimal).

**Out of scope (separate):**
- The form-builder v1 field set — sized separately once FormSG forms are pulled (admin synthesis Theme 2).
- The line-manager CV access model and SJR/secondment marker — separate decision doc.
- Employment-lifecycle scope — separate decision doc.
- The exact WD transition plan — that's the co-creation session's output, this decision sets its frame.
- R4 native creation for all agencies — already a committed later deliverable.

### Constraints

- **OTG contract runs to March 2028; full cutover Oct 2027.** Any R1 model must coexist with a live OTG serving ~108,000 non-pilot officers.
- **D-016:** one-time OTG port, no ongoing sync. A CC→OTG write-back contradicts the stated architecture.
- **Native creation for all agencies is R4**, not R1. The 9 Jul SteerCo signed off an "A+B+C floor."
- **Engineering tied up in VAPT remediation through November** ([4 Sep collision analysis](../analyses/2026-09-04-W36-r1-timeline-and-handoff-collision-analysis.md)). R1 build capacity is thin and late.
- **One designer** (Li Ting), shared with CMM discovery through mid-Sep.
- **Adrian away 5–9 Oct** — sign-off before 5 Oct or after 9 Oct.
- **CC→OTG feasibility is unconfirmed** — OTEP-578 spike read pending from Pow Hwee. This decision states the recommendation with that caveat and does not depend on write-back being possible.

---

## Options Considered

### Option 1: Native for all types (full apply/track for STIP, Gig, Internal Job, SJR)

**One-sentence summary:** CareerCompass becomes the authoring and application system for every opportunity type in R1; OTG is bypassed for pilot agencies.

**Pros:**
- **Cleanest officer experience** — one place, no redirects, for everything.
- **Strongest answer to Adrian's challenge** — R1 unambiguously owns creation.
- **Kills double-posting entirely** for pilot agencies.

**Cons:**
- **Rebuilds ~5 complex application forms natively**, including SJR's cycle/nomination flow — a major integration lift per `r1-seamless-application-draft.md`. Not feasible with VAPT-constrained engineering through November.
- **SJR is a coordinated WD program**, not a simple posting — native SJR apply means rebuilding nomination, delta analysis, cycle management. That's an epic, not an R1 line item.
- **Internal Jobs discovery with PCG (Megan Yeo) hasn't landed** — building native before discovery is backwards.
- **Contradicts the R4 boundary** the SteerCo signed off.

**Cost:** Multi-quarter. Not deliverable in R1's window.

**Assumption:** Engineering capacity frees up and PCG discovery completes in time. Neither is true.

### Option 2 (RECOMMENDED): Native STIP + Gig; ingested read-only Internal Job + SJR; redirect Careers@Gov

**One-sentence summary:** Pilot agencies author and manage STIPs and Gigs entirely in CC with a template-based form builder; Internal Jobs and SJRs are ingested from OTG for discovery only (apply on OTG); Careers@Gov stays a deep-link.

| Type | R1 delivery | Authoring system | Discover in CC | Apply in CC |
|---|---|---|---|---|
| STIP | **Native** | CareerCompass (template form builder) | Yes | Yes + track |
| Gig | **Native** | CareerCompass (template form builder) | Yes | Yes + track |
| Internal Job | **Ingested read-only** | OTG | Yes | No — apply on OTG (link stub) |
| SJR | **Ingested read-only** | OTG / WD program | Yes | No — apply on OTG (link stub) |
| Careers@Gov | **Redirect** | Careers@Gov | Listing label only | No — deep-link |

- No CC→OTG write-back. OTG-side visibility for a CC-authored STIP/Gig is a deliberate, separate, per-role choice by the agency (post it on OTG themselves), not a default sync.
- "Native creation" = **template-based / minimal**, not full free-form. The form builder covers custom application questions (the actual pain) without rebuilding OTG's entire authoring surface.

**Pros:**
- **Matches the real problem.** The pain is form customisation for STIPs/Gigs (Li Ting's finding, admin synthesis Theme 2). Native STIP/Gig with a form builder solves exactly that.
- **Feasible in R1's window.** Two native types with template forms is a scoped build; ingestion for the other two reuses the MVP pipeline.
- **Respects D-016 and the OTG architecture** — no write-back sync.
- **Respects the R4 boundary** — full native creation for all types stays R4.
- **Doesn't block on PCG discovery** — Internal Jobs/SJRs ingested now, can go native in R1.x/R4 once Megan Yeo's discovery lands.
- **This is the "Option D" shape** the Friday analysis already worked through.

**Cons:**
- **Internal Job / SJR applicants still bounce to OTG** — a redirect for those types. Mitigation: link stub ("apply on OTG") is cleaner than manual re-entry; these types are lower pilot volume (OTG data: SJR/IJ are a minority of the 166 pilot postings).
- **Two authoring worlds for a pilot agency** — STIP/Gig in CC, IJ/SJR in OTG. Some cognitive overhead. Mitigation: discovery is unified in CC regardless; only the create path differs by type.
- **"Template-based, not full" creation may need to go back to Mark/GK** given the 9 Jul "A+B+C floor" sign-off. Flagged for R1 grooming.

**Cost:** STIP/Gig native apply + template form builder + status/track = the core R1 build. Ingestion for IJ/SJR = pipeline reuse + a listing stub. Fits the R1 window if capacity frees post-VAPT (~early Oct — confirm with Rama).

**Assumption:** Template-based STIP/Gig creation satisfies the SteerCo floor, or Mark/GK accept the reduction. And engineering capacity frees early Oct.

### Option 3: Discovery-only for all types in R1; defer all native apply to R4

**One-sentence summary:** R1 adds no native apply; it improves discovery (filters, faceted search, competency match) and everything still applies via redirect.

**Pros:**
- **Smallest build** — fits even a badly capacity-constrained R1.
- **Zero OTG-transition risk** — nothing changes in how agencies post or how officers apply.
- **No SteerCo re-litigation.**

**Cons:**
- **R1 becomes "MVP with better filters."** The `r1-seamless-application-draft.md` problem statement — "if officers cannot seamlessly apply and track in one place, the platform remains just a job board" — goes unaddressed for another release.
- **Doesn't answer Adrian's challenge** — it concedes R1 owns nothing on creation.
- **Leaves the form-customisation pain (the actual adoption blocker) untouched** — agencies keep double-posting.

**Cost:** Low.

**Assumption:** It's acceptable for R1 to not move the core talent-mobility metric. Weak — that's the point of R1.

---

## Decision Criteria

| Criterion | Weight | Opt 1 Native-all | Opt 2 Native STIP/Gig + ingest | Opt 3 Discovery-only |
|---|---|---|---|---|
| Feasible in R1 window (VAPT-constrained eng) | High | 1/10 | 7/10 | 9/10 |
| Solves the real adoption blocker (form customisation) | High | 9/10 | 8/10 | 2/10 |
| Answers "why does R1 own creation" | High | 9/10 | 7/10 | 2/10 |
| Respects D-016 + OTG architecture | High | 5/10 | 9/10 | 10/10 |
| Respects R4 boundary / avoids SteerCo re-litigation | Medium | 3/10 | 6/10 | 9/10 |
| Doesn't block on PCG discovery | Medium | 3/10 | 9/10 | 9/10 |
| Officer experience (fewest redirects) | Medium | 9/10 | 6/10 | 3/10 |
| **Weighted total** | | **~5.0** | **~7.5** | **~6.1** |

---

## Recommendation: Option 2

### The decision
**R1 Opportunities delivers native create + apply + track for STIPs and Gigs** (via a template-based form builder), **ingests Internal Jobs and SJRs read-only from OTG** for discovery (apply on OTG via a link stub), and **keeps Careers@Gov as a redirect.** No CC→OTG write-back sync in R1.

### Rationale

**Why this option wins:**
1. **It targets the actual blocker.** Every source — Li Ting's design read, the 7 Sep thread, the admin synthesis (Theme 2), the creation/dual-posting analysis — says agencies avoid OTG because they can't customise forms, so they double-post. Native STIP/Gig with a form builder removes that reason. Native SJR/IJ apply does not add proportionate value (those types aren't where the form-customisation pain concentrates) and costs far more.
2. **It's the only option that fits the R1 window.** Engineering is on VAPT remediation through November. Two native types with template forms is buildable; five native types including SJR's program flow is not.
3. **It stays inside the architecture and the roadmap.** D-016 says no ongoing sync — Option 2 has none. R4 owns full native creation — Option 2 keeps it there. Option 1 breaks both.
4. **It doesn't wait on discovery that hasn't happened.** PCG/Megan Yeo discovery on Internal Jobs and secondments is incomplete. Option 2 ingests them now and leaves the native-vs-ingested door open for R1.x/R4 once that discovery lands.

**Why the alternatives fall short:**
- **Option 1 (native-all):** not feasible with current engineering capacity, rebuilds SJR's coordinated-program flow as if it were a form, and jumps ahead of PCG discovery.
- **Option 3 (discovery-only):** concedes R1 owns nothing on apply, leaves the form-customisation blocker untouched, and makes R1 "MVP with filters" — it doesn't move the talent-mobility outcome that justifies the release.

**Key trade-offs we're accepting:**
- We're trading **a fully unified apply experience** for **a feasible, focused R1** — Internal Job and SJR applicants still redirect to OTG. Acceptable because those types are lower pilot volume and aren't where the pain concentrates.
- We're trading **"R1 owns all creation"** for **"R1 owns the creation that matters"** — template-based STIP/Gig, not full free-form authoring. This is what turns minimal creation into an R1 unlock rather than an R4 nicety.

### Confidence: Medium-High (75%)

**Would increase to High if:**
- Pow Hwee's OTEP-578 spike confirms OTG exposes Internal Jobs/SJRs in an ingestible feed (the ingest half of the recommendation depends on this).
- Mark/GK confirm template-based (not full) native creation satisfies the 9 Jul "A+B+C floor," or Adrian judges it doesn't need to go back to them.
- Rama confirms R1 dev capacity frees ~early Oct.

### What if we're wrong?

**How we'll know:**
- If, in the WD co-creation session, WD says ingesting Internal Jobs/SJRs from OTG isn't workable (data quality, feed format) — the ingest half fails and those types fall to "redirect / listing stub only."
- If pilot agencies in R1 don't adopt native STIP/Gig creation (keep using FormSG) — the form builder v1 didn't cover their real fields. Leading indicator: form-builder usage rate on new STIP/Gig postings in the first month.

**Pivot plan:**
- If ingest fails: Internal Jobs/SJRs become a deep-link listing stub (title + "view on OTG"), no worse than today.
- If native STIP/Gig creation isn't adopted: fix the form-builder field set (fast-follow), don't abandon the model — the alternative is conceding to permanent double-posting.

### What this unlocks

- **Answers Adrian's scope challenge** with a defensible line: R1 owns STIP/Gig creation because that's where the form-customisation pain is.
- **Gives the WD co-creation session a frame** instead of an open question — the session designs the transition for STIP/Gig authoring moving to CC, not "should it."
- **Unblocks the R1 strategy doc and PRD** — both were waiting on this boundary.
- **Sets up R1.x/R4** cleanly — Internal Jobs and SJRs go native later, once PCG discovery and engineering capacity allow.

---

## Stakeholder Input

### To consult before sign-off

| Stakeholder | Input needed | Channel | Status |
|---|---|---|---|
| **Pow Hwee** | OTEP-578 spike: does OTG expose Internal Jobs/SJRs in an ingestible feed? Is CC→OTG posting technically possible (informs the "no write-back" line)? | Sprint 9 sync | Pending |
| **Li Ting** | Confirm the native-STIP/Gig + ingest-the-rest shape matches her adoption read; design load for a template form builder | Direct | On record supporting the direction (7 Sep) |
| **WD** | Is ingesting Internal Jobs/SJRs from OTG workable from their side? Frame for the co-creation session | Co-creation session (week of 22 or 29 Sep) | Not yet scheduled |
| **Megan Yeo / PCG** | Internal Jobs + secondment discovery — does anything there change the "ingest for now" call? | PCG discovery | In progress |
| **Adrian Ang** | Approve the matrix; decide whether template-vs-full creation needs to go back to Mark/GK | Via Jace, before 5 Oct | This doc |
| **Mark / GK** | If Adrian judges it necessary: does template-based native creation satisfy the 9 Jul "A+B+C floor"? | Via Adrian | Conditional |

### Anticipated concerns

**Concern (Adrian):** "If STIPs/Gigs are still also posted on OTG, why build creation on CC at all?"

**Response:** They won't be, for pilot agencies. Option 2 moves STIP/Gig authoring to CC for the 6 pilot agencies. OTG-side posting becomes a deliberate per-role choice (to reach non-pilot officers), not a default. The form builder is the reason agencies will actually use CC instead of FormSG — that's the unlock.

**Concern (WD / business):** "Ingesting SJRs read-only means officers still can't apply for a rotation in CC."

**Response:** Correct, and that's the right R1 call. SJR is a coordinated WD program with nomination and cycle logic — rebuilding its apply flow natively is an epic, not an R1 line. Ingest for discovery now; native SJR is R1.x/R4 after proper discovery.

**Concern (SteerCo / Mark):** "The 9 Jul floor was A+B+C native creation."

**Response:** Option 2 delivers native creation for STIPs and Gigs — template-based rather than full free-form. If that reduction crosses the SteerCo floor, it goes back to Mark/GK before grooming. Flagging it now rather than discovering it at grooming.

### Unresolved disagreements
None recorded. Capture after the Pow Hwee spike read and the WD session.

---

## Success Metrics

**How we'll know the scope call was right:**
- R1 Opportunities PRD is groomed without the type-scope question re-opening (leading indicator: not carried for re-discussion).
- Form-builder usage rate on new STIP/Gig postings by pilot agencies ≥ 60% in the first month post-R1 (i.e. agencies use CC creation, not FormSG).
- Guardrail: double-posting rate (same STIP/Gig on CC *and* a fresh FormSG form) trends down, not up, in the pilot.

**How we'll know the ingest half was right:**
- Internal Jobs + SJRs appear in CC discovery with acceptable data quality (reuse the OTG ingestion pass-rate bar: aim >60% of records ingest clean).
- Officer complaints about "found it in CC, had to apply somewhere else" for IJ/SJR stay low.

**Leading indicators:**
- **2 weeks:** Pow Hwee spike read in; WD session scheduled.
- **4 weeks:** WD co-creation session held; transition plan drafted; matrix folded into the R1 PRD.

---

## Implementation Plan

### Immediate (this week)
1. Get the OTEP-578 spike read from Pow Hwee at the Sprint 9 sync — OTG ingestible feed for IJ/SJR + CC→OTG feasibility — @Michelle.
2. Send this doc to Adrian via Jace with a "confirm or correct before 5 Oct" ask — @Michelle.
3. Confirm with Li Ting the template-form-builder design load — @Michelle.
4. Confirm with Rama the R1 dev-capacity start date (post-VAPT) — @Michelle.

### Short-term (next 2 weeks)
1. Pull 15–20 real FormSG / Careers@Gov workaround forms from PSD + ESG; categorise recurring custom fields → the "consolidated agency requests" artefact + form-builder v1 field scope — @Michelle.
2. Write the WD co-creation session context brief (feasibility findings + consolidated requests + the approved matrix) — @Michelle.
3. Schedule the WD co-creation session for the week of 22 or 29 Sep (before/around Adrian's return) — @Michelle.
4. If Adrian judges template-vs-full creation needs SteerCo input, prep the Mark/GK ask — @Michelle.

### Medium-term (next month)
1. Hold the WD co-creation session; draft the STIP/Gig authoring transition plan — @Michelle + WD + Li Ting + Pow Hwee.
2. Fold the matrix + transition plan into the [R1 opportunity-scope planning-review PRD](../prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md) and the [R1 Opportunities RAID](../analyses/2026-09-07-W37-r1-opportunities-raid.md).
3. `/write-prod-strategy` for R1 Opportunities using this matrix as the scope spine.

### Dependencies
- **Blocker for the ingest half:** OTEP-578 spike confirms OTG exposes IJ/SJR in an ingestible feed.
- **Blocker for scheduling the WD session:** consolidated agency-requests artefact (form pull).
- **Parallel:** the admin-portal blocking decisions (line-manager access, SJR/secondment marker) — separate doc, run alongside.

---

## Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation | Owner |
|---|---|---|---|---|
| OTEP-578 spike shows OTG has no ingestible IJ/SJR feed | Medium — ingest half fails | Medium | Fall back to deep-link listing stub for IJ/SJR (no worse than today); decision recommendation still holds for STIP/Gig | Michelle / Pow Hwee |
| Template-based creation crosses the SteerCo "A+B+C floor" | Medium — re-litigation, delay | Medium | Flag to Adrian now; prep the Mark/GK ask; frame as "native creation delivered, scoped to the types with real pain" | Michelle → Adrian |
| Adrian doesn't confirm before 5 Oct | High — R1 PRD + grooming slip | Medium | Send by 11 Sep with a hard "by 5 Oct" ask; if no response by 1 Oct, escalate through Jace; fallback confirm 10–14 Oct compresses grooming | Michelle |
| Engineering capacity doesn't free post-VAPT as assumed | High — R1 build slips regardless of scope | Medium–High | Confirm with Rama this week; if capacity is later, the scope call still holds — it just phases (STIP native first, Gig second) | Michelle / Rama |
| WD resists STIP/Gig authoring moving off OTG | Medium — transition friction | Low–Medium | The co-creation session exists for exactly this — WD in early, co-designing the transition, not presented a fait accompli (Adrian's explicit ask) | Michelle |
| Pilot agencies don't adopt CC creation, keep using FormSG | Medium — R1 value not realised | Medium | Form-builder v1 field set driven by the real FormSG-form pull; usage-rate metric watched from week 1; fast-follow field additions | Michelle |
| CMM competency-ID model lands mid-R1 and shifts the data model | Low–Medium | Low–Medium | Matrix is expressed by type + delivery mode, independent of competency-ID source; survives a CMM change | Michelle / Pow Hwee |

---

## Decision Log

- **Proposed:** 2026-09-10 by Michelle Yip
- **Framing discussion:** 2026-09-07 (Slack — Adrian, Michelle, Li Ting) — see [meeting notes](../meeting-notes/2026-09-07-W37-stip-gig-otg-compass-posting-discussion.md)
- **Pow Hwee spike read:** [date]
- **Approved:** [date] by Adrian Ang
- **WD co-creation session:** [date]
- **Locked at R1 grooming:** [date]
- **Reviewed:** [after R1 ships]

---

## Appendix

### The full options analysis this builds on
- [R1 opportunity creation & dual-posting](../analyses/2026-09-07-W37-r1-opportunity-creation-and-dual-posting.md) — the options (A–D)
- [R1 opportunity creation transition strategy](../analyses/2026-09-07-W37-r1-opportunity-creation-transition-strategy.md)
- [R1 opportunity creation hypotheses register](../analyses/2026-09-08-W37-r1-opportunity-creation-hypotheses.md)
- [R1 opportunity-scope planning-review PRD](../prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md)
- [R1 Opportunities RAID](../analyses/2026-09-07-W37-r1-opportunities-raid.md)

### Hard constraints carried into every version
| Constraint | Source |
|---|---|
| OTG contract to March 2028; full cutover Oct 2027; ~108k non-pilot officers stay on OTG | 7 Sep meeting notes, "Context for Future Reference" |
| D-016: one-time OTG port, no ongoing sync — no CC→OTG write-back | `otg-ingestion-decision-log.md` |
| Native creation for all agencies is R4, not R1 | 9 Jul SteerCo "A+B+C floor" |
| Engineering on VAPT remediation through November | 4 Sep collision analysis |
| Adrian away 5–9 Oct | Calendar |

### The type × delivery-mode matrix (recommended)
| Type | R1 delivery | Authoring | Discover in CC | Apply in CC | Later (R1.x / R4) |
|---|---|---|---|---|---|
| STIP | Native | CC (template form builder) | Yes | Yes + track | — |
| Gig | Native | CC (template form builder) | Yes | Yes + track | — |
| Internal Job | Ingested read-only | OTG | Yes | No (link stub) | Native, pending PCG discovery |
| SJR | Ingested read-only | OTG / WD program | Yes | No (link stub) | Native apply, R4 (program flow) |
| Careers@Gov | Redirect | Careers@Gov | Listing label | No (deep-link) | Unchanged |

### FAQ

**Q: Why not just wait for the WD co-creation session to decide this?**
A: The session needs a frame to co-design against. "Should CC own STIP/Gig creation?" is a Product call; "how do we transition STIP/Gig authoring to CC" is what WD co-designs. This doc makes the first call so the session can do the second.

**Q: Doesn't ingesting SJRs read-only just recreate the MVP redirect problem?**
A: For SJRs specifically, yes — and that's acceptable. SJR is a coordinated program with nomination logic; its native apply flow is an R4-scale build. Discovery in CC + apply on OTG is the right R1 handling for that one type.

**Q: What's the difference between this and the employment-lifecycle decision doc?**
A: That one is officer-profile behaviour when POCDEX data changes. This one is which opportunity types R1 handles and how. Different surfaces; both feed the same R1 PRD.
