<script>
  const inner = "<path fill=\"currentColor\" fill-opacity=\".16\" d=\"m3 3 18 7.92-7.987 2.093L10.92 21z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"m3 3 18 7.92-7.987 2.093L10.92 21z\"/>";
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
