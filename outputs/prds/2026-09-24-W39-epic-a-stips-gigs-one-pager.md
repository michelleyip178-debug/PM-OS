*Draft, not yet synced to Confluence. Scoped out of [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md). Source: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md), [STIPs & Gigs Discovery-to-Application Brief](../decisions/2026-09-22-W39-stips-gigs-discovery-access-brief.md), [STIPs & Gigs Scope Map](../decisions/2026-09-22-W39-stips-gigs-scope-map.md), [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md). Template origin: [Product Epic 1-pager Template](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931675660/Product+Epic+1-pager+Template).*

# CareerCompass | OTEP-Pathfinder — Epic A: STIPs & Gigs

**Status: this is the third distinct shape this document has had today.** First (23-24 Sep): fully native Compass apply, WOG-wide. Second (25 Sep, afternoon): a pilot/non-pilot split — 6 pilot agencies native apply, everyone else OTG-only. Third and final (25 Sep, this version): apply is unchanged from MVP for every agency, no exceptions — Compass extracts FormSG links from OTG posting descriptions and shows them as the Apply button. This is confirmed final, sourced from a direct meeting transcript (OTEP Squad Sync), not a second-hand relay. See [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27, third pass) for the authoritative source.

| | |
|---|---|
| **Release** | R1 (Opportunities Marketplace) — Epic A only |
| **Date** | 24 Sep 2026 |
| **Target** | **⚠️ Pending re-estimate (R-12)** — same as parent R1 doc, no epic-specific date yet |
| **Status** | Uniform FormSG-extraction model confirmed 25 Sep, third and final pass — effort pending re-estimate |
| **Author** | Michelle Yip |
| **Last updated** | 25 Sep 2026, third and final correction this round — apply reverts back to uniform FormSG-extraction, for every agency, pilot/non-pilot split withdrawn (R-27, third pass) |
| **Product Designer** | Li Ting Kway (Liting) |
| **Engineering Leads** | Rama Moorthy, Barry Lim |
| **Prototype - Figma** | [zipper-ritzy-40733845.figma.site](https://zipper-ritzy-40733845.figma.site) |

## The Short Version

**🔴 Reverted again, 25 Sep, third and final pass — apply is unchanged from MVP, for every agency.** Postings for STIPs & Gigs are created in OTG, for every agency, no exceptions — Compass never builds a native creation flow. Discovery is native to Compass for everyone, pulled in from OTG. **Apply:** Compass extracts the FormSG link embedded in the OTG posting's description and shows it as the Apply button. Clicking it deep-links out to that FormSG form. If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly. No native in-app apply exists anywhere — not for pilot agencies, not for anyone.

This makes Epic A the thinnest epic in R1, thinner than either prior version. It's not two epics in one (the pilot/non-pilot version), and it's not a native-apply build for anyone (the original 23-24 Sep version). It's a discovery pull-through plus a FormSG-link-extraction rule. The pilot-agency native-apply build (RBAC, applicant review tables, in-app status tracking) does not happen.

> **🔴 R-27 REVERTED A THIRD TIME, 25 Sep.** Full detail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27, third pass). A direct meeting transcript (OTEP Squad Sync) surfaced that the pilot/non-pilot split confirmed earlier the same day was itself wrong, based on an incomplete relay of Mark/GK's direction. The confirmed model: STIPs & Gigs apply is unchanged from MVP, for every agency, no exceptions. This is a confirmed, final decision, not tentative — sourced from a direct transcript, which per R-31's mitigation is treated as higher-confidence than second-hand summaries.

---

## 1. Background & Context

**Why this matters strategically:** the original strategic case — "officer leaves Compass to apply, we lose visibility" — is not solved by this epic for any population. STIPs & Gigs apply happens through FormSG, off-platform, exactly as it did before R1. The North Star (officers completing a development action) is not directly measurable through this epic; Compass can see that an officer clicked through to a FormSG link, not whether they completed or were selected.

**Why FormSG-extraction and not a native build:** Mark and Gek Khiang's confirmed direction (OTEP Squad Sync, 25 Sep) is anchored on two principles — don't expose Compass to non-MVP agencies, and don't create dual-posting confusion between OTG and Compass. Introducing native apply for 6 pilot agencies while everyone else used FormSG was itself a source of the confusion the team is trying to avoid. Extending native apply WOG-wide was never on the table given the "don't expose Compass to non-MVP agencies" principle. The confirmed answer is the simplest one: leave apply exactly as it is today, everywhere.

