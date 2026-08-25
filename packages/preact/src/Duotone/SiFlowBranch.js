import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiFlowBranch = ({ title, titleId, ...props }, ref) => {
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
        d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6m0 12v-2.692c0-1.693 1.31-3.077 2.91-3.077h4.18c1.6 0 2.91-1.385 2.91-3.077V6M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
      <path
        fill="currentColor"
        fillOpacity={0.16}
        d="M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M17 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </svg>
  );
};
SvgSiFlowBranch.displayName = "SvgSiFlowBranch";
const ForwardRef = forwardRef(SvgSiFlowBranch);
const Memo = memo(ForwardRef);
export default Memo;
