<script>
  const inner = "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M5 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m5 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4\" clip-rule=\"evenodd\"/>";
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
