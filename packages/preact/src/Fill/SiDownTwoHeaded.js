import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiDownTwoHeaded = ({ title, titleId, ...props }, ref) => {
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
        d="M11 4a1 1 0 1 1 2 0v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13 15.414v2.172l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 17.586v-2.172l-3.707-3.707a1 1 0 1 1 1.414-1.414L11 12.586z"
      />
    </svg>
  );
};
SvgSiDownTwoHeaded.displayName = "SvgSiDownTwoHeaded";
const ForwardRef = forwardRef(SvgSiDownTwoHeaded);
const Memo = memo(ForwardRef);
export default Memo;
