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
        fill="currentColor"
        d="M12 7h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2m1 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2m0 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2"
      />
    </svg>
  );
};
SvgSiMoreMutedVert.displayName = "SvgSiMoreMutedVert";
const ForwardRef = forwardRef(SvgSiMoreMutedVert);
const Memo = memo(ForwardRef);
export default Memo;
