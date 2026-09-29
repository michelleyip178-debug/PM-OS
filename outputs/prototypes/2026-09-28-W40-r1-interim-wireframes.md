---
date: 2026-09-28
week: 2026-W40
type: interim-wireframe
scope: CareerCompass R1 (Opportunities Marketplace)
status: PM DRAFT — NOT FINAL DESIGN
author: Michelle Yip
purpose: Unblock engineering conversations only (grooming, estimation) while R-10 (no designer confirmed) is open
related:
  - outputs/prds/2026-09-23-W39-r1-release-one-pager.md
  - outputs/prds/2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md
  - outputs/analyses/2026-09-16-W38-r1-risk-register.md
---

# R1 Interim Wireframes (PM Draft)

> ⚠️ **RETIRED 29 Sep.** Li Ting Kway is confirmed as R1's designer (see [R-10](../analyses/2026-09-16-W38-r1-risk-register.md)) and already has end-state screens for this scope — she was briefed on the current scoping the same day. These interim sketches are no longer the working reference for anything; don't bring them into tomorrow's (30 Sep) design/scope/grooming session. Kept here only as a historical record of what PM-drafted stopgap coverage looked like while R-10 was open. Do not present these to Adrian, Mark, GK, or any BO as "the design" — that was already true, and is more true now that real screens exist.

Covers the design items in scope per Section 8 of the [Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md) and [Epic B](../prds/2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md). **All types render on one shared Opportunities page and one shared card component** — the type badge and Apply-button behavior are the only things that vary; there is no separate page or screen per opportunity type.

**Genuinely new for R1** (no MVP equivalent — Internal Jobs, IJR, and Secondment weren't in Compass's catalog before): the discovery catalog itself, the bookmark toggle, and the HRPS/Cumulus, OTG-landing-page, and hosting-HR-system redirect signals (Sections 2a–2c).

**Carried forward from MVP, not new design work** (Sections 2 and 3): the FormSG deep-link pattern and the disabled-Apply "contact poster" state. Both already shipped for STIPs & Gigs — sketched here only to confirm they still fit inside the new shared-card layout, not to redesign them from scratch.

Not sketched at all: the cross-HR-system access disclosure — depends on R1's interim answer to the auth gap landing first (still open, Adrian/Michelle).

---

## 1. Discovery Catalog (Opportunities list/card view)

```
+--------------------------------------------------------------+
|  Opportunities                     [ Search...        ] [🔍] |
|  Filters: [ Type v ] [ Agency v ] [ ★ Saved Jobs ]            |
+--------------------------------------------------------------+
|  +----------------------------+  +----------------------------+
|  | [Type badge: STIPS & GIGS] |  | [Type badge: INTERNAL JOB] |
|  | Posting Title               |  | Posting Title               |
|  | Agency name                 |  | Agency name                 |
|  | Short 1-2 line description   |  | Short 1-2 line description   |
|  |                    [🔖 Save] |  |                    [🔖 Save] |
|  |          [ Apply → ]        |  |          [ Apply → ]        |
|  +----------------------------+  +----------------------------+
|  (repeat as grid/list, 2-3 cols desktop, 1 col mobile)        |
+--------------------------------------------------------------+
```

**Behavior notes:**
- Type badge distinguishes STIPs & Gigs / Internal Jobs / IJR / Secondment / Mainstream Jobs at a glance — exact visual treatment TBD by whoever's assigned design.
- Card is the same shape across all opportunity types; only the Apply button behavior changes downstream (see sections 2–3).
- "Saved Jobs" is a filter tab, not a separate page — see bookmark toggle (Section 4).

---

## 2. FormSG Deep-Link / Redirect-Out Pattern (STIPs & Gigs)

> **Already shipped in MVP — not a new design.** Per D-005, MVP retained "basic FormSG redirect and webhook only." R1 doesn't introduce this pattern; it carries it forward unchanged into the new unified catalog. Sketched here only to confirm the existing component still fits the shared-card layout (Section 1) — check the actual MVP screen/component before treating this box as the real spec.

```
+----------------------------------+
|  Posting Title                    |
|  Agency name                      |
|  Full description text...         |
|                                    |
|  ⓘ You'll leave Compass to apply  |
|     on an external form.          |
|                                    |
|       [ Apply on FormSG → ]       |
+----------------------------------+
```

**Behavior notes:**
- Applies whenever a FormSG link is successfully extracted from the OTG posting description — same trigger as MVP.
- Existing MVP copy/placement should be reused, not redesigned, unless there's a reason to change it for the unified catalog context.
- New-tab vs. same-tab behavior: confirm against how MVP already does it, don't decide fresh.

---

## 2a. HRPS/Cumulus Deep-Link Redirect (Internal Jobs, primary path)

```
+----------------------------------+
|  Posting Title                    |
|  Agency name                      |
|  Full description text...         |
|                                    |
|  ⓘ You'll leave Compass to apply  |
|     on HRPS.                      |
|     (or "on Cumulus" — whichever  |
|      system hosts this posting)   |
|                                    |
|       [ Apply on HRPS → ]         |
+----------------------------------+
```

