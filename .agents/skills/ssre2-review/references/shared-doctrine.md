# SSRE2 Shared Doctrine

This file defines only the semantics shared by SSRE2 Design and SSRE2 Review. Both entrypoints read it before
their own contract; stages, artifact names, and verdict mechanics remain owned by the relevant mode.

## Scope and authority

SSRE2 applies when work contains at least one scientific claim: a falsifiable statement made by code,
documentation, tests, or results about mathematics, empirical facts, model behavior, or the real world.

SSRE2 may analyze, design, and judge. It may propose concrete structures and implementation changes, but its
target-code effect is always READ_ONLY.

## Federated role

Codebase design owns Module depth, Interfaces, Seams, Leverage, and Locality. Code review owns repository
Standards and Spec fidelity. SSRE2 owns the scientific lane: Quantity Contracts, supported domains,
computational methods, lifecycle, correspondence, and evidence able to challenge scientific claims.

The lanes may share a pinned source identity, architecture facts, and artifact references. They keep their
judgments separate: a sibling-lane finding cannot prove or disprove a scientific claim, and an SSRE2 verdict does
not decide general code quality or workflow readiness. The process owner may relate same-locus findings
without merging, reranking, or compensating for either lane.

SSRE2 has no runtime dependency on a particular design, review, or orchestration skill.

A **Sibling Reference** is an optional artifact pointer with a source identity and, when available, a located
locus. Codebase design may supply Module and Interface facts; code review may supply
separate Standards and Spec judgments. SSRE2 relates these only after its own Dimension outputs are frozen,
and only by reference or validated same-locus. A sibling judgment never enters the scientific evidence chain.

## Shared epistemic states

Every load-bearing statement uses one of these states:

| State | Meaning |
|---|---|
| OBSERVED | Directly supported by a locatable artifact or an executed probe. |
| DECLARED | Stated by an authoritative document or owner; not proof that implementation matches intent. |
| INFERRED | Derived from listed evidence and traceable to its premises. |
| UNKNOWN | Current material cannot decide the matter; provide the cheapest closing path. |
| PROPOSED | A design or repair offered by SSRE2 for owner selection. |

Pre-implementation assumptions and post-implementation contradictions map to these states. Fluent prose is
never a substitute for evidence.

## Scientific correspondence kernel

A **Scientific Map** is the shared semantic interface: a frozen, locatable map of the scientific objects,
Quantity Contracts, methods, regimes, lifecycle, correspondences, owners, claims, and evidence in scope. Build
it from architecture rather than a census of code tokens:

- **Scientific object** — the system, structure, model, field, observable, or result being represented.
- **Quantity Contract** — a physical value's scientific role, dimension, measurement unit, scale,
  representation, and material coordinate, shape, uncertainty, or tolerance semantics.
- **Method family** — materially different computational methods that address the same object or observable.
- **Regime** — the supported-domain conditions under which a method is intended to apply; a selector may be
  explicit in code or implicit in caller choice.
- **Scientific lifecycle** — the material states of preparation, computation, validation, interpretation,
  publication, and re-entry, using only the states the project actually supports.
- **Quantity correspondence** — the expected preservation of scientific role, dimension, and normalized value
  across accepted units or representations.
- **State correspondence** — how inputs, intermediate scientific states, and returned results map across
  lifecycle transitions and method families.
- **Method correspondence** — the expected relation between methods: agreement on overlap, a limiting or
  refinement relation, a representation transform, complementary outputs, or another domain-supported
  relation. Use duality only when an authoritative domain meaning establishes an actual duality.

The Scientific Map carries one **Identity Ledger**. Assign IDs only to material items that must survive a
handoff or review round:

| Prefix | Identity |
|---|---|
| `CLM` | scientific claim |
| `QTY` / `UNT` | Quantity Contract / accepted measurement unit or alias |
| `MTH` / `REG` | method / supported regime |
| `STA` / `TRN` | lifecycle state / transition |
| `COR` | quantity, state, or method correspondence |
| `EVD` | evidence obligation or result |
| `UNK` | unresolved material question |

### Trace closure

The Scientific Map is a relation graph, not an inventory. Every material `CLM` or `COR` has:

