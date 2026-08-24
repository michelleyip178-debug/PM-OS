Title: Epic 2: My Development Page
Version: 44
Last updated: 2026-08-18T03:25:12.070Z
Source: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931314890

Doc Created

9 Feb 2026

PM

 |

 |
Tech

 |

 |
Designer

 |

 |
Business Owner

 | Jacky (lead), Xian Zhang (owner)

 |
Infra Eng

 |

 |
Target launch

 | October 2026

 |
Epic Link

 | https://sgtechstack.atlassian.net/browse/OTEP-68?atlOrigin=eyJpIjoiZjU0ZDJiZmUyMDNiNDRhYmE4ODE0YjAzN2EzMmFhMzUiLCJwIjoiaiJ9

 |
Figma Link

 | https://www.figma.com/design/TTm0tLa93BzjCApKTLAEI4/OTEP-v0.1?node-id=2043-4649 - pending Design Exploration (according to User Stories)
- pending 1st Draft with Variants (according to User Stories)
- pending Design Sharing with BO (according to Epic)

 |
Other PRDS

 | MVP Talent Profile Page

 |
1. Background & Context

Purpose: Help the reader understand why this exists now.

Strategic Context

The government has a few strategic goals for it’s workforce:

Enable career discovery, growth and mobility for officers, anchored on competencies

Enable talent discovery and agility in talent deployment across WOG, anchored on competencies

Enable long-term workforce planning and development to for future-proofing

Current State

The current career development platform, called internally as One Talent Gateway (OTG), is a SAAS platform (Fuel50), used by officers to create their career profiles, manage their competencies, seek coaching, find opportunities and courses etc.

Survey data (Insight and Baseline Survey, Jan 2025, n=1385) reveals that 21% of active OTG users* prioritize competency management features (2nd after opportunities discovery). However, only 9% (8k out of 91k onboarded officers^) has relogged in (second login or more) in 2025.

The competency gap analysis feature exists in OTG but suffers from poor UX (multiple clicks to set up and access) and incomplete data coverage of role profiles across all agencies.

Why Now/ What changed?

Limited functionalities of Fuel50 makes it difficult to scale to all our needs and required many workarounds that comprised user experience (deck on Buy vs Build here). Eg.

Self-assessment of competencies is only based on manually selected and predefined roles.

Officers may not see their correct role reflected as an option to select (because their role is niche)

Officers with more generic titles such as HR manager might erroneously select a role profile that is from another agency which may contain different functional competencies, because roles do not have agencies labelled against them

Increasing pain point as WD works with more and more SBs because they have their own frameworks of competencies (even if its from WOG FCs)

No inference capability to accurately and comprehensively represent officer’s capabilities based on working and learning history

Lack agility in implementing new change requests by Fuel50, often dependent on their agreement to build and taking a long time.

Additional new functionalities are costly with little bargaining power

Engagement rate for OTG is low - at 9% relogin rate in 2025

21% of active OTG users reveal they prioritize competency management but the current platform does not facilitate  that well

Survey data reveals that only 64.6% of officers agree/strongly agree they know what competencies to upskill in (27.9% neutral, 8.38% disagree, 2% strongly disagree and 1.16% not aware of their competencies)

Hence, a new system will be built in-house, One Talent Engagement Platform (OTEP), that provides the flexibility we need. The MVP focuses on validating whether officers will take action if competency gaps are made clear and actionable. This epic tests the foundational hypotheses needed to justify continued investment in competency infrastructure, together with Epic 2 and 3 (on unifying opportunities and courses)

Requested by

Workforce Development (WD) team, owner of the strategic goals stated above

*Source: OTEP Update to OTG Comm 4Sep Deck

^105k accounts created but not all agencies have informed officers of their accounts

2. Problem Statement

Purpose: Clearly define the problem before jumping to solution.

Officers struggle to identify which competencies to develop and subsequently take action on because competency gap information today is unclear, resulting in officers not knowing what career development action to take.

3. Data Analysis & Evidence

Purpose: Show this is not opinion-driven. What proof do we have that this is real and worth solving?

