---
date: 2026-09-07
week: 2026-W37
type: options-analysis
scope: R1 Opportunities — opportunity creation, form customisation, and dual-posting
owner: Michelle Yip
status: working draft — for the R1 brainstorm and an Adrian brief
sources:
  - outputs/prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md
  - outputs/analyses/2026-09-07-W37-r1-opportunities-raid.md
  - outputs/analyses/2026-09-04-W36-r1-timeline-and-handoff-collision-analysis.md
  - outputs/prds/2026-07-07-W28-careercompass-r1-prd.md
  - context-library/prds/opportunities-listing.md
  - outputs/roadmaps/2026-06-12-W25-careercompass-phased-rollout.md
---

# R1 Opportunities — Creation, Form Customisation, and Dual-Posting

One document pulling together the creation-vs-ingestion decision, the form-customisation finding that reframes it, the dual-posting options, and what a design review would add. For the R1 brainstorm and a short brief to Adrian.

---

## 1. The question

R1 adds native apply, pre-fill, and status tracking. It also needs opportunities to apply *to*. That raises three linked questions:

1. **Where are opportunities created** — natively in CareerCompass, or still in OTG with Compass ingesting them?
2. **If some are created in each**, how do we avoid the same role being posted twice (dual-posting)?
3. **What does a customisable application form need**, and does that change the answer to (1)?

---

## 2. The context that constrains the answer

| Fact | Source | Why it matters |
|---|---|---|
| MVP already ingests from OTG — daily export → OTEP schema | opportunities-listing PRD | Compass has never been the creation point. STIPs/Gigs are created in OTG today and flow in. |
| MVP apply is FormSG redirect or OTG redirect | opportunities-listing PRD | There is no native creation *or* native apply yet. R1 builds both. |
| Native "opportunity creation & posting (agency-owner side)" is an **R4** deliverable (Oct 2027) | rollout roadmap | R4 is timed to the OTG cutover. Building full creation in R1 = building the R4 feature 14 months early. |
| OTG contract expires **March 2028**; full cutover targeted Oct 2027 | rollout roadmap | OTG stays authoritative for ~108,000 non-pilot officers until then. Anything R1 builds has to coexist with a live OTG. |
| **D-016: one-time OTG port, no ongoing sync** | rollout roadmap | The stated architecture direction is that OTG→Compass is a sunset path, not permanent plumbing. A write-back sync contradicts this. |
| R1 pilot cohort = **PSD, ESG, MDDI, URA, MCCY, CAAS** (~5,400 officers) | R1 PRD | These are the MVP agencies, not the internal-marketplace-heavy ones (WSG/PA/MSF come later). Internal-job volume in this cohort is modest. |
| **Agencies are avoiding OTG because its application form can't be customised** | Discovery signal, W37 | This is the finding that reframes everything below. OTG is already half-abandoned for roles needing custom questions — agencies use standalone FormSG links instead, losing the audience. |
| R1 has a single designer (Liting) shared with CMM through mid-Sep; engineering is tied up in VAPT remediation through November | 4 Sep collision analysis | Whatever R1 scopes has to fit a constrained design and build window. |

---

## 3. The reframe: this is a form problem, not a posting-tool problem

Agencies don't primarily want "a posting tool in Compass." They want **per-opportunity custom application forms**, and no system gives them that today:

- OTG has a rigid form → agencies route around it.
- Standalone FormSG gives custom forms → but no discovery, no audience, back to fragmentation (the exact problem the MVP listing PRD names).

So the real R1 question is: **does R1's native apply flow support customisable forms, or is it also fixed?**

- If **fixed** → R1 rebuilds OTG's limitation with a nicer UI. Agencies keep using FormSG. Compass still doesn't get their postings. R1's apply flow is worth much less.
- If **customisable** → Compass becomes the one place with both a real audience and the form agencies need. Creation-in-Compass stops being an R4 nicety and becomes the R1 unlock — because you can't offer a custom form without a place to define it.

**Implication:** a minimal creation capability is likely R1-critical, but "minimal" needs a tight definition (Section 6).

---

