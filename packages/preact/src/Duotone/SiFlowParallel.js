import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiFlowParallel = ({ title, titleId, ...props }, ref) => {
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
        fillOpacity={0.16}
        d="M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M17 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </svg>
  );
};
SvgSiFlowParallel.displayName = "SvgSiFlowParallel";
const ForwardRef = forwardRef(SvgSiFlowParallel);
const Memo = memo(ForwardRef);
export default Memo;
