import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAddCircle = ({ title, titleId, ...props }, ref) => {
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
        d="M8 12h8m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
      />
    </svg>
  );
};
SvgSiAddCircle.displayName = "SvgSiAddCircle";
const ForwardRef = forwardRef(SvgSiAddCircle);
const Memo = memo(ForwardRef);
export default Memo;
