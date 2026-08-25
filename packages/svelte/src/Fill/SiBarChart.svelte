<script>
  const inner = "<path fill=\"currentColor\" d=\"M13.4 2A1.6 1.6 0 0 1 15 3.6V21h1v-7.4a1.6 1.6 0 0 1 1.6-1.6h2.8a1.6 1.6 0 0 1 1.6 1.6V21a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2V8.6A1.6 1.6 0 0 1 3.6 7h2.8A1.6 1.6 0 0 1 8 8.6V21h1V3.6A1.6 1.6 0 0 1 10.6 2z\"/>";
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
