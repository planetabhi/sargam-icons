<script>
  const inner = "<path fill=\"currentColor\" d=\"M19.425 4.575a2.5 2.5 0 0 0-3.536 0l-1.06 1.061 3.535 3.536 1.06-1.061a2.5 2.5 0 0 0 0-3.536M14.121 6.343l3.536 3.536-8.839 8.838a.5.5 0 0 1-.255.137l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.536a.5.5 0 0 1 .137-.255z\"/>";
  let { title, ...rest } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  fill="none"
  viewBox="0 0 24 24"
  aria-hidden={title ? undefined : 'true'}
  {...rest}
>
  {#if title}<title>{title}</title>{/if}
  {@html inner}
</svg>
