import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSouthWestCircle = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.293-3.293a1 1 0 0 0-1.414-1.414L9 13.586V11a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-2.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSouthWestCircle.displayName = "SvgSiSouthWestCircle";
const ForwardRef = forwardRef(SvgSiSouthWestCircle);
const Memo = memo(ForwardRef);
export default Memo;
