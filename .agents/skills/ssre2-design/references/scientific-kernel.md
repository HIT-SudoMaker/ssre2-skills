# SSRE2 Scientific Kernel

SSRE2 designs and reviews software with falsifiable mathematical, empirical, or model-behavior claims.

## Invariants

- Target source, tests, data, dependencies, and configuration remain **READ_ONLY**. Write only run artifacts;
  implementation and repair remain **PROPOSED**.
- One run uses one Scientific Map and one evidence snapshot. Every Projection or Audit names them.
- **SON**, **SIM**, **REL**, **EVI**, and **EVO** remain independent; synthesis does not score or compensate them.

## Interface defaults

Each explicit entry point accepts one natural-language request, optional references, and optional target,
Artifact Route, and assurance overrides. The Module builds the structured scientific records.

Resolve routine inputs in order from caller authority, documented repository authority, the inspected public
Interface, then implementation observations. The caller's claims and authority order define scope. Owner intent
requires an authoritative declaration. Register material conflicts and missing owner choices as **UNK**. Ask
only when the answer changes scientific meaning or delivery. Continue independent work.

Resolve the Artifact Route from the caller, repository convention, or allowed workflow workspace in that order.
On success, allocate a fresh run directory and identity. If no route resolves, register a Blocker, ask once,
and continue authorized inspection. Scope sealing, artifact delivery, and writes wait for the route.

Default to **BOUNDED**, with separate passes that exclude sibling results. Use **ISOLATED** when required by the
caller, repository policy, or recorded risk, using contexts that cannot read sibling results. Five results do
not require five executors.

## Language

| Term | Meaning |
|---|---|
| **Target** | Immutable source, artifact, or frozen SSRE2 bytes under Design or Review. |
| **Scientific object** | Quantity, method, observable, state, or transition whose meaning matters. |
| **Regime** | Supported scientific conditions and the owner of method selection within them. |
| **Method family** | Materially different computations for one object or observable. |
| **Basis** | Authority, observation, or derivation supporting resolved knowledge. |
| **Finding** | Located consequence, contradiction, unknown, or non-blocking debt. |

## Epistemic states

| State | Meaning |
|---|---|
| **OBSERVED** | Located artifact or executed targeted check. |
| **DECLARED** | Authoritative intent; not implementation proof. |
| **INFERRED** | Derived from identified premises. |
| **UNKNOWN** | Undecidable from current material; carries a closing path. |
| **PROPOSED** | Design or repair offered for owner selection. |

A fact may have several bases. **UNK** is the record for a material gap in knowledge.

## Scientific Map

The Scientific Map locates scientific objects, Quantity Contracts, methods, regimes, lifecycle, correspondences,
owners, claims, evidence, and unknowns. A method family has one owner for supported regimes and selection. Model
only lifecycle states and transitions the target supports.

A correspondence states preserved and changed meaning across quantities, states, or methods, including overlap,
limits, refinement, transforms, and complementary outputs. Mathematical duality requires domain authority; a
shared Interface is insufficient.

### Identity Ledger

| Prefix | Identity |
|---|---|
| **CLM** | scientific claim |
| **QTY / UNT** | Quantity Contract / accepted unit or alias |
| **MTH / REG** | method / supported regime |
| **STA / TRN** | lifecycle state / transition |
| **COR** | quantity, state, or method correspondence |
| **EVD** | evidence obligation or result |
| **UNK** | unresolved material question |

Use readable identities such as **CLM-unit-equivalent-results**, **COR-forward-inverse-reconstruction**,
**EVD-unit-equivalence-reference**, and **UNK-missing-independent-reference**. Preserve an identity across wording
changes; changed scientific meaning receives a successor identity.

### Trace closure

Every material **CLM/COR** has an **about** relation to its **QTY**, **UNT**, **MTH**, **REG**, **STA**, or **TRN**
subject and ends **challenged-by** **EVD** or **unresolved-by** **UNK** with an executable closing path. Each
**EVD** targets **CLM/COR**. Evidence and residual unknowns may coexist. Dangling identities fail closure.

## Records

| Record | Required content |
|---|---|
| **Claim** | **CLM**, subjects, regime, falsifiable statement and expected behavior, owner, and state. |
| **Correspondence** | **COR**, subjects, regime, preserved and changed meaning, falsifiable expected relation, owner, and state. |
| **Evidence plan** | Prospective **EVD** with target **CLM/COR**, distinction, regime, normalization, independence, and acquisition path. |
| **Evidence** | **EVD** with target **CLM/COR**, basis, regime, normalization, independence limit, location, and result. |
| **Unknown** | **UNK**, affected **CLM/COR**, missing distinction, consequence, and closing path. |
| **Blocker** | Unmet delivery prerequisite, affected artifact or conclusion, preserved work, and closing path. |
| **Decision** | Choice of scientific meaning or architecture, with question, owner, recommendation, basis, consequence, and blocking value. |
| **Proposal** | **PROPOSED** Design or repair change, affected identities, owner, and basis. |
| **Dimension result** | Full name, abbreviation, affected **CLM/COR**, basis, findings, unknowns, and Review verdict when applicable. |
| **Run record** | Target, executor, predecessor, Artifact Route, assurance, run result, blockers, and runtime provenance. |

Material fields use **UNK** rather than an empty value or silent omission.

### Open Items

Project each material Unknown, Decision, or Blocker once as an **Open Item**. Include missing prerequisites,
unavailable sources or tools, and skipped required checks.

