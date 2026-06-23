# R1 Release — Low-Fi Wireframes
**CareerCompass | OTEP-Pathfinder**
**Fidelity:** Low-fi (napkin sketch — flow validation only)

**Flows:** 3 — Officer Apply, Posting Manager Create, The Seam

---

## Flow 1: Officer Apply (Epics B + C)

**Context:** Officer discovers an opportunity, applies in-Compass with pre-filled profile data, gets a reference number, and tracks status from a tab.

**Screens:** 5

**Design question this flow answers:** Does the pre-filled form feel like a shortcut, or does it feel like the system got things wrong?

---

### Screen 1A: Opportunity Listing

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass                            👤 Lee Wei Ming  │
├──────────────────────────────────────────────────────────┤
│ Opportunities   My Applications   My Profile             │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  [Search opportunities...                    🔍]         │
│                                                          │
│  Type: [All Types ▼]   Agency: [All ▼]   Duration: [▼]  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ 🟦 STIP                              MDDI          │  │
│  │ Senior Data Analyst                               │  │
│  │ 6 months · Closing 30 Jul 2027                    │  │
│  │ Competencies: Data Analytics · Policy Dev         │  │
│  │                                          [ View ] │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ 🟩 Internal Job                        PSD         │  │
│  │ HR Business Partner                               │  │
│  │ Permanent · Closing 15 Aug 2027                   │  │
│  │ Competencies: HR Management · Stakeholder Mgmt    │  │
│  │                                          [ View ] │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ 🟨 Gig                                 ESG         │  │
│  │ Event Planning Support                            │  │
│  │ 3 months · Closing 5 Aug 2027                     │  │
│  │ Competencies: Project Mgmt · Communications       │  │
│  │                                  🔖     [ View ] │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Key interactions:** Filter by type, agency, duration. Each card has View and Save (🔖) actions.

---

### Screen 1B: Opportunity Detail Page

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass                            👤 Lee Wei Ming  │
├──────────────────────────────────────────────────────────┤
│ ← Back to listings                                       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  🟦 STIP · MDDI                                          │
│  Senior Data Analyst                                     │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Duration: 6 months         Closing: 30 Jul 2027         │
│  Location: 140 Hill Street  🔖 Save                      │
│                                                          │
│  About this opportunity                                  │
│  The Ministry of Digital Development and Innovation      │
│  is seeking a data analyst to support digital policy     │
│  research and national AI strategy projects.             │
│                                                          │
│  Competencies required                                   │
│  ┌───────────────────────────────────────────────────┐   │
│  │ ● Data Analytics       Intermediate               │   │
│  │ ● Policy Development   Foundation                 │   │
│  │ ● Critical Thinking    Intermediate               │   │
│  └───────────────────────────────────────────────────┘   │
│                                                          │
│  Eligibility                                             │
│  Open to officers in pilot agencies (ESG, PSD, MDDI,    │
│  URA, MCCY, CAAS). Min 2 years service.                  │
│                                                          │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │          [ Apply Now ]                             │  │  ← Primary CTA
│  └────────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Key interactions:** Apply Now triggers the in-Compass form. Save bookmarks for later.

---

