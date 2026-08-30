# SSRE2 Review Contract

SSRE2 Review is the retrospective mode of Shared Doctrine. It recovers an observed Scientific Map from a
pinned implementation, returns five non-compensating verdicts, and offers read-only repair guidance.

Read Shared Doctrine before this file. This contract owns only the Review workflow.

## Interface

The caller provides:

1. a target project and pinned source snapshot or explicit file scope;
2. available authoritative scientific material and owner statements;
3. an approved artifact location or enough project context to resolve one;
4. optional paths to a prior SSRE2 Design or code-review artifacts.

A prior SSRE2-DESIGN.md supplies DECLARED intent only. Code-review artifacts enter as Sibling
References: Standards and Spec remain separate judgments whose locations may be cited but whose verdicts
cannot enter scientific proof.

Resolve the Artifact Route through Shared Doctrine. Review returns SSRE2-SCOPE.md and SSRE2-REVIEW.md there.
The target project, its dependencies, lockfiles, configuration, source, tests, and scientific data remain
unchanged.

## Workflow

### 1. Lock snapshot and seal the Review Scope

Recover facts from code, tests, specifications, authoritative documentation, owner statements, and prior
reports. Documents prove intent only. Pin the source identity before drawing implementation conclusions.

SSRE2-SCOPE.md is the sole owner of observed facts. It freezes:

- source identity, authority order, claims, and supported-domain limits;
- the observed Scientific Map and Identity Ledger, with material items located in code or evidence;
- optional Domain Professor and sibling code-review artifact references;
- the high-leverage focus and rationale for excluded incidental detail.

Reuse a prior Design's Identity Ledger. Without one, create a Review-local ledger through Shared Doctrine.

Apply Trace closure to the observed Map. Every material `CLM` and `COR` names its scientific subject and ends
at a located `EVD` receipt or contradiction, or at an `UNK` evidence gap with the cheapest closing path. Every
`EVD` targets at least one `CLM` or `COR`; reject dangling identities.

Inspect a local variable only when Shared Doctrine makes it load-bearing. Follow a located local defect only far
enough to explain its scientific consequence.

When carrying forward debt or unproven items, account for every still-relevant item by stable identity or cite
the complete prior section as an input. Omission must be explicit, never accidental.

Write SSRE2-SCOPE.md, compute its content digest, and seal it before any Review Audit. A changed digest
invalidates dependent results and requires a new Review Scope.

Completion criterion: every Review Audit can answer its Scientific Dimension from the same sealed Review Scope
without another Audit's conclusions. The Scope explains which quantity is represented in which unit, computed
by which method, and returned under which regime and lifecycle state.

### 2. Choose high-yield checks

For each load-bearing claim or correspondence, choose the smallest check that could change its state or
verdict. Prefer this order, skipping a rung when it cannot discriminate:

1. static Scientific Map inspection, especially Quantity Contracts, method names, selectors, and state;
2. existing reproducible evidence receipts and observable invariants;
3. a declared relation between methods, states, representations, or limits;
4. one targeted differential, metamorphic, convergence, conservation, or round-trip probe;
5. an independent implementation, authoritative dataset, or external oracle.

State the claim, quantity and unit normalization, expected discriminating observation, supported regime,
command or location, and stopping condition before running a probe. Reuse an existing same-path test as
consistency evidence; rerun it only when its environment or result is material. Add an independent probe only
when it can challenge the same logic.

Method, field, and result names are reviewed for quantity role, regime, transition, and returned-state meaning;
unit metadata is reviewed for scale. File a naming finding only when ambiguity has a locatable scientific
consequence; general naming taste belongs to code review.

Completion criterion: every planned check can change a load-bearing claim state or close an `UNK` item. Include
only probes with a stated discriminating result.

### 3. Produce five Review Audits

Read dimensions.md. Produce one Review Audit for each Scientific Dimension. SIM, SON, REL, EVI, and EVO each
receive the sealed Review Scope and only their own operators. No Audit consumes, predicts, ranks, or suppresses
another Review Result.

Apply Shared Doctrine's Execution economy and record `ISOLATED` or `BOUNDED` assurance. Under `ISOLATED`,
sibling results are unavailable. Under `BOUNDED`, each pass ignores available sibling output and the report
retains the cognitive-isolation limitation. Gather deterministic observations once; judgments remain
Dimension-owned.

Each Audit returns one Review Result under the Review Result Policy below. A timeout or unavailable environment
makes only affected claims UNPROVEN (environment); remaining Audits continue.

When subagents are used, dispatch:

- paths to Shared Doctrine, this contract, dimensions.md, and frozen SSRE2-SCOPE.md;
- target path and pinned source identity;
- only the assigned Scientific Dimension and output location;
- READ_ONLY, the probe policy, stable finding IDs, and the user's report language.

