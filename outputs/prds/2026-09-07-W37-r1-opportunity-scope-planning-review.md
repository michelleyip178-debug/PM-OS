# R1 Opportunity Scope — Internal Jobs, Secondments, Rotations

**Stage:** Planning Review

**Last Updated:** 2026-09-07

**Owner:** Michelle Yip

**Status:** Draft

---

## Hypothesis

**Problem.** CareerCompass MVP covers two opportunity types: STIPs and Gigs. The agencies R1 onboards (WSG, PA, MSF) run internal mobility as a core function, and their officers move mostly through internal jobs, secondments, and rotations, not short immersions. If R1 ships to these agencies with only STIPs and Gigs, the platform doesn't cover the opportunities those officers actually apply for, and "CareerCompass is where I find my next role" stays false for the segment R1 is meant to serve.

**If we** bring internal jobs and secondments into CareerCompass as first-class opportunity types (discoverable, filterable, applicable),
**then** officers at WSG/PA/MSF get a single place to find internal mobility that today is spread across OTG, agency intranets, and word of mouth,
**because** the MVP unified-listing hypothesis (consolidating fragmented opportunities lifts discovery and mobility) holds for these types too, and these agencies have the highest concentration of them.

**Supporting evidence:**
- Rollout rationale (senior-mgmt implementation email, Jun 2026): "R1 = WSG/PA/MSF, these agencies run the platform as an internal marketplace."
- OTG operational review (2 Sep): internal jobs and secondments follow distinct administrative rules, approvals, and security classifications, they are not STIPs with a different label.
- R1 discovery huddle (4 Sep): no operational contact yet with the people running civil-service internal jobs and secondments. Requirements for this half of the opportunity spectrum do not exist.

---

## Strategic Fit

**Why this? Why now?**

R1's headline is Seamless Application (native apply + status tracking, Epics A–D). But an apply flow needs something to apply to. This PRD scopes the other half: which opportunity types R1 covers, and how they get into the platform. It's the input to R1 grooming (September) and directly gates the OTEP-578 ingestion spike now sitting in Sprint 9.

The MVP proved the discovery mechanism for STIPs/Gigs. R1 extends it to the opportunity types that matter for internal mobility. This ladders to the North Star (officers completing development actions) because for WSG/PA/MSF officers, the development action is usually an internal move, not an immersion.

**Impact sizing (rough, pre-discovery):**

| Assumption | Confidence | Risk | De-risking action |
|---|---|---|---|
| Internal jobs/secondments are the dominant opportunity type for WSG/PA/MSF officers | Medium | If wrong, this is lower priority than Epic B/C | Confirm volume with Megan Yeo (PCG) in discovery |
| These types can reuse the MVP listing/detail/filter surface with modest changes | Low | Distinct approval and classification rules may need new fields, states, visibility logic | Discovery + a design spike before grooming |
| "Rotations" is a distinct type, not a sub-case of secondment | Low | Scoping three types when there are two wastes effort | Resolve in discovery, one line |

**Alternatives considered:**
- **Native creation only (full Epic A for all types).** Rejected as the R1 default because it requires validated workflows for internal jobs/secondments that don't exist yet, and design capacity to build three creation surfaces that isn't available before mid-October (single designer, shared with CMM).
- **Ingestion only (pull internal jobs from OTG/C@G, no native creation).** Rejected as a clean win. It looks cheaper but adds dual-posting for HR teams, redirect/login friction for officers applying to external links, and its own engineering spikes to define ingestion schemas and auth contracts (per the 4 Sep collision analysis). It's a fallback, not a shortcut.
- **Defer internal jobs/secondments to R2.** Live option. Keeps R1 to STIPs/Gigs native, ships on the earliest timeline, but means R1 launches to internal-marketplace agencies without covering their main use case.

---

## Non-Goals

- **Opportunity creation UX for internal jobs/secondments.** Whether these are created natively (Epic A) or ingested is the core open question here; the creation *interface* design is out of scope for this PRD and belongs in the Epic A spec once the type scope is settled.
- **SJR (Short-Term Job Role) creation.** Excluded, consistent with MVP ingestion scope, unless Mark explicitly pulls it in.
- **Ringfencing / eligibility rule authoring** for these types. Stays in OTG, deferred to R1.5 with the rest of criteria authoring.
- **C@G-sourced internal jobs.** C@G opportunities continue to redirect externally as in MVP; not changed here.

**Trade-off:** By not settling native-vs-ingestion in this PRD, grooming can't fully size Epic A. That's deliberate, the discovery to make that call defensibly hasn't happened, and a guessed answer causes more rework than a two-week delay.

---

## Success Metrics

