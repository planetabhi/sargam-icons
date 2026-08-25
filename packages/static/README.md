# @sargamicons/static

[Sargam Icons](https://sargamicons.com/) as framework-agnostic assets in three
styles (Line, Duotone, Fill): standalone SVGs, an SVG sprite, and a manifest.
Every icon uses `currentColor`, so it inherits text color.

## Install

```sh
bun add @sargamicons/static
# or: npm install @sargamicons/static
# or: pnpm add @sargamicons/static
# or: yarn add @sargamicons/static
```

## Contents

- `icons/<variant>/<slug>.svg`: one themeable SVG per icon per variant.
- `sprite.svg`: every icon as a `<symbol id="si-<variant>-<slug>">`.
- `manifest.json`: `{ "SiName": { base, slug, viewBox, variants } }`.

## Usage

Standalone file:

```html
<img src="node_modules/@sargamicons/static/icons/line/heart.svg" width="24" />
```

Inline with the sprite (themeable via `color`):

```html
<svg width="24" height="24" style="color: tomato">
  <use href="node_modules/@sargamicons/static/sprite.svg#si-fill-heart" />
</svg>
```

## License

MIT © [@planetabhi](https://planetabhi.com/)
