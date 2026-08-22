import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiBriefcases = ({ title, titleId, ...props }, ref) => {
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
        d="M19 22H7.4C4.42 22 2 19.58 2 16.6V11m15 8V3.8a.8.8 0 0 0-.8-.8h-4.4a.8.8 0 0 0-.8.8V19M7.4 6h13.2A2.4 2.4 0 0 1 23 8.4v8.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V8.4A2.4 2.4 0 0 1 7.4 6"
      />
    </svg>
  );
};
SvgSiBriefcases.displayName = "SvgSiBriefcases";
const ForwardRef = forwardRef(SvgSiBriefcases);
const Memo = memo(ForwardRef);
export default Memo;
