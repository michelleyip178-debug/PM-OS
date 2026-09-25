---
date: 2026-09-22
week: 2026-W39
type: backlog
scope: R1 — STIPs & Gigs (Pillar 1 / Epic A)
owner: Michelle Yip
related:
  - outputs/prds/2026-09-18-W38-r1-epic-one-pager.md
  - outputs/analyses/2026-09-18-W38-r1-reduced-scope-feasibility.md
---

# STIPs & Gigs — R1 Backlog

Derived from the R1 one-pager (Epic A rows, Decision Tracker) and the reduced-scope feasibility brief (Pillar 1 breakdown). Epic A itself isn't tagged P0/P1 in either source document — Epics C, D, E, F are — so priority on Epic A's stories below is **inferred** from its status as R1's "Hero Feature" in the reduced-scope brief, not directly stated. Flagged per story.

> **⚠️ Scope boundary pending confirmation (as of 21 Sep):** every story below assumes the "6 pilot agencies" access boundary. Adrian raised a proposal to open the Opportunities Module (this entire epic) to any WOG-authenticated officer via module-scoped RBAC, independent of the platform's POCDEX gate. Not yet sized, not yet confirmed. See [Reduced-Scope Feasibility, Pillar 1](2026-09-18-W38-r1-reduced-scope-feasibility.md) and [OTG/Compass Interim State thread](../meeting-notes/2026-09-21-W39-otg-compass-interim-state-adrian-thread.md). **Do not groom or size against pilot-agency-only until this resolves.**

---

## Epic A1 — Posting Creation & Permissions

**Epic goal:** Any authenticated officer in a pilot agency can create a STIP/Gig posting without HR approval gating.

| Story | Priority | Acceptance Criteria | Out of Scope (R2) |
|---|---|---|---|
| As any authenticated officer in a pilot agency, I want to create a STIP/Gig posting with a simple form, so I can get help without going through HR approval. | **P0** *(inferred)* | Form captures title, description, agency, competencies, closing date. Any logged-in officer across the 6 pilot agencies can author and publish — no HR admin role gating. Creator automatically becomes Posting Owner. | Complex HR approval chains, role-based posting permissions, supervisor pre-clearance, departmental approval queues. |
| As a posting creator, I want to confirm my Reporting Officer is aware of this posting, so there's a lightweight accountability check. | **P0** *(inferred)* | Mandatory checkbox at creation: "I confirm my Reporting Officer is aware of this gig posting." | — |

**Technical question for Rama/Barry:** can any authenticated officer write to the opportunities table via standard session token, or does the backend need explicit Keycloak role/group membership to authorize creation endpoints?

---

## Epic A2 — Co-Evaluators & Collaboration

**Epic goal:** Posting creators can loop in colleagues to help review applicants.

| Story | Priority | Acceptance Criteria | Out of Scope (R2) |
|---|---|---|---|
| As a posting creator, I want to add up to 2 co-evaluators by civil service email, so we can review applicants together. | **P0** *(inferred)* | Add 1-2 co-evaluators by `.gov.sg` email, across pilot agencies, at creation or edit. Co-evaluators get identical drawer review permissions to the creator. | Complex role handovers, temporary delegation, approval workflows for posting creation, cross-agency permission inheritance trees. |

**Technical question for Rama/Barry:** can co-evaluator emails be stored as string arrays on the posting record and resolved at login (`session.email IN collaborators`), avoiding a synchronous TechPass/WOG AD directory lookup at creation?

---

## Epic A3 — Posting Lifecycle & Freshness

**Epic goal:** Postings don't go stale, and closure triggers the right data-retention behavior.

| Story | Priority | Acceptance Criteria | Out of Scope (R2) |
|---|---|---|---|
| As a posting creator, I want my posting to auto-expire after 30 days, so stale gigs don't linger on the catalog. | **P0** *(inferred)* | Automatic 30-day listing expiration. | Recurring auto-reposting, automated reminder pings to extend closing dates. |
| As a posting creator, I want to manually close my vacancy once it's filled, so it drops off the public catalog immediately. | **P0** *(inferred)* | Manual "Close Vacancy" button. Closed postings enter a 90-day retention countdown before candidate data purge. | Public archive browsing of closed postings. |

