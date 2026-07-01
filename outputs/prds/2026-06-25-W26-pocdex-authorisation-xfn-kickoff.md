# POCDEX-Side Officer Authorisation

**Stage:** XFN Kickoff

**Last Updated:** 2026-06-25

**Owner:** Michelle Yip

**Status:** Draft

**Epic:** OTEP-337 (POCDEX API Integration)

**Gate:** MVP go-live, Nov 2026

---

## Hypothesis

Public officers from pilot agencies need to access CareerCompass from day one with no manual HR setup. Today there is no access control layer between WOG AD authentication and CareerCompass, and no automated provisioning path.

**If we** build an email domain allowlist as CareerCompass's authorisation gate, with POCDEX providing profile and ringfencing data after access is granted,
**then** every pilot agency officer can access CareerCompass immediately on first login with no HR intervention, and no officer outside the pilot group can reach the listing,
**because** Entra ID confirms the officer is a public officer and provides their email — and email domain is a reliable, always-present signal of which agency they belong to.

**Supporting context:**
- Identity platform is **Entra ID** (Microsoft). Officer identifier in the token is **email** (stable across agency transfers — confirmed 2026-06-25).
- Entra ID handles authentication ("who are you?"). CareerCompass owns authorisation ("can you access this?").
- Entra ID tokens do not carry a formal agency code field. Agency is determined by **email domain**.
- POCDEX feeds profile data and ringfencing rules after access is granted. It is not the access gate.
- 6 pilot agencies confirmed: PSD, ESG, MDDI, URA, MCCY, CAAS
- Officers who cannot authenticate via Entra ID (non-public service) never reach CareerCompass — blocked before OTEP is involved.

---

## Strategic Fit

This is a go-live gate, not a nice-to-have. No authorisation layer = no controlled access = launch blocked.

**Ladders to:** KR 3 — Deliver POCDEX-side authorisation (APA cycle). The provisioning log (Story 5) is the KR evidence artifact.

**Timeline pressure:** `uhdp-pocdex` production cutover is targeting ~23 Jul 2026. Integration testing can't start until then. Sprint 5 (29 Jun – 12 Jul) is the build window for Stories 1–4; Story 5 (logging) follows in S5/S6 alongside E2E testing.

---

## Non-Goals

