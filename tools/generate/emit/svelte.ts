// Emitter for @sargamicons/svelte: one Svelte 5 (runes) component per icon,
// packaged by svelte-package. Inner markup is injected with {@html}.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { parseAll, ensureCleanDir, VARIANTS, PACKAGES_ROOT, type Icon, type Variant } from './parse.ts';

const SRC = path.join(PACKAGES_ROOT, 'svelte', 'src');

function iconFile(icon: Icon): string {
  return `<script>
  const inner = ${JSON.stringify(icon.inner)};
  let { title, ...rest } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  fill="none"
  viewBox=${JSON.stringify(icon.viewBox)}
  aria-hidden={title ? undefined : 'true'}
  {...rest}
>
  {#if title}<title>{title}</title>{/if}
  {@html inner}
</svg>
`;
}

async function writeVariant(variant: Variant, icons: Icon[]): Promise<void> {
  const dir = path.join(SRC, variant);
  await ensureCleanDir(dir);
  const barrel: string[] = [];
  for (const icon of icons) {
    await fs.writeFile(path.join(dir, `${icon.component}.svelte`), iconFile(icon), 'utf8');
    barrel.push(`export { default as ${icon.component} } from './${icon.component}.svelte';`);
  }
  await fs.writeFile(path.join(dir, 'index.js'), barrel.join('\n') + '\n', 'utf8');
}

async function main(): Promise<void> {
  const all = await parseAll();
  await fs.mkdir(SRC, { recursive: true });
  for (const v of VARIANTS) await writeVariant(v, all[v]);
  await fs.writeFile(
    path.join(SRC, 'index.js'),
    `export * as Line from './Line/index.js';\nexport * as Duotone from './Duotone/index.js';\nexport * as Fill from './Fill/index.js';\n`,
    'utf8',
  );
  console.log(`svelte: ${all.Line.length} icons \u00d7 ${VARIANTS.length} variants written`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
