# @sargamicons/vue

[Sargam Icons](https://sargamicons.com/) as tree-shakeable Vue 3 components in
three styles: **Line**, **Duotone**, and **Fill**.

## Install

```sh
bun add @sargamicons/vue
# or: npm install @sargamicons/vue
# or: pnpm add @sargamicons/vue
# or: yarn add @sargamicons/vue
```

`vue` is a peer dependency (`^3`).

## Usage

Import a variant from its subpath:

```vue
<script setup>
import { SiHeart } from '@sargamicons/vue/line';
import { SiStar } from '@sargamicons/vue/duotone';
import { SiBell } from '@sargamicons/vue/fill';
</script>

<template>
  <SiHeart />
  <SiStar :width="32" :height="32" color="tomato" />
  <SiBell title="Notifications" />
</template>
```

Or via the namespace form:

```js
import * as Icons from '@sargamicons/vue';
// <component :is="Icons.Line.SiHeart" />
```

## Props

Every icon accepts all SVG attributes plus an optional `title` for
accessibility. `width`/`height` default to `1em` and `color` defaults to
`currentColor`, so icons inherit font size and text color.

## License

MIT © [@planetabhi](https://planetabhi.com/)
