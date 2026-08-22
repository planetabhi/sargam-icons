import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAlignLeft = ({ title, titleId, ...props }, ref) => {
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
        d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
SvgSiAlignLeft.displayName = "SvgSiAlignLeft";
const ForwardRef = forwardRef(SvgSiAlignLeft);
const Memo = memo(ForwardRef);
export default Memo;
