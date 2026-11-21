# SSRE2 Skills

**Design scientific software before implementation. Review scientific software after implementation.**

SSRE2 is one Scientific Kernel exposed through two explicit, one-request agent skills. Design defines scientific
architecture, falsifiable claims and correspondences, and evidence plans. Review audits the same material
identities against a sealed target and evidence.

Target source, tests, data, dependencies, and configuration remain **READ_ONLY**. SSRE2 writes only run-scoped
artifacts under a resolved Artifact Route.

## Why SSRE2 exists

Scientific software can be well-structured and still be scientifically wrong. A value may carry the wrong scale,
a method may run outside its supported regime, returned states may look comparable without a justified
correspondence, and green tests may repeat the same defect-bearing path.

SSRE2 adds one traceable reasoning chain:

    scientific objects and regimes
    → CLM claims and COR correspondences
    → Design EVD plans or Review EVD results
    → executable UNK closing paths where evidence is missing
    → SON / SIM / REL / EVI / EVO results

Every material CLM or COR names its subject and ends at challenging EVD or executable UNK. This is Trace closure.

## Small Interface, deep Module

| Skill | Use it when | Produces | Target |
|---|---|---|---|
| [$ssre2-design](.agents/skills/ssre2-design/SKILL.md) | Before scientific implementation | **SSRE2-DESIGN.md** | READ_ONLY |
| [$ssre2-review](.agents/skills/ssre2-review/SKILL.md) | After implementation on a frozen target | **SSRE2-SCOPE.md**, **SSRE2-REVIEW.md** | READ_ONLY |

The caller supplies one natural-language request. Target, Artifact Route, and assurance are optional overrides;
the Module resolves routine identity, authority, regimes, claims, evidence, and run allocation through authorized
inspection. It asks only when an owner decision changes scientific meaning or delivery, records the decision as
UNK, and continues independent work. Full scientific records stay in artifacts; the public response is a minimal
Run Summary.

Design and Review remain separate entry points because their authority differs:

    Design
      freezes a Design Frame
      defines claims, correspondences, architecture, and evidence plans
      ↓
    implementation outside SSRE2
      ↓
    Review
      seals observed Scope bytes
      re-observes every epistemic state
      produces five independent Audits
      ↓
    successor Design or Review after material change

Design intent is not implementation observation. A delivered Design is not a Review verdict.

## Scientific identities and states

The Identity Ledger preserves material identities across Design, implementation, Review, and successor runs:

| Prefix | Meaning |
|---|---|
| CLM | Scientific claim |
| QTY / UNT | Quantity Contract / accepted unit or alias |
| MTH / REG | Method / supported regime |
| STA / TRN | Lifecycle state / transition |
| COR | Quantity, method, or state correspondence |
| EVD | Evidence obligation or result |
| UNK | Unresolved material question with closing path |

Facts use OBSERVED, DECLARED, INFERRED, UNKNOWN, or PROPOSED. Review verdicts use PASS, UNPROVEN, or FAIL;
architecture debt remains a Finding. Run result is separately delivered or incomplete. A delivered Review may
legitimately contain UNPROVEN.

See the complete [SSRE2 language](GLOSSARY.md).

## Five Scientific Dimensions

| Abbreviation | Dimension | Design Projection | Review Audit |
|---|---|---|---|
| SON | Sonnet | Define faithful scientific correspondence and handoffs | Test correspondence and visible asymmetry |
| SIM | Simple | Concentrate scientific ownership behind deep Modules | Test ownership and accidental complexity |
| REL | Reliable | Define quantity, regime, invariant, failure, and lifecycle contracts | Test observable enforcement |
| EVI | Evidenced | Plan evidence able to challenge every CLM/COR | Test evidence sufficiency and independence |
| EVO | Evolvable | Bound propagation along real scientific axes | Test actual bounded change |

SON → SIM → REL → EVI → EVO is presentation order only. No result outranks, compensates for, or supplies evidence
to another.

