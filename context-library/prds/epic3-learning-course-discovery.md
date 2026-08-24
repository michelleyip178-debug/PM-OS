Title: Epic 3: Learning and Course Discovery
Version: 21
Last updated: 2026-06-09T05:09:00.245Z
Source: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1967462253

Doc Created

23 Feb 2026

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

 | Link to Jira Epic (PM to input)

 |
Figma Link

 | Link to Figma file (Designer to input)

 |
Resource Directory

Jumpstart Recommendation Engine for DLE - Week 1 update which provides an overview

1. Background & Context

Purpose: Help the reader understand why this exists now.

Strategic Context

The government has a few strategic goals for it’s workforce:

Enable career discovery, growth and mobility for officers, anchored on competencies

Enable talent discovery and agility in talent deployment across WOG, anchored on competencies

Enable long-term workforce planning and development to for future-proofing

In order to enable career growth and mobility for officers, there needs to be a platform that facilitates easy discovery of relevant learning courses.

Current State

There are a few systems where officers can go look for courses

DLE’s LEARN platform - https://www.learn.gov.sg/Learning/Home

catalog of courses provided by CSC  (prov by Cherilynn)

LEARN offers over 56k learning opportunities.

CSC : 705 ( 388 DL/ DR || 317 classroom, events, milestone programme)

ALS : 1193 DL/DR

3rd Party : Harvard Business : 28,896;Linkedin Learning : 11,012; Udemy : 14,665 DL/DR

(coming soon) recommendation based on officer’s profile and learning interest

Cumulus/ Workday

catalog of courses provided by each agency?

HRPS/SAP

catalog of courses provided by each agency?

One Talent Gateway (the current talent development platform)

shows recommended courses based on competencies

This creates a fragmented experience for the officers in knowing which source to go to.

Additionally, there is no recommendation model to ease the discovery process to increase take-up rates. On this, Jumpstart team (govtech) has been working on a POC (overview here) to provide course recommendations based on the officer’s profile and learning interest. It plans to let officers discover courses based on a comparative model (courses taken by officer’s similar to your profile), and their indicated learning interest. This POC is aimed to launch in April 2026. OTEP also intends to ingest these recommendations into our MVP.

Moving forward, OTEP intends to work with Jumpstart to further develop the model to incorporate officer’s competencies and gaps as a data input to provide competency-based recommendations. This will be POC 2. Timeline and scope to be discussed.

In a service mapping workshop done by CSC when PSD (cumulus, HRPS and OTG) participated in, it was reported that officers want personalised recommendations and one of the pain points is not being able to compare programmes easily across different platforms.

Why now/ What changed?

With OTEP being a key enabler of competency driven growth, discovery of courses based on competency becomes a key lever. This is built on OTEP to make it easy for officers to do everything career and growth related in one platform.

With the Jumpstart POCs, it is a good time to incorporate smarter recommendations to facilitate discovery of courses

2. Problem Statement

Purpose: Clearly define the problem before jumping to solution.

Officers struggle to confidently choose and understand which learning courses are helpful for their growth because course information is fragmented and existing discovery is not personalised, creating high effort in manual search and comparison, resulting in officers feeling lost, disengaged and lower course take-up.

3. Data Analysis & Evidence

Purpose: Show this is not opinion-driven. What proof do we have that this is real and worth solving?

Type

Finding

Source

Why?

Discovery

 | Only 47.5% of officers agree that they “have sufficient information on the available development opportunities” on OTG

 | IB Survey 2025 n=1385

 | Show limited recommendations

 |
Engagement

 |  |  |  |
Conversion

 |  |  |  |
4. Market / Benchmark Scan

Purpose: Avoid reinventing the wheel. Find out how other teams or companies solves a similar problem. Designers can help with this.

How do others solve this?

Known best practices or patterns

What we should copy vs avoid

Table (optional):

Organisation

Approach

What works

What doesn’t

LinkedIn Learning

 |  | low friction scanning - hover expansion that saves tile cards so officers can see more at a glance and reduce scrolling, bite sized information

Many swimlanes based on different search filters such as “popular”, “because of skills you follow” provides the impression of variety and excitement

My Library section is your personal course management area where you can track your ongoing courses, set weekly goals, see the skills, see saved courses etc

