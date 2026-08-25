// Emitter for @sargamicons/solid: tree-shakeable Solid components built on a
// shared hyperscript factory (solid-js/h), so no JSX compile step is needed and
// each icon file stays tiny.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { parseAll, ensureCleanDir, VARIANTS, PACKAGES_ROOT, type Icon, type Variant } from './parse.ts';

const SRC = path.join(PACKAGES_ROOT, 'solid', 'src');

const FACTORY = `import h from 'solid-js/h';

const escapeTitle = (t) =>
  String(t).replace(/[<>&]/g, (s) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[s]));

export function createIcon(viewBox, inner) {
  return (props) => {
    const p = props || {};
    const { title, ...rest } = p;
    return h('svg', {
      width: '1em',
      height: '1em',
      fill: 'none',
      viewBox,
      'aria-hidden': title == null ? 'true' : undefined,
      innerHTML: (title == null ? '' : \`<title>\${escapeTitle(title)}</title>\`) + inner,
      ...rest,
    });
  };
}
`;

function iconFile(icon: Icon): string {
  return `import { createIcon } from '../_svg.js';\nexport default createIcon(${JSON.stringify(icon.viewBox)}, ${JSON.stringify(icon.inner)});\n`;
}

async function writeVariant(variant: Variant, icons: Icon[]): Promise<void> {
  const dir = path.join(SRC, variant);
  await ensureCleanDir(dir);
  const barrel: string[] = [];
  for (const icon of icons) {
    await fs.writeFile(path.join(dir, `${icon.component}.js`), iconFile(icon), 'utf8');
    barrel.push(`export { default as ${icon.component} } from './${icon.component}.js';`);
  }
  await fs.writeFile(path.join(dir, 'index.js'), barrel.join('\n') + '\n', 'utf8');
}

async function main(): Promise<void> {
  const all = await parseAll();
  await fs.mkdir(SRC, { recursive: true });
  await fs.writeFile(path.join(SRC, '_svg.js'), FACTORY, 'utf8');
  for (const v of VARIANTS) await writeVariant(v, all[v]);
  await fs.writeFile(
    path.join(SRC, 'index.ts'),
    `export * as Line from './Line/index.js';\nexport * as Duotone from './Duotone/index.js';\nexport * as Fill from './Fill/index.js';\n`,
    'utf8',
  );
  console.log(`solid: ${all.Line.length} icons \u00d7 ${VARIANTS.length} variants written`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
