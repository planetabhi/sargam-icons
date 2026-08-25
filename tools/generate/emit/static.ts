// Emitter for @sargamicons/static: themeable standalone SVGs, a combined
// sprite, and a manifest. No framework runtime.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { stripSiPrefix } from '../naming.ts';
import { parseAll, ensureCleanDir, VARIANTS, PACKAGES_ROOT, type Variant } from './parse.ts';

const OUT = path.join(PACKAGES_ROOT, 'static');

function kebab(base: string): string {
  return stripSiPrefix(base)
    .split('_')
    .filter(Boolean)
    .join('-')
    .toLowerCase();
}

function variantKey(v: Variant): string {
  return v.toLowerCase();
}

async function main(): Promise<void> {
  const all = await parseAll();

  const iconsDir = path.join(OUT, 'icons');
  await ensureCleanDir(iconsDir);
  for (const v of VARIANTS) await fs.mkdir(path.join(iconsDir, variantKey(v)), { recursive: true });

  const manifest: Record<string, { base: string; slug: string; viewBox: string; variants: string[] }> = {};
  const symbols: string[] = [];

  for (const v of VARIANTS) {
    for (const icon of all[v]) {
      const slug = kebab(icon.base);
      const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="${icon.viewBox}">${icon.inner}</svg>\n`;
      await fs.writeFile(path.join(iconsDir, variantKey(v), `${slug}.svg`), svg, 'utf8');

      symbols.push(`<symbol id="si-${variantKey(v)}-${slug}" fill="none" viewBox="${icon.viewBox}">${icon.inner}</symbol>`);

      const entry = manifest[icon.component] ?? {
        base: icon.base,
        slug,
        viewBox: icon.viewBox,
        variants: [],
      };
      entry.variants.push(variantKey(v));
      manifest[icon.component] = entry;
    }
  }

  const sprite =
    `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols.join('')}</svg>\n`;
  await fs.writeFile(path.join(OUT, 'sprite.svg'), sprite, 'utf8');

  const sortedManifest: typeof manifest = {};
  for (const key of Object.keys(manifest).sort()) sortedManifest[key] = manifest[key]!;
  await fs.writeFile(path.join(OUT, 'manifest.json'), JSON.stringify(sortedManifest, null, 2) + '\n', 'utf8');

  const count = Object.keys(manifest).length;
  console.log(`static: ${count} icons \u00d7 ${VARIANTS.length} variants, sprite + manifest written`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
