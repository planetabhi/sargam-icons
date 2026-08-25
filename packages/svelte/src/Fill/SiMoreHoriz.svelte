<script>
  const inner = "<path fill=\"currentColor\" d=\"M3 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4\"/>";
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