## Minimal Run Summary

Every delivered or incomplete run returns one small public summary:

    Run Summary
    ├── mode and actual target identity, with Review paths and worktree inclusion
    ├── DELIVERED or INCOMPLETE run result
    ├── verified artifact paths and relevant Scope digest
    ├── assessed Design readiness or accepted Review verdicts and key findings
    ├── requested and actual assurance
    ├── material Open Items
    └── Use Record and runtime-provenance locations

Design reports READY or BLOCKED after assessing the design, and NOT_ASSESSED when the assessment stops early.
A write failure can leave a completed assessment with incomplete delivery. Review reports only accepted verdicts
for the current Scope and points to a consequential Finding when a verdict is FAIL. A delivered Review may
contain UNPROVEN. Use Open Items to explain missing Audits and records. For a Use Record or provenance that could
not be saved, include the available information inline.

An Open Item projects exactly one registered UNK, owner Decision, or delivery Blocker. It retains the source
identity and kind, names the affected artifact or conclusion, records delivery and implementation blocking
separately, and gives the cheapest closing path with a responsible person or role and a concrete next action.

## Per-run Use Record

Every delivered or incomplete run emits one Use Record. It lives in the run artifact when saved and appears
inline with available facts if saving fails.

| Field | What it discloses |
|---|---|
| intended_use | Mode, requested decision or change, included CLM/COR, and exclusions |
| accepted_inputs | Actual target, authority, references, receipts, and overrides |
| supported_setting | Applicable REG and matched, outside, or unknown setting |
| reference_evidence | EVD, normalization, regime, location, and independence limits |
| known_limits | UNK, exclusions, missing sources/tools, and skipped required checks |
| human_responsibility | Owner decisions, interpretation, implementation, and follow-up |
| lifecycle_monitoring | Changes that require a successor run and who reopens it |

The Use Record is a projection of the Scientific Map and Run record, not a caller form or second fact table.
Host, model, reasoning effort, permissions, environment, and date are execution provenance only. They never
determine scientific states or verdicts and do not constitute a model-performance ranking.

## Open Items and recovery

Every final response names missing prerequisites, unavailable sources or tools, and skipped required checks that
affect completion. Each appears once as an Open Item with its source identity, kind, affected artifact or
conclusion, delivery and implementation blocking values, and cheapest closing path.

Scientific gaps and delivery blockers remain distinct:

- Missing independent evidence produces UNK or UNPROVEN.
- Missing target identity, Artifact Route, Audit, or required assurance makes delivery incomplete.
- Blocking owner decisions may stop implementation while the Design artifact remains delivered.
- Source or evidence drift creates a successor run; sealed predecessor artifacts remain unchanged.

## Conditional branches

The common path does not load specialized mechanics until their trigger appears:

| Trigger | Branch | Preserved rule |
|---|---|---|
| A material state or verdict needs a new observation | Targeted check | Run the smallest authorized discriminating check and stop on evidence or a located UNK. |
| A skill is paired with SSRE2 or a sibling artifact is supplied | [Federation](.agents/skills/ssre2-design/references/federation.md) | Align versions and coverage before sharing located facts. Relate findings after each lane freezes its own judgments. |
| Frozen SSRE2 bytes are the target | [Reflexive closure](.agents/skills/ssre2-design/references/reflexive.md) | Separate target, executor, and output; self-produced support is not independent evidence. |
| Material source, evidence, regime, claim, or state changes | Successor run | Preserve predecessor artifacts and re-evaluate the changed identity. |
| Policy or recorded risk requires separated evaluation | ISOLATED assurance | Use contexts that cannot read sibling results and report the boundary actually achieved. |

These branches remain part of the scientific contract without enlarging the default caller form.

## Installation

