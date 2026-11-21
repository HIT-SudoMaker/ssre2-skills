import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const kernelPaths = ["ssre2-design", "ssre2-review"].map(
  (name) => `.agents/skills/${name}/references/scientific-kernel.md`,
);
const reflexivePaths = ["ssre2-design", "ssre2-review"].map(
  (name) => `.agents/skills/${name}/references/reflexive.md`,
);

async function replaceKernel(directory, before, after) {
  for (const file of kernelPaths) {
    const path = join(directory, file);
    const source = await readFile(path, "utf8");
    assert.ok(source.includes(before), `mutation anchor absent: ${file}`);
    await writeFile(path, source.replace(before, after));
  }
}

async function replaceReflexive(directory, before, after) {
  for (const file of reflexivePaths) {
    const path = join(directory, file);
    const source = await readFile(path, "utf8");
    assert.ok(source.includes(before), `mutation anchor absent: ${file}`);
    await writeFile(path, source.replace(before, after));
  }
}

const cases = [
  { name: "unchanged structure", status: 0, mutate: async () => {} },
  {
    name: "equivalent scientific wording", status: 0,
    mutate: (dir) => replaceKernel(dir,
      "A Quantity Contract records scientific role, dimension, unit and scale, representation,",
      "A Quantity Contract records role, dimension, unit and scale, representation,"),
  },
  {
    name: "missing internal reference", status: 1, diagnostic: "broken reference",
    mutate: async (dir) => {
      const path = join(dir, ".agents/skills/ssre2-review/SKILL.md");
      await writeFile(path, (await readFile(path, "utf8")) + "\n[Missing](references/absent.md)\n");
    },
  },
  {
    name: "reference requiring sibling package", status: 1, diagnostic: "independently installable",
    mutate: async (dir) => {
      const path = join(dir, ".agents/skills/ssre2-review/SKILL.md");
      await writeFile(path, (await readFile(path, "utf8")) + "\n[Sibling](../ssre2-design/SKILL.md)\n");
    },
  },
  {
    name: "semantic inversion remains outside structural assurance", status: 0,
    mutate: (dir) => replaceKernel(dir,
      "synthesis does not score or compensate them.",
      "synthesis may average them and discard a failing result."),
  },
  {
    name: "missing reflexive closure", status: 1, diagnostic: "Reflexive closure",
    mutate: (dir) => replaceReflexive(dir, "# SSRE2 Reflexive Closure", "# SSRE2 Self Inspection"),
  },
  {
    name: "missing Trace closure", status: 1, diagnostic: "Trace closure",
    mutate: (dir) => replaceKernel(dir, "### Trace closure", "### Relation notes"),
  },
  {
    name: "missing Use Record field", status: 1, diagnostic: "Use Record field missing",
    mutate: (dir) => replaceKernel(dir, "| **known_limits** |", "| **limitations** |"),
  },
  {
    name: "missing Run Summary", status: 1, diagnostic: "Scientific Kernel section missing or duplicated: ## Run Summary",
    mutate: (dir) => replaceKernel(dir, "## Run Summary", "## Delivery Summary"),
  },
  {
    name: "missing Open Item field", status: 1,
    diagnostic: "Open Item field missing: implementation_blocking",
    mutate: (dir) => replaceKernel(dir,
      "| **implementation_blocking** |", "| **combined_blocking** |"),
  },
  {
    name: "missing Design readiness fallback", status: 1, diagnostic: "Design method term missing: NOT_ASSESSED",
    mutate: async (dir) => {
      const path = join(dir, ".agents/skills/ssre2-design/references/method.md");
      const source = await readFile(path, "utf8");
      assert.ok(source.includes("**NOT_ASSESSED**"), `mutation anchor absent: ${path}`);
      await writeFile(path, source.replace("**NOT_ASSESSED**", "**READY**"));
    },
  },
  {
    name: "cyclic Use Record", status: 1, diagnostic: "projection outside Run record",
    mutate: (dir) => replaceKernel(dir,
      "run result, blockers, and runtime provenance.",
      "run result, blockers, Use Record, and runtime provenance."),
  },
  {
    name: "combined debt verdict", status: 1, diagnostic: "combined debt verdict",
    mutate: async (dir) => {
      const path = join(dir, ".agents/skills/ssre2-review/references/method.md");
      const source = await readFile(path, "utf8");
      assert.ok(source.includes("| **PASS** |"), `mutation anchor absent: ${path}`);
      await writeFile(path, source.replace("| **PASS** |", "| **PASS WITH DEBT** |"));
    },
  },
  {
    name: "missing blocker disclosure", status: 1, diagnostic: "completion disclosure missing",
    mutate: async (dir) => {
      for (const skill of ["ssre2-design", "ssre2-review"]) {
        const path = join(dir, ".agents/skills", skill, "SKILL.md");
        const source = await readFile(path, "utf8");
        assert.ok(source.includes("unavailable source or tool"), `mutation anchor absent: ${path}`);
        await writeFile(path, source.replace("unavailable source or tool", "external limitation"));
      }
    },
  },
  {
    name: "glossary term missing from runtime", status: 1, diagnostic: "GLOSSARY term absent",
    mutate: async (dir) => {
      const path = join(dir, "GLOSSARY.md");
      await writeFile(path, (await readFile(path, "utf8")) +
        "\n**Unrouted concept**:\nA term with no runtime owner.\n_Avoid_: Orphan\n");
    },
  },
];

for (const test of cases) {
  const directory = await mkdtemp(join(tmpdir(), "ssre2-checker-case-"));
  try {
    for (const entry of [".agents", ".gitignore", "GLOSSARY.md", "LICENSE", "README.md", "package.json"]) {
      await cp(join(root, entry), join(directory, entry), { recursive: true });
    }
    await cp(join(root, "dev/check.mjs"), join(directory, "dev/check.mjs"));
    await cp(join(root, "dev/validation"), join(directory, "dev/validation"), { recursive: true });
    await test.mutate(directory);
    const result = spawnSync(process.execPath, ["dev/check.mjs"], { cwd: directory, encoding: "utf8" });
    assert.equal(result.status, test.status, `${test.name}: ${result.stdout}\n${result.stderr}`);
    if (test.diagnostic) assert.ok(result.stderr.includes(test.diagnostic), result.stderr);
    console.log(`OK: ${test.name}; structural exit ${result.status}`);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}
console.log("The semantic inversion is intentionally unacceptable; structural success does not approve it.");