Strong “professional relevance” cues because it’s tied to career skills and job context

 |  |
NA

 |  | Skip, save, like feedback look to start building learner’s preference profile

Social proof - eg.  X number of learners, ratings, review

“similar courses” within course detail page or “alternative at higher or lower grade”

 |  |
Coursera

 |  |  | Navigation can feel overhwlming

Many similar courses which makes people unclear which to shortlist/pick

 |
5. Target User

Purpose: Clarify who is your target user.

Officers who are

interested in acquiring new skills to develop themselves

interested in growing in their careers

interested in developing their competencies

6. Hypothesis (Value Proposition)

Purpose: Make your belief explicit and testable.

If we provide a guided personalised discovery on OTEP based on relevant parameters (eg. competency gaps, interest etc) , then officers will be able to quickly discover and confidently shortlist relevant courses, leading to an increase in course detail views and enrolment conversions.

7. Success Metrics

Purpose: Define what “good” looks like. Must be quantifiable.

7.1 Outcome Metrics (North Star)

User outcome metric: Increased course enrolment rate per officer

% of officers who registered for a course in the past 12 months

Business/org outcome metric: % of course enrolments attributed to OTEP

% of registration click-throughs from OTEP

7.2 Input Metrics

Type

To track

Why?

Awareness

 | % of officers who access the “courses” tab through the nav bar

 |  |
 

 | % of sessions where officers accessed the “courses” tab through the nav bar

 |  |
 | % of officers who accessed the courses page through the “competency gap analysis page”

 |  |
 | % of sessions where officers accessed the courses page through the “competency gap analysis page”

 |  |
Adoption

 | Average number of courses browsed per officer within X months

 |  |
 | Average number of courses saved per officer within X months

 |  |
 | % of officers who registered for a course in the past 12 months

 |  |
 | % of officers who saved a course in the past 12 months

 |  |
 | Recommended courses CTR

 |  |
 | Recommended courses save rate

 |  |
 | Average number of courses browsed per officer within X months

 |  |
 | Average number of courses saved per officer within X months

 |  |
7.3 Guardrail Metrics (Events that will lead to rollback or pause)

Purpose: Early warning signals. What tells us this is breaking or harming users?

Drop-off rates exceed XX

Error rates. Scholarship applicant’s profile is inaccurate.

Complaints / tickets

Data freshness

Latency / availability

8. Scope (Stories + Success Criteria)

Story

Success Criteria

Instrumentation

Notes for designer

Notes for Tech

As an officer with learning history on DLE, I can see the courses recommended to me as a swimlane/section based on comparative profiling and learning history so that I can discover relevant courses faster.

OTEP-82

 | Users can browse through a swimlane of recommended courses

Users can click into a selected course tile to see more course details

 |  | Maybe this could be a swimlane with a “view more”?

Consider arrows to click to slide through more options like netflix?

Header “Recommended for you”

 | Courses recommended are based on Jumpstart POC 1:

" Similar to you " Model : basing on  job profile (agency/department/job function/designation)and learninghistory (enrol/completion) [Using PMI model] 

 |
As an officer with competencies in my role profile, I can see the courses relevant to my competency gaps so I do not have to manually search and can easily see the courses that directly contribute to my growth.

 | Users can browse through a swimlane of courses that is recommended based on their missing competencies

Users can click on the selected course tile to see more course details

 |  | “Based on your development areas”

There might be case where there are no courses tagged to the officer’s set of competencies, at which there will be no swimlane

 | Competency gaps are based off users current competencies vs next grade job competencies

These competencies are then matched to the courses with competencies tagged

Courses are de-duplicated since a course can contain many competencies

No ranking is needed for now in terms of displaying which course to show first

 |
As an officer, I can see a summary of key course details in the course tile in order to get some preliminary info for discovery efficiency so I do not have to keep clicking in to get an overview of what this course provides while browsing

OTEP-323

 | Users can see these information on the course tile (taken from LEARN)

Name of course

Product Type

Course start date

Course duration

Course provider

Users can click into the course tile to see course details

 |  |  |  |
As an officer, I want to click into the desired course tile in order to expose more comprehensive information regarding the course in order to determine whether this course is for me and have the option to apply/start

