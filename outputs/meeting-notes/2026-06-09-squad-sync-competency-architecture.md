---
date: 2026-06-09
meeting: Squad Sync — Competency Architecture & UHDP Integration
squad: OTEP Core
attendees: Rama Moorthy, Pow Hwee TAN, Adrian ANG, Michelle (+ Core squad)
type: Technical architecture + product alignment
---

# Meeting Notes: Squad Sync — Competency Architecture & UHDP Integration

**Date:** 9 June 2026

**Squad:** OTEP Core

**Key attendees:** Rama Moorthy (tech lead), Pow Hwee TAN, Adrian ANG

---

## Summary

Deep dive into the MVP competency mapping model and its long-term architecture trajectory. Three major themes: (1) the current 2-step derivation logic and its known gaps, (2) UHDP as the replacement for the "products" integration layer, and (3) the end-state vision where Compass becomes the competency SSOT. No final decisions on sync model or SSOT ownership — these are policy questions that require HR stakeholder engagement before Thursday's discussion. PostHog analytics model also discussed but unresolved.

---

## 1. Current MVP Design — How Competency Derivation Works

**Source systems:** HRPS + Cumulus. Data (job ID, position ID) flows via "products" into Compass.

**2-step derivation logic (confirmed for MVP):**

| Step | Logic | Source |
|---|---|---|
| Step 1 | Map competencies from job ID | HR systems (HRPS/Cumulus) |
| Step 2 | Map additional competencies via role profile (job family + function + grade) | Central role profile template |
| Dedup | Remove overlaps between Step 1 and Step 2 | Compass logic |

**Why Step 2 exists:** Gap-filling only. Some users have no competencies tagged in HR systems; some competencies are missing from the central profile. Dual-source blending is intentional for MVP but acknowledged as temporary.

---

## 2. Problems Identified with the Current Design

### A. "Role ID" is not a real HR entity

Role ID is a derived construct (job family + function + grade) — it doesn't exist in HR systems. The team flagged this as adding unnecessary complexity and misaligning with real HR data structures. End-state direction: remove Role ID entirely, use job ID only.

### B. Central role profile template may not match agency-level configuration

HRPS already has expected competencies tied to job IDs, but Compass still applies the central role profile (Step 2) which may not reflect actual agency configurations.

Risk example: "Project Manager" at two different agencies may have different expected competencies — the central template can't capture this variation. Some assignments will be incorrect.

### C. Position ID vs Job ID problem (major — flagged by Adrian ANG)

Additional competencies are currently tied to **position ID** (the seat), not the officer. This creates lifecycle issues:
- Outgoing officer loses competencies incorrectly
- Incoming officer inherits ambiguous/incorrect competency data

This is an HR system design issue upstream of Compass, but it has direct consequences for the data Compass consumes. Needs clarification with HRPS team.

---

## 3. Proposed Mid-Term Architecture — UHDP Integration

**Key proposal:** Replace "products" layer with UHDP as the primary data source.

**What UHDP would provide:**
- Job ID
- Position ID
- Expected competencies tied to job ID
- Possibly endorsed competencies

**Proposed new flow:**
- Step 1: Query UHDP using user ID → return full competency dataset
- Step 2: Central competency bank remains as fallback (temporary)

**Shift:** From "derive competencies via Excel role profile" → "fetch directly from UHDP per user"

**UHDP data requirements are not yet defined.** Rama to specify exactly what fields and logic are needed from the UHDP API before architecture can be finalised.

---

## 4. End-State Vision

| Area | Current state | End state |
|---|---|---|
| Competency management | Excel role profiles + HR systems | Central Compass competency module |
| Data ownership | HR systems hold competencies | Compass = SSOT; HR systems consume from Compass |
| Role ID | Derived construct in use | Removed; job ID only |
| Excel | Role profile spreadsheets in use | Removed; all mappings via API |
| Fallback | Step 2 via central template | No fallback needed if HR consistently tags job IDs |

**Key dependency for end state:** HR must consistently tag competencies to job IDs. If they don't, there's no fallback and gaps remain unresolved. Requires SOP enforcement and possibly reporting/escalation mechanisms.

---

## 5. Sync Strategy — Still Open

Two options discussed:

**Option 1: Two-way sync (Compass ↔ HR systems)**
- Covers expected, additional, and endorsed/proficiency competencies
- Risks: highly complex, conflict resolution logic, multi-system consistency

**Option 2: Compass as SSOT (preferred direction)**
- All edits happen only in Compass
- HR systems have read-only view; data pushed one-way
- Requires policy change with HR owners; possibly blocking edits in HRPS

