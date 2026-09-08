---
date: 2026-09-07
week: 2026-W37
type: strategy + transition-plan
scope: CareerCompass opportunity creation — from OTG-authoritative to Compass-native, R1 → R4
owner: Michelle Yip
status: proposal — for the R1 brainstorm and an Adrian brief
sources:
  - outputs/analyses/2026-09-07-W37-r1-opportunity-creation-and-dual-posting.md
  - outputs/analyses/2026-09-07-W37-r1-opportunities-raid.md
  - outputs/prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md
  - outputs/roadmaps/2026-06-12-W25-careercompass-phased-rollout.md
  - outputs/analyses/2026-09-04-W36-r1-timeline-and-handoff-collision-analysis.md
---

# Opportunity Creation — Strategy and Transition Plan (R1 → R4)

How CareerCompass moves from "OTG owns opportunity creation, Compass discovers" to "Compass owns opportunity creation, OTG is retired" — without a big-bang cutover, without dual-posting, and without building throwaway integrations.

For the R1 brainstorm and a one-page brief to Adrian.

---

## 1. The strategic picture

**Where we are:** OTG is the system of record for opportunity postings. Compass ingests read-only. Agencies increasingly route around OTG to standalone FormSG links because OTG's application form can't be customised — so opportunities are fragmenting *again*, the exact problem the MVP unified listing was built to solve.

**Where we're going:** Compass is the single place agencies create opportunities, with customisable application forms, native apply, and status tracking. OTG is decommissioned.

**The fixed points that shape the path:**

| Fixed point | Date | Implication |
|---|---|---|
| OTG contract expires | March 2028 | Hard deadline. Everything must be off OTG before this. |
| Full OTG cutover targeted (R4) | Oct 2027 | ~5-month buffer to the contract end. |
| R4 scope = "opportunity creation & posting (agency-owner side)" | Oct 2027 | Native creation for *all* agencies is already planned for R4. |
| D-016: one-time OTG port, no ongoing sync | — | Architecture direction: OTG→Compass is a sunset path, not permanent plumbing. Rules out a durable write-back sync. |
| R1 pilot = 6 MVP agencies (~5,400 officers) | Q1 2027 | Small, controlled cohort. Not the internal-marketplace-heavy agencies. |

**The strategic choice:** don't wait for R4 to start the creation transition. Use each release wave as a migration step, so R4 is a *finish line*, not a big-bang. The form-customisation finding forces this — agencies need custom forms before R4, or they keep fragmenting to FormSG in the meantime.

**Guiding principles:**
1. **One creation path per posting, keyed to the owning agency.** No posting is created natively in two systems. This designs out dual-posting structurally.
2. **Migrate creation agency-by-agency, aligned to the release waves.** Never all-at-once.
3. **No throwaway integrations.** No Compass→OTG write-back sync. Accept a bounded, time-limited audience limitation instead, with a cheap link-stub fallback.
4. **Compass owns what originates in Compass.** OTG stays authoritative for its own postings until its agencies migrate or it's decommissioned.
5. **Every wave leaves the system in a coherent state** — no wave depends on the next one shipping to make sense.

---

## 2. The transition, wave by wave

