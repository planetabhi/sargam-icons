import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMoreMutedHorizCircle = ({ title, titleId, ...props }, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8 11a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMoreMutedHorizCircle.displayName = "SvgSiMoreMutedHorizCircle";
const ForwardRef = forwardRef(SvgSiMoreMutedHorizCircle);
const Memo = memo(ForwardRef);
export default Memo;
