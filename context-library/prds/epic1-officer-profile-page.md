Title: Epic 1: Officer Profile Page
Version: 81
Last updated: 2026-08-04T01:35:49.007Z
Source: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1938130902

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

 | OTEP-67

 |
Figma Link

 |

 |
Others

 | Epic 2: My Development Page

 |
For the background and overview of the project, refer to Epic 2: My Development Page

Reference documents

Tranche Planning 2026 (CAA Mar 2026) - document to track agency-competencies update in OTG

Master List - PSD Job Family Model

2. Problem Statement and Rationale (Foundational)

Officers struggle to have a clear snapshot of their current competencies today because competency information is incomplete and unclear, resulting in officers not knowing their baseline.

This feature also establishes a consistent, trustworthy landing context for officers. It reduces product adoption risk by improving orientation and trust. Without a profile landing page, users may question whether they’re in the right account or whether data is accurate to them.

3. Data Analysis & Evidence

Purpose: Show this is not opinion-driven. What proof do we have that this is real and worth solving?

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

5. Target User

Purpose: Clarify who is your target user.

Same as Epic 1

6. Hypothesis (Value Proposition)

Purpose: Make your belief explicit and testable.

If office can see a single landing page with their basic profile information and their competencies, they will understand their competency baseline, trust that OTEP is about them and re-engage more because the platform feels accurate and relevant to them

7. Success Metrics

Purpose: Define what “good” looks like. Must be quantifiable.

7.1 Outcome Metrics (North Star - Not MVP)

User outcome metric:

% of officers/sessions who have updated their profile page (officer have engaged with the page voluntarily, either edit, update, add competencies, and click “save”)

Business/org outcome metric:

Improved Officer Satisfaction Score

7.2 Input Metrics

Adoption:

% of officers that logged in at least once, active officers within X days

% officers that click into profile page

% of officers who have added new competencies

% of officers who had self-assessed their proficiency levels for the system/role competencies

% of session/officers who have made at least one edit in My Competencies section in the last X months (tracked through “saves”)

% of officers who have at least X% of system/role competencies assessed

Funnel tracking

Tracking user journey from entry to exit

Track drop-off-points

Track what buttons are they clicking and which pages they are engaging with the most

Engagement:

Rate of return to edit competencies

7.3 Guardrail Metrics (Events that will lead to rollback or pause)

Purpose: Early warning signals. What tells us this is breaking or harming users?

Login failure rate - X% failed logins despite having proper user login credentials

Bounce rate

exceeds 60% - % of sessions that exit from profile without another action

Error rates

% of profile load errors

% of profiles with reported errors

In-web - “Report an error in your profile”

If more than 50% reports an error, pause and audit data quality

Data freshness - TBC depends on data architecture

Latency / availability - P95

Page load time -

8. Scope (Stories + Success Criteria)

Story

Acceptance Criteria

Instrumentation

Notes to Designer

Notes to Tech/Others

As an officer, I want to login using a secure authentication method so that I can access my account and know my information is secure.

OTEP-71

 | Only officers in ESG and PSD can log in to OTEP for MVP

Users see the WOGAD login page

Users login through WOGAD

If users are accessing OTEP through the main URL, users land on the profile page

If users are accessing another part of OTEP through a direct link (eg. bookmarked), users land on the target page

 | Login success

Login attempt

 |  | [TBC] Users must have “agency ID”

PSD - “13001308-A”

ESG - “S-10012020”

Singpass Unique Identifier

NRIC/ FIN

WOGAD - WOG "Active Directory"

there are 2 ways of integration 1) ADFS 2) Azure AD (Cloud)

ADFS is very seamless, whereas Azure sometimes there is a prompt (unclear why)

To check whether both methods can be accessed through internet (ADFS can only be from intranet?) - determines which option we choose

does not cover WOGAD universe eg mindef

Azure can only be accessed using COMET, and not GSIB

Imelda to check whether ESG is onboarded onto COMET

We will use Azure

Tech effort for Singpass/WOGAD is similar

what’s time-consuming is the submission/approval process for WOGAD (2-4weeks)

submission/approval process for singpass is shorter

