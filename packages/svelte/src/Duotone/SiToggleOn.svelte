<script>
  const inner = "<path fill=\"currentColor\" fill-opacity=\".16\" fill-rule=\"evenodd\" d=\"M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M17 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\"/>";
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
