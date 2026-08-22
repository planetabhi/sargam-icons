import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiFlag = ({ title, titleId, ...props }, ref) => {
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
        d="M3 20V4a1 1 0 0 1 1.333-.943l17 6a1 1 0 0 1-.05 1.902L5 15.747V20a1 1 0 1 1-2 0"
      />
    </svg>
  );
};
SvgSiFlag.displayName = "SvgSiFlag";
const ForwardRef = forwardRef(SvgSiFlag);
const Memo = memo(ForwardRef);
export default Memo;