Each method will take a full sprint

Discovery needed - Rama: Can DLE support WOGAD integration for redirection?

 |
As an officer, I want to directly access any OTEP page without having to login again if I have already authenticated for that browser session

 | If the user is trying to access the main URL before their session expires, SSO will be applied and they will be able to access the landing page without having to login again

If the user is trying to access another part of OTEP (eg. bookmarked) after having already authenticated during the session, then SSO will be applied and they will be brought to the target page seamlessly

 |  |  | https://importal.mof.gov.sg/portal/home/ict-ss/im8-reform/releases/20250917/system-security-plans/low-risk-cloud.html

12 hours session duration, 30 mins of inactivity

 |
As an officer, I know that the website’s browsing session will expire after a set period of inactivity and I am prompted to relogin

 | Browser will refresh and log the user out after 30 minutes of inactivity or 12 hours of session duration

User is aware that the browser session has expired

User can choose to login again

User will land on the landing page (profile page) upon relogin

 |  |  | there is additional effort to link them back to their original page instead of homepage

 |
As a new officer joining public service, I need to be able to login to OTEP smoothly after onboarding

OTEP-72

 | User will log in using WOGAD

When they login, they should see the default landing view of profile details and My Competency section.

 |  |  | When a new officer onboards, their profile will be created by the respective agency HR in either HRPS or Cumulus

This record will get pushed into POCDEX and into OTEP (instantaneously)

Account is created on OTEP

 |
As an officer who should have access to OTEP, I want to see clear instructions on what to do if I failed to login so I can troubleshoot.

OTEP-110

 | If user is part of pilot group and the authentication fails, they should be prompted to retry or troubleshoot

 | Login failed due to authentication error - ability to troubleshoot the reason for login fail

Retry attempts

 |  | I’m not sure if this is relevant: https://docs.developer.singpass.gov.sg/docs/technical-specifications/singpass-authentication-api/error-response

 |
As an officer who have no access or have a deactivated status, I want to be able to see a clear message telling me I do not have access so I am not left wondering or trying multiple times.

OTEP-111

 | These user groups should not be allowed to login to OTEP

Users who are not part of pilot

Users who have left the service/gone on long-leave etc and whose profile is considered inactive/deactivated in POCDEX

See a message “Oops, you do not seem to have access at the moment. Please contact your HR for more information.”

 | Login attempt failed due to access denied

 |  | [TBC] Backend check for either “agency name” or “agency” ID

 |
As an officer, I want to see a clear navigation bar so that I can clearly navigate across all the key pages of the website

OTEP-106

 | OTEP logo (WIP)

“Home” - clicks to Officer profile page

“Jobs & Opportunities” - clicks to Jobs landing page

“Learning & Courses” - clicks to courses landing page

“My Development” - clicks to My development landing page

Avatar

Letter will be based on the first letter of the first name of the officer - cannot be changed by the officer

Clicking on the avatar will bring a drop-down with a single option to “Log Out”

 | Home_logo

Nav_profile

Nav_Jobs

Nav_courses

Nav_Mydev

Avatar

Logout

 |  |  |
As an officer, I can view the standard footer….?

 |  |  |  | https://www.designsystem.tech.gov.sg/
Govtech slack thread with more info

Michelle Chen suggested using design components outside of Flagship

 |
Profile Page Stories

 |  |  |  |  |
As a logged in officer, I can view my profile information right after login so that I can confirm my identity and the role context being used

OTEP-74

 | Users can see these details:

Avatar icon with the initials of the first name

First name

Last name

Email

Employment title

Agency

 | Profile viewed

load successfully and load fail events?

 | what happens if officers sees a role wrong assigned to them?

 | See attached file for sample POCDEX data-

For designation, if HRPS, use “employment title”. If from cumulus, use “business title”

employmentID, source system and primary position are mandatory fields from POCDEX for us to consume

Personnelarea and personnelsubarea fields are used as secondary filters to further segment a subset of officers from an agency. WD needs to tell us which officers to exclude.

Profile information from POCDEX is pre-loaded for MVP. Consider dynamic loading in the future

 |