**Primary metric:** Share of R1-cohort applications that go to internal jobs / secondments (vs. STIPs/Gigs).
- Current: 0 (types don't exist in-platform)
- Target: internal jobs + secondments are ≥40% of R1-cohort application volume within 3 months of R1 launch
- Timeline: Q2 2027, post-R1 launch

**Rationale:** if R1 adds these types and they stay a rounding error in application volume, the hypothesis (these are the dominant type for this segment) was wrong and R2 type-expansion priorities should change.

**Guardrail metrics (must not harm):**
- MVP STIP/Gig discovery funnel (listing → detail → apply): adding types must not degrade the existing experience, e.g. filter clutter, slower listing.
- Officer-reported clarity on opportunity type: ≥3.5/5 that officers understand what each type means and whether they're eligible.

**Kill criteria:** If discovery with scheme administrators shows internal jobs/secondments can't be represented without a materially new data model and state machine (not modest additions to the MVP surface), pause and route these types to R2, ship R1 with STIPs/Gigs native + internal jobs as basic external links.

---

## Rollout Plan

**Approach:** Phased, tied to R1's overall rollout to WSG/PA/MSF.

**Phase 0 — Discovery (Sep–Oct 2026):** Scheme-administrator discovery with Megan Yeo (PCG) and equivalents at WSG/PA/MSF. Output: validated requirements for internal jobs and secondments, and a native-vs-ingestion recommendation with engineering input (OTEP-578 spike).

**Phase 1 — Type scope locked at R1 grooming:** Decide which types are in R1 and their sourcing mechanism. Passing criteria: discovery complete, spike done, Adrian's sign-off on the scope/sourcing call.

**Phase 2 — Build alongside Epics A–C:** Sequenced against R1's real engineering availability (mid-November per the collision analysis, not October).

**Rollback:** If a type's requirements prove heavier than R1 can absorb, drop it to external-link-only for R1 and move native support to R2. This is a per-type decision, not all-or-nothing.

---

## Solution Overview

**In scope to decide:**
1. **Type list.** Internal jobs, secondments, rotations, which are in R1, which defer to R2.
2. **Sourcing per type.** Native creation (Epic A), ingestion from OTG/C@G, or external-link-only.
3. **Surface changes.** What the MVP listing/detail/filter needs to represent these types honestly (new fields, eligibility display, approval-state visibility).

**User flow (officer side, unchanged in shape from MVP):**
1. Officer opens the listing, sees internal jobs and secondments alongside STIPs/Gigs.
2. Filters by type; understands from the detail page what the opportunity is and whether they're eligible.
3. Applies, via the R1 native apply flow (Epic B) where the type supports it, or an external link where it doesn't.

**Edge cases to resolve in discovery:**
- An internal job that requires supervisor endorsement before an officer can apply, where does that gate live?
- A secondment with a security classification that limits who can even see the posting.
- A rotation that's really an internal reassignment with no "application" in the normal sense.

**Design dependency:** These types need a design spike before Epic A grooming. Single designer (Liting) is shared with CMM through mid-September; realistic design readiness is mid-to-late October.

---

## Risks and Recovery

| Risk | Detection | Fallback | Owner |
|---|---|---|---|
| Discovery with Megan Yeo slips, no validated requirements before R1 grooming | Discovery not scheduled by end of W38 | Groom R1 with STIPs/Gigs native; internal jobs as external links; revisit at R1.5 | Michelle |
| Ingestion fallback chosen, then its own spikes balloon (schema, auth, dual-posting) | OTEP-578 spike surfaces >1 sprint of integration work | External-link-only for R1; native or ingestion in R2 | Pow Hwee / Michelle |
| Internal jobs/secondments need a new data model, not modest MVP additions | Design spike output | Kill criteria: route to R2 | Michelle |
| Adding types clutters the MVP listing and hurts STIP/Gig discovery | Guardrail funnel drops post-R1 | Type filter defaults, progressive disclosure on the listing | Design |

---

## Open Questions

- [ ] Which opportunity types are in R1 vs. deferred to R2? — @Adrian (needs discovery input first)
- [ ] Native creation, ingestion, or external-link per type? — @Adrian @PowHwee (gated on OTEP-578 spike)
- [ ] Is "rotations" a distinct type or a sub-case of secondment? — @MeganYeo (discovery)
- [ ] Who runs internal jobs / secondments operationally at WSG, PA, MSF, and who do we talk to? — @MeganYeo (PCG has been identified as the entry point)
- [ ] Do internal jobs/secondments have approval gates before an officer can apply, and where do those live in the flow? — discovery
- [ ] Does this scope get a second designer, or does R1 timeline move to fit one? — @Adrian (this is Option B vs C from the 4 Sep collision analysis)

---

## Appendix

**Related docs:**
- [R1 timeline & handoff collision analysis](../analyses/2026-09-04-W36-r1-timeline-and-handoff-collision-analysis.md) — the design-capacity and engineering-availability constraints, and Options A/B/C for Adrian
- [R1 Seamless Application PRD (2026-07-07)](2026-07-07-W28-careercompass-r1-prd.md) — Epics A–D, the apply-flow half of R1 (architecture now stale, Workable hybrid since 5 Aug)
- [R1 brainstorm running doc](../decisions/2026-09-01-W36-r1-brainstorm-running-doc.md) — bi-weekly session where the type-scope and ingestion-friction questions are being worked
- [Phased rollout reference](../roadmaps/2026-06-12-W25-careercompass-phased-rollout.md) — R1 = WSG/PA/MSF, R2 = POLITEs/AGC (competency-based course matching)
- Jira: OTEP-578 `[SPIKE] OTG ingestion - Jobs (Secondments, Internal Jobs, Rotations)` — Sprint 9, Backlog, unassigned

**Changelog:**
- 2026-09-07: First draft, Planning Review stage. Split out from the R1 Seamless Application PRD to give the opportunity-type scope question its own home ahead of R1 grooming.
