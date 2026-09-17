# SSRE2 Design Contract

This contract owns prospective design. Inputs are the requested scientific change, available authority/source,
constraints and repository context. Output is SSRE2-DESIGN.md; implementation verdicts are outside this mode.

## Protocol

### 1. Freeze the Design Frame and Scientific Map

Establish the goal, authority order, requested claims, supported domain, constraints and owner decisions. Inspect
available source read-only to close routine gaps. Record each unresolved material choice as `UNK` with its effect
and cheapest closing path.

Build one prospective Scientific Map at Shared Doctrine's inspection grain. Required intake accounts for every
caller-requested scientific claim and every scientific promise encountered on the inspected public surface:
request/source location → `CLM`/`COR` plus regime, or an explicit exclusion with its scope basis. Missing evidence
creates an `UNK`; it does not exclude a promise.

Apply the Identity Ledger and Trace closure. Each claim/correspondence has an owner, behavioral contract and
evidence obligation. The Map states what is computed, in which units, by which method, under which regime and
into which state.

### 2. Produce five Design Projections

On the same frozen Frame and Map, answer:

- **Sonnet:** faithful quantity/method/state relations and responsibility handoffs.
- **Simple:** coherent scientific owners behind deep modules.
- **Reliable:** explicit unit, regime, invariant, failure, invalid-state and re-entry contracts.
- **Evidenced:** evidence able to challenge every claim/correspondence after declared normalization.
- **Evolvable:** bounded propagation and a probe for every real change axis.

Each Projection cites Map IDs and returns obligations, alternatives or unknowns. Use
`NO_ADDITIONAL_OBLIGATION` with a cited basis when the Map already supplies the answer. All five must use the
same inputs; sibling conclusions supply no Projection evidence.

### 3. Resolve the scientific architecture

Compare material alternatives by depth, deletion tests, locality and observed variation. Recommend the fewest
justified modules and name their owners, Interfaces, method selection, lifecycle, evidence and change propagation.
Interfaces carry Quantity Contracts, invariants, ordering, failure modes, supported regimes and returned states.
Apply the Adapter Seam rule.

Choices that change ownership, method, regime, lifecycle, evidence or module shape remain owner decisions; give
a recommendation and basis. A material choice that changes the Frame or Map reopens all five Projections.
Delivered revisions use a new run and preserve material IDs.

## Completion gate

Resolve the Artifact Route before writing. SSRE2-DESIGN.md must make these obligations traceable:

- source/run/route, assurance, completion state and target non-mutation;
- Frame, Map, intake coverage, focus, trace relations, five Projections and evidence plans;
- architecture, Interfaces, deletion tests, alternatives, cross-effects and owner decisions;
- implementation sequence, acceptance/change probes and unresolved questions with closing paths.

These are content obligations, not required section titles. Cite shared facts once and expand only decisions,
decisive evidence obligations and unresolved gaps.

| State | Meaning |
|---|---|
| READY | All material decisions resolved; implementation can proceed from the contract. |
| READY_WITH_OWNER_DECISIONS | Recommendation stands; listed choices change local module shape. |
| BLOCKED | Missing claims, constraints or decisions change the core architecture. |

Completion requires the actual artifact path, every obligation above, all five Projections on one Map, and a
state consistent with open owner choices. Otherwise preserve the work and report incomplete delivery with its
closing path.
