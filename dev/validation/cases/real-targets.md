# Real scientific repository targets

Release-grade SSRE2 behavior claims use public scientific repositories. Local fixtures may exercise harness
branches, but they do not establish scientific defect recall, clean-control precision, Design quality, or
federation benefit.

All pins below identify repository history, not installed package versions. A target is eligible for blind model
replay after its source identity, module-sized scope, brief and hidden grading criteria are frozen. Local execution
is optional evidence acquisition and never a prerequisite for Design, Review or federation replay.

## Initial range

| ID | Range | Repository history | Defective / control pins | Independent discriminator |
|---|---|---|---|---|
| `RT-NEG-PINT-966` | R0 negative boundary | Pint [PR 966](https://github.com/hgrecco/pint/pull/966), documentation-only handling of a NumPy MaskedArray compatibility change | `c99573d1167fa664b7b7c14b9e4d9a8ffa8ac6a3` → `58cce931deaa8811bd4ef613da28847d5c591254` | Predeclared no-finding boundary: no new falsifiable scientific behavior is implemented, so SSRE2 must not manufacture a scientific defect or second architecture owner. |
| `RT-QTY-PINT-2108` | R1 quantity, scale and precision | Pint [issue 2107](https://github.com/hgrecco/pint/issues/2107) / [PR 2108](https://github.com/hgrecco/pint/pull/2108) | `ef77491dfd8b0f1fb84e0fc1ecf9c43a0a3345bc` → `471abc80c2e28c08531d32ddc3ca381cae61c4bf` | Exact rational identities such as `1 inch = 1000 thou` and `1 L/h = 24 L/day`, checked with `Decimal` and rational arithmetic outside Pint. Adjacent floating-point cases remain separate claims, not evidence that the whole module is clean. |
| `RT-MTH-MPMATH-1083` | R2 method correctness | mpmath [issue 983](https://github.com/mpmath/mpmath/issues/983) / [PR 1083](https://github.com/mpmath/mpmath/pull/1083) | `fbf61435bfd1cd0ed860c0bb8190bc19c8b029f7` → `b5a075fa534992efe138ff5c61aa405df2fa998a` | Substitute the returned solution into the original linear system and compare with an exact-solvable oracle; do not copy the implementation's intermediate formula. |
| `RT-REG-SCIPY-18896-19111` | R3 regime selection and R6 change propagation | SciPy [issue 18793](https://github.com/scipy/scipy/issues/18793) / [PR 18896](https://github.com/scipy/scipy/pull/18896), followed by regression [issue 19103](https://github.com/scipy/scipy/issues/19103) / [PR 19111](https://github.com/scipy/scipy/pull/19111) | Pair A: `defcb37766e99d77e1997728d65a890efe895074` → `ba761d8c0ff08d836834e1a87af3565f5bd6b7d9`; pair B: `41c61b2de9a2dbef6705f961fe6836f1b5916d31` → `d2ab591e734c656c5f91214b0850323bd2a9a35c` | A linked two-fix history: the first fix improves a near-bound solution but breaks an exactly-on-bound start; the second fix uses the smallest representable inward step and retains both regression cases. Score both regimes independently and restrict comparison to the scoped implementation and tests. |
| `RT-STA-ZARR-3412` | R5 lifecycle, failure and persistent truth | Zarr [issue 3411](https://github.com/zarr-developers/zarr-python/issues/3411) / [PR 3412](https://github.com/zarr-developers/zarr-python/pull/3412) | `c9509ee4416499e0b9bf735acb0820d989a61ebe` → `96a531bf3b60e556504733c306c27fa6892e07ba` | Inject a write failure before replacement and verify the public path is either absent or complete. The PR explicitly excludes efficient partial writes, so that boundary remains visible rather than being scored as fixed. |

R4 evidence independence is an experimental condition applied to the efficacy cases: compare repository tests,
issue examples, and an independently specified oracle. R7 federation integrity runs standalone lanes, later
artifact intake, and simultaneous co-invocation on the same exact source identity. Freeze each lane before
aggregation, preserve Standards, Spec and five scientific judgments separately, and include a deliberately
mismatched artifact control. Neither condition requires an invented scientific codebase.

## Eligibility classes

- **Negative boundary:** a real scientific repository change with no in-scope falsifiable scientific behavior.
  Freeze source, scope and a predeclared no-finding boundary. It needs no scientific reproduction or oracle.
- **Scientific efficacy:** a real issue/specification and pinned source history with a hidden independently
  adjudicated claim/regime oracle. Historical repair evidence may grade the model after outputs freeze; local
  execution is requested only when a decisive observation is still needed.
- **Protocol control:** a missing route, source mismatch, late evidence, unavailable isolation or interruption
  injected around a real snapshot. It scores recovery and authority boundaries, never scientific quality.

## Control semantics

A post-fix pin is a **claim-bounded clean control**. It is clean only for the pre-registered claim and regime.
Later issues or unrelated defects do not invalidate that control, and the control never licenses a whole-module
or whole-repository PASS.

For Design runs, expose the issue brief and pre-fix source while hiding the merged repair. Compare the frozen
Design artifact with the repair only after delivery. For Review runs, expose the selected diff or snapshot but
keep the grading oracle and successor history hidden until all five results freeze.

Every blind replay supplies:

- a real repository identity, exact exposed source pin/diff, module-sized scope and verbatim brief;
- hidden grading criteria frozen before the model run;
- skill/model/host identities, output paths, assurance and target non-mutation receipts;
- an explicit eligibility class and scientific-denominator membership.

Every scientific efficacy case additionally supplies a public issue/specification, pre-fix and fixed history,
claim-bounded clean control, independent claim/regime oracle and an adjacent hard negative when available.
Commands, environments and decisive outputs are recorded only for a requested probe; `not_requested` is a valid
probe state.

## MacBook execution profile

Static blind replay is platform-independent and starts with the pinned source packages. When a decisive probe is
requested, prefer the lowest-cost compatible target: mpmath, Pint and Zarr should be simpler on Apple silicon.
For SciPy probes, record Python, NumPy, BLAS/LAPACK, compiler or binary distribution, and machine architecture.
An emulated x86_64 probe is a different environment identity and must be reported separately.

The harness exposes an immutable snapshot and writes only to a run directory or allowed temporary directory. If
a probe is requested, its environment stays outside the target and receives a separate identity. Controller
injections score protocol recovery and mutation boundaries only; they do not increase the scientific denominator.
