# UAT Test Scenarios — Core, Pathfinder, Intelligence

**Status:** Draft for review — derived from confirmed MVP scope in context-library PRDs and live Jira ACs, not yet validated with each Tech Lead.

**Purpose:** Companion to `UAT Plan Overview (Draft)` — fills in Section 5 Condition 1 ("Consolidated end-to-end scenario written... linked to its Epic") per team, plus the cross-squad integration scenarios the current plan's per-team RACI doesn't own.

---

## How to read this

Acceptance criteria (Jira) define when a *story* is done. These are UAT *scenarios* — end-to-end user journeys, often spanning multiple stories or multiple teams, written from the tester's (Chris/XZ's) point of view. Each row maps back to the Jira ID(s) it's derived from, but is not a restatement of any single AC.

Four categories, matching the UAT plan's team scope plus one it's currently missing:
1. **Core** (My Profile, Your Development, Course Explore)
2. **Pathfinder** (Login, Opportunities Explore)
3. **Intelligence** (CIE Engine)
4. **Integration / Handoff** — cross-squad seams, not owned by any single team in the current RACI

---

## 1. Core Scenarios

### Epic: My Profile (Officer Profile)

| # | Scenario | Preconditions | Steps | Expected result | Source |
|---|---|---|---|---|---|
| C-P1 | View profile — pilot officer, complete POCDEX data | Logged in, ESG/PSD pilot officer, POCDEX record present | Navigate to profile page | Name, agency, competencies load correctly from POCDEX/HRPS/Cumulus chain | officer-profile.md |
| C-P2 | View profile — pre-POCDEX push (race condition) | Officer's WOG AD account exists but POCDEX hasn't pushed their record yet | Attempt login/profile access | OTEP blocks access with clear messaging (not a silent failure) | pocdex.md — explicit edge case |
| C-P3 | Profile bounce/abandonment check | New pilot officer, first login | Load profile page | Page loads within acceptable time; used to validate the >60% bounce guardrail isn't triggered by real UAT users | officer-profile.md guardrail |
| C-P4 | Competency data mapping accuracy | Officer with known POCDEX Job ID | View profile competencies | Competencies correctly mapped POCDEX Job ID → OTG Role Profile Bank → WOG FC Bank | officer-profile.md — flagged as a real risk ("complex data mapping rules") |
| C-P5 | OTG self-assessed data visibility | Officer has self-assessed competencies in legacy OTG | View profile | Confirm whether OTG self-assessed info is shown or blocked per the open policy decision — **do not write this as pass/fail until Imelda+WD decide** | officer-profile.md, my-development.md open question |

### Epic: Your Development (Competency Gap + Role Change)

| # | Scenario | Preconditions | Steps | Expected result | Source |
|---|---|---|---|---|---|
| C-D1 | View competency gap analysis | Logged in, role profile available | Navigate to gap analysis | Gaps shown correctly vs. officer's current role profile | my-development.md |
| C-D2 | Role overlap — multiple concatenated matches | Officer's Job Family + Function + Next Grade maps to >1 role profile | View gap analysis | User is prompted to explicitly select a role, not silently defaulted | my-development.md — named risk |
| C-D3 | Gap analysis → opportunities click-through | Officer viewing a gap | Click through to relevant opportunity | Lands correctly on opportunity (tests the funnel metric directly) | my-development.md success metric |
| C-D4 | Gap analysis → courses click-through | Officer viewing a gap | Click through to relevant course | Lands correctly on course discovery | my-development.md success metric |
| C-D5 | Role change event — competency profile update | Officer's HR record changes role in HRPS/Cumulus mid-pilot | Trigger role change (or simulate), reload profile | Competencies update to reflect new role, old role's competencies don't persist incorrectly | competency-profile.md |
| C-D6 | Role change — return to previous role (secondment/SR edge case) | Officer returns to a prior role after secondment | Trigger reversion | Historical data not duplicated or overwritten incorrectly | competency-profile.md — explicitly named unresolved edge case |

### Epic: Course Explore (Search)

