# AI Prototype Prompt — R1 CareerCompass

**Target Tool:** v0.dev

**Feature:** R1 Release — Officer Apply + Posting Manager Create + Status Tracking

**Flows:** 3 (Officer Apply, Manager Create, The Seam)

**Fidelity:** Mid-fi — clickable, realistic data, no backend needed

---

## Prompt (Copy-Paste Ready)

```
Build a multi-screen prototype for CareerCompass — a Singapore public service internal talent mobility platform. The prototype covers two user types (Officer and Posting Manager) across three connected flows. Use a clean, professional government-adjacent design (not corporate SaaS). Light background, navy/teal primary, muted type.

Build as a single-page React app with client-side routing between all screens. Include a top role-switcher ("View as: Officer | Manager") so the reviewer can toggle between both perspectives. All data is mocked — no backend needed.

---

## FLOW 1: OFFICER APPLY (5 screens)

### Screen O1: Opportunity Listing
- Top nav: CareerCompass logo (left), "Opportunities | My Applications | My Profile" tabs (centre), "👤 Lee Wei Ming" (right)
- Search bar: full width, placeholder "Search opportunities..."
- Filter row: dropdowns for Type (All / STIP / Internal Job / Gig / Secondment / PSFG), Agency (All / ESG / PSD / MDDI / URA / MCCY / CAAS), Duration
- 3 opportunity cards:
  Card 1: Blue badge "STIP" · "Senior Data Analyst" · MDDI · "6 months · Closes 30 Jul 2027" · Competencies: Data Analytics, Policy Development · [View] button · 🔖 save icon
  Card 2: Green badge "Internal Job" · "HR Business Partner" · PSD · "Permanent · Closes 15 Aug 2027" · Competencies: HR Management, Stakeholder Mgmt · [View] button
  Card 3: Yellow badge "Gig" · "Event Planning Support" · ESG · "3 months · Closes 5 Aug 2027" · Competencies: Project Mgmt, Communications · [View] button · 🔖 save icon
- Clicking [View] on Card 1 → Screen O2

### Screen O2: Opportunity Detail
- Back link "← Back to listings"
- Blue "STIP" badge · "MDDI"
- Title: "Senior Data Analyst" (H1)
- Row: Duration: 6 months | Closing: 30 Jul 2027 | Location: 140 Hill Street | 🔖 Save
- Section "About this opportunity": "The Ministry of Digital Development and Innovation is seeking a data analyst to support digital policy research and national AI strategy projects."
- Section "Competencies required": table with 3 rows: Data Analytics (Intermediate), Policy Development (Foundation), Critical Thinking (Intermediate)
- Section "Eligibility": "Open to officers in pilot agencies. Min 2 years service."
- Large prominent [Apply Now] primary button at bottom
- Clicking [Apply Now] → Screen O3

### Screen O3: Apply Form (Pre-filled) — most important screen
- Back link "← Back to opportunity"
- Subheading: "Apply: Senior Data Analyst · MDDI"
- Section "Your details (pre-filled from your profile)" — light grey card:
  Name: Lee Wei Ming | [✏️ edit]
  Grade: MX13 | [✏️ edit]
  Agency: ESG (locked)
  Years of service: 5 years 3 months (locked)
  Small info note below: "ℹ️ These details come from your OTEP profile"
- Section "Your relevant competencies" — card with 3 rows:
  ✅ Data Analytics · Intermediate · "matches posting requirement"
  ✅ Policy Development · Foundation · "matches posting requirement"
  ○ Critical Thinking · greyed out · "not in your profile yet" — with a small text link "Add to profile"
  Info note: "ℹ️ Missing competencies can be added to your profile to strengthen your application."
- Section "Your strengths (pre-filled — you can edit)":
  Textarea pre-filled with: "Led analytics capability uplift programme for 12 officers across 3 divisions. Designed and delivered training using real policy datasets."
- Section "Why do you want this opportunity?" — empty textarea, required label, placeholder "Share what draws you to this role..."
- Checkbox: "[ ] I have informed my supervisor of this application"
- Bottom: [Submit Application] primary button | (Save Draft) secondary button
- Clicking [Submit Application] → Screen O4

### Screen O4: Confirmation
- Centered layout, generous whitespace
- Large ✅ icon
- "Application submitted" heading
- Subtext: "Senior Data Analyst · MDDI"
- Reference number box (slightly bordered): "APP-2027-003421"
- "Submitted: 23 Jun 2027, 10:42 AM"
- Section "What happens next": "MDDI will review applications and update your status within 5 working days. You'll be notified by email and in CareerCompass when your status changes."
- [View My Applications] primary button → Screen O5
- (Explore more opportunities) secondary link → Screen O1

### Screen O5: My Applications Tab
- Same nav as O1, "My Applications" tab active with a dot indicator
- Heading "My Applications (3)"
- Card 1 (active application):
  Blue "STIP" badge · MDDI
  "Senior Data Analyst"
  Status badge: filled circle + "Under Review" in amber
  "Submitted 23 Jun 2027 · Ref: APP-2027-003421"
  [View] button
- Card 2:
  Green "Internal Job" badge · PSD
  "HR Business Partner"
  Status badge: clock icon + "Submitted" in grey
  "Submitted 10 Jun 2027 · Ref: APP-2027-002891"
  [View] button
- Card 3:
  Yellow "Gig" badge · ESG
  "Event Planning Support"
  Status badge: ✅ "Outcome: Successful" in green
  "Completed 1 Apr 2027"
  [View] button
- Clicking [View] on Card 1 → Screen S4 (status detail)

---

## FLOW 2: POSTING MANAGER CREATE (5 screens)

### Screen M1: Agency Dashboard
- Top nav: "CareerCompass Agency Portal" logo, "My Postings | Applications | Reports" tabs, "👤 Tan Mei Ling · MDDI HR" (right)
- Heading "My Postings (4 active)" with [+ New Posting] button top-right
- 3 posting cards:
  Card 1: "Senior Data Analyst" · STIP · 🟢 Live badge · "12 applicants · Closes 30 Jul 2027" · [Review] [Edit] [...] buttons
  Card 2: "Policy Research Officer" · STIP · 🟢 Live badge · "3 applicants · Closes 15 Aug 2027" · [Review] [Edit] [...] buttons
  Card 3: "Comms and Engagement Exec" · Gig · 🟡 Draft badge · "Not published yet" · [Preview] [Edit] [...] buttons
- Footer bar: "Last synced with OTG: today 08:00 ✅" — subtle grey text
- Clicking [+ New Posting] → Screen M2

### Screen M2: Type Selection
- Back link "← Back to My Postings"
- Heading: "Create a new posting"
- Subheading: "What type of opportunity are you posting?"
- Grid of 5 cards (2 columns + 1 on last row):
  🟦 STIP — "Short-term Immersion Programme" — (Select) button
  🟩 Internal Job — "Permanent or contract role within your agency" — (Select) button
  🟨 Gig — "Short project-based assignment (< 3 months)" — (Select) button
  🔁 Secondment — "Cross-agency posting" — (Select) button
  🟪 PSFG — "Public Service Fellowships & Grants" — (Select) button
- Clicking STIP → Screen M3

### Screen M3: Create Posting Form
- Back link + Step indicator: "Step 1 of 2"
- Heading: "New STIP Posting"
- Form fields:
  "Posting title *" — text input pre-filled: "Senior Data Analyst"
  Row: "Agency *" dropdown (MDDI selected) | "Division" dropdown (Digital Industry)
  Row: "Duration *" dropdown (6 months) | "Closing date *" date picker (30 Jul 2027)
  "Location" — text input: "140 Hill Street, #02-01"
  "About this opportunity *" — textarea with some content
  "Competencies required *" — tag-style input showing: [Data Analytics · Intermediate ×] [Policy Development · Foundation ×] + "Add competency" button
  "Eligibility (optional)" — text input
- Bottom: (Save Draft) secondary | [Preview →] primary button → Screen M4

### Screen M4: Preview Pane — AHA MOMENT
- Back link + Step indicator: "Step 2 of 2"
- Heading: "Preview"
- Subheading in grey: "This is exactly what officers will see"
- Preview frame — bordered, slightly inset, labelled "Officer view":
  Shows exactly what Screen O2 looks like for this posting — same layout, same competency table, same [Apply Now] button (greyed out / non-functional in preview)
- Below the frame:
  "Looks good?"
  (← Edit) secondary button → Screen M3
  [Publish Posting] primary button → Screen M5

### Screen M5: Publish Confirmation
- Centered layout
- Large ✅
- "Your posting is live" heading
- "Senior Data Analyst · STIP"
- Bordered info box:
  "Officers who can see this: ~5,400"
  "Pilot agencies: ESG, PSD, MDDI, URA, MCCY, CAAS"
- "Published: 23 Jun 2027, 11:05 AM · Closes: 30 Jul 2027"
- "Applications will appear in your dashboard as officers apply."
- [View My Postings] primary → Screen M1
- (Create another posting) secondary → Screen M2

---

## FLOW 3: THE SEAM — STATUS TRACKING (5 screens)

### Screen S1: Manager — Application List
- Back link "← My Postings"
- Heading: "Senior Data Analyst · STIP" with 🟢 Live badge
- Subtext: "Applications (12) · Closes 30 Jul 2027"
- Filter row: [All ▼] | Sort: [Most recent ▼]
- 3 applicant cards:
  Card 1: "Lee Wei Ming" · ESG · MX13 · 5 yrs svc
    Competency chips: ✅ Data Analytics (Int) ✅ Policy Dev (Fdn)
    "Submitted 23 Jun 2027" · Status: Submitted · [Review] button
  Card 2: "Priya Ramasamy" · PSD · MX11 · 3 yrs svc
    ✅ Data Analytics (Adv) ✅ Policy Dev (Int)
    "Submitted 21 Jun 2027" · Status: Submitted · [Review] button
  Card 3: "Ahmad Fadzillah" · MCCY · MX12 · 4 yrs svc
    ⚠️ Data Analytics (Fdn — below requirement) ✅ Policy Dev (Int)
    "Submitted 20 Jun 2027" · Status: Submitted · [Review] button
- Clicking [Review] on Card 1 → Screen S2

### Screen S2: Applicant Profile Detail — Manager AHA
- Back link "← Back to applications"
- Heading: "👤 Lee Wei Ming"
- Subtext: "MX13 · ESG · 5 years 3 months service"
- Section "Competencies":
  Table: Data Analytics | Intermediate | ✅ matches role
         Policy Development | Foundation | ✅ matches role
         Critical Thinking | Foundation | ○ not required
- Section "Their strengths":
  Blockquote: "Led analytics capability uplift programme for 12 officers across 3 divisions. Designed and delivered training using real policy datasets."
- Section "Why they want this":
  Blockquote: "I'm keen to apply my analytics experience in a policy context. The AI strategy work at MDDI aligns directly with my long-term career goals."
- Divider
- Section "Update status":
  Radio group: ○ Submitted | ● Under Review | ○ Shortlisted | ○ Successful | ○ Unsuccessful
  (Under Review pre-selected for this demo)
  "Note (optional — for your records)" textarea: "Strong competency match. Strong motivation."
  [Save Status] button → Screen S3

### Screen S3: Manager Status Confirmation
- Simple confirmation banner: "✅ Status updated"
- "Lee Wei Ming → Under Review"
- Info box: "Lee Wei Ming has been notified by email and in CareerCompass. (1 notification sent)"
- [← Back to all applications] link → Screen S1

### Screen S4: Officer — Status Detail View (Under Review)
- Same officer nav as O1
- Back link "← My Applications" → Screen O5
- Heading: "Senior Data Analyst · MDDI"
- Timeline component (vertical):
  ✅ Submitted | 23 Jun 2027, 10:42 AM
  ● Under Review — "you are here" label | 24 Jun 2027, 9:15 AM  ← highlighted/active node
  ○ Outcome | pending — greyed out
- Ref: APP-2027-003421 | Closing date: 30 Jul 2027
- Expandable: "Your application details ▼"
- Section "While you wait": (Explore similar opportunities) button

### Screen S5: Officer — Rejection Screen (most emotionally sensitive)
- Same officer nav
- Back link "← My Applications"
- Heading: "Senior Data Analyst · MDDI"
- Timeline (all checked/crossed):
  ✅ Submitted | 23 Jun 2027
  ✅ Under Review | 24 Jun 2027
  ✗ Outcome | 15 Jul 2027 — styled distinctly (not red, muted)
- Gentle heading: "Thank you for applying"
- Body text: "MDDI has completed their review for this posting. Your application was not taken forward this time. This doesn't reflect your overall candidacy — competition was strong for this role."
- Section "What you can do next" — 3 action tiles:
  🔍 Explore similar STIPs
  📋 Update your profile with new strengths
  🔖 View your saved opportunities

---

## GLOBAL REQUIREMENTS

- Role switcher at top of every screen: "View as: [Officer] [Manager]" — toggles nav and theme (officer: light teal accent; manager: navy accent)
- Progress indicator on create flow screens M2–M4 ("Step 1 of 2" etc.)
- All navigation between screens wired up — every button/link that references another screen should navigate there
- Use realistic names throughout: Lee Wei Ming (officer), Tan Mei Ling (manager), agencies ESG/PSD/MDDI
- Status badges use colour consistently: grey = submitted, amber = under review, teal = shortlisted, green = successful, muted red-grey = unsuccessful
- Rejection screen (S5) uses muted, warm tones — not harsh red. The tone should feel handled, not punishing.
- Typography: clean sans-serif (Inter or system-ui), 16px body, government-adjacent but not stuffy
- Responsive: desktop primary, but cards should stack on mobile

## SAMPLE DATA ONLY — All data is illustrative

Officer: Lee Wei Ming | MX13 | ESG | 5 yrs 3 months
Manager: Tan Mei Ling | MDDI HR Team
Opportunity: Senior Data Analyst · STIP · MDDI · 6 months · Ref APP-2027-003421
```