**What changed today:** this is Epic A's third distinct shape in one day. First, fully native for everyone (23-24 Sep). Then reversed to fully OTG/FormSG for everyone (25 Sep, morning). Then corrected to a pilot/non-pilot split (25 Sep, afternoon) — which turned out to be based on an incomplete relay and was itself wrong. Now reverted a third time (25 Sep, this version) back to the uniform FormSG model the morning pass originally landed on — this time confirmed by a direct meeting transcript, not a verbal relay. See [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27, R-31) for the full correction chain.

## 2. Problem Statement

**For officers, any agency:** you find a STIP or Gig worth applying to. Today, and under this confirmed R1 model, that means clicking Apply and being taken to a FormSG form outside Compass — same as it's always been. This epic doesn't close the "leave and lose visibility" gap. What it does fix: today, an officer has to already know to look on OTG. Under this epic, they can discover the same posting inside Compass's unified catalog and get straight to the right FormSG form via a deep link, instead of navigating OTG themselves.

**For posting creators (any officer, any agency):** posting a gig continues to happen in OTG regardless of agency. Compass never becomes the place you create a listing. If your posting doesn't include a FormSG link in its description, officers see a disabled Apply button and are told to contact you directly — worth flagging to posters as a reason to always include one.

**What this epic does NOT solve:** it doesn't touch the WOG-wide cross-system auth problem (R-24) — not directly relevant here since FormSG doesn't require HR-system access. It doesn't close the "leave and lose visibility" gap for anyone. It doesn't give Compass any signal past the initial click-through — no completion, no outcome, no status.

## 3. Target User

**Population: WOG-wide, one population, one apply mechanism.** Discovery is WOG-wide (R-14, resolved 23 Sep, unaffected). Apply is now uniform too — there is no population split for apply purposes, unlike the withdrawn pilot/non-pilot version.

- **Lane 1 — Applicant (any agency):** an officer anywhere in government discovers a STIP/Gig listing in Compass and clicks Apply. If the posting has a FormSG link, they deep-link out to it. If not, the button is disabled with a "contact the poster" message. No agency-based branching of any kind.
- **Lane 2 — Posting Creator (any agency):** any officer or manager with a project, task, or gig to fill. Posts in OTG, includes a FormSG link if they want officers to be able to apply through Compass's deep link.

**Explicitly not a user of this epic:** HR, in any form (Central or Agency Admin) — R-27's zero-HR-role finding holds cleanly under this model. There's no in-app applicant data anywhere for HR to have a role in.

**No open structural question remains for this epic.** The prior version's open question ("does posting creator/review experience split by agency?") is resolved: no, everything stays OTG/FormSG-side, for every agency, no exceptions.

## 4. Value Propositions & Hypotheses

### 4.1 Overall Value Propositions

- **For Officers (any agency):** "Find every STIP and Gig across government in one place, and get straight to the right application form." Discovery is the value; applying itself is unchanged from today for everyone.
- **For Posting Creators:** posting continues to happen exactly as it does today, in OTG. The only new consideration: include a FormSG link so officers discovering your posting through Compass can actually apply.

### 4.2 Core Hypotheses (1 Line Each)

1. **Discovery (WOG-wide):** *If* Compass pulls OTG's STIPs & Gigs postings into a WOG-wide catalog, *then* monthly active searchers will grow, since officers no longer need to already know OTG is where to look. No target set yet.
2. ~~**Gig Apply (Pre-fill):**~~ **Retired 25 Sep, third and final pass.** No native apply form exists for any population — there's nothing to pre-fill. This hypothesis does not apply.

*Discovery is the sole surviving hypothesis for this epic. Any pre-fill/completion-rate hypothesis from either earlier version of this document does not apply under the confirmed model.*

## 5. End-to-End User Journey

Full stage-by-stage mechanics should be redrafted in the [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md) doc as a single path. Summarized here:

### 5.1 Officer Journey (Discover → Deep-Link/Redirect → Apply on FormSG)

1. **Discover:** logs in via WOG AD, lands on the unified Opportunities catalog, sees STIP/Gig listings pulled from OTG, WOG-wide, no agency distinction.
2. **Bookmark (optional):** saves interesting postings to the "Saved Jobs" filter tab.
3. **Apply:** clicks Apply. If the posting's OTG description contains a FormSG link, Compass deep-links to that FormSG form. If no FormSG link exists, the Apply button is disabled and shows "contact the poster directly."
4. **Track / Outcome:** happens entirely on FormSG/outside Compass. No in-app status, no in-app outcome. Compass has no further role after the click-through.

*(There is no separate native-apply path. Every officer, every agency, gets this same journey.)*

### 5.2 Posting Creator Journey — OTG-side, every agency

