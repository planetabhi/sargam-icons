<script>
  const inner = "<path fill=\"currentColor\" fill-opacity=\".16\" d=\"M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6m0 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8 14H4m10 2a2 2 0 1 1-4 0\"/>";
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