**Technical question for Rama/Barry:** should expiration be evaluated dynamically on read (`closing_date < NOW()`), or does it need a daily scheduled cron task to mutate database status for telemetry/audit?

---

## Epic A4 — Application Form & Pre-Fill

**Epic goal:** Officers can apply in under 2 minutes using data they've already given Compass.

| Story | Priority | Acceptance Criteria | Out of Scope (R2) |
|---|---|---|---|
| As an officer, I want the application form pre-filled with my profile data, so I don't retype information I've already given Compass. | **P0** *(inferred)* | Fixed template: Name, Email, Agency, Grade/Role, verified competencies (pre-filled). 2-3 standard free-text fields. | Dynamic form builders, agency-specific custom form configurations, complex conditional branching. |
| As an officer, I want to declare my submission is accurate in one step, so I'm not filling multiple legal checkboxes. | **P0** *(inferred)* | Single consolidated declaration: "I declare that all information submitted is accurate and I have informed my Reporting Officer." | Multiple agency-specific declaration checkboxes. |
| As an officer, I want to apply using only my existing profile data, so I don't need to upload a resume or CV. | **P0** *(inferred)* | Application relies strictly on pre-filled CareerCompass profile snapshots. No file upload required or supported. | Multi-file PDF uploads, resume parsing, portfolio storage, antivirus scanning infrastructure. |

**Technical question for Rama/Barry:** with the form fixed to 4 profile fields + 2-3 text inputs, is it faster to build with existing `otep-web` components, or does an unauthenticated ApplySG/GDP widget save net effort? *(PM recommendation already on record: drop ApplySG, use native React primitives.)*

---

## Epic A5 — FormSG Flex Fallback

**Epic goal:** Posters who need bespoke screening questions aren't blocked by the fixed form.

| Story | Priority | Acceptance Criteria | Out of Scope (R2) |
|---|---|---|---|
| As a posting creator with custom screening needs, I want to link out to a FormSG form from my job description, so I'm not limited to the standard 2-3 field form. | **P0** *(inferred)* | Job description supports markdown/hyperlinks. In-app guidance prompts the standard form as the primary default; FormSG link is the explicit fallback. | Automated FormSG webhook two-way sync, automated field parsing from external forms, custom webhooks. |

**Technical question for Rama/Barry:** does `otep-web`'s markdown rendering use a strict sanitizer (e.g. DOMPurify) that whitelists only `https://` and restricts outbound links to trusted `.gov.sg` domains, to prevent XSS?

---

## Epic A6 — Notification & Review Drawer

**Epic goal:** Posting creators know instantly when someone applies, and can review applicants without leaving Compass.

| Story | Priority | Acceptance Criteria | Out of Scope (R2) |
|---|---|---|---|
| As a posting creator, I want an instant email alert when someone applies, so I don't have to check the portal manually. | **P0** *(inferred)* | Transactional email: "New application received for [Job Title] from [Officer Name]." | In-app notification center. |
| As a posting creator, I want a review table under "My Posted Gigs," so I can compare applicants at a glance. | **P0** *(inferred)* | Table shows Name, Agency, Competency Match, Date Applied. Co-evaluators see the identical view. | Candidate status progression workflows (shortlist, interview, scoring rubrics), automated candidate regret email blasts. |

**Technical question for Rama/Barry:** is there already an active GovTech Postman API key/sender identity for transactional emails, or would direct SMTP/AWS SES be faster to stand up? *(PM recommendation already on record: use the Postman REST API.)*

---

## Epic A7 — Candidate Selection & Outcomes

**Epic goal:** Posters make a decision, and the applicant sees it immediately.

