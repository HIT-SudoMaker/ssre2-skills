# SSRE2 Review Dimensions

Every Review Audit receives the same sealed Review Scope (SSRE2-SCOPE.md), observed Scientific Map, Identity
Ledger, source identity, and Shared Doctrine. An Audit owns only its Scientific Dimension and applies the Review
Result Policy in contract.md. Under `ISOLATED`, sibling results are unavailable; under `BOUNDED`, they are
excluded inputs and the assurance limitation remains explicit.

Apply Shared Doctrine's Inspection grain to the Scientific Map. Follow local variables only when they are
load-bearing.

## Operator discipline

Return exactly one Review Result under contract.md. Cite Identity Ledger, probe, and source IDs rather than
restating shared facts. Expand only a decisive counterexample, material debt, or claim-specific evidence gap.
A code-review style preference or local name without scientific consequence is outside every operator.

The main session owns cross-Dimension relations. Audits return their facts without guessing same-locus,
reinforces, costs, requires, or unresolved links.

---

## Simple

Operator: do quantities, scientific facts, method choice, state, and complexity have explicit owners behind
deep modules?

Audit:

- Map owners for scientific objects, Quantity Contracts, measurement-unit conversions, methods, regime
  selection, lifecycle transitions, returned states, invariants, and evidence obligations.
- Inspect public module interfaces and scientific method names. Ask whether a caller can select the right
  method and interpret its returned state without learning incidental implementation.
- Apply the deletion test. A deep module earns its interface when deleting it makes scientific or coordination
  complexity reappear across callers.
- Trace one representative path from method selection through computation to returned scientific state.
- Locate duplicated load-bearing formulas, thresholds, dimensions, unit conversions, state rules, or selectors.
  Ignore incidental literal and local-variable duplication.

Verdict discipline: cite the complete duplicate-owner, shallow-interface, or propagation chain. A shorter
name or fewer files is not evidence of depth.

---

## Sonnet

Operator: do quantity, method, lifecycle, and state correspondences evolve faithfully while asymmetry remains
visible?

Audit:

- Read the Scientific Map as a grammar of Quantity Contracts, methods, regimes, lifecycle, and real axes.
- For every material quantity, method, or state correspondence, state the expected relation, unit normalization,
  and supported regime before comparing code paths or results.
- Check whether public method and state names communicate their scientific role without claiming false
  equivalence.
- Locate false correspondence that hides differences in regime, precision, representation, determinism,
  failure, or returned-state meaning.
- Locate unexplained divergence where related methods or lifecycle transitions should make a predictable
  relation visible.
- Check that selection, transition, and correspondence rules have one executable owner rather than shadow
  protocols.

Verdict discipline: name the violated correspondence, structural locus, and observable prediction failure.
Similarity is not required; faithful relation and explicit asymmetry are.

---

## Reliable

Operator: are dimensions, units, supported regimes, selection, invariants, lifecycle, failures, and re-entry
explicit and observable?

Audit:

- Recover Quantity Contracts, accepted units and aliases, normalization ownership, and tolerance units.
  Separate supported regimes from out-of-model reality and locate the owner of method selection.
- Reconstruct the material lifecycle state machine: legal transitions, invalid states, returned states,
  interruption, retry, and re-entry.
- Check invariants where they are established, restored, checked, and exposed through the responsible
  interface.
- Hunt high-consequence plausible garbage: wrong dimension, silent scale conversion, incompatible unit or
  coordinate comparison, wrong method beyond its regime, invalid state reuse, NaN/Inf, stale output, or
  misleading success.
- Probe one cheapest triggerable regime edge, lifecycle transition, or failure path for each load-bearing
  reliability claim still unresolved by static evidence.
- Fault-inject a real external seam only when its failure can alter a scientific state or claim; record disk
  and returned-state truth after interruption.

Verdict discipline: FAIL needs a triggerable path inside the claimed supported domain. Reality outside that
domain is a scope limit unless the implementation presents it as supported.

---

## Evidenced

Operator: does every load-bearing claim or correspondence have evidence able to challenge it?

Use every material `CLM` and `COR` from the frozen Identity Ledger. For each claim or correspondence:

- identify the strongest available analytic result, authoritative data, independent implementation, or
  measurement;
- look for high-yield dimensional invariants and quantity or method correspondence: unit-normalized agreement,
  limiting behavior, convergence, conservation, transformation, round trip, or complementary outputs;
- state the expected relation, independent unit normalization, and supported regime before comparing results;
- inspect shared formulas, shared data, copied expectations, tolerances, and other circularity risks;
- choose the cheapest missing probe that could contradict the claim, not a broad suite that only repeats it.

Tests, snapshots, coverage, and same-core comparisons remain consistency evidence. A second method or converted
result is not independent when it shares the defect-bearing formula, data, or conversion path.

Verdict discipline: carry an unproven ledger whatever the verdict. Every missing load-bearing claim or
correspondence gets a specific acquisition path and evidence-independence limit.

---

## Evolvable

Operator: does change along a real scientific axis stay bounded and predictable?

Audit:

- Enumerate only axes present in the Scientific Map: unit, decimal scale, method family, regime, representation,
  backend, precision, lifecycle state, or evidence source.
- Trace one material change through interfaces, semantic owners, selectors, transitions, returned states,
  tests, and scientific evidence.
- Test a representative extension such as adding a method, moving a regime limit, or changing returned-state
  representation. Propagation should stop at the relevant owners.
- Locate shadow selectors, duplicate state machines, compatibility wrappers, or registries with no second
  real adapter.
- Require an observed variation axis and two real adapters for every seam; a hypothetical domain or future
  Professor does not establish one.

Verdict discipline: return the actual traced modification set. Bounded explainable propagation is the goal;
zero touched files and speculative flexibility are not.
