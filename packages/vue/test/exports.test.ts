import { test, expect } from 'bun:test';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';

import * as Icons from '../src/index.ts';
import * as LineSubpath from '../src/Line/index.js';
import * as DuotoneSubpath from '../src/Duotone/index.js';
import * as FillSubpath from '../src/Fill/index.js';
import snapshot from '../../../metadata/component-names.json';

const expected = Object.values(snapshot).sort();
const expectedSet = new Set(expected);

const variants = [
  ['Line', Icons.Line, LineSubpath],
  ['Duotone', Icons.Duotone, DuotoneSubpath],
  ['Fill', Icons.Fill, FillSubpath],
] as const;

for (const [name, namespaceForm, subpathForm] of variants) {
  test(`${name}: namespace export names match the committed snapshot`, () => {
    const names = Object.keys(namespaceForm).filter((k) => k.startsWith('Si')).sort();
    expect(names).toEqual(expected);
  });

  test(`${name}: subpath export names match the namespace form`, () => {
    const nsNames = Object.keys(namespaceForm).filter((k) => k.startsWith('Si')).sort();
    const subNames = Object.keys(subpathForm).filter((k) => k.startsWith('Si')).sort();
    expect(subNames).toEqual(nsNames);
  });

  test(`${name}: every exported name is a known component`, () => {
    for (const key of Object.keys(namespaceForm)) {
      if (key.startsWith('Si')) expect(expectedSet.has(key)).toBe(true);
    }
  });
}

async function render(node: any): Promise<string> {
  return renderToString(createSSRApp({ render: () => node }));
}

test('renders one icon per variant with default props', async () => {
  for (const [, namespaceForm] of variants) {
    const Comp = (namespaceForm as Record<string, any>).SiFlowLine;
    expect(Comp).toBeDefined();
    const html = await render(h(Comp));
    expect(html).toContain('<svg');
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('currentColor');
  }
});

test('title prop adds an accessible label', async () => {
  const Comp = (Icons.Line as Record<string, any>).SiFlowLine;
  const html = await render(h(Comp, { title: 'Flow' }));
  expect(html).toContain('<title>Flow</title>');
  expect(html).not.toContain('aria-hidden');
});
