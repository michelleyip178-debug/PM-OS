---
date: 2026-09-24
updated: 2026-09-25
week: 2026-W39
type: user-stories
topic: R1 Epic A — STIPs & Gigs (Discovery for All, FormSG-extraction Apply, Unchanged from MVP)
status: rewritten 25 Sep, third rewrite this round — uniform FormSG-extraction model confirmed final, pilot/non-pilot split withdrawn
---

# R1 Epic A — STIPs & Gigs: User Stories

> **🔴 REWRITTEN 25 Sep, third rewrite this round.** The prior version of this document (also dated 25 Sep) described a pilot/non-pilot split: 6 pilot agencies applying natively in-app, non-pilot agencies applying entirely on OTG. **That split has been withdrawn.** A direct meeting transcript (OTEP Squad Sync) surfaced that it was based on an incomplete relay of Mark/GK's direction. The actual confirmed model: STIPs & Gigs apply is **unchanged from MVP**, for every agency, no exceptions. Compass extracts the FormSG link embedded in the OTG posting's description and shows it as the Apply button. If a posting has no FormSG link, the Apply button is disabled and the officer is told to contact the poster directly. **No native in-app apply exists anywhere** — not for pilot agencies, not for anyone. Full detail: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-27, third pass), [Epic A One-Pager](2026-09-24-W39-epic-a-stips-gigs-one-pager.md). This is a confirmed, final decision, sourced from a direct transcript rather than a second-hand relay.
>
> **Why this document keeps the pilot/non-pilot-era stories below instead of deleting them:** US-A8, US-A10 through US-A13, and US-A19 (the previous version's pilot-agency native-apply set) were drafted against a model that held for a few hours. Rather than erase that pass, it's marked superseded with a one-line reason, same treatment as the original US-A1–A14 native-architecture set and the US-A16–A17 FormSG-redirect set below it. This is now the fourth shape this epic has had in three days — all of them stay visible for anyone reconstructing why.

**Why this epic first (unchanged reasoning across all four shapes):** STIPs & Gigs remains the epic with the fewest open blockers — it doesn't depend on HRPS/Cumulus API delivery (R-07) or the cross-HR-system auth gap (R-24) the way Internal Jobs and Secondment do. What's changed each time is the size and shape of what's being built, not the sequencing logic.

**Zero-HR-role, resolved:** STIPs & Gigs has zero HR role of any kind (R-27), and this now holds cleanly with no caveat — there's no in-app applicant data anywhere in this model, for any agency, so there's nothing for HR to have a role in. The prior version's open question (re-confirm against the pilot-agency native flow) no longer applies, since that flow doesn't exist.

---

## Path 1: OTG Discovery Pull-Through (all agencies, everyone)

**US-A15: Discover STIPs & Gigs pulled in from OTG**
As an officer, I want to see STIP and Gig postings from OTG inside Compass's unified Opportunities catalog, so that I don't need to already know OTG is where to look.

- Given a STIP or Gig is live in OTG, when Compass's discovery pull-through syncs, then the posting appears in the unified Opportunities catalog, WOG-wide.
- Given I search or filter the catalog, when results return, then STIPs & Gigs postings are indistinguishable in browsing experience from other discovery-only types (Internal Jobs, IJR, Secondment), regardless of my agency.
- **Open technical question (Rama/Barry):** sync mechanism and frequency — live pull vs. periodic batch, and what OTG's API actually exposes for this. Not yet scoped in detail.
- Applies identically to every agency — neither discovery nor apply splits by agency under the confirmed model (see Path 3 below).

**US-A18: See how I'll apply before I click**
As an officer, I want the listing to make clear that Apply takes me to an external FormSG form (or is disabled if none exists), so that I know what to expect before I click Apply.

- Given I view a STIP/Gig listing or detail page, when I check the Apply button, then its state (deep-link vs. disabled) is determined by whether the posting's OTG description contains a FormSG link — not by my own agency or any pilot status.
- This is a per-posting distinction, not a per-officer one. Every officer sees the same Apply behavior for a given posting, regardless of their agency.
- **Open (Rama/Barry):** exact FormSG-link parsing rule for the OTG posting description field — not yet confirmed. See Epic A one-pager, Section 14.

---

## Path 2 (Superseded): Pilot-Agency Native Apply — withdrawn 25 Sep

**Superseded, 25 Sep, same day the previous version of this document introduced it.** A direct meeting transcript (OTEP Squad Sync) revealed the pilot/non-pilot split was based on an incomplete relay of Mark/GK's direction. No native in-app apply exists for any agency, pilot or not. These stories are kept, not deleted, for historical traceability:

**US-A8: Apply without leaving Compass (pilot agencies)** — **Superseded, 25 Sep.** No native in-app apply exists for any agency. Apply is unchanged from MVP for everyone — FormSG link extraction, not a native modal. See the new US-A20 below.

**US-A10: Get notified when someone applies (pilot agencies)** — **Superseded, 25 Sep.** No native application ever gets submitted in Compass, so there's no submission event to notify a creator about. Applicant notifications, if any, happen through FormSG's own mechanism, off-platform.

**US-A11: Review pilot-agency applicants in one place** — **Superseded, 25 Sep.** No in-app applicant review table exists for any agency. Applicant review happens through FormSG's own response view, entirely off-platform.

**US-A12: Offer or reject a pilot-agency applicant** — **Superseded, 25 Sep.** No in-app decision flow exists for any agency. Offer/reject decisions happen through whatever process the poster already uses (FormSG responses, email), off-platform.

**US-A13: Restrict pilot-agency applicant data access to the right people** — **Superseded, 25 Sep.** No in-app applicant data exists for any agency, so there's no drawer or dataset to gate. Zero-HR-role (R-27) holds cleanly — there's nothing native for RBAC to protect.

**US-A19: Track my application status (pilot agencies)** — **Superseded, 25 Sep.** No in-app status exists for any agency. Status, if visible at all, is whatever FormSG's own confirmation/response mechanism already shows, off-platform.

---

## Path 3: Apply via FormSG (all agencies, everyone — the confirmed final model)

**US-A20: Apply via the posting's FormSG link, unchanged from MVP, for every agency**
As an officer of any agency, I want to apply to a STIP or Gig exactly the way I do today, so that nothing changes for me except that I found the listing through Compass instead of OTG directly.

- Given I'm viewing a STIP/Gig detail page, when the posting's OTG description contains a FormSG link, then clicking Apply deep-links me to that FormSG form to complete the application there.
- Given the posting's OTG description contains no FormSG link, when I view the detail page, then the Apply button is disabled and shows messaging telling me to contact the poster directly.
- Compass has no further role in this officer's apply, track, or outcome flow, for any agency — no native modal, no pre-fill, no in-app status, no agency-based branching.
- This is the confirmed, final model as of 25 Sep — replaces both the withdrawn Path 2 (pilot-agency native apply) and the population-specific framing of the earlier "non-pilot OTG-only" version of this story. There is one population, one story, no agency distinction.

---

## Creation & Lifecycle (OTG-only, every agency, unaffected by any apply-mechanism version)

**US-A1: Post a STIP or Gig** — **No longer applicable in Compass, any agency.** Posting continues in OTG for every agency, no exceptions. Compass does not offer a "Create Posting" action. Unaffected by which apply model is in effect.

**US-A2: Confirm my Reporting Officer is aware** — **No longer applicable in Compass.** Was a control on the native creation flow (US-A1), which doesn't exist in Compass for any agency. Whatever OTG's posting flow already requires is unaffected by this epic.

**US-A3: Add co-evaluators** — **No longer applicable in Compass, confirmed 25 Sep, third pass.** Creation and review stay entirely OTG/FormSG-side, for every agency, no exceptions. The prior version's open question (whether this resurfaces for pilot-agency review) is now resolved: it doesn't.

**US-A4: Use a custom application form when the standard one doesn't fit** — **No longer applicable.** There is no Compass-native form for any agency. Whatever OTG's/FormSG's existing form policy is applies, unaffected by this epic.

**US-A5: Publish instantly** — **No longer applicable in Compass.** Publishing happens in OTG for every agency. Compass has no publish action to instrument.

**US-A6: Auto-expire stale postings** — **No longer applicable in Compass.** Lifecycle management stays entirely in OTG. Compass's discovery pull-through (US-A15) reflects whatever state OTG reports.

**US-A7: Close a filled posting manually** — **No longer applicable in Compass.** Same reasoning as US-A6 — closure happens in OTG.

**US-A14: Handle an orphaned posting** — **No longer applicable in Compass.** Was a fallback for a Compass-native Posting Owner role (US-A1), which doesn't exist for any agency under this model. Whatever OTG already does when a posting's creator leaves is unaffected by this epic.

---

## Superseded: FormSG-Redirect Stories (25 Sep, morning pass) — since reinstated as US-A20

The first same-day version of this document (25 Sep, morning) replaced the native-architecture stories above with a single discovery + FormSG-redirect model. At the time it was marked superseded by the pilot/non-pilot split. **That split has since been withdrawn, and the morning pass's core idea is now confirmed correct** — see US-A20 above, which supersedes both of these:

**US-A16: Redirect to FormSG to apply** — **Superseded, reinstated in substance as US-A20.** The underlying mechanism (FormSG as the apply destination, for every agency) is now confirmed correct. US-A20 restates it precisely: a deep link to the extracted FormSG URL, not a generic redirect, plus the disabled-button case this version adds.

**US-A17: Signal the redirect clearly before the officer clicks** — **Superseded, reinstated in substance as US-A18.** The underlying need (make clear what happens on Apply) is still real and is now scoped correctly in US-A18: signaled per-posting based on FormSG-link presence, not per-officer based on agency.

---

## Explicitly Out of Scope (Don't Write Stories For)

Native posting creation in Compass for any agency, native in-app apply/review/decision flow for any agency, dynamic form builders, multi-file resume/portfolio uploads, multi-stage ATS pipeline, automated regret emails, in-app post-offer messaging or contract generation, formal HR placement workflows, recurring auto-reposting, public archive of closed postings, complex HR approval chains, automated compliance dashboards, automated FormSG webhook sync, RBAC/applicant-data infrastructure of any kind (no applicant data exists in Compass to gate, for any agency).

---

## Ready to Size vs. Blocked

| Story | Population | Groomable now? |
|---|---|---|
| US-A15 (OTG discovery pull-through) | All agencies | Yes, pending the OTG sync mechanism question |
| US-A18 (FormSG-link-vs-disabled signaling) | All agencies | Pending the FormSG-link parsing rule (Epic A one-pager, Section 14) |
| US-A20 (FormSG-extraction apply) | All agencies | Yes — this is the confirmed, final story for this epic's apply mechanic |
| US-A1 – US-A7, US-A14 (original native creation/lifecycle) | N/A | **No longer applicable — do not size.** Kept for historical traceability |
| US-A8, US-A10 – US-A13, US-A19 (pilot-agency native-apply pass) | N/A | **Superseded, withdrawn 25 Sep — do not size.** Kept for historical traceability |
| US-A16 – US-A17 (original FormSG-redirect pass) | N/A | **Superseded, reinstated in substance as US-A18/US-A20 — do not size these directly, size their replacements instead.** |

---

*Related: [R1 Release One-Pager](2026-09-23-W39-r1-release-one-pager.md), [Epic A One-Pager](2026-09-24-W39-epic-a-stips-gigs-one-pager.md), [STIPs & Gigs Discovery-to-Application Brief](../decisions/2026-09-22-W39-stips-gigs-discovery-access-brief.md), [STIPs & Gigs Scope Map](../decisions/2026-09-22-W39-stips-gigs-scope-map.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, R-27, R-31), [OTEP Squad Sync meeting notes](../meeting-notes/2026-09-25-W39-otep-squad-sync-r1-rescope.md)*

*This is the fourth full version of this document. The first (23-24 Sep) described a fully native-Compass architecture. The second (25 Sep morning) reversed to a uniform discovery + FormSG-redirect model. The third (25 Sep afternoon) corrected that to a pilot/non-pilot split. This version withdraws that split — a direct meeting transcript confirmed the second version's uniform-FormSG model was actually correct all along. US-A20 (Path 3) is now the epic's single apply story, for every agency, no exceptions. This is confirmed final, not tentative — don't rewrite this epic's apply model again without a joint Adrian/Xian/Mark/GK confirmation per R-31's mitigation.*