### Screen 1C: In-Compass Apply Form (Pre-filled) ⭐ Most important screen

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass                            👤 Lee Wei Ming  │
├──────────────────────────────────────────────────────────┤
│ ← Back to opportunity                                    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Apply: Senior Data Analyst · MDDI                       │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Your details (pre-filled from your profile)             │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Name         Lee Wei Ming                    ✏️ edit │ │
│  │ Grade        MX13                            ✏️ edit │ │
│  │ Agency       ESG                                     │ │
│  │ Years svc    5 years 3 months                        │ │
│  └─────────────────────────────────────────────────────┘ │
│  ℹ️ These details come from your OTEP profile             │
│                                                          │
│  Your relevant competencies                              │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ ✅ Data Analytics       Intermediate  ← matched     │ │
│  │ ✅ Policy Development   Foundation    ← matched     │ │
│  │ ○  Critical Thinking    (not in profile)            │ │  ← gap state
│  └─────────────────────────────────────────────────────┘ │
│  ℹ️ Matched to posting requirements. Add missing ones     │
│     to your profile to strengthen your application.      │
│                                                          │
│  Your strengths (pre-filled — edit or leave)             │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Led analytics capability uplift programme for        │ │
│  │ 12 officers across 3 divisions. Designed and         │ │
│  │ delivered training using real policy datasets.       │ │
│  │                                        [____________]│ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  Why do you want this opportunity?  (required)           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │                                                     │ │
│  │ [Write your motivation here...]                     │ │
│  │                                                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  Supervisor acknowledgement                              │
│  [ ] I have informed my supervisor of this application   │
│                                                          │
│  [ Submit Application ]     ( Save Draft )               │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**State variation — stale pre-fill warning:**
```
│  ⚠️ Your profile was last updated 8 months ago.          │
│     Some details may be outdated. [ Update Profile ]     │
```

**Key interactions:** Editable pre-filled fields. Competency gap visible inline. Motivation is the only blank field. Draft save available.

---

### Screen 1D: Confirmation

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass                            👤 Lee Wei Ming  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                                                          │
│              ✅                                           │
│              Application submitted                       │
│                                                          │
│              Senior Data Analyst · MDDI                  │
│                                                          │
│              Reference number                            │
│              ┌───────────────────────────┐               │
│              │   APP-2027-003421         │               │
│              └───────────────────────────┘               │
│                                                          │
│              Submitted: 23 Jun 2027, 10:42 AM            │
│                                                          │
│              What happens next                           │
│              ─────────────────────────                   │
│              MDDI will review applications               │
│              and update your status within               │
│              5 working days.                             │
│                                                          │
│              You'll be notified by email and             │
│              in CareerCompass when your                  │
│              status changes.                             │
│                                                          │
│              [ View My Applications ]                    │
│              ( Explore more opportunities )              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

### Screen 1E: My Applications Tab — Status Tracking

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass                            👤 Lee Wei Ming  │
├──────────────────────────────────────────────────────────┤
│ Opportunities   My Applications ●   My Profile           │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  My Applications (3)                                     │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ 🟦 STIP · MDDI                                     │  │
│  │ Senior Data Analyst                                │  │
│  │                                                    │  │
│  │ ● Under Review                                     │  │  ← status
│  │ Submitted 23 Jun 2027 · Ref: APP-2027-003421       │  │
│  │                                     [ View ] [···] │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ 🟩 Internal Job · PSD                              │  │
│  │ HR Business Partner                                │  │
│  │                                                    │  │
│  │ ⏳ Submitted                                        │  │
│  │ Submitted 10 Jun 2027 · Ref: APP-2027-002891       │  │
│  │                                     [ View ] [···] │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ 🟨 Gig · ESG                                       │  │
│  │ Event Planning Support                             │  │
│  │                                                    │  │
│  │ ✅ Outcome: Successful                              │  │
│  │ Completed 1 Apr 2027                               │  │
│  │                                     [ View ] [···] │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Status legend (design note):** ⏳ Submitted · ● Under Review · ☑ Shortlisted · ✅ Successful · ✗ Unsuccessful

---

### Flow 1 Summary

```
[1A: Listing] --click View--> [1B: Detail page]
                                     │
                              click Apply Now
                                     │
                              [1C: Pre-filled form]
                                     │
                              click Submit
                                     │
                              [1D: Confirmation] --click View My Applications-->
                                                         │
                                                  [1E: My Applications tab]
```

---
---

## Flow 2: Posting Manager Create (Epic A)

**Context:** Agency HR creates a posting natively in CareerCompass. The aha moment is the officer-view preview pane before they publish.

**Screens:** 5

