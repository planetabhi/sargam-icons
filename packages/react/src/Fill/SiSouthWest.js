import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSouthWest = ({ title, titleId, ...props }, ref) => {
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
        d="M16.707 7.293a1 1 0 0 1 0 1.414L10.414 15H13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v2.586l6.293-6.293a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSouthWest.displayName = "SvgSiSouthWest";
const ForwardRef = forwardRef(SvgSiSouthWest);
const Memo = memo(ForwardRef);
export default Memo;
