---
feature: OTG Opportunities Data — File Upload
stage: Team Kickoff
date: 2026-06-11
owner: Michelle Yip
status: Draft
sprint-target: S5 (29 Jun–10 Jul 2026)
---

# OTG File Upload

**Stage:** Team Kickoff

**Last Updated:** 2026-06-11

**Owner:** Michelle Yip

**Status:** Draft

---

## Hypothesis

PSD Ops currently has no self-service way to push updated OTG opportunity data into CareerCompass. Without this, the catalogue depends entirely on engineering-run imports — a manual, fragile process that can't scale to weekly cadence.

**If we** give PSD Ops a secure, role-gated upload UI,
**then** the catalogue will stay current without engineering intervention,
**because** PSD Ops already owns the weekly OTG Excel export and just needs a reliable way to get it in.

**Supporting evidence:**
- OTG data is exported as an Excel file on a weekly cadence — the source already exists, the pipeline just has no front door
- OTEP-391 spike concluded: CFT (Cloud File Transfer) is the right virus-scan layer; AWS GuardDuty ruled out (more components, no compliance shortcuts)
- OTEP-397 has ACs for the UI already drafted — this PRD frames the "why" and the open questions that AC-writing couldn't answer
- Hao Eng flagged (2026-06-08): "only specific users can access this upload UI — how to identify them?" — role identity is the key open question before S5 build starts

---

## Strategic Fit

This is launch-gate infrastructure. Without a reliable, repeatable data refresh path, CareerCompass can't maintain catalogue quality post-launch. A stale catalogue (opportunities that have closed, missing new postings) directly damages officer trust — the single biggest risk to adoption in the first 30 days.

This feature is not officer-facing. It's ops infrastructure that makes the officer experience possible.

**Users affected:** PSD Ops team (small, internal — likely 2–5 people). Zero officer-facing changes.

**Effort estimate:** Low-medium. The pipeline (CFT → S3 → webhook → OTEP backend) is already designed (OTEP-391). This ticket is the UI layer + role-gate on top of proven architecture.

---

## Non-Goals

- **No drag-and-drop or bulk scheduling** — a simple file picker is enough for weekly manual uploads
- **No other data sources in S5** — OTG Excel only; the "Data Source" dropdown can exist in the UI for future extensibility but only "OTG" is live
- **No agency-facing upload** — this is PSD Ops only, not a self-service portal for posting agencies
- **No automated ingestion trigger** — the scheduler (OTEP-348) handles automation; this upload is the manual override / initial load path
- **No upload history or audit log UI** — the per-run log in OTEP-403 covers traceability; no separate UI needed for MVP

---

## Open Questions (discovery work before S5)

These must be resolved before this can be groomed into S5. They're the reason this is a Team Kickoff PRD, not a Solution Review.

| # | Question | Owner | How to resolve |
| - | -------- | ----- | -------------- |
| 1 | **Who exactly are the PSD Ops uploaders?** Named individuals or a role? Do they already have OTEP accounts, or does onboarding them require a separate step? | Michelle + Rama | 1:1 with Rama before S4 mid-sprint |
| 2 | **How is the upload role gated?** WOG AD group, POCDEX field, hardcoded list of profile IDs (OTEP-397 mocks a list — is that the real approach or a placeholder)? | Pow Hwee + Rama | Confirm in dependencies sync |
| 3 | **Where does the upload UI live?** A separate `/admin/upload` route, or within a broader admin dashboard that doesn't exist yet? | Michelle + Pow Hwee | Decision before S5 grooming |
| 4 | **What does success look like to PSD Ops?** Do they need row-level feedback (n rows imported, n skipped) or just pass/fail? | Michelle + Rama | Ask Rama directly |
| 5 | **CFT integration status** — is CFT available in the OTEP intranet environment already, or does infra setup remain? | Pow Hwee + Hao Eng | Confirm at S4 kickoff |
| 6 | **Scan timeout** — OTEP-397 references "timeout error after N seconds." What is N? CFT SLA? | Hao Eng | Check CFT docs / ask Fabian |

---

## Proposed Scope (pending open question resolution)

### Flow

