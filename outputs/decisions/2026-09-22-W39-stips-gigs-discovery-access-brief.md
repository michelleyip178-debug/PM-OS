---
date: 2026-09-22
week: 2026-W39
type: decision-brief
topic: STIPs & Gigs (R1) — full scope, discovery through application
purpose: input for the R1 Scope Alignment Workshop with Adrian Ang
status: SUPERSEDED, 29 Sep — the open discovery-access question this doc raises resolved to the 6 pilot agencies. Apply also resolved to FormSG-extraction, not native, and has already shipped in MVP. See the [Epic A One-Pager](../prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md) for current state.
---

# STIPs & Gigs — Full Scope, Discovery to Application (R1)

> ⚠️ **SUPERSEDED, 29 Sep.** The open question this brief raises (pilot-only vs. WOG-wide discovery) resolved to the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS). Apply also resolved to FormSG-link extraction, not the native flow this brief describes further down, and it's already live in MVP. Kept as a historical record of the open question at the time, not current scope.

**Purpose (historical, 22 Sep):** one complete picture of STIPs & Gigs end-to-end, for the scope alignment workshop. Most of this is already locked. One question — who can discover and apply — is open, unestimated, and blocks everything downstream of it (risk register R-14/R-23).

---

## Stage 1: Discovery — THE OPEN QUESTION

**Can any officer across the whole of government discover STIPs & Gigs on Compass, or only officers in the 6 pilot agencies?**

This is the one genuinely open decision in the whole flow. It surfaced as a real, previously-invisible disagreement at the 22 Sep estimation discussion:

| | Rama's understanding | Michelle's understanding |
|---|---|---|
| Non-pilot agency officers can... | Create postings; cannot access broader Compass functionality; see only a limited admin dashboard | Also discover opportunities — part of the intended journey, with OTG acting as an entry point into Compass |

These are two different products, not a wording gap. Engineering cannot estimate until this is resolved.

### The actual proposal on the table

A proposal slide reviewed since frames Compass as **"the sole platform for Compass and OTG officers to post, discover and apply"** for STIPs, Gigs, and other opportunity types — with non-pilot agency officers getting post/discover/apply access via **POCDEX integration with WOG officer data**. This matches Michelle's understanding, stated more specifically, and commits to full parity rather than a discovery-only middle ground.

### Three options

| Option | What it means | Cost implication |
|---|---|---|
| **A — Pilot-only** | Discovery, creation, and apply all limited to the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) | Matches the scope already costed (18.0–23.5 mw). No new governance dependency. |
| **B — WOG-wide full parity** (the stated proposal) | Any WOG officer, pilot or non-pilot, can post, discover, and apply — via POCDEX integration | Currently **unestimated**. Requires POCDEX data-sharing approval for a WOG officer dataset (identity, position ID, agency, supervisor info) — a governance approval, not just engineering work. |
| **C — Hybrid fallback** | Discover WOG-wide; post/apply stays pilot-only | Splits the cheap part (discovery, mostly a read/ringfencing problem) from the expensive part (native apply infra, RBAC, applicant handling). Worth having ready if B's governance approval or engineering cost proves too slow for the Feb-Mar 2027 target. |

### Technical floor under any option beyond strict pilot-only

- **Agency ringfencing is unresolved on both source HR systems.** HRPS doesn't yet know if it stores agency tagging. Cumulus has no structured agency targeting at all — it infers agency identity from short codes (e.g. EMA, LTA), which directly shapes how ingestion and mapping get built.
- **Login isn't the blocker.** WOGAD is common across HRPS and Cumulus, so authentication works regardless of option. The gap is entirely in *what happens after login* — whether Compass knows what that officer is allowed to see.
- **Cross-HR-system apply is a hard wall — but it doesn't hit STIPs & Gigs.** If an officer clicks an opportunity not hosted on the HR system they have access to, they can't apply today, because cross-HR-system authentication isn't possible yet (deferred until Workable becomes the WOG ATS). This mainly threatens Internal Jobs/SJRs/Secondments, which live in HRPS or Cumulus. **STIPs & Gigs are natively hosted in Compass, so this wall doesn't block STIPs/Gigs apply under any option** — worth naming explicitly so Option B's STIPs/Gigs scope isn't conflated with the harder Internal Jobs problem.
- **Visibility tagging is currently implicit, not explicit**, across both HR systems — a standard Opportunity Visibility Model (mandatory agency ID + visibility classification, validated pre-publish) needs to exist before any option beyond strict pilot-only can be trusted.

**The ask for Adrian: make this the first substantive decision after business outcomes at the workshop.** Everything below is ready to size the moment this is answered.

---

## Stage 2: Creation — Locked

