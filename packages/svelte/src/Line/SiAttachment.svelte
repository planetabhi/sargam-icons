<script>
  const inner = "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"m19.605 10.48.137-.136a4.31 4.31 0 0 0 0-6.086 4.307 4.307 0 0 0-6.086 0l-9.398 9.398a4.307 4.307 0 0 0 0 6.086 4.31 4.31 0 0 0 6.086 0l6.351-6.356a2.35 2.35 0 0 0-1.66-4.008 2.35 2.35 0 0 0-1.66.688l-6.657 6.656\"/>";
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
