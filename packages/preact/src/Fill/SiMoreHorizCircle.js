import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMoreHorizCircle = ({ title, titleId, ...props }, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M5 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m5 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMoreHorizCircle.displayName = "SvgSiMoreHorizCircle";
const ForwardRef = forwardRef(SvgSiMoreHorizCircle);
const Memo = memo(ForwardRef);
export default Memo;
