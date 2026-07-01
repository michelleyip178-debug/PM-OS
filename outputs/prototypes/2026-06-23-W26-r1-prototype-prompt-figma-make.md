# Figma Make Prompt — R1 CareerCompass
**Tool:** Figma Make

**Feature:** R1 Release — Officer Apply + Posting Manager Create + Status Tracking

**Flows:** 3 (15 screens + variants + edge states)

**Intent:** Editable design file — every ideation idea as a toggleable variant, not a hard-coded screen

---

## How to use this in Figma Make

1. Open Figma → New file → click the ✦ "Make" button (top right)
2. Paste the prompt below
3. Review the generated frames — Figma Make will produce a frame per screen
4. Each component with variants (buttons, status badges, form states) will appear as a component set in the left panel — right-click → "Edit main component" to tweak
5. Use the prototype panel to wire screens together after generation

---

## Prompt (Copy-Paste Ready)

```
Design a multi-screen product UI for CareerCompass — a Singapore public service internal talent mobility platform. Two user types: Officer (finds and applies to opportunities) and Manager (creates postings and reviews applications). Government-adjacent visual style: clean, professional, accessible. Primary colour: deep teal (#0D6E6E). Secondary: navy (#1A2E4A). Background: off-white (#F8F9FA). Typography: Inter. No decorative illustration — clarity over personality.

Generate the following frames. For each frame, include all listed component variants so designers can toggle states without leaving the frame.

---

DESIGN SYSTEM (apply consistently across all frames)

Colours:
- Primary teal: #0D6E6E (buttons, active tabs, links)
- Navy: #1A2E4A (headings, nav)
- Off-white bg: #F8F9FA
- Card bg: #FFFFFF with 1px border #E2E8F0, radius 8px, shadow: 0 1px 3px rgba(0,0,0,0.08)
- Status: Submitted = grey (#6B7280) | Under Review = amber (#B45309) | Shortlisted = teal (#0D6E6E) | Successful = green (#15803D) | Unsuccessful = muted red-grey (#78716C)

Type scale:
- H1: 24px bold navy
- H2: 18px semibold navy
- Body: 16px regular #374151
- Caption: 13px regular #6B7280
- Label: 14px medium #374151

Opportunity type badges (pill, 6px radius):
- STIP: blue bg #DBEAFE text #1E40AF
- Internal Job: green bg #DCFCE7 text #166534
- Gig: yellow bg #FEF9C3 text #854D0E
- Secondment: purple bg #F3E8FF text #6B21A8
- PSFG: indigo bg #E0E7FF text #3730A3

Components to generate as variant sets:
- OpportunityCard [type=STIP|InternalJob|Gig|Secondment|PSFG] [saved=true|false] [state=default|hover]
- StatusBadge [status=Submitted|UnderReview|Shortlisted|Successful|Unsuccessful]
- CompetencyRow [match=matched|gap|notRequired] [level=Foundation|Intermediate|Advanced]
- PreFillField [state=prefilled|stale|empty|editing]
- PostingCard [status=Live|Draft|Closed] [applications=0|few|many]
- ApplicationCard [status=Submitted|UnderReview|Shortlisted|Successful|Unsuccessful]
- TimelineNode [state=complete|active|pending|unsuccessful]
- PrimaryButton [state=default|hover|disabled|loading]

---

FRAME 1: O1 — Opportunity Listing
Size: 1440 × 900

Top nav: CareerCompass logo left. Tabs centre: Opportunities (active) | My Applications | My Profile. Right: avatar + "Lee Wei Ming".

Search: full-width input bar "Search opportunities..." with 🔍 icon.

Filter row: Type dropdown (All Types) | Agency dropdown (All Agencies) | Duration dropdown. All show selected state.

3 OpportunityCards in a vertical list:
Card 1: STIP type | "Senior Data Analyst" | MDDI | "6 months · Closes 30 Jul 2027" | Competencies: Data Analytics, Policy Development | saved=false | [View] button
Card 2: InternalJob type | "HR Business Partner" | PSD | "Permanent · Closes 15 Aug 2027" | Competencies: HR Management, Stakeholder Mgmt | saved=false | [View] button
Card 3: Gig type | "Event Planning Support" | ESG | "3 months · Closes 5 Aug 2027" | saved=true (🔖 filled) | [View] button

Include as frame variants:
- Empty state: no cards, centred illustration placeholder + "No opportunities match your filters. Try adjusting your search."
- Loading state: 3 skeleton card placeholders (grey animated shimmer blocks)

---

FRAME 2: O2 — Opportunity Detail
Size: 1440 × 900

Back link "← Back to listings" top-left.

Hero area: STIP badge | "MDDI" caption | H1 "Senior Data Analyst"
Meta row: Duration: 6 months | Closing: 30 Jul 2027 | Location: 140 Hill Street | 🔖 Save (unsaved state)

Section "About this opportunity": body text block.

Section "Competencies required": table with 3 CompetencyRows:
- Data Analytics | Intermediate | match=matched
- Policy Development | Foundation | match=matched
- Critical Thinking | Intermediate | match=matched

Section "Eligibility": body text "Open to officers in pilot agencies. Min 2 years service."

Primary CTA area: large full-width [Apply Now] button. Below in caption: "Applications close in 37 days."

Include as frame variants:
- Already applied: [Apply Now] replaced by "✅ You applied on 23 Jun 2027 · Ref APP-2027-003421" banner. [View Application] secondary button.
- Saved: 🔖 icon filled/teal
- Closed: "This posting has closed" banner at top. [Apply Now] disabled.

---

FRAME 3: O3 — Apply Form (Pre-filled)
Size: 1440 × 1100 (taller — longer form)

Back link. Heading "Apply: Senior Data Analyst · MDDI".

Auto-save indicator (top-right of form): "Draft saved ✓" in caption/grey — include as visible variant.

Section "Your details":
Light grey card (#F1F5F9) with 4 PreFillFields:
- Name: "Lee Wei Ming" | state=prefilled | with ✏️ edit icon
- Grade: "MX13" | state=prefilled | with ✏️ edit icon
- Agency: "ESG" | no edit (locked) | lock icon
- Years of service: "5 years 3 months" | no edit

Info note below card: ℹ️ "These details come from your OTEP profile"

Include stale warning variant: amber banner above card: "⚠️ Your profile was last updated 8 months ago. Some details may be outdated. [Update Profile →]"

Section "Your relevant competencies":
3 CompetencyRows:
- Data Analytics | Intermediate | match=matched — with green chip "Matches posting"
- Policy Development | Foundation | match=matched — with green chip "Matches posting"
- Critical Thinking | Foundation | match=gap — grey, label "Not in your profile yet" | small link "Add to profile →"

Info note: ℹ️ "Missing competencies can be added to your profile to strengthen your application."

Section "Your strengths":
Textarea pre-filled with: "Led analytics capability uplift programme for 12 officers across 3 divisions." Label shows "Pre-filled from your profile — edit as needed". Character count: 148/500.

Include variant: previous application draft — amber caption above textarea: "Based on your Oct 2026 application. [Start fresh instead]"

Section "Why do you want this opportunity?":
Empty textarea | required asterisk | placeholder "Share what draws you to this role..."
Character count: 0/500.

Supervisor acknowledgement checkbox: unchecked state. Caption: "By checking this, you confirm your reporting officer is aware."

Bottom actions: [Submit Application] primary | (Save Draft) secondary | caption "Submitting takes under 2 minutes."

Include as frame variants:
- Empty profile state: both pre-fill sections show empty state card: "Your profile isn't complete yet. [Set up profile first] or [Fill in manually]"
- Form complete / ready to submit: all fields filled, checkbox checked, [Submit Application] button active and teal
- Submitting loading state: [Submit Application] shows spinner + "Submitting..."

---

FRAME 4: O4 — Confirmation
Size: 1440 × 900

Centred layout, generous whitespace.
Large ✅ icon (teal, 48px).
H1 "Application submitted"
H2 "Senior Data Analyst · MDDI"

Reference number box: white card, border, monospace font: "APP-2027-003421"
Caption: "Submitted: 23 Jun 2027, 10:42 AM"

Section "What happens next":
Body: "MDDI will review your application and update your status within 5 working days. You'll be notified by email and in CareerCompass when anything changes."

2 buttons: [View My Applications] primary | (Explore more opportunities) secondary

---

FRAME 5: O5 — My Applications
Size: 1440 × 900

Nav with "My Applications" tab active + dot indicator.
Heading "My Applications (3)"

3 ApplicationCards:
Card 1: STIP · MDDI | "Senior Data Analyst" | StatusBadge=UnderReview | "Submitted 23 Jun 2027 · Ref APP-2027-003421" | [View]
Card 2: InternalJob · PSD | "HR Business Partner" | StatusBadge=Submitted | "Submitted 10 Jun 2027" | [View]
Card 3: Gig · ESG | "Event Planning Support" | StatusBadge=Successful | "Completed 1 Apr 2027" | [View]

Include as frame variant:
- Empty state: "You haven't applied to anything yet. [Explore opportunities →]" centred with teal link

---

FRAME 6: M1 — Agency Dashboard
Size: 1440 × 900

Top nav: "CareerCompass Agency Portal" | Tabs: My Postings (active) | Applications | Reports | Right: "👤 Tan Mei Ling · MDDI HR"

Row: "My Postings (4 active)" H2 left | [+ New Posting] button right

3 PostingCards:
Card 1: "Senior Data Analyst" | STIP | status=Live | "12 applicants · Closes 30 Jul 2027" | [Review] [Edit] [···]
Card 2: "Policy Research Officer" | STIP | status=Live | "3 applicants · Closes 15 Aug 2027" | [Review] [Edit] [···]
Card 3: "Comms and Engagement Exec" | Gig | status=Draft | "Not published yet" | [Preview] [Edit] [···]

Include PostingCard hover state: subtle card lift + reveal of 2-line description preview.

Posting performance variant on Card 1: expanded card showing micro-analytics row: "Views: 84 · Applications: 12 · Conversion: 14%"

Footer bar: "Last synced with OTG: today 08:00 ✅" in caption/grey.

Include as frame variants:
- Empty state (new manager): "You haven't created any postings yet. [+ Create your first posting]"
- Low-applications nudge on Card 2 (after 2 weeks, 0 applications): amber caption: "No applications yet. Postings with detailed competency requirements get 3x more applicants. [Review your posting →]"

---

FRAME 7: M2 — Type Selection
Size: 1440 × 900

Back link. H1 "Create a new posting". Subheading "What type of opportunity are you posting?"

2-column card grid (5 cards total — last row has 1 card centred or left-aligned):
🟦 STIP — "Short-term Immersion Programme" — (Select) | state=default
🟩 Internal Job — "Permanent or contract role within your agency" — (Select)
🟨 Gig — "Short project-based assignment (< 3 months)" — (Select)
🔁 Secondment — "Cross-agency posting" — (Select)
🟪 PSFG — "Public Service Fellowships & Grants" — (Select)

Each card: hover state = teal border + teal (Select) button fill.

---

FRAME 8: M3 — Create Posting Form (STIP)
Size: 1440 × 1000

Back link. Step indicator: "Step 1 of 2". H1 "New STIP Posting".

Form in 2-column layout where appropriate:
- "Posting title *" full-width input: "Senior Data Analyst"
- Row: Agency dropdown (MDDI selected) | Division dropdown (Digital Industry)
- Row: Duration dropdown (6 months) | Closing date picker (30 Jul 2027)
- Location input: "140 Hill Street, #02-01"
- "About this opportunity *" textarea with word count: 47/300
- "Competencies required *" — tag input showing: [Data Analytics · Intermediate ×] [Policy Development · Foundation ×] [+ Add competency]
- "Eligibility (optional)" — text input

Inline validation states: show one required field in error state (red border + "This field is required" caption) as a variant.

Bottom: (Save Draft) secondary | [Preview →] primary

Include frame variant: Duplicate posting mode — amber banner at top: "Based on your Jul 2026 posting — review and update before publishing." All fields pre-filled from previous posting.

---

FRAME 9: M4 — Preview Pane (Aha moment)
Size: 1440 × 900

Back link. Step indicator "Step 2 of 2". H1 "Preview".
Subheading in caption: "This is exactly what officers will see"

Preview frame: bordered card (dashed 2px teal border, label "Officer view" top-left in teal caption), containing an exact replica of the O2 Opportunity Detail layout for this posting. [Apply Now] button inside the preview is greyed out / non-interactive.

Co-author indicator (top-right of frame, small): "👤 Rashidah Mohd also viewing · Last edited 3 min ago"

Bottom: (← Edit) secondary | [Publish Posting] primary

Include as frame variant:
- Validation warning before publish: amber banner appears if closing date is in the past or a required field is empty: "⚠️ Review before publishing: Closing date appears to be in the past."

---

FRAME 10: M5 — Publish Confirmation
Size: 1440 × 900

Centred layout.
✅ icon (teal, 48px)
H1 "Your posting is live"
H2 "Senior Data Analyst · STIP"

Info card: "Officers who can see this: ~5,400 | Pilot agencies: ESG, PSD, MDDI, URA, MCCY, CAAS"
Caption: "Published: 23 Jun 2027, 11:05 AM · Closes: 30 Jul 2027"
Body: "Applications will appear in your dashboard as officers apply."

2 buttons: [View My Postings] primary | (Create another posting) secondary
Template save option (caption link below buttons): "Save this as a template for future postings →"

---

FRAME 11: S1 — Manager Application List
Size: 1440 × 900

Back link. H2 "Senior Data Analyst · STIP" with Live badge. Subtext "Applications (12) · Closes 30 Jul 2027"

Filter row: [All ▼] Sort [Most recent ▼]

3 applicant cards (each is an ApplicationReviewCard component):
Card 1: "Lee Wei Ming" · ESG · MX13 · 5 yrs svc | CompetencyRow chips: ✅ Data Analytics (Int) ✅ Policy Dev (Fdn) | "Submitted 23 Jun 2027" | StatusBadge=Submitted | [Review]
Card 2: "Priya Ramasamy" · PSD · MX11 · 3 yrs svc | ✅ Data Analytics (Adv) ✅ Policy Dev (Int) | StatusBadge=Submitted | [Review]
Card 3: "Ahmad Fadzillah" · MCCY · MX12 · 4 yrs | ⚠️ Data Analytics (Fdn — below requirement) ✅ Policy Dev (Int) | StatusBadge=Submitted | [Review]

Competency gap chip: amber chip with ⚠️ for below-requirement competencies.

Include as frame variant:
- Bulk select mode: checkbox appears on each card, bulk action bar appears at bottom: "3 selected · [Mark as: Under Review ▼] [···]"

---

FRAME 12: S2 — Applicant Profile Detail (Manager aha)
Size: 1440 × 1000

Back link. H1 "👤 Lee Wei Ming". Subtext "MX13 · ESG · 5 years 3 months service"

Section "Competencies":
3 CompetencyRows:
- Data Analytics | Intermediate | match=matched → green "Matches role" chip
- Policy Development | Foundation | match=matched → green chip
- Critical Thinking | Foundation | match=notRequired → grey "Not required"

Section "Their strengths": blockquote card (left border teal)
Section "Why they want this": blockquote card

Divider.

Section "Update status":
Radio pill group (horizontal): Submitted | Under Review (selected) | Shortlisted | Successful | Unsuccessful

"Note for your records (optional)":
Textarea: "Strong competency match. Clear motivation tied to AI strategy work."
Caption: "Your note is private — officers cannot see this."

[Save Status] primary button

Include as frame variant:
- No POCDEX data state: competency section replaced by amber card: "Competency data not available yet for this officer. This will populate once POCDEX integration is complete." with manual note textarea instead.

---

FRAME 13: S3 — Status Confirmation (Manager)
Size: 1440 × 600

Compact confirmation.
✅ "Status updated"
"Lee Wei Ming → Under Review"

Info card: "Lee Wei Ming has been notified by email and in CareerCompass. (1 notification sent)"

[← Back to all applications] link

---

FRAME 14: S4 — Officer Status Detail (Under Review)
Size: 1440 × 900

Back link "← My Applications". H2 "Senior Data Analyst · MDDI"

Vertical timeline component (3 TimelineNodes):
- ✅ Submitted | "23 Jun 2027, 10:42 AM" | state=complete
- ● Under Review | "24 Jun 2027, 9:15 AM" | state=active (pulsing dot, amber) | label chip "You are here"
- ○ Outcome | "Pending" | state=pending (greyed)

Caption ref: "Ref: APP-2027-003421 · Closes 30 Jul 2027"

Expandable section: "Your application details ▼" (collapsed by default)

"While you wait" section: (Explore similar STIPs) secondary button

Include as frame variants:
- No news state (3 weeks passed): amber temporal anchor below timeline: "Last updated 21 days ago. Postings typically close within 4–6 weeks of the closing date."
- Shortlisted state: 3rd node becomes ☑ Shortlisted (active, teal) + new 4th node "Outcome" pending. Small note: "MDDI may be in touch to arrange a conversation."

---

FRAME 15: S5 — Rejection Screen (Most emotionally sensitive)
Size: 1440 × 900

Back link "← My Applications". H2 "Senior Data Analyst · MDDI"

Vertical timeline (all resolved):
- ✅ Submitted | 23 Jun 2027 | state=complete
- ✅ Under Review | 24 Jun 2027 | state=complete
- ✗ Outcome | 15 Jul 2027 | state=unsuccessful — use muted warm grey (#78716C), NOT red. Small ✗ icon in grey, not alarming.

Heading (not H1 — use H2 weight): "Thank you for applying"
Body text: "MDDI has completed their review for this posting. Your application was not taken forward this time. This doesn't reflect your overall potential — competition was strong for this role."

Section "What you can do next" — 3 action tiles in a row (card style):
Tile 1: 🔍 icon | "Explore similar STIPs" | (Explore) button
Tile 2: 📋 icon | "Update your profile with new strengths" | (Update Profile) button
Tile 3: 🔖 icon | "View your saved opportunities" | (View Saved) button

Include as frame variants:
- Rejection with personalised note: between body text and action tiles, amber quote card: "A note from MDDI: 'Your data analytics background was strong — we encourage you to apply for future data roles with us.'" — show this as an optional variant (when manager added a personalised close message)

---

FRAME 16 (BONUS): S6 — Success Screen (Officer)
Size: 1440 × 900

Back link. H2 "Senior Data Analyst · MDDI"

Timeline (all complete):
✅ Submitted | ✅ Under Review | ✅ Shortlisted | ✅ Outcome: Successful — teal, celebratory but restrained

H1 "Congratulations"
Body: "MDDI will be in touch with next steps for your STIP. Your placement begins on 1 Sep 2027."

Info card (teal bg, light): "Your 6-month STIP runs Sep 2027 – Feb 2028. Your home agency (ESG) has been notified."

(View My Applications) secondary | [Explore more opportunities] primary

---

PROTOTYPE CONNECTIONS (wire these after generation)
O1 → O2: click [View] on Card 1
O2 → O3: click [Apply Now]
O3 → O4: click [Submit Application]
O4 → O5: click [View My Applications]
O5 → S4: click [View] on Card 1

M1 → M2: click [+ New Posting]
M2 → M3: click STIP (Select)
M3 → M4: click [Preview →]
M4 → M3: click (← Edit)
M4 → M5: click [Publish Posting]
M1 → S1: click [Review] on Card 1
S1 → S2: click [Review] on applicant Card 1
S2 → S3: click [Save Status]
S3 → S1: click [← Back to all applications]

Officer status flow:
O5 → S4: click [View] on Under Review card
S4 → S5: (simulate manager action → Unsuccessful — show as a manual jump in prototype)
S4 → S6: (simulate manager action → Successful)
```