## 4. Creation options

### Option A — Everything stays in OTG, Compass ingests (read-only)

HR creates all types in OTG. Compass ingests. R1 adds native apply + pre-fill + status tracking on top of ingested postings.

| Pros | Cons |
|---|---|
| Zero workflow change for pilot HR — already how MVP works | **Inherits the reason agencies avoid OTG.** Ingesting more diligently from a system people have worked around fixes nothing. |
| One canonical listing per role, no dedup, no drift | R1's apply flow stays fixed-form → agencies keep using FormSG → their postings still don't reach Compass |
| Non-pilot officers fully served (OTG stays authoritative) | Compass doesn't own creation → "why build posting in Compass" answer is "we don't, it's R4" → R1 reads as thin |
| Matches D-016 and the R4 roadmap; no throwaway build | Depends on OTG exposing internal jobs/secondments/rotations in an ingestible feed (OTEP-578 spike) |
| Smallest, fastest R1 | Daily ingestion latency may be too slow for internal jobs (a closed role showing as open) |

**Verdict:** was the recommendation before the form-customisation finding. Now weaker — it doesn't solve the actual unmet need.

### Option B — Everything created in CareerCompass, sync back to OTG

HR creates in Compass (with custom forms). A write-back sync pushes to OTG so non-pilot officers see the role.

| Pros | Cons |
|---|---|
| Compass is the single creation point — the clean end-state | Requires a write-back OTG integration: field mapping, failure handling, conflict resolution, authority rules. Comparable to the CSC/DLE SSO work that ate weeks and surfaced infra risk. |
| Solves form customisation directly | Requires agency-admin auth (RAID R5) — unowned since June, hard gate |
| No dual entry, no drift (if the sync holds) | Requires native creation UX for every in-scope type before R1 ships |
| If R1 goes well, you're already on the R4 architecture | HR across 6 agencies switches tools mid-programme, with retraining |
| | Any sync failure = a role invisible to ~108,000 OTG officers. High-stakes reliability. |
| | You build a Compass→OTG sync in R1 and delete it at R4. Pure transition cost. Contradicts D-016. |
| | Biggest scope, slowest path — against a timeline already colliding with VAPT and design capacity |

