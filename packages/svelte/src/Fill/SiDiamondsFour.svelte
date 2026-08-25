<script>
  const inner = "<g fill=\"currentColor\" clip-path=\"url(#a)\"><path d=\"M13.839 1.11a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677zM6.768 8.182a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.677 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676zM13.839 15.253a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677zM20.91 8.182a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.677 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h24v24H0z\"/></clipPath></defs>";
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
