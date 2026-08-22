// Core-artifact codegen for the `sargam-icons` package.
//
// Reads the source of truth (root `Icons/Line`), `src/tags.json`, and
// `metadata/added-in.json`, then writes the published core artifacts:
//   - icons.json      (the manifest)
//   - Icons.d.ts      (types generated from the manifest)
//   - public/sw.js    (service worker, version-injected from sw.template.js)
//
// It also emits `metadata/component-names.json` — the committed snapshot of
// React component names — which the React package checks against.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildComponentNameMap } from './naming.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.join(__dirname, '..', '..');

const VARIANTS = ['Line', 'Duotone', 'Fill'] as const;

function getVersion(): string {
  try {
    const pkg = JSON.parse(
      fs.readFileSync(path.join(REPO_ROOT, 'package.json'), 'utf-8'),
    ) as { version?: string };
    return pkg.version ?? '1.6.7';
  } catch {
    return '1.6.7';
  }
}

function stripSiPrefix(s: string): string {
  return s.replace(/^si_/, '');
}

function getIconNames(directory: string): string[] {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.svg'))
    .map((file) => path.basename(file, '.svg'))
    .sort();
}

interface IconManifestEntry {
  name: string;
  category: string;
  addedIn: string;
  tags: string[];
  aliases: string[];
}

interface IconManifest {
  version: string;
  generated: string;
  count: number;
  variants: readonly ['line', 'duotone', 'fill'];
  cdnBase: string;
  categories: string[];
  icons: IconManifestEntry[];
}

interface TagsSourceEntry {
  tags?: string[];
  aliases?: string[];
}
type TagsSource = Record<string, TagsSourceEntry>;

const TAG_CHARSET = /^[a-z0-9 -]+$/;
const ALIAS_CHARSET = /^[A-Za-z0-9_]+$/;
const MAX_TAG_LENGTH = 32;
const MAX_ALIAS_LENGTH = 64;
const MAX_TAGS_PER_ICON = 10;

function loadTags(): TagsSource {
  const p = path.join(REPO_ROOT, 'src', 'tags.json');
  if (!fs.existsSync(p)) return {};
  const raw = fs.readFileSync(p, 'utf-8');
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    throw new Error(`src/tags.json is not valid JSON: ${(e as Error).message}`);
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('src/tags.json must be a JSON object at the top level.');
  }
  const out: TagsSource = {};
  for (const [rawKey, val] of Object.entries(parsed as Record<string, unknown>)) {
    const key = stripSiPrefix(rawKey);
    if (!key) throw new Error('src/tags.json: empty key.');
    if (out[key]) throw new Error(`src/tags.json: duplicate key "${key}".`);
    if (typeof val !== 'object' || val === null || Array.isArray(val)) {
      throw new Error(`src/tags.json: entry for "${key}" must be an object.`);
    }
    const entry = val as Record<string, unknown>;
    if (entry.tags !== undefined && !Array.isArray(entry.tags)) {
      throw new Error(`src/tags.json: "${key}".tags must be an array.`);
    }
    if (entry.aliases !== undefined && !Array.isArray(entry.aliases)) {
      throw new Error(`src/tags.json: "${key}".aliases must be an array.`);
    }
    out[key] = {
      tags: entry.tags as string[] | undefined,
      aliases: entry.aliases as string[] | undefined,
    };
  }
  return out;
}

function loadAddedIn(): Record<string, string> {
  const p = path.join(REPO_ROOT, 'metadata', 'added-in.json');
  if (!fs.existsSync(p)) return {};
  const parsed = JSON.parse(fs.readFileSync(p, 'utf-8')) as unknown;
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    throw new Error('metadata/added-in.json must be a JSON object at the top level.');
  }
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
    if (typeof v !== 'string') {
      throw new Error(`metadata/added-in.json: value for "${k}" must be a string.`);
    }
    out[stripSiPrefix(k)] = v;
  }
  return out;
}

function deriveBaseForAlt(iconName: string): string | null {
  const m = iconName.match(/^(.+?)_alt(?:_\d+)?$/);
  return m ? m[1] : null;
}

function normalizeTag(raw: string, ctx: string): string | null {
  const collapsed = raw.replace(/\s+/g, ' ').trim().toLowerCase();
  if (!collapsed) return null;
  if (collapsed.length > MAX_TAG_LENGTH) {
    throw new Error(`${ctx}: tag "${raw}" exceeds ${MAX_TAG_LENGTH} chars.`);
  }
  if (!TAG_CHARSET.test(collapsed)) {
    throw new Error(`${ctx}: tag "${raw}" contains disallowed characters (allowed: a-z 0-9 space -).`);
  }
  return collapsed;
}

