# Meeting Notes: OTG Opportunities → CareerCompass (MVP Ingestion)

**Date:** 2026-06-12 (Fri, 09:00–10:00)

**Attendees:** Michelle Yip, Xian Zhang & team (data/BO), [DevOps/agencies referenced, not present]

**Type:** Discovery / alignment — ingestion, category model, ring-fencing, data clean-up

**Related:** OTEP-192 (OTG ingestion), OTEP-348 (scheduler), OTEP-86 (type filter), OTEP-289 (taxonomy spike), OTEP-427 (ingestion tightening), decisions D 2026-06-08 (hard-skip), D 2026-05-21 (SJR exclusion), D 2026-06-02 (creation → R1)

---

## Summary

Converged on a simplified 5-category model (STIPs, Gigs, Jobs, SJR, PSFG) anchored on user experience rather than HR mechanism, and confirmed MVP ingests open opportunities only. Data quality is the headline risk: of ~2,000+ OTG opportunities, only ~633 are open and ~160 pass current ingestion logic, so agency-by-agency clean-up (ESG, MTI, MSF) is the critical path to an Aug–Sep go-live. Several category and source-of-truth calls are PM direction that Xian Zhang's team still needs to validate before they're locked.

⚠️ **Status note:** Most "decisions" below are *proposed/aligned in the room*. The category model and ESG source-of-truth direction need Xian Zhang's team validation (their action item) before I treat them as ratified in the decisions log. I've flagged each accordingly.

---

## Decisions Made (aligned in room — see ratification flags)

1. **5-category model: STIPs · Gigs · Jobs · SJR · PSFG.** 🟡 *Pending Xian Zhang validation*
   - **Why:** Categories should reflect how users experience opportunities, not internal HR mechanisms.
   - **Impact:** Sets the filter taxonomy for OTEP-86 and the OTEP-289 mapping output. Changes the working type list (previously Internal Jobs / STIPs & Gigs / SJR).

2. **"Jobs" is consolidated** — internal jobs, Careers@GovTech jobs, and secondments all group under "Jobs." 🟡 *Pending validation*
   - **Why:** Secondment is a *mechanism* (handled post-application as a modality), not a user-facing category.
   - **Impact:** Removes "Secondment" as a standalone category. Affects card labelling and OTEP-289 mapping.

3. **PSFG (Public Service for Good) becomes its own category.** 🟡 *Pending validation*
   - **Why:** Voluntary, skills-based — fundamentally different from STIPs/Gigs/Jobs.

4. **SJR stays separate.** ✅ *Consistent with D 2026-05-21*
   - **Why:** Different workflow, nomination-based, officer-level ring-fencing, separate module.
   - **Impact:** Reinforces existing SJR exclusion from MVP listing/apply.

5. **MVP ring-fencing = agency-level only.** ✅ *Clear for MVP*
   - **Why:** Start simple; ring-fencing controls *visibility* (who can see), not category. Applies across all opportunity types. R1+ adds job-family and officer-level. SJR is the exception (officer-level nomination, separate module).

6. **MVP ingests open opportunities only; exclude all expired.** ✅ *Consistent with hard-skip D 2026-06-08*
   - **Why:** A poster who let the end date pass closed it intentionally; follow-ups happen outside OTG. Expired + 0-applicant rows have no MVP value. Not date-limited — all *currently open* opportunities come in.

7. **Time commitment required for STIPs & Gigs only.** ✅
   - **Why:** STIPs/Gigs need start/end date + hours-per-week. Jobs/secondments are treated as full-time, so no time-commitment field.

8. **Direction (not finalised): Careers@GovTech is source of truth where a job exists in both OTG and C@G.** 🔴 *Open — needs ESG HR confirmation*
   - **Why:** Avoid duplicate listings in CareerCompass. Prefer C@G over the OTG copy.
   - **Impact:** Dedup rule for ingestion. Blocks clean OTEP-192/OTEP-348 behaviour for ESG. See Open Questions.

---

## Action Items

| Task | Owner | Due | Priority | Status |
|------|-------|-----|----------|--------|
| Generate updated OTG data analysis + remediation reports (per-agency) | @Michelle | Before agency outreach starts (target w/c 15 Jun) | 🔴 High | Not started |
| Define category mapping logic (5-cat model → OTG prefixes/types) | @Michelle | Before S4 filter work (OTEP-86) + feeds OTEP-289 | 🔴 High | Not started |
| Prepare prototype for opportunity-creation experience (unified form) | @Michelle | Before July design workshops | 🟡 Medium | Not started |
| Set up shared doc for R1 wishlist collection | @Michelle | This week | 🟢 Low | Not started |
| Validate category-mapping decisions | @Xian Zhang & team | Before mapping is locked | 🔴 High | Not started |
| Engage ESG HR — confirm OTG vs C@G posting behaviour (duplication) | @Xian Zhang & team | Before dedup rule finalised | 🔴 High | Not started |
| Identify per-agency data clean-up requirements | @Xian Zhang & team | Before Aug–Sep go-live | 🔴 High | Not started |
| Clean up opportunity data — prefixes, categories, metadata | @DevOps / agencies | Before MVP go-live (Aug–Sep) | 🔴 High | Not started |
| Provide clarifications on opportunity types | @DevOps / agencies | Ongoing | 🟡 Medium | Not started |
| Contribute R1 feature wishlist + join July design workshops | @All stakeholders | July | 🟢 Low | Not started |

