import { test, expect } from 'bun:test';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import snapshot from '../../../metadata/component-names.json';

const ROOT = path.resolve(import.meta.dir, '..');
const expected = Object.values(snapshot).sort();
const expectedSet = new Set(expected);

async function barrelNames(variant: string): Promise<string[]> {
  const content = await fs.readFile(path.join(ROOT, variant, 'index.ts'), 'utf8');
  const names: string[] = [];
  const regex = /export\s*\{\s*default\s+as\s+([A-Za-z0-9_]+)\s*\}/g;
  let m;
  while ((m = regex.exec(content)) !== null) names.push(m[1]!);
  return names.sort();
}

for (const variant of ['line', 'duotone', 'fill']) {
  test(`${variant}: barrel export names match the committed snapshot`, async () => {
    expect(await barrelNames(variant)).toEqual(expected);
  });

  test(`${variant}: every exported name is a known component`, async () => {
    for (const name of await barrelNames(variant)) expect(expectedSet.has(name)).toBe(true);
  });
}

test('each component themes with currentColor and passes through props', async () => {
  const sample = await fs.readFile(path.join(ROOT, 'line', 'SiFlowLine.astro'), 'utf8');
  expect(sample).toContain('currentColor');
  expect(sample).not.toContain('#000');
  expect(sample).toContain('Astro.props');
  expect(sample).toContain('{...rest}');
  expect(sample).toContain('set:html={inner}');
});
