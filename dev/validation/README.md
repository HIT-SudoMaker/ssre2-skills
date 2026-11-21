# SSRE2 validation

Use three independent checks:

- **npm test** verifies package structure, canonical language, required byte equality, internal references, the
  one-request Interface, Trace/Federation invariants, Run Summary and Open Item shape, Use Record fields, and
  blocker-disclosure obligations.
- **npm run release:check** installs Design alone, Review alone, and both skills into temporary Codex and Claude
  Code projects.
- Blind model replay evaluates Design, Review, blocker disclosure, reflexive closure, and Federation on frozen
  scientific repositories.

Machine checks verify structure and required contract text. Blind replay grades what the skills actually do.
Run **node dev/validation/checker-cases.mjs** to exercise the structural checker and its limits.

## Cases

- [Benchmark](cases/benchmark.md): matched CLM/COR, claim discovery, Design/Review handoff, reflexive replay, and
  Federation parity.
- [Real targets](cases/real-targets.md): pinned repository histories, eligibility classes, and hidden grading.
- [Design and Review](cases/design-review.md): stable identities with method-specific authority and evidence.
- [Reflexive closure](cases/reflexive.md): frozen self-targets, target/executor separation, material stability, and
  non-circular evidence.

Every track starts from the same simplest public Interface: one natural-language request to Design or Review.
Structured inputs are optional overrides, never prerequisites. Each replay records the resolved Design Frame or
Scope, Run Summary, Use Record, and actual assurance.

## Run Summary controls

Use the [Design and Review controls](cases/design-review.md#run-summary-controls) to grade whether a caller can
identify the assessed target, tell which work completed, and act on the result from the Run Summary. Grade the
reported source identity and coverage against the selected files and bytes, including any working-tree changes.
Verify actual artifact paths and Scope digest, reported outcomes and assurance, material Open Items, and the
location or inline contents of the Use Record and runtime provenance.

Each Open Item must project exactly one registered UNK, owner Decision, or delivery Blocker. Grade preservation of
its source identity and kind, affected artifact or conclusion, separate delivery and implementation blocking
values, and the actor and action in its cheapest closing path. For Review, grade the consequence and locator of a
material FAIL even when there are no Open Items. The complete Scientific Map and Dimension results remain in the
artifacts.

## Blocker controls

Inject each control independently:

- missing target file or unresolved source identity;
- unresolved Artifact Route;
- report write failure after an Artifact Route resolves;
- unavailable required tool or declared interpreter;
- blocked targeted check;
- missing Audit or Scope digest mismatch;
- requested ISOLATED assurance with only BOUNDED execution;
- target drift or late EVD;
- mismatched Sibling Reference.

Grade whether the final response projects the missing prerequisite, unavailable source or tool, or skipped
required check as one Open Item; identifies the affected artifact or conclusion and both blocking values; and gives
the cheapest closing path. Independent work must continue where the blocker does not apply.

## Use Record controls

Every delivered and incomplete run must expose:

- intended_use;
- accepted_inputs;
- supported_setting;
- reference_evidence;
- known_limits;
- human_responsibility;
- lifecycle_monitoring.

Each field must resolve to the Scientific Map, Identity Ledger, or Run record rather than a duplicate fact table.
Model, host, reasoning effort, permissions, and date are graded only for provenance completeness; they cannot
alter scientific states or verdicts.

State axes stay orthogonal. The Run result is DELIVERED or INCOMPLETE. A completed Design assessment supplies READY
or BLOCKED, and an unfinished assessment yields NOT_ASSESSED. Each accepted Review Audit supplies PASS, UNPROVEN,
or FAIL. Architecture debt is recorded as a Finding. The Use Record is a projection of the Run record.

## Current boundary

Structure, installation, mutation cases, skill validation, and local links are machine-checkable. Protocol
self-review exercises SON, SIM, REL, and EVO reasoning; independent evidence for behavioral EVI claims remains
UNPROVEN. Only independently graded blind replay on final skill bytes can support claims about blocker disclosure,
scientific accuracy, reflexive stability, or Federation benefit.

The mutation suite deliberately includes one semantic inversion that structural checks cannot detect. Its passing
exit code documents the boundary rather than approving the mutation.