As a logged in officer, I can view My Competencies so I can track and build my competencies for future career growth

OTEP-75

 | Default View

Logged in users can clearly see the page titled as “My Competencies”

There are two distinct sections: "Functional Competencies" and "Core Competencies" under Job Role Competencies, followed by a Self-declared Competencies section below.

Job Role Competencies

Job Role competencies are competencies that are assigned to the officer’s current role. These competencies are sourced from the HR systems

Users' can see their competencies sorted into two categories - 1) Our Core Competencies and 2) Functional Competencies

A descriptor should read: “These competencies are pre-populated based on your current job role.”

Self-declared Competencies Display

Self-declared Competencies are competencies that are manually added by the user

This section only contains functional competencies

A descriptor should read: “These are self-declared competencies to reflect skills and experience beyond those linked to your current role."

Competency description

User must be able to read the description for each competency

Edge-case: No job role profile and no pre-existing self-declared competencies (OTG competencies)

Users with no job role profile will not see any role competencies. There are two scenarios:

For users with no role profiles and no OTG competencies

Both job role competencies and self-declared competencies sections will be empty

They are able to see a feedback mechanism (eg. a thumbs down or a prompt such as “Why are my competencies not showing?”) When I click on it, I should see a message along the lines of: "Something seems wrong, let us check and fix this for you."

For users with no role profile but with OTG competencies

They will only see competencies populated under the self-declared competencies section

The job role competencies section should be empty

These are previously self-added competencies from OTG (Story: OTEP-105 )

They are able to see a feedback mechanism (eg. a thumbs down or a prompt such as “Why are my competencies not showing?”) When I click on it, I should see a message along the lines of: "Something seems wrong, let us check and fix this for you."

 | Need to track edge case scenario

tooltip clicked_role

tooltip clicked_additional

 | Before deleting competency, design for confirmation pop-up/msg or warning copy

 | Mapping from POCDEX to HR systems

Identify officer using NRIC or email address

Obtain Job ID

Look up Job ID in the HR systems in order to get the expected competencies tagged

in HRPS: One officer can have multiple Job IDs. Each job ID can contain multiple job family and function, up to a max of 3

In Cumulus: One officer has one job ID tagged, but each job ID can contain multiple job family and function, unlimited

Mapping from POCDEX to OTG Role Profile Bank for competencies

Get officer job family, function and grade from POCDEX

String to form roleID. eg. “Academic OperationsTechnicalOperationsJR10”

Lookup roleID in OTG Profile bank file

under column J “skillsIds” - these are the competencies assigned to the role

Map skillsIds to competencies inside the WOG FC Bank to find the corresponding competency name and description

 |
As a logged-in officer who has previously used OTG before to add competencies, I want to see the same competencies reflect on OTEP so there is a seamless transition and I do not have to add them back again

OTEP-105

 | Users will see all competencies that were self-added previously on OTG reflect on OTEP without needing to manually re-add them.

Proficiency level is omitted for now

OTG competencies must be correctly categorised into the three types of competencies and displayed under either:

 job role competencies section (which contains Our Core Competencies and Functional competencies section)

or the self-declared competencies section

 | need to know what competencies were ported over from OTG

 |  | The data file from OTG can be found in the raw_users_skills excel (Otep2026)

it only has user_id and competency NAME, not ID

userID: they are either

(1) pocdex ID if their accounts were created through pocdex

(2) NRIC or email address if their accounts were created manually. Ignore officers that were created manually as they are not in POCDEX and are deprioritised for OTEP

Competency Name  - competencies can also contain CEG competencies (from their own bank) which we want to exclude completely from OTEP

This means to show and distinguish competencies in OTEP we will need to

find the officer in our database using POCDEX ID (always starts with P)

Get the roleID, use it to map to the role profile bank to attain the list of competency IDs assigned to the officer

these competency ID used to call the the competency names on another table

Map competency names from the raw_user_skills doc against the list of role profile competencies > assign under Role Competencies

any delta is then checked against the rest of the competency bank.

If match > “Additional Competencies”.

If no match > omit from OTEP, they are CEG competencies

