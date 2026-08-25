<script>
  const inner = "<path fill=\"currentColor\" fill-opacity=\".16\" d=\"M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M12 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/>";
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
