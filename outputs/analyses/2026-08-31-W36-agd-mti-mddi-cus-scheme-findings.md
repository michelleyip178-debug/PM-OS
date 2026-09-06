# AGD/MTI/MDDI Common-User-Scheme Findings — CUS-Deploy and CUS-AO

**For:** Imelda's Tuesday WD employment-profile-change session — resolves the Mobility-2 (CUS) routing question flagged in her run sheet (P2 prep item, and the P2-priority "not yet defined" row in her prioritisation table).

**TL;DR:** CUS-Deploy and CUS-AO are not a new, undefined scheme. They're Secondment and Transfer respectively, wearing different HR terminology. Mobility-2 doesn't need new product rules — it needs Mobility-1's (Secondment) and Mobility-4/5's (Transfer) existing rules applied, with one added constraint: CUS-Deploy's parent agency can only be AGD, MTI, or MDDI.

---

## The two CUS variants, mapped to what Compass already handles

| CUS term | Data behaviour | Maps to | Parent agency constraint |
|---|---|---|---|
| **CUS-Deploy** | Officer holds a position in their parent agency *and* a position in the deployed agency at the same time — dual-position, same as a secondment | **Secondment** (Mobility-1 / H2) | Parent agency can only be **AGD, MTI, or MDDI** |
| **CUS-AO** | Officer's parent agency changes entirely — no dual position, old agency drops off | **Transfer** (Mobility-4/5) | None — behaves like any other transfer |

**Why this matters for tomorrow:** Imelda's brief already has working rules for both underlying behaviors — Mobility-1's "dual position, seconded agency shows as primary" and Mobility-4/5's "wrong/mixed agency after the move." CUS officers don't need a third rule set. They need the existing Secondment and Transfer logic applied, gated by the parent-agency check for CUS-Deploy.

---

## Answering Imelda's two direct questions (P2 prep)

**"Do these schemes get different Job IDs?"**
No evidence of a distinct Job ID scheme for CUS officers. The data behavior (position held, agency shown) is identical to Secondment/Transfer — there's no separate identity or ID-issuance path unique to CUS. If Job IDs differ, it's inherited from whichever underlying pattern applies (Secondment vs. Transfer), not from CUS status itself.

**"Are MDDI pilot users affected?"**
Yes, potentially — MDDI is one of the three eligible parent agencies for CUS-Deploy. Any MDDI pilot officer who is CUS-Deploy'd (not CUS-AO'd) will show the same dual-position pattern as a secondment: home agency (MDDI) plus deployed agency, both live at once. This is the case to test if a pilot officer's profile ever shows a missing or wrong posted agency — check whether they're CUS-Deploy (should resolve like Secondment) before assuming it's a data gap.

---

## What this means for Mobility-2's status in tomorrow's ranking

Imelda's brief currently has Mobility-2 flagged "AGD/MTI onboarding resolved; scheme rules not yet defined" and routes the open question to POCDEX. With this finding:

- **The scheme rules are defined** — they're Secondment's and Transfer's rules, not a new set.
- **What's still open:** whether "correct posted agency" for CUS-Deploy specifically means "seconded/deployed agency shows as primary" (matching Secondment's convention) or something else. This is the same open sub-question already flagged under H2 ("for a secondment specifically — should the officer see their home agency or the seconded agency as primary?") — CUS-Deploy doesn't introduce a new version of this question, it's the same one.
- **Recommend to the BOs:** fold Mobility-2 into Mobility-1's test coverage for CUS-Deploy cases, and into Mobility-4/5's coverage for CUS-AO cases, rather than carrying it as a separately-blocked P2 item. The interim "degrades gracefully, doesn't show blank" test can be upgraded to "matches Secondment/Transfer behavior" once this mapping is confirmed with the BOs tomorrow.

---

*Source: Michelle, 2026-08-31. Feeds Imelda's Tuesday WD session (P2 prep item) and the Mobility-2 line in her BO prioritisation run sheet.*
