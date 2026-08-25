import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAlignBottomDetailed = ({ title, titleId, ...props }, ref) => {
  const generatedId = useId();
  const validTitleId = titleId || generatedId;
  const isTitlePresent = !!title;
  return (
    <svg
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden={!isTitlePresent}
      aria-labelledby={titleId}
      ref={ref}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        fillOpacity={0.16}
        d="M17.4 10h-1.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6m-9-8H6.6A1.6 1.6 0 0 0 5 3.6v12.8A1.6 1.6 0 0 0 6.6 18h1.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 8.4 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M2 22h20m-6.4-12h1.8a1.6 1.6 0 0 1 1.6 1.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6v-4.8a1.6 1.6 0 0 1 1.6-1.6m-9-8h1.8A1.6 1.6 0 0 1 10 3.6v12.8A1.6 1.6 0 0 1 8.4 18H6.6A1.6 1.6 0 0 1 5 16.4V3.6A1.6 1.6 0 0 1 6.6 2"
      />
    </svg>
  );
};
SvgSiAlignBottomDetailed.displayName = "SvgSiAlignBottomDetailed";
const ForwardRef = forwardRef(SvgSiAlignBottomDetailed);
const Memo = memo(ForwardRef);
export default Memo;