OTEP-84

 | User will see these details

Course Title

Course overview

Course outline

Learning outcomes

Programme code

CTA button: “Learn more”

Product type

Duration

Start date

Domain and Competencies

omit proficiency level details

Course Provider

Clicking “apply” brings me to the LEARN platform and lands me on the specific course detail page

Edge cases

There might be cases where these fields are blank

Course outline

Learning outcomes

Duration

Start date

Domain competencies

 |  | Example of a course detail page

 | Pending the SFTP file from DLE on all the course details

Fields Mapping

Course title - Course_type_description

Course overview -  Extended_Course_Text

Course outline - Outline

learning outcomes - Learning_Outcomes

programme code course_type_abbreviation

CTA button - link to web_link

Product Type - ProductType

Duration - Duration_Hours

Start date - Course_Type_Start_Date

Domain - DomainName

Competencies -PSD_CompetencyID (need to map to competency name from competency bank)

Course provider - Provider

 |
As an officer, I can browse and search across the entire catalog in order to find a course that I am interested in to apply

OTEP-83

 | Call to action button on the Courses landing page to “Explore more courses”

Leads to a search experience page where they can filter by

Product Type

Domain

Competency

Provided by

User should be able to “clear all filters”

For “Domain” and “Competency” filters, add a search bar so the user can easily find what they are looking for without having to scroll through a long list

Default state is a blank search bar

Use auto-complete search so that the user sees suggestions based on course title as they start typing the keyword

Search results will show all courses whose course name, description and outline contain the keyword, ordered by course name, description and outline.

Filters should all be unchecked upon landing on the page

Courses will be sorted by alphabetical by default

 |  | Product type options:

Classroom  

Digital learning 

Digital learning (pay-per-use) 

Digital resources 

Events

Milestones

Course Provider:

Civil Service College (CSC)

Harvard Business publishing (HBR)

LinkedIn Learning

Udemy

 | Confirm if we receive the “new” attribute

Search auto-complete pulls from the name of the course, with logic “contain”.

 |
Officers with no data can still see and browse for courses

 | As an officer who has no learning history or competency gaps (because they have not self-assessed), I want to still be able to see and browse the course catalog despite not having any recommendations.

Cases are:

No role profile - they will not see competency based swimlane

No learning history - they will not see the Jumpstart recommendations

For people with neither, they will go straight to Search and Browse page

 |  |  |  |
DLE LEARN PLATFORM

DLE is working on an API for course catalog - due q3 2026

DLE is sending courses to HRPS and Cumuls via SFTP and not via API now

Tagging is not complete across all the courses in LEARN today. for 3rd party courses, they are tagged by the 3rd party as a one-time exercise and minimally has domain tagged. Because it is a one-time effort, it means that newer courses are not tagged

Other swimlanes on DLE today such as Popular and Top 10 cannot be called by as today as its a local logic inside DLE

SSO

NRIC or email instead of LearnerId might be easier although one outlier is that there are some people using FIN and might be problematic when they convert to citizen

POC1 Jumpstart

DLE is not applying any weights between CSC owned courses vs external courses, but might consider that in future

DLE does some filtering on their end after they call the results from POC1. eg .Accessibility due to being in different agencies, diff types of courses etc. Sy En suggested we call from DLE directly since they already apply those filters. In the event we call from JS directly, officers might encounter errors when clicking into courses that are not made available to them. Courses are made available to them by the HR of their agency.

from Mavis

Actually almost all agencies are on LEARN if we're talking about base subscription (meaning can access all digital learning resources, including those from external content providers like Udemy). All except MOE and DSTA, they only got a handful of licences i think

POC 1 recommendation should be applicable for all officers for classroom recommendation - even if they do not have learning history before, we will push with a generic back up recommendation. for DLDR related, they will need base subscription

Priority for MVP

Feature

Tech needs

Must-haveGreen

 | Course tile and course detail page, redirect to LEARN to apply or start

 |  |
Must-haveGreen

 | Search for courses and apply basic filters

 | course catalog, attributes

 |
Must-haveGreen

 | Recommended for you (POC1)

 |  |
good to haveYellow

 | Course recommender in gap-analysis page

 |  |
