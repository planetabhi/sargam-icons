# @sargamicons/react

[Sargam Icons](https://sargamicons.com/) as tree-shakeable React components in
three styles: **Line**, **Duotone**, and **Fill**.

## Install

```sh
bun add @sargamicons/react
# or: npm install @sargamicons/react
# or: pnpm add @sargamicons/react
# or: yarn add @sargamicons/react
```

`react` is a peer dependency (`>=16.8`).

## Usage

Import a variant from its subpath:

```tsx
import { SiHeart } from '@sargamicons/react/line';
import { SiStar } from '@sargamicons/react/duotone';
import { SiBell } from '@sargamicons/react/fill';

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
import * as Icons from '@sargamicons/react';

<Icons.Line.SiHeart />;
<Icons.Duotone.SiStar />;
<Icons.Fill.SiBell />;
```

## Props

Every icon accepts all `SVGProps<SVGSVGElement>` plus an optional `title` (and
`titleId`) for accessibility. `width`/`height` default to `1em` and `color`
defaults to `currentColor`, so icons inherit font size and text color. Refs are
forwarded to the underlying `<svg>`.

## License

MIT © [@planetabhi](https://planetabhi.com/)
