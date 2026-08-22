import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiFlowCascade = ({ title, titleId, ...props }, ref) => {
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
        d="M18 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 0 1-2 2.825V9c0 1.706 1.303 3 2.765 3h3.409A2.998 2.998 0 0 1 20 13a3 3 0 0 1-5.826 1h-3.41c-1.04 0-1.99-.35-2.764-.933V16c0 1.706 1.303 3 2.765 3h3.409A2.998 2.998 0 0 1 20 20a3 3 0 0 1-5.826 1h-3.41C8.087 21 6 18.694 6 16V6.825A2.998 2.998 0 0 1 7 1a3 3 0 0 1 3 3"
      />
    </svg>
  );
};
SvgSiFlowCascade.displayName = "SvgSiFlowCascade";
const ForwardRef = forwardRef(SvgSiFlowCascade);
const Memo = memo(ForwardRef);
export default Memo;
