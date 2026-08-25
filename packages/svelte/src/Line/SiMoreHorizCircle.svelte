<script>
  const inner = "<path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\"/>";
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
