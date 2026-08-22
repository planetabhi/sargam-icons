import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSouthWestEscape = ({ title, titleId, ...props }, ref) => {
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
        d="M15 17h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6H9.4C8.07 6 7 7.07 7 8.4V9m7 1-8 8m0 0h4m-4 0v-4"
      />
    </svg>
  );
};
SvgSiSouthWestEscape.displayName = "SvgSiSouthWestEscape";
const ForwardRef = forwardRef(SvgSiSouthWestEscape);
const Memo = memo(ForwardRef);
export default Memo;