Include if available or mark it for development:

Examples:

% of users affected/dropped-off

Time taken today vs desired

Error or dropout rate

Support tickets or complaints

From our survey results on 1380 officers, X% indicated that

Y% of officers do not have a second login within 3mths of first login.

Type

Finding

Source

Why?

Feature prioritisation

 | 21% of active OTG users rank competency management as top 2 priority (after opportunities), based on open-ended.

17.8% for non-active OTG users (also top 2 after Opportunities)

 | From Deck. IB Survey, Jan 2025, n=1385

 |  |
Adoption

 | 9% relogin rate in 2025 amongst 91k onboarded officers

 | OTG Dashboard? (From Chris/XZ)

 |  |
Funnel CVR

 | % of drop-off rate after landing on competency analysis page in OTG

 |  |  |
 | check what other data avail

 |  |  |
Competency and gap Awareness

 | 64.6% agree/strongly agree they “know what competencies to upskill in”

 | IB Survey, Jan 2025, n=1385

 |  |
 | [TBC] % of officers or % of sessions who clicked into the competency section of OTG in the last 6 months

 |  |  |
 | [TBC] % of onboarded officers who have aded their self-assessed competency in OTG (lifetime)

 |  |  |
 | [OTG] % of officers who have added their self-assessed competency and logged in again

 |  |  |
 | [OTG] Average time spent on current competency gap page in OTG (baseline)

 |  |  |
Action clarity

 | 56.2% agree/strongly agree they know what action to take to close gaps

 | IB Survey, Jan 2025, n=1385

 |  |
 | % of STIPs applied in 2025 (baseline)

 | WD to provide

 |  |
 | % of “raise hand” clicks to STIPs in OTG

 |  |  |
 | % of “raise hand” clicks to GIGs in OTG

 |  |  |
 | % of apply clicks to Jobs in OTG

 |  |  |
 | % of apply clicks to Courses in OTG

 |  |  |
 | % of GIGS applied in 2025 (baseline)

 |  |  |
 | % of jobs applied in 2025 (baseline)

 |  |  |
 |  |  |  |
 |  |  |  |
4. [WIP] Market / Benchmark Scan

Purpose: Avoid reinventing the wheel. Find out how other teams or companies solves a similar problem. Designers can help with this.

How do others solve this?

Known best practices or patterns

What we should copy vs avoid

Table (optional):

Organisation

Approach

What works

What doesn’t

5. [TBD] Target User

Purpose: Clarify who is your target user.

Pilot target group

Must-have: Agencies with ready job profiles - by agency because it is operationally easier to get buy-in and control comms

Good to have: officers who show signals of being motivated to progress in their careers

The Uncertain and The Self-Driven (source: OTEP Update to Directors_5Feb2026 v1.0.pptx)

eg. relogged into OTG in the past 12 months

Note: We know that OTG role profiles are grouped by Job Families. Hence, whichever agency that we want to role with has a high likelihood of not having 100% officers with ready role profiles.

See section 8.1 on Data Audit for more details.

6. Hypothesis (Value Proposition)

Purpose: Make your belief explicit and testable.

If we provide officers with a clear, trustworthy view of their competency gaps

then officers will understand what specific competencies to develop and click through to explore opportunities and courses,

leading to increased officer engagement with career development tools (and eventually increase in completed development activities linked to identified gaps)

7. Success Metrics

Purpose: Define what “good” looks like. Must be quantifiable.

7.1 Outcome Metrics (North Star)

User outcome metric:

Increase in % of officers who complete opportunities or courses that are aligned to their competency gaps

Business/org outcome metric:

Improved Officer Satisfaction Score

Officers report increased clarity on what competencies to develop (either in-web survey or post-pilot)

7.2 Input Metrics

Type

To track

Why?

Adoption

 | % of officers who access the “competency gap analysis” tab feature

 | % of unique officers who are interested

 |
 | % of sessions where users visited the comp gap analysis page

 | How often do officers visit the page

 |
