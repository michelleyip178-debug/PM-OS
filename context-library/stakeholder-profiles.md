# Stakeholder Profiles

---

## Jamie Ang — Deputy Secretary, PSD

**Role:** Deputy Secretary, PSD

**Position in chain:** Above Adrian Ang — preliminary guidance and decisions need her sign-off before escalating further to PS (Permanent Secretary)

**Interaction frequency:** Ad hoc, via leadership concurrence threads/emails ahead of key meetings (e.g. SteerCo)

**Cares about:**
- Risk reduction in rollout and change-management approach (e.g. phased/deferred agency onboarding)
- Sensitive data handling and appropriate scoping (e.g. JR 6-8 role-visibility exclusions)
- Getting a clean, pre-aligned position before items go to PS or SteerCo

**How to work with Jamie Ang:**
- Bring clear, scoped recommendations for concurrence — not open-ended options; she confirmed the JR 8 call quickly once asked directly (2026-07-08)
- Treat her sign-off as the checkpoint before anything goes up to PS — don't skip her or escalate past her
- Written concurrence (email) is the working channel so far — no meeting cadence established yet

---

## Johnny Lim — GovTech, POCDEX API Engineering Owner

**Role:** GovTech engineer, newly assigned to operationalize the POCDEX API (ETL + infra) for Compass

