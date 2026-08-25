import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAlignRightDetailed = ({ title, titleId, ...props }, ref) => {
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
        d="M18 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6h-4.8a1.6 1.6 0 0 0-1.6 1.6v1.8a1.6 1.6 0 0 0 1.6 1.6h4.8a1.6 1.6 0 0 0 1.6-1.6m0-9V6.6A1.6 1.6 0 0 0 16.4 5H3.6A1.6 1.6 0 0 0 2 6.6v1.8A1.6 1.6 0 0 0 3.6 10h12.8A1.6 1.6 0 0 0 18 8.4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M22 2v20m-4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-1.8a1.6 1.6 0 0 1 1.6-1.6h4.8a1.6 1.6 0 0 1 1.6 1.6m0-9v1.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 8.4V6.6A1.6 1.6 0 0 1 3.6 5h12.8A1.6 1.6 0 0 1 18 6.6"
      />
    </svg>
  );
};
SvgSiAlignRightDetailed.displayName = "SvgSiAlignRightDetailed";
const ForwardRef = forwardRef(SvgSiAlignRightDetailed);
const Memo = memo(ForwardRef);
export default Memo;
