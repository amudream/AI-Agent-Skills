#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const skillName = args[0];
const target = readFlag('--target') ?? process.cwd();
const adapter = readFlag('--adapter') ?? 'codex';

if (!skillName) {
  console.error('Usage: node scripts/install-skill.mjs <skill-name> --target <project-dir> --adapter codex|claude|plain');
  process.exit(1);
}

const source = path.join('skills', skillName);
if (!fs.existsSync(path.join(source, 'SKILL.md'))) {
  console.error(`Unknown skill or missing SKILL.md: ${skillName}`);
  process.exit(1);
}

const destinationRoot = adapter === 'codex'
  ? path.join(target, '.agents', 'skills')
  : adapter === 'claude'
    ? path.join(target, '.claude', 'skills')
    : adapter === 'plain'
      ? path.join(target, 'skills')
      : null;

if (!destinationRoot) {
  console.error(`Unknown adapter: ${adapter}`);
  process.exit(1);
}

const destination = path.join(destinationRoot, skillName);
copyDir(source, destination);
console.log(`Installed ${skillName} to ${destination}`);

function readFlag(name) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}
