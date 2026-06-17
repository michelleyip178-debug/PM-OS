---
date: 2026-06-17
week: W25
type: Analysis
relates_to: OTEP-500
---

# OTEP-500: PostHog User Properties — Review Notes

*Prepared: 2026-06-17 | Context: Imelda shared OTEP-500 (PostHog tracking epic) for Michelle's input on whether any user properties are missing.*

---

## What this ticket is capturing

User-level properties attached to each officer's PostHog identity. These persist across sessions and let you slice any event or funnel by officer attributes (agency, grade, scheme, profile completeness, etc.). Getting these right at MVP sets up every OKR dashboard and cohort analysis for the next 2 years.

---

## Review framework: "Can I answer my OKRs without this?"

| What you need to measure | User property required |
|--------------------------|----------------------|
| 50% of onboarded officers with updated competency profiles (OKR 1) | `has_competency_profile` (bool), `competency_profile_updated_at` |
| 1,850 officers applied via CareerCompass (OKR 2) | `agency`, `grade` — to segment applications by cohort |
| 80% of agencies using analytics dashboards (OKR 3) | `agency` (canonical name, not free text) |
| North Star: officer completed a development action | `last_development_action_at`, `development_actions_completed` |
| Pilot cohort tracking (6 agencies) | `agency` + `cohort` or `pilot_wave` |
| Active login rate (90/180 day) | `last_login_at` — or computed from events, but property helps |
| Satisfaction score ≥ 3.5/5 | `satisfaction_survey_score`, `satisfaction_survey_at` |

---

## Properties Imelda likely included (standard baseline)

- `agency` — which agency the officer belongs to
- `grade` / `scheme_of_service` — for segmentation
- `user_id` / `officer_id` — anonymised identifier
- `onboarded_at` — when they first logged in

---

## What's likely missing — flag these to Imelda

**1. Pilot cohort identifier**

Without a `cohort` or `pilot_wave` property, you can't isolate MVP baseline data from R1 data later. Once non-pilot officers start logging in, MVP baselines get polluted. This is the single most important one to add before launch.

**2. Competency profile status**

`has_competency_profile` (bool) and `profile_completeness_pct` (0–100). OKR 1 is 50% of officers with updated profiles — you can't measure this without it as a user property. Without it, you'd need to join PostHog data with POCDEX data externally every time you want the number.

**3. Profile source**

Was the competency profile imported from OTG, self-entered, or AI-extracted from a resume? Affects how you interpret profile quality data and whether the "updated" threshold is meaningful.

**4. Development action count / last action**

The North Star metric (completion of a development action) needs at least `development_actions_completed` as a user property, or you're doing expensive event-level aggregation for every dashboard query.

**5. Opportunity source preference**

Has the officer ever applied via OTG vs CareerCompass? Useful for the OKR 2 migration story — tracking the shift from FormSG/OTG to OTEP apply over time.

---

## Opportunity tracking — user-level aggregates + event-level detail

Both layers are needed: user-level aggregates for dashboard queries, event-level properties for funnel analysis.

### User-level opportunity properties (persist on officer identity)

| Property | Type | Why |
|----------|------|-----|
| `opportunities_viewed_count` | int | Engagement baseline — how many opportunities has this officer browsed |
| `opportunities_applied_count` | int | Direct OKR 2 input — 1,850 officers applied via CareerCompass |
| `last_opportunity_viewed_at` | timestamp | Active usage signal — feeds 90/180-day active login rate OKR |
| `last_opportunity_applied_at` | timestamp | North Star leading indicator |
| `opportunity_types_applied` | array | Which types (STIP, Gig, SJR, Job, C@G) the officer has applied for — tracks breadth of engagement |
| `first_opportunity_applied_at` | timestamp | Time-to-first-application — key activation metric for MVP baseline |

### Event-level opportunity properties (attached to every opportunity event)

These go on events like `opportunity_viewed`, `opportunity_applied`, `opportunity_detail_opened`, `opportunity_saved`:

| Property | Type | Why |
|----------|------|-----|
| `opportunity_id` | string | Joins back to source data |
| `opportunity_type` | enum: STIP / Gig / SJR / Job / C@G | Segment funnel by type — STIPs vs Gigs behave differently |
| `opportunity_source` | enum: OTG / CareersAtGov | Tracks migration from OTG to CareerCompass apply (OKR 2) |
| `opportunity_agency` | string | Which agency posted — pilot agency performance tracking |
| `is_ringfenced` | bool | Did ringfencing affect what this officer saw? Needed post-ringfencing launch |
| `match_source` | enum: search / filter / browse / recommendation | How the officer found this opportunity — informs discovery UX decisions |
| `application_method` | enum: FormSG / OTG-redirect / native (R1+) | Tracks migration to native apply over time |

### Why both layers matter

User-level aggregates answer "how many officers applied?" fast and cheaply — no aggregation needed in the dashboard. Event-level properties answer "which opportunity types convert best?" and "does search outperform browse?" — that requires funnel analysis across individual events. Without both, you're either doing expensive joins or missing the officer-level OKR view.

---

## Properties to question / push back on

**PII fields (name, NRIC, email)**
Should not be in PostHog user properties. Confirm Imelda is using anonymised IDs only and that data governance / IM8 review has signed off.

**Grade / scheme of service**
Useful for segmentation but check if raw grade counts as sensitive personal data under IM8. May be safer to store as aggregated bands (e.g. `seniority_band: junior / mid / senior`) rather than raw grade codes.

---

## Suggested Slack reply to Imelda

> Thanks Imelda! A few things I'd want to check are in there:
>
> 1. **Pilot cohort tag** — we'll need to isolate MVP pilot data from future waves, so a `cohort` or `pilot_wave` field would be useful.
> 2. **Competency profile status** — `has_competency_profile` and `profile_completeness_pct` so we can track OKR 1 directly from PostHog.
> 3. **Development action tracking** — even a simple `development_actions_completed` count as a user property would make the North Star metric much easier to query.
> 4. **Opportunity tracking** — two layers:
>    - User-level aggregates: `opportunities_viewed_count`, `opportunities_applied_count`, `last_opportunity_applied_at`, `first_opportunity_applied_at`, `opportunity_types_applied`
>    - Event-level properties on each opportunity event: `opportunity_type` (STIP/Gig/SJR/Job/C@G), `opportunity_source` (OTG vs C@G), `opportunity_agency`, `is_ringfenced`, `match_source` (how they found it), `application_method`
> 5. **PII check** — just want to confirm we're using anonymised officer IDs and not name/NRIC in PostHog properties.
>
> Happy to jump on a quick call to walk through the OKR-to-property mapping if that's helpful.

---

*Source: OTEP-500 (Jira), otep-roadmap-okrs-2627.md, Imelda's Slack message 2026-06-17*
