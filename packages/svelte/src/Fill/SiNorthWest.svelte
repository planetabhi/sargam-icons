<script>
  const inner = "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9 10.414V13a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-2.586l6.293 6.293a1 1 0 1 1-1.414 1.414z\" clip-rule=\"evenodd\"/>";
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
