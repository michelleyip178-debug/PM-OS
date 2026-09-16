# Handover Guide: R1 Opportunities Deck Updates (Slides 1 to 6)

**Document Reference:** `outputs/analyses/2026-09-16-W38-r1-deck-sharpening-handover.md`  
**Target Deck:** *R1 Opportunities: Scope and Plan* (6 Slides)  
**Date:** 2026-09-16 (Week 38)  
**Purpose:** Clear, slide-by-slide copy and visual edits for your coworker to apply directly to the presentation deck.

---

## Executive Checklist for Coworker

1. **Critical Correction (Slides 3 & 4):** Purge all occurrences of `SingPass` and replace with `WOG AD profile`.
2. **Hero Metric (Slide 2):** Add the fact that **Rotations & Secondments make up 51% of all postings**, and that legacy OTG had **zero CV upload capability**.
3. **Recommendation Badge (Slide 5):** Mark Option B as **"(Recommended)"** and add the warning that OTG has no bulk upload capability.
4. **Punctuation & Clean-up (Slide 6):** Remove em dashes and re-frame the red box as **"The Non-ATS Guardrails (Saves 4.5 sprints)"**.

---

## Slide-by-Slide Detailed Edits

### Slide 1: "R1: What We Will Deliver"

| Section | Current Text (Before) | Updated Text to Paste (After) | Why We Are Changing It |
|---|---|---|---|
| **Pillar 1 Title** | 1. Bring Opportunities into Career Compass | **1. Move Off OTG** | Turns a passive feature into an active strategic goal. |
| **Pillar 1 Subtitle** | All five opportunity types in one place, while Career Compass and OTG coexist during the transition. | **All 5 opportunity types discoverable in Compass, accelerating the 2028 OTG decommissioning target.** | Links discovery directly to the OTG sunset business case. |
| **Pillar 2 Title** | 2. Make Applying Easier | **2. Apply Seamlessly** | Aligns with our 3-Pillar Leadership Contract nomenclature. |
| **Pillar 2 Box 1** | For Career Compass users: Profile pre-filled from Career Compass | **Pre-Filled from WOG AD Profile (Editable):** Official name, ministry, designation, and work email pre-populate automatically. | Accuracy: Auth runs on WOG AD via Keycloak SSO, not separate Compass accounts. |
| **Pillar 2 Box 2** | For non-Compass users: Public application form | **Manual Entry Fallback:** Clean manual entry fields for newly joined officers or non-onboarded statutory boards. | Eliminates confusion: Compass is an internal WOG tool, not an unauthenticated public portal. |
| **Pillar 2 Box 3** | For all applicants: CV and agency questions | **Native PDF CV Upload (`F-05`) + Barry Lim's Rule:** Direct resume attachment (max 5MB) + max 1 optional text question (500 chars). | Reflects our approved architecture rule banning custom form builders. |
| **Pillar 3 Title** | 3. Give Officers Visibility of Outcomes | **3. Close the Loop** | Crisp executive terminology. |
| **Pillar 3 Timeline** | Submitted → In Review → Outcome (Offered / Not progressing) | **Submitted → In Review → Outcome (Selected / Concluded)** | Reflects the simplified 3-stage non-ATS model. |
| **Pillar 3 Auto-Rule** | *(None)* | *Add text under timeline:* **30-Day Auto-Expiry Rule:** Postings with no host update automatically conclude after 30 days, ending candidate limbo. | Highlights that candidate black holes are eliminated by automated system rules. |

---

### Slide 2: "Why R1? The Problem Today"

#### 1. Add Callout Banner Across Top of Stats
Insert a prominent blue callout bar directly below the subtitle:
> **"Rotations & Secondments make up 51% of all WOG opportunities (537 / 1,035 postings), yet legacy OTG could not process a single resume."**

#### 2. Card Content Updates

