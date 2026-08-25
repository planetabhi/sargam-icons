<script>
  const inner = "<path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"m14.828 6.343 2.829 2.829m1.414-1.415L8.464 18.364l-3.535.707.707-3.536L16.243 4.93a2 2 0 0 1 2.828 2.828Z\"/>";
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