Competency names in the Raw_users_skills report are unique

 |
As a logged in officer, I can search for a specific competency I have in mind to add to my profile so I can build a comprehensive list that represents my capabilities, even if its outside of my current role

OTEP-112

 | Users have 3 ways to add competencies:

Keyword search

“Upload CV” (using CIE)

“Describe work experience” (using CIE)

This story focuses on method 1 - Keyword search

Search and save competencies

Users will click the “+” icon at the right to trigger keyword search

Users will be able to type a word to look for a competency within the WOG competency bank (which includes all competencies from WOG to agency-specific comps)

As users type the word, suggestions matching the competency names will appear as a dropdown

Users can scroll to browse matching competencies

When the user clicks on a competency, it will be indicated as selected. User can proceed to search and select more competencies before saving

Users can add as many competencies as they want

Click Save to add selected competencies to the My Competency section

“No results” should be displayed when doing a keyword search that returns no results.

Displaying saved competencies

Competencies that are already in the My Competencies section may still be displayed in the search results, can be selected by the user and “saved”. He will only see one entry in his profile as it is “de-duplicated” in the backend

The competencies should be automatically categorised and displayed under the different sections

If the competency saved is a job role competency, then it should be parked under either Our Core Competencies or Functional Competencies respectively, depending on the type

If the competency added is not a job role competency, then it should be parked under “Self-declared Competencies” automatically

 | When user adds a competency:

competency_added

competency_id

competency_name

source

resume

search

text

type

role

additional

When user deletes a competency:

competency_removed

competency_id

competency_name

type

role

additional

User Properties:

competency_count

competency_name_additional

competency_name_role

Tracking confluence:

1.2 Profile

Track keywords searched, position of competency added etc? check design

role competencies deleted and then added back

search_comp_submitted

search_comp_no_result

 |  |  |
As an officer, I can use the inference tool to suggest competencies to add to my profile so that there is less friction and effort on my part to build my competency profile

 OTEP-205

 | This story focuses on the other 2 methods of inferring competencies

“Upload CV” - Inference through CV

Uploading a document

Users can upload a .docx document

Users can either drag and drop in the upload area or click “Upload CV” to select a system file.

Generating competencies

Clicking “Generate” will trigger the CIE and return a list of 8 most relevant competencies, sorted by relevance. There will be no confidence score indicated

The competencies that are recommended are only functional competencies and are only from the WOG FC bank and NOT from the entire competency bank (which includes core and agency-specific competencies)

These competencies will all be automatically pre-selected. If users click Save, all 8 will be added to their profile

Selecting and saving

Users can tap on the competencies to deselect it from the proposed list. If users click Save, these deselected competencies will not be added to their profile

For the competencies added to the profile, they will be automatically sorted into Job Role Competencies or Self-declared Competencies

Search for more competencies not from the list

If the users do not see a competency they expect from proposed inferred list, there should be a search function to allow them to manually search and add competencies

This search function should be within the same flow so it is convenient for the users without many additional clicks

Copy for the search function: “Can't find a competency you expect? Try searching to add it.”

Search experience will mirror keyword search under OTEP-112

Unaccepted file format and error handling

If file format for “Upload CV” is not readable, then the user will see an error message, “Unsupported file type, please upload a .docx file.”

For any other error handing for “Upload CV” apart from wrong file format, for eg if the doc is password protected or cannot be read for any other reason, then display the error message, “An error occurred in the upload, please try again.”

“Describe Work Experience” - Inference through blob of text

Users can type or paste a blob of text in the text box

Maximum character limit is XXX

Clicking “Generate” will trigger the CIE and return a list of 8 most relevant competencies. The rest of the experience will be the same as “Upload CV”

 |  | Experience:

Upon uploading the CV or using the text box, officers will see a list of top 8 inferred competencies (for now, do not add confidence score)

He will then be able to select which one he wants to add

Competencies are not auto-added

 | CIE requirements

File type: restrict to .docx

2mb file limit

CIE handles text extraction or OCR (processing centralised in CIE)

Note: CIE is only trained with the WOG FC bank. This means the competency recommendations is only limited to those found from this bank and not the entire competency bank which includes the agency-specific competency

 |
