<script>
  const inner = "<path fill=\"currentColor\" d=\"M16 21c0-.64-.458-1-.818-1H8.818c-.36 0-.818.36-.818 1zm7-8a1 1 0 0 1-1 1h-9v4h2.182C16.822 18 18 19.44 18 21v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1c0-1.56 1.179-3 2.818-3H11v-4H2a1 1 0 0 1-1-1v-1C1 5.925 5.925 1 12 1s11 4.925 11 11z\"/>";
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
