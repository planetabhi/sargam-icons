import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiReorder = ({ title, titleId, ...props }, ref) => {
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
        d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zM3 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
SvgSiReorder.displayName = "SvgSiReorder";
const ForwardRef = forwardRef(SvgSiReorder);
const Memo = memo(ForwardRef);
export default Memo;
