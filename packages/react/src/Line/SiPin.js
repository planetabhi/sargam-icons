import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiPin = ({ title, titleId, ...props }, ref) => {
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
        d="M17.632 4.809c3.15 3.098 3.15 8.056.042 11.113L12.003 21.5 6.33 15.922a7.74 7.74 0 0 1 0-11.072l.042-.041a8.017 8.017 0 0 1 11.259 0m0 0q-.063-.063 0 0M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
SvgSiPin.displayName = "SvgSiPin";
const ForwardRef = forwardRef(SvgSiPin);
const Memo = memo(ForwardRef);
export default Memo;
