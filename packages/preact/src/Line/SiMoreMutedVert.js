import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMoreMutedVert = ({ title, titleId, ...props }, ref) => {
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
        d="M12 12h1m-1 6h1M12 6h1"
      />
    </svg>
  );
};
SvgSiMoreMutedVert.displayName = "SvgSiMoreMutedVert";
const ForwardRef = forwardRef(SvgSiMoreMutedVert);
const Memo = memo(ForwardRef);
export default Memo;
