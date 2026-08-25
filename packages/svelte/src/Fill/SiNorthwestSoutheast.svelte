<script>
  const inner = "<path fill=\"currentColor\" d=\"M4.636 11.293V5.636a1 1 0 0 1 1-1h5.657a1 1 0 0 1 0 2H8.05l9.313 9.314v-3.243a1 1 0 0 1 2 0v5.656a1 1 0 0 1-1 1h-5.656a1 1 0 1 1 0-2h3.242L6.637 8.05v3.243a1 1 0 0 1-2 0\"/>";
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
