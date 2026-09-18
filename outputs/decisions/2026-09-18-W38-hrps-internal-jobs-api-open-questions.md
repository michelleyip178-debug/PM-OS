## HRPS Internal Jobs API — Open Questions Before MVP Scope Decision

**Date:** 2026-09-18

**Source:** Teams chat with Lee Koon TEU, Adrian ANG, and others (HRPS/Careers@Gov job-posting channels)

**Status:** Feasibility unresolved — do not scope internal jobs into MVP until answered

---

### TL;DR

We confirmed HRPS has four job-posting channels (Careers@Gov, Internal Job Market, Internal Job, Hidden Jobs), but we still don't know if internal jobs are retrievable, filterable, or usable by OTG/Cumulus. The current API appears filtered to Careers@Gov only, there's no dedicated internal-jobs API, and eligibility/ringfencing metadata access is unconfirmed. Lee Koon TEU committed to checking API behavior and filtering feasibility. Until that lands, internal-job support in MVP is an open call, not a decision.

### What We Know

| Channel | Audience |
|---|---|
| Careers@Gov (C@G) | Public-facing jobs |
| Internal Job Market | Public servants across participating agencies |
| Internal Job | Agency-specific officers |
| Hidden Jobs | Invitation-only via direct URL |

- The API returns all jobs in principle, but a filter restricts output to C@G jobs only. Where that filter lives (HRPS, middleware, API layer, NCS integration layer) is unconfirmed.
- No dedicated API exists for internal or internal-market jobs today.
- Internal Job Market has unresolved technical issues, including stat board officers unable to log in because their WoG credentials aren't in the HRPS AD.
- Changing the filter likely requires a CR through NCS, which is a delivery dependency.

### The One Question to Push Hardest

**Can an external consuming system determine, with sufficient accuracy, whether a specific officer is eligible to view and apply for a specific Internal Job Market posting, using existing APIs and available data?**

If the answer is no, the problem isn't "show internal jobs", it's enforcing ringfencing and eligibility correctly. That's a materially bigger scope than removing an API filter, and it should drive the MVP-inclusion call.

### Questions for Lee Koon TEU

**API Scope & Data Availability**
1. Can you confirm definitively what the current API returns today: all jobs, only Careers@Gov jobs, or some other subset?
2. If filtered to C@G only, where is the filter implemented — HRPS, middleware, API layer, or NCS integration layer?
3. Is there any existing API endpoint (even unused by OTG/Cumulus today) that exposes Internal Job Market jobs, internal agency jobs, or hidden jobs?

**Ringfencing & Eligibility**
4. Where are eligibility/ringfencing rules stored for Internal Job Market jobs — agency, scheme, appointment group, other officer attributes?
5. Is there any mechanism, API or otherwise, for an external system to determine whether a specific officer is eligible to view/apply for a specific job?
6. If eligibility info is available, what fields can be exposed programmatically?

**Internal Job Market**
7. Is Internal Job Market a separate module from Careers@Gov, or the same repository with different visibility rules?
8. Are all Internal Job Market jobs stored within HRPS?
9. What proportion of agencies participate in Internal Job Market today?

**Access Issues**
10. What specifically are the unresolved technical issues for stat board officers?
11. Which agencies are impacted?
12. Are these known defects or design limitations?
13. Is there a roadmap to resolve them?

### Questions for NCS

**Existing API Capabilities**
1. Please provide the latest API specification for the job-posting APIs currently exposed from HRPS.
2. What filters are currently applied before returning job records?
3. Is the Careers@Gov-only filtering hardcoded, configurable, or tenant-specific?

**Retrieving Internal Jobs**
4. Can the existing API be configured to return Internal Job Market jobs, internal agency jobs, or hidden jobs?
5. If not, what enhancement would be required?
6. Is there already an unpublished/internal API that supports these use cases?

**Eligibility & Ringfencing**
7. Are ringfencing attributes currently stored in a form that can be exposed through APIs?
8. Can APIs return agency restrictions, officer eligibility criteria, application visibility rules, or public service access restrictions?
9. Are there privacy, security, or policy restrictions preventing these attributes from being exposed?

**Technical Change Assessment**
10. If OTG/Cumulus requires visibility of Internal Job Market jobs, is a CR required, what components need modification, and would it be configuration-only or code changes?
11. What are the key technical risks of exposing internal jobs through the existing API stack?
12. Would any downstream systems be affected if the current filter is removed?

**Recommended Solution**
13. If the objective is to surface internal public-service opportunities in OTG/Cumulus, what solution approach would NCS recommend — reuse existing API, new endpoint, new service layer, batch feed, or an alternative integration model?

### Risks If We Scope Before This Is Answered

| Risk | Why it matters |
|---|---|
| MVP scope built on wrong assumptions | We don't yet know if the API returns C@G-only, all jobs, or internal jobs |
| NCS dependency | Filter changes likely need a CR, which introduces timeline risk outside our control |
| Internal-job use case may not be technically viable | No confirmed API access to internal jobs, ringfencing metadata, or eligibility rules |
| User-access model unresolved | Stat board officer login issues suggest broader adoption risk if Internal Job Market content is surfaced |

### Next Step

Define our desired requirements before raising a CR to NCS, and decide whether MVP should support internal-job scenarios once Lee Koon TEU and NCS respond.
