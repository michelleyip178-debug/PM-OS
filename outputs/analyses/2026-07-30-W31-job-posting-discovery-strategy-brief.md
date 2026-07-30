# Strategy Brief: Job Posting & Discovery — Problems, HR Impact, Officer Impact, Recommendations

**Date:** 2026-07-30

**Author:** Michelle Yip

**Audience:** Business owners, senior stakeholders, SteerCo-level circulation

**Sources:** Synthesized from CareerCompass/OTG discussions, sprint demos, and OTG onboarding documentation across multiple meetings and artefacts

---

## The Problem

Jobs and opportunities are currently posted as isolated vacancies across fragmented systems, with inconsistent metadata and categorisation. This makes it difficult for officers to discover relevant opportunities and difficult for HR to manage postings efficiently.

**The product opportunity:** move from "posting jobs" to publishing structured, competency-tagged opportunities that are discoverable, searchable, matched, and governed consistently across the Public Service.

---

## Eight Recurring Problems

These aren't hypotheses — they've surfaced repeatedly across meetings, demos, and operational discussions.

**1. Postings are fragmented across platforms.** Opportunities exist across OTG, Careers@Gov, FormSG, agency portals, email circulars, and now CareerCompass. This creates confusion about which source is authoritative and has produced duplicate postings when the same job appears on both OTG and Careers@Gov.

**2. Categorisation is inconsistent.** Agencies use different naming conventions and prefixes. Missing or ambiguous type prefixes make it hard to tell jobs, secondments, gigs, STIPs, and SJRs apart — agencies interpret categories differently from each other.

**3. Discovery is hard for officers.** The original motivation for internal job posting on OTG was that there was no readily available platform for HR to publicise and officers to discover opportunities meaningfully. Officers also struggle to view opportunities through a competency lens.

**4. Matching between jobs and officer profiles is poor.** Many jobs are posted as plain vacancies rather than competency-based opportunities, so officers have to manually work out whether a role suits them. Competency tagging, role profile mapping, job family alignment, and recommendation capability are all still needed.

**5. Data quality issues hurt search and filtering.** Job function mappings don't align across systems. Some opportunities don't appear under selected filters. Null or unmapped job functions cause opportunities to silently disappear from results.

**6. Manual operational overhead for HR.** Agencies must correct categories and prefixes by hand, reports must be generated to find malformed postings, and HR has to manually coordinate remediation. Posting quality currently depends on human discipline, not system guardrails.

**7. Ringfencing rules complicate visibility.** Agency-, job family-, or officer-level restrictions are necessary, but officers often can't tell why they can see some jobs and not others, or what's genuinely available to them.

**8. The OTG-to-CareerCompass transition adds its own confusion.** During migration, agencies may need to run both platforms at once, with the operational burden of keeping postings synchronised across both.

---

## What This Means for HR

| Challenge | Description |
|---|---|
| No single posting channel | Managing opportunities across OTG, Careers@Gov, FormSG, and email makes a single source of truth hard to maintain and invites duplicate postings |
| Inconsistent categorisation | Different agency naming conventions require manual cleanup before opportunities can surface correctly |
| High administrative effort | HR manually validates postings, corrects missing metadata, and coordinates remediation |
| Difficulty reaching the right candidates | Vacancy-style postings aren't competency-driven, making it harder to attract suitable applicants |
| Complex visibility/ringfencing rules | Agency, job family, or officer-level restrictions add setup complexity and risk of incorrect visibility |
| Poor data quality | Missing job functions and inconsistent metadata reduce search, filtering, and reporting effectiveness |
| Duplicate postings, fragmented reporting | The same opportunity on multiple platforms makes tracking applications and measuring effectiveness harder |
| Migration/change management burden | Running OTG and CareerCompass side by side during transition adds confusion for HR and officers alike |

---

## What This Means for Officers

| Challenge | Description |
|---|---|
| Opportunities scattered across channels | Officers must check OTG, Careers@Gov, agency channels, email, and FormSG to get a complete picture |
| Limited visibility of relevant opportunities | Existing platforms don't connect officers to opportunities matching their skills or aspirations, so good matches get missed |
| Difficulty assessing fit | Vacancy-centric postings require officers to manually judge whether a role aligns with their strengths and goals |
| Inconsistent categorisation and search | Varying agency practices make searching, filtering, and comparing opportunities harder |
| Restricted visibility from ringfencing | Officers face uncertainty about which opportunities are actually accessible to them |
| Lack of career pathway transparency | Officers struggle to see lateral moves, stretch opportunities, or progression paths across the public service |
| Poor discoverability of development opportunities | Jobs, gigs, secondments, SJRs, and volunteering are managed differently, fragmenting exploration |
| Fragmented application experience | Different application routes and duplicate listings create friction, especially during the OTG-to-CareerCompass transition |

