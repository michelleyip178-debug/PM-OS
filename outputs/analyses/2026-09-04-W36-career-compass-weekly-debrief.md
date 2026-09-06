# Weekly Debrief — Outlook Emails & Teams Chats

**Period:** 28 Aug–4 Sep 2026

## Executive Summary

This week Career Compass moved from **"preparing for readiness" into actual release mobilisation**. UAT ownership became clearer, VAPT procurement and environment setup progressed, performance testing was concretised for **15–17 Sep**, and the team started building a proper go-live/readiness control set.

At the same time, the deeper product risk shifted toward **POCDEX lifecycle behaviour and Day-2 operations**: how employment changes are detected, how duplicates/multi-hatting are handled, what happens when source data is wrong, and who owns the resulting exceptions.

**Overall status**

- 🟢 Delivery mobilisation improving
- 🟠 POCDEX lifecycle / operational model still maturing
- 🔴 Launch buffer remains vulnerable to dependency slippage

---

## 1. UAT: Ownership Was Challenged — and Then Clarified

**Source channels / threads**
- Teams: **Compass Working Group**
- Teams: POCDEX / Compass downstream-sharing discussion
- Outlook: **Career Compass — POCDEX Data Requirements**

**Who mentioned what**
- **Huiting Lian** questioned who was testing the 21 personas and who would be accountable if issues surfaced after production.
- **Rama Moorthy** clarified that Adrian Lo was the vendor lead for Officer Profile-related scope.
- **Michelle Yip** clarified that Adrian Lo provides technical/API test evidence, while **Compass WD & ITC owns final validation and sign-off**.
- **Adrian Ang / Huiting Lian** later questioned whether the POCDEX API sign-off was the same as UAT sign-off and whether it needed to happen immediately.

Early in the week, Huiting challenged who was actually testing the **21 POCDEX personas** and, more importantly, who would be accountable if something later failed in production.

The clarification that emerged was useful:

**Vendor / Adrian Lo**
- Provides technical/API integration testing and evidence.

**Compass WD + ITC**
- Owns final validation and sign-off.

This is a meaningful governance improvement.

### Remaining issue

There is still ambiguity about what constitutes a **POCDEX API "sign-off."**

The team should distinguish explicitly:

**technical API acceptance ≠ integration UAT ≠ business acceptance ≠ production readiness**

---

## 2. VAPT: Procurement Moved Off the Critical Path

**Source channels / threads**
- Outlook: **CareerCompass UAT/VAPT — Daily Update**
- Outlook: **Career Compass VAPT Schedule**
- Teams: **Compass Working Group**

**Who mentioned what**
- **Adrian Lo** reported VAPT environment readiness, including CIE VM creation and NCS access preparation.
- **Adrian Ang** confirmed that NCS had been notified after the VAPT POs were issued, and asked for the required accounts, roles and permissions to be made ready.
- **Jace Tan** confirmed issuance of the CIE and POCDEX API VAPT POs.

One of the biggest wins this week is that the POs were issued and NCS was notified.

The next action became operational: prepare the necessary **accounts, permissions, roles and access** so NCS can actually start validating and scanning.

By 3 Sep, the **CIE VAPT VM had been created** and connection details were sent to NCS for validation.

### Risk evolution

Earlier:

> "Will we get NCS engaged / PO issued?"

Now:

> "Will environment + access + roles + test accounts all be ready?"

That is healthier because the problem is becoming concrete and executable.

---

## 3. POCDEX VAPT Is Still the Schedule Dependency to Watch

**Source channels / threads**
- Teams: **Compass Working Group**
- Outlook: **Compass MVP readiness weekly update**
- Outlook: **Career Compass VAPT Schedule**

**Who mentioned what**
- **Adrian Ang** highlighted schedule risks in the combined Compass + POCDEX Gantt and asked for POCDEX VAPT to be brought forward by at least one week.
- **Huiting Lian** asked for the timeline to clearly distinguish environments and separate Compass-internal activities from cross-system activities requiring POCDEX support.
- **Pow Hwee Tan** said the POCDEX portion of the timeline had been updated and asked to review the final version before the Compass BO meeting.
- **Mark Ho** explicitly welcomed the earlier POCDEX VAPT timing and checked whether the PO had been issued.

