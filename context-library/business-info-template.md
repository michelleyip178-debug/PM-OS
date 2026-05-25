# Business Information

## Overview

**Team:** Pathfinder
**Programme:** CareerCompass (working name: OTEP — One Talent Engagement Platform)
**Context:** Internal government platform, not a commercial product
**Stage:** MVP build — currently Sprint 2

---

## Product

**Product Name:** CareerCompass (working name: OTEP)

**One-Line Description:**
A Whole-of-Government platform for public officers to discover and apply for career opportunities, manage their professional profile, and access learning resources.

**What it does:**
OTEP is an internal platform serving public officers across Singapore government agencies. It consolidates career mobility (STIPs, Gigs, Internal Jobs), officer profile management, competency and CV data, and learning course discovery into one place. The goal is to reduce friction in talent mobility across the WOG ecosystem.

**Key feature areas:**

| Feature | Owner | Status |
|---------|-------|--------|
| Opportunities Listing (STIPs, Gigs, Jobs) | Michelle | Active |
| FormSG Integration | Michelle | Scoping (R1 dependency) |
| WOG Authentication (WOG AD login) | Michelle | Building (MVP P0) |
| POCDEX (Public Officer Core Data Exchange) | Michelle | Active |
| Officer Profile | Imelda | Active |
| Learning Course Discovery | Imelda | Active |
| CV Upload & Inference | Imelda | Active |
| Competency Profile | Imelda | Active |
| My Development | Imelda | Active |

---

## Users

**Primary user:** Public officers from onboarded Singapore government agencies

**Use cases:**
- Browsing and applying for STIPs, Gigs, and Internal Jobs
- Logging in via WOG Active Directory credentials (SSO)
- Submitting applications through FormSG forms
- Managing officer profile, competency data, and CV
- Discovering learning and development courses

**User context:** Officers often work on shared government computers. Session security (full logout) is a hard requirement.

---

## Team Structure

**Product Owner:** Adrian Ang
**Michelle's manager:** Jace (reports to Adrian)
**Fellow PM:** Imelda

**Michelle's pod:**
- 1 Designer
- 1 Tech Lead (Pow Hwee)
- 2 Full Stack Engineers

**Business Stakeholders (decision-makers):** Xian Zhang, Jacky

---

## Development

**Methodology:** Agile sprints
**Current sprint:** Sprint 2
**Milestone structure:** MVP → R1

**Key open items:**
- FormSG pre-fill via URL params — unresolved; determines if US-P3 flow is MVP or R1
- WOG Auth PRD problem statement — unfilled, Michelle to complete

---

## Strategy

**Current focus:** Deliver a working MVP that enables officers to log in securely, browse opportunities, and submit applications via FormSG

**What OTEP is NOT doing (yet):**
- Commercial pricing or external users
- Analytics/reporting layer (deferred post-MVP)

---

**Last updated:** 2026-05-25
