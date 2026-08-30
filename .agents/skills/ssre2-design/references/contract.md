# SSRE2 Design Contract

SSRE2 Design is the prospective mode of Shared Doctrine. It turns scientific work that has not yet been
implemented into an architecture contract. It does not assign Review verdicts to an implementation that does
not exist.

Read Shared Doctrine before this file. This contract owns only the Design workflow.

## Interface

The caller provides:

1. the system or scientific change to design;
2. current authoritative material and locatable sources;
3. known scientific claims, constraints, and owner decisions;
4. readable existing code when the work extends a system;
5. an approved artifact location or enough project context to resolve one.

An optional codebase-design artifact may be supplied as a Sibling Reference. It may contribute general
Module and Interface facts, not scientific evidence or a runtime dependency.

Resolve the Artifact Route through Shared Doctrine. Design returns one SSRE2-DESIGN.md there; apart from that
artifact, the workspace remains unchanged.

## Workflow

### 1. Freeze the Design Frame

Recover the goal, source authority, scientific claims, supported domain, external constraints, existing
structure, and owner decisions. Run local read-only queries that can close material questions. Register what
remains as `UNKNOWN` under an `UNK` ID, state whether it blocks architecture, and give the cheapest closing path.

Use a Domain Professor only when the caller, repository, or an available cited resource supplies one. Record
its identity and state its proposals as DECLARED or INFERRED.

Completion criterion: every goal, supported-domain limit, scientific claim, constraint, and authoritative
source has a state and location; no unstated guess about owner intent remains.

### 2. Build the prospective Scientific Map

Populate every material Scientific Map term defined by Shared Doctrine. Inspect from high leverage to detail:

1. scientific objects, returned observables, and Quantity Contracts;
2. modules, interfaces, consequential method names, selectors, and computation owners;
3. methods, regimes, lifecycle, correspondences, invariants, and failures;
4. real variation axes and evidence able to challenge each load-bearing claim.

Use Shared Doctrine's Identity Ledger for material cross-mode identities.

Apply Trace closure while building the Map. Every material `CLM` and `COR` names what it is about and ends at
an `EVD` obligation or an `UNK` closing path. Reject dangling identities instead of treating a populated Ledger
as completeness.

Method names make their scientific role, regime, transition, or result distinguishable where that distinction
matters to callers or method selection. Reserve scientific naming obligations for a locatable consequence.

Trace local variables only when Shared Doctrine classifies them as load-bearing. Record a compact focus list
and the rationale for excluding incidental detail.

Completion criterion: the Scientific Map explains which quantity is represented in which unit, which method
computes it under which regime, through which lifecycle transition, and into which returned scientific state.
Cross-mode identities are stable and every missing material relation is an `UNKNOWN` `UNK` item.

### 3. Produce five Design Projections

Produce one Design Projection for each Scientific Dimension. All five receive the same frozen Design Frame
and Scientific Map; none consumes another Projection's conclusions:

- Simple proposes semantic owners and deep modules for quantities, conversions, methods, state, and evidence;
- Sonnet proposes faithful quantity, method, lifecycle, and state correspondences;
- Reliable proposes dimension, unit, regime, invariant, failure, invalid-state, and re-entry contracts;
- Evidenced proposes the cheapest evidence able to challenge each claim or correspondence after declared unit
  normalization;
- Evolvable traces a real change in unit, scale, method, regime, representation, or lifecycle state.

Apply Shared Doctrine's Execution economy and record `ISOLATED` or `BOUNDED` assurance. Inputs remain
identical and outputs remain Dimension-owned.

Each Projection cites Design Frame and Scientific Map IDs instead of restating shared facts. Return only added
obligations, alternatives, or `UNK` items. A compact NO_ADDITIONAL_OBLIGATION rationale is complete when the
Scientific Map already answers the question.

Completion criterion: all five Design Projections exist. Each contains a locatable obligation or an explicit
NO_ADDITIONAL_OBLIGATION rationale.

### 4. Synthesize deep scientific architecture

Form a small set of architecture directions and compare them using deletion tests, depth, locality, and real
adapters. The recommendation identifies:

- deep modules and semantic owners;
- each module interface, including Quantity Contracts, invariants, ordering, error modes, supported regimes,
  and returned states;
- seams only where at least two real adapters vary;
- method families, selection ownership, lifecycle, and state correspondence;
- evidence obligations and the cheapest decisive probes;
- prospective changes and their bounded propagation;
- Sibling References and their direct scientific consequences when present.

Prefer the fewest deep modules that keep semantic ownership coherent. Merge pass-through coordinators and
single-use policy wrappers into their owner unless a second real adapter or independently varying lifecycle
implementation justifies the seam. For compact work, describe only the interface decisions needed to implement
and review the change.

Keep sibling structure findings as pointers; include only their direct scientific consequences.

Completion criterion: deleting a recommended module makes the complexity it owns reappear across callers;
deleting an external workflow or Domain Professor leaves the SSRE2 kernel usable; every material alternative
records five-dimensional benefits, costs, dependencies, and unresolved effects.

### 5. Resolve owner decisions

Escalate only choices that change method ownership, supported regimes, lifecycle, evidence obligations, or
module shape. Give a recommended answer, its basis, and how the alternative changes the design. A local naming
preference that cannot change scientific interpretation is not a blocker.

Completion criterion: every material decision is resolved or explicitly marked as blocking.

### 6. Write the design artifact

SSRE2-DESIGN.md contains:

1. source identities, artifact location, execution assurance, and completion state;
2. Design Frame, focus, and `UNK` items;
3. prospective Scientific Map, Identity Ledger, and closed trace relations;
4. deep-module recommendation, real seams/adapters, and deletion tests;
5. five Design Projections and evidence plans;
6. federated hand-off, same-locus relations, alternatives, and owner decisions;
7. implementation sequence, prospective change probes, and acceptance obligations;
8. the basis for completion and a target-code non-mutation statement.

These are content obligations, not mandatory separate sections. Consolidate them, cite located evidence once,
and keep the artifact proportional to the scientific decision and implementation surface.

Reference the normative Shared Doctrine; do not redefine it in the report.

## Completion states

| State | Meaning |
|---|---|
| READY | All material decisions are resolved; an implementer can work from the contract. |
| READY_WITH_OWNER_DECISIONS | The recommendation stands, but listed owner choices change local module shape. |
| BLOCKED | Missing claims, constraints, regimes, lifecycle semantics, or authoritative decisions change the core architecture. |

## Completion checklist

Design stops only when every item is traceable in the artifact:

- the resolved Artifact Route and run identity are recorded;
- architecture focus reaches quantities, dimensions, units, methods, regimes, lifecycle, returned states, and
  evidence without an incidental variable census;
- each Scientific Dimension has a Design Projection or NO_ADDITIONAL_OBLIGATION rationale;
- every material `CLM` and `COR` has an `about` relation and an `EVD` obligation or `UNK` closing path;
- every claim and quantity, state, or method correspondence has an owner, behavioral contract, and evidence plan;
- every real variation axis has a prospective probe and every real asymmetry appears in the register;
- every interaction and `UNK` item has a state, and every blocker has the cheapest closing path;
- sibling software and SSRE2 scientific judgments remain federated rather than merged;
- the completion state matches owner decisions;
- the artifact states that target code was not modified.

Implementation and refinement are later work.
