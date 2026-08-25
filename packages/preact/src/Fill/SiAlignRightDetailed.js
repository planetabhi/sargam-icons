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
        d="M17 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6h-3.8a1.6 1.6 0 0 0-1.6 1.6v1.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6m0-9V6.6A1.6 1.6 0 0 0 15.4 5H3.6A1.6 1.6 0 0 0 2 6.6v1.8A1.6 1.6 0 0 0 3.6 10h11.8A1.6 1.6 0 0 0 17 8.4"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAlignRightDetailed.displayName = "SvgSiAlignRightDetailed";
const ForwardRef = forwardRef(SvgSiAlignRightDetailed);
const Memo = memo(ForwardRef);
export default Memo;
