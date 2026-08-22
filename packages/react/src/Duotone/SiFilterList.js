import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiFilterList = ({ title, titleId, ...props }, ref) => {
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
        d="M6 12h12M4 8h16M8 16h8"
      />
    </svg>
  );
};
SvgSiFilterList.displayName = "SvgSiFilterList";
const ForwardRef = forwardRef(SvgSiFilterList);
const Memo = memo(ForwardRef);
export default Memo;