---

## Instructions

1. Go to [v0.dev](https://v0.dev)
2. Click "New Chat"
3. Paste the full prompt above (everything inside the triple backticks)
4. Click generate — expect ~60–90 seconds
5. Click "Open in StackBlitz" to get a live clickable link
6. Share the link with Adrian before Wednesday's jam

## Expected Output

The prototype will include:
- 15 screens across 3 flows, all linked
- Officer portal (listing → apply → confirmation → status → rejection)
- Manager portal (dashboard → type select → create form → preview → publish)
- The seam (application list → applicant profile → status update → officer sees update)
- Role switcher between Officer and Manager views
- Realistic Singapore public service data throughout

## Iteration Tips

After first generation, common tweaks:

| If this happens | Add this to a follow-up prompt |
|---|---|
| Preview pane (M4) doesn't show the officer view | "Make the preview pane in Screen M4 render exactly the same layout as the opportunity detail page (Screen O2)" |
| Rejection screen (S5) feels too harsh | "Soften the rejection screen — remove any red colours, use muted warm grey for the ✗ icon, keep the tone supportive" |
| Role switcher not visible | "Add a persistent role switcher banner at the top of every screen with two tabs: Officer and Manager. Switching changes the nav and content." |
| Competency gap state missing | "In the apply form (Screen O3), show the Critical Thinking competency row greyed out with 'not in your profile yet' and an 'Add to profile' link" |
| Stale pre-fill warning missing | "Add a yellow warning banner above the pre-filled details card: '⚠️ Your profile was last updated 8 months ago. Some details may be outdated. [Update Profile]'" |

## Next Steps

- [ ] Share prototype link with Amber (design review — flag S5 rejection screen for early attention)
- [ ] Share with Pow Hwee (Epic C state machine review — does the status flow make sense?)
- [ ] Bring to Adrian jam Wed 24 Jun — walk the 3 flows before opening the MoSCoW discussion
- [ ] Use as reference when grooming Epic B and Epic C stories

---

*Generated: 2026-06-23*
*Source: r1-napkin-sketch-low-fi.md, r1-epic-brief-confluence.md*
*Tool: v0.dev | Next fidelity: Figma mid-fi after Adrian jam*