**Design question this flow answers:** Does this feel lighter than OTG, and is it obvious this replaces OTG (not adds to it)?

---

### Screen 2A: Agency Dashboard

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass Agency Portal              👤 Tan Mei Ling  │
│                                              MDDI HR     │
├──────────────────────────────────────────────────────────┤
│ My Postings   Applications   Reports                     │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  My Postings (4 active)                  [ + New Posting ]│
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Senior Data Analyst           STIP  🟢 Live        │  │
│  │ 12 applicants · Closes 30 Jul 2027                 │  │
│  │                          [ Review ] [ Edit ] [···] │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Policy Research Officer       STIP  🟢 Live        │  │
│  │ 3 applicants · Closes 15 Aug 2027                  │  │
│  │                          [ Review ] [ Edit ] [···] │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Comms and Engagement Exec     Gig   🟡 Draft       │  │
│  │ Not published yet                                  │  │
│  │                          [ Preview ] [ Edit ] [···]│  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│  Last synced with OTG: today 08:00 ✅                    │  ← trust signal
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Key interaction:** "New Posting" — this is where the creation flow begins. "Last synced" indicator is the trust signal that prevents "where's my OTG posting?" tickets.

---

### Screen 2B: Create Posting — Type Selection

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass Agency Portal              👤 Tan Mei Ling  │
├──────────────────────────────────────────────────────────┤
│ ← Back to My Postings                                    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Create a new posting                                    │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  What type of opportunity are you posting?               │
│                                                          │
│  ┌──────────────────────┐  ┌──────────────────────┐     │
│  │  🟦 STIP             │  │  🟩 Internal Job      │     │
│  │                      │  │                      │     │
│  │  Short-term          │  │  Permanent or        │     │
│  │  Immersion           │  │  contract role       │     │
│  │  Programme           │  │  within your agency  │     │
│  │                      │  │                      │     │
│  │     ( Select )       │  │     ( Select )       │     │
│  └──────────────────────┘  └──────────────────────┘     │
│                                                          │
│  ┌──────────────────────┐  ┌──────────────────────┐     │
│  │  🟨 Gig              │  │  🔁 Secondment        │     │
│  │                      │  │                      │     │
│  │  Short project-      │  │  Cross-agency        │     │
│  │  based assignment    │  │  posting             │     │
│  │  (< 3 months)        │  │                      │     │
│  │                      │  │                      │     │
│  │     ( Select )       │  │     ( Select )       │     │
│  └──────────────────────┘  └──────────────────────┘     │
│                                                          │
│  ┌──────────────────────┐                               │
│  │  🟪 PSFG             │                               │
│  │                      │                               │
│  │  Public Service      │                               │
│  │  Fellowships &       │                               │
│  │  Grants              │                               │
│  │                      │                               │
│  │     ( Select )       │                               │
│  └──────────────────────┘                               │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

