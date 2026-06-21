# User Stories: POCDEX-side Officer Authorisation (Pilot Agencies)

**Date:** 2026-06-18

**Epic:** POCDEX-side Officer Authorisation (parent: OTEP-337)

**Owner:** Michelle Yip

**Priority order:** Story 1 → Story 2 → Story 4 (P0 / Leverage) · Story 3 → Story 5 (P1 / Neutral)

**Data contract note:** Stories 1, 2, and 4 share the same POCDEX push payload. Confirm the `agencyCode` field name, type, and null behaviour with Pow Hwee before writing these into Jira — all three ACs depend on it.

---

## Story 1 — Whitelist pilot agency codes in OTEP authorisation layer

**P0 / Leverage**

> As the system, I need to know which agency codes belong to the pilot group, so that only officers from those agencies can be auto-provisioned into OTEP.

### Acceptance Criteria

1. A configurable allowlist of pilot agency codes exists in OTEP's authorisation layer: `PSD`, `ESG`, `MDDI`, `URA`, `MCCY`, `CAAS`.
2. The allowlist is stored in configuration (not hardcoded in business logic) so it can be updated without a code deploy.
3. When the system receives a POCDEX push payload, it reads the `agencyCode` field and checks it against the allowlist before any provisioning action is taken.
4. An agency code that matches the allowlist returns a `pilot = true` result; any other value (including null, empty string, or an unrecognised code) returns `pilot = false`.
5. The allowlist check is a synchronous, in-process operation — it does not make an external API call.
6. A unit test covers: all 6 valid codes return `pilot = true`; at least 3 invalid codes (unrecognised, null, empty) return `pilot = false`.

### Out of scope

- Adding or removing agencies from the allowlist post-MVP (process TBD with Adrian).
- Validation that the agency code exists in POCDEX itself — OTEP trusts the push payload.

### Dependencies

- POCDEX push payload schema from Pow Hwee's `uhdp-pocdex` platform (confirm field name and type before implementation).
- MSSQL vs Postgres schema decision (due 20 Jun) — engineers need this before they can write the config store.

### Notes for engineer

The allowlist is the first gate in the provisioning chain — Stories 2 and 4 both call it. Design it as a shared utility, not inline logic, so both stories can reuse it cleanly.

---

## Story 2 — Auto-provision OTEP account on POCDEX push

**P0 / Leverage**

> As an officer from a pilot agency, when POCDEX pushes my profile to OTEP, I want my OTEP account to be created automatically, so I can log in without any manual setup by HR.

### Acceptance Criteria

1. When OTEP receives a POCDEX push payload for an officer whose `agencyCode` is on the pilot allowlist (Story 1), OTEP creates an officer account automatically with no human intervention.
2. The provisioned account is populated with: officer name, agency code, and any other fields required for ringfencing (confirm field list with Pow Hwee before implementation).
3. If an account already exists for that officer (identified by a stable unique identifier — confirm with Pow Hwee whether this is `officerId`, `nric`, or another field), the system updates the existing record rather than creating a duplicate.
4. Provisioning completes synchronously within the POCDEX push webhook response cycle (or asynchronously with a confirmed retry strategy — engineer to propose).
5. A provisioning event is written to the audit log on every successful creation or update (fields defined in Story 5).
6. If provisioning fails (e.g. database write error), the system returns a non-2xx status to POCDEX so the push can be retried. The officer is not left in a partial state.
7. End-to-end test (against seed DB): officer payload from a pilot agency → account exists in OTEP with correct fields. Officer payload from a non-pilot agency → no account created (Story 4 path).

### Out of scope

- Provisioning officers from non-pilot agencies (those are handled in Story 4).
- Mid-session agency transfer (P2 per PRD — webhook session invalidation is post-MVP).
- FormSG pre-fill from POCDEX data (deferred to R1).

### Dependencies

- Story 1 (allowlist) must exist before this story can be built.
- POCDEX push payload schema and unique identifier field — confirm with Pow Hwee before Sprint 5 starts.
- `uhdp-pocdex` integration environment (currently seed DB only; live integration blocked until ~23 Jul cutover).
- MSSQL vs Postgres schema decision (20 Jun).

### Notes for engineer

The idempotency check (AC 3) is critical. POCDEX may push the same officer multiple times (e.g. profile update). The provisioning handler must be safe to call repeatedly without creating duplicates or wiping existing data.

---

## Story 4 — Handle missing or invalid agency code gracefully (fail-closed)

