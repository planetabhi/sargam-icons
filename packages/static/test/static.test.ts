import { test, expect } from 'bun:test';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import snapshot from '../../../metadata/component-names.json';

const ROOT = path.resolve(import.meta.dir, '..');
const expected = Object.values(snapshot).sort();

test('manifest lists exactly the snapshot components', async () => {
  const manifest = JSON.parse(await fs.readFile(path.join(ROOT, 'manifest.json'), 'utf8'));
  expect(Object.keys(manifest).sort()).toEqual(expected);
});

test('every manifest entry covers all three variants', async () => {
  const manifest = JSON.parse(await fs.readFile(path.join(ROOT, 'manifest.json'), 'utf8'));
  for (const [name, entry] of Object.entries<any>(manifest)) {
    expect(entry.variants.sort()).toEqual(['duotone', 'fill', 'line']);
    expect(typeof entry.slug).toBe('string');
    expect(entry.viewBox).toBe('0 0 24 24');
    expect(name.startsWith('Si')).toBe(true);
  }
});

test('sprite contains one symbol per icon per variant, themed with currentColor', async () => {
  const sprite = await fs.readFile(path.join(ROOT, 'sprite.svg'), 'utf8');
  const symbols = sprite.match(/<symbol /g) ?? [];
  expect(symbols.length).toBe(expected.length * 3);
  expect(sprite).toContain('currentColor');
  expect(sprite).not.toContain('#000');
});

test('standalone svg files exist and are themeable', async () => {
  const manifest = JSON.parse(await fs.readFile(path.join(ROOT, 'manifest.json'), 'utf8'));
  const sample = Object.values<any>(manifest)[0];
  for (const v of ['line', 'duotone', 'fill']) {
    const svg = await fs.readFile(path.join(ROOT, 'icons', v, `${sample.slug}.svg`), 'utf8');
    expect(svg).toContain('<svg');
    expect(svg).toContain('currentColor');
  }
});