The open [skills](https://github.com/vercel-labs/skills) command installs SSRE2 directly from GitHub.

Project install:

    npx skills@latest add HIT-SudoMaker/ssre2-skills

Deterministic Codex and Claude Code install:

    npx skills@latest add HIT-SudoMaker/ssre2-skills --skill ssre2-design --skill ssre2-review --agent codex --agent claude-code --yes

Global install:

    npx skills@latest add HIT-SudoMaker/ssre2-skills --skill ssre2-design --skill ssre2-review --agent codex --agent claude-code --global --yes

Choose one installation scope where possible. Update a global installation with:

    npx skills@latest update ssre2-design ssre2-review --global --yes

The repository authors one portable runtime tree under **.agents/skills**. Installers may project it into
host-specific locations; SSRE2 does not maintain a second authored runtime tree.

## Use

Invoke each skill explicitly with one request:

    $ssre2-design Add an inverse method to the current forward model, define supported regimes, and require a reconstruction check.

    $ssre2-review Review the current inverse implementation for unit normalization, regime selection, and reconstruction evidence.

Review uses the current worktree in the requested scope unless a different target is specified or established by
repository authority. The summary reports the actual content identity, paths, and whether local changes were
included.

Optional overrides remain ordinary language:

    $ssre2-review Review commit abc123 with ISOLATED Audits and write artifacts under reports/ssre2/run-17.

Pair SSRE2 with Matt Pocock's skills when both viewpoints are needed:

    $codebase-design $ssre2-design Design this change through both software and scientific architecture.

    $code-review $ssre2-review Review the committed change from main to HEAD. Check unit normalization in the inverse solver.

Codebase Design covers general Module and Interface structure. Code Review checks Standards and Spec fidelity on
the committed diff. SSRE2 establishes scientific meaning, regimes, and evidence. An owner-adopted Design clause
can guide the Spec audit when it is part of the governing Spec. Same-source findings can be linked once the target
content and inspected coverage have been verified. See the [Federation protocol](.agents/skills/ssre2-design/references/federation.md).

Reports may follow the caller's language. Paths, identities, epistemic states, verdicts, and assurance tokens
remain English.

## Evidence and limits

- Tests and same-path replay show consistency, not automatic scientific independence.
- Every targeted check states its CLM/COR, distinguishing result, normalization, regime, and stop condition.
- Review writes SSRE2-SCOPE.md before any Audit and stores the final-byte SHA-256 outside Scope.
- Missing evidence remains UNKNOWN or UNPROVEN; it is never silently promoted.
- SSRE2 does not replace domain expertise, experimental replication, implementation tests, safety assessment, or
  regulatory review.
- **Release posture: Candidate.** The [Validation record](dev/validation/README.md) separates structural and
  installation checks from independently graded behavioral evidence.

Read the [Scientific Kernel](.agents/skills/ssre2-design/references/scientific-kernel.md) for shared semantics and
[Federation](.agents/skills/ssre2-design/references/federation.md) only when another lane is input.

## Compatibility

The authored tree follows the [Agent Skills specification](https://agentskills.io/specification). Release checks
install Design alone, Review alone, and both skills into Codex and Claude Code. Host configuration keeps invocation
explicit. Validation records carry dates and pinned target identities; installation compatibility does not claim
identical behavior across agents or model versions.

## Development

Requirements: Node.js 20 or newer. The development kit has no package dependencies.

    npm test
    npm run release:check
    node dev/validation/checker-cases.mjs

The first command checks structure and canonical language. The release check verifies ecosystem installation.
Mutation cases show the checker's reach and semantic limits. None of these checks proves scientific behavior.

## Contributing

Keep runtime instructions in English, preserve READ_ONLY target access, retain canonical identities, and run all
checks before proposing a change. When the Scientific Kernel, Federation, or Reflexive closure changes, update both
self-contained copies; the checker rejects drift.

Use GitHub Issues for bugs, compatibility reports, and method proposals. Include the agent, model, frozen target,
invoked skill, produced artifacts, and observable failure.

## License

[MIT](LICENSE) © HIT-SudoMaker.
