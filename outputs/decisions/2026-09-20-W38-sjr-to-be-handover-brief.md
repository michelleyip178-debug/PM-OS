# SJR to-be: handover brief

Owner: Michelle, PM at Singapore's Public Service Division (PSD), owns the Opportunities pillar of OTEP / CareerCompass. Written 20 Sep 2026.

## Goal
Design the to-be for Structured Job Rotation (SJR), plus internal jobs and secondments. **As-is (confirmed with Adrian, 21 Sep):** SJRs sit solely in OTG today. OTG was purpose-built as SJR's main platform and point of entry, because HRPS/Cumulus currently can't handle the exercise cycle or the login-access friction — likely too costly to get their vendors to change. **To-be:** SJRs move to live in the HR systems (HRPS/Cumulus), and CareerCompass pulls them in as the single front door. Applications, CV upload, review and selection stay in the HR systems, because CareerCompass must not own an applicant tracking system. The rest of this brief (decisions, apply paths, timeline) describes that to-be state, not today's OTG-based reality.

CareerCompass replaces OTG, which switches off in March 2028. The 2028 SJR cycle starts that same month, and is the first cycle expected to run on the to-be HRPS/Cumulus model rather than OTG.

## Decisions made
- HRPS and Cumulus each hold their own agencies' SJRs. Cross-HR-system SJR movement is an edge case.
- Officer stays in CareerCompass to find roles, then applies in the role's HR system through one stable SSO link.
- Function cycle calendar is set by functional leaders, spans both HR systems, and lives in CareerCompass with a mismatch check against the HR feeds.
- Most officers exist in only one HR system (unless double-hatting), so each HR system must accept visiting applicants from the other.
- Three apply paths, chosen per HR system: A (HR system creates a visiting-applicant record), B (CareerCompass intake and relay, forward only, CV deleted after hand-off), C (2027 manual route with a named case owner).
- Four gating items: (1) SJR cycle with role tagging, (2) live role feed, (3) apply form with CV upload on normal login, (4) a route for Cumulus. Also needed by go-live: nominations recorded and OTG history loaded.
- CareerCompass squad is 3.5 full-stack developers.

## Timeline
2027 cycle stays on OTG. End-Mar 2027 written HR commitments. End-Jun 2027 test environment. Oct 2027 go/no-go (fallback: SJR-only OTG extension to Sep 2028). Jan-Feb 2028 dry run and OTG data freeze. Mar 2028 cutover. Mar-Sep 2028 stabilise and retire.
Taxonomy and calendar owner agreed by end-2026 is only a proposal.

## Sizing (first estimates, mine, not validated)
Core plan about 26 to 65 person-months (CareerCompass 7-17, HRPS 14-36, Cumulus minimal 1-3, cross-platform 3.5-9). With a full Cumulus build about 40 to 97. CareerCompass at 3.5 developers is about 2 to 5 calendar months if fully dedicated. HRPS and Cumulus lines are the weakest.

## Artefacts (all private until shared)
- BO doc: https://claude.ai/code/artifact/b1f5e888-c3e3-4b06-97be-5fc569b09fc6
- HR systems doc: https://claude.ai/code/artifact/9f243c68-0172-47ac-a2a7-e813ed66cdbf
- Hypotheses, metrics and impact x effort: https://claude.ai/code/artifact/343bdc4e-a5f5-4d19-b673-0c155749f9a2
- Sizing worksheet: https://claude.ai/code/artifact/9a967b3b-7936-40f3-8905-ed8d7bfdca4b
- Questions for the HR systems teams: https://claude.ai/code/artifact/fe9394fe-59a8-461a-9ee9-c22f50f736dc
- Deck (three audiences): https://claude.ai/artifact/Fq26tqyTQccpkdS437D2gS

Edit the Claude Docs through the Claude Docs connector. Never block-replace the "In short" list in the BO doc, because a comment is anchored to it.

## Open items
- HRPS and Cumulus have not answered anything yet. Whether each can receive an outside application (API, mailbox or file drop) decides if Path B is a real fallback.
- Sizing worksheet and question list are unsent.
- Deck has not been checked visually. Taxonomy dimension descriptions on the HR slide are my wording.
- Gig and STIP ownership, WD Dev Ops reporting needs, eligible pool source: unconfirmed.
- Secondments are still to confirm.

## Working style
Michelle prefers analogies, plain and human language over corporate tone, prioritisation decisions made for her rather than open options, living docs over one-off replies, and no over-explaining to technical peers. Keep hand-off messages short.
