# SSRE2 Skills

**Design scientific software before implementation. Audit scientific software after implementation.**

SSRE2 is a pair of read-only agent skills for software that carries scientific claims. Design turns scientific
intent into a traceable architecture before implementation. Review audits the observed implementation and its
evidence afterwards.

SSRE2 writes its own run-scoped artifacts. Target source code remains `READ_ONLY`.

## Why SSRE2 exists

Scientific software can be well-structured and still be scientifically wrong. A value can carry the wrong
scale, a method can run outside its supported regime, two returned states can look comparable without a
declared correspondence, and a green test suite can confirm an implementation without challenging its claim.

Codebase design and code review remain necessary. They answer general software questions. SSRE2 adds the
scientific lane:

- physical values become Quantity Contracts with kind, dimension, unit, scale, and representation;
- methods declare their supported regimes, lifecycle, selectors, and returned scientific states;
- material claims and correspondences close through challenging evidence or an explicit unknown;
- design obligations and review verdicts stay separate, traceable, and non-compensating.

## The two skills

| Skill | Use it when | Produces | Target code |
|---|---|---|---|
| [`$ssre2-design`](.agents/skills/ssre2-design/SKILL.md) | Before scientific implementation | `SSRE2-DESIGN.md` | `READ_ONLY` |
| [`$ssre2-review`](.agents/skills/ssre2-review/SKILL.md) | After scientific implementation on a pinned source | `SSRE2-SCOPE.md`, `SSRE2-REVIEW.md` | `READ_ONLY` |

Both skills use the same Scientific Map in opposite directions:

```text
claim -> Design -> implementation -> Review -> evidence -> revision
          prospective                 observed
```

Design returns prospective Design Projections. Review returns retrospective Review Audits. The Identity Ledger
keeps material scientific objects stable across the transition without turning proposed intent into observed
proof.

## Federates with codebase design and code review

SSRE2 is a sibling lane, not a replacement workflow.

| Lane | Owns |
|---|---|
| Codebase design | Module depth, Interfaces, Seams, Leverage, and Locality |
| Code review | Standards and Spec fidelity |
| SSRE2 | Quantity Contracts, methods, regimes, lifecycle, scientific correspondence, and evidence |

Matt-style design and review artifacts enter SSRE2 as Sibling References. Located facts may cross the
federated seam; judgments do not. A Standards pass cannot prove a scientific claim, and an SSRE2 verdict cannot
decide general code quality.

## Installation (30-second setup)

