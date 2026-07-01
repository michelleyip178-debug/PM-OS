# CareerCompass — R1 Feature Direction Brief
**Date:** 23 Jun 2026

**Purpose:** Stakeholder briefs for Adrian, Pow Hwee, and Amber — seeking approval to prototype top 3 R1 features surfaced by competitive analysis

**Source:** Competitor synthesis across OTG/SkillsFuture, Eightfold, Fuel50, Gloat, TalentGuard, NEOGOV, PwC My Marketplace

---

## Brief for Adrian — Strategic Rationale

We did a structured competitive sweep across seven internal mobility platforms. Seven feature themes came out. Three of them map directly onto R1 epics we've already named — and they're the right three to prototype first.

**The core argument:** R1's value proposition is "CareerCompass becomes the PS officer's career tool, not just a job board." The competitive data validates exactly that framing. Status tracking (Epic C), smart matching (Epic E), and profile quality are the three levers that separate platforms officers actually use from platforms they check once and abandon.

**Top 3 for prototyping:**

1. **Application status notifications** — real-time status updates ("MDDI moved your application to Shortlisted · 2 hours ago") with a Notifications drawer in nav. Directly addresses the anxiety our S5 rejection screen design notes flagged. Lowest engineering lift of the three; highest emotional impact. This is Epic C in concrete form.

2. **Skills adjacency / recommended rail on O1** — a "Recommended for you" rail above the main listing, surfacing roles the officer didn't search for but matches. Treats competency data as a matching engine, not just a display field. Maps to Epic E (Smart Assistant). Doesn't require a full ML model for a prototype — rule-based tag matching is enough to test the concept.

3. **Profile completeness nudges** — a Profile Health banner with specific gap cues ("Add 2 more competencies to unlock 14 more opportunities"). This is the prerequisite for features 1 and 2 to work well. Poor data in means poor matches out. Government onboarding literature (NEOGOV) flags this as the #1 predictor of matching quality.

**Why this order:** Status notifications can be prototyped independently. The adjacency rail and profile nudges are interdependent and build toward the competency foundation R1 needs anyway.

**The one risk to name:** Feature 2 and 3 both depend on the competency SSOT owned by Imelda's squad (open-item #18). We don't have the schema or integration timeline confirmed. Prototyping with a placeholder taxonomy is fine — but we need that resolved before R1 grooming or the matching logic has no real data to run on.

**Ask:** Approve scope for a design prototype covering these three features. No code commitment — we're testing the concept and generating something concrete for the R1 planning conversation.

---

## Brief for Pow Hwee — Technical Implications

Below are the three features we're prototyping for R1, with the architectural questions your input is needed on before we groom any of them.

### 1. Application status notifications

**What it is:** A Notifications drawer (bell icon in nav) that surfaces timestamped status changes — e.g. "MDDI moved your application to Shortlisted · 2 hours ago." Plus a proactive "no-news" anchor on S4 (last-updated timestamp + estimated timeline).

**Architectural questions:**
- Where does the status-change event get emitted? The native apply state machine in R1 (Epic C) will own application status. Is notification dispatch a listener on that state machine, or does it need a separate notification service?
- Delivery mechanism: in-app only to start, or are we also committing to email/push for R1? Scoping this upfront affects the backend model significantly.
- Polling vs. push: for in-app notifications, are we polling on load (simpler) or building a real-time channel (WebSocket/SSE)? Given government network constraints and the S4 < 5s performance target, polling seems right for MVP — want your view.
- Data retention: how long do we store notification records? This affects the notifications table schema.

### 2. Skills adjacency / recommended rail on O1

**What it is:** A "Recommended for you" rail above the main listing on O1, surfacing roles the officer didn't search for but is a strong match for. Each card shows a brief match explanation ("Your Data Analytics (Intermediate) matches 2 of 3 competencies for this role").

