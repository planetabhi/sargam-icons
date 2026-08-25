import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');

async function readIconNames(styleDir: string): Promise<string[]> {
  const indexPath = path.join(SRC, styleDir, 'index.js');
  const content = await fs.readFile(indexPath, 'utf8');
  const names: string[] = [];
  const regex = /export\s*\{\s*default\s+as\s+([A-Za-z0-9_]+)\s*\}\s*from\s*'\.\/[^']+';/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[1]) names.push(match[1]);
  }
  return names;
}

function fileHeader(): string {
  return `import type { FunctionalComponent, SVGAttributes } from 'vue';

/**
 * Props for Sargam icon components
 * @property {string} [title] - Accessible title. When set, the icon exposes an accessibility label.
 */
export interface IconProps extends /* @vue-ignore */ Partial<SVGAttributes> {
  title?: string;
}

`;
}

function iconTypeLine(name: string): string {
  return `export declare const ${name}: FunctionalComponent<IconProps>;`;
}

async function writeStyleDts(styleName: string, names: string[]): Promise<void> {
  const target = path.join(DIST, `${styleName}.d.ts`);
  const lines = [
    fileHeader(),
    ...names.map(iconTypeLine),
    '\nexport type { IconProps };\n',
  ];
  await fs.writeFile(target, lines.join('\n'), 'utf8');
}

async function writeIndexDts(): Promise<void> {
  const content = `import type { IconProps } from './line.js';

export * as Line from './line.js';
export * as Duotone from './duotone.js';
export * as Fill from './fill.js';

export type { IconProps };
`;
  await fs.writeFile(path.join(DIST, 'index.d.ts'), content, 'utf8');
}

async function main(): Promise<void> {
  await fs.mkdir(DIST, { recursive: true });
  const [line, duotone, fill] = await Promise.all([
    readIconNames('Line'),
    readIconNames('Duotone'),
    readIconNames('Fill'),
  ]);
  await Promise.all([
    writeStyleDts('line', line),
    writeStyleDts('duotone', duotone),
    writeStyleDts('fill', fill),
  ]);
  await writeIndexDts();
  console.log('Generated type definitions in dist/*.d.ts');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