**P0 / Leverage**

> As an officer whose agency code is missing, null, or not in the pilot list, when I try to log in to OTEP, I want to see a clear, non-technical message, so I know OTEP is not available to me yet — not that the system has crashed.

### Acceptance Criteria

1. When OTEP receives a POCDEX push payload where `agencyCode` is null, empty, or not on the allowlist (Story 1), no OTEP account is created and no ringfence is applied.
2. If an officer with an invalid/non-pilot agency code attempts to log in, they are shown a state that communicates OTEP is not available to their agency — not a generic 500 error or blank page. Exact copy TBD with Amber/designer; the engineering contract is: a distinct, named UI state that can be populated with text.
3. Under no error condition (null code, malformed payload, DB write failure, network timeout) can an officer from a non-pilot agency reach the opportunity listing or have a ringfence applied that grants them access.
4. The fail-closed behaviour is verified by a test case: officer payload with `agencyCode = null` → no account created, no listing access.
5. The fail-closed behaviour is verified by a test case: officer payload with a valid-format but non-pilot code (e.g. `MOH`) → no account created, no listing access.
6. A provisioning failure event (distinct from a successful provisioning event) is logged with enough detail to distinguish: (a) non-pilot agency, (b) null/missing code, (c) system error during check. Fields defined in Story 5.

### Out of scope

- Telling the officer when their agency will be added to the pilot (no date communication in MVP).
- Automatic recovery if an officer's agency code is later corrected in POCDEX — they will need to be re-provisioned on the next push.

### Dependencies

- Story 1 (allowlist) must exist before this story can be built.
- UI state design — Amber to confirm the non-pilot state design before this is pointed.
- POCDEX push payload schema (same dependency as Stories 1 and 2).

### Notes for engineer

"Fail-closed" means the default is no access. If the allowlist check itself errors (e.g. config not loaded), the system should deny access and log the error, not grant it. Treat an unknown result as non-pilot.

---

## Story 3 — Handle pre-POCDEX login edge case (profile pending)

**P1 / Neutral**

> As an officer who logs into OTEP before my POCDEX profile has been synced, I want to see a clear message that my profile is being set up, so I know to come back later and don't think the system is broken.

### Acceptance Criteria

1. When an officer successfully authenticates via WOG AD (OTEP-350) but OTEP finds no matching POCDEX profile for their identifier, the officer is shown a "profile pending" state — not a 404, 500, or generic error.
2. The "profile pending" state includes: a plain-language explanation that the account is being set up, and a support contact or next step so the officer is not left stuck. Exact copy TBD with Amber; engineering contract is a named UI state with a text slot.
3. The officer in a "profile pending" state cannot access the opportunity listing.
4. The "profile pending" state is triggered only by a missing POCDEX profile — it is not shown for officers with invalid agency codes (those see the non-pilot state from Story 4) or for system errors (those see a generic error state).
5. A unit test covers: officer authenticated but no POCDEX record → "profile pending" state returned; officer authenticated and POCDEX record exists → normal provisioning flow continues.

### Out of scope

- Automatic re-check or polling for when POCDEX syncs (MVP: officer returns manually).
- Estimating or displaying a sync ETA to the officer.
- Auto-provisioning from partial POCDEX data.

### Dependencies

- WOG AD authentication (OTEP-350, Fabian) must be live for this to be testable end-to-end.
- POCDEX sync lag estimate from Daryll — helps confirm how often this edge case will occur and whether the copy needs to set expectations about timing.
- UI state design — Amber to confirm the "profile pending" state design before pointing.

### Notes for engineer

The trigger condition is: authenticated officer, no POCDEX push received yet for that identifier. This is distinct from: authenticated officer, POCDEX push received but agency code invalid (Story 4). The two states should be separate code paths so they can be logged and reported distinctly.

---

## Story 5 — Provisioning event logging

**P1 / Neutral**

> As the product team, I need a queryable log of every provisioning event, so I can verify that 100% of pilot officers were auto-provisioned and demonstrate this for KR 3 evidence.

### Acceptance Criteria

1. Every provisioning attempt — successful or failed — writes a structured log event. The event includes at minimum:
   - `timestamp` (ISO 8601, UTC)
   - `officerId` (the stable unique identifier used for provisioning — confirm field name with Pow Hwee)
   - `agencyCode` (as received in the POCDEX push payload; null if absent)
   - `outcome` (enum: `provisioned`, `updated`, `rejected_non_pilot`, `rejected_null_code`, `failed_system_error`)
   - `errorDetail` (string; populated only when `outcome = failed_system_error`; empty otherwise)
