<script>
  const inner = "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8 11a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1\" clip-rule=\"evenodd\"/>";
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
