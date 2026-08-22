// Shared, framework-agnostic naming rule for Sargam icon codegen.
//
// Rule: strip the `si_` prefix, split on `_`, PascalCase each part, rejoin, then
// prefix `Si`. This mirrors the component names @svgr/* emits for the same
// filenames (which lowercase acronym tails), keeping the codegen and the React
// build in lock-step.
//   si_AI          -> SiAi
//   si_arrow_left  -> SiArrowLeft
//   si_Flow_line   -> SiFlowLine

export const RESERVED_EXPORT_NAMES = new Set([
  'IconProps',
  'Line',
  'Duotone',
  'Fill',
]);

const VALID_COMPONENT_NAME = /^Si[A-Za-z][A-Za-z0-9]*$/;

export function stripSiPrefix(name: string): string {
  return name.replace(/^si_/, '');
}

function pascalCasePart(part: string): string {
  // All-caps acronym (e.g. "AI") -> title case ("Ai"), matching @svgr's
  // change-case. Otherwise keep any existing internal capitals (e.g. "YouTube").
  if (/^[A-Z0-9]+$/.test(part)) {
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  }
  return part.charAt(0).toUpperCase() + part.slice(1);
}

export function toComponentName(fileBase: string): string {
  const stripped = stripSiPrefix(fileBase);
  const parts = stripped.split('_').filter(Boolean);
  if (parts.length === 0) {
    throw new Error(`Cannot derive a component name from "${fileBase}".`);
  }
  const name = 'Si' + parts.map(pascalCasePart).join('');
  if (!VALID_COMPONENT_NAME.test(name)) {
    throw new Error(
      `Derived component name "${name}" (from "${fileBase}") is not a valid identifier.`,
    );
  }
  if (RESERVED_EXPORT_NAMES.has(name)) {
    throw new Error(
      `Derived component name "${name}" (from "${fileBase}") collides with a reserved export.`,
    );
  }
  return name;
}

// Maps every icon file base to its component name, failing on collisions.
export function buildComponentNameMap(iconBases: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  const byComponent = new Map<string, string>();
  for (const base of iconBases) {
    const component = toComponentName(base);
    const prev = byComponent.get(component);
    if (prev && prev !== base) {
      throw new Error(
        `Duplicate component name "${component}" from both "${prev}" and "${base}".`,
      );
    }
    byComponent.set(component, base);
    out[base] = component;
  }
  return out;
}