| Wave | Date | Creation model | Who creates where | OTG's role | New capability |
|---|---|---|---|---|---|
| **MVP** (now) | Oct–Nov 2026 | OTG-only | All agencies → OTG | System of record for all postings | Discovery + redirect apply |
| **R1** | Q1 2027 | **Split by agency.** Pilot 6 create natively in Compass with template-based custom forms. Everyone else → OTG. | Pilot 6 → Compass · Others → OTG (ingested read-only) | Authoritative for non-pilot postings; ingested source for Compass | Native creation (template picker), native apply + pre-fill, status tracking, saved jobs |
| **R2** | Apr 2027 | Split by agency, cohort grows. POLITEs + AGC join native creation. | Pilot 6 + POLITEs + AGC → Compass · Others → OTG | Shrinking — authoritative only for not-yet-migrated agencies | Competency-based course matching (R2's headline); creation model unchanged, just more agencies |
| **R3** | Jul 2027 | Split by agency, cohort grows. HDB, MOH, HSA, CSC join. HDB needs custom data piping. | Migrated agencies → Compass · Remainder → OTG | Authoritative only for the final tail of agencies | Development plans (R3's headline); creation model unchanged |
| **R4** | Oct 2027 | **Compass-native for all.** Final tail migrates. OTG creation switched off. | All agencies → Compass | Read-only archive during a wind-down window, then decommissioned | Full cutover; OTG postings ported one-time (D-016), no ongoing sync |
| **Post-R4** | Oct 2027 – Mar 2028 | Compass-only | All → Compass | Contract runs out; final decommission | Buffer for stragglers and issues before the contract ends |

**Key point:** the creation *model* (agency-by-agency native creation, template-based forms, one path per posting) is set in R1 and stays constant. R2 and R3 just add agencies to it while delivering their own headline features. R4 finishes the job. Nothing about the model changes wave to wave — only the cohort grows.

---

## 3. Handling the "seen by fewer officers" problem during transition

While the migration is in flight, a posting created in Compass by a migrated agency isn't visible to officers whose agency is still on OTG. Three-tier handling:

| Situation | Handling | Cost |
|---|---|---|
| Role is targeted at a specific agency / grade / scheme (most internal jobs, secondments) | Compass-only visibility is fine — the target pool is already on Compass or will be. | None |
| Role is cross-government but the migrated cohort is a large share of the relevant audience | Accept Compass-only for the wave; note it as a known limitation. | None |
| Role genuinely needs the full-government audience *now* and can't wait for the next wave | **Link-only listing stub pushed to OTG** — title, agency, "apply on CareerCompass". No form, no data sync, no field mapping. | Low — a one-way display feed, not an integration |

**Why not a write-back sync:** it's throwaway at R4, contradicts D-016, and OTG can't represent a custom form anyway. The link stub gives non-migrated officers a pointer without pretending OTG owns the posting.

**Validation needed:** discovery question to BOs — "how many of your postings per quarter genuinely need full-government reach right now?" If the answer is small, the link stub is a rare exception and the limitation is a non-issue. That number decides how much the tiering matters.

---

## 4. What R1 must deliver for the transition to start

| Deliverable | Why it's the transition's foundation | Owner | Status |
|---|---|---|---|
| **Template-based creation flow** (3–5 templates + toggleable questions, draft/preview, edit/close lifecycle) | The migration can't begin without a Compass creation path. Template-based, not a form builder — that's the v2 question. | Michelle / Liting | Scoping — needs discovery |
| **Agency-admin auth** | No creation without authenticated agency users. Hard gate. Unowned since June. | Pow Hwee / Fabian | 🔴 Needs an owner this week |
| **Canonical-key + dedup** | Prevents an ingested OTG record and a Compass-native posting both showing. The mechanism that enforces "one path per posting". | Pow Hwee | Part of OTEP-578 spike |
| **Ingestion extended to internal jobs / secondments / rotations** | Non-pilot agencies' postings of these types still need to reach Compass. | Pow Hwee | OTEP-578 spike, Sprint 9 |
| **Link-stub feed Compass → OTG** (thin, optional) | The fallback for cross-gov roles during transition. Only build if discovery says it's needed. | Pow Hwee | Deferred until validated |
| **Native apply + status tracking** (Epics B/C) | The officer-facing value that makes creating in Compass worthwhile for agencies. | (existing R1 scope) | In progress |

**What R1 does NOT build:** native creation for non-pilot agencies, a write-back sync, a free-form field builder, OTG decommissioning. All R4.

---

## 5. Risks to the transition and how the plan handles them

| Risk | Handling in the plan |
|---|---|
| Agency-admin auth can't land in the R1 window | Fallback: R1 ships ingest-only, creation transition starts at R2. A knowing trade — leadership decides, not drift. The wave model still works, just shifted one release. |
| Templates don't cover real agency forms | Validate coverage in discovery *before* R1 scope locks. If >30% need free-form, either grow scope or start the transition with the agencies whose forms *do* fit templates. |
| OTG has no ingestible feed for internal jobs/secondments | Those types are external-link-only until the owning agency migrates to native creation. Doesn't block the wave model. |
| Cross-gov reach turns out to be essential for most roles | The link-stub tier absorbs it. If it's essential for *nearly all* roles, that's a signal to compress the wave schedule, not abandon the model. |
| R2/R3 teams treat "add agencies to creation" as out of their scope (their headlines are course matching / dev plans) | Bake the cohort expansion into each release's definition of done explicitly. It's a small increment per wave precisely so it fits alongside the headline feature. |
| OTG decommissioning (R4) slips past March 2028 contract end | The Oct 2027 → March 2028 buffer is deliberate. Protect it — don't let R4 scope creep eat it. Escalate early if R4 looks late. |
| Single designer / engineering-in-VAPT constraints delay R1 itself | Collision-analysis Options A/B/C. If R1 slips, the whole wave schedule shifts — surface that to Adrian now, not at R1 grooming. |

---

## 6. Decisions needed to lock the strategy

| # | Decision | Owner | By when |
|---|----------|-------|---------|
| 1 | Adopt the agency-by-agency creation transition (this doc) vs. wait for a big-bang R4 cutover | Adrian | R1 grooming |
| 2 | R1 creation scope = template picker for pilot 6, no write-back sync, accept the audience limitation | Adrian (may need Mark, given the 9 Jul "A+B+C floor") | R1 grooming — before Adrian's 5–9 Oct leave |
| 3 | Name an owner for agency-admin auth | Pow Hwee / Fabian | This week |
| 4 | Confirm R2 and R3 definitions of done include "expand native creation to the wave's agencies" | Adrian / release leads | R2 planning |
| 5 | Build the link-stub feed — yes/no, based on BO discovery on cross-gov reach need | Michelle → Pow Hwee | After discovery |
| 6 | What comes out of R1 to fit template-based creation (status-tracking depth? saved jobs? or move the timeline?) | Adrian | R1 grooming |

---

## 7. This week (W37)

1. **Book BO / agency discovery** (Megan Yeo + pilot-agency HR), framed around the FormSG-workaround forms. Validate template coverage and cross-gov reach need.
2. **Get Pow Hwee's auth-path T-shirt size** (S / M / L) — this decides whether the transition starts at R1 or R2.
3. **Take this strategy to the Sprint 9 R1 brainstorm** for the feasibility read.
4. **One-page brief to Adrian** (via Jace): the transition model, the R1 scope it implies, the 3 decisions he owns, and the auth-owner ask.
5. **Update** the [R1 opportunity-scope PRD](../prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md) and [R1 Opportunities RAID](2026-09-07-W37-r1-opportunities-raid.md) once discovery lands.

---

*Generated: 2026-09-07. The transition strategy that sits under the R1 opportunity-scope PRD and the creation/dual-posting analysis. Re-status at each `/weekly-review` and after each R1 brainstorm.*
