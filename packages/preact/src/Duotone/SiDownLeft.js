import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiDownLeft = ({ title, titleId, ...props }, ref) => {
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
        d="M5 15h9.6a4.4 4.4 0 0 0 4.4-4.4V5M5 15l4 4m-4-4 4-4"
      />
    </svg>
  );
};
SvgSiDownLeft.displayName = "SvgSiDownLeft";
const ForwardRef = forwardRef(SvgSiDownLeft);
const Memo = memo(ForwardRef);
export default Memo;
