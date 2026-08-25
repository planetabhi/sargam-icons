// Emitter for @sargamicons/astro: one .astro component per icon. Astro consumes
// the source directly (no build); inner markup is injected via `set:html`.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { parseAll, ensureCleanDir, VARIANTS, PACKAGES_ROOT, type Icon, type Variant } from './parse.ts';

const OUT = path.join(PACKAGES_ROOT, 'astro');

function variantDir(v: Variant): string {
  return v.toLowerCase();
}

function iconFile(icon: Icon): string {
  return `---
const { title, ...rest } = Astro.props;
const inner = ${JSON.stringify(icon.inner)};
---
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  fill="none"
  viewBox=${JSON.stringify(icon.viewBox)}
  aria-hidden={title ? undefined : 'true'}
  {...rest}
>
  {title && <title>{title}</title>}
  <Fragment set:html={inner} />
</svg>
`;
}

async function writeVariant(variant: Variant, icons: Icon[]): Promise<void> {
  const dir = path.join(OUT, variantDir(variant));
  await ensureCleanDir(dir);
  const barrel: string[] = [];
  for (const icon of icons) {
    await fs.writeFile(path.join(dir, `${icon.component}.astro`), iconFile(icon), 'utf8');
    barrel.push(`export { default as ${icon.component} } from './${icon.component}.astro';`);
  }
  await fs.writeFile(path.join(dir, 'index.ts'), barrel.join('\n') + '\n', 'utf8');
}

async function main(): Promise<void> {
  const all = await parseAll();
  await fs.mkdir(OUT, { recursive: true });
  for (const v of VARIANTS) await writeVariant(v, all[v]);
  await fs.writeFile(
    path.join(OUT, 'index.ts'),
    `export * as Line from './line/index.ts';\nexport * as Duotone from './duotone/index.ts';\nexport * as Fill from './fill/index.ts';\n`,
    'utf8',
  );
  console.log(`astro: ${all.Line.length} icons \u00d7 ${VARIANTS.length} variants written`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
