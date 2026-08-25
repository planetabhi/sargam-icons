import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiFlowTree = ({ title, titleId, ...props }, ref) => {
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
        d="M5 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0m8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M13 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 0 1-2 2.825V11h4.333C19.366 11 21 12.68 21 14.707v2.467A2.998 2.998 0 0 1 20 23a3 3 0 0 1-1-5.826v-2.467c0-.95-.767-1.707-1.667-1.707H13v4.174A2.998 2.998 0 0 1 12 23a3 3 0 0 1-1-5.826V13H6.667C5.767 13 5 13.757 5 14.707v2.467A2.998 2.998 0 0 1 4 23a3 3 0 0 1-1-5.826v-2.467C3 12.68 4.634 11 6.667 11H11V6.825A2.998 2.998 0 0 1 12 1a3 3 0 0 1 3 3"
      />
    </svg>
  );
};
SvgSiFlowTree.displayName = "SvgSiFlowTree";
const ForwardRef = forwardRef(SvgSiFlowTree);
const Memo = memo(ForwardRef);
export default Memo;
