<script>
  const inner = "<path fill=\"currentColor\" d=\"M12 7h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2M13 13h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2M13 19h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2\"/>";
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
