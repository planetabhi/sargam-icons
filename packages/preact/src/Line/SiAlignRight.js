import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAlignRight = ({ title, titleId, ...props }, ref) => {
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
        d="M9 10h12M3 6h18M3 14h18M9 18h12"
      />
    </svg>
  );
};
SvgSiAlignRight.displayName = "SvgSiAlignRight";
const ForwardRef = forwardRef(SvgSiAlignRight);
const Memo = memo(ForwardRef);
export default Memo;