As an officer, I can delete selected competencies from my profile so I have the flexibility to build a competency profile that is relevant to me

OTEP-126

 | Deleting job role competencies

Users can click the “pen” icon at the side to edit the visibility of Core and Functional competencies

Users will see a fixed list of core and functional competencies assigned and unique to their role.

Users can select and deselect any competencies from the list to determine which to display or hide from their profile.

Users are not allowed to add new competencies that are outside of this list into the Core Competencies and Functional competencies sections.

Removing self-declared competencies

Users can click the “pen” icon at the side

Users will see their list of self-declared competencies here for editing

Users can deselect those competencies they wish to remove from their profile here

Click “Save” to have the changes reflect on their profile

Once removed, the competencies will be permanently removed from the list and the users will need to use one of the 3 methods to add them back (keyword search or inference) as they will not be able to select them from a fixed list like Job Role Competencies

 | competency_deleted_role

competency_deleted_additional

 |  |  |
As an officer, I want some guidance on how to interpret the information on this page so I am not confused and have to make sense on what’s on this page

OTEP-79

 | [TBC] waiting for design

 |  | Suggestion: “Keep your competency profile up to date.”
Review and add competencies that reflect your skills and experience to get personalised recommendations.”

 |  |
As an officer who just changed to a new role or got a promotion, I will still see my old role competencies on my profile, so that the system knows the lifetime competencies that I have

OTEP-77

 | The officer will see their competency profile automatically updated upon logging in and landing on this page

The new role’s competencies will be added under My Competencies, categorised and displayed under the core or functional competencies respectively, by type.

The outdated competencies which are no longer relevant to the current role will be moved to “Additional Competencies”.

 | what kind of tracking around here

 | prompt needed to alert officers of a new competency added

consider prompt to let officers know that the old competency has moved to a new section - set a one-time dismiss trigger

 | Profile changes will only be made if there is a new role update from the HR systems. ie. officers on a short-term GIG or temporary job posting will not have their profile updated with new competencies

 |
As an officer, I can provide feedback and suggestions through the WOGAA widget so I help to improve my own experience using OTEP

OTEP-78

 | Users can click on the WOGA feedback widget, complete it and submit their responses

 |  |  | Use WOGA widget for feedback - https://wogaa.sg/

Documentation - https://docs.wogaa.sg/

Register our website - https://docs.wogaa.sg/getting-started/register-website

 |
My Competencies section

“My Competencies” section (note: OCCs do not need to be included, just FCs)

current role’s competencies

additional competencies

Future Phases: My Competencies section will contain a life-time of the officers' competencies

all self-assessed competencies (whether it’s within or outside their role competencies)

all past role competencies

all current role competencies

all competencies achieved through courses and training and short-term opportunities

When the inference engine is ready, the engine can infer the officer’s working history, and OTEP will recommend you to add these to your list of competencies (officer review and approval needed).

Handling assessed competencies from OTG on OTEP

Scenario 1: If the officer does not have any self-assessed competencies, then only the current role’s competencies will be displayed, with the option to self-assess proficiency levels

Scenario 2: If the officer has some self-assessed comp (from OTG) and they are part of their current role’s comp,

then the current role’s comp will be displayed (ported from OTG), and proficiencies filled in for those that are already assessed

for those where proficiencies are not yet assessed. it should be clear that it is “unfilled” and not
”Level 0”.

Scenario 3: If the officer has some self-assessed comp but they are not part of their current role’s comp, then display both self-assessed comp and current role’s comp, with the option to fill in those that have not been assessed

Tech and Engineering Notes

Request to POCDEX

Sample POCDEX data (pwd: Otep2026)

So far everything in orange is must-need

For designation

if officer is from HRPS, use “employment title”

if from cumulus, use “business title”

For employmentID, source system and primary position, these are mandatory fields from POCDEX for us to consume

Personnelarea and personnelsubarea fields are used as secondary filters to further segment a subset of officers from an agency.

For MVP, we will not need this, just whether you want to store it anyway. Only for future scaling where WD needs to tell us which officers to exclude.

