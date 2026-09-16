# Meeting Notes: OTEP Team 2 Stand-up

**Date:** 2026-09-11  
**Time:** 11:00-11:15 SGT  
**Attendees:** Michelle Yip (PM, PSD), Thomas Huchede (Full Stack / Lead), Hao Eng, CAM Integration Developer, Engineering Squad  
**Meeting Type:** Daily Team Stand-up & Technical Sync  
**Initiative:** Sprint 9 Delivery, Search Refactor, Keycloak/CAM, R1 Design  

---

## Summary

This stand-up addressed four active technical workstreams: validating Keycloak SCIM endpoints for CAM integration, managing search refactoring trade-offs from UAT, planning Keycloak event logging for ABLR compliance, and preparing R1 design discussions. A significant architectural opportunity surfaced with the discovery of built-in SCIM endpoints in Keycloak, potentially eliminating custom application-side endpoints for user deactivation. The team aligned on pragmatic MVP search boundaries, deferring platform-wide search standardization while establishing that PostHog analytics will inform post-launch search upgrades.

---

## Decisions Made

1. **Defer platform-wide search standardization for MVP**
   - **Why:** Different platform modules handle distinct data structures and retrieval patterns; rebuilding search across the entire application is out of scope for the current sprint.
   - **Who decided:** Michelle Yip.
   - **Impact:** MVP search will remain basic and targeted. Post-launch search investments will be grounded in PostHog user behavioral data rather than speculative assumptions.

2. **Accept temporary trade-offs in search refactoring to unblock multi-field querying**
   - **Why:** The refactored query enables simultaneous matching across agency labels and opportunity titles (OTEP-1185), but temporarily drops typo tolerance.
   - **Who decided:** Thomas Huchede, supported by Michelle Yip.
   - **Impact:** Thomas will compile an explicit comparison matrix documenting old versus new search behaviors before changes merge.

3. **Prioritize Keycloak event logging as the top requirement for ABLR onboarding**
   - **Why:** Central security teams require user activity audit trails for compliance.
   - **Who decided:** Team consensus.
   - **Impact:** Engineering will hold a dedicated 14:00 session today to evaluate implementation paths and assess Keycloak database scaling limits.

4. **Confirm second R1 design jamming session for Monday**
   - **Why:** Design iterations between Michelle and Li Ting require synthesis before presenting to the wider squad.
   - **Who decided:** Michelle Yip.
   - **Impact:** Design progress will feed into the Monday 13:00 R1 review with Adrian Ang.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Validate Keycloak SCIM endpoints against CAM deactivation specifications | CAM Integration Dev | 2026-09-15 | 🔴 High | In Progress |
| Compile behavior comparison matrix between old and new search implementations | @Thomas Huchede | 2026-09-12 | 🔴 High | In Progress |
| Hold technical sync on Keycloak event logging and database capacity planning | @Thomas Huchede, Engineering | 2026-09-11 (14:00) | 🔴 High | Scheduled |
| Resolve high-priority vulnerability scan tickets raised by security scans | @Thomas Huchede | 2026-09-15 | 🔴 High | In Progress |
| Conduct follow-up R1 design jamming session before team review | @Michelle Yip, @Li Ting Kway | 2026-09-14 (Morning) | 🟡 Medium | Scheduled |
| Translate Victor's findings on confidential file blocking into product constraints | @Michelle Yip | 2026-09-18 | 🟡 Medium | Pending Victor's Input |

---

## Key Discussion Themes & Technical Progress

### 1. CAM-Keycloak SCIM Discovery
- **The Breakthrough:** The developer exploring CAM integration identified that Keycloak natively exposes standard SCIM endpoints for identity lifecycle actions, including disabling users.
- **Strategic Impact:** If these endpoints fulfill CAM requirements directly, Compass can bypass building custom application-side API endpoints entirely, reducing delivery risk and long-term maintenance overhead across PSD systems.
- **Next Step:** Confirm payload compatibility and authentication handshakes against the formal CAM specification.

### 2. Search Refactoring and the Single-Character Debate
- **Progress:** Thomas successfully implemented dual-querying across agency name and opportunity title simultaneously.
- **Trade-offs:** The new implementation lost fuzzy typo matching (e.g., "data" will not match "data engineer" if partial matching logic is bypassed).
- **Single-Character Tension:** UAT testers submitted single-character queries (e.g., searching for "A"), causing friction between engineering expectations (Google does not optimize for single letters) and user behavior. Michelle reinforced that users cannot be artificially restricted without clear business justification.
- **Long-Term Vision:** Thomas noted that resilient, platform-wide search requires a dedicated engine such as Elasticsearch. Both agreed this remains an explicit post-MVP enhancement.

