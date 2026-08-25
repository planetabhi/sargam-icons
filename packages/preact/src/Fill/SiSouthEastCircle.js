import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSouthEastCircle = ({ title, titleId, ...props }, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.707 7.293a1 1 0 0 0-1.414 1.414L13.586 15H11a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v2.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSouthEastCircle.displayName = "SvgSiSouthEastCircle";
const ForwardRef = forwardRef(SvgSiSouthEastCircle);
const Memo = memo(ForwardRef);
export default Memo;
