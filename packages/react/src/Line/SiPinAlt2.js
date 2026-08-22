import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiPinAlt2 = ({ title, titleId, ...props }, ref) => {
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
        d="M12 12.91A5.455 5.455 0 1 0 12 2a5.455 5.455 0 0 0 0 10.91m0 0v5.454m3.636-1.632c3.725.396 6.364 1.384 6.364 2.54C22 20.78 17.523 22 12 22S2 20.78 2 19.273c0-1.157 2.64-2.145 6.364-2.541"
      />
    </svg>
  );
};
SvgSiPinAlt2.displayName = "SvgSiPinAlt2";
const ForwardRef = forwardRef(SvgSiPinAlt2);
const Memo = memo(ForwardRef);
export default Memo;
