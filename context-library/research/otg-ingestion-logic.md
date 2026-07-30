# OTG Ingestion Logic (Jobelle's process for the OTG → CareerCompass upload file)

**Source:** Amber Tong, shared 2026-07-29, documenting the logic Jobelle used to produce the OTG ingestion file.

**Status:** As-documented from a verbal/manual process — not yet verified against the actual pipeline code or schema. Open questions below need answers before this should be treated as the source of truth.

---

## Input Files

- **Main file:** `gigs_v2_report`
- **Secondary file:** `gig_audience_filters` (joined in at step 5)

---

## Step 1: Filter

Keep only rows where `Status == Open`.

---

## Step 2: Select and rename required columns (text trimmed)

| Source Column (gigs_v2_report) | Purpose / Output |
|---|---|
| GigID | Unique identifier. Used as `opportunity_id` and to join with `gig_audience_filters`. |
| GigName | Opportunity title. Used as `name` and to determine `opportunity_type`. |
| Description | Opportunity description. Also scanned for FormSG/for.sg links. |
| GigOwnersID | Renamed to `owner_id`. |
| GigOwnersName | Renamed to `owner_name`. |
| Talents | List of required competencies. Populates `filter_required_skills` (competency labels or mapped codes — see Step 3). |
| BusinessUnit | Populates `filter_business_unit`. |
| Function | Populates `filter_function`. |
| LocationName | Renamed to `host_organisation`. |
| Remote | Populates `filter_remote`. |
| TimeCommitment | Populates `filter_time_commitment`. |
| GigStart | Renamed to `start_date`. |
| GigEnd | Renamed to `end_date`. |
| TotalNumberOfApplicants | Renamed to `total_applicants`. |
| Status | Used for the Step 1 filter; retained as `status`. |
| DateCreated | Renamed to `date_created`. |
| DateModified | Renamed to `date_modified`. |

---

## Step 3: Competency conversion

Competency labels from `Talents` are either inserted directly, or compared against the competency masterlist and converted to competency codes.

**Open question:** the rule for choosing direct-insert vs. masterlist-conversion isn't documented — need to confirm with Jobelle whether this is a fixed criterion (e.g. "match masterlist → code, else pass through as label") or a manual judgment call made per row.

---

## Step 4: Opportunity type classification

Applied to the prefix (or opportunity name, where no prefix exists).

| Opportunity Type | Classification Rule |
|---|---|
| Gig | Prefix = GIG |
| IJP | Prefix = IJP |
| STIP | Prefix = STIP |
| ITM | Prefix = ITM |
| Innofest | Prefix contains INNOFEST |
| PSFG / Public Service for Good | Prefix = PSFG |
| SJR | Prefix contains SJR |
| Internal Rotation | Prefix contains INTERNAL ROTATION; OR contains INTERNAL JOB; OR = MDDI INTERNAL OPPORTUNITY; OR = ROTATION/SECONDMENT; OR starts with AGILEPSD |
| Job / Secondment | Prefix contains JOB; OR contains SECONDMENT; OR = OVERSEAS POSTING; OR = MDDI FAMILY OPPORTUNITY; OR starts with NLB PROJECT MARKETPLACE; OR (no prefix) opportunity name starts with "(JOB)" |
| Others | Prefix = OTHERS |
| Test / Invalid | Prefix = TEST |
| Other | Prefix exists but matches none of the above; OR (no prefix) opportunity name starts with "(" |
| Untagged | No prefix, and none of the above conditions apply |

**Open questions:**
- **Rule precedence / overlap:** "Internal Rotation" and "Job / Secondment" both match on "contains JOB"-style substrings. If a prefix could satisfy sub-rules from more than one category (e.g. "INTERNAL JOB SECONDMENT"), is there a defined precedence order, or are the categories assumed mutually exclusive in the actual data?
- **Four near-identical fallback buckets** (`Others`, `Other`, `Test / Invalid`, `Untagged`) — worth confirming these map cleanly and distinctly onto whatever the CareerCompass schema expects downstream, since the naming is easy to confuse.

---

## Step 5: Merge in audience filters (join on GigID / Gig ID)

| Source Column (gig_audience_filters) | Output Column | Transformation |
|---|---|---|
| Gig ID | — | Join key only; not included in final output. |
| Has Audience Filter | `ringfencing_active` | Renamed. |
| Business Unit Filter Type | `ringfencing_bu_filter_type` | Renamed. |
| Business Unit Names | `ringfencing_bu_values` | Renamed; comma-separated → semicolon-separated. |
| Function Filter Type | `ringfencing_function_filter_type` | Renamed. |
| Function Names | `ringfencing_function_values` | Renamed; comma-separated → semicolon-separated. |
| Location Filter Type | `ringfencing_location_filter_type` | Renamed. |
| Location Names | `ringfencing_location_values` | Renamed; comma-separated → semicolon-separated. |

**Open question:** no documented behavior for a `GigID` in `gigs_v2_report` with no matching row in `gig_audience_filters` — unclear whether ringfencing fields default to blank/false or the row is dropped. Needs confirming before relying on this for edge-case debugging.

---

## Follow-ups

- [ ] Confirm competency conversion rule (Step 3) with Jobelle
- [ ] Confirm classification precedence for overlapping prefix rules (Step 4)
- [ ] Confirm unmatched-join behavior (Step 5)
- [ ] Verify this documented logic against the actual ingestion pipeline/code, since this was captured from a verbal/manual description, not the source
