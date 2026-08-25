<script>
  const inner = "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9 17h-.6C7.07 17 6 15.93 6 14.6V8.4C6 7.07 7.07 6 8.4 6h6.2C15.93 6 17 7.07 17 8.4V9m-7 1 8 8m0 0h-4m4 0v-4\"/>";
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