2. Log events are written to the existing OTEP logging infrastructure (confirm with Pow Hwee which system — application logs, a DB table, or a dedicated audit log store).
3. Log events are retained for a minimum of 12 months from the date of the provisioning event.
4. A named query or dashboard filter exists (or is documented for creation) that returns: total provisioning events by outcome, filterable by date range and agency code. This is the query surface Michelle uses to produce the KR 3 evidence artifact.
5. Logs do not contain NRIC, full name, or other PII beyond what is strictly necessary for the audit trail. Confirm PII scope with the security/privacy review before implementation.
6. A test confirms that a successful provisioning flow writes a log event with `outcome = provisioned` and all required fields populated.
7. A test confirms that a non-pilot rejection writes a log event with `outcome = rejected_non_pilot`.

### Out of scope

- A user-facing admin UI for viewing logs (CLI or log system query is sufficient for MVP).
- Real-time alerting on provisioning failures (post-MVP monitoring concern).

### Dependencies

- Stories 2 and 4 must exist before this story is meaningfully testable end-to-end.
- Confirmation of the logging infrastructure from Pow Hwee.
- PII review to confirm which officer fields can be stored.
- Retention period confirmation — 12 months is a reasonable default; check if there's a GovTech or agency data policy that sets a different requirement.

### Notes for engineer

This story is the evidence artifact for KR 3 in the APA cycle. The query surface (AC 4) is as important as the log writes. "Logs exist" is not enough — Michelle needs to be able to pull a number (e.g. "450 officers provisioned, 0 rejected with system error") on demand without engineering help.

---

## Jira paste format

Copy each block below as the story description in Jira. Parent epic: OTEP-337.

---

### OTEP-[TBD] Story 1: Whitelist pilot agency codes

**As the system,** I need to know which agency codes belong to the pilot group, so that only officers from those agencies can be auto-provisioned into OTEP.

**Acceptance Criteria:**

1. A configurable allowlist of pilot agency codes exists: `PSD`, `ESG`, `MDDI`, `URA`, `MCCY`, `CAAS`.
2. The allowlist is stored in configuration, not hardcoded — updatable without a code deploy.
3. On receiving a POCDEX push, the system reads `agencyCode` and checks against the allowlist before any provisioning action.
4. Match → `pilot = true`. Non-match, null, or empty → `pilot = false`.
5. The allowlist check is synchronous and in-process (no external API call).
6. Unit tests: all 6 valid codes pass; at least 3 invalid inputs (unrecognised code, null, empty string) fail.

**Out of scope:** Adding/removing agencies post-MVP. Validating agency code existence in POCDEX.

**Dependencies:** `uhdp-pocdex` push payload schema (field name + type). MSSQL vs Postgres decision (20 Jun).

**Engineer note:** Design as a shared utility — Stories 2 and 4 both depend on it.

---

### OTEP-[TBD] Story 2: Auto-provision OTEP account on POCDEX push

**As an officer from a pilot agency,** when POCDEX pushes my profile to OTEP, I want my OTEP account created automatically so I can log in without manual HR setup.

**Acceptance Criteria:**

1. POCDEX push with a pilot `agencyCode` → OTEP account created automatically, no human step.
2. Account populated with: officer name, agency code, and ringfencing fields (confirm full field list with Pow Hwee).
3. If account already exists for that officer (confirm unique identifier — `officerId` or equivalent), update the record, do not duplicate.
4. Provisioning completes within the webhook response cycle or via an async retry strategy (engineer to propose).
5. A provisioning event is written to audit log on every successful creation or update (fields per Story 5).
6. On failure, return non-2xx to POCDEX for retry. Officer is not left in a partial state.
7. E2E test (seed DB): pilot agency payload → account exists with correct fields. Non-pilot payload → no account created.

**Out of scope:** Non-pilot provisioning (Story 4). Mid-session agency transfer (P2/post-MVP). FormSG pre-fill (R1).

**Dependencies:** Story 1 (allowlist). Push payload schema + unique identifier from Pow Hwee. `uhdp-pocdex` live environment (~23 Jul). MSSQL vs Postgres decision (20 Jun).

**Engineer note:** The idempotency check (AC 3) is critical — POCDEX may push the same officer multiple times. Handler must be safe to call repeatedly.