The open [`skills`](https://github.com/vercel-labs/skills) CLI installs SSRE2 directly from GitHub. No npm
package or npm login is required.

### Project install

Run this inside the project that should use SSRE2:

```bash
npx skills@latest add HIT-SudoMaker/ssre2-skills
```

For a deterministic Codex and Claude Code install:

```bash
npx skills@latest add HIT-SudoMaker/ssre2-skills --skill ssre2-design --skill ssre2-review --agent codex --agent claude-code --yes
```

### Global install

Use this when SSRE2 should be available in every project:

```bash
npx skills@latest add HIT-SudoMaker/ssre2-skills --skill ssre2-design --skill ssre2-review --agent codex --agent claude-code --global --yes
```

Choose one scope where possible. Installing the same skill globally and inside a project can produce duplicate
entries in host skill selectors.

Update a global installation with:

```bash
npx skills@latest update ssre2-design ssre2-review --global --yes
```

The repository authors one portable runtime tree under `.agents/skills`. The installer creates host projections
such as `.claude/skills` when needed; SSRE2 does not maintain a second authored skill tree.

## Use

Invoke each skill explicitly:

```text
$ssre2-design Design the Scientific Map and scientific architecture before implementation. Keep target code read-only.
```

```text
$ssre2-review Audit this pinned source after implementation with evidence-calibrated scientific verdicts. Keep target code read-only.
```

Pair SSRE2 with Matt-style skills when both lanes matter:

```text
$codebase-design $ssre2-design Design this scientific change through both software and scientific architecture.
```

```text
$code-review $ssre2-review Review this pinned change through both general and scientific judgments.
```

The runtime instructions are English. Reports may follow the user's language while stable SSRE2 tokens, paths,
identifiers, and enumerations remain English.

## The SSRE2 model

- **Scientific Map** — the shared Interface for scientific objects, Quantity Contracts, methods, regimes,
  lifecycle, correspondences, claims, owners, and evidence.
- **Quantity Contract** — a physical value's kind, dimension, unit, prefix or scale, representation, and
  material coordinate, shape, tolerance, or uncertainty semantics.
- **Method family** — materially different computations for the same object or observable, with their overlap,
  limiting, refinement, transformation, or complementary relation made explicit.
- **Identity Ledger** — stable IDs that preserve material identities from prospective Design to observed Review.
- **Trace closure** — every material claim or correspondence points to its scientific subject and ends at
  challenging evidence or an explicit unknown with the cheapest closing path.

The five Scientific Dimensions ask independent questions:

| Dimension | Design asks | Review asks |
|---|---|---|
| Sonnet (`SON`) | Does the architecture faithfully represent the science? | Does implementation correspond to the declared science? |
| Simple (`SIM`) | What is the smallest coherent ownership model? | Is accidental scientific complexity present? |
| Reliable (`REL`) | Which invariants, regimes, failures, and states must be explicit? | Are those contracts enforced under supported conditions? |
| Evidenced (`EVI`) | What evidence could challenge each claim? | Does sufficiently independent evidence actually challenge it? |
| Evolvable (`EVO`) | How should a real scientific change propagate? | Is that propagation bounded and traceable? |

Sonnet asks for faithful correspondence, not forced symmetry or unsupported mathematical duality. Its first
position is expository; no Dimension outranks or compensates for another.

## Evidence before confidence

Every load-bearing statement is `OBSERVED`, `DECLARED`, `INFERRED`, `UNKNOWN`, or `PROPOSED`. Missing evidence
stays visible. It never becomes a pass or a contradiction merely because the report needs a conclusion.

Tests are one evidence mechanism, not the evidence loop itself. Strong evidence can confirm, narrow, challenge,
or reopen an earlier scientific decision through the same Interface callers use.

Physical dimensions and units remain explicit. SI prefixes belong to the unit symbol; conversions and accepted
machine aliases have one owner; equal dimensions do not imply equal scientific meanings.

## Trust and limits

- Target code remains read-only; implementation and repair guidance is advisory.
- Artifacts use a non-root, run-scoped route and preserve existing reports.
- `SSRE2-SCOPE.md` solely owns observed Scientific Map facts; `SSRE2-REVIEW.md` cites its digest and owns Review
  Results, findings, and validated relations.
- Review seals Scope after discriminating observations. Material late facts create a successor run; Federation,
  dispatch, and external probe details load only when their branches apply.
- SSRE2 does not replace domain expertise, experimental replication, implementation tests, safety assessment,
  or regulatory review.
- **Release posture: Candidate.** The [Validation record](dev/validation/README.md) records structural and
  installation coverage while retaining `EVI UNPROVEN` until final-byte blind model replays are independently
  graded.

Read the [Shared Doctrine](.agents/skills/ssre2-design/references/shared-doctrine.md) for core semantics and the
conditional [Federation contract](.agents/skills/ssre2-design/references/federation.md) for sibling inputs.

## Compatibility

The authored tree follows the [Agent Skills specification](https://agentskills.io/specification). Release checks
exercise installation into Codex and Claude Code. Shared frontmatter and Codex UI metadata expose the same
descriptions:

```text
SSRE2 Design  — Design scientific software before implementation
SSRE2 Review  — Audit scientific software after implementation
```

`agents/openai.yaml` keeps Codex invocation explicit without changing shared semantics or adding host-specific
fields to portable frontmatter. Verify invocation policy in each deployed host.

Validation records carry dates and pinned commit identities; no release schedule is promised. Installation
compatibility does not claim identical behavior across agents or model versions.

## Development

Requirements: Node.js 20 or newer. The development kit has no package dependencies.

```bash
npm test
npm run release:check
```

`npm test` validates structural invariants offline and reports entrypoint size as a metric. `npm run release:check`
builds a clean projection and installs each skill alone and both together into temporary Codex and Claude Code
paths. Neither proves scientific behavior; see the [validation record](dev/validation/README.md).

## Contributing

Keep runtime instructions in English, preserve the `READ_ONLY` target-code limit, and run both checks before
proposing a change. When Shared Doctrine changes, update both self-contained copies; the checker rejects drift.

Use [GitHub Issues](https://github.com/HIT-SudoMaker/ssre2-skills/issues) for bugs, compatibility reports, and
method proposals. Include the agent, model, source snapshot, invoked skill, produced artifacts, and observable
failure.

## License

[MIT](LICENSE) © HIT-SudoMaker.
