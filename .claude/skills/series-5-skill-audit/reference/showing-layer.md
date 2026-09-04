# The showing layer

The diagnostic most skill audits miss. Give it real weight.

## Contents

- The principle
- Skill types and the artifact each one needs
- Assessing a skill
- Why this got worse with Series 5

---

## The principle

Every skill has two layers.

The **telling layer** is rules, descriptions, criteria and adjectives. It says what good looks like.

The **showing layer** is artifacts the model can pattern-match against or execute. It is what good looks like.

Series 5 models extract more from the showing layer than earlier models did, and an oversized telling layer degrades them. A skill can be entirely accurate and still fail, because it describes its subject instead of supplying it.

The clearest symptom: output that satisfies every rule in the file and still reads as generic. Nothing is wrong, and nothing is right either.

---

## Skill types and the artifact each one needs

Classify the skill, then look up what its showing layer should be. Many skills are two types wearing one name, which is usually the root cause of the rest of their problems.

| Type | What it governs | The showing layer |
|---|---|---|
| Voice / style | How output sounds | Full passages of real published writing, unedited, plus off-voice to on-voice rewrite pairs |
| Format / structure | How output is shaped | One complete real artifact in the target structure, start to finish |
| Generation | Produces a specific artifact type | Two or three real published outputs the author was happy with |
| Analysis / review | Evaluates against criteria | One worked example: a real input, and the analysis it should have produced |
| Procedure | Executes a sequence | The executable itself, script or template or config, plus one real run with its output |
| Domain knowledge | Supplies facts Claude lacks | The reference data itself in a reference file, not a summary of it |
| Routing / decision | Chooses between paths | A decision table, plus three edge cases resolved |

The common error across all seven is substituting a description of the artifact for the artifact. Prose describing a script instead of the script. A summary of the schema instead of the schema. A characterisation of a writing style instead of the writing.

---

## Assessing a skill

**Which layer dominates, and roughly by what ratio.** State it as a proportion of the file.

**Whether the showing layer exists at all, and whether its artifacts are complete.** Fragments of the thing are telling, not showing. A five-word quotation of a writing style does not let the model hear the rhythm; a bullet listing three section names does not show the structure. Completeness is the test, not presence.

**What the specific missing artifact is.** Name it concretely, in terms of something the human already has or can produce in an afternoon. "Needs examples" is not actionable. "Needs the three articles you linked in the last newsletter, pasted whole" is.

Where the human cannot supply the artifact, that is worth knowing early, because it changes what the rewrite can achieve.

---

## Why this got worse with Series 5

Two of the changes compound.

Instruction following improved, so the telling layer is now obeyed more literally and more completely than before. A long list of stylistic constraints that earlier models partly ignored is now followed in full, which produces output that is technically compliant and lifeless.

At the same time, the guides moved toward positive examples over prohibitions and toward brief instructions over enumerated ones. Both point the same way: fewer rules, better artifacts.

A skill written in 2025 that worked by accumulating rules is therefore hit twice. Its rules bind harder, and the thing that would have carried the quality was never in the file.
