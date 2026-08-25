import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiZoomIn = ({ title, titleId, ...props }, ref) => {
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
        d="m21 21-4-4m-9-6h6m-3 3V8m8 3a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      />
    </svg>
  );
};
SvgSiZoomIn.displayName = "SvgSiZoomIn";
const ForwardRef = forwardRef(SvgSiZoomIn);
const Memo = memo(ForwardRef);
export default Memo;
