---
date: 2026-06-05
sprint: Sprint 4 (14–28 Jun 2026)
sprint_planning: Thu 11 Jun 2026
stories: OTEP-86, OTEP-87, OTEP-88, OTEP-89, OTEP-317, OTEP-319
---

# Sprint 4 Grooming Analysis — OTEP-Pathfinder

> Generated 2026-06-05. Use before Sprint Planning on Thu 11 Jun.

## Sprint 4 Goal

> "By end of Sprint 4, an officer sees both OTG and Careers@Gov opportunities in one listing, can tell which is which, and reaches the right way to apply for each — FormSG for OTG, a deep-link out to Careers@Gov."

---

## Critical Pre-Conditions (gate before 11 Jun)

**If these aren't confirmed, the C@G half of the sprint is un-estimable:**

| # | Confirmation needed | Owner | Unblocks |
|---|--------------------|----|---------|
| 1 | C@G **listing** payload carries `source` + agency field | Pow Hwee / Léo | OTEP-88, OTEP-374 |
| 2 | C@G **detail** payload carries title/agency/description/duration | Pow Hwee / Léo | OTEP-87, OTEP-377 |
| 3 | C@G payload carries a **per-opportunity deep-link URL** | Pow Hwee / Léo | OTEP-89 |
| 4 | C@G listing data is **actually ingested** for S4 (not mocked) | Pow Hwee / Léo | Sprint goal validity |

Same pattern as the `formsg_url` confirmation that unblocked OTEP-319. Need the C@G equivalents before planning.

---

## Structural Risks

**FE bottleneck:** Thomas is sole FE engineer and sits on the critical path for OTEP-381, 86, 317, 378 (87), 375 (88), 89, and 319 — nearly every FE ticket. The sprint is serialized through one person. Pointing must reflect this.

**Inverted assignment:** OTEP-375 (FE badge, assigned to Thomas) depends on OTEP-374 (BE listing fields, unowned). Same on the detail chain — OTEP-377/378/379 all unowned. Assign before planning or Thomas stalls in week 1.

**Build order (dependency chain):**
```
BE: OTEP-374 (source in listing) ─→ OTEP-375 FE (badge) → OTEP-88
BE: OTEP-377 (C@G detail payload) ─→ OTEP-378 FE (map UI) → OTEP-87
                                  └─→ deep-link URL field  → OTEP-89
OTG filter: OTEP-380 BE [QA ✅] ─→ OTEP-381 FE → OTEP-86 → OTEP-317
OTG apply: OTEP-319 (FormSG redirect — formsg_url confirmed ✅)
```

---

## OTEP-86 — Filter opportunities by type

### Designer (Amber)
- Filter control pattern: multi-select chips vs dropdown vs checkboxes + active-state spec
- Tooltip per type (STIP / Gig / Internal Job) — copy + interaction (hover vs tap)
- Empty state: confirm OTEP-268 empty state covers "no results from filter" case
- Filter + result-count layout on the page

### Engineer
- BE: OTEP-380 done (in QA) — verify returned type enum matches the 3 UI types exactly
- FE (Thomas, OTEP-381): wire filter UI to params, multi-select, persist across pagination, combine filters, live count update
- Filter state must live in URL/query (needed for OTEP-87 AC9 back-nav filter restoration)

### QA (Rathika)
- Single type / multi-type / all types selected
- Filter persists across pagination (page 2 keeps selection)
- Result count matches filtered set; zero-match → OTEP-268 empty state
- Tooltip renders + link resolves

### Open questions
1. **OR logic within filter?** (STIP OR Gig selected = show both?) Confirm so QA can assert and BE/FE agree.
2. **Is C@G a filter type, a source badge, or both?** If C@G maps to `ref_opportunity_type`, OTEP-86 needs rework when C@G lands. PM call — decide before sizing.
3. OTEP-380 enum values — confirm they match the 3 UI types exactly before FE starts.

---

## OTEP-317 — Clear filters and reset view

### Designer (Amber)
- "Clear all" affordance: placement, label, visible only when ≥1 filter active
- Likely a spec rider on the OTEP-86 filter bar, not standalone design

### Engineer
- FE only (Thomas) — reset all filter state, restore unfiltered listing + count, hide when no filters active
- No BE work. Small add-on to OTEP-381; consider bundling to avoid context-switching.