Any authenticated officer (scope of "any" depends on Stage 1's answer) can post a STIP/Gig.

- **Form:** title, description, agency, competencies, closing date. No HR admin gating.
- **Ownership:** creator automatically becomes Posting Owner; can add up to 2 co-evaluators by `.gov.sg` email, who get identical review permissions.
- **Accountability:** mandatory checkbox — "I confirm my Reporting Officer is aware of this gig posting."
- **Custom questions:** job description supports markdown/hyperlinks; posters needing bespoke screening can paste an outbound FormSG link as a fallback. Standard native form is the default.

**Open technical question (Rama/Barry):** does creation need explicit Keycloak role/group membership, or does any authenticated officer already have a valid session token to write to the opportunities table?

---

## Stage 3: Publish & Lifecycle — Locked

- Posting goes live instantly on the catalog.
- **Auto-expiry:** 30 days, to prevent ghost postings.
- **Manual close:** poster can close a filled vacancy anytime; triggers a 90-day retention countdown before candidate data purge.

**Open technical question (Rama/Barry):** dynamic expiry evaluation on read, or a daily cron job?

---

## Stage 4: Officer Discovers & Browses — Mechanics Locked, Population Open (see Stage 1)

- Officer logs in via Singpass/TechPass, lands on the unified Opportunities page, sees ringfenced listings.
- Optional bookmark to "Saved Jobs" filter tab.
- *Which officers see which postings is exactly the Stage 1 question — the browsing UI itself isn't in question, its population is.*

---

## Stage 5: Apply — Locked

- Officer clicks Apply; a modal opens pre-filled from verified profile data (name, email, agency, grade, competencies).
- Fills 2-3 standard free-text fields, ticks one consolidated declaration ("I declare that all information submitted is accurate and I have informed my Reporting Officer"), submits in under 2 minutes.
- **No file upload.** Relies strictly on profile data — no CV, no resume parsing, no portfolio storage.
- If the poster used the FormSG fallback instead, the officer applies there directly.

**Open technical question (Rama/Barry):** native React primitives vs. an ApplySG/GDP widget for the form — PM recommendation already on record is native primitives, drop ApplySG.

---

## Stage 6: Notification & Review — Locked

- Poster gets an instant transactional email alert on submission.
- Poster (and co-evaluators, identical view) reviews applicants in an in-app table: Name, Agency, Competency Match, Date Applied.

**Open technical question (Rama/Barry):** existing GovTech Postman API key for transactional email, or stand up direct SMTP/SES? PM recommendation on record: Postman REST API.

---

## Stage 7: Decision — Locked

- Poster clicks **Offer** or **Reject** directly in the review table.
- Applicant's in-app status badge updates immediately: `Submitted` → `Offered` or `Not Selected`.
- No multi-stage pipeline, no automated regret emails.

**Open technical question (Rama/Barry):** confirm a single PATCH endpoint is sufficient, no downstream event orchestrator needed.

---

## Stage 8: Post-Offer — Locked, Explicitly Out-of-App

Once offered, Compass steps back entirely. Poster and applicant coordinate onboarding logistics via email/Teams — no in-app messaging, no contract generation, no formal HR placement workflow in R1.

---

## RBAC Across the Whole Flow — Locked Mechanics, Scope Depends on Stage 1

3-tier model already designed (Pillar 4): **Public Officer** (catalog only), **Poster/Collaborator** (drawer access for own postings, up to 2 co-evaluators), **Central Admin**. Authentication (Keycloak) and authorization (drawer access) are split — Keycloak confirms `is_authenticated_officer`; `poster_id`/`collaborators` checks happen at the NestJS layer. Every drawer view/download is audit-logged.

**⚠️ Stale as of 23 Sep (R-27):** this doc previously said orphaned postings fall back to a designated Agency HR POC. That's no longer true — STIPs & Gigs has zero HR role of any kind, confirmed 23 Sep. RBAC design, audit log ownership, and the orphaned-posting fallback are all currently unowned, not assigned to HR. See the [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27) for the open item this creates — a real owner (likely Engineering/Platform, not yet confirmed) still needs to be named.

**This RBAC design itself needs re-checking once Stage 1 resolves** — a model scoped to 6 agencies is a different build than one scoped WOG-wide.

---

## Explicitly Out of Scope for R1 (All Stages)

Dynamic form builders, multi-stage ATS pipeline, automated regret emails, in-app messaging or contract generation, file/resume uploads, complex HR approval chains, recurring auto-reposting, public archive of closed postings, automated compliance dashboards.

---

## Why Stage 1 Blocks Everything

- RBAC scope depends on the answer.
- Thomas and Rama can't size frontend/backend work until the audience is fixed.
- The one-way OTG→Compass routing decision (21 Sep BO meeting) only delivers real value under Option B or C — under Option A it's a dead end for anyone outside a pilot agency.
- Every other stage (2 through 8) is already locked and ready to estimate the moment Stage 1 is answered.

---

*Related: [R1 Opportunities Estimation Discussion notes](../meeting-notes/2026-09-22-W39-r1-opportunities-estimation-discussion.md), [STIPs & Gigs Backlog](../analyses/2026-09-22-W39-stips-gigs-backlog.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-14, R-23), [R1 Scope — Proposed, pending alignment](2026-09-22-W39-r1-scope-confirmed-transition-plan.md)*
