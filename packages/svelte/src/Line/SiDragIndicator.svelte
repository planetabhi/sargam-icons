<script>
  const inner = "<path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\"/>";
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
