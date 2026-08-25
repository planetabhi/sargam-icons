import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiTarget = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m6-10a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiTarget.displayName = "SvgSiTarget";
const ForwardRef = forwardRef(SvgSiTarget);
const Memo = memo(ForwardRef);
export default Memo;