### QA (Rathika)
- "Clear all" hidden when no filters; appears when ≥1 active
- Clears all filter types (not just one); count returns to full set
- After clear → confirm it returns to page 1

### Open questions
1. **After "Clear all," does view return to page 1?** Recommend yes. Confirm UX intent.
2. Dependency list mentions OTEP-318 (category filter) which is NOT in Sprint 4. Confirm OTEP-317 is scoped to **type-filter-only** for S4 so it isn't blocked. Recommend locking this in AC.

---

## OTEP-87 — View C@G Opportunity Detail

*Most dependency-heavy story. Un-estimable until OTEP-377 payload confirmed.*

### Designer (Amber)
- Confirm C@G detail page reuses OTG detail layout (OTEP-128) — same card structure, same "Not specified" fallback, same back-nav. If reuse, Amber's task = field-mapping review, not net-new design.
- Spec the "Apply via Careers@Gov" CTA — visually distinct from OTG's FormSG "Apply" (officer is leaving the product; this is the riskiest UX moment)
- Empty-field spec: which C@G fields commonly come back blank → "Not specified" coverage

### Engineer
- BE (Pow Hwee/Léo, **OTEP-377**, unowned): fetch C@G detail payload — **assign at planning**
- FE (Thomas, **OTEP-378**, unowned): map C@G payload to detail UI, "Not specified" fallback, back-state restoration (ties to OTEP-86 filter persistence)
- FE: render "Apply via Careers@Gov" CTA + fire `click-to-cag` analytics event
- OTEP-379: automated tests for C@G detail rendering (unowned — assign)

### QA (Rathika)
- All C@G fields render; blank fields show "Not specified" with label retained
- Layout matches OTG detail (visual parity)
- CTA present + correctly labelled; `click-to-cag` event fires
- Back link restores filter + pagination state (cross-story with OTEP-86)
- No FormSG / no OTG apply path appears on a C@G detail

### Open questions
1. **C@G detail payload confirmed?** OTEP-377 is unowned and unconfirmed. This is the key gate. (See pre-conditions above.)
2. **Competency section deferred** — confirm grooming excludes it. AC already says deferred; just verify no one re-adds scope at planning.
3. Does the deep-link URL come from the same payload as the detail (OTEP-377) or a separate field? Determines whether 87 and 89 share one BE ticket.

---

## OTEP-88 — Identify C@G listings (badge)

### Designer (Amber) — *design-lock sensitive*
- Badge design: "Careers@Gov" label on OpportunityCard — color, placement, size, visible without hover/click
- **Visual coherence in a mixed list:** OTG and C@G cards coexist. Spec how they read together so the listing doesn't look like two systems bolted together. This is Amber's headline concern for S4.
- Confirm any new badge component is cleared through the locked design system before Thomas builds

### Engineer
- BE (**OTEP-374**, unowned): expose `source` + agency fields in listing API — **assign at planning; this is the upstream blocker for OTEP-375**
- FE (Thomas, **OTEP-375**, assigned): add badge/metadata to OpportunityCard, conditional on source = C@G

### QA (Rathika)
- C@G cards show badge; OTG cards do not
- Badge visible without hover/click, across viewport sizes
- Mixed list (OTG + C@G) renders both card types coherently
- Card with missing source field — does it default to OTG or error? Define the behavior.

### Open questions
1. **`source` field confirmed in listing payload?** OTEP-374 is unowned and the data source is unconfirmed. (See pre-conditions above.)
2. **Is C@G listing data actually ingested for S4?** If not ingested, OTEP-88 can't show real cards. The sprint goal depends on the answer.
3. OTEP-375 is assigned to Thomas but OTEP-374 (its dependency) is unowned — assign 374 at planning or 375 stalls in week 1.

---

## OTEP-89 — View C@G Job (Deep-Link CTA)

### Designer (Amber)
- Minimal. CTA is specced in OTEP-87. Confirm new-tab / "leaving OTEP" treatment — any interstitial, or silent new tab?

### Engineer
- FE (Thomas): on CTA click, open specific C@G posting in new tab using deep-link URL; fire `click-to-cag` at redirect
- BE: deep-link URL must be present in C@G payload (OTEP-377 or a dedicated field) — confirm field exists