**Verdict:** right *end state*, wrong time. This is essentially R4 brought forward 14 months, minus the reason to do it (OTG isn't gone yet).

### Option C — Split by opportunity type

STIPs/Gigs created natively in Compass; internal jobs/secondments ingested read-only from OTG.

| Pros | Cons |
|---|---|
| Native creation for the simple, high-volume types where it's easiest | Compass now holds native AND ingested postings in the same listing → you need the source tag + dedup discipline anyway |
| Internal jobs (heavy approval/classification rules) stay in the system built for them | Internal jobs get a worse apply experience than STIPs/Gigs in R1 — inconsistent |
| Smaller than full native creation | Doesn't address why agencies avoid OTG *for internal jobs too* (they also want custom questions there) |

**Verdict:** partial. Reasonable fallback if discovery shows internal-job creation genuinely can't be built in the R1 window.

### Option D — Split by agency: pilot agencies post in Compass, rest in OTG

The 6 pilot agencies create in Compass (with custom forms). The other ~24 stay in OTG. Compass ingests OTG read-only.

| Pros | Cons |
|---|---|
| Compass owns creation for the pilot cohort — validates the creation UX with real users before R4 | **4a (no sync back):** pilot-agency roles invisible to ~108,000 OTG officers. For cross-government STIPs that's a real loss — MVP data shows STIPs run 6,411 sign-ups vs 4,056 vacancies, much of it cross-agency. |
| Clean system-of-record rule: owner agency decides where it's created | **4b (sync back):** rebuilds Option B's write-back sync, just scoped to 6 agencies. Same engineering, same throwaway-at-R4, same D-016 conflict. Smaller denominator ≠ cheaper to build. |
| No double entry — each agency has one place to post | Two creation systems run in parallel for 14 months (R1→R4). Support, training, docs all fork. |
| Smaller blast radius than a full cutover; R4 becomes "roll out the same model" | Pilot agencies are the MVP agencies, not the internal-marketplace-heavy ones — you validate native creation with the agencies that have the *least* internal-job volume |

**Verdict:** the most coherent structure (owner agency decides), and it carries the right instinct — native creation should roll out agency-by-agency, not all at once. But 4a trades away opportunity reach (the product's thesis), and 4b is Option B with a smaller number. Right shape for R2/R3, not R1.

---

## 5. Recommendation

**For R1:** Option D-style split by agency, with a deliberate audience limitation instead of a sync.

- **Pilot agencies (the 6) create STIPs, Gigs, internal jobs, and secondments natively in CareerCompass**, with a customisable application form (template-based — Section 6).
- **Non-pilot agencies keep creating in OTG.** Compass ingests those read-only, tagged with source.
- **No write-back sync.** Pilot-agency postings created in Compass are visible to onboarded officers only. Accepted R1 limitation, resolved at R4 (full OTG cutover). Where a pilot agency genuinely needs OTG-side visibility for a specific role, a **link-only listing stub** (title + "apply on CareerCompass", no form, no data sync) is the fallback — not manual re-entry.

**Why this over the pre-finding recommendation (Option A):**
- Option A leaves R1's apply flow fixed-form, which inherits the exact reason agencies avoid OTG. The form-customisation finding makes minimal creation R1-critical, not R4-deferrable.
- The audience limitation is acceptable *for this cohort*: 6 agencies, ~5,400 officers, low cross-agency internal-job volume, OTG decommissioning in 18 months anyway. It's staging, not permanent fragmentation.
- No throwaway sync, no D-016 conflict, no full write-back integration on the R1 timeline.

**What moves to R4 (unchanged):** full native creation for all ~30 agencies + OTG decommissioning.

**What this makes an R1 dependency, now, not deferred:** agency-admin auth (RAID R5). It needs an owner this week.

---

## 6. Dual-posting — how it's solved

Under the recommendation, dual-posting largely **solves itself**, because there's a single creation path per posting determined by whose posting it is.

| Opportunity | Created in | Dual-posting risk |
|---|---|---|
| Pilot-agency STIP / Gig / internal job / secondment | CareerCompass (native, custom form) | None — Compass is the only place with the custom form. The FormSG workaround dies. |
| Non-pilot-agency role | OTG (ingested read-only into Compass, source-tagged) | None — one canonical source. |

**The rule for the PRD:**

> **Single creation path per posting.** Each opportunity is created in exactly one system:
> - Pilot-agency postings are created natively in CareerCompass with a custom application form.
> - Non-pilot-agency postings continue in OTG and are ingested into CareerCompass read-only, tagged with their source.
> - No posting is natively created in both systems. Compass suppresses any ingested OTG record that matches a Compass-native posting by canonical key.
>
> **R1 audience limitation:** Pilot-agency postings created in CareerCompass are visible to onboarded officers only. Officers still on OTG will not see them. Accepted R1 constraint, resolved at R4. If a pilot agency needs OTG-side visibility for a specific role, a link-only listing stub is the fallback, not manual re-entry.

**The one residual risk:** a pilot agency wants an OTG audience for a specific role and someone re-enters it manually in OTG. Handled by:
1. **Accept the audience limit for R1** (recommended) — no sync, no stub, no dual-posting.
2. **Link-only listing stub Compass → OTG** for specific roles that need it — title, agency, "apply on CareerCompass", no form, no data sync. Much lighter than a real write-back sync and honest about ownership.
3. **Full write-back sync** — rejected (Option B's cost, throwaway at R4, OTG can't hold the custom form anyway).

---

## 7. What a design review adds

### Don't build a form builder. Build a template picker.

"Agencies want custom forms" rarely means "agencies want a drag-and-drop form designer." A full builder is a huge surface (field types, validation, conditional logic, preview, versioning) and agency HR are not form designers.

**R1 scope:**
- 3–5 pre-built application templates (e.g. "Standard", "STIP with project preference", "Secondment with endorsement", "Internal job with rating upload").
- Each = the fixed profile pre-fill block + a curated set of opportunity-specific fields.
- Agency picks a template at posting time, can toggle 2–3 optional questions on/off.
- **No free-form field creation in R1.** That's a v2 conversation, gated on whether the templates actually fail to cover real needs.

### Do the FormSG-workaround analysis before scoping

Don't scope off a secondhand claim. Pull 15–20 real FormSG forms agencies are using as workarounds, categorise the extra fields — you'll likely find 6–8 recurring patterns, which become the templates. Card-sort them with HR to validate groupings. This is the Megan Yeo discovery with a concrete artifact instead of an open interview.

### Design the officer side for a *variable* form from the start

If agencies get any customisation, the apply form is no longer fixed. This is a required change to Epic B now, not at grooming:
- Stable top section (profile pre-fill, always the same) + variable section (this opportunity's extra questions), with clear visual separation of "from your profile" vs "specific to this role".
- Progress indication has to handle a form whose length the officer can't predict.
- Every custom field needs empty / error / help-text states, plus system-enforced guardrails (max length, required-field limits, max N questions) — agencies can add bad fields.

### States and edge cases the PRD doesn't cover

- Empty state for an agency creating their first posting with no template history.
- Draft/preview: HR must see the officer's view before publishing (non-negotiable, or broken forms ship).
- Edit-after-publish: an officer applied, then HR changes a question — what happens to the submitted application?
- Endorsement/approval gate for internal jobs and secondments — is it a form field, a workflow step, or offline? Map it as a flow.
- Mobile: officers apply on phones. Variable-length form + file upload + save-and-resume on mobile is real design work.

### Accessibility (government requirement)

- System enforces accessible field markup (labels, ARIA, keyboard nav, error association) — HR can't be relied on to.
- File upload needs a keyboard path, not drag-and-drop only.
- WCAG 2.1 AA as a stated requirement.

### Timeline reality

Template set + variable apply form + all states = **2–3 weeks of design minimum**, on top of CMM. This is the concrete reason the Option B vs Option C call from the collision analysis (second designer vs move the timeline) can't be squeezed.

---

## 8. Open questions and next steps

| # | Question | Owner | For |
|---|----------|-------|-----|
| 1 | Verify the form-customisation claim: how broad is it, across which types, for the 6 pilot agencies? Pull real FormSG workaround forms. | Michelle / Liting | Megan Yeo discovery, week of 7 Sep |
| 2 | Does the current Epic B spec assume a fixed or configurable form? | Michelle | Before R1 grooming |
| 3 | "If a role you post in Compass is only seen by onboarded officers, is that acceptable for R1, or is cross-government reach essential for these roles?" | Michelle | Pilot-agency discovery |
| 4 | Does OTG expose internal jobs / secondments / rotations in an ingestible feed? | Pow Hwee | OTEP-578 spike (Sprint 9) |
| 5 | Agency-admin auth path — who owns it? Now an R1 dependency, not deferred. | Pow Hwee / Fabian | This week |
| 6 | Re-scope: with minimal creation + template picker in R1, what comes out to fit? (Saved jobs? status-tracking depth?) | Michelle / Adrian | R1 grooming |
| 7 | Does dropping full creation from R1 (keeping minimal template-based creation) need to go back to Mark, given the 9 Jul SteerCo "A+B+C floor" sign-off? | Michelle → Adrian | `/decision-doc` |

**Next steps:**
1. Book the Megan Yeo discovery for the week of 7 Sep, framed around the FormSG-workaround analysis.
2. Take this to the Sprint 9 R1 brainstorm for the Pow Hwee feasibility read on ingestion + auth.
3. Short brief to Adrian: the form-customisation finding changes R1 scope; minimal template-based creation is likely R1-critical; agency-admin auth needs an owner now.
4. Update the [R1 opportunity-scope PRD](../prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md) and [R1 Opportunities RAID](2026-09-07-W37-r1-opportunities-raid.md) once discovery lands.

---

*Generated: 2026-09-07. Collates the creation/ingestion options, the dual-posting resolution, and the design-review view into one reference for the R1 brainstorm and an Adrian brief.*
