<script>
  const inner = "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8.4 7C7.622 7 7 7.622 7 8.4v6.2c0 .778.622 1.4 1.4 1.4H9a1 1 0 1 1 0 2h-.6A3.394 3.394 0 0 1 5 14.6V8.4C5 6.518 6.518 5 8.4 5h6.2C16.482 5 18 6.518 18 8.4V9a1 1 0 1 1-2 0v-.6c0-.778-.622-1.4-1.4-1.4zm.893 2.293a1 1 0 0 1 1.414 0L17 15.586V14a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586l-6.293-6.293a1 1 0 0 1 0-1.414\" clip-rule=\"evenodd\"/>";
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
