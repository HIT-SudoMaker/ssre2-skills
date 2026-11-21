# SSRE2 Language

SSRE2 uses one canonical language for its Scientific Kernel, two methods, and run artifacts. Reports use the full
terms; machine identities use the listed prefixes plus readable slugs.

## Scientific reasoning

**Target**:
The immutable source, artifact, or frozen SSRE2 snapshot being designed or reviewed.
_Avoid_: Live source, approximate revision

**Scientific object**:
A quantity, method, observable, state, or transition whose meaning matters to the target.
_Avoid_: Item, generic entity

**Regime**:
Supported scientific conditions together with the owner of method selection within them.
_Avoid_: Mode, context

**Method family**:
Materially different computations for one scientific object or observable.
_Avoid_: Backend list, implementation registry

**Claim (CLM)**:
A falsifiable scientific property or behavior under a stated regime.
_Avoid_: Promise without conditions, generic expectation

**Correspondence (COR)**:
A falsifiable quantity, method, or state relation that states preserved and changed meaning.
_Avoid_: Similarity, shared Interface

**Evidence plan (EVD)**:
A prospective Design record of a result able to challenge a claim or correspondence.
_Avoid_: Evidence result, planned proof

**Evidence (EVD)**:
A located observation, analytic result, authoritative datum, independent implementation, or measurement able to
support or contradict a claim or correspondence.
_Avoid_: Proof when the basis is not conclusive, same-path test by default

**Unknown (UNK)**:
A registered material question or evidence gap with its consequence and cheapest executable closing path. UNK is
a record; UNKNOWN is an epistemic state.
_Avoid_: Empty field, silent omission

**Blocker**:
An unmet run prerequisite that prevents artifact delivery.
_Avoid_: Any unresolved scientific question

**Open Item**:
A Run Summary projection of one registered Unknown, Decision, or Blocker that retains its kind, affected result,
blocking values, and closing path.
_Avoid_: Merged unresolved state, duplicate scientific record

**Basis**:
The origin of resolved knowledge: authority, observation, or derivation.
_Avoid_: Proposal, inherited conclusion

**Epistemic state**:
One of OBSERVED, DECLARED, INFERRED, UNKNOWN, or PROPOSED, describing how a fact is known.
_Avoid_: Confidence score

**Dimension**:
One independent SSRE2 operator: Sonnet (SON), Simple (SIM), Reliable (REL), Evidenced (EVI), or Evolvable (EVO).
_Avoid_: Score, compensating category

**Verdict**:
One Review Dimension result: PASS, UNPROVEN, or FAIL. Architecture debt remains a Finding.
_Avoid_: Aggregate score, run completion

**Finding**:
A located consequence, contradiction, unknown, or non-blocking debt reported by one Dimension.
_Avoid_: Issue without a scientific consequence

**Decision**:
An owner choice that selects scientific meaning, regime, method, lifecycle, evidence, or Module shape.
_Avoid_: Assumption when owner authority is required

**Proposal**:
A Design or repair option offered for owner selection.
_Avoid_: Observation, implementation evidence

## Structure and closure

**Scientific Kernel**:
The single SSRE2 rule set for scientific identities, states, evidence, closure, and five Dimensions.
_Avoid_: Separate Design and Review doctrines

**Scientific Map**:
The run's structured inventory of scientific objects, regimes, claims, correspondences, owners, evidence, and
unknowns.
_Avoid_: Checklist, duplicate fact table

**Identity Ledger**:
The stable registry of CLM, QTY, UNT, MTH, REG, STA, TRN, COR, EVD, and UNK identities across runs.
_Avoid_: Display numbering without succession

**Trace closure**:
The property that every material CLM or COR names its subject and ends at challenging EVD or executable UNK.
_Avoid_: Completeness score, dangling identity

**Quantity Contract (QTY)**:
The scientific role, dimension, unit and scale, representation, and material shape, coordinates, precision,
tolerance, or uncertainty of a physical value.
_Avoid_: Unit string alone

## Methods and lifecycle

**Design**:
The prospective method that freezes a Design Frame and produces five Projections before implementation.
_Avoid_: Review, implementation

**Review**:
The retrospective method that seals an observed Scope and produces five Audits after implementation.
_Avoid_: Design, repair

**Design Frame**:
The frozen request, authority order, target identity, regimes, constraints, and owner decisions used by Design.
_Avoid_: Review Scope

**Scope**:
The sealed Review artifact containing target identity, authority, Scientific Map, evidence identities, and focus.
_Avoid_: Live working state, Design Frame

**Projection**:
One Design Dimension's prospective obligations, alternatives, decisions, proposals, and unknowns.
_Avoid_: Implementation verdict

**Audit**:
One Review Dimension's verdict, evidence, findings, and unknowns on a sealed Scope.
_Avoid_: Design Projection

**Run result**:
Delivered artifacts or incomplete work with explicit blockers and recovery paths.
_Avoid_: Scientific verdict, implementation readiness

**Run Summary**:
The minimal public return locating a run's artifacts, mode outcome, assurance, material Open Items, Use Record, and
runtime provenance.
_Avoid_: Full report, second Scientific Map

**Successor**:
A new run created after material source, evidence, regime, claim, or state change while preserving its predecessor.
_Avoid_: In-place edit of a sealed run

**Reflexive closure**:
Self-application to frozen SSRE2 bytes with target/executor separation and no self-produced independent proof.
_Avoid_: Self-validation, live self-inclusion

**Artifact Route**:
The run-specific directory where SSRE2 may write artifacts while the target remains READ_ONLY.
_Avoid_: Target directory mutation

**Targeted check**:
The smallest authorized observation able to change a material state or verdict, with a stop condition.
_Avoid_: Open-ended probe

**Assurance**:
The requested and actual separation of Dimension evaluation: BOUNDED result exclusion or ISOLATED contexts.
_Avoid_: Model quality, scientific evidence

## Safe use and Federation

**Use Record**:
The per-run projection of intended use, accepted inputs, supported setting, reference evidence, known limits,
human responsibility, and lifecycle monitoring.
_Avoid_: Required caller form, second Scientific Map

**Federation**:
The protocol for relating independently owned review lanes after their results freeze.
_Avoid_: Shared verdict engine, runtime dependency

**Sibling Reference**:
A Federation reference carrying source identity, inspection coverage, and located facts, but no transferable
judgment.
_Avoid_: Imported verdict, scientific proof