Return summaries stay compact: verdict, finding IDs, blocking `UNK` items, and artifact path. Full evidence stays
in the audit artifact or Review Scope rather than being recopied into controller prompts.

Completion criterion: all five Scientific Dimensions return a valid Review Result or a named environment
UNPROVEN with environment evidence.

### 4. Probe environment policy

Prefer the project's declared reproducible environment. If it is unavailable, a time-boxed isolated
environment may be created outside the target project. Record interpreter, dependency manifest, installation
command, exit status, decisive output, and limitations.

Do not install review dependencies into the target environment. A setup failure or timeout is an evidence
limit, not a project defect. Provide the cheapest reproduction command and continue unaffected audits.

### 5. Apply the Review Result Policy

This section is the sole owner of Review Result shape, verdict calibration, finding identity, and environment
fallback. dimensions.md owns only the five scientific operators.

Every Review Audit returns:

1. verdict — PASS, PASS WITH DEBT, UNPROVEN, or FAIL;
2. findings — stable Dimension-owned IDs and located scientific consequences;
3. positive evidence — facts supporting the verdict;
4. unproven ledger — open load-bearing `CLM` or `COR` items and their cheapest closing paths;
5. calibration proof — decisive basis, missing-evidence check, and non-promotion check.

| Verdict | Required basis |
|---|---|
| FAIL | A locatable contradiction or triggerable supported-domain counterexample owned by this Scientific Dimension. |
| UNPROVEN | A load-bearing claim lacks sufficiently independent evidence or the environment blocks review. Missing is not false. |
| PASS WITH DEBT | The claim holds, but a concrete local non-blocking scientific architecture debt remains. |
| PASS | Load-bearing claims have sufficient evidence, with no found counterexample or material debt in this Scientific Dimension. |

Every verdict includes:

- decisive basis — the Scientific Dimension's claim and located evidence that selects the verdict;
- missing-evidence check — every load-bearing claim still lacking independent evidence;
- non-promotion check — confirmation that missing evidence was not rewritten as contradiction.

Reject and rerun a result when FAIL lacks a same-dimension contradiction or supported-domain counterexample,
or when UNPROVEN was mechanically promoted. Calibration checks the basis only; it does not choose a different
verdict by comparing dimensions.

Each finding belongs to one Scientific Dimension and has an ID (`SIM-n`, `SON-n`, `REL-n`, `EVI-n`, or
`EVO-n`). The tuple of Scientific Dimension, violated claim, and evidence defines its identity. It records the
claim, epistemic state, location, counterexample, scientific consequence, and minimal advisory repair
direction. Merge only an identical tuple while preserving provenance.

A finding depending on unresolved owner intent is marked depends on `UNK-n` and excluded from verdict and repair
ordering until resolved. Across rounds, use persists-from old-ID and cleared-by action for continuity.

Completion criterion: every verdict token is supported by its calibration proof and every finding is
locatable, falsifiable, and scientifically consequential.

### 6. Synthesize without compensation

Preserve all five Review Results and findings. The main session, not the Review Audits, validates same-locus
groups and records each proposed repair's reinforces, costs, requires, or unresolved relations.

Synthesis may combine root-cause and repair prose. It may not compute a score, average, earliest-wins result,
fixed dimension priority, or workflow-readiness decision. Order actions only by scientific consequence,
dependency, reversibility, blast radius, and owner priority.

Only after all five Review Results are frozen, relate Sibling References through validated same-locus findings
without reranking either lane.

Completion criterion: every proposed relation is validated or rejected against findings on both sides, and
every materially affected dimension retains its original verdict.

### 7. Write review artifacts

SSRE2-REVIEW.md contains:

1. source identity, Artifact Route, execution assurance, environment, probe manifest, and deviations;
2. the SSRE2-SCOPE.md reference and content digest;
3. the five Review Results in machine-extractable rows;
4. each Scientific Dimension's findings, positive evidence, unproven ledger, and calibration proof;
5. validated same-locus groups and cross-effects, including sibling findings by reference;
6. evidence-anchored repair directions and cheapest closing probes;
7. unresolved owner questions and a target-code non-mutation statement.

These are content obligations, not mandatory separate sections. Consolidate them, cite located evidence once,
and keep the report proportional to the decisive findings and remaining scientific uncertainty.

SIM → SON → REL → EVI → EVO determines section order only.

## Completion checklist

Review stops only when every item is traceable:

- the resolved Artifact Route and run identity are recorded;
- source identity and the sole observed Scientific Map are sealed in SSRE2-SCOPE.md with a content digest;
- the focus reaches dimensions, units, architecture, and load-bearing names without an incidental variable census;
- all five Scientific Dimensions return or have a named environment UNPROVEN;
- every material `CLM` and `COR` closes through an `EVD` or `UNK` relation;
- every verdict retains its calibration proof and every finding is locatable and falsifiable;
- all material interactions are validated without merging sibling software and SSRE2 scientific judgments;
- the report states that target code was not modified.