1. PSD Ops user navigates to upload page (route TBD — see Q3)
2. If not authorised: shown "Not authorised" message, no upload UI visible
3. If authorised: sees file upload box (OTG source pre-selected or confirmed via dropdown)
4. Selects `.xlsx` file — non-Excel files rejected immediately in browser
5. Clicks Upload → file sent to CFT for virus scan
6. During scan: "Scanning file for security threats..." shown; Upload button disabled
7. Scan passes → CFT webhook fires to OTEP backend → ingestion job runs
8. Success: confirmation shown; summary of rows imported / skipped (if Q4 confirms this is needed)
9. Scan fails: "File failed security scan and was rejected" — user can retry
10. Backend error: "Something went wrong. Please try again." — form resets

### What's already designed (OTEP-397 + OTEP-391)

- UI ACs for happy path, virus scan failure, non-Excel rejection, polling state, 400/500 errors — all in OTEP-397
- Architecture decision: CFT over AWS GuardDuty — OTEP-391 concluded
- Row-level error display (bonus AC in OTEP-397) — include if Q4 confirms ops wants it

### What's not designed yet

- Role-gate implementation (Q1, Q2)
- Page routing and admin nav (Q3)
- Upload confirmation detail level (Q4)
- CFT environment readiness (Q5, Q6)

---

## Success Metrics

This is internal ops tooling — success is operational, not behavioural.

**Primary:** PSD Ops can upload a new OTG Excel file without engineering involvement, and the catalogue reflects the new data within [X minutes of upload — confirm with Pow Hwee based on pipeline runtime].

**Guardrails:**
- Upload failures do not corrupt existing catalogue data (OTEP-403 hardening handles this)
- Virus-infected files never reach the backend
- Unauthorised users cannot access the upload page

**Kill criteria:** If role-gate implementation requires > 3 days of eng work in S5 (due to WOG AD or POCDEX complexity), scope back to a hardcoded allowlist of profile IDs as an MVP and revisit proper role management in S6.

---

## Dependencies

| Dependency | Status | Blocks |
| ---------- | ------ | ------ |
| OTEP-391 — CFT vs GuardDuty spike | Done (CFT confirmed) | Architecture is set |
| OTEP-403 — Import hardening | S4 Must | Upload UI is pointless without a hardened pipeline |
| OTEP-348 — Ingestion scheduler | S4 Should | Upload is the manual path; scheduler is the automated path — both needed |
| CFT environment setup in intranet | Unknown (Q5) | Blocks build start |
| Role identity for PSD Ops (Q1, Q2) | Open | Blocks role-gate design |

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
| ---- | ---------- | ------ | ---------- |
| CFT not available in intranet environment by S5 | Medium | High — blocks the whole feature | Confirm with Pow Hwee / Fabian in S4 W1; escalate early if infra lead time is long |
| Role-gate requires WOG AD group setup (external process) | Medium | Medium — could slip S5 timing | Fall back to hardcoded profile ID list if process takes > 1 sprint |
| PSD Ops uploaders don't have OTEP accounts yet | Unknown | High — they can't log in to upload | Confirm with Rama immediately; onboarding may need to start in S4 |

---

## Discovery Plan (before S5 grooming, ~22 Jun)

1. **Call with Rama** (S4 W1) — confirm uploader identity, role expectations, success feedback needs (Q1, Q4)
2. **Pow Hwee check** (S4 W1) — role-gate mechanism, CFT environment status, upload route decision (Q2, Q3, Q5)
3. **Hao Eng** — CFT scan timeout value (Q6); he's already closest to the CFT spec from OTEP-391
4. **Decision by 22 Jun** — role-gate approach locked; routing decision made; OTEP-397 ACs updated with answers; story ready for S5 grooming

---

## Linked Tickets

- OTEP-397 — UI for OTG Excel file upload (Backlog)
- OTEP-391 — Spike: CFT vs GuardDuty (Done — CFT confirmed)
- OTEP-403 — OTG data import hardening (S4 Must)
- OTEP-348 — OTG ingestion scheduler + observability (S4 Should)

---

*Generated: 2026-06-11*
*Stage: Team Kickoff — discovery PRD. Promote to Solution Review once open questions 1–3 are resolved.*
*Next: call with Rama (Q1, Q4) · Pow Hwee check (Q2, Q3, Q5) · target S5 grooming readiness by 22 Jun*
