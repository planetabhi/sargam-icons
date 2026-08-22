import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiDownRight = ({ title, titleId, ...props }, ref) => {
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
        d="M19 15H9.4A4.4 4.4 0 0 1 5 10.6V5m14 10-4 4m4-4-4-4"
      />
    </svg>
  );
};
SvgSiDownRight.displayName = "SvgSiDownRight";
const ForwardRef = forwardRef(SvgSiDownRight);
const Memo = memo(ForwardRef);
export default Memo;