good to haveYellow

 | More filtered swimlanes to facilitate excitement during discovery. eg. those that found on LEARN such as Top10, Popular.

 |  |
Next RELEASERed

 | Learning history to display on profile page

 |  |
what course information can we pull, can we get a sample dataset? 

Programme Title, Overview, Outline, Product Type, Duration, Provider, Domain & Competency, Target Audience

Sample dataset should be no issue; let me get a copy for you from our team. 

do we need to mirror the design for the course tile and course detail page as LEARN?

Reference to the NOMs for the previous meetings (i.e. 6 Jan) for this.
[For Clearance] Project Steering Committee NOM for 6Jan26 (cleared Dirs & Asst CEO).docx

Cherilynn: as long as we surface up similar information and ensure a seamless/coherent ux, there is room to sharpen design  

some tiles do not have a cost/run date to it, what does this mean?

It means that they are not paid programmes i.e. they are "free". or class dates have not yet been published yet/no planned runs.

you can subsequently check if they have a "start learning" or if there are any actions the learner can take on the details page. 

additional context: LEARN is based on a base + agency subscription usage; if your agency is subscribed you are able to access "free" type programmes like DLDR (digital learning digital resource).

how does LEARN handle the courses that are outdated/ do not have planned run dates?

for outdated we do inform the users that the content is no longer available when they try to access/start learning - particularly for digital learning/resource. for classroom types the LD (learning designer/content creator) will have to write in description at the moment. - e.g. (Do note that CRIHCPV was the previous code for this programme)

no planned run dates - will not be shown and the LD typically has to key it in the details section of the prog.

we have a "notify me" feature that is planned for release - this is to allow the user to be informed if there is future run being planned and to let them know via notifications when there are changes/updates/release of runs.

Are there any free courses and how are they displayed? 

Yes. 

So DLDR type of programmes don't display any costs in the first place as they are already included in the LEARN subscription.

For "free" classroom type programmes we display as $0.00; if there are additional discounts we don't show the costs to the learners. 

what does "classroom" vs "milestone" vs "digital learning pay per use" mean?

these represent the different product types we have - you can take it as a type of programme and their modalities. 

e.g. classroom = physical f2f classes - may or may not have fees associated
e.g. milestone = typically consists of leadership type of programmes and mixture of modalities - can span a few months. typically by nomination (i.e. RO/agency nominated the learner to attend) and costs are not shown up front.

e.g. digital learning pay per use = e-learning type programmes that are not included in the subscription and requires a fee to access.

What is the watchlist feature that you are rolling out?

the watchlist function is equivalent to our "notify me" - but we have yet to push out this feature as mentioned above. Initial sensing given what you mention is that it can be a shared 'library' or 'collections' of some sort but we have not yet defined that experience in full if we were to integrate with OTEP.

9. Go-To-Market Plan

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

DLE has clean course metadata and links to each course

 | Tech

 |  | Necessary to link officers to the course detail page in LEARN

 |  |
 |  |  |  |  |
 |  |  |  |  |
11. Dependencies & Assumptions

Systems depended on:

Teams needed:

Policy assumptions:

Data availability assumptions:

12. Decision Tracker (If needed)

Purpose: Make it actionable.

Decision required from leadership:

If approved, next milestone:

Owner:

Review date:

13. Feature Backlog

Story

Success Criteria

Notes for designer

Notes for Tech

Officers can save or book mark courses

 | As an officer, I want to save or bookmark courses so that I can easily find them again when I am looking to sign up for a course and do not have to remember or start the search all over again

 | TBD requirement

 |  |
Officers can return to their saved courses

 | As an officer, I want to be able to easily find all my saved/bookmarked courses so that I can refresh my memory or enrol for the course

 | TBD requirement

 |  |
Officers can see a search bar to browse the course catalog

 | As an officer, I can see a search bar on the Courses page at all times so that I can easily look up a keyword to find a course

 | TBD requirement - omit for now

 |  |
Officers can see a filter bar to narrow down search results

 | As an officer, I can see available filters so that I can narrow down my search results and discover relevant courses faster

 | TBD requirement - omit for now

Reference: filters on LEARN https://www.learn.gov.sg/Learning/Browse

 |  |
based on clicks?

 |  |  |  |