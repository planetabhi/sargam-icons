<script>
  const inner = "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.672 4.095a9.017 9.017 0 0 1 12.627-.03h.002l.032.03c3.545 3.487 3.552 9.088.042 12.54l-5.671 5.578a1 1 0 0 1-1.403 0L5.63 16.635a8.74 8.74 0 0 1 0-12.499zM12 6.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6\" clip-rule=\"evenodd\"/>";
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
