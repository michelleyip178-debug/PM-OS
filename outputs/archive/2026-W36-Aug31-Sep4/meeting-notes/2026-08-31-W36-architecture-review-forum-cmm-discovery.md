# Meeting Notes: Architecture Review Forum — CMM Discovery Readout

**Date:** 31 August 2026 (W36)

**Meeting Type:** Discovery readout / direction-setting (not a decision meeting)

**Topic:** Competency Management Model (CMM) — competency lifecycle, tagging, and job-role mapping across government HR systems

**Source:** AI-generated meeting summary (structured), processed into notes. Timestamps in the raw summary refer to the recording.

**Related:** CMM was scoped out of MVP and R1 ([competency cleanup out of scope, 6 Aug R1 timeline planning](../../PM-skills-ALL-1/00-hub/open-items.md) #59). This forum is the discovery track that feeds a later CMM operating-model decision. Cross-reference the competency SSOT governance thread ([#18/#41](../../PM-skills-ALL-1/00-hub/open-items.md)).

---

## Summary

The CMM team presented discovery findings from structured interviews across PSD, EDB, LTA, and central governance bodies (WD/CDGO). The picture that emerged: competency management today runs on manual Excel/EIB uploads, fragmented systems, and guidance-based governance that agencies routinely bypass when it conflicts with operational needs. Agency maturity varies widely — LTA has a mature SME-driven governance structure with 1.5–2 year review cycles; others rely almost entirely on error-prone spreadsheet processes.

The direction forming (explicitly emerging, not finalised): **do not pursue full standardisation.** Instead, a hybrid model — a central competency "bank" with agency-specific extensions (parent-child) — with CMM repositioned as an enabling structure rather than an enforcement gate. Co-creation workshops to define the target-state operating model are planned for a Sept–Oct window.

---

## Decisions / Direction Agreed

*All flagged emerging, not finalised. These are working directions for the co-creation phase, not commitments.*

| # | Direction | Rationale |
|---|-----------|-----------|
| 1 | **Do not aim for full end-to-end standardisation of competencies across all agencies** | Full harmonisation is unlikely — agencies have strong contextual needs and differing domain requirements (procurement, engineering); they already prioritise internal operational needs over central-framework alignment. |
| 2 | **Move toward a hybrid model: central competency "bank" + agency-specific extensions (parent-child)** | Preserves a shared base model while allowing the contextual variation agencies need. |
| 3 | **Keep the CMM / competency-management layer; reposition it as enabling structure, not an enforcement gate** | Removing it doesn't fix the underlying problem (policy alignment, not tech). Repositioning avoids the adoption failure of a system agencies route around. |
| 4 | **Explore system improvements: inference/recommendation mechanisms, reduced Excel/EIB dependency** | Directly targets the biggest operational pain (manual tagging, ID memorisation, EIB bottleneck). |
| 5 | **Run co-creation workshops to define the "to-be" process before locking design direction** | Discovery has surfaced the problem space; the operating model needs stakeholder definition, not a top-down design. Sept–Oct window discussed. |

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Continue discovery sessions with MSF and JTC (validate maturity differences across agencies) | CMM discovery team — *not named in summary* | Not stated | 🔴 High | 🔴 Not Started |
| Run internal alignment sessions within PSD / CDGO / BS stakeholders to consolidate direction | *Not named* | Not stated | 🔴 High | 🔴 Not Started |
| Share synthesised findings early with CDGO and leadership — alignment on governance vs. autonomy | *Not named* | Not stated | 🔴 High | 🔴 Not Started |
| Plan co-creation workshops to define the target operating model / future CMM approach | *Not named* | Sept–Oct window (discussed, not locked) | 🔴 High | 🔴 Not Started |
| Evaluate system-simplification opportunities (reduce EIB dependency, improve search, cut manual tagging effort) | *Not named* | Not stated | 🟡 Medium | 🔴 Not Started |

**Notes:**
- **No owners or hard dates were captured in the source summary.** Every action needs an owner assigned and a date set — the whole set is a discovery team's forward plan with no accountability layer yet.
- The Sept–Oct co-creation window is the only time anchor, and it's described as "discussed," not agreed.

---

## Key Findings

### Current-state pain points

| Pain | Detail |
|------|--------|
| **Manual EIB/Excel workload** | Competency tagging and EIB uploads require manual copying, validation, and re-upload across systems. Named the major bottleneck. |
| **Data quality** | Dirty position/job IDs, inconsistent tagging practices. |
| **System fragmentation** | HRPS, Workday, OTG all in play — constant switching, duplicated effort, competency repositories not integrated with HR systems. |
| **Inconsistent proficiency levels** | Vary across agencies and drift over time. |
| **Visibility gap** | Agencies don't systematically report competency updates back to central governance; central bodies can't see what's changing. |
| **Competency duplication** | Workarounds like embedding proficiency levels inside competency IDs create duplicate records. |

### Governance state

- Governance is **guidance-based** — central bodies (WD/CDGO) coordinate frameworks but rely on agencies for domain expertise and updates, with limited enforcement.
- Strong divergence between the standardised government competency bank and agency-specific contextual requirements.
- Agencies bypass central alignment in certain domains where operational needs dominate.

### Agency maturity spread

| Agency | Maturity signal |
|--------|-----------------|
| **LTA** | Mature — internal competency governance structure, SME involvement, 1.5–2 year review cycles |
| **PCG HR** | Manual role profiling and competency tagging in HRPS, significant operational effort |
| **EDB** | Heavy reliance on Excel-based EIB uploads, inefficient and error-prone |
| **MSF, JTC** | Not yet engaged — planned next, expected to differ again |

---

## Risks (surfaced, not yet addressed)

| # | Risk | Why it matters |
|---|------|----------------|
| 1 | **Standardisation risk** | Full harmonisation across agencies is unlikely given contextual needs and domain differences. A model that assumes it will fail. |
| 2 | **Adoption risk** | Agencies may keep bypassing central systems and maintain their own banks and workflows regardless of what's built. |
| 3 | **Data integrity risk** | Ongoing duplication and inconsistent proficiency levels undermine the reliability of the whole competency dataset. |
| 4 | **System design risk** | Over-engineering a centralised system still fails if the policy-alignment problem (not the tech problem) isn't solved first. |
| 5 | **Operational scalability risk** | Manual processes (EIB, spreadsheets, retagging) won't scale as more agencies or more updates come in. |

---

## Open Questions

- [ ] **Should competency governance stay centralised, or allow agency-specific extensions on a shared base?** — this is the core unresolved debate; the hybrid/parent-child direction is a proposed answer, not a decided one — **Owner:** *unassigned* — **By:** feeds the co-creation workshops
- [ ] **Is API-based integration a viable replacement for the EIB file-based process?** — raised as a possibility, not evaluated — **Owner:** *unassigned* — **By:** not set
- [ ] **Who owns the end-to-end system and the "single source of truth" for competencies?** — named as a gap, no owner proposed — **Owner:** *unassigned* — **By:** not set
- [ ] **Would a unified front-end integrating the HR systems actually reduce toggling/Excel dependency, or just add another layer?** — floated, not scoped — **Owner:** *unassigned* — **By:** not set

---

## Next Steps

**Immediate:**
1. Assign owners and dates to all five action items above — none exist yet.
2. Continue discovery with MSF and JTC.
3. Start consolidating direction internally across PSD / CDGO / BS.

**Short-term (Sept–Oct):**
- Run the co-creation workshops to define the target-state CMM operating model, before committing to a design.
- Share synthesised findings with CDGO and leadership to get the governance-vs-autonomy call made at the right level.

**Follow-up meeting:** Not scheduled. The co-creation workshops (Sept–Oct) are the next real forum.

---

## Context for Future Reference

CMM is **not in MVP or R1 scope** — competency cleanup was explicitly cut at the 6 Aug R1 timeline planning meeting (open item #59). This discovery track runs in parallel and feeds a future CMM operating-model decision, likely R1+ or later.

The finding that matters most for Career Compass: **"policy alignment, not tech, is the real problem"** (risk #4) and **agencies routinely bypass central frameworks**. Any Compass feature that assumes a clean, centrally-governed competency dataset is building on the same shaky foundation this forum just documented. This connects directly to the upstream-data-quality risk flagged in the [2 Sep OTG operational review](2026-09-02-W36-otg-operational-review-employment-profile.md) (R3 in the [consolidated RAID](../analyses/2026-09-03-W36-mvp-raid-consolidated.md)) — Compass consumes competency and role data it doesn't control, and this forum confirms that data is inconsistent by design across agencies.

The hybrid parent-child model (direction #2) is worth tracking: if it becomes the agreed CMM architecture, Compass's competency-matching logic may eventually need to handle agency-specific competency extensions, not just the central bank.

---

## Appendix: Raw Summary

<details>
<summary>Click to expand original AI-generated summary</summary>

**Overview**
- Discovery work on Competency Management Model (CMM) focusing on competency lifecycle, tagging, and job role mapping across government systems (1:27)
- Multiple stakeholder interviews conducted via structured sessions (focus groups and 1:1 walkthroughs) across PSD, agencies, and central governance bodies (2:51)

**Scope & Objectives**
- Understanding end-to-end competency lifecycle: creation, review, approval, and retirement (1:27)
- Examining HR practitioner workflows for competency selection, tagging, and manual effort involved (1:48)
- Reviewing job ID creation and mapping to competencies across systems (2:31)

**Stakeholder Coverage**
- Central governance teams (WD/CDGO) coordinate competency frameworks but rely on agencies for domain expertise and updates (6:11)
- PCG HR teams perform manual role profiling and competency tagging using HRPS with significant operational effort (8:53)
- EDB highlighted heavy reliance on Excel-based EIB uploads causing inefficiency and error-prone processing (13:39)
- LTA operates a mature internal competency governance structure with SME involvement and long review cycles (1.5–2 years) (14:26)
- Upcoming engagements planned with MSF and JTC due to differing maturity levels across agencies (4:54)

**Key Pain Points**
- High manual workload due to Excel-based competency tagging and EIB upload processes (9:32)
- Data quality issues including dirty position/job IDs and inconsistent tagging practices (9:51)
- Fragmented systems (HRPS, Workday, OTG) requiring constant switching and duplicate effort (28:53)
- Inconsistent competency proficiency levels across agencies and over time (18:16)
- Lack of visibility between agencies and central governance on competency updates and changes (21:21)

**Policy & Governance Issues**
- Governance model is guidance-based, limiting enforcement across agencies (15:24)
- Strong divergence between standardized government competency bank and agency-specific contextual requirements (17:17)
- Agencies prioritize internal operational needs over alignment with central frameworks in certain domains (e.g., procurement, engineering) (17:38)

**Systems & Operational Challenges**
- EIB Excel process is a major bottleneck requiring manual copying, validation, and uploads across systems (23:27)
- Competency duplication arises from workaround practices such as embedding levels within competency IDs (19:14)
- HR systems and competency repositories are not fully integrated, leading to duplicated workflows (28:53)

**Future Direction Discussions**
- Exploration of inference-based systems to recommend similar competencies and reduce reliance on ID memorization (34:08)
- Consideration of a unified front-end interface integrating HR systems to reduce toggling and Excel dependency (35:50)
- Debate on whether competency governance should remain centralized or allow agency-specific extensions while maintaining a shared base model (33:04)
- Discussion on API-based integration as a potential alternative to EIB file-based processes (46:04)

**Next Steps**
- Continued stakeholder discovery sessions with MSF and JTC to cover additional agency perspectives (4:54)
- Synthesis of insights to be shared with CDGO and business stakeholders for alignment discussions (48:51)
- Preparation for co-creation workshops to define target-state competency model and operating approach (52:19)

**What went well**
- Broad discovery completed across multiple agencies (PSD HR, EDB, LTA, CDGO-related stakeholders), giving a wide view of competency management practices and maturity differences
- Clear end-to-end understanding emerging of the competency lifecycle (creation, tagging, approval, and usage in job profiles)
- Strong identification of real operational pain points such as EIB Excel-based uploads, manual tagging, and system toggling between HRPS/other tools
- Useful visibility into how central governance (CDGO/WD) interacts with agencies and where enforcement vs guidance gaps exist

**What didn't work well / gaps**
- No consistent standard across agencies for competency definitions, proficiency levels, or role profiling approaches
- Heavy reliance on manual Excel/EIB processes causing inefficiency, duplication, and human error
- Weak alignment between systems (HRPS, Workday, agency-specific databases), leading to fragmented data flow and duplicated competency records
- Communication gaps: updates to competencies are often not systematically shared back to central governance bodies
- Lack of clarity and agreement on end-to-end system ownership and "single source of truth" for competencies

**Key risks (not fully addressed yet)**
- Standardization risk: Full harmonization across agencies is unlikely due to strong contextual needs and differing domain requirements
- Adoption risk: Agencies may continue bypassing central systems and maintain their own competency banks and workflows
- Data integrity risk: Ongoing duplication and inconsistent proficiency levels undermine reliability of the competency dataset
- System design risk: Over-engineering a centralized system may still fail if policy alignment (not tech) is not resolved
- Operational scalability risk: Manual processes (EIB, spreadsheets, retagging) will not scale with additional agencies or updates

**Key decisions / direction agreed (emerging, not finalized)**
- Do not aim for full end-to-end standardization of competencies across all agencies; allow contextual variation with governance layering
- Shift thinking toward a hybrid model: central competency "bank" with agency-specific extensions (parent-child concept)
- Avoid removing CMM/competency management layer; instead reposition it as enabling structure rather than enforcement gate
- Explore system improvements such as inference/recommendation mechanisms and reduced reliance on Excel-based uploads
- Plan for co-creation workshops to define "to-be" process with stakeholders before final design direction

**Key actions / next steps**
- Continue discovery sessions with remaining agencies (e.g., MSF, JTC) to validate maturity differences
- Conduct internal alignment sessions within PSD/CDGO/BS stakeholders to consolidate direction
- Share synthesized findings early with CDGO and relevant leadership for alignment on governance vs autonomy
- Plan co-creation workshops to define target operating model and future CMM approach (likely Sept–Oct window discussed)
- Further evaluate system simplification opportunities (reduce EIB dependency, improve search, reduce manual tagging effort)

</details>
