# Series 5 deltas

What the Opus 5, Sonnet 5 and Fable 5 prompting guides changed for skill authors.

## Contents

- Retirements: instructions that were right for earlier models and now cost you
- New needs: what Series 5 requires that earlier models did not
- Source pages

---

## Retirements

Instructions in this list were correct for earlier models. On Series 5 they are dead weight, and the first item breaks things outright. Quote each one you find, with its line, and name the guide that retires it.

**Reasoning narration.** Anything asking the model to echo, transcribe, explain or show its reasoning as response text. On Fable 5 this can trigger the `reasoning_extraction` refusal category and cause fallbacks to Opus 4.8. Treat as critical wherever it appears. Fable 5 guide, scaffolding changes.

**Verification instructions.** "Double-check," "verify before responding," "include a final verification step," "use a subagent to verify." Opus 5 verifies its own work unprompted, and these compound with that behaviour, costing tokens and latency with no quality gain. The guide says remove rather than rewrite them. Opus 5 guide, task scope and over-verification.

**Self-correction instructions.** "Re-check your answer," "review what you wrote before delivering." Same finding, same page.

**Thoroughness prompting.** "Be exhaustive," "if in doubt use the tool," "default to using X." Written to fix undertriggering on earlier models, these now overtrigger. Prompting best practices, overthinking.

**Forced progress narration.** "Summarise after every N steps," "explain what you did at each stage." Sonnet 5 already provides calibrated updates through long traces, and the guide says to try removing this scaffolding. Sonnet 5 guide, user-facing progress updates.

**Aggressive trigger language.** Stacked CRITICAL, MUST, ALWAYS and NEVER in capitals, used to force a skill to fire or a rule to stick. Current models respond to ordinary phrasing, and the aggressive version now overtriggers. Prompting best practices, tool usage.

**Stale model workarounds.** Anything written to route around a weakness a Series 5 model no longer has. Name the weakness each one was compensating for, since that is what makes the case for deletion.

**Duplicated and conflicting instructions.** The same rule in two places, whether inside SKILL.md or across it and its reference files. Anthropic found conflicting messages inside single requests where their system prompt, skills and user request overlapped, and Claude has to resolve the conflict before it can act. Repetition is waste; contradiction is worse. Where two lines pull in different directions, name both.

---

## New needs

**Scope must be stated explicitly.** Sonnet 5 follows instructions literally and does not silently generalise a rule from one item to another. Any rule whose intended reach is implied rather than stated will under-apply. A rule about paragraph length sitting under a heading about introductions, but meant for the whole piece, is now a bug. Sonnet 5 guide, more literal instruction following.

**Positive framing outperforms prohibition.** Both the Sonnet 5 and Opus 5 guides state that positive examples of the wanted behaviour work better than instructions about what to avoid. Count the prohibitions in the skill. Where the file is mostly a list of things not to do, that is the headline finding rather than a detail.

**Self-limiting instructions are now obeyed.** "Only flag major issues," "be conservative," "keep it brief," "don't overdo it." Series 5 follows these faithfully and will suppress good output to comply. Anthropic documents this in code review harnesses, where the model investigates as deeply as before and then reports less. It generalises past code. Where the skill contains one, say what it is probably costing.

**Output length needs explicit control.** Opus 5's default responses run longer than prior Opus models', and lowering effort does not reliably shorten visible output, since effort governs thinking rather than saying. Files it writes to disk run long too. A skill that produces written deliverables and says nothing about length has a gap. Opus 5 guide, response length and written deliverable length.

**Freedom calibrated to fragility.** High freedom, meaning general direction, where many approaches reach a good result. Low freedom, meaning exact steps or a script, only where the operation is fragile and one sequence is correct. Both errors are worth flagging: prescription applied to open judgement, and vagueness applied to something that must run exactly. Skill authoring best practices, degrees of freedom.

**Every block earns its tokens.** For each substantial section, ask whether Claude already knows this. Explanations of general concepts, definitions of common terms and restatements of ordinary good practice are all deletable. Name the specific blocks rather than the tendency.

**Brief instructions now do the work of lists.** Fable 5's instruction following is strong enough that a short instruction steers behaviour that previously needed each case enumerated. Anthropic's own example replaces a list of named patterns with one short paragraph and reports equivalent results. Where a skill enumerates, consider whether one sentence covers it.

---

## Source pages

- Prompting Claude Opus 5: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5
- Prompting Claude Sonnet 5: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5
- Prompting Claude Fable 5: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5
- Prompting best practices: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- The new rules of context engineering for Claude 5: https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models
