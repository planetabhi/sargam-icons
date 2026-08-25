<script>
  const inner = "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M11.293 9.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414z\" clip-rule=\"evenodd\"/>";
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
