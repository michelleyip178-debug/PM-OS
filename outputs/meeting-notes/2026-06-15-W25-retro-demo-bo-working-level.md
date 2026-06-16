---
date: 2026-06-15
type: Sprint Demo + BO Working Level
sprint: Sprint 3 Retro / Sprint 4 kickoff
attendees: Imelda MO, Adrian ANG, Jace TAN, Michelle YIP, Jacky LEE, Xian Zhang GUO, Christopher WOO, Rama MOORTHY, Amber Tong, Barry LIM, Alan LIM, Pow Hwee TAN, Victor ONG, Hao Eng CHUA, Li Ting KWAY
---

# Meeting Notes: CareerCompass Sprint 3 Retro & Demo + BO Working Level

**Date:** 15 June 2026, 15:00–16:00 SGT

**Type:** Sprint demo, retro, and BO alignment session

**Source:** Meeting recap based on transcript and chat content

---

## Summary

Good progress on competency management and opportunity listing — the core MVP surfaces are taking shape. The main constraints are data quality (strict ingestion rules rejecting many records), missing automated OTG integration, and UI polish gaps. Three scope decisions were locked: Public Service for Good is out of MVP, Jobs merges internal and GovTech roles, and OTG stays on manual Excel upload for MVP. Immediate focus: duplicate competencies, missing officer data cleanup, UI/UX polish, and making upload error handling more usable.

---

## Decisions Made

| Area | Decision | Notes |
|------|----------|-------|
| Product scope | **Public Service for Good removed from MVP** | Future scope only |
| Product scope | **Jobs category merges internal jobs and GovTech career listings** | New sprint ticket needed for implementation |
| Integration | **OTG integration = manual Excel upload only for MVP** | OTG cannot support automated export or technical integration at this time |
| Edge cases | **Keep missing-data UI simple — no user-reporting feature for MVP** | Handle data gaps through backend cleanup, not user flows |
| Competency search | Trigger after 3 characters | Already in spec; confirmed |
| Competency search | Max 20 results | Already in spec; confirmed |
| Competency display | Alphabetical ordering | Confirmed |
| Missing profile fields | Remove empty UI gaps; address data issues backend-side | No placeholder text for MVP |

**Context on PSFG decision:** The prior decision log (otg-ingestion-decision-log.md) had PSFG as a separate CC category — this session formally removes it from MVP scope. The 5-category model confirmed by Xian Zhang on 15 Jun (I-018: STIPs, Gigs, PSFG, Jobs, SJR) is the canonical list; PSFG stays in the model but is not ingested for MVP.

**Context on Jobs merge:** Aligns with I-017 (Secondment falls under Internal Job — confirmed same session). The filter display logic for OTEP-86 can now treat these as one category.

---

## Action Items

| Task | Owner | Due | Priority | Notes |
|------|-------|-----|----------|-------|
| Investigate duplicate competencies | Dev team (Léo / Hao Eng) | This sprint | High | Same competency name with different codes — data quality or system logic? |
| Fix login page product name "OTP" → correct name | Dev team | This sprint | High | Blocking good first impression for BO/stakeholders |
| Refine UI: spacing, font hierarchy, button sizing | Amber + Thomas | Before next BO demo | High | Across listing, detail, and competency pages |
| Improve missing-logo handling | Amber + Thomas | Before next BO demo | Medium | Avoid awkward layout when agency logo unavailable |
| Update disclaimer copy for OTG applications | Michelle + Amber | Before S4 demo | Medium | Routing logic for FormSG redirect may change disclaimer wording |
| Confirm poster information design | Michelle + Amber | This sprint | Medium | Is poster name/email mandatory and prominent? Needs AC before build |
| Create sprint ticket for Jobs category merge logic | Michelle | This week | High | Needed for S4 planning; net-new ticket for FE + BE |
| Improve upload error messaging | Dev team (Léo) | S4 | Medium | Error volume is high because strict validation rejects many records; message quality matters for admin UX |
| Validate missing agency/designation backend cases | Léo / backend | S4 | Medium | Prevent avoidable UI issues downstream |
| Update OTEP-397 spike description to reflect happy-flow-only scope | Michelle | Before S5 grooming | Medium | Per Rama sync 15 Jun: no in-UI error feedback; backend report extraction only |

---

## Open Questions

- [ ] **Jobs category subtype filter** — after merging, should users still filter by secondment vs internal job? **Owner:** Michelle to decide with Xian Zhang before OTEP-86 AC is finalised
- [ ] **Strict ingestion validation** — should rules be relaxed to accept partial records and reduce rejection volume? **Owner:** Michelle — prior decision (2026-06-08) was hard-skip; revisit in S5/6 informed by ingestion analysis
- [ ] **OTG automated integration** — can OTG eventually support automated export or technical integration? **Owner:** Michelle / Rama to track as future state
- [ ] **Duplicate competencies** — root cause: data quality or product/system logic? **Owner:** Dev team to investigate
- [ ] **Missing profile fields (long term)** — blank, placeholder text, or explicit labels? **Owner:** Amber / Michelle post-MVP
- [ ] **Poster information** — mandatory and prominently displayed? **Owner:** Michelle + Amber to confirm in AC
- [ ] **Missing FormSG links** — disable button, redirect, or show guidance? **Owner:** Michelle — prior decision (2026-06-04) was no apply CTA for MVP; confirm this holds for OTG-only agencies

---

## Key Demo Observations

**Competency profile (Hao Eng / Core squad):**
- Add, hide, remove competencies with persistence working
- Save button only visible on changes, alphabetical ordering, hidden = removed from display
- Bug: duplicate competencies appearing on repeated adds (different codes, same name)
- Login page product name shows "OTP" — needs fix

**Opportunity listing (Michelle):**
- OTG data ingested successfully (gig title, agency, time commitment, posting date, competencies)
- Working: listing page, detail page, sort by posting/closing date, type-based filters, clear filters, filter state retained across pagination
- Not yet working: search, competency matching
- UI issues flagged: oversized buttons, inconsistent font sizes, excess whitespace, empty right panel, missing agency logo handling

---

## Context for Future Reference

**Ingestion volume context:** Many OTG records are being rejected by the current strict validation rule (2026-06-08 decision: hard-skip any row with missing fields). This is by design for data integrity, but the error volume at the BO demo made upload error messaging a visible pain point. The ingestion analysis (outputs/analyses/) should inform whether any rules can be safely relaxed in S5/6.

**CSC course data vs OTG:** CSC course data uses daily automated sync; OTG opportunities use manual Excel upload for MVP. Different integration paths for different data sources.

**Two-tier demo agreement (2026-06-02):** This was the working-level demo — owners present their own section, working session framing. The consolidated narrative for Mark/GK is a separate deliverable.

---

## Next Steps

**Immediate (this week):**
- [ ] Michelle: Create Jobs merge sprint ticket
- [ ] Michelle: Update disclaimer copy with Amber
- [ ] Michelle + Amber: Confirm poster information AC
- [ ] Dev team: Investigate duplicate competencies, fix login page name

**This sprint (S4):**
- [ ] UI polish pass: spacing, fonts, button sizing, logo handling (Amber + Thomas)
- [ ] Upload error messaging improvements (Léo)
- [ ] Backend data validation for missing agency/designation

**Before S5 grooming:**
- [ ] Michelle: Update OTEP-397 ACs to reflect happy-flow-only upload scope
- [ ] Michelle: Surface ingestion rule relaxation question with data from ingestion analysis