- an `about` relation to at least one relevant `QTY`, `UNT`, `MTH`, `REG`, `STA`, or `TRN` identity; and
- either a `challenged-by` relation to an `EVD`, or an `unresolved-by` relation to an `UNK` with the cheapest
  executable closing path.

Every `EVD` targets at least one `CLM` or `COR`; every material semantic identity participates in a located
claim or correspondence. A dangling identity is a Map defect, not completeness.

Design records an `EVD` as a prospective evidence obligation. Review re-observes that identity as a located
receipt, contradiction, or explicit evidence gap. Reusing an ID preserves traceability, never epistemic state.

A **Domain Professor** is an optional, cited domain reference or expertise provider. It may propose canonical
vocabulary, Quantity Contracts, methods, regimes, lifecycle meanings, and candidate evidence. Its guidance
enters as DECLARED or INFERRED, never as proof, and the kernel remains usable without one.

## Quantity and dimensional semantics

Treat every load-bearing physical value as a Quantity Contract, not a bare number.

A quantity value is the product of a numerical value and a unit. Dimension identifies the kind of physical
dependence; unit and prefix select its scale. The unit symbols `m`, `µm`, `nm`, and `pm` therefore share the
length dimension while representing different decimal scales. In SI notation, separate a numerical value from
its unit symbol with a space, attach a prefix directly to its unit symbol, and preserve case. The formal micro
prefix symbol is `µ`; an ASCII spelling such as `um` is an encoding alias only when an interface or schema
declares and normalizes it.

Dimensional compatibility is necessary but not sufficient: distinct quantities may have the same dimension.
Method, field, and result names carry the quantity's scientific role; unit metadata carries its measurement
scale. Give conversion, normalization, and accepted aliases one semantic owner, make scale changes observable,
and compare quantities only after conversion to a declared compatible unit. Apply the same discipline to
non-SI and quantities with unit one; dimensionless does not mean semantically anonymous.

## Inspection grain

Default attention goes to the Scientific Map, modules and interfaces, scientifically consequential method
names, method-family selection, supported-domain limits, lifecycle transitions, returned scientific states,
invariants, and evidence. Prioritize public methods, selectors, computation owners, and unit-conversion seams
over incidental helpers.

Names are evidence of intended architecture, not proof. Inspect a method name when it communicates scientific
role, regime, transition, or returned state. A naming concern becomes load-bearing only when it can misroute a
method, hide a regime, confuse a state, duplicate ownership, or make a scientific claim untraceable.

Inspect a local variable and its name only when it carries scientific meaning that can change a claim: quantity
kind, dimension, unit, scale, coordinates, shape, precision, tolerance, regime selection, lifecycle state,
invariant, randomness, or a scientific result. Incidental temporaries, loop indices, and mechanically renamed
locals remain outside the focus unless a located defect makes them consequential.

## Five Scientific Dimensions

A **Scientific Dimension** is one stable question asked in both modes. A **Design Projection** returns its
prospective obligations; a **Review Audit** returns its retrospective Review Result. All five receive one
frozen Scientific Map and evidence snapshot, and no Dimension may authorize, overwrite, or compensate for
another.

| Dimension | Shared question |
|---|---|
| **Simple** | Do quantities, scientific facts, method choice, state, and complexity have explicit owners behind sufficiently deep modules? |
| **Sonnet** | Do quantity, method, lifecycle, and state correspondences evolve faithfully while real asymmetries remain visible? |
| **Reliable** | Are dimensions, units, supported regimes, selection, invariants, lifecycle, failures, and re-entry explicit and observable? |
| **Evidenced** | Does every load-bearing scientific claim or correspondence have evidence able to challenge it? |
| **Evolvable** | Do real axes such as unit, scale, method, regime, representation, and state have owners with bounded propagation? |

The fixed order SIM → SON → REL → EVI → EVO stabilizes presentation only. It expresses no dependency,
importance, or verdict priority.

## Mode correspondence

Design and Review form a faithful pair, not identical workflows:

| Design | Review | Preserved identity |
|---|---|---|
| prospective Design Frame | pinned Review Scope | claim, authority, supported domain |
| prospective Scientific Map | observed Scientific Map | Identity Ledger |
| proposed Quantity Contracts | observed inputs, conversions, and results | `QTY` and `UNT` IDs |
| proposed method family and regime | observed implementation and selector | `MTH` and `REG` IDs |
| proposed lifecycle and correspondence | observed transitions and returned states | `STA`, `TRN`, and `COR` IDs |
| Design Projection | Review Audit | Scientific Dimension |
| evidence obligation | receipt, contradiction, or explicit gap | `EVD` target and provenance |
| Design completion | five Review Results | no promotion from intent to proof |

Review may reuse Design identities, but a Design statement remains DECLARED until independently re-observed.

## Sonnet kernel

Sonnet means evolvable faithful correspondence, not structural symmetry. It imposes six obligations:

1. **Grammar** — Quantity Contracts, methods, stages, states, and real variation axes are locatable.
2. **Ownership** — each domain judgment has one semantic owner; raw observations may have many consumers.
3. **Closure** — a known closed domain has one source of truth; callers do not guess legal combinations.
4. **Rhythm** — the core flow follows data, proof, and lifecycle dependencies.
5. **Faithful asymmetry** — differences in regime, precision, mechanism, certainty, failure, or re-entry are
   named and localized.
6. **Enforcement** — material correspondences have executable checks or negative-space guards.

Preserve real asymmetry. A mirrored role or uniform interface requires domain evidence that its meanings match.

## Non-compensation and synthesis

One architectural fact may support independent judgments in several dimensions. Each judgment keeps its own
dimension, claim, evidence, and state. Synthesis may connect them only through explicit relations:

- same-locus — judgments point to the same architectural location or missing decision;
- reinforces / costs — a proposal helps or harms a dimension;
- requires — a proposal depends on another decision or item of evidence;
- unresolved — the interaction cannot yet be predicted honestly.

Synthesis does not compute an aggregate score, choose a winning dimension, or remove a judgment because one
repair might address several dimensions.

## Evidence independence

Tests, coverage, green CI, or same-path replay establish consistency or regression stability; they do not
automatically establish scientific correctness. Design plans evidence able to challenge the implementation.
Review distinguishes independent oracles and differential or metamorphic relations from shared-source
self-confirmation.

A module's interface is the scientific test surface. Challenge observable Quantity Contracts, method selection,
lifecycle transitions, and returned states through the same interface callers use; implementation-level checks
locate causes but do not replace interface-level evidence.

Quantity Contracts and method families create high-leverage evidence opportunities: dimensional invariants,
unit-normalized agreement, convergence to a known limit, conserved quantities, reversible transforms, or
independently implemented results. State the expected relation, unit normalization, and supported regime before
comparison.

## Artifact Route

Resolve one run-scoped artifact directory before analysis: explicit caller directory, then a documented
repository convention, then an allowed workspace supplied by the active workflow. If none exists, mark
`Artifact Route` as an `UNKNOWN` `UNK` item, ask once, and stop.

The canonical directory is not the repository root. Keep it inside the allowed location, allocate a new run,
and preserve existing artifacts. Put scratch output in an existing ignored workspace or OS temporary storage.
Reports use the caller's language while paths, identifiers, epistemic states, completion states, and verdicts
remain English.

## Execution economy

The five Scientific Dimensions are a semantic interface, not a mandatory five-agent topology. Build shared
deterministic facts once, then preserve judgment independence through frozen inputs and named outputs.

Record execution assurance honestly. `ISOLATED` means each Dimension ran in a separate context that could not
read sibling judgment. `BOUNDED` means ordered passes shared a context: each pass consumes only the frozen Map
and its own operators, but cognitive isolation is not claimed. Use `ISOLATED` when consequence or contamination
risk earns its cost; otherwise use `BOUNDED` and retain the limitation in the artifact.

Prefer the smallest observation or probe capable of changing a claim state or verdict. Start with the Scientific
Map and existing evidence; escalate to execution or an independent oracle only for unresolved load-bearing
claims. Stop when the decisive basis and missing-evidence check are complete.

Scale architecture and report detail to the consequence of the decision. For compact work, use the fewest deep
modules that preserve clear semantic ownership; every proposed module passes a deletion test. Include code
sketches, type catalogs, or extension seams only when they close a material interface, regime, lifecycle, or
evidence choice.

Efficiency never permits dropping a dimension, hiding an UNKNOWN, treating same-path evidence as independent,
or replacing a scientific consequence with a style preference.
