#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = 'skills';
const requiredSections = [
  'Use when',
  'Do not use when',
  'Required inputs',
  'Evidence basis',
  'Workflow',
  'Output',
  'Validation',
  'Safety notes'
];

let failed = false;

if (!fs.existsSync(root)) {
  console.error('Missing skills/ directory.');
  process.exit(1);
}

const skillDirs = fs.readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (!skillDirs.length) {
  console.error('No skills found.');
  process.exit(1);
}

for (const dir of skillDirs) {
  const file = path.join(root, dir, 'SKILL.md');
  if (!fs.existsSync(file)) {
    fail(`${dir}: missing SKILL.md`);
    continue;
  }
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---\n')) fail(`${file}: frontmatter must start at first line`);
  if (!/^name:\s*.+$/m.test(text)) fail(`${file}: missing name metadata`);
  if (!/^description:\s*.+$/m.test(text)) fail(`${file}: missing description metadata`);
  const name = text.match(/^name:\s*(.+)$/m)?.[1]?.trim();
  if (name && name !== dir) fail(`${file}: name metadata should match directory name (${dir})`);
  for (const section of requiredSections) {
    const re = new RegExp(`^##\\s+${escapeRegExp(section)}\\s*$`, 'm');
    if (!re.test(text)) fail(`${file}: missing required section "${section}"`);
  }
  if (!/Evidence level:/i.test(text)) fail(`${file}: Evidence basis must include "Evidence level:"`);
  if (!/Underlying logic:/i.test(text)) fail(`${file}: Evidence basis must include "Underlying logic:"`);
  if (!/Validation method:/i.test(text)) fail(`${file}: Evidence basis must include "Validation method:"`);
}

if (fs.existsSync('skill-index.json')) {
  const index = JSON.parse(fs.readFileSync('skill-index.json', 'utf8'));
  const indexedNames = new Set(index.map((item) => item.name));
  for (const dir of skillDirs) {
    if (!indexedNames.has(dir)) fail(`skill-index.json: missing ${dir}`);
  }
}

if (!fs.existsSync('docs/skill-evidence-standard.md')) fail('Missing docs/skill-evidence-standard.md');
if (!fs.existsSync('docs/skill-source-map.md')) fail('Missing docs/skill-source-map.md');

if (failed) process.exit(1);
console.log(`Validated ${skillDirs.length} skills.`);

function fail(message) {
  console.error(message);
  failed = true;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
