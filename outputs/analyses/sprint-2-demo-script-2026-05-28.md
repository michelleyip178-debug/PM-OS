# Sprint 2 Demo Script
**Sprint Review:** Fri 29 May 2026
**Script due:** EOD Thu 28 May 2026

---

## Before the Demo

| Item | Status | Owner |
|------|--------|-------|
| Demo environment / prototype ready | ⏳ Confirm with Thomas/Leo at standup | Thomas / Leo |
| Demo data loaded (OTG opportunities) | ⏳ Confirm with Thomas/Leo | Leo |
| Screen share tested | Before the session | Thomas (presenting) |
| Who narrates vs who clicks | ⏳ Agree at standup | — |

> **⚠️ Confirm at 11:00 standup:** Are we running on staging, a localhost build, or Figma prototype? The script steps are the same — just note the vehicle at the top so everyone's aligned.

---

## Sprint Goal (the one sentence to anchor on)

> By end of Sprint 2, an officer can open OTEP, see every published OTG opportunity on a listing page (newest first), and click into a detail page for any opportunity — proving the Listing → Detail end-to-end journey works.

---

## Audience

Likely: Jace, Adrian, and the broader OTEP stakeholders. Assume they know the product context but aren't in the day-to-day.

**Frame it as:** "We started with no UI. We're ending Sprint 2 with a working end-to-end journey. Here's what that looks like."

---

## Demo Script — 5 Steps

**Persona:** Rachel, an officer from MOE, wants to find a secondment opportunity.

---

### Step 1 — Officer arrives at the OTEP listing page

> "Rachel opens OTEP and lands on the opportunity listing. Every published OTG opportunity is here — sorted newest first."

**What to show:** Listing page with OTG opportunity cards loaded.  
**Key detail to call out:** Cards show opportunity title, type, agency, and closing date. Only opportunities with a future closing date are visible.  
**⚠️ Confirm with Thomas/Leo:** Are cards loading with real OTG data or mock data? Call this out explicitly in the demo ("This is using [real/mock] OTG data imported from the OTG Excel export").

---

### Step 2 — Officer scans the listing

> "She can see the opportunities at a glance. Each card tells her what she needs to decide if it's worth clicking in."

**What to show:** Scroll through 2–3 cards. If a "Closing soon" badge is visible (≤7 days to closing_date), point to it.  
**Key detail to call out:** Newest first ordering. Clean card layout (Amber's design, built on the Flagship design system).  
**⚠️ Confirm with Thomas/Leo:** Is pagination implemented? If yes, show it briefly. If not, don't scroll to the bottom.

---

### Step 3 — Officer clicks into an opportunity

> "Rachel spots an Internal Job that looks relevant. She clicks in."

**What to show:** Click a card → detail page loads.  
**Key detail to call out:** Navigation is smooth. The URL changes (if clickable). Detail page is a separate view, not a modal.  
**⚠️ Confirm with Thomas/Leo:** Is the click-through live, or are we navigating manually to the detail page?

---

### Step 4 — Officer reads the full opportunity

> "The detail page gives her everything she needs: eligibility, duration, what she'll develop, and how to apply."

**What to show:** Scroll through the detail page. Highlight at least: eligibility section, developmental outcomes, and the apply CTA.  
**Key detail to call out:** If a field has no data, it shows "Not specified" — not a blank gap. Clean fallback.  
**Note:** Apply CTA is Sprint 3 (OTEP-87 + OTEP-319). If the button is visible, say: "The apply button is a placeholder — we're wiring it up in Sprint 3."

---

### Step 5 — Officer navigates back

> "She's not ready to apply yet. She hits back — and the listing is exactly as she left it."

**What to show:** Navigate back to the listing. The scroll position / state is preserved.  
**Key detail to call out:** This is the end-to-end journey working. Listing → Detail → Back to Listing. Done.  
**⚠️ Confirm with Thomas/Leo:** Is back-navigation working and does it restore state?

---

## What We're NOT Showing (and Why)

Mention these briefly at the start to set expectations — don't let them come up as surprises.

| Feature | Status | When |
|---------|--------|------|
| Filters (type, category) | Not in Sprint 2 — Sprint 3 | Sprint 3 |
| Apply flow (FormSG redirect) | Not in Sprint 2 — Sprint 3 | Sprint 3 |
| Live recurring OTG import | Not in Sprint 2 — Sprint 3 | Sprint 3 |
| WOG AD login | Deferred — Sprint 4+ (no UAT environment) | Sprint 4+ |
| Competency matching on detail page | Deferred to R1 | R1 |

Suggested framing: "We scoped Sprint 2 to prove the core journey works. The pieces sitting outside the demo — filters, apply flow, auth — are the Sprint 3 and Sprint 4 focus. We'll demo those as they land."

---

## Contingency — If DEV Environment Isn't Available

If Thomas confirms at standup that we can't demo a live build:

**Option A — Figma prototype (preferred)**
- Use Amber's designs as a clickable walkthrough
- Same 5-step narrative, just narrate over the prototype
- Call it out explicitly: "We're showing the design-led prototype since we don't have a stable demo environment yet — the implementation is in progress."

**Option B — Screenshots + narration**
- Take screenshots of the staging/localhost build
- Walk through them as a slide or PDF
- Less ideal but still demonstrates the sprint goal has been met

> Decide this at standup. Don't leave it ambiguous.

---

## Closing Line (after the demo)

> "That's Sprint 2. An officer can now open OTEP, find an opportunity, and read the full detail — end to end. Sprint 3 adds filters, the apply flow, and live data. We're on track."

---

## Standup Confirmation Checklist (11:00 today)

- [ ] Demo vehicle: staging / localhost / Figma / screenshots?
- [ ] Data: real OTG data or mock?
- [ ] Who presents (click) and who narrates?
- [ ] Is click-through on cards working?
- [ ] Is back-navigation and state restore working?
- [ ] Is pagination in? If not, confirm we won't scroll to the bottom.
- [ ] Apply CTA visible? If yes, confirm we'll frame it as Sprint 3.

---

*Created: 2026-05-28 | Review: confirm ⚠️ items at 11:00 standup | Final: EOD 28 May*