| Field | Required content |
|---|---|
| **source_record** | Registered **UNK**, Decision, or Blocker identity. |
| **kind** | **UNKNOWN**, **OWNER_DECISION**, or **DELIVERY_BLOCKER**. |
| **affects** | Affected **CLM/COR**, artifact, mode outcome, or conclusion. |
| **reason** | Missing distinction, owner question, or unmet prerequisite. |
| **delivery_blocking** | Whether the item prevents required artifact delivery. |
| **implementation_blocking** | Whether the item prevents responsible implementation or follow-up. |
| **closing_path** | Cheapest executable action that can close the source record. Name who can act and what they must provide, decide, or check. |

## Use Record

Project one **Use Record** per run from its Design Frame or Scope, Scientific Map, and Run record.

| Field | Required content |
|---|---|
| **intended_use** | Mode, requested decision or change, included **CLM/COR**, and exclusions. |
| **accepted_inputs** | Target identity, authority, references, evidence receipts, and overrides. |
| **supported_setting** | Applicable **REG**, conditions, and setting match. |
| **reference_evidence** | **EVD**, normalization, regime, location, and independence limit. |
| **known_limits** | **UNK**, exclusions, unavailable sources or tools, skipped checks, and affected conclusions. |
| **human_responsibility** | Owner decisions, interpretation, implementation, and follow-up. |
| **lifecycle_monitoring** | Changes requiring a successor run and the owner who reopens it. |

Runtime provenance records host, model, reasoning effort when available, permissions, environment, and date. It
supports reproduction; it does not determine scientific state, verdict, or model ranking.

## Run Summary

Return one **Run Summary** from the run record and available mode results, including after early stops. Preserve
incomplete work and mark material facts that remain unavailable.

| Field | Required content |
|---|---|
| **mode** | **DESIGN** or **REVIEW**. |
| **target_identity** | Actual Design source, or Review content identity and a brief statement of inspected paths and worktree inclusion. If unresolved, identify the requested target and link its Open Item. |
| **run_result** | **DELIVERED** or **INCOMPLETE**. |
| **artifact_paths** | Verified paths, including usable partial artifacts and their Scope digest when applicable. Use **NONE** if no artifact is available and explain missing required artifacts through Open Items. |
| **mode_outcome** | Design readiness from the Design method, including **NOT_ASSESSED** if the assessment did not finish. For Review, give accepted full-name verdicts on the current Scope, a material Finding with a location when any verdict is **FAIL**, and Open Items covering missing Audits. |
| **assurance** | Requested and achieved assurance for available results. Say when neither level was achieved. |
| **open_items** | Material Open Items; empty when none remain. |
| **use_record** | Verified record location, or the available Use Record inline when the record could not be saved. |
| **runtime_provenance** | Verified record location, or available execution provenance inline when the record could not be saved. |

The **Run result** tracks delivery independently of Design readiness or Review verdicts. A Design assessment can
finish before a write fails, or a blocking owner Decision can remain in a delivered Design. A delivered Review
may contain **UNPROVEN**. Keep material Findings visible even when Open Items are empty.

## Quantities

A Quantity Contract records scientific role, dimension, unit and scale, representation, and material coordinates,
shape, precision, tolerance, or uncertainty. Equal dimensions do not imply equal meanings.

Give conversion, normalization, and aliases one owner. Names convey role; unit metadata conveys scale. Compare in
declared compatible units. Preserve SI prefix and case: **m**, **µm**, **nm**, and **pm** share a dimension, not a
scale; **um** is valid only as a declared alias for **µm**.

## Inspection

Inspect scientific architecture and public Interfaces first: quantities, methods, selectors, regimes, transitions,
returned states, invariants, claims, correspondences, and evidence. Follow an implementation detail only to a
scientific consequence. Incidental style is outside SSRE2.

Account for every requested claim and every testable scientific promise on the inspected public Interface.
Map each request or source location to a **CLM/COR** and regime, or record its scope exclusion and basis.
Keep each in-scope promise and register any missing evidence as **UNK**. The Review method calibrates **UNPROVEN**.

Use the deletion test to assess depth. Removing a deep Module returns real complexity to its callers.
Introduce an Adapter Seam only along an observed variation axis with two actual implementations.

## Dimensions

A **Dimension** produces a Projection in Design or an Audit in Review. Use the frozen inputs and judge each
Dimension from its own basis. The Review method calibrates each **Verdict** as **PASS**, **UNPROVEN**, or **FAIL**.

Presentation order: **Sonnet (SON)** → **Simple (SIM)** → **Reliable (REL)** → **Evidenced (EVI)** →
**Evolvable (EVO)**.

Sonnet uses six tests: locatable grammar, single judgment ownership, closed legal combinations, dependency-shaped
rhythm, visible asymmetry, and enforceable relations. Mirrored roles require matching domain meanings; feedback
may be cyclic, but responsibility remains explicit.

## Evidence and methods

Green tests, coverage, and same-path replay show consistency. Scientific evidence challenges **CLM/COR** through
an independent reference or justified relation such as dimensions, normalized agreement, convergence,
conservation, limits, or reversible transforms. Declare relation, normalization, and regime first. Shared
formulas, data, expected relations, or conversions reduce independence.

Carry material Design identities into Review. Re-observe epistemic states on the sealed Scope. Design authority
describes intent and supplies no implementation proof or Review verdict.

After all results freeze, synthesis may relate verified same-locus findings while preserving every Projection and
Audit.

Read [Reflexive closure](reflexive.md) only when SSRE2 itself is the target.

## Execution and delivery

Use the smallest targeted check that can change a material state or verdict. Declare its **CLM/COR**, distinction,
normalization, regime, environment, and stop condition. Project instructions govern execution.

Reports may follow the caller's language; paths, identities, states, verdicts, and assurance tokens remain English.