**Architectural questions:**
- Matching logic: prototype can be rule-based (tag intersection between officer profile competencies and opportunity competency requirements). Is a scoring layer — e.g. percentage match — feasible at R1 without the full ML pipeline? The decisions-log has competency match ratio deferred to R1 (D 2026-05-08), so this is the right moment to scope it.
- Competency SSOT dependency (#18): the matching query needs normalised competency codes on both the officer profile and the opportunity record. Imelda's squad owns the master list. Do we have a timeline for when that schema is stable enough to build against? If not, can we agree on a provisional OTEP canonical list to prototype against — same approach used for job family filter (decisions-log 2026-06-16)?
- POCDEX write path (#31): the ringfencing decision (OTEP-127) removed the POCDEX write path for criteria authoring. Does the read path we kept still give us enough officer-competency signal for matching, or do we need a separate OTEP-side competency store?
- Performance: a "recommended" query runs on every O1 load for every logged-in officer. What's the indexing strategy to keep this under the 5s target?

### 3. Profile completeness nudges

**What it is:** A Profile Health banner on O1 (shown until completeness crosses a threshold) with specific cues ("Add 2 more competencies to unlock 14 more opportunities"). A completeness score widget in My Profile. A first-run 3-step onboarding wizard (competencies → career aspiration → preferences).

**Architectural questions:**
- Completeness scoring model: what fields count toward the score, and with what weights? This needs a defined schema before Amber designs the progress indicator. Suggest we agree on a field list at our next sync — I can draft a proposal.
- First-run detection: how do we know an officer is visiting for the first time vs. returning with a stale profile? Session flag, profile-completeness threshold, or explicit "onboarding complete" boolean on the user record?
- The 3-step wizard stores interim state before final save — does that need a draft/staging state on the profile entity, or do we commit field-by-field?
- This is the prerequisite for Feature 2. If completeness is below a threshold, the recommended rail either won't show or will show weak results. Should we gate the recommended rail on a completeness minimum, or show it always with a "improve your matches" nudge instead?

---

## Brief for Amber — Design Scope

Three features to prototype for R1. Below is what each needs from design, the constraints I know about, and the questions I need you to answer before we can groom them.

### 1. Application status notifications

**Screens needed:**
- Notifications drawer — slide-in panel from a bell icon in the nav. Shows a list of timestamped updates: "MDDI moved your application to Shortlisted · 2 hours ago." Read/unread states.
- Bell icon with unread count badge in the existing nav.
- S4 variant — "no-news" state: last-updated timestamp anchor + estimated timeline based on posting history. Replaces the anxious empty state currently implied in S5 design notes.
- Digest email summary layout (optional for prototype, good for the R1 story).

**Constraints:**
- LifeSG design system — use existing notification/alert patterns where available.
- Accessibility: status must be distinguishable without colour alone (your own requirement from the card patterns work).
- The drawer must not obscure the main listing when open — consider overlay vs. push layout depending on viewport.

**Open questions for you to answer:**
- Does the bell icon live in the top nav alongside the profile avatar, or does it warrant its own fixed-position element?
- For the notification list: grouped by application (all updates for "Policy Analyst, MAS" together) or reverse-chronological flat list?
- What does the empty notifications state look like for officers with no active applications yet?

### 2. Skills adjacency / recommended rail on O1

**Screens needed:**
- "Recommended for you" rail — sits above the main O1 listing. Horizontally scrollable card strip or a 2–3 card inline section? Need your recommendation based on the existing O1 layout.
- Match explanation tooltip — on hover/tap of each recommended card, a brief explanation: "Your Data Analytics (Intermediate) matches 2 of 3 competencies for this role."
- "Why am I seeing this?" explainer — a lightweight modal or inline drawer. Explains the matching logic in plain language. Key for trust with PS officers who are sceptical of algorithmic recommendations.
- Empty/low-match state: what does the officer see if their profile doesn't have enough data to generate recommendations? Should prompt profile completeness.

**Constraints:**
- Recommended cards should use the same card component as the main O1 listing — don't create a new card pattern.
- The match explanation must not overwhelm the card. Text is supplementary, not primary.
- The "why am I seeing this" explainer should be dismissible and shouldn't block the listing.

**Open questions for you to answer:**
- Where exactly does the rail sit on O1? Above the filter bar, below it, or after a separator?
- How do we visually distinguish recommended cards from searched/filtered results without a new card type? A label ("Recommended") on the card, or a section header only?
- If an officer has filtered/searched, does the recommended rail hide or persist?

### 3. Profile completeness nudges

**Screens needed:**
- Profile Health banner on O1 — shown for new/incomplete profiles. Specific nudge text ("Add 2 more competencies to unlock 14 more opportunities"). Dismiss option. Should also appear on the detail page (O3 variant) before the officer applies.
- Completeness score widget in My Profile — a progress indicator (percentage, ring, or bar — your call). Lists the specific missing fields.
- First-run onboarding wizard — 3-step flow: (1) competencies, (2) career aspiration, (3) preferences. Appears on first login. Skippable but with a clear "you can finish later" message. Must not block access to the platform.

**Constraints:**
- The stale-profile warning already exists as an O3 spec variant — use that as the starting point for the banner pattern, don't start from scratch.
- The first-run wizard must be accessible from mobile (hosting architecture confirms mobile access is supported — decision 2026-06-02).
- Don't make the banner punishing. The tone is "here's what you're missing out on," not "your profile is incomplete."

**Open questions for you to answer:**
- Banner placement on O1: above the search bar, or pinned to the top of the page below the nav?
- For the wizard: modal overlay or a dedicated onboarding screen? The modal approach is faster to build; a dedicated screen gives more design control.
- What's the threshold for dismissing the banner permanently vs. re-showing it on next login?

---

*Brief prepared: 23 Jun 2026. Source context: sprint-status.md, decisions-log.md, risks.md, sprint-allocation.md, stakeholder profiles.*
