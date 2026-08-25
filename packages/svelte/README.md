# @sargamicons/svelte

[Sargam Icons](https://sargamicons.com/) as tree-shakeable Svelte 5 components
in three styles: **Line**, **Duotone**, and **Fill**.

## Install

```sh
bun add @sargamicons/svelte
# or: npm install @sargamicons/svelte
# or: pnpm add @sargamicons/svelte
# or: yarn add @sargamicons/svelte
```

`svelte` is a peer dependency (`^5`).

## Usage

Import a variant from its subpath:

```svelte
<script>
  import { SiHeart } from '@sargamicons/svelte/line';
  import { SiStar } from '@sargamicons/svelte/duotone';
  import { SiBell } from '@sargamicons/svelte/fill';
</script>

<SiHeart />
<SiStar width={32} height={32} color="tomato" />
<SiBell title="Notifications" />
```

Or via the namespace form:

```svelte
<script>
  import * as Icons from '@sargamicons/svelte';
</script>

<Icons.Line.SiHeart />
```

## Props

Every icon accepts all SVG attributes plus an optional `title` for
accessibility. `width`/`height` default to `1em` and `color` defaults to
`currentColor`, so icons inherit font size and text color.

## License

MIT © [@planetabhi](https://planetabhi.com/)
