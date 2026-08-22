import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiExpandLessCircle = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.293.793-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L12 10.914l3.293 3.293a1 1 0 0 0 1.414-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiExpandLessCircle.displayName = "SvgSiExpandLessCircle";
const ForwardRef = forwardRef(SvgSiExpandLessCircle);
const Memo = memo(ForwardRef);
export default Memo;