### QA (Rathika)
- CTA opens correct, specific opportunity (not C@G homepage) in new tab
- `click-to-cag` event fires
- Stale opportunity: OTEP shows no error (handled C@G-side) — verify no broken state on OTEP's side
- Deep-link URL missing in payload → behavior TBD (see open question below)

### Open questions
1. **Deep-link URL confirmed in C@G payload?** Without it, 89 has nothing to link to.
2. **Missing-URL behavior is unspecified.** OTEP-319 handles missing `formsg_url` with "contact the posting agency" message. OTEP-89 has no equivalent AC. **PM to add this AC before planning.**
3. **Merge with OTEP-87?** Their ACs overlap heavily (both describe the same detail page + CTA). The agreed split is: 87 = page + CTA presence, 89 = click behavior. Confirm the split holds and don't double-point the work.

---

## OTEP-319 — Apply via FormSG (OTG redirect)

### Designer (Amber)
- Minimal — reuses OTG detail CTA. Confirm missing-`formsg_url` state ("Application form unavailable — contact the posting agency") is specced and styled.

### Engineer
- FE (Thomas): Apply click → open `formsg_url` in new tab, no params. Missing-URL fallback message.
- Depends on OTEP-87's CTA pattern existing on OTG detail (confirm the detail page context)
- BE: none new — `formsg_url` confirmed ✅

### QA (Rathika)
- Apply opens correct FormSG form in new tab
- Missing `formsg_url` → fallback message shows in place of button
- SJR detail → no Apply button (out of scope, R1)
- FormSG down/closed → user sees FormSG's own error, no OTEP handling

### Open questions
1. **FormSG tracking params: resolved?** Pow Hwee flagged: "resolve before sprint starts." Should OTEP append opportunity ID as a param for analytics? Risk: may break FormSG submission. **Recommend: no params in MVP — capture analytics client-side at click. Confirm before 11 Jun.**
2. Is OTEP-319 genuinely new S4 work or is it possibly a carry from S3 (sprint-status fallback goal)? Confirm true state at planning so the sprint goal commitment is honest.

---

## Pre-Planning Action Checklist

### Data confirmations (Pow Hwee / Léo — before 11 Jun)
- [ ] C@G listing payload carries `source` + agency (unblocks OTEP-88/374)
- [ ] C@G detail payload carries all required fields (unblocks OTEP-87/377)
- [ ] C@G payload has per-opportunity deep-link URL (unblocks OTEP-89)
- [ ] Is C@G listing data actually ingested for S4 or mocked? (sprint goal validity)
- [ ] OTEP-319 tracking params decision — no params in MVP? Confirm.

### Assign owners at / before planning
- [ ] OTEP-374 (BE listing fields) — unowned, blocks already-assigned OTEP-375
- [ ] OTEP-377 (BE C@G detail payload) — unowned, blocks OTEP-87
- [ ] OTEP-378 (FE C@G detail mapping) — unowned
- [ ] OTEP-379 (automated tests, C@G detail) — unowned
- [ ] Story-level owners for OTEP-86, 87, 88, 89, 317, 319

### PM decisions to bring to planning
- [ ] **Is C@G a filter type (OTEP-86), a source badge (OTEP-88), or both?** Risk: OTEP-86 may need rework if C@G later maps to `ref_opportunity_type`.
- [ ] **OTEP-87/89 split** — confirm 87 = page + CTA presence, 89 = click behavior; don't double-point.
- [ ] **Add missing-deep-link-URL AC to OTEP-89** (mirror OTEP-319 missing-formsg_url pattern).
- [ ] **OTEP-317 scoped to type-filter-only for S4** — confirm in AC so it isn't blocked on OTEP-318.

### Sizing watch
- OTEP-87 — flag as un-estimable until OTEP-377 payload confirmed
- OTEP-88 — flag as un-estimable until C@G listing ingestion + `source` confirmed
- Thomas capacity — he's the critical path for 7 of the 6 stories' FE work; plan accordingly

---

*Generated 2026-06-05 · Sprint 4 Planning: Thu 11 Jun 2026 · Trio: Amber (Design), Thomas (FE), Pow Hwee/Léo (BE), Rathika (QA)*
