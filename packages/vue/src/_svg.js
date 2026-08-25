import { h } from 'vue';

const escapeTitle = (t) =>
  String(t).replace(/[<>&]/g, (s) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[s]));

export function createIcon(name, viewBox, inner) {
  const Icon = (_props, ctx) => {
    const attrs = (ctx && ctx.attrs) || {};
    const { title, ...rest } = attrs;
    return h('svg', {
      width: '1em',
      height: '1em',
      fill: 'none',
      viewBox,
      'aria-hidden': title == null ? 'true' : null,
      ...rest,
      innerHTML: (title == null ? '' : `<title>${escapeTitle(title)}</title>`) + inner,
    });
  };
  Icon.displayName = name;
  Icon.inheritAttrs = false;
  return Icon;
}