**As three themes, for a strategy deck:**
1. I can't see all the opportunities available to me.
2. I don't know which opportunities are a good fit for me.
3. Applying for opportunities isn't seamless across systems.

---

## Recommendations

### For reducing HR workload

| Recommendation | How it helps |
|---|---|
| Single opportunity posting platform | Removes the need to post the same opportunity across OTG, CareerCompass, email, and FormSG, cutting duplicate effort |
| Standardise categories and templates | A fixed set of opportunity types with standard fields removes manual classification and cleanup |
| Automate metadata tagging | Auto-populate job family, function, agency, and competencies from reference data instead of manual entry |
| Built-in validation and guardrails | Block publishing when required information is missing or inconsistent, cutting downstream cleanup |
| Automated competency tagging | Recommend competencies from job descriptions or role profiles, reducing manual mapping effort |
| Reusable posting templates / cloning | Let HR duplicate a previous posting and edit only what changed |
| Automate ringfencing rules | Derive visibility restrictions from agency/scheme/job family rules instead of manual configuration per posting |
| Auto-expiry and lifecycle management | Automatically archive expired postings and remind HR to extend active ones |
| Integrated applicant tracking | Consolidate posting, application, and status tracking into one workflow instead of spreadsheets |
| AI-powered candidate matching | Surface suitable officers automatically, cutting manual shortlisting effort |
| Centralised reporting and dashboards | Give HR visibility of views, applications, and conversion rates without collating data manually |
| Migration and bulk management tools | Support bulk updates and uploads to reduce manual remediation during onboarding/migration |

**Note on ringfencing:** CareerCompass's current release plan keeps ringfencing *criteria authoring* in OTG rather than natively in CareerCompass — the automation recommended above (deriving visibility from agency/job family rules) is the target state, but isn't committed scope in the near term. Worth flagging explicitly wherever this brief circulates, so the recommendation doesn't get read as an existing commitment.

### For improving officer discovery

| Recommendation | Benefit |
|---|---|
| Single marketplace for all opportunities | Officers discover jobs, gigs, secondments, SJRs, and volunteering in one place |
| Personalised recommendations | Match opportunities to competencies, aspirations, and career goals |
| Competency-based matching | Show fit and competency gaps so officers can quickly assess suitability |
| Improved search and filtering | Standardised categories and job functions make filtering by interest, function, or agency easier |
| Transparent visibility of eligible opportunities | Apply ringfencing behind the scenes, showing officers only what they're actually eligible for |
| Clear career pathway guidance | Surface lateral moves, stretch roles, and progression paths |

---

## Three Strategic Recommendations (Executive Summary)

1. **Reduce duplication:** one platform, one posting, one source of truth.
2. **Reduce manual work:** automate categorisation, competency tagging, ringfencing, and validation.
3. **Reduce administrative follow-up:** integrated applications, lifecycle management, and reporting dashboards.

**Product statement:** Enable HR to create once, publish everywhere, and manage opportunities through an automated, competency-driven workflow with minimal manual intervention.

---

## How This Connects to Current Work

Several of these recommendations are already reflected in what's being built or actively scoped:

- **Single posting platform:** directly aligns with the current push to let agencies create postings natively in CareerCompass (in progress — see the R1 discovery plan for open questions on posting types and categorisation).
- **Standardise categories:** the categorisation and prefix-ambiguity problem described here (Problem #2) is the same classification issue currently blocking native posting creation — a proposed "long-term stint vs. short-term/gig" field is one option under discussion, though it doesn't fully resolve every overlap.
- **Automate ringfencing:** correctly identified here as a real pain point, but not yet in near-term scope — CareerCompass's current plan keeps ringfencing criteria authoring in the existing system for now.
- **Integrated applicant tracking:** matches the in-progress work to let officers apply and track status natively, without external redirects.

This brief is strongest as a shared problem framing and a longer-term direction. Recommendations beyond what's already in motion (automated competency tagging, AI-powered matching, centralised dashboards) should be treated as future-state candidates, not near-term commitments, unless explicitly scoped and resourced.
