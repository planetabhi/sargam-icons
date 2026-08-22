import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiBold = ({ title, titleId, ...props }, ref) => {
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
        d="M7 3h4.75C14.1 3 16 4.788 16 7s-1.9 4-4.25 4H7h6.818C16.654 11 19 13.263 19 16s-2.346 5-5.182 5H7M7 3H5m2 0v18m0 0H5"
      />
    </svg>
  );
};
SvgSiBold.displayName = "SvgSiBold";
const ForwardRef = forwardRef(SvgSiBold);
const Memo = memo(ForwardRef);
export default Memo;
