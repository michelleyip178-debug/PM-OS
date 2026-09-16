# OTEP New PM Onboarding Bank

Source: [Onboarding to OTEP](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1915487505/Onboarding+to+OTEP) (Confluence, v5, Imelda). Reorganized into a lightweight, sequenced bank for a new PM joining the OTEP team. The Confluence page stays the canonical link list; this doc is the reading path through it.

---

## TL;DR

OTEP (working name CareerCompass) is a Whole-of-Government platform for public officers to discover career opportunities, manage their profile, and access learning. It consolidates career mobility (STIPs, Gigs, Internal Jobs), competency/CV data, and course discovery. Currently in MVP build. Read the System Architecture deck and Product Implementation Approach first, then OTG (the live product OTEP builds on) to understand what already exists, then the competency bank docs since that's the data backbone. Everything else is reference.

---

## Week 1: Orient

Get the shape of the product and why it exists.

1. **[OTEP System Architecture](https://gccprod-my.sharepoint.com/:p:/r/personal/barry_lim_psd_gov_sg/_layouts/15/doc2.aspx?sourcedoc=%7BA54D3994-52B7-49DD-B119-62530825C4D6%7D&file=OTEP%20System%20Architecture.pptx)** (Barry) — start here for the technical shape of the system.
2. **[OTEP Product Implementation Approach V1](https://gccprod.sharepoint.com/:p:/r/sites/OneTalentGateway-OEPWorkstreams/_layouts/15/Doc.aspx?sourcedoc=%7B1EA6DBAC-5D88-41F9-8804-011154396AFC%7D&file=OTEP%20Product%20Implementation%20Approach%20V1.0.pptx)** (Dec 2025) — the buy-vs-build call and how OTEP compares to vendors like Eightfold and Techwolf. Explains why we're building this instead of buying it.
3. **[Internal Approval Authority (IAA) Paper](https://gccprod.sharepoint.com/:w:/r/sites/OneTalentGateway-OEPWorkstreams/_layouts/15/doc2.aspx?sourcedoc=%7BAE5248DD-A9D9-4031-A4A1-66C4BE18E246%7D&file=OTEP_IAA_2025_%20v0.2.docx)** — the funding case. Useful for understanding what leadership was promised.
4. **[OTEP prototype](https://gleaming-choux-ad6315.netlify.app/)** (Lovable, by Ashwin — password: type any keys) — click through the UI to see what's being aimed at.

## Week 1-2: Understand what OTEP builds on

OTEP isn't greenfield — it extends OTG, the platform already live.

5. **[OTG login page](https://sg.fuel50careerdrive.com/sso-login#/)** — log in and explore the live product.
6. **OTG Central Role Profile bank** — ~700 role profiles across 6-7 job families, already in OTG today.
7. **[OTG Competency bank_Master copy - Jan 2026.xlsx](https://gccprod-my.sharepoint.com/:x:/r/personal/imelda_mo_psd_gov_sg/Documents/Downloads/OTG%20Competency%20bank_Master%20copy%20-%20Jan%202026.xlsx)** — the raw competency data.

## Week 2: Competency model (the data backbone)

This is the core data structure most OTEP features sit on top of.

8. **[Tagging Policy_v3.pptx](https://gccprod-my.sharepoint.com/:p:/r/personal/imelda_mo_psd_gov_sg/Documents/Documents/Tagging%20Policy_v3.pptx)** — how competency tagging works, hierarchy between core and functional competencies. Read this before touching any competency-related feature.
9. **[WOG FC Bank](https://gccprod.sharepoint.com/:x:/s/PSD-OneTalentGateway-MST/IQCGzVDlkJK8R6zDU9qFRtz-AaiAA5hDuA5wN2TOh-xU35M)** (owned by Jamie's team, Upskilling/WD) — the base bank. OTG's bank = WOG FC Bank + (1) WOG Core Competencies + (2) Agency-specific Core/Functional Competencies.
10. **[About Competency Role Profiles](https://gccprod.sharepoint.com/sites/PSD-Intranet/SitePages/CDG-Roles.aspx)** — WOG context from CDGO.
11. **[Competency Inference Engine Use Cases](https://gccprod.sharepoint.com/:p:/r/sites/OneTalentGateway-OEPWorkstreams/_layouts/15/Doc.aspx?sourcedoc=%7BF6E458EE-A27E-4726-A9E9-A3AA2D1C8282%7D&file=Competency_inference_WD%20v0.1.pptx)** — how OTEP infers competencies from officer data, with a [whiteboard file](https://whiteboard.cloud.microsoft/me/whiteboards/p/c3BvOmh0dHBzOi8vZ2NjcHJvZC1teS5zaGFyZXBvaW50LmNvbS9wZXJzb25hbC9pbWVsZGFfbW9fcHNkX2dvdl9zZw%3D%3D/b!0gRmkbLRS0eiW7tjRd-FV42XwwfqY99PkInENjxSdReIpMoLnBYhQr2nuw4tJotD/01OKRRCXTHAYBOXGDPONCKIPGNQAE5GTDO?source=applauncher&auth_upn=Imelda_MO%40psd.gov.sg).

## As-needed: Active workstreams

Not required reading up front, check these when they become relevant to your work.

| Workstream | What it is | Link |
|---|---|---|
| ThoughtWorks delivery | Final delivery playbook from TW engagement (June 2025) | [Discovery Playbook](https://gccprod.sharepoint.com/:p:/r/sites/OneTalentGateway-OEPWorkstreams/Shared%20Documents/TW%20Collaboration/TW%20Deliverables%20-%20Review/27%20Jun%202025/v1.0%202025June27%20-%20Discovery%20Playbook.pptx) · [TW Collaboration folder](https://gccprod.sharepoint.com/:f:/r/sites/OneTalentGateway-OEPWorkstreams/Shared%20Documents/TW%20Collaboration?csf=1&web=1&e=JP7XPI) |
| Senior management updates | What leadership is tracking/expecting | [Deck](https://gccprod.sharepoint.com/:p:/r/sites/PSD-OneTalentGateway-MST/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7B9f1238b9-748a-4efe-b449-c9860410f32d%7D) |
| Jumpstart | POC recommendation track, run by Mindy | [Week 1 POC update deck](https://gccprod.sharepoint.com/:p:/r/sites/CSC-DLE-MST/_layouts/15/Doc.aspx?sourcedoc=%7BBBB0707E-AEEF-4C1B-829B-FBEE263D0E4F%7D&file=20260115%20-%20MVP_01%20-%20Recommendation%20-%20Weekly%20Update.pptx) |
| Cumulus | Separate workstream, folder only | [Main folder](https://gccprod.sharepoint.com/:f:/r/sites/OneTalentGateway-OEPWorkstreams/Shared%20Documents/OTEP%20Product%20Team/Cumulus?csf=1&web=1&e=KCEExj) |
| Data & surveys | Employee engagement + IB survey inputs | [PS Employee Engagement Survey 2025 (questions only)](https://gccprod-my.sharepoint.com/:w:/r/personal/imelda_mo_psd_gov_sg/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7B0f5e2f9f-1bcd-467b-88ae-48f20023af98%7D) · [Consolidated IB Survey Results_v2.xlsx (raw)](https://gccprod-my.sharepoint.com/:x:/r/personal/imelda_mo_psd_gov_sg/Documents/Downloads/Consolidated%20IB%20Survey%20Results_v2.xlsx) |

## Practical setup

- **File OTEP documents** in [PSD-OTEP-MST Teams channel](https://teams.microsoft.com/l/channel/19%3AtLEvkkF0nocF5OKfyHS_EhwWc8Oj5TVeSLTFsepLgAY1%40thread.tacv2/General?groupId=99c59939-9ccc-4022-bec9-7828d0db8709&tenantId=0b11c524-9a1c-4e1b-84cb-6336aefc2243) (from Jan 2026 onwards). Older docs (pre-Jan 2026) are in [One Talent Gateway OEP Workstream SharePoint](https://gccprod.sharepoint.com/sites/OneTalentGateway-OEPWorkstreams/Shared%20Documents/Forms/AllItems.aspx).
- **Device setup:** [SEED onboarding instructions](https://docs.developer.tech.gov.sg/docs/security-suite-for-engineering-endpoint-devices/onboard-device/public-officer?product=Security+Suite+for+Engineering+Endpoint+Devices+%28SEED%29) — do this on day 1, it can take time to provision.

## Reference (pull when relevant, not a read-through)

- [Govtech Career Framework 360 role-mapping profiles](https://360.tech.gov.sg/schemas) (Govtech only)
- [Understanding Public Officers' Perceptions & Motivations towards L&D](https://gccprod-my.sharepoint.com/:p:/r/personal/imelda_mo_psd_gov_sg/Documents/Downloads/L%26D%20of%20Public%20Officers%202.pptx) (GovTech research)
- [Workable API docs](https://workable.readme.io/reference/generate-an-access-token)

---

## Gaps and open questions (not in Imelda's page — flag with her)

- **No named contacts/RACI.** The page lists document owners (Barry, Ashwin, Imelda, Jamie, Mindy) but no role map or who-to-ask-for-what. A new PM won't know who owns which workstream day to day.
- **No glossary.** Terms like STIP, Gig, IAA, WOG FC, CDGO are used without definition. Worth a one-page glossary alongside this bank.
- **No "current state" pointer.** Everything here is background/history; nothing points a new joiner at the live backlog, current sprint, or what's shipping next. Pair this with a Jira/sprint-status pointer on day 1.
- **Two of the OTG bullets have inconsistent formatting** (one is a plain link, one is an inline comment marker with no link) — may indicate a draft-in-progress item worth checking with Imelda.
- **Prototype password is literally "type any keys"** — fine for now, but worth confirming this prototype is still the current reference before pointing a new PM at it.

---

*Compiled 2026-09-15. Source page last updated by Jace Tan (v5). Re-check the source page periodically since it's marked as a live document.*
