import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiUnfoldMore = ({ title, titleId, ...props }, ref) => {
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
        d="m9 15 3 3 3-3M9 9l3-3 3 3"
      />
    </svg>
  );
};
SvgSiUnfoldMore.displayName = "SvgSiUnfoldMore";
const ForwardRef = forwardRef(SvgSiUnfoldMore);
const Memo = memo(ForwardRef);
export default Memo;
