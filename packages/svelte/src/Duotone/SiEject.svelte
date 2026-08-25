<script>
  const inner = "<path fill=\"currentColor\" fill-opacity=\".16\" d=\"m5 13 7-10 7 10z\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"m5 13 7-10 7 10zM5 17.8v2.4a.8.8 0 0 0 .8.8h12.4a.8.8 0 0 0 .8-.8v-2.4a.8.8 0 0 0-.8-.8H5.8a.8.8 0 0 0-.8.8Z\"/>";
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
