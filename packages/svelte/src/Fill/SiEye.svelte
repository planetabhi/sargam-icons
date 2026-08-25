<script>
  const inner = "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 5c6.074 0 11 7 11 7-.001.002-4.927 7-11 7S1 12 1 12s4.926-7 11-7m0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8\" clip-rule=\"evenodd\"/>";
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
