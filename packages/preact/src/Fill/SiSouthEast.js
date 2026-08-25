import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSouthEast = ({ title, titleId, ...props }, ref) => {
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
        d="M7.293 7.293a1 1 0 0 1 1.414 0L15 13.586V11a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.586L7.293 8.707a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSouthEast.displayName = "SvgSiSouthEast";
const ForwardRef = forwardRef(SvgSiSouthEast);
const Memo = memo(ForwardRef);
export default Memo;