### 3. ABLR Security and Event Logging
- **The Ask:** ABLR compliance mandates capturing user event logs from Keycloak and forwarding them to the central monitoring team.
- **Database Scale Concern:** Enabling detailed event logging will increase Keycloak database I/O and storage growth. Today's 14:00 technical session will evaluate whether current infrastructure can absorb the volume or requires database scaling.

### 4. Latent Compliance: Confidential Document Upload Controls
- **Context:** Michelle preemptively flagged upcoming security requirements around preventing uploads of documents classified above Restricted / Sensitive Normal (RSN).
- **Current Status:** Acknowledged as a requirement that was not captured in initial product specs. The team will await Victor Ong's research into whole-of-government file classification inspection tools before planning architectural changes.

---

## Technical & Operational Risks

- **TECHNICAL RISK: SCIM Endpoint Compatibility Gap.** While Keycloak's native SCIM support is promising, if CAM requires proprietary attributes or non-standard payloads, custom bridge endpoints will still be required late in the sprint.
- **TECHNICAL RISK: Keycloak DB Scalability Under Audit Load.** Enabling high-frequency event logging without automated log rotation or dedicated storage could degrade authentication latency during peak login periods.
- **UX RISK: Search Behavior Without Written Contract.** Surfacing edge-case behaviors (such as single-letter queries and lost typo tolerance) during UAT creates stakeholder friction. Search behavior rules (minimum characters, fuzzy matching rules, searched fields) must be documented in a concise technical specification.
- **COMPLIANCE RISK: Late-Stage DLP / File Classification.** If regulators mandate automated blocking of confidential documents before launch, retrofitting content scanning into existing file upload flows will disrupt current sprint allocations.

---

## Open Questions

- [ ] Do Keycloak SCIM endpoints satisfy CAM user lifecycle events without custom middleware? (Owner: CAM Integration Dev, By: 2026-09-15)
- [ ] What is the acceptable search latency threshold when querying title and agency concurrently? (Owner: @Thomas Huchede, By: 2026-09-12)
- [ ] What retention and archiving policy governs Keycloak user activity event logs? (Owner: Engineering Squad, By: 2026-09-11 14:00 sync)
- [ ] What automated tooling does GovTech endorse for inspecting document security markings during file upload? (Owner: @Victor Ong, By: 2026-09-16)

---

## Next Steps

**Immediate (Today):**
- Thomas and team to convene at 14:00 to finalize Keycloak event logging architecture and capacity estimates.
- Thomas to document differences between old and new search query behaviors.

**Short-term (Next Week):**
- Michelle and Li Ting to run the Monday morning design jamming session to finalize R1 opportunity flows before the 13:00 review with Adrian Ang.
- Complete CAM SCIM endpoint proof-of-concept.

---

## Appendix: Raw Meeting Transcript Debrief

<details>
<summary>Click to expand raw transcript/notes</summary>

1. Overall Context:
OTEP Team 2 stand-up touching on CAM-Keycloak integration feasibility, search refactor and UAT feedback, security & ABLR event logging, and design R1 / CFT upload compliance.

2. What Went Well:
- CAM Integration: Discovery that Keycloak exposes SCIM-standard endpoints that might cover disable user operations, avoiding new application-side endpoints.
- Search Refactor: Thomas enabled querying both agency label and title at the same time. Transparent about losing typo resistance. Agreed MVP search is barebones by design; PostHog analytics to guide post-MVP. Dedicated search engine (Elasticsearch) identified as long-term direction.
- Security & ABLR: Raised need to enable event logging in Keycloak for tracking user behavior and sending to central team. 14:00 meeting scheduled. Addressed Keycloak DB load and scalability.
- Design: R1 design progressing; jamming session scheduled for Monday. Preemptively signaled potential compliance on CFT upload and confidential files.

3. What Did Not Go Well / Tensions:
- One-letter search: 20-minute debate with Rama. Pushback from engineering that users should not expect single-letter results, while UAT users tested single characters. Lack of explicit search specification.
- Search standardization across platform: Divergent solutions across modules without central UX spec.
- Latent requirements: Confidential file upload surfacing late.

4. Risks:
- User & stakeholder expectation risk on search.
- Search fragmentation and technical debt.
- Assumption risk on SCIM endpoints.
- Keycloak DB capacity and retention.
- Confidential upload / DLP compliance retrofitting.

5. Decisions:
- Search standardization is not a current priority.
- Focus on making current search acceptable for MVP with comparison matrix.
- Rely on PostHog post-MVP.
- ABLR event logging is high priority.
- Next design session for R1 confirmed for Monday.

</details>