### Screen 2C: Create Posting — Form (STIP selected)

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass Agency Portal              👤 Tan Mei Ling  │
├──────────────────────────────────────────────────────────┤
│ ← Back      New STIP Posting              Step 1 of 2    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Basic details                                           │
│                                                          │
│  Posting title *                                         │
│  [Senior Data Analyst_______________________________]    │
│                                                          │
│  Agency *                     Division                   │
│  [MDDI_______________▼]       [Digital Industry__▼]      │
│                                                          │
│  Duration *                   Closing date *             │
│  [6 months_____________▼]     [30 Jul 2027_______📅]     │
│                                                          │
│  Location                                                │
│  [140 Hill Street, #02-01_________________________]      │
│                                                          │
│  About this opportunity *                                │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ The Ministry of Digital Development and Innovation  │ │
│  │ is seeking a data analyst to support...             │ │
│  │                                                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  Competencies required *                                 │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Data Analytics           [Intermediate   ▼]  [×]   │ │
│  │ Policy Development       [Foundation     ▼]  [×]   │ │
│  │ + Add competency                                    │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  Eligibility (optional)                                  │
│  [Min 2 years service; open to all pilot agencies____]   │
│                                                          │
│  ( Save Draft )                  [ Preview → ]           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Note:** Fields differ by posting type (Duration is mandatory for STIP/Gig, not for Internal Job/Secondment). Templates per type pre-fill common fields.

---

### Screen 2D: Preview Pane ⭐ Aha moment

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass Agency Portal              👤 Tan Mei Ling  │
├──────────────────────────────────────────────────────────┤
│ ← Edit details    Preview              Step 2 of 2       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  This is exactly what officers will see                  │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  ┌─  Officer view  ──────────────────────────────────┐  │
│  │  🟦 STIP · MDDI                                   │  │
│  │  Senior Data Analyst                              │  │
│  │  ─────────────────────────────────────────────── │  │
│  │  Duration: 6 months       Closing: 30 Jul 2027   │  │
│  │  Location: 140 Hill Street                       │  │
│  │                                                   │  │
│  │  About this opportunity                           │  │
│  │  The Ministry of Digital Development and          │  │
│  │  Innovation is seeking a data analyst to          │  │
│  │  support digital policy research...               │  │
│  │                                                   │  │
│  │  Competencies required                            │  │
│  │  ● Data Analytics       Intermediate              │  │
│  │  ● Policy Development   Foundation                │  │
│  │                                                   │  │
│  │  Eligibility                                      │  │
│  │  Min 2 years service; open to all pilot agencies  │  │
│  │                                                   │  │
│  │       [ Apply Now ]                               │  │
│  └───────────────────────────────────────────────────┘  │
│                                                          │
│  Looks good?                                             │
│                                                          │
│  ( ← Edit )                   [ Publish Posting ]        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**The aha:** "This is exactly what officers will see" — control OTG never gave them.

---

### Screen 2E: Publish Confirmation

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass Agency Portal              👤 Tan Mei Ling  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│              ✅                                           │
│              Your posting is live                        │
│                                                          │
│              Senior Data Analyst · STIP                  │
│                                                          │
│              ┌────────────────────────────────────┐      │
│              │  Officers who can see this: ~5,400 │      │  ← immediate visibility
│              │  Pilot agencies: ESG, PSD, MDDI,   │      │
│              │  URA, MCCY, CAAS                   │      │
│              └────────────────────────────────────┘      │
│                                                          │
│              Published: 23 Jun 2027, 11:05 AM            │
│              Closes: 30 Jul 2027                         │
│                                                          │
│              Applications will appear in your            │
│              dashboard as officers apply.                │
│                                                          │
│              [ View My Postings ]                        │
│              ( Create another posting )                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Note:** "~5,400 officers who can see this" replaces the OTG anxiety of "is it live? when does it go visible?" with immediate, concrete confirmation.

---

### Flow 2 Summary

```
[2A: Dashboard] --click New Posting--> [2B: Type selection]
                                               │
                                        select STIP
                                               │
                                       [2C: Create form]
                                               │
                                        click Preview
                                               │
                                       [2D: Preview pane] --← Edit-- loop back
                                               │
                                        click Publish
                                               │
                                       [2E: Confirmation]
```

---
---

## Flow 3: The Seam — Manager Reviews, Status Flows Back (Epic C)

**Context:** Officer's application lands in the manager's dashboard. Manager reviews, shortlists, and updates status. Officer sees the status change in CareerCompass — including the rejection screen.

**Screens:** 5

**Design question this flow answers:** Does the rejection screen feel handled, or does it feel like a dead end? And does the manager feel they have an audit trail?

---

### Screen 3A: Manager — Application List

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass Agency Portal              👤 Tan Mei Ling  │
├──────────────────────────────────────────────────────────┤
│ ← My Postings                                            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Senior Data Analyst · STIP            🟢 Live           │
│  Applications (12)                Closes 30 Jul 2027     │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Filter: [All ▼]  Sort: [Most recent ▼]                  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Lee Wei Ming          ESG · MX13 · 5 yrs svc       │  │
│  │ ✅ Data Analytics (Int)  ✅ Policy Dev (Fdn)         │  │  ← competency match
│  │ Submitted 23 Jun 2027                              │  │
│  │ Status: Submitted                [ Review ]        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Priya Ramasamy        PSD · MX11 · 3 yrs svc       │  │
│  │ ✅ Data Analytics (Adv)  ✅ Policy Dev (Int)         │  │
│  │ Submitted 21 Jun 2027                              │  │
│  │ Status: Submitted                [ Review ]        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Ahmad Fadzillah       MCCY · MX12 · 4 yrs svc      │  │
│  │ ⚠️ Data Analytics (Fdn) ✅ Policy Dev (Int)          │  │  ← gap flagged
│  │ Submitted 20 Jun 2027                              │  │
│  │ Status: Submitted                [ Review ]        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Key aha:** Structured data visible without chasing HR systems. Competency match visible in the list view — manager can pre-screen before opening the full profile.

---

### Screen 3B: Manager — Applicant Profile Detail ⭐ Manager aha moment

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass Agency Portal              👤 Tan Mei Ling  │
├──────────────────────────────────────────────────────────┤
│ ← Back to applications                                   │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  👤 Lee Wei Ming                                         │
│  MX13 · ESG · 5 years 3 months service                  │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Competencies                                            │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Data Analytics         Intermediate  ✅ matches role │ │
│  │ Policy Development     Foundation    ✅ matches role │ │
│  │ Critical Thinking      Foundation    ○ not required  │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  Their strengths                                         │
│  "Led analytics capability uplift programme for 12       │
│  officers across 3 divisions. Designed and delivered     │
│  training using real policy datasets."                   │
│                                                          │
│  Why they want this                                      │
│  "I'm keen to apply my analytics experience in a         │
│  policy context. The AI strategy work at MDDI aligns     │
│  directly with my long-term career goals."               │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Update status                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ ( ) Submitted   (•) Under Review   ( ) Shortlisted  │ │
│  │ ( ) Successful  ( ) Unsuccessful                    │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  Note (optional — for your records)                      │
│  [Strong competency match. Strong motivation.________]   │  ← audit trail
│                                                          │
│  [ Save Status ]                                         │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Key interaction:** Status update + optional note. The note creates an audit trail without mandatory friction.

---

### Screen 3C: Status Update Confirmation (Manager side)

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass Agency Portal              👤 Tan Mei Ling  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ✅ Status updated                                        │
│                                                          │
│  Lee Wei Ming → Under Review                             │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Lee Wei Ming has been notified by email and         │ │
│  │ in CareerCompass.                          1 notif. │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ← Back to all applications                              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Note:** "1 notified" confirmation removes the manager's anxiety about whether applicants were told — the pain point that leads to manual email chasing today.

---

### Screen 3D: Officer — Status Update (In Review)

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass                            👤 Lee Wei Ming  │
├──────────────────────────────────────────────────────────┤
│ Opportunities   My Applications ●   My Profile           │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ← My Applications                                       │
│                                                          │
│  Senior Data Analyst · MDDI                              │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Application timeline                                    │
│                                                          │
│  ✅ Submitted          23 Jun 2027, 10:42 AM              │
│  │                                                       │
│  ● Under Review  ←── you are here   24 Jun 2027, 9:15 AM │  ← status
│  │                                                       │
│  ○ Outcome                           (pending)           │
│                                                          │
│  Ref: APP-2027-003421                                    │
│  Closing date: 30 Jul 2027                               │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Your application details                                │
│  [ View what you submitted ▼ ]                           │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  While you wait                                          │
│  ( Explore similar opportunities )                       │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

### Screen 3E: Officer — Rejection Screen ⚠️ Most emotionally sensitive screen

```
┌──────────────────────────────────────────────────────────┐
│ CareerCompass                            👤 Lee Wei Ming  │
├──────────────────────────────────────────────────────────┤
│ Opportunities   My Applications   My Profile             │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ← My Applications                                       │
│                                                          │
│  Senior Data Analyst · MDDI                              │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Application timeline                                    │
│                                                          │
│  ✅ Submitted          23 Jun 2027                        │
│  ✅ Under Review       24 Jun 2027                        │
│  ✗  Outcome           15 Jul 2027                        │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Thank you for applying                                  │
│                                                          │
│  MDDI has completed their review for this posting.       │
│  Your application was not taken forward this time.       │
│                                                          │
│  This doesn't reflect your overall candidacy —          │  ← tone
│  competition was strong for this role.                   │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  What you can do next                                    │
│                                                          │
│  🔍 ( Explore similar STIPs )                            │
│  📋 ( Update your profile with new strengths )           │
│  🔖 ( View your saved opportunities )                    │
│                                                          │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  ⚠️ Design note: This screen needs Amber's early         │
│     attention — emotional tone, next steps, and whether  │
│     a "request feedback" path should exist (policy       │
│     question — confirm with pilot agency before build)   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

### Flow 3 Summary

```
                    [3A: Application list]
                            │
                     click Review
                            │
                    [3B: Applicant profile]
                     -- update status --> Under Review
                            │
                    [3C: Manager confirmation] → "1 notified"
                            │
                    (officer side, simultaneously)
                            │
                    [3D: Officer status view — Under Review]
                            │
                    (manager later marks Unsuccessful)
                            │
                    [3E: Officer rejection screen]
```

---

## Cross-Flow Navigation

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   OFFICER                         MANAGER                   │
│                                                             │
│   [1A Listing]                    [2A Dashboard]            │
│       │                               │                     │
│   [1B Detail]            ◄────────── [2C Create form]       │
│       │                               │                     │
│   [1C Apply form]                 [2D Preview]              │
│       │                               │                     │
│   [1D Confirmation] ─────────────► [3A App list]            │
│       │                               │                     │
│   [1E My Apps]  ◄────────────────── [3B Applicant profile]  │
│       │                               │                     │
│   [3D Status view] ◄──────────────── [3C Status confirm]    │
│       │                                                     │
│   [3E Rejection]                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Design Notes

**Screens needing early attention (before grooming):**

| Screen | Risk | Action |
|--------|------|--------|
| 1C: Pre-fill form | Stale/partial pre-fill state undesigned — this is where trust breaks | Design the gap and stale states, not just the happy path |
| 2B: Type selection | Must signal "this replaces OTG" — dual-posting is the failure mode | Confirm with pilot agency whether to show OTG migration messaging here |
| 2D: Preview pane | The aha moment — must feel instant and accurate | The preview must render exactly what officers see; any mismatch = trust break |
| 3B: Applicant profile | Competency data depends on POCDEX (#18/#41) — may be empty at launch | Design the "competency data not available yet" state |
| 3E: Rejection screen | Most emotionally sensitive screen in R1 | Amber to scope early alongside Epic C data model; confirm whether "request feedback" is a policy option |

**States needed for each screen (not designed here — next pass):**
- Empty states (no applications yet, no postings yet)
- Loading states
- Error states (submission failed, data unavailable)
- Mobile views (officer side especially — likely accessed on phone)

---

*Low-fi only — not for visual design reference. Use as flow validation input for Amber + Pow Hwee before mid-fi pass.*
*Sources: R1 Epic Brief (2026-06-23), journey-map-create-posting-r1.md, journey-map-posting-manager-r1.md, r1-end-to-end-blueprint.md*
*Next: `/generate-ai-prototype` to turn this into a clickable Figma-ready prompt*
