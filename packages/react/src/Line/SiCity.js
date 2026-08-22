import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCity = ({ title, titleId, ...props }, ref) => {
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
        d="M2 2v17.6A2.4 2.4 0 0 0 4.4 22h2.2A2.4 2.4 0 0 0 9 19.6V2H1m15 3v14.6a2.4 2.4 0 0 1-2.4 2.4H6.4m7 0h7.2a2.4 2.4 0 0 0 2.4-2.4V5h-8m-6 6h7M5 6h1M5 9h1m-1 3h1m-1 3h1m-1 3h1m13-6h1m-1-3h1m-1 6h1m-1 3h1m-8 0h1m-1-3h1"
      />
    </svg>
  );
};
SvgSiCity.displayName = "SvgSiCity";
const ForwardRef = forwardRef(SvgSiCity);
const Memo = memo(ForwardRef);
export default Memo;
