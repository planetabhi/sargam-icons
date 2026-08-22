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
        fill="currentColor"
        fillOpacity={0.16}
        d="M18.25 16c0-2.297-1.984-4.25-4.432-4.25H7.75v8.5h6.068c2.448 0 4.432-1.953 4.432-4.25m-3-9c0-1.755-1.52-3.25-3.5-3.25h-4v6.5h4c1.98 0 3.5-1.495 3.5-3.25"
      />
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
