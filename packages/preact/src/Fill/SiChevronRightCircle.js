import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiChevronRightCircle = ({ title, titleId, ...props }, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M11.207 7.293a1 1 0 0 0-1.414 1.414L13.086 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiChevronRightCircle.displayName = "SvgSiChevronRightCircle";
const ForwardRef = forwardRef(SvgSiChevronRightCircle);
const Memo = memo(ForwardRef);
export default Memo;