⚠️ **No dedicated Course Explore PRD exists** — closest match is `learning-course-discovery.md`, which describes course discovery generally but the UAT doc names this epic specifically as "Course Explore (Search)." Confirm with Imelda whether this is the same scope before treating the scenarios below as complete.

| # | Scenario | Preconditions | Steps | Expected result | Source |
|---|---|---|---|---|---|
| C-C1 | Course search — results | Logged in, DLE SFTP catalog loaded | Search a known course keyword | Matching courses returned | learning-course-discovery.md |
| C-C2 | Course search — zero results | Logged in | Search a nonsense keyword | Zero-results state shown | learning-course-discovery.md (pattern match to Pathfinder's search) |
| C-C3 | Course catalog freshness | DLE SFTP feed present | Compare catalog against latest SFTP file | Catalog reflects latest transfer, not stale data | learning-course-discovery.md — MVP relies entirely on SFTP, no live API until Q3 |
| C-C4 | Course click-through to LEARN | Officer clicks a course | Redirect to LEARN | Correct SSO handoff — **flag as at-risk**: LEARN identifier (NRIC vs Email) is an open question | learning-course-discovery.md open question |
| C-C5 | Course recommendation attribution | Officer enrolls via OTEP referral | Check LEARN enrolment record | Attribution token passes through — **flag as at-risk**: DLE attribution support is an open question, and this is the North Star metric input | learning-course-discovery.md — risk explicitly named |

---

## 2. Pathfinder Scenarios

*(Carried forward from earlier review — included here for one consolidated document.)*

### Epic: Login (WOG Authentication)

| # | Scenario | Preconditions | Steps | Expected result | Source |
|---|---|---|---|---|---|
| P-L1 | Successful login — pilot agency officer | Valid WOG AD credentials, agency in pilot 6 | Login | Redirected to authenticated home | OTEP-71 |
| P-L2 | Login rejected — non-pilot agency | Valid credentials, non-pilot agency | Attempt login | Access-denied message, no session | OTEP-111 |
| P-L3 | Login rejected — deactivated POCDEX profile | Valid AD creds, deactivated POCDEX profile | Attempt login | Access-denied message | OTEP-111 |
| P-L4 | Invalid credentials | Wrong password | Attempt login | Clear error, no session | OTEP-71 |
| P-L5 | Session inactivity timeout | Logged in, idle 30+ min | Attempt action after idle | Session expired message | OTEP-304 |
| P-L6 | Session max duration (12hr) | Logged in 12+ hrs | Attempt action | Force-expired | OTEP-304 |
| P-L7 | Logout — full termination | Logged in | Logout | Session terminated, back-button blocked | OTEP-305 |
| P-L8 | Shared-computer logout integrity ⚠️ zero-tolerance | Officer A logs out on shared device | Officer B attempts access | B cannot reach A's data | OTEP-305/WOG-17 |
| P-L9 | Unauthenticated deep-link redirect | Not logged in | Visit direct opportunity URL | Redirect to login, land back on same page post-login | OTEP-128 |
| P-L10 | First-login POCDEX pre-fill | First login | Complete login | Name pre-filled correctly (<5% mismatch guardrail) | wog-authentication.md |

⚠️ **P-L2–P-L4 blocked on OTEP-110** (does OTEP or WOG AD own error UI?) — resolve before these can be finalized as pass/fail.

### Epic: Opportunities Explore (Search)

| # | Scenario | Preconditions | Steps | Expected result | Source |
|---|---|---|---|---|---|
| P-O1 | View listing — ringfenced | Logged in | Load listing | Only eligible opportunities, 15/page | OTEP-85, OTEP-127 |
| P-O2 | Pagination | >15 results | Page 2 | Correct next set | OTEP-267 |
| P-O3 | Empty state | Zero results | Load listing | Empty-state UI | OTEP-268 |
| P-O4 | Error state | Backend failure | Trigger failure | Error-state UI | OTEP-268 |
| P-O5 | Partial-load state | Partial failure | Trigger | Graceful partial state | OTEP-268 |
| P-O6 | Keyword search — results | Logged in | Search known term | Matching results | OTEP-91 |
| P-O7 | Keyword search — zero results | Logged in | Search nonsense term | Zero-results state | OTEP-91 |
| P-O8 | Filter by type | Logged in | Apply filter | Listing narrows | OTEP-86 |
| P-O9 | View detail page | Logged in | Click card | Detail loads | OTEP-128 |
| P-O10 | Closed opportunity — deep link | Past closing_date | Visit direct link | Closed-state UI | OTEP-129 |
| P-O11 | "Closing soon" label | Closes ≤7 days | View card + detail | Label visible both places | OTEP-284 |
| P-O12 | Apply — FormSG redirect (basic) | STIP/Gig/Internal Job | Click Apply | Correct FormSG tab opens | OTEP-319 |
| P-O13 | C@G listing label | C@G-sourced opportunity | View card | C@G badge visible | OTEP-88 |
| P-O14 | C@G deep-link apply | C@G opportunity | Click apply | Redirects to C@G | OTEP-89 |
| P-O15 | Ringfencing edge case — agency mismatch | Officer A, opportunity restricted to Agency B | Search/browse | Restricted opportunity absent | OTEP-127 |

⚠️ **Out of scope:** OTEP-130 full FormSG (webhook/tracking/emails — unconfirmed, open item #57), filter by category (OTEP-318, no ACs), SJR/OTEP-132 (R1), competency match ratio (R1).

---

## 3. Intelligence Scenarios

### Epic: CIE Engine (Competency Inference Engine)

⚠️ **No CIE-owned PRD exists in context-library.** The only PRD referencing CIE is `cv-upload-inference.md`, owned by Core/Imelda, which describes CIE as a *consumed* backend service, not CIE's own build scope. Victor (Intelligence Tech Lead) needs to confirm these scenarios are complete — this list is inferred from the consumer side only, which is also exactly the gap the UAT doc itself flags ("Confirm with Victor whether CIE Engine relies on any external system").

| # | Scenario | Preconditions | Steps | Expected result | Source |
|---|---|---|---|---|---|
| I-C1 | CV upload — competency inference | Officer uploads a .docx CV | Upload, wait for inference | Competencies inferred and displayed as "recommended," distinct from confirmed | cv-upload-inference.md |
| I-C2 | Text paste — competency inference | Officer pastes CV text instead of uploading | Paste, submit | Same inference behavior as upload path | cv-upload-inference.md |
| I-C3 | Accept inferred competency | Inferred competencies shown | Officer accepts one | Moves from "recommended" to "confirmed/saved" state | cv-upload-inference.md — engagement metric |
| I-C4 | Reject/ignore inferred competency | Inferred competencies shown | Officer ignores/dismisses | Not saved to profile, no forced acceptance | cv-upload-inference.md |
| I-C5 | Agency-specific competency — inference gap | CV includes a genuinely agency-specific skill not in WOG FC Bank | Upload CV | CIE does not fabricate a match — either omits or flags low-confidence | cv-upload-inference.md — named constraint (CIE only trained on WOG FC Bank) |
| I-C6 | .docx upload — SIS whitelisting | Gov device, SIS not yet whitelisted for this file type | Attempt upload | Confirm graceful failure behavior — **flag as at-risk**: whitelisting status itself is unconfirmed dependency | cv-upload-inference.md |
| I-C7 | AI disclaimer visibility | Any inference result shown | View inferred competencies | Disclaimer present distinguishing AI-suggested from verified — **content TBD**, open question in PRD | cv-upload-inference.md open question |

⚠️ **Gap to raise with Victor directly:** none of the above test CIE's inference *quality/accuracy* at a model level (precision/recall on known test CVs) — only the UI/product behavior around it. If Intelligence intends UAT to validate inference accuracy itself (not just Chris/XZ, who aren't ML evaluators), that needs a separate validation track, not a UAT board ticket.

---

## 4. Integration / Handoff Scenarios (cross-squad — currently unowned)

**Why this category exists:** the current UAT plan's RACI (Section 1) assigns scenario-writing per team per epic. But several behaviors only manifest at the seam between squads, and no one currently owns writing or executing them. Recommend adding this as an explicit 4th row in Section 1, jointly owned by the three PMs and reviewed by Ram.

| # | Scenario | Squads involved | Preconditions | Steps | Expected result | Why it's a gap today |
|---|---|---|---|---|---|---|
| X-1 | Login → Core profile load | Pathfinder → Core | Fresh login | Log in, land on/navigate to profile | Profile loads correctly using the session Pathfinder created | Core's PRD assumes a working session but no scenario in either team's set tests the handoff itself |
| X-2 | Login → Intelligence CIE access | Pathfinder → Intelligence | Fresh login | Log in, attempt CV upload/inference | CIE recognizes the authenticated officer correctly | Same gap — Intelligence has no login-dependency scenario of its own |
| X-3 | Competency profile update → downstream display | Core → Pathfinder | Officer's competency profile changes (role change or CIE-accepted inference) | Trigger change, then view Opportunities listing | Confirm what Pathfinder is *supposed* to show — likely nothing changes since competency match ratio is deferred to R1, but this should be an explicit "confirmed no visible change" pass, not an untested assumption | Nobody currently owns verifying the deferred scope boundary holds under UAT |
| X-4 | Job family/function mapping → ringfencing accuracy | Core → Pathfinder | Officer's job family/function mapping is correct/incorrect in test data | Compare ringfencing behavior (P-O15) against known-correct vs. known-incorrect mapping | Ringfencing reflects the mapping correctly; incorrect mapping produces a visible, triageable failure (not silent wrong access) | This is your weekly plan's 🔴 Critical risk (Priority 2) — currently untested by any single team's scenario set |
| X-5 | Role change → Course/Opportunity recommendation consistency | Core → Pathfinder | Officer's role changes mid-UAT | Reload My Development, Opportunities, Course Explore | All three surfaces reflect the same updated role state — no stale data in one while another updates | Data-freshness/consistency across three independently-built surfaces has no dedicated owner |
| X-6 | CV-inferred competency → gap analysis update | Intelligence → Core | Officer accepts a CIE-inferred competency | Navigate to My Development gap analysis | Gap analysis reflects the newly-accepted competency | Tests whether Intelligence's output actually reaches Core's consuming feature, not just that CIE itself works |
| X-7 | Shared UAT environment — one team's deploy affects another | All three | Any team deploys mid-cycle | Deploy during another team's active execution window | Confirm whether an unannounced deploy breaks another team's in-progress test run | UAT doc's own "Deployment policy" is an unresolved placeholder; Section 6 has staggered but *overlapping* execution windows (Core retest overlaps Pathfinder execution, etc.) — a deploy collision here has no defined process |

---

## Open items this scenario-writing exercise surfaced

1. **OTEP-110** (Login error UI ownership) blocks finalizing P-L2–P-L4 as pass/fail — needs resolution before scenario-writing, not just before build.
2. **Course Explore PRD gap** — confirm `learning-course-discovery.md` is the intended scope, or locate the correct doc.
3. **CIE PRD gap** — no Intelligence-owned PRD exists; I-C1–I-C7 are inferred from the consumer side only. Victor needs to confirm completeness.
4. **Job family/function mapping (X-4)** — this is the same 🔴 Critical risk from your weekly plan's Priority 2. It now has a concrete UAT scenario, but the mapping itself still has no confirmed delivery date (Adrian Lo).
5. **LEARN SSO identifier and DLE attribution** (C-C4, C-C5) are both open questions that directly gate whether their scenarios can pass — flag to Imelda before Phase 0.
6. **Deployment policy during overlapping execution windows (X-7)** — Section 2's placeholder ("Confirm: deployments only between cycles") needs an answer before Phase 1 starts, since Section 6's timeline has real overlap between teams.

---

*Generated: 2026-07-17*
*Companion to: `UAT Plan Overview (Draft).md`*
*Next: Validate Core/Intelligence scenarios with Imelda/Victor; confirm Integration/Handoff category ownership with Ram before Phase 0 (11 Aug)*
