# Discovery: CareerCompass Access Control

**Date:** 2026-06-25

**Owner:** Michelle Yip

**Status:** Decision reached — 2026-06-25

**Feeds into:** POCDEX authorisation PRD (XFN Kickoff)

---

## What we're trying to decide

WOG AD handles authentication. CareerCompass owns authorisation. Those are two different questions, and we haven't fully designed the second one.

**The question isn't "who is this person?"** — WOG AD answers that.

**The question is: "should this authenticated public officer be allowed into CareerCompass right now?"**

The answer changes depending on where we are in the rollout. During pilot, the answer is "only if you're from one of 6 agencies." Post-pilot, the answer might be "any public officer." That transition needs a design.

---

## What's settled

| Decision | Detail |
|---|---|
| Authentication | WOG AD only. No Singpass for MVP. |
| Who never reaches us | Anyone who can't authenticate via WOG AD — non-public service staff, vendors, contractors. They hit an auth failure before CareerCompass is involved. We don't need to handle them. |
| Pilot agencies | PSD, ESG, MDDI, URA, MCCY, CAAS (6 confirmed) |
| Authorisation owner | CareerCompass / OTEP. We decide who gets in after WOG AD says yes. |
| Rollout approach | Pilot first, then expand. Access control is our lever for this. |

---

## The scenarios we need to design for

These are the people who **pass WOG AD** but hit our authorisation layer:

### Scenario A — Pilot agency officer, POCDEX synced
Officer from ESG logs in. WOG AD passes. POCDEX has already pushed their profile. OTEP finds their record, agency code matches allowlist.

**Current plan:** Account auto-provisioned. Access granted. Ringfencing applied.

**Decision needed:** None. This is the happy path.

---

### Scenario B — Pilot agency officer, POCDEX NOT yet synced
Officer from PSD logs in on their first day. WOG AD passes — they're a valid public officer. But POCDEX hasn't pushed their profile to OTEP yet (sync lag, HR entry delay, etc.).

**Current plan:** Show "profile pending" state. Officer waits.

**Problem with this:** WOG AD has already confirmed they're a public officer from a pilot agency. We're blocking someone we know is legitimate because of a data plumbing lag.

**Open question:** Should we trust WOG AD's confirmation of agency membership here, or do we require POCDEX to sync first? If WOG AD carries agency information in the token, we may not need POCDEX to have synced before granting access.

---

### Scenario C — Non-pilot agency officer
Officer from MOH logs in. WOG AD passes — valid public officer, just not from a pilot agency yet.

**Current plan:** No OTEP account created. Officer sees a restricted/non-pilot state.

**Decision needed:** What exactly do they see?
- Option 1: "CareerCompass is not available to your agency yet. Watch this space."
- Option 2: Hard redirect or generic unavailable page
- Option 3: Waitlist / interest capture ("Let us know when you're ready")

This is a comms decision as much as a technical one. Amber needs a brief before she can design this state.

---

### Scenario D — Officer transfers agencies mid-session or between sessions
Officer moves from ESG (pilot) to MOH (non-pilot). Or from MOH to ESG.

**Current plan:** MVP fallback — access control re-evaluated on next login only. No real-time session invalidation.

**Risk:** An officer who transfers out of a pilot agency retains access until they log out and back in. Is that acceptable for MVP?

**Current plan:** Officer who joins a pilot agency from a non-pilot agency gets access on their next login, once POCDEX has pushed the updated agency code.

---

### Scenario E — Officer exists in POCDEX but their agency code is null or unrecognised
POCDEX pushed a profile, but the agency code field is empty, malformed, or maps to an agency not in our allowlist.

**Current plan:** Fail-closed. No account created, no access. Officer sees a non-pilot/error state.
**This is the right call.** The default must be deny, not allow.

---

### Scenario F — Contract or seconded officers
Some public officers are seconded into pilot agencies from non-pilot agencies, or are on short-term contracts. Their WOG AD status may be valid but their POCDEX agency code might reflect the originating agency, not the host.

**Unknown:** Does POCDEX carry agency code for seconded officers? Which agency does it show — home or host?

**Risk:** A seconded officer at ESG might have a non-ESG agency code in POCDEX and get blocked.

---

## The core design decision: what does "authorisation" actually check?

There are three models. We need to pick one before the XFN kickoff.

### Model 1 — POCDEX-gated (current plan)
OTEP only lets in officers whose POCDEX profile exists AND whose agency code is on the pilot allowlist.

- ✅ Strong access control — we know exactly who we're letting in
- ✅ Evidence artifact for KR 3 (provisioning log)
- ❌ Sync lag creates friction for new joiners (Scenario B)
- ❌ POCDEX cutover (~23 Jul) is a hard dependency — can't test E2E until then
- ❌ Edge cases around seconded officers (Scenario F) are unresolved

