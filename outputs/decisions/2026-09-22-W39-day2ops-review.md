---
date: 2026-09-22
week: 2026-W39
type: review-note
topic: Day2Ops (Compass D2 Ops Support Model) — document review
---

# Review: Day2Ops (Compass D2 Ops Support Model)

**Source:** [Day2Ops Confluence page](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2696349979/Day2Ops), DRAFT dated 21 Sep 2026.

---

## Overall

Solid structure — clear roles, a two-stream intake (Service Requests vs. Bugs/Incidents), a routing table by owning team, and a self-service troubleshooting FAQ. Genuinely usable as a BO-facing doc. But several real gaps need fixing before it's finalized.

---

## Gaps Identified

1. **Two contacts are unfilled placeholders.** §6's table has `[CONFIRM — support email]` and `[CONFIRM — Teams/Slack channel]` still in brackets. Annex A's email template references "Compass Support <support email>" — if the email option is meant to work as a real fallback path (§4.1 explicitly offers it as an alternative), this needs resolving before publishing.

2. **CIE ownership needs a staffing check.** The page assigns Competency Inference Engine to the Intel team (board 14855). The R1 risk register and this week's threads reference an open "CIE PM vacancy" — worth confirming Intel is actually staffed and active as an owning team, not just assigned on paper.

3. **Triage mechanism across three boards is unclear.** §3.2 says BOs raise directly on the owning team's board, "there is no separate support board." But the Product Support Team (Imelda, Ram, Michelle) is supposed to triage every request — without a shared queue, how do they see new tickets across three separate boards? Needs a stated mechanism (saved filter, shared label/component, dashboard).

4. **Manual Excel import is a real Day-2 failure mode, not called out.** Competencies and Role Profiles come from an Excel sheet extracted from HRPS/CUMULUS, manually imported into Compass today. A common "wrong competency data" report may actually mean the import didn't run — not a Compass bug. The document doesn't name this as a likely triage path.

5. **§5 (Incidents) is thin.** Just support hours and a link to a separate Incident Management page. Given VAPT and incident-response readiness are live open items in the R1 risk register, worth confirming that linked doc is itself current.

6. **Annex B (End-to-End Workflow Diagram) is referenced but not included** in the content reviewed — either missing from the page or an embed that didn't transfer. A process doc that promises a diagram and doesn't deliver one is a rough first impression for BOs.

---

## Cross-Reference: CAM Deferral Rationale

Yesterday's Product x OTEP thread cited "Day2 Ops for public officers" as part of the rationale for deferring CAM integration to R2. But this document explicitly puts **access/account provisioning out of scope** (§1: "route through the relevant channel"), and there's no "Access/Account Issues" request type defined. If the CAM-defer rationale depends on Day2 Ops absorbing that risk, this is a real gap to reconcile with Adrian — the document as written doesn't support that claim.

---

## Update (22 Sep, later same day)

Today's OTEP Squad Sync stress-tested the same Day2Ops model directly with Rama, and confirmed several of the gaps above are live, substantive issues — not just document drafting gaps:

- The missing "agency end user" request path (gap area not explicitly called out above, but structurally the same as gap #3 — no clean intake mechanism for anyone other than a Business Owner).
- The thin §5 Incidents section (gap #5) — confirmed as the single biggest unresolved area in the squad sync discussion, with no agreed after-hours coverage, on-call roster, or vendor obligation.
- No named incident-command deputy — a new gap this review didn't surface, but directly relevant to the CIE staffing/ownership concern in gap #2 above (same pattern: key-person dependency without continuity).

See [OTEP Squad Sync — Day 2 Ops / Support Model Review](../meeting-notes/2026-09-22-W39-otep-squad-sync-day2ops.md) for the full debrief, including five risks (24x7 coverage, vendor obligations, governance integration, ownership ambiguity, single point of failure) that should be added to the R1 risk register.

---

*Related: [OTEP Squad Sync — Day 2 Ops Debrief](../meeting-notes/2026-09-22-W39-otep-squad-sync-day2ops.md), [R1 Scope Alignment Thread](../meeting-notes/2026-09-21-W39-r1-scope-alignment-cumulus-otep-thread.md)*