| Story | Priority | Acceptance Criteria | Out of Scope (R2) |
|---|---|---|---|
| As a posting creator, I want to click Offer or Reject directly in the review table, so the applicant's status updates without extra steps. | **P0** *(inferred)* | Offer/Reject buttons in the table. Applicant's in-app status badge updates immediately (`Submitted` → `Offered` or `Not Selected`). | Automated candidate regret email campaigns, multi-stage assessment scoring, interview scheduling integrations. |

**Technical question for Rama/Barry:** does updating the application status enum require only a single PATCH endpoint, with no downstream event orchestrator needed in R1?

---

## Epic A8 — Post-Offer Coordination

**Epic goal:** Once an offer is made, Compass steps back and lets the poster and applicant coordinate directly.

| Story | Priority | Acceptance Criteria | Out of Scope (R2) |
|---|---|---|---|
| As a posting creator, I want to know that once I offer someone, coordination happens outside Compass, so I'm not blocked waiting for a feature that doesn't exist yet. | **P0** *(inferred)* | Explicitly no in-app contract generation or messaging. Poster connects via email/Teams for onboarding logistics. | In-app messaging, automated digital contract generation, formal HR placement workflows. |

**Technical question for Rama/Barry:** confirm no in-app contract or messaging integration is required — post-offer logistics stay entirely on direct email/Teams.

---

## Cross-Cutting Epics (Priority as Stated in Source Docs)

These aren't STIPs & Gigs-specific epics, but STIPs & Gigs stories depend on them directly.

| Epic | Priority (stated) | Relevance to STIPs & Gigs | Status |
|---|---|---|---|
| **Epic D — RBAC & Privacy** | **P0** | Gates who can see the Epic A6 review drawer. 3-tier model: Public Officer, Poster/Collaborator, Admin. | ⚠️ Pending — net-new WOG-wide module-entry layer (same RBAC proposal noted at top of this doc) not yet sized. |
| **Epic F — Discovery Telemetry** | **P1** | Instruments Epic A1 postings and Epic A4 applications for the North Star metric ("Opportunities Discovered per Officer"). | Not blocked. |

---

## Explicitly Out of Scope for R1 (STIPs & Gigs, All Epics)

Per the reduced-scope feasibility brief:
- Dynamic form builders / agency-specific custom question configuration
- Multi-stage ATS recruitment pipeline (shortlist, interview booking, scoring rubrics)
- Automated candidate regret email campaigns
- In-app messaging or contract generation
- Multi-file PDF resume/portfolio uploads and automated parsing
- Complex HR approval chains, role-based posting permissions, supervisor pre-clearance workflows

---

## Summary Table

| Epic | # Stories | Priority | Status |
|---|---|---|---|
| A1 — Posting Creation & Permissions | 2 | P0 (inferred) | ⚠️ Pending pilot-boundary confirmation |
| A2 — Co-Evaluators & Collaboration | 1 | P0 (inferred) | Ready |
| A3 — Posting Lifecycle & Freshness | 2 | P0 (inferred) | Ready |
| A4 — Application Form & Pre-Fill | 3 | P0 (inferred) | Ready |
| A5 — FormSG Flex Fallback | 1 | P0 (inferred) | Ready |
| A6 — Notification & Review Drawer | 2 | P0 (inferred) | Ready |
| A7 — Candidate Selection & Outcomes | 1 | P0 (inferred) | Ready |
| A8 — Post-Offer Coordination | 1 | P0 (inferred) | Ready |
| D — RBAC & Privacy (cross-cutting) | — | P0 (stated) | ⚠️ Pending sizing |
| F — Discovery Telemetry (cross-cutting) | — | P1 (stated) | Ready |

**13 stories total across 8 STIPs & Gigs epics**, all currently blocked from being treated as final-scope by the same open question: the 6-pilot-agency access boundary (see top-of-doc flag). Everything else — the mechanics of creation, application, review, and decision — is settled and ready to groom.

---

*Next: confirm the pilot-boundary question with Adrian before sizing/grooming these against a specific sprint. Once resolved, run `/create-tickets` to push these into Jira.*
