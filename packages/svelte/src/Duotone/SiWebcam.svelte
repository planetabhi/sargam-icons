<script>
  const inner = "<path fill=\"currentColor\" fill-opacity=\".16\" fill-rule=\"evenodd\" d=\"M20 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 0v4m-6 0h12m-4-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0\"/>";
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