---

## What's tweakable after generation

Every component Figma Make generates will appear in the left panel as a component set. Here's what to tweak first:

| Component | How to tweak | Why |
|-----------|-------------|-----|
| `StatusBadge` | Change colour per status in the component | Ensure rejection (Unsuccessful) never uses red |
| `PreFillField` | Toggle `stale` variant — amber border + warning icon | Test whether stale pre-fill state reads as the system's problem, not the officer's |
| `TimelineNode` | Toggle `active` state dot — try pulsing vs static | Pulsing signals something is happening during "Under Review" |
| `OpportunityCard` | Hover state — adjust shadow and border | Ensure it feels interactive without being flashy |
| `PostingCard` | Expand micro-analytics row | Test with/without to judge whether managers will engage with conversion data |
| Rejection screen (S5) | Swap body text tone | Try 3 versions: minimal ("not taken forward"), warm ("strong competition"), directive ("here's what to do next") — share all 3 with Amber |

## Design decisions to resolve in Figma (not in prompt)

These were intentionally left as tweakable rather than specified:

1. **Rejection icon** — ✗ vs nothing vs a neutral circle. Don't decide in the prompt; let Amber see both options in Figma.
2. **Pre-fill field edit behaviour** — does clicking ✏️ open the field inline, or navigate to the profile page? Needs a separate micro-flow.
3. **Supervisor acknowledgement** — keep as checkbox, change to email cc field, or remove entirely. Show all 3 variants in Figma and present to Jace.
4. **Application count visibility** — show on listing page (Card 1: "12 applied") or hide. Privacy decision — flag to BO before designing either direction.

## Next steps after generation

- [ ] Share Figma link with Amber — flag Frame 15 (S5 rejection) and Frame 3 (O3 pre-fill stale state) as priority review
- [ ] Share with Pow Hwee — Frame 12 (S2 status update) for state machine decisions
- [ ] Bring Frame 9 (M4 preview pane) to Adrian jam Wed — visual anchor for "World B = manager journey exists"
- [ ] Use Frame 16 (S6 success) to show Adrian what the North Star moment looks like in the product

---

*Generated: 2026-06-23*
*Source: r1-napkin-sketch-low-fi.md, r1-epic-brief-confluence.md, ideation session 2026-06-23*
*Tool: Figma Make | Previous: v0.dev prompt (r1-prototype-prompt-v0.md)*