Posting creation continues in OTG for every agency, no exceptions, unaffected by anything in this document's revision history. Posting owners are responsible for including a FormSG link in the posting description if they want their listing to be applyable through Compass's deep link. Applicant review and decisioning happen entirely through FormSG's own response mechanism, off-platform — no Compass involvement.

---

## 6. Success Metrics

**One metric set, one population — no pilot/non-pilot split.**

**6.1 Core North Star Contribution**

This epic contributes to the North Star only indirectly, through discovery volume. Apply and outcome both happen on FormSG, outside Compass's instrumentation, for every agency.

**6.2 Input Metrics**
- **FormSG-Click Rate:** % of STIP/Gig detail views where the officer clicks through to the extracted FormSG link. This is the epic's actual measurable apply-intent signal — Compass has no visibility past this click.
- **Dead-End Apply Rate:** % of STIP/Gig detail views where the Apply button is disabled because the posting has no FormSG link. New metric, 25 Sep — flags posters who aren't including a FormSG link, a real gap this model creates.
- ~~**Apply Completion Rate (pilot agencies only)**~~ — **Retired 25 Sep, third and final pass.** No native completion event exists for any population.
- ~~**Status Latency (pilot agencies only)**~~ — **Retired 25 Sep, third and final pass.** No native status exists for any population.

**6.3 Guardrail Metrics**
- If Dead-End Apply Rate exceeds 15% at the 4-week mark, escalate to Adrian/BOs on whether to require FormSG links at posting time on OTG.
- ~~Pilot officer satisfaction ≥3.5/5. Pre-fill trust (pilot agencies).~~ **Retired 25 Sep, third and final pass.** No native form exists for any population, so there's nothing to build pilot-specific satisfaction or pre-fill-trust guardrails around.

## 7. Scope (Stories + Success Criteria)

**Confirmed 25 Sep, third and final pass — a single path, not two.** Full detail rewritten in [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md).

| Stage | Story | Population | Groomable now? |
|---|---|---|---|
| Discovery | Pull OTG postings into Compass catalog | All agencies | Yes |
| Discovery | Extract FormSG link from posting description, surface as Apply button | All agencies | Yes — this is the epic's core build |
| Apply | Deep-link to the extracted FormSG URL | All agencies | Yes |
| Apply | Disabled Apply button + "contact the poster" messaging, when no FormSG link exists | All agencies | Yes |
| Creation | Open posting creation | OTG only, every agency | N/A — not a Compass build |

**Explicitly Out of Scope:** native creation/posting flow (any agency), native in-app apply/review/decision flow (any agency), dynamic form builders, multi-file resume/portfolio uploads, multi-stage ATS pipeline, automated regret emails, in-app post-offer messaging or contract generation, formal HR placement workflows, recurring auto-reposting, public archive of closed postings, complex HR approval chains, automated compliance dashboards, automated FormSG webhook sync, RBAC/applicant-data infrastructure of any kind (no applicant data exists in Compass to gate).

## 8. What We Need You to Design (For Liting)

**Design scope is at its smallest point yet, confirmed 25 Sep, third and final pass.** No native form, no review table, for any agency, ever in this epic's scope:

1. **The FormSG deep-link / "you'll apply on FormSG" pattern.** How a listing card and detail view signal that Apply takes the officer to an external FormSG form. Applies to every agency, no exceptions.
2. **The disabled-Apply "contact the poster" state.** For postings with no FormSG link in the description. New design need, 25 Sep.
3. **The saved jobs bookmark toggle.** Unaffected — shared component, see the parent R1 one-pager, Section 8.

~~The fixed standard application form.~~ ~~The poster's applicant review table.~~ **Both retired 25 Sep, third and final pass.** Neither exists for any population under this model.

## 9. Data Analysis & Evidence

No pilot-specific or population-specific baseline applies anymore — there is one population and one apply mechanism. FormSG-click-through and dead-end rates have no historical baseline in Compass (never tracked before); both start at zero measured data once this epic ships.

## 10. Market / Benchmark Scan

Not done.

---

## 11. Go-To-Market & Timeline

**⚠️ Pending re-estimate (R-12)**, same as the parent R1 doc. This epic's build scope is now the smallest of any version today — smaller than this morning's discovery-only misreading might have implied even, since that version still carried some ambiguity about redirect-signaling complexity, and materially smaller than the pilot/non-pilot split. Flag this specific sizing to Rama directly — the epic's shape has changed three times today, and this is the version to estimate against.

---

## 12. Risks, Assumptions & Mitigations

