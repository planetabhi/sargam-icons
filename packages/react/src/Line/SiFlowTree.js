import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0v-3.293C20 13.218 18.8 12 17.333 12H6.667C5.2 12 4 13.218 4 14.707V18m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      />
    </svg>
  );
};
SvgSiFlowTree.displayName = "SvgSiFlowTree";
const ForwardRef = forwardRef(SvgSiFlowTree);
const Memo = memo(ForwardRef);
export default Memo;