I am not sure if we need officercompetencies - need to find out what this is for

POCDEX APIs (for discussion)

POCDEX VS ODIN Information

Data Sources

Officer metadata stored in POCDEX - is ODIN2 needed?

OTG self-assessment integration - or manual data export/import

OTG Role Profile bank - for role profiles

WOG FC bank - for competencies

Find the final role profile and competency bank here - https://gccprod.sharepoint.com/:f:/s/PSD-OTEP-MST/IgDSBktJCFBhT4eRmQ-YFqmVAd1tBhZSLoKl0-IgR2XUGsA?email=Christopher_WOO%40psd.gov.sg&e=FDVCDf

Notes

For MVP we will only cover officers in POCDEX - not MINDEF etc.

For subsequent phases: we want to try agency that is NOT on POCDEX, then we can start with CPF

Role Profile upload and updating

Role profiles sits in an excel today that has to be uploaded into OTEP

There might be updates to the role profiles

new role profiles added

new competencies added to the same role

when a new competency is added to a role profile, it should be added and updated on the officer’s profile page (front-end should alert the officer of a new competency to be assessed)

there should not be two of the same competency on the officer’s profile

version history with time stamp needs to be tracked

Competency and proficiency has to be stored as two separate fields in database

eg. One for Project Management, another one for level 2

Reason being, in future, HR should be able to search for officers with “project management” tagged to their profiles for recruitment.

In future, people viewing an officer’s page will not be able to differentiate the different types of competencies (eg. role vs others).

Preventing officer confusion by having self-assessed information appearing on both OTG and OTEP

Ask whether OTG can block the display of self-assessed information on OTG  - is this possible?

Comms needs to be very explicit and clear

OTG Processes today

Matching officer to job roles

when accounts are created today, OTG extracts the (1) Job Grade (2) Job Family (3) Job Function from the officer's record in POCDEX

the concatenate of these 3 are used to match against an existing role profile in OTG 

thought to share with you, in case ITC hasn't shared this around yet, the data dictionary for what fields in HRPS/Cumulus are mapped to POCDEX and mapped to OTG today -> from Hui Ting. Ref doc “POCDEX Data Dictionary_12Feb2025_OTGuse.xlsx”

If there is no 1-1 match i.e. the concatenate doesn't match (JR wrong, JFam wrong etc) then no role profile will be populated upon creation

Edge case for inaccurate matching

double hat officer with roles under 2 Job Fam -> maybe his "primary" one shd be a HR role, but he kena tag as a "Service Delivery" role or something and agency HR just never tag him correctly in their own HR systems

agency HR made a mistake in tagging officers in their HR system

Do officers know what his “right”/”wrong” competencies are?

it rly depends. i'd say 95%(?) of officers will just take their competencies shown there at face value. those more enthu officers will see like eh why i do HR but tag under service delivery then have some less relevant competencies, then go add those relevant ones for themselves.

also a function of how far along CDG the agency is, for e.g. some agencies may have already uploaded the list of competencies each officer shd have on their sharepoint so officer can refer to (like PSD), which will give them a reference to see if those listed in their profile are correct/wrong

i think our comms line today is that if officers see that the competencies are not relevant to them, they can remove it, and add the relevant ones on their own.

Competencies would only be “not relevant” to them due to the edge cases mentioned above

8.2 Key Out of Scope Features

Will not include double-hatting information.

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

Officer information for required fields are wrong or unavailable in POCDEX

 | Tech

 | Low

 | High

 | “report incorrect infor” to alert us to check with WD

 |
Exposing personal data fields beyond our policy/intended

 | Tech

 | Low

 | Critical

 | Whitelist fields, self-access only for MVP

 |
No integration with CAM for MVP (officer’s account will be suspended after 90 days of inactivity)

 | Tech

 | Low

 | Low

 | Relying on SGID and POCDEX to offboard officers for now. Will do proper integration to CAM to be more compliant in future releases

 |
Officers are unable to find a competency when he wants to add it to his profile

 | Ops

 | Medium

 | Medium

 | Short-term, not in MVP: To put in place a feedback mechanism to alert WD to consider adding to bank.

