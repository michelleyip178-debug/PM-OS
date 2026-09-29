*Draft, not yet synced to Confluence. Scoped out of [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md). Source: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md), [STIPs & Gigs Discovery-to-Application Brief](../decisions/2026-09-22-W39-stips-gigs-discovery-access-brief.md), [STIPs & Gigs Scope Map](../decisions/2026-09-22-W39-stips-gigs-scope-map.md), [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md). Template origin: [Product Epic 1-pager Template](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931675660/Product+Epic+1-pager+Template).*

# CareerCompass | OTEP-Pathfinder — Epic A: STIPs & Gigs

| | |
|---|---|
| **Release** | R1 (Opportunities Marketplace) — Epic A only |
| **Date** | 24 Sep 2026 |
| **Target** | Pending re-estimate — same as parent R1 doc, no epic-specific date yet (unreconciled mw/sprint/date figures across R1 docs, [R-12](../analyses/2026-09-16-W38-r1-risk-register.md)) |
| **Status** | ✅ **LIVE.** Discovery and FormSG-extraction apply are already shipped in MVP, not build scope. Kept here as a record of what's delivered, not a grooming target |
| **Author** | Michelle Yip |
| **Last updated** | 29 Sep 2026 — corrected to LIVE status and 6-pilot-agency population; see correction history at bottom |
| **Product Designer** | Li Ting Kway, confirmed 29 Sep, already has end-state screens for this scope — see [R-10](../analyses/2026-09-16-W38-r1-risk-register.md) |
| **Engineering Leads** | Rama Moorthy, Barry Lim |
| **Prototype - Figma** | [zipper-ritzy-40733845.figma.site](https://zipper-ritzy-40733845.figma.site) |

## The Short Version

✅ **Already live.** Postings for STIPs & Gigs are created in OTG, for every pilot agency, no exceptions — Compass never builds a native creation flow. Discovery is native to Compass, scoped to the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), pulled in from OTG. **Apply:** Compass extracts the FormSG link embedded in the OTG posting's description and shows it as the Apply button. Clicking it deep-links out to that FormSG form. If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly. No native in-app apply exists anywhere.

This was the thinnest epic in R1's plan: a discovery pull-through plus a FormSG-link-extraction rule. It's already shipped, no native creation, apply, or review build for any pilot agency.

---

## 1. Background & Context

**Why this matters strategically:** the original strategic case — "officer leaves Compass to apply, we lose visibility" — is not solved by this epic for any population. STIPs & Gigs apply happens through FormSG, off-platform, exactly as it did before R1. The North Star (officers completing a development action) is not directly measurable through this epic; Compass can see that an officer clicked through to a FormSG link, not whether they completed or were selected.

**Why FormSG-extraction and not a native build:** Mark and Gek Khiang's confirmed direction (OTEP Squad Sync, 25 Sep) is anchored on two principles — don't expose Compass to non-pilot agencies, and don't create dual-posting confusion between OTG and Compass. Extending native apply beyond the pilot was never on the table given the "don't expose Compass to non-pilot agencies" principle. The confirmed answer is the simplest one: leave apply exactly as it is today, for every pilot agency.

## 2. Problem Statement

**For officers, at a pilot agency:** you find a STIP or Gig worth applying to. That means clicking Apply and being taken to a FormSG form outside Compass — same as it's always been. This epic doesn't close the "leave and lose visibility" gap. What it does fix: today, an officer has to already know to look on OTG. Under this epic, they can discover the same posting inside Compass's unified catalog and get straight to the right FormSG form via a deep link, instead of navigating OTG themselves.

**For posting creators (any officer, at a pilot agency):** posting a gig continues to happen in OTG regardless of agency. Compass never becomes the place you create a listing. If your posting doesn't include a FormSG link in its description, officers see a disabled Apply button and are told to contact you directly — worth flagging to posters as a reason to always include one.

**What this epic does NOT solve:** it doesn't touch the cross-system auth problem — officers who can see a listing on a different HR system but can't log into it to apply ([R-24](../analyses/2026-09-16-W38-r1-risk-register.md)) — not directly relevant here since FormSG doesn't require HR-system access. It doesn't close the "leave and lose visibility" gap for anyone. It doesn't give Compass any signal past the initial click-through — no completion, no outcome, no status. See the [Opportunities Full-Scope Vision](../strategy/2026-09-28-W40-opportunities-full-scope-vision.md) for what closing this gap would actually require.

## 3. Target User

**Population: the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), one population, one apply mechanism.** Discovery is scoped to the 6 pilot agencies, not WOG-wide — corrected 29 Sep, reversing the earlier "WOG-wide, confirmed by R-14" framing. Apply is uniform across those 6 agencies — no further population split.