The combined Compass + POCDEX Gantt exposed that POCDEX readiness activities were sitting uncomfortably close to launch.

The integrated schedule discussions also surfaced the need to distinguish:

- Compass internal activities
- POCDEX-supported activities
- Cross-system activities
- Which environment each activity uses

Huiting specifically asked for **Performance Testing, VAPT and Employment Change testing** to be mapped clearly against UAT / Production environments so concurrent dependencies can be seen.

The project is no longer one linear timeline.

```text
                  ┌─ Performance Test
Compass ──────────┼─ VAPT
                  ├─ Business UAT
                  └─ Go-live readiness
                       │
                       │
                  POCDEX dependencies
                  CIE dependencies
                  CSC dependencies
                  NCS availability
```

The integrated plan needs to show where those paths collide.

---

## 4. Performance Testing Became Much More Concrete

**Source channels / threads**
- Outlook: **Compass Performance Testing Plan (15–17 Sep 2026)**
- Outlook: related performance-testing reply thread

**Who mentioned what**
- **Rama Moorthy** initiated the 15–17 Sep performance-testing plan.
- **Rathika Ramalingam** explained the intended load-testing approach and autoscaling objectives.
- **Pow Hwee Tan** challenged whether the persona count and request-rate assumptions were realistic.
- **Sy En Lee** provided the production-capacity basis behind the 1,875 concurrent-user figure.
- **Yu Xuan Tay** advised on API keys, production/staging connectivity and making request behaviour more realistic.
- **Fanxu Wang** coordinated production-IP whitelisting and test-access setup.

Performance testing is planned for **15–17 September**.

The discussion this week moved beyond scheduling and into:

- realistic concurrency
- API request rates
- autoscaling behaviour
- production versus staging keys
- whitelisting
- representative user/persona volumes

One thread discussed a **1,875 concurrent-user capacity assumption** based on the production specification.

There was also discussion about reusing test personas and making request behaviour more realistic with delays rather than creating artificial request rates.

### Assessment

The conversation is moving from:

> "Can the system survive X users?"

toward:

> "What behaviour are we actually trying to validate?"

That makes the test much more meaningful.

---

## 5. The Most Strategically Important Discussion Was POCDEX Day-2 Behaviour

**Source channels / threads**
- Teams: **Compass Working Group**
- Teams: POCDEX / Compass data-handling discussion
- Outlook: **Career Compass — POCDEX Data Requirements**

**Who mentioned what**
- **Huiting Lian** argued that Compass needs to determine which employment changes are relevant because that logic can evolve over time.
- **Pow Hwee Tan** said the handling approach is ultimately a Compass call.
- **Adrian Ang** highlighted that Compass requirements for employment-change handling needed to be locked down in support of later Compass–POCDEX UAT.
- **Christopher Woo** raised the need for a workflow when the underlying POCDEX source data itself is wrong or ambiguous.

The employment-change conversation became much clearer this week.

The emerging direction is that **Compass should own the business logic for determining what an employment change means**, rather than expecting POCDEX to make Compass-specific decisions.

That aligns with the position that handling employee-profile changes is fundamentally a Compass requirement.

But the OTG investigation exposed why this is difficult.

---

## 6. OTG Gave Concrete Evidence of Operational Failure Modes Compass Must Avoid

**Source channels / threads**
- Teams meeting chat: **To understand how OTG handles different ID Types (NRIC/FIN/Malaysian ID) for Officer Profile**
- Teams: OTG / POCDEX operational discussion
- OTG Incident Tracker referenced in the meeting chat

**Who mentioned what**
- **Christopher Woo** described three recurring OTG identity/account collision scenarios: manual-account collision, stale old account not yet removed from POCDEX, and multi-hatting.
- **Christopher Woo** also said the stale-old-account scenario is seen most often and is the hardest to root-cause.
- **Alan Lim** pointed the team to the internal OTG Incident Tracker as a reference source.
- **Michelle Yip** framed these OTG findings as lessons that Compass should not repeat.

