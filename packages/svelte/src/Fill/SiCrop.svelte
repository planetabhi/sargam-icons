<script>
  const inner = "<path fill=\"currentColor\" d=\"M17 22v-3H6a1 1 0 0 1-1-1V7H2a1 1 0 0 1 0-2h3V2a1 1 0 0 1 2 0v3h11a1 1 0 0 1 1 1v11h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0M7 17h10V7H7z\"/>";
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
