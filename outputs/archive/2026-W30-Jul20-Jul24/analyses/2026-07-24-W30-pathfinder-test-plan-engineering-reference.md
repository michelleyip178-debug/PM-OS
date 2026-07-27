---
date: 2026-07-24
week: 2026-W30
topic: Pathfinder Test Plan — Engineering Reference
status: reference — ticket gaps, decision history, and dependency notes for the Consolidated Test Plan (Pathfinder)
---

# Pathfinder Test Plan — Engineering Reference

**What this is:** ticket gaps, decision history, and dependency notes for the Pathfinder Opportunities test plan (companion to [Consolidated Test Plan — Pathfinder](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934) on Confluence). This content used to live on a separate Confluence "Engineering Reference" child page; that page was deleted 2026-07-24 to avoid maintaining duplicate copies, so this file is now the only copy. This file is for engineers, QA, and PM tracking — not needed to execute UAT.

---

## Feature: CSC Connectivity — ⚠️ No test cases (no AC exists)

*Ticket: OTEP-679 (Connectivity between CSC and CareerCompass), assigned Fanxu Wang*

OTEP-679 currently has **no description or acceptance criteria in Jira** — confirmed both in the 2026-07-22 `/grooming-close` scorecard and again on this pass (2026-07-24). No test cases can be drafted until the ticket is actually scoped. This is a grooming gap, not a test-writing gap — flag to Fanxu/Adrian before Sprint 7 planning rather than guessing at CSC integration behavior.

---

## POCDEX Code Table Ingestion — ⚠️ Out of scope for UAT (spike, not a feature)

*Ticket: OTEP-445 ([Spike] Approaches to import POCDEX code table from POCDEX)*

This is a 2-point investigation spike into *how* to ingest the POCDEX code table going forward (API vs. SFTP — POCDEX doesn't have an API endpoint for this yet). It has no user-facing behavior and produces a recommendation document, not a shippable feature — not testable via UAT. Worth tracking as a dependency for whatever ingestion mechanism eventually gets built, but it doesn't belong in the test plan until it resolves into an actual story.

---

## Open Items & Decisions Referenced in the Test Plan

This plan references a few open items and decisions that live in Michelle's local trackers (Jira/Confluence access varies by role). Full content is reproduced below so nobody needs repo access to understand the context behind a test case.

### Referenced by: Login/Authentication section — test data note

**Open item #26 — WOG AD onboarding** (tracker: `00-hub/open-items.md`)

Intranet URL `careercompass.gov.sg` submitted to unblock the 2–4 week WOG AD approval clock (decision 2026-05-22). Single-URL investigation resolved 2026-06-02 (FE internet zone, BE intranet, one registered URL — also enables mobile viewing). Fabian provided the WOG AD form 2026-06-08; Pow Hwee filled it in 2026-06-10, starting the 2–4 week approval clock. Fabian posted the client ID, tenant ID, and OAuth endpoints 2026-06-12 — WOG AD onboarding itself is done.

**Current blocker (as of 2026-06-30):** Léo needs to create a client in Azure AD for Keycloak and retrieve its secret — believes this is configurable via Terraform but hasn't confirmed the approach or a timeline yet. No ETA as of the last update.

**Owner:** Pow Hwee (WOG AD form — done) / Léo (Keycloak client config — in progress, no ETA)

**Why it matters here:** gates OTEP-71/110/304/305 (the Login/Authentication test cases in this plan) and CSC SSO. Until this clears, Login/Auth execution likely runs against the Azure/Entra AD mock (OTEP-444), not real WOG AD.

---

### Referenced by: earlier discussion of OTEP-130 (FormSG apply flow scope)

**Open item #57 — OTEP-130 (FormSG apply flow) scope cut** (tracker: `00-hub/open-items.md`) — **Resolved 2026-07-20**

Pow Hwee confirmed FormSG does not support webhooks. This confirmed Michelle's 2026-07-08 working direction as the only viable path: **all net-new scope is cut** (no webhook, no submission tracking, no officer email, no poster notification), since all three depended on a webhook firing. OTEP-130's remaining scope (pre-redirect notice, FormSG new-tab open, labelled Apply button) is likely functionally identical to what Sprint 3 already shipped via US-18/OTEP-319.

**Open follow-up (not blocking the scope-cut resolution):** with no webhook and no submission tracking, OTEP has no visibility into whether STIP/Gig applications actually happen — worth checking whether this undercuts the North Star metric (development actions completed) for these opportunity types. Also still open: a Jira housekeeping call on whether to close OTEP-130 as a duplicate of US-18/OTEP-319, or keep it as a thin ticket for traceability.

---

### Referenced by: Competency Matching section — cross-squad dependency note

**Sprint 7 planning / architecture decision, 2026-07-23** (source: meeting notes, engineering sync ahead of SIT/UAT)

**Decision:** competency matching moves from label matching to competency-code matching. Michelle raised the risk of duplicate competency names with different IDs — label matching is fragile and could cause silent mismatches. The team agreed matching should use competency bank IDs (codes), not names. The latest OTG file will contain competency codes; competency code becomes the source of truth for mapping.

**Why it matters for this plan:** the Competency Matching test cases (UAT-COMP-001 through 013, from OTEP-336/570) were written against ACs that predate this decision. The functional behavior they test (presence-only matching, fallback on endpoint failure, no proficiency comparison) should still hold, but the underlying matching mechanism (codes vs. labels) changed the same day these stories were last groomed. Worth a quick reconfirm with engineering before executing this section.

**Related, unresolved as of 2026-07-24:** unmatched competency codes are silently dropped (confirmed behavior, not hypothetical) with no monitoring or exception reporting defined yet. Competency code governance (ownership, versioning, reconciliation) also has no assigned owner. Neither blocks this test plan directly, but both are worth flagging if UAT surfaces unexpected competency-matching gaps.

---

### Referenced by: Login/Authentication section — UAT-AUTH-018 (data gap row)

**⚠️ "Decision #10, owner Rama" — reference could not be resolved**

OTEP-111's Jira description flags the mid-session pilot-removal scenario as `[NEEDS AC — decision #10, owner Rama]`. This `#10` does **not** match Michelle's local open-items tracker (item #10 there is an unrelated, already-resolved item about Search/OTEP-130 MVP scope from 2026-05-08) or the decisions log. It likely refers to a decision register or numbering scheme Rama or the Core squad maintains that isn't visible from this workspace.

**Flagging honestly rather than guessing:** if you can point to where this decision #10 actually lives, it should replace this note so UAT-AUTH-018 can get a real AC before execution.
