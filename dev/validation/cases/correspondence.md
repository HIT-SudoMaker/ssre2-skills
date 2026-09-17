# Design / Review language correspondence

## Decision

Keep the descriptions exactly as written:

- `Design scientific software before implementation`
- `Audit scientific software after implementation`

They have the right granularity and exact lexical balance: one action changes (`Design` / `Audit`), one temporal
relation changes (`before` / `after`), and the shared object (`scientific software` and `implementation`) stays
identical. Adding SSRE, evidence, federation, Astra, or a model name would make routing heavier and less durable.

The runtime body should be corresponding, not mechanically mirrored. Design and Review share identities and
scientific semantics, while their tense, authority and permissible conclusions differ.

This follows the advanced-model guidance used by the next-version analysis: keep applicability descriptions
short, disclose detailed instructions only when relevant, state decision and completion boundaries, and avoid
model-specific prompt forks. See OpenAI's
[Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)
and [latest model guide](https://developers.openai.com/api/docs/guides/latest-model). The guidance supports a
lighter interface; it does not license weaker source, evidence, authority or completion rules.

## Correspondence contract

| Stable semantic object | Design before implementation | Review after implementation | Boundary that must remain hard |
|---|---|---|---|
| Authority and domain | **Design Frame** freezes requested change, constraints and owner choices | **Scope** pins observed source, authority, domain and receipts | A Design choice is intent; a Review fact needs observation. |
| Scientific objects | **Prospective Scientific Map** states intended quantities, methods, regimes, states and correspondences | **Observed Scientific Map** records what the pinned source actually supplies | Preserve material IDs; re-observe every epistemic state. |
| Five Dimensions | **Design Projection** returns obligations, alternatives or unknowns | **Review Audit** returns a calibrated verdict, findings and gaps | A Projection cannot issue an implementation verdict; an Audit cannot silently redesign owner intent. |
| Evidence | **Evidence obligation / acceptance probe** says what could challenge the claim | **Receipt / evidence gap** records what was actually observed or blocked | A planned test is no receipt; a green same-path test is not automatically independent. |
| Ownership | **Owner decision** selects method, regime, lifecycle or module shape | **Observed owner intent / unresolved intent** limits interpretation | Review may advise repair but cannot invent authoritative scientific intent. |
| Change | **Implementation sequence and change probe** bound prospective propagation | **Located consequence and successor Scope** record actual propagation or drift | New material evidence reopens Review; a changed Design Frame reopens all Projections. |
| Completion | `READY`, `READY_WITH_OWNER_DECISIONS`, `BLOCKED` describe design usability | Complete or incomplete execution describes delivery; each Dimension has its own verdict | Completion state and scientific verdict are orthogonal and must not be made into a false pair. |

This table is a development oracle, not an automatic runtime addition. The current Shared Doctrine already
contains the essential compact rule: Frame → Scope, prospective Map → observed Map, obligation → receipt/gap,
stable IDs with fresh epistemic states, and no inherited proof or verdict.

## Reliability rules for future wording

1. Use the same noun for the same cross-mode identity: Scientific Map, claim, correspondence, Quantity Contract,
   method, regime, state and evidence.
2. Use mode-specific verbs for different authority: Design **defines, requires, proposes and plans**; Review
   **pins, observes, challenges, calibrates and reports**.
3. Preserve time and evidence asymmetry. `PROPOSED` does not become `OBSERVED` through handoff, and `READY` does
   not imply `PASS`.
4. Keep output names distinct and stable: `SSRE2-DESIGN.md`, `SSRE2-SCOPE.md`, `SSRE2-REVIEW.md`.
5. Match scientific scope, not step count. Design can have three protocol stages while Review has five because
   sealing, succession and verdict calibration are retrospective obligations.
6. Test any extra correspondence sentence as an ablation. It earns runtime bytes only if it prevents a measured
   identity, authority or evidence-state failure on the real target range.

## Current assessment

The descriptions and core nouns are already strong. `Design Projection` / `Review Audit` and prospective /
observed Map are especially reliable. The important remaining risk is behavioral: a model may preserve IDs while
carrying Design evidence states forward, or it may turn an Audit repair suggestion into design authority. Those
failures require handoff replays on pinned real repositories; more synonyms would make them harder to detect.

No runtime wording change is licensed by this language review alone. The next decision should come from paired
handoffs on Pint, mpmath, SciPy and Zarr, scored against the correspondence table above.
