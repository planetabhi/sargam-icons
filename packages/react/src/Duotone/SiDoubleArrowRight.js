import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiDoubleArrowRight = ({ title, titleId, ...props }, ref) => {
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
        d="m13 16 4-4-4-4m-6 8 4-4-4-4"
      />
    </svg>
  );
};
SvgSiDoubleArrowRight.displayName = "SvgSiDoubleArrowRight";
const ForwardRef = forwardRef(SvgSiDoubleArrowRight);
const Memo = memo(ForwardRef);
export default Memo;
