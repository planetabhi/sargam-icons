import h from 'solid-js/h';

const escapeTitle = (t) =>
  String(t).replace(/[<>&]/g, (s) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[s]));

export function createIcon(viewBox, inner) {
  return (props) => {
    const p = props || {};
    const { title, ...rest } = p;
    return h('svg', {
      width: '1em',
      height: '1em',
      fill: 'none',
      viewBox,
      'aria-hidden': title == null ? 'true' : undefined,
      innerHTML: (title == null ? '' : `<title>${escapeTitle(title)}</title>`) + inner,
      ...rest,
    });
  };
}