Engagement

 | Average time spent on this page

 | How interested are they on the content of this page

 |
 | Median time spent on this page

 |  |
 | Number of clicks …

 |  |
Funnel CVR

 | % of drop-off rate after landing on competency analysis page in OTG

 | How interesting/ valuable is the info on this page?

 |
 | % of officers and sessions who view “competency gap analysis” tab and click through to “opportunities” within the same session

 | To what extent goes viewing gap analysis prompt action?

 |
 | % of sessions of the abov

 |  |
 | % of officers and sessions who view “competency gap analysis” tab and click through to “courses” within the same session

 |  |
 | % of sessions of the above

 |  |
7.3 Guardrail Metrics (Events that will lead to rollback or pause)

Purpose: Early warning signals. What tells us this is breaking or harming users?

Drop-off rate exceeds 60% - % of officers who view gap analysis page and immediately exit

Error rates - Competency information (self-assessed, current level, next level) is inaccurate

In-web - “Report an error in your competency data” + selection to select which comp. is wrong.

If more than 50% reports an error, pause and audit data quality

Data freshness - TBC depends on data architecture

Latency / availability - TBC depends on data architecture

Page load time -

8. Scope (Stories + Success Criteria)

Story

Acceptance Criteria

Instrumentation

Notes to Designer

Notes to Tech/Others

As an officer, I can compare my current competencies against the competencies in the next job grade in order to know whats expected of me in order to get a promotion

 | Current Functional Competencies

Users understand which are their current functional competencies

the functional competencies be an exact match with those under “Job role profile” and “Additional competencies” in the profile page

Users will not see the Core competencies under “Job role profile” (in the profile page) anywhere in the My Dev page as they are omitted entirely for comparison

Next Grade Competencies

Users can see the competencies associated to their next job grade

Suggested title and subtitle: “Your Next Progression”, “Based on your current role”

There can be multiple job role options when moving up one job grade (see “notes to tech/others” for information”)

Where only one job role exists at the next grade, those competencies are displayed automatically and no options are needed

Where two or more job role options exist at the next grade, no competencies are shown by default. The user must first select a role before any competencies are displayed. Only one role's competencies can be displayed at a time.

Comparison

Users can easily compare between these two set of competencies to identify which competency they already possess vs which they need developing

No proficiency level comparison is required

 |  | Suggested title - “My Next Progression”

Designer to suggest - Should the role selector persist the user’s last selection on return visits, or reset to blank?

 | Exclude OTG role profile bank

Next level: using job grade minus 1 eg. JR10 > JR9. JR 11A>JR11

filter using 1) offcier's agency, and then 2) Concatenate of: Jobfamily/function/nextgrade

Can encounter multiple similar concatenates - TBD how many roles to show to user to select. Chris will provide the number of duplicates against the entire pilot population

Use the designation under "Job" in HRPS and "Job profile name" in Cumulus - WD to check if there's a full designation field in HRPS 

 |
As an officer, I can compare my current competencies against the competencies of a target job role in order to know what is expected of me should I want to change roles

 | Default state

Users see an empty target role page until the user selects a role

Searching and selecting a target role

Users can find a role by typing keywords into the search bar and browse the full list by scrolling, or use filters. The user can use any combination of this to search for a desired role

Users can use filters and keyword search simultaneously. eg. users can type a keyword and apply one or more filters at the same time to narrow results

Filters are: 1) Agency 2) Job family 3) Job function 4) Grade

Users will see a blank state message if their keyword and filters do not return any matching roles

Restricted roles (TBC)

Users should not be able to see roles that are job grade MX7 and above ( eg. MX7, MX6, MX5 and so forth) in the drop-down list when selecting target roles (these are roles above director level and will be hidden)

Users can see a brief explanation in the search area. eg “Roles above director level (MX8 and above) are not available for comparison.”

Comparison

Users can clearly see which competencies are tied to the selected role

Users can easily compare competencies between their current competencies and the target job role’s in order to identify those which they already possess and which they need to developing

