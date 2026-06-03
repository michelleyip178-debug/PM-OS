# Daily Standup — 2026-06-03

**Date:** 2026-06-03 (Sprint 3, Day 2)

**Type:** Daily standup

**Attendees:** Leo, Thomas, Rathika, Pow Hwee, Michelle

---

## Main Outcome

Team prepping for tomorrow's demo (4 Jun). Filtering done, QA setup underway, login page is Thomas's focus. One API conflict with another team to watch.

---

## Updates

**Leo**

- Done with the filtering.

- Helping on FE for "Closing soon."

**Thomas**

- API conflict with another team (needs resolution).

- Running localhost for the demo.

- Focusing on the Login page.

**Rathika**

- Setting up local environment for QA testing.

- QA testing for tomorrow's demo.

**Pow Hwee**

- Upload of OTG — new staff.

---

## OTG Import — Current Errors

These are the unmatched-label errors from the OTG import. They're reference-data mismatches: the import is looking up each value against a fixed list and not finding it, so those records can't map cleanly.

*(Competency mismatches excluded — there are ~100 and likely not relevant to the demo.)*

**Agency (by label) — label not found:**

- `""` (blank/empty label)
- `Agency for Integrated Care`
- `Central Provident Fund Board`

**Job Function (by label) — label not found:**

- `Business Analyst`
- `Content Development`
- `Customer Experience Strategy`
- `Customer Service & Engagement`
- `Human Resources`
- `Others`
- `Partnership & Engagement`
- `Policy & Planning`
- `Science Tech and Engineering`
- `Service Delivery`
- `Social Services`

**Opportunity Type (by label) — label not found:**

- `(No prefix)`
- `[Convention]`
- `[Feb Series]`
- `[GCDTO engagement]`
- `[OTG Roadshow]`
- `[Other]`
- `[Others]`
- `[Public Service for Good]`
- `[Public Service For Good]`
- `[SJR]`

**What this tells us:**

- This is the OTG reference data Leo needs to share — it's the same blocker. These unmatched labels ARE the logic gap. The decision is whether to map each to an existing value, add it to the reference list, or bucket it.

- A few are clearly the same value with casing/spacing differences (`[Public Service for Good]` vs `[Public Service For Good]`, `[Other]` / `[Others]`). Those need normalization, not new entries.

- The blank Agency label (`""`) means some records arrive with no agency at all — decide whether to drop, default, or flag for manual fix.

- `[SJR]` showing up matters: Sprint 3 goal explicitly excludes SJRs from apply. Confirm whether SJR-type opportunities should even import, or be filtered out upstream.

---

## Blockers

1. **Leo blocked on report logic**

   - Needs: the reports loaded from OTG, shared by [owner — looks like a self-assignment or Pow Hwee, confirm].

   - Then: Michelle figures out what logic to apply.

   - *Note: as written this reads "Leo to share, Michelle to define logic." Confirm who shares the OTG reports.*

---

## Action Items

| Task | Owner | Due | Status |
|------|-------|-----|--------|
| Share the OTG-loaded reports so logic can be defined | Leo (confirm) | Before demo (4 Jun) | 🔴 Not started |
| Define the logic to apply to OTG reports | Michelle | After reports shared | 🔴 Not started |
| Resolve API conflict with the other team | Thomas | Before demo (4 Jun) | 🔴 Not started |
| QA testing for the demo | Rathika | 4 Jun (demo) | 🟡 In progress |
| Login page | Thomas | — | 🟡 In progress |
| OTG upload — new staff | Pow Hwee | — | 🟡 In progress |

---

## Watch / Risk

- **API conflict (Thomas):** demo runs on localhost, which usually means the shared/integration env isn't ready. If the conflict isn't resolved, the demo may have to stay on localhost — fine for showing, but flag that it's not the integrated path.

- **Demo is tomorrow (4 Jun):** QA setup is only starting today. Tight. Rathika needs a working build to test against before tomorrow.

---

## Next Step

Unblock Leo on the OTG reports today so the logic work isn't sitting idle. Confirm the demo is localhost-only and everyone knows that going in.