| Risk | Category | Impact | Mitigation |
|---|---|---|---|
| **R-27 — STIPs & Gigs apply reverted a third time, 25 Sep, confirmed final** | Scope / Operational Readiness | Zero-HR-role holds cleanly — no in-app applicant data exists anywhere in this model, for any agency. A real, if narrow, risk: posters who don't include a FormSG link produce a dead-end Apply button, with no system-level enforcement proposed | Confirm with Rama/Barry how FormSG link extraction actually parses posting descriptions, and what "disabled Apply, contact poster" looks like in the UI |
| **R-12 — Effort/timeline unreconciled** | Timeline | This epic's scope changed three times today; no standalone estimate exists against the current, correct, final shape | Re-run the estimate against the uniform FormSG-extraction model — this is the version to size against, not either of the earlier same-day versions |
| **R-29 — FormSG MVP data migration (full scope again, 25 Sep)** | Data / Technical | FormSG is confirmed the apply mechanism for every agency, not just a non-pilot subset — this is back to its original, full-population scope | Confirm with Adrian/BOs whether in scope for R1; volume estimate should cover all agencies |
| **R-31 — three same-day scope changes for one epic, proven out again same day** | Process | Engineering or design work started against either of today's earlier versions (fully native, or pilot/non-pilot split) would need correcting a second time. This is the second reversal within one day, following a pattern of relayed accounts producing conflicting pictures of the same decision | Treat this version — sourced from a direct meeting transcript, not a relay — as the one to build against. Confirm directly with Rama/Liting before any build or design work proceeds |

## 13. Engineering Requirements Summary

Shares the same squad as the parent R1 doc (Section 13). **Confirmed 25 Sep, third and final pass:** this epic needs no native-apply build for any population — just a discovery pull-through and a FormSG-link-extraction/deep-link rule, plus the disabled-state UX for postings with no link. This is smaller than every prior version of this epic today, including this morning's discovery-only misreading.

## 14. Decision Tracker (Key BO Calls Needed)

| Decision Needed | Who Decides | Needed By | Recommendation |
|---|---|---|---|
| ~~**Does the posting creator / review experience also split by agency, or does creation stay purely OTG-side for everyone?**~~ | Adrian Ang | — | **Resolved, 25 Sep, third pass.** Creation and review stay entirely OTG/FormSG-side, for every agency. There is no split |
| **How FormSG link extraction should actually parse OTG posting descriptions** | Rama Moorthy, Barry Lim | Before this epic's stories go into a sprint | New structural question, 25 Sep — needs a concrete parsing rule (e.g. regex on posting description field) confirmed before stories are groomable |
| ~~**Owner for guardrail functions (RBAC, audit log) for pilot-agency native apply**~~ | Rama Moorthy, Barry Lim | — | **No longer applies, 25 Sep, third pass.** No native infrastructure exists to name an owner for |
| ~~**Standard Form Policy (pilot agencies)**~~ | Xian Zhang / Adrian | — | **No longer applies, 25 Sep, third pass.** No native form exists for any agency |
| ~~**Candidate Data Purge Window (pilot-agency applications)**~~ | Legal / PSD BOs | — | **No longer applies, 25 Sep, third pass.** No native applicant data exists to purge |
| **FormSG MVP data migration: in or out of scope? (all agencies)** | Adrian / PSD BOs | Before launch | Back to its original, full-population scope, since FormSG is confirmed the apply mechanism for everyone |

---

*Related: [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md), [Epic A User Stories](2026-09-24-W39-r1-epic-a-stips-gigs-stories.md), [STIPs & Gigs Discovery-to-Application Brief](../decisions/2026-09-22-W39-stips-gigs-discovery-access-brief.md), [STIPs & Gigs Scope Map](../decisions/2026-09-22-W39-stips-gigs-scope-map.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-14, R-27, R-31), [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md)*

*Next review: once the re-estimate against this confirmed, final shape lands. Do not re-scope this epic again without a joint Adrian/Xian/Mark/GK confirmation per R-31's mitigation — three same-day reversals is the pattern to stop, not repeat.*

---

## Superseded: Prior Versions of This Document

Kept for historical traceability, not deleted — same pattern this document's sibling stories doc uses for superseded content.

**Second version (25 Sep, afternoon): pilot/non-pilot split.** Described a two-path model — 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) applying natively in-app with a real Compass-native form and applicant review table, non-pilot agencies applying entirely on OTG. **Superseded, 25 Sep, same day** — the OTEP Squad Sync transcript revealed this split was based on an incomplete relay of Mark/GK's direction. No native apply exists for any agency under the confirmed model.

**First version (23-24 Sep): fully native Compass apply, WOG-wide.** Described a single native application form and applicant review table for all agencies. **Superseded, 25 Sep, morning** — Mark & GK's confirmed R1 direction reverses this to an OTG-dependent model for every opportunity type in scope, STIPs & Gigs apply included.