Long-term: build a UI dashboard to manage competencies directly in OTEP

 |
Competency ID from POCDEX does not match competency bank

 | Tech

 | Medium

 | Medium

 | in pocdex, we use jobid to extract competency codes. These codes are then mapped to the competency bank. If there is no match, then zero will be returned.

Mitigated as officer can still add self-declared competencies to use the function. Just that the credibility and impression of Compass is lost.

 |
jobID cannot be found in the role profile bank (taken from HR systems) to show recommended roles (drift from changes in the HR systems)

 | Tech

 | Unknown

 | Unknown

 | Patch as we go

 |
11. Dependencies & Assumptions

Systems depended on:

POCDEX

Teams needed:

NA

Policy assumptions:

NA

12. Decision Tracker (If needed)

Purpose: Make it actionable.

Decision (required)

Owner

Date

Status

Whether or not to suffix the competency names with agency names for duplicated competency, for the drop-down for “add competency”

reference: https://gccprod-my.sharepoint.com/:x:/g/personal/imelda_mo_psd_gov_sg/IQBSPQsZ8Y5_QKx20PCBc_mxAahTMHT2tm0MoKz3l2AlAQo

there are 1,707 records of competencies sharing the exact same competency names but have unique competency ID across the 3 data sources (HRPS, Cumulus, OTG)

of which 67% (1,139) belong to single agency (i.e., 1 agency having multiple competency ID for the same competency name). this mean just 568 are competencies which have the same competency name, different competency ID and are used by more than 1 agency

there are 238 records which are due to duplication of competencies between HRPS-OTG or Cumulus-OTG. We can help to de-duplicate these by dropping the OTG ones and follow the HRPS/Cumulus competencies - the OTG ones were created because agencies wanted to bring their agency-specific competencies in the HR systems to OTG during onboarding as there is not integration between the systems.

Overall, i don't think it makes sense to introduce a solution of adding agency acronyms at the end of each competency to solve the issue for 568 competencies out of 7,700+ (chat)

 | WD - Xian Zhang

 | 25 Jun 2026

1 Jul 2026

 | Decided not to append agency name at the back

Mark decided during the senior BO meeting to suffix the agency at the back, still sorted by competency name first and agency at the back. XZ confirmed here

Highlighted to XZ that there are duplicated competency names within WOG bank too

 |
Data import for Role profile bank and competency bank

First version on (teams chat)

Summary in email [Final data confirmation and accuracy for Compass MVP]

 | WD - Xian Zhang

 | 31 Jul 2026

 | Aligned over email

 |
Pulling competencies for officer’s profile

union HR agency and HR-FL WOG competencies (step 1 and step 2)

Known risks:

No clear source of truth of the officer’s competencies between HR system and Compass (no syncing of competencies back to HR systems yet)

Officer’s might get confused and question why the competencies they see on the HR system, is different from those on Compass. This might also affect ADP, career progression, performance, transfer conversations.

Officers loses confidence in Compass

Misaligned governance on what competencies should be tied to a job role since Compass is essentially overriding the agencies decisions

Incorrect competency data trends - using Compass data to analyse competency trends might be misaligned with HR’s polices and interpretation since they have not been approved or adopted by the agency

Misleading interpretation of Your development role-match percentages - inaccurate representation of number of competencies matched/ to develop for vertical and lateral roles

Future integration risks - other downstream systems may consume Compass data. Is Compass suppose to be the SST?

Additional version of officer competencies might mean harder future migration to a true SST.

 | WD Xian Zhang

 | 31 July

 | XZ confirmed he wants to union the competencies

 |
Logic for seconded and double-hatting

seconded - take whatever active position that POCDEX sends to us

double-hatting - pending discussion

There can be multiple permutations for capturing double-hatting,

there can be multiple job IDs tagged to a position

there can be one job ID tagged to one position, but an officer has multiple positions

POCDEX needs to tell us what their logic is for capturing double-hatting for us to incorporate into Compass

Source deck

 |  |  |  |
End state of unifying accounts using NRIC instead of separate accounts for multiple emails- fast follow after MVP

