---
name: series-5-skill-audit
description: Audits an Agent Skill against the Codex Series 5 prompting guides, reports what is working and what is degrading output, works out what the skill is missing, and rewrites it after human review. Use when a skill produces weaker output than it used to, stops triggering, was written for an earlier model generation, or when migrating a skill library to Opus 5, Sonnet 5, or Fable 5. Triggers on "audit this skill", "update my skill for Series 5", "why isn't this skill working anymore", "migrate my skills", "rewrite this SKILL.md", "is this skill still good". Not for authoring a new skill from scratch, and not for prompt optimization outside the skill format.
---

# Series 5 skill audit

Diagnose a skill against the Series 5 guides, then rewrite it once the human has reviewed the diagnosis.

Two halves with one gate between them. The diagnosis is a complete deliverable on its own, and the rewrite depends on what the human supplies in response to it.

## Read first

The skill in full, including every file it references. Ask for referenced files you were not given before starting, since auditing against files you have not seen produces a confident wrong answer.

Then:

- [reference/series-5-deltas.md](reference/series-5-deltas.md) for what the Series 5 guides changed, both what they retire and what they now need more of
- [reference/skill-spec.md](reference/skill-spec.md) for the authoring spec: discovery, structure and token limits
- [reference/showing-layer.md](reference/showing-layer.md) for the show/tell diagnostic and the artifact each skill type needs

## Establish before auditing

Which models it runs on, defaulting to Opus 5, Sonnet 5 and Fable 5. What the skill produces, and what good looks like in the human's own terms. What prompted the audit.

If there is an observed failure, one concrete example of it is worth more than everything else you can ask for. Ask for it.

Classify the skill by type using the table in showing-layer.md. Type determines what a good version looks like, so settle it before auditing rather than after. A skill that is two types wearing one name is usually the root cause of the rest of its problems.

## Audit

Work the three reference files against the actual file contents. Judge what is written rather than what the author probably meant, and quote the line for every finding. A finding without a quotation is an opinion.

## Deliberate

Answer three questions for this skill specifically:

**The gap.** What does it need in order to work that it does not contain? Usually the missing artifact from showing-layer.md, sometimes a constraint the author knows and never wrote down.

**The verifier.** How would the model know it succeeded? Series 5 models check their own work well against something concrete and poorly against an adjective. Where success is currently a quality descriptor, propose a rubric, a comparison artifact, or a binary test.

**The surviving rules.** Binary, checkable rules stay literal: banned words, formatting prohibitions, required fields, hard constraints. Descriptive, qualitative rules are the ones samples replace. Sort this skill's rules into the two piles and name them.

## Gate one: deliver and stop

Lead with the verdict in two or three sentences: what is wrong at root, and what fixing it needs from the human.

Then cover the findings that break the skill, the findings that degrade its output, what is missing, what is working and should survive the rewrite, and the proposed file shape with rough line budgets.

Close by asking for the missing artifact in concrete terms, and for any constraint the human knows that is not in the file. End the turn on those questions. The rewrite depends on their answer, so this is the finished state of the phase rather than a pause inside it.

## Rewrite

After the human responds.

Retirements come out entirely, in their softened forms as well as their obvious ones. The showing layer goes in, built from the artifacts the human supplied; where they supplied none, mark those files as placeholders and say so, since inventing the samples defeats the purpose of the skill. Surviving rules stay literal and short. Descriptive rules that a sample now carries get cut rather than reworded. SKILL.md stays a lean guide pointing at reference files one level deep.

Rewrite the description last, once the skill's job is settled.

Deliver the complete files, then a short note covering what came out and why, what moved rather than went, judgement calls the human might disagree with, and line counts before and after.

## Gate two: test before replacing

Save under a new name, `<original>-s5`, and keep the original. It is the control in the test, so replacing it now makes the test impossible.

Three real tasks drawn from work the human has already done, where they know what good output looks like. Run each twice in fresh sessions, once with each skill. Fresh sessions matter because context from this audit will flatter the new skill.

Watch for whether it triggered unprompted, whether anything from the deleted rules has gone missing from the output, whether the output resembles the supplied samples or a generic version, length on Opus 5, and on Sonnet 5 whether rules applied everywhere they should rather than only where they were stated. A rule whose absence shows up in output has earned its place back as one line.

Retire the original once the new skill wins all three. A split result is diagnostic: work out what the losing task needed, add that one thing, test again.

Say this to the human in your own words, at enough length that it does not read as boilerplate they can skip.
