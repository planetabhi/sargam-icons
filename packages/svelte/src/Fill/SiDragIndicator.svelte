<script>
  const inner = "<path fill=\"currentColor\" d=\"M15 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4M15 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M15 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4\"/>";
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
