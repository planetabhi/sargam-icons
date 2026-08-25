<script>
  const inner = "<path fill=\"currentColor\" d=\"M6.707 3.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zM17.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0M8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z\" clip-rule=\"evenodd\"/>";
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