No proficiency level comparison is required

 |  | Designer to suggest: whether filter options should be a drop-down, where only one selection per filter can be applied at any point of time. eg. Filter: Grade. Filter options: JR10, JR 11, JR 12. User can only select one option like JR 10, instead of multiple.

Designer to suggest - Should the role selector persist the user’s last selection on return visits, or reset to blank?

 | exclude OTG Role profile bank

allow filter 1) agency 2) job fam 3) job func 4) grade

Naming of the job - add "Agency" at the back

Search: "starts with" and then "contains" 

Exclude the "next grade" roles in this list

Exclude grades that are MX7 and above ie MX 7, MX6 etc 

 |
As an officer, I want to be able to see the competency definition, so I understand what it represents and how to apply it

 | Users are able to see the competency description

 |  |  |  |
As an officer, I can see some recommended courses related to the missing competencies so I can take immediate steps to explore how to improve

 | Users can see a swimlane of recommended courses

Users can click to the respective course tile to view course details

 |  |  | Course recommendation is based on rule-based matching between 1) user’s missing competencies and 2) courses tagged to those competencies

Courses cannot be duplicated/repeated

If there are no courses tagged to that set of competencies, then we default to proposing courses that matches the next role’s competencies

 |
As an officer with no role profile, I have the option of selecting a target role to see areas of development

 | User will not see “next grade” comparison

User will see the search bar to select a target role

See a generic swimlane  - “Explore popular courses”

 |  |  | “Explore popular courses” - filter by “AI”

 |
IMPT: Need attribution from OTEP on LEARN, to track traffic into LEARN. Can we track all the way down to apply and enrol?

9. [WIP] Go-To-Market Plan

Purpose: Shipping ≠ adoption. Think of what you need to do to drive adoption and scale.

Target launch group: Which agency/persona first?

Comms plan:

Training / enablement:

Change management:

Support model:

Phases:

Pilot: When

Scale: When

Steady state: When

10. Risks, Assumptions & Mitigations

Purpose: Think ahead.

Risk/Assumption

Type (Tech / Ops / Policy / Adoption)

Likelihood

Impact

Mitigation

Data in OTG Central Role Profile bank is updated and usable

 | Data

 | Low

 | Medium

 |  |
No API to pull self-assessed competencies from OTG

 | Tech

 | High

 | Low

 | Data export/import process. Need to determine refresh cadence

 |
Pilot officers get confused seeing self-assessed data on both OTG and OTEP

 | Tech/ Policy

 | High

 | Critical

 | Block competency profiles from OTG or

Ensure that GTM comms are very clear on platform usage between OTG and OTEP

 |
If review with pilot agencies on suitability and buy-in does not go well

 | Adoption

 | Medium

 | Critical

 | Discuss back-up options with WD on pilot agencies

 |
Gap analysis is accurate but officers don’t find it meaningful

 | Product Market fit

 |  |  |  |
Transition Considerations

Pilot group gets confused seeing self-assessed data on OTG and OTEP

Block their competency profiles from OTG?

Barry: we are only going to do a one time-pull - TBC, the data will differ over time

OTEP will not yet have editing abilities for officers to mark their self-assessed, only OTG can do that

11. Dependencies & Assumptions

Systems depended on:

Teams needed:

Policy assumptions:

11.3 Data Audit (Data readiness)

Purpose: Understand which data documents contain what

Role Profiles

Ready and usable role profiles - OTG Central Role Profiles Bank - Jan 2026.xlsx

Contains 750+ complete role profiles that sits in OTG today (about 17 Job families + whatever agencies requested to include) that cuts across agencies

Each role profile comes with job family, function, role level (needs to be mapped to grade), Competency ID(equiv of OCC), competency name, skillsID (equiv of FCs), skills name and respective proficiency levels

7 Job families are created by Functional Leaders (who look across Job Families)

It doesn't seem like FLs consult the agencies when creating role profiles today, hence when agency HR joins OTG, sees our list of role profiles, sees that its not relevant/enough/useful to them, they go back to the 3 outcomes here

 create agency specific role profile

 ask officer click most relevant

ask officer click "not applicable"

