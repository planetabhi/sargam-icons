# @sargamicons/astro

[Sargam Icons](https://sargamicons.com/) as Astro components in three styles:
**Line**, **Duotone**, and **Fill**.

## Install

```sh
bun add @sargamicons/astro
# or: npm install @sargamicons/astro
# or: pnpm add @sargamicons/astro
# or: yarn add @sargamicons/astro
```

`astro` is a peer dependency (`>=4`).

## Usage

Import a variant from its subpath:

```astro
---
import { SiHeart } from '@sargamicons/astro/line';
import { SiStar } from '@sargamicons/astro/duotone';
import { SiBell } from '@sargamicons/astro/fill';
---

<SiHeart />
<SiStar width="32" height="32" color="tomato" />
<SiBell title="Notifications" />
```

Or via the namespace form:

```astro
---
import * as Icons from '@sargamicons/astro';
const { SiHeart } = Icons.Line;
---

<SiHeart />
```

## Props

Every icon accepts all SVG attributes plus an optional `title` for
accessibility. `width`/`height` default to `1em` and `color` defaults to
`currentColor`, so icons inherit font size and text color.

## License

MIT © [@planetabhi](https://planetabhi.com/)