function normalizeAlias(raw: string, ctx: string): string | null {
  const stripped = stripSiPrefix(raw).trim();
  if (!stripped) return null;
  if (stripped.length > MAX_ALIAS_LENGTH) {
    throw new Error(`${ctx}: alias "${raw}" exceeds ${MAX_ALIAS_LENGTH} chars.`);
  }
  if (!ALIAS_CHARSET.test(stripped)) {
    throw new Error(`${ctx}: alias "${raw}" contains disallowed characters (allowed: A-Z a-z 0-9 _).`);
  }
  return stripped;
}

function validateTagsSource(source: TagsSource, iconSet: Set<string>): void {
  const realNamesLower = new Set(
    Array.from(iconSet).map((n) => stripSiPrefix(n).toLowerCase()),
  );
  const aliasOwner = new Map<string, string>();

  for (const [key, entry] of Object.entries(source)) {
    if (!iconSet.has(`si_${key}`)) {
      throw new Error(`src/tags.json: "${key}" does not correspond to an icon in Icons/Line.`);
    }
    const ctx = `src/tags.json[${key}]`;

    const normTags: string[] = [];
    for (const t of entry.tags ?? []) {
      if (typeof t !== 'string') throw new Error(`${ctx}: tags must be strings.`);
      const n = normalizeTag(t, ctx);
      if (n && !normTags.includes(n)) normTags.push(n);
    }
    if (normTags.length > MAX_TAGS_PER_ICON) {
      throw new Error(`${ctx}: more than ${MAX_TAGS_PER_ICON} tags.`);
    }

    const normAliases: string[] = [];
    const seenAliasLower = new Set<string>();
    for (const a of entry.aliases ?? []) {
      if (typeof a !== 'string') throw new Error(`${ctx}: aliases must be strings.`);
      const n = normalizeAlias(a, ctx);
      if (!n) continue;
      const lower = n.toLowerCase();
      if (lower === key.toLowerCase()) {
        throw new Error(`${ctx}: alias "${n}" equals its own icon name.`);
      }
      if (realNamesLower.has(lower)) {
        throw new Error(`${ctx}: alias "${n}" collides with real icon name "si_${n}".`);
      }
      const prevOwner = aliasOwner.get(lower);
      if (prevOwner && prevOwner !== key) {
        throw new Error(`${ctx}: alias "${n}" also declared under "${prevOwner}".`);
      }
      aliasOwner.set(lower, key);
      if (!seenAliasLower.has(lower)) {
        seenAliasLower.add(lower);
        normAliases.push(n);
      }
    }

    if (normTags.length === 0 && normAliases.length === 0) {
      throw new Error(`${ctx}: entry must contain at least one tag or alias.`);
    }
  }
}

function resolveIconEntry(
  iconName: string,
  source: TagsSource,
  iconSet: Set<string>,
): { tags: string[]; aliases: string[] } {
  const key = stripSiPrefix(iconName);
  const direct = source[key];

  let tagsIn: string[] = [];
  let aliasesIn: string[] = [];
  if (direct) {
    tagsIn = direct.tags ?? [];
    aliasesIn = direct.aliases ?? [];
  } else {
    const base = deriveBaseForAlt(iconName);
    if (base && iconSet.has(base)) {
      const baseEntry = source[stripSiPrefix(base)];
      if (baseEntry) tagsIn = baseEntry.tags ?? [];
    }
  }

  const ctx = `resolveIconEntry(${iconName})`;
  const tags: string[] = [];
  for (const t of tagsIn) {
    const n = normalizeTag(t, ctx);
    if (n && !tags.includes(n)) tags.push(n);
  }

  const seenAliasLower = new Set<string>();
  const aliases: string[] = [];
  for (const a of aliasesIn) {
    const n = normalizeAlias(a, ctx);
    if (!n) continue;
    const lower = n.toLowerCase();
    if (seenAliasLower.has(lower)) continue;
    seenAliasLower.add(lower);
    aliases.push(n);
  }

  tags.sort();
  aliases.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return { tags, aliases };
}

