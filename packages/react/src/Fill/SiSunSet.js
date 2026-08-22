import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSunSet = ({ title, titleId, ...props }, ref) => {
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
        d="M16 20a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM12 7c3.31 0 6 2.69 6 6a5.97 5.97 0 0 1-1.53 4H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h3.519A6 6 0 0 1 6 13c0-3.31 2.69-6 6-6m-9 5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm20 0a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM3.515 4.515a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3.515 5.929a1 1 0 0 1 0-1.414m15.556 0a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414zM12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
SvgSiSunSet.displayName = "SvgSiSunSet";
const ForwardRef = forwardRef(SvgSiSunSet);
const Memo = memo(ForwardRef);
export default Memo;
