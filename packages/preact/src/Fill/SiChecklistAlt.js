import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiChecklistAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M22.707 6.707a1 1 0 0 0-1.414-1.414L18 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM2 7a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm20.707 6.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L18 16.586l3.293-3.293a1 1 0 0 1 1.414 0M2 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
SvgSiChecklistAlt.displayName = "SvgSiChecklistAlt";
const ForwardRef = forwardRef(SvgSiChecklistAlt);
const Memo = memo(ForwardRef);
export default Memo;
