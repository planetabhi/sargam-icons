<script>
  const inner = "<path fill=\"currentColor\" fill-opacity=\".16\" d=\"M12 2c5.523 0 10 4.477 10 10H2C2 6.477 6.477 2 12 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M17.217 19.39c.044 1.391-1.087 2.565-2.521 2.609h-.088c-1.39.043-2.565-1.087-2.608-2.522V12m10 0c0-5.523-4.477-10-10-10S2 6.477 2 12z\"/>";
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
