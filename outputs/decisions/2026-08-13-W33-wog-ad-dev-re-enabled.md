# Status Note: WOG AD Re-Enabled in Dev

**Date:** 2026-08-13

**Type:** Status update — blocker resolution confirmation

**Related:** [2026-08-11-W33-wog-ad-dns-domain-decision-slack-thread.md](../meeting-notes/2026-08-11-W33-wog-ad-dns-domain-decision-slack-thread.md)

---

## What happened

WOG AD is re-enabled in dev and working.

This confirms the fix from the Aug 11 domain decision thread landed: Pow Hwee's decision to drop the separate auth DNS name in favor of `env.careercompass.gov.sg`, plus fanxu.wang's IaC/ALB updates and Keycloak repo cleanup, resolved Léo's 403 Forbidden / inconsistent redirect errors.

## What this closes

From the Aug 11 thread's open questions:
- ✅ "Has Léo's 403/redirect issue been confirmed resolved once the domain change and IaC/ALB updates land?" — yes, in dev.

From that thread's action items, presumed complete (verify before closing formally):
- Resubmit WOG AD form reflecting the domain decision — @Pow Hwee TAN
- Update IaC and ALB rules for the domain change — @fanxu.wang
- Remove WOG AD IdP provider from Keycloak repo — @fanxu.wang

## Still open

- **Prod confirmation** — this is dev-only so far. Don't close OTEP-71 (WOG AD login) until confirmed in prod/UAT environment too.
- **WOG AD approval clock** — the Aug 11 thread flagged that resubmitting the form might reset the previously tracked "2-4 week approval clock" (open-items #26). Confirm with Pow Hwee whether that clock is now running and from when.
- **open-items #26 and #42** — both referenced this thread as the most recent update; update both to reflect dev re-enablement, not just the domain decision.

## Next step

Confirm with Pow Hwee/fanxu.wang whether this is ready to promote beyond dev, and get a date on the WOG AD approval clock now that the form's been resubmitted.

---

*Generated: 2026-08-13*
