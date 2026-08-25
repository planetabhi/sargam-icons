import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiArrowRight = ({ title, titleId, ...props }, ref) => {
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
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m14 16 4-4m0 0-4-4m4 4H6"
      />
    </svg>
  );
};
SvgSiArrowRight.displayName = "SvgSiArrowRight";
const ForwardRef = forwardRef(SvgSiArrowRight);
const Memo = memo(ForwardRef);
export default Memo;
