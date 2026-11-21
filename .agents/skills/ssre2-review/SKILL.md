---
name: ssre2-review
description: Review scientific software after implementation
---

# SSRE2 Review

Review one natural-language request against a frozen target and deliver `SSRE2-SCOPE.md` plus
`SSRE2-REVIEW.md`. The target remains `READ_ONLY`.

Read the [Scientific Kernel](references/scientific-kernel.md) and [Review method](references/method.md) in full.
Read [Federation](references/federation.md) for a paired skill or supplied sibling design or review artifact.

Return the Kernel's Run Summary with the inspected target, accepted verdicts, and a consequential Finding if any
verdict is **FAIL**. Name each missing prerequisite, unavailable source or tool, or skipped required check, its
affected artifact or conclusion, and its cheapest closing path. Repairs remain `PROPOSED`.