- **POCDEX platform itself** (`uhdp-pocdex`) — owned by Pow Hwee and Daryll's team; OTEP is a consumer only
- **WOG AD authentication** — covered in Epic OTEP-80 / OTEP-350 (Fabian)
- **Competency data from POCDEX** — tracked separately under reference data (open item #18, Imelda's squad)
- **FormSG pre-fill from POCDEX data** — deferred to R1
- **Mid-session agency transfer** — MVP fallback is re-evaluation on next login; real-time webhook invalidation is post-MVP

---

## Solution Overview

Access is controlled at two levels. WOG AD is the first gate (authentication). CareerCompass is the second gate (authorisation).

**Access flow:**
1. Officer logs in via Entra ID
2. OTEP reads email from the token
3. OTEP extracts the email domain and checks it against the pilot domain allowlist (Story 1)
4. Domain not in allowlist → fail-closed, non-pilot UI state (Story 4). Officer cannot proceed.
5. Domain matches → access granted. OTEP auto-provisions account using email as the key (Story 2)
6. OTEP fetches POCDEX profile data and applies ringfencing rules
7. If POCDEX data not yet available → listing shows all opportunities unfiltered (OTEP-408 AC3 fallback). No access block.
8. Every login-triggered provisioning attempt writes to the audit log (Story 5)

**What this means in practice:** Access control is fully self-contained within OTEP at login. No call to POCDEX is needed to decide if someone gets in. A PSD officer logs in, domain matches, account created in milliseconds. A MOH officer logs in, domain not in the list, non-pilot state. POCDEX data enriches the experience after access is granted — it doesn't gate it.

**What OTEP owns vs what it doesn't:**

| Layer | Owner |
|---|---|
| Authentication — confirming officer identity | Entra ID / Fabian |
| Email in token | Entra ID (always present, stable) |
| Email domain allowlist + access decision | OTEP (Michelle / Léo) |
| Account auto-provisioning at first login | OTEP |
| Fail-closed for non-pilot domains | OTEP |
| Profile + ringfencing data feed | POCDEX → `uhdp-pocdex` platform (Pow Hwee / Daryll) |
| Edge case UI states | Amber (design) + OTEP (FE) |

**Edge cases in scope:**

| Scenario | OTEP behaviour |
|---|---|
| Pilot domain officer, POCDEX not yet synced | Access granted (domain confirmed pilot). Listing shows unfiltered until POCDEX syncs. |
| Non-pilot email domain (e.g. MOH officer) | Fail-closed — non-pilot UI state. No listing access. |
| Email missing or malformed in token | Fail-closed — deny by default, log the error |
| Same officer logs in again (account exists) | Idempotent — no duplicate account created |
| Domain allowlist check errors internally | Fail-closed — deny by default |
| Seconded officer at a pilot agency | Access determined by their email domain, not host agency. If email is `@moh.gov.sg` and seconded to ESG, they are blocked. Confirm intended behaviour. |

**Story 3 (profile pending) — removed from scope.** Email domain check is instant and always available from the Entra ID token. There is no scenario where a pilot agency officer is blocked waiting for data to arrive. Story 3's original edge case no longer exists.

---

## Success Metrics

| Metric | Target |
|---|---|
| Auto-provisioning rate | 100% of pilot agency officers provisioned on first login — zero manual setup tickets |
| Unauthorised access | 0% — no non-pilot officer reaches the listing under any error condition |
| Ringfencing fallback | Pilot officers with no POCDEX data see unfiltered listing, not an error — no access blocks from data lag |
| KR 3 evidence | Queryable log returns provisioning count by outcome on demand, no engineering help needed |

**Kill criteria:** If the fail-closed property cannot be verified by test before S5 closes, Stories 2 and 4 do not ship — access control leakage at go-live is a hard stop.

---

## Stories (Priority Order)

| # | Story | Priority | Gate |
|---|---|---|---|
| 1 | Pilot agency email domain allowlist | P0 | Pilot agency email domains confirmed (all 6 agencies) |
| 4 | Non-pilot domain — fail-closed | P0 | Story 1 done; non-pilot UI state design (Amber) |
| 2 | Auto-provision account on first login | P0 | Story 1 done |
| 5 | Provisioning event logging | P1 | Stories 2 + 4 done; PII review complete |
| ~~3~~ | ~~Profile pending state~~ | ~~Removed~~ | Access is instant from email domain — this edge case no longer exists |

Full AC for all 5 stories: [`2026-06-18-W25-pocdex-authorisation-stories.md`](../archive/2026-W25-Jun15-Jun21/decisions/2026-06-18-W25-pocdex-authorisation-stories.md)

---

## Dependencies

| Dependency | Owner | Status | Risk |
|---|---|---|---|
| Pilot agency email domains — all 6 confirmed | Michelle → Fabian / agencies | 🔴 Open | Blocks Story 1 — need exact domain strings (e.g. `psd.gov.sg`, `esg.gov.sg`) for each pilot agency |
| Seconded officer email domain behaviour | Michelle → Adrian | 🔴 Open | If seconded officer's email domain is non-pilot, they are blocked. Is that the intended behaviour? |
| Entra ID / WOG AD authentication live (OTEP-350) | Fabian | 🟡 In Progress | Access flow can't be tested E2E without auth live |
| Non-pilot UI state design | Amber | 🔴 Not started | Story 4 needs a named state before pointing |
| `uhdp-pocdex` production cutover | Pow Hwee / Daryll | Target ~23 Jul 2026 | 🔴 High — E2E integration testing blocked until live; Stories 1–4 can be built + unit-tested against seed data before then |
| POCDEX push payload schema — field names, types, null behaviour | Pow Hwee → Daryll | 🔴 Open (open item #31) | Blocks Story 2 ACs (account provisioning fields) |
| Unique officer identifier in push payload (`officerId` or equivalent) | Pow Hwee → Daryll | 🔴 Open | Blocks Story 2 idempotency check |
| PII scope review — which fields can appear in logs | Michelle → security review | 🔴 Open | Blocks Story 5 implementation |
| Logging infrastructure decision (app logs / DB table / audit store) | Pow Hwee | 🔴 Open | Blocks Story 5 scoping |
| POCDEX sync lag estimate | Michelle → Daryll | 🔴 Open | Informs how long officers may see unfiltered listing; low risk but good to know |

---

## Open Questions

- [ ] **Pilot agency email domains** — What is the exact email domain for each of the 6 pilot agencies? → @Fabian / @agencies, needed before Story 1 can be written into Jira. Email is stable (confirmed), so domains are the only input needed.
- [ ] **Seconded officer access** — A seconded officer's email domain reflects their home agency. If a MOH officer is seconded to ESG, they would be blocked by the domain check. Is this the right behaviour for MVP, or do seconded officers at pilot agencies need access? → @Adrian, policy decision
- [ ] **Story 3 scope** — With WOG AD token confirming pilot agency at login, is "profile pending" still a meaningful state, or does it collapse into the unfiltered listing fallback (OTEP-408 AC3)? → @Pow Hwee, confirm before S5 planning
- [ ] **POCDEX payload schema** — Field names and types in the push payload, especially the stable unique identifier for idempotency → @Pow Hwee / @Daryll, needed before Story 2
- [ ] **Non-pilot UI state** — What does a MOH officer see? "Not available to your agency yet" or something else? → @Amber, needed before Story 4 is pointed
- [ ] **Logging infrastructure** — App logs, DB table, or audit store? → @Pow Hwee, needed before Story 5
- [ ] **PII in logs** — Can `officerId` and `agencyCode` appear in the audit log? → @Michelle to route to security/privacy review before Story 5 ships

---

## Sign-Offs Needed

| Stakeholder | What they're confirming |
|---|---|
| Pow Hwee | Technical approach + payload schema + logging infrastructure |
| Daryll (POCDEX team) | Push payload contract + sync lag estimate + production support SLA |
| Amber | UI state designs for "profile pending" and non-pilot states |
| Adrian | Epic scope and pilot agency list (6 confirmed: PSD, ESG, MDDI, URA, MCCY, CAAS) |
| Fabian | WOG AD auth timeline — Story 3 is untestable until OTEP-350 is live |

---

*Pairs with: [Epic scope doc](../archive/2026-W25-Jun15-Jun21/decisions/2026-06-18-W25-epic-pocdex-authorisation.md) · [Story ACs](../archive/2026-W25-Jun15-Jun21/decisions/2026-06-18-W25-pocdex-authorisation-stories.md) · [POCDEX integration PRD](../../PM-skills-ALL-1/02-prd/prd-pocdex-integration.md)*
