<script>
  const inner = "<path fill=\"currentColor\" d=\"M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zM4 9a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zM3 14a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M4 17a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z\"/>";
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
