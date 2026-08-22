import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiKnob = ({ title, titleId, ...props }, ref) => {
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
        d="M16.95 10.05 12 15m7 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0M13 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
};
SvgSiKnob.displayName = "SvgSiKnob";
const ForwardRef = forwardRef(SvgSiKnob);
const Memo = memo(ForwardRef);
export default Memo;
