<script>
  const inner = "<path fill=\"currentColor\" d=\"M7.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M20.75 21a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-4.6a3.15 3.15 0 0 1 3.15-3.15h11.2a3.15 3.15 0 0 1 3.15 3.15z\"/>";
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