The OTG discussion identified **three account-collision scenarios**:

1. A POCDEX email collides with a manually created account.
2. The same POCDEX ID appears twice because an **old account has not been removed yet**.
3. The same POCDEX ID appears twice because the officer is **multi-hatting**.

Scenario #2 is reportedly the most common and the hardest to diagnose.

OTG may wait **1–2 biweekly POCDEX file transfers** to see whether the source data resolves itself before escalating.

That tells us something important.

### OTG-style operational pattern

```text
Bad / ambiguous source data
        │
OTG consumes it
        │
Unexpected officer state
        │
Wait for another feed
        │
Still wrong?
        │
Manual investigation
        │
Escalate
```

Christopher explicitly raised the need for **POCDEX to define a workflow for source-system issues**.

That should directly become a Compass operational requirement.

---

## 7. The "Exception Report" Idea Is Becoming Increasingly Important

**Source channels / threads**
- Teams: POCDEX / Compass operational discussion
- Teams thread: **"then just flag out into an exception report, den decide what to do within compass…"**
- Teams thread: **"we also need pocdex to define a workflow"**

**Who mentioned what**
- **Michelle Yip** proposed flagging mismatches into an exception report and deciding within Compass what action should follow.
- **Christopher Woo** said POCDEX should define a workflow for source-system issues.
- The discussion collectively points toward an exception-management model rather than silent failure or ad-hoc manual troubleshooting.

A useful operating model emerged: mismatches can be flagged into an **exception report**, with Compass then determining what action to take.

Rather than trying to make every messy HR scenario deterministic upfront:

```text
Normal event
   │
Automatically processed
   │
Success

Unexpected / conflicting event
   │
Exception detected
   │
Exception queue
   │
Compass issue?
POCDEX issue?
Business-rule ambiguity?
   │
Assigned owner + resolution
```

This is exactly how Compass can avoid OTG-style support becoming dependent on people manually noticing bad data.

---

## 8. Some UAT Cases Are Actually Blocked by Product Decisions, Not Engineering

**Source channels / threads**
- Teams chat: discussion on **UAT scenarios impacted by unresolved decisions**
- Teams: **Compass Working Group**
- Teams: POCDEX / Compass downstream-sharing discussion

**Who mentioned what**
- **Michelle Yip** explicitly surfaced that unresolved business decisions were blocking the definition of expected UAT outcomes.
- **Huiting Lian** challenged the adequacy and accountability of the 21-persona UAT.
- The resulting discussion exposed the need to separate defects from business-rule ambiguity, test-data issues and source-data problems.

Some UAT scenarios cannot have a definitive expected result because the **underlying business decision has not been made yet**.

This means the UAT tracker should stop treating everything unresolved as a "test issue."

Recommended categories:

| Type | Meaning |
|---|---|
| 🐞 Defect | System does not behave as agreed |
| ⚖ Business decision | Expected behaviour is not agreed yet |
| 🗂️ Source-data issue | POCDEX / upstream data is wrong |
| 🔌 Integration issue | Systems behave correctly individually but fail together |
| 🧪 Test-data issue | Scenario cannot be executed reliably |

This will make status reporting much more honest.

---

## 9. Go-Live Readiness Became Broader and More Mature

**Source channels / threads**
- Teams meeting chat: **Compass MVP readiness**
- Outlook: **Compass MVP readiness weekly update**
- Shared artefact: **01 - Compass Go-live Checklist v0.1 - MVP.xlsx**

**Who mentioned what**
- **Jace Tan** shared the Compass Go-live Checklist and added a prior risk-assessment template for reference.
- **Imelda Mo** shared the same readiness artefact in the meeting chat.
- **Michelle Yip** shared data-classification guidance and OTG guides/change-management references, and said OTG materials were being used as reference.
- **Adrian Ang** provided readiness updates to Mark, including status of UAT retesting and VAPT mobilisation.
- **Mark Ho** probed the remaining readiness gaps and asked for clarity on outstanding UAT and VAPT items.