WD also utilised Jumpstart to create about 10 Job Families for OTG based on external sources (eg. Careers@Gov)

Grade mapping - Proxy & Job Grade Mapping to F50 - V7.xlsx

Maps the “Role Level” in the OTG Central Role Profiles Bank to the MX levels

Used for understanding levelling

Competency Bank SST (TBD)

Source 1: OTG competency bank_master - OTG's master competency bank, about 938 codes. The competency codes in the role profiles matches those inside this bank

Source 2: WOG FC Bank, about 539 codes

The delta of 400+ codes can be assumed to be agency-level compentency codes (checked w Chris)

What is the relationship between both banks?

OTG competency bank = (1) WOG FC bank + (2) whatever competencies agencies choose to upload to OTG also

(2) could be also in HRPS/cumulus, or living only in OTG -> there could be a (3) where agency competencies that are NOT in OTG, but in HRPS/cumulus

currently, WD only has oversight of (1), but eventually should also have sight of (2) and (3), per CDGO's direction

What’s the long term plan?

[TBC] WD will likely continue growing the OTG profile bank using the comp inference engine when it’s up

Update from Chris: just heard that WD Upskilling team wants to 'rationalise' the agency-specific FCs which are in HRPS/Cumulus/OTG today with the WOG FCs, if there is overlap with WOG FC, ask the agencies if can rationalise/get them to justify why WOG FC not suitable for them

What’s the process for agencies to add comps into the OTG comp bank today? Is there any gatekeeping?

we will liaise with CEG on quarterly basis to upload the competencies that agencies want to upload

WD will ask agencies to check for duplication, and best effort check on our end also that their competencies do not overlap with WOG FC bank

12. Decision Tracker (If needed)

Purpose: Make it actionable.

Decision required from leadership:

If approved, next milestone:

Owner:

Review date:

Decision (required)

Owner

Date

Status

Whether or not to show Grade in Your Dev Page

 | WD

 | 25 Jun 2026

 | Decided on 29 Jun

 |
To whitelist JR 8-JE 6 or not

decision whether to include/ exclude JR-6-8 roles in Your Development. We just had a meeting with DS Jamie and she said to seek PS's guidance. She also asked to check if it is possible to ringfence the JR-6-8 roles to be visible only to Dir-level and above, as she feels it could be useful for them.

data sensitivity - we're checking with the colleagues from Leadership and Development cluster if there is any issue for officers to see these roles

value of showing - JR8 and higher roles are planned by the agencies (there are also workstreams that LD run to support succession planning for these roles), so it's not like a normal officer can aspire to work towards. DS thinks it is useful for JR8 officers to know the vertical and lateral options (hence the feasibility of the ringfencing option which we have asked your team to check), but she is not sure what PS feels about this

 | WD

 | 7 July 2026

 | PS approved to not

 |
There are situations where in the role profile bank, the job function does not match the job function in the master list (PSD Job Family Model).

 | WD

 | 7 Jul 2026

 | Decided that in these cases, store the job function as “null” in the database

 |
Exclude WOG role profiles from any role recommendations in Explore new Role and Based on Current role. So all roles should have an agency tagged to it.

 | WD

 | 17 Aug 2026

 |  |
Question (slack) is when we pull the 2 lateral and 2 horizontal, do they need to be random? Should it be best competency matches in respective areas then re-rank over the top 5?

Aligned with BO.

limits the breadth of roles that the officer sees (as competencies match does not change often and the roles shown will keep rotating amongst a small pool)

eg. Assuming there are 10 potentials roles, and if we were to select based on top 2 + 3 of the best % competency match, the remaining 5 will nv be recommended (assuming there are no ties)

making it dependent on competency match assumes that officers have updated competencies to get the latest updated matches

future improvement: recommendation engine

 |  | 18 Aug 2026

 | Aligned with BO

 |
Agency filter list cut down to 10 instead of select all because the URL hit max character that causes it to crash.

 |  |  |  |
13. Phase 2 must haves

Role profiles for the rest of the 10 job families - once competency inference engine