---

### OTEP-[TBD] Story 4: Handle missing or invalid agency code (fail-closed)

**As an officer whose agency code is missing or not in the pilot list,** when I try to log in, I want a clear message — not a crash or blank screen — so I know OTEP is not available to me yet.

**Acceptance Criteria:**

1. POCDEX push with null, empty, or non-pilot `agencyCode` → no OTEP account created, no ringfence applied.
2. If this officer attempts to log in, they see a named, non-pilot UI state (not a 500 or blank). Copy TBD with Amber — engineering contract: a distinct, named state with a text slot.
3. **Fail-closed hard requirement:** Under no error condition (null code, malformed payload, DB error, timeout) can a non-pilot officer reach the listing or receive ringfence access.
4. Test: `agencyCode = null` → no account, no listing access.
5. Test: valid-format but non-pilot code (e.g. `MOH`) → no account, no listing access.
6. Failure log event written with outcome distinguishing: non-pilot agency / null code / system error (fields per Story 5).

**Out of scope:** Telling the officer when their agency will be added. Auto-recovery when code is corrected in POCDEX.

**Dependencies:** Story 1 (allowlist). Non-pilot UI state design from Amber. Push payload schema.

**Engineer note:** If the allowlist check itself errors, default is deny — not grant. Treat unknown result as non-pilot.

---

### OTEP-[TBD] Story 3: Handle pre-POCDEX login edge case (profile pending)

**As an officer who logs in before my POCDEX profile has synced,** I want to see a clear "profile pending" message — not a system error — so I know to come back later.

**Acceptance Criteria:**

1. Officer authenticates via WOG AD but no POCDEX profile exists for their identifier → "profile pending" state, not 404/500.
2. "Profile pending" state includes: plain-language explanation and a support contact or next step. Copy TBD with Amber — engineering contract: named state with text slot.
3. Officer in "profile pending" state cannot access the listing.
4. "Profile pending" is triggered only by a missing POCDEX profile — distinct from non-pilot state (Story 4) and system errors.
5. Unit tests: authenticated officer with no POCDEX record → profile pending. Authenticated officer with POCDEX record → normal provisioning continues.

**Out of scope:** Auto-polling for POCDEX sync. ETA display. Provisioning from partial POCDEX data.

**Dependencies:** WOG AD auth (OTEP-350). POCDEX sync lag estimate from Daryll (for copy framing). "Profile pending" UI design from Amber.

**Engineer note:** This is a distinct code path from Story 4. Log them separately so they appear as different outcomes in the audit log.

---

### OTEP-[TBD] Story 5: Provisioning event logging

**As the product team,** I need a queryable log of every provisioning event so I can verify 100% of pilot officers were auto-provisioned and evidence KR 3 for the APA cycle.

**Acceptance Criteria:**

1. Every provisioning attempt (success or failure) writes a structured log event with: `timestamp`, `officerId`, `agencyCode`, `outcome` (enum: `provisioned` / `updated` / `rejected_non_pilot` / `rejected_null_code` / `failed_system_error`), `errorDetail` (populated only on system error).
2. Log events written to the existing OTEP logging infrastructure — confirm system with Pow Hwee (app logs, DB table, or audit store).
3. Log events retained for minimum 12 months.
4. A named query or documented filter returns: total events by outcome, filterable by date range and agency code. This is the KR 3 evidence query surface.
5. Logs do not contain NRIC, full name, or PII beyond what is strictly necessary — confirm PII scope with security/privacy review.
6. Test: successful provisioning → log event with `outcome = provisioned`, all fields populated.
7. Test: non-pilot rejection → log event with `outcome = rejected_non_pilot`.

**Out of scope:** Admin UI for logs (CLI/log system query sufficient). Real-time alerting on failures.

**Dependencies:** Stories 2 and 4 (for E2E log testing). Logging infrastructure confirmation from Pow Hwee. PII review. Retention period policy check.

**Engineer note:** AC 4 (the query surface) is as important as the log writes. "Logs exist" is not the bar — Michelle needs to pull a provisioning count on demand without engineering help.

---

*Pairs with: [Epic](2026-06-18-W25-epic-pocdex-authorisation.md) · [Impact sizing](../analyses/2026-06-18-W25-impact-sizing-pocdex-authorisation.md) · [POCDEX PRD](../../PM-skills-ALL-1/02-prd/prd-pocdex-integration.md)*
