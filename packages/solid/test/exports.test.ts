import { test, expect } from 'bun:test';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import snapshot from '../../../metadata/component-names.json';

const SRC = path.resolve(import.meta.dir, '..', 'src');
const expected = Object.values(snapshot).sort();
const expectedSet = new Set(expected);

async function barrelNames(variant: string): Promise<string[]> {
  const content = await fs.readFile(path.join(SRC, variant, 'index.js'), 'utf8');
  const names: string[] = [];
  const regex = /export\s*\{\s*default\s+as\s+([A-Za-z0-9_]+)\s*\}/g;
  let m;
  while ((m = regex.exec(content)) !== null) names.push(m[1]!);
  return names.sort();
}

for (const variant of ['Line', 'Duotone', 'Fill']) {
  test(`${variant}: barrel export names match the committed snapshot`, async () => {
    expect(await barrelNames(variant)).toEqual(expected);
  });

  test(`${variant}: every exported name is a known component`, async () => {
    for (const name of await barrelNames(variant)) expect(expectedSet.has(name)).toBe(true);
  });
}

test('each icon module themes with currentColor and no #000', async () => {
  const sample = await fs.readFile(path.join(SRC, 'Line', 'SiFlowLine.js'), 'utf8');
  expect(sample).toContain('currentColor');
  expect(sample).not.toContain('#000');
  expect(sample).toContain('createIcon');
});
