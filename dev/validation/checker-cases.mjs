import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const doctrinePaths = ["ssre2-design", "ssre2-review"].map(
  (name) => `.agents/skills/${name}/references/shared-doctrine.md`,
);

async function replaceDoctrine(directory, before, after) {
  for (const file of doctrinePaths) {
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
    mutate: (dir) => replaceDoctrine(dir,
      "A load-bearing physical value is a Quantity Contract: scientific role, dimension, unit/scale, representation,",
      "A scientifically consequential physical value has a Quantity Contract: role, dimension, unit/scale, representation,"),
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
    mutate: (dir) => replaceDoctrine(dir,
      "Five Dimension results remain separate. Synthesis preserves them without a score or compensating trade.",
      "Synthesis may average verdicts and discard a failing judgment when another dimension passes."),
  },
];

for (const test of cases) {
  const directory = await mkdtemp(join(tmpdir(), "ssre2-checker-case-"));
  try {
    for (const entry of [".agents", ".gitignore", "LICENSE", "README.md", "package.json"]) {
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