- **Lane 1 — Applicant (any pilot agency):** an officer at a pilot agency discovers a STIP/Gig listing in Compass and clicks Apply. If the posting has a FormSG link, they deep-link out to it. If not, the button is disabled with a "contact the poster" message. No agency-based branching within the pilot.
- **Lane 2 — Posting Creator (any pilot agency):** any officer or manager with a project, task, or gig to fill. Posts in OTG, includes a FormSG link if they want officers to be able to apply through Compass's deep link.

**Explicitly not a user of this epic:** HR, in any form (Central or Agency Admin) — the zero-HR-role finding ([R-27](../analyses/2026-09-16-W38-r1-risk-register.md)) holds cleanly under this model. There's no in-app applicant data anywhere for HR to have a role in.

## 4. Value Propositions & Hypotheses

### 4.1 Overall Value Propositions

- **For Officers (at the 6 pilot agencies):** "Find every STIP and Gig across your agency and its peers in one place, and get straight to the right application form." Discovery is the value; applying itself is unchanged from today.
- **For Posting Creators:** posting continues to happen exactly as it does today, in OTG. The only new consideration: include a FormSG link so officers discovering your posting through Compass can actually apply.

### 4.2 Core Hypotheses

1. **Discovery (6 pilot agencies):** *If* Compass pulls OTG's STIPs & Gigs postings into a catalog across PSD, ESG, MDDI, URA, MCCY, and CAAS, *then* monthly active searchers will grow, since officers no longer need to already know OTG is where to look. No target set yet.

*Discovery is the sole hypothesis for this epic — no native apply form exists to build a completion or pre-fill hypothesis around.*

## 5. End-to-End User Journey

Full stage-by-stage mechanics: see [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md).

### 5.1 Officer Journey (Discover → Deep-Link/Redirect → Apply on FormSG)

1. **Discover:** logs in via WOG AD, lands on the unified Opportunities catalog, sees STIP/Gig listings pulled from OTG, scoped to the 6 pilot agencies, no agency distinction within the pilot.
2. **Bookmark (optional):** saves interesting postings to the "Saved Jobs" filter tab.
3. **Apply:** clicks Apply. If the posting's OTG description contains a FormSG link, Compass deep-links to that FormSG form. If no FormSG link exists, the Apply button is disabled and shows "contact the poster directly."
4. **Track / Outcome:** happens entirely on FormSG/outside Compass. No in-app status, no in-app outcome. Compass has no further role after the click-through.

### 5.2 Posting Creator Journey — OTG-side, every pilot agency

Posting creation continues in OTG for every pilot agency, no exceptions. Posting owners are responsible for including a FormSG link in the posting description if they want their listing to be applyable through Compass's deep link. Applicant review and decisioning happen entirely through FormSG's own response mechanism, off-platform — no Compass involvement.

---

## 6. Success Metrics

**6.1 Core North Star Contribution**

This epic contributes to the North Star only indirectly, through discovery volume. Apply and outcome both happen on FormSG, outside Compass's instrumentation, for every pilot agency.

**6.2 Input Metrics**
- **FormSG-Click Rate:** % of STIP/Gig detail views where the officer clicks through to the extracted FormSG link. This is the epic's actual measurable apply-intent signal — Compass has no visibility past this click.
- **Dead-End Apply Rate:** % of STIP/Gig detail views where the Apply button is disabled because the posting has no FormSG link. Flags posters who aren't including a FormSG link, a real gap this model creates.

**6.3 Guardrail Metrics**
- If Dead-End Apply Rate exceeds 15% at the 4-week mark, escalate to Adrian/BOs on whether to require FormSG links at posting time on OTG.

## 7. Scope (Stories + Success Criteria)

Full detail: [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md). **Correction, 29 Sep: every row below is already shipped in MVP.** This table is a record of what's live, not a grooming list.

| Stage | Story | Population | Status |
|---|---|---|---|
| Discovery | Pull OTG postings into Compass catalog | 6 pilot agencies | ✅ Live in production |
| Discovery | Extract FormSG link from posting description, surface as Apply button | 6 pilot agencies | ✅ Live in production |
| Apply | Deep-link to the extracted FormSG URL | 6 pilot agencies | ✅ Live in production |
| Apply | Disabled Apply button + "contact the poster" messaging, when no FormSG link exists | 6 pilot agencies | ✅ Live in production |
| Creation | Open posting creation | OTG only, every pilot agency | N/A — not a Compass build |

**Explicitly Out of Scope:** native creation/posting flow (any agency), native in-app apply/review/decision flow (any agency), dynamic form builders, multi-file resume/portfolio uploads, multi-stage ATS pipeline, automated regret emails, in-app post-offer messaging or contract generation, formal HR placement workflows, recurring auto-reposting, public archive of closed postings, complex HR approval chains, automated compliance dashboards, automated FormSG webhook sync, RBAC/applicant-data infrastructure of any kind (no applicant data exists in Compass to gate). See the [Opportunities Full-Scope Vision](../strategy/2026-09-28-W40-opportunities-full-scope-vision.md) and its [full-scope wireframes](2026-09-28-W40-opportunities-full-scope-wireframes.md) for what a future native build of this scope could look like.

