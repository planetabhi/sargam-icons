<script>
  const inner = "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M16.95 10.05 12 15m7 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0M13 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0\"/>";
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
