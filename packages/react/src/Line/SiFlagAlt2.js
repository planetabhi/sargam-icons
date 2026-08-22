import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiFlagAlt2 = ({ title, titleId, ...props }, ref) => {
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
        d="m11 21-3.387-7.198m0 0L3 4h18l-5 5 5 5z"
      />
    </svg>
  );
};
SvgSiFlagAlt2.displayName = "SvgSiFlagAlt2";
const ForwardRef = forwardRef(SvgSiFlagAlt2);
const Memo = memo(ForwardRef);
export default Memo;
