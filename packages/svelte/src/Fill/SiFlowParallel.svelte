<script>
  const inner = "<path fill=\"currentColor\" d=\"M8 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-8 0a3 3 0 0 1-2 2.825v10.349A2.998 2.998 0 0 1 7 23a3 3 0 0 1-1-5.826V6.825A2.998 2.998 0 0 1 7 1a3 3 0 0 1 3 3m10 0a3 3 0 0 1-2 2.825v10.349A2.998 2.998 0 0 1 17 23a3 3 0 0 1-1-5.826V6.825A2.998 2.998 0 0 1 17 1a3 3 0 0 1 3 3\"/>";
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
