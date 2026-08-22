import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSortAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M4 10h12M4 6h16M4 14h8m-8 4h4"
      />
    </svg>
  );
};
SvgSiSortAlt.displayName = "SvgSiSortAlt";
const ForwardRef = forwardRef(SvgSiSortAlt);
const Memo = memo(ForwardRef);
export default Memo;