| Card | Current Text | Updated Text to Paste | Rationale |
|---|---|---|---|
| **Card 1 (STIPs)** | STIPs dominate the listings: 4,056 (85.4%) | **STIPs Dominate Raw Volume:** 4,056 vacancies (85.4% of catalog). Buries substantive career moves in search feeds. | Explains why dedicated in-catalog tabs (`F-17`) are mandatory. |
| **Card 2 (Gigs & IJR)** | Many Gigs receive no applications: 46% of Gigs get 0–1 applicant | **46% Empty Gig Rate & 88% IJR Failure:** 46% of gigs get 0–1 applicant. Internal Job Rotations (IJR) suffer an 88% zero-applicant rate due to agency silos. | Surfaces the newly discovered IJR catastrophe from the 2025 dataset. |
| **Card 5 (Rotations 89%)** | Most rotation outcomes are not recorded: 89% | **89% Rotation Outcomes Unrecorded:** Root Cause: OTG has zero CV upload capability. Officers were forced to email resumes to HR or exit to Careers@Gov. | **The killer stat:** Proves unrecorded outcomes were caused by OTG's architectural blindness, not HR negligence. |
| **Card 6 (Churn 90%)** | High candidate churn: 90% drop out before an outcome | **90% Candidate Churn & Limbo:** 9 out of 10 officers abandon at external FormSG redirects or disengage after weeks of silence. | Re-anchors the officer frustration story. |

---

### Slide 3: "End-to-End Journey"

1. **Step 3 (Apply) - Critical Correction:**
   * **Delete:** `Pre-filled profile (from SingPass/Compass)`
   * **Replace with:** `Pre-filled profile (from WOG AD / Compass)`
2. **Step 4 (Different flows):**
   * *Bucket 1 (STIPs & Gigs):* `Embedded FormSG template (3 to 5 fields) / 3-field quick post`
   * *Bucket 2 (Rotations & Secondments):* `Direct PDF CV Upload (max 5MB, virus-scanned) + Barry Lim's 1-question prompt`
3. **Step 6 (Decide):**
   * Change status icons from the 4-state pipeline to the approved 3-state progression:  
     `Submitted` $\longrightarrow$ `In Review` $\longrightarrow$ `Outcome (Selected / Concluded)`
4. **Step 7 (Close the Loop):**
   * Ensure `Auto-expiry (after 30 days of inactivity)` is highlighted in bold under My Applications.

---

### Slide 4: "From Discovery to Outcome"

1. **Step 3 (Apply) - Critical Correction:**
   * **Delete:** `Pre-filled profile (from SingPass/Compass)`
   * **Replace with:** `Pre-filled profile (from WOG AD / Compass)`
2. **Clarify the Two Buckets:**
   * **Bucket 1 (Green Tile):** Change label to **"Bucket 1: STIPs & Gigs (High-Volume / Experiential)"**  
     *Text below:* `Embedded FormSG (3-5 standard fields) or 3-field quick post`
   * **Bucket 2 (Blue Tile):** Change label to **"Bucket 2: Rotations, SJRs & Secondments (Formal Career Moves - 51% of Postings)"**  
     *Text below:* `Direct PDF CV Upload (max 5MB, virus-scanned)`
3. **Step 5 (Track):**
   * Change status pills to: `Submitted` $\rightarrow$ `In Review` $\rightarrow$ `Outcome (Selected / Concluded)`.

---

### Slide 5: "R1 OTG Coexistence: Two Options"

1. **Option A (Keep Both In Sync) - Add Warning:**
   * In the red "Key consideration" box under Option A, add this bullet:  
     **"OTG has no bulk upload tool; all postings in OTG are created 1-by-1 manually. Without an automated write API from OTG in Sprint 1, Option A forces agency HR into manual double-entry."**
2. **Option B (Move Pilot Agencies to Compass) - Add Recommendation Badge:**
   * Above Option B, add a green badge: **"(Recommended Path)"**
   * In the green "What this means" box, emphasize:  
     **"Pilot agencies post exclusively on Compass. Zero double-entry for HR. Deploys sticky redirect banner on OTG to funnel officers directly to Compass."**

---

### Slide 6: "R1 Feature Roadmap"

1. **Top Committed Box (Blue):**
   * Ensure capacity math is visible: **"Committed R1 Scope: 5.5 Sprints (4.8 sp feature dev + 0.7 sp hardening buffer)"**.
2. **Top Deferred Box (Red):**
   * Change title from "Deferred to R2" to:  
     **"DEFERRED TO R2 (4.5 Sprints Saved: The Non-ATS Guardrails)"**
   * Subtitle: *Preserves engineering capacity by letting offline panels and central ATS handle candidate scoring and interview scheduling.*
3. **Punctuation Fix in Right-Hand Text Box:**
   * **Delete:** `R1 is about getting the core journey right — discover, apply and track — rather than building a full recruitment system.`
   * **Replace with:** `R1 is about getting the core journey right (discover, apply, track), rather than building a full recruitment system.`
