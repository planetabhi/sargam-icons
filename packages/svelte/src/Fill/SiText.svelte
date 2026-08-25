<script>
  const inner = "<path fill=\"currentColor\" d=\"M19 7V4h-6v16h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V4H5v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0\"/>";
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
