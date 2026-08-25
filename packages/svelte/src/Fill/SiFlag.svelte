<script>
  const inner = "<path fill=\"currentColor\" d=\"M3 20V4a1 1 0 0 1 1.333-.943l17 6a1 1 0 0 1-.05 1.902L5 15.747V20a1 1 0 1 1-2 0\"/>";
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
