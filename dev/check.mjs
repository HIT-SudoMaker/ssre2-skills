import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { cp, mkdir, mkdtemp, readFile, readdir, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsRoot = join(root, ".agents", "skills");
const expectedSkills = ["ssre2-design", "ssre2-review"];
const expectedDescriptions = {
  "ssre2-design": "Design scientific software before implementation",
  "ssre2-review": "Review scientific software after implementation",
};
const releaseEntries = [".agents", ".gitignore", "GLOSSARY.md", "LICENSE", "README.md", "dev", "package.json"].sort();
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

function frontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return null;
  return Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .map((line) => line.match(/^([a-z0-9_-]+):\s*(.+)$/))
      .filter(Boolean)
      .map((entry) => [entry[1], entry[2].trim()]),
  );
}

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...(await walk(path)));
    else output.push(path);
  }
  return output;
}

async function digest(path) {
  return createHash("sha256").update(await readFile(path)).digest("hex");
}

async function validateSkill(name) {
  const skillRoot = join(skillsRoot, name);
  const skillPath = join(skillRoot, "SKILL.md");
  const markdown = await readFile(skillPath, "utf8");
  const fields = frontmatter(markdown);

  check(fields !== null, `${name}: missing YAML frontmatter`);
  if (fields) {
    check(fields.name === name, `${name}: frontmatter name must match its directory`);
    check(fields.description === expectedDescriptions[name], `${name}: shared description drifted`);
    check(!("disable-model-invocation" in fields), `${name}: non-standard frontmatter field`);
  }
  console.log(`${name}: entrypoint ${Buffer.byteLength(markdown)} bytes (metric, not a quality threshold)`);

  const ui = await readFile(join(skillRoot, "agents", "openai.yaml"), "utf8");
  check(ui.includes(`$${name}`), `${name}: default_prompt must mention $${name}`);
  const shortDescription = ui.match(/short_description:\s*"([^"]+)"/)?.[1];
  check(shortDescription === expectedDescriptions[name], `${name}: host descriptions diverged`);
  check(/allow_implicit_invocation:\s*false/.test(ui), `${name}: explicit invocation policy changed`);

  for (const file of await walk(skillRoot)) {
    const text = await readFile(file, "utf8");
    check(!/[\u3400-\u4dbf\u4e00-\u9fff]/u.test(text), `${name}: runtime content must be English: ${file}`);
    if (!file.endsWith(".md")) continue;
    check(
      !/(?:\.claude\/|code\/docs|code\/scripts|skill-calibration|history\/)/i.test(text),
      `${name}: stale development path in ${file}`,
    );
    for (const match of text.matchAll(/\]\((?!https?:|#)([^)#]+)(?:#[^)]+)?\)/g)) {
      const target = resolve(dirname(file), decodeURIComponent(match[1]));
      const local = relative(skillRoot, target);
      check(local !== ".." && !local.startsWith(`..${sep}`) && !isAbsolute(local),
        `${name}: reference leaves independently installable skill: ${match[1]}`);
      check(await exists(target), `${name}: broken reference ${match[1]} in ${file}`);
    }
  }
}

function runSkillsCli(args, cwd) {
  if (!process.env.npm_execpath) {
    return {
      status: null,
      stdout: "",
      stderr: "release:check must be invoked through npm",
    };
  }
  return spawnSync(process.execPath, [
    process.env.npm_execpath,
    "exec",
    "--yes",
    "--package=skills@latest",
    "--",
    "skills",
    ...args,
  ], {
    cwd,
    encoding: "utf8",
  });
}

async function compareInstalledTree(sourceRoot, installedRoot, label) {
  check(await exists(installedRoot), `${label}: missing installed skill directory`);
  if (!(await exists(installedRoot))) return;

  const sourceFiles = await walk(sourceRoot);
  const installedFiles = await walk(installedRoot);
  check(sourceFiles.length === installedFiles.length, `${label}: installed file count drifted`);

  for (const source of sourceFiles) {
    const path = relative(sourceRoot, source);
    const installed = join(installedRoot, path);
    check(await exists(installed), `${label}: omitted ${path}`);
    if (await exists(installed)) {
      check((await digest(source)) === (await digest(installed)), `${label}: changed ${path}`);
    }
  }
}

async function validateEcosystemInstall(sourceRoot) {
  for (const selection of [[expectedSkills[0]], [expectedSkills[1]], expectedSkills]) {
    const sandbox = await mkdtemp(join(tmpdir(), "ssre2-release-check-"));
    const label = selection.join(" + ");
    try {
      const installed = runSkillsCli([
        "add", sourceRoot, ...selection.flatMap((name) => ["--skill", name]),
        "--agent", "codex", "--agent", "claude-code", "--yes",
      ], sandbox);
      check(installed.status === 0,
        label + ": skills CLI install failed:\n" + (installed.stdout ?? "") + "\n" + (installed.stderr ?? ""));
      if (installed.status !== 0) continue;

      for (const [host, directory] of [["Codex", ".agents"], ["Claude Code", ".claude"]]) {
        for (const name of expectedSkills) {
          const destination = join(sandbox, directory, "skills", name);
          if (selection.includes(name)) {
            await compareInstalledTree(join(sourceRoot, ".agents", "skills", name), destination,
              label + " / " + host + " / " + name);
          } else {
            check(!(await exists(destination)), label + ": installed unrequested sibling " + name);
          }
        }
      }
      console.log("Installation checked: " + label + " (Codex and Claude Code)");
    } finally {
      await rm(sandbox, { recursive: true, force: true });
    }
  }
}

async function validateReleaseProjection() {
  const sandbox = await mkdtemp(join(tmpdir(), "ssre2-release-projection-"));
  const releaseRoot = join(sandbox, "release");
  try {
    await mkdir(releaseRoot);
    for (const entry of releaseEntries) {
      if (entry === "dev") {
        await mkdir(join(releaseRoot, "dev"));
        await cp(join(root, "dev", "check.mjs"), join(releaseRoot, "dev", "check.mjs"));
        await cp(join(root, "dev", "validation"), join(releaseRoot, "dev", "validation"), { recursive: true });
      } else {
        await cp(join(root, entry), join(releaseRoot, entry), { recursive: true });
      }
    }
    const actual = (await readdir(releaseRoot)).sort();
    check(JSON.stringify(actual) === JSON.stringify(releaseEntries), `release projection drifted: ${actual.join(", ")}`);
    await validateEcosystemInstall(releaseRoot);
  } finally {
    await rm(sandbox, { recursive: true, force: true });
  }
}

const actualSkills = (await readdir(skillsRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
check(JSON.stringify(actualSkills) === JSON.stringify(expectedSkills), `unexpected skill set: ${actualSkills.join(", ")}`);

for (const entry of releaseEntries) {
  check(await exists(join(root, entry)), `missing release entry: ${entry}`);
}

for (const legacy of [".claude", "bin", "history", "docs", "scripts", "skill-calibration", "CONTEXT.md"]) {
  check(!(await exists(join(root, legacy))), `legacy or generated release content remains: ${legacy}`);
}
for (const legacy of [
  ".agents/skills/ssre2-design/references/contract.md",
  ".agents/skills/ssre2-design/references/cross-review.md",
  ".agents/skills/ssre2-design/references/shared-doctrine.md",
  ".agents/skills/ssre2-review/references/conditional-execution.md",
  ".agents/skills/ssre2-review/references/contract.md",
  ".agents/skills/ssre2-review/references/cross-review.md",
  ".agents/skills/ssre2-review/references/shared-doctrine.md",
  "dev/validation/cases/correspondence.md",
]) {
  check(!(await exists(join(root, legacy))), `legacy SSRE2 path remains: ${legacy}`);
}

for (const name of expectedSkills) await validateSkill(name);

const designKernel = await readFile(join(skillsRoot, "ssre2-design", "references", "scientific-kernel.md"));
const reviewKernel = await readFile(join(skillsRoot, "ssre2-review", "references", "scientific-kernel.md"));
check(designKernel.equals(reviewKernel), "Scientific Kernel copies have drifted");

const scientificKernel = designKernel.toString("utf8");
for (const section of [
  "## Invariants",
  "## Interface defaults",
  "## Language",
  "## Epistemic states",
  "## Scientific Map",
  "### Identity Ledger",
  "### Trace closure",
  "## Records",
  "### Open Items",
  "## Use Record",
  "## Run Summary",
  "## Quantities",
  "## Inspection",
  "## Dimensions",
  "## Evidence and methods",
  "## Execution and delivery",
]) {
  check(scientificKernel.split(section).length === 2, `Scientific Kernel section missing or duplicated: ${section}`);
}
const designFederation = await readFile(join(skillsRoot, "ssre2-design", "references", "federation.md"));
const reviewFederation = await readFile(join(skillsRoot, "ssre2-review", "references", "federation.md"));
check(designFederation.equals(reviewFederation), "Federation copies have drifted");
for (const marker of ["Sibling Reference", "source identity", "same-locus"]) {
  check(designFederation.toString("utf8").includes(marker), `Federation marker missing: ${marker}`);
}
const designReflexive = await readFile(join(skillsRoot, "ssre2-design", "references", "reflexive.md"));
const reviewReflexive = await readFile(join(skillsRoot, "ssre2-review", "references", "reflexive.md"));
check(designReflexive.equals(reviewReflexive), "Reflexive closure copies have drifted");
for (const marker of ["# SSRE2 Reflexive Closure", "Freeze target bytes", "self-produced support", "successor run"]) {
  check(designReflexive.toString("utf8").includes(marker), `Reflexive closure marker missing: ${marker}`);
}
for (const term of [
  "Target", "Scientific object", "Regime", "Method family", "Claim", "Correspondence", "Evidence plan", "Evidence",
  "Unknown", "Blocker", "Basis", "Dimension", "Verdict", "Finding", "Decision", "Proposal", "Run result", "Use Record",
  "Open Item", "Run Summary",
]) {
  check(scientificKernel.includes(`**${term}**`), `Canonical Scientific Kernel term missing: ${term}`);
}
for (const record of [
  "Claim", "Correspondence", "Evidence plan", "Evidence", "Unknown", "Blocker", "Decision", "Proposal",
  "Dimension result", "Run record",
]) {
  check(scientificKernel.includes(`| **${record}** |`), `Canonical record missing: ${record}`);
}
for (const identity of [
  "CLM-unit-equivalent-results",
  "COR-forward-inverse-reconstruction",
  "EVD-unit-equivalence-reference",
  "UNK-missing-independent-reference",
]) {
  check(scientificKernel.includes(identity), `Readable identity example missing: ${identity}`);
}
for (const field of [
  "intended_use", "accepted_inputs", "supported_setting", "reference_evidence", "known_limits",
  "human_responsibility", "lifecycle_monitoring",
]) {
  check(scientificKernel.includes(`| **${field}** |`), `Use Record field missing: ${field}`);
}
for (const field of [
  "mode", "target_identity", "run_result", "artifact_paths", "mode_outcome", "assurance", "open_items",
  "use_record", "runtime_provenance",
]) {
  check(scientificKernel.includes(`| **${field}** |`), `Run Summary field missing: ${field}`);
}
for (const field of [
  "source_record", "kind", "affects", "reason", "delivery_blocking", "implementation_blocking", "closing_path",
]) {
  check(scientificKernel.includes(`| **${field}** |`), `Open Item field missing: ${field}`);
}
const runRecordRow = scientificKernel.match(/^\| \*\*Run record\*\* \|.*$/m)?.[0] ?? "";
check(!runRecordRow.includes("Use Record"), "Use Record must remain a projection outside Run record");
for (const invariant of [
  "READ_ONLY", "Identity Ledger", "Trace closure", "SON", "SIM", "REL", "EVI", "EVO", "BOUNDED", "ISOLATED",
]) {
  check(scientificKernel.includes(invariant), `Scientific Kernel invariant missing: ${invariant}`);
}

const designMethod = await readFile(join(skillsRoot, "ssre2-design", "references", "method.md"), "utf8");
const reviewMethod = await readFile(join(skillsRoot, "ssre2-review", "references", "method.md"), "utf8");
for (const term of [
  "blocking decisions", "delivered", "incomplete", "Trace closure", "NOT_ASSESSED", "Run Summary", "Open Item",
]) {
  check(designMethod.toLowerCase().includes(term.toLowerCase()), `Design method term missing: ${term}`);
}
for (const verdict of ["FAIL", "UNPROVEN", "PASS"]) {
  check(reviewMethod.includes(`| **${verdict}** |`), `Review verdict missing: ${verdict}`);
}
for (const term of ["Run Summary", "Open Item"]) {
  check(reviewMethod.includes(term), `Review method term missing: ${term}`);
}
for (const name of expectedSkills) {
  const entrypoint = await readFile(join(skillsRoot, name, "SKILL.md"), "utf8");
  const prose = entrypoint.replace(/\s+/g, " ");
  check(prose.includes("Run Summary"), `${name}: public return missing Run Summary`);
  for (const pattern of [
    /missing\s+prerequisite/, /unavailable source or tool/, /skipped required check/,
    /affected artifact or conclusion/, /cheapest closing path/,
  ]) {
    check(pattern.test(prose), `${name}: completion disclosure missing: ${pattern}`);
  }
}

const dimensions = await readFile(join(skillsRoot, "ssre2-review", "references", "dimensions.md"), "utf8");
const actualDimensions = [...dimensions.matchAll(/^## (Simple|Sonnet|Reliable|Evidenced|Evolvable)$/gm)]
  .map((match) => match[1]);
check(
  JSON.stringify(actualDimensions) === JSON.stringify(["Sonnet", "Simple", "Reliable", "Evidenced", "Evolvable"]),
  `review dimension set or order drifted: ${actualDimensions.join(", ")}`,
);
const runtimeStateText = [scientificKernel, designMethod, reviewMethod, dimensions].join("\n");
check(!runtimeStateText.includes("PASS WITH DEBT"), "combined debt verdict reintroduced");
check(!runtimeStateText.includes("READY_WITH_OWNER_DECISIONS"), "combined Design readiness state reintroduced");
const readme = await readFile(join(root, "README.md"), "utf8");
check(!/[\u3400-\u4dbf\u4e00-\u9fff]/u.test(readme), "README must be English");
check(readme.includes("npx skills@latest add HIT-SudoMaker/ssre2-skills"), "README install command drifted");
check(/Release posture: [A-Za-z][A-Za-z -]*\./.test(readme), "README release posture declaration missing");
check(readme.includes("SSRE2-SCOPE.md"), "README sealed Scope output missing");
check(readme.includes("[SSRE2 language](GLOSSARY.md)"), "README canonical language link missing");
check(readme.includes("## Minimal Run Summary"), "README Run Summary explanation missing");
check(readme.includes("Open Item"), "README Open Item explanation missing");
const record = readme.match(/\[Validation record\]\((dev\/validation\/[^)#]+\.md)\)/)?.[1];
check(Boolean(record), "README located validation record missing");
if (record) check(await exists(join(root, record)), "README validation record does not exist");
check(!/(?:bin\/ssre2-skills|npx\s+(?:--yes\s+)?ssre2-skills)/i.test(readme), "README references the retired installer");

const glossary = await readFile(join(root, "GLOSSARY.md"), "utf8");
check(!/[\u3400-\u4dbf\u4e00-\u9fff]/u.test(glossary), "GLOSSARY must be English");
const glossaryTerms = [...glossary.matchAll(/^\*\*([^*]+)\*\*:/gm)].map((match) => match[1]);
const runtimeVocabulary = [
  scientificKernel,
  designMethod,
  reviewMethod,
  designFederation.toString("utf8"),
  designReflexive.toString("utf8"),
].join("\n").toLowerCase();
for (const term of glossaryTerms) {
  const canonical = term.replace(/\s+\([^)]*\)$/, "");
  check(runtimeVocabulary.includes(canonical.toLowerCase()), `GLOSSARY term absent from runtime language: ${term}`);
}

const repositoryMarkdown = [
  join(root, "README.md"),
  join(root, "GLOSSARY.md"),
  ...(await walk(join(root, "dev", "validation"))).filter((path) => path.endsWith(".md")),
];
for (const file of repositoryMarkdown) {
  const text = await readFile(file, "utf8");
  for (const match of text.matchAll(/\]\((?!https?:|#)([^)#]+)(?:#[^)]+)?\)/g)) {
    const target = resolve(dirname(file), decodeURIComponent(match[1]));
    const local = relative(root, target);
    check(local !== ".." && !local.startsWith(`..${sep}`) && !isAbsolute(local),
      `repository reference leaves the release: ${match[1]} in ${relative(root, file)}`);
    check(await exists(target), `broken repository reference ${match[1]} in ${relative(root, file)}`);
  }
}

const packageJson = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
const allowedPackageKeys = ["engines", "license", "private", "scripts", "type"].sort();
check(
  JSON.stringify(Object.keys(packageJson).sort()) === JSON.stringify(allowedPackageKeys),
  `package.json is not development-only: ${Object.keys(packageJson).join(", ")}`,
);
check(packageJson.private === true, "package.json must be private");
check(packageJson.type === "module", "package.json type must remain module");
check(packageJson.license === "MIT", "package.json license must be MIT");
check(packageJson.engines?.node === ">=20", "Node engine requirement changed");
check(packageJson.scripts?.test === "node dev/check.mjs", "npm test command changed");
check(packageJson.scripts?.["release:check"] === "node dev/check.mjs --install", "release check command changed");
check(packageJson.name === undefined && packageJson.version === undefined, "package identity or version must not be added");
check(packageJson.dependencies === undefined && packageJson.devDependencies === undefined, "development kit must remain dependency-free");
for (const hook of ["build", "prepare", "prepack", "preinstall", "install", "postinstall"]) {
  check(packageJson.scripts?.[hook] === undefined, `npm lifecycle hook is not allowed: ${hook}`);
}

if (process.argv.includes("--install")) await validateReleaseProjection();

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  const scope = process.argv.includes("--install") ? "structure and ecosystem installation" : "structure";
  console.log(`OK: ${expectedSkills.length} English skills; ${scope} verified`);
}