By the end of the week, the team was actively using the **Compass Go-live Checklist v0.1**.

The readiness conversation also started pulling in:

- OTG operating guides
- OTG change-management / training references
- data-classification guidance
- risk-assessment templates
- ICT risk-management guidance

This is a positive development.

The project is starting to recognise:

> **Go-live ≠ application deployed.**

Go-live also means:

**security + risk + support + monitoring + data governance + change management + incident handling + operational ownership**

---

## 10. Emerging Future Product Surface: Career Coaching + Max

**Source channels / threads**
- Outlook: **Sharing of Career Coaching Booking App**
- Outlook: **RE: Sharing of Career Coaching Booking App**

**Who mentioned what**
- **Xian Zhang Guo** shared the Career Coaching booking app and suggested it could potentially be incorporated into Career Compass in future.
- **Adrian Ang** suggested a Compass-styled landing page leading into Max and raised the question of whether the team had access to the Max team.
- **Michelle Chen** was looped in on the design alignment.

There was early discussion about incorporating the **Career Coaching booking experience** into Career Compass.

A possible path is a Compass-styled landing experience that positions Career Coaching and then routes into **Max**, with an open question around access to the Max team.

Recommendation: treat this as **post-MVP opportunity discovery** unless there is a strong reason to pull it into R1.

---

## 11. OTG Continues to Demonstrate Vendor Operating-Model Risk

**Source channels / threads**
- Outlook: **Ticket #42733 - Renaming of MTI to METI on 1 Oct 2026**
- OTG / Fuel50 support correspondence

**Who mentioned what**
- **Fuel50 Support** said the team was already pre-booked around the week before the 1 Oct rename and proposed alternative implementation windows.
- **Alan Lim** was the OTG-side point of contact in the support thread.
- The exchange illustrates how routine reference-data changes can become dependent on vendor scheduling.

A seemingly simple operational change — **renaming MTI to METI effective 1 Oct** — depends on Fuel50 team availability.

This reinforces one of the strongest OTG lessons:

> Routine organisation / reference-data changes should not require a vendor deployment calendar.

For Compass, agency names, organisational relationships, eligibility or employment status should ideally come from **authoritative data + configuration**, not bespoke vendor intervention.

---

# Week-End Status

| Workstream | Week-end position |
|---|---|
| Core UAT | 🟢 Accountability clarified; retesting remains |
| 21 POCDEX personas | 🟡 Acceptance model clearer |
| POCDEX API sign-off | 🟠 Exact meaning / timing needs clarification |
| VAPT PO / NCS engagement | 🟢 Mobilised |
| CIE VAPT environment | 🟢 VM created / NCS validating |
| POCDEX VAPT | 🟠 Still an important dependency |
| Performance test | 🟢 15–17 Sep; methodology being refined |
| Employment lifecycle | 🟠 Business behaviour still being locked |
| Day-2 Ops | 🟠 Source-issue workflow / exception model needed |
| Go-live readiness | 🟢 Formal checklist underway |
| Operational / change readiness | 🟢 OTG lessons now being deliberately reused |

---

# Debrief

The project made meaningful progress this week.

But the **centre of gravity has shifted**.

A few weeks ago, the problem was:

> **"Can we get Compass built and integrated?"**

The problem now is increasingly:

> **"Can we operate Compass safely when real public-service employment data is messy?"**

That is the more important question.

The OTG investigation is showing exactly what happens when **identity lifecycle, source-data reconciliation, exceptions and ownership are not designed as first-class product capabilities**.

## Priorities for Next Week

### 1. Define the employment-change operating model

What happens for:

- transfer
- secondment
- multi-hat
- exit
- department change
- conflicting records

### 2. Define the exception model

Clarify:

- what Compass detects
- where the exception appears
- who owns it
- when POCDEX gets involved
- how resolution is tracked

### 3. Define operational acceptance before launch

Move beyond:

> "UAT passed."

Toward:

> **Can PSD tell when something is wrong and resolve it without engineering archaeology?**

That is the difference between **shipping an MVP** and **shipping something the team can actually operate**.
