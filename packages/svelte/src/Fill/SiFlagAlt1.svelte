<script>
  const inner = "<path fill=\"currentColor\" d=\"M22 10.702C22 12.56 20.43 14 18.6 14H4.2q-.1-.001-.2-.01V20a1 1 0 1 1-2 0V6.298C2 4.44 3.57 3 5.4 3h14.4c1.17 0 2.2.925 2.2 2.15z\"/>";
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
