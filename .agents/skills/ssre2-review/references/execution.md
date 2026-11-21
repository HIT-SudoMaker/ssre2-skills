# SSRE2 Review Execution

Read only the section selected by the [Review method](method.md).

## Dimension evaluation

Give each executor the [Scientific Kernel](scientific-kernel.md), [Review method](method.md), and assigned operator
from [Dimensions](dimensions.md). Include the sealed Scope path and digest, pinned target and evidence locations,
Artifact Route, report language, **READ_ONLY** limit, and targeted-check policy. Reference shared evidence by
location in the prompt.

Use the Kernel's assurance rules. For **ISOLATED**, verify that inherited or reachable context excludes sibling
results. Receive the verdict, finding identities, **UNK**, input digest, and Artifact Route. Inspect the full result
for calibration. Send observation requests and reasoning corrections to the Scope owner.

Accept only Audits with the expected Scope digest, recorded actual assurance, and their own calibration basis.

## Targeted-check environment

Check existing evidence or an installed compatible environment first. If project instructions and policy permit a
temporary environment, time-box it outside the target and its dependency environment. Follow active network,
execution, approval, and resource limits.

Keep the target **READ_ONLY**. Record interpreter, manifest, commands, exit status, decisive output, and
environment differences, including failed setup. Stop at a discriminating observation, blocked setup, or the resource
limit. Return the **EVD** or located, claim-specific **UNK** to the Scope owner for succession. Continue independent
work.
