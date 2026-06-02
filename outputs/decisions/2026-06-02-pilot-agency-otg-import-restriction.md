---
title: Pilot Agency Restriction for OTG Bulk Import (Sprint 3)
date: 2026-06-02
owner: Michelle
status: draft — for Fanxu
relates_to: D-016, OTEP-358, Sprint 3 OTG import
---

# Decision: Restrict Sprint 3 OTG bulk import to MVP pilot agencies

## The decision

**Scope the Sprint 3 OTG competency bulk import (Fanxu) to the 6 MVP pilot agencies only: PSD, ESG, MDDI, URA, MCCY, CAAS (~5,400 officers).** Do not import OTG data for the remaining 24 agencies (~108K officers).

## Why

- The senior-mgmt implementation-details doc (2026-06-02) confirms the MVP pilot is exactly these 6 agencies, ~5,400 officers, onboarded in staggered pairs.
- OTG onboarding for the remaining 24 agencies is **halted** — they're not coming onto the platform until the R1–R4 rollout reaches them, and OTG itself sunsets March 2028.
- D-016 already set OTG sync as a **one-time port, no ongoing automated sync** — pilot agencies are driven to adopt CareerCompass directly. Restricting the import to the pilot-6 is the natural scope boundary for that one-time port.
- Importing all 108K officers' OTG data now is wasted effort: it's data for agencies that won't use the platform for months-to-years, and it bloats the import + validation surface for Day-1.

## What this means for the import

- Filter the OTG Excel import to records belonging to the 6 MVP agencies.
- Confirm the agency identifier in the OTG export that maps cleanly to PSD/ESG/MDDI/URA/MCCY/CAAS (pairs with the nil-date handling spike, OTEP-358).
- Staggered-pairs rollout means even within the 6, we may sequence imports — but scope the *build* to handle the 6, not all 30.

## Open question for Fanxu

- Does the OTG export carry a clean agency field to filter on, or do we need a mapping table? (Ties to reference-data dependency #18 — Imelda's squad owns agency master data.)
- For R1 (Jan 2027), the pilot expands to WSG, PA, MSF. Build the filter as a configurable agency allowlist, not a hardcoded 6, so R1 onboarding doesn't need a code change.

---

## Draft Slack to Fanxu

> Hi Fanxu — decision on the OTG bulk import scope for Sprint 3:
>
> Restrict the import to the **6 MVP pilot agencies only: PSD, ESG, MDDI, URA, MCCY, CAAS** (~5,400 officers). We're not importing the other 24 agencies — senior mgmt confirmed OTG onboarding for them is halted, and OTG sunsets March 2028 anyway. This lines up with D-016 (one-time port, pilot agencies driven to CareerCompass directly).
>
> Two asks:
> 1. Can you confirm the OTG export has a clean agency field we can filter on for these 6? If it needs a mapping table, flag it — that ties into the reference-data dependency with Imelda's squad.
> 2. Build the agency filter as a **configurable allowlist**, not hardcoded — R1 in Jan 2027 adds WSG/PA/MSF, and I don't want that to need a code change.
>
> This pairs with the nil-date spike (OTEP-358). Shout if anything here changes your Sprint 3 estimate.

---

*Draft 2026-06-02. Finalise after Squad Sync / before pinging Fanxu. Log to decisions-log.md once sent.*
