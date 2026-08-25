<script>
  const inner = "<path fill=\"currentColor\" d=\"M13 2a1 1 0 1 0-2 0v1h2zM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M13 3.055V5a1 1 0 1 1-2 0V3.055A9.004 9.004 0 0 0 3.055 11H5a1 1 0 1 1 0 2H3.055A9.004 9.004 0 0 0 11 20.945V19a1 1 0 1 1 2 0v1.945A9.004 9.004 0 0 0 20.945 13H19a1 1 0 1 1 0-2h1.945A9.004 9.004 0 0 0 13 3.055M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" d=\"M21 11v2h1a1 1 0 1 0 0-2zM13 21h-2v1a1 1 0 1 0 2 0zM3 13v-2H2a1 1 0 1 0 0 2z\"/>";
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
