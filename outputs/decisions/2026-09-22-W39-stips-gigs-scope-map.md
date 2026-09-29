---
date: 2026-09-22
week: 2026-W39
type: decision-brief
topic: STIPs & Gigs — In/Out Scope Map, Discovery to Application (R1)
purpose: reference for the R1 Scope Alignment Workshop with Adrian Ang
status: SUPERSEDED, 29 Sep — the "who can discover/apply" question this doc flags as pending resolved to the 6 pilot agencies, not WOG-wide parity. Native apply was also never built; STIPs & Gigs shipped as discovery + FormSG-extraction only. See the [Epic A One-Pager](../prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md) for current state.
---

# STIPs & Gigs — Scope Map (Discovery to Application)

> ⚠️ **SUPERSEDED, 29 Sep.** This document's pending question ("who can discover/apply") is resolved: the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), not WOG-wide parity. The native-apply mechanics this doc calls "locked, ready to estimate" were also never built — the confirmed, shipped model is discovery + FormSG-link extraction, live in MVP. Kept as a historical record of the pre-decision options, not current scope.

**Status (historical, 22 Sep):** everything under "In Scope" is locked mechanics, ready to estimate. One item — who can discover/apply — is genuinely open and gates the rest. Nothing here should be read as final until the scope alignment workshop confirms the pending item.

---

## ⚠️ Pending — Not Yet In or Out

| Item | The question | Why it's not decided yet |
|---|---|---|
| **Who can discover, create, and apply for STIPs & Gigs** | Pilot-only (6 agencies), WOG-wide full parity, or a discover-WOG/apply-pilot hybrid? | Surfaced as a genuine disagreement between Rama and Michelle at the 22 Sep estimation discussion — not resolved. A proposal slide states full parity (Option B) as the direction, but this hasn't been confirmed as agreed scope. Blocks RBAC sizing and the estimate. |

**Everything below assumes this resolves before build starts — the mechanics don't change, only the population they apply to.**

---

## ✅ In Scope — Discovery

| Item | Detail |
|---|---|
| Officer login | WOG AD authentication |
| Unified Opportunities catalog | Officer lands on the catalog, sees ringfenced listings filtered to eligibility |
| Bookmark / Saved Jobs | Bookmark toggle on cards, dedicated "Saved Jobs" filter tab |

## ✅ In Scope — Creation

| Item | Detail | Firm? |
|---|---|---|
| Open posting creation | Any authenticated officer (population per pending item above) — no HR admin role gating | |
| Creation form | Title, description, agency, competencies, closing date | |
| Reporting Officer awareness | Mandatory checkbox: "I confirm my Reporting Officer is aware of this gig posting" | ⚠️ Not firm |
| Posting ownership | Creator automatically becomes Posting Owner | |
| Co-evaluators | Up to 2 co-evaluators by `.gov.sg` email, added at creation or edit, identical drawer permissions | |
| Custom questions fallback | Job description supports markdown/hyperlinks; poster can paste a FormSG link for bespoke screening questions (standard form is the default) | |

## ✅ In Scope — Publish & Lifecycle

| Item | Detail | Firm? |
|---|---|---|
| Instant publish | Posting goes live immediately on the catalog | |
| Auto-expiry | 30-day automatic listing expiration | ⚠️ Not firm |
| Manual close | "Close Vacancy" button; triggers 90-day retention countdown before candidate data purge | |

## ✅ In Scope — Application

| Item | Detail | Firm? |
|---|---|---|
| Native apply | In-app modal, no external redirect | |
| Pre-fill | Name, Email, Agency, Grade, competencies — pulled from officer profile | |
| Application fields | 2-3 standard free-text fields | |
| Declaration | Single consolidated checkbox: "I declare that all information submitted is accurate and I have informed my Reporting Officer" | |
| Profile-only data | No file upload — relies strictly on pre-filled CareerCompass profile data | |
| Target time | Under 2 minutes to submit | ⚠️ Not firm |

## ✅ In Scope — Notification & Review

| Item | Detail | Firm? |
|---|---|---|
| Poster alert | Instant transactional email: "New application received for [Job Title] from [Officer Name]" | ⚠️ Not firm |
| Review table | In-app table under "My Posted Gigs" — Name, Agency, Competency Match, Date Applied | |
| Co-evaluator access | Identical table view as the poster | |

## ✅ In Scope — Decision & Outcome

| Item | Detail |
|---|---|
| Offer / Reject | Action buttons directly in the review table |
| Status update | Applicant's in-app badge updates immediately: `Submitted` → `Offered` or `Not Selected` |

## ✅ In Scope — RBAC & Governance (cross-cutting)

| Item | Detail |
|---|---|
| 3-tier access model | Public Officer / Opportunity Poster-Collaborator / Central Admin |
| Drawer authorization | `poster_id == current_user OR current_user IN collaborators`, enforced at the application layer |
| Audit logging | Every applicant drawer/profile view or download logged |
| Orphaned posting fallback | **⚠️ Stale as of 23 Sep (R-27):** previously said ownership falls to a designated Agency HR POC. STIPs & Gigs has zero HR role, confirmed 23 Sep — this fallback is currently unowned, not assigned to HR. See [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27) |

---

## ❌ Out of Scope for R1

| Item | Category |
|---|---|
| Dynamic form builders / agency-specific custom question configuration | Application form |
| Multi-file PDF resume/portfolio uploads and automated parsing | Application form |
| Multi-stage ATS recruitment pipeline (shortlist, interview booking, scoring rubrics) | Review process |
| Automated candidate regret email campaigns | Review process |
| In-app notification center | Notifications |
| Offline coordination (poster/applicant connect via email/Teams for onboarding logistics) | Post-offer |
| In-app messaging or contract generation | Post-offer |
| Formal HR placement workflows | Post-offer |
| Recurring auto-reposting / automated reminder pings to extend closing dates | Lifecycle |
| Public archive browsing of closed postings | Lifecycle |
| Complex HR approval chains, role-based posting permissions, supervisor pre-clearance, departmental approval queues | Creation |
| Complex role handovers, temporary delegation, cross-agency permission inheritance trees | Collaboration |
| Automated FormSG webhook two-way sync, automated field parsing from external forms | FormSG fallback |
| Automated compliance reporting dashboards, real-time anomaly alerting | RBAC/Governance |
| Multi-tier agency hierarchy delegation, departmental viewing trees, ministry-wide applicant viewing portals | RBAC/Governance |

---

## One-Line Summary for the Workshop

**Six stages (Discovery mechanics, Creation, Publish, Application, Notification, Decision) are locked and ready to estimate, though four items within them (Reporting Officer awareness, auto-expiry, target time, poster alert) aren't yet firm. Post-Offer is now out of scope. One question — the population for Discovery, Creation, and Application — is unresolved and needs a decision before the estimate can be finalized.**

---

*Related: [STIPs & Gigs Backlog](../analyses/2026-09-22-W39-stips-gigs-backlog.md), [STIPs & Gigs Discovery-to-Application Brief](2026-09-22-W39-stips-gigs-discovery-access-brief.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-14, R-23)*
