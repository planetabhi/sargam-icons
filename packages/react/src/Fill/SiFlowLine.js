import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiFlowLine = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M13 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM12 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiFlowLine.displayName = "SvgSiFlowLine";
const ForwardRef = forwardRef(SvgSiFlowLine);
const Memo = memo(ForwardRef);
export default Memo;
