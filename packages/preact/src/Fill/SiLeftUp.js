import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiLeftUp = ({ title, titleId, ...props }, ref) => {
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
        d="M9.707 4.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L8 7.414V14.6a5.4 5.4 0 0 0 5.4 5.4H19a1 1 0 1 0 0-2h-5.6a3.4 3.4 0 0 1-3.4-3.4V7.414l2.293 2.293a1 1 0 0 0 1.414-1.414z"
      />
    </svg>
  );
};
SvgSiLeftUp.displayName = "SvgSiLeftUp";
const ForwardRef = forwardRef(SvgSiLeftUp);
const Memo = memo(ForwardRef);
export default Memo;
