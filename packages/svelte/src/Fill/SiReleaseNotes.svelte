<script>
  const inner = "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M17.6 1A2.4 2.4 0 0 1 20 3.4v17.2a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 20.6V3.4A2.4 2.4 0 0 1 6.4 1zm-1.893 12.293a1 1 0 0 0-1.414 0L11 16.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414m0-8a1 1 0 0 0-1.414 0L11 8.586 9.707 7.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414\" clip-rule=\"evenodd\"/>";
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