**Note:** Most of my action items have no hard date from the meeting — I've inferred deadlines from dependencies. The data analysis + mapping logic are the two that gate S4/S5 work; schedule those first.

---

## Key Numbers (data quality is the MVP risk)

- **~2,000+** total OTG opportunities → **633 open** → **~160 ingested** under current logic.
- **~78 records** missing prefixes; plus incorrect labels, inconsistent naming ("MDDI internal opportunity"), missing metadata, wrong agency tags.
- **Worst offenders:** Enterprise Singapore (largest), MTI, MSF.
- **Clean-up window:** before MVP go-live, **Aug–Sep 2026**.

---

## Timeline Risks

- **TIMELINE RISK — clean-up vs go-live:** Agency data clean-up is owned by DevOps + external agencies (ESG, MTI, MSF) and targeted "before Aug–Sep go-live." That's a multi-party dependency outside the squad's control on the critical path. The ~160/633 ingestion ratio means without clean-up the MVP launches with <25% of open opportunities visible. Start the remediation reports + agency outreach now; treat Aug–Sep as the gate, not the start.
- **TIMELINE RISK — mapping logic gates S4:** "Define category mapping logic" (my action) feeds OTEP-86 (type filter) and OTEP-289. S4 starts Mon 15 Jun. If the 5-category model isn't validated by Xian Zhang's team early next week, S4 filter work grooms against an unconfirmed taxonomy.
- **Cross-check — nil-date spike:** OTEP-358 (robust nil-date handling, open item #35) is still open and due before S4 planning. Ingestion-correctness work here overlaps; don't let the category remap distract from closing 358.

---

## Open Questions

- [ ] **Final category list fixed at 5?** How to handle hybrids and PSD variants? — @Michelle + Xian Zhang — before mapping lock
- [ ] **OTG vs C@G source of truth** — which dominates for jobs in both? — @Xian Zhang (ESG HR) — before dedup rule
- [ ] **Are ESG opportunities already duplicated across systems?** — @Xian Zhang — before ingestion build for ESG
- [ ] **Do internal jobs need FormSG or a centralised apply method?** — @Michelle — ties to D 2026-06-04 (interim apply deferred to R1)
- [ ] **Ring-fencing R1+:** which levels are mandatory (officer / job-family / multi-layer)? Do all categories support all types? — R1 grooming
- [ ] **Opportunity lifecycle:** prompt posters to extend/close, or auto-remove stale postings? — R1 wishlist
- [ ] **SJR → Job conversion:** allowed? How to keep reporting integrity if converted? — R1
- [ ] **Central ATS integration:** does posting happen in CareerCompass or via central ATS? No confirmed timeline. — ties to open item #40 (R1 scope, Mark) and the C1 ATS decision

---

## How This Changes Existing Decisions

- **Category model** supersedes the working type list from D 2026-05-13 ("remove OTG label; keep Internal Job, SJR, STIPs & Gigs"). New model folds Internal Jobs into "Jobs" and adds PSFG. **Log this once Xian Zhang validates.**
- **Reinforces** D 2026-06-08 (hard-skip) and D 2026-05-21 (SJR exclusion) — open-only ingestion is consistent.
- **C@G-as-source-of-truth** is a *new* dedup rule not previously decided — needs ESG HR confirmation before it goes in the log.
- **Creation flow** detail (unified form, dynamic fields by type) adds spec to D 2026-06-02 (creation moved to R1). Feeds the prototype action.

---

## Next Steps

**Immediate (this week / into w/c 15 Jun):**
1. Generate per-agency remediation reports — this is the artefact that unblocks agency outreach.
2. Define + circulate the 5-category mapping logic for Xian Zhang's team to validate.
3. Stand up the R1 wishlist shared doc.

**Before July workshops:**
- Opportunity-creation prototype ready to react to.

**Watch:**
- ESG HR response on duplication → determines the dedup rule.
- Category validation → unblocks OTEP-86 filter grooming in S4.

---

## Suggested Follow-ups

- **Decisions log:** I can draft the 3 ratifiable rows (open-only ingestion confirmed, time-commitment-by-type, agency-level ring-fencing for MVP) now, and hold the category model + C@G-source-of-truth as pending-validation. Want me to?
- **`/create-tickets`:** the category mapping + remediation report could become tracked Jira items rather than living only here.
- **Squad Sync (09:30, async):** you were in this meeting instead — flag the new category model to the squad so OTEP-86 grooming doesn't proceed on the old taxonomy.

---

## Appendix: Raw Notes

<details>
<summary>Original meeting input</summary>

(Full agenda-structured input as provided: objective, current state ~2,000+/633/~160, 5-category model, ring-fencing MVP agency-level, open-only ingestion, ~78 missing prefixes, ESG/MTI/MSF clean-up, C@G duplication, time-commitment-by-type, R1 unified creation form, wishlist, action items, open questions, exec summary.)

</details>
