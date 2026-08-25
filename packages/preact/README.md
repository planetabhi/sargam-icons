# @sargamicons/preact

[Sargam Icons](https://sargamicons.com/) as tree-shakeable Preact components in
three styles: **Line**, **Duotone**, and **Fill**.

## Install

```sh
bun add @sargamicons/preact
# or: npm install @sargamicons/preact
# or: pnpm add @sargamicons/preact
# or: yarn add @sargamicons/preact
```

`preact` is a peer dependency (`>=10`).

## Usage

Import a variant from its subpath:

```tsx
import { SiHeart } from '@sargamicons/preact/line';
import { SiStar } from '@sargamicons/preact/duotone';
import { SiBell } from '@sargamicons/preact/fill';

export function Example() {
  return (
    <>
      <SiHeart />
      <SiStar width={32} height={32} color="tomato" />
      <SiBell title="Notifications" titleId="bell" />
    </>
  );
}
```

Or via the namespace form:

```tsx
import * as Icons from '@sargamicons/preact';

<Icons.Line.SiHeart />;
<Icons.Duotone.SiStar />;
<Icons.Fill.SiBell />;
```

## Props

Every icon accepts all `JSX.SVGAttributes<SVGSVGElement>` plus an optional
`title` (and `titleId`) for accessibility. `width`/`height` default to `1em`
and `color` defaults to `currentColor`, so icons inherit font size and text
color. Refs are forwarded to the underlying `<svg>`.

## License

MIT © [@planetabhi](https://planetabhi.com/)