function deriveCategory(iconName: string): string {
  const stripped = stripSiPrefix(iconName);
  const noAlt = stripped.replace(/_alt(?:_\d+)?$/, '');
  const first = noAlt.split('_')[0];
  return first || stripped;
}

function buildManifest(
  iconNamesList: string[],
  version: string,
  cdnBase: string,
  tagsSource: TagsSource,
  addedInMap: Record<string, string>,
): IconManifest {
  const iconSet = new Set(iconNamesList);
  validateTagsSource(tagsSource, iconSet);

  const icons: IconManifestEntry[] = iconNamesList.map((name) => {
    const { tags, aliases } = resolveIconEntry(name, tagsSource, iconSet);
    return {
      name,
      category: deriveCategory(name),
      addedIn: addedInMap[stripSiPrefix(name)] ?? version,
      tags,
      aliases,
    };
  });

  const categories = Array.from(new Set(icons.map((i) => i.category))).sort();

  return {
    version,
    generated: new Date().toISOString(),
    count: icons.length,
    variants: ['line', 'duotone', 'fill'] as const,
    cdnBase,
    categories,
    icons,
  };
}

function buildTypesFile(manifest: IconManifest): string {
  const nameUnion = manifest.icons
    .map((i) => `  | ${JSON.stringify(i.name)}`)
    .join('\n');

  const categoryUnion = manifest.categories
    .map((c) => `  | ${JSON.stringify(c)}`)
    .join('\n');

  return `

export type SargamIconVariant = "line" | "duotone" | "fill";

export type SargamIconName =
${nameUnion};

export type SargamIconCategory =
${categoryUnion};

export interface SargamIconMeta {
  readonly name: SargamIconName;
  readonly category: SargamIconCategory;
  readonly variants: readonly SargamIconVariant[];
  readonly addedIn: string;
  readonly tags: readonly string[];
  readonly aliases: readonly string[];
}

export interface SargamIconManifest {
  readonly version: string;
  readonly generated: string;
  readonly count: number;
  readonly variants: readonly ["line", "duotone", "fill"];
  readonly cdnBase: string;
  readonly categories: readonly SargamIconCategory[];
  readonly icons: readonly SargamIconMeta[];
}
`;
}

// Verifies every icon name in Line exists in Duotone and Fill too.
function assertVariantParity(names: string[]): void {
  const nameSet = new Set(names);
  for (const variant of VARIANTS) {
    if (variant === 'Line') continue;
    const dir = path.join(REPO_ROOT, 'Icons', variant);
    const present = new Set(getIconNames(dir));
    const missing = names.filter((n) => !present.has(n));
    const extra = Array.from(present).filter((n) => !nameSet.has(n));
    if (missing.length) {
      throw new Error(`Icons/${variant} is missing: ${missing.join(', ')}`);
    }
    if (extra.length) {
      throw new Error(`Icons/${variant} has extra icons absent from Line: ${extra.join(', ')}`);
    }
  }
}

export function generateCoreArtifacts(): void {
  const version = getVersion();
  const cdnBase = `https://cdn.jsdelivr.net/npm/sargam-icons@${version}/Icons/`;
  const iconNames = getIconNames(path.join(REPO_ROOT, 'Icons', 'Line'));

  assertVariantParity(iconNames);

  const tagsSource = loadTags();
  const addedInMap = loadAddedIn();
  const manifest = buildManifest(iconNames, version, cdnBase, tagsSource, addedInMap);

  fs.writeFileSync(
    path.join(REPO_ROOT, 'icons.json'),
    JSON.stringify(manifest, null, 2),
  );

  fs.writeFileSync(
    path.join(REPO_ROOT, 'Icons.d.ts'),
    buildTypesFile(manifest),
  );

  const swTemplatePath = path.join(REPO_ROOT, 'src', 'sw.template.js');
  if (fs.existsSync(swTemplatePath)) {
    const swSource = fs.readFileSync(swTemplatePath, 'utf-8');
    const swOutput = swSource.replace(/'\{\{VERSION\}\}'/g, JSON.stringify(version));
    fs.writeFileSync(path.join(REPO_ROOT, 'public', 'sw.js'), swOutput);
  }

  // Committed snapshot of React component names (used by @sargamicons/react).
  const componentNames = buildComponentNameMap(iconNames);
  fs.writeFileSync(
    path.join(REPO_ROOT, 'metadata', 'component-names.json'),
    JSON.stringify(componentNames, null, 2) + '\n',
  );

  return;
}
