---
date: 2026-06-15
type: Async / Quick Sync
attendees: Michelle, Rama
topic: OTG File Upload — MVP scope
related: OTEP-397
---

# File Upload Scope Check — Rama Sync

## Summary

Rama confirmed the MVP file upload flow is a simple happy path only. No validation feedback to the user, no error handling UI. Operational support for data issues is handled entirely via backend report extraction. Rama to take to Pow Hwee to decide whether this enters S5 scope. Expansion of the upload feature (error feedback, richer UX) is explicitly post-MVP.

---

## Decision Made

**MVP file upload = happy flow only.**

- User selects the opportunity type they are uploading for
- User attaches the Excel file
- User sees a confirmation: "Your file has been uploaded"
- No in-UI feedback on data quality or validation errors
- Any data issues are surfaced via backend report extraction (operational support path, not officer-facing)

**Why:** Keeps the scope tight for MVP. Data validation and error feedback are a UX investment that doesn't unblock the pilot.

**Owner:** Rama → Pow Hwee (decision on S5 inclusion)

---

## Action Items

| Task | Owner | Due | Notes |
|------|-------|-----|-------|
| Take file upload scope to Pow Hwee — decide S5 in or out | Rama | This week | Happy flow only; no error UI |
| Update OTEP-397 spike description to reflect happy flow scope | Michelle | Before S5 grooming | ACs should reflect confirmation-only UX, not validation feedback |

---

## Open Questions

- [ ] Does Pow Hwee need anything from Michelle before the Rama/PH conversation?
- [ ] What does "backend extraction of report" look like operationally — is this a manual pull by the team, or an automated report? Clarify before writing upload ACs.
- [ ] Who is the user uploading the file? Officer admin, agency HR, or OTEP internal team? Confirm role-gate assumption still holds.

---

## Context

OTEP-397 is a S4 spike: discover the flow and UI for OTG Excel file upload, define the role-gate mechanism, upload route, CFT integration requirements, and produce ACs ready for S5 grooming. This sync narrows the scope of what that spike needs to produce — ACs should be written for happy flow only, with a clear out-of-scope note for validation error UI.

**Post-MVP expansion scope** (explicitly deferred): error feedback in UI, validation results surfaced to uploader, richer operational reporting.

---

*Quick sync · Mon 15 Jun 2026 · Michelle + Rama*
