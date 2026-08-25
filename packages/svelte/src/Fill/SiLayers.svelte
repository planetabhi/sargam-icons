<script>
  const inner = "<path fill=\"currentColor\" d=\"M20.515 15.126a1 1 0 1 1 .97 1.748l-9 5a1 1 0 0 1-.97 0l-9-5a1 1 0 1 1 .97-1.748L12 19.856zm0-4a1 1 0 1 1 .97 1.748l-9 5a1 1 0 0 1-.97 0l-9-5a1 1 0 1 1 .97-1.748L12 15.856zM11.63 2.07a1 1 0 0 1 .854.056l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.97 0l-9-5a1 1 0 0 1 0-1.748l9-5z\"/>";
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
