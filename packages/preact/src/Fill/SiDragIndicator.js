import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiDragIndicator = ({ title, titleId, ...props }, ref) => {
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
        d="M15 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-6-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      />
    </svg>
  );
};
SvgSiDragIndicator.displayName = "SvgSiDragIndicator";
const ForwardRef = forwardRef(SvgSiDragIndicator);
const Memo = memo(ForwardRef);
export default Memo;