**Current lean:** Option 2 (Compass as SSOT). Not final — requires:
- Engagement with HRPS/WD on usage patterns before committing
- Policy decision from HR stakeholders (not just a system design choice)
- Rama's note: this is policy-driven, not just technical

---

## 6. PostHog Analytics

PostHog approved as analytics tool. Use cases include tracking user engagement by agency (e.g. logins).

**Problem:** Agencies should see their own data — WD shouldn't be the sole data holder.

**Options still under investigation:**
- Embed dashboards into Compass
- Give agency admins PostHog access directly
- Scheduled email reports

No decision. Rama to report back on feasibility.

---

## Decisions Made

| Decision | Status | Notes |
|---|---|---|
| MVP retains 2-step competency derivation | Confirmed | Step 2 is temporary gap-filler only |
| Long-term goal: eliminate Excel + role profile dependency | Confirmed | |
| End state: Compass competency module as central authority | Confirmed direction | |
| UHDP replaces products layer | Confirmed direction | Timeline aligned to MVP; data requirements TBD |
| Prefer Compass as SSOT over 2-way sync | Directional only | Requires policy alignment first |

---

## Action Items

| Task | Owner | By when |
|---|---|---|
| Define UHDP API data requirements (fields, logic, expected vs endorsed competencies) | Rama | Before Thu discussion |
| Align with UHDP team on feasibility and design assumptions | Rama | Before architecture finalisation |
| Evaluate sync strategy (2-way vs SSOT) — bring recommendation | Rama (led) | Thu discussion |
| Engage HRPS/WD on ownership model and policy implications | Adrian ANG + team | Required before SSOT decision |
| Investigate PostHog embedding/access model | Rama | Report back (date TBC) |
| Define analytics data requirements to avoid missing telemetry at MVP launch | Product team | Before MVP |
| Clarify position ID vs job ID design with HRPS — who owns this? | Adrian ANG | TBC |

---

## Open Questions

- [ ] What exactly does UHDP return? By job ID or user ID? Expected vs endorsed competencies? Pre-aggregated or raw? — Rama
- [ ] Where should competency derivation logic live — UHDP or Compass? — Rama + Pow Hwee
- [ ] Will HR stakeholders accept Compass as SSOT? What policy changes are required? — Adrian ANG
- [ ] What happens in the end state if HR does NOT tag competencies to job IDs? — needs SOP design
- [ ] How does the position ID lifecycle issue get resolved? Workaround or HRPS system change? — Adrian ANG + HRPS team
- [ ] How do agencies access their PostHog data? Embedded, direct login, or reports? — Rama

---

## Risks

| Risk | Severity | Notes |
|---|---|---|
| UHDP data requirements undefined — major blocker for architecture | High | No API contract agreed |
| Central template mismatch across agencies | High | Same role → different expected comps per agency |
| Position ID lifecycle issue affects data accuracy | High | HR system design issue, Compass can't fix it unilaterally |
| End-state competency module not on roadmap — MVP dependencies may persist indefinitely | Medium | No committed timeline |
| HR stakeholders may not accept SSOT shift | Medium | Policy change required; not in Compass team's control |
| Missing analytics telemetry at MVP if PostHog model decided too late | Medium | Define requirements before build |

---

## Context — Where This Fits

This discussion is upstream of two active stories:
- **OTEP-349** ([Spike] Competency matching with OTEP-Core) — currently Backlog, Sprint 3. The UHDP integration question directly affects what this spike should investigate.
- **OTEP-112** (Search and add competencies to profile) — the competency bank source is listed as "pending WD" in the PRD. The SSOT decision determines where that bank ultimately lives.

The "Compass as SSOT" direction, if adopted, also resolves the open PRD item: "Data source for competency bank source: pending WD."

**Thu discussion** (referenced in action items) — confirm what meeting this is and who's in the room.

---

## PM's Framing (for SteerCo / internal comms if needed)

**Problem:** Competency data is fragmented across HR systems, Excel role profiles, and Compass logic — creating inconsistency, duplication, and unclear ownership that will worsen at scale.

**Direction:** Centralise competency management in Compass (via UHDP integration, Compass as SSOT). Reduces fragmentation and simplifies architecture — contingent on policy alignment with HR stakeholders.

---

*Processed: 2026-06-09*
*Tickets in scope: OTEP-349, OTEP-112*
*Related PRDs: prd-officer-profile.md, prd-my-development.md*
*Next: confirm Thu discussion attendees and format; Rama to come with UHDP requirements and sync recommendation*
