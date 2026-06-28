# OTEP-427 Brief for Pow Hwee
*Michelle → Pow Hwee | 2026-06-22*

---

## TL;DR

Two asks: (1) sense-check whether the proposed ingestion rules serve the officer experience I'm designing for, (2) heads-up that Job Function is optional in ingestion and ringfencing logic will need to handle that when OTEP-127 is built. Need your input by **Wed 24 Jun**.

---

## What I want the officer to experience

When an officer opens the platform, every opportunity they see should be:

- **Actionable** -- they can read what it is, understand what's expected, and apply. No dead ends, no missing information that stops them from taking the next step.
- **Current** -- only open opportunities. Nothing that's already closed or expired.
- **Clear on type** -- they know whether they're looking at a Gig, STIP, Job, or SJR. Unlabelled or unrecognized opportunities shouldn't appear.
- **Complete enough to apply** -- if the FormSG link is broken or missing, there's no way to apply. That opportunity shouldn't show up.

If a record from OTG can't meet this bar, it should be excluded from the platform entirely -- not shown in a broken or incomplete state.

---

## What that means for ingestion

For OTEP-192, this translates to dropping any record that would result in a bad officer experience:

**Drop the record entirely if:**
- Opportunity type is unrecognized
- Closing date is in the past
- FormSG URL is missing, malformed, or leads to a non-existent form
- Any required field needed to understand or apply for the opportunity is missing or unresolvable

**Ingest with the field absent if:**
- Function field is missing
- StartDate is missing for Jobs and Secondments
- Job Function is missing (ingest the record, but log it -- see ringfencing note below)

---

## My asks

### 1. Feasibility check on the rules

Do these rules make sense technically? I'm not prescribing the implementation -- I want to know if the rules correctly serve the officer experience, and whether anything looks off from an engineering standpoint. Léo is assessing the implementation details; I need your read on whether the approach is sound.

---

### 2. Ringfencing criteria and what it means for ingestion

**How ingestion and ringfencing relate:** the OTG file contains both the opportunity details and the ringfencing criteria tied to each opportunity -- they come in together as one record. So when we ingest an opportunity, we're also ingesting whatever visibility rules OTG has defined for it.

**Agreed ringfencing criteria for MVP:**

| Scenario | Filter | Logic |
|---|---|---|
| Opportunity belongs to a specific agency | Location INCLUDE (host agency) | If Location is present in the record, apply it |
| Everything else (WOG-wide, cross-agency, STIPs, learning events) | No filter | Visible to all by default |

**Structural rule:** Whitelist model only -- define who CAN see an opportunity, not who can't. No EXCLUDE filters.

**Deferred to R1+:**
- Job Function + Function INCLUDE (for domain-specific roles e.g. HR, Policy & Planning, Data, ICT) -- 9 opps in the live data use this
- Multi-agency Location INCLUDE

**Why deferred:** Job Function is optional in ingestion. Records without it would have incomplete ringfencing criteria, making Job Function-based filtering unreliable for MVP. Better to get Location-based ringfencing right first.

**Implication for ingestion:** the ingestion job should log which records come in without Job Function so we have visibility into incomplete ringfencing metadata when R1+ is built.

No action needed from you now -- flagging so this is on your radar for OTEP-127.

---

## Timeline

Need your input by **Wed 24 Jun EOD** -- S5 planning is Thursday.