**Background:** Prior experience in complex environments like MOE — familiar with TS, GCC, bespoke app dev, and procurement processes (per Pow Hwee's introduction, #compass-pocdex, 9 Jul 2026)

**Relationship:** Direct working relationship — per Pow Hwee, Michelle and Johnny should communicate directly on functional clarifications rather than routing through Pow Hwee or Daryll

**Cares about:** Not yet established — new working relationship as of 2026-07-09

**How to work with Johnny:**
- Go directly to him for POCDEX API functional questions (per Pow Hwee's explicit instruction, to cut coordination overhead)
- He owns ETL code development (SQL Server source → PostgreSQL API database) and infra physicalisation
- Relates to open item #31 (POCDEX go-live prep) and #56 (POCDEX sync cadence) — worth looping him into both threads since the ETL design likely depends on the sync-cadence answer

---

## Adrian Ang — Director of Product Management, Product Lead (CareerCompass)

**Role:** Director of Product Management; Product Lead for CareerCompass (the product OTEP delivers)

**Position in chain:** Jace reports to Adrian, Michelle reports to Jace. Adrian reports up to Jamie Ang (Deputy Secretary, PSD) — preliminary decisions get her concurrence before going further to PS.

**Interaction frequency:** Indirect (through Jace)

**Cares about:**
- Overall OTEP programme delivery
- WOG alignment and agency buy-in
- MVP milestones and sprint progress

**Notes:** Primary decision authority for the programme. Escalate through Jace unless Adrian is directly in the room.

---

## Jace — Direct Manager

**Role:** Michelle's direct manager

**Reports to:** Adrian Ang

**Interaction frequency:** Regular (direct report relationship)

**Cares about:**
- Michelle's progress and development as a PM apprentice
- Feature delivery across Michelle's areas (FormSG, WOG Auth, Opportunities, POCDEX)
- Blockers that need escalation to Adrian

**How to work with Jace:**
- Weekly quick update (standing rhythm) — keep it brief, flag blockers and risks
- Outside of that, ad-hoc as needed; don't over-schedule
- Flag anything urgent promptly rather than waiting for the weekly

---

## Xian Zhang (Guo) — Business Stakeholder

**Role:** Business Stakeholder / Decision-maker

**Seen in:** Weekly Design Review (Tuesdays, 14:00); also engages directly with pilot agencies (e.g. ESG discovery session, 2026-07-03) and brokers LDS's position on policy questions (e.g. JR role-visibility concurrence, 2026-07-08)

**Also referred to as:** "Xian Zhang Guo" in some meeting notes — confirmed 2026-07-08 to be the same person, not a naming collision

**Cares about:**
- Whether the product meets business and agency needs
- Design and flow decisions for OTEP features
- Practical usability for public officers
- Pilot-agency readiness and onboarding realities (e.g. surfaced ESG's competency-data gap)
- Brokering policy positions from other stakeholders (e.g. LDS on role visibility)

**How to work with Xian Zhang:**
- Come prepared with clear options and tradeoffs — they make decisions, not just give feedback
- The design review is Michelle's moment to present flow and surface considerations for a decision
- Written follow-ups after the review are valued (async-first audience)
- Also a channel into pilot-agency and policy-stakeholder (LDS) perspectives — loop them in early on rollout or sensitive-data questions

---

## Jacky — Business Stakeholder

**Role:** Business Stakeholder / Decision-maker

**Seen in:** Weekly Design Review (Tuesdays, 14:00)

**Cares about:** Same as Xian Zhang — business fit, officer UX, scope decisions

**How to work with Jacky:**
- Similar to Xian Zhang — both are in the room to decide, not just advise
- If you need a decision on a specific issue, surface it explicitly: "We need a call on X by end of review"
- **Demos:** Jacky and the working level attend *regular* demos — framed as working sessions covering only the previous sprint's output (two-tier demo agreement, 2026-06-02). Don't over-polish for this audience; owner presents their own part. Save the consolidated narrative for Mark/GK.

---

## Mark & GK — Senior Demo Audience

**Role:** Senior stakeholders above the working level. The high-stakes demo audience.

**Seen in:** Special consolidated demo sessions (not regular sprint demos).

**How to work with them (demo agreement, 2026-06-02):**
- For Mark/GK sessions, the PMs consolidate into **one coherent narrative** — cover each other's parts, unified storyline, smoother Q&A. High prep, reserved for this tier.
- ⚠️ **Profiles incomplete** — capture their specific priorities, communication style, and what "good" looks like to each before the next session. (Mark's role + demo needs was already an open prep item.)

---

## Imelda — Fellow PM

**Role:** Product Manager, Pathfinder (OTEP)

**What she owns:** Officer Profile, Learning Course Discovery, CV Upload & Inference, Competency Profile, My Development

**Relationship:** Peer — we cover different feature areas on the same programme

**How to work with Imelda:**
- Coordinate on cross-cutting concerns (shared infra, WOG Auth affects all features, POCDEX data flows)
- Align on sprint priorities when features have dependencies

---

## Pow Hwee — Tech Lead

**Role:** Tech Lead, Michelle's pod

**Seen in:** FormSG Integration PRD (listed as owner alongside Michelle)

**Cares about:**
- Technical feasibility and implementation approach
- Unresolved dependencies (e.g., FormSG pre-fill via URL params)
- Clear scope before sprint planning

**How to work with Pow Hwee:**
- Loop in early on scope decisions that have technical implications
- The FormSG pre-fill question is a live open item — keep aligned on resolution timeline

---

## Rama Moorthy — Delivery / Resource Lead

**Role:** Involved in resource planning and squad dependency management

**Seen in:** OTEP standups

**Relationship to Michelle:** Peer — coordinates on resourcing across the team

**Cares about:**
- Squad velocity and capacity
- Addressing dependency risks (single points of failure)
- Securing resources ahead of sprint needs

**How to work with Rama:**
- Flag resource risks early — he's actively managing them
- If you need something escalated to Barry Lim or other resourcing stakeholders, route through Rama
- Follow up async; he coordinates across multiple people

**Known actions (as of 2026-05-25):**
- Discussing additional resource beyond Fanxu with Barry Lim
- Confirming fullstack developer joining from Sprint 4
- Following up with Pow Hwee on full list of integration tasks

---

## Barry Lim — Resource / Capacity Decision-maker

**Role:** Involved in resourcing decisions for OTEP

**Seen in:** Referenced in standup (2026-05-25) as Rama's contact for additional headcount

**Relationship to Michelle:** Indirect — decisions flow through Rama

**Cares about:**
- Headcount allocation and team capacity
- Sprint velocity across squads

**How to work with Barry Lim:**
- Route through Rama for resource requests
- Come with specific ask and business justification (e.g. "Squad has 2-person dependency, October date at risk without additional fullstack from Sprint 4")

---

## Michelle Chen — Resource Counterpart (R1)

**Role:** Leads a team that may contribute design/delivery capacity to R1 (exact remit TBC)

**Seen in:** PM Weekly 2026-06-02 — Adrian to discuss R1 resourcing with her

**Relationship to Michelle:** Indirect so far — Adrian is the channel

**Cares about (inferred — confirm):**
- Her own team's capacity and commitments
- What she'd be signing her people up for

**How to work with Michelle Chen:**
- For now, route the R1 resource ask *through Adrian* — he owns that conversation
- When it comes direct: bring the specific, sized ask (the three R1 net-new builds, one FE) so she can judge what her side can realistically take
- ⚠️ **Profile is a stub** — capture her actual role, team, and what she optimises for once her R1 involvement firms up. Distinct from Barry Lim (also a resourcing contact, but via Rama for headcount).

---

## Communication Matrix

| Stakeholder | Frequency | Format | What to share |
|-------------|-----------|--------|---------------|
| Jace | Regular | Async + 1:1 | Progress, blockers, risks |
| Adrian Ang | Indirect (via Jace) | Through Jace | Escalations only |
| Xian Zhang | Weekly (Tue design review) | Meeting + written follow-up | Design decisions, flow considerations |
| Jacky | Weekly (Tue design review) | Meeting + written follow-up | Design decisions, scope calls |
| Imelda | As needed | Async | Cross-feature dependencies |
| Pow Hwee | Ongoing | Async + sprint planning | Scope, technical blockers |

---

**Last updated:** 2026-05-25
