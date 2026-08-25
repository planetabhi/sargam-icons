# @sargamicons/solid

[Sargam Icons](https://sargamicons.com/) as tree-shakeable Solid components in
three styles: **Line**, **Duotone**, and **Fill**.

## Install

```sh
bun add @sargamicons/solid
# or: npm install @sargamicons/solid
# or: pnpm add @sargamicons/solid
# or: yarn add @sargamicons/solid
```

`solid-js` is a peer dependency (`^1.6`).

## Usage

Import a variant from its subpath:

```tsx
import { SiHeart } from '@sargamicons/solid/line';
import { SiStar } from '@sargamicons/solid/duotone';
import { SiBell } from '@sargamicons/solid/fill';

export function Example() {
  return (
    <>
      <SiHeart />
      <SiStar width={32} height={32} color="tomato" />
      <SiBell title="Notifications" />
    </>
  );
}
```

Or via the namespace form:

```tsx
import * as Icons from '@sargamicons/solid';

<Icons.Line.SiHeart />;
```

## Props

Every icon accepts all SVG attributes plus an optional `title` for
accessibility. `width`/`height` default to `1em` and `color` defaults to
`currentColor`, so icons inherit font size and text color.

## License

MIT © [@planetabhi](https://planetabhi.com/)
