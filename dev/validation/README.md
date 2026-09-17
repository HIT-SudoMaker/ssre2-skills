# SSRE2 validation

Use three independent checks:

- `npm test` verifies package structure, stable tokens, reference boundaries, and required byte equality.
- `npm run release:check` installs Design alone, Review alone, and both skills into temporary Codex and Claude
  Code projects.
- Blind model replay evaluates Design, Review, and federation on pinned scientific repositories.

Machine checks establish structure and delivery, not scientific judgment. Run
`node dev/validation/checker-cases.mjs` to observe both the checker's reach and its semantic limit.

## Cases

- [Benchmark](cases/benchmark.md): matched scope, claim discovery, Design/Review handoff, and federation parity.
- [Real targets](cases/real-targets.md): pinned repository histories, eligibility classes, and hidden grading.
- [Correspondence](cases/correspondence.md): stable identities with mode-specific authority and evidence states.

Every track begins as a static blind replay. Target execution is an optional Review-requested probe. Negative
boundaries, scientific efficacy cases, and protocol controls retain separate denominators.

## Current boundary

Structure, installation, checker mutation cases, skill validation, and local links pass. Protocol self-review
supports `SON`, `SIM`, `REL`, and `EVO`; `EVI` remains `UNPROVEN`. Only independently graded blind replays on the
final skill bytes can support behavioral claims about model robustness, scientific accuracy, cost, or federation
benefit.
