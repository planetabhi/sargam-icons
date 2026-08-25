import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiLeftDown = ({ title, titleId, ...props }, ref) => {
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
        d="M9 19V9.4A4.4 4.4 0 0 1 13.4 5H19M9 19l-4-4m4 4 4-4"
      />
    </svg>
  );
};
SvgSiLeftDown.displayName = "SvgSiLeftDown";
const ForwardRef = forwardRef(SvgSiLeftDown);
const Memo = memo(ForwardRef);
export default Memo;