**Behavior notes:**
- Same card, same Apply-button slot as Section 2 — only the destination label and system name change.
- Deep-links to the specific posting, not a general landing page — only possible once HRPS's API delivers. Can be designed now; can't be built/tested against a real feed yet.
- System name (HRPS vs. Cumulus) is dynamic per posting, not a fixed label.

## 2b. OTG General-Landing-Page Redirect (IJR default case; Internal Jobs residual case)

```
+----------------------------------+
|  Posting Title                    |
|  Agency name                      |
|  Full description text...         |
|                                    |
|  ⓘ You'll leave Compass to apply  |
|     on OTG. You may need to       |
|     search for this posting.      |
|                                    |
|       [ Apply on OTG → ]          |
+----------------------------------+
```

**Behavior notes:**
- Shared component between two different cases: IJR's normal path, and Internal Jobs' OTG-only residual (no deep-link available).
- The "you may need to search" line is the honest signal that this isn't a deep-link — worth confirming with whoever's assigned design whether this reads as a downgrade clearly enough, since it's a materially weaker experience than 2a.

## 2c. Hosting-HR-System Redirect (Secondment, non-SJR)

```
+----------------------------------+
|  Posting Title                    |
|  Agency name                      |
|  Full description text...         |
|                                    |
|  ⓘ You'll leave Compass to apply  |
|     on [hosting system name].     |
|                                    |
|       [ Apply on [system] → ]     |
+----------------------------------+
```

**Behavior notes:**
- Same card, same Apply-button slot again — this is the third variant of the identical pattern (Sections 2, 2a, 2b, 2c are one component with a dynamic destination, not four separate designs).
- "[hosting system name]" is whichever HR system actually owns that specific posting — not a fixed OTG/HRPS/Cumulus set, so the component needs to handle an arbitrary system name, not a hardcoded list.
- Does not yet include the access-disclosure treatment for the cross-HR-system auth gap — that's Section "Explicitly Not Sketched" below, blocked on R1's interim answer.

## 3. Disabled Apply — "Contact Poster" State (STIPs & Gigs, no FormSG link found)

> **Already shipped in MVP — not a new design.** Per the decisions log, this was already part of MVP's unchanged STIPs & Gigs apply behavior: "If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly." Same status as Section 2 — carry forward, verify fit in the new catalog, don't redesign.

```
+----------------------------------+
|  Posting Title                    |
|  Agency name                      |
|  Full description text...         |
|                                    |
|  ⚠ No application link found.     |
|     Contact the poster directly:  |
|     [ poster contact info ]       |
|                                    |
|       [ Apply → ]  (disabled,     |
|        greyed out, not clickable) |
+----------------------------------+
```

**Behavior notes:**
- Triggers when the FormSG-link extraction from the OTG description fails/returns nothing.
- Poster contact info needs a confirmed data source — check whether OTG postings reliably carry a contact field.
- Applies the same disabled-state pattern to Internal Jobs/IJR/Secondment redirects if HRPS/Cumulus/OTG doesn't resolve a specific posting link (residual OTG-only case, per R-07).

---

## 4. Bookmark Toggle + Saved Jobs Filter

```
Card view:
+----------------------------+
| Posting Title        [🔖]  |  <- tap/click toggles saved state
| Agency name                |     filled icon = saved
| ...                        |     outline icon = not saved
+----------------------------+

Catalog header:
Filters: [ Type v ] [ Agency v ] [ ★ Saved Jobs ]
                                    ^-- tab/toggle filters
                                        catalog to saved-only
```

**Behavior notes:**
- No separate "Saved Jobs" page — it's a filter state on the same catalog view.
- Persist saved state per officer account (confirm storage approach with engineering — not a design question, flagging so it doesn't get missed in estimation).

---

## Open Questions for Whoever Gets Assigned

- Exact visual treatment for the five opportunity-type badges (color, iconography)
- New-tab vs. same-tab behavior for external redirects (FormSG, HRPS/Cumulus, OTG)
- R-24 disclosure pattern — blocked on R-24's interim answer, not sketched here
- Mobile layout beyond "1 column" — no real mobile wireframe attempted here

## Explicitly Not Sketched Here

Four other UI items exist in R1 scope but aren't covered by this doc, deliberately:

- **Cross-HR-system access disclosure.** A visible signal when the officer's access to a listing's hosting system is uncertain — needed most for Secondment (2c above) but applies wherever a redirect could dead-end. Blocked on R1's interim answer to the auth gap landing first — designing this now would be against an unscoped requirement.
- **"Link vs. no-link" distinction.** Whether officers need a visible signal distinguishing a deep-link (2a) from a general-landing-page redirect (2b) before they click Apply. Not yet decided this is even needed — a product conversation, not a design task, until someone confirms it's in scope.
- **RBAC / module access.** What an officer without module access sees when they hit the Opportunities page is a real state, but the access model itself isn't firm yet — no point wireframing a permission gate before RBAC's shape is settled.
- **CMM read/view-only surface.** Competency data visibility is a real screen, but it sits under CMM ownership (Zhikai), not R1 discovery/apply design — out of scope for this doc.

---

*This document existed to keep grooming/estimation moving while no designer was named. Superseded 29 Sep by Li Ting Kway's own end-state screens — see [R-10](../analyses/2026-09-16-W38-r1-risk-register.md).*
