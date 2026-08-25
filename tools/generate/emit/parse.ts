// Shared parser for the framework emitters.
//
// Reads each icon from the root Icons/{Line,Duotone,Fill} tree into a minimal,
// framework-agnostic model: component name (shared naming rule), viewBox, and
// inner SVG markup with `#000` swapped for `currentColor` so every framework
// inherits theming. Framework specifics live in the per-framework emitters,
// never here.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { toComponentName } from '../naming.ts';

export interface Icon {
  /** Source file base, e.g. `si_arrow_left`. */
  base: string;
  /** Component name, e.g. `SiArrowLeft`. */
  component: string;
  /** viewBox from the source svg, e.g. `0 0 24 24`. */
  viewBox: string;
  /** Inner svg markup with `#000` replaced by `currentColor`. */
  inner: string;
}

export type Variant = 'Line' | 'Duotone' | 'Fill';
export const VARIANTS: readonly Variant[] = ['Line', 'Duotone', 'Fill'];

export const REPO_ROOT = path.resolve(import.meta.dir, '../../..');
export const ICONS_ROOT = path.join(REPO_ROOT, 'Icons');
export const PACKAGES_ROOT = path.join(REPO_ROOT, 'packages');

export async function parseVariant(variant: Variant): Promise<Icon[]> {
  const dir = path.join(ICONS_ROOT, variant);
  const files = (await fs.readdir(dir)).filter((f) => f.endsWith('.svg')).sort();
  const icons: Icon[] = [];
  for (const file of files) {
    const base = file.replace(/\.svg$/, '');
    const component = toComponentName(base);
    const svg = await fs.readFile(path.join(dir, file), 'utf8');
    const viewBox = (svg.match(/viewBox="([^"]+)"/)?.[1]) ?? '0 0 24 24';
    const inner = (svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] ?? '')
      .replace(/#000/g, 'currentColor')
      .trim();
    icons.push({ base, component, viewBox, inner });
  }
  return icons;
}

export async function parseAll(): Promise<Record<Variant, Icon[]>> {
  const out = {} as Record<Variant, Icon[]>;
  for (const v of VARIANTS) out[v] = await parseVariant(v);
  return out;
}

export async function ensureCleanDir(dir: string): Promise<void> {
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });
}
