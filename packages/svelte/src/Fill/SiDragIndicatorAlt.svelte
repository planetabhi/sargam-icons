<script>
  const inner = "<path fill=\"currentColor\" d=\"M14 6a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M15 9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM15 13a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM9 9a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2zM8 14a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M15 17a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM8 18a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M9 5a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2z\"/>";
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
