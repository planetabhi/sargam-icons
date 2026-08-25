import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiDragIndicatorAlt = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10h1m-1 4h1m-1-8h1m-7 4h1m-1 4h1m5 4h1m-7 0h1M9 6h1"
      />
    </svg>
  );
};
SvgSiDragIndicatorAlt.displayName = "SvgSiDragIndicatorAlt";
const ForwardRef = forwardRef(SvgSiDragIndicatorAlt);
const Memo = memo(ForwardRef);
export default Memo;
