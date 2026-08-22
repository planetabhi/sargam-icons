import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNorthWestEscape = ({ title, titleId, ...props }, ref) => {
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
        strokeWidth={1.5}
        d="M15 7h.6C16.93 7 18 8.07 18 9.4v6.2c0 1.33-1.07 2.4-2.4 2.4H9.4C8.07 18 7 16.93 7 15.6V15m7-1L6 6m0 0h4M6 6v4"
      />
    </svg>
  );
};
SvgSiNorthWestEscape.displayName = "SvgSiNorthWestEscape";
const ForwardRef = forwardRef(SvgSiNorthWestEscape);
const Memo = memo(ForwardRef);
export default Memo;
