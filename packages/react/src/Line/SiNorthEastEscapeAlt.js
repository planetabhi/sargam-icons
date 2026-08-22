import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNorthEastEscapeAlt = ({ title, titleId, ...props }, ref) => {
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
        d="m10 14 8-8m0 0v4m0-4h-4M9 9h-.6C7.07 9 6 10.07 6 11.4v4.2C6 16.93 7.07 18 8.4 18h4.2c1.33 0 2.4-1.07 2.4-2.4V15"
      />
    </svg>
  );
};
SvgSiNorthEastEscapeAlt.displayName = "SvgSiNorthEastEscapeAlt";
const ForwardRef = forwardRef(SvgSiNorthEastEscapeAlt);
const Memo = memo(ForwardRef);
export default Memo;