officer should only have one account

to cater for double-hatting and for officers moving across agencies

Frequency of fetching delta information from POCDEX 

determined by how to handle "xpired" competencies

to groom right after MVP

For MVP

profile only syncs upon login

one acc is created for each email

employment/position title for double-hat : pending pocdex

 | Xian Zhang and CHris

 | 30 july

 | 30 Jul - aligned with BOs

 |
Data import Source and Logic Confirmation

[RE: Final data confirmation and accuracy for Compass MVP]

We are preparing the final data import into Compass. As such, we’d like confirmation that these are the latest and final versions of the various data sources that will be used for Compass MVP, and that the data inside is accurate and updated.

 

Competency Bank -  MVP Career Compass Competency Bank - 27 Jul.xlsx

Role Profile Bank -  MVP Career Compass Role Profiles Bank - 27 Jul.xlsx

PSD Job Family to Function model Master list -  Master List - PSD Job Family Model.xlsx

Job grade mapping -  Proxy & Job Grade Mapping to F50 - V7.xlsx

Additionally, these are the logic that we’re using for the data import

For the importing from the Role Profiles bank

WOG Bank

If no agency, to continue importing (since WOG = no agency)

If either job family or function or grade is missing, to exclude these from being imported XZ: Currently, all the roles in the WOG bank (OTG list) have these 3 info. We’re OK if you want to build the exclusion logic as a safety net. Ok.

I also note from our separate discussion that competencies from these roles will not be populated in officers’ profiles in MVP, but will be included in the next round. We cleared the misunderstanding, for single-hatting officers, we will still unionize the competencies, first using jobID from HRPS and Cumulus role profile, then from the WOG bank

HRPS/Cumulus role profiles

If any value (Agency or Job Family or Job Function or Grade) is empty, import all profiles (one or all)

If any value (Agency, Job Family, Job Function or Grade) does not match the Master List, to exclude these from being imported

Question

If an entry has a job function code but no job family code, what do we do with it? XZ: These should still be imported as each job function is tagged to only 1 job family, and these roles will still be recommended based on the logic in Your Development where the system searches roles by job function first. We will use the master list to map the job function to populate the job family. Note that this means that the job family for these entries will not be from the role profile, but from the master list mapping.

There is no JR5 in the grade proxy mapping sheet, do we import profiles for JR5? XZ: Roles above JR8 (JR 7 and above) will be excluded in Your Development, and these users will not be able to find vertical/laterals roles (i.e., JR value will not be used backend). The JR is also not displayed anywhere in Compass. Since these JR values will not be used or shown, I think roles above JR8 (JR 7 and above) need not be imported. Could you help to flag out if there are any implications in case I miss out? We aligned to bring these role profiles into Compass still so that officers who are sitting in these roles can still have their profile and competencies populated. FYI, there are only 7 of such entries.

 

For the importing from Competency Bank

If any value (Agency or Job Family or Job Function) is empty, import the competency

If any value (Agency or Job Family or Job Function) does not match the Master List, to exclude these from being imported XZ: These competencies should still be imported regardless as the OCC are not tagged to any Job family nor function. We aligned, we will exclude these from being imported, empty fields are covered in point 1.

Follow-up convo on 3 August, Monday

Issue: There are 3k+ entries where job family code is 107 - 110 for Regulatory. This job family cannot be found in the Master list.

XZ has aligned to ignore these and not import (teams link)

 

 | Xian Zhang

 | 31 July

 | Confirmed via email titled

RE: Final data confirmation and accuracy for Compass MVP

 |
13. Phase 2 Feature Backlog

Competency attribution

allow officers to click on officer to see how the officer attained this competency eg. related course completed, related roles held.

How to handle people who are double-hatting

How to handle people who have resigned/ retirees

Under “Add Competencies”, already have a section showing “system generated role competencies” for easy-add

Edit profile name bcause its from the HR systems right now. eg. Jacky is not in the system, only his chinese name

Ability to search other officers through name or email

If we were to bring in endorsed comeptency, to allow officer to toggle visiblity to public, kakis etc. (currently on OTG)