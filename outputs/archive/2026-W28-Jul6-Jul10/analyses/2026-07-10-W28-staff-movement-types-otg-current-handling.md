# Staff Movement Types — Current OTG Handling

**Purpose:** Extract, from the POCDEX-OTG as-is, exactly which staff movement types exist and how OTG's current pipeline handles each one today. Straight extraction — no proposed changes.

**Source:** [POCDEX-OTG as-is](2026-07-10-W28-pocdex-otg-as-is.md)

---

## Movement Types and Current Handling

| Movement Type | How OTG Currently Handles It | Mechanism |
|---|---|---|
| **Exit from service** (resignation, retirement, contract end) | Account is deactivated, never deleted — historical Results Chain is preserved. | Agency transmits `Employment Status = Withdrawn` → triggers OTG's "Withdrawn" logic. `Employment Status` is not editable in the OTG UI; it flows straight from POCDEX. |
| **No Pay Leave (NPL), >90 continuous days** | Officer cannot log in, even though technically still "in service." This is a known failure mode, not a designed graceful state. | By design, inactive records are **not sent to POCDEX** at all while on NPL — so OTG has nothing to act on. The officer hits an authentication error rather than a clean "on leave" state. Root cause of the login-loop failure mode. |
| **Transfer to another agency** | No distinct handling in OTG's own logic beyond what the standard fortnightly POCDEX sync provides — Agency field updates from POCDEX, non-editable in UI. | POCDEX field `Agency` → OTG field `Location`, not editable in UI. Whatever POCDEX reports as current agency is what OTG reflects on the next fortnightly load. |
| **Secondment** (present agency differs from home/owner agency) | Tracked via two distinct fields rather than a single agency value — a data structure retained from the legacy ODIN account model, specifically to keep seconded officers accurately represented. | "Owner Agency" (permanent org) and "Present Agency" (current posting) are both maintained in the current mapping. No further business logic described beyond storing both values. |
| **Internal role/department change (within agency)** | Designation and Job Family can be manually updated by the officer via Role Selection in the OTG UI — the only editable fields in the entire POCDEX→OTG mapping. | `Position 1` → `Designation` and `Position 1 – Job Family 1` → `Job Family 1`, both editable via Role Selection. All other fields (identity, employment status, agency, RO relationship) are read-only, sourced from POCDEX. |
| **Reporting Officer (RO) change** | Not reliably handled — a known, named gap affecting ~3,000 officers. | HRPS doesn't copy the previous year's ADP form RO forward to the current year; this requires manual assignment, which often fails to trigger in the integration. Flagged explicitly as "The MOE/HRPS Interface Flaw." |
| **Movement into a non-POCDEX-integrated system** (e.g. Synapxe on SuccessFactors, A*STAR's separate SFTP integration) | Falls outside OTG's standard sync path entirely. | When officers move between these systems and WOG-standard HRPS/CUMULUS, duplicate accounts or orphaned records commonly result — named as a specific, recurring risk, not a hypothetical. |
| **Adjunct/inactive status** (distinct from NPL — no exact match found in OTG's own documented logic) | Not explicitly modeled as its own case in the OTG as-is material — the closest documented behavior is the NPL login-loop failure mode. | No distinct field or logic for "adjunct" as such was found in the POCDEX→OTG field mapping or lifecycle rules — worth confirming with Rama/TECQ whether "adjunct" is a real HRPS/Cumulus status distinct from NPL, or whether it's being used loosely to describe the same underlying situation. |

---

## What This Extraction Surfaces

- **Only two movement types have explicit, named OTG-side logic:** Exit (via the "Withdrawn" trigger) and internal role/department change (via editable Role Selection fields). Everything else — transfer, secondment, NPL, non-integrated system moves — is handled either implicitly (whatever POCDEX reports flows through on the next sync) or not handled at all (RO gaps, non-POCDEX system moves).
- **Secondment has a data model but no described business logic.** OTG keeps "Owner Agency" and "Present Agency" as separate fields, but the as-is material doesn't describe what OTG *does* with that distinction (e.g. which agency's postings the officer sees) — only that both values are captured.
- **NPL is the one movement-adjacent state that actively fails today**, by design: inactive records are withheld from POCDEX, which produces a login error rather than a clean "on leave, can't log in" experience.
- **"Adjunct" as a distinct status doesn't appear anywhere in the OTG as-is material.** This is worth flagging directly — it's the term used in CareerCompass's own open item #37, but the source-of-truth documentation for OTG doesn't use it. Either it's synonymous with NPL, or it's a status this pipeline doesn't yet account for at all.

---

*Generated: 2026-07-10*
*Related: [POCDEX-OTG as-is](2026-07-10-W28-pocdex-otg-as-is.md), [POCDEX Officer Movement — Questions for BOs](2026-07-10-W28-pocdex-officer-movement-bo-questions.md)*
