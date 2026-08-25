import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiClockAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9-6a1 1 0 1 0-2 0v5.844c0 .55.375 1.03.909 1.164l3.848.962a1 1 0 1 0 .486-1.94L13 11.22z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiClockAlt.displayName = "SvgSiClockAlt";
const ForwardRef = forwardRef(SvgSiClockAlt);
const Memo = memo(ForwardRef);
export default Memo;
