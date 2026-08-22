import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiInsights = ({ title, titleId, ...props }, ref) => {
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
        d="M21 21H3.8a.8.8 0 0 1-.8-.8V3m3 11 4-4 4 4 7-7"
      />
    </svg>
  );
};
SvgSiInsights.displayName = "SvgSiInsights";
const ForwardRef = forwardRef(SvgSiInsights);
const Memo = memo(ForwardRef);
export default Memo;
