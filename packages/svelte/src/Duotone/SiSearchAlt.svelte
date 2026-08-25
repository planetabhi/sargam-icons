<script>
  const inner = "<path fill=\"currentColor\" fill-opacity=\".16\" d=\"M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"m21 21-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0\"/>";
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
