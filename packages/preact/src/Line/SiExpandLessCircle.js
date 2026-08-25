import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiExpandLessCircle = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 13.5 4-4 4 4m6-1.5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      />
    </svg>
  );
};
SvgSiExpandLessCircle.displayName = "SvgSiExpandLessCircle";
const ForwardRef = forwardRef(SvgSiExpandLessCircle);
const Memo = memo(ForwardRef);
export default Memo;
