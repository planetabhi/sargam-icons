<script>
  const inner = "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M16.707 7.293a1 1 0 0 1 0 1.414L10.414 15H13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v2.586l6.293-6.293a1 1 0 0 1 1.414 0\" clip-rule=\"evenodd\"/>";
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