## 8. What We Need You to Design

> ✅ **Already shipped in MVP — no design work needed.** Li Ting Kway is confirmed as R1's designer (29 Sep, see [R-10](../analyses/2026-09-16-W38-r1-risk-register.md)), but nothing in this section is a task for her — every item below is live, unchanged UI carried forward from MVP.

Design scope was deliberately small — no native form, no review table, for any pilot agency — and all of it already exists:

1. **The FormSG deep-link / "you'll apply on FormSG" pattern.** How a listing card and detail view signal that Apply takes the officer to an external FormSG form. Applies to every pilot agency, no exceptions. Live.
2. **The disabled-Apply "contact the poster" state.** For postings with no FormSG link in the description. Live.
3. **The saved jobs bookmark toggle.** Shared component — see the parent R1 one-pager, Section 8. This one is still genuinely new build work, tracked at the parent level, not here.

## 9. Data Analysis & Evidence

FormSG-click-through and dead-end rates have no historical baseline in Compass (never tracked before); both start at zero measured data once this epic ships.

## 10. Market / Benchmark Scan

Not done.

---

## 11. Go-To-Market & Timeline

**Not applicable — already live.** This epic needs no estimate, sprint, or kickoff date; it shipped in MVP, ahead of R1's own timeline entirely.

---

## 12. Risks, Assumptions & Mitigations

| Risk | Category | Impact | Mitigation |
|---|---|---|---|
| **STIPs & Gigs apply mechanism** ([R-27](../analyses/2026-09-16-W38-r1-risk-register.md)) | Scope / Operational Readiness | Zero-HR-role holds cleanly — no in-app applicant data exists anywhere in this model, for any pilot agency. A real, if narrow, risk: posters who don't include a FormSG link produce a dead-end Apply button, with no system-level enforcement proposed | Live behavior, already parsing posting descriptions in production. Monitor Dead-End Apply Rate (Section 6.2); no further confirmation needed on the parsing logic itself |
| **FormSG MVP data migration (6 pilot agencies)** ([R-29](../analyses/2026-09-16-W38-r1-risk-register.md)) | Data / Technical | FormSG is confirmed the apply mechanism for every pilot agency — migration of MVP-era application data is unaddressed | Confirm with Adrian/BOs whether in scope for R1; volume estimate should cover the 6 pilot agencies |

## 13. Engineering Requirements Summary

**Not applicable — already live.** This epic needed no native-apply build for any population, just a discovery pull-through and a FormSG-link-extraction/deep-link rule, plus the disabled-state UX for postings with no link. All of it shipped in MVP; no engineering capacity from the parent R1 squad is allocated here.

## 14. Decision Tracker (Key BO Calls Needed)

| Decision Needed | Who Decides | Needed By | Recommendation |
|---|---|---|---|
| **FormSG MVP data migration: in or out of scope? (6 pilot agencies)** | Adrian / PSD BOs | Before launch | Pilot-population scope, since FormSG is confirmed the apply mechanism for the 6 pilot agencies |

---

*Related: [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md), [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md), [STIPs & Gigs Discovery-to-Application Brief](../decisions/2026-09-22-W39-stips-gigs-discovery-access-brief.md), [STIPs & Gigs Scope Map](../decisions/2026-09-22-W39-stips-gigs-scope-map.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (6-pilot-agency discovery scope, zero-HR-role finding, architecture-whiplash process risk), [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md), [Opportunities Full-Scope Vision](../strategy/2026-09-28-W40-opportunities-full-scope-vision.md)*

*Next review: once the re-estimate against this confirmed shape lands.*

---

## Correction History

This epic's apply mechanism changed three times on 25 Sep alone — full detail preserved in the [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md)'s entries on the STIPs & Gigs apply mechanism and the architecture-whiplash process risk, rather than repeated here. Summary: (1) fully native Compass apply for all agencies, (2) a pilot/non-pilot split (6 pilot agencies native, rest OTG/FormSG) based on an incomplete relay of Mark/GK's direction, (3) the confirmed final model above — uniform FormSG-extraction for every agency, sourced from a direct meeting transcript. The register's process-risk entry tracks the trust cost this created; treat any future re-scope of this epic as requiring a joint Adrian/Xian/Mark/GK confirmation, not a single relayed account.

**29 Sep, two further corrections.** (1) This epic is confirmed already shipped in MVP, not build scope. Every "groomable" and "pending re-estimate" claim throughout this document is now wrong; corrected the Status field, Section 7's scope table, and Sections 8/11/12/13/14. (2) R1's population is the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), not WOG-wide. Corrected every population claim throughout, reversing the "WOG-wide, confirmed by R-14, resolved 23 Sep" framing that had held in Section 3 since this epic was written. See the parent [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md)'s own Document History for the source of both corrections.