### Model 2 — WOG AD carries the gate
If WOG AD tokens include agency information (which they may, via the AD group or claims), OTEP could skip POCDEX for the access decision and use the token directly. POCDEX would still feed the account with profile data, but it's not the gatekeeper.

- ✅ No sync lag — access decision is instant at login
- ✅ Removes the POCDEX cutover as a blocking dependency for access
- ❌ Need to confirm WOG AD token carries reliable agency data — **this is an open question for Pow Hwee / Fabian**
- ❌ Loses the provisioning event log as a clean KR 3 evidence artifact (would need a different log source)

### Model 3 — Open to all WOG AD users (no pilot gating)
Any officer who authenticates via WOG AD gets into CareerCompass. Pilot rollout is managed through content (which opportunities are visible) rather than access control.

- ✅ Simplest implementation — removes the authorisation layer problem entirely
- ✅ No POCDEX dependency for access
- ❌ Loses pilot rollout control — all public officers can access from day one
- ❌ Likely not acceptable to Adrian / senior management — rollout control is a stated requirement

**My read:** Model 1 is the right long-term architecture (clean audit trail, strong access control). But we should confirm Model 2 with Pow Hwee because if WOG AD tokens carry agency, it could unblock Scenario B and reduce POCDEX dependency for the launch gate.

---

## Decision reached — 2026-06-25

**WOG AD tokens carry agency code.** Architecture is Model 2.

This resolves the biggest open question and simplifies the design significantly:

- OTEP reads `agencyCode` from the WOG AD token at login — no POCDEX dependency for the access decision
- Pilot allowlist check runs against the token value, not a POCDEX push
- Scenario B dissolves — pilot agency officers get access immediately at login, even if POCDEX hasn't pushed yet
- Story 3 (profile pending as an access blocker) is **no longer needed in its original form**

**Updated access flow:**
```
WOG AD login
    ↓
OTEP reads agencyCode from token
    ↓
Pilot allowlist check
    ├── Pilot agency → access granted
    │       ↓
    │   POCDEX synced? → apply ringfencing
    │   POCDEX not synced? → show unfiltered listing (OTEP-408 AC3 fallback)
    │
    └── Non-pilot / null → non-pilot state (no access)
```

**POCDEX role after this decision:**
POCDEX is no longer the access gate. It is the data source for ringfencing (which opportunities the officer sees) and profile fields. Stories 1, 2, 4, and 5 still apply — but the trigger is "token confirms pilot agency" not "POCDEX push received."

## What's still open

### From Pow Hwee / Fabian (engineering)
- [ ] Exact field name for agency code in the WOG AD token (confirm with Fabian before Story 1 is written)
- [ ] For seconded officers: which agency code does the WOG AD token carry — home or host?

### From Daryll (POCDEX team)
- [ ] POCDEX sync lag estimate — still relevant for ringfencing fallback (how long will an officer see unfiltered results?)
- [ ] Does POCDEX distinguish seconded vs direct-hire officers?
- [ ] Exact `agencyCode` field name and format in the POCDEX push payload (still needed for profile/ringfencing data)

### From Adrian / senior management
- [ ] Non-pilot officer experience — "not available yet" message, hard block, or waitlist / interest capture?

### From Amber (design)
- [ ] Non-pilot state design — what does a MOH officer see?
- [ ] Is there a LifeSG standard "you don't have access to this service" state?
- [ ] Story 3 (profile pending) — now only relevant if we want to distinguish "pilot agency officer with no POCDEX data yet" from "generic unfiltered view." Confirm if this state still needs its own design or if the unfiltered fallback is enough.

---

## Recommended next steps

1. **Confirm with Pow Hwee whether WOG AD tokens carry agency data** — if yes, it changes the architecture (Model 2 becomes viable, Scenario B dissolves).

2. **Decision from Adrian on access control intent** — are we gating by pilot agency for compliance/control reasons, or just operationally? The answer changes how strict the non-pilot state needs to be.

3. **Brief Amber on Scenarios B and C** — she needs the non-pilot state and "profile pending" state designs before Stories 3 and 4 can be pointed.

4. **Schedule a session with Daryll on sync lag** — the "profile pending" experience design depends on knowing whether this edge case is rare (< 1 hour) or common (up to 24 hours).

5. **Confirm seconded officer handling with Daryll** — if POCDEX carries home agency code for seconded officers, we need an exception path or pilot agency list that accounts for this.

---

*Feeds into: [POCDEX authorisation PRD (XFN Kickoff)](../prds/pocdex-authorisation-xfn-kickoff.md) · [Epic scope](../archive/2026-W25-Jun15-Jun21/decisions/2026-06-18-W25-epic-pocdex-authorisation.md)*
